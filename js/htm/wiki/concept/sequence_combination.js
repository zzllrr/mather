/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Concept/Number/Sequence/Combination']=Kx(


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