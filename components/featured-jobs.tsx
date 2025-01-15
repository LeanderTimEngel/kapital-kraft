import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const jobs = [
  { id: 1, title: "VC Analyst Praktikum", company: "High-Tech Gründerfonds", location: "Berlin", logo: "/logos/htgf.jpeg", type: "Praktikum", posted: "Gestern" },
  { id: 2, title: "Junior Investment Manager", company: "Earlybird Venture Capital", location: "München", logo: "/logos/earlybird.jpeg", type: "Vollzeit", posted: "Vor 3 Tagen" },
  { id: 3, title: "Werkstudent VC", company: "Project A Ventures", location: "Berlin", logo: "/logos/projecta.jpeg", type: "Teilzeit", posted: "Vor einer Woche" },
  { id: 4, title: "Associate", company: "Lakestar", location: "Zürich", logo: "/logos/lakestar.jpeg", type: "Vollzeit", posted: "Vor 2 Wochen" },
  { id: 5, title: "VC Analyst", company: "Speedinvest", location: "Berlin", logo: "/logos/speedinvest.jpeg", type: "Vollzeit", posted: "Vor 3 Wochen" },
  { id: 6, title: "Visiting Analyst", company: "Holtzbrinck Ventures", location: "München", logo: "/logos/holtzbrinck.jpeg", type: "Vollzeit", posted: "Vor 3 Wochen" },
]

export function FeaturedJobs() {
  return (
    <div className="py-16 md:py-24 bg-gray-50" id="featured-jobs">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Aktuelle VC-Positionen in Deutschland</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-primary hover:bg-blue-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 mr-4 rounded-full object-cover" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1 text-gray-900">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {job.type}
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.posted}
                  </span>
                </div>
              </div>
              <Link href={`/venture-capital-jobs/${job.id}`}>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  Job ansehen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/venture-capital-jobs">
            <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              Alle Jobs anzeigen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

