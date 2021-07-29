import React from 'react';

type Props = {
  curriculum: Curriculum
}

const Curriculum: React.FC<Props> = ({ curriculum }) => {
  return (
    <div className='curriculum'>
      <h3>{curriculum.name}</h3>
      {curriculum.thumb && <img src={curriculum.thumb}/>}
    </div>
  );
}

export default Curriculum;