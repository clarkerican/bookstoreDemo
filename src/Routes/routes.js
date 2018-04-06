const express = require('express');
// This object will hold all the routes and pass around the req/res
const router = express.Router();
// This contains all the methods from the controller class
const controller = require('../Controllers/controller');


router.get('/book/:bookIndex', controller.getBookById);

router.put('/book/:bookIndex', controller.updateBook); // Update price

router.get('/book/author/:author', controller.getBookByAuthor);

router.get('/book/title/:title', controller.getBookByTitle);

router.get('/books', controller.getAllBooks);

router.post('/book', controller.createBook);

router.delete('/book/buy/:bookIndex', controller.buyBook);


// Example endpoint for returning a file
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

module.exports = router;