import React,{useState} from "react";
import './productitem.css';
import Card from "./card";

function ProductItem(Props){
    // const name = Props.name;
    const day = Props.day;
    const month = Props.month;
    const year = Props.year;

    const [title,setTitle] = useState(Props.name);
    

    function ClickHendler(){
        setTitle('Popcon')
        console.log('button was clicked');
        
    }

    return (
        <Card className = 'proitem'>
            <div className ='mfg-date'>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className ='pdt-name'>{title}</div>
            <button onClick={ClickHendler}>add to cart</button>
        </Card>
    )
}

export default ProductItem;