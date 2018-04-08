source_company = {
    text: '数据来源：代码中心',
    textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
		fontFamily:'黑体'
    },
    bottom: 0,
    right:20
};
option_company1 = {
       title:[source_company],
       tooltip: {
           trigger: 'axis',
           axisPointer: { // 坐标轴指示器，坐标轴触发有效
               type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
           },
           formatter:function(param){
               var val = param[0].name +'<br>';
              for(i = 0;i<param.length;i++){
                  val += param[i].seriesName + ' : ' + param[i].value + '%<br>';
              }
              return val;
           }

       },
       color:['#ed7d31','#ffc000','#70ad47'],
       legend: {
           data: ['北京', '广东', '上海'],
           align: 'right',
           right: 10,
           top:'7%'
       },
       grid: {
           left: '3%',
           right: '4%',
           bottom: '0%',
           width:'100%',
           top:'10%',
           containLabel: true,
           height:'80%'
       },
       xAxis: [{
           type: 'category',
           data: ['通用设备制造业', '金属制品业', '非金属矿物制造业', '专用设备制造业','纺织服装、鞋、帽制造业'],

       }],
       yAxis: [{
           type: 'value',
           name: '占全国比重',
           axisLabel: {
               formatter: '{value}%'
           }
       }],
       series: [{
           name: '北京',
           type: 'bar',
           barGap:'0%',
           data: [0.92, 1.42,1.23,1.09,2.48],
           formatter:{
               normal:{
                   show:true
               }
           },

       }, {
           name: '上海',
           type: 'bar',
           data: [3.09, 2.20, 0.91, 2.98,3.57]

       },{
           name: '广东',
           type: 'bar',
           data: [7.17, 22.06, 7.53,13.37,21.24 ]

       }]
   };
