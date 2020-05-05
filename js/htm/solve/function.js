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
			Arrf(function(x){
				var t=opreplace3(x), f=math.parse(opreplace3(t,1)), A=['\\quad '+e2h(t)], r_;


					f_=math.simplify(f);
					m_=f_.toString();//f_.toString(mathjsOutputOpt('',''))
					r_=e2h(m_,1);

					A.push('='+r_,'mathjs ='+m_ );

				return A.join(kbr2)
		},VA));
	}
	if(sel(uriA,'Rationalize','Unary Operation')){

		rS=rS.concat(
			Arrf(function(x){
				var t=opreplace3(x), f=math.parse(opreplace3(t,1)), A=['\\quad '+e2h(t)], r_;


					f_=math.rationalize(f);
					m_=f_.toString();
					r_=e2h(m_,1);

					A.push('='+r_,'mathjs ='+m_ );

				return A.join(kbr2)
		},VA));
	}



	if(sel(uriA,'Derivative','Differential')){	//f(x)&x&阶数&x0	f(x,y)=0&x&阶数&x0	f(x,y)=g(x,y)&x&阶数&x0

		rS=rS.concat(
			Arrf(function(t){
				var tA=t.split('&'),d=(tA[1]||'x').split(',')[0], xy=/,/.test(tA[1])?tA[1]:d+',y', y=xy.split(',')[1],
					tA0=opreplace3(tA[0]), tp=/= *0/.test(tA0)?1:(/=/.test(tA0)?2:0),A, fname='f';
				tA[0]=tA0;

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


				var f=math.parse(opreplace3(tA[0],1));
				//A[0]+=e2h(tA[0])+(tp?'=0':'');
				A[0]+=math2str(f,1)+(tp?'=0':'');

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
						
						A.push(difn(y,d,'',j)+fml+'=-'+kfrac(Arrf(function(x){return math2str(x,1)},f_A))+'='+math2str(f_,1));
						//f=f_;
					}
	


				}else{

					for(var j=1,l=+tA[2]||1;j<=l;j++){
						var f_=math.derivative(f,d), m_=f_.toString(), r_;
						//r_=e2h(m_,1);
						r_=math2str(f_,1);
						A.push("f"+(j<4?"'".repeat(j):"^{("+j+")}")+"("+d+')='+r_);
						f=f_;
					}
	

				}

				if(tA[3]){
					j--;
					var o={}, r_;
					o[d]=+tA[3]||0;
					f_=f.evaluate(o);
					m_=f_.toString();
					r_=e2h(m_,1);
					A.push("f"+(j<4?"'".repeat(j):"^{("+j+")}")+"("+tA[3]+')='+r_)
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
					tA0=opreplace3(tA[0].split(';')[0]), fn=tA[0].split(';')[1]||'f', tp=/= *0/.test(tA0)?1:(/=/.test(tA0)?2:0),A;
				tA[0]=tA0;


				if(tp){//隐函数
					if(tp==2){
						tA[0]=tA0.replace('=','-(')+')';
					}else if(tp){
						tA[0]=tA0.replace(/=.+/,'');
					}
				//console.log(tA[0]);	
	
					var f=math.parse(opreplace3(tA[0],1));

					var A=[fn+'('+xy+')='+e2h(tA[0])+'=0'];
					
					var fA=Arrf(function(x){
						return math.simplify(math.derivative(f,x))},dA), f_A=[],ijA=[];
//console.log(fA, dA);
					A=A.concat(Arrf(function(x,i){return fn+'_'+x+'='+math2str(fA[i],1)}, dA));

					A=A.concat(Arrf(function(t,i){
						var tmpA=[];
						for(var j=0,jn=dA.length;j<jn;j++){
							
							if(j!=i){
								var x=dA[j], fml='=-'+kfrac(zlrA(fn+'_',[x,t]));
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

//console.log(tA[0],opreplace3(tA[0],1) );
					var f=math.parse(opreplace3(tA[0],1)), fA=[f], vA=[''], uA=[''];
					var A=[fn+zp(xy)+'='+math2str(f,1)];	//A=[fn+zp(xy)+'='+e2h(tA[0])],
					for(var j=1,k=+tA[2]||1;j<=k;j++){
						var fA2=[], vA2=[], uA2=[];
						for(var h=0,n=fA.length;h<n;h++){
							var m_A=[];
							for(var i=0,l=dA.length;i<l;i++){
								var f_=math.derivative(fA[h],dA[i]), m_=f_.toString(), r_,
									vd=vA[h]+dA[i], ispwer=(h+i)*(n-h-1+l-i-1)==0;
								r_=e2h(m_,1);
								//console.log(r_);
								
								m_A.push(r_);
								A.push("$difn('"+fn+"','"+(ispwer || vd.length<2?dA[i]+"'":vd+"'.split('')")+",1,"+(ispwer?j:1)+")$="+r_);

								fA2.push(f_);
								vA2.push(vd);
								uA2.push(r_);
							}
							
						}
						fA=fA2;
						vA=vA2;
						uA=uA2;
						//console.log(j,h,uA);
						
						A.push('一二'[j-1]+'阶全微分：'+
							'\\d '+(j>1?'^'+j:'')+fn+'='+zp(Arrf(function(x){return '\\d '+x+difn('',x,1)},dA).join('+'))+(j>1?'^'+j:'')+fn,
							'\\d '+(j>1?'^'+j:'')+fn+'='+(
							j==1?Arrf(function(x,i){return uA[i]=='0'?'':(i && uA[i][0]!='-'?'+':'')+
								(uA[i])+'\\d '+x},dA).join('').replace(/^\+/,''):(j==2?
								Arrf(function(x,i){return uA[i]=='0'||i==2?'':(i && uA[i][0]!='-'?'+':'')+
									kfrac(i==1?e2h(math.parse(pp(fA[i].toString())+'*2'),1):uA[i])+

									'\\d '+(i==1?vA[i].split('').join('\\d'):vA[i].replace(/.$/,'^2'))},uA).join('').replace(/^\+/,''):''))
						);
						
					}
					if(tA[3]){
						
						var o={}, vA=tA[3].split(','), oi=[], r_;
						for(var i=0,l=dA.length;i<l;i++){
							o[dA[i]]=+vA[i]||0;
							oi.push(+vA[i]||0);
						}
						for(var h=0,n=fA.length;h<n;h++){
							ispwer=h==0||h==n-1;
							//console.log(fA[h]);
							f_=fA[h].evaluate(o);
							m_=f_.toString();
							//console.log(m_);
							if(isNaN(m_)){
								r_='NaN';
							}else{
								
								r_=e2h(m_,1);
							}
							

							A.push("$difn('f','"+(ispwer|| dA[h].length<2?dA[h]+"'":dA[h]+"'.split('')")+",1,"+(h==0||h==n-1?dA[h].length:'')+")$"+zp(oi)+
								"="+r_)
						}
					}



				}

				return A.join(kbr2)
		},VA));
	}

	if(sel(uriA,'Grad','Differential') || sel(uriA,'Directional Derivative')){
		rS=rS.concat(
			Arrf(function(t){
				var tA=t.split('&'),d=(tA[1]||'x,y').split(',')[0],
				xy=/,/.test(tA[1])?tA[1]:d+',y', dA=xy.split(','),
				tA0=opreplace3(tA[0]), tp=/= *0/.test(tA0)?1:(/=/.test(tA0)?2:0),A;
				tA[0]=tA0;
				var f=math.parse(opreplace3(tA[0],1)),A=['f'+zp(xy)+'='+e2h(tA[0])], fA=[f], vA=[''];
				for(var j=1,k=1;j<=k;j++){
					var fA2=[], vA2=[];
					for(var h=0,n=fA.length;h<n;h++){
						var m_A=[];
						for(var i=0,l=dA.length;i<l;i++){
							var f_=math.derivative(fA[h],dA[i]), m_=f_.toString(), r_,
							vd=vA[h]+dA[i], ispwer=(h+i)*(n-h-1+l-i-1)==0;
							r_=e2h(m_,1);
							m_A.push(r_);
							A.push("$difn('f','"+(ispwer || vd.length<2?dA[i]+"'":vd+"'.split('')")+",1,"+(ispwer?j:1)+")$="+r_);

							fA2.push(f_);
							vA2.push(vd);
						}
					}
					fA=fA2;
					vA=vA2;
				}

				A.push('∇f=\\text{grad} f='+zp(Arrf(function(x){return difn('f',x,1)},dA)),
					'\\text{grad} f'+zp(xy)+'='+zp(m_A));

				if(tA[3]){
					
					var o={}, vA=tA[3].split(','), oi=[], gA=[], gAt=[], r_;
					for(var i=0,l=dA.length;i<l;i++){
						o[dA[i]]=+vA[i]||0;
						oi.push(+vA[i]||0);
					}
					for(var h=0,n=fA.length;h<n;h++){
						ispwer=h==0||h==n-1;
						f_=fA[h].evaluate(o);
						m_=f_.toString();
						r_=e2h(m_,1);
						gA.push(m_);
						gAt.push(r_);
					}
//console.log(gA,Mtrx.opr1('向量模1',gA));
					var sqrtg=Mtrx.opr1('向量模1',gA);
					A.push('\\text{grad} f'+zp(tA[3])+'='+zp(gAt), 
						zp('∇','‖‖')+'='+zp('\\text{grad} f','‖‖')+'='+e2h(sqrtg,1));
				}
		
				if(tA[2]){

					A.push(difn('f','l',1)+'=∇⋅l_e=\\text{grad} f⋅l_e='+zp(Arrf(function(x){return difn('f',x,1)},dA))+'⋅(\\cos φ,~\\sin φ)');
					var le=/,/.test(tA[2])?Arrf(function(x){return Mfn.opr1('=',Mfn.fromStr('cos('+x+'°)'))}, tA[2].split(',')):[Mfn.opr1('=',Mfn.fromStr('cos('+tA[2]+'°)')),Mfn.opr1('=',Mfn.fromStr('sin('+tA[2]+'°)'))];
					if(tA[3]){
						var pr=Mtrx.opr2('内积',gA,Arrf(function(x){return x.toStr()},le));
						A.push(difn('f','l',1)+zp(tA[3])+'='+
							e2h(pr)

						)
					}else{
						var pr=Mtrx.opr2('内积',Arrf(math2str,fA2),Arrf(function(x){return x.toStr()},le));
						A.push('='+e2h(pr))
					}
					A.push(zp('∇','‖‖')+'='+zp('\\text{grad} f','‖‖')+'=',
						'与梯度同方向，函数增长率最大（增加最快），为梯度模',
						'与梯度反方向，函数减少率最大（减少最快），为负梯度模',
						'与梯度垂直方向（方向向量与梯度内积为0），函数变化率为0',
					);
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
