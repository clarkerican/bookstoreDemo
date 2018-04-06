const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./Routes/routes');

const app = express();

/* These are universal middlewares essentially.  They run before the routes are computed. */
app.use(morgan('dev')); // provides logging for each of the endpoints in the terminal
app.use(bodyParser.json()); // nicely formats the request as a json object
app.use(bodyParser.urlencoded({ extended: false })); // parses only UTF-8, url-encoded requests

/* Routes */
app.use('/', routes);

/* The request ends up here if it matches with no other routes, so it is a 404 Not Found error */
app.use((req, res) => {
  res.status(404).send({
    status: 404,
    message: 'Not Found',
    type: 'NotFound'
  });
});

/*
 * This handles any errors thrown but not handled by the routes. If the error already has a status
 * code, use that, otherwise, it will be a 500, Internal Server Error.
 */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

/* Set the port to 8080 */
const port = process.env.PORT || 8080;

/* Start app at specified port number */
app.listen(port);

console.log(`Listening on ${port}`);

module.exports = app;