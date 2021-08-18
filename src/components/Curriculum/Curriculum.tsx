import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  curriculum: Curriculum
}

const Curriculum: React.FC<Props> = ({ curriculum }) => {

  return (
    <Link className='curriculum' to={`/curriculums/${curriculum.id}`}>
      <h3>{curriculum.name}</h3>
      {curriculum.thumb && <img src={curriculum.thumb}/>}
    </Link>
  );
}

export default Curriculum;