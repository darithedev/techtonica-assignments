import express from 'express';
import BOOKS from './books.js';
import pool from './db/pool.js';

// Create the express application object
const app = express();
// Set port
const PORT = process.env.PORT;

// Middleware: Allow the server to read JSON data
app.use(express.json());

// Endpoint that gets all books in local PostgreSQL Books db
app.get('/books', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM books');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to create new book and add to local PostgreSQL Books db
app.post('/books', async (req, res) => {
    try {
        const { isbn, title, author, format } = req.body;

        const result = await pool.query(
            `INSERT INTO books (isbn, title, author, format) 
             VALUES ($1, $2, $3, $4) 
             RETURNING *`,
            [isbn, title, author, format]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint that returns a single requested book by isbn
app.get('/books/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;

        const result = await pool.query(
            `SELECT * FROM books where isbn = $1`,
            [isbn]
        );

        if (result.rows.length === 0) return res.status(404).json({ error: 'This book does not exist!'});

        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to update book by isbn
app.put('/books/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const { title, author, format } = req.body;
        
        const result = await pool.query(
            'UPDATE books SET title=$1, author=$2, format=$3 WHERE isbn=$4',
            [title, author, format, isbn]
        );

        if (result.rows.length === 0) return res.status(404).json({ error: 'This book does not exist!'});

        res.status(201).json(result.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to delete book
app.delete('/books/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;

        const result = await pool.query(
            'DELETE FROM books WHERE isbn=$1 RETURNING *', 
            [isbn]
        );

        if (result.rows.length === 0) return res.status(404).json({ error: 'This book does not exist!'});

        res.status(200).json({ message: `The book "${result.rows[0].title}" was deleted!` })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});