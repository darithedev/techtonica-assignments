# Capture The Chicks React Game 🐣

This repository contains a multi-level game (2 levels at this time). Players select a character and collect the randomly spawned chicks to earn points. This game includes two levels. Level 2 introduces a crocodile enemy intended to reduce the player's health upon collision (collision logic for the enemy sprites are not fully implemented yet.)

**Play it now:** [Capture The Chicks React Game](https://capturethechicks.vercel.app/)

<img width="425" height="350" alt="Screenshot 2025-12-19 at 18 52 35" src="https://github.com/user-attachments/assets/1f6fdb82-aab7-4c98-a7d6-ff0055890698" />

## Project Stack

- **`frontend/`** — React + Vite app (package name `cozy-game`)
- **`backend/`** — Node.js + Express API + PostgreSQL (`pg`)

## How to install frontend

1. `cd frontend`
2. `npm install`
3. `npx vite` (or `npm run dev`)
4. Open [http://localhost:5173](http://localhost:5173) in the browser.

## How to install backend + API

1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and set `PORT` and `DATABASE_URL` (see [Database setup](#database-setup) below).
4. `npm run dev` (nodemon). The server listens on **`localhost`** and the port from `PORT` (default **3000**).

## Database setup

1. Check that PostgreSQL is running.
2. Create an empty database for the game (example name: `capturegamedb`).
3. From the **`backend`** directory, load the schema and seed data (use the database name you created in step 2):

   ```bash
   cd backend
   psql -d your_database -f src/db/db.sql
   ```

4. In **`backend/.env`**, set `DATABASE_URL` to the database connection string - example:

   ```text
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/your_database
   PORT=3000
   ```

5. Start the backend with `npm run dev`. If the DB is unreachable, the process exits on startup.

## API routes

Base URL (local): `http://127.0.0.1:3000` (or your `PORT`). JSON resources are mounted under **`/api`**.

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Server and PostgreSQL connectivity (not under `/api`). |
| `GET` | `/api/players` | All players. |
| `POST` | `/api/players` | Create player. Body: `{ "player_name", "email", "player_username" }`. |
| `GET` | `/api/players/leaderboard` | Top 10 players by `score`. |
| `GET` | `/api/players/:id` | One player by id. |
| `DELETE` | `/api/players/:id` | Delete player and their games. |
| `GET` | `/api/games` | All game rows. |
| `POST` | `/api/games` | Save a score. Body: `{ "player_id", "player_score" }` (`player_score` must be a number). Also updates that player’s `score` on the `players` table. |
| `GET` | `/api/games/:id` | One game by id (includes joined `player_username`). |

CORS is enabled for browser clients.

## How to test

There is no automated test suite in this repo yet (`backend` `npm test` is a placeholder).

**Backend (manual)**

1. Health check:

   ```bash
   curl -s http://127.0.0.1:3000/health
   ```

2. Create a player and hit the leaderboard:

   ```bash
   curl -s -X POST http://127.0.0.1:3000/api/players \
     -H "Content-Type: application/json" \
     -d '{"player_name":"Test","email":"test@example.com","player_username":"tester"}'

   curl -s http://127.0.0.1:3000/api/players/leaderboard
   ```

**Frontend**

- Run the dev server and play through the UI at `http://localhost:5173`.


## How to play

1. Select your character. Selecting a character will start the game.
2. Move your character by moving your keyboard arrow keys.
3. Collect your baby chicks by touching the baby chicks.

** Each chick that is collected will disappear and will equal 1 point. **

You move on to the next level once all baby chicks are collected.

Be careful not to get eaten by the crocodile! Three bites and the game is over!

### Movement keys:

* Use [←] to move left
* Use [→] to move right
* Use [↑] to move up
* Use [↓] to move down
