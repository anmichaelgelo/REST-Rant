const express = require("express");
const router = express.Router();
const db = require('../models');

// INDEX
router.get('/', (req, res) => {
    db.Place.find() // get all documents from Place collection
        .then(places => {
            res.render('places/index', {
                places
            });
        })
        .catch(err => {
            console.log(err) // show error in the console
            res.render('error404') // render 404 page if error occurs
        })
});

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
});

// CREATE
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places');
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
                res.render('places/new', { message })
            } else {
                res.render('error404')
            }
        });
});

// SHOW 
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id) // pass the object id
        .then(place => {
            res.render('places/show', { place }) // pass the selected place
        }).catch(err => {
            console.log(err); // show error in the console
            res.render('error404'); // render 404 page if error occurs
        });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
        res.render('error404')
    } else {
        res.render('places/edit', { 
            place: places[id],
            id: id
        })
    }
});

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
        res.render('error404')
    } else {
        // Dig into req.body and make sure data is valid
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
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})  

// DELETE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
      res.render('error404')
    } else {
      places.splice(id, 1)
      res.redirect('/places')
    }
});

module.exports = router