import { Navbar } from '@/components/navbar';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-serif">Datenschutzerklärung</h1>
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p>Stand: {new Date().toLocaleDateString()}</p>

          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Auf dieser Website werden keine personenbezogenen Daten erfasst.
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
            Leander Engel<br />
            Kreckersweg 11<br />
            42929 Wermelskirchen
          </p>
          <p>
            Telefon: +49 152 09016591<br />
            E-Mail: leanderengel99@gmail.com
          </p>

          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Cookies</h3>
          <p>
            Diese Website verwendet keine Cookies.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Diese Website speichert keine Server-Log-Dateien.
          </p>

          <h2>4. Analyse-Tools und Werbung</h2>
          <h3>Analyse-Tools</h3>
          <p>
            Es werden keine Analyse-Tools wie Google Analytics oder ähnliche Dienste verwendet.
          </p>

          <h2>5. Plugins und Tools</h2>
          <p>
            Diese Website verwendet keine Plugins oder externen Tools.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht, Auskunft über die Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Da keine personenbezogenen Daten erfasst werden, entfällt die Verarbeitung.
          </p>
        </div>
      </div>
    </main>
  );
}
