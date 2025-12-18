import './Board.css'

function Board ({ level }) {

    return (
        <div className="container">
            <div className="game-board">
                <div className='land'></div>
                <p className="nest-sprite">🪹</p>
                <p className="duck-sprite">🦆</p>
            </div>
            <p className="level">You are on level: {level} </p>
        </div>
    )
}
export default Board;