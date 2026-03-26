import express from 'express';
import pool from '../db/pools.js'

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM players`);

        if (result.rows.length === 0) {
            return res.status(400).json({
                error: "No players in database."
            });
        }
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
    try {
        const { id } = req.params;

        if (id === null) {
            return res.status(400).json({
                error: 'Could not find user.'
            });
        }

        const result = await pool.query(`
            SELECT * FROM players WHERE id = $1`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(400).json({
                error: 'Error! User does not exist.'
            });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error with getting individual player.', error);
        res.status(500).json({ error: 'Error! Could not get individual player.' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            `DELETE FROM players WHERE id = $1 RETURNING *`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ 
                error: "This Player could not be deleted because they do not exist!"
            });
        };

        res.status(200).json({ 
            message: `The player has been deleted.`
        });

    } catch (error) {
        console.error('Could not locate or delete this player.', error.message);
        res.status(500).json({ error: "Error! With locating or deleting this player!"});
    }
});

export default router;