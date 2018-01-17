var timeLineData = jsonData.timeLineData;
var measurementStandardList = jsonData.measurementStandardList[0];
var yAxisData = jsonData.yAxisData;
var geoCoordMap = {
    '安徽省': [117.17, 31.52],
    '北京市': [116.24, 39.55],
    '重庆市': [106.54, 29.59],
    '福建省': [119.18, 26.05],
    '甘肃省': [103.51, 36.04],
    '广东省': [113.14, 23.08],
    '广西壮族自治区': [108.19, 22.48],
    '贵州省': [106.42, 26.35],
    '河北省': [114.30, 38.02],
    '河南省': [113.40, 34.46],
    '黑龙江省': [128.36, 45.44],
    '湖北省': [112.27, 30.15],
    '湖南省': [112.59, 28.12],
    '吉林省': [125.19, 43.54],
    '江苏省': [118.46, 32.03],
    '江西省': [115.55, 28.40],
    '辽宁省': [123.25, 41.48],
    '内蒙古自治区': [108.41, 40.48],
    '宁夏回族自治区': [106.16, 38.27],
    '青海省': [101.48, 36.38],
    '山东省': [118.00, 36.40],
    '山西省': [112.33, 37.54],
    '陕西省': [108.57, 34.17],
    '上海市': [121.29, 31.14],
    '海南省': [108.77, 19.10],
    '四川省': [104.04, 30.40],
    '天津市': [117.12, 39.02],
    '西藏自治区': [91.08, 29.39],
    '新疆维吾尔自治区': [87.36, 43.45],
    '云南省': [102.42, 25.04],
    '浙江省': [120.10, 30.16],
    '澳门': [115.07, 21.33],
    '台湾': [121.21, 23.53]
};
var legendArray = [[ '建立在依法设置计量检定机\r\n构的社会公用计量标准', '依法授权的社\r\n会公用计量标准', '依法授权其它单位开\r\n展专项检定工作计量标准', '建立在部门、企事业单位的\r\n最高计量标准' ],
                ['计量授权-依法设置的计量检定技术机构','依法授权建立的计量检定机构','其它承担专项授权检定任务的机构','其它承担专项授权检定任务的项目','授权承担计量器具型式评价的机构','授权承担计量器具型式评价的项目'],
                ['型式批准证书-本年','型式批准证书-累证'],
                ['制造、修理计量器具-取得制造计量器具许可证的单位个体工商户-本年新增','制造、修理计量器具-取得制造计量器具许可证的单位个体工商户-本年减少','制造、修理计量器具-取得制造计量器具许可证的单位个体工商户累计','制造、修理计量器具-取得修理计量器具许可证的单位个体工商户-本年新增','制造、修理计量器具-取得修理计量器具许可证的单位个体工商户-本年减少','制造、修理计量器具-取得修理计量器具许可证的单位个体工商户']];

var colorarr = [ '#86b8e9', '#8b5cf8', '#67c730', '#f64681'];


measure_option = {
    title: {
        text: '计量法制管理'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {data:[legendArray[0]],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: yAxisData
    },
    series: [
        {
            name: '依法设置',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: measurementStandardList[0]
        },
        {
            name: '依法授权',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: measurementStandardList[1]
        },
        {
            name: '依法授权其他',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: measurementStandardList[2]
        },
        {
            name: '最高计量',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: measurementStandardList[3]
        }
    ]
}

function renderEachCity(myChart) {
    myChart.setOption(measure_option,true);
}