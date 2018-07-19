/**
 * @Auther: windy
 * @Date: 2018/7/11 18:32
 * @Copyright: Copyright (c) 2018 ISIO
 * @Description:
 *   工具基础包
 */

var basic_utiles = function () {
    var up = function (x, y) {
        return x.value - y.value;

    };
    var down = function (x, y) {
        return y.value - y.value;
    }

    //初始化日期下拉列表
    var initTimeSelects = function (domId, url) {
        if (domId == null || domId == '' || url == null || url == '') {
            return;
        }
        $.ajax({
            type: "POST",//请求方式
            url: url,
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

    // 省份下拉框
    var initProvinceSelects = function (domId, url) {
        if (domId == null || domId == '' || url == null || url == '') {
            return;
        }
        $.ajax({
            type: "POST",//请求方式
            url: url,
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
     * 格式化数据
     * @param nameList
     * @param valueList
     * @returns {Array}
     */
    var generateData = function (nameList, valueList) {
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
     * @param valueList
     * @returns {Array}
     */
    var singleGenerateData = function (valueList) {
        var arr = [];
        for (var i = 0; i < valueList.length; i++) {
            var json = {};
            json['name'] = valueList[i]['name'];
            json['value'] = valueList[i]['value'];
            arr.push(json);
        }
        return arr;
    };
    var generateDataWithoutName = function (nameList, valueList) {
        var arr = [];
        for (var i = 0; i < nameList.length; i++) {
            var value = "";
            value = valueList[nameList[i]];
            arr.push(value);
        }
        return arr;
    }
        return {
        sortUp: function (x, y) {
            return up(x, y);
        },
        sortDown: function (x, y) {
            return down(x, y);

        },
        initAction: function (yeardomId, url1, proDomId, url2) {
            initTimeSelects(yeardomId, url1);
            initProvinceSelects(proDomId, url2);

        },
        generateData: function (nameList, valueList) {
            return generateData(nameList, valueList);

        },
        singleGenerateData: function (valueList) {
            return singleGenerateData(valueList);
        },
        generateDataWithoutName: function (nameList, valueList) {
            return generateDataWithoutName(nameList, valueList)
        }
    }
}();
