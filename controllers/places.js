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
                res.render('places/new', { messageclear })
            } else {
                res.render('error404')
            }
        });
});

// SHOW 
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id) // pass the object id
        .populate('comments')
        .then(place => {
            res.render('places/show', { place }) // pass the selected place
        }).catch(err => {
            console.log(err); // show error in the console
            res.render('error404'); // render 404 page if error occurs
        });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', {
                place
            });
        })
        .catch(err => {
            console.log(err);
            res.render('error404');
        });
});

// UPDATE
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`);
        })
        .catch(err => {
            console.log(err);
            res.render('error404')
        });
})  

// DELETE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.redirect('/places');
        })
        .catch(err => {
            console.log(err);
            res.render('error404')
        });
});

// ADD COMMENTS
router.post('/:id/comment', (req, res) => {
    req.body.rant = req.body.rant 
        ? true 
        : false
        
    db.Place.findById(req.params.id)
        .then(foundPlace => {
            db.Comment.create(req.body)
                .then(createdComment => {
                    foundPlace.comments.push(createdComment.id);
                    foundPlace.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`);
                        });
                });
        })
        .catch(err => {
            console.log(err);
            res.render('error404')
        });
    // res.send(req.body);
});

router.delete('/:placeId/comment/:id', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect(`/places/${req.params.placeId}`);
        })
        .catch(err => {
            console.log(err);
            res.render('error404');
        });
});

module.exports = router