import React from 'react'

function TopBtn() {
  const upScroll = ()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  }
  return (
    <div className='topbtn-wrap' onClick={upScroll}>
      <div className='topbtn'>
        <img src="/imgs/_icons/TopBtn.svg" alt="TopBtn" />
      </div>
    </div>
  )
}

export default TopBtn