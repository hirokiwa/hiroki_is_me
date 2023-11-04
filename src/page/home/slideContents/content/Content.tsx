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
    return (
        <li className="d-demo__item">
            <ContentsCard data={props.data} slyde={true} />
        </li>
    );
}

export default Content;