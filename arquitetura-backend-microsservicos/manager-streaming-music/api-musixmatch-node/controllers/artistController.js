// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// exports.list = function(callback){
// 	// db.User.find({}, function(error, users){
// 	// 	if(error)
// 	// 		callback({error: 'Não foi possível o retorno dos usuários!'});
// 	// 	else
// 	// 		callback(users);
//     // });
//     callback({error: 'Não foi possível o retorno dos usuários!'});
// };


exports.list = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucessoooooooo!');
};
exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};