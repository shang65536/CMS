module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			title: 'Express'
		});
	});
	// 焦点图管理
	app.get('/FocusMap',function(req,res){		
		res.render('FocusMap/index');		
	})
	//联系方式
	app.get('/connection', function(req, res) {
		res.render('connection/index');
	});
	//企业信息
	app.get('/enterpris', function(req, res) {
		res.render('EnterpriseManagement/index');
	});
	// 产品相关
	app.get('/product', function(req, res) {
		res.render('product/typeList');
	});
	app.get('/product/type', function(req, res) {
		res.render('product/typeList');
	});
	app.get('/product/list', function(req, res) {
		res.render('product/productList');
	});
	// 新闻相关
	app.get('/NewsManagement', function(req, res) {
		res.render('NewsManagement/newsType');
	});
	app.get('/NewsManagement/type', function(req, res) {
		res.render('NewsManagement/newsType');
	});
	app.get('/NewsManagement/list', function(req, res) {
		res.render('NewsManagement/newsList');
	});
	// 图表
	app.get('/echart', function(req, res) {
		res.render('echart/echartIndex');
	});
};