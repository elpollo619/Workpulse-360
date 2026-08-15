import React from 'react'
import ReactDOM from 'react-dom/client'
import App360 from './App360.jsx'
// Tipografía autoalojada (funciona offline con la PWA): condensada para
// titulares, monoespaciada para valores — voz de instrumento técnico.
import '@fontsource/ibm-plex-sans-condensed/600.css'
import '@fontsource/ibm-plex-sans-condensed/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App360 />
  </React.StrictMode>
)

// PWA: la app queda instalable y funciona sin conexión (solo en producción;
// en desarrollo Vite sirve desde memoria y el SW estorbaría).
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {})
  })
}
