/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
 
graphics={
	index:['Plane Coordinate System.Math','Space Coordinate System.Math','Surface','Solid','81','Statistics','Project'],
	'Plane Coordinate System.Math':[
		
		{'Curve':[
			{'Arc':''},
			{'Semi Circle':''},
			{'Line Segment':''},
			{'Polyline':''},
			{'lineHV':''},
			{'Bezier':''},
			{'Vector':''},
			{'Path':''},
			{'Algebraic Curve':[
				'Parabola',
				'Hyperbola',
			]},
		]},
		{'Shape':[

			{'Circle':''},
			{'Ellipse':''},
			{'Semi Circle':''},
			{'Square':''},
			{'Rectangle':''},
			{'Polygon':''},
			{'Regular Polygon':''},
			{'Path':''}
		]},
		{'nodesXY':[
			{'Point':[
				'Point','Grid Point','Scatter'
			]},'Axis','Grid'
			
			
		]},
		{'nodesPolar':[
			{'Point':[
				'Point','Grid Point','Scatter'
			]},'Axis','Grid'
		]},
		{'Text':['Text','Text Path']}
	],
	

	
	'Space Coordinate System.Math':[
		{'Cartesian':[
			'Axis','Grid'
		]},
		{'Spherical':[
			'Axis','Grid'
		]},
		{'Cylindrical':[
			'Axis','Grid'
		]}				
	],
	
	'Surface':[
		'Sphere',
		'Quadratic Surface'
	],
	'Solid':[
		'2D','3D'
	],
	'81':[
		{'Relation':[
			{'hasse':''},
			{'venn':''},
			{'pie':''},
			{'tree':''},
			
					
		]},
	],
	'Statistics':[
		'bar','line','pie'
	],
	'Project':[
		{'echarts':[
		
		]},
		{'flowchart':''},
	],
};



tooltip.graphic={

	'Plane Coordinate System.Math/Shape':[
		'shape(id,type,content,attrs,style,translateA)',
		[
			gM('Ellipse')+': ellipse【rx ry cx cy fill】',
		sceg("shape('','ellipse','','rx=40 ry=30 cx=60 cy=50 fill=red')"),

			gM('Circle')+': circle【r cx cy】',
		sceg("shape('','circle','','r=40 cx=60 cy=50 fill=blue')"),

				'_有向椭圆circle|ellipse[01逆顺时针][旋转度数][lrbt相对方向] 在关系type中使用',
			gM('Semi Circle')+': Arc【x1 y1 x2 y2 c[clockwise:↻1|↺0] z是否闭合 end mid start】',
		sceg("shape('test','Arc','','x1=30 y1=150 x2=200 y2=150 c=1 z=1')"),


			gM('Rectangle')+': rect【x y width height rx ry [cx] [cy]】',
		sceg("shape('','rect','','x=40 y=30 width=160 height=50 rx=20 ry=20')"),
				
			gM('Square')+': Square【x y width <del>height</del> rx ry [cx] [cy]】',
		sceg("shape('','Square','','x=40 y=30 width=160 rx=20 ry=20')"),

			gM('Polygon')+': polygon【points】',
		sceg("shape('','polygon','','points=\"50 60 150 20 130 80 70 80\"')"),

			gM('Regular Polygon')+': 【r cx cy width a n】',
		sceg("shape('','Polygon','','cx=150 cy=100 width=50 n=9 fill=green')"),
	
		sceg("shape('','Polygon','','r=150 cx=150 cy=200 a=90')"),
			
			gM('Path')+': path【d=M起点 L H V A C S Q T Z闭合】L线段x,y H水平x V垂直y',
				'A弧 rx,ry,deg,[01小大弧],[01逆顺时针],x,y',
				'C三次贝塞尔 x1 y1, x2 y2, x y S特殊三次 x2 y2, x y',
				'Q二次贝塞尔 x1 y1, x y T特殊二次 x y',
				'组合g',
				'【end尾 mid中 start首 ∧△◇□○▲◆■●】 v {trig diamond square circle}×{Hollow Solid}'


		].join(br)].join(br),



	'Plane Coordinate System.Math/Shape/Ellipse':[
		'【rx ry cx cy fill】',
		sceg('40 30 60 50 red',20)
		].join(br),

	'Plane Coordinate System.Math/Shape/Circle':[
		'【r cx cy】',
		sceg('40 60 50 blue',20)
		].join(br),

	'Plane Coordinate System.Math/Shape/Semi Circle':[
		'【x1 y1 x2 y2 c[clockwise:↻1|↺0] z是否闭合 end mid start】',
		sceg('30 150 200 150 1 1',20)
		].join(br),


	'Plane Coordinate System.Math/Shape/Rectangle':[
		'【x y width height】',
		sceg('40 30 160 50',20),
		
		gM('Round Corner【x y width height rx ry [cx] [cy]】'),
		sceg('40 30 160 50 20 20',20)
		
		].join(br),

	'Plane Coordinate System.Math/Shape/Square':[
		'【x y width】',
		sceg('40 30 160',20),
		
		gM('Round Corner【x y width rx ry [cx] [cy]】'),
		sceg('40 30 160 20 20',20)

		].join(br),


	'Plane Coordinate System.Math/Shape/Polygon':[
		'【points】',
		sceg('50 60 150 20 130 80 70 80',20)
		].join(br),

	'Plane Coordinate System.Math/Shape/Regular Polygon':[
		'【r cx cy width a n】',
		sceg('150 100 50 9',20)
		].join(br),




	'Plane Coordinate System.Math/Curve':['shape(id,type,content,attrs,style,translateA)',
				gM('Arc')+': arc【x1 y1 x2 y2 rx ry m[Major1|minor0] c[↻1|↺0] deg z end mid start】',
		sceg("shape('test','arc','','x1=100 y1=100 x2=100 y2=50 rx=40 ry=30 m=1 c=0')"),
			
				gM('Semi Circle')+': Arc【x1 y1 x2 y2 c[clockwise:↻1|↺0] end mid start】',
		sceg("shape('test','Arc','','x1=30 y1=150 x2=200 y2=150 c=1')"),
					
				gM('Line Segment')+': line【x1 y1 x2 y2 end mid start】',
		sceg("shape('test','line','','x1=100 y1=50 x2=160 y2=100 end=∧ mid=∧ start=∧')"),
					
				'折线polyline【points】',
		sceg("shape('test','polyline','','points=\"100 100 150 130 180 70\"')"),

				'横竖折线lineHV【hv横竖位移序列 r拐角半径】',
		sceg("shape('test','lineHV','','hv=V80H100V120 r=4')"),

		].join(br),




	'Plane Coordinate System.Math/Curve/Arc':[
		'【x1 y1 x2 y2 rx ry m[Major1|minor0] c[↻1|↺0] deg z end mid start】',
		sceg('100 100 100 50 40 30 1 0',20)
		].join(br),

	'Plane Coordinate System.Math/Curve/Semi Circle':[
		'【x1 y1 x2 y2 c[clockwise:↻1|↺0] end mid start】',
		sceg('30 150 200 150 1',20)
		].join(br),


	'Plane Coordinate System.Math/Curve/Line Segment':[
		'【x1 y1 x2 y2 end mid start】',
		sceg('100 50 160 100'),					
		].join(br),

	'Plane Coordinate System.Math/Curve/lineHV':[
		'【hv r】',
		sceg('V80H100V120 4',20)
		].join(br),


	'Plane Coordinate System.Math/Curve/Polyline':[
		'【points】',
		sceg('100 100 150 130 180 70',20)
		].join(br),



	'Plane Coordinate System.Math/Text':[
		gM('Text')+' text【x y dx dy rotate】',
		sceg("shape('','text','O','x=90 y=112 rotate=20')"),
		
		gM('Text Path')+' textPath【d href pathid】',
		sceg("shape('','textPath','路径文本','d="+'"M20 20 L120 102"'+" pathid=path1')"),
		
		].join(br),

	'Plane Coordinate System.Math/Text/Text':[
		"【'text' x y rotate dx dy】",
		sceg("'O' 90 112 20"),
		].join(br),
		
	'Plane Coordinate System.Math/Text/Text Path':[
		
		'textPath【d href pathid】',
		sceg("'路径文本' 'M20 20 L120 102' path1"),
		].join(br),



	'Plane Coordinate System.Math/nodesXY':[
		detail('nodesXY(id,types,texts,relations,aligns,translates,nodeMargin,nodeXYs,nodeAttr,nodeStyle,specialNodes)',[
			
		detail("types： 'nodeType lineType arrowType'",[
			detail(gM('nodeType')+': nodeType',[
				gM('Shape'),
			 	'rect (+Square) ellipse circle line polyline polygon (+Polygon正多边形) path',
				'在relations中，还支持circle|ellipse[01逆顺时针][旋转度数][lrbt相对方向]'
			].join(br)),

			detail(gM('lineType')+': lineType',[
				'solid dashed dotted bold'
			].join(br)),

			detail(gM('arrowType')+': arrowType',[
			
				'尾,中,首: trigSolid trigHollow'
			].join(br)),
		].join(br))+
		
		
		
		detail("texts: 节点文本、关系文本",[
			'n：',
				'[["a b c","a","1"],["a b c","a","1"]] 二维 ["a","b"] 一维',
			'r: []',
			'na: '+gM('Node Text Attr'),
			'ra: '+gM('Relation Text Attr'),
			'nt: '+gM('Node Text Offset')+'[行,列,dx,dy]',
			'rt: '+gM('Relation Text Offset')+'[行,列,dx,dy]',
		].join(br))+
		
		
		detail("relations：[[[1,2],[4,5]],[[3,4],[4,5]]]",[
			'关系集[索引1,索引2,types,attr,join,style]',
			
				'连线风格join:[hcv][hcv]水平 中心 垂直平移',
				
		].join(br))+
		detail("aligns:'lcra [hcv]+ [psme]+'",[
			
			'lcra节点水平对齐',
			 '[hcv]+关系线中点对齐风格',
			 '[psmehv]节点文本位置',
			 '[psmehva]关系线文本位置：',
			 '沿路径|从中心开始|中心|到中心结束|横排|竖排|自动决定横竖',
			 '节点分布：居左 居中（默认） 居右',
			 '自动根据相邻节点的相对位置，与父节点坐标分散对齐',
			 '关系线连接时，选择哪个方向的最近中点对齐：水平 中心 垂直',
			 '节点文本位置：',
			 '关系文本位置：',
		].join(br))+
		
		detail("translates:[] node nodeT line lineT g",`
		`)+
		
		detail("nodeMargin:'60 140'",[
		 	'节点中心之间的水平、竖直间距（节点中心之间的间距, 多行用,隔开）',
		 	'如果是数组，则表示每一层的间距',
		].join(br))+
		
		detail("nodeXYs 节点中心坐标矩阵",[
			'（除椭圆、圆、正多边形能直接使用之外，都需要换算）',
			'节点中心坐标集',
		].join(br))+
		
		detail("nodeAttr",[
			'属性中的某些坐标信息将被忽略，',
			'坐标通过（aligns 和 nodeMargin）',
			'或者 nodeXYs来计算确定',
		].join(br))+
		
		detail("nodeStyle 节点样式",`
		`)+
		
		detail("specialNodes",[
			'部分节点特殊处理',
			'[[1,2,type,attr,style,dx偏移,dy偏移],[3,2,type,attr,style,dx偏移,dy偏移]]'
		
		].join(br))
		
		].join(br)),
		
		detail(gM('Node'),[
		
			sceg("nodesXY('','',{n:[[1,2,3],['a','b','c']],r:['关系1','关系2']},[[[1,1],[2,2]],[[1,2],[2,3]]],'  s s','','60 80',[0,0,0,0,0,0,0,0,10,20],'r=2 fill=white')",20),
			gM('Text'),
			sceg("nodesXY('','',{n:[1,2,3,4,5],nt:[[1,200,300],[2,220,320],[3,230,350],[4,240,370],[5,250,380]]},'','','','','','r=0')",20),
		
		].join(br)),
		
		
		detail(gM('Coordinate Axis'),[
		
			sceg("nodesXY('axis1','line',{n:[0,1,2,3,4,5]},[[1,6]],'',[0,0,0,10,0,0,0,0,3,305],'60','','x1=0 x2=0 y1=-10 y2=0 fill=white')",20),
			sceg("nodesXY('axis2','line',{n:[[5],[4],[3],[2],[1],['']]},[[[1,1],[6,1]]],'  s s',[0,0,5,3,0,0,0,0,0,10],'60','','x1=0 x2=5 y1=0 y2=0 fill=white')",20),
			sceg("nodesXY('axis3','  trigSolid',{n:[['y'],['','O','x'],['']]},[[[3,1],[1,1]],[[2,1],[2,3]]],'  s s',[0,0,4,10,0,0,0,0,0,20],'180','','r=0')",20),
	
		].join(br)),
		
		
		detail('线框图',[
			'【圆角矩形线框图】',
			sceg("nodesXY('','rect solid trigSolid',[['v₂','v₄','v₅'],['v₁','v₃']],[[[2,1],[1,1]],[[2,1],[1,2]],[[2,1],[1,3]],[[2,2],[1,3]],[[1,1],[1,2]]],'','','180 190','','x=-30 y=-23 width=60 height=46 fill=white rx=20 ry=20')",20),
			'【组织架构图】',
			sceg("nodesXY('','rect solid trigSolid',[['董事长'],['总经理'],['总经办'],['运营中心','用户体验中心'],['项目一部','项目二部','渠道商务部','客服部','财务部','技术开发部','测试部','运维部']],[[[1,1],[2,1]],[[2,1],[3,1],'lineHV','hv=H100V'],[[2,1],[4,1],'lineHV','hv=V60H-125V'],[[2,1],[4,2],'lineHV','hv=V60H125V'],[[2,1],[5,5]],[[2,1],[5,6],'lineHV','hv=V115H50V'],[[4,1],[5,1],'lineHV','hv=V25H-75V'],[[4,1],[5,2],'lineHV','hv=V25H-25V'],[[4,1],[5,3],'lineHV','hv=V25H25V'],[[4,1],[5,4],'lineHV','hv=V25H75V'],[[4,2],[5,7],'lineHV','hv=V25H-25V'],[[4,2],[5,8],'lineHV','hv=V25H25V']],'  a','','',[[[250,50]],[[250,130]],[[350,170]],[[[125,375],220]],[[[50,100,150,200,250,300,350,400],300]]],'x=-30 y=-15 width=60 height=30 fill=white rx=10 ry=10','',[[4,1,'','width=120 x=-60'],[4,2,'','width=100 x=-50'],[5,[1,2,3,4,5,6,7,8],'','width=30 height=80 x=-15 y=-40']])",20),
	
		].join(br)),
		
		
		detail('有特殊节点的图',[	
	
			sceg("nodesXY('','',[['v₂','v₄','v₅'],['v₁','v₃']],[[[2,1],[1,1]],[[2,1],[1,2]],[[2,1],[1,3]],[[2,2],[1,3]],[[1,1],[1,2],'line dotted trigSolid']],'  s s','','60 80','','r=2 fill=white','',[[1,1,'circle','r=2 fill=black']])",20),
	
		].join(br)),
		
		
		detail('有向节点图',[	
			sceg("nodesXY('','  trigSolid',[['v₂','v₄','v₅'],['v₁','v₃']],[[[2,1],[1,1]],[[2,1],[1,2]],[[2,1],[1,3]],[[2,2],[1,3]],[[2,2],[2,2],'circle00b solid trigSolid','rx=20 ry=20'],[[2,2],[1,2],'path solid trigSolid','d=M0,0A60,60,0,0,0,-40,-60']],'  s s','','80 60','','r=2 fill=white')",20),
			sceg("nodesXY('','  trigSolid',[['等价'],['相容','拟序'],['循环','对称','自反','传递','反对称','反自反','完全','非空子集有最小元'],['偏序'],['线序(全序，简单序，链)'],['良序']],[[[1,1],[2,1]],[[1,1],[3,1],'line dotted trigSolid'],[[1,1],[3,3],'line dotted trigSolid'],[[1,1],[3,4]],[[2,2],[3,4]],[[2,2],[3,5]],[[2,2],[3,6]],[[2,1],[3,2]],[[2,1],[3,3]],[[4,1],[3,3]],[[4,1],[3,4]],[[4,1],[3,5]],[[5,1],[4,1]],[[5,1],[3,7]],[[6,1],[5,1]],[[6,1],[3,8]],],'  s s',[0,0,2,0,0,0,0,0,0,20],'60 80','','r=2','',[[1,1,'','cx=-90'],[2,1,'','cx=-90'],[2,2,'','cx=-30']])",20),
		
		].join(br)),
		
		
		detail(gM('Tree'),[
		
			sceg("nodesXY('tree','',{n:[[0],[1,2,3],['a','b','c','d','e','f']],r:['关系1','关系2']},[[[1,1],[[2,1],[2,2],[2,3]]],[[2,1],[[3,1],[3,2],[3,3]]],[[2,2],[[3,4],[3,5],[3,6]]]],'a  s s','','60 20,60 80,20 90','','r=2 fill=white')",20),
			sceg("nodesXY('tree','',{n:[[27],[16,11],[7,9,5,6],[3,4],[2,1]]},[[[1,1],[[2,1],[2,2]]],[[2,1],[[3,1],[3,2]]],[[2,2],[[3,3],[3,4]]],[[3,1],[[4,1],[4,2]]],[[4,1],[[5,1],[5,2]]]],'a  s s','','10 20,50 40,30 40,20 40,20 40','','r=2 fill=white')",20),

		
		].join(br)),
		
		].join(br),













	
	'81/Relation':[
		detail('【哈斯图】hasse(id,nA,rA,translates)',[
			sceg("hasse('hasse0',[[24],[8,12],[4,6],[2,3],[1]],[[[1,1],[2,1]],[[1,1],[2,2]],[[2,1],[3,1]],[[2,2],[3,1]],[[2,2],[3,2]],[[3,1],[4,1]],[[3,2],[4,1]],[[3,2],[4,2]],[[4,1],[5,1]],[[4,2],[5,1]]])",20),
			sceg("hasse('hasse1',[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]])")
		].join(br)),

		detail('【韦恩图，文氏图】venn(id,texts,relations,rotate,RA,radiusA,translates)',[
			'椭圆旋转rotate 各椭圆半径radiusA',

			sceg("venn('venn_2',{n:['A','B'],r:['A∩B']},[[1,2,,'stroke=none']],[0],[[50,0,2]],[[70]])"),
			sceg("venn('venn_3',{n:['A','B','C','A∩B∩C'],r:['A∩B','A∩C','B∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none'],[2,3,,'stroke=none']],[0],[[60,1/4,3],[0,0]],[[70],[70],[70],[0]])",20),
			sceg("venn('venn_3_1',{n:['A','B','C'],r:['A∩B','A∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none']],[0,1/8,-1/8],[[70,0,3]],[[100],[60,80],[60,80]])",20),
			sceg("venn('venn_4',['','','',''],'',[1/8,1/8,-1/8,-1/8],[[30,1/4,3],[30,1/4]],[[68,40]])"),
			sceg("venn('venn_4_1',{n:['|A|=500','|C|=310','|B|=300','|D|=350'],r:['|A∩C|=15','|A∩D|=220','|B∩C|=200','|B∩D|=50']},[[1,2,,'stroke=none'],[1,4,,'stroke=none'],[2,3,,'stroke=none'],[3,4,,'stroke=none']],[0],[[120,1/8,4]],[[100]])",20),
			sceg("venn('venn_5',['','','','',''],'',[0,-1/5,-2/5,-3/5,-4/5],[[40,1/5,5]],[[40,110]])"),
		].join(br)),	
	
		detail('【饼图/环形图】pie(id,nA,ratio,RA0,radius,translates)',[
			sceg("pie('pie1',['China','US','RU','JP','Other'],[25,20,30,15],[0,0],[110,0,70,100])",20),
		].join(br)),


		detail('【树形图】tree(id,types,json,aligns,translates,nodeXYs,nodeAttr,nodeStyle,specialNodes)',[

		].join(br)),
	
	
	
	
	].join(br),

	'81/Relation/hasse':['nA,rA',
		sceg("[[24],[8,12],[4,6],[2,3],[1]],[[[1,1],[2,1]],[[1,1],[2,2]],[[2,1],[3,1]],[[2,2],[3,1]],[[2,2],[3,2]],[[3,1],[4,1]],[[3,2],[4,1]],[[3,2],[4,2]],[[4,1],[5,1]],[[4,2],[5,1]]]",20),
		sceg("[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]]")
	].join(br),
	
	'81/Relation/venn':['texts,relations,rotate,RA,radiusA',
		sceg("{n:['A','B'],r:['A∩B']},[[1,2,,'stroke=none']],[0],[[50,0,2]],[[70]]",20),
		sceg("{n:['A','B','C','A∩B∩C'],r:['A∩B','A∩C','B∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none'],[2,3,,'stroke=none']],[0],[[60,1/4,3],[0,0]],[[70],[70],[70],[0]]",20),
		sceg("{n:{n:['A','B','C'],r:['A∩B','A∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none']],[0,1/8,-1/8],[[70,0,3]],[[100],[60,80],[60,80]]",20),
		sceg("{n:['','','',''],'',[1/8,1/8,-1/8,-1/8],[[30,1/4,3],[30,1/4]],[[68,40]]",20),
		sceg("{n:['|A|=500','|C|=310','|B|=300','|D|=350'],r:['|A∩C|=15','|A∩D|=220','|B∩C|=200','|B∩D|=50']},[[1,2,,'stroke=none'],[1,4,,'stroke=none'],[2,3,,'stroke=none'],[3,4,,'stroke=none']],[0],[[120,1/8,4]],[[100]]",20),
		sceg("['','','','',''],'',[0,-1/5,-2/5,-3/5,-4/5],[[40,1/5,5]],[[40,110]]",20),
	].join(br),


	'81/Relation/tree':['nA,rA',
		sceg("[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]]")
	].join(br),
	

	'81/Relation/pie':['nA,ratio,RA0,radius',
	
		'nA: 节点文本',
		'ratio: [3.4,4,7,1,9] 省略%',
		'RA0: 第1个pie的圆心极坐标[r,A]',
		'radius: [大圆半径,小圆半径,百分比文本半径,描述文本半径]',
		sceg("['China','US','RU','JP','Other'],[25,20,30,15],[0,0],[110,0,70,100]",20),

		
	].join(br),
	
/*





	'Statistics':[
		'bar','line','pie'
	],
*/




	'Project/flowchart':['流程图 flowchart'+href(Hs+'flowchart.js.org','官网'),
		'支持LaTeX的方法：',
		'LaTeX公式用$美元符号$括起来'+sceg2('$x^2+y^2$'),
		'JS代码再嵌套一层$'+sceg2('$$kxf(\'tr\')+\'(A)\'$$'),
		,
		sceg(['s=>start: $a^2+b^2$kroot(3)$=?$',
		'e=>end: e',
		'o1=>operation: o1',
		's1=>subroutine: s1',
		'c1=>condition: c1',
		'i1=>inputoutput: i1',
		'p1=>parallel: p1',
		's->o1->c1',
		'c1(yes)->i1->e',
		'c1(no)->p1',
		'p1(path1, bottom)->s1(right)->o1',
		'p1(path2, top)->o1',
		].join('&&'),10)+
		Arrf(sceg,[
		's@>o1({"stroke":"Red"})',
		's@>o1({"stroke":"Red"})@>c1({"stroke":"Blue"})',
		'o1@>c1({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})',
		
		]).join(br),

		'常用命令片段：'+
		Arrf(sceg2,[
		'->',
		's=>start:>',
		'链接:>'+Hs+'[blank]',
		]).join(br),

	].join(br)

};
