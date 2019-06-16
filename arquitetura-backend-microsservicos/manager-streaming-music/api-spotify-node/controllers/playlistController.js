// var db = require('../db');

var SpotifyWebApi = require('spotify-web-api-node');

var options = {"scope":"playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private"};

var spotifyApi = new SpotifyWebApi({
    clientId: '6b5a6d953f4c45c59674d3f33d240516',
    clientSecret: '4da901acb279464290a110a85bd00454'
});

spotifyApi.clientCredentialsGrant(options).then(
    function(data) {
        console.log(data)
        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
);

exports.list = (req, res, next) => {
    // Get a user's playlists
    spotifyApi.getUserPlaylists('bvaugusto')
        .then(function(data) {
            res.status(200).send(data.body);
        },function(err) {
            res.send(err);
        });
};

exports.getPlaylistTracks = (req, res, next) => {

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

    // { display_name: 'bvaugusto',
    //     external_urls: { spotify: 'https://open.spotify.com/user/bvaugusto' },
    //     followers: { href: null, total: 0 },
    //     href: 'https://api.spotify.com/v1/users/bvaugusto',
    //         id: 'bvaugusto',
    //     images: [],
    //     type: 'user',
    //     uri: 'spotify:user:bvaugusto'
    // }

    // BSZCGZjZRZWqPdG2rGzPkw
    //1e38MiHqozG6ofMnle5vYl
    // Create a private playlist
    spotifyApi.createPlaylist('bvaugusto', 'MyPlaylist', { 'public' : true })
        .then(function(data) {
            res.status(200).send(data);
        }, function(err) {
            res.send(err);
        });
};

exports.search = (req, res, next) => {

    // Get an artist
    spotifyApi.getArtist(req.params.id)
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.status(400).send(err);
        });
};

exports.addTracksToPlaylist = (req, res, next) => {

    let playlistId = '7o9g41z6KY76Q7wPSvDA49';
    let tracks = ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"];
    let options = {position : 5};

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

    // var tracks = [{ uri : "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }];
    var options = { snapshot_id : "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9" };

    spotifyApi.removeTracksFromPlaylist(playlistId, tracks, options)
        .then(function(data) {
            console.log('Tracks removed from playlist!');
        }, function(err) {
            console.log('Something went wrong!', err);
        });
};