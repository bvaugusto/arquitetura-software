var express = require('express');
var router = express.Router();
var controller = require('../controllers/playlistController');

router.get('/', controller.list);
router.get('/playlist-tracks', controller.getPlaylistTracks);
router.get('/search', controller.search);
router.post('/create', controller.create);
router.post('/add-tracks-playlist', controller.addTracksToPlaylist);
router.post('/remove-tracks-playlist', controller.removeTracksFromPlaylist);

module.exports = router;
