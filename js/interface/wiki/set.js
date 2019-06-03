/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Set']=Kx(

detail('集合（一元运算）',Table([ZLR('名称 记法 定义 性质')],[
	['补集\n',khrA(['C(A)']),
		khrA([]),
		kul([])
	],
	['幂集\n',khrA(['ρ(A)','P(A)']),
		khrA([]),
		kul([])
	]

],'wiki').replace(/\n/g,br))+
detail('集合运算与集合基数(势)',Table([ZLR('名称 记法 定义 基数(势)')],[
	
	['幂集','ρ(A)','A的所有子集构成的集合','|ρ(A)|=2^{|A|}'],
	['交','A∩B','A∩B','|A∩B|=|A|+|B|-|A∪B|'],
	['并','A∪B','A∪B','|A∪B|=|A|+|B|-|A∩B|'],
	['差','A-B',Eq(['A-B','A∩'+kxo('B'),'A-A∩B']),'|A-B|=|A|-|A∩B|'],
	[kxA(['环和','对称差']),'A⊕B',
		Eq(['A⊕B','(A-B)∪(B-A)','(A∪B)∩'+kxo('A∩B'),'(A∪B)∩'+kxo('A')+'∪'+kxo('B'),'(A∪B)-(A∩B)']),
		Eq(['|A⊕B|','|A-B|+|B-A|','|A|+|B|-2|A∩B|','2|A∪B|-|A|-|B|','|A∪B|-|A∩B|'])],

	['环积','A⊗B',Eq(['A⊗B',kxo('A⊕B'),kxo('A-B')+'∩'+kxo('B-A'),'U-(A-B)-(B-A)',kxo('A∪B')+'∪(A∩B)']),
		Eq(['|A⊗B|','|U|-|A⊕B|','|U|-|A|-|B|+2|A∩B|','|U|+|A|+|B|-2|A∪B|','|U|+|A∩B|-|A∪B|'])],

],'wiki').replace(/\n/g,br))
	
);