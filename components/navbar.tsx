'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { NewsletterModal } from '@/components/newsletter-modal'
import { SocialIcons } from '@/components/social-icons'
import { Logo } from '@/components/logo'

export function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false)
 const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false)
 const pathname = usePathname()

 const navItems = [
   { href: '/venture-capital-jobs', label: 'Jobs' },
   { href: '/companies', label: 'Unternehmen' },
   { href: '/venture-capital-cv-template', label: 'CV Template' },
   { href: '/post-a-job', label: 'Job ausschreiben' },
 ]

 const isActive = (path: string) => pathname === path

 return (
   <>
     <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16">
           <Link href="/" className="flex items-center space-x-2">
             <Logo className="w-10 h-10" />
             <span className="text-primary font-serif text-2xl font-semibold">FundKarriere.de</span>
           </Link>
           
           <div className="hidden md:flex items-center space-x-6">
             {navItems.map((item) => (
               <Link
                 key={item.href}
                 href={item.href}
                 className={`text-sm font-medium transition-colors hover:text-primary ${
                   isActive(item.href) ? 'text-primary' : 'text-gray-600'
                 }`}
               >
                 {item.label}
               </Link>
             ))}
             <Button
               className="bg-primary text-white hover:bg-primary/90 px-4 py-2 text-sm"
               onClick={() => setIsNewsletterModalOpen(true)}
             >
               Newsletter
             </Button>
             <div className="hidden lg:block">
               <SocialIcons />
             </div>
           </div>

           <div className="md:hidden">
             <Button 
               variant="ghost" 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="p-2 transition-colors duration-200 hover:bg-gray-100 rounded-full"
             >
               <Menu size={28} />
             </Button>
           </div>
         </div>
       </div>

       {isMenuOpen && (
         <>
           <div 
             className="fixed inset-0 bg-black bg-opacity-50 z-40"
             onClick={() => setIsMenuOpen(false)}
           ></div>
           <div className="md:hidden fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
             <div className="flex flex-col h-full">
               <div className="flex justify-between items-center p-4 border-b">
                 <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                   <Logo className="w-8 h-8" />
                   <span className="text-primary font-serif text-xl font-semibold">FundKarriere</span>
                 </Link>
                 <Button 
                   variant="ghost" 
                   onClick={() => setIsMenuOpen(false)}
                   className="p-2"
                 >
                   <X size={28} />
                 </Button>
               </div>
               <div className="flex-grow overflow-y-auto">
                 <nav className="py-6 px-6 space-y-6">
                   {navItems.map((item) => (
                     <Link
                       key={item.href}
                       href={item.href}
                       className={`block text-lg font-medium transition-colors hover:text-primary ${
                         isActive(item.href) ? 'text-primary' : 'text-gray-600'
                       }`}
                       onClick={() => setIsMenuOpen(false)}
                     >
                       {item.label}
                     </Link>
                   ))}
                   <Button
                     className="w-full bg-primary text-white hover:bg-primary/90 py-3 text-lg"
                     onClick={() => {
                       setIsMenuOpen(false)
                       setIsNewsletterModalOpen(true)
                     }}
                   >
                     Newsletter
                   </Button>
                 </nav>
               </div>
               <div className="p-6 border-t">
                 <SocialIcons />
               </div>
             </div>
           </div>
         </>
       )}
     </nav>

     <NewsletterModal
       isOpen={isNewsletterModalOpen}
       onClose={() => setIsNewsletterModalOpen(false)}
     />
   </>
 )
}

