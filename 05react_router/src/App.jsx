import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-blue-700 text-4xl'>React Router</div>
    <Header />
    <Footer />
    <Home />
    
    </>
  )
}

export default App

