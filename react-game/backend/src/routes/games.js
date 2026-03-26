import express from 'express';
import pool from '../db/pools.js'

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM games`);

        if (result.rows.length === 0) {
            return res.status(400).json({
                error: "No games with scores in database."
            });
        }
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error with getting all games', error);
        res.status(500).json({ error: 'Error! Could not get games list.' });
    }
});

router.post('/', async(req, res) => {
    try {
        const { player_id, player_score } = req.body;

        if (!player_score || !player_id){
            return res.status(400).json({
                error: "A player id and score is required!"
            });
        }

        if (typeof(player_score) !== 'number') {
            return res.status(400).json({
                error: "A valid score value is required!"
            });
        }

        const result = await pool.query(
            `INSERT INTO games (player_id, player_score)
            VALUES ($1, $2)
            RETURNING *`,
            [player_id, player_score]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error with adding the score for this player.', error);
        res.status(500).json({ error: 'Error! Could not add the score for this player.' });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;

        if (id === null) {
            return res.status(400).json({
                error: 'Could not find user.'
            });
        }

        const result = await pool.query(
            `SELECT games.id, games.player_score, players.player_username
            FROM games 
            JOIN players ON games.player_id = players.id
            WHERE games.id = $1`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(400).json({
                error: 'Error! This individual game for this user does not exist.'
            });
        };

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error with getting individual player game score for this game.', error);
        res.status(500).json({ error: 'Error! Could not get individual player game score for this game.' });
    };
});

router.put('/:id', async(req, res) => {

});

router.delete('/:id', async(req, res) => {

});

export default router;