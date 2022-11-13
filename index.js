// let http = require('http');
require('dotenv').config();

const express = require('express');
let app = express();

// app.use('/auth', require('./controllers/auth'));
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

app.listen(process.env.PORT);