import { useState } from 'react'
import './App.css'
import Big from './Big'
function App() {
  let [count, setCount] = useState(0)
  const Addvalue=()=>{
    setCount(prevCounter => prevCounter+1)
    setCount(prevCounter => prevCounter+1)
    setCount(prevCounter => prevCounter+1)


  }

  const Subvalue=()=>{
    setCount(prevCounter => prevCounter-1)
    setCount(prevCounter => prevCounter-1)
  }


  return (
    <>
    <div className='text-5xl text-red-500'>{count}</div>
    <Big username="Kratik"/>
    <button onClick={Addvalue}>Add Value</button>
    <button onClick={Subvalue}>Sub Value</button>


    
    </>
  )
}

export default App
