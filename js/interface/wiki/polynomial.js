/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Polynomial']=Kx(

detail('多项式',Table([ZLR('名称 记法 定义 性质')],[

	['零多项式\n零单项式\nzero','0','',
		kul(['没有次数'])
	],
	['零次多项式\n零次单项式\nof null degree','','非零常数',
		kul(['次数为0'])
	],
	['单项式\nMonomial','Ax_1^{i_1}x_2^{i_2}⋯',khrA([]),
		kul([])
	],
	['多项式\nPolynomial','',khrA([]),
		kul([])
	],
	['既约多项式\n不可约多项式\nirreducible Polynomial','',khrA(['不可以分解']),
		kul([])
	],
	['可约多项式\nreducible Polynomial','',khrA(['可以分解']),
		kul([])
	],


],'wiki').replace(/\n/g,br))+

detail('多项式（一元运算）',Table([ZLR('名称 记法 定义 性质')],[
	
	['次数\ndegree','∂(P)',piece([['无定义N/A','P=0'],[0,'P是常数'],['变元幂次数','P是单项式'],['变元的最高幂次数','P是多项式']]),
		'当$PQ≠0（即P≠0,Q≠0）$时'+kul(['∂(P)≥0','∂(P±Q)≤\\max \\{∂(P), ∂(Q)\\}','∂(PQ)=∂(P)+∂(Q)'])],
	['项数\nterm number','n(P)',piece([[1,'P是单项式'],['含有单项式的个数\\\\（无法继续合并）','P是多项式']]),
		kul(['n(P)≥0','n(P±Q)≤n(P)+n(Q)','n(PQ)≤n(P)n(Q)'])],
	['因式\nfactor','','',kul([
	])],
	['平凡因式\ntrivial factor','cf(x) \\\\ 常数c≠0','',kul([
	])],
	['非平凡因式\nnon-trivial factor','','',kul([
	])],
	['因式分解\nfactorization\nfactoring','','',kul([kxA(['复数域上，n次多项式可以分解为n个1次因式乘积',kbox('代数学基本定理')]),
		kxA(['实数域上，n次多项式可以分解为若干个1次（或2次）因式乘积','证明：因为复数根共轭成对出现']),
		kxA(['有理域及整数环上，n次多项式可能无法分解','证明：因为存在任意次数不可约多项式，','例如：x^n+2','证明：根据'+kxf('Eisenstein')+'判别法']),
		'因式分解方法：\\\\ '+ztable([
			['提取公因子法',''],
			['公式分解法','例如：利用平方差、立方差、立方和'],
			['分组分解法','重新分组（有时还需添项、拆项）'],
			['求根分解法','f(a)=0 ⇒ (x-a)|f(x)'],
			['十字相乘法（交叉相乘法）',''],
			['待定系数法',''],
			['配方法',''],
			]),
	])],


],'wiki').replace(/\n/g,br))+

detail('多项式（二元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['加法','',khrA(['合并同类项']),kul(['加减运算：交换群','封闭性，结合律，交换律，单位元0，可逆'
		])
	],
	['减法','',khrA(['合并同类项']),kul(['加减运算：交换群','封闭性，结合律，交换律，单位元0，可逆'
		])
	],
	['乘法','',piece([['同底幂相加','当P、Q是单项式'],['按乘法对加法的分配率展开，\\\\ 然后合并同类项','其余情况']]),
		kul(['乘法运算：独异点\n封闭性，结合律，单位元1，零元0',
		'加减乘法运算：整环'+piece(['加法交换群','乘法可交换无零因子独异点','乘法对加法分配率']),
		])
	],
	['除法','','',kul([
		ztable([['综合除法（霍纳方法）','长除法'],
			[kbox('synthetic division | Horner method'),kbox('long division')],
			['','类似于竖式计算数字除法']
		])
		])
	],
	
	
	['最大公因式\n最高公因式\nhighest common factor',khrA(['(a,b)','\\gcd(a,b)']),'最大的公约数',
		kul(['是其他公因式的倍数','(a_1,a_2,⋯,a_n) = ((a_1,a_2,⋯,a_{n-1}),a_n)','(a+kb,b) = (a,b)',
		'∃整数s,t，使得(a,b)=as+bt','(a,b)[a,b] = ab',
		'根据a,b的标准分解式，取各素因子的最小幂',
		'求法：标准分解式、竖式法（试除法）、辗转相除法',
		kxA(['两个1元2次多项式有公根 ⇔ 结式=0',
			'即ax^2+bx+c=0，dx^2+ex+f=0有公根',
			'⇔ '+det(zstrx('abc0;0abc;def0;0def',''),'')+' = 0'
			])
		])
	],
	['最小公倍式\n最低公倍式\nleast common multiple',khrA(['[a,b]',kxf('lcm')+'(a,b)']),'最小的公倍数',
		kul(['是其他公倍数的真因子','[a_1,a_2,⋯,a_n] = [[a_1,a_2,⋯,a_{n-1}],a_n]',
		'(a,b)=1 ⇒ [a,b]=ab','(a,b)[a,b] = ab',
		'根据a,b的标准分解式，取各素因子的最大幂'
		])
	],
	['取余数\nmod','a \\bmod b','',
		''
	]

],'wiki').replace(/\n/g,br))+

detail('多项式（二元关系）',Table([ZLR('名称 记法 充要条件 性质')],[
	['同类项\nlike term',kbrA([]),kul(['单项式之间，变元及相应幂相同'
		]),kul(['等价关系'
		])
	],
	['同次根式\nradicals with same degree',kbrA([]),kul(['根指数相同'
		]),kul(['等价关系'
		])
	],
	['同类根式\nsimilar radical',kbrA([]),kul(['化简为最简根式后，\n被开方数及根指数相同'
		]),kul(['等价关系'
		])
	],
	
	['共轭因式\n有理化因式\nconjugate factor\nrationalization factor','',kul(['两个无理式（均含有根式）','乘积为有理式'
		]),kul(['不唯一',
			'主要用途：分子或分母有理化',
			'求法：\\\\ '+ztable([['无理式','共轭因式'],
				['A±'+kroot('B'),'A∓'+kroot('B')],
				[kroot('A')+'±'+kroot('B'),kroot('A')+'∓'+kroot('B')],
				[kroot('A','k')+'+'+kroot('B','k'),kroot('A^{k-1}','k')+'-'+kroot('A^{k-2}B','k')+'+'+kroot('A^{k-3}B^2','k')+'+⋯+(-1)^{k-1}'+kroot('B^{k-1}','k')],
				[kroot('A','k')+'-'+kroot('B','k'),kroot('A^{k-1}','k')+'+'+kroot('A^{k-2}B','k')+'+'+kroot('A^{k-3}B^2','k')+'+⋯+'+kroot('B^{k-1}','k')],
				[kroot('A')+'+'+kroot('B')+'+'+kroot('C'),'('+kroot('A')+'+'+kroot('B')+'-'+kroot('C')+')(A+B-C-2'+kroot('AB')+')'],
				[zarray(['a_0+a_1'+kroot('x','n')+'+a_2'+kroot('x^2','n'),'+⋯+a_{n-1}'+kroot('x^{n-1}','n')]),
				zarray(['b_0+b_1'+kroot('x','n')+'+b_2'+kroot('x^2','n')+'+⋯+b_{n-1}'+kroot('x^{n-1}','n'),'待定系数法，确定系数b_i'])],
				['某一根式的多项式P(x)',zarray(['利用互素多项式Q(x)，辗转相除法，得到','M(x)P(x)+N(x)Q(x)=1','得到共轭因式M(x)'])]
			],'',5)
			
		])
	],

	['等于\nequal',kbrA(['a=b','不等于a≠b']),'',kul(['等价关系'
		])
	],
	['整除\ndivide','a|b','',kul(['偏序关系'
		])
	],
	['互素\nco-prime\nrelatively prime','(a,b)=1','',kul(['[a,b]=ab'
		])
	],


],'wiki').replace(/\n/g,br))+
detail('多项式恒等式（因式分解公式）',Table([ZLR('名称 记法 结果 性质')],[
	

	['2次多项式','x^2+(a+b)x+ab','(x+a)(x+b)'],
	['2次多项式','cdx^2+(ad+bc)x+ab','(cx+a)(dx+b)'],
	['完全平方','a^2±2ab+b^2','(a±b)^2'],
	['平方差','a^2-b^2','(a+b)(a-b)'],
	['完全立方','a^3±3a^2b+3ab^2±b^3','(a±b)^3'],
	['立方和（差）','a^3±b^3','(a±b)(a^2∓ab+b^2)'],
	['奇数方和','a^n+b^n','(a+b)(a^{n-1}-a^{n-2}b+a^{n-3}b^2-⋯-ab^{n-2}+b^{n-1})'],
	['奇数方差','a^n-b^n','(a-b)(a^{n-1}+a^{n-2}b+a^{n-3}b^2+⋯+ab^{n-2}+b^{n-1})'],
	[kxA(['偶数方差','n=2^kd','d是奇数']),'a^n-b^n',khrA(['(a+b)(a-b)(a^{n-2}+a^{n-4}b^2+a^{n-6}b^4+⋯+a^2b^{n-4}+b^{n-2})',
		kxA(['(a+b)(a-b)(a^{d-1}-a^{d-2}b+a^{d-3}b^2-⋯-ab^{d-2}+b^{d-1})',
		'(a^{d-1}+a^{d-2}b+a^{d-3}b^2+⋯+ab^{d-2}+b^{d-1})',
		'(a^{2d}+b^{2d})(a^{4d}+b^{4d})⋯(a^{2^{k-1}d}+b^{2^{k-1}d})'])
		])
		],
	[kxA(['偶齐次项和','n=2^kd-2','k>1','d是奇数']),'a^n+a^{n-2}b^2+a^{n-4}b^4+⋯+a^2b^{n-2}+b^n',
		kxA(['(a^{d-1}-a^{d-2}b+a^{d-3}b^2-⋯-ab^{d-2}+b^{d-1})',
			'(a^{d-1}+a^{d-2}b+a^{d-3}b^2+⋯+ab^{d-2}+b^{d-1})',
			'(a^{2d}+b^{2d})(a^{4d}+b^{4d})⋯(a^{2^{k-1}d}+b^{2^{k-1}d})'
		])
		],
	['4次齐次项和','a^4+a^2b^2+b^4',
		'(a^2+ab+b^2)(a^2-ab+b^2)'
		],
	['3项和平方','a^2+b^2+c^2+2(ab+ac+bc)',
		'(a+b+c)^2'
		],
	['3项和立方','a^3+b^3+c^3+3(a^2b+a^2c+b^2a+b^2c+c^2a+c^2b)+6abc',
		'(a+b+c)^3'
		],
	['n项和平方',sum('i',1,'n','a_i^2','','')+'+2'+sum('','i≤j','','a_ia_j','',''),
		lrp('',sum('i',1,'n','a_i','',''),'','')+'^2'
		],
	['欧拉恒等式\nEuler identity',khrA(['(aw+bx+cy+dz)^2+(bw-ax+dy-cz)^2+(cw-dx-ay+bz)^2+(dw+cx-by-az)^2',
		'(aw+bx+cy+dz)^2+(-ax+bw-cz+dy)^2+(-ay+bz+cw-dx)^2+(-az-by+cx+dw)^2']),
		khrA(['(a^2+b^2+c^2+d^2)(w^2+x^2+y^2+z^2)','看看是否可以写成矩阵形式来证明'])
		],
	

],'wiki').replace(/\n/g,br))

);