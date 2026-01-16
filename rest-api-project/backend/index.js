import express from 'express';
import BOOKS from './books.js';
import pool from './db/pool.js';

// Create the express application object
const app = express();
// Set port
const PORT = 3000;

// Middleware: Allow the server to read JSON data
app.use(express.json());

// Endpoint that gets all books in books.js
app.get('/books', (req, res) => {
    res.json(BOOKS);
});

// Endpoint to add new book to books.js temporarily
app.post('/books', async (req, res) => {
    const book = req.body;
    BOOKS.push(book);
    res.status(201).json(book);
});

// Endpoint that gets a specific book by isbn
app.get('/books/:isbn', async (req, res) => {
    const { isbn } = req.params;
    const books = BOOKS.filter(book => book.isbn === isbn);

    if (books.length === 0) return res.status(404).json({ error: 'This book does not exist!'});

    res.json(books);
});

// Endpoint to update book by isbn
app.put('/books/:isbn', async (req, res) => {
    const { isbn } = req.params;
    const updated = req.body;

    const books = BOOKS.filter(book => book.isbn === isbn);

    if (books.length === 0) return res.status(404).json({ error: 'This book does not exist!'});

    Object.assign(books[0], updated);

    res.json(books);
});

// Endpoint to delete book from books.js temporarily
app.delete('/books/:isbn', async (req, res) => {
    const { isbn } = req.params;
    const bookAtIndex = BOOKS.findIndex(book => book.isbn === isbn);

    if (bookAtIndex === -1) return res.status(404).json({ error: 'This book does not exist!'});

    const deleted = BOOKS.splice(bookAtIndex, 1)[0];

    res.json(deleted);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});