/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Vector']=Kx(

detail('向量（一元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['模','|a|',kroot('(a,a)'),''],
],'wiki').replace(/____/g,br))+
//kxc('a','','boldsymbol')		kxc('a','bf')	kxo('a','⇀')
detail('向量（二元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['内积____点积____数量积____标(量)积____(dot|scalar|inner|direct) product',khrA(['(a,b)','a⋅b']),
		khrA(['各分量分别相乘后求和','a⋅b=|a||b|\\cos θ 其中θ是夹角']),kul([
		'对称性：a⋅b = b⋅a',
		'分配率：a⋅(b+c) = a⋅b+a⋅c',
		
		])],
	['矢积____叉积____向量积____矢(量)积____(vector|skew) product','a×b',
		kbrA(['长度|a×b|=|a||b|\\sin θ','其中θ是夹角','方向右手系决定']),kul([
		'a×a=0',
		'反对称性：a×b = - b×a，也即a×b + b×a = 0',
		'分配率：a×(b+c) = a×b+a×c',
		'(a×b)⋅(c×d) = (a⋅c)(b⋅d) - (a⋅d)(b⋅c)',
		'内积与叉积的关系：|a×b|^2+(a⋅d)^2 = (|a||b|)^2',
		'行列式形式：a×b = '+det(zstrx('i j k;a_1 a_2 a_3;b_1 b_2 b_3'),'')
		])],

],'wiki').replace(/____/g,br))+


detail('向量（三元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['混合积____标量三重积____(mixed|box|triple scalar|scalar triple) product',khrA(['a⋅(b×c)','行列式 \\det[a,b,c]']),'',kul([
		' a⋅(b×c) = b⋅(c×a) = c⋅(a×b)____= (a×b)⋅c = (b×c)⋅a = (c×a)⋅b',
		'((a×b)⋅c)((d×e)⋅f) = \\det '+zmtrx([['a'],['b'],['c']])+'⋅[d,e,f]',
		])],
	['双重矢性积____向(矢)量三重积____(triple vector|vector triple) product','a×(b×c)','a×(b×c)=b(a⋅c)-c(a⋅b)',kul([

		'(a×b)×(a×c) = (a⋅(b×c))a',
		'三元对应带方向的平行六面体',
		])],

],'wiki').replace(/____/g,br))

);