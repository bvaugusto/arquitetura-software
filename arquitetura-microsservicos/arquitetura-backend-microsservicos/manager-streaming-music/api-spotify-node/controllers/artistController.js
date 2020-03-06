var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

var token = 'BQCfvk8rz5nRoqyC6XJvD7mmBE9xVHDubR3TXk5LsBnazymI8FZdd8GSppE2Ji5tM1Za4KM3KfhFndOE1auQJmdO6QI0i4_RFJEQ9jH1ltAL40wCvc0X4Mwc1dGujb4FDfQtamFpzjnRXC_cK7IkkriRUvvHRYgYPZkOD6jY-4P9Naqd-JEeEGCuOlkQ1VdVBkxeFFpOelGEdLCETDBSI65OlhI-hoeKtRoYU8sdLh-2a9j0TyMdWUnfBOtSsOY-BfCuyeyA7EzehSBo';

spotifyApi.setAccessToken(token)

exports.search = (req, res, next) => {

    let token = req.headers.access_token
    let query = req.query.query

    spotifyApi.setAccessToken(token)
    spotifyApi.searchArtists(query)
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.send(err);
        });

};

exports.getArtist = (req, res, next) => {

    let token = req.headers.access_token
    let id = req.params.id

    spotifyApi.setAccessToken(token)
    spotifyApi.getArtist(id)
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.send(err);
        });

};

exports.getArtistAlbums = (req, res, next) => {

    let token = req.headers.access_token
    let id = req.params.id

    spotifyApi.setAccessToken(token)
    spotifyApi.getArtistAlbums(id)
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.send(err);
        });

};

exports.getArtistTopTracks = (req, res, next) => {

    let token = req.headers.access_token
    let id = req.params.id

    spotifyApi.setAccessToken(token)
    spotifyApi.getArtistTopTracks(id)
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.send(err);
        });

};

exports.getArtistRelatedArtists = (req, res, next) => {

    let token = req.headers.access_token
    let id = req.params.id

    spotifyApi.setAccessToken(token)
    spotifyApi.getArtistRelatedArtists(id)
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.send(err);
        });

};