/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

explore['Topic/Short Notes/Foldable Solids'] =
ul(['平面拼接图的定义：各面形状重新排列拼接后，满足：是单个完整图（不允许断开），且相邻面必共边（不能只满足共点），且所共边恰好都是相邻面的原来的边（不能一长一短，针对长方形等情况）',
'平面展开图的定义：多面体图形沿某些边剪开（但不完全剪断），展开得到的一张平面图（可通过折叠还原为原立体形状）',
'平面展开图的同构定义：全等（镜像翻转（水平、垂直），旋转（水平，竖直，中心对称），平移），即可以完全重合'
])+

detail('正方体的平面展开图（可折叠还原为正方体）共11种。（不可折叠数23种，异构总数34种）',
	[	
		XML.wrapE('zdog',zdogs())+svgf.id('cuboid0" class="vam" width="40" height="40',
		svgf.path('M0 0 H20 V20 H0 V0', 'red" transform="translate(10,10)'),
		1, 1)+' × 6',

		XML.wrapE('md','## 分类讨论：')+
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


					svgf.path('M0 0 H60 V40 H0 V0 M40 0 V40 M20 0 V40 M0 20 H60', 'silver" transform="translate(320,10)'),

					1, 1),
				'1+2+2+1（逐列）'
			].join(br),
			

		], 'lsts2')


	].join(br)+[

		XML.wrapE('md','## 总结：')+
		'能折叠为正方体的必要条件：'+ol([
			'两面成对原则：一组对面配对后，不允许出现第三者',
			'两面共线原则：一组共线邻面配对后，不允许出现第三者',
			'三面共点原则：共点面数不超过3',
		]),

		'不能折叠为正方体的情况分类：',
		svgf.id('cuboid_b" width="320" height="110',
		svgf.path('M0 0 H100 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M80 0 V20   M120 0 H160 V40 H120 V 0  M140 0 V40  M120 20 H160', 'silver" transform="translate(10,10)') +
		svgf.path('M0 0 H20 V40 H0 V0 M40 0 H60 V40 H40 V0  M0 20 H20 M40 20 H60  M24 30 H27  M29 30 H32  M34 30 H37', 'silver" transform="translate(10,60)') +
		svgf.path('M0 0 H20 V40 H0 V0 M40 0 H60 V40 H40 V0  M0 20 H60 M20 40 H60', 'silver" transform="translate(80,60)') +
		svgf.path('M0 0 H20 V40 H0 V0 M60 0 H80 V40 H60 V0  M0 20 H80 M20 40 H80 M40 20 V40', 'silver" transform="translate(150,60)') +
		svgf.path('M0 0 H60 V20 H0 M0 0 V60 H20 V0 M40 0 V20 M0 40 H20', 'silver" transform="translate(180,10)') +svgf.path('M0 0 V40 H80 V60 H20 M0 0 H20 V60 M0 20 H40 V60 M60 40 V60', 'silver" transform="translate(310,10) rotate(90)'),
		1, 1),
		ol([
			'含有长“一”字型（一行超过4格，破坏原则1）',
			'含有“田”字格（4面共点，破坏原则3）',
			'含有“C”型（破坏原则2）',
			'含有大“L”型（横竖均至少三格，破坏原则1）',
			'大“W”型（一臂高举，破坏原则2）'
		]),



	].join(br)

)+
detail('长方体（高=深≠宽）的平面展开图共11种。（不可折叠数23种，异构总数34种）(本文未完成，待修缮！)',
	[
		XML.wrapE('zdog',zdogs(140,100,`let zz=new Zdog.Box({
			width:60,height:40,depth:40,
		
			leftFace: '${RandomColor()}',
			rightFace: '${RandomColor()}',
			frontFace: '${RandomColor()}',
			rearFace: '${RandomColor()}',
			topFace: '${RandomColor()}',
			bottomFace: '${RandomColor()}',
		
			color: '${RandomColor()}',
		
			
			addTo: zo,
			stroke: false,
		});
		
		`,0))+svgf.id('cuboidHD0" class="vam" width="50" height="40',
		svgf.path('M0 0 H30 V20 H0 V0', 'red" transform="translate(10,10)'),
		1, 1)+' × 4'+svgf.id('cuboidHD0_1" class="vam" width="40" height="40',
		svgf.path('M0 0 H20 V20 H0 V0', 'red" transform="translate(10,10)'),
		1, 1)+' × 2',
		

		XML.wrapE('md','## 分类讨论：')+
		ol([

			['最长链 = 4 （异构数：12；可折叠数：6）',
				ol([
					[
						scbox('6=1+4[竖]+1（逐行）','bold'),
						svgf.id('cuboidHD4_1" width="190" height="90',
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M0 0 V-20 H20 V0 M0 30 V50 H20 V30  M25 -10 H35 M30 -15 L 35 -10 30 -5  M25 40 H35 M30 35 L 35 40 30 45', 'red" transform="translate(10,30)') +
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M20 0 V-20 H40 V0 M20 30 V50 H40 V30', 'red" transform="translate(100,30)'),
						1, 1),



						svgf.id('cuboidHD4_1_b" width="190" height="90',
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M0 0 V-20 H20 V0 M0 -20 V-40 H20 V-20', 'silver" transform="translate(10,50)') +
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M20 0 V-20 H40 V0 M20 -20 V-40 H40 V-20', 'silver" transform="translate(100,50)'),
							1, 1),

						'1+1+1+3（逐列）',
					].join(br),

					[
						scbox('6=1+4[竖]+1\'（逐行）','bold'),
						svgf.id('cuboidHD4_2" width="370" height="90',
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M20 0 V-20 H40 V0 M40 30 V50 H60 V30', 'red" transform="translate(10,30)') +

							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M0 0 V-20 H20 V0 M20 30 V50 H40 V30  M45 40 H55 M50 35 L 55 40 50 45  M65 40 H75 M70 35 L 75 40 70 45', 'red" transform="translate(100,30)') +
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M0 0 V-20 H20 V0 M40 30 V50 H60 V30', 'red" transform="translate(190,30)') +
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M0 0 V-20 H20 V0 M60 30 V50 H80 V30', 'red" transform="translate(280,30)'),
							1, 1),

					].join(br),

					[
						scbox('6=2+4[竖]（逐行）','bold'),
						svgf.id('cuboidHD4_2_b" width="370" height="70',
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M20 0 V-20 H40 V0 M40 0 V-20 H60 V0', 'silver" transform="translate(10,30)') +

							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M0 0 V-20 H20 V0 M20 0 V-20 H40 V0', 'silver" transform="translate(100,30)') +
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M0 0 V-20 H20 V0 M40 0 V-20 H60 V0', 'silver" transform="translate(190,30)') +
							svgf.path('M0 0 H80 V30 H0 V0 M20 0 V30 M40 0 V30 M60 0 V30 M0 0 V-20 H20 V0 M60 0 V-20 H80 V0', 'silver" transform="translate(280,30)'),
							1, 1),

						'1+1+2+2（逐列）'

					].join(br),
				],'lstl6')
			].join(br),



			['最长链 = 3 （异构数：17；可折叠数：4）',
				ol([
					[
						scbox('6=1+3[竖]+2（逐行）','bold'),
						svgf.id('cuboidHD3_1" width="310" height="90',
						svgf.path('M0 0 H60 V30 H0 V0 M20 0 V30 M40 0 V30 M0 0 V-20 H20 V0  M0 30 H-30 V50 H20 V30 M0 30 V50  M25 -10 H35 M30 -15 L35 -10 L30 -5  M45 -10 H55 M50 -15 L55 -10 L50 -5', 'red" transform="translate(40,30)') +
							svgf.path('M0 0 H60 V30 H0 V0 M20 0 V30 M40 0 V30 M20 0 V-20 H40 V0  M0 30 H-30 V50 H20 V30 M0 30 V50', 'red" transform="translate(140,30)') +
							svgf.path('M0 0 H60 V30 H0 V0 M20 0 V30 M40 0 V30 M40 0 V-20 H60 V0  M0 30 H-30 V50 H20 V30 M0 30 V50', 'red" transform="translate(240,30)'),
							1, 1),

							
						'1+3+1+1（逐列），1+2+2+1（逐列），1+2+1+2（逐列）',
						
						svgf.id('cuboidHD3_1_b" width="220" height="100',
							svgf.path('M0 0 H60 V30 H0 M0 0 V60 H20 V-20 H40 V50 H60 V30', 'silver" transform="translate(10,30)') +
							svgf.path('M0 0 H60 V30 H0 M0 0 V60 H20 V0 M60 0 V-20 H40 V50 H60 V30', 'silver" transform="translate(80,30)') +
							svgf.path('M0 0 H60 V30 H0 M0 0 V50 H20 V0 M60 0 V-20 H40 V60 H60 V30', 'silver" transform="translate(150,30)'),
							1, 1),
						
						'2+2+2（逐列），2+1+3（逐列）',
					].join(br),

					[
						scbox('6=2+1[竖]+3（逐行）','bold'),

							
						svgf.id('cuboidHD3_2_b1" width="240" height="100',
							svgf.path('M0 0 H60 V30 H0 V0 M20 0 V30 M40 0 V30 M0 0 V-30 H20 V0  M20 -30 V-50 H-20 V-30 H0 V-50', 'silver" transform="translate(30,60)') +
							svgf.path('M0 0 H60 V30 H0 V0 M20 0 V30 M40 0 V30 M20 0 V-30 H40 V0  M40 -30 V-50 H0 V-30 H20 V-50', 'silver" transform="translate(100,60)') +
							svgf.path('M0 0 H60 V30 H0 V0 M20 0 V30 M40 0 V30 M40 0 V-30 H60 V0  M60 -30 V-50 H20 V-30 H40 V-50', 'silver" transform="translate(170,60)'),
							1, 1),

						svgf.id('cuboidHD3_2_b2" width="270" height="100',
							svgf.path('M0 0 H70 V20 H0 V0 M20 0 V20 M40 0 V20 M0 0 V-30 H20 V0  M20 -30 V-60 H-20 V-30 H0 V-60', 'silver" transform="translate(30,70)') +

							svgf.path('M0 0 H70 V20 H0 V0 M20 0 V20 M40 0 V20 M20 0 V-30 H40 V0  M40 -30 V-60 H0 V-30 H20 V-60', 'silver" transform="translate(110,70)') +
							svgf.path('M-10 0 H60 V20 H-10 V0 M10 0 V20 M40 0 V20 M40 0 V-30 H60 V0  M60 -30 V-60 H20 V-30 H40 V-60', 'silver" transform="translate(200,70)'),
							1, 1),

						svgf.id('cuboidHD3_2_b3" width="270" height="100',

							svgf.path('M0 0 H70 V20 H0 V0 M20 0 V20 M50 0 V20 M0 0 V-30 H20 V0  M20 -30 V-60 H-20 V-30 H0 V-60', 'silver" transform="translate(30,70)') +

							svgf.path('M0 0 H70 V20 H0 V0 M30 0 V20 M50 0 V20 M30 0 V-30 H50 V0  M50 -30 V-60 H10 V-30 H30 V-60', 'silver" transform="translate(110,70)')+
							svgf.path('M-10 0 H60 V20 H-10 V0 M20 0 V20 M40 0 V20 M40 0 V-30 H60 V0  M60 -30 V-60 H20 V-30 H40 V-60', 'silver" transform="translate(200,70)'),
							1, 1),

						svgf.id('cuboidHD3_2_b4" width="310" height="90',
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M50 0 V20 M0 0 V-30 H20 V0  M20 -30 V-50 H-30 V-30 H0 V-50', 'silver" transform="translate(40,60)') +
							svgf.path('M0 0 H80 V20 H0 V0 M30 0 V20 M50 0 V20 M30 0 V-30 H50 V0  M50 -30 V-50 H0 V-30 H30 V-50', 'silver" transform="translate(130,60)') +
							svgf.path('M0 0 H80 V20 H0 V0 M30 0 V20 M60 0 V20 M60 0 V-30 H80 V0  M80 -30 V-50 H30 V-30 H60 V-50', 'silver" transform="translate(220,60)'),
							1, 1),

						'1+3+1+1（逐列），2\'+3+1（逐列），1+2\'+3（逐列）',
						'变体',


					].join(br),

/*
					[
						scbox('6=2+1[横]+3（逐行）','bold'),
						
						svgf.id('cuboidHD3_2_b" width="300" height="80',
							svgf.path('M0 0 H80 V20 H0 V0 M30 0 V20 M60 0 V20 M0 0 V-20 H30 V0  M30 -20 V-40 H-20 V-20 H0 V-40', 'silver" transform="translate(30,50)') +
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M50 0 V20 M20 0 V-20 H50 V0  M50 -20 V-40 H0 V-20 H20 V-40', 'silver" transform="translate(120,50)') +
							svgf.path('M0 0 H80 V20 H0 V0 M20 0 V20 M50 0 V20 M50 0 V-20 H80 V0  M80 -20 V-40 H30 V-20 H50 V-40', 'silver" transform="translate(210,50)'),
							1, 1),

						svgf.id('cuboidHD3_2_b_2" width="300" height="80',
							svgf.path('M0 0 H80 V20 H0 V0 M30 0 V20 M50 0 V20 M0 0 V-20 H30 V0  M30 -20 V-40 H-20 V-20 H0 V-40', 'silver" transform="translate(30,50)') +
							svgf.path('M-10 0 H70 V20 H-10 V0 M20 0 V20 M50 0 V20 M20 0 V-20 H50 V0  M50 -20 V-40 H0 V-20 H20 V-40', 'silver" transform="translate(130,50)')+
							svgf.path('M0 0 H80 V20 H0 V0 M30 0 V20 M50 0 V20 M50 0 V-20 H80 V0  M80 -20 V-40 H30 V-20 H50 V-40', 'silver" transform="translate(210,50)'),
							1, 1),
						'1+3+1+1（逐列），2\'+3+1（逐列），1+2\'+3（逐列）',

					].join(br),

*/
					[
						scbox('6=1+2[竖]+3（逐行）','bold'),
						
						svgf.id('cuboidHD3_3_b" width="290" height="100',

							svgf.path('M0 0 V70 H20 V0 H0 M0 20 H40 V50 H0 M0 50 H-60 V70 H0 M-30 50 V70', 'silver" transform="translate(70,10)') +


							svgf.path('M0 0 V80 H70 V60 H0 M0 0 H20 V80 M0 30 H40 V80', 'silver" transform="translate(120,10)') +

							svgf.path('M0 0 V50 H100 V70 H20 M0 0 H20 V70 M0 20 H40 V70 M70 50 V70', 'silver" transform="translate(180,10)'),
							1, 1),

						'1+1+3+1（逐列），1+3+2（逐列，重复），3+2+1（逐列），2+2+1+1（逐列）',


					].join(br),

					[
						scbox('6=3+3（逐行）','bold'),
						
						svgf.id('cuboidHD3_4_b" width="310" height="80',

							svgf.path('M0 -10 H60 V20 H0 M20 -10 V40 H-50 V20 H0 M0 -10 V40 M40 -10 V20 M-30 20 V40', 'red" transform="translate(60,20)') +

svgf.path('M0 -10 H60 V20 H0 M20 -10 V40 H-50 V20 H0 M0 -10 V40 M40 -10 V20 M-20 20 V40', 'silver" transform="translate(140,30)') +
							svgf.path('M0 0 H60 V30 H-30 M40 0 V50 M20 0 V50 M0 0 V50 M-30 30 V50 H40', 'silver" transform="translate(240,10)') +

							1, 1),

						'1+1+2+1+1（逐列），1+2+2+1（逐列），2+2+1（逐列）',
					].join(br),

				],'lstl6')
			].join(br),


			['最长链 = 2 （异构数：1；可折叠数：1）',
				scbox('6=2+2+2（逐行）','bold'),
				svgf.id('cuboidHD3_5_b" width="270" height="100',

					svgf.path('M0 0 H40 V20 H60 V50 H80 V80 H40 V50 H20 V20 H0 V0 M20 0 V20 H40 V50 H60 V80', 'silver" transform="translate(10,10)') +

					svgf.path('M0 0 H40 V30 H60 V50 H80 V80 H40 V50 H20 V30 H0 V0 M20 0 V30 H40 V50 H60 V80', 'silver" transform="translate(80,10)') +

					svgf.path('M0 0 H40 V80 H0 V0 M 0 20 H40 M 0 50 H40 M20 0 V80', 'silver" transform="translate(170,10)')+
					svgf.path('M0 0 H40 V80 H0 V0 M 0 30 H40 M 0 50 H40 M20 0 V80', 'silver" transform="translate(220,10)'),

					1, 1),
				'1+2+2+1（逐列），3+3（逐列）'
			].join(br),

		], 'lsts2')


	].join(br)+[

		XML.wrapE('md','## 总结：')+
		'能折叠为长方体的必要条件：'+ol([
			'两面成对原则：一组对面配对后，不允许出现第三者',
			'两面共线原则：一组共线邻面配对后，不允许出现第三者，且所共线要一样长',
			'三面共点原则：共点面数不超过3',
		]),

		'不能折叠为长方体的情况分类：',
		svgf.id('cuboid_b" width="320" height="110',
		svgf.path('M0 0 H100 V20 H0 V0 M20 0 V20 M40 0 V20 M60 0 V20 M80 0 V20   M120 0 H160 V40 H120 V 0  M140 0 V40  M120 20 H160', 'silver" transform="translate(10,10)') +
		svgf.path('M0 0 H20 V40 H0 V0 M40 0 H60 V40 H40 V0  M0 20 H20 M40 20 H60  M24 30 H27  M29 30 H32  M34 30 H37', 'silver" transform="translate(10,60)') +
		svgf.path('M0 0 H20 V40 H0 V0 M40 0 H60 V40 H40 V0  M0 20 H60 M20 40 H60', 'silver" transform="translate(80,60)') +
		svgf.path('M0 0 H20 V40 H0 V0 M60 0 H80 V40 H60 V0  M0 20 H80 M20 40 H80 M40 20 V40', 'silver" transform="translate(150,60)') +
		svgf.path('M0 0 H60 V20 H0 M0 0 V60 H20 V0 M40 0 V20 M0 40 H20', 'silver" transform="translate(180,10)') +svgf.path('M0 0 V40 H80 V60 H20 M0 0 H20 V60 M0 20 H40 V60 M60 40 V60', 'silver" transform="translate(310,10) rotate(90)'),
		1, 1),
		ol([
			'含有长“一”字型（一行超过4格，破坏原则1）',
			'含有“田”字格（4面共点，破坏原则3）',
			'含有“C”型（破坏原则2）',
			'含有大“L”型（横竖均至少三格，破坏原则1）',
			'大“W”型（一臂高举，破坏原则2）',
			'长短并排站（共线不一样长，破坏原则2）'
		]),



	].join(br)

);