import React from 'react'
import CurriculumTabs from '../../components/CurriculumTabs/CurriculumTabs';
import TabContent from '../../components/TabContent/TabContent';

type Props = {
  curriculum: Curriculum
}

const CurriculumDetailPage: React.FC<Props> = ({curriculum}) => {
  return (
    <div>
      <CurriculumTabs tabs={curriculum.tabs}/>
      <TabContent/>
    </div>
  )
}

export default CurriculumDetailPage;