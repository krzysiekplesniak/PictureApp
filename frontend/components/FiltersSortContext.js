import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'

const PicturesStockContext = createContext()

export const PicturesStockProvider = ({ children }) => {

  const [picturesInStock, setPicturesInStock] = useState(null);
  
 
  const addPicture = async (id) => {
    
    setPicturesInStock(picturesInStock + 1);

    // funkcje dla pózniejszego dodania obługi żywego backednuStrapi
    // const res = await fetch(`${NEXT_URL}/api/checkout${id}`, {
    //   method: 'POST',
    // })

    // if (res.ok) {
    //   console.log('dodano zdjęcie do koszyka')
    // }
  }

  const deletePicture = async (id) => {

    setPicturesStock(null);

    // funkcje dla pózniejszego dodania obługi żywego backednuStrapi
    // const res = await fetch(`${NEXT_URL}/api/checkout${id}`, {
    //   method: 'POST',
    // })

    // if (res.ok) {
    //   console.log('skasowano zdjęcie w koszyku')
    // }
  }

  

  return (
    <PicturesStockContext.Provider value={{ picturesInStock, addPicture, deletePicture }}>
      {children}
    </PicturesStockContext.Provider>
  )
}

export default PicturesStock;
