/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Complex']=Kx(


detail('复数（一元运算）',Table([ZLR('名称 记法 定义 性质')],[

	['实部\nreal part',kxf('Re')+'z','',''],
	['虚部\nimaginary part',kxf('Im')+'z','',''],
	
	['共轭数\nconjugate',kxo('z'),'a-bi',kul([
		'z+'+kxo('z')+' = 2a',
		'z-'+kxo('z')+' = 2bi',
		'z'+kxo('z')+' = |z|^2 = |'+kxo('z')+'|^2 = a^2+b^2',
		'|z| = |'+kxo('z')+'| = '+kroot('z'+kxo('z')),
		kxo(kxo('z'))+' = z',
		frac(1,'z','')+' = '+frac(kxo('z'),'|z|^2','')+'~ 其中z≠0',
		'z='+kxo('z')+' ⇔ z为实数',
		'\\arg '+kxo('z')+' = -\\arg z',
		'实系数有理式'+kxo('f(z)')+'=f('+kxo('z')+'), f(z)=0 ⇒ f('+kxo('z')+')=0',
		kxo('z_1±z_2')+' = '+kxo('z_1')+'±'+kxo('z_2'),
		kxo('z_1z_2')+' = '+kxo('z_1')+kxo('z_2'),
		kxo(frac('z_1','z_2',''))+' = '+frac(kxo('z_1'),kxo('z_2'),''),
		frac('z_1','z_2','')+' = '+frac('z_1'+kxo('z_2'),'|z_2|^2',''),
		
		])],
	['模\n绝对值\nmodulus\nabsolute value','|z|',kroot('a^2+b^2'),kul(['|z| = '+kroot('z'+kxo('z')),
		'|z|^2 = z'+kxo('z'),
		])],
	['倒数\nreciprocal',frac(1,'z',''),'',Eq([[frac(1,'z',''),frac('a','a^2+b^2','')+'-'+frac('b','a^2+b^2','')+'i'],
			'r^{-1}(\\cos θ-i\\sin θ)',
			'r^{-1}e^{i(-θ)}',
			])
		],
	['乘方\npower','z^n','',kul(['z^n = (re^{iθ})^n =r^ne^{inθ}\n=r^n(\\cos θ+i\\sin θ)^n =r^n(\\cos nθ+i\\sin nθ)',
			kxA(['(\\cos θ+i\\sin θ)^n = \\cos nθ+i\\sin nθ',kbox('棣莫弗公式De Moivre formula'),
				'证明：由下列两个方程，解得z和z^n',
				piece(['1-2z+z^2 = -2z(1-\\cos θ)','1-2z^n+z^{2n} = -2z^n(1-\\cos nθ)'])+kbox('Euler')])
			
		])],

	['开方\nradication',kroot('z','n'),'',kul([Eq([kroot('z','n'),
			kroot('r','n')+'e^{i'+frac('θ','n','t')+'}',
			kroot('r','n')+'(\\cos '+frac('θ+2kπ','n','t')+'+i\\sin '+frac('θ+2kπ','n','t')+')',
			['k','0,1,2,⋯,n-1']
			]),
			])
		],

],'wiki').replace(/\n/g,br))+
detail('复数（二元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['和\n加法\nsum\naddtion','z_1+z_2','加数addend',kul(['(a+bi)+(c+di) = (a+c)+(b+d)i',
		])],
	['差\n减法\ndifference\nsubtraction','z_1-z_2','被减数minuend\n减数subtrahend',kul(['(a+bi)-(c+di) = (a-c)+(b-d)i',
		])],
	['积\n乘法\nproduct\nmultiplication','z_1z_2','被乘数multiplicand\n乘数multiplicator',kul(['(a+bi)(c+di) = (ac-bd)+(ad+bc)i',
		'r_1e^{iθ_1}r_2e^{iθ_2} = r_1r_2e^{i(θ_1+θ_2)}'
		
		])],
	['商\n除法\nquotient\ndivision',frac('z_1','z_2',''),'',kul([Eq([frac('a+bi','c+di',''),frac('(a+bi)(c-di)','(c+di)(c-di)',''),
			frac('ac+bd','c^2+d^2','')+' + '+frac('bc-ad','c^2+d^2','')+'i']),
		frac('r_1e^{iθ_1}','r_2e^{iθ_2}','')+' = '+frac('r_1','r_2','')+'e^{i(θ_1-θ_2)}'
		
		])],
	['算术运算\n四则运算\narithmetic operation','','加减乘除统称',''],

],'wiki').replace(/\n/g,br))+
detail('复数（二元关系）',Table([ZLR('名称 记法 定义 性质')],[
	['共轭\nconjugate','z='+kxo('z'),'','',''
	],

	['等于\nequal',kbrA(['z='+kxo('z'),'z≠'+kxo('z')+' ~ 不等于']),'','',kul(['等价关系'
		])
	],

],'wiki').replace(/\n/g,br))

);