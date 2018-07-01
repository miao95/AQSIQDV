$(function () {
    //js初始化方法

    initProvinceSelects("province");
    initTimeSelects("year");
    loadDataByProvince("全国总计");
    loadDataByProvinceAndYear(2016, "全国总计");
});

//初始化日期下拉列表
function initTimeSelects(domId) {
    $.ajax({
        type: "POST",//请求方式
        url: "/safety/lawAndEdu/getDistinctYear.action",
        async: false,
        error: function (data) {//请求失败之后的操作

        },
        success: function (result) {
            var data = JSON.parse(result);
            $.each(data, function (i, item) {
                var selected = i == 0 ? "selected" : "";
                $("#" + domId).append(" <option value=\"" + item + "\" " + selected + ">" + item + "年" + "</option>");
            });
            $("#" + domId).selectpicker('refresh');
        }
    });

}

/**
 * 省份下拉框
 * @param domId
 */
function initProvinceSelects(domId) {
    $.ajax({
        type: "POST",//请求方式
        url: "/safety/lawAndEdu/getDistinctProvince.action",
        async: false,
        error: function (data) {//请求失败之后的操作

        },
        success: function (result) {
            var data = JSON.parse(result);

            $("#" + domId).append(" <option value=\"全国总计\" selected>" + "全国" + "</option>");

            $.each(data, function (i, item) {
                $("#" + domId).append(" <option value=\"" + item + "\">" + item + "</option>");
            });
            $("#" + domId).selectpicker('refresh');
        }
    });
}

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
    loadDataByProvince(province);
}

/**
 * 去后台加载数据
 */
function loadDataByProvince(province) {
    $.ajax({
        type: "POST",//为post请求
        url: "/safety/lawAndEdu/loadDataByProvinceAndYear.action",
        data: {
            province: province
        },
        async: false,
        error: function (data) {//请求失败之后的操作

        },
        success: function (data) {//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            showPfpxhdChart(json);
            showJdzxfqkChart(json);

        }
    });
}

/**
 * 去后台加载数据
 */
function loadDataByProvinceAndYear(year, province) {
    $.ajax({
        type: "POST",//为post请求
        url: "/safety/lawAndEdu/loadDataByProvinceAndYear.action",
        data: {
            province: province,
            year: year
        },
        async: false,
        error: function (data) {//请求失败之后的操作

        },
        success: function (data) {//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            showByclPieChart(json[year]);
            showZzryPieChart(json[year]);
            showFzjgMap(year, json[year]);
        }
    });
}

/**
 * 普法培训活动
 * @param json
 */
function showPfpxhdChart(json) {
    var label = ["干部培训(次)", "干部培训(人)", "企业普法（次）", "企业普法（人）", "社区普法（次）", "社区普法（人）"];
    var color_sport = ['#ff6666', '#ffff00', '#006699', '#339933', '#ffffcc', '#ffffff', '#ff0033', '#99cc33', '#cccc00', '#990066', '#9999cc', '#66FF33'];
    var years = json['year'];
    var seriesData = [];
    for (var i = 0; i < label.length; i++) {
        var itemData = [];
        for (var j = 0; j < years.length; j++) {
            var year = years[j];
            var data = json[year];
            var pfpxhd = data['pfpxhd'];
            itemData.push(pfpxhd[i]);
        }

        var series = {
            name: label[i],
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: itemData
        };

        seriesData.push(series);
    }

    var option = {
        color: color_sport,
        legend: {
            data: label,
            x: 'right',
            textStyle: {
                color: color_sport
            }
        },
        grid: {
            left: '3%',
            top: '12%',
            right: '4%',
            bottom: '17%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: json['year'],
                splitLine: {show: false},
                axisTick: {
                    lineStyle: {color: '#fff'}
                },
                axisLabel: {
                    textStyle: {color: '#fff'},
                    //rotate:30,
                    interval: 0,
                }
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
        series: seriesData
    };

    var dom_chart = echarts.init(document.getElementById('div_pfpxhd'));
    dom_chart.setOption(option);

}


/**
 * 局党组学习情况
 * @param json
 */
function showJdzxfqkChart(json) {
    var label = ["法律培训", "专题授课、党组学习"];
    var color_sport = ['#ff6666', '#ffff00'];
    var years = json['year'];
    var seriesData = [];
    for (var i = 0; i < label.length; i++) {
        var itemData = [];
        for (var j = 0; j < years.length; j++) {
            var year = years[j];
            var data = json[year];
            var jdzxfqk = data['jdzxfqk'];
            itemData.push(jdzxfqk[i]);
        }

        var series = {
            name: label[i],
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '15%',
            data: itemData
        };

        seriesData.push(series);
    }

    var option = {
        color: color_sport,
        legend: {
            data: label,
            x: 'right',
            textStyle: {
                color: color_sport
            }
        },
        grid: {
            left: '3%',
            top: '12%',
            right: '4%',
            bottom: '17%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: json['year'],
                splitLine: {show: false},
                axisTick: {
                    lineStyle: {color: '#fff'}
                },
                axisLabel: {
                    textStyle: {color: '#fff'},
                    //rotate:30,
                    interval: 0,
                }
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
        series: seriesData
    };

    var dom_chart = echarts.init(document.getElementById('div_jdzxfqk'));
    dom_chart.setOption(option);

}

/**
 * 编印材料饼图
 * @param data
 */
function showByclPieChart(data) {
    var bsqr = ['教材', '汇编', '宣传材料', '其他'];

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        title: [],
        color: ['#8fc31f', '#f35833', '#00ccff', '#ffcc00'],
        animationDuration: 2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: bsqr,
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
                name: '编印材料（套）',
                type: 'pie',
                radius: ['20%', '60%'],
                roseType: 'area',
                center: ['50%', '50%'],
                data: generateData(bsqr, data['bycl']),
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

    var chart_dom = echarts.init(document.getElementById('div_bycl'));
    chart_dom.setOption(option);

}

/**
 * 专职从事法制工作的人员饼图
 * @param data
 */
function showZzryPieChart(data) {
    var bsqr = ['人员总数', '本科以上学历', '取得律师资格'];

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        title: [],
        color: ['#f35833', '#00ccff', '#ffcc00'],
        animationDuration: 2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: bsqr,
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
                name: '专职从事法制工作的人员(人)',
                type: 'pie',
                radius: ['20%', '60%'],
                roseType: 'area',
                center: ['50%', '50%'],
                data: generateData(bsqr, data['zzry']),
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

    var chart_dom = echarts.init(document.getElementById('div_zzcsfzgzdry'));
    chart_dom.setOption(option);

}

function showFzjgMap(year, data) {

    var newdata=data['fzjg'];
    newdata.sort(up);
    var sourceDate = generateDataForFzjg(newdata);
    var yData = [];
    for (var i = 0; i < sourceDate.length; i++) {
        yData.push(sourceDate[i].name + ' ' + sourceDate[i].value);
    }
    option = {
        title: {
            text: '全国法制机构总计个数:' + data['fzjgzs'],
            subtext: '年份:' + year,
            textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
                color: '#ffff33',
                fontFamily: '黑体'
            },
            subtextStyle: {
                fontWeight: 'normal',
                fontSize: 12,
                color: '#ffff33',
                fontFamily: '黑体'
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function (param) {
                if (param.value > 0)
                    return param.name + " : " + param.value + "个";
                else
                    return param.name + " : " + '未提交数据';
            }
        },
        visualMap: {
            left: 'left',
            min: 0,
            max: 200,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: true,
            textStyle: {
                color: '#fff'
            },
            dimension: 0
        },
        grid: {
            height: 530,
            width: '20%',
            right: 20,
            top: 20
        },
        xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            splitNumber: 1,
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        yAxis: {
            position: 'left',
            type: 'category',
            nameGap: 6,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#4d992d'
                }
            },
            data: yData
        },
        series: [
            {
                name: '机构个数',
                type: 'map',
                mapType: 'china',
                left: '10%',
                top: '8%',
                zoom: 1.2,
                roam: true,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: sourceDate,
            },
            {
                name: 'barSer',
                type: 'bar',
                roam: false,
                visualMap: false,
                zlevel: 2,
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        color: '#8cbf64',
                    },
                    emphasis: {
                        color: "#72bf32"
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        offset: [0, 10]
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [10, 0]
                    }
                },
                data: sourceDate
            }
        ]
    };

    var chart_dom = echarts.init(document.getElementById('div_fzjg'));
    chart_dom.setOption(option);

}

/**
 * 格式化数据
 * @param nameList
 * @param valueList
 * @returns {Array}
 */
function generateData(nameList, valueList) {
    var arr = [];
    for (var i = 0; i < nameList.length; i++) {
        var json = {};
        json['name'] = nameList[i];
        json['value'] = valueList[i];
        arr.push(json);
    }

    return arr;
}

/**
 * 格式化数据
 * @param nameList
 * @param valueList
 * @returns {Array}
 */
function generateDataForFzjg(valueList) {
    var arr = [];
    for (var i = 0; i < valueList.length; i++) {
        var json = {};
        json['name'] = valueList[i]['name'];
        json['value'] = valueList[i]['value'];
        arr.push(json);
    }

    return arr;
}

/**
 * 排序函数
 * @param x
 * @param y
 * @returns {number}
 */
function up(x,y){
    return x.value-y.value
}





