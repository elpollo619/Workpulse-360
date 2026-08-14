// Medición sobre una foto 360° (equirectangular) de una cámara tipo Insta360.
//
// Principio: con la cámara a una altura conocida h sobre un suelo plano, un
// rayo que mira hacia abajo con ángulo de picado φ toca el suelo a una
// distancia horizontal d = h / tan(φ). Con dos puntos del suelo se obtiene la
// distancia real entre ellos. Es el mismo método que usan las apps de medición
// de interiores con una sola foto 360.
//
// Limitaciones (documentadas en la interfaz): válido para puntos apoyados en
// el plano del suelo; la precisión cae con ángulos muy rasantes (puntos muy
// lejanos) y con suelos inclinados.

/**
 * Punto del suelo alcanzado por un rayo de dirección `dir` (normalizada,
 * sistema Y-arriba) desde una cámara a altura `h`.
 * @returns {{x:number,y:number,z:number, horizontal:number, r:number}|null}
 *          null si el rayo no apunta al suelo (o es demasiado rasante).
 */
export function floorPointFromDirection(dir, h, minSin = 0.03) {
  if (!(h > 0) || dir.y >= -minSin) return null
  const r = h / -dir.y // distancia a lo largo del rayo hasta y = -h
  const x = dir.x * r
  const z = dir.z * r
  return { x, y: -h, z, horizontal: Math.hypot(x, z), r }
}

/** Distancia real entre dos puntos del suelo. */
export function floorDistance(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.z - p1.z)
}

/**
 * Perímetro (abierto) de una cadena de puntos del suelo.
 */
export function floorPathLength(points) {
  let total = 0
  for (let i = 1; i < points.length; i++) total += floorDistance(points[i - 1], points[i])
  return total
}

/**
 * Área real del polígono formado por puntos del suelo (fórmula del cordón,
 * sobre el plano x-z).
 */
export function floorPolygonArea(points) {
  if (points.length < 3) return 0
  let s = 0
  for (let i = 0; i < points.length; i++) {
    const a = points[i]
    const b = points[(i + 1) % points.length]
    s += a.x * b.z - b.x * a.z
  }
  return Math.abs(s) / 2
}

/**
 * Altura de un objeto: rayo al pie (en el suelo) y rayo a la parte superior
 * en la misma vertical. h = altura de cámara, `dirTop.y` puede ser + o −.
 * @returns {number|null}
 */
export function objectHeight(footPoint, dirTop, h) {
  if (!footPoint) return null
  const dHoriz = footPoint.horizontal
  const horizTop = Math.hypot(dirTop.x, dirTop.z)
  if (horizTop < 1e-6) return null
  // Elevación del rayo superior al llegar a la vertical del pie.
  const yAtFoot = (dirTop.y / horizTop) * dHoriz
  return h + yAtFoot
}

/**
 * Calibración de la altura de cámara con una distancia de referencia conocida
 * (el "calibrate" de magicplan/PLNAR): la geometría del suelo escala
 * linealmente con h, así que h_real = h_actual · D_real / D_medida.
 */
export function solveCameraHeight(currentH, measuredDist, realDist) {
  if (!(currentH > 0) || !(measuredDist > 0) || !(realDist > 0)) return null
  const h = currentH * (realDist / measuredDist)
  return h > 0.2 && h < 10 ? h : null
}

/**
 * Ajuste ortogonal tipo CAD: si el rumbo del segmento prev→p se acerca a un
 * múltiplo de `stepDeg` (relativo a `refBearing`, en radianes), proyecta p
 * sobre esa dirección. Devuelve el punto (ajustado o no) como {x,z}.
 */
export function snapToAngle(prev, p, refBearing = 0, stepDeg = 45, tolDeg = 6) {
  const dx = p.x - prev.x
  const dz = p.z - prev.z
  const len = Math.hypot(dx, dz)
  if (len < 1e-6) return p
  const bearing = Math.atan2(dz, dx) - refBearing
  const step = (stepDeg * Math.PI) / 180
  const snapped = Math.round(bearing / step) * step
  if (Math.abs(bearing - snapped) > (tolDeg * Math.PI) / 180) return p
  const a = snapped + refBearing
  return { x: prev.x + len * Math.cos(a), z: prev.z + len * Math.sin(a) }
}

/** Rumbo (radianes) del segmento a→b sobre el plano del suelo. */
export function bearingOf(a, b) {
  return Math.atan2(b.z - a.z, b.x - a.x)
}

/**
 * Plano vertical de una pared definida por dos puntos de su base en el suelo
 * (modelo de HoloBuilder): normal horizontal + distancia al origen.
 * @returns {{nx:number,nz:number,c:number}|null}
 */
export function wallPlaneFromPoints(a, b) {
  const dx = b.x - a.x
  const dz = b.z - a.z
  const len = Math.hypot(dx, dz)
  if (len < 1e-6) return null
  // Normal horizontal perpendicular a la base (el plano contiene la vertical).
  const nx = -dz / len
  const nz = dx / len
  return { nx, nz, c: nx * a.x + nz * a.z }
}

/**
 * Intersección de un rayo desde la cámara con el plano vertical de la pared.
 * Devuelve el punto 3D {x,y,z} (y relativo a la cámara) o null si el rayo no
 * corta el plano por delante de la cámara.
 */
export function wallPointFromDirection(dir, plane) {
  const denom = plane.nx * dir.x + plane.nz * dir.z
  if (Math.abs(denom) < 1e-6) return null
  const t = plane.c / denom
  if (t <= 0) return null
  return { x: dir.x * t, y: dir.y * t, z: dir.z * t }
}

/** Distancia euclídea 3D entre dos puntos de la pared. */
export function dist3D(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z)
}
