import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-md mb-4' >tailwind test</h1>
    <Card  username="Srishti" btnText="Click me" />
    <Card username="Saziya" btnText="Visit me"/>
    </>
  )
}

export default App
