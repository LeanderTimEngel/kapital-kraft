'use client'

import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface JobSearchProps {
  onSearch: (searchTerm: string) => void
}

export function JobSearch({ onSearch }: JobSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Job title, keywords, oder Unternehmen"
            className="pl-10 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button type="submit" className="btn-primary whitespace-nowrap w-full md:w-auto">
          Jobs suchen
        </Button>
      </form>
    </div>
  )
}

