import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import { FaGithub } from "react-icons/fa";

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
  const [gameOver, setGameOver] = useState(false);

  // 'Se Acabo' is spanish for its done or its over
  const seAcabo = () => {
    setGameOver(true);
    window.location.reload();
  };

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
      {!dropdown ? (
        <button className="how-to-button"onClick={() => (isOpenDropdown(true), isIntroShown(false))}>How to play</button>
      ) : (
        <div className="dropdown-instructions">
          <h3>Here's How you Play: </h3>
          {instructions.map(step => (
            <p>{step}</p>
          ))}
          <div className="movement-keys-div">
            <p>Movement keys:</p>
            <p> Use <strong>[&larr;]</strong> to move left</p>
            <p> Use <strong>[&rarr;]</strong> to move right</p>
            <p> Use <strong>[&uarr;]</strong> to move up</p>
            <p> Use <strong>[&darr;]</strong> to move down</p>
          </div>
          <button className="close-button" onClick={() => (isOpenDropdown(false), isIntroShown(true))}>x</button>
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
        <>
          <Board 
            level={level} 
            sprite={character} 
          />
          <button className='end-game-button' onClick={() => seAcabo()}>End Game</button>
        </>
      )}
      <footer className="footer">
        <p>
          Hi I'm <a href="https://github.com/darithedev">Dari</a> 👋🏽, 
          and I built this game! Check out the codebase for this game on <a id="github-green" href="https://github.com/darithedev/techtonica-assignments/tree/main/react-game/cozy-game"><FaGithub /></a></p>.
          
      </footer>
    </>
  )
}

export default App
