import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './CurriculumTabs.css';

type Props = {
  curriculumId: number,
  tabs: Tab[],
  selectTab: Function
}
//Later fetch tabname instead of number/id?
const CurriculumTabs: React.FC<Props> = (props) => {
  return (
    <aside id='Curriculum-Tabs' className='curriculum-tabs'>
      <ul>
        {props.tabs.map((tab:Tab, i:number)=> (
          <li key={i}>
            <NavLink onClick={() => props.selectTab(tab.name)} to={`/curriculums/${props.curriculumId}/${tab.name}`} activeClassName='current'>{tab.name}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default CurriculumTabs;