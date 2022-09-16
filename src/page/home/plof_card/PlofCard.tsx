import React from 'react';
import './PlofCard.css';

const PlofCard = ():JSX.Element => {
  return (
    <div className='PlofCard'>
        <img className='me' src="https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/develop/src/page/home/plof_card/VYHB9671.PNG" alt="hiroki" />
        <div className='my_data'>
            <h3 className='my_name'>ひろき</h3>
            <div>2002年5月4日生</div>
            <div>立命館大学理工学部電子情報工学科2年</div>
        </div>
    </div>
  );
}

export default PlofCard;
