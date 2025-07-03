import React from 'react'
import detailText from '../../data/toolDetailText.json';

function ToolsOpen({category}) {

  const details = detailText[category];

  return (
    <div className='toolsOpen'>
      {details.map((item)=>(
        <div key={item.title} className='openText'>
          <span>{item.title}</span> - {item.desc}
        </div>
      ))}
    </div>
  )
}

export default ToolsOpen