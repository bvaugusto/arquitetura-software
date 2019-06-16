var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-song-lyrics-node');
 
var customerSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'api-song-lyrics-node' }
);
 
module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }