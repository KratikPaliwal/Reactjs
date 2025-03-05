import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-blue-600 w-full h-[300px] text-red-600 text-4xl gap-1x-px'>
      <div>Test</div>
      <div>Buliding Apps</div>

    </div>
    </>
  )
}

export default App
