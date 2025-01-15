export function CVPreview() {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg font-sans text-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mb-4">
        <div>
          <h1 className="text-xl font-bold">Max Mustermann</h1>
          <p className="text-sm text-gray-600">Musterstraße 123, 10115 Berlin</p>
          <p className="text-sm text-gray-600">max.mustermann@email.de | +49 123 456789</p>
        </div>
      </div>

      {/* Education Section */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold uppercase text-gray-800 mb-2">Ausbildung</h2>
        <div className="mb-2">
          <div className="flex justify-between text-gray-800">
            <strong>Technische Universität Berlin</strong>
            <span>Berlin, Deutschland</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <em>Master of Business Administration</em>
            <span>Abschluss 2024</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Abschluss mit Auszeichnung (Note: 1,3)</li>
            <li>Präsident des Venture Capital Clubs</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between text-gray-800">
            <strong>Universität Hamburg</strong>
            <span>Hamburg, Deutschland</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <em>Bachelor of Science in Wirtschaftsinformatik</em>
            <span>10/2018 - 09/2022</span>
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
          <div className="flex justify-between text-gray-800">
            <strong>High-Tech Gründerfonds</strong>
            <span>Berlin, Deutschland</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <em>Venture Capital Praktikant</em>
            <span>05/2023 - 08/2023</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Mitwirkung bei Due Diligence und Erstellung des CIM</li>
            <li>Marktforschung im Bereich B2B-Fintech</li>
            <li>Verbesserung der ESG-Metriken in Portfoliounternehmen</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between text-gray-800">
            <strong>N26</strong>
            <span>Berlin, Deutschland</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <em>Produktmanagement Praktikant</em>
            <span>05/2022 - 08/2022</span>
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
