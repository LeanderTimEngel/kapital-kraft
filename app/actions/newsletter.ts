'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not set in the environment variables")
}

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string
  const firstName = formData.get('firstName') as string

  if (!email) {
    return { error: 'Email is required' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set")
    return { error: 'Server configuration error. Please try again later.' }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'FundKarriere <leanderengel99@gmail.com>',
      to: [email], // Send to the subscriber's email
      subject: 'Willommen zum FundKarriere   Newsletter',
      html: `
        <h1>Willommen zum FundKarriere Newsletter</h1>
        <p>Hi ${firstName || 'there'},</p>
        <p>Danke für deine Anmeldung zum FundKarriere Newsletter. Hier findest du die wichtigsten Informationen zu:</p>
        <ul>
          <li>Neuesten VC Jobs</li>
          <li>Brancheninsights</li>
          <li>Karriere-Tipps und Ressourcen</li>
        </ul>
        <p>Liebe Grüße,<br>Dein FundKarriere Team</p>
      `,
      // Also BCC our team
      bcc: 'team@resend.dev'
    })

    if (error) {
      console.error('Error sending email:', error)
      return { error: 'Failed to subscribe. Bitte versuche es später erneut.' }
    }

    console.log('Email sent successfully:', data)
    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { error: 'Failed to subscribe. Bitte versuche es später erneut.' }
  }
}

