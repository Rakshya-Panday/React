import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  return (
    <>
      <h1 className='text-white text-5xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
