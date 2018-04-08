jyjy_option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['出境货值', '入境货值'],
        top:"5%",
    },

    calculable: true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2017年1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            max: 850,
            min: 100
        }
    ],
    series: [
        {
            name: '出境货值',
            type: 'line',
            smooth: true,
            
            data: [216.9984, 189.5972, 174.77, 185.94, 181.89, 170.49, 188.85, 120.09, 143.6409]
        },
        {
            name: '入境货值',
            type: 'line',

            smooth: true,
            data: [848.964, 694.2113, 587.85, 619.87, 615.03, 548.74, 646.74, 539.63, 549.6063]
        }
    ]
};