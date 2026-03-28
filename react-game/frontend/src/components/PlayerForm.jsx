import { useState } from 'react'

const PlayerForm = ({ setScreen, playerSet }) => {
    const [player, setPlayer] = useState({
        player_name: "",
        email: "",
        player_username: "",
    });

    const clearForm = () => {
        setPlayer({ player_name: "", email: "", player_username: "" });
    };

    const postPlayer = (newPlayer) => {
        return fetch("http://localhost:3000/api/players", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPlayer)
        })
        .then((response) => {
            return response.json();
        })
        .then(() => {
            playerSet(newPlayer);
            clearForm();
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postPlayer(player);
        playerSet(player);
    };

    return (
        <>
            <h2>Create a new Player</h2>
            <form className="player-form" onSubmit={handleSubmit}>
                <label>
                    Your Name:
                    <input 
                        type="text" 
                        required 
                        name="name"
                        value={player.player_name}
                        onChange={(e) => setPlayer((prev) => ({ ...prev, player_name: e.target.value }))}
                    />
                </label>
                <label>
                    Your Email:
                    <input 
                        type="email" 
                        required
                        name="email"
                        value={player.email}
                        onChange={(e) => setPlayer((prev) => ({ ...prev, email: e.target.value }))}
                    />
                </label>
                <label>
                    Create Your gamer username:
                    <input 
                        type="text" 
                        required 
                        name="username"
                        value={player.player_username}
                        onChange={(e) => setPlayer((prev) => ({ ...prev, player_username: e.target.value }))}
                    />
                </label>
                <input type="submit" value="submit" />
            </form>
            <button onClick={() => setScreen('existing-player-screen')}>Back</button>
        </>
    )
}

export default PlayerForm;