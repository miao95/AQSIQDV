source_detain = {
    text: '数据来源：标法中心',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
		fontFamily:'黑体'
    },
    bottom: 0,
    right:20
};
//-- 1 begin
option_detain1 = {
			title:[],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    color:['#3498DB','#228B22','#C0392B'],
			animationDuration:1500,
	    legend: {
	        orient: 'vertical',
	        x: 'right',
	        data: ['植物产品','动物产品','饲料'],
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
          left:'30%',
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
						fontSize:16
					}
				}
			},
	    series : [
	        {
	            name: '扣留(召回)批次',
	            type: 'pie',
	            radius : '50%',
	            center: ['52%', '50%'],
	            data:[
	                {value:66, name:'饲料'},
	                {value:31, name:'动物产品'},
	                {value:16, name:'植物产品'}
	            ],
	            itemStyle: {
	                 normal: {
	                    label:{
                            show: true,
                            rotate:0,
                            position:'outside',
                            formatter: function(params){
                                return params.name + ' : \n' + params.value+'批次 \n '+ (params.value/113*100).toFixed(2) +'%';
                            }


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


//-- 1 end
//-- 2 begin
var uploadedDataURL = "Scripts/images/failed.jpg";

var percentage = [0.58, 0.24, 0.16, 0.02];
var radius = [0.4];
for (var i = 1; i < percentage.length; ++i) {
    radius.push(radius[0] / Math.sqrt(percentage[0] / percentage[i]));
}
var colors = ['#ec5845', '#f28a7d', '#fbdcd8', '#fff'];
var labels = ['≥500元：2%', '≥200元：16%', '≥100元：24%', '其他：58%'];
var left = 0.3;

var series = [{
    type: 'pie',
    radius: [60, '60%'],
    animationDruation:1500,
    center: ['50%', '50%'],
    roseType: 'radius',

    color: ['#f2c955', '#00a69d', '#46d185', '#ec5845'],
    data: [   {name:"人类受到危害",value:64.93},
             {name:"电性能方面",value: 25.97},
             {name:"农兽残",value: 1.95},
             {name:"机械物理方面",value: 1.95},
            {name:"标签不合格",value: 1.29},
            {name:"品质",value: 1.29},
            {name:"污染物",value: 1.29},
            {name:"非食用添加剂",value: 0.64},
             {name:"微生物",value: 0.64}
    ],
    label: {
        normal: {
            textStyle: {
                color: '#333',
                fontSize: 14,
                color:'#fff'
            },
            formatter: function (param) {
                console.log(param);
                return param.name ;
            }
        },
				emphasis:{
					textStyle:{
						fontSize:16
					}
				}
    },
    labelLine: {
        normal: {
            lineStyle: {
                width: 1
            }
        }
    },
    itemStyle: {
        normal: {
            shadowBlur: 30,
            shadowColor: 'rgba(0, 0, 0, 0.4)'
        }
    }
}];
for (var i = 0; i < percentage.length; ++i) {
    series.push({
        type: 'pie',
        silent: true,
        name: labels[percentage.length - i - 1],
        radius: [0, radius[i] * 100 + '%'],
        label: {
            normal: {
                show: false,
            }
        },
        color: [colors[i]],
        center: [(left + (-radius[i] + radius[0]) / 2) * 100 + '%', '75%'],
        data: [{
            itemStyle: {
                normal: {
                    color: colors[i]
                }
            }
        }],
        itemStyle: {
            normal: {
                shadowBlur: 30,
                shadowColor: 'rgba(0, 0, 0, 0.25)'
            }
        }
    });
}
//-- 2 begin
option_detain2 = {
    legend: {

    },
		title:[source_detain],
     tooltip:{
        show:true,
        formatter:function(param){
            return param.name + " : " + param.value + '%';
        }
    },
  
    calculable: true,
    series: series,
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: uploadedDataURL,
                width: 30,
                height: 30
            },
            left: 'center',
            top: 'center'
        }]
    }
};
//-- 2 end

// -- 3 begin
	option_detain3 = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"

		    },
				title:[source_detain],
		    color:['#8fc31f','#f35833','#00ccff','#ffcc00'],
				animationDuration:2000,
		    legend: {
		        orient: 'vertical',
		        x: 'right',
		        data: ['机电类','化工与危险品类','玩具类','轻纺类'],
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
		            name: '扣留(召回)批次',
		            type: 'pie',
		            radius : '50%',
		            center: ['50%', '50%'],
		            data:[
		                {value:653, name:'轻纺类'},
                    {value:482, name:'玩具类'},
                    {value:480, name:'机电类'},
                   {value:137, name:'化工与危险品类'},

		            ],
		            itemStyle: {
		                 normal: {
		                    label:{
	                            show: true,
	//	                            position:'inside',
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
		//-- 3 end
		// -- 4 begin
		option_detain4 = {
		    title:[source_detain],
		    tooltip : {
		        trigger: 'item',
		        formatter: "扣留(召回) <br/>{b} :次 ({d}%)"
		    },
				animationDuration:2000,
		    legend: {
		        x : 'center',
		        y : 'bottom',
						show:false,
		        data:['欧盟健康消费者保护总司 374','欧盟食品和饲料委员会 126','加拿大卫生部 55','韩国食药厅 37','美国消费品安全委员会 36','日本厚生劳动省 25']
		    },
				label:{
					normal:{
						textStyle:{
							fontSize:10
						}
					}
				},
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true,
		                type: ['pie', 'funnel']
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    series : [
		        {
		            name:'半径模式',
		            type:'pie',
		            radius : [30, 110],
		            center : ['50%', '50%'],
		            roseType : 'radius',
		            data:[
		                {value:374, name:'欧盟健康消费者保护总司 374'},
		                {value:126, name:'欧盟食品和饲料委员会 126'},
		                {value:55, name:'加拿大卫生部 55'},
		                {value:37, name:'韩国食药厅 37'},
		                {value:36, name:'美国消费品安全委员会 36'},
		                {value:25, name:'日本厚生劳动省 25'}

		            ]
		        }
		    ]
		};
		//-- 4 end
		//-- 5 begin
		option_detain5 = {
		    title:[],
		    tooltip: {
		        trigger: 'axis',
		        formatter:function(param){
		            //alert(Math.round(param[0].value/1752.000,4));
		            return "因【"+param[0].name+"】扣留(召回):<br>" + "批次：" +param[0].value + "<br>占比：" + ((param[0].value/1752)*100).toString().substring(0,5)+ "%";
		        }
		    },
		    toolbox: {
		        feature: {
		        }
		    },
		    grid: {
		        containLabel: true
		    },
		    legend: {
		        data: ['批次','占比'],
						top:'5%',
            textStyle:{
              color:'#fff'
            }
		    },
		    xAxis: [{
		        type: 'category',

		        axisLabel:{
		            show:true,
		            interval:0,
		            rotate:45,
		            textStyle:{
		                fontSize:10,
                    color:'#ffffff'
		            }
		        },
		        data: ['对人类致害','电性能方面','化学性能方面','污染物','品质','致敏源','微生物','机械物理方面','标签不合格','转基因成分','食品添加剂超标','非食用添加剂','证书不合格']
		    }],
		    yAxis: [{
		        type: 'value',
		        name: '占比',
            nameTextStyle:{
              color:'#fff'
            },
		        min: 0,
		        max: 100,
		        position: 'right',
		        axisLabel: {
		            formatter: '{value} %',
		             textStyle:{
		                fontSize:10,
                    color:'#ffffff',
		            },
                lineStyle:{
                  color:'#ffffff'
                }
		        }
		    } ,{
		        type: 'value',
		        name: '批次',
            nameTextStyle:{
              color:'#fff'
            },
		        min: 0,
		        max: 1000,
		        position: 'left',
		        axisLabel: {
		             textStyle:{
                   fontSize:10,
                   color:'#ffffff',
		            }
		        },

		    }],
		    series: [ {
		        name: '批次',
		        type: 'bar',
		        yAxisIndex: 1,
						itemStyle: {
							 normal:{
									 color: '#0070C0'
							 }
					 },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top'
		                }
		            },
		        data: [820,303,288,190,81,40,13,8,3,2,2,1,1]
		    },{
		        name: '占比',
		        type: 'line',
		        stack:'',
		            label: {
		                normal: {
		                    position: 'top',

		                }
		            },
		        lineStyle: {
		                normal: {
		                    width: 3,
		                    shadowColor: 'rgba(0,0,0,0.4)',
		                    shadowBlur: 10,
		                    shadowOffsetY: 10
		                }
		            },
		        data: [46.8,64.1,80.5,91.3,95.9,98.1,98.9,99.4,99.6,99.7,99.8,99.85,99.9],
		         markLine: {
		              animationDelay:function(param){
		                if(param === 0)
		                    return ;
		                else
		                    return 1200;
		            },
		             label:{
		                    normal:{
		                        formatter:function(param){
		                            if (param.dataIndex == 1)
		                                return '';
		                            else
		                                return '80%的问题由20%的原因引起';
		                        },
		                        position:'middle',
		                        textStyle:{
		                            fontSize:16,
		                            color:'#cd171a'
		                        }
		                    },
		                },
		            lineStyle: {
		                normal: {
		                    // color: average_line_color,
		                    color:'#00ff00',
		                    width:3,
		                }
		            },
		            data: [[{
		                xAxis:'证书不合格',
		                yAxis:80,
		                value:120

		            },{
		                xAxis:'化学性能方面',
		                yAxis:80,
		                symbol:'circle'
		            }],[
									{
											xAxis:'化学性能方面',
											yAxis:80
									},{
		                xAxis:'化学性能方面',
		                yAxis:30,
		                value:120

		            }
							] ],
		        },
		    }]
		};
//-- 5 end
