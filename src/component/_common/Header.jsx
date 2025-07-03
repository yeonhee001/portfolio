import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BackIcon from '../icons/BackIcon';
import Burger from './Burger';
import MenuIcon from '../icons/MenuIcon';

function Header() {
  
  const [burgerActive, setBurgerActive] = useState(false); // 버거 상태값
  const [showHeader, setShowHeader] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  const navi = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // 스크롤
  useEffect(()=>{
    const scroll = ()=>{
      const currentScroll = window.scrollY;

      // 버거메뉴 열려있을 땐 스크롤 감지 무시
      if (!burgerActive) {
        setIsTop(currentScroll<=0); //최상단 true
        setShowHeader(currentScroll < prevScroll); // 스크롤 위치가 이전보다 작다면 true
        setPrevScroll(currentScroll); // 이전 스크롤 위치 갱신
      }
    };

    window.addEventListener('scroll', scroll);
    return ()=>window.removeEventListener('scroll', scroll);
  },[prevScroll, burgerActive])

  // 버거메뉴 오픈시 스크롤 숨김
  useEffect(() => {
    if (burgerActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [burgerActive]);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  // 헤더 로고, 뒤로가기 설정
  let head;
  if(pathname==='/' || pathname==='/about' || pathname==='/project'){
    head = (
      <img src='/imgs/logo.svg' alt='logo' onClick={()=>navi('/')}/>
    )
  } else {
    head = <BackIcon className={'headerBack'} onClick={()=>navi(-1)}/>;
  }

  return (
    <div className={`header ${showHeader ? 'show' : 'hide'} ${!isTop ? 'scrolled' : ''}`}>
      <div className='logo'>
        {head}
      </div>
      <div className={`burger ${burgerActive ? 'active' : ''}`} onClick={()=>{setBurgerActive(prev=>!prev)}}>
        <MenuIcon className={'menuIcon'}/>
      </div>
      <Burger isOpen={burgerActive} onClose={()=>setBurgerActive(false)}/>
    </div>
  )
}

export default Header