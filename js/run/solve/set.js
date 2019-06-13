/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
/*
	bug
	集合环合
{<1,2>,<2,4>,<3,3>}
{<1,3>,<2,4>,<4,2>}	
	
*/
solve['set']=function(inputValue, uriA){

	var v=inputValue.trim(), VA=v.split('\n'), n=VA.length, rS=[];

	var strA=fCC(seqA(65,n)).split('');


	if(sel(uriA,'Set')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				return '='+Set.toStr(Set.fromStr(t),'latex')
		},VA)));
	}
	if(sel(uriA,'|A|')){
		rS=rS.concat(concat(copyA('|',n), strA,
			Arrf(function(t){
				return '|='+Set.toStr(Set.opr1('势',Set.fromStr(t)),'latex')
		},VA)));
	}
	if(sel(uriA,'P(A)')){
		rS=rS.concat(concat(copyA('P(',n), strA,
			Arrf(function(t){
				return ')='+Set.toStr(Set.opr1('幂',Set.fromStr(t)),'latex')
		},VA)));
	}
	if(sel(uriA,'全部关系')){
		rS=rS.concat(
			Arrf(function(t){
				var si=Set.fromStr(t),sin=si.length,powsi=Set.toStr(Set.opr1('幂',cartestian([si,si],'<>')),'html');
				//console.log(powsi);
				return '集合上的全部关系共有2'+sup(sin+sup(2))+'= '+Math.pow(2,sin*sin)+'种：'+br+powsi

		},VA));
	}
		

	if(sel(uriA,'命题化')){
		rS.push('等价的命题公式：'+Prop.toStr(Prop.fromStr(v,'set')));
	}
	if(sel(uriA,'∩')){
		rS.push(strA.join('∩')+'='+Set.toStr(Set.opr2.apply(null,['∩'].concat(Arrf(Set.fromStr,VA))),'latex'));
								//	Set.toStr(Arrf(function(x,y){return Set.opr2('∩',Set.fromStr(x),Set.fromStr(y))},VA,'cp2'))
	}
	if(sel(uriA,'∪')){
		rS.push(strA.join('∪')+'='+Set.toStr(Set.opr2.apply(null,['∪'].concat(Arrf(Set.fromStr,VA))),'latex'));
	}
	if(sel(uriA,'-')){
		rS.push(strA.join('-')+'='+Set.toStr(Set.opr2.apply(null,['-'].concat(Arrf(Set.fromStr,VA))),'latex'));
	}
	if(sel(uriA,'⊕')){//最后一行指定求法p
		var si=VA.slice(-1)[0], p=/^[\+\-]/.test(si)?si:'', notep=function(t){
			return 'A⊕B='+(/^\+/.test(t||'')?'(A∪B)-(A∩B)':'(A-B)∪(B-A)')
		};
		if(p){
			rS.push((n<4?notep(p)+'=':strA.slice(0,n-1).join('⊕')+eq(notep(p)))+
				Set.toStr(Set.opr2.apply(null,['⊕'].concat(Arrf(Set.fromStr,VA.slice(0,n-1)),p),'cp2'),'latex')
			);
		}else{
			rS.push((n<3?notep()+'=':strA.join('⊕')+eq(notep()))+
				Set.toStr(Set.opr2.apply(null,['⊕'].concat(Arrf(Set.fromStr,VA)),'cp2'),'latex')
			);
		}
	}
	if(sel(uriA,'⊗')){//最后一行指定求法p 倒数第2行指定全集U
		var si=VA.slice(-1)[0], p=/^[\+\-]/.test(si)?si:'', U=Set.fromStr(VA.slice(p?-2:-1)[0]), w=Wcont(14,'集合运算与集合基数(势)'),notep=function(t){
			return 'A⊗B='+(/^.\+/.test(t||'')?w[8][2]:(/^.\-/.test(t||'')?w[7][2]:w[6][2])).replace(/\n.+/,'')
		};
		if(p){
			rS.push((n<5?notep(p)+'=':strA.slice(0,n-2).join('⊗')+eq(notep(p)))+
				Set.toStr(Set.opr2.apply(null,['⊗'].concat(Arrf(Set.fromStr,VA.slice(0,n-1)),p),'cp2'),'latex')
			);
		}else{
			rS.push((n<4?notep()+'=':strA.slice(0,n-1).join('⊕')+eq(notep()))+
				Set.toStr(Set.opr2.apply(null,['⊗'].concat(Arrf(Set.fromStr,VA)),'cp2'),'latex')
			);
		}
		/*
		rS.push((n<5?notep(p||'')+'=':strA.slice(0,n-2).join('⊗')+eq(notep(p||'')))+
			Set.toStr(Arrf(function(x,y){return Set.opr2('⊗',Set.fromStr(x),Set.fromStr(y),'',U)},VA.slice(0,n-2),'cp2'))
		);
		*/

	}
	if(sel(uriA,'×')){

		if(n==1){
			VA=v.replace(/ \d+$/,'');
			n=+v.substr(VA.length);
			VA=copyA(VA,n);
			rsS='A'+sup(n);
		}else{
			rsS=strA.join('×');
		}
		rS.push(rsS+'='+Set.toStr(cartestian(Arrf(Set.fromStr,VA)),'latex'));
		
	}

	return rS

}