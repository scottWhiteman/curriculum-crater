import React from 'react';
import { Dispatch } from 'redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { searchCurriculum } from '../../actions/searchActions';
import Search from '../../components/Search/Search'
import Curriculum from '../../components/Curriculum/Curriculum';

const CurriculumPage = () => {
  const curriculums: readonly Curriculum[] = useSelector(
    (state: ReducerState) => state.curriculums.results,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const getCurriculums = React.useCallback(
    (searchData:SearchState) => dispatch(searchCurriculum(searchData)),
    [dispatch]
  );

  return (
    <div id='CurriculumPage' className='page'>
      <Search searchHandler={getCurriculums}/>
      <div className='search-results-body'>
        <ul className='curriculum-list'>
          {curriculums.map((curriculum: Curriculum) => {
            return (
              <Curriculum
                key={curriculum.id}
                curriculum={curriculum}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CurriculumPage;