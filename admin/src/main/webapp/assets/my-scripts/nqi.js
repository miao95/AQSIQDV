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
            var xData = json.x.split(",");
            var yData = json.y.split(",");
            var dataMap = {};

            dataMap.dataPI = dataFormatter({
                //max : 4000,
                2012:[136.27,159.72,2905.73,641.42,1306.3,1915.57,1277.44,1701.5,124.94,3064.78,1583.04,2015.31,1612.24,1391.07,3973.85,3512.24,2569.3,2768.03,2665.2,2047.23,659.23,844.52,2983.51,726.22,1411.01,74.47,1220.9,678.75,155.08,184.14,1139.03],
                2013:[124.36,145.58,2562.81,554.48,1095.28,1631.08,1050.15,1302.9,114.15,2540.1,1360.56,1729.02,1363.67,1206.98,3588.28,3258.09,2147,2325.5,2286.98,1675.06,539.83,685.38,2482.89,625.03,1108.38,68.72,988.45,599.28,134.92,159.29,1078.63],
                2014:[118.29,128.85,2207.34,477.59,929.6,1414.9,980.57,1154.33,113.82,2261.86,1163.08,1495.45,1182.74,1098.66,3226.64,2769.05,1795.9,1969.69,2010.27,1458.49,462.19,606.8,2240.61,550.27,1067.6,63.88,789.64,497.05,107.4,127.25,759.74],
                2015:[112.83,122.58,2034.59,313.58,907.95,1302.02,916.72,1088.94,111.8,2100.11,1095.96,1418.09,1158.17,1060.38,3002.65,2658.78,1780,1892.4,1973.05,1453.75,436.04,575.4,2216.15,539.19,1020.56,60.62,753.72,462.27,105.57,118.94,691.07],
                2016:[101.26,110.19,1804.72,311.97,762.1,1133.42,783.8,915.38,101.84,1816.31,986.02,1200.18,1002.11,905.77,2509.14,2217.66,1378,1626.48,1695.57,1241.35,361.07,482.39,2032,446.38,837.35,54.89,592.63,387.55,83.41,97.89,628.72],
            });

            dataMap.dataSI = dataFormatter({
                //max : 26600,
                2012:[3752.48,5928.32,13126.86,6635.26,8037.69,12152.15,5611.48,5962.41,7927.89,25203.28,16555.58,8309.38,9069.2,6390.55,24017.11,15427.08,9815.94,9361.99,26447.38,5675.32,714.5,5543.04,11029.13,2194.33,3780.32,208.79,6935.59,2377.83,975.18,1056.15,3225.9],
                2013:[3388.38,4840.23,10707.68,5234,6367.69,9976.82,4506.31,5025.15,7218.32,21753.93,14297.93,6436.62,7522.83,5122.88,21238.49,13226.38,7767.24,7343.19,23014.53,4511.68,571,4359.12,8672.18,1800.06,3223.49,163.92,5446.1,1984.97,744.63,827.91,2592.15],
                2014:[2855.55,3987.84,8959.83,3993.8,5114,7906.34,3541.92,4060.72,6001.78,18566.37,11908.49,4905.22,6005.3,3919.45,18901.83,11010.5,6038.08,5687.19,19419.7,3381.54,443.43,3448.77,6711.87,1476.62,2582.53,136.63,4236.42,1527.24,575.33,662.32,1929.59],
                2015:[2626.41,3709.78,8701.34,4242.36,4376.19,7158.84,3097.12,4319.75,6085.84,16993.34,11567.42,4198.93,5318.44,3554.81,17571.98,10259.99,5082.07,5028.93,18502.2,3037.74,423.55,3057.78,5823.39,1370.03,2452.75,115.56,3861.12,1470.34,557.12,609.98,2070.76],
                2016:[2509.4,2892.53,7201.88,3454.49,3193.67,5544.14,2475.45,3695.58,5571.06,14471.26,10154.25,3370.96,4476.42,2975.53,14647.53,8282.83,4143.06,3977.72,16004.61,2425.29,364.26,2368.53,4648.79,1124.79,2038.39,98.48,2986.46,1279.32,419.03,455.04,1647.55],
            });

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


function dataFormatter(obj) {
    var pList = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'];
    var temp;
    for (var year = 2012; year <= 2016; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}

