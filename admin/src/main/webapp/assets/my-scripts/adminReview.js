$(function () {
    //js初始化方法

    initProvinceSelects("province");
    loadData("全国总计", 2016);
});

/**
 * 省份下拉框
 * @param domId
 */
function initProvinceSelects(domId) {
    $.ajax({
        type: "POST",//请求方式
        url: "/assets/json/province.json",//地址，就是json文件的请求路径
        dataType: "json",//数据类型可以为 text xml json  script  jsonp
        success: function(result){

            $("#" + domId).append(" <option value=\"全国总计\" selected>" + "全国" + "</option>");

            $.each(result, function (i, item) {
                $("#" + domId).append(" <option value=\"" + item.name + "\">" + item.name + "</option>");
            });
            $("#" + domId).selectpicker('refresh');
        }
    });
}

/**
 * 年份或者省份选择改变时
 * @param obj
 */
function selectOnChange() {
     var year = $('#year').val();
     var province = $('#province').val();

     loadData(province, year);
}

/**
 * 去后台加载数据
 */
function loadData(province, year) {
    $.ajax({
        type: "POST",//为post请求
        url: "/safety/loadData.action",
        data: {
            province: province,
            year: year
        },
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            showGlPieChart(province, year, json['gl_qg'], json['gl']);
            showBsqrPieChart(json['bsqr']);
            showFyjgPieChart(json['fyjg']);
            showSqfysxPieChart(json['sqfysx']);
            /*showSqfysxPieChart(json['ysj']);
            showSqfysxPieChart(json['wsj']);
            showSqfysxPieChart(json['xzpc']);*/
        }
    });
}

/**
 * 概览
 * @param province
 * @param year
 * @param data1
 * @param data2
 */
function showGlPieChart(province, year, data1, data2) {
    //var gl = ['上期结转', '本期新收', '受理', '申请人总数'];
    province = province == '全国总计' ? '全国' : province;
    for (var i = 0; i < 4; i++){
        $(".c" + (i + 1)).next().text(data2[i]);
        $(".c" + (i + 1)).parent().next().next().next().text(province + ":" + data2[i]);
        $(".c" + (i + 1)).parent().next().next().next().next().text("全国:" + data1[i]);
        var percent = (data2[i] / data1[i]).toFixed(2) * 100 + "%";
        $(".c" + (i + 1)).animate({
            height: percent
        },1000);
    }

}


/**
 * 被申请人饼图
 * @param data
 */
function showBsqrPieChart(data) {
    var bsqr = ['乡镇政府','县级政府的部门','县级政府','地(市)级的部门','地(市)级政府','省级政府的部门','省部级行政机关','其他'];
    var fyjg = ['县级政府的部门','县级政府','地(市)级的部门','地(市)级政府','省级政府的部门','省部级行政机关'];
    var sqfysx = ['行政处罚--拘留','行政处罚--没收','行政处罚--罚款','行政处罚--其他','行政强制措施--对人身的强制措施','行政强制措施--对财产的强制措施', '行政征收','行政许可','行政确权','行政确认','信息公开','行政不作为', '其他'];
    var ysj = ['总计','驳回','维持','确认违法','撤销','变更', '责令履行','调解','终止--和解协议','终止--自愿撤回申请','终止--被申请人改变后撤回申请','终止--其他', '其他'];
    var wsj = ['未审结'];
    var xzpc = ['件数', '赔偿金额（元）'];

    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        title:[],
        color:['#8fc31f','#f35833','#00ccff','#ffcc00', '#3498DB','#228B22','#C0392B', '#FFFF00'],
        animationDuration:2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: bsqr,
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
                    }
                }
            },
            top:'6%',
            show:false,
            left:'10%',
            right:'20%'
        },
        label:{
            normal:{
                textStyle:{
                    fontSize:14
                }
            },
            emphasis:{
                textStyle:{
                    fontSize:14
                }
            }
        },
        series : [
            {
                name: '被申请人',
                type: 'pie',
                radius : '50%',
                center: ['50%', '50%'],
                data: generateData(bsqr, data),
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            //position:'inside',
                            formatter: '{b} \n{c} ({d}%)'
                        }
                    },
                    labelLine :{show:true},
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }
        ]
    };

    var chart_dom = echarts.init(document.getElementById('div_bsqr'));
    chart_dom.setOption(option);

}

/**
 * 复议机关饼图
 * @param data
 */
function showFyjgPieChart(data) {
    var fyjg = ['县级政府的部门','县级政府','地(市)级的部门','地(市)级政府','省级政府的部门','省部级行政机关'];

    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"

        },
        title:[],
        color:['#8fc31f','#f35833','#00ccff','#ffcc00', '#3498DB','#228B22','#C0392B', '#FFFF00'],
        animationDuration:2000,
        legend: {
            orient: 'vertical',
            x: 'right',
            data: fyjg,
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
                    }
                }
            },
            top:'6%',
            show:false,
            left:'10%',
            right:'20%'
        },
        label:{
            normal:{
                textStyle:{
                    fontSize:14
                }
            },
            emphasis:{
                textStyle:{
                    fontSize:14
                }
            }
        },
        series : [
            {
                name: '复议机关',
                type: 'pie',
                radius : '50%',
                center: ['50%', '50%'],
                data: generateData(fyjg, data),
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            //position:'inside',
                            formatter: '{b} \n{c} ({d}%)'
                        }
                    },
                    labelLine :{show:true},
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }
        ]
    };

    var chart_dom = echarts.init(document.getElementById('div_fyjg'));
    chart_dom.setOption(option);

}

/**
 * 申请复议事项饼图
 * @param data
 */
function showSqfysxPieChart(data) {
    var xzcf = ['拘留','没收','罚款','其他'];
    var xzqzcs = ['对人身的强制措施','对财产的强制措施'];
    var sqfysx = ['行政处罚','行政强制措施', '行政征收','行政许可','行政确权','行政确认','信息公开','行政不作为', '其他'];
    var json = [];
    json[0] = data[0] + data[1] + data[2] + data[3];
    json[1] = data[4] + data[5];
    for (var i = 6; i < data.length; i++){
        json[i - 4] = data[i];
    }

    //旭日形状
    var data1 = [];
    var children = [];
    for(var i = 0; i < 4; i++){
        children[i] = [];
    }
    for(var i = 0; i < 4; i++){
        var child = {
            name: xzcf[i],
            value: 1,
            label: {
                position: 'inside',
                rotate: 'tangential'
            }
        }
        children[0].push(child);
    }
    for(var i = 0; i < 2; i++){
        var child = {
            name: xzqzcs[i],
            value: 2,
            label: {
                position: 'inside',
                rotate: 'tangential'
            }
        }
        children[1].push(child);
    }
    for (var i = 0; i < sqfysx.length; ++i) {
        data1.push({
            value: 4,
            name: sqfysx[i],
            label: {
                position: 'inside',
                rotate: 'tangential'
            },
            children: children[i]
        });
    }



    var option = {
        tooltip: {
            show: false
        },
        title:[],
        color:['#8fc31f','#f35833','#00ccff','#ffcc00', '#3498DB','#228B22','#C0392B', '#FFFF00'],
        animationDuration:2000,
        label:{
            normal:{
                textStyle:{
                    fontSize:14
                }
            },
            emphasis:{
                textStyle:{
                    fontSize:14
                }
            }
        },
        series : [
            {
                name: '申请复议事项',
                type: 'pie',
                radius : '50%',
                roseType: 'area',
                tooltip : {
                    show: true,
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"

                },
                zlevel: 2,
                center: ['50%', '50%'],
                data: generateData(sqfysx, json),
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            //position:'inside',
                            formatter: '{b} \n{c} ({d}%)'
                        }
                    },
                    labelLine :{show:true},
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            },
            {
                type: 'sunburst',
                nodeClick: false,
                levels: [{}, {
                    r0: '48%',
                    r: '60%',
                    label: {},
                   /* itemStyle: {
                        //shadowBlur: 2,
                        //borderWidth: 6,
                        borderColor: '#42ced1',
                    }*/
                }, {
                    r0: '60%',
                    r: '70%',
                    label: {},
                    /*itemStyle: {
                        //borderWidth: 6,
                        borderColor: '#42b0d1',
                        opacity: 0.8
                    }*/
                }, {
                    r0: '70%',
                    r: '76%',

                    /*itemStyle: {
                        borderWidth: 6,
                        borderColor: '#22bfb1',
                        opacity: 0.6
                    }*/
                }],
                data: data1
            }
        ]
    };

    var chart_dom = echarts.init(document.getElementById('div_sqfysx'));
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





