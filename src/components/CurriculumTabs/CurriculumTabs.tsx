import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './CurriculumTabs.css';

type Props = {
  curriculumId: number,
  tabs: string[]
}

type LocationParams = {
  pathname: string
}

const CurriculumTabs: React.FC<Props> = (props) => {
  const { pathname } = useLocation<LocationParams>();
  console.log(useLocation());
  // console.log(pathname);
  let pathId = 3;
  // let pathId:any = pathname.split('/');
  // pathId = pathId[pathId.length-1];
  return (
    <aside id='Curriculum-Tabs' className='curriculum-tabs'>
      <ul>
        {props.tabs.map((tab:string, i:number) => <li key={i} className={props.curriculumId == pathId ? 'current' : ''}>
          <Link to={`/curriculums/${props.curriculumId}/${i}`}>{tab}</Link>
        </li>)}
      </ul>
    </aside>
  )
}

export default CurriculumTabs;