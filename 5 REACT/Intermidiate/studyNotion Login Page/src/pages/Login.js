import login from '../assets/login.png'
import Templet from '../components/Templet';

function Login({setIsloggedIn}){
    return (
        <Templet
        title='Welcome Back'
        dec1='Build skills for today, tomorrow, and beyond'
        dec2='Education to future-proof your career.'
        image={login}
        formType ='login'
        setIsloggedIn = {setIsloggedIn}
        />
    );
}

export default Login;