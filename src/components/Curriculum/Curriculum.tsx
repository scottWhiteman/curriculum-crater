import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCurriculum } from '../../actions/searchActions';

type Props = {
  curriculum: Curriculum
}

const Curriculum: React.FC<Props> = ({ curriculum }) => {
  const dispatch:Dispatch<any> = useDispatch();

  const handleSelect = useCallback(
    (selectedCurriculum:Curriculum) => dispatch(selectCurriculum(selectedCurriculum)),
    [dispatch]
  );

  return (
    <button className='curriculum' onClick={(e) => handleSelect(curriculum)}>
      <h3>{curriculum.name}</h3>
      {curriculum.thumb && <img src={curriculum.thumb}/>}
    </button>
  );
}

export default Curriculum;