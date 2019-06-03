/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Algebraic']=Kx(

detail('整系数代数方程',Table([ZLR('解形式 等价方程 简化方程 方程解')],[

	['u±'+kroot('v')+' = x', ['$(x-u)^2 = v$',ksc('x^2-2ux+u^2-v=0')].join(hr),
		'x^2+2ax+b = 0',
		'x = -a±'+kroot('a^2-b')
		],

	['u±'+kroot('v',3)+' = u+'+kroot('±v',3)+' = x', ['$(x-u)^3 = ±v$',ksc('x^3-3ux^2+3u^2x-u^3∓v=0')].join(hr),
		'x^3+3ax^2+3a^2x+b = 0',
		['$x = -a+'+kroot('a^3-b',3)+'$',
		'$X = -a'+zmtrx(MfS('[1 1 1]\''))+' + '+kroot('a^3-b',3)+zmtrx([[1],['ω'],['ω^2']])+'$',
		'$其中ω = '+frac('-1+'+kroot(3)+'i',2,'')+' = e^{i'+frac('2π',3,'t')+'}$',
		].join(br),
		],

	['', ['$y^3+3py+2q = 0$','$y = x+3a$'].join(hr),
		['$x^3+3ax^2+bx+c = 0$','且','$3p = b-9a^2$', '$2q = c-3ab$'].join(br),
		[['$X = -a'+zmtrx(MfS('[1 1 1]\''))+' - '+zmtrx(MfS('[1 1;ω ω^2;ω^2 ω]'))+zmtrx([[kroot('q-'+kroot('q^2+p^3'),3)],[kroot('q+'+kroot('q^2+p^3'),3)]])+'$',
		'其中$ω = '+frac('-1+'+kroot(3)+'i',2,'')+' = e^{i'+frac('2π',3,'t')+'}$',
		'判别式$Δ = q^2+p^3'+piece([['>0','有1个实根、2个共轭复根'],['=0','有3个实根（其中至少有2个相等）'],['<0','有3个不同实根']])+'$'].join(br),
		ul(['$当Δ=0时，x = '+piece([['-a - 2'+kroot('q',3),''],['-a + '+kroot('q',3),'两重']])+'$',
			
			['$当Δ>0时, x = '+piece([
					['-a - '+kroot('q+'+kroot('Δ'),3)+' - '+kroot('q-'+kroot('Δ'),3)],
					['-a + '+kroot('q+'+kroot('Δ'),3)+' + ω'+lrp('',kroot('q+'+kroot('Δ'),3)+' - '+kroot('q-'+kroot('Δ'),3),'','')],
					['-a + '+kroot('q-'+kroot('Δ'),3)+' - ω'+lrp('',kroot('q+'+kroot('Δ'),3)+' - '+kroot('q-'+kroot('Δ'),3),'','')],
					])+'$',
				'$= '+piece([
					['-a - ξ'],
					['-a + '+frac('ξ',2,'')+' + '+frac(kroot(3)+'ηi',2,'')+' = -a - rcos'+lrp('','θ+'+frac('2π',3,''),'','')],
					['-a + '+frac('ξ',2,'')+' - '+frac(kroot(3)+'ηi',2,'')+' = -a - rcos'+lrp('','θ-'+frac('2π',3,''),'','')],
					])+'$',
				'$= -a -r\\cos'+lrp('','θ+'+frac('2kπ',3,''),'','')+'$ 其中$k=0,1,2$',
				'其中',
				'实数 $ξ = '+kroot('q+'+kroot('Δ'),3)+' + '+kroot('q-'+kroot('Δ'),3)+'$',
				'实数 $η = '+kroot('q+'+kroot('Δ'),3)+' - '+kroot('q-'+kroot('Δ'),3)+'$',
				'实数 $r = '+kroot('|ξ^2-η^2|')+' = 2'+kroot('|q^2-Δ|',6)+'$',
				'实数 $\\cosθ = '+frac('ξ','r','')+'$',
				'虚数 $\\sinθ = '+frac('ηi','r','')+'$'
				
				].join(br),
			['$当Δ < 0时, x = '+piece([
				['-a - '+kroot('q+i'+kroot('-Δ'),3)+' - '+kroot('q-i'+kroot('-Δ'),3)],
				['-a + '+kroot('q+i'+kroot('-Δ'),3)+' + ω'+lrp('',kroot('q+i'+kroot('-Δ'),3)+' - '+kroot('q-i'+kroot('-Δ'),3),'','')],
				['-a + '+kroot('q-i'+kroot('-Δ'),3)+' - ω'+lrp('',kroot('q+i'+kroot('-Δ'),3)+' - '+kroot('q-i'+kroot('-Δ'),3),'','')],
				])+'$',
				'$= '+piece([
					['-a - ξ'],
					['-a + '+frac('ξ',2,'')+' + '+frac(kroot(3)+'ηi',2,'')+' = -a - rcos'+lrp('','θ+'+frac('2π',3,''),'','')],
					['-a + '+frac('ξ',2,'')+' - '+frac(kroot(3)+'ηi',2,'')+' = -a - rcos'+lrp('','θ-'+frac('2π',3,''),'','')],
					])+'$',
				'$= -a -r\\cos '+lrp('','θ+'+frac('2kπ',3,''),'','')+' 其中k=0,1,2$',
				['其中',
				'$ξ = '+kroot('q+i'+kroot('-Δ'),3)+' + '+kroot('q-i'+kroot('-Δ'),3)+'$',
				'$η = '+kroot('q+i'+kroot('-Δ'),3)+' - '+kroot('q-i'+kroot('-Δ'),3)+'$',
				'$r = '+kroot('ξ^2-η^2')+' = 2'+kroot('q^2-Δ',6)+'$',
				'$\\cosθ = '+frac('ξ','r','')+'$',
				'$\\sinθ = '+frac('ηi','r','')+'$'
				].join(br),
				
					].join(br)
			].join(br))
		]],

	['c±'+kroot('a±'+kroot('b'))+' = x', ['$'+Eq(['(x-c)^2 = a±'+kroot('b'),'((x-c)^2-a)^2 = b'],'','','⇔')+'$',
		'$x^4-4cx^3+2(3c^2-a)x^2-4c(c^2-a)x+(c^2-a)^2-b=0$'].join(hr),
		['$x^4+a_3x^3+a_2x^2+a_1x+a_0 = 0$','且 $a_3^3-4a_2a_3+8a_1 = 0$'].join(hr),
		'x = '+frac('-a_3±'+kroot('3a_3^2-8a_2±16'+kroot('(a_1/a_3)^2-a_0')),4,'')
		],

	['c±('+kroot('a')+'±'+kroot('b')+') = x', Eq(['x-c = ±('+kroot('a')+'±'+kroot('b')+') = ±('+kroot('b')+'±'+kroot('a')+')',
		'(x-c±'+kroot('a')+')^2 = b',
		'x^2-2(c±'+kroot('a')+')x+(c±'+kroot('a')+')^2 -b = 0'],'','','⇔'),
		
		Eq(['(x-c)^2 = a+b±2'+kroot('ab'),'[(x-c)^2 - (a+b)]^2 = 4ab'],'','','⇔'),
		Eq(['x^4-4cx^3+2[3c^2-(a+b)]x^2+4c(a+b-c^2)x+c^4+(a-b)^2-2(a+b)c^2 = 0', 'x^4-4cx^3+2[3c^2-(a+b)]x^2+4c(a+b-c^2)x+[c^2-(a+b)]^2-4ab = 0'],'','','⇔'),
		['$x^4+a_3x^3+a_2x^2+a_1x+a_0 = 0$',
			'且$a_3^3-4a_2a_3+8a_1 = 0$',
			'且$'+frac('(a_1/a_3)^2-a_0',4,'')+' = ab$',
			'且$'+frac('a_2-6a_1/a_3',4,'')+' = a+b$'].join(br),
		'x = '+frac('-a_3±(4'+kroot('a')+'±4'+kroot('b')+')',4,'')
		],


],'TBrc').replace(/____/g,br))


);