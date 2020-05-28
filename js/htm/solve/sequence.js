/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

solve['sequence']=function(inputValue, uriA){
	var v=inputValue.trim(), VA=v.split('\n'), n=VA.length, rS=[], numReg=/[ ,;、，；]+/g, numReg2=/[\n ,;、，；]+/g;

	if(sel(uriA,'众数')){
		rS=rS.concat(
			Arrf(function(t){
				var x=math.mode(t.split(numReg))
				return '众数：'+x

		},VA));
	}


	if(sel(uriA,'算术平均值')){
		rS=rS.concat(
			Arrf(function(t){
				var A=t.split(numReg), x=math.mean(A), y=math.sum(A);
				return '算术平均值：'+x+' (和值：'+y+')'

		},VA));
	}


	if(sel(uriA,'几何平均值')){
		rS=rS.concat(
			Arrf(function(t){
				var A=t.split(numReg),y=math.prod(A), x=math.pow(y,1/A.length)
				return '几何平均值：'+x+' (乘积：'+y+')'

		},VA));
	}

	if(sel(uriA,'调和平均值')){
		rS=rS.concat(
			Arrf(function(t){
				var A=t.split(numReg), B=Arrf(function(x){return 1/(+x)}, A), x=math.mean(B), y=math.sum(B);
				return '调和平均值：'+(1/x)+' (倒数和：'+y+')'

		},VA));
	}

	if(sel(uriA,'中位数')){
		rS=rS.concat(
			Arrf(function(t){
				var x=math.median(t.split(numReg))
				return '中位数：'+x

		},VA));
	}

	if(sel(uriA,'方差')){
		rS=rS.concat(
			Arrf(function(t){
				var x=math.var(t.split(numReg))
				return '方差：'+x

		},VA));
	}

	if(sel(uriA,'标准差')){
		rS=rS.concat(
			Arrf(function(t){
				var x=math.std(t.split(numReg))
				return '标准差：'+x

		},VA));
	}
	if(sel(uriA,'最小值')){
		rS=rS.concat(
			Arrf(function(t){
				var x=math.min(t.split(numReg))
				return '最小值：'+x

		},VA));
	}
	if(sel(uriA,'最大值')){
		rS=rS.concat(
			Arrf(function(t){
				var x=math.max(t.split(numReg))
				return '最大值：'+x

		},VA));
	}
	if(sel(uriA,'极差')){
		rS=rS.concat(
			Arrf(function(t){
				var A=t.split(numReg), x=math.max(A), y=math.min(A);
				return '极差：'+(x-y)+' (最大值：'+x+'，最小值：'+y+')'

		},VA));
	}

	if(sel(uriA,'频率') || sel(uriA,'频数')){

		var vA=v.split(numReg2),vAn=vA.length, U=[],UC=[],s='',B=[], n0=vAn;
		//console.log(vA);
		for(var i=0;i<vAn;i++){
			var vi=vA[i],Ui=U.indexOf(vi);
			if(Ui<0){
				U.push(vi);
				UC.push(1);
			}else{
				UC[Ui]++;
			}
		}
		vAn=U.length;
		for(var i=0;i<vAn;i++){
			var ci=UC[i], Ci=B.indexOf(ci);
			if(Ci<0){
				B.push(ci);
			}

		}
		B.sort(function(a,b){return a-b});

		for(var j=B.length-1;j>-1;j--){
			var cnt=B[j], kwd=[], fq=(cnt*100/n0).toFixed(2);
			for(var i=0;i<vAn;i++){
				var ci=UC[i];
				if(ci==cnt){
					kwd.push(U[i])
				}
			}
			if(B.length==1){
				fq=100
			}
			var kl=kwd.length,kwdfq=(kl*100/vAn).toFixed(2), cntkwd=cnt*kl, cntkwdfq=(cntkwd*100/n0).toFixed(2);
			s+='<tr><td>'+cnt+'</td>'+
					'<td><meter min=0 max=100 value='+cntkwdfq+' title="'+cntkwd+'/'+n0+'=\n'+cntkwdfq+'%" /></td>'+
					'<td><textarea>'+kwd.join('\n')+'</textarea></td>'+
					'<td><meter min=0 max=100 value='+kwdfq+' title="'+kl+'/'+vAn+'=\n'+kwdfq+'%" />'+kl+'</td>'+

					'<td><meter min=0 max=100 value='+fq+' title="'+(B.length==1?'':cnt+'/'+n0+'=\n')+fq+'%" /></td>'+
					'</tr>'
		}
		if(B.length>1){
			fq=(vAn*100/n0).toFixed(2);
			s+='<tr><td colspan=2><b>'+gM('Uniq')+'</b>'+br+'<meter min=0 max=100 value='+fq+' title="'+vAn+'/'+n0+'=\n'+fq+'%" /> '+fq+'%</td><td><textarea>'+U.join('\n')+'</textarea></td><td><meter min=0 max=100 value=100 />'+U.length+'</td><td></td></tr>'
		}
		//console.log(s);
		rS.push('<table><thead><tr><th>'+gM('Times')+'</th><th>'+gM('Frequency')+'</th><th>'+gM('Content')+'</th><th>'+gM('Count')+'</th><th>'+gM('Frequency / Count')+'</th></tr></thead><tbody>'+s+'</tbody></table>')

	}


	return rS
}
