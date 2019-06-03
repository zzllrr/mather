/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Combination']=Kx(


detail('排列组合公式',Table([ZLR('名称 公式 证明')],[
	['选排列____choice permutation','A_n^m = n(n-1)⋯(n-m+1) = '+frac('n!','(n-m)!',''),''],
	['全排列（置换）____all permutation','A_n^n = n!',''],
	['组合____Combination____n choose m',kxA([Eq([['C_n^m','C_n^{n-m}'],frac('A_n^m','m!',''),frac('n!','(n-m)!m!',''),
		['',frac('n(n-1)⋯(n-m+1)','m(m-1)⋯1',''),frac('n(n-1)⋯(m+1)','(n-m)(n-m-1)⋯1','')],
		binom('n',1,'')+binom('n-1',2,'')+'⋯'+binom('n-m+1','m',''),binom('n','m','')+binom('n-1','m-1','')+'⋯'+binom('n-m+1',1,''),
		binom('n',1,'')+binom('n-1',2,'')+'⋯'+binom('m+1','n-m',''),binom('n','n-m','')+binom('n-1','n-m-1','')+'⋯'+binom('m+1',1,''),
		['C_n^m',frac('n-m+1','m','')+'C_n^{m-1}',frac('n','n-m','')+'C_{n-1}^{m}',frac('n','m','')+'C_{n-1}^{m-1}'],
		['C_n^m',frac('m+1','n-m','')+'C_n^{m+1}',frac('n-m+1','n','')+'C_{n+1}^{m}',frac('m','n','')+'C_{n+1}^{m+1}'],
		]),
		piece([
			'C_n^m=C_{n-1}^{m}+C_{n-1}^{m-1}',
			'C_n^{m+1}=C_{n-1}^{m+1}+C_{n-1}^{m}',
			'C_{n+1}^{m}=C_n^m+C_n^{m-1}',
			'C_{n+1}^{m+1}=C_n^{m+1}+C_n^m'
		])
		])],
	
	['二次组合____bi-Combination____n choose i,j\nby zzllrr',kxA([Eq([['C_n^{i,j}','C_n^iC_{n-i}^j'],frac('A_n^iA_{n-i}^j','i!j!',''),frac('n!','i!j!(n-i-j)!',''),
		['',frac('n(n-1)⋯(n-m+1)','m(m-1)⋯1',''),frac('n(n-1)⋯(m+1)','(n-m)(n-m-1)⋯1','')],
		binom('n',1,'')+binom('n-1',2,'')+'⋯'+binom('n-m+1','m',''),binom('n','m','')+binom('n-1','m-1','')+'⋯'+binom('n-m+1',1,''),
		binom('n',1,'')+binom('n-1',2,'')+'⋯'+binom('m+1','n-m',''),binom('n','n-m','')+binom('n-1','n-m-1','')+'⋯'+binom('m+1',1,''),
		['C_n^m',frac('n-m+1','m','')+'C_n^{m-1}',frac('n','n-m','')+'C_{n-1}^{m}',frac('n','m','')+'C_{n-1}^{m-1}'],
		['C_n^m',frac('m+1','n-m','')+'C_n^{m+1}',frac('n-m+1','n','')+'C_{n+1}^{m}',frac('m','n','')+'C_{n+1}^{m+1}'],
		]),
		piece([
			'C_n^m=C_{n-1}^{m}+C_{n-1}^{m-1}',
			'C_n^{m+1}=C_{n-1}^{m+1}+C_{n-1}^{m}',
			'C_{n+1}^{m}=C_n^m+C_n^{m-1}',
			'C_{n+1}^{m+1}=C_n^{m+1}+C_n^m'
		])
		])],
		
	['牛顿二项式定理____Newton binomial theorem',
		'(a+b)^n = '+sum('i',0,'n','C_n^ia^{n-i}b^i','',''),''],
	['','(1+x)^n = '+sum('i',0,'n','C_n^ix^i','',''),'牛二定理，令a=1，b=x'],
	['','(a^2-1)^2 | a^{2n+2} - (a^2-1)n-a^2','牛二定理，展开'+'(a^2-1 + 1)^{n+1}'],
	['全组合____all combination',sum('i',0,'n','C_n^i','','')+' = C_n^0+C_n^1+⋯+C_n^n =2^n \\\\ ~ 即n元集合A的全部子集数（幂集的势）','牛二定理，令a=b=1'],
	['',sum('i',0,'n','(-1)^nC_n^i','','')+' = C_n^0-C_n^1+⋯+(-1)^nC_n^n = 0','牛二定理，令a=1, b=-1'],

	['','C_n^0+C_n^2+⋯ = C_n^1+C_n^3+⋯ =2^{n-1}',
		'Pascal三角形的每一层，____如果项数是偶数，则奇偶项各占1半，____且数列互为逆序，数和显然相等____如果项数是奇数，则'],
	['',khrA([sum('i',0,'m','C_{n-i}^{m-i}','','')+' = C_n^m+C_{n-1}^{m-1}+⋯+C_{n-m}^0 = C_{n+1}^{m}',
		sum('i',0,'m','C_{n-i}^{n-m}','','')+' = C_n^{n-m}+C_{n-1}^{n-m}+⋯+C_{n-m}^{n-m}=C_{n+1}^{m}',
		sum('i',0,'m','C_{n+i}^{i}','','')+' = C_n^0+C_{n+1}^1+⋯+C_{n+m}^{m}=C_{n+m+1}^{m}',
		sum('i',0,'m','C_{n+i}^{n}','','')+' = C_n^n+C_{n+1}^{n}+⋯+C_{n+m}^{n}=C_{n+m+1}^{m}',
		]),
		'Pascal三角形，____将左肩上的数迭代分解为上一层左右肩之和，____最后只剩下右肩数沿右斜线向上的所有数和'],

	['',sum('i',0,'n','iC_n^i','','')+' = C_n^1+2C_n^2+⋯+nC_n^n = n2^{n-1}',''],

	['',sum('i',1,'n','i⋅i!','','')+' = 1⋅1!+2⋅2!+3⋅3!+⋯+n⋅n! = (n+1)!-1','利用k⋅k!=(k+1)!-k! \\\\ 即(2!-1!)+(3!-2!)+(4!-3!)+⋯+((n+1)!-n!) '],

	['重复组合____Combination with repetition____n multichoose m',
			Eq(['H_n^m=H_{m+1}^{n-1}',
			'C_{n+m-1}^{m}=C_{n+m-1}^{n-1}',
			frac('(n+m-1)!','m!(n-1)!','')]),'第1个等式，对换丢番图方程“□”,“+”，得到'],
	
],'wiki').replace(/____/g,br))+

detail('排列组合类型',Table([ZLR('名称 记法 定义 性质')],[
	['排列____Permutation____$m$-permutations of $n$',khrA(['A_n^m','P_n^m','P(n,m)']),	khrA([
		'从n个不同元素中一次性选m个元素，（有序排成一行）的种数',
		'从n个不同元素中依次选m个元素（不放回），（有序排成一行）的种数',
		'n元集合A的m元有序子集数']),kul([
		'A_n^m = n(n-1)⋯(n-m+1) = '+frac('n!','(n-m)!','')+' 选排列',
		'A_n^n = n! 全排列（置换）',

		'反序（逆序）数的奇偶，定义排列的奇偶','对换改变奇偶性','全排列有n!种','奇偶排列种数各占一半'
	])],
	['组合____Combination____$n$ choose $m$',khrA(['C_n^m',binom('n','m'),'C(n,m)']), khrA([
		'从n个不同元素中一次性选m个元素，（无序排）的种数',
		'从n个不同元素中依次选m个元素（不放回），（无序排）的种数',
		'n元集合A的m元子集数']),kul([
		'C_n^m=C_n^{n-m}='+frac('A_n^m','m!','')+' = '+frac('n!','(n-m)!m!',''),
		sum('i',0,'n','C_n^i','','')+' = C_n^0+C_n^1+⋯+C_n^n =2^n','即n元集合A的全部子集数（幂集的势）'
	])],
			
	['二次组合by zzllrr____bi-Combination____$n$ choose $i,j$',khrA(['C_n^{i,j}',binom('n','i,j'),'C(n,i,j)']), khrA([
		'从n个不同元素中选i个元素，然后从剩下的n-i个不同元素中选j个元素的种数']),kul([
		'C_n^{i,j}=C_n^{j,i}='+frac('A_n^iA_{n-i}^j','i!j!','')+' = '+frac('n!','i!j!(n-i-j)!',''),
		''
	])],
			
	['重复排列____Permutation with repetition',khrA([kxo('A')+'_n^m']), khrA([
		'从n个不同元素中依次选m个元素（放回），（有序排成一行）的种数',
		'n元集合A的m重笛卡尔积元素个数']),kul([
		kxo('A')+'_n^m =n^m'
	])],
	['重复组合____Combination with repetition____n multichoose m',khrA([kxo('C')+'_n^m','H_n^m','\\binom n m']),khrA([
		'从n+m-1个不同元素中一次性选m个元素，（无序排）的种数',
		'丢番图方程的解数：□+□+⋯+□=m \\\\ 其中m个“□”表示全部重数，n-1个“+”\\\\  '+kxf('wikipedia')+'中用的符号是★和|'+kxf('(stars and bars)'),
		'从n个不同元素中依次选m个元素（放回），（无序排）的种数',
		'n+m-1元集合A的m元子集数']),kul([
		'H_n^m=H_{m+1}^{n-1}\\\\ 证明：对换丢番图方程“□”,“+”，得到\\\\ '+
		'C_{n+m-1}^{m}=C_{n+m-1}^{n-1} = '+frac('(n+m-1)!','m!(n-1)!','')

	])],
		
	['多重集全排列____Permutation of multisets',khrA([]), khrA([
		'从n个（有重复，去重后有m个）元素中一次性选n个元素，\\\\ 有序排成一行）的种数',
		'从n个（有重复，去重后有m个）元素中依次选n个元素（不放回），\\\\ （有序排成一行）的种数',
		'n元多重集合A的全排列数']),kul([
		frac('n!','k_1!k_2!⋯k_m!','')+'\\\\ 其中k_i是各不同元素的重数\\\\ k_1+k_2+⋯+k_m=m'
	])],
	['环排列____圆排列____循环排列____circular Permutation',khrA(['R_n^m']), khrA([
		'从n个不同元素中一次性选m个元素，（有序排成一圈）的种数',
		'从n个不同元素中依次选m个元素（不放回），（有序排成一圈）的种数',
		'n元集合A的m元有序（相对序）子集数']),kul([
		'R_n^m='+frac(1,'m','')+'A_n^m=C_n^m(m-1)! 选排列',
		'R_n^n = (n-1)! 全排列（圆置换）',
	])],
	['划分____Partition',khrA(['A_n^m','P_n^m','P(n,m)']), khrA([
		'从n个不同元素中一次性选m个元素，（有序排成一行）的种数',
		'从n个不同元素中依次选m个元素（不放回），（有序排成一行）的种数',
		'n元集合A的m元有序子集数']),kul([
		'A_n^m = n(n-1)⋯(n-m+1) = '+frac('n!','(n-m)!','')+' 选排列',
		'A_n^n = n! 全排列（置换）',
	])],
],'wiki').replace(/____/g,br))

);