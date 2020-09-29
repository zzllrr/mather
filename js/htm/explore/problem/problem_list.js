/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

 

explore['Problem/Problem List']=
detail(gM('Unsolved Conjecture'),
Table([i18(ZLR('Name Field Content Relation'))],[

	
[enwiki('1/3–2/3_conjecture','',"1/3–2/3 "+gM("conjecture")),gM("Order.1 Theory"),"偏序的线性扩张中，元素x先于y占比在1/3~2/3之间",""],
[enwiki("abc_conjecture",'',"abc "+gM("conjecture")),gM("Number Theory"),brA([
	XML.wrapE('LA',piece(["c>\\text{rad}(abc)^{1+ε}","a+b=c",'(a,b,c)=1','a < b'])+
		kbr+"即a+b>\\text{rad}(ab(a+b))^{1+ε}"+
		kbr+"也即q=\\frac{\\log (a+b)}{\\log (\\text{rad}(ab(a+b)))}>1+ε"
	),
	'猜想满足上式的三元组a,b,c个数有限！','其中ε是任意正实数','正整数a,b,c互素，且满足','a+b=c，a < b','根积rad表示求不同素因数（只算一次）乘积',
	'按此猜想，显然若c是素数p时，有'+XML.wrapE('LA',"\\text{rad}(ab)^{1+ε} p^ε< 1"),
	'2004年Eric Reyssat找到截至目前最大的q值：1.6299'
	]),
	""+br+"⇔"+gM2('Granville–Langevin conjecture')+', 1-'+gM("Dimension")+gM2("Vojta's conjecture")+br+"⇒"+gM2('Erdős–Woods conjecture')+", "+gM2("Fermat–Catalan conjecture")+" Formulated by David Masser and Joseph Oesterlé. Proof Claimed in 2012 by Shinichi Mochizuki"+

	refer([
	href(Hs+'dash.harvard.edu/handle/1/2793857',"Elkies' paper on the ABC's of Number Theory (PDF)"),
	enwiki('abc_conjecture','2020-8-12'),
	enwiki('Fermat–Catalan_conjecture','2020-8-12'),
	
	enwiki('Beal_conjecture','2020-8-11'),


	])
	],
[gM2("Agoh–Giuga conjecture",'',br,enwiki0),gM("Number Theory"),"<la>p是素数~ ⇔ ~p$kmod('B_{p-1}','-1','p')$</la>","如果成立，前p-1项正整数的指数和、指数积，分别模p等于-1、1"],

[gM2("Agrawal's conjecture",'',br,enwiki0),gM("Number Theory"),"<la>$kmod('(X-1)^n','X^n-1','n,X^r-1')+kbr+'（其中n,r是互素正整数）'+kbr$ ⇒ n是素数或$kmod('n^2','1','r')$</la>",""],

[gM2("Andrews–Curtis conjecture",'',br,enwiki0),gM("Combinatorial group Theory"),"平凡群的各种平衡表示可以通过Nielsen变换数列变换成平凡表示",""],
[gM2("Andrica's conjecture",'',br,enwiki0),gM("Number Theory"),"<la>$kroot('p_{n+1}')$-$kroot('p_n')$ < 1 </la><la>即g_n=p_{n+1}-p_n< 2$kroot('p_n')$ + 1 </la>",""],
[enwiki0("Artin conjecture (L-functions)")+br+gM("Artin conjecture")+'('+gM('L Function')+')',gM("Number Theory"),"非平凡不可约表示的Artin L函数在整个复平面解析",""],
[gM2("Artin's conjecture on primitive roots",'',br,enwiki0),gM("Number Theory"),"给定一个整数a（完全平方和-1除外）⇒a是模无限多素数的原根",""+br+"⇐"+gM2("Generalized Riemann Hypothesis")+br+"⇐"+gM2("Selberg conjecture")+" B"],
[gM2("Bateman–Horn conjecture",'',br,enwiki0),gM("Number Theory"),"一个给定的多项式集合的正整数中都含有质数的密度",""],
[gM2("Baum–Connes conjecture",'',br,enwiki0),gM("Operator K–theory"),"从等变K同调到Γ（一个第二可数局域紧群，例如可数离散群）的简化C*代数K理论的态射是同构的",""+br+"⇒"+gM2("Gromov–Lawson–Rosenberg conjecture")+br+"⇒"+gM2("Kaplansky–Kadison conjecture")+br+"⇒"+gM2("Novikov conjecture")],
[gM2("Beal conjecture",'',br,enwiki0)+gM2('Tijdeman-Zagier conjecture'),gM("Number Theory"),detail("<la>A^x+B^y=C^z（字母都是正整数） \\\\ x,y,z≥3 ⇒ A,B,C有共同素因子</la>",
	brA([
		'【已知结论】',
		'高斯整数环中有解'+ksc('(-2+i)^{3}+(-2-i)^{3}=(1+i)^{4}'),
		gM2('Catalan solution')+ksc('2^3+1^n=3^2'),
		detail('下列情况已被证明无反例：',
		Table([['x','y','z',gM('Non Catalan solution'),gM('Year')]],[
			['n','n','n≥3','根据FLT无正整数解',1994],
			[2,3,7,4,2005],
			[2,3,8,1,2003],
			[2,3,9,1,2003],

			[2,3,10,0+'只有'+gM('Catalan solution'),2009],
			[2,3,11,0+'只有'+gM('Catalan solution'),2020],
			[2,3,15,0+'只有'+gM('Catalan solution'),2013],

			[2,4,4,0+'无解 Fermat & Euler','1640,1738'],
			[2,4,5,1,2003],
			[2,4,'n≥6',0,2009],
			[2,6,'n≥3',0,'2011,2014'],
			[2,'2n',3,0+'(3 ≤ n ≤ '+ksc('10^7')+',7除外)',''],

			[2,'2n','9,10,15',0,'2014'],
			[3,3,'n','0(3 ≤ n ≤ '+ksc('10^9')+')',''],
			[3,4,5,0,2011],
			[3,5,5,0,1998],
			[3,6,'n≥3','','2014'],
			[4,'2n','3','(n≥2)','2014'],
			[5,5,7,'',2013],
			[5,5,19,'',2013],
			[7,7,5,'',2013],
			['n≥4','n',2,'','1995'],
			['n≥3','n',3,'',''],
			['2n','2n',5,'(n≥2)','2006'],
			['2l','2m','n','(素数l,m≥5，n=3,5,7,11,13)',''],

			['3l','3m','n','(l,m≥5，n≥3)',''],

			['≤7','≤7','≤7','(A, B, C ≤ 250,000)','Google numerical search'],
			['≤100','≤100','≤100','(A, B, C ≤ 10,000)','Google numerical search'],
		])),
		
		
		
		
		
		'【分析】',
	
	
	
	
	'若A,B,C中有完全幂，可以通过改写，使得底数不含完全幂，因此下面讨论仅限A,B,C都不是完全幂',
	'显然A=B=1不符题意（因为此时必有C=2，z=1）',

	detail('反例必要条件',
		[
		detail('① 条件一：A,B,C两两互素',[
			'用反证法： p|(A,B) ⇒ p|C ',
			'<la>(A,B)=(B,C)=(A,C)=1</la>',
			'⇔ 存在整数使得<la>m_1AB+m_2BC+m_3AC=1</la>',
			'也即<la>(A^x,B^y)=(B^y,C^z)=(A^x,C^z)=1</la>',
			'⇔ 存在整数a,b,c满足(a,b,c)=(a,A)=(b,B)=(c,C)=1，使得',
			'<la>cA^xB^y+aB^yC^z+bA^xC^z=1</la>',
			'把<la>C^z=A^x+B^y</la>代入上式，并令a+b+c=d',
			'显然(d,(a,b))=1（否则(c,(a,b))=1）得到',
			'<la>bA^{2x}+aB^{2y}+dA^xB^y=1</la>',
			'',
			'令<la>s=A^{x}, t=B^{y}</la>得到',
			'<la>bs^2+at^2+dst=1</la>',


			'',
			'除此之外，也可利用存在整数，使得',
			'<la>'+piece(['dA^x+eB^y=1','fB^y+gC^z=1','hA^x+iC^z=1'])+'</la>',
		].join(br)
		),
		'',
		detail('② 条件二：(x,y,z)=1或2',
			['x,y,z不能同时相等（当x=y=z时与费马最后定理FLT矛盾!）',
			'(x,y,z)>2时，可改写成FLT形式，与无解矛盾！'
			].join(br)
		),

		'',
		detail('③ 条件三：模运算下等式仍成立',
			[ksc(kmod('A^x+B^y','C^z','p')),
			'例如：'+ksc(kmod('A^x','-B^y','C')),
			].join(br)
		),

		'',
		detail('④ 条件四：幂的个位数满足下表',
		detail('周期性：'+Table([ksc(['n尾数','n^2尾数','n^3尾数','n^4尾数','周期'])],[
				[0,0,0,0,1],
				[1,1,1,1,1],
				[2,4,8,6,4],
				[3,9,7,1,4],
				[4,6,4,6,2],
				[5,5,5,5,1],
				[6,6,6,6,1],
				[7,9,3,1,4],
				[8,4,2,6,4],
				[9,1,9,1,2],

			],'TBrc'),
			ksc('A^x')+'尾数和幂可能：'+Table('',[[ksc('A^x')+'尾数','A尾数','幂x'],
				['0','0',''],

				['1','1',''],
				['1','9','2s'],
				['1','3,7','4s'],

				['2','2','4s+1'],
				['2','8','4s+3'],

				['3','3','4s+1'],
				['3','7','4s+3'],

				['4','4','2s+1'],
				['4','2,8','4s+2'],

				['5','5',''],

				['6','6',''],
				['6','4','2s'],
				['6','2,8','4s'],

				['7','7','4s+1'],
				['7','3','4s+3'],

				['8','8','4s+1'],
				['8','2','4s+3'],

				['9','9','2s+1'],
				['9','3,7','4s+2'],

			],'TBrc')+
			'简记为：'+br+
			ksc([
				'0=0^s',
				'1=1^s=9^{2s}=(3或7)^{4s}',
				'2=2^{4s+1}=8^{4s+3}',
				'3=3^{4s+1}=7^{4s+3}',
				'4=4^{2s+1}=(2或8)^{4s+2}',

				'5=5^{s}',
				'6=6^s=4^{2s}=(2或8)^{4s}',
				'7=7^{4s+1}=3^{4s+3}',
				'8=8^{4s+1}=2^{4s+3}',
				'9=9^{2s+1}=(3或7)^{4s+2}',
				
				'尾数a模5，可以分类（设a+b=10，c=a-2）：',
				kmod(['a','a^s'],0,5),
				kmod(['a','a^s','b^{2s}','(3或7)^{4s}'],1,5),
				kmod(['a','a^{4s+1}','b^{4s+3}'],2,5),
				kmod(['a','a^{4s+1}','b^{4s+3}'],3,5),
				kmod(['a','a^{2s+1}','(c或10-c)^{4s+2}'],4,5),

			]).join(br)+br+
			ksc('A^x+B^y')+'尾数组合可能：'+Table('',[['0+1=1','0+3=3','0+7=7','0+9=9','','','','',''],
				['1+1=2','1+2=3','1+3=4','1+4=5','1+5=6','1+6=7','1+7=8','1+8=9','1+9=0'],
				['2+3=5','2+5=7','2+7=9','2+9=1'],
				['3+3=6','3+4=7','3+5=8','3+6=9','3+7=0','3+8=1','3+9=2'],
				['4+5=9','4+7=1','4+9=3'],
				['5+6=1','5+7=2','5+8=3','5+9=4'],
				['6+7=3','6+9=5'],
				['7+7=4','7+8=5','7+9=6'],
				['8+9=7'],
				['9+9=8'],
				['写成数对'+ksc('(A^x尾数, B^y尾数)')+'：'],
				['(0, [1379])'],
				['(1,[1-9])'],
				['(2,[3579])'],
				['(3,[3-9])'],
				['(4,[579])'],
				['(5,[6-9])'],
				['(6,[79])'],
				['(7,[789])'],
				['(8,9)'],
				['(9,9)'],


			],'TBrc')+ksc('C^z')+'和分拆：'+Table('',[
				['0=1+9=3+7'],
				['1=0+1=2+9=3+8=4+7=5+6'],
				['2=1+1=3+9=5+7'],
				['3=0+3=1+2=4+9=5+8=6+7'],
				['4=1+3=5+9=7+7'],
				['5=1+4=2+3=6+9=7+8'],
				['6=1+5=3+3=7+9'],
				['7=0+7=1+6=2+5=3+4=8+9'],
				['8=1+7=3+5=9+9'],
				['9=0+9=1+8=2+7=3+6=4+5'],

			],'TBrc')+
		
			Table([['A尾数','x','B尾数','y','C尾数','z']],[

				['0','','1','','1',''],
				['0','','1','','3,7','4k'],
				['0','','1','','9','2k'],

				['0','','3,7','4t','1',''],
				['0','','3,7','4t','3,7','4k'],
				['0','','3,7','4t','9','2k'],

				['0','','3','4t+1','3','4k+1'],
				['0','','3','4t+1','7','4k+3'],
				['0','','3','4t+2','3,7','4k+2'],
				['0','','3','4t+2','9','2k+1'],
				['0','','3','4t+3','3','4k+3'],
				['0','','3','4t+3','7','4k+1'],


				['0','','7','4t+1','3','4k+3'],
				['0','','7','4t+1','7','4k+1'],
				['0','','7','4t+2','3,7','4k+2'],
				['0','','7','4t+2','9','2k+1'],
				['0','','7','4t+3','3','4k+1'],
				['0','','7','4t+3','7','4k+3'],


				['0','','9','2t','1',''],
				['0','','9','2t','3,7','4k'],
				['0','','9','2t','9','2k'],
				['0','','9','2t+1','3,7','4k+2'],
				['0','','9','2t+1','9','2k+1'],


				['1','','1','','2','4k+1'],
				['1','','1','','8','4k+3'],


				['1','','2','4t','3','4k+3'],
				['1','','2','4t','7','4k+1'],
				['1','','2','4t+1','3','4k+1'],
				['1','','2','4t+1','7','4k+3'],
				['1','','2','4t+2','5',''],
				['1','','2','4t+3','3,7','4k+2'],
				['1','','2','4t+3','9','2k+1'],

				['1','','3','4t','2','4k+1'],
				['1','','3','4t','8','4k+3'],
				['1','','3','4t+1','2,8','4k+2'],
				['1','','3','4t+1','4','4k+1'],

				['1','','3','4t+2','0',''],
				['1','','3','4t+3','2','4k+3'],
				['1','','3','4t+3','8','4k+1'],

				['1','','4','2t','3','4k+3'],
				['1','','4','2t','7','4k+1'],
				['1','','4','2t+1','5',''],

				['1','','5','','2,8','4k'],
				['1','','5','','4','2k'],
				['1','','5','','6',''],

				['1','','6','','3','4k+3'],
				['1','','6','','7','4k+1'],

				['1','','7','4t','2','4k+1'],
				['1','','7','4t','8','4k+3'],
				['1','','7','4t+1','2','4k+3'],
				['1','','7','4t+1','8','4k+1'],
				['1','','7','4t+2','0',''],
				['1','','7','4t+3','2,8','4k+2'],
				['1','','7','4t+3','4','2k+1'],

				['1','','8','4t','7','4k+1'],
				['1','','8','4t','3','4k+3'],
				['1','','8','4t+1','3,7','4k+2'],
				['1','','8','4t+1','9','2k+1'],
				['1','','8','4t+2','5',''],
				['1','','8','4t+3','3','4k+1'],
				['1','','8','4t+3','7','4k+3'],


				['1','','9','2t','2','4k+1'],
				['1','','9','2t','8','4k+3'],
				['1','','9','2t+1','0',''],


				['2','4s','3','4t','3','4k+3'],
				['2','4s','3','4t','7','4k+1'],
				['2','4s','3','4t+1','3,7','4k+2'],
				['2','4s','3','4t+1','9','2k+1'],
				['2','4s','3','4t+2','5',''],
				['2','4s','3','4t+3','3','4k+1'],
				['2','4s','3','4t+3','7','4k+3'],
				
				['2','4s+1','3','4t','3','4k+1'],
				['2','4s+1','3','4t','7','4k+3'],
				['2','4s+1','3','4t+1','5',''],
				['2','4s+1','3','4t+2','1',''],
				['2','4s+1','3','4t+2','3,7','4k'],
				['2','4s+1','3','4t+2','9','2k'],
				['2','4s+1','3','4t+3','3,7','4k+2'],
				['2','4s+1','3','4t+3','9','4k+1'],


				['略'],



			],'TBrc')
		))
		].join(br)
	),





	detail('当(x,y,z)=1时，',
		'存在整数使得<la>k_1x+k_2y+k_3z=1</la>'
	),
	detail('当(x,y,z)=2时，可改写成勾股数平方和形式，且C的质因子只能是4k+1形式',
		''
	),
	

	detail('当C是奇数时，A,B一奇一偶，',

		'不妨设A偶=2a'
	),


	detail('当C是偶数时，A,B同奇（同偶则不互素！），x,y也同奇（反证法）'+br+
		'则必有(x,y,z)=1',

		ksc(['设p是C的任意质因子（显然p不整除A,B）',
			kmod('A^x+B^y',0,'p^z'),
			kmod('A^x+B^y',0,'p'),
			'设'+kmod('AW',1,'p')+'（显然此方程必有解）',	
			'假设y是偶数，则',
			kmod(['(AW)^x+(BW)^y','1+(BW)^y'],0,'p'),
			'则-1是模p的二次剩余',
			'则p是4k+1形素数，这与p可以取2矛盾！',
			'因此，y不能是偶数，同理x不能是偶数'
		]).join(br)),
	
	

	detail('考虑下面这个方程<la>3^x+5^y=2^z（z > x,2y）</la>',
		['更精确地，<la>z ≥ \\log_2(3^x+5^3), \\log_2(3^3+5^y)</la>',
		'等式两边同时取模2，3或5',
		'得知<la>'+piece([kmod('(-1)^y','(-1)^z',3)+'⇔'+kmod('y','z',2)+'即y,z同奇偶',
			kmod('(-2)^x','2^z',5)+'⇔'+kmod('(2^3)^x','2^z',5)+'⇔'+kmod('3x','z',4)+'（2是模5原根）',
		])+'</la>',
		'则<la>'+piece(['z=3x-4k > x ≥3 则 4k < 2x 则 k < x\\/2',

			'y=z-2j，即6≤ 2y=2(z-2j)=2(3x-4k-2j) < z = 3x-4k',
			'则  3 ≤ x < z=3x-4k < 4j≤ 2(z-3)=2(3x-4k-3)',
			'则 x\\/4 < j ≤ {3x-4k-3}\\/2',
		])+'</la>'+

		'更精确地<la>'+piece(['3x-4k ≥ \\log_2(3^x+5^3) 则 4k ≤ 3x-\\log_2(3^x+5^3)=\\log_2(2^{3x}/(3^x+125)) ',
			'则 k ≤ \\log_{16}(2^{3x}/(3^x+125)) = (3x-\\log_2(3^x+125) )/4',


			'z=y+2j > \\log_2(3^3+5^y) 则j > \\log_4[(3^3+5^y)/2^y] > y\\log_4(5/2) = (z-2j)\\log_4(5/2) ',
			'则j > \\log_4(5/2)z/(1+\\log_2(5/2)) = (\\log_{25}(5/2))z = (\\log_{25}(5/2))(3x-4k)',
		])+'</la>'+

		'原方程即：<la>3^{x}+5^{3x-4k-2l}=2^{3x-4k}</la>',
		'<la>(x,3x-4k-2l,3x-4k)=1或2</la>',

		'当(x,y,z)=1时，x是奇数（事实上y,z也是奇数）且(k,x)=(2k+j,x)=1',
		detail('遍历代码：x,y,z都是大于100的不同素数',
		ksc(piece(['z>max{x,2y}',kmod('x+z',0,4)]))+
		br+precode(
`
function tuple(I,J,Z){//利用前25个素数(2,3,5除外)，进行模运算(a(=3,5,2)模p的阶整除p-1)验证等式；第25个后面的素数用于尝试取值
	var PA=PrimeA(1000000) || '25+78473个', Pl=PA.length, Pm=PA.slice(-1)[0],

		modA=[2,3,5].concat(Arrf(function(x){return Arrf(function(t){return Ord_1(t,x,1)}, [3,5,2])}, PA.slice(3,25)));


	for(var j=J||25;j<Pl;j++){
		if(j && j % 1000 == 0){saveText(j,'beal_cache_j');}
		var y=PA[j], y5=5n**BigInt(y);
		
		for(var i=I||25;i<Pl;i++){
			if(i!=j){
				if(i && i % 10000 == 0){saveText('i='+i+', j='+j,'beal_cache_i_j')}
				var x=PA[i], x4=x % 4, z=Math.max(x+2,y*2+1), k=-1;
				
				do{
					
					var z4=z % 4;
					if(z>Pm){
						k=0;
						break;
					}
					if(x4+z4==4){
						if(z % 5 != 0 && PA.indexOf(z)>0){

							var bad=0;
							for(var m=3;m<25;m++){								
								var A=modA[m];

								var r=
								(A[0]<0 && BigInt(x)/BigInt(A[0]) % 2n?-1n:1n)*(3n**BigInt( x % Math.abs(A[0]))) + 
								(A[1]<0 && BigInt(x)/BigInt(A[1]) % 2n?-1n:1n)*(5n**BigInt( y % Math.abs(A[0]))) - 
								(A[2]<0 && BigInt(x)/BigInt(A[2]) % 2n?-1n:1n)*(2n**BigInt( z % Math.abs(A[0])));
								if(r % BigInt(PA[3]) != 0n){
									bad=1;
									break;
								}
								
							}


							if(!bad){
								var z2=2n**BigInt(z), x3=3n**BigInt(x),  x3y5=x3+y5;
								if(z2==x3y5){
									saveText([x,y,z].join(' '),'beal_3x5y2z');
									return [x,y,z]
								}else if(z2>x3y5){
									k=0;
									break
								}
							}

						}
						z+=4;
					}else{
						z+=2;
					}
					
				}while(k<0)
	
			}
		}
	}
}


`)
		
		),
		'当(x,y,z)=2时，由于2不是4k+1形式，所以无解',

		].join(br)),

	

	detail('递推形式的解：',
		ul([

			'一、'+ksc('A^x+B^y=C^z'),
			ksc(piece([
				['(q^{yz}A)^x+(q^{xz}B)^y=(q^{xy}C)^z','同乘q^{xyz}'],
				['(A^{yz+1})^x+(A^{xz}B)^y=(A^{xy}C)^z','同乘A^{xyz}'],
				['(AB^{yz})^x+(B^{xz+1})^y=(B^{xy}C)^z','同乘B^{xyz}'],
				['(AC^{yz})^x+(BC^{xz})^y=C^{(xy+1)z}','同乘C^{xyz}'],
				['(A^{x/d})^d+(B^{y/d})^d=(C^{z/d})^d','其中d=(x,y,z)，则d<3'],
				['(qA^{x/d})^d+(qB^{y/d})^d=(qC^{z/d})^d','同乘q^d，其中d=(x,y,z)，则d<3'],

				['(A^{yz+1}(BC)^{yz})^x+(B^{xz+1}(AC)^{xz})^y=(C^{xy+1}(AB)^{xy})^z','同乘(ABC)^{xyz}']
			])),



			'二、根据'+ksc('a^m+b^m=q'),
			ksc(piece([
				['(aq)^m+(bq)^m=q^{m+1}', '同乘q^m'],
				['(aq^k)^m+(bq^k)^m=q^{km+1}', '同乘q^{km}']
			])),


			'或根据'+ksc('a^m-b^m=q'),

			ksc(piece([
				['(bq)^m+q^{m+1}=(aq)^m', '同乘q^m，然后移项'],
				['(bq^k)^m+q^{km+1}=(aq^k)^m', '同乘q^{km}，然后移项']
			])),


			detail('参数解即：',[

				ksc('[a(a^{m}+b^{m})]^{m}+[b(a^{m}+b^{m})]^{m}=(a^{m}+b^{m})^{m+1}'),
				'即等式'+ksc('a^{m}+b^{m}=(a^{m}+b^{m}')+'两边同乘：'+ksc('(a^{m}+b^{m})^{m}'),
		
		
				ksc('[a(a^{m}+b^{m})^k]^{m}+[b(a^{m}+b^{m})^k]^{m}=(a^{m}+b^{m})^{km+1}'),
				'即等式'+ksc('a^{m}+b^{m}=(a^{m}+b^{m})')+'两边同乘：'+ksc('(a^{m}+b^{m})^{km}'),
		
				ksc('[b(a^{m}-b^{m})^k]^{m}+(a^{m}-b^{m})^{km+1}=[a(a^{m}-b^{m})^k]^{m}'),
				'即上式b→-b，并视n为奇数',
		
				].join(br)
			),

			'或根据'+ksc('a^m+b^n=q'),

			ksc(piece([
				['(aq^n)^m+(bq^m)^n=q^{mn+1}', '同乘q^{mn}'],
				['(aq^{kn})^m+(bq^{km})^n=q^{kmn+1}', '同乘q^{kmn}']
			])),

			'或根据'+ksc('a^m-b^n=q'),

			ksc(piece([
				['(bq^m)^n+q^{mn+1}=(aq^n)^m', '同乘q^{mn}，然后移项'],
				['(bq^{km})^n+q^{kmn+1}=(aq^{kn})^m', '同乘q^{kmn}，然后移项']
			])),


			'三、已知解：<la>A_1^x+B_1^y=C_1^z</la>',
				'令<la>'+piece([
				'A_{{n}}=(A_{{n-1}}^{{yz+1}})(B_{{n-1}}^{{yz}})(C_{{n-1}}^{{yz}})',
				'B_{{n}}=(A_{{n-1}}^{{xz}})(B_{{n-1}}^{{xz+1}})(C_{{n-1}}^{{xz}})',
				'C_{{n}}=(A_{{n-1}}^{{xy}})(B_{{n-1}}^{{xy}})(C_{{n-1}}^{{xy+1}})',
		
			])+'</la>',
			'即原等式同乘<la>A_i^{xyz}B_i^{xyz}C_i^{xyz}</la>',

		])
	),
	detail('当x,y,z两两互素时，有构造解',[
	detail('<la>p-q=1型，即1/p + q/p = 1</la>'+br+'<la>(q^a p^b)^x+(q^c p^d)^y = (q^X p^Y)^z</la>',
		ul([

			'解不定方程组<la>'+piece([
				'ax-tyz=1',
				'Yz-sxy=1',
		
			])+'</la>',
			'得到一组特解a,t,Y,s，则',
			'<la>'+piece([
				'a=(tyz+1)/x',
				'c=tz',
				'X=ty',
				'Y=(sxy+1)/z',
				'b=sy',
				'd=sx',
		
			])+'</la>',
			'通解<la>'+piece([
				'a=(tyz+1)/x+myz',
				'c=tz+mxz',
				'X=ty+mxy',
				'Y=(sxy+1)/z+nxy',
				'b=sy+nyz',
				'd=sx+nxz',
		
			])+'</la>m,n是任意自然数',
			'满足<la>(q^{(tyz+1)/x+myz} p^{sy+nyz})^x+(q^{tz+mxz} p^{sx+nxz})^y = (q^{ty+mxy} p^{(sxy+1)/z+nxy})^z</la>',




		])
	),


	detail('<la>p-q=k型，即k/p + q/p = 1</la>'+br+'<la>方程A^x+kB^y=C^z</la>'+br+'<la>有解(q^a p^b)^x+k(q^c p^d)^y = (q^X p^Y)^z</la>',
		ul([

			'解不定方程组<la>'+piece([
				'ax-tyz=1',
				'Yz-sxy=1',
		
			])+'</la>',
			'得到一组特解a,t,Y,s，则',
			'<la>'+piece([
				'a=(tyz+1)/x',
				'c=tz',
				'X=ty',
				'Y=(sxy+1)/z',
				'b=sy',
				'd=sx',
		
			])+'</la>',
			'通解<la>'+piece([
				'a=(tyz+1)/x+myz',
				'c=tz+mxz',
				'X=ty+mxy',
				'Y=(sxy+1)/z+nxy',
				'b=sy+nyz',
				'd=sx+nxz',
		
			])+'</la>m,n是任意自然数',
			'满足<la>(q^{(tyz+1)/x+myz} p^{sy+nyz})^x+k(q^{tz+mxz} p^{sx+nxz})^y = (q^{ty+mxy} p^{(sxy+1)/z+nxy})^z</la>',


		])
	),

	detail('<la>p-q=j+k型，即k/p + (q+j)/p = 1</la>'+br+'<la>方程A^x+kB^y=C^z</la>'+br+'<la>有解((q+j)^a p^b)^x+k((q+j)^c p^d)^y = ((q+j)^X p^Y)^z</la>',
		ul([

			'解不定方程组<la>'+piece([
				'ax-tyz=1',
				'Yz-sxy=1',
		
			])+'</la>',
			'得到一组特解a,t,Y,s，则',
			'<la>'+piece([
				'a=(tyz+1)/x',
				'c=tz',
				'X=ty',
				'Y=(sxy+1)/z',
				'b=sy',
				'd=sx',
		
			])+'</la>',
			'通解<la>'+piece([
				'a=(tyz+1)/x+myz',
				'c=tz+mxz',
				'X=ty+mxy',
				'Y=(sxy+1)/z+nxy',
				'b=sy+nyz',
				'd=sx+nxz',
		
			])+'</la>m,n是任意自然数',
			'满足<la>((q+j)^{(tyz+1)/x+myz} p^{sy+nyz})^x+k((q+j)^{tz+mxz} p^{sx+nxz})^y = ((q+j)^{ty+mxy} p^{(sxy+1)/z+nxy})^z</la>',


		])
	),


	detail('<la>p-q=k^y型，即k^y/p + q/p = 1</la>'+br+'<la>(q^a p^b)^x+(kq^c p^d)^y = (q^X p^Y)^z</la>',
		ul([

			'解不定方程组<la>'+piece([
				'ax-tyz=1',
				'Yz-sxy=1',
		
			])+'</la>',
			'得到一组特解a,t,Y,s，则',
			'<la>'+piece([
				'a=(tyz+1)/x',
				'c=tz',
				'X=ty',
				'Y=(sxy+1)/z',
				'b=sy',
				'd=sx',
		
			])+'</la>',
			'通解<la>'+piece([
				'a=(tyz+1)/x+myz',
				'c=tz+mxz',
				'X=ty+mxy',
				'Y=(sxy+1)/z+nxy',
				'b=sy+nyz',
				'd=sx+nxz',
		
			])+'</la>m,n是任意自然数',
			'满足<la>(q^{(tyz+1)/x+myz} p^{sy+nyz})^x+(kq^{tz+mxz} p^{sx+nxz})^y = (q^{ty+mxy} p^{(sxy+1)/z+nxy})^z</la>',

		])
	),

	detail('<la>p-q=j^x+k^y型，即k^y/p + (q+j^x)/p = 1</la>'+br+'<la>((q+j^x)^a p^b)^x+(k(q+j^x)^c p^d)^y = ((q+j^x)^X p^Y)^z</la>',
		ul([

			'解不定方程组<la>'+piece([
				'ax-tyz=1',
				'Yz-sxy=1',
		
			])+'</la>',
			'得到一组特解a,t,Y,s，则',
			'<la>'+piece([
				'a=(tyz+1)/x',
				'c=tz',
				'X=ty',
				'Y=(sxy+1)/z',
				'b=sy',
				'd=sx',
		
			])+'</la>',
			'通解<la>'+piece([
				'a=(tyz+1)/x+myz',
				'c=tz+mxz',
				'X=ty+mxy',
				'Y=(sxy+1)/z+nxy',
				'b=sy+nyz',
				'd=sx+nxz',
		
			])+'</la>m,n是任意自然数',
			'满足<la>((q+j^x)^{(tyz+1)/x+myz} p^{sy+nyz})^x+(k(q+j^x)^{tz+mxz} p^{sx+nxz})^y = ((q+j^x)^{ty+mxy} p^{(sxy+1)/z+nxy})^z</la>',

		])
	)].join(br)),



	detail('下面有其他形式的解（都不是反例）',
		ul(['<la>2^n+2^n=2^{n+1}（2-1=1型）</la>',
		'<la>3^{3n}+(2⋅3^n)^3=3^{3n+2}（2-1=1型）</la>',
		'<la>即利用1+2^3=3^2(等式两边同乘3^{3k})</la>',

		'<la>利用1+b^3=c^4⋅d(等式两边同乘d^{3+12k})</la>',

		ksc(piece(['1+(3⋅5)^3=2^4⋅211 (等式两边同乘211^{3+12k})',
			'1+31^3=2^4⋅1862 (等式两边同乘1862^{3+12k}，1862 = 2‧7^2‧19)',
			
			'1+(2⋅13)^3=3^4⋅217 (等式两边同乘217^{3+12k})',
			'1+53^3=3^4⋅1838 (等式两边同乘1838^{3+12k}，1838 = 2‧919)',
		])),

		'<la>利用1+b^4⋅c=d^3(等式两边同乘c^{3+12k})</la>',
		
		ksc(piece([
			'1+2^4⋅307=17^3 (等式两边同乘307^{3+12k})',
			'1+2^4⋅2246=(3⋅11)^3 (等式两边同乘2246^{3+12k}，2246 = 2‧1123)',

			'1+3^4⋅271=(2^2⋅7)^3 (等式两边同乘271^{3+12k})',
		])),

		'<la>利用a^3+b^4⋅c=d^3(等式两边同乘c^{3+12k})</la>',
		'<la>2^3+3^4⋅301=29^3 (等式两边同乘301^{3+12k}，301=7⋅43)</la>',

		'<la>利用a+b^3=c^4⋅a(等式两边同乘a^{3+12k})</la>',

		'<la>90+60^3=7^4⋅90 (等式两边同乘90^{3+12k})</la>',

		'<la>1+2^5⋅3⋅5^2=7^4 (等式两边同乘90^{4+12k})</la>',


		'<la>利用a^3+b^6=c^4⋅d(等式两边同乘d^{3+12k})</la>',
		'<la>2^3+5^6=3^4⋅193 (等式两边同乘193^{3+12k})</la>',

		'<la>利用a^3+b^3=c^2(等式两边同乘c^{3k})</la>',

		'<la>2^3+(2⋅23)^3=312^2 (等式两边同乘312^{3k}，312=2^3‧3‧13)</la>',
		'<la>1+23^3=2^3‧(3‧13)^2 (等式两边同乘(2^3)^{3k+1}‧(3‧13)^{3k})</la>',



		'<la>利用1+b=c^3(等式两边同乘b^{3k})</la>',
		'<la>1+7=2^3 (等式两边同乘7^{3k})</la>',









		])
	),

	detail('遍历代码之一',

	ksc(['满足条件：',
	'A,B,C两两互素≤1000000，其中至少之一≥250001',
	'x,y,z两两互素,介于101，1000之间',
	'A,B是奇数，C是偶数',
	
	'101≤奇数x, 奇数y(≥x), z<1000',
	'3≤奇数A、奇数B<1000000',
	'且A,B两者至少有1个≥250001',
	
	'2≤偶数C≤1000000',

	'估算C的取值范围介于max\\(A^{x/z},B^{y/z}\\)、A^{x/z}+B^{y/z}',
	]).join(br)+
	br+precode(

	`

	function tuple(X,Y,Z,a,b,c){
		var maxxyz=1000n, maxABC=1000000n, minAB1=250001n;
		for(var x=X||101n;x<=maxxyz;x+=2n){
			
			for(var y=Y||x;y<=maxxyz;y+=2n){
				
				if(gcd([x,y])=='1'){

					for(var z=Z||101n;z<=maxxyz;z++){
						if(gcd([x,z])=='1' && gcd([y,z])=='1'){
							console.log(x,y,z);
							for(var A=a||3n;A<=maxABC;A+=2n){
								if(A%31n==0n){console.log('A,B,C,x,y,z '+[A,B,C,x,y,z].join(', '))}


								for(var B=b||(A<minAB1?minAB1:3n);B<=maxABC;B+=2n){
									
																	
									if(gcd([A,B])=='1'){
										var Ax=A**x, By=B**y, Ax_By=Ax+By,
											Nz=Number(z),
											Ax_z=Math.pow(Number(A),Number(x)/Nz),
											By_z=Math.pow(Number(B),Number(y)/Nz),
											Ax_z_By_z=Math.ceil(Ax_z+By_z),
											maxAx_zBy_z=Math.ceil(Math.max(Ax_z,By_z)),
											minC=BigInt(Math.max(maxAx_zBy_z, Number(c||2n))),
											maxC=BigInt(Math.min(Ax_z_By_z, Number(maxABC)));

										for(var C=minC;C<=maxC;C+=2n){
											/*
											if(C==c || C==2n){
												if(x>=z){
													C=A+1n;
													if(y>=z){
														C=Math.max(A,B)+1n;
													}
												}else if(y>=z){
													C=B+1n;
												}
											}
											*/
											

											if(Ax_By==C**z){
												console.log('equation: ',A,'^',x,'+',B,'^',y,'=',C,'^',z);
												if(gcd([A,C])=='1' && gcd([B,C])=='1'){
													console.log('counter-example: ',A,'^',x,'+',B,'^',y,'=',C,'^',z);
													saveText([A,x,B,y,C,z].join(', '),'beal_counter-example');
													return [A,x,B,y,C,z];
												}
											}
										}

									}

								}

							}

						}

					}
				}
	
			}
		}
	}
	
	`)
	)

])
), refer([href(Hs+'www.ams.org/profession/prizes-awards/ams-supported/beal-prize-rules',"百万美元悬赏"),
	href(Hs+'www.planetmath.org/BealConjecture','planetmath.org'),
	href(H+'www.duodaa.com/blog/index.php/archives/71/','哆嗒数学网'),
	
	enwiki('Beal_conjecture','2020-8-11'),


	])],
[gM2("Beilinson conjecture",'',br,enwiki0),gM("Number Theory"),"莱布尼兹π/4公式如何改写替换π为另一个超越数",""],
[gM2("Berry–Tabor conjecture")+enwiki('Quantum_chaos#Berry–Tabor_conjecture'),gM("Geodesic flow"),"紧黎曼面上的地测流的量子动力学中，量子能量特征值行为像独立随机变量数列，隐含经典动力学是完全可积的",""],
[gM2("Birch and Swinnerton-Dyer conjecture",'',br,enwiki0),gM("Number Theory"),"BSD","BSD "+gM('conjecture')+'克莱数学研究所七大千禧年问题之一'],
[gM2("Birch–Tate conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Birkhoff conjecture",'',br,enwiki0),gM("Integrable Systems"),"",""],
[gM2("Bloch–Beilinson conjectures",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Bloch–Kato conjecture",'',br,enwiki0),gM("Algebraic K–theory"),"",gM2("Norm residue isomorphism theorem")],
[gM2("Bloch–Kato conjecture for special values",'',br,enwiki0),gM("Algebraic K–theory"),"",gM2("Norm residue isomorphism theorem")+br+'推广了'+gM2('Milnor conjecture')+br+gM2('Tamagawa number conjecture')],
[gM2("Bochner–Riesz conjecture",'',br,enwiki0),gM("Harmonic analysis"),"",""+br+"⇒"+gM2("Restriction conjecture")+br+"⇒"+gM2("Kakeya Maximal Function conjecture")+br+"⇒"+gM2("Kakeya Dimension conjecture")],
[gM2("Bombieri–Lang conjecture",'',br,enwiki0),gM("Diophantine Geometry"),"",""],
[gM2("Borel conjecture",'',br,enwiki0),gM("Geometric topology"),"",""],
[gM2("Bost conjecture",'',br,enwiki0),gM("Geometric topology"),"",""],
[gM2("Brennan conjecture",'',br,enwiki0),gM("Complex analysis"),"",""],
[gM2("Brocard's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Brumer–Stark conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Bunyakovsky conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Carathéodory conjecture",'',br,enwiki0),gM("Differential Geometry"),"",""],
[gM2("Carmichael totient conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Casas–Alvero conjecture",'',br,enwiki0),gM("Polynomials"),"",""],
[gM2("Catalan–Dickson conjecture on aliquot sequences",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Catalan's Mersenne conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Cherlin–Zilber conjecture",'',br,enwiki0),gM("Group Theory"),"",""],
[gM2("Chowla conjecture",'',br,enwiki0),gM("Möbius function"),"",""+br+"⇒"+gM2("Sarnak conjecture")],
[gM2("Collatz conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Cramér's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Conway's thrackle conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("Deligne conjecture",'',br,enwiki0),gM("Monodromy"),"",""],
[gM2("Dittert conjecture",'',br,enwiki0),gM("Combinatorics"),"",""],
[gM2("Eilenberg–Ganea conjecture",'',br,enwiki0),gM("Algebraic topology"),"",""],
[gM2("Elliott–Halberstam conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Erdős–Faber–Lovász conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("Erdős–Gyárfás conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("Erdős–Straus conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Farrell–Jones conjecture",'',br,enwiki0),gM("Geometric topology"),"",""],

[gM2("Fermat–Catalan conjecture",'',br,enwiki0),gM("Number Theory"),detail("<la>a^x+b^y=c^z（字母都是正整数） \\\\ (a,b,c)=1\\\\ 1\\/x + 1\\/y +1\\/z <1 只有有限个非平凡解</la>",
	brA([
		'已知的平凡解<la>1^m+2^3=3^2 ~(m>6)</la>',
		'已知的9个非平凡解：',
		'<la>2^5+7^2=3^4</la>',
		'<la>7^3+13^2=2^9</la>',
		'<la>2^{7}+17^{3}=71^{2}</la>',
		'<la>3^{5}+11^{4}=122^{2}</la>',
		'<la>33^{8}+1549034^{2}=15613^{3}</la>',
		'<la>1414^{3}+2213459^{2}=65^{7}</la>',
		'<la>9262^{3}+15312283^{2}=113^{7}</la>',
		'<la>17^{7}+76271^{3}=21063928^{2}</la>',
		'<la>43^{8}+96222^{3}=30042907^{2}</la>',
		
		
	])
),""+br+"⇐"+gM2("abc conjecture")+refer([
	enwiki('Fermat–Catalan_conjecture','2020-8-12'),
	enwiki('Beal_conjecture','2020-8-11'),
	
	


	])],


[gM2("Filling area conjecture",'',br,enwiki0),gM("Differential Geometry"),"",""],
[gM2("Firoozbakht's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Fortune's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Four exponentials conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Frankl conjecture",'',br,enwiki0),gM("Combinatorics"),"",""],
[gM2("Gauss circle problem",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Gilbreath conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Goldbach's conjecture",'',br,enwiki0),gM("Number Theory"),"",""+br+"⇒"+gM2("Ternary Goldbach conjecture")+", which was the original formulation."],
[gM2("Gold partition conjecture",'',br,enwiki0),gM("Order Theory"),"",""],
[gM2("Goldberg–Seymour conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("Goormaghtigh conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Green's conjecture",'',br,enwiki0),gM("Algebraic Curves"),"",""],
[gM2("Grimm's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Grothendieck–Katz p–curvature conjecture",'',br,enwiki0),gM("Differential equations"),"",""],
[gM2("Hadamard conjecture",'',br,enwiki0),gM("Combinatorics"),"",""],
[gM2("Herzog–Schönheim conjecture",'',br,enwiki0),gM("Group Theory"),"",""],
[gM2("Hilbert–Smith conjecture",'',br,enwiki0),gM("Geometric topology"),"",""],
[gM2("Hodge conjecture",'',br,enwiki0),gM("Algebraic Geometry"),"",""],
[enwiki0("Homological conjectures in commutative agebra")+br+gM("Commutative Algebra Homological conjectures"),gM("Commutative Algebra"),"",""],
[gM2("Hopf conjectures",'',br,enwiki0),gM("Geometry"),"",""],
[gM2("Invariant subspace problem",'',br,enwiki0),gM("Functional analysis"),"",""],
[gM2("Jacobian conjecture",'',br,enwiki0),gM("Polynomials"),"",""],
[gM2("Jacobson's conjecture",'',br,enwiki0),gM("Ring Theory"),"",""],
[gM2("Kaplansky conjectures",'',br,enwiki0),gM("Ring Theory"),"",""],
[gM2("Keating–Snaith conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Köthe conjecture",'',br,enwiki0),gM("Ring Theory"),"",""],
[gM2("Kung–Traub conjecture",'',br,enwiki0),gM("Iterative Methods"),"",""],
[gM2("Legendre's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Lemoine's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Lenstra–Pomerance–Wagstaff conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Leopoldt's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("List Coloring conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("Littlewood conjecture",'',br,enwiki0),gM("Diophantine approximation"),"",""+br+"⇐"+gM2("Margulis conjecture")],
[gM2("Lovász conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("MNOP conjecture",'',br,enwiki0),gM("Algebraic Geometry"),"",""],
[gM2("Manin conjecture",'',br,enwiki0),gM("Diophantine Geometry"),"",""],
[gM2("Marshall Hall's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Mazur's conjectures",'',br,enwiki0),gM("Diophantine Geometry"),"",""],
[gM2("Montgomery's pair correlation conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("N conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("New Mersenne conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Novikov conjecture",'',br,enwiki0),gM("Algebraic topology"),"",""],
[gM2("Oppermann's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Petersen coloring conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("Pierce–Birkhoff conjecture",'',br,enwiki0),gM("Real Algebraic Geometry"),"",""],
[gM2("Pillai's conjecture",'',br,enwiki0),gM("Number Theory"),ksc([
	'Ax^{n}-By^{m}=C只有有限多组整数解',
	'其中(m, n) ≠ (2, 2)，A,B,C是任意正整数'
]).join(br),""+br+"⇐"+gM2("abc conjecture")],
[gM2("De Polignac's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("quantum unique ergodicity conjecture",'',br,enwiki0),gM("Dynamical Systems"),"","2004, "+gM2('Elon Lindenstrauss')+", "+gM("for Arithmetic Hyperbolic Surfaces")+", 2008, "+gM2("Kannan Soundararajan")+" & "+gM2("Roman Holowinsky")+", "+gM("for.2 Holomorphic Forms")+" of increasing weight for Hecke eigenforms "+gM("on Noncompact Arithmetic Surfaces")],
[gM2("Reconstruction conjecture",'',br,enwiki0),gM("Graph Theory"),"任一至少含有3顶点的有限图可重构（所有与之亚重构（删掉一个点的全部子图集合存在双射）的图都与之同构）",""],
[gM2("Riemann hypothesis",'',br,enwiki0),gM("Number Theory"),"",""+br+"⇐"+gM2("Generalized Riemann hypothesis")+br+"⇐"+gM2("Grand Riemann Hypothesis")+br+"⇔"+gM2("De Bruijn–Newman Constant")+"=0"+br+"⇒"+gM("Density Hypothesis")+', '+gM2("Lindelöf Hypothesis")+' '+gM("See")+' '+gM2("Hilbert–Pólya conjecture")+". "+gM("For.2 Other Riemann Hypotheses")+", "+gM("See")+' '+gM("Weil conjectures")+" (now theorems)."],
[gM2("Ringel–Kotzig conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("Rudin's conjecture",'',br,enwiki0),gM("Additive Combinatorics"),"",""],
[gM2("Sarnak conjecture",'',br,enwiki0),gM("Topological entropy"),"",""],
[gM2("Sato–Tate conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Schanuel's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Schinzel's hypothesis H",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Scholz conjecture",'',br,enwiki0),gM("Addition Chains"),"",""],
[gM2("Second Hardy–Littlewood conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Selfridge's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Sendov's conjecture",'',br,enwiki0),gM("Complex Polynomials"),"",""],
[gM2("Serre's multiplicity conjectures",'',br,enwiki0),gM("Commutative Algebra"),"",""],
[gM2("Singmaster's conjecture",'',br,enwiki0),gM("Binomial Coefficients"),"",""],
[gM2("Standard conjectures on algebraic cycles",'',br,enwiki0),gM("Algebraic Geometry"),"",""],
[gM2("Tate conjecture",'',br,enwiki0),gM("Algebraic Geometry"),"",""],
[gM2("Toeplitz' conjecture",'',br,enwiki0),gM("Jordan Curves"),"",""],
[gM2("Twin prime conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Ulam's packing conjecture",'',br,enwiki0),gM("Packing"),"",""],
[enwiki0("Unicity conjecture for Markov Numbers")+br+gM("Markov Numbers Unicity conjecture"),gM("Number Theory"),"",""],
[gM2("Uniformity conjecture",'',br,enwiki0),gM("Diophantine Geometry"),"",""],
[gM2("Unique games conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Vandiver's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Vizing's conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
[gM2("Waring's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Weight monodromy conjecture",'',br,enwiki0),gM("Algebraic Geometry"),"",""],
[gM2("Weinstein conjecture",'',br,enwiki0),gM("Periodic Orbits"),"",""],
[gM2("Whitehead conjecture",'',br,enwiki0),gM("Algebraic Topology"),"",""],
[gM2("Zauner's conjecture",'',br,enwiki0),gM("Operator Theory"),"",""],



],'TBrc'))+

detail(gM('Unsolved Conjecture')+' 2',
Table([i18(ZLR('Name Field Content Relation'))],[
	['Convex Polygons and Erdős-Szekeres Problem',gM('Discrete Math'),'平面一般位置（不存在3点共线）的f(n)个点中存在n(≥3)个点构成凸多边形，猜测f(n)最小值是<la>2^{n-2}+1</la>',''],

	['P=NP',gM('Discrete Math'),'非确定性图灵机在多项式时间可以解决的判定问题在确定性图灵机上能用多项式时间解决',''],


],'TBrc'))+


detail(gM('Proved Conjecture'),
Table([i18(ZLR('Name Field Content Relation'))],[
	[]

],'TBrc'))+

detail(gM('Disproved Conjecture'),
Table([i18(ZLR('Name Field Content'))],[
	[]


],'TBrc'))+
	Table([i18(ZLR('Name Author Features'))],[
		[href(Hs+'aimath.org/problemlists/','AIM workshop'),'AIM',href(H+'aimpl.org','AimPL – AIM Problem Lists')],
		[enwiki('List_of_unsolved_problems_in_mathematics'),'',Arrf(enwiki,zlrA('List_of_',ZLR('conjectures paradoxes'))).concat(
			Arrf(enwiki,zlrA3('List_of_',ZLR('undecidable NP–complete PSPACE–complete unsolved'),'_problems'))
		).concat(
			Arrf(enwiki,zlrA('List_of_unsolved_problems_in_',
				ZLR('statistics physics computer_science astronomy biology chemistry economics geoscience information_theory linguistics medicine neuroscience philosophy')))
		).join(br)],

		[href(H+'garden.irmacs.sfu.ca/','Open Problem Garden'),'',''],

		[href(Hs+'link.springer.com/book/10.1007/978-3-319-32162-2','数学中的开放性问题'),'Nash and Rassias, Springer (2016)','Open Problems in Mathematics'],

	],'TBrc')
+refer([
	inhref('explore.html?q=Problem/Problem List'),
	inhref('wiki.html?q=Formula/Polynomial/Identity'),
	inhref('wiki.html?q=Formula/Sequence/Sum'),
	inhref('wiki.html?q=Concept/Number/Prime/Prime'),
	inhref('wiki.html?q=Formula/Equation/Diophantus'),
]);

	
