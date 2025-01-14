import { Navbar } from '@/components/navbar'

export default function DatenschutzPage() {
 return (
   <main className="min-h-screen bg-white">
     <Navbar />
     <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
       <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-serif">Datenschutzerklärung</h1>
       <div className="max-w-3xl mx-auto prose prose-gray">
         <p>Stand: [Aktuelles Datum]</p>
         
         <h2>1. Datenschutz auf einen Blick</h2>
         <h3>Allgemeine Hinweise</h3>
         <p>
           Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
         </p>

         <h3>Datenerfassung auf dieser Website</h3>
         <p>
           Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
         </p>

         <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
         <h3>Datenschutz</h3>
         <p>
           Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
         </p>

         <h3>Hinweis zur verantwortlichen Stelle</h3>
         <p>
           Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
         </p>
         <p>
           [Name des Unternehmens]<br />
           [Name des Verantwortlichen]<br />
           [Straße und Hausnummer]<br />
           [Postleitzahl und Ort]
         </p>
         <p>
           Telefon: [Telefonnummer]<br />
           E-Mail: [E-Mail-Adresse]
         </p>

         <h2>3. Datenerfassung auf unserer Website</h2>
         <h3>Cookies</h3>
         <p>
           Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
         </p>

         <h3>Server-Log-Dateien</h3>
         <p>
           Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
         </p>

         <h2>4. Analyse-Tools und Werbung</h2>
         <h3>Google Analytics</h3>
         <p>
           Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
         </p>

         <h2>5. Plugins und Tools</h2>
         <h3>YouTube</h3>
         <p>
           Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
         </p>

         <h2>6. Ihre Rechte</h2>
         <p>
           Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
         </p>
       </div>
     </div>
   </main>
 )
}

