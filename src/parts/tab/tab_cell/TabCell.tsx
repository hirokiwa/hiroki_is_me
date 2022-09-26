import React from 'react';
import { Link } from 'react-router-dom';
import './TabCell.css';

interface TabCell_type{
    display_name:string
    location:string
    path:string
}

const TabCell = (props:TabCell_type):JSX.Element => {
    let here:boolean

    if(props.display_name === props.location){
        here = true
    }else{
        here = false
    }
    
  return (
    <div className='TabCell'>
      <Link className={'here_'+String(here)} to={`/`+props.path}>{props.display_name}</Link>
    </div>
  );
}

export default TabCell;
