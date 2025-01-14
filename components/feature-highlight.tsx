import { Cpu, Briefcase, Zap } from 'lucide-react'

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'KI-gestützte Vermittlung',
    description: 'Unsere fortschrittlichen Algorithmen stellen sicher, dass Sie die perfekte Stelle für Ihre Fähigkeiten und Ambitionen finden.'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Exklusive VC-Möglichkeiten',
    description: 'Zugang zu einer kuratierten Liste von Top-Tier-Venture-Capital- und Startup-Positionen.'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Beschleunigen Sie Ihre Karriere',
    description: 'Beschleunigen Sie Ihren Weg in der VC-Welt mit personalisierten Jobempfehlungen.'
  }
]

export function FeatureHighlight() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

