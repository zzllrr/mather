/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Solid']=Kx(

detail('立体几何图形的类型',Table([ZLR('名称 记法 定义 性质')],[
	
	ZLR('多胞形\nPolytope________'+khrA(['多个平面几何图形围成的形体','在n维空间中，则是n-'+kxf('Polytope')])+'____'+kul([
		'2维空间中是多边形','3维空间中是多面体']),'','____'),
	ZLR('多面体\nPolyhedron\nPolyhedra(复数)________3维空间中多个平面几何图形围成的形体','','____'),
	//https://en.wikipedia.org/wiki/Polyhedron
	//https://en.wikipedia.org/wiki/Polyhedral
	
	
	ZLR('正多面体\nRegular polyhedron________点传递、边传递、面传递____'+kul([
		'每个面都是一样的正多边形',
		'对偶满足：正多面体',
		'共9个：5个柏拉图多面体（是共点多面体）、',
		'4个正星形多面体']),'','____'),
	

	ZLR('准正多面体\nQuasi-regular polyhedron________点传递、边传递、面不传递，正则面____对偶满足：点不传递、边传递、面传递，正则点','','____'),

	ZLR('半正则多面体\nSemi-regular polyhedron________点传递、边不传递，正多边形面____对偶满足：点不传递、面传递，正则点','','____'),
		
	ZLR('正多边形多面体\nUniform polyhedron________点传递，正多边形面____对偶满足：面传递，正则点','','____'),
		//https://en.wikipedia.org/wiki/Uniform_polyhedron
		
		
	ZLR('正直多面体\nNoble polyhedron________点传递、面传递____对偶满足：点传递、面传递','','____'),
		
	ZLR('等角多面体\nIsogonal polyhedron________点传递____','','____'),

	ZLR('等边多面体\nIsotoxal polyhedron________边传递____','','____'),

	ZLR('等面多面体\nIsohedral polyhedron________面传递____','','____'),

	ZLR('凸多面体\nConvex polyhedron____________'+kul([
		'重要类型包含柏拉图多面体',
		'（及对偶：'+kxf('Catalan')+'多面体）、',
		'阿基米德多面体',
		'（及对偶：正则面'+kxf('Johnson')+'多面体）']),'','____'),

	ZLR('凹多面体\nConcave polyhedron________','','____'),

	ZLR('柏拉图多面体\nPlatonic solids________共5个\n','','____'),

	ZLR('正星形多面体\nRegular star polyhedra\nKepler–Poinsot polyhedra________共4个','','____'),

	ZLR('阿基米德多面体\nArchimedean solids________共5个','','____'),
		//http://www.360doc.com/content/17/0715/22/17799864_671617816.shtml
		
		

	ZLR('四面体\nTetrahedron\nTriangular pyramid________金字塔形状','','____'),

	ZLR('正方体\n正立方体\n正六面体\nCube________','','____'),
	
	ZLR('八面体\nOctahedron________','','____'),

	ZLR('十二面体\nDodecahedron________','','____'),

	ZLR('二十面体\nI\\cos ahedron________','','____'),

	ZLR('星形多面体\nStellating polyhedra','','____'),

	ZLR('拟柱体\nPrismatoid________顶点都在两个平面之内？','','____'),
		//https://en.wikipedia.org/wiki/Prismatoid
		
		
	ZLR('棱柱\nPrism________','','____'),
		//https://en.wikipedia.org/wiki/Prism_(geometry)#Prismatic_polytope
		
	ZLR('棱锥\nPyramid________','','____'),

	ZLR('棱台\nFrustum________','','____'),
		//https://en.wikipedia.org/wiki/Frustum



],'wiki').replace(/\n/g,br))+
detail('立体几何图形的一元运算',Table([ZLR('名称 记法 定义 性质')],[
	
	
	ZLR('对偶\nDual','','____'),



],'wiki').replace(/\n/g,br))+
detail('立体几何图形的二元关系',Table([ZLR('名称 记法 定义 性质')],[
	
	ZLR('相切\nTouch________','','____'),

	ZLR('共轴\nCoaxal____________'+kul([
		''
	]),'','____'),



],'wiki').replace(/\n/g,br))

);