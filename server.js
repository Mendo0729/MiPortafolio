import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resend } from 'resend'

const app = express()
const port = process.env.PORT || 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, 'dist')

app.disable('x-powered-by')
app.use(express.json({ limit: '20kb' }))

const requestLog = new Map()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000
const RATE_LIMIT_MAX = 5

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function isRateLimited(ip) {
  const now = Date.now()
  const recent = (requestLog.get(ip) || []).filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)

  if (recent.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, recent)
    return true
  }

  recent.push(now)
  requestLog.set(ip, recent)
  return false
}

app.post('/api/contact', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip

  if (isRateLimited(ip)) {
    return res.status(429).json({ message: 'Has enviado varios mensajes. Intenta nuevamente en unos minutos.' })
  }

  const { nombre, email, asunto, mensaje, website } = req.body || {}

  // Campo señuelo para bots. Los usuarios reales no lo completan.
  if (website) return res.status(200).json({ message: 'Mensaje enviado correctamente.' })

  if (![nombre, email, asunto, mensaje].every(value => typeof value === 'string' && value.trim())) {
    return res.status(400).json({ message: 'Completa todos los campos obligatorios.' })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email) || nombre.length > 100 || email.length > 160 || asunto.length > 160 || mensaje.length > 4000) {
    return res.status(400).json({ message: 'Revisa los datos ingresados.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const toEmail = process.env.CONTACT_TO_EMAIL || 'abdielmendoza2906@gmail.com'

  if (!apiKey || !fromEmail) {
    console.error('Faltan RESEND_API_KEY o RESEND_FROM_EMAIL')
    return res.status(503).json({ message: 'El formulario aún no está configurado. Intenta más tarde.' })
  }

  const resend = new Resend(apiKey)
  const safeName = escapeHtml(nombre.trim())
  const safeEmail = escapeHtml(email.trim())
  const safeSubject = escapeHtml(asunto.trim())
  const safeMessage = escapeHtml(mensaje.trim()).replaceAll('\n', '<br />')

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `Portafolio: ${asunto.trim()}`,
      text: `Nombre: ${nombre.trim()}\nCorreo: ${email.trim()}\nAsunto: ${asunto.trim()}\n\n${mensaje.trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#17151f">
          <h2 style="color:#6d28d9">Nuevo mensaje desde tu portafolio</h2>
          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Correo:</strong> ${safeEmail}</p>
          <p><strong>Asunto:</strong> ${safeSubject}</p>
          <div style="margin-top:20px;padding:16px;border-radius:8px;background:#f4f1ff;line-height:1.6">${safeMessage}</div>
        </div>
      `,
    })

    if (error) {
      console.error('Error de Resend:', error)
      return res.status(502).json({ message: 'No fue posible enviar el mensaje. Intenta nuevamente.' })
    }

    return res.status(200).json({ message: 'Mensaje enviado correctamente. Te responderé pronto.' })
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    return res.status(500).json({ message: 'Ocurrió un error al enviar el mensaje.' })
  }
})

app.use(express.static(distPath))

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Portafolio disponible en el puerto ${port}`)
})
