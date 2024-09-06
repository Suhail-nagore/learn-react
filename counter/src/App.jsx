import './App.css'
import { useState } from 'react';
function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 15;

  const addValue = ()=>{
    counter = counter+1;
    console.log("clicked", counter);
    // setCounter(a => a +1);
    // setCounter(a => a +1);
    // setCounter(a => a +1);
    // setCounter(a => a +1);
    // setCounter(a => a +1);
    // console.log("Clicked", counter)
  }

  const removeValue = ()=>{
    if(counter<=0){
      counter=0
      setCounter(counter);
    }
    else {
    setCounter(counter-1);
    console.log("Clicked", counter)
    }
  }

  const resetToZero =()=>{
    counter =0
    setCounter(counter)
  }
  return (
    <>
      <h1>Mohd suhail counter project</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>

      <br />
      <br />
      <button onClick={resetToZero}>reset to zero</button>

    </>
  )
}

export default App
