import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";


function App() {

  const [islogedIn, setIsloggedIn] = useState(false);

  return(
  <div>

    <Navbar islogedIn={islogedIn} setIsloggedIn={setIsloggedIn}/>

    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login setIsloggedIn={setIsloggedIn}/>} />
      <Route path="/signup" element={<Signup setIsloggedIn={setIsloggedIn}/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>

  </div>)
}

export default App;
