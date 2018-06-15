$(function () {
    //js初始化方法

    //showMeteringInspection(2016);

});


/**
 * 年份选择改变时,计量仪器检定情况
 * @param obj
 */
function yearSelectInspectionOnChange(obj) {
     var year = $(obj).val();
     showMeteringInspection(year);

}

/**
 * 画计量仪器检定情况
 */
function showMeteringInspection(year) {
    var provinces = ['中国计量院','北京市','天津市','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','上海市','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西壮族自治区','海南省','重庆市','四川省','贵州省','云南省','西藏自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区'];
    var features = ['长度','温度','力学','衡器','电磁','光学','声学','化学','电离辐射','无线电','时间频率','其他'];

    $.ajax({
        type: "POST",//为post请求
        url: "/basis/showMeteringInspection.action",
        data: {
            year: year
        },
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var dataall = JSON.parse(data); //json字符串转为json对象
            var data = [];

            data = generateData(dataall);
            data = data.map(function (item) {
                return [item[1], item[0], item[2] || '-'];
            });

            var option_metering_inspection = {
                tooltip: {
                    position: 'top',
                    formatter:function(param){
                        return "计量仪器检定："+provinces[param.value[0]]+" "+features[param.value[1]]+" "+param.value[2];
                    }
                },
                animation: false,
                grid: {
                    top:'0%',
                    height:'80%',
                },
                xAxis: {
                    type: 'category',
                    data: provinces,
                    splitArea: {
                        show: true
                    },
                    axisTick:{
                        lineStyle:{color:'#fff'}
                    },
                    axisLabel:{
                        interval:0,
                        rotate:30,
                        textStyle:{
                            color:'#ffffff'
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: features,
                    splitArea: {
                        show: true
                    },
                    axisTick:{
                        lineStyle:{color:'#fff'}
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#ffffff'
                        }
                    }
                },
                visualMap: {
                    min: 0,
                    max: 2000000,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '1%',
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    },
                    textStyle:{
                        color:'#fff'
                    }
                },
                series: [{
                    name: '计量仪器检定',
                    type: 'heatmap',
                    data: data,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };

            var chart_metering_inspection = echarts.init(document.getElementById('div_metering_inspection'));
            chart_metering_inspection.setOption(option_metering_inspection);
        }
    });


}

/**
 * 计量仪器检定情况中格式化数据
 * @param dataall
 * @returns {Array}
 */
function generateData(dataall) {
    var datatemp = [];
    for (var i = 0; i <= 11; i++) {
        for (var j = 0; j <= 31; j++) {
            datatemp.push([i,j,dataall[i][j]]);
        }
    }

    return datatemp;
}





