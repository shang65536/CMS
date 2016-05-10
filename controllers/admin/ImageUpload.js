var upload = require('jquery-file-upload-middleware');
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
//配置中间件
upload.configure({
	uploadDir: __dirname + '/public/uploads',
	uploadUrl: '/uploads',
	imageVersions: {
		thumbnail: {
			width: 80,
			height: 80
		}
	}
});

exports.upload = function(req, res, callback) {
	try {
		console.log('----------------ccccccccccc----------');
		upload.fileHandler();
		callback();
	} catch (e) {
		console.log(e);
		callback(e);
	}
};