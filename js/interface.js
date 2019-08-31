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
editorThen={}, solveThen={}, graphicThen={}, wikiThen={},courseThen={},drillThen={},topicThen={},pitfallThen={},unsolvedThen={},thoughtThen={},referThen={},
/*
	


单数名k，存储执行函数( 供Go按钮调用,例如solve ) 或字符串结果(例如navhead)
复数名ks，存储目录结构，默认第一个键值index存储一级目录索引
单数名kThen, 界面工具加载后的执行函数

键有歧义时，用路径URI


tooltip[tool].k，存储提示工具栏	键使用路径URI

*/




tooltip={
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


