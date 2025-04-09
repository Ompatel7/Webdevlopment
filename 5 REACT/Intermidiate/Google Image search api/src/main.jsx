import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './login.jsx'
import Image from './image.jsx'

createRoot(document.getElementById('root')).render(
 
  <GoogleOAuthProvider clientId='201489677639-om2mf57dtfgd62kastrdsecgarhd80ju.apps.googleusercontent.com'>
    {/* <App /> */}
    {/* <Login/> */}
    <Image/>
  </GoogleOAuthProvider>
  
)
