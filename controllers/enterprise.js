var mysql = require('../DB/index');
exports.add = function(req,res,callback) {
	console.log('add');
	var sql = 'insert into enterprise values(?,?)';
	var data = [req.body.name,req.body.createTime];
	mysql.query(sql, data, function(data) {
		return callback(data);
	});
};