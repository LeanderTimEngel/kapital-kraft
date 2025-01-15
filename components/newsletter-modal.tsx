'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from './use-toast'
import { subscribeToNewsletter } from '@/app/actions/newsletter'

export function NewsletterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
 const [email, setEmail] = useState('')
 const [firstName, setFirstName] = useState('')
 const [isSubmitting, setIsSubmitting] = useState(false)
 const { toast } = useToast()

 if (!isOpen) return null

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault()
   setIsSubmitting(true)

   const formData = new FormData()
   formData.append('email', email)
   formData.append('firstName', firstName)

   const result = await subscribeToNewsletter(formData)

   if (result.error) {
     toast({
       title: 'Subscription fehlgeschlagen',
       description: result.error,
       variant: 'destructive',
     })
   } else {
     toast({
       title: 'Subscription erfolgreich',
       description: 'Du hast dich erfolgreich für unseren Newsletter angemeldet!',
       variant: 'default',
     })
     setEmail('')
     setFirstName('')
     onClose()
   }

   setIsSubmitting(false)
 }

 return (
   <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
     <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
       <button
         onClick={onClose}
         className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
       >
         <X className="h-6 w-6" />
       </button>
       
       <div className="text-center mb-4">
         <h2 className="text-2xl font-bold text-gray-900 mb-2">Bleib auf dem Laufenden</h2>
         <p className="text-sm text-gray-600 mb-4">
           Abonniere unseren Newsletter für die neuesten VC-Angebote und Einblicke.
         </p>
       </div>

       <form onSubmit={handleSubmit} className="space-y-3">
         <Input
           type="text"
           placeholder="Vorname"
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
           className="w-full"
         />
         <Input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="w-full"
           required
         />
         <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" disabled={isSubmitting}>
           {isSubmitting ? 'Abonnieren...' : 'Abonnieren'}
         </Button>
       </form>
     </div>
   </div>
 )
}

