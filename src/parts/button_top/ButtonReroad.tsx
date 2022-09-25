import React from 'react';
import './ButtonTop.css';
// import '../../../common_style/Card.css'

const ButtonReroad = ():JSX.Element => {
    const returnTop = () => {
        window.scrollTo({
          top: 0,
          // behavior: "smooth",
        })
        setTimeout(() => {window.location.reload()},0);
      };

  return (
    <div className='ButtonTop'>
        <button className='returnTop' onClick={returnTop}>トップへ戻る</button>
        {/* <button onClick={() => window.location.reload()}>トップへ戻る</button> */}
    </div>
  );
}

export default ButtonReroad;
