import express from 'express';
import BOOKS from './books.js';

// Create the express application object
const app = express();
// Set port
const PORT = 3000;

// Middleware: Allow the server to read JSON data
app.use(express.json());

app.get('/books', (req, res) => {
    res.json(BOOKS);
});

app.post('/book/:isbn', (req, res) => {

});

app.get('/books/:isbn', (req, res) => {
});

app.delete('/books/:isbn', (req, res) => {

});



// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});