import express from 'express';
import BOOKS from './books.js';

// Create the express application object
const app = express();

// Middleware: Allow the server to read JSON data
app.use(express.json());