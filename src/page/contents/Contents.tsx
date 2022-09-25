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

const Contents = ():JSX.Element => {
  return (
    <div className='Contents'>
        <Header/>
        <div>コンテンツ</div>
        <Repeat numTimes={data.length}>
            {(index:number) => <ContentsCard data = {data[index]}/>}
        </Repeat>
        <Link className='back_page' to={`/`}>ホーム＜</Link>
      <ButtonTop/>
      <Copyright/>
    </div>
  );
}

export default Contents;
