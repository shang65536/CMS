var pageViewModel = function(data) {
	var self = this;
	self.HtmlRequey = function(event) {
		$.ajax({
				url: '/api/apiSupervise/addWorkQueue',
				type: 'post',
				data: {
					IP: '192.168.1.2'
				}
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

	};
}
ko.applyBindings(new pageViewModel());