import Image from 'next/image'

const companies = [
  { name: "Earlybird", logo: "/logos/earlybird.jpeg" },
  { name: "Lakestar", logo: "/logos/lakestar.jpeg" },
  { name: "Project A", logo: "/logos/projecta.jpeg" },
  { name: "Holtzbrinck Ventures", logo: "/logos/holtzbrinck.jpeg" },
  { name: "Speedinvest", logo: "/logos/speedinvest.jpeg" },
  { name: "Cherry Ventures", logo: "/logos/cherry.jpeg" },
]

export function FeaturedCompanies() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Featured VCs</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
        {companies.map((company) => (
          <div key={company.name} className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-md w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              <Image src={company.logo} alt={`${company.name} logo`} width={64} height={64} />
            </div>
            <span className="mt-2 text-xs md:text-sm text-gray-600 text-center">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

