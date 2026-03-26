import express from 'express'
import playersRouter from './players.js'
import gamesRouter from './games.js'

const router = express.Router();

router.use('/players', playersRouter);
router.use('/games', gamesRouter);

export default router;