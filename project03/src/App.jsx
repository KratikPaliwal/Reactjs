import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body className='bg-black flex items-center justify-center'>
    <h1 className='text-red-400  bg-amber-300'>Someone is writing...</h1>
    </body>
  
    </>
  )
}

export default App
