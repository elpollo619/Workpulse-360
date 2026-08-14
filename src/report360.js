// Informe imprimible de la sesión de medición 360: resumen por habitación con
// sus planos, tabla de mediciones, estadísticas de cantidades (superficie,
// perímetro, paredes, volumen — el "quantity takeoff" de magicplan) y bloque
// de método auditable (estilo CubiCasa). Se abre en una ventana y se imprime
// o guarda como PDF.

import { buildPlanSVG } from './plansvg.js'
import { fmtLength, fmtArea, fmtVolume, fmtValue } from './units.js'

const esc = (s) =>
  String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))

/**
 * @param {{[photo:string]: Array}} store        mediciones por foto
 * @param {{[photo:string]: string}} roomNames   nombre de habitación por foto
 * @param {{unitSys?: string}} opts
 */
export function openSessionReport(store, roomNames = {}, opts = {}) {
  const u = opts.unitSys ?? 'm'
  const rooms = Object.entries(store).filter(([, ms]) => ms.length > 0)
  if (!rooms.length) return false

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
      const tipo = { distance: '📏 Distancia', path: '📐 Ruta', area: '⬛ Área', height: '📊 Altura' }[m.mode] ?? m.mode
      return `<tr><td>${esc(m.label)}</td><td>${tipo}</td><td>${fmtValue(m, u)}</td>` +
        `<td>${m.perimeter ? fmtLength(m.perimeter, u) : '—'}</td></tr>`
    }).join('')

    const stats = []
    if (roomArea > 0) stats.push(`Superficie: <b>${fmtArea(roomArea, u)}</b>`)
    if (perimeter > 0) stats.push(`Perímetro: <b>${fmtLength(perimeter, u)}</b>`)
    if (avgHeight != null) stats.push(`Altura media: <b>${fmtLength(avgHeight, u)}</b>`)
    if (wallArea != null) stats.push(`Paredes (per. × alt.): <b>${fmtArea(wallArea, u)}</b>`)
    if (volume != null) stats.push(`Volumen: <b>${fmtVolume(volume, u)}</b>`)

    const plan = ms.some((m) => (m.points?.length ?? 0) >= 2)
      ? buildPlanSVG(ms, { title: name, dark: false, unitSys: u })
      : ''
    return `
      <section>
        <h2>${esc(name)}${roomArea > 0 ? ` — ${fmtArea(roomArea, u)}` : ''}</h2>
        ${stats.length ? `<div class="stats">${stats.join(' · ')}</div>` : ''}
        <table><tr><th>Etiqueta</th><th>Tipo</th><th>Valor</th><th>Perímetro</th></tr>${rows}</table>
        ${plan ? `<div class="plan">${plan}</div>` : ''}
        <p class="method">Método: proyección al plano del suelo con cámara a ${camHs.length ? camHs.join(' / ') : '?'} m.
        Las superficies de pared no descuentan puertas ni ventanas.</p>
      </section>`
  }).join('')

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
  footer { margin-top: 36px; color: #999; font-size: 11px; }
  section { break-inside: avoid; }
  @media print { body { margin: 12mm; } }
</style></head><body>
<h1>Workpulse 360 — Informe de medición</h1>
<div class="sub">Generado: ${new Date().toLocaleString('es-CH')} · ${rooms.length} espacio(s)</div>
${totalArea > 0 ? `<div class="total"><b>Superficie total medida: ${fmtArea(totalArea, u)}</b>${totalVolume > 0 ? ` · Volumen total: ${fmtVolume(totalVolume, u)}` : ''}</div>` : ''}
${sections}
<footer>Medidas por trigonometría sobre foto 360° equirectangular con altura de cámara conocida o calibrada
(proyección al plano del suelo; alturas por pie/tope a plomada). Válido en suelos planos; la exactitud
depende de la nivelación de la cámara y de la altura indicada. No es un levantamiento topográfico.</footer>
<script>window.onload = () => setTimeout(() => window.print(), 300)</script>
</body></html>`

  const win = window.open('', '_blank')
  if (!win) return false
  win.document.write(html)
  win.document.close()
  return true
}
