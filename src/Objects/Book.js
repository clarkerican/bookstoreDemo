/**
 * A book contains the title, author, year, and the price of the book.
 *
 * Note: The constructor is interesting because it takes on argument, a json object containing the whitelisted
 * fields.  The json object can contain many more fields, but only the ones specified will be used and can be
 * used as normal variables.
 */
class Book {
  constructor({ title, author, price }) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  /**
   * Updates this book with the new price.
   *
   * @param newPrice
   */
  updatePrice(newPrice) {
    this.price = newPrice;
  }
}
/* The default export is the class */
module.exports = Book;