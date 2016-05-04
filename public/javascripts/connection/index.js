var pageViewModel = function(data) {
	var self = this;
	self.cancleButtonShow = ko.observable(false);
	//数据源模型
	var tempModel = {
		address: "",
		phone: "",
		tel: "",
		Email: "",
		QQ: "",
		firstPeople: ""
	};
	self.DataModel = ko.mapping.fromJS(tempModel);
	//开始编辑
	self.EditButton = function(data, event) {
		$('.container').find('input').removeAttr('disabled');
		$('.seaveButton').show();
	};
	//取消编辑
	self.cancleEditButton = function(data, event) {
		$('.container').find('input').attr({
			disabled: 'disabled'
		});
		$('.seaveButton').hide();
	};
	//获取企业信息
	self.getInfoMation = function(data, event) {
		$.ajax({
				url: '/api/connection/getInfoMation',
				type: 'get',
			})
			.done(function(msg) {
				if (msg.leneth == 0) {
					self.EditButton();
					return;
				}
				self.cancleEditButton();
				ko.mapping.fromJS(msg[0], self.DataModel);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	};
	self.getInfoMation();	
	self.seaveButton = function(data, event) {
		var data = ko.mapping.toJS(self.DataModel);
		$.ajax({
				url: '/api/connection/Add',
				type: 'post',
				data: data,
			})
			.done(function(msg) {
				alert(JSON.stringify(msg));
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