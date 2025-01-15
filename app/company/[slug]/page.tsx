import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CompanyProfile } from '@/components/company-profile'
import { vcCompanies, VCCompany } from '@/data/vc-companies'
import { jobs, Job } from '@/data/vc-jobs'

interface CompanyParams {
  params: {
    slug: string
  }
}

async function getCompany(slug: string): Promise<VCCompany | null> {
  return vcCompanies.find(company => company.id === slug) || null
}

async function getCompanyJobs(companyName: string): Promise<Job[]> {
  return jobs.filter(job => job.company === companyName)
}

export async function generateMetadata({ params }: CompanyParams): Promise<Metadata> {
  const company = await getCompany(params.slug)

  if (!company) {
    return {
      title: 'Unternehmen nicht gefunden',
      description: 'Das angeforderte Unternehmensprofil wurde nicht gefunden.',
    }
  }

  return {
    title: `${company.name} | FundKarriere`,
    description: `Erfahren Sie mehr über ${company.name}, ein führendes Venture-Capital-Unternehmen in Deutschland. Gegründet ${company.founded}, mit Fokus auf ${company.investmentFocus?.join(', ')}.`,
    openGraph: {
      title: `${company.name} | FundKarriere`,
      description: `Erfahren Sie mehr über ${company.name}, ein führendes Venture-Capital-Unternehmen in Deutschland. Gegründet ${company.founded}, mit Fokus auf ${company.investmentFocus?.join(', ')}.`,
      images: [{ url: `https://fundkarriere.de${company.logo}`, width: 800, height: 600, alt: `${company.name} Logo` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${company.name} | FundKarriere`,
      description: `Erfahren Sie mehr über ${company.name}, ein führendes Venture-Capital-Unternehmen in Deutschland. Gegründet ${company.founded}, mit Fokus auf ${company.investmentFocus?.join(', ')}.`,
      images: [`https://fundkarriere.de${company.logo}`],
    },
  }
}

export default async function CompanyPage({ params }: CompanyParams) {
  const company = await getCompany(params.slug)
  const companyJobs = company ? await getCompanyJobs(company.name) : []

  if (!company) {
    notFound()
  }

  return <CompanyProfile company={company} companyJobs={companyJobs} />
}

