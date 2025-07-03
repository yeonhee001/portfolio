import React from 'react'
import { NavLink } from 'react-router-dom'
import CloseIcon from '../icons/CloseIcon'

function Burger({isOpen, onClose}) {
  return (
    <div className={`burgerMenuWrap ${isOpen ? 'active' : ''}`}>
      <p className='burgerImage'>
        <img src="/imgs/BurgerBackground01.png" alt="burgerbg" />
      </p>
      <CloseIcon className={'burgerClose'} onClick={onClose}/>
      <ul className='burgerMenu'>
        <li className='burgerBtn' onClick={onClose}>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </li>
        <li className='burgerBtn' onClick={onClose}>
          <NavLink to="/project">
            <span>Project</span>
          </NavLink>
        </li>
        <li className='burgerBtn' onClick={onClose}>
          <NavLink to="/about">
            <span>About</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Burger