var mysql = require('../DB/index');
var moment = require("moment");
exports.add = function(req,res,callback) {
	console.log('add');
	var sql = 'insert into enterprise values(?,?,?)';
	var data = [req.body.name,req.body.createTime,moment().format('YYYY-MM-DD hh:mm:ss')];
	mysql.query(sql, data, function(data) {
		return callback(data);
	});
};