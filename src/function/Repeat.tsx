type type_repeat = {
    numTimes: number;
    children: any;
    flex:boolean
    // display_flex:boolean;
  }

const Repeat = (props:type_repeat) => {

    let items:number[] = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }

    return <div style={props.flex? {display: 'flex'}:{}}>{items}</div>;
}

export default Repeat