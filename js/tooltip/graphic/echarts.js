/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

var echref=function(text,gl,u,theme){return href(Hs+'www.echartsjs.com/examples/zh/editor.html?c='+(u||text.toLowerCase().replace(/ /g, '-'))+(gl?'&gl=1':'')+(theme?'&theme='+theme:''),text)};
tooltip.graphic=tooltip.graphic || {};
tooltip.graphic['Statistics/Echarts']=[href(Hs+'www.echartsjs.com/examples/index.html','百度ECharts官网')+'暂不支持LaTeX',
	br,
	'JS代码片段用$美元符号$括起来'+sceg2('$1+2$'),

	detail('【折线图】line',[
	echref('Line Simple')+
	sceg(`o={
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
	}`,0),'可以插在series.type后面的参数：',
	echref('面积图','','area-basic')+sceg2(',areaStyle:{}'),
	echref('光滑图','','line-smooth')+sceg2(',smooth:true'),

	echref('堆叠折线图','','line-stack')+
	sceg(`option = {
		title: {
			text: '折线图堆叠'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
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
			data: ['周一','周二','周三','周四','周五','周六','周日']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				name:'邮件营销',
				type:'line',
				stack: '总量',
				data:[120, 132, 101, 134, 90, 230, 210]
			},
			{
				name:'联盟广告',
				type:'line',
				stack: '总量',
				data:[220, 182, 191, 234, 290, 330, 310]
			},
			{
				name:'视频广告',
				type:'line',
				stack: '总量',
				data:[150, 232, 201, 154, 190, 330, 410]
			},
			{
				name:'直接访问',
				type:'line',
				stack: '总量',
				data:[320, 332, 301, 334, 390, 330, 320]
			},
			{
				name:'搜索引擎',
				type:'line',
				stack: '总量',
				data:[820, 932, 901, 934, 1290, 1330, 1320]
			}
		]
	}`,0),

	echref('堆叠面积图','','area-stack')+
	sceg(`option = {
		title: {
			text: '堆叠区域图'
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
		legend: {
			data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
		},
		toolbox: {
			feature: {
				saveAsImage: {}
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
				boundaryGap : false,
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
				name:'邮件营销',
				type:'line',
				stack: '总量',
				areaStyle: {},
				data:[120, 132, 101, 134, 90, 230, 210]
			},
			{
				name:'联盟广告',
				type:'line',
				stack: '总量',
				areaStyle: {},
				data:[220, 182, 191, 234, 290, 330, 310]
			},
			{
				name:'视频广告',
				type:'line',
				stack: '总量',
				areaStyle: {},
				data:[150, 232, 201, 154, 190, 330, 410]
			},
			{
				name:'直接访问',
				type:'line',
				stack: '总量',
				areaStyle: {normal: {}},
				data:[320, 332, 301, 334, 390, 330, 320]
			},
			{
				name:'搜索引擎',
				type:'line',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'top'
					}
				},
				areaStyle: {normal: {}},
				data:[820, 932, 901, 934, 1290, 1330, 1320]
			}
		]
	}`,0),


	echref('Area-Simple')+
	sceg(`var base = +new Date(1968, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var date = [];
	
	var data = [Math.random() * 300];
	
	for (var i = 1; i < 20000; i++) {
		var now = new Date(base += oneDay);
		date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
		data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
	}
	
	option = {
		tooltip: {
			trigger: 'axis',
			position: function (pt) {
				return [pt[0], '10%'];
			}
		},
		title: {
			left: 'center',
			text: '大数据量面积图',
		},
		toolbox: {
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				restore: {},
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: date
		},
		yAxis: {
			type: 'value',
			boundaryGap: [0, '100%']
		},
		dataZoom: [{
			type: 'inside',
			start: 0,
			end: 10
		}, {
			start: 0,
			end: 10,
			handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
			handleSize: '80%',
			handleStyle: {
				color: '#fff',
				shadowBlur: 3,
				shadowColor: 'rgba(0, 0, 0, 0.6)',
				shadowOffsetX: 2,
				shadowOffsetY: 2
			}
		}],
		series: [
			{
				name:'模拟数据',
				type:'line',
				smooth:true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					color: 'rgb(255, 70, 131)'
				},
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(255, 158, 68)'
					}, {
						offset: 1,
						color: 'rgb(255, 70, 131)'
					}])
				},
				data: data
			}
		]
	}`,0),

	echref('降雨量','','area-rainfall')+
	sceg(`option = {
		title : {
			text: '雨量流量关系图',
			subtext: '数据源',
			x: 'center',
			align: 'right'
		},
		grid: {
			bottom: 80
		},
		toolbox: {
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				restore: {},
				saveAsImage: {}
			}
		},
		tooltip : {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				animation: false,
				label: {
					backgroundColor: '#505765'
				}
			}
		},
		legend: {
			data:['流量','降雨量'],
			x: 'left'
		},
		dataZoom: [
			{
				show: true,
				realtime: true,
				start: 65,
				end: 85
			},
			{
				type: 'inside',
				realtime: true,
				start: 65,
				end: 85
			}
		],
		xAxis : [
			{
				type : 'category',
				boundaryGap : false,
				axisLine: {onZero: false},
				data : [
					'2009/6/12 2:00', '2009/6/12 3:00',  '2009/6/12 21:00', '2009/6/12 22:00', '2009/6/12 23:00',
				].map(function (str) {
					return str.replace(' ', brn)
				})
			}
		],
		yAxis: [
			{
				name: '流量(m^3/s)',
				type: 'value',
				max: 500
			},
			{
				name: '降雨量(mm)',
				nameLocation: 'start',
				max: 5,
				type: 'value',
				inverse: true
			}
		],
		series: [
			{
				name:'流量',
				type:'line',
				animation: false,
				areaStyle: {
				},
				lineStyle: {
					width: 1
				},
				markArea: {
					silent: true,
					data: [[{
						xAxis: '2009/9/12\\n7:00'
					}, {
						xAxis: '2009/9/22\\n7:00'
					}]]
				},
				data:[
					0.97,0.96,0.96,0.95,0.58,0.58,0.58,0.58,0.58,0.58,0.58,0.54,0,
				]
			},
			{
				name:'降雨量',
				type:'line',
				yAxisIndex:1,
				animation: false,
				areaStyle: {
				},
				lineStyle: {
					width: 1
				},
				markArea: {
					silent: true,
					data: [[{
						xAxis: '2009/9/10\\n7:00'
					}, {
						xAxis: '2009/9/20\\n7:00'
					}]]
				},
				data: [
					0.303,1.028,1.328,1.524,1.41,1.362,1.292,1.191,0.529,0.501,0.859
				]
			}
		]
	}`,0),

	echref('降雨量2','','grid-multiple')+
	sceg(`
	var timeData = [
		'2019/6/12 2:00', '2019/6/12 3:00', '2019/6/12 4:00', '2019/6/12 5:00', '2019/6/12 6:00',
		'2019/6/13 0:00', '2019/6/13 1:00', '2019/6/13 2:00', '2019/6/13 3:00', '2019/10/1 6:00'];
	
	option = {
		title: {
			text: '雨量流量关系图',
			subtext: '数据源',
			x: 'center'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				animation: false
			}
		},
		legend: {
			data:['流量','降雨量'],
			x: 'left'
		},
		toolbox: {
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				restore: {},
				saveAsImage: {}
			}
		},
		axisPointer: {
			link: {xAxisIndex: 'all'}
		},
		dataZoom: [
			{
				show: true,
				realtime: true,
				start: 30,
				end: 70,
				xAxisIndex: [0, 1]
			},
			{
				type: 'inside',
				realtime: true,
				start: 30,
				end: 70,
				xAxisIndex: [0, 1]
			}
		],
		grid: [{
			left: 50,
			right: 50,
			height: '35%'
		}, {
			left: 50,
			right: 50,
			top: '55%',
			height: '35%'
		}],
		xAxis : [
			{
				type : 'category',
				boundaryGap : false,
				axisLine: {onZero: true},
				data: timeData
			},
			{
				gridIndex: 1,
				type : 'category',
				boundaryGap : false,
				axisLine: {onZero: true},
				data: timeData,
				position: 'top'
			}
		],
		yAxis : [
			{
				name : '流量(m^3/s)',
				type : 'value',
				max : 500
			},
			{
				gridIndex: 1,
				name : '降雨量(mm)',
				type : 'value',
				inverse: true
			}
		],
		series : [
			{
				name:'流量',
				type:'line',
				symbolSize: 8,
				hoverAnimation: false,
				data:[
					0.97,0.96,0.96,0.95,0
				]
			},
			{
				name:'降雨量',
				type:'line',
				xAxisIndex: 1,
				yAxisIndex: 1,
				symbolSize: 8,
				hoverAnimation: false,
				data: [
					0.005,0.017,0.017,0.017,0.0171,0.031
				]
			}
		]
	}`,0),
	echref('Line AQI'),

	echref('Confidence Band'),

	echref('Line Log')+
	sceg(`option = {
		title: {
			text: '对数轴示例',
			left: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c}'
		},
		legend: {
			left: 'left',
			data: ['2的指数', '3的指数']
		},
		xAxis: {
			type: 'category',
			name: 'x',
			splitLine: {show: false},
			data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		yAxis: {
			type: 'log',
			name: 'y'
		},
		series: [
			{
				name: '3的指数',
				type: 'line',
				data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
			},
			{
				name: '2的指数',
				type: 'line',
				data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
			},
			{
				name: '1/2的指数',
				type: 'line',
				data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
			}
		]
	}`,0),


	echref('Line Section')+
	sceg(`option = {
		title: {
			text: '一天用电量分布',
			subtext: '纯属虚构'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			}
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: {}
			}
		},
		xAxis:  {
			type: 'category',
			boundaryGap: false,
			data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value} W'
			},
			axisPointer: {
				snap: true
			}
		},
		visualMap: {
			show: false,
			dimension: 0,
			pieces: [{
				lte: 6,
				color: 'green'
			}, {
				gt: 6,
				lte: 8,
				color: 'red'
			}, {
				gt: 8,
				lte: 14,
				color: 'green'
			}, {
				gt: 14,
				lte: 17,
				color: 'red'
			}, {
				gt: 17,
				color: 'green'
			}]
		},
		series: [
			{
				name:'用电量',
				type:'line',
				smooth: true,
				data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
				markArea: {
					data: [ [{
						name: '早高峰',
						xAxis: '07:30'
					}, {
						xAxis: '10:00'
					}], [{
						name: '晚高峰',
						xAxis: '17:30'
					}, {
						xAxis: '21:15'
					}] ]
				}
			}
		]
	}`,0),


	echref('Line Step')+
	sceg(`option = {
		title: {
			text: 'Step Line'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data:['Step Start', 'Step Middle', 'Step End']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				name:'Step Start',
				type:'line',
				step: 'start',
				data:[120, 132, 101, 134, 90, 230, 210]
			},
			{
				name:'Step Middle',
				type:'line',
				step: 'middle',
				data:[220, 282, 201, 234, 290, 430, 410]
			},
			{
				name:'Step End',
				type:'line',
				step: 'end',
				data:[450, 432, 401, 454, 590, 530, 510]
			}
		]
	}`,0),


	echref('Line Style')+
	sceg(`option = {
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			data: [120, 200, 150, 80, 70, 110, 130],
			type: 'line',
			symbol: 'triangle',
			symbolSize: 20,
			lineStyle: {
				normal: {
					color: 'green',
					width: 4,
					type: 'dashed'
				}
			},
			itemStyle: {
				normal: {
					borderWidth: 3,
					borderColor: 'yellow',
					color: 'blue'
				}
			}
		}]
	}`,0),



	echref('Line-Y Category')+
	sceg(`option = {
		legend: {
			data:['高度(km)与气温(°C)变化关系']
		},
		tooltip: {
			trigger: 'axis',
			formatter: "Temperature : <br/>{b}km : {c}°C"
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value} °C'
			}
		},
		yAxis: {
			type: 'category',
			axisLine: {onZero: false},
			axisLabel: {
				formatter: '{value} km'
			},
			boundaryGap: false,
			data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
		},
		series: [
			{
				name: '高度(km)与气温(°C)变化关系',
				type: 'line',
				smooth: true,
				lineStyle: {
					normal: {
						width: 3,
						shadowColor: 'rgba(0,0,0,0.4)',
						shadowBlur: 10,
						shadowOffsetY: 10
					}
				},
				data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
			}
		]
	}`,0),

	echref('Dynamic Data2')+
	sceg(`function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 21 - 10;
		return {
			name: now.toString(),
			value: [
				[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
				Math.round(value)
			]
		}
	}
	
	var data = [];
	var now = +new Date(1997, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var value = Math.random() * 1000;
	for (var i = 0; i < 1000; i++) {
		data.push(randomData());
	}
	
	sTi(function () {
	
		for (var i = 0; i < 5; i++) {
			data.shift();
			data.push(randomData());
		}
	
		myChart.setOption({
			series: [{
				data: data
			}]
		});
	}, 1000);
	option = {
		title: {
			text: '动态数据 + 时间坐标轴'
		},
		tooltip: {
			trigger: 'axis',
			formatter: function (params) {
				params = params[0];
				var date = new Date(params.name);
				return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			},
			axisPointer: {
				animation: false
			}
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: false
			}
		},
		yAxis: {
			type: 'value',
			boundaryGap: [0, '100%'],
			splitLine: {
				show: false
			}
		},
		series: [{
			name: '模拟数据',
			type: 'line',
			showSymbol: false,
			hoverAnimation: false,
			data: data
		}]
	}`,0),



	'平行坐标系 Parallel'+
	sceg(`o={
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
	}`,0),

	'多个X轴'+echref('Multiple X Axis')+
	sceg(`o={
	    color: ['#5793f3', '#d14a61', '#675bba'],

	    tooltip: {
	        trigger: 'none',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
	    legend: {
	        data:['2019 降水量', '2020 降水量']
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
	            data: ["2020-1", "2020-2", "2020-3", "2020-4", "2020-5", "2020-6", "2020-7", "2020-8", "2020-9", "2020-10", "2020-11", "2020-12"]
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
	            data: ["2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7", "2019-8", "2019-9", "2019-10", "2019-11", "2019-12"]
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
	}`,0),
		
		
	'折线+饼图'+echref('Dataset Link')+
	sceg(`o={
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
	}`,0)
	].join(br)
	),


	detail('【极坐标图】polar',[
	'爱心 Heart'+echref('Line Polar')+		
	sceg(`o={
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
	        data: Arrf(function(x){var t=x/100*360;return [5*(1+Math.sin(t/180*Math.PI)),t]},seqA(0,101))
	    }]
	}`,0),
	
	'8叶线'+echref('Line Polar2')+
	sceg(`o={
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
	        data: Arrf(function(x){var t=x/45*Math.PI;return [Math.sin(t)/2,x]},seqA(0,361))
	    }],
	    animationDuration: 2000
	}`,0),
	
	'堆叠柱状图1'+echref('Bar Polar-Real Estate')+
	sceg(`o={
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

	}`,0),

	'堆叠柱状图2'+echref('Bar Polar-Stack')+
	sceg(`o={
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

	}`,0),
		
	'堆叠柱状图3'+echref('Bar Polar-Stack Radial')+
	sceg(`o={
	
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

	}`,0),
		
		
	].join(br)
	),


	detail('【柱状图】bar',[

	echref('Bar Simple')+
	sceg(`o={
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
		
	}`,0),

	'年度细分对比'+echref('Bar Label Rotation')+
	sceg(`o={
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
	}`,0),
	
	
	'堆叠柱状图'+echref('Bar Stack')+
	sceg(`o={
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
	}`,0),

	'坐标轴刻度与标签对齐'+echref('Bar-Tick Align')+
	sceg(`o={
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
	}`,0),

	'阶梯组成'+echref('Bar Waterfall')+
	sceg(`o={
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

	}`,0),

	'阶梯瀑布图'+echref('Bar Waterfall2')+
	sceg(`o={
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


	}`,0),
	
	


	'平均刻度线'+echref('Bar1')+
	sceg(`o={
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
	}`,0),


	echref('Bar Large')+'50万+',
	
	echref('Dynamic Data')+
	sceg(`var count = 11;
	sTi(function (){
		axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
	
		var data0 = option.series[0].data;
		var data1 = option.series[1].data;
		data0.shift();
		data0.push(Math.round(Math.random() * 1000));
		data1.shift();
		data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
	
		option.xAxis[0].data.shift();
		option.xAxis[0].data.push(axisData);
		option.xAxis[1].data.shift();
		option.xAxis[1].data.push(count++); 
	
		myChart.setOption(option);
	}, 2100);
	option = {
		title: {
			text: '动态数据',
			subtext: '纯属虚构'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#283b56'
				}
			}
		},
		legend: {
			data:['最新成交价', '预购队列']
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {readOnly: false},
				restore: {},
				saveAsImage: {}
			}
		},
		dataZoom: {
			show: false,
			start: 0,
			end: 100
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: true,
				data: (function (){
					var now = new Date();
					var res = [];
					var len = 10;
					while (len--) {
						res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
						now = new Date(now - 2000);
					}
					return res;
				})()
			},
			{
				type: 'category',
				boundaryGap: true,
				data: (function (){
					var res = [];
					var len = 10;
					while (len--) {
						res.push(10 - len - 1);
					}
					return res;
				})()
			}
		],
		yAxis: [
			{
				type: 'value',
				scale: true,
				name: '价格',
				max: 30,
				min: 0,
				boundaryGap: [0.2, 0.2]
			},
			{
				type: 'value',
				scale: true,
				name: '预购量',
				max: 1200,
				min: 0,
				boundaryGap: [0.2, 0.2]
			}
		],
		series: [
			{
				name:'预购队列',
				type:'bar',
				xAxisIndex: 1,
				yAxisIndex: 1,
				data:(function (){
					var res = [];
					var len = 10;
					while (len--) {
						res.push(Math.round(Math.random() * 1000));
					}
					return res;
				})()
			},
			{
				name:'最新成交价',
				type:'line',
				data:(function (){
					var res = [];
					var len = 0;
					while (len < 10) {
						res.push((Math.random()*10 + 5).toFixed(1) - 0);
						len++;
					}
					return res;
				})()
			}
		]
	}`,0),



	'折线图+柱状图'+echref('Mix Line Bar')+
	sceg(`o={
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

	}`,0),



	echref('Mix Timeline Finance')+
	sceg(`var dataMap = {};
	function dataFormatter(obj) {
		var pList = ['北京','天津','河北'];
		var temp;
		for (var year = 2019; year <= 2020; year++) {
			var max = 0;
			var sum = 0;
			temp = obj[year];
			for (var i = 0, l = temp.length; i < l; i++) {
				max = Math.max(max, temp[i]);
				sum += temp[i];
				obj[year][i] = {
					name : pList[i],
					value : temp[i]
				}
			}
			obj[year + 'max'] = Math.floor(max / 100) * 100;
			obj[year + 'sum'] = sum;
		}
		return obj;
	}
	
	dataMap.dataGDP = dataFormatter({
		//max : 60000,
		2019:[16251.93,11307.28,24515.76],
		2020:[14113.58,9224.46,20394.26]
	});
	
	dataMap.dataPI = dataFormatter({
		//max : 4000,
		2019:[136.27,159.72,2905.73],
		2020:[124.36,145.58,2562.81]
	  
	});
	
	dataMap.dataSI = dataFormatter({
		//max : 26600,
		2019:[3752.48,5928.32,13126.86],
		2020:[3388.38,4840.23,10707.68]
	  
	});
	
	dataMap.dataTI = dataFormatter({
		//max : 25000,
		2019:[12363.18,5219.24,8483.17],
		2020:[10600.84,4238.65,7123.77]
	   
	});
	
	dataMap.dataEstate = dataFormatter({
		//max : 3600,
		2019:[1074.93,411.46,918.02],
		2020:[1006.52,377.59,697.79]
		
	});
	
	dataMap.dataFinancial = dataFormatter({
		//max : 3200,
		2019:[2215.41,756.5,746.01],
		2020:[1863.61,572.99,615.42]
		
	});
	
	
	option = {
		baseOption: {
			timeline: {
				// y: 0,
				axisType: 'category',
				// realtime: false,
				// loop: false,
				autoPlay: true,
				// currentIndex: 2,
				playInterval: 1000,
				// controlStyle: {
				//     position: 'left'
				// },
				data: [
					'2020-01-01',
					{
						value: '2020-01-01',
						tooltip: {
							formatter: '{b} GDP达到一个高度'
						},
						symbol: 'diamond',
						symbolSize: 16
					},
					'2019-01-01',
					{
						value: '2019-01-01',
						tooltip: {
							formatter: function (params) {
								return params.name + 'GDP达到又一个高度';
							}
						},
						symbol: 'diamond',
						symbolSize: 18
					},
				],
				label: {
					formatter : function(s) {
						return (new Date(s)).getFullYear();
					}
				}
			},
			title: {
				subtext: '数据来自国家统计局'
			},
			tooltip: {
			},
			legend: {
				x: 'right',
				data: ['第一产业', '第二产业', '第三产业', 'GDP', '金融', '房地产'],
				selected: {
					'GDP': false, '金融': false, '房地产': false
				}
			},
			calculable : true,
			grid: {
				top: 80,
				bottom: 100,
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
						label: {
							show: true,
							formatter: function (params) {
								return params.value.replace(brn, '');
							}
						}
					}
				}
			},
			xAxis: [
				{
					'type':'category',
					'axisLabel':{'interval':0},
					'data':[
						'北京','天津','河北'
					],
					splitLine: {show: false}
				}
			],
			yAxis: [
				{
					type: 'value',
					name: 'GDP（亿元）'
				}
			],
			series: [
				{name: 'GDP', type: 'bar'},
				{name: '金融', type: 'bar'},
				{name: '房地产', type: 'bar'},
				{name: '第一产业', type: 'bar'},
				{name: '第二产业', type: 'bar'},
				{name: '第三产业', type: 'bar'},
				{
					name: 'GDP占比',
					type: 'pie',
					center: ['75%', '35%'],
					radius: '28%',
					z: 100
				}
			]
		},
		options: [
		   
			{
				title : {text: '2020全国宏观经济指标'},
				series : [
					{data: dataMap.dataGDP['2020']},
					{data: dataMap.dataFinancial['2020']},
					{data: dataMap.dataEstate['2020']},
					{data: dataMap.dataPI['2020']},
					{data: dataMap.dataSI['2020']},
					{data: dataMap.dataTI['2020']},
					{data: [
						{name: '第一产业', value: dataMap.dataPI['2020sum']},
						{name: '第二产业', value: dataMap.dataSI['2020sum']},
						{name: '第三产业', value: dataMap.dataTI['2020sum']}
					]}
				]
			},
			{
				title : {text: '2019全国宏观经济指标'},
				series : [
					{data: dataMap.dataGDP['2019']},
					{data: dataMap.dataFinancial['2019']},
					{data: dataMap.dataEstate['2019']},
					{data: dataMap.dataPI['2019']},
					{data: dataMap.dataSI['2019']},
					{data: dataMap.dataTI['2019']},
					{data: [
						{name: '第一产业', value: dataMap.dataPI['2019sum']},
						{name: '第二产业', value: dataMap.dataSI['2019sum']},
						{name: '第三产业', value: dataMap.dataTI['2019sum']}
					]}
				]
			}
		]
	}`,0),

	echref('Mix Zoom on Value'),

	'多Y轴'+echref('Multiple Y-Axis')+
	sceg(`o={
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

	}`,0),


	'数据形式（数组）'+echref('Dataset Simple0')+
	sceg(`o={
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

	}`,0),

	'数据形式（JSON）'+echref('Dataset Simple1')+
	sceg(`o={
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

	}`,0),



	'多维度对比'+echref('Dataset Series Layout By','','','light')+
	sceg(`o={
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
	}`,0),




	].join(br)
	),

	

	detail('【条形图】横条',[


		'正负条形图'+echref('Bar Negative')+
		sceg(`o={
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
		}`,0),
		



		'交错正负轴标签'+echref('Bar Negative2')+
		sceg(`var labelRight = {
			normal: {
				position: 'right'
			}
		};
		option = {
			title: {
				text: '交错正负轴标签',
				subtext: 'From ExcelHome',
				sublink: 'http'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				top: 80,
				bottom: 30
			},
			xAxis: {
				type : 'value',
				position: 'top',
				splitLine: {lineStyle:{type:'dashed'}},
			},
			yAxis: {
				type : 'category',
				axisLine: {show: false},
				axisLabel: {show: false},
				axisTick: {show: false},
				splitLine: {show: false},
				data : ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
			},
			series : [
				{
					name:'生活费',
					type:'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							formatter: '{b}'
						}
					},
					data:[
						{value: -0.07, label: labelRight},
						{value: -0.09, label: labelRight},
						0.2, 0.44,
						{value: -0.23, label: labelRight},
						0.08,
						{value: -0.17, label: labelRight},
						0.47,
						{value: -0.36, label: labelRight},
						0.18
					]
				}
			]
		}`,0),
		

		'横向组成图'+echref('Bar-Y Category')+
		sceg(`o={
	
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
	
		}`,0),
	
		'堆叠条形图'+echref('Bar-Y Category Stack')+
		sceg(`o={
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
	
		}`,0),
	


		
	'横向对比'+echref('Dataset Encode0','','','light')+
	sceg(`o={
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

	}`,0),


	'富文本'+echref('Bar Rich Text')+
	sceg(`var weatherIcons = {
		'Sunny': '',
		'Cloudy': '',
		'Showers': ''
	};
	
	var seriesLabel = {
		normal: {
			show: true,
			textBorderColor: '#333',
			textBorderWidth: 2
		}
	}
	
	option = {
		title: {
			text: 'Wheater Statistics'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: ['City Alpha', 'City Beta', 'City Gamma']
		},
		grid: {
			left: 100
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'value',
			name: 'Days',
			axisLabel: {
				formatter: '{value}'
			}
		},
		yAxis: {
			type: 'category',
			inverse: true,
			data: ['Sunny', 'Cloudy', 'Showers'],
			axisLabel: {
				formatter: function (value) {
					return '{' + value + '| }'+brn+'{value|' + value + '}';
				},
				margin: 20,
				rich: {
					value: {
						lineHeight: 30,
						align: 'center'
					},
					Sunny: {
						height: 40,
						align: 'center',
						backgroundColor: {
							image: weatherIcons.Sunny
						}
					},
					Cloudy: {
						height: 40,
						align: 'center',
						backgroundColor: {
							image: weatherIcons.Cloudy
						}
					},
					Showers: {
						height: 40,
						align: 'center',
						backgroundColor: {
							image: weatherIcons.Showers
						}
					}
				}
			}
		},
		series: [
			{
				name: 'City Alpha',
				type: 'bar',
				data: [165, 170, 30],
				label: seriesLabel,
				markPoint: {
					symbolSize: 1,
					symbolOffset: [0, '50%'],
					label: {
					   normal: {
							formatter: '{a|{a}\\n}{b|{b} }{c|{c}}',
							backgroundColor: 'rgb(242,242,242)',
							borderColor: '#aaa',
							borderWidth: 1,
							borderRadius: 4,
							padding: [4, 10],
							lineHeight: 26,
							// shadowBlur: 5,
							// shadowColor: '#000',
							// shadowOffsetX: 0,
							// shadowOffsetY: 1,
							position: 'right',
							distance: 20,
							rich: {
								a: {
									align: 'center',
									color: '#fff',
									fontSize: 18,
									textShadowBlur: 2,
									textShadowColor: '#000',
									textShadowOffsetX: 0,
									textShadowOffsetY: 1,
									textBorderColor: '#333',
									textBorderWidth: 2
								},
								b: {
									 color: '#333'
								},
								c: {
									color: '#ff8811',
									textBorderColor: '#000',
									textBorderWidth: 1,
									fontSize: 22
								}
							}
					   }
					},
					data: [
						{type: 'max', name: 'max days: '},
						{type: 'min', name: 'min days: '}
					]
				}
			},
			{
				name: 'City Beta',
				type: 'bar',
				label: seriesLabel,
				data: [150, 105, 110]
			},
			{
				name: 'City Gamma',
				type: 'bar',
				label: seriesLabel,
				data: [220, 82, 63]
			}
		]
	}`,0),


	].join(br)
	),


	detail('【饼图】pie',[
		
	'半径一致'+
	sceg(`o={
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

	}`,0),
		
	'半径不一致'+
	sceg(`o={
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



	}`,0),
		
		
	'南丁格尔玫瑰图'+
	sceg(`o={
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



	}`,0),

	'多个饼图'+
	sceg(`o={
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
		
	}`,0),

	'Doughnut环形图'+
	sceg(`o={
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

	}`,0),



	'环形图 + 饼图 / '+echref('嵌套环形图','','pie-nest')+
	sceg(`o={
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
	                    formatter: '{a|{a}}{abg|}\\n{hr|}\\n  {b|{b}：}{c}  {per|{d}%}  ',
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
	}`,0),
	].join(br)
	),
	
	
	detail('【散点图】scatter',[

	sceg(`o={
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
	
	}`,0),


	'气泡图 Bubble'+
	sceg(`o={

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
	
	}
	`,0),


	'Anscombe\'s quartet'+
	sceg(`o={

	    title: {
	        text: 'Anscombe\\'s quartet',
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

	}`,0),



	'扩散特效'+
	sceg(`o={
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



	}`,0),



	].join(br)
	),
	
	
	
		
	detail('【关系图】relation',[
		echref('Graph Simple')+
		sceg(`o={
			title: {
				text: 'Graph 简单示例'
			},
			tooltip: {},
			animationDurationUpdate: 1500,
			animationEasingUpdate: 'quinticInOut',
			series : [
				{
					type: 'graph',
					layout: 'none',
					symbolSize: 50,
					roam: true,
					label: {
						normal: {
							show: true
						}
					},
					edgeSymbol: ['circle', 'arrow'],
					edgeSymbolSize: [4, 10],
					edgeLabel: {
						normal: {
							textStyle: {
								fontSize: 20
							}
						}
					},
					data: [{
						name: '节点1',
						x: 300,
						y: 300
					}, {
						name: '节点2',
						x: 800,
						y: 300
					}, {
						name: '节点3',
						x: 550,
						y: 100
					}, {
						name: '节点4',
						x: 550,
						y: 500
					}],
					// links: [],
					links: [{
						source: 0,
						target: 1,
						symbolSize: [5, 20],
						label: {
							normal: {
								show: true
							}
						},
						lineStyle: {
							normal: {
								width: 5,
								curveness: 0.2
							}
						}
					}, {
						source: '节点2',
						target: '节点1',
						label: {
							normal: {
								show: true
							}
						},
						lineStyle: {
							normal: { curveness: 0.2 }
						}
					}, {
						source: '节点1',
						target: '节点3'
					}, {
						source: '节点2',
						target: '节点3'
					}, {
						source: '节点2',
						target: '节点4'
					}, {
						source: '节点1',
						target: '节点4'
					}],
					lineStyle: {
						normal: {
							opacity: 0.9,
							width: 2,
							curveness: 0
						}
					}
				}
			]
		}`,0),
		
		
		
		'力引导布局 '+echref('Graph Force')+
		sceg(`
		function createNodes(count) {
			var nodes = [];
			for (var i = 0; i < count; i++) {
				nodes.push({
					id: i
				});
			}
			return nodes;
		}
		
		function createEdges(count) {
			var edges = [];
			if (count === 2) {
				return [[0, 1]]; 
			}
			for (var i = 0; i < count; i++) {
				edges.push([i, (i + 1) % count]);
			}
			return edges;
		}
		
		var datas = [];for (var i = 0; i < 16; i++) {
			datas.push({
				nodes: createNodes(i + 2),
				edges: createEdges(i + 2)
			});
		}
		
		option = {
			series: datas.map(function (item, idx) {
				return {
					type: 'graph',
					layout: 'force',
					animation: false,
					data: item.nodes,
					left: (idx % 4) * 25 + '%',
					top: Math.floor(idx / 4) * 25 + '%',
					width: '25%',
					height: '25%',
					force: {
						// initLayout: 'circular'
						// gravity: 0
						repulsion: 60,
						edgeLength: 2
					},
					edges: item.edges.map(function (e) {
						return {
							source: e[0],
							target: e[1]
						}; 
					})
				};
			})
		};
		`,0),
		
		'力引导布局2 '+echref('Graph Force2')+
		sceg(`//var graph = echarts.dataTool.gexf.parse(xml); 
		var graph=jSon('{"nodes":[{"id":"0","name":"Myriel","itemStyle":{"normal":{"color":"rgb(235,81,72)"}},"symbolSize":28.685715,"x":-266.82776,"y":299.6904,"attributes":{"modularity_class":0}},{"id":"1","name":"Napoleon","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":4,"x":-418.08344,"y":446.8853,"attributes":{"modularity_class":0}},{"id":"2","name":"MlleBaptistine","itemStyle":{"normal":{"color":"rgb(236,81,72)"}},"symbolSize":9.485714,"x":-212.76357,"y":245.29176,"attributes":{"modularity_class":1}}],"links":[{"id":"0","name":null,"source":"1","target":"0"},{"id":"1","name":null,"source":"2","target":"0","lineStyle":{"normal":{}}}]}');
			var categories = [];
			for (var i = 0; i < 3; i++) {
				categories[i] = {
					name: '类目' + i
				};
			}
			graph.nodes.forEach(function (node) {
				node.itemStyle = null;
				node.symbolSize = 10;
				node.value = node.symbolSize;
				node.category = node.attributes.modularity_class;
				// Use random x, y
				node.x = node.y = null;
				node.draggable = true;
			});
			option = {
				title: {
					text: 'Les Miserables',
					subtext: 'Default layout',
					top: 'bottom',
					left: 'right'
				},
				tooltip: {},
				legend: [{
					// selectedMode: 'single',
					data: categories.map(function (a) {
						return a.name;
					})
				}],
				animation: false,
				series : [
					{
						name: 'Les Miserables',
						type: 'graph',
						layout: 'force',
						data: graph.nodes,
						links: graph.links,
						categories: categories,
						roam: true,
						label: {
							normal: {
								position: 'right'
							}
						},
						force: {
							repulsion: 100
						}
					}
				]
			};`,0),


			echref('Calendar Graph')+
			sceg(`var graphData = [
				[
					// Consider timeoffset, add two days to avoid overflow.
					1485878400000 + 3600 * 24 * 1000 * 2,
					260
				],
				[
					1486137600000,
					200
				],
				[
					1486569600000,
					279
				],
				[
					1486915200000,
					847
				],
				[
					1487347200000,
					241
				],
				[
					1487779200000 + 3600 * 24 * 1000 * 15,
					411
				],
				[
					1488124800000 + 3600 * 24 * 1000 * 23,
					985
				]
			];
			
			var links = graphData.map(function (item, idx) {
				return {
					source: idx,
					target: idx + 1
				};
			});
			links.pop();
			
			function getVirtulData(year) {
				year = year || '2017';
				var date = +echarts.number.parseDate(year + '-01-01');
				var end = +echarts.number.parseDate((+year + 1) + '-01-01');
				var dayTime = 3600 * 24 * 1000;
				var data = [];
				for (var time = date; time < end; time += dayTime) {
					data.push([
						echarts.format.formatTime('yyyy-MM-dd', time),
						Math.floor(Math.random() * 1000)
					]);
				}
				return data;
			}
			
			
			option = {
				tooltip : {},
				calendar: {
					top: 'middle',
					left: 'center',
					orient: 'vertical',
					cellSize: 40,
					yearLabel: {
						margin: 50,
						textStyle: {
							fontSize: 30
						}
					},
					dayLabel: {
						firstDay: 1,
						nameMap: 'cn'
					},
					monthLabel: {
						nameMap: 'cn',
						margin: 15,
						textStyle: {
							fontSize: 20,
							color: '#999'
						}
					},
					range: ['2017-02', '2017-03-31']
				},
				visualMap: {
					min: 0,
					max: 1000,
					type: 'piecewise',
					left: 'center',
					bottom: 20,
					inRange: {
						color: ['#5291FF', '#C7DBFF']
					},
					seriesIndex: [1],
					orient: 'horizontal'
				},
				series: [{
					type: 'graph',
					edgeSymbol: ['none', 'arrow'],
					coordinateSystem: 'calendar',
					links: links,
					symbolSize: 15,
					calendarIndex: 0,
					itemStyle: {
						normal: {
							color: 'yellow',
							shadowBlue: 9,
							shadowOffsetX: 1.5,
							shadowOffsetY: 3,
							shadowColor: '#555'
						}
					},
					lineStyle: {
						normal: {
							color: '#D10E00',
							width: 1,
							opacity: 1
						}
					},
					data: graphData,
					z: 20
				}, {
					type: 'heatmap',
					coordinateSystem: 'calendar',
					data: getVirtulData(2017)
				}]
			}`,0),
		
			'笛卡尔坐标系上的关系图 '+echref('Graph Grid')+
			sceg(`var axisData = ['周一','周二','周三','很长很长的周四','周五','周六','周日'];
			var data = axisData.map(function (item, i) {
				return Math.round(Math.random() * 1000 * (i + 1));
			});
			var links = data.map(function (item, i) {
				return {
					source: i,
					target: i + 1
				};
			});
			links.pop();
			option = {
				title: {
					text: '笛卡尔坐标系上的 Graph'
				},
				tooltip: {},
				xAxis: {
					type : 'category',
					boundaryGap : false,
					data : axisData
				},
				yAxis: {
					type : 'value'
				},
				series: [
					{
						type: 'graph',
						layout: 'none',
						coordinateSystem: 'cartesian2d',
						symbolSize: 40,
						label: {
							normal: {
								show: true
							}
						},
						edgeSymbol: ['circle', 'arrow'],
						edgeSymbolSize: [4, 10],
						data: data,
						links: links,
						lineStyle: {
							normal: {
								color: '#2f4554'
							}
						}
					}
				]
			};`,0),
	
			echref('Graph Webkit Dep'),
			echref('Graph Force Dynamic'),
			echref('Graph NPM'),
			echref('Graph Life Expectancy'),
			echref('Graph Circular Layout'),
			echref('Graph'),

		].join(br)
	),

	
	
	
	detail('【树形图】tree',[
	
	'矩形树图'+
	sceg(`o={
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
		
		
		
	}`,0),
	
	
	'横向树图'+
	sceg(`o={
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

		}`,0),

		].join(br)
	),



	detail('【交互】',[

		echref('拖拽 Drag','','line-draggable')+
		sceg(`
		function updatePosition() {
			myChart.setOption({
				graphic: echarts.util.map(data, function (item, dataIndex) {
					return {
						position: myChart.convertToPixel('grid', item)
					};
				})
			});
		}
		
		function showTooltip(dataIndex) {
			myChart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: dataIndex
			});
		}
		
		function hideTooltip(dataIndex) {
			myChart.dispatchAction({
				type: 'hideTip'
			});
		}
		
		function onPointDragging(dataIndex, dx, dy) {
			data[dataIndex] = myChart.convertFromPixel('grid', this.position);
		
			// Update data
			myChart.setOption({
				series: [{
					id: 'a',
					data: data
				}]
			});
		}
		
		var symbolSize = 20;
		var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
		
		
			sTo(function () {
				// Add shadow circles (which is not visible) to enable drag.
				myChart.setOption({
					graphic: echarts.util.map(data, function (item, dataIndex) {
						return {
							type: 'circle',
							position: myChart.convertToPixel('grid', item),
							shape: {
								cx: 0,
								cy: 0,
								r: symbolSize / 2
							},
							invisible: true,
							draggable: true,
							ondrag: echarts.util.curry(onPointDragging, dataIndex),
							onmousemove: echarts.util.curry(showTooltip, dataIndex),
							onmouseout: echarts.util.curry(hideTooltip, dataIndex),
							z: 100
						};
					})
				});
		myChart.on('dataZoom', updatePosition);
			}, 0);
		
		
		
			window.addEventListener('resize', updatePosition);
		
		
		
		
		option = {
			title: {
				text: 'Try Dragging these Points'
			},
			tooltip: {
				triggerOn: 'none',
				formatter: function (params) {
					return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
				}
			},
			grid: {
			},
			xAxis: {
				min: -100,
				max: 80,
				type: 'value',
				axisLine: {onZero: false}
			},
			yAxis: {
				min: -30,
				max: 60,
				type: 'value',
				axisLine: {onZero: false}
			},
			dataZoom: [
				{
					type: 'slider',
					xAxisIndex: 0,
					filterMode: 'empty'
				},
				{
					type: 'slider',
					yAxisIndex: 0,
					filterMode: 'empty'
				},
				{
					type: 'inside',
					xAxisIndex: 0,
					filterMode: 'empty'
				},
				{
					type: 'inside',
					yAxisIndex: 0,
					filterMode: 'empty'
				}
			],
			series: [
				{
					id: 'a',
					type: 'line',
					smooth: true,
					symbolSize: symbolSize,
					data: data
				}
			]
		}`,0),


		echref('Custom Gantt Flight'),


		'缓动'+echref('Line Easing')+
		sceg(`var easingFuncs = {
			linear: function (k) {
				return k;
			},
			quadraticIn: function (k) {
				return k * k;
			},
			quadraticOut: function (k) {
				return k * (2 - k);
			},
			quadraticInOut: function (k) {
				if ((k *= 2) < 1) { return 0.5 * k * k; }
				return -0.5 * (--k * (k - 2) - 1);
			},
			cubicIn: function (k) {
				return k * k * k;
			},
			cubicOut: function (k) {
				return --k * k * k + 1;
			},
			cubicInOut: function (k) {
				if ((k *= 2) < 1) { return 0.5 * k * k * k; }
				return 0.5 * ((k -= 2) * k * k + 2);
			},
			quarticIn: function (k) {
				return k * k * k * k;
			},
			quarticOut: function (k) {
				return 1 - (--k * k * k * k);
			},
			quarticInOut: function (k) {
				if ((k *= 2) < 1) { return 0.5 * k * k * k * k; }
				return -0.5 * ((k -= 2) * k * k * k - 2);
			},
			quinticIn: function (k) {
				return k * k * k * k * k;
			},
			quinticOut: function (k) {
				return --k * k * k * k * k + 1;
			},
			quinticInOut: function (k) {
				if ((k *= 2) < 1) { return 0.5 * k * k * k * k * k; }
				return 0.5 * ((k -= 2) * k * k * k * k + 2);
			},
			sinusoidalIn: function (k) {
				return 1 - Math.cos(k * Math.PI / 2);
			},
			sinusoidalOut: function (k) {
				return Math.sin(k * Math.PI / 2);
			},
			sinusoidalInOut: function (k) {
				return 0.5 * (1 - Math.cos(Math.PI * k));
			},
			exponentialIn: function (k) {
				return k === 0 ? 0 : Math.pow(1024, k - 1);
			},
			exponentialOut: function (k) {
				return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
			},
			exponentialInOut: function (k) {
				if (k === 0) {
					return 0;
				}
				if (k === 1) {
					return 1;
				}
				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}
				return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
			},
			circularIn: function (k) {
				return 1 - Math.sqrt(1 - k * k);
			},
			circularOut: function (k) {
				return Math.sqrt(1 - (--k * k));
			},
			circularInOut: function (k) {
				if ((k *= 2) < 1) { return -0.5 * (Math.sqrt(1 - k * k) - 1); }
				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
			},
			elasticIn: function (k) {
				var s;
				var a = 0.1;
				var p = 0.4;
				if (k === 0) { return 0; }
				if (k === 1) { return 1; }
				if (!a || a < 1) { a = 1; s = p / 4; }
				else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
				return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
			},
			elasticOut: function (k) {
				var s;
				var a = 0.1;
				var p = 0.4;
				if (k === 0) { return 0; }
				if (k === 1) { return 1; }
				if (!a || a < 1) { a = 1; s = p / 4; }
				else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
				return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
			},
			elasticInOut: function (k) {
				var s;
				var a = 0.1;
				var p = 0.4;
				if (k === 0) { return 0; }
				if (k === 1) { return 1; }
				if (!a || a < 1) { a = 1; s = p / 4; }
				else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
				if ((k *= 2) < 1) {
					return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
				}
				return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
		
			},
		
			// 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
			backIn: function (k) {
				var s = 1.70158;
				return k * k * ((s + 1) * k - s);
			},
			backOut: function (k) {
				var s = 1.70158;
				return --k * k * ((s + 1) * k + s) + 1;
			},
			backInOut: function (k) {
				var s = 1.70158 * 1.525;
				if ((k *= 2) < 1) { return 0.5 * (k * k * ((s + 1) * k - s)); }
				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
			},
		
			// 创建弹跳效果
			bounceIn: function (k) {
				return 1 - easingFuncs.bounceOut(1 - k);
			},
			bounceOut: function (k) {
				if (k < (1 / 2.75)) { return 7.5625 * k * k; }
				else if (k < (2 / 2.75)) { return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75; }
				else if (k < (2.5 / 2.75)) { return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375; }
				else { return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375; }
			},
			bounceInOut: function (k) {
				if (k < 0.5) { return easingFuncs.bounceIn(k * 2) * 0.5; }
				return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
			}
		};
		
		var N_POINT = 30;
		
		var grids = [];
		var xAxes = [];
		var yAxes = [];
		var series = [];
		var titles = [];
		var count = 0;
		echarts.util.each(easingFuncs, function (easingFunc, name) {
			var data = [];
			for (var i = 0; i <= N_POINT; i++) {
				var x = i / N_POINT;
				var y = easingFunc(x);
				data.push([x, y]);
			}
			grids.push({
				show: true,
				borderWidth: 0,
				backgroundColor: '#fff',
				shadowColor: 'rgba(0, 0, 0, 0.3)',
				shadowBlur: 2
			});
			xAxes.push({
				type: 'value',
				show: false,
				min: 0,
				max: 1,
				gridIndex: count
			});
			yAxes.push({
				type: 'value',
				show: false,
				min: -0.4,
				max: 1.4,
				gridIndex: count
			});
			series.push({
				name: name,
				type: 'line',
				xAxisIndex: count,
				yAxisIndex: count,
				data: data,
				showSymbol: false,
				animationEasing: name,
				animationDuration: 1000
			});
			titles.push({
				textAlign: 'center',
				text: name,
				textStyle: {
					fontSize: 12,
					fontWeight: 'normal'
				}
			});
			count++;
		});
		
		var rowNumber = Math.ceil(Math.sqrt(count));
		echarts.util.each(grids, function (grid, idx) {
			grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
			grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + '%';
			grid.width = (1 / rowNumber * 100 - 1) + '%';
			grid.height = (1 / rowNumber * 100 - 1) + '%';
		
			titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
			titles[idx].top = parseFloat(grid.top) + '%';
		});
		
		option = {
			title: titles.concat([{
				text: 'Different Easing Functions',
				top: 'bottom',
				left: 'center'
			}]),
			grid: grids,
			xAxis: xAxes,
			yAxis: yAxes,
			series: series
		}`,0),




		echref('延迟动画','','bar-animation-delay')+
		sceg(`var xAxisData = [];
		var data1 = [];
		var data2 = [];
		for (var i = 0; i < 100; i++) {
			xAxisData.push('类目' + i);
			data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
			data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
		}
		
		option = {
			title: {
				text: '柱状图动画延迟'
			},
			legend: {
				data: ['bar', 'bar2'],
				align: 'left'
			},
			toolbox: {
				// y: 'bottom',
				feature: {
					magicType: {
						type: ['stack', 'tiled']
					},
					dataView: {},
					saveAsImage: {
						pixelRatio: 2
					}
				}
			},
			tooltip: {},
			xAxis: {
				data: xAxisData,
				silent: false,
				splitLine: {
					show: false
				}
			},
			yAxis: {
			},
			series: [{
				name: 'bar',
				type: 'bar',
				data: data1,
				animationDelay: function (idx) {
					return idx * 10;
				}
			}, {
				name: 'bar2',
				type: 'bar',
				data: data2,
				animationDelay: function (idx) {
					return idx * 10 + 100;
				}
			}],
			animationEasing: 'elasticOut',
			animationDelayUpdate: function (idx) {
				return idx * 5;
			}
		}`,0),







		echref('渐变','','line-gradient')+
		sceg(`data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245]];
		
		var dateList = data.map(function (item) {
			return item[0];
		});
		var valueList = data.map(function (item) {
			return item[1];
		});
		
		option = {
		
			// Make gradient line here
			visualMap: [{
				show: false,
				type: 'continuous',
				seriesIndex: 0,
				min: 0,
				max: 400
			}, {
				show: false,
				type: 'continuous',
				seriesIndex: 1,
				dimension: 0,
				min: 0,
				max: dateList.length - 1
			}],
		
		
			title: [{
				left: 'center',
				text: 'Gradient along the y axis'
			}, {
				top: '55%',
				left: 'center',
				text: 'Gradient along the x axis'
			}],
			tooltip: {
				trigger: 'axis'
			},
			xAxis: [{
				data: dateList
			}, {
				data: dateList,
				gridIndex: 1
			}],
			yAxis: [{
				splitLine: {show: false}
			}, {
				splitLine: {show: false},
				gridIndex: 1
			}],
			grid: [{
				bottom: '60%'
			}, {
				top: '60%'
			}],
			series: [{
				type: 'line',
				showSymbol: false,
				data: valueList
			}, {
				type: 'line',
				showSymbol: false,
				data: valueList,
				xAxisIndex: 1,
				yAxisIndex: 1
			}]
		}`,0),




		echref('渐变色 阴影 点击缩放','','bar-gradient')+
		sceg(`var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
		var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
		var yMax = 500;
		var dataShadow = [];
		
		for (var i = 0; i < data.length; i++) {
			dataShadow.push(yMax);
		}
		
		// Enable data zoom when user click bar.
		var zoomSize = 6;

		sTo(function(){
		myChart.on('click', function (params) {
			myChart.dispatchAction({
				type: 'dataZoom',
				startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
				endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
			});
		})},0);

		option = {
			title: {
				text: '特性示例：渐变色 阴影 点击缩放',
				subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
			},
			xAxis: {
				data: dataAxis,
				axisLabel: {
					inside: true,
					textStyle: {
						color: '#fff'
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				z: 10
			},
			yAxis: {
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#999'
					}
				}
			},
			dataZoom: [
				{
					type: 'inside'
				}
			],
			series: [
				{ // For shadow
					type: 'bar',
					itemStyle: {
						normal: {color: 'rgba(0,0,0,0.05)'}
					},
					barGap:'-100%',
					barCategoryGap:'40%',
					data: dataShadow,
					animation: false
				},
				{
					type: 'bar',
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: '#83bff6'},
									{offset: 0.5, color: '#188df0'},
									{offset: 1, color: '#188df0'}
								]
							)
						},
						emphasis: {
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: '#2378f7'},
									{offset: 0.7, color: '#2378f7'},
									{offset: 1, color: '#83bff6'}
								]
							)
						}
					},
					data: data
				}
			]
		}`,0),







		echref('Watermark')+
		sceg(`var builderJson = {
			"all": 10887,
			"charts": {
			  "map": 3237,
			  "lines": 2164,
			  "bar": 7561,
			  "line": 7778,
			  "pie": 7355,
			  "scatter": 2405,
			  "candlestick": 1842,
			  "radar": 2090,
			  "heatmap": 1762,
			  "treemap": 1593,
			  "graph": 2060,
			  "boxplot": 1537,
			  "parallel": 1908,
			  "gauge": 2107,
			  "funnel": 1692,
			  "sankey": 1568
			},
			"components": {
			  "geo": 2788,
			  "title": 9575,
			  "legend": 9400,
			  "tooltip": 9466,
			  "grid": 9266,
			  "markPoint": 3419,
			  "markLine": 2984,
			  "timeline": 2739,
			  "dataZoom": 2744,
			  "visualMap": 2466,
			  "toolbox": 3034,
			  "polar": 1945
			},
			"ie": 9743
		  };
		  
		  var downloadJson = {
			"echarts.min.js": 17365,
			"echarts.simple.min.js": 4079,
			"echarts.common.min.js": 6929,
			"echarts.js": 14890
		  };
		  
		  var themeJson = {
			"dark.js": 1594,
			"infographic.js": 925,
			"shine.js": 1608,
			"roma.js": 721,
			"macarons.js": 2179,
			"vintage.js": 1982
		  };
		  
		  var waterMarkText = 'ECHARTS';
		  
		  var canvas = document.createElement('canvas');
		  var ctx = canvas.getContext('2d');
		  canvas.width = canvas.height = 100;
		  ctx.textAlign = 'center';
		  ctx.textBaseline = 'middle';
		  ctx.globalAlpha = 0.08;
		  ctx.font = '20px Microsoft Yahei';
		  ctx.translate(50, 50);
		  ctx.rotate(-Math.PI / 4);
		  ctx.fillText(waterMarkText, 0, 0);
		  
		  option = {
			  backgroundColor: {
				  type: 'pattern',
				  image: canvas,
				  repeat: 'repeat'
			  },
			  tooltip: {},
			  title: [{
				  text: '在线构建',
				  subtext: '总计 ' + builderJson.all,
				  x: '25%',
				  textAlign: 'center'
			  }, {
				  text: '各版本下载',
				  subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
					  return all + downloadJson[key];
				  }, 0),
				  x: '75%',
				  textAlign: 'center'
			  }, {
				  text: '主题下载',
				  subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
					  return all + themeJson[key];
				  }, 0),
				  x: '75%',
				  y: '50%',
				  textAlign: 'center'
			  }],
			  grid: [{
				  top: 50,
				  width: '50%',
				  bottom: '45%',
				  left: 10,
				  containLabel: true
			  }, {
				  top: '55%',
				  width: '50%',
				  bottom: 0,
				  left: 10,
				  containLabel: true
			  }],
			  xAxis: [{
				  type: 'value',
				  max: builderJson.all,
				  splitLine: {
					  show: false
				  }
			  }, {
				  type: 'value',
				  max: builderJson.all,
				  gridIndex: 1,
				  splitLine: {
					  show: false
				  }
			  }],
			  yAxis: [{
				  type: 'category',
				  data: Object.keys(builderJson.charts),
				  axisLabel: {
					  interval: 0,
					  rotate: 30
				  },
				  splitLine: {
					  show: false
				  }
			  }, {
				  gridIndex: 1,
				  type: 'category',
				  data: Object.keys(builderJson.components),
				  axisLabel: {
					  interval: 0,
					  rotate: 30
				  },
				  splitLine: {
					  show: false
				  }
			  }],
			  series: [{
				  type: 'bar',
				  stack: 'chart',
				  z: 3,
				  label: {
					  normal: {
						  position: 'right',
						  show: true
					  }
				  },
				  data: Object.keys(builderJson.charts).map(function (key) {
					  return builderJson.charts[key];
				  })
			  }, {
				  type: 'bar',
				  stack: 'chart',
				  silent: true,
				  itemStyle: {
					  normal: {
						  color: '#eee'
					  }
				  },
				  data: Object.keys(builderJson.charts).map(function (key) {
					  return builderJson.all - builderJson.charts[key];
				  })
			  }, {
				  type: 'bar',
				  stack: 'component',
				  xAxisIndex: 1,
				  yAxisIndex: 1,
				  z: 3,
				  label: {
					  normal: {
						  position: 'right',
						  show: true
					  }
				  },
				  data: Object.keys(builderJson.components).map(function (key) {
					  return builderJson.components[key];
				  })
			  }, {
				  type: 'bar',
				  stack: 'component',
				  silent: true,
				  xAxisIndex: 1,
				  yAxisIndex: 1,
				  itemStyle: {
					  normal: {
						  color: '#eee'
					  }
				  },
				  data: Object.keys(builderJson.components).map(function (key) {
					  return builderJson.all - builderJson.components[key];
				  })
			  }, {
				  type: 'pie',
				  radius: [0, '30%'],
				  center: ['75%', '25%'],
				  data: Object.keys(downloadJson).map(function (key) {
					  return {
						  name: key.replace('.js', ''),
						  value: downloadJson[key]
					  }
				  })
			  }, {
				  type: 'pie',
				  radius: [0, '30%'],
				  center: ['75%', '75%'],
				  data: Object.keys(themeJson).map(function (key) {
					  return {
						  name: key.replace('.js', ''),
						  value: themeJson[key]
					  }
				  })
			  }]
		  }`,0),
	

		'标记符'+echref('Line Marker')+
		sceg(`option = {
			title: {
				text: '未来一周气温变化',
				subtext: '纯属虚构'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data:['最高气温','最低气温']
			},
			toolbox: {
				show: true,
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					dataView: {readOnly: false},
					magicType: {type: ['line', 'bar']},
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis:  {
				type: 'category',
				boundaryGap: false,
				data: ['周一','周二','周三','周四','周五','周六','周日']
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value} °C'
				}
			},
			series: [
				{
					name:'最高气温',
					type:'line',
					data:[11, 11, 15, 13, 12, 13, 10],
					markPoint: {
						data: [
							{type: 'max', name: '最大值'},
							{type: 'min', name: '最小值'}
						]
					},
					markLine: {
						data: [
							{type: 'average', name: '平均值'}
						]
					}
				},
				{
					name:'最低气温',
					type:'line',
					data:[1, -2, 2, 5, 3, 2, 0],
					markPoint: {
						data: [
							{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
						]
					},
					markLine: {
						data: [
							{type: 'average', name: '平均值'},
							[{
								symbol: 'none',
								x: '90%',
								yAxis: 'max'
							}, {
								symbol: 'circle',
								label: {
									normal: {
										position: 'start',
										formatter: '最大值'
									}
								},
								type: 'max',
								name: '最高点'
							}]
						]
					}
				}
			]
		}`,0),





		'增加点'+echref('Line Pen')+
		sceg(`var symbolSize = 20;
		var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
		var points = [];
		
		sTo(function(){
			var zr = myChart.getZr();
			
			
			zr.on('click', function (params) {
				var pointInPixel = [params.offsetX, params.offsetY];
				var pointInGrid = myChart.convertFromPixel('grid', pointInPixel);
			
				if (myChart.containPixel('grid', pointInPixel)) {
					data.push(pointInGrid);
			
					myChart.setOption({
						series: [{
							id: 'a',
							data: data
						}]
					});
				}
			});
			
			zr.on('mousemove', function (params) {
				var pointInPixel = [params.offsetX, params.offsetY];
				zr.setCursorStyle(myChart.containPixel('grid', pointInPixel) ? 'copy' : 'default');
			});
		},0);
		option = {
			title: {
				text: 'Click to Add Points'
			},
			tooltip: {
				formatter: function (params) {
					var data = params.data || [0, 0];
					return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				min: -60,
				max: 20,
				type: 'value',
				axisLine: {onZero: false}
			},
			yAxis: {
				min: 0,
				max: 40,
				type: 'value',
				axisLine: {onZero: false}
			},
			series: [
				{
					id: 'a',
					type: 'line',
					smooth: true,
					symbolSize: symbolSize,
					data: data
				}
			]
		}`,0),

		echref('自定义图片','','line-graphic')+
		sceg(`var rotation = 0;
		sTi(function () {
			myChart.setOption({
				graphic: {
					id: 'logo',
					rotation: (rotation += Math.PI / 360) % (Math.PI * 2)
				}
			});
		}, 30);
		option = {
			color: ['#8EC9EB'],
			legend: {
				data:['高度(km)与气温(°C)变化关系']
			},
			tooltip: {
				trigger: 'axis',
				formatter: "Temperature : <br/>{b}km : {c}°C"
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value',
				splitLine: {
					show: false
				},
				axisLabel: {
					formatter: '{value} °C'
				}
			},
			yAxis: {
				type: 'category',
				axisLine: {onZero: false},
				axisLabel: {
					formatter: '{value} km'
				},
				boundaryGap: true,
				data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
			},
			graphic: [
				{
					type: 'image',
					id: 'logo',
					right: 20,
					top: 20,
					z: -10,
					bounding: 'raw',
					origin: [75, 75],
					style: {
					   // image: 'http://.png',
						width: 150,
						height: 150,
						opacity: 0.4
					}
				},
				{
					type: 'group',
					rotation: Math.PI / 4,
					bounding: 'raw',
					right: 110,
					bottom: 110,
					z: 100,
					children: [
						{
							type: 'rect',
							left: 'center',
							top: 'center',
							z: 100,
							shape: {
								width: 400,
								height: 50
							},
							style: {
								fill: 'rgba(0,0,0,0.3)'
							}
						},
						{
							type: 'text',
							left: 'center',
							top: 'center',
							z: 100,
							style: {
								fill: '#fff',
								text: 'ECHARTS BAR CHART',
								font: 'bold 26px Microsoft YaHei'
							}
						}
					]
				},
				{
					type: 'group',
					left: '10%',
					top: 'center',
					children: [
						{
							type: 'rect',
							z: 100,
							left: 'center',
							top: 'middle',
							shape: {
								width: 190,
								height: 90
							},
							style: {
								fill: '#fff',
								stroke: '#555',
								lineWidth: 2,
								shadowBlur: 8,
								shadowOffsetX: 3,
								shadowOffsetY: 3,
								shadowColor: 'rgba(0,0,0,0.3)'
							}
						},
						{
							type: 'text',
							z: 100,
							left: 'center',
							top: 'middle',
							style: {
								fill: '#333',
								text: [
									'横轴表示温度，单位是°C',
									'纵轴表示高度，单位是km',
									'右上角有一个图片做的水印',
									'这个文本块可以放在图中各',
									'种位置'
								].join(brn),
								font: '14px Microsoft YaHei'
							}
						}
					]
				}
			],
			series: [
				{
					name: '高度(km)与气温(°C)变化关系',
					type: 'bar',
					smooth: true,
					barCategoryGap: 25,
					lineStyle: {
						normal: {
							width: 3,
							shadowColor: 'rgba(0,0,0,0.4)',
							shadowBlur: 10,
							shadowOffsetY: 10
						}
					},
					data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
				}
			]
		}`,0),





		'框选'+echref('Bar Brush')+
		sceg(`sTo(function(){
			myChart.on('brushSelected', renderBrushed);
			},0);
			
			function renderBrushed(params) {
				var brushed = [];
				var brushComponent = params.batch[0];
			
				for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
					var rawIndices = brushComponent.selected[sIdx].dataIndex;
					brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
				}
			
				myChart.setOption({
					title: {
						backgroundColor: '#333',
						text: 'SELECTED DATA INDICES: ' + brn + brushed.join(brn),
						bottom: 0,
						right: 0,
						width: 100,
						textStyle: {
							fontSize: 12,
							color: '#fff'
						}
					}
				});
			}
			
			var xAxisData = [];
			var data1 = [];
			var data2 = [];
			var data3 = [];
			var data4 = [];
			
			for (var i = 0; i < 10; i++) {
				xAxisData.push('Class' + i);
				data1.push((Math.random() * 2).toFixed(2));
				data2.push(-Math.random().toFixed(2));
				data3.push((Math.random() * 5).toFixed(2));
				data4.push((Math.random() + 0.3).toFixed(2));
			}
			
			var itemStyle = {
				normal: {
				},
				emphasis: {
					barBorderWidth: 1,
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowColor: 'rgba(0,0,0,0.5)'
				}
			};
			
			option = {
				backgroundColor: '#eee',
				legend: {
					data: ['bar', 'bar2', 'bar3', 'bar4'],
					align: 'left',
					left: 10
				},
				brush: {
					toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
					xAxisIndex: 0
				},
				toolbox: {
					feature: {
						magicType: {
							type: ['stack', 'tiled']
						},
						dataView: {}
					}
				},
				tooltip: {},
				xAxis: {
					data: xAxisData,
					name: 'X Axis',
					silent: false,
					axisLine: {onZero: true},
					splitLine: {show: false},
					splitArea: {show: false}
				},
				yAxis: {
					inverse: true,
					splitArea: {show: false}
				},
				grid: {
					left: 100
				},
				visualMap: {
					type: 'continuous',
					dimension: 1,
					text: ['High', 'Low'],
					inverse: true,
					itemHeight: 200,
					calculable: true,
					min: -2,
					max: 6,
					top: 60,
					left: 10,
					inRange: {
						colorLightness: [0.4, 0.8]
					},
					outOfRange: {
						color: '#bbb'
					},
					controller: {
						inRange: {
							color: '#2f4554'
						}
					}
				},
				series: [
					{
						name: 'bar',
						type: 'bar',
						stack: 'one',
						itemStyle: itemStyle,
						data: data1
					},
					{
						name: 'bar2',
						type: 'bar',
						stack: 'one',
						itemStyle: itemStyle,
						data: data2
					},
					{
						name: 'bar3',
						type: 'bar',
						stack: 'two',
						itemStyle: itemStyle,
						data: data3
					},
					{
						name: 'bar4',
						type: 'bar',
						stack: 'two',
						itemStyle: itemStyle,
						data: data4
					}
				]
			}`,0),




		echref('触屏tooltip data-zoom','','line-tooltip-touch')+
		sceg(`var base = +new Date(2016, 9, 3);
		var oneDay = 24 * 3600 * 1000;
		var valueBase = Math.random() * 300;
		var valueBase2 = Math.random() * 50;
		var data = [];
		var data2 = [];
		
		for (var i = 1; i < 10; i++) {
			var now = new Date(base += oneDay);
			var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
		
			valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
			valueBase <= 0 && (valueBase = Math.random() * 300);
			data.push([dayStr, valueBase]);
		
			valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
			valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
			data2.push([dayStr, valueBase2]);
		}
		
		option = {
			animation: false,
			title: {
				left: 'center',
				text: '触屏 tooltip 和 dataZoom 示例',
				subtext: '"tootip" and "dataZoom" on mobile device',
			},
			legend: {
				top: 'bottom',
				data:['意向']
			},
			tooltip: {
				triggerOn: 'none',
				position: function (pt) {
					return [pt[0], 130];
				}
			},
			toolbox: {
				left: 'center',
				itemSize: 25,
				top: 55,
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {}
				}
			},
			xAxis: {
				type: 'time',
				// boundaryGap: [0, 0],
				axisPointer: {
					value: '2016-10-7',
					snap: true,
					lineStyle: {
						color: '#004E52',
						opacity: 0.5,
						width: 2
					},
					label: {
						show: true,
						formatter: function (params) {
							return echarts.format.formatTime('yyyy-MM-dd', params.value);
						},
						backgroundColor: '#004E52'
					},
					handle: {
						show: true,
						color: '#004E52'
					}
				},
				splitLine: {
					show: false
				}
			},
			yAxis: {
				type: 'value',
				axisTick: {
					inside: true
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					inside: true,
					formatter: '{value}'+brn
				},
				z: 10
			},
			grid: {
				top: 110,
				left: 15,
				right: 15,
				height: 160
			},
			dataZoom: [{
				type: 'inside',
				throttle: 50
			}],
			series: [
				{
					name:'模拟数据',
					type:'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 5,
					sampling: 'average',
					itemStyle: {
						normal: {
							color: '#8ec6ad'
						}
					},
					stack: 'a',
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#8ec6ad'
							}, {
								offset: 1,
								color: '#ffe'
							}])
						}
					},
					data: data
				},
				{
					name:'模拟数据',
					type:'line',
					smooth:true,
					stack: 'a',
					symbol: 'circle',
					symbolSize: 5,
					sampling: 'average',
					itemStyle: {
						normal: {
							color: '#d68262'
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#d68262'
							}, {
								offset: 1,
								color: '#ffe'
							}])
						}
					},
					data: data2
				}
		
			]
		}`,0),




	].join(br)),



	detail('【3D 散点图】Scatter',[
		echref('with dataset',1,'scatter3D-dataset')+
		sceg(`o=
		{
			grid3D: {},
			xAxis3D: {
				type: 'category'
			},
			yAxis3D: {},
			zAxis3D: {},
			dataset: {
				dimensions: [
					'Income',
					'Life Expectancy',
					'Population',
					'Country',
					{name: 'Year', type: 'ordinal'}
				],
				source: ['Income,Life Expectancy,Population,Country,Year'.split(','),[815,34.05,351014,'Australia',1800],[1314,39,645526,'Canada',1800]]
			},
			series: [
				{
					type: 'scatter3D',
					symbolSize: 2.5,
					encode: {
						x: 'Country',
						y: 'Life Expectancy',
						z: 'Income',
						tooltip: [0, 1, 2, 3, 4]
					}
				}
			]
		
		}`,0),

		echref('Scatter 3D',1,'','dark')+
		sceg(`var indices = {
			name: 0,
			group: 1,
			id: 16
		};
		var schema = [
			{name: 'name', index: 0},
			{name: 'group', index: 1},
			{name: 'protein', index: 2},
			{name: 'calcium', index: 3},
			{name: 'sodium', index: 4},
			{name: 'fiber', index: 5},
			{name: 'vitaminc', index: 6},
			{name: 'potassium', index: 7},
			{name: 'carbohydrate', index: 8},
			{name: 'sugars', index: 9},
			{name: 'fat', index: 10},
			{name: 'water', index: 11},
			{name: 'calories', index: 12},
			{name: 'saturated', index: 13},
			{name: 'monounsat', index: 14},
			{name: 'polyunsat', index: 15},
			{name: 'id', index: 16}
		];
		
		var fieldIndices = schema.reduce(function (obj, item) {
			obj[item.name] = item.index;
			return obj;
		}, {});
		
		var groupCategories = [];
		var groupColors = [];
		var data;
		var fieldNames = schema.map(function (item) {
			return item.name;
		});
		fieldNames = fieldNames.slice(2, fieldNames.length - 2);
		
		function getMaxOnExtent(data) {
			var colorMax = -Infinity;
			var symbolSizeMax = -Infinity;
			for (var i = 0; i < data.length; i++) {
				var item = data[i];
				var colorVal = item[fieldIndices[config.color]];
				var symbolSizeVal = item[fieldIndices[config.symbolSize]];
				colorMax = Math.max(colorVal, colorMax);
				symbolSizeMax = Math.max(symbolSizeVal, symbolSizeMax);
			}
			return {
				color: colorMax,
				symbolSize: symbolSizeMax
			};
		}
		
		var config = {
			xAxis3D: 'protein',
			yAxis3D: 'fiber',
			zAxis3D: 'sodium',
			color: 'fiber',
			symbolSize: 'vitaminc',
		
			onChange: function () {
				var max = getMaxOnExtent(data);
				if (data) {
					myChart.setOption({
						visualMap: [{
							max: max.color / 2
						}, {
							max: max.symbolSize / 2
						}],
						xAxis3D: {
							name: config.xAxis3D
						},
						yAxis3D: {
							name: config.yAxis3D
						},
						zAxis3D: {
							name: config.zAxis3D
						},
						series: {
							dimensions: [
								config.xAxis3D,
								config.yAxis3D,
								config.yAxis3D,
								config.color,
								config.symbolSiz
							],
							data: data.map(function (item, idx) {
								return [
									item[fieldIndices[config.xAxis3D]],
									item[fieldIndices[config.yAxis3D]],
									item[fieldIndices[config.zAxis3D]],
									item[fieldIndices[config.color]],
									item[fieldIndices[config.symbolSize]],
									idx
								];
							})
						}
					});
				}
			}
		};

		data=[
			["Beverage, instant breakfast powder, chocolate, not reconstituted","Dairy and Egg Products",19.9,0.285,0.385,0.4,0.07690000000000001,0.947,66.2,65.8,1.4,7.4,357,0.56,0.314,0.278,27481  ],
			["Beverage, instant breakfast powder, chocolate, sugar-free, not reconstituted","Dairy and Egg Products",35.8,0.5,0.717,2,0.138,1.705,41,39,5.1,7.4,358,2.162,1.189,1.027,27482  ],
			["Beverage, milkshake mix, dry, not chocolate","Dairy and Egg Products",23.5,0.88,0.78,1.6,0.0012,2.2,52.9,51.3,2.6,12.8,329,2.059,0.332,0.06,27483 ]
		];
		var max = getMaxOnExtent(data);

		o={
			tooltip: {},
			visualMap: [{
				top: 10,
				calculable: true,
				dimension: 3,
				max: max.color / 2,
				inRange: {
					color: ['#1710c0', '#0b9df0', '#00fea8', '#00ff0d', '#f5f811', '#f09a09', '#fe0300']
				},
				textStyle: {
					color: '#fff'
				}
			}, {
				bottom: 10,
				calculable: true,
				dimension: 4,
				max: max.symbolSize / 2,
				inRange: {
					symbolSize: [10, 40]
				},
				textStyle: {
					color: '#fff'
				}
			}],
			xAxis3D: {
				name: config.xAxis3D,
				type: 'value'
			},
			yAxis3D: {
				name: config.yAxis3D,
				type: 'value'
			},
			zAxis3D: {
				name: config.zAxis3D,
				type: 'value'
			},
			grid3D: {
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				axisPointer: {
					lineStyle: {
						color: '#ffbd67'
					}
				},
				viewControl: {
					// autoRotate: true
					// projection: 'orthographic'
				}
			},
			series: [{
				type: 'scatter3D',
				dimensions: [
					config.xAxis3D,
					config.yAxis3D,
					config.yAxis3D,
					config.color,
					config.symbolSiz
				],
				data: data.map(function (item, idx) {
					return [
						item[fieldIndices[config.xAxis3D]],
						item[fieldIndices[config.yAxis3D]],
						item[fieldIndices[config.zAxis3D]],
						item[fieldIndices[config.color]],
						item[fieldIndices[config.symbolSize]],
						idx
					];
				}),
				symbolSize: 12,
				// symbol: 'triangle',
				itemStyle: {
					borderWidth: 1,
					borderColor: 'rgba(255,255,255,0.8)'
				},
				emphasis: {
					itemStyle: {
						color: '#fff'
					}
				}
			}]
		}`,0),


		echref('Globe Population',1,'scatter3d-globe-population'),
		echref('Simplex Noise',1,'scatter3d-simplex-noise','dark'),
		echref('正交投影',1,'scatter3d-orthographic','dark'),

		echref('with Scatter Matrix',1,'scatter3d-scatter')+
		sceg(`var data=[["Income", "Life Expectancy", "Population", "Country", "Year"],
		[815, 34.05, 351014, "Australia", 1800],
		[1314, 39, 645526, "Canada", 1800]];
		var sizeValue = '57%';
		var symbolSize = 2.5;
	
		option = {
			tooltip: {},
			grid3D: {
				width: '50%'
			},
			xAxis3D: {},
			yAxis3D: {},
			zAxis3D: {},
			grid: [
				{left: '50%', width: '20%', bottom: sizeValue},
				{left: '75%', width: '20%', bottom: sizeValue},
				{left: '50%', width: '20%',  top: sizeValue},
				{left: '75%', width: '20%', top: sizeValue}
			],
			xAxis: [
				{type: 'value', gridIndex: 0, name: 'Income', axisLabel: {rotate: 50, interval: 0}},
				{type: 'category', gridIndex: 1, name: 'Country', boundaryGap: false, axisLabel: {rotate: 50, interval: 0}},
				{type: 'value', gridIndex: 2, name: 'Income', axisLabel: {rotate: 50, interval: 0}},
				{type: 'value', gridIndex: 3, name: 'Life Expectancy', axisLabel: {rotate: 50, interval: 0}}
			],
			yAxis: [
				{type: 'value', gridIndex: 0, name: 'Life Expectancy'},
				{type: 'value', gridIndex: 1, name: 'Income'},
				{type: 'value', gridIndex: 2, name: 'Population'},
				{type: 'value', gridIndex: 3, name: 'Population'}
			],
			dataset: {
				dimensions: [
					'Income',
					'Life Expectancy',
					'Population',
					'Country',
					{name: 'Year', type: 'ordinal'}
				],
				source: data.slice(0,3)
			},
			series: [
				{
					type: 'scatter3D',
					symbolSize: 3,
					encode: {
						x: 'Population',
						y: 'Life Expectancy',
						z: 'Income',
						tooltip: [0, 1, 2, 3, 4]
					}
				},
	
				{
					type: 'scatter',
					symbolSize: symbolSize,
					xAxisIndex: 0,
					yAxisIndex: 0,
					encode: {
						x: 'Income',
						y: 'Life Expectancy',
						tooltip: [0, 1, 2, 3, 4]
					}
				},
				{
					type: 'scatter',
					symbolSize: symbolSize,
					xAxisIndex: 1,
					yAxisIndex: 1,
					encode: {
						x: 'Country',
						y: 'Income',
						tooltip: [0, 1, 2, 3, 4]
					}
				},
				{
					type: 'scatter',
					symbolSize: symbolSize,
					xAxisIndex: 2,
					yAxisIndex: 2,
					encode: {
						x: 'Income',
						y: 'Population',
						tooltip: [0, 1, 2, 3, 4]
					}
				},
				{
					type: 'scatter',
					symbolSize: symbolSize,
					xAxisIndex: 3,
					yAxisIndex: 3,
					encode: {
						x: 'Life Expectancy',
						y: 'Population',
						tooltip: [0, 1, 2, 3, 4]
					}
				}
			]
		};`,0)



	].join(br)),

	detail('【3D 折线图】Line',[
		echref('三维折线图正交投影',1,'line3d-orthographic')+
		sceg(`o=
		{
			backgroundColor: 'transparent',
			visualMap: {
				show: false,
				dimension: 2,
				min: 0,
				max: 30,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			xAxis3D: {
				type: 'value'
			},
			yAxis3D: {
				type: 'value'
			},
			zAxis3D: {
				type: 'value'
			},
			grid3D: {
				viewControl: {
					projection: 'orthographic'
				}
			},
			series: [{
			name:'123',
				type: 'line3D',
				data: (function(){var data = [];
				
				for (var t = 0; t < 25; t += 0.001) {
					var x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t);
					var y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t);
					var z = t + 2.0 * Math.sin(75 * t);
					data.push([x, y, z]);
				}
				return data
			})(),
				lineStyle: {
					width: 4
				}
			}]
		
		
		}`,0),
	].join(br)),

	detail('【3D 路径图】Lines',[
		echref('Line3D-Airline on Globe',1),
		echref('Line3D-Flights',1),
		echref('Line3D-Flights GL',1),
		echref('Line3D-Flights on Geo3D',1),

	].join(br)),

	detail('【3D 柱状图】Bar',[
		echref('Bar3D-Dataset',1)+
		sceg(`o=
		{
			grid3D: {},
			tooltip: {},
			xAxis3D: {
				type: 'category'
			},
			yAxis3D: {
				type: 'category'
			},
			zAxis3D: {},
			visualMap: {
				max: 1e8,
				dimension: 'Population'
			},
			dataset: {
				dimensions: [
					'Income',
					'Life Expectancy',
					'Population',
					'Country',
					{name: 'Year', type: 'ordinal'}
				],
				source: ['Income,Life Expectancy,Population,Country,Year'.split(','),[815,34.05,351014,'Australia',1800],[1314,39,645526,'Canada',1800]]
			},
			series: [
				{
					type: 'bar3D',
					// symbolSize: symbolSize,
					shading: 'lambert',
					encode: {
						x: 'Year',
						y: 'Country',
						z: 'Life Expectancy',
						tooltip: [0, 1, 2, 3, 4]
					}
				}
			]
		
		};`,0),

		echref('Bar3D-Punch Card',1)+
		sceg(`
		var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a'];
		var days = ['Saturday', 'Friday', 'Thursday','Wednesday'];
		var data = [[0,0,5],[0,1,1],[0,2,2],[0,3,2],[0,4,0]];
		o={
			tooltip: {},
			visualMap: {
				max: 20,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090']
				}
			},
			xAxis3D: {
				type: 'category',
				data: hours
			},
			yAxis3D: {
				type: 'category',
				data: days
			},
			zAxis3D: {
				type: 'value'
			},
			grid3D: {
				boxWidth: 200,
				boxDepth: 80,
				viewControl: {
					// projection: 'orthographic'
				},
				light: {
					main: {
						intensity: 1.2,
						shadow: true
					},
					ambient: {
						intensity: 0.3
					}
				}
			},
			series: [{
				type: 'bar3D',
				data: data.map(function (item) {
					return {
						value: [item[1], item[0], item[2]],
					}
				}),
				shading: 'lambert',
		
				label: {
					textStyle: {
						fontSize: 16,
						borderWidth: 1
					}
				},
		
				emphasis: {
					label: {
						textStyle: {
							fontSize: 20,
							color: '#900'
						}
					},
					itemStyle: {
						color: '#900'
					}
				}
			}]
		
		};`,0),


		echref('Bar3D-Global Population',1),
		echref('Bar3D-Music Visualization',1),
		echref('Bar3D-Myth',1),
		echref('Bar3D-Noise Modified from Marpi Demo',1),
		echref('Bar3D-Punch Card',1),
		echref('Bar3D-Simplex Noise',1,'','dark'),
		echref('Bar3D-Voxelize Image',1),
		echref('Global Population Bar3D on Globe',1),
		echref('Image to Bar3D',1),
		echref('Metal Bar3D',1),
		echref('Stacked Bar3D',1),
		echref('Transparent Bar3D',1),

	].join(br)),

	detail('【3D 曲面图】Surface',[
		echref('Simple Surface',1)+
		sceg(`var o=
		{
			tooltip: {},
			backgroundColor: 'transparent',
			visualMap: {
				show: false,
				dimension: 2,
				min: -1,
				max: 1,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			xAxis3D: {
				type: 'value'
			},
			yAxis3D: {
				type: 'value'
			},
			zAxis3D: {
				type: 'value'
			},
			grid3D: {
				viewControl: {
					// projection: 'orthographic'
				}
			},
			series: [{
				type: 'surface',
				wireframe: {
					// show: false
				},
				equation: {
					x: {
						step: 0.05
					},
					y: {
						step: 0.05
					},
					z: function (x, y) {
						if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
							return '-';
						}
						return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
					}
				}
			}]
		
		};o`,0),

		echref('Sphere Parametric Surface',1)+
		sceg(`var o=
		{
			tooltip: {},
			visualMap: {
				show: false,
				dimension: 2,
				min: -1,
				max: 1,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			xAxis3D: {},
			yAxis3D: {},
			zAxis3D: {},
			grid3D: {},
			series: [{
				type: 'surface',
				parametric: true,
				// shading: 'albedo',
				parametricEquation: {
					u: {
						min: -Math.PI,
						max: Math.PI,
						step: Math.PI / 20
					},
					v: {
						min: 0,
						max: Math.PI,
						step: Math.PI / 20
					},
					x: function (u, v) {
						return Math.sin(v) * Math.sin(u);
					},
					y: function (u, v) {
						return Math.sin(v) * Math.cos(u);
					},
					z: function (u, v) {
						return Math.cos(v);
					}
				}
			}]
		};o`,0),

		echref('Surface Wave',1)+
		sceg(`var o=
		{
			tooltip: {},
			backgroundColor: '#fff',
			visualMap: {
				show: false,
				dimension: 2,
				min: -1,
				max: 1,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			xAxis3D: {
				type: 'value'
			},
			yAxis3D: {
				type: 'value'
			},
			zAxis3D: {
				type: 'value',
				max: 1,
				splitNumber: 2
			},
			grid3D: {
				viewControl: {
					// projection: 'orthographic'
				},
				boxHeight: 40
			},
			series: [{
				type: 'surface',
				wireframe: {
					show: false
				},
				shading: 'color',
				equation: {
					x: {
						step: 0.05,
						min: -3,
						max: 3,
					},
					y: {
						step: 0.05,
						min: -3,
						max: 3,
					},
					z: function (x, y) {
						return Math.sin(x * x + y * y) * x / 3.14
					}
				}
			}]
		};o`,0),

		echref('Surface Breather',1)+
		sceg(`
		var sin = Math.sin;
		var cos = Math.cos;
		var pow = Math.pow;
		var sqrt = Math.sqrt;
		var cosh = Math.cosh;
		var sinh = Math.sinh;
		var PI = Math.PI;
		
		var aa = 0.4;
		var r = 1 - aa * aa;
		var w = sqrt(r);
		
		option = {
			toolbox: {
				left: 20,
				iconStyle: {
					normal: {
						borderColor: '#000'
					}
				},
				feature: {
					myExportObj: {
						title: 'Export OBJ',
						icon: 'M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0',
						onclick: function () {
							var res = echarts.exportGL2PLY(myChart, {
								mainType: 'grid3D',
								index: 0
							});
							download(res, 'surface.ply', 'text/plain');
						}
					}
				}
			},
			tooltip: {},
			visualMap: {
				show: false,
				dimension: 2,
				min: -3,
				max: 3,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			xAxis3D: {},
			yAxis3D: {},
			zAxis3D: {},
			grid3D: {
				show: true,
				postEffect: {
					enable: true,
					SSAO: {
						enable: true,
						radius: 4
					}
				},
				viewControl: {
					distance: 130,
					beta: 50
				},
				light: {
					main: {
						intensity: 2,
						shadow: true
					},
					ambient: {
						intensity: 0
					},
					ambientCubemap: {
					 //   texture: ROOT_PATH + 'data-gl/asset/canyon.hdr',
						exposure: 2,
						diffuseIntensity: 0.2,
						specularIntensity: 1
					}
				}
			},
			series: [{
				type: 'surface',
				parametric: true,
				wireframe: {
					show: false
				},
				shading: 'realistic',
				realisticMaterial: {
					roughness: 0.3,
					metalness: 0
				},
				parametricEquation: {
					u: {
						min: -13.2,
						max: 13.2,
						step: 0.2
					},
					v: {
						min: -37.4,
						max: 37.4,
						step: 0.2
					},
					x: function (u, v) {
						var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
						return -u + (2 * r * cosh(aa * u) * sinh(aa * u) / denom);
					},
					y: function (u, v) {
						var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
						return 2 * w * cosh(aa * u) * (-(w * cos(v) * cos(w * v)) - (sin(v) * sin(w * v))) / denom;
					},
					z: function (u, v) {
						var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
						return  2 * w * cosh(aa * u) * (-(w * sin(v) * cos(w * v)) + (cos(v) * sin(w * v))) / denom
					}
				}
			}]
		};`,0),


		echref('Surface Mollusc Shell',1)+
		sceg(`o={
			tooltip: {},
			visualMap: {
				show: false,
				dimension: 2,
				min: -5,
				max: 0,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			xAxis3D: {},
			yAxis3D: {},
			zAxis3D: {},
			grid3D: {
				show: true,
				postEffect: {
					enable: true
				},
				temporalSuperSampling: {
					enable: true
				},
				light: {
					main: {
						intensity: 3,
						shadow: true
					},
					ambient: {
						intensity: 0
					},
					ambientCubemap: {
					   // texture: ROOT_PATH + 'data-gl/asset/canyon.hdr',
						exposure: 2,
						diffuseIntensity: 1,
						specularIntensity: 1
					}
				}
			},
			series: [{
				type: 'surface',
				parametric: true,
				wireframe: {
					show: false
				},
				shading: 'realistic',
				realisticMaterial: {
					roughness: 0.4,
					metalness: 0
				},
				parametricEquation: {
					u: {
						min: -Math.PI,
						max: Math.PI,
						step: Math.PI / 40
					},
					v: {
						min: -15,
						max: 6,
						step: 0.21
					},
					x: function (u, v) {
						return Math.pow(1.16, v) * Math.cos(v) * (1 + Math.cos(u));
					},
					y: function (u, v) {
						return -Math.pow(1.16, v) * Math.sin(v) * (1 + Math.cos(u));
					},
					z: function (u, v) {
						return -2 * Math.pow(1.16, v) * (1 + Math.sin(u));
					}
				}
			}]
		};`,0),


		echref('Surface Theme Roses',1)+
		sceg(`
		var sin = Math.sin;
		var cos = Math.cos;
		var pow = Math.pow;
		var sqrt = Math.sqrt;
		var cosh = Math.cosh;
		var sinh = Math.sinh;
		var exp = Math.exp;
		var PI = Math.PI;
		var square = function (x) {
			return x*x;
		}
		var mod2 = function (a, b) {
			var c = a % b;
			return c > 0 ? c : (c + b);
		}
		
		var theta1 = -(20/9) * PI;
		var theta2 = 15 * PI;
		function getParametricEquation(dx, dy) {
			return {
				u: {
					min: 0,
					max: 1,
					step: 1 / 24
				},
				v: {
					min: theta1,
					max: theta2,
					step: (theta2 - theta1) / 575
				},
				x: function (x1, theta) {
					var phi = (PI/2)*exp(-theta/(8*PI));
					var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
					var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
					var r = X*(x1*sin(phi)+y1*cos(phi));
					return r * sin(theta) + dx;
				},
				y: function (x1, theta) {
					var phi = (PI/2)*exp(-theta/(8*PI));
					var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
					var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
					var r = X*(x1*sin(phi)+y1*cos(phi));
					return r * cos(theta) + dy;
				},
				z: function (x1, theta) {
					var phi = (PI/2)*exp(-theta/(8*PI));
					var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
					var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
					var r = X*(x1*sin(phi)+y1*cos(phi));
					return X*(x1*cos(phi)-y1*sin(phi));
				}
			};
		}
		
		function createSeries(dx, dy, color) {
			return {
				type: 'surface',
				parametric: true,
				shading: 'realistic',
				silent: true,
				wireframe: {
					show: false
				},
				realisticMaterial: {
					roughness: 0.7,
					metalness: 0,
					textureTiling: [200, 20]
				},
				parametricEquation: getParametricEquation(dx, dy)
			};
		}
		
		option = {
			toolbox: {
				feature: {
					saveAsImage: {
						backgroundColor: '#111'
					}
				},
				iconStyle: {
					normal: {
						borderColor: '#fff'
					}
				},
				left: 0
			},
			xAxis3D: {
				type: 'value'
			},
			yAxis3D: {
				type: 'value'
			},
			zAxis3D: {
				type: 'value'
			},
			grid3D: {
		
				show: false,
				boxWidth: 200,
				boxDepth: 200,
		
				axisPointer: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				postEffect: {
					enable: true,
					SSAO: {
						enable: true,
						radius: 10,
						intensity: 1
					}
				},
				temporalSuperSampling: {
					enable: true
				},
				light: {
					main: {
						intensity: 1,
						shadow: true,
					},
					ambient: {
						intensity: 0
					},
					ambientCubemap: {
						//texture: ROOT_PATH + 'data-gl/asset/pisa.hdr',
						exposure: 1,
						diffuseIntensity: 1,
						specularIntensity: 1
					}
				},
				viewControl: {
					// projection: 'orthographic'
				}
			},
			series: [
				createSeries(1.5, 1.5),
				createSeries(-1.5, -1.5),
				createSeries(-1.5, 1.5),
				createSeries(1.5, -1.5),
				createSeries(0, 0),
			]
		};`,0),


		echref('Metal Surface',1),
		echref('Parametric Surface Rose',1),
		echref('Surface Golden Rose',1),
		echref('Surface Leather',1),
		echref('Image Surface Sushuang',1),

		].join(br)),


	detail('【3D 地图】Map',[
		echref('Map3D-Buildings',1),
		echref('Map3D-Wood City',1),

	].join(br)),



	detail('【3D 地球】Globe',[
		echref('Animating Contour on Globe',1),
		echref('Globe-Contour Paint',1),
		echref('Globe-Displacement',1),
		echref('Globe-echarts gl hello world',1),
		echref('Globe-layers',1),
		echref('Globe-Moon',1),
		echref('Iron Globe',1),

	].join(br)),



	detail('【GL 关系图】Graph',[
		echref('GraphGL-GPU Layout',1,'','dark')+
		sceg(`function createNodes(widthCount, heightCount) {
			var nodes = [];
			for (var i = 0; i < widthCount; i++) {
				for (var j = 0; j < heightCount; j++) {
					nodes.push({
						x: Math.random() * window.innerWidth,
						y: Math.random() * window.innerHeight,
						value: 1
					});
				}
			}
			return nodes;
		}
		
		function createEdges(widthCount, heightCount) {
			var edges = [];
			for (var i = 0; i < widthCount; i++) {
				for (var j = 0; j < heightCount; j++) {
					if (i < widthCount - 1) {
						edges.push({
							source: i + j * widthCount,
							target: i + 1 + j * widthCount,
							value: 1
						});
					}
					if (j < heightCount - 1) {
						edges.push({
							source: i + j * widthCount,
							target: i + (j + 1) * widthCount,
							value: 1
						});
					}
				}
			}
			return edges;
		}
		
		var nodes = createNodes(50, 50);
		var edges = createEdges(40, 40);
		
		o=
		{
			series: [{
				type: 'graphGL',
				nodes: nodes,
				edges: edges,
				itemStyle: {
					color: 'rgba(255,255,255,0.8)'
				},
				lineStyle: {
					color: 'rgba(255,255,255,0.8)',
					width: 3
				},
				forceAtlas2: {
					steps: 5,
					jitterTolerence: 10,
					edgeWeightInfluence: 4
				}
			}]
		
		
		};`,0),

		echref('GraphGL-Large Internet',1,'','dark'),
		echref('GraphGL-NPM Dep',1,'','dark')

	].join(br)),



	detail('【GL 矢量场图】Flow',[
		echref('二维矢量场',1,'flowGL-noise','dark'),
		
		echref('Global Wind Visualization',1),
		echref('Global Wind Visualization 2',1),

	].join(br)),

	detail('【GL 散点图】Scatter',[
		echref('GPS',1,'scatterGL-gps'),

	].join(br)),

	detail('【GL 路径图】Lines',[
		echref('New York',1,'linesGL-ny'),

	].join(br)),

].join('');

