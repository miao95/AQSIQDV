/**
 * @Auther: windy
 * @Date: 2018/7/11 22:45
 * @Copyright: Copyright (c) 2018 ISIO
 * @Description:
 */
$(function () {
    //js初始化方法
    basic_utiles.initAction("year", "/safety/adminpermission/getDistinctYear.action", "province", "/safety/adminpermission/getDistinctProvince.action");
    loadDataByYear(0);
    loadDataByProvinceAndYear(0);
});


/**
 * 年份选择改变时
 * @param obj
 */
function yearSelectOnChange(obj) {
    var year = $(obj).val();
    var province = $("#province").val();

    loadDataByProvinceAndYear(year, province);
    loadDataByYear(year);
}


/**
 * 省份选择改变时
 * @param obj
 */
function provinceSelectOnChange(obj) {
    var province = $(obj).val();
    var year = $("#year").val();

    loadDataByProvinceAndYear(year, province);
}

/**
 * 去后台加载数据
 */
function loadDataByYear(year) {
    $.ajax({
        type: "POST",//为post请求
        url: "/safety/adminpermission/loadData.action",
        data: {
            year: year
        },
        async: false,
        error: function (data) {//请求失败之后的操作

        },
        success: function (data) {//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            drawLineChart(json['blsf'], json['year']);

        }
    });
}

/**
 * 去后台加载数据
 */
function loadDataByProvinceAndYear(year, province) {
    $.ajax({
        type: "POST",//为post请求
        url: "/safety/adminpermission/loadData.action",
        data: {
            province: province,
            year: year
        },
        async: false,
        error: function (data) {//请求失败之后的操作

        },
        success: function (data) {//请求成功之后的操
            var json = JSON.parse(data); //json字符串转为json对象
            if (year == 0) {
                year = json['latestYear'];
            }
            summary(json['gltcsq'], json['glslsq'], json['glscxk'], json['province'], json['year']);
            showAjclPieChart(json['ajcl'], json['province'], json['year']);

        }
    });
}


function summary(tcsqList, slsqList, scxkList, province, year) {
    var label1 = ["法人（组织）", "个人"];
    var label2 = ["受理申请", "不予受理"];
    var label3 = ["准予许可", "不予许可"];
    //var years = json['year']+'年';
    var seriesData = [];
    var option_application = {
        title: {
            text: '提出申请',
            subtext: year + '年 ' + province,
            left: 'center',
            bottom: 10,
            textStyle: {
                color: '#fff'
            },
            subtextStyle: {
                color: '#ebebeb'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: label1,
            textStyle: {
                color: '#fff'
            }
        },
        color: ['#8bc34a', '#ffb300'],
        series: [{
            name: '申请件数',
            type: 'pie',
            radius: '65%',
            center: ['50%', '35%'],
            data: basic_utiles.generateData(label1, slsqList),
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
            },
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}件',
                    textStyle: {
                        fontSize: 20,
                    },
                    color: '#fff'
                }
            }
        }]
    };
    var option_acceptance = {
        title: {
            text: '受理申请',
            subtext: year + '年 ' + province,
            left: 'center',
            bottom: 10,
            textStyle: {
                color: '#fff'
            },
            subtextStyle: {
                color: '#ebebeb'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: label2,
            textStyle: {
                color: '#fff'
            }
        },
        color: ['#8bc34a', '#ffb300'],
        series: [{
            name: '事项件数',
            type: 'pie',
            radius: '65%',
            center: ['50%', '35%'],
            data: basic_utiles.generateData(label2, tcsqList),
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
            },
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}件',
                    textStyle: {
                        fontSize: 20,
                    },
                    color: '#fff'
                }
            }
        }]
    };
    var option_check = {
        title: {
            text: '审查许可',
            subtext: year + '年 ' + province,
            left: 'center',
            bottom: 10,
            textStyle: {
                color: '#fff'
            },
            subtextStyle: {
                color: '#ebebeb'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: label3,
            textStyle: {
                color: '#fff'
            }
        },
        color: ['#8bc34a', '#ffb300'],
        series: [{
            name: '事项件数',
            type: 'pie',
            radius: '65%',
            center: ['50%', '35%'],
            data: basic_utiles.generateData(label3, scxkList),
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
            },
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}件',
                    textStyle: {
                        fontSize: 20,
                    },
                    color: '#fff'
                }
            }
        }]
    };


    var per_app_chart = echarts.init(document.getElementById("div_per_app"));
    per_app_chart.setOption(option_application);
    var per_acc_chart = echarts.init(document.getElementById("div_per_acc"));
    per_acc_chart.setOption(option_acceptance);
    var per_chk_chart = echarts.init(document.getElementById("div_per_chk"));
    per_chk_chart.setOption(option_check);


}


/**
 * 案件处理饼图
 * @param data
 */
function showAjclPieChart(data, province, year) {
    var label = ['办理变更', '办理延续', '撤回许可', '撤销许可', '吊销许可', '注销许可'];

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        title: {
            text: province + " " + year + "年",
            left: 'center',
            bottom: 10,
            textStyle: {
                color: '#fff',
                fontSize: 14,
            }
        },
        color: ['#21FF4F', '#f35833', '#00ccff', '#FFEF25', '#E656F3', '#87FFE9'],
        animationDuration: 2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: label,
            formatter: function (name) {
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
                for (var i = 0; i < option.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + '     ' + oa[i].value + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            top: '6%',
            show: false,
            left: '10%',
            right: '20%'
        },
        label: {
            normal: {
                textStyle: {
                    fontSize: 14
                }
            },
            emphasis: {
                textStyle: {
                    fontSize: 14
                }
            }
        },
        series: [
            {
                name: '事项处理（件）',
                type: 'pie',
                radius: ['50%', '70%'],
                data: basic_utiles.generateData(label, data),
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            //position:'inside',
                            formatter: '{b} \n{c} ({d}%)'
                        }
                    },
                    labelLine: {show: true},
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }
        ]
    };

    var chart_dom = echarts.init(document.getElementById('div_per_ajcl'));
    chart_dom.setOption(option);

}

/**
 * 条形图，显示最近一年全部省份许可证收费
 * @param domId
 */
function drawLineChart(data, year) {
    var xAxisdata = [
        '北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江',
        '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南',
        '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州',
        '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'
    ];
    var seriesData = basic_utiles.generateDataWithoutName(xAxisdata, data);

    $.ajax({
        type: "POST",//为post请求
        url: "/basis/findTotalStandardForAllProvinces.action",
        async: false,
        error: function (data) {//请求失败之后的操作
            return;
        },
        success: function (data) {//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            var zdData = json['zd'].split(",");
            var std_province_option = {
                title: [
                    {
                        text: year + "年各省办理许可收费（单位：万元）",
                        left: "center",
                        textStyle: {
                            color: "#fff",
                            fontSize: "14"
                        }
                    }
                ],
                grid: [
                    {x: '8%', y: '7%', width: '85%', height: '80%'}
                ],
                tooltip: {
                    formatter: '{b} ({c}万元)'
                },
                xAxis: [
                    {
                        data: xAxisdata,
                        axisLabel: {
                            show: true,
                            rotate: 30,
                            interval: 0,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        type: 'category'
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
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
                        barWidth: '45%',
                        itemStyle: {
                            normal: {
                                color: '#46A0FF'
                            }
                        },
                        data: seriesData,
                    }
                ]
            };

            var std_chart_province = echarts.init(document.getElementById("div_per_blsf"));
            std_chart_province.setOption(std_province_option);
        }
    });
}


