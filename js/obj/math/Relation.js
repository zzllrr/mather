/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var Rlt={//关系 本质上也是集合
	/*存储方式 二维数组（存储索引，从0开始）的数组A=[[i1,j1],[i2,j2]]
		关系矩阵A.m = 
		前域A.src1
		陪域A.src2
	默认是二元关系，将来推广到三元、更多元
	*/

	build:{
		obj:function(arr,s,src,mtrx,src1,src2){//直接构造对象 src是集合 【arr和mtrx二选一】 src1前域 src2陪域 src=src1 ∪ src2
			//mtrx是布尔矩阵（元素仅为0或1）
			var A=[].concat(arr);A.t='Rlt';A.s=s||'';A.src=src||(src1?Set.opr2('∪',src1,src2):'');A.m=mtrx||'';
			if(src1){
				A.src1=Set.opr1('拷',src1);
				A.src2=Set.opr1('拷',src2);
			}
			if(!arr){
				return Rlt.fromMtrx(mtrx,A.src)
			}
			if(!mtrx){
				A.m=Rlt.toMtrx(A,A.src)
			}
			return A
		},
		I:function(src){//恒等关系
			var A=[],n=typeof src == 'number'?src:src.length;A.t='Rlt';A.s='I';A.src=src||'';A.m=Mtrx.build.I(n);
			for(var i=0;i<n;i++){
				A.push([i,i]);
			}
			return A
		},
		O:function(src){//空关系
			var A=[],n=typeof src == 'number'?src:src.length;A.t='Rlt';A.s='O';A.src=src||'';A.m=Mtrx.build.N(n,n,0);
			return A
		},
		A:function(src){//全域关系
			var A=[],n=typeof src == 'number'?src:src.length;A.t='Rlt';A.s='A';A.src=src||'';A.m=Mtrx.build.N(n,n,1);
			return A
		},
		N:function(src){//不等关系
			var A=[],n=typeof src == 'number'?src:src.length;A.t='Rlt';A.s='A';A.src=src||'';A.m=Mtrx.opr2('-',Mtrx.build.N(n,n,1),Mtrx.build.I(n));
			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
					if(i!=j){
						A.push([i,i]);
					}
				}
			}
			return A
		},
	},
	is:{//布尔逻辑
		b1:{//一元关系
			"I":function(A){return Mtrx.is.b1.I(A.m)},//是否为恒等关系
			"0":function(A){return A.length<1},//是否为空关系，如果用矩阵判断：空集上是空矩阵，非空集上是0矩阵
			"r":function(A){return Mtrx.opr1('tr',A.m)=A.m.length},//是否为自反关系
			"s":function(A){return Mtrx.is.b1.T(A.m)},//是否为对称关系
			"t":function(A){return Rlt.opr1('t',A).length==A.length},//是否为传递关系
		},
		b2:{//二元关系
			"=":function(A,B){
				return A.length==B.length && Mtrx.is.b2('=',A.m,B.m)
			},
			"≠":function(A,B){
				return !Rlt.is.b2['='](A,B)
			},	
			"⊆":function(A,B){
				var m=A.length,n=B.length,t=m<=n;
				if(!t){return 0}
				for(var i=0;i<m;i++){
					if(!Set.is.b2['∈'](A[i],B)){
						return 0
					}
				}
				return 1
			},
			"⊂":function(A,B){return +(A.length<B.length && Set.is.b2['⊆'](A,B))},
			"⊇":function(A,B){return +Set.is.b2['⊆'](B,A)},
			"⊃":function(A,B){return +(A.length>B.length && Set.is.b2['⊆'](B,A))},
			"⊄":function(A,B){return +(!Set.is.b2['⊂'](A,B))},
			"⊅":function(A,B){return +(!Set.is.b2['⊃'](A,B))},
			"⊈":function(A,B){return +(!Set.is.b2['⊆'](A,B))},
			"⊉":function(A,B){return +(!Set.is.b2['⊇'](A,B))},
		}
	},
	fromStr:function(s){
		//
		
		
		
	},
	toStr:function(A){
		var str=A.s||'',src=A.src;
		if(str){return str}
		str=[];
		for(var k=0;k<A.length;k++){
			var Ak=A[k],i=src[Ak[0]],j=src[Ak[1]];
			//其实需要将i,j进行toStr转换（如果是Mtrx，Set）
			//str+='<'+i+','+j+'>,';
			str.push('&lt;'+i+','+j+'&gt;');
		}
		return '{'+str.join()+'}'
	},

	fromMtrx:function(M,src){//关系矩阵
		var n=src.length,A=[];A.t='Rlt';A.s='';A.src=src;A.m=M;
		
		for(var i=0;i<M.length;i++){
			var mi=M[i],mil=mi.length;
			for(var j=0;j<mil;j++){
				if(M[i][j]){
					A.push([i,j])
				}
			}
		}
		return A
	},
	toMtrx:function(A,src){//关系矩阵
		var ts=typeof(A);
		if(ts=='string'){
			return 
		}
		if(A.m){
			return A.m
		}
		var n=src.length,M=Mtrx.build.N(n,n,0,true);
		
		for(var k=0;k<A.length;k++){
			var Ak=A[k];
			M[Ak[0]][Ak[1]]=1;
		}
		return M
	},

	opr1:function(op,R){//一元运算
		var S;
		if(op=='拷'){
			S=[].concat(R);
			S.t='Rlt';
			S.s=R.s||'';
			S.src=Set.opr1('拷',R.src);
			if(R.src1){
				S.src1=Set.opr1('拷',R.src1);
			}
			if(R.src2){
				S.src2=Set.opr1('拷',R.src2);
			}
			S.m=Mtrx.opr1('拷',R.m);
		}
		if(/^[DR]$/.test(op)){//定义域 值域
			S=Set.opr1('拷',R.src);
			var B=[],n=R.length;
			for(var i=0;i<n;i++){
				B.push(R[i][+(op=='R')])
			}
			return Set.opr2('取',S,B)
		}
		if(/^[前陪]$/.test(op)){//前域 陪域
			return Set.opr1('拷',R['src'+(1+(op=='陪'))]||R.src);
		}
		if(op=='逆'){
			S=Rlt.opr1('拷',R);
			S.m=Mtrx.opr1('T',S.m);
			for(var i=S.length-1;i>-1;i--){
				S[i].reverse();
			}
		}
		if(op=='r'){//自反闭包
			S=Rlt.opr1('拷',R);
			if(Rlt.is.b1('r')){
				return S
			}
			var Sm=S.m, n=Sm.length;
			for(var i=0;i<n;i++){
				if(!Sm[i][i]){
					Sm[i][i]=1;
					S.push([i,i]);
				}
			}
			//S.m=Mtrx.opr1('+',Sm,Mtrx.build.I(n));
			//Rlt.opr1('r',Rlt.build.obj([[1,2],[1,1]],'',['a','b','c']))

		}
		if(op=='s'){//对称闭包
			S=Rlt.opr1('拷',R);
			if(Rlt.is.b1('s')){
				return S
			}
			var Sm=S.m, n=Sm.length;
			for(var i=0;i<n;i++){
				for(var j=i+1;j<n;j++){
					if(Sm[i][j]+Sm[j][i]==1){
						if(Sm[i][j]){
							Sm[j][i]=1;
							S.push([j,i]);
						}else{
							Sm[i][i]=1;
							S.push([i,i]);
						}
					}
				}
			}
		}
		if(op=='t'){//传递闭包 直接求闭包，并没有判断是否满足传递关系
			S=Rlt.opr1('拷',R);
			var Sm=S.m, n=Sm.length;
			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
					if(i!=j && Sm[i][j]){
						for(var k=0;k<n;k++){
							if(Sm[j][k] && !Sm[i][k]){
								Sm[i][k]=1;
								S.push([i,k]);
							}
						}
					}
				}
			}
		}

		if(op=='COV'){//Cover 盖住关系 覆盖关系
			S=Rlt.opr1('拷',R);
			var Sm=S.m, n=Sm.length;
			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
					if(Sm[i][j]){
						if(i==j){
							Sm[i][j]=0;
						}else{
							for(var k=0;k<n;k++){
								if(Sm[j][k] && !Sm[i][k]){
									Sm[i][k]=1;
									S.push([i,k]);
								}
							}
						}
						
					}

				}
			}
		}



		if(op=='hasse'){//哈斯图精简掉自反、传递中介关系
			S=Rlt.opr1('拷',R);
			var Sm=S.m, n=Sm.length,Sn=S.length;
			for(var i=0;i<Sn;i++){
				var Si=S[i];
				if(Si[0]==Si[1]){//自反
					Sm[Si[0]][Si[0]]=0;
					S.splice(i,1);
					i--;
					Sn--;
				}
				
			}
/*
			for(var i=0;i<n;i++){
				if(Sm[i][i]){//对角线清空
					Sm[i][i]=0;
				}
			}
*/
			

			for(var i=0;i<n;i++){//去除传递中介
				for(var j=0;j<n;j++){
					if(Sm[i][j]){
						for(var k=0;k<n;k++){
							if(Sm[j][k] && Sm[i][k]){//有共同的上界，去掉长边
								for(var t=0;t<Sn;t++){
									if(S[t].join()==[i,k].join()){
										S.splice(t,1);
										break;
									}
								}
								
								
								Sm[i][k]=0;
								Sn--;
								break;
							}
						}
						for(var k=0;k<n;k++){
							if(Sm[i][k] && Sm[k][j]){//有传递介质，去掉本身
								for(var t=0;t<Sn;t++){
									if(S[t].join()==[i,j].join()){
										S.splice(t,1);
										break;
									}
								}
								Sm[i][j]=0;
								Sn--;
								break;
							}
						}
					}
				}
			}


		}
		
		
		return S
	},

	opr2:function(op,A,B){//二元运算
		var C=[],m=A.length,n=B.length,Cs=[];C.t='Rlt';
		if(/[=≠∈∉∋∌⊂⊄⊃⊅⊆⊈⊇⊉]/.test(op)){
			return rltBool2[op](A,B)
		}
		if(op=='∘'){
			
			
		}


		return C
	}
};
