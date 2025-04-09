import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export function Navbar(){

  const {cart} = useSelector((state)=> state)

    return (
        <nav className="bg-blue-500">
            <div className=" flex justify-between">
            <NavLink to='/'>
            <div >
               <img src={logo} className="h-14" />
            </div>
            </NavLink>
                   
            <div>
              <NavLink to='/'>
                <p>Home</p>
              </NavLink>

              <NavLink to='/cart'>
                <div>
                <FaShoppingCart />

                {
                cart.length > 0 && 
                <span>{cart.length}</span>
                }
                </div>
              </NavLink>

            </div>
        
            </div>
        </nav>
    )
}