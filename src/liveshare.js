// Sesión en vivo compartida SIN servidor: WebRTC puro entre el medidor
// (anfitrión) y el cliente (invitado). La señalización es manual — el
// anfitrión genera un código (SDP comprimido con gzip y base64url) que viaja
// por WhatsApp/QR/enlace, el invitado responde con el suyo, y a partir de
// ahí todo va directo de dispositivo a dispositivo por un DataChannel:
// la foto (en trozos) y cada medición según se hace. Cero nube, cero cuentas.

const CHUNK = 16 * 1024

async function pipeText(text, TransformCls, mode) {
  const stream = new Blob([text]).stream().pipeThrough(new TransformCls(mode))
  const buf = await new Response(stream).arrayBuffer()
  return new Uint8Array(buf)
}

const b64url = {
  enc: (bytes) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
  dec: (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0)),
}

/** Comprime un texto a base64url (gzip nativo del navegador). */
export async function compressText(text) {
  return b64url.enc(await pipeText(text, CompressionStream, 'gzip'))
}

/** Descomprime un base64url a texto. */
export async function decompressText(code) {
  const stream = new Blob([b64url.dec(code.trim())]).stream()
    .pipeThrough(new DecompressionStream('gzip'))
  return new Response(stream).text()
}

function newPeer() {
  return new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  })
}

/** Espera a que la recolección ICE termine para empaquetar TODO en el SDP. */
function gathered(pc) {
  if (pc.iceGatheringState === 'complete') return Promise.resolve()
  return new Promise((res) => {
    const check = () => {
      if (pc.iceGatheringState === 'complete') {
        pc.removeEventListener('icegatheringstatechange', check)
        res()
      }
    }
    pc.addEventListener('icegatheringstatechange', check)
    setTimeout(res, 4000) // por si algún candidato tarda: seguimos con lo que haya
  })
}

function wireChannel(dc, handlers) {
  dc.binaryType = 'arraybuffer'
  dc.onopen = () => handlers.onOpen?.()
  dc.onclose = () => handlers.onClose?.()
  dc.onmessage = (e) => {
    if (typeof e.data === 'string') {
      try {
        handlers.onJSON?.(JSON.parse(e.data))
      } catch { /* mensaje malformado: se ignora */ }
    } else {
      handlers.onChunk?.(e.data)
    }
  }
}

/** Envía un blob por el canal en trozos, con cabecera y cierre JSON. */
export async function sendBlob(dc, kind, name, blob) {
  const buf = await blob.arrayBuffer()
  dc.send(JSON.stringify({ t: `${kind}-start`, name, size: buf.byteLength, mime: blob.type }))
  for (let off = 0; off < buf.byteLength; off += CHUNK) {
    // Control de flujo sencillo para no desbordar el buffer del canal.
    while (dc.bufferedAmount > 4 * 1024 * 1024) {
      await new Promise((r) => setTimeout(r, 50))
    }
    dc.send(buf.slice(off, off + CHUNK))
  }
  dc.send(JSON.stringify({ t: `${kind}-end`, name }))
}

/**
 * Lado anfitrión: crea la conexión y el código de oferta.
 * @returns {{offerCode: Promise<string>, acceptAnswer(code), send(obj), sendBlob(kind,name,blob), close(), channel()}}
 */
export function createHost(handlers = {}) {
  const pc = newPeer()
  const dc = pc.createDataChannel('workpulse360')
  wireChannel(dc, handlers)
  const offerCode = (async () => {
    await pc.setLocalDescription(await pc.createOffer())
    await gathered(pc)
    return compressText(JSON.stringify(pc.localDescription))
  })()
  return {
    offerCode,
    async acceptAnswer(code) {
      const desc = JSON.parse(await decompressText(code))
      await pc.setRemoteDescription(desc)
    },
    send: (obj) => { if (dc.readyState === 'open') dc.send(JSON.stringify(obj)) },
    sendBlob: (kind, name, blob) => sendBlob(dc, kind, name, blob),
    close: () => { try { dc.close(); pc.close() } catch { /* ya cerrado */ } },
    channel: () => dc,
  }
}

/**
 * Lado invitado: consume el código de oferta y produce el de respuesta.
 * @returns {Promise<{answerCode: string, close()}>}
 */
export async function createGuest(offerCode, handlers = {}) {
  const pc = newPeer()
  pc.ondatachannel = (e) => wireChannel(e.channel, handlers)
  const offer = JSON.parse(await decompressText(offerCode))
  await pc.setRemoteDescription(offer)
  await pc.setLocalDescription(await pc.createAnswer())
  await gathered(pc)
  const answerCode = await compressText(JSON.stringify(pc.localDescription))
  return {
    answerCode,
    close: () => { try { pc.close() } catch { /* ya cerrado */ } },
  }
}

/** Ensamblador de blobs recibidos por trozos (uno por tipo a la vez). */
export function makeAssembler() {
  let meta = null
  let parts = []
  let got = 0
  return {
    start(m) { meta = m; parts = []; got = 0 },
    chunk(buf) {
      if (!meta) return
      parts.push(buf)
      got += buf.byteLength
    },
    end() {
      if (!meta) return null
      const blob = new Blob(parts, { type: meta.mime || 'image/jpeg' })
      const out = { ...meta, blob, complete: got >= (meta.size ?? 0) }
      meta = null
      parts = []
      return out
    },
  }
}
