import React from 'react';
import './ButtonTop.css';
import '../../common_style/Link.css'

const ButtonTop = ():JSX.Element => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
    })
  };

  return (
    <div className='ButtonTop'>
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> */}
      <button className='returnTop' onClick={returnTop}>
        <span className="material-symbols-outlined put_element_in_center">expand_less</span>
        <span className='put_element_in_center'>トップへ戻る</span>
      </button>
    </div>
  );
}

export default ButtonTop;
