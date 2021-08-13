import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './CurriculumTabs.css';

type Props = {
  curriculumId: number,
  tabs: string[]
}
//Later fetch tabname instead of number/id?
const CurriculumTabs: React.FC<Props> = (props) => {
  return (
    <aside id='Curriculum-Tabs' className='curriculum-tabs'>
      <ul>
        {props.tabs.map((tab:string, i:number)=> (
          <li key={i}>
            <NavLink to={`/curriculums/${props.curriculumId}/${tab}`} activeClassName='current'>{tab}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default CurriculumTabs;