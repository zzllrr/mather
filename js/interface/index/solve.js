/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

tooltip.solve={};

solves={index:['Number','Sequence','Series','Function','Permutation','Vector','Matrix','Proposition','Set','Relation','Graph'],

	'Number':[
		{'Express':[
			{'数↔字':[
				{'Display':['n→上标','n→下标','上下标→n','上下标→html']},
				{'本地化':['本地化数字','1→一','1→一元','1→壹圆']},
				{'古代数字':['罗马数字…数字 是否小写\n罗马数字（用,表示横线）']}		//	'甲骨文 钟鼎文（金文）筹算 古埃及 古巴比伦 古希腊 玛雅'
			]},


			{'单位换算':[
				{'角度':[
					'弧度→角度°…数字（小数，分数）&是否有π“2/3&1',
					'角度°→弧度…数字（小数）&是否返回π“60&1'
				]},
			]},

			{'进制':[
				{'60进制':['秒→度(时) 分 秒','度(时) 分 秒→秒“1 2 3']},
				{'转换':['进制转换…数字n&进制a,进制b(!表示阶乘进制)“101&2,16']},
			]},
		]},
		{'Classification':[
			{'Positive Integer':[
				{'Power':['幂的末位…底数,幂,末几位“27 5 3', '$a^b÷c的余数$…a,b,c“27 5 3']},
				{'约数与倍数':['Greatest Common Divisor…a b c—GCD“18 27', 'Least Common Multiple…a b c—LCM“18 27', '辗转相除法']},
				{'Divide':[
					{'数位':[
						'?能被m整除…RegExp,m\n.[123](..)\1{2},m\n1a34b',
						'n能被?整除…n,RegExp\n.[123](..)\1{2},m\n1a34b',
						]},
					{'排列':['数字串S选排列n能被M整除不能被N整除…S&n&M&N']},
					{'区间':['n以内能被p整除不能被q整除…区间n 整数p 整数q',
						'n以内各位数字之和能被m整除的个数…区间n 整数m']},
				]},


				{'分拆':['数和…和N,M个,MIN,MAX,允许重复dup&全满足pos&全不满足neg&有数字满足pos1&有数字不满足neg1\n条件表达式1,2,2n,3n-1,质数p,合数c\n例如：77,3,2,,&p']},

				{'扑克游戏':['24点']}
			]},

			{'Prime':[
				{'Factorization':['质因数分解…n&[pc]\nn:数字（或含字母）\n参数p（默认）、c分别指定字母为质数、合数（非0）', '质因数分解（全部因子）']},
				{'质数统计':['其中质数…a~b\na,b,c', '区间内质数个数…区间n\nn以内']},
				{'质数阶乘':['$p_n\\#$', '$p\\#内质数个数$…n(质数阶乘pn#以内)\np#(质数阶乘p#以内)\n&nodtl不需要过程']},
				{'最值':['小于n的最大质数', '大于n的最小质数']},
				{'Coprime':['Jacobi符号…a,q']}
			]},

			
			{'Natural':[
				{'排列组合':['Permutation Number','Combination Number']},
				{'Factorial':['$n!$—n最大9648或9675','$n!!$—双阶乘', '$n!的末零数$…n']},

				{'Digit':['数根dr']},
			]},

			{'Integer':[
				'竖式计算…算式&保留小数位数“124/3&3',
				'Big Integer Simplify',
			]},

			{'Fraction':[
				{'假分数':['假分数→带分数','带分数→假分数…k[又,]m/n']},
				{'Simplify':['约分…a/b&是否化成带分数']},
				{'通分':['通分比较大小','通分加减运算…支持多个分数加减式']},
				{'分子分母':['分子分母积等于n','分子分母和等于n']},


			]},

			{'Decimal':[
				{'记数':['科学记数法…数字n,小数位数m','工程记数法']},
				{'转成分数':['小数→百分数…小数,循环节长度','小数→分数…小数,循环节长度']},
				{'精度':['保留m位小数…数字n,位数m','保留有效数字…数字n,有效位数m']},
				'竖式计算…算式&保留小数位数“124/3&3',

			]},

			{'Rational':[
				{'四则运算':['$+$…加','$-$…减','$×$…乘','$÷$…除']},
				{'Simplify':['有理数幂化简…系数,有理数,幂\n或者表达式','分子有理化','分母有理化']}
			]},
				
			{'Irrational':[
				{'精度':['$π$…小数位数—圆周率','$e$…小数位数—自然常数']},

			]},

			{'Algebraic Number':[

			]},

			{'Transcendental':[
				{'判断':['是否超越数']}
			]},

			{'Real':[
				{'Unary Operation':[
					{'Power':['$x^2$','$x^3$','$x^y$…x,y']},
					{'开方':$A(zlrA3("$kroot('x'",ZLR(" ,3 ,4 ,'n'"),')$'))},
					{'指数':$A(['e^x','e^x-1'])},
					{'对数':['$\\ln$—自然对数','$\\ln(x+1)$','$\\lg$—常用对数','$\\log_2x$','$\\log_xy$…x,y—对数']},
					{'三角函数':$A(['\\sin','\\cos','\\tan', '\\cot','\\sec','\\csc',
								'\\arcsin','\\arccos','\\arctan', "$kxf('arccot')$","$kxf('arcsec')$","$kxf('arccsc')$"])},
					{'双曲函数':$A(['\\sh','\\ch','\\th', '\\cth',"$kxf('sech')$","$kxf('csch')$",
								'\\sh^{-1}','\\ch^{-1}','\\th^{-1}', '\\cth^{-1}',"$kxf('sech')$^{-1}","$kxf('csch')$^{-1}"])},
				]},
				
				{'Multiary Operation':[
					{'四则':['$+$…Plus','$-$…Minus','$×$…Times','$÷$…Divide']},
					{'Calculator':['Numerical Calculator JS Native','Numerical Calculator','Symbolic Calculator']},
				]},
			]},

			{'Complex':[
				{'形式转换':['代数形式','三角形式','指数形式']},
				{'多元运算':[
					{'四则':['$+$…加','$-$…减','$×$…乘','$÷$…除']},
				]}
			]},
		]},
		
		{'Equation':[
			{'代数方程':[
				{'Unary':['一元一次…a,b&x\nax+b=0','一元二次…a,b,c&x\nax^2+bx+c=0','一元三次…a,b,c,d&x\nax^3+bx^2+cx+d=0','一元四次…a,b,c,d,e&x\nax^4+bx^4+cx^2+dx+e=0',
					'十字相乘法','根与系数关系'
				]},
				{'不定方程':['一次不定方程…矩阵形式\n只要正整数解']},
				
				
			]},
			
			{'代数方程组':[
				{'一次方程组':['二元一次','三元一次','多元一次']}
			]},


			{'同余方程':[
				{'Unary':['一元一次…①标准形式a,b,m\nax+b≡0 (mod m)\n②除法形式b/a,m\nax≡b (mod m)\n③简化形式b,m\nx≡b (mod m)\n④完整形式ax+b≡c (mod m)',
					'一元二次…①标准形式a,b,c,m\nax^2+bx+c≡0 (mod m)\n②完整形式',
					'一元三次…①标准形式a,b,c,d,m\nax^3+bx^2+cx+d≡0 (mod m)\n②完整形式',
				]}

			]},
			
			{'同余方程组':[
				{'一次':['一元一次…①[矩阵形式a,b;]&同模m\n&1（应用孙子定理）\n②[矩阵形式a,b,不同模m;]\nax+b≡0 (mod m)\n③除法形式b1,b2/a1,a2&模m1,m2\nax≡b (mod m)\n④简化形式b1,b2&模m1,m2\nx≡b (mod m)\n⑤完整形式，用;隔开多个方程',
				
					'多元一次…①[矩阵形式a,b,c,d;]&同模m\nax+by+cz≡d (mod m)\n②[矩阵形式a,b,c,d,不同模m;]\nax+by+cz≡d (mod m)'
				]}
				
			]},
		]},

		{'Inequation':[
			{'Unary':['一元一次…ax+b','一元二次','一元三次','一元四次'

			]},
		]},
	],

	'Sequence':[
		{'通项公式':[
			{'有限项':['第n项','前n项','前n项和','前n项积']},
			{'无限项':['极限','收敛性']},
		]},
		{'统计':[
			{'个数':['频数','频率','众数']},
			{'均值':['算术平均值','几何平均值','调和平均值']},
			{'最值':['最大值','最小值','极差']},
			{'分布':['中位数','标准差','方差']}
			
		]},
	],


	'Series':[

	],

	'Function':[
		{'Graphic':['Basic Elementary Function…f(x),D']},
		{'Unary Operation':[
			'Domain',
			'Range…f(x),D',
			'Limit…f,a',
			'Simplify',
			'Rationalize',

		]},
		{'Differential':[
			'Derivative…f&x&阶数&x0',
			'Partial Derivative…f;fname&x,y&阶数&x0,y0',
			'Grad…f&x,y&φ&x0,y0',
			'Directional Derivative…f&x,y&φ&x0,y0',
	
		]},
		{'Integral':[
			{'Line Integral':[
				{'Green.1 Formula':[
					'路径无关'
				]},
				{'Stokes Formula':[
					'路径无关'
				]},
				'Contour Integral',
			]},
			{'Surface Integral':[
				'Gauss Formula'
			]},
			'Indefinite Integral',
			'Definite Integral',
		]},

	],




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
			'双重矢性积…a\nb\nc',
			'子空间内射影…行向量组A\n行向量b'
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
			'$A^*$…A&1使用逆矩阵求—Adjoint Matrix',
			"$$kxf('r')$(A)$—Rank",
			"$$kxf('tr')$(A)$—Trace",
			

		]},
		
		
		
		{'Matrix & Number':['数加“1 2 3 4&1~5','数减“1 2 3 4&1~5','数乘“1 2 3 4&1~5','数除“1 2 3 4&1~5','数幂“1 2 3 4&1~5']},


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
			'代数余子式之和…A或a_i&i4&系数或余子式“1234&i2&-1,1',
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



		{'Eigen':[
			{'Eigen Vector':[
				'Eigen Vector…A&'+gM('Eigen Value'),
				'Orthogonalize',
				'Gram-Schmidt',
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
				'对角化求幂PA=ΛP…P\nΛ&B\nn\nA的多项式',
				'对角化求幂AP=PΛ…P\nΛ&B\nn\nA的多项式'
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
			{'Linear Equations':[
				'$AX=0$',
				'$AX=b$—Input Augmented Matrix',
				'Cramer Rule—Augmented Matrix&变换参数1@变换参数2&未知数风格x1[a][x]',
				
			]},
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
				'$标准正交基Ⅰ基Ⅱ=P，坐标[xy]，求坐标[yx]【过渡矩阵P，X=PY】$…第1行：过渡矩阵P\n第2行：坐标&[xy]',
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


	],

	
	'Proposition':[{'Display':['Proposition']},
		{'Unary Operation':['对偶','真值表','集合化','布尔化',
		'$¬$—非','$∧$—合取','$∨$—析取',
		'主析取范式∨','主合取范式∧','主异或范式','主等值范式',
		'Simplify','化简集合化','化简布尔化',
		'前束范式'
		]},
		
	],
	'Set':[{'Display':['Set']},
		{'Unary Operation':['$|A|$—势','$P(A)$—幂集','全部关系','命题化']},
		{'Multiary Operation':['∩—交','∪—并','-—差','⊕—环和','⊗—环积','×—笛卡尔积','复合运算']},
	],
	'Relation':[{'Display':['关系','关系图',"Hasse哈斯图"]},
		 {'Unary Operation':['关系类型','前域','陪域','定义域','值域','域','',
			'$∼$—逆关系','',
			'$r$—自反闭包','$s$—对称闭包','$R^+$…t—传递闭包','',
			'$R^*$…tr—自反传递闭包','$R\'$…tsr—自反对称传递闭包','',
			'子集极最界','覆盖','链'
			]},
		{'二元运算':[
			'关系合成','关系幂'
			]},
	],

	'Graph':[{'Display':['无向图','有向图','哈斯图']},
		{'Matrix':['关联矩阵','邻接矩阵','可达矩阵',]},
		{'Unary Operation':['图类型','直径','',
		 	'支配集','独立集','点覆盖','匹配','边覆盖','',
			"最短路径（Dijkstra算法）",'',
			"最小生成树（Kruskal算法）","最小二叉树Huffman Tree"
			]},
		{'Multiary Operation':['∩—交','-—差','∪—并','补','⊕—环和']}
	]
};

