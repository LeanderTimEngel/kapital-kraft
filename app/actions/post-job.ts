'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function postJob(formData: FormData) {
  const jobData = {
    jobTitle: formData.get('jobTitle'),
    company: formData.get('company'),
    location: formData.get('location'),
    jobType: formData.get('jobType'),
    salary: formData.get('salary'),
    applyLink: formData.get('applyLink'),
    description: formData.get('description'),
    companyDescription: formData.get('companyDescription'),
    requirements: formData.get('requirements'),
    benefits: formData.get('benefits'),
    contactEmail: formData.get('contactEmail'),
  }

  try {
    // Send confirmation email to the job poster
    await resend.emails.send({
      from: 'FundKarriere Jobs <leanderengel99@gmail.com>',
      to: jobData.contactEmail as string,
      subject: 'Job-Anmeldung bei FundKarriere: ' + jobData.jobTitle,
      html: `
        <h1>Danke für deine Job-Anmeldung bei FundKarriere!</h1>
        <p>Your job posting for "${jobData.jobTitle}" at ${jobData.company} has been received and is being reviewed.</p>
        <h2>Nächste Schritte:</h2>
        <ol>
          <li>Unser Team wird deine Job-Anmeldung innerhalb von 1-2 Werktagen überprüfen.</li>
          <li>Wenn deine Job-Anmeldung genehmigt wird, wird dein Job auf unserer Plattform veröffentlicht und vermarktet.</li>
          <li>Du erhältst eine weitere E-Mail-Benachrichtigung, sobald dein Job live ist.</li>
        </ol>
        <h2>Job Details:</h2>
        <ul>
          <li><strong>Titel:</strong> ${jobData.jobTitle}</li>
          <li><strong>Unternehmen:</strong> ${jobData.company}</li>
          <li><strong>Standort:</strong> ${jobData.location}</li>
          <li><strong>Typ:</strong> ${jobData.jobType}</li>
        </ul>
        <p>Wenn du Fragen hast oder deine Job-Anmeldung ändern musst, wende dich bitte an unser Support-Team.</p>
      `
    })

    // Send notification to admin
    await resend.emails.send({
      from: 'FundKarriere Jobs <leanderengel99@gmail.com>',
      to: 'team@resend.dev', // Replace with your admin email
      subject: 'Neue Job-Anmeldung für Überprüfung: ' + jobData.jobTitle,
      html: `
        <h1>Neue Job-Anmeldung für Überprüfung</h1>
        <p>Eine neue Job-Anmeldung wurde eingereicht:</p>
        <h2>Job Details:</h2>
        <ul>
          <li><strong>Titel:</strong> ${jobData.jobTitle}</li>
          <li><strong>Unternehmen:</strong> ${jobData.company}</li>
          <li><strong>Standort:</strong> ${jobData.location}</li>
          <li><strong>Typ:</strong> ${jobData.jobType}</li>
          <li><strong>Salar:</strong> ${jobData.salary || 'Not specified'}</li>
          <li><strong>Apply Link:</strong> ${jobData.applyLink}</li>
          <li><strong>Kontakt E-Mail:</strong> ${jobData.contactEmail}</li>
        </ul>
        <h2>Job Beschreibung:</h2>
        <p>${jobData.description}</p>
        <h2>Unternehmensbeschreibung:</h2>
        <p>${jobData.companyDescription}</p>
        <h2>Anforderungen:</h2>
        <p>${jobData.requirements}</p>
        <h2>Vorteile:</h2>
        <p>${jobData.benefits}</p>
        <p>Bitte überprüfe diese Anmeldung und genehmige oder lehne sie in der Admin-Oberfläche ab.</p>
      `
    })

    return { success: true }
  } catch (error) {
    console.error('Error posting job:', error)
    return { success: false, error: 'An unexpected error occurred. Please try again.' }
  }
}

