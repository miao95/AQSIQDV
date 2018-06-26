$(function () {
    //js初始化方法
    initTimeSelects("year_name");
    initProvinceSelects("area_name");

    drawLineChart("c1_stddiv_province");
    drawPieChart("c1_stddiv_zxd", "c1_stddiv_xz");

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
    var yearName = $("#year_name").val();
    var areaName = $("#area_name").val();
    var methodName = $("#method_name").val();

    if(yearName == '' || areaName == '' || methodName == '' || yearName == '2015'
        || yearName == null || areaName == null || methodName == null){
        $('.selectpicker').selectpicker('val', "");
        $("#myModal").modal('hide');
        return;
    }
    $.ajax({
        type: "POST",//为post请求
        url: "/basis/findStandardByParams.action",
        data: $('#query-standard-fm').serialize(),//将该表单序列化
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象

            //先删除饼图，并将条形图的宽度扩大
            $('#c1_stddiv_content .r_out').remove();
            $('#c1_stddiv_province').css('margin-top', '20px');
            $('#c1_stddiv_province').css('margin-left', '0px');
            $('#c1_stddiv_province').css('width', '100%');

            //echarts绘图
            drawLineChartByParams("c1_stddiv_province", json);

            $('.selectpicker').selectpicker('val', "");

            $("#myModal").modal('hide');

        }
    });
}

//查询最近一年的
function queryAll() {
    //drawLineChart("c1_stddiv_province");

    $('.selectpicker').selectpicker('val', "");
    $("#myModal").modal('hide');
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
    /*var dateTime = new Date();
    var year = dateTime.getFullYear();*/
    var year = 2016;

    var yearList = new Array(n);
    for(var i = 0; i < n; i++){
        yearList[i] = year;
        year--;
    }

    return yearList;
}

//初始化日期下拉列表
/*function initTimeSelects(domId){
    var data = getYearList(5);
    $.each(data, function (i, item) {
        $("#" + domId).append(" <option value=\"" + item + "\">" + item + "年" + "</option>");
    });
    $("#" + domId).selectpicker('refresh');
}*/

//初始化日期下拉列表
function initTimeSelects(domId){
    $.ajax({
        type: "POST",//请求方式
        url: "/basis/nqi/getDistinctYear.action",
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(result){
            var data = JSON.parse(result);
            $.each(data, function (i, item) {
                $("#" + domId).append(" <option value=\"" + item + "\">" + item + "年" + "</option>");
            });
            $("#" + domId).selectpicker('refresh');
        }
    });

}

function initProvinceSelects(domId) {
    $.ajax({
        type: "POST",//请求方式
        url: "/basis/nqi/getDistinctProvince.action",
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(result){
            var data = JSON.parse(result);
            $.each(data, function (i, item) {
                $("#" + domId).append(" <option value=\"" + item + "\">" + item + "</option>");
            });
            $("#" + domId).selectpicker('refresh');
        }
    });
}

/*function initProvinceSelects(domId) {
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
}*/

/**
 * 条形图，显示最近一年全部省份总体制修订数量
 * @param domId
 */
function drawLineChart(domId) {
    $.ajax({
        type: "POST",//为post请求
        url: "/basis/findTotalStandardForAllProvinces.action",
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            var zdData = json['zd'].split(",");
            var xdData = json['xd'].split(",");
            var std_province_option = {
                title:[
                    {
                        text:"各省2016年标准制修订数（单位：个）",
                        left:"center",
                        textStyle:{
                            color:"#fff",
                            fontSize:"14"
                        }
                    }
                ],
                legend: {
                    data:['制订','修订'],
                    x: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                },
                grid: [
                    {x: '8%', y: '7%', width: '85%', height: '80%'}
                ],
                tooltip: {
                    formatter: '{b} ({c})'
                },
                xAxis: [
                    {
                        data:[
                            '北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江',
                            '上海','江苏','浙江','安徽','福建','江西','山东','河南',
                            '湖北','湖南','广东','广西','海南','重庆','四川','贵州',
                            '云南','西藏','陕西','甘肃','青海','宁夏','新疆'
                        ],
                        axisLabel: {
                            show:true,
                            rotate:30,
                            interval:0,
                            textStyle:{
                                color:'#fff'
                            }
                        },
                        type:'category'
                    }
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
                        name: '制订',
                        type: 'bar',
                        stack: 'heap',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        barWidth:'45%',
                        itemStyle:{
                            normal:{
                                color:'#ffff66'
                            }
                         },
                        data: zdData
                    },
                    {
                        name: '修订',
                        type: 'bar',
                        stack: 'heap',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        barWidth:'45%',
                        itemStyle:{
                            normal:{
                                color:'#ff6666'
                            }
                        },
                        data: xdData
                    },

                ]
            };

            var std_chart_province = echarts.init(document.getElementById(domId));
            std_chart_province.setOption(std_province_option);
        }
    });


}

/**
 * 查询之后显示的条形图
 * @param domId
 * @param data
 */
function drawLineChartByParams(domId, data) {
    var province = data['province'];
    var method = [];
    if(data['method'] == 'zxd'){
        method = ['制订', '修订'];
    }
    else{
        method = ['强制', '推荐'];
    }

    var std_province_option = {
        title:[
            {
                text:"省份标准数（单位：个）",
                left:"center",
                textStyle:{
                    color:"#fff",
                    fontSize:"14"
                }
            }
        ],
        legend: {
            data: method,
            x: 'right',
            textStyle: {
                color: '#fff'
            }
        },
        grid: [
            {x: '8%', y: '7%', width: '85%', height: '80%'}
        ],
        tooltip: {
            formatter: '{b} ({c})'
        },
        xAxis: [
            {
                data: province,
                axisLabel: {
                    show:true,
                    rotate:30,
                    interval:0,
                    textStyle:{
                        color:'#fff'
                    }
                },
                type:'category'
            }
        ],
        yAxis: [
            {
                type:'value',
                axisLabel: {
                    show:true,
                    textStyle:{
                        color:'#fff'
                    }
                }
            }
        ],
        series: dataFormatter(data)
    };

    var std_chart_province = echarts.init(document.getElementById(domId));
    std_chart_province.setOption(std_province_option);
}

/**
 * 数据格式化
 * @param data
 * @returns {null}
 */
function dataFormatter(data) {
    var result = [];
    var zdData = data['zd'];
    var xdData = data['xd'];
    var yearList = data['year'];

    var method = [];
    if(data['method'] == 'zxd'){
        method = ['制订', '修订'];
    }
    else{
        method = ['强制', '推荐'];
    }

    for (var i = 0; i < yearList.length; i++) {
        var year = yearList[i];
        var zdSeries = {
            name: method[0],
            type: 'bar',
            stack: year,
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle:{
                normal:{
                    color:'#ffff66'
                }
            },
            data: zdData[i][year]
        };
        var xdSeries = {
            name: method[1],
            type: 'bar',
            stack: year,
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle:{
                normal:{
                    color:'#ff6666'
                }
            },
            data: xdData[i][year]
        };

        result.push(zdSeries);
        result.push(xdSeries);
    }

    return result;
}

/**
 * 画饼图，两个饼图
 * @param pieId1
 * @param pieId2
 */
function drawPieChart(pieId1, pieId2){
    $.ajax({
        type: "POST",//为post请求
        url: "/basis/readRecentProvinceStatistics.action",
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            var zxdData = json['zxd'];
            var xzData = json['xz'];
            var std_zxd_option = {
                tooltip: {
                    show:false
                },
                color:['rgb(4,143,35)','rgb(167,140,0)'],
                legend: {
                    show:false,
                },
                series: [
                    {
                        name:'按制、修订分',
                        type:'pie',
                        radius: ['70%', '100%'],
                        avoidLabelOverlap: true,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:zxdData
                    }
                ]
            };

            var std_qztj_option = {
                tooltip: {
                    show:false
                },
                color:['rgb(4,143,35)','rgb(167,140,0)'],
                legend: {
                    show:false,
                },
                series: [
                    {
                        name:'按性质分',
                        type:'pie',
                        radius: ['70%', '100%'],
                        avoidLabelOverlap: true,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:xzData
                    }
                ]
            }

            var std_chart = echarts.init(document.getElementById("c1_stddiv_zxd"));
            std_chart.setOption(std_zxd_option);
            var std_chart_xz = echarts.init(document.getElementById("c1_stddiv_xz"));
            std_chart_xz.setOption(std_qztj_option);
        }
    });

}

