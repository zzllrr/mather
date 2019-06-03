/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Tensor']=Kx(

detail('张量',Table([ZLR('名称 记法 定义 性质')],[
	['(真)标量____Scalar','','','空间反演下不改变符号'],
	['赝标量____PseudoScalar','','','空间反演下会改变符号'],
	['极向量____极矢量____Vector','','','空间反演下大小不变，方向改变'],
	['轴向量____赝向(矢)量____PseudoVector','','',kul([
		'空间反演下大小不变，方向不变',
		'例如：角速度、角加速度、角动量、力矩、磁感应强度',
		'极向量×极向量=轴向量____轴向量×轴向量=轴向量____极向量×轴向量=极向量____轴向量×极向量=极向量____把极向量看成-1，轴向量看成1',
		])],

	['张量____Tensor','','',kul([
		'0阶张量：标量Scalar',
		'1阶张量：矢量Vector',
		'2阶张量：Bivector',
		'3阶张量：Trivector',
		
		])],

],'wiki').replace(/____/g,br))+

detail('张量（一元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['____Hodge star operator','⋆a','k维映射到n-k维，结果称为Hodge dual（霍奇对偶）',kul([
		'a ∧ ⋆b = ⟨a,b⟩ω 其中ω是单位张量',
		'二维空间中'+piece([
			'⋆ 1 = dx∧dy',
			'⋆ dx = dy',
			'⋆ dy = -dx',
			'⋆ dx∧dy = 1',
			]),
		'三维空间中'+piece([
			'⋆ dx = dy∧dz',
			'⋆ dy = dz∧dx',
			'⋆ dz = dx∧dy',
			]),
		'四维空间中'+piece([
			'⋆ dt = dx∧dy∧dz',
			'⋆ dx = dt∧dy∧dz',
			'⋆ dy = dx∧dz∧dt',
			'⋆ dz = dt∧dx∧dy',
	
			'⋆ dx∧dy = dt∧dz',
			'⋆ dx∧dz = dy∧dt',
			'⋆ dx∧dt = dy∧dz 未确认',//https://en.wikipedia.org/wiki/Hodge_star_operator

			]),
		'⋆ u∧v = u×v',
		'⋆ u×v = u∧v',
		])],
],'wiki').replace(/____/g,br))+

detail('张量（多元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['内积____interior product','⟨a,b⟩','\\det ⟨ai,bj⟩ ',kul([
		'内积降维',

		])],
	
	['外积____(wedge|exterior|outer) product','a∧b','',kul([
		'外积升维',
		'a∧a = 0',
		'反对称性：a∧b = - b∧a',
		'结合率：(a∧b)∧c = a∧(b∧c)',
		'双线性(左右分配率)：(a+b)∧(c+d) = a∧c + a∧d + b∧c + b∧d',
		'二元对应带方向的平行四边形 \\\\ 三元对应带方向的平行六面体',
		'行列式形式：'+prod('i',1,'n-1','V_i',5,'')+' = '+det(zstrx('v_1^1 ⋯ v_1^n;⋮ ⋱ ⋮;v_(n-1)^1 ⋯ v_(n-1)^n;e_1 ⋯ e_n'),'')
		])],


],'wiki').replace(/____/g,br))
);