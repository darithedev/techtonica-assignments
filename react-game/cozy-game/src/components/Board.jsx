import { useState, useEffect } from 'react';
import './Board.css'

function Board ({ level }) {
    /* y is positive going down (y increase moving down)
       x negative going left (x decreases to the left) */
    const [duck, setDuck] = useState({ x: 525, y: 0 });
    const chicksArr = ['🐤', '🐤', '🐤'];

    const MOVEMENT = 20; // movement in px

    // Boundaries of the game map
    const MIN_Y = -5; // Top boundary
    const MAX_Y = 400; // Bottom boundary
    const MIN_X = 5; // Left boundary
    const MAX_X = 525 // right boundary

    const positon = (pos) => {
        setDuck((prevPos) => {
            let { x, y } = prevPos;

            if (pos === 'top' && y > MIN_Y) y -= MOVEMENT;
            if (pos === 'down' && y < MAX_Y) y += MOVEMENT;
            if (pos === 'left' && x > MIN_X) x -= MOVEMENT;
            if (pos === 'right' && x < MAX_X) x += MOVEMENT;

            return { x, y };
        });
    };

    const randomPos = () => ({
        x: Math.floor(Math.random() * 450),
        y: Math.floor(Math.random() * 450),
    });

    useEffect(() => {
        const handleKeys = (event) => {
            if (event.key === 'ArrowUp') positon('top');
            if (event.key === 'ArrowDown') positon('down');
            if (event.key === 'ArrowLeft') positon('left');
            if (event.key === 'ArrowRight') positon('right');
            // if (event.key === 'Shift' && event.key === 'ArrowUp') {positon('top'); MOVEMENT = 35; };
        };

        window.addEventListener('keydown', handleKeys);
        return () => window.removeEventListener('keydown', handleKeys);
    }, []);

    return (
        <div className="container">
            <div className="game-board">
                <div className='land'></div>
                <p className="nest-sprite">🪹</p>
                <p className="duck-sprite" style={{ transform: `translate(${duck.x}px, ${duck.y}px)`}}>🦆</p>
            </div>
            <p className="level">You are on level: {level} </p>
        </div>
    )
}
export default Board;