import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye , AiOutlineEyeInvisible } from 'react-icons/ai';
import { Navigate, useNavigate } from "react-router-dom";



const SignupForm = ({setIsloggedIn}) => {

    let navigate = useNavigate();
    const [showPassword,setshowPassword] = useState(false);
    const [formData, setFormdata] = useState({firstName:'',lastName:'',email:'',password:'',conformPassword :''})
   function changeHandler(event){

          setFormdata((prevData) => ({
            ...prevData,
            [event.target.name] : event.target.value
          }))
   }

   function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.conformPassword){
        toast.error('Password do not match')
        return ;
    }

    setIsloggedIn(true);
    toast.success('Account Created')
    navigate('/dashboard');

    const accountData = {
        ...formData
    }
    console.log(accountData);
   }
    return (
        <div>

            {/* Student Instructor Tab */}
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    {/* First Name & Last Name */}
                  <label>
                    <p>First Name <sup>*</sup></p>

                    <input 
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={changeHandler}
                    />
                  </label>

                  <label>
                    <p>Last Name <sup>*</sup></p>

                    <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={changeHandler}
                    />
                  </label>
                </div>

                    {/* Email */}
                <label>
                    <p>Email Address <sup>*</sup></p>

                    <input 
                    type="email"
                    required
                    value={formData.email}
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={changeHandler}/>
                </label>

                    {/* Password  */}
                <div>
                  <label>
                    <p>Create Password <sup>*</sup></p>

                    <input 
                    type= {showPassword ? ('text') : ('password')}
                    placeholder="Enter Password"
                    value={formData.password}
                    name="password"
                    required
                    onChange={changeHandler}
                    />

                <span onClick={() => setshowPassword((prev) => !prev )}>
                    {
                      showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>
                  </label>

                  <label>
                    <p>Conform Password <sup>*</sup></p>

                    <input 
                    type= {showPassword ? ('text') : ('password')}
                    placeholder="Conform Password"
                    required
                    name="conformPassword"
                    onChange={changeHandler}
                    value={formData.conformPassword}
                    />

                <span onClick={() => setshowPassword((prev) => !prev )}>
                    {
                      showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>
                  </label>
                </div>

                <button>Create Account</button>
        
            </form>



        </div>
    )
}

export default SignupForm;