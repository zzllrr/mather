/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */


var wikis=ZLR('Number Vector Matrix Analytic Limit Differential Integral').concat('Formal Power Series')
	.concat(ZLR('Function Algebra Logic Set Relation Geometry Graph'));//determinant recursive
/* 目录结构首字母大写，底层条目小写（若底层条目首字母大写，说明需要用父名和空格与其结合，组成查询键）
		
	注意：JS文件名，使用首字母大写，空格用下划线代替
		  JS里面的键，多个单词，使用全称（常有空格），且单词首字母大写；单个词，小写
*/

explores['wiki']={
	'Number':[
		'unit',
		'number',
		{'Integer':[
			'integer',
			'Type',
			'divide',
			'Fermat Number',
		]},
		{'Prime':[
			'prime',
			'Type',
			'Structure',
			'Prime Mersenne Number',
			
		]},
		'algebraic',
		'complex',
		{'Sequence':[
			'Rational',
			'Sum',
			'Combination',
			'Amicable Numbers',
			
		]},
	],
	'Vector':[
		'vector',
		'tensor',
	],
	'Matrix':[
		'Type',
		'Unary Operation',
		'Binary Operation',
		'Binary Relation',
		'Matrix Factorization',
		'determinant',
		
	],
	
	'Analytic':[
		'polynomial',
		'fraction',
		'radical',
		'Infinite Series',
		
	],
	

	'Limit':[
		'limit'
	],

	

	'Differential':[
		'differential',
	],

	'Integral':[
		'integral',
	],
	
	'Formal Power Series':[
		'Formal Power Series',
	],
	
	'Function':[
		'function',
	],
	
	'Algebra':[
		'algebra',
		'group',
		'ring',
		'lattice',
	],
	
	'Logic':[
		'logic',
	],
	
	'Set':[
		'set'
	],

	'Relation':[
		'Type',
		'equivalence',
		'Partial Order',
	],
	

	'Geometry':[
		'point',
		'line',
		'angle',
		'plane',
		'solid',
	],
	'Graph':[
		'Type',
		'Unary Operation',
		'Binary Operation',
		'Binary Relation',
		'path',
	]

};
