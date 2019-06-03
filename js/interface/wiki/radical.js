/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Radical']=Kx(



detail('根式类型 Radical',Table([ZLR('名称 记法 定义 性质')],[

	['最简根式\nsimplest radical','','需满足下列条件的根式：'+kol(['被开方数的指数与根指数互素','被开方数写成不可约乘积时，\\\\ 每个因式指数小于根指数','被开方数不含分母']),
		kul([])
	],
	['复合二次根式\ncompound quadratic radical',kroot('a±'+kroot('b')),khrA([]),
		kul(['化简方法：'+ztable([['公式法', zarray([kroot('a±'+kroot('b'))+'='+kroot(frac('a+'+kroot('a^2-b'),2,''))+'±'+kroot(frac('a-'+kroot('a^2-b'),2,'')),
				'其中a>0, b>0, a^2-b是完全平方式',
				kroot('(a+b)±2'+kroot('ab'))+'='+kroot('a')+'±'+kroot('b'),'其中a>b>0'])
			],
			['配方法',''],
			['方程组求解法','a±'+kroot('b')+'=('+kroot('x')+'±'+kroot('y')+')^2'],
			])
		])
	],


],'wiki').replace(/\n/g,br))
	
);