import { useState, useCallback, useEffect,useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passRef = useRef(null)

  const passGenerator = useCallback(() => {
    let generatedPass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%()&^}{";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      generatedPass += str.charAt(char);
    }
    setPass(generatedPass);
  }, [length, charAllowed, numAllowed]);

  const copypassword = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass);

  },[pass])

  useEffect(() => {
    passGenerator();
  }, [numAllowed, charAllowed, length, passGenerator]);

  return (
    <>
      <div className='bg-gray-700 p-6 rounded-lg'>
        <div className='text-4xl text-blue-300 mb-4'>Password Generator</div>
        <div className='flex items-center gap-2'>
          <input
            type="text"
            className='w-80 h-10 text-black bg-white placeholder-black rounded-lg px-2'
            placeholder='password'
            value={pass} // Set the value here
            readOnly
            ref={passRef}
          />
          <button
            className='bg-blue-600 w-20 h-10 rounded-lg text-white'
            onClick={copypassword}
          
          >
            Copy
          </button>
        </div>
        <div className='flex justify-between mt-4'>
          <div className='flex items-center gap-2'>
            <input
              type="range"
              min={8}
              max={20}
              className='cursor-pointer'
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label className='text-orange-400'>Numbers</label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label className='text-orange-400'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
