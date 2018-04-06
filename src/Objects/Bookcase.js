const Book = require('./Book');
const BookNotFoundException = require('./../Errors/BookNotFoundException');
/**
 */
class Bookcase {
  constructor() {
    this.books = [];
  }

  searchBooksByTitle(title) {
    const booksWithTitle = [];
    for (let index = 0; index < this.books.length; index++) {
      const currentBook = this.books[index];
      if (currentBook.title.toLowerCase() === title.toLowerCase()) {
        booksWithTitle.push({ id: index, book: currentBook });
      }
    }
    if (booksWithTitle.length === 0) {
      throw new BookNotFoundException('No books with this title were found');
    }

    return booksWithTitle;
  }

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

  getBookByIndex(bookIndex) {
    if (bookIndex < 0 || bookIndex > this.books.length || !this.books[bookIndex]) {
      throw new BookNotFoundException('A book with this id was not found');
    }

    return this.books[bookIndex];
  }

  updateBookPrice(index, price) {
    const updatedBook = this.books[index];
    updatedBook.updatePrice(price);
    return updatedBook;
  }

  addBook(book) {
    this.books.push(new Book(book));
    const newBookIndex = this.books.length - 1;
    return { index: newBookIndex, book: this.books[newBookIndex] };
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  viewBooks() {
    return this.books
  }
}

module.exports = Bookcase;