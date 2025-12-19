import { useState, useEffect } from 'react';
import './Board.css'

// Boundaries of the game map
const MIN_Y = -5; // Top boundary
const MAX_Y = 400; // Bottom boundary
const MIN_X = 5; // Left boundary
const MAX_X = 525 // right boundary

const DUCK_MOVEMENT = 15; // movement in px

const CHICK_SIZE = 32; // Font size of chick 2rem
const DUCK_SIZE = 64; // Font size of chick 4rem

function Board ({ level }) {
    // y increase moving down, x decreases moving left
    const [duck, setDuck] = useState({ x: 525, y: 0 });
    const chicksArr = ['🐤', '🐤', '🐤'];

    // Function to randomly spawn x, y coordinates for chick sprite
    const randomPos = () => ({
        x: Math.floor(Math.random() * 450),
        y: Math.floor(Math.random() * 450),
    });

    // Initalizes chick state with random x, y coordinates for each chick sprite
    const [chicks, setChicks] = useState(() => 
        chicksArr.map((chick, i) => {
            const { x, y } = randomPos();
            // returns an object 
            return {
                id: i, 
                sprite: chick,
                x,
                y,
                display: true
            };
        })
    );

    // This function determines duck movement position and adds boundaries
    const positon = (pos) => {
        // Setter function for duck position
        setDuck((prevPos) => {
            let { x, y } = prevPos;

            if (pos === 'top' && y > MIN_Y) y -= DUCK_MOVEMENT;
            if (pos === 'down' && y < MAX_Y) y += DUCK_MOVEMENT;
            if (pos === 'left' && x > MIN_X) x -= DUCK_MOVEMENT;
            if (pos === 'right' && x < MAX_X) x += DUCK_MOVEMENT;

            return { x, y }; // returns duck position x, y coordniates 
        });
    };

    // Handles key press down events from keyboard user input
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp') positon('top');
            if (event.key === 'ArrowDown') positon('down');
            if (event.key === 'ArrowLeft') positon('left');
            if (event.key === 'ArrowRight') positon('right');
            // if (event.key === 'Shift' && event.key === 'ArrowUp') {positon('top'); MOVEMENT = 35; };
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // console.log(chicks);
    console.log(duck);

    return (
        <div className="container">
            <div className="game-board">
                <div className='land'></div>
                <p className="nest-sprite">🪹</p>
                <p className="duck-sprite" style={{ left: `${duck.x}px`, top: `${duck.y}px`}}>🦆</p>
                {chicks
                    .filter(chick => chick.display)
                    .map(chick => (
                        <p key={chick.id} className="chick-sprite" style={{ left: `${chick.x}px`, top: `${chick.y}px` }}>🐤</p>
                    )
                )}
            </div>
            <p className="level">You are on level: {level} </p>
        </div>
    )
}
export default Board;