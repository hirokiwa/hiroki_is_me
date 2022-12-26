import './Repeat.css';

type type_repeat = {
    numTimes: number;
    children: any;
    display_flex:boolean;
}

const Repeat = (props:type_repeat) => {

    let items:number[] = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }

    return props.display_flex ? <div className="flex_true">{items}</div> : <div>{items}</div>;
}

export default Repeat