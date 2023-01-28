import React from 'react';
import ButtonTop from '../../parts/button_top/ButtonTop';
import Header from '../../parts/header/Header';
import './Contents.css';
import Repeat from '../../function/Repeat';
import ContentsCard from './contents_card/ContentsCard';
import data from './contents.json'
import Copyright from '../../parts/copyright/Copyright';
import { Link } from "react-router-dom";
import '../../common_style/Link.css'
import Footer from '../../parts/footer/Footer';

const Contents = (): JSX.Element => {
  window.scrollTo({ top: 0 });
  return (
    <div className='Contents'>
      <Header />
      <div className='page_title'>コンテンツ</div>
      <div className='Contents_inner'>
          <Repeat numTimes={data.length} display_flex = {false}>
            {(index: number) => <ContentsCard data={data[index]} slyde={false} />}
          </Repeat>
          <div className='next_page_outer'>
          <Link className='next_page' to={`/`}>
            <span className="material-symbols-outlined put_element_in_center">home</span>
            <span className='put_element_in_center'>ホーム</span>
          </Link>
          </div>
        <ButtonTop/>
        <Copyright />
      </div>
      <Footer/>
    </div>
  );
}

export default Contents;
