import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const characters = ["🦆","🦩","🦢"];
  const [character, setCharacter] = useState("");
  const [level, setLevel] = useState(1);
  const [intro, isIntroShown] = useState(true);

  return (
    <>
      <h1>Capture the Chicks Game</h1>
      {intro && (
        <div className='intro-message'>
          <p>Oh no! Your baby chicks have scattered across multiple levels.</p>
          <p>Quick! Get your baby chicks before the crocodile gets them!</p>
        </div>
      )}
      {!character ? (
        <>
          <p>Choose your main character: </p>
          {characters.map((c, i) => (
          <button className="character-button" key={i} onClick={() => (setCharacter(c), isIntroShown(false))}>{c}</button>
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
