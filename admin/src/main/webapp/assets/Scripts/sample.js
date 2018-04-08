//1 -- begin
source = {
    text: '数据来源：监督司',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 10,
        color:'#ffff99',
		fontFamily:'黑体'
    },
    bottom: 0,
    right:20
};
option_sample1 = {
	title:[
		source],
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },

    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true,

    },
    xAxis: [
            {
                type: 'category',

                data: ['机械及安防产品', '农业生产资料', '建筑和装饰装修材料', '轻工产品', '电工及材料产品', '日用及纺织品', '电子电器'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    interval: 0,
                    rotate: 30,
                    textStyle:{color:'#fff'},
                },
                axisLine:{
                  lineStyle:{
                    color:'#fff'
                  }
                }
            }
        ],
    yAxis: [
            {
                type: 'value',
                name:'合格率',
                axisLabel:{
                  formatter:'{value}%',
                  textStyle:{color:'#fff'}
                },
                splitLine:{
                  show:false,
                  lineStyle:{
                    color:'rgba(0,0,0,0.6)'
                  }
                },
                axisLine:{
                  show:true,
                  lineStyle:{
                    color:'#fff'
                  }
                }
            }
        ],
    toolbox: {
        show: true,
        orient: 'vertical',
        right: '20%',
        top: 'top',
        feature: {
			       show:true,
        }
    },
    series: [
            {
                name: '抽查产品合格率',
                type: 'bar',
                barWidth: '60%',
                data: [93.85, 91.64, 91.26, 90.94, 88.8, 86.44, 83.69],
                label: {
                  normal: {
                      show: true,
                      position: 'inside'
                  }
                },
            }
        ]
};
//1 -- end

//2 -- begin
bar_category_gap = '25%'
bar_width = '15%'
axis_line_color = 'rgb(135,135,135)'

// 字体取决于图片、屏幕大小
// 标题 小图18，大图20
// 坐标轴 小图12，大图15
title_font_size = 20
category_font_size = 9

label_emph_fontsize = 9,
    label_emph_style = {
        show: true,
        position: 'insideRight',
        formatter: '{c}%',
    }

categories = ['安全隔离网闸','黑白复印机','吸油烟机','电热毯','微型计算机','厨房机械','固定式通用灯具','室内加热器','手持式信息处理设备','电风扇','豆浆机','电冰箱','热泵热水机（器）','皮肤及毛发护理器具','电热水壶','电饭锅','投影机','家用电动洗衣机','有源音箱','电水壶','电弧焊机','移动电话用锂离子电池','LED控制装置','LED照明产品','储水式电热水器','机顶盒','电源适配器','普通照明用自镇流荧光灯','空气净化器','移动电话','无线路由器','彩色电视机','电磁灶']

data = [100,100,98.3,93,92.9,91.4,91,90,89.8,88.3,88.2,87.8,87.8,87.8,86.7,86.6,86.4,85.4,84.3,82.8,82.5,82.5,81.7,81.2,80,80,77.2,76.4,75.4,73.3,72.7,71.7,28.8]

source2 = {
    text: '数据来源：质量技术监督局',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 10,
          color:'#ffff99',
    },
    bottom: 0,
    right:20
};
option_sample2 = {
    title: [{
        text: '',
        textStyle: {
            fontSize: title_font_size
        },
    },
        source2
    ],

    grid: {
        left: 150,
        height:600,
        top:'3%'
    },
    animationDuration:2000,
    visualMap:{
        type:'piecewise',
        splitNumber:2,
        bottom:'2%',
        inverse:true,
        precision:2,
        orient:'horizontal',
        dimension:0,
        textStyle:{
          color:'#fff',
        },
        pieces:[
          {
              min:98.5,
              max:101.00,
              label:'免关注产品',
              color:'#87CEFA'
          },
          {
            min:73.4,
            max:98.4,
            label:'一般关注产品',
            color:'#FFD700'
        },
            {
                min:0.00,
                max:73.3,
                label:'重点关注产品',
                color:'#ff0000'
            }
        ]
    },
    tooltip: {
        trigger: 'item',
    },
    yAxis: {
        type: 'category',
        data: categories,
        inverse: false,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle:{
              color:'#ffffcc'
            }
        },
        splitLine: {
            show: false,
            interval: 3,
            lineStyle: {
                width: 1,
                color:'#ffffcc'
            }
        },
        axisLabel: {
          rotate:0,
          interval:0,
            textStyle: {
                fontSize: 11,
                color:'#fff'
            },
        },
    },
    xAxis: {
        type:'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 1,
            }
        },
        axisTick: {
            length: 4
        },
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: false
        },
        name: '合格率',
        nameLocation: 'end',


    },
    series: [{
        type: 'bar',
        data: data,
        animationDuration:2000,
        // barWidth: 30,
        barCategoryGap: bar_category_gap,
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                formatter: '{c}%',
                textStyle:{
                         color:'#000000'
                    }

            }
        },
         itemStyle:{
                normal:{
                    color:function(param){
                        if(param.value<75.4){
                            return '#ff0000';}
                        else if(param.value < 100){
                            return '#FFD700';}
                        else
                            return '#87CEFA';
                    }
                }
            },
        markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ],
                label:{
                    normal:{
                        show:true,
                        formatter:'平均值：{c}%'
                    }
                }
            },

            itemStyle:{
                normal:{
                    color:'#fff'

                }
            }

    }]
};
//2 -- end
//3 -- begin
source3 = {
    text: '数据来源：质量技术监督局',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 10,
          color:'#ffff99',
		fontFamily:'黑体'
    },
    bottom: 0,
    right:20
};
option_sample3 = {
	title:[
		   source3],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['机械及安防产品', '农业生产资料', '建筑和装饰装修材料', '轻工产品', '电工及材料产品', '日用及纺织品', '电子电器'],
        selected:{
            '机械及安防产品':true,
            '农业生产资料':true,
             '建筑和装饰装修材料':true,
             '轻工产品':false,
             '电工及材料产品':false,
             '日用及纺织品':false,
             '电子电器':false
        },
        textStyle:{color:'#fff'}
    },
    color:['#c7ffec','#FF9933','#FF66FF','#00CC00','#000000','#FF0000','#029ed9'],
    grid: {
        left: '3%',
        top: '15%',
        right: '6%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        name:'',
        data: ['2011', '2012', '2013', '2014', '2015', '2016'],
        axisLabel:{
          formatter:'{value}年',
          textStyle:{
            color:'#fff'
          }
       },
       axisLine:{
         lineStyle:{
           color:'#fff'}
         }
    },
    yAxis: {
        type: 'value',
        min:70,
        max:100,
        axisLabel:{
          formatter:'{value}%',
          textStyle:{
            color:'#fff'
          }
       },
       axisLine:{
         lineStyle:{
           color:'#fff'
         }
       }
    },
    series: [
        {
            name: '机械及安防产品',
            type: 'line',
            data: [91.6,89.1, 88.9, 91.8, 94.2, 93.85]
        },
        {
            name: '农业生产资料',
            type: 'line',

            data: [87.2, 90.7,91.2, 91.2, 93.5,91.53571]
        },
        {
            name: '建筑和装饰装修材料',
            type: 'line',
            data: [82, 88, 88,91.2,92.2,91.28929]
        },
        {
            name: '轻工产品',
            type: 'line',
            data: [84.4,89.5,86.5,86,88.7, 90.93913]
        },
        {
            name: '电工及材料产品',
            type: 'line',
            data: [87.3, 87.2, 88, 91.8, 90.1, 88.8]
        }
        ,
        {
            name: '日用及纺织品',
            type: 'line',
            data: [90, 90.5, 87.8, 88.2, 87, 86.435]
        }
         ,
        {
            name: '电子电器',
            type: 'line',
            data: [81.6, 84.5, 85.8, 86.6, 79.3, 83.69393939]
        }
    ]
};
//3 -- end
//4 -- begin
source4 = {
    text: '数据来源：质量技术监督局',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
        color:'#ffff33',
		    fontFamily:'黑体'
    },
    bottom: 20,
    right:20
};
option_sample4 = {
    title: [{
        text: '',
        subtext: '',

    },source4],
    tooltip: {
        trigger: 'item',
        formatter: function(param){
            if(param.value>0)
                return param.name + '<br>' + param.value+'%';
            else
                return '未提交数据';
        }
    },
    grid:{

    },
    visualMap:{
                type: 'piecewise', //分段型。
                splitNumber: 5,
                inverse: true,

                textStyle:{
                  color:'#ffffff'
                },
                pieces: [{
                    min:0,
                    max:8,
                    label:'未提交',
                    color: '#fff'
                }, {
                    min: 8,
                    max: 84,
                    label:'8%-84%',
                    color: '#B01818'
                }, {
                    min: 84,
                    max: 88,
                    label:'84-88%',
                    color: '#f85d5d'
                }, {
                    min: 88,
                    max: 92,
                    label:'88%-92%',
                    color: '#f88f8f'
                }, {
                    min: 92,
                    max:96,
                    label:'92%-96%',
                    color: '#c4e595'
                }, {
                    min: 96,
                    max:100,
                    label:'96%-100%',
                    color: '#8cbf64'
                }], left: 'left',

                bottom:20,


            },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: { readOnly: false }
        }
    },
    series: [
        {
            name: '合格率',
            type: 'map',
            mapType: 'china',
            left:'5%',
            right:'15%',
            top:'-24%',
            zoom:0.7,
            roam: true,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                { name: '北京', value: 94.6 },
                { name: '天津', value: 95.8 },
                { name: '上海', value: 91.3 },
                { name: '重庆', value: 91.4 },
                { name: '河北', value: 91.9 },
                { name: '河南', value: 92.2 },
                { name: '云南', value: 94.7 },
                { name: '辽宁', value: 93.1 },
                { name: '黑龙江', value: 97.0 },
                { name: '湖南', value: 87.7 },
                { name: '安徽', value: 93.4 },
                { name: '山东', value: 94.2 },
                { name: '新疆', value: 89.8 },
                { name: '江苏', value: 92.7 },
                { name: '浙江', value: 91.4 },
                { name: '江西', value: 82.5 },
                { name: '湖北', value: 92.3 },
                { name: '广西', value: 90.9 },
                { name: '甘肃', value: 93.4 },
                { name: '山西', value: 91.9 },
                { name: '内蒙古', value: 95.7 },
                { name: '陕西', value: 89.8 },
                { name: '吉林', value: 96.4 },
                { name: '福建', value: 92.2 },
                { name: '贵州', value: 91.2 },
                { name: '广东', value: 85.3 },
                { name: '青海', value: 83.9 },
                { name: '四川', value: 90.6 },
                { name: '宁夏', value: 97.1 },
                { name: '海南', value: 97.8 },
                { name: '西藏', value: 0 },
                { name: '台湾', value: 0 },
                { name: '香港', value: 0 },
                { name: '澳门', value: 0 }
            ]
        }
    ]
};
//4 -- end
//5 -- begin
option_sample5 = {
	title:[source4],
    tooltip: {
        trigger: 'item',
        formatter: function(param){
            if(param.value>0)
                return param.name + " : " + param.value + "%";
            else
                return param.name + " : " + '未提交数据';
        }
    },
      visualMap:{
                type: 'piecewise', //分段型。
                splitNumber: 5,
                inverse: true,
                pieces: [{
                    value:0,
                    label:'未提交',
                    color: '#fff'
                }, {
                    min: 8,
                    max: 84,
                    label:'8%-84%',
                    color: '#B01818'
                }, {
                    min: 84,
                    max: 88,
                    label:'84%-88%',
                    color: '#f85d5d'
                }, {
                    min: 88,
                    max: 92,
                    label:'88%-92%',
                    color: '#f88f8f'
                }, {
                    min: 92,
                    max:96,
                    label:'92%-96%',
                    color: '#c4e595'
                }, {
                    min: 96,
                    max:100,
                    label:'96%-100%',
                    color: '#8cbf64'
                }], left: 'left',
                textStyle: {
                    color: '#fff'
                },
                bottom:30,
            },
    grid: {
        height: 530,
        width: 8,
        right: 180,
        top:0
    },
    xAxis: {
        type: 'category',
        data: [],
        splitNumber: 1,
        show: false
    },
    yAxis: {
        position: 'right',
        min: 0,
        max: 20,
        splitNumber: 20,
        inverse: true,
        axisLabel: {
            show: true,
            textStyle:{
                color:'#ffff00'
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: []
    },
    series: [
        {
          name: '合格率',
          type: 'map',
          mapType: 'china',
          left:'15%',
          top:'8%',
          zoom:1.2,
          roam: true,
          label: {
              normal: {
                  show: true
              },
              emphasis: {
                  show: true
              }
          },
            data:[
                { name: '北京', value: 95 },
                { name: '天津', value: 96.3 },
                { name: '上海', value: 92.4 },
                { name: '重庆', value: 91.8 },
                { name: '河北', value: 92.5 },
                { name: '河南', value: 92.8 },
                { name: '云南', value: 95.2 },
                { name: '辽宁', value: 93.6 },
                { name: '黑龙江', value: 97.3 },
                { name: '湖南', value: 88.6 },
                { name: '安徽', value: 94 },
                { name: '山东', value: 94.6 },
                { name: '新疆', value: 89.8 },
                { name: '江苏', value: 90.7 },
                { name: '浙江', value: 93.4 },
                { name: '江西', value: 83.3 },
                { name: '湖北', value: 92.9 },
                { name: '广西', value: 91.2 },
                { name: '甘肃', value: 93.4 },
                { name: '山西', value: 92.4 },
                { name: '内蒙古', value: 95.8 },
                { name: '陕西', value: 90.4 },
                { name: '吉林', value: 96.6 },
                { name: '福建', value: 93.3 },
                { name: '贵州', value: 91.7 },
                { name: '广东', value: 86.4 },
                { name: '青海', value: 83.9 },
                { name: '西藏', value: 0 },
                { name: '四川', value: 91.1 },
                { name: '宁夏', value: 97.3 },
                { name: '海南', value: 98 },
                { name: '台湾', value: 0 },
                { name: '香港', value: 0 },
                { name: '澳门', value: 0 }
            ]
        },
        {
            zlevel: 2,
            name: '地图指示',
            type: 'bar',
            barWidth: 5,
            itemStyle: {
                normal: {
                    color: undefined,
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            data: [20]
        }
    ]
};

//5 -- end


//6 -- begin
option_sample6 = {
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    color:['rgb(255,102,0)','rgb(176,222,9)'],
    legend: {
         data : ['产品合格率','投诉数量占全年投诉比例'],
        top:'9%',
        textStyle:{
          color:"#fff"
        }
    },

    grid: {
        left: '5%',
        top:'15%',
        width:'80%',
        right: '14%',
        bottom: '7%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLabel:{
              textStyle:{
                color:'#fff'
              }
            },
            axisLine:{
              lineStyle:{
                color:"#ffff"
              },

            },
            data : ['2011','2012','2013','2014','2015','2016']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'产品合格率',
               min:0,
            max:100,
            axisLabel:{
              textStyle:{
                color:'#fff'
              },
              formatter:'{value}%',
            },
            axisLine:{
              lineStyle:{
                color:"#ffff"
              },

            }
        }
    ],
    series : [
        {
            name:'产品合格率',
            type:'line',
            stack: '总量',
            yAxisIndex: 0,
            data: [81.6, 84.5, 85.8, 86.6, 79.3, 83.69393939]
        },
        {
            name:'投诉数量占全年投诉比例',
            type:'line',
             yAxisIndex: 0,
           stack: '总量1',
            data:[23.5,23.57,23.2,20.76,17.02,18.78]
        }
    ]
};

//6 -- end


//7 -- begin


option_sample7 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '13%',
        top:'4%',
        right: '14%',
        bottom: '32%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['国家家用电器质量监督检验中心','福建省产品质量检验研究院','国家日用电器质量监督检验中心','国家工程复合材料产品质量监督检验中心','国家农机具质量监督检验中心','国家电器产品安全质量监督检验中心','南京市产品质量监督检验院','深圳市计量质量检测研究院','国家通用电子元器件及产品质量监督检验中心','国家电器安全质量监督检验中心（浙江）','国家中文信息处理产品质量监督检验中心','国家建筑工程材料质量监督检验中心','国家自行车电动自行车质量监督检验中心','国家纸张质量监督检验中心','浙江省质量检测科学研究院'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
                rotate:-120,
                interval:0,
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[575,467,454,441,413,394,383,382,381,352,342,336,332,310,301],
            label: {
                  normal: {
                      show: true,
                      position: 'top'
                  }
                },
        }
    ]
};

//7 -- end
