import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import CurriculumTabs from '../../components/CurriculumTabs/CurriculumTabs';
import TabContent from '../../components/TabContent/TabContent';

type Props = {
  curriculum?: Curriculum
}

const CurriculumDetailPage: React.FC<Props> = () => {
  const selectedCurriculum = useSelector((state:ReducerState) => {
    return state.curriculums.selected;
  }, shallowEqual);
  return (
    <div>
      {selectedCurriculum && <>
        <CurriculumTabs tabs={selectedCurriculum.tabs}/>
        <TabContent/>
      </>}
      {!selectedCurriculum && <h2>No Curriculum Selected!</h2>}
    </div>
  )
}

export default CurriculumDetailPage;