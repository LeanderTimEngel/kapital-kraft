import { Navbar } from '@/components/navbar'

export default function ImpressumPage() {
 return (
   <main className="min-h-screen bg-white">
     <Navbar />
     <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
       <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-serif">Impressum</h1>
       <div className="max-w-3xl mx-auto prose prose-gray">
         <h2>Angaben gemäß § 5 TMG</h2>
         <p>
           [Name des Unternehmens]<br />
           [Straße und Hausnummer]<br />
           [Postleitzahl und Ort]
         </p>

         <h2>Vertreten durch</h2>
         <p>
           [Name des Geschäftsführers oder Vorstands]
         </p>

         <h2>Kontakt</h2>
         <p>
           Telefon: [Telefonnummer]<br />
           E-Mail: [E-Mail-Adresse]
         </p>

         <h2>Registereintrag</h2>
         <p>
           Eintragung im Handelsregister.<br />
           Registergericht: [Name des Amtsgerichts]<br />
           Registernummer: [Handelsregisternummer]
         </p>

         <h2>Umsatzsteuer-ID</h2>
         <p>
           Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
           [Umsatzsteuer-ID]
         </p>

         <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
         <p>
           [Name des Verantwortlichen]<br />
           [Straße und Hausnummer]<br />
           [Postleitzahl und Ort]
         </p>

         <h2>Streitschlichtung</h2>
         <p>
           Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br />
           Unsere E-Mail-Adresse finden Sie oben im Impressum.
         </p>
         <p>
           Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
         </p>

         <h2>Haftung für Inhalte</h2>
         <p>
           Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
         </p>

         <h2>Haftung für Links</h2>
         <p>
           Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
         </p>

         <h2>Urheberrecht</h2>
         <p>
           Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
         </p>
       </div>
     </div>
   </main>
 )
}

