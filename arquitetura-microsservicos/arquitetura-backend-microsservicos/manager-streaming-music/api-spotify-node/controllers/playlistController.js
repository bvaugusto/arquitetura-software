var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

var token = 'BQCfvk8rz5nRoqyC6XJvD7mmBE9xVHDubR3TXk5LsBnazymI8FZdd8GSppE2Ji5tM1Za4KM3KfhFndOE1auQJmdO6QI0i4_RFJEQ9jH1ltAL40wCvc0X4Mwc1dGujb4FDfQtamFpzjnRXC_cK7IkkriRUvvHRYgYPZkOD6jY-4P9Naqd-JEeEGCuOlkQ1VdVBkxeFFpOelGEdLCETDBSI65OlhI-hoeKtRoYU8sdLh-2a9j0TyMdWUnfBOtSsOY-BfCuyeyA7EzehSBo';

spotifyApi.setAccessToken(token)

exports.list = (req, res, next) => {

    let token = req.headers.access_token;
    spotifyApi.setAccessToken(token)

    // Get a user's playlists
    spotifyApi.getUserPlaylists('bvaugusto')
        .then(function(data) {
            res.status(200).send(data.body);
        },function(err) {
            res.send(err);
        });
};

exports.getPlaylistTracks = (req, res, next) => {

    let token = req.headers.access_token;
    spotifyApi.setAccessToken(token)

    let playlistId = '7o9g41z6KY76Q7wPSvDA49';
    let options = '';
    // market=ES&fields=name&limit=100&offset=10
    let callbacks = {offset: 10, limit: 10, fields: 'items'};

    // Get tracks in a playlist
    spotifyApi.getPlaylistTracks(playlistId)
        .then(
            function(data) {
                res.status(200).send(data.body);
            },
            function(err) {
                res.send(err);
            }
        );
}

exports.create = (req, res, next) => {

    let token = req.headers.access_token;
    let playlist = req.body.playlist;
    let userId = 'bvaugusto'; //req.body.userId;
    let options = { 'public' : true }; // req.body.options

    spotifyApi.setAccessToken(token)

    spotifyApi.createPlaylist(userId, playlist, options)
        .then(function(data) {
            res.status(200).send(data);
        }, function(err) {
            res.send(err);
        });
};

exports.search = (req, res, next) => {

    let token = req.headers.access_token;
    spotifyApi.setAccessToken(token)

    // Get an artist
    spotifyApi.getArtist(req.params.id)
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.status(400).send(err);
        });
};

exports.addTracksToPlaylist = (req, res, next) => {

    let token = req.headers.access_token;
    let playlistId = '7o9g41z6KY76Q7wPSvDA49';
    let tracks = ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"];
    let options = {position : 5};

    spotifyApi.setAccessToken(token)

    // Add tracks to a specific position in a playlist
    spotifyApi.addTracksToPlaylist(playlistId, tracks,options)
        .then(function(data) {
            console.log('Added tracks to playlist!');
            res.status(200);
        }, function(err) {
            res.send(err);
        });
};

exports.removeTracksFromPlaylist = (req, res, next) => {

    // Remove all occurrence of a track
    let playlistId = '5ieJqeLJjjI8iJWaxeBLuK';
    let tracks = ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"];
    let token = req.headers.access_token;
    // var tracks = [{ uri : "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }];
    let options = { snapshot_id : "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9" };

    spotifyApi.setAccessToken(token)

    spotifyApi.removeTracksFromPlaylist(playlistId, tracks, options)
        .then(function(data) {
            console.log('Tracks removed from playlist!');
        }, function(err) {
            console.log('Something went wrong!', err);
        });
};