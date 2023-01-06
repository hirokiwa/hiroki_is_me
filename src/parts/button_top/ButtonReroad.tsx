import React from 'react';
import './ButtonTop.css';

const ButtonReroad = ():JSX.Element => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
    })
    setTimeout(() => {window.location.reload()},0);
  };
  
  return (
    <div className='ButtonTop'>
        <button className='returnTop' onClick={returnTop}>トップへ戻る</button>
    </div>
  );
}

export default ButtonReroad;
