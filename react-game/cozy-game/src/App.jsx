import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const characters = ["🦆","🦩","🦢"];
  const [character, setCharacter] = useState("");
  const [level, setLevel] = useState(1);
  const [intro, isIntroShown] = useState(true);
  const [dropdown, isOpenDropdown] = useState(false);
  const instructions = [
    "First: Select your character. Selecting a character will start the game.",
    "Second: Move your character by moving your keyboard arrow keys.",
    "Third: Collect your baby chicks by touching the baby chicks.",
    "Each chick that is collected will disappear and will equal 1 point.",
    "You move on to the next level once all baby chicks are collected.",
    "Be careful not to get eaten by the crocodile! Three bites and the game is over!"
  ];

  return (
    <>
      <h1>Capture the Chicks Game</h1>
      {intro && (
        <div className='intro-message'>
          <p>Oh no! Your baby chicks have scattered across multiple levels.</p>
          <p>Quick! Get your baby chicks before the crocodile gets them!</p>
          <p>🐤    🐥    🐣</p>
        </div>
      )}
      {!character ? (
        <>
          <p>Choose your main character: </p>
          {characters.map((c, i) => (
          <button className="character-selection-button" key={i} onClick={() => (setCharacter(c), isIntroShown(false))}>{c}</button>
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
