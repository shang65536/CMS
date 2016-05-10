var pageViewModel = function(data) {
	var self = this;
	self.tableList = ko.mapping.fromJS([]);
	//获取全部的数据的列表
	var getAll = function() {
		$.ajax({
				url: '/api/product/getTypeList',
				type: 'GET'
			})
			.done(function(msg) {
				ko.mapping.fromJS(msg, self.tableList);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	}
	getAll();
	//基本信息
	self.TypeInfo = ko.mapping.fromJS({
			name: "",
			parent: '',
			describe: "",
			createTime: "",
			updateTime: ""
		})
		//保存基本信息
	self.seaveTypeInfo = function(event, data) {
		//调用后台存放数据			
		var request = ko.mapping.toJS(self.TypeInfo);
		request.parent = $('#selectTypeParent').find('option:selected').attr('value');		
		$.ajax({
				url: '/api/product/addType',
				type: 'post',
				data: request
			})
			.success(function(msg) {				
				$('#myModal').modal('hide');
				getAll();
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