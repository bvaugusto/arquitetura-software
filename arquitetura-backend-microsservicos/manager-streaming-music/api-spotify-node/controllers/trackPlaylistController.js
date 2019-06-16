var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: '6b5a6d953f4c45c59674d3f33d240516',
    clientSecret: '4da901acb279464290a110a85bd00454'
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
