import {useSelector,useDispatch} from 'react-redux';
import { add,remove } from '../redux/Slices/CartSlice';
import {toast} from 'react-hot-toast'

export function Products({post}){

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    function addToCart(){
        dispatch(add(post));
        toast.success('item added to cart')
    }

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error('item removed from cart')
    }

    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.discription}</p>
            </div>
            <div>
                <img src={post.image}/>
            </div>

            <div>
            <div>
                <p>${post.price}</p>
            </div>

            {
                cart.some((p) => p.id == post.id) ? 
                (<button onClick={removeFromCart}>
                    Remove Item
                </button>) :
                (<button onClick={addToCart}>
                    Add to Cart
                </button>)
            }
            </div>
        </div>
    )
}

// export default Products;