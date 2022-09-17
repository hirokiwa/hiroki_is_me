import React from 'react';
import './ButtonTop.css';
// import '../../../common_style/Card.css'

const ButtonTop = ():JSX.Element => {
    const returnTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

  return (
    <div className='ButtonTop'>
        <button onClick={returnTop}>トップへ戻る</button>
    </div>
  );
}

export default ButtonTop;
