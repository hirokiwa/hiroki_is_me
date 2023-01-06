import React from 'react';
import './ButtonTop.css';

const ButtonTop = ():JSX.Element => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
    })
  };

  return (
    <div className='ButtonTop'>
        <button className='returnTop' onClick={returnTop}>トップへ戻る</button>
    </div>
  );
}

export default ButtonTop;
