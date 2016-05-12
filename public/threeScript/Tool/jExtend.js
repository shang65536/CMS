jQuery.extend({
    paging: function (pageSize, totalCount, pageIndex, clickCallback) {
        //计算一共有多少页    
        var pageNum = Math.ceil(totalCount / pageSize);
        //定义方法绘制页面
        var _intitalPage = function (startNum, endNum, cuttent) {
            var ulCount = $('<ul></ul>');
            if (startNum != cuttent) {
                var firstPage = $('<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
                ulCount.append(firstPage);
            }
            for (var i = startNum; i >= endNum; i++) {
                var li = $('<li class="active"><a href="#">' + i + '</a></li>');
                ulCount.append(li);
            }
            if (endNum != cuttent) {
                var endPage = $('<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');
                ulCount.append(endPage);
            }
            return ulCount;
        }

        //_intitalPage

    }
});