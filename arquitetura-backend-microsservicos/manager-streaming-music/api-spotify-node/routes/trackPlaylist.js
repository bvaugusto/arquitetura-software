var express = require('express');
var router = express.Router();
var controller = require('../controllers/trackPlaylistController');

router.get('/', controller.list);
module.exports = router;
