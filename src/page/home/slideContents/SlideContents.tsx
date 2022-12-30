import data from '../../contents/contents.json'
import Repeat from '../../../function/Repeat';

import './SlideContents.css';
import Content from './content/Content';
import { useState } from 'react';
interface SlideContents_type  {
}

const SlideContents = (): JSX.Element => {
    const [stop, setStop] = useState(false)
  return (
      <div className="SlideContents">
            <div className="d-demo__wrap">
                <ul className={stop?
                    "d-demo__list d-demo__list--left d-demo__list--left_stop":
                    "d-demo__list d-demo__list--left"
                }
                    onMouseEnter={() => setStop(true)}
                    onMouseLeave={() => setStop(false)}
                >
                    <Repeat numTimes={data.length} display_flex = {true}>
                        {(index:number) => <Content data = {data[index]}/>}
                    </Repeat>
                </ul>
                <ul className={stop?
                    "d-demo__list d-demo__list--left d-demo__list--left_stop":
                    "d-demo__list d-demo__list--left"
                }
                    onMouseEnter={() => setStop(true)}
                    onMouseLeave={() => setStop(false)}
                >
                    <Repeat numTimes={data.length} display_flex = {true}>
                        {(index:number) => <Content data = {data[index]}/>}
                    </Repeat>
                </ul>
        </div>
    </div>
  );
}


export default SlideContents;