import React, { useState } from 'react';
import ContentsCard from '../../../contents/contents_card/ContentsCard';
import './Content.css';
interface data_type{
    title:string;
    script:string;
    img:string;
    url: string;
    tags: string[];
}
interface Content_type{
    data:data_type;
}

const Content = (props: Content_type): JSX.Element => {
    const [pick, setPick] = useState(false);
    return (
        <li className="d-demo__item">
            <div 
                onMouseEnter={() => setPick(true)}
                onMouseLeave={() => setPick(false)}
                style={ pick ?
                    { "transform" : "scale(1.1, 1.1)" } :
                    undefined
                }
            >
                <ContentsCard data={props.data} slyde={true} />
            </div>
        </li>
    );
}

export default Content;