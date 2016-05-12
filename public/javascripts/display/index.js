var pageViewModel = function(data) {
	var self = this;
	//获取企业信息
	alert('ij');
	$.ajax({
		url: '/api/homePage/Q_GetInfomation',
		type: 'post'		
	})
	.done(function(msg) {
		alert(JSON.stringify(msg));		
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});	
	//获取前十的产品分类
	//获取企业的联系方式
	//获取推荐的产品
}
ko.applyBindings(new pageViewModel());