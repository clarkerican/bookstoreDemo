const Bookcase = require('../Objects/Bookcase');

/* Instantiates a new bookcase object. This variable is constant so it's value cannot be changed */
const bookcase = new Bookcase();

/**
 * Returns the book specified by the index in the parameters.
 *
 * @param req - the request
 * @param res - the response
 * @param next - the next middleware
 * @returns {Promise<void>}
 */
async function getBookByIndex(req, res, next) {
  try {
    const bookIndex = req.params.bookIndex;
    const book = bookcase.getBookByIndex(bookIndex);
    res.status(200).send({ book });
  } catch (err) {
    next(err);
  }
}

/**
 * Returns all books by author in the parameters.
 *
 * @param req - the request
 * @param res - the response
 * @param next - the next middleware
 * @returns {Promise<void>}
 */
async function getBookByAuthor(req, res, next) {
  try {
    const author = req.params.author;
    const books = bookcase.searchBooksByAuthor(author);
    res.status(200).send({ bookcase: books });
  } catch (err) {
    next(err);
  }
}

/**
 * Returns the books with the title from the parameters.
 *
 * @param req - the request
 * @param res - the response
 * @param next - the next middleware
 * @returns {Promise<void>}
 */
async function getBookByTitle(req, res, next) {
  try {
    const title = req.params.title;
    const books = bookcase.searchBooksByTitle(title);
    res.status(200).send({ bookcase: books });
  } catch (err) {
    next(err);
  }
}

/**
 * Updates the book at the index specified by the parameters with the price from the body of the request.
 *
 * @param req - the request
 * @param res - the response
 * @param next - the next middleware
 * @returns {Promise<void>}
 */
async function updateBook(req, res, next) {
  try {
    const bookIndex = req.params.bookIndex;
    const price = req.body.price;
    const updatedBook = bookcase.updateBookPrice(bookIndex, price);
    res.status(200).send( updatedBook );
  } catch (err) {
    next(err);
  }
}

/**
 * Create a new book with the information from the parameters.
 *
 * @param req - the request
 * @param res - the response
 * @param next - the next middleware
 * @returns {Promise<void>}
 */
async function createBook(req, res, next) {
  try {
    const book = req.body;
    const newBook = bookcase.addBook(book);
    res.status(200).send({ book: newBook });
  } catch (err) {
    next(err);
  }
}

/**
 * Removes a book from the bookcase.
 *
 * @param req - the request
 * @param res - the response
 * @param next - the next middleware
 * @returns {Promise<void>}
 */
async function buyBook(req, res, next) {
  try {
    const bookIndex = req.params.bookIndex;
    bookcase.removeBook(bookIndex);
    res.status(204).send()
  } catch (err) {
    next(err);
  }
}

/**
 * Returns all the books from the bookcase.
 * @param req - the request
 * @param res - the response
 * @param next - the next middleware
 * @returns {Promise<void>}
 */
async function getAllBooks(req, res, next) {
  try{
    const books = bookcase.viewBooks();
    res.status(200).send({ bookcase: books });
  } catch (err) {
    next(err);
  }
}

/* Each function could be imported separately or all together. They must be accessed by their name when imported. */
module.exports.getBookByIndex = getBookByIndex;
module.exports.getBookByAuthor = getBookByAuthor;
module.exports.getBookByTitle = getBookByTitle;
module.exports.updateBook = updateBook;
module.exports.createBook = createBook;
module.exports.buyBook = buyBook;
module.exports.getAllBooks = getAllBooks;