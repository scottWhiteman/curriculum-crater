import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { searchCurriculum } from '../../actions/searchActions';

import { useForm } from '../../utils/useForm';

import './Search.css';

type Props = {
  searchHandler: (searchData: SearchState) => void
}

const Search: React.FC<Props> = ({ searchHandler }) => {
  const [search, setSearch] = useState<{}>();
  const dispatch: Dispatch<any> = useDispatch();
  // const [values, handleChange] = useForm({textSearch: '', tagSearch: ''});
  const [textSearch, setTextSearch] = useState('');
  const [tagSearch, setTagSearch] = useState('');

  const handleSearch = (e:React.FormEvent) => {
    e.preventDefault();

    const searchData:SearchState = {
      searchQuery: textSearch,
      tags: [tagSearch]
    }
    searchCurriculum(searchData);
  }

  // const searchSources = React.useCallback(
  //   (searchData:SearchState) => dispatch(searchHandler(searchData)),
  //   [dispatch, searchHandler]
  // );

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

export default Search;