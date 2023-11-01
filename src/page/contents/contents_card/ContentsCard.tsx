import React, { useState } from 'react';
import './ContentsCard.css';
import '../../../common_style/Card.css'

interface data_type{
  title:string;
  script:string;
  img:string;
  url: string;
  tags: string[];
}

interface ContentsCard_type{
  data: data_type;
  slyde: boolean;
}

const ContentsCard = (props: ContentsCard_type): JSX.Element => {
  const [pick, setPick] = useState(false);
  return (
    <div
      onMouseEnter = {() => setPick(true)}
      onMouseLeave = {() => setPick(false)}
    >
      <a
        href={props.data.url}
        className="contents"
        target="_blank"
        rel="noreferrer noopener"
        title={props.data.title}
        {
          !props.slyde && 
          <div className='tag_wrapper'>
            {
              props.data.tags.map((tag) => {
                return (
                  <div className='tag'>{tag}</div>
                )
              })
            }
          </div>
        }
        <div className={props.slyde? 'contents_data_for_slide':'contents_data'}>
          <h3 className="contents_title">{props.data.title}</h3>
          <div>{props.data.script}</div>
        </div>
      </a>
    </div>
  );
}

export default ContentsCard;
