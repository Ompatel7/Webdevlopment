import { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Labs from './components/Labs'
import Support from './components/Support'
import About from './components/About'
import NotFound from './components/NotFound'
import MainHeader from './mainHeader'


function App() {

  

  return (
    <div>

    
    <nav>
    <ul>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/support'}>Support</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/labs'}>Labs</NavLink>
      <NavLink to={'/*'}>Not Found</NavLink>
    

    </ul>
  </nav>
    <Routes>
      <Route  path='/' element={<MainHeader/>}>
      <Route index element={<Home/>}/> {/* Defualt route */}
      <Route path='/support' element={<Support/>}/>
      <Route path='/labs' element={<Labs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>

      </Route>

    </Routes>
    
    </div>
  )
}

export default App
