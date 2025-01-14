import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Top VC-Firmen in Deutschland | KapitalKraft',
  description: 'Entdecken Sie die führenden Venture-Capital-Firmen in Deutschland. Finden Sie Ihr nächstes Karriereziel bei den besten VC-Unternehmen.',
}

// This would typically come from a database or API, filtered for top firms
const topVCFirms = [
  {
    id: "htgf",
    name: "High-Tech Gründerfonds",
    logo: "/logos/htgf.png",
    description: "Einer der aktivsten Seed-Investoren in Europa",
    location: "Bonn, Deutschland",
    investmentFocus: ["Software", "Medizintechnik", "Chemie", "Industrielle Technologie"],
  },
  {
    id: "earlybird",
    name: "Earlybird Venture Capital",
    logo: "/logos/earlybird.png",
    description: "Führender Venture-Capital-Investor für Technologie-Innovatoren in Europa",
    location: "Berlin, München, Deutschland",
    investmentFocus: ["Enterprise Software", "FinTech", "AI", "Mobility"],
  },
  {
    id: "projecta",
    name: "Project A Ventures",
    logo: "/logos/projecta.png",
    description: "Venture-Capital-Firma mit starkem operativen Fokus",
    location: "Berlin, Deutschland",
    investmentFocus: ["Digital Platforms", "SaaS", "E-Commerce", "Infrastructure"],
  },
]

export default function TopVCFirmsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-serif">
          Top VC-Firmen in Deutschland
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Entdecken Sie die führenden Venture-Capital-Firmen in Deutschland. 
          Diese Top-VC-Unternehmen sind bekannt für ihre erfolgreichen Investments und ihren Einfluss im Startup-Ökosystem.
        </p>

        <div className="space-y-12">
          {topVCFirms.map((firm) => (
            <div key={firm.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                <img src={firm.logo} alt={`${firm.name} logo`} className="w-24 h-24 rounded-full" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{firm.name}</h2>
                  <p className="text-gray-600">{firm.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {firm.location}
                </div>
                <div>
                  <span className="font-semibold">Investitionsfokus:</span> {firm.investmentFocus.join(', ')}
                </div>
              </div>
              <div className="mt-6">
                <Link href={`/company/${firm.id}`} className="text-primary hover:text-primary/80 font-semibold">
                  Mehr erfahren &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

