$(function () {
    //js初始化方法
    initTimeSelects("year_name");
    initProvinceSelects("area_name");
});

//查询当地情况面板
function queryMain(){
    $('#myModal').on('show.bs.modal', centerModals("myModal"));
    $("#myModal").modal();

    //页面大小变化是仍然保证模态框水平垂直居中
    $(window).on('resize', centerModals("myModal"));
}

//模态框居中
function centerModals(domId) {
    var domId = '#' + domId;
    $(domId).each(function(i) {
        var $clone = $(this).clone().css('display','block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}

//显示最近n年的数据
function getYearList(n) {
    var dateTime = new Date();
    var year = dateTime.getFullYear();

    var yearList = new Array(n);
    for(var i = 0; i < n; i++){
        yearList[i] = year;
        year--;
    }

    return yearList;
}

//初始化日期下拉列表
function initTimeSelects(domId){
    var data = getYearList(10);
    $.each(data, function (i, item) {
        $("#" + domId).append(" <option value=\"" + item + "\">" + item + "年" + "</option>");
    });
    $("#" + domId).selectpicker('refresh');
}

function initProvinceSelects(domId) {
    $.ajax({
        type: "POST",//请求方式
        url: "/assets/json/province.json",//地址，就是json文件的请求路径
        dataType: "json",//数据类型可以为 text xml json  script  jsonp
        success: function(result){
            $.each(result, function (i, item) {
                $("#" + domId).append(" <option value=\"" + item.name + "\">" + item.name + "</option>");
            });
            $("#" + domId).selectpicker('refresh');
        }
    });
}

