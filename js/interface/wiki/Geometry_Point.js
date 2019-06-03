/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Point']=Kx(


detail('点的类型',Table([ZLR('名称 记法 定义 性质')],[

	ZLR('点\nPoint____P________','','____'),
	ZLR('原点\nOriginal____O____坐标轴上的点(0,0)','','____'),
	ZLR('中点\nMidpoint________','','____'),
	ZLR('交点\nIntersection________','','____'),
	ZLR('顶点\nVertex\nVertices（复数）________','','____'),
	ZLR('垂足\nFoot of altitude________底边与高的交点','','____'),
	
	ZLR('圆心\nCenter of circle________','','____'),
	ZLR('焦点\nFocus\nFoci（复数）________','','____'),
	
	
	ZLR('垂心\nOrthocenter____H____'+khrA(['三角形三条高（垂线）的交点','垂心也是高线三角形内心']),'','____'),
	ZLR('重心\n质心\n中心\nCentroid\nGeometric barycenter____G____三角形三条中线的交点','','____'),
	ZLR('内心\nIncenter____I____'+khrA(['三角形内切圆圆心','三角形三条角平分线的交点']),'','____'),
	ZLR('外心\n外接圆心\nCircumcenter____O____'+khrA(['三角形外接圆圆心','三角形三条中垂线的交点'])+'____'+kxA(['外心在三角形的'+
		piece([['内部','锐角三角形'],['一条边上','直角三角形'],['外部','钝角三角形']]),
		kbox('泰勒斯定理(Thales\' Theorem')]),'','____'),
	ZLR('旁心\n外切圆心\nExcenter____E??____'+kxA(['三角形旁切圆的圆心','旁切圆，即外切圆，','与三角形的一边和其他两边的延长线相切的圆'])+'____三角形有3个外切圆，3个外切圆心（旁心）','','____'),


	ZLR('对称中线点\nSymmedian point\nLemoine point\nGrebe point________三角形的3条对称中线的交点____现代几何的皇冠上的一颗钻石（Ross Honsberger）','','____'),

	ZLR('半周长点\nSemiperimeter point________三角形过一个顶点的周长平分线与对边的交点____','','____'),
		
		
	ZLR('Gergonne点\nGergonne point________'+kxA(['三角形的3条连线的交点',
		'三角形3条顶点与内切圆内切点','（对边上的）连线的交点','内接三角形的对称中线点']),'','____'),

	ZLR('Nagel点\nNagel Point\nBisected Perimeter point________三角形3条周长平分线'+kxf('Splitter')+'的交点____'+kul([
		kxf('Nagel')+'点与'+kxf('Gergonne')+'点等角共轭',
		'三角形内心是其中位三角形的'+kxf('Nagel点'),
		'三角形'+kxf('Nagel')+'点是其反中位三角形的内心']),'','____'),

	ZLR('Spieker圆心\nSpieker Center________三角形中位三角形内切圆的圆心____','','____'),
		
		
	ZLR('Mittenpunkt________旁接三角形的对称中线点____','','____'),


	ZLR('Feuerbach点____F____九点圆与内切圆内切的点____'+href(H+'www.gogeometry.com/geometry/feuerbach_points_animated_angle.htm','几何动图'),'','____'),
	ZLR('外Feuerbach点\nExt. Feuerbach________九点圆与旁切圆外切的点（共3个）____','','____'),
		
	ZLR('欧拉点\Euler____E____顶点与垂心连线的中点（共3个）____3个欧拉点组成欧拉三角形____','','____'),

	ZLR('第一等心\nFirst Isogonic Center________'+kxA(['三角形的3条连线的共点',
		'顶点与外侧等边三角形','（以对边为一边）新顶点连线']),'','____'),

	ZLR('费马点\nFermat point\nTorricelli point\nFermat–Torricelli point________满足与三角形3个顶点距离之和最短的点____'+
		'费马点是'+piece([['钝角所在顶点','当三角形最大角 > 120°时'],
			['第一等心','当三角形最大角不超过120°时']]),'','____'),



	ZLR('第一拿破仑点\nFirst Napoleon point\nOuter Napoleon point________'+kxA(['三角形3条连线的共点',
		'顶点与外侧等边三角形（以对边为一边）中心连线'])+'____','','____'),
	ZLR('第二拿破仑点\nSecond Napoleon point\nInner Napoleon point________'+kxA(['三角形3条连线的共点',
		'顶点与内侧等边三角形（以对边为一边）中心连线'])+'____','','____'),

	ZLR('雅可比点\nJacobi point________'+kxA(['三角形的3条连线的共点',
		'三角形每个内角的两边都往外作一对等角','（度数可以与内角不一样），','得到三角形外侧3个新三角形，','其中的3个新顶点','分别与原三角形相应顶点连线']),'','____'),

		
	ZLR('Schiffler点\n________'+kxA(['三角形及另3个三角形的欧拉线共点','另外的三角形，均与其共两个顶点且内心是第3个顶点'])+'____','','____'),

	ZLR('Apollonius点\n________'+kxA(['三角形的3条连线的共点','一个圆与三角形3个外（旁）切圆均内切','3个切点与原三角形相应顶点的连线'])+'____','','____'),



],'wiki').replace(/\n/g,br))+
detail('点的二元关系',Table([ZLR('名称 记法 定义 性质')],[

	ZLR('共线\nCollinear________','','____'),
	ZLR('共圆\nConcyclic________','','____'),




],'wiki').replace(/\n/g,br))
);