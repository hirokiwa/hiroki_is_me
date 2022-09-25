import React from 'react';
import ButtonTop from '../../parts/button_top/ButtonTop';
import Header from '../../parts/header/Header';
import './Home.css';
import Introduction from './introduction/Introduction';
import PlofCard from './plof_card/PlofCard';
import { Link } from "react-router-dom";
import Copyright from '../../parts/copyright/Copyright';

const Home = ():JSX.Element => {
  return (
    <div className='Home'>
      <Header/>
      <div className='top_img_outer'>
        <img className='top_img' src="https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/develop/src/page/home/top_img.jpg" alt="icon" />
        <div className='thank'>生きてるだけでありがとう</div>      
      </div>
      <PlofCard/>
      <Introduction/>
      <Link to={`/contents/`}>コンテンツ</Link>
      <ButtonTop/>
      <Copyright/>
    </div>
  );
}

export default Home;
