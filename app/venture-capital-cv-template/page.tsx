'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { CVPreview } from '@/components/cv-preview'
import { DownloadSection } from '@/components/download-section'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export default function VCLebenslaufVorlagePage() {
 const [isDownloading, setIsDownloading] = useState(false)

 const handleDownload = async () => {
   setIsDownloading(true)
   try {
     const response = await fetch('/api/generate-cv')
     const blob = await response.blob()
     const url = window.URL.createObjectURL(blob)
     const a = document.createElement('a')
     a.style.display = 'none'
     a.href = url
     a.download = 'vc-lebenslauf-vorlage.docx'
     document.body.appendChild(a)
     a.click()
     window.URL.revokeObjectURL(url)
   } catch (error) {
     console.error('Fehler beim Herunterladen des Lebenslaufs:', error)
   } finally {
     setIsDownloading(false)
   }
 }

 return (
   <main className="min-h-screen bg-gray-50">
     <Navbar />
     <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
       <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-serif">Venture Capital Lebenslauf Vorlage</h1>
       <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
         <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
           <CVPreview />
         </div>
         <div className="space-y-8">
           <DownloadSection />
           <div className="flex justify-start">
             <Button
               onClick={handleDownload}
               disabled={isDownloading}
               className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
             >
               {isDownloading ? 'Wird heruntergeladen...' : (
                 <>
                   <Download className="mr-2 h-5 w-5" />
                   Lebenslauf-Vorlage herunterladen
                 </>
               )}
             </Button>
           </div>
         </div>
       </div>
     </div>
   </main>
 )
}

