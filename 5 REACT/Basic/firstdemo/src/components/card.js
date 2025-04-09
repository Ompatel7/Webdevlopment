import './card.css';

function Card(props){
    const classes = props.className;
    return (<div className={classes}>{props.children}<p className={`colorblack App ${classes}`}>Hello all of you this is inhariting properties of other className</p> </div>);
}

export default Card;