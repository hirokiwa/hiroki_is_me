import React from 'react';
import ButtonTop from '../../parts/button_top/ButtonTop';
import Header from '../../parts/header/Header';
import './Contents.css';
import Repeat from '../../function/Repeat';
import ContentsCard from './contents_card/ContentsCard';
import data from './contents.json'
import Copyright from '../../parts/copyright/Copyright';

const Contents = ():JSX.Element => {
    console.log(data)
  return (
    <div className='Contents'>
        <Header/>
        <div>コンテンツ</div>
        <Repeat numTimes={data.length}>
            {(index:number) => <ContentsCard data = {data[index]}/>}
        </Repeat>
      <ButtonTop/>
      <Copyright/>
    </div>
  );
}

export default Contents;
