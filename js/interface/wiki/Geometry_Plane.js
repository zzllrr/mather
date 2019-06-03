/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Plane']=Kx(


detail('平面几何图形的类型',Table([ZLR('名称 记法 定义 性质')],[
	
	ZLR('三角形\nTriangle________','','____'),
	ZLR('直角三角形\nRight________','','____'),
	ZLR('（斜角）非直角三角形\nOblique________','','____'),
	ZLR('等腰三角形\nIsosceles________','','____'),
	ZLR('等边三角形\nEquilateral________','','____'),
	ZLR('不等边三角形\nScalene________','','____'),


	ZLR('垂足三角形\nPedal triangle________过某一点引三角形三边垂线，3个垂足围成的三角形','','____'),

	ZLR('高线三角形\nOrthic triangle\nAltitude triangle________（非直角, '+kxf('oblique')+'）三角形垂心引的垂足三角形____高线三角形内心是原三角形的垂心','','____'),
	ZLR('中位三角形\nMedial triangle\nMidpoint triangle________'+khrA(['3个中点围成的三角形','3条中位线围成的三角形']),'','____'),
	ZLR('反中位三角形\nAntimedial triangle\nAnticomplementary triangle________以原三角形为中位三角形的三角形','','____'),

	ZLR('中线三角形\nMedian triangle________3条中线围成的三角形？【wikipedia有此术语，但无此page】','','____'),

	ZLR('内接三角形\nGergonne triangle\nContact triangle\nIntouch triangle________三角形内切圆3个内切点连成的三角形____'+
		'内接三角形与旁接三角形面积相等，都是\n'
		,'','____'),

	ZLR('外接三角形\ntangential triangle________三角形外接圆3条切线围成的三角形____'+kul([
			'外切三角形的内切圆就是原三角形的外接圆',
			'原三角形是外接三角形的内接三角形',
		]),'','____'),
			
	ZLR('旁接三角形\n外切三角形\nExtouch triangle\nNagel triangle________三角形3个旁（外）切圆的旁（外）切点连成的三角形','','____'),

	ZLR('第一拿破仑三角形\nOuter Napoleon triangle________三角形3个第一拿破仑点连成的三角形____（第一、第二）拿破仑三角形是等边三角形'+
		kbox('拿破仑定理(Napoleon\'s Theorem'),'','____'),

	ZLR('第二拿破仑三角形\nInner Napoleon triangle________三角形3个第二拿破仑点连成的三角形____','','____'),



	ZLR('圆\nCircle  ','','____'),

	ZLR('椭圆\nEllipse  ','','____'),


	ZLR('Mandart圆\nMandart circle________旁接三角形的外接圆','','____'),
	ZLR('Spieker圆\nSpieker circle________中位三角形的内切圆','','____'),

	ZLR('内切圆\nIncircle\nInscribed circle____________'+kul([
		'内切圆的圆心称为内心I，',
		'半径称为内径',
		'内心是三条角平分线的交点',
		'半径r满足r = 2S/C',
		'其中C是周长，S是面积']),'','____'),
	ZLR('外接圆\nCircumcircle\nCircumscribed circle____________'+kul([
		'外接圆的圆心称为外心O，',
		'半径称为外径',
		'外心是三条中垂线的交点',
		'半径R满足R = abc/(4S)',
		'其中a,b,c是边长，S是面积']),'','____'),
		
	ZLR('旁切圆\n外切圆\nExcircle\nEscribed circle____________'+kul([
		'旁（外）切圆的圆心称为旁心E（外切圆心），',
		'半径称为旁径'+kxf('Exradii')+'（外切圆半径）',
		'旁心（外切圆心）是三角形一个内角平分线与',
		'另两个内角相应外角平分线的交点']),'','____'),

	ZLR('九点圆\nNine-point circle\nFeuerbach\'s circle\nEuler\'s circle\nTerquem\'s circle\nthe six-points circle\nthe twelve-points circle\nthe n-point circle\nthe medioscribed circle\nthe mid circle\nthe circum-midcircle'+
		'____N____'+kxA(['三角形三边中点M_i（3个）和垂足H_i（3个），',
		'以及欧拉点e_i（3个，三个顶点与垂心连线中点）',
		'，九点共圆'])+'____'+kul([
		'圆心N是垂心H与外心O连线OH的中点',
		'圆心N在欧拉线上',
		'半径是外接圆半径（外径R）的一半',
		'九点圆与内切圆（内切），3个旁切圆（外切）'+kbox('费尔巴哈定理Feuerbach\'s Theorem'),
		'九点圆与三角形任意两顶点与垂心组成的新三角形（共3个）的内切圆，3个旁切圆均相切',
		'综上，九点圆与上述4个内切圆（内切），12个旁切圆（外切）',
		
		'三角形的外接圆、九点圆、极圆、外接三角形的外接圆共轴',
		'外心O，重心G，九点圆心N，垂心H 四点共线',
		
		'OG:GN:NH = 2:1:3',
		'OH = 2NH',
		'OG = 2GN',
		
		'GH = 2OG ⇔ OG = '+frac('GH',2,''),
		'GH = 4GN ⇔ GN = '+frac('GH',4,''),
		
		'ON = NH = 3GN',
		
		'OH^2 = R^2-8R^2\\cos A\\cos B\\cos C = 9R^2-(a^2+b^2+c^2)',
		'HI^2 = 2r^2-4R^2\\cos A\\cos B\\cos C = 2r^2+4R^2-(a^2+b^2+c^2)/2',
		'九点圆心N是GH的1/4定比分点',
		'外心O是GH的-1/2定比分点',
		
		
	]),'','____'),

	ZLR('极圆\nPolar circle________'+kxA([
		'圆心是三角形垂心',
		'半径r满足r^2 = HA⋅HD = HB⋅HE = HC⋅HF',
		'= -4R^2\\cos A\\cos B\\cos C',
		'= (a^2+b^2+c^2)/2 -4R^2'
		,'其中H是垂心，R是外接圆半径'])+'____钝角三角形才有极圆','','____'),
		
		
	
	ZLR('鱼鳔形\nVesicae Piscis\nFish Bladder________半径相等，圆心距等于半径的两个圆重合的部分','','____'),



		
	ZLR('长方形\nRectangle________','','____'),
		
	ZLR('正方形\nSquare  ','','____'),

	ZLR('平行四边形\nParallelogram  ','','____'),

	ZLR('菱形\n  ','','____'),

	ZLR('梯形\nTrapezoids  ','','____'),


	ZLR('多边形\nPolygon  ','','____'),
	ZLR('正多边形\nRegular Polygon  ','','____'),

	ZLR('九边形\nEnneagon\nNonagon\n9-gon ','','____'),
		
		
	ZLR('星形多边形\nStellating polygon ','','____'),




],'wiki').replace(/\n/g,br))+
detail('平面几何图形的一元运算',Table([ZLR('形状 边长\nSideLength 半径\nRadius(Radii) 直径\nDiameter 边数\nSides 顶点数\nVertex(Vertices) 周长\nPerimeter 面积\nArea 中点连线图形面积')],[
	
	ZLR('圆  '),
	ZLR('椭圆  '),
	ZLR('长方形 '),
	ZLR('正方形 '),
	ZLR('三角形 '),
	ZLR('三角形内切圆 '),
	ZLR('三角形外接圆 '),
	
	
	ZLR('多边形____\\cos ^2(π/n)','','____'),	//https://bbs.emath.ac.cn/thread-4864-3-1.html
	ZLR('多边形外接圆 '),
	


],'wiki').replace(/\n/g,br))+
detail('平面几何图形的二元关系',Table([ZLR('名称 记法 定义 性质')],[
	

	ZLR('相切\nTouch________','','____'),

	ZLR('共轴\nCoaxal________几个圆的圆心共线____'+kul([
		'三角形的外接圆、九点圆、极圆、外接三角形的外接圆共轴'
		
	]),'','____'),

	ZLR('相似\nSimilar________两图形相应边成同一比例，相应角相等____'+kul([
		
		
	]),'','____'),


	ZLR('位似\nSimilar________两相似图形相应边平行，相应顶点连线共点于位似中心____'+kul([
		
		
	]),'','____'),



],'wiki').replace(/\n/g,br))+
	
detail('作图',Table([ZLR('名称 记法 定义 性质')],[
	
	ZLR('尺规作图\nCompass and Straightedge________用圆规与无尺度的直尺','','____'),


],'wiki').replace(/\n/g,br))
);