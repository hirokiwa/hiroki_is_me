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
import Tab from '../../parts/tab/Tab';

const Home = ():JSX.Element => {
  return (
    <div className='Home'>
      {/* <Header/> */}
      <Tab location='ホーム' />
      <div className='top_img_outer'>
        <img className='top_img' src="https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/develop/src/page/home/top_img.jpg" alt="icon" />
        <div className='thank'>生きてるだけでありがとう</div>      
      </div>
      <PlofCard/>
      <Introduction/>
      <Link className='next_page' to={`/contents/`}>＞コンテンツ一覧</Link>
      <ButtonReroad/>
      <Copyright/>
    </div>
  );
}

export default Home;
