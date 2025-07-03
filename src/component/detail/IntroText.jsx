import React from 'react'

function IntroText({title, content}) {
  return (
    <div className='detailIntroText'>
      <p>{title}</p>
      <span>
        {content.split('\n').map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </span>
    </div>
  )
}

export default IntroText