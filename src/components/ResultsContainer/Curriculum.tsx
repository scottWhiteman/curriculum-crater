import React from 'react';

type Props = {
  curriculum: Curriculum
}

export const Curriculum: React.FC<Props> = ({ curriculum }) => {
  return (
    <div className='curriculum'>
      <h3>{curriculum.name}</h3>
      {curriculum.thumb && <img src={curriculum.thumb}/>}
      
    </div>
  );
}