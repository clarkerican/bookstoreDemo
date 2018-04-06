/**
 * A book contains the title, author, year, and the price of the book.
 */
class Book {
  constructor({ title, author, price }) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  updatePrice(newPrice) {
    this.price = newPrice;
  }
}

module.exports = Book;