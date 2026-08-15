// Conexión con el medidor láser DIY de Workpulse (ESP32 + sensor ToF) vía
// Web Bluetooth. El firmware (carpeta hardware/) publica un servicio GATT
// propio que notifica la distancia en milímetros como uint32 little-endian.
//
// Compatibilidad: Chrome/Edge/Opera en Android, Windows, macOS y Linux sobre
// HTTPS. Safari/iOS no soporta Web Bluetooth (limitación de Apple).

export const LASER_SERVICE = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'
export const LASER_CHAR = '6e400003-b5a3-f393-e0a9-e50e24dcca9e'

export function laserSupported() {
  return typeof navigator !== 'undefined' && !!navigator.bluetooth
}

/**
 * Abre el selector de dispositivos y se suscribe a las lecturas.
 * @param {(meters: number) => void} onReading   distancia en metros
 * @param {() => void} onDisconnect
 * @returns {Promise<{device: BluetoothDevice, disconnect: () => void}>}
 */
export async function connectLaser(onReading, onDisconnect) {
  const device = await navigator.bluetooth.requestDevice({
    filters: [{ services: [LASER_SERVICE] }],
    optionalServices: [LASER_SERVICE],
  })
  const server = await device.gatt.connect()
  const service = await server.getPrimaryService(LASER_SERVICE)
  const char = await service.getCharacteristic(LASER_CHAR)
  const handler = (e) => {
    const dv = e.target.value
    if (!dv || dv.byteLength < 4) return
    const mm = dv.getUint32(0, true)
    if (mm > 0 && mm < 100000) onReading(mm / 1000)
  }
  char.addEventListener('characteristicvaluechanged', handler)
  await char.startNotifications()
  device.addEventListener('gattserverdisconnected', () => onDisconnect?.())
  return {
    device,
    disconnect: () => {
      try {
        char.removeEventListener('characteristicvaluechanged', handler)
        device.gatt.disconnect()
      } catch { /* ya desconectado */ }
    },
  }
}
