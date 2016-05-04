'use strict';

var moment = require('moment');
var _ = require("underscore");
var async = require('async');
var http = require('http');
var server = http.createServer();
server.setMaxListeners(0);

// 用户id黑名单
var BlackList = [
	'admin', ''
];


function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


//定义两个方法1、添加到访问队列。2、从访问队列中移除
//var _ = require('Underscore');

var apiThreshold = [{
	address: '192.168.1.2',
	num: '1'
}]

//工作队列
var WorkQueue = [];

//添加工作队列
exports.addWorkQueue = function(req, res, callback) {
	try {
		console.log('-------------进入【addWorkQueue】方法-------------');
		var key = guid();
		var currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
		//获取参数： req.body.IP
		var IP = req.body.IP;
		//验证当前IP下的运行数量是到达定义阀值
		var Queue = _.findWhere(WorkQueue, {
			key: IP
		});
		if (Queue == undefined) {
			var temp = {
				key: IP,
				value: [{
					'key': key,
					'createTime': currentTime,
					'weight': 0
				}]
			}
			WorkQueue.push(temp);
			return callback('', key);
		};
		var threshold = _.findWhere(apiThreshold, {
			'address': IP
		});
		if (threshold == undefined) {
			//没有定义服务器的最大数量
			return callback(key);
		}

		if (Queue.value.length <= threshold.num) {
			//未到达阀值
			Queue.value.push({
				'key': key,
				'createTime': currentTime,
				'weight': 0
			});
			return callback('', key);
		}

		if (Queue.value.length > threshold.num) {
			console.log('-----------------我需要等到--------------');
			res.statusCode = '202';
		};
	} catch (e) {
		console.log(e);
	}

};

//移除工作队列
exports.deleteWorkQueu = function(req, res, callback) {
	try {

	} catch (e) {
		console.log(e);
	};

};