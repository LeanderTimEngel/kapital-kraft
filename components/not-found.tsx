import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Navbar } from '@/components/navbar'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#1C1E21]">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#252729] rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">😪</span>
                Diese Seite existiert nicht mehr
              </h1>
              <p className="text-white/60 text-lg">
                Es ist wahrscheinlich, dass diese Job-Anzeige abgelaufen ist. Aber keine Sorge.
                <br />
                Wir fügen mehr Jobs jeden Woche hinzu.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <Link href="/venture-capital-jobs">
                <Button className="bg-[#252729] border border-white/10 text-white hover:bg-white/10">
                  Alle Jobs ansehen
                </Button>
              </Link>
            </div>

            <div className="border-t border-white/10 pt-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Abonniere unseren Newsletter und verpasse keinen Job
                </h2>
              </div>

              <form className="max-w-xl mx-auto space-y-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Dein Vorname"
                    className="bg-[#1C1E21] border-white/10 text-white placeholder:text-white/40"
                  />
                  <Input
                    type="email"
                    placeholder="Deine E-Mail Adresse"
                    className="bg-[#1C1E21] border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <Button className="w-full bg-[#FFEB0A] text-black hover:bg-[#FFEB0A]/90">
                  Jetzt abonnieren
                </Button>
              </form>

              <p className="text-center text-white/40 text-sm mb-8">
                Durch das Abonnieren erklärst du dich mit unseren{' '}
                <Link href="/terms" className="text-[#FFEB0A] hover:underline">
                  Nutzungsbedingungen
                </Link>
                und unseren Datenschutzbestimmungen einverstanden.
              </p>

              <div className="text-center text-white/40 text-sm mb-8">
                Verwendet von Studenten aus 🇩🇪 und vielen mehr
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                {['TUM', 'LMU', 'WHU', 'RWTH', 'TU Berlin'].map((university) => (
                  <div
                    key={university}
                    className="w-32 h-12 bg-white/5 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white/20 text-sm font-medium">
                      {university}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

