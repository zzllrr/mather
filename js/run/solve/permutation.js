/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

solve['permutation']=function(inputValue, uriA){
	var v=inputValue.trim(), VA=v.split('\n'), n=VA.length, rS=[];

	var strA=fCC(seqA(963,n)).split(''),f=function(x){return PtS(Perm.opr1('轮换分解',x),'CT')};
		

	if(sel(uriA,'σ')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				var A=PfS(t), B=PtS(A), C=f(A);
				return ' = '+ B +(!C || B==C?'':' = '+C)
		},VA)));
		
	}
	if(sel(uriA,'Inversion Number')){
		console.log(strA);
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				var A=PfS(t);
				return gM('Inversion Number')+' = '+nInvOrder(A)
		},VA)));
	}
	if(sel(uriA,'奇偶性')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				var A=PfS(t);
				return '奇偶性 = '+'偶奇'[nInvOrder(A)%2]
		},VA)));
	}
	

	if(sel(uriA,'轮换分解')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				var A=PfS(t), B=Perm.opr1('轮换分解',A);
				return ' = '+PtS(B,'CT')
		},VA)));
	}
	
	
	if(sel(uriA,'对换分解')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				var A=PfS(t), B=Perm.opr1('对换分解',A);
				return ' = '+PtS(B,'CT')
		},VA)))
	}
	
	if(sel(uriA,'|σ|')){
		rS=rS.concat(concat(copyA('|',n),strA,
			Arrf(function(t){
				var A=PfS(t), B=Perm.opr1('阶',A);
				return '| = '+B
		},VA)))
	}
	
	if(sel(uriA,'σ^{-1}')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				var A=PfS(t), B=Perm.opr1('逆',A);
				return '^{-1} = '+PtS(B)+' \\\\ '+f(A)+'^{-1} = '+f(B)
		},VA)))
	}
	if(sel(uriA,'στ')){

		var A=Arrf(PfS,VA), C=Perm.opr2('*',A);
		rS.push(eqv([n<5?strA.join(''):prod('i',1,n,'σ_i','',''),PtS(C)]), eqv([Arrf(f,A).join(''),f(C)]));
	}
	if(sel(uriA,'τσ')){

		var A=Arrf(PfS,VA.reverse()), C=Perm.opr2('*',A);
		rS.push(eqv([n<5?strA.join(''):prod('i',n,1,'σ_i','',''),PtS(C)]), eqv([Arrf(f,A).join(''),f(C)]));
	}
	
	
	if(sel(uriA,'σ^n')){
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
	
	
	if(sel(uriA,'奇偶排列求ij')){//置换（含ij未知数）&奇1偶2
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

	return rS
}
