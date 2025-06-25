import React from 'react'
import ContactItem from './ContactItem'
import Phone from '../icons/Phone'
import Mail from '../icons/Mail'
import Github from '../icons/Github'

function Contact({className}) {
  return (
    <div className={className}>
      <ContactItem icons={<Phone/>} title={'전화번호'} content={'010-6323-4380'}/>
      <ContactItem icons={<Mail/>} title={'이메일'} content={'yeoon0102@gmail.com'}/>
      <ContactItem icons={<Github/>} title={'깃허브'} content={'yeonhee001'} onClick={()=>window.open('https://github.com/yeonhee001', '_blank', 'noopener,noreferrer')}/>
    </div>
  )
}

export default Contact