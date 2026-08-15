import { useEffect, useRef, useState } from 'react'
import Pano360View from './Pano360View.jsx'
import FloorPlan from './FloorPlan.jsx'
import PlanAssembly from './PlanAssembly.jsx'
import { openSessionReport, downloadSessionReport, getSessionReportHTML } from './report360.js'
import { savePhoto, listPhotos, deletePhoto } from './photostore.js'
import { fmtArea } from './units.js'
import { SIA416_TYPES, DEFAULT_TYPE } from './sia.js'
import { readGPanoPose, levelFromPose } from './gpano.js'
import { appendAudit, fullAudit } from './auditlog.js'

const STORE_KEY = 'workpulse360.measurements.v1'
const NAMES_KEY = 'workpulse360.roomnames.v1'
const HEIGHTS_KEY = 'workpulse360.camheights.v1'
const UNITS_KEY = 'workpulse360.units.v1'
const TYPES_KEY = 'workpulse360.roomtypes.v1'
const WEIGHTS_KEY = 'workpulse360.weights.v1'
const LEVEL_KEY = 'workpulse360.level.v1'

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
  const [levels, setLevels] = useState(() => loadJSON(LEVEL_KEY)) // { [photoName]: {pitch, roll} }
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
  useEffect(() => {
    localStorage.setItem(LEVEL_KEY, JSON.stringify(levels))
  }, [levels])

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
    const label = prompt(
      'Etiqueta de la medición.\nConsejo: añade "@valor" (p. ej. "puerta @0.93") con la medida real de tu láser o cinta — el informe la comparará como CONTROL de calidad:',
      m.label
    )
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
    for (const f of files) {
      savePhoto(f.name, f).catch(() => {})
      // Validación al importar: una foto 360 equirectangular debe ser 2:1;
      // otra proporción produce medidas erróneas (aviso antes de trabajar).
      const probe = new Image()
      probe.onload = () => {
        const ratio = probe.width / probe.height
        if (Math.abs(ratio - 2) > 0.06) {
          alert(`⚠️ «${f.name}» tiene proporción ${ratio.toFixed(2)}:1, no 2:1.\n` +
            'No parece una foto 360 equirectangular completa — las medidas pueden salir mal. ' +
            'Exporta desde la app de la cámara en formato equirectangular.')
        }
      }
      probe.src = URL.createObjectURL(f)
      // Auto-nivel: si la foto trae pose GPano (Insta360/Theta) y aún no hay
      // ajuste manual, se pre-carga la nivelación fina.
      readGPanoPose(f).then((pose) => {
        const lv = levelFromPose(pose)
        if (lv) {
          setLevels((prev) => (prev[f.name] ? prev : { ...prev, [f.name]: lv }))
        }
      }).catch(() => {})
    }
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
    appendAudit('medir', `${activeName} · ${m.label} · ${m.mode} · ${m.value?.toFixed?.(3) ?? ''} ${m.unit ?? ''} · h=${m.camHeight}`)
  }

  function deleteMeasurement(id) {
    const gone = (store[activeName] ?? []).find((m) => m.id === id)
    setStore((prev) => ({
      ...prev,
      [activeName]: (prev[activeName] ?? []).filter((m) => m.id !== id),
    }))
    if (gone) appendAudit('borrar', `${activeName} · ${gone.label} · ${gone.mode}`)
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

  // Raumbuch (libro de habitaciones, práctica de facility management):
  // una fila estructurada por espacio con sus magnitudes y equipamiento.
  function exportRaumbuch() {
    const rows = [[
      'foto', 'espacio', 'tipo_sia416', 'superficie_m2', 'perimetro_m',
      'altura_media_m', 'volumen_m3', 'elementos', 'notas',
    ]]
    for (const [photo, ms] of Object.entries(store)) {
      if (!ms.length) continue
      const areas = ms.filter((m) => m.mode === 'area')
      const heights = ms.filter((m) => m.mode === 'height')
      const area = areas.reduce((s, m) => s + m.value, 0)
      const per = areas.reduce((s, m) => s + (m.perimeter ?? 0), 0)
      const avgH = heights.length ? heights.reduce((s, m) => s + m.value, 0) / heights.length : null
      const markers = ms.filter((m) => m.mode === 'marker')
      const byKind = {}
      for (const m of markers) byKind[m.text] = (byKind[m.text] ?? 0) + 1
      const notes = ms.filter((m) => m.mode === 'note').map((m) => m.text).join(' | ')
      rows.push([
        photo, roomNames[photo] ?? '', roomTypes[photo] ?? DEFAULT_TYPE,
        area ? area.toFixed(2) : '', per ? per.toFixed(2) : '',
        avgH ? avgH.toFixed(2) : '', area && avgH ? (area * avgH).toFixed(2) : '',
        Object.entries(byKind).map(([k, n]) => `${n}x ${k}`).join('; '),
        notes,
      ])
    }
    const csv = rows
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(','))
      .join('\n')
    trigger(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }), 'workpulse360-raumbuch.csv')
    appendAudit('exportar', 'Raumbuch CSV')
  }

  // Proyecto portable: mediciones + nombres + alturas (las fotos van aparte).
  function exportProject() {
    const data = {
      app: 'workpulse360',
      version: 1,
      exportedAt: new Date().toISOString(),
      store, roomNames, camHeights, roomTypes, levels, weights, unitSys,
      auditLog: fullAudit(),
    }
    const blob = new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' })
    trigger(blob, 'proyecto-workpulse360.json')
    appendAudit('exportar', 'proyecto JSON')
  }

  function applyProjectData(data) {
    if (data?.app !== 'workpulse360' || !data.store) throw new Error('formato')
    setStore((prev) => ({ ...prev, ...data.store }))
    setRoomNames((prev) => ({ ...prev, ...data.roomNames }))
    setCamHeights((prev) => ({ ...prev, ...data.camHeights }))
    setRoomTypes((prev) => ({ ...prev, ...data.roomTypes }))
    setLevels((prev) => ({ ...prev, ...data.levels }))
    if (data.weights) setWeights((prev) => ({ ...prev, ...data.weights }))
    if (data.unitSys) setUnitSys(data.unitSys)
  }

  // Copia de seguridad completa: fotos (IndexedDB) + datos, en un solo ZIP.
  async function exportBackup() {
    const { default: JSZip } = await import('jszip')
    const zip = new JSZip()
    const data = {
      app: 'workpulse360', version: 1, exportedAt: new Date().toISOString(),
      store, roomNames, camHeights, roomTypes, levels, weights, unitSys,
    }
    zip.file('proyecto.json', JSON.stringify(data, null, 1))
    const rows = await listPhotos().catch(() => [])
    const folder = zip.folder('fotos')
    for (const r of rows) folder.file(r.name, r.blob)
    const blob = await zip.generateAsync({ type: 'blob' })
    trigger(blob, 'workpulse360-copia-completa.zip')
  }

  function importProject(e) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    if (/\.zip$/i.test(file.name)) {
      // Copia completa: restaura datos y fotos.
      import('jszip').then(async ({ default: JSZip }) => {
        const zip = await JSZip.loadAsync(file)
        const projFile = zip.file('proyecto.json')
        if (projFile) applyProjectData(JSON.parse(await projFile.async('string')))
        const restored = []
        for (const entry of Object.values(zip.files)) {
          if (entry.dir || !entry.name.startsWith('fotos/')) continue
          const name = entry.name.slice('fotos/'.length)
          if (!name) continue
          const blob = await entry.async('blob')
          await savePhoto(name, blob).catch(() => {})
          restored.push({ name, url: URL.createObjectURL(blob) })
        }
        setPhotos((prev) => {
          const names = new Set(prev.map((p) => p.name))
          return [...prev, ...restored.filter((r) => !names.has(r.name))]
        })
        alert(`Copia restaurada: ${restored.length} foto(s) con sus mediciones.`)
      }).catch(() => alert('No se pudo leer esa copia de seguridad.'))
      return
    }
    file.text().then((txt) => {
      applyProjectData(JSON.parse(txt))
      alert('Proyecto importado. Abre las fotos con el mismo nombre para ver las mediciones.')
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

  // Compartir el informe directamente (WhatsApp, correo…) vía Web Share.
  async function shareReport() {
    const html = buildShareableReport()
    if (!html) return
    const file = new File([html], 'workpulse360-informe.html', { type: 'text/html' })
    if (navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'Informe Workpulse 360' })
      } catch { /* cancelado por el usuario */ }
    } else {
      trigger(new Blob([html], { type: 'text/html' }), 'workpulse360-informe.html')
    }
  }

  function buildShareableReport() {
    return getSessionReportHTML(store, roomNames, { unitSys, roomTypes, weights, camHeights, levels })
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
          initialLevel={levels[active.name] ?? { pitch: 0, roll: 0 }}
          onLevel={(lv) => setLevels((prev) => {
            const cur = prev[active.name]
            if (cur && cur.pitch === lv.pitch && cur.roll === lv.roll) return prev
            return { ...prev, [active.name]: lv }
          })}
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
        <p>
          Medición profesional con cámara 360° — sin nube, sin cuenta,
          sin suscripción: todo en tu dispositivo.
        </p>
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

      <ol className="app360-steps">
        <li className="app360-step">
          <b>Captura</b>
          <p>
            Coloca la cámara (Insta360, Ricoh Theta…) en un trípode a
            <b> altura conocida</b> — p. ej. 1.60 m — en medio de cada estancia.
            ¿No la sabes? Dentro del visor, <b>🎯 Calibrar</b> la deduce con una
            distancia conocida o tu láser Bluetooth.
          </p>
        </li>
        <li className="app360-step">
          <b>Exporta la foto 360</b>
          <p>
            Desde la app de la cámara, en formato <b>equirectangular </b>
            (la imagen completa «desplegada», proporción 2:1).
          </p>
        </li>
        <li className="app360-step">
          <b>Mide y entrega</b>
          <p>
            Distancias, áreas, alturas, paredes y elementos eléctricos con lupa
            de precisión. Todo queda en tu dispositivo y sale como <b>plano con
            cotas</b>, informe SIA y archivos <b>CSV, SVG, PNG, DXF o PDF</b>.
          </p>
        </li>
      </ol>

      {totalMeasurements > 0 && (
        <div className="toolgroup">
          <span className="toolgroup-label">Planos e informes</span>
          <div className="tools">
            <button onClick={() => openSessionReport(store, roomNames, { unitSys, roomTypes, weights, camHeights, levels })}>🖨️ Informe (PDF)</button>
            <button onClick={() => downloadSessionReport(store, roomNames, { unitSys, roomTypes, weights, camHeights, levels })}
              title="Informe como archivo HTML autónomo (se abre en cualquier navegador)">📑 Informe HTML</button>
            {typeof navigator !== 'undefined' && !!navigator.canShare && (
              <button onClick={shareReport} title="Enviar el informe por WhatsApp, correo…">📤 Compartir</button>
            )}
            {roomsWithOutline > 0 && (
              <button onClick={() => setShowAssembly(true)}
                title="Ensamblar todas las habitaciones en un plano de conjunto">
                🧩 Plano general
              </button>
            )}
          </div>
        </div>
      )}
      <div className="toolgroup">
        <span className="toolgroup-label">Datos y copias</span>
        <div className="tools">
          {totalMeasurements > 0 && (
            <>
              <button onClick={exportCSV}>📄 CSV ({totalMeasurements})</button>
              <button onClick={exportRaumbuch}
                title="Libro de habitaciones (Raumbuch): una fila por espacio con superficies, altura, volumen y equipamiento — para facility management">
                🏢 Raumbuch
              </button>
              <button onClick={exportProject} title="Descarga las mediciones como archivo de proyecto">💾 Proyecto</button>
              <button onClick={exportBackup} title="Copia de seguridad completa: fotos + mediciones en un ZIP">🗄️ Copia completa</button>
            </>
          )}
          <button onClick={() => importRef.current?.click()} title="Cargar un proyecto o copia completa (.json / .zip)">📂 Importar</button>
          <input ref={importRef} type="file" accept=".json,.zip,application/json,application/zip" hidden onChange={importProject} />
        </div>
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
