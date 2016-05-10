module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('display/index', {
			title: 'CMS1.0'
		});
	});	
};