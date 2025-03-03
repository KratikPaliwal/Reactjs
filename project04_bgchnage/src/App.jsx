import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]= useState('Black')
  document.body.style.backgroundColor=color;
  

  return (
    <>
  
    <div className='flex justify-evenly gap-20 h-screen w-full' style={{backgroundColor:color }}>
      <div className='bg-red-600 w-20 h-10 rounded-full p-2'onClick={()=> setColor('red')} style={{backgroundColor:"red", cursor:'pointer'}}>Red</div>
      <div className='bg-blue-600 w-15 h-10 rounded-full p-2'onClick={()=> setColor('blue')} style={{backgroundColor:"Blue", cursor:'pointer'}}>Blue</div>
      <div className='bg-green-600 w-15 h-10 rounded-full p-2'onClick={()=> setColor('green')} style={{backgroundColor:"green", cursor:'pointer'}}>Green</div>
      <div className='bg-yellow-600 w-15 h-10 rounded-full p-2'onClick={()=> setColor('yellow')} style={{backgroundColor:"yellow", cursor:'pointer'}}>Yellow</div>
      <div className='bg-black w-15 h-10 rounded-full p-2'onClick={()=> setColor('black')} style={{backgroundColor:"black", cursor:'pointer'}}>Black</div>
    </div>
    </>
  )
}

export default App
