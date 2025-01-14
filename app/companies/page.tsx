'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Pagination } from '@/components/pagination'
import Link from 'next/link'
import Image from 'next/image'
import { vcCompanies } from '@/data/vc-companies'

export default function CompaniesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const companiesPerPage = 4
  const indexOfLastCompany = currentPage * companiesPerPage
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage
  const currentCompanies = vcCompanies.slice(indexOfFirstCompany, indexOfLastCompany)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-serif">
          Alle VC-Unternehmen
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Entdecken Sie führende Venture-Capital-Firmen in Deutschland. 
          Finden Sie Ihr nächstes Karriereziel im VC-Ökosystem.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {currentCompanies.map((company) => (
            <Link key={company.id} href={`/company/${company.id}`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Image src={company.logo} alt={`${company.name} logo`} width={64} height={64} className="rounded-full" />
                <h2 className="text-xl font-semibold text-gray-900">{company.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <div className="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {company.location}
              </div>
            </Link>
          ))}
        </div>

        <Pagination
          itemsPerPage={companiesPerPage}
          totalItems={vcCompanies.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </main>
  )
}

