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
      from: 'KapitalKraft <leanderengel99@gmail.com>',
      to: [email], // Send to the subscriber's email
      subject: 'Welcome to VentureBoard Newsletter',
      html: `
        <h1>Welcome to VentureBoard!</h1>
        <p>Hi ${firstName || 'there'},</p>
        <p>Thank you for subscribing to our newsletter. You'll now receive weekly updates about:</p>
        <ul>
          <li>Latest VC job opportunities</li>
          <li>Industry insights</li>
          <li>Career tips and resources</li>
        </ul>
        <p>Best regards,<br>The VentureBoard Team</p>
      `,
      // Also BCC our team
      bcc: 'team@resend.dev'
    })

    if (error) {
      console.error('Error sending email:', error)
      return { error: 'Failed to subscribe. Please try again later.' }
    }

    console.log('Email sent successfully:', data)
    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { error: 'Failed to subscribe. Please try again later.' }
  }
}

