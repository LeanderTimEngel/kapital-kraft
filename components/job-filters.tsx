'use client'

import { useState, useEffect } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const jobTypes = ['Vollzeit', 'Teilzeit', 'Vertrag', 'Praktikum']
const locations = ['Deutschland', 'Österreich', 'Schweiz']

interface JobFiltersProps {
  onFilterChange: (filters: { jobType: string[], location: string[], startMonth: string, startYear: string, city: string }) => void
  cities: string[]
}

export function JobFilters({ onFilterChange, cities }: JobFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [startMonth, setStartMonth] = useState<string>('')
  const [startYear, setStartYear] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('all')

  useEffect(() => {
    onFilterChange({
      jobType: selectedJobTypes,
      location: selectedLocations,
      startMonth: startMonth,
      startYear: startYear,
      city: selectedCity === 'all' ? '' : selectedCity,
    })
  }, [selectedJobTypes, selectedLocations, startMonth, startYear, selectedCity, onFilterChange])

  const handleJobTypeChange = (type: string) => {
    setSelectedJobTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
    )
  }

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-4 md:p-6 sticky top-20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filter</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden flex items-center"
          aria-expanded={isExpanded}
          aria-controls="filter-content"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Filter ausblenden
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              Filter anzeigen
            </>
          )}
        </Button>
      </div>

      <div
        id="filter-content"
        className={`space-y-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'
        }`}
      >
        <div>
          <h4 className="font-medium mb-2">Job-Typ</h4>
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`job-type-${type}`}
                checked={selectedJobTypes.includes(type)}
                onCheckedChange={() => handleJobTypeChange(type)}
              />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>

        <div>
          <h4 className="font-medium mb-2">Standort</h4>
          {locations.map((location) => (
            <label key={location} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`location-${location}`}
                checked={selectedLocations.includes(location)}
                onCheckedChange={() => handleLocationChange(location)}
              />
              <span className="text-gray-700">{location}</span>
            </label>
          ))}
        </div>

        <div>
          <h4 className="font-medium mb-2">Stadt</h4>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Wählen Sie eine Stadt" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Städte</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h4 className="font-medium mb-2">Startdatum</h4>
          <div className="flex flex-col space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="start-month" className="text-sm text-gray-600 mb-1 block">
                  Monat
                </label>
                <select
                  id="start-month"
                  value={startMonth}
                  onChange={(e) => setStartMonth(e.target.value)}
                  className="w-full border-gray-300 rounded-md text-gray-700 text-sm"
                >
                  <option value="">Alle</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month.toString().padStart(2, '0')}>
                      {new Date(2000, month - 1, 1).toLocaleString('de-DE', { month: 'long' })}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="start-year" className="text-sm text-gray-600 mb-1 block">
                  Jahr
                </label>
                <select
                  id="start-year"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  className="w-full border-gray-300 rounded-md text-gray-700 text-sm"
                >
                  <option value="">Alle</option>
                  {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {(startMonth || startYear) && (
              <p className="text-sm text-gray-600">
                Anzeigen von Jobs ab: {startMonth ? new Date(2000, parseInt(startMonth) - 1, 1).toLocaleString('de-DE', { month: 'long' }) : ''} {startYear || ''}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

