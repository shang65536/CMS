var config = require('../config');
var mysql = require('mysql');

// 获取数据库链接
var pool = mysql.createPool({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database,
	port: config.mysql.port
});

exports.query = function(sql, data, callback) {
	try {	
		//如果没有传递参数则默认数据为空。
		var defaultData = data;			
		var callback = callback;
		if (typeof(data) == 'function') {
			defaultData = [];
			callback = data;
		}		
		pool.getConnection(function(err, conn) {
			if (err) {
				console.log('数据库链接错误');
				console.log(err);
				return callback(err);
			}
			conn.query(sql, defaultData, function(err, data) {
				if (err) {
					console.log(err);
					return callback(err);
				}
				console.log('执行成功!');
				conn.release();
				callback(data);
			});

		})
	} catch (e) {
		console.log(e);
		callback(data);
	}
}