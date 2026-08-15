// Generación del plano de planta como SVG (cadena de texto), compartida por el
// visor de plano, el informe y el export PNG. La cámara está en el origen y
// las posiciones vienen de la trigonometría sobre el plano del suelo.

import { MEASURE_COLORS, MARKER_TYPES } from './Pano360View.jsx'
import { fmtLength, fmtArea } from './units.js'

export function planGeometry(measurements, W = 640, H = 480, PAD = 40) {
  const pts = [{ x: 0, z: 0 }]
  for (const m of measurements) for (const p of m.points ?? []) pts.push(p)
  const xs = pts.map((p) => p.x)
  const zs = pts.map((p) => p.z)
  const minX = Math.min(...xs) - 1
  const maxX = Math.max(...xs) + 1
  const minZ = Math.min(...zs) - 1
  const maxZ = Math.max(...zs) + 1
  const scale = Math.min((W - PAD * 2) / (maxX - minX), (H - PAD * 2) / (maxZ - minZ))
  const sx = (x) => PAD + (x - minX) * scale
  const sy = (z) => H - PAD - (z - minZ) * scale
  return { W, H, minX, maxX, minZ, maxZ, scale, sx, sy }
}

/**
 * Construye el SVG completo del plano como cadena.
 * @param {Array} measurements
 * @param {{title?:string, dark?:boolean}} opts
 */
export function buildPlanSVG(measurements, opts = {}) {
  const { title = '', dark = true, unitSys = 'm' } = opts
  const geo = planGeometry(measurements)
  const gridStep = geo.scale > 60 ? 1 : geo.scale > 25 ? 2 : 5
  const bg = dark ? '#0f1418' : '#ffffff'
  const gridC = dark ? '#2a3742' : '#dde3e8'
  const textC = dark ? '#e6edf3' : '#1c2733'
  const dimC = dark ? '#8b9aa7' : '#5c6b78'

  const parts = []
  parts.push(
    `<svg viewBox="0 0 ${geo.W} ${geo.H}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">`,
    `<rect x="0" y="0" width="${geo.W}" height="${geo.H}" fill="${bg}"/>`
  )

  for (let x = Math.ceil(geo.minX / gridStep) * gridStep; x <= geo.maxX; x += gridStep) {
    parts.push(`<line x1="${geo.sx(x).toFixed(1)}" y1="${geo.sy(geo.minZ).toFixed(1)}" x2="${geo.sx(x).toFixed(1)}" y2="${geo.sy(geo.maxZ).toFixed(1)}" stroke="${gridC}" stroke-width="0.5"/>`)
  }
  for (let z = Math.ceil(geo.minZ / gridStep) * gridStep; z <= geo.maxZ; z += gridStep) {
    parts.push(`<line x1="${geo.sx(geo.minX).toFixed(1)}" y1="${geo.sy(z).toFixed(1)}" x2="${geo.sx(geo.maxX).toFixed(1)}" y2="${geo.sy(z).toFixed(1)}" stroke="${gridC}" stroke-width="0.5"/>`)
  }
  parts.push(`<text x="${geo.W - 12}" y="${geo.H - 10}" text-anchor="end" font-size="11" fill="${dimC}">cuadrícula ${gridStep} m</text>`)
  if (title) {
    parts.push(`<text x="12" y="20" font-size="13" fill="${textC}" font-weight="bold">${escapeXML(title)}</text>`)
  }

  measurements.forEach((m, idx) => {
    const color = MEASURE_COLORS[idx % MEASURE_COLORS.length]
    const pts = m.points ?? []
    if (m.mode === 'marker') {
      // Símbolo de instalación (enchufe, interruptor…) como en los planos
      // eléctricos: círculo con letra + etiqueta.
      const p = pts[0]
      if (!p) return
      const type = MARKER_TYPES.find((t) => t.id === m.text) ?? { sym: '?', label: m.text }
      const x = geo.sx(p.x)
      const y = geo.sy(p.z)
      parts.push(
        `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="${bg}" stroke="#2a7de1" stroke-width="1.6"/>`,
        `<text x="${x.toFixed(1)}" y="${(y + 3.4).toFixed(1)}" text-anchor="middle" font-size="9" font-weight="700" fill="#2a7de1">${escapeXML(type.sym)}</text>`,
        `<text x="${(x + 10).toFixed(1)}" y="${(y - 6).toFixed(1)}" font-size="9" fill="${dimC}">${escapeXML(m.label)}</text>`
      )
      return
    }
    if (m.mode === 'height') {
      const p = pts[0]
      if (!p) return
      parts.push(
        `<circle cx="${geo.sx(p.x).toFixed(1)}" cy="${geo.sy(p.z).toFixed(1)}" r="4" fill="${color}"/>`,
        `<text x="${(geo.sx(p.x) + 7).toFixed(1)}" y="${(geo.sy(p.z) - 6).toFixed(1)}" font-size="12" fill="${color}">${escapeXML(m.label)}: ${m.value.toFixed(2)} m ↑</text>`
      )
      return
    }
    if (pts.length < 2) return
    const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${geo.sx(p.x).toFixed(1)},${geo.sy(p.z).toFixed(1)}`).join(' ')
    const cx = pts.reduce((s, p) => s + geo.sx(p.x), 0) / pts.length
    const cz = pts.reduce((s, p) => s + geo.sy(p.z), 0) / pts.length
    parts.push(
      m.closed
        ? `<path d="${d} Z" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-width="2"/>`
        : `<path d="${d}" fill="none" stroke="${color}" stroke-width="2"/>`
    )
    for (const p of pts) {
      parts.push(`<circle cx="${geo.sx(p.x).toFixed(1)}" cy="${geo.sy(p.z).toFixed(1)}" r="3" fill="${color}"/>`)
    }
    // Cotas por tramo (estilo plano de arquitecto), cuando hay 3+ vértices.
    if (pts.length >= 3) {
      const nSegs = m.closed ? pts.length : pts.length - 1
      for (let i = 0; i < nSegs; i++) {
        const a = pts[i]
        const b = pts[(i + 1) % pts.length]
        const len = Math.hypot(b.x - a.x, b.z - a.z)
        if (len < 0.05) continue
        const mx = (geo.sx(a.x) + geo.sx(b.x)) / 2
        const my = (geo.sy(a.z) + geo.sy(b.z)) / 2
        const dx = geo.sx(b.x) - geo.sx(a.x)
        const dy = geo.sy(b.z) - geo.sy(a.z)
        const L = Math.hypot(dx, dy) || 1
        // Desplazamiento perpendicular hacia fuera del centroide.
        let ox = (-dy / L) * 10
        let oy = (dx / L) * 10
        if ((mx - cx) * ox + (my - cz) * oy < 0) {
          ox = -ox
          oy = -oy
        }
        parts.push(
          `<text x="${(mx + ox).toFixed(1)}" y="${(my + oy + 3).toFixed(1)}" text-anchor="middle" font-size="9.5" fill="${dimC}">${fmtLength(len, unitSys)}</text>`
        )
      }
    }
    // Ángulos interiores en las esquinas del polígono cerrado; en rojo si se
    // desvían de 90° (como los planos de aufmaß electro: 80°, 179°…).
    if (m.closed && pts.length >= 3) {
      for (let i = 0; i < pts.length; i++) {
        const v = pts[i]
        const a = pts[(i - 1 + pts.length) % pts.length]
        const b = pts[(i + 1) % pts.length]
        const v1 = { x: a.x - v.x, z: a.z - v.z }
        const v2 = { x: b.x - v.x, z: b.z - v.z }
        const l1 = Math.hypot(v1.x, v1.z)
        const l2 = Math.hypot(v2.x, v2.z)
        if (l1 < 0.1 || l2 < 0.1) continue
        const dot = (v1.x * v2.x + v1.z * v2.z) / (l1 * l2)
        const ang = Math.acos(Math.max(-1, Math.min(1, dot))) * 180 / Math.PI
        const off90 = Math.abs(ang - 90) > 3 && Math.abs(ang - 180) > 3
        // Etiqueta desplazada hacia el interior (bisectriz).
        const bx = (v1.x / l1 + v2.x / l2)
        const bz = (v1.z / l1 + v2.z / l2)
        const bl = Math.hypot(bx, bz) || 1
        const lx = geo.sx(v.x) + (bx / bl) * 16
        const lz = geo.sy(v.z) - (bz / bl) * 16
        parts.push(
          `<text x="${lx.toFixed(1)}" y="${lz.toFixed(1)}" text-anchor="middle" font-size="8.5" fill="${off90 ? '#d33' : dimC}"${off90 ? ' font-weight="700"' : ''}>${ang.toFixed(0)}°</text>`
        )
      }
    }
    const valText = m.unit === '°'
      ? `${m.value.toFixed(1)}°`
      : m.unit === 'm²' ? fmtArea(m.value, unitSys) : fmtLength(m.value, unitSys)
    parts.push(
      `<text x="${cx.toFixed(1)}" y="${cz.toFixed(1)}" text-anchor="middle" font-size="12" font-weight="600" fill="${color}">${escapeXML(m.label)}: ${valText}</text>`
    )
    // Perímetro (U =) bajo la etiqueta del área, como los planos de aufmaß.
    if (m.closed && m.perimeter) {
      parts.push(
        `<text x="${cx.toFixed(1)}" y="${(cz + 13).toFixed(1)}" text-anchor="middle" font-size="10" fill="${dimC}">U = ${fmtLength(m.perimeter, unitSys)}</text>`
      )
    }
  })

  // Barra de escala (abajo a la izquierda).
  {
    const barM = gridStep
    const bx = 14
    const by = geo.H - 14
    const bw = barM * geo.scale
    parts.push(
      `<line x1="${bx}" y1="${by}" x2="${(bx + bw).toFixed(1)}" y2="${by}" stroke="${textC}" stroke-width="2"/>`,
      `<line x1="${bx}" y1="${by - 4}" x2="${bx}" y2="${by + 4}" stroke="${textC}" stroke-width="2"/>`,
      `<line x1="${(bx + bw).toFixed(1)}" y1="${by - 4}" x2="${(bx + bw).toFixed(1)}" y2="${by + 4}" stroke="${textC}" stroke-width="2"/>`,
      `<text x="${(bx + bw / 2).toFixed(1)}" y="${by - 7}" text-anchor="middle" font-size="10" fill="${dimC}">${fmtLength(barM, unitSys, 0)}</text>`
    )
  }

  parts.push(
    `<circle cx="${geo.sx(0).toFixed(1)}" cy="${geo.sy(0).toFixed(1)}" r="6" fill="${textC}"/>`,
    `<circle cx="${geo.sx(0).toFixed(1)}" cy="${geo.sy(0).toFixed(1)}" r="10" fill="none" stroke="${textC}" stroke-dasharray="2 2"/>`,
    `<text x="${(geo.sx(0) + 12).toFixed(1)}" y="${(geo.sy(0) + 4).toFixed(1)}" font-size="11" fill="${dimC}">cámara</text>`,
    '</svg>'
  )
  return parts.join('\n')
}

function escapeXML(s) {
  return String(s ?? '').replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]))
}
