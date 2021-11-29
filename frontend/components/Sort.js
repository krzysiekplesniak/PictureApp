import { useState } from 'react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import FiltersContext from '@/context/FiltersContext'

const Sort = () => {
    
  const { sorting, changeSorting } = useContext(FiltersContext)
  const router = useRouter()

  return (
    <div>
        <input
          type='checkbox'
          onChange={changeSorting}
          name='sort'
        />
        <label htmlFor="">Sort {sorting === 'ASC' ? 'ASC' : 'DESC'}</label> 
    </div>
  )
}

export default Sort;