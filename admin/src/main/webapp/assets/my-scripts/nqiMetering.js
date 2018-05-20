$(function () {
    //js初始化方法

    showMeteringLawManagement('div_m_std');
    showMeteringInspection(2016);

});

/**
 * 年份选择改变时
 * @param obj
 */
function yearSelectOnChange(obj) {
    $.ajax({
        type: "POST",//为post请求
        url: "/basis/showMeteringLawManagementByYears.action",
        data: {
            type: $('#metering-law-type').val(),
            years: $(obj).val().join(",")
        },
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象
            drawChartByYears(json);
        }
    });
}

/**
 * 绘制计量法制管理中的图，type是类型
 * @param type
 */
function showMeteringLawManagement(type){
    var province = ['广东省','山东省','四川省','河北省','江苏省','黑龙江省',
        '内蒙古自治区','浙江省','河南省','辽宁省','安徽省','山西省','湖北省','陕西省','湖南省',
        '  国家质检总局','福建省','新疆维吾尔自治区','吉林省','广西壮族自治区','江西省','北京市',
        '贵州省','甘肃省','重庆市','云南省','天津市','海南省','上海市','青海省','宁夏回族自治区','西藏自治区','  中国计量院'];

    var label = labelFormat(type);

    $.ajax({
        type: "POST",//为post请求
        url: "/basis/showMeteringLawManagement.action",
        data: {
            type: type,
            province: province.join(",")
        },
        async: false,
        error: function(data){//请求失败之后的操作
            return;
        },
        success: function(data){//请求成功之后的操作
            var json = JSON.parse(data); //json字符串转为json对象

            var option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color:['#81ff38','#ff7438', '#31d0e9', '#ff6666'],
                legend: {
                    data: label,
                    textStyle:{
                        color:['#81ff38','#ff7438', '#31d0e9', '#ff6666']
                    }
                },
                grid: {
                    left: '3%',
                    top:'-2%',
                    right: '4%',
                    bottom: '17%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : province,
                        splitLine:{show:false},
                        axisTick:{
                            lineStyle:{color:'#fff'}
                        },
                        axisLabel:{
                            textStyle:{color:'#fff'},
                            rotate:30,
                            interval:0,
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel:{
                            textStyle:{color:'#fff'},
                        }
                    }
                ],
                series : dataFormatInit(type, json)
            };

            var chart_m_legal = echarts.init(document.getElementById('div_m_legal'));
            chart_m_legal.setOption(option);

            //清空年份下拉菜单
            $('.selectpicker').selectpicker('val', "");

            $('#metering-law-type').val(type);//保存已选的类型

        }
    });

}

/**
 * 初始切换tab页时的数据格式化
 * @param json
 * @param type
 */
function dataFormatInit(type, json) {
    var data = [];
    var label = labelFormat(type);
    for(var i = 0; i < label.length; i++){
        var p = 'data' + (i + 1);
        var seriesData = {
            name:label[i],
            type:'bar',
            data:json[p]
        }

        data.push(seriesData);
    }
    return data;
}

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
   /* var dataall = [[13870,77394,11761,133252,5298,10745,116961,11668,19536,263147,1071271,360278,63775,83857,24899,197453,100164,123713,55177,429885,44411,13250,61860,100601,9322,7874,0,50122,16419,3169,7750,43922],
        [6985,63663,264363,142890,24166,23429,108754,30386,33447,104802,565461,160552,61798,48824,34193,273601,78597,64955,44594,236694,46658,9032,52764,170347,6114,21994,245,35680,72750,1599,32131,76900],
        [30127,891097,173755,1479272,102797,923823,1137783,1481021,591651,1090171,3456121,2121641,901169,1304269,654781,2565843,1387391,1796781,723695,5520107,513508,316210,1761182,2798713,486236,213376,9113,1053273,455497,147528,202715,1052901],
        [1663,98846,20367,162773,8351,111179,213979,73030,80979,126824,490161,265668,113092,308708,68883,288197,291414,177463,125934,998100,157173,159005,287930,451446,42637,56642,3838,129252,104891,10830,25063,110930],
        [4292,42453,7984,378222,6602,194339,69348,40590,9714,41618,419164,333175,151747,141761,84774,208208,565511,488231,457533,672570,289934,8968,848721,478521,16970,575479,0,121069,69333,28899,7231,169295],
        [1887,11043,57,31261,905,9488,10044,1618,4489,19778,36458,12816,5737,9850,10166,16648,29458,31710,3805,40199,21646,309,2133,23545,573,3976,131,5691,2129,562,1409,6465],
        [5340,5635,118,2726,356,9969,6303,2308,3858,12156,16248,12862,2588,2874,4427,10982,13412,11056,2481,22953,3029,663,3441,9557,1429,2232,0,4322,933,206,563,1540],
        [3829,38040,15287,108296,4967,41771,123247,24119,22508,85993,247666,82109,28786,39800,14198,190838,48416,38244,35493,159320,13048,31252,22023,99210,7296,18609,64,47991,13100,5835,8896,127297],
        [2204,4051,78,4469,684,1747,8726,1653,3061,23581,27435,5245,1973,2329,1011,30595,8296,11173,4150,13328,1677,456,1052,22801,1774,2824,0,13432,10161,96,6520,43658],
        [3626,32836,764,12171,3195,2721,9814,7269,2096,37004,32688,26072,6163,6417,4903,26579,23798,34533,12745,34309,5252,5203,8994,29109,1844,9536,0,4558,1103,118,1331,4968],
        [850,3504,263,6807,2302,4681,3707,2257,2399,6583,40946,18528,20900,3657,1789,75690,24537,8212,6477,7943,1437,189,1224,9085,323,21470,0,13975,5243,130,643,3331],
        [1638,116945,5045,544672,62614,44844,188125,41679,5251,7655,923671,59272,311465,32942,104480,143796,355465,42752,79471,241283,261045,504,49493,360204,68125,252167,1952,310506,209847,1774,78285,45464]];*/
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

/**
 * 随选择时间画条形图
 * @param data
 */
function drawChartByYears(json) {
    var type = $('#metering-law-type').val();
    var yearList = json['year'];
    var legend = legendFormat(type, yearList);

    var data = dataFormatter(json);

    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#81ff38','#ff7438','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a',
            '#6e7074', '#546570', '#c4ccd3', '#ca00b3', '#3ca418', '#31d0e9', '#ed902c', '#d8436b', '#b0cac3', '#a41f35'],
        legend: {
            data: legend,
            textStyle:{
                color:['#81ff38','#ff7438','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a',
                    '#6e7074', '#546570', '#c4ccd3', '#ca00b3', '#3ca418', '#31d0e9', '#ed902c', '#d8436b', '#b0cac3', '#a41f35']
            }
        },
        grid: {
            left: '3%',
            top:'12%',
            right: '4%',
            bottom: '17%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : json['province'],
                splitLine:{show:false},
                axisTick:{
                    lineStyle:{color:'#fff'}
                },
                axisLabel:{
                    textStyle:{color:'#fff'},
                    rotate:30,
                    interval:0,
                }
            }
        ],
        yAxis: [
            {
                type : 'value',
                axisLabel: {
                    textStyle:{color:'#fff'},
                    /*formatter: function (a) {
                        a = +a;
                        return isFinite(a)
                            ? echarts.format.addCommas(+a / 1000)
                            : '';
                    }*/
                }
            }
        ],
        dataZoom: [
            {
                show: true,
                start: 0,
                end: 12,
                textStyle: {
                    color:'#fff'
                }
            },
            {
                type: 'inside',
                start: 94,
                end: 100
            },
            {
                show: false,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '96%',
                textStyle: {
                    color:'#fff'
                }
            }
        ],
        series :data
    };

    var chart_m_legal = echarts.init(document.getElementById('div_m_legal'));
    chart_m_legal.setOption(option);
}

/**
 * 数据格式化
 * @param data
 * @returns {null}
 */
function dataFormatter(data) {
    var result = [];
    var yearList = data['year'];

    var type = $('#metering-law-type').val();
    var label = labelFormat(type);

    for (var i = 0; i < yearList.length; i++) {
        var year = yearList[i];
        for (var j = 0; j < label.length; j++) {
            var seriesData = data['data' + (j + 1)];
            var seriesItem = {
                name: year + '年' + label[j],
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: seriesData[i][year]
            };

            result.push(seriesItem);
        }

    }

    return result;
}

/**
 * 格式化label
 * @param type
 */
function labelFormat(type) {
    var label = [];
    if(type == 'div_m_std'){
        label[0] = '建立在依法设置计量检定机构的社会公用计量标准';
        label[1] = '依法授权的社会公用计量标准';
        label[2] = '依法授权其它单位开展专项检定工作计量标准';
        label[3] = '建立在部门、企事业单位的最高计量标准';
    }
    else if(type == 'authorization'){
        label[0] = '依法设置的计量检定技术机构';
        label[1] = '依法授权建立的计量检定机构';
        label[2] = '其它承担专项授权检定任务的机构和项目';
        label[3] = '授权承担计量器具型式评价的机构和项目';
    }
    else if(type == 'new_product'){
        label[0] = '型式批准证书';
    }
    else if(type == 'make_modify'){
        label[0] = '取得制造计量器具许可证的单位、个体工商户';
        label[1] = '取得修理计量器具许可证的单位、个体工商户';
    }
    else if(type == 'supervise_check'){
        label[0] = '法制性--检查计量器具';
        label[1] = '法制性--合格计量器具';
        label[2] = '计量器具性能--检查计量器具';
        label[3] = '计量器具性能--合格计量器具';
    }
    else if(type == 'compulsory_inspection'){
        //do something;
    }
    else if(type == 'check_person'){
        label[0] = '依法设置计量检定机构';
        label[1] = '授权法定计量检定机构';
        label[2] = '授权的其它单位';
        label[3] = '企、事业单位';
    }
    else if(type == 'product_weight'){
        label[0] = '抽查批次';
        label[1] = '合格批次';
    }
    else if(type == 'socail_fair'){
        label[0] = '本年新建';
        label[1] = '称重类';
        label[2] = '其他';
    }
    else if(type == 'assurance_capability'){
        label[0] = '取得C标志企业数';
        label[1] = '取得C标志产品规格数';
    }

    return label;
}

/**
 * 图例format
 * @param type
 * @param yearList
 */
function legendFormat(type, yearList) {
    var label = labelFormat(type);
    var legend = [];
    for (var i = 0; i < yearList.length; i++) {
        if(type == 'new_product'){
            legend[i] = yearList[i] + '年' + label[0];
        }
        if(type == 'make_modify' || type == 'product_weight' || type == 'assurance_capability'){
            legend[2*i] = yearList[i] + '年' + label[0];
            legend[2*i + 1] = yearList[i] + '年' + label[1];
        }
        else if(type == 'socail_fair'){
            legend[3*i] = yearList[i] + '年' + label[0];
            legend[3*i + 1] = yearList[i] + '年' + label[1];
            legend[3*i + 2] = yearList[i] + '年' + label[2];
        }
        else{
            legend[4*i] = yearList[i] + '年' + label[0];
            legend[4*i + 1] = yearList[i] + '年' + label[1];
            legend[4*i + 2] = yearList[i] + '年' + label[2];
            legend[4*i + 3] = yearList[i] + '年' + label[3];
        }
    }

    return legend;
}





