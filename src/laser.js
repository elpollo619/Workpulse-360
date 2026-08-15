// Conexión con medidores láser vía Web Bluetooth. Soporta dos protocolos:
//
// 1. Workpulse-Laser (DIY, carpeta hardware/): GATT propio que notifica la
//    distancia en milímetros como uint32 little-endian.
// 2. Bosch GLM con Bluetooth (GLM 50-27 C, GLM 50 C y familia): protocolo
//    "MT" de Bosch — se activa el auto-sync con el comando C0 55 02 01 00 1A
//    y el aparato notifica tramas C0 55 … con la distancia como float32
//    little-endian (metros) en el offset 7. Documentado por la comunidad
//    (proyectos abiertos de lectura del GLM 50C).
//
// Compatibilidad: Chrome/Edge/Opera en Android, Windows, macOS y Linux sobre
// HTTPS. Safari/iOS no soporta Web Bluetooth (limitación de Apple).

export const LASER_SERVICE = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'
export const LASER_CHAR = '6e400003-b5a3-f393-e0a9-e50e24dcca9e'

export const BOSCH_SERVICE = '02a6c0d0-0451-4000-b000-fb3210111989'
export const BOSCH_CHAR = '02a6c0d1-0451-4000-b000-fb3210111989'
const BOSCH_AUTOSYNC = new Uint8Array([0xc0, 0x55, 0x02, 0x01, 0x00, 0x1a])

export function laserSupported() {
  return typeof navigator !== 'undefined' && !!navigator.bluetooth
}

function parseDIY(dv, onReading) {
  if (dv.byteLength < 4) return
  const mm = dv.getUint32(0, true)
  if (mm > 0 && mm < 100000) onReading(mm / 1000)
}

function parseBosch(dv, onReading) {
  // Trama: C0 55 <len> <cmd> … distancia float32 LE en offset 7.
  if (dv.byteLength < 11) return
  if (dv.getUint8(0) !== 0xc0 || dv.getUint8(1) !== 0x55) return
  const meters = dv.getFloat32(7, true)
  if (Number.isFinite(meters) && meters > 0.01 && meters < 200) onReading(meters)
}

/**
 * Abre el selector de dispositivos y se suscribe a las lecturas.
 * @param {(meters: number) => void} onReading   distancia en metros
 * @param {() => void} onDisconnect
 * @returns {Promise<{device: BluetoothDevice, kind: 'diy'|'bosch', disconnect: () => void}>}
 */
export async function connectLaser(onReading, onDisconnect) {
  const device = await navigator.bluetooth.requestDevice({
    filters: [
      { services: [LASER_SERVICE] },
      { services: [BOSCH_SERVICE] },
      { namePrefix: 'Bosch' },
    ],
    optionalServices: [LASER_SERVICE, BOSCH_SERVICE],
  })
  const server = await device.gatt.connect()

  let kind = 'diy'
  let service = null
  try {
    service = await server.getPrimaryService(LASER_SERVICE)
  } catch {
    service = await server.getPrimaryService(BOSCH_SERVICE)
    kind = 'bosch'
  }
  const char = await service.getCharacteristic(kind === 'diy' ? LASER_CHAR : BOSCH_CHAR)

  const handler = (e) => {
    const dv = e.target.value
    if (!dv) return
    kind === 'diy' ? parseDIY(dv, onReading) : parseBosch(dv, onReading)
  }
  char.addEventListener('characteristicvaluechanged', handler)
  await char.startNotifications()

  if (kind === 'bosch') {
    // Activa el envío automático de cada medición que se dispare en el GLM.
    try {
      await char.writeValueWithResponse(BOSCH_AUTOSYNC)
    } catch {
      await char.writeValueWithoutResponse(BOSCH_AUTOSYNC)
    }
  }

  device.addEventListener('gattserverdisconnected', () => onDisconnect?.())
  return {
    device,
    kind,
    disconnect: () => {
      try {
        char.removeEventListener('characteristicvaluechanged', handler)
        device.gatt.disconnect()
      } catch { /* ya desconectado */ }
    },
  }
}
