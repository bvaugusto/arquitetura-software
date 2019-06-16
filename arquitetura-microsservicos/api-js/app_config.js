var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');

var allowCors = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '127.0.0.1:5000');
	res.header('Access-Control-Allow-Origin', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Origin', 'Content-Type');
	res.header('Access-Control-Allow-Origin', 'true');
	next();
}

app.listen(5000);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));