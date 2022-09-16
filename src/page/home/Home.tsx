import React from 'react';
import Header from '../../parts/header/Header';
import './Home.css';

const Home = ():JSX.Element => {
  return (
    <div className='Home'>
      <Header/>
      <img className='top_img' src="./top_img.jpg" alt="icon" />
    </div>
  );
}

export default Home;
