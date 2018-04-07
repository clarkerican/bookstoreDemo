/**
 * As you can see, this is a normal class, it is not designated as an error/exception, but it
 * can still be thrown.  When the error is handled, the status, error will be used to compose
 * the response to the client.
 */
class BookNotFoundException {
  constructor(message) {
    this.type = 'BookNotFoundException';
    this.message = message;
    this.status = 404;
  }
}

/* Export the whole class */
module.exports = BookNotFoundException;
