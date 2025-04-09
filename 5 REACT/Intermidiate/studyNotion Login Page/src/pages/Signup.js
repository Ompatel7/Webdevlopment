import signup from '../assets/signup.png'
import Templet from '../components/Templet';

function Signup({setIsloggedIn}){
    return (
        <Templet
        title='Join the millions learning to code with StudyNotion for free'
        dec1='Build skills for today, tomorrow, and beyond'
        dec2='Education to future-proof your career.'
        image={signup}
        formType ='signup'
        setIsloggedIn = {setIsloggedIn}
        />
    );
}

export default Signup;