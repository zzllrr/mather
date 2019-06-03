/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Algebra']=Kx(


detail('代数系统（1个二元运算）',Table([['名称','记法','定义','性质']],[
	ZLR('广群____ < G,*>____封闭性','','____'),
	ZLR('半群\nSemiGroup____ < S,*>____封闭性，结合律','','____'),
	ZLR('独异点(含幺半群)\nMonoid____ < M,*>____封闭性，结合律，单位元','','____'),
	ZLR('群\nGroup____ < G,*>____封闭性，结合律，单位元，可逆','','____')
	
],'wiki').replace(/\n/g,br))+
	
detail('代数系统（2个二元运算）',Table([['名称','记法','定义','性质']],[
	ZLR('环\nRing____ < R,+,*>____'+kol([' < R,+>是交换群',' < R,*>是半群','分配律：*对+可分配']),'','____'),
	ZLR('无零因子环________'+kol([' < R,+,*>是环',' < R,*>无零因子：\\\\ a*b=0 ⇒ a=0或b=0']),'','____'),
	ZLR('可交换环________'+kol([' < R,+,*>是环',' < R,*>可交换']),'','____'),
	ZLR('整环________'+[kol([' < R,+,*>是环',' < R,*>无零因子',' < R,*>可交换',' < R,*>是含幺半群']),
		kol([' < R,+>是交换群',' < R,*>是可交换无零因子独异点','分配律：*对+可分配'])].join(hr),'','____'),
	ZLR('域\nField____ < F,+,*>____'+kol(['< F,+>是交换群（0为单位元）','< F-\\{0\\},*>是交换群','分配律：*对+可分配']),'','____'),
	ZLR('格\nLattice____ < L,*,⊕>____交换律、结合律、吸收律（、幂等律）','','____'),
	ZLR('体____','','____'),
	ZLR('模____','','____')

],'wiki').replace(/\n/g,br))+

detail('布尔代数类型 Boolean Algbra',Table([['名称','记法','定义','性质']],[
			['电路代数\nAlgebra of Circuit','< B,∧,∨,\',0,1>','',kxf('Hasse')+'图为链'],
			['集合代数\nAlgebra of Sets','< ρ(S),∩,∪,?,∅,S>','',kxf('Hasse')+'图为n维立方体（如果|S|=n）'],
			['命题代数\nAlgebra of Propositions','< S,∧,∨, ¬,F,T>','',''],
			['开关代数\nSwitching Algebra','< B^n,*,⊕,‾,0,1> ','','B^n=\\{0,1\\}^n']
/*
http://www.cnblogs.com/edward-bian/p/4491550.html

http://www.wlxt.uestc.edu.cn/wlxt/ncourse/lsxx/web/lssx/end/imgs/16/ls16.2/16.2.4.htm

*/


],'wiki').replace(/\n/g,br))

);