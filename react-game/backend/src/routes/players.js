import express from 'express';
import pool from '../db/pools.js'

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM players`);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error with getting all players', error);
        res.status(500).json({ error: 'Error! Could not get players' });
    }
});

router.post('/', async(req, res) => {
    try {
        const { player_name, email, player_username } = req.body;

        if (!player_name || !email || !player_username){
            return res.status(400).json({
                error: "A name, email, and player user name tag is required!"
            });
        }

        if (!email.includes('@')) {
            return res.status(400).json({
                error: "A valid email is required!"
            });
        }

        const result = await pool.query(
            `INSERT INTO players (player_name, email, player_username)
            VALUES ($1, $2, $3)
            RETURNING *`,
            [player_name, email, player_username]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error with adding this player.', error);
        res.status(500).json({ error: 'Error! Could not add this player.' });
    }
});

router.get('/:id', async(req, res) => {

});

router.put('/:id', async(req, res) => {

});

router.delete('/:id', async(req, res) => {

});

export default router;