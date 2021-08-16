import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CurriculumTabs from '../../components/CurriculumTabs/CurriculumTabs';
import TabContent from '../../components/TabContent/TabContent';

import { curriculums } from '../../dummyData';

type DetailParams = {
  curriculumId: string
}

type Props = {

}

const CurriculumDetailPage: React.FC<Props> = () => {
  // const selectedCurriculum = useSelector((state:ReducerState) => {
  //   return state.curriculums.selected;
  // }, shallowEqual);
  const { curriculumId } = useParams<DetailParams>();

  //Fetch curriculum by ID from database
  const curriculum = curriculums.find(c => c.id == Number(curriculumId));
  const [selectedTab, setTab] = React.useState(curriculum?.tabs[0].name);
  const tabContent = curriculum?.tabs.find(tab => tab.name === selectedTab)?.content;

  return (
    <div>
      {curriculum && <>
        <CurriculumTabs curriculumId={Number(curriculumId)} tabs={curriculum.tabs} selectTab={setTab}/>
        <TabContent content={tabContent}/>
      </>}
      {!curriculum && <h2>No Curriculum Selected!</h2>}
    </div>
  )
}

export default CurriculumDetailPage;