import React from 'react'

function ImageItem({img, title, content, className='', reverse }) {
  return (
    <div className={`${className} ${reverse ? 'reverse' : ''}`}>
      <p className='imageItemImg'>
        <img src={`/imgs/${img}`} alt="detailimg" />
      </p>
      <div className='imageItemText'>
        <b>{title}</b>
        <p>
          {(content||'').split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}

export default ImageItem