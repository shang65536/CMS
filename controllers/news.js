var mysql = require('../DB/index');
var moment = require("moment");
var tools = require('../public/threeScript/Tool/Tools');

//添加新闻分类
exports.addType = function(req, res, callback) {
	var guid = tools.guid();
	console.log(guid);
	var currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
	var par = req.body;
	var data = [guid, par.name, par.parent, currentTime, currentTime, par.describe];
	var sql = 'insert into news_type values(?,?,?,?,?,?)';
	mysql.query(sql, data, function(data) {
		return callback(data);
	});
};
//获取新闻分类
exports.getTypeList = function(req, res, callback) {
		var sql = 'select * from news_type';
		mysql.query(sql, function(data) {
			return callback(data);
		});
	}
	//添加新闻
exports.addNews = function(req, res, callback) {
		var guid = tools.guid();
		var par = req.body;
		var currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
		var sql = 'insert into news values(?,?,?,?,?,?)';
		var data = [guid, par.name, par.type, par.describe, currentTime, currentTime];
		mysql.query(sql, data, function(data) {
			return callback(data);
		});
	}
	//获取全部新闻
exports.getNewsList = function(req, res, callback) {
	var sql = 'SELECT *,nt.name as tName,p.name as pName from product as p INNER JOIN product_type as pt on pt.id = p.type';
	mysql.query(sql, function(data) {
		return callback(data);
	});
}