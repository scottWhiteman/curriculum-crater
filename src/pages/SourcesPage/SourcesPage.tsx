import React from 'react';
import { Dispatch } from 'redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { searchSource } from '../../actions/searchActions';
import Search from '../../components/Search/Search';
import Source from '../../components/Source/Source';

const SourcesPage = () => {
  const sources: readonly Source[] = useSelector(
    (state: ReducerState) => state.sources.results,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const getSources = React.useCallback(
    (searchData:SearchState) => dispatch(searchSource(searchData)),
    [dispatch]
  );
  
  return (
    <div id='CurriculumPage' className='page'>
      <Search searchHandler={getSources}/>
      <section className='search-results-body'>
        <ul className='sources-list'>
          {sources.map((source: Source) => {
            return (
              <Source
                key={source.id}
                source={source}
              />
            )
          })}
        </ul>
      </section>
    </div>
  );
}

export default SourcesPage;