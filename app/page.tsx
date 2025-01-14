import { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { FeaturedJobs } from '@/components/featured-jobs'
import { Newsletter } from '@/components/newsletter'
import { SocialProof } from '@/components/social-proof'
import { Testimonials } from '@/components/testimonials'
import { FeatureHighlight } from '@/components/feature-highlight'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'KapitalKraft - KI-gestützte VC-Jobvermittlung für den deutschen Markt',
  description: 'Finden Sie Ihren Traumjob im deutschen Venture Capital und Startup-Ökosystem mit KI-gestützter Jobvermittlung. Vernetzen Sie sich mit führenden deutschen VC-Firmen und innovativen Startups.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KapitalKraft",
    "url": "https://kapitalkraft.de",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kapitalkraft.de/venture-capital-jobs?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Hero />
        <FeatureHighlight />
        <SocialProof />
        <FeaturedJobs />
        <Testimonials />
        <Newsletter />
      </div>
    </>
  )
}

