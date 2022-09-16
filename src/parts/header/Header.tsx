import React from 'react';
import './Header.css';

const Header = ():JSX.Element => {
  return (
    <div className='Header'>
        <img className='headder_icon' src="https://hirokiwa.github.io/mypage/img/messageImage_1644108394365.jpg" alt="icon" />
        <div className='title'>Hiroki is me</div>
    </div>
  );
}

export default Header;
