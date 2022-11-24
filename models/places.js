const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true, default: 'Anytown'},
    state: {type: String, required: true, default: 'USA'},
    cuisines: {type: String, required: true},
    pic: {type: String, required: true, default: 'http://placekitten.com/400/400'},
    founded: Number
});
const Place = mongoose.model('Place', placeSchema);
module.exports = Place