// Estéreo de dos panorámicas (método PaMe): dos fotos 360 niveladas de la
// misma sala, separadas por una BASE de longitud conocida (medida con láser).
// El usuario marca en cada foto dónde estaba la otra cámara (eso orienta las
// dos fotos entre sí) y después el mismo punto en ambas fotos: la
// triangulación da coordenadas métricas sin depender de la altura de cámara
// ni de que el suelo sea plano. La separación entre los dos rayos en el
// punto de cruce ("gap") delata correspondencias mal marcadas.

/** Rumbo (yaw) de una dirección, en radianes. */
export function bearing(dir) {
  return Math.atan2(dir.x, dir.z)
}

/**
 * Pose relativa de la cámara B en el marco de la cámara A.
 * @param {number} thetaAB  rumbo de B visto desde A (radianes)
 * @param {number} thetaBA  rumbo de A visto desde B (radianes, marco local B)
 * @param {number} D        distancia entre cámaras (m)
 * @returns {{pos:{x,y,z}, dyaw:number}} posición de B y desfase de yaw de B
 */
export function relativePose(thetaAB, thetaBA, D) {
  const pos = { x: D * Math.sin(thetaAB), y: 0, z: D * Math.cos(thetaAB) }
  // En el mundo, la dirección B→A tiene rumbo thetaAB + π; en el marco local
  // de B ese mismo rayo se marcó con rumbo thetaBA.
  const dyaw = thetaAB + Math.PI - thetaBA
  return { pos, dyaw }
}

/** Gira una dirección local de B al marco del mundo (marco de A). */
export function toWorldDir(dirB, dyaw) {
  const c = Math.cos(dyaw)
  const s = Math.sin(dyaw)
  return {
    x: dirB.x * c + dirB.z * s,
    y: dirB.y,
    z: dirB.z * c - dirB.x * s,
  }
}

/**
 * Triangulación de dos rayos casi-secantes: A en el origen con dirección u,
 * B en `pos` con dirección v (ya en el marco del mundo).
 * @returns {{point:{x,y,z}, gap:number, range:number}|null}
 *   punto medio del segmento de mínima distancia, separación entre rayos y
 *   distancia desde A; null si los rayos son casi paralelos o el cruce cae
 *   detrás de alguna cámara.
 */
export function triangulate(u, pos, v) {
  const w0 = { x: -pos.x, y: -pos.y, z: -pos.z } // A − B
  const bb = u.x * v.x + u.y * v.y + u.z * v.z
  const d = u.x * w0.x + u.y * w0.y + u.z * w0.z
  const e = v.x * w0.x + v.y * w0.y + v.z * w0.z
  const denom = 1 - bb * bb
  if (Math.abs(denom) < 1e-6) return null // rayos paralelos: sin cruce útil
  const s = (bb * e - d) / denom
  const t = (e - bb * d) / denom
  if (s <= 0 || t <= 0) return null // el "cruce" cae detrás de una cámara
  const pA = { x: s * u.x, y: s * u.y, z: s * u.z }
  const pB = { x: pos.x + t * v.x, y: pos.y + t * v.y, z: pos.z + t * v.z }
  const gap = Math.hypot(pA.x - pB.x, pA.y - pB.y, pA.z - pB.z)
  return {
    point: { x: (pA.x + pB.x) / 2, y: (pA.y + pB.y) / 2, z: (pA.z + pB.z) / 2 },
    gap,
    range: s,
  }
}

/** Distancia euclídea 3D entre dos puntos triangulados. */
export function stereoDistance(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z)
}
