'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/use-toast'
import { submitContactForm } from '@/app/actions/contact'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const result = await submitContactForm(formData)

    if (result.error) {
      toast({
        title: "Fehler",
        description: result.error,
        variant: "destructive",
      })
    } else {
      toast({
        title: "Nachricht gesendet",
        description: "Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so bald wie möglich bei Ihnen melden.",
        variant: "default",
      })
      event.currentTarget.reset()
    }

    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-serif">Kontaktieren Sie uns</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-700 mb-8">
            Haben Sie Fragen oder Feedback? Wir würden gerne von Ihnen hören. Füllen Sie das untenstehende Formular aus, und wir melden uns so schnell wie möglich bei Ihnen.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" name="name" placeholder="Ihr Name" className="mt-1" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
              <Input id="email" name="email" type="email" placeholder="ihre@email.com" className="mt-1" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Betreff</label>
              <Input id="subject" name="subject" placeholder="Worum geht es?" className="mt-1" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
              <Textarea id="message" name="message" rows={6} placeholder="Ihre Nachricht hier" className="mt-1" required />
            </div>
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

