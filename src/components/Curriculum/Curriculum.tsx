import React from 'react';
// import { Dispatch } from 'redux';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

type Props = {
  curriculum: Curriculum
}

const Curriculum: React.FC<Props> = ({ curriculum }) => {
  // const dispatch:Dispatch<any> = useDispatch();
  // const history = useHistory();
  // const { id } = useParams();

  // const handleSelect = useCallback(
    //(selectedCurriculum:Curriculum) => dispatch(selectCurriculum(selectedCurriculum)),
    // (selectedCurriculum:Curriculum) => {
    //   dispatch(selectCurriculum(selectedCurriculum));
    //   history.push(`/curriculums/${curriculum.id}`);
    // },
    // [dispatch, history]
  // );

  return (
    <Link className='curriculum' to={`/curriculums/${curriculum.id}`}>
      <h3>{curriculum.name}</h3>
      {curriculum.thumb && <img src={curriculum.thumb}/>}
    </Link>
  );
}

export default Curriculum;