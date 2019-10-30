/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Foldable Solids'] =

	[
		'可折叠为正方体的平面展开图共11种。（异构数34种）',
		ol([
			['最长链 = 6 （异构数：1；可折叠数：0）',
				scbox('6=6（逐行）','bold'),
				svgf.id('cuboid6_b" width="140" height="40',
					svgf.path('M0 0 H120 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M80 0 V20 M100 0 V20', 'silver" transform="translate(10,10)'),
					1, 1),
				'1+1+1+1+1+1（逐列）'

			].join(br),

			['最长链 = 5 （异构数：3；可折叠数：0）',
				scbox('6=1+5（逐行）','bold'),
				svgf.id('cuboid5_b" width="120" height="60',
					svgf.path('M0 0 H100 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M80 0 V20 M0 0 V-20 H20 V0  M25 -10 H35 M30 -15 L 35 -10 30 -5  M45 -10 H55 M50 -15 L 55 -10 50 -5 ', 'silver" transform="translate(10,30)'),
					1, 1),
				'1+1+1+1+2（逐列）'
			].join(br),

			['最长链 = 4 （异构数：12；可折叠数：6）',
				ol([
					[
						scbox('6=1+4+1（逐行）','bold'),
						svgf.id('cuboid4_1" width="190" height="80',
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M0 0 V-20 H20 V0 M0 20 V40 H20 V20  M25 -10 H35 M30 -15 L 35 -10 30 -5  M25 30 H35 M30 25 L 35 30 30 35', 'red" transform="translate(10,30)') +
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M20 0 V-20 H40 V0 M20 20 V40 H40 V20', 'red" transform="translate(100,30)'),
							1, 1),



						svgf.id('cuboid4_1_b" width="190" height="80',
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M0 0 V-20 H20 V0 M0 -20 V-40 H20 V-20', 'silver" transform="translate(10,50)') +
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M20 0 V-20 H40 V0 M20 -20 V-40 H40 V-20', 'silver" transform="translate(100,50)'),
							1, 1),

						'1+1+1+3（逐列）',
					].join(br),

					[
						scbox('6=1+4+1\'（逐行）','bold'),
						svgf.id('cuboid4_2" width="370" height="80',
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M20 0 V-20 H40 V0 M40 20 V40 H60 V20', 'red" transform="translate(10,30)') +

							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M0 0 V-20 H20 V0 M20 20 V40 H40 V20  M45 30 H55 M50 25 L 55 30 50 35  M65 30 H75 M70 25 L 75 30 70 35', 'red" transform="translate(100,30)') +
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M0 0 V-20 H20 V0 M40 20 V40 H60 V20', 'red" transform="translate(190,30)') +
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M0 0 V-20 H20 V0 M60 20 V40 H80 V20', 'red" transform="translate(280,30)'),
							1, 1),

					].join(br),

					[
						scbox('6=2+4（逐行）','bold'),
						svgf.id('cuboid4_2_b" width="370" height="60',
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M20 0 V-20 H40 V0 M40 0 V-20 H60 V0', 'silver" transform="translate(10,30)') +

							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M0 0 V-20 H20 V0 M20 0 V-20 H40 V0', 'silver" transform="translate(100,30)') +
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M0 0 V-20 H20 V0 M40 0 V-20 H60 V0', 'silver" transform="translate(190,30)') +
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M0 0 V-20 H20 V0 M60 0 V-20 H80 V0', 'silver" transform="translate(280,30)'),
							1, 1),

						'1+1+2+2（逐列）'

					].join(br),
				],'lstl6')
			].join(br),



			['最长链 = 3 （异构数：17；可折叠数：4）',
				ol([
					[
						scbox('6=1+3+2（逐行）','bold'),
						svgf.id('cuboid3_1" width="280" height="80',
							svgf.path('M0 0 H60 V20 H0 V0 M20 0 V20 M40 0 V20 M0 0 V-20 H20 V0  M0 20 H-20 V40 H20 V20 M0 20 V40  M25 -10 H35 M30 -15 L35 -10 L30 -5  M45 -10 H55 M50 -15 L55 -10 L50 -5', 'red" transform="translate(30,30)') +
							svgf.path('M0 0 H60 V20 H0 V0 M20 0 V20 M40 0 V20 M20 0 V-20 H40 V0  M0 20 H-20 V40 H20 V20 M0 20 V40', 'red" transform="translate(120,30)') +
							svgf.path('M0 0 H60 V20 H0 V0 M20 0 V20 M40 0 V20 M40 0 V-20 H60 V0  M0 20 H-20 V40 H20 V20 M0 20 V40', 'red" transform="translate(210,30)'),
							1, 1),

						'1+3+1+1（逐列），1+2+2+1（逐列），1+2+1+2（逐列）',
						
						svgf.id('cuboid3_1_b" width="360" height="80',
							svgf.path('M-20 0 H40 V20 H-20 V0 M20 0 V40 H-20 V20 M0 40 V-20 H20 V0', 'silver" transform="translate(30,30)') +
							svgf.path('M0 0 H60 V20 H0 M0 0 V40 H20 V-20 H40 V40 H60 V20', 'silver" transform="translate(80,30)') +
							svgf.path('M0 0 H60 V-20 H40 V40 H0 V0 M0 20 H60 V0 M20 0 V40', 'silver" transform="translate(150,30)') +
							svgf.path('M0 0 H60 V20 H0 M0 0 V40 H20 V0 M60 0 V-20 H40 V40 H60 V20', 'silver" transform="translate(220,30)')+
							svgf.path('M0 0 H60 V20 H0 M0 0 V20 M20 0 V40 H60 V20 M40 40 V-20 H60 V0', 'cyan" transform="translate(290,30)'),
							1, 1),
						
						'2+3+1（逐列），2+2+2（逐列），2+1+3（逐列），1+2+3（逐列）',
					].join(br),


					[
						scbox('6=2+1+3（逐行）','bold'),
						
						svgf.id('cuboid3_2_b" width="240" height="80',
							svgf.path('M0 0 H60 V20 H0 V0 M20 0 V20 M40 0 V20 M0 0 V-20 H20 V0  M20 -20 V-40 H-20 V-20 H0 V-40', 'silver" transform="translate(30,50)') +
							svgf.path('M0 0 H60 V20 H0 V0 M20 0 V20 M40 0 V20 M20 0 V-20 H40 V0  M40 -20 V-40 H0 V-20 H20 V-40', 'silver" transform="translate(100,50)') +
							svgf.path('M0 0 H60 V20 H0 V0 M20 0 V20 M40 0 V20 M40 0 V-20 H60 V0  M60 -20 V-40 H20 V-20 H40 V-40', 'silver" transform="translate(170,50)'),
							1, 1),
						'1+3+1+1（逐列），2\'+3+1（逐列），1+2\'+3（逐列）',
					].join(br),


					[
						scbox('6=1+2+3（逐行）','bold'),
						
						svgf.id('cuboid3_3_b" width="330" height="80',

							svgf.path('M0 0 V60 H20 V0 H0 M0 20 H40 V40 H0 M0 40 H-40 V60 H0 M-20 40 V60  M25 50 H35 M30 45 L35 50 30 55', 'silver" transform="translate(50,10)') +

							svgf.path('M0 0 V60 H40 V40 H0 M0 0 H20 V60 M0 20 H40 V40 M0 40 H-20 V60 H0', 'cyan" transform="translate(120,10)') +
							svgf.path('M0 0 V60 H60 V40 H0 M0 0 H20 V60 M0 20 H40 V60', 'silver" transform="translate(170,10)') +

							svgf.path('M0 0 V40 H80 V60 H20 M0 0 H20 V60 M0 20 H40 V60 M60 40 V60', 'silver" transform="translate(240,10)'),
							1, 1),

						'1+1+3+1（逐列），1+3+2（逐列，重复），3+2+1（逐列），2+2+1+1（逐列）',


					].join(br),

					[
						scbox('6=3+3（逐行）','bold'),
						
						svgf.id('cuboid3_4_b" width="280" height="60',

							svgf.path('M0 0 H60 V20 H0 M20 0 V40 H-40 V20 H0 M0 0 V40 M40 0 V20 M-20 20 V40', 'red" transform="translate(50,10)') +

							svgf.path('M25 30 H35 M30 25 L35 30 30 35', 'silver" transform="translate(50,10)') +

							svgf.path('M0 0 H60 V20 H-20 M40 0 V40 M20 0 V40 M0 0 V40 M-20 20 V40 H40', 'silver" transform="translate(140,10)') +

							svgf.path('M0 0 H60 V40 H0 V0 M40 0 V40 M20 0 V40 M0 20 H60', 'silver" transform="translate(210,10)'),

							1, 1),

						'1+1+2+1+1（逐列），1+2+2+1（逐列），2+2+1（逐列）',
					].join(br),

				],'lstl6')
			].join(br),

			['最长链 = 2 （异构数：1；可折叠数：1）',
				scbox('6=2+2+2（逐行）','bold'),
				svgf.id('cuboid3_5_b" width="100" height="80',

					svgf.path('M0 0 H40 V20 H60 V40 H80 V60 H40 V40 H20 V20 H0 V0 M20 0 V20 H40 V40 H60 V60', 'red" transform="translate(10,10)') +


					1, 1),
				'1+2+2+1（逐列）'
			].join(br),

		], 'lsts2')


	].join(br)

	;