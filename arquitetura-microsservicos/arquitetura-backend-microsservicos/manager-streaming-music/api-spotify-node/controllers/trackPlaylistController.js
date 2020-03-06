var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

var token = 'BQCfvk8rz5nRoqyC6XJvD7mmBE9xVHDubR3TXk5LsBnazymI8FZdd8GSppE2Ji5tM1Za4KM3KfhFndOE1auQJmdO6QI0i4_RFJEQ9jH1ltAL40wCvc0X4Mwc1dGujb4FDfQtamFpzjnRXC_cK7IkkriRUvvHRYgYPZkOD6jY-4P9Naqd-JEeEGCuOlkQ1VdVBkxeFFpOelGEdLCETDBSI65OlhI-hoeKtRoYU8sdLh-2a9j0TyMdWUnfBOtSsOY-BfCuyeyA7EzehSBo';

spotifyApi.setAccessToken(token)

exports.list = (req, res, next) => {

    // Search artists whose name contains 'Love'
    spotifyApi.searchArtists('Queen')
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.send(err);
        });

};
