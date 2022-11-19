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
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }

    places.push(req.body)
    res.redirect('/places')
});

// SHOW 
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
      res.render('error404')
    } else {
        res.render('places/show', { 
            place: places[id],
            id
        })
    }
});

// DELETE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
      res.render('error404')
    } else {
      places.splice(id, 1)
      res.redirect('/places')
    }
})  

module.exports = router