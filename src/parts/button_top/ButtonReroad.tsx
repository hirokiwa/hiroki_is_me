import React from 'react';
import './ButtonTop.css';
import '../../common_style/Link.css'

const ButtonReroad = ():JSX.Element => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
    })
    setTimeout(() => {window.location.reload()},0);
  };
  
  return (
    <div className='ButtonTop'>
      <button className='returnTop' onClick={returnTop}>
        <span className="material-symbols-outlined put_element_in_center">expand_less</span>
        <span className='put_element_in_center'>トップへ戻る</span>
      </button>
    </div>
  );
}

export default ButtonReroad;
