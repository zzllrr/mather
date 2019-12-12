/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

var echref=function(text,gl,u,theme){return href(Hs+'www.echartsjs.com/examples/zh/editor.html?c='+(u||text.toLowerCase().replace(/ /g, '-'))+(gl?'&gl=1':'')+(theme?'&theme='+theme:''),text)};
tooltip.graphic=tooltip.graphic || {};
tooltip.graphic['Statistics/Echarts']=[detail(href(Hs+'www.echartsjs.com/examples/index.html','百度ECharts官网'),[
	'暂不支持LaTeX',
	'JS代码片段用$美元符号$括起来'+sceg2('$1+2$'),
	'回归分析'+github('ecomfe/echarts-stat'),

	'暂无收录的图形案例'+ul(Arrf(function(x){return href(Hs+'www.echartsjs.com/examples/index.html#chart-type-'+x.replace(/ [a-z]$/i,''),x.replace(/.+ /,'').toLowerCase())},
	[
		'地理坐标/地图 GEO / Map',
		'K 线图 Candlestick',
		'盒须图 Boxplot',
		'路径图 Lines',



	]))
].join(br)),
	

	detail('【折线图】Line',[
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


	echref('Area Simple')+
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



	'平行坐标系'+echref('Parallel Simple')+
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

	echref('Parallel Nutrients'),

	echref('Parallel AQI')+
	sceg(`// Schema:
	// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
	var dataBJ = [
		[1,55,9,56,0.46,18,6,"良"],
		[2,25,11,21,0.65,34,9,"优"],
		[3,56,7,63,0.3,14,5,"良"],
	];
	
	var dataGZ = [
		[1,26,37,27,1.163,27,13,"优"],
		[2,85,62,71,1.195,60,8,"良"],
		[3,78,38,74,1.363,37,7,"良"],
	];
	
	var dataSH = [
		[1,91,45,125,0.82,34,23,"良"],
		[2,65,27,78,0.86,45,29,"良"],
		[3,83,60,84,1.09,73,27,"良"],
	];
	
	var schema = [
		{name: 'date', index: 0, text: '日期'},
		{name: 'AQIindex', index: 1, text: 'AQI'},
		{name: 'PM25', index: 2, text: 'PM2.5'},
		{name: 'PM10', index: 3, text: 'PM10'},
		{name: 'CO', index: 4, text: ' CO'},
		{name: 'NO2', index: 5, text: 'NO2'},
		{name: 'SO2', index: 6, text: 'SO2'},
		{name: '等级', index: 7, text: '等级'}
	];
	
	var lineStyle = {
		normal: {
			width: 1,
			opacity: 0.5
		}
	};
	
	option = {
		backgroundColor: '#333',
		legend: {
			bottom: 30,
			data: ['北京', '上海', '广州'],
			itemGap: 20,
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		tooltip: {
			padding: 10,
			backgroundColor: '#222',
			borderColor: '#777',
			borderWidth: 1,
			formatter: function (obj) {
				var value = obj[0].value;
				return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
					+ obj[0].seriesName + ' ' + value[0] + '日期：'
					+ value[7]
					+ '</div>'
					+ schema[1].text + '：' + value[1] + '<br>'
					+ schema[2].text + '：' + value[2] + '<br>'
					+ schema[3].text + '：' + value[3] + '<br>'
					+ schema[4].text + '：' + value[4] + '<br>'
					+ schema[5].text + '：' + value[5] + '<br>'
					+ schema[6].text + '：' + value[6] + '<br>';
			}
		},
		// dataZoom: {
		//     show: true,
		//     orient: 'vertical',
		//     parallelAxisIndex: [0]
		// },
		parallelAxis: [
			{dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start'},
			{dim: 1, name: schema[1].text},
			{dim: 2, name: schema[2].text},
			{dim: 3, name: schema[3].text},
			{dim: 4, name: schema[4].text},
			{dim: 5, name: schema[5].text},
			{dim: 6, name: schema[6].text},
			{dim: 7, name: schema[7].text,
			type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']}
		],
		visualMap: {
			show: true,
			min: 0,
			max: 150,
			dimension: 2,
			inRange: {
				color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
				// colorAlpha: [0, 1]
			}
		},
		parallel: {
			left: '5%',
			right: '18%',
			bottom: 100,
			parallelAxisDefault: {
				type: 'value',
				name: 'AQI指数',
				nameLocation: 'end',
				nameGap: 20,
				nameTextStyle: {
					color: '#fff',
					fontSize: 12
				},
				axisLine: {
					lineStyle: {
						color: '#aaa'
					}
				},
				axisTick: {
					lineStyle: {
						color: '#777'
					}
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				}
			}
		},
		series: [
			{
				name: '北京',
				type: 'parallel',
				lineStyle: lineStyle,
				data: dataBJ
			},
			{
				name: '上海',
				type: 'parallel',
				lineStyle: lineStyle,
				data: dataSH
			},
			{
				name: '广州',
				type: 'parallel',
				lineStyle: lineStyle,
				data: dataGZ
			}
		]
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


	detail('【极坐标图】Polar',[
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
		
		
	echref('Custom Polar Heatmap')+
	sceg(`function renderItem(params, api) {
		var values = [api.value(0), api.value(1)];
		var coord = api.coord(values);
		var size = api.size([1, 1], values);
		return {
			type: 'sector',
			shape: {
				cx: params.coordSys.cx,
				cy: params.coordSys.cy,
				r0: coord[2] - size[0] / 2,
				r: coord[2] + size[0] / 2,
				startAngle: -(coord[3] + size[1] / 2),
				endAngle: -(coord[3] - size[1] / 2)
			},
			style: api.style({
				fill: api.visual('color')
			})
		};
	}
	
	var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
			'7a', '8a', '9a','10a','11a',
			'12p', '1p', '2p', '3p', '4p', '5p',
			'6p', '7p', '8p', '9p', '10p', '11p'];
	var days = ['Saturday', 'Friday', 'Thursday',
			'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
	
	var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
	var maxValue = echarts.util.reduce(data, function (max, item) {
		return Math.max(max, item[2]);
	}, -Infinity);
	
	option = {
		legend: {
			data: ['Punch Card']
		},
		polar: {},
		tooltip: {
		},
		visualMap: {
			type: 'continuous',
			min: 0,
			max: maxValue,
			top: 'middle',
			dimension: 2,
			calculable: true
		},
		angleAxis: {
			type: 'category',
			data: hours,
			boundaryGap: false,
			splitLine: {
				show: true,
				lineStyle: {
					color: '#ddd',
					type: 'dashed'
				}
			},
			axisLine: {
				show: false
			}
		},
		radiusAxis: {
			type: 'category',
			data: days,
			z: 100
		},
		series: [{
			name: 'Punch Card',
			type: 'custom',
			coordinateSystem: 'polar',
			itemStyle: {
				normal: {
					color: '#d14a61'
				}
			},
			renderItem: renderItem,
			data: data
		}]
	}`,0),
	













	].join(br)
	),


	detail('【柱状图】Bar',[

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






	echref('Custom Bar Trend')+
	sceg(`var yearCount = 7;
	var categoryCount = 30;
	
	var xAxisData = [];
	var customData = [];
	var legendData = [];
	var dataList = [];
	
	legendData.push('trend');
	var encodeY = [];
	for (var i = 0; i < yearCount; i++) {
		legendData.push((2010 + i) + '');
		dataList.push([]);
		encodeY.push(1 + i);
	}
	
	for (var i = 0; i < categoryCount; i++) {
		var val = Math.random() * 1000;
		xAxisData.push('category' + i);
		var customVal = [i];
		customData.push(customVal);
	
		var data = dataList[0];
		for (var j = 0; j < dataList.length; j++) {
			var value = j === 0
				? echarts.number.round(val, 2)
				: echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2);
			dataList[j].push(value);
			customVal.push(value);
		}
	}
	
	function renderItem(params, api) {
		var xValue = api.value(0);
		var currentSeriesIndices = api.currentSeriesIndices();
		var barLayout = api.barLayout({
			barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
		});
	
		var points = [];
		for (var i = 0; i < currentSeriesIndices.length; i++) {
			var seriesIndex = currentSeriesIndices[i];
			if (seriesIndex !== params.seriesIndex) {
				var point = api.coord([xValue, api.value(seriesIndex)]);
				point[0] += barLayout[i - 1].offsetCenter;
				point[1] -= 20;
				points.push(point);
			}
		}
		var style = api.style({
			stroke: api.visual('color'),
			fill: null
		});
	
		return {
			type: 'polyline',
			shape: {
				points: points
			},
			style: style
		};
	}
	
	option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: legendData
		},
		dataZoom: [{
			type: 'slider',
			start: 50,
			end: 70
		}, {
			type: 'inside',
			start: 50,
			end: 70
		}],
		xAxis: {
			data: xAxisData
		},
		yAxis: {},
		series: [{
			type: 'custom',
			name: 'trend',
			renderItem: renderItem,
			itemStyle: {
				normal: {
					borderWidth: 2
				}
			},
			encode: {
				x: 0,
				y: encodeY
			},
			data: customData,
			z: 100
		}].concat(echarts.util.map(dataList, function (data, index) {
			return {
				type: 'bar',
				animation: false,
				name: legendData[index + 1],
				itemStyle: {
					normal: {
						opacity: 0.5
					}
				},
				data: data
			};
		}))
	}`,0),





	echref('Custom Error Bar')+
	sceg(`var categoryData = [];
	var errorData = [];
	var barData = [];
	var dataCount = 100;
	for (var i = 0; i < dataCount; i++) {
		var val = Math.random() * 1000;
		categoryData.push('category' + i);
		errorData.push([
			i,
			echarts.number.round(Math.max(0, val - Math.random() * 100)),
			echarts.number.round(val + Math.random() * 80)
		]);
		barData.push(echarts.number.round(val, 2));
	}
	
	function renderItem(params, api) {
		var xValue = api.value(0);
		var highPoint = api.coord([xValue, api.value(1)]);
		var lowPoint = api.coord([xValue, api.value(2)]);
		var halfWidth = api.size([1, 0])[0] * 0.1;
		var style = api.style({
			stroke: api.visual('color'),
			fill: null
		});
	
		return {
			type: 'group',
			children: [{
				type: 'line',
				shape: {
					x1: highPoint[0] - halfWidth, y1: highPoint[1],
					x2: highPoint[0] + halfWidth, y2: highPoint[1]
				},
				style: style
			}, {
				type: 'line',
				shape: {
					x1: highPoint[0], y1: highPoint[1],
					x2: lowPoint[0], y2: lowPoint[1]
				},
				style: style
			}, {
				type: 'line',
				shape: {
					x1: lowPoint[0] - halfWidth, y1: lowPoint[1],
					x2: lowPoint[0] + halfWidth, y2: lowPoint[1]
				},
				style: style
			}]
		};
	}
	
	option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		title: {
			text: 'Error bar chart'
		},
		legend: {
			data: ['bar', 'error']
		},
		dataZoom: [{
			type: 'slider',
			start: 50,
			end: 70
		}, {
			type: 'inside',
			start: 50,
			end: 70
		}],
		xAxis: {
			data: categoryData
		},
		yAxis: {},
		series: [{
			type: 'bar',
			name: 'bar',
			data: barData,
			itemStyle: {
				normal: {
					color: '#77bef7'
				}
			}
		}, {
			type: 'custom',
			name: 'error',
			itemStyle: {
				normal: {
					borderWidth: 1.5
				}
			},
			renderItem: renderItem,
			encode: {
				x: 0,
				y: [1, 2]
			},
			data: errorData,
			z: 100
		}]
	}`,0),



	echref('Custom Profit')+
	sceg(`var data = [[10, 16, 3, 'A'], [16, 18, 15, 'B'], [18, 26, 12, 'C'], [26, 32, 22, 'D'], [32, 56, 7, 'E'], [56, 62, 17, 'F']];
	var colorList = ['#4f81bd', '#c0504d', '#9bbb59', '#604a7b', '#948a54', '#e46c0b'];
	
	data = echarts.util.map(data, function (item, index) {
		return {
			value: item,
			itemStyle: {
				normal: {
					color: colorList[index]
				}
			}
		};
	});
	
	function renderItem(params, api) {
		var yValue = api.value(2);
		var start = api.coord([api.value(0), yValue]);
		var size = api.size([api.value(1) - api.value(0), yValue]);
		var style = api.style();
	
		return {
			type: 'rect',
			shape: {
				x: start[0],
				y: start[1],
				width: size[0],
				height: size[1]
			},
			style: style
		};
	}
	
	option = {
		title: {
			text: 'Profit',
			left: 'center'
		},
		tooltip: {
		},
		xAxis: {
			scale: true
		},
		yAxis: {
		},
		series: [{
			type: 'custom',
			renderItem: renderItem,
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			dimensions: ['from', 'to', 'profit'],
			encode: {
				x: [0, 1],
				y: 2,
				tooltip: [0, 1, 2],
				itemName: 3
			},
			data: data
		}]
	}`,0),

	echref('Bar Histogram')+
	sceg(`var girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6];
	var bins = ecStat.histogram(girth);
	
	var interval;
	var min = Infinity;
	var max = -Infinity;
	
	data = echarts.util.map(bins.data, function (item, index) {
		var x0 = bins.bins[index].x0;
		var x1 = bins.bins[index].x1;
		interval = x1 - x0;
		min = Math.min(min, x0);
		max = Math.max(max, x1);
		return [x0, x1, item[1]];
	});
	
	function renderItem(params, api) {
		var yValue = api.value(2);
		var start = api.coord([api.value(0), yValue]);
		var size = api.size([api.value(1) - api.value(0), yValue]);
		var style = api.style();
	
		return {
			type: 'rect',
			shape: {
				x: start[0] + 1,
				y: start[1],
				width: size[0] - 2,
				height: size[1]
			},
			style: style
		};
	}
	
	option = {
		title: {
			text: 'Girths of Black Cherry Trees',
			subtext: 'By ecStat.histogram',
			sublink: '',
			left: 'center',
			top: 10
		},
		color: ['rgb(25, 183, 207)'],
		grid: {
			top: 80,
			containLabel: true
		},
		xAxis: [{
			type: 'value',
			min: min,
			max: max,
			interval: interval
		}],
		yAxis: [{
			type: 'value',
		}],
		series: [{
			name: 'height',
			type: 'custom',
			renderItem: renderItem,
			label: {
				normal: {
					show: true,
					position: 'insideTop'
				}
			},
			encode: {
				x: [0, 1],
				y: 2,
				tooltip: 2,
				label: 2
			},
			data: data
		}]
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






		
	echref('Custom Profile')+
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


	detail('【饼图】Pie',[
		
	'半径一致'+echref('Pie Simple')+
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
		
	'半径不一致'+echref('Pie-Custom')+
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
		
		
	echref('南丁格尔玫瑰图','','pie-roseType')+
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

	'多个饼图'+echref('Dataset-Default')+
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

	'Doughnut环形图'+echref('Pie-Doughnut')+
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



	'嵌套环形图'+echref('Pie-Nest')+
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



	'可滚动图例'+echref('Pie-Legend')+
	sceg(`function genData(count) {
		var nameList = [
			'赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
		];
		var legendData = [];
		var seriesData = [];
		var selected = {};
		for (var i = 0; i < 50; i++) {
			name = Math.random() > 0.65
				? makeWord(4, 1) + '·' + makeWord(3, 0)
				: makeWord(2, 1);
			legendData.push(name);
			seriesData.push({
				name: name,
				value: Math.round(Math.random() * 100000)
			});
			selected[name] = i < 6;
		}
	
		return {
			legendData: legendData,
			seriesData: seriesData,
			selected: selected
		};
	
		function makeWord(max, min) {
			var nameLen = Math.ceil(Math.random() * max + min);
			var name = [];
			for (var i = 0; i < nameLen; i++) {
				name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
			}
			return name.join('');
		}
	}
	var data = genData(50);
	
	option = {
		title : {
			text: '同名数量统计',
			subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			type: 'scroll',
			orient: 'vertical',
			right: 10,
			top: 20,
			bottom: 20,
			data: data.legendData,
	
			selected: data.selected
		},
		series : [
			{
				name: '姓名',
				type: 'pie',
				radius : '55%',
				center: ['40%', '50%'],
				data: data.seriesData,
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






	'饼图富文本'+echref('Pie-Rich Text')+
	sceg(`var weatherIcons = {
		'Sunny': 'img/logo.jpg',
		'Cloudy': 'img/github.svg',
		'Showers': 'img/zzllrr.gif'
	};
	
	option = {
		title: {
			text: '天气情况统计',
			subtext: '虚构数据',
			left: 'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			// orient: 'vertical',
			// top: 'middle',
			bottom: 10,
			left: 'center',
			data: ['西凉', '益州','兖州','荆州','幽州']
		},
		series : [
			{
				type: 'pie',
				radius : '65%',
				center: ['50%', '50%'],
				selectedMode: 'single',
				data:[
					{
						value:1548,
						name: '幽州',
						label: {
							normal: {
								formatter: [
									'{title|{b}}{abg|}',
									'  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
									'{hr|}',
									'  {Sunny|}{value|202}{rate|55.3%}',
									'  {Cloudy|}{value|142}{rate|38.9%}',
									'  {Showers|}{value|21}{rate|5.8%}'
								].join('\n'),
								backgroundColor: '#eee',
								borderColor: '#777',
								borderWidth: 1,
								borderRadius: 4,
								rich: {
									title: {
										color: '#eee',
										align: 'center'
									},
									abg: {
										backgroundColor: '#333',
										width: '100%',
										align: 'right',
										height: 25,
										borderRadius: [4, 4, 0, 0]
									},
									Sunny: {
										height: 30,
										align: 'left',
										backgroundColor: {
											image: weatherIcons.Sunny
										}
									},
									Cloudy: {
										height: 30,
										align: 'left',
										backgroundColor: {
											image: weatherIcons.Cloudy
										}
									},
									Showers: {
										height: 30,
										align: 'left',
										backgroundColor: {
											image: weatherIcons.Showers
										}
									},
									weatherHead: {
										color: '#333',
										height: 24,
										align: 'left'
									},
									hr: {
										borderColor: '#777',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									value: {
										width: 20,
										padding: [0, 20, 0, 30],
										align: 'left'
									},
									valueHead: {
										color: '#333',
										width: 20,
										padding: [0, 20, 0, 30],
										align: 'center'
									},
									rate: {
										width: 40,
										align: 'right',
										padding: [0, 10, 0, 0]
									},
									rateHead: {
										color: '#333',
										width: 40,
										align: 'center',
										padding: [0, 10, 0, 0]
									}
								}
							}
						}
					},
					{value:535, name: '荆州'},
					{value:510, name: '兖州'},
					{value:634, name: '益州'},
					{value:735, name: '西凉'}
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

	'饼图纹理'+echref('Pie-Pattern')+
	sceg(`var piePatternSrc = 'img/small.png';
	var bgPatternSrc = 'img/logo.jpg';
	
	var piePatternImg = new Image();
	piePatternImg.src = piePatternSrc;
	var bgPatternImg = new Image();
	bgPatternImg.src = bgPatternSrc;
	
	var itemStyle = {
		normal: {
			opacity: 0.7,
			color: {
				image: piePatternImg,
				repeat: 'repeat'
			},
			borderWidth: 3,
			borderColor: '#235894'
		}
	};
	option = {
		backgroundColor: {
			image: bgPatternImg,
			repeat: 'repeat'
		},
		title: {
			text: '饼图纹理',
			textStyle: {
				color: '#235894'
			}
		},
		tooltip: {},
		series: [{
			name: 'pie',
			type: 'pie',
			selectedMode: 'single',
			selectedOffset: 30,
			clockwise: true,
			label: {
				normal: {
					textStyle: {
						fontSize: 18,
						color: '#235894'
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#235894'
					}
				}
			},
			data:[
				{value:335, name:'直接访问'},
				{value:310, name:'邮件营销'},
				{value:234, name:'联盟广告'},
				{value:135, name:'视频广告'},
				{value:1548, name:'搜索引擎'}
			],
			itemStyle: itemStyle
		}]
	}`,0),



	].join(br)
	),
	



	detail('【旭日图】Sunburst',[
		
		echref('Sunburst Simple')+
		sceg(`var data = [{
			name: 'Grandpa',
			children: [{
				name: 'Uncle Leo',
				value: 15,
				children: [{
					name: 'Cousin Jack',
					value: 2
				}, {
					name: 'Cousin Mary',
					value: 5,
					children: [{
						name: 'Jackson',
						value: 2
					}]
				}, {
					name: 'Cousin Ben',
					value: 4
				}]
			}, {
				name: 'Father',
				value: 10,
				children: [{
					name: 'Me',
					value: 5
				}, {
					name: 'Brother Peter',
					value: 1
				}]
			}]
		}, {
			name: 'Nancy',
			children: [{
				name: 'Uncle Nike',
				children: [{
					name: 'Cousin Betty',
					value: 1
				}, {
					name: 'Cousin Jenny',
					value: 2
				}]
			}]
		}];
		
		option = {
			series: {
				type: 'sunburst',
				// highlightPolicy: 'ancestor',
				data: data,
				radius: [0, '90%'],
				label: {
					rotate: 'radial'
				}
			}
		}`,0),





		
		echref('Sunburst-Book')+
		sceg(`var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
		var bgColor = '#2E2733';
		
		var itemStyle = {
			star5: {
				color: colors[0]
			},
			star4: {
				color: colors[1]
			},
			star3: {
				color: colors[2]
			},
			star2: {
				color: colors[3]
			}
		};
		
		var data = [{
			name: '虚构',
			itemStyle: {
				normal: {
					color: colors[1]
				}
			},
			children: [{
				name: '小说',
				children: [{
					name: '5☆',
					children: [{
						name: '疼'
					}, {
						name: '楼下的房客'
					}]
				}, {
					name: '4☆',
					children: [{
						name: '虚无的十字架'
					}, {
						name: '童年的终结'
					}]
				}, {
					name: '3☆',
					children: [{
						name: '疯癫老人日记'
					}]
				}]
			}, {
				name: '其他',
				children: [{
					name: '5☆',
					children: [{
						name: '纳博科夫短篇小说全集'
					}]
		
				}, {
					name: '3☆',
					children: [{
						name: '比起爱你，我更需要你'
					}]
				}]
			}]
		}, {
			name: '非虚构',
			itemStyle: {
				color: colors[2]
			},
			children: [{
				name: '设计',
				children: [{
					name: '5☆',
					children: [{
						name: '无界面交互'
					}]
				}, {
					name: '4☆',
					children: [{
						name: '数字绘图的光照与渲染技术'
					}, {
						name: '日本建筑解剖书'
					}]
				}, {
					name: '3☆',
					children: [{
						name: '奇幻世界艺术'
					}]
				}]
			}, {
				name: '社科',
				children: [{
					name: '5☆',
					children: [{
						name: '痛点'
					}]
				}, {
					name: '4☆',
					children: [{
						name: '卓有成效的管理者'
					}, {
						name: '后物欲时代的来临',
					}]
				}, {
					name: '3☆',
					children: [{
						name: '疯癫与文明'
					}]
				}]
			}, {
				name: '心理',
				children: [{
					name: '5☆',
					children: [{
						name: '我们时代的神经症人格'
					}]
		
				}, {
					name: '3☆',
				}, {
					name: '2☆',
					children: [{
						name: '迷恋'
					}]
				}]
			}]
		}];
		
		for (var j = 0; j < data.length; ++j) {
			var level1 = data[j].children;
			for (var i = 0; i < level1.length; ++i) {
				var block = level1[i].children;
				var bookScore = [];
				var bookScoreId;
				for (var star = 0; star < block.length; ++star) {
					var style = (function (name) {
						switch (name) {
							case '5☆':
								bookScoreId = 0;
								return itemStyle.star5;
							case '4☆':
								bookScoreId = 1;
								return itemStyle.star4;
							case '3☆':
								bookScoreId = 2;
								return itemStyle.star3;
							case '2☆':
								bookScoreId = 3;
								return itemStyle.star2;
						}
					})(block[star].name);
		
					block[star].label = {
						color: style.color,
						downplay: {
							opacity: 0.5
						}
					};
		
					if (block[star].children) {
						style = {
							opacity: 1,
							color: style.color
						};
						block[star].children.forEach(function (book) {
							book.value = 1;
							book.itemStyle = style;
		
							book.label = {
								color: style.color
							};
		
							var value = 1;
							if (bookScoreId === 0 || bookScoreId === 3) {
								value = 5;
							}
		
							if (bookScore[bookScoreId]) {
								bookScore[bookScoreId].value += value;
							}
							else {
								bookScore[bookScoreId] = {
									color: colors[bookScoreId],
									value: value
								};
							}
						});
					}
				}
		
				level1[i].itemStyle = {
					color: data[j].itemStyle.color
				};
			}
		}
		
		option = {
			backgroundColor: bgColor,
			color: colors,
			series: [{
				type: 'sunburst',
				center: ['50%', '48%'],
				data: data,
				sort: function (a, b) {
					if (a.depth === 1) {
						return b.getValue() - a.getValue();
					}
					else {
						return a.dataIndex - b.dataIndex;
					}
				},
				label: {
					rotate: 'radial',
					color: bgColor
				},
				itemStyle: {
					borderColor: bgColor,
					borderWidth: 2
				},
				levels: [{}, {
					r0: 0,
					r: 40,
					label: {
						rotate: 0
					}
				}, {
					r0: 40,
					r: 105
				}, {
					r0: 115,
					r: 140,
					itemStyle: {
						shadowBlur: 2,
						shadowColor: colors[2],
						color: 'transparent'
					},
					label: {
						rotate: 'tangential',
						fontSize: 10,
						color: colors[0]
					}
				}, {
					r0: 140,
					r: 145,
					itemStyle: {
						shadowBlur: 80,
						shadowColor: colors[0]
					},
					label: {
						position: 'outside',
						textShadowBlur: 5,
						textShadowColor: '#333',
					},
					downplay: {
						label: {
							opacity: 0.5
						}
					}
				}]
			}]
		}`,0),





		echref('可视化地图','sunburst-visualMap')+
		sceg(`var data = [{
			name: 'Grandpa',
			children: [{
				name: 'Uncle Leo',
				value: 15,
				children: [{
					name: 'Cousin Jack',
					value: 2
				}, {
					name: 'Cousin Mary',
					value: 5,
					children: [{
						name: 'Jackson',
						value: 2
					}]
				}, {
					name: 'Cousin Ben',
					value: 4
				}]
			}, {
				name: 'Aunt Jane',
				children: [{
					name: 'Cousin Kate',
					value: 4
				}]
			}, {
				name: 'Father',
				value: 10,
				children: [{
					name: 'Me',
					value: 5,
					itemStyle: {
						color: 'red'
					}
				}, {
					name: 'Brother Peter',
					value: 1
				}]
			}]
		}, {
			name: 'Mike',
			children: [{
				name: 'Uncle Dan',
				children: [{
					name: 'Cousin Lucy',
					value: 3
				}, {
					name: 'Cousin Luck',
					value: 4,
					children: [{
						name: 'Nephew',
						value: 2
					}]
				}]
			}]
		}, {
			name: 'Nancy',
			children: [{
				name: 'Uncle Nike',
				children: [{
					name: 'Cousin Betty',
					value: 1
				}, {
					name: 'Cousin Jenny',
					value: 2
				}]
			}]
		}];
		
		option = {
			visualMap: {
				type: 'continuous',
				min: 0,
				max: 10,
				inRange: {
					color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
				}
			},
			series: {
				type: 'sunburst',
				data: data,
				radius: [0, '90%'],
				label: {
					rotate: 'radial'
				}
			}
		}`,0),


		echref('Sunburst-Monochrome')+
		sceg(`var item1 = {
			color: '#F54F4A'
		};
		var item2 = {
			color: '#FF8C75'
		};
		var item3 = {
			color: '#FFB499'
		};
		
		var data = [{
			children: [{
				value: 5,
				children: [{
					value: 1,
					itemStyle: item1
				}, {
					value: 2,
					children: [{
						value: 1,
						itemStyle: item2
					}]
				}, {
					children: [{
						value: 1
					}]
				}],
				itemStyle: item1
			}, {
				value: 10,
				children: [{
					value: 6,
					children: [{
						value: 1,
						itemStyle: item1
					}, {
						value: 1
					}, {
						value: 1,
						itemStyle: item2
					}, {
						value: 1
					}],
					itemStyle: item3
				}, {
					value: 2,
					children: [{
						value: 1
					}],
					itemStyle: item3
				}, {
					children: [{
						value: 1,
						itemStyle: item2
					}]
				}],
				itemStyle: item1
			}],
			itemStyle: item1
		}, {
			value: 9,
			children: [{
				value: 4,
				children: [{
					value: 2,
					itemStyle: item2
				}, {
					children: [{
						value: 1,
						itemStyle: item1
					}]
				}],
				itemStyle: item1
			}, {
				children: [{
					value: 3,
					children: [{
						value: 1
					}, {
						value: 1,
						itemStyle: item2
					}]
				}],
				itemStyle: item3
			}],
			itemStyle: item2
		}, {
			value: 7,
			children: [{
				children: [{
					value: 1,
					itemStyle: item3
				}, {
					value: 3,
					children: [{
						value: 1,
						itemStyle: item2
					}, {
						value: 1
					}],
					itemStyle: item2
				}, {
					value: 2,
					children: [{
						value: 1
					}, {
						value: 1,
						itemStyle: item1
					}],
					itemStyle: item1
				}],
				itemStyle: item3
			}],
			itemStyle: item1
		}, {
			children: [{
				value: 6,
				children: [{
					value: 1,
					itemStyle: item2
				}, {
					value: 2,
					children: [{
						value: 2,
						itemStyle: item2
					}],
					itemStyle: item1
				}, {
					value: 1,
					itemStyle: item3
				}],
				itemStyle: item3
			}, {
				value: 3,
				children: [{
					value: 1,
				}, {
					children: [{
						value: 1,
						itemStyle: item2
					}]
				}, {
					value: 1
				}],
				itemStyle: item3
			}],
			itemStyle: item1
		}];
		
		option = {
			series: {
				radius: ['15%', '80%'],
				type: 'sunburst',
				sort: null,
				highlightPolicy: 'ancestor',
				data: data,
				label: {
					rotate: 'radial'
				},
				levels: [],
				itemStyle: {
					color: '#ddd',
					borderWidth: 2
				}
			}
		}`,0),

		echref('Sunburst-Label Rotate')+
		sceg(`option = {
			silent: true,
			series: {
				radius: ['15%', '80%'],
				type: 'sunburst',
				sort: null,
				highlightPolicy: 'ancestor',
				data: [{
					value: 8,
					children: [{
						value: 4,
						children: [{
							value: 2
						}, {
							value: 1
						}, {
							value: 1
						}, {
							value: 0.5
						}]
					}, {
						value: 2
					}]
				}, {
					value: 4,
					children: [{
						children: [{
							value: 2
						}]
					}]
				}, {
					value: 4,
					children: [{
						children: [{
							value: 2
						}]
					}]
				}, {
					value: 3,
					children: [{
						children: [{
							value: 1
						}]
					}]
				}],
				label: {
					color: '#fff',
					textBorderColor: '#666',
					textBorderWidth: 2,
					borderColor: '#999',
					borderWidth: 1,
					formatter: function (param) {
						var depth = param.treePathInfo.length;
						if (depth === 2) {
							return 'radial';
						}
						else if (depth === 3) {
							return 'tangential';
						}
						else if (depth === 4) {
							return '0';
						}
					}
				},
				levels: [{}, {
					itemStyle: {
						color: 'red'
					},
					label: {
						rotate: 'radial'
					}
				}, {
					itemStyle: {
						color: 'orange'
					},
					label: {
						rotate: 'tangential'
					}
				}, {
					itemStyle: {
						color: 'yellow'
					},
					label: {
						rotate: 0
					}
				}]
			}
		}`,0),







		echref('Sunburst-Drink')+
		sceg(`var data = [{
			name: 'Flora',
			itemStyle: {
				color: '#da0d68'
			},
			children: [{
				name: 'Black Tea',
				value: 1,
				itemStyle: {
					color: '#975e6d'
				}
			}, {
				name: 'Floral',
				itemStyle: {
					color: '#e0719c'
				},
				children: [{
					name: 'Chamomile',
					value: 1,
					itemStyle: {
						color: '#f99e1c'
					}
		
				}, {
					name: 'Jasmine',
					value: 1,
					itemStyle: {
						color: '#f7f1bd'
					}
				}]
			}]
		
		
		}, {
			name: 'Sweet',
			itemStyle: {
				color: '#e65832'
			},
			children: [{
				name: 'Brown Sugar',
				itemStyle: {
					color: '#d45a59'
				},
				children: [{
					name: 'Molasses',
					value: 1,
					itemStyle: {
						color: '#310d0f'
					}
		
				}, {
					name: 'Honey',
					value: 1,
					itemStyle: {
						color: '#da5c1f'
					}
				}]
			}, {
				name: 'Vanilla',
				value: 1,
				itemStyle: {
					color: '#f89a80'
				}
			}, {
				name: 'Sweet Aromatics',
				value: 1,
				itemStyle: {
					color: '#d0545f'
				}
			}]
		}];
		
		option = {
			title: {
				text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
				subtext: 'Source: ',
				textStyle: {
					fontSize: 14,
					align: 'center'
				},
				subtextStyle: {
					align: 'center'
				},
				sublink: 'http'
			},
			series: {
				type: 'sunburst',
				highlightPolicy: 'ancestor',
				data: data,
				radius: [0, '95%'],
				sort: null,
				levels: [{}, {
					r0: '15%',
					r: '35%',
					itemStyle: {
						borderWidth: 2
					},
					label: {
						rotate: 'tangential'
					}
				}, {
					r0: '35%',
					r: '70%',
					label: {
						align: 'right'
					}
				}, {
					r0: '70%',
					r: '72%',
					label: {
						position: 'outside',
						padding: 3,
						silent: false
					},
					itemStyle: {
						borderWidth: 3
					}
				}]
			}
		}`,0),


	].join(br)
	),
	



	
	detail('【散点图】Scatter',[

	echref('Scatter Simple')+
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


	'气泡图'+echref('Bubble Gradient')+
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




	echref('Scatter Single Axis')+
	sceg(`var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
			'7a', '8a', '9a','10a','11a',
			'12p', '1p', '2p', '3p', '4p', '5p',
			'6p', '7p', '8p', '9p', '10p', '11p'];
		var days = ['Saturday', 'Friday', 'Thursday',
			'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

		var data = [[0,0,5],[1,0,7],[1,1,0],[1,23,2],[2,13,9],[3,10,5],[4,21,7],[5,8,2],[6,18,0]];

		option = {
		tooltip: {
			position: 'top'
		},
		title: [],
		singleAxis: [],
		series: []
		};

		echarts.util.each(days, function (day, idx) {
		option.title.push({
			textBaseline: 'middle',
			top: (idx + 0.5) * 100 / 7 + '%',
			text: day
		});
		option.singleAxis.push({
			left: 150,
			type: 'category',
			boundaryGap: false,
			data: hours,
			top: (idx * 100 / 7 + 5) + '%',
			height: (100 / 7 - 10) + '%',
			axisLabel: {
				interval: 2
			}
		});
		option.series.push({
			singleAxisIndex: idx,
			coordinateSystem: 'singleAxis',
			type: 'scatter',
			data: [],
			symbolSize: function (dataItem) {
				return dataItem[1] * 4;
			}
		});
		});

		echarts.util.each(data, function (dataItem) {
		option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
		});
		option`,0),

	echref('Scatter-Anscombe Quartet')+
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



	'扩散特效'+echref('Scatter Effect')+
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



	echref('Scatter-Matrix')+
	sceg(`// Schema:
	// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
	var schema = [
		{name: 'AQIindex', index: 1, text: 'AQI'},
		{name: 'PM25', index: 2, text: 'PM 2.5'},
		{name: 'PM10', index: 3, text: 'PM 10'},
		{name: 'CO', index: 4, text: 'CO'},
		{name: 'NO2', index: 5, text: 'NO₂'},
		{name: 'SO2', index: 6, text: 'SO₂'},
		{name: '等级', index: 7, text: '等级'}
	];
	
	var rawData = [
		[55,9,56,0.46,18,6,"良", "北京"],
		[25,11,21,0.65,34,9,"优", "北京"],
		[56,7,63,0.3,14,5,"良", "北京"],
	
		[26,37,27,1.163,27,13,"优", "广州"],
		[85,62,71,1.195,60,8,"良", "广州"],
		[78,38,74,1.363,37,7,"良", "广州"],
	
		[91,45,125,0.82,34,23,"良", "上海"],
		[65,27,78,0.86,45,29,"良", "上海"],
		[83,60,84,1.09,73,27,"良", "上海"],
	];
	
	var CATEGORY_DIM_COUNT = 6;
	var GAP = 1;
	var BASE_LEFT = 5;
	var BASE_TOP = 10;
	// var GRID_WIDTH = 220;
	// var GRID_HEIGHT = 220;
	var GRID_WIDTH = (100 - BASE_LEFT - GAP) / CATEGORY_DIM_COUNT - GAP;
	var GRID_HEIGHT = (100 - BASE_TOP - GAP) / CATEGORY_DIM_COUNT - GAP;
	var CATEGORY_DIM = 7;
	var SYMBOL_SIZE = 3;
	
	function retrieveScatterData(data, dimX, dimY) {
		var result = [];
		for (var i = 0; i < data.length; i++) {
			var item = [data[i][dimX], data[i][dimY]];
			item[CATEGORY_DIM] = data[i][CATEGORY_DIM];
			result.push(item);
		}
		return result;
	}
	
	function generateGrids(option) {
		var index = 0;
	
		for (var i = 0; i < CATEGORY_DIM_COUNT; i++) {
			for (var j = 0; j < CATEGORY_DIM_COUNT; j++) {
				if (CATEGORY_DIM_COUNT - i + j >= CATEGORY_DIM_COUNT) {
					continue;
				}
	
				option.grid.push({
					left: BASE_LEFT + i * (GRID_WIDTH + GAP) + '%',
					top: BASE_TOP + j * (GRID_HEIGHT + GAP) + '%',
					width: GRID_WIDTH + '%',
					height: GRID_HEIGHT + '%'
				});
	
				option.brush.xAxisIndex && option.brush.xAxisIndex.push(index);
				option.brush.yAxisIndex && option.brush.yAxisIndex.push(index);
	
				option.xAxis.push({
					splitNumber: 3,
					position: 'top',
					axisLine: {
						show: j === 0,
						onZero: false
					},
					axisTick: {
						show: j === 0,
						inside: true
					},
					axisLabel: {
						show: j === 0
					},
					type: 'value',
					gridIndex: index,
					scale: true
				});
	
				option.yAxis.push({
					splitNumber: 3,
					position: 'right',
					axisLine: {
						show: i === CATEGORY_DIM_COUNT - 1,
						onZero: false
					},
					axisTick: {
						show: i === CATEGORY_DIM_COUNT - 1,
						inside: true
					},
					axisLabel: {
						show: i === CATEGORY_DIM_COUNT - 1
					},
					type: 'value',
					gridIndex: index,
					scale: true
				});
	
				option.series.push({
					type: 'scatter',
					symbolSize: SYMBOL_SIZE,
					xAxisIndex: index,
					yAxisIndex: index,
					data: retrieveScatterData(rawData, i, j)
				});
	
				option.visualMap.seriesIndex.push(option.series.length - 1);
	
				index++;
			}
		}
	}
	
	
	var option = {
		animation: false,
		brush: {
			brushLink: 'all',
			xAxisIndex: [],
			yAxisIndex: [],
			inBrush: {
				opacity: 1
			}
		},
		visualMap: {
			type: 'piecewise',
			categories: ["北京", "上海", "广州"],
			dimension: CATEGORY_DIM,
			orient: 'horizontal',
			top: 0,
			left: 'center',
			inRange: {
				color: ['#c23531','#2f4554', '#61a0a8']
			},
			outOfRange: {
				color: '#ddd'
			},
			seriesIndex: [0]
		},
		tooltip: {
			trigger: 'item'
		},
		parallelAxis: [
			{dim: 0, name: schema[0].text},
			{dim: 1, name: schema[1].text},
			{dim: 2, name: schema[2].text},
			{dim: 3, name: schema[3].text},
			{dim: 4, name: schema[4].text},
			{dim: 5, name: schema[5].text},
			{dim: 6, name: schema[6].text,
				type: 'category', data: ['优', '良', '轻度', '中度', '重度', '严重']
			}
		],
		parallel: {
			bottom: '5%',
			left: '5%',
			height: '31%',
			width: '55%',
			parallelAxisDefault: {
				type: 'value',
				name: 'AQI指数',
				nameLocation: 'end',
				nameGap: 20,
				splitNumber: 3,
				nameTextStyle: {
					fontSize: 14
				},
				axisLine: {
					lineStyle: {
						color: '#555'
					}
				},
				axisTick: {
					lineStyle: {
						color: '#555'
					}
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#555'
					}
				}
			}
		},
		grid: [],
		xAxis: [],
		yAxis: [],
		series: [
			{
				name: 'parallel',
				type: 'parallel',
				smooth: true,
				lineStyle: {
					normal: {
						width: 1,
						opacity: 0.3
					}
				},
				data: rawData
			}
		]
	};
	
	generateGrids(option);
	option`,0),

	echref('Scatter-Stream Visual'),

	echref('Scatter-Weight')+
	sceg(`option = {
		title : {
			text: '男性女性身高体重分布',
			subtext: '抽样调查来自: Heinz  2003'
		},
		grid: {
			left: '3%',
			right: '7%',
			bottom: '3%',
			containLabel: true
		},
		tooltip : {
			// trigger: 'axis',
			showDelay : 0,
			formatter : function (params) {
				if (params.value.length > 1) {
					return params.seriesName + ' :<br/>'
					+ params.value[0] + 'cm '
					+ params.value[1] + 'kg ';
				}
				else {
					return params.seriesName + ' :<br/>'
					+ params.name + ' : '
					+ params.value + 'kg ';
				}
			},
			axisPointer:{
				show: true,
				type : 'cross',
				lineStyle: {
					type : 'dashed',
					width : 1
				}
			}
		},
		toolbox: {
			feature: {
				dataZoom: {},
				brush: {
					type: ['rect', 'polygon', 'clear']
				}
			}
		},
		brush: {
		},
		legend: {
			data: ['女性','男性'],
			left: 'center'
		},
		xAxis : [
			{
				type : 'value',
				scale:true,
				axisLabel : {
					formatter: '{value} cm'
				},
				splitLine: {
					show: false
				}
			}
		],
		yAxis : [
			{
				type : 'value',
				scale:true,
				axisLabel : {
					formatter: '{value} kg'
				},
				splitLine: {
					show: false
				}
			}
		],
		series : [
			{
				name:'女性',
				type:'scatter',
				data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
					[172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
				],
				markArea: {
					silent: true,
					itemStyle: {
						normal: {
							color: 'transparent',
							borderWidth: 1,
							borderType: 'dashed'
						}
					},
					data: [[{
						name: '女性分布区间',
						xAxis: 'min',
						yAxis: 'min'
					}, {
						xAxis: 'max',
						yAxis: 'max'
					}]]
				},
				markPoint : {
					data : [
						{type : 'max', name: '最大值'},
						{type : 'min', name: '最小值'}
					]
				},
				markLine : {
					lineStyle: {
						normal: {
							type: 'solid'
						}
					},
					data : [
						{type : 'average', name: '平均值'},
						{ xAxis: 160 }
					]
				}
			},
			{
				name:'男性',
				type:'scatter',
				data: [[174.0, 65.6], [175.3, 71.8], [180.3, 83.2], [180.3, 83.2]
				],
				markArea: {
					silent: true,
					itemStyle: {
						normal: {
							color: 'transparent',
							borderWidth: 1,
							borderType: 'dashed'
						}
					},
					data: [[{
						name: '男性分布区间',
						xAxis: 'min',
						yAxis: 'min'
					}, {
						xAxis: 'max',
						yAxis: 'max'
					}]]
				},
				markPoint : {
					data : [
						{type : 'max', name: '最大值'},
						{type : 'min', name: '最小值'}
					]
				},
				markLine : {
					lineStyle: {
						normal: {
							type: 'solid'
						}
					},
					data : [
						{type : 'average', name: '平均值'},
						{ xAxis: 170 }
					]
				}
			}
		]
	}`,0),


	echref('百度地图-空气质量','','effectScatter-bmap'),

	echref('Scatter AQI Color')+
	sceg(`var dataBJ = [
		[1,55,9,56,0.46,18,6,"良"],
		[2,25,11,21,0.65,34,9,"优"],
		[3,56,7,63,0.3,14,5,"良"],
		[4,33,7,29,0.33,16,6,"优"],
		[5,42,24,44,0.76,40,16,"优"],
	
	];
	
	var dataGZ = [
		[1,26,37,27,1.163,27,13,"优"],
		[2,85,62,71,1.195,60,8,"良"],
		[3,78,38,74,1.363,37,7,"良"],
		[4,21,21,36,0.634,40,9,"优"],
		[5,41,42,46,0.915,81,13,"优"],
	
	];
	
	var dataSH = [
		[1,91,45,125,0.82,34,23,"良"],
		[2,65,27,78,0.86,45,29,"良"],
		[3,83,60,84,1.09,73,27,"良"],
		[4,109,81,121,1.28,68,51,"轻度污染"],
		[5,106,77,114,1.07,55,51,"轻度污染"],
	
	];
	
	var schema = [
		{name: 'date', index: 0, text: '日'},
		{name: 'AQIindex', index: 1, text: 'AQI指数'},
		{name: 'PM25', index: 2, text: 'PM2.5'},
		{name: 'PM10', index: 3, text: 'PM10'},
		{name: 'CO', index: 4, text: '一氧化碳（CO）'},
		{name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
		{name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
	];
	
	
	var itemStyle = {
		normal: {
			opacity: 0.8,
			shadowBlur: 10,
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			shadowColor: 'rgba(0, 0, 0, 0.5)'
		}
	};
	
	option = {
		backgroundColor: '#404a59',
		color: [
			'#dd4444', '#fec42c', '#80F1BE'
		],
		legend: {
			y: 'top',
			data: ['北京', '上海', '广州'],
			textStyle: {
				color: '#fff',
				fontSize: 16
			}
		},
		grid: {
			x: '10%',
			x2: 150,
			y: '18%',
			y2: '10%'
		},
		tooltip: {
			padding: 10,
			backgroundColor: '#222',
			borderColor: '#777',
			borderWidth: 1,
			formatter: function (obj) {
				var value = obj.value;
				return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
					+ obj.seriesName + ' ' + value[0] + '日：'
					+ value[7]
					+ '</div>'
					+ schema[1].text + '：' + value[1] + '<br>'
					+ schema[2].text + '：' + value[2] + '<br>'
					+ schema[3].text + '：' + value[3] + '<br>'
					+ schema[4].text + '：' + value[4] + '<br>'
					+ schema[5].text + '：' + value[5] + '<br>'
					+ schema[6].text + '：' + value[6] + '<br>';
			}
		},
		xAxis: {
			type: 'value',
			name: '日期',
			nameGap: 16,
			nameTextStyle: {
				color: '#fff',
				fontSize: 14
			},
			max: 31,
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#eee'
				}
			}
		},
		yAxis: {
			type: 'value',
			name: 'AQI指数',
			nameLocation: 'end',
			nameGap: 20,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16
			},
			axisLine: {
				lineStyle: {
					color: '#eee'
				}
			},
			splitLine: {
				show: false
			}
		},
		visualMap: [
			{
				left: 'right',
				top: '10%',
				dimension: 2,
				min: 0,
				max: 250,
				itemWidth: 30,
				itemHeight: 120,
				calculable: true,
				precision: 0.1,
				text: ['圆形大小：PM2.5'],
				textGap: 30,
				textStyle: {
					color: '#fff'
				},
				inRange: {
					symbolSize: [10, 70]
				},
				outOfRange: {
					symbolSize: [10, 70],
					color: ['rgba(255,255,255,.2)']
				},
				controller: {
					inRange: {
						color: ['#c23531']
					},
					outOfRange: {
						color: ['#444']
					}
				}
			},
			{
				left: 'right',
				bottom: '5%',
				dimension: 6,
				min: 0,
				max: 50,
				itemHeight: 120,
				calculable: true,
				precision: 0.1,
				text: ['明暗：二氧化硫'],
				textGap: 30,
				textStyle: {
					color: '#fff'
				},
				inRange: {
					colorLightness: [1, 0.5]
				},
				outOfRange: {
					color: ['rgba(255,255,255,.2)']
				},
				controller: {
					inRange: {
						color: ['#c23531']
					},
					outOfRange: {
						color: ['#444']
					}
				}
			}
		],
		series: [
			{
				name: '北京',
				type: 'scatter',
				itemStyle: itemStyle,
				data: dataBJ
			},
			{
				name: '上海',
				type: 'scatter',
				itemStyle: itemStyle,
				data: dataSH
			},
			{
				name: '广州',
				type: 'scatter',
				itemStyle: itemStyle,
				data: dataGZ
			}
		]
	}`,0),


	echref('Scatter-Clustering Process'),

	echref('Scatter-Linear Regression'),
	echref('Scatter-Logarithmic Regression'),
	echref('Scatter-Exponential Regression'),
	echref('Scatter-Polynomial Regression'),

	echref('Scatter-Large')+
	sceg(`function genData(len, offset) {
		var lngRange = [-10.781327, 131.48];
		var latRange = [18.252847, 52.33];
	
		var arr = new Float32Array(len * 2);
		var off = 0;
	
		for (var i = 0; i < len; i++) {
			var x = +Math.random() * 10;
			var y = +Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random() + (offset || 0) / 10;
			arr[off++] = x;
			arr[off++] = y;
		}
		return arr;
	}
	
	var data1 = genData(105);
	var data2 = genData(105, 10);
	
	option = {
		title: {
			text: echarts.format.addCommas(data1.length / 2 + data2.length / 2) + ' Points'
		},
		tooltip: {},
		toolbox: {
			left: 'center',
			feature: {
				dataZoom: {}
			}
		},
		legend: {
			orient: 'vertical',
			right: 10
		},
		xAxis: [{
		}],
		yAxis: [{
		}],
		dataZoom: [{
			type: 'inside'
		}, {
			type: 'slider'
		}],
		animation: false,
		series : [{
			name: 'A',
			type: 'scatter',
			data: data1,
			dimensions: ['x', 'y'],
			symbolSize: 3,
			itemStyle: {
				opacity: 0.4
			},
			large: true
		}, {
			name: 'B',
			type: 'scatter',
			data: data2,
			dimensions: ['x', 'y'],
			symbolSize: 3,
			itemStyle: {
				opacity: 0.4
			},
			large: true
		}]
	}`,0),


	echref('Punch Card','','scatter-punchCard')+
	sceg(`var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
			'7a', '8a', '9a','10a','11a',
			'12p', '1p', '2p', '3p', '4p', '5p',
			'6p', '7p', '8p', '9p', '10p', '11p'];
	var days = ['Saturday', 'Friday', 'Thursday',
			'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
	
	var data = [[0,0,5],[0,1,1],];
	data = data.map(function (item) {
		return [item[1], item[0], item[2]];
	});
	
	option = {
		title: {
			text: 'Punch Card of Github',
		},
		legend: {
			data: ['Punch Card'],
			left: 'right'
		},
		tooltip: {
			position: 'top',
			formatter: function (params) {
				return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
			}
		},
		grid: {
			left: 2,
			bottom: 10,
			right: 10,
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: hours,
			boundaryGap: false,
			splitLine: {
				show: true,
				lineStyle: {
					color: '#999',
					type: 'dashed'
				}
			},
			axisLine: {
				show: false
			}
		},
		yAxis: {
			type: 'category',
			data: days,
			axisLine: {
				show: false
			}
		},
		series: [{
			name: 'Punch Card',
			type: 'scatter',
			symbolSize: function (val) {
				return val[2] * 2;
			},
			data: data,
			animationDelay: function (idx) {
				return idx * 5;
			}
		}]
	}`,0)+

	echref('极坐标','','scatter-polar-punchCard')+
	sceg(`var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
			'7a', '8a', '9a','10a','11a',
			'12p', '1p', '2p', '3p', '4p', '5p',
			'6p', '7p', '8p', '9p', '10p', '11p'];
	var days = ['Saturday', 'Friday', 'Thursday',
			'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
	
	var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4]];
	
	option = {
		title: {
			text: 'Punch Card of Github',
			link: git('pissang/echarts-next/graphs/punch-card')
		},
		legend: {
			data: ['Punch Card'],
			left: 'right'
		},
		polar: {},
		tooltip: {
			formatter: function (params) {
				return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
			}
		},
		angleAxis: {
			type: 'category',
			data: hours,
			boundaryGap: false,
			splitLine: {
				show: true,
				lineStyle: {
					color: '#999',
					type: 'dashed'
				}
			},
			axisLine: {
				show: false
			}
		},
		radiusAxis: {
			type: 'category',
			data: days,
			axisLine: {
				show: false
			},
			axisLabel: {
				rotate: 45
			}
		},
		series: [{
			name: 'Punch Card',
			type: 'scatter',
			coordinateSystem: 'polar',
			symbolSize: function (val) {
				return val[2] * 2;
			},
			data: data,
			animationDelay: function (idx) {
				return idx * 5;
			}
		}]
	}`,1),

	echref('Scatter-Life Expectancy Timeline'),

	echref('Scatter-Nebula'),
	echref('Scatter-Nutrients'),
	echref('Scatter-Nutrients Matrix'),
	echref('Scatter-Painter Choice'),


	echref('Custom Error Scatter')+
	sceg(`// Prime Costs and Prices for ACME Fashion 	Collection "Spring-Summer, 2016"
	// Data from https://playground.anychart.com/gallery/7.12.0/Error_Charts/Marker_Chart
	var dimensions = [
		'name', 'Price', 'Prime cost', 'Prime cost min', 'Prime cost max', 'Price min', 'Price max'
	];
	var data = [
		['Blouse "Blue Viola"', 101.88, 99.75, 76.75, 116.75, 69.88, 119.88],
		['Dress "Daisy"', 155.8, 144.03, 126.03, 156.03, 129.8, 188.8],
		['Trousers "Cutesy Classic"', 203.25, 173.56, 151.56, 187.56, 183.25, 249.25],
		['Dress "Morning Dew"', 256, 120.5, 98.5, 136.5, 236, 279],
		['Turtleneck "Dark Chocolate"', 408.89, 294.75, 276.75, 316.75, 385.89, 427.89],
		['Jumper "Early Spring"', 427.36, 430.24, 407.24, 452.24, 399.36, 461.36],
		['Breeches "Summer Mood"', 356, 135.5, 123.5, 151.5, 333, 387],
		['Dress "Mauve Chamomile"', 406, 95.5, 73.5, 111.5, 366, 429],
		['Dress "Flying Tits"', 527.36, 503.24, 488.24, 525.24, 485.36, 551.36],
		['Dress "Singing Nightingales"', 587.36, 543.24, 518.24, 555.24, 559.36, 624.36],
		['Sundress "Cloudy weather"', 603.36, 407.24, 392.24, 419.24, 581.36, 627.36],
		['Sundress "East motives"', 633.36, 477.24, 445.24, 487.24, 594.36, 652.36],
		['Sweater "Cold morning"', 517.36, 437.24, 416.24, 454.24, 488.36, 565.36],
		['Trousers "Lavender Fields"', 443.36, 387.24, 370.24, 413.24, 412.36, 484.36],
		['Jumper "Coffee with Milk"', 543.36, 307.24, 288.24, 317.24, 509.36, 574.36],
		['Blouse "Blooming Cactus"', 790.36, 277.24, 254.24, 295.24, 764.36, 818.36],
		['Sweater "Fluffy Comfort"', 790.34, 678.34, 660.34, 690.34, 762.34, 824.34]
	];
	
	function renderItem(params, api) {
		var children = [];
		var coordDims = ['x', 'y'];
	
		for (var baseDimIdx = 0; baseDimIdx < 2; baseDimIdx++) {
			var otherDimIdx = 1 - baseDimIdx;
			var encode = params.encode;
			var baseValue = api.value(encode[coordDims[baseDimIdx]][0]);
			var param = [];
			param[baseDimIdx] = baseValue;
			param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][1]);
			var highPoint = api.coord(param);
			param[otherDimIdx] = api.value(encode[coordDims[otherDimIdx]][2]);
			var lowPoint = api.coord(param);
			var halfWidth = 5;
	
			var style = api.style({
				stroke: api.visual('color'),
				fill: null
			});
	
			children.push({
				type: 'line',
				shape: makeShape(
					baseDimIdx,
					highPoint[baseDimIdx] - halfWidth, highPoint[otherDimIdx],
					highPoint[baseDimIdx] + halfWidth, highPoint[otherDimIdx]
				),
				style: style
			}, {
				type: 'line',
				shape: makeShape(
					baseDimIdx,
					highPoint[baseDimIdx], highPoint[otherDimIdx],
					lowPoint[baseDimIdx], lowPoint[otherDimIdx]
				),
				style: style
			}, {
				type: 'line',
				shape: makeShape(
					baseDimIdx,
					lowPoint[baseDimIdx] - halfWidth, lowPoint[otherDimIdx],
					lowPoint[baseDimIdx] + halfWidth, lowPoint[otherDimIdx]
				),
				style: style
			});
		}
	
		function makeShape(baseDimIdx, base1, value1, base2, value2) {
			var shape = {};
			shape[coordDims[baseDimIdx] + '1'] = base1;
			shape[coordDims[1 - baseDimIdx] + '1'] = value1;
			shape[coordDims[baseDimIdx] + '2'] = base2;
			shape[coordDims[1 - baseDimIdx] + '2'] = value2;
			return shape;
		}
	
		return {
			type: 'group',
			children: children
		};
	}
	
	option = {
		tooltip: {
		},
		legend: {
			data: ['bar', 'error']
		},
		dataZoom: [{
			type: 'slider',
			height: 8,
			bottom: 20,
			borderColor: 'transparent',
			backgroundColor: '#e2e2e2',
			handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
			handleSize: 20,
			handleStyle: {
				shadowBlur: 6,
				shadowOffsetX: 1,
				shadowOffsetY: 2,
				shadowColor: '#aaa'
			}
		}, {
			type: 'inside'
		}],
		grid: {
			bottom: 80
		},
		xAxis: {},
		yAxis: {},
		series: [{
			type: 'scatter',
			name: 'error',
			data: data,
			dimensions: dimensions,
			encode: {
				x: 2,
				y: 1,
				tooltip: [2, 1, 3, 4, 5, 6],
				itemName: 0
			},
			itemStyle: {
				normal: {
					color: '#77bef7'
				}
			}
		}, {
			type: 'custom',
			name: 'error',
			renderItem: renderItem,
			dimensions: dimensions,
			encode: {
				x: [2, 3, 4],
				y: [1, 5, 6],
				tooltip: [2, 1, 3, 4, 5, 6],
				itemName: 0
			},
			data: data,
			z: 100
		}]
	}`,0),



		echref('Custom Hexbin'),



		echref('Cycle Plot')+
		sceg(`var rawData = [
			[2010, 26, 35, 46, 40, 47, 61, 47, 41, 20, 18, 9, 10],
			[2011, 29, 39, 55, 38, 55, 67, 53, 41, 19, 20, 11, 11],
			[2012, 38, 48, 60, 49, 57, 79, 62, 54, 26, 26, 13, 11]
		];
		
		var dataByMonth = [];
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		echarts.util.each(rawData, function (entry, yearIndex) {
			echarts.util.each(entry, function (value, index) {
				if (index) {
					var monthIndex = index - 1;
					var monthItem = dataByMonth[monthIndex] = dataByMonth[monthIndex] || [];
					monthItem[0] = monthIndex;
					monthItem[yearIndex + 1] = value;
				}
			});
		});
		var averageByMonth = [];
		echarts.util.each(dataByMonth, function (entry, index) {
			var sum = 0;
			echarts.util.each(entry, function (value, index) {
				index && (sum += value);
			});
			averageByMonth.push([index, sum / (entry.length - 1)]);
		});
		
		function renderTrendItem(params, api) {
			var categoryIndex = api.value(0);
			var unitBandWidth = api.size([0, 0])[0] * 0.85 / (rawData.length - 1);
		
			var points = echarts.util.map(rawData, function (entry, index) {
				var value = api.value(index + 1);
				var point = api.coord([categoryIndex, value]);
				point[0] += unitBandWidth * (index - rawData.length / 2);
				return point;
			});
		
			return {
				type: 'polyline',
				shape: {
					points: points
				},
				style: api.style({
					fill: null,
					stroke: api.visual('color'),
					lineWidth: 2
				})
			};
		}
		
		function renderAverageItem(param, api) {
			var categoryIndex = api.value(0);
			var bandWidth = api.size([0, 0])[0] * 0.85;
			var point = api.coord([api.value(0), api.value(1)]);
		
			return {
				type: 'line',
				shape: {
					x1: point[0] - bandWidth / 2,
					x2: point[0] + bandWidth / 2,
					y1: point[1],
					y2: point[1]
				},
				style: api.style({
					fill: null,
					stroke: api.visual('color'),
					lineWidth: 2
				})
			};
		}
		
		option = {
			tooltip: {
			},
			title: {
				text: 'Sales Trends by Year within Each Month',
				subtext: 'Sample of Cycle Plot',
				left: 'center'
			},
			legend: {
				top: 70,
				data: ['Trend by year (2010 - 2012)', 'Average']
			},
			dataZoom: [{
				type: 'slider',
				showDataShadow: false,
				bottom: 10,
				height: 20,
				borderColor: 'transparent',
				backgroundColor: '#e2e2e2',
				handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
				handleSize: 20,
				handleStyle: {
					shadowBlur: 6,
					shadowOffsetX: 1,
					shadowOffsetY: 2,
					shadowColor: '#aaa'
				},
				labelFormatter: ''
			}, {
				type: 'inside'
			}],
			grid: {
				bottom: 70,
				top: 120,
			},
			xAxis: {
				data: months
			},
			yAxis: {
				boundaryGap: [0, '20%']
			},
			series: [{
				type: 'custom',
				name: 'Average',
				renderItem: renderAverageItem,
				encode: {
					x: 0,
					y: 1
				},
				data: averageByMonth
			}, {
				type: 'custom',
				name: 'Trend by year (2010 - 2012)',
				renderItem: renderTrendItem,
				encode: {
					x: 0,
					y: echarts.util.map(rawData, function (entry, index) {
						return index + 1;
					})
				},
				data: dataByMonth
			}]
		}`,0),



		echref('Wind Barb'),


	].join(br)
	),
	
	
	





	
	detail('【雷达图】Radar',[
	
		echref('Radar')+
		sceg(`option = {
			title: {
				text: '基础雷达图'
			},
			tooltip: {},
			legend: {
				data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
			},
			radar: {
				// shape: 'circle',	//极坐标样式
				name: {
					textStyle: {
						color: '#fff',
						backgroundColor: '#999',
						borderRadius: 3,
						padding: [3, 5]
				   }
				},
				indicator: [
				   { name: '销售（sales）', max: 6500},
				   { name: '管理（Administration）', max: 16000},
				   { name: '信息技术（Information Techology）', max: 30000},
				   { name: '客服（Customer Support）', max: 38000},
				   { name: '研发（Development）', max: 52000},
				   { name: '市场（Marketing）', max: 25000}
				]
			},
			series: [{
				name: '预算 vs 开销（Budget vs spending）',
				type: 'radar',
				// 雷达面积图：
				// areaStyle: {normal: {}},
				data : [
					{
						value : [4300, 10000, 28000, 35000, 50000, 19000],
						name : '预算分配（Allocated Budget）'
					},
					 {
						value : [5000, 14000, 28000, 31000, 42000, 21000],
						name : '实际开销（Actual Spending）'
					}
				]
			}]
		}`,0),
		
		
	
		echref('Radar AQI')+
		sceg(`// Schema:
		// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
		var dataBJ = [
			[55,9,56,0.46,18,6,1],
			[25,11,21,0.65,34,9,2],
			[56,7,63,0.3,14,5,3],
		];
		
		var dataGZ = [
			[26,37,27,1.163,27,13,1],
			[85,62,71,1.195,60,8,2],
			[78,38,74,1.363,37,7,3],
		];
		
		var dataSH = [
			[91,45,125,0.82,34,23,1],
			[65,27,78,0.86,45,29,2],
			[83,60,84,1.09,73,27,3],
		];
		
		var lineStyle = {
			normal: {
				width: 1,
				opacity: 0.5
			}
		};
		
		option = {
			backgroundColor: '#161627',
			title: {
				text: 'AQI - 雷达图',
				left: 'center',
				textStyle: {
					color: '#eee'
				}
			},
			legend: {
				bottom: 5,
				data: ['北京', '上海', '广州'],
				itemGap: 20,
				textStyle: {
					color: '#fff',
					fontSize: 14
				},
				selectedMode: 'single'
			},
			// visualMap: {
			//     show: true,
			//     min: 0,
			//     max: 20,
			//     dimension: 6,
			//     inRange: {
			//         colorLightness: [0.5, 0.8]
			//     }
			// },
			radar: {
				indicator: [
					{name: 'AQI', max: 300},
					{name: 'PM2.5', max: 250},
					{name: 'PM10', max: 300},
					{name: 'CO', max: 5},
					{name: 'NO2', max: 200},
					{name: 'SO2', max: 100}
				],
				shape: 'circle',
				splitNumber: 5,
				name: {
					textStyle: {
						color: 'rgb(238, 197, 102)'
					}
				},
				splitLine: {
					lineStyle: {
						color: [
							'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
							'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
							'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
						].reverse()
					}
				},
				splitArea: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(238, 197, 102, 0.5)'
					}
				}
			},
			series: [
				{
					name: '北京',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataBJ,
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#F9713C'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.1
						}
					}
				},
				{
					name: '上海',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataSH,
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#B3E4A1'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.05
						}
					}
				},
				{
					name: '广州',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataGZ,
					symbol: 'none',
					itemStyle: {
						normal: {
							color: 'rgb(238, 197, 102)'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.05
						}
					}
				}
			]
		}`,0),
		
		



		echref('Radar Custom')+
		sceg(`option = {
			title: {
				text: '自定义雷达图'
			},
			legend: {
				data: ['图一','图二', '张三', '李四']
			},
			radar: [
				{
					indicator: [
						{ text: '指标一' },
						{ text: '指标二' },
						{ text: '指标三' },
						{ text: '指标四' },
						{ text: '指标五' }
					],
					center: ['25%', '50%'],
					radius: 120,
					startAngle: 90,
					splitNumber: 4,
					shape: 'circle',
					name: {
						formatter:'【{value}】',
						textStyle: {
							color:'#72ACD1'
						}
					},
					splitArea: {
						areaStyle: {
							color: ['rgba(114, 172, 209, 0.2)',
							'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
							'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
							shadowColor: 'rgba(0, 0, 0, 0.3)',
							shadowBlur: 10
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(255, 255, 255, 0.5)'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255, 255, 255, 0.5)'
						}
					}
				},
				{
					indicator: [
						{ text: '语文', max: 150 },
						{ text: '数学', max: 150 },
						{ text: '英语', max: 150 },
						{ text: '物理', max: 120 },
						{ text: '化学', max: 108 },
						{ text: '生物', max: 72 }
					],
					center: ['75%', '50%'],
					radius: 120
				}
			],
			series: [
				{
					name: '雷达图',
					type: 'radar',
					itemStyle: {
						emphasis: {
							// color: 各异,
							lineStyle: {
								width: 4
							}
						}
					},
					data: [
						{
							value: [100, 8, 0.40, -80, 2000],
							name: '图一',
							symbol: 'rect',
							symbolSize: 5,
							lineStyle: {
								normal: {
									type: 'dashed'
								}
							}
						},
						{
							value: [60, 5, 0.30, -100, 1500],
							name: '图二',
							areaStyle: {
								normal: {
									color: 'rgba(255, 255, 255, 0.5)'
								}
							}
						}
					]
				},
				{
					name: '成绩单',
					type: 'radar',
					radarIndex: 1,
					data: [
						{
							value: [120, 118, 130, 100, 99, 70],
							name: '张三',
							label: {
								normal: {
									show: true,
									formatter:function(params) {
										return params.value;
									}
								}
							}
						},
						{
							value: [90, 113, 140, 30, 70, 60],
							name: '李四',
							areaStyle: {
								normal: {
									opacity: 0.9,
									color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
										{
											color: '#B8D3E4',
											offset: 0
										},
										{
											color: '#72ACD1',
											offset: 1
										}
									])
								}
							}
						}
					]
				}
			]
		}`,0),
		

		echref('Radar Multiple')+
		sceg(`option = {
			title: {
				text: '多雷达图'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				x: 'center',
				data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
			},
			radar: [
				{
					indicator: [
						{text: '品牌', max: 100},
						{text: '内容', max: 100},
						{text: '可用性', max: 100},
						{text: '功能', max: 100}
					],
					center: ['25%','40%'],
					radius: 80
				},
				{
					indicator: [
						{text: '外观', max: 100},
						{text: '拍照', max: 100},
						{text: '系统', max: 100},
						{text: '性能', max: 100},
						{text: '屏幕', max: 100}
					],
					radius: 80,
					center: ['50%','60%'],
				},
				{
					indicator: (function (){
						var res = [];
						for (var i = 1; i <= 12; i++) {
							res.push({text:i+'月',max:100});
						}
						return res;
					})(),
					center: ['75%','40%'],
					radius: 80
				}
			],
			series: [
				{
					type: 'radar',
					 tooltip: {
						trigger: 'item'
					},
					itemStyle: {normal: {areaStyle: {type: 'default'}}},
					data: [
						{
							value: [60,73,85,40],
							name: '某软件'
						}
					]
				},
				{
					type: 'radar',
					radarIndex: 1,
					data: [
						{
							value: [85, 90, 90, 95, 95],
							name: '某主食手机'
						},
						{
							value: [95, 80, 95, 90, 93],
							name: '某水果手机'
						}
					]
				},
				{
					type: 'radar',
					radarIndex: 2,
					itemStyle: {normal: {areaStyle: {type: 'default'}}},
					data: [
						{
							name: '降水量',
							value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
						},
						{
							name:'蒸发量',
							value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
						}
					]
				}
			]
		}`,0),





		echref('Radar2')+
		sceg(`option = {
			title: {
				text: '浏览器占比变化',
				subtext: '纯属虚构',
				top: 10,
				left: 10
			},
			tooltip: {
				trigger: 'item',
				backgroundColor : 'rgba(0,0,250,0.2)'
			},
			legend: {
				type: 'scroll',
				bottom: 10,
				data: (function (){
					var list = [];
					for (var i = 1; i <=28; i++) {
						list.push(i + 2000 + '');
					}
					return list;
				})()
			},
			visualMap: {
				top: 'middle',
				right: 10,
				color: ['red', 'yellow'],
				calculable: true
			},
			radar: {
			   indicator : [
				   { text: 'IE8-', max: 400},
				   { text: 'IE9+', max: 400},
				   { text: 'Safari', max: 400},
				   { text: 'Firefox', max: 400},
				   { text: 'Chrome', max: 400}
				]
			},
			series : (function (){
				var series = [];
				for (var i = 1; i <= 28; i++) {
					series.push({
						name:'浏览器（数据纯属虚构）',
						type: 'radar',
						symbol: 'none',
						lineStyle: {
							width: 1
						},
						emphasis: {
							areaStyle: {
								color: 'rgba(0,250,0,0.3)'
							}
						},
						data:[
						  {
							value:[
								(40 - i) * 10,
								(38 - i) * 4 + 60,
								i * 5 + 10,
								i * 9,
								i * i /2
							],
							name: i + 2000 + ''
						  }
						]
					});
				}
				return series;
			})()
		}`,0),





			].join(br)
		),




	detail('【热力图】Heatmap',[
		echref('Heatmap-Cartesian')+
		sceg(`var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
			'7a', '8a', '9a','10a','11a',
			'12p', '1p', '2p', '3p', '4p', '5p',
			'6p', '7p', '8p', '9p', '10p', '11p'];
			var days = ['Saturday', 'Friday', 'Thursday',
					'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

			var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

			data = data.map(function (item) {
				return [item[1], item[0], item[2] || '-'];
			});

			option = {
				tooltip: {
					position: 'top'
				},
				animation: false,
				grid: {
					height: '50%',
					y: '10%'
				},
				xAxis: {
					type: 'category',
					data: hours,
					splitArea: {
						show: true
					}
				},
				yAxis: {
					type: 'category',
					data: days,
					splitArea: {
						show: true
					}
				},
				visualMap: {
					min: 0,
					max: 10,
					calculable: true,
					orient: 'horizontal',
					left: 'center',
					bottom: '15%'
				},
				series: [{
					name: 'Punch Card',
					type: 'heatmap',
					data: data,
					label: {
						normal: {
							show: true
						}
					},
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}]
			}`,0),

		echref('Heatmap-Large'),
		echref('Heatmap-Large Piecewise')+
		sceg(`
		var noise = getNoiseHelper();
		var xData = [];
		var yData = [];
		noise.seed(Math.random());
		function generateData(theta, min, max) {
			var data = [];
			for (var i = 0; i <= 20; i++) {
				for (var j = 0; j <= 100; j++) {
					// var x = (max - min) * i / 200 + min;
					// var y = (max - min) * j / 100 + min;
					data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
					// data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
				}
				xData.push(i);
			}
			for (var j = 0; j < 100; j++) {
				yData.push(j);
			}
			return data;
		}
		var data = generateData(2, -5, 5);
		
		option = {
			tooltip: {},
			grid: {
				right: 10,
				left: 140
			},
			xAxis: {
				type: 'category',
				data: xData
			},
			yAxis: {
				type: 'category',
				data: yData
			},
			visualMap: {
				type: 'piecewise',
				min: 0,
				max: 1,
				calculable: true,
				realtime: false,
				splitNumber: 8,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			series: [{
				name: 'Gaussian',
				type: 'heatmap',
				data: data,
				itemStyle: {
					emphasis: {
						borderColor: '#333',
						borderWidth: 1
					}
				},
				progressive: 1000,
				animation: false
			}]
		};
		
		
		
		///////////////////////////////////////////////////////////////////////////
		// Simplex and perlin noise helper from https://github.com/josephg/noisejs
		///////////////////////////////////////////////////////////////////////////
		function getNoiseHelper(global) {
		
		  var module = {};
		
		  function Grad(x, y, z) {
			this.x = x; this.y = y; this.z = z;
		  }
		
		  Grad.prototype.dot2 = function(x, y) {
			return this.x*x + this.y*y;
		  };
		
		  Grad.prototype.dot3 = function(x, y, z) {
			return this.x*x + this.y*y + this.z*z;
		  };
		
		  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
					   new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
					   new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];
		
		  var p = [151,160,137,91,90,15,225,140,36,103,30,69,142,8];
		  // To remove the need for index wrapping, double the permutation table length
		  var perm = new Array(512);
		  var gradP = new Array(512);
		
		  // This isn't a very good seeding function, but it works ok. It supports 2^16
		  // different seed values. Write something better if you need more seeds.
		  module.seed = function(seed) {
			if(seed > 0 && seed < 1) {
			  // Scale the seed out
			  seed *= 65536;
			}
		
			seed = Math.floor(seed);
			if(seed < 256) {
			  seed |= seed << 8;
			}
		
			for(var i = 0; i < 256; i++) {
			  var v;
			  if (i & 1) {
				v = p[i] ^ (seed & 255);
			  } else {
				v = p[i] ^ ((seed>>8) & 255);
			  }
		
			  perm[i] = perm[i + 256] = v;
			  gradP[i] = gradP[i + 256] = grad3[v % 12];
			}
		  };
		
		  module.seed(0);
		
		  /*
		  for(var i=0; i<256; i++) {
			perm[i] = perm[i + 256] = p[i];
			gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
		  }*/
		
		  // Skewing and unskewing factors for 2, 3, and 4 dimensions
		  var F2 = 0.5*(Math.sqrt(3)-1);
		  var G2 = (3-Math.sqrt(3))/6;
		
		  var F3 = 1/3;
		  var G3 = 1/6;
		
		  // 2D simplex noise
		  module.simplex2 = function(xin, yin) {
			var n0, n1, n2; // Noise contributions from the three corners
			// Skew the input space to determine which simplex cell we're in
			var s = (xin+yin)*F2; // Hairy factor for 2D
			var i = Math.floor(xin+s);
			var j = Math.floor(yin+s);
			var t = (i+j)*G2;
			var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
			var y0 = yin-j+t;
			// For the 2D case, the simplex shape is an equilateral triangle.
			// Determine which simplex we are in.
			var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
			if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
			  i1=1; j1=0;
			} else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
			  i1=0; j1=1;
			}
			// A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
			// a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
			// c = (3-sqrt(3))/6
			var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
			var y1 = y0 - j1 + G2;
			var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
			var y2 = y0 - 1 + 2 * G2;
			// Work out the hashed gradient indices of the three simplex corners
			i &= 255;
			j &= 255;
			var gi0 = gradP[i+perm[j]];
			var gi1 = gradP[i+i1+perm[j+j1]];
			var gi2 = gradP[i+1+perm[j+1]];
			// Calculate the contribution from the three corners
			var t0 = 0.5 - x0*x0-y0*y0;
			if(t0<0) {
			  n0 = 0;
			} else {
			  t0 *= t0;
			  n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
			}
			var t1 = 0.5 - x1*x1-y1*y1;
			if(t1<0) {
			  n1 = 0;
			} else {
			  t1 *= t1;
			  n1 = t1 * t1 * gi1.dot2(x1, y1);
			}
			var t2 = 0.5 - x2*x2-y2*y2;
			if(t2<0) {
			  n2 = 0;
			} else {
			  t2 *= t2;
			  n2 = t2 * t2 * gi2.dot2(x2, y2);
			}
			// Add contributions from each corner to get the final noise value.
			// The result is scaled to return values in the interval [-1,1].
			return 70 * (n0 + n1 + n2);
		  };
		
		  // 3D simplex noise
		  module.simplex3 = function(xin, yin, zin) {
			var n0, n1, n2, n3; // Noise contributions from the four corners
		
			// Skew the input space to determine which simplex cell we're in
			var s = (xin+yin+zin)*F3; // Hairy factor for 2D
			var i = Math.floor(xin+s);
			var j = Math.floor(yin+s);
			var k = Math.floor(zin+s);
		
			var t = (i+j+k)*G3;
			var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
			var y0 = yin-j+t;
			var z0 = zin-k+t;
		
			// For the 3D case, the simplex shape is a slightly irregular tetrahedron.
			// Determine which simplex we are in.
			var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
			var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
			if(x0 >= y0) {
			  if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
			  else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
			  else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
			} else {
			  if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
			  else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
			  else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
			}
			// A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
			// a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
			// a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
			// c = 1/6.
			var x1 = x0 - i1 + G3; // Offsets for second corner
			var y1 = y0 - j1 + G3;
			var z1 = z0 - k1 + G3;
		
			var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
			var y2 = y0 - j2 + 2 * G3;
			var z2 = z0 - k2 + 2 * G3;
		
			var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
			var y3 = y0 - 1 + 3 * G3;
			var z3 = z0 - 1 + 3 * G3;
		
			// Work out the hashed gradient indices of the four simplex corners
			i &= 255;
			j &= 255;
			k &= 255;
			var gi0 = gradP[i+   perm[j+   perm[k   ]]];
			var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
			var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
			var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];
		
			// Calculate the contribution from the four corners
			var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
			if(t0<0) {
			  n0 = 0;
			} else {
			  t0 *= t0;
			  n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
			}
			var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
			if(t1<0) {
			  n1 = 0;
			} else {
			  t1 *= t1;
			  n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
			}
			var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
			if(t2<0) {
			  n2 = 0;
			} else {
			  t2 *= t2;
			  n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
			}
			var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
			if(t3<0) {
			  n3 = 0;
			} else {
			  t3 *= t3;
			  n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
			}
			// Add contributions from each corner to get the final noise value.
			// The result is scaled to return values in the interval [-1,1].
			return 32 * (n0 + n1 + n2 + n3);
		
		  };
		
		  // ##### Perlin noise stuff
		
		  function fade(t) {
			return t*t*t*(t*(t*6-15)+10);
		  }
		
		  function lerp(a, b, t) {
			return (1-t)*a + t*b;
		  }
		
		  // 2D Perlin Noise
		  module.perlin2 = function(x, y) {
			// Find unit grid cell containing point
			var X = Math.floor(x), Y = Math.floor(y);
			// Get relative xy coordinates of point within that cell
			x = x - X; y = y - Y;
			// Wrap the integer cells at 255 (smaller integer period can be introduced here)
			X = X & 255; Y = Y & 255;
		
			// Calculate noise contributions from each of the four corners
			var n00 = gradP[X+perm[Y]].dot2(x, y);
			var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
			var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
			var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);
		
			// Compute the fade curve value for x
			var u = fade(x);
		
			// Interpolate the four results
			return lerp(
				lerp(n00, n10, u),
				lerp(n01, n11, u),
			   fade(y));
		  };
		
		  // 3D Perlin Noise
		  module.perlin3 = function(x, y, z) {
			// Find unit grid cell containing point
			var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
			// Get relative xyz coordinates of point within that cell
			x = x - X; y = y - Y; z = z - Z;
			// Wrap the integer cells at 255 (smaller integer period can be introduced here)
			X = X & 255; Y = Y & 255; Z = Z & 255;
		
			// Calculate noise contributions from each of the eight corners
			var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
			var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
			var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
			var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
			var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
			var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
			var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
			var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);
		
			// Compute the fade curve value for x, y, z
			var u = fade(x);
			var v = fade(y);
			var w = fade(z);
		
			// Interpolate
			return lerp(
				lerp(
				  lerp(n000, n100, u),
				  lerp(n001, n101, u), w),
				lerp(
				  lerp(n010, n110, u),
				  lerp(n011, n111, u), w),
			   v);
		  };
		
		
		  return module;
		}`,0),

		echref('Heatmap-Cartesian')+
		sceg(`o={
		}`,0),

		echref('Heatmap-Cartesian')+
		sceg(`o={
		}`,0),

	].join(br)
	),


	detail('【桑基图】Sankey',[
		echref('Sankey Simple')+
		sceg(`option = {
			series: {
				type: 'sankey',
				layout:'none',
				focusNodeAdjacency: 'allEdges',
				data: [{
					name: 'a'
				}, {
					name: 'b'
				}, {
					name: 'a1'
				}, {
					name: 'a2'
				}, {
					name: 'b1'
				}, {
					name: 'c'
				}],
				links: [{
					source: 'a',
					target: 'a1',
					value: 5
				}, {
					source: 'a',
					target: 'a2',
					value: 3
				}, {
					source: 'b',
					target: 'b1',
					value: 8
				}, {
					source: 'a',
					target: 'b1',
					value: 3
				}, {
					source: 'b1',
					target: 'a1',
					value: 1
				}, {
					source: 'b1',
					target: 'c',
					value: 2
				}]
			}
		}`,0),



		echref('Sankey Vertical')+
		sceg(`option = {
			color: [
				'#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'
			],
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			animation: false,
			series: [
				{
					type: 'sankey',
					bottom: '10%',
					focusNodeAdjacency: 'allEdges',
					data: [
						{name: 'a'},
						{name: 'b'},
						{name: 'a1'},
						{name: 'b1'},
						{name: 'c'},
						{name: 'e'}
					],
					links: [
						{source: 'a', target: 'a1', value: 5},
						{source: 'e', target: 'b', value: 3},
						{source: 'a', target: 'b1', value: 3},
						{source: 'b1', target: 'a1', value: 1},
						{source: 'b1', target: 'c', value: 2},
						{source: 'b', target: 'c', value: 1}
					],
					//orient: 'vertical',
					label: {
						position: 'top'
					},
					lineStyle: {
						normal: {
							color: 'source',
							curveness: 0.5
						}
					}
				}
			]
		}`,0),




		echref('Align Left','','sankey-nodeAlign-left'),
		echref('Align Right','','sankey-nodeAlign-right'),

		echref('Sankey Levels'),


		echref('Sankey Itemstyle'),


		echref('Sankey Energy'),


	].join(br)
	),

	
	detail('【漏斗图】Funnel',[
		echref('Funnel')+
		sceg(`option = {
			title: {
				text: '漏斗图',
				subtext: '纯属虚构'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			toolbox: {
				feature: {
					dataView: {readOnly: false},
					restore: {},
					saveAsImage: {}
				}
			},
			legend: {
				data: ['展现','点击','访问','咨询','订单']
			},
			calculable: true,
			series: [
				{
					name:'漏斗图',
					type:'funnel',
					left: '10%',
					top: 60,
					//x2: 80,
					bottom: 60,
					width: '80%',
					// height: {totalHeight} - y - y2,
					min: 0,
					max: 100,
					minSize: '0%',
					maxSize: '100%',
					sort: 'descending',
					gap: 2,
					label: {
						show: true,
						position: 'inside'
					},
					labelLine: {
						length: 10,
						lineStyle: {
							width: 1,
							type: 'solid'
						}
					},
					itemStyle: {
						borderColor: '#fff',
						borderWidth: 1
					},
					emphasis: {
						label: {
							fontSize: 20
						}
					},
					data: [
						{value: 60, name: '访问'},
						{value: 40, name: '咨询'},
						{value: 20, name: '订单'},
						{value: 80, name: '点击'},
						{value: 100, name: '展现'}
					]
				}
			]
		}`,0),


		echref('Funnel Align')+
		sceg(`option = {
			title: {
				text: '漏斗图(对比)',
				subtext: '纯属虚构',
				left: 'left',
				top: 'bottom'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				top: 'center',
				feature: {
					dataView: {readOnly: false},
					restore: {},
					saveAsImage: {}
				}
			},
			legend: {
				orient: 'vertical',
				left: 'left',
				data: ['产品A','产品B','产品C','产品D','产品E']
			},
			calculable: true,
			series: [
				{
					name: '漏斗图',
					type: 'funnel',
					width: '40%',
					height: '45%',
					left: '5%',
					top: '50%',
					funnelAlign: 'right',
		
					center: ['25%', '25%'],  // for pie
		
					data:[
						{value:60, name:'产品C'},
						{value:30, name:'产品D'},
						{value:10, name:'产品E'},
						{value:80, name:'产品B'},
						{value:100, name:'产品A'}
					]
				},
				{
					name: '金字塔',
					type:'funnel',
					width: '40%',
					height: '45%',
					left: '5%',
					top: '5%',
					sort: 'ascending',
					funnelAlign: 'right',
		
					center: ['25%', '75%'],  // for pie
		
					data:[
						{value:60, name:'产品C'},
						{value:30, name:'产品D'},
						{value:10, name:'产品E'},
						{value:80, name:'产品B'},
						{value:100, name:'产品A'}
					]
				},
				{
					name:'漏斗图',
					type:'funnel',
					width: '40%',
					height: '45%',
					left: '55%',
					top: '5%',
					funnelAlign: 'left',
		
					center: ['75%', '25%'],  // for pie
		
					data: [
						{value: 60, name: '产品C'},
						{value: 30, name: '产品D'},
						{value: 10, name: '产品E'},
						{value: 80, name: '产品B'},
						{value: 100, name: '产品A'}
					]
				},
				{
					name: '金字塔',
					type:'funnel',
					width: '40%',
					height: '45%',
					left: '55%',
					top: '50%',
					sort: 'ascending',
					funnelAlign: 'left',
		
					center: ['75%', '75%'],  // for pie
		
					data: [
						{value: 60, name: '产品C'},
						{value: 30, name: '产品D'},
						{value: 10, name: '产品E'},
						{value: 80, name: '产品B'},
						{value: 100, name: '产品A'}
					]
				}
			]
		}`,0),


		echref('Funnel Multiple')+
		sceg(`option = {
			title: {
				text: '漏斗图',
				subtext: '纯属虚构',
				left: 'left',
				top: 'bottom'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			toolbox: {
				orient: 'vertical',
				top: 'center',
				feature: {
					dataView: {readOnly: false},
					restore: {},
					saveAsImage: {}
				}
			},
			legend: {
				orient: 'vertical',
				left: 'left',
				data: ['展现','点击','访问','咨询','订单']
			},
			calculable: true,
			series: [
				{
					name: '漏斗图',
					type: 'funnel',
					width: '40%',
					height: '45%',
					left: '5%',
					top: '50%',
					data:[
						{value: 60, name:'访问'},
						{value: 30, name:'咨询'},
						{value: 10, name:'订单'},
						{value: 80, name:'点击'},
						{value: 100, name:'展现'}
					]
				},
				{
					name: '金字塔',
					type: 'funnel',
					width: '40%',
					height: '45%',
					left: '5%',
					top: '5%',
					sort: 'ascending',
					data:[
						{value: 60, name:'访问'},
						{value: 30, name:'咨询'},
						{value: 10, name:'订单'},
						{value: 80, name:'点击'},
						{value: 100, name:'展现'}
					]
				},
				{
					name: '漏斗图',
					type:'funnel',
					width: '40%',
					height: '45%',
					left: '55%',
					top: '5%',
					label: {
						normal: {
							position: 'left'
						}
					},
					data:[
						{value: 60, name: '访问'},
						{value: 30, name: '咨询'},
						{value: 10, name: '订单'},
						{value: 80, name: '点击'},
						{value: 100, name: '展现'}
					]
				},
				{
					name: '金字塔',
					type:'funnel',
					width: '40%',
					height: '45%',
					left: '55%',
					top: '50%',
					sort: 'ascending',
					label: {
						normal: {
							position: 'left'
						}
					},
					data:[
						{value: 60, name: '访问'},
						{value: 30, name: '咨询'},
						{value: 10, name: '订单'},
						{value: 80, name: '点击'},
						{value: 100, name: '展现'}
					]
				}
			]
		}`,0),

		echref('Funnel Customize')+
		sceg(`option = {
			title: {
				text: '漏斗图',
				subtext: '纯属虚构'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			toolbox: {
				feature: {
					dataView: {readOnly: false},
					restore: {},
					saveAsImage: {}
				}
			},
			legend: {
				data: ['展现','点击','访问','咨询','订单']
			},
			series: [
				{
					name: '预期',
					type: 'funnel',
					left: '10%',
					width: '80%',
					label: {
						normal: {
							formatter: '{b}预期'
						},
						emphasis: {
							position:'inside',
							formatter: '{b}预期: {c}%'
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							opacity: 0.7
						}
					},
					data: [
						{value: 60, name: '访问'},
						{value: 40, name: '咨询'},
						{value: 20, name: '订单'},
						{value: 80, name: '点击'},
						{value: 100, name: '展现'}
					]
				},
				{
					name: '实际',
					type: 'funnel',
					left: '10%',
					width: '80%',
					maxSize: '80%',
					label: {
						normal: {
							position: 'inside',
							formatter: '{c}%',
							textStyle: {
								color: '#fff'
							}
						},
						emphasis: {
							position:'inside',
							formatter: '{b}实际: {c}%'
						}
					},
					itemStyle: {
						normal: {
							opacity: 0.5,
							borderColor: '#fff',
							borderWidth: 2
						}
					},
					data: [
						{value: 30, name: '访问'},
						{value: 10, name: '咨询'},
						{value: 5, name: '订单'},
						{value: 50, name: '点击'},
						{value: 80, name: '展现'}
					]
				}
			]
		}`,0),

	].join(br)
	),


	detail('【仪表盘】Gauge',[
		echref('Gauge')+
		sceg(`option = {
			tooltip : {
				formatter: "{a} <br/>{b} : {c}%"
			},
			toolbox: {
				feature: {
					restore: {},
					saveAsImage: {}
				}
			},
			series: [
				{
					name: '业务指标',
					type: 'gauge',
					detail: {formatter:'{value}%'},
					data: [{value:75, name: '完成率'}]
				}
			]
		}`,0),

		echref('Gauge-Car')+
		sceg(`option = {
			tooltip : {
				formatter: "{a} <br/>{c} {b}"
			},
			toolbox: {
				show: true,
				feature: {
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			series : [
				{
					name: '速度',
					type: 'gauge',
					z: 3,
					min: 0,
					max: 220,
					splitNumber: 11,
					radius: '50%',
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							width: 10
						}
					},
					axisTick: {            // 坐标轴小标记
						length: 15,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle控制线条样式
							color: 'auto'
						}
					},
					splitLine: {           // 分隔线
						length: 20,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							color: 'auto'
						}
					},
					axisLabel: {
						backgroundColor: 'auto',
						borderRadius: 2,
						color: '#eee',
						padding: 3,
						textShadowBlur: 2,
						textShadowOffsetX: 1,
						textShadowOffsetY: 1,
						textShadowColor: '#222'
					},
					title : {
						// 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						fontSize: 20,
						fontStyle: 'italic'
					},
					detail : {
						// 其余属性默认使用全局文本样式，详见TEXTSTYLE
						formatter: function (value) {
							value = (value + '').split('.');
							value.length < 2 && (value.push('00'));
							return ('00' + value[0]).slice(-2)
								+ '.' + (value[1] + '00').slice(0, 2);
						},
						fontWeight: 'bolder',
						borderRadius: 3,
						backgroundColor: '#444',
						borderColor: '#aaa',
						shadowBlur: 5,
						shadowColor: '#333',
						shadowOffsetX: 0,
						shadowOffsetY: 3,
						borderWidth: 2,
						textBorderColor: '#000',
						textBorderWidth: 2,
						textShadowBlur: 2,
						textShadowColor: '#fff',
						textShadowOffsetX: 0,
						textShadowOffsetY: 0,
						fontFamily: 'Arial',
						width: 100,
						color: '#eee',
						rich: {}
					},
					data:[{value: 40, name: 'km/h'}]
				},
				{
					name: '转速',
					type: 'gauge',
					center: ['20%', '55%'],    // 默认全局居中
					radius: '35%',
					min:0,
					max:7,
					endAngle:45,
					splitNumber:7,
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							width: 8
						}
					},
					axisTick: {            // 坐标轴小标记
						length:12,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle控制线条样式
							color: 'auto'
						}
					},
					splitLine: {           // 分隔线
						length:20,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							color: 'auto'
						}
					},
					pointer: {
						width:5
					},
					title: {
						offsetCenter: [0, '-30%'],       // x, y，单位px
					},
					detail: {
						// 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					},
					data:[{value: 1.5, name: 'x1000 r/min'}]
				},
				{
					name: '油表',
					type: 'gauge',
					center: ['77%', '50%'],    // 默认全局居中
					radius: '25%',
					min: 0,
					max: 2,
					startAngle: 135,
					endAngle: 45,
					splitNumber: 2,
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							width: 8
						}
					},
					axisTick: {            // 坐标轴小标记
						splitNumber: 5,
						length: 10,        // 属性length控制线长
						lineStyle: {        // 属性lineStyle控制线条样式
							color: 'auto'
						}
					},
					axisLabel: {
						formatter:function(v){
							switch (v + '') {
								case '0' : return 'E';
								case '1' : return 'Gas';
								case '2' : return 'F';
							}
						}
					},
					splitLine: {           // 分隔线
						length: 15,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							color: 'auto'
						}
					},
					pointer: {
						width:2
					},
					title : {
						show: false
					},
					detail : {
						show: false
					},
					data:[{value: 0.5, name: 'gas'}]
				},
				{
					name: '水表',
					type: 'gauge',
					center : ['77%', '50%'],    // 默认全局居中
					radius : '25%',
					min: 0,
					max: 2,
					startAngle: 315,
					endAngle: 225,
					splitNumber: 2,
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							width: 8
						}
					},
					axisTick: {            // 坐标轴小标记
						show: false
					},
					axisLabel: {
						formatter:function(v){
							switch (v + '') {
								case '0' : return 'H';
								case '1' : return 'Water';
								case '2' : return 'C';
							}
						}
					},
					splitLine: {           // 分隔线
						length: 15,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							color: 'auto'
						}
					},
					pointer: {
						width:2
					},
					title: {
						show: false
					},
					detail: {
						show: false
					},
					data:[{value: 0.5, name: 'gas'}]
				}
			]
		}`,0),


		echref('Gauge-Car Dark')+
		sceg(`option = {
			backgroundColor: '#1b1b1b',
			tooltip : {
				formatter: "{a} <br/>{c} {b}"
			},
			toolbox: {
				show : true,
				feature : {
					mark : {show: true},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			series : [
				{
					name:'速度',
					type:'gauge',
					min:0,
					max:220,
					splitNumber:11,
					radius: '50%',
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
							width: 3,
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisLabel: {            // 坐标轴小标记
						textStyle: {       // 属性lineStyle控制线条样式
							fontWeight: 'bolder',
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisTick: {            // 坐标轴小标记
						length :15,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle控制线条样式
							color: 'auto',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					splitLine: {           // 分隔线
						length :25,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							width:3,
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					pointer: {           // 分隔线
						shadowColor : '#fff', //默认透明
						shadowBlur: 5
					},
					title : {
						textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight: 'bolder',
							fontSize: 20,
							fontStyle: 'italic',
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					detail : {
						backgroundColor: 'rgba(30,144,255,0.8)',
						borderWidth: 1,
						borderColor: '#fff',
						shadowColor : '#fff', //默认透明
						shadowBlur: 5,
						offsetCenter: [0, '50%'],       // x, y，单位px
						textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight: 'bolder',
							color: '#fff'
						}
					},
					data:[{value: 40, name: 'km/h'}]
				},
				{
					name:'转速',
					type:'gauge',
					center : ['25%', '55%'],    // 默认全局居中
					radius : '30%',
					min:0,
					max:7,
					endAngle:45,
					splitNumber:7,
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
							width: 2,
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisLabel: {            // 坐标轴小标记
						textStyle: {       // 属性lineStyle控制线条样式
							fontWeight: 'bolder',
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisTick: {            // 坐标轴小标记
						length :12,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle控制线条样式
							color: 'auto',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					splitLine: {           // 分隔线
						length :20,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							width:3,
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					pointer: {
						width:5,
						shadowColor : '#fff', //默认透明
						shadowBlur: 5
					},
					title : {
						offsetCenter: [0, '-30%'],       // x, y，单位px
						textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight: 'bolder',
							fontStyle: 'italic',
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					detail : {
						//backgroundColor: 'rgba(30,144,255,0.8)',
					   // borderWidth: 1,
						borderColor: '#fff',
						shadowColor : '#fff', //默认透明
						shadowBlur: 5,
						width: 80,
						height:30,
						offsetCenter: [25, '20%'],       // x, y，单位px
						textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight: 'bolder',
							color: '#fff'
						}
					},
					data:[{value: 1.5, name: 'x1000 r/min'}]
				},
				{
					name:'油表',
					type:'gauge',
					center : ['75%', '50%'],    // 默认全局居中
					radius : '30%',
					min:0,
					max:2,
					startAngle:135,
					endAngle:45,
					splitNumber:2,
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
							width: 2,
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisTick: {            // 坐标轴小标记
						length :12,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle控制线条样式
							color: 'auto',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisLabel: {
						textStyle: {       // 属性lineStyle控制线条样式
							fontWeight: 'bolder',
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						},
						formatter:function(v){
							switch (v + '') {
								case '0' : return 'E';
								case '1' : return 'Gas';
								case '2' : return 'F';
							}
						}
					},
					splitLine: {           // 分隔线
						length :15,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							width:3,
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					pointer: {
						width:2,
						shadowColor : '#fff', //默认透明
						shadowBlur: 5
					},
					title : {
						show: false
					},
					detail : {
						show: false
					},
					data:[{value: 0.5, name: 'gas'}]
				},
				{
					name:'水表',
					type:'gauge',
					center : ['75%', '50%'],    // 默认全局居中
					radius : '30%',
					min:0,
					max:2,
					startAngle:315,
					endAngle:225,
					splitNumber:2,
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
							width: 2,
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					axisTick: {            // 坐标轴小标记
						show: false
					},
					axisLabel: {
						textStyle: {       // 属性lineStyle控制线条样式
							fontWeight: 'bolder',
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						},
						formatter:function(v){
							switch (v + '') {
								case '0' : return 'H';
								case '1' : return 'Water';
								case '2' : return 'C';
							}
						}
					},
					splitLine: {           // 分隔线
						length :15,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							width:3,
							color: '#fff',
							shadowColor : '#fff', //默认透明
							shadowBlur: 10
						}
					},
					pointer: {
						width:2,
						shadowColor : '#fff', //默认透明
						shadowBlur: 5
					},
					title : {
						show: false
					},
					detail : {
						show: false
					},
					data:[{value: 0.5, name: 'gas'}]
				}
			]
		}`,0),

	].join(br)
	),


	detail('【日历】Calendar',[
		echref('Calendar Simple')+
		sceg(`function getVirtulData(year) {
			year = year || '2019';
			var date = +echarts.number.parseDate(year + '-01-01');
			var end = +echarts.number.parseDate(year + '-12-31');
			var dayTime = 3600 * 24 * 1000;
			var data = [];
			for (var time = date; time <= end; time += dayTime) {
				data.push([
					echarts.format.formatTime('yyyy-MM-dd', time),
					Math.floor(Math.random() * 10000)
				]);
			}
			return data;
		}
		
		option = {
			visualMap: {
				show: false,
				min: 0,
				max: 10000
			},
			calendar: {
				range: '2019'
			},
			series: {
				type: 'heatmap',
				coordinateSystem: 'calendar',
				data: getVirtulData(2019)
			}
		}`,0),




		echref('Calendar Horizontal')+
		sceg(`function getVirtulData(year) {
			year = year || '2019';
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
			tooltip: {
				position: 'top'
			},
			visualMap: {
				min: 0,
				max: 1000,
				calculable: true,
				orient: 'horizontal',
				left: 'center',
				top: 'top'
			},
		
			calendar: [
			{
				range: '2019',
				cellSize: ['auto', 20]
			},
			{
				top: 260,
				range: '2018',
				cellSize: ['auto', 20]
			},
			{
				top: 450,
				range: '2017',
				cellSize: ['auto', 20],
				right: 5
			}],
		
			series: [{
				type: 'heatmap',
				coordinateSystem: 'calendar',
				calendarIndex: 0,
				data: getVirtulData(2019)
			}, {
				type: 'heatmap',
				coordinateSystem: 'calendar',
				calendarIndex: 1,
				data: getVirtulData(2018)
			}, {
				type: 'heatmap',
				coordinateSystem: 'calendar',
				calendarIndex: 2,
				data: getVirtulData(2017)
			}]
		
		}`,0),





		echref('Calendar Vertical')+
		sceg(`function getVirtulData(year) {
			year = year || '2019';
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
			tooltip: {
				position: 'top',
				formatter: function (p) {
					var format = echarts.format.formatTime('yyyy-MM-dd', p.data[0]);
					return format + ': ' + p.data[1];
				}
			},
			visualMap: {
				min: 0,
				max: 1000,
				calculable: true,
				orient: 'vertical',
				left: '670',
				top: 'center'
			},
		
			calendar: [
			{
				orient: 'vertical',
				range: '2017'
			},
			{
				left: 300,
				orient: 'vertical',
				range: '2018'
			},
			{
				left: 520,
				cellSize: [20, 'auto'],
				bottom: 10,
				orient: 'vertical',
				range: '2019',
				dayLabel: {
					margin: 5
				}
			}],
		
			series: [{
				type: 'heatmap',
				coordinateSystem: 'calendar',
				calendarIndex: 0,
				data: getVirtulData(2017)
			}, {
				type: 'heatmap',
				coordinateSystem: 'calendar',
				calendarIndex: 1,
				data: getVirtulData(2018)
			}, {
				type: 'heatmap',
				coordinateSystem: 'calendar',
				calendarIndex: 2,
				data: getVirtulData(2019)
			}]
		}`,0),





		echref('Calendar Charts')+
		sceg(`function getVirtulData(year) {
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
		
		var graphData = [
			[
				1485878400000,
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
				1487779200000,
				411
			],
			[
				1488124800000,
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
		
		option = {
			tooltip: {
				position: 'top'
			},
		
			visualMap: [{
				min: 0,
				max: 1000,
				calculable: true,
				seriesIndex: [2, 3, 4],
				orient: 'horizontal',
				left: '55%',
				bottom: 20
			}, {
				min: 0,
				max: 1000,
				inRange: {
					color: ['grey'],
					opacity: [0, 0.3]
				},
				controller: {
					inRange: {
						opacity: [0.3, 0.6]
					},
					outOfRange: {
						color: '#ccc'
					}
				},
				calculable: true,
				seriesIndex: [1],
				orient: 'horizontal',
				left: '10%',
				bottom: 20
			}],
		
			calendar: [
			{
				orient: 'vertical',
				yearLabel: {
					margin: 40
				},
				monthLabel: {
					nameMap: 'cn',
					margin: 20
				},
				dayLabel: {
					firstDay: 1,
					nameMap: 'cn'
				},
				cellSize: 40,
				range: '2017-02'
			},
			{
				orient: 'vertical',
				yearLabel: {
					margin: 40
				},
				monthLabel: {
					margin: 20
				},
				cellSize: 40,
				left: 460,
				range: '2017-01'
			},
			{
				orient: 'vertical',
				yearLabel: {
					margin: 40
				},
				monthLabel: {
					margin: 20
				},
				cellSize: 40,
				top: 350,
				range: '2017-03'
			},
			{
				orient: 'vertical',
				yearLabel: {
					margin: 40
				},
				dayLabel: {
					firstDay: 1,
					nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
				},
				monthLabel: {
					nameMap: 'cn',
					margin: 20
				},
				cellSize: 40,
				top: 350,
				left: 460,
				range: '2017-04'
			}],
		
			series: [{
				type: 'graph',
				edgeSymbol: ['none', 'arrow'],
				coordinateSystem: 'calendar',
				links: links,
				symbolSize: 10,
				calendarIndex: 0,
				data: graphData
			}, {
				type: 'heatmap',
				coordinateSystem: 'calendar',
				data: getVirtulData(2017)
			}, {
				type: 'effectScatter',
				coordinateSystem: 'calendar',
				calendarIndex: 1,
				symbolSize: function (val) {
					return val[1] / 40;
				},
				data: getVirtulData(2017)
			}, {
				type: 'scatter',
				coordinateSystem: 'calendar',
				calendarIndex: 2,
				symbolSize: function (val) {
					return val[1] / 60;
				},
				data: getVirtulData(2017)
			}, {
				type: 'heatmap',
				coordinateSystem: 'calendar',
				calendarIndex: 3,
				data: getVirtulData(2017)
			}]
		}`,0),
	


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
	




		'日历饼图'+echref('Calendar Pie')+
		sceg(`var cellSize = [80, 80];
		var pieRadius = 30;
			var pieInitialized;
			sTo(function () {
				pieInitialized = true;
				myChart.setOption({
					series: getPieSeries(scatterData, myChart)
				});
		
			myChart.onresize=function () {
				if (pieInitialized) {
					myChart.setOption({
						series: getPieSeriesUpdate(scatterData, myChart)
					});
				}
			};
		
			}, 10);
		
		function getVirtulData() {
			var date = +echarts.number.parseDate('2020-02-01');
			var end = +echarts.number.parseDate('2020-03-01');
			var dayTime = 3600 * 24 * 1000;
			var data = [];
			for (var time = date; time < end; time += dayTime) {
				data.push([
					echarts.format.formatTime('yyyy-MM-dd', time),
					Math.floor(Math.random() * 10000)
				]);
			}
			return data;
		}
		
		function getPieSeries(scatterData, chart) {
			return echarts.util.map(scatterData, function (item, index) {
				var center = chart.convertToPixel('calendar', item);
				return {
					id: index + 'pie',
					type: 'pie',
					center: center,
					label: {
						normal: {
							formatter: '{c}',
							position: 'inside'
						}
					},
					radius: pieRadius,
					data: [
						{name: '工作', value: Math.round(Math.random() * 24)},
						{name: '娱乐', value: Math.round(Math.random() * 24)},
						{name: '睡觉', value: Math.round(Math.random() * 24)}
					]
				};
			});
		}
		
		function getPieSeriesUpdate(scatterData, chart) {
			return echarts.util.map(scatterData, function (item, index) {
				var center = chart.convertToPixel('calendar', item);
				return {
					id: index + 'pie',
					center: center
				};
			});
		}
		
		var scatterData = getVirtulData();
		
		option = {
			tooltip : {},
			legend: {
				data: ['工作', '娱乐', '睡觉'],
				bottom: 20
			},
			calendar: {
				top: 'middle',
				left: 'center',
				orient: 'vertical',
				cellSize: cellSize,
				yearLabel: {
					show: false,
					textStyle: {
						fontSize: 30
					}
				},
				dayLabel: {
					margin: 20,
					firstDay: 1,
					nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
				},
				monthLabel: {
					show: false
				},
				range: ['2020-02']
			},
			series: [{
				id: 'label',
				type: 'scatter',
				coordinateSystem: 'calendar',
				symbolSize: 1,
				label: {
					normal: {
						show: true,
						formatter: function (params) {
							return echarts.format.formatTime('dd', params.value[0]);
						},
						offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
						textStyle: {
							color: '#000',
							fontSize: 14
						}
					}
				},
				data: scatterData
			}]
		}`,0),



		echref('Calendar-Lunar')+
		sceg(`var dateList = [
			['2019-1-1', '初四'],
			['2019-1-2', '初五'],
			['2019-1-3', '初六'],
			['2019-1-4', '初七'],
			['2019-1-5', '初八', '小寒'],
			['2019-1-6', '初九'],
			['2019-1-7', '初十'],
			['2019-1-8', '十一'],
			['2019-1-9', '十二'],
			['2019-1-10', '十三'],
			['2019-1-11', '十四'],
			['2019-1-12', '十五'],
			['2019-1-13', '十六'],
			['2019-1-14', '十七'],
			['2019-1-15', '十八'],
			['2019-1-16', '十九'],
			['2019-1-17', '二十'],
			['2019-1-18', '廿一'],
			['2019-1-19', '廿二'],
			['2019-1-20', '廿三', '大寒'],
			['2019-1-21', '廿四'],
			['2019-1-22', '廿五'],
		];
		
		var heatmapData = [];
		var lunarData = [];
		for (var i = 0; i < dateList.length; i++) {
			heatmapData.push([
				dateList[i][0],
				Math.random() * 300
			]);
			lunarData.push([
				dateList[i][0],
				1,
				dateList[i][1],
				dateList[i][2]
			]);
		}
		
		
		option = {
			tooltip: {
				formatter: function (params) {
					return '降雨量: ' + params.value[1].toFixed(2);
				}
			},
		
			visualMap: {
				show: false,
				min: 0,
				max: 300,
				calculable: true,
				seriesIndex: [2],
				orient: 'horizontal',
				left: 'center',
				bottom: 20,
				inRange: {
					color: ['#e0ffff', '#006edd'],
					opacity: 0.3
				},
				controller: {
					inRange: {
						opacity: 0.5
					}
				}
			},
		
			calendar: [{
				left: 'center',
				top: 'middle',
				cellSize: [70, 70],
				yearLabel: {show: false},
				orient: 'vertical',
				dayLabel: {
					firstDay: 1,
					nameMap: 'cn'
				},
				monthLabel: {
					show: false
				},
				range: '2019-01'
			}],
		
			series: [{
				type: 'scatter',
				coordinateSystem: 'calendar',
				symbolSize: 1,
				label: {
					normal: {
						show: true,
						formatter: function (params) {
							var d = echarts.number.parseDate(params.value[0]);
							return d.getDate() + '\n\n' + params.value[2] + '\n\n';
						},
						textStyle: {
							color: '#000'
						}
					}
				},
				data: lunarData
			}, {
				type: 'scatter',
				coordinateSystem: 'calendar',
				symbolSize: 1,
				label: {
					normal: {
						show: true,
						formatter: function (params) {
							return '\n\n\n' + (params.value[3] || '');
						},
						textStyle: {
							fontSize: 14,
							fontWeight: 700,
							color: '#a00'
						}
					}
				},
				data: lunarData
			}, {
				name: '降雨量',
				type: 'heatmap',
				coordinateSystem: 'calendar',
				data: heatmapData
			}]
		}`,0),






		echref('Calendar-Heatmap')+
		sceg(`function getVirtulData(year) {
			year = year || '2019';
			var date = +echarts.number.parseDate(year + '-01-01');
			var end = +echarts.number.parseDate((+year + 1) + '-01-01');
			var dayTime = 3600 * 24 * 1000;
			var data = [];
			for (var time = date; time < end; time += dayTime) {
				data.push([
					echarts.format.formatTime('yyyy-MM-dd', time),
					Math.floor(Math.random() * 10000)
				]);
			}
			return data;
		}
		
		option = {
			title: {
				top: 30,
				left: 'center',
				text: '2019年某人每天的步数'
			},
			tooltip : {},
			visualMap: {
				min: 0,
				max: 10000,
				type: 'piecewise',
				orient: 'horizontal',
				left: 'center',
				top: 65,
				textStyle: {
					color: '#000'
				}
			},
			calendar: {
				top: 120,
				left: 30,
				right: 30,
				cellSize: ['auto', 13],
				range: '2016',
				itemStyle: {
					normal: {borderWidth: 0.5}
				},
				yearLabel: {show: false}
			},
			series: {
				type: 'heatmap',
				coordinateSystem: 'calendar',
				data: getVirtulData(2016)
			}
		}`,0),



		echref('Calendar-EffectScatter')+
		sceg(`function getVirtulData(year) {
			year = year || '2019';
			var date = +echarts.number.parseDate(year + '-01-01');
			var end = +echarts.number.parseDate((+year + 1) + '-01-01');
			var dayTime = 3600 * 24 * 1000;
			var data = [];
			for (var time = date; time < end; time += dayTime) {
				data.push([
					echarts.format.formatTime('yyyy-MM-dd', time),
					Math.floor(Math.random() * 10000)
				]);
			}
			return data;
		}
		
		var data = getVirtulData(2019);
		
		option = {
			backgroundColor: '#404a59',
		
			title: {
				top: 30,
				text: '2019年某人每天的步数',
				subtext: '数据纯属虚构',
				left: 'center',
				textStyle: {
					color: '#fff'
				}
			},
			tooltip : {
				trigger: 'item'
			},
			legend: {
				top: '30',
				left: '100',
				data:['步数', 'Top 12'],
				textStyle: {
					color: '#fff'
				}
			},
			calendar: [{
				top: 100,
				left: 'center',
				range: ['2019-01-01', '2019-06-30'],
				splitLine: {
					show: true,
					lineStyle: {
						color: '#000',
						width: 4,
						type: 'solid'
					}
				},
				yearLabel: {
					formatter: '{start}  1st',
					textStyle: {
						color: '#fff'
					}
				},
				itemStyle: {
					normal: {
						color: '#323c48',
						borderWidth: 1,
						borderColor: '#111'
					}
				}
			}, {
				top: 270,
				left: 'center',
				range: ['2019-07-01', '2019-12-31'],
				splitLine: {
					show: true,
					lineStyle: {
						color: '#000',
						width: 4,
						type: 'solid'
					}
				},
				yearLabel: {
					formatter: '{start}  2nd',
					textStyle: {
						color: '#fff'
					}
				},
				itemStyle: {
					normal: {
						color: '#323c48',
						borderWidth: 1,
						borderColor: '#111'
					}
				}
			}],
			series : [
				{
					name: '步数',
					type: 'scatter',
					coordinateSystem: 'calendar',
					data: data,
					symbolSize: function (val) {
						return val[1] / 500;
					},
					itemStyle: {
						normal: {
							color: '#ddb926'
						}
					}
				},
				{
					name: '步数',
					type: 'scatter',
					coordinateSystem: 'calendar',
					calendarIndex: 1,
					data: data,
					symbolSize: function (val) {
						return val[1] / 500;
					},
					itemStyle: {
						normal: {
							color: '#ddb926'
						}
					}
				},
				{
					name: 'Top 12',
					type: 'effectScatter',
					coordinateSystem: 'calendar',
					calendarIndex: 1,
					data: data.sort(function (a, b) {
						return b[1] - a[1];
					}).slice(0, 12),
					symbolSize: function (val) {
						return val[1] / 500;
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					hoverAnimation: true,
					itemStyle: {
						normal: {
							color: '#f4e925',
							shadowBlur: 10,
							shadowColor: '#333'
						}
					},
					zlevel:1
				},
				{
					name: 'Top 12',
					type: 'effectScatter',
					coordinateSystem: 'calendar',
					data: data.sort(function (a, b) {
						return b[1] - a[1];
					}).slice(0, 12),
					symbolSize: function (val) {
						return val[1] / 500;
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					hoverAnimation: true,
					itemStyle: {
						normal: {
							color: '#f4e925',
							shadowBlur: 10,
							shadowColor: '#333'
						}
					},
					zlevel: 1
				}
			]
		}`,0),



		echref('Custom Calendar Icon')+
		sceg(`var layouts = [
			[[0, 0]],
			[[-0.25, 0], [0.25, 0]],
			[[0, -0.2], [-0.2, 0.2], [0.2, 0.2]],
			[[-0.25, -0.25], [-0.25, 0.25], [0.25, -0.25], [0.25, 0.25]]
		];
		var pathes = [
		
			'M533 268q33-41 71-75 32-27 74-50t86-19',
			'M741 733c8-29 20-40 14-162',
			'M848 939 571 939 571 653 34 0 0 222'
		];
		var colors = [
			'#c4332b', '#16B644', '#6862FD', '#FDC763'
		];
		
		function getVirtulData(year) {
			year = year || '2019';
			var date = +echarts.number.parseDate(year + '-01-01');
			var end = +echarts.number.parseDate((+year + 1) + '-01-01');
			var dayTime = 3600 * 24 * 1000;
			var data = [];
			for (var time = date; time < end; time += dayTime) {
				var items = [];
				var eventCount = Math.round(Math.random() * pathes.length);
				for (var i = 0; i < eventCount; i++) {
					items.push(Math.round(Math.random() * (pathes.length - 1)));
				}
				data.push([
					echarts.format.formatTime('yyyy-MM-dd', time),
					items.join('|')
				]);
			}
			return data;
		}
		
		function renderItem(params, api) {
			var cellPoint = api.coord(api.value(0));
			var cellWidth = params.coordSys.cellWidth;
			var cellHeight = params.coordSys.cellHeight;
		
			var value = api.value(1);
			var events = value && value.split('|');
		
			if (isNaN(cellPoint[0]) || isNaN(cellPoint[1])) {
				return;
			}
		
			var group = {
				type: 'group',
				children: echarts.util.map(layouts[events.length - 1], function (itemLayout, index) {
					return {
						type: 'path',
						shape: {
							pathData: pathes[events[index]],
							x: -8,
							y: -8,
							width: 16,
							height: 16
						},
						position:[
							cellPoint[0] + echarts.number.linearMap(itemLayout[0], [-0.5, 0.5], [-cellWidth / 2, cellWidth / 2]),
							cellPoint[1] + echarts.number.linearMap(itemLayout[1], [-0.5, 0.5], [-cellHeight / 2 + 20, cellHeight / 2])
						],
						style: api.style({
							fill: colors[events[index]]
						})
					};
				}) || []
			};
		
			group.children.push({
				type: 'text',
				style: {
					x: cellPoint[0],
					y: cellPoint[1] - cellHeight / 2 + 15,
					text: echarts.format.formatTime('dd', api.value(0)),
					fill: '#777',
					textFont: api.font({fontSize: 14})
				}
			});
		
			return group;
		}
		
		option = {
			tooltip: {
			},
			calendar: [{
				left: 'center',
				top: 'middle',
				cellSize: [70, 70],
				yearLabel: {show: false},
				orient: 'vertical',
				dayLabel: {
					firstDay: 1,
					nameMap: 'cn'
				},
				monthLabel: {
					show: false
				},
				range: '2019-03'
			}],
			series: [{
				type: 'custom',
				coordinateSystem: 'calendar',
				renderItem: renderItem,
				dimensions: [null, {type: 'ordinal'}],
				data: getVirtulData(2019)
			}]
		}`,0),


	].join(br)
	),


	detail('【主题河流图】ThemeRiver',[
		echref('基础','','themeRiver-basic')+
		sceg(`option = {
		
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'line',
					lineStyle: {
						color: 'rgba(0,0,0,0.2)',
						width: 1,
						type: 'solid'
					}
				}
			},
		
			legend: {
				data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD']
			},
		
			singleAxis: {
				top: 50,
				bottom: 50,
				axisTick: {},
				axisLabel: {},
				type: 'time',
				axisPointer: {
					animation: true,
					label: {
						show: true
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						type: 'dashed',
						opacity: 0.2
					}
				}
			},
		
			series: [
				{
					type: 'themeRiver',
					itemStyle: {
						emphasis: {
							shadowBlur: 20,
							shadowColor: 'rgba(0, 0, 0, 0.8)'
						}
					},
					data: [['2019/11/08',10,'DQ'],['2019/11/09',15,'DQ'],['2019/11/10',35,'DQ'],
					['2019/11/11',38,'DQ'],['2019/11/12',22,'DQ'],['2019/11/13',16,'DQ'],
					['2019/11/14',7,'DQ'],['2019/11/15',2,'DQ'],['2019/11/16',17,'DQ']]
				}
			]
		}`,0),


		echref('LastFM','','themeRiver-lastfm'),



		echref('Custom Cartesian Polygon')+
		sceg(`
		var data = [];
		var dataCount = 7;
		for (var i = 0; i < dataCount; i++) {
			var val = Math.random() * 1000;
			data.push([
				echarts.number.round(Math.random() * 100),
				echarts.number.round(Math.random() * 400)
			]);
		}
		
		function renderItem(params, api) {
			if (params.context.rendered) {
				return;
			}
			params.context.rendered = true;
		
			var points = [];
			for (var i = 0; i < data.length; i++) {
				points.push(api.coord(data[i]));
			}
			var color = api.visual('color');
		
			return {
				type: 'polygon',
				shape: {
					points: echarts.graphic.clipPointsByRect(points, {
						x: params.coordSys.x,
						y: params.coordSys.y,
						width: params.coordSys.width,
						height: params.coordSys.height
					})
				},
				style: api.style({
					fill: color,
					stroke: echarts.color.lift(color)
				})
			};
		}
		
		option = {
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['bar', 'error']
			},
			dataZoom: [{
				type: 'slider',
				filterMode: 'none',
				height: 8,
				bottom: 20,
				borderColor: 'transparent',
				backgroundColor: '#e2e2e2',
				handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
				handleSize: 20,
				handleStyle: {
					shadowBlur: 6,
					shadowOffsetX: 1,
					shadowOffsetY: 2,
					shadowColor: '#aaa'
				}
			}, {
				type: 'inside',
				filterMode: 'none'
			}],
			xAxis: {},
			yAxis: {},
			series: [{
				type: 'custom',
				renderItem: renderItem,
				data: data
			}]
		}`,0),



	].join(br)
	),


	detail('【关系图】Relation',[
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

	
	
	
	detail('【树形图】Tree',[
	
	echref('Tree Simple')+
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
	
	
	echref('Tree Legend')+
	sceg(`var data1 = {
		"name": "flare",
		"children": [
			{
				"name": "data",
				"children": [
					{
						 "name": "converters",
						 "children": [
						  {"name": "Converters", "value": 721},
						  {"name": "DelimitedTextConverter", "value": 4294}
						 ]
					},
					{
						"name": "DataUtil",
						"value": 3322
					}
				]
			},
			{
				"name": "display",
				"children": [
					{"name": "DirtySprite", "value": 8833},
					{"name": "LineSprite", "value": 1732},
					{"name": "RectSprite", "value": 3623}
			   ]
			},
			{
				"name": "flex",
				"children": [
					{"name": "FlareVis", "value": 4116}
				]
			},
			{
			   "name": "query",
			   "children": [
				{"name": "AggregateExpression", "value": 1616},
				{"name": "And", "value": 1027},
	
				{
				 "name": "methods",
				 "children": [
				  {"name": "add", "value": 593},
				  {"name": "and", "value": 330},
				  {"name": "_", "value": 264}
				 ]
				},
				{"name": "Minimum", "value": 843},
				{"name": "Not", "value": 1554},
			   ]
			  },
			{
			   "name": "scale",
			   "children": [
				{"name": "IScaleMap", "value": 2105},
				{"name": "TimeScale", "value": 5833}
			   ]
			}
		]
	};
	
	var data2 = {
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
	};
	
	
	
	option = {
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
	
				name: 'tree1',
	
				data: [data1],
	
				top: '5%',
				left: '7%',
				bottom: '2%',
				right: '60%',
	
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
	
			},
			{
				type: 'tree',
				name: 'tree2',
				data: [data2],
	
				top: '20%',
				left: '60%',
				bottom: '22%',
				right: '18%',
	
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

	echref('Tree Orient Right Left'),

	echref('Tree Orient Bottom Top'),

	echref('Tree Orient Vertical'),
	echref('Tree Orient Radial')+sceg2(`layout: 'radial',`),
		].join(br)
	),




	detail('【矩形树图】TreeMap',[
	
		echref('Treemap Simple')+
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
					    image: 'img/small.png',
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
		}`,0),


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
		
		
		}`,0),

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

