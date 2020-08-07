/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
$.each({
	"Number": [gM('Number') + sceg2('123'), '连续数' + sceg2('1~9'), '多个数3,4'

	].join(br),

	"Sequence": ['数列用{}表示'].concat(
		Arrf(sceg, ['{1,2,3⋯}', '{1,4,16⋯}', '{1⋯8}', '{2⋯}d=5', '{4n+1 | n=1,2,3⋯}', '{an | a1=5;an=an-1+an-2}'])
	).join(br),


	"Permutation": ['两种输入：直接：1~n相应的新号、轮换乘积()()n'].concat(
		Arrf(sceg, ['1423', '(12)(34)5'])
	).join(br),
	"Permutation Operation": ['乘积（从右向左运算）'
	].join(br),

	"Matrix": [
		'<button data-tool="line Merge">' + gM('lineMerge') + '</button>',
		gM('Square Matrix') + sceg('1 2 3 4'),
		gM('Enumerate') + sceg('[1 2;3 4]'),
		gM('Identity Matrix') + sceg('I3'),
		//	gM('Expression')+'：[f(i,j)]'+sub('m,n')+sceg('[i+j]5,4'),
		//	gM('Square Matrix')+'可简化下标[f(i,j)]'+sub('m')+sceg('[-i²+3j]2'),
		'（拟）' + gM('Identity Matrix') + 'Im,n' + sceg('I3') + sceg('I4,5'),
		gM('Zero Matrix') + 'Om,n' + sceg('O4') + sceg('O4,5'),
		'数量矩阵(k)In' + sceg('(-7/8)I4'),
		gM('Diagonal Matrix') + sceg('diag(,)') + sceg('diag(1,-1,1,-1)') + sceg('diag(I4,I2,[2]5,-I2)'),
		'副对角' + sceg('cdiag(,)') + sceg('cdiag(1,-1,1,-1)'),
		'同一数字矩阵[k]m,n 或 N(k,m,n)' + sceg('[2]3,5') + sceg('[20]3') + sceg('N(1,3)'),

		gM('Symmetric Matrix') + sceg('S(;)') + sceg('S(1 2 3;4 5;6)'),
		gM('Quadratic Form Matrix') + '（先写对角线元素）' + sceg('S2(1 2 3 -2 -4 -6)'),
		gM('Anti-Symmetric Matrix') + sceg('Skew(;;)') + sceg('Skew(1 2 3;4 5;6)'),
		'稀疏矩阵（三元组）' + sceg('Sparse(,,;,,)m,n') + sceg('Sparse(136;2,4,3/8)5,7'),
		'Vandermonde范德蒙矩阵（末尾1表示需计算指数）' + sceg('V(a,b,c,d)1'),
		gM('Transpose') + sceg("[1 2;3 4]'"),
		gM('Adjoint') + sceg("[1 2;3 4]*"),

	].join(br),

	"Matrix Operation": [
		detail(gM('Elementary Transformation'), [
			detail('基本命令（多个命令用' + sceg2(';') + '隔开）：', [
				'行交换' + sceg2('i1≈i2') + '或' + sceg2('i1~~i2') + ' 冒泡排序' + sceg2('i1~i5≈i2~i6'),
				'倍加' + sceg2('i1+=i2×-3') + '或' + sceg2('i1-=i2×-3'),
				'自乘' + sceg2('i1*=3') + '或' + sceg2('i1×=3') + '或' + sceg2('i1/=3') + '或' + sceg2('i1÷=3'),
				'多行倍加' + sceg2('i1~i5+=i8×3') + '或' + sceg2('i1,i5+=i8×3') + '或' + sceg2('i1,i3~i5+=i8×3'),
				'倍加多行' + sceg2('i8+=i1~i5×3') + '或' + sceg2('i8+=i1~i5') + '或' + sceg2('i8+=i2~i3×2,3'),
				'分别倍加' + sceg2('i1,i8,i9+=i2~i3×2,3') + '或' + sceg2('i1,i3~i5+=i8×1,3,4,5'),
				detail('行号是变量ik：', Arrf(sceg2, [
					'ik+=i(k-1)×3 k=3,5',
					'ik+=i(k-2)×3 k=3~4',
					'ik+=i(k-2)×1,2 k=3~4',
					'ik+=i(k-2),i(k-1)×1,2 k=3~4',
					'ik+=i1 k=2~4',
					'ik*=10 k=2~4',
					'ik≈i(k-1) k=2,4,6'
				]).join(br)),
				'倍数写成?表示该行首个非零项化为0',
				'问号?后加L或U （化下（上）三角模式，只在主对角线右（左）侧，才乘以倍数化零）',
				sceg2('j3-=i8') + ' 列化零（该列其余行，分别用该行的倍数化为0）',
			].join(br)),

			detail('高级命令：', [
				'各行单位化（第1个非零元素化成1）' + sceg2('i[SBb]/=') + '或' + sceg2('i[SBb]*='),
				'其中S仅对方阵部分；B仅对方阵之外的部分；b仅对方阵之外再偏移2行或2列的部分',
				'各行整数化（元素去分母，凑成整数）' + sceg2('i[SBb]*=') + '或' + sceg2('i[SBb]×='),
				'不考虑需交换行列情况下的一些变换：' + sceg2('i[EULSDI]/='),
				'其中E阶梯型Echelon；U上三角；L下三角；S最简形；D对角阵；I单位阵'
			].join(br)),
		].join(br)),
		detail(gM('Calculate Determinant'), [
			href('wiki.html?q=Formula/Matrix/Determinant','行列式公式'),
			sceg2('d') + ' 主对角线相乘',
			sceg2('d-') + ' 副对角线相乘',

			sceg2('=') + ' 计算最终结果',

			sceg2('0i1:i4') + ' 成比例',
			sceg2('0i1=0') + ' 都为0',
			sceg2('0i1=i4') + ' 相等',


			sceg2('a') + ' apart拆开',
			sceg2('L') + ' Laplace展开',
			sceg2('S') + ' 对角线法则Sarrus',
			sceg2('D') + ' 定义展开',
			sceg2('P') + ' 分块矩阵Part',
		].join(br))


	].join(br),

	"Proposition": Arrf(sceg, ['(p∨(q∧r))→(p∧q∧r)', '(P→Q)∧(R→Q)', '(p→q)↔r',
		'((p∧q)∨¬r)→p'
	]).join(br),
	"Proposition Operation": concat(ZLR('非 合取Conjunctive与 析取Disjunctive或 Implication蕴含 Equivalence等值 与非Sheffer记号 或非Peirce箭头 异或 非蕴含 永真蕴含 恒等'),
		Arrf(sceg2, ZLR('¬ ∧ ∨ → ↔ ↑ ↓ ⊕ ↛ ⇒ ⇔'))).join(br),



	"Series": "∑(i=1,,)",
	"Series Operation": "",

	"Function": "",
	"Function Operation": "",

	"Set": [gM('Enumerate') + '{,}或表达式：{|}(如果表达式中有多个|，集合分隔符|需要用空格与其他字符隔开，或者改用整除符号∣，以避免歧义)'].concat(
		Arrf(sceg, ['{1,2,3,4}', '{x∈ℕ|2≤x<8}', '{|x-4|-2 | x∈{0,3,7}}'])
	).join(br),

	"Set Operation": concat(ZLR('幂集合 商集合 空集 补（差）集 交 并 环和 环积 笛卡尔积（直积）'), Arrf(sceg2,
		ZLR('P() Q() ∅ - ∩ ∪ ⊕ ⊗ ×')
	)).join(br),

	"Relation": ['{前域} [{陪域}] 表达式f(x,y)、{集合}或[关系矩阵]'].concat(Arrf(sceg,
		['{1,2,3,4} {<1,2>,<2,4>,<3,2>}', '{1,2,3,4,5,6,7,8} x|y',
			'{∅,{a},{b},{a,b},{a,b,c},{a,b,c,d},{a,b,c,d,e,f}} x⊆y', '{a,b,c,d} I4', '{a,b,c,d,e} {<a,b>,<c,d>,<e,b>}',
			'P({a,b}) x⊆y', 'A/R={{1,2},{3,5},{4}}',
			'{1,2} {3,4} x|y∧y>x', '{<1,2>,<2,4>} {<2,3>} x1>x2∨y1+y2=3'
		])).join(br),

	"Relation Operation": concat(ZLR('逆 合成 幂 交 并 补'), Arrf(sceg2,
		ZLR('∼ ∘ ^ ∩ ∪ -')
	)).join(br),





	
	// Math JavaScript




	'Math Function (Native JavaScript)':[
		
		{'Constant 常数':[
			{'e (Euler number)':'Math.E'},
			{'ln 2':'Math.LN2'},
			{'ln 10':'Math.LN10'},
			{'log₂e':'Math.LOG2E'},
			{'lg 2 = log₁₀2':'Math.LOG10E'},
			{'π':'Math.PI'},
			{'√2/2':'Math.SQRT1_2'},
			{'√2':'Math.SQRT2'},
		]},
		{'Function 函数':[
			{'|x|':'Math.abs'},
			{'sgn x':'Math.sign'},
	
			{'√x':'Math.sqrt'},
			{'∛x':'Math.cbrt'},
			{'√(x^2+y^2+⋅⋅⋅)':'Math.hypot'},
	
			{'x^y':'Math.pow'},
			{'e^x':'Math.exp'},
			{'e^x-1':'Math.expm1'},
	
	
				
			{'ln x':'Math.log'},
			{'ln(x+1)':'Math.log1p'},
	
			{'log₂x':'Math.log2'},
			{'lg x = log₁₀x':'Math.log10'},
	
	
			
			{'sin x':'Math.sin'},
			{'cos x':'Math.cos'},
			{'tan x':'Math.tan'},
	
			
			{'arcsin x':'Math.asin'},
			{'arccos x':'Math.acos'},
			{'arctan x':'Math.atan'},
			{'arctan(y/x)':'Math.atan2'},
	
	
			{'sh x':'Math.sinh'},
			{'ch x':'Math.cosh'},
			{'th x':'Math.tanh'},
	
			{'sh⁻¹x':'Math.asinh'},
			{'ch⁻¹x':'Math.acosh'},
			{'th⁻¹':'Math.atanh'},
	
	
	
			{'⌊x⌋':'Math.floor'},
			{'⌈x⌉':'Math.ceil'},
			{'round':'Math.round'},
			{'float round':'Math.fround'},
			{'x-[x]':'Math.trunc'},
	
		
	
			{'max(x,y,⋅⋅⋅)':'Math.max'},
			{'min(x,y,⋅⋅⋅)':'Math.min'},
	
			{'Count Leading Zeroes(32-bit int)':'Math.clz32'},
			{'multiplication(32-bit int)':'Math.imul'},
	
			{'Random Decimal [0,1]':'Math.random'},
	
	
		]},

	],






	// markup 

	// LaTeX

	'LaTeX':[
		href(Hs+'katex.org/docs/supported.html','KaTeX API') + ' ' + href(Hs+'mathlive.io/reference.html','Mathlive'),
		github('mathjax/MathJax-demos-web'),
		href(H+'dralpha.altervista.org/zh/tech/tech.htm','LaTeX History中文'),
		
	].join(br),


	//MathML


/*
,mathmlAttrs={
	'msup':{'superscriptshift':'[length]'},
	'msub':{'subscriptshift':'[length]'},
	'msubsup':{'subscriptshift':'[length]','superscriptshift':'[length]'},
	'mmultiscripts':{'subscriptshift':'[length]','superscriptshift':'[length]'},

	'mover':{'accent':'true* false','align':'left center* right'},
	'munder':{'accentunder':'true* false','align':'left center* right'},
	'munderover':{'accent':'true* false','accentunder':'true* false','align':'left center* right'},

	'mfrac':{'linethickness':'thin medium* thick [length]','numalign':'left center* right','denomalign':'left center* right','bevelled':'true false*'},
	'mroot':{},

	'mfenced':{'open':'(* ) [str]','close':'( )* [str]','separators':',* [str]'},

	'mtable':{'align':'axis[,rownumber] baseline[,rownumber] top center bottom', 'rowalign':'axis* baseline top center bottom', 'columnalign':'center* left right', 'groupalign':'{left} [group-alignment-list-list]',
		'width':'auto* [length]', 'columnwidth':'auto* fit [length]',
		'rowspacing':'1ex* [length]', 'columnspacing':'0.8em* [length]', 'framespacing':'0.4em&0.5ex* [length]&[length]', 'minlabelspacing':'0.8em* [length]',
		'rowlines':'none* solid dashed', 'columnlines':'none* solid dashed', 'frame':'none* solid dashed',
		'side':'right* left leftoverlap rightoverlap', 'alignmentscope':'true* false',
		'equalrows':'false* true', 'equalcolumns':'false* true', 'displaystyle':'false* true'
	},

	'mtr':{'rowalign':'axis* baseline top center bottom', 'columnalign':'center* left right', 'groupalign':'{left} [group-alignment-list-list]'},
	'mlabeledtr':{'rowalign':'axis* baseline top center bottom', 'columnalign':'center* left right', 'groupalign':'{left} [group-alignment-list-list]'},
	'mtd':{'rowalign':'axis* baseline top center bottom', 'columnalign':'center* left right', 'groupalign':'{left} [group-alignment-list-list]', 'rowspan':'[n]', 'columnspan':'[n]'},

	'menclose':{'notation':'longdiv actuarial phasorangle radical box roundedbox circle left right top bottom updiagonalstrike downdiagonalstrike verticalstrike horizontalstrike northeastarrow madruwb'},
}
*/



},function(k,v){
	tooltip[k]=v;
});





