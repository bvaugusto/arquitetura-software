// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/artistController')

// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.post('/', controller.post);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);
// module.exports = router;


var express = require('express');
var router = express.Router();
var controller = require('../controllers/artistController');

router.get('/', controller.list);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
