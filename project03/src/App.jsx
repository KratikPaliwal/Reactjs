import { useState } from 'react'
import './App.css'
import New from './New'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name:'Kratik',
    age :21,
    email_id: 'kratikpaliwal19@gmail.com',
  }

  return (
    <>
    <body className='bg-black '>
    <h1 className='text-red-400  bg-amber-300'>Someone is writing...</h1>
    < New username="chai aur code"/>
    < New newly="Something to try"/>
    </body>
  
    </>
  )
}

export default App
