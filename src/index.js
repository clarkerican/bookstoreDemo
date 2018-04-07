const express = require('express');
const routes = require('./Routes/routes');

const app = express();

// routes
app.use('/', routes);

// set our port
const port = process.env.PORT || 8080;

// start app at localhost:8080
app.listen(port);

console.log(`Listening on ${port}`);
module.exports = app;