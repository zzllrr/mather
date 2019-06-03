/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

tooltip.graphic['Project/echarts']=[href(Hs+'www.echartsjs.com/examples/index.html','百度ECharts官网')+'暂不支持LaTeX',
	'JS代码用$美元符号$括起来'+sceg2('$1+2$'),

	detail('【折线图】line',[
	sceg(jSoff({
		xAxis: {
	        type: 'category',
	        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [{
	        data: ["$820+50$", 932, 901, 934, 1290, 1330, 1320],
	        type: 'line'
	    }]
	}),10),'可以插在series.type后面的参数：',
		'面积图 '+sceg2(',areaStyle:{}'),
		'光滑图 '+sceg2(',smooth:true'),

	'平行坐标系 Parallel'+
	sceg(jSoff({
	    parallelAxis: [
	        {dim: 0, name: 'Price'},
	        {dim: 1, name: 'Net Weight'},
	        {dim: 2, name: 'Amount'},
	        {
	            dim: 3,
	            name: 'Score',
	            type: 'category',
	            data: ['Excellent', 'Good', 'OK', 'Bad']
	        }
	    ],
	    series: {
	        type: 'parallel',
	        lineStyle: {
	            width: 4
	        },
	        data: [
	            [12.99, 100, 82, 'Good'],
	            [9.99, 80, 77, 'OK'],
	            [20, 120, 60, 'Excellent']
	        ]
	    }
	}),10),

	'多个X轴Multiple X Axes'+
	sceg(jSoff({
	    color: ['#5793f3', '#d14a61', '#675bba'],

	    tooltip: {
	        trigger: 'none',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
	    legend: {
	        data:['2015 降水量', '2016 降水量']
	    },
	    grid: {
	        top: 70,
	        bottom: 50
	    },
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {
	                alignWithLabel: true
	            },
	            axisLine: {
	                onZero: false,
	                lineStyle: {
	                    color: '#d14a61'
	                }
	            },
	            axisPointer: {
	                label: {
	                    formatter: function (params) {
	                        return '降水量  ' + params.value
	                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
	                    }
	                }
	            },
	            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
	        },
	        {
	            type: 'category',
	            axisTick: {
	                alignWithLabel: true
	            },
	            axisLine: {
	                onZero: false,
	                lineStyle: {
	                    color: '#5793f3'
	                }
	            },
	            axisPointer: {
	                label: {
	                    formatter: function (params) {
	                        return '降水量  ' + params.value
	                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
	                    }
	                }
	            },
	            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value'
	        }
	    ],
	    series: [
	        {
	            name:'2015 降水量',
	            type:'line',
	            xAxisIndex: 1,
	            smooth: true,
	            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        },
	        {
	            name:'2016 降水量',
	            type:'line',
	            smooth: true,
	            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
	        }
	    ]
	}),10),
		
		
	'折线+饼图'+
	sceg(jSoff({
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
	}),10)
	].join(br)
	),
	detail('【极坐标图】polar',[
	'爱心Heart'+		
	sceg(jSoff({
	    title: {
	        text: '极坐标双数值轴'
	    },
	    legend: {
	        data: ['line']
	    },
	    polar: {},
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
	    angleAxis: {
	        type: 'value',
	        startAngle: 0
	    },
	    radiusAxis: {
	    },
	    series: [{
	        coordinateSystem: 'polar',
	        name: 'line',
	        type: 'line',
	        data: '$$'
	    }]
	}).replace('"$$"','$jSoff(Arrf(function(x){var t=x/100*360;return [5*(1+Math.sin(t/180*Math.PI)),t]},seqA(0,101)))$'),10),
	
	'8叶线'+
	sceg(jSoff({
	    title: {
	        text: '极坐标双数值轴'
	    },
	    legend: {
	        data: ['line']
	    },
	    polar: {
	        center: ['50%', '54%']
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
	    angleAxis: {
	        type: 'value',
	        startAngle: 0
	    },
	    radiusAxis: {
	        min: 0
	    },
	    series: [{
	        coordinateSystem: 'polar',
	        name: 'line',
	        type: 'line',
	        showSymbol: false,
	        data: '$$'
	    }],
	    animationDuration: 2000
	}).replace('"$$"','$jSoff(Arrf(function(x){var t=x/45*Math.PI;return [Math.sin(t)/2,x]},seqA(0,361)))$'),10),
	
	
	'堆叠柱状图1（极坐标系）'+
	sceg(jSoff({
	
	    angleAxis: {
	    },
	    radiusAxis: {
	        type: 'category',
	        data: ['周一', '周二', '周三', '周四'],
	        z: 10
	    },
	    polar: {
	    },
	    series: [{
	        type: 'bar',
	        data: [1, 2, 3, 4],
	        coordinateSystem: 'polar',
	        name: 'A',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [2, 4, 6, 8],
	        coordinateSystem: 'polar',
	        name: 'B',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [1, 2, 3, 4],
	        coordinateSystem: 'polar',
	        name: 'C',
	        stack: 'a'
	    }],
	    legend: {
	        show: true,
	        data: ['A', 'B', 'C']
	    }

	}),10),
		
	'堆叠柱状图2（极坐标系）'+
	sceg(jSoff({
	
	    angleAxis: {
	        type: 'category',
	        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
	        z: 10
	    },
	    radiusAxis: {
	    },
	    polar: {
	    },
	    series: [{
	        type: 'bar',
	        data: [1, 2, 3, 4, 3, 5, 1],
	        coordinateSystem: 'polar',
	        name: 'A',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [2, 4, 6, 1, 3, 2, 1],
	        coordinateSystem: 'polar',
	        name: 'B',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [1, 2, 3, 4, 1, 2, 5],
	        coordinateSystem: 'polar',
	        name: 'C',
	        stack: 'a'
	    }],
	    legend: {
	        show: true,
	        data: ['A', 'B', 'C']
	    }

	}),10),
		
		
	].join(br)
	)

	,
	detail('【柱状图/条形图】bar',[
	sceg(jSoff({
	    xAxis: {
	        type: 'category',
	        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [{
	        data: [120, 200, 150, 80, 70, 110, 130],
	        type: 'bar'
	    }]
		
	}),10),

	'年度细分对比'+
	sceg(jSoff({
	    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
	    },
	    toolbox: {
	        show: true,
	        orient: 'vertical',
	        left: 'right',
	        top: 'center',
	        feature: {
	            mark: {show: true},
	            dataView: {show: true, readOnly: false},
	            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
	            restore: {show: true},
	            saveAsImage: {show: true}
	        }
	    },
	    calculable: true,
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {show: false},
	            data: ['2012', '2013', '2014', '2015', '2016']
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value'
	        }
	    ],
	    series: [
	        {
	            name: 'Forest',
	            type: 'bar',
	            barGap: 0,
	            data: [320, 332, 301, 334, 390]
	        },
	        {
	            name: 'Steppe',
	            type: 'bar',
	            data: [220, 182, 191, 234, 290]
	        },
	        {
	            name: 'Desert',
	            type: 'bar',
	            data: [150, 232, 201, 154, 190]
	        },
	        {
	            name: 'Wetland',
	            type: 'bar',
	            data: [98, 77, 101, 99, 40]
	        }
	    ]
	}),10),
	
	'正负条形图（横向）'+
	sceg(jSoff({
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['利润', '支出', '收入']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    yAxis : [
	        {
	            type : 'category',
	            axisTick : {show: false},
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    series : [
	        {
	            name:'利润',
	            type:'bar',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                }
	            },
	            data:[200, 170, 240, 244, 200, 220, 210]
	        },
	        {
	            name:'收入',
	            type:'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true
	                }
	            },
	            data:[320, 302, 341, 374, 390, 450, 420]
	        },
	        {
	            name:'支出',
	            type:'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'left'
	                }
	            },
	            data:[-120, -132, -101, -134, -190, -230, -210]
	        }
	    ]
	}),10),
	
	
	'堆叠柱状图'+
	sceg(jSoff({
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['周一','周二','周三','周四','周五','周六','周日']
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
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'邮件营销',
	            type:'bar',
	            stack: '广告',
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'bar',
	            stack: '广告',
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'bar',
	            stack: '广告',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'搜索引擎',
	            type:'bar',
	            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
	            markLine : {
	                lineStyle: {
	                    normal: {
	                        type: 'dashed'
	                    }
	                },
	                data : [
	                    [{type : 'min'}, {type : 'max'}]
	                ]
	            }
	        },
	        {
	            name:'百度',
	            type:'bar',
	            barWidth : 5,
	            stack: '搜索引擎',
	            data:[620, 732, 701, 734, 1090, 1130, 1120]
	        },
	        {
	            name:'谷歌',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[120, 132, 101, 134, 290, 230, 220]
	        },
	        {
	            name:'必应',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[60, 72, 71, 74, 190, 130, 110]
	        },
	        {
	            name:'其他',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[62, 82, 91, 84, 109, 110, 120]
	        }
	    ]
	}),10),

	'坐标轴刻度与标签对齐'+
	sceg(jSoff({
	    color: ['#3398DB'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	            axisTick: {
	                alignWithLabel: true
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
	            data:[10, 52, 200, 334, 390, 330, 220]
	        }
	    ]
	}),10),

	'阶梯组成'+
	sceg(jSoff({
	    title: {
	        text: '深圳月最低生活费组成（单位:元）',
	        subtext: 'From www',
	        sublink: 'http://'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        },
	        formatter: function (params) {
	            var tar = params[1];
	            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type : 'category',
	        splitLine: {show:false},
	        data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
	    },
	    yAxis: {
	        type : 'value'
	    },
	    series: [
	        {
	            name: '辅助',
	            type: 'bar',
	            stack:  '总量',
	            itemStyle: {
	                normal: {
	                    barBorderColor: 'rgba(0,0,0,0)',
	                    color: 'rgba(0,0,0,0)'
	                },
	                emphasis: {
	                    barBorderColor: 'rgba(0,0,0,0)',
	                    color: 'rgba(0,0,0,0)'
	                }
	            },
	            data: [0, 1700, 1400, 1200, 300, 0]
	        },
	        {
	            name: '生活费',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                }
	            },
	            data:[2900, 1200, 300, 200, 900, 300]
	        }
	    ]

	}),10),

	'阶梯瀑布图'+
	sceg(jSoff({
	    title: {
	        text: '阶梯瀑布图',
	        subtext: 'From ...',
	        sublink: 'http://'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        },
	        formatter: function (params) {
	            var tar;
	            if (params[1].value != '-') {
	                tar = params[1];
	            }
	            else {
	                tar = params[0];
	            }
	            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
	        }
	    },
	    legend: {
	        data:['支出','收入']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type : 'category',
	        splitLine: {show:false},
	        data :  function (){
	            var list = [];
	            for (var i = 1; i <= 11; i++) {
	                list.push('11月' + i + '日');
	            }
	            return list;
	        }()
	    },
	    yAxis: {
	        type : 'value'
	    },
	    series: [
	        {
	            name: '辅助',
	            type: 'bar',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    barBorderColor: 'rgba(0,0,0,0)',
	                    color: 'rgba(0,0,0,0)'
	                },
	                emphasis: {
	                    barBorderColor: 'rgba(0,0,0,0)',
	                    color: 'rgba(0,0,0,0)'
	                }
	            },
	            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
	        },
	        {
	            name: '收入',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
	        },
	        {
	            name: '支出',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'bottom'
	                }
	            },
	            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
	        }
	    ]


	}),10),
	
	'横向组成图'+
	sceg(jSoff({

	    title: {
	        text: '世界人口总量',
	        subtext: '数据来自网络'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['2011年', '2012年']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        type: 'category',
	        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
	    },
	    series: [
	        {
	            name: '2011年',
	            type: 'bar',
	            data: [18203, 23489, 29034, 104970, 131744, 630230]
	        },
	        {
	            name: '2012年',
	            type: 'bar',
	            data: [19325, 23438, 31000, 121594, 134141, 681807]
	        }
	    ]

	}),10),

	'堆叠条形图'+
	sceg(jSoff({
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis:  {
	        type: 'value'
	    },
	    yAxis: {
	        type: 'category',
	        data: ['周一','周二','周三','周四','周五','周六','周日']
	    },
	    series: [
	        {
	            name: '直接访问',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [320, 302, 301, 334, 390, 330, 320]
	        },
	        {
	            name: '邮件营销',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name: '联盟广告',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name: '视频广告',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [150, 212, 201, 154, 190, 330, 410]
	        },
	        {
	            name: '搜索引擎',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [820, 832, 901, 934, 1290, 1330, 1320]
	        }
	    ]

	}),10),



	'平均刻度线'+
	sceg(jSoff({
	    title : {
	        text: '某地区蒸发量和降水量',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['蒸发量','降水量']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
	            markPoint : {
	                data : [
	                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
	                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name : '平均值'}
	                ]
	            }
	        }
	    ]
	}),10),


	'折线图+柱状图'+
	sceg(jSoff({
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            crossStyle: {
	                color: '#999'
	            }
	        }
	    },
	    toolbox: {
	        feature: {
	            dataView: {show: true, readOnly: false},
	            magicType: {show: true, type: ['line', 'bar']},
	            restore: {show: true},
	            saveAsImage: {show: true}
	        }
	    },
	    legend: {
	        data:['蒸发量','降水量','平均温度']
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	            axisPointer: {
	                type: 'shadow'
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: '水量',
	            min: 0,
	            max: 250,
	            interval: 50,
	            axisLabel: {
	                formatter: '{value} ml'
	            }
	        },
	        {
	            type: 'value',
	            name: '温度',
	            min: 0,
	            max: 25,
	            interval: 5,
	            axisLabel: {
	                formatter: '{value} °C'
	            }
	        }
	    ],
	    series: [
	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        },
	        {
	            name:'平均温度',
	            type:'line',
	            yAxisIndex: 1,
	            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
	        }
	    ]

	}),10),


	'多y轴'+
	sceg(jSoff({
	    color: ['#5793f3', '#d14a61', '#675bba'],

	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
	    grid: {
	        right: '20%'
	    },
	    toolbox: {
	        feature: {
	            dataView: {show: true, readOnly: false},
	            restore: {show: true},
	            saveAsImage: {show: true}
	        }
	    },
	    legend: {
	        data:['蒸发量','降水量','平均温度']
	    },
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {
	                alignWithLabel: true
	            },
	            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: '蒸发量',
	            min: 0,
	            max: 250,
	            position: 'right',
	            axisLine: {
	                lineStyle: {
	                    color: '#5793f3'
	                }
	            },
	            axisLabel: {
	                formatter: '{value} ml'
	            }
	        },
	        {
	            type: 'value',
	            name: '降水量',
	            min: 0,
	            max: 250,
	            position: 'right',
	            offset: 80,
	            axisLine: {
	                lineStyle: {
	                    color: '#d14a61'
	                }
	            },
	            axisLabel: {
	                formatter: '{value} ml'
	            }
	        },
	        {
	            type: 'value',
	            name: '温度',
	            min: 0,
	            max: 25,
	            position: 'left',
	            axisLine: {
	                lineStyle: {
	                    color: '#675bba'
	                }
	            },
	            axisLabel: {
	                formatter: '{value} °C'
	            }
	        }
	    ],
	    series: [
	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            yAxisIndex: 1,
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        },
	        {
	            name:'平均温度',
	            type:'line',
	            yAxisIndex: 2,
	            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
	        }
	    ]

	}),10),


	'数据形式（数组）'+
	sceg(jSoff({
	    legend: {},
	    tooltip: {},
	    dataset: {
	        source: [
	            ['product', '2015', '2016', '2017'],
	            ['Matcha Latte', 43.3, 85.8, 93.7],
	            ['Milk Tea', 83.1, 73.4, 55.1],
	            ['Cheese Cocoa', 86.4, 65.2, 82.5],
	            ['Walnut Brownie', 72.4, 53.9, 39.1]
	        ]
	    },
	    xAxis: {type: 'category'},
	    yAxis: {},
	    // Declare several bar series, each will be mapped
	    // to a column of dataset.source by default.
	    series: [
	        {type: 'bar'},
	        {type: 'bar'},
	        {type: 'bar'}
	    ]

	}),10),

	'数据形式（JSON）'+
	sceg(jSoff({
	    legend: {},
	    tooltip: {},
	    dataset: {
	        dimensions: ['product', '2015', '2016', '2017'],
	        source: [
	            {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
	            {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
	            {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
	            {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
	        ]
	    },
	    xAxis: {type: 'category'},
	    yAxis: {},
	    // Declare several bar series, each will be mapped
	    // to a column of dataset.source by default.
	    series: [
	        {type: 'bar'},
	        {type: 'bar'},
	        {type: 'bar'}
	    ]

	}),10),


	'横向对比条形图'+
	sceg(jSoff({
	    dataset: {
	        source: [
	            ['score', 'amount', 'product'],
	            [89.3, 58212, 'Matcha Latte'],
	            [57.1, 78254, 'Milk Tea'],
	            [74.4, 41032, 'Cheese Cocoa'],
	            [50.1, 12755, 'Cheese Brownie'],
	            [89.7, 20145, 'Matcha Cocoa'],
	            [68.1, 79146, 'Tea'],
	            [19.6, 91852, 'Orange Juice'],
	            [10.6, 101852, 'Lemon Juice'],
	            [32.7, 20112, 'Walnut Brownie']
	        ]
	    },
	    grid: {containLabel: true},
	    xAxis: {name: 'amount'},
	    yAxis: {type: 'category'},
	    visualMap: {
	        orient: 'horizontal',
	        left: 'center',
	        min: 10,
	        max: 100,
	        text: ['High Score', 'Low Score'],
	        // Map the score column to color
	        dimension: 0,
	        inRange: {
	            color: ['#D7DA8B', '#E15457']
	        }
	    },
	    series: [
	        {
	            type: 'bar',
	            encode: {
	                // Map the "amount" column to X axis.
	                x: 'amount',
	                // Map the "product" column to Y axis
	                y: 'product'
	            }
	        }
	    ]

	}),10),



	'多维度对比'+
	sceg(jSoff({
	    legend: {},
	    tooltip: {},
	    dataset: {
	        source: [
	            ['product', '2012', '2013', '2014', '2015'],
	            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
	            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
	            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
	        ]
	    },
	    xAxis: [
	        {type: 'category', gridIndex: 0},
	        {type: 'category', gridIndex: 1}
	    ],
	    yAxis: [
	        {gridIndex: 0},
	        {gridIndex: 1}
	    ],
	    grid: [
	        {bottom: '55%'},
	        {top: '55%'}
	    ],
	    series: [
	        // These series are in the first grid.
	        {type: 'bar', seriesLayoutBy: 'row'},
	        {type: 'bar', seriesLayoutBy: 'row'},
	        {type: 'bar', seriesLayoutBy: 'row'},
	        // These series are in the second grid.
	        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
	        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
	    ]
	}),10),




	].join(br)
	)
	,
		
	detail('【饼图】pie',[
		
	'半径一致'+
	sceg(jSoff({
	    title : {
	        text: '某站点用户访问来源',
	        subtext: '纯属虚构',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]

	}),10),
		
	'半径不一致'+
	sceg(jSoff({
	    backgroundColor: '#2c343c',

	    title: {
	        text: 'Customized Pie',
	        left: 'center',
	        top: 20,
	        textStyle: {
	            color: '#ccc'
	        }
	    },

	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },

	    visualMap: {
	        show: false,
	        min: 80,
	        max: 600,
	        inRange: {
	            colorLightness: [0, 1]
	        }
	    },
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:274, name:'联盟广告'},
	                {value:235, name:'视频广告'},
	                {value:400, name:'搜索引擎'}
	            ].sort(function (a, b) { return a.value - b.value; }),
	            roseType: 'radius',
	            label: {
	                normal: {
	                    textStyle: {
	                        color: 'rgba(255, 255, 255, 0.3)'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    lineStyle: {
	                        color: 'rgba(255, 255, 255, 0.3)'
	                    },
	                    smooth: 0.2,
	                    length: 10,
	                    length2: 20
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#c23531',
	                    shadowBlur: 200,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },

	            animationType: 'scale',
	            animationEasing: 'elasticOut',
	            animationDelay: function (idx) {
	                return Math.random() * 200;
	            }
	        }
	    ]



	}),10),
		
		
	'南丁格尔玫瑰图'+
	sceg(jSoff({
	    title : {
	        text: '南丁格尔玫瑰图',
	        subtext: '纯属虚构',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        x : 'center',
	        y : 'bottom',
	        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
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
	            radius : [20, 110],
	            center : ['25%', '50%'],
	            roseType : 'radius',
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            lableLine: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {value:10, name:'rose1'},
	                {value:5, name:'rose2'},
	                {value:15, name:'rose3'},
	                {value:25, name:'rose4'},
	                {value:20, name:'rose5'},
	                {value:35, name:'rose6'},
	                {value:30, name:'rose7'},
	                {value:40, name:'rose8'}
	            ]
	        },
	        {
	            name:'面积模式',
	            type:'pie',
	            radius : [30, 110],
	            center : ['75%', '50%'],
	            roseType : 'area',
	            data:[
	                {value:10, name:'rose1'},
	                {value:5, name:'rose2'},
	                {value:15, name:'rose3'},
	                {value:25, name:'rose4'},
	                {value:20, name:'rose5'},
	                {value:35, name:'rose6'},
	                {value:30, name:'rose7'},
	                {value:40, name:'rose8'}
	            ]
	        }
	    ]



	}),10),

	'多个饼图'+
	sceg(jSoff({
	    legend: {},
	    tooltip: {},
	    dataset: {
	        source: [
	            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
	            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
	            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
	            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
	            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
	        ]
	    },
	    series: [{
	        type: 'pie',
	        radius: 60,
	        center: ['25%', '30%']
	        // No encode specified, by default, it is '2012'.
	    }, {
	        type: 'pie',
	        radius: 60,
	        center: ['75%', '30%'],
	        encode: {
	            itemName: 'product',
	            value: '2013'
	        }
	    }, {
	        type: 'pie',
	        radius: 60,
	        center: ['25%', '75%'],
	        encode: {
	            itemName: 'product',
	            value: '2014'
	        }
	    }, {
	        type: 'pie',
	        radius: 60,
	        center: ['75%', '75%'],
	        encode: {
	            itemName: 'product',
	            value: '2015'
	        }
	    }]
		
	}),10),

	'Doughnut环形图'+
	sceg(jSoff({
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ]
	        }
	    ]

	}),10),



	'环形图 + 饼图'+
	sceg(jSoff({
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
	    },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '30%'],

	            label: {
	                normal: {
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'直达', selected:true},
	                {value:679, name:'营销广告'},
	                {value:1548, name:'搜索引擎'}
	            ]
	        },
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['40%', '55%'],
	            label: {
	                normal: {
	                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
	                    backgroundColor: '#eee',
	                    borderColor: '#aaa',
	                    borderWidth: 1,
	                    borderRadius: 4,
	                    // shadowBlur:3,
	                    // shadowOffsetX: 2,
	                    // shadowOffsetY: 2,
	                    // shadowColor: '#999',
	                    // padding: [0, 7],
	                    rich: {
	                        a: {
	                            color: '#999',
	                            lineHeight: 22,
	                            align: 'center'
	                        },
	                        // abg: {
	                        //     backgroundColor: '#333',
	                        //     width: '100%',
	                        //     align: 'right',
	                        //     height: 22,
	                        //     borderRadius: [4, 4, 0, 0]
	                        // },
	                        hr: {
	                            borderColor: '#aaa',
	                            width: '100%',
	                            borderWidth: 0.5,
	                            height: 0
	                        },
	                        b: {
	                            fontSize: 16,
	                            lineHeight: 33
	                        },
	                        per: {
	                            color: '#eee',
	                            backgroundColor: '#334455',
	                            padding: [2, 4],
	                            borderRadius: 2
	                        }
	                    }
	                }
	            },
	            data:[
	                {value:335, name:'直达'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1048, name:'百度'},
	                {value:251, name:'谷歌'},
	                {value:147, name:'必应'},
	                {value:102, name:'其他'}
	            ]
	        }
	    ]
	}),10),
	].join(br)
	),
	
	
	detail('【散点图】scatter',[

	sceg(jSoff({
	    xAxis: {},
	    yAxis: {},
	    series: [{
	        symbolSize: 20,
	        data: [
	            [10.0, 8.04],
	            [8.0, 6.95],
	            [13.0, 7.58],
	            [9.0, 8.81],
	            [11.0, 8.33],
	            [14.0, 9.96],
	            [6.0, 7.24],
	            [4.0, 4.26],
	            [12.0, 10.84],
	            [7.0, 4.82],
	            [5.0, 5.68]
	        ],
	        type: 'scatter'
	    }]
	
	}),10),


	'气泡图 Bubble'+
	sceg(jSoff({
	    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
	        offset: 0,
	        color: '#f7f8fa'
	    }, {
	        offset: 1,
	        color: '#cdd0d5'
	    }]),
	    title: {
	        text: '1990 与 2015 年各国家人均寿命与 GDP'
	    },
	    legend: {
	        right: 10,
	        data: ['1990', '2015']
	    },
	    xAxis: {
	        splitLine: {
	            lineStyle: {
	                type: 'dashed'
	            }
	        }
	    },
	    yAxis: {
	        splitLine: {
	            lineStyle: {
	                type: 'dashed'
	            }
	        },
	        scale: true
	    },
	    series: [{
	        name: '1990',
	        data: [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
	        type: 'scatter',
	        symbolSize: function (data) {
	            return Math.sqrt(data[2]) / 5e2;
	        },
	        label: {
	            emphasis: {
	                show: true,
	                formatter: function (param) {
	                    return param.data[3];
	                },
	                position: 'top'
	            }
	        },
	        itemStyle: {
	            normal: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(120, 36, 50, 0.5)',
	                shadowOffsetY: 5,
	                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
	                    offset: 0,
	                    color: 'rgb(251, 118, 123)'
	                }, {
	                    offset: 1,
	                    color: 'rgb(204, 46, 72)'
	                }])
	            }
	        }
	    }, {
	        name: '2015',
	        data: [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]],
	        type: 'scatter',
	        symbolSize: function (data) {
	            return Math.sqrt(data[2]) / 5e2;
	        },
	        label: {
	            emphasis: {
	                show: true,
	                formatter: function (param) {
	                    return param.data[3];
	                },
	                position: 'top'
	            }
	        },
	        itemStyle: {
	            normal: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(25, 100, 150, 0.5)',
	                shadowOffsetY: 5,
	                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
	                    offset: 0,
	                    color: 'rgb(129, 227, 238)'
	                }, {
	                    offset: 1,
	                    color: 'rgb(25, 183, 207)'
	                }])
	            }
	        }
	    }]
	
	}),10),


	'Anscombe\'s quartet'+
	sceg(jSoff({

	    title: {
	        text: 'Anscombe\'s quartet',
	        x: 'center',
	        y: 0
	    },
	    grid: [
	        {x: '7%', y: '7%', width: '38%', height: '38%'},
	        {x2: '7%', y: '7%', width: '38%', height: '38%'},
	        {x: '7%', y2: '7%', width: '38%', height: '38%'},
	        {x2: '7%', y2: '7%', width: '38%', height: '38%'}
	    ],
	    tooltip: {
	        formatter: 'Group {a}: ({c})'
	    },
	    xAxis: [
	        {gridIndex: 0, min: 0, max: 20},
	        {gridIndex: 1, min: 0, max: 20},
	        {gridIndex: 2, min: 0, max: 20},
	        {gridIndex: 3, min: 0, max: 20}
	    ],
	    yAxis: [
	        {gridIndex: 0, min: 0, max: 15},
	        {gridIndex: 1, min: 0, max: 15},
	        {gridIndex: 2, min: 0, max: 15},
	        {gridIndex: 3, min: 0, max: 15}
	    ],
	    series: [
	        {
	            name: 'I',
	            type: 'scatter',
	            xAxisIndex: 0,
	            yAxisIndex: 0,
	            data: [
	                [10.0, 8.04],
	                [8.0, 6.95],
	                [13.0, 7.58],
	                [9.0, 8.81],
	                [11.0, 8.33],
	                [14.0, 9.96],
	                [6.0, 7.24],
	                [4.0, 4.26],
	                [12.0, 10.84],
	                [7.0, 4.82],
	                [5.0, 5.68]
	            ],
	            markLine: {
	                animation: false,
	                label: {
	                    normal: {
	                        formatter: 'y = 0.5 * x + 3',
	                        textStyle: {
	                            align: 'right'
	                        }
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        type: 'solid'
	                    }
	                },
	                tooltip: {
	                    formatter: 'y = 0.5 * x + 3'
	                },
	                data: [[{
	                    coord: [0, 3],
	                    symbol: 'none'
	                }, {
	                    coord: [20, 13],
	                    symbol: 'none'
	                }]]
	            }
	        },
	        {
	            name: 'II',
	            type: 'scatter',
	            xAxisIndex: 1,
	            yAxisIndex: 1,
	            data: [
	                [10.0, 9.14],
	                [8.0, 8.14],
	                [13.0, 8.74],
	                [9.0, 8.77],
	                [11.0, 9.26],
	                [14.0, 8.10],
	                [6.0, 6.13],
	                [4.0, 3.10],
	                [12.0, 9.13],
	                [7.0, 7.26],
	                [5.0, 4.74]
	            ],
	            markLine: {
	                animation: false,
	                label: {
	                    normal: {
	                        formatter: 'y = 0.5 * x + 3',
	                        textStyle: {
	                            align: 'right'
	                        }
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        type: 'solid'
	                    }
	                },
	                tooltip: {
	                    formatter: 'y = 0.5 * x + 3'
	                },
	                data: [[{
	                    coord: [0, 3],
	                    symbol: 'none'
	                }, {
	                    coord: [20, 13],
	                    symbol: 'none'
	                }]]
	            }
	        },
	        {
	            name: 'III',
	            type: 'scatter',
	            xAxisIndex: 2,
	            yAxisIndex: 2,
	            data: [
	                [10.0, 7.46],
	                [8.0, 6.77],
	                [13.0, 12.74],
	                [9.0, 7.11],
	                [11.0, 7.81],
	                [14.0, 8.84],
	                [6.0, 6.08],
	                [4.0, 5.39],
	                [12.0, 8.15],
	                [7.0, 6.42],
	                [5.0, 5.73]
	            ],
	            markLine: {
	                animation: false,
	                label: {
	                    normal: {
	                        formatter: 'y = 0.5 * x + 3',
	                        textStyle: {
	                            align: 'right'
	                        }
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        type: 'solid'
	                    }
	                },
	                tooltip: {
	                    formatter: 'y = 0.5 * x + 3'
	                },
	                data: [[{
	                    coord: [0, 3],
	                    symbol: 'none'
	                }, {
	                    coord: [20, 13],
	                    symbol: 'none'
	                }]]
	            }
	        },
	        {
	            name: 'IV',
	            type: 'scatter',
	            xAxisIndex: 3,
	            yAxisIndex: 3,
	            data:     [
	                [8.0, 6.58],
	                [8.0, 5.76],
	                [8.0, 7.71],
	                [8.0, 8.84],
	                [8.0, 8.47],
	                [8.0, 7.04],
	                [8.0, 5.25],
	                [19.0, 12.50],
	                [8.0, 5.56],
	                [8.0, 7.91],
	                [8.0, 6.89]
	            ],
	            markLine: {
	                animation: false,
	                label: {
	                    normal: {
	                        formatter: 'y = 0.5 * x + 3',
	                        textStyle: {
	                            align: 'right'
	                        }
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        type: 'solid'
	                    }
	                },
	                tooltip: {
	                    formatter: 'y = 0.5 * x + 3'
	                },
	                data: [[{
	                    coord: [0, 3],
	                    symbol: 'none'
	                }, {
	                    coord: [20, 13],
	                    symbol: 'none'
	                }]]
	            }
	        }
	    ]

	}),10),



	'扩散特效'+
	sceg(jSoff({
	    xAxis: {
	        scale: true
	    },
	    yAxis: {
	        scale: true
	    },
	    series: [{
	        type: 'effectScatter',
	        symbolSize: 20,
	        data: [
	            [172.7, 105.2],
	            [153.4, 42]
	        ]
	    }, {
	        type: 'scatter',
	        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
	          
	        ],
	    }]



	}),10),



	].join(br)
	),
	
	
	
	
	
	
	
	detail('【树形图】tree',[
	
	'矩形树图'+
	sceg(jSoff({
	    series: [{
	        type: 'treemap',
	        data: [{
	            name: 'nodeA',            // First tree
	            value: 10,
	            children: [{
	                name: 'nodeAa',       // First leaf of first tree
	                value: 4
	            }, {
	                name: 'nodeAb',       // Second leaf of first tree
	                value: 6
	            }]
	        }, {
	            name: 'nodeB',            // Second tree
	            value: 20,
	            children: [{
	                name: 'nodeBa',       // Son of first tree
	                value: 20,
	                children: [{
	                    name: 'nodeBa1',  // Granson of first tree
	                    value: 20
	                }]
	            }]
	        }]
	    }]
		
		
		
	}),10),
	
	
	'横向树图'+
	sceg(jSoff({
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'tree1',
            icon: 'rectangle'
        } ,
        {
            name: 'tree2',
            icon: 'rectangle'
        }],
        borderColor: '#c23531'
    },
    series:[
          {
            type: 'tree',
            name: 'tree2',
            data: [{
			    "name": "flare",
			    "children": [
			        {
			            "name": "flex",
			            "children": [
			                {"name": "FlareVis", "value": 4116}
			            ]
			        },
			        {
			            "name": "scale",
			            "children": [
			                {"name": "IScaleMap", "value": 2105},
			                {"name": "LinearScale", "value": 1316},
			                {"name": "LogScale", "value": 3151},
			                {"name": "OrdinalScale", "value": 3770},
			                {"name": "QuantileScale", "value": 2435},
			                {"name": "QuantitativeScale", "value": 4839},
			                {"name": "RootScale", "value": 1756},
			                {"name": "Scale", "value": 4268},
			                {"name": "ScaleType", "value": 1821},
			                {"name": "TimeScale", "value": 5833}
			           ]
			        },
			        {
			            "name": "display",
			            "children": [
			                {"name": "DirtySprite", "value": 8833}
			           ]
			        }
			    ]
			}],

            top: '10%',
            left: '20%',
            bottom: '22%',
            right: '28%',

            symbolSize: 7,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]

	}),10)
	].join(br)
	)
].join(br);

