import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  itemsPerPage: number
  totalItems: number
  paginate: (pageNumber: number) => void
  currentPage: number
}

export function Pagination({ itemsPerPage, totalItems, paginate, currentPage }: PaginationProps) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <Button
        variant="outline"
        className="flex items-center w-full sm:w-auto mb-2 sm:mb-0"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Vorherige
      </Button>
      <div className="flex items-center space-x-2">
        {pageNumbers.map((number) => (
          <Button
            key={number}
            variant={currentPage === number ? "default" : "outline"}
            className="w-10 h-10"
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        ))}
      </div>
      <Button
        variant="outline"
        className="flex items-center w-full sm:w-auto mt-2 sm:mt-0"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        Nächste
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}

