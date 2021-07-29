import React from 'react';

import './CurriculumTabs.css';

type Props = {
  tabs: string[]
}

const CurriculumTabs: React.FC<Props> = ({tabs}) => {
  return (
    <aside id='Curriculum-Tabs' className='curriculum-tabs'>
      <ul>
        {tabs.map(tab => <li>{tab}</li>)}
      </ul>
    </aside>
  )
}

export default CurriculumTabs;