var express = require('express');
var router = express.Router();
var controller = require('../controllers/artistController');

router.get('/', controller.search);
router.get('/:id', controller.getArtist);
router.get('/:id/albums', controller.getArtistAlbums);
router.get('/:id/top-tracks', controller.getArtistTopTracks);
router.get('/:id/related-artists', controller.getArtistRelatedArtists);

module.exports = router;
