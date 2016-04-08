var pageViewModel = function(data) {
	var self = this;

	self.database = ko.mapping.fromJS({
		name: "张三",
		createTime: "2013-01-12"

	})
	self.seaveBaseInfo = function(event, data) {
		//调用后台存放数据
		var request = ko.mapping.toJS(self.database);
		$.ajax({
				url: '/api/enterprise/add',
				type: 'post',
				data: request
			})
			.success(function(msg) {
				alert(JSON.stringify(msg));
			})
			.done(function() {
				console.log("success");
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	}
}
ko.applyBindings(new pageViewModel());