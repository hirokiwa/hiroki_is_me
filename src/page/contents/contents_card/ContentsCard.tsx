import React, { useState } from 'react';
import './ContentsCard.css';
import '../../../common_style/Card.css'

interface data_type{
    title:string;
    script:string;
    img:string;
    url:string;

}
interface ContentsCard_type{
  data: data_type;
  slyde: boolean;
}

const ContentsCard = (props: ContentsCard_type): JSX.Element => {
  const [pick, setPick] = useState(false)
  return (
    <div
      className = { pick ?
        'ContentsCard pickStyle' :
        'ContentsCard'
      }
      onMouseEnter = {() => setPick((window.location.pathname === "/contents/"))}
      onMouseLeave = {() => setPick(false)}
    >
        {/* <button onClick="loction.href={props.data.img}"></button> */}
        <a
            href={props.data.url}
            className="contents"
            target="_blank"
            rel="noreferrer noopener">
            <img className="contents_img" src={props.data.img} alt="contents_img" height={props.slyde? "156px":undefined}/>
        <div className={props.slyde? 'contents_data_for_slide':'contents_data'}>
              <h3 className="contents_title">{props.data.title}</h3>
              <div>{props.data.script}</div>
            </div>
        </a>
    </div>
  );
}

export default ContentsCard;
