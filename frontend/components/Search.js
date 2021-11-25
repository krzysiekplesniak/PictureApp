import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Search() {
    
  const [filters, setFilters] = useState({
    date: '',
    price: ''
  })

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/events/search?term=${term}`)
    setFilters('')
  }

  return (
    <div className={styles.search}>
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
© 2021 GitHub, Inc.
Terms