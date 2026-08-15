// Informe imprimible de la sesión de medición 360: resumen por habitación con
// sus planos, tabla de mediciones, estadísticas de cantidades (superficie,
// perímetro, paredes, volumen — el "quantity takeoff" de magicplan) y bloque
// de método auditable (estilo CubiCasa). Se abre en una ventana y se imprime
// o guarda como PDF.

import { buildPlanSVG } from './plansvg.js'
import { fmtLength, fmtArea, fmtVolume, fmtValue } from './units.js'
import { SIA416_TYPES, DEFAULT_TYPE, sia416Breakdown, evaluateChecks } from './sia.js'

const esc = (s) =>
  String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))

/**
 * @param {{[photo:string]: Array}} store        mediciones por foto
 * @param {{[photo:string]: string}} roomNames   nombre de habitación por foto
 * @param {{unitSys?: string, roomTypes?: Object}} opts
 */
function buildReportHTML(store, roomNames = {}, opts = {}, autoPrint = true) {
  const u = opts.unitSys ?? 'm'
  const roomTypes = opts.roomTypes ?? {}
  const weights = opts.weights ?? {}
  const rooms = Object.entries(store).filter(([, ms]) => ms.length > 0)
  if (!rooms.length) return null

  let totalArea = 0
  let totalVolume = 0
  const sections = rooms.map(([photo, ms]) => {
    const name = roomNames[photo] || photo
    const areas = ms.filter((m) => m.mode === 'area')
    const heights = ms.filter((m) => m.mode === 'height')
    const roomArea = areas.reduce((s, m) => s + m.value, 0)
    const perimeter = areas.reduce((s, m) => s + (m.perimeter ?? 0), 0)
    const avgHeight = heights.length
      ? heights.reduce((s, m) => s + m.value, 0) / heights.length
      : null
    const wallArea = avgHeight != null && perimeter > 0 ? perimeter * avgHeight : null
    const volume = avgHeight != null && roomArea > 0 ? roomArea * avgHeight : null
    totalArea += roomArea
    if (volume) totalVolume += volume
    const camHs = [...new Set(ms.map((m) => m.camHeight).filter(Boolean).map((h) => h.toFixed(2)))]

    const rows = ms.map((m) => {
      const tipo = {
        distance: '📏 Distancia', path: '📐 Ruta', area: '⬛ Área',
        height: '📊 Altura', wall: '🧱 Pared', note: '📝 Nota',
        slope: '⛰️ Pendiente', marker: '🔌 Elemento',
      }[m.mode] ?? m.mode
      return `<tr><td>${esc(m.label)}</td><td>${tipo}</td><td>${esc(fmtValue(m, u))}</td>` +
        `<td>${m.perimeter ? fmtLength(m.perimeter, u) : '—'}</td></tr>`
    }).join('')

    const stats = []
    if (roomArea > 0) stats.push(`Superficie: <b>${fmtArea(roomArea, u)}</b>`)
    if (perimeter > 0) stats.push(`Perímetro: <b>${fmtLength(perimeter, u)}</b>`)
    if (avgHeight != null) stats.push(`Altura media: <b>${fmtLength(avgHeight, u)}</b>`)
    if (wallArea != null) stats.push(`Paredes (per. × alt.): <b>${fmtArea(wallArea, u)}</b>`)
    if (volume != null) stats.push(`Volumen: <b>${fmtVolume(volume, u)}</b>`)
    // Estimación orientativa de pintura: 2 manos a 10 m²/L, paredes + techo.
    if (wallArea != null) {
      const paintL = ((wallArea + roomArea) * 2) / 10
      stats.push(`Pintura orient.: <b>${paintL.toFixed(1)} L</b> <small>(2 manos, paredes+techo)</small>`)
    }
    // Recuento de elementos de instalación (quantity takeoff eléctrico).
    const markers = ms.filter((m) => m.mode === 'marker')
    if (markers.length) {
      const byKind = {}
      for (const m of markers) byKind[m.text] = (byKind[m.text] ?? 0) + 1
      stats.push(`Elementos: <b>${Object.entries(byKind).map(([k, n]) => `${n}× ${k}`).join(', ')}</b>`)
    }

    const plan = ms.some((m) => (m.points?.length ?? 0) >= 2)
      ? buildPlanSVG(ms, { title: name, dark: false, unitSys: u })
      : ''
    const typeId = roomTypes[photo] ?? DEFAULT_TYPE
    const type = SIA416_TYPES.find((t) => t.id === typeId) ?? SIA416_TYPES[0]
    const checks = evaluateChecks(ms)
    const checksHTML = checks.length
      ? `<ul class="checks">${checks.map((c) =>
          `<li class="${c.level}">${{ ok: '✅', warn: '⚠️', fail: '❌' }[c.level]} ${esc(c.text)}</li>`
        ).join('')}</ul>`
      : ''
    return `
      <section>
        <h2>${esc(name)} <span class="siatype">${esc(type.short)}</span>${roomArea > 0 ? ` — ${fmtArea(roomArea, u)}` : ''}</h2>
        ${stats.length ? `<div class="stats">${stats.join(' · ')}</div>` : ''}
        <table><tr><th>Etiqueta</th><th>Tipo</th><th>Valor</th><th>Perímetro</th></tr>${rows}</table>
        ${checksHTML}
        ${plan ? `<div class="plan">${plan}</div>` : ''}
        <p class="method">Método: proyección al plano del suelo con cámara a ${camHs.length ? camHs.join(' / ') : '?'} m.
        Las superficies de pared no descuentan puertas ni ventanas.</p>
      </section>`
  }).join('')

  // Desglose de superficies según SIA 416 + NWF + superficie ponderada.
  const bd = sia416Breakdown(store, roomTypes, weights)
  const wOf = (t) => weights[t.id] ?? t.weight
  const bdRows = SIA416_TYPES
    .filter((t) => bd.byType[t.id] > 0)
    .map((t) => {
      const a = bd.byType[t.id]
      const w = wOf(t) > 0 && wOf(t) < 1 ? ` × ${wOf(t).toFixed(2)} = ${fmtArea(a * wOf(t), u)}` : ''
      return `<tr><td>${esc(t.label)}</td><td>${fmtArea(a, u)}${w}</td></tr>`
    }).join('')
  const wLabel = ['BALKON', 'TERRASSE', 'GARTEN']
    .map((id) => `${{ BALKON: 'balcón', TERRASSE: 'terraza', GARTEN: 'jardín' }[id]} ×${(weights[id] ?? SIA416_TYPES.find((t) => t.id === id).weight).toFixed(2)}`)
    .join(' · ')
  const siaBlock = bd.total > 0 ? `
  <h2>Desglose de superficies (SIA 416)</h2>
  <table>${bdRows}
    ${bd.deducted > 0 ? `<tr><td>− Descuento por zonas con altura &lt; 1.50 m (regla WBS)</td><td>− ${fmtArea(bd.deducted, u)}</td></tr>` : ''}
    <tr class="sum"><td><b>NWF — superficie habitable neta (práctica WBS)</b></td><td><b>${fmtArea(bd.nwf, u)}</b></td></tr>
    <tr class="sum"><td><b>Superficie ponderada de tasación</b> <small>(${wLabel})</small></td><td><b>${fmtArea(bd.weighted, u)}</b></td></tr>
  </table>
  <p class="method">Clasificación según SIA 416 (HNF = uso principal, NNF = anexos, VF = circulación,
  FF = técnica; balcones/terrazas son AGF y no forman parte de la superficie de piso). La NWF sigue la
  práctica WBS: superficies interiores acabadas, de pared a pared; bajo pendientes solo computa la zona
  con altura ≥ 1.50 m. Indica siempre el método al publicar un anuncio.</p>` : ''

  const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Informe 360 — Workpulse</title>
<style>
  body { font-family: system-ui, sans-serif; color: #111; margin: 32px; }
  h1 { font-size: 22px; margin: 0 0 2px; }
  .sub { color: #666; font-size: 13px; margin-bottom: 8px; }
  .total { font-size: 15px; background: #eef7f2; border: 1px solid #bfe3d2;
           border-radius: 8px; padding: 10px 14px; margin: 14px 0 22px; }
  h2 { font-size: 15px; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 26px; }
  .stats { font-size: 13px; color: #333; margin: 6px 0 10px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 10px; }
  td, th { text-align: left; padding: 6px 8px; border-bottom: 1px solid #eee; }
  th { color: #555; font-weight: 600; }
  .plan { max-width: 560px; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
  .plan svg { display: block; width: 100%; height: auto; }
  .method { color: #888; font-size: 11px; margin: 6px 0 0; }
  .siatype { font-size: 11px; background: #e8eef4; border: 1px solid #c8d4de; border-radius: 10px;
             padding: 1px 8px; vertical-align: middle; color: #456; }
  .checks { list-style: none; padding: 0; margin: 4px 0 10px; font-size: 12.5px; }
  .checks li { padding: 3px 0; }
  .checks li.fail { color: #b3261e; }
  .checks li.warn { color: #8a6d00; }
  .checks li.ok { color: #1b6e46; }
  tr.sum td { border-top: 2px solid #999; }
  footer { margin-top: 36px; color: #999; font-size: 11px; }
  section { break-inside: avoid; }
  @media print { body { margin: 12mm; } }
</style></head><body>
<h1>Workpulse 360 — Informe de medición</h1>
<div class="sub">Generado: ${new Date().toLocaleString('es-CH')} · ${rooms.length} espacio(s)</div>
${totalArea > 0 ? `<div class="total"><b>Superficie total medida: ${fmtArea(totalArea, u)}</b>${totalVolume > 0 ? ` · Volumen total (tipo GV: GF × altura): ${fmtVolume(totalVolume, u)}` : ''}</div>` : ''}
${siaBlock}
${sections}
<footer>Medidas por trigonometría sobre foto 360° equirectangular con altura de cámara conocida o calibrada
(proyección al plano del suelo; alturas por pie/tope a plomada). Válido en suelos planos; la exactitud
depende de la nivelación de la cámara y de la altura indicada. No es un levantamiento topográfico.</footer>
${autoPrint ? '<script>window.onload = () => setTimeout(() => window.print(), 300)</script>' : ''}
</body></html>`

  return html
}

/** Abre el informe en una ventana y lanza el diálogo de imprimir/PDF. */
export function openSessionReport(store, roomNames = {}, opts = {}) {
  const html = buildReportHTML(store, roomNames, opts, true)
  if (!html) return false
  const win = window.open('', '_blank')
  if (!win) return false
  win.document.write(html)
  win.document.close()
  return true
}

/** Descarga el informe como archivo HTML autónomo (planos SVG incluidos). */
export function downloadSessionReport(store, roomNames = {}, opts = {}) {
  const html = buildReportHTML(store, roomNames, opts, false)
  if (!html) return false
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'workpulse360-informe.html'
  a.click()
  URL.revokeObjectURL(url)
  return true
}
