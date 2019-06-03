/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Fraction']=Kx(


	
detail('分式类型 Fraction',Table([ZLR('名称 记法 定义 性质')],[


	['最简分式\n既约分式\nirreducible fraction','',khrA(['分子、分母互素的分式']),
		kul([])
	],
	['真分式\nproper fraction','',khrA(['分子次数小于分母次数的分式']),
		kul([])
	],
	['假分式\nimproper fraction','',khrA(['分子次数小于分母次数的分式']),
		kul([])
	],
	['繁分式\ncomplex fraction','',khrA(['分子或分母是分式的分式']),
		kul([])
	],
	['连分式\ncontinued fraction','',khrA(['连续分式']),
		kul([])
	],
	['部分分式\npartial fraction',frac('r(x)','p^m(x)',''),kxA(['p(x)是不可约多项式','m是自然数','∂(r(x)) < ∂(p(x))']),
		kul([kxA(['既约真分式可以唯一分解为部分分式之和','设g(x)标准分解式','Ap_1^{m_1}(x)p_2^{m_2}(x)⋯p_l^{m_l}(x)',
			'则'+frac('f(x)','g(x)','')+'='+sum('i',1,'l',sum('k_i',1,'m_i',frac('r_i^{k_i}(x)','p_i^{k_i}(x)',''),'',''),'','')]),
	
			kxA(['设复数域上g(x)标准分解式','A(x-a_1)^{m_1}(x-a_2)^{m_2}⋯'+'(x-a_l)^{m_l}',
			'则'+frac('f(x)','g(x)','')+'='+sum('i',1,'l',sum('k_i',1,'m_i',frac('A_i^{k_i}','(x-a_i)^{k_i}',''),'',''),'','')]),

			kxA(['设实数域上g(x)标准分解式','A(x-a_1)^{m_1}(x-a_2)^{m_2}⋯'+'(x-a_l)^{m_l}',
				'(x^2+p_1x+q_1)^{t_1}⋯(x^2+p_sx+q_s)^{t_s}',
			'则'+frac('f(x)','g(x)','')+'='+sum('i',1,'l',sum('k_i',1,'m_i',frac('A_i^{k_i}','(x-a_i)^{k_i}',''),'',''),'','')+'+'+
				sum('i',1,'s',sum('k_i',1,'t_i',frac('B_{ik_i}x+C_{ik_i}','(x^2+p_ix+q_i)^{k_i}',''),'',''),'','')]),

			'部分分式分解方法：待定系数法、带余除法、辗转相除法'
		
		])
	],
	['欧拉分式\nEuler fraction','P_k',khrA([kxA([frac('a^k','(a-b)(a-c)','')+'+'+frac('b^k','(b-a)(b-c)','')+'+'+frac('c^k','(c-a)(c-b)',''),
			'其中，a,b,c是3个不同常数','显然P_0=P_1=0','P_2=1','P_3=a+b+c']),
			'一般地，'+
			sum('i',1,'n',frac('a_i^k',prod('','i≠j','','(a_i-a_j)','',''),''),'',''),
			]),
		kul(['P_k='+piece([[0,'0 < k < n-1'],[1,'k=n-1'],[sum('i',1,'n','a_i','',''),'k=n']])
		
		])
	],

],'wiki').replace(/\n/g,br))

);