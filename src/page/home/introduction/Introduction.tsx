import React from 'react';
import './Introduction.css';
import '../../../common_style/Card.css'

const Introduction = ():JSX.Element => {
  return (
    <div className='Introduction Card'>
      <h3 className='card_title'>ごあいさつ</h3>
      <div className='main_text'>
        <div>鳥取県鳥取市に生まれ、砂丘のふもとで育ちました。昨日に追われ明日を追う、そんな毎日を過ごしております。</div>
        {/* <div>砂丘のふもとで育ちました。</div> */}
        {/* <div>機能に追われ明日を追う,そんな毎日を過ごしております。</div> */}
        {/* <div>そんな毎日を過ごしております。</div> */}
      </div>
    </div>
  );
}

export default Introduction;