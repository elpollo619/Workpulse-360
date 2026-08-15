import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import {
  floorPointFromDirection, floorDistance, floorPathLength,
  floorPolygonArea, objectHeight, solveCameraHeight, snapToAngle, bearingOf,
  wallPlaneFromPoints, wallPointFromDirection, dist3D,
} from './pano.js'
import { UNIT_SYSTEMS, fmtLength, fmtArea, fmtValue } from './units.js'
import { laserSupported, connectLaser } from './laser.js'

const MODES = [
  { id: 'distance', label: '📏 Distancia', hint: 'Toca dos puntos del SUELO' },
  { id: 'path', label: '📐 Ruta / Área', hint: 'Encadena puntos del suelo; toca el 1º punto o ⬛ para cerrar' },
  { id: 'height', label: '📊 Altura', hint: 'Toca el PIE del objeto (en el suelo) y luego su parte ALTA' },
  { id: 'wall', label: '🧱 Pared', hint: 'Toca 2 puntos de la BASE de la pared (en el suelo); después mide pares de puntos SOBRE esa pared (ventanas, huecos, diagonales)' },
  { id: 'slope', label: '⛰️ Pendiente', hint: 'Ángulo de techo inclinado: PIE y TOPE del punto BAJO, luego PIE y TOPE del punto ALTO' },
  { id: 'note', label: '📝 Nota', hint: 'Toca cualquier punto para anclar una nota (defecto, material, recordatorio…)' },
  { id: 'marker', label: '🔌 Elemento', hint: 'Instalación eléctrica: elige el tipo y toca el SUELO justo bajo el elemento — aparecerá en el plano con su posición' },
  { id: 'calibrate', label: '🎯 Calibrar', hint: 'Toca 2 puntos del suelo con distancia CONOCIDA (p. ej. una baldosa o un metro plegable)' },
  { id: 'calibv', label: '🚪 Puerta', hint: 'Calibrar con altura conocida: toca el PIE y el TOPE de una puerta (CH ≈ 2.10 m; stock antiguo 2.00) u otra referencia' },
]

/** Tipos de elemento de instalación (planificación eléctrica, estilo immersight). */
export const MARKER_TYPES = [
  { id: 'enchufe', label: '🔌 Enchufe', sym: 'E' },
  { id: 'interruptor', label: '💡 Interruptor', sym: 'I' },
  { id: 'luminaria', label: '🔆 Luminaria', sym: 'L' },
  { id: 'caja', label: '📦 Caja de derivación', sym: 'C' },
  { id: 'red', label: '🌐 Toma de red/TV', sym: 'R' },
  { id: 'radiador', label: '🔥 Radiador', sym: 'H' },
  { id: 'sanitario', label: '🚰 Sanitario', sym: 'S' },
]

/** Color de confianza según la distancia horizontal del punto (modelo de error). */
function confidenceColor(horizontal) {
  if (horizontal == null) return '#ffffff'
  if (horizontal < 4) return '#34d399'
  if (horizontal < 8) return '#f59e0b'
  return '#f87171'
}

/** Reorienta un rayo para que caiga en la misma vertical (yaw) que otro. */
function plumbSnap(dir, refDir) {
  const yaw = Math.atan2(refDir.x, refDir.z)
  const pitch = Math.asin(Math.max(-1, Math.min(1, dir.y)))
  const c = Math.cos(pitch)
  return { x: c * Math.sin(yaw), y: Math.sin(pitch), z: c * Math.cos(yaw) }
}

export const MEASURE_COLORS = [
  '#34d399', '#60a5fa', '#f472b6', '#f59e0b',
  '#a78bfa', '#f87171', '#4ade80', '#22d3ee',
]

const LOUPE = { size: 150, margin: 12, fov: 10 }

/** Sprite de etiqueta (texto sobre fondo redondeado) para el visor. */
function makeLabelSprite(text, color) {
  const pad = 14
  const fs = 30
  const canvas = document.createElement('canvas')
  const g = canvas.getContext('2d')
  g.font = `600 ${fs}px system-ui, sans-serif`
  const w = Math.ceil(g.measureText(text).width) + pad * 2
  const h = fs + pad * 1.4
  canvas.width = w
  canvas.height = h
  g.font = `600 ${fs}px system-ui, sans-serif`
  g.fillStyle = 'rgba(10,14,18,0.82)'
  g.beginPath()
  if (g.roundRect) g.roundRect(1, 1, w - 2, h - 2, 12)
  else g.rect(1, 1, w - 2, h - 2)
  g.fill()
  g.strokeStyle = color
  g.lineWidth = 3
  g.stroke()
  g.fillStyle = '#fff'
  g.textBaseline = 'middle'
  g.fillText(text, pad, h / 2 + 1)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false }))
  const scale = 4.2
  sprite.scale.set((w / h) * scale, scale, 1)
  return sprite
}

/** Tap sintético a partir de un punto del suelo (tras un ajuste ortogonal). */
function tapFromFloorPoint(fp, h) {
  const dir = new THREE.Vector3(fp.x, -h, fp.z).normalize()
  return {
    dir: { x: dir.x, y: dir.y, z: dir.z },
    fp: { ...fp, y: -h, horizontal: Math.hypot(fp.x, fp.z), r: Math.hypot(fp.x, h, fp.z) },
  }
}

/**
 * Visor de fotos 360° con medición real, lupa de precisión, calibración,
 * snapping ortogonal, etiquetas 3D, deshacer y giroscopio.
 */
export default function Pano360View({
  imageURL, measurements = [], onSave, onDelete, onRename, onOpenPlan, onClose,
  extraControls, initialCamHeight = 1.6, onCamHeight, unitSys = 'm', onUnitSys,
  initialLevel = { pitch: 0, roll: 0 }, onLevel,
}) {
  const mountRef = useRef(null)
  const stateRef = useRef({})
  const [camHeight, setCamHeight] = useState(initialCamHeight)
  const camHeightRef = useRef(initialCamHeight)
  const [mode, setMode] = useState('distance')
  const modeRef = useRef('distance')
  const [taps, setTaps] = useState([])
  const tapsRef = useRef([])
  const [message, setMessage] = useState(MODES[0].hint)
  const [panelOpen, setPanelOpen] = useState(true)
  const [ortho, setOrtho] = useState(true)
  const orthoRef = useRef(true)
  const [gyro, setGyro] = useState(false)
  const gyroRef = useRef({ enabled: false, alpha: 0, beta: 0, gamma: 0, orient: 0, seen: false })
  const measurementsRef = useRef(measurements)
  const unitRef = useRef(unitSys)
  const keepMsgRef = useRef(false)
  const [markerType, setMarkerType] = useState('enchufe')
  const markerTypeRef = useRef('enchufe')
  const [level, setLevel] = useState(initialLevel) // grados {pitch, roll}
  const [levelOpen, setLevelOpen] = useState(false)
  const calibSamplesRef = useRef([]) // muestras {h, w} de calibración
  const [laser, setLaser] = useState(null) // {disconnect}
  const [laserReading, setLaserReading] = useState(null) // metros
  const laserRef = useRef({ value: null, at: 0 })

  useEffect(() => { tapsRef.current = taps }, [taps])
  useEffect(() => { orthoRef.current = ortho }, [ortho])
  useEffect(() => { unitRef.current = unitSys }, [unitSys])
  useEffect(() => { markerTypeRef.current = markerType }, [markerType])

  // El listener de clic se registra una sola vez; esta ref le da siempre las
  // funciones de guardado del render actual (evita cierres obsoletos).
  const apiRef = useRef({})

  useEffect(() => { camHeightRef.current = camHeight; onCamHeight?.(camHeight) }, [camHeight])
  useEffect(() => { measurementsRef.current = measurements }, [measurements])
  useEffect(() => {
    modeRef.current = mode
    setTaps([])
    setMessage(MODES.find((m) => m.id === mode)?.hint ?? '')
  }, [mode])

  function nextLabel(m) {
    const prefix = { distance: 'D', path: 'A', height: 'H', wall: 'W', note: 'N', slope: 'P', marker: 'E' }[m] ?? 'M'
    const n = measurementsRef.current.filter((x) => x.label?.startsWith(prefix)).length + 1
    return `${prefix}${n}`
  }

  function saveDistance(a, b) {
    const value = floorDistance(a.fp, b.fp)
    onSave?.({
      id: crypto.randomUUID(),
      mode: 'distance',
      label: nextLabel('distance'),
      value,
      unit: 'm',
      points: [a.fp, b.fp],
      dirs: [a.dir, b.dir],
      camHeight: camHeightRef.current,
    })
    setMessage(`📏 Guardado: ${fmtLength(value, unitRef.current)}`)
    setTaps([])
  }

  async function toggleLaser() {
    if (laser) {
      laser.disconnect()
      setLaser(null)
      setLaserReading(null)
      return
    }
    try {
      const conn = await connectLaser(
        (m) => {
          laserRef.current = { value: m, at: Date.now() }
          setLaserReading(m)
        },
        () => { setLaser(null); setLaserReading(null) }
      )
      setLaser(conn)
      setMessage(conn.kind === 'bosch'
        ? '🔗 Bosch GLM conectado. Dispara una medición en el aparato y su valor se ofrecerá al calibrar.'
        : '🔗 Láser conectado. Su lectura se ofrecerá como valor al calibrar.')
    } catch {
      setMessage('⚠️ No se pudo conectar el láser (¿Bluetooth activado? ¿Chrome/Edge?).')
    }
  }

  function applyCalibration(measured, promptText, defaultVal = '') {
    // Si hay un láser conectado con lectura reciente, se ofrece como valor.
    const l = laserRef.current
    if (l.value != null && Date.now() - l.at < 60000) {
      defaultVal = l.value.toFixed(3)
      promptText += `\n🔗 Lectura del láser: ${l.value.toFixed(3)} m (propuesta como valor)`
    }
    const input = prompt(promptText, defaultVal)
    if (input === null) { setTaps([]); return }
    const real = parseFloat(String(input).replace(',', '.'))
    // Toda la geometría escala linealmente con la altura de cámara, así que la
    // misma regla de tres sirve para referencias horizontales y verticales.
    const h = solveCameraHeight(camHeightRef.current, measured, real)
    if (h == null) {
      setMessage('⚠️ Valor no válido. La altura resultante debe estar entre 0.2 y 10 m.')
      setTaps([])
      return
    }
    // Calibración multi-muestra: cada referencia añade una estimación de h y
    // se ajusta la media ponderada por longitud (las referencias largas pesan
    // más). La dispersión entre muestras estima la calidad de la calibración.
    calibSamplesRef.current.push({ h, w: real })
    const samples = calibSamplesRef.current
    const wSum = samples.reduce((s, x) => s + x.w, 0)
    const hFit = samples.reduce((s, x) => s + x.h * x.w, 0) / wSum
    setCamHeight(Math.round(hFit * 1000) / 1000)
    if (samples.length === 1) {
      setMessage(`🎯 Altura de cámara calibrada: ${hFit.toFixed(3)} m. Añade otra referencia (en otra dirección) para afinar más.`)
    } else {
      const disp = Math.max(...samples.map((x) => Math.abs(x.h - hFit))) / hFit * 100
      const quality = disp < 1 ? 'excelente' : disp < 2.5 ? 'buena' : '⚠️ revisa la nivelación'
      setMessage(`🎯 h = ${hFit.toFixed(3)} m con ${samples.length} referencias · dispersión ±${disp.toFixed(1)} % (${quality})`)
    }
    setTaps([])
  }

  function calibrateWith(a, b) {
    const measured = floorDistance(a.fp, b.fp)
    applyCalibration(
      measured,
      `Distancia medida ahora: ${measured.toFixed(2)} m con cámara a ${camHeightRef.current.toFixed(2)} m.\n` +
      '¿Cuál es la distancia REAL entre esos dos puntos, en metros?\n' +
      'Referencias: hoja A4 = 0.297 · baldosa habitual 0.30 / 0.60 · módulo de cocina suizo 0.55'
    )
  }

  function calibrateVerticalWith(foot, topDir) {
    const measured = objectHeight(foot.fp, topDir, camHeightRef.current)
    if (measured == null || measured <= 0) {
      setMessage('⚠️ No se pudo calcular. Toca el tope en la misma vertical del pie.')
      setTaps([])
      return
    }
    applyCalibration(
      measured,
      `Altura medida ahora: ${measured.toFixed(2)} m.\n` +
      '¿Cuál es la altura REAL del objeto, en metros?\n' +
      'Referencias CH: puerta 2.10 (stock antiguo 2.00) · encimera 0.90 · ' +
      'interruptor ≈ 1.05 · barandilla 0.90–1.00 (SIA 358)',
      '2.10'
    )
  }

  function saveHeight(foot, topDir) {
    const value = objectHeight(foot.fp, topDir, camHeightRef.current)
    if (value == null || value <= 0) {
      setMessage('⚠️ No se pudo calcular. Toca el tope en la misma vertical del pie.')
      setTaps([])
      return
    }
    onSave?.({
      id: crypto.randomUUID(),
      mode: 'height',
      label: nextLabel('height'),
      value,
      unit: 'm',
      points: [foot.fp],
      dirs: [foot.dir, topDir],
      camHeight: camHeightRef.current,
    })
    setMessage(`📊 Guardado: altura ${fmtLength(value, unitRef.current)}`)
    setTaps([])
  }

  function savePath(close) {
    const current = tapsRef.current
    const floorPts = current.filter((t) => t.fp).map((t) => t.fp)
    if (floorPts.length < 2) return
    const isArea = close && floorPts.length >= 3
    const value = isArea
      ? floorPolygonArea(floorPts)
      : floorPathLength(floorPts)
    onSave?.({
      id: crypto.randomUUID(),
      mode: isArea ? 'area' : 'path',
      label: nextLabel('path'),
      value,
      unit: isArea ? 'm²' : 'm',
      perimeter: isArea ? floorPathLength([...floorPts, floorPts[0]]) : undefined,
      points: floorPts,
      dirs: current.map((t) => t.dir),
      closed: isArea,
      camHeight: camHeightRef.current,
    })
    setMessage(isArea
      ? `📐 Guardado: área ${fmtArea(value, unitRef.current)}`
      : `📐 Guardado: ruta ${fmtLength(value, unitRef.current)}`)
    setTaps([])
  }

  function screenshot() {
    const { renderer } = stateRef.current
    renderer?.domElement.toBlob((blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'workpulse360-captura.png'
      a.click()
      URL.revokeObjectURL(url)
      setMessage('📸 Captura descargada (vista actual con mediciones)')
    }, 'image/png')
  }

  function copyValue(mm) {
    const txt = fmtValue(mm, unitRef.current)
    navigator.clipboard?.writeText(txt)
      .then(() => setMessage(`📋 Copiado: ${mm.label} = ${txt}`))
      .catch(() => {})
  }

  function saveWallDistance(baseA, baseB, p1, p2) {
    const value = dist3D(p1, p2)
    onSave?.({
      id: crypto.randomUUID(),
      mode: 'wall',
      label: nextLabel('wall'),
      value,
      unit: 'm',
      points: [p1, p2],
      base: [baseA.fp, baseB.fp],
      dirs: [p1, p2].map((p) => {
        const n = Math.hypot(p.x, p.y, p.z) || 1
        return { x: p.x / n, y: p.y / n, z: p.z / n }
      }),
      camHeight: camHeightRef.current,
    })
    setMessage(`🧱 Guardado: ${fmtLength(value, unitRef.current)} sobre la pared. Sigue midiendo en la misma pared o cambia de modo.`)
    // La base de la pared se conserva para encadenar más medidas; se salta el
    // siguiente mensaje automático para no tapar el "Guardado".
    keepMsgRef.current = true
    setTaps((prev) => prev.slice(0, 2))
  }

  function saveSlope(f1, t1dir, f2, t2dir) {
    const h = camHeightRef.current
    const h1 = objectHeight(f1.fp, t1dir, h)
    const h2 = objectHeight(f2.fp, t2dir, h)
    const run = floorDistance(f1.fp, f2.fp)
    if (h1 == null || h2 == null || run < 0.05) {
      setMessage('⚠️ No se pudo calcular la pendiente. Los dos pies deben estar separados y en el suelo.')
      setTaps([])
      return
    }
    const angle = Math.abs(Math.atan2(h2 - h1, run) * 180 / Math.PI)
    const lo = Math.min(h1, h2)
    const hi = Math.max(h1, h2)
    // Regla WBS: ¿a qué distancia del punto bajo la altura cruza 1.50 m?
    const crossTxt = lo < 1.5 && hi > 1.5
      ? ` · cruza 1.50 m a ${(run * (1.5 - lo) / (hi - lo)).toFixed(2)} m del punto bajo`
      : ''
    onSave?.({
      id: crypto.randomUUID(),
      mode: 'slope',
      label: nextLabel('slope'),
      value: angle,
      unit: '°',
      text: `${lo.toFixed(2)}→${hi.toFixed(2)} m sobre ${run.toFixed(2)} m${crossTxt}`,
      points: [f1.fp, f2.fp],
      dirs: [f1.dir, t1dir, f2.dir, t2dir],
      camHeight: h,
    })
    setMessage(`⛰️ Guardado: pendiente ${angle.toFixed(1)}° (${lo.toFixed(2)} m → ${hi.toFixed(2)} m)${crossTxt}`)
    setTaps([])
  }

  function saveMarker(tap) {
    const type = MARKER_TYPES.find((t) => t.id === markerTypeRef.current) ?? MARKER_TYPES[0]
    onSave?.({
      id: crypto.randomUUID(),
      mode: 'marker',
      label: nextLabel('marker'),
      value: 0,
      unit: '',
      text: type.id,
      points: [tap.fp],
      dirs: [tap.dir],
      camHeight: camHeightRef.current,
    })
    setMessage(`${type.label} colocado a ${fmtLength(tap.fp.horizontal, unitRef.current)} de la cámara. Sigue colocando o cambia de modo.`)
    setTaps([])
  }

  function saveNote(dir) {
    const text = prompt('Texto de la nota (defecto, material, recordatorio…):')
    if (!text?.trim()) { setTaps([]); return }
    onSave?.({
      id: crypto.randomUUID(),
      mode: 'note',
      label: nextLabel('note'),
      value: 0,
      unit: 'nota',
      text: text.trim(),
      points: [],
      dirs: [dir],
      camHeight: camHeightRef.current,
    })
    setMessage('📝 Nota anclada')
    setTaps([])
  }

  function undo() {
    if (tapsRef.current.length > 0) {
      setTaps((p) => p.slice(0, -1))
      setMessage('↩️ Punto deshecho')
    } else if (measurementsRef.current.length > 0) {
      const last = measurementsRef.current[measurementsRef.current.length - 1]
      onDelete?.(last.id)
      setMessage(`↩️ Medición ${last.label} eliminada`)
    }
  }

  apiRef.current = {
    saveDistance, saveHeight, savePath, calibrateWith, calibrateVerticalWith,
    saveWallDistance, saveNote, saveSlope, saveMarker, undo,
  }

  // El láser se desconecta al cerrar el visor.
  useEffect(() => () => { laser?.disconnect() }, [laser])

  // Nivelación fina: girar la ESFERA compensa la inclinación de la cámara al
  // capturar; los rayos de medición siguen en coordenadas de mundo niveladas.
  useEffect(() => {
    const { sphere, verticalsGroup } = stateRef.current
    if (!sphere) return
    sphere.rotation.set(
      THREE.MathUtils.degToRad(level.pitch),
      0,
      THREE.MathUtils.degToRad(level.roll)
    )
    if (verticalsGroup) verticalsGroup.visible = levelOpen
    onLevel?.(level)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, levelOpen, imageURL])

  // Atajos de teclado: Ctrl+Z deshacer, Escape cancelar, Enter cerrar área.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault()
        apiRef.current.undo()
      } else if (e.key === 'Escape') {
        setTaps([])
      } else if (e.key === 'Enter' && modeRef.current === 'path' && tapsRef.current.length >= 3) {
        apiRef.current.savePath(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Giroscopio (móvil): mirar moviendo el teléfono, como los visores de tours.
  async function toggleGyro() {
    if (!gyro && typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const res = await DeviceOrientationEvent.requestPermission()
        if (res !== 'granted') { setMessage('⚠️ Permiso de giroscopio denegado.'); return }
      } catch { setMessage('⚠️ No se pudo pedir permiso de giroscopio.'); return }
    }
    setGyro((v) => {
      gyroRef.current.enabled = !v
      return !v
    })
  }

  useEffect(() => {
    const onOrient = (e) => {
      const g = gyroRef.current
      if (e.alpha == null) return
      g.alpha = THREE.MathUtils.degToRad(e.alpha)
      g.beta = THREE.MathUtils.degToRad(e.beta)
      g.gamma = THREE.MathUtils.degToRad(e.gamma)
      g.seen = true
    }
    const onScreen = () => {
      gyroRef.current.orient = THREE.MathUtils.degToRad(
        (screen.orientation?.angle ?? window.orientation ?? 0)
      )
    }
    onScreen()
    window.addEventListener('deviceorientation', onOrient)
    window.addEventListener('orientationchange', onScreen)
    return () => {
      window.removeEventListener('deviceorientation', onOrient)
      window.removeEventListener('orientationchange', onScreen)
    }
  }, [])

  useEffect(() => {
    if (!imageURL || !mountRef.current) return
    const mount = mountRef.current

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 200)
    camera.position.set(0, 0, 0.01)
    const loupeCamera = new THREE.PerspectiveCamera(LOUPE.fov, 1, 0.1, 200)
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(50, 64, 48),
      new THREE.MeshBasicMaterial({ side: THREE.BackSide })
    )
    scene.add(sphere)
    new THREE.TextureLoader().load(imageURL, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      sphere.material.map = tex
      sphere.material.needsUpdate = true
    })

    const savedGroup = new THREE.Group()
    const draftGroup = new THREE.Group()
    scene.add(savedGroup, draftGroup)

    // Línea de horizonte: guía sutil para comprobar la nivelación de la foto
    // y saber desde dónde "empieza el suelo" al tocar.
    const horizonPts = []
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2
      horizonPts.push(new THREE.Vector3(Math.cos(a) * 49, 0, Math.sin(a) * 49))
    }
    const horizon = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(horizonPts),
      new THREE.LineBasicMaterial({ color: 0x8b9aa7, transparent: true, opacity: 0.35 })
    )
    scene.add(horizon)

    // Rejilla de verticales (círculos máximos por el cénit cada 30° de yaw):
    // al nivelar, las aristas verticales de puertas y paredes deben quedar
    // paralelas a estas guías. Solo visible con el panel de nivel abierto.
    const verticalsGroup = new THREE.Group()
    for (let yaw = 0; yaw < 360; yaw += 30) {
      const pts = []
      const ya = (yaw * Math.PI) / 180
      for (let i = 0; i <= 64; i++) {
        const t = -Math.PI / 2 + (i / 64) * Math.PI
        pts.push(new THREE.Vector3(
          Math.cos(t) * Math.sin(ya) * 49,
          Math.sin(t) * 49,
          Math.cos(t) * Math.cos(ya) * 49
        ))
      }
      verticalsGroup.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.3 })
      ))
    }
    verticalsGroup.visible = false
    scene.add(verticalsGroup)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.rotateSpeed = -0.35

    const setFov = (f) => {
      camera.fov = Math.min(100, Math.max(20, f))
      camera.updateProjectionMatrix()
    }
    const onWheel = (e) => {
      e.preventDefault()
      setFov(camera.fov + e.deltaY * 0.05)
    }
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false })

    // Zoom con pellizco (dos dedos) en móvil.
    let pinchDist = 0
    const onTouchStart = (e) => {
      if (e.touches.length === 2) {
        controls.enabled = false
        pinchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
      }
    }
    const onTouchMove = (e) => {
      if (e.touches.length === 2 && pinchDist > 0) {
        e.preventDefault()
        const d = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
        setFov(camera.fov * (pinchDist / d))
        pinchDist = d
      }
    }
    const onTouchEnd = (e) => {
      if (e.touches.length < 2) { pinchDist = 0; controls.enabled = !gyroRef.current.enabled }
    }
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: false })
    renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: false })
    renderer.domElement.addEventListener('touchend', onTouchEnd)

    const raycaster = new THREE.Raycaster()
    const pointer = { x: 0, y: 0, active: false }
    const ndcFromEvent = (e) => {
      const rect = renderer.domElement.getBoundingClientRect()
      return new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      )
    }

    let downAt = null
    const onDown = (e) => { downAt = [e.clientX, e.clientY] }
    const paneEl = mount.closest('.pano360')
    const onMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      pointer.active = true
      paneEl?.classList.add('loupe-on')
    }
    const onLeave = () => {
      pointer.active = false
      paneEl?.classList.remove('loupe-on')
    }
    const onUp = (e) => {
      if (e.pointerType === 'touch') {
        // En táctil la lupa solo vive mientras el dedo está en pantalla.
        pointer.active = false
        paneEl?.classList.remove('loupe-on')
      }
      if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6) return
      raycaster.setFromCamera(ndcFromEvent(e), camera)
      const dir = raycaster.ray.direction.clone().normalize()
      const m = modeRef.current
      const h = camHeightRef.current
      let fp = floorPointFromDirection(dir, h)

      // Lógica fuera del actualizador de estado para no duplicar guardados.
      const prev = tapsRef.current
      let tap = { dir: { x: dir.x, y: dir.y, z: dir.z }, fp }
      if (m === 'distance' || m === 'calibrate') {
        if (!fp) { setMessage('⚠️ Ese punto no está en el suelo. Apunta más abajo.'); return }
        if (prev.length === 1) {
          m === 'calibrate'
            ? apiRef.current.calibrateWith(prev[0], tap)
            : apiRef.current.saveDistance(prev[0], tap)
        } else setTaps([tap])
      } else if (m === 'path') {
        if (!fp) { setMessage('⚠️ Ese punto no está en el suelo. Apunta más abajo.'); return }
        // Cierre automático: tocar cerca del primer punto cierra el polígono.
        if (prev.length >= 3 && prev[0].fp) {
          const closeTol = Math.max(0.15, floorPathLength(prev.map((t) => t.fp)) * 0.02)
          if (floorDistance(fp, prev[0].fp) < closeTol) { apiRef.current.savePath(true); return }
        }
        // Snapping ortogonal tipo CAD (45°) respecto al primer tramo.
        if (orthoRef.current && prev.length >= 1 && prev[prev.length - 1].fp) {
          const ref = prev.length >= 2 && prev[0].fp && prev[1].fp
            ? bearingOf(prev[0].fp, prev[1].fp) : 0
          const snapped = snapToAngle(prev[prev.length - 1].fp, fp, ref)
          if (snapped !== fp) tap = tapFromFloorPoint(snapped, h)
        }
        setTaps([...prev, tap])
      } else if (m === 'wall') {
        if (prev.length < 2) {
          // Las dos primeras marcas definen la base de la pared en el suelo.
          if (!fp) { setMessage('⚠️ La base de la pared debe estar en el suelo.'); return }
          setTaps([...prev, tap])
        } else {
          const plane = wallPlaneFromPoints(prev[0].fp, prev[1].fp)
          const wp = plane && wallPointFromDirection(dir, plane)
          if (!wp) { setMessage('⚠️ Ese rayo no corta el plano de la pared. Apunta hacia la pared definida.'); return }
          const wallTap = { dir: tap.dir, wp }
          if (prev.length === 3) {
            apiRef.current.saveWallDistance(prev[0], prev[1], prev[2].wp, wp)
          } else {
            setTaps([...prev, wallTap])
          }
        }
      } else if (m === 'slope') {
        // Pares pie/tope: índices pares = pie en el suelo, impares = tope a plomada.
        if (prev.length % 2 === 0) {
          if (!fp) { setMessage('⚠️ El PIE debe estar en el suelo.'); return }
          setTaps([...prev, tap])
        } else {
          const topDir = plumbSnap(tap.dir, prev[prev.length - 1].dir)
          if (prev.length === 3) {
            apiRef.current.saveSlope(prev[0], prev[1].topDir ?? prev[1].dir, prev[2], topDir)
          } else {
            setTaps([...prev, { dir: topDir, topDir, fp: null }])
          }
        }
      } else if (m === 'note') {
        apiRef.current.saveNote(tap.dir)
      } else if (m === 'marker') {
        if (!fp) { setMessage('⚠️ Toca el SUELO justo bajo el elemento (su vertical).'); return }
        apiRef.current.saveMarker(tap)
      } else {
        // height / calibración vertical: pie en el suelo + tope a plomada
        if (prev.length === 0) {
          if (!fp) { setMessage('⚠️ El PIE debe estar en el suelo. Toca la base del objeto.'); return }
          setTaps([tap])
        } else {
          // Snap a plomada: el tope se lleva a la misma vertical que el pie.
          const topDir = plumbSnap(tap.dir, prev[0].dir)
          m === 'calibv'
            ? apiRef.current.calibrateVerticalWith(prev[0], topDir)
            : apiRef.current.saveHeight(prev[0], topDir)
        }
      }
    }
    renderer.domElement.addEventListener('pointerdown', onDown)
    renderer.domElement.addEventListener('pointermove', onMove)
    renderer.domElement.addEventListener('pointerleave', onLeave)
    renderer.domElement.addEventListener('pointerup', onUp)

    stateRef.current = { scene, camera, renderer, savedGroup, draftGroup, controls, sphere, verticalsGroup }

    // Orientación por giroscopio (algoritmo W3C clásico de three.js).
    const zee = new THREE.Vector3(0, 0, 1)
    const euler = new THREE.Euler()
    const q0 = new THREE.Quaternion()
    const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5))

    let raf
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const g = gyroRef.current
      if (g.enabled && g.seen) {
        controls.enabled = false
        euler.set(g.beta, g.alpha, -g.gamma, 'YXZ')
        camera.quaternion.setFromEuler(euler)
        camera.quaternion.multiply(q1)
        camera.quaternion.multiply(q0.setFromAxisAngle(zee, -g.orient))
      } else {
        if (!controls.enabled && pinchDist === 0) controls.enabled = true
        controls.update()
      }

      renderer.setViewport(0, 0, mount.clientWidth, mount.clientHeight)
      renderer.setScissorTest(false)
      renderer.render(scene, camera)

      // Lupa de precisión: vista ampliada de donde está el puntero.
      if (pointer.active) {
        raycaster.setFromCamera(pointer, camera)
        loupeCamera.position.set(0, 0, 0)
        loupeCamera.lookAt(raycaster.ray.direction)
        const y = 64
        renderer.setViewport(LOUPE.margin, y, LOUPE.size, LOUPE.size)
        renderer.setScissor(LOUPE.margin, y, LOUPE.size, LOUPE.size)
        renderer.setScissorTest(true)
        renderer.render(scene, loupeCamera)
        renderer.setScissorTest(false)
      }
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
      renderer.domElement.removeEventListener('touchstart', onTouchStart)
      renderer.domElement.removeEventListener('touchmove', onTouchMove)
      renderer.domElement.removeEventListener('touchend', onTouchEnd)
      renderer.domElement.removeEventListener('pointerdown', onDown)
      renderer.domElement.removeEventListener('pointermove', onMove)
      renderer.domElement.removeEventListener('pointerleave', onLeave)
      renderer.domElement.removeEventListener('pointerup', onUp)
      controls.dispose()
      sphere.geometry.dispose()
      sphere.material.map?.dispose()
      sphere.material.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [imageURL])

  const anchor = (dir) =>
    new THREE.Vector3(dir.x, dir.y, dir.z).normalize().multiplyScalar(48)

  // Un segmento recto del suelo se ve CURVO en la esfera equirectangular:
  // se muestrea en el plano del suelo y se reproyecta punto a punto.
  const segmentArc = (p1, p2, camH, segs = 16) => {
    const pts = []
    for (let i = 0; i <= segs; i++) {
      const t = i / segs
      const x = p1.x + (p2.x - p1.x) * t
      const z = p1.z + (p2.z - p1.z) * t
      pts.push(new THREE.Vector3(x, -camH, z).normalize().multiplyScalar(48))
    }
    return pts
  }

  // Dibuja las mediciones guardadas (un color y una etiqueta por medición).
  useEffect(() => {
    const { savedGroup } = stateRef.current
    if (!savedGroup) return
    savedGroup.clear()
    measurements.forEach((mm, idx) => {
      const colorHex = MEASURE_COLORS[idx % MEASURE_COLORS.length]
      const color = new THREE.Color(colorHex)
      const anchors = (mm.dirs ?? []).map(anchor)
      for (const a of anchors) {
        const s = new THREE.Mesh(
          new THREE.SphereGeometry(0.55, 14, 10),
          new THREE.MeshBasicMaterial({ color })
        )
        s.position.copy(a)
        savedGroup.add(s)
      }
      // Línea de la medición, curvada correctamente sobre la esfera.
      const camH = mm.camHeight ?? camHeightRef.current
      let linePts = null
      if (mm.mode === 'height' && mm.points?.[0]) {
        const p = mm.points[0]
        const topY = mm.value - camH
        linePts = []
        for (let i = 0; i <= 12; i++) {
          const y = -camH + (topY + camH) * (i / 12)
          linePts.push(new THREE.Vector3(p.x, y, p.z).normalize().multiplyScalar(48))
        }
      } else if (mm.mode === 'wall' && (mm.points?.length ?? 0) >= 2) {
        // Segmento 3D sobre la pared: interpolar y reproyectar a la esfera.
        const [p1, p2] = mm.points
        linePts = []
        for (let i = 0; i <= 16; i++) {
          const t = i / 16
          linePts.push(new THREE.Vector3(
            p1.x + (p2.x - p1.x) * t,
            p1.y + (p2.y - p1.y) * t,
            p1.z + (p2.z - p1.z) * t
          ).normalize().multiplyScalar(48))
        }
      } else if (mm.mode !== 'note' && (mm.points?.length ?? 0) >= 2) {
        const seq = mm.closed ? [...mm.points, mm.points[0]] : mm.points
        linePts = []
        for (let i = 1; i < seq.length; i++) linePts.push(...segmentArc(seq[i - 1], seq[i], camH))
      } else if (anchors.length >= 2) {
        linePts = mm.closed ? [...anchors, anchors[0]] : anchors
      }
      if (linePts) {
        savedGroup.add(new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(linePts),
          new THREE.LineBasicMaterial({ color })
        ))
      }
      // Etiqueta flotante con el valor, en el punto medio de la medición.
      const labelAnchors = linePts?.length ? linePts : anchors
      if (labelAnchors.length >= 1) {
        const mid = labelAnchors[Math.floor(labelAnchors.length / 2)].clone()
        const markerT = mm.mode === 'marker'
          ? (MARKER_TYPES.find((t) => t.id === mm.text) ?? MARKER_TYPES[0])
          : null
        const text = mm.mode === 'note'
          ? `📝 ${(mm.text ?? '').slice(0, 28)}${(mm.text ?? '').length > 28 ? '…' : ''}`
          : markerT
            ? markerT.label
            : `${mm.label} · ${fmtValue(mm, unitSys)}`
        const sprite = makeLabelSprite(text, colorHex)
        sprite.position.copy(mid.normalize().multiplyScalar(44))
        savedGroup.add(sprite)
      }
    })
  }, [measurements, imageURL, unitSys])

  // Dibuja el borrador y actualiza el mensaje.
  useEffect(() => {
    const { draftGroup } = stateRef.current
    if (!draftGroup) return
    draftGroup.clear()
    const anchors = taps.map((t) => anchor(t.dir))
    taps.forEach((t, i) => {
      // Color de confianza: verde cerca, ámbar a media distancia, rojo lejos.
      const s = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 14, 10),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(confidenceColor(t.fp?.horizontal)) })
      )
      s.position.copy(anchors[i])
      draftGroup.add(s)
    })
    if (anchors.length >= 2) {
      const camH = camHeightRef.current
      const allFloor = taps.every((t) => t.fp)
      let linePts = anchors
      if (allFloor) {
        linePts = []
        for (let i = 1; i < taps.length; i++) linePts.push(...segmentArc(taps[i - 1].fp, taps[i].fp, camH))
      }
      draftGroup.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(linePts),
        new THREE.LineBasicMaterial({ color: 0xffffff })
      ))
    }

    if (taps.length === 0) return
    if (keepMsgRef.current) { keepMsgRef.current = false; return }
    const floorPts = taps.filter((t) => t.fp).map((t) => t.fp)
    const u = unitSys
    if ((mode === 'distance' || mode === 'calibrate') && floorPts.length === 1) {
      setMessage(`📍 A ${fmtLength(floorPts[0].horizontal, u)} de la cámara. Toca el segundo punto.`)
    } else if (mode === 'path') {
      const closed = floorPts.length >= 3
        ? ` · área si cierras: ${fmtArea(floorPolygonArea(floorPts), u)}`
        : ''
      setMessage(`📐 ${floorPts.length} puntos · recorrido ${fmtLength(floorPathLength(floorPts), u)}${closed}`)
    } else if ((mode === 'height' || mode === 'calibv') && taps.length === 1) {
      const far = floorPts[0].horizontal > 8 ? ' ⚠️ punto muy lejano, precisión baja' : ''
      setMessage(`📍 Pie a ${fmtLength(floorPts[0].horizontal, u)}. Ahora toca la parte ALTA (se ajusta a plomada).${far}`)
    } else if (mode === 'wall') {
      if (taps.length === 1) setMessage('🧱 Toca el SEGUNDO punto de la base de la pared (en el suelo).')
      else if (taps.length === 2) setMessage(`🧱 Pared definida (base ${fmtLength(floorDistance(taps[0].fp, taps[1].fp), u)}). Toca 2 puntos SOBRE la pared para medir.`)
      else if (taps.length === 3) setMessage('🧱 Toca el segundo punto sobre la pared (ancho, alto o diagonal del hueco).')
    } else if (mode === 'slope') {
      const msgs = [
        '', '⛰️ Toca el TOPE sobre ese pie (punto BAJO de la pendiente).',
        '⛰️ Ahora el PIE del punto ALTO de la pendiente.',
        '⛰️ Y el TOPE sobre ese pie.',
      ]
      setMessage(msgs[taps.length] ?? '')
    }
  }, [taps, mode, unitSys])

  return (
    <div className="pano360">
      <div ref={mountRef} className="pano360-canvas" />
      <div className="pano360-loupe-frame" aria-hidden />

      <div className="pano360-top">
        {extraControls}
        <div className="pano360-modes">
          {MODES.map((m) => (
            <button key={m.id} className={mode === m.id ? 'active' : ''} onClick={() => setMode(m.id)}
              title={m.hint}>
              {m.label}
            </button>
          ))}
        </div>
        <label title="Altura de la cámara sobre el suelo (m). Usa 🎯 Calibrar si no la conoces con exactitud.">
          📷
          <input
            type="number" min="0.3" max="5" step="0.1" value={camHeight}
            onChange={(e) => setCamHeight(parseFloat(e.target.value) || 1.6)}
          /> m
        </label>
        <select value={unitSys} onChange={(e) => onUnitSys?.(e.target.value)} title="Unidades">
          {UNIT_SYSTEMS.map((u) => <option key={u.id} value={u.id}>{u.label}</option>)}
        </select>
        {mode === 'path' && (
          <button className={ortho ? 'active' : ''} onClick={() => setOrtho((v) => !v)}
            title="Snapping ortogonal: ajusta los tramos a ángulos de 45°/90°">
            ⟂
          </button>
        )}
        {mode === 'marker' && (
          <select value={markerType} onChange={(e) => setMarkerType(e.target.value)}
            title="Tipo de elemento a colocar">
            {MARKER_TYPES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        )}
        {mode === 'path' && taps.length > 0 && (
          <>
            {taps.length >= 3 && <button onClick={() => savePath(true)}>⬛ Área</button>}
            {taps.length >= 2 && <button onClick={() => savePath(false)}>💾 Ruta</button>}
          </>
        )}
        <button onClick={undo} title="Deshacer último punto o medición (Ctrl+Z)">↩️</button>
        <button onClick={() => { setTaps([]); setMessage(MODES.find((m) => m.id === mode)?.hint ?? '') }}
          title="Cancelar puntos en curso">🗑️</button>
        <button className={gyro ? 'active' : ''} onClick={toggleGyro}
          title="Giroscopio: mirar moviendo el teléfono">🧭</button>
        <button className={levelOpen ? 'active' : ''} onClick={() => setLevelOpen((v) => !v)}
          title="Nivelación fina: corrige la inclinación de la foto (clave para la precisión)">🎚️</button>
        <button onClick={screenshot} title="Descargar captura PNG de la vista con las mediciones">📸</button>
        {laserSupported() && (
          <button className={laser ? 'active' : ''} onClick={toggleLaser}
            title="Conectar el medidor láser Workpulse (Bluetooth). Su lectura se usa al calibrar.">
            🔗{laserReading != null ? ` ${laserReading.toFixed(2)} m` : ''}
          </button>
        )}
        <button onClick={() => setPanelOpen((v) => !v)}>📋</button>
        <button onClick={onClose}>✕</button>
      </div>

      {panelOpen && (
        <div className="pano360-panel">
          <b>Mediciones ({measurements.length})</b>
          <ul>
            {measurements.map((mm, idx) => (
              <li key={mm.id}>
                <span className="dot" style={{ background: MEASURE_COLORS[idx % MEASURE_COLORS.length] }} />
                <span
                  className="lbl"
                  style={{ cursor: 'pointer' }}
                  title="Clic para renombrar"
                  onClick={() => onRename?.(mm.id)}
                >
                  {mm.label}
                </span>
                <span className="val" style={{ cursor: 'copy' }} title="Clic para copiar el valor"
                  onClick={() => copyValue(mm)}>
                  {mm.mode === 'note' ? `📝 ${(mm.text ?? '').slice(0, 22)}`
                    : mm.mode === 'marker' ? (MARKER_TYPES.find((t) => t.id === mm.text)?.label ?? mm.text)
                    : fmtValue(mm, unitSys)}
                  {mm.mode === 'area' && mm.perimeter ? ` · per. ${fmtLength(mm.perimeter, unitSys, 1)}` : ''}
                </span>
                <button className="del" onClick={() => onDelete?.(mm.id)}>✕</button>
              </li>
            ))}
            {measurements.length === 0 && <li className="empty">Aún no hay mediciones.</li>}
          </ul>
          {onOpenPlan && (
            <button disabled={!measurements.some((m) => m.points?.length >= 2)} onClick={onOpenPlan}>
              🗺️ Plano de planta
            </button>
          )}
        </div>
      )}

      {levelOpen && (
        <div className="pano360-level">
          <b>🎚️ Nivelación fina</b>
          <span className="hint">Alinea las aristas verticales (puertas, esquinas) con las guías verdes y el horizonte con la línea gris.</span>
          {['pitch', 'roll'].map((axis) => (
            <label key={axis}>
              {axis === 'pitch' ? 'Cabeceo' : 'Alabeo'}
              <input
                type="range" min="-5" max="5" step="0.05" value={level[axis]}
                onChange={(e) => setLevel((prev) => ({ ...prev, [axis]: parseFloat(e.target.value) }))}
              />
              <span className="val">{level[axis].toFixed(2)}°</span>
            </label>
          ))}
          <button onClick={() => setLevel({ pitch: 0, roll: 0 })}>Reiniciar</button>
        </div>
      )}

      <div className="pano360-msg">{message}</div>
      <div className="pano360-hint">
        Suelo plano + altura de cámara calibrada = medidas fiables · arrastra para mirar · rueda o pellizco para zoom
      </div>
    </div>
  )
}
