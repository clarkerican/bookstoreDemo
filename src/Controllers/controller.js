const Bookcase = require('../Objects/Bookcase');

const bookcase = new Bookcase();

async function getBookById(req, res, next) {
  try {
    const bookIndex = req.params.bookIndex;
    const book = bookcase.getBookByIndex(bookIndex);
    res.status(200).send({ book });
  } catch (err) {
    next(err);
  }
}

async function getBookByAuthor(req, res, next) {
  try {
    const author = req.params.author;
    const books = bookcase.searchBooksByAuthor(author);
    res.status(200).send({ bookcase: books });
  } catch (err) {
    next(err);
  }
}

async function getBookByTitle(req, res, next) {
  try {
    const title = req.params.title;
    const books = bookcase.searchBooksByTitle(title);
    res.status(200).send({ bookcase: books });
  } catch (err) {
    next(err);
  }
}

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

async function createBook(req, res, next) {
  try {
    const book = req.body;
    const newBook = bookcase.addBook(book);
    res.status(200).send({ book: newBook });
  } catch (err) {
    next(err);
  }
}

async function buyBook(req, res, next) {
  try {
    const bookIndex = req.params.bookIndex;
    bookcase.removeBook(bookIndex);
    res.status(204).send()
  } catch (err) {
    next(err);
  }
}

async function getAllBooks(req, res, next) {
  try{
    const books = bookcase.viewBooks();
    res.status(200).send({ bookcase: books });
  } catch (err) {
    next(err);
  }
}

module.exports.getBookById = getBookById;
module.exports.getBookByAuthor = getBookByAuthor;
module.exports.getBookByTitle = getBookByTitle;
module.exports.updateBook = updateBook;
module.exports.createBook = createBook;
module.exports.buyBook = buyBook;
module.exports.getAllBooks = getAllBooks;