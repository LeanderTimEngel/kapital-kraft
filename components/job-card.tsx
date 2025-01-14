import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MapPin, Briefcase, DollarSign, Clock, Calendar } from 'lucide-react'

interface JobCardProps {
  id: string
  company: string
  title: string
  location: string
  type: string
  logo: string
  salary: string
  posted: string
  startDate: string
}

export function JobCard({ id, company, title, location, type, logo, salary, posted, startDate }: JobCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt={`${company} logo`} width={48} height={48} className="rounded-full" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <Link href={`/company/${id}`} className="text-primary hover:text-primary/80">
              <span className="text-gray-700">{company}</span>
            </Link>
          </div>
        </div>
        <Link href={`/venture-capital-jobs/${id}`} aria-label={`Details für ${title} bei ${company} ansehen`}>
          <Button variant="outline" className="w-full md:w-auto mt-4 md:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Job ansehen
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-4 text-sm text-gray-600">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" aria-hidden="true" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center">
          <Briefcase className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" aria-hidden="true" />
          <span className="truncate">{type}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" aria-hidden="true" />
          <span className="truncate">{salary}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" aria-hidden="true" />
          <span className="truncate">Veröffentlicht am {new Date(posted).toLocaleDateString('de-DE')}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" aria-hidden="true" />
          <span className="truncate">Start: {new Date(startDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
      <div itemScope itemType="https://schema.org/JobPosting" className="hidden">
        <meta itemProp="title" content={title} />
        <meta itemProp="description" content={`${title} bei ${company} in ${location}`} />
        <meta itemProp="datePosted" content={posted} />
        <meta itemProp="validThrough" content={startDate} />
        <meta itemProp="employmentType" content={type} />
        <div itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={company} />
          <meta itemProp="logo" content={logo} />
        </div>
        <div itemProp="jobLocation" itemScope itemType="https://schema.org/Place">
          <meta itemProp="address" content={location} />
        </div>
        <div itemProp="baseSalary" itemScope itemType="https://schema.org/MonetaryAmount">
          <meta itemProp="currency" content="EUR" />
          <meta itemProp="value" content={salary} />
        </div>
      </div>
    </div>
  )
}

