/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
 
/*
	Integer 整数：字符串
		+-×^封闭
		÷ 数组[商,余数]
		^
	Decimal 有理小数：数组[整数字符串, 10的幂次, 循环节长度]
		
		+-×÷ 封闭
		
		^ 根数：数组




	Frac （有理）分数：数组[分子,分母]
	
		+-×÷ 封闭
		
		^ 根数：数组
		
	Root （有理元素）根数 (有理数的有理数幂次)：
				本质是二维数组：[(-1)^的有理幂次（默认0）,有理系数（默认1）,底数（正分数，默认1）,分数幂次（正分数，默认1）]
				本身是有理数，或 无理代数数
		
		×÷^（有理幂（分母奇数）） 封闭
		负数的^（有理幂（分母偶数）） 复数
		+- 代数数

		^（无理幂） 超越数
		

			
	Num 上述任意数：
		
	
	
*/
 
 
var Integer={/*整数 (本质是字符串)
	不直接支持 x,10的幂 这种写法（此时建议用Decimal.build.I）
	
	
	*/
	build:{//直接构造典型数列中的整数
		Mersenne:function(p,Mp){/*返回梅森数 参数p是素数	Mp指定返回双重梅森数：2^(2^p-1)-1
			
			*/
			
		},
		
		
		
		Prime:function(){//典型素数
			
			
		},
		
	},
	is:{//布尔逻辑
		b2:{//二元关系
			"=":function(a,b){
				return +(''+a==''+b)
			},
			"≠":function(a,b){
				return +(''+a!=''+b)
			},
			">":function(a,b){
				var A=''+a,B=''+b,n=A.length,m=B.length, aisNeg=A[0]=='-', bisNeg=B[0]=='-';
				if(A==B || aisNeg && !bisNeg || aisNeg && bisNeg && n>m || !aisNeg && !bisNeg && m>n){
					return 0
				}
				
				if(!aisNeg && bisNeg || aisNeg && bisNeg && m>n || !aisNeg && !bisNeg && n>m){
					return 1
				}

				for(var i=0;i<n;i++){
					if(A[i]!=B[i]){
						return aisNeg ^ (A[i]>B[i])	//异或
					}
				}

			},
			"≥":function(a,b){
				return +(''+a==''+b || Integer.is.b2['>'](a,b))
			},
			"<":function(a,b){
				return Integer.is.b2['>'](b,a)
			},
			"≤":function(a,b){
				return Integer.is.b2['≥'](b,a)
			},
			"|":function(a,b){/* a整除b
				
				位数相差不多时，可以用试除法，求余数
				否则尽量利用a的倍数的性质（充要条件）来判断
				
				454646545 78798

				*/
				var A=''+a,B=''+b,Al=A.length,Bl=B.length;
				if(B=='0' || A=='1' || A=='-1' || A==B){return 1}
				if(A=='0' || Integer.is.b2['<'](B,A)){return 0}
				
				if(A=='10'){return +(B.substr(-1)=='0')}//末位是0
				consolelog(A,B);
				if(/^10+$/.test(A)){return +/^0+$/.test(B.substr(1-A.length))}//末尾是连续的0

				if(A=='2'){return 1-(+B.substr(-1) % 2)}//末位是偶数
				if(A=='5'){return +/[05]/.test(B.substr(-1))}//末位是0或5

				if(A=='3' || A=='9'){return Bl==1?(A=='3'?/[369]/.test(B):/[9]/.test(B)):Integer.is.b2['|'](A,Integer.oprs('+',B.split('')))}//各位和是倍数 A=An*9...9+An-1*9...9+...A2*9 + (An+An-1+...+A1)
				if(A=='4' || A=='25'){return +B.substr(-2) % +A?0:1}//末两位数是倍数
				if(A=='8' || A=='125'){return +B.substr(-3) % +A?0:1}//末三位数是倍数


				if(A=='6'){return Integer.is.b2['|'](2,B) && Integer.is.b2['|'](3,B)}//
				
				if(Bl<10){return +B%(+A)?0:1}//被除数较小时，直接用JS取余数判断整除
				

/*
				
				方法1：奇数位（从左向右数）之和减去偶数位之和是倍数	A=An*9...9 + An-2*9...9 +  + ... +_A4A3_*99 +(An + An-2 + ... + A2) - ( An-1 + An-3 + ... + A1 )
				

*/
				if(/^10*1$/.test(A)){//
					var A0=A.replace(/1/g,'').length;
					return Integer.is.b2['|'](A, Integer.oprs('-',[B.substr(0,Bl-A0),B.substr(-A0)]))
					
				}


				if(/^1{2,}$/.test(A) || /^3{2,}$/.test(A)  || /^9{2,}$/.test(A) ){//重位数
					return Integer.is.b2['|'](A, Integer.oprs('+',ZLR(0,Integer.oprs('/',[Bl,Al])[1])+B).split(new RegExp('\\d{'+Al+'}','g')))
				}



			},
		},
		b1:{//一元关系
			'0':function(n){//
				return +(n[0]=='0')
			},
			'+':function(n){//是正数
				return +(n[0]!='0' && n[0]!='-')
			},
			'-':function(n){//是负数
				return +(n[0]=='-')
			},
			'2n+1':function(n){//是奇数
				return +/[^02468]$/.test(n)
			},
			'2n':function(n){//是偶数
				return +/[02468]$/.test(n)
			},
			'prime':function(n){/*
				方法1：检验√n以内的所有质数，是否整除n
				
				
				*/
				
				
			}
		}
	},
	fromStr:function(s){
		if(/^-?\d+$/.test(s)){
			return ''+s
		}
		return undefined
	},
	toStr:function(n,typ){//转成文本
		/* 
			typ数字类型
				整数 （默认）
				. 小数
				, 每3位数字一个逗号分隔符
				%‰‱ 百(千万)分数
				/ 分数
				一 中文小写
				一元 中文货币小写
				壹圆	中文货币大写
				10	科学计数法
				1000 工程计数法
		*/
		return typ?Decimal.toStr([n,0], typ):n+'';
	},

	opr1:function(op,n,p){//一元运算	p是参数
		var a=''+n,l=a.length,aisNeg=a[0]=='-';
		if(op=='-' || op=='+'){/*	相反数		绝对值
			*/
			return aisNeg?a.substr(1):(op=='+'?'':'-')+a
		}

		if(op=='进制'){/*	10进制转p进制
			返回数组，而不是字符串，是为了表示高进制（10个数字+26个字母，此时不够用）
			
			JS 最多支持32进制,	另外	JS中2的幂，Math.pow(2,54) 再高次幂就失真了
			*/
			var b=''+p,A=[];
			while(Integer.is.b2['≥'](a,b)){
				
				var B=Integer.oprs('/',[a,b]);//得到余数
				//consolelog(a,b,A,B);
				A.unshift(B[1]);
				a=B[0]
			}
			A.unshift(a);
			if(aisNeg){A.unshift('-')}
			return A
		}
		if(op=='因式分解'){//	【只考虑正数】
			
			
		}
		if(op=='*0~9'){//一次性获得a的0～9倍，得到数组 【只考虑自然数】
			if(a=='0'){
				return copyA('0',10)//ZLR(0,10).split('')
			}
			if(/^10*$/.test(a)){
				return [0].concat(zlrA2(seqsA('1~9'),ZLR(0,l-1)))
			}
			return ['0'].concat(Arrf(function(t){return Integer.oprs('+',[t,a])},['0'].concat(Array(8)),'cp1'))

		}
		if(op=='^2'){//求平方	【只考虑自然数】
			/*平方尾数
				
				1 1	1 1 1
				2 4	6 6 6
				3 9 1 1 1
				4 6 6 6 6
				5 5 5 5 5
				6 6 6 6 6
				7 9 1 1 1
				8 4 6 6 6
				9 1 1 1 1
				
				3个吸引子
					2,8 4 6 6 6	偶数最终到6
					3,7	9 1 1 1 奇数（5除外）最终到1
					5	  5	5 5 奇数5最终到5
				
			a^(2^m) m>=2时，尾数只能是0,1，5，6
			
				立方尾数
				1 1	1
				2 8	2
				3 7	3
				4 4	4
				5 5 5
				6 6 6
				7 3 7
				8 2 8
				9 9 9
				
				1 ... 1
				2 8 2 8 ...
				3 7 3 7 ...
				4 ... 4
				5 ... 5
				6 ... 6
				9 ... 9
			
				4方尾数（参见平方尾数）
					奇数（5除外）最终到1
					奇数5最终到5
					偶数最终到6
				
				5方尾数
					到自身
				
				6方尾数（同平方尾数）

				1 1	1
				2 4	6
				3 9	1
				4 6	6
				5 5 5
				6 6 6
				7 9 1
				8 4 6
				9 1 1
				
				7方尾数（同立方尾数）

			
			*/
			if(a=='0' || a=='1'){return a}
			
			if(/^10*1$/.test(a)){//(10^t+1)^2=10^2t+2*10^t+1
				return a.replace(/1$/,a.replace('1','2'))
			}
			if(/^9+$/.test(a)){//(10^t-1)^2=10^2t-2*10^t+1
				return a.replace(/9$/,8+ZLR(0,l-1)+1)
			}
			if(/^10*2$/.test(a)){//(10^t+2)^2=10^2t+2*2*10^t+4
				return a.replace(/2$/,a.replace('1',4).replace(2,4))
			}
			if(/^9+8$/.test(a)){//(10^t-2)^2=10^2t-2*2*10^t+4
				return a.replace(/9$/,6+ZLR(0,l-1)+4)
			}
			if(/^10*3$/.test(a)){//(10^t+3)^2=10^2t+2*3*10^t+9
				return a.replace(/3$/,a.replace('1',6).replace(3,9))
			}
			if(/^9+7$/.test(a)){//(10^t-3)^2=10^2t-2*3*10^t+9	继续推广有难度，因为二项式展开，最后一项已经不是个位数了。
				return a.replace(/9$/,4+ZLR(0,l-1)+9)
			}
			
			return Integer.oprs('*',[a,a]);
			
		}
		if(op=='^3'){/*求立方	【只考虑自然数】
			
			立方尾数
				1 1	1
				2 8	2
				3 7	3
				4 4	4
				5 5 5
				6 6 6
				7 3 7
				8 2 8
				9 9 9
				
				1 ... 1
				2 8 2 8 ...
				3 7 3 7 ...
				4 ... 4
				5 ... 5
				6 ... 6
				9 ... 9
			
			*/
			if(a=='0' || a=='1'){return a}
			

			
			return Integer.oprs('*',[Integer.opr1('^2',a),a]);
			
		}
		if(op=='^1/2'){/*求开平方（向下取整）
			*/
			if(a=='0' || a=='1'){return a}
			
			//(10^t+[123])^2=10^2t+2[123]*10^t+[123]^2
			if(a=='121' || /^1(0*)2\1[1]$/.test(a)){
				return a.replace(/2.+$/,'1')
			}
			if(a=='141' || /^1(0*)4\1[4]$/.test(a)){
				return a.replace(/4.+$/,'2')
			}
			if(a=='161' || /^1(0*)6\1[9]$/.test(a)){
				return a.replace(/6.+$/,'3')
			}
			//(10^t-[123])^2=10^2t-2[123]*10^t+[123]^2
			if(/^9*80*1$/.test(a) && a.indexOf('8')==l/2-1){
				return ZLR(9,l/2)
			}
			if(/^9*60*4$/.test(a) && a.indexOf('6')==l/2-1){
				return ZLR(9,l/2-1)+'8'
			}
			if(/^9*40*9$/.test(a) && a.indexOf('4')==l/2-1){
				return ZLR(9,l/2-1)+'7'
			}

			/*
				a=b*10^2t
				√a = √b *10^t
				21334345323534534 ≈ 前15位 * 10^(l-15)
				a=a1* 10^(l-15) + a2*10^(l-30) + a3*10^(l-45)
				
				每15位一截，利用不等式，进行求近似值：
				 |√a-√b| = √(a+b-2√ab) <√(a+b) < √(a+b+2√ab) = √a+√b
			*/
			return Integer.oprs('*',[a,a]);
			
		}
		
		
		if(op=='数根'){/*求数根 digital root 反复求各位数之和，迭代到结果为个位数为止时的数	【只考虑自然数】
			参数p，返回数组[最终结果，中间结果数组]
			*/
			var A=['',[]];
			while(l>1){
				a=Integer.oprs('+',a.split(''));
				l=a.length;
				if(p){//计算过程
					A[1].push(a);
					consolelog(A[1])
				}
			}
			if(p){
				A[0]=a;
				consolelog(A);
				return A
			}else{
				return a
			}
			
		}
		
	},
	
	oprs:function(op,arr,p){//多元运算	p是参数
	//op 可以是单个运算符，也可以是同级运算符数组
		var aA=arr.join().split(','),al=aA.length, aA0=aA[0],aA1=aA[1];
		if(al<2){
			return aA0
		}
		var aisNeg=aA0[0]=='-', bisNeg=aA1[0]=='-', islastNeg=aA[al-1][0]=='-', negCnt=aA.filter(function(t){return t[0]=='-'}).length;

		if(isArr(op)){//op是数组时，依次执行（这里不考虑正负数先抵消的优化，Mfn中才考虑）
			var x=aA0;
			for(var i=1;i<al;i++){
				x=Integer.oprs(op[i-1],[x,aA[i]])
			}
			return x
		}

		if(op=='+'){//加法

			if(al>2){/*	暂不实现算法：参数p是策略：按顺序（默认），'加减分离', ''，
			而是死算
				*/
				return Integer.oprs('+',[Integer.oprs('+',aA.slice(0,al-1)),aA[al-1]])
			}

			if(aA0=='0'){
				return aA1
			}
			if(aA1=='0'){
				return aA0
			}
			
			if(aisNeg && bisNeg){
				return '-'+Integer.oprs('+',[aA0.substr(1),aA1.substr(1)])
			}else if(aisNeg ^ bisNeg){
				return Integer.oprs('-',[aA[+aisNeg],aA[+bisNeg].substr(1)])
			}
			
			//下面算法仅支持两个正数相加
			
			var agb=Integer.is.b2['>'](aA0,aA1),a=agb?aA0:aA1,b=agb?aA1:aA0,al=a.length,bl=b.length,A=a.split('');
//consolelog(a+' + '+b+' = ?');
			for(var i=0;i<bl;i++){
				var bi=+b[bl-i-1],ai=al-i-1;
				
				if(bi){
					var si=bi+(+A[ai]);
					//	consolelog('si='+si);
					if(si>9){

						A[ai]=(''+si).substr(-1);
						if(i==bl-1){
							
							if(ai<1){
						//		consolelog('已经到达b的第1位，且a也达到第1位 '+a+' + '+b+' = ' +(''+si)[0]+A.join(''));
								return (''+si)[0]+A.join('')
							}

							return Integer.oprs('+',[A.slice(0,ai).join(''),(''+si)[0]])+A.slice(ai).join('')
						//	return Integer.oprs('+',[A.slice(0,ai).join(''),(''+si).substr(0,(''+si).length-1)])+A.slice(ai).join('')
						}else{
							var ai1=+A[ai-1]+(+(''+si)[0]);
						//	consolelog('前一位' + A[ai-1]+ ' + '+(''+si)[0] + ' == '+ai1);
							if(ai1>9){
//consolelog('ai1 = '+ai1+' 替换前2位，A[ai-2]为'+(+A[ai-2]+(+(''+ai1)[0])));
								return Integer.oprs('+',[A.slice(0,ai).join(''),(''+si)[0],b.substr(0,bl-i-1)])+A.slice(ai).join('')

							}else{
								A[ai-1]=ai1;
							}

						}
						
					}else{
						//consolelog('si<9 直接替换A[ai] '+ A[ai]+' -> '+si);
						A[ai]=si;
					}
				}
			}

	//		consolelog(a+' + '+b+' = ' +A.join(''));
			return A.join('')

		}
		if(op=='-'){//减法

			if(aA0==aA1){return '0'}
			var agb=Integer.is.b2['>'](aA0,aA1);

			if(!aisNeg && bisNeg){return Integer.oprs('+',[aA0,aA1.substr(1)])}	//+ -
			if(!aisNeg && !bisNeg && !agb){return '-'+Integer.oprs('-',[aA1,aA0])}	//+ < +
			if(aisNeg && !bisNeg){return '-'+Integer.oprs('+',[aA0.substr(1),aA1])}	//- +
			if(aisNeg && bisNeg && !agb){return '-'+Integer.oprs('-',[aA0.substr(1),aA1.substr(1)])}	//- < -
			if(aisNeg && bisNeg && agb){return Integer.oprs('-',[aA1.substr(1),aA0.substr(1)])}	//- > -


			var a=aA0,b=aA1,al=a.length,bl=b.length,A=a.split('');

			for(var i=0;i<bl;i++){
				var bi=+b[bl-i-1];
						//consolelog(bi);
				if(bi){
					var si=+A[al-i-1]-bi;
					
					//consolelog(bi,si);
					if(si<0){
					//	consolelog(si);
						si+=10;
						A[al-i-1]=si;
						//consolelog(si);
						//consolelog(A.slice(al-i-1).join(''));
						if(i==bl-1){
							return Integer.oprs('-',[A.slice(0,al-i-1).join(''),'1']).replace(/^0+/,'')+A.slice(al-i-1).join('')
						}else{
							return Integer.oprs('-',[A.slice(0,al-i-1).join(''),Integer.oprs('+',[b.slice(0,bl-i-1),'1'])]).replace(/^0+/,'')+A.slice(al-i-1).join('')
						}
						
					}else{
						A[al-i-1]=si;
					}
				}
			}
		//	consolelog('- ',A);
			return A.join('').replace(/^0+/,'')

		}
		if(op=='*1'){//仅计算乘数b是个位数的情况，仅限2元运算	【只考虑非负数a】

			var b=+aA[1];
			if(!b){
				return '0'
			}
			var n=aA0.length,A=aA0.split(''),B=new Array(n);

			for(var i=0;i<n;i++){
				var ai=+A[n-i-1];

				//consolelog('A='+A);
				var si=b*ai;
				if(B[n-i-1]){
					si+=B[n-i-1];
				}
				
				if(si>9){
					if(i==n-1){
						//consolelog(A);
						return si+A.slice(1).join('')
					}else{
						//consolelog(si,A);
						A[n-i-1]=(''+si).substr(-1);
						//consolelog('A ='+A);
						B[n-i-2]=+(''+si)[0];
						//consolelog(B[n-i-2]);
						//consolelog(' A='+A);
							
					}
					
				}else{
					A[n-i-1]=si;
				}

			}
			return A.join('')

		}

		if(op=='*'){//乘法
			if(aA.indexOf('0')>-1){return '0'}
			if(al>2){

				return Integer.oprs('*',[Integer.oprs('*',aA.slice(0,al-1)),aA[al-1]])	//左结合
				//return Integer.oprs('*',[aA0,Integer.oprs('*',aA.slice(1))])	//右结合
			}
			if(aisNeg || bisNeg){return (aisNeg && bisNeg?'':'-')+Integer.oprs('*',[aisNeg?aA0.substr(1):aA0, bisNeg?aA1.substr(1):aA1])}

			var n0=aA0.length,n1=aA1.length,m0=aA0.match(/[^0]/g).length,m1=aA1.match(/[^0]/g).length,
				a=m0>m1?aA0:aA1,b=m0>m1?aA1:aA0,an=a.length,bn=b.length,A=[],B=Integer.opr1('*0~9',a);

			for(var i=0;i<bn;i++){
				var bi=+b[bn-i-1];
				if(bi){
					A.push(B[bi]+ZLR(0,i));//计算被乘数与单个数字的乘积，并补充末0
					//A.unshift(Integer.oprs('*1',[a,bi+''])+ZLR(0,i))

				}
			}

			return Integer.oprs('+',A)
		}
		
		
		if(op=='/'){/*返回数组[商,余数]，仅限2元运算
			
			带余除法 a=  b   p  +   r
					 a=(-b)(-p) +   r
					-a=  b (-p) + (-r)
					-a=(-b)  p  + (-r)
					
					与JS中运算符%规则一致
			
			*/
			var a=aA0,b=aA1;
			if(b=='1' || b=='0'){return [a,'0']}	//除数为0时，认为是1
			if(a==b){return ['1','0']}
			if(negCnt){
			//	consolelog(a,b,aisNeg?a.substr(1):a, bisNeg?b.substr(1):b);
				var A=Integer.oprs('/',[aisNeg?a.substr(1):a, bisNeg?b.substr(1):b]);
				return [(negCnt>1 || a[0]=='0'?'':'-')+a[0],(!aisNeg && bisNeg?'':'-')+a[1]]
			}

			if(Integer.is.b2['<'](a,b)){return ['0',a]}
			var n0=a.length,n1=b.length,q='',a0=a.substr(0,n1),bI=[];
			/*
				方法1【累减法】：被除数减去除数（减法若干次，次数是商），直至余数小于除数
				方法2【试商法】：被除数减去除数的倍数（0～9倍），得到商的各位数字（各位最多做乘法9次+1次减法，迭代次数是商的位数）和最终余数
			*/
			for(var i=1;i<10;i++){
				bI.push(Integer.oprs('*1',[b,i]));
			}
			for(var i=n1;i<n0+1;i++){
				//consolelog(i,n0+1);//Integer.oprs('/',['1232402135','10334302'])
				if(Integer.is.b2['>'](b,a0)){
					if(q){q+='0'}
				}else{
					var a0n=a0.length;
					
					for(var j=9;j>0;j--){
						var bj=bI[j-1];
						//	consolelog('j='+j+', bj='+bj);
						if(bj==a0){
							q+=j;
							a0='';
						//	consolelog('bj==a0, q='+q+', a0='+a0);
							break;
						}
						if(Integer.is.b2['<'](bj,a0)){
							q+=j;
						//	consolelog(a0,bj);
							a0=Integer.oprs('-',[a0,bj]);
						//	consolelog('bj<a0  q='+q+', a0='+a0);
							break;
						}
					}
				}
			//	consolelog(i,a[i-1],n0);
				if(i==n0){
					return [q,a0||'0']
				}

				if(a0=='0'){
					a0=a[i]
				}else{
					a0+=a[i];
				}
			//	consolelog(i,'a0='+a0);
			}

		}

		if(op=='^p'){/* a^p = a^b 素数p次幂（p>2）
			
			p=q+1 ，对q进行因式分解求幂
			p=s1^k1 * s2^k2 * s3^k3 + t1^j1
			
			算法：对于p=2，直接算平方
			对于其他素数p，用a的p-1次幂，乘以a
			
			*/
			var b=aA1;
			if(b=='2'){
				//return Integer.oprs('2^',[aA0,aA1])
				return Integer.oprs('*',[aA0,aA0])
			}
			return Integer.oprs('*',[Integer.oprs('^',[aA0,Integer.oprs('-',[b,1])]),aA0])

		}
		if(op=='^'){/*幂		【仅考虑幂是自然数的情况】
			从a,a^2开始，迭代求幂
			迭代函数：
				f(x)=x*x
				f(x)=x*a
				f(x)=x*a^2
				f(x)=x*a^i（i是已计算出的幂）
				
				b是2的n次幂时，a^b=a^(2^n)=(...((a^2)^2)^2...)^2 至少做n次乘法（平方）
				b是2^n+1时，至少做n+1次乘法
				b是2^n+2时，至少做n+1次乘法
				b是2^n+2+1时，至少做n+2次乘法(a^3未知时)，做n+1次乘法(a^3已知时)
				b是2^n+2^2时，至少做n+1次乘法
				b是2^n+2^2+1时，至少做n+2次乘法
				b是2^n+2^2+2时，至少做n+2次乘法
				b是2^n+2^2+2+1时，至少做n+3次乘法
				b是2^n+2^3时，至少做n+1次乘法
				b是2^n+2^3+1时，至少做n+2次乘法
				
				b转成2进制，至少做（取第1位1对应的2的幂次k + 其余1的个数，介于k~2k之间）次乘法,
				但这种乘法次数不一定是最少的，事实上，可以对b做因式分解，15=3*5 2+3（因式分解方法）<6（二进制方法）	15二进制2^3+2^2+2+1
				
				b因式分解：f1f2...fk (((b)^f1)^f2)^f3... 共需乘法f1+f2+f3+..+fk - k次
					由于xy-1 > x-1 + y-1 (因为(x-1)(y-1)>0) 因此因式分解越细越好
					
					
			*/
			var a=aA0,b=aA1;
			if(a=='0'){return '0'}//这里不考虑0的0次幂
			if(a=='1'){return '1'}
			if(b=='0'){return '1'}
			if(b=='1'){return a}

			if(aA.indexOf('0')>-1){return Integer.oprs('^',aA.slice(0,aA.indexOf('0')-1))}
			if(aA.indexOf('1')>-1){return Integer.oprs('^',aA.slice(0,aA.indexOf('1')))}

			
		//	if(al==1){return aA0}	可省略
			if(al>2){
				return Integer.oprs('^',aA.slice(0,al-2).concat(Integer.oprs('^',aA.slice(al-2))))
			}
			
			if(a[0]=='-'){
				var evenb=/[02468]$/.test(b);
				return (evenb?'':'-')+Integer.oprs('^',[a.substr(1),b])
			}
/*
			if(/^10+$/.test(a)){//10的b次幂			下面用+b，默认为幂次不会很高，否则结果太大，计算不了
				return '1'+ZLR(0,(+b)*(a.length-1));
			}
*/
			if(/0+$/.test(a)){//末尾含0的b次幂
				return Integer.oprs('^',[a.replace(/0+$/,''),b])+ZLR(0,(+b)*(a.length-a.replace(/0+$/,'').length));
			}
			
//			consolelog(b);
			if(b=='2'){
				return Integer.oprs('*',[a,a]);
			}
			var f=(''+factor(b)).split('×'),fl=f.length,x=a;
			consolelog('aA = ',aA);
			consolelog(f, b, factor(b));

			for(var i=0;i<fl;i++){
				x=Integer.oprs('^p',[x,f[i]])
			}
			
			return x
		}
		if(op=='2^'){/*	a^(2^b) 反复求平方	（迭代平方b次）
				当a=2时，结果是费马数-1
			
				目前已知最大的梅森素数M49 = 2^74207281-1 约等于2^(2^26.14505741099363)-1	位数有22,338,618
				

				
				计算极限： Integer.oprs('2^',[2,13]).length 2467	部分电脑上b是13即不可算出结果，出现 Uncaught RangeError: Maximum call stack size exceeded(…)
											[3,13]	.length 3909
											[4~14,11].length -28681-
											[248,10].length 
											Integer.oprs('2^',[179,5]).length ----74 Integer.oprs('2^',[181,5]).length 83 也异常
				
			*/
			var a=aA0,b=aA1;
			if(a=='0' || a=='1' || b=='0'){return a}
			if(/^10+$/.test(a)){
				return '1'+ZLR(0,Integer.oprs('*',[Integer.oprs('^',[2,b]),a.length-1]));
				
			}
			
			while(b!='0'){
				//a=Integer.opr1('^2',a);
				a=Integer.oprs('*',[a,a]);
				//consolelog(b+ ' !!! '+a);
				b=Integer.oprs('-',[b,1]);
			}
			
			return a
			//return Arrf(function(t){return Integer.opr1('^2',t)},new Array(b),'cp1')	//返回每一次求平方的结果 数组
		}
		
		if(op=='%'){/*	a%b 求余数
			算法：
			比较长度：a小，则返回a
			用数论方法判断是否a/b 整除及余数
			
			
			*/
			var a=aA0,b=aA1;
			if(a=='0' || a=='1' || b=='0'){return a}
			if(/^10+$/.test(a)){
				return '1'+ZLR(0,Integer.oprs('*',[Integer.oprs('^',[2,b]),a.length-1]));
				
			}
			
			while(b!='0'){
				//a=Integer.opr1('^2',a);
				a=Integer.oprs('*',[a,a]);
				//consolelog(b+ ' !!! '+a);
				b=Integer.oprs('-',[b,1]);
			}
			
			return a

		}
		if(op=='^%'){/*	a^b p 求幂余数		仅限2元运算
			p是素数情况下，
				a^p≡a (mod p) 
				a^(p-1)≡1 (mod p) 费马小定理
				
				a^b≡a^(k(p-1)+t)≡a^(1+t) (mod p) 
			*/
			var a=aA0,b=aA1;
			if(a=='0' || a=='1' || b=='0'){return a}
			if(/^10+$/.test(a)){
				return '1'+ZLR(0,Integer.oprs('*',[Integer.oprs('^',[2,b]),a.length-1]));
				
			}
			
			while(b!='0'){
				//a=Integer.opr1('^2',a);
				a=Integer.oprs('*',[a,a]);
				//consolelog(b+ ' !!! '+a);
				b=Integer.oprs('-',[b,1]);
			}
			
			return a

		}

		if(op=='^/'){/*返回幂余数组 [幂次k, 系数c]	a=cb^k 		[k,c]		仅限（正整数）2元运算
			a<b 或者 a中不含因子b(不能被b整除)	a=ab^0	返回[0,a]
			a=b 								a=1b^1	返回[1,1]
			a=b^k 								a=1b^k	返回[k,1]
			
			ln a = ln c + k ln b	类似于除法
			*/
			var a=aA0,b=aA1,r=1,k=0;
			while(r){
				var qr=Integer.oprs('/',[a,b]);
				if(qr[1]=='0'){
					a=qr[0];
					k=Integer.oprs('+',[k,1]);
				}else{
					break
				}
			}
			return [k,a]
		}
	}



}, Decimal={/*小数(有理数，分数)		本质是数组：[整数(不含尾0), 尾0数（负数）, 循环节长度]


有限小数（化成最简分数时，分母没有2、5之外的因数）	除法不封闭
无限小数（无限循环小数化成最简分数时，分母有2、5之外的因数，无限不循环是无理数）


	*/
	build:{
		I:function(t,b){//长整数（本质是数组）t是数字串， b是进制（默认为空，是10）
			var s=''+((b||10) == 10?t:parseInt(t,b));
			s=s.replace(/^-0$/,0);
			var i=''+(s.replace(/0+$/,'')||0), A=[i,i=='0'?0:s.replace(/.*[^0]/,'').length,0];
			A.type='Decimal';A.toStr=function(p){return Decimal.toStr(this,p)};
			return A
		},
		D:function(t,m,len){//小数（本质是数组）t是数字串（可以含小数点，或者百分号等后缀）， m是后缀10的幂次 %(-2)‰(-3)‱(-4) len是循环节长度
			//t中可以含2个小数点（此时是无限循环小数的写法，例如：0.13.3），其中第2个小数点后数字表示循环节
			var s=(''+t).replace(/[%‰‱]$/,''),d=+m||0;
			
			if(s.split('.').length>2){//含2个小数点
				return Decimal.build.D(s.replace(/\.\d+$/,''),0,s.split('.')[2].length)
				
			}
			
			
			
			if(/\./.test(s)){
				s=s.replace(/0+$/,'');
				d+=-s.split('.')[1].length;
				s=s.replace('.','').replace(/^([-]?)0+/,'$1');
			}
			consolelog(s,d);
			if(/[%‰‱]$/.test(t)){
				d-='01%‰‱'.indexOf((''+t).substr(-1));
			}
			var i=''+(s.replace(/0+$/,'')||0), A=[i,i=='0'?0:d+(s.match(/0+$/)||[''])[0].length,len||0];
			A.type='Decimal';A.toStr=function(p){return Decimal.toStr(this,p)};
			return A
		},
		'10':function(t){//t是科学计数法字符串	Decimal.build['10']('-2.8×10^(-3)')
			return Decimal.build.D(t.replace(/×10\^.+/,''), /×10\^/.test(t)?wrapTrim(t.replace(/.+×10\^/,'')):0)
		},
		F:function(t){//t是分数字符串a/b或数组	化成小数对象
			var s=''+t;
			if(/[\/,]/.test(s)){
				return Frac.opr1('.',s.split(/[\/,]/))

			}else{
				return Decimal.build.I(s)
			}

		},


		JS:function(t){//JS表达式，得到有限小数（精度不可控！）
			return Decimal.build.D(eval(t))
		}
	},
	is:{//布尔逻辑
		b2:{//二元关系
			"=":function(A,B){
				return +(A.join()==B.join())
			},
			"≠":function(A,B){
				return +(A.join()!=B.join())
			},
			">":function(A,B){
				return Frac.is.b2['>'](Frac.build.D(A),Frac.build.D(B))
			},
			"≥":function(A,B){
				return Frac.is.b2['≥'](Frac.build.D(A),Frac.build.D(B))
			},
			"<":function(A,B){
				return Frac.is.b2['<'](Frac.build.D(A),Frac.build.D(B))
			},
			"≤":function(A,B){
				return Frac.is.b2['≤'](Frac.build.D(A),Frac.build.D(B))
			},
		},
		b1:{//一元关系
			"1":function(A){return +(+A[0]==1 && A[1]==0 && A[2]==0)},
			"0":function(A){return +(+A[0]==0)},
			"+":function(A){return +(+A[0]!=0 && (A[0]+'')[0]!='-')},
			"-":function(A){return +((A[0]+'')[0]=='-')},
			".":function(A){return +(A[1]<0)},
			"Z":function(A){return +(A[1]>=0)},//整数
			"N":function(A){return +((A[0]+'')[0]!='-' && A[1]>=0 )},//自然数
			"+Z":function(A){return +(+A[0]!=0 && (A[0]+'')[0]!='-' && A[1]>=0)},//正整数
			"-Z":function(A){return +((A[0]+'')[0]=='-' && A[1]>=0 )},//负整数

		}
	},
	fromStr:function(s){
		if(/^-?\d+$/.test(s)){
			return Decimal.build.I(s)
		}
		if(/^-?[\d\.]+[%‰‱]?$/.test(s)){//含百分号、无限循环小数、有限小数等情况
			return Decimal.build.D(s)
		}
		if(/^-?[\d\.]+×10\^.+$/.test(s)){
			return Decimal.build['10'](s)
		}
		if(/^-?\d+[/]\d+$/.test(s)){
			return Decimal.build.F(s)
		}
		return undefined
	},
	toStr:function(A,typ){//转成文本
		/* typ数字类型
				. 小数 （默认）
				, 每3位数字一个逗号分隔符
				%‰‱ 百(千万)分数
				/ 分数
				一 中文小写
				一元 中文货币小写
				壹圆	中文货币大写
				10	科学计数法
				1000 工程计数法
		*/
		var type=typ||'.',str=A[0]+'',d=A[1],I=str.replace(/^-/,'').length,isNeg=str[0]=='-';
		if(type=='/'){
			str=Frac.toStr(Frac.build.D(A))
				
		}else if(type=='10'){
			str=(I>1?str.replace(/\d/,'$&.'):str)+(str.substr(-1)=='1' && d==1?'0':(I==1 && d || I>1?'×10'+(d+I-1?'^'+(d+I-1):'').replace(/\^1$/,''):''))

			
		}else if(type=='1000'){
			if(I<4 && d%3==0){
				str+=d?'×10^'+(d):''
			}else{
				str=str.replace(new RegExp('\\d{'+(I-(I+d)%3+(I+d<0?-3:0))+'}$'),'.$&')+'×10^'+(I+d-(I+d)%3+(I+d<0?-3:0))
			}
			str=str.replace(/^-\./,'-0.').replace(/^\./,'0.');
			
		}else{
		
			if(/[%‰‱]/.test(type)){
				d+='%‰‱'.indexOf(type)+2;
			}

			if(d){
				if(d>0){
					str+=ZLR(0,d)
				}else if(I>-d){
					str=str.replace(new RegExp('\\d{'+(-d)+'}$'),'.$&')
				}else{
					str=(isNeg?'-':'')+'0.'+ZLR(0,-d-I)+(isNeg?str.substr(1):str)
				}
			}
			if(type==','){
				str=str.replace(/^[^\.]+/,function(t){return t.split('').reverse().join('').replace(/\d{3}/g,'$&,').split('').reverse().join('').replace(/^,/,'').replace(/-,/,'-')})
					.replace(/\..+/,function(t){return t.replace(/\d{3}/g,'$&,').replace(/,$/,'')})
			}

			if(/[%‰‱]/.test(type)){
				str+=type
			}
			if(type=='一'){
				str=n2Zh(str)
			}
			if(type=='一元'){
				str=n2Zh(str,0,1)
			}
			if(type=='壹圆'){
				str=n2Zh(str,1,1)
			}
			
			if(A[2]){//循环节长度
				consolelog(str,A[2]);
				str=str.replace(new RegExp('(\\d\\.?){'+A[2]+'}$'),function(x){return x.replace(/\d/g,'\\dot$&')})
			}
		}
		return str

	},
	opr1:function(op,arr,p){//一元运算	p是参数
		var A=[].concat(arr),str=A[0],d=A[1],I=str.replace(/^-/,'').length,isNeg=str[0]=='-';
		A.type='Decimal';
		if(op=='-'){//相反数
			if(A[0][0]!='0'){
				A[0]=A[0][0]=='-'?A[0].substr(1):'-'+A[0];
			}
			return A
		}
		if(op=='/'){//小数化既约分数（数组）
			return Frac.build.D(A)
		}
		
		if(op=='I'){//取整	参数p：u(p)向上 d(own)向下 t(runc)截取 r(ound)四舍五入
			if(d<0){
				if(I<=-d){
					if(p=='u'){A=[''+(+!isNeg),0,0]}
					if(p=='d'){A=[(isNeg?'-':'')+(+isNeg),0,0]}
					if(p=='t'){A=['0',0,0]}
					if(p=='r'){A=[(isNeg?'-':'')+(+(+str[+isNeg]>4)),0,0]}
					A.type='Decimal';
				}else{
					if(p=='u'){A=Decimal.oprs('+',[Decimal.build.D(str.substr(0,I+d)),[''+(+!isNeg),0]])}
					if(p=='d'){A=Decimal.oprs('-',[Decimal.build.D(str.substr(0,I+d)),[''+(+isNeg),0]])}
					if(p=='t'){A=Decimal.build.D(str.substr(0,I+d+(+isNeg)))}
					if(p=='r'){A=Decimal.oprs('+',Decimal.build.D(str.substr(0,I+d+(+isNeg))),[(+(+str.substr(d+1)>4))*(isNeg?-1:1),0])}
				}
				
			}
			return A
		}
		if(op=='d'){//取小数
			if(d<0){
				if(I>-d){
					A[0]=Decimal.build.D(str.substr(d),d)
				}
			}else{
				A=['0',0,0];
				A.type='Decimal';
			}
			return A
		}
		
		if(op=='r_0'){//四舍五入（不强制保留小数中尾0）	得到数组，	参数	p是小数位数（负数表示取整百整千...）
			consolelog('小数位数 p=',p,' 原来小数点d在',d,'p+d+1= ',p+d+1);

			if(p+d+1<=0){//-p>=d+1
				var I0=str.replace(/^-/,'').substr(0,I+p+d+1);
				if(I0.length<p+1){
					I0='0'.repeat(p+1-I0.length)+I0;
				}
consolelog('I0 = ',I0,'-p= ',-p)
				if(/[5-9]$/.test(I0)){
					I0=Integer.oprs('+',[I0.substr(0,I0.length-1),1]);
					if(I0.length<p+1){
						I0='0'.repeat(p+1-I0.length)+I0;
					}
				}else{
					I0=I0.substr(0,I0.length-1)
					
				}
				A=Decimal.build.D((isNeg?'-':'')+I0, -p)
				
				
			}else{//-p<d+1	p+d+1>0
				
			}
			
			return A
		}
		if(op=='r'){//四舍五入（强制保留小数中尾0）	返回字符串		参数	p是小数位数（负数表示取整百整千...）
			A=Decimal.toStr(Decimal.opr1('r_0',A,p));
			if(/\./.test(A) && p>A.split('.')[1].length){
				A+='0'.repeat(p-A.split('.')[1].length)
			}
			
			return A
		}
		
		
	},
	
	oprs:function(op,arrA,p){//多元运算	p是参数
		var aA=[].concat(arrA),al=aA.length, t;
		if(!(aA[0] instanceof Array)){
			aA=Arrf(Decimal.build.D,aA);
		}
		
		if(op=='竖式+-'){//参数p：+或-，支持二元以上同一种运算（但不支持+-混合）


			aA.push(Decimal.oprs(p,aA));
			aA=Arrf(Decimal.toStr,aA);
			
			t=aA.slice(0,al).join(p)+'='+aA[al];
			Arrf(function(x,i){aA[i]=(''+x).split('.')},aA);
consolelog(aA.join(';'),max(Arri(aA,0)),max(Arri(aA,1)));

			var nl=(''+max(Arri(aA,0))).length,nr=(''+max(Arri(aA,1))).length;

			Arrf(function(x,i){
				x[0]=hp().repeat(nl-(''+x[0]).length)+x[0];
				if(!x[1]){
					x[1]=x[0]+hp('.'+'0'.repeat(nr))
					x[0]='';
				}else{
					x[1]+=nr-(''+x[1]).length?hp('0'.repeat(nr-(''+x[1]).length)):'';
					x[1]=x.join('.');
					x[0]='';
				}
				
			},aA);
			aA[al-1][0]=p;
			return mtrx(aA,'.','.','','I'+al)+'\\\\ '+t;
		}
		if(op=='竖式*'){//二元
			
			/* 测试用例：
$Decimal.oprs('竖式*',[1.234,20.15])$

$Decimal.oprs('竖式*',[0.002,20.15])$

$Decimal.oprs('竖式*',[0.002,0.01])$

$Decimal.oprs('竖式*',[0.002,300])$
*/

			consolelog(aA.join('; '));
			var a=aA[0][0],b=aA[1][0], bl=b.length, nr0=max([aA[0][1], aA[1][1], aA[0][1]+aA[1][1], 0]);
	consolelog(a,b,bl,nr0);

			t=Decimal.toStr(aA[0])+'×'+Decimal.toStr(aA[1])+'='+Decimal.toStr(Decimal.oprs('*',aA));

			var tA=[];

			for(var i=bl-1;i>-1;i--){
				if(b[i]!='0'){
					tA.push([Integer.oprs('*1',[a,b[i]]), bl-i-1]);
				}
			}

			var tAl=tA.length;
			if(bl>1){
				//tA.push(Decimal.oprs('+',tA));
				tA.push([Decimal.oprs('+',tA)[0],0]);
				tA[tAl][0]=tA[tAl][0]+'0'.repeat(tA[tAl][1]);
				tA[tAl][1]=0;
				consolelog(tA.join(' ; '));
			}else{
				tAl--;
				tA[tAl][0]=tA[tAl][0]+'0'.repeat(tA[tAl][1]);
				tA[tAl][1]=0;
				consolelog(tA.join(' ; '));
			}
			
			var nl=max([tA.slice(-1)[0][0].length, -aA[0][0].length-aA[0][1]+1, -aA[1][0].length-aA[1][1]+1]),
				d=Integer.oprs('+',[aA[0][1], aA[1][1]]), dA=[];
consolelog(nl,d,'tA=',tA.join(' ; '));
			if(aA[0][1]<0){
				aA[0][0]=Decimal.toStr(aA[0]);
				dA.push(aA[0][1]);

			}
			if(aA[1][1]<0){
				aA[1][0]=Decimal.toStr(aA[1]);
				if(dA.indexOf(aA[1][1])<0){
					dA.push(aA[1][1]);
				}

			}
			if(+d<0 && bl>=1){
				
				
				
				var t0=tA[tAl][0];
				
				consolelog('t0= ',t0,'tA[tAl][0]=',tA[tAl][0]);
				tA[tAl][0]=t0.replace(new RegExp('(\\d{'+(-d)+'})$'),'.$1');
				
				t0=tA[tAl][0];
				consolelog('t0= ',t0,'tA[tAl][0]=',tA[tAl][0]);
				if(t0[0]=='.'){
					tA[tAl][0]=0+t0;
					nl++;
				}else if(!/\./.test(t0)){
					tA[tAl][0]='0.'+'0'.repeat(-d-t0.length)+t0.replace(/0+$/,function(t){return '∅'.repeat(t.length)});
					
					consolelog(tA[tAl]);
					nl=-d+1;
					
				}
				if(dA.indexOf(+d)<0){
					dA.push(+d);
				}
			}
			
			consolelog(nl,tA.join('; '));
			Arrf(function(x){
				consolelog('x=',x,' nl= ',nl,nr0,(''+x[0]).replace(/[\.①]/g,'').length,nl-(''+x[0]).replace(/[\.①]/g,'').length-x[1]);
				
				x[1]='⓪'.repeat(Math.max(nl-(''+x[0]).replace(/[\.①]/g,'').length-x[1],0))	//透明0
					+x[0]
					+'⓪'.repeat(x[1]+nr0);	//透明0
				
				consolelog('x[1]= ',x[1]);
				if(/\./.test(x[1])){
					x[1]=x[1].replace(/0+$/,function(t){return '∅'.repeat(t.length)})
				}
				x[0]='';
			},tA);
			
			consolelog(aA.join(' aA= '));
			
			aA[0]=['','⓪'.repeat(Math.max(nl-(''+aA[0][0]).replace(/[\.①]/g,'').length,0))
						+aA[0][0]
						+'0'.repeat(aA[0][1]>0?aA[0][1]:0)
						+'⓪'.repeat(nr0-Math.max(aA[0][1],0))];
			aA[1]=['×','⓪'.repeat(Math.max(nl-(''+aA[1][0]).replace(/[\.①]/g,'').length,0))
						+aA[1][0]
						+'0'.repeat(aA[1][1]>0?aA[1][1]:0)
						+'⓪'.repeat(nr0-Math.max(aA[1][1],0))];


			consolelog('dA ',dA, 'nl ',nl);
			var dotf=function(x){
				if(x[1].split('.').length-1<dA.length){
					for(var i=dA.length-1;i>=0;i--){

						var y=x[1].replace(/①/g,'.').replace(/⓪/g,'0'), yl=y.length;
		
						consolelog('y ',y,'nl-dA['+i+']= ',nl+dA[i]);

						if(!(new RegExp('^([^\\.]\\.*){'+(nl+dA[i])+'}\\.')).test(y)){

							x[1]=x[1].replace(new RegExp('^(([⓪\\d][①|\\.]*){'+(nl+dA[i])+'})'),'$1①');

								
							if(x[1].split(/[\.①]/).length-1==dA.length){
								break;
							}
						}
					}
				}
				x[1]=x[1].replace(/∅/g,kancel(0)).replace(/①/g,hp('.')).replace(/⓪/g,hp());
			};
			dotf(aA[0]);
			dotf(aA[1]);
			for(var i=tA.length-1;i>=0;i--){
				dotf(tA[i]);
			}
			if(+d>0){

				tA[tAl][1]=tA[tAl][1].replace(new RegExp('(\\\\hphantom\\{0\\}){'+nr0+'}$'), '0'.repeat(d)+kancel(0).repeat(Math.max(nr0-d,0)));
				consolelog(tA[tAl][1]);
			}

			return mtrx(aA.concat(tA),'.','.','','I2'+(bl>=2?'_'+(tA.length+1):''))+'\\\\ '+t;
		}



		if(op=='竖式/'){//二元 p需计算到的小数位
			
			/* 测试用例：
$Decimal.oprs('竖式/',[1.43,0.13])$\\
$Decimal.oprs('竖式/',[1.234,20.15],5)$\\
$Decimal.oprs('竖式/',[1.234,20.15])$\\
$Decimal.oprs('竖式/',[1.3,0.78],1)$\\
$Decimal.oprs('竖式/',[0.002,20.15])$\\

$Decimal.oprs('竖式/',[0.002,0.01])$\\
$Decimal.oprs('竖式/',[0.002,300])$\\

$Decimal.oprs('竖式/',[0.02,0.01])$\\
*/

			consolelog(aA.join('; '));
			var a=aA[0][0],b=aA[1][0],
				al=a.length, bl=b.length,
				atens=aA[0][1], btens=aA[1][1],
				
				c='', d=aA[0][1]-aA[1][1],q='',
				Da=Decimal.toStr(aA[0]), Db=Decimal.toStr(aA[1]),
				sa=Da, sb=/\./.test(Db)?Db.replace('.','③'):Db.replace(/0+$/,function(x){return x.replace(/0/g,'②')}),
				rep01=function(x){return x.replace(/[\d②]/g,'⓪').replace(/[\.③]/g,'①')},//.replace(/[\.③⑤]/g,'①')},
				rep4=function(x){return x.replace(/[⓪①②③⑤]/g,'')},
				repI=function(x){return x.replace(/[①③⑤\.]/g,'').replace(/[⓪②]/g,'0').replace(/^0+/,'')},
				repopa=function(x){return x.replace(/[①③⑤]/g,'.').replace(/[⓪②]/g,'0')};
			//把b化成整数（a相应扩大或缩小倍数）		透明0：⓪ 		透明. :①		kancel(0): ②		kancel('.')：③			hp(kancel('.'))：⑤	
 			if(btens){
 				sa=sa.replace('.','③');
 			}
			if(btens>0){//sa小数点向左偏移	
				if(/0$/.test(sa)){//atens>0
					var r0=sa.replace(/.*[^0]/,'').length;
					if(r0>=btens){
						sa=sa.substr(0,sa.length-btens)+'②'.repeat(btens)
					}else{
						sa=sa.substr(0,sa.length-btens)+'.'+sa.substr(sa.length-btens,sa.length-r0)+'②'.repeat(r0)
						
					}

				}else{//atens<=0
					var n=atens<0?sa.split('③')[0].length:al;
					if(n>btens){
						sa=sa.substr(0,n-btens)+'.'+sa.substr(n-btens,sa.length)
					}else{
						sa='0.'+'0'.repeat(btens-n)+sa
					}
				}



			}
			if(btens<0){//sa小数点向右偏移
				if(atens>=0){//atens>0
					sa+='0'.repeat(-btens);
				}else{// if(/\./.test(sa)){//atens<0
					
					var dotr=sa.split('③')[1].length;
					if(dotr>-btens){
						sa=sa.substr(0,sa.length-(dotr+btens))+'.'+sa.substr(sa.length-(dotr+btens),sa.length)
					}else if(dotr==-btens){
						sa+='①';
					}else{
						//sa='0.'+'0'.repeat(-btens-dotr)+sa

						sa=(/^0③/.test(sa)?sa.replace(/0③0*/,function(x){return x.replace(/0/g,'②')}):sa)+'0'.repeat(-btens-dotr)+'①'
					}
				}
			}
			
			
			
			//  以下待续
			var sl=sa.length, nop=p==undefined, fx=nop?8:p, fxi=0,r='',A='',IA='', tA=[sa];

consolelog('sa= ',sa, '小数精度位数 fx = ',fx);
			for(var i=0;i<sl+fx+2;i++){
consolelog('i= ',i, 'c= ',c,'r= ',r,'A= ',A,'IA =',IA);


				if(/^0+$/.test(rep4(r))){//余数为0
					break;
				}

				if(fxi>=fx+1){
					consolelog('小数精度达标',fxi,' >= ',fx,'+1');
					
					break;
				}


				var dos=0;

				do{
consolelog('do循环开始：i= ',i,'c= ',c);
					var si=i<sl?sa[i]:(/[\.①③]/.test(sa) || i>sl?'0':'①');//'⓪':'①'
					A+=si;
					IA=repI(A);


consolelog('小循环开始：i= ',i,'si= ',si, 'sa = ',sa, 'sl = ',sl);
	
consolelog('si = ',si,'sa= ',sa,'c= ',c,'A= ',A,'IA= ',IA,'fxi= ', fxi,'fx+1= ',fx+1,'(b,IA) = ',b,IA);
					
					if(/[\.①]/.test(si)){
consolelog('si = ',si,'fx = ',fx,'c = ',c,'fxi = ',fxi);
						if(!fx && si=='①'){
							c=c.replace(/⓪$/,'0');
							fxi=1;
							A=A.replace(/①$/,'')
							break
						}
						
						c=c.replace(/⓪$/,'0')+'.'
						
					}else if(/③/.test(si)){
						
						c+='⑤';
					}else if(Integer.is.b2['>'](b,IA)){
						if(/\d/.test(c)){
							c+=0;
						}else{
							c+='⓪';
						}
					}

consolelog('小循环尾声 i= ',i,'c= ',c);
					fxi=(rep4(c).split('.')[1]||'').length;
					

					i++;
					dos=1;
consolelog('商 c= ',c,' 小数位数 fxi= ',fxi,'此时i= ',i);
					
				}while(Integer.is.b2['>'](b,IA) && fxi<fx+1)

consolelog('i= ',i,'qr之前，c= ',c);
				var qr=Integer.oprs('/',[IA,b]);
consolelog(IA,'/',b,' = qr= ',qr);

consolelog('i= ',i,'tA= ',tA,'A= ',A,'fxi= ',fxi,' fx+1 = ',fx, '+1');
if(tA.length>1){
	tA[tA.length-1]=A;
}
				if(qr[0]=='0' && fxi>=fx+1){
					consolelog('精度足够，退出循环');
					r=A;
					break
				}




				if(!/\d/.test(c) && qr[0]=='0'){
					c+='⓪'
					
				}else{
					c+=qr[0]
				}
				fxi=(rep4(c).split('.')[1]||'').length;
consolelog('qr之后，c= ',c,'此时商的小数位数 fxi = ',fxi);

				var pd=Integer.oprs('-',[IA,qr[1]]);
				
consolelog('pd= ',pd);

				var pdi=rep01(c).split('');
consolelog('pdi= ',pdi.join(''),'c= ',c,'c.length',c.length);
				for(var j=c.length-1;j>-1;j--){
consolelog('c[',j,'] = ',c[j], /[\.①③⑤]/.test(c[j]));
					if(!/[\.①③⑤]/.test(c[j])){
						pdi[j]=pd.slice(-1);
						pd=pd.substr(0,pd.length-1);
						
consolelog('j= ',j,' pdi= ',pdi.join(''),' pd =', pd);
						if(!pd){
							break
						}
						
					}
				}
				tA.push(pdi.join(''));
consolelog('后来 pdi= ',pdi.join(''));
				

				
				var ri=rep01(c).split(''), qr1=qr[1];
consolelog('ri= ',ri.join(''));
				for(var j=c.length-1;j>-1;j--){
					if(!/[\.①③⑤]/.test(c[j])){
						ri[j]=qr1.slice(-1);
						qr1=qr1.substr(0,qr1.length-1);
						if(!qr1){
							break
						}
						
					}
				}
				A=ri.join('');
				IA=repI(A);
consolelog('余数 A= ',A,'IA = ',IA);
				r=A;
				if(i<sl){
consolelog('局部余数= ',r,'A = ',A);

					r+=sa.substr(i);
consolelog('整体余数= ',r);
				}
				
consolelog('大循环尾声 i= ',i,'c= ',c,'r= ',r, 'sa= ',sa, 'fxi= ',fxi, 'fx+1=',fx,'+1',' dos= ',dos);

//这里需要更新A, IA, C
				tA.push(r);
				
				
				
				
				if(dos){
					i--;
					
				}
			}

			if(c.length<sl){
				
				consolelog('此时 c=',c );
				consolelog('sa= ',sa );
				
				//c+=rep01(sa.substr(c.length))
				c+=rep01(sa.substr(c.length));
				
				consolelog('然后 c=',c );
				
				if(/⓪+$/.test(c)){
					
					c=c.replace(/⓪+$/,function(x){return '0'.repeat(x.length)})
				}
				
				
			}
			var cl=c.length;
			Arrf(function(x,i){
				if(x.length<cl){
					tA[i]+=rep01(c.substr(x.length))
				}
				consolelog(tA[i]);

				if(i%2){//需加下划线的行
					if(/^\D*0.*\d/.test(tA[i+1])){
						var l0=tA[i+1].match(/^\D*0[0\D]*/g)[0].length+1-tA[i].replace(/\d.+/,'').length;
						tA[i]=tA[i].replace(/(\d.*)*\d.*/,function(x){return x.length>l0?kxu(x.substr(0,l0))+x.substr(l0):kxu(x)})
					}else{
						tA[i]=tA[i].replace(/(\d.*)*\d/,function(x){return kxu(x)})
					}
				}else{
consolelog(tA[i]);
					if(/^\D*0.*\d/.test(tA[i])){
						var l0=tA[i].replace(/[^0].*/,'').length;
						//tA[i]=tA[i].replace(/^\D*0[0\D]*/, function(x){return x.replace(/0/g,'⓪')});
					//	tA[i]=tA[i].replace(/^\D*00+/, function(x){var x0=x.split('0')[0]+0;return x0+x.substr(x0.length).replace(/0/g,'⓪')});
						tA[i]=tA[i].replace(/00+$/, function(x){return x.replace(/0/g,'⓪').replace(/⓪$/,'0')});
						tA[i]=tA[i].replace(/^\D*0+[1-9]/, function(x){return x.replace(/0/g,'⓪')});
consolelog(tA[i]);
					}
				}
				
				tA[i]=(i?hp(sb+')'):sb+')')+tA[i]
			},tA);
			
			tA.unshift(hp(sb)+kxu(hp(')')+c));


			
			c=rep4(c);
consolelog('尾声r = ',r);
if(r.length<sl){
	r+=sa.substr(r.length);
	consolelog('实际上 r = ',r);
}

			r=/[1-9]/.test(r)?repopa(/⑤/.test(r)?r.replace('⑤','.').replace('①',''):r.replace('①','.')):'0';//r=/[1-9]/.test(r)?rep4(r.replace(/⓪/g,'0').replace(/①/g,'.')).replace(/^0+/,''):'0';
			r=r.replace(/^0+/,'');
			if(r[0]=='.'){
				r=0+r
			}

consolelog('最终r = ',r);

			t=Da+'÷'+Db+'='+c+
				(r?'\\cdots '+r+(fx?'\\\\ '+Da+'÷'+Db+'≈'+Decimal.opr1('r',Decimal.build.D(c),fx)+'（保留'+fx+'位小数）':''):'');
			
			/*
				js精度bug
				(0.000099255).toFixed(8)
				
				
			*/

			return mtrx(tA,'.','.','').replace(/⓪/g,hp()).replace(/①/g,hp('.')).replace(/②/g,kancel(0)).replace(/③/g,kancel('.')).replace(/⑤/g,hp(kancel('.')))+'\\\\ '+t;
		}



		if(op=='+'){
			for(var i=0;i<al;i++){
				if(aA[i][0]=='0'){
					aA.splice(i,1);
					al--;
					i--;
				}
			}
			
			if(al<2){return aA[0]}
			
			var sA=[];
			for(var i=0;i<al;i++){
				sA.push(aA[i].join())
			}
			for(var i=0;i<al;i++){
				for(var j=i+1;j<al;j++){
					if(sA[i]=='-'+sA[j] || sA[j]=='-'+sA[i]){
						sA.splice(i,1);
						sA.splice(j-1,1);
						aA.splice(i,1);
						aA.splice(j-1,1);
						al-=2;
						i--;
						break;
					}
				}
			}
			

			if(al==0){var A=['0',0,0];A.type='Decimal';return A}
			if(al<2){return aA[0]}
			
			if(al>2){
//consolelog(aA,al);
				return Decimal.oprs('+',[Decimal.oprs('+',aA.slice(0,al-1)),aA[al-1]])

			}else{
				var a0=''+aA[0][0],a1=aA[0][1],b0=''+aA[1][0],b1=aA[1][1],isNega=a0[0]=='-',isNegb=b0[0]=='-',isNegSame=isNega==isNegb,
					Ia=a0.replace(/^-/,'').length,Ib=b0.replace(/^-/,'').length,Na=a0.replace(/-/,''),Nb=b0.replace(/-/,'');
//consolelog(Na,Nb);
				
				if(isNegSame){
					
					if(a1>=Ib+b1){
						return [a0+ZLR(0,a1-Ib-b1)+b0.substr(+isNegb),b1]
					}
					if(b1>=Ia+a1){
						return [b0+ZLR(0,b1-Ia-a1)+a0.substr(+isNega),a1]
					}

					if(a1==b1){
						return Decimal.build.D((isNega?'-':'')+Integer.oprs('+',[Na,Nb]),a1)
					}
					
					if(a1>b1){
						return Decimal.build.D((isNega?'-':'')+Integer.oprs('+',[Na+ZLR(0,a1-b1),Nb]),b1)
					}
					if(a1<b1){
						return Decimal.build.D((isNega?'-':'')+Integer.oprs('+',[Nb+ZLR(0,b1-a1),Na]),a1)
					}
				}else{
					//consolelog(isNegb?[aA[0],[Nb,b1]]:[aA[1],[Na,a1]]);
					return Decimal.oprs('-',isNegb?[aA[0],[Nb,b1]]:[aA[1],[Na,a1]])
				}
			}

		}
		if(op=='-'){
			for(var i=1;i<al;i++){
				if(aA[i][0]=='0'){
					aA.splice(i,1);
					al--;
					i--;
				}
			}
			
			if(al<2){return aA[0]}
			
			if(aA[0][0]=='0'){
				if(al==2){
					return Decimal.opr1('-',aA[0])
				}else{
					return Decimal.opr1('-',Decimal.oprs('+',aA.slice(1)))
				}
			}
			
			if(al>2){
				return Decimal.oprs('-',[aA[0],Decimal.oprs('+',aA.slice(1))])
				
			}else{

				var a0=aA[0][0],a1=aA[0][1],b0=aA[1][0],b1=aA[1][1],isNega=a0[0]=='-',isNegb=b0[0]=='-',isNegSame=isNega==isNegb,
					Ia=a0.replace(/^-/,'').length,Ib=b0.replace(/^-/,'').length,Na=a0.replace(/-/,''),Nb=b0.replace(/-/,'');
				if(isNegSame){
					var agb=Decimal.is.b2['≥'](aA[0],aA[1]);
					if(a1==b1){
						return Decimal.build.D((agb?'':'-')+Integer.oprs('-',[Na,Nb]),a1)
					}
					
					if(a1>b1){
						//consolelog(Na+ZLR(0,a1-b1),Nb);
						return Decimal.build.D((agb?'':'-')+Integer.oprs('-',[Na+ZLR(0,a1-b1),Nb]),b1)
					}
					if(a1<b1){
						return Decimal.build.D((agb?'':'-')+Integer.oprs('-',[Nb+ZLR(0,b1-a1),Na]),a1)
					}
				}else{
					return isNegb?Decimal.oprs('+',[aA[0],[b0.substr(1),b1]]):Decimal.opr1('-',Decimal.oprs('+',[[a0.substr(1),a1],aA[1]]))
				}
			}
		}

		if(op=='*'){
			if(al<2){return aA[0]}
			for(var i=0;i<al;i++){
				if(aA[i][0]=='0'){
					var A=['0',0,0];A.type='Decimal';
					return A
				}
			}
			var tens=0,isneg=0,nA=[];
			for(var i=0;i<al;i++){
				var ai=aA[i];
				if(ai[0]=='-'){
					isneg=!isneg;
					if(ai[0]!='-1'){
						nA.push(ai[0].substr(1));
					}
				}else{
					if(ai[0]!='1'){
						nA.push(ai[0]);
					}
				}
				if(ai[1]){
					tens+=ai[1];
				}
			}
			
			al=nA.length;
			
			if(al<2){var A=[nA[0],tens0];A.type='Decimal';return A}
			if(al>2){
				return Decimal.oprs('*',[Decimal.build.D(Integer.oprs('*',nA.slice(0,al-1))),[nA[al-1],tens]])
			}else{
				var A=[Integer.oprs('*',nA),tens,0];
				A.type='Decimal';
				if(/0+$/.test(A[0])){
					A[1]+=A[0].replace(/^.*[^0]/,'').length;
					A[0]=A[0].replace(/0+$/,'');
				}
				return A
			}
		}
		if(op=='/'){
			return Frac.opr1('.',Frac.oprs('/',Arrf(Frac.build.D,aA)))
		}
		if(op=='^'){//有理小数幂运算不封闭，可能得到根号形式的无理数
			return Frac.oprs('^',Arrf(Frac.build.D,aA))
		}
	}
	
/*函数依赖关系：

Decimal.build.F 依赖于 Frac.opr1('.',A)
Decimal.toStr(,'/') 依赖于 Frac.toStr(Frac.build.D(A))
Decimal.opr1('/') 依赖于 Frac.build.D(A)

*/
}, Frac={/*分数(分子，分母)		本质是数组：[分子，分母]

	*/
	build:{
		A:function(a){//分子，分母数组
			var A=[].concat(a);
			A.type='Frac';A.toStr=function(p){return Frac.toStr(this,p)};
			return A
		},
		I:function(t){//整数数字串
			var A=[t+'','1'];
			A.type='Frac';A.toStr=function(p){return Frac.toStr(this,p)};
			return A
		},
		D:function(a){//有理小数Decimal对象	或有限小数字符串
			var A=isArr(a)?[].concat(a):[a,0,0];
			if(A.length==1){
				A.push(0,0)
			}
			if(A.length==1){
				A.push(0)
			}
			A[0]=Decimal.toStr(Decimal.build.D(A[0],A[1]));
			
			return Frac.build.F(n2frac(A[0],A[2]))
		},
		F:function(t){//t是分数字符串a/b 或整数字符串
			var s=wrapTrim(''+t), A=s.split('/');
			A.type='Frac';A.toStr=function(p){return Frac.toStr(this,p)};
			if(!/\//.test(s)){
				A.push('1');
			}
			return A
		}

	},
	is:{//布尔逻辑
		b2:{//二元关系
			"=":function(A,B){
				return +(FracReduct(A)==FracReduct(B))
			},
			"≠":function(A,B){
				return +(FracReduct(A)!=FracReduct(B))
			},
			">":function(A,B){
				return +/-/.test(fracOpr('-',B,A))
			},
			"≥":function(A,B){
				return +!/-/.test(fracOpr('-',A,B))
			},
			"<":function(A,B){
				return +/-/.test(fracOpr('-',A,B))
			},
			"≤":function(A,B){
				return +!/-/.test(fracOpr('-',B,A))
			},
		},
		b1:{//一元关系
			"1":function(A){return +(A[0]+''==A[1]+'' && A[0]+''!='0')},
			"0":function(A){return +(A[0]+''=='0')},
			"+":function(A){return +(A[0]+''!='0' && (A[0]+'')[0]!='-')},
			"-":function(A){return +((A[0]+'')[0]=='-')},

		}
	},
	fromStr:function(s){
		if(/^-?\d+$/.test(s)){
			return Frac.build.I(s)
		}
		if(/^-?[\d\.]+[%‰‱]?$/.test(s)){
			return Frac.build.D(s)
		}
		if(/^-?[\d\.]+×10\^.+$/.test(s)){
			return Frac.build.D(Decimal.build['10'](s))
		}
		if(/^-?\d+[/]\d+$/.test(s)){
			return Frac.build.F(s)
		}
		return undefined
	},
	toStr:function(A,latex){//转成文本
		/* 	
			分数文本
			参数latex 指定输出latex形式
		*/
		var t=A.join('/').replace(/\/1$/,'');
		return latex && A[1]!='1'?kfrac(t):t

	},
	opr1:function(op,arr,p){//一元运算	p是参数			运算结果仍是有理数，则返回分数数组，否则返回表达式字符串！
		var A=FracReduct(arr).split('/'),a=A[0],b=A[1]||'1',isNeg=a[0]=='-', aa=isNeg?a.substr(1):a;
		if(!A[1]){
			A[1]='1'
		}
		A.type='Frac';A.toStr=function(p){return Frac.toStr(this,p)};
		if(op=='-'){//相反数
			if(a!='0'){
				A[0]=isNeg?aa:'-'+a;
			}
		}
		if(op=='||'){//绝对值
			if(isNeg){
				A[0]=aa;
			}
		}
		
		if(op=='1/'){//倒数
			if(a!='0'){
				A[0]=isNeg?'-'+b:b;
				A[1]=aa;
			}
		}

		if(op=='^2'){//平方
			if(a!='0'){
				A[0]=Integer.opr1('^2',aa);
				A[1]=Integer.opr1('^2',b);
			}
		}
		if(op=='^3'){//立方
			if(a!='0'){
				A[0]=Integer.opr1('^3',aa);
				A[1]=Integer.opr1('^3',b);
			}
		}

		if(op=='√'){//开方
			return Frac.oprs('^',[A,[1,2]])
		}
		if(op=='∛'){//开立方
			return Frac.oprs('^',[A,[1,3]])
		}
		if(op=='∜'){//开四次方
			return Frac.oprs('^',[A,[1,4]])
		}


		if(op=='.'){//分数化小数对象	a=qb+r
			if(a=='0'){
				return Decimal.build.I(0)
			}
			a=a.replace('-','');
			consolelog(a,b,'化小数对象');
			var al=a.length,q='',r='',qr=[],len=0;
			while(!len || r!='0'){
				var x=Integer.oprs('/',[a,b]),X=x.join();
				consolelog(a,'/',b,' = ',x);

				r=x[1];
				
				if(r=='0'){//除尽
					q+=x[0];
					return Decimal.build.D(nTrim(q.replace(/^0+([1-9])/,'$1').replace(/^0+\./,'0.')),0,0)
				}
				if(qr.indexOf(X)>-1){//发现循环节
					
					if(qr.indexOf(X)>-1){
						len=qr.length-qr.indexOf(X);
					}
					return Decimal.build.D(nTrim(q.replace(/^0+([1-9])/,'$1').replace(/^0+\./,'0.')),0,len)

				}
				
				qr.push(X);
				
				q+=x[0];
				if(q.length==al && r!='0'){
					q+='.'
				}
				a=r+'0';
			}
		}

		if(op=='='){/*约分化简	分子、分母都是整数
			*/
			var t=gcd(A);
			if(a=='0'){A[0]='0';return A}
			var s=isNeg ^ b[0]=='-'?'-':'';

			a=Integer.oprs('/',[a.replace('-',''),t])[0];
			b=Integer.oprs('/',[b.replace('-',''),t])[0];
			
			A[0]=s+a;
			A[1]=b;

		}
		return A
	},
	
	oprs:function(op,arr,p){//多元运算	p是参数
		var A=[].concat(arr),l=A.length;
		A.type='Frac';A.toStr=function(p){return Frac.toStr(this,p)};
		if(/^[\+\-\*\/×÷]$/.test(op)){
			return Frac.build.F(Arrf(function(x,y){return fracOpr(op,x,y)},A,'cp2'))
		}


		if(op=='^'){
			var t=fracOpr(op,A[0],A[1]);
			if(t.indexOf('(-1)^')>-1){//负数开偶次方，得到复数
				return t
				
			}else if(t.indexOf('^')>-1){//开方 根数
				
				return t
				
			}else{
				if(l>2){
					A.shift();
					A[0]=Frac.build.F(t);
					return Frac.oprs('^',A)
				}else{
					return Frac.build.F(t)
				}
			}

		}
	}



}, Root={/*根数		本质是二维数组：[(-1)^的有理幂次（默认0）,有理系数（默认1）,底数（正分数，默认1）,分数幂次（正分数，默认1）]

	*/
	build:{
		I:function(t){//整数字符串
			var A=[Frac.build.I('0'),Frac.build.I(t),Frac.build.I('1'),Frac.build.I('1')];
			A.type='Root';A.toStr=function(p){return Root.toStr(this,p)};
			return A
		},

		D:function(a){//小数对象
			var A=[Frac.build.I('0'),Frac.build.D(a),Frac.build.I('1'),Frac.build.I('1')];
			A.type='Root';A.toStr=function(p){return Root.toStr(this,p)};
			return A
		},

		F:function(t){//t是分数字符串a/b 或数组
			var A=[Frac.build.I('0'),isArr(t)?t:Frac.build.F(t),Frac.build.I('1'),Frac.build.I('1')];
			A.type='Root';A.toStr=function(p){return Root.toStr(this,p)};
			return A
		},

		FP:function(t){/* t是分数幂字符串(-1)^(奇数/偶数)×(e/f)×(a/b)^(c/d) 或分数数组[[a0,a1],[b0,b1]]
				(-1)^(1/2)											[1,2], [1,1], [1,1], [1,1]
				(-1)^(1/2)×(e/f)×(a/b)^(c/d)						[1,2], [e,f], [a,b], [c,d]
				(-1)^(1/2)×(-1)×(a/b)^(c/d)						[1,2], [-1,1], [a,b], [c,d]
				(-1)^(1/2)×(e/f)									[1,2], [e,f], [1,1], [1,1]
				(-1)^(1/2)×(a/b)^(c/d)								[1,2], [1,1], [a,b], [c,d]

				(e/f)×(a/b)^(c/d)									[0,1], [e,f], [a,b], [c,d]
				-(a/b)^(c/d)										[0,1], [-1,1], [a,b], [c,d]
				e/f													[0,1], [e,f], [1,1], [1,1]
				(a/b)^(c/d)											[0,1], [1,1], [a,b], [c,d]
				
				
			*/
			var A=isArr(t)?[Frac.build.I('0'),Frac.build.I('1')].concat(t):(t.indexOf('(-1)^')>-1?[
				Frac.build.F(t.split('×')[0].split('^')[1]),
				Frac.build.F((t.split('×')[1]||'1^').indexOf('^')>0?'1':t.split('×')[1]),
				Frac.build.F(t.split('^').length>2?t.split('^')[1].replace(/.+×/,''):'1'),
				Frac.build.F(t.split('^').length>2?t.split('^')[2]:'1'),
				]:[
				Frac.build.F('0'),
				Frac.build.F(t.split('×')[0].indexOf('^')>0?(t.split('×')[0][0]=='-'?'-1':'1'):t.split('×')[0]),
				Frac.build.F(t.split('^').length>1?t.split('^')[0].replace(/^(-|.+×)/g,''):'1'),
				Frac.build.F(t.split('^').length>1?t.split('^')[1]:'1'),
				]);
				A.type='Root';A.toStr=function(p){return Root.toStr(this,p)};
			return A
		},


	},
	is:{//布尔逻辑
		b2:{//二元关系
			"=":function(A,B){
				return +(A.join()==B.join())
			},
			"≠":function(A,B){
				return +(A.join()!=B.join())
			},
			">":function(A,B){

			},
			"≥":function(A,B){
				
			},
			"<":function(A,B){
				
			},
			"≤":function(A,B){
				
			},
		},
		b1:{//一元关系
			"1":function(A){return +(A.join(';')==[[0,1],[1,1],[1,1],[1,1]].join(';'))},
			"0":function(A){return +(A[1][0]=='0')},
			"+":function(A){return +(A[1][0]!='0' && A[1][0]!='-')},//忽略虚数系数
			"-":function(A){return +(A[1][0]=='-')},//忽略虚数系数


		}
	},
	fromStr:function(s){
		if(/^-?\d+$/.test(s)){
			return Root.build.I(s)
		}
		if(/^-?[\d\.]+[%‰‱]?$/.test(s)){
			return Root.build.F(Frac.build.D(s))
		}
		if(/^-?[\d\.]+×10\^.+$/.test(s)){
			return Root.build.D(Decimal.build['10'](s))
		}
		if(/^-?\d+[/]\d+$/.test(s)){
			return Root.build.F(s)
		}
		
		
		if(/^(\(-1\)\^[\d/\(\)]+|-)?(×?[\d/\(\)]+)?(×?[\d/\(\)]+\^[\d/\(\)]+)?$/.test(s)){
			return Root.build.FP(s)
		}
		return undefined
	},
	toStr:function(A,latex){//转成文本
		/* 	
			根数文本
			参数latex 指定输出latex形式
		*/
		var a=[],b,haspow=A[2].join()!='1,1';
		if(A[1][0]=='0'){
			return '0'
		}
		
		if(A[0][0]!='0'){//-1的幂次
			b=Frac.toStr(A[0]);
			a.push('(-1)^'+pp((b.indexOf('/')>0 && latex?kfrac(b,'',1):b),latex?'{}':'()'))
		}
		if(A[1].join()!='1,1'){//有理系数
			b=Frac.toStr(A[1]);
			if(b=='-1'){
				if(haspow){
					if(a.length<1){
						a.push('-')
					}
				}else{// (-1)^ ×(-1)	变成 (-1)^ 
					if(a.length<1){
						return '-1'
					}
					b=Frac.toStr(Frac.oprs('+',[A[0],['1','0']]));
					return '(-1)^'+pp((b.indexOf('/')>0 && latex?kfrac(b,'',1):b),latex?'{}':'()')
				}
			}else{
				if((b.indexOf('/')>0 || b[0]=='-') && (a.length || haspow)){
					
					a.push(latex?zp(b.indexOf('/')>0?kfrac(b):b):pp(b,'()'))

				}else{
					a.push(b)
				}
			}
		}
		if(haspow){//有理底数
			b=Frac.toStr(A[2]);
			var c=b.indexOf('/')>0?(latex?zp(kfrac(b)):pp(b,'()')):b;
			c+='^';
			b=Frac.toStr(A[3]);
			if(latex){
				c+=pp(b.indexOf('/')>0?kfrac(b,'',1):b,'{}')
				
			}else{
				c+=b.indexOf('/')>0?pp(b,'()'):b;
			}
			a.push(c)
		}
		
		//consolelog(a,b,c);
		b=a.join('×').replace('-×','-')

		return b
	},
	opr1:function(op,arr,p){//一元运算	p是参数
		var A=Arrfc([Frac.build.F,FracReduct],arr),isNeg=A[1][0][0]=='-';
		A.toStr=function(p){return Root.toStr(this,p)};
		
		if(op=='-'){//相反数
			if(A[1][0]!='0'){
				A[1][0]=isNeg?A[1][0].substr(1):'-'+A[1][0];
			}
			return A
		}
		if(op=='='){//化简
			if(A[1][0]=='0' || A[2][0]=='0'){//系数或底数为0
				A[0][0]='0';
				A[0][1]='1';
				A[1][0]='0';
				A[1][1]='1';
				A[2][0]='1';
				A[2][1]='1';
				A[3][0]='1';
				A[3][1]='1';
				return A
			}
			
			if(A[2][0][0]=='-' && /[02468]$/.test(A[3][0])){// 负底数的偶次幂
				A[2][0]=A[2][0].substr(1);
			}

			if(A[2][0][0]=='-' && /[13579]$/.test(A[3][0]) && /[13579]$/.test(A[3][1])){// 负底数的奇次幂
				A[1][0]=A[1][0][0]=='-'?A[1][0].substr(1):'-'+A[1][0];

				A[2][0]='1';
				A[2][1]='1';
				A[3][0]='1';
				A[3][1]='1';
			}
			if(A[2][0][0]=='-' && /[13579]$/.test(A[3][0]) && /[02468]$/.test(A[3][1])){// 负底数的奇次幂，然后开偶次方
				var f=Frac.oprs('+',[A[0],A[3]]);
				A[0][0]=f[0];
				A[0][1]=f[1];
				
				A[2][0]==A[2][0].substr(1);

			}

			if(A[3][0]=='0' || A[2].join()=='1,1'){// 幂次为0，或底数为1

				A[2][0]='1';
				A[2][1]='1';
				A[3][0]='1';
				A[3][1]='1';
			}

			if(A[3][0][0]=='-'){// 负幂，底数变成倒数
				var f=Frac.opr1('1/',A[2]);
				A[2][0]=f[0];
				A[2][1]=f[1];
				A[3][0]=A[3][0].substr(1);
			}
			
			if(A[3][0]!='1' && A[3][1]=='1'){// 底数的整数幂，化成，纯底数
				var f=Frac.oprs('*',[A[1],Frac.oprs('^',[A[2],A[3]])]);
				A[1][0]=f[0];
				A[1][1]=f[1];
				
				A[2][0]='1';
				A[2][1]='1';
				A[3][0]='1';
				A[3][1]='1';
			}



			if(A[3][0]!='1' || A[3][1]!='1'){// 底数的分数幂
				var f=Frac.oprs('^',[A[2],A[3]]);
				
				if(isStr(f)){//
					
					
				}else{
					f=Frac.oprs('*',[A[1],f]);
				
					A[1][0]=f[0];
					A[1][1]=f[1];
					
					A[2][0]='1';
					A[2][1]='1';
					A[3][0]='1';
					A[3][1]='1';
				}
			}
			
			
			
			return A
		}


		
	},
	
	oprs:function(op,arr,p){//多元运算	p是参数
		var aA=[].concat(arr),al=aA.length, t;

		if(op=='+'){


		}
		if(op=='-'){

		}
		if(op=='*'){


			return A
		}
		if(op=='/'){
			
			return A
		}
		if(op=='^'){//第2个元素，只能是有理数，不能是根数（否则变成超越数）
			
			return A
		}
	}



}, Num={//上述基本（有理元素）数学对象的统一全体（不含变量）	运算结果，可能得到上述之外的数学表达式对象（Mfn）
	build:function(a){
		return isStr(a)?a:[].concat(a)
	},
	fromStr:function(s){//根据表达式自动识别数字类型，返回基本（有理元素）数学对象Integer Decimal Frac Root
		var x=Frac.fromStr(s);
		if(x==undefined){
			x=Root.fromStr(s);
		}
		return x
	},
	toStr:function(a,p){
		if(isStr(a)){
			return a
		}
consolelog(a);
		var x=a.type;
		if(x){
			//return eval(x).toStr(a,p)
			return a.toStr(p);
		}
		return undefined
	},
	is:{//布尔逻辑
		b2:{//二元关系
			"=":function(a,b){
				return +(''+a==''+b)
			},
			"≠":function(a,b){
				return +(''+a!=''+b)
			},

		},
		b1:{//一元关系
			'0':function(n){//
				return +(n[0]=='0')
			},
			'+':function(n){//是正数
				return +(n[0]!='0' && n[0]!='-')
			},
			'-':function(n){//是负数
				return +(n[0]=='-')
			},
		}
	},
	opr1:function(op,n,latex){//一元运算		latex指定不计算，得到形式字符串（LaTeX格式）


		if(op=='-'){//相反数

		}
		if(op=='1/'){//倒数

		}



	},


		
	oprs:function(op,A,latex){//多元运算		latex指定不计算，得到形式字符串（LaTeX格式）

		if(ZLR('+ - * / × ÷').indexOf(op)>-1){

		}
		if(op=='^'){

		}
		
		
		
	}

//下列涉及数字转换

},percnt2n=function(n){//百分数转小数
	var p=''+n,A=p.replace(/[%‰‱]/,'').split('.'),pcnt='%‰‱'.indexOf(p.substr(-1))+2;
	if(pcnt>1){
		if(A.length<2){
			A.push('');
		}
		A[0]=A[0].replace(/(\d)/,'0'.repeat(pcnt)+'$1');
		A[1]=A[0].substr(-pcnt)+A[1];
		A[0]=A[0].substr(0,A[0].length-pcnt).replace(/^-?0+(.)/,'$1');
	}
	return A.join('.')

},n2percnt=function(n,dgts,force){/*小数化百分比	[小数, 小数位数, 强制保留]
	参数force 强制保留几位小数（尾0不丢弃）
	*/
	var d=dgts||0,p=percnt2n(n),ds=0;
	if(/\./.test(p)){
		ds=p.split('.')[1].length
	}
	p=(+p*100).toFixed(d||ds);
	if(!force){
		p=nTrim(p)
	}
	return p+'%'


},n2frac=function(n,len){/*小数转成分数	
	假分数improper 
	带分数vulgar 暂不支持 
	真分数
	
	参数 len 指定循环节长度（n最末尾的m个数字作为循环节）
	
	*/
	var p=percnt2n(n),A=p.split('.');
	if(/\//.test(p)){
		if(A.length<2){
			return p
		}else{
			A=p.split('/');
			return n2frac(A[0])
		}
	}
	if(A.length>1){
		if(len){//循环小数
			var m=+len;
			if(A[0]=='0' && A[1].length==m){//纯循环小数
				/*
					0.a...b a...b a...b ...
					q*a...b*(1-q^n)/(1-q) 其中q=10^(-m)
					n→+∞，取极限，得到q*a...b/(1-q) = a...b/9...9
					
				*/
				A[0]=ZLR('9',m);
				return fracReduct(A[1],A[0])
			}else{//混循环
				var B=[A.join('').substr(0,p.length-1-m),A.join('').substr(-m)];

				/*
					c...d . a...b a...b a...b ...
					c...d+q*a...b*(1-q^n)/(1-q) 其中q=10^(-m)
					n→+∞，取极限，得到c...d+q*a...b/(1-q) = c...d + a...b/9...9 
						= [c...d*(10^m-1) + a...b]/9...9  = [c...d*10^m + a...b - c...d]/9...9
				*/

				var A0l=A[0].length,A1l=A[1].length, B0l=B[0].length;

				return fracOpr('+',A0l==B0l?B[0]:(A0l<B0l?B[0].substr(0,A0l)+'.'+B[0].substr(A0l-B0l):B[0]+ZLR('0',A0l-B0l)), 
					fracOpr('/',B[1]+ZLR('0',Math.max(m-A1l,0)),ZLR('9',m)+ZLR('0',Math.max(A1l-m,0))))
			}
			
		}else{
			A[0]=+A[0].replace(/^-/,'');
			A[1]=A[1].replace(/0+$/,'');
			A[1]=[+A[1],A[1].length,A[1].length];
			while(!(A[1][0]%2) && A[1][1]){
				A[1][0]/=2;
				A[1][1]--;
			}
			while(!(A[1][0]%5) && A[1][2]){
				A[1][0]/=5;
				A[1][2]--;
			}
			A[1][1]=Math.pow(2,A[1][1])*Math.pow(5,A[1][2]);
			A[0]=(/^-/.test(p)?'-':'')+(A[0]*A[1][1]+A[1][0])+'/'+A[1][1]
		}
	}
	return A[0]

	
},n2ArabBig=function(n){//数字转大号阿拉伯数字
	var SN='０１２３４５６７８９';
	return (''+n).replace(/\d/g,function(s){return SN[s]});

},n2Roman=function(m,c){/*I（1）、V（5）、X（10）、L（50）、C（100）、D（500）、 M（1000）
		参数c 指定小写

		I II III IV V VI VII VIII IX X XI XII XIII XIV XV
	
		每3位一个组合，加几个横线，表示乘以1000的几次幂
		1,2,3 以几个1表示
		4,9,以5,10前放个1表示
		6,7,8, 11,12,13以5,10后放几个1表示
		
	*/
	var n=+m,t=''+m,tl=t.length, ks=Math.ceil(tl/3),r='',caps=+c||0,f1=function(x,c){//个位数
		var u=('0'+x).substr(-1),v=+u,c=+c||0;
		return v<4?ZLR('Ii'[c],v):(v==9||v==4?'Ii'[c]+'VvXx'[+(v==9)*2+c]:'Vv'[c]+ZLR('Ii'[c],v-5))
	},f2=function(x,c){//两位数
		var u=('00'+x).substr(-2),u0=u[0],u1=u[1],v0=+u0,v1=+u1,c=+c||0;
		return (v0<4?ZLR('Xx'[c],v0):(v0==9||v0==4?'Xx'[c]+'LlCc'[+(v0==9)*2+c]:'Ll'[c]+ZLR('Xx'[c],v0-5)))+f1(v1,c)
	},f3=function(x,c){//三位数
		var u=('000'+x).substr(-3),u0=u[0],u1=u.substr(1),v0=+u0,v1=+u1,c=+c||0;
		return (v0<4?ZLR('Cc'[c],v0):(v0==9||v0==4?'Cc'[c]+'DdMm'[+(v0==9)*2+c]:'Dd'[c]+ZLR('Cc'[c],v0-5)))+f2(v1,c)
	},f4=function(x,c){//四位数
		var u=('0000'+x).substr(-4),u0=u[0],u1=u.substr(1),v0=+u0,v1=+u1,c=+c||0;
		return (v0<4?ZLR('Mm'[c],v0):kxo(f1(v0,c)))+f3(v1,c)
	};
	if(tl<5){
		return [f1,f2,f3,f4][tl-1](n,caps)
	}
	r=f3(t.substr(-3),caps);
	tl=ks*3;
	t=('00'+t).substr(-tl);
	//consolelog(t);
	for(var i=2;i<ks+1;i++){
		//consolelog(t.substr(tl-i*3,3));
		r=Arrfc(copyA(kxo,i-1),f3(t.substr(tl-i*3,3),caps))+r;
	}
	return r

},Roman2n=function(s){//罗马数字（如有横线，字母后加逗号）转成普通数字
	var fi=function(t){//判断单个罗马字母表示几位数
		return t==''?0:(/IV/i.test(t)?1:(/XL/i.test(t)?2:(/CD/i.test(t)?3:4)))
	},k2n=function(t){/*将千以内罗马字母转成数字
		*/
		var tl=t.length,r;
		if(tl){
		//	consolelog(t);
			var t0=t[0].toUpperCase(),t1=(t[1]||'').toUpperCase(),ti0=fi(t0),ti1=fi(t1),is5=/[VLD]/.test(t0),ten=Math.pow(10,(is5?'VLD':'IXCM').indexOf(t0));
			if(is5){
				r=ten*5;
				if(/[XCM]/.test(t1) && ti0==ti1){
					t1=t.replace(new RegExp('^.'+t1+'+','i'),'');
					r+=ten*(tl-t1.length-1)+k2n(t1);
				}else{
					r+=k2n(t.substr(1));
				}
			}else if(ti1==ti0+1){//^10 100
		//		consolelog('^10 100');
				r=ten*9+k2n(t.substr(2))
			}else if(ti1==ti0 && /[VLD]/.test(t1)){//^10 50
		//		consolelog('^10 50');
				r=ten*4+k2n(t.substr(2))
			}else if(t1==t0){//^10+
		//		consolelog('^10+');
				t1=t.replace(new RegExp('^'+t0+'+','i'),'');
				r=ten*(tl-t1.length)+k2n(t1);
			}else{
		//		consolelog('^10 1 10*');
				r=ten+k2n(t.substr(1));
			}

			return r
		}
		return 0
	};
	return s.replace(/\D+,/g, function(t){return ('00'+k2n(t.replace(',',''))).substr(-3)}).replace(/\D+/g, function(t){return ('00'+k2n(t)).substr(-3)}).replace(/^0+/,'')
	


//下列涉及数字正则


},nRegofab=function(s){/*1a2a3b 含字母数字串，转为正则
	1aaa	-> 1(.)\1{2}
	1a2		-> 1(.)[2]
	*/
	var t=s;
	if(/a/.test(s)){
		for(var i=0;i<26;i++){
			var c=String.fromCharCode(97+i);
			if(t.indexOf(c)>-1){
				t=t.replace(new RegExp(c+'+[^'+c+']?','gi'), function(x){
					var l=x.length;
					if(/\d/.test(x[l-1])){
						return copyA('\\'+(i+1),l-1).join('')+'['+x[l-1]+']'
					}else{
						return x.replace(new RegExp(c,'gi'),'\\'+(i+1))
					}
				}).replace('\\'+(i+1),'(.)');
			}else{
				return t
			}
		}
	}
	return t
},nReg2dot=function(r){//数字正则转换成点号表达式。为简化，正则做限制：不允许使用*，只允许[] () . \数字1～9 {数字}
	var s=r.replace(/\[[^\]]+\]/g,'.').replace(/(\\\d|[\.\d])\{\d+\}/g,
		function(t){return ZLR(t.replace(/\{.+/,''),+t.replace(/.+\{|\}/g,''))}).replace(/(\(\.+\))\{\d+\}/g,
		function(t){return t.replace(/\{.+/,'')+ZLR(t.replace(/\).+|\(/g,''),+t.replace(/.+\{|\}/g,'')-1)});
	for(var i=1;i<10;i++){
		if(/\(/.test(s)){
			var p=s.match(/\([^\)]+\)/g)[0].replace(/\(|\)/g,'');
			s=s.replace(new RegExp('\\\\'+i,'g'),p).replace(/\([^\)]+\)/,p);
		}else{
			break
		}
	}
	return s

},nReg2digits=function(r){//正则转换成满足正则条件（但(\d+).+\1这种无法精确满足）的数字串（含[]）。为简化，正则做限制：不允许使用*，只允许[] () . \数字1～9 {数字}
	var s=r.replace(/(\\\d|[\.\d])\{\d+\}/g,function(t){return ZLR(t.replace(/\{.+/,''),+t.replace(/.+\{|\}/g,''))})
		.replace(/\./g,'[0123456789]').replace(/\d-\d/g,function(t){return seqsA(t.replace('-','~')).join('')})
		.replace(/\^\d+/g,function(t){return '0123456789'.replace(new RegExp('['+t.substr(1)+']','g'),'')})
		.replace(/\[\d+\]\{\d+\}/g,
		function(t){return ZLR(t.replace(/\]\{.+/,'')+']',+t.replace(/.+\{|\}/g,''))})
		.replace(/(\(\.+\))\{\d+\}/g,
		function(t){return t.replace(/\{.+/,'')+ZLR(t.replace(/\).+|\(/g,''),+t.replace(/.+\{|\}/g,'')-1)});
	for(var i=1;i<10;i++){
		if(/\(/.test(s)){
			var p=s.match(/\([^\)]+\)/g)[0].replace(/\(|\)/g,'');
			s=s.replace(new RegExp('\\\\'+i,'g'),p).replace(/\([^\)]+\)/,p);
		}else{
			break
		}
	}
	return s

},nReg2A=function(r){//正则转换成满足正则条件（但(\d+).+\1这种无法精确满足）的笛卡尔数组。为简化，正则做限制：不允许使用*，只允许[] () . \数字1～9 {数字}
	var s=nReg2digits(r);
	return Arrf(function(t){return t.join('')}, cartestian(eval(('['+s+']').replace(/[\d\]](?!\]|$)/g,'$&,')))).filter(function(t){return t[0]!='0'})




//下列涉及数字识别


},is0=function(t){return +/^0$/.test(t)

},nis=function(a,pos,negA,pos1,neg1){/*判断正整数a是否满足表达式：整数,2n,2n+1,3n,3n-1,p素数,c合数
		pos 必须都满足的表达式组
		negA 必须都不满足的表达式组
		
		pos1 表达式组中至少有1个被满足
		neg1 表达式组中至少有1个不被满足
	*/
	var n=+a,pA=(pos||'').split(','),nA=(negA||'').split(','),p1A=(pos1||'').split(','),n1A=(neg1||'').split(',');
	var f=function(k,e){//判断满足表达式
		if(/[pc]/.test(e)){
			return e=='p' ^ !isPrime(k)	//异或
		}
		if(/n/.test(e)){//算术表达式
			var b=+(e.split('n')[0])||1, r=+e.split('n')[1]||0;
			if(r<0){r+=b}
			return +((+k)%b==r)
		}

		return +(''+k==e)	//常数

	};
	for(var i=0,l=pA.length;i<l;i++){
		var e=pA[i];
		if(e && !f(n,e)){
			return 0
		}
	}
	for(var i=0,l=nA.length;i<l;i++){
		var e=nA[i];
		if(e && f(n,e)){
			return 0
		}
	}
	
	if(pos1){
		var r=0;
		for(var i=0,l=p1A.length;i<l;i++){
			var e=p1A[i];
			if(e && f(n,e)){
				r=1;
				break;
			}
		}
		if(!r){
			return 0
		}
	}
	
	if(neg1){
		var r=0;
		for(var i=0,l=n1A.length;i<l;i++){
			var e=n1A[i];
			if(e && !f(n,e)){
				r=1;
				break;
			}
		}
		if(!r){
			return 0
		}
	}
	return 1

},nAis=function(A,pos,negA, pos1,neg1, pos1All,neg1All, posA1,negA1){/*判断数组A中正整数a是否满足表达式
		pos 必须都满足的表达式组
		negA 必须都不满足的表达式组
		
		pos1 表达式组中每个表达式至少有A中1个元素满足		满射
		neg1 表达式组中每个表达式至少有A中1个元素不满足		满射

		pos1All 至少有A中1个元素满足表达式组中所有表达式
		neg1All 至少有A中1个元素不满足表达式组中所有表达式
		
		posA1 A中元素都满足表达式组中至少1个表达式			单射
		negA1 A中元素都不满足表达式组中至少1个表达式		单射

	*/

	var n=A.length,p1A=(pos||'').split(','),nA=(negA||'').split(',');
	if(pos || negA){
		for(var i=0;i<n;i++){
			if(pos && !nis(A[i],pos) || negA && !nis(A[i],'',negA)){
				return 0
			}
		}
	}
	if(posA1 || negA1){
		for(var i=0;i<n;i++){
			if(posA1 && !nis(A[i],'','',posA1) || negA1 && !nis(A[i],'','','',posA1)){
				return 0
			}
		}
	}

	if(pos1All){
		var r=0;
		for(var i=0;i<n;i++){
			if(nis(A[i],pos1All)){
				r=1;
				break;
			}
		}
		if(!r){//A中没有元素全满足
			return 0
		}
	}
	if(neg1All){
		var r=0;
		for(var i=0;i<n;i++){
			if(nis(A[i],'',neg1All)){
				r=1;
				break;
			}
		}
		if(!r){//A中没有元素全不满足
			return 0
		}
	}


	if(pos1){
		for(var i=0,l=p1A.length;i<l;i++){
			var r=0;
			for(var j=0;j<n;j++){
				var a=A[j];
				if(nis(a,p1A[i])){//只要有1个元素a满足
					r=1;
					break;
				}
			}
			if(!r){//A中没有元素满足
				return 0
			}
		}
	}
	if(neg1){
		for(var i=0,l=n1A.length;i<l;i++){
			var r=0;
			for(var j=0;j<n;j++){
				var a=A[j];
				if(nis(a,'',n1A[i])){//只要有1个元素a不满足
					r=1;
					break;
				}
			}
			if(!r){//A中没有元素满足
				return 0
			}
		}
	}
	return 1

},nisd=function(n,notNeg){//判断表达式是数字（仅整数、小数）	参数notNeg 指定是否非负
	return /^-?\d+\.?\d*$/.test(n) && (notNeg?!/-/.test(n):1)

},nisVd=function(n,notNeg){//判断表达式是单字母或数字
	return isVar(n)||nisd(n,notNeg)

},nisVid=function(n,notNeg){//判断表达式是单字母（可含下标格式：A_i A_12 A_{1i} A_(1i) A_(10,23) A_(i,j) A_{i,j} A_{i_1} A_{i_{1k}} A_{i_1,j_2} A_{i_{1m},j_{2n}} ）或数字
	if(nisVd(n,notNeg)){
		return true
	}
	if(notNeg && /^-\d+/.test(n) || !notNeg && /^[^a-z]/i.test(n)){
		return false
	}
	if(/_/.test(n) && isVar(n.split('_')[0])){
		var n1=n.split('_')[1];
		if(nisVd(n1)){return true}
		
		if(/^\(.+\)$/.test(n1) || /^\{.+\}$/.test(n1)){
			n1=n1.replace(/^.|.$/g,'');
			if(/^[\da-z]+[,\da-z]*$/i.test(n1) || nisVid(n1)){return true}
			if(/,/.test(n1)){
				return Arrf(nisVid,n1.split(',')).indexOf(false)<0
			}
		}
	}
	return false
	
},nisfrac=function(n,notNeg){//判断表达式是有理数	参数notNeg 指定是否非负
	return /^-?\d+[/]?\d*$/.test(n) && (notNeg?!/-/.test(n):1)

},nisn=function(n0,sign,qType,fracType){/*判断表达式是数字（整数、分数、有理数）	不考虑小数、百（千、万）分数等情况
	参数
		sign	符号为（-1负数,0,1正数）	默认值：null任意
		qType 有理数类型（-1小数，0整数，1分数）	默认值：null任意
		fracType 分数类型
				-2假分数（分子>=分母） 
				-1非既约分数（可约分）
				0（化简后是整数）的假分数
				1最简分数(既约分数，不含整数)
				2真分数（分子<分母））
			默认值：null任意
				非null, 则认为qType=1
			
		*/
	var n=nTrim(n0),l=arguments.length;
	if(!/^-?\d+([\/\.]\d+)?$/.test(n)){
		return 0
	}
	if(l==1){
		return 1
	}

	if(sign===1 && (/^-/.test(n) || n=='0') || sign===-1 && !/^-/.test(n) || sign===0 && n!='0'){
		return 0
	}

	if(qType===-1 && !/^-?\d+\.\d+$/.test(n) || qType===0 && !/^-?\d+$/.test(n) || (qType===1||l>3) && !/^-?\d+\/\d+$/.test(n)){
		return 0
	}

	if(l>3){
		var A=n.replace(/-/,'').split('/');
		if(fracType===0 && A[0]!=A[1] || fracType===2 && !Integer.is.b2['<'](A[0],A[1]) || fracType===-2 && Integer.is.b2['<'](A[0],A[1])){
			return 0
		}
		var F=FracReduct(n);
		if(fracType===-1 && F==n|| fracType===1 && F!=n){
			return 0
		}
	}
	return	1



//下列涉及数字精度计算
		
},digi=function(n,k){//精确到小数位，然后去除小数尾0
	return +(n.toFixed(k||2).replace(/\.0+$/,'').replace(/(\.\d)0/,'$1'));

},Nsqrt=function(n){/*大整数取平方根（向下取整） n是BigInt类型


Math.sqrt(Number(444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444n))
2.1081851067789195e+55


	a² < x² < b²
	(a+b)^2=a^2+2ab+b^2
	2ab+b^2=(ab+b^2/2)^2
	
	
	目前最好的算法，是卡马克算法（优点：无除法，循环迭代少，精度高；缺点：依赖一个Magic Number神奇初始值，需要理解数字存储机制，难理解）
	
	其它算法：二分法（慢），牛顿法
	
	https://blog.csdn.net/yutianzuijin/article/details/78839981
	
	
	2345436565565465464576859231434
	
	2
	*/
	var r=Math.trunc(Math.sqrt(Number(n))), m=0n;
	if(/e/.test(r)){
		r=BigInt((''+r).replace(/\.|e.+/g,'')+'0'.repeat(+(''+r).split('+')[1]-(''+r).replace(/.\.|e.+/g,'').length))
	}else{
		r=BigInt(r)
	}

	while(m<n){
		r++;
		m=r*r;
	}
	return r




//下列涉及分数化简计算


	
},fracReduct=function(m,n){/*约分	分子、分母都是整数
	返回字符串：a/b 或者整数a
	*/

	var a=nTrim(m),b=nTrim(n),t=gcd([a,b]);
	if(a=='0'){return 0}
	var s=a[0]=='-' ^ b[0]=='-'?'-':'';


	a=Integer.oprs('/',[a.replace('-',''),t])[0];
	b=Integer.oprs('/',[b.replace('-',''),t])[0];
	
	return s+a+(b=='1'?'':'/'+b)

},FracReduct=function(f,vulgar){/*化成既约分数 返回字符串
	参数f 		可以是字符串，或数组[分子,分母]
	参数 vulgar 指定返回带分数数组['k','a/b']

	*/
	if(isArr(f)){
		var v=fracReduct(f[0],f[1]);
	}else{
		var m=nTrim(f), md=/[\.%‰‱]/.test(m),mf=/\//.test(m),v=''+m;
		if(md){
			v=n2frac(m)
		}else if(mf){
			v=m.split('/');
			v=fracReduct(v[0],v[1]);
		}else{//是整数
			v=v.replace(/^0+/,'')||'0'
		}
	}
	if(vulgar){
		v=v.split('/');
		if(v.length==2){
			var v0=+v[0].replace(/-/,''),v1=+v[1];
			return [v[0][0].replace(/[^-]/,'')+Math.floor(v0/v1),(v0%v1)+'/'+v1]	//这里需要用Integer.oprs('/',[v0,v1]) 进行改造，以支持大数
		}else{
			return ['0',v.join('/')]
		}
	}
	return v

},fracOpr=function(o,x,y){/*分数二元运算 
		分数运算	返回 字符串
			+ - * / 封闭
			^ 整数幂 封闭
			  分数幂 得到开根号的无理数 (a/b)^(c/d)
			 
		关系运算		返回 逻辑0,1
	
	*/

	
consolelog(o,x,y);
	var A=(''+FracReduct(x)).split('/'),B=(''+FracReduct(y)).split('/'),l=A.length+B.length,s,op=opreplace0(o,1),m=A.join('/'),n=B.join('/');

	if(/[\|∤]/.test(op)){
		if(+m==0||l>2){return 0}
		return +(op=='|' && !((+n)%(+m))||op=='∤' && (+n)%(+m))

	}
	
	if(/[≤=≥<>]=?/.test(op)){
		var r=fracOpr('-',m,n);
		if(/^0$/.test(r)){
			return +/[≤=≥]/.test(op)
		}if(/^-/.test(r)){
			return +/[≤<]/.test(op)
		}else{
			return +/[≥>]/.test(op)
		}
	}
consolelog(op,m,n);
	if(l==2){//整数运算
		if(op=='/'){
			return fracReduct(m,n)
		}else if(op=='^'){
			return Integer.oprs(op,[m,n]) //Math.pow(m,n)
		}else if(op=='#'){//商，忽略余数	相当于JS中的 (m-m%n)/n 以及 Math.floor(m/n)
			return Integer.oprs('/',[m,n])[0]
		}else if(op=='%'){//余数	相当于JS中的 m%n
			return Integer.oprs('/',[m,n])[1]
		}else if(/^[\+\-\*\/]$/.test(op)){//
			return Integer.oprs(op,[m,n])

		}else{
			consolelog(m,op,n);
			return eval(m+op+pp(n)) //加括号，防止n是负数时报错
		}
	}
	if(l==3){
		if(A.length==1){
			A[1]=1
		}else{
			B[1]=1
		}
	}
	A[0]=+A[0];A[1]=+A[1];//m的分子，分母
	B[0]=+B[0];B[1]=+B[1];//n的分子，分母

	if(/[\+\-]/.test(op)){
//		consolelog(A,B);
		s=lcm([A[1],B[1]]);
		A[0]=s/A[1]*A[0];
		B[0]=s/B[1]*B[0];
//		consolelog(A,B);
		return fracReduct(A[0]+B[0]*(op=='+'?1:-1),s)

	}else if(/[\*\/]/.test(op)){
		return fracReduct(A[0]*B[op=='*'?0:1],A[1]*B[op=='*'?1:0])

	}else if(/[\^]/.test(op)){

		if(l==3 && A[1]!=1){	//分数的整数幂
			if(!B[0]){
				return 1
			}
			s=Math.abs(B[0]);
			if(s!=1){
				A[0]=Math.pow(A[0],s);
				A[1]=Math.pow(A[1],s);
			}
			if(B[0]<0){
				s=A[0];
				A[0]=A[1];
				A[1]=Math.abs(s);
				if(s<0){
					A[0]=-A[0];
				}
			}
			return A[0]+(A[1]==1?'':'/'+A[1])
		}
		if(B[0]<0){	//负幂
			B[0]=-B[0];
			s=A[0];
			A[0]=A[1];
			A[1]=Math.abs(s);
			if(s<0 && B[0]%2){
				A[0]=-A[0]
			}
		}
		var isneg=A[0]<0?(B[1]%2 && B[0]%2?'-':(B[0]%2?'(-1)^('+B[0]+'/'+B[1]+')×':'')):'';
		if(A[0]<0){
			A[0]=-A[0]
		}

		consolelog('有理数幂',A.join('/'),B.join('/'),A,B);
		
		//下面对A分子，分母分别进行因式分解，因子公重数(>1)，如果与B分母，可以约分，则化简
		if(A[1]!=1){//分数的分数幂
			var a=factorA(A[0]),ga=+gcd(a[1]);
			var b=factorA(A[1]),gb=+gcd(b[1]);
			consolelog('A: ','a=',a.join(' ;; '),'b=',b.join(' ;; '),'ga = ',ga,'gb = ',gb)
			if(gb>1){
				var gab=A[0]==1?gb:+gcd([ga,gb]);
				//var gab=+gcd([ga,gb]);
				if(gab>1){
					consolelog('gab= ',gab)
					var gabc=+gcd([gab,B[1]]);
					if(gabc>1){
						
						consolelog(A,B,'gabc = ',gabc);
						consolelog('a = ',a.join(' ; '),'b = ',b.join(' ; '));
						
						a[1]=Arrf(function(x){return x=='1'?x:Integer.oprs('/',[x,gabc])[0]},a[1]);
						consolelog('a = ',a[0],' ;;; ',a[1]);
						a=factorA2n(a);
						
						
						consolelog('a = ',a);
						b[1]=Arrf(function(x){return x=='1'?x:Integer.oprs('/',[x,gabc])[0]},b[1]);
						b=factorA2n(b);
						
						consolelog('b = ',b);
						
						A=[a,b];
						
						consolelog('A = ',A);
						
						B[1]/=gabc;
						
						if(B[1]==1){//整数幂
							if(B[0]==1){
								return  isneg?isneg+(isneg=='-'?A.join('/'):pp(A.join('/'))):A.join('/')
									
							}else{//2^10 3^6 4^5 5^4 (6~10)^3 (11~32)^2
								consolelog(A,B);
								var m=max(A);
								if(m<=32 && B[0]<=10 && Math.pow(m,B[0])<=1024){
									Arrf(function(t){return Math.pow(t,B[0])},A);
									return  isneg+Arrf(function(t){return Math.pow(t,B[0])},A).join('/')
									
								}else{
									
									return  isneg+pp(A.join('/'))+'^'+B[0];
								}
							}
						}
						
					}
				}
			}

		}else{//整数的分数幂
			var a=factorA(A[0]),ga=+gcd(a[1]);
			var gabc=+gcd([ga,B[1]]);
			if(gabc>1){//底数（分解因数后，因数公重数）与分数幂的分母可以约分
				a[1]=Arrf(function(x){return x=='1'?x:Integer.oprs('/',[x,gabc])[0]},a[1]);
				consolelog('a = ',a[0],' ;;; ',a[1]);
				a=factorA2n(a);
				A=[a,1];
				
				consolelog('A = ',A);
				consolelog('B = ',B,'gabc= ',gabc);
				B[1]/=gabc;
				if(B[1]==1){//整数幂
					consolelog(isneg,op,[a,B[0]],Integer.oprs(op,[a,B[0]]));
					return isneg+Integer.oprs(op,[a,B[0]])
				}
			}
			//var x=isneg+(/^1[234]$/.test(B.join(''))?
			consolelog(isneg+A[0]+'^('+B.join('/')+')');
			return isneg+A[0]+'^('+B.join('/')+')';
		}


	consolelog('最终 ',isneg+pp(A.join('/'))+'^('+B.join('/')+')');
		return isneg+pp(A.join('/'))+'^('+B.join('/')+')';
	}

};