 std_simple_option = {
    title: [{
            text: "按制、修订分",
            x: '18%',
            y: '90%',
            textStyle: {
                color: "#000",
                fontSize: "14"
            }
        },

        {
            text: "按性质分",
            x: '50%',
            y: '90%',
            textStyle: {
                color: "#000",
                fontSize: "14"
            }
        },
    ],
    grid: [{
        x: '50%',
        y: '7%',
        width: '45%',
        height: '100%'
    }, ],
    tooltip: {
        formatter: '{b} ({c})'
    },

    series: [{
            name: '按制、修订分',
            type: 'pie',
            radius: '47%',
            center: ['22%', '45%'],
            color: ['#86c9f4', '#4da8ec', '#3a91d2', '#005fa6', '#315f97'],
            data: [{
                    value: 3848,
                    name: '制订'
                },

                {
                    value: 283,
                    name: '修订'
                }
            ],
            labelLine: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b} {c}个 \n ({d}%)',
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
            },
        }, {
            name: '按性质分',
            type: 'pie',
            radius: '47%',
            center: ['52%', '45%'],
            color: ['#86c9f4', '#4da8ec', '#3a91d2', '#005fa6', '#315f97'],
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                    value: 3868,
                    name: '推荐'
                }, {
                    value: 263,
                    name: '强制'
                },


            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b}  {c}个\n({d}%)',
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
            },
        }

    ]
};