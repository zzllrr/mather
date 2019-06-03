/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Integer']=Kx(
detail('整数（一元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['数根\ndigital root','dr(n)',khrA(['反复求各位数之和，直至结果是个位数','dr(n)=1+((n-1) \\mod 9)',piece([[0,'当n=0时'],[9,'当n≠0且'+kmod('n',0,9)],['n \\mod 9','其余情况']])]),
		ul([kbrA(['dr(n)=0 ⇔ n=0','dr(n)>0 ⇔ n>0','dr(n)=n ⇔ n是1位数','dr(n) < n ⇔ n≥10','dr(-n) = -dr(n)']),
			kbrA([kmod('dr(n)','n',9),kmod('dr(a±b)','dr(a)±dr(b)',9),kmod('dr(a×b)','dr(a)×dr(b)',9),kmod('dr(a^n)','dr^n(a)',9)]),
			Table([$A(['n','dr(n!)'])],$A([ZLR('1 1'),ZLR('2 2'),ZLR('3 6'),ZLR('4 6'),ZLR('5 3'),ZLR('≥6 9')]),'TBrc alignc'),
			'改变数位顺序得到新数，数根不变',
			'乘数根：反复求数位之积，性质：'+br+
				kul(['数位含0（或者含偶数和5），结果为0',
					'数位含5，结果为0或5',
					'数位含1，忽略1',
					'数位含偶数，结果为偶数',
					'改变数位顺序得到新数，结果不变',
					''
				]),
			'幂数根：反复求数位之幂，性质：'+br+
				kul(['数位含0，结果为1',
					'数位含1，忽略1及其后面的数位',
					''
				]),
			'反幂数根：（逆序）反复求数位之幂，性质：'+br+
				kul(['个位=0，结果为0',
					'数位含0（个位≠0），结果为1',
					'数位含1，忽略1及其前面的数位',
					''
				]),
		])],

		
	['阶乘\nFactorial','n!',khrA(['n(n-1)⋯2⋅1','Γ(n+1)','复数域定义：z!=Γ(z+1)='+intl('e^{-x}x^2',0,'','','','')]),
		ul([kbrA(['1!=1','2!=2','3!=6','4!=24','5!=120','6!=720','7!=5040','8!=40320','9!=362880','10!=3628800']),'','更多'+href('#Wi3wi0','组合学公式')])
	],
	['双阶乘\n跳乘\ndouble Factorial','n!!',khrA(['n(n-2)(n-4)⋯',piece([['n(n-2)⋯3⋅1','n是奇数'],['n(n-2)⋯4⋅2','n是偶数']])]),
		ul([''])
	],
	['素数阶乘\n素数连乘\nPrimorial',kbrA(['p\\#','p_n\\#']),khrA(['前n个素数连乘',prod('k',1,'n','p_k','',''),'n\\#定义为不大于n的所有素数连乘']),
		kul(['\\ln(n\\#) \\sim n'])
	],
	['相反数\nopposite','-a','',''],
	['绝对值\nabsolute value','|a|','',''],
	['倒数\nreciprocal',frac(1,'a',''),'',''],
	['因数\n因数\n因子\n除数\ndivisor\nfactor','','',''],

	['因子数\n因子个数\n除数(个数)函数\ndivisor function\nfactor single function','d(n)',khrA(['n的所有（不同，去重）因子个数',sum('','d|n','',1,'','')]),kul([
		'设标准分解式是p_1^{a_1}p_2^{a_2}⋯p_k^{a_k}，则 \\\\ d(n)=(a_1+1)(a_2+1)⋯(a_k+1)='+prod('i',1,'k','(a_i+1)','',''),
		'd(p)=2 ~ 当p是素数时',
		'积性（非完全积性）d(mn)≤d(m)d(n) '
		])],
	['因子和\n因数和\n除数和\ndivisor sum function\nfactor sum function','δ(n)',khrA(['n的所有因子（包含1和n）之和',sum('','d|n','','d','','')]),kul([
		'设标准分解式是p_1^{a_1}p_2^{a_2}⋯p_k^{a_k}，则\\\\ δ(n)='+prod('i',1,'k',sum('j',0,'a_i','p_i^j','',''),'','')+'='+
		prod('i',1,'k',frac('p_i^{a_i+1}-1','p_i-1',''),'',''),
		'p是素数⇒'+piece(['δ(p)=p+1','δ(p^s)=1+p+p^2+⋯+p^s='+frac('p^{s+1}-1','p-1','')]),
		'积性（非完全积性）δ(mn)=δ(m)δ(n) ~ 当(m,n)=1时'
		])],
		
	['因子幂和\n广义因数和\n广义除数和\nt幂次δ函数\ngeneralized divisor sum function','δ_t(n)',khrA(['n的所有因子（包含1和n）的t次方之和',sum('','d|n','','d^t','','')]),kul([
		'设标准分解式是p_1^{a_1}p_2^{a_2}⋯p_k^{a_k}，则\\\\ δ_t(n)='+prod('i',1,'k',sum('j',0,'a_i','p_i^{tj}','',''),'','')+'='+
		prod('i',1,'k',frac('p_i^{t(a_i+1)}-1','p_i-1',''),'',''),
		'p是素数⇒'+piece(['δ_t(p)='+frac('p^{2t}-1','p^t-1','')+'=p^t+1','δ_t(p^s)=1+p^t+p^{2t}+⋯+p^{st}='+frac('p^{t(s+1)}-1','p^t-1','')]),
		'积性δ_t(mn)=δ_t(m)δ_t(n) ~ 当(m,n)=1时',
		'δ_0=d(n) 是n因子数（所有不同因子的个数）',
		'δ_1=δ(n) 是n因子和（所有不同因子的和）'
		])],

	['素因子数\n素因子个数\n素因数个数\nprime factor number function','Ω(n)',khrA(['n的所有（重复）素因子个数',sum('','p|n','',1,'','')]),kul([
		'设标准分解式是p_1^{a_1}p_2^{a_2}⋯p_k^{a_k}，则\\\\ Ω(n)=a_1+a_2+⋯+a_k='+sum('i',1,'k','a_i','',''),
		'Ω(1)=0',
		'Ω(p)=1 ~ 当p是素数时',
		'非积性'
		])],

	['方根\nroot',kroot('x','n'),'',''],
		
	['欧拉函数\n(Euler) Totient Function\n(Euler) phi function','φ(n)',khrA(['小于n且与n互素的正整数个数','不妨特别定义φ(0)=φ(1)=1',
		'φ(n) = n'+prod('','p|n','',lrp('','1-'+frac(1,'p',''),'',''),'','')+'\\\\ '+kxc('证明：n因式分解后，根据积性，连乘','bf','text'),
		'φ(n) = n'+sum('','d|n','',frac('μ(d)','d',''),'','')+'其中μ是'+kxc('Möbius','bf')+'函数',
		'φ(n) = '+sum('k','1','n','(k,n)\\cos'+frac('2kπ','n',''),'',''),
		'φ(n) = n'+lim('s',1,'ζ(s)','','')+sum('','d|n','','μ(d)'+lrp('','e^{'+frac(1,'d','')+'}','','')+'^{s-1}','',''),
		'Cototient余欧拉函数：n-φ(n)']),kul([
			'p是素数 ⇔ φ(p)=p-1',
			'推论：p是素数⇒'+piece(['φ(p)是素数 ⇔ p=3','φ(p)是偶数 ⇔ p≥3',
			'φ(p^k) =p^k-p^{k-1}=p^k'+lrp('','1-'+frac(1,'p',''),'','')+'=p^{k-1}φ(p)',
			]),
		'(a,m)=1⇒'+piece(['积性φ(am) = φ(a)φ(m)',
			kmod('a^{φ(m)}',1,'m')+' ~ '+kbox('Euler定理'),
			'特别地，m是素数 ⇒ '+kmod('a^{m-1}',1,'m'),
			kbox('Fermat\'s little theorem费马小定理'),
			'即'+kmod('a^m','a','m')
			]),
		'n = '+sum('','d|n','','φ(d)','','')+' ~ '+kbox('Gauss定理'),
		'a|b ⇒ φ(a)|φ(b)',
		'n|φ(a^n-1)',
		'φ((m,n))φ([m,n]) = φ(m)φ(n)',
		'φ(mn) = φ(m)φ(n)'+frac('(m,n)','φ((m,n))','')+' = (m,n)φ([m,n]) = '+frac('mnφ([m,n])','[m,n]',''),
		'φ(2m) = '+piece([['2φ(m)','当m是偶数'],['φ(m)','当m是奇数']]),
		'φ(n^m) = n^{m-1}φ(n)',
		frac('φ(n)','n','')+' = '+frac('φ('+kxf('rad')+'(n))',kxf('rad')+'(n)',''),
		frac('n','φ(n)','')+' = '+sum('','d|n','',frac('μ^2(d)','φ(d)',''),'',''),
		sum('',['1≤k≤n','(k,n)=1'],'','k','','')+' = '+frac('nφ(n)',2,'')+' 当n>1时',
		Eq([sum('k','1','n','φ(k)','',''),
			frac('1+'+sum('k',1,'n','μ(k)'+zp(frac('n','k',''),'⌊⌋')+'^2','',''),2,''),
			frac(3,'π^2','')+'n^2+O'+lrp('','n(\\log n)^{'+frac(2,3,'t')+'}(\\log \\log n)^{'+frac(4,3,'t')+'}','','')
		]),
		Eq([sum('k','1','n',frac('φ(k)','k',''),'',''),
			sum('k',1,'n',frac('μ(k)','k','')+zp(frac('n','k',''),'⌊⌋'),'',''),
			frac(6,'π^2','')+'n+O'+lrp('','n(\\log n)^{'+frac(2,3,'t')+'}(\\log \\log n)^{'+frac(4,3,'t')+'}','','')
		]),
		sum('k','1','n',frac('k','φ(k)',''),'','')+' = '+frac('315ζ(3)','2π^4','')+'n-'+frac('\\log n',2,'')+'+O'+lrp('','(\\log n)^{'+frac(2,3,'t')+'}','',''),
		sum('k','1','n',frac(1,'φ(k)',''),'','')+' = '+frac('315ζ(3)','2π^4','')+lrp('','\\log n+γ-'+sum('','素数p','',frac('\\log p','p^2-p+1',''),'',''),'','')+'+O'+lrpfrac('(\\log n)^{'+frac(2,3,'t')+'}','n'),
		sum('',['1≤k≤n','(k,m)=1'],' ',1,'','')+' = n'+frac('φ(m)','m','')+'O'+lrp('','2^{ω(m)}','','')+'\\\\ m>1,ω(m)是m不同素因子个数',
		sum('',['1≤k≤n','(k,n)=1'],'','(k-1,n)','','')+' = φ(n)d(n)\\\\ 其中d(n)=σ_0(n)是n因子个数~'+kbox('Menon等式'),

		])
	],
	['a（对）模m的阶\n次数\n\nmultiplicative order of a modulo n\ndegree',kbrA(['δ_m(a)','e_m(a)']),kbrA(['最小的正整数d，满足',piece([[0,'当(a,m)>1时'],[kmod('a^d',1,'m'),'当(a,m)=1时']])]),
		kul([kmod('a','b','m')+' ⇒ δ_m(a)=δ_m(b)',
			'(a,m)=1 ⇒ '+piece([kmod('a^k',1,'m')+'⇔δ_m(a)|k',
			'特别地，δ_m(a)|φ(m) ~ '+kxc('(根据Euler定理)','bf',''),
			'推论：φ(m)是素数 ⇒ δ_m(a)=1或φ(m)']),
			'm是素数 ⇒ 模m的原根的次数|φ(m)=m-1',
		])],


	['原根\n模p的原根\nPrimitive Root','',kbrA(['a满足阶δ_p(a)=p-1','即'+kmod('a^{p-1}',1,'p'),'且'+kmod('a^q',1,'p',1)+' ~ 当q < p-1时']),
		kul(['模m有原根 ⇔ m=1,2,4,p,2p,p^k其中p是奇素数',
			'素数p有φ(p-1)=φ(φ(p))个原根',
			kxA(['原根求法：从2到p-1穷举，检测此数的若干个幂','（须为p-1的因子）模p余数是否只有p-1次幂模p等于1']),
			'原根的0,1,⋯,p-1次幂，构成模p的简化剩余系',
			'g是模p的原根 ⇒ '+kmod('g^{p-1}',1,2)+' 或 g是模p^k的原根',
			'g是模p^k的原根 ⇒ g或g+p^k（其中之一是奇数）是模2p^k的原根',
		])+
		kol(['有无穷多素数p使得2是模p的原根？~'+kbox('Artin猜想'),
			'有无穷多素数p使得a（非完全平方、-1的整数）是模p的原根？~'+kbox('广义Artin猜想'),
			],'unknown')
		
		],


	['以原根g为底a模p的指标\n离散对数\ndiscrete logarithm',kbrA(['I(a)','离散\\log_g(a)','DLP离散对数问题']),kbrA(['k满足'+kmod('g^k','a','p'),'其中1≤k≤p-1']),
		kul([kmod('I(ab)','I(a)I(b)','p-1'),
			kmod('I(a^k)','kI(a)','p-1'),
		
		])],

	['Liouville函数','λ(n)','n素因子指数和奇偶性(-1或1)',
		ul(['积性函数',])],

	['根\nRadical\n',kxf('rad'),khrA(['n的所有不同素因子乘积',kxf('rad')+'(n) = '+prod('','素数p|n','','p','','')]),
		ul([''])
	],
	['指数\nExponential',kbrA(['e^n','\\exp n']),'e的n次幂',''],
	['自然对数\nnatural logarithm','\\ln n',kbrA(['\\log_en','e^x=n']),''],

	['开平方\n平方根\nsquare-kroot',kroot('n'),'x^2=n','',''],
	['开立方\n立方根\ncubic-kroot',kroot('n',3),'x^3=n','',''],
		
	['CG函数\nConway-Guy函数','cg(n)',kul([
		'cg(1)=1',
		'cg(2)=2→2',
		'cg(3)=3→3→3',
		'cg(4)=4→4→4→4',
		'⋯'
		]),'',''],
		

],'wiki').replace(/\n/g,br))+

detail('整数（二元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['和\n加法\nsum\naddtion','a+b','加数\naddend',''],
	['差\n减法\ndifference\nsubtraction','a-b','被减数minuend\n减数subtrahend',''],
	['积\n乘法\nproduct\nmultiplication',kbrA(['ab','a⋅b','a×b']),'被乘数multiplicand\n乘数multiplicator',ul(['竖式乘法示例：\n'+
		Table('',[['','',1,5,6],['×','','',5,2],['','',3,1,2],['',7,8,0,''],['',8,1,1,2]],'digi TBI2_4')
		
		])],
	['商\n除法\nquotient\ndivision',kbrA(['a÷b','a/b','a:b',frac('a','b','')]),'被除数dividend\n除数divisor',''],
	['算术运算\n四则运算\narithmetic operation','','加减乘除统称',''],

	['幂\n指数\npower\nExponentiation',kbrA(['a^b','a[3]b','a↑b ~ 高德纳箭号','a→b ~ 康威箭号']),'对a连乘b次，即a的b次幂',''],
	['迭代幂\nIterated exponentials',kbrA([msups(['a','a','⋰','a','x'],''),'迭代求幂（第1个幂是x，每次迭代底数都是a）']),'',''],
	['嵌套幂\n指数塔\nNested exponentials\ntowers',ksc(msups(['a_1','a_2','⋰','a_n'],''))+'嵌套求幂（求幂函数的复合（在指数上），每次求幂底数未必一样）','右结合',''],
	['自迭代幂\nhyper-4\nTetration',piece([['^ab',kbox('Rudy Rucker记号')],
		['a[4]b = H_4(a,b)',kbox('超运算记号')],
		['a\\hat{~}\\hat{~}b',kbox('纯文本记号')],
		['\\{a,b,4,1\\} = a \\{4\\} b',kbox('Bowers操作符')],
		['a↑↑b',kbox('高德纳箭号')],
		['a→b→2',kbox('康威链式箭号')],
		['\\exp_a^b(1)',kbox('迭代幂记号')],
		[kxf('uxp')+'_ab = a^{'+kxu('b')+'}',kbox('Hooshmand记号')]]),
		
		kbrA([msups(['a','a','⋰','a'],''),'对a连幂b次（每次迭代底数都是a）']),''],
			
	['自迭代幂塔\nhyper-5\nPentation',kbrA(['a[5]b','a↑↑↑b','a↑^3b']),'对a连幂b次，并重复操作b次',kul([
		'a[5]b = A(4,b) 阿克曼函数'
		])],

	['高德纳箭号\nKnuth箭号\nKnuth\'s up-arrow notation',kbrA(['a↑b','a↑↑b','a↑^nb']),'',kul([
		'右结合',
		'a↑^nb = a[n+2]b = a→b→n',
		'a↑b = a^b',
		'a↑↑b = ^ba = '+msups(['a','a','⋰','a'],''),
		
		
		])],
	['康威箭号\n康威记号\n康威链式箭号\nConway箭号\nConway\'s up-arrow notation',kbrA(['a→b','a→b→c']),kul([
			'空链 = 1; a = a',
			'a→b = a^b',
			'X→1 = X (X是子链)',
			'X→1→(c+1) = X',
			'X→(b+1)→(c+1) = X→(X→b→(c+1))→c',
			kxA(['上述两条可以写成','X→b→(c+1) = X→(⋯(X→(X)→c)⋯)→c','其中X出现b次，c出现b-1次，括号出现b-1次'])
			]),kul([
			'1→X = 1',
			'a→1 = a',
			
			'X→1→Y = X',
			'2→2→Y = 4',
			'X→2→2 = X→(X)',
			'X→3→2 = X→(X→(X))',

			'a→b→c = a[c+2]b = a↑^cb',
			
			'a→1→(c+1) = a',
			'a→(b+1)→(c+1) = a→(a→b→(c+1))→c',
			
			Eq(['a→b→2→2','a→b→(a→b)','a→b→ a^b','a[a^b+2]b']),
			Eq(['a→b→3→2','a→b→(a→b→(a→b))','a→b→(a→b→a^b)','a[a[a^b+2]b+2]b','a[a→b→2→2+2]b']),
			Eq(['a→b→4→2','a→b→(a→b→(a→b→2→2))','a[a→b→3→2+2]b']),
			Eq(['a→b→c→2','a[a→b→(c-1)→2+2]b']),
			
			
			Eq(['a→b→2→3','a→b→(a→b)→2','a[a→b→(a→b-1)→2+2]b']),
			
			'阿克曼函数 A(m,n) = (2→(n+3)→(m-2))-3 (m>2时)'
			])],

	['推广的康威箭号\nExtension by Peter Hurford',kbrA(['a→_bc','a→_bc→_de']),kul([
		'a→_bc = a→_{b-1}a ⋯ →_{\\{b-1\\}}a (c个箭头→_{b-1})',
		'a→_2(a-1) = cg(a)',
		'n→_nn 比 cg(n) 增长得更快',
		'a→_bc→_de = a→_bc→_{d-1}c ⋯ →^{d-1}c (e个箭头→_{d-1})',
		
		]),''],

	['鲍尔斯操作符\nBowers\'s operators',kxA(['m\\{p\\}n','\\{m,n,p\\}']),kul([
		'm\\{1\\}n = m+n',
		'm\\{p\\}1 = m 当p≥2时',
		'm\\{p\\}n = m\\{p-1\\}(m\\{p\\}(n-1)) 当p,n≥2时',
		'm\\{\\{1\\}\\}1 = m',
		'm\\{\\{1\\}\\}n = m\\{m\\{\\{1\\}\\}(n-1)\\}m = m\\{m\\{⋯\\{m\\}⋯\\}m\\}m (嵌套n-1层\\{\\})',
		'm\\{\\{2\\}\\}1 = m',
		'm\\{\\{2\\}\\}n = m\\{\\{1\\}\\}(m\\{\\{1\\}\\}(n-1))',
		'm\\{\\{p\\}\\}n = m\\{\\{p-1\\}\\}(m\\{\\{p\\}\\}(n-1)) 当n,p≥2时',
		
		'm\\{\\{\\{1\\}\\}\\}1 = m',
		'm\\{\\{\\{1\\}\\}\\}n = m\\{\\{m\\{\\{⋯\\{\\{m\\}\\}⋯\\}\\}m\\}\\}m (嵌套n-1层\\{\\{\\}\\})',
		
		'\\{m,n,p,q\\} = m\\{\\{⋯\\{\\{p\\}\\}⋯\\}\\}n (嵌套q层\\{\\})',
		'\\{m,n,p,q\\} = \\{m,\\{m,n-1,p,q\\},p-1,q\\} 当m,q≥1, n,p≥2时',
		'\\{\\} = 1',
		'\\{a\\} = a',
		'\\{a,b\\} = a+b',
		'\\{a,b,c,⋯,k,1\\} = \\{a,b,c,⋯,k\\}',
		'\\{a,1,c,⋯,k\\} = a',
		'\\{a,b,1,⋯,1,d,e,⋯,k\\} = \\{a,a,a,⋯,\\{a,b-1,1,⋯,1,d,e,⋯,k\\},d-1,e,⋯,k\\}',
		'\\{a,b,c,d,⋯,k\\} = \\{a,\\{a,b-1,c,d,⋯,k\\},c-1,d,⋯,k\\}',
		
		
		]),''],


	['阿克曼函数\nAckermann',kxA(['A(m,n)','Ack(n)']),kul([
		piece([
			['n+1','当m=0时'],
			['A(m-1, 1)','当m>0且n=0时'],
			['A(m-1, A(m, n-1))','当m>0且n>0时']
		]),'《译丛》定义'+
		piece([
			['n+2','当m=1时'],
			['2','当m>1且n=1时'],
			['A(m-1, A(m, n-1))','当m>1且n>1时']
		]),
		
		
		])+br+'详见课题'+href('topic_recursive.html','《recursive》')
		,''],



	['斯坦豪斯-莫泽记号\n多边形记号\nSteinhaus–Moser notation','M(n,m,p)',kul([
		piece([
			['n^n','三角形triangle'],
			['嵌套n层三角形','四边形square'],
			['嵌套n层四边形','五边形pentagon ，或用圆圈记号circle']
		]),
		'M(n,m,p)'+eq('def')+'嵌套了m层的p边形（里面是数字n）',
		'M(2,1,3) = n^n',
		'M(n,1,p+1) = M(n,n,p)',
		'M(n,m+1,p) = M(M(n,1,p),m,p)',
		
		'mega'+eq('def')+'② = M(2,1,5) = M(256,256,3) < 10↑↑258（高德纳箭号）',
		'megiston'+eq('def')+'⑩ = M(10,1,5)',
		'moser'+eq('def')+' = M(2,1,M(2,1,5)) < 3→3→4→2 （康威记号）',
		
		]),''],

	['对数\nlogarithm','\\log_ab','a^x=b',''],
		
	['开方\n开b次方\n方根\nb次方根\nb-th root',kroot('a','b'),'x^b=a',''],
		
	['超对数\nsuper-logarithm',kxf('slog')+'_ab',kul([
		kxf('slog')+'_a^xa = x',
		kxf('slog')+'_aa^x = 1+'+kxf('slog')+'_ax',
		
		kxf('slog')+'_ax = 1+'+kxf('slog')+'_a\\log_ax',
		kxf('slog')+'_ax > -2',
		]),''],

	['超根\nn次超根\nn-th super-root','','^nb=a',''],




	['最大公约数\ngreatest common divisor(factor)',kxA(['(a,b)','\\gcd(a,b)']),'最大的公约数',
		kul(['是其他公约数的倍数',
		'(a_1,a_2,⋯,a_n) = ((a_1,a_2,⋯,a_{n-1}),a_n)',
		'(a+kb,b) = (a,b)',
		'∃整数s,t，使得(a,b)=as+bt',
		'(a,b)[a,b] = ab',
		'根据a,b的标准分解式，取各素因子的最小幂',
		'求法：标准分解式、竖式法（试除法）、辗转相除法'
		])
	],
	['最小公倍数\nleast common multiple',kxA(['[a,b]',kxf('lcm')+'(a,b)']),'最小的公倍数',
		kul(['是其他公倍数的真因子','[a_1,a_2,⋯,a_n] = [[a_1,a_2,⋯,a_{n-1}],a_n]',
		'(a,b)=1 ⇒ [a,b]=ab',
		'(a,b)[a,b] = ab',
		'根据a,b的标准分解式，取各素因子的最大幂'
		])
	],
	['余数\nmod','a \\mod b',kbrA(['余数是c','其中0 ≤ c < b','a=c+kb','k是非负整数']),
		kul(['c='+piece([['0','当a=b时'],['a','当a < b时']])
		])
	],
	['幂余数by zzllrr\npow','a ~'+kxf('pow')+'~ b', kbrA(['幂余数是c','其中b∤c','a=cb^k','k是非负整数']),
		kul(['c='+piece([['1','当a=b，即(a,b)=a=b时'],['a','当(a,b)≠b时（例如a < b或b∤a时）'],['a/b~'+kxf('pow')+'~ b','当b|a，即(a,b)=b时']])
		])
	],
	['Legendre symbol\n勒让德符号',lrpfrac('a','p'), kbrA(['p是奇素数 m='+frac('p-1',2,''),piece([[1,'a是二次剩余'],[-1,'a是二次非剩余'],[0,'p|a']])]),
		kul([kmod('a','b','p')+' ⇒ '+lrpfrac('a','p')+'='+lrpfrac('b','p'),
			kxA([kmod(lrpfrac('a','p'),'a^m','p')+kbox('Euler criterion判别准则'),
				' ⇔ '+piece([[kmod('a^m',1,'p'),'a是二次剩余'],[kmod('a^m',-1,'p'),'a是二次非剩余'],[kmod('a^m',0,'p'),'p|a']]),
				' ⇒ '+piece([
					lrpfrac(1,'p')+'=1',
					lrpfrac(-1,'p')+'=(-1)^m='+piece([['1',kmod('p',1,4)],['-1',kmod('p',-1,4)]]),
					lrpfrac(2,'p')+'=(-1)^{'+frac('m(m+1)',2,'t')+'}='+piece([['1',kmod('p','±1',8)],['-1',kmod('p','±3',8)]]),
					lrpfrac('a^2','p')+'='+piece([['1','当p∤a时'],['0','当p|a时']]),
					lrpfrac('ab','p')+'='+lrpfrac('a','p')+lrpfrac('b','p')+' ~ 积性函数',
				])
			]),
		
			kxA(['(a,p)=1，且a,2a,3a,⋯,ma \\pmod p中大于m的个数是k',
				' ⇒ '+lrpfrac('a','p')+'=(-1)^k',kbox('Gauss criterion判别准则，Gauss lemma引理'),
				' ⇒ '+piece([
					lrpfrac(2,'p')+'=(-1)^{'+frac('p^2-1',8,'t')+'}=(-1)^{'+frac('m(m+1)',2,'t')+'}',
					kxA([kmod('ar_i','(-1)^{e_i}r_i\'','p'),
						'其中±'+'r_i（i=1,2,⋯,m）是模p的一组简化系',
						' ⇒ '+lrpfrac('a','p')+'=(-1)^{'+sum('i',1,'m','e_i','','')+'}']),
					])
			]),
			
			kxA([lrpfrac('q','p')+lrpfrac('p','q')+'=(-1)^{'+frac('(p-1)(q-1)',4,'t')+'}',
				'其中p,q是两个不同奇素数',kbox('Quadratic reciprocity law二次互反律'),
				kxc('Gauss','bf')+'先后给出7种以上证明，',
				'并称之为数论之酵母，',
				'引出双二次和三次互反律',
				' ⇒ '+piece([
					[lrpfrac('q','p')+'='+lrpfrac('p','q'),' ⇔ '+kmod('p',1,4)+'或'+kmod('q',1,4)],
					[lrpfrac('q','p')+'= -'+lrpfrac('p','q'),' ⇔ '+kmod('p','q≡-1',4)],
					
				])
			]),
		])
	],

	['Jacobi symbol\n雅可比符号',lrpfrac('a','q'), kbrA(['奇数q>1, m='+frac('q-1',2,''),
			lrpfrac('a','q')+'='+prod('','i','',lrpfrac('a','p_i'),'',''),
			'等号右边是'+kxc('Legendre','bf')+'符号，',
			'p_i是m的全部素因子（含重复）']),
		ul(['$q$是素数时，Jacobi符号即是Legendre符号',
			'性质基本同Legendre符号，除此之外有：',
			'$'+lrpfrac('a','p')+lrpfrac('a','q')+'='+lrpfrac('a','pq')+'$',
			'计算示例：$'+Eq([lrpfrac(383,443),'-'+lrpfrac(443,383),'-'+lrpfrac(60,383),
					'-'+lrpfrac('2^2',383)+lrpfrac(15,383),'-'+lrpfrac(15,383),lrpfrac(383,15),lrpfrac(8,15),lrpfrac(2,15),1],
				['二次互反律','分子同模','分子因式分解','去掉平方项','二次互反律','分子同模','去掉平方项','分子为2公式'],'table')+'$',


		])
	],

],'wiki').replace(/\n/g,br))+
detail('整数（二元关系）',Table([ZLR('名称 记法 定义 性质')],[
	
	['大于\ngreat than','a>b',kul([''
		]),kul(['偏序关系'
		])
	],
	['小于\nless than','a < b',kul([''
		]),kul(['偏序关系'
		])
	],
	['等于\nequal',kbrA(['a=b','不等于a≠b']),kul([''
		]),kul(['等价关系'
		])
	],
	['整除\ndivide\ndivisible','a|b',kul([''
		]),ul(['偏序关系','详见课题'+href('topic_divide.html','《divide》')
		])
	],
	['互素\nco-prime','(a,b)=1',kul(['[a,b]=ab'
		]),''
	],
	['同余\ncongruence',kbrA([kmod('a','b','m'),kmod('a','b','m',1)+'~ 不同余']),kul(['定义：正整数m|a-b','a=b+km','a,b被m除有相同余数'
		]),kul(['等价关系',
		'类似等式：\\\\ '+
			piece([kmod('a','b','m'),kmod('c','d','m')],1)+' ⇒ '+piece([
				kmod('a+c','b+d','m'),kmod('a-c','b-d','m'),
				kmod('ac','bd','m'),kmod(frac('a','c',''),frac('b','d',''),'m')+' ~ 当(c,m)=1时',
				kmod(['a^k','a^sb^{k-s}'],'b^k','m')
			]),
		'不类似等式：\\\\ '+
			kmod('a','b','m')+' ⇒ \\\\ '+piece([kmod('ak','bk','mk'),kmod(frac('a','k',''),frac('b','k',''),frac('m','k',''))+' ~ 当k|(a,b,m)时',
				kmod('a','b','d')+' ~ 当d|m时','特别地，如此时d|a，则d|b',
				'(a,m)=(b,m)','特别地(a,m)=1，则(b,m)=1',
				'δ_m(a)=δ_m(b) 对模m的阶相等',
				
				]),
		kmod('a','b','m_i')+' i=1,2,⋯,k ⇒ \\\\ '+kmod('a','b','[m_1,m_2,⋯,m_k]'),
		
		kxA(['一次同余方程'+kmod('ax','c','m'),'(a,m)=g=au_0+mv_0',
			'当g∤c时，无解',
			'当g|c时，有解(共g个) x_0+k'+frac('m','g',''),
			'其中k=0,1,2,⋯,g-1','一个解x_0=c'+frac('u_0','g','')
			]),
		
		piece([kmod('x','b','m'),kmod('x','c','n'),'(m,n)=1'],1)+' ⇒ 恰有1个解 0≤x≤mn',

		])+'同余方程'+kbrA([kmod('x^k','a','m'),'(a,m)=1=(k,φ(m))','求解步骤：'])+
		kol(['计算φ(m)',
			'求u,满足'+kmod('ku',1,'φ(m)')+'\\\\ 即'+kmod('u',frac(1,'k',''),'φ(m)'),
			'逐次平方法计算B^u \\mod m 得到x'
		])
	],
	['同幂余by zzllrr\npower congruence',kbrA([kmod('a','b','m','','pow'),kmod('a','b','m',1,'pow')+'~ 不同余']),kul(['定义：a/b是m的整数幂','a=bm^k',
		'a,b因子中去掉m的幂后相同',
		'同余中整除关系a|b（b是a的倍数），\\\\ 对应于同幂余关系b是a的幂，\\\\ 记作a⊦b(by zzllrr)，\\\\ 不是幂记作a⊬b'
		]),kul(['等价关系',
		'类似等式：\\\\ '+
			piece([kmod('a','b','m','','pow'),kmod('c','d','m','','pow')],1)+' \\\\ ⇒ '+piece([
				kmod('a±c','b±d','m','','pow')+' ~ 当'+frac('a','b','')+'='+frac('c','d','')+'时',
				kmod('ac','bd','m','','pow'),kmod(frac('a','c',''),frac('b','d',''),'m','','pow')+' ~ 当(c,m)=1时 （是否成立，待定）',
				kmod(['a^k','a^sb^{k-s}'],'b^k','m','','pow')
			]),
		'不类似等式：\\\\ '+
			kmod('a','b','m','','pow')+' ⇒ \\\\ '+piece([kmod('a^k','b^k','m^k','','pow'),
				kmod(frac('a','k',''),frac('b','k',''),frac('m','k',''),'','pow')+' ~ 当k|(a,b,m)时（是否成立，待定）',
				kmod('a','b','d','','pow')+' ~ 一般不成立',
				'(a,m)=(b,m)（是否成立，待定）\\\\ 特别地(a,m)=1，则(b,m)=1（是否成立，待定）',
				'δ_m(a)=δ_m(b) 对模m的阶相等（是否成立，待定）',
				
				]),
		kmod('a','b','m_i','','pow')+' i=1,2,⋯,k \\\\ ⇒ '+kmod('a','b','['+['m_1','m_2','⋯','m_k']+']','','pow')+'（是否成立，待定）',

		])
	],
	['二次剩余QR\n平方剩余\nquadratic residue\n二次非剩余NR\n平方非剩余\nquadratic non-residue','',kul([kmod('x^2','a','b')+' （其中(a,b)=1）\\\\ 方程有解 ⇔ 二次剩余',
		]),kul(['p是素数, m='+frac('p-1',2,'')+' ⇒ '+piece(['模p缩系1,2,⋯,p-1中，二次剩余和二次非剩余各占一半（m个）\\\\ '+
				'且1,2^2,3^2,⋯,m^2 \\pmod p是全部二次剩余',
				'a是二次剩余 ⇔ '+kmod('a^m',1,'p')+br+'a是二次非剩余 ⇔ '+kmod('a^m',-1,'p'),
				piece(['二次剩余的乘积QR*QR','2个二次非剩余的乘积NR*NR'],1)+'是二次剩余',
				'1个二次剩余与1个二次非剩余的乘积QR*NR是二次非剩余'])
		])
	],
	
],'wiki').replace(/\n/g,br))

);
