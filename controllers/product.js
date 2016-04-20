var mysql = require('../DB/index');
var moment = require("moment");
var tools = require('../public/threeScript/Tool/Tools');

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
exports.getTypeList = function(req, res, callback) {
	var sql = 'select * from product_Type';
	mysql.query(sql, function(data) {
		console.log(data);
		return callback(data);
	});
}