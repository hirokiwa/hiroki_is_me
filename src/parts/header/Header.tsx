import React from 'react';
import Tab from '../tab/Tab';
import './Header.css';

const Header = ():JSX.Element => {
  return (
    // <div className='header_outer'>
    <div className='Header'>
        <img className='headder_icon' src="https://hirokiwa.github.io/mypage/img/messageImage_1644108394365.jpg" alt="icon" />
        <div className='title'>Hiroki is me</div>
    </div>
    // {/* <Tab/> */}
    // </div>
  );
}

export default Header;
