import React, { useState } from 'react';

import { useForm } from '../../utils/useForm';

import './Search.css';

export default function Search() {
  // const [values, handleChange] = useForm({textSearch: '', tagSearch: ''});
  const [textSearch, setTextSearch] = useState('');
  const [tagSearch, setTagSearch] = useState('');

  const handleSearch = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(textSearch, tagSearch);
  }
  return (
    <form id='Search' onSubmit={handleSearch} autoComplete='off'>
      <div className='input-container'>
        <p>Search Text: </p>
        <input
          type='text'
          name='text-search'
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
      </div>
      <div className='input-container'>
        <p>Search Tags: </p>
        <input
          type='text'
          name='tag-search'
          value={tagSearch}
          onChange={(e) => setTagSearch(e.target.value)}
        />
      </div>
      <div className='advanced'></div>
      <div className="container input-container">
        <button type='submit' className='btn btn-lg'>Search</button>
      </div>
    </form>
  )
}
