/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

solve['vector']=function(inputValue, uriA){
	var v=inputValue.replace(/\\\\/g,'').trim(), VA=v.split('\n'), n=VA.length, rS=[];

	var strA=fCC(seqA(945,n)).split('');

	if(sel(uriA,'Row Vector')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				var A=MfS(t,'v');
				return ' = '+Mtrx.toStr(A,'v')
		},VA)));
	}
	if(sel(uriA,'Column Vector')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				var A=MfS(t,'v');
				return ' = '+Mtrx.toStr(A,'v')+'^T'
		},VA)));
	}

	if(sel(uriA,'|\\vec{a}|')){
		rS=rS.concat(concat('|',strA,
			Arrf(function(t){
				var A=MfS(t,'v');
				return '| = '+Mfn.toStr(Mtrx.opr1('向量模1',A))
		},VA)));
	}
	if(sel(uriA,'|\\vec{a}|^2')){
		rS=rS.concat(concat('|',strA,
			Arrf(function(t){
				var A=MfS(t,'v');
				return '|^2 = '+Mfn.toStr(Mtrx.opr1('向量模1',A,2))
		},VA)));
	}

	if(sel(uriA,'\\frac{\\vec{a}}{|\\vec{a}|}')){

		rS=rS.concat(Arrf(function(t,i){
			var A=MfS(t,'v'), C=Mtrx.opr1('单位化1',A);
			return frac(strA[i],'|'+strA[i]+'|','')+' = '+Mtrx.toStr(C)
		},VA));

	}
	if(sel(uriA,'α‧β') || sel('(α,β)')){
		var A=MfS(VA[0],'v'), B=MfS(VA[1],'v'), C=Mtrx.opr2('内积',A,B);
		rS=rS.concat(
			'α='+Mtrx.toStr(A,'v')+'^T, β='+Mtrx.toStr(B,'v')+'^T',
			'α‧β = (α,β) = '+C
		);
	}
	if(sel(uriA,'向量夹角')){
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
	if(sel(uriA,'α×β')){
		var A=MfS(VA[0],'v'), B=MfS(VA[1],'v');
		rS=rS.concat(
			'α='+Mtrx.toStr(A,'v')+'^T, β='+Mtrx.toStr(B,'v')+'^T',
			'α×β = '
		);
	}
	if(sel(uriA,'混合积')){
		var A=MfS(VA[0],'v'), B=MfS(VA[1],'v'), C=MfS(VA[2],'v');
		rS=rS.concat(
			'a='+Mtrx.toStr(A,'v')+'^T, b='+Mtrx.toStr(B,'v')+'^T, c='+Mtrx.toStr(C,'v')+'^T',
			'a⋅(b×c) = '
		);
	}
	if(sel(uriA,'双重矢性积')){
		var A=MfS(VA[0],'v'), B=MfS(VA[1],'v'), C=MfS(VA[2],'v');
		rS=rS.concat(
			'a='+Mtrx.toStr(A,'v')+'^T, b='+Mtrx.toStr(B,'v')+'^T, c='+Mtrx.toStr(C,'v')+'^T',
			'a×(b×c) = '
		);
	}

	return rS
}
