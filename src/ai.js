// Asistente de IA opcional (clave propia del usuario): analiza la foto 360 y
// automatiza el papeleo — nombre de la habitación, tipo SIA 416 sugerido y
// observaciones. Compatible con la API de OpenAI (gpt-4o-mini por defecto) y
// con claves de Anthropic (Claude). La foto se reduce y se envía SOLO cuando
// el usuario pulsa el botón: es la única función de la app que sale del
// dispositivo, y así se avisa.

const KEY_STORAGE = 'workpulse360.aikey.v1'

export function getAIKey() {
  return localStorage.getItem(KEY_STORAGE) || ''
}

export function setAIKey(k) {
  if (k) localStorage.setItem(KEY_STORAGE, k.trim())
  else localStorage.removeItem(KEY_STORAGE)
}

/** Reduce la panorámica a un JPEG pequeño (data URL) para el análisis. */
export async function shrinkPano(imageURL, width = 1024) {
  const img = new Image()
  img.src = imageURL
  await new Promise((res, rej) => { img.onload = res; img.onerror = rej })
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = Math.round(width / 2)
  canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
  return canvas.toDataURL('image/jpeg', 0.7)
}

const PROMPT =
  'Esta es una foto 360 equirectangular del interior de un espacio. ' +
  'Responde SOLO con JSON válido, sin texto extra, con esta forma: ' +
  '{"nombre":"nombre corto del espacio en español (p.ej. Cocina, Baño, Salón, Dormitorio, Pasillo, Sótano, Balcón)",' +
  '"tipo":"HNF|NNF|VF|FF|BALKON|TERRASSE|GARTEN según SIA 416 (HNF=habitable, NNF=sótano/trastero, VF=circulación, FF=técnica)",' +
  '"observaciones":["hasta 3 observaciones útiles para un aufmaß: estado, daños visibles, particularidades"]}'

/** Extrae el primer objeto JSON de un texto de modelo. */
function parseJSON(text) {
  const m = /\{[\s\S]*\}/.exec(text ?? '')
  if (!m) throw new Error('sin JSON')
  return JSON.parse(m[0])
}

/**
 * Analiza la foto con la clave del usuario.
 * @returns {Promise<{nombre?:string, tipo?:string, observaciones?:string[]}>}
 */
export async function analyzePhoto(imageURL, apiKey) {
  const dataURL = await shrinkPano(imageURL)
  if (apiKey.startsWith('sk-ant-')) {
    // Clave de Anthropic (Claude).
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: dataURL.split(',')[1] } },
            { type: 'text', text: PROMPT },
          ],
        }],
      }),
    })
    if (!res.ok) throw new Error(`API ${res.status}`)
    const out = await res.json()
    return parseJSON(out.content?.[0]?.text)
  }
  // Clave de OpenAI (o compatible).
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      max_tokens: 400,
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: PROMPT },
          { type: 'image_url', image_url: { url: dataURL } },
        ],
      }],
    }),
  })
  if (!res.ok) throw new Error(`API ${res.status}`)
  const out = await res.json()
  return parseJSON(out.choices?.[0]?.message?.content)
}
