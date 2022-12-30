import data from '../../contents/contents.json'
import Repeat from '../../../function/Repeat';

import './SlideContents.css';
import Content from './content/Content';
interface SlideContents_type  {
}

const SlideContents = (): JSX.Element => {
  return (
      <div className="SlideContents">
          <div className="d-demo__wrap">
                <ul className="d-demo__list d-demo__list--left">
                    <Repeat numTimes={data.length} display_flex = {true}>
                        {(index:number) => <Content data = {data[index]}/>}
                    </Repeat>
                </ul>
                <ul className="d-demo__list d-demo__list--left">
                    <Repeat numTimes={data.length} display_flex = {true}>
                        {(index:number) => <Content data = {data[index]}/>}
                    </Repeat>
                </ul>
        </div>
    </div>
  );
}


export default SlideContents;