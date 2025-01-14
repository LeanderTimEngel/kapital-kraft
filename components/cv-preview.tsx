export function CVPreview() {
 return (
   <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-gray-900 font-[system-ui] text-sm">
     <div className="mb-6">
       <h1 className="text-2xl font-bold mb-1">Max Mustermann</h1>
       <div className="text-gray-600">
         <p>Musterstraße 123</p>
         <p>10115 Berlin, Deutschland</p>
         <p>max.mustermann@email.de</p>
         <p>+49 123 456789</p>
       </div>
     </div>

     <section className="mb-6">
       <h2 className="text-lg font-bold mb-2 uppercase text-gray-800">Ausbildung</h2>
       <div className="mb-4">
         <div className="flex justify-between mb-1">
           <strong>Technische Universität Berlin</strong>
           <span>Berlin, Deutschland</span>
         </div>
         <div className="flex justify-between text-gray-600">
           <em>Master of Business Administration</em>
           <span>Abschluss 2022</span>
         </div>
         <ul className="list-disc list-inside mt-2 text-gray-600">
           <li>Abschluss mit Auszeichnung, Note: 1,3</li>
           <li>Präsident des Venture Capital Clubs, einer studentischen Gruppe zur Vorbereitung auf Karrieren in der Venture-Capital-Branche durch Networking und Bildungsveranstaltungen</li>
         </ul>
       </div>

       <div>
         <div className="flex justify-between mb-1">
           <strong>Universität Hamburg</strong>
           <span>Hamburg, Deutschland</span>
         </div>
         <div className="flex justify-between text-gray-600">
           <em>Bachelor of Science in Wirtschaftsinformatik</em>
           <span>10/2016 - 09/2020</span>
         </div>
         <ul className="list-disc list-inside mt-2 text-gray-600">
           <li>Abschluss mit Auszeichnung, Note: 1,5</li>
           <li>Mitglied der Hochschulgruppe für Entrepreneurship und des Debattierclubs</li>
         </ul>
       </div>
     </section>

     <section className="mb-6">
       <h2 className="text-lg font-bold mb-2 uppercase text-gray-800">Berufserfahrung</h2>
       <div className="mb-4">
         <div className="flex justify-between mb-1">
           <strong>Venture Capital Praktikant</strong>
           <span>Berlin, Deutschland</span>
         </div>
         <div className="flex justify-between text-gray-600">
           <em>High-Tech Gründerfonds</em>
           <span>05/2021 - 08/2021</span>
         </div>
         <ul className="list-disc list-inside mt-2 text-gray-600">
           <li>Beteiligung an der ersten Due Diligence, Erstellung des CIM und Entwicklung von PowerPoint-Präsentationen</li>
           <li>Durchführung umfangreicher Marktforschung im B2B-Fintech-Bereich zur Identifizierung potenzieller Investitionsmöglichkeiten</li>
           <li>Mitarbeit in einem Team zur Überprüfung von Betriebsstrukturen, Produktionsprozessen und Lieferkettenpraktiken bei sechs Portfoliounternehmen, was zu einer 70-prozentigen Verbesserung der ESG-Metriken führte</li>
         </ul>
       </div>
     </section>

     <section>
       <h2 className="text-lg font-bold mb-2 uppercase text-gray-800">Zusätzliche Informationen</h2>
       <ul className="list-disc list-inside text-gray-600">
         <li>Fortgeschrittene Kenntnisse in Excel/VBA und SQL</li>
         <li>Fließend in Deutsch und Englisch, gute Französischkenntnisse</li>
         <li>Aufbau einer Slack-Community für Venture Capitalisten und Gründer mit über 2500 Mitgliedern</li>
         <li>Mitarbeit an einem Tech-Startup in der Pre-Produkt-Phase und erfolgreiche Einwerbung von 500.000 € von Investoren im Jahr 2023 für die Entwicklung einer App zur sicheren Navigation für Menschen mit Behinderungen in Berlin</li>
       </ul>
     </section>
   </div>
 )
}

