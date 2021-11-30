import { useContext } from 'react'
import FiltersContext from '@/context/FiltersContext'
import FilterItem from './FilterItem'

const Sort = () => {
  
  const { filters, changeFilters } = useContext(FiltersContext)

  const sortChange = (e) => {
    changeFilters(e.target.name);
  }

  return (
    <>
       <FilterItem name='sort' filterChange={sortChange} />
    </>
  )
}

export default Sort;