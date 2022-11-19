const express = require("express")
const router = express.Router()
const places = require('../models/places');

// INDEX
router.get('/', (req, res) => {
    res.render('places/index', {
        places
    });
});

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
});

// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
});

module.exports = router