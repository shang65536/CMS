module.exports = function(app) {
	app.get('/admin', function(req, res) {
		res.render('admin/index', {
			title: 'CMS1.0'
		});
	});
	// 焦点图管理
	app.get('/admin/FocusMap',function(req,res){		
		res.render('admin/FocusMap/index');		
	})
	//联系方式
	app.get('/admin/connection', function(req, res) {
		res.render('admin/connection/index');
	});
	//企业信息
	app.get('/admin/enterpris', function(req, res) {
		res.render('admin/EnterpriseManagement/index');
	});
	// 产品相关
	app.get('/admin/product', function(req, res) {
		res.render('admin/product/typeList');
	});
	app.get('/admin/product/type', function(req, res) {
		res.render('admin/product/typeList');
	});
	app.get('/admin/product/list', function(req, res) {
		res.render('admin/product/productList');
	});
	// 新闻相关
	app.get('/admin/NewsManagement', function(req, res) {
		res.render('admin/NewsManagement/newsType');
	});
	app.get('/admin/NewsManagement/type', function(req, res) {
		res.render('admin/NewsManagement/newsType');
	});
	app.get('/admin/NewsManagement/list', function(req, res) {
		res.render('admin/NewsManagement/newsList');
	});
	// 图表
	app.get('/admin/echart', function(req, res) {
		res.render('admin/echart/echartIndex');
	});
};