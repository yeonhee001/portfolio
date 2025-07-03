import React from 'react'

function ToolsItem({icons, title, color}) {
  return (
    <div className='toolsItem'>
      <div className='toolIcon'>
        {icons}
      </div>
      <div className='toolName' style={{ borderColor: color }}>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ToolsItem