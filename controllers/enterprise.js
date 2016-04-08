var mysql = require('../DB/index');
exports.add = function(req,callback) {
	console.log('add');
	var sql = 'insert into enterprise values(?,?)';
	var data = [req.name,req.createTime];
	mysql.query(sql, data, function(data) {
		return callback(data);
	});
};