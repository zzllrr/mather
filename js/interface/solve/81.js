/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
solves[81]={sbj2s:['Proposition','Set','Relation','Graph'],sbj2:{
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
}};