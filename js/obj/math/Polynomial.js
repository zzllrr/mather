/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var Plnm={//多项式 本质上是一维数组（行向量，n列）升幂
	//A.t='Polynm';A.d=第0项次数（默认是0）

	build:{//直接构造
		F:function(a,m){//形式∑aix^i
			var A=[];A.t='Polynm';
			for(var i=0;i<m;i++){
				A.push(a+sub((i+1)+''+(j+1)))	//sci lp
			}
			return A
		},
		I:function(m,n){//单位向量 m指定第几列为1 n指定维数
			var A=[];A.t='Polynm';
			for(var j=0;j<n;j++){
				A[i].push(+(j+1==m))
			}
			return A
		},
		N:function(n,k,k2num){//全为k的n维向量	k2num指定转换为数字
			var A=copyA(k2num?+k:k,n);A.t='Polynm';
			return A
		},
		D:function(arr){/* 直和		拼接新向量
			*/
			var A=[];A.t='Polynm';
			for(var k=0;k<arr.length;k++){
				var ak=arr[k],akn=ak.length;
				for(var j=0;j<akn;j++){
					A.push(ak[j])
				}
			}
			return A
		},
		replace:function(V,arr,j){/* 替换向量中的部分列（从第j列开始），构成新向量
			*/
			var A=Polynm.opr1('拷',V);
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
			"⊂":function(A,B){return +(!Polynm.is.b2['='](A,B) && Polynm.is.b2['⊆'](A,B))},
			"⊇":function(A,B){return +Polynm.is.b2['⊆'](B,A)},
			"⊃":function(A,B){return +(!Polynm.is.b2['='](A,B) && Polynm.is.b2['⊆'](B,A))},
			"⊄":function(A,B){return +(!Polynm.is.b2['⊂'](A,B))},
			"⊅":function(A,B){return +(!Polynm.is.b2['⊃'](A,B))},
			"⊈":function(A,B){return +(!Polynm.is.b2['⊆'](A,B))},
			"⊉":function(A,B){return +(!Polynm.is.b2['⊇'](A,B))},
		}
	},
	fromStr:function(s){
		var A,m,n,ij,e;

		if(/^c?diag\(/.test(s)){
			//var D=eval('['+s.replace(/ +/g,' ').trim().substr(5,s.length-6)+']');
			var isC=/^c/.test(s), D=s.substr(+isC+5,s.length-6-(+isC)).split(',');
			return Polynm.build.D(D,isC);
		}else{
			e=s.replace(/ +/g,' ').trim().replace(new RegExp('['+SBS.SupSub[1]+']+,*['+SBS.SupSub[1]+']*'),'').replace(/^\[|\]$/g,'');
			ij=sub2n(s.replace(/ +/g,' ').trim().substr(e.length+2*(+/\[/.test(s)))).split(',');
			m=+ij[0]||1;
			n=ij.length<2?m:+ij[1];
//console.log(e);
//console.log(ij);
			if(/[ ;]/.test(e)){
				A=e.split(';');
				m=A.length;
				for(var i=0;i<m;i++){
					A[i]=ZLR(A[i])
				}
				A.t='Polynm';
			}else if(/[ij]/.test(e)){//f(i,j)表达式形式
				A=Polynm.build.N(m,n,0);
				var d=Str2dom.arith(e);
				for(var i=0;i<m;i++){
					for(var j=0;j<n;j++){
						A[i][j]=+Calc["计算器"](d,true,{"i":i+1,"j":j+1})[1];
					}
				}
			}else{//（拟）单位矩阵I、零矩阵O、元素相同矩阵[2]
				A=Polynm.build[/I/.test(e)?'I':'N'](m,n,/O/.test(e)?0:e,!isNaN(e))
			}

		}
		return A
	},

	toStr:function(A,typ){//转成文本
		/* type输出类型
			txt纯文本 \t \n
			Polynm矩阵形式（默认）
			det行列式形式
			soft常用软件输入形式, ;
		*/
		
//console.log(A,A[0]);
		var type=typ||(A.typ?A.typ:'Polynm'),txt=type=='txt',sft=type=='soft',a=txt||sft?'':SC+'"inblk '+type+'">',b=txt||sft?'':sc,n=A.length,m=A[0].length,sepc=txt?'\t':(sft?',':''),sepr=txt?'\n':(sft?';':''),r=[];
		if(txt||sft){
			for(var i=0;i<n;i++){
				r.push(A[i].join(sepc))
			}
			return r.join(sepr);
		}else{
			//console.log(A);
			return a+Table(A,'bd0 alignc')+b
		}

	},

	opr1:function(op,A,p){
//向量一元运算 p是可选参数
console.log(op,A,p);
//console.log('p ',p);
		var B=[],n=A.length,ar=arguments, arl=ar.length; B.t='Polynm';


		if(op=='eval'){//化简计算结果
			//初期先实现纯常量计算。后期实现符号计算
			for(var j=0;j<n;j++){
				B.push(Calc['计算器'](A[j])[1])	//eval(A[j])
			}

		}

		if(op=='-'){//负向量
			for(var j=0;j<n;j++){
				B.push(nOpr2('*',-1,A[j]))
			}
		}

		if(op=='因式分解'){//
			return sqrt(ArrfcA([nadd,square],[1,-3,4]))
		}

		if(op=='单位化'){//向量除以模
			return Polynm.opr2('/',A,Polynm.opr1('模',A))
		}
		
		if(op=='拷'){
			for(var j=0;j<n;j++){
				B.push(A[j])
			}
		}
		return B
		
	},
		
	opr2:function(op,A,B){
//向量二元运算
//当A、B中有1个是向量，另一个是数字，则对矩阵作相应的位操作
//求负向量 opr2('-',0,B) opr2('*',A,-1) opr2('*',-1,B) opr2('/',A,-1)
//console.log(op,A,B);
		var C=[],AA=A instanceof Array,BB=B instanceof Array,Ar=A.length,Br=B.length,ars=$.makeArray(arguments).slice(1),arl=ars.length;
		C.t='Polynm';


		if(op=='∔'){//直和 拼接为新向量
			return Polynm.build.D(ars)
		}

		if(op=='/' && AA && BB){//向量除法 	不规范的定义：线性相关时，得到倍数；线性无关时，如何定义？
			
			
			C=Polynm.opr1('*',B,Polynm.opr1('逆',A));
		}else if(/^[\*\/\+\-]$/.test(op)){//四则运算
			var N;
			if(op=='/' && BB){
				N=Polynm.opr1('逆',B);
			}else{
				N=B
			}
			if(AA && BB){
				if(/[\+\-]/.test(op)){//矩阵加减（行列数要一致）
					C=Polynm.opr2('.'+op,A,B)
				}else if(op=='^'){//幂 这里是二元幂A^B，需要改写定义
		//矩阵的矩阵幂（得到分块矩阵，与Kronecker积思路类似）
					//C=

				}else{//向量乘除  	内积

					var a=0;
					for(var k=0;k<Ar;k++){
						a=nOpr2('+',a,nOpr2('*',A[k],N[k]))
					}
					C.push(a)
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
						C[i].push(nOpr2(AA && op=='/'?'/':(/[\+\-\^]/.test(op)?op:'*'),M[i][j],m))
					}
				}
			}
		}
		if(/\.[\*\/\^\+\-]/.test(op)){//向量之间点乘、点除、点幂		//点加、点减，就是普通的向量加减；点乘就是点积

			for(var j=0;j<n;j++){
				C.push(nOpr2(op[1],A[i][j],B[i][j]))
			}

		}

		return arl<3?C:Polynm.opr2.apply(null,[op,C].concat(ars.slice(2)));
		//return arl<3?C:Arrf(function(x,y){return Polynm.opr2(op,x,y)},ars,'cp2')
	}
	
};

