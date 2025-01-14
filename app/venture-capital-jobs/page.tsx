'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { JobSearch } from '@/components/job-search'
import { JobCard } from '@/components/job-card'
import { Button } from '@/components/ui/button'
import { JobFilters } from '@/components/job-filters'
import { Pagination } from '@/components/pagination'
import { FeaturedCompanies } from '@/components/featured-companies'
import { Newsletter } from '@/components/newsletter'
import Script from 'next/script'
import { jobs } from '@/data/vc-jobs'

export default function VCJobs() {
  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    jobType: [] as string[],
    location: [] as string[],
    startMonth: '' as string,
    startYear: '' as string,
    city: '' as string,
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('relevanz')
  const jobsPerPage = 6

  const cities = Array.from(new Set(jobs.map(job => job.location.split(', ')[0])))

  useEffect(() => {
    let result = jobs.filter(job => {
      const matchesType = filters.jobType.length === 0 || filters.jobType.includes(job.type)
      const matchesLocation = filters.location.length === 0 || filters.location.includes(job.location.split(', ')[1])
      const jobStartDate = new Date(job.startDate)
      const matchesStartDate = (!filters.startMonth || jobStartDate.getMonth() + 1 === parseInt(filters.startMonth)) &&
                               (!filters.startYear || jobStartDate.getFullYear() === parseInt(filters.startYear))
      const matchesCity = !filters.city || job.location.split(', ')[0] === filters.city
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.location.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesType && matchesLocation && matchesStartDate && matchesCity && matchesSearch
    })

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'neueste') {
        return new Date(b.posted).getTime() - new Date(a.posted).getTime()
      } else if (sortBy === 'bestbezahlt') {
        const getSalary = (job: any) => parseInt(job.salary.replace(/[^0-9]/g, ''))
        return getSalary(b) - getSalary(a)
      } else if (sortBy === 'startdatum') {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      }
      return 0 // Default to relevance (no sorting)
    })

    setFilteredJobs(result)
    setCurrentPage(1)
  }, [filters, searchTerm, sortBy])

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": currentJobs.map((job, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "JobPosting",
        "title": job.title,
        "description": `${job.title} Position bei ${job.company}`,
        "datePosted": job.posted,
        "validThrough": job.startDate,
        "hiringOrganization": {
          "@type": "Organization",
          "name": job.company,
          "logo": `https://nexusvc.de${job.logo}`
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": job.location.split(', ')[0],
            "addressCountry": job.location.split(', ')[1]
          }
        },
        "employmentType": job.type,
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": parseInt(job.salary.split(' - ')[0].replace(/[^0-9]/g, '')),
            "maxValue": parseInt(job.salary.split(' - ')[1].replace(/[^0-9]/g, '')),
            "unitText": "YEAR"
          }
        }
      }
    }))
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                Venture Capital Jobs in Deutschland
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Entdecken Sie Ihre Traumkarriere in der deutschen Venture-Capital-Branche. 
                Von Investmentanalysten bis zu Partnern - finden Sie die perfekte Position bei führenden VC-Firmen und innovativen Startups.
              </p>
              <JobSearch onSearch={setSearchTerm} />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <JobFilters onFilterChange={setFilters} cities={cities} />
              </div>
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                  <h2 className="text-2xl font-semibold text-gray-900 font-display">Verfügbare Positionen</h2>
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <span className="text-gray-700 whitespace-nowrap">Sortieren nach:</span>
                    <select 
                      className="border-gray-300 rounded-md text-gray-700 text-sm bg-white p-2 flex-grow sm:flex-grow-0"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="relevanz">Relevanz</option>
                      <option value="neueste">Neueste</option>
                      <option value="bestbezahlt">Bestbezahlt</option>
                      <option value="startdatum">Startdatum</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  {currentJobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                  ))}
                </div>

                <div className="mt-12">
                  <Pagination
                    itemsPerPage={jobsPerPage}
                    totalItems={filteredJobs.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>

            <section className="mt-16 bg-gray-50 py-12 rounded-lg">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Warum eine Karriere im Venture Capital?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Innovationen fördern</h3>
                    <p>Arbeiten Sie mit den innovativsten Startups Deutschlands und gestalten Sie die Zukunft der Technologie und Wirtschaft aktiv mit.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Netzwerk aufbauen</h3>
                    <p>Knüpfen Sie Kontakte zu führenden Unternehmern, Investoren und Branchenexperten in einem dynamischen Umfeld.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Karrierewachstum</h3>
                    <p>Entwickeln Sie sich vom Analysten zum Partner und gestalten Sie Ihre Karriere in einer der spannendsten Branchen Deutschlands.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-16">
              <FeaturedCompanies />
            </div>

            <div className="mt-16">
              <Newsletter />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

