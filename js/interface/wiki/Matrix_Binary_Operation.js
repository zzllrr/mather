/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Matrix Binary Operation']=Kx(


detail('矩阵（二元运算）',Table([ZLR('名称 记法 定义 性质')],[
	ZLR('加法\naddtion____'+khrA(['A+B'])+'____对应元素（或矩阵块）相加____'+
		'构成交换群 < M,+>'+piece(['封闭性','结合律','有单位元（零矩阵）','可逆（负矩阵）','交换律'])+
		'','','____'),
	ZLR('数乘\nscalar multiplication____'+khrA(['kA'])+'____k与矩阵每个元素（或矩阵块）分别相乘____'+
		kul([
		'1A = A',
		'(kl)A = k(lA)',
		'(k+l)A = kA + lA',
		'k(A+B) = kA + kB',
		'k(AB) = (kA)B = A(kB)',
		'矩阵加法和数乘构成线性空间'+kbox('矩阵向量空间vector space of matices')
		]),'','____'),
	ZLR('乘法\nmultiplication____'+khrA(['AB','A_{m×n}B_{n×s}'])+'____'+khrA([lrp('',sum('k',1,'n','a_{ik}b_{kj}','',''),'','')+'_{m×s}',
		'A的i行元素分别与B的j列元素相乘之和，\\\\ 得到新元素，然后构成新矩阵','（矩阵分块乘法定义类似）'])+'____'+
		kul(['矩阵乘法构成半群 < M,*>'+piece(['封闭性','结合律']),
			'双线性'+piece([
				'(A+B)C = AC + BC',
				'C(A+B) = CA + CB',
				'k(AB) = (kA)B = A(kB)',
				]),
			'一般不满足交换律'+piece([
				'AB 与 BA 即使都有意义也未必相等',
				'AB 与 BA 不同阶'
				]),
			'特别地'+piece([
				]),

			'转置'+piece([
				'(AB)^T = B^TA^T',
				'(AB)^H = B^HA^H'
				]),

			'逆'+piece([
				'方阵AB可逆 ⇔ A、B都可逆',
				'(AB)^{-1} = b^{-1}A^{-1}'
				]),

			'行列式|AB| = |A||B| = |BA|',
			
			'迹tr(AB) = tr(BA)',

			'谱'+piece([
				piece([['A_m的特征值λ_i','其中i=1,⋯,m'],['B_n的特征值μ_j','其中j=1,⋯,n']],1)+' ⇒ A_m⊗B_n的特征值λ_iμ_j',
				

				]),
					
			kxA(['AB=0 且A、B都不为0（且可以不是方阵） ','⇒ r(A)、r(B) < n（A的列数）',
				'（更强的结论：r(A)+r(B)≤n）',
				'证明：','A、B均不可逆，','否则等式两边乘以逆矩阵，出现矛盾！']),
			
			kxA(['证明：','AB=0，考虑方程组Ax=0，','基础解系中向量个数是n-r(A)，','因此r(B)≤n-r(A)，','即r(A)+r(B)≤n']),
			kxA(['A^TA=0 且A是实矩阵 ⇒ A=0','证明：','A^TA主对角线元素是完全平方和'])
		])+kul([
		'矩阵的幂'+piece([[
			piece(['利用特征向量矩阵P',
				'P^{-1}AP='+kxf('diag')+'(λ_1,λ_2,⋯)=Λ',
				'A^n=PΛ^nP^{-1}'
			],1),'可对角化时'],
			[piece(['B^2='+zmtrx([[0,'a','b'],[0,0,'c'],[0,0,0]])+'^2='+zmtrx([[0,0,'ac'],[0,0,0],[0,0,0]]),
			'B^3='+zmtrx([[0,'a','b'],[0,0,'c'],[0,0,0]])+'^3='+zmtrx([[0,0,0],[0,0,0],[0,0,0]]),
			'(E+B)^n=E+nB+C_n^2B^2',
			zmtrx([[1,'a','b'],[0,1,'c'],[0,0,1]])+'^n='+zmtrx([[1,'na','C_n^2ac+nb'],[0,1,'nc'],[0,0,1]]),
			'(kE+B)^n=k^nE+nk^{n-1}B+C_n^2k^{n-2}B^2',
			zmtrx([['k','a','b'],[0,'k','c'],[0,0,'k']])+'^n='+zmtrx([['k^n','k^{n-1}na','C_n^2k^{n-2}ac+k^{n-1}nb'],[0,'k^n','k^{n-1}nc'],[0,0,'k^n']]),
			
			],1),'不可对角化时']
			])
		])+kul([
				
		'方阵乘法：'+piece(['构成含幺半群'+piece(['封闭性','结合律','单位元（单位矩阵）'])]),
		'矩阵加法和乘法：'+piece([zarray(['构成环 < M,+,*>',kbox('全阵环All Matrix Ring')])+
			piece(['< M,+>是交换群','< M,*>是半群','左分配律（对加法）','右分配律（对加法）'])]),
		'方阵加法、乘法和数乘：构成代数'+kbox('全矩阵代数All Matrix Algebra')
		
		]),'','____'),


	ZLR('直积\nKronecker积\n克罗内克积\n张量积的一种特例\ndirect product\nKronecker product\ntensor product____'+khrA(['A⊗B','A_{m×n} ⊗ B_{p×q}'])+'____'+khrA([
		'(a_{ij}B)_{m×n}',
		'(c_{ij})_{mp×nq}',

		'递推关系式'+piece(['c_{p(x-1)+u,q(y-1)+v} = a_{xy}b_{uv}',
			'c_{ij} = a_{'+zp(frac('i','p',''),'⌊⌋')+zp(frac('j','q',''),'⌊⌋')+'}b_{(i \\mod p),(j\\mod q)}']),
		'A所有元素分别与B相乘（数乘），得到矩阵块',

		'A⊗B = '+zmtrx(zstrx('a_{11}B ⋯ a_{1n}B;⋮ ⋱ ⋮;a_{m1}B ⋯ a_{mn}B')),
		
		zmtrx(Mtrx.build.F('a',2))+'⊗'+zmtrx([[1,0],[0,1]])+' = '+
		zmtrx(zstrx('a_{11} 0 a_{12} 0;0 a_{11} 0 a_{12};a_{21} 0 a_{22} 0;0 a_{21} 0 a_{22}')),
		zmtrx([[1,0],[0,1]])+'⊗'+zmtrx(Mtrx.build.F('b',2))+' = '+
		zmtrx(Mtrx.build.D([Mtrx.build.F('b',2),Mtrx.build.F('b',2)]))
		])+'____'+kul([
			'结合律',
			'双线性'+piece([
				'(A+B)⊗C = A⊗C + B⊗C',
				'C⊗(A+B) = C⊗A + C⊗B',
				'k(A⊗B) = (kA)⊗B = A⊗(kB)',
				]),
			'混合积性质 (A⊗B)(C⊗D)=AC⊗BD （满足矩阵乘法意义下）',

			'一般不满足交换律'+piece([
				'A⊗B 与 B⊗A 同阶',
				'A⊗B 与 B⊗A 置换等价',
				'A_m⊗B_n 与 B_n⊗A_m 置换相似'
				]),
			'特别地'+piece([
				'I_m⊗I_n = I_n⊗I_m = I_{mn}',
				'I_n⊗I_n = I_{n^2}'
				]),
			'秩'+piece([
				'r(A⊗B) = r(A)r(B)'
				]),
				
			'转置'+piece([
				'(A⊗B)^T = A^T⊗B^T',
				'(A⊗B)^H = A^H⊗B^H'
				])+'~ A、B顺序与矩阵乘法的区别',
			'逆'+piece([
				'A⊗B可逆 ⇔ A、B都可逆',
				'(A⊗B)^{-1} = A^{-1}⊗B^{-1}'
				]),

			'行列式|A_m⊗B_n| = |A|^n|B|^m = |B_m⊗A_n| ~ 注意：m、n的顺序',

			'谱'+piece([
				piece([['A_m的特征值λ_i','其中i=1,⋯,m'],['B_n的特征值μ_j','其中j=1,⋯,n']],1)+' ⇒ A_m⊗B_n的特征值λ_iμ_j',
				'tr(A_m⊗B_n) = tr(A_m)tr(B_n)',
				]),

			'奇异值'+piece([
				piece([['A_m的特征值λ_i','其中i=1,⋯,m'],['B_n的特征值μ_j','其中j=1,⋯,n']],1)+' ⇒ A_m⊗B_n的特征值λ_iμ_j',
				'tr(A⊗B) = tr(A)tr(B)',
				]),
				
				
				
			]),'','____'),

	ZLR('Kronecker和\n克罗内克和\nKronecker sum____A_m ⊕ B_n____'+khrA([
		'A⊕B=A⊗I_n+I_m⊗B',
		'(c_{ij})_{m^2×n^2}',
		zmtrx(Mtrx.build.F('a',2))+'⊕'+zmtrx(Mtrx.build.F('b',2))+' = '+
		zmtrx(zstrx('a_{11}+b_{11} b_{12} a_{12} 0;b_{21} a_{11}+b_{22} 0 a_{12};a_{21} 0 a_{22}+b_{11} b_{12};0 a_{21} b_{21} a_{22}+b_{22}'))
		])+'____'+kul([
		'e^{A⊕B} = e^A⊗e^B',
		'一般不满足交换律'
		]),'','____'),

	ZLR('直和\ndirect sum____'+khrA(['A ∔ B',kxf('diag')+'(A,B)','构成准对角阵'])+'____','','____'),

	ZLR('点运算\ndot____.____矩阵相应元素的运算____'+ztable([ZLR('点运算 矩阵之间 矩阵与数'),
			['.±','A.±B = A±B ~（点）加减','(a_{ij}±k) = A±(k)_{m×n} ~数加减'],
			[zarray(['.×','.*']),'A.×B = (a_{ij}×b_{ij}) ~点乘', 'kA ~数乘'],
			[zarray(['.÷','./']),'A.÷B = (a_{ij}÷b_{ij}) ~点除', frac('A','k','')+' ~数除'],
			['.','A.^B = '+lrp('','a_{ij}^{b_{ij}}','','')+' ~点幂', '(a_{ij}^{k}) ~ 数幂'],
			['','',''],
			['常规运算','矩阵之间','矩阵与数'],
			['±','A±B = (a_{ij}±b_{ij}) ~加减',''],
			[zarray(['×','*']),'A×B = '+lrp('',sum('k',1,'n','a_{ik}b_{kj}','',''),'','')+' ~ 乘法', ' kA ~ 数乘'],
			[zarray(['\\backslash','/']),zarray(['A\\backslash B = A^{-1}B ~左除','B/A = BA^{-1} ~右除']), ''],
			['.',zarray(['A^B = '+lrp('','a_{ij}^{b_{ij}}','',''),kxf('Kronecker')+'幂','（与'+kxf('Kronecker')+'积思路类似'+kxf('by zzllrr')+'）']), 'A^k ~乘幂'],
			]),'','____'),
],'wiki').replace(/\n/g,br))



);