var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: '497c3fb573df48b6bec41dc9e774722d',
    clientSecret: '8c0b67e19b3c45beacf8c27491cc552d'
});

spotifyApi.clientCredentialsGrant().then(
    function(data) {
        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
);

exports.list = (req, res, next) => {

    // Search artists whose name contains 'Love'
    spotifyApi.searchArtists('Queen')
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            res.send(err);
        });

};

exports.get = (req, res, next) => {
    // Get an artist
    spotifyApi.getArtist(req.params.id)
        .then(function(data) {
            res.status(200).send(data.body);
        }, function(err) {
            console.error(err);
        });
};