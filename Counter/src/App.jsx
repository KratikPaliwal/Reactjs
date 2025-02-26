import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

let [counter,fcounter]=useState(0);


const addValue = ()=>{
  console.log(Math.random());
  fcounter(counter+1);

}

const subValue = ()=>{
  if(counter==0){
    [counter,fcounter]=useState(0);
  }
  fcounter(counter-1);
}

  return (<>
  <h1>Code aur chai </h1>
  <h3>Counter Value :{counter}  </h3>
  <button onClick={addValue}>Add Value</button>
  <button onClick={subValue}>Sub Value</button>
  </>)
}

export default App
