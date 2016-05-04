var mysql = require('../DB/index');
var moment = require("moment");
exports.add = function(req,res,callback) {	
	var sql = 'insert into enterprise values(?,?,?)';
	var data = [req.body.name,moment().format('YYYY-MM-DD hh:mm:ss'),req.body.introduce];
	console.log(data);
	mysql.query(sql, data, function(data) {
		return callback(data);
	});
};