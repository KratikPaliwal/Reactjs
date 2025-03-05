import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [length, setLength] = useState(8);
const [char,charAllowed] = useState(false);
const [num,numAllowed] = useState(false);
const [pass, setpass] = useState()

const passGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numAllowed){
    str=str+"0123456789"
  } 
  if(charAllowed){
    str=str+"!@#$%()&^}{"
  }

  for(let i=1;i<=array.length; i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass=str.charAt(char);
  }
  console.log(pass);
  setpass(pass);
  
},[length, char,num,setpass])
  return (
    <>
    <div className='bg-gray-700 w-200 h-100' >
      <div className='text-4xl'>Password Generator</div>
      <div className='flex justify-center items-center'>
        <input type="text" className='w-100 h-10 text-amber-50 bg-white placeholder-black rounded-lg' placeholder='password' />
        <button className='bg-blue-600 px-4 py-2 hover:ring-offset-blue-500'>Copy</button>
      </div>
    </div>
    </>
  )
}

export default App
