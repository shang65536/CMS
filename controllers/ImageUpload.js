exports.upload = function(req, res, callback) {
	try {
		console.log('--------------------------');
		//定义目标路径
		var path = 'images/upload';	
		console.log(req.files);
		callback('d');
	} catch (e) {
		console.log(e);
		callback(e);
	}
};