/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 
 
文件夹（名称小写）：
文件名（英文名称，标点符号统一转成下划线）
	一般是小写
	wiki\ show\ topic\ 中的文件名，大写




 实体对象obj: （底层开发用）数学实体对象（数据结构、一元运算（属性、方法、变换）、多元运算）
 	每个对象对应一个js文件
 
 界面层interface: （界面设计用）
 	每个功能模块对应一个js文件
 
 
 
 逻辑层（按功能模块场景细分）：
 
 
解题solve: （学生用、工程用、研究用）标准解题工具库
 	【标准、工具】每个底级学科对应一个js文件（主键: 学科代码，子键: 数学对象，孙子键: 求解目标）

作图graphic: （学生用、教师用、工程用、研究用）作图相关
 	【标准、工具】每种图对应一个js文件
 	
 		数学几何图
 		数学模型关系图
 		
 		数学思维心智图（归纳、演绎、类比、联想）
 		
 		


 		工程工具图
 			
 			
 			
 			
 		数据可视化

演示show: 
 	【标准、工具】每种媒体功能对应一个js文件
 	
 		黑板板书制作 blackboard
  		PPT幻灯报告演示
  		教学互动（课堂测验、抢答）
  		语音播放
  		VCR视频片段
  		AR
  		VR



	百科wiki: （研究用、教师用、科普用）数学知识概念库（数学对象介绍，定义、性质、定理）
	  	【标准、内容】每个对象对应一个js文件

	课程course: （学生用、教师用）数学课程（教学大纲及教科书章节内容、教案课件库）
	  	【非标准、内容】每个底级学科对应一个js文件
	  	（主键: 学科代码）
	  		可用于演示show

	题库drill:  （学生用、教师用）数学非标准解法习题库（每道题型需专门技巧，包含竞赛题）
	 	【非标准、内容】每个底级学科对应一个js文件
	 	（主键: 求解目标）
			可用于解题solve

	课题topic: （研究用、科普用、娱乐用）某个数学主题（专题探索、数学游戏）
	 	【非标准、内容】每个主题对应一个js文件


	陷阱pitfall:（研究用、科普用、娱乐用）已知的不可解、悖论等
		【标准、内容】每个主题对应一个js文件

	未解unsolved:（研究用、科普用）
		【标准、内容】每个主题对应一个js文件


	参考refer: （研究用、教师用、科普用）链接库
	 	【标准、内容】

	  			activity.js
	  			数学节、学术活动、竞赛活动
	  			
	  			org.js
		 		数学学术组织机构协会

	  			edu.js
		 		数学院系

				fan.js
				数学家、数学迷个人网页、数学科普平台

		 		pub.js
		 		以数学为主的文献（工具书、教科书、纸质书刊或电子书，出版物）ISBN书号
		 		
		 		mooc.js
		 		有数学内容的网络公开课平台Coursera、Udacity、edX、khan academy
		 		
		 		ppt.js
		 		课件库、素材库

				exam.js
				作业题库、试题库

				hardware.js
		 		数学硬件工具和线下游戏（物理）
		 		
		 		software.js
		 		数学软件工具和电子游戏（虚拟）

				ref.js
		 		有数学内容的其它链接库



*/

$.each(lang,function(i,v){//扁平化处理i18n内部引用 @数字 @[a-z] @{键}	  ➡️ 值
	$.each(v,function(ii,vv){
		if(/@/.test(vv)){
			var f=function(I,V){
				var y=I.replace(/@([a-z]|\d+)/ig,function(x){return V[x.substr(1)]})
				.replace(/@\{[^\}]+\}/g,function(x){return V[x.substr(2).split('}')[0]]});
				return /@/.test(y)?f(y,V):y
			};
			v[ii]=f(vv,v);
				consolelog(v[ii]);
		}
	});
});
lang['zh_tw']=JSON.parse(zh2big(JSON.stringify(lang['zh_cn'])));
if(!i18n){i18n=lang[H_o().lang||'zh_cn']}

var oH,navhead={},navheadThen={},


subject0='11 14 17 21 24 27 31 34 37 41 44 47 51 54 57 61 64 67 71 74 77 81 84 87 99',
subjects={
	14:zlrA('14',seqA(10,6,'',10).concat(99)),
	17:zlrA('17',seqA(10,8,'',10).concat(99)),
	21:zlrA('21',seqA(10,15,'',5).concat(99)),
	27:zlrA('27',seqA(10,10,'',5).concat(99)),
	31:zlrA('31',seqA(10,11,'',5).concat(99)),
	34:zlrA('34',seqA(10,3,'',10).concat(99)),
	41:zlrA('41',seqA(10,7,'',10).concat(99)),
	44:zlrA('44',seqA(10,3,'',10).concat(99)),
	47:zlrA('47',seqA(10,4,'',10).concat(99)),
	51:zlrA('51',seqA(10,3,'',10).concat(99)),
	57:zlrA('57',seqA(10,10,'',5).concat(99)),
	61:zlrA('61',seqA(10,8,'',10).concat(99)),
	64:zlrA('64',seqA(10,8,'',10).concat(99)),
	67:zlrA('67',seqA(10,11,'',5).concat(99)),
	71:zlrA('71',seqA(10,4,'',10).concat(99)),
	74:zlrA('74',seqA(10,15,'',5).concat(99))
},

concept0='Number Sequence Polynomial Vector Tensor Matrix Permutation Relation Function Proposition Logic Algebra Set Geometry Graph',
concepts={
	'Number':ZLR('Positive Natural Prime Rational Irrational Radical Transcendental Real Imaginary Complex'),
	'Sequence':ZLR('Arithmetic Geometric Harmonic'),
	'Algebra':ZLR('Group Ring Field Lattice'),
	
	'Relation':['Equivalence','Partial Order','Cover','Chain'],
	
	'Geometry':ZLR('Shape Surface Solid')
},

question0='Equation Inequation Limit',
questions={
	
},


editor={}, solve={}, graphic={}, show={}, wiki={},course={},drill={},topic={},pitfall={},unsolved={},thought={},refer={},
editors={}, solves={}, graphics={}, shows={}, wikis={},courses=ZLR(subject0), drills=ZLR(subject0),topics={},pitfalls={},unsolveds={},thoughts={},refers={},
editorThen={}, solveThen={}, graphicThen={}, showThen={}, wikiThen={},courseThen={},drillThen={},topicThen={},pitfallThen={},unsolvedThen={},thoughtThen={},referThen={},
/*
	


单数名k，存储执行函数( 供Go按钮调用,例如solve ) 或字符串结果(例如navhead)
复数名ks，存储目录结构，默认第一个键值index存储一级目录索引
单数名kThen, 界面工具加载后的执行函数

键有歧义时，用路径URI


tooltip[tool].k，存储提示工具栏	键使用路径URI

*/


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


tooltip={

	"Number":[gM('Number')+sceg2('123'),'连续数'+sceg2('1~9'),'多个数3,4'

		].join(br),
			
	"Sequence":['数列用{}表示'].concat(
		Arrf(sceg,['{1,2,3⋯}','{1,4,16⋯}','{1⋯8}','{2⋯}d=5','{4n+1 | n=1,2,3⋯}','{an | a1=5;an=an-1+an-2}'])
		).join(br),

		
	"Permutation":['两种输入：直接：1~n相应的新号、轮换乘积()()n'].concat(
		Arrf(sceg,['1423','(12)(34)5'])
		).join(br),
	"Permutation Operation":['乘积（从右向左运算）'
		].join(br),
		
	"Matrix":[
		'<button data-tool="line Merge">'+gM('lineMerge')+'</button>',
		gM('Square Matrix')+sceg('1 2 3 4'),
		gM('Enumerate')+sceg('[1 2;3 4]'),
		gM('Identity Matrix')+sceg('I3'),
	//	gM('Expression')+'：[f(i,j)]'+sub('m,n')+sceg('[i+j]5,4'),
	//	gM('Square Matrix')+'可简化下标[f(i,j)]'+sub('m')+sceg('[-i²+3j]2'),
		'（拟）'+gM('Identity Matrix')+'Im,n'+sceg('I3')+sceg('I4,5'),
		gM('Zero Matrix')+'Om,n'+sceg('O4')+sceg('O4,5'),
		'数量矩阵(k)In'+sceg('(-7/8)I4'),
		gM('Diagonal Matrix')+sceg('diag(,)')+sceg('diag(1,-1,1,-1)')+sceg('diag(I4,I2,[2]5,-I2)'),
		'副对角'+sceg('cdiag(,)')+sceg('cdiag(1,-1,1,-1)'),
		'同一数字矩阵[k]m,n 或 N(k,m,n)'+sceg('[2]3,5')+sceg('[20]3')+sceg('N(1,3)'),

		gM('Symmetric Matrix')+sceg('S(;)')+sceg('S(1 2 3;4 5;6)'),
		gM('Quadratic Form Matrix')+'（先写对角线元素）'+sceg('S2(1 2 3 -2 -4 -6)'),
		gM('Anti-Symmetric Matrix')+sceg('Skew(;;)')+sceg('Skew(1 2 3;4 5;6)'),
		'稀疏矩阵（三元组）'+sceg('Sparse(,,;,,)m,n')+sceg('Sparse(136;2,4,3/8)5,7'),
		'Vandermonde范德蒙矩阵（末尾1表示需计算指数）'+sceg('V(a,b,c,d)1'),
		gM('Transpose')+sceg("[1 2;3 4]'"),
		gM('Adjoint')+sceg("[1 2;3 4]*"),
		
		].join(br),

	"Matrix Operation":[
		detail(gM('Elementary Transformation'),[
			detail('基本命令（多个命令用'+sceg2(';')+'隔开）：',[
			'行交换'+sceg2('i1≈i2')+'或'+sceg2('i1~~i2')+' 冒泡排序'+sceg2('i1~i5≈i2~i6'),
			'倍加'+sceg2('i1+=i2×-3')+'或'+sceg2('i1-=i2×-3'),
			'自乘'+sceg2('i1*=3')+'或'+sceg2('i1×=3')+'或'+sceg2('i1/=3')+'或'+sceg2('i1÷=3'),
			'多行倍加'+sceg2('i1~i5+=i8×3')+'或'+sceg2('i1,i5+=i8×3')+'或'+sceg2('i1,i3~i5+=i8×3'),
			'倍加多行'+sceg2('i8+=i1~i5×3')+'或'+sceg2('i8+=i1~i5')+'或'+sceg2('i8+=i2~i3×2,3'),
			'分别倍加'+sceg2('i1,i8,i9+=i2~i3×2,3')+'或'+sceg2('i1,i3~i5+=i8×1,3,4,5'),
			detail('行号是变量ik：',Arrf(sceg2,[
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
			sceg2('j3-=i8')+' 列化零（该列其余行，分别用该行的倍数化为0）',
			].join(br)),
			
			detail('高级命令：',[
			'各行单位化（第1个非零元素化成1）'+sceg2('i[SBb]/=')+'或'+sceg2('i[SBb]*='),
			'其中S仅对方阵部分；B仅对方阵之外的部分；b仅对方阵之外再偏移2行或2列的部分',
			'各行整数化（元素去分母，凑成整数）'+sceg2('i[SBb]*=')+'或'+sceg2('i[SBb]×='),
			'不考虑需交换行列情况下的一些变换：'+sceg2('i[EULSDI]/='),
			'其中E阶梯型Echelon；U上三角；L下三角；S最简形；D对角阵；I单位阵'
				].join(br)),
			].join(br)),
		detail(gM('Calculate Determinant'),[
			sceg2('d')+' 主对角线相乘',
			sceg2('d-')+' 副对角线相乘',
			
			sceg2('=')+' 计算最终结果',
			
			sceg2('0i1:i4')+' 成比例',
			sceg2('0i1=0')+' 都为0',
			sceg2('0i1=i4')+' 相等',
			
			
			sceg2('a')+' apart拆开',
			sceg2('L')+' Laplace展开',
			sceg2('S')+' 对角线法则Sarrus',
			sceg2('D')+' 定义展开',
			sceg2('P')+' 分块矩阵Part',
		].join(br))
		

		].join(br),

	"Proposition":Arrf(sceg,['(p∨(q∧r))→(p∧q∧r)','(P→Q)∧(R→Q)','(p→q)↔r',
		'((p∧q)∨¬r)→p'
		]).join(br),
	"Proposition Operation":concat(ZLR('非 合取Conjunctive与 析取Disjunctive或 Implication蕴含 Equivalence等值 与非Sheffer记号 或非Peirce箭头 异或 非蕴含 永真蕴含 恒等'),
		Arrf(sceg2,ZLR('¬ ∧ ∨ → ↔ ↑ ↓ ⊕ ↛ ⇒ ⇔'))).join(br),
		


	"Series":"∑(i=1,,)",
	"Series Operation":"",

	"Function":"",
	"Function Operation":"",
		
	"Set":[gM('Enumerate')+'{,}或表达式：{|}(如果表达式中有多个|，集合分隔符|需要用空格与其他字符隔开，或者改用整除符号∣，以避免歧义)'].concat(
		Arrf(sceg,['{1,2,3,4}','{x∈ℕ|2≤x<8}','{|x-4|-2 | x∈{0,3,7}}'])
		).join(br),
	"Set Operation":	concat(ZLR('幂集合 商集合 空集 补（差）集 交 并 环和 环积 笛卡尔积（直积）'),Arrf(sceg2,
			ZLR('P() Q() ∅ - ∩ ∪ ⊕ ⊗ ×')
		)).join(br),

	"Relation":['{前域} [{陪域}] 表达式f(x,y)、{集合}或[关系矩阵]'].concat(Arrf(sceg,
		['{1,2,3,4} {<1,2>,<2,4>,<3,2>}','{1,2,3,4,5,6,7,8} x|y',
		'{∅,{a},{b},{a,b},{a,b,c},{a,b,c,d},{a,b,c,d,e,f}} x⊆y','{a,b,c,d} I₄','{a,b,c,d,e} {<a,b>,<c,d>,<e,f>}',
		'P({a,b}) x⊆y','A/R={{1,2},{3,5},{4}}',
		'{1,2} {3,4} x|y∧y>x','{<1,2>,<2,4>} {<2,3>} x₁>x₂∨y₁+y₂=3'
		])).join(br),

	"Relation Operation":concat(ZLR('逆 合成 幂 交 并 补'),Arrf(sceg2,
			ZLR('∼ ∘ ^ ∩ ∪ -')
		)).join(br),






	'LaTeX':[
		href(Hs+'katex.org/docs/supported.html','KaTeX API'),
		
	].join(br),




	'SVG':[
		href(Hs+'developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial','SVG API'),
		
		detail('SVG',[
			sceg2('viewBox="0 0 100 100"',8),
		
		
		].join(br)),
		
		
		detail(gM('Shape'),[
			gM('Rectangle')+scegc('rect x=10 y=10 width=30 height=30 stroke=green fill=none',4),
			gM('Round Corner')+scegc('rect x=50 y=10 rx=10 ry=10 width=30 height=30 fill=green',4),
			gM('Circle')+scegc('circle cx=60 cy=60 r=50 stroke=green fill=none',6),
			gM('Ellipse')+scegc('ellipse cx=110 cy=60 rx=100 ry=50 stroke=green fill=none',7),
			gM('Line')+scegc('line x1=0 y1=80 x2=100 y2=20 stroke=red',4),
			gM('Polyline')+scegc('polyline points="100,100 150,25 150,75 200,0" fill=none stroke=black',8),
			gM('Polygon')+scegc('polygon points="10 100, 150 25 ,250 100" stroke=red fill=none',7),
			
		].join(br)),
		
		detail(gM('Simple Path'),[
			scegc('path d="M10 20 L20 30" stroke=red fill=none',4),
			gM('Closed')+' Z(z)'+sceg2('Z'),
			gM('Move')+' M x y | m dx dy'+sceg2('M10 20')+sceg2('m10 20'),
			gM('Line')+' L x y | l dx dy'+sceg2('L20 30')+sceg2('l20 30'),
			gM('Horizontal Line')+' H x | h dx'+sceg2('H30')+sceg2('h30'),
			gM('Vertical Line')+' V y | v dy'+sceg2('V50')+sceg2('v50'),

			detail(gM('Method'),[
				href(Hs+'developer.mozilla.org/zh-CN/docs/Web/API/SVGPathElement','JavaScript API'),
				'getTotalLength()',
				'getPointAtLength(float)',
			].join(br))
		].join(br)),
			
		detail(gM('Bezier'),[
			gM('Cubic')+'C x1 y1, x2 y2, x y | c dx1 dy1, dx2 dy2, dx dy',
			scegc('path d="M10 10 C 20 20, 40 20, 50 10" fill=none stroke=red',4),
				
			gM('Symmetric Cubic')+'S x2 y2, x y | s dx2 dy2, dx dy',
			'其中省略的第1个控制点，是前一个C或S命令中第2个控制点，关于终点的对称点',
			scegc('path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke=black fill=transparent',4),
			
			gM('Quadratic')+'Q x1 y1, x y | q dx1 dy1, dx dy',
			scegc('path d="M10 80 Q 95 10 180 80" fill=none stroke=red',4),
				
			gM('Symmetric Quadratic')+'T x y | t dx dy',
			'其中省略的第1个控制点，是前一个Q或T命令中的控制点，关于终点的对称点',
			scegc('path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke=black fill=transparent',4),
			
			
		].join(br)),

		detail(gM('Arc'),[
			'A rx ry x-axis-rotation large-arc-flag[0,1] sweep-flag[↻1|↺0] x y',
			'a rx ry x-axis-rotation large-arc-flag[0,1] sweep-flag[↻1|↺0] dx dy',
			scegc('path d="M80 50A 45 45, 0, 0, 0, 125 95V50 Z" fill=green',4),
			scegc('path d="M80 50A 45 45, 0, 1, 0, 125 95V50 Z" fill=red',4),
			scegc('path d="M80 50A 45 45, 0, 0, 1, 125 95V50 Z" fill=purple',4),
			scegc('path d="M80 50A 45 45, 0, 1, 1, 125 95V50 Z" fill=blue',4),

		].join(br)),

		detail(gM('Text'),[
			sceg('<text>&&&&</text>',5),sceg('<text x=10 y=20 font-weight=bold>'+gM('Text')+'</text>',5),
			Arrf(sceg2,ZLR('x=10 y=20 dx=10 dy=20 rotate=45 textLength=')).join(''),
			[sceg2('text-anchor=start'),sceg2('text-anchor=middle',-6),sceg2('text-anchor=end',-3)].join('|'),
			[sceg2('lengthAdjust=spacing'),sceg2('lengthAdjust=spacingAndGlyphs',-16)].join('|'),
			detail(gM('Text Attribute'),Arrf(sceg2,
				zlrA2(ZLR('font-family font-style font-weight font-variant font-stretch font-size font-size-adjust kerning letter-spacing word-spacing text-decoration'),'=')).join(br)
			),
			
			
			detail(gM('Child'),[
				sceg('<tspan font-weight=bold fill=red>Hello World!</tspan>',6),
				sceg('<textPath xlink:href=#path0>1234</textPath>',9),
			].join(br)),
			



		].join(br)),
		
		
		detail(gM('Structure'),[
			gM('group')+sceg('<g fill=white stroke=green>&&&&</g>&&',2),

		].join(br)),
			
			
		detail(gM('Style'),[
			detail(gM('Stroke'),[
				sceg2('stroke=red'),
				sceg2('stroke-opacity=0.8'),
				[sceg2('stroke-linecap=butt'), sceg2('stroke-linecap=square',-6), sceg2('stroke-linecap=round',-5)].join('|'),
				[sceg2('stroke-linejoin=miter'),sceg2('stroke-linejoin=bevel',-5),sceg2('stroke-linejoin=round',-5)].join('|'),
				sceg2('stroke-dasharray="5,10,5"')+sceg2('stroke-dashoffset=3'),
				sceg2('stroke-miterlimit='),
			].join(br)),
			
			detail(gM('Fill'),[
				sceg2('fill=green')+sceg2('fill="url(#Pattern0)"'),
				sceg2('fill-opacity=0.8'),
				sceg2('fill-rule=')
			].join(br)),
			
			
			detail(gM('Definition'),sceg('<defs>&&&&</defs>&&',6)),
			detail('CSS',sceg('<style type="text/css">&&&&</style>&&',6)),
				

			detail(gM('Gradient'),[
				scegc('stop offset="50%" stop-color=green stop-opacity=0.5',4),
				sceg(concat('<stop offset="',[0,50,100],'%" stop-color=',ZLR('red yellow blue'),' stop-opacity=0.5></stop>').join('&&'),6),
				detail('Linear',[
					sceg('<linearGradient>&&&&</linearGradient>',16)+' > stop',
					'x1 x2 y1 y2 '+sceg('<linearGradient x1=0 x2=0 y1=0 y2=1>&&&&</linearGradient>',16)
			
					].join(br)
				),
				
				detail('Radial',[
					sceg('<radialGradient>&&&&</radialGradient>',16)+' > stop',
				
					'cx cy r '+sceg('<radialGradient cx=0.5 cy=0.5 r=0.25>&&&&</radialGradient>',16),
					'cx cy r fx fy '+sceg('<radialGradient cx=0.5 cy=0.5 r=0.25 fx=0.25 fy=0.25>&&&&</radialGradient>',16)

						
					].join(br)
				),
				
				
				
				[sceg2('spreadMethod=pad'),sceg2('spreadMethod=reflect',-7),sceg2('spreadMethod=repeat',-6)].join('|'),
				
				[sceg2('gradientUnits=objectBoundingBox'),sceg2('gradientUnits=userSpaceOnUse',-14)].join('|'),
					
				sceg2('gradientTransform='),
				
			].join(br)),

			detail(gM('Pattern.v'),[
				sceg('<pattern id=Pattern0 width=.25 height=.25>&&&&</pattern>',8),
				sceg('<pattern id=Pattern1 x=10 y=10 width=50 height=50 patternUnits=userSpaceOnUse>&&&&</pattern>',8),
				[sceg2('patternUnits=objectBoundingBox'),sceg2('patternUnits=userSpaceOnUse',-14)].join('|'),
				[sceg2('patternContentUnits=objectBoundingBox'),sceg2('patternContentUnits=userSpaceOnUse',-14)].join('|'),
				
			].join(br)),

		].join(br)),
			


		detail(gM('Transform'),[
			sceg('transform=')+'translate|rotate|scale|skew',	
		
			'translate(x, y)',
			sceg2('translate(100,100)'),
			
			'rotate(deg)',
			sceg2('rotate(45)'),

			'skewX(x) skewY(y)',
			sceg2('skewX(45)')+sceg2('skewY(45)'),
			
			'scale(x,y)',
			sceg2('scale(1.2,0.5)'),
			
			
			detail(gM('Matrix'),[
				'matrix(scaleX, skewX, skewY, scaleY, dx, dy)',
				'setTransform(scaleX, skewX, skewY,scaleY, dx, dy)',
				gM('Transformation Matrix')+zx("$zmtrx([['scaleX','skewY','dx'],['skewX','scaleY','dy',[0,0,1]]])$"),
				sceg2('matrix(1, 0, 0, 1, 0, 0)'),
			].join(br)),
		].join(br)),
		
		
		detail(gM('Clip'),[
			sceg('<clipPath id=cp1>&&&&</clipPath>',9),
			sceg('clip-path="url(#cp1)"'),

		].join(br)),

		detail(gM('Mask'),[
			sceg('<mask id=ms1>&&&&</mask>',9),
			sceg('mask="url(#ms1)"'),
		
		
			
		].join(br)),
			
		detail(gM('Filter.v'),[
			sceg('<filter x=0 y=0 width=100 height=100 filterRes=>&&&&</filter>',7),

			[sceg2('filterUnits=objectBoundingBox'),sceg2('filterUnits=userSpaceOnUse',-14)].join('|'),
			[sceg2('primitiveUnits=objectBoundingBox'),sceg2('primitiveUnits=userSpaceOnUse',-14)].join('|'),
			
		].join(br)),
			

		detail(gM('Image'),[
			scegc('image xlink:href="img/ZIL.png" x=0 y=0 height=50px width=50px',5),	
		
			
		].join(br)),

		
		detail('XHTML',[
			sceg('<foreignObject x=20 y=20 width=200 height=200>&&&&</foreignObject>',14),	
		
			
		].join(br)),


		detail(gM('Animation'),[
			scegc('animate attributeType=XML attributeName=x from=-100 to=120 dur=10s repeatCount=indefinite',7),
			
			scegc('animateTransform attributeName=transform attributeType=XML type=rotate from="0 60 70" to="360 60 70" dur=10s repeatCount=indefinite',7),
				
			sceg('<animateMotion dur=6s repeatCount=indefinite rotate=auto keyPoints=0;0.5;1 keyTimes=0;0.15;1 calcMode=linear>&&&&</animateMotion>',14)+' > mpath',



			[sceg2('calcMode=linear',-6),sceg2('calcMode=discrete'),sceg2('calcMode=paced',-5),sceg2('calcMode=spline',-6)].join('|'),
			
			sceg2('path='),

       		scegc('mpath xlink:href=#path1',5),
    
       		scegc('set to=',3),
       			
			scegc('discard begin=',7),
		].join(br)),
	].join(''),


	'Canvas':[
	
		href(Hs+'developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial',gM('Native')+' Canvas API'),
		
	detail('2D',[
		
		detail(gM('Initialize'),[
			/*
			scegj(`
$('#input0Preview').html('<canvas id=ican width=300 height=300></canvas>');
var ican=$('#ican'),c=ican[0].getContext('2d')`,0),

*/

			scegj('$(C.ctx.canvas).width(300).height(300)',0)
		].join(br)),
		
		detail(gM('Rectangle'),[
			'***Rect(x,y,width,height)',
			gM('Stroke')+scegj('c.strokeRect(10, 20, 200, 150)',13),
			
			gM('Fill')+scegj('c.fillRect(10, 20, 200, 150)',11),
			
			gM('Clear')+scegj('c.clearRect(10, 20, 200, 150)',12),

		].join(br)),
		

		detail(gM('Style'),[
			'***Style=color|pattern|gradient',
			gM('Stroke')+scegj("c.strokeStyle='rgba(0, 0, 200, 0.5)'",14),
					
			gM('Fill')+scegj("c.fillStyle='rgba(0, 0, 200, 0.5)'",12),

			detail(gM('Line Style'),[
				gM('Width')+scegj('c.lineWidth=4'),
				scegj("c.lineCap='butt'")+'|round|square',
				scegj("c.lineJoin='miter'")+'|round|bevel',
				scegj('c.miterLimit=10.0'),
				
				detail(gM('Dash'),[
					scegj('c.setLineDash([1,2])'),
					scegj('c.lineDashOffset=3'),
					scegj('var dashA=c.getLineDash()'),
					
				].join(br)),
				
			].join(br)),
			
			gM('Opacity')+scegj('c.globalAlpha=0.5'),

			detail(gM('Gradient'),[
				gM('Linear')+'(x1,y1,x2,y2)',scegj('var lg=c.createLinearGradient(0,0,150,150)',30),
				
				gM('Radial')+'(x1,y1,r1,x2,y2,r2)',scegj('var rg=c.createRadialGradient(75,75,0,75,75,100)',30),
				
				detail('addColorStop(0~1,color)',[
					scegj("lg.addColorStop(0,'green')"),
					scegj("lg.addColorStop(0.5,'white')"),
					scegj("lg.addColorStop(1,'red')"),
				].join(br))
				
			].join(br)),
			
			
			detail(gM('Filter.v'),[
				detail(gM('String'),Arrf(sceg2,[
					'url()',
					'blur(5px)',
					'brightness(0.5)',
					'contrast(0.5)',
					'grayscale(0.5)',
					'invert(0.5)',
					'opacity(0.5)',
					'saturate(0.5)',
					'sepia(0.5)',
					'hue-rotate(180)',
				]).concat('drop-shadow(<offset-x>, <offset-y>, <blur-radius>, <spread-radius>, <color>)',
					sceg2('drop-shadow(2px,2px,5,-3,black)')
				).join(br)),
				scegj("c.filter='blur(5px)'"),
			].join(br)),
			
			detail(gM('Pattern.v')+' createPattern(image, repeatType)',[
				'repeatType=repeat|repeat-x|repeat-y|no-repeat',

				scegj(`
var img=new Image()
img.src='img/ZIL.png';
img.onload=function(){
	var ptn =c.createPattern(img,'repeat')
	c.fillStyle=ptn;
	c.fillRect(0,0,150,150)

}
`,0)

			].join(br)),
			
			detail(gM('shadow')+' *Offset[XY], *Blur, *Color',[
scegj(`			
	c.shadowOffsetX = 2;
  	c.shadowOffsetY = 2;
  	c.shadowBlur = 2;
  	c.shadowColor = 'rgba(0, 0, 0, 0.5)'
`,0)				
			].join(br))
		].join(br)),


		detail(gM('Text'),[
			gM('Font')+scegj("c.font='48px serif'"),
			gM('Align')+scegj("c.textAlign='start'")+'end|left|right|center',
			
			gM('Base Line')+scegj("c.textBaseline='alphabetic'")+'top|hanging|middle|ideographic|bottom',
			
			gM('Direction')+scegj("c.direction='ltr'")+'rtl',
			
			
			'fillText(text, x, y [, maxWidth])',
			scegj("c.fillText('Hello Mather', 10, 50)"),
			
			'strokeText(text, x, y [, maxWidth])',
			scegj("c.strokeText('Hello Mather', 10, 50)"),
		
			gM('Measure')+scegj(`
				var t=c.measureText('foo');
				t.width
			`,0)
		].join(br)),

		detail(gM('Begin Path'),[
			gM('Begin')+scegj('c.beginPath()'),
			
			gM('Move')+' moveTo(x,y)'+scegj('c.moveTo(125,125)',9),

			detail('Path2D()',[
				scegj('var P1=new Path2D()'),
				gM('Clone')+scegj('var P2=new Path2D(P1)'),
				gM('SVG Path')+'d('+gM('String')+')'+scegj("var P3=new Path2D('M10 10 h 80 v 80 h -80 Z')",15),
				
				'Path2D.addPath(path [, transform])',
			].join(br))

		].join(br)),
		
		
		detail(gM('Path Shape'),[

			gM('Line')+' lineTo(x,y)'+scegj('c.lineTo(155,150)',9),
			
			
			gM('Rectangle')+' rect(x,y,width,height)',
				scegj('c.rect(55,50,100,200)',7),
				
			gM('Ellipse')+' ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)',
				scegj('c.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI)',10),	
			
			gM('arc')+' arc(x,y,radius,startAngle('+gM('rad')+'),endAngle('+gM('rad')+'),anticlockwise)',
			scegj('c.arc(50, 50, 100, 100, 0, Math.PI/180*45,1)',6),
			
			gM('arc')+' arcTo(x1,y1,x2,y2,radius)',
			scegj('c.arcTo(50, 50, 100, 100, 80)',8),
			
			gM('Quadratic Bezier')+' quadraticCurveTo(cp1x, cp1y, x, y)',
			
			scegj('c.quadraticCurveTo(60,120,65,100)',19),
			
			gM('Bezier')+'bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)',
			
			scegj('c.bezierCurveTo(85,25,75,37,75,40)',16),
			
		
		].join(br)),
		
		detail(gM('End Path'),[

			gM('Close')+scegj('c.closePath()'),

			gM('Stroke')+scegj('c.stroke()'),
			gM('Fill')+scegj('c.fill()'),
			detail(gM('Fill Method'),[
				scegj("c.fill('nonzero')"),
				scegj("c.fill('evenodd')"),
			].join(br)),
			
			gM('Clip')+scegj('c.clip()'),


		].join(br)),
		
		detail(gM('Image'),[
			'drawImage(image, x, y)',
			scegj('c.drawImage(img, 0, 0)'),
			
			'drawImage(image, x, y, width, height)',
			scegj('c.drawImage(img, 0, 0, 100, 200)'),
			
			'drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)',
			scegj('c.drawImage(img, 0, 0, 100,100, 20,20, 80, 80)'),
		
		
		].join(br)),
		

		detail(gM('Transform'),[
			'translate(x, y)',
			scegj('c.translate(100,100)'),
			
			'rotate(angle('+gM('rad')+'))',
			scegj('c.rotate(45 * Math.PI / 180)'),
			
			'scale(x,y)',
			scegj('c.scale(1.2,0.5)'),
			
			
			detail(gM('Matrix'),[
				'transform(scaleX, skewX, skewY, scaleY, dx, dy)',
				'setTransform(scaleX, skewX, skewY,scaleY, dx, dy)',
				gM('Transformation Matrix')+zx("$zmtrx([['scaleX','skewY','dx'],['skewX','scaleY','dy'],[0,0,1]])$"),
				scegj('c.setTransform(1, 0, 0, 1, 0, 0)'),
			].join(br)),
		].join(br)),
		

		detail(gM('2D Animation'),[
		

			sceg('requestAnimationFrame(function)'),
			
			
			
		].join(br)),
		


		
		
		detail(gM('Image Data'),[
			gM('Create')+' createImageData(width, height)|(imgData)',
			scegj('var imgD = ctx.createImageData(100, 100)'),
			scegj('var imgD2 = ctx.createImageData(imgD1)'),
			
			gM('Get')+' getImageData(left, top, width, height)',
			scegj('var imgD = ctx.getImageData(100,100, 150,200)'),
			
			gM('Put')+' putImageData(imgData, dx, dy)',
			
			scegj('c.putImageData(imgD, 0, 0)'),
				
				
		].join(br)),
		
		
		detail(gM('Option'),[
			detail(gM('Smooth'),[
				scegj('c.imageSmoothingEnabled=true'),
				scegj("c.imageSmoothingQuality='low'")+'|high',
			].join(br)),
			
			detail(gM('Point'),[
				detail(gM('Path'),[
					'(x, y)',
					'(x, y, fillRule)',
					'(path, x, y)',
					'(path, x, y, fillRule)',
					scegj('var b=c.isPointInPath(10,10)'),
					].join(br)),
				
				detail(gM('Stroke'),[
					'(x, y)',
					'(path, x, y)',
					scegj('var b=c.isPointInStroke(10,10)'),
					].join(br)),
			].join(br)),
			
			
			gM('Region')+scegj(`
c.beginPath();
c.arc(70, 80, 10, 0, 2 * Math.PI, false);
c.fill();
c.addHitRegion({id: "circle"});

$(c.canvas).on("mousemove", function(e){
  if(e.region) {
    console.log("hit region:" + e.region);
  }
})
`,0),
			gM('Focus')+scegj('c.drawFocusIfNeeded(element)')+'|(Path2D, element)',
	
			gM('Attribute')+scegj('c.getContextAttributes()'),
				
		
			detail(gM('Composite'),[
				'globalCompositeOperation=type',
				'[source|destination]-[over|atop|in|out]',
				'[hard|soft]-light',
				'color-[dodge|burn]',
				'lighter copy xor multiply','screen overlay darken lighten',
				'difference exclusion hue','saturation color luminosity',

				scegj("c.globalCompositeOperation='source-over'",0),
			
			].join(br)),
].join(br)),
		
		detail(gM('Save'),[
			scegj('c.save()'),
			scegj('c.restore()'),
			
			detail('canvas',[
				detail('toDataURL()',[
					scegj("var u=c.canvas.toDataURL('image/png')"),
					scegj("var u=c.canvas.toDataURL('image/jpeg',0.5)"),
				].join(br)),
				detail('toBlob(callback, type, encoderOptions)',[
					scegj("var b=c.canvas.toBlob(callback, type, encoderOptions)",0)
				].join(br)),
				
				detail('OffscreenCanvas(x,y)',[
					scegj(`
var one=$('#caps')[0].getContext('bitmaprenderer'); 
var two=$('#ican')[0].getContext('bitmaprenderer'); 
var os = new OffscreenCanvas(256, 256);
var gl = os.getContext('webgl');
var b1 = offscreen.transferToImageBitmap();
one.transferImageBitmap(b1);
var b2 = offscreen.transferToImageBitmap();
two.transferImageBitmap(b2);
					
`,0),
					
				].join(br)),
			].join(br)),
			
			
		
		].join(br)),
	
	].join(br)),
	
	detail('3D',[
		detail(gM('3D Animation'),[
		
			detail(gM('Initialize'),[
			scegj(`
$('#input0Preview').html('<canvas id=ican width=300 height=300></canvas>');
var ican=$('#ican'),gl=ican[0].getContext('webgl');
`,0),
			
			].join(br))
			
		].join(br)),
	
	
	].join(br)),
	].join(''),










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










	'Markdown':[
		detail(gM('Style'),[
			[scHotk('Ctrl + I'),XML.wrapE('i',gM('Italic')),sceg('*ABC*'),sceg('_ABC_')].join(''),
			[scHotk('Ctrl + B'),XML.wrapE('b',gM('Bold')),sceg('**ABC**')].join(''),
			
			[XML.wrapE('b',XML.wrapE('i',gM('Bold Italic'))),sceg('***ABC***')].join(''),
			
			[XML.wrapE('del',gM('Strikeline')),sceg('~~ABC~~')].join(''),
			[XML.wrapE('mark',gM('Highlight')),sceg('==ABC==')].join(''),
			[scHotk('Ctrl + U'),SCtv('underline',gM('Underline')),sceg('__ABC__'),sceg('__$\\phantom{\\quad A \\quad}$__'),].join(''), 
				
	
			[scHotk('Ctrl + Q'),gM('Blockquote'),Arrf(sceg,['> ABC','\n> A\n> > B\n> > > C'])].join(''),

			[gM('Inline Quote'),sceg('`ABC`')].join(''),
	
		].join(br))+
		
		detail(gM('Image'),[
	
			[gM('Image'),sceg('![Alt '+gM('Text')+'](http:// "'+gM('Title')+'")')].join(''),
			[gM('Image ID'),sceg('![Alt '+gM('Text')+'][id]')].join(''),


		].join(br))+
		

		
		detail(gM('List'),[

			[gM('Unordered List'),Arrf(sceg,['- ','* ','+ ','- 1\n- 2\n- 3'])].join(''),
			[gM('Ordered List'),Arrf(sceg,['1. ','1. \n2. \n3. '])].join(''),
			[gM('Todo List'),Arrf(sceg,['- [ ]','- [x]','- [x]\n- [ ]\n- [ ]'])].join(''),

			[gM('Compound'),sceg(`
1. 1
2. 2
3. 3
 - 3.1
 - 3.2
  + 3.21
  + 3.22
 - 30.3
4. 40

Todo
- [x]1
- [ ]2
- [ ]3
`,10)].join(''),
		].join(br))+
		
		detail(gM('href'),[
	
			[scHotk('Ctrl + K'),SCtv('underline',gM('href')),sceg('['+gM('Text')+'](http:// "'+gM('Title')+'")')].join(''),


			[gM('href Definition'),sceg('[id]:http://www.abc.com "'+gM('Title')+'"')].join(''),	
			[gM('href ID'),sceg('['+gM('Text')+'][id]')].join(''),
			
			[gM('Foot Note'),sceg('[^id]')].join(''),
			[gM('Foot Note')+' '+gM('Definition'),sceg('[^id]: ')].join(''),
				
			[gM('href'),sceg('<http://www.abc.com>'),sceg('<info@abc.com>')].join(''),
			
		].join(br))+


		detail(gM('Table'),[

			[gM('Table'),sceg('A|B|C\n--|--|--\n1|2|3\n',5),
				sceg('|A|B|\n|--|--|\n1|2\n',5)].join(''),
				
			[gM('Double Table Head'),sceg(`
A|B|C|D
E|F|G
|--|--|--|
1|2|3
4|5|6
7|8|9
`,0),

sceg(`
A|B|C|D
E|F|G
--|--|--
1|2|3
4|5|6
7|8|9
`,0),

sceg(`
A|B|C|D
E|F|G
|--|--|--
1|2|3
4|5|6
7|8|9
`,0),

sceg(`
A|B|C|D
E|F|G
--|--|--|
1|2|3
4|5|6
7|8|9
`,0),
].join(''),

			[gM('Table Align'),sceg(`
|A111|B222|C333|
|:--|:--:|--:|
|1|2|3|
`,0)
].join(''),
			[gM('Borderless Table'),sceg('$$zarray([[1,2,3],[4,5,6],[7,8,9]])$$',0)
			].join(''),
		].join(br))+


		detail(gM('Structure'),[


			'H1'+Arrf(sceg,['# '+gM('H1')]),
			'H2~H4'+Arrf(sceg,['## ','### ','#### ']),
			'H5~H6 '+Arrf(sceg,['##### ','###### ']),
			[gM('Contents'),Arrf(sceg,['[TOC]','[UTOC]'])].join(''),
	
			[gM('Horizontal Line'),sceg('---\n')].join(''),
		].join(br))+
			
		detail(gM('Math Formula'),[
		

			['LaTeX',sceg('$x^2=4$')].join(''),
			['ID',sceg('$x^2=4$#'+gM('Formula')+'1#')].join(''),
			[gM('Reference'),sceg('$@'+gM('Formula')+'1@$')].join(''),
			[gM('JavaScript'),sceg('$$2+3$$')].join('')
		].join(br))+

		detail(gM('Exam'),[
			[	gM('fill in the blank'),sceg('__$\\phantom{\\qquad}$__',0),
				gM('Answer'),sceg2('Mather','','__$\\color{red}{\\quad \\bm{','}\\quad}$__'),
			].join(''),
			[	gM('Hidden Answer'),sceg2('Mather','','__$\\phantom{\\color{red}{\\quad \\bm{','}\\quad}}$__')
			].join(''),

			[	gM('Choice'),sceg('($\\phantom{\\qquad}$)',0),
				gM('Answer'),Arrf(function(i){return sceg2(i,'','($\\color{red}{\\quad \\bm{','}\\quad}$)')},ZLR('A B C D a b c d'))
			].join(''),
			[	gM('Hidden Answer'),Arrf(function(i){return sceg2(i,'','($\\phantom{\\color{red}{\\quad \\bm{','}\\quad}}$)')},ZLR('A B C D a b c d'))
			].join(''),

			[	gM('Judgement'),sceg('($\\phantom{\\qquad}$)',0),
				gM('Answer'),Arrf(function(i){return sceg2(i,'','($\\color{red}{\\quad \\bm{','}\\quad}$)')},['✔','✖','T','F',gM('True'),gM('False')]),
			].join(''),
			[	gM('Hidden Answer'),Arrf(function(i){return sceg2(i,'','($\\phantom{\\color{red}{\\quad \\bm{','}\\quad}}$)')},['✔','✖','T','F',gM('True'),gM('False')])
			].join(''),

		].join(br))+
		
		detail(gM('Code'),[
		
	
			[gM('Code Block'),sceg('``` ABC ```')].join(''),

			['JavaScript eval ('+gM('Formula')+')',sceg('$$2+3$$')].join(''),
			['JavaScript eval ('+gM('at first'),sceg('<js>1+2+3</js>'),sceg("<js>svgf.id('',svgf.circle(15,15,10,'red'))</js>",4)].join(''),
			['JavaScript eval ('+gM('at last'),sceg('<JS>1+2+3</JS>')].join(''),
		].join(br))


	
	].join(br),



	Echarts:[href(Hs+'www.echartsjs.com/examples/index.html','百度ECharts官网')+'暂不支持LaTeX',
		'JS代码用$美元符号$括起来'+sceg2('$1+2$'),

		detail('【折线图】line',[
		sceg(jSoff({
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [{
				data: ["$820+50$", 932, 901, 934, 1290, 1330, 1320],
				type: 'line'
			}]
		}),10),'可以插在series.type后面的参数：',
			'面积图 '+sceg2(',areaStyle:{}'),
			'光滑图 '+sceg2(',smooth:true'),

		'平行坐标系 Parallel'+
		sceg(jSoff({
			parallelAxis: [
				{dim: 0, name: 'Price'},
				{dim: 1, name: 'Net Weight'},
				{dim: 2, name: 'Amount'},
				{
					dim: 3,
					name: 'Score',
					type: 'category',
					data: ['Excellent', 'Good', 'OK', 'Bad']
				}
			],
			series: {
				type: 'parallel',
				lineStyle: {
					width: 4
				},
				data: [
					[12.99, 100, 82, 'Good'],
					[9.99, 80, 77, 'OK'],
					[20, 120, 60, 'Excellent']
				]
			}
		}),10),

		'多个X轴Multiple X Axes'+
		sceg(jSoff({
			color: ['#5793f3', '#d14a61', '#675bba'],

			tooltip: {
				trigger: 'none',
				axisPointer: {
					type: 'cross'
				}
			},
			legend: {
				data:['2015 降水量', '2016 降水量']
			},
			grid: {
				top: 70,
				bottom: 50
			},
			xAxis: [
				{
					type: 'category',
					axisTick: {
						alignWithLabel: true
					},
					axisLine: {
						onZero: false,
						lineStyle: {
							color: '#d14a61'
						}
					},
					axisPointer: {
						label: {
							formatter: function (params) {
								return '降水量  ' + params.value
									+ (params.seriesData.length ? '：' + params.seriesData[0].data : '');
							}
						}
					},
					data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
				},
				{
					type: 'category',
					axisTick: {
						alignWithLabel: true
					},
					axisLine: {
						onZero: false,
						lineStyle: {
							color: '#5793f3'
						}
					},
					axisPointer: {
						label: {
							formatter: function (params) {
								return '降水量  ' + params.value
									+ (params.seriesData.length ? '：' + params.seriesData[0].data : '');
							}
						}
					},
					data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name:'2015 降水量',
					type:'line',
					xAxisIndex: 1,
					smooth: true,
					data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				},
				{
					name:'2016 降水量',
					type:'line',
					smooth: true,
					data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
				}
			]
		}),10),
			
			
		'折线+饼图'+
		sceg(jSoff({
			legend: {},
			tooltip: {
				trigger: 'axis',
				showContent: false
			},
			dataset: {
				source: [
					['product', '2012', '2013', '2014', '2015', '2016', '2017'],
					['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
					['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
					['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
					['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
				]
			},
			xAxis: {type: 'category'},
			yAxis: {gridIndex: 0},
			grid: {top: '55%'},
			series: [
				{type: 'line', smooth: true, seriesLayoutBy: 'row'},
				{type: 'line', smooth: true, seriesLayoutBy: 'row'},
				{type: 'line', smooth: true, seriesLayoutBy: 'row'},
				{type: 'line', smooth: true, seriesLayoutBy: 'row'},
				{
					type: 'pie',
					id: 'pie',
					radius: '30%',
					center: ['50%', '25%'],
					label: {
						formatter: '{b}: {@2012} ({d}%)'
					},
					encode: {
						itemName: 'product',
						value: '2012',
						tooltip: '2012'
					}
				}
			]
		}),10)
		].join(br)
		),
		detail('【极坐标图】polar',[
		'爱心Heart'+		
		sceg(jSoff({
			title: {
				text: '极坐标双数值轴'
			},
			legend: {
				data: ['line']
			},
			polar: {},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				}
			},
			angleAxis: {
				type: 'value',
				startAngle: 0
			},
			radiusAxis: {
			},
			series: [{
				coordinateSystem: 'polar',
				name: 'line',
				type: 'line',
				data: '$$'
			}]
		}).replace('"$$"','$jSoff(Arrf(function(x){var t=x/100*360;return [5*(1+Math.sin(t/180*Math.PI)),t]},seqA(0,101)))$'),10),
		
		'8叶线'+
		sceg(jSoff({
			title: {
				text: '极坐标双数值轴'
			},
			legend: {
				data: ['line']
			},
			polar: {
				center: ['50%', '54%']
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				}
			},
			angleAxis: {
				type: 'value',
				startAngle: 0
			},
			radiusAxis: {
				min: 0
			},
			series: [{
				coordinateSystem: 'polar',
				name: 'line',
				type: 'line',
				showSymbol: false,
				data: '$$'
			}],
			animationDuration: 2000
		}).replace('"$$"','$jSoff(Arrf(function(x){var t=x/45*Math.PI;return [Math.sin(t)/2,x]},seqA(0,361)))$'),10),
		
		
		'堆叠柱状图1（极坐标系）'+
		sceg(jSoff({
		
			angleAxis: {
			},
			radiusAxis: {
				type: 'category',
				data: ['周一', '周二', '周三', '周四'],
				z: 10
			},
			polar: {
			},
			series: [{
				type: 'bar',
				data: [1, 2, 3, 4],
				coordinateSystem: 'polar',
				name: 'A',
				stack: 'a'
			}, {
				type: 'bar',
				data: [2, 4, 6, 8],
				coordinateSystem: 'polar',
				name: 'B',
				stack: 'a'
			}, {
				type: 'bar',
				data: [1, 2, 3, 4],
				coordinateSystem: 'polar',
				name: 'C',
				stack: 'a'
			}],
			legend: {
				show: true,
				data: ['A', 'B', 'C']
			}

		}),10),
			
		'堆叠柱状图2（极坐标系）'+
		sceg(jSoff({
		
			angleAxis: {
				type: 'category',
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				z: 10
			},
			radiusAxis: {
			},
			polar: {
			},
			series: [{
				type: 'bar',
				data: [1, 2, 3, 4, 3, 5, 1],
				coordinateSystem: 'polar',
				name: 'A',
				stack: 'a'
			}, {
				type: 'bar',
				data: [2, 4, 6, 1, 3, 2, 1],
				coordinateSystem: 'polar',
				name: 'B',
				stack: 'a'
			}, {
				type: 'bar',
				data: [1, 2, 3, 4, 1, 2, 5],
				coordinateSystem: 'polar',
				name: 'C',
				stack: 'a'
			}],
			legend: {
				show: true,
				data: ['A', 'B', 'C']
			}

		}),10),
			
			
		].join(br)
		)

		,
		detail('【柱状图/条形图】bar',[
		sceg(jSoff({
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar'
			}]
			
		}),10),

		'年度细分对比'+
		sceg(jSoff({
			color: ['#003366', '#006699', '#4cabce', '#e5323e'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: ['Forest', 'Steppe', 'Desert', 'Wetland']
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'right',
				top: 'center',
				feature: {
					mark: {show: true},
					dataView: {show: true, readOnly: false},
					magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			calculable: true,
			xAxis: [
				{
					type: 'category',
					axisTick: {show: false},
					data: ['2012', '2013', '2014', '2015', '2016']
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: 'Forest',
					type: 'bar',
					barGap: 0,
					data: [320, 332, 301, 334, 390]
				},
				{
					name: 'Steppe',
					type: 'bar',
					data: [220, 182, 191, 234, 290]
				},
				{
					name: 'Desert',
					type: 'bar',
					data: [150, 232, 201, 154, 190]
				},
				{
					name: 'Wetland',
					type: 'bar',
					data: [98, 77, 101, 99, 40]
				}
			]
		}),10),
		
		'正负条形图（横向）'+
		sceg(jSoff({
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data:['利润', '支出', '收入']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'value'
				}
			],
			yAxis : [
				{
					type : 'category',
					axisTick : {show: false},
					data : ['周一','周二','周三','周四','周五','周六','周日']
				}
			],
			series : [
				{
					name:'利润',
					type:'bar',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					data:[200, 170, 240, 244, 200, 220, 210]
				},
				{
					name:'收入',
					type:'bar',
					stack: '总量',
					label: {
						normal: {
							show: true
						}
					},
					data:[320, 302, 341, 374, 390, 450, 420]
				},
				{
					name:'支出',
					type:'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'left'
						}
					},
					data:[-120, -132, -101, -134, -190, -230, -210]
				}
			]
		}),10),
		
		
		'堆叠柱状图'+
		sceg(jSoff({
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : ['周一','周二','周三','周四','周五','周六','周日']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'直接访问',
					type:'bar',
					data:[320, 332, 301, 334, 390, 330, 320]
				},
				{
					name:'邮件营销',
					type:'bar',
					stack: '广告',
					data:[120, 132, 101, 134, 90, 230, 210]
				},
				{
					name:'联盟广告',
					type:'bar',
					stack: '广告',
					data:[220, 182, 191, 234, 290, 330, 310]
				},
				{
					name:'视频广告',
					type:'bar',
					stack: '广告',
					data:[150, 232, 201, 154, 190, 330, 410]
				},
				{
					name:'搜索引擎',
					type:'bar',
					data:[862, 1018, 964, 1026, 1679, 1600, 1570],
					markLine : {
						lineStyle: {
							normal: {
								type: 'dashed'
							}
						},
						data : [
							[{type : 'min'}, {type : 'max'}]
						]
					}
				},
				{
					name:'百度',
					type:'bar',
					barWidth : 5,
					stack: '搜索引擎',
					data:[620, 732, 701, 734, 1090, 1130, 1120]
				},
				{
					name:'谷歌',
					type:'bar',
					stack: '搜索引擎',
					data:[120, 132, 101, 134, 290, 230, 220]
				},
				{
					name:'必应',
					type:'bar',
					stack: '搜索引擎',
					data:[60, 72, 71, 74, 190, 130, 110]
				},
				{
					name:'其他',
					type:'bar',
					stack: '搜索引擎',
					data:[62, 82, 91, 84, 109, 110, 120]
				}
			]
		}),10),

		'坐标轴刻度与标签对齐'+
		sceg(jSoff({
			color: ['#3398DB'],
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisTick: {
						alignWithLabel: true
					}
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'直接访问',
					type:'bar',
					barWidth: '60%',
					data:[10, 52, 200, 334, 390, 330, 220]
				}
			]
		}),10),

		'阶梯组成'+
		sceg(jSoff({
			title: {
				text: '深圳月最低生活费组成（单位:元）',
				subtext: 'From www',
				sublink: 'http://'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				},
				formatter: function (params) {
					var tar = params[1];
					return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type : 'category',
				splitLine: {show:false},
				data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
			},
			yAxis: {
				type : 'value'
			},
			series: [
				{
					name: '辅助',
					type: 'bar',
					stack:  '总量',
					itemStyle: {
						normal: {
							barBorderColor: 'rgba(0,0,0,0)',
							color: 'rgba(0,0,0,0)'
						},
						emphasis: {
							barBorderColor: 'rgba(0,0,0,0)',
							color: 'rgba(0,0,0,0)'
						}
					},
					data: [0, 1700, 1400, 1200, 300, 0]
				},
				{
					name: '生活费',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					data:[2900, 1200, 300, 200, 900, 300]
				}
			]

		}),10),

		'阶梯瀑布图'+
		sceg(jSoff({
			title: {
				text: '阶梯瀑布图',
				subtext: 'From ...',
				sublink: 'http://'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				},
				formatter: function (params) {
					var tar;
					if (params[1].value != '-') {
						tar = params[1];
					}
					else {
						tar = params[0];
					}
					return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
				}
			},
			legend: {
				data:['支出','收入']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type : 'category',
				splitLine: {show:false},
				data :  function (){
					var list = [];
					for (var i = 1; i <= 11; i++) {
						list.push('11月' + i + '日');
					}
					return list;
				}()
			},
			yAxis: {
				type : 'value'
			},
			series: [
				{
					name: '辅助',
					type: 'bar',
					stack: '总量',
					itemStyle: {
						normal: {
							barBorderColor: 'rgba(0,0,0,0)',
							color: 'rgba(0,0,0,0)'
						},
						emphasis: {
							barBorderColor: 'rgba(0,0,0,0)',
							color: 'rgba(0,0,0,0)'
						}
					},
					data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
				},
				{
					name: '收入',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'top'
						}
					},
					data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
				},
				{
					name: '支出',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'bottom'
						}
					},
					data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
				}
			]


		}),10),
		
		'横向组成图'+
		sceg(jSoff({

			title: {
				text: '世界人口总量',
				subtext: '数据来自网络'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: ['2011年', '2012年']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value',
				boundaryGap: [0, 0.01]
			},
			yAxis: {
				type: 'category',
				data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
			},
			series: [
				{
					name: '2011年',
					type: 'bar',
					data: [18203, 23489, 29034, 104970, 131744, 630230]
				},
				{
					name: '2012年',
					type: 'bar',
					data: [19325, 23438, 31000, 121594, 134141, 681807]
				}
			]

		}),10),

		'堆叠条形图'+
		sceg(jSoff({
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis:  {
				type: 'value'
			},
			yAxis: {
				type: 'category',
				data: ['周一','周二','周三','周四','周五','周六','周日']
			},
			series: [
				{
					name: '直接访问',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [320, 302, 301, 334, 390, 330, 320]
				},
				{
					name: '邮件营销',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [120, 132, 101, 134, 90, 230, 210]
				},
				{
					name: '联盟广告',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: '视频广告',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [150, 212, 201, 154, 190, 330, 410]
				},
				{
					name: '搜索引擎',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [820, 832, 901, 934, 1290, 1330, 1320]
				}
			]

		}),10),



		'平均刻度线'+
		sceg(jSoff({
			title : {
				text: '某地区蒸发量和降水量',
				subtext: '纯属虚构'
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['蒸发量','降水量']
			},
			toolbox: {
				show : true,
				feature : {
					dataView : {show: true, readOnly: false},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'蒸发量',
					type:'bar',
					data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				},
				{
					name:'降水量',
					type:'bar',
					data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
					markPoint : {
						data : [
							{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
							{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
						]
					},
					markLine : {
						data : [
							{type : 'average', name : '平均值'}
						]
					}
				}
			]
		}),10),


		'折线图+柱状图'+
		sceg(jSoff({
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
				}
			},
			toolbox: {
				feature: {
					dataView: {show: true, readOnly: false},
					magicType: {show: true, type: ['line', 'bar']},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			legend: {
				data:['蒸发量','降水量','平均温度']
			},
			xAxis: [
				{
					type: 'category',
					data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					axisPointer: {
						type: 'shadow'
					}
				}
			],
			yAxis: [
				{
					type: 'value',
					name: '水量',
					min: 0,
					max: 250,
					interval: 50,
					axisLabel: {
						formatter: '{value} ml'
					}
				},
				{
					type: 'value',
					name: '温度',
					min: 0,
					max: 25,
					interval: 5,
					axisLabel: {
						formatter: '{value} °C'
					}
				}
			],
			series: [
				{
					name:'蒸发量',
					type:'bar',
					data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
				},
				{
					name:'降水量',
					type:'bar',
					data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				},
				{
					name:'平均温度',
					type:'line',
					yAxisIndex: 1,
					data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
				}
			]

		}),10),


		'多y轴'+
		sceg(jSoff({
			color: ['#5793f3', '#d14a61', '#675bba'],

			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				}
			},
			grid: {
				right: '20%'
			},
			toolbox: {
				feature: {
					dataView: {show: true, readOnly: false},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			legend: {
				data:['蒸发量','降水量','平均温度']
			},
			xAxis: [
				{
					type: 'category',
					axisTick: {
						alignWithLabel: true
					},
					data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				}
			],
			yAxis: [
				{
					type: 'value',
					name: '蒸发量',
					min: 0,
					max: 250,
					position: 'right',
					axisLine: {
						lineStyle: {
							color: '#5793f3'
						}
					},
					axisLabel: {
						formatter: '{value} ml'
					}
				},
				{
					type: 'value',
					name: '降水量',
					min: 0,
					max: 250,
					position: 'right',
					offset: 80,
					axisLine: {
						lineStyle: {
							color: '#d14a61'
						}
					},
					axisLabel: {
						formatter: '{value} ml'
					}
				},
				{
					type: 'value',
					name: '温度',
					min: 0,
					max: 25,
					position: 'left',
					axisLine: {
						lineStyle: {
							color: '#675bba'
						}
					},
					axisLabel: {
						formatter: '{value} °C'
					}
				}
			],
			series: [
				{
					name:'蒸发量',
					type:'bar',
					data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
				},
				{
					name:'降水量',
					type:'bar',
					yAxisIndex: 1,
					data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				},
				{
					name:'平均温度',
					type:'line',
					yAxisIndex: 2,
					data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
				}
			]

		}),10),


		'数据形式（数组）'+
		sceg(jSoff({
			legend: {},
			tooltip: {},
			dataset: {
				source: [
					['product', '2015', '2016', '2017'],
					['Matcha Latte', 43.3, 85.8, 93.7],
					['Milk Tea', 83.1, 73.4, 55.1],
					['Cheese Cocoa', 86.4, 65.2, 82.5],
					['Walnut Brownie', 72.4, 53.9, 39.1]
				]
			},
			xAxis: {type: 'category'},
			yAxis: {},
			// Declare several bar series, each will be mapped
			// to a column of dataset.source by default.
			series: [
				{type: 'bar'},
				{type: 'bar'},
				{type: 'bar'}
			]

		}),10),

		'数据形式（JSON）'+
		sceg(jSoff({
			legend: {},
			tooltip: {},
			dataset: {
				dimensions: ['product', '2015', '2016', '2017'],
				source: [
					{product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
					{product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
					{product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
					{product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
				]
			},
			xAxis: {type: 'category'},
			yAxis: {},
			// Declare several bar series, each will be mapped
			// to a column of dataset.source by default.
			series: [
				{type: 'bar'},
				{type: 'bar'},
				{type: 'bar'}
			]

		}),10),


		'横向对比条形图'+
		sceg(jSoff({
			dataset: {
				source: [
					['score', 'amount', 'product'],
					[89.3, 58212, 'Matcha Latte'],
					[57.1, 78254, 'Milk Tea'],
					[74.4, 41032, 'Cheese Cocoa'],
					[50.1, 12755, 'Cheese Brownie'],
					[89.7, 20145, 'Matcha Cocoa'],
					[68.1, 79146, 'Tea'],
					[19.6, 91852, 'Orange Juice'],
					[10.6, 101852, 'Lemon Juice'],
					[32.7, 20112, 'Walnut Brownie']
				]
			},
			grid: {containLabel: true},
			xAxis: {name: 'amount'},
			yAxis: {type: 'category'},
			visualMap: {
				orient: 'horizontal',
				left: 'center',
				min: 10,
				max: 100,
				text: ['High Score', 'Low Score'],
				// Map the score column to color
				dimension: 0,
				inRange: {
					color: ['#D7DA8B', '#E15457']
				}
			},
			series: [
				{
					type: 'bar',
					encode: {
						// Map the "amount" column to X axis.
						x: 'amount',
						// Map the "product" column to Y axis
						y: 'product'
					}
				}
			]

		}),10),



		'多维度对比'+
		sceg(jSoff({
			legend: {},
			tooltip: {},
			dataset: {
				source: [
					['product', '2012', '2013', '2014', '2015'],
					['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
					['Milk Tea', 86.5, 92.1, 85.7, 83.1],
					['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
				]
			},
			xAxis: [
				{type: 'category', gridIndex: 0},
				{type: 'category', gridIndex: 1}
			],
			yAxis: [
				{gridIndex: 0},
				{gridIndex: 1}
			],
			grid: [
				{bottom: '55%'},
				{top: '55%'}
			],
			series: [
				// These series are in the first grid.
				{type: 'bar', seriesLayoutBy: 'row'},
				{type: 'bar', seriesLayoutBy: 'row'},
				{type: 'bar', seriesLayoutBy: 'row'},
				// These series are in the second grid.
				{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
				{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
				{type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
				{type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
			]
		}),10),




		].join(br)
		)
		,
			
		detail('【饼图】pie',[
			
		'半径一致'+
		sceg(jSoff({
			title : {
				text: '某站点用户访问来源',
				subtext: '纯属虚构',
				x:'center'
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				left: 'left',
				data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			},
			series : [
				{
					name: '访问来源',
					type: 'pie',
					radius : '55%',
					center: ['50%', '60%'],
					data:[
						{value:335, name:'直接访问'},
						{value:310, name:'邮件营销'},
						{value:234, name:'联盟广告'},
						{value:135, name:'视频广告'},
						{value:1548, name:'搜索引擎'}
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]

		}),10),
			
		'半径不一致'+
		sceg(jSoff({
			backgroundColor: '#2c343c',

			title: {
				text: 'Customized Pie',
				left: 'center',
				top: 20,
				textStyle: {
					color: '#ccc'
				}
			},

			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},

			visualMap: {
				show: false,
				min: 80,
				max: 600,
				inRange: {
					colorLightness: [0, 1]
				}
			},
			series : [
				{
					name:'访问来源',
					type:'pie',
					radius : '55%',
					center: ['50%', '50%'],
					data:[
						{value:335, name:'直接访问'},
						{value:310, name:'邮件营销'},
						{value:274, name:'联盟广告'},
						{value:235, name:'视频广告'},
						{value:400, name:'搜索引擎'}
					].sort(function (a, b) { return a.value - b.value; }),
					roseType: 'radius',
					label: {
						normal: {
							textStyle: {
								color: 'rgba(255, 255, 255, 0.3)'
							}
						}
					},
					labelLine: {
						normal: {
							lineStyle: {
								color: 'rgba(255, 255, 255, 0.3)'
							},
							smooth: 0.2,
							length: 10,
							length2: 20
						}
					},
					itemStyle: {
						normal: {
							color: '#c23531',
							shadowBlur: 200,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},

					animationType: 'scale',
					animationEasing: 'elasticOut',
					animationDelay: function (idx) {
						return Math.random() * 200;
					}
				}
			]



		}),10),
			
			
		'南丁格尔玫瑰图'+
		sceg(jSoff({
			title : {
				text: '南丁格尔玫瑰图',
				subtext: '纯属虚构',
				x:'center'
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				x : 'center',
				y : 'bottom',
				data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
			},
			toolbox: {
				show : true,
				feature : {
					mark : {show: true},
					dataView : {show: true, readOnly: false},
					magicType : {
						show: true,
						type: ['pie', 'funnel']
					},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : true,
			series : [
				{
					name:'半径模式',
					type:'pie',
					radius : [20, 110],
					center : ['25%', '50%'],
					roseType : 'radius',
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: true
						}
					},
					lableLine: {
						normal: {
							show: false
						},
						emphasis: {
							show: true
						}
					},
					data:[
						{value:10, name:'rose1'},
						{value:5, name:'rose2'},
						{value:15, name:'rose3'},
						{value:25, name:'rose4'},
						{value:20, name:'rose5'},
						{value:35, name:'rose6'},
						{value:30, name:'rose7'},
						{value:40, name:'rose8'}
					]
				},
				{
					name:'面积模式',
					type:'pie',
					radius : [30, 110],
					center : ['75%', '50%'],
					roseType : 'area',
					data:[
						{value:10, name:'rose1'},
						{value:5, name:'rose2'},
						{value:15, name:'rose3'},
						{value:25, name:'rose4'},
						{value:20, name:'rose5'},
						{value:35, name:'rose6'},
						{value:30, name:'rose7'},
						{value:40, name:'rose8'}
					]
				}
			]



		}),10),

		'多个饼图'+
		sceg(jSoff({
			legend: {},
			tooltip: {},
			dataset: {
				source: [
					['product', '2012', '2013', '2014', '2015', '2016', '2017'],
					['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
					['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
					['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
					['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
				]
			},
			series: [{
				type: 'pie',
				radius: 60,
				center: ['25%', '30%']
				// No encode specified, by default, it is '2012'.
			}, {
				type: 'pie',
				radius: 60,
				center: ['75%', '30%'],
				encode: {
					itemName: 'product',
					value: '2013'
				}
			}, {
				type: 'pie',
				radius: 60,
				center: ['25%', '75%'],
				encode: {
					itemName: 'product',
					value: '2014'
				}
			}, {
				type: 'pie',
				radius: 60,
				center: ['75%', '75%'],
				encode: {
					itemName: 'product',
					value: '2015'
				}
			}]
			
		}),10),

		'Doughnut环形图'+
		sceg(jSoff({
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			},
			series: [
				{
					name:'访问来源',
					type:'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data:[
						{value:335, name:'直接访问'},
						{value:310, name:'邮件营销'},
						{value:234, name:'联盟广告'},
						{value:135, name:'视频广告'},
						{value:1548, name:'搜索引擎'}
					]
				}
			]

		}),10),



		'环形图 + 饼图'+
		sceg(jSoff({
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
			},
			series: [
				{
					name:'访问来源',
					type:'pie',
					selectedMode: 'single',
					radius: [0, '30%'],

					label: {
						normal: {
							position: 'inner'
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data:[
						{value:335, name:'直达', selected:true},
						{value:679, name:'营销广告'},
						{value:1548, name:'搜索引擎'}
					]
				},
				{
					name:'访问来源',
					type:'pie',
					radius: ['40%', '55%'],
					label: {
						normal: {
							formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
							backgroundColor: '#eee',
							borderColor: '#aaa',
							borderWidth: 1,
							borderRadius: 4,
							// shadowBlur:3,
							// shadowOffsetX: 2,
							// shadowOffsetY: 2,
							// shadowColor: '#999',
							// padding: [0, 7],
							rich: {
								a: {
									color: '#999',
									lineHeight: 22,
									align: 'center'
								},
								// abg: {
								//     backgroundColor: '#333',
								//     width: '100%',
								//     align: 'right',
								//     height: 22,
								//     borderRadius: [4, 4, 0, 0]
								// },
								hr: {
									borderColor: '#aaa',
									width: '100%',
									borderWidth: 0.5,
									height: 0
								},
								b: {
									fontSize: 16,
									lineHeight: 33
								},
								per: {
									color: '#eee',
									backgroundColor: '#334455',
									padding: [2, 4],
									borderRadius: 2
								}
							}
						}
					},
					data:[
						{value:335, name:'直达'},
						{value:310, name:'邮件营销'},
						{value:234, name:'联盟广告'},
						{value:135, name:'视频广告'},
						{value:1048, name:'百度'},
						{value:251, name:'谷歌'},
						{value:147, name:'必应'},
						{value:102, name:'其他'}
					]
				}
			]
		}),10),
		].join(br)
		),
		
		
		detail('【散点图】scatter',[

		sceg(jSoff({
			xAxis: {},
			yAxis: {},
			series: [{
				symbolSize: 20,
				data: [
					[10.0, 8.04],
					[8.0, 6.95],
					[13.0, 7.58],
					[9.0, 8.81],
					[11.0, 8.33],
					[14.0, 9.96],
					[6.0, 7.24],
					[4.0, 4.26],
					[12.0, 10.84],
					[7.0, 4.82],
					[5.0, 5.68]
				],
				type: 'scatter'
			}]
		
		}),10),


		'气泡图 Bubble'+
		sceg(jSoff({
			backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
				offset: 0,
				color: '#f7f8fa'
			}, {
				offset: 1,
				color: '#cdd0d5'
			}]),
			title: {
				text: '1990 与 2015 年各国家人均寿命与 GDP'
			},
			legend: {
				right: 10,
				data: ['1990', '2015']
			},
			xAxis: {
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				}
			},
			yAxis: {
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				},
				scale: true
			},
			series: [{
				name: '1990',
				data: [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
				type: 'scatter',
				symbolSize: function (data) {
					return Math.sqrt(data[2]) / 5e2;
				},
				label: {
					emphasis: {
						show: true,
						formatter: function (param) {
							return param.data[3];
						},
						position: 'top'
					}
				},
				itemStyle: {
					normal: {
						shadowBlur: 10,
						shadowColor: 'rgba(120, 36, 50, 0.5)',
						shadowOffsetY: 5,
						color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
							offset: 0,
							color: 'rgb(251, 118, 123)'
						}, {
							offset: 1,
							color: 'rgb(204, 46, 72)'
						}])
					}
				}
			}, {
				name: '2015',
				data: [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]],
				type: 'scatter',
				symbolSize: function (data) {
					return Math.sqrt(data[2]) / 5e2;
				},
				label: {
					emphasis: {
						show: true,
						formatter: function (param) {
							return param.data[3];
						},
						position: 'top'
					}
				},
				itemStyle: {
					normal: {
						shadowBlur: 10,
						shadowColor: 'rgba(25, 100, 150, 0.5)',
						shadowOffsetY: 5,
						color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
							offset: 0,
							color: 'rgb(129, 227, 238)'
						}, {
							offset: 1,
							color: 'rgb(25, 183, 207)'
						}])
					}
				}
			}]
		
		}),10),


		'Anscombe\'s quartet'+
		sceg(jSoff({

			title: {
				text: 'Anscombe\'s quartet',
				x: 'center',
				y: 0
			},
			grid: [
				{x: '7%', y: '7%', width: '38%', height: '38%'},
				{x2: '7%', y: '7%', width: '38%', height: '38%'},
				{x: '7%', y2: '7%', width: '38%', height: '38%'},
				{x2: '7%', y2: '7%', width: '38%', height: '38%'}
			],
			tooltip: {
				formatter: 'Group {a}: ({c})'
			},
			xAxis: [
				{gridIndex: 0, min: 0, max: 20},
				{gridIndex: 1, min: 0, max: 20},
				{gridIndex: 2, min: 0, max: 20},
				{gridIndex: 3, min: 0, max: 20}
			],
			yAxis: [
				{gridIndex: 0, min: 0, max: 15},
				{gridIndex: 1, min: 0, max: 15},
				{gridIndex: 2, min: 0, max: 15},
				{gridIndex: 3, min: 0, max: 15}
			],
			series: [
				{
					name: 'I',
					type: 'scatter',
					xAxisIndex: 0,
					yAxisIndex: 0,
					data: [
						[10.0, 8.04],
						[8.0, 6.95],
						[13.0, 7.58],
						[9.0, 8.81],
						[11.0, 8.33],
						[14.0, 9.96],
						[6.0, 7.24],
						[4.0, 4.26],
						[12.0, 10.84],
						[7.0, 4.82],
						[5.0, 5.68]
					],
					markLine: {
						animation: false,
						label: {
							normal: {
								formatter: 'y = 0.5 * x + 3',
								textStyle: {
									align: 'right'
								}
							}
						},
						lineStyle: {
							normal: {
								type: 'solid'
							}
						},
						tooltip: {
							formatter: 'y = 0.5 * x + 3'
						},
						data: [[{
							coord: [0, 3],
							symbol: 'none'
						}, {
							coord: [20, 13],
							symbol: 'none'
						}]]
					}
				},
				{
					name: 'II',
					type: 'scatter',
					xAxisIndex: 1,
					yAxisIndex: 1,
					data: [
						[10.0, 9.14],
						[8.0, 8.14],
						[13.0, 8.74],
						[9.0, 8.77],
						[11.0, 9.26],
						[14.0, 8.10],
						[6.0, 6.13],
						[4.0, 3.10],
						[12.0, 9.13],
						[7.0, 7.26],
						[5.0, 4.74]
					],
					markLine: {
						animation: false,
						label: {
							normal: {
								formatter: 'y = 0.5 * x + 3',
								textStyle: {
									align: 'right'
								}
							}
						},
						lineStyle: {
							normal: {
								type: 'solid'
							}
						},
						tooltip: {
							formatter: 'y = 0.5 * x + 3'
						},
						data: [[{
							coord: [0, 3],
							symbol: 'none'
						}, {
							coord: [20, 13],
							symbol: 'none'
						}]]
					}
				},
				{
					name: 'III',
					type: 'scatter',
					xAxisIndex: 2,
					yAxisIndex: 2,
					data: [
						[10.0, 7.46],
						[8.0, 6.77],
						[13.0, 12.74],
						[9.0, 7.11],
						[11.0, 7.81],
						[14.0, 8.84],
						[6.0, 6.08],
						[4.0, 5.39],
						[12.0, 8.15],
						[7.0, 6.42],
						[5.0, 5.73]
					],
					markLine: {
						animation: false,
						label: {
							normal: {
								formatter: 'y = 0.5 * x + 3',
								textStyle: {
									align: 'right'
								}
							}
						},
						lineStyle: {
							normal: {
								type: 'solid'
							}
						},
						tooltip: {
							formatter: 'y = 0.5 * x + 3'
						},
						data: [[{
							coord: [0, 3],
							symbol: 'none'
						}, {
							coord: [20, 13],
							symbol: 'none'
						}]]
					}
				},
				{
					name: 'IV',
					type: 'scatter',
					xAxisIndex: 3,
					yAxisIndex: 3,
					data:     [
						[8.0, 6.58],
						[8.0, 5.76],
						[8.0, 7.71],
						[8.0, 8.84],
						[8.0, 8.47],
						[8.0, 7.04],
						[8.0, 5.25],
						[19.0, 12.50],
						[8.0, 5.56],
						[8.0, 7.91],
						[8.0, 6.89]
					],
					markLine: {
						animation: false,
						label: {
							normal: {
								formatter: 'y = 0.5 * x + 3',
								textStyle: {
									align: 'right'
								}
							}
						},
						lineStyle: {
							normal: {
								type: 'solid'
							}
						},
						tooltip: {
							formatter: 'y = 0.5 * x + 3'
						},
						data: [[{
							coord: [0, 3],
							symbol: 'none'
						}, {
							coord: [20, 13],
							symbol: 'none'
						}]]
					}
				}
			]

		}),10),



		'扩散特效'+
		sceg(jSoff({
			xAxis: {
				scale: true
			},
			yAxis: {
				scale: true
			},
			series: [{
				type: 'effectScatter',
				symbolSize: 20,
				data: [
					[172.7, 105.2],
					[153.4, 42]
				]
			}, {
				type: 'scatter',
				data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
				
				],
			}]



		}),10),



		].join(br)
		),
		
		
		
		
		
		
		
		detail('【树形图】tree',[
		
		'矩形树图'+
		sceg(jSoff({
			series: [{
				type: 'treemap',
				data: [{
					name: 'nodeA',            // First tree
					value: 10,
					children: [{
						name: 'nodeAa',       // First leaf of first tree
						value: 4
					}, {
						name: 'nodeAb',       // Second leaf of first tree
						value: 6
					}]
				}, {
					name: 'nodeB',            // Second tree
					value: 20,
					children: [{
						name: 'nodeBa',       // Son of first tree
						value: 20,
						children: [{
							name: 'nodeBa1',  // Granson of first tree
							value: 20
						}]
					}]
				}]
			}]
			
			
			
		}),10),
		
		
		'横向树图'+
		sceg(jSoff({
		tooltip: {
			trigger: 'item',
			triggerOn: 'mousemove'
		},
		legend: {
			top: '2%',
			left: '3%',
			orient: 'vertical',
			data: [{
				name: 'tree1',
				icon: 'rectangle'
			} ,
			{
				name: 'tree2',
				icon: 'rectangle'
			}],
			borderColor: '#c23531'
		},
		series:[
			{
				type: 'tree',
				name: 'tree2',
				data: [{
					"name": "flare",
					"children": [
						{
							"name": "flex",
							"children": [
								{"name": "FlareVis", "value": 4116}
							]
						},
						{
							"name": "scale",
							"children": [
								{"name": "IScaleMap", "value": 2105},
								{"name": "LinearScale", "value": 1316},
								{"name": "LogScale", "value": 3151},
								{"name": "OrdinalScale", "value": 3770},
								{"name": "QuantileScale", "value": 2435},
								{"name": "QuantitativeScale", "value": 4839},
								{"name": "RootScale", "value": 1756},
								{"name": "Scale", "value": 4268},
								{"name": "ScaleType", "value": 1821},
								{"name": "TimeScale", "value": 5833}
						]
						},
						{
							"name": "display",
							"children": [
								{"name": "DirtySprite", "value": 8833}
						]
						}
					]
				}],

				top: '10%',
				left: '20%',
				bottom: '22%',
				right: '28%',

				symbolSize: 7,

				label: {
					normal: {
						position: 'left',
						verticalAlign: 'middle',
						align: 'right'
					}
				},

				leaves: {
					label: {
						normal: {
							position: 'right',
							verticalAlign: 'middle',
							align: 'left'
						}
					}
				},

				expandAndCollapse: true,

				animationDuration: 550,
				animationDurationUpdate: 750
			}
		]

		}),10)
		].join(br)
		)
	].join(br)
};


function sel(uriA,x,p,pp,ppp){
	var ux=(p?(pp?(ppp?ppp+'/':'')+pp+'/':'')+p+'/':'')+x;
	for(var i=0,l=uriA.length;i<l;i++){
		var u=uriA[i];
		if(ux==u || u.indexOf(ux)>=0){
			return 1
		}
	}
	return 0
}

function questionA(){
	var A=[];
	$('#solveGround .task.seled').each(function(){
		A.push(furi($(this))[0].join('/'))
	});
	return A
}


