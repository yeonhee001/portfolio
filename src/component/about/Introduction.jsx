import React from 'react'
import ReactMarkdown from 'react-markdown';


function Introduction({title, content}) {
  const deepBlue = '#3F5BAE';
  return (
    <div className='introduction'>
      <b>{title}</b>
      <ReactMarkdown
        components={{
          strong: ({ node, ...props }) => (
            <strong style={{ color: deepBlue }} {...props} />
          ),
          br: () => <br />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Introduction