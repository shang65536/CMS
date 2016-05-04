var pageViewModel = function(data) {
	var self = this;
	self.TypeList = ko.mapping.fromJS([]);
	self.ProductList = ko.mapping.fromJS([]);
	//获取全部的数据的列表
	var getAllTypeList = function() {
		$.ajax({
				url: '/api/product/getTypeList',
				type: 'GET'
			})
			.done(function(msg) {
				ko.mapping.fromJS(msg, self.TypeList);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	}
	getAllTypeList();
	var getAllProductList = function() {
		$.ajax({
				url: '/api/product/ProductList',
				type: 'GET'
			})
			.done(function(msg) {
				ko.mapping.fromJS(msg, self.ProductList);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});

	};
	getAllProductList();
	//基本信息
	self.productInfo = ko.mapping.fromJS({
			name: "",
			type: '',
			describe: "",
			createTime: "",
			updateTime: "",
			images: "",
		})
		//保存基本信息
	self.seaveProductInfo = function(event, data) {
		//调用后台存放数据			
		var request = ko.mapping.toJS(self.productInfo);
		request.type = $('#selectTypeParent').find('option:selected').attr('value');
		$.ajax({
				url: '/api/product/addParent',
				type: 'post',
				data: request
			})
			.success(function(msg) {
				$('#myModal').modal('hide');
				getAllProductList();
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