import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { MEASURE_COLORS } from './Pano360View.jsx'

const ASSEMBLY_KEY = 'workpulse360.assembly.v1'

function centroidOf(pts) {
  const n = pts.length || 1
  return {
    x: pts.reduce((s, p) => s + p.x, 0) / n,
    z: pts.reduce((s, p) => s + p.z, 0) / n,
  }
}

function transformPoint(p, c, t) {
  const cos = Math.cos(t.rot ?? 0)
  const sin = Math.sin(t.rot ?? 0)
  const dx = p.x - c.x
  const dz = p.z - c.z
  return { x: c.x + dx * cos - dz * sin + (t.tx ?? 0), z: c.z + dx * sin + dz * cos + (t.tz ?? 0) }
}

/**
 * Vista dollhouse: las habitaciones medidas, extruidas a su altura real y
 * colocadas según el ensamblaje del plano general — la casa en 3D navegable.
 */
export default function Dollhouse3D({ store, roomNames, onClose }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    let transforms = {}
    try {
      transforms = JSON.parse(localStorage.getItem(ASSEMBLY_KEY)) ?? {}
    } catch { /* sin ensamblaje guardado */ }

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#10151a')
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 500)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 0.75))
    const sun = new THREE.DirectionalLight(0xffffff, 1.1)
    sun.position.set(8, 14, 6)
    scene.add(sun)

    // Habitaciones: contorno cerrado → extrusión a su altura media (2.4 por defecto).
    const bounds = { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity }
    let autoOffset = 0
    let built = 0
    Object.entries(store).forEach(([photo, ms], idx) => {
      const outline = ms.find((m) => m.mode === 'area' && (m.points?.length ?? 0) >= 3)
      if (!outline) return
      const heights = ms.filter((m) => m.mode === 'height')
      const h = heights.length
        ? heights.reduce((s, m) => s + m.value, 0) / heights.length
        : 2.4
      const c = centroidOf(outline.points)
      const width = Math.max(...outline.points.map((p) => p.x)) - Math.min(...outline.points.map((p) => p.x))
      const t = transforms[photo] ?? { tx: autoOffset - c.x, tz: -c.z, rot: 0 }
      autoOffset += width + 1.5
      const pts = outline.points.map((p) => transformPoint(p, c, t))
      for (const p of pts) {
        bounds.minX = Math.min(bounds.minX, p.x)
        bounds.maxX = Math.max(bounds.maxX, p.x)
        bounds.minZ = Math.min(bounds.minZ, p.z)
        bounds.maxZ = Math.max(bounds.maxZ, p.z)
      }
      const shape = new THREE.Shape(pts.map((p) => new THREE.Vector2(p.x, p.z)))
      const color = new THREE.Color(MEASURE_COLORS[idx % MEASURE_COLORS.length])
      // Paredes translúcidas (dollhouse) + suelo sólido.
      const walls = new THREE.Mesh(
        new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false }),
        new THREE.MeshLambertMaterial({ color, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
      )
      walls.rotation.x = -Math.PI / 2
      walls.position.y = 0
      scene.add(walls)
      const floor = new THREE.Mesh(
        new THREE.ShapeGeometry(shape),
        new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide })
      )
      floor.rotation.x = -Math.PI / 2
      floor.position.y = 0.01
      scene.add(floor)
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(walls.geometry),
        new THREE.LineBasicMaterial({ color: 0xe9eff2 })
      )
      edges.rotation.x = -Math.PI / 2
      scene.add(edges)
      built++
      void roomNames // (etiquetas 3D: siguiente iteración)
    })

    const cx = (bounds.minX + bounds.maxX) / 2 || 0
    const cz = (bounds.minZ + bounds.maxZ) / 2 || 0
    const span = Math.max(bounds.maxX - bounds.minX, bounds.maxZ - bounds.minZ, 4)
    camera.position.set(cx + span * 0.9, span * 0.9, cz + span * 0.9)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(cx, 1, cz)

    // Suelo de referencia cuadriculado.
    const grid = new THREE.GridHelper(span * 3, Math.round(span * 3), 0x33424c, 0x1d272f)
    grid.position.set(cx, -0.02, cz)
    scene.add(grid)

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
      controls.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [store, roomNames])

  return (
    <div className="stereo">
      <div className="stereo-bar">
        <b>🏠 Dollhouse 3D</b>
        <span className="stereo-msg">
          Las habitaciones extruidas a su altura medida, colocadas según tu
          plano general. Arrastra para orbitar · rueda para acercar.
        </span>
        <button onClick={onClose}>✕</button>
      </div>
      <div ref={mountRef} style={{ flex: 1, minHeight: 0 }} />
    </div>
  )
}
