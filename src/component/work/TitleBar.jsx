import React from 'react'

function TitleBar({className, title, content}) {
  return (
    <div className={className}>
      <p>{title}</p>
      <span>{content}</span>
    </div>
  )
}

export default TitleBar