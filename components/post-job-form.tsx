'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from './use-toast'
import { postJob } from '@/app/actions/post-job'
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
 jobTitle: z.string().min(2, 'Jobtitel ist erforderlich'),
 company: z.string().min(2, 'Firmenname ist erforderlich'),
 location: z.string().min(2, 'Standort ist erforderlich'),
 jobType: z.enum(['Vollzeit', 'Teilzeit', 'Vertrag', 'Praktikum']),
 salary: z.string().optional(),
 applyLink: z.string().url('Muss eine gültige URL sein'),
 description: z.string().min(100, 'Beschreibung muss mindestens 100 Zeichen lang sein'),
 companyDescription: z.string().min(50, 'Firmenbeschreibung muss mindestens 50 Zeichen lang sein'),
 requirements: z.string().min(50, 'Anforderungen müssen mindestens 50 Zeichen lang sein'),
 benefits: z.string().min(50, 'Vorteile müssen mindestens 50 Zeichen lang sein'),
 contactEmail: z.string().email('Muss eine gültige E-Mail-Adresse sein'),
})

export function PostJobForm() {
 const [isSubmitting, setIsSubmitting] = useState(false)
 const { toast } = useToast()
 
 const form = useForm<z.infer<typeof formSchema>>({
   resolver: zodResolver(formSchema),
   defaultValues: {
     jobTitle: '',
     company: '',
     location: '',
     jobType: 'Vollzeit',
     salary: '',
     applyLink: '',
     description: '',
     companyDescription: '',
     requirements: '',
     benefits: '',
     contactEmail: '',
   },
 })

 async function onSubmit(values: z.infer<typeof formSchema>) {
   setIsSubmitting(true)
   
   const formData = new FormData()
   Object.entries(values).forEach(([key, value]) => {
     formData.append(key, value)
   })

   const result = await postJob(formData)

   if (result.success) {
     toast({
       title: "Stellenanzeige erfolgreich eingereicht",
       description: "Ihre Stellenanzeige wurde erfolgreich eingereicht und wird in Kürze überprüft. Wir werden Sie benachrichtigen, sobald sie genehmigt wurde.",
       variant: "default",
     })
     form.reset()
   } else {
     toast({
       title: "Fehler",
       description: result.error || "Es gab einen Fehler beim Einreichen Ihrer Stellenanzeige. Bitte versuchen Sie es erneut.",
       variant: "destructive",
     })
   }

   setIsSubmitting(false)
 }

 return (
   <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <div className="space-y-6">
         <FormField
           control={form.control}
           name="jobTitle"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Jobtitel</FormLabel>
               <FormControl>
                 <Input placeholder="z.B. Investment Analyst" {...field} />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="company"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Firmenname</FormLabel>
               <FormControl>
                 <Input placeholder="z.B. Acme Ventures" {...field} />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="location"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Standort</FormLabel>
               <FormControl>
                 <Input placeholder="z.B. Berlin, Deutschland" {...field} />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="jobType"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Art der Beschäftigung</FormLabel>
               <FormControl>
                 <select 
                   {...field}
                   className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                 >
                   <option value="Vollzeit">Vollzeit</option>
                   <option value="Teilzeit">Teilzeit</option>
                   <option value="Vertrag">Vertrag</option>
                   <option value="Praktikum">Praktikum</option>
                 </select>
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="salary"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Gehaltsbereich (Optional)</FormLabel>
               <FormControl>
                 <Input placeholder="z.B. 80.000€ - 120.000€" {...field} />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="applyLink"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Bewerbungslink</FormLabel>
               <FormControl>
                 <Input placeholder="https://www.beispiel.de/bewerben" {...field} />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="description"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Stellenbeschreibung</FormLabel>
               <FormControl>
                 <Textarea 
                   placeholder="Beschreiben Sie die Rolle, Verantwortlichkeiten und den idealen Kandidaten..."
                   className="min-h-[150px]"
                   {...field}
                 />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="companyDescription"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Unternehmensbeschreibung</FormLabel>
               <FormControl>
                 <Textarea 
                   placeholder="Erzählen Sie Kandidaten von Ihrem Unternehmen, Ihrer Investitionsthese und Kultur..."
                   className="min-h-[100px]"
                   {...field}
                 />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="requirements"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Anforderungen</FormLabel>
               <FormControl>
                 <Textarea 
                   placeholder="Listen Sie die erforderlichen Qualifikationen, Fähigkeiten und Erfahrungen auf..."
                   className="min-h-[100px]"
                   {...field}
                 />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="benefits"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Vorteile & Leistungen</FormLabel>
               <FormControl>
                 <Textarea 
                   placeholder="Beschreiben Sie die Vorteile, Vergütung und Entwicklungsmöglichkeiten..."
                   className="min-h-[100px]"
                   {...field}
                 />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />

         <FormField
           control={form.control}
           name="contactEmail"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Kontakt-E-Mail</FormLabel>
               <FormControl>
                 <Input 
                   type="email"
                   placeholder="Wohin wir Bewerbungen und Updates senden"
                   {...field}
                 />
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />
       </div>

       <Button 
         type="submit" 
         className="w-full bg-primary text-white hover:bg-primary/90 py-6 text-lg"
         disabled={isSubmitting}
       >
         {isSubmitting ? 'Wird eingereicht...' : 'Stellenanzeige einreichen'}
       </Button>
     </form>
   </Form>
 )
}

