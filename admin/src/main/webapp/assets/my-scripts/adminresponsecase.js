/**
 * @Auther: windy
 * @Date: 2018/7/11 22:45
 * @Copyright: Copyright (c) 2018 ISIO
 * @Description:
 */
$(function () {
    //js初始化方法
    basic_utiles.initAction("year", "/safety/adminresponsecase/getDistinctYear.action", "province", "/safety/adminresponsecase/getDistinctProvince.action");
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
        url: "/safety/adminresponsecase/loadData.action",
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


            showGlPieChart(json['province'], json['year'], json['glqg'], json['glsf']);
            drawYsjgPieChart(json['ysjg'], json['ysjgjb'], json['province'], json['year']);
            drawYsjaqkPies(json['pjxxqk'], json['cdxxqk'], json['pjTotal'], json['cdTotal']);
            $("#div_ysjaqk_3").text(json['pctj']);

        }
    });
}


/**
 * 概况4个饼图
 * @param province
 * @param year
 * @param data1
 * @param data2
 */
function showGlPieChart(province, year, data1, data2) {
    //var gl = ['上期结转', '本期新收', '受理', '申请人总数'];
    province = province == '全国总计' ? '全国' : province;
    for (var i = 0; i < 4; i++) {
        $(".c" + (i + 1)).next().text(data2[i]);
        $(".c" + (i + 1)).parent().next().next().next().text(province + ":" + data2[i]);
        $(".c" + (i + 1)).parent().next().next().next().next().text("全国:" + data1[i]);
        var percent = (data2[i] / data1[i]).toFixed(2) * 100 + "%";
        $(".c" + (i + 1)).animate({
            height: percent
        }, 1000);
    }

}


/**
 * 应诉机关饼图
 * @param data
 */
function drawYsjgPieChart(data1, data2, province, year) {
    var label = ['原具体行政行为机关', '复议机关', '乡镇政府'];
    var label2 = ['县级政府的部门', '县级政府', '地(市)级的部门', '地(市)级政府', '省级政府的部门', '省部级行政机关', '其他'];

    var option_1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        title: {
            text: '应诉机关情况 ' + province + " " + year + "年",
            left: 'center',
            bottom: 10,
            textStyle: {
                color: '#fff',
                fontSize: 14,
            }
        },
        color: ['#21FF4F', '#f35833', '#00ccff'],
        animationDuration: 2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: label,
            formatter: function (name) {
                var oa = option_1.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value;
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
        series: [
            {
                name: '应诉机关',
                type: 'pie',
                radius: '60%',
                center: ['50%', '55%'],
                data: basic_utiles.generateData(label, data1),
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
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value + oa[5].value + oa[6].value;
                for (var i = 0; i < option_2.series[0].data.length; i++) {
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
        series: [
            {
                name: '应诉机关级别',
                type: 'pie',
                radius: '60%',
                center: ['50%', '55%'],
                data: basic_utiles.generateData(label2, data2),
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
    var chart_dom = echarts.init(document.getElementById('div_ysjg_pie_l'));
    chart_dom.setOption(option_1);
    var chart_dom2 = echarts.init(document.getElementById('div_ysjg_pie_2'));
    chart_dom2.setOption(option_2);

}

/**
 *  一审案结情况
 * @param data1
 * @param data2
 * @param total1
 * @param total2
 */
function drawYsjaqkPies(data1, data2, total1, total2) {
    var label1 = ['维持', '撤销（全部)', '撤销（部分)', '撤销（重做行政行为)', '变更', '履行法定职责', '确认合法或有效', '确认违法或无效', '驳回诉讼请求', '赔偿', '不予赔偿'];
    var label2 = ['驳回起诉', '撤诉(原告主动撤诉)', '撤诉(被告改变原行为原告撤诉)', '移送', '终结', '其他'];
    total1 = total1 == 0 ? 1 : total1;
    total2 = total2 == 0 ? 1 : total2;
    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom'
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    if (total1 == 0) {
                        return '0';
                    }
                    return ((1 - params.value / total1) * 100).toFixed(2) + '%'
                },
                textStyle: {
                    baseline: 'top'
                }
            }
        },
    }
    var labelFromatter2 = {
        normal: {
            label: {
                formatter: function (params) {
                    if (total2 == 0) {
                        return '0';
                    }
                    return ((1 - params.value / total2) * 100).toFixed(2) + '%'
                },
                textStyle: {
                    baseline: 'top'
                }
            }
        },
    }
    var labelBottom = {
        normal: {
            color: '#eee',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(255,255,255,0)'
        }
    };
    var radius = [40, 55];
    var option_1 = {
        legend: {
            x: 'center',
            y: 'center',
            data: label1,
            textStyle: {
                color: '#fff'
            }
        },
        title: {
            text: '一审结案判决情况',
            x: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 14,
            }
        },
        color: ['#f845f1', '#ad46f3', '#5045f6', '#4777f5', '#44aff0', '#45dbf7', '#33fb5e', '#dcf746', '#f6d54a', '#f69846', '#ff4343'],
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            width: '20%',
                            height: '30%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        formatter: function (params) {
                                            return '其余\n' + params.value + '%\n'
                                        },
                                        textStyle: {
                                            baseline: 'middle'
                                        }
                                    }
                                },
                            }
                        }
                    }
                },
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                type: 'pie',
                center: ['6%', '30%'],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[0], itemStyle: labelBottom},
                    {name: '维持', value: data1[0], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['23%', '30%'],
                radius: radius,
                x: '20%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[1], itemStyle: labelBottom},
                    {name: '撤销（全部)', value: data1[1], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['40%', '30%'],
                radius: radius,
                x: '40%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[2], itemStyle: labelBottom},
                    {name: '撤销（部分)', value: data1[2], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['57%', '30%'],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[3], itemStyle: labelBottom},
                    {name: '撤销（重做行政行为)', value: data1[3], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['74%', '30%'],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[4], itemStyle: labelBottom},
                    {name: '变更', value: data1[4], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['91%', '30%'],
                radius: radius,
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[5], itemStyle: labelBottom},
                    {name: '履行法定职责', value: data1[5], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['6%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[6], itemStyle: labelBottom},
                    {name: '确认合法或有效', value: data1[6], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['23%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '20%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[7], itemStyle: labelBottom},
                    {name: '确认违法或无效', value: data1[7], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['40%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '40%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[8], itemStyle: labelBottom},
                    {name: '驳回诉讼请求', value: data1[8], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['57%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[9], itemStyle: labelBottom},
                    {name: '赔偿', value: data1[9], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['74%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: '其余', value: total1 - data1[10], itemStyle: labelBottom},
                    {name: '不予赔偿', value: data1[10], itemStyle: labelTop}
                ]
            }
        ]
    };

    var option_2 = {
        legend: {
            x: 'center',
            y: 'center',
            data: label2,
            textStyle: {
                color: '#fff'
            }
        },
        title: {
            text: '一审结案裁定情况',
            x: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 14,
            }

        },
        color: ['#21FF4F', '#f35833', '#00ccff', '#FFEF25', '#E656F3', '#87FFE9', '#2030f5'],
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            width: '20%',
                            height: '30%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        formatter: function (params) {
                                            return '其余\n' + params.value + '%\n'
                                        },
                                        textStyle: {
                                            baseline: 'middle'
                                        }
                                    }
                                },
                            }
                        }
                    }
                },
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                type: 'pie',
                center: ['10%', '30%'],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter2,
                data: [
                    {name: '其余', value: total2 - data2[0], itemStyle: labelBottom},
                    {name: '驳回起诉', value: data2[0], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['40%', '30%'],
                radius: radius,
                x: '20%', // for funnel
                itemStyle: labelFromatter2,
                data: [
                    {name: '其余', value: total2 - data2[1], itemStyle: labelBottom},
                    {name: '撤诉(原告主动撤诉)', value: data2[1], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['70%', '30%'],
                radius: radius,
                x: '40%', // for funnel
                itemStyle: labelFromatter2,
                data: [
                    {name: '其余', value: total2 - data2[2], itemStyle: labelBottom},
                    {name: '撤诉(被告改变原行为原告撤诉)', value: data1[2], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['10%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle: labelFromatter2,
                data: [
                    {name: '其余', value: total2 - data2[3], itemStyle: labelBottom},
                    {name: '移送', value: data2[3], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['40%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '20%',    // for funnel
                itemStyle: labelFromatter2,
                data: [
                    {name: '其余', value: total2 - data2[4], itemStyle: labelBottom},
                    {name: '终结', value: data2[4], itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['70%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '40%', // for funnel
                itemStyle: labelFromatter2,
                data: [
                    {name: '其余', value: total2 - data2[5], itemStyle: labelBottom},
                    {name: '其他', value: data2[5], itemStyle: labelTop}
                ]
            }
        ]
    };
    var std_chart_province = echarts.init(document.getElementById("div_ysjaqk_pie_l"));
    std_chart_province.setOption(option_1);
    var std_chart_province_2 = echarts.init(document.getElementById("div_ysjaqk_pie_2"));
    std_chart_province_2.setOption(option_2);
}


