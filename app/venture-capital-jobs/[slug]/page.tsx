import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JobDetail } from '@/components/job-detail'
import { jobs, Job } from '@/data/vc-jobs'

interface JobParams {
  params: {
    slug: string
  }
}

async function getJob(id: string): Promise<Job | null> {
  return jobs.find(job => job.id === id) || null
}

export async function generateMetadata({ params }: JobParams): Promise<Metadata> {
  const job = await getJob(params.slug)

  if (!job) {
    return {
      title: 'Job nicht gefunden',
      description: 'Die angeforderte Stellenanzeige wurde nicht gefunden.',
    }
  }

  return {
    title: `${job.title} bei ${job.company} | KapitalKraft`,
    description: `Bewerben Sie sich jetzt als ${job.title} bei ${job.company} in ${job.location}. Startdatum: ${new Date(job.startDate).toLocaleDateString('de-DE')}. Gehalt: ${job.salary}.`,
    openGraph: {
      title: `${job.title} bei ${job.company} | KapitalKraft`,
      description: `Bewerben Sie sich jetzt als ${job.title} bei ${job.company} in ${job.location}. Startdatum: ${new Date(job.startDate).toLocaleDateString('de-DE')}. Gehalt: ${job.salary}.`,
      images: [{ url: `https://kapitalkraft.de${job.logo}`, width: 800, height: 600, alt: `${job.company} Logo` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} bei ${job.company} | KapitalKraft`,
      description: `Bewerben Sie sich jetzt als ${job.title} bei ${job.company} in ${job.location}. Startdatum: ${new Date(job.startDate).toLocaleDateString('de-DE')}. Gehalt: ${job.salary}.`,
      images: [`https://kapitalkraft.de${job.logo}`],
    },
  }
}

export default async function JobPage({ params }: JobParams) {
  const job = await getJob(params.slug)

  if (!job) {
    notFound()
  }

  return <JobDetail job={job} />
}

