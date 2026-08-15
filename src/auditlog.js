// Cuaderno de campo digital a prueba de manipulación (idea tomada de la
// práctica topográfica, donde las libretas de campo son cuasi-legales):
// registro solo-añadir de cada acción de medición, encadenado con SHA-256
// (cada entrada incluye el hash de la anterior). Si alguien retoca una
// medición a posteriori, la cadena deja de verificar. Ninguna app comercial
// de medición ofrece esto.

const KEY = 'workpulse360.audit.v1'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? []
  } catch {
    return []
  }
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

/** Añade una entrada al registro encadenado. Silencioso ante errores. */
export async function appendAudit(action, summary) {
  try {
    const log = load()
    const prev = log.length ? log[log.length - 1].hash : 'GENESIS'
    const entry = { ts: new Date().toISOString(), action, summary, prev }
    entry.hash = await sha256Hex(prev + JSON.stringify([entry.ts, action, summary]))
    log.push(entry)
    localStorage.setItem(KEY, JSON.stringify(log))
  } catch { /* el registro nunca debe romper la app */ }
}

/** Resumen para el informe: nº de entradas, rango temporal y hash de cabeza. */
export function auditSummary() {
  const log = load()
  if (!log.length) return null
  return {
    count: log.length,
    first: log[0].ts,
    last: log[log.length - 1].ts,
    head: log[log.length - 1].hash,
  }
}

/** Verifica la cadena completa. Devuelve true si nadie la ha alterado. */
export async function verifyAudit() {
  const log = load()
  let prev = 'GENESIS'
  for (const e of log) {
    const expect = await sha256Hex(prev + JSON.stringify([e.ts, e.action, e.summary]))
    if (expect !== e.hash || e.prev !== prev) return false
    prev = e.hash
  }
  return true
}

/** Registro completo (para exportarlo con el proyecto). */
export function fullAudit() {
  return load()
}
