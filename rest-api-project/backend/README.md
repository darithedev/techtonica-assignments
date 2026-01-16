# A REST API Project

This project demonstrates a backend REST API built with Node.js, Express, and PostgreSQL.
This project implements complete CRUD (Create, Read, Update, Delete) operations for managing a book inventory database. 

## How to run
1. Clone [techtonica-assignments](https://github.com/darithedev/techtonica-assignments/tree/feat/rest-api)
2. Run command ```cd rest-api-project/backend```
3. Run command ```npm install```
4. Edit ```example.env``` file name to ```.env```
5. Edit ```PORT``` and ```DATABASE_URL``` with your local configuration
6. Run command ```node index.js``` to run your server
7. On your browser, go to ```localhost:port/``` ** Make sure to change ```port``` with local port configuration
8. Congratulations your server is now running

## Database (PostgreSQL)
**NOTE** This uses a local PostgreSQL database that can be set up locally using your command line / terminal.
1. Install PostgreSQL 15 ```brew install postgres@15```
2. Start postgres in the background ```brew services start postgresql@15```
3. Enter postgres ```psql postgres```
4. Create database ```CREATE DATABASE database-name```
5. Connect to database ```\c database-name```
6. Create books table ```CREATE TABLE books( isbn VARCHAR(50) PRIMARY KEY, title TEXT NOT NULL, author TEXT NOT NULL, format VARCHAR(25));```
7. To see the data structure of the books table use this query ```\d books```

## API Endpoints

Or in table format:

## API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Get healthy message | `{"message":"Express server is healthy."}` |
| GET | `/books` | Get all books | ``{ isbn, title, author, format }`` |
| GET | `/books/:isbn` | Get book by ISBN | `{ isbn, title, author, format }` |
| POST | `/books` | Create new book | `{ isbn, title, author, format }` |
| PUT | `/books/:isbn` | Update book | `{ isbn, title, author, format }` |
| DELETE | `/books/:isbn` | Delete book | `{ "message": "Book Name was deleted!" }` |
