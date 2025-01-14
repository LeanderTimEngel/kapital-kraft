import Image from 'next/image'

export function Features() {
  return (
    <div className="bg-[#1C1E21]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#252729] rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between bg-[#1C1E21] p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#FFEB0A]/20 rounded-full" />
                    <div>
                      <div className="h-4 w-32 bg-white/10 rounded" />
                      <div className="h-3 w-24 bg-white/5 rounded mt-2" />
                    </div>
                  </div>
                  <button className="px-4 py-1 bg-[#FFEB0A]/10 text-[#FFEB0A] rounded-full text-sm">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFEB0A]/20 to-transparent rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[#252729] transform -rotate-6 translate-y-8 rounded-xl">
                <div className="p-8">
                  <h3 className="text-[#FFEB0A] text-2xl font-bold mb-4">VC Playbook</h3>
                  <p className="text-white/80">
                    Structuring your Venture Capital career
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

