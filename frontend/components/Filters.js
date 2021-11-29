import { useState } from 'react'
import { useContext } from 'react'
import FiltersContext from '@/context/FiltersContext'

export default function Filters() {

  const { filters, changeFilters, clearAllFilters } = useContext(FiltersContext)
  
  const handleClearFilters = (e) => {
    e.preventDefault();
    clearAllFilters();
  }

  const filterChange = (e) => {
    changeFilters(e.target.name);
  }
  
  return (
    <>
      <form onSubmit={handleClearFilters}>
        <div>
          <input
            type='checkbox'
            value={filters.people}
            onChange={filterChange}
            name='people'
          />
          <label htmlFor="people">People</label> 
        </div> 

        <div>
          <input
            type='checkbox'
            value={filters.nature}
            onChange={filterChange}
            name='nature'
          />
          <label htmlFor="nature">Nature</label> 
        </div>
        
        <div>
          <input
            type='checkbox'
            value={filters.city}
            onChange={filterChange}
            name='city'
          />
          <label htmlFor="city">City</label> 
        </div>
        
        <div>
          <input
            type='checkbox'
            value={filters.food}
            onChange={filterChange}
            name="food"
          />
          <label htmlFor="food">Food</label> 
        </div>
      </form>
    </>
  )
}