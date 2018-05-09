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
function initTimeSelects(domId){
    var data = getYearList(5);
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
/*function drawLineChart(domId) {
    $.ajax({
        type: "POST",//为post请求
        url: "/basis/findTotalStandardForAllProvinces.action",
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            var xData = json.x.split(",");
            var yData = json.y.split(",");
            var std_province_option = {
                title:[
                    {
                        text:"各省标准制修订数（单位：个）",
                        left:"center",
                        textStyle:{
                            color:"#fff",
                            fontSize:"14"
                        }},
                ],
                legend: {
                    data:['制定','修订']
                },
                grid: [
                    {x: '8%', y: '7%', width: '85%', height: '80%'}
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
                        name: '制定',
                        type: 'bar',
                        stack: 'heap',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        barWidth:'20%',
                        itemStyle:{
                            normal:{
                                color:'#ffff66'
                            }
                         },
                        data: yData
                    },
                    {
                        name: '修订',
                        type: 'bar',
                        stack: 'heap',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        barWidth:'20%',
                        itemStyle:{
                            normal:{
                                color:'#ff6666'
                            }
                        },
                        data: yData
                    },

                ]
            };

            var std_chart_province = echarts.init(document.getElementById(domId));
            std_chart_province.setOption(std_province_option);
        }
    });


}*/

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
            var zdData = json.zd;
            var xdData = json.xd;
            var dataMap = {};

            dataMap.dataPI = dataFormatter(zdData);

            dataMap.dataSI = dataFormatter(xdData);

            option = {
                baseOption: {
                    timeline: {
                        // y: 0,
                        axisType: 'category',
                        // realtime: false,
                        // loop: false,
                        autoPlay: true,
                        // currentIndex: 2,
                        playInterval: 3000,
                        // controlStyle: {
                        //     position: 'left'
                        // },
                        data: [
                            '2012-01-01','2013-01-01','2014-01-01', '2015-01-01', '2016-01-01'
                        ],
                        label: {
                            textStyle: {
                                "color": "#fff"
                            },
                            formatter : function(s) {
                                return (new Date(s)).getFullYear();
                            }
                        },
                        itemStyle: {//轴线上点的样式
                            color: '#fff'
                        },
                        controlStyle:{//控制按钮的样式和左右箭头的样式
                            normal: {
                                "borderColor": "#fff"
                            }
                        },
                        lineStyle: {//轴线的样式
                            color: '#fff'
                        }
                    },
                    tooltip: {
                    },
                    legend: {
                        x: 'right',
                        data: ['制定', '修订'],
                        textStyle: {
                            color: '#fff'
                        }

                    },
                    calculable : true,
                    grid: {
                        top: 80,
                        bottom: 100,
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow',
                                label: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value.replace('\n', '');
                                    }
                                }
                            }
                        }
                    },
                    xAxis: [
                        {
                            type:'category',
                            axisLabel:{
                                show:true,
                                rotate:30,
                                interval:0,
                                textStyle:{
                                    color:'#fff'
                                }
                             },
                            data:[
                                '北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江',
                                '上海','江苏','浙江','安徽','福建','江西','山东','河南',
                                '湖北','湖南','广东','广西','海南','重庆','四川','贵州',
                                '云南','西藏','陕西','甘肃','青海','宁夏','新疆'
                            ],
                            splitLine: {show: false}
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '数量（单位：个）',
                            nameTextStyle:{
                                color: '#fff'
                            },
                            axisLabel:{
                                show: true,
                                textStyle:{
                                    color:'#fff'
                                }
                            }

                        }
                    ],
                    series: [
                        {
                            name: '制定',
                            type: 'bar',
                            stack: 'heap',
                            itemStyle: {
                                normal:{
                                    color: '#fff666'
                                }
                            }
                        },
                        {
                            name: '修订',
                            type: 'bar',
                            stack: 'heap',
                            itemStyle: {
                                normal:{
                                    color: '#ff6666'
                                }
                            }
                        }
                    ]
                },
                options: [
                    {
                        title: {
                            text: '2012年各省标准制修订数',
                            left:"center",
                            textStyle:{
                                color:"#fff",
                                fontSize:"14"
                            }
                        },
                        series: [

                            {data: dataMap.dataPI['2012']},
                            {data: dataMap.dataSI['2012']},

                        ]
                    },
                    {
                        title : {
                            text: '2013年各省标准制修订数',
                            left:"center",
                            textStyle:{
                                color:"#fff",
                                fontSize:"14"
                            }
                        },
                        series : [

                            {data: dataMap.dataPI['2013']},
                            {data: dataMap.dataSI['2013']},

                        ]
                    },
                    {
                        title : {
                            text: '2014年各省标准制修订数',
                            left:"center",
                            textStyle:{
                                color:"#fff",
                                fontSize:"14"
                            }
                        },
                        series : [

                            {data: dataMap.dataPI['2014']},
                            {data: dataMap.dataSI['2014']},

                        ]
                    },
                    {
                        title : {
                            text: '2015年各省标准制修订数',
                            left:"center",
                            textStyle:{
                                color:"#fff",
                                fontSize:"14"
                            }
                        },
                        series : [

                            {data: dataMap.dataPI['2015']},
                            {data: dataMap.dataSI['2015']},

                        ]
                    },
                    {
                        title : {
                            text: '2016年各省标准制修订数',
                            left:"center",
                            textStyle:{
                                color:"#fff",
                                fontSize:"14"
                            }
                        },
                        series : [

                            {data: dataMap.dataPI['2016']},
                            {data: dataMap.dataSI['2016']},

                        ]
                    }

                ]
            };

            var std_chart_province = echarts.init(document.getElementById(domId));
            std_chart_province.setOption(option);
        }
    });

}


function dataFormatter(arr) {
    var pList = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'];
    var temp;
    var index = 0;
    var obj = {};
    for (var year = 2012; year <= 2016; year++) {
        temp = arr[index][year];
        var tempArr = [];
        for (var i = 0, l = temp.length; i < l; i++) {
            var element = {
                name : pList[i],
                value : temp[i]
            }
            tempArr.push(element);
        }
        obj[year] = tempArr;

        index++;
    }
    return obj;
}

