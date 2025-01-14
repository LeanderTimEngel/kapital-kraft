import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SocialIcons } from '@/components/social-icons'
import { Logo } from '@/components/logo'

export function Footer() {
 return (
   <footer className="bg-gray-900 text-white">
     <div className="container mx-auto px-4 py-12">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <div className="space-y-4">
           <Link href="/" className="flex items-center space-x-2">
             <Logo className="w-8 h-8" />
             <span className="text-white font-serif text-2xl font-semibold">KapitalKraft</span>
           </Link>
           <p className="text-gray-400 text-sm">
             Die führende Jobbörse für Venture Capital und Startup-Karrieren.
           </p>
           <SocialIcons />
         </div>

         <div className="space-y-4">
           <h3 className="text-white font-semibold mb-2 font-serif">Schnellzugriff</h3>
           <ul className="space-y-2">
             <li><Link href="/venture-capital-jobs" className="text-gray-400 hover:text-white text-sm transition-colors">Jobs durchsuchen</Link></li>
             <li><Link href="/venture-capital-cv-template" className="text-gray-400 hover:text-white text-sm transition-colors">Lebenslauf-Vorlage</Link></li>
             <li><Link href="/post-a-job" className="text-gray-400 hover:text-white text-sm transition-colors">Job veröffentlichen</Link></li>
           </ul>
         </div>

         <div className="space-y-4">
           <h3 className="text-white font-semibold mb-2 font-serif">Unternehmen</h3>
           <ul className="space-y-2">
             <li><Link href="/companies" className="text-gray-400 hover:text-white text-sm transition-colors">Alle Unternehmen</Link></li>
             <li><Link href="/companies/top-vc-firms" className="text-gray-400 hover:text-white text-sm transition-colors">Top VC-Firmen</Link></li>
           </ul>
         </div>

         <div className="space-y-4">
           <h3 className="text-white font-semibold mb-2 font-serif">Newsletter</h3>
           <form className="space-y-2">
             <Input
               type="email"
               placeholder="Ihre E-Mail-Adresse"
               className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:ring-primary focus:border-primary w-full"
             />
             <Button type="submit" className="bg-primary text-white hover:bg-primary/90 w-full">
               Abonnieren
             </Button>
           </form>
         </div>
       </div>

       <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col items-center">
         <p className="text-gray-400 text-sm text-center">
           © {new Date().getFullYear()} KapitalKraft. Alle Rechte vorbehalten.
         </p>
         <div className="flex items-center space-x-4 mt-4">
           <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">Über uns</Link>
           <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Kontakt</Link>
           <Link href="/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors">Datenschutz</Link>
           <Link href="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">Impressum</Link>
         </div>
       </div>
     </div>
   </footer>
 )
}

