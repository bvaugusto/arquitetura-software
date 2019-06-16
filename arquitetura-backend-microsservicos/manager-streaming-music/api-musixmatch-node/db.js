var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-musixmatch-node');
 
var customerSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'api-musixmatch-node' }
);
 
module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }