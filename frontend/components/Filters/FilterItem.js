import React from 'react'
import UpperCase from '@/utils/UpperCase'

const FilterItem = ({name, filterChange}) => {
    return (
        <div>
            <input
                type='checkbox'
                name={name}
                id={name}
                onChange={filterChange}
            />
            <label htmlFor={name}>{UpperCase(name)}</label> 
            
        </div> 
    )
}

export default FilterItem;
