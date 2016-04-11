var _ = require("underscore");
var apiConfig = require('../Api/apiConfig');
var db = require('../DB/index');
module.exports = function(app) {
	app.post('/api/*', function(req, res) {
		try {			
			var api = _.findWhere(apiConfig.api, {
				path: req.url
			});
			var tempClass = require('../controllers/' + api.class);
			if (tempClass) {
				tempClass[api.function](req, res, function(err, msg) {
					if (err) {
						return res.send(err);
					}
					return res.send(msg);
				});
			}
			//动态请求方法的类。
		} catch (e) {
			console.log(e.message);
		}

	});
};