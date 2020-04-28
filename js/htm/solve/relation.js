/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

solve['relation']=function(inputValue, uriA){
	var v=inputValue.trim(), VA=v.split('\n'), n=VA.length, rS=[];

	var strA=fCC(seqA(65,n)).split('');

	if(sel(uriA,'关系类型')){
		var A=v.replace(/｛/g,'{').replace(/｝/g,'}').replace(/，/g,',').split(' '), An=A.length,st=A[0],
		bool=A[A.length-1],set2,Uset,rA=[],Rlt='{}',q,ra, rs='';
		st=set.fromStr(st);
		if(An==1){//商集确定的等价关系
			var Q=set.fromStr(A[0].substr(4)),Ql=[],QA=[];
			for(var i=0;i<Q.length;i++){
				var Qil=Q[i].length;
				Ql.push(Qil);
				QA.push(Mtrx.build.N(Qil,Qil,1,true))
			}
			q=true;//是商集
			set2=st;
			Uset=st;
		}else if(An==2){//集合自身与自身的关系
			set2=st;
			Uset=st;
		}else{
			set2=set.fromStr(A[1]);
			Uset=set.opr2('∪',st,set2);
		}

		var rn=Uset.length;
		var Mtrx2Rlt=function(M){
			var Si=[];
			for(var i=0;i<rn;i++){
				for(var j=0;j<rn;j++){
					if(M[i][j]){
						//Si.push('&lt;'+[set.toStr(Uset[i]),set.toStr(Uset[j])].join(',')+'&gt;')
						Si.push('< '+[set.toStr(Uset[i]),set.toStr(Uset[j])].join(',')+' >')
					}
				}
			}
			//console.log(Si);
			Si=tableL(Si,0,3);
			return $B('{'+Si.join(kbr)+'}',1)
		},Arr2RltSet=function(A){
			var Si=[];
			for(var i=0;i<A.length;i++){
				Si.push(set.toStr(Uset[A[i]]))
			}
			return '{'+Si.join(',')+'}'
		};
		if(An==1){//商集确定的关系
			rA=Mtrx.build.D(QA);
			//Rlt=Mtrx2Rlt(rA);
		}else if(/^\{/.test(bool)){//关系是集合形式
			//Rlt=bool;
			rA=Mtrx.build.N(rn,rn,0,true);
			var B=set.fromStr(bool);
			for(var k=0;k<B.length;k++){
				var Bk=B[k], b0=set.toStr(Bk[0]),b1=set.toStr(Bk[1]);
				rA[set.opr2('搜',Uset,b0)][set.opr2('搜',Uset,b1)]=1;
			}
			
		}else if(/^\[|I|diag\(/.test(bool)){//关系是矩阵形式
			//Rlt=bool;
			rA=Mtrx.fromStr(bool);

		}else{//关系是表达式
			//console.log(bool);
			var e2A=function(y){
				var x=y.replace(/=+/g,'==').replace(/x\|y/g,'y%x==0') ,A=x.split(/∨|∧/g);
				return A
			};
			var eA=e2A(bool),o=eA[0], oT=oType(o), isOr=/∨/.test(bool);

			for(var i=0;i<rn;i++){
				var si=Uset[i];
				if(An>2 && set.opr2('搜',st,si)<0){
					rA.push(Mtrx.build.A(rn,0));
				}else{
					rA.push([]);
					for(var j=0;j<rn;j++){
						var sj=Uset[j], ra=0;
						
						//console.log(o,oT,si,sj);
						for(var k=0;k<eA.length;k++){
							try{
								//console.log(i,j,k);
								var m=math.parse(eA[k]);
								//console.log(si,sj);
								ra=m.evaluate({x:si,y:sj, x1:si[0], x2:si[1], y1:sj[0], y2:sj[1]});
							}catch{
								//var m=math.parse(eA[k]);
								//console.log(i,j,k);
								//console.log(si,sj,eA[k])
								var o=eA[k].replace(/[xy]/g,'');
								ra=eval(oT).is.b2[o](si,sj);
							}

							if(isOr && ra || !isOr && !ra){
								break
							}
						}
						


						rA[i].push(+ra)
					}
				}
			}

		}
		Rlt=Mtrx2Rlt(rA);
//			console.log(Rlt);
		var isR=true,isS=true,isT=true,isA=true,isR2=true,isS2=true,isE,isQ,isP,isC,isH,rAt=Mtrx.opr1('T',rA);
		if(q){//是商集
		
			isE=q;isC=q,isH=q;
			isP=!q;isQ=!q;
		}else{
			for(var i=0;i<rn;i++){
				if(!rA[i][i]){
					isR=false;break;
				}
			}
			if(!isR){
				isA=false;
			}

			for(var i=0;i<rn;i++){
				if(rA[i][i]){
					isR2=false;break;
				}
			}

			for(var i=0;i<rn;i++){
				for(var j=0;j<rn;j++){
					if(i!=j && rA[i][j]!=rA[j][i]){
						isS=false;break;
					}
				}
				if(!isS){break}
			}
			for(var i=0;i<rn;i++){
				for(var j=0;j<rn;j++){
					if(i!=j && (rA[i][j]||rA[j][i]) && rA[i][j]==rA[j][i]){
						isS2=false;break;
					}
				}
				if(!isS2){break}
			}
			if(isA){
				for(var i=0;i<rn;i++){
					for(var j=0;j<rn;j++){
						if(i!=j && (rA[i][j]||rA[j][i])){
							isA=false;break;
						}
					}
					if(!isA){break}
				}
			}

			for(var i=0;i<rn;i++){
				for(var j=0;j<rn;j++){
					if(i!=j && rA[i][j]){
						for(var k=0;k<rn;k++){
							if(k!=i && k!=j && rA[j][k] && !rA[i][k]){
								isT=false;break;
							}
						}
					}
					if(!isT){break}
				}
				if(!isT){break}
			}
			isH=isR && isS;
			isE=isH && isT;
			isC=isE;
			if(!isC){
				for(var i=0;i<rn;i++){
					for(var j=0;j<rn;j++){
						if(i!=j && rA[i][j]){
							for(var k=0;k<rn;k++){
								if(k!=i && k!=j && rA[j][k] && !rA[k][i]){
									isC=false;break;
								}
							}
						}
						if(!isC){break}
					}
					if(!isC){break}
				}
			}
			isP=isR && isS2 && isT;
			isQ=isR2 && isS2 && isT;
		}

		var Y='✗✓×√✕';
//console.log(Rlt);
		rs+=[kdetail('关系R=',Rlt+kbr+'关系矩阵M='+Mtrx.toStr(rA)),
			kdetail('关系类型',ztable([ZLR('自反 反自反 对称 反对称 传递'),[Y[+isR],Y[+isR2],Y[+isS],Y[+isS2],Y[+isT]]])+kbr+	//,Y[+isA],Y[+isC]
				ztable([['相容 ⇔ 自反∧对称',Y[+isE]],
				['等价 ⇔ 自反∧对称∧传递 ⇔ 相容∧传递 ⇔ 自反∧循环',Y[+isE]],
				['拟序 ⇔ 反自反∧反对称∧传递',Y[+isQ]],
				['偏序 ⇔ 自反∧反对称∧传递',Y[+isP]],
				['全序(线序,简单序,链) ⇔ 完全∧偏序',Y[+(isP && isA)]],
				['良序 ⇔ 线序∧非空子集都有最小元',Y[+(isP && isA)]]])),

			kdetail('逆关系 R^{-1}'+(isS?'=R':''),(isS?'':'R^{-1}='+Mtrx2Rlt(rAt)+kbr+'关系矩阵：'+Mtrx.toStr(rAt)))].join(br);

		if(!isR){
			var rR=Mtrx.opr1('拷',rA);
			for(var i=0;i<rn;i++){
				rR[i][i]=1;
			}
		}
		rs+=kdetail('自反闭包 r(R)'+(isR?'=R':''),(isR?'':'r(R)='+Mtrx2Rlt(rR)+kbr+'关系矩阵：'+Mtrx.toStr(rR)));

		if(!isS){
			var sR=Mtrx.opr1('拷',rA);
			for(var i=0;i<rn;i++){
				for(var j=0;j<rn;j++){
					if(i!=j && sR[i][j]!=sR[j][i]){
						var ii=i, jj=j;
						if(sR[i][j]){ii=j;jj=i}
						sR[ii][jj]=1;
					}
				}
			}
		}
		rs+=kdetail('对称闭包 s(R)'+(isS?'=R':''),(isS?'':'s(R)='+Mtrx2Rlt(sR)+kbr+'关系矩阵：'+Mtrx.toStr(sR)));

		if(!isT){
			var tR=Mtrx.opr1('拷',rA);
			for(var i=0;i<rn;i++){
				for(var j=0;j<rn;j++){
					if(i!=j && tR[i][j]){
						for(var k=0;k<rn;k++){
							if(tR[j][k] && !tR[i][k]){
								tR[i][k]=1
							}
						}
					}
				}
			}
		}
		rs+=kdetail('传递闭包 t(R)'+(isT?'=R':''),(isT?'':'t(R)='+Mtrx2Rlt(tR)+kbr+'关系矩阵：'+Mtrx.toStr(tR)));

		if(isE){
			var EA=[],EAt=[];
			for(var i=0;i<rn;i++){
				if(EAt.length>=rn){break}
				if(EAt.indexOf(i)<0){
					EA.push([i]);
					EAt.push(i);
					for(var j=i+1;j<rn;j++){
						if(rA[i][j]){
							EA[EA.length-1].push(j);
							EAt.push(j);
						}
					}
				}
			}

			for(var i=0;i<EA.length;i++){
				EA[i]=Arr2RltSet(EA[i])
			}
			rs+=kdetail('商集 A/R','={'+EA.join(',')+'}, R的秩='+EA.length);
		}





		if(isP && !isA){//哈斯图

			var dmid='outHasee'+(new Date()).getTime()+(Math.random()+'').substr(2), nA=[],reA=[];
			var hM=plot.hasseMtrx(rA),ni=hM[0], B=hM[1];

			var nindex=function(m){//新索引
				for(var i=0;i<ni.length;i++){
					var nii=ni[i];
					for(var j=0;j<nii.length;j++){
						if(nii[j]==m){
							return [i+1,j+1]
						}
					}
				}
			};
			for(var i=0;i<rn;i++){//关系线
				for(var j=0;j<rn;j++){
					if(B[i][j]){
						reA.push([nindex(i),nindex(j)])
					}
				}
			}
			for(var i=0;i<ni.length;i++){//节点文本
				var Arr=[],nii=ni[i],niL=nii.length;
				for(var j=0;j<niL;j++){
					Arr.push(set.toStr(Uset[nii[j]]));
				}
				nA.push(Arr);
				
			}
			

			rs+=DCtv('plot',svgf.id('OH'+dmid,plot.hasse(dmid,nA,reA),1,' width="300" height="400"'));
			sTo(dayOrNight,1000);
		}

		rS.push(rs);

	}
	return rS

}
