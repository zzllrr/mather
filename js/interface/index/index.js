/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

var toolSwitch=function(x){
	var G='#'+x+'Ground', hasEditorTxt=/show/.test(x), me=$('#'+x), pa=me.parent();
	$('.ground:not('+G+')').hide();

	$(G).show();

	

	$('#preview.seled').click();

	if(/solve|graphic/.test(x)){
		$('#iTextFold').not('.seled').click()
	}else{
		
		$('#iTextFold.seled').click()
	}
	$('#go').toggle(/solve|graphic|show/.test(x));

	$('#send2textBox,.snippetSend').toggle(hasEditorTxt);

	if($(G).children().eq(0).html()==''){
		$(G).find('.ground0').html(
			jdetail(eval(x+'s')['index']||'')

		);
		pa.siblings().hide();
	}else{
		$(G).children().empty();
		pa.siblings().show();
	}

}, furi=function(o){
	var g=o.parents('.ground');
	
	var turi=[],iuri=[];
	g.find('.level.seled').each(function(){
		var t=$(this);
		turi.push(t.attr('data-i'));
		iuri.push(t.index());
	});
	if(o.is('.task') || o.is('.level:not(.seled)')){
		var op=o.parent();
		if(op.is('details')){
			turi.push(op.attr('data-i'));
			iuri.push(op.index());
		}

		turi.push(o.attr('data-tool')||o.attr('data-i'));
		iuri.push(o.index());
	}
	return [turi,iuri];

}, loadToolPath=function(path, by){
	var pathA=path.split('/'),pl=pathA.length;
	var p=$('#'+by+'Ground .ground0 .level').filter(function(){var di=$(this).attr('data-i');
		return di==pathA[0] || gM(di)==pathA[0]
	});
	p.not('.seled').click();
//consolelog(pathA);
	if(pl>1){
		p=$('#'+by+'Ground .ground1 .level').filter(function(){var di=$(this).attr('data-i');
			return di==pathA[1] || gM(di)==pathA[1]
		});
		p.not('.seled').click();

		if(!p.length){
			p=$('#'+by+'Ground .tasks .task').filter(function(){var di=$(this).attr('data-i') || $(this).attr('data-tool');
				return di==pathA[1] || gM(di)==pathA[1]
			});
			p.not('.seled').click();
			//p.parent('details').attr('open','open');
		}
	}
	if(pl>2){
		p=$('#'+by+'Ground .ground2 .level').filter(function(){var di=$(this).attr('data-i');
			return di==pathA[2] || gM(di)==pathA[2]
		})
		p.not('.seled').click();

		if(!p.length){
			p=$('#'+by+'Ground .tasks .task').filter(function(){var di=$(this).attr('data-i') || $(this).attr('data-tool');
				return di==pathA[2] || gM(di)==pathA[2]
			});
			p.not('.seled').click();
			//p.parent('details').attr('open','open');
			
		}
	}
	if(pl>3){
		p=$('#'+by+'Ground .tasks .task').filter(function(){var di=$(this).attr('data-i') || $(this).attr('data-tool');
			return di==pathA[3] || gM(di)==pathA[3]
		});
		p.not('.seled').click();
		p.parent('details').attr('open','open');
		if(!p.length){
			p=$('#'+by+'Ground .tasks > details').filter(function(){var di=$(this).attr('data-i') || $(this).attr('data-tool');
				return di==pathA[3] || gM(di)==pathA[3]
			});
			p.attr('open','open');
			p=$('#'+by+'Ground .tasks .task').filter(function(){var di=$(this).attr('data-i') || $(this).attr('data-tool');
				return di==pathA[4] || gM(di)==pathA[4]
			});
			p.not('.seled').click();
			//p.parent('details').attr('open','open');
			
		}
	}
};

$(function(){
	var toolnames=ZLR('solve explore graphic show wiki teaching academic science technology culture');

	$('#splash').html(DCtv('rem3',gM('zzllrr Mather')));
	$('#zMather').prepend(
		'<div id=nav>'+
		DCtv('opac" id="navhead',
			DCtv('hidden','<video id="videoCamera"></video>')+
			Arrf(function(i){
				return SCtv('subhead'+(i=='home'?' seled':'')+'" id="'+i+'" title="'+gM(i),itv('',
					{'home':'home',
					'about':'info_outline',
					'scanqr':'video_camera',

					}[i]))
			},ZLR('home about')).join('')
			+SCtv('',
				'<div id=toolHistory hidden></div>'+
				itv('" id="Search','youtube_searched_for')+
				'<input type=search id=search list=searchlist hidden />'+
				'<datalist id=searchlist></datalist>'
				

			)

		)+
		'<div id=navbody>'+
			SCtv('toolnavs" id="toolnav',
				Arrf(function(i){
					return XML.wrapE('label','<input type=radio name=tool value='+i+' id='+i+' hidden /><span>'+gM(i)+sc)
				},toolnames).join('')
			)+

			
			Arrf(function(i){
				return SCtv('ground" id="'+i+'Ground',SCtv('ground0')+SCtv('ground1')+SCtv('ground2')+SCtv('tasks'))
			},toolnames).join('')+
		dc+
	dc);



	$('.subhead').on('click',function(e){
		var me=$(this),sel=me.is('.seled'), id=this.id,shft=e.shiftKey || $('#Shift').is('.seled');
		me.addClass('seled').siblings('.subhead').removeClass('seled');
		if(id=='home'){
			$('#navbody').show();
			if(shft && sel){
				window.open('index.html');
			}else{
				OH('');
			}
		}else if(id=='about'){
			
			$('#menu > .toggle, #iTextFold.seled, #input0Tipon.seled').click();
			$('#navbody').hide();

			OHiframe(id,{},1);
			
		}else if(id=='scanqr'){
			






			var qr = new QrcodeDecoder();

			sTo(function(){
				qr.decodeFromImage($('#videoCamera')[0]).then((res) => {
					//console.log(res);
					if(res){

						var u=res.data;
						if(/^https?:.+/.test(u)){
							window.open(u)
	
						}else if(/\.html/.test(u)){
							window.open(u)
		
						}else if(u.length<100){
							$('#input0').val(function(i,v){return v+brn+u});
						}


					}
	
				});
			},500);

		}

		$('#iContent,#iTextFold,#input0Tipon,#go').toggle(id=='home');//,#iTextOpt i:not(#oHClear,#launch)

	});
	
	$('#Search').on('click',function(){
		var b=$('#search').is(':visible');
		$('.subhead,#panel').toggle(b);
		$('#search,#toolHistory').toggle(!b);
		if(!b){
			$('#search').focus()
		}
		reloadHistory('tool');
	});

	$('#menu').nextAll().hide();


	$('[tip]').attr('title',function(){return gM($(this).attr('tip'))});
	

	$('#search').attr('placeholder',gM('Search Index')).on('keyup',function(){
		var me=$(this), by=$('[name=tool]:checked').val(), v=me.val().trim(), sl=$('#searchlist'),r=[];
		if(!v || /^[a-z\d]{1}$/i.test(v)){
			//sl.empty();
			return
		}
		if(sl.find('option[value="'+v+'"]').length){
			loadToolPath(v,by);
			me.val('')
		}



		var gv=gM(v);

		var getPathFromJSONStr=function(strBefore,str){
			var A=[str],s=strBefore, sim=function(st){
				var x=st;
				while(/,*\[[^\]\[]*\]/.test(x)){
					x=x.replace(/,*\[[^\]\[]*\]/,'')
				}
				while(/,*\{[^\{\}]*\}/.test(x)){
					x=x.replace(/,*\{[^\{\}]*\}/,'')
				}
				while(/"[^"]+":,/.test(x)){
					x=x.replace(/"[^"]+":,/g,'')
				}

				while(/"[^":,]+":"[^":,]+",*/.test(x)){
					x=x.replace(/"[^":,]+":"[^":,]+",*/g,'')
				}

				while(/"[^":,]+",/.test(x)){
					x=x.replace(/"[^":,]+",/g,'')
				}
				return x.replace(/….+/,'')
			};

			do{
				var l0=s.length;
				s=sim(s);
				if(l0==s.length){
					break
				}

			}while(s)

		//	console.log('s=',s);
			var t=s.match(/"[^"]+"/g);

			if(!t){
				//console.log('getPathFromJSONStr得到',s,strBefore,str);
				return [str]
			}

			if(s.match(/"/g).length > t.length*2){

				t=(s+str+'"').match(/"[^"]+"/g);


				if(/^"?[a-z]/.test(t[0])){
					t.shift()
				}
				if(t.length<1){
					return []
				}
				return t.join('/').replace(/"/g,'').split('/')
			}

			if(/^"?[a-z]/.test(t[0])){
				t.shift()
			}
			if(t.length<1){
				return [str]
			}
			return t.join('/').replace(/"/g,'').split('/').concat(str);

		};
		var by0=$('#'+by+'Ground .ground0 .level.seled').attr('data-i')||'', bys=eval(by+'s'), st=jSoff(bys).replace(/"index":\["[^\]]+\],/,''),
		rg=new RegExp('"[^"]*'+v+'[^"]*"','gi'), t;
		
		while ((t = rg.exec(st)) != null)  {

			if(/<[a-z]/.test(t[0])){

				break;
			}
			//console.log(t[0].replace(/"/g,''));
			r.push(getPathFromJSONStr(st.substr(0,t.index),t[0].replace(/"/g,'').replace(/….+/g,'')))
			
		}

		if(r.length<1){
			//rg=new RegExp('"[^"]*'+GM(v)+'[^"]*"','gi'), t;

			st=st.replace(/"[a-z\d ]+"/gi, function(x){return '"'+gM(x.split('"')[1])+'"'});
			while ((t = rg.exec(st)) != null)  {

				if(/<[a-z]/.test(t[0])){
					console.log(t[0]);
					break;
				}
				//console.log(t[0].replace(/"/g,''));
				r.push(getPathFromJSONStr(st.substr(0,t.index),t[0].replace(/"/g,'').replace(/….+/g,'')))
			}

		}

		t='';
		if(r.length){

			var sA=[];
			t=Arrf(function(x){var y=x.join('/'), isnew=sA.indexOf(y)<0;if(isnew){sA.push(y)}
				return isnew?'<option value="'+y+'"></option>':''},r).join('');
		}
		if(t && $('#searchlist').html()!=t){

			$('#searchlist').html(t);
		}


	});




	
	
	$('.ground1').on('change keyup mouseup','.editorText', function(){
		L[$(this).parents('.ground1').prev().children('.level.seled').attr('data-i').toLowerCase()]=$(this).val()

	}).on('click','.editorText + span > .Clear', function(){
		
		$(this).parent().prev().val('')
	});



	/*
		// no browser support resize event of nodes but window 
	$('#input0Preview').resize(
		preDisplay
	);

	*/

	$('body').on('mouseover', '.task',function(e){
		var me=$(this);
		toolTip(me.attr('data-tip')+' | '+gM('tasktip'));


	}).on('click','[name=tool]',function(){
		var x=this.id;
		L.tool=x;
		losh.tool=x;
		toolSwitch(x);

	}).on('click','.ground .level,.task',function(e){

		var me=$(this),mei=me.attr('data-i'),eg=me.attr('data-eg'),tip=me.attr('data-tip'),mtool=me.attr('data-tool'), shft=e.shiftKey || $('#Shift').is('.seled'),
		pa=me.parent(),p=pa.parents('.ground'),
		tool=p.attr('id').split('Ground')[0],tt=tooltip[tool]||{},
		issolve=tool=='solve', isshow=tool=='show', iswiki=tool=='wiki',
		iswikilike=/wiki|teaching|academic|technology|science|culture|explore/.test(tool),
		istask=me.is('.task');

		if(!istask){
			pa.nextAll().add('#oHTML').empty();
		}


		if(me.is('.seled')){
			me.removeClass('seled');
			$('.inputTip[data-uri^="'+muri+'"]').remove();
			
			if(istask){
				var muri=me.attr('data-uri');
				//$('iframe[src="wiki.html?q='+muri).remove();
				$('iframe[src*="q='+muri).remove();
			}else{
				me.siblings().show()
			}
			
		}else{
			me.addClass('seled');
			if(!istask){
				me.siblings().removeClass('seled').hide();
			}
	
			var fm=furi(me), muri=fm[0].join('/'),lvl=fm[0].length, v=issolve?fm[0][0]:'';


			var ttip=tooltip[v],tipOpr=tooltip[v+' Operation'],str='',str2='',
				ev=eval(tool), evs=eval(tool+'s'), eT=eval(tool+'Then'), 
				width=Math.max($('#input0').width(),$('#input0Tool').width())||200,
				height=Math.max($('#input0').height(),$('#input0Tool').height())||200,
				strc='class=inputTip style="max-height:'+height+'px" data-tool="',
				strrem=itv('remove" tip="Remove','remove_circle');
			
			if(ttip && $('#input0Tip .inputTip[data-tool="'+v+'"]').length<1){
				$('#input0Tip').append(detail(gM(v)+strrem, ttip, '', strc+v+'"'));

				if(tipOpr){
					$('#input0Tip').append(detail(gM(v+' Operation')+strrem, tipOpr, '', strc+v+'"'));
				}
			}

			for(var i=0;i<lvl;i++){
				
				var u0=fm[0].slice(0,i+1).join('/'),m0=fm[0][i],tip0=tt[u0],tip1=tt[u0+' Condition'];
//consolelog(u0, tip0);
				if(tip0 && $('#input0Tip .inputTip[data-uri="'+u0+'"][data-tool="'+m0+'"]').length<1){
					$('#input0Tip').append(detail(gM(m0)+strrem, tip0, '', strc+m0+'" data-uri="'+u0+'"'));

					if(tip1){
						$('#input1Tip').append(detail(gM(m0+' Condition')+strrem, tip1, '', strc+m0+'" data-uri="'+u0+'"'))
					}
				}
			}

//consolelog('路径',fm);

			if(isshow){
				if(/Slide|[VA]R/.test(mei) && $('#input0Type').val()!=mei){
					//$('#input0Type').val(mei).change()
				}
				eT(muri);
				return
			}


			var A=evs[fm[0][0]];


			if(A && !istask){
//console.log('A = ',A);
				if(isStr(A)){


				}else{

					if(lvl>1){
						A=A[fm[1][1]];
						if(isObj(A)){
							A=A[fm[0][1]]
						}
//console.log('此时A = ',A);
						if(lvl==3){
							A=A[fm[1][2]];
							if(isObj(A)){
								A=A[fm[0][2]]
							}
						}
						
					}
//console.log('最终A = ',A);
					if(!isStr(A)){
						for(var i=0,l=A.length;i<l;i++){
							if(isStr(A[i])){
//console.log('lvl = ',lvl,A[i]);


								if(issolve){
									str2+=jdetail(A[i],'','task')

								}else if(lvl==3 && iswikilike){
									str2+=jdetail(A[i],'','task',muri+'/'+A[i])

								}else{
									str+=jdetail(A[i])
								}
								
							}else{
								$.each(A[i], function(k,v){
//console.log('A[i]=',k,v);
									if((issolve || iswikilike) && (!isArr(v) || lvl==3)){
										if(isArr(v)){
											str2+=jdetail(A[i],'','task')
										}else{
											str2+=jdetail(k,'','task')
										}
									
									}else if(lvl==3){
										str+=jdetail(k,'','task')
									}else{
										str+=jdetail(k)
									}

								});
							}
						}
//console.log(lvl, str2);
						pa.next().html(str)
					}
				}
//console.log('lvl= ',lvl,str2);
//console.log('A= ',A);

				if(issolve){
					$('#solveGround .tasks').html(str2);

				}else if(str2 && iswikilike && lvl==3){
					$('#'+tool+'Ground .tasks').html(str2);

				}else if(isStr(A) || isArr(A) && A.length<1){

					if(iswikilike){


						OHiframe(tool,{q:muri},1);
						return;
					}
		
					OH(ev[A] || ev[fm[0].slice(-2).join(' ')]  || ev[fm[0].slice(-2).reverse().join(' ')] || ev[fm[0].join(' ')] || ev[muri] )
				}
			}

			var B=eT[muri];
			if(B){B()}
			
			if(iswikilike && istask){
				if($('iframe[src="'+tool+'.html?q='+muri).length<1){
					OHiframe(tool,{q:muri},1);
	
				}

				return;
			}

			if(shft){//(v.trim()?v.trim()+'\n':'')+
				$('#input0').val(eg||$('#input0Tip .eg').not('.eg2').attr('data-eg')||'');
			}
			
			if(issolve && istask && eg && $('#input0Tip .inputTip[data-uri="'+muri+'"]').length<1){
				var hasC=me.children('.katex').length;
				$('#input0Tip').append(detail((hasC?me.html():tip)+strrem, 
					(hasC && mtool!=tip?tip+br:'')+(me.attr('title')?me.attr('title').replace(/\n/g,br)+br:'')+sceg(eg),
					 1, strc+fm[0].slice(-1).join('')+'" data-uri="'+muri+'"'));
			}
			
		}


	}).on('click','.tasknameOff', function(){
		var me=$(this),p=me.parent(),pp=p.parent(),t=p.text();
		if(!p.siblings().length){
			pp.parent().removeAttr('open')
		}
		p.parent().nextAll('.task.seled').filter(function(){return $(this).text()==t}).click();


	}).on('click','#toolHistory > i:eq(0)', function(){
		$('#Search').click();

	
	});

	




	var uo=H_o(sch),t=fn1(uo.t||'');

	
	if(!uo.tool){
		uo.tool=L.tool || 'solve'
	}
	
	$('[name=tool][value='+uo.tool+']').click();
	

	if(uo.uri){
		var us=uo.uri.split('.'), usl=us.length, grd=$('#'+uo.tool+'Ground');
		us[0] && grd.find('.ground0').children().eq(+us[0]).click();
		us[1] && grd.find('.ground1').children().eq(+us[1]).click();
		us[2] && grd.find('.ground2').children().eq(+us[2]).click();
		us[3] && grd.find('.tasks').children().filter(function(){return Arrf(Number,us[3].split('+')).indexOf($(this).index())>-1}).click();
	}


	if(t && uo.tool=='show'){
		$('#showGround .editorText').val(t);
	}

});

