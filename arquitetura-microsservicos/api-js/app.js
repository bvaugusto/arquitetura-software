var app 			= require('./app_config.js');

var userController 	= require('./controller/userController.js');

var validator = require('validator');

app.get('/', function(req, res){
	res.end('on');

	// console.log('Entrou');
	// console.log(req);
	// console.log(res);

	var Client = require('instagram-private-api').V1;
	var device = new Client.Device('someuser');
	var storage = new Client.CookieFileStorage(__dirname + '/cookies/someuser.json');

// And go for login
	Client.Session.create(device, storage, 'bvaugusto', 'PtfbGS2@!9tsal14042017')
		.then(function(session) {
			// Now you have a session, we can follow / unfollow, anything...
			// And we want to follow Instagram official profile
			return [session, Client.Account.searchForUser(session, 'instagram')]
		})
		.spread(function(session, account) {
			return Client.Relationship.create(session, account.id);
		})
		.then(function(relationship) {
			console.log(relationship.params)
			// {followedBy: ... , following: ... }
			// Yey, you just followed @instagram
		})
});

//get list users
app.get('/users', function(req, res){
	userController.list(function(resp){
		res.json(resp);
	});
});

//get user id
app.get('/users/:id', function(req, res) {
	// console.log(req.param);return;
	// req.param;return;
	var id = validator.trim(validator.escape(req.param('id')));

	userController.user(id, function(resp) {
		res.json(resp);
	});
});

//post new user
app.post('/users', function(req, res){
	//res.json(req.body);
	var fullname 	= validator.trim(validator.escape(req.param('fullname')));
	var email 		= validator.trim(validator.escape(req.param('email')));
	var password 	= validator.trim(validator.escape(req.param('password')));

	userController.save(fullname, email, password, function(resp){
		res.json(resp);
	});
});

//put update user id
app.put('/users', function(req, res){

	var id 			= validator.trim(validator.escape(req.param('id')));
	var fullname 	= validator.trim(validator.escape(req.param('fullname')));
	var email 		= validator.trim(validator.escape(req.param('email')));
	var password 	= validator.trim(validator.escape(req.param('password')));

	userController.update(id, fullname, email, password, function(resp){
		res.json(resp);
	});
});

//delete user id
app.delete('/users/:id', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));
	userController.delete(id, function(resp){
		res.json(resp);
	});
});

app.get('/instagram', function (req, res) {

	console.log('Entrou');
	console.log(req);
	console.log(res);

// 	var Client = require('instagram-private-api').V1;
// 	var device = new Client.Device('someuser');
// 	var storage = new Client.CookieFileStorage(__dirname + './cookies/someuser.json');
//
// // And go for login
// 	Client.Session.create(device, storage, 'bvaugusto', 'PtfbGS2@!9tsal14042017')
// 		.then(function(session) {
// 			// Now you have a session, we can follow / unfollow, anything...
// 			// And we want to follow Instagram official profile
// 			return [session, Client.Account.searchForUser(session, 'instagram')]
// 		})
// 		.spread(function(session, account) {
// 			return Client.Relationship.create(session, account.id);
// 		})
// 		.then(function(relationship) {
// 			console.log(relationship.params)
// 			// {followedBy: ... , following: ... }
// 			// Yey, you just followed @instagram
// 		})
});

