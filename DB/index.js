var config = require('../config');
var mysql = require('mysql');
console.log(config.mysql);

// 获取数据库链接
var pool = mysql.createPool({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database,
	port: config.mysql.port
});

exports.query = function(sql, data, callback) {
	console.log('执行query方法');
	console.log(sql);
	console.log(data)
	pool.getConnection(function(err, conn) {	
		if (err) {
			console.log('数据库链接错误');
			console.log(err);
			return callback(err);
		}
		conn.query(sql, data, function(err, data) {
			conn.release();
			callback(data);
		});

	})

}