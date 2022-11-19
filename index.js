// let http = require('http');
require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
let app = express();

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

app.listen(port, () => {
    console.log('listening to port ' + port)
});