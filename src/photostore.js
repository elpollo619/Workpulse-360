// Almacén de fotos en IndexedDB: la sesión sobrevive a recargas y cierres,
// como en las apps nativas (magicplan, Polycam), sin subir nada a un servidor.

const DB = 'workpulse360'
const STORE = 'photos'
const KV = 'kv'

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 2)
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) {
        req.result.createObjectStore(STORE, { keyPath: 'name' })
      }
      if (!req.result.objectStoreNames.contains(KV)) {
        req.result.createObjectStore(KV)
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

/** Guarda un valor arbitrario (p. ej. un FileSystemFileHandle) por clave. */
export async function kvSet(key, value) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction(KV, 'readwrite').objectStore(KV).put(value, key)
    req.onsuccess = resolve
    req.onerror = () => reject(req.error)
  })
}

/** Recupera un valor por clave (undefined si no existe). */
export async function kvGet(key) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction(KV, 'readonly').objectStore(KV).get(key)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

function tx(db, mode) {
  return db.transaction(STORE, mode).objectStore(STORE)
}

/** Guarda (o reemplaza) una foto por nombre. */
export async function savePhoto(name, blob) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const req = tx(db, 'readwrite').put({ name, blob, addedAt: Date.now() })
    req.onsuccess = resolve
    req.onerror = () => reject(req.error)
  })
}

/** Devuelve todas las fotos guardadas: [{name, blob}] ordenadas por llegada. */
export async function listPhotos() {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const req = tx(db, 'readonly').getAll()
    req.onsuccess = () => resolve((req.result ?? []).sort((a, b) => a.addedAt - b.addedAt))
    req.onerror = () => reject(req.error)
  })
}

/** Elimina una foto por nombre. */
export async function deletePhoto(name) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const req = tx(db, 'readwrite').delete(name)
    req.onsuccess = resolve
    req.onerror = () => reject(req.error)
  })
}
