/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


wiki['Prime']=Kx(

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
			'即'+ksc(mod(sum('i',1,'p-1','i^{p-1}','',''),-1,'p','','',''))+
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
		scbox('素数定理PNT','bold brad')+ul([
			'$p_n∼ n\\ln (n)$',
			ksc('π(x) ∼ '+frac('x','\\ln x',''))+SCtv('notes','$x$以内素数占比约为'+ksc(frac(1,'\\ln x',''))),,
			ksc('π(x)=FUNCLi(x)+O'+lrp('','xe^{-a'+root('\\ln x','','','')+'}','','')+'=FUNCLi (x)+O'+lrp('\\Bigg(','xe^{-'+frac('A(\\ln x)^{3/5}','(\\ln \\ln x)^{1/5}','t')+'}','\\Bigg)','')),
			'$其中FUNCLi (x)='+intl('\\ln t',2,'x','t','',1)+'=FUNCli (x)-FUNCli (2)$',
			'黎曼猜想成立情况下，'+ksc('π(x)=FUNCLi (x)+O('+root('x','','','')+'\\ln x)，以及|π(x)-FUNCli (x)| < '+frac(root('x','','','')+'\\ln x','8π',''))]),

		'$n（n>1）,2n$之间至少有1个素数, 也即$p_{n+1} < 2p_n$'+scbox('Bertrand–Chebyshev定理','bold brad')+br+
		'用素数定理 (PNT)可以得到更强的结论：$n（n>1）,2n$之间至少存在'+zxfrac('n','\\ln n')+'个素数',
		'推广'+ul(['$2n,3n$之间至少有1个素数'+scbox('M. El Bachraoui 2006','bold brad'),
			'$3n,4n$之间至少有1个素数'+scbox('Andy Loo 2011','bold brad'),
			'$k个连续整数乘积必有1个大于k的素因子$'+scbox('Sylvester定理','bold brad'),
			'$对任意整数k>0，存在足够大的n，使得n,2n之间必有k个素数$'+scbox('Erdős定理','bold brad'),
			'$对任意实数k>0，存在足够大的n，使得n,(1+k)n之间必有1个素数$',
			'$n(≥25),(1+'+frac(1,5,'t')+')n之间必有1个素数$'+scbox('Jitsuro Nagura 1952','bold brad'),
			'$n(≥2010760),(1+'+frac(1,16597,'t')+')n之间必有1个素数$'+scbox('Lowell Schoenfeld 1976','bold brad'),
			'$k(≥463),p_{k+1}≤(1 + '+frac(1,'\\ln^2p_k','t')+')p_k$'+scbox('Pierre Dusart 1998','bold brad'),
			'$n(≥3275),(1+'+frac(1,'2\\ln ^2 n','t')+')n之间必有1个素数$'+scbox('Pierre Dusart 1998','bold brad'),
			'$n(≥396738),(1+'+frac(1,'25\\ln ^2 n','t')+')n之间必有1个素数$'+scbox('Pierre Dusart 2010','bold brad'),
			'$n(≥468991632),(1+'+frac(1,'5000\\ln ^2 n','t')+')n之间必有1个素数$'+scbox('Pierre Dusart 2016','bold brad'),
			'$n(足够大),n+O(n^{21/40})之间必有1个素数$'+scbox('Baker, Harman, Pintz','bold brad'),
			]),
		ol(['$n^2,(n+1)^2之间（n>1）是否一定存在素数？$'+scbox('Legendre猜想','bold brad'),
			'$n^2+1素数是否无穷多？$',],'unknown')
		
		])],

],'wiki').replace(/____/g,br))



);
