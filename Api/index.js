var express = require('express'),
	http = require('http');
var upload = require('jquery-file-upload-middleware');

var _ = require("underscore");
var apiConfig = require('../Api/apiConfig');
var db = require('../DB/index');

module.exports = function(app) {
	app.all('/api/*', function(req, res, callback) {
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
			console.log('eror:' + e.message);
		}
	});
};