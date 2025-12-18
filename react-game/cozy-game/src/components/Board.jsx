import { useState, useEffect } from 'react';
import './Board.css'

function Board ({ level }) {
    const [duck, setDuck] = useState({ x: 0, y: 0 });

    const MOVEMENT = 20; // movement in px
    const positon = (pos) => {
        setDuck((prevPos) => {
            let { x, y } = prevPos;

            if (pos === 'top' && y > -5) y -= MOVEMENT;
            if (pos === 'down' && y < 400) y += MOVEMENT;
            if (pos === 'left' && x > -525) x -= MOVEMENT;
            if (pos === 'right' && x < 0) x += MOVEMENT;

            return { x, y };
        });
    };

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