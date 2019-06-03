/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

solves[2110]={sbj2s:['Matrix','Permutation','Vector',
	], sbj2:{

	'Permutation':[
		{'Display':[
			'$σ$—Permutation“12354'
		]},
		{'Unary Operation':[
			'Inversion Number',
			'奇偶性',
			'轮换分解',
			'对换分解',
			'$|σ|$—Order',
			'$σ^{-1}$—Inverse',
		]},
		
		{'Multiary Operation':[
			'$στ$—一行一个“1243\n13254',
			'$τσ$—一行一个“1243\n13254',
			'$σ^n$…'+gM('Permutation')+'&'+gM('Power')+'n—Power“1243&6',
			'奇偶排列求ij…置换（含ij未知数）&奇1偶2“12ij5&2'
		]},
	],


	'Vector':[
		{'Display':[
			'Row Vector“1 2 3',
			'Column Vector“1 2 3',
		]},
		{'Unary Operation':[
			'$|\\vec{a}|$—Vector Norm“1 2 3',
			'$|\\vec{a}|^2$—Vector Norm Sq“1 2 3',
			'$\\frac{\\vec{a}}{|\\vec{a}|}$—Normalize“1 2 3'
		]},
		
		{'Multiary Operation':[

			'$α‧β$…α\nβ—Vector Inner Product',
			'向量夹角…α\nβ',
			'$α×β$…α\nβ—Vector Cross Product',
			'混合积…a\nb\nc',
			'双重矢性积…a\nb\nc'

		]},
	],




	'Matrix':[
		{'Display':[
			'$A$—Matrix',
			'$|A|$—Determinant',
			'Block…A&准对角阵D3_4_2\n副准对角阵C1_2\nr2平均分为2行\nr2c2平均分为2行或2列—Block“[1 2 3 4;0 5 6 7;0 8 9 10;0 11 12 13]&D1',
			'表示成三元组“[x y;0 z]',

		]},
		
		{'Unary Operation':[

			{'Gram-Schmidt':[
				'Normalize',
				'Orthogonalize',
				'Gram-Schmidt'
			]},
			{'Boolean Matrix':[
				'Boolean',
				'-Boolean'
			]},

			
			'$A^T$—Transpose','$A^H$—Hermitian','$-A$',

			'$A_{ij}$…A&索引\n一阶i1,j2（或缩写为1,2）\n多阶i1,i2,j1,j2\ni1（按第1行）\nj1（按第1列）\n多个用;分开—Algebraic Cofactor“1234&i1',
			'$A^*$—Adjoint Matrix',
			"$$kxf('r')$(A)$—Rank",
			"$$kxf('tr')$(A)$—Trace",
			

		]},
		
		
		
		{'Matrix & Number':['数加“1 2 3 4&5','数减“1 2 3 4&5','数乘“1 2 3 4&5','数除“1 2 3 4&5','数幂“1 2 3 4&5']},


		{'Elementary Transformation':[
			'化上三角（行变换）',
			'化下三角（列变换）',
			
			'化行阶梯',
			'化列阶梯',
			
			'化最简行…行变换化成特殊的上三角、行阶梯',
			'化最简列…列变换化成特殊的下三角、列阶梯',
			
			'化标准型','初等变换化标准型',
				
			'对角化求合同矩阵',
			'求极大线性无关组并表示其余向量…矩阵&k\n（后k个向量用βi表示）“[1 2 3;4 5 7;3 8 10]&1'
		]},
		

			
		{'Inverse':[
			'$A^{-1}$—Inverse',
			'伴随矩阵求逆',
			'分块矩阵求逆…A&分块命令\n只支持2×2分块，且是准对角矩阵或副准对角阵',
			'$f(A)=A^2+bA+cI=0求逆$…b,c&k&E\n参数E，表示用字母E表示单位矩阵（默认是用字母I）“-3,2&4'
		]},


		{'Determinant':[
			'$|A|$…det(A)—Determinant',
			'$|kA|$…|A|,Order,n,k“-2 3 5 4',
			'$|AP|$…P&|A|“1234&2456',
			
			'By Definition',
			'代数余子式之和…A&i4&系数“1234&i2&-1,1',
			'Laplace Expansion',
			'对角线法则',
			'Block Matrix',
			'拆列',

			'$|a(bA)^{-1}+c(dA)^*|$…|A|,n&a,b,c,d“10,3&-1,2,3,4',
			'$|a(bA)^{-1}+c(dA)^*+eE+fA|$…特,征,值&a,b,c,d,e,f“1,2,3&1,2,3,4,5',
			
			
			'$a_{ij}=A_{ij}$—Matrix Order','',
				
			'三角形面积…三顶点坐标;隔开',
		]},
		
		{'Minor':[
			'Leading Principle Minor','判断正定',
			'行列式因子','不变因子','最小多项式','初等因子',

		]},



		{'Eigen Value':[
			{'Eigen Vector':[
				'Eigen Vector…A&'+gM('Eigen Value'),
				'Eigen Vector Orthogonalize',
				'Eigen Vector Gram-Schmidt',
				'Eigen Matrix'
			]},
			'Eigen Polynomial',
			'Eigen Value…A&'+gM('Eigen Value'),
			'Singular Value'
				
		]},


		{'Matrix Factorization':[
			'分解为初等矩阵的乘积…矩阵&初等矩阵个数',
			'SVD'
		]},



		{'Power':[
			
			{'Diagonalize':[
				'对角化求幂…A&'+gM('Power')+'&'+gM('Eigen Value'),
				'对角化求幂PA=ΛP…P\nΛ\nn\nA的多项式',
				'对角化求幂AP=PΛ…P\nΛ\nn\nA的多项式'
			]},

			'$A^2$…A—Square','$A^n$…A&n—Power',
			'Boolean Power…A&n','布尔可达矩阵',
			'$α^Tβ求幂$…2×n行向量矩阵&'+gM('Power'),
			'$αβ^T求幂$…2×n行向量矩阵&'+gM('Power'),
			'T分解求幂…A&分解因子a&'+gM('Power'),

		]},




		{'Multiary Operation':[

			{'Dot':['点乘','点除','点幂']},
			{'Kronecker':['$A⊕B$','$A⊗B$','Kronecker Power']},

			{'Boolean':['$并∨$','$交∧$','$积⊙$']},

			{'Transpose':['$A^TA$','$AA^T$',
				'$A^TB$','$AB^T$',
				'$A^TB^T$','$B^TA^T=(AB)^T$',
				
				'$ABA^T$','$A^TBA$',
				'$BAB^T$','$B^TAB$']},

			{'Division':[
				'$A^{-1}B$…A\nB\n变换参数—左除A\B',
				'$BA^{-1}$…A\nB\n变换参数—右除B/A',
				'$AB^{-1}$…A\nB\n变换参数',
				'$B^{-1}A$…A\nB\n变换参数',
				
				'$P^{-1}AP$…P\nA\n变换参数',
				'$PAP^{-1}$…P\nA\n变换参数',
			]},

			'$A+B$','$A-B$','$A∔B$—Direct Sum',

			'$AB$','$BA$','$\\exp$',

			
			'Polynomial…A&表达式',
			'Calculator…表达式\nA=赋值\nB=赋值',
			'Calculator by Step…表达式\nA=赋值\nB=赋值'
			
			
			]},


	
		{'Equation':[

			{'Matrix Equation':[
				'$AX=aA+bX$…A&a,b&[XB]“1234&3,-1&B',
				'$XA=aA+bX$…A&a,b&[XB]“1234&2,3&B',
				'$AX=B$…A\nB\n变换参数',
				'$XA=B$…A\nB\n变换参数',
				'$AXB=C$…A\nB\nC\n行变换参数\n列变换参数',
			]},

			{'根据已知通解求其它方程通解':[
				'$已知AX=β通解ξ+cη，求BY=(A,Ax+kβ)Y=β的通解$…矩阵(ξ,η,x)&系数k'
			]},
			'$AX=0$',
			'$AX=b$—Input Augmented Matrix',
			'Cramer Rule—Augmented Matrix&变换参数1@变换参数2&未知数风格x1[a][x]',
			
			'$P^{-1}AP=B求P$…A\nB“1234\n2751',
		]},





		{'Form':[
			'Smith Normal Form','Jordan Normal Form'
		]},


		{'Quadric Form':[
			'Matrix → Quadric Form…S(只填元素)',
			'Quadric Form → Matrix…S2(只需填写里面的值)',
			
			'二次型化标准型（配方法）',
			'二次型化标准型（合同变换）',
			'二次型求秩','二次型正定']
		},



		{'Base':[
			{'求基下矩阵':[
				'$线性变换𝒜，基η，求基下矩阵【A=η^{-1}𝒜】$…第1行：𝒜矩阵\n第2行：基η',
				'$基ⅠⅡ，基下矩阵A[B]，求基下矩阵[A]B【B=P^{-1}AP】$…第1行：基1\n第2行：基2\n第3行：A[B]&[12]',
			
				'$标准正交基下矩阵A，基Ⅱ，求基下矩阵【B=P^{-1}AP】$…第1行：标准正交基下矩阵A\n第2行：基P',
				
				'$基ⅠηⅡε，线性变换𝒜[ℬ]，求基下矩阵[A]B【B=ε^{-1}𝒜η^{-1}ε】$…第1行：基1\n第2行：基2,ε\n第3行：𝒜[ℬ]&[12]',
				
				'$基Ⅰ(基Ⅱ是标准正交基）η，基Ⅰ线性变换𝒜，求基Ⅱ下矩阵B【B=𝒜η^{-1}】$…第1行：基1,η\n第2行：基1线性变换𝒜'
			]},
			{'求坐标':[

			
				'$基[ⅠⅡ]，过渡矩阵P，坐标[xy]，求基[ⅡⅠ]、坐标[yx]【β=αP，X=PY】$…第1行：基&[12]\n第2行：P\n第3行：坐标&[xy]其中xy标明坐标是x，还是y',
				'$基ⅠⅡ，坐标[xy]，求过渡矩阵、坐标[yx]【β=αP，X=PY】$…第1行：基1\n第2行：基2\n第3行：坐标&[xy]',
				'$基ⅠS=基ⅡT，坐标[xy]，求过渡矩阵、坐标[yx]【S=PT，X=PY】$…第1行：S\n第2行：T\n第3行：坐标&[xy]',
				'$标准正交基ⅠP=基Ⅱ，坐标[xy]，求坐标[yx]【过渡矩阵P，X=PY】$…第1行：过渡矩阵P\n第2行：坐标&[xy]',
			]},
			{'求过渡矩阵':[
					
				'$基[ⅠⅡ]，坐标xy，求过渡矩阵、基[ⅡⅠ]【β=αP，X=PY】$…第1行：基&[12]\n第2行：坐标x\n第3行：坐标y',
				'$基[ⅠⅡ]，y=Mx，求过渡矩阵、基[ⅡⅠ]【β=αP，X=PY】$…第1行：基&[12]\n第2行：M',
			]},
			{'度量矩阵':[
			
				'$基，坐标xy，求度量矩阵M、内积【M=αTα，(a,b)=x^TMy】$…第1行：基\n第2行：坐标x\n第3行：坐标y',
				'度量矩阵，求一组标准正交基、过渡矩阵、坐标'
				
			]},
				
				
		]},

		{'Linear Space':['Dimension','零度','Kernel','Range']},


	]
}};