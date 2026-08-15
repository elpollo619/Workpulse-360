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
- 🇨🇭 **Normas suizas**: clasificación **SIA 416** (HNF/NNF/VF/FF, balcón,
  terraza) con desglose de **NWF** y superficie ponderada de tasación;
  comprobaciones **SIA 500** (puerta ≥ 0.80 m, pasillo ≥ 1.20 m), avisos de
  altura de techo (≈ 2.40 m PBG ZH) y regla de 1.50 m bajo pendientes;
  referencias de calibración suizas (puerta 2.10 m, encimera 0.90 m, SIA 358)
- 🖨️ Plano imprimible a **escala 1:50 / 1:100** (convención SIA 400) ·
  📸 captura PNG del visor con mediciones
- 🧱 **Modo pared**: define una pared con 2 puntos de su base y mide sobre el
  plano vertical (anchos/altos de ventanas, huecos, diagonales)
- 📝 **Notas ancladas** en la foto 360 (defectos, materiales, recordatorios)
- 🧩 **Plano general**: ensambla todas las habitaciones en un plano de
  conjunto — arrastra y rota cada una, con cotas y export SVG/PNG
- ⚖️ Pesos de tasación configurables (balcón/terraza/jardín) y **descuento
  NWF** automático de áreas marcadas como «descuento/pendiente» (h &lt; 1.50 m)
- ⛰️ **Modo pendiente**: ángulo de techos inclinados con dos pares pie/tope,
  indicando dónde cruza la altura 1.50 m (regla WBS)
- 🧲 Plano general con **snap de paredes** al soltar y **grosor de muro
  aparente** entre habitaciones adyacentes
- 🔗 **Medidor láser por Bluetooth** (Web Bluetooth): compatible con los
  **Bosch GLM con Bluetooth** (GLM 50-27 C, GLM 50 C…) y con el láser DIY
  de la carpeta [`hardware/`](hardware/); la lectura se propone sola al
  calibrar (Chrome/Edge)
- 📲 **App instalable (PWA)** que funciona **sin conexión** — ideal en obra
  sin cobertura; en el móvil: menú del navegador → «Añadir a pantalla de inicio»
- 🧭 **Auto-nivelación** leyendo la pose GPano (XMP) que escriben las
  Insta360/Theta al abrir cada foto
- 🗄️ **Copia de seguridad completa** (ZIP con fotos + mediciones) y
  restauración con un clic · 📑 informe como **HTML autónomo**
- 🎚️ **Modo precisión**: nivelación fina de la foto (cabeceo/alabeo con
  rejilla de verticales, persistida por foto), **calibración multi-muestra**
  con ajuste ponderado e indicador de dispersión, unidad **mm** y lupa de
  mayor aumento
- 🔌 **Planificación eléctrica**: coloca enchufes, interruptores,
  luminarias, cajas y tomas sobre la foto — aparecen como símbolos en el
  plano y el DXF (capa ELEMENTOS) con recuento por habitación en el informe
- 📐 Plano con **ángulos de esquina** (en rojo si no son de 90°) y
  **perímetro (U =)** por habitación, estilo aufmaß profesional

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
```

Cada push a `main` construye y publica automáticamente en GitHub Pages
(rama `gh-pages`).

## Hermana

Mediciones de terreno con drone: [Workpulse Drohne](https://github.com/elpollo619/Workpulse-Drohne) 🚁
