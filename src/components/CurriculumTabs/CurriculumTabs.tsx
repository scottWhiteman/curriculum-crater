import React from 'react'

type Props = {
  tabs: string[]
}

const CurriculumTabs: React.FC<Props> = ({tabs}) => {
  return (
    <aside className='curriculum-tabs'>
      <ul>
        {tabs.map(tab => <li>{tab}</li>)}
      </ul>
    </aside>
  )
}

export default CurriculumTabs;