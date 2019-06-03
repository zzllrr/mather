/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

solve[2110]=function(){
	var i0=$('#input0'),v=i0.val().replace(/\\\\/g,'').trim(), t=$('#subject2').val(), tasks=$('#solveGround .task.seled'), levels=$('#solveGround .level.seled'), stls=[], rS=[],
	str='', VA=v.split('\n'), n=VA.length, strA=fCC(seqA(65,n)).split(''), strB=fCC(seqA(945,n)).split('');
	tasks.each(function(){
		stls.push($(this).attr('data-tool').replace(/^\$.+\$$/,''))
	});
	var sel=function(x,p,pp,ppp){
		return stls.indexOf(x)>-1 && (p?levels.last().attr('data-i')==p:1) && (pp?levels.eq(-2).attr('data-i')==pp:1) && (ppp?levels.eq(-3).attr('data-i')==ppp:1)
	};

	if(/Permutation/.test(t)){

		var strA=fCC(seqA(963,n)).split(''),f=function(x){return PtS(Perm.opr1('轮换分解',x),'CT')};
		
			console.log(stls, strA);
		if(sel('σ')){
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					var A=PfS(t), B=PtS(A), C=f(A);
					return ' = '+ B +(!C || B==C?'':' = '+C)
			},VA)));
			
		}
		if(sel('Inversion Number')){
			console.log(strA);
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					var A=PfS(t);
					return gM('Inversion Number')+' = '+nInvOrder(A)
			},VA)));
		}
		if(sel('奇偶性')){
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					var A=PfS(t);
					return '奇偶性 = '+'偶奇'[nInvOrder(A)%2]
			},VA)));
		}
		

		if(sel('轮换分解')){
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					var A=PfS(t), B=Perm.opr1('轮换分解',A);
					return ' = '+PtS(B,'CT')
			},VA)));
		}
		
		
		if(sel('对换分解')){
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					var A=PfS(t), B=Perm.opr1('对换分解',A);
					return ' = '+PtS(B,'CT')
			},VA)))
		}
		
		if(sel('|σ|')){
			rS=rS.concat(concat(copyA('|',n),strA,
				Arrf(function(t){
					var A=PfS(t), B=Perm.opr1('阶',A);
					return '| = '+B
			},VA)))
		}
		
		if(sel('σ^{-1}')){
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					var A=PfS(t), B=Perm.opr1('逆',A);
					return '^{-1} = '+PtS(B)+' \\\\ '+f(A)+'^{-1} = '+f(B)
			},VA)))
		}
		if(sel('στ')){

			var A=Arrf(PfS,VA), C=Perm.opr2('*',A);
			rS.push(eqv([n<5?strA.join(''):prod('i',1,n,'σ_i','',''),PtS(C)]), eqv([Arrf(f,A).join(''),f(C)]));
		}
		if(sel('τσ')){

			var A=Arrf(PfS,VA.reverse()), C=Perm.opr2('*',A);
			rS.push(eqv([n<5?strA.join(''):prod('i',n,1,'σ_i','',''),PtS(C)]), eqv([Arrf(f,A).join(''),f(C)]));
		}
		
		
		if(sel('σ^n')){
			rS=rS.concat(
				Arrf(function(t){
			var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=PfS(t);
					return kxA(Arrf(function(k){
						var C=Perm.opr2('^',[M,k]);

						return PtS(M)+sup(k,'')+' = '+PtS(C)+'\\\\ '+f(M)+sup(k,'')+' = '+f(C)
						},seqsA(ij)))
				},VA)
			);
		}
		
		
		if(sel('奇偶排列求ij')){//置换（含ij未知数）&奇1偶2
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'2',odd=ij=='1',
						tA=PfS(t), n=tA.length, A=seqA(1,n),C=Set.opr2('-',A,tA),
						t1=t.replace('i',C[0]).replace('j',C[1]), t2=t.replace('i',C[1]).replace('j',C[0]),
						B1=PfS(t1),B2=PfS(t2),n1=nInvOrder(B1),n2=nInvOrder(B2),k=+(odd && n1%2 || !odd && n1%2==0);
					return kxA([t1+' = '+PtS(B1),'逆序数 = '+n1+', 是'+'偶奇'[n1%2]+'排列',
							t2+' = '+PtS(B2),'逆序数 = '+n2+', 是'+'偶奇'[n2%2]+'排列',
							'因此i='+C[1-k]+', j='+C[k]])
			},VA));
		}

	}


	if(/Vector/.test(t)){

		if(sel('Row Vector')){
			rS=rS.concat(concat(strB,
				Arrf(function(t){
					var A=MfS(t,'v');
					return ' = '+Mtrx.toStr(A,'v')
			},VA)));
		}
		if(sel('Column Vector')){
			rS=rS.concat(concat(strB,
				Arrf(function(t){
					var A=MfS(t,'v');
					return ' = '+Mtrx.toStr(A,'v')+'^T'
			},VA)));
		}

		if(sel('|\\vec{a}|')){
			rS=rS.concat(concat('|',strB,
				Arrf(function(t){
					var A=MfS(t,'v');
					return '| = '+Mfn.toStr(Mtrx.opr1('向量模1',A))
			},VA)));
		}
		if(sel('|\\vec{a}|^2')){
			rS=rS.concat(concat('|',strB,
				Arrf(function(t){
					var A=MfS(t,'v');
					return '|^2 = '+Mfn.toStr(Mtrx.opr1('向量模1',A,2))
			},VA)));
		}

		if(sel('\\frac{\\vec{a}}{|\\vec{a}|}')){

			rS=rS.concat(Arrf(function(t,i){
				var A=MfS(t,'v'), C=Mtrx.opr1('单位化1',A);
				return frac(strB[i],'|'+strB[i]+'|','')+' = '+Mtrx.toStr(C)
			},VA));

		}
		if(sel('α‧β') || sel('(α,β)')){
			var A=MfS(VA[0],'v'), B=MfS(VA[1],'v'), C=Mtrx.opr2('内积',A,B);
			rS=rS.concat(
				'α='+Mtrx.toStr(A,'v')+'^T, β='+Mtrx.toStr(B,'v')+'^T',
				'α‧β = (α,β) = '+C
			);
		}
		if(sel('向量夹角')){
			var A=MfS(VA[0],'v'), B=MfS(VA[1],'v'), C=Mtrx.opr2('内积',A,B),
				a=Mtrx.opr1('向量模1',A), b=Mtrx.opr1('向量模1',B), ab=Times([a,b]), c=divide([C,times([a,b])]);
			console.log(a,b,ab);
			rS=rS.concat(
				'α='+Mtrx.toStr(A,'v')+'^T, β='+Mtrx.toStr(B,'v')+'^T',
				'|α|='+Mfn.toStr(a)+', |β|='+Mfn.toStr(b)+', (α,β) = '+C,
				'\\cosθ='+frac('(α,β)','|α||β|','')+'='+frac(C,ab.toStr(1),'')+'='+Mfn.toStr(c),
				'则θ= °'
				
			);
		}
		if(sel('α×β')){
			var A=MfS(VA[0],'v'), B=MfS(VA[1],'v');
			rS=rS.concat(
				'α='+Mtrx.toStr(A,'v')+'^T, β='+Mtrx.toStr(B,'v')+'^T',
				'α×β = '
			);
		}
		if(sel('混合积')){
			var A=MfS(VA[0],'v'), B=MfS(VA[1],'v'), C=MfS(VA[2],'v');
			rS=rS.concat(
				'a='+Mtrx.toStr(A,'v')+'^T, b='+Mtrx.toStr(B,'v')+'^T, c='+Mtrx.toStr(C,'v')+'^T',
				'a⋅(b×c) = '
			);
		}
		if(sel('双重矢性积')){
			var A=MfS(VA[0],'v'), B=MfS(VA[1],'v'), C=MfS(VA[2],'v');
			rS=rS.concat(
				'a='+Mtrx.toStr(A,'v')+'^T, b='+Mtrx.toStr(B,'v')+'^T, c='+Mtrx.toStr(C,'v')+'^T',
				'a×(b×c) = '
			);
		}
	}




	if(/Matrix/.test(t)){
/*
[λ-3 1 3 -1;1 λ-3 -1 3;-3 1 λ+3 -1;1 -3 -1 λ+3]&j4+=i1	
*/
	
//Display

		if(sel('A')){
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					return '='+Mtrx.toStr(MfS(t))
			},VA)));
		}
		if(sel('|A|','Display')){
			rS=rS.concat(concat(Arrf(function(t){return zp(t,'||')},strA),
				Arrf(function(t){
					return '='+kdet(MfS(t))
			},VA)));
		}
		if(sel('Block')){
			rS=rS.concat(
				Arrf(function(t){
					var ij=t.split(/&/)[1]||'r2c2', M=MfS(t), A=Mtrx.opr1('parts',M,ij);
					return A
			},VA));
				//	consolelog(rS);
		}

		if(sel('表示成三元组')){
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					return ' 三元组表示：'+kmtrx(Mtrx.opr1('3',MfS(t)))
			},VA)));
		}


//Unary Operation

		if(sel('Normalize','Gram-Schmidt')){

			rS=rS.concat(Arrf(function(t){
				var M=MfS(t), A=Mtrx.opr1('单位化',M);
					
				return kmtrx(A)
			},VA));

		}

		if(sel('Orthogonalize','Gram-Schmidt') || sel('Gram-Schmidt','Gram-Schmidt')){

			rS=rS.concat(Arrf(function(t){
				var M=MfS(t), A=Mtrx.opr1('正交化',M, sel('Gram-Schmidt','Gram-Schmidt'));

				return A[1]
			},VA));

		}


		if(sel('Boolean')){
			rS=rS.concat(
				Arrf(function(t){
					return kmtrx(Mtrx.opr1('bool',MfS(t)))
			},VA));
		}

		if(sel('-Boolean')){
			rS=rS.concat(
				Arrf(function(t){
					return kmtrx(Mtrx.opr1('-',MfS(t),'bool'))
			},VA));
		}
		
		

		if(sel('A^T')){
			rS=rS.concat(concat(strA,copyA('^T = ',n),
				Arrf(function(t){
					return kmtrx(Mtrx.opr1('T',MfS(t)))
			},VA)));
		}
		if(sel('A^H')){
			rS=rS.concat(concat(strA,copyA('^H = ',n),
				Arrf(function(t){
					return kmtrx(Mtrx.opr1('H',MfS(t)))
			},VA)));
		}

		if(sel('-A')){
			rS=rS.concat(concat(copyA('-',n),strA,
				Arrf(function(t){
					return '='+kmtrx(Mtrx.opr1('-',MfS(t)))
				},VA))
			);
		}


		if(sel('A_{ij}') || sel('A^*')){/*矩阵&i1,j2;i1,i2,j1,j2;
			1,3（1阶子式）;
			1,2,1,2（2阶子式）
			i1,i2（C_n^2个2阶子式）
			*/
			var Tbl=function(A){
				return kfrac(ztable([['元素（或子式）','余子式','符号','代数余子式']].concat(
				Arrf(function(s){
					var d=Mtrx.opr1('detPTs',s[0],'iU=;d;=')[0],l=s[3].length,ij=l>2?s[3].slice(0,l/2).join(',')+';'+s[3].slice(l/2).join(','):s[3].join(''),
						IJ=ij.replace(';','×'), es0=s[0], es1=s[1];

					return ['a_{'+IJ+'}=' +(isArr(es1)?kdet(es1):es1),
						'M_{'+IJ+(isArr(es0)?'} = '+kdet(es0):'}')+'='+d,

						'+-'[+(s[2]<0)],
						'A_{'+IJ+'} = '+times([d,s[2]]),
						]
				},A))),1)
			};
			
			if(sel('A^*')){
				rS=rS.concat(concat(strA,copyA(sup('*',''),n),
					Arrf(function(t){
						var M=MfS(t),ml=M.length, A=Mtrx.opr1('Aijs',M,zlr('i',seqA(1,ml).join(' '),';'));
						return '='+kmtrx(Mtrx.opr1('*',M))+Tbl(A);
				},VA)));
			}
			if(sel('A_{ij}')){
				rS=rS.concat(concat(copyA('矩阵',n), strA,copyA('=',n),
					Arrf(function(t){
						var hasP=/&/.test(t),ij=(hasP?t.replace(/.+&/,''):'i1'), M=MfS(t), A=Mtrx.opr1('Aijs',M,ij);
						return kmtrx(M)+Tbl(A);

				},VA)));
			}
		}

		if(sel("$kxf('r')$(A)")){

			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'iE=', M=MfS(t), A=Mtrx.opr1('rankPTs',M,ij);
				return A[1]
			},VA));
		}

		if(sel("$kxf('tr')$(A)")){
			rS=rS.concat(concat(copyA(kxf('tr')+'(',n), strA,
				Arrf(function(t){
					return ')='+kfrac(Mtrx.opr1('tr',MfS(t)),1)
			},VA)));
		}


// Matrix & Number


		if(sel('数加')){//矩阵&数字
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'0', M=MfS(t), A=Mtrx.opr2('+',M,ij);
					return kmtrx(M)+' + ['+ij+']_{'+M.length+'}='+kmtrx(A)
				},VA)
			);
		}
		if(sel('数减')){//矩阵&数字
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'0', M=MfS(t), A=Mtrx.opr2('-',M,ij);
					return kmtrx(M)+' - ['+ij+']_{'+M.length+'}='+kmtrx(A)
				},VA)
			);
		}
		if(sel('数乘')){//矩阵&数字
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t), A=Mtrx.opr2('*',M,ij);
					return ij+kmtrx(M)+'='+kmtrx(A)
				},VA)
			);
		}
		if(sel('数除')){//矩阵&数字
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t), A=Mtrx.opr2('/',M,ij);
					return kmtrx(M)+'/'+ij+'='+kmtrx(A)
				},VA)
			);
		}
		if(sel('数幂')){//矩阵&数幂 	每个元素求同样的幂
			rS=rS.concat(
				Arrf(function(t){
					//var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t), A=Mtrx.opr1('.^',M,ij);

					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t);
					return kxA(Arrf(function(k){
							return kmtrx(M)+'^{..'+k+'}(数幂)='+kmtrx(Mtrx.opr1('.^',M,k))
						},seqsA(ij)))
				},VA)
			);
		}



// Elementary Transformation
		if(sel('化上三角（行变换）')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'iU=', M=MfS(t), A=Mtrx.opr1('PTs',M,ij);
				return A[1]
			},VA));
		}
		if(sel('化下三角（列变换）')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'jL=', M=MfS(t), A=Mtrx.opr1('PTs',M,ij);
				return A[1]
			},VA));
		}
		
		if(sel('化行阶梯')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'iE=', M=MfS(t), A=Mtrx.opr1('PTs',M,ij);
				return A[1]
			},VA));
		}
		if(sel('化列阶梯')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'jE=', M=MfS(t), A=Mtrx.opr1('PTs',M,ij);
				return A[1]
			},VA));
		}

		if(sel('化最简行')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'iS=', M=MfS(t), A=Mtrx.opr1('PTs',M,ij);
				return A[1]
			},VA));
		}
		if(sel('化最简列')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'jS=', M=MfS(t), A=Mtrx.opr1('PTs',M,ij);
				return A[1]
			},VA));
		}
		if(sel('化标准型')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'iI=', M=MfS(t), A=Mtrx.opr1('PTs',M,ij);
				return A[1]
			},VA));
		}
		if(sel('初等变换化标准型')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'', M=MfS(t), A=Mtrx.opr1('normPTs',M,ij);
				return A[1]
			},VA))
		}
		if(sel('对角化求合同矩阵')){
			rS=rS.concat(Arrf(function(t){
				var M=MfS(t), hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'', A=Mtrx.opr1('congPTs',M,ij);
				return A[1]
			},VA));
		}

		if(sel('求极大线性无关组并表示其余向量')){//列向量矩阵&k 参数k表示后k个向量用βi表示
			//示例 [1 2 1;2 3 -1;1 0 -5;-2 -1 7]'
			rS=rS.concat(Arrf(function(t){
				var ij=t.split('&'), M=MfS(ij[0]), A=Mtrx.opr1('PTs',M,'iS='), A00=A[0][0], m=A00.length, n=A00[0].length,
					r=Mtrx.opr1('秩',A00), B=Mtrx.opr1('极大无关组索引',A00), k=+ij[1]||0, C=Arrf(function(s){return 'αβ'[+(s>n-k)]+(k==1 && s>n-k?'':'_{'+(s>n-k?s-(n-k):s)+'}')},B[0]);
				return kxA([A[1],'则向量组秩为'+r+'，向量组线性'+'相无'[+(r==n)]+'关，',
					'且'+C.join(', ')+
							'是一个极大线性无关组，','是向量空间的一组基，其维数是'+r,
							r==n?'':kxA(Arrf(function(s){
									return 'αβ'[+(s>n-k)]+(k==1 && s>n-k?'':sub(s>n-k?s-(n-k):s,''))+'='+sums(Arri(A00,s-1),C)
								},B[1]))
						])
			},VA));
		}


//Inverse

		if(sel('A^{-1}')){
			//求逆方法题型 http://jpkc.nwpu.edu.cn/jp2005/26/bjjc/xj/zsyd2-55.htm 
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'iS=', M=MfS(t), A=Mtrx.opr1('invPTs',M,ij);
				return A[1]
			},VA));
		}
		
		
		if(sel('伴随矩阵求逆')){
			rS=rS.concat(Arrf(function(t){
				var M=MfS(t), M_=Mtrx.opr1('*',M),d=Mtrx.opr1('detPTs',M,'iU=;d;='),M_1=Mtrx.opr2('/',M_, d[0]);
				return kxA(['A^* = '+kmtrx(M_),
						d[1],
						'A^{-1} = '+frac('A^*','|A|','')+' = '+kmtrx(M_1)])
					
			},VA));

		}
		if(sel('分块矩阵求逆')){/*只支持2×2分块(大分块里面可以再2×2子分块)，且是准对角矩阵或副准对角阵
			1200010000120023
			*/
			rS=rS.concat(Arrf(function(t){
				var ij=t.replace(/.+&/,'')||'D2_2', M=MfS(t), A=Mtrx.opr1('parts',M,ij),
					A_1=Mtrx.opr1('inv',M), B=Mtrx.opr1('parts',A_1,ij), x=/^D/.test(ij)?12:13;
				//	return kmtrx(A)
				
				/*
				if(!Mtrx.is.b1.qD(M){
					x=13
					//暂时只考虑支持准对角阵、副准对角阵的分块求逆
				}
				*/
				return kxA(['A = '+kmtrx(A),
						'利用矩阵分块求逆公式 '+[][x],
						'A^{-1} = '+kmtrx(B)])
					
			},VA));

		}
		if(sel('f(A)=A^2+bA+cI=0求逆')){//b,c&k&E   f(A)=A²+bA+cI=0 证明A+kI，并求逆 (A+kI)(A+(b-k)I)=(k(b-k)-c)I  逆(A+(b-k)I)/(k(b-k)-c) = (A+(b-k)I)/-f(-k)
			rS=rS.concat(
				Arrf(function(t){
					var pA=t.split('&'),ij=pA[1]||'0', M=pA[0].split(/[, ;]/g), E=pA.length<3?'I':'E';

					return Arrf(function(k){
						var b_k=minus([M[0],k]), _f_k=minus([times([k,b_k]),M[1]]), _1_f_k=divide([1,_f_k]),f=function(x){
							return plus(['A',times([x,E])])
						}, fk=f(k), fb_k=f(b_k), r=times([_1_f_k,fb_k]),
						 e0=times([_f_k,'E']),e1=_1_f_k,e2=r;
						return ['A^2'+sums(M,['A',E],'','',1)+' = O',
							pptd(fk)+pptd(fb_k)+' = '+e0,
							pptd(fk)+pptd(e2)+' = '+E,
							'因此'+f(k)+'可逆，且逆矩阵是'+e2
						].join('\\\\ ')

					},seqsA(ij)).join('\\\\ ')
				},VA)
			);

		}







// Determinant

		if(sel('|A|','Determinant')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'iU=;d;=', M=MfS(t), A=Mtrx.opr1('detPTs',M,ij);
				return A[1]
			},VA))
		}
		if(sel('|kA|')){//|A|,阶数n,k
			rS=rS.concat(Arrf(function(t){
				var tA=t.split(','),kn=pow([tA[2],tA[1]]);
				return eqv([zp(times([tA[2],'A']),'||'), times([pow([tA[2],tA[1]],1),'|A|']), times([kn,'|A|']), times([kn,tA[0]])])
			},VA))
		}
		if(sel('|AP|')){//矩阵P&|A|
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'iU=;d;=', M=MfS(t), A=Mtrx.opr1('detPTs',M,ij);
				return eqv([zp(times([t[2],'A']),'||'), times([pow([t[2],t[1]],1,1),'|A|']), times([kn,'|A|']), times([kn,t[0]])])
			},VA))
		}
		
		
		if(sel('By Definition','Determinant')){
			rS=rS.concat(Arrf(function(t){
				//var ij='D;=', M=MfS(t), A=Mtrx.opr1('detPTs',M,ij);
				var M=MfS(t), A=Mtrx.opr1('detDef',M,1);
				return A[1]
			},VA))
		}
		
		if(sel('代数余子式之和')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/[^&]+&/,'').split('&'):['i1'], M=MfS(t);
				if(ij.length==1){
					ij.push('1,1,1,1')
				}
				
				consolelog(ij);
				var isr=ij[0][0].toLowerCase()=='i',IJ=+ij[0].substr(1), M2=Mtrx.build.replace(M,ij[1].split(','),ij[0]);
				consolelog(M2);
				var A=Mtrx.opr1('detPTs',M2,'iU=;d;=');
				return '|A|='+Mtrx.toStr(M)+eq('求题中各元素的'+(ij[0][0]=='i'?'代数':'')+'余子式之和','→','相当于原行列式第'+IJ+(isr?'行':'列')+'元素替换为'+ij[1])
					+'|A\'|='+Mtrx.toStr(M2)+'\\\\ '+A[1].replace('A','A\'')
			},VA))
		}
		
		
		
		if(sel('Laplace Expansion')){//参数指定按第几行（或列）展开： i3 j4
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'i1', M=MfS(t), A=Mtrx.opr1('detPTs',M,'L'+ij);
				return A[1]
			},VA))
		}
		if(sel('对角线法则')){
			rS=rS.concat(Arrf(function(t){
				//var ij='S;=', M=MfS(t), A=Mtrx.opr1('detPTs',M,ij);
				var M=MfS(t), A=Mtrx.opr1('detSar',M,1);
				return A[1]
			},VA))
		}
		if(sel('Block Matrix')){
			rS=rS.concat(Arrf(function(t){
				//var ij='S;=', M=MfS(t), A=Mtrx.opr1('detPTs',M,ij);
				var M=MfS(t), A=Mtrx.opr1('detPart',M);
				return A[1]
			},VA))
		}

		


		if(sel('|a(bA)^{-1}+c(dA)^*|')){// |A|,n&a,b,c,d


			rS=rS.concat(
				Arrf(function(t){
					var ij=t.replace(/.+&/,'').split(','), M=t.split('&')[0].split(','),
						n_1=+M[1]-1,a_b=divide([ij[0],ij[1]]),a_bA_1=a_b?times([a_b, 'A^(-1)']):0,
						k=plus([a_b,times([ij[2],pow([ij[3],n_1]),M[0]])]),
						kn=pow([k,M[1]]),kn_A=divide([kn,M[0]]), ij3A=times([ij[3],'A']);


					
					
					return Eq(Arrf(function(s){return lrp('|',s,'|')},[
							plus([kap([ij[0], times([ij[1],'A']),-1]),
								kap([ij[2], ij3A,'*'])
							],1,1),

							plus([a_bA_1, times([ij[2],'|'+ij3A+'|'+pow([ij3A,'-1'])])],1),
							].concat(ij[3]!='1'?
							plus([a_bA_1, times([kap([ij[2],ij[3],n_1]),'|A|A^{-1}'])]):[]).concat(
							times([k,'A^(-1)'])
							)).concat([

							frac(pow([k,M[1]]),'|A|',''),
							kn_A
							]))
				},VA)
			);
		}
		if(sel('|a(bA)^{-1}+c(dA)^*+eE+fA|')){// 特征值&a,b,c,d,e,f
//1,-2,-3/2&0,1,2,1,-3,0

			rS=rS.concat(
				Arrf(function(t){
					var ij=t.replace(/.+&/,'').split(','), M=t.split('&')[0].split(','), detA=times(M),
						n_1=M.length-1, a_b=divide([ij[0],ij[1]]), a_bA_1=a_b?times([a_b, 'A^(-1)'],1,1):'',
						a_b_cd=plus([a_b, 'A^(-1)'],1),
						k=plus([a_b, times([ij[2], pow([ij[3],n_1]), detA])]), ij40=ij[4]=='0'||!ij[4], ij50=ij[5]=='0'||!ij[5],

						ij3A=times([ij[3],'A']),
						eE=ij40?'0':pptd(times([ij[4],'E'])),
						fA=ij50?'0':pptd(times([ij[5],'A'])),
						es=Arrf(function(t){
							return plus([divide([k,t]), ij[4]||0, times([ij[5]||0,t])])
						},M);


					return '显然|A|='+Arrfc([pptd],M).join('×')+'='+detA+'\\\\ '
				+Eq(Arrf(function(s){return lrp('|',s,'|')},
						[
							plus([kap([ij[0], times([ij[1],'A']),-1]),
								kap([ij[2], ij3A,'*']),
								eE,fA
							],1)
						].concat(ij[2]!='0'?

							plus([a_bA_1,

							times([ij[2],'|'+ij3A+'|'+pow([ij3A,'-1'])]),
							eE,fA
							],1):[]	//],1,1):[]
						).concat(ij[2]!='0' && ij[3]!='1'?
								
							plus([
							pptd(a_bA_1),
							times([kap([ij[2],ij[3],n_1]),'|A|A^{-1}']),
							eE,fA
							],1):[]	//]):[]
						).concat(ij[2]!='0'?
							plus([
							pptd(times([k,'A^{-1}'])),
							eE,fA
								],1):[]	//	]):[]
						)
					).concat(ij40 && ij50?[
							frac(msup(pptd(k),M.length,'',''),'|A|',''),
							frac(msup(pptd(k),M.length,'',''),detA,'')
							]:[
							Arrf(function(x){
								consolelog(x,k);

								return pptd(plus([k=='0'?'0':k+'/'+pptd(x),	//k+'/'+pptd(x)
							ij[4],
							times([ij[5],x]),
								],1))
							},M).join('⋅'),
							Arrfc([pptd],es).join('⋅')
							]
						).concat([
							times(es)
							]))


				},VA)
			);
		}
		
		
		
		if(sel('a_{ij}=A_{ij}')){//指定阶数
			rS=rS.concat(
			Arrf(function(n){return kxA(['a_{ij}=A_{ij}',
					'则伴随矩阵A^*=A^T',
					'而AA^*=|A|I',
					'则AA^T=|A|I，两边取行列式，得到',
					'|A||A^T|=|A|^{'+n+'}',
					'即|A|^2=|A|^{'+n+'} ~①',
					'而'+Eq([['|A|','a_{11}A_{11}+a_{12}A_{12}+'+(+n>3?'⋯+':'')+'a_{1'+n+'}A_{1'+n+'}'],
					'a_{21}A_{21}+a_{22}A_{22}+a_{23}A_{23}+'+(+n>3?'⋯+':'')+'a_{2'+n+'}A_{2'+n+'}'+(+n>3?'\\\\ =⋯':''),
					'a_{'+n+'1}A_{'+n+'1}+a_{'+n+'2}A_{'+n+'2}+'+(+n>3?'⋯+':'')+'a_{'+n+n+'}A_{'+n+n+'}']),
					'A≠0，则存在a_{ij}≠0，则上式>0',
					'即|A|>0，从而由①，解得|A|=1'])
				},VA));
		}

		if(sel('三角形面积')){//输入3个顶点坐标
			rS=rS.concat(Arrf(function(t){
				var M=MfS('['+t.replace(/,/g,' ').replace(/;/g,' 1;')+' 1]'), A=Mtrx.opr1('detPTs',M,'iU=;d;='), d=A[0].replace(/^-/,'');
				return A[1]+'\\\\ 因此三角形面积是'+eqv([frac(1,2,'')+'×'+d,fracOpr('/',d,2)])
			},VA))
		}
		
//Minor

		if(sel('Leading Principle Minor')){//参数指定k阶
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t);
					return kxA(Arrf(function(k){
							return k+'阶顺序主子式：'+Mtrx.opr1('Dk',M,+k)[2]
						},seqsA(ij)))
				},VA)
			);
		}
		if(sel('判断正定')){
			rS=rS.concat(
				Arrf(function(t){
					var M=MfS(t),MA=[];
					return kxA(Arrf(function(k){
							var Dk=Mtrx.opr1('Dk',M,k),Dk1=Dk[1];
							MA.push(Math.sign(Dk1))
							return k+'阶顺序主子式：'+Dk[2]+' '+(Dk1>0?'>':(Dk1<0?'<':'='))+' 0'
						},seqsA('1~'+M.length)).concat('因此A'+Mtrx.opr1('Dk判断正定',MA)))
				},VA)
			);
		}
		
		if(sel('行列式因子')){
			
		}
		if(sel('不变因子')){
			
		}
		if(sel('最小多项式')){
			
		}
		if(sel('初等因子')){
			
		}






//Eigen Value
		
		

		if(sel('Eigen Polynomial')){

		}
		if(sel('Eigen Value')){
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,'').split(','):'', M=MfS(t), A=Mtrx.opr1('特征值',M,ij,1);

				return A[1]
			},VA));
		}
		if(sel('Singular Polynomial')){

		}
		
		if(sel('Eigen Vector')){//矩阵&特征值1,2...
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,'').split(','):'', M=MfS(t), A=Mtrx.opr1('特征向量',M,ij, 1);
					
				return A[1]
			},VA));

		}

		if(sel('Eigen Vector Orthogonalize') || sel('Eigen Vector Gram-Schmidt')){/*矩阵&特征值1,2...
			示例：17 -8 4 -8 17 -4 4 -4 11
				22-225-4-2-45
			*/
			var oi=sel('Eigen Vector Gram-Schmidt');
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,'').split(','):'',M,t0=t.replace(/&.+/,''),tA;
				if(/x\d\^2/.test(t0) || /x\dx\d/.test(t0)){
					var MC=MfS('QF('+t0+')','co');
					M=MC[0];
					tA=MC[1];
				}else{
					M=MfS(t0)
				}
				var m=M.length, A=Mtrx.opr1('特征向量',M,ij,1), isS=Mtrx.is.b1.S(M);

				var B=Mtrx.opr1('正交化',A[0]), D=kxf('diag')+kfraczp(''+A[2]),Q=oi?Mtrx.opr1('单位化',(isS && A[3].length==A[2].length?A:B)[0]):'',
					Y=[],Z_1=0,Z1=0;
				for(var i=0;i<m;i++){
					var ti=A[2][i];
					if(''+ti!='0'){
						Y.push(times([ti,'y_'+(i+1)+'^2']));
						if(/-/.test(ti)){
							Z_1++;
						}else{
							Z1++;
						}
					}
				}
console.log('单位化？',oi,m,Q);


				return (tA?'二次型'+t0.replace(/x/g,'x_')+'对应系数矩阵\\\\ ':'')+A[1]+'\\\\ '+
					(isS && /^1+$/.test(Arri(A[3],1).join(''))?'由于矩阵A是实对称矩阵，因此属于不同特征值的特征向量是正交的':'矩阵P施密特正交化\\\\ '+B[1])+
					(oi?'\\\\ 单位化，得到正交矩阵Q = '+kmtrx(Q):'')+
					'\\\\ 并且有'+'PQ'[+oi]+'^{-1}A'+'PQ'[+oi]+' = Λ = '+D+
					
					(oi?'​\\\\ 所求正交变换是X=QY，Y=Q^TX，且有'+
						'\\\\ X^TAX=(QY)^TAQY=Y^TQ^TAQY=Y^T'+D+'Y\\\\ '+
						kxA(Arrf(function(t){
								console.log(Arri(Q,t-1), zlrA('x_',seqA(1,m)));
								
							return 'y'+sub(t,'')+'='+sums(Arri(Q,t-1),zlrA('x_',seqA(1,m)),1)	
								
						//	return 'y'+sub(t,'')+'='+sums(Arri(Q,t-1),zlrA('x_',seqA(1,m)))		//		此处有死循环 bug		sums(["-2/√5", "1/√5", "0"],["x_1", "x_2", "x_3"])	plus(["-2/√5x_1", "x_2/√5", "0"])
						//	console.log(Arri(Q,t-1), zlrA('x_',seqA(1,m)));
						//	return 'y'+sub(t,'')+'='
						},seqA(1,m)))+
						'\\\\ 得到标准型：'+plus(Y,1)+
						'\\\\ 得到规范型：'+(Z1?zlr3('z_',seqA(1,Z1).join(' '),'^2','+'):'')+
								(Z_1?'-'+zlr3('z_',seqA(Z1+1,Z_1).join(' '),'^2','-'):'')
						:'')
						
			},VA));

		}
		
		if(sel('Eigen Matrix')){
			rS=rS.concat(concat(copyA('λI-',n),strA,
				Arrf(function(t){
					return '='+kmtrx(Mtrx.opr1('特征矩阵',MfS(t)))
			},VA)));

		}


//Matrix Factorization
		if(sel('分解为初等矩阵的乘积')){
			
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,'').split(','):'', M=MfS(t), m=M.length, A=Mtrx.opr1('分解',M,'ps',1),A1=A[1],l=A1.length;

				return A1

			},VA));
		}

		if(sel('SVD')){
			
			rS=rS.concat(Arrf(function(t){
				var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,'').split(','):'', M=MfS(t), m=M.length, A=Mtrx.opr1('分解',M,'ps',1),A1=A[1],l=A1.length;

				return A1

			},VA));
		}


//Power


		if(sel('A^2')){//矩阵&乘幂2
			rS=rS.concat(
				Arrf(function(t){
					var M=MfS(t);
					return kmtrx(M)+'^2='+kmtrx(Mtrx.opr1('^',M,2))
				},VA)
			);
		}

		if(sel('A^n')){//矩阵&乘幂
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t);
					return Arrf(function(k){
							return kmtrx(M)+sup(k,'')+'='+kmtrx(Mtrx.opr1('^',M,k))
						},seqsA(ij)).join('\\\\ ')
				},VA)
			);
		}

		if(sel('Boolean Power')){//布尔矩阵&乘幂
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t);
					return kxA(Arrf(function(k){
							return kmtrx(M)+sup(k,'')+'='+kmtrx(Mtrx.opr1('b^',M,k))
						},seqsA(ij)))
				},VA)
			);
		}
		if(sel('布尔可达矩阵')){//布尔矩阵
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t);

					var Bn=Mtrx.opr1('b可达',M);
					return '可达矩阵 (I+A)'+sup(Bn[1],'')+'='+kmtrx(Bn[0])

				},VA)
			);
		}
		

		if(sel('α^Tβ求幂') || sel('αβ^T求幂')){//2×n矩阵[α;β] & 幂   //A=αTβ或αβT
			

			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', M=MfS(t),
						ATB=sel('αTβ求幂'),atb=ATB?'α^Tβ':'αβ^T',at=ATB?'α^T':'α',bt=ATB?'β':'β^T',
						n=M[0].length,ij_1=minus([ij,1]),aT=Mtrx.opr1('T',[M[0]]),bT=Mtrx.opr1('T',[M[1]]),aTb=Mtrx.opr2('*',aT,[M[1]]),
						A0=kmtrx([M[0]]),A1=kmtrx([M[1]]), B0=kmtrx(aT),B1=kmtrx(bT),abT=Mtrx.opr2('*',[M[0]],bT),A=Mtrx.opr2('^',abT,ij_1);//这里用变量A表示一阶矩阵βαT的幂

					return Eq(['A',atb,kmtrx(aTb)])+'\\\\ '+
						bt+at+'='+abT[0][0]+'\\\\ '+
						Eq(['A^{'+ij+'}','('+atb+')^{'+ij+'}',
								at+'('+bt+at+')^{'+ij_1+'}'+bt,
								at+pow([abT[0][0],ij_1])+bt,
								times([A[0][0],atb],1),
								times([A[0][0],'A'],1),
								kmtrx(Mtrx.opr2('*',aT,A,[M[1]]))]);
				},VA)
			);
		}


		if(sel('T分解求幂')){//矩阵A & a（分解因子）& 幂
			
		/*
			T分解（不唯一）：适合行(列)间成比例（或相等）的矩阵分解 
				(a b c)T * (i j k) = 
				ai aj ak
				bi bj bk
				ci cj ck
				
				行间相同时，得到 (1 1 1)T * (i j k)
				列间相同时，得到 (a b c)T * (1 1 1)
			
			
		*/
			rS=rS.concat(
				Arrf(function(t){
					var hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,''):'1', Ma=t.split('&')[1], a=/&/.test(Ma)?Ma.replace(/.+&/,''):'1',M=MfS(Ma),
						n=M.length,ij_1=minus([ij,1]),
						B=Mtrx.opr1('分解',M,'T',a), B0=kmtrx(B[0]),B1=kmtrx(B[1]),B1B0=Mtrx.opr2('*',B[1],B[0]),A=Mtrx.opr2('^',B1B0,ij_1);
					return Eq([kmtrx(M)+sup(ij,''),
							lrp('',B0+' '+B1,'','')+sup(ij,''),
							B0+' '+lrp('',B1+' '+B0,'','')+sup(ij_1,'')+B1,
							B0+' '+kmtrx(B1B0)+sup(ij_1,'')+B1,
							B0+' '+A+' '+B1,
							kmtrx(Mtrx.opr2('*',B[0],A,B[1]))
						]);
				},VA)
			);
		}

		if(sel('对角化求幂')){//矩阵A&幂&特征值
			rS=rS.concat(
				Arrf(function(t){
					var ij=t.split('&'), n=ij[1]||'1', A=MfS(ij[0]), m=A.length, T=Mtrx.opr1('特征向量',A,ij[2]?ij[2].split(','):'',1), P=T[0], isDiagable=P[0].length==m, rs=[];
					rs.push(T[1]);
					if(!isDiagable){/*不可对角化
					
						设上三角矩阵A特征值为k(n重), B是上三角，且主对角线元素都为0
						A=B+kI
						
						B^n=0（猜想是，但未搜索文献证明）
						B^n=C_n^iA^(n-i)(-k)^i=A^n+nA^(n-1)(-k)+...+(-k)^nE
						A^m=C_m^1B^(m-1)k + C_m^2B^(m-2)k^2 + C_m^3B^(m-3)k^3 + ... + C_m^(m-1)Bk^(m-1) + k^mI
						
						*/
						var A2=Mtrx.opr2('^',A,2), A3=Mtrx.opr2('*',A2,A), A3is0=Mtrx.is.b1['0'](A3), A4=A3is0?A3:Mtrx.opr2('*',A3,A);
						rs.push('A^2='+kmtrx(A2),'A^3='+kmtrx(A3));
						rs.push();
						
						
						
						
					}else{
						var	D=kxf('diag')+kfraczp(''+T[2]),P=T[0],
							dn=Arrf(function(t){return pow([t,n])},T[2]),
							Dn=Mtrx.build.D(dn),DneqD=T[2].join()==dn.join();

						if(DneqD){
							
							
						}else{
							var DnP_1s=Mtrx.opr1('invrPTs',Mtrx.build.B([[P],[Dn]]),'jS='),
							DnP_1=subMtrx(DnP_1s[0][0],m+1,m*2,1,m),
							PDnP_1=Mtrx.opr2('*',P,DnP_1);
							
						}

						rs.push('A = PΛP^{-1}，则',
							Eq(['A^{'+n+'}', '(PΛP^{-1})^{'+n+'}', 'PΛ(P^{-1}P)Λ(P^{-1}P)Λ⋯ΛP^{-1}', 'PΛ^{'+n+'}P^{-1}',
							'P'+(DneqD?'Λ':kxf('diag')+kfraczp(''+Mtrx.opr1('取',Dn,'D')))+'P^{-1}',
							DneqD?'A':kmtrx(PDnP_1)]));
						
						if(!DneqD){
							rs.push('使用初等列变换来求Λ^{'+n+'}P^{-1}',DnP_1s[1]);
						}
					}
					return rs.join(kbr2)
				},VA));
		}
		if(sel('对角化求幂PA=ΛP')){//第1行 矩阵P   第2行Λ   第3行：幂(具体数字或'n') 第4行：矩阵多项式
			var VA0=VA[0],ij=VA[2]||'1', P=MfS(VA0),D=MfS(VA[1]),
				P_1=Mtrx.opr1('inv',P),	Dp=Mtrx.opr1('^',D,ij,'d'), R=Mtrx.opr2('*',P_1,Dp,P);
			rS.push('A = P^{-1}ΛP', Eq(['则A'+sup(ij,''), '(P^{-1}ΛP)'+sup(ij,''), 'P^{-1}Λ(PP^{-1})Λ(PP^{-1})Λ⋯ΛP', 'P^{-1}Λ'+sup(ij,'')+'P',
				kmtrx(P_1)+' '+kmtrx(Dp)+' '+kmtrx(P), kmtrx(R)]));
		}
		if(sel('对角化求幂AP=PΛ')){//第1行 矩阵P 	第2行Λ   第3行：幂(具体数字或'n') 第4行：矩阵多项式f(A) 或者 f(x)
			var VA0=VA[0],ij=VA[2]||'1', P=MfS(VA0),D=MfS(VA[1]),Ds=Mtrx.opr1('取',D,'D'), m=Ds.length, B=Mtrx.opr1('invPTs',P,'iS='),
				P_1=subMtrx(B[0][0],1,m,m+1),Dp=Mtrx.opr1('^',D,ij,'d'), R=Mtrx.opr2('*',P,Dp,P_1);//P_1=Mtrx.opr1('inv',P)
			rS.push('A = PΛP^{-1}','求P的逆矩阵',B[1], Eq(['则A'+sup(ij,''), '(PΛP^{-1})'+sup(ij,''), 'PΛ(P^{-1}P)Λ(P^{-1}P)Λ⋯ΛP^{-1}', 'PΛ'+sup(ij,'')+'P^{-1}',
				kmtrx(P)+' '+kmtrx(Dp)+' '+kmtrx(P_1), kmtrx(R)]));
			if(VA[3]){
				var D2=Mtrx.build.D(Arrf(f, Ds)), fA=Mtrx.opr2('*',P,D2,P_1);
				
				rS.push('f(A)=Pdiag('+zlrA3('f(',Ds,')')+')'+'P^{-1}=', kmtrx(P)+' '+kmtrx(D2)+' '+kmtrx(P_1), kmtrx(fA))
			}
		}




//Multiary Operation





		if(sel('点乘')){
			rS.push(kmtrx(
				Arrf(function(x,y){
					return Mtrx.opr2('.*',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}
		if(sel('点除')){
			rS.push(kmtrx(
				Arrf(function(x,y){
					return Mtrx.opr2('./',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}
		if(sel('点幂')){
			rS.push(kmtrx(
				Arrf(function(x,y){
					return Mtrx.opr2('.^',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}



		if(sel('A⊕B')){
			rS.push(kmtrx(
				Arrf(function(x,y){
					return Mtrx.opr2('⊕',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}
		if(sel('A⊗B')){
			rS.push(kmtrx(Mtrx.opr2.apply(null,['⊗'].concat(Arrf(MfS,VA))))
			);
		}
		if(sel('Kronecker Power')){
			rS.push((n<5?strA.join(''):Opr('i',1,'n','M_i','^'))+'='+kmtrx(
				Arrf(function(x,y){
						return Mtrx.opr2('^',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}


		

		if(sel('并∨','Boolean')){

			rS.push((n<5?strA.join('\\bigvee '):sum('i',1,'n','M_i',3,''))+'='+kmtrx(
				Arrf(function(x,y){
						return Mtrx.opr2('b∨',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}
		if(sel('交∧','Boolean')){

			rS.push((n<5?strA.join('\\bigwedge '):prod('i',1,'n','M_i',4,''))+'='+kmtrx(
				Arrf(function(x,y){
						return Mtrx.opr2('b∧',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}
		if(sel('积⊙','Boolean')){

			rS.push((n<5?strA.join('\\bigodot '):prod('i',1,'n','M_i',7,''))+'='+kmtrx(
				Arrf(function(x,y){
						return Mtrx.opr2('b⊙',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}

		if(sel('A+B')){
			rS.push((n<5?strA.join('+'):sum('i',1,'n','M_i','',''))+'='+kmtrx(
				Arrf(function(x,y){
						return Mtrx.opr2('+',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}
		if(sel('A-B')){
			rS.push((n<5?strA.join('-'):'M_1-M_2-⋯-M_'+n)+'='+kmtrx(
				Arrf(function(x,y){
						return Mtrx.opr2('-',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2')));
		}

		if(sel('A∔B')){
			rS.push(kmtrx(Mtrx.opr2.apply(null,['∔'].concat(Arrf(MfS,VA))))
			);
		}
		
		
		if(sel('AB')){
			rS.push((n<5?strA.join(''):prod('i',1,'n','M_i','',''))+'='+kmtrx(
				Arrf(function(x,y){
						return Mtrx.opr2('*',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}
		if(sel('BA')){
			rS.push((n<5?strA.reverse().join(''):prod('i','n',1,'M_i','',''))+'='+kmtrx(
				Arrf(function(y,x){
						return Mtrx.opr2('*',typeof x=='string'?MfS(x):x,MfS(y))
				},VA,'cp2'))
			);
		}
		
		if(sel('\\exp')){
			rS=rS.concat(concat(copyA('exp(',n),strA,
				Arrf(function(t){
					var As=Mtrx.opr1('exp',MfS(t)),s=['I'];
					for(var i=1;i<As.length;i++){
						s.push(frac(1,i+'!','')+kmtrx(As[i]));
					}
					
					return ')='+s.join('+')+'\\\\ ='+kmtrx(As[0])
				},VA))
			);
		}


		
		
		if(sel('A^TA')){
			rS=rS.concat(concat(strA,copyA('^T',n),strA,copyA('=',n),
				Arrf(function(t){
					var M=MfS(t);
					return kmtrx(Mtrx.opr2('*',Mtrx.opr1('T',M),M))
			},VA)));
		}
		if(sel('AA^T')){
			rS=rS.concat(concat(strA,strA,copyA('^T',n),copyA('=',n),
				Arrf(function(t){
					var M=MfS(t);
					return kmtrx(Mtrx.opr2('*',M,Mtrx.opr1('T',M)))
			},VA)));
		}
		if(sel('A^TB')){
			var AT=Mtrx.opr1('T',MfS(VA[0])), B=MfS(VA[1]), C=Mtrx.opr2('*',AT,B);
			rS.push('A^T = '+kmtrx(AT), 'B = '+kmtrx(B), 'A^TB = '+kmtrx(C))
		}
		if(sel('AB^T')){
			var BT=Mtrx.opr1('T',MfS(VA[1])), A=MfS(VA[0]), C=Mtrx.opr2('*',A,BT);
			rS.push('A = '+kmtrx(A), 'B^T = '+kmtrx(BT), 'AB^T = '+kmtrx(C))
		}
		if(sel('A^TB^T')){
			var AT=Mtrx.opr1('T',MfS(VA[0])),BT=Mtrx.opr1('T',MfS(VA[1])),C=Mtrx.opr2('*',AT,BT);
			rS.push('A^T = '+kmtrx(AT),'B^T = '+kmtrx(BT), 'A^TB^T = '+kmtrx(C))
		}
		if(sel('B^TA^T=(AB)^T')){
			var A=MfS(VA[0]),B=MfS(VA[1]),C=Mtrx.opr2('*',A,B),CT=Mtrx.opr1('T',C);
			rS.push('A = '+kmtrx(A), 'B = '+kmtrx(B), 'AB = '+kmtrx(C), '(AB)^T = '+kmtrx(CT))
		}
		
		
		if(sel('ABA^T')){
			var A=MfS(VA[0]),AT=Mtrx.opr1('T',A),B=MfS(VA[1]),C=Mtrx.opr2('*',A,B,AT);
			rS.push('A = '+kmtrx(A), 'B = '+kmtrx(B), 'A^T = '+kmtrx(AT), 'ABA^T = '+kmtrx(C))
		}
		if(sel('A^TBA')){
			var A=MfS(VA[0]),AT=Mtrx.opr1('T',A),B=MfS(VA[1]),C=Mtrx.opr2('*',AT,B,A);
			rS.push('A^T = '+kmtrx(AT), 'B = '+kmtrx(B), 'A = '+kmtrx(A), 'A^TBA ='+kmtrx(C))
		}

		if(sel('BAB^T')){
			var A=MfS(VA[0]),B=MfS(VA[1]),BT=Mtrx.opr1('T',B),BA=Mtrx.opr2('*',B,A), C=Mtrx.opr2('*',BA,BT);
			rS.push('A = '+kmtrx(A),'B = '+kmtrx(B), 'BA = '+kmtrx(BA), 'BAB^T = '+kmtrx(C))
		}
		
		if(sel('B^TAB')){
			var A=MfS(VA[0]),B=MfS(VA[1]),BT=Mtrx.opr1('T',B),AB=Mtrx.opr2('*',A,B), C=Mtrx.opr2('*',BT,AB);
			rS.push('A = '+kmtrx(A),'B = '+kmtrx(B), 'AB = '+kmtrx(AB), 'B^TAB = '+kmtrx(C))
		}
		
		




		if(sel('A^{-1}B')){//	A\B 前2行是矩阵A、B，第3行，是参数
			rS.push(Mtrx.opr1('invlPTs',Mtrx.build.B([[MfS(VA[0]),MfS(VA[1])]]),VA[2]||'iS=')[1])
		}
		if(sel('BA^{-1}')){//	B/A 前2行是矩阵A、B，第3行，是参数
			rS.push(Mtrx.opr1('invrPTs',Mtrx.build.B([[MfS(VA[0])],[MfS(VA[1])]]),VA[2]||'jS=')[1])
		}

		if(sel('AB^{-1}')){//	A/B 前2行是矩阵A、B，第3行，是参数
			rS.push(Mtrx.opr1('invrPTs',Mtrx.build.B([[MfS(VA[1]),MfS(VA[0])]]),VA[2]||'jS=')[1])
		}
		if(sel('B^{-1}A')){//	/BA 前2行是矩阵A、B，第3行，是参数
			rS.push(Mtrx.opr1('invlPTs',Mtrx.build.B([[MfS(VA[1])],[MfS(VA[0])]]),VA[2]||'iS=')[1])
		}


		if(sel('P^{-1}AP')){//第1行P		第2行A		第3行变换参数
			var P=MfS(VA[0]),A=MfS(VA[1]), P_A=Mtrx.opr1('invlPTs',Mtrx.build.B([[P,A]]),VA[2]||'iS='),
				P_A0=P_A[0][0],m=P_A0.length,n=P_A0[0].length,P_1A=subMtrx(P_A0,1,m,m+1,n),
				P_1AP=Mtrx.opr2('*',P_1A,P);
			rS.push('P='+kmtrx(P)+'，A='+kmtrx(A),'使用初等行变换来求P^{-1}A',P_A[1],'P^{-1}AP='+kmtrx(P_1AP))
		}
		if(sel('PAP^{-1}')){//第1行P		第2行A		第3行变换参数
			var P=MfS(VA[0]),A=MfS(VA[1]), PA=Mtrx.opr2('*',P,A),
				PAP_=Mtrx.opr1('invrPTs',Mtrx.build.B([[P],[PA]]),VA[2]||'jS=');
			rS.push('P='+kmtrx(P)+', A='+kmtrx(A)+', PA='+kmtrx(PA),'使用初等列变换来求PAP^{-1}',PAP_[1])
		}






//Equation
		if(sel('AX=0')){
			if(/=/.test(v)){
				VA=[v];
			}
			rS=rS.concat(Arrf(function(t){
				var M=MfS(/=/.test(t)?'Linear('+t+')':t), A=Mtrx.opr1('fshPTs',M,'iS=;fsh;iS=;jB*='),A0=A[0][0],m=A0.length,n=A0[0].length,X=subMtrx(A0,1,m,m+1,n),Xs=[],Y=[],F=[];

				var AfullR;
				if(m==n){
					var rA=Mtrx.opr1('秩',A0);
					AfullR=rA==m;
				}
				if(AfullR){
					var M=Mtrx.opr1('rankPTs',M,'iE=');
					return kxA([M[1],'因此只有零解'])
				}

				for(var i=0;i<n-m;i++){
					F.push(sumx(Arri(X,i),'x',m,1)+' = 0');
					Xs.push(zp(Arri(X,i))+'^T');

					Y.push('C'+(n-m>1?sub(i+1,''):'')+Xs[i])
				}
				return kxA(['系数矩阵化最简行',A[1],'得到基础解系：'+Xs.join(', '),'~','因此通解是：'+Y.join(' + '),
					'一个对偶方程组是：',piece(F)])
			},VA));
		}

		if(sel('AX=b')){
			if(/=/.test(v)){
				VA=[v];
			}
			rS=rS.concat(Arrf(function(t){
				var M=MfS(/=/.test(t)?'Linear('+t+')':t),MI=Mtrx.opr1('PTs',M,'iS='),MI0=MI[0][0];

				var	m=MI0.length,n=MI0[0].length,rA=Mtrx.opr1('秩',subMtrx(MI0,1,m,1,n-1)),rAb=Mtrx.opr1('秩',MI0);
//	consolelog(rA,rAb);
				if(rA!=rAb){
					return kxA(['增广矩阵化最简行',MI[1],'r(A)='+rA,'r(A|b)='+rAb,'两者不相等，因此方程组无解'])
				}

				var	A=Mtrx.opr1('fsiPTs',M,'iS=;fsi;iS=;jb*='),A0=A[0][0],n2=n-1-rA+n,X=subMtrx(A0,1,n-1,n,n2),Xs=[],Y=[];
//consolelog(n2);
				for(var i=0;i<n-rA;i++){
					Xs.push(kfraczp(Arri(X,i),'','T'));
					if(i){
						Y.push('C'+(n-rA>2?sub(i,''):'')+Xs[i])
					}
				}
				return kxA(['增广矩阵化最简行',A[1]].concat(n-rA<2?
					['得到解：'+Xs[0]]:
					['得到特解：'+Xs[0],'基础解系：'+Xs.slice(1).join(', '),'~','因此通解是：'+[Xs[0]].concat(Y).join(' + ')]))
			},VA));
		}

		if(sel('AX=B')){//共3行：A B ​变换参数	X=A⁻¹B
			var A=MfS(VA[0]),B=MfS(VA[1]),Ar=A.length,Ac=A[0].length,Br=B.length,Bc=B[0].length;

			var M=Mtrx.build.B([[A,B]]),MI=Mtrx.opr1('PTs',M,'iS='),MI0=MI[0][0];

			var	m=MI0.length,n=MI0[0].length,rA=Mtrx.opr1('秩',subMtrx(MI0,1,m,1,Ac)),rAB=Mtrx.opr1('秩',MI0);

			if(rA!=rAB){
				rS.push(kxA(['增广矩阵化最简行',MI[1],'r(A)='+rA,'r(A|B)='+rAB,'两者不相等','因此方程组无解']))
			}else{

				if(rA==Ar){//行满秩

					rS.push(kxA(['AX=B, 则​X=A^{-1}B','下面使用初等行变换来求X',Mtrx.opr1('invlPTs',M,'iS=')[1]]))
						
				}else if(Ar>Ac){/*行数>列数 r,c * c,s = r,s	此时B有几列，就要解几个方程组
					或者使用初等行变换，化增广矩阵为最简行，此时右上角分块，就是X					
					*/
					rS.push(kxA(['增广矩阵化最简行',MI[1],'右上角分块就是解','X='+kmtrx(subMtrx(MI0,1,Ac,Ac+1,n))]))

				}else{

					var	AB=Mtrx.opr1('fsiPTs',M,'fsi;iS=;jb*='),AB0=AB[0][0],m2=AB0.length,n2=AB0[0].length,//	AB=Mtrx.opr1('fsiPTs',MI0,'fsi;iS=;jb*=')
						X=subMtrx(AB0,1,m2,Ac+1,n2),X0=kmtrx(subMtrx(X,1,m2,1,Bc));

					rS.push(kxA(['增广矩阵化最简行',AB[1],'得到'+(n2-Ac==Bc?'':'特')+'解',X0]));

					if(n2-Ac>Bc){
						var X1=kmtrx(subMtrx(X,1,m2,Bc+1,n2));
						rS.push(kxA(['基础解系矩阵：',X0,'因此通解是',X0+' + '+X1+kmtrx(Mtrx.build.F('C',n2-Ac-Bc,Bc))]))
					}
				}
			}

		}
		if(sel('XA=B')){//共3行：A B ​p(初等行变换参数) X=BA⁻¹
			var A=MfS(VA[0]),B=MfS(VA[1]),Ar=A.length,Ac=A[0].length,Br=B.length,Bc=B[0].length;

			var M=Mtrx.build.B([[A],[B]]),MI=Mtrx.opr1('PTs',M,'jS='),MI0=MI[0][0];

			var	m=MI0.length,n=MI0[0].length,rA=Mtrx.opr1('秩',subMtrx(MI0,1,Ar,1,n)),rAB=Mtrx.opr1('秩',MI0);

			if(rA!=rAB){
				rS.push(kxA(['增广矩阵化最简列',MI[1],'r(A)='+rA,'r(A|B)='+rAB,'两者不相等','因此方程组无解']))
			}

			if(rA==Ac){//列满秩

				rS.push(kxA(['XA=B, 则​X=BA^{-1}','下面使用初等列变换来求X',Mtrx.opr1('invrPTs',M,'jS=')[1]]))
					
			}else if(Ac>Ar){/*行数<列数 s,r * r,c = s,c	此时B有几行，就要解几个方程组
				或者使用初等列变换，化增广矩阵为最简列，此时左下角分块，就是X					
				*/
				rS.push(kxA(['增广矩阵化最简列',MI[1],'左下角分块就是解','X='+kmtrx(subMtrx(MI0,Ar+1,m,1,Ar))]))

			}else{

				var	AB=Mtrx.opr1('fsjPTs',M,'fsj;jS=;ib*='),AB0=AB[0][0],m2=AB0.length,n2=AB0[0].length,
					X=subMtrx(AB0,Ar+1,m2,1,n2),X0=kmtrx(subMtrx(X,1,Br,1,n2));

				rS.push(kxA(['增广矩阵化最简列',AB[1],'得到'+(m2-Ar==Br?'':'特')+'解',X0]));

				if(m2-Ar>Br){
					var X1=kmtrx(subMtrx(X,Br+1,m2,1,n2));
					rS.push(kxA(['基础解系矩阵：',X0,'因此通解是',X0+' + '+X1+kmtrx(Mtrx.build.F('C',m2-Ar-Br,Br))]))
				}
			}

		}

		if(sel('AXB=C')){//共5行：A B C ​p1(初等行变换参数) p2(初等列变换参数)  X=A⁻¹CB⁻¹
			var A_C=Mtrx.opr1('invlPTs',Mtrx.build.B([[MfS(VA[0]),MfS(VA[2])]]),VA[3]||'iS='),
				A_C0=A_C[0][0],m=A_C0.length,n=A_C0[0].length,
				A_CB_=Mtrx.opr1('invrPTs',Mtrx.build.B([[MfS(VA[1])],[subMtrx(A_C0,1,m,m+1,n)]]),VA[4]||'jS=');
			rS.push(kxA(['AXB=C, 则​\\\\ X=A^{-1}CB^{-1}，下面使用初等变换来求X',A_C[1],A_CB_[1]]))
		}

		if(sel('AX=aA+bX')){//A&a,b&[XB]
			rS=rS.concat(Arrf(function(t){
				var A=MfS(t),m=A.length,B=t.split('&').length==3?'B':'X', ab=t.split('&')[1].split(','),
					A_b=Mtrx.opr2('-',A,Mtrx.build.I(m,'',ab[1])),A_bE=minus(['A',times([ab[1],'E'])]),
					aA=Mtrx.opr2('*',A,ab[0]), eaA=times([ab[0],'A']),
					X=Mtrx.opr1('invlPTs',Mtrx.build.B([[A_b,aA]]),'iS=');
consolelog(X,aA,eaA);
				return kxA(['A'+B+'='+sums(ab,['A',B],[1,1]), 
					times([A_bE,B],1)+'='+eaA,
					B+'='+kfraczp(A_bE,'t','-1')+pptd(eaA),
					A_bE+'='+kmtrx(A_b)+', '+
					eaA+'='+kmtrx(aA)
					].concat(X[1]))
			},VA));
		}

		if(sel('XA=aA+bX')){//A&a,b&[XB]
			rS=rS.concat(Arrf(function(t){
				var A=MfS(t),m=A.length,B=t.split('&').length==3?'B':'X', ab=t.split('&')[1].split(','),
					A_b=Mtrx.opr2('-',A,Mtrx.build.I(m,'',ab[1])), A_bE=minus(['A',times([ab[1],'E'])]),
					aA=Mtrx.opr2('*',A,ab[0]), eaA=times([ab[0],'A']),
					X=Mtrx.opr1('invrPTs',Mtrx.build.B([[A_b],[aA]]),'jS=');
				return kxA([B+'A='+sums(ab,['A',B]), 
					times([B,A_bE])+'='+eaA,
					B+'='+pptd(eaA,1)+kfraczp(A_bE,'t','-1'),
					eaA+'='+kmtrx(aA)+', '+
					A_bE+'='+kmtrx(A_b)
					].concat(X[1]))
			},VA));
		}


		if(sel('Cramer Rule')){//增广矩阵 & 变换参数数组[可选，每个行列式的求解命令用@隔开] & 变量风格
			rS=rS.concat(Arrf(function(t){
				var ts=t.split('&'),hasP=/&/.test(t), xi=hasP?t.replace(/.+&/,''):'x1', M=MfS(t), p=ts.length>2?ts[1].split('@'):[],
					A=Mtrx.opr1('Cramer',M,p,xi);
				return kxA(A[2])
			},VA));
		}

		if(sel('P^{-1}AP=B求P')){//共2行：A&特征值 B
			var MA=MfS(VA[0]),hasP=/&/.test(t),ij=hasP?t.replace(/.+&/,'').split(','):'',A=Mtrx.opr1('特征向量',MA,ij,1),
				MB=MfS(VA[1]),B=Mtrx.opr1('特征向量',MB,ij,1);
			rS.push(kxA([A[1].replace(/P/g,'M'),B[1].replace(/P/g,'N'),'因此所求矩阵P=M'+msup('N',-1),'下面使用初等列变换来求P',
				Mtrx.opr1('invrPTs',Mtrx.build.B([[B[0]],[A[0]]]),'jS=')[1]]))
		}
		
		if(sel('已知AX=β通解ξ+cη，求BY=(A,Ax+kβ)Y=β的通解')){/*矩阵(ξ,η,x)&系数k	 其中A=(α1,α2,α3)不需要具体值
B=(A,Ax+kβ)=(A,d)，其中d=Ax+kβ
BY=β
AX=β

BY=(A,d)(特解;0)=A特解=β

BY=(A,d)(基;0)=A基=0

BY=B(y;t)=(A,d)(y;t)=Ay+dt=Ay+(Ax+kβ)t
=A(y+tx)+tkβ
=A(y+tx)+tk(A特解)
=A(y+tx+tk特解)
=A(y+t(x+k特解))
=0


y=-t(x+k特解)
特殊情况：t=-1（默认）, k=1
y=x+特解
		例子：11-1-342110'
			*/
			rS=rS.concat(Arrf(function(t){
				var ij=t.split('&'),k=+(ij[1]||1), M=MfS(ij[0]), M1=Arri(M,0), M2=Arri(M,1),x=Arri(M,2), x_kM1=Mtrx.opr2('+',[x],Mtrx.opr2('*',[M1],k))[0],
					A=zlrA('α_',[1,2,3]), d=sumx([0].concat(x),'α',4)+visiplus(times([k,'β'])), B=[].concat(A,d),
					eA=A,wA=zp(eA.join(', ')),wB=zp(B.join(', ')),
					wM10=zp(M1.concat(0).join(', ')),
					wM20=zp(M2.concat(0).join(', ')),
					wx_kM1=zp(x_kM1.concat(-1).join(', ')),
					rA=['AX=β基础解系中只有1个向量，则r(A)=3-1=2',
						'且根据AX=β有解，得知β可以由A的列向量线性表示',
						'则r(B)=r'+wB+'=r('+eA.join(', ')+', β)=r'+wA+'=r(A)=2',
						'则方程组BY=β的基础解系中有2个向量',
						Eq(['而显然B'+wM10+'^T=B(ξ; 0)',wB+'(ξ; 0)',wA+'ξ','Aξ','β']),
						'因此'+wM10+'^T是方程组BY=β的一个特解.',

						Eq(['另外B(η; 0)='+wB+'(η; 0)',wA+'η','Aη','0']),
						

						Eq(['以及B'+wx_kM1+'^T='+wB+wx_kM1+'^T',sumx([0].concat(M1),'α',4)+'-β',wA+'ξ-β','Aξ-β','β-β',0]),
						'因此(η; 0)='+wM20+'^T 与 '+wx_kM1+'^T是方程组BY=0的一个基础解系',

						'从而BY=β的通解是',
						wM10+'^T+C_1'+wM20+'^T+C_2'+wx_kM1+'^T'];


				return rA.join('\\\\ ')
			},VA));
		}



//Form

		if(sel('Smith Normal Form')){
			
		}
		if(sel('Jordan Normal Form')){
			
		}







//Quadric Form

		if(sel('矩阵→二次型')){//对称矩阵S(;) 得到相应的二次型
			rS=rS.concat(Arrf(function(t){
				var t0=t.replace(/&.+/,''),M=MfS(t0), m=M.length,A=[];//m=Math.floor(Math.sqrt(M.length*2)),A=[];
				if(m!=M[0].length){
					M=MfS('S('+t0+')');
					m=M.length;
				}
				for(var i=0;i<m;i++){
					A.push(times([M[i][i],'x_'+(i+1)+'^2']));
				}
				for(var i=0;i<m;i++){
					for(var j=i+1;j<m;j++){
						A.push(times([2,M[i][j],'x_'+(i+1)+'x_'+(j+1)]));
					}
				}
				
				return kmtrx(M)+', 对应二次型：\\\\ '+plus(A,1)
			},VA));
		}
		if(sel('Quadric Form → Matrix')){//S2(;)分别填写二次型中系数：x1² x2² x3² x4² x1x2 x1x3 x2x3，(n(n+1)/2个元素)得到相应的矩阵
			rS=rS.concat(Arrf(function(t){
				var t0=t.replace(/&.+/,''),tA;
				if(/x\d\^2/.test(t0) || /x\dx\d/.test(t0)){
					var MC=MfS('QF('+t0+')','co');
					M=MC[0];
					tA=MC[1];
				}else if(/^S2/.test(t0)){
					tA=t0.replace(/^S2\(|\)$/g,'').split(/[ ,;]/g);
					M=MfS(t0);
				}else{
					tA=t0.split(/[ ,;]/g);
					M=MfS('S2('+t0+')');
				}
				
				var m=M.length,A=[];
				for(var i=0;i<m;i++){
					consolelog(tA[i],'x_'+(i+1)+'^2');
					A.push(times([tA[i],'x_'+(i+1)+'^2']));
				}
				consolelog(A.join(' ; ; '));
				
				for(var i=0;i<m;i++){
					for(var j=i+1;j<m;j++){
						/*	(m-1)+(m-2)+...+(m-1-i+1)+m = (m-1+m-i)*i/2+m
							*/
							consolelog(tA[(m*2-1-i)*i/2+(j-i-1)+m],'x_'+(i+1)+'x_'+(j+1));
						
						A.push(times([tA[(m*2-1-i)*i/2+(j-i-1)+m],'x_'+(i+1)+'x_'+(j+1)]));//(m-1+m-i-2)*i/2+m-1+(j-i)
					}
				}
				
				consolelog(A.join(' ; ; '));
				return '二次型'+plus(A,1)+', 对应系数矩阵：\\\\ '+kmtrx(M)
			},VA));
		}


		if(sel('二次型化标准型（配方法）')){//填写二次型：x1² x2² x3² x4² x1x2 x1x3 x2x3，(n(n+1)/2个元素)代数和
			/*
				
			f(x_1,x_2,x_3)
=2x_1^2-3x_2^2+x_3^2+4x_1x_2-6x_1x_3-4x_2x_3
=(x_3-(3x_1+2x_2))^2-(3x_1+2x_2)^2+2x_1^2-3x_2^2+4x_1x_2
=(x_3-(3x_1+2x_2))^2-7x_1^2-7x_2^2-8x_1x_2
=(x_3-(3x_1+2x_2))^2-7(x_1+(4/7)x_2)^2-(33/7)x_2^2


https://zhidao.baidu.com/question/750762700228964772.html	
				
			*/
			rS=rS.concat(Arrf(function(t){
				var t0=t.replace(/&.+/,''),tA;
				if(/x\d\^2/.test(t0) || /x\dx\d/.test(t0)){
					var MC=MfS('QF('+t0+')','co');
					M=MC[0];
					tA=MC[1];
				}else if(/^S2/.test(t0)){
					tA=t0.replace(/^S2\(|\)$/g,'').split(/[ ,;]/g);
					M=MfS(t0);
				}else{
					tA=t0.split(/[ ,;]/g);
					M=MfS('S2('+t0+')');
				}
				
				var m=M.length,A=[];
				for(var i=0;i<m;i++){
					A.push(times([tA[i],'x_'+(i+1)+'^2']));
				}
				for(var i=0;i<m;i++){
					for(var j=i+1;j<m;j++){
						/*	(m-1)+(m-2)+...+(m-1-i+1)+m = (m-1+m-i)*i/2+m
							*/
						A.push(times([tA[(m*2-1-i)*i/2+(j-i-1)+m],'x_'+(i+1)+'x_'+(j+1)]));//(m-1+m-i-2)*i/2+m-1+(j-i)
					}
				}
				return '二次型'+plus(A,1)+', 对应系数矩阵：\\\\ '+kmtrx(M)
			},VA));
		}


		if(sel('二次型化标准型（合同变换）')){//

		}

		if(sel('二次型求秩')){//分别填写二次型中系数：x1² x2² x3² x1x2 x1x3 x2x3，(n(n+1)/2个元素)得到相应的矩阵
			rS=rS.concat(Arrf(function(t){
				var t0=t.replace(/&.+/,''),M=MfS(/^S2/.test(t0)?t0:'S2('+t0+')'), R=Mtrx.opr1('rankPTs',M,'iE=');
				return '二次型系数矩阵：\\\\ '+R[1]
			},VA));
		}

		if(sel('二次型正定')){//

		}



//Base


		if(sel('基[ⅠⅡ]，过渡矩阵P，坐标[xy]，求基[ⅡⅠ]、坐标[yx]【β=αP，X=PY】')){//第1行：基&[12]	第2行：P	第3行：坐标&[xy] xy标明坐标是x，还是y
			var hasP1=/&/.test(VA[0]),ij1=hasP1?VA[0].replace(/.+&/,''):'1',B1=MfS(VA[0]),n=B1.length,P=MfS(VA[1]),C=VA[2]?MfS(VA[2],'vT'):'',B2;
			if(ij1=='1'){
				B2=Mtrx.opr2('*',B1,P);
				rS.push('基Ⅱ：β = αP = '+kmtrx(B2));

			}else{
				var B=Mtrx.opr1('invrPTs',Mtrx.build.B([[P],[B1]]),'iJ=');
				B2=subMtrx(B[0][0],n+1,2*n,1,n);
				rS.push('基Ⅰ：α = βP^{-1} = '+kmtrx(B2));
			}
			if(C){
				var hasP2=/&/.test(VA[2]),ij2=hasP2?VA[2].replace(/.+&/,''):'x';
				if(ij2=='x'){
					var Y=Mtrx.opr1('invlPTs',Mtrx.build.B([[P,C]]),'iS='), y=subMtrx(Y[0][0],1,n,n+1,n+1);
					rS.push('下面来求坐标：y = P^{-1}x',Y[1],'即，所求坐标：y = '+kmtrx(y));
				}else{
					rS.push('x = Py = '+kmtrx(Mtrx.opr2('*',P,C)));
				}
			}
		}
		
		if(sel('基ⅠⅡ，坐标[xy]，求过渡矩阵、坐标[yx]【β=αP，X=PY】')){//第1行：基1	第2行：基2	第3行：坐标&[xy]
			var B1=MfS(VA[0]),n=B1.length,B2=MfS(VA[1]),C=VA[2]?MfS(VA[2],'vT'):'';
			var B=Mtrx.opr1('invlPTs',Mtrx.build.B([[B1,B2]]),'iS='), P=subMtrx(B[0][0],1,n,n+1,2*n);
			rS.push(kxA(['根据(β_1,β_2,β_3)=(α_1,α_2,α_3)P','对增广矩阵施行初等行变换，来求矩阵P']),
				B[1], '即，过渡矩阵P = α^{-1}β = '+kmtrx(P));

			if(C){
				var hasP=/&/.test(VA[2]),ij=hasP?VA[2].replace(/.+&/,''):'x';
				if(ij=='x'){
					var Y=Mtrx.opr1('invlPTs',Mtrx.build.B([[P,C]]),'iS='), y=subMtrx(Y[0][0],1,n,n+1,n+1);
					rS.push('下面来求坐标：y = P^{-1}x',Y[1],'即，所求坐标：y ='+kmtrx(y));
				}else{
					rS.push('所求坐标：x = Py = '+kmtrx(Mtrx.opr2('*',P,C)));
				}
			}
		}

		if(sel('基ⅠS=基ⅡT，坐标[xy]，求过渡矩阵、坐标[yx]【S=PT，X=PY】')){//第1行：S	第2行：T	第3行：坐标&[xy]
			var S=MfS(VA[0]),n=S.length,T=MfS(VA[1]),C=VA[2]?MfS(VA[2],'vT'):'';
			var B=Mtrx.opr1('invrPTs',Mtrx.build.B([[T],[S]]),'jS='), P=subMtrx(B[0][0],n+1,2*n,1,n);
			rS.push(kxA(['根据(β_1,β_2,β_3)T=(α_1,α_2,α_3)S','以及(β_1,β_2,β_3)=(α_1,α_2,α_3)P',
				'得知P = ST^{-1}，下面来对增广矩阵'+zmtrx([['T'],['S']]),'施行初等列变换→'+zmtrx([['I'],['ST^{-1}']])+'='+zmtrx([['I'],['P']])+'来求矩阵P']),
				B[1], '即，过渡矩阵P = ST^{-1} = '+kmtrx(P));

			if(C){
				var hasP=/&/.test(VA[2]),ij=hasP?VA[2].replace(/.+&/,''):'x';
				if(ij=='x'){
					var Y=Mtrx.opr1('invlPTs',Mtrx.build.B([[P,C]]),'iS='), y=subMtrx(Y[0][0],1,n,n+1,n+1);
					rS.push('下面来求坐标：y = P^{-1}x',Y[1],'即，所求坐标：y ='+kmtrx(y));
				}else{
					rS.push('所求坐标：x = Py = '+kmtrx(Mtrx.opr2('*',P,C)));
				}
			}
		}

		if(sel('标准正交基ⅠP=基Ⅱ，坐标[xy]，求坐标[yx]【过渡矩阵P，X=PY】')){//第1行：P	第2行：坐标&[xy]
			var P=MfS(VA[0]),n=P.length,C=MfS(VA[1],'vT');
			rS.push(kxA(['('+zlr('α_',seqA(1,n).join(' '),',')+')=('+zlr('ε_',seqA(1,4).join(' '),',')+')P','其中ε_i是标准正交基','过渡矩阵P = '+kmtrx(P)]));

			var hasP=/&/.test(VA[1]),ij=hasP?VA[1].replace(/.+&/,''):'x';
			if(ij=='x'){
				consolelog(Mtrx.build.B([[P,C]]));
				var Y=Mtrx.opr1('invlPTs',Mtrx.build.B([[P,C]]),'iS='), y=subMtrx(Y[0][0],1,n,n+1,n+1);
				rS.push('x='+Mtrx.toStr(C),'下面来求坐标：y = P^{-1}x',Y[1],'即，所求坐标：y ='+kmtrx(y));
			}else{
				rS.push('所求坐标：x = Py = '+kmtrx(Mtrx.opr2('*',P,C)));
			}

		}





		if(sel('线性变换𝒜，基η，求基下矩阵【A=η^{-1}𝒜】')){//第1行：𝒜矩阵\n第2行：基P
			var A=MfS(VA[0]),P=MfS(VA[1]);
			rS.push('𝒜=ηA，其中η是基组成的矩阵，则A=η^{-1}𝒜，下面使用初等变换来求');

			var P_A=Mtrx.opr1('invlPTs',Mtrx.build.B([[P,A]]),'iS='),
				P_A0=P_A[0][0],m=P_A0.length,n=P_A0[0].length,P_1A=subMtrx(P_A0,1,m,m+1,n);

			rS.push(P_A[1])

		}
		if(sel('标准正交基下矩阵A，基Ⅱ，求基下矩阵【B=P^{-1}AP】')){//第1行：标准正交基下矩阵A\n第2行：基P
			var A=MfS(VA[0]),P=MfS(VA[1]);
			rS.push('𝒜(x_1, x_2, x_3)^T = A(x_1, x_2, x_3)^T',
				'其中A='+kmtrx(A),
				'设𝒜(a_1, a_2, a_3)^T = (a_1, a_2, a_3)^TB = PB',
				'则AP=PB'
				);

			rS.push('基下矩阵B=P^{-1}AP，下面使用初等变换来求P^{-1}A');
			var P_A=Mtrx.opr1('invlPTs',Mtrx.build.B([[P,A]]),'iS='),
				P_A0=P_A[0][0],m=P_A0.length,n=P_A0[0].length,P_1A=subMtrx(P_A0,1,m,m+1,n),
				P_1AP=Mtrx.opr2('*',P_1A,P);
			rS.push(P_A[1],'P^{-1}AP='+kmtrx(P_1AP))

		}

		if(sel('基ⅠⅡ，基下矩阵A[B]，求基下矩阵[A]B【B=P^{-1}AP】')){//第1行：基1	第2行：基2	第3行：A[B]&[12]
			var B1=MfS(VA[0]),n=B1.length,B2=MfS(VA[1]),C=MfS(VA[2]),ij=/.+&/.test(VA[2])?VA[2].replace(/.+&/,''):'1';
			var B=Mtrx.opr1('invlPTs',Mtrx.build.B([[B1,B2]]),'iS='), P=subMtrx(B[0][0],1,n,n+1,2*n);
			rS.push(B[1],'基Ⅰ到基Ⅱ的过渡矩阵P = α^{-1}β = η_1^{-1}η_2 = ε^{-1}η = '+kmtrx(P));
			if(ij=='1'){
				rS.push('设基Ⅰ下矩阵是A，则基Ⅱ下矩阵B=P^{-1}AP，下面使用初等变换来求P^{-1}A');
				var P_A=Mtrx.opr1('invlPTs',Mtrx.build.B([[P,C]]),'iS='),
					P_A0=P_A[0][0],m=P_A0.length,n=P_A0[0].length,P_1A=subMtrx(P_A0,1,m,m+1,n),
					P_1AP=Mtrx.opr2('*',P_1A,P);
				rS.push(P_A[1],'P^{-1}AP='+kmtrx(P_1AP))
				
			}else{
				rS.push('基Ⅰ下矩阵A=PBP^{-1}');
				var P=MfS(VA[0]), PB=Mtrx.opr2('*',P,C),
					PBP_=Mtrx.opr1('invrPTs',Mtrx.build.B([[P],[PB]]),'jS=');
				rS.push('PB='+kmtrx(PB),'使用初等变换来求PBP^{-1}',PBP_[1])
			}
		}

		if(sel('基Ⅰ(基Ⅱ是标准正交基）η，基Ⅰ线性变换𝒜，求基Ⅱ下矩阵B【B=𝒜η^{-1}】')){//第1行：基1,η		第2行：基Ⅰ线性变换A
			var N=MfS(VA[0]),A=MfS(VA[1]);

			rS.push('设基Ⅰ下矩阵是A=η^{-1}𝒜，基Ⅰ到基Ⅱ的过渡矩阵是P=η^{-1}，则基Ⅱ下矩阵'+
				Eq(ZLR('B P^{-1}AP P^{-1}η^{-1}𝒜P ηη^{-1}𝒜η^{-1} 𝒜η^{-1}'))+
				'下面使用初等变换来求B');
			var A_N=Mtrx.opr1('invrPTs',Mtrx.build.B([[N],[A]]),'jS=');
			rS.push(A_N[1])

		}

		if(sel('基ⅠηⅡε，线性变换𝒜[ℬ]，求基下矩阵[A]B【B=ε^{-1}𝒜η^{-1}ε】')){//第1行：基1,η  第2行：基2,ε     第3行：𝒜[ℬ]&[12]
			var N=MfS(VA[0]),E=MfS(VA[1]),ij=/.+&/.test(VA[2])?VA[2].replace(/.+&/,''):'1';

			
			
			if(ij=='1'){
				var A=MfS(VA[2]);
				rS.push('设基Ⅰ下矩阵是A=η^{-1}𝒜，基Ⅰ到基Ⅱ的过渡矩阵是P=η^{-1}ε，则基Ⅱ下矩阵'+
					Eq(ZLR('B P^{-1}AP (ε^{-1}η)(η^{-1}𝒜)(η^{-1}ε) ε^{-1}𝒜η^{-1}ε')));
				var E_A=Mtrx.opr1('invlPTs',Mtrx.build.B([[E,A]]),'iS='),
					E_A0=E_A[0][0],m=E_A0.length,n=E_A0[0].length,E_1A=subMtrx(E_A0,1,m,m+1,n),
					N_E=Mtrx.opr1('invlPTs',Mtrx.build.B([[N,E]]),'iS='),
					N_E0=N_E[0][0],N_1E=subMtrx(N_E0,1,m,m+1,n),
					B=Mtrx.opr2('*',E_1A,N_1E);
				rS.push('下面使用初等变换来求B，先求ε^{-1}𝒜'+E_A[1],
					'再求η^{-1}ε'+N_E[1],
					'B=(ε^{-1}𝒜)(η^{-1}ε)='+kmtrx(B))
				
			}else{
				var B=MfS(VA[2]);
				rS.push('设基Ⅱ下矩阵是B=ε^{-1}ℬ，基Ⅰ到基Ⅱ的过渡矩阵是P=η^{-1}ε，则基Ⅰ下矩阵'+Eq(ZLR('A PBP^{-1} (η^{-1}ε)(ε^{-1}ℬ)(ε^{-1}η) η^{-1}ℬε^{-1}η')));
				var N_B=Mtrx.opr1('invlPTs',Mtrx.build.B([[N,B]]),'iS='),
					N_B0=N_B[0][0],m=N_B0.length,n=N_B0[0].length,N_1B=subMtrx(N_B0,1,m,m+1,n),
					E_N=Mtrx.opr1('invlPTs',Mtrx.build.B([[E,N]]),'iS='),
					E_N0=E_N[0][0],E_1N=subMtrx(E_N0,1,m,m+1,n),
					A=Mtrx.opr2('*',N_1B,E_1N);
				rS.push('下面使用初等变换来求A，先求η^{-1}ℬ'+N_B[1],
					'再求ε^{-1}η'+E_N[1],
					'A=(η^{-1}ℬ)(ε^{-1}η)='+kmtrx(A))
			}
				

		}




		if(sel('基[ⅠⅡ]，坐标xy，求过渡矩阵、基[ⅡⅠ]【β=αP，X=PY】')){//第1行：基&[12]	第2行：坐标x	第3行：坐标y
			//基1x=基2y 能求出基2吗？
			var hasP=/&/.test(VA[0]),ij=hasP?VA[0].replace(/.+&/,''):'1';
			var B1=MfS(VA[0]),n=B1.length,X=MfS(VA[1]),Y=MfS(VA[2]);
			var P=subMtrx(B[0][0],1,n,n+1,2*n);
			rS.push(B[1], '过渡矩阵P = α^{-1}β = '+kmtrx(P));

		}
		if(sel('基[ⅠⅡ]，y=Mx，求过渡矩阵、基[ⅡⅠ]【β=αP，X=PY】')){//第1行：基&[12]	第2行：M
			
			var hasP=/&/.test(VA[0]),ij=hasP?VA[0].replace(/.+&/,''):'1',ij1=ij=='1';
			var B1=MfS(VA[0]),n=B1.length,M=MfS(VA[1]);

			var P=Mtrx.opr1('inv',M),P1=Mtrx.opr1('invPTs',M,'iS=')[1],B2=ij1?Mtrx.opr2('*',M,B1):Mtrx.opr2('*',B1,P),B2s=[],
				meP=kmtrx(P),meM=kmtrx(M),meB1=kmtrx(B1),meB2=kmtrx(B2);
			for(var i=0;i<n;i++){
				B2s.push('ξη'[+ij1]+sub(i+1,'')+' = ('+Arri(B2,i)+')^T');
			}
			rS.push('y=Mx, 矩阵M='+meM, '过渡矩阵P = M^{-1} = '+meP,'求逆矩阵的过程：',P1,
				'基'+'ⅡⅠ'[+ij-1]+' = ',
				ij1?meM+meB1+' = '+meB2:meB1+meP+' = '+meB2,
				B2s.join(', ')
			);

		}

		if(sel('基，坐标xy，求度量矩阵M、内积【M=α^Tα，(a,b)=x^TMy】')){//第1行：基α	第2行：坐标x	第3行：坐标y

			var B=MfS(VA[0]),n=VA.length,M=Mtrx.opr2('*',Mtrx.opr1('T',B),B);
			rS.push('度量矩阵M = A^TA = '+kmtrx(M));
			if(n>1){
				var X=MfS(VA[1]),Y=MfS(VA[2]);
				rS.push('内积(a,b) = x^TMy = '+kmtrx(Mtrx.opr2('*',Mtrx.opr1('T',X),M,Y)));
			}


		}
		if(sel('度量矩阵，求一组标准正交基、过渡矩阵、坐标')){//


		}


//Linear Space
		if(sel('Dimension')){//


		}
		if(sel('零度')){//


		}
		if(sel('Kernel')){//


		}
		if(sel('Range')){//


		}
	}



	OH(KxA(rS));
};
