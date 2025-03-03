import { useState } from 'react'
import './App.css'
import Script from './Script'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-6xl bg-red-300'>Something</div>
    <Script username="Kratik Paliwal"/>
    <Script />
    </>
  )
}

export default App
