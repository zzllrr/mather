/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
/*
	[$katex$]…[title]—[data-tip]“[data-eg]
	gM…gM—“
	Greatest Common Divisor…a b c—GCD“18 27
	
*/
solves[2199]={sbj2s:['Number','Sequence'],sbj2:{

	'Number':[
		{'Express':[
			{'数↔字':[
				{'Display':['n→上标','n→下标','上下标→n','上下标→html']},
				{'本地化':['本地化数字','1→一','1→一元','1→壹圆']},
				{'古代数字':['罗马数字…数字 是否小写\n罗马数字（用,表示横线）']}		//	'甲骨文 钟鼎文（金文）筹算 古埃及 古巴比伦 古希腊 玛雅'
			]},


			{'单位换算':[
				{'角度':[
					'弧度→角度°…数字（小数，分数）&是否有π“2/3&1',
					'角度°→弧度…数字（小数）&是否返回π“60&1'
				]},
			]},

			{'进制':[
				{'60进制':['秒→度(时) 分 秒','度(时) 分 秒→秒“1 2 3']},
				{'转换':['进制转换…数字n&进制a,进制b“101&2,16']},
			]},
		]},
		{'Classification':[
			{'Positive Integer':[
				{'Power':['幂的末位…底数,幂,末几位“27 5 3', '$a^b÷c的余数$…a,b,c“27 5 3']},
				{'约数与倍数':['Greatest Common Divisor…a b c—GCD“18 27', 'Least Common Multiple…a b c—LCM“18 27', '辗转相除法']},
				{'Divide':[
					{'数位':[
						'?能被m整除…RegExp,m\n.[123](..)\1{2},m\n1a34b',
						'n能被?整除…n,RegExp\n.[123](..)\1{2},m\n1a34b',
						]},
					{'排列':['数字串S选排列n能被M整除不能被N整除…S&n&M&N']},
					{'区间':['n以内能被p整除不能被q整除…区间n 整数p 整数q',
						'n以内各位数字之和能被m整除的个数…区间n 整数m']},
				]},


				{'分拆':['数和…和N,M个,MIN,MAX,允许重复dup&全满足pos&全不满足neg&有数字满足pos1&有数字不满足neg1\n条件表达式1,2,2n,3n-1,质数p,合数c\n例如：77,3,2,,&p']},

				{'扑克游戏':['24点']}
			]},

			{'Prime':[
				{'Factorization':['质因数分解…n&[pc]\nn:数字（或含字母）\n参数p（默认）、c分别指定字母为质数、合数（非0）', '质因数分解（全部因子）']},
				{'质数统计':['其中质数…a~b\na,b,c', '区间内质数个数…区间n\nn以内']},
				{'质数阶乘':['$p_n\\#$', '$p\\#内质数个数$…n(质数阶乘pn#以内)\np#(质数阶乘p#以内)\n&nodtl不需要过程']},
				{'最值':['小于n的最大质数', '大于n的最小质数']},
				{'Coprime':['Jacobi符号…a,q']}
			]},

			
			{'Natural':[
				{'排列组合':['排列','组合']},
				{'Factorial':['$n!$','$n!!$—双阶乘', '$n!的末零数$…n']},
				{'Digit':['数根dr']},
			]},

			{'Integer':[
				'竖式计算…算式&保留小数位数“124/3&3',
			]},

			{'Fraction':[
				{'假分数':['假分数→带分数','带分数→假分数…k[又,]m/n']},
				{'Simplify':['约分…a/b&是否化成带分数']},
				{'通分':['通分比较大小','通分加减运算…支持多个分数加减式']},
				{'分子分母':['分子分母积等于n','分子分母和等于n']},


			]},

			{'Decimal':[
				{'记数':['科学记数法…数字n,小数位数m','工程记数法']},
				{'转成分数':['小数→百分数…小数,循环节长度','小数→分数…小数,循环节长度']},
				{'精度':['保留m位小数…数字n,位数m','保留有效数字…数字n,有效位数m']},
				'竖式计算…算式&保留小数位数“124/3&3',

			]},

			{'Rational':[
				{'四则运算':['$+$…加','$-$…减','$×$…乘','$÷$…除']},
				{'Simplify':['有理数幂化简…系数,有理数,幂\n或者表达式','分子有理化','分母有理化']}
			]},
				
			{'Irrational':[
				{'精度':['$π$…小数位数—圆周率','$e$…小数位数—自然常数']},

			]},

			{'Algebraic Number':[

			]},

			{'Transcendental':[
				{'判断':['是否超越数']}
			]},

			{'Real':[
				{'Unary Operation':[
					{'Power':['$x^2$','$x^3$','$x^y$…x,y']},
					{'开方':$A(zlrA3("$kroot('x'",ZLR(" ,2 ,3 ,'n'"),')$'))},
					{'指数':$A(['e^x','e^x-1'])},
					{'对数':['$\\ln$—自然对数','$\\ln(x+1)$','$\\lg$—常用对数','$\\log_2x$','$\\log_xy$…x,y—对数']},
					{'三角函数':$A(['\\sin','\\cos','\\tan', '\\cot','\\sec','\\csc',
								'\\arcsin','\\arccos','\\arctan', "$kxf('arccot')$","$kxf('arcsec')$","$kxf('arccsc')$"])},
					{'双曲函数':$A(['\\sh','\\ch','\\th', '\\cth',"$kxf('sech')$","$kxf('csch')$",
								'\\sh^{-1}','\\ch^{-1}','\\th^{-1}', '\\cth^{-1}',"$kxf('sech')$^{-1}","$kxf('csch')$^{-1}"])},
				]},
				
				{'Multiary Operation':[
					{'四则':['$+$…Plus','$-$…Minus','$×$…Times','$÷$…Divide']},
					{'Calculator':['Numerical Calculator JS Native','Numerical Calculator','Symbolic Calculator']},
				]},
			]},
	
			{'Complex':[
				{'形式转换':['代数形式','三角形式','指数形式']},
				{'多元运算':[
					{'四则':['$+$…加','$-$…减','$×$…乘','$÷$…除']},
				]}
			]},
		]},
		
		{'Equation':[
			{'代数方程':[
				{'Unary':['一元一次…a,b&x\nax+b=0','一元二次…a,b,c&x\nax^2+bx+c=0','一元三次…a,b,c,d&x\nax^3+bx^2+cx+d=0','一元四次…a,b,c,d,e&x\nax^4+bx^4+cx^2+dx+e=0',
					'十字相乘法','根与系数关系'
				]},
				{'不定方程':['一次不定方程…矩阵形式\n只要正整数解']},
				
				
			]},
			
			{'代数方程组':[
				{'一次方程组':['二元一次','三元一次','多元一次']}
			]},


			{'同余方程':[
				{'Unary':['一元一次…①标准形式a,b,m\nax+b≡0 (mod m)\n②除法形式b/a,m\nax≡b (mod m)\n③简化形式b,m\nx≡b (mod m)\n④完整形式ax+b≡c (mod m)',
					'一元二次…①标准形式a,b,c,m\nax^2+bx+c≡0 (mod m)\n②完整形式',
					'一元三次…①标准形式a,b,c,d,m\nax^3+bx^2+cx+d≡0 (mod m)\n②完整形式',
				]}

			]},
			
			{'同余方程组':[
				{'一次':['一元一次…①[矩阵形式a,b;]&同模m\n&1（应用孙子定理）\n②[矩阵形式a,b,不同模m;]\nax+b≡0 (mod m)\n③除法形式b1,b2/a1,a2&模m1,m2\nax≡b (mod m)\n④简化形式b1,b2&模m1,m2\nx≡b (mod m)\n⑤完整形式，用;隔开多个方程',
				
					'多元一次…①[矩阵形式a,b,c,d;]&同模m\nax+by+cz≡d (mod m)\n②[矩阵形式a,b,c,d,不同模m;]\nax+by+cz≡d (mod m)'
				]}
				
			]},
		]},

		{'Inequation':[
			{'Unary':['一元一次…ax+b','一元二次','一元三次','一元四次'

			]},
		]},
	],

	'Sequence':[
		{'通项公式':[
			{'有限项':['第n项','前n项','前n项和','前n项积']},
			{'无限性':['极限','收敛性']},
		]},
		{'统计':[
			{'个数':['频数','频率','众数']},
			{'均值':['算术平均值','几何平均值','调和平均值']},
			{'最值':['最大值','最小值','极差']},
			{'分布':['中位数','标准差','方差']}
			
		]},
	],

}};

tooltip.solve['Number/Classification/Real/Multiary Operation/Numerical Calculator JS Native']=XML.wrapE('style',
		``
	)+'';


solveThen['Number/Classification/Real/Multiary Operation/Numerical Calculator JS Native']=function(){
	$('.inputTip[data-uri*="Numerical Calculator JS Native"]').attr('open','open');
	$('#iTextFold:contains(unfold_more)').click()
};
