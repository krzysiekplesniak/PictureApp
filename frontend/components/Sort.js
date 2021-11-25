import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Sort() {
    
  const [sort, setSort] = useState(true);

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/pictures/_sort=updated_at:${sort ? 'DESC' : 'ASC'}`);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='checkbox'
          value={sort ? 'ascending' : 'descending'}
          onChange={(e) => setFilters(e.target.value)}
          placeholder={sort ? 'ascending' : 'descending'}
        />
      </form>
    </div>
  )
}