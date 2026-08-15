// Informe imprimible de la sesión de medición 360: resumen por habitación con
// sus planos, tabla de mediciones, estadísticas de cantidades (superficie,
// perímetro, paredes, volumen — el "quantity takeoff" de magicplan) y bloque
// de método auditable (estilo CubiCasa). Se abre en una ventana y se imprime
// o guarda como PDF.

import { buildPlanSVG } from './plansvg.js'
import { fmtLength, fmtArea, fmtVolume, fmtValue } from './units.js'
import { SIA416_TYPES, DEFAULT_TYPE, sia416Breakdown, evaluateChecks } from './sia.js'
import { estimateError } from './pano.js'
import { auditSummary } from './auditlog.js'

/** Línea de daño/inundación: alturas etiquetadas como daño/agua/humedad. */
const DAMAGE_RE = /da(ñ|n)o|agua|inundaci|humedad|flut|wasser|moho/i
/** Hueco con dimensiones en la etiqueta: "ventana 1.2x1.5" → 1.8 m². */
const OPENING_DIM_RE = /(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)/
const DOOR_LABEL_RE = /puerta|t(ü|u)r|porte|door/i

function openingAreaOf(m) {
  const match = OPENING_DIM_RE.exec(m.label ?? '')
  if (!match) return 0
  const w = parseFloat(match[1].replace(',', '.'))
  const h = parseFloat(match[2].replace(',', '.'))
  return w > 0 && h > 0 && w < 6 && h < 4 ? w * h : 0
}

/** Valor de control en la etiqueta: "puerta @0.93" → 0.93 m esperados. */
const CONTROL_RE = /@\s*(\d+(?:[.,]\d+)?)/

function controlOf(m) {
  const match = CONTROL_RE.exec(m.label ?? '')
  if (!match || !(m.value > 0)) return null
  const expected = parseFloat(match[1].replace(',', '.'))
  if (!(expected > 0)) return null
  const deltaPct = ((m.value - expected) / expected) * 100
  return { expected, deltaPct }
}

/**
 * Índice de fiabilidad de la habitación (A/B/C) con razones — control de
 * calidad automático que las apps comerciales no ofrecen.
 */
function reliabilityOf(ms, { calibrated, leveled } = {}) {
  const reasons = []
  let score = 0
  if (calibrated) { score += 2; reasons.push('altura de cámara calibrada') }
  else reasons.push('⚠️ altura de cámara sin calibrar (1.60 m por defecto)')
  if (leveled) { score += 1; reasons.push('foto nivelada') }
  const floorPts = ms.flatMap((m) => m.points ?? []).filter((p) => p.horizontal != null)
  if (floorPts.length) {
    const nearShare = floorPts.filter((p) => p.horizontal < 4).length / floorPts.length
    if (nearShare >= 0.8) { score += 2; reasons.push('puntos cercanos a la cámara') }
    else if (nearShare >= 0.5) { score += 1; reasons.push('algunos puntos lejanos') }
    else reasons.push('⚠️ mayoría de puntos lejanos (>4 m)')
  }
  const controls = ms.map(controlOf).filter(Boolean)
  if (controls.length) {
    const worst = Math.max(...controls.map((c) => Math.abs(c.deltaPct)))
    if (worst < 2) { score += 2; reasons.push(`${controls.length} control(es) dentro de ±2 %`) }
    else if (worst < 5) { score += 1; reasons.push('controles con desvío moderado') }
    else reasons.push('⚠️ un control supera el 5 % de desvío')
  } else {
    reasons.push('sin valores de control (añade "@valor" a una etiqueta medida con láser)')
  }
  const grade = score >= 5 ? 'A' : score >= 3 ? 'B' : 'C'
  return { grade, reasons }
}

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
      const err = estimateError(m)
      const errTxt = err != null
        ? `±${m.unit === 'm²' ? fmtArea(err, u) : fmtLength(err, u, 3)}`
        : '—'
      const ctrl = controlOf(m)
      const ctrlTxt = ctrl
        ? `${Math.abs(ctrl.deltaPct) < 2 ? '✅' : Math.abs(ctrl.deltaPct) < 5 ? '⚠️' : '❌'} ` +
          `${fmtLength(ctrl.expected, u)} (${ctrl.deltaPct >= 0 ? '+' : ''}${ctrl.deltaPct.toFixed(1)} %)`
        : '—'
      return `<tr><td>${esc(m.label)}</td><td>${tipo}</td><td>${esc(fmtValue(m, u))}</td>` +
        `<td>${errTxt}</td><td>${ctrlTxt}</td><td>${m.perimeter ? fmtLength(m.perimeter, u) : '—'}</td></tr>`
    }).join('')

    const stats = []
    if (roomArea > 0) stats.push(`Superficie: <b>${fmtArea(roomArea, u)}</b>`)
    if (perimeter > 0) stats.push(`Perímetro: <b>${fmtLength(perimeter, u)}</b>`)
    if (avgHeight != null) stats.push(`Altura media: <b>${fmtLength(avgHeight, u)}</b>`)
    if (wallArea != null) stats.push(`Paredes brutas (per. × alt.): <b>${fmtArea(wallArea, u)}</b>`)
    if (volume != null) stats.push(`Volumen: <b>${fmtVolume(volume, u)}</b>`)
    // Huecos (etiquetas tipo "ventana 1.2x1.5") → pared NETA, la cifra con la
    // que presupuestan pintores y alicatadores.
    const openingsArea = ms.reduce((s, m) => s + openingAreaOf(m), 0)
    const netWall = wallArea != null ? Math.max(0, wallArea - openingsArea) : null
    if (openingsArea > 0 && netWall != null) {
      stats.push(`Huecos declarados: <b>−${fmtArea(openingsArea, u)}</b> → paredes netas <b>${fmtArea(netWall, u)}</b>`)
    }
    // Rodapié: perímetro menos los anchos de puerta medidos.
    if (perimeter > 0) {
      const doorWidths = ms
        .filter((m) => (m.mode === 'wall' || m.mode === 'distance') && DOOR_LABEL_RE.test(m.label ?? '') && m.value < 2.5)
        .reduce((s, m) => s + m.value, 0)
      if (doorWidths > 0) {
        stats.push(`Rodapié (per. − puertas): <b>${fmtLength(Math.max(0, perimeter - doorWidths), u)}</b>`)
      }
    }
    // Estimación orientativa de pintura: 2 manos a 10 m²/L, paredes netas + techo.
    if (wallArea != null) {
      const paintL = (((netWall ?? wallArea) + roomArea) * 2) / 10
      stats.push(`Pintura orient.: <b>${paintL.toFixed(1)} L</b> <small>(2 manos, paredes netas+techo)</small>`)
    }
    // Línea de daño (peritaje tipo seguro): altura etiquetada como daño/agua
    // → superficie de pared afectada hasta esa cota + suelo.
    const damageLines = ms.filter((m) => m.mode === 'height' && DAMAGE_RE.test(m.label ?? ''))
    for (const d of damageLines) {
      if (perimeter > 0) {
        const affectedWall = perimeter * d.value
        stats.push(`💧 <b>${esc(d.label)}</b> hasta ${fmtLength(d.value, u)}: paredes afectadas ` +
          `<b>${fmtArea(affectedWall, u)}</b>${roomArea > 0 ? ` + suelo <b>${fmtArea(roomArea, u)}</b>` : ''}`)
      }
    }
    // Cantidades de obra con mermas por patrón (práctica real de oficios).
    if (roomArea > 0) {
      stats.push(`Suelo con merma: recto <b>${fmtArea(roomArea * 1.1, u)}</b> (+10 %) · ` +
        `diagonal <b>${fmtArea(roomArea * 1.2, u)}</b> (+20 %) · ` +
        `espiga <b>${fmtArea(roomArea * 1.25, u)}</b> (+25 %)`)
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
    const rel = reliabilityOf(ms, {
      calibrated: opts.camHeights?.[photo] != null && opts.camHeights[photo] !== 1.6,
      leveled: !!(opts.levels?.[photo] && (opts.levels[photo].pitch || opts.levels[photo].roll)),
    })
    const checks = evaluateChecks(ms)
    const checksHTML = checks.length
      ? `<ul class="checks">${checks.map((c) =>
          `<li class="${c.level}">${{ ok: '✅', warn: '⚠️', fail: '❌' }[c.level]} ${esc(c.text)}</li>`
        ).join('')}</ul>`
      : ''
    return `
      <section>
        <h2>${esc(name)} <span class="siatype">${esc(type.short)}</span>
          <span class="rel rel-${rel.grade}">Fiabilidad ${rel.grade}</span>${roomArea > 0 ? ` — ${fmtArea(roomArea, u)}` : ''}</h2>
        <p class="relwhy">${rel.reasons.map(esc).join(' · ')}</p>
        ${stats.length ? `<div class="stats">${stats.join(' · ')}</div>` : ''}
        <table><tr><th>Etiqueta</th><th>Tipo</th><th>Valor</th><th>Incert.</th><th>Control</th><th>Perímetro</th></tr>${rows}</table>
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
  .rel { font-size: 11px; border-radius: 10px; padding: 1px 8px; vertical-align: middle; font-weight: 700; }
  .rel-A { background: #e3f6ec; border: 1px solid #9ad9b9; color: #17714a; }
  .rel-B { background: #fdf3df; border: 1px solid #ecd096; color: #8a6510; }
  .rel-C { background: #fdeaea; border: 1px solid #efb3b3; color: #a52a24; }
  .relwhy { color: #889; font-size: 11px; margin: 3px 0 8px; }
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
${(() => {
  const a = auditSummary()
  return a ? `<h2>Registro de auditoría (cuaderno de campo digital)</h2>
<p class="method">${a.count} acciones registradas entre ${new Date(a.first).toLocaleString('es-CH')} y
${new Date(a.last).toLocaleString('es-CH')} en un registro solo-añadir encadenado con SHA-256.
Hash de cabeza: <code>${a.head.slice(0, 24)}…</code> — cualquier alteración posterior de las mediciones
rompe la cadena y es detectable. El registro completo viaja con el archivo de proyecto.</p>` : ''
})()}
<footer>Medidas por trigonometría sobre foto 360° equirectangular con altura de cámara conocida o calibrada
(proyección al plano del suelo; alturas por pie/tope a plomada). Válido en suelos planos; la exactitud
depende de la nivelación de la cámara y de la altura indicada. No es un levantamiento topográfico.</footer>
${autoPrint ? '<script>window.onload = () => setTimeout(() => window.print(), 300)</script>' : ''}
</body></html>`

  return html
}

/** Devuelve el HTML autónomo del informe (para compartir o guardar). */
export function getSessionReportHTML(store, roomNames = {}, opts = {}) {
  return buildReportHTML(store, roomNames, opts, false)
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
