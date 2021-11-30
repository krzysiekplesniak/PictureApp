import { useContext } from 'react'
import FiltersContext from '@/context/FiltersContext'
import FilterItem from './FilterItem'

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

        <button onClick={handleClearFilters}>Clear filters</button><br/>  

        <FilterItem name='people' filterChange={filterChange}/>
        <FilterItem name='nature' filterChange={filterChange}/>
        <FilterItem name='city' filterChange={filterChange}/>
        <FilterItem name='food' filterChange={filterChange}/>  
        
      </form>
    </>
  )
}