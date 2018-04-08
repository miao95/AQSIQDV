var timeLineData = jsonData.timeLineData;
var measurementStandardList = jsonData.measurementStandardList;
var yAxisData = jsonData.yAxisData;
var legendArray = [[ '建立在依法设置计量检定机\r\n构的社会公用计量标准', '依法授权的社\r\n会公用计量标准', '依法授权其它单位开\r\n展专项检定工作计量标准', '建立在部门、企事业单位的\r\n最高计量标准' ],
                ['计量授权-依法设置的计量检定技术机构','依法授权建立的计量检定机构','其它承担专项授权检定任务的机构','其它承担专项授权检定任务的项目','授权承担计量器具型式评价的机构','授权承担计量器具型式评价的项目'],
                ['型式批准证书-本年','型式批准证书-累证'],
                ['制造、修理计量器具-取得制造计量器具许可证的单位个体工商户-本年新增','制造、修理计量器具-取得制造计量器具许可证的单位个体工商户-本年减少','制造、修理计量器具-取得制造计量器具许可证的单位个体工商户累计','制造、修理计量器具-取得修理计量器具许可证的单位个体工商户-本年新增','制造、修理计量器具-取得修理计量器具许可证的单位个体工商户-本年减少','制造、修理计量器具-取得修理计量器具许可证的单位个体工商户']];

var colorarr = [ '#86b8e9', '#8b5cf8', '#67c730', '#f64681'];


measure_option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: timeLineData,
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            text: '计量法制管理'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: [legendArray[0]],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
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
            }
        ]
    },
    options: [
    ]
}

function renderEachCity(myChart,timeLineData,measurementStandardList) {
    for(var i=0;i<timeLineData.length;i++){
        var obj = {
            series:[{data:measurementStandardList[i][0]},{data:measurementStandardList[i][1]},{data:measurementStandardList[i][2]},{data:measurementStandardList[i][3]}]
        };
        measure_option.options.push(obj);
    }
    myChart.setOption(measure_option,true);
}