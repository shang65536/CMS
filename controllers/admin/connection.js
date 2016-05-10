var mysql = require('../../DB/index');
var moment = require("moment");
var tools = require('../../public/threeScript/Tool/Tools');

//添加企业的基本信息
exports.Add = function(req, res, callback) {
	var guid = tools.guid();
	console.log('--------------------');
	console.log(guid);
	var currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
	var par = req.body;
	var data = [guid, par.address, par.phone, par.tel, par.Email, par.QQ, par.firstPeople];
	var sql = 'insert into connection values(?,?,?,?,?,?,?)';
	mysql.query(sql, data, function(data) {
		return callback(data);
	});
};
//编辑企业的基本信息
exports.Edit = function(req, res, callback) {
		var sql = 'select * from news_type';
		mysql.query(sql, function(data) {
			return callback(data);
		});
	}
	//获取企业基本信息
exports.getInfoMation = function(req, res, callback) {		
	var sql = 'select * from connection limit 1';	
	mysql.query(sql, function(data) {
		return callback(data);
	});
}