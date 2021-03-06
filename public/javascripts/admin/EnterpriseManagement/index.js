var pageViewModel = function(data) {
	var self = this;

	//初始化富文本编辑器
	var um = UE.getEditor('editor');

	//基本信息
	self.database = ko.mapping.fromJS({
		name: "ss",
		createTime: "",
		introduce: ""
	})

	//保存页面的全部信息	
	self.seaveBaseInfo = function(event, data) {
		//调用后台存放数据
		var request = ko.mapping.toJS(self.database);
		var content = um.getContent();
		request.introduce = content;
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

	//图片上传的方法
	$("#fileupload_input").fileupload({
		dataType: 'json',
		url: "/api/imageUpload/upload", //文件上传地址，当然也可以直接写在input的data-url属性内

		// formData: {
		// 	param1: "p1",
		// 	param2: "p2"
		// }, //如果需要额外添加参数可以在这里添加

		done: function(e, result) {
			alert(JSON.stringify(e));
			alert(JSON.stringify(result));
			//done方法就是上传完毕的回调函数，其他回调函数可以自行查看api

			//注意result要和jquery的ajax的data参数区分，这个对象包含了整个请求信息

			//返回的数据在result.result中，假设我们服务器返回了一个json对
		}
	})


}
ko.applyBindings(new pageViewModel());