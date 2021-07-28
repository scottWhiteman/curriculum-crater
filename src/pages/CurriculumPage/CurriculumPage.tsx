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
  console.log(curriculums);
  return (
    <div id='CurriculumPage'>
      <Search searchHandler={getCurriculums}/>
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
  )
}

export default CurriculumPage;