import React from 'react'

function Education({education}) {
  
  return (
    <div className='education'>

      {education.map((item,i) => (
          <div key={i} className='eduItem'>
            <div className='line'/>
            <div className='dot'/>
            <div className='eduContent'>
              <p>{item.date}</p>
              <h4>{item.title}</h4>
              <b>{item.content}</b>
              {item.details.map((line,idx)=>(
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
      ))}
    </div>
  )
}

export default Education