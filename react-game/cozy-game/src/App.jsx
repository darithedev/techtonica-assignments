import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const characters = ["🦆","🦩","🦢"];
  const [character, setCharacter] = useState("");
  const [level, setLevel] = useState(1);

  return (
    <>
      <h1>Capture the Chicks Game</h1>
      <Board 
        character={character} 
        level={level}
      />
    </>
  )
}

export default App
