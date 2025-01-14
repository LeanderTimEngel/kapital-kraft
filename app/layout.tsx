import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { ScrollToTop } from '@/components/scroll-to-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'KapitalKraft - KI-gestützte VC-Jobvermittlung',
    template: '%s | KapitalKraft'
  },
  description: 'Finden Sie Ihren Traumjob im deutschen Venture Capital und Startup-Ökosystem mit KI-gestützter Jobvermittlung.',
  keywords: ['venture capital', 'startups', 'jobs', 'KI-Matching', 'Karriere', 'Deutschland'],
  authors: [{ name: 'KapitalKraft Team' }],
  creator: 'KapitalKraft',
  publisher: 'KapitalKraft',
  metadataBase: new URL('https://kapitalkraft.de'),
  openGraph: {
    title: 'KapitalKraft - KI-gestützte VC-Jobvermittlung',
    description: 'Finden Sie Ihren Traumjob im deutschen Venture Capital und Startup-Ökosystem mit KI-gestützter Jobvermittlung.',
    url: 'https://kapitalkraft.de',
    siteName: 'KapitalKraft',
    images: [
      {
        url: 'https://kapitalkraft.de/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KapitalKraft - KI-gestützte VC-Jobvermittlung',
    description: 'Finden Sie Ihren Traumjob im deutschen Venture Capital und Startup-Ökosystem mit KI-gestützter Jobvermittlung.',
    creator: '@kapitalkraft',
    images: ['https://kapitalkraft.de/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['your-personal-website-url'],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

