/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Concept/Geometry/Solid']=Kx(

detail('立体几何图形的类型',Table([ZLR('名称 记法 定义 性质')],[
	
	ZLR(I18('Polytope')+'________'+khrA(['多个平面几何图形围成的形体','在n维空间中，则是n-'+kxf('Polytope')])+'____'+kul([
		'2维空间中是多边形','3维空间中是多面体']),'','____'),
	ZLR('多面体\nPolyhedron\nPolyhedra(复数)________3维空间中多个平面几何图形围成的形体','','____'),
	//https://en.wikipedia.org/wiki/Polyhedron
	//https://en.wikipedia.org/wiki/Polyhedral
	
	
	ZLR(I18('Regular Polyhedron')+'________点传递、边传递、面传递____'+kul([
		'每个面都是一样的正多边形',
		'对偶满足：正多面体',
		'共9个：5个柏拉图多面体（是共点多面体）、',
		'4个正星形多面体']),'','____'),
	

	ZLR(I18('Quasi-regular Polyhedron')+'________点传递、边传递、面不传递，正则面____对偶满足：点不传递、边传递、面传递，正则点','','____'),

	ZLR(I18('Semi-regular Polyhedron')+'________点传递、边不传递，正多边形面____对偶满足：点不传递、面传递，正则点','','____'),
		
	ZLR(I18('Uniform Polyhedron')+'________点传递，正多边形面____对偶满足：面传递，正则点','','____'),
		//https://en.wikipedia.org/wiki/Uniform_polyhedron
		
		
	ZLR(I18('Noble Polyhedron')+'________点传递、面传递____对偶满足：点传递、面传递','','____'),
		
	ZLR(I18('Isogonal polyhedron')+'________点传递____','','____'),

	ZLR(I18('Isotoxal polyhedron')+'________边传递____','','____'),

	ZLR(I18('Isohedral polyhedron')+'________面传递____','','____'),

	ZLR(I18('Convex polyhedron')+'____________'+kul([
		'重要类型包含柏拉图多面体',
		'（及对偶：'+kxf('Catalan')+'多面体）、',
		'阿基米德多面体',
		'（及对偶：正则面'+kxf('Johnson')+'多面体）']),'','____'),

	ZLR(I18('Concave Polyhedron')+'________','','____'),

	ZLR(I18('Platonic solids')+'________共5个\n','','____'),

	ZLR(I18(['Regular Star Polyhedra','Kepler–Poinsot Polyhedra'])+'________共4个','','____'),

	ZLR(I18('Archimedean Solids')+'________共5个','','____'),
		//http://www.360doc.com/content/17/0715/22/17799864_671617816.shtml
		
		

	ZLR(I18(['Tetrahedron','Triangular Pyramid'])+'________金字塔形状','','____'),

	ZLR(I18('Cube',['正立方体','正六面体'])+'________','','____'),
	
	ZLR(I18('Octahedron')+'________','','____'),

	ZLR(I18('Dodecahedron')+'________','','____'),

	ZLR(I18('Icosahedron')+'________','','____'),

	ZLR(I18('Stellating Polyhedra'),'','____'),

	ZLR(I18('Prismatoid')+'________顶点都在两个平面之内？','','____'),
		//https://en.wikipedia.org/wiki/Prismatoid
		
		
	ZLR(I18('Prism')+'________','','____'),
		//https://en.wikipedia.org/wiki/Prism_(geometry)#Prismatic_polytope
		
	ZLR(I18('Pyramid')+'________','','____'),

	ZLR(I18('Frustum')+'________','','____'),
		//https://en.wikipedia.org/wiki/Frustum



],'wiki').replace(/\n/g,br))+
detail('立体几何图形的一元运算',Table([ZLR('名称 记法 定义 性质')],[
	
	
	ZLR(I18('Dual'),'','____'),



],'wiki').replace(/\n/g,br))+
detail('立体几何图形的二元关系',Table([ZLR('名称 记法 定义 性质')],[
	
	ZLR(I18('Touch')+'________','','____'),

	ZLR(I18('Coaxal')+'____________'+kul([
		''
	]),'','____'),



],'wiki').replace(/\n/g,br))

);