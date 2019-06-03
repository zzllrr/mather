/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
/*
	bug
	集合环合
{<1,2>,<2,4>,<3,3>}
{<1,3>,<2,4>,<4,2>}	
	
*/
solve[81]=function(){
			
	var i0=$('#input0'),v=i0.val().replace(/\\\\/g,'').trim(), t=$('#subject2').val(), tasks=$('#solveGround .task.seled'), levels=$('#solveGround .level.seled'), stls=[], rS=[],
	str='', VA=v.split('\n'), n=VA.length, strA=fCC(seqA(65,n)).split(''), strB=fCC(seqA(945,n)).split('');
	tasks.each(function(){
		stls.push($(this).attr('data-tool').replace(/^\$.+\$$/,''))
	});
	var sel=function(x,p,pp,ppp){
		return stls.indexOf(x)>-1 && (p?levels.last().attr('data-i')==p:1) && (pp?levels.eq(-2).attr('data-i')==pp:1) && (ppp?levels.eq(-3).attr('data-i')==ppp:1)
	};
	
	
	/*
//dom → 反html
	var e1=function(d){
		var me=$(d),neg=me[0].outerHTML;
		if(me.is('.true')){
			neg=neg.replace(/true/,'false');
		}else if(me.is('.false')){
			neg=neg.replace(/false/,'true');
		}else if(me.is('.neg')){
			neg=me.html();
		}else{
			neg=DCtv('neg',neg);
		}
		return neg;

// 消灭双否定
	},jNN=function(){
		var d=$('#dom1'),end,endn=0,sel='.neg>.neg';
		while(!end && endn<15){
			var s=d.find(sel).filter(function(){
				return !$(this).parents().is(sel)
			});
			if(!s.length){end=true;break}
			s.each(function(){
				var me=$(this),pa=me.parent();
				pa.replaceWith(me.html());
			});
			//Log('prop','⇔','双否定');
			$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 双否定'))
			endn++
		}

// 消灭否定下的非操作符
	},jND=function(){
		var d=$('#dom1'),end,endn=0,sel=zlr('.neg>.n','disj conj impl equi',',');
		while(!end && endn<15){
			var s=d.find(sel).filter(function(){
				return !$(this).parents().is(sel)
			});
			if(!s.length){end=true;break}
			s.each(function(){
				var me=$(this),pa=me.parent();
				pa.replaceWith(OprWrap.prop(me.attr('data-oprs').replace(/^n/,''),me.html()));
			});
			//Log('prop','⇔','否定非操作符');
			$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 否定非操作符'));

			endn++
		}

// E10 E11 德摩根定律
	},jDE=function(){
		var d=$('#dom1'),end,endn=0,sel=zlr('.neg>.','disj conj',',');
		while(!end && endn<15){
			var s=d.find(sel).filter(function(){
				return !$(this).parents().is(sel)
			});
			if(!s.length){end=true;break}
			s.each(function(){
				var me=$(this),pa=me.parent(),chd=me.children(),t='';
				chd.each(function(){
					t+=e1(this)
				});
				t=OprWrap.prop((me.is('.disj')?'conj':'disj'),t);
				pa.replaceWith(t);
			});
			//Log('prop','⇔','德摩根定律');
			$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 德摩根定律'));
			endn++
		}

// 消灭TF
	},jTF=function(){
		var d=$('#dom1'),end,endn=0,sel='.true,.false';
		while(!end && endn<15){
			var s=d.find(sel).filter(function(){
				return !$(this).parents().siblings().is(sel)
			});
			if(!s.length || s.parent().is(d)){end=true;break}

			s.each(function(){
				var me=$(this),pa=me.parent(),s0,s1;

//∨T,∧F,→T,T→  ★1
				s0='.disj>.true, .conj>.false, .impl>div+.true';
				s1='.impl>.true+div';
				if(me.is(s0) || me.siblings().is(s1)){
					pa.replaceWith(this.outerHTML);
					return true
				}

//T↔,F↮,↛F,F↛ 邻★2
				s0='.equi>.true,.nequi>.false,.nimpl>div+.false';
				s1='.nimpl>.false+div';
				if(me.is(s0) || me.siblings().is(s1)){
					pa.replaceWith(me.siblings()[0].outerHTML);
					return true
				}

//↑F,↓T,T↮,↛T,T↛ 反★3
				s0='.nconj>.false, .ndisj>.true,.nequi>.true, .nimpl>div+.true';
				s1='.nimpl>.true+div';
				if(me.is(s0) || me.siblings().is(s1)){
					var neg=e1(this);
					pa.replaceWith(neg);
					return true
				}

//↑T,↓F,F↔,→F,F→ 反邻★4
				s0='.nconj>.true, .ndisj>.false, .equi>.false, .impl>div+.false';
				s1='.impl>.false+div';
				if(me.is(s0) || me.siblings().is(s1)){
					var neg=e1(me.siblings()[0]);
					pa.replaceWith(neg);
					return true
				}
//∨F,∧T ★5
				s0='.disj>.false, .conj>.true';
				if(me.is(s0)){
					if(me.siblings().length>1){
						me.remove();
					}else{
						pa.replaceWith(me.siblings()[0].outerHTML);
					}
					return true
				}
//¬T,¬F
				s0='.neg>.true,.neg>.false';
				if(me.is(s0)){
					me.toggleClass('true false').unwrap();
					return true
				}

			});
			//Log('prop','⇔','消灭TRUE/FALSE');
			$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 消灭TRUE/FALSE'));
			endn++
		}


// 结合律 去括号
	},jAS=function(){
		var d=$('#dom1'),end,endn=0,sel='.disj>.disj, .conj>.conj';
		while(!end && endn<15){
			var s=d.find(sel).filter(function(){
				return !$(this).parents().is(sel)
			});
			if(!s.length){end=true;break}
			s.each(function(){
				var me=$(this),pa=me.parent();
				me.replaceWith(me.html());
			});
			//Log('prop','⇔','结合律');
			$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 结合律'));
			endn++
		}

// 分配率 去括号
	},jDI=function(fun2){
		var d=$('#dom1'),end,endn=0,sel='.disj>.conj, .conj>.disj';
		while(!end && endn<15){
			var s=d.find(sel).filter(function(){
				var me=$(this),chd=me.children(),p=me.parents(),pa=me.parent(), gp=pa.parent();

				return !chd.is('.conj,.disj') && (fun2?(chd.length==2 && chd.eq(0).text()==chd.eq(1).text()):!gp.is(d))
			});
			if(!s.length){end=true;break}
			s.eq(0).each(function(){
				var me=$(this).addClass('clone'),pa=me.parent(),chd=me.children(),n=chd.length;
				pa.wrap(OprWrap.prop(me.attr('data-oprs'),''));
				for(var i=0;i<n-1;i++){
					pa.after(pa[0].outerHTML)
				}
				d.find('.clone').each(function(i){
					var me=$(this).removeClass('clone');
					me.children().eq(i).siblings().remove();
					if(me.children().length<2){
						me.replaceWith(me.html());
					}
				});
			});
//console.log(d.html(),fun2);
			//Log('prop','⇔','分配律'+(fun2?2:''));
			$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 分配律'));
			end=true;
			endn++
		}

// 补项
	},jAP=function(){
		var O1=i0.attr('data-oprs'),O1e2=O1=='disj'?'conj':'disj',S1=i0.attr('data-var'),N1=S1.length, d=$('#dom1'),end,endn=0,dchd=d.children(),op=dchd.attr('data-oprs')||O1,ope2=op=='disj'?'conj':'disj';
		if(dchd.is('.true,.false') || dchd.is('.var') && N1<2){return}
		if(dchd.is('.var') && N1>1){
			dchd.wrap(OprWrap.prop(O1e2,''));
			dchd=d.children();
		}else if(dchd.children('.conj,.disj').length){
			dchd.children().not('.opr').wrap(OprWrap.prop(ope2,''));
			dchd=d.children().children();
		}else{
			//无孙子
			//op=O1e2
			//op
		}

		dchd=dchd.filter(function(){
			return $(this).text().length<N1
		});
		if(dchd.length){
			dchd.each(function(){
				var me=$(this),t=me.text();
				for(var i=0;i<N1;i++){
					var s=S1[i];
					if(t.indexOf(s)<0){
						var v=DCtv('var',s),nv=e1(v),T=OprWrap.prop(me.is('.disj')?'conj':'disj',nv+v);	//op ope2
						if(i==0){
							me.prepend(T);
						}else{
							me.children().eq(i-1).after(T)
						}
					}
				}
			});
			//Log('prop','⇔','补项');
			$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 补项'))
		}

//补充主范式遗漏项
	},jAPm=function(){
		var O1=i0.attr('data-oprs'),O1e2=O1=='disj'?'conj':'disj',S1=i0.attr('data-var'),N1=S1.length, d=$('#dom1'),end,endn=0,dchd=d.children(),op=dchd.attr('data-oprs');
		if(dchd.is('.true,.false,.var')){return}

		var vS='',A=[],B=[],C=[],b=[],c=[];
		if(O1==op && !dchd.find('.opr').length){
//无孙子
		}else{
			dchd=dchd.children();
		}
		dchd.each(function(){
			var t='';
			$(this).children().each(function(){
				t+=$(this).is('.neg')?0:1
			});
			A.push(t);//二进制
			C.push(parseInt(t,2));//二进制转10进制
			
		});
//console.log(A);
//console.log(C);
		B=Set.opr2('-',seqA(0,Math.pow(2,N1)),C);
//console.log(B);
		for(var i=Math.pow(2,N1)-1;i>-1;i--){
			var s=('00'+i.toString(2)).substr(-N1),v0='';

			if(A.indexOf(s)<0){
				for(j=0;j<N1;j++){
					var v=DCtv('var',S1[j]);
					if(s[j]=='0'){
						v=DCtv('neg',v);
					}
					v0+=v;
				}
				vS+=OprWrap.prop(O1,v0);
				c.push(parseInt(s,2));//二进制转为十进制
			}

		}
		
		b=Set.opr2('-',seqA(0,Math.pow(2,N1)),c);
//console.log(A);
//console.log(B);
//console.log(C);
//console.log(D);
A.sort(sortBy.num);
B.sort(sortBy.num);
C.sort(sortBy.num);
b.sort(sortBy.num);
c.sort(sortBy.num);
		d.html(DCtv('neg',OprWrap.prop(O1e2,vS)));


		//(p↔q)∧(¬r∨s)
		$('#log').append(DCtv('log','⇔ '+
		(O1=='disj'?[subReg('M'+C.join('∧M'),/\d+/g),'∏('+C.join(',')+')','¬∏('+b.join(',')+')','∑('+b.join(',')+')',subReg('m'+b.join('∨m'),/\d+/g)].join(br+'⇔ '):
			[subReg('m'+C.join('∨m'),/\d+/g),'∑('+C.join(',')+')','¬∑('+c.join(',')+')','∏('+c.join(',')+')',subReg('M'+c.join('∧M'),/\d+/g)].join(br+'⇔ '))));

//		(O1=='disj'?[subReg('M'+B.join('∧M'),/\d+/g),'∏('+B.join(',')+')','¬∏('+b.join(',')+')','∑('+b.join(',')+')',subReg('m'+b.join('∨m'),/\d+/g)].join(br+'⇔ '):
//			[subReg('m'+C.join('∨m'),/\d+/g),'∑('+C.join(',')+')','¬∑('+c.join(',')+')','∏('+c.join(',')+')',subReg('M'+c.join('∧M'),/\d+/g)].join(br+'⇔ '))));//Prop.toStr(d)
			


// 消灭操作符
	},jO=function(){
		var d=$('#dom1'),end,endn=0,sel=zlr('.','ndisj nconj equi nequi impl nimpl',',');
		while(!end && endn<15){
			var s=d.find(sel).filter(function(){
				return !$(this).parents().is(sel)
			});
			if(!s.length){end=true;break}
			s.each(function(){
				var me=$(this),chd=me.children(),chd0=chd.eq(0),chd1=chd.eq(1),o=me.attr('data-oprs');
				if(/^n/.test(o)){
					me.replaceWith(e1(OprWrap.prop(o.replace(/^n/,''),me.html())))
				}else if(o=='impl'){
					chd0.replaceWith(e1(chd0));
					me.replaceWith(OprWrap.prop('disj',me.html()));
				}else{
					me.replaceWith(OprWrap.prop('conj',OprWrap.prop('impl',me.html())+OprWrap.prop('impl',chd1[0].outerHTML+chd0[0].outerHTML)));
				}
			});
		//	Log('prop','⇔','变成 合取析取');
			$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 变成 合取析取'))
			endn++
		}

//同项反项处理
	},jCD=function(){
		var d=$('#dom1'),end,endn=0,sel='.conj,.disj';
		while(!end && endn<15){
			var de=d.find('[data-e][data-v]');
			if(de.length){
				de.each(function(){
					var me=$(this);
					me.replaceWith(DCtv(me.attr('data-v')))
				});
			//	Log('prop','⇔','排中律或矛盾律');
						$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 排中律或矛盾律'))
			}
			de=d.find('[data-e]');
			if(de.length){
				de.each(function(){
					var me=$(this), sb=me.siblings();
					me.remove();
					if(sb.length<2){
						sb.unwrap();
					}
					//Log('prop','⇔','等幂律');
											$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 等幂律'))
				});

			}
			d.find(sel).filter('[data-cd]').removeAttr('data-cd');
			
			var s=d.find(sel).filter(function(){
				var me=$(this);
				return !me.parents('[data-e]').length && me.CD()
			});
			if(!s.length){end=true;break}
			endn++
		}

//合取析取结合 同项反项处理
	},jSN=function(){
		var d=$('#dom1'),end,endn=0,sel='.conj,.disj';
		while(!end && endn<15){
			var de=d.find('[data-e][data-v]');
			if(de.length){
				de.each(function(){
					var me=$(this);
					me.replaceWith(DCtv(me.attr('data-v')))
				});
				//Log('prop','⇔','合取析取 排中率或矛盾律');
				$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 合取析取 排中率或矛盾律'))
			}
			de=d.find('[data-e]');
			if(de.length){
				de.each(function(){
					var me=$(this),sb=me.siblings();
					me.remove();
					if(sb.length<2){
						sb.unwrap();
					}
				});
				//Log('prop','⇔','合取析取 吸收率');
				$('#log').append(DCtv('log','⇔ '+Prop.toStr(d)+' 合取析取 吸收率'))

			}
			d.find(sel).filter('[data-sn]').removeAttr('data-sn');
			
			var s=d.find(sel).filter(function(){
				var me=$(this),pa=me.parent();
				return pa.is(sel) && !me.parents('[data-e]').length && me.SN()
			});
			if(!s.length){end=true;break}
			endn++
		}

//交换律 排序
	};



	$.fn.extend({
		SN:function(){
			var sel='.conj>.conj,.conj>.disj,.disj>.conj,.disj>.disj',Me=$(this),f=false;
			if(!Me.is(sel)){return f}
			Me.each(function(){
				var me=$(this),chd=me.children(), p=me.parents(), pa=me.parent(), sb=me.siblings(), po=pa.attr('data-oprs'), mo=me.attr('data-oprs');
				chd.each(function(){
					var c=$(this),cH=this.outerHTML,nc=e1(this),t=false;
					sb.each(function(){
						var s=this.outerHTML;

						if(s==cH){
							f='S';
							//吸收率
							if(po!=mo){
								me.attr('data-e','true');
							}else{
							//等幂律
								c.attr('data-e','true');
							}
							t=true;
							return false
						}
						if(s==nc){
							f='N';
							//吸收率
							if(po!=mo){
								c.attr('data-e','true');
							}else{
							//等幂律
								pa.attr('data-e','true').attr('data-v',po=='disj');
							}
							t=true;
							return false
						}
					});
					if(t){return false}
				});
				if(f){
					me.attr('data-sn',f+'.'+po+'>.'+mo);
					f=me.attr('data-sn');
					return false
				}
			});
			return f
		},
		CD:function(){
			var sel='.conj,.disj',Me=$(this),f=false;
			if(!Me.is(sel)){return f}
			Me.each(function(){
				var me=$(this),chd=me.children(), mo=me.attr('data-oprs');
				chd.each(function(){
					var c=$(this),cH=this.outerHTML,nc=e1(this),t=false;
					c.siblings().each(function(){
						var s=this.outerHTML;
						if(s==cH){
							f='S';
							//等幂律
							c.attr('data-e','true');
							t=true;
							return false
						}
						if(s==nc){
							f='N';
							//等幂律
							me.attr('data-e','true').attr('data-v',mo=='disj');
							t=true;
							return false
						}
					});
					if(t){return false}
				});
				if(f){
					me.attr('data-cd',f+'.'+mo);
					f=me.attr('data-cd');
					return false
				}
			});
			return f
		}
	});


	if(/Proposition/.test(t)){
//命题 → dom
		//var d=$(Prop.fromStr(v));

		var d=$('#dom1');
		if(d.length<1){
			$('#oContent').after('<div id=dom1 hidden>'+dc);
			d=$('#dom1');
		}
		d.html(Prop.fromStr(v));
		v=Prop.toStr(d);



//命题变元统计
		var S1=v.replace(/\W/g,'').split('').sort().join('').replace(/(.)\1+/g,'$1'), N1=S1.length, O1=/合/.test(t)?'conj':'disj';

		rS=[];
		i0.attr({'data-v':v,'data-var':S1,'data-num':N1,'data-oprs':O1});


		var fun1=function(){
console.log('fun1');
			var end,endn=0,jj='',f=function(){
				//SortBy.jSORT.prop();
				
				
					var d=$('#dom1'),end,endn=0,sel='.conj,.disj';
					d.find(sel).each(function(){
						var me=$(this),t=me.html(),s='',chd=me.children();
						if(!chd.is('.opr')){
							chd.sort(function(a,b){var m=$(a).text(),n=$(b).text(),r=0;if(m<n){r=-1} if(m>n){r=1} if(r==0){if($(b).is('.neg')){r=1}else if($(a).is('.neg')){r=-1}} return r}).each(function(){
								s+=this.outerHTML
							});
							if(s!=t){
								me.html(s);
								//Log('prop','⇔','交换律 排序');
							}
						}
					});
				
				
				if(d.children('.true,.false,.var').length || endn>15){
					//Log('prop');
					end=true
				}else if(d.find('.true,.false').length){
					jTF();

				}else if(d.find('.disj, .conj').CD()){
					jCD();

				}else if(d.find('.neg>.neg').length){
					jNN();

				}else if(d.find('.neg>.opr[data-oprs^=n]').length){
					jND();

				}else if(d.find(zlr('.','ndisj nconj equi nequi impl nimpl',',')).length){
					jO();

				}else if(d.find(zlr('.neg>.','disj conj',',')).length){
					jDE();

				}else if(d.find('.disj>.disj, .conj>.conj').length){
					jAS();

				}else if(d.find('.disj>.conj, .conj>.disj').SN()){
//console.log('SN');
					jSN();

				}else if(d.find('.disj>.conj, .conj>.disj').length){
//console.log('jDI');




//​,(A⊕B)⊕C

//(((A∧¬B)∨(¬A∧B))∧¬C)∨((¬A∨B)∧(A∨¬B)∧C)
//(((A∧¬B)∨(¬A∧B))∧¬C)∨A

//((A∧¬B)∨(¬A∧B))∧¬C)

//A∧(¬A∨¬B)∧¬C

					jDI();
					var kk=d.html();
					if(kk==jj){
						end=true
					}else{
						jj=kk
					}
				}else{
					end=true
				}
//console.log(d.html());
			}
			while(!end && endn<15){

				f();
				endn++;
//console.log(endn,d.html());
			}
		}, fun2=function(){
console.log('fun2');
			var end,endn=0,f=function(){

				if(d.children('.true,.false').length || endn>15){

					end=true

				}else if(d.find('.disj>.conj, .conj>.disj').filter(function(){
					var me=$(this),chd=me.children();
					return chd.length==2 && chd.eq(0).text()==chd.eq(1).text()
				}).length){
					
					jDI(true);
					jAS();
					//endn=0;
				}else{
					end=true
				}
			};
			if(!d.children('.true,.false').length){
				//补项
console.log('补项');
				jAP();
				while(!end && endn<15){

					f();
					endn++;
console.log(endn);
				}
				//合并同类项
				jCD();
				//if(d.children().attr('data-oprs')!=O1){
				var dchd=d.children(),dcop=dchd.attr('data-oprs');
				if(dcop!=O1 && dchd.find('.opr').length || dcop==O1 && !dchd.find('.opr').length){
					if(dcop!=O1 && dchd.find('.opr').length){//多个子式
						
						
					}else{
						
						
						
					}
console.log(end);
					
						$('#log').append(DCtv('log','得到主'+(O1=='conj'?'析':'合')+'取范式，'+br+'再检查遗漏的极'+(O1=='conj'?'小':'大')+'项'))
					jAPm();

					jDE();
					
				}
				rS.push($('#log').html());
				
				//下面使用真值表
console.log('真值表');
				d.empty();
				var A=[[],[]], tfs=[S1.split('').concat(v)];
				for(var i=Math.pow(2,N1)-1;i>-1;i--){
					var s=('000'+i.toString(2)).substr(-N1),v2='',v0=v,vP=[],vPN=[], tfi=[];
console.log(i);
					for(j=0;j<N1;j++){
						var t1=S1[j],s1=s[j],t1n='¬'+t1;
						vP.push(s1=='0'?t1n:t1);
						vPN.push(s1=='0'?t1:t1n);

						v0=v0.replace(new RegExp(t1,'g'),s1);
						tfi.push(s1);
					}
console.log(v0);
console.log(Prop.fromStr(v0));

					d.html(Prop.fromStr(v0));

					//while(!d.children('.true,.false').length){
					//while(d.children('.true,.false').length){
console.log(i);
					while(d.children().find('.true,.false').length){
console.log(d.html());
						jTF();
					}
					
//console.log(d.html());
					var tf=d.children('.true').length;
console.log(d.html(),tf);
					//var tf=+d.is('.true');

					//v1+=br+v2+tf;
					tfi.push(tf);

					A[tf].push('('+(tf?vP:vPN).join(tf?'∧':'∨')+')');
					
					tfs.push(tfi);
				}

				rS.push('得到主'+(O1=='conj'?'合':'析')+'取范式',
					'下面使用真值表方法：',
					Table([],tfs,'alignc TBI1J'+N1),
					'检查为真的赋值，得到主析取范式：', A[1].join('∨'),
					'检查为假的赋值，变元取反，得到主合取范式：', A[0].join('∧'))
			}
		};


		if(sel('Proposition')){
			rS.push(v);
		}

		//if(/主|最简范式|集合运算/.test(t)){
		if(sel('主析取范式∨') || sel('主合取范式∧')){
			fun1();

			fun2();

		}
		
		if(sel('对偶')){
			rS.push('对偶公式：'+Prop.toStr(Prop.opr1('偶',Prop.fromStr(v))));
		}

		if(sel('集合化')){
			rS.push('等价的集合运算：'+Prop.toStr(v,'set',1));
		}
		if(sel('布尔化')){
			rS.push('等价的布尔代数：'+Prop.toStr(v,'bool',1));
		}
		if(sel('Simplify')){
			rS.push('化简结果：'+Prop.toStr(Prop.opr1('简',Prop.fromStr(v))));
		}
		if(sel('化简集合化')){
			rS.push('等价的集合运算：'+Prop.toStr(Prop.opr1('简',Prop.fromStr(v)),'set'));
		}
		if(sel('化简布尔化')){
			rS.push('等价的布尔代数：'+Prop.toStr(Prop.opr1('简',Prop.fromStr(v)),'bool'));
		}




	}
*/
	if(t=='Set'){

		if(sel('Set')){
			rS=rS.concat(concat(strA,
				Arrf(function(t){
					return '='+Set.toStr(Set.fromStr(t))
			},sets)));
		}
		if(sel('|A|')){
			rS=rS.concat(concat(copyA('|',n), strA,
				Arrf(function(t){
					return '|='+Set.toStr(Set.opr1('势',Set.fromStr(t)))
			},sets)));
		}
		if(sel('P(A)')){
			rS=rS.concat(concat(copyA('P(',n), strA,
				Arrf(function(t){
					return ')='+Set.toStr(Set.opr1('幂',Set.fromStr(t)))
			},sets)));
		}
		if(sel('全部关系')){
			rS=rS.concat(
				Arrf(function(t){
					var si=Set.fromStr(t),sin=si.length,powsi=Set.toStr(Set.opr1('幂',cartestian([si,si],'<>')),1);
					//console.log(powsi);
					return '集合上的全部关系共有2'+sup(sin+sup(2))+'= '+Math.pow(2,sin*sin)+'种：'+br+powsi

			},sets));
		}
			

		if(sel('命题化')){
			rS.push('等价的命题公式：'+Prop.toStr(Prop.fromStr(v,'set')));
		}
		if(sel('∩')){
			rS.push(strA.join('∩')+'='+Set.toStr(Set.opr2.apply(null,['∩'].concat(Arrf(Set.fromStr,sets)))));
									//	Set.toStr(Arrf(function(x,y){return Set.opr2('∩',Set.fromStr(x),Set.fromStr(y))},sets,'cp2'))
		}
		if(sel('∪')){
			rS.push(strA.join('∪')+'='+Set.toStr(Set.opr2.apply(null,['∪'].concat(Arrf(Set.fromStr,sets)))));
		}
		if(sel('-')){
			rS.push(strA.join('-')+'='+Set.toStr(Set.opr2.apply(null,['-'].concat(Arrf(Set.fromStr,sets)))));
		}
		if(sel('⊕')){//最后一行指定求法p
			var si=sets.slice(-1)[0], p=/^[\+\-]/.test(si)?si:'', notep=function(t){
				return 'A⊕B='+(/^\+/.test(t||'')?'(A∪B)-(A∩B)':'(A-B)∪(B-A)')
			};
			if(p){
				rS.push((n<4?notep(p)+'=':strA.slice(0,n-1).join('⊕')+eq(notep(p)))+
					Set.toStr(Set.opr2.apply(null,['⊕'].concat(Arrf(Set.fromStr,sets.slice(0,n-1)),p),'cp2'))
				);
			}else{
				rS.push((n<3?notep()+'=':strA.join('⊕')+eq(notep()))+
					Set.toStr(Set.opr2.apply(null,['⊕'].concat(Arrf(Set.fromStr,sets)),'cp2'))
				);
			}
		}
		if(sel('⊗')){//最后一行指定求法p 倒数第2行指定全集U
			var si=sets.slice(-1)[0], p=/^[\+\-]/.test(si)?si:'', U=Set.fromStr(sets.slice(p?-2:-1)[0]), w=Wcont(14,'集合运算与集合基数(势)'),notep=function(t){
				return 'A⊗B='+(/^.\+/.test(t||'')?w[8][2]:(/^.\-/.test(t||'')?w[7][2]:w[6][2])).replace(/\n.+/,'')
			};
			if(p){
				rS.push((n<5?notep(p)+'=':strA.slice(0,n-2).join('⊗')+eq(notep(p)))+
					Set.toStr(Set.opr2.apply(null,['⊗'].concat(Arrf(Set.fromStr,sets.slice(0,n-1)),p),'cp2'))
				);
			}else{
				rS.push((n<4?notep()+'=':strA.slice(0,n-1).join('⊕')+eq(notep()))+
					Set.toStr(Set.opr2.apply(null,['⊗'].concat(Arrf(Set.fromStr,sets)),'cp2'))
				);
			}
			/*
			rS.push((n<5?notep(p||'')+'=':strA.slice(0,n-2).join('⊗')+eq(notep(p||'')))+
				Set.toStr(Arrf(function(x,y){return Set.opr2('⊗',Set.fromStr(x),Set.fromStr(y),'',U)},sets.slice(0,n-2),'cp2'))
			);
			*/

		}
		if(sel('×')){

			if(n==1){
				sets=v.replace(/ \d+$/,'');
				n=+v.substr(sets.length);
				sets=copyA(sets,n);
				rsS='A'+sup(n);
			}else{
				rsS=strA.join('×');
			}
			rS.push(rsS+'='+Set.toStr(cartestian(Arrf(Set.fromStr,sets))));
			
		}

	}
	if(t=='Relation'){
		var A=v.replace(/｛/g,'{').replace(/｝/g,'}').replace(/，/g,',').split(' '), An=A.length,set=A[0],n, bool=A[A.length-1],set2,Uset,rA=[],Rlt='{}',q,ra, rs='';
		set=Set.fromStr(set);
		if(An==1){//商集确定的等价关系
			var Q=Set.fromStr(A[0].substr(4)),Ql=[],QA=[];
			for(var i=0;i<Q.length;i++){
				var Qil=Q[i].length;
				Ql.push(Qil);
				QA.push(Mtrx.build.N(Qil,Qil,1,true))
			}
			q=true;//是商集
			set2=set;
			Uset=set;
		}else if(An==2){//集合自身与自身的关系
			set2=set;
			Uset=set;
		}else{
			set2=Set.fromStr(A[1]);
			Uset=Set.opr2('∪',set,set2);
		}

		n=Uset.length;
		var Mtrx2Rlt=function(M){
			var Si=[];
			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
					if(M[i][j]){
						Si.push('&lt;'+[Set.toStr(Uset[i]),Set.toStr(Uset[j])].join(',')+'&gt;')
					}
				}
			}
			return $B('{'+Si.join(',')+'}',1)
		},Arr2RltSet=function(A){
			var Si=[];
			for(var i=0;i<A.length;i++){
				Si.push(Set.toStr(Uset[A[i]]))
			}
			return '{'+Si.join(',')+'}'
		};
		if(An==1){//商集确定的关系
			rA=Mtrx.build.D(QA);
			//Rlt=Mtrx2Rlt(rA);
		}else if(/^\{/.test(bool)){//关系是集合形式
			//Rlt=bool;
			rA=Mtrx.build.N(n,n,0,true);
			var B=Set.fromStr(bool);
			for(var k=0;k<B.length;k++){
				var Bk=B[k], b0=Set.toStr(Bk[0]),b1=Set.toStr(Bk[1]);
				rA[Set.opr2('搜',Uset,b0)][Set.opr2('搜',Uset,b1)]=1;
			}
			
		}else if(/^\[|I|diag\(/.test(bool)){//关系是矩阵形式
			//Rlt=bool;
			rA=Mtrx.fromStr(bool);

		}else{//关系是表达式
			var eA=e2A(bool,'',1),o=eA[0][0], oT=oType(o);
			//bool=Str2dom.arith(bool);
			for(var i=0;i<n;i++){
				var si=Uset[i];
				if(An>2 && Set.opr2('搜',set,si)<0){
					rA.push(Mtrx.build.A(n,0));
				}else{
					rA.push([]);
					for(var j=0;j<n;j++){
						var sj=Uset[j];
						
						consolelog(o,oT,si,sj);

						ra=eval(oT).is.b2[o](si,sj);


						rA[i].push(ra?1:0)
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
			for(var i=0;i<n;i++){
				if(!rA[i][i]){
					isR=false;break;
				}
			}
			if(!isR){
				isA=false;
			}

			for(var i=0;i<n;i++){
				if(rA[i][i]){
					isR2=false;break;
				}
			}

			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
					if(i!=j && rA[i][j]!=rA[j][i]){
						isS=false;break;
					}
				}
				if(!isS){break}
			}
			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
					if(i!=j && (rA[i][j]||rA[j][i]) && rA[i][j]==rA[j][i]){
						isS2=false;break;
					}
				}
				if(!isS2){break}
			}
			if(isA){
				for(var i=0;i<n;i++){
					for(var j=0;j<n;j++){
						if(i!=j && (rA[i][j]||rA[j][i])){
							isA=false;break;
						}
					}
					if(!isA){break}
				}
			}

			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
					if(i!=j && rA[i][j]){
						for(var k=0;k<n;k++){
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
				for(var i=0;i<n;i++){
					for(var j=0;j<n;j++){
						if(i!=j && rA[i][j]){
							for(var k=0;k<n;k++){
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
		rs+=kdetail('关系R','R='+Rlt+kbr+'关系矩阵M='+Mtrx.toStr(rA)),
			kdetail('关系类型',ztable([ZLR('自反 反自反 对称 反对称 传递'),[Y[+isR],Y[+isR2],Y[+isS],Y[+isS2],Y[+isT]]])+kbr+	//,Y[+isA],Y[+isC]
				ztable([['相容 ⇔ 自反∧对称',Y[+isE]],
				['等价 ⇔ 自反∧对称∧传递 ⇔ 相容∧传递 ⇔ 自反∧循环',Y[+isE]],
				['拟序 ⇔ 反自反∧反对称∧传递',Y[+isQ]],
				['偏序 ⇔ 自反∧反对称∧传递',Y[+isP]],
				['全序(线序,简单序,链) ⇔ 完全∧偏序',Y[+(isP && isA)]],
				['良序 ⇔ 线序∧非空子集都有最小元',Y[+(isP && isA)]]])),

			kdetail('逆关系 R^{-1}'+(isS?'=R':''),(isS?'':'R^{-1}='+Mtrx2Rlt(rAt)+kbr+'关系矩阵：'+Mtrx.toStr(rAt)));

		if(!isR){
			var rR=Mtrx.opr1('拷',rA);
			for(var i=0;i<n;i++){
				rR[i][i]=1;
			}
		}
		rs+=kdetail('自反闭包 r(R)'+(isR?'=R':''),(isR?'':'r(R)='+Mtrx2Rlt(rR)+kbr+'关系矩阵：'+Mtrx.toStr(rR)));

		if(!isS){
			var sR=Mtrx.opr1('拷',rA);
			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
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
			for(var i=0;i<n;i++){
				for(var j=0;j<n;j++){
					if(i!=j && tR[i][j]){
						for(var k=0;k<n;k++){
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
			for(var i=0;i<n;i++){
				if(EAt.length>=n){break}
				if(EAt.indexOf(i)<0){
					EA.push([i]);
					EAt.push(i);
					for(var j=i+1;j<n;j++){
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
			for(var i=0;i<n;i++){//关系线
				for(var j=0;j<n;j++){
					if(B[i][j]){
						reA.push([nindex(i),nindex(j)])
					}
				}
			}
			for(var i=0;i<ni.length;i++){//节点文本
				var Arr=[],nii=ni[i],niL=nii.length;
				for(var j=0;j<niL;j++){
					Arr.push(Set.toStr(Uset[nii[j]]));
				}
				nA.push(Arr);
				
			}
			
//console.log(nA, reA);

			//plot.plot(dmid,'<div id='+dmid+'>'+plot.shape(dmid+'_svg','svg',plot.hasse(dmid,nA,reA))+dc);
			rS+=DCtv('plot',plot.hasse(dmid,nA,reA));
		}

		rS.push(rs);

	}
	OH(KxA(rS));

};


/*
	(p∨(q∧r))→(p∧q∧r)
	((p∧q)∨¬r)→p
	(p∨q)∧(¬q∨r)∧(¬p∨q)∧¬r
	
	(a∨b)⊕(¬a∧b)
	(a∨b)↔(¬a∧b)

p→（p∧(q→p)）

 (p→¬q)↔r

(p∧q)∨r

(p→q)∧ (q→r)

(p∧q)→q

(p↔q)→r

¬(r→p)∧p∧q

((pVq)→r)→p
*/