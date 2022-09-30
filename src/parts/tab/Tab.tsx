import React from 'react';
import './Tab.css';
import page from '../../page.json'
import Repeat from '../../function/Repeat';
import TabCell from './tab_cell/TabCell';

interface tab_type{
    location:string;
}

const Tab = (props:tab_type):JSX.Element => {
  return (
    <div className='Tab'>
      {/* <div className='page_title'>コンテンツ</div> */}
      <Repeat numTimes={page.length} flex={true}>
            {(index:number) => <TabCell 
                // display_name={page[index].display_name}
                // path={page[index].path}
                // location={props.location}
                page = {page[index]}
            />}
        </Repeat>
    </div>
  );
}

export default Tab;
