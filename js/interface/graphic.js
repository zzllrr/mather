/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
 
graphics={
	index:['Plane Coordinate System','Space Coordinate System','Surface','Solid','81','Statistics','Project','Doodle'],
	'Plane Coordinate System':[
		
		{'Curve':[
			{'Arc':''},
			{'Semi Circle':''},
			{'Straight Line':''},
			{'Line Segment':''},
			{'Polyline':''},
			{'LineHV':''},
			{'Bezier':''},
			{'Vector':''},
			{'Path':''},
			{'Algebraic Curve':[
				'Parabola'
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
		{'Text':''}
	],
	

	
	'Space Coordinate System':[
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
			//"hasse“[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]]",
			//"venn"
			{'hasse':''},
			{'venn':''},
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
	'Doodle':[],
};



tooltip.graphic={

	'Plane Coordinate System/Shape':['shape(id,type,content,attrs,style,translateA)',[
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
		sceg("shape('','polygon','','points=\"50 60 150 120 130 80\"')"),

			gM('Regular Polygon')+': 【r cx cy width a n】',
		sceg("shape('','Polygon','','cx=150 cy=200 width=50 n=9 fill=green')"),
	
		sceg("shape('','Polygon','','r=150 cx=150 cy=200 a=90')"),
			
			gM('Path')+': path【d=M起点 L H V A C S Q T Z闭合】L线段x,y H水平x V垂直y',
				'A弧 rx,ry,deg,[01小大弧],[01逆顺时针],x,y',
				'C三次贝塞尔 x1 y1, x2 y2, x y S特殊三次 x2 y2, x y',
				'Q二次贝塞尔 x1 y1, x y T特殊二次 x y',
				'组合g',
				'【end尾 mid中 start首 ∧△◇□○▲◆■●】 v {trig diamond square circle}×{Hollow Solid}'


		].join(br)].join(br),



	'Plane Coordinate System/Shape/Ellipse':[
		'【rx ry cx cy fill】',
		sceg('40 30 60 50 red',20)
		].join(br),

	'Plane Coordinate System/Shape/Circle':[
		'【r cx cy】',
		sceg('40 60 50 blue',20)
		].join(br),

	'Plane Coordinate System/Shape/Semi Circle':[
		'【x1 y1 x2 y2 c[clockwise:↻1|↺0] z是否闭合 end mid start】',
		sceg('30 150 200 150 1 1',20)
		].join(br),


	'Plane Coordinate System/Shape/Rectangle':[
		'【x y width height】',
		sceg('40 30 160 50',20),
		
		gM('Round Corner【x y width height rx ry [cx] [cy]】'),
		sceg('40 30 160 50 20 20',20)
		
		].join(br),

	'Plane Coordinate System/Shape/Square':[
		'【x y width】',
		sceg('40 30 160',20),
		
		gM('Round Corner【x y width rx ry [cx] [cy]】'),
		sceg('40 30 160 20 20',20)

		].join(br),


	'Plane Coordinate System/Shape/Polygon':[
		'【points】',
		sceg('50 60 150 120 130 80',20)
		].join(br),

	'Plane Coordinate System/Shape/Regular Polygon':[
		'【r cx cy width a n】',
		sceg('150 200 50 9',20)
		].join(br),




	'Plane Coordinate System/Curve':['shape(id,type,content,attrs,style,translateA)',
				gM('Arc')+': arc【x1 y1 x2 y2 rx ry m[Major1|minor0] c[↻1|↺0] deg z end mid start】',
		sceg("shape('test','arc','','x1=100 y1=100 x2=100 y2=50 rx=40 ry=30 m=1 c=0')"),
			
				gM('Semi Circle')+': Arc【x1 y1 x2 y2 c[clockwise:↻1|↺0] end mid start】',
		sceg("shape('test','Arc','','x1=30 y1=150 x2=200 y2=150 c=1')"),
					
				gM('Line')+': line【x1 y1 x2 y2 end mid start】',
		sceg("shape('test','line','','x1=100 y1=50 x2=160 y2=100 end=∧ mid=∧ start=∧')"),
					
				'折线polyline【points】',
		sceg("shape('test','polyline','','points=\"100 100 150 130 180 70\"')"),

				'_横竖折线lineHV【hv横竖位移序列 r拐角半径】',
		sceg("shape('test','lineHV','','hv=V80H100V120 r=4')"),

		].join(br),




	'Plane Coordinate System/Curve/Arc':[
		'【x1 y1 x2 y2 rx ry m[Major1|minor0] c[↻1|↺0] deg z end mid start】',
		sceg('100 100 100 50 40 30 1 0',20)
		].join(br),

	'Plane Coordinate System/Curve/Semi Circle':[
		'【x1 y1 x2 y2 c[clockwise:↻1|↺0] end mid start】',
		sceg('30 150 200 150 1',20)
		].join(br),







	'Plane Coordinate System/Text':	detail('文本text【Text】【x y dx dy rotate】 路径文本textPath【Text】【d href pathid】',Arrf(sceg,
		["shape('','text','O','x=90 y=112 rotate=20')",
		"shape('','textPath','路径文本','d="+'"M20 20 L120 102"'+" pathid=path1')"
		]).join(br)),





	/*[
		{'Cartesian':[
			{'Point':[
				'Point','Grid Point','Scatter'
			]},'Axis','Grid'
			
			
		]},
		{'Polar Coordinate':[
			{'Point':[
				'Point','Grid Point','Scatter'
			]},'Axis','Grid'
		]},
		{
		{'Shape':[
			{'Curve':[
				{'Algebraic Curve':[
					'Parabola'
				]},'Arc','Straight Line','Line Segment','Polyline','LineHV','Bezier','Vector',
			]},
			
			'Square','Rectangle','Circle','Ellipse','Semi Circle','Polygon','Regular Polygon','Path'
		]},			
	],
	
*/
	
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
	
	].join(br),

	'81/Relation/hasse':[del('hasse(id,')+scRed('nA,rA')+del(',translates)'),
		sceg("[[24],[8,12],[4,6],[2,3],[1]],[[[1,1],[2,1]],[[1,1],[2,2]],[[2,1],[3,1]],[[2,2],[3,1]],[[2,2],[3,2]],[[3,1],[4,1]],[[3,2],[4,1]],[[3,2],[4,2]],[[4,1],[5,1]],[[4,2],[5,1]]]",20),
		sceg("[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]]")
	].join(br),
	
	'81/Relation/venn':[del('venn(id,')+scRed('texts,relations,rotate,RA,radiusA')+del(',translates)'),
		sceg("{n:['A','B'],r:['A∩B']},[[1,2,,'stroke=none']],[0],[[50,0,2]],[[70]]",20),
		sceg("{n:['A','B','C','A∩B∩C'],r:['A∩B','A∩C','B∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none'],[2,3,,'stroke=none']],[0],[[60,1/4,3],[0,0]],[[70],[70],[70],[0]]",20),
		sceg("{n:{n:['A','B','C'],r:['A∩B','A∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none']],[0,1/8,-1/8],[[70,0,3]],[[100],[60,80],[60,80]]",20),
		sceg("{n:['','','',''],'',[1/8,1/8,-1/8,-1/8],[[30,1/4,3],[30,1/4]],[[68,40]]",20),
		sceg("{n:['|A|=500','|C|=310','|B|=300','|D|=350'],r:['|A∩C|=15','|A∩D|=220','|B∩C|=200','|B∩D|=50']},[[1,2,,'stroke=none'],[1,4,,'stroke=none'],[2,3,,'stroke=none'],[3,4,,'stroke=none']],[0],[[120,1/8,4]],[[100]]",20),
		sceg("['','','','',''],'',[0,-1/5,-2/5,-3/5,-4/5],[[40,1/5,5]],[[40,110]]",20),
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
