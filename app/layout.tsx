import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "FundKarriere - KI-gestützte VC-Jobvermittlung",
    template: "%s | FundKarriere",
  },
  description:
    "Finden Sie Ihren Traumjob im deutschen Venture Capital und Startup-Ökosystem mit KI-gestützter Jobvermittlung.",
  keywords: [
    "venture capital",
    "startups",
    "jobs",
    "KI-Matching",
    "Karriere",
    "Deutschland",
  ],
  authors: [{ name: "FundKarriere Team" }],
  creator: "FundKarriere",
  publisher: "FundKarriere",
  metadataBase: new URL("https://fundkarriere.de"),
  openGraph: {
    title: "FundKarriere - KI-gestützte VC-Jobvermittlung",
    description:
      "Finden Sie Ihren Traumjob im deutschen Venture Capital und Startup-Ökosystem mit KI-gestützter Jobvermittlung.",
    url: "https://fundkarriere.de",
    siteName: "FundKarriere",
    images: [
      {
        url: "https://fundkarriere.de/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FundKarriere - KI-gestützte VC-Jobvermittlung",
    description:
      "Finden Sie Ihren Traumjob im deutschen Venture Capital und Startup-Ökosystem mit KI-gestützter Jobvermittlung.",
    creator: "@fundkarriere",
    images: ["https://fundkarriere.de/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["your-personal-website-url"],
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Analytics />
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
