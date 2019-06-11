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

solve={}, graphic={}, show={}, wiki={},course={},drill={},topic={},pitfall={},unsolved={},thought={},refer={},
solves={}, graphics={}, shows={}, wikis={},courses=ZLR(subject0), drills=ZLR(subject0),topics={},pitfalls={},unsolveds={},thoughts={},refers={},
solveThen={}, graphicThen={}, showThen={}, wikiThen={},courseThen={},drillThen={},topicThen={},pitfallThen={},unsolvedThen={},thoughtThen={},referThen={},
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

	'Canvas':[
	
		href(Hs+'developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial','Canvas API'),
		
	detail('2D',[	
		detail(gM('Initialize'),[
			scegj(`
$('#input0Preview').html('<canvas id=ican width=300 height=300></canvas>');
var ican=$('#ican'),ct=ican[0].getContext('2d')`,0),
		].join(br)),
		
		detail(gM('Rectangle'),[
			'***Rect(x,y,width,height)',
			gM('Stroke')+scegj('ct.strokeRect(10, 20, 200, 150)',13),
			
			gM('Fill')+scegj('ct.fillRect(10, 20, 200, 150)',11),
			
			gM('Clear')+scegj('ct.clearRect(10, 20, 200, 150)',12),

		].join(br)),
		

		detail(gM('Style'),[
			'***Style=color|pattern|gradient',
			gM('Stroke')+scegj("ct.strokeStyle='rgba(0, 0, 200, 0.5)'",14),
					
			gM('Fill')+scegj("ct.fillStyle='rgba(0, 0, 200, 0.5)'",12),

			detail(gM('Line Style'),[
				gM('Width')+scegj('ct.lineWidth=4'),
				scegj("ct.lineCap='butt'")+'|round|square',
				scegj("ct.lineJoin='miter'")+'|round|bevel',
				scegj('ct.miterLimit=10.0'),
				
				detail(gM('Dash'),[
					scegj('ct.setLineDash([1,2])'),
					scegj('ct.lineDashOffset=3'),
					scegj('var dashA=ct.getLineDash()'),
					
				].join(br)),
				
			].join(br)),
			
			gM('Opacity')+scegj('ct.globalAlpha=0.5'),

			detail(gM('Gradient'),[
				gM('Linear')+'(x1,y1,x2,y2)',scegj('var lg=ct.createLinearGradient(0,0,150,150)',30),
				
				gM('Radial')+'(x1,y1,r1,x2,y2,r2)',scegj('var rg=ct.createRadialGradient(75,75,0,75,75,100)',30),
				
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
				scegj("ct.filter='blur(5px)'"),
			].join(br)),
			
			detail(gM('Pattern.v')+' createPattern(image, repeatType)',[
				'repeatType=repeat|repeat-x|repeat-y|no-repeat',

				scegj(`
var img=new Image()
img.src='img/ZIL.png';
img.onload=function(){
	var ptn =ct.createPattern(img,'repeat')
	ct.fillStyle=ptn;
	ct.fillRect(0,0,150,150)

}
`,0)

			].join(br)),
			
			detail(gM('shadow')+' *Offset[XY], *Blur, *Color',[
scegj(`			
	ct.shadowOffsetX = 2;
  	ct.shadowOffsetY = 2;
  	ct.shadowBlur = 2;
  	ct.shadowColor = 'rgba(0, 0, 0, 0.5)'
`,0)				
			].join(br))
		].join(br)),


		detail(gM('Text'),[
			gM('Font')+scegj("ct.font='48px serif'"),
			gM('Align')+scegj("ct.textAlign='start'")+'end|left|right|center',
			
			gM('Base Line')+scegj("ct.textBaseline='alphabetic'")+'top|hanging|middle|ideographic|bottom',
			
			gM('Direction')+scegj("ct.direction='ltr'")+'rtl',
			
			
			'fillText(text, x, y [, maxWidth])',
			scegj("ct.fillText('Hello Mather', 10, 50)"),
			
			'strokeText(text, x, y [, maxWidth])',
			scegj("ct.strokeText('Hello Mather', 10, 50)"),
		
			gM('Measure')+scegj(`
				var t=ct.measureText('foo');
				t.width
			`,0)
		].join(br)),

		detail(gM('Begin Path'),[
			gM('Begin')+scegj('ct.beginPath()'),
			
			gM('Move')+' moveTo(x,y)'+scegj('ct.moveTo(125,125)',9),

			detail('Path2D()',[
				scegj('var P1=new Path2D()'),
				gM('Clone')+scegj('var P2=new Path2D(P1)'),
				gM('SVG Path')+'d('+gM('String')+')'+scegj("var P3=new Path2D('M10 10 h 80 v 80 h -80 Z')",15),
				
				'Path2D.addPath(path [, transform])',
			].join(br))

		].join(br)),
		
		
		detail(gM('Path Shape'),[

			gM('Line')+' lineTo(x,y)'+scegj('ct.lineTo(155,150)',9),
			
			
			gM('Rectangle')+' rect(x,y,width,height)',
				scegj('ct.rect(55,50,100,200)',7),
				
			gM('Ellipse')+' ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)',
				scegj('ct.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI)',10),	
			
			gM('arc')+' arc(x,y,radius,startAngle('+gM('rad')+'),endAngle('+gM('rad')+'),anticlockwise)',
			scegj('ct.arc(50, 50, 100, 100, 0, Math.PI/180*45,1)',6),
			
			gM('arc')+' arcTo(x1,y1,x2,y2,radius)',
			scegj('ct.arcTo(50, 50, 100, 100, 80)',8),
			
			gM('Quadratic Bezier')+' quadraticCurveTo(cp1x, cp1y, x, y)',
			
			scegj('ct.quadraticCurveTo(60,120,65,100)',19),
			
			gM('Bezier')+'bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)',
			
			scegj('ct.bezierCurveTo(85,25,75,37,75,40)',16),
			
		
		].join(br)),
		
		detail(gM('End Path'),[

			gM('Close')+scegj('ct.closePath()'),

			gM('Stroke')+scegj('ct.stroke()'),
			gM('Fill')+scegj('ct.fill()'),
			detail(gM('Fill Method'),[
				scegj("ct.fill('nonzero')"),
				scegj("ct.fill('evenodd')"),
			].join(br)),
			
			gM('Clip')+scegj('ct.clip()'),


		].join(br)),
		
		detail(gM('Image'),[
			'drawImage(image, x, y)',
			scegj('ct.drawImage(img, 0, 0)'),
			
			'drawImage(image, x, y, width, height)',
			scegj('ct.drawImage(img, 0, 0, 100, 200)'),
			
			'drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)',
			scegj('ct.drawImage(img, 0, 0, 100,100, 20,20, 80, 80)'),
		
		
		].join(br)),
		

		detail(gM('Transform'),[
			'translate(x, y)',
			scegj('ct.translate(100,100)'),
			
			'rotate(angle('+gM('rad')+'))',
			scegj('ct.rotate(45 * Math.PI / 180)'),
			
			'scale(x,y)',
			scegj('ct.scale(1.2,0.5)'),
			
			
			detail(gM('Matrix'),[
				'transform(scaleX, skewX, skewY, scaleY, dx, dy)',
				'setTransform(scaleX, skewX, skewY,scaleY, dx, dy)',
				gM('Transformation Matrix')+zx("$zmtrx([['scaleX','skewY','dx'],['skewX','scaleY','dy',[0,0,1]]])$"),
				scegj('ct.setTransform(1, 0, 0, 1, 0, 0)'),
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
			
			scegj('ct.putImageData(imgD, 0, 0)'),
				
				
		].join(br)),
		
		
		detail(gM('Option'),[
			detail(gM('Smooth'),[
				scegj('ct.imageSmoothingEnabled=true'),
				scegj("ct.imageSmoothingQuality='low'")+'|high',
			].join(br)),
			
			detail(gM('Point'),[
				detail(gM('Path'),[
					'(x, y)',
					'(x, y, fillRule)',
					'(path, x, y)',
					'(path, x, y, fillRule)',
					scegj('var b=ct.isPointInPath(10,10)'),
					].join(br)),
				
				detail(gM('Stroke'),[
					'(x, y)',
					'(path, x, y)',
					scegj('var b=ct.isPointInStroke(10,10)'),
					].join(br)),
			].join(br)),
			
			
			gM('Region')+scegj(`
ct.beginPath();
ct.arc(70, 80, 10, 0, 2 * Math.PI, false);
ct.fill();
ct.addHitRegion({id: "circle"});

$(ct.canvas).on("mousemove", function(e){
  if(e.region) {
    console.log("hit region:" + e.region);
  }
})
`,0),
			gM('Focus')+scegj('ct.drawFocusIfNeeded(element)')+'|(Path2D, element)',
	
			gM('Attribute')+scegj('ct.getContextAttributes()'),
				
		
			detail(gM('Composite'),[
				'globalCompositeOperation=type',
				'[source|destination]-[over|atop|in|out]',
				'[hard|soft]-light',
				'color-[dodge|burn]',
				'lighter copy xor multiply','screen overlay darken lighten',
				'difference exclusion hue','saturation color luminosity',

				scegj("ct.globalCompositeOperation='source-over'",0),
			
			].join(br)),
].join(br)),
		
		detail(gM('Save'),[
			scegj('ct.save()'),
			scegj('ct.restore()'),
			
			detail('canvas',[
				detail('toDataURL()',[
					scegj("var u=ct.canvas.toDataURL('image/png')"),
					scegj("var u=ct.canvas.toDataURL('image/jpeg',0.5)"),
				].join(br)),
				detail('toBlob(callback, type, encoderOptions)',[
					scegj("var b=ct.canvas.toBlob(callback, type, encoderOptions)",0)
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
	
	'Markdown':[
		detail(gM('Style'),[
			[scHotk('Ctrl + I'),XML.wrapE('i',gM('Italic')),sceg('*ABC*'),sceg('_ABC_')].join(''),
			[scHotk('Ctrl + B'),XML.wrapE('b',gM('Bold')),sceg('**ABC**')].join(''),
			
			[XML.wrapE('b',XML.wrapE('i',gM('Bold Italic'))),sceg('***ABC***')].join(''),
			
			[XML.wrapE('del',gM('Strikeline')),sceg('~~ABC~~')].join(''),
			[XML.wrapE('mark',gM('Highlight')),sceg('==ABC==')].join(''),
			[scHotk('Ctrl + U'),SCtv('underline',gM('Underline')),sceg('__ABC__')].join(''), 
				
	
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
				
		].join(br))+


		detail(gM('Structure'),[


			'H1'+Arrf(sceg,['# '+gM('H1')]),
			'H2~H4'+Arrf(sceg,['## ','### ','#### ']),
			'H5~H6 '+Arrf(sceg,['##### ','###### ']),
			[gM('Contents'),Arrf(sceg,['[TOC]','[UTOC]'])].join(''),
	
			[gM('Horizontal Line'),sceg('---\n')].join(''),
		].join(br))+
			
		detail(gM('Math'),[
		

			[gM('Math Formula')+' LaTeX',sceg('$x^2=4$')].join(''),
			[gM('Math Formula')+' ID',sceg('$x^2=4$#'+gM('Formula')+'1#')].join(''),
			[gM('Math Formula Reference'),sceg('$@'+gM('Formula')+'1@$')].join(''),

		].join(br))+
	
		detail(gM('Code'),[
		
	
			[gM('Code Block'),sceg('``` ABC ```')].join(''),

			['JS eval '+gM('Code Result'),sceg('$$2+3$$')].join(''),
	

		].join(br))


	
	].join(br)
};

var calcCat={
	'Number':[
		'Real',
		'Complex',
	],
	'Matrix':[
		'Real',
		'Complex',
		'Boolean',
	],
	'Series':[
	],
	'Analytic Function':[

	],
	'Proposition':[
		
	],
	'Permutation':[
		
	],
	'Relation':[
		
	],
	'Set':[
		
	]
};