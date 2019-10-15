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
solve['Set']=function(inputValue, uriA){

	var v=inputValue.trim(), VA=v.split('\n'), n=VA.length, rS=[];

	var strA=fCC(seqA(65,n)).split('');


	if(sel(uriA,'Set')){
		rS=rS.concat(concat(strA,
			Arrf(function(t){
				return '='+set.toStr(set.fromStr(t),'latex')
		},VA)));
	}
	if(sel(uriA,'|A|')){
		rS=rS.concat(concat(copyA('|',n), strA,
			Arrf(function(t){
				return '|='+set.toStr(set.opr1('势',set.fromStr(t)),'latex')
		},VA)));
	}
	if(sel(uriA,'P(A)')){
		rS=rS.concat(concat(copyA('P(',n), strA,
			Arrf(function(t){
				return ')='+set.toStr(set.opr1('幂',set.fromStr(t)),'latex')
		},VA)));
	}
	if(sel(uriA,'全部关系')){
		rS=rS.concat(
			Arrf(function(t){
				var si=set.fromStr(t),sin=si.length,powsi=set.toStr(set.opr1('幂',cartestian([si,si],'<>')),'html');
				//console.log(powsi);
				return '集合上的全部关系共有2'+sup(sin+sup(2))+'= '+Math.pow(2,sin*sin)+'种：'+br+powsi

		},VA));
	}
		

	if(sel(uriA,'命题化')){
		rS.push('等价的命题公式：'+Prop.toStr(Prop.fromStr(v,'set')));
	}
	if(sel(uriA,'∩')){
		rS.push(strA.join('∩')+'='+set.toStr(set.opr2.apply(null,['∩'].concat(Arrf(set.fromStr,VA))),'latex'));

	}
	if(sel(uriA,'∪')){
		rS.push(strA.join('∪')+'='+set.toStr(set.opr2.apply(null,['∪'].concat(Arrf(set.fromStr,VA))),'latex'));
	}
	if(sel(uriA,'-')){
		rS.push(strA.join('-')+'='+set.toStr(set.opr2.apply(null,['-'].concat(Arrf(set.fromStr,VA))),'latex'));
	}
	if(sel(uriA,'⊕')){//最后一行指定求法p
		var si=VA.slice(-1)[0], p=/^[\+\-]/.test(si)?si:'', notep=function(t){
			return 'A⊕B='+(/^\+/.test(t||'')?'(A∪B)-(A∩B)':'(A-B)∪(B-A)')
		};
		if(p){
			rS.push((n<4?notep(p)+'=':strA.slice(0,n-1).join('⊕')+eq(notep(p)))+
				set.toStr(set.opr2.apply(null,['⊕'].concat(Arrf(set.fromStr,VA.slice(0,n-1)),p),'cp2'),'latex')
			);
		}else{
			rS.push((n<3?notep()+'=':strA.join('⊕')+eq(notep()))+
				set.toStr(set.opr2.apply(null,['⊕'].concat(Arrf(set.fromStr,VA)),'cp2'),'latex')
			);
		}
	}
	if(sel(uriA,'⊗')){//最后一行指定求法p 倒数第2行指定全集U
		var si=VA.slice(-1)[0], p=/^[\+\-]/.test(si)?si:'', U=set.fromStr(VA.slice(p?-2:-1)[0]), w=Wcont(14,'集合运算与集合基数(势)'),notep=function(t){
			return 'A⊗B='+(/^.\+/.test(t||'')?w[8][2]:(/^.\-/.test(t||'')?w[7][2]:w[6][2])).replace(/\n.+/,'')
		};
		if(p){
			rS.push((n<5?notep(p)+'=':strA.slice(0,n-2).join('⊗')+eq(notep(p)))+
				set.toStr(set.opr2.apply(null,['⊗'].concat(Arrf(set.fromStr,VA.slice(0,n-1)),p),'cp2'),'latex')
			);
		}else{
			rS.push((n<4?notep()+'=':strA.slice(0,n-1).join('⊕')+eq(notep()))+
				set.toStr(set.opr2.apply(null,['⊗'].concat(Arrf(set.fromStr,VA)),'cp2'),'latex')
			);
		}
		/*
		rS.push((n<5?notep(p||'')+'=':strA.slice(0,n-2).join('⊗')+eq(notep(p||'')))+
			set.toStr(Arrf(function(x,y){return set.opr2('⊗',set.fromStr(x),set.fromStr(y),'',U)},VA.slice(0,n-2),'cp2'))
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
		rS.push(rsS+'='+set.toStr(cartestian(Arrf(set.fromStr,VA)),'latex'));
		
	}

	return rS

}