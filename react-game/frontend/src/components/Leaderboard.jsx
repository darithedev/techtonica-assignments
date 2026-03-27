import { useState, useEffect } from 'react'
import './Leaderboard.css'

const Leaderboard = ({ isLeaderboardShown }) => {
    const [leaderboardList, setLeaderboardList] = useState([]);

    const getLeaderboard = () => {
        fetch("http://localhost:3000/api/players/leaderboard")
        .then((response) => response.json())
        .then((players) => {
            setLeaderboardList(players);
        });
    };

    useEffect(() => {
        getLeaderboard();
    }, []);

    return (
        <div className="leaderboard-container">
            <h2>Top 10 Players</h2>
            {leaderboardList.map((player, i) => (
                <li id="player" key={player.id}>
                    {i+1}. {player.player_username} | {player.score}
                </li>
            ))}
            <button className="close-button" onClick={() => (window.location.reload(), isLeaderboardShown(false))}>x</button>
        </div>
    )
}

export default Leaderboard;