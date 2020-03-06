// var mongoose = require('mongoose');
// mongoose.connect('mongodb://http://localhost:5000');
//
// var artistSchema = new mongoose.Schema({
//     id: Integer,
//     id_artist: Integer,
//     name: String,
//     href: String,
//
// }, { collection: 'Artist' });
// module.exports = { Mongoose: mongoose, CustomerSchema: artistSchema }
//
// var playListSchema = new mongoose.Schema({
//     id: Integer,
//     id_play_list: Integer,
//     name: String,
//     href: String,
//
// }, { collection: 'Playlist' });
// module.exports = { Mongoose: mongoose, CustomerSchema: playListSchema }
//
// // var userSchema = new mongoose.Schema({
// //     fullname: String,
// //     email: String,
// //     password: String,
// //     created_at: Date
// // });
// // exports.User = mongoose.model('User', userSchema);

var db_string = 'mongodb://http://localhost:5000';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error: Database connection failed!'));

db.once('open', function(){

    var artistSchema = new mongoose.Schema({
        id: Integer,
        id_artist: Integer,
        name: String,
        href: String
    });
    exports.User = mongoose.model('Artist', artistSchema);

    var playListSchema = new mongoose.Schema({
        id: Integer,
        id_play_list: Integer,
        name: String,
        href: String
    });
    exports.User = mongoose.model('Playlist', playListSchema);

    var musicSchema = new mongoose.Schema({
        id: Integer,
        id_music: Integer,
        name: String,
        href: String
    });
    exports.User = mongoose.model('Music', musicSchema);

});