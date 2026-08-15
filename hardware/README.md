# Medidor láser Workpulse (DIY) 🔦

> **¿Ya tienes un Bosch GLM con Bluetooth (p. ej. GLM 50-27 C)?** Entonces
> no necesitas construir nada: la app lo soporta directamente. Enciende el
> Bluetooth del GLM (botón ᛒ), pulsa **🔗** en el visor, elige el `Bosch
> GLM…` y dispara mediciones en el aparato — cada valor llega a la app y se
> propone al calibrar. (Un Stanley TLM 165 no tiene Bluetooth; sus valores
> se teclean a mano.)

Medidor de distancias por láser que se conecta a **Workpulse 360** por
Bluetooth (Web Bluetooth). Al calibrar en la app (🎯/🚪), la lectura del
láser se propone automáticamente como valor real — calibración de la altura
de cámara en dos toques y sin teclear.

## Lista de compra

| Pieza | Modelo recomendado | Precio aprox. |
|---|---|---|
| Microcontrolador | ESP32 DevKit (ESP32-WROOM-32) o ESP32-C3 | 8–15 CHF |
| Sensor de distancia (opción A, fácil) | **VL53L1X** breakout (Pololu/Adafruit) — láser IR ToF, hasta 4 m, ±1 % | 15–25 CHF |
| Sensor de distancia (opción B, más alcance) | **TF-Luna** (Benewake) — lidar 8 m, UART/I2C | 25–35 CHF |
| Alimentación | Power bank USB pequeño **o** LiPo 1S + cargador TP4056 + interruptor | 5–15 CHF |
| Puntería | Módulo puntero láser rojo 5 mW (KY-008) — solo para APUNTAR, el VL53L1X mide con su propio láser IR | 2–5 CHF |
| Caja | Impresa en 3D o caja pequeña con tuerca de trípode 1/4″ y nivel de burbuja | 5–10 CHF |
| Cables | Dupont hembra-hembra | 2 CHF |

**Total: ≈ 40–70 CHF.**

> ¿Necesitas precisión milimétrica real (±1.5 mm, 50 m)? Los módulos de
> fase láser no son viables en DIY. Compra un **Bosch GLM 50 C** o
> **Leica DISTO D2** de segunda mano (~80–120 CHF): también llevan
> Bluetooth (su protocolo es distinto; el soporte en la app puede añadirse
> más adelante). El DIY de esta guía da precisión de ±1–3 cm, más que
> suficiente para calibrar la altura de cámara y verificar medidas.

## Montaje (opción A: VL53L1X por I2C)

```
ESP32          VL53L1X
-----          -------
3V3     ────── VIN
GND     ────── GND
GPIO21  ────── SDA
GPIO22  ────── SCL
```

- Alimenta el ESP32 por USB (power bank) o LiPo.
- Monta sensor y puntero láser apuntando en la misma dirección.
- Fija la caja al mismo trípode/palo de la cámara 360 (tuerca 1/4″):
  así el láser mide justo desde la posición de la cámara.

## Firmware

En `firmware/workpulse_laser/workpulse_laser.ino` (Arduino IDE):

1. Instala el soporte de placas **esp32** (Espressif) en el Boards Manager.
2. Instala la librería **VL53L1X de Pololu** en el Library Manager.
3. Selecciona tu placa ESP32, compila y sube.
4. El dispositivo se anuncia como **`Workpulse-Laser`** y notifica la
   distancia (mm, uint32 little-endian) 5 veces por segundo por BLE.

## Uso con la app

1. Abre https://elpollo619.github.io/Workpulse-360/ en **Chrome o Edge**
   (Android/Windows/macOS/Linux — iOS no soporta Web Bluetooth).
2. Abre una foto y pulsa **🔗** en la barra: elige `Workpulse-Laser`.
3. La lectura en vivo aparece en el botón (p. ej. `🔗 2.43 m`).
4. Calibra con **🎯** (dos puntos del suelo) o **🚪** (pie/tope): el valor
   del láser se propone automáticamente en el diálogo. Acepta y listo.

## Protocolo BLE (para integrar otros dispositivos)

- Servicio: `6e400001-b5a3-f393-e0a9-e50e24dcca9e`
- Característica (notify): `6e400003-b5a3-f393-e0a9-e50e24dcca9e`
- Payload: `uint32` little-endian, distancia en **milímetros**

Cualquier dispositivo que publique ese GATT funciona con la app.
