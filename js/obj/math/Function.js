/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

var Fun={//抽象函数 [函数名, 参数数组expA] 	本质是数组
	build:{
		JS:function(t){//JS中的数学常数或函数，得到小数
/*
数学函数（共34个）

指数、对数	["exp", "expm1", "log", "log1p", "log10", "log2"]
	其中exp(x) 表示 e^x
	expm1(x) 表示e^x-1
	log(x) 表示ln x
	log1p(x) 表示ln (x+1)
	

（反）三角函数 	["asin", "acos", "atan", "atan2", "sin", "cos", "tan"]
	其中atan2(y,x) 接受两个参数
	
（反）双曲函数	["asinh", "acosh", "atanh", "sinh", "cosh", "tanh"]

近似、截取	["floor", "ceil", "trunc", "round", "fround", "clz32", "imul"]
	其中trunc(x) 截去小数部分，得到整数部分
	round(x) 四舍五入后的整数
	fround(x) 取与x最近的单精度浮点数
	clz32(x) 表示Count Leading Zeroes 32，取x转成二进制32位无符号整形数字开头0的个数
	imul(x,y) 表示两个整数按照类C语言的32位整数乘法运算结果
	
正负数	["sign", "abs"]

幂、开方	["sqrt", "cbrt", "hypot"]
	其中hypot() 函数返回它的所有参数的平方和的平方根



统计	["max", "min"]

随机	["random"]

常数（共8个）
	E		e 欧拉Euler自然常数
	LN10	ln 10
	LN2	ln 2
	LOG10E	log_{10}e
	LOG2E	log_{2}e
	PI		π
	SQRT1_2	√2 /2
	SQRT2      √2
*/
			return Math[t]
		},
		C:function(e,b,typ){//常数函数 e:表达式


		},
	},
	fromStr:function(s){/*数学lambda表达式→数组
		每个函数就是一个数组（常数，也是函数，是一个空数组）
		数组的属性：name→函数名
			rules→计算规则，函数满足的运算率数组[交换律，结合律，分配率，反交换率，反结合律]
			value: 数学lambda表达式
		函数的参数，就是数组的元素


		f1(f2,f3(f4,f2(f3,f1(f2,f2),f5(f7,f8(f9,f11(f11))),f6)))


		(()(()))

		f1(f2,f3(f4,f5(f6,f7(f8,f9),f10(f11,f12(f13,f14(f15))),f16)))
		
		
		Fun.fromStr('f1(f2,f3(f4,f5(f6,f7(f8,f9),f10(f11,f12(f13,f14(f15))),f16)))')
		
		
		Fun.toStr(Fun.fromStr('f1(f2,f3(f4,f5(f6,f7(f8,f9),f10(f11,f12(f13,f14(f15))),f16)))'))
			*/
		var t=''+s,A=[],tmp={},i=0;
		while(/\(.*\)/.test(t)){
			
			var ti=t.match(/[a-z\d\s]+\([^\(\)]*\)/ig)[0], tif=ti.split('(')[0].trim(), tic=ti.split('(')[1].split(')')[0].trim().replace(/ *, */g,',');
			t=t.replace(new RegExp(ti.replace(/ *([\(\)]) */g,' *\\$1 *'),'g'),'@'+i);
			tmp['@'+i]={'f':tif, 'c':tic};
			i++;
		}
		consolelog(t,tmp,i);
		var f=function(str){
			if(/@\d/.test(str)){
				var a=[],ts=tmp[str];

				
				if(/,/.test(ts.c)){
					a=Arrf(f,ts.c.split(','));

				}else{
					a.push(f(ts.c))
				}
				a.name=ts.f;
				return a
					
			}else{
				var a=[];
				a.name=str;
				return a
			}
		};
		return f(t)
		
	
	},
	toStr:function(A){//A→lambda str
		//函数.value就直接得到表达式			仅当函数.value失真，或者局部变化后.value未同步更新，才需要递归更新
		if(typeof A == 'string'){
			return A
		}
		if(A.length){
			var s=A.name;
			s+='('+Arrf(Fun.toStr,A)+')';
			return s;
		}else{
			return A.name||''
		}
		
	},


}, Mfn={//数学函数 [引用, 引用索引{}, 引用数组[]] 本质上数组对象
	build:{//直接构造（通过已知对象）
		Num:function(a){//基本（有理元素）数学对象
			//注意，Mfn对象中，表达式.f是num时，仅指自然数、正小数、正百分数，及著名常数

			if(isStr(a) || typeof a == 'number'){//
				return Mfn.fromStr(a)
			}
			
			return Mfn.fromStr(a.toStr())
		},
		NumC:function(t){//著名常数 eπγi
			var a=['@0$',{'c':t, 'f':'num', 'v':c},['']];
			a.type='Mfn';a.toStr=function(l,p){return Mfn.toStr(this,l,p)};a.ref=function(r){return Mfn.ref(this,r)};
			return a
		},
		Polynomial:function(a){
			
		},
		A:function(A,ref){//A是已知Mfn对象		ref是某一个子表达式的引用(@\d+$)
			var a=[].concat(A);a.type='Mfn';a.toStr=function(l,p){return Mfn.toStr(this,l,p)};a.ref=function(r){return Mfn.ref(this,r)};
			if(ref){
				a[0]=ref;
			}
			return a
		}

	},
	
	
	simRef:function(A,ref,p){/*化简子表达式，在原对象中修改	，返回新的ref引用地址
		参数ref 是A[1]中的索引
		参数p，指定环境，例如'Mtrx'
		*/
		
		var B=Mfn.build.A(A,ref), s0=B.toStr(), x=Mfn.opr1('=',B,p), s1=x.toStr();
		if(s0==s1){
			return ref
		}
		
		A[1]=x[1];
		A[2]=x[2];
		A[1][ref]=A[1][x[0]];
		
		
		
	},
	
	simp:function(A,ref,p){/*化简命令
		
		参数ref 是A[1]中的索引
		
		参数p命令：
		() 去括号
		/ 正有理数约分
		
		
		*/
		var l=A[2].length;
		
		
		
		if(ref){
			var i=+ref.replace(/\D/g,'');
			if(p=='()'){
				consolelog(ref,A[2],A);
				var ref1='@'+i+'$';
				if(!A[1][ref1]){
					ref1='@'+i+'&'
				}

				var ref2=A[1][ref1].c;
			}
			
			var f=function(x){return x.replace(new RegExp(regReg(ref),'g'), ref2)};
consolelog('下面开始替换()',ref,'替换成',ref2);
			for(var k=0;k<l;k++){
				if(A[2][k].indexOf(ref)>-1){
consolelog('k = ',k,' A[2][k]= ',A[2][k]);
					A[2][k]=f(A[2][k]);
					var r='@'+k+'&', o=A[1][r];
					if(!o){
						r='@'+k+'$';o=A[1][r];
					}
					consolelog(o);
					o.c=f(o.c);
					
					if(o.v && isArr(o.v)){
						if(isArr(o.v,1)){
							o.v[1]=Arrf(f,o.v[1])
						}else{
							o.v=Arrf(f,o.v)
						}
					}
					A[1][r]=o;
				}
				
			}
			return 
		}
		
		

		for(var i=0;i<l;i++){
			var t=A[2][i];
			if(p=='()' && /\(.+\)/.test(t)){
				Mfn.simp(A,'@'+i+'$','()')
			}
		}

	},
	
	uniRef:function(A,ref_A2){/*统一别称（不同的索引，指向同一实质）
	
		ref_A2是A[2]中的值（且非纯数字）
		
		*/
		var l=A[2].length;
		if(ref_A2){
			var i=A[2].indexOf(ref_A2), j=A[2].lastIndexOf(ref_A2);
			
			
			if(i==-1 || i == j){//无别称
				return
			}
			var ref1='@'+i+'&', ref2='@'+j+'&';
			if(!A[1][ref1]){
				ref1='@'+i+'$'
			}
			if(!A[1][ref2]){
				ref2='@'+j+'$'
			}
			consolelog('表达式含有 ',ref2,' 都要替换成 ',ref1);
			var f=function(x){return x.replace(new RegExp(regReg(ref2),'g'), ref1)};
			
			A[2][j]='';	//替换为空值
			A[1][ref2]={};
			if(A[0]==ref2){
				A[0]=ref1;
			}
			
			
			for(var k=0;k<l;k++){
				if(k!=i && k!=j){
					var t=A[2][k];
					
					consolelog('遍历k =',k,'表达式 t = ',t);
					if(t.indexOf(ref2)>-1){//表达式含有无效需替换的引用
						A[2][k]=f(t);
						var r='@'+k+'&', o=A[1][r];
						if(!o){
							r='@'+k+'$';o=A[1][r];
						}
						o.c=f(o.c);
						
						if(o.v && isArr(o.v)){
							if(isArr(o.v,1)){
								o.v[1]=Arrf(f,o.v[1])
							}else{
								o.v=Arrf(f,o.v)
							}
						}
						A[1][r]=o;
					}
				}
			}
			return Mfn.uniRef(A,ref_A2);//再执行一次，确保多个同义别称索引都被替换
		}
		
		for(var i=0;i<l;i++){
			var t=A[2][i];
			if(t && !/^\d+$/.test(t)){
				Mfn.uniRef(A,t)
			}
		}
		
		
	},
	
	
	ref:function(A,str){//获取索引（如不存在，则创建）
		consolelog('ref ',str);
		if(/^@\d+.$/.test(str)){
			return str
		}
		var S=''+str,S0=S[0],SP=S.replace('-',''), i=A[2].indexOf(S), j=i>-1?i:A[2].length, r='@'+j+'&';
		if(/@/.test(S)){

			if(/^[-√∛∜]@\d+.$/.test(S)){
				A[1][r]={'f':S[0],'c':S.substr(1)};

				
			}else if(/\|/.test(S)){
				A[1][r]={'f':'||','c':S.replace(/\|/g,'')};

				
			}else if(/^@\d+.[\!‼#]$/.test(S)){
				A[1][r]={'f':S.substr(-1),'c':S.substr(0,S.length-1)};

				
			}else if(/[\+\-]/.test(S)){
				A[1][r]={'f':'pms','c':S,'v':split(S,/[\+\-]/g)};

				
			}else if(/[×÷]/.test(S)){
				consolelog('S = ',S);
				A[1][r]={'f':'tds','c':S,'v':split(S,/[×÷]/g)};

				
			}else if(/^[@\$&\d]+$/.test(S)){
				A[1][r]={'f':'times','c':S,'v':Arrf(function(x){return '@'+x},S.split('@').slice(1))};

				
			}else if(/\^/.test(S)){
				A[1][r]={'f':'pow','c':S.split('^').join(),'v':S.split('^')};

				
			}else if(/_/.test(S)){
				A[1][r]={'f':'_','c':S.split('_').join(),'v':S.split('_')};

				

				
			}else{//函数名@..@..
				A[1][r]={'f':S.split('@')[0],'c':S.replace(/^[^@]+/g,''),'v':S.replace(/^[^@]+/g,'').split(',')};

			}
			
			A[2][j]=S;
			return r
		}
			
	consolelog(S,S0);
		S=S.replace('-','');
		var SA=S.split('/');
		if(S.indexOf('/')>0){//S是有理数

			var i=A[2].indexOf(SA[0]), j=i>-1?i:A[2].length, s='@'+j+'$';

			A[1][s]={'f':'num','c':SA[0],'v':Decimal.build.D(SA[0])};
			A[2][j]=SA[0];
			
			var i=A[2].indexOf(SA[1]), j=i>-1?i:A[2].length, t='@'+j+'$';

			A[1][t]={'f':'num','c':SA[1],'v':Decimal.build.D(SA[1])};
			A[2][j]=SA[1];
			
			var i=A[2].indexOf(s+'÷'+t), j=i>-1?i:A[2].length, u='@'+j+'&';

			A[1][u]={'f':'tds','c':s+'÷'+t,'v':[['÷'],[s,t]]};
			A[2][j]=s+'÷'+t;
			
		}else{
			
			var i=A[2].indexOf(S), j=i>-1?i:A[2].length, u='@'+j+'$';

			A[1][u]={'f':'num','c':S,'v':Decimal.build.D(S)};
			A[2][j]=S;

		}
	consolelog('u = ',u);
		
		if(S0=='-'){
			var i=A[2].indexOf('-'+u), j=i>-1?i:A[2].length, v='@'+j+'&';

			A[1][v]={'f':'-','c':u};
			A[2][j]='-'+u;
			return v;
			
		}else{
			return u;
		}

	},
	has:{//子元素
		"var":function(A,ref){//是否含单变量或自身就是单变量
			var o=A[1][ref||A[0]], of=o.f, oc=o.c, ov=o.v;
			if(of=='var' || of=='_'){
				return 1
			}
			if(/num/.test(of)){//一些字母代表著名常数，不认为是变量
				return 0
			}
			if(ov){
				for(var i=0,l=ov.length;i<l;i++){
					if(Mfn.has.var(A,ov[i])){
						return 1
					}
				}
			}else{
				return Mfn.has.var(A,oc)
			}
			return 0
		}
	},
	is:{//布尔逻辑
		b1:{//一元关系
			"var":function(A,ref){//是否单变量
				var o=A[1][ref||A[0]];
				return o && o.f=='var'
			},
			"var_":function(A,ref){//是否单变量（下标形式）
				var o=A[1][ref||A[0]];
				return o && o.f=='_'
			},
			"Var":function(A,ref){//是否广义单变量（含下标形式）
				var o=A[1][ref||A[0]];
				return o && (o.f=='_' || o.f=='var')
			},
			"num":function(A,ref){//是否num（自然数，非负小数，非负百分数）

				var o=A[1][ref||A[0]];
				return o && o.f=='num' && !isVar(o.c)
			},
			"Num":function(A,ref){//是否广义num（含字母常量）
				var o=A[1][ref||A[0]];
				return o && o.f=='num'
			},
			"frac":function(A,ref){//是否有理数形式
				var o=A[1][ref||A[0]];

				return o && o.f=='num' && !isVar(o.c) || 
					o.f=='tds' && o.v[0].length==1 && o.v[0][0]=='÷' && Mfn.is.b1.num(A,o.v[1][0]) && Mfn.is.b1.num(A,o.v[1][1]) || 
					o.f=='-' && Mfn.is.b1.frac(A,o.c)
			},
			"0":function(A,ref){//是否0
				var o=A[1][ref||A[0]];
				return o && o.c=='0'
			},
			"1":function(A,ref){//是否1
				var o=A[1][ref||A[0]];
				return o && o.c=='1'
			},
		},

		
		b2:{//二元关系
			"=":function(a,b){//输出字符串完全相等（外显表达式一样）
				return +(a.toStr()==b.toStr())
			},
			"==":function(a,b){//化简后相等（等值，等价，内涵实质相等）
				return +(Mfn.opr1('=',a).toStr()==Mfn.opr1('=',b).toStr())
			},
			"≠":function(a,b){
				return +(a.toStr()!=b.toStr())
			},
		}
	},
	fromStr:function(s){/*数学表达式→数组
注意：
		数学表达式  对空格比较敏感
		LaTex		空格不那么敏感



符号（中缀、前缀、后缀、围缀）	函数名

中缀
		+	sum
		-	minus
		* ×times
		/ ÷devide
		^ 	pow
		_	sub
		,	参数分隔符		一般与外围()同时使用	用于函数参数输入
		;	数组分隔符		一般与外围[]同时使用	用于矩阵元素输入
		mod 取余
		
		
		
	纯数字相关	. 小数点

前缀
		-	minus
		√  root
		㏒	log
		㏑  ln
		e^	exp
		
		
		SBS.Latex.func中涉及的函数（其中单字符除外）
		以及反双曲函数
后缀
		!
		!!	‼

		# 素数阶乘
		
		上⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻
		下₀₁₂₃₄₅₆₇₈₉₊₋
		
	纯数字相关	%
				‰
				‱
		
围缀
		()	优先运算、函数后及参数、
		[]	数组
		{}	集合
		<>  二元关系（有向）
		上下取整⌊⌋ ⌈⌉
		


需结合上下文，才能识别准确的案例：

		函数幂(参数)，表示迭代，而不是求幂

		常见函数名、前缀					后面有数字、字母 后面是参数（省略了括号）
		sinx
		cosπ
		√27
		∛27
		∜27
		
		
		数字、普通字母						后面有字母		一般表示乘法
		-4x
		-xy
		78y^2
		

		后缀								前面有()		括号表示优先运算，看成一个整体
		常见函数名、前缀					后面有()		括号中表示参数（如有多个参数，逗号隔开）
		普通字母（拉丁、希腊）、数字、符号 	后面有()		括号表示优先运算，看成一个整体，做乘法运算



运算优先级（从高到低）：
	括号
	百分数、小数 识别
	后缀
	
	函数名 前缀 优先识别
	
	下标
	上标
	
	√∛∜ 前缀
	
	数字字母，识别为乘法（省略了乘号）

	字母字母，识别为乘法（省略了乘号）
	- 前缀
	
	乘除
	加减

			*/
		var x=(''+s).replace(/^-0$/,'0'),AAA=[],tmp={},tmpA=[],i=0;
		
		consolelog('Mfn.fromStr    ',x);
		
		
		AAA.type='Mfn';AAA.toStr=function(l,p){return Mfn.toStr(this,l,p)};AAA.ref=function(r){return Mfn.ref(this,r)};
		
		if(isVar(x)){
			AAA.push('@0&',{'@0&':{f: 'var', c: x, v: x}},[x]);
			return AAA
		}
		if(nisd(x)){
			if(/-/.test(x)){
				AAA.push('@1$',{'@0$':{f: 'num', c: x.substr(1), v: Decimal.build.D(x.substr(1))},
					'@1$':{f: '-', c: '@0$'}
				},[x.substr(1),'-@0$']);

			}else{
				AAA.push('@0$',{'@0$':{f: 'num', c: x, v: Decimal.build.D(x)}
				},[x]);
			}
			return AAA
		}
		if(nisVid(x)){
			var xA=x.split('_');
			if(nisd(xA[1])){
				AAA.push('@2&',{'@0&':{f: 'var', c: xA[0], v: xA[0]},
					'@1$':{f: 'num', c: xA[1], v: Decimal.build.D(xA[1])},
					'@2&':{f: '_', c: '@0&,@1$',v:['@0&','@1$']}},
				[xA[0],xA[1],'@0&_@1$']);

			}else{
				AAA.push('@2&',{'@0&':{f: 'var', c: xA[0], v: xA[0]},
					'@1&':{f: 'var', c: xA[1], v: xA[1]},
					'@2&':{f: '_', c: '@0&,@1&',v:['@0&','@1&']}},
				[xA[0],xA[1],'@0&_@1&']);
			}
			return AAA
		}
		if(nisfrac(x)){
			var xA=x.replace('-','').split('/');
			if(/-/.test(x)){
				AAA.push('@3&',{'@0$':{f: 'num', c: xA[0], v: Decimal.build.D(xA[0])},
					'@1$':{f: 'num', c: xA[1], v: Decimal.build.D(xA[1])},
					'@2&':{f: 'tds', c: '@0$÷@1$',v:[['÷'],['@0$','@1$']]},
					'@3&':{f: '-', c: '@2&'}},
				[xA[0],xA[1],'@0$÷@1$','-@2&']);

			}else{
				AAA.push('@2&',{'@0$':{f: 'num', c: xA[0], v: Decimal.build.D(xA[0])},
					'@1$':{f: 'num', c: xA[1], v: Decimal.build.D(xA[1])},
					'@2&':{f: 'tds', c: '@0$÷@1$',v:[['÷'],['@0$','@1$']]}},
				[xA[0],xA[1],'@0$÷@1$']);
			}
			return AAA
		}


		//预处理
		x=x.replace(/ *log */g,'㏒').replace(/ *ln */g,'㏑')		//化成单个字符的好处，替换时不会误替换
			.replace(/ *e\^/g,' exp ')
			.replace(/ *!!+ */g,'‼')
			.replace(/，/g,',')
			.replace(/[⋅\*]/g,'×').replace(/[⋅\*]/g,'×').replace(/[/]/g,'÷')
			.replace(/ *\d+[\d\s]*\d* */g, function(x){return '('+x.replace(/\s/g,'')+')'}).replace(/ *\^ *\( *-\((\d+)\)\) */g,'^(-$1)')		//数字加括号
			.replace(new RegExp(' *'+'['+SBS.Num[0][0]+']+ *','g'), function(x){return '^('+sub2n(x.trim())+')'}).replace(/ *\^ */g,'^')
			.replace(new RegExp(' *'+'['+SBS.Num[0][1]+']+ *','g'), function(x){return '_('+sub2n(x.trim())+')'}).replace(/ *_ */g,'_').replace(/_([a-zα-ω])/ig,'_($1)')
			.replace(/  +/g,' ')
			
			.replace(/\^\(-1\)/g,'⁼')
		
		/*缓存 目标：表达式最终只剩下一个函数：@纯数字&

			下标									变成@	&
			括号、小数（百分数）					变成@	$（原子、伪原子）
			后缀									变成@	&
			
			数学函数 								变成@	#（无参函数）

			√∛∜ 后面有@	[$&]、单个字母			变成@	&（有参函数）

			√∛∜ 									变成@	#（无参函数）

原子类（原子、伪原子）：@ $ 括号、小数（百分数）、后缀
						、@ &（有参函数）、纯数字、单个字母(拉丁、希腊)

			原子^原子					指数函数		@	&（有参函数）


			[纯数字,字母]后字母，是乘法函数				@	&（有参函数）
			


			无参函数@  #后面的@  [$&]
				应识别为参数，整体变成函数 				@	&（有参函数）

			中缀				变成函数				@	&（有参函数）


			
			
			

测试用例：
		
		
		8!! = 8 !!
		-8! ! = -((8!)!)
		
		
		log(2,x)
		
		
		sin^2x = (sin x)^2
		
		sin2x = sin(2x)
		sinxy = sin (x y)
		
		sin^2xy = (sin (xy))^2
		
		3^2x = 3^2 x
		
		sinx^2 = sin(x^2)
		
		x^2/y^2 = (x^2) / (y^2)
		
		

		
		√xy = √x y
		√2x = √2 x


		√x+y = √x + y
		√x/y = √x / y
		√x^2√y = (√x)^2 √y
		
		xy^2z = x y^2 z
		a^2x  = a^2 x
		
		x_1^2 = (x_1)^2
		x^2_1（非法！） = x^(2_1)		这一点，与LaTex有区别
		
		
		
		
		
		-3-4+5	= ((-3)-4)+5
		-3.41%+8x	=(-(3.41%)) + (8 x)

		-x/3 = -(x/3)
		-2/3x = -(2/(3x))
		-(2/3)x  = (-(2/3)) x = -((2/3)x)	两种解释
		
		-2xy/3	=-(((2x) y)/3)
		-(2/3)xy
		
		-2xs/3yt = -(((2x)s)/((3y)t))
		

		
		被禁止的不规范的逆函数的写法，以及相应规范写法：
			sin^(-1)x = sin⁻¹x   ：arcsin x
			²^(-1) = ²^⁽⁻¹⁾ = ²^(⁻¹) : √
			2^^(-1)x = log₂x = log_2x : log(2,x)
			
		
		注意：正式的数学表达式，函数后⁻¹，表示反函数（逆函数，不是求倒数！）；
								函数后是其它正整数幂，则是求函数值的n次方（并不是迭代，这是一个历史遗留的学术传统缺陷！）
								函数后的幂有小括号围着，表示算子迭代（例如，求导时表示高阶导数）

		*/
		
	var cache=function(x){
			var t=x;
consolelog('cache开始 t = ',t);

		if(/^@\(\d+\)[\$&]$/i.test(t)){
			i++;
			
			t=t.replace(/[\(\)]/g,'');
			tmpA.push(t);
			consolelog('直接输出 ',t);
			return t
		}



		while(/\(.*\)/.test(t)){
consolelog('缓存括号',t);
			var ti=t.match(/\([^\(\)]*\)/ig)[0], tif='()', tic=ti.split('(')[1].split(')')[0].trim().replace(/ *, */g,','), tiv='',
				tai=tmpA.indexOf(ti), rg=new RegExp(ti.replace(/[\(\)\+\-\^\$]/g,' *\\$& *'),'g');
			if(/^\d+$/.test(tic)){
				tif='num';
				tiv=Decimal.build.D(tic);
			}
			consolelog('缓存括号ing,  t =  ', t, rg,tic,tiv);
			t=t.replace(rg,'@'+(tai<0?i:tai)+'$');
			if(tai<0){
				consolelog('缓存括号迭代,  t =  ', t,' i = ', i);
			
				i++;
				
				var j=i-1;
				tmpA.push(tif=='num'?tic:ti);	//tic:ti
				
				var ct=cache(tic);
				

				if(tif=='()'){
					tmp['@'+j+'$']={'f':tif, 'c':ct};
					tmpA[j]='('+ct+')';
				}else{
					tmp['@'+j+'$']={'f':tif, 'c':ct, 'v':tiv};
				}
				
				consolelog('tif= ',tif, 'tic= ',tic, 'ti= ',ti);
			}
		}



		while(/[a-zα-ω]_(@\d+\$|[a-zα-ω])/i.test(t)){
consolelog('缓存下标',t);
			var ti=t.match(/[a-zα-ω]_(@\d+\$|[a-zα-ω])/ig)[0].replace(/\s/g,''), tif='_', tiv=ti.split('_'), tic=ti,
				tai=tmpA.indexOf(tic), rg=new RegExp(' *'+ti.replace(/[\(\)\$]/g,' *\\$& *').replace(/[_]/g,' *$& *'),'g');

			t=t.replace(rg,'@'+(tai<0?i:tai)+'&');
			if(tai<0){
				
				var t0=tmpA.indexOf(ti[0]);
				tiv[0]='@'+(t0<0?i+1:t0)+'&';
				tic=tiv.join('_');
				
				tmp['@'+i+'&']={'f':tif, 'c':tiv.join(), 'v':tiv};
				tmpA.push(tic);
				i++;
				
				if(t0<0){
					tmp['@'+i+'&']={'f':'var', 'c':ti[0], 'v':ti[0]};
					tmpA.push(ti[0]);
					i++;
				}
			}
		}


		if(/,/.test(t)){
consolelog('缓存逗号',t);
			var tA=t.split(','),tif=',',tiv=[];
			for(var j=0,l=tA.length;j<l;j++){
				consolelog('i= ',i);
				tiv.push(cache(tA[j]));
				consolelog('i = ',i);
			}
			var tic=tiv.join();
			tmp['@'+i+'$']={'f':tif, 'c':tic, 'v':tiv};	//tiv是数组
			tmpA.push(tic);
			i++;
consolelog('tiv=',tiv,'@'+(i-1)+'$');
			return '@'+(i-1)+'$'
		}


		while(/\./.test(t)){
consolelog('缓存小数',t);
			var ti=t.match(/@\d+\$\.@\d+\$/g)[0], tiA=ti.split('.'), tif='num', tic=ti,ticc=tic.replace(/@\d+\$/g,function(x){return tmp[x].c}), tiv=Decimal.build.D(ticc),
				tai=tmpA.indexOf(tic), rg=new RegExp(ti.replace(/[\.\$]/g,'\\$&'),'g');

			t=t.replace(rg,'@'+(tai<0?i:tai)+'$');
			if(tai<0){
				tmp['@'+i+'$']={'f':tif, 'c':ticc, 'v':tiv};	//tiv是数组（小数）
				tmpA.push(ticc);
				i++;
			}
		}
		
		while(/\$[%‰‱]/.test(t)){
consolelog('缓存百分数（含符号%‰‱）',t);
			var ti=t.match(/@\d+\$[%‰‱]/g)[0], tif='num', tic=tmp[ti.replace(/.$/,'')].c+ti.substr(-1), tiv=Decimal.build.D(tic),
				tai=tmpA.indexOf(tic), rg=new RegExp(ti.replace(/(\$[%‰‱])/,'\\$1 *'),'g');

			t=t.replace(rg,'@'+(tai<0?i:tai)+'$');
			if(tai<0){
				tmp['@'+i+'$']={'f':tif, 'c':tic, 'v':tiv};	//tiv是数组（小数）
				tmpA.push(tic);
				i++;
			}
		}

		while(/[!‼#]/.test(t)){//		后缀前面只可能是：括号@1$  纯数字	单个字母(拉丁、希腊)
consolelog('缓存后缀',t);
			var ti=t.match(/([a-zα-ω]|@\d+[\$&]) *[!‼#]+/ig)[0].replace(/\s/g,''), tic=ti, tif=ti.substr(-1),
				tai=tmpA.indexOf(tic), rg=new RegExp(' *'+ti.replace(/([!‼#])/g,' *$1 *').replace(/[\$]/g,'\\$&'),'g');

			t=t.replace(rg,'@'+(tai<0?i:tai)+'&');
			if(tai<0){
				
				var t0=tmpA.indexOf(ti[0]);
				if(isVar(ti[0])){
					var ticc='@'+(t0<0?i+1:t0)+'&';
					tic=ticc;
				}
				
				
				tmp['@'+i+'&']={'f':tif, 'c':tic};
				tmpA.push(ti);
				i++;
				
				if(isVar(ti[0]) && t0<0){
					tmp[ticc]={'f':'var', 'c':ti[0], 'v':ti[0]};
					tmpA.push(ti[0]);
					i++;
				}
			}
		}


		var A=ZLR(SBSFUN);	//缓存三角双曲、及其他数学函数前缀
consolelog('缓存函数前',t);
		for(var k=0,l=A.length;k<l;k++){
			var Ak=A[k].replace(/⁻¹/,'⁼');
			while(t.indexOf(Ak)>-1){
				var ti=t.match(new RegExp(' *'+Ak+' *','g'))[0].replace(/\s/g,''), tic='', tif=ti,
					tai=i, rg=new RegExp(' *'+tif+' *','g');
					//这里强制使用全局g，因为按现有函数顺序遍历，可以避免误替换
				t=t.replace(rg,'@'+(tai<0?i:tai)+'#');
			//	if(tai<0){
					tmp['@'+i+'#']={'f':tif, 'c':tic};
					tmpA.push(tic);
					i++;
			//	}
			}
		}

consolelog('缓存函数之后',t);
		while(/⁼/.test(t)){
			tmp['@'+i+'$']={'f':'num', 'c':'1', 'v':Decimal.fromStr(1)};
			tmpA.push('1');
			i++;
			
			tmp['@'+i+'&']={'f':'-', 'c':'@'+(i-1)+'$'};
			tmpA.push('-@'+(i-1)+'&');
			t=t.replace(/⁼/g,'^@'+i+'&');
			i++;
		}
		
		
		
		while(/[√∛∜] *([a-zα-ω]|@\d+[\$&])/i.test(t)){
consolelog('缓存根号（后及单变量）',t);
			var ti=t.match(/[√∛∜] *([a-zα-ω]|@\d+[\$&])/ig)[0].replace(/\s/g,''), tif=ti[0], tic=ti.substr(1),
				tai=tmpA.indexOf(tic), rg=new RegExp(ti.replace(/[√∛∜]/,' *$& *').replace(/[\$]/g,'\\$&'),'g');

			t=t.replace(rg,'@'+(tai<0?i:tai)+'&');
			if(tai<0){
				
				var t0=tmpA.indexOf(ti[1]);
				if(isVar(ti[1])){
					var ticc='@'+(t0<0?i+1:t0)+'&';
					tic=ticc;
				}
				
				tmp['@'+i+'&']={'f':tif, 'c':tic};
				tmpA.push(tif+tic);
				i++;
				
				if(isVar(ti[1]) && t0<0){
					tmp[ticc]={'f':'var', 'c':ti[1], 'v':ti[1]};
					tmpA.push(ti[1]);
					i++;
				}
				
			}
		}
		while(/[√∛∜]/.test(t)){
consolelog('替换根号为无参函数',t);
			var ti=t.match(/[√∛∜]/g)[0], tif=ti.trim(), tic='',
				tai=i, rg=new RegExp(' *'+tif+' *','g');

			t=t.replace(rg,'@'+(tai<0?i:tai)+'#');
		//	if(tai<0){
				tmp['@'+i+'#']={'f':tif, 'c':tic};
				tmpA.push(tic);
				i++;
		//	}
		}
consolelog(tmpA.join(';'),tmp['@1$']);

		while(/([a-zα-ω]|@\d+[&\$]) *\^ *([a-zα-ω]|@\d+[&\$])/i.test(t)){
consolelog('指数函数',t);
			var ti=t.match(/([a-zα-ω]|@\d+[&\$]) *\^ *([a-zα-ω]|@\d+[&\$])/ig)[0].replace(/\s/g,''), tif='pow', tic=ti.replace('^',','), tiv=tic.split(','),
				tai=tmpA.indexOf(ti), rg=new RegExp(' *'+ti.replace(/[\$\^]/g,'\\$&'),'g');

			t=t.replace(rg,'@'+(tai<0?i:tai)+'&');
			if(tai<0){
				var t0=isVar(tiv[0]) && tmpA.indexOf(tiv[0])<0, t1=isVar(tiv[1]) && tmpA.indexOf(tiv[1])<0, tA=[].concat(tiv);
				if(isVar(tiv[0])){
					var ticc0='@'+(t0?i+1:tmpA.indexOf(tiv[0]))+'&';
					tiv[0]=ticc0;
				}
				if(isVar(tiv[1])){
					var ticc1='@'+(t1?i+1+(+t0):tmpA.indexOf(tiv[1]))+'&';
					tiv[1]=ticc1;
				}
				tic=tiv.join();

				tmp['@'+i+'&']={'f':tif, 'c':tic, 'v':tiv};	//tiv是数组：[底数, 幂次]
				tmpA.push(tiv.join('^'));
				i++;
				
				if(t0){
					tmp[ticc0]={'f':'var', 'c':tA[0], 'v':tA[0]};
					tmpA.push(tA[0]);
					i++;
				}
				if(t1){
					tmp[ticc1]={'f':'var', 'c':tA[1], 'v':tA[1]};
					tmpA.push(tA[1]);
					i++;
				}
			}
		}

		while(/# *\^ *([a-zα-ω]|@\d+[&\$])/i.test(t)){
consolelog('无参函数的幂	变成复合无参函数',t);
			var ti=t.match(/@\d+# *\^ *([a-zα-ω]|@\d+[&\$])/ig)[0].replace(/\s/g,''), tif='pow', tic=ti.replace('^',','), tiv=tic.split(','),
				tai=tmpA.indexOf(ti), rg=new RegExp(' *'+ti.replace(/[\$\^]/g,'\\$&'),'g');

			t=t.replace(rg,'@'+(tai<0?i:tai)+'#');
			if(tai<0){
				var t1=tiv[1],t0=isVar(t1) && tmpA.indexOf(t1)<0;
				if(isVar(t1)){
					var ticc='@'+(t0?i+1:tmpA.indexOf(t1))+'&';
					tiv[1]=ticc;
					tic=tiv.join();
				}
				
				tmp['@'+i+'#']={'f':tif, 'c':tic, 'v':tiv};	//tiv是数组：[无参函数, 幂次]
				tmpA.push(tiv.join('^'));
				i++;
				
				if(t0){
					tmp[ticc]={'f':'var', 'c':t1, 'v':t1};
					tmpA.push(t1);
					i++;
				}
			}
		}


		while(/(@\d+#)+ *((@\d+[\$&]|[a-zα-ω]) *)+/i.test(t)){
consolelog('无参变有参（#可能是一阶无参函数，也可能是复合无参函数）',t);
			var ti=t.match(/(@\d+#)+ *((@\d+[\$&]|[a-zα-ω]) *)+/ig)[0].replace(/\s/g,''), tif=ti.replace(/[^#]+$/,''), tic=ti.replace(/^.*#/,''),
				tai=tmpA.indexOf(ti), rg=new RegExp(' *'+ti.replace(/[\$]/g,' *\\$ *'));
				//这里不使用全局g，是因为替换#x时，会污染#xy
			t=t.replace(rg,'@'+(tai<0?i:tai)+'&');
consolelog(t,tmp,tmpA);
			if(tai<0){
				var tm=tmp[tif];
consolelog('tif = ',tif, 'tmp =', tmp);
				if(tm){
					consolelog('一阶无参函数');
					if(tm.c && tm.f!='()'){
						consolelog('无参函数的幂',tm.c,'tm.v = ',tm.v);
						//var tmc=tm.c.split(',');
						var tmc=tm.v;
						tif=tmp[tmc[0]].f;

						i++;
						var ticc='@'+i+'&,'+tmc[1], ticv=['@'+i+'&',tmc[1]];
						tmp['@'+(i-1)+'&']={'f':'pow', 'c':ticc, 'v':ticv};
						tmpA.push(ticv.join('^'));
						
						var t1=tic,t0=isVar(t1) && tmpA.indexOf(t1)<0;
						if(isVar(t1)){
							var ticc='@'+(t0?i+1:tmpA.indexOf(t1))+'&';
							tic=ticc;
						}
						tmp['@'+i+'&']={'f':tif, 'c':tic};
						tmpA.push(tic);
						
						if(t0){
							tmp[ticc]={'f':'var', 'c':t1, 'v':t1};
							tmpA.push(t1);
							i++;
						}
						
						
					}else{
						consolelog('无参函数',tm);
						tif=tm.f;
						
						var t1=tic,t0=isVar(t1) && tmpA.indexOf(t1)<0;
						if(isVar(t1)){
							var ticc='@'+(t0?i+1:tmpA.indexOf(t1))+'&';
							tic=ticc;
						}
						
						tmp['@'+i+'&']={'f':tif, 'c':tic};
						tmpA.push(tif+tic);
						
						if(t0){
							tmp[ticc]={'f':'var', 'c':t1, 'v':t1};
							tmpA.push(t1);
							i++;
						}
					}


					
				}else{
					consolelog('复合无参函数（高阶）');
					var tifs=tif.replace(/#$/,'').split('#');
					for(var j=0,l=tifs.length;j<l;j++){
						var tj=tifs[j]+'#', tmj=tmp[tj], tmjf=tmj.f, tmjc=tmj.c, tmjv=tmj.v;
						
						i++;
						if(j==l-1){break}
						var ticc='@'+i+'&';
						tmp['@'+(i-1)+'&']={'f':tmjf, 'c':ticc};
						tmpA.push(ticc);
					}
					tif=tmjf;
					tmp['@'+i+'&']={'f':tif, 'c':tic};
					tmpA.push(tic);
				}
				i++;
			}
			if(/(@\d+[\$&]|[a-zα-ω]){2}/i.test(tic)){
				consolelog('隐式乘法',tic);
				var ticA=split(tic,/(@\d+[\$&]|[a-zα-ω])/ig), tiv=snake(ticA);
				tic=tiv.join('');

				
				tmp['@'+(i-1)+'&']={'f':tif, 'c':'@'+i+'&'};
				tmpA[tmpA.length-1]='@'+i+'&';
				
				tmpA.push(tic);
				var tA=[].concat(tiv),ti0=0,j=i+1;
				if(/[a-zα-ω]/i.test(tic)){
					for(var k=0,l=tiv.length;k<l;k++){
						var tk=tiv[k], t0=tmpA.indexOf(tk);
						if(isVar(tk)){
							var ticc='@'+(t0<0?j:t0)+'&';
							tiv[k]=ticc;
							if(t0<0){
								tmp['@'+j+'&']={'f':'var', 'c':tk,'v':tk};
								tmpA.push(tk);
								j++;
								ti0=1;
							}
							
						}
					}
				}
				tic=tiv.join('');
				tmp['@'+i+'&']={'f':'times', 'c':tic,'v':tiv};
				tmpA[i]=tic;
				i++;
				
				if(ti0){
					i=j;
				}
			}
		}
		while(/(@\d+[\$&] *|[a-zα-ω] *){2,}/i.test(t)){
consolelog('处理隐式乘法',t);
			var ti=t.match(/(@\d+[\$&] *|[a-zα-ω] *){2,}/ig)[0].replace(/\s/g,''), tif='times', tic=ti,
				tai=tmpA.indexOf(tic), rg=new RegExp(' *'+ti.replace(/[\$]/g,' *\\$ *'));
				//这里不使用全局g，是因为替换xy时，会污染zxy
			t=t.replace(rg,'@'+(tai<0?i:tai)+'&');
			if(tai<0){
				
				var ticA=split(tic,/(@\d+[\$&]|[a-zα-ω])/ig), tiv=snake(ticA);
				tic=tiv.join('');


				tmpA.push(tic);
				var tA=[].concat(tiv),ti0=0,j=i+1;
				if(/[a-zα-ω]/i.test(tic)){
					for(var k=0,l=tiv.length;k<l;k++){
						var tk=tiv[k], t0=tmpA.indexOf(tk);
						if(isVar(tk)){
							var ticc='@'+(t0<0?j:t0)+'&';
							tiv[k]=ticc;
							if(t0<0){
								tmp['@'+j+'&']={'f':'var', 'c':tk,'v':tk};
								tmpA.push(tk);
								j++;
								ti0=1;
							}
							
							
						}
					}
				}
				tic=tiv.join('');
				tmp['@'+i+'&']={'f':tif, 'c':tic,'v':tiv};
				tmpA[i]=tic;
				i++;
				
				if(ti0){
					i=j;
				}
			}
		}

		while(/(@\d+[\$&]|[a-zα-ω]) *([×÷] *(@\d+[\$&]|[a-zα-ω]) *)+/i.test(t)){
consolelog('乘除',t);
			var ti=t.match(/(@\d+[\$&]|[a-zα-ω]) *([×÷] *(@\d+[\$&]|[a-zα-ω]) *)+/ig)[0].replace(/\s/g,''), tif='tds', tic=ti, tiv=split(tic,/[×÷]/g);

			var tai=tmpA.indexOf(ti), rg=new RegExp(ti.replace(/\D/g,' *$& *').replace(/[\$]/g,' *\\$ *'));
				//这里不使用全局g，是因为替换x×y时，会污染z÷x×y
			t=t.replace(rg,'@'+(tai<0?i:tai)+'&');
			if(tai<0){
				
				tmpA.push(tic);
				var tA=[].concat(tiv[1]),ti0=0,j=i+1;
				if(/[a-zα-ω]/i.test(tA.join())){
					for(var k=0,l=tA.length;k<l;k++){
						var tk=tA[k], t0=tmpA.indexOf(tk);
						if(isVar(tk)){
							var ticc='@'+(t0<0?j:t0)+'&';
							tiv[1][k]=ticc;
							if(t0<0){
								tmp['@'+j+'&']={'f':'var', 'c':tk,'v':tk};
								tmpA.push(tk);
								j++;
								ti0=1;
							}
							
						}
					}
				}
				
				
				
				
				tmp['@'+i+'&']={'f':tif, 'c':snake(tiv).join(''), 'v':tiv};	//tiv是数组 [中缀数组, 元素数组]
				tmpA[i]=tic;
				i++;
				
				if(ti0){
					i=j;
				}
			}
		}

		while(/[\+-]?(@\d+[\$&]|[a-zα-ω]) *([\+-] *(@\d+[\$&]|[a-zα-ω]) *)+/i.test(t)){
consolelog('表达式含+-',t);
			var ti=t.match(/[\+-]?(@\d+[\$&]|[a-zα-ω]) *([\+-] *(@\d+[\$&]|[a-zα-ω]) *)+/ig)[0].replace(/\s/g,''), tif='pms', tic=ti, tiv=split(tic,/[\+-]/g);
consolelog('ti=',ti);
			var tai=tmpA.indexOf(ti), rg=new RegExp(ti.replace(/[@a-zα-ω]/ig,' *$& *').replace(/[\$\+\-]/g,' *\\$& *'));
				//这里不使用全局g，是因为替换x+y时，会污染z-x+y 、-x+y
			t=t.replace(rg,'@'+(tai<0?i:tai)+'&');
consolelog('t=',t);
			if(tai<0){
				var ti0=tiv[1][0];
				
				tmpA.push(tic);
				var tA=[].concat(tiv[1]),ti0=0,j=i+1;
consolelog(tA);
				if(/[a-zα-ω]|-@/i.test(tA.join())){
					for(var k=0,l=tA.length;k<l;k++){
						var tk=tA[k], t0=tmpA.indexOf(tk);
						if(/[a-zα-ω]|-@/i.test(tk)){
						
							if(isVar(tk)){//字母
								var ticc='@'+(t0<0?j:t0)+'&';
								tiv[1][k]=ticc;
								if(t0<0){
									tmp['@'+j+'&']={'f':'var', 'c':tk,'v':tk};
									tmpA.push(tk);
									j++;
									ti0=1;
								}
								
								
							}else if(isVar(tk[1])){//-字母
								var ticc='@'+(t0<0?j:t0)+'&', t1=tmpA.indexOf(tk[1]), ticc1='@'+(t1<0?j+1:t1)+'&';
								tiv[1][k]=ticc;
								if(t0<0){
									tmp['@'+j+'&']={'f':'-', 'c':ticc1};
									tmpA.push('-'+ticc1);
									j++;
									ti0=1;
									
									if(t1<0){
										tmp['@'+j+'&']={'f':'var', 'c':tk[1],'v':tk[1]};
										tmpA.push(tk[1]);
										j++;
									}
									
								}
								
							}else{//-@数字$
								var ticc='@'+(t0<0?j:t0)+'&';
								tiv[1][k]=ticc;
								if(t0<0){
									tmp['@'+j+'&']={'f':'-', 'c':tk.substr(1)};
									tmpA.push(tk);
									j++;
									ti0=1;
								}
								
							}
						}
					}
				}
				
				
				tmp['@'+i+'&']={'f':tif, 'c':snake(tiv).join(''), 'v':tiv};	//tiv是数组 [中缀数组, 元素数组]
				tic=snake(tiv).join('');
				tmpA[i]=tic;
				i++;
				
				if(ti0){
					i=j;
				}
				

			}
		}

		if(/^-(@\d+[&\$]|[a-zα-ω])$/i.test(t)){
consolelog(' - 只剩一个负项  ',t)
			var tic=t.substr(1),t0=1;
			t='@'+i+'&';
			
			if(isVar(tic)){
				
				var t0=tmpA.indexOf(tic), ticc='@'+(t0<0?i+1:t0)+'&';
				if(t0<0){
					tmp[ticc]={'f':'var', 'c':tic, 'v':tic};
					tmpA.push(ticc,tic);
					tic=ticc;
				}
			}
			
			
			tmp[t]={'f':'-', 'c':tic};
			tmpA[i]='-'+tic;
			i++;
			if(t0<0){
				i++;
			}
		}

		if(isVar(t)){
			
			var tic=t;
			t='@'+i+'&';
			tmp[t]={'f':'var', 'c':tic, 'v':tic};
			tmpA.push(tic);
			i++;
		}

		consolelog('t,tmp,i,tmpA = ',t,tmp,i,tmpA);
		return t;
	};	
	//return cache(x);
		
	AAA.push(cache(x), tmp, tmpA);
	consolelog('Mfn.fromStr后 ',AAA);
	return AAA;

	
	},
	toStr:function(A, latex, p){/*A → 数学表达式str (unicode Math)		latex指定返回LaTeX格式	p指定是否添加括号
			如果A本身就是字符串，则认为是数学表达式，转成LaTeX输出
		*/
		if(isStr(A)){
			return Mfn.fromStr(A).toStr(1)
		}
		var A0=A[0];
		var f=function(x0,nop){//参数nop，指定不保留括号
			var x=x0;
consolelog('toStr: x = ',x,A[2].join(';'),A);
			if(/^@\d+.$/.test(x) && !A[1][x]){
				
				if(/^@\d+\$$/.test(x)){
					x=x.replace(/.$/,'&')
				}else{
					x=x.replace(/.$/,'$')
				}
				if(!A[1][x]){
					consolelog('查不到索引',x,A);
					return ''

				}
				
			}
			
			if(/^@\d+[&\$]$/.test(x)){
				
				var o=A[1][x],of=o.f,oc=''+o.c,ov=o.v;
		//	if(!of){return ''}
				
				consolelog(of, oc, ov,A[1]);
				
				
				if(of=='num'){
					return latex?oc.replace(/%/,'\\$&'):oc
				}
				if(of=='var'){
					return oc
				}
				if(of=='_'){
					consolelog(ov);
					var fx=f(ov[0],1)+'_', i=f(ov[1],1);
					if(!latex && /\D\D/.test(i)){
						i=pp(i)
					}
					return fx+(latex?pp(i,'{}'):i)
					
				}				
				
				
				
				if(of=='-'){
consolelog('负项 ',A[1][oc].c);
					if(/@/.test(A[1][oc].c) && A[1][oc].f=='pms'){//添加必要的括号
						return of+(latex?zp:pp)(f(oc,1))
					}
					
					return of+f(oc,1)
				}
				if(/[!‼#]/.test(of)){
					var py=1,fx=(latex?of.replace(/#/,'\\$&'):of);
					if(/@/.test(oc)){
						 var cf=A[1][oc].f, t=A[1][oc].c;
					 	if(cf=='()' && /num|var|_/.test(A[1][t].f)){//去括号
					 		py=0;
					 	}
					 	if(cf!='()' && !/num|var|_/.test(A[1][t].f)){//加括号
					 		return (latex?zp:pp)(f(oc,1))+fx;
					 	}
						
					}
					return f(oc,!py)+fx
				}


				if(/[√∛∜]/.test(of)){
					var foc=f(oc,1);
					
					
					
					return latex?kroot(f(oc,1),'01√∛∜'.indexOf(of)):of+(nisVid(foc,1)?foc:pp(foc))
				}
				if(of=='pow'){
					var x0=f(ov[0],1), x1=f(ov[1],1), x0isVid=nisVid(x0,1), x1isVid=nisVid(x1,1), X0=x0isVid?x0:(latex?zp:pp)(x0), X1=latex?pp(x1,'{}'):(x1isVid?x1:pp(x1));

					
		
					if(latex && /^1[/].+$/.test(x1)){
						
						return kroot(x0,x1.substr(2))
						
					}
					if(latex){
						var x1_=Mfn.toStr(Mfn.build.A(A,ov[1]));
						if(/^1[/].+$/.test(x1_)){
							return kroot(x0,x1_.substr(2))
						}
					}



					if(!latex && /^1[/][234]$/.test(x1)){
						
						consolelog('x0=',x0,'X0 =',X0);
						return '√∛∜'[+x1.substr(2)-2]+X0
						
						
					}
					
					return X0+'^'+X1
					//return latex?(x0isVid?x0:zp(x0))+'^'+pp(x1,'{}'):(x0isVid?x0:pp(x0))+'^'+(x1isVid?x1:pp(x1))
				}
				
				if(of==','){
					return (latex?zp:pp)(Arrf(f,ov).join(','))

				}



				if(of=='()'){
					return nop?f(oc,1):(latex?zp:pp)(f(oc,1))
				}	
				if(/^\(.+\)$/.test(of)){
					return (latex?zp:pp)(f(oc.replace(/\(|\)/g,''),1))
				}				
				if(of=='pms'){
					var s=ov[1][0];
					consolelog('x=',x,'s= ',s,A[1],A[2]);
					if(/@/.test(s) && A[1][s].f=='()'){//去除加减式，首项不必要的括号
						ov[1][0]=A[1][s].c
					}
					for(var i=0,l=ov[1].length;i<l-1;i++){
						var s=ov[1][i+1], py=1, oi=ov[0][i];
						if(/@/.test(s)){
							var sf=A[1][s].f, t=A[1][s].c, sv=A[1][s].v;
							if(sf=='()'){//后面跟括号表达式
								if(/@/.test(t)){
									var tf=A[1][t].f;
									if(oi=='+'){
										if(tf=='pms'){//加减式
											var tt=A[1][t].v[1][0];
											if(/@/.test(tt) && A[1][tt].f!='-'){
												consolelog('以非负数为首项的加减式，不需要括号',A[1][tt]);
												py=0;
											}
											
										}else if(tf!='-'){//只要不是取反，负数等，也不需要括号
											py=0;
										}
									}
									if(oi=='-'){
										if(['-','pms'].indexOf(tf)<0){//只要不是取反，负数，加减式等，也不需要括号
											py=0;
										}
									}
								}
		
								if(!py){//不需要括号
									ov[1][i+1]=t;
								}

							}else if(sf=='-' || sf=='pms' && !(oi=='+' && sv && isArr(sv,1) && /@/.test(sv[1][0]) && A[1][sv[1][0]].f!='-' )){//需要额外加括号
consolelog(A, 't = ',t, 'sf = ',sf, 'oi = ',oi, 'sv = ',sv);
								ov[1][i+1]=(latex?zp:pp)(f(s,1));
							}
						}

					}
					
consolelog(A, 'ov[0] = ',ov[0],'ov[1] = ',ov[1]);
					var a0=ov[0],a1=Arrf(f,ov[1]);
consolelog(A, 'a0 = ',a0,'a1 = ',a1);
					return snake([a0,a1]).join('')
				}

				if(of=='times'){
					of='tds';
					ov=[copyA('×',ov.length-1),ov];
				}
				if(of=='tds'){

					var s=ov[1][0];//乘积的首项
					
consolelog('首项',s,A);
					if(/@/.test(s)){
						var sf=A[1][s].f, t=A[1][s].c;
						if(sf=='()' && /@/.test(t)){
							var tf=A[1][t].f, tc=A[1][t].c;
							consolelog(tf);
							if(tf!='pms' && !(tf=='-' && A[1][tc].f=='tds')){//去除乘除式，首项不必要的括号		if(['-','pms'].indexOf(tf)<0 )
								ov[1][0]=t
							}
						}else if(sf=='pms' || sf=='tds' && /÷/.test(t) && ov[0][0]=='×' || sf=='-' && A[1][t].f=='tds' && A[1][t].v[0]=='÷' ){//首项是加减式，或除式（且后一项是乘元） 或负除式 需要括号
							
							if(latex){
								if(sf!='pms'){//除式
									ov[1][0]=kfrac(f(s,1))
								}else{
									ov[1][0]=zp(f(s,1))
								}
							}else{
								
								ov[1][0]=pp(f(s,1))
							}
							//ov[1][0]=(latex?zp:pp)(f(s,1));
	consolelog('此时 ',latex, ov[1][0]);
						}
					}
					for(var i=0,l=ov[1].length;i<l-1;i++){
						var s=ov[1][i+1], py=1, oi=ov[0][i];
						if(/@/.test(s)){
							var sf=A[1][s].f, t=A[1][s].c;
							
							consolelog('乘除的每一项（',(i+1),'项）',s, sf, t, A, oi);
							
							if(sf=='()'){//后面跟括号表达式
								if(/@/.test(t)){
									var tf=A[1][t].f;
									consolelog('tf = ',tf);
									if(oi=='×'){
										if(tf=='tds'){//乘除式
											var tt=A[1][t].v[1][0];
											py=0;
											
										}else if(['-','pms'].indexOf(tf)<0){//只要不是取反，负数等，也不需要括号
											py=0;
										}
									}
									if(oi=='÷'){
										if(['-','pms','tds','times'].indexOf(tf)<0){//只要不是取反，负数，加减式，乘除式等，也不需要括号
											py=0;
										}
									}
								}
		
								if(!py){//不需要括号
									ov[1][i+1]=t;
								}


							}else if(['-','pms'].indexOf(sf)>-1 || sf=='tds' && !(oi=='×' && /@/.test(A[1][s].v[1][0]) && A[1][A[1][s].v[1][0]].f!='-' )){//需要额外加括号

							//	ov[1][i+1]=(latex?zp:pp)(f(s,1));
								
								if(latex){
									if(sf=='tds'){//除式
										ov[1][0]=kfrac(f(s,1))
									}else{
										ov[1][0]=zp(kfrac(f(s,1)))
									}
								}else{
									
									ov[1][i+1]=pp(f(s,1));
								}
								
								
							}
						}

					}
					
				consolelog('latex',latex,' ov[] = ',ov[0], ov[1],A);
					var a0=ov[0],a1=Arrf(f,ov[1]);
				consolelog(' a0 = ',a0, ' a1 = ',a1);
					for(var i=0,l=a1.length;i<l-1;i++){//简化乘法符号
						var a=a1[i],b=a1[i+1],oi=a0[i], av=isVar(a), bv=isVar(b),
						//	an=a[0]=='@' && A[1][a].f=='num', bn=b[0]=='@' && A[1][b].f=='num',
						//	ap=a[0]=='(' || a[0]=='@' && A[1][a].f=='()', bp=b[0]=='(' || b[0]=='@' && A[1][b].f=='()';
							an=nisd(a), bn=nisd(b), avi=nisVid(a), bvi=nisVid(b),
							ap=a[0]=='(' || /\^/.test(a), bp=b[0]=='(' || /\^/.test(b);
						
						if(oi=='×'){
					consolelog(' a = ',a, ' b = ',b);
							//if(av || ap || bp || (av || an) && bv || av && bn){
							//if(av || ap || bp || avi && bv || av && bn){
							
							if(!(/\d$/.test(a) &&  /^\d/.test(b))){
								a0[i]='';
				consolelog(' a0 = ',a0);
							}
							
						}
						if(oi=='÷'){
							//a0[i]='/'	会修改A
						}
					}
					var y=snake([a0,a1]).join('').replace(/÷/g,'/');
					return /^-?\d+\/\d+$/.test(y) && latex?kfrac(y):y
				}// tds结束

consolelog(of);

				var isinv=/⁼/.test(of),of0=of.replace(/⁼/,''), fx=latex?(ZLR(SBS.Latex.func).indexOf(of.replace(/⁼/,''))<0?kxf(of0):'\\'+of0)+(isinv?'^{-1}':''):' ', s=oc;
				
				if(/@/.test(s)){
					consolelog('s = ',s,' A[1][s] == ',A[1][s],'A[1] = ',A[1]);
					consolelog('oc =  ',oc,'o = ',o);
					var sf=A[1][s].f, t=A[1][s].c;
					if(/@/.test(t)){
						if(sf=='()'){
							var tf=A[1][t].f;
							if(['var','num'].indexOf(tf)>-1){//去除不必要的括号
								ov=t
							}
						}
						if(sf!='()'){
							var tf=A[1][t].f;
							if(['var','num'].indexOf(tf)<0){//加括号
								ov=pp(t)
							}
						}
					}
				}
				
					
				return fx+f(ov,1)

				
			}
			return x
			
		};
		//return f(A0)
		
		return p?(latex?zp:pp)(f(A0,1)):f(A0,1)
	},


	opr1:function(op,arr,sim,p){//一元运算(结果)	sim是参数，指定是否递归化简			p是参数
		consolelog('Mfn.opr1 op = ',op,'arr = ',arr,' p =',p);
		var A=isArr(arr)?Mfn.build.A(arr):Mfn.fromStr(arr), A0=A[0], oA=A[1][A0],of=oA.f,oc=oA.c,ov=oA.v;
		consolelog('A = ',A);
		if(op=='type'){//公式类型（最外层的运算）
			return A[1][A[0]].f
		}

		if(op=='obj'){//返回Num类数学对象（Integer, Decimal, Frac, Root）	或 Polynomial
			var t=Mfn.toStr(A);
			return Num.fromStr(t)||Polynomial.fromStr(t)||A
		}

		if(op=='obj.type'){//返回对象子类型
			return Mfn.opr1('obj',A).type
		}

		if(op=='≈'){//直接求出最终近似解，返回整数、小数或复小数形式		参数sim指定小数位数精度
			if(of=='num'){
				return A.toStr()
			}
			
			
			
			
		}
	/*
		if(op=='ref'){//引用子对象，返回新Mfn
			Mfn.build.A(A,p)
			
		}
	*/
	
		if(op=='导数'){//

			if(of=='var' || of=='_'){
				return Mfn.build.Num(1)
			}
			if(of=='num' || !Mfn.has.var(A)){
				return Mfn.build.Num(0)
			}
			
			if(of=='()'){
				A[0]=oc;
				return Mfn.opr1('导数',A,sim,p)
			}
			if(of=='-'){
				A[0]=oc;
				return Neg(Mfn.opr1('导数',A,sim,p),sim)
			}
			if(of=='pms'){

				var l=ov[1].length, B=Mfn.fromStr(snake([ov[0],seqA(0,l)]).join('')), bp={};
				for(var i=0;i<l;i++){
					var oi=ov[1][i];
					bp['@'+i+'$']=Mfn.opr1('导数',Mfn.build.A(A,oi),sim,p)
				}
				var C=Mfn.opr1(':',B,'',bp);

				return sim?Mfn.opr1('=',C,'',p):C

			}

			if(of=='times' || of=='tds' && ov[0].indexOf('÷')<0){

				var ist=of=='times', l=(ist?ov:ov[1]).length, B=Mfn.fromStr(snake([copyA('+',l-1),seqA(0,l)]).join('')), bp={};
				for(var i=0;i<l;i++){
					var oi=ist?ov[i]:ov[1][i],pi={};
					pi[oi]=Mfn.opr1('导数',Mfn.build.A(A,oi),sim,p);
					bp['@'+i+'$']=Mfn.opr1(':',B,'',pi);
				}
				var C=Mfn.opr1(':',B,'',bp);

				return sim?Mfn.opr1('=',C,'',p):C

			}


			if(of=='tds' && ov[0].length==1 && ov[0][0]=='÷'){

				var l=ov[1].length, o10=ov[1][0], o11=ov[1][1], bp={}, B;
				
				if(A[1][o10].f=='num' && A[1][o10].c=='1'){// 1/g    ->    -g'/g^2
					
					var t=A.ref(2);

					A[1][A0].v[1][1]=A.ref(o11+'^'+t);

					bp[o10]=Neg(Mfn.opr1('导数',Mfn.build.A(A,o11),sim,p));
					
					B=Mfn.opr1(':',A,'',bp);

					return sim?Mfn.opr1('=',B,'',p):B
				}
				

				// ( f′g−fg′)	/ g^2

				var f=Mfn.build.A(A,o10), g=Mfn.build.A(A,o11), f_=Mfn.opr1('导数',f,sim,p), g_=Mfn.opr1('导数',g,sim,p);
				return Divide([Minus([Times([f_, g]),Times([f, g_])]), Pow([g,2])],sim)

			}



		}
	

	
		if(op=='=='){//深度递归化简			bug	Mfn.opr1('=',Mfn.fromStr('1-25/(45+2)')).toStr()		Mfn.opr1('=',Mfn.fromStr('(25/9)^(1/2)-23'))		200032023&j3-=j2×2/3;
			var fresh=0;
			for(var i=0;i<A[2].length;i++){
				var ai='@'+i+'&',Ai=A[1][ai];
				if(!Ai){
					ai='@'+i+'$';Ai=A[1][ai];
				}
				
				if(Ai && A[2].join('').indexOf(ai)>-1 && !/num|var|_/.test(Ai.f)){
					var af=Ai.f,ac=ai.c,av=ai.v;

					if(af=='times'){
						for(var j=0,jl=av.length;j<jl;j++){
							
						}
					}
					if(af=='pow'){
						
						
					}
					
					if(/tds|pms/.test(af)){
						
						
					}
					if(af=='-'){
						
					}
				}
				
				
				
			}
			
			
			
		}










		if(op=='='){//普通化简（尽量不涉及递归运算）		此时参数p，指定数学对象环境（数域Num，矩阵Mtrx，布尔逻辑Bool）
consolelog(' = 开始化简 A',A,' of = ',of);
			if(of=='num' || of=='var' || of=='_'){
				
				return A
			}

			Mfn.simp(A,'','()');//去括号
			
			if(of=='()'){
				A[0]=oc;
				return Mfn.opr1('=',A,sim,p)
			}
			
			
			
			
			if(of=='-'){
				var co=A[1][oc], cof=co.f, coc=co.c, cov=co.v;
				if(cof=='var' || cof=='num' || cof=='_'){
					return A
				}
				if(cof=='tds' && cov[0].length+cov[1].length==3 && cov[0][0]=='÷' && A[1][cov[1][0]].f=='num' && A[1][cov[1][1]].f=='num'){
					consolelog(A[1][cov[1][0]].c, A[1][cov[1][1]].c);
					return Mfn.fromStr('-'+FracReduct([A[1][cov[1][0]].c, A[1][cov[1][1]].c]))
				}
				
				
				consolelog('负值化简','co = ',co,' cof = ',cof,' coc = ',coc,' cov = ',cov,'arr = ',arr);
				
				if(cof=='-'){
					A[0]=coc;
					
				}else if(cof=='times'){
					cov.unshift(A.ref(-1));
					
					co.v=cov;
					A[1][oc]=co;
					A[0]=oc;
					
				}else if(cof=='tds'){
					cov[0].unshift('×');
					cov[1].unshift(A.ref(-1));


					co.v=cov;
					A[1][oc]=co;
					A[0]=oc;
					
				}else if(cof=='pms'){
					cov[0]=Arrf(opinv,cov[0]);// - (a-b+c)  →  (a+b-c)	→  (-a+b-c)
					var c0=cov[1][0], o0=A[1][c0], o0f=o0.f, o0c=o0.c, o0v=o0.v;
consolelog('o0 =', o0, 'cov = ',cov);
					if(o0f=='-'){
						
consolelog('o0f==- o0c = ', o0c);
						cov[1][0]=o0c;
						
					}else{
						cov[1][0]=A.ref('-'+c0);
					}
					A[1][oc].v=cov;
					A[0]=oc;
					
				}else if(cof=='pow'){
					A[0]=oc;
					return Mfn.opr1('-',Mfn.opr1('=',A))
					
				}else if(ZLR('sin csc tan cot sh csch th cth').indexOf(cof)>-1){
					if(A[1][coc].f=='-'){
						A[1][coc]=A[1][A[1][coc].c];
						A[0]=coc;
					}else{
						return Mfn.opr1('-',Mfn.opr1('=',A))
					}

				}else{
					A[0]=coc;
					return Mfn.opr1('-',Mfn.opr1('=',A))
				}
				
				consolelog('=化简 - ',A);
				return Mfn.opr1('=',A)
			}
			
			$.each(A[1],function(i,v){//去括号
				if(v.f=='()'){
					A[1][i]=A[1][v.c];
				}
				
				
			});
			if(ZLR('cos sec ch sech').indexOf(of)>-1){
				var co=A[1][oc], cof=co.f, coc=co.c, cov=co.v;
				if(cof=='-'){//偶函数
					oc=coc;
					A[1][A0].c=coc;
					co=A[1][oc];
					cof=co.f;
					cov=co.v;
				}
				if(cof=='num'){//
					if(coc=='0'){
						return Mfn.fromStr(1);
					}
					if(coc=='π' && ZLR('cos sec').indexOf(of)>-1){
						return Mfn.fromStr(-1);
					}
					
					return A
				}
				

				if(cof=='var' || cof=='_'){
					return A
				}
				
				
				if(Mfn.has.var(A,oc)){

					
				}else{
					if(cof=='tds'){//π/2, /3, /4
						
						
						
					}
				}
				
				A[0]=co;
				A=Mfn.opr1('=',A);

				A[0]=A.ref(of+A[0]);;
				
				return A
			}




			if(of=='pms'){// 加减式化简
consolelog('pms 化简 ov=',ov.join(' ; '));
				for(var i=0;i<ov[1].length;i++){/*平面化	a-(b-c+d)+e	变成 a-b+c-d+e		a+(b-c+d)+e	变成 a+b-c+d+e
							a-(-b-c+d)+e	变成 a+b+c-d+e			a+(-b-c+d)+e	变成 a-b-c+d+e
					*/
					var oi=A[1][ov[1][i]], oif=oi.f, oic=oi.c, oiv=oi.v;
					if(oif=='pms'){
						if(i){
							if(ov[0][i-1]=='-'){
								oiv[0]=['-'].concat(Arrf(opinv,oiv[0]))
								
							}else{
								oiv[0]=['+'].concat(oiv[0])
							}
							
							
							ov[0].splice(i-1,1);
							ov[1].splice(i,1);
							for(j=0,l=oiv[0].length;j<l;j++){
								ov[0].splice(i-1,0,oiv[0][l-j-1]);
								ov[1].splice(i,0,oiv[1][l-j-1]);
							}
							
							
						}else{//首项也是加减式
							/*
			a-b
			c+d-e
				c+d-e-b
								*/
							//oiv[0]=oiv[0].concat('+');
							ov[0]=oiv[0].concat(ov[0]);
							ov[1]=oiv[1].concat(ov[1].slice(1));
							
							
						}
						


					}
					if(oif=='-'){
						if(i){
							ov[0][i-1]=opinv(ov[0][i-1]);
							ov[1][i]=oic;
						}else{
							
							//首项是负项，暂时不处理
						}

					}
					
					
					
				}
				
				var i=ov[0].indexOf('+'),o0=A[1][ov[1][0]];
				if(i>-1 && o0.f=='-'){//-a...+b	变成 b-a...
consolelog('-a...+b	变成 b-a...');
					ov[0][i]='-';
					ov[1][0]=ov[1][i+1];
					ov[1][i+1]=o0.c;

				}
				
				A[1][A0].v=ov;
	
consolelog('平面化后 ov = ',ov.join(' ;;; '));
	
				var B0=[],B1=[],B2=0;//分别记录有理常数系数，含变量（以及根式常数等）表达式	有理数
				
consolelog('ov = ',ov);
				for(var i=0;i<ov[1].length;i++){//把每一项（加减元），分离常数和变量[常数, 变量]
					var o1i=ov[1][i],oi=A[1][o1i], oif=oi.f, oic=oif=='var'||oif=='_'?'1×'+o1i:oi.c, oiv=oi.v, B1i=B1.indexOf(oic), neg0=!i && oif=='-', negi=i && ov[0][i-1]=='-' || neg0;
					
					if(oif=='var' || oif=='_'){
					//	o1i='1×'+o1i;
						
						var ojc=oic;// 1×a÷b	 1×a	 1÷b
						var B1j=B1.indexOf(ojc);
						
						if(B1j>-1){
							B0[B1j]=fracOpr(negi?'-':'+',B0[B1j],1)
							
						}else{
							B1.push(ojc);
							B0.push((negi?'-':'')+1)	//negi ^ /-/.test(1)
							
						}
						continue;
						
						
					}
					
					consolelog('i = ',i);
					
					consolelog('B1i = ',B1i,' B1[] = ',B1.join(' ; '));
					consolelog('o1i = ',o1i,'oic = ',oic);
					if(neg0){//负项（且不是首项）
						o1i=oic;
						oi=A[1][o1i];
						oif=oi.f;
						oic=oi.c;
						oiv=oi.v;
						
					}

					
					consolelog('i = ',i,'oif = ',oif,'oic = ',oic);

					if(oif=='num'){
						B2=fracOpr(negi?'-':'+',B2,oic)
						
					}else if(oif=='tds' || oif=='times'){//分离有理系数
						if(oif=='times'){
							oiv=[copyA('×',oiv.length-1),oiv];
						}
						var k='1',newV=[[],[]];//中缀运算符数组	元素数组
						for(var j=0,l=oiv[1].length;j<l;j++){
							var o0j=oiv[0][j-1], o1j=oiv[1][j], dividej=j && o0j=='÷';
							if(Mfn.is.b1.frac(A,o1j)){
								var kj=Mfn.toStr(Mfn.build.A(A,o1j));
								k=fracOpr(dividej?'/':'*',k,kj);

							}else if(A[1][o1j].f=='times'){
								var o1jo=A[1][o1j],o1jov=o1jo.v;
								for(var m=0,n=o1jov.length;m<n;m++){
									var om=o1jov[m];
									if(Mfn.is.b1.Var(A,om)){//是广义变量（含下标形式）
										newV[0].push(dividej?'÷':'×');
										newV[1].push(om);
									}else{//num
										var kj=Mfn.toStr(Mfn.build.A(A,om));
										k=fracOpr(dividej?'/':'*',k,kj);
										if(k=='0'){
											break 
										}
									}
									
								}

							}else{
								newV[0].push(dividej?'÷':'×');
								newV[1].push(o1j);
								
							}
							if(k=='0'){
								break 
							}
							if(newV[1].length >1 && p!='Mtrx'){//不是矩阵，则一般满足乘法交换律，此时乘法靠前，除法靠后
								var nV0=[],nV1=[];//分别记录乘元，除元
								for(var m=0,n=newV[1].length;m<n;m++){
									if(newV[0][m]=='×'){
										nV0.push(newV[1][m]);
									}else{
										nV1.push(newV[1][m]);
									}
								}
								
								
								// ×÷相消		抵消
								for(var ii=0;ii<nV0.length && nV1.length;ii++){
									var ni=nV0[ii],nj=nV1.indexOf(ni);
									if(nj>-1){
										nV0.splice(ii,1);
										nV1.splice(nj,1);
										ii--;
									}
								}
								
								
								if(nV0.length){

									newV[0]=['×'];
									if(nV0.length>1){
										nV0.sort(function(x,y){// 乘元 排序
											return Mfn.toStr(Mfn.build.A(A,x))<Mfn.toStr(Mfn.build.A(A,y))?-1:0;
										});
										newV[1]=[A.ref(nV0.join(''))];

									}else{
										newV[1]=nV0;
									}
								}else{
									newV[0]=[];
									newV[1]=[];
								}
								if(nV1.length){

									newV[0].push('÷');
									if(nV1.length>1){
										nV1.sort(function(x,y){// 除元 排序
											return Mfn.toStr(Mfn.build.A(A,x))<Mfn.toStr(Mfn.build.A(A,y))?-1:0;
										});
										newV[1].push(A.ref(nV1.join('')));

									}else{
										newV[1].push(nV1[0]);
									}
								}
								
							}
							
							
							
						}
						if(k=='0'){
							
						}else if(newV[0].length){
					consolelog('k = ',k);
							consolelog('中缀运算符数组	元素数组 newV = ',newV.join(' ; ; '));
							
							newV[1].unshift(1);
							
							var ojc=snake(newV).join('');// 1×a÷b	 1×a	 1÷b
							var B1j=B1.indexOf(ojc);
							
							if(B1j>-1){
								B0[B1j]=fracOpr(negi?'-':'+',B0[B1j],k)
								
							}else{
								B1.push(ojc);
								B0.push((negi ^ /-/.test(k)?'-':'')+k)
								
							}
							
						}else{//有理常数
							
							B2=fracOpr(negi?'-':'+',B2,k)
						}

						
					}else{//Mfn.has.var(A,o1i)	oif=='var'
					
						consolelog('非乘积形式或单常数、单变量形式的表达式 B1i = ',B1i,' B1 = ',B1.join(' ; '),' B0 = ',B0.join(' ; '));
						if(B1i>-1){
							B0[B1i]=fracOpr(negi?'-':'+',B0[B1i],1)
							
						}else{
							
							consolelog('oif = ',oif,'oic = ',oic,'o1i=',o1i);
						//	B1.push(oif=='var'?o1i:oic);
							B1.push(o1i);
							B0.push(negi?-1:1)
							
							
						}
						
					}
				}//每一项加减元，遍历结束
				
				
				
				B2=''+B2;
				
				consolelog('有理常数系数 B0 = ',B0, '复杂表达式 B1 = ',B1,' 有理数 B2 = ',B2,'A = ',A);
				
				var C=[[],[]];//正项 负项
				for(var i=0;i<B0.length;i++){//B0有理系数数组，B1未知表达式数组
					var B0i=''+B0[i],Ci=0;
					if(B0i!='0'){
						if(B0i[0]=='-'){//负有理系数
							Ci=1;
							B0i=B0i.substr(1);
							//[123] 1/x ; 2/3 1/x
						}
						var B1i=B1[i];//表达式 
						consolelog('单个复杂表达式 B1i = ',B1i,'有理系数数组 B0 = ',B0, '未知表达式数组B1 = ',B1, 'i = ',i,'相应有理系数B0i = ',B0i);
						if(/1×.+÷/.test(B1i)){
							
							if(B0i=='1'){
								B1i=B1i.substr(2);
							}
							var t0=A.ref(B1i),t=t0;

							
							if(B0i!='1'){//有理系数

								t=A.ref(B0i);

								t=A.ref(t+'×'+t0);
							}
							
							C[Ci].push(t);

						}else if(/1÷/.test(B1i)){//1÷
							B1i=B1i.substr(2);

							var t=A.ref(B0i);

							C[Ci].push(A.ref(t+'÷'+B1i));

						}else{//纯引用	或/1×/.test(B1i)

							if(/1×/.test(B1i)){
								B1i=B1i.substr(2);
							}
							if(B0i=='1'){
								
								C[Ci].push(B1i);
							}else{
								var t=A.ref(B0i);
	
								C[Ci].push(A.ref(t+B1i));
							}
						}
					}
					
				}
				
				consolelog('正负项数组：C = ',C,'B0 = ',B0, 'B1 = ',B1,  'B2 = ',B2);

				if(C[0].length && C[1].length){
					
					
					// +-相消		抵消
					for(var i=0;i<C[0].length && C[1].length;i++){
						var ni=C[0][i],nj=C[1].indexOf(ni);
						if(nj>-1){
							C[0].splice(i,1);
							C[1].splice(nj,1);
							i--;
						}
					}
					
				}
				
				if(C[0].length+C[1].length){
					
					
					
					
					if(B2!='0'){

						var t=A.ref(B2.replace(/-/,''));
					}



					if(C[0].length>1){
						C[0].sort(function(x,y){// 加元排序
							//return Mfn.toStr(Mfn.build.A(A,x))<Mfn.toStr(Mfn.build.A(A,y))?-1:0;
							var a=Mfn.toStr(Mfn.build.A(A,x)), b=Mfn.toStr(Mfn.build.A(A,y));
							return sortBy.chrnum(a,b)
						});
					}
					if(C[1].length>1){
						C[1].sort(function(x,y){// 减元排序
							var a=Mfn.toStr(Mfn.build.A(A,x)), b=Mfn.toStr(Mfn.build.A(A,y));
							return sortBy.chrnum(a,b)
						});
					}

					
					if(C[0].length){// 有加元

						if(C[0].length==1 && C[1].length==0 && B2=='0'){
							A[0]=C[0][0];
							return A
						}
						
						var s=C[0].join('+')+(C[1].length?'-'+C[1].join('-'):'')+(B2!='0'?(B2[0]=='-'?'-':'+')+t:'');
						
					}else if(!/[-0]/.test(B2[0])){//正有理数
						var s=t+'-'+C[1].join('-');

					}else{//首项是负项
						
						C[1][0]=A.ref('-'+C[1][0]);
						var s=C[1].join('-')+(B2!='0'?'-'+t:'');
						
					}

					A[0]=A.ref(s);
					
					return A
						
				}else{// 只剩下有理数
					
					return Mfn.fromStr(B2)
					
				}
				
				return A
			}
			
			if(of=='tds' || of=='times'){// 乘除式化简
				
consolelog('化简 ',of,'ov = ',ov.join(' ;; '),A);
				if(of=='tds' && ov[0].length+ov[1].length==3 && ov[0][0]=='÷' && A[1][ov[1][0]].f=='num' && A[1][ov[1][1]].f=='num'){// 是分数
					consolelog(A[1][ov[1][0]].c, A[1][ov[1][1]].c);
					return Mfn.fromStr(FracReduct([A[1][ov[1][0]].c, A[1][ov[1][1]].c]))
				}

				if(of=='tds' && ov[0].length==1 && /[×÷]/.test(ov[0][0]) &&
					A[1][ov[1][0]].f=='√' && A[1][ov[1][1]].f=='√' && 
					A[1][A[1][ov[1][0]].c].f=='num' && A[1][A[1][ov[1][1]].c].f=='num'){// 是两个根数
					consolelog(ov[0][0],A[1][A[1][ov[1][0]].c].c,A[1][A[1][ov[1][1]].c].c);
					return Sqrt(fracOpr(ov[0][0],A[1][A[1][ov[1][0]].c].c,A[1][A[1][ov[1][1]].c].c),1)

				}


				if(of=='times'){
					ov=[copyA('×',ov.length-1),ov];
				}
				
				
				var k=1;
				for(var i=0;i<ov[1].length;i++){/* 乘除平面化	a÷(b÷c×d)	变成 a÷b×c÷d		a×(b÷c÷d) 变成 a×b÷c÷d
					
					*/
					var oi=A[1][ov[1][i]], oif=oi.f, oic=oi.c, oiv=oi.v;
					if(oif=='tds'){
						if(i){
							var isdivi=ov[0][i-1]=='÷';
							if(isdivi){
								oiv[0]=['÷'].concat(Arrf(opinv,oiv[0]))
								
							}else{
								oiv[0]=['×'].concat(oiv[0])
							}
							
							
							ov[0].splice(i-1,1);
							ov[1].splice(i,1);
							
							if(isdivi && p=='Mtrx'){//矩阵求逆，tds里面元素要逆序（因为不满足乘法交换律）
							
								for(j=0,l=oiv[0].length;j<l;j++){
									ov[0].splice(i-1,0,oiv[0][0]);
									ov[1].splice(i,0,oiv[1][0]);
								}
							}else{
								for(j=0,l=oiv[0].length;j<l;j++){
									ov[0].splice(i-1,0,oiv[0][l-j-1]);
									ov[1].splice(i,0,oiv[1][l-j-1]);
								}
							}
							
						}else{//首项也是乘除式

							//oiv[0]=oiv[0].concat('×');
							ov[0]=oiv[0].concat(ov[0]);
							ov[1]=oiv[1].concat(ov[1].slice(1));
						}
					}
					if(oif=='times'){
						if(i){

							ov[0]=copyA(ov[0][i-1],oiv.length-1).concat(ov[0]);
							ov[1].splice(i,1);
							for(j=0,l=oiv.length;j<l;j++){
								ov[1].splice(i,0,oiv[l-j-1]);
							}
							
							
						}else{//首项也是乘式

							ov[0]=copyA('×',oiv.length-1).concat(ov[0]);
							ov[1]=oiv.concat(ov[1].slice(1));
						}
					}
					
					
					if(oif=='-'){
						if(i){
							k=-k;
							ov[1][i]=oic;
						}else{
							
							if(!Mfn.is.b1.frac(A,o1c)){// 首项是 负式，但不是负有理数，也需提取系数-1
								k=-k;
								ov[1][i]=oic;
								
							}
							
							
							//首项是负项，暂时不处理
						}

					}
				}
				k=''+k;
				
				consolelog('k = ',k);
				
				
				var newV=[[],[]],isnegk=0;// newV[中缀运算符A，元素A]
				for(var j=0,l=ov[1].length;j<l;j++){
					var o0j=ov[0][j-1], o1j=ov[1][j], dividej=j && o0j=='÷';
					
					if(Mfn.is.b1.frac(A,o1j)){
						
						consolelog('乘积的一项，是有理数，A = ',A,'o1j = ',o1j,'A[1][o1j] = ',A[1][o1j],'o0j = ',o0j);
						var kj=Mfn.toStr(Mfn.build.A(A,o1j));
				consolelog('k = ',k,'j = ',j, 'kj = ',kj,'j = ',j,'o0j = ', o0j,'dividej = ',dividej);
						k=fracOpr(dividej?'/':'*',k,kj);
				consolelog('k = ',k,'j = ',j, 'kj = ',kj);
				
					}else if(A[1][o1j].f=='times'){
						
						var o1jo=A[1][o1j],o1jov=o1jo.v;
						for(var m=0,n=o1jov.length;m<n;m++){
							var om=o1jov[m];
							if(Mfn.is.b1.Var(A,om)){
								newV[0].push(dividej?'÷':'×');
								newV[1].push(om);
							}else{//num
								var kj=Mfn.toStr(Mfn.build.A(A,om));
								k=fracOpr(dividej?'/':'*',k,kj);
				consolelog('k = ',k,'j = ',j,' m = ',m);
								if(''+k=='0'){
									break 
								}
							}
							
						}
consolelog('中缀运算符数组',newV[0].join('；'));
consolelog('乘积项数组 ',newV[1].join('；'));


/*
					}else if(A[1][o1j].f=='pow'){
						
						var o1jo=A[1][o1j],o1jov=o1jo.v;
*/
						
						

					}else{
						
						newV[0].push(dividej?'÷':'×');
						newV[1].push(o1j);
						
					}
					if(k=='0'){
						break 
					}

				}

consolelog('中缀运算符数组 变成',newV[0].join('；'));
consolelog('乘积项数组 变成',newV[1].join('；'));

				if(k=='0'){
					return Mfn.fromStr(0)
				}

				if(newV[1].length >1 && p!='Mtrx'){//不是矩阵，则一般满足乘法交换律，此时乘法靠前，除法靠后
					
					var nV=[],nVP=[];//底，相应幂次数组
					for(var m=0,n=newV[1].length;m<n;m++){
						var n1m=newV[1][m], isn0mTime=newV[0][m]=='×', mo=A[1][n1m], ismop=mo.f=='pow', mi=nV.indexOf(n1m);
						
						if(mi>-1){//查到索引（显然一定是底）
							if(A[2][n1m]=='0'){
								return Mfn.fromStr(0)
							}
							
							nVP[mi].push(A.ref(isn0mTime?1:-1));
							consolelog('查到索引（显然一定是底）',nVP.join(' ;; '),A[2].join(' ---- '));

						}else if(ismop){//是幂形式
							var mov0=mo.v[0], mov1=mo.v[1];
							
							consolelog('是幂形式 mov0=',mov0,'mov1=',mov1);
							if(A[2][+mov0.replace(/\D/g,'')]=='0'){
								return Mfn.fromStr(0)
							}


							mi=nV.indexOf(mov0);
							
							if(mi<0){
								mi=nV.length;
								nV.push(mov0);
								nVP.push([]);
								consolelog('是幂形式',nVP.join(' ;; '),A[2].join(' ---- '));
							}
							
							
							/*
							if(Mfn.is.b1.frac(A,mov1)){//幂是有理数
								nVPn[mi]=nVPn[mi]?fracOpr(isn0mTime?'+':'-',nVPn[mi], Mfn.build.A(A,mov1).toStr()):Mfn.build.A(A,mov1).toStr()
							}else{
							//	nVPv[mi]=nVPv[mi]?Mfn.simRef(A,A.ref(nVPv[mi]+'+'+mov1)):mov1

							}
							
							*/
							consolelog('mi = ',mi);
							
							nVP[mi].push(isn0mTime?mov1:A.ref('-'+mov1))
							
							consolelog(nVP.join(' ;; '),'A[2] = ',A[2].join(' ---- '));
							
						}else{//是底，未查到索引
							nV.push(n1m);
							nVP.push([A.ref(isn0mTime?1:-1)]);

							consolelog('是底，未查到索引',nVP.join(' ;; '));
						}
					}
					
					
					consolelog('底，nV=',nV.join(' ; '),'相应幂次数组 nVP=',nVP.join(' ; '),A,'k = ',k);
					
					var nV0=[],nV1=[];//乘元，除元
					for(var m=0,n=nV.length;m<n;m++){
						var nm=nV[m], nmP=nVP[m], //底，幂数组
							nmo=A[1][nm],nmof=nmo.f,nmoc=nmo.c,nmov=nmo.v; //底

						consolelog('m=',m,'底 = ',nm,'幂数组 = ',nmP);
						if(nmof=='num'){//底是数
							if(nmoc=='1'){//1的任何次幂都是1
								nVP[m]=nm
							}else{
								
								
								
							}
							
							
							
						}
						
						
						if(isArr(nmP)){
							if(nmP.length>1){
								consolelog('幂数组 ，做一次加法');
						
								var B=Mfn.build.A(A), Bi=B[2].length;
								B[0]='@'+Bi+'&';
								B[1][B[0]]={'f':'pms', 'c':nmP.join('+'), 'v':[copyA('+',nmP.length-1),nmP]};
								B[2].push(nmP.join('+'));
								
								var mo={};
								consolelog(B,A,'B[2] = ',B[2].join(' ; '));
								
								consolelog(B[0]);
								
								
								mo[B[0]]=Mfn.opr1('=',B,1).toStr();
								
								consolelog(mo);
								Mfn.opr1(':',A,1,mo);
								nmP=B[0];
								consolelog('化简为表达式，外换元后 A=',A,'nm = ',nm);
			
								
								
							}else{
								nmP=nmP[0]
							}
							
							var nmPo=A[1][nmP],nmPof=nmPo.f,nmPoc=nmPo.c,nmPov=nmPo.v; //幂
							
							consolelog('幂 nmPof=',nmPo.f,'nmPoc=',nmPo.c,'nmPov=',nmPo.v,'A =', A);
							
							if(nmPof=='num'){
								if(nmPoc=='0'){
									
									
									
								}else if(nmPoc=='1'){
									nV0.push(nm)
									
									
								}else{
									
									nV0.push(A.ref(nm+'^'+nmP))
									
									
								}
								
								
								
								
							}else if(nmPof=='-'){
								
								
								
								var oi=A[1][nmPoc], oif=oi.f, oic=oi.c, oiv=oi.v;
								if(oif=='num'){
									if(oic=='1'){
										nV1.push(nm)
									
									
									}else{
										
										nV1.push(A.ref(nm+'^'+nmPoc))
										
										
									}
									
								}else{
									nV1.push(A.ref(nm+'^'+nmPoc))
									
									
								}
								
							}else if(nmPof=='pms' && nmPov[0].indexOf('+')<0 && A[1][nmPov[1][0]].f=='-'){// a^(-b-c)型
								nmP=A.ref([A[1][nmPov[1][0]].c].concat(nmPov[1].slice(1)).join('+'))
								nV1.push(A.ref(nm+'^'+nmP))
								
								
							}else{
								nV0.push(A.ref(nm+'^'+nmP))
							}
							
						}
						
						

						
					}//底幂 循环结束
					
					
					
					/*
					var nV0=[],nV1=[];//乘元，除元
					for(var m=0,n=newV[1].length;m<n;m++){
						if(newV[0][m]=='×'){
							
							
							
							
							nV0.push(newV[1][m]);
						}else{
							
							
							
							
							nV1.push(newV[1][m]);
						}
					}
					
					// ×÷相消		抵消
					for(var i=0;i<nV0.length && nV1.length;i++){
						var ni=nV0[i],nj=nV1.indexOf(ni);
						if(nj>-1){
							nV0.splice(i,1);
							nV1.splice(nj,1);
							i--;
						}
					}
					*/
					
			consolelog('乘法交换律处理：newV[1] = ',newV[1], 'newV[0] = ',newV[0], '乘元 nV0 = ',nV0, ' 除元 nV1 = ',nV1);
					
					
					if(nV0.length){

						newV[0]=['×'];
						if(nV0.length>1){
							nV0.sort(function(x,y){// 乘元排序
								return Mfn.toStr(Mfn.build.A(A,x))<Mfn.toStr(Mfn.build.A(A,y))?-1:0;
							});
							newV[1]=[A.ref(nV0.join(''))];

						}else{
							newV[1]=nV0;
						}
					}else{
						newV[0]=[];
						newV[1]=[];
					}
					if(nV1.length){

						newV[0].push('÷');
						if(nV1.length>1){
							nV1.sort(function(x,y){// 除元排序
								return Mfn.toStr(Mfn.build.A(A,x))<Mfn.toStr(Mfn.build.A(A,y))?-1:0;
							});
							newV[1].push(A.ref(nV1.join('')));
						}else{
							newV[1].push(nV1[0]);
						}
					}
					
				}//乘法交换律 处理结束
				
				
				
				consolelog('k = ',k);

				consolelog('newV = ',newV.join('；'));
				

				
				

				
				
				if(newV[0].length){//有中缀运算符

					if(/-/.test(k)){
						isnegk=1;
						k=k.substr(1);
					}
					
					
					consolelog('有中缀运算符 newV = ',newV.join(' ----- '));
					
					
					
						
					//乘法结合律	相邻项相同，或是同底的幂（幂合并）
						var nV0=[],nV1=[];//乘元，除元

				consolelog('结合律处理完毕');
					
				
					
					
					
					
					
					
					
					
					
					
					newV[1].unshift(1);
					
					var ojc=snake(newV).join('');// 1×a÷b	 1×a	 1÷b
					
					var B1i=ojc;
					consolelog('B1i = ',B1i,'k = ',k, 'k = ',k,'A = ',A);
					if(/1×.+÷/.test(B1i)){
consolelog(B1i);
						if(k=='1'){
							B1i=B1i.substr(2);
						}
						var t0=A.ref(B1i),t=t0;
consolelog('t=',t, 'k=',k);
						if(k!='1'){//有理系数

							t=A.ref(k);

							t=A.ref(t+'×'+t0);
							
						}
						A[0]=t;

					}else if(/1÷/.test(B1i)){//1÷
						B1i=B1i.substr(2);
consolelog('B1i = ',B1i,'k = ',k);
						var t=A.ref(k);
consolelog('t = ',t);
						A[0]=A.ref(t+'÷'+B1i);
consolelog(A[0],A);
					}else{//纯引用	或/1×/.test(B1i)

						if(/1×/.test(B1i)){
							B1i=B1i.substr(2);
						}
						
consolelog(k,B1i);
						
						if(k=='1'){
							A[0]=B1i;

						}else{
							var t=A.ref(k);
consolelog('A.ref(k) = ',t,'A[2] = ',A[2]);//bug divide(['5^n',3])
							A[0]=A.ref(t+B1i);
						}
					}
					
					if(isnegk){
consolelog(A[0]);
						A[0]=A.ref('-'+A[0]);
					}
					
					
					return A
					
				}else{//有理常数
					
					return Mfn.fromStr(k)
				}
					
			}//tds化简完毕
			
//bug rcp('a')
			
			
			if(of=='pow'){
consolelog('化简 pow（仅部分情况）， 以及其他情况暂不化简');
				
				var o0=A[1][ov[0]], o0c=o0.c, o0v=o0.v, o0f=o0.f,
					o1=A[1][ov[1]], o1c=o1.c, o1v=o1.v, o1f=o1.f;
				
				if(o0f=='num'){
					if(o0c=='0'){// 0^x
						return Mfn.fromStr(0);
					}
					if(o0c=='1'){// 1^x
						return Mfn.fromStr(1);
					}
					if(o0c=='-1'){// (-1)^x
						
					}
					
					
					
				}
				
				
				
				
				if(o1f=='num'){
					if(o1c=='0'){// x^0
						if(p=='Mtrx'){
							return Mfn.fromStr('I');
						}
						return Mfn.fromStr(1);
					}
					if(o1c=='1'){// x^1
						A[0]=ov[0]
						return Mfn.opr1('=',A,sim,p);
					}
					
				}
				if(o1f=='-' && p!='Mtrx'){
					if(o0f=='tds' && o0v[0].length==1 && o0v[0][0]=='÷'){// (a/b)^(-x) =(b/a)^x
						
						A[1][ov[0]].v[1]=[o0v[1][1],o0v[1][0]]
						
						A[1][A0].v[1]=o1c;
						return Mfn.opr1('=',A,sim,p);
					}
					
					if(A[1][o1c].f=='num' && A[1][o1c].c=='1'){// ^(-1)	=1/
						


						A[0]=ov[0];
						return Mfn.opr1('1/',A,sim,p);
						
						
					}
				}
				
				if(Mfn.is.b1.frac(A,ov[0]) && Mfn.is.b1.frac(A,ov[1])){//有理数幂		bug 01110-31-30 求特征值
					var a=Mfn.build.A(A,ov[0]).toStr(),b=Mfn.build.A(A,ov[1]).toStr();
					consolelog(a,b,fracOpr('^',a,b));
					return Mfn.fromStr(fracOpr('^',a,b))
				}else{
					
					
				}
				
				
			}
			
			
			
			
			
			
			return A
		}
		



		if(op==':num'){//内换元（数值）赋值或换数		参数p对象{'x':1, 'y':'2%', 'z':'0.73', '@4$':'6.8', 'π':'3.1415926', '2%':'4.5'}	键(变量单字母、@\d$引用、num值)：值（num值，非负整数、非负（百分）小数）
				consolelog(':num内换元  p = ',p,'A = ',A);
			var iA=[];
			$.each(p,function(i,v){
				if((i+'')[0]=='@'){
					iA.push([i.replace(/\D/g,''),v])
				}else{
					iA.push([A[2].indexOf(i+''),v])
				}
			});
			for(var i=0,l=iA.length;i<l;i++){
				var i0=iA[i][0], ii='@'+i0+'&',iv=iA[i][1];
				consolelog('num内换元ii , iv ',ii,iv);
				if(!A[1][ii]){
					ii='@'+i0+'$'	//注意，这里从num转变成var, 键没跟着改（@$ → @&），是因为会影响其他表达式的引用
				}
				if(A[1][ii]){
					consolelog('num内换元',A[1][ii]);
					A[1][ii]={'f':'num','c':iv,'v':Decimal.fromStr(iv)};
					A[2][i0]=iv;
					consolelog('数值替换 ',iv);
				}
				
			}
			consolelog(':num A[2] = ',A[2].join(' ; '),'p: ',p);
			return A
		}
		
		
		if(op==':var'){//内换元（变量），置换变量		参数p对象{'x':'y', 'a':'b', '@2$':'c', '@3&':'d', '2.71828':'e'}键(变量单字母、@引用、num值)：值（变量单字母）
			
			var iA=[];
			$.each(p,function(i,v){
				if((i+'')[0]=='@'){
					iA.push([i.replace(/\D/g,''),v])
				}else{
					iA.push([A[2].indexOf(i+''),v])
				}
			});
			consolelog('内换元 iA = ',iA.join('; '));
			for(var i=0,l=iA.length;i<l;i++){
				var i0=iA[i][0], ii='@'+i0+'&',iv=iA[i][1];
				if(!A[1][ii]){
					ii='@'+i0+'$'	//注意，这里从num转变成var, 键没跟着改（@$ → @&），是因为会影响其他表达式的引用
				}
				if(A[1][ii]){
					A[1][ii]={'f':'var','c':iv,'v':iv};
					A[2][i0]=iv;
				}
consolelog('A[1][',ii,'] = ',A[1][ii],'A[2][',i0,'] = ',A[2][i0],A[2],A[1]);
			//	Mfn.uniRef(A,iv);		此处不能用，因为换元后，精简变量（无法确定后续是否有操作），可能影响后续的引用


			}
			return A
		}
		
		if(op==':@'){//内换元（引用），内部替换成内部引用		参数p对象{'x':'@1$', 'a':'@2&', '@2$':'@3&', '@3&':'@4&', '2.71828':'@5&'}键(变量单字母、@引用、num值)：值（内部引用@）

			var iA=[];
			$.each(p,function(i,v){
				if((i+'')[0]=='@'){
					iA.push([i.replace(/\D/g,''),v])
				}else{
					iA.push([A[2].indexOf(i+''),v])
				}
			});
			
			consolelog('内换元 （引用） iA = ',iA.join('; '));
			for(var i=0,l=iA.length;i<l;i++){
				var i0=iA[i][0], ii='@'+i0+'&',iv=iA[i][1];
				if(!A[1][ii]){
					ii='@'+i0+'$'	//注意，这里从num转变成var, 键没跟着改（@$ → @&），是因为会影响其他表达式的引用
				}
				if(A[1][ii]){
					A[1][ii]=A[1][iv];
					A[2][i0]=iv;
				}
				
			}
			return A
		}
		


		if(op=='::'){//外换元（对象），从外面引进Mfn对象		参数p对象{'x':A, 'a':B, '@2$':C, '@3&':D, '2.71828':E}键(变量单字母、@引用、num值)：值（Mfn对象）
			consolelog('::外换元',p);
			var iA=[];
			$.each(p,function(i,v){
				if((i+'')[0]=='@'){
					iA.push([i.replace(/\D/g,''),v])	//明确给出的大索引序号, 对象
				}else{
					iA.push([A[2].indexOf(i+''),v])		//通过查找得到大索引序号, 对象
				}
			});
			for(var i=0,l=iA.length;i<l;i++){
				var i0=iA[i][0], ii='@'+i0+'&',iv=iA[i][1];
				if(!A[1][ii]){//未查到@ &索引
					ii='@'+i0+'$'	//注意，这里从num转变成var, 键没跟着改（@$ → @&），是因为会影响其他表达式的引用
				}
				
				consolelog('i = ',i,'外换元（对象），从外面引进Mfn对象 iv = ',iv,' 此时A[2] = ',A[2].join(' ; '));

				if(A[1][ii]){//查到@ 索引
					consolelog(iv[0]);
					consolelog(iv[1]);
					
					consolelog(iv[1][iv[0]]);
					
					var y=iv[1][iv[0]], yf=y.f, yc=y.c, yt=iv[2][+iv[0].replace(/\D/g,'')], Al=A[2].length;
					
					
					

					if(yf=='num' || yf=='var'){//数值、变量	// || yf=='_'
						/*
							if(yf=='num'){
								iv='@'+Al+'$';
							}else{
								iv='@'+Al+'&';
							}
							
							A[1][ii]=y;
							A[2].push(iv);
						*/
			consolelog('外换元（对象）数值、变量 yc = ',yc);
						A[1][ii]=A[1][A.ref(yc)];
					
					}else{//其它复合表达式	直接嫁接到A
						$.each(iv[1],function(k,v){//遍历外部Mfn的索引关系
							var vf=v.f, k2=k.replace(/\d+/,function(x){return +x+Al});
							
	consolelog('外部Mfn 索引 ',k,' 值 ',v);
							

							if(vf=='num' || vf=='var'){// || vf=='_'){
								
							}else{
								v.c=v.c.replace(/@\d+[&\$]/g,function(r){return r.replace(/\d+/g,function(x){return +x+Al})})
								if(v.v && isArr(v.v)){
									if(isArr(v.v,1)){
										consolelog('二维中缀数组 v.v = ', v.v.join(' ; '));
										v.v[1]=Arrf(function(r){return r.replace(/\d+/g,function(x){return +x+Al})},v.v[1]);
										
									}else{

										consolelog('数组 v.v = ', v.v.join(' ; '));

										v.v=Arrf(function(r){return r.replace(/\d+/g,function(x){return +x+Al})},v.v);
									}
								}
							}
							A[1][k2]=v;
							
	consolelog('变成内部 索引 ',k2,' 值 ',v);
						});
						
						
						A[2]=A[2].concat(Arrf(function(r){return /@/.test(r)?r.replace(/\d+/g,function(x){return +x+Al}):r},iv[2]));

						var iv=iv[0].replace(/\d+/,function(x){return +x+Al});
						A[1][ii]=A[1][iv];

						A[2][i0]=A[2][+iv.replace(/\D/g,'')];
						
						consolelog('开始统一变量别称 uniRef, A[2] = ',A[2].join(' '));
						//Mfn.uniRef(A);
					}

				}
				
			}
			return A
		}
		

		
		if(op==':'){//外换元，换函数，换数，赋值等			参数p对象{'x':'y', 'a':'-a', 'sin':'cos'}	键(变量单字母、@引用、num值、函数名)：值（Mfn对象、变量单字母、num数值、表达式字符串、内部引用@、函数名）
			consolelog('外换元: 开始 A[2] = ',A[2].join(' ; '),'p = ',p);
		
			$.each(p,function(i,v){
				var o={};
				o[i]=v;
				
			consolelog('新值 v = ', v, isArr(v),isVar(v),/@/.test(v),/\d+(\.?\d)*[%‰‱]?$/.test(v));
				if(isArr(v)){//数组，即Mfn对象

					A=Mfn.opr1('::',A,sim,o)
					
				}else if(isVar(v)){
					A=Mfn.opr1(':var',A,sim,o)
						
				}else if(/@/.test(v)){
					A=Mfn.opr1(':@',A,sim,o)
					
				}else if(/^\d+(\.?\d)*[%‰‱]?$/.test(v)){
					consolelog('外换元p:',p,'i= ',i,'v= ',v,'A = ',A);
					A=Mfn.opr1(':num',A,sim,o)
						
				}else if(ZLR(SBSFUN.replace(/⁻¹/g,'⁼')).indexOf((''+v).replace(/⁻¹/g,'⁼'))>-1){
					var v0=(''+v).replace(/⁻¹/g,'⁼'), i0=i.replace(/⁻¹/g,'⁼');
					consolelog('是函数:',v0);
					
					$.each(A[1],function(k,vv){
						if(vv.f==i0){
							vv.f=v0;//A[1][k].f=v0;
							A[2][+k.replace(/\D/g,'')]=A[2][+k.replace(/\D/g,'')].replace(i0,v0)
						}
					});
					
				}else{//表达式字符串
					consolelog('换元 表达式字符串',v);
					o[i]=Mfn.fromStr(v);
					A=Mfn.opr1('::',A,sim,o)
				}
			});
			consolelog(':外换元结束', A);
			
		//	return Mfn.fromStr(1)
			return A

		}



//有理数的代数运算

		if(sim){//指定是否深度递归化简
			return Mfn.opr1('=',p?Mfn.opr1(op,A,'',p):Mfn.opr1(op,A))
		}
		

consolelog('op = ',op);
		if(Mfn.is.b1.frac(A)){
			var Fr=FracReduct(Mfn.toStr(A));//bug 这里需弃用toStr	嫌慢
			consolelog('A是有理数 ',Fr);
			var s=Frac.opr1(op,Fr,p);
			consolelog('有理数一元运算结果 ',s);
			return Mfn.fromStr(isStr(s)?s:s.toStr())
		}

		
		if(op=='||'){//绝对值

			
			if(of=='-'){// |-x| = |x|
				A[0]=oc;
				return Mfn.opr1('||',A,sim)
			}

			if(of=='num'){
				A[0]=oc;
				return A
			}


			//一般情况下 |x|
			A[0]=A.ref('|'+A0+'|');
			return A

		}



//下面是常见一元代数运算：

		if(op=='-'){//相反数
			
			if(of=='-'){// - (-x) = x
				A[0]=oc;
				return A
			}
consolelog('相反数 ',A);
			//一般情况下 -x
			

			A[0]=A.ref('-'+A0);

consolelog('相反数后 ',A);
			return A

		}
		if(op=='1/'){//倒数

			if(of=='-'){// 1/(-x) = -(1/x)
				
consolelog('1/- ',A[0]);
				
				A[0]=oc;
				return Mfn.opr1('-',Mfn.opr1('1/',A,sim),sim)
			}
			
			if(of=='tds' && ov[0].length==1 && ov[0][0]=='÷' && ov[1].length==2){
				
consolelog('1/ , tds ov=',ov);
				if(ov[1][0][0]=='@' && A[1][ov[1][0]].f=='num' && A[1][ov[1][0]].c=='1'){// 1/ (1/x)  = x
					A[0]=ov[1][1];
					return A
				}
				A[1][A0].v=[ov[0],ov[1].reverse()];	// 1/(a/b) = b/a
				
				return A
			}
			if(of=='pow' && ov.length==2){
				if(ov[1][0]=='@'){
					var o1=A[1][ov[1]];
					if(o1.f=='-'){
						if(A[1][o1.c].f=='num' && A[1][o1.c].c=='1'){// 1/ x^(-1) = x
							A[0]=ov[0];
							return A
						}
						A[1][A0].v=[ov[0],o1.c]; // 1 / x^(-y) = x^y
						
						return A
					}

				}

			}
			if(of=='sin'){
				A[1][A0].f='csc';
				return A
			}
			if(of=='csc'){
				A[1][A0].f='sin';
				return A
			}
			if(of=='cos'){
				A[1][A0].f='sec';
				return A
			}
			if(of=='sec'){
				A[1][A0].f='cos';
				return A
			}
			if(of=='tan'){
				A[1][A0].f='cot';
				return A
			}
			if(of=='cot'){
				A[1][A0].f='tan';
				return A
			}

			if(of=='sh'){
				A[1][A0].f='csch';
				return A
			}
			if(of=='csch'){
				A[1][A0].f='sh';
				return A
			}
			if(of=='ch'){
				A[1][A0].f='sech';
				return A
			}
			if(of=='sech'){
				A[1][A0].f='ch';
				return A
			}
			if(of=='th'){
				A[1][A0].f='cth';
				return A
			}
			if(of=='cth'){
				A[1][A0].f='th';
				return A
			}




			//一般情况下		1/x
			var t=A.ref(1);
			A[0]=A.ref(t+'÷'+A0);
			return A


		}
		if(op=='^2'){
			if(of=='-'){// (-x)^2 = x^2
				A[0]=oc;
				return Mfn.opr1('^2',A,sim)
			}
			if(of=='√'){// (√x)^2 = x
				A[0]=oc;
				return A
			}
			if(of=='∜'){// (∜x)^2 = √x
				A[1][A0].f='√';
				return A
			}



			if(of=='pow' && ov.length==2){
				var s1=Mfn.build.A(A,ov[1]), st=s1.toStr();

				//if(ov[1][0]=='@' && A[1][ov[1]].f=='tds' && /^@\d+\$,@\d+\$$/.test(A[1][ov[1]].c) && ov[0][0]=='÷' && ){// ( x^(1/2) )^2 = x
				if(st=='1/2' || st=='0.5'){// ( x^(1/2) )^2 = x
					A[0]=ov[0];
					return A
				}
				
				// (x^y)^2 = x^(2y)
				
				/*
				A[1][A0].v=[ov[0],ov[1]];
				return A
				*/
				var o={};o[ov[1]]=Mfn.oprs('×',[Mfn.build.A(A,ov[1]),'2'],1);
		
				return Mfn.opr1(':',A,sim,o)	//换元
			}



			//一般情况下	x^2
		
			var t=A.ref(2);
			A[0]=A.ref(A0+'^'+t);
			return A
		}
		if(op=='^3'){

			if(of=='-'){// (-x)^3 = -x^3
				A[0]=oc;
				return Mfn.opr1('-',Mfn.opr1('^3',A,sim),sim)
			}
			if(of=='∛'){// (∛x)^3 = x
				A[0]=oc;
				return A
			}


			if(of=='pow' && ov.length==2){
				var s1=Mfn.build.A(A,ov[1]), st=s1.toStr();

				if(st=='1/3'){// ( x^(1/3) )^3 = x
					A[0]=ov[0];
					return A
				}
				
				// (x^y)^3 = x^(3y)
				
				/*
				A[1][A0].v=[ov[0],ov[1]];
				return A
				*/
				var o={};o[ov[1]]=Mfn.oprs('×',[Mfn.build.A(A,ov[1]),'3'],1);
				return Mfn.opr1(':',A,sim,o)	//换元
			}



			//一般情况下	x^3
			var t=A.ref(3);
			A[0]=A.ref(A0+'^'+t);
			return A
			
		}
		if(op=='√'){


			if(of=='√'){// √(√x) = ∜x
				A[1][A0].f='∜';
				return A
			}




			if(of=='pow' && ov.length==2){// √(x^2) = |x|
				var s1=Mfn.build.A(A,ov[1]), st=s1.toStr();


				if(st=='2'){// √(x^2) = |x|
					A[0]=ov[0];
					return Mfn.opr1('||',A,sim)
				}
				
				// √(x^y) = x^(y/2)
				
				/*
				A[1][A0].v=[ov[0],ov[1]];
				return A
				*/
				var o={};o[ov[1]]=Mfn.oprs('÷',[Mfn.build.A(A,ov[1]),'2'],1);
				return Mfn.opr1(':',A,sim,o)	//换元
			}



			//一般情况下	√x
			A[0]=A.ref('√'+A0);
			
			return A
		}
		if(op=='∛'){

			if(of=='pow' && ov.length==2){
				var s1=Mfn.build.A(A,ov[1]), st=s1.toStr();


				if(st=='3'){// ∛(x^3) = x
					A[0]=ov[0];
					return A
				}
				
				// ∛(x^y) = x^(y/3)
				
				/*
				A[1][A0].v=[ov[0],ov[1]];
				return A
				*/
				var o={};o[ov[1]]=Mfn.oprs('÷',[Mfn.build.A(A,ov[1]),'3'],1);
				return Mfn.opr1(':',A,sim,o)	//换元
			}



			//一般情况下	∛x
			A[0]=A.ref('∛'+A0);

			return A
		}
		
		if(op=='∜'){
			

			if(of=='pow' && ov.length==2){
				var s1=Mfn.build.A(A,ov[1]), st=s1.toStr();


				if(st=='4'){// ∜(x^4) = |x|
					A[0]=ov[0];
					return Mfn.opr1('||',A,sim)
				}
				
				// ∜(x^y) = x^(y/4)
				
				/*
				A[1][A0].v=[ov[0],ov[1]];
				return A
				*/
				var o={};o[ov[1]]=Mfn.oprs('÷',[Mfn.build.A(A,ov[1]),'4'],1);
				return Mfn.opr1(':',A,sim,o)	//换元
			}



			//一般情况下	∜x
			A[0]=A.ref('∜'+A0);

			return A
		}
	},


	oprs:function(op,arr,sim,p){/*多元运算	op中缀运算符字符串，或同级运算符数组 	arr对象(或表达式字符串)数组	sim是参数，指定是否深度化简		p参数（数学环境）		返回Mfn对象

*/

consolelog(sim);
		var l=arr.length, isAop=isArr(op), ops=isAop?[].concat(op):copyA(op,l-1), a=seqA(0,l),B=[];


//	consolelog('oprs  :     ',op,'arr = ',arr,'str = ',snake([ops,seqA(0,l)]).join('')); 

		var o={};

		for(var i=0;i<l;i++){
			var ai=arr[i];
			if(isArr(ai)){
				o['@'+i+'$']=ai
			}else{
				o['@'+i+'$']=''+arr[i]
			}
		}
		consolelog('oprs  :     ',op,'准备换元  o =',o);
		
		
		

		var A=Mfn.opr1(':',Mfn.fromStr(snake([ops,a]).join('')),'',o);
		consolelog('下面去括号');
		Mfn.simp(A,'','()');//去括号
	consolelog('oprs 结束之后   A=  ',A,'sim = ',sim);
	
/*		bug [λ-a+1 1;2 λ-a]&i1-=i2;i1/=	
		

0 1 0 0 0 0 1 0 0 0 0 1 a b c d

*/
		return sim?Mfn.opr1('=',A,'',p):A


	},



	

}, Polynomial={/*多项式（一种典型（含未知变量）的函数、重要的数学表达式）	复数的算术运算（i^2 = -1），矩阵多项式（乘法不可交换）的化简都依赖它




	*/









//下列涉及表达式类型识别

},eType=function(e){/*表达式类型	(形式判断，不考虑化简结果)
	numN:	自然数（非负整数）	
	numI:	整数				
	numD:	小数
	numF:	分数
	numQ:	有理数
	numA:	代数数
	numR:	实数
	numC:	复数
	

					
	nump:	幂									±a^b
	nump_n:	非负整幂（正整数次幂）				±a^n
	nump_i:	整幂（整数次幂）					±a^(±n)
	nump_r:	根（单位分数次幂，整数倒数次幂）	±a^(±1/n)
	nump_f:	分数幂（分数次幂，有理数次幂）		±a^(±m/n)

	*/



//下列涉及操作符类型识别

},oType=function(o){/*操作符类型
	返回数学实体名称
	
	*/
	if(/[∍∌∋⋑⊋⊉⊇⊅⊃⊂⊄⊆⊈⊊⋐∈∉∊]/.test(o)){
		return 'Set'
	}
	if(/[=≠≡≢≣≈≉≋≥>≰|≱<≤]/.test(o)){
		return 'Num'
	}
	if(/[≻⊁⋡≽⋟≿⋩⊱⊰⋨≾⋞≼⋠⊀≺]/.test(o)){//抽象对象 偏序
		return 'Abstract'
	}



//下列涉及运算符 运算

},opneg=function(o){// 运算符取相反
	if(o[0]=='-'){
		return o.substr(1);
	}else{
		return '-'+o
	}

},opinv=function(o){/* 运算符取逆
	
	a^b ，x开b次方：x^(1/b)	逆运算得到a		(a^b)^(1/b)=a
		log_a(x) 逆运算得到b				log_a(a^b)=b
	
	log_a(b) , a^x	逆运算得到b				a^(log_a(b))=b
			b^(1/x) 逆运算得到a			b^(1/log_a(b)) = a
	*/
	if(o=='+'){return '-'}
	if(o=='-'){return '+'}
	if(o=='*'){return '/'}
	if(o=='/'){return '*'}
	if(o=='×'){return '÷'}
	if(o=='÷'){return '×'}

//下列涉及上下文处理（增加括号避免歧义、按数学习惯简化公式写法）

},pptd=function(t,atFirst,notlatex){//乘除环境	t是Mfn或者字符串，atFirst指定是否是第一项	返回字符串
	var a=isArr(t),A=a?t:Mfn.fromStr(t), x=Mfn.opr1('type',A);
	if(!a){
		if(/^1$/.test(t)){
			return ''
		}
		if(''+t=='-1' && atFirst){
			return '-'
		}
	}

consolelog(x);

	if(x=='pms' || x=='-' && !atFirst){//加括号
		return Mfn.toStr(A,!notlatex,1)
	}
consolelog(A,!notlatex);
	return Mfn.toStr(A,!notlatex)

},pppow=function(t,notlatex){//指数的底数环境（阶乘环境也适用）	t是Mfn对象或者字符串 	返回字符串
	var a=isArr(t),A=a?t:Mfn.fromStr(t), x=Mfn.opr1('type',A);
	
	if(x=='_' || x=='var' || x=='num'){
		return Mfn.toStr(A,!notlatex)
	}
	return Mfn.toStr(A,!notlatex,1)




},simFactTimes=function(a){/*简化乘式中的阶乘a!
	a 数学表达式
	
	
	a=0,1，返回''
	a<3，返回计算结果a!
	
	否则，返回形式表达式
	
		返回latex字符串
		*/
	if(/^[01]$/.test(a) || ''+a==''){
		return ''
	}
	if(+a<3){
		return Fact(a)
	}
	return pppow(a)+'!'
	
},simTimesOf1=function(a,pms,tds){/*简化a(pms)tds
	被乘数	a 是数学表达式，不能是Latex字符串（因为a是乘积首项，要预先使用pptd(a,1)处理，而pptd处理Latex会报错！）
	乘数	pms(加减式 latex)
	乘数	tds(乘除式 latex)
	

		返回latex字符串
		*/
	var k=pptd(a,1);
	
	if(pms){
		if(k===''){
			return tds?zp(pms)+tds:pms
		}
		
		return k+zp(pms)+(tds||'')
	}
	
	if(k===''){
		return tds||''
	}
	if(k=='-' && !tds){
		return '-1'
	}
	
	
	if(/\d$/.test(k) && /^\d/.test(tds)){
		return k+'×'+tds
	}
	return tds?k+tds:a


},simPowOf1=function(a,b,pms,tds){/*简化a^b(pms)tds
	被乘式
		底数a  数学表达式
		指数b  数学表达式
	乘式 pms	加减式latex
	乘式 tds	乘除式latex
	
	如果a=1，则幂简化成1，并省略；
		否则a^b(pms)tds

		返回latex字符串
		*/
	
	if(''+a=='0'){
		return '0'
	}
	if(pms){
		if(''+a=='1'){
			return tds?zp(pms)+tds:pms
		}
		return pppow(a)+'^{'+b+'}'+zp(pms)+(tds||'')
	}
	return ''+a=='1'?(tds||''):pppow(a)+'^{'+b+'}'+(tds||'')

},simFracOf1=function(b,pmsA,tds){/*简化 /b pmsA tds

	分母b 数学表达式
	乘式 pmsA 加减式数组[符号数组, 元素数组(元素是latex字符串)]
	乘式 tds 乘除式latex
	
	
	
	
	如果b=1，则直接简化成分子
		(pms)tds 

	如果b=-1，则直接简化成分子的相反数
		
		pmsA符号数组中有-，(-pms)tds
		否则-(pms)tds 

	
	
	如果b是其它负数，
	
		pmsA符号数组中有-，(-pms)tds/_b
		否则-(pms)tds /_b

	
	其余情况，(pms)tds /b 
		
		
		
		返回latex字符串
		*/
	

	var t0=(tds && pmsA?zp(snake(pmsA).join('')):(pmsA?snake(pmsA).join(''):''))+(tds||''), t0_='-'+t0, hasneg=pmsA && pmsA[0].indexOf('-')>-1;
	if(hasneg){
		/*
		a-b+c 变成	b-c-a
		
		-a+b-c 变成 a+c-b
		*/
		var posA=[],negA=[];
		
		for(var i=0;i<=pmsA[0].length;i++){
			var a=pmsA[1][i], o=i?pmsA[0][i-1]:'+';
			if(i && o=='-'|| !i && /^-/.test(a)){
				posA.push(pmsA[1][i])
			}else{
				negA.push(pmsA[1][i])
			}
		}
		
		var pms=posA.join('+')+(negA.length?'-'+negA.join('-'):''), t1=tds?zp(pms)+tds:pms;
		
	}
	if(''+b=='1'){
		return t0
	}
	if(''+b=='-1'){
		if(hasneg){
			
			return t1
		}else{
		
			return t0_
			
		}
	}
	
	if(/^-/.test(b)){
		if(hasneg){
			return frac(t1,opneg(b),'')
				
		}else{
		
			return frac(t0_,opneg(b),'')
			
		}
	}
	
	return frac(t0,b,'')


},visiplus=function(t,notlatex){//加法环境	 t是Mfn对象或字符串	正数前加+，0省略，负数不变
	var a=isArr(t),A=a?t:Mfn.fromStr(t), x=Mfn.opr1('type',A);
	if(!a){
		if(/^0$/.test(t)){
			return ''
		}
	}

	if(x=='-'){
		return Mfn.toStr(A,!notlatex)
	}
	return '+'+Mfn.toStr(A,!notlatex)

},visiplusk=function(t){//加法环境（针对乘法系数k）	t是字符串表达式	非负数前加+，负数不变

	if(/^-/.test(t)){return t}
	return '+'+t
	
	

//下列涉及符号计算	函数首字母大写，表示对象，否则表示字符串输出

//对象
},Plus=function(A,sim){
	
	return Mfn.oprs('+',A,sim)
		
},Minus=function(A,sim){
	
	return Mfn.oprs('-',A,sim)

},Neg=function(A,sim){
	
	return Mfn.opr1('-',A,sim)


},Times=function(A,sim){
	
	return Mfn.oprs('×',A,sim)
		
},Divide=function(A,sim){
	
	return Mfn.oprs('÷',A,sim)

},Rcp=function(A,sim){
	
	return Mfn.opr1('1/',A,sim)
		
},Pow=function(A,sim){
	
	return Mfn.oprs('^',A,sim)
		
},Square=function(A,sim){
	
	return Mfn.opr1('^2',A,sim)
	
},Cubic=function(A,sim){
	
	return Mfn.opr1('^3',A,sim)
		
},Sqrt=function(A,sim){
	
	return Mfn.opr1('√',A,sim)
		
},Cbrt=function(A,sim){
	
	return Mfn.opr1('∛',A,sim)




//字符串输出
},plus=function(A,latex){
	
	return Mfn.oprs('+',A,1).toStr(latex)
		
},minus=function(A,latex){
	
	return Mfn.oprs('-',A,1).toStr(latex)

},neg=function(A,latex){
	
	return Mfn.opr1('-',A,1).toStr(latex)


},times=function(A,latex){
	
	return Mfn.oprs('×',A,1).toStr(latex)
		
},divide=function(A,latex){
	
	return Mfn.oprs('÷',A,1).toStr(latex)

},rcp=function(A,latex){
	
	return Mfn.opr1('1/',A,1).toStr(latex)
		
},pow=function(A,latex){
	
	return Mfn.oprs('^',A,1).toStr(latex)
		
},square=function(A,latex){
	
	return Mfn.opr1('^2',A,1).toStr(latex)
	
},cubic=function(A,latex){
	
	return Mfn.opr1('^3',A,1).toStr(latex)
		
},sqrt=function(A,latex){
	
	return Mfn.opr1('√',A,1).toStr(latex)
		
},cbrt=function(A,latex){
	
	return Mfn.opr1('∛',A,1).toStr(latex)


},pmtds=function(A,i,latex){//四则运算，当含有变量时，不化简，返回表达式，当常量时，返回化简结果。
	var o=typeof i=='number'?'+-×÷'[i]:i.replace('*','×').replace('/','÷');
	if(o=='÷'){
		return hasVar(A)?simFracOf1(A[1],'',A[0]):FracReduct(A)//注意，FracReduct结果中的分数a/b 不是latex形式
	}
	return Mfn.oprs(o,A,!hasVar(A)).toStr(latex)


},sums=function(A,B,latex){//形式线性组合	ax+by
	return Mfn.fromStr(plus(Arrf(function(x,i){return times([A[i],x])},B))).toStr(latex)
	//return plus(Arrf(function(x,i){return times([A[i],x])},B),latex)		bug 只显示一个分数，var A=["1/3", "-2/3", "2/3"],B=["x_1", "x_2", "x_3"];Plus(Arrf(function(x,i){return times([A[i],x])},B),1).toStr(1)

},sumx=function(A,x,n,latex){//向量分量的线性组合	x是向量字母
	return sums(A,zlrA((x||'x')+'_',seqA(1,n||A.length)),latex)

},kap=function(k,a,p,latex){//形式幂		ka^p
	return times([k,pow([a,p])],latex)


},fmin=function(A){//最小值
	var B=[].concat(A);
	B.sort(sortBy.num);
	return B[0]
	
},fmax=function(A){//最大值
	var B=[].concat(A);
	B.sort(sortBy.num);
	return B.slice(-1)[0]

// 下列涉及解方程运算





},equationsMS=function(A,m){/*解同模多元一次同余方程组，只考虑系数矩阵列满秩（或可逆）情况
	输入二维数组[a1,b1,c1,d1;a2,b2,c2,d2;...]
	ax+by+cz≡d (mod m)
	
	返回[计算结果数组, 步骤数组]


	*/
	var X=[], S=[],K=[].concat(A),l=K.length,n=K[0].length, A_=subMtrx(K,1,l,1,n-1),B=subMtrx(K,1,l,n,n),A_1=Mtrx.opr1('inv',A_),C=[];
	S.push('同余方程组'+mod('AX','B','m')+'，解相应的线性方程组AX=B+mC',
		'（其中C是任意一个n维列向量，元素只能是0或1），',
		'把方程组解向量化成标准形式（各个分量都用绝对最小剩余系来表示）',
		'得到下列几组不同的解');

	for(var i=0,c=Math.pow(2,n-1);i<c;i++){
		var bin=('0'.repeat(n-2)+i.toString(2)).substr(1-n),Bi=Mtrx.opr1('拷',B);//Bi=[].concat(B)  concat无法真正复制，而是引用
		for(var j=0;j<n-1;j++){
			if(bin[j]=='1'){
				Bi[j][0]=+Bi[j][0]+m
			}
		}
		var Xi=Mtrx.opr2('*',A_1,Bi);
		Arrf(function(x){//整数、分数化绝对最小剩余
			x[0]=equationM(/\//.test(x[0])?[x[0].split('/')[1],neg(x[0].split('/')[0])]:[1,neg(x[0])], m)[0][0].split('m')[0];
		},Xi);
		Xi=Xi.join();
		if(X.indexOf(Xi)>-1){
			C[X.indexOf(Xi)]+=','+bin;
			
		}else{
			X.push(Xi);
			C.push(bin)
		}
	}
	
	S.push(Table('',[['X','C'],[X.join(hr),C.join(hr)]],'TBr2c2'));
	return [X,S]
	

},equationsMX=function(A,p){/*解（x≡）一元一次同余方程组
	输入二维数组[b1,m1;b2,m2;...]
	
	返回[计算结果数组, 步骤数组]	计算结果数组为空表示无解

	参数 p 指定算法：
		p为空：默认（逐步满足法、待定法、方程转移法，递归）、
		p=1：孙子定理(中国剩余定理)

	*/
	var X=[], S=[],K=[].concat(A),flag=0;
	if(p!=1){
		sort2(K,'',[1]);K.reverse();//按模降序
	}
	S.push('方程组：'+br+mtrx(Arrf(function(x){return mod('x',x[0],x[1])},K).join(br),'l'));
	
	//剩余数，求绝对最小剩余
	Arrf(function(x){
		var m=Mod(x[0],x[1]);
		if(x[0]+''!=m+''){
			x[0]=m;
			flag=1;
		}
	},K);
	if(flag){
		S.push('等价于方程组：'+br+mtrx(Arrf(function(x){return mod('x',x[0],x[1])},K).join(br),'l'));
	}
	
	//缩减方程数规模：剩余数相同时，模合并成最小公倍数
	flag=0;
	for(var i=0;i<K.length;i++){
		for(var j=i+1;j<K.length;j++){
			var m=K[i][1],n=K[j][1],a=K[i][0],b=K[j][0];
			if(a==b){
				m=lcm([m,n]);
				K[i][1]=m;
				K.splice(j,1);
				j--;
				flag=1;
			}
		}
	}
	if(flag){
		if(p!=1){
			sort2(K,'',[1]);K.reverse();//按模降序
		}
		S.push('等价于 方程组：'+br+mtrx(Arrf(function(x){return mod('x',x[0],x[1])},K).join(br),'l'));
	}
	

	//判断是否无解	方程组有解的充要条件：任意两个模的公因数，整除相应模的剩余数之差
	var l=K.length;
	for(var i=0;i<l;i++){
		for(var j=i+1;j<l;j++){
			var m=K[i][1],n=K[j][1],a=K[i][0],b=K[j][0],g=gcd([m,n]),a_b=minus([a,b]),mo=Mod(a_b,g);//mo=(+a_b)%(+g);
			if(mo){
				S.push('根据方程'+(i+1)+'、'+(j+1)+'，gcd('+m+','+n+')='+g+br+'但'+mod(mo+''!=a_b?[a+'-'+b,a_b]:a+'-'+b,mo,g)+'，则方程组无解。');
				return [[],S]
			}
		}
	}

	//模互质化
	var K0=Arri(K,0),K1=Arri(K,1), m=Arrf(factorA,K1),M=Uniq(Arri(m,0).join()).split(',').sort(sortBy.num),Ml=M.length, I=Arri(m,1), B=[];


	Arrf(function(x,j){//扩充指数集
		var t=copyA(0,Ml);
		Arrf(function(y,i){t[M.indexOf(y)]=x[1][i]}, x[0]);
		I[j]=t;
	},m);
	var I0=Mtrx.opr1('拷',I);

	flag=0;
	for(var i=0;i<Ml;i++){
		var Ii=Arri(I,i), mx=max(Ii),mx1=0;
		Arrf(function(x){
			var xi=x[i];
			if(!xi){
			}else if(xi<mx || xi==mx && mx1){
				x[i]=0;
				flag=1;
			}else if(xi==mx){
				mx1=1
			}
		},I);
	}

	
	if(flag){
		var deli=[];
		Arrf(function(x,i){
			var t=Arrf(function(y,j){return pow([M[j],y])},I[i]), n=times(t);
			B[i]=n;
			K[i][1]=n;//更新大数组的模
			
			if(n=='1'){
				deli.push(i)
			}
			
		},I);
		deli.reverse();
		Arrf(function(i){
			B.splice(i,1);	//新模
			I.splice(i,1);	//指数集合
			I0.splice(i,1); //原指数集合
			
			K0.splice(i,1);	//余数
			
			K.splice(i,1);	//大数组
		},deli);

		S.push('对模作质数分解，指数分别如下：'+br+Table([['模\\质因数'].concat(M),K1],I0,'TBrc'));
		S.push('每个质数，指数只保留一个最大值，得到相应模：'+br+
				Table([['模\\质因数'].concat(M),B],I,'TBrc'));
		/*
			'原方程组等价于：'+br+
				mtrx(Arrf(function(x,i){return mod('x',K0[i],x)},B).join(br),'l'));
				*/
		if(p!=1){
			sort2(K,'',[1]);K.reverse();//按模降序
		}
		S.push('原方程组等价于：'+br+
				mtrx(Arrf(function(x){return mod('x',x[0],x[1])},K).join(br),'l'));
		
		//剩余数，求绝对最小剩余
		flag=0;
		Arrf(function(x){
			var m=Mod(x[0],x[1]);
			if(x[0]+''!=m+''){
				x[0]=m;
				flag=1;
			}
		},K);
		if(flag){
			S.push('也即等价于方程组：'+br+mtrx(Arrf(function(x){return mod('x',x[0],x[1])},K).join(br),'l'));
		}
	
	}

	/*OH(equationsMX([[4,90],[5,25],[6,1170]])[1].join(br))
	OH(equationsMX([[4,19],[71019,23]])[1].join(br))
	
	OH(equationsMX([[2,3],[3,5],[2,7]])[1].join(br))
	OH(equationsMX([[1,5],[2,3]])[1].join(br))
	OH(equationsMX([[4,5],[2,3]])[1].join(br))
	OH(equationsMX([[2,7],[4,8],[3,9]])[1].join(br))
	OH(equationsMX([[2,5],[-2,6],[-3,7]])[1].join(br))
	OH(equationsMX([[2,3],[3,5],[4,7]])[1].join(br))
	
OH(equationsMX([[2,3],[3,5],[2,7],[1,11]],1)[1].join(br))

		通解结构：
		b1+m1(t1+m2(t2+m3(t3+m4*k)))
		b1+m1t1+m1m2t2+m1m2m3t3+m1m2m3m4*k
		
		
		b1+m1t1 ≡ b2 mod m2			    t1 ≡ (b2-b1)/m1 mod m2
											   
											   
		b1+m1(t1+m2t2) ≡ b3 mod m3	    	t2 ≡ ((b3-b1)/m1-t1)/m2 mod m3		= ((b3-b1)-m1t1)/m1m2 mod m3
		b1+m1t1+m1m2t2 ≡ b3 mod m3			   ≡ (b3-b2)/m1m2 + d2 mod m3		其中分数d2=((b2-b1)/m1-t1)/m2
		b2+s2m2 +m1m2t2 ≡ b3 mod m3？？	其中s2=(b1+m1t1-b2)/m2
											   ≡ (b3-(b1+m1t1))/m1m2 mod m3	选这种形式表示
											   ≡ (b3-b1)/m1m2 - t1/m2 mod m3
											   
											   
		b1+m1(t1+m2(t2+m3t3) ≡ b4 mod m4    t3 ≡ (((b4-b1)/m1-t1)/m2-t2)/m3 mod m4
		b1+m1t1+m1m2t2+m1m2m3t3 ≡ b4 mod m4	≡ ((b4-b1)/m1m2 -t1/m2 -t2)/m3 mod m4
		b3+s3m3 +m1m2m3t3 ≡ b4 mod m4？？
											   ≡ (b4-b3)/m1m2m3 + d3 mod m4		其中分数d3=(((b3-b1)/m1-t1)/m2-t2)/m3
											   
											   ≡ (b4-(b1+m1t1+m1m2t2))/m1m2m3 mod m4	选这种形式表示
											   ≡ (b4-b1)/m1m2m3 -t1/m2m3 -t2/m3  mod m4

		*/
	l=K.length;	K0=Arri(K,0);K1=Arri(K,1);
	var Kn=times(K1);
	
	if(l==1){
		X.push(K[0].join('m'));
		S.push('解是'+K[0].join(' mod '));
		
	}else if(l==2){
		X.push(equationM([K1[0], minus(K0)],K1[1])[0][0].split('m')[0]);

		S.push('通过解方程'+mod(K0[0]+'+'+K1[0]+msub('k1'),K0[1],K1[1]),
			'得到'+msub('k1')+'='+X[0]);
		
		
		S.push('代入通解表达式'+K0[0]+'+'+K1[0]+'⋅'+msub('k1')+' mod '+K1.join('⋅'));
		
		var t=plus([K0[0],times([K1[0],X[0]])]);
		X=[Mod(t,Kn)+'m'+Kn];
		S.push('即'+t+' mod '+Kn,
			'也即'+X[0].replace('m',' mod '));
		
	}else if(l==3){
		X.unshift(equationM([K1[0], minus([K0[0],K0[1]])],K1[1])[0][0].split('m')[0])

		S.push('通过解方程'+mod(K0[0]+'+'+K1[0]+msub('k1'),K0[1],K1[1]),
			'得到'+msub('k1')+'='+X[0]);

		X.unshift(equationM([times([K1[0],K1[1]]), minus([plus([K0[0],times([K1[0],X[0]])]),K0[2]])],K1[2])[0][0].split('m')[0])
		
		S.push('通过解方程'+mod(K0[0]+'+'+K1[0]+'⋅'+msub('k1')+'+'+K1[0]+'⋅'+K1[1]+msub('k2'),K0[2],K1[2]),
			'得到'+msub('k2')+'='+X[0]);

		S.push('代入通解表达式'+K0[0]+'+'+K1[0]+'⋅'+msub('k1')+'+'+K1[0]+'⋅'+K1[1]+'⋅'+msub('k2')+' mod '+K1.join('⋅'));
		
		var t=plus([K0[0],times([K1[0],X[1]]),times([K1[0],K1[1],X[0]])]);
		X=[Mod(t,Kn)+'m'+Kn];
		S.push('即'+t+' mod '+Kn,
			'也即'+X[0].replace('m',' mod '));

		
	}else if(p==1){//孙子定理
		/*
		使用孙子定理，通解结构，设M=m1m2m3m4...：
		b1t1M1 + b2t2M2 + b3t3M3+...	+m1m2m3m4*k
		
	=	M(b1t1/m1 + b2t2/m2 + )		+Mk
		
		
		其中Mi=M/mi
			tiMi≡1 (mod mi)
		*/
		S.push('应用孙子定理，最小公倍数M='+prod('i',1,l,msub('mi'))+'='+Kn+'，'+msub('Mi')+'='+frac('M',msub('mi'))+'，i=1,2,⋯,'+l,
			'分别解出方程'+mod(msub('xi')+msub('Mi'),1,msub('mi'))+'，得到'+msub('xi')+'，i=1,2,⋯,'+l);
		var B=[];
		for(var i=0;i<l;i++){
			var x=1;
			var mi=K1[i], Mi=divide([Kn,mi]);

			x=equationM([Mi, -1],mi)[0][0].split('m')[0];
			X.push(x);
			B.push(times([K0[i],x,Mi]));
		}
		S.push(X);

		var t=plus(B);
		X=[Mod(t,Kn)+'m'+Kn];
		S.push('代入通解表达式',
			sum('i',1,l,msub('bi')+msub('xi')+msub('Mi'))+' mod M',
			'得到'+t+' mod '+Kn,
			'也即'+X[0].replace('m',' mod '));

	}else{

		S.push('应用逐步满足法，根据方程组'+mod(msub('b1')+'+'+sum('i',1,'t-1',lrp(msub('ki')+prod('j',1,'i',msub('mj')))),msub('bt'),msub('mt')),
			'其中t=2,3,⋯'+l+'，依次解出'+msub('ki')+'，i=1,2,⋯,'+(l-1));

		var b=K0[0];
		for(var i=1;i<l;i++){
			var Ki=times(K1.slice(0,i));
			X.unshift(equationM([Ki, minus([b,K0[i]])],K1[i])[0][0].split('m')[0]);
			b=plus([b,times([Ki,X[0]])]);
		}
		X.reverse();
		S.push(X);
		X=[b+'m'+Kn];

		S.push('全部代入通解表达式',
				msub('b1')+'+'+sum('i',1,l,lrp(msub('ki')+prod('j',1,'i',msub('mj'))))+' mod M',
			'得到'+n+' mod '+Kn,
			'也即'+X[0].replace('m',' mod '));

	}

	if(/-/.test(X[0])){
		S.push('也即'+plus(X[0].split('m'))+X[0].replace(/.+m/,' mod '))
	}
	return [X,S]

},equationM=function(K,m,dtl){/*解一元同余方程
	输入整系数数组
	
	返回[计算结果13m27数组, 步骤数组]	计算结果数组为空表示无解

	参数 m 指定模
	参数 dtl 指定记录步骤
	*/

	var l=K.length,A=K.concat([]), fr=[neg(K[1]),K[0]], X=[], S=[], M=m, p='x';

	if(dtl){
		S.push(eq0([sump(A,p,-l)],3,m));
	}
	if(/^-?1$/.test(K[0])){
		X.push(Mod(fr[0],M));
		if(fr[0]+''!=X[0]+'' && dtl){
			S.push(eqv(p,X[0],3,'','',M));
		}
		X[0]+='m'+M;
		return [X,S]
	}


	var g=gcd(A.concat(m));
	if(g!='1'){
		A=Arrf(function(t){return (+t)/(+g)},K);
		M=+m/g;

		if(dtl){
			S.push(eq0([sump(A,p,-l)],3,M));
			X.push(frac(-A[1],A[0],''));
		}
	}else{
		if(dtl){
			X.push(kfrac(fr));
		}
	}
	
	var a=A.join();
	A=Arrf(function(t){return Mod(t,M)},A);//绝对最小剩余

	if(dtl && a!=A.join()){

		var t=eq0([sump(A,p,-l)],3,M);
		S.push(t);
		X.push(frac(-A[1],A[0],''));
	}

//consolelog(S);
	if(l==2){//ax+b≡0
		if(A[0]=='0'){//退化
			if(A[1]!='0'){
				if(dtl){
					S.push('方程无解');
				}
				//consolelog(S);
				return [[],S]
			}
			if(dtl){
				S.push('方程有任意整数解');
			}
			//	consolelog(S);
			return ['ℤ',S]
		}

		g=gcd([A[0],M]);

		if(g!='1' && Mod(A[1],g)!='0'){
			if(dtl){
				S.push('因为('+A[0]+','+M+') = '+g+'∤'+A[1]+ '，所以方程无解');
			}

			return [[],S]
		}

//consolelog(fr);
		fr=fracReduct(-A[1],A[0]);
		if(!/\//.test(fr)){
			fr=Mod(fr,M);
			if(dtl){
				X.push(fr);
				S.push(eqM(X,M))
			}
			return [[fr+'m'+M],S]
		}

		if(fr!=-A[1]+'/'+A[0]){
			A[1]=-(+fr.split('/')[0]);
			A[0]=+fr.split('/')[1];
			if(dtl){
				X.push(frac(-A[1],A[0],''));
			}
		}

		var eM=equationM([M,A[1]],A[0],dtl);

		var k=divide([minus([-A[1],times([M,eM[0][0].split('m')[0]])]),A[0]]);
		k=Mod(k,M);
		
		if(dtl){

			X.push(frac(-A[1]+'-'+M+lrp('',frac(-A[1],M,'')+' mod '+A[0],'',''),A[0],''));
			X.push(k);
			
			S.push(eqM(X,M));


			S.push('其中'+eM[1].slice(/其中/.test(eM[1])?-2:-1).join(kbr2));
		}
		return [[k+'m'+M],S]
/*	使用穷举法：
	*/
		for(var i=1,h=M/2;i<=h;i++){
			var ii=[times([A[0],i]),A[1]], k=0;
			
			if(Mod(plus(ii),M)=='0'){
				k=i
			}
			if(Mod(minus(ii),M)=='0'){
				k=-i
			}

			if(k){

				X.push(k);
				if(dtl){
					S.push(eqM(X,M))
				}
				return [[k+'m'+M],S]
			}

		}

	}

},equationA=function(K,d,p1111,p){/*解一元代数方程
	输入有理系数数组	不考虑含其它未知变量的情况
	
	返回[计算结果数组, 步骤数组]	计算结果数组为空表示无解
	
	参数 d 指定数域（默认为空，是复数域）
		0 复数域
		1 实数域
		2 代数数域
		3 有理数域
		4 整数环
		5 自然数集合
		6 正整数集合
		
	参数 p 指定变量名 （此时会返回步骤数组）
	*/
	
	consolelog('一元多次方程',K);//bug 5 1 0 1 1 -1 0 -1 2求特征值 undefined	equationA([1, -8, 16, -3]) https://zhidao.baidu.com/question/1772342166371113060.html?entry=qb_uhome_search
	var A=Arrf(FracReduct,K),l=A.length, X=[], S=[];

	if(p){

		S.push(eq0(sump(A,p,-l)));
	}
	if(l==2){//ax+b=0
		if(!/^0$/.test(A[0])){

			X.push(divide([neg(A[1]),A[0]]));
			if(p){
				S.push(eqv(sump([A[0],0],p,-2),neg(A[1])), eqv(p,X[0]));
			}
		}else{
			if(/^0$/.test(A[1])){
				if(p){
					S.push('等式恒成立，有无穷多组解');
				}
			}else{
				if(p){
					S.push('等式不成立，无解');
				}
			}
		}
	}
	if(l==3){//ax^2+bx+c=0
		if(!/^0$/.test(A[0])){
			if(/\//.test(A)){//整数化
				var m=lcmFrac(A);//分母最小公倍数
				A=Arrf(function(s){return times([s,m])},A);
				if(p){
					S.push(eq0(sump(A,p,-l)));
				}
			}
			var m=gcd(A);
			if(m!='1'){//约分
				A=Arrf(function(s){return divide([s,m])},A);
				if(p){
					S.push(eq0(sump(A,p,-l)));
				}
			}
			
			var delta=minus([square(A[1]),times([4,A[0],A[2]])]);
			consolelog('判别式Δ = ',delta);
			if(/^0$/.test(delta)){//判别式=0
				delta=divide([neg(A[1]),times(2,A[0])]);
				
				X.push(delta,delta);
				if(p){
					S.push(eq0(nWrap0(sump([1,neg(X[0])],p,-2))+sup(2)), eq0(sump([1,neg(X[0])],p,-2)), eqv(p,X[0]));
				}
			}else if(/^-/.test(delta)){//判别式<0
				if(p){
					S.push('判别式Δ = '+delta+ ' < 0，因此无实数解');
				}
				if(d){//实数域无解

				}else{
					//x=(-b+-√Δ)/(2a)
					consolelog('Δ = ',delta);
					delta=na2n(sqrt(neg(delta)),'i');
					consolelog('√Δ = ',delta);
					X.push(divide([minus([delta,A[1]]), times([2,A[0]])]), divide([plus([delta,A[1]]), times([-2,A[0]])]));
					if(p){
						S.push(
							eq0(nWrap0(sump([1,neg(X[0])],p,-2),1)+nWrap0(sump([1,neg(X[1])],p,-2),1)),
							eq0(sump([1,neg(X[0])],p,-2))+' 或 '+eq0(sump([1,neg(X[1])],p,-2)),
							eqv(p,X[0])+' 或 '+X[1]
							);
					}
				}
			}else{//判别式>0
				delta=sqrt(delta);
				X.push(divide([minus([delta,A[1]]), times([2,A[0]])]), divide([plus([delta,A[1]]), times([-2,A[0]])]));
				if(p){
					S.push(eq0(nWrap0(sump([1,neg(X[0])],p,-2),1)+nWrap0(sump([1,neg(X[1])],p,-2),1)),
						eq0(sump([1,neg(X[0])],p,-2))+' 或 '+eq0(sump([1,neg(X[1])],p,-2)),
						eqv(p,X[0])+' 或 '+X[1]
						);
				}
			}
		}else{
			return equationA(A.slice(1),d,p)
		}
	}
	
	if(l==4){//ax^3+bx^2+cx+d=0				解法来自《实用数学手册(第2版)》P16
		if(/^0$/.test(A[0])){
			return equationA(A.slice(1),d,p)
		}
		
		if(/\//.test(A)){//整数化
			var m=lcmFrac(A);//分母最小公倍数
			A=Arrf(function(s){return times([s,m])},A);
			if(p){
				S.push(eq0(sump(A,p,-l)));
			}
		}
		var m=gcd(A);
		if(m!='1'){//约分
			consolelog(m,A);
			A=Arrf(function(s){return divide([s,m])},A);
			if(p){
				S.push(eq0(sump(A,p,-l)));
			}
		}
		var _a=divide([A[1],A[0],-3]), // 标准方程的-a/3
			p3=minus([divide([A[2],A[0]]), divide([square(A[1]),square(A[0])])]),
			q2=minus([divide([A[3],A[0]]), divide([times([A[1],A[2]]),square(A[0])])]),
				q=divide([q2,2]),
			P3=divide([cubic(p3),27]), Q2=divide([square(q2),4]),
				
			delta=plus([P3,Q2]);
		if(p){
			S.push('判别式Δ = '+delta);
		}
		consolelog('系数',A);
		consolelog('3p=',p3,'2q=',q2,'q=',q,'p^3=',P3,'q^2=',Q2,'Δ = ',delta,'-a/3 = ',_a);
		if(/^0$/.test(delta)){//3个实根（其中2个相等）
			var q_3=cbrt(q);
			X.push(plus([_a,q_3]));
			X.push(X[0]);
			X.push(minus([_a, times([divide([A[3],A[0]]),2])]));
			if(p){
				S.push('因此存在两个相同的根'+e2h(X[0])+', 及'+e2h(X[2]));
			}
		}else if(/^-/.test(delta)){//判别式小于0
			
			/*
				无法直接套下面公式，因为Δ开方得到虚数，得出实根比较繁琐，要用其他方法
			delta=sqrt(delta);
			var x1=cbrt(plus([q,delta])), x2=cbrt(minus([q,delta])), x3=plus([x1,x2]), x4=minus([x1,x2]), x5=minus([_a,x3]);
			
			X.push(x5);
			*/
			
			/*
				根据根与系数关系，降阶为一元二次方程：
				
			*/
			
			
			if(p){
				S.push('因此存在3个不同实根');
			}
			
		
		}else{//判别式>0 1个实根 + 2个共轭复根
			delta=sqrt(delta);
			var x1=cbrt(plus([q,delta])), x2=cbrt(minus([q,delta])), x3=plus([x1,x2]), x4=minus([x1,x2]), x5=minus([_a,x3]);
			
			X.push(x5);
			if(d){//实数域无另外两个共轭解
				if(p){
					S.push('只有1个实根'+e2h(x5));
				}
			}else{
				var x6=plus([_a,divide([x3,2])]), x7=times(['√3/2',x4]);
				S.push('q=',q,'delta=',delta);
				S.push('x1=',x1,'x2=',x2);
				S.push('x3=',x3,'x4=',x4);
				S.push('x6=',x6,'x7=',x7);
				if(p){
					S.push('有1个实根'+e2h(x5), '1对共轭复根'+e2h(x6)+' ± i'+nWrap(e2h(x7)));
				}
				X.push(plus([x6,times(['i',x7])]), plus([x6,times(['-i',x7])]));
			}
			
			
			
		}

		
		
	}
	
	return [X,S]
	
	
};
/*
	bug	neg("(-1/24)(4√14i-8)")
	
解2次方程	12 -8 6		分子分母未约分
sump([1,neg("(1/24)(4√14i-8)")],'x',-2)

2 -1 2 5 -3 3 -1 0 2
1 3 -3 -3 -5 -3 -6 6 4
求不出特征值
01-210-1-2-10 求合同变换，化成对角阵



*/