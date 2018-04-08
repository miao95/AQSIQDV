source_lisence = {
    text: '数据来源：质量技术监督局',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
		fontFamily:'黑体'
    },
    bottom: 0,
    right:250
};
var data = [
               {
                   name: "江苏",
                   value: 1120,
                   rate: -37.1
               }, {
                   name: "浙江",
                   value: 917,
                   rate: -24.8
               },
                {
                    name: "广东",
                    value: 796,
                    rate: -18
                }, {
                    name: "山东",
                    value: 758,
                    rate: 23.5
                }, {
                    name: "河北",
                    value: 548,
                    rate: -46.9
                }, {
                    name: "安徽",
                    value: 299,
                    rate: -26.4
                }, {
                    name: "河南",
                    value: 223,
                    rate: -34
                }, {
                    name: "辽宁",
                    value: 204,
                    rate: -61.1
                }, {
                    name: "上海",
                    value: 183,
                    rate: -50.1
                }, {
                    name: "四川",
                    value: 181,
                    rate: -67.8
                }, {
                    name: "云南",
                    value: 169,
                    rate: -21.8
                }, {
                    name: "北京",
                    value: 155,
                    rate: -19.3
                }, {
                    name: "山西",
                    value: 155,
                    rate: -38.7
                }, {
                    name: "福建",
                    value: 151,
                    rate: -44.9
                }, {
                    name: "陕西",
                    value: 147,
                    rate: -38.2
                }, {
                    name: "湖南",
                    value: 134,
                    rate: -47.2
                }, {
                    name: "重庆",
                    value: 120,
                    rate: -47.4
                }, {
                    name: "湖北",
                    value: 118,
                    rate: -31.8
                }, {
                    name: "江西",
                    value: 103,
                    rate: -48.5
                }, {
                    name: "天津",
                    value: 95,
                    rate: -26.9
                }, {
                    name: "贵州",
                    value: 84,
                    rate: -29.4
                }, {
                    name: "黑龙江",
                    value: 70,
                    rate: -44.0
                }, {
                    name: "广西",
                    value: 63,
                    rate: -70.4
                }, {
                    name: "甘肃",
                    value: 50,
                    rate: -61.2
                }, {
                    name: "内蒙古",
                    value: 42,
                    rate: -42.5
                }, {
                    name: "吉林",
                    value: 422,
                    rate: -68.2
                }, {
                    name: "新疆",
                    value: 36,
                    rate: -60.9
                }, {
                    name: "宁夏",
                    value: 30,
                    rate: -16.7
                }, {
                    name: "青海",
                    value: 13,
                    rate: 0.0
                }, {
                    name: "海南",
                    value: 5,
                    rate: -78.3
                }, {
                    name: "西藏",
                    value: 1,
                    rate: -66.7
                }
            ]
var resultdata1 = [];
var resultdata2 = [];
var titledata = [];
for (var i = 0; i < data.length; i++) {

    var d1 = {
        name: data[i].name,
        value: data[i].value
    };
    var d2 = {
        name: data[i].name,
        value: data[i].rate
    };
    resultdata1.push(d1);
    resultdata2.push(d2);
}

function NumDescSort(a,b){
    return a.value-b.value;
}

resultdata1.sort(NumDescSort);
resultdata2.sort(NumDescSort);
for(i = 0; i< data.length;i++){
    titledata.push(resultdata2[i].name);
}
option_lisence = {
    title: [{
        text: '',
        subtext: '',
        left: 'center'
    },{
        text: '同比率%' ,
        right: 20,
        top: '3%',
        width: 100,
        textStyle: {
            color: '#000',
            fontSize: 12
        }
    },source_lisence],
    tooltip: {
        trigger: 'item',

    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: [''],
        selectedMode: 'single',
    },
    visualMap: {
        min: 1120,
        max: 0,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,

        color: ['rgb(130,130,5)','rgb(197,197,180)'],
        dimension: 0
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    grid: {
        right: '0%',
        top: '7%',
        bottom: 40,
        width: '15%',
        height:550
    },
    xAxis: [{
        position: 'top',
        type: 'value',
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
        axisLabel:{
            show:false
        }
    }],
    yAxis: [{
        type: 'category',
        data: titledata,
        axisTick: {
            alignWithLabel: true
        },
        splitNumber:30,
        max:30,
        axisLabel:{
            itemStyle:{
                color:'#ff0000'
            }
        }


    }],
    series: [{
        z: 1,
        name: '许可证发证数',
        type: 'map',
        map: 'china',
        left:'0%',
            right:'15%',
            top:'-12%',
            zoom:0.7,
        
        label: {
            normal: {
                show: true,

            },
            emphasis: {
                show: true
            }
        },
        //roam: true,
        data: resultdata1
    }, {
        name: '同比率',
        z: 2,
        top:'5%',
        type: 'bar',
        barWidth:'70%',
          barCategoryGap: '-20%',
        label: {
            normal: {
                show: true,
                textStyle:{
                    fontSize:9,
                    color:'rgb(130,130,5)'
                },
                color:'#ff0000'
            },
            emphasis: {
                show: true,
            }
        },
        itemStyle: {
            normal:{
                color:'#ff0000'
            },
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
        data: resultdata2
    }]
};
//-- 2 begin


data=[

{name:'电力整流器',value:	100.00},
{name:'钻井悬吊工具',value:	100.00},
{name:'公路桥梁支座',value:	100.00},
{name:'摩托车乘员头盔',value:	100.00},
{name:'电力调度通讯设备',value:	100.00},
{name:'棉花加工机械',value:	100.00},

{name:'电力金具',value:65.90},
{name:'水工金属结构',value:65.80},
{name:'无线广播电视发射设备',value:63.20},
{name:'电热毯',value:56.00},
{name:'税控收款机',value:0.00}

    ];
var titledata = [];
for(i = 0; i<data.length;i++){
    titledata.push(data[i].name);
}
option_lisencerate = {
    title: [{
        text: '',
        subtext: ''
    },source_lisence],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    animationDuration:2000,
    visualMap:{
        type:'piecewise',
        splitNumber:2,
        inverse:true,
        precision:2,
        dimension:0,
        pieces:[
            {
                min:0.00,
                max:66.00,
                label:'发证率最低的五种产品',
                color:'#ffff00'
            },
            {
                min:96.00,
                max:101.00,
                label:'发证率最高的五种产品',
                color:'#ff0000'
            }
        ]
    },
    legend: {
        data: ['2016']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'15%',
        width:'100%',
        containLabel: true,
        height:'70%'
    },
    xAxis: {
        type: 'value',
        boundaryGap:false,
        axisLabel: {
            formatter: '{value}%'
        },
        name:'获证率'
    },
    yAxis: {
        type: 'category',
        data:titledata

    },
    series: [
        {
            name: '2016年',
            type: 'bar',
            itemStyle:{
                normal:{
                    color:function(param){
                        if(param.value<100){
                            return '#ff0000';}
                        else{
                            return '#00CC00';}
                    }
                }
            },
            data: data

        }
    ]
};
//-- 2 end
