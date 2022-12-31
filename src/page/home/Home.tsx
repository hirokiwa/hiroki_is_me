import React from 'react';
// import ButtonTop from '../../parts/button_top/ButtonTop';
import Header from '../../parts/header/Header';
import './Home.css';
import Introduction from './introduction/Introduction';
import PlofCard from './plof_card/PlofCard';
import { Link } from "react-router-dom";
import Copyright from '../../parts/copyright/Copyright';
import ButtonReroad from '../../parts/button_top/ButtonReroad';
import '../../common_style/Link.css'
import Footer from '../../parts/footer/Footer';
import SlideContents from './slideContents/SlideContents';

const topPath = "https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/develop/src/page/home/top_img.jpg";
const mePath = "https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/develop/src/page/home/plof_card/VYHB9671.PNG";

const Home = (): JSX.Element => {
  const imgTop = new Image();
  imgTop.src = topPath;

  const imgMe = new Image();
  imgMe.src = mePath;
  
    return (
    <div className='Home'>
      <Header />
      <div className='Home_inner'>
        <div className='top_img_outer'>
          <img className='top_img' src={topPath} alt="icon" />
          <div className='thank'>生きてるだけでありがとう</div>      
        </div>
        <PlofCard mePath={mePath}/>
        <Introduction />
        <SlideContents />
        <div className='next_page_outer'>
          <Link className='next_page' to={`/contents/`}>コンテンツ一覧</Link>
        </div>
        <ButtonReroad/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
