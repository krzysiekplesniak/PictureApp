import { createContext, useState, useEffect } from 'react'

import { useRouter } from 'next/router'

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {

  const router = useRouter()

  const [filters, setFilters] = useState({
    people: false,
    nature: false,
    city: false,
    food: false,
    sort: false
  });
     

  useEffect(() => {

    let query = '?';
  
    if (filters.people) {query +="people=true"}; 
    if (filters.nature) {query ? query +="&nature=true" : query +="nature=true"};
    if (filters.city) {query ? query +="&city=true" : query +="city=true"}; 
    if (filters.food) {query ? query +="&food=true" : query +="food=true"}; 
    if (filters.sort) {query ? query +="&sorting=true" : query +="sorting=true"};

    //console.log('query => ', query);
         
    router.push(`${query}`);

  }, [filters])


  const changeFilters = (filter) => {
    setFilters(({...filters, [filter]: !filters[filter]}));
  }    
    

  const clearAllFilters = (filter) => {

    setFilters({
      people: false,
      nature: false,
      city: false,
      food: false, 
      sort: false
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
