import { useEffect, useRef, useState } from 'react'
import { createGuest, makeAssembler } from './liveshare.js'

/**
 * Invitado de la sesión en vivo: consume el código de la invitación (llega en
 * el #join= del enlace), muestra el código de respuesta para devolvérselo al
 * medidor y, al conectar, recibe la foto y las mediciones en directo. La foto
 * se entrega a la app (onPhoto) para abrirse en el visor normal, y cada
 * actualización de mediciones llega por onMeasurements.
 */
export default function JoinSession({ offerCode, onPhoto, onMeasurements, onClose }) {
  const [answer, setAnswer] = useState('')
  const [status, setStatus] = useState('preparando') // preparando | responde | conectado | recibido | error
  const guestRef = useRef(null)
  const metaRef = useRef({})

  useEffect(() => {
    const asm = makeAssembler()
    let alive = true
    createGuest(offerCode, {
      onOpen: () => alive && setStatus('conectado'),
      onClose: () => alive && setStatus((s) => (s === 'recibido' ? s : 'error')),
      onJSON: (m) => {
        if (m.t === 'meta') metaRef.current = m
        else if (m.t === 'photo-start') asm.start(m)
        else if (m.t === 'photo-end') {
          const out = asm.end()
          if (out?.blob) {
            onPhoto?.({ name: metaRef.current.name ?? out.name, roomName: metaRef.current.roomName, blob: out.blob })
            setStatus('recibido')
          }
        } else if (m.t === 'measurements') {
          onMeasurements?.(metaRef.current.name, m.list ?? [])
        }
      },
      onChunk: (buf) => asm.chunk(buf),
    }).then((g) => {
      if (!alive) { g.close(); return }
      guestRef.current = g
      setAnswer(g.answerCode)
      setStatus('responde')
    }).catch(() => alive && setStatus('error'))
    return () => {
      alive = false
      guestRef.current?.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerCode])

  async function sendAnswer() {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Código de respuesta Workpulse 360', text: answer })
        return
      } catch { /* cancelado */ }
    }
    await navigator.clipboard?.writeText(answer)
    alert('Código copiado — pégaselo al medidor.')
  }

  // Una vez recibida la foto, el visor normal toma el mando: solo queda el chip.
  if (status === 'recibido') {
    return (
      <div className="share-chip" title="Sesión en vivo: recibiendo mediciones del medidor">
        🟢 En vivo · viendo la sesión
      </div>
    )
  }

  return (
    <div className="floorplan">
      <div className="floorplan-card" style={{ maxWidth: 560 }}>
        <div className="floorplan-head">
          <b>🟢 Unirse a la sesión en vivo</b>
          <button onClick={onClose}>✕</button>
        </div>
        {status === 'preparando' && <p className="hint">Preparando la conexión…</p>}
        {status === 'responde' && (
          <>
            <p className="hint">
              Envía este <b>código de respuesta</b> al medidor (WhatsApp,
              correo…). En cuanto lo pegue, la conexión se establece en directo
              entre vuestros dispositivos — sin servidores.
            </p>
            <div className="row">
              <input type="text" readOnly value={answer} style={{ flex: 1, fontSize: 11 }}
                onFocus={(e) => e.target.select()} />
              <button className="active" onClick={sendAnswer}>📤 Enviar</button>
            </div>
          </>
        )}
        {status === 'conectado' && <p className="hint">✅ Conectado — recibiendo la foto…</p>}
        {status === 'error' && (
          <p className="hint">⚠️ No se pudo conectar. Pide un enlace nuevo al medidor (los códigos caducan al cerrar su pantalla).</p>
        )}
      </div>
    </div>
  )
}
