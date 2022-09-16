import React from 'react';
import Header from '../../parts/header/Header';
import './Home.css';
import PlofCard from './plof_card/PlofCard';

const Home = ():JSX.Element => {
  return (
    <div className='Home'>
      <Header/>
      <div className='top_img_outer'>
        <img className='top_img' src="https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/develop/src/page/home/top_img.jpg" alt="icon" />
        <div className='thank'>生きてるだけでありがとう</div>      
      </div>
      <PlofCard/>
    </div>
  );
}

export default Home;
