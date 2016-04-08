var enterprise = require('../controllers/enterprise');
var db = require('../DB/index');
module.exports = function(app) {
	app.post('/api/*', function(req, res) {
		// console.log(req.body);
		//处理参数并调用后台的方法
		enterprise.add(req.body, function(resule) {			
			res.send(resule);
		});
	});
};