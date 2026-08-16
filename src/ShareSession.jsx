import { useEffect, useRef, useState } from 'react'
import { createHost } from './liveshare.js'

/**
 * Anfitrión de la sesión en vivo: genera el enlace de invitación, acepta el
 * código de respuesta del cliente y, una vez conectado, le envía la foto y
 * cada medición según se hace. Mientras la sesión está activa se muestra un
 * chip flotante; el modal puede cerrarse sin cortar la conexión.
 */
export default function ShareSession({ photo, measurements, roomName, onClose }) {
  const hostRef = useRef(null)
  const [offer, setOffer] = useState('')
  const [answer, setAnswer] = useState('')
  const [status, setStatus] = useState('preparando') // preparando | esperando | conectado | cerrado
  const [minimized, setMinimized] = useState(false)
  const sentPhotoRef = useRef(false)

  useEffect(() => {
    const host = createHost({
      onOpen: async () => {
        setStatus('conectado')
        setMinimized(true)
        // Al conectar: metadatos + foto (reducida) + mediciones actuales.
        host.send({ t: 'meta', name: photo.name, roomName })
        try {
          const blob = await shrinkForShare(photo.url)
          await host.sendBlob('photo', photo.name, blob)
          sentPhotoRef.current = true
          host.send({ t: 'measurements', list: measurements })
        } catch { /* la foto original no está disponible */ }
      },
      onClose: () => setStatus('cerrado'),
    })
    hostRef.current = host
    host.offerCode.then((code) => {
      setOffer(code)
      setStatus('esperando')
    })
    return () => host.close()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Cada cambio en las mediciones viaja al cliente en cuanto ocurre.
  useEffect(() => {
    if (status === 'conectado' && sentPhotoRef.current) {
      hostRef.current?.send({ t: 'measurements', list: measurements })
    }
  }, [measurements, status])

  const joinURL = `${location.origin}${location.pathname}#join=${offer}`

  async function shareInvite() {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Sesión Workpulse 360 en vivo', url: joinURL })
        return
      } catch { /* cancelado */ }
    }
    await navigator.clipboard?.writeText(joinURL)
  }

  async function applyAnswer() {
    try {
      await hostRef.current.acceptAnswer(answer)
    } catch {
      setStatus('esperando')
      alert('Ese código de respuesta no es válido. Pide al cliente que lo copie completo.')
    }
  }

  if (minimized) {
    return (
      <div className="share-chip" onClick={() => setMinimized(false)}
        title="Sesión en vivo — clic para abrir los detalles">
        🔴 En vivo · {status === 'conectado' ? 'cliente conectado' : status}
      </div>
    )
  }

  return (
    <div className="floorplan">
      <div className="floorplan-card" style={{ maxWidth: 560 }}>
        <div className="floorplan-head">
          <b>🔴 Sesión en vivo — {roomName || photo.name}</b>
          <span>
            {status === 'conectado' && <button onClick={() => setMinimized(true)}>— Minimizar</button>}{' '}
            <button onClick={onClose}>✕ Terminar</button>
          </span>
        </div>
        {status !== 'conectado' && (
          <>
            <p className="hint">
              <b>1.</b> Envía este enlace al cliente (WhatsApp, correo…). Lo abre
              en su móvil u ordenador — sin instalar nada, sin cuentas; la
              conexión es directa entre vuestros dispositivos.
            </p>
            <div className="row">
              <input type="text" readOnly value={status === 'preparando' ? 'generando…' : joinURL}
                style={{ flex: 1, fontSize: 11 }} onFocus={(e) => e.target.select()} />
              <button className="active" onClick={shareInvite} disabled={!offer}>📤 Enviar</button>
            </div>
            <p className="hint">
              <b>2.</b> Su pantalla le mostrará un <b>código de respuesta</b> —
              pídele que te lo mande y pégalo aquí:
            </p>
            <div className="row">
              <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}
                placeholder="pega aquí el código del cliente" style={{ flex: 1, fontSize: 11 }} />
              <button className="active" onClick={applyAnswer} disabled={!answer.trim()}>Conectar</button>
            </div>
          </>
        )}
        {status === 'conectado' && (
          <p className="hint">
            ✅ Cliente conectado. Ve tu foto y <b>cada medición que hagas, al
            instante</b>. Puedes minimizar esto y seguir midiendo.
          </p>
        )}
        {status === 'cerrado' && <p className="hint">La conexión se cerró.</p>}
      </div>
    </div>
  )
}

/** La foto viaja reducida (2048 px) para conectar rápido. */
async function shrinkForShare(url, width = 2048) {
  const img = new Image()
  img.src = url
  await new Promise((res, rej) => { img.onload = res; img.onerror = rej })
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = Math.round(width / 2)
  canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
  return new Promise((res) => canvas.toBlob((b) => res(b), 'image/jpeg', 0.8))
}
