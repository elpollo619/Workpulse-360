// Medidor láser Workpulse — firmware ESP32 + VL53L1X
//
// Publica la distancia medida (mm, uint32 little-endian) por BLE con
// notificaciones a ~5 Hz. La app Workpulse 360 (Web Bluetooth) se conecta
// y usa la lectura para calibrar la altura de cámara.
//
// Placas: ESP32 DevKit / ESP32-C3 (Arduino core "esp32" de Espressif).
// Librería: "VL53L1X" de Pololu (Library Manager).
// Cableado: VIN→3V3, GND→GND, SDA→GPIO21, SCL→GPIO22.

#include <Wire.h>
#include <VL53L1X.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

// Debe coincidir con src/laser.js de la app.
#define SERVICE_UUID "6e400001-b5a3-f393-e0a9-e50e24dcca9e"
#define CHAR_UUID    "6e400003-b5a3-f393-e0a9-e50e24dcca9e"

VL53L1X sensor;
BLECharacteristic *distChar;
bool clientConnected = false;

class ServerCallbacks : public BLEServerCallbacks {
  void onConnect(BLEServer *s) override { clientConnected = true; }
  void onDisconnect(BLEServer *s) override {
    clientConnected = false;
    s->getAdvertising()->start();  // volver a anunciarse
  }
};

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  Wire.setClock(400000);

  sensor.setTimeout(500);
  if (!sensor.init()) {
    Serial.println("VL53L1X no detectado. Revisa el cableado.");
    while (true) delay(1000);
  }
  // Largo alcance (hasta ~4 m), medición continua cada 100 ms.
  sensor.setDistanceMode(VL53L1X::Long);
  sensor.setMeasurementTimingBudget(100000);
  sensor.startContinuous(100);

  BLEDevice::init("Workpulse-Laser");
  BLEServer *server = BLEDevice::createServer();
  server->setCallbacks(new ServerCallbacks());
  BLEService *service = server->createService(SERVICE_UUID);
  distChar = service->createCharacteristic(
      CHAR_UUID, BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY);
  distChar->addDescriptor(new BLE2902());
  service->start();

  BLEAdvertising *adv = server->getAdvertising();
  adv->addServiceUUID(SERVICE_UUID);
  adv->start();
  Serial.println("Anunciando como Workpulse-Laser");
}

void loop() {
  uint32_t mm = sensor.read();  // bloquea hasta la siguiente medición
  if (sensor.timeoutOccurred() || mm == 0) {
    delay(50);
    return;
  }
  Serial.printf("%u mm\n", mm);
  if (clientConnected) {
    distChar->setValue((uint8_t *)&mm, sizeof(mm));  // little-endian nativo
    distChar->notify();
  }
  delay(100);  // ~5 Hz junto al tiempo de medición
}
