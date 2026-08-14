// Normas suizas aplicadas a la medición de espacios.
//
// Fuentes: SIA 416:2003 (Flächen und Volumen), práctica WBS/BWO de
// Nettowohnfläche, SIA 500:2009 (Hindernisfreie Bauten), SIA 358 (Geländer),
// PBG ZH § 304 (altura de techo) y dimensiones estándar del mercado suizo.
// Los valores exactos de las normas SIA requieren el texto oficial
// (shop.sia.ch); aquí se usan los extractos publicados por organismos
// oficiales y especializados.

/**
 * Categorías de superficie según SIA 416 para clasificar cada espacio.
 * Composición: GF = NGF + KF · NGF = NF + VF + FF · NF = HNF + NNF.
 * `weight` = ponderación habitual en la "gewichtete Fläche" de tasación
 * (RealAdvisor/práctica; balcón ~50 %, terraza ~33 %, jardín ~10 %).
 * `nwf` = cuenta como Nettowohnfläche (superficie habitable neta, WBS).
 */
export const SIA416_TYPES = [
  { id: 'HNF', label: '🛋️ HNF — habitable (salón, cocina, baño…)', short: 'HNF', weight: 1, nwf: true },
  { id: 'NNF', label: '📦 NNF — anexa (sótano, trastero, lavadero)', short: 'NNF', weight: 0, nwf: false },
  { id: 'VF', label: '🚶 VF — circulación (escalera, pasillo común)', short: 'VF', weight: 0, nwf: false },
  { id: 'FF', label: '⚙️ FF — técnica (calefacción, instalaciones)', short: 'FF', weight: 0, nwf: false },
  { id: 'BALKON', label: '🌤️ Balcón / loggia (AGF)', short: 'Balcón', weight: 0.5, nwf: false },
  { id: 'TERRASSE', label: '☀️ Terraza / azotea (AGF)', short: 'Terraza', weight: 1 / 3, nwf: false },
  { id: 'GARTEN', label: '🌿 Jardín privativo', short: 'Jardín', weight: 0.1, nwf: false },
]

export const DEFAULT_TYPE = 'HNF'

/** Alturas de techo de referencia (cantonales — ZH como referencia). */
export const CEILING = {
  minHabitableZH: 2.4, // PBG ZH § 304 (2.30 en Kernzonen); otros cantones 2.30–2.40
  minCountable: 1.5, // regla WBS: bajo pendientes solo computa la zona con ≥ 1.50 m
}

/** Comprobaciones clave de SIA 500:2009 (construcción sin obstáculos). */
export const SIA500 = {
  doorClearWidth: 0.8, // paso libre de puerta en vivienda
  corridorWidth: 1.2, // pasillo (1.00 admisible sin puertas laterales)
  headroom: 2.1, // altura libre en circulaciones
  stairRiserMax: 0.175,
  stairTreadMin: 0.28,
  handrail: [0.85, 0.9],
  guardrailMin: 1.0, // SIA 358: antepechos ≥ 1.00 m si hay caída ≥ 1.00 m
  turningArea: [1.4, 1.7], // maniobra silla de ruedas
}

/**
 * Referencias suizas útiles para calibrar (🎯/🚪) o validar medidas.
 * Cada una: etiqueta y valor en metros.
 */
export const CH_REFERENCES = [
  { label: 'Puerta interior CH (hoja, stock moderno)', value: 2.1 },
  { label: 'Puerta interior CH (stock antiguo)', value: 2.0 },
  { label: 'Encimera de cocina (norma suiza 55/60/90)', value: 0.9 },
  { label: 'Interruptor de luz (práctica habitual)', value: 1.05 },
  { label: 'Barandilla escalera (SIA 358)', value: 0.9 },
  { label: 'Antepecho / barandilla (SIA 358)', value: 1.0 },
  { label: 'Hoja A4 (lado largo)', value: 0.297 },
]

/** Palabras clave para detectar el tipo de una medición por su etiqueta. */
const DOOR_WORDS = /puerta|t(ü|u)r|porte|door/i
const CORRIDOR_WORDS = /pasillo|korridor|flur|couloir|corridor/i

/**
 * Evalúa las mediciones de una habitación contra las normas y devuelve
 * avisos legibles. `ms` = mediciones; devuelve array de {level, text}.
 */
export function evaluateChecks(ms) {
  const out = []
  for (const m of ms) {
    if (m.mode === 'height') {
      if (m.value < CEILING.minCountable) {
        out.push({
          level: 'warn',
          text: `${m.label} = ${m.value.toFixed(2)} m: por debajo de 1.50 m no computa como superficie habitable (regla WBS para pendientes).`,
        })
      } else if (m.value < CEILING.minHabitableZH && m.value > 1.8) {
        out.push({
          level: 'warn',
          text: `${m.label} = ${m.value.toFixed(2)} m: bajo el mínimo habitual de altura de techo habitable (≈ 2.40 m según PBG ZH § 304; varía por cantón).`,
        })
      }
    }
    if (m.mode === 'distance') {
      if (DOOR_WORDS.test(m.label ?? '')) {
        out.push(m.value >= SIA500.doorClearWidth
          ? { level: 'ok', text: `${m.label} = ${m.value.toFixed(2)} m: cumple el paso libre mínimo de puerta SIA 500 (≥ 0.80 m).` }
          : { level: 'fail', text: `${m.label} = ${m.value.toFixed(2)} m: NO cumple el paso libre mínimo de puerta SIA 500 (≥ 0.80 m).` })
      } else if (CORRIDOR_WORDS.test(m.label ?? '')) {
        out.push(m.value >= SIA500.corridorWidth
          ? { level: 'ok', text: `${m.label} = ${m.value.toFixed(2)} m: cumple el ancho mínimo de pasillo SIA 500 (≥ 1.20 m).` }
          : { level: 'fail', text: `${m.label} = ${m.value.toFixed(2)} m: NO cumple el ancho mínimo de pasillo SIA 500 (≥ 1.20 m). (1.00 m admisible sin puertas laterales.)` })
      }
    }
  }
  return out
}

/**
 * Desglose SIA 416 de la sesión: superficies por categoría, NWF y
 * superficie ponderada de tasación.
 * @param {{[photo:string]: Array}} store
 * @param {{[photo:string]: string}} roomTypes  tipo SIA por foto
 * @returns {{byType: Object, nwf: number, weighted: number, total: number}}
 */
export function sia416Breakdown(store, roomTypes = {}) {
  const byType = {}
  let nwf = 0
  let weighted = 0
  let total = 0
  for (const [photo, ms] of Object.entries(store)) {
    const area = ms.filter((m) => m.mode === 'area').reduce((s, m) => s + m.value, 0)
    if (area <= 0) continue
    const typeId = roomTypes[photo] ?? DEFAULT_TYPE
    const type = SIA416_TYPES.find((t) => t.id === typeId) ?? SIA416_TYPES[0]
    byType[type.id] = (byType[type.id] ?? 0) + area
    if (type.nwf) nwf += area
    weighted += area * type.weight
    total += area
  }
  return { byType, nwf, weighted, total }
}
