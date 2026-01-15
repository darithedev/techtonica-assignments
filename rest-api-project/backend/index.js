import express from 'express';
import BOOKS from './books.js';

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

app.put('/books/:isbn', (req, res) => {

});

app.delete('/books/:isbn', (req, res) => {

});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});