/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


$(function(){
	var toolnames=ZLR('solve graphic show wiki teaching academic technology science culture');

	$('#splash').html(DCtv('rem3',gM('zzllrr Mather'))).after(
'<div id=zMather hidden>'+
	'<div id=nav>'+
		DCtv('opac" id="navhead',
			Arrf(function(i){
				return SCtv('subhead'+(i=='home'?' seled':'')+'" id="'+i+'" title="'+gM(i),itv('',
					{'home':'home',

					'about':'info_outline',


				//	'book':'local_library',
				//	'wiki':'public'

					}[i]))
			},ZLR('home about')).join('')
		)+
		'<div id=navbody>'+
			DCtv('pd2" id="toolnav',
				Arrf(function(i){
					return XML.wrapE('label','<input type=radio name=tool value='+i+' id='+i+' hidden /><span>'+gM(i)+sc)
				},toolnames).join('')
			)+
			detail(
				'<select id=searchBy>'+optgrp(gM('Search'), Options(ZLR('Subject Concept QuestionType'),1).join(''))+'</select>'+
				'<input type=search id=search list=searchlist />'+
				'<datalist id=searchlist></datalist>',
				'<div id=searchResults></div>',
				'','id=searchTool hidden'
			)+
			detail(
				'<select id=subject0>'+optgrp(gM('Subject Classification GB'),'<option value=0>'+gM('Level-1 Discipline')+'</option>'+
					Arrf(function(i){return '<option value='+i+'>'+i+' '+gM(i)+'</option>'},ZLR(subject0)).join(''))+'</select>'+
				'<select id=subject1 hidden></select>'+
				'<select id=subject2 hidden></select>',
				DCtv('ground0',jdetail(ZLR(subject0)))+DCtv('ground1'),
				'','id=subject'
			)+
			Arrf(function(i){
				return DCtv('ground" id="'+i+'Ground',DCtv('ground0')+DCtv('ground1')+DCtv('ground2')+DCtv('tasks'))
			},toolnames).join('')+
		dc+
	dc+
	'<div id=iContent class=pd2>'+
		'<div id=iText>'+
			'<div id=iTextMain>'+
				DCtv('pd10" hidden contentEditable=true id="input0Preview')+
				'<textarea id=input0>'+(L.snippet1||'')+'</textarea>'+
				DCtv('opac" id="input0Tool',
					itvc('" id=iClear hotkey="Ctrl + E')+

					itv('" id=send2textBox tip="copy2input','arrow_upward')+

					//itv('" id=navHide tip="Collapse','keyboard_arrow_up')+

					'<select id=input0Type>'+optgrp(gM('Snippet Editor')+':',
					OptGrps(jSon('[{"'+
						gM('Math Formula')+
						'":"LaTeX Ascii_Math Unicode_Math Content_MathML Presentation_MathML"},{"'+
						gM('Webpage Editor')+
						'":"Markdown HTML CSS"},{"'+
						gM('Graphics')+
						'":"Canvas SVG Echarts Zdog 2D 3D"},{"'+
						gM('Show')+
						'":"Slide VR AR"},{"'+
				
						gM('Calculator')+' | '+gM('Script')+
						'":"JavaScript"},{"'+

						gM('Translator')+
						'":"I18N"},{"'+

						gM('Data')+' | '+gM('Text')+
						'":"TXT TSV CSV XML YAML JSON"}]')
					)
					)+'</select>'+

					
					itvc('rotate180" id="tClear')+

					'<div id=inputTools>'+
						strbtn+'." id=lineMerge />'+
						strbtn+':" id=lineSplit />'+
						strbtn+'⋮" id=Condon class=tool hidden />'+

						itv('tool" tip=Shift id="Shift','keyboard_capslock')+
						
						SCtv('iTextLaTeXon',
							
							strbtn+'α" id=sbson class=tool />'+
							strbtn+'ƒ" id=funcson class=tool />'+
							strbtn+'∑" id=strucon class=tool />'
			
						)+
					dc+
					
					'<div id=iTextLaTeXBox class=TextLaTeXBox>'+
						DCtv('iTextLaTeX" hidden id="isbs')+
						DCtv('iTextLaTeX" hidden id="ifuncs')+
						DCtv('iTextLaTeX" hidden id="istruc')+
					dc+

					itv('tool seled" tip=Preview id="preview','switch_camera')+
					
					
					
					itv('" id=UploadSnippetFile tip="Import File','file_upload')+
					itv('" id=DownloadSnippetFile tip="Download Snippet Text File','file_download')+

					itv('Del" id=snippetDel tip="Delete Snippet','clear')+
					'<input type="file" id=inputSnippetFile hidden />'+



					'<div id=snippets>'+
						Arrf(function(i){return snippet.Str(L['snippetName'+i]||gM('Snippet'),
							L['snippetType'+i]||'LA',i==1)}, 
							seqA(1,+L.snippets||1)).join('')+dc
						
				)+

				

				'<div id=TextLaTeXBox class=TextLaTeXBox>'+
					DCtv('TextLaTeX" hidden id="sbs')+
					DCtv('TextLaTeX" hidden id="funcs')+
					DCtv('TextLaTeX" hidden id="struc')+
				dc+
				'<div id=input0Tip>'+dc+
				DCtv('clear')+

			dc+


			'<div hidden id=Cond>'+
				'<div id=input1Preview>'+dc+
				'<textarea id=input1></textarea>'+
				DCtv('opac" id="input1Tool',
					'<div>'+itvc('hidden" id="cClear')+dc
				)+
				'<div id=input1Tip>'+dc+
				DCtv('clear')+
			dc+

			'<div id=iTextPreview>'+
				'<span id=previewTool hidden>'+
					itvc('rotate90" id="previewOff')+

					/*
					itv('" id=displayOverCanvas tip="copy2Canvas','exit_to_app')+
	*/

					'<select id=output0Type>'+optgrp(gM('Output Format')+':', Options(ZLR('HTML Ascii_Math Unicode_Math Presentation_MathML')))+'</select>'+
					itv('" id=downloadPreview tip="Download HTML File','file_download')+
				sc+

			dc+


			DCtv('pd2" id="iTextOpt',
				itvc('oClear rotate270" id="oHClear')+
				itv('" id=iTextFold tip="Snippet Editor','description')+
				itv('" id=zMatherHide tip="Collapse','keyboard_arrow_up')+

				itv('" id=go tip="Run" hotkey="Ctrl + Enter','play_circle_outline')+
				itv('" id=launch tip="Launch','launch')


			)+


		dc+

	dc+
dc);

	$('#zMatherHide').on('click',function(){
		$('#zMatherOn').click();
	});
	sbsTbl();//

	$('#searchBy').on('change',function(){
		$('#search').change();
	});
	
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
		}else{
			$('#menu > .toggle').click();
			$('#navbody').hide();
			OH('<iframe src="'+id+'.html" width="99%" height="800px" class="resize bd0"></iframe>');
			
		}

		$('#iContent').toggle(id=='home');

	});
	

	$('#menu').nextAll().hide();

	$('#input0Tool input,#preview').not('.Clear').attr('tip',function(){return this.id});

	$('[tip]').attr('title',function(){return gM($(this).attr('tip'))});
	
	$('#search').attr('placeholder',gM('search')).on('change keyup',function(){
		var by=$('#searchBy').val(), v=$(this).val().trim(), sR=$('#searchResults'), rA=[], u={}, lA=[], hA=[];
		if(by=='Subject'){
			ZLR(subject0).forEach(function(x){
				var x1=gM(x), x2=gM(x,'',lang.en), xc=subjects[x];;
				if(!v || v && (x1+x2).indexOf(v)>-1){
					hA.push(SCtv('sechResult" data-i="'+x,x1));
					
					if(xc){
						xc.forEach(function(y){
							if(!/99/.test(y)){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
							}
						});
						
					}else{
						lA.push('<option value="'+x1+'"></option>');
					}
				}else if(v && xc){
					xc.forEach(function(y){
						if(!/99/.test(y)){
							var y1=gM(y), y2=gM(y,'',lang.en);
							if((y1+y2).indexOf(v)>-1){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
								hA.push(SCtv('sechResult" data-i="'+x+'.'+y,x1));
							}
						}
					});
					
				}
				
			});

		}
		if(by=='Concept'){
			ZLR(concept0).forEach(function(x){
				var x1=gM(x), x2=gM(x,'',lang.en), xc=concepts[x];;
				if(!v || v && (x1+x2).indexOf(v)>-1){
					hA.push(SCtv('sechResult" data-i="'+x,x1));
					
					if(xc){
						xc.forEach(function(y){
							if(!/99/.test(y)){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
							}
						});
						
					}else{
						lA.push('<option value="'+x1+'"></option>');
					}
				}else if(v && xc){
					xc.forEach(function(y){
						if(!/99/.test(y)){
							var y1=gM(y), y2=gM(y,'',lang.en);
							if((y1+y2).indexOf(v)>-1){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
								hA.push(SCtv('sechResult" data-i="'+x+'.'+y,x1));
							}
						}
					});
					
				}
				
			});
		}
		if(by=='QuestionType'){
			ZLR(question0).forEach(function(x){
				var x1=gM(x), x2=gM(x,'',lang.en), xc=questions[x];;
				if(!v || v && (x1+x2).indexOf(v)>-1){
					hA.push(SCtv('sechResult" data-i="'+x,x1));
					
					if(xc){
						xc.forEach(function(y){
							if(!/99/.test(y)){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
							}
						});
						
					}else{
						lA.push('<option value="'+x1+'"></option>');
					}
				}else if(v && xc){
					xc.forEach(function(y){
						if(!/99/.test(y)){
							var y1=gM(y), y2=gM(y,'',lang.en);
							if((y1+y2).indexOf(v)>-1){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
								hA.push(SCtv('sechResult" data-i="'+x+'.'+y,x1));
							}
						}
					});
					
				}
				
			});
		}


		$('#searchlist').html(lA.join(''));
		sR.html(hA.join(''));
		if(hA.length==1){
			sR.find('.sechResult').click();
		}
	});


	var sbj0=$('#subject0'), sbj1=$('#subject1'), sbj2=$('#subject2');
	sbj0.on('change', function(){//改变sbj1
		var me=$(this), v=me.val();
		$('#input0Tip, #input1Tip').add($('#'+$('[name=tool]:checked').attr('id')+'Ground .tasks')).empty();
		if(v=='0'){
			sbj1.empty().hide();
		}else{
			var t=subjects[v]?Arrf(function(i){return '<option value='+i+'>'+i+' '+gM(i)+'</option>'},subjects[v]).join(''):'';
			if(t){
				sbj1.html(optgrp(gM('Level-2 Discipline'),t)).show();
			}else{
				sbj1.empty().hide();
			}
		}
		$('#subject .ground0 .level[data-i='+v+']').addClass('seled').siblings().removeClass('seled');
		$('#subject .ground1').html(subjects[v]?jdetail(subjects[v]):'');
		$('#subject .ground1 .level').eq(0).addClass('seled');
		$('#solveGround').children().empty();
	});


	$('#input0Tip').attr('title',gM('Help')+' | '+gM('Example')).on('click','button',function(){
		var t=$(this).attr('data-tool'),i0=$('#input0'),tl=$(this).parents('.inputTip').attr('data-tool');
		if(tl=='Matrix' && t=='line Merge'){
			i0.val(function(i,x){return '['+Arrf(function(s){
					var isfsi=/=\s*[^0]/.test(s), a=s, b=isfsi?exp2coe(s,'='):'';
					if(/x\d/i.test(s)){
						var deg=+max(s.match(/x\d/ig).join(',').replace(/x/ig,'').split(','));
						a=Arrf(function(x){return exp2coe(s,'x'+deg)}, seqA(1,deg)).join(' ')
					}else if(/.+[xyz].+[xyz]/i.test(s)){
						a=[exp2coe(s,'x','yz'),exp2coe(s,'y','xz'),exp2coe(s,'z','xy')].join(' ')
					}else{
						a=s
					}
					return (a+' '+b).trim()
				
				},x.replace(/\t/g,' ').trim().split('\n')).join(';')+']'});
		}
		
		
	})
	
	
	$('.ground1').on('change keyup mouseup','.editorText', function(){
		L[$(this).parents('.ground1').prev().children('.level.seled').attr('data-i').toLowerCase()]=$(this).val()

	}).on('click','.editorText + span > .Clear', function(){
		
		$(this).parent().prev().val('')
	});

	$('#iClear').on('click',function(){
		if($('#input0').val()==''){
			$('#previewOff').click();
		}else{
			$('#input0').val('');
			$('#input0Preview').empty().removeAttr('style');
		}
	});
	$('#iClear2').on('click',function(){
		$('#input2').val('');
	});
	$('#cClear').on('click',function(){
		$('#input1').val('');
	});
	$('#tClear').on('click',function(){
		var t=$('.iTextLaTeXon .seled');
		if(t.length){
			t.click();
		}else if($('#input0Tip > .inputTip').length>1){
			$('#input0Tip > .inputTip').last().prevAll().remove()
		}else{
			$('#input0Tip').empty();
		}
	});

	$('#iTextFold').on('click',function(){
		var me=$(this), sel=me.is('.seled');
		if(sel){
			$('#iTextMain').show();

			if($('#preview').is('.seled')){
				$('#previewTool').show();
			}
		}else{
			$('#previewOff').click();
			$('#iTextPreview').prevAll().hide();
			
		}
		me.toggleClass('seled');
	});




	$('#displayOverCanvas').on('click',function(){
		OverCanvas($('#input0').val());
		//toolTip(gM('copiedtip'));
	});



//输出编辑
	$('#previewOff').on('click',function(){
		$('#preview.seled').removeClass('seled');//.text('keyboard_arrow_right');
		$('#input0Preview, #previewTool').hide();
	});

	/*
		// no browser support resize event of nodes but window 
	$('#input0Preview').resize(
		preDisplay
	);

	*/

	$('body').on('keydown',function(e){
		var k=e.keyCode, shft=e.shiftKey || $('#Shift').is('.seled'), ctrl=e.ctrlKey, alt=e.altKey, act=document.activeElement, 
		node=act.tagName.toLowerCase(), me=$(act),id=me.attr('id')||'';
//console.log(k,node);

		if(node=='textarea'){

			var iv=me.val(), sS=act.selectionStart, sE=act.selectionEnd,
			A=[iv.substr(0,sS),iv.substring(sS,sE),iv.substr(sE)],t=sS, iT=$('#input0Type').val();
			if(k==9 && !alt){
			
				consolelog(A);
				if(shft){
					A[1]=A[1].replace(/^\t/,'').replace(/\n\t/g,'\n');
				}else{
					A[1]='\t'+A[1].replace(/\n/g,'\n\t');
					t++;
				}
				me.val(A.join(''));
				act.selectionStart=t;
				act.selectionEnd=t;
				return false
			}
			
			consolelog(k);
			if(ctrl && iT=='Markdown' && id=='input0' && [73,66,85,81,75].indexOf(k)>-1){
				consolelog(sS,iv,sE);
				if(k==73){
					if(sS==sE){
						A[1]='**';
					}else{
						A[1]='*'+A[1]+'*'
					}
					t++
				}
				if(k==66){
					if(sS==sE){
						A[1]='** **'
					}else{
						A[1]='**'+A[1]+'**'
					}
					t+=2
				}
				if(k==85){
					if(sS==sE){
						A[1]='__ __'
					}else{
						A[1]='__'+A[1]+'__'
					}
					t+=2;
					
				}
				if(k==81){
					if(sS==sE){
						A[1]='\n> '
					}else{
						A[1]='\n> '+A[1]
					}
					t+=3
				}
				
				if(k==75){
					if(sS==sE){
						A[1]='[](http:// '+gM('Title')+')';
						t++;
					}else{
						A[1]='['+A[1]+'](http:// '+gM('Title')+')'
						t+=10+A[1].length;
					}
				}
				
				me.val(A.join(''));
				act.selectionStart=t;
				act.selectionEnd=t;
				
				if(k==85){
					return false
				}

			}
			
			
		}

		if(/^(input|textarea)$/.test(node)){
			if(ctrl){
				if(k==13){
					if(/^input[01]/.test(id)){
						$('#go').click();
					}
					if(id=='TextBox'){
						$('#TextBoxGo').click();
					}
				}
				if(k==83){//s

					return false
				}
			}
			if(shft){
				if(k==13){
					$('#preview').click();
				}	
			}
		}

		if(alt){
			if(k==50 || k==98){
				var t=getSelection().toString();
				if(t){saveText(t, gM('zzllrr Mather')+'_'+Time.now()+'.txt')}
			}
		}




	}).on('mouseover', '.task',function(e){
		var me=$(this);
		toolTip(me.attr('data-tip')+' | '+gM('tasktip'));


	}).on('click','.Mele', function(){
		var t=$(this).text(),o=Meleo[t]||t;
		if(!/HTML|Slide/i.test(t)){
			textareaAdd(XML.wrapE(t),'#showGround .editorText',1,t.length+3);
		}
		if($('#input0Type option[value="'+o+'"]').length && $('#input0Type').val()!=o){
			var s=$('.snippet[data-type="'+t+'"]');
			if(s.length){
				s.eq(0).find('.snippetName').click();
			}else if($('#input0').val()==''){
				$('#input0Type').val(o).change();
			}
			
			//$('#navHide.seled').click();
			$('#iTextFold.seled').click();
		}

	}).on('click','[name=tool]',function(){
		var x=this.id;
		L.tool=x;
		losh.tool=x;
		toolSwitch(x);

	}).on('click','#subject .ground0 .level',function(){
		var me=$(this).toggleClass('seled'),i=me.attr('data-i');
		me.siblings().removeClass('seled');
		if(me.is('.seled')){
			$('#subject0').val(i).change();
		}

	}).on('click','#subject .ground1 .level',function(){
		var me=$(this).toggleClass('seled'),i=me.attr('data-i');
		me.siblings().removeClass('seled');
		if(me.is('.seled')){
			$('#subject1').val(i).change();
		}else{
			//$('#'+$('[name=tool]:checked').val()+'Ground').children().empty()
		}


	}).on('click','.ground .level,.task',function(e){

		var me=$(this),mei=me.attr('data-i'),eg=me.attr('data-eg'),tip=me.attr('data-tip'),mtool=me.attr('data-tool'), shft=e.shiftKey || $('#Shift').is('.seled'),
		pa=me.parent(),p=pa.parents('.ground'),
		tool=p.attr('id').split('Ground')[0],tt=tooltip[tool]||{},
		issolve=tool=='solve', isshow=tool=='show', iswiki=tool=='wiki',
		iswikilike=/wiki|teaching|academic|technology|science|culture/.test(tool),
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
			}
			
		}else{
			me.addClass('seled');
			if(!istask){
				me.siblings().removeClass('seled');
			}
	
			var fm=furi(me), muri=fm[0].join('/'),lvl=fm[0].length,v=issolve?$('#subject2').val():'';


			var ttip=tooltip[v],tipOpr=tooltip[v+' Operation'],str='',str2='',
				ev=eval(tool), evs=eval(tool+'s'), eT=eval(tool+'Then'), 
				width=Math.max($('#input0').width(),$('#input0Tool').width())||200,
				height=Math.max($('#input0').height(),$('#input0Tool').height())||200,
				strc='class=inputTip style="max-height:'+height+'px" data-tool="';
			
			if(ttip && $('#input0Tip .inputTip[data-tool="'+v+'"]').length<1){
				$('#input0Tip').append(detail(gM(v), ttip, '', strc+v+'"'));

				if(tipOpr){
					$('#input0Tip').append(detail(gM(v+' Operation'), tipOpr, '', strc+v+'"'));
				}
			}

			for(var i=0;i<lvl;i++){
				
				var u0=fm[0].slice(0,i+1).join('/'),m0=fm[0][i],tip0=tt[u0],tip1=tt[u0+' Condition'];
//consolelog(u0, tip0);
				if(tip0 && $('#input0Tip .inputTip[data-uri="'+u0+'"][data-tool="'+m0+'"]').length<1){
					$('#input0Tip').append(detail(gM(m0), tip0, '', strc+m0+'" data-uri="'+u0+'"'));

					if(tip1){
						$('#input1Tip').append(detail(gM(m0+' Condition'), tip1, '', strc+m0+'" data-uri="'+u0+'"'))
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
			if(issolve){
				evs=solves[$('#subject1').val()||$('#subject0').val()];
				if(evs){
					evs=evs.sbj2[v][fm[1][0]];
				}
			}

//console.log('uri = ',muri,'tool = ',tool);

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

						OH('<iframe src="'+tool+'.html?'+('q='+muri)+
							'" width="99%" height="400px" class="resize bd0"></iframe>');
						return;
					}
		
					OH(ev[A] || ev[fm[0].slice(-2).join(' ')]  || ev[fm[0].slice(-2).reverse().join(' ')] || ev[fm[0].join(' ')] || ev[muri] )
				}
			}

			var B=eT[muri];
			if(B){B()}
			
			if(iswikilike && istask){
				if($('iframe[src="'+tool+'.html?q='+muri).length<1){
					$('#oHTML').append('<iframe src="'+tool+'.html?'+('q='+muri)+
					'" width="99%" height="400px" class="resize bd0"></iframe>');
				}

				return;
			}

			if(shft){//(v.trim()?v.trim()+'\n':'')+
				$('#input0').val(eg||$('#input0Tip .eg').not('.eg2').attr('data-eg')||'');
			}
			
			if(issolve && istask && eg && $('#input0Tip .inputTip[data-uri="'+muri+'"]').length<1){
				var hasC=me.children('.katex').length;
				$('#input0Tip').append(detail(hasC?me.html():tip, 
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



	

	}).on('click','.tool', function(e){
		var me=$(this).toggleClass('seled'),id=me.attr('id'),se=me.is('.seled');


		if(/on/.test(id)){
			var Id=id.replace(/on$/,'');
			$('#i'+Id+',#'+Id).toggle(se);
			

			if(id=='Condon'){
				$('#input1').val('');
				$('#cClear').toggle();

			}else if(/sbs|funcs|struc/.test(id)){

				me.siblings('.seled.tool').removeClass('seled').each(function(){
					var tid=this.id.replace(/on$/,'');
					$('#i'+tid+',#'+tid).hide();
				});
				$('#swap').remove();
				if(se){
					if(!me.next().is('#swap')){
						me.after(itv('" tip=Swap id="swap','swap_vert'));
					}
			
				}

			}

		}

		if(id=='preview'){
			var v=$('#input0').val().trim();
			if(se){// && v
				preDisplay();
			}else{
				$('#previewOff').click()
				
			}

			$('.inputTip').removeAttr('open');
		}


	}).on('click','.oClear',function(){
		
	//	bodyFocus();
		
		if($(this).is('#oHClear')){
			if($('#oHTML').html()==''){
				if($('#capsimg+div').next().length){
					$('#noteEraser').click();
				}else{
					$('#clear').click();
				}
			}else{
				$('#oHTML').empty();
			}
			

		}else{
			
			$('#oHTML').empty();
		}

		$('#zMatherOn:contains(down)').click();
		
		/*
		if(graphic){
			graphic.close()
		}
	

		*/
	})





	
	$('#downloadPreview').on('click',function(e){
		var v1=$('#input0Preview').html(), v=$('#input0').val(),
			p=$('#input0Type').val(),tp=p.toLowerCase(), t,hd='',
			nm=gM('zzllrr Mather')+'_'+p+Time.now(), ext='html';
		if(p=='LaTeX'){
			t=csslib.katex+v1

		}else if(p=='Markdown'){
			t=csslib.katex+csslib.markdown+v1

		}else if(/Echarts/.test(p)){
			t=jslib[tp]+jslib[tp+'_eval'](v)

		}else if(/Zdog|Canvas/.test(p)){
			t=(jslib[tp]||'')+jslib['canvas_eval'](v)

		}else if(/Slide/.test(p)){
			hd=csslib['katex']+csslib['webslides']+jslib[tp];
			t='<main role="main"><article id="webslides"'+
				($('#slideSwapV').prop('checked')?' class="vertical"':'')+'>'+
				v1+'</article></main>';
			var sh=$('#slidehead').val(),sf=$('#slidefoot').val();
			if(sh){
				t='<header role="banner">'+sh+
			  	'</header>'+t
			}
			if(sf){
				t+='<footer role="contentinfo">'+sf+
				'</footer>'
			}

		}else if(/VR/.test(p)){
			t=jslib['aframe']+v1;
			$('.VRTool .jslib:checked').each(function(){
				var x=$(this).attr('data-lib');
				hd+=referf(unpkg(x,(VRlibjs[x]||x)+'.min'))
			});
			if(hd){
				hd=XML.wrapE('head',hd)
			}

		}else if(/AR/.test(p)){
			t=jslib['aframe']+jslib['aframe-ar']+v1;
			$('.ARTool .jslib:checked').each(function(){
				var x=$(this).attr('data-lib');
				hd+=referf(unpkg(x,(ARlibjs[x]||x)+'.min'))
			});
			if(hd){
				hd=XML.wrapE('head',hd)
			}
		}else if(p=='SVG'){
			//t=v1;
			t=svgAs('#input0Preview svg');
			ext='svg'
			
		}else if(p=='JavaScript'){
			t=v1;

		}else {
			t=v1
		}

		if(ext=='html'){
			t='<html>'+(hd||'')+'<body>'+t+'</body><html>'

		}
		saveText(t,nm+'.'+ext);
		
	});


	$('#lineSplit').on('click',function(){
		var t=$('#input0Type').val();
		if(t=='LaTeX'){
			$('#input0').val(function(i,v){return v.replace(/(\\\\)*\n/g,'\\\\\n')});
			if($('#preview.seled').length){
				preDisplay()
			}
		}else if(t=='graphic'){
			$('#input0').val(function(i,v){return v.replace(/&&/g,'\n')});
		}else{
			
		}
			
	});
	$('#lineMerge').on('click',function(){
		var t=$('#input0Type').val();
		if(t=='LaTeX'){
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'').replace(/\\\\/g,'')});
			if($('#preview.seled').length){
				preDisplay()
			}
		}else if(t=='graphic'){
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'&&')});
		}else{
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'')});
		}
		
	});

	$('#DownloadSnippetFile').on('click',function(e){
		var k=e.keyCode, shft=e.shiftKey||$('#Shift').is('.seled'), ctrl=e.ctrlKey,
			v0=$('#input0').val(),v1=$('#input0Preview').html(),
			tp0=$('#input0Type').val().toLowerCase(),
			tp=$('#output0Type').val().toLowerCase(),
			ismd=/markdown/.test(tp0), isjs=/js/.test(tp0), ishtml=/html/.test(tp0), issvg=/svg/.test(tp0),isxml=/xml/.test(tp0), ismathml=/mathml/.test(tp0);

		if(ishtml){
			v0=csslib.katex+v0;
		}
		if(ismathml){
			//v0='<math xmlns="'+xmlns+'" xmlns:xlink="'+xmlnsxlink'">'+v0+'</math>';
			v0='<math xmlns="'+xmml+'">'+v0+'</math>';
		}
		if(isxml){
			v0=XML.head+v0;
		}

		if(issvg){
			v0=svgAs('#input0Preview svg');
		}
		saveText(v0,
			gM('zzllrr Mather')+Time.now()+'.'+ZLR('md js html svg xml mathml txt')[[ismd,isjs,ishtml,issvg,isxml,ismathml,true].indexOf(true)]
		)
	})


	$('#input0').on('click',function(){//.on('mouseover', function(){this.focus()})
		$('#input1').removeClass('seled');
		$(this).addClass('seled');

		
	}).on('change keyup mouseover',function(){//mouseout 
		var v=$(this).val(),p=$('#input0Type').val(), vt=v.trim();
		var s=$('.snippet.seled'), i=s.index()+1, l0=(L['snippet'+i]||'').trim();
		L['snippet'+i]=v;
		
		if(l0!=vt && $('#preview').is('.seled') && vt){

			preDisplay();
		}
	});
	
	$('#input1').on('click',function(){
		$('#input0').removeClass('seled');
		$(this).addClass('seled');
	});

	
	
	$('#input0Type').on('change', function(){
		var v=$(this).val()||'TXT', it=$('#input0Tip > [data-tool="'+v+'"]'), tv=tooltip[v];
		if(v=='Echarts'){
			tv=tooltip.graphic['Statistics/Echarts']
		}
		if(v=='I18N'){
			tv=v;
		}

		var ii=ZLR(Mele).indexOf(v),i=$('.snippet.seled').index()+1, p=ii>-1?ZLR(Meles)[ii]:v;
		//console.log(v,p);
		L['snippetType'+i]=p;

		$('.snippet.seled').attr('data-type',p);
		var i=ZLR('LaTeX Ascii_Math Unicode_Math Presentation_MathML Content_MathML').indexOf(v);
		$('#output0Type').html(optgrp(gM('Output Format')+':', Options(Set.opr1('取',ZLR('HTML Ascii_Math Unicode_Math LaTeX Presentation_MathML Content_MathML'),
			i<0?[[0]]:[[0,2,4],[0,2,3,4,5], [0,1,3,4,5], [0,2,3,5], [0,2,3,4]][i])
		)));
		$('.inputTypeTip').remove();

		var opti=$(this).find('option[value='+v+']').parent().index(),
			width=Math.max($('#input0').width(),$('#input0Tool').width())||200,
			height=Math.max($('#input0').height(),$('#input0Tool').height())||200,
			strc='class="inputTip inputTypeTip" style="max-height:'+height+'px" data-tool="';

		if(tv && it.length<1){

			if(tv=='I18N'){
				tv='';
				$.each(i18n,function(i,j){
					tv+=sceg2(i)+': '+sceg2(j)+br
				});
			}

			$('#input0Tip').append(detail(v,tv,'',strc+v+'"'));


			$('.inputTip.inputTypeTip').last().prevAll().remove();

		}
		
		if($('#preview.seled').length){
			preDisplay()
		}
	});
	$('#output0Type').on('change', function(){
		if($('#preview.seled').length){
			preDisplay()
		}

	});
	
	$('#send2textBox').on('click',function(){
		var v=$('#input0').val();
		if(v.trim()){
			textareaAdd(v,'#'+L.tool+'Ground .ground1 .editorText')
		}
	});
	
	$('#UploadSnippetFile').on('click',function(){
		$('#inputSnippetFile').click()
	});
	$('#inputSnippetFile').on('change',function(){
		var v=$(this).val();
		if(v){
			var files=this.files, fl=files.length, l=+L.snippets||1;
			for(var i=0;i<fl;i++){
				var f=files[i], s=f.size, ext=f.type.replace(/(text|application)[/]/,''), m=f.name;

//console.log(f,m,s,ext);
				ext=ext.toUpperCase();
				if(ZLR(Mele+' '+Mele2).indexOf(ext)>-1){
					ext=ZLR(Meles)[ZLR(Mele).indexOf(ZLR(Mele2).indexOf(ext)>-1?Meleo[ext]:ext)]
				}
				if(!ext){
					ext='TXT';
				}
/*
					if(!s){s='?KB'}else{
						s=sizeKB(s)
					}
*/
					var reader=new FileReader();
					reader.onload = function(e){
						//var txt = this.result;
						var txt=e.target.result;

						L['snippet'+(l+1)]=txt;
						
						L['snippetName'+(l+1)]=m;

						L['snippetType'+(l+1)]=ext;
						L.snippets=l+1;
						snippet.load(l+1);
					};
					//reader.readAsDataURL(f);
					reader.readAsText(f);

			}
		}
	});

	


	var uo=H_o(sch);//	?tool=&subtool=	

	
	if(!uo.tool){
		uo.tool=L.tool || 'solve'
	}
	
	$('[name=tool][value='+uo.tool+']').click();
	

	$('#input0Type').val(Meleo[L.snippetType1]||L.snippetType1).change();
	
	$('#search').change();
});

var toolSwitch=function(x){
	var G='#'+x+'Ground', hasEditorTxt=/show/.test(x);
	$('.ground:not('+G+')').hide();

	$(G).show();
	$('#subject').toggle(/^solve|course|drill/.test(x));

	
	if(/graphic|show|wiki/.test(x)){
		$('#preview.seled').click();
	}
	
	if(x=='show'){
		$('#iTextFold').not('.seled').click()
	}

	if(/solve|graphic/.test(x)){
		$('#iTextFold.seled').click()
	}

	$('#send2textBox,.snippetSend').toggle(hasEditorTxt);

	if($(G).children().eq(0).html()==''){
		$(G).find('.ground0').html(
			jdetail(eval(x+'s')['index']||'')

		);
	}

};



var preDisplay=function(){
	var iv=$('#input0Type').val(),ov=$('#output0Type').val();
	if(!iv){
		iv='LaTeX';
		$('#input0Type').val(iv);
	}
	var i=iv[0],o=ov[0],v=$('#input0').val().trim(),w=$('#input0Preview');


	if(iv==ov && ov!='HTML'){
		w.add('#previewTool').hide();
		
	}else if(iv=='LaTeX' && o!='H'){
		var x=v;

		if(o=='P' && v){
			katex.render(kx(sub2n(v,1)), w[0], {
			    throwOnError: false,
			    displayMode: true
			});
			x=XML.wrapE('code',XML.encode(w.find('.katex-mathml').html().replace(/math/,'math xmlns="'+xmml+'"')));
			
		}
		w.html(x).add('#previewTool').show();

		
	}else if(o=='H'){
		w.add('#previewTool').show();
		if(v){
			all2html(iv,v,w);

		}else{
			w.empty()
		}
	}
};

function OverCanvas(t){

	var iT=$('#input0Type').val();
	L.drawShapeNow='';
	$('#TextBoxType').val(iT);
	$('#TextBox').val(t);
	$('#TextBoxGo').click();
	$('#Pointer').click();


}


function furi(o){
	var g=o.parents('.ground');
	
	var turi=[],iuri=[];
	g.find('.level.seled').each(function(){
		var t=$(this);
		turi.push(t.attr('data-i'));
		iuri.push(t.index());
	});
	if(o.is('.task') || o.is('.level:not(.seled)')){
		turi.push(o.attr('data-tool')||o.attr('data-i'));
		iuri.push(o.index());
	}
	return [turi,iuri];
}