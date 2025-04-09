import { useState } from "react";

function Card({id,name,info,image,price,removeTour}){
    const [readmore,setReadmore] = useState(false)
    
    const discription = readmore ? info : `${info.substring(0,200)}...`
    console.log(discription);
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return(
        <div className="card">
            <img src={image} alt="" className="image"></img>
            <div className="tour-info">

            <div className="tour-details">
               <h2 className="tour-price">{price}</h2>
               <h2 className="tour-name">{name}</h2>
            </div>
            <div className="tour-discription">
                {discription}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? 'Show less' :'Read more'}
                </span>
            </div>
            </div>
            <button className="btn-red" onClick={()=>{removeTour(id)}}>Not Intrested</button>
        </div>
    )
}

export default Card;