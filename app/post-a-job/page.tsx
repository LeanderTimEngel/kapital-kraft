'use client'

import { Navbar } from '@/components/navbar'
import { PostJobForm } from '@/components/post-job-form'
import { Check } from 'lucide-react'

export default function PostAJobPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                Veröffentlichen Sie Ihre VC-Stelle, um Spitzentalente zu erreichen
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Vernetzen Sie sich mit Top-Kandidaten von führenden Institutionen und Technologieunternehmen. 
                Über 10.000+ qualifizierte Fachkräfte suchen aktiv nach VC-Möglichkeiten.
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
                <span className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  100K+ Monatliche Besucher
                </span>
                <span className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  500+ VC-Firmen vertrauen uns
                </span>
                <span className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  95% Besetzungsrate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits and Process Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              Warum Sie Ihre Stelle auf KapitalKraft veröffentlichen sollten
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Zielgerichtetes Publikum:</strong>
                  <span className="text-gray-600"> Erreichen Sie einen kuratierten Pool von Kandidaten, die speziell an VC- und Startup-Rollen interessiert sind.</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Qualifizierte Bewerber:</strong>
                  <span className="text-gray-600"> Unsere Plattform zieht hochkarätige Fachkräfte von Top-Universitäten und Technologieunternehmen an.</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Erhöhte Sichtbarkeit:</strong>
                  <span className="text-gray-600"> Ihre Stelle wird in unserem Newsletter und in den sozialen Medien für maximale Reichweite präsentiert.</span>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Effiziente Einstellung:</strong>
                  <span className="text-gray-600"> Unser KI-gestütztes Matching hilft Ihnen, die richtigen Kandidaten schneller zu finden.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              Unser Prüfungsprozess
            </h2>
            <p className="text-gray-600 mb-4">
              Um die Qualität und Relevanz der Stellenangebote auf unserer Plattform sicherzustellen, durchlaufen alle Einreichungen einen Prüfungsprozess:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-8">
              <li>Reichen Sie Ihr Stellenangebot über das untenstehende Formular ein.</li>
              <li>Unser Team prüft Ihre Einreichung innerhalb von 1-2 Werktagen.</li>
              <li>Bei Genehmigung wird Ihre Stelle auf unserer Plattform veröffentlicht und beworben.</li>
              <li>Sie erhalten eine E-Mail-Benachrichtigung, sobald Ihre Stelle live ist.</li>
            </ol>
            <p className="text-gray-600 mb-8">
              Dieser Prozess hilft uns, einen hohen Standard an Möglichkeiten für unsere Community aufrechtzuerhalten und stellt sicher, dass alle Angebote mit dem Fokus unserer Plattform auf Venture Capital und Startup-Rollen übereinstimmen.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-display">
                Veröffentlichen Sie Ihre Stelle
              </h2>
              <PostJobForm />
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 font-display">
              Vertraut von führenden VC-Firmen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['High-Tech Gründerfonds', 'Earlybird', 'Project A', 'Lakestar'].map((firm) => (
                <div 
                  key={firm} 
                  className="h-20 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-4"
                >
                  <span className="text-gray-400 font-medium">{firm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

