# Workpulse 360 📷

Medición de espacios con cámara 360° (Insta360, Ricoh Theta…): **distancias,
áreas y alturas reales desde una sola foto**, por trigonometría con la altura
de cámara conocida. Todo se procesa en el navegador — las fotos nunca salen
del dispositivo.

## Funciones

- 📏 Distancias · 📐 rutas y áreas · 📊 alturas de objetos (con snap a plomada)
- 🎯 **Calibración** sin conocer la altura de cámara: por distancia conocida en
  el suelo o por altura conocida (🚪 puerta ≈ 2.03 m)
- 🔍 **Lupa de precisión**, snapping ortogonal 45°/90°, cierre automático de
  polígonos, colores de confianza por distancia y línea de horizonte
- 🏷️ Etiquetas 3D flotantes con el valor de cada medición · ↩️ deshacer (Ctrl+Z)
- 📐 Unidades: **m · cm · pies-pulgadas** (fracciones de ⅛″)
- 🧭 Giroscopio en móvil · zoom con rueda o pellizco
- 💾 **Fotos y mediciones persistentes** (IndexedDB + localStorage): la sesión
  sobrevive a recargas · proyecto exportable/importable (JSON)
- 🗺️ Plano de planta a escala con **cotas por tramo** y barra de escala:
  export **SVG, PNG y DXF (CAD, con capa de cotas)**
- 🖨️ Informe imprimible/PDF con **superficie, perímetro, paredes y volumen**
  por habitación (quantity takeoff) y método auditable · 📄 CSV

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
```

Cada push a `main` construye y publica automáticamente en GitHub Pages
(rama `gh-pages`).

## Hermana

Mediciones de terreno con drone: [Workpulse Drohne](https://github.com/elpollo619/Workpulse-Drohne) 🚁
