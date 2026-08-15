import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { bearing, relativePose, toWorldDir, triangulate, stereoDistance } from './stereo.js'
import { fmtLength } from './units.js'

/**
 * Visor panorámico mínimo para el modo estéreo: girar, zoom y un pick por
 * clic. Expone addMarker/clearMarkers por ref para señalar los puntos.
 */
const PanoPicker = forwardRef(function PanoPicker({ imageURL, level, active, onPick }, ref) {
  const mountRef = useRef(null)
  const stateRef = useRef({})
  // El listener se registra una vez; esta ref le da siempre el callback del
  // render actual (evita cierres obsoletos sobre el estado del asistente).
  const onPickRef = useRef(onPick)
  useEffect(() => { onPickRef.current = onPick })

  useImperativeHandle(ref, () => ({
    addMarker(dir, color) {
      const { markers } = stateRef.current
      if (!markers) return
      const s = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 12, 8),
        new THREE.MeshBasicMaterial({ color })
      )
      s.position.set(dir.x, dir.y, dir.z).multiplyScalar(48)
      markers.add(s)
    },
    clearMarkers() {
      stateRef.current.markers?.clear()
    },
  }))

  useEffect(() => {
    if (!imageURL || !mountRef.current) return
    const mount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 200)
    camera.position.set(0, 0, 0.01)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(50, 64, 48),
      new THREE.MeshBasicMaterial({ side: THREE.BackSide })
    )
    if (level) {
      sphere.rotation.set(
        THREE.MathUtils.degToRad(level.pitch ?? 0), 0, THREE.MathUtils.degToRad(level.roll ?? 0))
    }
    scene.add(sphere)
    new THREE.TextureLoader().load(imageURL, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      sphere.material.map = tex
      sphere.material.needsUpdate = true
    })
    const markers = new THREE.Group()
    scene.add(markers)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.rotateSpeed = -0.35
    const onWheel = (e) => {
      e.preventDefault()
      camera.fov = Math.min(100, Math.max(15, camera.fov + e.deltaY * 0.05))
      camera.updateProjectionMatrix()
    }
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false })

    const raycaster = new THREE.Raycaster()
    let downAt = null
    const onDown = (e) => { downAt = [e.clientX, e.clientY] }
    const onUp = (e) => {
      if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6) return
      const rect = renderer.domElement.getBoundingClientRect()
      raycaster.setFromCamera(new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      ), camera)
      const d = raycaster.ray.direction.clone().normalize()
      onPickRef.current?.({ x: d.x, y: d.y, z: d.z })
    }
    renderer.domElement.addEventListener('pointerdown', onDown)
    renderer.domElement.addEventListener('pointerup', onUp)

    stateRef.current = { markers }
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
      renderer.domElement.removeEventListener('pointerdown', onDown)
      renderer.domElement.removeEventListener('pointerup', onUp)
      controls.dispose()
      sphere.geometry.dispose()
      sphere.material.map?.dispose()
      sphere.material.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [imageURL])

  return <div ref={mountRef} className={`stereo-pane ${active ? 'active' : ''}`} />
})

const STEPS = {
  orientA: 'PASO 1 · En la foto A, toca el punto del suelo donde estaba el TRÍPODE de la cámara B.',
  orientB: 'PASO 2 · En la foto B, toca donde estaba el TRÍPODE de la cámara A.',
  measure: 'Mide: toca un punto en A, el MISMO punto en B, y repite con un segundo punto → distancia triangulada.',
}

/**
 * Modo estéreo (método PaMe): dos panorámicas + base conocida → medición por
 * triangulación, independiente de la altura de cámara y del suelo plano.
 */
export default function StereoMode({ photos, levels = {}, unitSys = 'm', onSave, onClose }) {
  const [photoA, setPhotoA] = useState(photos[0]?.name)
  const [photoB, setPhotoB] = useState(photos[1]?.name)
  const [baseline, setBaseline] = useState('')
  const [step, setStep] = useState('setup')
  const [pose, setPose] = useState(null)
  const [thetaAB, setThetaAB] = useState(null)
  const [picks, setPicks] = useState([]) // dirs alternando A,B,A,B
  const [result, setResult] = useState(null)
  const [saved, setSaved] = useState(0)
  const [msg, setMsg] = useState('')
  const refA = useRef(null)
  const refB = useRef(null)

  const urlOf = (name) => photos.find((p) => p.name === name)?.url
  const D = parseFloat(String(baseline).replace(',', '.'))

  function start() {
    if (!photoA || !photoB || photoA === photoB) { setMsg('⚠️ Elige dos fotos distintas de la misma sala.'); return }
    if (!(D > 0.2)) { setMsg('⚠️ Introduce la distancia real entre las dos posiciones de cámara (mídela con el láser).'); return }
    setStep('orientA')
    setMsg(STEPS.orientA)
  }

  function onPickA(dir) {
    if (step === 'orientA') {
      setThetaAB(bearing(dir))
      refA.current?.addMarker(dir, '#f5b04b')
      setStep('orientB')
      setMsg(STEPS.orientB)
    } else if (step === 'measure') {
      if (picks.length % 2 !== 0) { setMsg('⚠️ Ahora toca el MISMO punto en la foto B.'); return }
      refA.current?.addMarker(dir, picks.length < 2 ? '#34d399' : '#58a6f2')
      setPicks((p) => [...p, dir])
      setMsg('Ahora el MISMO punto en la foto B.')
    }
  }

  function onPickB(dir) {
    if (step === 'orientB') {
      const p = relativePose(thetaAB, bearing(dir), D)
      refB.current?.addMarker(dir, '#f5b04b')
      setPose(p)
      setStep('measure')
      setMsg(STEPS.measure)
    } else if (step === 'measure') {
      if (picks.length % 2 !== 1) { setMsg('⚠️ Primero toca el punto en la foto A.'); return }
      refB.current?.addMarker(dir, picks.length < 2 ? '#34d399' : '#58a6f2')
      setPicks((p) => [...p, dir])
    }
  }

  // Con 4 marcas (P1 en A/B y P2 en A/B) se triangula la distancia.
  useEffect(() => {
    if (step !== 'measure' || picks.length < 4 || !pose) return
    const t1 = triangulate(picks[0], pose.pos, toWorldDir(picks[1], pose.dyaw))
    const t2 = triangulate(picks[2], pose.pos, toWorldDir(picks[3], pose.dyaw))
    if (!t1 || !t2) {
      setMsg('⚠️ Los rayos no se cruzan bien (¿punto marcado distinto en cada foto?). Repite los 4 toques.')
      setPicks([])
      refA.current?.clearMarkers()
      refB.current?.clearMarkers()
      return
    }
    const value = stereoDistance(t1.point, t2.point)
    const worstGap = Math.max(t1.gap, t2.gap)
    const quality = worstGap < 0.03 ? 'excelente' : worstGap < 0.08 ? 'buena' : '⚠️ dudosa'
    setResult({ value, worstGap, quality, points: [t1.point, t2.point] })
    setMsg(`📐 ${fmtLength(value, unitSys)} · calidad de correspondencia ${quality} (gap ${(worstGap * 100).toFixed(1)} cm)`)
  }, [picks, step, pose, unitSys])

  function keep() {
    if (!result) return
    onSave?.(photoA, {
      id: crypto.randomUUID(),
      mode: 'stereo',
      label: `S${saved + 1}`,
      value: result.value,
      unit: 'm',
      text: `estéreo base ${D.toFixed(3)} m · gap ${(result.worstGap * 100).toFixed(1)} cm`,
      points: result.points,
      dirs: [picks[0], picks[2]],
      baseline: D,
    })
    setSaved((n) => n + 1)
    discard()
    setMsg('💾 Guardada en la foto A. Marca el siguiente par de puntos.')
  }

  function discard() {
    setPicks([])
    setResult(null)
    refA.current?.clearMarkers()
    refB.current?.clearMarkers()
  }

  if (step === 'setup') {
    return (
      <div className="floorplan">
        <div className="floorplan-card" style={{ maxWidth: 560 }}>
          <div className="floorplan-head"><b>🛰️ Medición estéreo (2 fotos)</b><button onClick={onClose}>✕</button></div>
          <p className="hint">
            Dos fotos 360 de la misma sala desde posiciones distintas + la
            distancia entre ambas (mídela con el láser) = medidas por
            triangulación pura, sin depender de la altura de cámara ni del
            suelo plano. La máxima precisión posible con fotos.
          </p>
          <label className="row">Foto A
            <select value={photoA} onChange={(e) => setPhotoA(e.target.value)} style={{ flex: 1 }}>
              {photos.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
            </select>
          </label>
          <label className="row">Foto B
            <select value={photoB} onChange={(e) => setPhotoB(e.target.value)} style={{ flex: 1 }}>
              {photos.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
            </select>
          </label>
          <label className="row">Base (m)
            <input type="number" min="0.2" step="0.001" value={baseline} placeholder="p. ej. 1.500"
              onChange={(e) => setBaseline(e.target.value)} style={{ flex: 1 }} />
          </label>
          {msg && <p className="hint">{msg}</p>}
          <button className="active" onClick={start}>Empezar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="stereo">
      <div className="stereo-bar">
        <b>🛰️ Estéreo</b>
        <span className="stereo-msg">{msg}</span>
        {result && (
          <>
            <button className="active" onClick={keep}>💾 Guardar</button>
            <button onClick={discard}>Descartar</button>
          </>
        )}
        {!result && step === 'measure' && picks.length > 0 && (
          <button onClick={discard}>↩️ Reiniciar puntos</button>
        )}
        <span className="hint">{saved} guardada(s) en {photoA}</span>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="stereo-panes">
        <div className="stereo-col">
          <span className="stereo-label">A · {photoA}</span>
          <PanoPicker ref={refA} imageURL={urlOf(photoA)} level={levels[photoA]}
            active={step === 'orientA' || (step === 'measure' && picks.length % 2 === 0)}
            onPick={onPickA} />
        </div>
        <div className="stereo-col">
          <span className="stereo-label">B · {photoB}</span>
          <PanoPicker ref={refB} imageURL={urlOf(photoB)} level={levels[photoB]}
            active={step === 'orientB' || (step === 'measure' && picks.length % 2 === 1)}
            onPick={onPickB} />
        </div>
      </div>
    </div>
  )
}
