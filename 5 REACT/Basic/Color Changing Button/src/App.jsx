import { useState } from 'react'
import './App.css'

function App() {

  const [color , setColor] = useState('olive')
  

  return (
  <div className='bg-slate-500 h-screen w-[100vw] flex flex-col justify-center items-center gap-8'
  style={{backgroundColor:color}}>
    <h2 className='font-bold text-xl'>Hello Om let's Build Something</h2>

    <div className='flex gap-5 bg-white text-lg font-semibold p-5 rounded-md'>
      <h3 className='text-blue-500 font-bold text-xl'
      onClick={()=>{
        setColor('olive')
      }}>Your Color Value </h3>

      <button onClick={()=>{
        setColor('blue')
      }}>blue</button>
      <button onClick={()=>{
        setColor('green')
      }}>green</button>
      <button onClick={()=>{
        setColor('red')
      }}>red</button>
      <button onClick={()=>{
        setColor('black')
      }}>black</button>
      <button onClick={()=>{
        setColor('white')
      }}>white</button>
      <button onClick={()=>{
        setColor('yellow')
      }}>yellow</button>
      <button onClick={()=>{
        setColor('aqua')
      }}>aqua</button>




     
    </div>

    </div>
  )
}

export default App
