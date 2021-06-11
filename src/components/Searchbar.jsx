import React from 'react';

import './Searchbar.style.css';

export const Searchbar = ({ placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}/>
)
