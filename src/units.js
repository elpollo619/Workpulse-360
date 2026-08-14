// Conversión y formato de unidades (métrico / imperial), como los conmutadores
// de unidades de magicplan o Matterport.

export const UNIT_SYSTEMS = [
  { id: 'm', label: 'm' },
  { id: 'cm', label: 'cm' },
  { id: 'ft', label: 'ft-in' },
]

const M_PER_FT = 0.3048

/** Formatea una longitud en metros según el sistema elegido. */
export function fmtLength(meters, sys = 'm', decimals = 2) {
  if (sys === 'cm') return `${(meters * 100).toFixed(0)} cm`
  if (sys === 'ft') {
    // Pies y pulgadas con fracción de 1/8″ (estándar de construcción en EE. UU.).
    const eighths = Math.round((meters / M_PER_FT) * 12 * 8)
    const ft = Math.floor(eighths / (12 * 8))
    const rem = eighths - ft * 12 * 8
    const inch = Math.floor(rem / 8)
    const frac = rem - inch * 8
    const FRACS = ['', '⅛', '¼', '⅜', '½', '⅝', '¾', '⅞']
    const fracStr = frac ? FRACS[frac] : ''
    return `${ft}′ ${inch}${fracStr}″`
  }
  return `${meters.toFixed(decimals)} m`
}

/** Formatea un área en m² según el sistema elegido. */
export function fmtArea(m2, sys = 'm', decimals = 2) {
  if (sys === 'ft') return `${(m2 / (M_PER_FT * M_PER_FT)).toFixed(1)} ft²`
  return `${m2.toFixed(decimals)} m²`
}

/** Formatea un volumen en m³. */
export function fmtVolume(m3, sys = 'm') {
  if (sys === 'ft') return `${(m3 / (M_PER_FT ** 3)).toFixed(0)} ft³`
  return `${m3.toFixed(2)} m³`
}

/** Formatea el valor de una medición según su modo. */
export function fmtValue(m, sys = 'm') {
  if (m.mode === 'note') return m.text ?? '📝'
  if (m.unit === 'm²') return fmtArea(m.value, sys)
  return fmtLength(m.value, sys)
}
