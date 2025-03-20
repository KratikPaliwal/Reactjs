import { useState } from 'react'


import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <About />
    <Footer />
    </>
    
  )
}

export default App
