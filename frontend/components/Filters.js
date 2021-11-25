import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Filters() {
    
  const [filters, setFilters] = useState({
    date: true,
    price: true
  })

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pictures?_limit=3`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='checkbox'
          value={filters.date}
          onChange={(e) => setFilters(e.target.value)}
          placeholder='Date'
        />
        <input
          type='checkbox'
          value={filters.price}
          onChange={(e) => setFilters(e.target.value)}
          placeholder='Price'
        />
        
      </form>
    </div>
  )
}