import React from 'react'

type Props = {
  //placeholder: may change to be more complex
  content: string | undefined
}

const TabContent: React.FC<Props> = ({content}) => {
  return (
    <article className='tab-content'>
      {content}
    </article>
  )
}

export default TabContent;