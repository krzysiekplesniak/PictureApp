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

  const filterPrice = (e) => {
    setFilters(e.target.value)
    console.log('filter Price')
  }

  const filterDate = (e) => {
    setFilters(e.target.value);
    console.log('filter Date')
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='checkbox'
          value={filters.date}
          onChange={filterPrice}
          name='Date'
        />
        <label htmlFor="Date">Date</label> 
        <input
          type='checkbox'
          value={filters.price}
          onChange={filterDate}
          name='Price'
        />
        <label htmlFor="Price">Price</label> 
        <input
          type='checkbox'
          value={filters.price}
          onChange={filterDate}
          name='People'
        />
        <label htmlFor="People">People</label> 
        <input
          type='checkbox'
          value={filters.price}
          onChange={filterDate}
          name="Premium"
        />
        <label htmlFor="Premium">Premium</label> 
      </form>
    </div>
  )
}