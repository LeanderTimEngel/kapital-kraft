import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C1E21]">
      <Navbar />
      <Hero />
      <Features />
    </main>
  )
}

