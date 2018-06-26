$(function () {
    //初始化方法
    initTimeSelects("year_name_inspection");
    showSpecialDeviceInspection(2014);
});

//初始化日期下拉列表
function initTimeSelects(domId){
    $.ajax({
        type: "POST",//请求方式
        url: "/basis/special/getDistinctYear.action",
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

/**
 * 年份选择改变时,特种设备检定情况
 * @param obj
 */
function yearSelectInspectionOnChange(obj) {
    var year = $(obj).val();
    showSpecialDeviceInspection(year);

}

/**
 *
 * @param year
 */
function showSpecialDeviceInspection(year) {

    var color_init = ['#FF0F00','#FF6600','#FF9E01','#FCD202','#F8FF01','#B0DE09','#04D215','#0D8ECF','#0D52D1','#2A0CD0','#8A0CCF','#CD0D74'];
    var color_sport = ['#ff6666','#ffff00','#006699','#339933','#ffffcc','#ffffff','#ff0033','#99cc33','#cccc00','#990066','#9999cc','#66FF33'];

    $.ajax({
        type: "POST",//为post请求
        url: "/basis/showSpecialDeviceInspection.action",
        data: {
            year: year
        },
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var dataall = JSON.parse(data); //json字符串转为json对象

            var provinces = dataall['province'];
            var yvalue = dataall['features'];
            option_specialequipmentinspection = {
                color: color_sport,
                grid:{

                },
                legend:{
                    data:yvalue,
                    selected:{
                        '锅炉':true,
                        '压力容器':true,
                        '压力管道':true,
                        '气瓶':false,
                        '电梯':false,
                        '起重机械':false,
                        '客运索道':false,
                        '大型游乐设施':false,
                        '场内机动车辆':false
                    },
                    textStyle:{
                        color:'#fff'
                    },
                    inactiveColor:'#000'

                },
                xAxis: {
                    type: 'category',
                    data: provinces,
                    axisLabel:{
                        interval:0,
                        rotate:30,
                        textStyle:{
                            color:'#fff',
                        },
                    },
                    axisTick:{
                        lineStyle:{
                            color:'#fff'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#ffff"
                        },

                    }
                },
                yAxis: {
                    type: 'value',
                    name:'定检率',
                    axisLabel:{
                        formatter:'{value}%',
                        textStyle:{
                            color:'#fff',
                        },
                        lineStyle:{
                            color:'#fff'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#ffff"
                        },

                    }
                },
                series: [
                    {
                        name:'锅炉',
                        data:dataall.list[0],
                        type: 'line'
                    },
                    {
                        name:'压力容器',
                        data:dataall.list[1],
                        type: 'line'
                    },
                    {
                        name:'压力管道',
                        data:dataall.list[2],
                        type: 'line'
                    },
                    {
                        name:'气瓶',
                        data:dataall.list[3],
                        type: 'line'
                    },

                    {
                        name:'电梯',
                        data:dataall.list[4],
                        type: 'line'
                    },
                    {
                        name:'起重机械',
                        data:dataall.list[5],
                        type: 'line'
                    },
                    {
                        name:'客运索道',
                        data:dataall.list[6],
                        type: 'line'
                    },
                    {
                        name:'大型游乐设施',
                        data:dataall.list[7],
                        type: 'line'
                    },
                    {
                        name:'场内机动车辆',
                        data:dataall.list[8],
                        type: 'line'
                    },
                ]
            };

            var specialeqt_chart = echarts.init(document.getElementById("div_specialequipmentinspection"));
            specialeqt_chart.setOption(option_specialequipmentinspection);
        }
    });


}


