import { useMemo } from 'react'
import { buildPlanSVG, planGeometry } from './plansvg.js'
import { downloadDXF } from './dxf.js'

/**
 * Plano de planta: vista cenital a escala real de las mediciones, con
 * exportación a SVG, PNG y DXF (CAD).
 */
export default function FloorPlan({ measurements, photoName, roomName, unitSys = 'm', onClose }) {
  const svgString = useMemo(
    () => buildPlanSVG(measurements, { title: roomName || photoName, unitSys }),
    [measurements, roomName, photoName, unitSys]
  )
  const baseName = (roomName || photoName || 'plano').replace(/\.[^.]+$/, '')

  function downloadSVG() {
    const blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + svgString], { type: 'image/svg+xml' })
    trigger(blob, `${baseName}-plano.svg`)
  }

  function downloadPNG() {
    const img = new Image()
    const url = URL.createObjectURL(new Blob([svgString], { type: 'image/svg+xml' }))
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 1280
      canvas.height = 960
      const g = canvas.getContext('2d')
      g.drawImage(img, 0, 0, 1280, 960)
      URL.revokeObjectURL(url)
      canvas.toBlob((blob) => blob && trigger(blob, `${baseName}-plano.png`), 'image/png')
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

  // Impresión a escala de arquitecto: el SVG se dimensiona en milímetros
  // reales de papel (1:50 → 20 mm por metro), como un plano profesional.
  function printAtScale(S) {
    const geo = planGeometry(measurements)
    const wMM = (geo.W / geo.scale) * 1000 / S
    const hMM = (geo.H / geo.scale) * 1000 / S
    const svg = buildPlanSVG(measurements, { title: roomName || photoName, dark: false, unitSys })
    const win = window.open('', '_blank')
    if (!win) return
    win.document.write(`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Plano 1:${S} — ${baseName}</title>
<style>
  body { margin: 10mm; font-family: system-ui, sans-serif; }
  h1 { font-size: 14px; margin: 0 0 2mm; }
  .meta { font-size: 11px; color: #555; margin-bottom: 4mm; }
  svg { width: ${wMM.toFixed(1)}mm; height: ${hMM.toFixed(1)}mm; border: 0.3mm solid #999; }
  @media print { @page { size: ${wMM > 180 || hMM > 267 ? 'A3' : 'A4'} ${wMM > hMM ? 'landscape' : 'portrait'}; } }
</style></head><body>
<h1>${baseName} — Escala 1:${S}</h1>
<div class="meta">Workpulse 360 · imprimir al 100% (sin "ajustar a página") para conservar la escala</div>
${svg}
<script>window.onload = () => setTimeout(() => window.print(), 300)</script>
</body></html>`)
    win.document.close()
  }

  return (
    <div className="floorplan">
      <div className="floorplan-card">
        <div className="floorplan-head">
          <b>🗺️ {roomName || photoName}</b>
          <span>
            <button onClick={downloadSVG}>SVG</button>{' '}
            <button onClick={downloadPNG}>PNG</button>{' '}
            <button onClick={() => downloadDXF(measurements, baseName)} title="Formato CAD: AutoCAD, LibreCAD, QCAD…">
              📐 DXF (CAD)
            </button>{' '}
            <button onClick={() => printAtScale(50)} title="Imprimir a escala real de arquitecto">🖨️ 1:50</button>{' '}
            <button onClick={() => printAtScale(100)} title="Imprimir a escala real de arquitecto">🖨️ 1:100</button>{' '}
            <button onClick={onClose}>✕</button>
          </span>
        </div>
        <div className="floorplan-svgwrap" dangerouslySetInnerHTML={{ __html: svgString }} />
        <p className="hint">
          Vista cenital a escala real. El DXF abre en cualquier CAD (unidades en
          metros, cámara en el origen) — lo que otras apps cobran aparte, aquí
          gratis.
        </p>
      </div>
    </div>
  )
}
