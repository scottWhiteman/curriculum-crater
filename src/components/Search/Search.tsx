import React from 'react';
import './Search.css';

export default function Search() {
  const handleSearch = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('Search Submitted');
  }
  return (
    <form id='Search' onSubmit={handleSearch}>
      <div className='input-container'>
        <p>Search Text: </p>
        <input
          type='text'
          name='text-search'
          
        />
      </div>
      <div className='input-container'>
        <p>Search Tags: </p>
        <input
          type='text'
          name='tag-search'
          
        />
      </div>
      <div className='advanced'></div>
      <button type='submit' className='btn'>Search</button>
    </form>
  )
}
