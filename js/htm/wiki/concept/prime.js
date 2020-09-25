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
		href(Hs+'primes.utm.edu/curios/includes/primetest.php','素数测试'),
		href(Hs+'www.alpertron.com.ar/ECM.HTM','ECM(Elliptic Curve Method) ____椭圆曲线方法测试'),
		href(Hs+'primes.utm.edu/primes/search.php','素数搜索'),
		ksc('p是素数 ⇔ '+mod('(p-1)!',-1,'p','','',''))+scbox('Wilson定理','bold brad')+br+
		'也即'+ksc(mod(prod('i',1,'p-1','i','',''),-1,'p','','',''))+br+
		'即$p|(p-1)!+1$'+br+


		ksc('p是素数 ⇒ '+kmod('(a+b+c+⋯)^p','a^p+b^p+c^p+⋯','p'))+kbox('Gauss'),

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
	detail('两数互素的等价条件：',
		ul($A([
			'(a,b)=1',
			'(2^a-1,2^b-1)=1',
			'存在整数x,y（无穷多对）使得，ax+by=1',
			'注意：此时(x,y)=(x-kb,y+ka)=(a,b)=(a-ky,b+kx)=1，也互素',
			'(x,y)解集对应直线y=(-a/b)x+1/b上的整数点（等距间隔kb,-ka）',
			'(a,b)解集对应直线b=(-x/y)a+1/y上的整数点（等距间隔ky,-kx）',




			'a+b=q，且(q,a)=(q,b)=1',
			'a-b=q，且(q,a)=(q,b)=1',
			'存在整数u,v使得，ua+vb=q，且(q,a)=(q,b)=1',
			'存在整数u,v使得，ua+vb=q，且(q,ab)=1',




			'(a+b, ab)=1（两数和与积互素，则两数互素）',
			'(a-b, ab)=1（两数差与积互素，则两数互素）',
			'(ua+vb, ab)=1（两数线性组合与积互素，则两数互素）',

			'存在整数y使得，'+kmod('by',1,'a'),
			'[a,b]=ab',
			'b=cd ⇒ (a,c)=(a,d)=1'

		]))+
		kbrA([
			
			'(n^a-1,n^b-1) = n^{(a,b)}-1 ~ (n>1)',

		])
	)+
	detail('两数互素的充分条件：',
		kbrA([
			'a+b=c（c∤ab）',
			'a+b=p（p素数）',
			'a+b=2p（p素数，a≠b，且都是奇数）',
			'特别地，(p+k)+(p-k)=2p（p素数，k≠0）⇒ ∀k∈(1,p), (p+k,p-k)=1',
			'a+b=3p（p素数，3∤a, p∤a）',
			'a+b=p^n（p素数，p∤ab）',
			'特别地，(2^n+1)+(2^n-1)=2^{n+1} ⇒ (2^n+1, 2^n-1)=1',
			'∀奇数q，(2^n+q)+(2^n-q)=2^{n+1} ⇒ (2^n+q, 2^n-q)=1',

			'a+b=2p^n（p素数，p∤ab，a,b都是奇数）',
			'∀q，素数p（一奇一偶），(p^n+q)+(p^n-q)=2p^n ⇒ (p^n+q, p^n-q)=1',





			'a-b=c（c∤ab）',
			'a-b=1（相邻数互素）',
			'a-b=2（a,b都是奇数，相邻奇数互素）',
			'a-b=3（3∤ab）',
			'a-b=p（p素数∤ab）',
			'a-b=2p（p素数∤ab，且a,b都是奇数）',
			'特别地，(k+p)-(k-p)=2p ⇒ ∀k>p（p素数∤k，k,p一奇一偶）, (k+p,k-p)=1',
			'a-b=3p（p素数，3∤a, p∤a）',
			'a-b=p^n（p素数，p∤ab）',
			
			'特别地，(a+2^n)-a=2^n（a奇数） ⇒ (a, a+2^n)=1',
			'∀p素数∤a，(a+p^n)-a=p^n ⇒ (a+p^n, a)=1',

			'a-b=2p^n（p素数，p∤ab，a,b都是奇数）',
			'∀p素数∤k（一奇一偶），(k+p^n)-(k-p^n)=2p^n ⇒ (k+p^n, k-p^n)=1',


		])
	)+
	detail('共轭互素对ac+bd=1',
		kbrA([
			'⇒'+piece([
				'(ac+b^2)(ac+d^2)+[-a(b-d)][c(b-d)]=1',
				'(bd+a^2)(bd+c^2)+[-b(a-c)][d(a-c)]=1',

				'(ac-b^2)(ac-d^2)+[a(b+d)][c(b+d)]=1',
				'(bd-a^2)(bd-c^2)+[b(a+c)][d(a+c)]=1',

				'[(ac+b^2)(ac+d^2)+a^2(b-d)^2][(ac+b^2)(ac+d^2)+c^2(b-d)^2]+[(ac+b^2)(a+c)(b-d)][-(ac+d^2)(a+c)(b-d)]=1',
				'等等',

			])+' 也是共轭互素对',

			'若(x,y)=1 ⇒ (xc-yb, xd+ya)=1=(yc-xb, yd+xa)',
/*写成矩阵形式
			a -d    y    x
			b c     -x   -y
*/

			'反证法：'+piece([
				'a(xc-yb)+b(xd+ya)=x',
				'-d(xc-yb)+c(xd+ya)=y',
			]),
			'则公因子d|(x,y)矛盾！',

			'继而(a(xc-yb)+d(xd+ya), b(xc-yb)-c(xd+ya))=(-c(xc-yb)+b(xd+ya), d(xc-yb)+a(xd+ya))=1',
			'即(x(ac+d^2)+ya(d-b), xc(b-d)-y(ac+b^2))=(x(bd-c^2)+yb(a+c), xd(a+c)+y(a^2-bd))=1',

			'则可以生成更多的互素组合',


			'设另一组共轭互素对ux+vy=1 ⇒ ',
			piece([
				'(xc-yb, xd+ya)=(yc-xb, yd+xa)=1',
				'(uc-vb, ud+va)=(vc-ub, vd+ua)=1',
			])


		])
	)+
	detail('多个互素对',
		kbrA([
			'(a,b)=(c,d)=1',
			'⇒ (ac'

		])
	)+

	detail('互素概率',
		kbrA([

			'随机选择两整数，互素的概率：\\prod _{素数p}\\left(1-{\\frac {1}{p^2}}\\right)',
			'=\\left(\\prod _{素数p}{\\frac {1}{1-p^{-2}}}\\right)^{-1}=\\frac {1}{ζ(2)}=\\frac {6}{π^2}≈ 0.607927102≈ 61\\%',
			'其中利用两数不都被p整除的概率是1-{\\frac {1}{p^2}}',

			'随机选择k个整数，互素的概率：\\prod _{素数p}\\left(1-{\\frac {1}{p^k}}\\right)',
			'=\\left(\\prod _{素数p}{\\frac {1}{1-p^{-k}}}\\right)^{-1}=\\frac {1}{ζ(k)}',

		])
	)+

	detail('三者及以上互素的等价条件：',
		ul($A([
			'(a_1,a_2,⋯,a_n)=1',
			'(2^{a_1}-1,2^{a_2}-1,⋯,2^{a_n}-1)=1',
			'存在整数x_i使得，Σa_ix_i=1',

			'(a-b,b-c,c-a)=1（充要条件，a,b,c两两互素）',
			'证明：利用u(a-b)+v(b-c)+w(c-a)=a(u-w)+b(v-u)+c(w-v)=1',
		]))
	)+

	detail('Bézout贝祖定理：(a,b)=d 则',
		kbrA([
			'存在整数x,y使得，ax+by=d',
			'对任意整数k也成立：a(x-kb/d)+b(y+ka/d)=d',

		])+br+
		'三者及以上：(a,b,c)=d'+br+
		kbrA([
			'存在整数x,y,z使得，ax+by+cz=d',
			'对任意整数k也成立：'+
			piece([
				'a(x+kc/(a,b,c))+b(y+kc/(a,b,c))+c(z-k(a+b)/(a,b,c))=1',
				'a(x+kb/(a,b,c))+b(y-k(a+c)/(a,b,c))+c(z+kb/(a,b,c))=1',
				'a(x-k(b+c)/(a,b,c))+b(y+ka/(a,b,c))+c(z+ka/(a,b,c))=1',
				])

		])
	)+

	detail('两两互素的等价条件：',
		ul($A([
			'(a,b)=(b,c)=(c,a)=1',
			'(ab,c)=(a,b)=1',
			'abx+bcy+acz=1（充要条件，a,b,c两两互素）',
			'也即x\\/a+y\\/b+z\\/c=\\frac{1}{abc} 有整数解',
			'充分性显然；必要性证明：利用(a,bc)=(b,c)=1',
			piece(['au+bcv=1','bs+act=1'])+'⇒ 两式相乘整理得ab(us+c^2vt)+ac(aut)+bc(bvs)=1',
			'或利用(a,b)=(b,c)=(c,a)=1',
			piece(['aA+bB=1','bC+cD=1','cE+aF=1'])+'⇒ 三式相乘整理',
			'得(aA+bB)(bC+cD)(cE+aF)=ab(AC(cE+aF)+BCFb)+ac(AD(cE+aF))+bc(BD(cE+aF)+BCEb)=1',

	

			'abcw+bcdx+cday+dabz=1（充要条件，a,b,c,d两两互素）',
			'也即x\\/a+y\\/b+z\\/c+w\\/d=\\frac{1}{abcd} 有整数解',
			'充分性显然；必要性证明：利用(a,b)=(b,c)=(c,d)=(d,a)=1',
			piece(['aA+bB=1','bC+cD=1','cE+dF=1','dG+aH=1'])+'⇒ 四式相乘',
			'得(aA+bB)(bC+cD)(cE+dF)(dG+aH)=abc(ACE(dG+aH)+HBD(cE+dF))+bcd(?)+cda(?)+dab(?)=1'
		]))
	)
)+




detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[

	[enwiki('Agoh–Giuga_conjecture','2020-8-11'),'',''],
	[enwiki('Coprime_integers'),'',''],
	[enwiki("Bézout's_identity"),'',''],
	[enwiki("Extended_Euclidean_algorithm"),'',''],
	[href(Hs+'primes.utm.edu'),'','素数大全'],
],'TBrc'),1)



);
