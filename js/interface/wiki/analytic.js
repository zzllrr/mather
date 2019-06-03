/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Analytic']=Kx(



detail('解析式类型',Table([ZLR('名称 记法 定义 性质')],[

	['多项式\nPolynomial','Ax_1^{i_1}x_2^{i_2}⋯+By_1^{j_1}y_2^{j_2}+⋯',khrA([]),
		kul([])
	],

	['整式\n有理整式\nrational integer','',khrA(['有限次加减乘、乘方的代数式']),
		kul([])
	],
	['分式\n有理分式\nrational fraction','',khrA(['有限次加减乘除、乘方并含有除法的代数式']),
		kul([])
	],

	['有理式\nrational expression','',khrA(['有限次加减乘除、乘方的代数式']),
		kul([])
	],
	['无理式\nirrational expression','',khrA(['化简后含开方的代数式']),
		kul([])
	],
	['根式\nradical','',khrA(['表示方根的代数式']),
		kul([])
	],

	['幂\npower','a^x',ztable([['a^x','x','a定义域'],
			[1,0,'ℝ-{0}'],
			['a^{x-1}a','正整数','ℝ'],
			[kroot('a','n'),'正分数'+frac(1,'n',''),'n是偶数时，ℝ^+'],
			[kroot('a^m','n')+'=('+kroot('a','n')+')^m','正分数'+frac('m','n',''),'n是偶数时，ℝ^+'],
			[frac(1,'a^{-x}',''),'负整（分）数','ℝ-{0}'],
			[zarray([lim('n','','a^{x_n}','',''),'其中'+lim('n','','x_n','','')+'=x ','\\{x_n\\}是有理数列']),'无理数','ℝ^+'],
		
			],'',5),
		kul(['a^αa^β=a^{α+β}',
			'(a^α)^β=a^{αβ}',
			'a^αb^α=(ab)^α',
		])
	],

	['代数式\nalgeraic expression','',khrA(['有限次加减乘除、乘方、开方的解析式']),
		kul([])
	],
	['超越式\ntranscendental expression','',khrA(['非代数式的解析式']),
		kul(['包含：'+piece(['无理数指数式','对数式','三角函数式','反三角函数式','双曲函数式','反双曲函数式','幂指函数式'])
		
		])
	],
	['对数\nlogarithm','\\log_aN',khrA([]),
		kul(['\\log_aM+'+'\\log_aN =\\log_aMN',
			'\\log_aM-\\log_aN =\\log_a'+frac('M','N',''),
			'\\log_aM^n = n\\log_aM',
			'\\log_a'+kroot('M','N')+' = '+frac('\\log_aM','N',''),
			'a^{\\log_aN} = N',
			'\\log_aN = '+frac('\\log_bN','\\log_ba','')+' 换底公式',
			'\\log_ab = '+frac(1,'\\log_ba','')
		])
	],

],'wiki').replace(/\n/g,br))+
	

	
detail('对数类型 Logarithm',Table([ZLR('名称 记法 定义 性质')],[

	['Napier对数\nNapier logarithm',kxf('Naplog')+'~y',khrA(['10^7\\ln '+frac('10^7','y','')]),
		''
	],
	['常用对数\ncommon logarithm\nBriggs logarithm\ndecimal logarithm','\\lg x',khrA(['\\log_{10}x']),
		''
	],
	['自然对数\nnatural logarithm',khrA(['\\ln x','\\log x']),khrA(['\\log_{e}x \\\\ 其中e是自然常数']),
		''
	],
	['反对数\nantilogarithm','a^N',khrA(['\\log_aa^n=N','a^n是N的反对数']),
		''
	],


],'wiki').replace(/\n/g,br))+


detail('特殊函数 Special Function',Table([ZLR('函数 定义域 值域 奇偶 单调 凹凸')],[
	[]
],'wiki').replace(/\n/g,br))+
	
detail('连分式 Continued fraction',Table([ZLR('名称 记法 定义 性质')],[
	[]

],'wiki').replace(/\n/g,br))
);