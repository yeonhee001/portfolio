import React from 'react'

function CardItem({img, title, content, tool, onClick}) {
  return (
    <div className='cardItem detailcardItem' onClick={onClick}>
      <p className='cardItemImg'>
        <img src={`/imgs/${img}`} alt="cardimgs" />
      </p>
      <div className='cardItemText'>
        <b>{title}</b>
        <p>{content}</p>
        <p>{tool}</p>
      </div>
    </div>
  )
}

export default CardItem