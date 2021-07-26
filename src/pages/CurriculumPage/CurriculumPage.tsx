import React from 'react';
import { Dispatch } from 'redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { searchCurriculum } from '../../actions/searchActions';
import Search from '../../components/Search/Search'
import { Curriculum } from '../../components/ResultsContainer/Curriculum';

const CurriculumPage = () => {
  const curriculums: readonly Curriculum[] = useSelector(
    (state: CurriculumState) => state.curriculums,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const getCurriculums = React.useCallback(
    (searchData:object) => dispatch(searchCurriculum(searchData)),
    [dispatch]
  );

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