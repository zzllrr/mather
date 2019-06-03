/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var Alge={//代数表达式 本质上是对象
/*从常数（自然数 整数 小数 分数（有理数、有限小数和无限循环小数） 无理数（无限不循环小数：无理代数数、超越数） 复数（实数、虚数）） 到 含变量（单、多）和运算（运算符、函数）的式子 


所有代数式：
	属性：dom、vars（变量列表）、D（定义域，默认是实数域）
	需支持返回公式显示（html、mathml、LaTex）、
			简化表达式（降幂排序、字母表排序、字典排序）、
			因式分解形式（默认）、
			展开式、
			赋值计算

变量：可指代各种形式的代数：常数、多项式、函数式、矩阵、向量、张量、命题、集合、置换、关系，
	属性：变量列表，取值范围


常量：
	需支持返回不同精度、小数位、四舍五入或向上向下取整等

	复数，需支持返回三种形式（代数、三角、指数）

*/
	build:{//直接构造
		js:function(s){//从JS表达式中构造，得到整数或有限位浮点小数（精度不可控，完全依赖JS），即有理数
			var n=''+eval(s),sim=FracReduct(n);
			return {dom:DC+'num>'+sim+dc,vars:[],D:'Q', simp:'self', type:'Num', t:'Alge'};
		},
		obj:function(exp,dom,vars,D,type){//直接构造对象
			/*
				exp 以Unicode输入的公式
				dom lamda表达式（运算符都是前缀）字符串
				vars 变量列表数组
				D 各个变量的定义域（集合数组，与vars中变量顺序保持一一对应）
					{1,3,4} 有限集
					
					
					N 自然数 = Z0非负整数
					Z 整数 Z-0非零整数  +Z正整数 -Z负整数 Z0非负整数 -Z0非正整数
					D 小数 
					P 素数 P<k 小于k的素数 Pk 第k个素数
					Q 有理数 +Q正有理数 -Q负有理数
					R 实数 +R正实数 -R负实数
					C 复数 Ci纯虚数 
					M 矩阵环 Mm,n m×n阶矩阵 Mn n阶方阵
					V 向量
					S 集合
					
					
					ZP 整系数多项式环
					1P 首1整系数多项式环 （首项系数为1）
					QP 有理系数多项式环
					
					
					常量：
					I 单位矩阵
					O 零矩阵（字母O，不是数字0）
					e 自然常数：是超越数
					π 圆周率：是超越数
					i 虚数单位
					γ 欧拉常数：有理数/无理数 未知
					Φ 黄金分割 (√5-1)/2 ≈ 0.618  其倒数 是(√5+1)/2 ≈ 1.618 
						满足恒等式：
							Φ²+Φ-1=0
							Φ = 1-Φ² = 1/(1+Φ) = 1/Φ-1 = (1-Φ)/Φ
							1/Φ = 1+Φ = Φ/(1-Φ)
							1-Φ = Φ² = Φ/(1+Φ) = (1-Φ²)² = (1+Φ)²(1-Φ)² = (1+Φ)²Φ⁴

					∞ 无穷大 
					∅ 空集
					⋯ 
					⋮
					⋰
					⋱
					⁞
JS中内置的数学无理数常数

Math.E
Math.LN10
Math.LN2
Math.LOG10E
Math.LOG2E
Math.PI
Math.SQRT1_2
Math.SQRT2
				simp 最简dom（用于存储和判断，表达式等价）：self表示：原dom已经是最简形式
				
				type 指定表达式结果的类型：
					常数Num
					矩阵Mtrx
					集合Set
					向量Vect
					多项式Polynm
					命题Prop
					关系Rlt
					置换Perm
			*/
			var d=dom?dom:exp2dom(exp);
			
			var A={dom:d,vars:vars,D:D, simp:'', type:type, t:'Alge'};
			return A
		}
	},
	is:{//布尔逻辑
		b1:{//一元关系
			"C":function(A){return !isNaN(+A) || !A.vars || A.simp && Alge.is.b1.C(A.simp)},//是否为数学常数 等价于
/*
				数字（可以是字符串形式，字符串表达式只能表示0、正负整数、有限小数）
				无变量的表达式 A.vars==''
				有变量，但简化式是常量 sin(x+1-x)


				复数表达式 a+bi
*/
				
			"inN":function(A){return +Alge.is.b2('=',A,Alge.build.I(A.length))},//是否为自然数

		},
		b2:{//二元关系
			"=":function(A,B){
				return +(A.length==B.length && A[0].length==B[0].length && Alge.toStr(A,'txt')==Alge.toStr(B,'txt'))
			},
			"≠":function(A,B){
				return +!Alge.is.b2['='](A,B)
			},

			"⊆":function(A,B){//定义表达式的包含关系：前者在后者中
				var m=A.length,n=A[0].length;
				if(A.length!=B.length || A[0].length!=B[0].length){return 0}
				for(var i=0;i<m;i++){
					var Ai=A[i],Bi=B[i];
					for(var j=0;j<n;j++){
						var Aij=Ai[j];
						if(Aij && Aij!=Bi[j]){
							return 0
						}
					}
				}
				return 1
			},
			"⊂":function(A,B){return +(Alge.is.b2['⊆'](A,B) && !Alge.is.b2['='](A,B))},
			"⊇":function(A,B){return +Alge.is.b2['⊆'](B,A)},
			"⊃":function(A,B){return +(Alge.is.b2['⊆'](B,A) && !Alge.is.b2['='](A,B))},
			"⊄":function(A,B){return +(!Alge.is.b2['⊂'](A,B))},
			"⊅":function(A,B){return +(!Alge.is.b2['⊃'](A,B))},
			"⊈":function(A,B){return +(!Alge.is.b2['⊆'](A,B))},
			"⊉":function(A,B){return +(!Alge.is.b2['⊇'](A,B))},
		}
	},
	fromStr:function(s,p){//p指定类型，不同数学对象环境，满足不同的运算律
		var d=exp2dom(s);//函数来自 exp.js，将来需整合，删除exp.js
		


		return A
	},

	toStr:function(A,typ){//转成文本
		/* type输出类型
			txt纯文本、html（显示）、mathml、LaTex
		*/

		var type=typ||'html',txt=type=='txt',r=[];


	},
	opr1:function(op,A){
//一元运算
		var C=[];

		if(op=='simp'){//化简
			var dm='dom'+(new Date()).getTime();
			$('#dom').append('<div id='+dm+'>'+A.dom+dc);
			var d=$('#'+dm);
			
			
			
			A.simp=s;
			return A
		}
	},
	opr2:function(op,A,B){
//二元运算
/*
	同类对象之间运算，返回对象或其他值
	关系、逻辑型运算，返回逻辑值
	
*/
		var C=[];

		if(op=='^'){//幂
			return Alge.pow(A,B)
		}
	}

};
