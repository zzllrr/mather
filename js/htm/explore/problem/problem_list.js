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
	inhref('wiki.html?q=Formula/Equation/Diophantus'),
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
[gM2("Beal conjecture",'',br,enwiki0)+gM2('Tijdeman-Zagier conjecture'),gM("Number Theory"),detail("<la>A^x+B^y=C^z（字母都是正整数） \\\\ ⇒ A,B,C有共同素因子\\\\且x,y,z≥3</la>",
	brA(['【分析】','若A,B,C中有完全幂，可以通过改写，使得底数不含完全幂，因此下面讨论仅限A,B,C都不是完全幂',
	'显然A=B=1不符题意（因为此时必有C=2，z=1）',



	'① 反例必要条件之一：A,B,C两两互素（由 p|(A,B) ⇒ p|C ）',
	'即<la>(A,B)=(B,C)=(A,C)=1</la>',
	'⇔ 存在整数使得<la>m_1A+m_2B=m_3B+m_4C=m_5A+m_6C=1</la>',

	

	
	'② 反例必要条件之二：x,y,z不能同时相等（当x=y=z时与费马最后定理FLT矛盾!）',
	'且(x,y,z)=1或2 （>2时，可改写成FLT形式，与无解矛盾！）',

	detail('当(x,y,z)=1时，',
		''
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

			'y=z-2j，即6≤ 2y=2(z-2j)=2(3x-4k-2j) < z = 3x-4k 则  3 ≤ x < z=3x-4k < 4j≤ 2(z-3)=2(3x-4k-3) 则 x\\/4 < j ≤ {3x-4k-3}\\/2',
		])+'</la>'+

		'更精确地<la>'+piece(['3x-4k ≥ \\log_2(3^x+5^3) 则 4k ≤ 3x-\\log_2(3^x+5^3)=\\log_2(2^{3x}/(3^x+125)) 则 k ≤ \\log_{16}(2^{3x}/(3^x+125)) = (3x-\\log_2(3^x+125) )/4',


			'z=y+2j > \\log_2(3^3+5^y) 则j > \\log_4[(3^3+5^y)/2^y] > y\\log_4(5/2) = (z-2j)\\log_4(5/2) 则j > \\log_4(5/2)z/(1+\\log_2(5/2)) = (\\log_{25}(5/2))z = (\\log_{25}(5/2))(3x-4k)',
		])+'</la>'+

		'原方程即：<la>3^{x}+5^{3x-4k-2l}=2^{3x-4k}</la>',
		'<la>(x,3x-4k-2l,3x-4k)=1或2</la>',

		'当(x,y,z)=1时，x是奇数（事实上y,z也是奇数）且(k,x)=(2k+j,x)=1',
		detail('遍历代码',
`
function tuple(X,K,J){
	for(var x=X||3,l=2**54;x<=l;x+=2){
		if(x%100000000 == 0){saveText(x,'beal_cache_x');}
		for(var k=K||Math.floor((3*x-Math.log(3**x+125)/Math.log(2))/4);k>-l;k--){
			if(k%10000 == 0){saveText('x='+x+', k='+k,'beal_cache_x_k')}
			if(gcd([k,x])=='1'){
				var z=3*x-4*k;
				for(var j=J||Math.ceil(Math.log(2.5)/Math.log(25)*z);j< l;j++){
					if(j%100000000 == 0){console.log(x,k,j)}
					if(gcd([2*k+j,x])=='1'){
						var y=z-2*j, z2=2**z, x3=3**x, y5=5**y;
						if(z2==x3+y5){
							saveText([x,y,z].join(' '),'beal_xyz');
							return [x,y,z]
						}
					}
				}
			}

		}
	}
}


`			
		
		),
		'当(x,y,z)=2时，由于2不是4k+1形式，所以无解',

		].join(br)),

	detail('原方程参数解(不完全列举)：',[

		'<la>[a(a^{m}+b^{m})]^{m}+[b(a^{m}+b^{m})]^{m}=(a^{m}+b^{m})^{m+1}</la>',
		'<la>即等式a^{m}+b^{m}=(a^{m}+b^{m})两边同乘：(a^{m}+b^{m})^{m}</la>',


		'<la>[a(a^{m}+b^{m})^k]^{m}+[b(a^{m}+b^{m})^k]^{m}=(a^{m}+b^{m})^{km+1}</la>',
		'<la>即等式a^{m}+b^{m}=(a^{m}+b^{m})两边同乘：(a^{m}+b^{m})^{km}</la>',

		'<la>[b(a^{m}-b^{m})^k]^{m}+(a^{m}-b^{m})^{km+1}=[a(a^{m}-b^{m})^k]^{m}</la>',
		'即上式b→-b，并视n为奇数',

		].join(br)
	),
	detail('下面有其他形式的解（都不是反例）',
		ul(['<la>2^n+2^n=2^{n+1}</la>',
		'<la>3^{3n}+(2⋅3^n)^3=3^{3n+2}</la>',
		'例如：令上式中n=4，得到<la>27^4+162^3=9^7</la>',

			'<la>1+2^3=3^2 (等式两边同乘3^{3k})</la>',
			'<la>1+7=2^3 (等式两边同乘7^{3k})</la>',
			'<la>2^3+(2⋅23)^3=312^2 (等式两边同乘312^{3k}，312=2^3‧3‧13)</la>',

			'<la>1+(3⋅5)^3=2^4⋅211 (等式两边同乘211^{3+12k})</la>',
			'<la>1+31^3=2^4⋅1862 (等式两边同乘1862^{3+12k}，1862 = 2‧7^2‧19)</la>',
			
			'<la>1+(2⋅13)^3=3^4⋅217 (等式两边同乘217^{3+12k})</la>',
			'<la>1+53^3=3^4⋅1838 (等式两边同乘1838^{3+12k}，1838 = 2‧919)</la>',

			'<la>1+2^4⋅307=17^3 (等式两边同乘307^{3+12k})</la>',
			'<la>1+2^4⋅2246=(3⋅11)^3 (等式两边同乘2246^{3+12k}，2246 = 2‧1123)</la>',

			'<la>1+3^4⋅271=(2^2⋅7)^3 (等式两边同乘271^{3+12k})</la>',

			
			'<la>2^3+5^6=3^4⋅193 (等式两边同乘193^{3+12k})</la>',
			
			'<la>2^3+3^4⋅301=29^3 (等式两边同乘301^{3+12k}，301=7⋅43)</la>',

			'<la>60^3+90=7^4⋅90 (等式两边同乘90^{3+12k})</la>',
			
			'递推形式：',
			'已知解：<la>A_1^x+B_1^x=C_1^x</la>',

			'令<la>'+piece([
				'A_{{n}}=(A_{{n-1}}^{{yz+1}})(B_{{n-1}}^{{yz}})(C_{{n-1}}^{{yz}})',
				'B_{{n}}=(A_{{n-1}}^{{xz}})(B_{{n-1}}^{{xz+1}})(C_{{n-1}}^{{xz}})',
				'C_{{n}}=(A_{{n-1}}^{{xy}})(B_{{n-1}}^{{xy}})(C_{{n-1}}^{{xy+1}})',
		
			])+'</la>',



		])
	)

])
), refer([href(Hs+'www.ams.org/profession/prizes-awards/ams-supported/beal-prize-rules',"百万美元悬赏"),
	href(Hs+'www.planetmath.org/BealConjecture','planetmath.org'),
	href(H+'www.duodaa.com/blog/index.php/archives/71/','哆嗒数学网'),
	inhref('wiki.html?q=Formula/Equation/Diophantus'),
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
		'<la>3^{5}+11^{4}=122^{2}',
		'<la>33^{8}+1549034^{2}=15613^{3}</la>',
		'<la>1414^{3}+2213459^{2}=65^{7}</la>',
		'<la>9262^{3}+15312283^{2}=113^{7}</la>',
		'<la>17^{7}+76271^{3}=21063928^{2}</la>',
		'<la>43^{8}+96222^{3}=30042907^{2}</la>',
		
		
	])
),""+br+"⇐"+gM2("abc conjecture")+refer([
	enwiki('Fermat–Catalan_conjecture','2020-8-12'),
	enwiki('Beal_conjecture','2020-8-11'),
	inhref('wiki.html?q=Formula/Equation/Diophantus'),
	inhref('wiki.html?q=Formula/Sequence/Sum'),


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

	],'TBrc')
;

	
