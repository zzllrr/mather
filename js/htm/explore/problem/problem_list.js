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
	""+br+"⇔"+gM2('Granville–Langevin conjecture')+', 1-'+gM("Dimension")+gM2("Vojta's conjecture")+br+"⇒"+gM2('Erdős–Woods conjecture')+", "+gM2("Fermat–Catalan conjecture")+" Formulated by David Masser and Joseph Oesterlé. Proof Claimed in 2012 by Shinichi Mochizuki"],
[gM2("Agoh–Giuga conjecture",'',br,enwiki0),gM("Number Theory"),"<la>p是素数~ ⇔ ~p$kmod('B_{p-1}','-1','p')$</la>","如果成立，前p-1项正整数的指数和、指数积，分别模p等于-1、1"],

[gM2("Agrawal's conjecture",'',br,enwiki0),gM("Number Theory"),"<la>$kmod('(X-1)^n','X^n-1','n,X^r-1')+kbr+'（其中n,r是互素正整数）'+kbr$ ⇒ n是素数或$kmod('n^2','1','r')$</la>",""],

[gM2("Andrews–Curtis conjecture",'',br,enwiki0),gM("Combinatorial group Theory"),"平凡群的各种平衡表示可以通过Nielsen变换数列变换成平凡表示",""],
[gM2("Andrica's conjecture",'',br,enwiki0),gM("Number Theory"),"<la>$kroot('p_{n+1}')$-$kroot('p_n')$ < 1 </la><la>即g_n=p_{n+1}-p_n< 2$kroot('p_n')$ + 1 </la>",""],
[enwiki0("Artin conjecture (L-functions)")+br+gM("Artin conjecture")+'('+gM('L Function')+')',gM("Number Theory"),"非平凡不可约表示的Artin L函数在整个复平面解析",""],
[gM2("Artin's conjecture on primitive roots",'',br,enwiki0),gM("Number Theory"),"给定一个整数a（完全平方和-1除外）⇒a是模无限多素数的原根",""+br+"⇐"+gM2("Generalized Riemann Hypothesis")+br+"⇐"+gM2("Selberg conjecture")+" B"],
[gM2("Bateman–Horn conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Baum–Connes conjecture",'',br,enwiki0),gM("Operator K–theory"),"",""+br+"⇒"+gM2("Gromov–Lawson–Rosenberg conjecture")+br+"⇒"+gM2("Kaplansky–Kadison conjecture")+br+"⇒"+gM2("Novikov conjecture")],
[gM2("Beal's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Beilinson conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Berry–Tabor conjecture",'',br,enwiki0),gM("Geodesic flow"),"",""],
[gM2("Birch and Swinnerton–Dyer conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Birch–Tate conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Birkhoff conjecture",'',br,enwiki0),gM("Integrable Systems"),"",""],
[gM2("Bloch–Beilinson conjectures",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("Bloch–Kato conjecture",'',br,enwiki0),gM("Algebraic K–theory"),"",""],
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
[gM2("Pillai's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("De Polignac's conjecture",'',br,enwiki0),gM("Number Theory"),"",""],
[gM2("quantum unique ergodicity conjecture",'',br,enwiki0),gM("Dynamical Systems"),"","2004, "+gM2('Elon Lindenstrauss')+", "+gM("for Arithmetic Hyperbolic Surfaces")+", 2008, "+gM2("Kannan Soundararajan")+" & "+gM2("Roman Holowinsky")+", "+gM("for.2 Holomorphic Forms")+" of increasing weight for Hecke eigenforms "+gM("on Noncompact Arithmetic Surfaces")],
[gM2("Reconstruction conjecture",'',br,enwiki0),gM("Graph Theory"),"",""],
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



	],'TBrc')
;

	
