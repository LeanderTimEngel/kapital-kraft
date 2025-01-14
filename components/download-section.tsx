import { Check } from 'lucide-react'

export function DownloadSection() {
 return (
   <div className="text-gray-900 space-y-6">
     <div className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full text-sm mb-2">
       Kostenloser Download
     </div>
     
     <h2 className="text-3xl md:text-4xl font-bold leading-tight font-serif mt-0">
       Holen Sie sich Ihre VC-Lebenslauf Vorlage
     </h2>
     
     <p className="text-lg text-gray-600 max-w-lg">
       Sparen Sie Zeit und nutzen Sie unsere Vorlage, um Ihren Traumjob im Venture Capital zu landen!
     </p>
     
     <div className="space-y-4">
       <p className="text-sm text-gray-500">
         Verfügbar im Word-Format. Kostenlos für den persönlichen Gebrauch.
       </p>
     </div>
     
     <div className="pt-8 border-t border-gray-200">
       <h3 className="text-xl font-semibold mb-4 font-serif">Was enthalten ist:</h3>
       <ul className="space-y-3 text-gray-600">
         <li className="flex items-center">
           <Check className="h-5 w-5 text-primary mr-3" />
           Professionelle Lebenslauf-Vorlage, optimiert für VC-Bewerbungen
         </li>
         <li className="flex items-center">
           <Check className="h-5 w-5 text-primary mr-3" />
           Beispielinhalt und Formatierungsrichtlinien
         </li>
         <li className="flex items-center">
           <Check className="h-5 w-5 text-primary mr-3" />
           ATS-freundliches Design
         </li>
         <li className="flex items-center">
           <Check className="h-5 w-5 text-primary mr-3" />
           Einfach in Microsoft Word anpassbar
         </li>
       </ul>
     </div>
   </div>
 )
}

