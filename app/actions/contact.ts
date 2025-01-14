'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !subject || !message) {
    return { error: 'Alle Felder sind erforderlich' }
  }

  try {
    await resend.emails.send({
      from: 'KapitalKraft Contact <leanderengel99@gmail.com>',
      to: 'team@resend.dev',
      subject: `Neue Kontaktanfrage: ${subject}`,
      html: `
        <h1>Neue Kontaktanfrage</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <h2>Nachricht:</h2>
        <p>${message}</p>
      `
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending contact form email:', error)
    return { error: 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.' }
  }
}

