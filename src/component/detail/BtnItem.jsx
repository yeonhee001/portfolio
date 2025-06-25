import React from 'react'

function BtnItem({className, onClick, text}) {
  return (
    <div className={`detailBtnItem ${className}`} onClick={onClick}>
      {text}
    </div>
  )
}

export default BtnItem