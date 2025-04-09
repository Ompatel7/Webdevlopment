import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImage from '../assets/frame.png'

function Templet({title, desc1, desc2, image, formType, setIsloggedIn}){

    return (
        <div>

            <div>
                <h1>{title}</h1>

                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {
                    formType === 'signup' ? (<SignupForm setIsloggedIn={setIsloggedIn}/>) : (<LoginForm setIsloggedIn={setIsloggedIn}/>)
                }

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                   <p>Sign Up with Google</p> 
                </button>

            </div>

            <div>
                <div>
                    <img src={frameImage}
                          alt="pattern"
                          width={558}
                          height={503}
                          loading="lazy"/>
                    
                    <img src={image}
                         alt="Student" 
                         width={558}
                         height={409}
                         loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export default Templet;