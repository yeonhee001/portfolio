import React from 'react'
import RightMiniIcon from '../icons/RightMiniIcon'

function AllView({onClick}) {
  return (
    <div className='allView' onClick={onClick}>
      <p>자세히 보기</p>
      <RightMiniIcon className={'allRightIcon'}/>
    </div>
  )
}

export default AllView