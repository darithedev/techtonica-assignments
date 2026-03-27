import { useState, useEffect } from 'react'

const PlayerList = ({ setScreen, playerSet }) => {
    const [playersList, setPlayersList] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState();

    const getPlayers = () => {
        fetch("http://localhost:3000/api/players")
        .then((response) => response.json())
        .then((players) => {
            setPlayersList(players);
        });
    };

    useEffect(() => {
        getPlayers();
    }, []);

    const handleSelection = (index, selection) => {
        setSelectedPlayer(prev => ({
            ...prev,
            [index]: selection
        }))
        playerSet(selection)
    }

    return (
        <div className="players-container">
            <h2>Welcome Back Player</h2>
            <p>Who's playing this game?</p>
            {playersList.map((player, i) => (
                <button key={player.id} onClick={() => handleSelection(i, player)}>
                    {player.player_username}
                </button>
            ))}
            <div>
                <button onClick={() => setScreen('create-player-screen')}>Create New Player</button>
            </div>
        </div>
    )
}

export default PlayerList;