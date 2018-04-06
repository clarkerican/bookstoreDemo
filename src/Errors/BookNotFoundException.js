class BookNotFoundException {
  constructor(message) {
    this.type = 'BookNotFoundException';
    this.message = message;
    this.status = 404;
  }
}

module.exports = BookNotFoundException;
