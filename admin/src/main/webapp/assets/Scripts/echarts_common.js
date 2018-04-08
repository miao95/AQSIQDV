//added by wugang
/**
* 根据值获取线性渐变颜色
* @param  {String} start 起始颜色
* @param  {String} end   结束颜色
* @param  {Number} max   最多分成多少分
* @param  {Number} val   渐变取值
* @return {String}       颜色
*/
function getGradientColor(start, end, max, val) {
    var rgb = /#((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})/;
    var sM = start.match(rgb);
    var eM = end.match(rgb);
    var err = '';
    max = max || 1
    val = val || 0
    if (sM === null) {
        err = 'start';
    }
    if (eM === null) {
        err = 'end';
    }
    if (err.length > 0) {
        throw new Error('Invalid ' + err + ' color format, required hex color');
    }
    var sR = parseInt(sM[1], 16),
        sG = parseInt(sM[2], 16),
        sB = parseInt(sM[3], 16);
    var eR = parseInt(eM[1], 16),
        eG = parseInt(eM[2], 16),                                                                             
        eB = parseInt(eM[3], 16);
    var p = val / max;
    var gR = Math.round(sR + (eR - sR) * p).toString(16),
        gG = Math.round(sG + (eG - sG) * p).toString(16),
        gB = Math.round(sB + (eB - sB) * p).toString(16);
    return '#8CBF64';
}

function showData(mychart) {
    var TOPN = 30

    var option = mychart.getOption();
    // 修改top

    option.grid[0].height = TOPN * 17
    option.yAxis[0].max = TOPN
    option.yAxis[0].splitNumber = TOPN
    option.series[1].data[0] = TOPN
    // 排序
    var data = option.series[0].data.sort(function (a, b) {
        return b.value - a.value
    })

    var maxValue = data[0].value,
        minValue = data.length > TOPN ? data[TOPN - 1].value : data[data.length - 1].value;

    var s = option.visualMap[0].controller.inRange.color[0],
        e = option.visualMap[0].controller.inRange.color.slice(-1)[0];
    var sColor = getGradientColor(s, e, maxValue, minValue);
    var eColor = getGradientColor(s, e, maxValue, maxValue);

    option.series[1].itemStyle.normal.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 1,
        color: sColor
    }, {
        offset: 0,
        color: eColor
    }]);

    // yAxis
    var newYAxisArr = [];
    echarts.util.each(data, function (item, i) {
        if (i >= TOPN) {
            return false;
        }
        var c = getGradientColor(sColor, eColor, maxValue, item.value);
        newYAxisArr.push({
            value: item.name,
            textStyle: {
                color: c,

            }
        });
    })
    option.yAxis[0].data = newYAxisArr;
    option.yAxis[0].axisLabel.formatter = (function (data) {
        return function (value, i) {
            if (!value) return ''
            return value + ' ' + data[i].value
        }
    })(data)
    mychart.setOption(option);
}
//
