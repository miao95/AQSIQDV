var data2016 = [253,220,215,211,208,205,203,199,185,179,169,140,139,137,131,124,122,121,118,94,94,93,90,90,78,71,67,63,52,50,10];
var data_zxd_2016 = [{name:"制订",value:3848},{name:"修订",value:283}];
var data_xz_2016 = [{name:"推荐",value:3648},{name:"强制",value:263}];
var yAxisData = ['安徽','四川','江苏','山西','广西','山东','辽宁','黑龙江','吉林','河南','广东','新疆','甘肃','宁夏','内蒙古','河北','天津','北京','湖南','湖北','贵州','云南','福建','重庆','海南','上海','陕西','青海','江西','浙江','西藏'];
 std_zxd_option = {
	 tooltip: {
      show:false
    },
		color:['rgb(4,143,35)','rgb(167,140,0)'],
    legend: {
       show:false,
    },
    series: [
        {
            name:'按制、修订分',
            type:'pie',
            radius: ['70%', '100%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:data_zxd_2016
        }
    ]
 }
 std_qztj_option = {
	 tooltip: {
      show:false
    },
		color:['rgb(4,143,35)','rgb(167,140,0)'],
    legend: {
       show:false,
    },
    series: [
        {
            name:'按性质分',
            type:'pie',
            radius: ['70%', '100%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:data_zxd_2016
        }
    ]
 }
	std_province_option = {
		title:[
				{text:"各省标准制修订数（单位：个）",x: '15%', y: '0%',textStyle:{color:"#fff",fontSize:"14"}},
		],
		grid: [
				{x: '8%', y: '7%', width: '85%', height: '80%'},
		],
		tooltip: {
				formatter: '{b} ({c})'
		},

		xAxis: [
				{
           data:yAxisData,
				   axisLabel: {show:true,
						rotate:30,
            interval:0,
            textStyle:{
              color:'#fff'
            }
				 },
				type:'category',
				},
		],
		yAxis: [
				 {
						type:'value',
            axisLabel: {show:true,
              textStyle:{
                color:'#fff'
              }
    				},
				}
		],
		series: [
				{
						name: '各省标准制修订数（单位：个）',
						type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'45%',
						itemStyle:{normal:{color:'#ffff66'}},

						data: data2016
				},

		]
	};
std_province_option_map={
  title: {

    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['各省标准制修订数']
    },
    visualMap: {
        min: 0,
        max: 300,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },

    series: [
        {
            name: '各省标准制修订数',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name:'安徽',value:253},
                {name:'四川',value:220},
                {name:'江苏',value:215},
                {name:'山西',value:211},
                {name:'广西',value:208},
                {name:'山东',value:205},
                {name:'辽宁',value:203},
                {name:'黑龙江',value:199},
                {name:'吉林',value:185},
                {name:'河南',value:179},
                {name:'广东',value:169},
                {name:'新疆',value:140},
                {name:'甘肃',value:139},
                {name:'宁夏',value:137},
                {name:'内蒙古',value:131},
                {name:'河北',value:124},
                {name:'天津',value:122},
                {name:'北京',value:121},
                {name:'湖南',value:118},
                {name:'湖北',value:94},
                {name:'贵州',value:94},
                {name:'云南',value:93},
                {name:'福建',value:90},
                {name:'重庆',value:90},
                {name:'海南',value:78},
                {name:'上海',value:71},
                {name:'陕西',value:67},
                {name:'青海',value:63},
                {name:'江西',value:52},
                {name:'浙江',value:50},
                {name:'西藏',value:10}

            ]
        }
    ]
};
