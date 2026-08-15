import { useEffect, useRef, useState } from 'react'
import { laserSupported, connectLaser } from './laser.js'

/**
 * Modo en vivo: la cámara del dispositivo (móvil o webcam) con la lectura del
 * láser Bluetooth superpuesta en grande. Sirve para trabajar con el láser
 * viendo lo que apuntas, capturar fotos-evidencia con la lectura estampada
 * (peritajes) y medir la altura de cámara apuntando al suelo.
 *
 * Nota: la vista en vivo de la propia cámara 360 (Insta360/Theta) no es
 * accesible desde un navegador — su protocolo es de app nativa.
 */
export default function LiveMode({ onClose }) {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [error, setError] = useState(null)
  const [laser, setLaser] = useState(null)
  const [reading, setReading] = useState(null)
  const [frozen, setFrozen] = useState(null) // lectura congelada al capturar

  useEffect(() => {
    let cancelled = false
    navigator.mediaDevices?.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 1920 } },
      audio: false,
    }).then((stream) => {
      if (cancelled) {
        stream.getTracks().forEach((t) => t.stop())
        return
      }
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play().catch(() => {})
      }
    }).catch((e) => {
      setError(e?.name === 'NotAllowedError'
        ? 'Permiso de cámara denegado. Actívalo en el navegador para ver la imagen en vivo.'
        : 'No se pudo abrir la cámara del dispositivo.')
    })
    return () => {
      cancelled = true
      streamRef.current?.getTracks().forEach((t) => t.stop())
    }
  }, [])

  useEffect(() => () => { laser?.disconnect() }, [laser])

  async function toggleLaser() {
    if (laser) {
      laser.disconnect()
      setLaser(null)
      setReading(null)
      return
    }
    try {
      const conn = await connectLaser(
        (m) => setReading(m),
        () => { setLaser(null); setReading(null) }
      )
      setLaser(conn)
    } catch {
      setError('No se pudo conectar el láser (¿Bluetooth activado? ¿Chrome/Edge?).')
    }
  }

  // Foto-evidencia: fotograma actual con la lectura y la fecha estampadas.
  function capture() {
    const video = videoRef.current
    if (!video?.videoWidth) return
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const g = canvas.getContext('2d')
    g.drawImage(video, 0, 0)
    const pad = Math.round(canvas.width * 0.015)
    const fs = Math.round(canvas.width * 0.035)
    g.font = `600 ${fs}px "IBM Plex Mono", monospace`
    const lines = [
      reading != null ? `LASER ${reading.toFixed(3)} m` : 'SIN LÁSER',
      new Date().toLocaleString('es-CH'),
    ]
    const w = Math.max(...lines.map((l) => g.measureText(l).width)) + pad * 2
    const h = (fs + pad) * lines.length + pad
    g.fillStyle = 'rgba(13,18,22,0.82)'
    g.fillRect(pad, canvas.height - h - pad, w, h)
    g.fillStyle = '#e05a10'
    g.fillRect(pad, canvas.height - h - pad, Math.round(pad / 2), h)
    g.fillStyle = '#ffffff'
    lines.forEach((l, i) => {
      g.fillText(l, pad * 2, canvas.height - h - pad + (fs + pad) * (i + 1) - pad / 2)
    })
    setFrozen(reading)
    canvas.toBlob((blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `workpulse-evidencia-${Date.now()}.png`
      a.click()
      URL.revokeObjectURL(url)
    }, 'image/png')
  }

  return (
    <div className="live">
      <video ref={videoRef} className="live-video" playsInline muted />
      {error && <div className="live-error">{error}</div>}

      <div className="live-hud">
        <span className="live-hud-label">LÁSER</span>
        <span className="live-hud-value">
          {reading != null ? `${reading.toFixed(3)} m` : '— · — — —'}
        </span>
        {frozen != null && <span className="live-hud-frozen">última captura: {frozen.toFixed(3)} m</span>}
      </div>

      <div className="live-bar">
        {laserSupported() && (
          <button className={laser ? 'active' : ''} onClick={toggleLaser}>
            🔗 {laser ? 'Láser conectado' : 'Conectar láser'}
          </button>
        )}
        <button onClick={capture} disabled={!!error}
          title="Guarda el fotograma con la lectura del láser y la fecha estampadas — evidencia para peritajes">
          📸 Capturar con lectura
        </button>
        <button onClick={onClose}>✕ Cerrar</button>
      </div>

      <p className="live-note">
        La vista de la cámara 360 (Insta360/Theta) no es accesible desde el
        navegador — esto muestra la cámara de este dispositivo. Dispara el
        láser y su lectura aparece aquí en vivo.
      </p>
    </div>
  )
}
