import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye , AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsloggedIn}){

    const navigate = useNavigate();
    const [formData,setformData] = useState({email:'' , password:''})

    const [showPassword,setPassword] = useState(false);

    function changeHandler(event){

        setformData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsloggedIn(true);
        toast.success('Logged In')
        navigate('/dashboard');
    }

    return(
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>

             <input 
             type="email"
             placeholder="Enter Email Address"
             value={formData.email}
             onChange={changeHandler}
             name="email"
             required />

            </label>

            <label>
                <p>
                    Password <sup>*</sup>
                </p>

                <input 
                type={showPassword ? ('password') : ('text')}
                placeholder="Enter Password"
                value={formData.password}
                name="password"
                onChange={changeHandler}
                required
                />

                <span onClick={() => setPassword((prev) => !prev )}>
                    {
                      showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>

                <Link to='#'>
                   <p>Forget Password</p>
                </Link>
            </label>

            <button>
                Sign Up
            </button>
           
        </form>
    )
}

export default LoginForm;