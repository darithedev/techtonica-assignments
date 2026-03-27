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
            
        </div>
    )
}

export default Leaderboard;