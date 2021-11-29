import { createContext, useState } from 'react'

import { useRouter } from 'next/router'

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {

  const router = useRouter()

  const [filters, setFilters] = useState({
    people: false,
    nature: false,
    city: false,
    food: false
  });
   
  

  const changeFilters = (filter) => {

    // const [setSome, setSomeState] = useState({thing: 'loding', count: 1});
    // setSomeState(prev => ({...prev, count: prev.count + 1}));
    //setFilters(prev => ({...prev, [filter]: !prev[filter]}));
   

    setFilters(({...filters, [filter]: !filters[filter]}));
      
    let query = '';
  
    if (filters.people === true) {query +="people=true"}; 
    if (filters.nature === true) {query ? query +="&nature=true" : query +="nature=true"};
    if (filters.city === true) {query ? query +="&city=true" : query +="city=true"}; 
    if (filters.food === true) {query ? query +="&food=true" : query +="food=true"}; 
    //if (filters.sort === true) {query +="&sort=updated_at:DESC"} else {query +="&sort=updated_at:ASC"};
    
    // console.log('filtr => ', filters);
    // console.log('query => ', query);
         
    router.push(`?${query}`)

  }

  const clearAllFilters = (filter) => {

    setFilters({
      people: false,
      nature: false,
      city: false,
      food: false
    });
    
    console.log('wyczyszczono wszystkie filtry');

  }
 

  return (
    <FiltersContext.Provider value={{ filters, changeFilters, clearAllFilters}}>
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContext;
