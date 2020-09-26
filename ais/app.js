const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./src/movies/movie.model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
