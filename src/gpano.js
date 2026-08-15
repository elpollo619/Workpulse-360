// Lectura de la pose GPano (XMP) de una foto 360: las cámaras Insta360 y
// Ricoh Theta escriben GPano:PosePitchDegrees / PoseRollDegrees en la
// cabecera JPEG. Si existen, la app pre-ajusta la nivelación fina sola.

/**
 * Busca los ángulos de pose en los primeros KB del archivo.
 * @param {File|Blob} file
 * @returns {Promise<{pitch:number, roll:number}|null>} grados, o null
 */
export async function readGPanoPose(file) {
  try {
    const buf = await file.slice(0, 256 * 1024).arrayBuffer()
    const s = new TextDecoder('latin1').decode(buf)
    const num = (tag) => {
      // Forma atributo (GPano:X="1.2") o elemento (<GPano:X>1.2</GPano:X>).
      const m = s.match(new RegExp(`${tag}(?:="|>)\\s*(-?\\d+(?:\\.\\d+)?)`))
      return m ? parseFloat(m[1]) : null
    }
    const pitch = num('GPano:PosePitchDegrees')
    const roll = num('GPano:PoseRollDegrees')
    if (pitch == null && roll == null) return null
    return { pitch: pitch ?? 0, roll: roll ?? 0 }
  } catch {
    return null
  }
}

const clamp5 = (v) => Math.max(-5, Math.min(5, v))

/** Convierte la pose GPano en el ajuste de nivelación de la app. */
export function levelFromPose(pose) {
  if (!pose) return null
  // La corrección compensa la inclinación: signo opuesto a la pose.
  const pitch = clamp5(-(pose.pitch ?? 0))
  const roll = clamp5(-(pose.roll ?? 0))
  if (Math.abs(pitch) < 0.05 && Math.abs(roll) < 0.05) return null
  return { pitch: Math.round(pitch * 100) / 100, roll: Math.round(roll * 100) / 100 }
}
