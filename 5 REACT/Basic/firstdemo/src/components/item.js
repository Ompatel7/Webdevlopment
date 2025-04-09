import  './item.css'

function Item (Props){
    const name = Props.name;
    return(<p className="nirma">{name}</p> );
}

export default Item;