import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Navbar } from '@/components/navbar'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#1C1E21]">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#252729] rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">😪</span>
                This site does not exist anymore
              </h1>
              <p className="text-white/60 text-lg">
                It's most likely that this job post has expired. But don't worry.
                <br />
                We are adding more jobs every week.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <Link href="/venture-capital-jobs">
                <Button className="bg-[#252729] border border-white/10 text-white hover:bg-white/10">
                  See all jobs
                </Button>
              </Link>
            </div>

            <div className="border-t border-white/10 pt-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Subscribe to our newsletter and don't miss a job
                </h2>
              </div>

              <form className="max-w-xl mx-auto space-y-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your First Name"
                    className="bg-[#1C1E21] border-white/10 text-white placeholder:text-white/40"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#1C1E21] border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <Button className="w-full bg-[#FFEB0A] text-black hover:bg-[#FFEB0A]/90">
                  Join now
                </Button>
              </form>

              <p className="text-center text-white/40 text-sm mb-8">
                By signing up you agree to our{' '}
                <Link href="/terms" className="text-[#FFEB0A] hover:underline">
                  Terms & Conditions
                </Link>
              </p>

              <div className="text-center text-white/40 text-sm mb-8">
                Used by students from 👋 and many more
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                {['Stanford', 'Harvard', 'MIT', 'Cambridge', 'Penn'].map((university) => (
                  <div
                    key={university}
                    className="w-32 h-12 bg-white/5 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white/20 text-sm font-medium">
                      {university}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

