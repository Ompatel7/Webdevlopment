import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

function Navbar(props){
    let islogedIn = props.islogedIn;
    let setIsloggedIn = props.setIsloggedIn;

    return (
    <div className='flex justify-evenly'>
        <Link to='/'>
           <img src={logo} alt='Logo' width={160} height={32} loading='lazy' />
        </Link>

        <nav className='flex gap-3'>
            <ul >
                <Link to='/'>Home</Link>
            </ul>
            <ul>
                <Link to='/'>About</Link>
            </ul>
            <ul>
                <Link to='/'>Contact</Link>
            </ul>
        </nav>

        {/* Login Signup Logout Dashboard */}

        <div className='flex ml-5 mr-3 gap-3'>
            { !islogedIn &&
                <Link to='/login'>
                  <button>Login</button>
                </Link>
            }
            { !islogedIn &&
                <Link to='/signup'>
                  <button>Signup</button>
                </Link>
            }
            { islogedIn &&
                <Link to='/'>
                  <button onClick={() => {
                    setIsloggedIn(false)
                    toast.success('Logout Successful')
                    }}>
                    Logout
                  </button>
                </Link>
            }
            { islogedIn &&
                <Link to='/dashboard'>
                  <button>Dashboard</button>
                </Link>
            }
        </div>
    </div>
    
   );
}

export default Navbar;