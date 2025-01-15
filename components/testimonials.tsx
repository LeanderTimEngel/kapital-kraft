import Image from 'next/image'

const testimonials = [
  {
    content: "NexusVC hat mir geholfen, meine Traumposition bei einem Top-VC in Berlin zu finden. Die Stellenempfehlungen waren perfekt auf mein Profil zugeschnitten!",
    author: "Lisa Müller",
    role: "Analyst bei Project A Ventures",
    avatar: "/avatars/lisa-mueller.jpg"
  },
  {
    content: "Als Personalverantwortlicher habe ich über FundKarriere außergewöhnliche Talente für unser Team gefunden. Die Qualität der Kandidaten und die Effizienz der Plattform sind unübertroffen.",
    author: "Markus Schmidt",
    role: "Partner bei High-Tech Gründerfonds",
    avatar: "/avatars/markus-schmidt.jpg"
  },
  {
    content: "Die CV-Vorlage und Karriereressourcen auf FundKarriere waren entscheidend für meinen Einstieg ins Venture Capital. Ich habe den Sprung von einem Tech-Background zu einer VC-Analyst-Position in nur 2 Monaten geschafft!",
    author: "Julia Weber",
    role: "Analyst bei Earlybird Venture Capital",
    avatar: "/avatars/julia-weber.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
          Erfolgsgeschichten aus der FundKarriere-Community
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Schließe dich Tausenden von Profis an, die ihre VC-Karriere mit NexusVC beschleunigt haben
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Lies mehr Erfolgsgeschichten in unserem Blog
          </p>
        </div>
      </div>
    </section>
  )
}

