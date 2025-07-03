import React from 'react'
import AllView from '../_common/AllView'

function TopBar({className, title, onClick}) {
  return (
    <div className={className} onClick={onClick}>
      <p>{title}</p>
      <AllView onClick={onClick}/>
    </div>
  )
}

export default TopBar