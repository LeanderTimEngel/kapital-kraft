export function CVPreview() {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg font-sans text-gray-900">
      {/* Header */}
      <div className="border-b-2 border-gray-300 pb-2 mb-4">
        <h1 className="text-2xl font-bold text-center md:text-left">Max Mustermann</h1>
        <div className="text-center md:text-left text-sm text-gray-600">
          <p>Musterstraße 123, 10115 Berlin</p>
          <p>max.mustermann@email.de | +49 123 456789</p>
        </div>
      </div>

      {/* Education Section */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold uppercase text-gray-800 mb-2">Ausbildung</h2>
        <div className="mb-2">
          <div className="flex flex-col md:flex-row justify-between text-gray-800">
            <strong>Technische Universität Berlin</strong>
            <span className="text-sm md:text-base">Berlin, Deutschland</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-600">
            <em>Master of Business Administration</em>
            <span className="text-sm md:text-base">Abschluss 2024</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Abschluss mit Auszeichnung (Note: 1,3)</li>
            <li>Präsident des Venture Capital Clubs</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between text-gray-800">
            <strong>Universität Hamburg</strong>
            <span className="text-sm md:text-base">Hamburg, Deutschland</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-600">
            <em>Bachelor of Science in Wirtschaftsinformatik</em>
            <span className="text-sm md:text-base">10/2018 - 09/2022</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Abschluss mit Auszeichnung (Note: 1,5)</li>
            <li>Mitglied der Hochschulgruppe für Entrepreneurship</li>
          </ul>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold uppercase text-gray-800 mb-2">Berufserfahrung</h2>
        <div className="mb-2">
          <div className="flex flex-col md:flex-row justify-between text-gray-800">
            <strong>High-Tech Gründerfonds</strong>
            <span className="text-sm md:text-base">Berlin, Deutschland</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-600">
            <em>Venture Capital Praktikant</em>
            <span className="text-sm md:text-base">05/2023 - 08/2023</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Mitwirkung bei Due Diligence und Erstellung des CIM</li>
            <li>Marktforschung im Bereich B2B-Fintech</li>
            <li>Verbesserung der ESG-Metriken in Portfoliounternehmen</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between text-gray-800">
            <strong>N26</strong>
            <span className="text-sm md:text-base">Berlin, Deutschland</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-600">
            <em>Produktmanagement Praktikant</em>
            <span className="text-sm md:text-base">05/2022 - 08/2022</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Design und Implementierung von A/B-Tests</li>
            <li>Optimierung der Conversion-Rate um 18 Basispunkte</li>
            <li>Erstellung von Datenvisualisierungen mit SQL und Tableau</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold uppercase text-gray-800 mb-2">Fähigkeiten</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Excel/VBA, SQL, Python</li>
          <li>Fließend in Deutsch und Englisch, gute Französischkenntnisse</li>
          <li>Erfahren in Tableau, Power BI und Datenvisualisierung</li>
          <li>Projektmanagement und Teamführung</li>
        </ul>
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-lg font-semibold uppercase text-gray-800 mb-2">Zusätzliche Informationen</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Aufbau einer Slack-Community mit über 500 Mitgliedern</li>
          <li>Erfolgreiche Einwerbung von 10.000 € für ein Tech-Startup</li>
          <li>Teilnahme an Hackathons und Innovationsprojekten</li>
          <li>Sportlich aktiv: Marathonläufer mit Bestzeit von 3:30 Stunden</li>
        </ul>
      </section>
    </div>
  );
}
