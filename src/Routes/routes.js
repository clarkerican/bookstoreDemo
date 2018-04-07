const express = require('express');
// This object will hold all the routes and pass around the req/res
const router = express.Router();
// This contains all the methods from the controller class
const controller = require('../Controllers/controller');


/**
 * GET /book/:bookIndex
 *
 * Returns a book at the specified index.
 *
 * Parameters Required:
 *  bookIndex - the index of the book
 *
 * Example Response:
 *
 * {
 *   "book": {
 *       "title": "The Righteous Mind",
 *       "author": "Jonathan Haidt",
 *       "price": 25
 *   }
 * }
 */
router.get('/book/:bookIndex', controller.getBookByIndex);

/**
 * PUT /book/:bookIndex
 *
 * Updates the book at the specified index with the price from the request body.
 *
 * Parameters Required:
 *  bookIndex - the index of the book
 *
 * Example Request:
 * {
 *   "price": 20
 * }
 *
 * Example Response:
 * {
 *   "title": "The Stand",
 *   "author": "Stephen King",
 *   "price": 25
 * }
 */
router.put('/book/:bookIndex', controller.updateBook); // Update price

/**
 * GET /book/author/:author
 *
 * Retrieves all books by this author that are on the bookshelf.
 *
 * Parameters Required:
 *  author - the author of the books
 *
 * Example Response:
 * {
 *   "bookcase": [
 *       {
 *           "index": 2,
 *           "book": {
 *               "title": "The Stand",
 *               "author": "Stephen King",
 *               "price": 25
 *           }
 *       },
 *       {
 *           "index": 4,
 *           "book": {
 *               "title": "Carrie",
 *               "author": "Stephen King",
 *               "price": 20
 *           }
 *       }
 *   ]
 * }
 */
router.get('/book/author/:author', controller.getBookByAuthor);

/**
 * GET /book/title/:title
 *
 * Returns all books with this title
 *
 * Parameters Required:
 *  title - the title of the book
 *
 * Example Response:
 * {
 *   "bookcase": [
 *       {
 *           "index": 4,
 *           "book": {
 *               "title": "Carrie",
 *               "author": "Stephen King",
 *               "price": 20
 *           }
 *       }
 *   ]
 * }
 */
router.get('/book/title/:title', controller.getBookByTitle);

/**
 * GET /books
 *
 * Returns all the books in the bookstore.
 *
 * Parameters Required:
 *
 * Example Response:
 * {
 *   "bookcase": [
 *       {
 *           "title": "Fellowship of the Ring",
 *           "author": "JRR Tolkein",
 *           "price": 20
 *       },
 *       {
 *           "title": "The Righteous Mind",
 *           "author": "Jonathan Haidt",
 *           "price": 25
 *       }
 *   ]
 * }
 */
router.get('/books', controller.getAllBooks);

/**
 * POST /book
 *
 * Add a new book to the bookstore.
 *
 * Example Request:
 * {
 *   "title": "Carrie",
 *   "author": "Stephen King",
 *   "price": 20
 * }
 *
 * Example Response:
 * {
 *   "book": {
 *       "index": 4,
 *       "book": {
 *           "title": "Carrie",
 *           "author": "Stephen King",
 *           "price": 20
 *       }
 *   }
 * }
 */
router.post('/book', controller.createBook);

/**
 * DELETE /book/buy/:bookIndex
 *
 * Parameters Required:
 *  bookIndex - the index of the book
 *
 * Response Status:
 *  204
 */
router.delete('/book/buy/:bookIndex', controller.buyBook);

/**
 * Example endpoint for returning a file
 */
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

module.exports = router;