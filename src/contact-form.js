function getStatusElement(form) {
  let status = form.querySelector('.form-status')

  if (!status) {
    status = document.createElement('p')
    status.className = 'form-status'
    status.setAttribute('role', 'status')
    status.setAttribute('aria-live', 'polite')
    form.appendChild(status)
  }

  return status
}

document.addEventListener('submit', async event => {
  const form = event.target
  if (!(form instanceof HTMLFormElement) || !form.matches('.contact-form')) return

  event.preventDefault()

  const button = form.querySelector('button[type="submit"]')
  const status = getStatusElement(form)
  const originalButtonContent = button?.innerHTML
  const formData = new FormData(form)

  const payload = {
    nombre: String(formData.get('nombre') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    asunto: String(formData.get('asunto') || '').trim(),
    mensaje: String(formData.get('mensaje') || '').trim(),
    website: String(formData.get('website') || '').trim(),
  }

  status.className = 'form-status sending'
  status.textContent = 'Enviando mensaje...'

  if (button) {
    button.disabled = true
    button.textContent = 'Enviando...'
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error(result.message || 'No fue posible enviar el mensaje.')
    }

    status.className = 'form-status success'
    status.textContent = result.message || 'Mensaje enviado correctamente.'
    form.reset()
  } catch (error) {
    status.className = 'form-status error'
    status.textContent = error.message || 'Ocurrió un error al enviar el mensaje.'
  } finally {
    if (button) {
      button.disabled = false
      button.innerHTML = originalButtonContent
    }
  }
})
