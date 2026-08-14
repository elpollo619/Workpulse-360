import { useMemo, useRef, useState, useEffect } from 'react'
import { MEASURE_COLORS } from './Pano360View.jsx'
import { fmtArea, fmtLength } from './units.js'

const ASSEMBLY_KEY = 'workpulse360.assembly.v1'

/** Contornos cerrados de una habitación (todas sus áreas). */
function outlinesOf(ms) {
  return ms.filter((m) => m.mode === 'area' && (m.points?.length ?? 0) >= 3)
}

function centroidOf(pts) {
  const n = pts.length || 1
  return {
    x: pts.reduce((s, p) => s + p.x, 0) / n,
    z: pts.reduce((s, p) => s + p.z, 0) / n,
  }
}

/** Aplica la transformación (rotación alrededor del centroide + traslación). */
function transformPoint(p, c, t) {
  const cos = Math.cos(t.rot)
  const sin = Math.sin(t.rot)
  const dx = p.x - c.x
  const dz = p.z - c.z
  return {
    x: c.x + dx * cos - dz * sin + t.tx,
    z: c.z + dx * sin + dz * cos + t.tz,
  }
}

/**
 * Plano general: ensambla los contornos de todas las habitaciones en un solo
 * plano. Arrastra para mover cada habitación y rota con los controles — el
 * "assembly" de magicplan, en versión ligera. Posiciones persistentes.
 */
export default function PlanAssembly({ store, roomNames, roomTypes, unitSys = 'm', onClose }) {
  const [transforms, setTransforms] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(ASSEMBLY_KEY)) ?? {}
    } catch {
      return {}
    }
  })
  const [selected, setSelected] = useState(null)
  const svgRef = useRef(null)
  const dragRef = useRef(null)

  useEffect(() => {
    localStorage.setItem(ASSEMBLY_KEY, JSON.stringify(transforms))
  }, [transforms])

  const rooms = useMemo(() => {
    const out = []
    let autoOffset = 0
    for (const [photo, ms] of Object.entries(store)) {
      const outlines = outlinesOf(ms)
      if (!outlines.length) continue
      const allPts = outlines.flatMap((m) => m.points)
      const c = centroidOf(allPts)
      // Posición inicial: en fila, separadas, hasta que el usuario las mueva.
      const t = transforms[photo] ?? { tx: autoOffset - c.x, tz: -c.z, rot: 0 }
      const width = Math.max(...allPts.map((p) => p.x)) - Math.min(...allPts.map((p) => p.x))
      autoOffset += width + 1.5
      out.push({ photo, outlines, centroid: c, t })
    }
    return out
  }, [store, transforms])

  // Encaje: los límites se congelan mientras se arrastra (si no, la escala
  // cambiaría bajo el puntero); 🔍 Ajustar los recalcula.
  const [fitCount, setFitCount] = useState(0)
  const bounds = useMemo(() => {
    const pts = rooms.flatMap((r) =>
      r.outlines.flatMap((m) => m.points.map((p) => transformPoint(p, r.centroid, r.t))))
    if (!pts.length) return { minX: -5, maxX: 5, minZ: -5, maxZ: 5 }
    return {
      minX: Math.min(...pts.map((p) => p.x)) - 1.5,
      maxX: Math.max(...pts.map((p) => p.x)) + 1.5,
      minZ: Math.min(...pts.map((p) => p.z)) - 1.5,
      maxZ: Math.max(...pts.map((p) => p.z)) + 1.5,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rooms.length, fitCount])

  const W = 820
  const H = 560
  const scale = Math.min(W / (bounds.maxX - bounds.minX), H / (bounds.maxZ - bounds.minZ))
  const sx = (x) => (x - bounds.minX) * scale
  const sy = (z) => H - (z - bounds.minZ) * scale

  const totalArea = rooms.reduce(
    (s, r) => s + r.outlines.reduce((a, m) => a + m.value, 0), 0)

  function pointerToWorld(e) {
    const rect = svgRef.current.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    const py = ((e.clientY - rect.top) / rect.height) * H
    return { x: bounds.minX + px / scale, z: bounds.minZ + (H - py) / scale }
  }

  function onPointerDown(e, photo) {
    e.preventDefault()
    setSelected(photo)
    const w = pointerToWorld(e)
    const t = rooms.find((r) => r.photo === photo)?.t ?? { tx: 0, tz: 0, rot: 0 }
    dragRef.current = { photo, start: w, t0: { ...t } }
    e.target.setPointerCapture?.(e.pointerId)
  }

  function onPointerMove(e) {
    const d = dragRef.current
    if (!d) return
    const w = pointerToWorld(e)
    setTransforms((prev) => ({
      ...prev,
      [d.photo]: { ...d.t0, tx: d.t0.tx + (w.x - d.start.x), tz: d.t0.tz + (w.z - d.start.z) },
    }))
  }

  function onPointerUp() {
    dragRef.current = null
  }

  function rotateSelected(deg) {
    if (!selected) return
    const r = rooms.find((x) => x.photo === selected)
    if (!r) return
    setTransforms((prev) => ({
      ...prev,
      [selected]: { ...r.t, rot: r.t.rot + (deg * Math.PI) / 180 },
    }))
  }

  function svgString() {
    return svgRef.current ? new XMLSerializer().serializeToString(svgRef.current) : ''
  }

  function downloadSVG() {
    const blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + svgString()], { type: 'image/svg+xml' })
    trigger(blob, 'plano-general.svg')
  }

  function downloadPNG() {
    const img = new Image()
    const url = URL.createObjectURL(new Blob([svgString()], { type: 'image/svg+xml' }))
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = W * 2
      canvas.height = H * 2
      const g = canvas.getContext('2d')
      g.fillStyle = '#ffffff'
      g.fillRect(0, 0, canvas.width, canvas.height)
      g.drawImage(img, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(url)
      canvas.toBlob((blob) => blob && trigger(blob, 'plano-general.png'), 'image/png')
    }
    img.src = url
  }

  function trigger(blob, name) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }

  const gridStep = scale > 60 ? 1 : scale > 25 ? 2 : 5
  const gridLines = []
  for (let x = Math.ceil(bounds.minX / gridStep) * gridStep; x <= bounds.maxX; x += gridStep) {
    gridLines.push(<line key={`x${x}`} x1={sx(x)} y1={0} x2={sx(x)} y2={H} stroke="#e2e8ee" strokeWidth="0.6" />)
  }
  for (let z = Math.ceil(bounds.minZ / gridStep) * gridStep; z <= bounds.maxZ; z += gridStep) {
    gridLines.push(<line key={`z${z}`} x1={0} y1={sy(z)} x2={W} y2={sy(z)} stroke="#e2e8ee" strokeWidth="0.6" />)
  }

  return (
    <div className="floorplan">
      <div className="floorplan-card" style={{ maxWidth: 920 }}>
        <div className="floorplan-head">
          <b>🧩 Plano general — {fmtArea(totalArea, unitSys)} en {rooms.length} espacio(s)</b>
          <span>
            <button onClick={() => rotateSelected(-15)} disabled={!selected} title="Rotar la habitación seleccionada">⟲ 15°</button>{' '}
            <button onClick={() => rotateSelected(15)} disabled={!selected} title="Rotar la habitación seleccionada">⟳ 15°</button>{' '}
            <button onClick={() => setFitCount((c) => c + 1)} title="Reencuadrar la vista">🔍 Ajustar</button>{' '}
            <button onClick={downloadSVG}>SVG</button>{' '}
            <button onClick={downloadPNG}>PNG</button>{' '}
            <button onClick={onClose}>✕</button>
          </span>
        </div>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', background: '#ffffff', borderRadius: 8, touchAction: 'none', cursor: 'grab' }}
          fontFamily="system-ui, sans-serif"
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <rect x="0" y="0" width={W} height={H} fill="#ffffff" />
          {gridLines}
          <text x={W - 10} y={H - 8} textAnchor="end" fontSize="11" fill="#8a97a3">cuadrícula {gridStep} m</text>
          {rooms.map((r, idx) => {
            const color = MEASURE_COLORS[idx % MEASURE_COLORS.length]
            const name = roomNames[r.photo] || r.photo
            const isSel = selected === r.photo
            const tPts = r.outlines.map((m) => m.points.map((p) => transformPoint(p, r.centroid, r.t)))
            const c = centroidOf(tPts.flat())
            return (
              <g key={r.photo} onPointerDown={(e) => onPointerDown(e, r.photo)} style={{ cursor: 'move' }}>
                {tPts.map((pts, i) => (
                  <polygon
                    key={i}
                    points={pts.map((p) => `${sx(p.x).toFixed(1)},${sy(p.z).toFixed(1)}`).join(' ')}
                    fill={color}
                    fillOpacity={isSel ? 0.28 : 0.14}
                    stroke={color}
                    strokeWidth={isSel ? 3 : 2}
                  />
                ))}
                {/* Cotas por tramo del contorno principal */}
                {tPts[0]?.map((p, i) => {
                  const q = tPts[0][(i + 1) % tPts[0].length]
                  const len = Math.hypot(q.x - p.x, q.z - p.z)
                  if (len < 0.3) return null
                  return (
                    <text key={i} x={(sx(p.x) + sx(q.x)) / 2} y={(sy(p.z) + sy(q.z)) / 2 - 3}
                      textAnchor="middle" fontSize="9" fill="#66727e">
                      {fmtLength(len, unitSys)}
                    </text>
                  )
                })}
                <text x={sx(c.x)} y={sy(c.z)} textAnchor="middle" fontSize="13" fontWeight="600" fill="#1c2733">
                  {name}
                </text>
                <text x={sx(c.x)} y={sy(c.z) + 14} textAnchor="middle" fontSize="11" fill="#66727e">
                  {fmtArea(r.outlines.reduce((s, m) => s + m.value, 0), unitSys)}
                  {roomTypes?.[r.photo] ? ` · ${roomTypes[r.photo]}` : ''}
                </text>
              </g>
            )
          })}
        </svg>
        <p className="hint">
          Arrastra cada habitación para colocarla; selecciónala y usa ⟲/⟳ para
          rotarla (las posiciones se recuerdan). Vista esquemática: cada
          habitación se midió desde su propia cámara, alinéalas por puertas y
          paredes compartidas.
        </p>
      </div>
    </div>
  )
}
