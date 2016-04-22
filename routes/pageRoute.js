module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			title: 'Express'
		});
	});
	app.get('/enterpris', function(req, res) {
		res.render('EnterpriseManagement/index');
	});
	app.get('/product', function(req, res) {
		res.render('product/typeList');
	});
	app.get('/product/type', function(req, res) {
		res.render('product/typeList');
	});
	app.get('/product/list', function(req, res) {
		res.render('product/productList');
	});
	app.get('/NewsManagement', function(req, res) {
		res.render('NewsManagement/newsType');
	});
	app.get('/NewsManagement/type', function(req, res) {
		res.render('NewsManagement/newsType');
	});
	app.get('/NewsManagement/list', function(req, res) {
		res.render('NewsManagement/newsList');
	});
	app.get('/echart', function(req, res) {
		res.render('echart/echartIndex');
	});
};