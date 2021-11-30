import { useRouter } from 'next/router'
import { useContext } from 'react'
import FiltersContext from '@/context/FiltersContext'

const Sort = () => {
  
  const router = useRouter()

  const { filters, changeFilters } = useContext(FiltersContext)

  const sortChange = (e) => {
    changeFilters(e.target.name);
    //console.log(filters.sort)
  }

  return (
    <div>
        <input
          type='checkbox'
          onChange={sortChange}
          name='sort'
        />
        <label htmlFor="">Sorting {filters.sort === 'ASC' ? 'ASC' : 'DESC'}</label> 
    </div>
  )
}

export default Sort;