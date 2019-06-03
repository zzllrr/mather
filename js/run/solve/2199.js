/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

solve[2199]=function(){
	var i0=$('#input0'),v=i0.val().replace(/\\\\/g,'').trim(), t=$('#subject2').val(), tasks=$('#solveGround .task.seled'), levels=$('#solveGround .level.seled'), stls=[], rS=[],
	str='', VA=v.split('\n'), n=VA.length, strA=fCC(seqA(65,n)).split(''), strB=fCC(seqA(945,n)).split('');
	tasks.each(function(){
		stls.push($(this).attr('data-tool').replace(/^\$.+\$$/,''))
	});
	var sel=function(x,p,pp,ppp){
		return stls.indexOf(x)>-1 && (p?levels.last().attr('data-i')==p:1) && (pp?levels.eq(-2).attr('data-i')==pp:1) && (ppp?levels.eq(-3).attr('data-i')==ppp:1)
	};

	if(t=='Number'){

		if(sel('n→上标')){
			rS=rS.concat(Arrf(function(t){return n2sub(t,1)},VA));
		}
		if(sel('n→下标')){
			rS=rS.concat(Arrf(n2sub,VA));
		}
		if(sel('上下标→n')){
			rS=rS.concat(Arrf(sub2n,VA));
		}
		if(sel('上下标→html')){//转换为html
			rS=rS.concat(Arrf(function(t){return sub2n(t,1)},VA));
		}
		if(sel('本地化数字')){
			rS=rS.concat(Arrf(function(t){return (+t).toLocaleString()},VA));
		}
		if(sel('1→一')){
			rS=rS.concat(Arrf(n2Zh,VA));
		}
		if(sel('1→一元')){
			rS=rS.concat(Arrf(function(t){return n2Zh(t,0,1)},VA));
		}
		if(sel('1→壹圆')){
			rS=rS.concat(Arrf(function(t){return n2Zh(t,1,1)},VA));
		}

		if(sel('罗马数字')){
			rS=rS.concat(Arrf(function(t){
				if(/^\D/.test(t)){
					return t.replace(/\D+\d/g,function(s){return Arrfc(copyA(kxo,+s.replace(/\D+/,'')),s)})+' = '+Roman2n(t)
						
				}else{
					var t0=t.replace(/\D.*/,''),t1=t.replace(/^\d+/,'')||0;
					return t0+' = '+n2Roman(t0,t1)
				}
			
			},VA));
		}






		if(sel('单位换算')){//数字n单位u [转换的单位]
			//货币值n国家缩写 [转换的国家缩写]
			//var
			rS=rS.concat(
				Arrf(function(t){
					var v=t.split(/ /), v0=v[0],n0=v0.split('&'),b0=n0[1]||10, n=parseInt(n0[0],b0);
					return 
			},VA));
		}
		
		
		if(sel('弧度→角度°')){//小数（分数）&是否有π
			rS=rS.concat(Arrf(function(t){
				var v=t.split(/&/),v0=n2frac(v[0]),v1=v[1],r=times([v0,v1?180:'900000000/15707963'],1),r1=Frac.opr1(',',r,6);
				return '弧度'+kfrac(v0)+(v1?'π':'')+' = {'+r+'}^°'+(/\..{6,}/.test(r1)?' ≈ {'+r1+'}^°':'')
					
			
			},VA));
			
		}
		if(sel('角度°→弧度')){//小数&是否返回π
			rS=rS.concat(Arrf(function(t){
				var v=t.split(/&/),v0=n2frac(v[0]),v1=v[1],r=divide([v0,v1?180:'15707963/900000000'],1);
				return '角度{'+kfrac(v0)+'}^° = '+r+(v1?'π':'')
			
			},VA));
			
		}

		if(sel('秒→度(时) 分 秒')){
			rS=rS.concat(Arrf(function(t){
				var v=Arrf(Zh2n,t.split(/[ &,]/)),r=+v[0], uA=[
					['~度','~分','~秒'],
					['~°','~′','~″'],
					['~时','~分','~秒'],
					Arrf(kxf,['~h','~m','~s']),
				
				];

					var r1=r%3600;
					v=[(r-r1)/3600,(r1-r1%60)/60, r1%60];
					if(!v[0]){
						Arrf(function(x){x.shift()},uA);
						v.shift();
					}
					return kxA([kxu(r)+'~秒 = '+concat(Arrf(kxu,v),uA[0]).join('~'),
							kxu(r)+'~″= '+concat(Arrf(kxu,v),uA[1]).join('~'),
							kxu(r)+'~秒 = '+concat(Arrf(kxu,v),uA[2]).join('~'),
							kxu(r)+'~'+kxf('s')+' = '+concat(Arrf(kxu,v),uA[3]).join('~'),
							])


			
			},VA));
		}

		if(sel('度(时) 分 秒→秒')){
			rS=rS.concat(Arrf(function(t){
				var v=Arrf(Zh2n,t.split(/[ &,]/)),l=v.length,r=+v[0], uA=[
					['~度','~分','~秒'],
					['~°','~′','~″'],
					['~时','~分','~秒'],
					Arrf(kxf,['~h','~m','~s']),
				
				];

				if(l==2){
					v.unshift(0);
					Arrf(function(x){x.shift()},uA);
				}
				r=ArrfcA([plus,times],[[v[0],'3600'],[v[1],'60'],[v[2],1]]);
				return kxA([concat(Arrf(kxu,v),uA[0]).join('~')+' = '+kxu(r)+'~秒',
						concat(Arrf(kxu,v),uA[1]).join('~')+' = '+kxu(r)+'~″',
						concat(Arrf(kxu,v),uA[2]).join('~')+' = '+kxu(r)+'~秒',
						concat(Arrf(kxu,v),uA[3]).join('~')+' = '+kxu(r)+'~'+kxf('s'),
						])


			
			},VA));
			
		}

		if(sel('进制转换')){//数字n&进制a [进制b（支持seqsA表达式）] 整数转换
			rS=rS.concat(
				Arrf(function(t){
					var v=t.split(/[ &]/), v0=v[0],n0=v0.split('&'),b0=+(n0[1]||10), n=b0==10?BigInt(n0[0]):parseInt(n0[0],b0); //n=parseInt(n0[0],b0);
					return kxA(Arrf(function(b){return n0[0]+'_{('+b0+')} = '+n.toString(b).toUpperCase()+'_{('+b+')}'}, seqsA(v[1]||'2~36')))
			},VA));
		}





		if(sel('质因数分解') || sel('质因数分解（全部因子）')){
			var needlist=sel('质因数分解（全部因子）');
			rS=rS.concat(
				Arrf(function(x){
					if(/\D/.test(x)){//aaaa型(中间可以含0) 判断约数个数
						var x0=x.split('&')[0],x1=x.split('&')[1]||'p', a=x0.replace(/\d+/g,'')[0],ones=x0.replace(/\D/g,'1'), f=factor(ones), A=countA(f.split('×'));
						if(x1=='p'){
							if(A[0][0].length>1){//最小素因数是2位数
								
							}else{//2,3,5,7
								return '需要分别讨论'+a+'=2,3,5,7'
							}
						}else{//a是1位合数：4,6,8,9
							return '需要分别讨论'+a+'=4,6,8,9'
						}
						A[1]=[2].concat(Arr1(A[1]));
						return x0+'='+a+'×'+ones+'='+a+'×'+f+'\\\\ 则约数个数是'+count2pow(countA(A[1]),1)+'='+times(A[1])

					}
					
					
					if(isPrime(x)){
						return x+'是质数。只能被1和自身整除。'
					}
					if(needlist){
						var fts=factors(x);
						return x+'不是质数：'+x+' = '+Factor(x)+'\\\\ 可以被它的全部因子（共'+fts.length+'个） 整除：'+fts
					}else{
						return x+' = '+Factor(x)
					}
				},VA)
			);
		}
		
		if(sel('其中质数')){
			rS=rS.concat(
			Arrf(function(t){
					var A=seqsA(opreSeqsA(t)),P=[],C=[],One='';
					Arrf(function(x){
						if(isPrime(x)){
							P.push(x);

						}else if(x=='1'){
							One='1既不是合数，也不是质数。';
						}else{
							C.push(x+' = '+Factor(x));
						}
					},A);
					var n=P.length;
					return kxA([n?'有'+n+'个质数：'+P.join(', '):'没有质数', One, C.length?(n || One?'其余':'这些')+'数都是合数：\\\\ '+kxA(C):''])
				},VA)
			);
		}
		
		
		if(sel('区间内质数个数')){
			rS=rS.concat(
				Arrf(function(x){
					var xs=x.split(/\D/),x0=xs.length>1?+xs[0]:1,x1=+xs[1]||+xs[0];

					return x+(xs.length>1?'区间内':'以内')+'质数个数是 '+(PrimeA(x1).length-PrimeA(x0).length)

				},VA)
			);
		}
		
		if(sel('p\\#内质数个数')){//使用同余方程组算法
			rS=rS.concat(
				Arrf(function(s){
					var x=s.replace(/&.+/,''),dtl=!/&/.test(s),S=[],isp=/#/.test(x),n=isp?+(x.replace('#','')):+x, Pn=isp?n:0,A=PrimeA(isp?n+1:50000);
					if(isp){
						n=A.indexOf(n)+1;
						
					}else{
						Pn=A[n-1];
					}
					var	p_n,p_n1, PROD_PnA=[2], PROD_Pn_1A=[1],cnt=[3], p_n1i;
					for(var i=0;i<n-1;i++){
						var pi=A[i+1];
						PROD_PnA.push(PROD_PnA.slice(-1)[0]*pi);
						PROD_Pn_1A.push(PROD_Pn_1A.slice(-1)[0]*(pi-1));
						
					}
					var prodLast=PROD_PnA.slice(-1)[0];// pn#
					if(A.slice(-1)[0]<prodLast){//扩充A
						A=PrimeA(prodLast)
					}
					var Al=A.length;
					
					if(dtl){
						S.push('p_1\\# = 2 ~到~ p_2\\# = 2⋅3=6之间质数个数：3');
					}
					for(var i=2;i<n;i++){//pi# ~ pi+1#	p2# ~ p3#
						p_n=A[i];	//第i+1个质数		p3
						p_n1=A[i+1];//第i+2个质数		p4

						p_n1i=i+1;	//第i+2个质数的索引	i+1

						
						var A1=A.slice(p_n1i), PAMi=floor(A1,PROD_PnA[i-1],0,1), CAi=floor(A1,PROD_PnA[i]/A[i],0,1), M=[],Ml=[], CM=PROD_PnA[i], CAn=0;//
						for(var j=0;j<CAi;j++){
							var C0=A1[j], C=C0, Mj=[1];
							while(C<CM){
								Mj.push(C);//记录每一次幂(0次起)，便于后续计算乘积使用
								C*=C0;
							}
							M.push(Mj);
							Ml.push(Mj.length);
							if(Mj.length==1){
								for(var k=0;k<CAi;k++){
									M.push([1,A1[k]]);
									Ml.push(2);
								}
								break;
							}
						}
						//consolelog(Ml);//指数集上限
						
						var M0=copyA(0,CAi+1);
						while(carttNext(M0,Ml)){
							var C=1, sumindx=0, C0, lastNon0i;
							//consolelog(M0.join(' '),'长度= '+M0.length);
							for(var j=0;j<CAi;j++){
								var M0j=M0[j];
								if(M0j){
									lastNon0i=j;
									sumindx+=M0j;
									C0=C;
									C*=M[j][M0j];
							//	consolelog(C,CM);
									if(C<CM){

									}else{
										
										if(M0j==1){//指数是1
											if(j && M0[j-1]==0){// 1前面有若干0
												var jj=floor(A1,CM/C0,0,1), ji=-1;
											//	consolelog(jj);
											
												if(jj!==null){
													for(var k=j-2;k>=0;k--){
														if(M0[k]){
															ji=k;	//找到1前面最后1个非零指数所在索引		应该小于j-1
															break;
														}
													}
													
													
													
													
													
													
													
													
													
													
													
													
													if(jj<ji){//商索引 < 1前面最后1个非零指数所在索引
													//	M0[j-1]=1;
													
														for(var k=j;k<CAi;k++){//剪枝（后面索引都一次性放到最大）
															M0[k]=Ml[k]-1;
														}
													}else{
														if(jj>ji){
															M0[jj]=1;
														}else if(jj==ji){
															M0[jj]++;
														}
														

														for(var k=j;k<CAi;k++){//后面索引都归零
															M0[k]=0;
														}
														CAn++;
													}
													
													break
												}
												
											}
											
										}
										
										
										for(var k=j;k<CAi;k++){//剪枝（后面索引都一次性放到最大）
											M0[k]=Ml[k]-1;
										}
										
										break
									}
								}
							}
							if(C<CM && sumindx>1){

								CAn++;

							}
						}
						
					//	var CAn=plus(CA);
						var PAi=p_n1i+PAMi;

						cnt.push(minus([PROD_Pn_1A[i],1,i>2?PAi-i:0,CAn]));
						if(dtl){
							S.push(kxA(['p_{'+i+'}\\# = '+PROD_PnA[i-1]+' ~到~ p_{'+(i+1)+'}\\# = 2⋅3⋯'+p_n+'='+PROD_PnA[i]+'之间质数个数：',
								prod('i',1,i+1,'(p_i-1)-1'+(i>2?'-P-C':''),'','')+' = '+PROD_Pn_1A[i]+'-1'+(i>2?'-'+(PAi-i)+'-'+CAn:'')+' = '+cnt.slice(-1)[0]]));
							if(i>2){
								S.push(kxA(['其中P是根据同余方程组得到的质数，与上一个区间重复出现的质数个数：'+(PAi-i),
									'p_{'+(i+2)+'}='+A[i+1]+' ~ p_{'+(PAi+1)+'}='+A[PAi]+' （ ≦ p_{'+i+'}\\# = '+PROD_PnA[i-1]+' < p_{'+(PAi+2)+'}='+A[PAi+1]+' ）',
									'其中C是根据同余方程组得到的合数个数：'+CAn,//+' = '+CA.join('+'),

									'（质因子均介于p_{'+(i+2)+'}、⋯、p_{'+(p_n1i+CAi+1)+'}之间的合数）']))
							}
							S.push(' \\\\ ');
						}
					}
					var N=plus(cnt),Ai;
					if(dtl){

						S.push('因此p_{'+n+'}\\#以内质数个数是：'+N);
						return kxA(S)
					}else{
						return N
					}

				},VA)
			);
		}
		
		
		if(sel('小于n的最大质数')){
			rS=rS.concat(
				Arrf(function(x){
					for(var i=+x;i>1;i--){
						if(isPrime(i)){
							var t='小于'+x+'的最大质数是'+i;

							return t
						}
						
					}

				},VA)
			);
		}
		if(sel('大于n的最小质数')){
			rS=rS.concat(
				Arrf(function(x){
					for(var i=+x;i<1000000000;i++){
						if(isPrime(i)){
							var t='大于'+x+'的最小质数是'+i

							return t
						}
						
					}

				},VA)
			);
		}
		
		
		
		
		
		
		if(sel('p_n\\#')){
			rS=rS.concat(Arrf(function(x){return 'p_{'+x+'}\\# = '+Primorial(x)},VA));
		}

		if(sel('n!')){
			rS=rS.concat(concat(VA,copyA('!=',n),Arrf(Fact,VA)));
		}
		if(sel('n!!')){
			rS=rS.concat(concat(VA,copyA('!!=',n),Arrf(Fact2,VA)));
		}

		if(sel('n!的末零数')){

			rS=rS.concat(Arrf(function(x){
					return kxA([x+'!的末零数是'+last0OfFact(x),'【解析】',
					'一个数的末零数，实际上是这个数标准分解式中5的幂',
					'则n!的末零数，实际上是n以内5的所有幂的倍数个数之和',
					sum('i',1,'',zp(frac('n','5^i',''),'⌊⌋'),'',''),
					'取n以内最大的5的倍数m=n-(n \\bmod 5)',
					'进行因式分解m=a5^b 其中(a,5)=1',
					Eq([sum('i',1,'b',frac('m','5^i',''),'',''),
						sum('i',1,'b',frac('a5^b','5^i',''),'',''),
						sum('i',1,'b','a5^{b-i}','',''),
						'a'+sum('i',1,'b','5^{b-i}','',''),
						'a'+sum('i',1,'b','5^{i-1}','',''),
						'a'+frac('1-5^b','1-5',''),
						'a'+frac('5^b-1',4,''),
						frac('m-a',4,''),
						'm'+frac('1-5^{-b}',4,''),
						])])

				},VA));
		}
		if(sel('数根dr')){
			rS=rS.concat(Arrf(function(x){
					return '数根'+Eq(Arrf(function(t){return kxf('dr')+'('+t+')'},[x].concat(Integer.opr1('数根',x,1)[1])))
				},VA));
		}

		if(sel('Greatest Common Divisor') || sel('Least Common Multiple')){
			rS=rS.concat(
				Arrf(function(x){
					var xs=Arrf(Zh2n,x.split(/[和与,， 、:：]/g)),n=xs.length, g=gcd(xs),l=lcm(xs),
						p=g==1?xs:Arrf(function(t){return divide([t,g])}, xs),gi=gcd(p,1)[1], ps=[[g].concat(xs)],gs=[g];
					while(gi!=1){
						gs.push(gi);
						ps.push([gi].concat(p));
					//	consolelog(g,gi,p);
						p=Arrf(function(t){return +t%+gi?t:divide([t,gi])}, p);
						gi=gcd(p,1)[1];
					}

//					consolelog(ps);
//					consolelog([[g].concat(xs)].concat(ps.length?ps:p));

					return kxA([ztable(ps.concat([[''].concat(p)]),'J'+seqA(2,n-1).join('_')+'_'+
							zlr3('i',seqA(1,ps.length).join(' '),'j1r','_')+'_'+
							zlr3('i',seqA(1,ps.length).join(' '),'b','_')),	//alignr dash
							xs.join(', ')+'的最大公约数是'+g,
							xs.join(', ')+'的最小公倍数是'+gs.concat(p).filter(function(t){return t!=1}).join('×')+'='+l
							])
				},VA)
			);
		}


		if(sel('幂的末位')){//底数,幂,末几位
			rS=rS.concat(Arrf(function(x){
					var xs=x.split(/\D/);
					if(xs.length<3){
						xs.push(1)
					}
					return xs[0]+sup(xs[1],'')+'的末'+xs[2]+'位数字是'+lastDigitsOfPower.apply(null,xs)
				},VA));
		}



		var Idivide=function(x0,x1,d,no){//区间[x0,x1]	被d整除 no指定不能被d整除
			var m=+d,n0=Math.ceil(x0/m),n1=Math.floor(x1/m),n=n1-n0+1,S1=m*(n0+n1)*n/2,S0=(x0+x1)*(x1-x0+1)/2;

			return [kxA([x0+'～'+x1+'之间有下列'+n+'个数能被'+m+'整除：',
				kxA(Arrf(function(t){return m+'×'+t+'='+m*t},seqA(n0,Math.min(4,n-1))).concat('⋯',m+'×'+n1+'='+m*n1)),
				'这些数之和等于'+m+'×('+n0+'+'+n1+')×'+frac(n,2,'')+'='+S1+'\\\\ ~'
				])+(no?'\\\\ 而'+x0+'～'+x1+'之间的所有数之和等于('+x0+'+'+x1+')×'+frac(x1-x0+1,2,'')+' = '+S0+
							'\\\\ 因此'+x0+'～'+x1+'之间不能被'+m+'整除的数之和等于'+S0+'-'+S1+' = '+(S0-S1):'')
				,n,S1,S0-S1]
		};
		if(sel('n以内能被m整除')){

			rS=rS.concat(
				Arrf(function(x){
					var xs=x.split(/ |&/),xs0=xs[0],xs0s=xs0.split(/\D/),x0=xs0s.length>1?+xs0s[0]:1,x1=+xs0s[1]||+xs0s[0],mA=seqsA(xs[1]),rA=[],A=[];
					
					rA=rA.concat(Arrf(function(d){
						var t=Idivide(x0,x1,d);
						//consolelog('和：',t[3]);
						A.push(t);
						return t[0]
					},mA));
					
					if(mA.length==2){
						var lm=lcm(mA), t=Idivide(x0,x1,lm);
						rA.push(t[0]);
						var nA=Arrf(function(t){return +t.split('下列')[1].split('个数')[0]},rA);
						rA.splice(rA.length-1,0,mA+'的最小公倍数是'+lm);
						rA.push('能被'+mA.join('或')+'整除的数的个数等于'+nA[0]+'+'+nA[1]+'-'+nA[2]+'='+nOpr2s(['+','-'],nA));//(n1+n2-lm))
						rA.push('和等于'+Arri(A,2).join('+')+'-'+t[2]+'='+nOpr2s(['+','-'],Arri(A,2).concat(t[2])));
					}
					return kxA(rA)
					
				},VA)
			);


		}
		if(sel('n以内不能被m整除')){
			rS=rS.concat(
				Arrf(function(x){
					var xs=x.split(/ |&/),xs0=xs[0],xs0s=xs0.split(/\D/),x0=xs0s.length>1?+xs0s[0]:1,x1=+xs0s[1]||+xs0s[0],
						mA0=seqsA(xs[1]),mA=lcp(mA0),mAs=mA.length,rA=[],nA=0,tA='',
						S0=(x0+x1)*(x1-x0+1)/2;
					
					rA.push(kxA(Arrf(function(d){
						return Idivide(x0,x1,d,1)[0]
					},mA)));

					
					rA.push('\\\\ 反过来考虑能被'+xs[1]+'中任一整数整除的数有几个');
					if(mAs<mA0.length){
						rA.push('也即能被'+mA.join().replace(/,(\d+$)/,'或$1')+'整除的数');
					}
					
					for(var i=0;i<mAs;i++){
						var cbn=CombinN(mAs,i+1),cbns=cbn.length;
						for(var j=0;j<cbns;j++){
							var miA=i<1?[mA[j]]:ArrI(mA,ArrI(cbn,[j])[0]), m=lcm(miA),n0=Math.ceil(x0/m),n1=Math.floor(x1/m),n=n1-n0+1;
							if(i%2){nA-=n}
							if(i%2==0){nA+=n}
							tA+='+-'[i%2]+n;
							rA.push('其中能被'+(i?'['+miA+']='+m:m)+'整除的数有'+n+'个');
						}

					}
					rA.push('则'+x0+'～'+x1+'之间不能被'+xs[1]+'整除的整数共有'+(x1-x0+1)+'-'+tA.replace(/^\+/,'')+'='+(x1-x0+1-nA)+'个');

					if(mAs==2){
						var lm=lcm(mA),Id0=Idivide(x0,x1,mA[0]),Id1=Idivide(x0,x1,mA[1]),Id2=Idivide(x0,x1,lm);
						rA.push(mA+'的最小公倍数是'+lm,Id2[0],
							'既不能被'+mA[0]+'整除又不能被'+mA[1]+'整除的数之和 \\\\ '+
							'等于'+S0+'-'+Id0[2]+'-'+Id1[2]+'+'+Id2[2]+' = '+(S0-Id0[2]-Id1[2]+Id2[2])
							)
					}
					
					
					return rA.join(', \\\\ ')
				},VA)
			);
		}
		
		if(sel('n以内能被p整除不能被q整除')){

			rS=rS.concat(
				Arrf(function(x){
					var xs=x.split(/ |&/),xs0=xs[0],xs0s=xs0.split(/\D/),x0=xs0s.length>1?+xs0s[0]:1,x1=+xs0s[1]||+xs0s[0],pA=seqsA(xs[1]),qA=seqsA(xs[2]),rA=[],A=[];
					
					rA=rA.concat(Arrf(function(d){
						var t=Idivide(x0,x1,d);
						A.push(t);
						return t[0]
					},pA));
					
					if(mA.length==2){
						var lm=lcm(mA), t=Idivide(x0,x1,lm);
						rA.push(t[0]);
						var nA=Arrf(function(t){return +t.split('下列')[1].split('个数')[0]},rA);
						rA.splice(rA.length-1,0,mA+'的最小公倍数是'+lm);
						rA.push('能被'+pA.join('或')+'整除，且不能被'+qA.join('或')+'整除的数的个数等于'+nA[0]+'-'+nA[1]+'='+nOpr2s('-',nA));//(n1-lm))
						rA.push('和等于'+A[0][3]+'-'+t[3]+'='+nOpr2s('-',[A[0][3],t[3]]));
					}
					return kxA(rA)
					
				},VA)
			);


		}
		
		if(sel('?能被m整除')){/*正则表达式.[123](..)\1{2},m
				注意，m也可以是正则表达式
				紧接着序号\1后面的数字，要用[]括起来，否则无法识别
				
				除正则表达式外，还支持1a34b 等字母形式
			*/
			rS=rS.concat(
				Arrf(function(x){
//					var xs=x.split(/[ ,&]/),xs0=xs[0],xA=nReg2dot(xs0).split('.'),n=xA.length-1,reg=new RegExp(xs0),m=+xs[1],A=[];
					var xs=x.split(/[ ,&]/),xs0=nRegofab(xs[0]),xs1=nRegofab(xs[1]),reg=new RegExp(xs0),jA=nReg2A(xs0);
					consolelog(xs1);
					var A=[], regm=new RegExp(xs1),mA=nReg2A(xs1);
//					consolelog(n,xA,reg);
				//	for(var i=0;i<Math.pow(10,n);i++){
				//		var j=concat(xA,(ZLR(0,n-(''+i).length)+i).split('').concat('')).join('');
				
					for(var k=0,ml=mA.length;k<ml;k++){
						var m=mA[k];
						if(regm.test(m)){
							for(var i=0,l=jA.length;i<l;i++){
								var j=jA[i];
						
	//consolelog(j);
	//consolelog(j,(+j)%m,!((+j)%m),reg.test(j),!/^0/.test(j) && reg.test(j) && !((+j)%m));//42(.)\\12 42(.)\12 无法匹配成功，要改写为 42(.)\1[2]
								if(!/^0/.test(j) && reg.test(j) && !((+j)%m)){
									A.push(j+'可以被'+m+'整除： '+j+' = '+m+'×'+((+j)/m));
									//consolelog(A);
								}
							}
						}
					}
					//consolelog(A);
					if(A.length<1){
						A.push('无解')
					}
					return kxA(A)

				},VA)
			);
		}
		if(sel('n能被?整除')){//n,正则表达式.[123](..)\1{2}
			rS=rS.concat(
				Arrf(function(x){
					var xs=x.split(/[ ,&]/),xs1=xs[1],xA=nReg2dot(xs1).split('.'),n=xA.length-1,reg=new RegExp(xs1),m=+xs[0],A=[];
		//			consolelog(n,xA,reg);
					for(var i=0;i<Math.pow(10,n);i++){
						var j=concat(xA,(ZLR(0,n-(''+i).length)+i).split('').concat('')).join('');
//consolelog(j,m%(+j),!(m%(+j)),reg.test(j), !/^0/.test(j) && reg.test(j) && !(m%(+j)));//42(.)\\12 42(.)\12 无法匹配成功，要改写为 42(.)\1[2]
						if(!/^0/.test(j) && reg.test(j) && !(m%(+j))){
							A.push(m+'可以被'+j+'整除： '+m+' = '+j+'×'+(m/(+j)));
							//consolelog(A);
						}
					}
					if(A.length<1){
						A.push('无解')
					}
					//consolelog(A);
					return kxA(A)

				},VA)
			);
		}
		
		if(sel('数字串S选排列n能被M整除不能被N整除')){//数字串S&n&M&N
			rS=rS.concat(
				Arrf(function(x){
					var xs=x.split('&'),S=xs[0],n=+xs[1],xs2=eval(xs[2]),MA=isArr(xs2), M=lcm(xs2),Mn=M.length,
						N=eval(xs[3]||[]),Nn=N.length,P=PermutN(S.length,n),Pn=P.length,A=[];
consolelog(N);
					for(var i=0;i<Pn;i++){
						//consolelog(P[i]);
						var j=ArrI(S,P[i]).join(''),b=0;
						consolelog(j,M,N);
						if(!/^0/.test(j) && !((+j)%M)){
	
							for(var k=0;k<Nn;k++){

								if(!((+j)%N[k])){
									b=0;
									break
								}else if(k==Nn-1){
									b=1;
								}
							}
							if(Nn && !b || !Nn){
								A.push(j);
							}
	
						}
					}
					consolelog(A);
					A.push('可以被'+xs2+(MA?'='+M:'')+'整除（共'+A.length+'个）'+(Nn?'，但不能被'+N.join(',')+'整除':''));
					return kxA(A)

				},VA)
			);
		}
		

		
		if(sel('数和')){//N,M,MIN,MAX,dup&pos&neg&pos1&neg1 生成数和分解 SUMs(77,3,'','','','p') 77,3,,,&p

			rS=rS.concat(
				Arrf(function(x){
					var xs=x.split('&');
					xs=xs[0].split(',').concat(xs[1],xs[2],xs[3],xs[4]);
				//	consolelog(xs);
					return ZLR3(xs[0]+'=',SUMs.apply(null,xs),'','\\\\ ').replace(/,/g,'+')
				},VA)
			);
		}

		if(sel('24点')){
/*
1~13 选出4个数字（可重复），组成算式，得到24

a b c d
数字排列数（假设无重复数字）：4!
3个运算符号：4^3
添括号方法：7（1+1+1+1,2+1+1,1+1+2,1+2+1,2+2,3+1,1+3）
4!×4^3×7=10752

*/
			var calc24with4=function(Arr){
				/*1 2 3 4 6 8 12 24
				
				计算极限，1个数(1～13)，两个数（加法，1+1=2～13×2=26，减法，1-13=-12～13-1=12，乘法1×1=1～13^2=169，除法1/13～13/1=13，值域-12～169）
				三个数（加法，-12+1=-11～169+13=182，减法，1-169=-168～169-1=168，乘法-12×13=-156～13^3=2197，除法-12/1=-12～169/1=169，值域-168～2197）
				四个数（加法，-168+1=-167～2197+13=2210，减法，1-2197=-2196～2197-1=2196，乘法-168×13=-2184～13^4=28561，除法-168/1=-168～2197/1=169，值域-2196～28561）

				24=0+24=1+23=2+22=3+23=...=24+0 = -1+25=-2+26=...=-12+36 共约25种
				24=1×24=2×12=3×8=4×6 共约4种【1】
				24=24-0=25-1=26-2=...=48-24=...=80-56=81-57(舍去) =。。。= 169-145  共约145种
				24=24/1=48/2=72/3=96/4=120/5=144/6=168/7=192/8=216/9=240/10=264/11=288/12=312/13  共约13种

				1 5 8 7
			人工解题：	先任选+-×/中一种，例如优先尝试【1】
			机器解题：穷举情况，验算
			
			
			
			
			
			
			
				*/
				var I=PermutN(4,4),A=Arr.concat([]).sort(sortBy.num),tA=[];
				for(var i=0;i<24;i++){
					for(var j=0;j<64;j++){
						var t0=Arrf(function(t){return A[t]},I[i]),os=Arrf(function(t){return '+-×÷'[+t]},(ZLR(0,4)+j.toString(4)).substr(-3).split('')), ostr=os.join('');
						
						for(var k=0;k<7;k++){
							var t=t0.concat([]);
							if((k||i) && /^([\+\×])\1{2}$/.test(ostr)){// 利用纯加法、纯乘法，交换律、结合律，去重
								continue;
							}
							t.splice(1,0,os[0]);
							t.splice(3,0,os[1]);
							t.splice(5,0,os[2]);
							//consolelog(t);
							
							
							
							if(k){

								if(k==1 && !(/[×÷]/.test(os[0]) || /[\+\-]/.test(os[1]) ||
									/[\+×]/.test(os[0]) && +t0[0]>+t0[1] ||
									os[1]==os[2] && +t0[2]>+t0[3]
									
									)){	//(a×÷b)?c?d	(a?b)+-c?d

									t.splice(0,0,'(');
									t.splice(4,0,')');

								}
								if(k==2 && !(/[×÷]/.test(os[2]) && /[\-×]/.test(os[1]) || os[1]=='+' ||
									 /[\+×]/.test(os[2]) && +t0[2]>+t0[3] ||
									/([\+×])\1/.test(os[0]+os[1]) && +t0[0]>+t0[1]
									 )){	//a?b-×(c×÷d)	a?b+(c?d)

									t.splice(4,0,'(');
									t.splice(8,0,')');
								}
								if(k==3 && !(/[×÷]/.test(os[1]) && /[\+\-×]/.test(os[0]) || /[\+\-]{2}/.test(os[1]+os[2]) && os[0]=='+' ||
									/[\+×]/.test(os[1]) && +t0[1]>+t0[2] ||
									/([\+×])\1/.test(os[0]+os[2]) && +t0[0]>+t0[3]
									)){	//a+-×(b×÷c)?d	a+(b+-c)+-d
									t.splice(2,0,'(');
									t.splice(6,0,')');
								}
								if(k==4 && !(/[×÷]{2}/.test(os[0]+os[1]) || os[1]=='-' && /[×÷]/.test(os[2]) || /[\+\-]/.test(os[1]) || os[1]=='×' &&  /[×÷]/.test(os[2]) ||
									 /[\+×]/.test(os[0]) && +t0[0]>+t0[1] || 
									 /[\+×]/.test(os[2]) && +t0[2]>+t0[3] ||
									/[\+×]/.test(os[1]) && os[0]==os[2] && +t0[0]>+t0[2]
									)){	//(a×÷b)×÷(c?d) (a?b)×(c×÷d)	(a?b)-(c×÷d)	(a?b)+(c?d)
									t.splice(0,0,'(');
									t.splice(4,0,')');
									t.splice(6,0,'(');
									t.splice(10,0,')');
								}
								if(k==5 && !(/[×÷]{2}/.test(os[0]+os[1]) || /[\+\-]/.test(os[2]) || 
									/([\+×])\1/.test(os[0]+os[1]) && (+t0[0]>+t0[1] || +t0[1]>+t0[2]) || 
									(os[0]==os[1] || /[\+\-]/.test(os[0]) && os[1]=='×') && +t0[1]>+t0[2] || 
									(os[0]=='+' && /[\+\-]/.test(os[1]) || os[0]=='×') && +t0[0]>+t0[1]
									)){	//(a×÷b×÷c)?d	(a?b?c)+-d
									t.splice(0,0,'(');
									t.splice(6,0,')');
								}
								if(k==6 && !(/[×÷]{2}/.test(os[1]+os[2]) && /[\-×]/.test(os[0]) || os[0]=='+' ||
									/([\+×])\1/.test(os[1]+os[2]) && (+t0[1]>+t0[2] || +t0[2]>+t0[3]) || 
									(os[1]=='+' && /[\+\-]/.test(os[2]) || os[1]=='×') && +t0[1]>+t0[2] || 
									(os[2]=='×' && /[\+\-×]/.test(os[1])) && +t0[2]>+t0[3]
									)){	//a-×(b×÷c×÷d)	a+(b?c?d)
									t.splice(2,0,'(');
									t.splice(8,0,')');
								}
								
								if(t.indexOf('(')<0){
									continue;
								}
							}else if(/([\+×])\1{2}/.test(ostr) && (+t0[0]>+t0[1] || +t0[1]>+t0[2] || +t0[2]>+t0[3]) || 
								(os[0]=='+' && /[\+\-]/.test(os[1]) || os[0]=='×') && +t0[0]>+t0[1] || 
								(/[\+\-]{2}/.test(os[0]+os[1]) && /[\+\-]/.test(os[2]) || os[1]=='×' && /[\+\-×]/.test(os[0]) || /([×÷])\1/.test(os[0]+os[1]) ) && +t0[1]>+t0[2] ||
								os[1]==os[2] && +t0[2]>+t0[3]
							){

								
								continue;
								
								
							}
/*
							if(t.join('')=='1+3÷11÷8'){
								
								consolelog('异常！',ostr, t0,k,os[1]==os[2], +t0[2]>+t0[3],t);
							}
*/
							t=t.join('');
							
							if(tA.indexOf(t)>-1){continue}
							tA.push(t);

						//	consolelog(t);
							/*
							if(+t=='24'){
								return t+' = 24'
							}
							*/
							if(Math.abs(eval(t.replace(/×/g,'*').replace(/÷/g,'/'))-24)<0.0001){
								return t+' = 24'
							}
						}
					}
				}
				return A+'无解'
			};
			rS=rS.concat(
				Arrf(function(t){
					return calc24with4(t.split(/\D/.test(t)?/\D/:''))
			},VA));
		}




		if(sel('十字相乘法')){//降幂系数，分解因式	(p1x+q1)(p2x+q2) [x-(-b+/b^2-4ac)/2a][x-(-b-/b^2-4ac)/2a]
			rS=rS.concat(
				Arrf(function(x){
					var xs=x.split(/[ ,&]/);
					if(xs.length<3){
						xs.unshift(''+1)
					}
					var isNeg0=xs[2][0]=='-',fts0=factors(xs[2].replace('-','')),n0=fts0.length/2,
						isNeg2=xs[0][0]=='-',fts2=factors(xs[0].replace('-','')),n2=fts2.length/2;
					//consolelog(xs);
					//consolelog(fts0,fts2);
					
					var reA=function(A){
						//consolelog(A);
						if(A){
							return mtrx([[A[0][0],'','','',A[1][1]],['','⋱','','⋰',''],['','','','',''],['','⋰','','⋱',''],[A[1][0],'','','',A[0][1]]],'.','.','')+
								'\\\\ 十字相乘后，得到\\\\ '+ ArrfcA([times,plus,times],[[[A[0][0],'x'],A[1][1]],[[A[1][0],'x'],A[0][1]]])+' = '+

								ArrfcA([plus,times],[[xs[0],'x^2'],[xs[1],'x'],[xs[2]]])+ ' = 0'+
									
								'\\\\ 解得x='+divide([-A[1][1],A[0][0]])+'或'+divide([-A[0][1],A[1][0]])
						}
						return 	xs[2]+'全部因子（共'+fts0.length+'个） ：'+fts0+'\\\\ '+
							(+xs[0]==1?'':xs[0]+'全部因子（共'+fts2.length+'个） ：'+fts2)+
							'\\\\ 无法找出满足题意的因子乘积和，因此无法使用十字相乘法'
						
					};
					if(isNeg2){
						for(var i=0;i<n2;i++){
							for(var j=0;j<n0;j++){
								var q1=fts0[j],q2=fts0[n0*2-j-1],p1=fts2[i],p2=fts2[n2*2-i-1],sA=[];
								//consolelog(p1,p2,q1,q2);
								if(isNeg0){
									sA.push([[p1,-q1],[-p2,q2]],[[p1,q1],[-p2,-q2]]);
									if(p1!=p2 && q1!=q2){
										sA.push([[p1,q2],[-p2,-q1]],[[p1,-q2],[-p2,q1]]);
									}

								}else{
									sA.push([[-p1,q1],[p2,q2]],[[-p1,-q1],[p2,-q2]],[[p1,q1],[-p2,q2]],[[p1,-q1],[-p2,-q2]]);
									if(q1!=q2){
										sA.push([[-p1,q2],[p2,q1]],[[-p1,-q2],[p2,-q1]],[[p1,q2],[-p2,q1]],[[p1,-q2],[-p2,-q1]]);
									}
								}
								
								for(var k=0;k<sA.length;k++){
									if(ArrfcA([plus,times],sA[k])==+xs[1]){
										return reA(sA[k])
									}
								}
							}
						}
					}else{
						
						for(var i=0;i<n2;i++){
							for(var j=0;j<n0;j++){
								var q1=fts0[j],q2=fts0[n0*2-j-1],p1=fts2[i],p2=fts2[n2*2-i-1],sA=[];
								//consolelog(q1,q2,p1,p2);
								if(isNeg0){
									sA.push([[p1,-q1],[p2,q2]]);
									if(p1==p2 && q1!=q2){
										sA.push([[p1,q1],[p2,-q2]]);
									}
									if(p1!=p2 && q1!=q2){
										sA.push([[p1,q2],[p2,-q1]],[[p1,-q2],[p2,q1]],[[p1,q1],[p2,-q2]]);
									}
									if(p1!=p2 && q1==q2){
										sA.push([[p1,q1],[p2,-q2]]);
									}

								}else{
									sA.push([[p1,q1],[p2,q2]],[[p1,-q1],[p2,-q2]]);
									if(q1!=q2){
										sA.push([[p1,q2],[p2,q1]],[[p1,-q2],[p2,-q1]]);
									}
								}
								
								for(var k=0;k<sA.length;k++){
									if(ArrfcA([plus,times],sA[k])==+xs[1]){
										return reA(sA[k])
									}
								}
							}
						}
					}
					return reA()

				},VA)
			);
		}




























		if(sel('小数→百分数')){//小数,循环节长度
			rS=rS.concat(
				Arrf(function(t){
					var V=t.split(/[ &,]/),dgts=V.length>1?V[1]:0;
					return V[0]+' = '+n2percnt(V[0],dgts,V.length>2).replace(/%/,'\\%');
			},VA));
		}
		if(sel('小数→分数')){//小数,循环节长度
			rS=rS.concat(
				Arrf(function(t){
					var V=t.split(/[ &,]/),dgts=V.length>1?V[1]:0,decimals=(V[0].split('.')[1]||'').length,Vl=V[0].length,d=-dgts-(decimals<dgts?1:0), f=n2frac(V[0],dgts).split('/');
					return (dgts?V[0].substr(0,Vl+d)+
						Arrf(function(t){return t=='.'?t:'\\dot '+t},V[0].substr(d).split('')).join(''):V[0])+' = '+frac(f[0],f[1]||1,'')
			},VA));
		}

		if(sel('保留m位小数')){
			rS=rS.concat(
				Arrf(function(t){
					var V=t.split(/[ &,]/),dgts=V.length>1?V[1]:2;
					return V[0]+'(保留'+dgts+'位小数) ≈ '+(+V[0]).toFixed(+dgts);
			},VA));
		}

		if(sel('保留有效数字')){
			rS=rS.concat(
				Arrf(function(t){
					var V=t.split(/[ &,]/),dgts=V.length>1?V[1]:1;
					return V[0]+'(保留'+dgts+'位有效数字) = '+(+V[0]).toPrecision(+dgts);
			},VA));
		}
		if(sel('科学计数法')){
			rS=rS.concat(
				Arrf(function(t){
					var V=t.split(/[ &,]/),dgts=V.length>1?+V[1]:0;
					return V[0]+' = '+(isNaN(dgts)?(+V[0]).toExponential():(+V[0]).toExponential(dgts)).replace('e+0','').replace(/e(.\d+)/,'⋅10^{$1}').replace('+','')
			},VA));
		}
		if(sel('工程计数法')){
			rS=rS.concat(
				Arrf(function(x){
					var t=x.split(/[ &,]/)[0],V=t.split('.'),abst=Math.abs(+t),Expnum=(+t).toExponential(),Exp=+Expnum.replace(/.+e/,'');

					if(abst<1000 && abst>=1 ){return t}
					if(Exp){
						if(Exp%3){
							if(Exp>0){
								return t+' = '+t.replace('.','').replace(new RegExp('(.{'+(Exp%3+1)+'})'),'$1.')+'⋅10'+sup(Exp-Exp%3,'')
							}else{
								
								var s=t.replace('.','').replace(/^(-?)0+/,'$1').replace(new RegExp('(.{'+(Exp%3+4)+'})'),'$1.');
								if(!/\./.test(s) && s.length<3){
									//s+=ZLR(0,3-s.length+t.replace(/[1-9].* /,'').length-2)
									s=times([t,Math.pow(10,-(Exp-Exp%3-3))])+''
								}
								return t+' = '+s.replace(/\.$/,'')+'⋅10'+sup(Exp-Exp%3-3,'')


							}
						}else{

							return t+' = '+t.replace('.','').replace(/^(-?)0+/,'$1').replace(/^(.)/,'$1.')+'⋅10'+sup(Exp,'')
						}
						
					}else{
						return '未计算'
					}

			},VA));
		}



		if(sel('假分数→带分数')){
			rS=rS.concat(
				Arrf(function(t){
					var V=Zh2n(t.split(/[ &,]/)[0]),f0=FracReduct(n2frac(V)),f=FracReduct(n2frac(V),1);
					f[0]=f[0].replace(/^0/,'').replace('-0','-');
					var m=f[1], n=FracReduct(f[1]),nA=n.split('/');
					f[1]=m.split('/');
				
				//	consolelog(f[1]);
					return frac(V.split('/')[0],V.split('/')[1],'')+' = '+(f0!=V?frac(f0.split('/')[0]+'×'+gcd(V.split('/')),f0.split('/')[1]+'×'+gcd(V.split('/')),'')+' = '+f0+' = ':'')+
						(f[1][1]?(f[0] && f[0]!='-' && f0==V?frac(f[0].replace('-','')+'×'+f[1][1]+'+'+f[1][0],f[1][1],'')+' = ':'')+
						f[0]+frac(f[1][0],f[1][1],'')+(m==n?'':' = '+f[0]+frac(nA[0], nA[1], '')):f[1][0]);
			},VA));
		}
		if(sel('带分数→假分数')){//k,m/n
			rS=rS.concat(
				Arrf(function(t){
					var V=Arrf(Zh2n,t.split(/[又,]/g)).join().split(/[ &,]/),f=V[1].split('/'),
						m=plus([times([V[0].replace('-',''),f[1]]),f[0]]),n=FracReduct([m,f[1]]),nA=n.split('/');
					return V[0]+frac(f[0],f[1],'')+' = '+frac(plus([times([V[0].replace('-',''),f[1]],1),f[0]],1),f[1],'')+' = '+frac(m,f[1],'')+(m+'/'+f[1]==n?'':' = '+frac(nA[0], nA[1], ''))
			},VA));
		}

		if(sel('约分')){
			rS=rS.concat(
				Arrf(function(t){
					var V=Arrf(Zh2n,t.split(/[ &,]/)), R=Arrf(function(s){
						var f=s.split('/'), r;
						if(f.length==2){
							var g=gcd(f);
							if(g==1){
								r=frac(f[0],f[1],'')+'\\\\ 已经是最简分数了，无法约分'
							}else{
								var u0=divide([f[0],g]), u1=divide([f[1],g]);
								r=Eq([frac(f[0],f[1],''),frac(u0+'×'+kancel(g),u1+'×'+kancel(g),''),(+u1==1?u0:frac(u0,u1,''))],'','line')
							}
						}else{
							r=s
						}
						return r
					}, V);

					return kxA(R);
			},VA));
		}
		
		if(sel('通分')){
			rS=rS.concat(
				Arrf(function(t){
					var V=Arrf(Zh2n,t.split(/[ &,，、和与加\+减\-]+/g)),l=lcmFrac(Arrf(FracReduct,V)),
						opr=opreplace(t.replace(/[^ &,，、和与加\+减\-]/g,'')),opr1=/[\+\-]/.test(opr),
						
						rA=[], R=Arrf(function(s){
					//	consolelog(s);
						var f=s.split('/'), r;
						if(f.length==2){
							if(+f[1]==l){
								r=frac(f[0],f[1],'');
								rA.push([f]);
							}else{
								var u=divide([l,f[1]]), uf=/\//.test(u);
								rA.push([f,[f[0]+(uf?('×'+u.replace('/','÷')).replace('×1÷','÷'):'×'+u),f[1]+(uf?('×'+u.replace('/','÷')).replace('×1÷','÷'):'×'+u)],[times([f[0],u]),l]]);
								r=Eq(Arrf(kfrac,rA[rA.length-1]),'','line');
							}
						}else{
						//	consolelog('s='+s);
							rA.push([s,[s+'×'+l,l],[times([s,l]),l]]);
							r=Eq(Arrf(kfrac,rA[rA.length-1]),'','line');
						}
						return r
					}, V);
				//	consolelog(rA.join('\n'));
					var ops=opr.split(''), m=Arri(rA,-1), n=m.length;
				//	consolelog(m.join('\n'));
					
					if(opr1){
						consolelog(ops,m,l);
						R=[nOpr2s(ops,V,1)+' = '+frac(m[0][0],m[0][1],'')+opr+frac(m[1][0],m[1][1],'')+' = '+frac(nOpr2s(ops,Arri(m,0),1),l,'')+ ' = '+FracReduct([nOpr2s(ops,Arri(m,0)),l])];
					}else{//比较大小
						

						Arrf(function(a,i){a[1]=V[i]},m);//	分子, 原分/数, 01标记
						
						sort2(m,'','','',1);

						Arrf(function(a,i){if(i){var b=m[i-1];s=b[2]+a[2]?' < ':' = ';a[0]=s+frac(a[0],l,''); a[2]=s+a[1]}else{a[0]=frac(a[0],l,''); a[2]=a[1]}},m);
						R.push(Arri(m,0).join(''),'因此'+Arri(m,2).join(''));
					}

					return kxAfrac(R);
			},VA));
		}


		if(sel('分子分母积等于n')){
			rS=rS.concat(
				Arrf(function(t){
					var V=Zh2n(t), R0=[],R1=[],R2=[];
					var a=factors(V),l=a.length, l2=Math.floor(l/2);
					for(var i=0;i<l2;i++){
						R0.push(frac(a[i],a[l-i-1],''));
						R1.push(frac(a[l-i-1],a[i],''));
						if(gcd([a[i],a[l-i-1]])==1){
							R2.push(frac(a[i],a[l-i-1],''));
							if(a[i]!=1){
								R2.push(frac(a[l-i-1],a[i],''));
							}
						}
					}
					if(l%2){
						R1.push(frac(a[l2],a[l2],''));
					}

					return kxAfrac(['真分数有'+R0.join(', '), '假分数有'+R1.join(', '),  '既约分数有'+R2.join(', ')]);
			},VA));
		}

		if(sel('分子分母和等于n')){
			rS=rS.concat(
				Arrf(function(t){
					var V=Zh2n(t), R0=[],R1=[],R2=[];
					Arrf(function(a){
						var g=gcd(a);
						(a[0]<a[1]?R0:R1).push(frac(a[0],a[1],''));
						if(a[0]<a[1]){R1.push(frac(a[1],a[0],''))}

						if(g==1){
							R2.push(frac(a[0],a[1],''));
							if(a[0]!=1){
								R2.push(frac(a[1],a[0],''));
							}
						}
					}, SUMs(V,2,'','',1));

					return kxAfrac(['真分数有'+R0.join(', '), '假分数有'+R1.join(', '),  '既约分数有'+R2.join(', ')]);
			},VA));
		}

		if(sel('有理数幂化简')){
			rS=rS.concat(
				Arrf(function(t){
					var R=/,/.test(t)?t.split(','):exp2root(t), V=RootReduct(R);

					return kfrac(eqv(Arrf(root2exp,[R,V])),1);
			},VA));
		}


		if(sel('分母有理化')){
			rS=rS.concat(
				Arrf(function(t){
					var R=/,/.test(t)?t.split(','):exp2root(t), V=RootReduct(R);

					return kfrac(eqv(Arrf(root2exp,[R,V])),1);
			},VA));
		}
		if(sel('分子有理化')){
			rS=rS.concat(
				Arrf(function(t){
					var R=/,/.test(t)?t.split(','):exp2root(t), V=RootReduct(R);

					return kfrac(eqv(Arrf(root2exp,[R,V])),1);
			},VA));
		}

		if(sel('x^2')){
			rS=rS.concat(Arrf(function(t){return t+'^2 = '+square(t,1)},VA));
		}
		if(sel('x^3')){
			rS=rS.concat(Arrf(function(t){return t+'^3 = '+cubic(t,1)},VA));
		}
		if(sel("$kroot('x')$")){
			rS=rS.concat(Arrf(function(t){return kroot(t)+' = '+sqrt(t,1)},VA));
		}
		if(sel("$kroot('x',3)$")){
			rS=rS.concat(Arrf(function(t){return kroot(t,3)+' = '+cbrt(t,1)},VA));
		}
		if(sel("$kroot('x',4)$")){
			rS=rS.concat(Arrf(function(t){return kroot(t,4)+' = '+sqrt(sqrt(t),1)},VA));
		}
		if(sel("$kroot('x','n')$")){
			rS=rS.concat(Arrf(function(t){var ta=t.split(/[ &,]/);return kroot(ta[0],ta[1])+' = '+pow([ta[0],divide([1,ta[1]])],1)},VA));
		}
		if(sel('e^x')){
			rS=rS.concat(Arrf(function(t){var r=Math.exp(+t);return 'e^{'+t+'} = '+r},VA));
		}
		if(sel('e^x-1')){
			rS=rS.concat(Arrf(function(t){var r=Math.expm1(+t);return 'e^{'+t+'}-1 = '+r},VA));
		}
		if(sel('\\ln')){
			rS=rS.concat(Arrf(function(t){var r=Math.log(+t);return '\\ln '+t+' = '+r},VA));
		}
		if(sel('\\ln(x+1)')){
			rS=rS.concat(Arrf(function(t){var r=Math.log1p(+t);return '\\ln('+t+'+1) = '+r},VA));
		}
		if(sel('\\lg x')){
			rS=rS.concat(Arrf(function(t){var r=Math.log10(+t);return '\\lg'+t+' = '+r},VA));
		}
		if(sel('\\log_2x')){
			rS=rS.concat(Arrf(function(t){var r=Math.log2(+t);return '\\log_2'+t+' = '+r},VA));
		}
		if(sel('\\sin')){
			rS=rS.concat(Arrf(function(t){var r=Math.sin(+t);return '\\sin('+t+') = '+r},VA));
		}
		if(sel('\\cos')){
			rS=rS.concat(Arrf(function(t){var r=Math.cos(+t);return '\\cos('+t+') = '+r},VA));
		}
		if(sel('\\tan')){
			rS=rS.concat(Arrf(function(t){var r=Math.tan(+t);return '\\tan('+t+') = '+r},VA));
		}
		if(sel('\\cot')){
			rS=rS.concat(Arrf(function(t){var r=1/Math.tan(+t);return '\\cot('+t+') = '+r},VA));
		}
		if(sel('\\sec')){
			rS=rS.concat(Arrf(function(t){var r=1/Math.cos(+t);return '\\sec('+t+') = '+r},VA));
		}
		if(sel('\\csc')){
			rS=rS.concat(Arrf(function(t){var r=1/Math.sin(+t);return '\\csc('+t+') = '+r},VA));
		}
		if(sel('\\arcsin')){
			rS=rS.concat(Arrf(function(t){var r=Math.asin(+t);return '\\arcsin('+t+') = '+r},VA));
		}
		if(sel('\\arccos')){
			rS=rS.concat(Arrf(function(t){var r=Math.acos(+t);return '\\arccos('+t+') = '+r},VA));
		}
		if(sel('\\arctan')){
			rS=rS.concat(Arrf(function(t){var r=Math.atan(+t);return '\\arctan('+t+') = '+r},VA));
		}
		if(sel('\\arccot')){
			rS=rS.concat(Arrf(function(t){var r=Math.atan(1/+t);return kxf('arccot')+'('+t+') = '+r},VA));
		}
		if(sel('\\arcsec')){
			rS=rS.concat(Arrf(function(t){var r=Math.acos(1/+t);return kxf('arcsec')+'('+t+') = '+r},VA));
		}
		if(sel("$kxf('arccsc')$")){
			rS=rS.concat(Arrf(function(t){var r=Math.asin(1/+t);return kxf('arccsc')+'('+t+') = '+r},VA));
		}

		if(sel('\\sh')){
			rS=rS.concat(Arrf(function(t){var r=Math.sinh(+t);return '\\sh('+t+') = '+r},VA));
		}
		if(sel('\\ch')){
			rS=rS.concat(Arrf(function(t){var r=Math.cosh(+t);return '\\ch('+t+') = '+r},VA));
		}
		if(sel('\\th')){
			rS=rS.concat(Arrf(function(t){var r=Math.tanh(+t);return '\\th('+t+') = '+r},VA));
		}
		if(sel('\\cth')){
			rS=rS.concat(Arrf(function(t){var r=1/Math.tanh(+t);return '\\cth('+t+') = '+r},VA));
		}
		if(sel("$kxf('sech')$")){
			rS=rS.concat(Arrf(function(t){var r=1/Math.cosh(+t);return kxf('sech')+'('+t+') = '+r},VA));
		}
		if(sel("$kxf('csch')$")){
			rS=rS.concat(Arrf(function(t){var r=1/Math.sinh(+t);return kxf('csch')+'('+t+') = '+r},VA));
		}
		if(sel('\\sh^{-1}')){
			rS=rS.concat(Arrf(function(t){var r=Math.asinh(+t);return '\\sh^{-1}('+t+') = '+r},VA));
		}
		if(sel('\\ch^{-1}')){
			rS=rS.concat(Arrf(function(t){var r=Math.acosh(+t);return '\\ch^{-1}('+t+') = '+r},VA));
		}
		if(sel('\\th^{-1}')){
			rS=rS.concat(Arrf(function(t){var r=Math.atanh(+t);return '\\th^{-1}('+t+') = '+r},VA));
		}
		if(sel('\\cth^{-1}')){
			rS=rS.concat(Arrf(function(t){var r=Math.atanh(1/+t);return '\\cth^{-1}('+t+') = '+r},VA));
		}
		if(sel("$kxf('sech')$^{-1}")){
			rS=rS.concat(Arrf(function(t){var r=Math.acosh(1/+t);return kxf('sech')+'^{-1}('+t+') = '+r},VA));
		}
		if(sel("$kxf('csch')^{-1}")){
			rS=rS.concat(Arrf(function(t){var r=Math.asinh(1/+t);return kxf('csch')+'^{-1}('+t+') = '+r},VA));
		}




		if(sel('+')){
			rS=rS.concat(Arrf(function(t){var V=t.split(/[ &,]/),r=Plus(V);return kfrac(r.toStr(1)+' = '+plus(V,1))},VA));
		}
		if(sel('-')){
			rS=rS.concat(Arrf(function(t){var V=t.split(/[ &,]/),r=Minus(V);return kfrac(r.toStr(1)+' = '+minus(V,1))},VA));
		}
		if(sel('×')){
			rS=rS.concat(Arrf(function(t){var V=t.split(/[ &,]/),r=Times(V);return kfrac(r.toStr(1)+' = '+times(V,1))},VA));
		}
		if(sel('÷')){
			rS=rS.concat(Arrf(function(t){var V=t.split(/[ &,]/),r=Divide(V);return kfrac(r.toStr(1)+' = '+divide(V,1))},VA));
		}

		if(sel('x^y')){

			rS=rS.concat(Arrf(function(t){var V=t.split(/[ &,]/),A=seqsA(V[0]);
				return kxA(Arrf(function(i){
					return kxA(Arrf(function(s){
						var r0=i, r1=s,
						r=pow([r0,r1],1);
						//r=Math.pow(r0,r1);

						return pppow(i)+sup(s,'')+' = '+r
						},seqsA(V[1])))},A))},VA));
			
		}
		if(sel('\\log_xy')){
			rS=rS.concat(Arrf(function(t){var V=t.split(/[ &,]/),r0=V[0],r1=V[1],
				r=r0=='2'?Math.log2(r1):(r0=='10'?Math.log10(r1):Math.log(r1)/Math.log(r0));
				return '\\log_{'+V[0]+'}'+V[1]+' = '+r},VA));
		}

		if(sel('竖式计算')){
			rS=rS.concat(
				Arrf(function(x){
					var xs=opreplace0(opreplace(x)).replace(/[儿=用]|列|竖式|计算|多少|等于|/g,'').replace(/保留.位小数/,function(t){return ','+Zh2n(t).replace(/\D/g,'')})
						.split(/[ ,&]/), nums=xs[0].replace(/(.+)[\+\-\×÷](.+)/g,function(t){return Arrf(Zh2n,t.split(/[\+\-\×÷]/)).join(t.replace(/[^\+\-\×÷]/g,'').replace(/^(.)\1+$/,'$1'))}),
						A=nums.split(/[\+\-\×÷]/),B=[A[1],A[0]], opr=nums.replace(/[^\+\-\×÷]/g,'').replace(/^(.)\1+$/,'$1');
					//	result=Num.opr1('竖式',nums,xs[1]?Zh2n(xs[1]):0);
					
					consolelog('xs=',xs,'nums=',nums,'A=', A,'opr=',opr);
					if(opr=='+' || opr=='-'){
						return Decimal.oprs('竖式+-',A,opr);
					}
					if(opr=='×'){
						return Decimal.oprs('竖式*',A);
					}
					if(opr=='÷'){
						return Decimal.oprs('竖式/',A,xs.length>1?+xs[1]:5);
					}
					return '暂不支持！'
					//return kxA(result)
					
				},VA)
			);
		}


		if(sel('Numerical Calculator JS Native')){
			rS=rS.concat(
				Arrf(function(s){
					var t=eval(s);
					return s+' ≈ '+t
			},VA));
		}
		
		if(sel('Numerical Calculator')){
			rS=rS.concat(
				Arrf(function(s){
					var t=opreplace(s).replace(/÷/g,'/'),ass=/[ &,].+=/.test(t),V=t.split(/[ &,]/);
					return t+' ≈ '
			},VA));
		}
		if(sel('Symbolic Calculator')){
			//十二分之五加十四分之三加十二分之一
			rS=rS.concat(
			Arrf(function(s){
					//var t=opreplace(s).replace(/÷/g,'/'),ass=/ .+=/.test(t),V=t.split(' ');
					var t=opreplace(s).replace(/[^\+\-\×÷]+/g,function(t){return Zh2n(t)}),ass=/ .+=/.test(t),V=t.split(' ');
					return t+' = '
			},VA));
		}

		
		
		
		if(sel('一元一次','Unary','代数方程')){
			rS=rS.concat(
			Arrf(function(s){
					var p=/&/.test(s)?s.replace(/.+&/,''):'x', A=s.replace(/&.+/,'').split(/[, ]/);
					return kxAfrac(equationA(A,'',p)[1])
			},VA));
		}
		if(sel('一元二次','Unary','代数方程')){
			rS=rS.concat(
			Arrf(function(s){
					var p=/&/.test(s)?s.replace(/.+&/,''):'x', A=s.replace(/&.+/,'').split(/[, ]/);
					return kxAfrac(equationA(A,'',p)[1])
			},VA));
		}
		if(sel('一元三次','Unary','代数方程')){
			rS=rS.concat(
			Arrf(function(s){
					var p=/&/.test(s)?s.replace(/.+&/,''):'x', A=s.replace(/&.+/,'').split(/[, ]/);
					return kxAfrac(equationA(A,'',p)[1])
			},VA));
		}
		if(sel('一元四次','Unary','代数方程')){
			rS=rS.concat(
			Arrf(function(s){
					var p=/&/.test(s)?s.replace(/.+&/,''):'x', A=s.replace(/&.+/,'').split(/[, ]/);
					return kxAfrac(equationA(A,'',p)[1])
			},VA));
		}

		if(sel('一元一次','Unary','同余方程')){
			rS=rS.concat(
			Arrf(function(s){
					if(/mod/.test(s)){
						var e=s.split(/mod/i)[0].replace(/[ \(（]/g,'').split(/[=≡]+/),m=s.split(/mod/i)[1].replace(/\D/g,''),ab=e[0].split(/[x]/i),a=ab[0]||1,b=minus([ab[1],e[1]]);
						return kxA(equationM([a,b],m,1)[1])
					}
					
					var A=s.split(/[, \/]/), fracTyp=+/\//.test(s);

					
					if(fracTyp || A.length<3){
						A[0]=('-'+A[0]).replace('--','');
						if(!fracTyp){
							A.splice(1,0,1)
						}
						fracTyp=1;
							
					}
				//	consolelog(A);
					return kxA(equationM([A[fracTyp],A[1-fracTyp]],A[2],1)[1])
			},VA));
		}
		if(sel('一元一次','一次','同余方程组')){
			rS=rS.concat(
			Arrf(function(s){
				var sA=s.trim().replace(/（/g,'(').replace(/）/g,')').replace(/ *& */g,'&').replace(/[=]+/g,'≡').split('&'), 
					fracTyp=+/\//.test(sA[0]), mtrxTyp=+/\[/.test(sA[0]),A, B=sA[0].split(/[, ]/), M=(sA[1]||'').split(/[, ]/), t=[], sameM=0;
				if(!fracTyp && !mtrxTyp){
					if(/;/.test(s)){//完整形式
						A=sA[0].split(';');

						Arrf(function(x,i){
							var e=x.split(/mod/i)[0].replace(/[ \(]/g,'').split(/≡/),m=x.split(/mod/i)[1].replace(/\D/g,''),ab=e[0].split(/[x]/i),a=ab[0]||1,b=minus([ab[1],e[1]]);

							A[i]=equationM([a,b],m)[0][0].split('m')
						},A);
						t.push(kxA(equationsMX(A,+sA[1])[1]))
					}else{
						if(M.length<B.length){//同模
							A=Mtrx.fromStr('['+B.join(','+sA[1]+';')+']')
						}else{//不同模
							A=Mtrx.opr1('T',Mtrx.fromStr('['+B.join(' ')+';'+M.join(' ')+']'))
						}
						t=equationsMX(A,+sA[2])[1]
					}
				}else{
					if(fracTyp){
						B=sA[0].split('/')[0];
						A=sA[0].split('/')[1];
						if(M.length<B.length){//同模
							sameM=1
						}
						t.push('方程组：\\\\ '+piece(Arrf(function(x,i){return kmod(A[i]+'x',x,sameM?sA[1]:M[i])},B)));
						
						Arrf(function(x,i){
							A[i]=equationM([x,neg(B[i])],sameM?sA[1]:M[i])[0][0].split('m')
						},A);

					}else if(sA[1]){//矩阵形式&同模	
						A=Mtrx.fromStr(sA[0]);
						t.push('方程组：\\\\ '+piece(Arrf(function(x,i){return kmod(x[0]+'x'+visiplus(x[1]),0,sA[1])},A)));
						Arrf(function(x,i){
							console.log(x,sA[1]);
							console.log(equationM(x,sA[1]));
							A[i]=equationM(x,sA[1])[0][0].split('m')
						},A);

					}else{//矩阵形式&不同模
						A=Mtrx.fromStr(sA[0]);
						t.push('方程组：\\\\ '+piece(Arrf(function(x,i){return kmod(x[0]+'x'+visiplus(x[1]),0,x[2])},A)));
						Arrf(function(x,i){
							A[i]=equationM(x.slice(0,2),x[2])[0][0].split('m')
						},A);
					}
					t.push('等价于'+kxA(equationsMX(A,+sA[2])[1]))
				}
				return kxA(t)
			},VA));
		}
		
		if(sel('多元一次','一次','同余方程组')){
			rS=rS.concat(
			Arrf(function(s){
				var sA=s.split('&'), A=Mtrx.fromStr(sA[0]), M=(sA[1]||'').split(/[, ]/), t=[], sameM=0;
				if(sA[1]){//同模		[3 5 1 4;2 3 2 7;5 1 3 6]&12
					t=equationsMS(A,+M[0])[1];


				}else{//不同模
					t.push('方程组：\\\\ '+piece(Arrf(function(x,i){return kmod(x[0]+'x'+visiplus(x[1]),0,x[2])},A)));
					Arrf(function(x,i){
						A[i]=equationM(x.slice(0,2),x[2])[0][0].split('m')
					},A);
				}

				return kxA(t)
			},VA));
		}



		if(sel('一元二次','Unary','同余方程')){
			rS=rS.concat(
			Arrf(function(s){
					if(/mod/.test(s)){
						var e=s.split(/mod/i)[0].replace(/[ \(（]/g,'').split(/[=≡]+/),m=s.split(/mod/i)[1].replace(/\D/g,''),ab=e[0].split(/[x]/i),a=ab[0]||1,b=minus([ab[1],e[1]]);
						return kxA(equationM([a,b],m,1)[1])
					}
					
					var A=s.split(/[, \/]/), fracTyp=+/\//.test(s);

					
					if(fracTyp || A.length<3){
						A[0]=('-'+A[0]).replace('--','');
						if(!fracTyp){
							A.splice(1,0,1)
						}
						fracTyp=1;
							
					}
				//	consolelog(A);
					return kxA(equationM([A[fracTyp],A[1-fracTyp]],A[2],1)[1])
			},VA));
		}
	}

	if(/Sequence/.test(t)){
		
		
		
		
		
	}



	OH(KxA(rS));
};
