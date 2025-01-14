'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Globe, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { JobCard } from '@/components/job-card'
import { VCCompany } from '@/data/vc-companies'
import { Job } from '@/data/vc-jobs'

interface CompanyProfileProps {
  company: VCCompany
  companyJobs: Job[]
}

export function CompanyProfile({ company, companyJobs }: CompanyProfileProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Link 
          href="/venture-capital-jobs" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zurück zur Jobübersicht
        </Link>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <img src={company.logo || "/placeholder.svg"} alt={`${company.name} logo`} className="w-32 h-32 rounded-full" />
            <div>
              <h1 className="font-serif text-3xl font-semibold mb-2">{company.name}</h1>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                {company.location}
              </div>
              <div className="flex space-x-4">
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Globe className="h-5 w-5" />
                </a>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={company.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">Über {company.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{company.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-semibold">Gegründet:</span> {company.founded}
              </div>
              <div>
                <span className="font-semibold">Teamgröße:</span> {company.teamSize}
              </div>
              <div>
                <span className="font-semibold">Portfolio:</span> {company.portfolioSize} Unternehmen
              </div>
              <div>
                <span className="font-semibold">Investitionsfokus:</span> {company.investmentFocus?.join(', ')}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-4">Offene Stellen bei {company.name}</h2>
            {companyJobs.length > 0 ? (
              <div className="space-y-4">
                {companyJobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">Aktuell sind keine offenen Stellen bei {company.name} verfügbar.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

