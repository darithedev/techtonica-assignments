import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Capture the Chicks Game</h1>
        <Board level="1"/>
      </div>
    </>
  )
}

export default App
