var express = require('express');
var http = require('http');
var path = require('path');
var upload = require('jquery-file-upload-middleware');
var ueditor = require('ueditor');
var _ = require("underscore");
var apiConfig = require('../Api/apiConfig');
var db = require('../DB/index');

module.exports = function(app) {
	//分析api.并按照配置调用方法
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
	//处理富文本编辑器的图片上传  需要 npm install 【ueditor】
	app.use("/ueditor/ue", ueditor(path.join(__dirname, '../public'), function(req, res, next) {		
		// ueditor 客户发起上传图片请求		
		if (req.query.action === 'uploadimage') {

			// 这里你可以获得上传图片的信息
			var foo = req.ueditor;
			// 下面填写你要把图片保存到的路径 （ 以 path.join(__dirname, 'public') 作为根路径）			
			var img_url = '../public/images/ueditor';
			//	修改源码添加返回参数。自定上传升成功返回给前端的uri地址
			var return_url = '../images/ueditor';
			res.ue_up(img_url,return_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
		}
		//  客户端发起图片列表请求
		else if (req.query.action === 'listimage') {
			var dir_url = 'your img_dir'; // 要展示给客户端的文件夹路径
			res.ue_list(dir_url) // 客户端会列出 dir_url 目录下的所有图片
		}
		// 客户端发起其它请求
		else {
			res.setHeader('Content-Type', 'application/json');
			//这里填写 ueditor.config.json 这个文件的路径
			res.redirect('../threeScript/ueditor/nodejs/config.json')
		}
	}));
};