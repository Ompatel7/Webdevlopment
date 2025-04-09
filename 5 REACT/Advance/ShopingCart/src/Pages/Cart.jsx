import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  CartItem  from "../Components/Cartitem";
import { useEffect, useState } from "react";



function Cart(){

    const {cart} = useSelector((state) => state);
    console.log(cart)
    const [totalAmount,settotalAmount] = useState(0);

    useEffect(() => {
        settotalAmount(cart.reduce( (acc,curr) => acc + curr.price , 0));
    },[cart]);
    return (
        <div>
            {
              cart.length > 0 ?
              (<div>
                <div>
                  {
                    cart.map((item,index) => {
                         return (<CartItem key={item.id} item={item} itemIndex = {index}/>)
                    })
                  }
                </div>

                <div>
                    
                <div>
                    <p>Your Cart</p>
                    <h2>Summary</h2>
                    <p>
                    <span>Total items: {cart.length}</span>
                    </p>
                </div>

                <div>
                    <span>Total Amount: ${totalAmount}</span>

                    <button>Checkout Now</button>
                </div>
                
                </div>
                
              </div>)
              
              :
              (
                <div>
                    <h1>Your Cart is Empty</h1>
                    <Link to='/'>
                    <button>
                        shop Now
                    </button>
                    </Link>
                </div>
              )
            }
        </div>
    )
}

export default Cart;