import { useContext } from 'react'
import FiltersContext from '@/context/FiltersContext'

const Sort = () => {
  
  const { filters, changeFilters } = useContext(FiltersContext)

  const sortChange = (e) => {
    changeFilters(e.target.name);
  }

  return (
    <div>
        <input
          type='checkbox'
          name='sort'
          id='sort'
          onChange={sortChange}
        />
        <label htmlFor="sort">Sorting {filters.sort ? 'ASC' : 'DESC'}</label> 
    </div>
  )
}

export default Sort;