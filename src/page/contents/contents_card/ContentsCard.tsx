import React from 'react';
import './ContentsCard.css';
import '../../../common_style/Card.css'

interface data_type{
    title:string;
    script:string;
    img:string;
    url:string;

}
interface ContentsCard_type{
    data:data_type;
}

const ContentsCard = (props:ContentsCard_type):JSX.Element => {
  return (
    <div className='ContentsCard'>
        {/* <button onClick="loction.href={props.data.img}"></button> */}
        <a
            href={props.data.url}
            className="contents"
            target="_blank"
            rel="noreferrer noopener">
            <img className="contents_img" src={props.data.img} alt="contents_img" />
            <div className='contents_data'>
              <h3 className="contents_title">{props.data.title}</h3>
              <div>{props.data.script}</div>
            </div>
        </a>
    </div>
  );
}

export default ContentsCard;
