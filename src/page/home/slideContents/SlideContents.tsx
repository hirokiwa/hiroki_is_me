import React, { useEffect } from 'react';
import data from '../../contents/contents.json'
import Repeat from '../../../function/Repeat';
import ContentsCard from '../../contents/contents_card/ContentsCard';

import './SlideContents.css';
import PlofCard from '../plof_card/PlofCard';
import Content from './content/Content';
interface SlideContents_type  {
}

const SlideContents = (): JSX.Element => {
    console.log(data)
    let data1 = "https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/708b5bd8188d1197fabe2f727be36bfd6259fcaa/src/image_data/messageImage_1672168230615.jpg";
    // const data2 = "https://raw.githubusercontent.com/hirokiwa/gpa_calculator/main/public/twitter_card_large.jpg";
    let st = true
    const setImg = () => {
        data1 = st === true ?
            "https://raw.githubusercontent.com/hirokiwa/gpa_calculator/main/public/twitter_card_large.jpg" :
            "https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/708b5bd8188d1197fabe2f727be36bfd6259fcaa/src/image_data/messageImage_1672168230615.jpg";
        
        // st = !st;
        console.log(data1);
    }

    setInterval(() => { st = !st; }, 1000);
    
    useEffect(() => {
        setImg();
    })

  return (
    <div className="SlideContents">
          <div className="d-demo__wrap">
                <ul className="d-demo__list d-demo__list--left">
                    <Repeat numTimes={data.length} display_flex = {true}>
                        {(index:number) => <Content data = {data[index]}/>}
                    </Repeat>
                </ul>
                <ul className="d-demo__list d-demo__list--left">
                    <Repeat numTimes={data.length} display_flex = {true}>
                        {(index:number) => <Content data = {data[index]}/>}
                    </Repeat>
                </ul>
        </div>
    </div>
    // <div className="SlideContents">
    //       <div className="d-demo__wrap">
    //             <ul className="d-demo__list d-demo__list--left">
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //             </ul>
    //             <ul className="d-demo__list d-demo__list--left">
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //                 <li className="d-demo__item"><img src={data1} /></li>
    //             </ul>
    //     </div>
    // </div>
  );
}


export default SlideContents;