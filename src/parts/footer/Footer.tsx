import React from 'react';
import Copyright from '../copyright/Copyright';
import './Footer.css';

const Footer = ():JSX.Element => {
  return (
      <div className='Footer'>
        <div className='Footer_text'>
            エンジニアリングに心を躍らせています。
        </div>
        <div className='footer_title'>Hiroki is me</div>  
        <Copyright></Copyright>
    </div>
  );
}

export default Footer;
