import express from 'express';
import pool from '../db/pools.js'

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM games`);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error with getting all games', error);
        res.status(500).json({ error: 'Error! Could not get games list.' });
    }
});

router.post('/', async(req, res) => {

});

router.get('/:id', async(req, res) => {

});

router.put('/:id', async(req, res) => {

});

router.delete('/:id', async(req, res) => {

});

export default router;