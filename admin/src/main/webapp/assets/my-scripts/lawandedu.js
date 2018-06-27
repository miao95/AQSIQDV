$(function () {
    //js初始化方法

    initProvinceSelects("province");
    initTimeSelects("year");
    loadDataByProvince("全国总计");
    loadDataByProvinceAndYear(2016, "全国总计");
});

//初始化日期下拉列表
function initTimeSelects(domId){
    $.ajax({
        type: "POST",//请求方式
        url: "/safety/lawAndEdu/getDistinctYear.action",
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(result){
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
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(result){
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
        url: "/safety/lawAndEdu/loadDataByProvince.action",
        data: {
            province: province
        },
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
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
        url: "/safety/lawAndEdu/loadDataByProvince.action",
        data: {
            province: province
        },
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            //showPfpxhdChart(json);
            //showJdzxfqkChart(json);
        }
    });
}

/**
 * 普法培训活动
 * @param json
 */
function showPfpxhdChart(json) {
    var label = ["干部培训(次)","干部培训(人)","企业普法（次）","企业普法（人）","社区普法（次）","社区普法（人）"];
    var color_sport = ['#ff6666','#ffff00','#006699','#339933','#ffffcc','#ffffff','#ff0033','#99cc33','#cccc00','#990066','#9999cc','#66FF33'];
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
            name:label[i],
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: itemData
        }

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
            top:'12%',
            right: '4%',
            bottom: '17%',
            containLabel: true
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: [
            {
                type : 'category',
                data : json['year'],
                splitLine:{show:false},
                axisTick:{
                    lineStyle:{color:'#fff'}
                },
                axisLabel:{
                    textStyle:{color:'#fff'},
                    //rotate:30,
                    interval:0,
                }
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
    var label = ["法律培训","专题授课、党组学习"];
    var color_sport = ['#ff6666','#ffff00'];
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
            name:label[i],
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '15%',
            data: itemData
        }

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
            top:'12%',
            right: '4%',
            bottom: '17%',
            containLabel: true
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: [
            {
                type : 'category',
                data : json['year'],
                splitLine:{show:false},
                axisTick:{
                    lineStyle:{color:'#fff'}
                },
                axisLabel:{
                    textStyle:{color:'#fff'},
                    //rotate:30,
                    interval:0,
                }
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
        series: seriesData
    };

    var dom_chart = echarts.init(document.getElementById('div_jdzxfqk'));
    dom_chart.setOption(option);

}





