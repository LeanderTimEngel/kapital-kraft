'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from './use-toast'
import { subscribeToNewsletter } from '@/app/actions/newsletter'

export function Newsletter() {
const [email, setEmail] = useState('')
const [firstName, setFirstName] = useState('')
const [isLoading, setIsLoading] = useState(false)
const { toast } = useToast()

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)

  const formData = new FormData()
  formData.append('email', email)
  formData.append('firstName', firstName)

  const result = await subscribeToNewsletter(formData)

  if (result.error) {
    toast({
      title: 'Anmeldung fehlgeschlagen',
      description: result.error,
      variant: 'destructive',
    })
  } else {
    toast({
      title: 'Anmeldung erfolgreich',
      description: 'Sie haben sich erfolgreich für unseren Newsletter angemeldet!',
      variant: 'default',
    })
    setEmail('')
    setFirstName('')
  }

  setIsLoading(false)
}

return (
  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4 md:p-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Bleiben Sie informiert über den deutschen VC-Markt</h2>
      <p className="text-gray-700 mb-6">
        Erhalten Sie wöchentliche Updates zu neuen Jobmöglichkeiten, Einblicke in den deutschen VC-Markt und Karrieretipps für die Startup-Szene.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Vorname (Optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-grow bg-white text-gray-900"
        />
        <Input
          type="email"
          placeholder="Ihre E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow bg-white text-gray-900"
          required
        />
        <Button type="submit" className="btn-primary w-full" disabled={isLoading}>
          {isLoading ? 'Wird angemeldet...' : 'Anmelden'}
        </Button>
      </form>
    </div>
  </div>
)
}

