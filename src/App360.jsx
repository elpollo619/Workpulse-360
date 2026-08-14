import { useEffect, useRef, useState } from 'react'
import Pano360View from './Pano360View.jsx'
import FloorPlan from './FloorPlan.jsx'
import PlanAssembly from './PlanAssembly.jsx'
import { openSessionReport } from './report360.js'
import { savePhoto, listPhotos, deletePhoto } from './photostore.js'
import { fmtArea } from './units.js'
import { SIA416_TYPES, DEFAULT_TYPE } from './sia.js'

const STORE_KEY = 'workpulse360.measurements.v1'
const NAMES_KEY = 'workpulse360.roomnames.v1'
const HEIGHTS_KEY = 'workpulse360.camheights.v1'
const UNITS_KEY = 'workpulse360.units.v1'
const TYPES_KEY = 'workpulse360.roomtypes.v1'
const WEIGHTS_KEY = 'workpulse360.weights.v1'

const DEFAULT_WEIGHTS = { BALKON: 0.5, TERRASSE: 1 / 3, GARTEN: 0.1 }

function loadJSON(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? {}
  } catch {
    return {}
  }
}

/**
 * Workpulse 360 — app independiente para medir espacios con cámaras 360°.
 * Varias fotos (habitaciones), mediciones y fotos persistentes (IndexedDB),
 * plano de planta, informe, proyecto exportable y unidades configurables.
 */
export default function App360() {
  const [photos, setPhotos] = useState([]) // { name, url }
  const [activeName, setActiveName] = useState(null)
  const [store, setStore] = useState(() => loadJSON(STORE_KEY)) // { [photoName]: measurements[] }
  const [roomNames, setRoomNames] = useState(() => loadJSON(NAMES_KEY)) // { [photoName]: 'Salón' }
  const [camHeights, setCamHeights] = useState(() => loadJSON(HEIGHTS_KEY)) // { [photoName]: 1.6 }
  const [roomTypes, setRoomTypes] = useState(() => loadJSON(TYPES_KEY)) // { [photoName]: 'HNF' }
  const [weights, setWeights] = useState(() => ({ ...DEFAULT_WEIGHTS, ...loadJSON(WEIGHTS_KEY) }))
  const [unitSys, setUnitSys] = useState(() => localStorage.getItem(UNITS_KEY) || 'm')
  const [showPlan, setShowPlan] = useState(false)
  const [showAssembly, setShowAssembly] = useState(false)
  const [restoring, setRestoring] = useState(true)
  const importRef = useRef(null)

  // Persistencia por nombre de foto.
  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(store))
  }, [store])
  useEffect(() => {
    localStorage.setItem(NAMES_KEY, JSON.stringify(roomNames))
  }, [roomNames])
  useEffect(() => {
    localStorage.setItem(HEIGHTS_KEY, JSON.stringify(camHeights))
  }, [camHeights])
  useEffect(() => {
    localStorage.setItem(UNITS_KEY, unitSys)
  }, [unitSys])
  useEffect(() => {
    localStorage.setItem(TYPES_KEY, JSON.stringify(roomTypes))
  }, [roomTypes])
  useEffect(() => {
    localStorage.setItem(WEIGHTS_KEY, JSON.stringify(weights))
  }, [weights])

  // Restaurar las fotos guardadas en IndexedDB (la sesión sobrevive recargas).
  useEffect(() => {
    let cancelled = false
    listPhotos()
      .then((rows) => {
        if (cancelled) return
        setPhotos((prev) => {
          const names = new Set(prev.map((p) => p.name))
          const restored = rows
            .filter((r) => !names.has(r.name))
            .map((r) => ({ name: r.name, url: URL.createObjectURL(r.blob) }))
          return [...prev, ...restored]
        })
      })
      .catch(() => {})
      .finally(() => !cancelled && setRestoring(false))
    return () => { cancelled = true }
  }, [])

  function renameRoom(photoName) {
    const name = prompt('Nombre del espacio (p.ej. Salón, Cocina):', roomNames[photoName] ?? '')
    if (name === null) return
    setRoomNames((prev) => ({ ...prev, [photoName]: name.trim() }))
  }

  function renameMeasurement(id) {
    const ms = store[activeName] ?? []
    const m = ms.find((x) => x.id === id)
    if (!m) return
    const label = prompt('Etiqueta de la medición:', m.label)
    if (!label) return
    setStore((prev) => ({
      ...prev,
      [activeName]: (prev[activeName] ?? []).map((x) => (x.id === id ? { ...x, label: label.trim() } : x)),
    }))
  }

  function removePhoto(name) {
    if (!confirm(`¿Eliminar "${roomNames[name] || name}" y sus mediciones?`)) return
    setPhotos((prev) => prev.filter((p) => p.name !== name))
    setStore((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
    setRoomNames((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
    deletePhoto(name).catch(() => {})
    if (activeName === name) setActiveName(null)
  }

  const active = photos.find((p) => p.name === activeName) ?? null
  const measurements = store[activeName] ?? []

  function onFiles(e) {
    const files = [...(e.target.files ?? [])]
    if (!files.length) return
    const added = files.map((f) => ({ name: f.name, url: URL.createObjectURL(f) }))
    for (const f of files) savePhoto(f.name, f).catch(() => {})
    setPhotos((prev) => {
      const names = new Set(prev.map((p) => p.name))
      return [...prev, ...added.filter((a) => !names.has(a.name))]
    })
    setActiveName(added[0].name)
    e.target.value = ''
  }

  function saveMeasurement(m) {
    setStore((prev) => ({
      ...prev,
      [activeName]: [...(prev[activeName] ?? []), m],
    }))
  }

  function deleteMeasurement(id) {
    setStore((prev) => ({
      ...prev,
      [activeName]: (prev[activeName] ?? []).filter((m) => m.id !== id),
    }))
  }

  function exportCSV() {
    const rows = [['foto', 'espacio', 'tipo_sia416', 'etiqueta', 'tipo', 'valor', 'unidad', 'perimetro_m', 'altura_camara_m']]
    for (const [photo, ms] of Object.entries(store)) {
      for (const m of ms) {
        rows.push([
          photo, roomNames[photo] ?? '', roomTypes[photo] ?? DEFAULT_TYPE, m.label, m.mode,
          m.value.toFixed(3), m.unit, m.perimeter?.toFixed(3) ?? '', m.camHeight?.toFixed(2) ?? '',
        ])
      }
    }
    const blob = new Blob([rows.map((r) => r.join(',')).join('\n')], { type: 'text/csv' })
    trigger(blob, 'workpulse360-mediciones.csv')
  }

  // Proyecto portable: mediciones + nombres + alturas (las fotos van aparte).
  function exportProject() {
    const data = {
      app: 'workpulse360',
      version: 1,
      exportedAt: new Date().toISOString(),
      store, roomNames, camHeights, roomTypes, weights, unitSys,
    }
    const blob = new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' })
    trigger(blob, 'proyecto-workpulse360.json')
  }

  function importProject(e) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    file.text().then((txt) => {
      const data = JSON.parse(txt)
      if (data?.app !== 'workpulse360' || !data.store) throw new Error('formato')
      setStore((prev) => ({ ...prev, ...data.store }))
      setRoomNames((prev) => ({ ...prev, ...data.roomNames }))
      setCamHeights((prev) => ({ ...prev, ...data.camHeights }))
      setRoomTypes((prev) => ({ ...prev, ...data.roomTypes }))
      if (data.weights) setWeights((prev) => ({ ...prev, ...data.weights }))
      if (data.unitSys) setUnitSys(data.unitSys)
      alert(`Proyecto importado: ${Object.keys(data.store).length} espacio(s). Abre las fotos con el mismo nombre para ver las mediciones.`)
    }).catch(() => alert('Ese archivo no parece un proyecto de Workpulse 360.'))
  }

  function trigger(blob, name) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }

  if (active) {
    return (
      <div className="app360-stage">
        <Pano360View
          key={active.name}
          imageURL={active.url}
          measurements={measurements}
          onSave={saveMeasurement}
          onDelete={deleteMeasurement}
          onRename={renameMeasurement}
          onOpenPlan={() => setShowPlan(true)}
          onClose={() => setActiveName(null)}
          initialCamHeight={camHeights[active.name] ?? 1.6}
          onCamHeight={(h) => setCamHeights((prev) => (prev[active.name] === h ? prev : { ...prev, [active.name]: h }))}
          unitSys={unitSys}
          onUnitSys={setUnitSys}
          extraControls={
            <>
              {photos.length > 1 && (
                <select
                  value={activeName}
                  onChange={(e) => setActiveName(e.target.value)}
                  title="Cambiar de foto/habitación"
                >
                  {photos.map((p) => (
                    <option key={p.name} value={p.name}>
                      🖼️ {roomNames[p.name] || p.name} ({(store[p.name] ?? []).length})
                    </option>
                  ))}
                </select>
              )}
              <button onClick={() => renameRoom(active.name)} title="Nombrar este espacio">
                🏷️ {roomNames[active.name] || 'nombrar'}
              </button>
              <select
                value={roomTypes[active.name] ?? DEFAULT_TYPE}
                onChange={(e) => setRoomTypes((prev) => ({ ...prev, [active.name]: e.target.value }))}
                title="Tipo de superficie según SIA 416 (para el desglose del informe)"
              >
                {SIA416_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>{t.label}</option>
                ))}
              </select>
            </>
          }
        />
        {showPlan && (
          <FloorPlan
            measurements={measurements}
            photoName={active.name}
            roomName={roomNames[active.name]}
            unitSys={unitSys}
            onClose={() => setShowPlan(false)}
          />
        )}
      </div>
    )
  }

  const totalMeasurements = Object.values(store).reduce((s, ms) => s + ms.length, 0)
  const roomsWithOutline = Object.values(store)
    .filter((ms) => ms.some((m) => m.mode === 'area' && (m.points?.length ?? 0) >= 3)).length
  const totalArea = Object.values(store)
    .flat()
    .filter((m) => m.mode === 'area')
    .reduce((s, m) => s + m.value, 0)

  return (
    <div className="app360-landing">
      <header className="brand">
        <h1>Workpulse<span>360</span></h1>
        <p>Medición de espacios con cámara 360°</p>
      </header>

      <label className="filebtn app360-open">
        📷 Abrir fotos 360° y medir
        <input type="file" accept="image/jpeg,image/png" multiple hidden onChange={onFiles} />
      </label>

      {photos.length > 0 && (
        <section className="app360-rooms">
          <b>Sesión actual{totalArea > 0 ? ` · superficie total ${fmtArea(totalArea, unitSys)}` : ''}</b>
          <ul className="list">
            {photos.map((p) => (
              <li key={p.name}>
                <span className="mrow" onClick={() => setActiveName(p.name)} style={{ cursor: 'pointer', flex: 1 }}>
                  🖼️ {roomNames[p.name] || p.name} · {(store[p.name] ?? []).length} mediciones
                  {' · '}{(SIA416_TYPES.find((t) => t.id === (roomTypes[p.name] ?? DEFAULT_TYPE)) ?? SIA416_TYPES[0]).short}
                </span>
                <button className="del" title="Eliminar foto y mediciones" onClick={() => removePhoto(p.name)}>✕</button>
              </li>
            ))}
          </ul>
        </section>
      )}
      {restoring && photos.length === 0 && (
        <p className="hint">Buscando fotos de sesiones anteriores…</p>
      )}

      <section className="app360-steps">
        <div className="app360-step">
          <b>1 · Captura</b>
          <p>
            Coloca la cámara (Insta360, Ricoh Theta…) en un trípode o palo a
            <b> altura conocida</b> — p. ej. 1.60 m — en medio de cada estancia.
            ¿No la sabes? Usa <b>🎯 Calibrar</b> con una distancia conocida.
          </p>
        </div>
        <div className="app360-step">
          <b>2 · Exporta</b>
          <p>
            Desde la app de la cámara, exporta en formato
            <b> equirectangular</b> (la imagen 360 completa "desplegada", 2:1).
          </p>
        </div>
        <div className="app360-step">
          <b>3 · Mide</b>
          <p>
            <b>📏 distancias</b>, <b>📐 áreas</b> y <b>📊 alturas</b> con lupa de
            precisión y snapping ortogonal. Todo se guarda en tu dispositivo
            (fotos incluidas), genera el <b>🗺️ plano de planta</b> con cotas y
            exporta a <b>CSV, SVG, PNG, DXF y PDF</b>.
          </p>
        </div>
      </section>

      <div className="tools">
        {totalMeasurements > 0 && (
          <>
            <button onClick={exportCSV}>📄 CSV ({totalMeasurements})</button>
            <button onClick={() => openSessionReport(store, roomNames, { unitSys, roomTypes, weights })}>🖨️ Informe de sesión</button>
            <button onClick={exportProject} title="Descarga las mediciones como archivo de proyecto">💾 Proyecto</button>
            {roomsWithOutline > 0 && (
              <button onClick={() => setShowAssembly(true)}
                title="Ensamblar todas las habitaciones en un plano de conjunto">
                🧩 Plano general
              </button>
            )}
          </>
        )}
        <button onClick={() => importRef.current?.click()} title="Cargar un proyecto exportado antes">📂 Importar proyecto</button>
        <input ref={importRef} type="file" accept="application/json,.json" hidden onChange={importProject} />
      </div>

      <details className="app360-step">
        <summary><b>🇨🇭 Normas y referencias suizas integradas</b></summary>
        <p>
          Cada espacio se clasifica según <b>SIA 416</b> (HNF/NNF/VF/FF, balcón,
          terraza) y el informe desglosa <b>NWF</b> (superficie habitable neta,
          práctica WBS) y la <b>superficie ponderada</b> de tasación (balcón ×0.5,
          terraza ×⅓, jardín ×0.1). Se comprueban además: paso libre de puerta
          ≥ 0.80 m y pasillo ≥ 1.20 m (<b>SIA 500</b>), altura habitable ≈ 2.40 m
          (PBG ZH, varía por cantón) y la regla de 1.50 m bajo pendientes.
          Referencias de calibración suizas: puerta 2.10 m (stock antiguo 2.00),
          encimera 0.90 m (norma de cocina suiza), interruptor ≈ 1.05 m,
          barandilla 0.90–1.00 m (SIA 358), hoja A4 0.297 m.
        </p>
        <p>
          Para descontar zonas bajo pendiente (altura &lt; 1.50 m) de la NWF:
          mide esa zona como área y renómbrala con la palabra
          «descuento» o «pendiente» — se restará automáticamente.
        </p>
        <div className="row small" style={{ gap: 12, flexWrap: 'wrap' }}>
          <b>Pesos de tasación:</b>
          {['BALKON', 'TERRASSE', 'GARTEN'].map((id) => (
            <label key={id} style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {{ BALKON: 'Balcón', TERRASSE: 'Terraza', GARTEN: 'Jardín' }[id]}
              <input
                type="number" min="0" max="1" step="0.05"
                value={Number((weights[id] ?? 0).toFixed(2))}
                onChange={(e) => setWeights((prev) => ({ ...prev, [id]: Math.min(1, Math.max(0, parseFloat(e.target.value) || 0)) }))}
                style={{ width: 58 }}
                title="Fracción del área que computa en la superficie ponderada (varía por cantón/tasador)"
              />
            </label>
          ))}
        </div>
      </details>

      <p className="hint app360-note">
        Todo se procesa en tu dispositivo — las fotos no se suben a ningún
        servidor. Fotos y mediciones se recuerdan aunque cierres la app.
      </p>

      <footer className="app360-foot">
        ¿Mediciones de terreno con drone? → <a href="../">Workpulse Drohne 🚁</a>
      </footer>

      {showAssembly && (
        <PlanAssembly
          store={store}
          roomNames={roomNames}
          roomTypes={roomTypes}
          unitSys={unitSys}
          onClose={() => setShowAssembly(false)}
        />
      )}
    </div>
  )
}
