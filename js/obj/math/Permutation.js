/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var Perm={//置换 本质上是一维数组（行向量，n列）
	//A.t='Perm';

	build:{//直接构造

		I:function(m){//单位恒等置换 m指定元素数
			var A=seqA(1,m);A.t='Perm';
			return A
		},
		C:function(CA,m){//轮换 m指定元素数
			var A=seqA(1,m),n=CA.length;A.t='Perm';
			for(var i=0;i<n;i++){
				var CAi=CA[i];
				A[CAi-1]=CA[(i+1)%n]

			}
			return A
		},
		replace:function(V,arr,j){/* 替换向量中的部分列（从第j列开始），构成新向量
			*/
			var A=Perm.opr1('拷',V);
			for(var k=0;k<arr.length;k++){
				A[j-1+k]=arr[k]
			}
			return A
		}
	},
	is:{//布尔逻辑
		b1:{//一元关系
			"I":function(A){return +/^(0,)*1(,0)*$/.test(A)},//是否为单位向量
			"0":function(A){return +(A.length<1 || /^(0,)*0$/.test(A))},//是否为零或空数组
			
		},
		b2:{//二元关系
			"=":function(A,B){
				return +(A.join()==B.join())
			},
			"≠":function(A,B){
				return +(A.join()!=B.join())
			},
			"n=":function(A,B){//判断是否维数一致
				return +(A.length==B.length)
			},

			"⊆":function(A,B){//定义（同维）向量的包含关系：前者非零元，与后者相应位置的元都相等
				var n=A.length;
				if(n!=B.length){return 0}
				for(var j=0;j<n;j++){
					var Aj=A[j];
					if(Aj && Aj!=B[j]){
						return 0
					}
				}
				return 1
			},
			"⊂":function(A,B){return +(!Perm.is.b2['='](A,B) && Perm.is.b2['⊆'](A,B))},
			"⊇":function(A,B){return +Perm.is.b2['⊆'](B,A)},
			"⊃":function(A,B){return +(!Perm.is.b2['='](A,B) && Perm.is.b2['⊆'](B,A))},
			"⊄":function(A,B){return +(!Perm.is.b2['⊂'](A,B))},
			"⊅":function(A,B){return +(!Perm.is.b2['⊃'](A,B))},
			"⊈":function(A,B){return +(!Perm.is.b2['⊆'](A,B))},
			"⊉":function(A,B){return +(!Perm.is.b2['⊇'](A,B))},
		}
	},
	fromStr:function(s){
		//两种输入：直接：12345相应的新号、轮换乘积()()n
		var str2A=function(t){
			return Arrf(function(x){return +x},t.replace(/\(|\)/g,'').split(/[ ,]/.test(s)?/[ ,]/:''))
		},A;

		if(/\(/.test(s)){//轮换乘积
			var ones=!/[ ,]/.test(s),Cs=s.match(/\([^\)]+\)/g),n=Cs.length,m=+s.replace(/.+\)/,'')||max(s.replace(/\D/g,ones?'':' ').split(ones?'':/[ ,]/));
			if(n<2){
				return Perm.build.C(str2A(Cs[0]),m)
			}else{
				A=seqA(1,m);
				for(var i=0;i<n;i++){
					A=Perm.opr2('*',[A,Perm.build.C(str2A(Cs[i]),m)])
				}
			}

		}else{
			A=str2A(s);
		}
		A.t='Perm';
		return A
	},

	toStr:function(A,typ){//转成文本
		/* typ输出类型
			txt纯文本 \t \n
			Perm矩阵形式（默认）
			CT 轮换或对换乘积	cyclic permutation循环置换,轮换	transposition 对换

		*/
		
//console.log(A,A[0]);
consolelog(A,typ);
		var type=typ||(A.typ?A.typ:'Perm'),txt=type=='txt',sft=type=='soft',n=2,m=A.length,sepc=txt?'\t':(sft?',':''),sepr=txt?'\n':(sft?';':''),r=[];
		if(txt||sft){
			for(var i=0;i<n;i++){
				r.push((i?A:seqA(1,m)).join(sepc))
			}
			return r.join(sepr);
		}else{
			consolelog(A,type);
			if(type=='CT'){//A是二维数组

				for(var i=0;i<m;i++){
					r.push('('+A[i].join(' ')+')')
				}
				return r.join('')
			}
			return lrp('',zarray([seqA(1,m),A]),'','')
		}

	},

	opr1:function(op,A,p){
//向量一元运算 p是可选参数
consolelog(op,A,p);
//console.log('p ',p);
		var B=[],n=A.length,ar=arguments, arl=ar.length; B.t='Perm';

		if(op=='奇偶性'){


		}
		if(op=='逆'){
			for(var i=0;i<n;i++){
				B.push(A.indexOf(i+1)+1)
			}
		}
		if(op=='阶'){//置换写成不交轮换的乘积,然后置换的阶就是每个轮换的阶(即长度）的最小公倍数
			return lcm(Arrf(function(t){return t.length},Perm.opr1('轮换分解',A)))
		}
		if(op=='轮换分解'){
			B.t='CT';
			var C=[];
			
			for(var i=0;i<n;i++){
				if(C.length==n){break}
				var Ai=A[i];
				if(Ai>i+1 && C.indexOf(Ai)<0){
					var Bi=[i+1,Ai],b=1;
					C.push(i+1,Ai);
					while(b){
						var Aj=A[Bi.slice(-1)[0]-1];
						if(Aj!=Bi[0]){
							Bi.push(Aj);
							C.push(Aj);
						}else{
							break;
						}
					}
					B.push(Bi)
				}
			}
		}
		if(op=='对换分解单个轮换'){
			for(var i=0;i<n-1;i++){
				B.unshift([A[i],A[(i+1)%n]])
			}
		}
		if(op=='对换分解'){
			var C=Perm.opr1('轮换分解',A),cn=C.length;
			for(var i=0;i<cn;i++){
				B=B.concat(Perm.opr1('对换分解单个轮换',C[i]))
			}

		}
		if(op=='拷'){
			for(var j=0;j<n;j++){
				B.push(A[j])
			}
		}
		return B
		
	},
		
	opr2:function(op,A){
		//置换二元运算
		var C=[],l=A.length,n=A[0].length;
		C.t='Perm';


		if(op=='*'){/*置换乘积	从右往左运算
			相当于第1行为原始序号
			第2行是B
			第3行是以B为序号，从A中查找相应值
			得到结果为新置换值
			*/
			C=Perm.opr1('拷',A[l-1]);
			for(var i=0;i<n;i++){
				var a=A[l-2][i];
				if(a!=i+1){
					C[C.indexOf(i+1)]=''+a;
				}
			}
			C=Arrf(Number, C);
			return l<3?C:Perm.opr2('*',[].concat(A.slice(0,l-2),C));
		}
		if(op=='^'){//置换幂，反复左乘A
			C=Perm.opr1('拷',A[0]);
			for(var i=0;i<A[1];i++){
				C=Perm.opr2('*',[A[0],C]);
			}
			return C
		}



	}


//下列涉及排列组合函数

},Fact=function(n){//阶乘		factorial
	var t=+n||0;
	if(t<=0){t=1}
	return t==1?1:Fact(t-1)*t
		
},Fact2=function(n){//双阶乘
	var t=+n||0;
	if(t<=0){t=1}
	return t==1?1:Fact2(t-2)*t
		
},Permut=function(n,m){//排列数
	var t=+n||0,s=+m||0,v=1;
	for(var i=s;i>0;i--){
		v*=t--
	}
	return v
},Combin=function(n,m){//组合数
	var t=+n||0,s=+m||0;
	if(t==s){return 1}
	if(t<s || t<0 || s<0){return 0}
	if(t<s*2){
		return Combin(t,t-s)
	}
	
	if(s==0){
		return 1
	}
	
	return Permut(n,m)/Fact(m)

},FactN=function(n){//阶乘，全排列索引【n只允许是个位数，两位数运算量太大】	从1开始计数
	if(n>9){
		return 0
	}
	var t=+n||0,a=[];
	if(t<=1){return ['1']}
	var s=FactN(t-1);
	for(var j=0;j<=s[0].length;j++){
		for(var i=0;i<s.length;i++){
			a.push(s[i].substr(0,j)+n+s[i].substr(j))
		}
	}
	return a

},PermutN=function(n,m,A){//生成排列数索引 [,,,]+	A过滤条件数组[列号（从1开始编号）,[条件数组（正数表示肯定，负数表示否定，从1开始编号）]]+：[[3,[1,2]],[6,[-1,-2]], [4,-1]]	
//	【n一般只允许是个位数，两位数运算量太大】		返回索引，从0开始计数
	if(m>9){
		return 0
	}
    var t=[],P=[],ms=FactN(m),CN=CombinN(n,m);

	if(m==0){
		return []
	}
	if(m==1){
		return seqA(0,n)
	}

	Arrf(function(j){//组合数索引中的1条
		Arrf(function(k){//全排列索引中的1条
			var jk=Arrf(function(s){return j[+s-1]},k.split(''));
			if(A){
				for(var ai=0;ai<A.length;ai++){
					var Ai=A[ai],Ai0=Ai[0]-1,Ai1=Ai[1],Ai1A=isArr(Ai1),ji=jk[Ai0],neg=Ai1A && Ai1[0]<0 || !Ai1A && Ai1<0;
					
					if(neg && (Ai1A && Ai1.indexOf(-ji-1)>-1 || !Ai1A && ji==-Ai1) || !neg && (Ai1A && Ai1.indexOf(ji+1)<0 || !Ai1A && ji!=Ai1)){
						return 
					}
				}
			}
			P.push(jk)
			},ms);
		},CN);

	return P.sort()

},CombinN=function(n,m){//生成组合数索引 [,,,]+		从0开始计数
	var t=[];
	if(m==0){
		return []
	}
	if(m==1){
		return seqA(0,n)
	}
	Arrf(function(i){
		t=t.concat(Arrf(function(j){return [i].concat(Arrf(function(k){return k+i+1},j))},CombinN(n-1-i,m-1)));
	},seqA(0,n-m+1));
	return t


},RandomPermutN=function(n,m){//生成随机排列数索引（有顺序）
	
},RandomCombinN=function(n,m){//生成随机组合数索引（无顺序）
	var a=[];
	while(a.length<m){
		var t=Random(n);
		if(a.indexOf(t)<0){
			a.push(t)
		}
	}
	return a

},RandomCombinA=function(A,m){//生成某个集合的随机组合子集（随机选m个元素）
	return ArrI(A,RandomCombinN(A.length,m),1)





//下列涉及排列逆序数

},nInvOrder=function(A){//逆序数
	var a=0,n=A.length;
	for(var i=0;i<n;i++){
		var Ai=+A[i];
		for(var j=i+1;j<n;j++){
			if(+A[j]<Ai){
				a++;
			}
		}
	}
	return a

},nInvOrder_=function(A){//逆序数奇偶性，得出正负符号
	
	return 1-2*(nInvOrder(A)%2)



};

