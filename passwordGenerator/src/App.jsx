
import {useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // useref hook 

  const passwordRef = useRef(null)


  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+{}[]|~`";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)

      pass += str.charAt(char)
      
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    //to select a specific values
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='tex-4xl text-center text-white text-4xl py-2 px-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 mb-1 rounded-md'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 mb-1' onClick={copyPasswordToClipBoard}> Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 px-2 py-2'>
          <div  className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLenght(e.target.value)}}
            />
            <label> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App