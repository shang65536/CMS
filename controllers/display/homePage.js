var mysql = require('../../DB/index');
var moment = require("moment");
var tools = require('../../public/threeScript/Tool/Tools');

//添加新闻分类
exports.Q_GetInfomation = function(req, res, callback) {
	console.log('前端获取首页信息');
	// var guid = tools.guid();
	// console.log(guid);
	// var currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
	// var par = req.body;
	// var data = [guid, par.name, par.parent, currentTime, currentTime, par.describe];
	// var sql = 'insert into news_type values(?,?,?,?,?,?)';
	// mysql.query(sql, data, function(data) {
	// 	return callback(data);
	// });
};