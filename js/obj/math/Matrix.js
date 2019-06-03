/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
/*
	todo
	https://zhidao.baidu.com/question/558757759834345092.html?entry=qb_uhome_recommend
	https://zhidao.baidu.com/question/1888431984538964628.html?entry=qb_uhome_qfeed
	可达矩阵，布尔矩阵求幂
	
	
	*/
var Mtrx={	//矩阵
	build:{//直接构造矩阵
		F:function(a,m,n){//形式矩阵aij
			var A=[];A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			for(var i=0;i<m;i++){
				A.push([]);
				for(var j=0;j<(n||m);j++){
					A[i].push(a+'_{'+(i+1)+(j+1)+'}')
				}
			}
			
			return A
		},
		I:function(m,n,k){//m阶单位矩阵 n指定矩阵单位Matrix Unit：特殊最简行阶梯矩阵主对角线全为1，其余为0
				//k指定数量矩阵，对角线都是k
			var isk=k!==undefined;
			if(!n || m==n){ 
				var A=[];A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
				for(var i=0;i<m;i++){
					A.push([]);
					for(var j=0;j<m;j++){

						A[i].push(j==i?(isk?k:1):0)
					}
				}
			}else if(m>n){
				A=Mtrx.build.B([[Mtrx.build.I(n,n,isk?k:1)],[Mtrx.build.N(m-n,n,0,true)]])
			}else{
				A=Mtrx.build.B([[Mtrx.build.I(m,m,isk?k:1), Mtrx.build.N(m,n-m,0,true)]])
			}
			return A
		},
		N:function(m,n,k,k2num){//全为k的mxn阶矩阵	k2num指定转换为数字
			var A=[];A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			for(var i=0;i<m;i++){
				if(k2num){
					A.push([]);
					for(var j=0;j<n;j++){
						A[i].push(+k)
					}
				}else{
					A.push((k+(','+k).repeat(n-1)).split(','));
					//Mtrx.build.A(k,n)
				}
			}
			return A
		},
		A:function(n,k){//全为k的n长数组 nx1
			var A=[];A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			for(var i=0;i<n;i++){
				A.push(k);
			}
			return A
		},
		B:function(M){//分块：M为矩阵块组成的矩阵（4层数组） 
			//同一行的矩阵块之间, 行数要一致（列数可不作要求），才能拼接
			var A=[];A.t='Mtrx',m=M.length;A.toStr=function(p){return Mtrx.toStr(this,p)};
consolelog(M);
			for(var i=0;i<m;i++){
				var Mi=M[i], n=Mi.length, Mi0=Mi[0];
				if(!isArr(Mi)){	//M是一维数组
					A=[].concat(M);
					A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
					return A;
				}
				var r=Mi0.length;
				if(!isArr(Mi0)){
					r=1;
				}
				for(var k=0;k<r;k++){
					var Ak=[];
					for(var j=0;j<n;j++){
						var Mij=Mi[j];
						Ak=Ak.concat(Mij[k])
					}
					A.push(Ak);
				}
			}
			return A
		},
		BC:function(arr,b,leftcycle){/* b循环阵：b-cyclic
				arr:第1行数组
				b参数（b为-1时，就是反循环anti-cyclic，默认不填是1）
				leftcycle指定向左循环（默认右循环）

			*/
			var A=[],n=arr.length;A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			for(var i=0;i<n;i++){
				var Ai=[];
				for(var j=0;j<n;j++){
					Ai[(n+j+i*(1-2*(+leftcycle||0)))%n]=times([arr[j],b===undefined || b===true?1:b])
				}
				A.push(Ai);
			}
			return A
		},

		D:function(arr,counter){/*对角阵：arr为方阵块组成的数组，其余部分都为0 
				counter指定副对角阵
			*/
			var n=arr.length,nA=[];
			for(var i=0;i<n;i++){
				nA.push(isArr(arr[i])?arr[i].length:1)
			}

			var nn=Arrf(function(a,b){return a+b},nA,'cp2'), A=Mtrx.build.N(nn,nn,0,true),Ai=0;
			for(var i=0;i<n;i++){
				var a=arr[i],an=nA[i],isA=isArr(a);
				for(var j=0;j<an;j++){
					for(var k=0;k<an;k++){
						A[Ai+j][counter?nn-Ai-an+k:Ai+k]=isA?a[j][k]:a
					}
				}
				Ai+=an;
			}
			return A
		},

		LU:function(S){//上三角或下三角数组
			var A=[],n=S.length, isu=S[0].length==n;A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			for(var i=0;i<n;i++){
				var O=ZLR(0,isu?i:n-i-1).split(''), Si=isu?O.concat(S[i]):S[i].concat(O);
				A.push(Si);
			}
			return A
		},
		S:function(S,skew){//（反）对称矩阵 S是上三角或下三角数组 skew反对称
			var A=[],n=S.length, isu=S[0].length==n;A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			for(var i=0;i<n;i++){
				var k=isu?i:n-i-1, O=ZLR(0, k).split(''), Si=isu?O.concat(S[i]):S[i].concat(O);
				for(var j=0;j<k;j++){
					var ii=isu?j:j+i+1, b=S[ii][isu?i-j:i], _b=neg(b);
					if(!isNaN(b)){
						_b=-(+b)
					}
					Si[ii]=skew?_b:b
				}
				A.push(Si);
			}
			return A
		},
		V:function(S,ev,T){//范德蒙矩阵数组	ev指定指数化成结果	T转置（不转置，首行都为1；转置，首列都为1）
			var A=[],n=S.length;A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			for(var i=0;i<n;i++){
				if(T){
					if(i==0){
						A=copyA([1],n)
					}else if(i==1){
						Arrf(function(t){t.push(S[i])},A);
					}else{
						Arrf(function(t){t.push(Pow([S[i],i],!ev).toStr())},A);
					}
				}else{
					if(i==0){
						A.push(copyA(1,n))
					}else if(i==1){
						A.push(S);
					}else{
						A.push(Arrf(function(t){return Pow([t,i],!ev).toStr()},S));
					}
				}
			}
			return A
		},
				
		replace:function(M,arr,posA,direction){/* 替换原矩阵中的部分元素，构成新矩阵
			替换位置posA：
				[i,j]		其中i,j是起始元素坐标（索引从1开始计数）
				
				如果不是数组，字符串形式：i3(替换第3行)		j4(替换第4列)
				
			方向direction：

				主对角线（-45°方向） d（往右下rb） d-（往左上lt）
							
				副对角线（45°方向） -d（往左下lb） -d-（往右上rt）
				
				水平h（向右r） h-（向左l）
				竖直v（向下b） v-（向上t）

			*/
			var A=Mtrx.opr1('拷',M), m=A.length,n=A[0].length,i=posA[0],j=posA[1], dir=direction;
			A.toStr=function(p){return Mtrx.toStr(this,p)};
			
			if(!isArr(posA)){
				if(i=='i'){
					i=+posA.substr(1);
					j=1;
					dir='h'
				}else{
					i=1;
					j=+posA.substr(1);
					dir='v'
				}
			}
consolelog(i,j,dir);
			
			for(var k=0;k<arr.length;k++){
				var di=/h/.test(dir)?0:(/-$/.test(dir)?-1:1)*k,
					dj=/v/.test(dir)?0:(/^(-d|[dh]-)$/.test(dir)?-1:1)*k
				A[i+di-1][j+dj-1]=arr[k]
			}
			return A
		}
	},
	is:{//布尔逻辑
		b2:{//二元关系
			"=":function(A,B){
				return +(A.length==B.length && A[0].length==B[0].length && Mtrx.toStr(A,'txt')==Mtrx.toStr(B,'txt'))
			},
			"≠":function(A,B){
				return +!Mtrx.is.b2['='](A,B)
			},
			"r=c":function(A,B){//判断是否行列数一致
				return +(A.length==B.length && A[0].length==B[0].length)
			},
			"c=r":function(A,B){//判断是否满足矩阵可乘（前者列数等于后者行数）
				return +(A[0].length==B.length)
			},
			"r=":function(A,B){//判断是否行数一致
				return +(A.length==B.length)
			},
			"c=":function(A,B){//判断是否列数一致
				return +(A[0].length==B[0].length)
			},
			"⊆":function(A,B){//定义（同阶）矩阵的包含关系：前者非零元，与后者相应位置的元都相等
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
			"⊂":function(A,B){return +(Mtrx.is.b2['⊆'](A,B) && !Mtrx.is.b2['='](A,B))},
			"⊇":function(A,B){return +Mtrx.is.b2['⊆'](B,A)},
			"⊃":function(A,B){return +(Mtrx.is.b2['⊆'](B,A) && !Mtrx.is.b2['='](A,B))},
			"⊄":function(A,B){return +(!Mtrx.is.b2['⊂'](A,B))},
			"⊅":function(A,B){return +(!Mtrx.is.b2['⊃'](A,B))},
			"⊈":function(A,B){return +(!Mtrx.is.b2['⊆'](A,B))},
			"⊉":function(A,B){return +(!Mtrx.is.b2['⊇'](A,B))},
		},
		b1:{//一元关系
			"I":function(A){return +Mtrx.is.b2['='](A,Mtrx.build.I(A.length,A[0].length))},//是否为单位（或者行列不相等且有一个满秩时的标准型：左上角为单位阵，其余为0）矩阵
			"0":function(A){return +(A.length<1 || /^(0,)*0$/.test(A))},//是否为零矩阵或空矩阵
			"行阶梯":function(A){//特殊的上三角
				var B=Mtrx.opr1('r1',A),iA=Arri(B,1),t=iA.join();
				return +(iA.sort(sortBy.num).join()==t && Set.unique(iA).length==B.length)
			},
			"列阶梯":function(A){//特殊的下三角
				/*
				var B=Mtrx.opr1('c1',A),iA=Arri(B,1),t=iA.join();
				return +(iA.sort(sortBy.num).join()==t && Set.unique(iA).length==B.length)
				*/
				return Mtrx.is.b1['行阶梯'](Mtrx.opr1('T',A))
			},
			"行最简":function(A){//特殊的行阶梯、上三角
				var B=Mtrx.opr1('r1',A);
				for(var i=0,r=B.length;i<r;i++){
					var j=B[i][1],v=B[i][0];
					if(/^0$/.test(v)){continue}
					if(!/^1$/.test(v) || !/^0*10*$/.test(Arri(A,j).join(''))){return 0} 
				} 
				return 1
			},
			"列最简":function(A){//特殊的列阶梯、下三角
				/*
				var B=Mtrx.opr1('c1',A);
				for(var i=0,r=B.length;i<r;i++){
					var j=B[i][1],v=B[i][0];
					if(/^0$/.test(v)){continue}
					if(!/^1$/.test(v) || !/^0*10*$/.test(A[j].slice(i).join(''))){return 0} 
				} 
				return 1
				*/
				return Mtrx.is.b1['行最简'](Mtrx.opr1('T',A))
				
			},
			"标准型":function(A){//不一定满秩的，行最简 且 列最简
				
				return +(Mtrx.is.b1['行最简'](A) && Mtrx.is.b1['列最简'](A))
			},
			"列正交":function(A){//列向量之间两两正交，但不一定是标准（规范）正交（不一定是单位向量）
				var m=A.length,Ak=[];
				for(var j=0,n=A[0].length;j<n;j++){
					var Aj=Arri(A,j);
					if(!j){
						Ak.push(Aj);
					}
					for(var k=j+1;k<n;k++){
						if(!j){
							Ak.push(Arri(A,k));
						}
						var p=Mtrx.opr2('内积',Aj,Ak[k]);
						if(p){
							return 0
						}
					}
				} 
				return 1
			},
			"列等模":function(A){//列向量模都相等
				var x;
				for(var j=0,n=A[0].length;j<n;j++){
					var Aj=Arri(A,j);
					if(!j){
						x=Mtrx.opr1('向量模1',Aj);
					}else if(x!=Mtrx.opr1('向量模1',Aj)){
						return 0
					}
				} 
				return 1
			},
			"列等和":function(A){//列向量和都相等，此和必为特征值
				var x;
				for(var j=0,n=A[0].length;j<n;j++){
					var Aj=Arri(A,j);
					if(!j){
						x=plus(Aj);
					}else if(x!=plus(Aj)){
						return 0
					}
				} 
				return 1
			},
			"行等和":function(A){//行向量和都相等，此和必为特征值
				var x;
				for(var j=0,n=A.length;j<n;j++){
					var Aj=A[j];
					if(!j){
						x=plus(Aj);
					}else if(x!=plus(Aj)){
						return 0
					}
				} 
				return 1
			},


			"S":function(A){return +Mtrx.is.b2['='](A,Mtrx.opr1('T',A))},//是否为对称矩阵 symmetric
			"-S":function(A){return +Mtrx.is.b2['='](Mtrx.opr1('-',A),Mtrx.opr1('T',A))},//是否为斜（反）对称矩阵 Skew-symmetric
			"D":function(A){//是否为对角阵
				var m=A.length, n=A[0].length;
				for(var i=0;i<m;i++){
					for(var j=0;j<n;j++){
						if(i!=j && +A[i][j]!=0){
							return 0
						}
					}
				}
				return 1
			},
			"qD":function(A){//是否为准对角阵
				var m=A.length, n=A[0].length;
				for(var i=0;i<m;i++){
					for(var j=i+1;j<n;j++){
						if(+A[i][j]!=0 || +A[j][i]!=0){
							return 0
						}
					}
				}
				return 1
			},
			"U":function(A){//是否为上三角	每一行，对角线下方行都为0
				var m=A.length, n=A[0].length;
				for(var i=0;i<n;i++){
					for(var j=i+1;j<m;j++){
						if(+A[j][i]!=0){
							return 0
						}
					}
				}
				return 1
			},
			"L":function(A){//是否为下三角	每一行，对角线右侧列都为0
				
				return Mtrx.is.b1['U'](Mtrx.opr1('T',A))
			},
			"UL":function(A){//是否为上或下三角
				return Mtrx.is.b1.U(A) || Mtrx.is.b1.L(A)
			},
			"r0":function(A){var b=0;for(var i=0;i<A.length;i++){if(/^0+$/.test(A[i].join(''))){return b}} return b},//是否存在全为0的行
			"c0":function(A){var b=0;for(var i=0;i<A[0].length;i++){if(/^0+$/.test(Arri(A,i).join(''))){return b}} return b},//是否存在全为0的列
			"rc0":function(A){return +(Mtrx.is.b1.r0(A)||Mtrx.is.b1.c0(A))},//是否存在全为0的行或列
			"rk":function(A){//是否存在成比例的行
					var b=0;
					for(var i=0;i<A.length;i++){
						if(/^0+$/.test(A[i].join(''))){return b}
					}
					return b},
			"ck":function(A){var b=0;for(var i=0;i<A[0].length;i++){if(/^0+$/.test(Arri(A,i).join(''))){return b}} return b},//是否存在成比例的列
			"rck":function(A){return +(Mtrx.is.b1.r0(A)||Mtrx.is.b1.c0(A))},//是否存在成比例的行或列
			"rck0":function(A){return +(Mtrx.is.b1.rc0(A)||Mtrx.is.b1.rck(A))},//是否存在全为0或成比例的行或列

			"R":function(A){return +Mtrx.is.b2['='](A,Mtrx.build.I(A.length))},//是否为实距阵
			"RS":function(A){return +(Mtrx.is.b1.S(A) && Mtrx.is.b1.R(A))},//是否为实对称阵
		}
	},
	fromStr:function(str,typ){
		var A,m,n,ij,e,rect, s=opreplace(str).replace(/&.*/,'');
		/*typ指定特殊类型输入
			1阶矩阵用[数字]表示（必须使用[]，否则超过1位数字时，无法区分1阶，还是其他方阵）
			sq 方阵 或 个位整数
				下列格式自动识别3×3
				|1 2 3;4 5 6;7 8 9|
				1 2 3;4 5 6;7 8 9
				1 2 3 4 5 6 7 8 9 
				123456789
				123-4-567-89
				
				个位整数
				1234;-2356;1230 被识别为3×4
				1234;2-356;1230 被识别为3×4
				1234 2-356 1230 被识别为3×4
				
				个位分数或小数
				1-1-110;1-11-31;1-1-2/43-1/2
			
			co 指定返回二次型系数（重新降序排列）
			
			
		str末尾有' 表示转置
		str末尾有H 表示共轭转置
		str末尾有* 表示伴随
		
		系数：-?\d*(\d+[\.\/]\d+)? 
		
			整数：-?\d+
			小数：-?\d+\.\d+
			分数：-?\d+\/\d+
			小数分数：-?\d+[\.\/]\d+
			负号：-\D
			
		单字母变量：/^[a-zα-ω]$/i
		
		特殊矩阵（命令或函数）：
			系数+字母（表示矩阵倍数）
			
			diag(,) 对角阵
			cdiag(,) 副对角阵
			I5 单位矩阵
			I5,4	(拟)单位矩阵
			O5 零矩阵
			I5,4 零矩阵

			-6I7 数量矩阵
			[数字]m,n
			N(m,n,k)
			
			BC(arr;[1,b];[1]) b循环
			N(-1,3) 元素相同矩阵 N(k,m,n) 	注意：与Mtrx.build.N参数顺序不一致
			S(;) 对称阵
			S2(;) 二次型对称阵（输入的非对角线元素是最终矩阵元素的2倍）	输入n(n+1)/2个元素
			
			QF() Quadratic Form二次型（含具体二次项xi^2,xixj等）
			Linear() 从线性方程组提取出矩阵（齐次则不含最后的零列）
			
			Skew2(;) 二次型拟反对称阵
			Skew(;) （拟）反对称阵（主对角线元素可以不为0）
			Sparse(;)m,n 稀疏矩阵（3元组表示的矩阵）
			V(,)[e指数化简] 范德蒙矩阵
		
		*/

		if(typ=='v'){//行向量
			A=s.split(/[, ]/);A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			return A
		}
		if(typ=='vT'){//列向量
			A=Arrf(function(x){return [x]},s.split(/[, ]/));A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			return A
		}
		
		if(/^\[\S+\]$/.test(s)){//一阶矩阵
			A=[[s.replace(/^\[|\]$/g,'')]];A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
			return A
			
		}
		
		if(/^-1?[a-z]/i.test(s)){//-命令字母
			return Mtrx.opr1('-',Mtrx.fromStr(s.replace(/^-1?/,''),typ||''))
		}
		if(/^-?\d+([\.\/]\d+)?[a-zα-ω]/i.test(s)){//-数字(整数、小数、分数)字母
			return Mtrx.opr2('*',s.replace(/[^\d\.\/].+$/,''),Mtrx.fromStr(s.replace(/^-?\d+([\.\/]\d+)?/,''),typ||''))
		}

		if(/['\*H]$/.test(s)){//转置 共轭转置H 伴随矩阵*
			var t=s.substr(-1);
			return Mtrx.opr1('T*H'["'*H".indexOf(t)],Mtrx.fromStr(s.substr(0,s.length-1),typ||''))
		}
		if(/^\[-?[\da-zα-ω]+([\.\/]\d+)?\]\d+(,\d+)?/i.test(s)){	//同数字（或字母）矩阵	[a]m,n
			var M=s.substr(1).replace(']',',').split(',');
			return Mtrx.build.N(M[1],M[2]||M[1],M[0])
		}
		if(/^N\(/.test(s)){//元素相同矩阵（同上）
			var M=s.replace(/^[^\(]+\(|\)$/g,'').split(',');
			return Mtrx.build.N(M[1],M[2]||M[1],M[0])
		}
		if(/^I\d+(,\d+)?$/.test(s)){//(拟)单位矩阵
			var M=s.substr(1).split(',');
			return Mtrx.build.I(M[0],M[1]||M[0])
		}
		if(/^O\d+(,\d+)?$/.test(s)){//零矩阵
			var M=s.substr(1).split(',');
			return Mtrx.build.N(M[0],M[1]||M[0],0)
		}
		if(/^V\(/.test(s)){//范德蒙矩阵
			var T=/'$/.test(s),ev=/\)1.?$/.test(s), M=s.replace(/^V.|\)[^\)]*$/g,'').split(',');
			return Mtrx.build.V(M,ev,T)
		}
		
		if(/^B\(/.test(s)){//分块
			return Mtrx.opr1('*',Mtrx.fromStr(s.substr(0,s.length-1),typ||''))
		}
		if(/^BC\(/.test(s)){//b循环
			var t=s.substr(3,s.length-4).split(';');
			return Mtrx.build.BC(Vect.fromStr(t[0]),t[1],t[2]);
		}
		if(/^c?diag\(/.test(s)){//对角 副对角
			var isC=/^c/.test(s), D=exp2arr(s.substr(+isC+5,s.length-6-(+isC)));
			consolelog(s.substr(+isC+5,s.length-6-(+isC)),D);

		//diag(345,678,diag(13,56),diag(1,2,4,diag(3,4,5,diag(6,7))))	这里有递归！
			//return Mtrx.build.D(Arrf(Mtrx.fromStr,D),isC);
			return Mtrx.build.D(Arrf(function(t){return Mtrx.fromStr(/^\d+$/.test(t)?'['+t+']':t)},D),isC);
		
		}
		if(/^S(kew)?2?\(/.test(s)){//（反）对称
			/*
				元素个数是n(n+1)/2 = x  则n^2+n-2x=0, n=(-1+√(1+8x))/2
				元素个数逐行减少n n-1 n-2
				对角线元素序号（从0编号）分别是0 n 2n-1 3n-3 4n-6 5n-10 ... in-i(i-1)/2
				二次型元素序号（从0编号）分别是0 1 2 ... n-1;n n+1 ... 2n-2;2n-1 ... 3n-4;3n-3
			*/
			var isSkew=/^Skew/.test(s), isS2=/^S(kew)?2\(/.test(s),sA=s.replace(/^[^\(]+\(|\)$/g,'').split(/[ ,;]/),n=(Math.sqrt(1+sA.length*8)-1)/2,M=[];
			for(var i=0;i<n;i++){
				var Mi=i*n-i*(i-1)/2,Mi1=(i+1)*n-i*(i+1)/2,MiA=[];
				for(var j=0;j<n-i;j++){
					if(isS2){
						MiA.push(j?divide([sA[Mi1+j-1],2]):sA[i])
					}else{
						MiA.push(sA[Mi+j])
					}
				}
				M.push(MiA)
			}
			return Mtrx.build.S(M,isSkew);
		}

		if(/^QF\(/.test(s)){//二次型 （含变量二次项）	typ=='co'，最终也返回系数数组
			var s0=s.split('QF(')[1].replace(/\)$/,''),deg=+fmax(s0.match(/x\d/ig).join(',').replace(/x/ig,'').split(',')),
				tA=Arrf(function(x){return exp2coe(s0,'x'+x+'\\^2')}, seqA(1,deg));
consolelog(deg,tA);
				for(var i=1;i<=deg;i++){
					tA=tA.concat(Arrf(function(j){return plus([exp2coe(s,'x'+i+'x'+j),exp2coe(s,'x'+j+'x'+i)])}, seqA(i+1,deg-i)))
				}
consolelog(tA);
			var M=Mtrx.fromStr('S2('+tA.join(' ')+')');

			return typ=='co'?[M,tA]:M

		}

		if(/^Linear\(/.test(s)){//从线性方程组提取系数	（齐次，不含最后一列零向量）
			var s0=s.split('Linear(')[1].replace(/\)$/,''),deg=+fmax(s0.match(/x\d/ig).join(',').replace(/x/ig,'').split(',')), inhomo=/=[^0]/.test(s0);
			s0=s0.split('\n');
			var m=s0.length,M=[]; //M=Mtrx.build.N(m,deg+(+inhomo),0);
			for(var j=0;j<m;j++){
				var tA=Arrf(function(x){return exp2coe(s0[j],'x'+x)}, seqA(1,deg));
				if(inhomo){
					tA.push(exp2coe(s0[j],'='));
				}
				M.push(tA)
			}
consolelog(tA);
			
			M.t='Mtrx';M.toStr=function(p){return Mtrx.toStr(this,p)};

			return M

		}



		if(/^Sparse/.test(s)){//三元组表示的稀疏矩阵
			var M=s.replace(/^[^\(]+\(|\)[^\)]*$/g,'').split(';'), mn=s.replace(/.+\)/,'').split(','),m=+mn[0],n=mn.length<2?m:+mn[1];
			A=Mtrx.build.N(m,n,0);
			consolelog(M);
			for(var i=0;i<M.length;i++){
				var Mi=M[i];
				if(/,/.test(Mi)){
					Mi=Mi.split(',')
				}else{
					Mi=[Mi[0],Mi[1],Mi.substr(2)];
				}
			consolelog(Mi);
				A[+Mi[0]-1][+Mi[1]-1]=Mi[2]
			}
			consolelog(A);
			return A
		}

/* 未被正确识别	，需修复	
	[-7;3] 单列
	x0y1 首个字符是字母
	
	
	
*/
		if(/^[\(\|].+[\)\|]$/.test(s) && !s.replace(/\([^\(\)]+\)/g,'').replace(/\|[^\|]+\|/g,'').trim().length){//	(0 1 3 -2)(2 1 -4 3)(2 3 2 -1)
			e=s.replace(/^.|.$/g,'').replace(/[, ]/g,' ').replace(/\)\(/g,';').replace(/\|\|/g,';');
			
		}else{
			if(typ=='sq' || !/\[/.test(s) && !/I|diag/.test(s)){
				consolelog(s);
				e=s.replace(/ +/g,' ').trim().replace(/^\||\|$/g,'').replace(/[;,] */g,' ');//不用ntrim，因为会把开头的零去掉

				A=[];A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
				

				
				
				if(!/ /.test(e)){//不含空格
	consolelog(e);
					if(/-/.test(e) || /^0/.test(e) || /\/.+\//.test(e) || !/\D/.test(e)){//[\da-zα-ω](?=\d|-)
						ij=e.replace(/[\da-zα-ω](?![\/\.;,])/ig,'$& ').trim().split(' ')
	consolelog(ij);
					}else{
						ij=e
					}
				}else{//含空格
					/*
					if(/\d-\d/.test(e)){
						var es=e.split(' ');
						m=es.length;
						for(var i=0;i<m;i++){
							A.push(es[i].replace(/[\da-zα-ω](?![\/\.;,])/g,'$& ').trim().split(' '))
						}
						return A
					}
					*/
					
					ij=e.split(' ')
				}
				if(isArr(ij)){
				
					m=Math.sqrt(ij.length);
					consolelog(ij.length,m);
					if(m%1){//根号开不尽？
						m=ij.length;
						rect=1;
					}

					for(var i=0;i<m;i++){
						var a=[];
						if(rect){
							A.push(ij[i].replace(/[\da-zα-ω](?=![\/\.;,])/g,'$& ').trim().split(' '));
						}else{
							for(var j=0;j<m;j++){
								a.push(ij[i*m+j]);
							}
							A.push(a)
						}
					}
				}else{
					A[0]=[e]
				}
				return A
			}
			e=s.replace(/ +/g,' ').trim().replace(/^\[|\]/g,'');
		}

		
		ij=sub2n(s.replace(/ +/g,' ').trim().substr(e.length+2*(+/\[/.test(s)))).split(',');
		m=+ij[0]||1;
		n=ij.length<2?m:+ij[1];

		if(/[ ;]/.test(e)){
			A=e.split(';');
			m=A.length;
			for(var i=0;i<m;i++){
				A[i]=ZLR(A[i])
			}
			A.t='Mtrx';A.toStr=function(p){return Mtrx.toStr(this,p)};
		}else if(/[ij]/.test(e)){//f(i,j)表达式形式
			console.log(e, ij);
			A=Mtrx.build.N(m,n,0);

			for(var i=0;i<m;i++){
				for(var j=0;j<n;j++){

					A[i][j]=Mfn.opr1('=',Mfn.opr1(':num',e,1,{"i":i+1,"j":j+1})).toStr()
				}
			}
		}else{//（拟）单位矩阵I、数量矩阵
			ij=e.replace(/.*I/,'').split(',');
			var k=e.replace(/I.*/,'')||1
			m=+ij[0]||1;
			n=ij.length<2?m:+ij[1];
			A=Mtrx.build.I(m,n,k);
		}


		return A
	},

	toStr:function(A,typ){//转成文本
		/* typ输出类型
			txt纯文本 \t \n
			mtrx矩阵形式（默认 latex）
			det行列式形式
			soft常用软件输入形式, ;
			v矢量（行向量）
		*/
		
consolelog(A,A[0]);
		var type=typ||(A.typ?A.typ:'mtrx'),txt=type=='txt',sft=type=='soft',a=txt||sft?'':SC+'"inblk '+type+'">',b=txt||sft?'':sc,n=A.length,m=isArr(A[0])?A[0].length:0,sepc=txt?'\t':(sft?',':''),sepr=txt?'\n':(sft?';':''),r=[];
		if(txt||sft){
			for(var i=0;i<n;i++){
				r.push(A[i].join(sepc))
			}
			return r.join(sepr);
		}else if(typ=='v'){//行向量
			return '('+kfrac(A.join(', '),1,'t')+')'
		}else if(typ=='vT'){//列向量
			return '('+kfrac(A.join(', '),1,'t')+')^T'
		}else{
			consolelog(A);
			return kmtrx(A)
		}

	},

	opr1:function(op,A,p){
//矩阵一元运算 p是可选参数
consolelog('矩阵 opr1 ',op,A,p);


		var B=[],m=A.length,n=A[0].length,minmn=Math.min(m,n), ar=arguments, arl=ar.length;

		if(op=='3'){//三元组表示
			for(var i=0;i<m;i++){
				//[1 1 2 2 1;0 2 1 5 -1;2 0 3 -1 3;1 1 0 4 -1]
				var Ai=A[i];
				for(var j=0;j<n;j++){
					var Aij=Ai[j];
					if(''+Aij!='0'){
						B.push([i+1,j+1,Aij]);
					}
				}
			}

		}
		if(op=='bool'){//布尔化为 0-1矩阵
			B=Arrf(function(Ai){return Arrf(function(t){return +!/^0$/.test(t)},Ai)},A);
		}




		if(op=='r0'){//统计各行零数目的数组
			B=Arrf(function(Ai){return plus(Arrf(function(t){return +/^0$/.test(t)},Ai))},A);
		}
		if(op=='c0'){//统计各列零数目的数组
			B=Arrf(function(Ai){return plus(Arrf(function(t){return +/^0$/.test(t)},Ai))},Mtrx.opr1('T',A));
		}
		if(op=='r1'){//返回各行第1个非零数及索引（从0开始）的二维数组	[[非零数1, 2, 3], [索引1, 2, 3]]
			B=Arrf(function(Ai){for(var j=0;j<n;j++){if(!/^0$/.test(Ai[j])){return [Ai[j],j]}} return [0,-1]},A);
		}

		if(op=='c1'){//返回各列第1个非零数及索引（从0开始）的二维数组
			B=Arrf(function(Ai){for(var j=0;j<m;j++){if(!/^0$/.test(Ai[j])){return [Ai[j],j]}} return [0,-1]},Mtrx.opr1('T',A));
		}



		if(op=='T'){//转置
			for(var j=0;j<n;j++){
				B.push([]);
				for(var i=0;i<m;i++){
					B[j].push(A[i][j])
				}
			}
		}

		if(op=='-'){//负矩阵	p=='bool' 布尔矩阵取反：0，1互换
			B=Arrf(function(Ai){return Arrf(p=='bool'?is0:neg,Ai)},A);
		}
		if(op=='H'){//共轭转置
			for(var j=0;j<n;j++){
				B.push([]);
				for(var i=0;i<m;i++){
					B[j].push(A[i][j])
				}
			}
		}

		if(op=='/'){//将小数，百分数，分数化
			
			
			//B=Arrf(function(Ai){return Arrf(n2n,Ai)},A);
			B=Mtrx.opr1('拷',A);
		}


		if(op=='向量模1'){/*A是一维数组（行向量）1表示是1维数组，而不是矩阵
			参数p=2指定返回 自身内积（模平方）而不是模（内积开方）
			返回数
				
			*/
			var s=Arrf(square,A);//ArrfcA([plus,square],A);square不支持数组导致异常？
			//return p==2?plus(s,1):sqrt(plus(s),1)
			return p==2?plus(s):sqrt(plus(s))
		}
		if(op=='单位化1'){/*A是一维数组（行向量）1表示是1维数组，而不是矩阵 
			参数p=2指定除以自身内积（模平方）而不是模
			返回行向量
				
			*/
			var u=plus(Arrf(square,A));
			return Mtrx.opr2('/',[A],p==2?u:sqrt(u))[0]
		}

		if(op=='单位化'){//矩阵各列分别单位化
			
			B=Mtrx.opr1('拷',A);
			for(var j=0;j<n;j++){
				var Aj=Arri(A,j), u=sqrt(plus(Arrf(square,Aj)));
				console.log(Aj,plus(Arrf(square,Aj)),u);
				if(u){
					for(var i=0;i<m;i++){
						B[i][j]=divide([Aj[i],u])//Divide([Aj[i],u]).toStr()//divide([Aj[i],u]);
					}
				}
			}

		}

		
		if(op=='正交化'){/*矩阵各列施密特正交化
			返回 [正交化（或继续单位化）矩阵, 步骤]
			有参数p 需要单位化

		*/	
			B=Mtrx.opr1('拷',A);
			var bu=[],Bjs=[],Bs=[A.toStr(1)],noteB=[];//bu记录各向量的模平方 
			for(var j=0;j<n;j++){
				var Aj=Arri(A,j),abu=[],Bj=[];
				for(var k=0;k<j;k++){
		console.log(k,Bjs[k]);
					abu.push(Mtrx.opr2('内积',Aj,Bjs[k]));
					
				}
		console.log(abu,'Bs=\n',Bs.join('\n'));
				var not0=j && /[^0]/.test(abu.join(''));
				if(not0){
					for(var i=0;i<m;i++){
						for(var k=0;k<j;k++){
							if(!/^0$/.test(abu[k])){
								B[i][j]=minus([B[i][j],times([divide([abu[k],bu[k]]),B[i][k]])])
							}
						}
						Bj.push(B[i][j]);
					}

				console.log('内积组',abu.join('\n'));
					
					console.log(abu, p);
					noteB.push(['第'+(j+1)+'列，'+(j==1?'减去第1':'分别减去前'+(j==2?'两':j))+'列的'+
						frac('(C_{'+(j+1)+'},C_{'+(j!=1?'i':j)+'})',
							'('+['',',',''].join('C_{'+(j!=1?'i':j)+'}')+')','')+(j==1?'='+kfrac(divide([abu[0],bu[0]])):'')+'倍',
						(j==1?'':'其中i='+seqA(1,j).join())
						]);
					
					console.log(Bs);
					
				}else{
					Bj=Arri(B,j);
				}
				var g=gcdFrac(Bj),l=lcmFrac(Bj);
				if(l!=1 || g!=1){//需整数化 或者需要约分
					Bj=[];
					for(var i=0;i<m;i++){
						if(l!=1){
							B[i][j]=times([B[i][j],l]);
						}
						if(g!=1){
							B[i][j]=divide([B[i][j],g]);
						}
						Bj.push(B[i][j]);
					}
					var nt='第'+(j+1)+'列乘以'+kfrac(divide([l,g]));
					if(not0){
						noteB.slice(-1)[0][1]+=(j==1?'':'，')+'然后'+nt;
					}else{
						noteB.push(nt);
					}
				}
				
				if(not0 || l!=1 || g!=1){
					Bs.push(B.toStr(1));
				}
console.log('Bj = ',Bj);
console.log('Bj^2 = ',Arrf(square,Bj));
				
				var u=plus(Arrf(square,Bj));
console.log('u = ',u);
				
				bu.push(u);
				Bjs.push(Bj);
console.log('j=',j,' ','u=',u, 'Bj='+Bj,'gcd=',g,'lcm=',l);
			}
			if(!noteB.length){
				Bs.push(B.toStr(1));
				noteB.push('矩阵列向量已经是两两正交的');
			}
			if(p){
				B=Mtrx.opr1('单位化',B);
				Bs.push(B.toStr(1));
				noteB.push('再单位化得到矩阵');
			}
console.log('Bs = ',Bs);	//bug 22-225-4-2-45	https://zhidao.baidu.com/question/1866983200694120987.html
	
console.log('B = ',B.join(' (----) '));
	
 			B.t='Mtrx';B.toStr=function(p){return Mtrx.toStr(this,p)};
 			
console.log(op,' 结束',p);
 			
			return [B,Eq(Bs,noteB,'','xrightarrow')];
		}
		
		
		if(op=='^'){//幂
			if(ar[3]){
				if(ar[3]=='d'){//对角阵求幂
					for(var i=0;i<m;i++){
						consolelog(A[i][i],p);
						B.push(pow([A[i][i],p]))
					}
					
					return Mtrx.build.D(B)
					
				}
				
				
			}
			if(/^0$/.test(p)){
				return Mtrx.build.I(m)
			}
			if(/^1$/.test(p)){
				return Mtrx.opr1('拷',A);
			}
			if(+p>0){/*这里p是正整数，暂未推广到幂为有理数的情况(涉及到矩阵开方定义)。
			另外，还可定义矩阵的矩阵幂（得到分块矩阵，与Kronecker积思路类似）
	指数的矩阵幂，已经有定义了。是按照指数函数的幂级数展开得到。
	*/
				return Mtrx.opr2.apply(null,['*'].concat(copyA(A,p)))
			}
			if(+p==-1){
				return Mtrx.opr1('逆',A)
			}else if(i<0){
				return Mtrx.opr2('^',Mtrx.opr1('逆',A),-(+p))
			}

		}


		if(op=='.^'){//数幂
			B=Mtrx.opr1('拷',A);
			Arrf(function(x){Arrf(function(y,i){x[i]=Mfn.oprs('^',[y,p],1).toStr()},x)},B);

		}

		if(op=='b^'){//布尔幂
			if(/^0$/.test(p)){//0次幂，定义为单位矩阵
				return Mtrx.build.I(m)
			}
			if(/^1$/.test(p) || Mtrx.is.b1.D(A) || ar[3] && ar[3]=='d'){//对角阵求幂
				return Mtrx.opr1('bool',A);
			}


			if(+p>0){/*这里p是正整数
	*/
				return Mtrx.opr2.apply(null,['b⊙'].concat(copyA(A,p)))
			}

		}

		if(op=='b可达'){/*布尔可达矩阵。I+A+A²+A³ ⋯ 反复求幂及各幂和，直到不变化
			算法1：I+A , (I+A)², (I+A)³ 
				利用 (I+A)^n=I+A+A²+A³ ⋯ （布尔意义上的等号） 
			*/
			var IA=Mtrx.opr2('b∨',A,Mtrx.build.I(m));

			B=Mtrx.opr1('拷',IA);

			for(var i=1;i<100;i++){//迭代超过100次，强行终止
				var C=Mtrx.opr1('拷',B);
				B=Mtrx.opr2('b⊙',B,IA);
				if(Mtrx.is.b2['='](B,C)){
					return [B,i];
				}
			}
			return [B,i]
		}




		if(op=='秩'){//秩 仅对已化成最简型（或非零的行、列向量线性无关的三角阵）的矩阵，非零行(列)计数

			var rm=0,rn=0,r;
			for(var i=0;i<m;i++){
				if(/[^0]/.test(A[i].join(''))){
					rm++;
				}
			}
			for(var i=0;i<n;i++){
				if(/[^0]/.test(Arri(A,i).join(''))){
					rn++;
				}
			}
			r=Math.min(rm,rn);
			return r

		}

		if(op=='极大无关组索引'){//二维数组 [无关组索引数组，其余向量索引数组]	 仅对已化成行阶梯形的矩阵，统计各行第1个非零元的列号（从1开始）
			for(var i=0;i<m;i++){
				var Ai=A[i];
				if(/[^0]/.test(Ai.join(''))){
					for(var j=0;j<n;j++){
						if(/[^0]/.test(Ai[j])){
							B.push(j+1);
							break;
						}
					}
				}
			}
 			B.t='Mtrx';B.toStr=function(p){return Mtrx.toStr(this,p)};
			return [B,Set.opr2('-',seqA(1,n),B)]
		}
		if(op=='part'){/*矩阵分块（返回分块数组） 参数p是十字分割线 写法与Table边框线命令一样
			I2_5J3_7表示用4条线（#）分成9块
			I3J3 表示左上角是3阶方阵
			r2	行平均分两块
			c2	列平均分两块
			r2c2  十字分隔
			D3_4_2		主对角阵分块（仅方阵）
			CD3_4_2		副对角阵分块（仅方阵）
			
			
分4块的方法，可以满足分块乘法：
			r1c1 r1c2    *  c1rx c1ry   =   r1rx  r1ry
			r2c1 r2c2       c2rx c2ry       r2rx  r2ry
			第1个矩阵分块的第i列的分块列数，等于第2个矩阵分块的第i行的分块行数
			
如没有参数p，则默认按平均分块[n/2,n/2;n/2;n/2]（偶数阶），[(n+1)/2,(n-1)/2;(n-1)/2,(n+1)/2]	（奇数阶）
			*/
			var M,N;
			if(/[rc]/.test(p)){
				M=+p.split('c')[0].replace('r','')||1;
				N=+p.replace(/r\d+|c/g,'')||1;
				var mM=m/M,nN=n/N;
				for(var i=0;i<M;i++){
					B.push([]);
					for(var j=0;j<N;j++){
						B[i].push(subMtrx(A,i*mM+1,(i+1)*mM,j*nN+1,(j+1)*nN));
					}
				}
			}
			if(/[CD]/.test(p)){
				var nA=p.replace(/[CD]/g,'').split('_'),nAs=[0],nAsC=[m],isC=/C/.test(p);
				M=nA.length;
				for(var i=0;i<M;i++){
					nAs.push(+nA[i]+nAs[i]);
					nAsC.unshift(nAsC[i]-(+nA[i]));
					B.push([]);
					for(var j=0;j<M;j++){
						B[i].push(subMtrx(A,1+nAs[i],nAs[i+1],1+(isC?nAsC[j]:nAs[j]),isC?nAsC[j+1]:nAs[j+1]));
					}
				}
			}
			if(/[IJ]/.test(p)){
				var mA=/I/.test(p)?p.replace(/J.+|I/g,'').split('_'):[n],nA=/J/.test(p)?p.replace(/.+J/g,'').split('_'):[n];
				M=mA.length;
				N=nA.length;
				mA.unshift(0);
				nA.unshift(0);
				for(var i=0;i<M;i++){
					B.push([]);
					for(var j=0;j<M;j++){
						B[i].push(subMtrx(A,1+mA[i],mA[i+1],1+nA[j],nA[j+1]));
					}
				}
			}

		}
		if(op=='parts'){//显示分块矩阵 参数p是十字分割线 写法与Table边框线命令一样

			return kmtrx(A,'',p) 
		}

		if(op=='part0'){/*
			
			参数p是十字分割线 写法与Table边框线命令一样
			
			如无参数，分析零分块（四个角落至少有1个零分块，与零分块上下左右相邻的块需为方阵）的位置，进行自动分块2x2分块
			
			返回4个子分块矩阵
			
			0s,t	ss
			tt		0t,s

			s,s		0s,t
			0t,s	tt

			从4个角开始，沿对角线方向，找最大的连续零元素分块
			*/
			return kmtrx(A,'',p)
		}

		if(op=='eval'){//化简计算结果

			B=Arrf(function(x){return Arrf(function(y){return Mfn.opr1('=',y,1).toStr()},x)},A);
		}
		if(op=='pt'){/*初等变换（结果不化简）
			参数p 变换命令
			
			返回 	[形式矩阵，系数, 步骤]
			
			*/
			B.t='';
			B=[Mtrx.opr1('拷',A),1];
/*
			基本：
				i3+=i5×t	×号必需（作为分隔符），t是倍数（可以是表达式，无需括号）
				i3-=i5×t
				
				i3×=t
				i3*=t
				i3÷=t
				i3/=t
				
				i3≈i6	i3~~i6
				
				
			T 转置
				
			复合：
				
				i1~i5+=i8×t 多对一一
				i1,i5+=i8×t
				i1,i5+=i8×t,s 多对一多 （分别加）
				
				i1,i5+=i8×?（省略相应的倍数，首个非零项化为0）
		  ? 问号后加L或U （化下（上）三角模式，只在主对角线右（左）侧，才乘以倍数化零）
				
				
				j3-=i8（省略相应的倍数，其余行，相应列化为0）
				j3+=i8 计算步骤显示有误，bug尚未修复！
				
				i1,i3~i5+=i8×t,s,u,v
				
				i1+=i2~i5×t 一对多一 （连加）
				i1+=i2~i5 一对多一 （连加，t=1时的简写）
				i1+=i2~i3×t,s 一对多多 （分别加）
				
				i1,i6+=i2~i4×t 多对多一 （连加）
				i1,i8,i9+=i2~i3×t,s 多对多多 （分别加）
				
				i1~i5*=t
				i1~i5*=t,s,u,v,w
				
				i1~i5≈i2~i6 冒泡排序
				
			高级缩写指令(只在PTs中支持，需要大量的判断)：
					
					i[SBb]/= 各行单位化（第1个非零元素化成1）
					i[SBb]÷=


					S仅对方阵部分
					B仅对方阵之外的部分
					b仅对方阵之外再偏移2行或2列的部分
					
					i[SBb]*= 各行整数化（元素去分母，凑成整数）
					i[SBb]×=
					
					
				不考虑需交换行列（退化）情况下的一些变换：
				
					[ij]E= 化成[行列]阶梯型 Echelon

					[ij]L= 化成[行列]下三角
					
					[ij]U= 化成[行列]上三角



					[ij]S= 化成[行列]最简形

					[ij]D= 化成对角阵

					[ij]I= 化成单位阵


			变量赋值：
				ik+=i(k-1)×3 k=3,5
				ik+=i(k-2)×3 k=3~4
				ik+=i(k-2)×1,2 k=3~4
				ik+=i(k-2),i(k-1)×1,2 k=3~4
				ik+=i1 k=2~4
				ik*=10 k=2~4
				ik≈i(k-1) k=2,4,6
				
			多次初等变换：
				i2+=i1×t;i3+=i2×t;i4+=i3×t

行列式计算：
			d 主对角线相乘
			d- 副对角线相乘
			
			= 计算最终结果
			
			0i1:i4 成比例
			0i1=0 都为0
			0i1=i4 相等
			
			
			a apart拆开
			L Laplace展开
			S 对角线法则Sarrus
			D 定义展开
			P 分块矩阵Part
		
			扩充为满秩矩阵
			fs[hi] 求基础解系fundamental system  齐次homogeneous 非齐次inhomogeneous/nonhomogeneous
					A或A|b → 最简行（秩为r）
					增行（补充主对角线为1，其余列为0的行，共n-r行），增列（增行，相应增单位列向量，共n-r列），使得满秩


*/
consolelog('pt开始 p=',p);
			var ps=p.split(';');
			for(var j=0;j<ps.length;j++){
				var psj=ps[j],
					p0=psj[0],
					isi=p0=='i',
					isk=/^ik/.test(psj),
					isSwap=/≈/.test(psj),
					isd=/^d/.test(psj),
					isL=/^L/.test(psj),
					isS=/^S/.test(psj),//对角线法则
					isD=/^D/.test(psj),
					ise=/^=/.test(psj),
					isT=/^T/.test(psj),
					isP=/^P/.test(psj),
					isfs=/^fs/.test(psj), isfsh=/^fsh/.test(psj), isfsi=/^fsi/.test(psj);
				
				B[1]=1;
consolelog(j,'psj = ',psj,A);
				if(isd){//对角线相乘
					var isd_=/^d-/.test(psj);//副对角线
					B[0]=[[times(Mtrx.opr1('取',A,(isd_?'-':'')+'D'))]];
					B[2]=times(Mtrx.opr1('取',A,(isd_?'-':'')+'D'),1);
consolelog(B[0]);
					return B
				}
				if(/^0/.test(psj)){
					B[0]=[[0]];
					return B
				}

				if(isL){//Laplace展开
					B=Mtrx.opr1('detLaplace',A,psj.substr(1))[0][0];
					return B
				}
				if(isS){//对角线法则展开
					var Sar=Mtrx.opr1('detSar',A);
					consolelog('对角线法则展开',Sar[0]);
					B[0]=[[Sar[0]]];
					B[2]=Sar[1];
					return B
				}
				if(isD){//定义展开
					var Def=Mtrx.opr1('detDef',A);
					B[0]=[[Def[0]]];
					B[2]=Def[1];
					return B
				}
				if(isP){//分块
					var Par=Mtrx.opr1('detPart',A);
					B[0]=[[Par[0]]];
					B[2]=Par[1];
					return B
				}
				if(isT){//转置
					B[0]=Mtrx.opr1('T',A);
					return B
				}
				if(isfs){//基础解系扩充（也可能减去零行）行列 左边是单位阵 右下角是n-r-(+isfsi)阶单位阵（也可能不是单位阵，当增加的行只在下面增加，而不是插入时，才会是单位阵）
						//非齐次 返回n-1行 n-1 + 1 + (n-1-r)列 
						//齐次 返回n行 n+(n-r)列	
					var r=Mtrx.opr1('秩',A),IA=[],mj=n;
					if(isfsi && r==n-1){//非齐次	只有唯一解
				//		consolelog(A.join('\n'))
						//return subMtrx(A,1,r,1,n)
					//	return Mtrx.opr1('拷',A)
						B[0]=Mtrx.opr1('拷',A);
						return B;
					}


					B[0]=Mtrx.build.I(n-(+isfsi), 2*n-r-(+isfsi));
					for(var i=0;i<m;i++){
						var Ai=A[i];
						if(!/^0+$/.test(Ai.join(''))){
							for(var j=0;j<n;j++){
								if(!/^0$/.test(Ai[j])){
									for(var k=j+1;k<n;k++){
										B[0][j][k]=Ai[k];
									}
									IA.push(j);//记录原来非零元的行号(从0开始)
									break
								}
							}
						}
					}
					for(var i=0;i<n-(+isfsi);i++){
						if(IA.indexOf(i)<0){
							B[0][i][mj]=1;
							mj++;
						}
					}
				consolelog(B.join('\n'))
					return B
				}
consolelog('此时psj = ',psj);
				var pA=psj.split(/(.=|≈)/g),ops=pA[1][0],
					kA=isk?seqsA(pA[2].split('k=')[1]):'',isSelf=!/[\+\-≈]/.test(ops),
					pA0=isk?kA:seqsA(pA[0].replace(/[ij]/g,'')),pA1A=pA[2].replace(/ .+|[LU]/,'').split('×'),	//被改的行或列，索引
					pA1=isSelf?'':(isk?pA1A[0].replace(/[ij]/g,''):seqsA(pA1A[0].replace(/[ij]/g,''))),		//参与的行或列，索引
					pA2=isSelf?seqsA(pA1A[0]):seqsA(pA1A[1]||'1');											//倍数
				
	consolelog(pA1,pA1A[0]);
consolelog('pA0 ',pA0.length);
consolelog('pA1 ',pA1.length);
consolelog('pA2 ',pA2.length);
consolelog(pA,'pA0 ',pA0)
consolelog('pA2 =[ ',pA2.join(''))
				B[1]=isSwap?1-2*(pA0.length%2):1;


				for(var pi=0;pi<pA0.length;pi++){
consolelog('pi=',pi+' / '+pA0.length);

					var pa0=pA0[pi]-1, pa1=pA1, pi2=pA2.length<pi+1?pA2[0]:pA2[pi];
consolelog('pi2=',pi2,'isk = ',isk,pA1,pA1);
					if(isk){
						pa1=Arrf(eval,'['+pA1+']');
					}
					
consolelog('pa1=',pa1);
consolelog('ops=',ops);
consolelog('isSelf=',isSelf);
					if(isSelf){
consolelog('自乘 pi2=',pi2);
						
						var isTime=/[×\*]/.test(ops);
						for(var i=0;i<(isi?n:m);i++){
							var s=isi?pa0:i,t=isi?i:pa0;

							if(!(/[×\*\/÷]/.test(ops) && /^0$/.test(B[0][s][t]))){
								if(!pi2){
									pi2=B[0][s][t];
consolelog('省略了 pi2',pi2);
								}

								B[0][s][t]=(isTime?times:divide)([B[0][s][t],pi2])
							}
						}


						B[1]=(isTime?divide:times)([B[1],pi2]);
					}else{
						for(var k=0;k<pa1.length;k++){

							var pi1=+(pa1.length<pi+1?pa1[k]:pa1[k])-1;
consolelog('pi1=',pi1);

								
if(pA0.length==1 && pA2.length>1){
consolelog('pi2=','pA2[k]',pA2[k]);
	pi2=pA2[k];
}
		

							for(var i=0;i<(isi?n:m);i++){
consolelog('i=',i);
								var s=isi?pa0:i,t=isi?i:pa0, u=isi?pi1:i,v=isi?i:pi1;
consolelog('s t u v',s,t,u,v,B[0][u]);

								if(isSwap){
									var st=B[0][s][t],uv=B[0][u][v];
consolelog(uv);
									B[0][s][t]=uv;
									B[0][u][v]=st;
								}else{
									if(!/^0$/.test(B[0][u][v])){
consolelog('ops = ',ops,'B0st = ',B[0][s][t],'B[0][u][v] = ',B[0][u][v], 'pi2 = ',pi2);
										B[0][s][t]=Mfn.oprs(ops,[B[0][s][t],times([B[0][u][v],pi2])],1).toStr()

consolelog('B[0][s][t] = ',B[0][s][t]);
									}

								}
							}
						}
					}
				}
				

			}
			return B
		}
		if(op=='PT'){/*初等变换（计算结果）
			
			参数p 变换命令
			
			返回	[结果矩阵，系数]
			
			
			*/
			var R=[];
			B=Mtrx.opr1('pt',A,p);//[矩阵(不化简)，系数，过程]

			R.push(Mtrx.opr1('eval',B[0]),times([ar[3]||1, B[1]]));
			if(/^[SD]$/.test(p)){
				R.push(B[2])//B[0][0][0]
			}
			return R;
			
		}
		if(/PTs/.test(op)){/*初等变换（步骤）
			
			参数p 	变换命令
			第4个参数ar[3] 	指定【不】获取步骤
		
			返回	[[结果矩阵，系数], 过程html, 变换命令数组]
			
			如果是detPTs求行列式，
			
			返回	[结果, 过程html, 变换命令数组]
			
				变换命令数组，用来得到相应的若干个初等矩阵
			操作符op：

				detPTs 行列式
				invPTs 求逆（初等行变换）			A|E → I|A⁻¹
				invlPTs	A左除B	A\B		A|B → I|A⁻¹B
				invrPTs	A右除B	B/A		A → I
										B    BA⁻¹
				

				congPTs 合同变换	congruent	行列变换交替进行：PAPT | PE    ->   B | P	暂不实现
												列行变换交替进行：PTAP ; EP   ->  B ; P			(需手动输入命令，先列后行！，暂不实现自动）
				
				normPTs 化标准型
				rankPTs 求秩
				
				fs[hi]PTs 求基础解系fundamental system  齐次homogeneous 非齐次inhomogeneous/nonhomogeneous
						A或A|b → 最简行（秩为r）
						增行（补充主对角线为1，其余列为0的行，共n-r行），增列（增行，相应增单位列向量，共n-r列），使得满秩
						
						
						
						继续化最简行
						
						基础解系：
							齐次：所增列
							非齐次：特解（原最后1列）+ 齐次基础解系（所增列）
				
			*/


			var psA=[], isdet=/det/.test(op), isinv=/inv/.test(op),isinvl=/invl/.test(op),isinvr=/invr/.test(op),
				iscong=/cong/.test(op), isnorm=/norm/.test(op),isrank=/rank/.test(op),
				isBc=isinv && !isinvr && !isinvl,//列增广（横向）矩阵进行初等变换
				isBr=iscong,//行增广（纵向）矩阵进行初等变换		
				isfs=/fs/.test(op), //基础解系
				isfsi=/fsi/.test(op), //非齐次
				
				isTc=isBr||isinvr, //是否有列变换
				
				coe=[], Coe=1, Bini=Mtrx.opr1('/',A),//化成分数

				TB=isinv||iscong||isfsi?(isfsi?'J'+(n-1):(isBc?'J'+n:(iscong?'I'+m:(isinvl?'J'+m:'I'+n+'  .')))):'';	//'j'+m+'r':'i'+n+'b'
				consolelog(TB);
				
			//var ps=(p||(isBr?'jL':'iU')+'='+(isdet?';d;=':'')).split(';');
			var ps=(p||'iU='+(isdet?';d;=':'')).split(';');
			
			if(isBc){
				Bini=Mtrx.build.B([[Bini,Mtrx.build.I(m)]])
			}
			if(isBr){
				Bini=Mtrx.build.B([[Bini],[Mtrx.build.I(n)]])
			}
			var B=[[Bini,1], ar[3]?'':(isdet?'|A| = '+kdet(A):(isBc||isBr?'增广矩阵~':'')+kmtrx(isBc||isBr?Bini:A, '',isinv||iscong||isfsi?TB:''))],
				As=[B[1]],noteA=[];
			consolelog(isBc,isBr,B[1]);

			//扩行 Mtrx.opr1('拷',A).concat(Mtrx.build.I(m))
consolelog('变换：',ps,'参数p',p);
			for(var j=0;j<ps.length;j++){
consolelog('变换 j ',j,'/',ps.length,' ps = ',ps.join(' ；'));
if(j>30){consolelog('初等变换超过30次循环，强制break');break}//防止死循环

/*
	8-2-3-28-3-3-33

8-2-3-28-3-3-33&i3+=i1×3/8

8-2-3-28-3-3-33&i3+=i1×3/8;i2+=i1×1/4


bug 列变换，有些行没有跟着处理




矩阵对角化求幂 1243&n



对角化求幂 AP=PΛ
-1112
diag(-1,5)
n

*/

				var psj=ps[j],B00=B[0][0],m=B00.length,n=B00[0].length,nextj='',end='',pts=0;

consolelog(j,psj,'行m 列n',m,n);
				var p0=psj[0],
					isi=p0=='i',//行变换
					isU=/iU=/.test(psj),isL=/jL=/.test(psj),isUL=isU||isL,//三角阵	不一定是行（列）阶梯
					isD=/[ij]D=/.test(psj),//对角阵
					
					isE=/[ij]E=/.test(psj),//阶梯
					isS=/[ij]S=/.test(psj),//最简形
					isI=/[ij]I=/.test(psj);//单位阵（标准型：左上角单位阵，其余为0）
					

				var viA=Mtrx.opr1('cr'[+isi]+1,B00), viv=Arri(viA,0), vii=Arri(viA,1), ui=[],uv=[], BmaybeE=1, headIndexUnique=1;
			/*	consolelog('viv = \n',viv);
				consolelog('viA = \n',viA);
				
			*/
				for(var i=0;i<vii.length;i++){
				consolelog(i,vii[i]);
					if(vii[i]>-1){
					consolelog(i,vii[i]);
						if(headIndexUnique && ui.indexOf(vii[i])>-1){
							headIndexUnique=0
						}
						ui.push(vii[i]);
						uv.push(viv[i]);
					}
				consolelog(BmaybeE);
					if(BmaybeE && i && (vii[i-1]>vii[i] && vii[i]>-1 || vii[i-1]<vii[i] && vii[i-1]<0)){
						BmaybeE=0
					}
			//		consolelog(vii,i,(vii[i-1]>vii[i] && vii[i]>-1 || vii[i-1]<vii[i] && vii[i-1]<0));
				}

				var BisU=Mtrx.is.b1.U(B00), BisL=Mtrx.is.b1.L(B00), BisD=BisU && BisL,
					BisE=BmaybeE && headIndexUnique, BisS=BisE && Mtrx.is.b1['列行'[+isi]+'最简'](B00), BisI=BisD && BisS && Mtrx.is.b1['行列'[+isi]+'最简'](B00);//与Mtrx.is.b1.I(B00)是准单位阵不同

consolelog(vii.join());
				if(isU && BisU || isL && BisL || isD && BisD || isE && BisE || isS && BisS || isI && BisI){
					continue;
				}

consolelog(B00, BisE);
consolelog('B00矩阵 = ');
consolelog(B00.join('\n'));
BisD && consolelog('是对角阵吗？', BisD);
BisE && consolelog('是'+'列行'[+isi]+'阶梯型吗？', BisE, BisE?'':['索引集有逆序吗？',BmaybeE,'索引集有重复吗？',headIndexUnique,'索引集: ',viA.join('\n')].join('\n'));
BisS && consolelog('是'+'列行'[+isi]+'最简形吗？', BisS);
BisI && consolelog('是标准型形吗？', BisI);

				if(isU || isD && !BisU){
				consolelog('化上三角');
					for(var i=0;i<m-1;i++){
						var v1=Arri(B00,i).slice(i+1);
						if(/[^0]/.test(v1.join(''))){
							var Bii=''+B00[i][i],kvA=[],kA=[];
							if(Bii=='0' || Bii!='1'){//vii[i]>i 从剩下的非零元，找1，或非零数
								
								var psi=[];
								for(var k=i+1;k<m;k++){
									var vk=''+viv[k];
									/*
										consolelog('k = \n',k);
										consolelog('viv = \n',viv);
										consolelog('vk = \n',vk);
										consolelog('vii[k] = \n',vii[k]);
										consolelog('i = \n',i);
										*/
									if(vii[k]==i){
										if(vk=='1'){
											psi.push('i'+(i+1)+'~~'+'i'+(k+1));
										consolelog(ps);
											pts++;
											nextj=1;
											break;
										}else{
											kvA.push(vk);
											kA.push(k);
										}
									}
								}

								if(nextj){
									ps.splice.apply(ps,[j+1,0].concat(psi));
									break
								}
								
								if(Bii=='0'){
									
									consolelog('kvA = ',kvA);
									consolelog('kA = ',kA);
									
									ps.splice(j+1,0,'i'+(i+1)+'~~'+'i'+(kA[kvA.indexOf(''+fmin(kvA))]+1));
									
									consolelog(ps);
									pts++;
									nextj=1;
									break;
								}
							}
							if(Bii=='1'){
								
								var psi=[];
								for(var k=i+1;k<m;k++){
									if(vii[k]==i){
										psi.push('i'+(k+1)+'-=i'+(i+1)+'×'+viv[k]);
										pts++;
									}
								}

								ps.splice.apply(ps,[j+1,0].concat(psi));

								
								nextj=1;
								break;
							}
						consolelog('kvA = \n',kvA.join('\n'));
						
						
							var psi=[];
							for(var k=0;k<kA.length;k++){
								
								psi.push('i'+(kA[k]+1)+'-=i'+(i+1)+'×'+divide([kvA[k],Bii]));
								pts++;
							}
							
							ps.splice.apply(ps,[j+1,0].concat(psi));
							
							nextj=1;
							break;
						}
					}
					if(nextj){
						ps.splice(j+1+pts,0,psj);
						continue
					}
				}


				if(isL || isD && !BisL){
				consolelog('化下三角');
					for(var i=0;i<n-1;i++){
						var v1=B00[i].slice(i+1);
						if(/[^0]/.test(v1.join(''))){
							var Bii=''+B00[i][i],kvA=[],kA=[];
							if(Bii=='0' || Bii!='1'){//vii[i]>i 从剩下的非零元，找1，或非零数
								
								var psi=[];
								for(var k=i+1;k<n;k++){
									var vk=''+viv[k];
									if(vii[k]==i){
										if(vk=='1'){
											psi.push('j'+(i+1)+'~~'+'j'+(k+1));
											pts++;
											nextj=1;
											break;
										}else{
											kvA.push(vk);
											kA.push(k);
										}
									}
								}
								
								if(nextj){
									ps.splice.apply(ps,[j+1,0].concat(psi));
									break
								}
								
								if(Bii=='0'){
									ps.splice(j+1,0,'j'+(i+1)+'~~'+'j'+(kA[kvA.indexOf(''+fmin(kvA))]+1));
									pts++;
									nextj=1;
									break;
								}
							}
							if(Bii=='1'){
								
								var psi=[];
								for(var k=i+1;k<n;k++){
									if(vii[k]==i){

										psi.push('j'+(k+1)+'-=j'+(i+1)+'×'+viv[k]);
										pts++;
									}
								}
								ps.splice.apply(ps,[j+1,0].concat(psi));
								
								nextj=1;
								break;
							}
							
							var psi=[];
							for(var k=0;k<kA.length;k++){

								psi.push('j'+(kA[k]+1)+'-=j'+(i+1)+'×'+divide([kvA[k],Bii]));
								pts++;
							}
							ps.splice.apply(ps,[j+1,0].concat(psi));
							
							nextj=1;
							break;
						}
					}
					if(nextj){
						ps.splice(j+1+pts,0,psj);
						continue
					}
				}




				if(isE || (isS||isI) && !BisE){
				consolelog('化阶梯');
					for(var i=0,l=(isi?m:n);i<l;i++){
						if(vii[i]<0){vii[i]=(isi?n:m)}
						var i1=vii.slice(i+1).filter(function(t){return t>-1}),	mi1=fmin(i1);
//[0 0 -1 -1;1 4 -1 0;-1 -4 2 -1]
		//				consolelog('i = '+i,' vii=',vii.slice(i+1));
						if(isArr(mi1)){//下面行全是0，这一条件不需要判断？
							consolelog('下面行全是0？');
							//nextj=1;
						//	end=1;
							break;
						}
		//				consolelog(mi1, vii[i]);
						if(mi1<=vii[i]){
							var Bii=''+B00[isi?i:mi1][isi?mi1:i],kvA=[],kA=[];
							if(Bii=='0' || Bii!='1'){//vii[i]>i 从剩下的非零元，找1，或非零数
								
								var psi=[];
								for(var k=i+1;k<l;k++){
									if(vii[k]==mi1){
										if(''+viv[k]=='1'){
											ps.splice(j+1,0,'ji'[+isi]+(i+1)+'~~'+'ji'[+isi]+(k+1));
											pts++;
											nextj=1;
											break;
										}else{
											kvA.push(viv[k]);
											kA.push(k);
										}
									}
								}
								if(nextj){
									ps.splice.apply(ps,[j+1,0].concat(psi));
								
									break
								}
								if(Bii=='0'){
									
									
									ps.splice(j+1,0,'ji'[+isi]+(i+1)+'~~'+'ji'[+isi]+(kA[kvA.indexOf(''+fmin(kvA))]+1));
									pts++;
									nextj=1;
									break;
								}
							}
							if(Bii=='1'){
								
								var psi=[];
								for(var k=i+1;k<l;k++){
									if(vii[k]==mi1){
										psi.push('ji'[+isi]+(k+1)+'-='+'ji'[+isi]+(i+1)+'×'+viv[k]);
										pts++;
									}
								}
								ps.splice.apply(ps,[j+1,0].concat(psi));
								
								nextj=1;
								break;
							}
							
							var psi=[];
							for(var k=0;k<kA.length;k++){

								psi.push('ji'[+isi]+(kA[k]+1)+'-='+'ji'[+isi]+(i+1)+'×'+divide([kvA[k],Bii]));
								pts++;
							}
							ps.splice.apply(ps,[j+1,0].concat(psi));

							nextj=1;
							break;
						}
					}
					if(nextj){
						ps.splice(j+1+pts,0,psj);
						continue
					}
				}



				if(isS && BisE || isI && !BisS){
				consolelog('化最简',ps.join(' ; '));
					var psi=[];
					for(var i=0,l=(isi?m:n);i<l;i++){
						if(!/^[01]$/.test(viv[i])){
							psi.push('ji'[+isi]+(i+1)+'/='+viv[i]);
							pts++;
							nextj=1;
						}
					}
					if(nextj){
						ps.splice.apply(ps,[j+1,0].concat(psi));
						ps.splice(j+1+pts,0,psj);
						continue
					}
					
					
					var psi=[];
					for(var i=0,l=(isi?m:n);i<l;i++){
						if(vii[i]<0){continue}
						var Aj=isi?Arri(B00,vii[i]):[].concat(B00[vii[i]]);
						Aj.splice(i,1);
						if(/[^0]/.test(Aj.join(''))){
							psi.push('ij'[+isi]+(vii[i]+1)+'+='+'ji'[+isi]+(i+1));
							pts++;
							nextj=1;
						}
					}
					if(nextj){
						ps.splice.apply(ps,[j+1,0].concat(psi));
						ps.splice(j+1+pts,0,psj);
						continue
					}
				}

				if(isI){
consolelog('后续的变换有：',ps.slice(j).join(';'));
//				consolelog('下面的变换是 化标准型（准单位阵）');

						ps.splice(j+1,0,psj.replace(/[ij]/,'ij'[+isi]));
						continue

				}





consolelog(ps.join(';'));
				if(!end){
consolelog('开始变换',ps.slice(j).join(';'));
					var psj=ps[j].replace(/~~/g,'≈')

					.replace(/j\d+.=i\d+[LU]?/g,function(t){//将j列（除i行外），都化为0
						var tA=t.replace(/[ijLU]/g,'').split(/.=/),ts=[],ks=[],tj=+tA[0]-1,ti=+tA[1]-1,C=B[0][0],is_=/-=/.test(t),isL=/L/.test(t),isU=/U/.test(t);
						for(var i=(isU?tj+1:0);i<(isL?tj:m);i++){
							if(i!=ti && !/^0$/.test(C[i][tj])){
								ts.push('i'+(i+1));
								
								consolelog(ti,tj,C[ti][tj],C);
								
								ks.push(Mfn.oprs(['*','/'],[(+is_)*2-1,C[i][tj],C[ti][tj]],1).toStr());
	consolelog(ks.join(' ; '));
							}
						}
						
						return ts.join()+'+-'[+is_]+'=i'+(ti+1)+'×'+(ks.join()||0)

					}).replace(/i\d+.=j\d+[LU]?/g,function(t){//将i行（除j列外），都化为0
						var tA=t.replace(/[ij]/g,'').split(/.=/),ts=[],ks=[],ti=+tA[0]-1,tj=+tA[1]-1,C=B[0][0],is_=/-=/.test(t),isL=/L/.test(t),isU=/U/.test(t);
						for(var i=(isL?ti+1:0);i<(isU?ti:n);i++){
							if(i!=tj && !/^0$/.test(C[ti][i])){
								ts.push('j'+(i+1));
								
								consolelog(ti,tj,C[ti][tj],C);
								
								ks.push(Mfn.oprs(['*','/'],[(+is_)*2-1,C[ti][i],C[ti][tj]],1).toStr());
	consolelog(ks.join(' ; '));
							}
						}
						return ts.join()+'+-'[+is_]+'=j'+(tj+1)+'×'+(ks.join()||0)

					}).replace(/[ij][SBb]?[\*×\/÷]=/g,function(t){//各行（列）单位化或整数化
						/*
							S指定只针对方阵部分
							B指定只针对方阵之外的部分
							b指定只针对方阵之外再偏移2行或2列的部分（主要用于非齐次线性方程组的基础解系）
								
							/÷ 各行（列）单位化（首个非零元素，化为1）
							*× 各行（列）整数化（元素都化为整数）	同时针对特解（方阵后一列）化为整数（只考虑基础解系中只有1个解向量的情况）
						*/
						consolelog(t);
						var isi=/^i/.test(t), isS=/S/.test(t), isB=/B/.test(t), isb=/b/.test(t), istime=/[\*×]/.test(t),C=B[0][0],ks=[],ts=[],tejie='',
							m=B[0][0].length,n=B[0][0][0].length, minmn=Math.min(m,n);
						
consolelog('新 m,n',m,n);
						
						if(istime){
	//						consolelog(t,isb);
							if(isi){

								for(var i=(isB||isb?minmn+(+isb):0);i<(isS?minmn:m);i++){
									var Cij=lcmFrac(C[i]);
									if(Cij==1){
										continue;
									}
									ts.push('i'+(i+1));
									ks.push(Cij);
								}
							}else{

var newj=0;
								for(var i=(isB||isb?minmn+(+isb):0);i<(isS?minmn:n);i++){
consolelog(i,n,'minmn=',minmn,m,n);
									var Cij=lcmFrac(Arri(C,i));
	consolelog(Arri(C,i),'Cij = ',Cij,'\n',A.join('\n'));
									if(Cij==1){
										continue;
									}
									ts.push('j'+(i+1));
									ks.push(Cij);
									newj++;
								}
								
consolelog(newj,'newj = ',newj,'\n','isb = ',isb,' m+2 = ', m+2,'n =',n);
							//	if(!newj && isb && m+2<=n){
								if(isb && m+2<=n){
								//	var jm1=Arri(C,minmn+1);
									var jm1=Arri(C,m);
									consolelog('jm1 ',jm1);
									if(/\//.test(jm1)){
										Cij=lcmFrac(jm1);
										consolelog('Cij ',Cij);
										if(Cij>1){
											//tejie=';j'+(m+1)+'+=j'+n+'×1/'+Cij
											
											var jk=ts[ts.length-1]||'j'+n,J=+jk.substr(1),K=m-(n-J)-1;
											
											//tejie=';j'+(m+1)+(Arri(C,J-1).slice(0,K-1).join(' ')==jm1.slice(0,K-1).join(' ')?'-':'+')+'='+jk+'×1/'+Cij
											var CJ1=Arri(C,J-1).slice(0,K-1),JM1=jm1.slice(0,K-1),a='1/'+Cij;
											for(var x=0;x<JM1.length;x++){
												if(''+JM1[x]!='0' && ''+CJ1[x]!='0'){
													a=divide([JM1[x],CJ1[x],Cij,-1]);
													break;
												}
											}
											
											tejie=';j'+(m+1)+'+='+jk+'×'+a;
										}
									}
								}
								
							}
						}else{
							if(isi){
							consolelog(m,n);
								for(var i=(isB||isb?minmn+(+isb):0);i<(isS?minmn:m);i++){
									for(var k=0;k<n;k++){
										var Cij=C[i][k];
										if(/^1$/.test(Cij)){
											break
										}
										if(!/^[01]$/.test(Cij)){
										consolelog(i,k,Cij);
											ts.push('i'+(i+1));

											ks.push(Cij);
											break;
										}
									}
								}
							}else{
								for(var i=(isB||isb?minmn+(+isb):0);i<(isS?minmn:n);i++){
									for(var k=0;k<m;k++){
										var Cij=C[k][i];
										if(/^1$/.test(Cij)){
											break
										}
										if(!/^[01]$/.test(Cij)){
						consolelog(Cij);
											ts.push('j'+(i+1));

											ks.push(Cij);
											break;
										}
									}
								}
							}
						}

	consolelog(ts.join()+'/*'[+istime]+'='+(ks.join()||0));
						return ts.join()+'/*'[+istime]+'='+(ks.join()||0)+tejie

					}).replace(/.+\?[LU]?/g,function(t){//自动计算倍数，将其余指定行列，化为0
consolelog('？');
						var isi=/^i/.test(t), tA=t.replace(/[ijLU]/g,'').split(/.=/),is_=/-=/.test(t),isL=/L/.test(t),isU=/U/.test(t);
							ks=[],ts=seqsA(tA[0]),ij=+tA[1].replace(/\D/g,'')-1,C=B[0][0];
						for(var i=0;i<ts.length;i++){
							if(isi){
								for(var k=(isL?ij+1:0);k<(isU?ij+1:n);k++){
									var Cij=C[+ts[i]-1][k];
									if(!/^0$/.test(Cij)){
										var kk='i'+ts[i]+'+-'[+is_]+'=i'+(ij+1)+'×'+Mfn.oprs(['*','/'],[(+is_)*2-1,Cij,C[ij][k]],1).toStr();
										ks.push(kk);
										break;
									}
								}
							}else{
								for(var k=(isU?ij+1:0);k<(isL?ij+1:m);k++){
									var Cij=C[k][+ts[i]-1];
									if(!/^0$/.test(Cij)){
										var kk='j'+ts[i]+'+-'[+is_]+'=j'+(ij+1)+'×'+Mfn.oprs(['*','/'],[(+is_)*2-1,Cij,C[k][ij]],1).toStr();
										ks.push(kk);
										break;
									}
								}
							}
						}
						return ks.join(';')
					});
	consolelog(B[0],psj);
consolelog('\n矩阵是\n',B[0][0].join('\n'));
					if(/[\+\-]=.+×-/.test(psj)){
	consolelog('原来',psj);
						psj=psj.split('=')[0].replace(/[\+\-]$/,opinv)+'='+
							psj.split('=')[1].replace(/[×,]./g,function(t){return t[0]+opneg(t[1])});
						
	consolelog('后来',psj);
						
					}
					psj=psj.replace(/×1(,1)*$/,'');


	consolelog('接下来变换：',psj);
					if(/[×\*\/÷\+\-=]0/.test(psj)){//无需变换
						continue
					}
					if(!psj){//相应行、列变换
						psj=psA[j-1].replace(/i/g,'行').replace(/j/g,'i').replace(/行/g,'j');
					}

					psA.push(psj);



					if(/^=/.test(psj)){
					consolelog(B[0]);

						B[0]=times([B[0][0][0][0],B[0][1]]);
consolelog(psj);
						if(!ar[3]){
							if(B[0]!=As.slice(-1)[0]){
								As.push(B[0]);
								noteA.push('最终结果');
							}

						}
						break;
					}
					consolelog(psj);
					if(/[ij][ULDESI]/.test(psj)){
	consolelog('继续 ',psj);
						continue;
					}

					B[0]=Mtrx.opr1('PT',B[0][0],psj,B[0][1]||1);//[结果矩阵，系数]
	consolelog(psj,B[0]);

				}

				if(!ar[3]){//需要步骤（默认不填此参数）

					var B00=B[0][0],B01=B[0][1];

					coe.push(B01);


					Coe=B01;

					var isSD=/^[SD]$/.test(psj), isfshi=/^fs/.test(psj);
					if(isfshi){
						TB='J'+(/^fsi/.test(psj)?(n-1)+(B00[0].length>n?'_'+n:''):n);
					}

consolelog('B00 =',B00);
					var Asi=isdet?(B00.length>1?times([Coe,'x']).replace('x',kdet(B00)):times([Coe,B00[0][0]])):

						kmtrx(B00,'',isinv||iscong||TB?TB:'');
					if(Asi!=As.slice(-1)[0]){
						As.push(Asi);


					consolelog(psj);
						noteA.push(kfrac(Mtrx.note.PT(psj),1,'t'));
					}

					consolelog(psj);
				}
			}//j循环结束





			if(isSD){
				noteA.push('化简')
			}

			if(isdet){
				As[As.length-1]=kfrac(As[As.length-1],1);
			}

			if(isrank){
				As.push('秩是'+kfrac(Mtrx.opr1('秩',B00),1));
				noteA.push('数一下非零行的行数');
			}
consolelog('求逆：'+isinv,psj,j+1,'/',ps.length);
			//if((isinv||iscong) && j+1>=ps.length){
		//	if(!(isrank || isdet) && j+1>=ps.length && B00[0].length > m){
		consolelog(m,n,op,isBr,'ps,j+1 = ',ps,j+1,'n列,m行 = ',n,m);
		
		consolelog(op,!(isrank || isdet || op=='PTs'), j+1>=ps.length, isTc && n<m, !isBr && n>m);
		
			if(!(isrank || isdet || op=='PTs') && j+1>=ps.length && (isTc && n<m || !isBr && n>m)){
				consolelog(B00,1,m,m+1,n);
				consolelog(B00,n+1,m,1,n);

			consolelog(isinvr,iscong);
			consolelog(1,m,A[0].length+(isfsi?0:1));
				As.push(kmtrx(isinvr||iscong?subMtrx(B00,n+1,isBr?B00.length:m,1,n):subMtrx(B00,1,m, isinvl?m+1:A[0].length+(isfsi?0:1))));
consolelog(end,'求逆或合同',psj);
				noteA.push('得到'+(isinv && !isinvl && !isinvr?(A.length!=A[0].length?'可':'')+'逆':'')+'矩阵');//+(isinvl?'A左除B A\\B':(isinvr?'A右除B B/A':''))
			}

			B[1]=Eq(As,noteA,'',isdet?'':'xrightarrow');
			B[2]=psA;
consolelog(psA);


			return B
		}


		if(op=='Ak'){//k阶顺序主子矩阵 参数p:k阶	返回：矩阵
			if(p==1){
				return [[A[0][0]]];
			}
			B=Mtrx.opr1('拷',A);
	
			B.splice(p,m);

			for(var k=0;k<p;k++){
				B[k].splice(p,m);
			}

		}
		if(op=='Dk'){//k阶顺序主子式 参数p:k阶	返回：[矩阵，行列式值，步骤]
			if(p==1){
				var A00=A[0][0];
				return [[[A00]],A00,A00];
			}
			var Ak=Mtrx.opr1('Ak',A,p),dP=Mtrx.opr1('detPTs',Ak,'iU=;d;=');
			return [Ak,dP[0],dP[1]]
		}
		if(op=='Dk判断正定'){//根据各阶顺序主子式的符号判断正定性	返回：字符串
			if(/^1(,1)*$/.test(A)){
				return '正定'
			}
			if(/^-1(,1,-1)*(,1)?$/.test(A)){
				return '负定'
			}
			return '不定'
		}
		if(op=='Mij'){//余子式 参数p：[行号,列号] 	返回：余子式矩阵
			var i=+p[0],j=+p[1]||i;

			B=Mtrx.opr1('拷',A);
			B.splice(i-1,1);//去掉第i行

			for(var k=0;k<m-1;k++){
				B[k].splice(j-1,1);
			}

		}
		if(op=='Aij'){//1阶代数余子式数组 参数p：[行号,列号] 	返回：[余子式矩阵, 子式, 符号] 
			var i=+p[0],j=+p[1]||i;
/*
	偶+-偶 = 偶
	偶+-奇 = 奇
	奇+-奇 = 偶
	奇+-偶 = 奇
*/
			B=[Mtrx.opr1('Mij',A,[i,j]),A[i-1][j-1],1-2*((i+j)%2)];
			return B
		}
		if(op=='Aij1'){/*1阶代数余子式数组 按1行或1列展开 
			参数p：i行号 或j列号 (从1开始编号)
			
			返回：[余子式矩阵, 子式, 符号]+
			
			*/
			var isi=/i/.test(p), ij=+p.substr(1);
			for(var i=1;i<m+1;i++){
				B.push(Mtrx.opr1('Aij',isi?[ij,i]:[i,ij]));
			}
			return B
		}
		if(op=='Aijs'){/*K阶代数余子式数组 参数p：1,3,7,8;3,5
		
		返回	[余子式矩阵, K阶子式,系数, 子式行列索引数组]+ 

				i3,j5（缩写为3,5） 1阶子式
				i1,i3,j7,j8（缩写为1,3,7,8） 2阶子式
				i1,i3 指定第1、3行，选列有Cm2种
				单独1个i1或j1，指定某一行，某一列
				
				多个命令用;隔开
			*/
			var ps=Arrf(function(t){return t.replace(/^[ij]\d+$/g,function(t){
				var ts=t.replace(/[ij]/g,'');
				return /i/.test(t)?ZLR(ts+',',seqA(1,m).join(' ')).join(';'):zlr2(seqA(1,m).join(' '),','+ts).replace(/ /g,';');
			}).replace(/i\d+(,i\d+)+/g,function(t){
				var ts=t.replace(/i/g,''),ta=ts.split(','),tsn=ta.length;
				return ZLR(ts+',',Arrf(function(s){return Arrf(Arr1,s)}, CombinN(m,tsn)).join(' ')).join(';');
			}).replace(/j\d+(,j\d+)+/g,function(t){
				var ts=t.replace(/j/g,''),ta=ts.split(','),tsn=ta.length;
				return zlr2(Arrf(function(s){return Arrf(Arr1,s)}, CombinN(m,tsn)),','+ts).replace(/ /g,';');
			})
			},p.split(';')).join(';').split(';');
			for(var bi=0;bi<ps.length;bi++){
				var ij=ps[bi].replace(/[ij]/g,'').split(','),K=ij.length/2,KA=[];
consolelog(ij);
				var Bi=[Mtrx.opr1('拷',A),'',1-2*(eval(ij.join('+'))%2),ij];	//1-2*(eval(ij.join('+'))%2)
				KA.t='Mtrx';
				KA.typ='det';
	consolelog(A);
	consolelog(K);
				for(var i=0;i<K;i++){

					Bi[0].splice(+ij[i]-1-i,1);//挖行
					for(var j=0;j<n-i-1;j++){
						Bi[0][j].splice(+ij[i+K]-1-i,1);//挖列
					}

					var KAi=[];
					for(var j=0;j<K;j++){
						consolelog(ij,);
						KAi.push(A[+ij[i]-1][+ij[j+K]-1])
					}
					KA.push(KAi);
				}
				if(K==1){
					consolelog(K);
					Bi[1]=KA[0][0]
				}else{
					Bi[1]=KA;
				}
				Bi[0].typ='det';
				B.push(Bi);
			}
			return B
		}
		if(op=='*'){//伴随矩阵：代数余子式矩阵化后转置
			/*
				11 12  22 -12
				21 22  -21 11
				
				11 12 13    2233-3223 -(1233-3213) 1223-2213
				21 22 23    -(2133-3123) 1133-3113 -(1123-2113)
				31 32 33    2132-3122 -(1132-3112) 1122-2112
			*/
			for(var i=0;i<m;i++){
				B.push([]);
				for(var j=0;j<n;j++){
consolelog(j,i);
					var Aji=Mtrx.opr1('Aij',A,[j+1,i+1]);
					consolelog(Mtrx.opr1('det',Aji[0]));
					consolelog(Aji[2]);
					B[i].push(times([Mtrx.opr1('det',Aji[0]),Aji[2]]))

				}
			}

		}
		if(op=='cramer'){/*Cramer法则
			
			输入增广矩阵	(最后1列是等式右边的值)
			输出矩阵数组：[D,D1,D2,...,Dn]
			
			
			*/
			var a=Arri(A,m);
			B.push(subMtrx(A,1,m,1,m));
			for(var i=0;i<m;i++){
				B.push(Mtrx.build.replace(B[0],a,[1,i+1],'v'));
			}
			return B
			
		}

		if(op=='Cramer'){/*Cramer法则（步骤）
			输入增广矩阵A|b
				参数p是数组：每个行列式的步骤
				
				第4个参数ar[3]，指定变量风格x1（默认） 或 abcd 或 xyzw 等

			返回：[解集数组R, 变换数组C[[行列式,步骤]+], 步骤数组S]  解集用空数组表示无解
			*/
			var B=Mtrx.opr1('cramer',A), n=B[0].length,C=[],R=[],vars=ar[3]||'x1',ms=seqA(1,m);
		consolelog(B);
			C.push(Mtrx.opr1('detPTs',B[0],(arl>2?p[0]:'')||(n<3?'S':'iU=;d;=')));

			var d=C[0][0];

consolelog(d);
			if(/\d/.test(vars)){
				ms=seqA(+vars.replace(/\D/g,''),m);
				var indx=Arrf(function(t){return '_{'+t+'}'},ms);
				vars=concat(copyA(vars.replace(/\d/g,''),m),indx);
			}else if(vars.length==1){
				vars=fCC(seqA(vars.charCodeAt(0),m)).split('');
			}
			if(''+d=='0'){//无解或多解
				
				
			}else{//唯一解
				consolelog('唯一解');
				
				
				
				for(var i=0;i<m;i++){
					var Ci=Mtrx.opr1('detPTs',B[i+1],p[i+1]||(n<3?'S':'iU=;d;='));
					C.push(Ci);
					R.push(divide([Ci[0],d]))
				}



				var S=Arrf(function(k){return DCtv('inblk pd2','D'+(k?sub(k,''):''))+DCtv('inblk pd2','=')+C[k][1]},seqA(0,m+1)).concat(
					concat(vars,'=',Arrf(function(k){return frac('D'+sub(k,''),'D','')},ms),
						'=',Arrf(function(k){return frac(C[k][0]||'0',d,'')},ms),
						'=',R));
	
				consolelog(S);
				return [R,C,S]
			}

		}



		if(op=='detDef'){/*行列式 按定义展开
			返回 [结果, 步骤]
			*/
			
			var R=[],Def=[], r0=Mtrx.opr1('r0',A), c0=Mtrx.opr1('c0',A), r0m=fmax(r0), c0m=fmax(c0), byC=c0m>r0m;//列零数，行零数
			
			Def=Arrf(function(x){var Ax=Arr1(x);return [nInvOrder_(Ax)].concat(Mtrx.opr1('取',A,byC?[Ax,seqs(1,m)]:Ax))}, PermutN(m,m));

			//R=[ArrfcA([plus,times],Def),ArrfcA([plus,times],Def,1)];
			R=[!/\d/.test(A)?'省略':ArrfcA([plus,times],Def),ArrfcA([plus,times],Def,1)];
			return R
			
		}
		if(op=='detSar'){/*行列式 按对角线法则（萨鲁斯法则Sarrus rule）展开二阶、三阶
		
			返回 [结果，步骤]

			参数p 指定需要步骤
*/
			var R=[],Sar=[];
			if(m==1){
				R=[A[0][0],A[0][0]]
			}
			if(m==2){

				if(p){
					Sar=[times([A[0][0],A[1][1]]), times([A[1][0],A[0][1]])];
				}
				
				R=[ArrfcA([minus,times],[[A[0][0],A[1][1]],[A[1][0],A[0][1]]]), p?minus(Sar,1):''];

				
			}
			if(m==3){
				var B=[[[A[0][0],A[1][1],A[2][2]],[A[0][1],A[1][2],A[2][0]],[A[0][2],A[1][0],A[2][1]]],
					[[A[0][2],A[1][1],A[2][0]],[A[0][1],A[1][0],A[2][2]],[A[0][0],A[1][2],A[2][1]]]];
				R.push(ArrfcA([minus,plus,times],B));

				R.push(ArrfcA([function(s){return minus(s,1,0)}, function(s){return plus(s,1,0)}, function(s){return times(s,1,1)} ],B));
					

			}
			if(p){
			consolelog(R[1]);
				R[1]=kdet(A)+' = '+R[1]+' = '+ R[0]
			}
			return R
		}


		if(op=='detLaplace'){/*行列式Laplace展开  		[[[余子式矩阵,系数]+], htmlA]
			返回	[[余子式矩阵,系数]+，步骤数组]
			*/
			var ps=p.split(';');
			for(var j=0;j<ps.length;j++){
				var psj=ps[j],p0=psj[0],isi=p0=='i',k=+psj.substr(1),a=[kdet(A),eq(Mtrx.note.PT('l'+psj))];
				for(var i=0;i<(isi?n:m);i++){
					var s=isi?k-1:i,t=isi?i:k-1;
					if(+A[s][t]!=0){
						var Aij=Mtrx.opr1('Aij',A,[s+1,t+1]);//[余子式矩阵, 子式, 系数]
						if(!Mtrx.is.b1.rc0(Aij[0])){//其实还需判断，是否有相同或成比例的行（列） rck0

							Aij[1]=times([Aij[1],A[s][t]]);

							B.push(Aij);
							a[1]+=Aij[1]+kdet(Aij[0])+' + ';
						}
					}
				}
			}
			a[1]=a[1].replace(/ \+ $/,'');
			
			return [B,a]//[B,a.replace(/ \+ $/,'')]
		}



		if(op=='Det'){//行列式 （结果不化简） 		[[[余子式矩阵,系数]+], html]


		}
		if(op=='det'){//行列式 determinant 自动寻找方法计算结果
			
			
			
			
	//		if(m<=3){
				consolelog(A,Mtrx.opr1('detSar',A).join('+'));
				//return Mtrx.opr1('eval',[[Arrf(nWrap,Mtrx.opr1('detSar',A)).join('+')]])[0][0]
				
				
	//			return Mtrx.opr1('eval',[[Mtrx.opr1('detSar',A)[0]]])[0][0]	//报错！
	//		}else{
				return Mtrx.opr1('detPTs',A,p||'iU=;d;=',1)[0]
			//		}
		
			return ''
		}
		if(op=='r'){//rank秩	使用初等变换求秩
			var B00=Mtrx.opr1('rankPTs',A,'iE=',1)[0][0];
			consolelog(B00);
			//return +Mtrx.opr1('秩',B00)[0][0][0][0]
			return Mtrx.opr1('秩',B00)
		}
		if(op=='tr'){ //trace迹
			return plus(Mtrx.opr1('取',A,'D'))
			
		}
		if(op=='谱'){
			
			
			return ''
		}
		if(op=='norm'){//范数norm 有多种
			
			
			return ''
		}
		if(op=='特征矩阵'){
	//		consolelog(op);
			return Mtrx.opr2('-',Mtrx.build.D(copyA('λ',m)),A)
		}

		if(op=='尝试求特征值'){/*适合3阶以内 以及特殊的矩阵（对角阵）
			参数p:已知特征值数组：[特征值1，特征值2，...]	注意，重根输入重数次
			参数ar[3]: 第4个参数指定获取步骤

			返回 [特征值数组, 步骤]
			
			*/
			
			var C=[],es=Arrf(function(t){return ''+t},[].concat(p||[])), esn=es.length;
			if(esn==m){
				return [es,'特征值已知']
			}
			if(Mtrx.is.b1.UL(A)){
				return [Mtrx.opr1('取',A,'D'), '三角阵的特征值就是主对角线元素']
			}
			
			var trA=Mtrx.opr1('tr',A),tr=trA,r=Mtrx.opr1('r',A);
			consolelog('求出迹',trA,tr,r);
			
			var dete=r<m?0:Mtrx.opr1('detPTs',A,'iU=;d;=')[0];
			if(esn){
				consolelog('已知特征值：',p,es);
				tr=minus([tr,plus(es)]);
			}
			var f=function(i,k){//给出特征值i, 以及重数k，添加到集合中
				var l=k-es.filter(function(t){return t==''+i}).length;
				if(l){
					consolelog('此前 迹',tr);
					consolelog('特征值',i,' 遗漏重数',l);
					es=es.concat(copyA(''+i,l));
					esn+=l;
					if(''+dete!='0'){
						consolelog('行列式',dete);
						dete=divide([dete,pow([i,l])]);
					}
					if((''+i)!='0'){
						consolelog('迹',tr);
						tr=minus([tr,times([i,l])]);
					}
					if(esn+1==m){
						consolelog('最后1个特征值是 '+tr);
						es.unshift(tr);
						esn++;
					}
				}
			};

			if(''+dete=='0'){
				consolelog('行列式为0，有特征值0');
				f(0,m-r);
				if(ar[3]){
					consolelog('行列式为0，秩为'+r+',则含有特征值0（'+(m-r)+'重）');
					C.push('行列式为0，秩为'+r+',则含有特征值0（'+(m-r)+'重）');
				}
				/*
					得到特征值0后，需对行列式dete进行去零
					|λI-A|
					Ax=0 基础解系中向量个数(n-r) ≤ 特征值0的（代数）重数r'
					Ax=kx
					
					选A的相似矩阵B=P^(-1)AP			A,B特征向量之间的关系（只相差一个可逆变换矩阵P）：Ax=kx By=ky PB=AP PBy=APy A(Py)=APy=PBy=P(ky)=k(Py)	说明Py是A的特征向量
					B=diag(C, 0)
					 =
						C 0
						0 0
					求C特征值c，特征向量y Cy=cy
					C O  y
					O O  0
					即B有特征值c，特征向量
						cy
						O
					
					A有特征值c，特征向量
						Pcy
						0
					
					
					设Ax=0基础解系x1,x2
					
					
					
					
					
				*/
			}

			if(esn && esn<m){/*将已知特征值，检查重数，进行补充，
				注意，用特征矩阵的秩r，来判断特征值重数(n-r)，是可能低估重数的
					因此后续特征值求不全时，可以再检查一下已知特征值
				*/
				var es0=[].concat(es0),esn0=esn;
				for(var i=0;i<esn0;i++){
					if(es0[i]){
						var r0=Mtrx.opr1('r',Mtrx.opr2('-',Mtrx.build.D(copyA(es0[i],m)),A));
						//f(Aii,r0);
						f(Aii,m-r0);
					}
				}
			}

			if(esn<m){
				for(var i=0;i<m;i++){//某一行（列）只有1个非零元（在主对角线上）
					if(esn==m){break}
					var Aii=''+A[i][i];
					if(es.indexOf(Aii)>-1){
						continue;
					}
					var Ai=[].concat(A[i]), Aj=Arri(A,i);
					Ai.splice(i,1);
					Aj.splice(i,1);
					if(/^0*$/.test(Ai.join('')) || /^0*$/.test(Aj.join(''))){
						var r0=Mtrx.opr1('r',Mtrx.opr2('-',Mtrx.build.D(copyA(Aii,m)),A));
						consolelog('主对角线 有特征值 '+Aii,' 迹：',tr);
						//f(Aii,r0);
						f(Aii,m-r0);
						if(r[3]){
							
							C.push('第'+(i+1)+'行列'[+/^0*$/.test(Aj.join(''))]+'非主对角线元素都为0,','则有特征值（即该主对角线元素）：'+Aii);
						}
					}
				}
			}
			if(esn<m){
				for(var i=1;i<10;i++){
					if(esn==m){break}
					if(es.indexOf(''+i)<0){
						consolelog('猜测特征值 ',i);
						var r0=Mtrx.opr1('r',Mtrx.opr2('-',Mtrx.build.D(copyA(i,m)),A));
						if(r0<m){//m-r0就是该特征值的重数
							f(i,m-r0);
						}
					}
					
					if(esn==m){break}
					if(es.indexOf('-'+i)<0){
						consolelog('猜测特征值 -',i);
						var r0=Mtrx.opr1('r',Mtrx.opr2('+',Mtrx.build.D(copyA(i,m)),A));
						if(r0<m){//m-r0就是该特征值的重数
							f(-i,m-r0);
						}
					}
				}
			}
			if(esn<m){
				if(Mtrx.is.b1['列正交'](A) && Mtrx.is.b1['列等模'](A)){/*列正交向量单位化，会得到正交矩阵Q（特征值是±1） AP=Q 或A/x=Q	特征值是±列向量模x
					数量实正交矩阵kQ，特征值是±k，其中负特征值的个数s满足tr(kQ) = k(n-2s)  |kQ| = (-1)^s k^n
					*/
					consolelog('列正交  列等模');
					
					var k=Mtrx.opr1('向量模1',Arri(A,0));
					consolelog('向量模1',k);
					if(es.indexOf(''+k)<0){
						var s=minus([m,divide([trA,k])])/2;
						consolelog('重数s= ',s);
						
						if(/√/.test(k)){//出现开方√，除法运算出现死循环，特别处理一下，直接添加成对±k，未考虑重数>1的情况
							es.unshift(k,neg(k));
							esn+=2;
							
											
						}else{
						
							f(k,m-s);
							consolelog('es= ',es,'esn= ',esn,'m= ',m);
							f(neg(k),s);
							consolelog('es= ',es,'esn= ',esn,'m= ',m);
							if(r[3]){
								consolelog('数量实正交矩阵kQ，','则有特征值是±'+k);
								C.push('数量实正交矩阵kQ，','则有特征值是±'+k);
							}
						}
					}

				}
			}
			if(esn<m){
				if(Mtrx.is.b1['列等和'](A)){/*列向量和相等，则此和必为特征值
					*/
					consolelog('列等和 ');
					var k=plus(A[0]);
					if(es.indexOf(''+k)<0){
						var r0=Mtrx.opr1('r',Mtrx.opr2('-',Mtrx.build.D(copyA(k,m)),A));
						f(k,m-r0);
						if(r[3]){
							C.push('各列和相等，都是'+k,'则有特征值是'+k);
						}
					}
				}
				if(Mtrx.is.b1['行等和'](A)){/*行向量和相等，则此和必为特征值
					*/
					consolelog('行等和 ');
					var k=plus(Arri(A,0));
					if(es.indexOf(''+k)<0){
						var r0=Mtrx.opr1('r',Mtrx.opr2('-',Mtrx.build.D(copyA(k,m)),A));
						f(k,m-r0);
						if(r[3]){
							C.push('各行和相等，都是'+k,'则有特征值是'+k);
						}
					}
				}
				
				
			}
			if(esn<m){
				if(m-esn==2){//此时用二次方程求根公式
					
					if(''+dete=='0'){/*此时求特征矩阵|xE-A|主对角线元素（代数）余子式（x都替换为0）之和，即为特征方程中x一次项的系数
							也即-A的主对角线元素(代数)余子式之和，
							也即-A的伴随矩阵的迹 tr((-A)*) = tr( (-1)^(n-1)A* ) = (-1)^(n-1) tr(A*)
						*/
						dete=Mtrx.opr1('tr',Mtrx.opr1('*',Mtrx.opr1('-',A)));
						consolelog('tr((-A)*) = ',dete);
						
						
					}
					
					consolelog('二次方程求根');
					var last2=equationA([1,neg(tr),dete]);
					es.push(last2[0][0],last2[0][1]);
					esn=m;
					
				}
				if(m-esn==3){//此时用三次方程求根公式
					var f1=Mtrx.opr1('detPTs',Mtrx.opr2('-',Mtrx.build.D(copyA(1,m)),A),'iU=;d;=')[0],
						f_1=Mtrx.opr1('detPTs',Mtrx.opr2('-',Mtrx.build.D(copyA(-1,m)),A),'iU=;d;=')[0],
						a1=divide([minus([f1,f_1]),2]);
					consolelog('3次方程1次项系数是',a1);

					var last3=equationA([1,neg(tr),a1,neg(dete)]);
					es.push(last3[0][0],last3[0][2],last3[0][3]);
					esn=m;
					
				}
				
				if(esn==1){//此时猜测是重根（用迹、行列式来校验，但未严格证明，可能有误）	示例矩阵：2-125-33-10-2

					if(tr==times([es[0],m-esn]) && ''+dete==''+pow([es[0],m-esn])){
						es=copyA(es[0],m);
					}
					
				}
			}
			consolelog(C.join('\n\n'));
			if(es.filter(function(t){return nisn(t,'',0)}).length==m){//全是整数，进行排序
				es.sort(sortBy.num);
			}
			return [es, C.join(br)]
		}
		if(op=='特征值'){/*特征值 eigenvalue 
			参数p:已知特征值数组：[特征值1，特征值2，...]	注意，重根输入重数次
			参数ar[3]: 第4个参数指定获取步骤
			
			返回 [特征值数组, 步骤]




	http://wenku.baidu.com/link?url=4syLqIl3c1o4dP4heVbONNu7QNgT3pwj5Koy2zd6Q6-kKemvD82-OPUI1WKorwKOLCaarwblkJpla0-qWbcGv_wC7WLRqQ3Gs84n_UXYmRO
	
	http://wenku.baidu.com/view/d9e9f707cc1755270722081d.html?re=view
	
	
	
	http://zhidao.baidu.com/question/138627283388033765.html?entry=qb_ihome_tag
	这一题，使用对角化方法，k=1时，为啥不等于A？
	
	
	P ⁻¹AP=Λ 		3 -2 0 -2 2 -2 0 -2 1&-1,2,5
	http://wenku.baidu.com/link?url=UxM_0HcXUUv61MznLR6jto0tgDqhECnjDNKXf8Malkk3UgOd9Q1F7t0lqohTyb6hddXcaFDvdlOIxzMBSTrP5-WoBcg4YIPks5j1ahvcPou


	
			*/
			var C=[],es=Arrf(function(t){return ''+t},[].concat(p||[])), esn=es.length;
			if(esn<m){
				var esC1=Mtrx.opr1('尝试求特征值',A,es,ar[3]);
				es=esC1[0];
			}
			consolelog(es);
			if(ar[3]){
				var eM=Mtrx.opr1('特征矩阵',A), eP=Mtrx.opr1('特征多项式',A,es,ar[3]);
				C.push('|λI-A|',kdet(eM),eP[0],0);
				var esA=countA(es);//[特征值去重数组，相应重数数组]
			consolelog(esA);
			consolelog(esA.join('\n'));
				C=['A='+kmtrx(A)+', '+C.join('='),'解得λ = '+count2pow(esA,2)];//, '备注：',esC1[1]];

			}

		
			return [es, C]
		}

		if(op=='特征多项式'){/*特征多项式 eigenpolynomial |xI-A| 即所有不变因子的乘积

			[必需]参数p:特征值数组：[特征值1，特征值2，...]	注意，重根输入重数次
			参数ar[3]: 第4个参数指定获取步骤
			
			返回 [多项式，步骤]
			
			最小多项式是标准型（主对角线上为：d₁(λ) d₂(λ)。。。，称为不变因子）中最后一项：dr(λ)，r为秩
				https://wenku.baidu.com/view/8ae707d02cc58bd63186bda6.html
			初等因子：将不变因子分解为互不相同的一次因子的乘积（相同的一次因子写成幂，不需分解）
			不变因子：将所有初等因子按幂作降序排列（行排列），然后各行后面补齐1（使每行都有n个因子），然后从左到右，同一列的上下初等因子相乘，依次得到dr(λ) dr₋₁(λ)。。。d₁(λ) 
			
			*/


			return [count2pow(countA(Arrf(pptd,Mtrx.opr2('-',[copyA('λ',m)],[p])[0]))),'过程略']
		}

		if(op=='特征向量'){/* eigenvector
			参数p:特征值数组：[特征值1，特征值2，...]	注意，重根输入重数次
			参数ar[3]: 第4个参数指定获取步骤
			
			返回 [向量矩阵, 步骤, n个特征值数组，[[特征值1,重数,特征向量], [特征值2,重数,特征向量]], 是否可对角化diaged]
			
			*/
			var C=[],Bs,es=Arrf(function(t){return ''+t},[].concat(p||[])), esn=es.length, diaged=1;
			
			if(esn<m){
				var esC1=Mtrx.opr1('特征值',A,es,ar[3]);
				es=esC1[0];
				esn=es.length;
				if(ar[3]){
					C.push(esC1[1],'\\\\');
				}
			}

			var esA=countA(es),esA0=esA[0],esA1=esA[1], eVA=[], CA=[];
	//		consolelog('统计特征值',esA.join('\n'))
			for(var i=0;i<esA0.length;i++){//遍历不同的特征值
				//Mtrx.opr2('*',Mtrx.build.I(m),p[i])
				var Bi=Mtrx.opr1('fshPTs',Mtrx.opr2('-',Mtrx.build.I(m,m,esA0[i]),A),'iS=;fsh;iS=;jB*=',!ar[3]), Bi00=Bi[0][0];//[[结果矩阵，系数],过程html]
				var ei=subMtrx(Bi00,1,m,m+1),ein=ei[0].length,eiv=[],eivs=[];
				B.push(ei);//特征向量组
				for(var j=0;j<ein;j++){
					var ej=Arri(ei,j);
					eiv.push(ej);
				//	es.push(p[i]);//记录特征值
					if(ar[3]){
						//eivs.push('('+ej.join()+')^T');
						eivs.push(ej);
					}
				}
				eVA.push([esA0[i],esA1[i],eiv]);//[特征值1,重数,特征向量]
				
				if(diaged && ein<esA1[i]){//不可对角化
					diaged=0
				}
				
			consolelog('几何重数：',ein,'\n','代数重数：',esA1[i]);
				if(ar[3]){
					//CA.push(['将特征值'+kfrac(esA0[i],1)+'代入特征方程(λI-A)x=0',Bi[1],'得到属于特征值'+esA0[i]+'的特征向量'+kfrac(eivs.join(', '),1)]);
					CA.push(['将特征值'+kfrac(esA0[i],1)+'代入特征方程(λI-A)x=0',Bi[1],'得到属于特征值'+esA0[i]+'的特征向量'+Arrf(kmtrx,eivs).join(', ')]);

				}
			}
			
			
			Bs=Mtrx.build.B([B]);
			if(ar[3]){
				C.push(ztable(CA));
				C.push('得到特征向量矩阵P = ',kmtrx(Bs));
				if(diaged){
					C.push('并且有P^{-1}AP = Λ = '+kxf('diag')+zp(kfrac(''+es,1)));
				}else{
					C.push('矩阵A不可对角化');
				}
			}

			return [Bs, kxA(C), es, eVA,diaged]
		}
		if(op=='奇异值'){/*AA^H（也是A^HA）的特征值的算术平方根
			p指定获取步骤
			
			返回[奇异值数组，步骤]
			
			*/
			
			var AAH=Mtrx.opr2('*',A,Mtrx.opr1('H',A)), EGV=Mtrx.opr1('特征值',AAH,'',p),S=Arrf(sqrt,EGV[0]);
			//U=Mtrx.opr1('特征向量',AAH), V=Mtrx.opr1('特征向量',AHA);	,AHA=Mtrx.opr2('*',Mtrx.opr1('H',A),A)
			return [S,p?EGV[1]+br+'再分别求出特征值的算术平方根，'+br+'得到'+S:'']
			
		}
		

		if(op=='inv'){//逆
			/*
参数p 求逆方法：
				d 对角阵 对角线元素（或分块）取逆 
				d- 副对角阵 副对角线元素（逆序，分块较复杂，需满足矩阵分块可乘）取逆
				
				* 伴随矩阵求逆
				PTs	初等行变换求逆
				part 分块矩阵求逆（ 暂仅支持2×2分块，（副）对角线上分块可逆，且至少有1个分块是零矩阵）
				
				e 初等矩阵求逆 elementary matrices
			*/
			if(p=='e'){
				var D=Mtrx.opr1('取',A,'D');
				if(/(1,)*0(,1)*,0(,1)*/.test(D)){//交换, 逆矩阵是自身：满足A^2=I=AA^T 是正交矩阵
					return Mtrx.opr1('拷',A)
				}
				if(/^(1,)*1$/.test(D)){//i行的倍数加到j行, 逆矩阵是2I-A：满足2A-A^2=I即(A-I)^2=0； A特征值都是1
					return Mtrx.opr2('-',Mtrx.build.I(m,m,2),A)
				}
				//数乘，逆矩阵是对角线上非1元，替换为倒数；A特征值：n-1个1，以及1个非1元
				var a=[];
				for(var i=0;i<m;i++){
					if(+A[i][i]!=1){
						a.push(i);
						break;
					}
				}
				return Mtrx.build.replace(Mtrx.build.I(m),[divide([1,A[i][i]])],[i+1,i+1])	
			}
			if(p=='d'){
				for(var i=0;i<m;i++){
					var Aii=A[i][i], isA=isArr(Aii);
					B.push(isA?Mtrx.opr1('inv',Aii):divide([1,A[i][i]]));
				}
				return Mtrx.build.D(B)
			}
			if(p=='d-'){
				for(var i=0;i<m;i++){
					var Aii=A[m-i-1][m-i-1], isA=isArr(Aii);
					B.push(isA?Mtrx.opr1('inv',Aii):divide([1,A[i][i]]));
				}
				return Mtrx.build.D(B)
			}
			if(p=='*'){
				return Mtrx.opr2('/',Mtrx.opr1('*',A) , Mtrx.opr1('det',A))
			}
			if(p=='PTs' || !p){
				var B00=Mtrx.opr1('invPTs',A,'iS=',1)[0][0];
				return subMtrx(B00,1,m,m+1)//subMtrx(B00,1,m,m*2)
			}
			if(p=='part'){
				return Mtrx.opr1('invPTs',A,'P',1)[0]
			}
		}
		if(op=='逆'){//直接用初等行变换求逆矩阵，返回矩阵
			//return Mtrx.opr1('invPTs',A,'iS=',1)[0][0];
			return Mtrx.opr1('inv',A);
		}

		if(op=='指'){/*指数矩阵数组（到零矩阵结束）
				返回数组 [A,A²,A³⋯Aⁿ]  Aⁿ⁺¹=0
			*/
			B.push(Mtrx.opr1('拷',A));
			
			for(var i=0;i<10;i++){
				var Bi=Mtrx.opr2('*',B[i],A);
				consolelog(i,Bi,Mtrx.toStr(Bi));
				if(Mtrx.is.b1[0](Bi)){
					break
				}else{
					B.push(Bi);
				}
			}
		}
		if(op=='exp'){/*指数e的矩阵幂 幂级数展开
				返回数组 [结果矩阵,指数矩阵数组]
			*/
			var C=Mtrx.opr1('指',A),R=Mtrx.build.I(m);
			for(var i=0;i<C.length;i++){
				R=Mtrx.opr2('+',R,Mtrx.opr2('/',C[i],Fact(i+1)));
			}
			B=[R].concat(C);
		}
		
		if(op=='分解'){/*
			
			ar[3]	指定获取步骤
			
			
			*/
			
			if(p=='T'){/*	ar[3] 指定a，得到唯一解 ，返回[αT,β]
			
				T分解（不唯一）：适合行(列)间成比例（或相等）的矩阵分解 
					(a b c)T * (i j k) = 
					ai aj ak
					bi bj bk
					ci cj ck
					
					行间相同时，得到 (1 1 1)T * (i j k)
					列间相同时，得到 (a b c)T * (1 1 1)
				
				
			*/
			

				var a=ar[3], B0=[[a]],B1=[[]];
				consolelog(a);
				for(var i=0;i<m;i++){

					B1[0].push(divide([A[0][i],a]));
					if(i){
						B0.push([divide([A[i][0],B1[0][0]])])
					}
				}
				B=[B0,B1];
			}

			if(p=='SVD'){
				
				
			}
			if(p=='ps'){/*分解为初等矩阵的乘积	
				返回 [初等矩阵数组, 步骤, 变换命令组]
				*/
				consolelog(ar[3]);
				var B=Mtrx.opr1('invlPTs',A,'iS=',!ar[3]);
				consolelog(B,m);
				
				B[0]=Mtrx.pt.ps2invAs(B[2],m);
				
				if(ar[3]){
					consolelog(B);
					var l=B[0].length, Qs=Mtrx.pt.ps2As(B[2],m),S=seqA(1,l),R=seqA(1,l).reverse();
					B[1]+=['','上述每一步,相应初等变换矩阵分别是',
					concat(ZLR(ZLR3('P_{',S,'}',' ')), copyA('=',l), Arrf(zmtrx,Qs)),
						ZLR3('P_{',R,'}','')+'A=E',
						'则A='+ZLR3('P_{',S,'}^{-1}',''),
						concat(ZLR(ZLR3('P_{',S,'}^{-1}',' ')), copyA('=',l), Arrf(zmtrx,B[0])),''].join(kbr2)
				}
			}
		}
		
		
		if(op=='拷'){
			for(var i=0;i<m;i++){
				B.push([]);
				for(var j=0;j<n;j++){
					B[i].push(A[i][j])
				}
			}
		}
		if(op=='取'){//根据元素位置索引（从1开始），返回子集	[[行1,列1],[行2,列2],[行3,列3]]	[[行1,行2,行3](缺失时，默认为[1,2,...,n]),[列1,列2,列3]]
		//	ar[3] 指定索引风格ijij	iijj[默认]	[[行1,列1]]
		//	p: D主对角线上元素 -D副对角线元素
			var s=[],pij=arl>3 && ar[3]=='ijij';
			if(p=='D'){
				for(var i=0;i<minmn;i++){
					B.push(A[i][i])
				}
			}else if(p=='-D'){
				for(var i=0;i<minmn;i++){
					B.push(A[i][n-i-1])
				}
			}else{
				var p0A=isArr(p[0]), pn=pij?p.length:(p0A?p[0].length:p.length)
				for(var i=0;i<pn;i++){
					B.push(pij?A[+p[i][0]-1][+p[i][1]-1]:A[p0A?+p[0][i]-1:i][(p0A?+p[1][i]:+p[i])-1])
				}
			}
		}
		
 		B.t='Mtrx';B.toStr=function(p){return Mtrx.toStr(this,p)};
		
		return B
		
	},
		
	opr2:function(op,A,B,p){
//矩阵二元运算
//当A、B中有1个是矩阵，另一个是数字，则对矩阵作相应的位操作
//求负矩阵 opr2('-',0,B) opr2('*',A,-1) opr2('*',-1,B) opr2('/',A,-1)
consolelog(op,A,B);
		var C=[],AA=isArr(A),BB=isArr(B),Ar=A.length,Ac=AA?A[0].length:1,Br=B.length,Bc=BB?B[0].length:1,ars=$.makeArray(arguments).slice(1),arl=ars.length;
		C.t='Mtrx';


		if(op=='⊕'){//克罗内克和 Kronecker sum 设两个方阵Am、Bn，A⊕B=A⊗In+Im⊗B。 http://mathworld.wolfram.com/KroneckerSum.html
			C=Mtrx.opr2('+',Mtrx.opr2('⊗',A,Mtrx.build.I(Br)),Mtrx.opr2('⊗',Mtrx.build.I(Ar),B));
		}
		if(op=='⊗'){//克罗内克积 Kronecker product 将m×n矩阵A的所有元素，分别与p×q矩阵B相乘，得到mp×nq的分块矩阵。
			var mn=[];
			for(var i=0;i<Ar;i++){
				var mni=[];
				for(var j=0;j<Ac;j++){
					mni.push(Mtrx.opr2('*',B,A[i][j]))
				}
				mn.push(mni)
			}
			C=Mtrx.build.B(mn);
		}
		if(op=='∔'){//直和 构成准对角阵
			return Mtrx.build.D(ars)
		}
		if(op=='内积'){/*
			A,B均为1维数组：行向量
			*/

			var a=0;
			for(var i=0;i<Ar;i++){
				a=plus([a,times([A[i],B[i]])])
			}
			return a
		}
		
		
		if(op=='左除' || op=='\\'){//左除	A左除B	A\B
			
	/*
				invPTs 求逆			A|E → I|A⁻¹
					A左除B	A\B		A|B → I|A⁻¹B
					A右除B	B/A		A → I
									B    BA⁻¹
	*/
			
			C=Mtrx.opr2('*',Mtrx.opr1('逆',A),B)
		}
		
		if((op=='/' || op=='右除') && AA && BB){//矩阵右除	A右除B	B/A
			C=Mtrx.opr2('*',B,Mtrx.opr1('逆',A));

		}else if(/^[\*\/\+\-\^]$/.test(op)){//四则运算
			var N;
			if(op=='/' && BB){
				N=Mtrx.opr1('逆',B);
			}else{
				N=B
			}
			if(AA && BB){
				if(/[\+\-]/.test(op)){//矩阵加减（行列数要一致）
					C=Mtrx.opr2('.'+op,A,B)
				}else if(op=='^'){//幂 这里是二元幂A^B，需要改写定义
		//矩阵的矩阵幂（得到分块矩阵，与Kronecker积思路类似）
					//C=

				}else{//矩阵乘除  	A的列数等于B的行数 :Ac==Br 返回Ar×Bc阶矩阵
					for(var m=0;m<Ar;m++){
						C.push([]);
						for(var n=0;n<Bc;n++){
							
							
							var a=0;
							for(var k=0;k<Ac;k++){
								a=plus([a,times([A[m][k],N[k][n]])])
							}
							
							C[m].push(a)
						}
					}
				}
			}else{//矩阵与数，点运算 每个元素都作同样的加减乘除、幂
				var M,Mr,Mc,m;
				if(AA){
					M=A;Mr=Ar;Mc=Ac;m=B
				}else{
					M=N;Mr=Br;Mc=Bc;m=A
				}
				for(var i=0;i<Mr;i++){
					C.push([]);
					for(var j=0;j<Mc;j++){
						C[i].push(Mfn.oprs(AA && op=='/'?'/':(/[\+\-\^]/.test(op)?op:'*'),[M[i][j],m],1).toStr())
					}
				}
			}
		}
		if(/\.[\*\/\^\+\-]/.test(op)){//矩阵之间点乘、点除、点幂，点加、点减，就是普通的矩阵加减
			for(var i=0;i<Br;i++){
				C.push([]);
				for(var j=0;j<Bc;j++){
					C[i].push(Mfn.oprs(op[1],[A[i][j],B[i][j]],1).toStr())
				}
			}
		}

		if(/b∨/.test(op)){//布尔矩阵并∨（Join或）
			for(var i=0;i<Br;i++){
				C.push([]);
				for(var j=0;j<Bc;j++){
					var ais1=1-is0(A[i][j]),bis1=1-is0(B[i][j]);
					C[i].push(ais1||bis1)
					
				}
			}
		}

		if(/b∧/.test(op)){//布尔矩阵交∧（Meet且）
			for(var i=0;i<Br;i++){
				C.push([]);
				for(var j=0;j<Bc;j++){
					var ais1=1-is0(A[i][j]),bis1=1-is0(B[i][j]);
					C[i].push(ais1*bis1)
					
				}
			}
		}

		if(/b⊙/.test(op)){//布尔矩阵积⊙（类似于普通矩阵乘法）	A的列数等于B的行数 :Ac==Br 返回Ar×Bc阶矩阵
			for(var i=0;i<Ar;i++){
				C.push([]);
				for(var j=0;j<Bc;j++){
					
					var a=0;
					for(var k=0;k<Ac;k++){
						var ais1=1-is0(A[i][k]),bis1=1-is0(B[k][j]);
						
						a+=ais1*bis1;
						if(a){
							break
						}
					}
					C[i].push(a)
					
				}
			}
		}

		C.t='Mtrx';C.toStr=function(p){return Mtrx.toStr(this,p)};
		
		return arl<3?C:Mtrx.opr2.apply(null,[op,C].concat(ars.slice(2)));
		//return arl<3?C:Arrf(function(x,y){return Mtrx.opr2(op,x,y)},ars,'cp2')
	},

	coo:function(op,E,p){/*复合运算	E是表达式 p是参数
		E

*/
		var B=[],m=A.length,n=A[0].length, ar=arguments, arl=ar.length; B.t='Mtrx';
		if(op=='化简'){
			
		}
	},

	note:{
		PT:function(t){//初等变换 步骤说明
			consolelog(t);
			return t.replace(/(\d)[LUDI]/g,'$1').replace(/^0/,'显然为0：').replace(/:([ij]\d+)/,'、$1成比例')
				.replace(/fs[hi]/,'增行增列，求基础解系').replace(/[ij]U=/g,'化上三角').replace(/[ij]L=/g,'化下三角').replace(/[ij]D=/g,'化对角阵').replace(/[ij]I=/g,'化最简形')
				.replace(/i(\d+)/g, '第$1行').replace(/j(\d+)/g, '第$1列').replace(/≈|~~/g,'交换').replace(/~/g,'到')
				.replace(/jb\*=/g,'基础解系乘以倍数，凑成整数')
				.replace(/(第\d+[行列],?)+\+=/g,function(x){return x.replace('+=', (/,/.test(x)?'，分别':'')+'加上')})
				.replace(/(第\d+[行列],?)+\-=/g,function(x){return x.replace('-=', (/,/.test(x)?'，分别':'')+'减去')})

				.replace(/[\/÷]=/g,', 提取公因子')
				
				.replace(/[×⋅\*]=/g,', 乘以')
				.replace(/^d-/g,'副对角线相乘').replace(/^d/g,'主对角线元素相乘')
				.replace(/^L/g,kxf('Laplace')+'展开').replace(/^D/g,'按定义展开').replace(/^S/g,'按对角线法则展开')
				.replace(/^T/g,'转置').replace(/^a/g,'拆开')//.replace(/-?\d+\/\d+/g,function(s){return s})//pptd(s)

		},
		Det:function(t){//行列式 步骤说明
			return t.replace(/(\d)[LUDI]/g,'$1').replace(/(\d+)/,'第$&项').replace(/项\.(\d+)/g,'项中的第$1项')
				.replace(/[ij]U/g,'化上三角').replace(/[ij]L/g,'化下三角').replace(/[ij]D/g,'化对角阵').replace(/[ij]I/g,'化最简形')
				.replace(/^≈(\d+)/,'与第$1项交换').replace(/^\+=([\d,]+)/,'与第$1项合并').replace(/^\*=(.+)/,'提取公因子$1')
				.replace(/^Def/g,'按定义展开').replace(/^Sar/g,'按对角线法则展开').replace(/^Lap/g,'Laplace展开').replace(/^d/g,'主对角线元素相乘')
				.replace(/^a.\d+=.+/g, function(s){return '拆开'+Mtrx.note.PT(s.split('=')[0].substr(1))})
				.replace(/^Up/,'去括号')
				.replace(/^FVan/g,'是范德蒙行列式').replace(/^F.*cyc/g, function(s){'是'+'反b '[s[1].charCodeAt(0)-97]+'循环行列式'})
				.replace(/^PT.+/g, function(s){return Mtrx.note.PT(s.substr(2))})//.replace(/-?\d+\/\d+/g,function(s){return s});//pptd(s)
		}
	}
	
};

Mtrx.pt={
	p2A:function(p,n){//单个变换，返回相应初等矩阵	n是阶数
		return Mtrx.opr1('PT',Mtrx.build.I(n),p)[0]
	},
	ps2As:function(a,n){//根据变换命令数组，转换得到相应初等矩阵数组
		var A=[]
		for(var i=0;i<a.length;i++){
			A.push(Mtrx.opr1('PT',Mtrx.build.I(n),a[i])[0])
			
			
		}
		//var A=Arrf(function(t){Mtrx.opr1('PT',Mtrx.build.I(n),t)[0]}, a);	计算太耗时，不能使用Arrf，需用for
		return A
	},
	pinv:function(p){//单个变换，返回逆变换命令
		consolelog(p);
		var q='';
		if(/≈/.test(p)){
			q=p
		}else if(/[\+\-]=/.test(p)){
			q=p.replace(/×.+/,function(t){return '×'+neg(t.substr(1))})
		}else if(/[\/\*]=/.test(p)){
			q=p.replace(/=.+/,function(t){return '='+rcp(t.substr(1))})
		}
		return q
	},
	psinv:function(a){//根据变换命令数组，返回逆变换命令数组
		return Arrf(Mtrx.pt.pinv,a)
	},
	ps2invAs:function(a,n){//根据变换命令数组，得到相应逆变换初等矩阵数组
		return Mtrx.pt.ps2As(Mtrx.pt.psinv(a),n)
	},
};


/*

Jordan标准型
http://wenku.baidu.com/link?url=H0czQt5-dWKzdNpKxFmNelcdFalbVhtwmCrrWn77WP8ws-GU5eybaHrHaz7wTjuganKlfxA_1u9EfYON631XNEHR4Mw_pwh5GakT_x6k8_C

http://wenku.baidu.com/link?url=srskYWcBVSs6p29FWmJhdXTqV0G40L8U2q4bX6rE18B8e7HoUmQAPk65PVofGzF111QG8e17TebCorfgr2QbyelffwnwBLLC7nHMP-HOfT3

特征值多种性质
https://wenku.baidu.com/view/556a39263169a4517723a347.html

矩阵的特征值与特征向量的求法：亮点是增广矩阵同时求特征值、特征向量








*/
