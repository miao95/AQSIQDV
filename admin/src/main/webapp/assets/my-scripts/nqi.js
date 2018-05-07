$(function () {
    //js初始化方法
    initTimeSelects("year_name");
    initProvinceSelects("area_name");

    drawLineChart("c1_stddiv_province");
});

//查询当地情况面板
function queryMain(){
    $('#myModal').on('show.bs.modal', centerModals("myModal"));
    $("#myModal").modal();

    //页面大小变化是仍然保证模态框水平垂直居中
    $(window).on('resize', centerModals("myModal"));
}

//查询制修订等情况
function queryStandard(){
    $.ajax({
        type: "POST",//为post请求
        url: "/basis/findStandardByParams.action",
        data: $('#query-standard-fm').serialize(),//将该表单序列化
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            console.log("success");
        }
    });
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

/**
 * 条形图，显示最近一年全部省份总体制修订数量
 * @param domId
 */
function drawLineChart(domId) {
    var data2016 = [253,220,215,211,208,205,203,199,185,179,169,140,139,137,131,124,122,121,118,94,94,93,90,90,78,71,67,63,52,50,10];
    var yAxisData = ['安徽','四川','江苏','山西','广西','山东','辽宁','黑龙江','吉林','河南','广东','新疆','甘肃','宁夏','内蒙古','河北','天津','北京','湖南','湖北','贵州','云南','福建','重庆','海南','上海','陕西','青海','江西','浙江','西藏'];

    $.ajax({
        type: "POST",//为post请求
        url: "/basis/findTotalStandardForAllProvinces.action",
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var xData = data.x.split(",");
            var yData = data.y.split(",");
            var std_province_option = {
                title:[
                    {text:"各省标准制修订数（单位：个）",x: '15%', y: '0%',textStyle:{color:"#fff",fontSize:"14"}},
                ],
                grid: [
                    {x: '8%', y: '7%', width: '85%', height: '80%'},
                ],
                tooltip: {
                    formatter: '{b} ({c})'
                },

                xAxis: [
                    {
                        data:xData,
                        axisLabel: {
                            show:true,
                            rotate:30,
                            interval:0,
                            textStyle:{
                                color:'#fff'
                            }
                        },
                        type:'category',
                    },
                ],
                yAxis: [
                    {
                        type:'value',
                        axisLabel: {show:true,
                            textStyle:{
                                color:'#fff'
                            }
                        },
                    }
                ],
                series: [
                    {
                        name: '各省标准制修订数（单位：个）',
                        type: 'bar',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        barWidth:'45%',
                        itemStyle:{normal:{color:'#ffff66'}},
                        data: yData
                    },

                ]
            };

            var std_chart_province = echarts.init(document.getElementById(domId));
            std_chart_province.setOption(std_province_option);
        }
    });


}

