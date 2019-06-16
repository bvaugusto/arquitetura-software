var express = require('express');
var router = express.Router();
var controller = require('../controllers/artistController');

router.get('/', controller.list);
router.get('/:id', controller.get);

module.exports = router;
