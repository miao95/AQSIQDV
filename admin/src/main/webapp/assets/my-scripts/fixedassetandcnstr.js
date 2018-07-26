/**
 * @Auther: windy
 * @Date: 2018/7/11 22:45
 * @Copyright: Copyright (c) 2018 ISIO
 * @Description:
 */
$(function () {
    //js初始化方法
    $("#p-title-little-1").hide();
    $("#p-title-little-2").hide();
    $("#p-title-little-3").hide();
    basic_utiles.initAction("year", "/basis/supply/fixedAndConstr/getDistinctYear.action", "province", "/basis/supply/fixedAndConstr/getDistinctProvince.action");
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
function loadDataByProvinceAndYear(year, province) {
    $.ajax({
        type: "POST",//为post请求
        url: "/basis/supply/fixedAndConstr/loadData.action",
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
                year = json['year'];
            }
            drawPieChart1(json['total'], json['total_xj'], null, null, json['jbjs'], json['province'], json['year']);
            drawPieChart2(json['gdzcze'], json['gdzcze_xj'], json['gdzcze_bnxz'], json['gdzcze_bnxz_xj'], json['province'], json['year']);
            drawPieChart3(json['xyjzw'], json['xyjzw_xj'], json['xyjzw_sys'], json['xyjzw_sys_xj'], json['xyjzw_total'], json['xyjzw_total_xj'], json['province'], json['year']);

        }
    });
}


/**
 * 概况饼图
 * @param data
 */
function drawPieChart1(data1, data2, data3, data4, data5, province, year) {
    var label = ['固定资产', '其他'];
    var label12 = ['固定资产(省)', '固定资产（地）', '固定资产（县）', '其他(省)', '其他（地）', '其他（县）'];
    var label2 = ['在建基建项目数（个）', '投资金额(万元)', '在建建筑面积（平方米）'];
    var text1 = province + " " + year + "年" + " " + "资产统计";

    var title = {
        subtext: '单位：万元',
        left: 'center',
        bottom: 10,
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        subtextStyle: {
            color: '#ebebeb'
        }
    };

    var option_1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },

        color: ['#18BD3A', '#E0CE39', '#E08022', '#f35833', '#E656F3', '#2030f5', '#00ccff', '#61a0a8', '#87FFE9'],
        animationDuration: 2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: label,
            formatter: function (name) {
                var oa = option_1.series[0].data;
                var num = oa[0].value + oa[1].value;
                for (var i = 0; i < option_1.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + '     ' + oa[i].value + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            textStyle: {
                color: '#fff',
            },
            top: '6%',
            show: true,


        },
        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },

    };
    var option_2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        title: {
            text: '应诉机关级别分布 ' + province + " " + year + "年",
            left: 'center',
            bottom: 10,
            textStyle: {
                color: '#fff',
                fontSize: 14,
            }
        },
        color: ['#21FF4F', '#f35833', '#00ccff', '#FFEF25', '#E656F3', '#87FFE9', '#2030f5'],
        animationDuration: 2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: label2,
            formatter: function (name) {
                var oa = option_2.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value;
                for (var i = 0; i < option_2.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + '     ' + oa[i].value;
                    }
                }
            },
            textStyle: {
                color: '#fff',
            },
            top: '6%',
            show: true,

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
                name: '应诉机关级别',
                type: 'pie',
                radius: '60%',
                center: ['50%', '55%'],
                data: basic_utiles.generateData(label2, data5),
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            //position:'inside',
                            formatter: '{c} ({d}%)'
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
    title['text'] = text1;
    option_1['title'] = title;
    option_1['series'] = generateDataSeries("资产类型", label, data1, label12, data2, true);
    var chart_dom = echarts.init(document.getElementById('div_gl_pie_1'));
    chart_dom.setOption(option_1);


    var chart_dom2 = echarts.init(document.getElementById('div_jbjs_pie_1'));
    chart_dom2.setOption(option_2);

}

/**
 * 固定资产情况饼图
 * @param data
 */
function drawPieChart2(data1, data12, data2, data22, province, year) {
    var label1 = ['房屋建筑物', '交通运输设备', '专用仪器设备', '其他'];
    var label12 = ['房屋建筑物(省)', '房屋建筑物(地)', '房屋建筑物(县)', '交通运输设备(省)', '交通运输设备(地)', '交通运输设备(县)', '专用仪器设备(省)', '专用仪器设备(地)', '专用仪器设备(县)', '其他(省)', '其他(地)', '其他(县)'];

    var label2 = ['房屋建筑物' + year + '之前总计', '本年新增', '交通运输设备' + year + '之前总计', '本年新增', '其他专用仪器设备' + year + '之前总计', '本年新增', '计量专业仪器设备' + year + '之前总计', '本年新增', '特种专业仪器设备' + year + '之前总计', '本年新增'];
    var label22 = ['房屋建筑物' + year + '之前总计(省)', '房屋建筑物' + year + '之前总计(地)', '房屋建筑物' + year + '之前总计(县)', '本年新增(省)', '本年新增(地)', '本年新增(县)', '交通运输设备' + year + '之前总计(省)', '交通运输设备' + year + '之前总计(地)', '交通运输设备' + year + '之前总计(县)', '本年新增(省)', '本年新增(地)', '本年新增(县)', '其他专用仪器设备' + year + '之前总计(省)', '其他专用仪器设备' + year + '之前总计(地)', '其他专用仪器设备' + year + '之前总计(县)', '本年新增(省)', '本年新增(地)', '本年新增(县)', '计量专业仪器设备' + year + '之前总计(省)', '计量专业仪器设备' + year + '之前总计(地)', '计量专业仪器设备' + year + '之前总计(县)', '本年新增(省)', '本年新增(地)', '本年新增(县)', '特种专业仪器设备' + year + '之前总计(省)', '特种专业仪器设备' + year + '之前总计(地)', '特种专业仪器设备' + year + '之前总计(县)', '本年新增(省)', '本年新增(地)', '本年新增(县)'];

    var text1 = province + " " + year + "年" + " " + "固定资产资产统计";
    var text2 = province + " " + year + "年" + " " + "固定资产资产增量统计";

    var title = {
        subtext: '单位：万元',
        left: 'center',
        bottom: 10,
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        subtextStyle: {
            color: '#ebebeb'
        }
    };

    var option_1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        color: ['#da1d24', '#ebb40f', '#187a2f', '#0aa2b5', '#dd4d51', '#c84a45', '#dd4d51', '#fdedd6', '#e1c314', '#b09733', '#a2b02a', '#718934', '#3ba255', '#9db2b7', '#76bfcb', '#45908d'],
        animationDuration: 2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: label1,
            formatter: function (name) {
                var oa = option_1.series[0].data;
                var num = 0;
                for (var i = 0; i < option_1.series[0].data.length; i++) {
                    num += oa[i].value;
                }
                for (var i = 0; i < option_1.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + '     ' + oa[i].value + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            textStyle: {
                color: '#fff',
            },
            top: '6%',
            show: true,


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
    };

    title['text'] = text1;
    option_1['title'] = title;
    option_1['series'] = generateDataSeries("固定资产类型", label1, data1, label12, data12, true);
    var chart_dom = echarts.init(document.getElementById('div_gdzc_pie_l'));
    chart_dom.setOption(option_1);

    title['text'] = text2;
    option_1['title'] = title;
    option_1['series'] = generateDataSeries("固定资产类型", label2, data2, label22, data22, false);
    var chart_dom = echarts.init(document.getElementById('div_gdzc_pie_2'));
    chart_dom.setOption(option_1);

}

/**
 * 现有建筑物饼图
 * @param data
 */
function drawPieChart3(data1, data12, data2, data22, data3, data32, province, year) {
    var label1 = ['办公用房面积', '实验室面积', '其他'];
    var label12 = ['办公用房面积(省)', '办公用房面积(地)', '办公用房面积(县)', '实验室面积(省)', '实验室面积(地)', '实验室面积(县)', '其他(省)', '其他(地)', '其他(县)'];
    var label2 = ['其他实验室面积', '计量实验室面积', '特种设备实验室面积'];
    var label22 = ['其他实验室面积(省)', '其他实验室面积(地)', '其他实验室面积(县)', '计量实验室面积(省)', '计量实验室面积(地)', '计量实验室面积(县)', '特种设备实验室面积(省)', '特种设备实验室面积(地)', '特种设备实验室面积(县)'];

    var text1 = province + " " + year + "年" + " " + "现有建筑物面积";
    var text2 = province + " " + year + "年" + " " + "实验室面积统计";

    var title = {
        subtext: '单位：平方米',
        left: 'center',
        bottom: 10,
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        subtextStyle: {
            color: '#ebebeb'
        }
    };
    var legend = {
        orient: 'vertical',
        x: 'right',
        formatter: function (name) {
            var oa = option_1.series[0].data;
            var num = oa[0].value + oa[1].value;
            for (var i = 0; i < option_1.series[0].data.length; i++) {
                if (name == oa[i].name) {
                    return name + '     ' + oa[i].value + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                }
            }
        },
        textStyle: {
            color: '#fff',
        },
        top: '6%',
        show: true,


    };
    var option_1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },

        animationDuration: 2000,
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
    };


    title['text'] = text2;
    legend['data'] = label2;
    option_1['title'] = title;
    option_1['legend'] = legend;
    option_1['series'] = generateDataSeries("实验室类型", label2, data2, label22, data22, true);
    var chart_dom = echarts.init(document.getElementById('div_xyjzw_pie_2'));
    chart_dom.setOption(option_1);

    title['text'] = text1;
    legend['data'] = label1;
    option_1['title'] = title;
    option_1['legend'] = legend;
    option_1['color'] = ['#da1d24', '#ebb40f', '#0aa2b5', '#dd4d51', '#c84a45', '#dd4d51', '#fdedd6', '#e1c314', '#b09733', '#9db2b7', '#76bfcb', '#45908d'];
    option_1['series'] = generateDataSeries("建筑物类型", label1, data1, label12, data12, true);
    var chart_dom = echarts.init(document.getElementById('div_xyjzw_pie_1'));
    chart_dom.setOption(option_1);

    $("#span_xyjzw_1").text(data3);
    if (data32 != null) {
        $("#p-title-little-1").show();
        $("#p-title-little-2").show();
        $("#p-title-little-3").show();

        $("#span_xyjzw_2").text(data32[0]);
        $("#span_xyjzw_3").text(data32[1]);
        $("#span_xyjzw_4").text(data32[2]);
    }
}

/**
 *
 * @param title
 * @param label1
 * @param data1
 * @param label2
 * @param data2
 * @param showInnerLabel
 * @returns {*[]}
 */
function generateDataSeries(title, label1, data1, label2, data2, showInnerLabel) {
    var series = [];
    if (data2 != null) {
        series = [{
            name: title,
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner',
                    show: showInnerLabel,
                }

            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: basic_utiles.generateData(label1, data1),
        },
            {
                name: title,
                type: 'pie',
                radius: ['40%', '55%'],
                data: basic_utiles.generateData(label2, data2),
            }]
    }
    else {
        series = [{
            name: title,
            type: 'pie',
            radius: '60%',
            center: ['40%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        //position:'inside',
                        formatter: '{c}' + ' ({d}%)'
                    }
                },
                labelLine: {show: true},
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: basic_utiles.generateData(label1, data1)

        }];
    }
    return series;

}



