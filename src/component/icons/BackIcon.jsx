import React from 'react'

function BackIcon({className, onClick}) {
  return (
    <div className={className} onClick={onClick}>
      <img src="/imgs/_icons/BackIcon.svg" alt="BackIcon" />
    </div>
  )
}

export default BackIcon