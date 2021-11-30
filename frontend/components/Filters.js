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
            name='people'
            id='people'
            onChange={filterChange}
          />
          <label htmlFor="people">People</label> 
        </div> 

        <div>
          <input
            type='checkbox'
            name='nature'
            id='nature'
            onChange={filterChange}
          />
          <label htmlFor="nature">Nature</label> 
        </div>
        
        <div>
          <input
            type='checkbox'
            name='city'
            id='city'
            onChange={filterChange}
          />
          <label htmlFor="city">City</label> 
        </div>
        
        <div>
          <input
            type='checkbox'
            name="food"
            id="food"
            onChange={filterChange}
          />
          <label htmlFor="food">Food</label> 
        </div>
      </form>
    </>
  )
}