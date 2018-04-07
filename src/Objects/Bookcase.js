const Book = require('./Book');
const BookNotFoundException = require('./../Errors/BookNotFoundException');
/**
 * The Bookcase houses all the books for sale at the library.  This will serve as a cache for all
 * the books. I will pre-populate it so that we have a small number of books to start with when
 * starting the server.
 *
 * Note: Arrays in javascript do not have a set size.  Items can continuously be appended to the end,
 * and they do not need to have the same type.
 */
class Bookcase {
  constructor() {
    this.books = [];

    /* Add a couple books to start to make testing easier */
    this.addBook({ title: 'Fellowship of the Ring', author: 'JRR Tolkein', price: 20 });
    this.addBook({ title: 'The Righteous Mind', author: 'Jonathan Haidt', price: 25 });
    this.addBook({ title: 'The Stand', author: 'Stephen King', price: 19 });
  }

  /**
   * Adds a book to the bookcase.  The input to this class should be a json object containing title,
   * author, and price.
   *
   * @param book - the json object with the fields of a book
   * @returns {{index: number, book: *}} - Returns the new book and the index it was placed
   */
  addBook(book) {
    this.books.push(new Book(book));
    const newBookIndex = this.books.length - 1;
    return { index: newBookIndex, book: this.books[newBookIndex] };
  }

  /**
   * Search for all books with a given title. If no books exist with the given title, throws a
   * BookNotFoundException.
   *
   * Note: Javascript can use the '===' to compare strings. It only returns true if the type and value
   * are equal.  Here, we convert them both to lowercase to make the comparison case-insensitive.
   *
   * @param title - search for books with this title
   * @returns {Array} - all books (and their index) in the bookcase with this title
   */
  searchBooksByTitle(title) {
    const booksWithTitle = [];
    for (let index = 0; index < this.books.length; index++) {
      const currentBook = this.books[index];
      if (currentBook.title.toLowerCase() === title.toLowerCase()) {
        booksWithTitle.push({ index: index, book: currentBook });
      }
    }
    if (booksWithTitle.length === 0) {
      throw new BookNotFoundException('No books with this title were found');
    }

    return booksWithTitle;
  }

  /**
   * Search for all books with the given author.  It is case-insensitive.
   *
   * Note: See Note for searchForBooksByTitle
   * @param author
   * @returns {Array}
   */
  searchBooksByAuthor(author) {
    const booksWithAuthor = [];
    for (let index = 0; index < this.books.length; index++) {
      const currentBook = this.books[index];
      if (currentBook.author.toLowerCase() === author.toLowerCase()) {
        booksWithAuthor.push({ index: index, book: currentBook });
      }
    }
    if (booksWithAuthor.length === 0) {
      throw new BookNotFoundException('Books with this title were not found');
    }

    return booksWithAuthor;
  }

  /**
   * Returns a book at the specified index.  Throws a BookNotFoundException if the index is outside the
   * bounds or results in no book at that index.
   *
   * Note: Here !this.books[bookIndex] will be true if there is not a book at that index.  If a string is passed
   * in for bookIndex, it would otherwise return nothing because there are no books at the index indicated by the
   * string (indices are treated like keys, so it pretends the string is a key).  So if a string is passed in,
   * !this.books[bookIndex] will return true and cause the exception to be thrown.
   *
   * @param bookIndex - the index of the book
   * @returns {*} - the book
   */
  getBookByIndex(bookIndex) {
    if (bookIndex < 0 || bookIndex > this.books.length || !this.books[bookIndex]) {
      throw new BookNotFoundException('A book with this id was not found');
    }

    return this.books[bookIndex];
  }

  /**
   * Updates the price of the book at the specified index.
   *
   * @param index - the index of the book to be updated
   * @param price - the price to update the book to
   * @returns {*}
   */
  updateBookPrice(index, price) {
    const updatedBook = this.books[index];
    updatedBook.updatePrice(price);
    return updatedBook;
  }

  /**
   * Removes a book at a certain index.
   *
   * Note: splice is preferred over delete, because delete would leave a null in the removed element's
   * place. Splice will splice together the array after the removal. Splice starts at the given index
   * and deletes the next x numbers.  Here x is 1.
   *
   * @param index - the index of the book to be removed
   */
  removeBook(index) {
    this.books.splice(index, 1);
  }

  /**
   * Returns all the books in the bookcase.
   *
   * @returns {Array} - an array of books
   */
  viewBooks() {
    return this.books
  }
}

/* This is the sole export of the class so it can be imported to a variable and then instantiated */
module.exports = Bookcase;