/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

solve['function']=function(inputValue, uriA){
	var v=inputValue.trim(), VA=v.split('\n'), n=VA.length, rS=[];

	//console.log(uriA);
	
	if(sel(uriA,'Simplify','Unary Operation')){

		rS=rS.concat(
			Arrf(function(t){
				var f=math.parse(t), m=Mfn.fromStr(t), A=['\\quad '+m.toStr(1)];


					f_=math.simplify(f);
					m_=f_.toString(mathjsOutputOpt('',''));

					A.push('='+Mfn.fromStr(m_).toStr(1),'mathjs ='+m_ );//kfrac( ,1)	Mfn.opr1('=',		Mfn.fromStr(m_).toStr(1)

				return A.join(kbr2)
		},VA));
	}
	if(sel(uriA,'Rationalize','Unary Operation')){

		rS=rS.concat(
			Arrf(function(t){
				var f=math.parse(t), m=Mfn.fromStr(t), A=['\\quad '+m.toStr(1)];


					f_=math.rationalize(f);
					m_=f_.toString(mathjsOutputOpt('',''));

					A.push('='+Mfn.fromStr(m_).toStr(1),'mathjs ='+m_ );

				return A.join(kbr2)
		},VA));
	}



	if(sel(uriA,'Derivative','Differential')){	//f(x)&x&阶数&x0	f(x,y)=0&x&阶数&x0	f(x,y)=g(x,y)&x&阶数&x0

		rS=rS.concat(
			Arrf(function(t){
				var tA=t.split('&'),d=(tA[1]||'x').split(',')[0], xy=/,/.test(tA[1])?tA[1]:d+',y', y=xy.split(',')[1],
					tA0=tA[0], tp=/= *0/.test(tA0)?1:(/=/.test(tA0)?2:0),A, fname='f';

				if(tp==2){
					tA[0]=tA0.replace('=','-(')+')';
					A=['F('+xy+')='];
					fname='F';
				}else if(tp){
					tA[0]=tA0.replace(/=.+/,'');
					A=['f('+xy+')=']
				}else{
					A=['f('+d+')=']
				}


				var f=math.parse(tA[0]), m=Mfn.fromStr(tA[0]);
				A[0]+=m.toStr(1)+(tp?'=0':'');
				

				if(tp){//隐函数
					for(var j=1,l=+tA[2]||1;j<=l;j++){
						
						if(j==1){
							var f_A=[math.derivative(f,d), math.derivative(f,y)],
							f_=math.simplify('-'+Arrf(math2str,f_A).join('/'));

							var fml='=-'+kfrac(zlrA(fname+'_',xy.split(',')));
							
						}else if(j==2){
							var f_A=Arrf(math.simplify,[Arrf(math2str, [math.derivative(f_A[0],d), f_A[1]]).join(' * ')+'-'+
									Arrf(math2str, [math.derivative(f_A[1],d), f_A[0]]).join(' * '),
									pp(math2str(f_A[1]))+'^2']);
							
							var f_=math.simplify('-'+Arrf(function(x){return pp(math2str(x))},f_A).join('/'));

							var fml='=-'+kfrac([fname+'_{'+d.repeat(2)+'}'+fname+'_'+y+'-'+fname+'_'+d+fname+'_{'+y+d+'}', fname+'_'+y+'^2']);
							
						}else{	//暂只支持1，2阶求导，高阶公式较复杂
							break;
						}

						//var m_=f_.toString();
						
						A.push(difn(y,d,'',j)+fml+'=-'+kfrac(Arrf(function(x){return math2str(x,1)},f_A))+'='+math2str(f_,1));	//Mfn.fromStr(m_).toStr(1)
						//f=f_;
					}
	


				}else{

					for(var j=1,l=+tA[2]||1;j<=l;j++){
						var f_=math.derivative(f,d), m_=f_.toString();
						//console.log(m_);
						A.push("f"+(j<4?"'".repeat(j):"^{("+j+")}")+"("+d+')='+Mfn.fromStr(m_).toStr(1));
						f=f_;
					}
	

				}

				if(tA[3]){
					j--;
					var o={};
					o[d]=+tA[3]||0;
					f_=f.evaluate(o);
					m_=f_.toString();
					A.push("f"+(j<4?"'".repeat(j):"^{("+j+")}")+"("+tA[3]+')='+Mfn.fromStr(m_).toStr(1))
				}
				/*
				'或写成：',
					'f('+d+')='+f.toTex(),	//m.toStr()
					'f\'('+d+')='+f_.toTex()

				*/
				return A.join(kbr2)
		},VA));
	}


	if(sel(uriA,'Partial Derivative','Differential')){
/*
fx fy
fxx fxy fyx fyy
fxxx fxxy
*/
		rS=rS.concat(
			Arrf(function(t){
				var tA=t.split('&'),d=(tA[1]||'x,y').split(',')[0],
					xy=/,/.test(tA[1])?tA[1]:d+',y', dA=xy.split(','),
					tA0=tA[0], tp=/= *0/.test(tA0)?1:(/=/.test(tA0)?2:0),A;
				


				if(tp){//隐函数
					if(tp==2){
						tA[0]=tA0.replace('=','-(')+')';
					}else if(tp){
						tA[0]=tA0.replace(/=.+/,'');
					}
					
	
					var f=math.parse(tA[0]), m=Mfn.fromStr(tA[0]);

					var A=['F('+xy+')='+m.toStr(1)+'=0'];
					
					var fA=Arrf(function(x){return math.simplify(math.derivative(f,x))},dA), f_A=[],ijA=[];

					A=A.concat(Arrf(function(x,i){return 'F_'+x+'='+math2str(fA[i],1)}, dA));

					A=A.concat(Arrf(function(t,i){
						var tmpA=[];
						for(var j=0,jn=dA.length;j<jn;j++){
							
							if(j!=i){
								var x=dA[j], fml='=-'+kfrac(zlrA('F_',[x,t]));
								var f_=math.simplify('-'+Arrf(math2str,[fA[j],fA[i]]).join('/'));
								f_A.push(f_);
								ijA.push([x,t]);

								tmpA.push(difn(t,x,1,1)+fml+'='+math2str(f_,1))
							}
						}
						return tmpA.join(kbr)
					}, dA));

					var k=+tA[2]||1;
					if(k>1){	//较复杂，暂不实现
/*
						A=A.concat(Arrf(function(t,i){
							var tmpA=[];
							for(var j=0,jn=dA.length;j<jn;j++){
								
								if(j!=i){
									var x=dA[j], fml='=-'+kfrac(zlrA('F_',[x,t]));
									var f_=math.simplify('-'+Arrf(math2str,[fA[j],fA[i]]).join('/'));
									f_A.push(f_);
	
									tmpA.push(difn(t,x,1,1)+fml+'='+math2str(f_,1))
								}
							}
							return tmpA.join(kbr)
						}, f_A));
*/

					}



				}else{


					var f=math.parse(tA[0]),m=Mfn.fromStr(tA[0]),A=['f'+zp(d)+'='+m.toStr(1)], fA=[f], vA=[''];
					for(var j=1,k=+tA[2]||1;j<=k;j++){
						var fA2=[], vA2=[];
						for(var h=0,n=fA.length;h<n;h++){
	
							for(var i=0,l=dA.length;i<l;i++){
								var f_=math.derivative(fA[h],dA[i]), m_=f_.toString(), vd=vA[h]+dA[i], ispwer=(h+i)*(n-h-1+l-i-1)==0;
	
								A.push("$difn('f','"+(ispwer?dA[i]+"'":vd+"'.split('')")+",1,"+(ispwer?j:'')+")$="+Mfn.fromStr(m_).toStr(1));
								fA2.push(f_);
								vA2.push(vd);
							}
						}
						fA=fA2;
						vA=vA2;
					}
					if(tA[3]){
						
						var o={}, vA=tA[3].split(','), oi=[];
						for(var i=0,l=dA.length;i<l;i++){
							o[dA[i]]=+vA[i]||0;
							oi.push(+vA[i]||0);
						}
						for(var h=0,n=fA.length;h<n;h++){
							ispwer=h==0||h==n-1;
							f_=fA[h].evaluate(o);
							m_=f_.toString();
							A.push("$difn('f','"+(ispwer?dA[i]+"'":vA[h]+"'.split('')")+"',1,"+(h==0||h==n-1?vA[h].length:'')+")$"+zp(oi)+"="+Mfn.fromStr(m_).toStr(1))
						}
					}



				}

				return A.join(kbr2)
		},VA));
	}

	if(sel(uriA,'路径无关','Green.1 Formula','Line Integral')){

		rS=rS.concat(
			Arrf(function(t){
				return `
				示例问题：计算$iint(['P','+Q'],'L','','x;y',1,1)$，其中曲线L：起点(0,0)→终点(1,1)\\\\
				思路：如符合格林公式条件，则~原式\\\\
				=$intl('P(x,y_1)','x_1','x_2','x',0,'')$+$intl('Q(x_2,y)','y_1','y_2','y',0,'')$ ~水平+竖直\\\\
				=$intl('P(x,y_2)','x_1','x_2','x',0,'')$+$intl('Q(x_1,y)','y_1','y_2','y',0,'')$ ~竖直+水平\\\\
				=$intl('[P(x,kx+b)+kQ(x,kx+b)]','x_1','x_2','x',0,'')$ ~斜线\\\\
				=$intl('[P((y-b)/k,y)/k+Q((y-b)/k,y)]','y_1','y_2','y',0,'')$ ~斜线\\\\
				其中k=\\tfrac{y_2-y_1}{x_2-x_1}，b=\\tfrac{y_1x_2-x_1y_2}{x_2-x_1}=\\tfrac{$zdet(['x_1 x_2','y_1 y_2'])$}{x_1-x_2}\\\\

				解答：\\\\
				P(x,y)=1-2xy-y^2\\\\
				Q(x,y)=-(x+y)^2\\\\
				$difn('P','y',1)$=-2(x+y)\\\\~\\\\
				$difn('Q','x',1)$=-2(x+y)\\\\~\\\\
				$difn('P','y',1)$=$difn('Q','x',1)$\\\\~\\\\
				则根据格林公式，\\\\得知原积分与路径无关\\\\
				\\quad 原式\\\\
				=$intl('P(x,0)','0','1','x',0,'')$+$intl('Q(1,y)','0','1','y',0,'')$\\\\
				=$intl('1','0','1','x',0,'')$-$intl('(1+y)^2','0','1','y',0,'')$\\\\
				=$intl('1','0','1','x',0,'')$-$intl('(1+x)^2','0','1','x',0,'')$\\\\
				=-$intl('(x^2+2x)','0','1','x',0,'')$\\\\
				=-(x^3/3+x^2)$orifun('x=1')$\\\\
				=-4\\/3
				`
		},VA));
	}


	//consolelog(rS);
	return rS;
};
