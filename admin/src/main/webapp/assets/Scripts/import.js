source_import = {
    text: '数据来源：通关司',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
		fontFamily:'黑体'
    },
    bottom: 0,
    right:20
};
source_word = {
    text: '数据来源：通关司',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
		fontFamily:'黑体'
    },
    bottom: '5%',
    right:20
};

// ---1 begin
option_import1 = {
    title: [{
        text: ''
    },source_import],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    color:['#cd171a','#ffff00'],
    legend: {
        data: ['进出口货值', '检验检疫货值'],
         top:'6%',
         right:'2%'
    },
    toolbox: {
        feature: {
            //saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2014年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '2015年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '2016年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                interval: 0,
                rotate: 60
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name:'亿美元'
        }
    ],
    series: [
        {
            name: '进出口货值',
            type: 'line',

            areaStyle: { normal: {} },
            data: [3823, 2508, 3321, 3582, 3548, 3416, 3782, 3670, 3962, 3682, 3689, 4054, 3405, 2778, 2861, 3185, 3220, 3375, 3472, 3335, 3508, 3232, 3404, 3883, 3405, 2778, 2861, 3185, 3220, 3375, 3472, 3335, 3508, 3232, 3404, 3883]
        },
        {
            name: '检验检疫货值',
            type: 'line',

            areaStyle: { normal: {color:'#ffff00'} },
            data: [1121, 848, 1046, 1059, 1068, 984, 1050, 970, 1019, 922, 923, 1022, 911, 642, 826, 812, 789, 812, 900, 812, 825, 726, 731, 845, 911, 642, 826, 812, 789, 812, 900, 812, 825, 726, 731, 845]
        }
    ]
};


    //---1 end

    //---2 begin
   option_import2 = {
     title: [{
         text: ''
     },source_import],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
	 toolbox: {
        show: true,
        orient: 'vertical',
        right: '20%',
        top: '6%',
        feature: {

			show:true,
			myTool1:{
				show:true,
				title:'产品批次不合格率高于货值不合格率，\n说明不合格的产品多数集中在低价值的产品。',
				icon:'image://chat_exclamation.png',
				iconStyle:{
					color:'#ff0000'
				}
			}
        }
    },

    color:['rgba(1,82,147,1)','rgba(238,67,57,1)'],
    legend: {
        data: ['货值不合格率', '批次不合格率'],
		top:'5%',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0],
		axisLabel:{
			show:true,
			formatter:'{value}%',
			},

    },
    yAxis: {
        type: 'category',
        data : ['食品添加剂', '危险化学品', '锅炉及压力容器', '医疗仪器', '非金属矿产品', '信息设备', '检验测量器具', '机床', '成套设备', '可做原料用废物', '金属矿', '棉花'],

    },
    series: [

        {
            name: '货值不合格率',
            type: 'bar',
            barGap:0,
            data: [8.58, 10.41, 10.44, 10.56, 24.84, 16.33, 8.65, 15.12, 16.57, 21.29, 33.82, 49.43]
        },
        {
            name: '批次不合格率',
            type: 'bar',
            data: [5.70, 5.68, 6.96, 8.11, 8.21, 10.15, 11.57, 15.54, 17.55, 18.56, 29.09, 43.54]
        }
    ]
};


    //---2 end

    //-- 3 begin
    option_import3 = {
      title: [{
          text: ''
        },source_word],
        tooltip: {
             trigger: 'item',
        },
        legend: {
            top:'7%',
            right:'5%'
        },

        series: [{
            name: '不合格原因比例',
            // areaStyle: {normal: {}},
      			type: 'wordCloud',
              	gridSize: 20,
      			animationDuration:2000,
      			animationDelayUpdate:2000,
      			sizeRange: [12, 50],
      			rotationRange: [0, 0],
      			shape: 'circle',
      			textStyle: {
      				normal: {
      					color: function() {
      						return 'rgb(' + [
      							Math.round(Math.random() * 160),
      							Math.round(Math.random() * 160),
      							Math.round(Math.random() * 160)
      						].join(',') + ')';
      					}
      				},
      				emphasis: {
      					shadowBlur: 10,
      					shadowColor: '#333'
      				}
			},
            data : [
                { name: '标识', value: 37.84},
               { name: '使用说明', value: 10.81},
               { name: '卫生检验', value: 8.11},
               { name: '数重量', value: 8.11},
               { name: '品质', value: 8.11},
               { name: '合同', value: 8.11},
               { name: '有害生物', value: 5.41},
               { name: '土壤', value: 2.70},
               { name: '规格', value: 2.70},
               { name: '电源线', value: 2.70},
               { name: '插头', value: 2.70},
               { name: '包装', value: 2.70}
            ]
        }]
    };
    //-- 3 end

    //--4 begin

        var data = [
             [[6.87, 11.97, '印度尼西亚',106.18,74329],
            [12.9, 8.91, '欧盟',772.89,875869],
            [10.24, 10.64, '日本',366.27,384815],
            [13.15, 12.28, '泰国',100.15,149742],
            [11.04, 12.79, '东盟',455.71,496346],
            [21.66, 14.45, '伊朗',95,2045],
            [11.57, 15.85, '智利',114.38,41844],
            [21.04, 16.04, '法国',91,122837],
            [26.15, 28.54, '澳大利亚',428.24,99930],
            [12.5, 29.26, '美国',562.85,507581],
            [10.94, 36.55, '加拿大',92.76,70249],
            [16.94, 50.95, '巴西',321.2,47390]]];
      option_import4 = {

        title: [{
            text: ''
          },source_import],
          legend: {
              right: '10%',
              data: ['']
          },
          animationDuration:2000,
          tooltip: {

              formatter: function (param) {
                  var value = param.value;
                  return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                          + value[2]
                          + '</div>'
                          + '批次不合格率：' + value[0] + '%<br>'
                          + '货值不合格率：' + value[1] + '%<br>'
                          + '货值：' + value[3] + '亿美元<br>'
                          + '批次：' + value[4] + '<br>';
              }
          },
          xAxis: {
              splitLine: {
                  lineStyle: {
                      type: 'dashed'
                  }
              },
              name: '批次不\n合格率%',
              nameLocation: 'end',
              nameTextStyle: {


              }
          },
          yAxis: {
              splitLine: {
                  lineStyle: {
                      type: 'dashed'
                  }
              },
              scale: true,
              name: '货值不合格率%'
          },
          series: [{
              name: '',
              data: data[0],
              type: 'scatter',
              symbolSize: function (data) {
                  return (data[3]) /18;
              },
              label: {
                  normal: {
                      show: true,
                      formatter: function (param) {
                          return param.data[2];
                      },
                      position: 'top'
                  },
                  emphasis: {
                      show: true,

                      position: 'top'
                  }
              },
              itemStyle: {
                  normal: {
                      shadowBlur: 10,
                      shadowColor: 'rgba(140, 36, 50, 0.5)',
                      shadowOffsetY: 5,
                      color: new echarts.graphic.RadialGradient(1, 1, 1, [{
                          offset: 0,
                          color: 'rgb(251, 118, 123)'
                      }, {
                          offset: 1,
                          color: 'rgb(153, 0, 51)'
                      }])
                  }
              }

          }]
      };
    //---4 end

    //--5 begin
    option_import5 = {
      title: [{
          text: ''
        },source_word],
      tooltip: {
        show: true,
        formatter:'{b}:{c}%'
    },

    series: [{
        type: 'wordCloud',
        gridSize: 20,
        animationDuration:2000,
        animationDelayUpdate:2000,
        sizeRange: [12, 50],
        rotationRange: [0, 0],
        shape: 'circle',
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
            name: '木材',
            value: 13.89,
            textStyle: {
                normal: {
                    color: 'black'
                },
                emphasis: {
                    color: 'red'
                }
            }
        },  {
            name: '可做原料用废物',
            value: 13.89
        }, {
            name: '服装',
            value: 13.89
        }, {
            name: '酒',
            value: 11.11
        }, {
            name: '水果',
            value: 8.33
        }, {
            name: '非金属矿产品',
            value: 5.56
        }, {
            name: '化妆品及化妆品原料',
            value: 5.56
        }, {
            name: '动物水产品',
            value: 5.56
        }, {
            name: '豆类',
            value: 2.78
        }, {
            name: '动物肉脏及杂碎',
            value: 2.78
        }, {
            name: '医疗仪器',
            value: 2.78
        }, {
            name: '动物鬃毛',
            value: 2.78
        }, {
            name: '金属矿',
            value: 2.78
        }, {
            name: '干果',
            value: 2.78
        }, {
            name: '电线电缆',
            value: 2.78
        }, {
            name: '纸及其制品',
            value: 2.78
        }]
    }]
};
    //--5 end

    //---6 begin
    var myData = ['工业品', '食品', '化妆品', '农产品' ];
    var input = {
         2014: [8.22, 13.05, 3.2,52.97],
        2015: [9.57, 16.83, 6.5,52.63],
        2016: [11.43, 17.57, 21.1, 49.48]



    };
    var ouput = {
         2014: [1.65, 3.27, 0.93, 0.5],
        2015: [1.31, 2.78, 2.73, 0.25],
        2016: [1.87, 3.04, 3.6, 0.06]


    };
    var timeLineData = [2014,2015,2016];

    option_import6 = {
      baseOption: {
          backgroundColor: '#f4f7f6',
          timeline: {
              show: true,
              axisType: 'category',
              tooltip: {
                  show: true,
                  formatter: function(params) {
                      console.log(params);
                      return params.name + '';
                  }
              },
              autoPlay: true,
              currentIndex: 6,
              playInterval: 1500,
              label: {
                  normal: {
                      show: true,
                      interval: 'auto',
                      formatter: '{value}年',
                  },
              },
              data: [],
          },
          title: [{
              text: ''
            },source_import],
          legend: {
              data: ['入境货值不合格率', '出境货值不合格率'],
              top: '5%',
              right: '10%',
              textStyle: {
                  color: '#000',
              },
          },
          tooltip: {
              show: true,
              trigger: 'axis',
              formatter: '{b}<br/>{a}: {c}%',
              axisPointer: {
                  type: 'shadow',
              }
          },
          toolbox: {
              feature: {
                  dataView: {
                      show: true,
                      readOnly: false
                  },
                  restore: {
                      show: true
                  },
                  saveAsImage: {
                      show: true
                  }
              }
          },
          grid: [{
              show: false,
              left: '4%',
              top: 60,
              bottom: 60,
              containLabel: true,
              width: '46%',
          }, {
              show: false,
              left: '50.5%',
              top: 80,
              bottom: 60,
              width: '0%',
          }, {
              show: false,
              right: '4%',
              top: 60,
              bottom: 60,
              containLabel: true,
              width: '46%',
          }, ],

          xAxis: [
              {
              type: 'value',
              inverse: true,
              axisLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
              position: 'bottom',
              axisLabel: {
                  show: true,
                  formatter:'{value} %',
                  textStyle: {
                      color: '#B2B2B2',
                      fontSize: 12,
                  }

              },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: '#DCDCDC',
                      width: 1,
                      type: 'solid',
                  },
              },
          }, {
              gridIndex: 1,
              show: false,
          }, {
              gridIndex: 2,
              type: 'value',
              axisLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
              position: 'bottom',
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#B2B2B2',
                      fontSize: 12,
                  },
                  formatter:'{value}%'
              },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: '#DCDCDC',
                      width: 1,
                      type: 'solid',
                  },
              },
          }, ],
          yAxis: [{
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: false,
                  margin: 8,

                  textStyle: {
                      color: '#000',
                      fontSize: 14,
                  },

              },
              data: myData,
          }, {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#000',
                      fontSize: 14,
                  },

              },
              data: myData.map(function(value) {
                  return {
                      value: value,
                      textStyle: {
                          align: 'center',
                      }
                  }
              }),
          }, {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: false,
                  textStyle: {
                      color: '#9D9EA0',
                      fontSize: 12,
                  },

              },
              data: myData,
          }, ],
          series: [],

      },

      options: [],


  };

  for (var i = 0; i < timeLineData.length; i++) {
      option_import6.baseOption.timeline.data.push(timeLineData[i]);
      option_import6.options.push({
          title: {
              text: '',
          },
          series: [{
                  name: '入境货值不合格率',
                  type: 'bar',
                  barGap: 50,
                  barWidth: 40,
                  label: {
                      normal: {
                          show: false,
                          formatter:'{c}%'
                      },
                      emphasis: {
                          show: true,
                          position: 'left',
                          offset: [0, 0],
                          textStyle: {
                              color: '#fff',
                              fontSize: 14,
                          },
                      },
                  },
                  itemStyle: {
                      normal: {
                          color: '#ffff00',
                      },
                      emphasis: {
                          color: '#ffff00',
                      },
                  },
                  data: input[timeLineData[i]],
              },


              {
                  name: '出境货值不合格率',
                  type: 'bar',
                  barGap: 30,
                  barWidth: 40,
                  xAxisIndex: 2,
                  yAxisIndex: 2,
                  label: {
                      normal: {
                          show: false,
                      },
                      emphasis: {
                          show: true,
                          position: 'right',
                          offset: [0, 0],
                          textStyle: {
                              color: '#fff',
                              fontSize: 14,
                          },
                      },
                  },
                  itemStyle: {
                      normal: {
                          color: '#ff0000',
                      },
                      emphasis: {
                          color: '#ff0000',
                      },
                  },
                  data: ouput[timeLineData[i]],
              }
          ]
      });
  }

    //---6 end

    //--7 begin
    option_import7 = {
      title: [{
          text: ''
        },source_import],
        tooltip: {
            trigger: 'axis',

        },
        color:['#ff0033','#0066cc'],
        legend: {
            data: ['批次不合格率', '货值不合格率'],
            top:'7%',
            right:'5%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '12%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',

            boundaryGap: false,
            data: ['2014年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '2015年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '2016年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                interval: 0,
                rotate: 90
            }
        },
        yAxis: {
            type: 'value',
            name: '%'
        },
        series: [
        {
            name: '批次不合格率',
            type: 'line',

            data: [1.75, 1.65, 2.02, 2.61, 3.38, 4.7, 7, 9.22, 11.35, 16.45, 24.05, 24.17, 4.37, 2.59, 4.11, 5.4, 6.46, 7.81, 6.45, 7.95, 7.85, 9.46, 15.25, 15.13, 5.17, 4.70, 7.21, 6.88, 7.46, 8.35, 6.73, 5.13, 3.83, 2.18, 4.63, 4.98]
        },
        {
            name: '货值不合格率',
            type: 'line',

            data: [0.91, 0.93, 1.96, 1.96, 2.52, 2.75, 4.17, 6.05, 7.03, 9.92, 15.00, 15.42, 2.81, 2.29, 3.37, 4.65, 4.79, 4.37, 4.14, 4.75, 4.10, 4.91, 9.46, 11.32, 4.90, 4.83, 6.40, 5.92, 5.38, 5.77, 5.65, 6.09, 5.15, 3.65, 7.45, 7.09, ]
        }
    ]
    };

    //--- 7 end

    //---8 begin
    //商品，批次，货值，批次不合格，货值不合格率
    var data = [
        ['食品用包装、容器、食品用具',	33465,	5.4	,0.82,	0.98,	0.16],
        ['涂料',	19187,	7.13,	0.88,	1.03,	0.15],
        ['烟花、爆竹',	30300,	9.61,	1.49,	1.38,	-0.11],
        ['轻工机械',	24504,	8.14,	1.66,	1.39,	-0.27],
        ['有机化工产品',	100222,	50.41,	1.85,	1.58,	-0.27],
        ['塑料及制品',	32668,	13.81,	1.77,	2.01,	0.24],
        ['非金属矿产品',	15960,	9.71,	1.60,	2.17,	0.57],
        ['机动车辆',	4234,	6.29,	1.87,	2.36,	0.49],
        ['无机化工产品',	72887,	28.41,	2.80,	2.48,	-0.32],
        ['钢铁及钢铁制品（初级加工品）',	4976,	7.71,	4.12,	3.27,	-0.85],
        ['石油制品',	10363,	131.69,	2.65,	4.76,	2.11],
        ['危险化学品',	40689,	40.24,	3.93,	10.71,	6.78]
    ];
    var category = [];

    var lineData = [];
    var barData = [];

    for (var i = 0; i < data.length; i++) {
        category.push(data[i][0]);
        var b = data[i][3];
        var l = data[i][4];
        barData.push(b);
        lineData.push(l);
    }

    option_import8 = {
      title: [{
          text: ''
        },source_import],
        backgroundColor: '#f4f6f7',
        tooltip: {
            trigger: 'axis',
        },
        grid:{
            bottom:'30%'
        },
        legend: {
            data: ['货值不合格率', '批次不合格率'],
            top:'5%',
            right:'15%',
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel:{

                textStyle:{
                     fontSize:12
                },
                formattor:'{value}%',
                rotate:60,
                interval:0
            }
        },
        yAxis: {
            splitLine: {show: true},
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            name:'不合格率',
            axisLabel:{
                formatter:'{value}%'
            }
        },
        series: [{
            name: '批次不合格率',
            type: 'bar',
            barWidth:10,
			itemStyle:{
				normal:{
					barBorderRadius:5,
					color:new echarts.graphic.LinearGradient(
					0,0,0,1,[
						{offset: 0, color: '#ff0000'},
						{offset: 1, color: '#eb3f2f'}
					])
				}
			},
            data: lineData
        }, {
            name: '货值不合格率',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#14c8d4'},
                            {offset: 1, color: '#43eec6'}
                        ]
                    )
                }
            },
            data: barData
        }]
    };
    //---8 end

    //-- 9 begin
    // Generate data
    option_import9 = {
          title: [{
            text: ''
            },source_import],
          tooltip: {
              trigger:'item',
          },
          color:['#ff0000','#72ACD1'],
          legend: {
              data: ['货值不合格率', '批次不合格率'],
              left:'70%',
              top:'7%'
          },
          radar: {
              // shape: 'circle',
              indicator: [
                 { name: '印度尼西亚', max: 4},
                 { name: '新加坡', max: 4},
                 { name: '中国台湾', max: 4},
                 { name: '俄罗斯', max: 4},
                 { name: '墨西哥', max: 4},
                 { name: '中国香港', max: 4},
                 { name: '东盟', max: 4},
                 { name: '日本', max: 4},
                 { name: '马来西亚', max: 4},
                 { name: '西班牙', max: 4},
                 { name: '泰国', max: 4},
                 { name: '欧盟', max: 4}
              ],
              startAngle: 90,
              splitNumber: 4,
              center:['50%','50%'],
              radius: 180,
              shape: 'circle',
              name: {
                      formatter:'【{value}】',
                      textStyle: {
                          color:'#0000ff',
                          fontSize:16,
                      }
                  },
          },
          series: [{
              name: '',
              type: 'radar',
              // areaStyle: {normal: {}},
              label: {
                      normal: {
                          show: true,

                      }
                  },
              data : [
                  {
                      value : [3.49,3.41,2.84,2.46,2.22,2.08,2.07,1.8,1.78,1.77,1.57,1.14],
                      name : '货值不合格率'
                  },
                   {
                      value : [1.57,1.14,2.37,1.74,1.22,1.59,1.39,2.01,1.65,1.68,1.57,1.06],
                      name : '批次不合格率'
                  }
              ]
          }]
        };

    //-- 9 end

    // - 10 begin

    //data
    var in_valuerate = [12.25,13.19,15.43,16.81];
    var in_lotrate = [4.31,7.3,9.85,12.48];
    var out_valuerate = [0.21,1.89,1.58,1.9];
    var out_lotrate = [0.19,2.28,1.82,1.35];
    var markLineData = [];
    source = {
        text: '数据来源：通关司',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12
        },
        bottom: 0,
        right:20
    };
    //option
    option_import10 = {
        title: [{
            text: ''
        },
        source],
        tooltip : {
            trigger: 'axis'

        },
        animationDuration:1500,
        color:['#3498DB','#E74C3C','#F39C12','#8E44AD'],
        legend:{
            data:['入境货值不合格率','入境批次不合格率','出境货值不合格率','出境批次不合格率'],
            top:'5%'
        },
        xAxis: {
            data: ['2013年', '2014年', '2015年', '2016年']
        },
        yAxis: {
            axisLabel:{
                formatter:'{value}%'
            }


        },
        series: [{
            name:'入境货值不合格率',
            type: 'line',
            data:in_valuerate,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'}
                ]
            }
        },
        {
            name:'入境批次不合格率',
            type:'line',
            data:in_lotrate,
             markPoint: {
                data: [
                    {type: 'max', name: '最大值'}
                ]
            }
        },
        {
            name:'出境货值不合格率',
            type:'line',
            data:out_valuerate,
             markPoint: {
                data: [
                    {type: 'max', name: '最大值'}
                ]
            }
        },
        {
            name:'出境批次不合格率',
            type:'line',
            data:out_lotrate, markPoint: {
                data: [
                    {type: 'max', name: '最大值'}
                ]
            }
        }]
    };
    // -- 10 end

    // - 11 begin
    option_import11 = {
        title: [{
            text: ''
          }],
        color:['#66ff66','#ff3399','#3333cc'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['2014', '2015', '2016'],
            align: 'left',
            right: 10,
            top: '2%',
            textStyle:{
              color:'#ffffff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            top: '15%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['昆虫', '杂草', '真菌', '线虫', '细菌', '病毒', '螨类', '其他'],
            axisLabel: {
                textStyle:{
                  color:'#ffffff'
                }
            },
            axisLine:{
              lineStyle:{
                color:'#ffffff'
              }
            }
        }],
        yAxis: [{
            type: 'value',
            name: '种',
            axisLabel: {
                formatter: '{value}',
                textStyle:{
                  color:'#ffffff'
                }
            },
            axisLine:{
              lineStyle:{
                color:'#ffffff'
              }
            }
        }],
        series: [{
            name: '2014',
            type: 'bar',
            data: [2853, 1310, 490, 185, 41, 84, 38, 217 ],
            animationDelay: function (idx) {
           return idx * 10;
       }
        }, {
            name: '2015',
            type: 'bar',
            data: [3238, 1419, 662, 170, 70, 62, 47, 287],
            animationDelay: function (idx) {
           return idx * 10;
       }
        }, {
            name: '2016',
            type: 'bar',
            data: [3319, 1479, 872, 197, 101, 54, 38, 247 ],
            animationDelay: function (idx) {
           return idx * 10;
       }
     }],
     animationEasing: 'elasticOut',
     animationDelayUpdate: function (idx) {
       return idx * 5;
    }
    };
    // -- 11 end

    //--12 begin
    option_import12 = {
        title: [{
            text: ''
          },source_import],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}万人"
        },
        legend: {

            data:['49710','52838','54685'],
            left:'10%',
            right:'20%'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false}
            }
        },
        calculable : true,
        series : [

            {
                name:'人数',
                type:'pie',
                radius : [45, 160],
                center : ['55%', '50%'],
                roseType : 'radius',
                data:[
                    {value:49710, name:'2014'},
                    {value:52838, name:'2015'},
                    {value:54685, name:'2016'}

                ],
                label: {
                    normal: {

                        formatter:function(params){
                            return params.name+" : " + params.value +"万人次";
                        }
                    }
                }
            }
        ]
    };

    //--12 end
    //---13 begin
    option_import13 = {
        title: [{
            text: ''
          },source_import],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#F79646','#4BACC6','#806466'],
        legend: {
            data: ['2014', '2015', '2016'],
            align: 'right',
            right: 10,
            top:'10%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            top:'15%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['查验箱数', '卫生除害处理', '检出疫情']
        }],
        yAxis: [{
            type: 'value',
            name: '万箱',
            axisLabel: {
                formatter: '{value}'
            }
        }],
        series: [{
            name: '2014',
            type: 'bar',
            data: [1874.85,1672.7,75.2]
        }, {
            name: '2015',
            type: 'bar',
            data: [1596.53,1773.21,79.8
       ]
        }, {
            name: '2016',
            type: 'bar',
            data: [695.91,1466.22,57.7]
        }]
    };
    //---13 end
  //--14 begin

    var data = [
      {name:'上海', value:1133.03},
      {name:'山东', value:1132.15},
      {name:'广东', value:1122.57},
      {name:'江苏', value:842.7},
      {name:'辽宁', value:517.56},
      {name:'天津', value:439.99},
      {name:'浙江', value:402.7},
      {name:'福建', value:255.33},
      {name:'河北', value:248.95},
      {name:'广西', value:206.21},
      {name:'河南', value:183.3},
      {name:'北京', value:139.88},
      {name:'新疆', value:123.42},
      {name:'黑龙江', value:94.53},
      {name:'内蒙古', value:81.71},
      {name:'海南', value:74.15},
      {name:'云南', value:70.23},
      {name:'湖北', value:48.46},
      {name:'安徽', value:44.32},
      {name:'吉林', value:41.32},
      {name:'湖南', value:41.11},
      {name:'江西', value:35.43},
      {name:'陕西', value:28.1},
      {name:'重庆', value:24.19},
      {name:'四川', value:21.67},
      {name:'山西', value:12.94},
      {name:'甘肃', value:12.28},
      {name:'贵州', value:10.65},
      {name:'宁夏', value:8.2},
      {name:'青海', value:2.16},
      {name:'西藏', value:0.36},
      {name:'台湾', value:0},
      {name:'香港', value:0},
      {name:'澳门', value:0}];

    var geoCoordMap = {
       '安徽': [117.17, 31.52],
      '北京': [116.24, 39.55],
      '重庆': [106.54, 29.59],
      '福建': [119.18, 26.05],
      '甘肃': [103.51, 36.04],
      '广东': [113.14, 23.08],
      '广西': [108.19, 22.48],
      '贵州': [106.42, 26.35],
      '海南': [110.20, 20.02],
      '河北': [114.30, 38.02],
      '河南': [113.40, 34.46],
      '黑龙江': [128.36, 45.44],
      '湖北': [112.27, 30.15],
      '湖南': [112.59, 28.12],
      '吉林': [125.19, 43.54],
      '江苏': [118.46, 32.03],
      '江西': [115.55, 28.40],
      '辽宁': [123.25, 41.48],
      '内蒙古': [108.41, 40.48],
      '宁夏': [106.16, 38.27],
      '青海': [101.48, 36.38],
      '山东': [118.00, 36.40],
      '山西': [112.33, 37.54],
      '陕西': [108.57, 34.17],
      '上海': [121.29, 31.14],
      '海南': [108.77, 19.10],
      '四川': [104.04, 30.40],
      '天津': [117.12, 39.02],
      '西藏': [91.08, 29.39],
      '新疆': [87.36, 43.45],
      '云南': [102.42, 25.04],
      '浙江': [120.10, 30.16],
      '澳门': [115.07, 21.33],
      '台湾': [121.21, 23.53]
    };

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var convertedData = [
        convertData(data),
        convertData(data.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 6))
    ];
    data.sort(function(a, b) {
        return a.value - b.value;
    })

    var selectedItems = [];
    var categoryData = [];
    var barData = [];
    //   var maxBar = 30;
    var sum = 0;
    var count = data.length;
    for (var i = 0; i < data.length; i++) {
        categoryData.push(data[i].name);
        barData.push(data[i].value);
        sum += data[i].value;
    }
    console.log(categoryData);
    console.log(sum + "   " + count)
    option_import14 = {

        animation: true,
        animationDuration: 2000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        title: [{
            text: ''
          },source_import],
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#fff'
                },
                emphasis: {
                    borderColor: '#b1e4ff'
                }
            },
            feature: {
            }
        },
        geo: {
            map: 'china',
            //wugang
            left: '7%',
            right: '15%',
            top:'2%',
            zoom:0.8,
            center: [117.98561551896913, 31.205000490896193],

            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#ececec',
                    borderColor: '#111'
                },
                emphasis: {
                    show:true,
                    areaColor: '#FFFF99'
                }
            },

        },
        tooltip: {
            trigger: 'item',
           formatter:function(params){
                if(params.value[2] === undefined)
                    return params.name + ' : ' + params.value;
                else
                    return params.name + ' : ' + params.value[2];
           }
        },
        grid: {

        },

        series: [{
            //  name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertedData[0],
            symbolSize: function(val) {
                return Math.max(val[2] / 40, 0);
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#CC3333',
                    shadowBlur: 50,
                    shadowColor: '#EE0000'
                }
            },
            textStyle:{
              color:'fff'
            },
            zlevel: 8
        },
        {
          type: 'pie',
          data: data,
          top:'15%',
          left:'20%',
          radius: ['20%', '30%'],
          zlevel: -2,
          center: ['75%', '50%'],
          color:['#00cc00'],
          label: {
             normal:{
                  formatter: function(param){
                      return param.name + " : " + param.value + "亿美元";
                  },
                  textStyle:{
                      fontSize:14
                  }
             }
          },
          zlevel:-9
      }
        ]
    };

    function renderBrushed(params) {
        var mainSeries = params.batch[0].selected[0];

        var selectedItems = [];
        var categoryData = [];
        var barData = [];
        var maxBar = 30;
        var sum = 0;
        var count = 0;

        for (var i = 0; i < mainSeries.dataIndex.length; i++) {
            var rawIndex = mainSeries.dataIndex[i];
            var dataItem = convertedData[0][rawIndex];
            var pmValue = dataItem.value[2];

            sum += pmValue;
            count++;

            selectedItems.push(dataItem);
        }

        selectedItems.sort(function(a, b) {
            //   return b.value[2] - a.value[2];
            return a.value - b.value;
        });

        for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
            categoryData.push(selectedItems[i].name);
            barData.push(selectedItems[i].value[2]);
        }

        this.setOption({
            yAxis: {
                data: categoryData
            },
            xAxis: {
                axisLabel: {
                    show: !!count
                }
            },
            title: {
                id: '',
                text: ''
            }
        });
    }
  //--14 end
