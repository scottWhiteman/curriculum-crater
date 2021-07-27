import React from 'react';

type Props = {
  source: Source
}

const Source: React.FC<Props> = ({ source }) => {
  return (
    <div className='curriculum'>
      <h3>{source.name}</h3>
      {source.thumb && <img src={source.thumb}/>}
    </div>
  );
}

export default Source;