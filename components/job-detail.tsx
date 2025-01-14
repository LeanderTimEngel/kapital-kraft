'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Briefcase, Calendar, Mail, Share2, DollarSign, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { toast } from './use-toast'
import { Job } from '@/data/vc-jobs'

interface JobDetailProps {
  job: Job
}

export function JobDetail({ job }: JobDetailProps) {
  const [isApplying, setIsApplying] = useState(false)

  const handleApply = () => {
    setIsApplying(true)
    window.open(job.applyLink, '_blank')
    setIsApplying(false)
  }

  const handleEmail = () => {
    window.location.href = `mailto:karriere@${job.company.toLowerCase().replace(' ', '')}.de?subject=Bewerbung für ${job.title} Position`
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} bei ${job.company}`,
        text: `Schau dir diese Stellenanzeige an: ${job.title} bei ${job.company}`,
        url: window.location.href,
      }).then(() => {
        toast({
          title: "Erfolgreich geteilt",
          description: "Die Stellenanzeige wurde erfolgreich geteilt.",
        })
      }).catch((error) => {
        console.error('Fehler beim Teilen', error)
        toast({
          title: "Fehler beim Teilen",
          description: "Es gab einen Fehler beim Teilen der Stellenanzeige.",
          variant: "destructive",
        })
      })
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: "Link kopiert",
          description: "Der Link zur Stellenanzeige wurde in die Zwischenablage kopiert.",
        })
      }).catch((error) => {
        console.error('Fehler beim Kopieren in die Zwischenablage', error)
        toast({
          title: "Fehler beim Kopieren des Links",
          description: "Es gab einen Fehler beim Kopieren des Links zur Stellenanzeige.",
          variant: "destructive",
        })
      })
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-16 pb-16">
        <Link 
          href="/venture-capital-jobs" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zurück zu allen Jobs
        </Link>

        <div className="grid md:grid-cols-[2fr,1fr] gap-12">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex items-center space-x-4 mb-8">
              <img src={job.logo || "/placeholder.svg"} alt={`${job.company} logo`} className="w-16 h-16 rounded-full" />
              <div>
                <h1 className="font-serif text-3xl font-semibold">{job.title}</h1>
                <h2 className="text-xl text-gray-600">{job.company}</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary" />
                {job.type}
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-primary" />
                {job.salary}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Veröffentlicht am {new Date(job.posted).toLocaleDateString('de-DE')}
              </div>
              <div className="flex items-center col-span-2">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Startdatum: {new Date(job.startDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>

            <section className="mb-12">
              <h3 className="font-serif text-2xl font-semibold mb-4">Stellenbeschreibung</h3>
              <p className="text-gray-600 leading-relaxed">
                Als {job.title} bei {job.company} haben Sie die einzigartige Gelegenheit, an der Spitze der Innovation zu arbeiten und die nächste Generation von Technologieunternehmen zu unterstützen. In dieser Rolle werden Sie eng mit unserem Investment-Team zusammenarbeiten, um vielversprechende Startups zu identifizieren, zu bewerten und zu fördern.
              </p>
            </section>

            <section className="mb-12">
              <h3 className="font-serif text-2xl font-semibold mb-4">Ihre Aufgaben</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Durchführung von Marktrecherchen und Analyse von Branchentrends</li>
                <li>Bewertung potenzieller Investitionsmöglichkeiten</li>
                <li>Unterstützung bei Due-Diligence-Prozessen</li>
                <li>Betreuung von Portfolio-Unternehmen bei strategischen Initiativen</li>
                <li>Erstellung von Investment-Memos und Präsentationen</li>
              </ul>
            </section>

            <section>
              <h3 className="font-serif text-2xl font-semibold mb-4">Ihr Profil</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Starker akademischer Hintergrund in Wirtschaft, Finanzen oder einem verwandten Bereich</li>
                <li>Ausgezeichnete analytische und Problemlösungsfähigkeiten</li>
                <li>Großes Interesse an Technologie und Innovation</li>
                <li>Hervorragende Kommunikations- und zwischenmenschliche Fähigkeiten</li>
                <li>Fähigkeit, in einem schnelllebigen, dynamischen Umfeld zu arbeiten</li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-8">
              <Button className="w-full btn-primary mb-6 text-lg" onClick={handleApply} disabled={isApplying}>
                {isApplying ? 'Wird geöffnet...' : 'Jetzt bewerben'}
              </Button>

              {job.salary && (
                <div className="text-gray-600 text-sm text-center mb-8">
                  Gehaltsbereich: {job.salary}
                </div>
              )}

              <div className="text-gray-600 text-sm text-center mb-8">
                👋 Vergessen Sie nicht, KapitalKraft in Ihrer Bewerbung zu erwähnen!
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="border-gray-300 text-gray-600 hover:bg-gray-100" onClick={handleEmail}>
                  <Mail className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-300 text-gray-600 hover:bg-gray-100" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="font-serif text-xl font-semibold mb-4">Über {job.company}</h3>
              <p className="text-gray-600 leading-relaxed">
                {job.company} ist ein führendes Venture-Capital-Unternehmen, das in bahnbrechende Lösungen für die drängendsten Herausforderungen der Welt investiert. Unser Fokus liegt auf Unternehmen in der Früh- bis Wachstumsphase, die Spitzentechnologien entwickeln und eine neue Ära in verschiedenen Sektoren einläuten werden.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="font-serif text-xl font-semibold mb-4">Warum Sie sich bewerben sollten</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Arbeiten Sie mit innovativen Startups und Unternehmern zusammen</li>
                <li>Entwickeln Sie Ihre Fähigkeiten in einem dynamischen Umfeld</li>
                <li>Bauen Sie ein starkes Netzwerk in der Venture-Capital- und Startup-Szene auf</li>
                <li>Gestalten Sie aktiv die Zukunft der Technologie und Wirtschaft mit</li>
                <li>Attraktive Vergütung und Entwicklungsmöglichkeiten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

