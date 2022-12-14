require('dotenv').config();
const express = require('express');
const app = express();
const methodOverried = require('method-override');
const port = process.env.PORT;

// middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverried('_method'));

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

module.exports = app;