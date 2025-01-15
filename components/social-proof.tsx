import Image from 'next/image'

const stats = [
  { value: '5.000+', label: 'Vermittelte Positionen' },
  { value: '200+', label: 'Deutsche VC-Firmen' },
  { value: '1.000+', label: 'Startup-Jobs' },
  { value: '92%', label: 'Vermittlungserfolg' },
]

const universities = [
  { name: 'Technische Universität München', logo: '/logos/tum.png' },
  { name: 'Humboldt-Universität zu Berlin', logo: '/logos/hu.png' },
  { name: 'WHU - Otto Beisheim School of Management', logo: '/logos/whu.png' },
  { name: 'RWTH Aachen', logo: '/logos/rwth.png' },
  { name: 'Universität Mannheim', logo: '/logos/uni-mannheim.png' },
  { name: 'Frankfurt School of Finance & Management', logo: '/logos/fs.png' },
]

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
          Talente von Deutschlands Top-Universitäten
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          {universities.map((university) => (
            <div key={university.name} className="flex items-center justify-center">
              <Image
                src={university.logo}
                alt={`${university.name} logo`}
                width={200}
                height={70}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Schließe dich erfolgreichen VC-Profis an, die ihre Karriere durch FundKarriere gestartet haben
          </p>
          <p className="text-sm text-gray-500 mt-2">
            *Basierend auf unseren Vermittlungsdaten und Nutzerbefragungen von 2024
          </p>
        </div>
      </div>
    </section>
  )
}

