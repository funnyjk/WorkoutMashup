var fs = require('fs');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index');
	});

	// app.get('*', function(req, res) {
	// 	res.redirect('/');
	// });
};