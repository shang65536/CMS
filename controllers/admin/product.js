var mysql = require('../../DB/index');
var moment = require("moment");
var tools = require('../../public/threeScript/Tool/Tools');

//添加产品类别
exports.addType = function(req, res, callback) {
	var guid = tools.guid();
	console.log(guid);
	var currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
	var par = req.body;
	var data = [guid, par.parent, par.name, par.describe, currentTime, currentTime];
	var sql = 'insert into product_Type values(?,?,?,?,?,?)';
	mysql.query(sql, data, function(data) {
		return callback(data);
	});
};
//获取全部产品类别
exports.getTypeList = function(req, res, callback) {
		var sql = 'select * from product_Type';
		mysql.query(sql, function(data) {
			return callback(data);
		});
	}
	//添加产品
exports.addParent = function(req, res, callback) {
		var guid = tools.guid();
		var par = req.body;
		var currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
		var sql = 'insert into product values(?,?,?,?,?,?,?)';
		var data = [guid, par.name, par.type, currentTime, currentTime, par.images, par.describe];
		mysql.query(sql, data, function(data) {
			return callback(data);
		});
	}
	//获取全部产品
exports.ProductList = function(req, res, callback) {
	var sql = 'SELECT *,pt.name as tName,p.name as pName from product as p INNER JOIN product_type as pt on pt.id = p.type';
	mysql.query(sql, function(data) {
		return callback(data);
	});
}