import { Navbar } from '@/components/navbar'
import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-serif">Über FundKarriere</h1>
        <div className="max-w-3xl mx-auto">
          <Image
            src="/images/team.jpg"
            alt="FundKarriere Team"
            width={800}
            height={400}
            className="rounded-lg shadow-md mb-8"
          />
          <div className="space-y-6 text-gray-700">
            <p>
              FundKarriere ist die führende Jobbörse, die Top-Talente mit spannenden Möglichkeiten im Venture-Capital- und Startup-Ökosystem verbindet. Gegründet im Jahr 2023, ist es unsere Mission, die Lücke zwischen ambitionierten Fachkräften und innovativen Unternehmen zu schließen, die die Zukunft gestalten.
            </p>
            <p>
              Unsere Plattform dient als Drehscheibe für Jobsuchende, die in die Venture-Capital-Branche einsteigen oder ihre Karriere dort vorantreiben möchten, sowie für VC-Firmen und Startups, die außergewöhnliche Talente suchen. Wir sind stolz darauf, hochwertige Stellenangebote zu kuratieren und wertvolle Ressourcen bereitzustellen, um Kandidaten in dieser wettbewerbsintensiven Branche zum Erfolg zu verhelfen.
            </p>
            <p>
              Bei FundKarriere glauben wir an die Kraft der Innovation und den Einfluss, den die richtigen Talente auf aufstrebende Unternehmen haben können. Unser Team widmet sich der Förderung von Verbindungen, die Wachstum und Erfolg im Venture-Capital-Ökosystem vorantreiben.
            </p>
            <p>
              Ob Sie ein Hochschulabsolvent auf der Suche nach Ihrer ersten Rolle im VC-Bereich sind, eine erfahrene Fachkraft, die neue Herausforderungen sucht, oder eine Firma, die ihr Team erweitern möchte - KapitalKraft ist hier, um Ihnen bei der Navigation durch die aufregende Welt der Venture-Capital-Karrieren zu helfen.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

