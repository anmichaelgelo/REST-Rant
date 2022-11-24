const mongoose = require('mongoose')
const connString = process.env.MONGO_URI;

// Connect to MONGODB
mongoose.connect(connString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if(err){ 
        console.log(err) 
    } else{ 
        console.log('connected to ' + connString)
    }
});

module.exports.Place = require('./places')