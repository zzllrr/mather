/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


wiki['Concept/Number/Prime/Prime']=Kx(

detail('素数定义与性质',Table([ZLR('名称 定义 第n项 前n项 性质')],[
	['素数____质数____Prime','只能被1和自身整除','P_n \\\\ p_n',
		'2,3,5,7,11,13,17,19,21,23'.split(',').join(br),
		ul(['有无穷多个',SCtv('notes','证明方法很多，例如：'+SCtv('prov','欧几里德反证法：全部素数都不能整除$P_1 ⋯ P_k+1$')),
		href(H+'primes.utm.edu/curios/includes/primetest.php','素数测试'),
		href(Hs+'www.alpertron.com.ar/ECM.HTM','ECM(Elliptic Curve Method) ____椭圆曲线方法测试'),
		href(H+'primes.utm.edu/primes/search.php','素数搜索'),
		ksc('p是素数 ⇔ '+mod('(p-1)!',-1,'p','','',''))+scbox('Wilson定理','bold brad')+br+
		'也即'+ksc(mod(prod('i',1,'p-1','i','',''),-1,'p','','',''))+br+
		'即$p|(p-1)!+1$'+br+

		SCtv('notes',ul(['$p>4(5)时，p是合数  ⇔ p|(p-1)!$',
			kdc(kxA(['设奇素数p=2m+1，'+mod('(m!)^2','(-1)^{m+1}','p','','',''),
			'特别地，若m是奇数，'+mod('m!','±1','p','','',''),
			'若m是偶数，'+mod('(m!)^2',-1,'p','','','')]))
		])),


		ksc('p是素数 ⇔ '+mod('1^{p-1}+2^{p-1}+3^{p-1}+⋯+(p-1)^{p-1}',-1,'p','','',''))
			+scbox('Agoh–Giuga猜想','bold brad')+br+

			'即'+ksc(kmod(sum('i',1,'p-1','i^{p-1}','',''),-1,'p'))+br+
			'也即'+ksc(kmod('pB_{p-1}','-1','p'))+
			SCtv('notes','必要性显然成立')+br+
			'关于充分性，$p是合数 ⇔ p$是Carmichael数且是Giuga数（且至少有36067位）',

		'素数$p|abcd⋯ ⇒ p|其中1个因子$',
		ksc('p是素数, (a,p)=1 ⇒ '+mod('a^p','a','p','','',''))+br+
			'即'+ksc(mod('a^{p-1}',1,'p','','',''))+scbox("Fermat's little theorem费马小定理",'bold brad')+br+
			SCtv('prov',ksc(mod('a(2a)(3a)⋯(p-1)a','1\\cdot 2 \\cdot 3⋯(p-1)','p','','','')+'等式两边同时除以(p-1)!'))+br+
			SCtv('notes','逆定理不成立，反例称为Carmichael数，或伪费马素数'),
		'$p是大素数（不考虑2,3,5,7） ⇒$____各数位（十进制）满足：'+br+ul(['末位是1、3、7、9','']),
		'一定是合数的数列：'+ul(['$n!+m (n>1, m=2,3,⋯,n)$','']),
		'不全是素数的数列：'+ul(['$n\\#±1 (\\#素数阶乘)$','']),
		'不存在一个整系数多项式，使结果都是素数',

		'二次剩余相关Gauss'+
		kul([
		'奇素数p，a是p的二次剩余 ⇒ p=4k+1',
		'-1是4k+1型素数的二次剩余',
		'-1是4k-1型素数的二次非剩余',

		'-2是8k+1型、8k+3型素数的二次剩余',
		'-2是8k-1型、8k-3型素数的二次非剩余',

		'2是8k±1型素数的二次剩余',
		'2是8k±3型素数的二次非剩余',


		'-3是12k+1型、12k-5型、3k+1型素数、QR3型素数（是3的二次剩余）的二次剩余',
		'-3是12k+5型、12k-1型、6k+5型素数的二次非剩余',

		'3是12k±1型素数的二次剩余',
		'3是12k±5型素数的二次非剩余',

		]),

		scbox('素数定理PNT','bold brad')+ul([
			'$p_n∼ n\\ln (n)$',
			ksc('π(x) ∼ '+frac('x','\\ln x',''))+SCtv('notes','$x$以内素数占比约为'+ksc(frac(1,'\\ln x',''))),,
			ksc('π(x)=FUNCLi(x)+O'+lrp('','xe^{-a'+root('\\ln x','','','')+'}','','')+'=FUNCLi (x)+O'+lrp('\\Bigg(','xe^{-'+frac('A(\\ln x)^{3/5}','(\\ln \\ln x)^{1/5}','t')+'}','\\Bigg)','')),
			'$其中FUNCLi (x)='+intl('\\ln t',2,'x','t','',0)+'=FUNCli (x)-FUNCli (2)$',
			'黎曼猜想成立情况下，'+ksc('π(x)=FUNCLi (x)+O('+root('x','','','')+'\\ln x)，以及|π(x)-FUNCli (x)| < '+frac(root('x','','','')+'\\ln x','8π',''))]),

		'$n（n>1）,2n$之间至少有1个素数, 也即$p_{n+1} < 2p_n$ '+br+
		'也即$n（n>3）,2n-2$之间至少有1个素数'+scbox('Bertrand–Chebyshev定理','bold brad')+br+
		'用素数定理 (PNT)可以得到更强的结论：$n（n>1）,2n$之间至少存在'+zxfrac('n','\\ln n')+'个素数',
		'推广'+kul(['2n,3n之间至少有1个素数'+kbox('M. El Bachraoui 2006'),
			'3n,4n之间至少有1个素数'+kbox('Andy Loo 2011'),
			'k个连续整数乘积必有1个大于k的素因子'+kbox('Sylvester定理'),
			'对任意整数k>0，存在足够大的n，使得n,2n之间必有k个素数'+kbox('Erdős定理'),
			'对任意实数k>0，存在足够大的n，使得n,(1+k)n之间必有1个素数',
			'n(≥25),(1+'+frac(1,5,'t')+')n之间必有1个素数'+kbox('Jitsuro Nagura 1952'),
			'n(≥2010760),(1+'+frac(1,16597,'t')+')n之间必有1个素数'+kbox('Lowell Schoenfeld 1976'),
			'k(≥463),p_{k+1}≤(1 + '+frac(1,'\\ln^2p_k','t')+')p_k'+kbox('Pierre Dusart 1998'),
			'n(≥3275),(1+'+frac(1,'2\\ln ^2 n','t')+')n之间必有1个素数'+kbox('Pierre Dusart 1998'),
			'n(≥396738),(1+'+frac(1,'25\\ln ^2 n','t')+')n之间必有1个素数'+kbox('Pierre Dusart 2010'),
			'n(≥468991632),(1+'+frac(1,'5000\\ln ^2 n','t')+')n之间必有1个素数'+kbox('Pierre Dusart 2016'),
			'n(足够大),n+O(n^{21/40})之间必有1个素数'+kbox('Baker, Harman, Pintz'),
			'n-n^{23/42},n之间必有1个素数'+kbox('Iwaniec'),
			'有无穷多个4k+1, 8k-1, 8k+5形素数',
			]),
		kol(['n^2,(n+1)^2之间是否一定存在素数？'+kbox('Legendre猜想'),

			'n(n-1),n^2,n(n+1)三数两段区间至少各有1个素数（其中n>1）'+kbox('Oppermann猜想'),
			'也即π(n^2 −n) < π(n^2) < π(n^2 + n)',

			'n^2+1素数是否无穷多？',

			'p_n^2,p_{n+1}^{2}之间至少有4个素数（n>1）'+kbox('Brocard猜想'),
			kroot('p_{n+1}')+'-'+kroot('p_{n}')+'<1'+kbox('Andrica猜想'),
			kroot('p_n','n')+'严格递减'+kbox('Firoozbakht猜想'),

			'p_{n+1}-p_n=O((\\ln P_n)^2)'+kbox('Cramér猜想'),
		],'unknown')
		
		])],

],'wiki').replace(/____/g,br))+

detail('互素coprime、两两互素pairwise coprime、无公共素因子setwise coprime',
	'互素的等价条件：'+
	ul($A([
		'(a,b)=1',
		'(2^a-1,2^b-1)=1',
		'存在整数x,y使得，ax+by=1',
		'存在整数y使得，'+kmod('by',1,'a'),
		'[a,b]=ab',
		'b=cd ⇒ (a,c)=(a,d)=1'

	]))+
	kbrA([
		
		'(n^a-1,n^b-1) = n^{(a,b)}-1 ~ (n>1)',

	])+br+
	'三者及以上互素的等价条件：'+
	ul($A([
		'(a_1,a_2,⋯,a_n)=1',
		'(2^{a_1}-1,2^{a_2}-1,⋯,2^{a_n}-1)=1',
		'存在整数x_i使得，Σa_ix_i=1',

	]))+br+
	'两两互素的等价条件：'+
	ul($A([
		'(a_1,a_2,⋯,a_n)=1',
		'(2^{a_1}-1,2^{a_2}-1,⋯,2^{a_n}-1)=1',
		'存在整数x_i使得，Σa_ix_i=1',

	]))
)+




detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[

	[enwiki('Agoh–Giuga_conjecture','2020-8-11'),'',''],
	[enwiki('Coprime_integers'),'',''],
	[enwiki("Bézout's_identity"),'',''],
],'TBrc'),1)



);
