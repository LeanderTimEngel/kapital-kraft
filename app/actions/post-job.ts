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
      from: 'KapitalKraft Jobs <leanderengel99@gmail.com>',
      to: jobData.contactEmail as string,
      subject: 'Job Posting Submission Confirmation: ' + jobData.jobTitle,
      html: `
        <h1>Thank you for submitting your job posting to VentureBoard!</h1>
        <p>Your job posting for "${jobData.jobTitle}" at ${jobData.company} has been received and is being reviewed.</p>
        <h2>Next Steps:</h2>
        <ol>
          <li>Our team will review your submission within 1-2 business days.</li>
          <li>If approved, your job will be published and promoted on our platform.</li>
          <li>You'll receive another email notification once your job is live.</li>
        </ol>
        <h2>Job Details:</h2>
        <ul>
          <li><strong>Title:</strong> ${jobData.jobTitle}</li>
          <li><strong>Company:</strong> ${jobData.company}</li>
          <li><strong>Location:</strong> ${jobData.location}</li>
          <li><strong>Type:</strong> ${jobData.jobType}</li>
        </ul>
        <p>If you have any questions or need to make changes to your submission, please contact our support team.</p>
      `
    })

    // Send notification to admin
    await resend.emails.send({
      from: 'KapitalKraft Jobs <leanderengel99@gmail.com>',
      to: 'team@resend.dev', // Replace with your admin email
      subject: 'New Job Posting for Review: ' + jobData.jobTitle,
      html: `
        <h1>New Job Posting Submitted</h1>
        <p>A new job has been submitted to VentureBoard for review:</p>
        <h2>Job Details:</h2>
        <ul>
          <li><strong>Title:</strong> ${jobData.jobTitle}</li>
          <li><strong>Company:</strong> ${jobData.company}</li>
          <li><strong>Location:</strong> ${jobData.location}</li>
          <li><strong>Type:</strong> ${jobData.jobType}</li>
          <li><strong>Salary:</strong> ${jobData.salary || 'Not specified'}</li>
          <li><strong>Apply Link:</strong> ${jobData.applyLink}</li>
          <li><strong>Contact Email:</strong> ${jobData.contactEmail}</li>
        </ul>
        <h2>Job Description:</h2>
        <p>${jobData.description}</p>
        <h2>Company Description:</h2>
        <p>${jobData.companyDescription}</p>
        <h2>Requirements:</h2>
        <p>${jobData.requirements}</p>
        <h2>Benefits:</h2>
        <p>${jobData.benefits}</p>
        <p>Please review this submission and approve or reject it in the admin panel.</p>
      `
    })

    return { success: true }
  } catch (error) {
    console.error('Error posting job:', error)
    return { success: false, error: 'An unexpected error occurred. Please try again.' }
  }
}

