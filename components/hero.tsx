import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 animate-fade-in">
            Ihre Zukunft im deutschen Venture Capital
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-fade-in-delay">
            Verbinden Sie sich mit führenden VC-Firmen in Deutschland. Finden Sie Ihre ideale Position im dynamischen deutschen Startup-Ökosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link href="/venture-capital-jobs" className="w-full sm:w-auto">
              <Button className="w-full text-lg px-6 py-3 bg-primary text-white hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                VC-Jobs entdecken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/post-a-job" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full text-lg px-6 py-3 border-primary text-primary hover:bg-primary hover:text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                Job ausschreiben
              </Button>
            </Link>
          </div>
          <div className="mt-8 sm:mt-12 space-y-4 animate-fade-in-delay-2">
            <p className="font-body text-sm text-gray-500 px-4">
              Vertraut von über 5.000+ Innovatoren, die ihre perfekte VC-Rolle in Deutschland gefunden haben
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">200+</p>
                <p className="text-xs sm:text-sm text-gray-600">Deutsche VC-Firmen</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">1.000+</p>
                <p className="text-xs sm:text-sm text-gray-600">Startups</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">92%</p>
                <p className="text-xs sm:text-sm text-gray-600">Vermittlungsrate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

