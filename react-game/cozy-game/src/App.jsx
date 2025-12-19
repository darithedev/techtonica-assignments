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
      {!character ? (
        <>
          <p>Choose your main character: </p>
          {characters.map((c, i) => (
          <button className="character-button" key={i} onClick={() => setCharacter(c)}>{c}</button>
          ))}
        </>
      ) : (
        <Board 
          level={level} 
          sprite={character} 
        />
      )}
    </>
  )
}

export default App
