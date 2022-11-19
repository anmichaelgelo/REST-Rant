// let http = require('http');
require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const app = express();

// middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.render('error404')
})  

app.listen(port, () => {
    console.log('listening to port ' + port)
});