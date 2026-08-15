import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
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
export default function LiveMode({ onClose, onCapture }) {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const sphereMountRef = useRef(null)
  const [error, setError] = useState(null)
  const [laser, setLaser] = useState(null)
  const [reading, setReading] = useState(null)
  const [frozen, setFrozen] = useState(null) // lectura congelada al capturar
  const [devices, setDevices] = useState([])
  const [deviceId, setDeviceId] = useState('')
  const [is360, setIs360] = useState(false) // stream 2:1 (Theta en modo LIVE)
  const [view360, setView360] = useState(false)

  useEffect(() => {
    let cancelled = false
    const constraints = deviceId
      ? { video: { deviceId: { exact: deviceId }, width: { ideal: 3840 } }, audio: false }
      : { video: { facingMode: 'environment', width: { ideal: 1920 } }, audio: false }
    streamRef.current?.getTracks().forEach((t) => t.stop())
    setIs360(false)
    setView360(false)
    navigator.mediaDevices?.getUserMedia(constraints).then((stream) => {
      if (cancelled) {
        stream.getTracks().forEach((t) => t.stop())
        return
      }
      streamRef.current = stream
      setError(null)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.onloadedmetadata = () => {
          const v = videoRef.current
          // Un stream 2:1 es una panorámica equirectangular (Theta en LIVE).
          if (v && v.videoHeight > 0 && Math.abs(v.videoWidth / v.videoHeight - 2) < 0.08) {
            setIs360(true)
            setView360(true)
          }
        }
        videoRef.current.play().catch(() => {})
      }
      // Con permiso concedido ya se ven las etiquetas de los dispositivos.
      navigator.mediaDevices.enumerateDevices().then((list) => {
        if (!cancelled) setDevices(list.filter((d) => d.kind === 'videoinput'))
      }).catch(() => {})
    }).catch((e) => {
      setError(e?.name === 'NotAllowedError'
        ? 'Permiso de cámara denegado. Actívalo en el navegador para ver la imagen en vivo.'
        : 'No se pudo abrir la cámara del dispositivo.')
    })
    return () => {
      cancelled = true
      streamRef.current?.getTracks().forEach((t) => t.stop())
    }
  }, [deviceId])

  // Vista 360 en vivo: el stream equirectangular proyectado en la esfera,
  // con arrastre para mirar alrededor — lo que ve la cámara, en directo.
  useEffect(() => {
    if (!view360 || !sphereMountRef.current || !videoRef.current) return
    const mount = sphereMountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 200)
    camera.position.set(0, 0, 0.01)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)
    const tex = new THREE.VideoTexture(videoRef.current)
    tex.colorSpace = THREE.SRGBColorSpace
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(50, 64, 48),
      new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })
    )
    scene.add(sphere)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.rotateSpeed = -0.35
    const onWheel = (e) => {
      e.preventDefault()
      camera.fov = Math.min(100, Math.max(20, camera.fov + e.deltaY * 0.05))
      camera.updateProjectionMatrix()
    }
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false })
    let raf
    const animate = () => {
      raf = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.domElement.removeEventListener('wheel', onWheel)
      controls.dispose()
      sphere.geometry.dispose()
      tex.dispose()
      sphere.material.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [view360])

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

  // Capturar el fotograma equirectangular y abrirlo como foto medible.
  function captureAndMeasure() {
    const video = videoRef.current
    if (!video?.videoWidth) return
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0)
    canvas.toBlob((blob) => {
      if (blob) onCapture?.(blob)
    }, 'image/png')
  }

  return (
    <div className="live">
      <video ref={videoRef} className="live-video" playsInline muted
        style={view360 ? { display: 'none' } : undefined} />
      {view360 && <div ref={sphereMountRef} className="live-sphere" />}
      {error && <div className="live-error">{error}</div>}

      <div className="live-hud">
        <span className="live-hud-label">LÁSER</span>
        <span className="live-hud-value">
          {reading != null ? `${reading.toFixed(3)} m` : '— · — — —'}
        </span>
        {frozen != null && <span className="live-hud-frozen">última captura: {frozen.toFixed(3)} m</span>}
      </div>

      <div className="live-bar">
        {devices.length > 1 && (
          <select value={deviceId} onChange={(e) => setDeviceId(e.target.value)}
            title="Elegir cámara — una Theta por USB en modo LIVE aparece aquí como webcam 360">
            <option value="">Cámara por defecto</option>
            {devices.map((d, i) => (
              <option key={d.deviceId} value={d.deviceId}>{d.label || `Cámara ${i + 1}`}</option>
            ))}
          </select>
        )}
        {is360 && (
          <button className={view360 ? 'active' : ''} onClick={() => setView360((v) => !v)}
            title="Stream 2:1 detectado: proyectarlo como esfera 360 navegable">
            🌐 Vista 360
          </button>
        )}
        {laserSupported() && (
          <button className={laser ? 'active' : ''} onClick={toggleLaser}>
            🔗 {laser ? 'Láser conectado' : 'Conectar láser'}
          </button>
        )}
        {is360 && (
          <button className="active" onClick={captureAndMeasure}
            title="Congela el fotograma equirectangular y ábrelo como foto medible en el visor">
            📥 Capturar y medir
          </button>
        )}
        <button onClick={capture} disabled={!!error}
          title="Guarda el fotograma con la lectura del láser y la fecha estampadas — evidencia para peritajes">
          📸 Capturar con lectura
        </button>
        <button onClick={onClose}>✕ Cerrar</button>
      </div>

      <p className="live-note">
        {is360
          ? 'Cámara 360 detectada (stream 2:1). 📥 congela el fotograma y lo abre listo para medir.'
          : 'Consejo: una Ricoh Theta conectada por USB en modo LIVE aparece en el selector como webcam 360 (en Windows, con el driver UVC gratuito de RICOH). El WiFi de las cámaras 360 no es accesible desde el navegador.'}
      </p>
    </div>
  )
}
