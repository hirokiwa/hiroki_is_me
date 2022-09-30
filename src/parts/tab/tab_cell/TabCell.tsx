import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TabCell.css';

interface page_type{
  path:string
  component:string
  display_name:string
}

interface TabCell_type{
    page:page_type
}

const TabCell = (props:TabCell_type):JSX.Element => {
    let here:boolean = false
    let page = props.page

    const location = useLocation();
    if(location.pathname === page.path){
      here = true
    }
    
  return (
    <div className='TabCell'>
      <Link className={'here_'+String(here)} to={page.path}>{page.display_name}</Link>
    </div>
  );
}

export default TabCell;