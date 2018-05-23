$(function () {
    //初始化方法
    showSpecialDeviceInspection(2014)
});

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
    var provinces = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'];
    var yvalue = ['锅炉','压力容器','压力管道','气瓶','电梯','起重机械','客运索道','大型游乐设施','场内机动车辆'];
    var rate_guolu = [100.00 ,96.05 ,90.02 ,99.96 ,91.03 ,90.22 ,98.16 ,100.00 ,96.62 ,99.98 ,97.67 ,90.84 ,97.40 ,83.66 ,94.22 ,81.97 ,95.42 ,82.93 ,97.97 ,96.99 ,98.99 ,96.38 ,96.85 ,99.41 ,78.34 ,46.60 ,94.28 ,99.69 ,58.24 ,86.25 ,74.86 ];
    var rate_yalirongqi=[100.00 ,95.23 ,78.41 ,100.00 ,92.20 ,87.58 ,97.97 ,99.99 ,99.77 ,100.00 ,95.98 ,89.52 ,95.65 ,95.81 ,96.18 ,84.86 ,98.08 ,95.13 ,99.97 ,95.00 ,93.97 ,92.01 ,99.57 ,97.19 ,77.37 ,63.36 ,95.83 ,99.60 ,55.55 ,66.04 ,82.50];
    var rate_qiping = [100.00 ,84.44 ,63.21 ,84.57 ,78.25 ,69.05 ,58.61 ,95.14 ,73.22 ,93.76 ,98.76 ,94.67 ,89.19 ,84.81 ,82.70 ,52.43 ,89.05 ,84.53 ,94.11 ,93.00 ,96.53 ,91.00 ,94.36 ,99.58 ,66.31 ,18.79 ,67.86 ,99.60 ,39.22 ,94.43 ,84.15];
    var rate_yaliguandao=[100.00 ,96.90 ,65.75 ,84.89 ,90.50 ,90.82 ,19.17 ,100.00 ,78.65 ,99.71 ,100.00 ,82.34 ,81.86 ,71.06 ,92.38 ,38.03 ,96.83 ,67.14 ,90.52 ,82.97 ,93.27 ,75.43 ,94.53 ,98.29 ,29.64 ,54.17 ,38.84 ,96.69 ,53.58 ,0.08 ,17.32];
    var rate_dianti = [100.00 ,99.05 ,94.06 ,100.00 ,96.94 ,96.04 ,85.13 ,87.53 ,96.49 ,100.00 ,98.05 ,97.28 ,98.84 ,95.15 ,96.93 ,97.77 ,98.18 ,97.96 ,98.83 ,96.78 ,98.04 ,97.74 ,98.27 ,97.04 ,86.16 ,69.89 ,96.70 ,99.80 ,83.33 ,100.00 ,89.77];
    var rate_qizhongjixie = [100.00 ,96.42 ,91.78 ,100.00 ,94.07 ,90.05 ,97.17 ,100.00 ,98.79 ,99.79 ,98.43 ,78.68 ,96.57 ,92.51 ,94.87 ,79.90 ,95.66 ,92.78 ,95.70 ,96.33 ,93.03 ,96.59 ,95.56 ,99.76 ,72.08 ,39.78 ,99.92 ,98.65 ,59.77 ,99.60 ,72.89];
    var rate_keyunsuodao = [100.00 ,100.00 ,100.00 ,100.00 ,72.22 ,100.00 ,100.00 ,59.04 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,100.00 ,14.29 ,90.63 ,100.00 ,28.00 ,0.00 ,77.27 ,100.00 ,0.00 ,0.00 ,98.15];
    var rate_daxingyoulesheshi = [100.00 ,96.04 ,100.00 ,100.00 ,79.02 ,96.76 ,100.00 ,86.50 ,95.63 ,100.00 ,100.00 ,87.88 ,100.00 ,86.52 ,96.28 ,95.48 ,96.69 ,95.19 ,95.59 ,100.00 ,100.00 ,82.86 ,90.71 ,100.00 ,64.88 ,89.66 ,97.18 ,99.71 ,85.00 ,100.00 ,100.00];
    var rate_changneijidongcheliang=[100.00 ,91.02 ,94.92 ,95.25 ,95.94 ,87.80 ,96.14 ,75.42 ,97.86 ,99.68 ,96.18 ,95.72 ,98.46 ,86.55 ,95.75 ,98.18 ,98.18 ,90.86 ,97.71 ,95.53 ,97.11 ,96.71 ,90.47 ,99.95 ,84.51 ,0.00 ,90.90 ,99.70 ,44.14 ,99.71 ,92.64];
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
                        data:dataall[0],
                        type: 'line'
                    },
                    {
                        name:'压力容器',
                        data:dataall[1],
                        type: 'line'
                    },
                    {
                        name:'压力管道',
                        data:dataall[2],
                        type: 'line'
                    },
                    {
                        name:'气瓶',
                        data:dataall[3],
                        type: 'line'
                    },

                    {
                        name:'电梯',
                        data:dataall[4],
                        type: 'line'
                    },
                    {
                        name:'起重机械',
                        data:dataall[5],
                        type: 'line'
                    },
                    {
                        name:'客运索道',
                        data:dataall[6],
                        type: 'line'
                    },
                    {
                        name:'大型游乐设施',
                        data:dataall[7],
                        type: 'line'
                    },
                    {
                        name:'场内机动车辆',
                        data:dataall[8],
                        type: 'line'
                    },
                ]
            };

            var specialeqt_chart = echarts.init(document.getElementById("div_specialequipmentinspection"));
            specialeqt_chart.setOption(option_specialequipmentinspection);
        }
    });


}


