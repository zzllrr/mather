/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var L=localStorage,sch=location.search, HOME=Hs+'sites.google.com/site/zzllrrMather', GMAIL='mailto:zzllrr@gmail.com?subject=zzllrr%20Mather',
qrAli=Hs+'qr.alipay.com/', qrqq=Hs+'i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=122618817&ac=ZZLLRR&n=%E5%B0%8F%E4%B9%90%E7%AC%91%E4%BA%86&f=wallet',
qrwx='wxp://',
qrs={
	'V2aliPay':qrAli+'FKX0950616RXMKGXATWY52',
	'V2qqPay':qrqq.replace('ZZLLRR','A5692108EF5009E2392BE97029C628474D54816FED899014CB4EEA2D271CF645'),
	'V2weixinPay':qrwx+'f2f0KhK_RnSDrozki2q4gmcvsFMS0DQJPVas',
	
	'weixinZQR':H+'weixin.qq.com/r/uXUFCg3EKzNUhxxpnyCd'
},Ox,Oy;
if(H_o().lang !=L.lang){
	i18n=lang[H_o().lang||L.lang||'zh_cn']
}

$(function(){
	$('#zzllrrCanvas,#menu').nextAll().hide();
	$('span[for]').hide();
	
	
	oH=$('#oHTML');

	$('#logo').text(gM('zzllrr Mather')).before('<i id=night class=mi>brightness_3</i>').wrap(href('./index.html',' '));
	$(':button').not('[value]').val(function(){return gM(this.id)});
	$('.Clear').attr('title',gM('Clear'));
	
	$('#night').on('click',function(){
		var me=$(this),isnight=me.text()=='brightness_3';
		me.html(isnight?'wb_sunny':'brightness_3');
		$('body,textarea').css({color:(isnight?'gainsboro':'black')});
		$('body').css({"background-color":(isnight?'black':'white')});
		L.night=isnight;
		dayOrNight();
	});

	if(L.night=='true'){
		$('#night').html('brightness_3').click();
	}
	

	if(!oH.length){
		return
	}
	
//for index.html

	$('.mi[title]').attr('title',function(i,v){return gM(v)});
	
	$('#iTextOpt .tool,#input0Tool .tool').not('#display').attr('title',function(){return gM(this.id+'Tip')});


	$('.mi-span,i18').text(function(i,v){return gM(v)});

	$('[name=tool]').after(function(){return '<span>'+gM(this.id)+sc});
	
	$('#search').attr('placeholder',gM('search'));
	$('#lang').html(Options(ZLR('lang en zh_cn zh_tw'),ZLR('lang English 简体 繁体'))).on('change',function(){
		var l=location.href, lA=l.split('lang='), v=$(this).val();
		L.lang=v;
		location.href=/lang=/.test(l)?lA[0]+'lang='+lA[1].replace(/^[^&]+/,v):l+(/\?/.test(l)?'&':'?')+'lang='+v
	});
	

	var sbj0=$('#subject0'), sbj1=$('#subject1'), sbj2=$('#subject2');
	sbj0.html('<option value=0>'+gM('Subject Classification GB')+'</option>'+
		Arrf(function(i){return '<option value='+i+'>'+i+' '+gM(i)+'</option>'},ZLR(subject0)).join('')
	).on('change', function(){//改变sbj1
		var me=$(this), v=me.val();
		$('#input0Tip, #input1Tip, .tasks').empty();
		if(v=='0'){
			sbj1.empty().hide();
		}else{
			var t=subjects[v]?Arrf(function(i){return '<option value='+i+'>'+i+' '+gM(i)+'</option>'},subjects[v]).join(''):'';
			if(t){
				sbj1.html(t).show();
			}else{
				sbj1.empty().hide();
			}
		}
		$('#subject .ground0 .level[data-i='+v+']').addClass('seled').siblings().removeClass('seled');
		$('#subject .ground1').html(subjects[v]?jdetail(subjects[v]):'');
		$('#subject .ground1 .level').eq(0).addClass('seled');
		$('#solveGround').children().empty();
	});



	
	
	
	$('#subject .ground0').html(jdetail(ZLR(subject0)));
	



	$('#input0Tip').on('click','button',function(){
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
	
	


	$('#iClear').on('click',function(){
		$('#input0').val('');
	});
	$('#iClear2').on('click',function(){
		$('#input2').val('');
	});
	$('#cClear').on('click',function(){
		$('#input1').val('');
	});
	$('#tClear').on('click',function(){
		$('#input0Tip').empty();
	});

	$('#zMatherHide').on('click',function(){
		$('#zMatherOn').click();
	});

	$('#displayOverCanvas').on('click',function(){
		OverCanvas($('#input0').val());
		toolTip(gM('copiedTip'));
	});



//输出编辑
	$('#displayOff').on('click',function(){
		$('#input0Preview, #latexDisplayTool').hide();
	});


	
	$('body').on('keydown',function(e){
		var k=e.keyCode, shft=e.shiftKey, ctrl=e.ctrlKey, alt=e.altKey, act=document.activeElement, node=act.tagName.toLowerCase(), id=$(act).attr('id');
//console.log(k,node);

		if(node=='input' && (k==13 || k==79)){
			if(id=='input0'){
				$('#go').click();
			}
			return

		}
		if(node=='textarea' && ctrl){
			if(k==69){act.value='';return false}
		}

		if(/^(input|textarea)$/.test(node)){
			if(ctrl){
				if(k==13){
					
					$('#go').click();
				}
				if(k==83){

					return false
				}
			}
			if(shft){
				if(k==13){
					preDisplay();
				}	
			}
		}

		if(alt){
			if(k==50 || k==98){
				var t=getSelection().toString();
				if(t){saveText(t, gM('zname')+'_'+Time.now()+'.txt')}
			}
		}

	}).on('click','th:not(:has(.oClear))',function(){
		var me=$(this), i=me.index();
		if(me.is('.katexed')){
		//	me.text(me.find('.katex-mathml annotation').text());
			
			me.removeClass('katexed').parent().parent().next().children().each(function(){
				var td=$(this).children().eq(i),c=td.children('.katex0');
				if(c.length){
					td.find('.katex0').each(function(){
						$(this).text(XML.decode($(this).find('.katex-mathml annotation').text()))
					});
				}else{
					td.text(XML.decode(td.find('.katex-mathml annotation').text()))
				}
			});
			if(me.children('.katex-display').length){

				me.text(XML.decode(me.find('.katex-mathml annotation').text()))
			}else{
				me.find('.katex0').each(function(){
					$(this).text(XML.decode($(this).find('.katex-mathml annotation').text()))
				});
			}
			

			
		}else{
			me.addClass('katexed').parent().parent().next().children().each(function(){
				var td=$(this).children().eq(i),c=td.children();
				if(c.length && c.not('br').length){// if(c.length && !(c.length==1 && c.is('br'))) 此处用于fix浏览器bug： contentEditable 复制粘贴文字时，会被chrome默认在td里面底部添加一个br
					td.find('.katex0').each(function(){
						var t=$(this).text();
						katex.render(kx(t), this, {
						    throwOnError: true,
						    displayMode: $(this).is('div'),
						});
					});
				}else if(!c.length){
					var t=td.text()
					katex.render(kx(t), td[0], {
					    throwOnError: true,
					    displayMode: $(this).is('div'),
					});
				}
			});
			if(me.children().length){
				me.find('.katex0').each(function(){
					var t=$(this).text();
					katex.render(kx(t), this, {
					    throwOnError: true,
					    displayMode: $(this).is('div'),
					});
				});
			}else{
				var t=me.text()
				katex.render(kx(t), this, {
				    throwOnError: true,
				    displayMode: true,
				});
			}
		}
		
	}).on('click','.katexvreplace',function(){
		var me=$(this), r=me.prev().val().trim(), k=me.prevAll('.katexv');
		if(r){
			var vvvvvv=k.val();
			k.val(eval('vvvvvv.replace('+r+')'))
			//k.val(eval('"'+k.val()+'".replace('+r+')'))
		}
	}).on('click','.katexvgo',function(){
		var me=$(this), v=me.prevAll('.katexv').val().trim(), k0=me.parent().prevAll('.katex0');
		if(v){
			katex.render(kx(v), k0[0], {
			    throwOnError: true,
			    displayMode: true
			});
		}
		
	}).on('click','.katexv1',function(){
		var me=$(this), kf=me.prev('.katexf'), a=kf.val().trim().replace(/,/g,'","'), f=kf.attr('data-katexf');
		if(/;/.test(a)){
			a=a.split(';');
			a=a[Random(a.length)-1];
		}
		kf.prev('details').replaceWith(eval('(function'+f+')("'+a+'")'));
		
		
		kf.prev('details').attr('open','').find('.katex0').each(function(){
			var t=$(this).text();
			katex.render(kx(t), this, {
			    throwOnError: true,
			    displayMode: false,
			});
		});
		
	}).on('click','.katexv0',function(){
		var p=$(this).parent().parent(), v=p.find('.katexv');
		v.val(v.attr('data-katex'));
		
	}).on('dblclick','.katexf',function(){
		var me=$(this);
		me.val(me.attr('placeholder'));






	}).on('click', '.sbsTbl td, .sbsTbl .td',function(e){
		sbsTbltd(this,e,'input'+$('#input1.seled').length,$('#input0Type').val());

	}).on('mouseover', '.sbsTbl:not(.sbsiTbl) td, .sbsTbl:not(.sbsiTbl) .td',function(e){
		var me=$(this);
		toolTip($('#'+me.parents('.iTextLaTeX').attr('id')+'on').attr('title'));

	}).on('mouseover', '.task',function(e){
		var me=$(this);
		toolTip(me.attr('data-tip')+' | '+gM('taskTip'));

	}).on('mouseover', 'th:not(:has(.oClear))',function(e){
		var me=$(this);
		toolTip(gM('thTip'));

	}).on('mouseover', '#displayOverCanvas',function(e){

		toolTip(gM('Copy'));

	}).on('click','.eg', function(){
		var me=$(this),t=me.attr('data-eg').replace(/&&/g,'\n'),
		i1=me.parents('.inputTip').parent().attr('id');
		if(!i1){
			toolTip('<input type=text value="'+t+'" />');
			$('#bar input').select();
			document.execCommand('copy', false, null);
			$('#bar input').remove();
			toolTip(gM('copiedTip'));
			return
		}
		
		i1=i1.replace(/\D/g,'');
		var is2=me.is('.eg2'),i=$('#input'+i1),iv=i.val();
		
		if(is2){
			var td=$('#sbsTbl td').filter(function(){return $(this).text()==t}).eq(0);
			if(td.length){
				i.click();
				td.click();
			}else{
				if(/\.\d/.test(t)){
					t=t.replace(/\.(\d+)/,'[$1]')
				}
				
				var sS=i[0].selectionStart, sE=i[0].selectionEnd;
				i.val(iv.substr(0,sS)+t+(sE==iv.length?'':iv.substr(sE)));
				var s2=sS+t.length;
				i.focus();
				i[0].selectionStart=s2;
				i[0].selectionEnd=s2;
			}
		}else{
			i.val((i1 && iv?iv+'\n':'')+t.replace(/^.\d+：/,''));
		}

	}).on('click','[name=tool]',function(){
		var x=this.id;
		L.tool=x;
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
			$('#'+$('[name=tool]:checked').val()+'Ground').children().empty()
		}

	}).on('click','.level_last',function(){
		var me=$(this), i=me.attr('data-i'), seled=me.is('.seled'), p=me.parents('.ground'), x=seled?'':eval(p.attr('id').replace(/Ground/,''))[i]||'';
		me.parent().nextAll().empty();
		if(i!='Voice'){
			OH(x);
		}
		me.toggleClass('seled');
		p.find('.level_last').not(me).removeClass('seled');
		
		
		if(!seled && OHthen[i]){//dom加载后执行函数
			
			OHthen[i]();
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
			$('#'+id.replace(/on$/,'')).toggle();
			if(id=='Condon'){
				$('#input1').val('');
				$('#cClear').toggle();
			}else if(/sbs|funcs|struc/.test(id)){
				me.siblings('.seled').removeClass('seled').each(function(){
					$('#'+this.id.replace(/on$/,'')).hide();
				});

			}
		}

		if(id=='display'){
			var v=$('#input0').val().trim();
			if(se && v){
				preDisplay();
			}else{
				$('#displayOff').click()
				
			}
		}


	}).on('click','.oClear',function(){
		$('#oHTML').empty();
		bodyFocus();
		
		if($(this).is('#oHClear') && $('#oHTML').html()==''){
			
			if($('#capsimg+div').next().length){
				$('#noteEraser').click();
			}else{
				$('#clear').click();
			}
			
			//drawobj.clear();
		}
		
		/*
		if(graphic){
			graphic.close()
		}
	

		*/
	})




	$('#zMatherOn').on('click',function(){
	//	preDisplay();
	//	OH($('#input0Preview').html());
		$('#zMather').toggle();
		$('#zzllrrCanvas.toggle').click();
		$(this).text(function(i,v){return v=='unfold_less'?'unfold_more':'unfold_less'})

	});

	$('#lineSplit').on('click',function(){
		var t=$('[name=tool]:checked').val();
		if(t=='solve'){
			$('#input0').val(function(i,v){return v.replace(/(\\\\)*\n/g,'\\\\\n')});
			preDisplay();
		}
		if(t=='graphic'){
			$('#input0').val(function(i,v){return v.replace(/&&/g,'\n')});
		}
			
	});
	$('#lineMerge').on('click',function(){
		var t=$('[name=tool]:checked').val();
		if(t=='solve'){
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'').replace(/\\\\/g,'')});
			preDisplay();
		}
		if(t=='graphic'){
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'&&')});
		}
		
	});



	$('#input0').on('click',function(){//.on('mouseover', function(){this.focus()})
		$('#input1').removeClass('seled');
		$(this).addClass('.seled');
		L.input0=$(this).val();
		
	}).on('change keyup mouseover',function(){//mouseout 
		var v=$(this).val(), l0=(L.input0||'').trim();
		L.input0=v;
		
		if(l0!=v.trim() && $('#display').is('.seled') && v.trim()){
			/*
			katex.render(kx(sub2n(v,1)), $('#oHTML')[0], {
			    throwOnError: false,
			    displayMode: true
			});
			*/
			preDisplay();
		}
	});
	
	$('#input1').on('click',function(){
		$('#input0').removeClass('seled');
		$(this).addClass('.seled');
	});
//	$('#input2Tip').html('<details class=inputTip data-tool="绘图"><summary>绘图</summary>'+API([{'Canvas':'draw'},{'SVG':'plot'}])+'</details>');
	

	$('#input0Type').html(Options(ZLR('LaTeX Ascii_Math Unicode_Math JS HTML Presentation_MathML Content_MathML'))).on('change', function(){
		var t=$(this).val()[0], iT=$('#input0Tip [data-tool="API"]');
		$('#output0Type').html(Options(Set.opr1('取',ZLR('HTML Ascii_Math Unicode_Math LaTeX Presentation_MathML Content_MathML'),
			[[0,2,4], [0,2,3,4,5], [0,1,3,4,5], [0], [0], [0,2,3,5], [0,2,3,4]]['LAUJHPC'.indexOf(t)])
		));
		if(t=='J'){
			if(!iT.length){
				$('#input0Tip').append('<details class=inputTip data-tool="API"><summary>API+</summary>'+API(tooltip.API)+'</details>')	//tooltip.API
			}else{
				iT.show();
			}
		}else{
			iT.hide();
		}
	});
	$('#output0Type').html(Options(ZLR('HTML Ascii_Math Unicode_Math Presentation_MathML')));


	$('#oHTML').on('click','.katex',function(e){
		var shft=e.shiftKey;
		if(shft){
			OverCanvas($(this).find('annotation').eq(0).text());
			toolTip(gM('copied2CanvasTip'));
		}
		
	}).on('click','svg[id]',function(e){
		var shft=e.shiftKey;
		if(shft){
			var zi=[],Z,me=$(this);
			$('#Caps').children('svg,textarea,span').each(function(){zi.push(+$(this).css('z-index')||2000)});
			Z=max(zi)+1;
			me.clone().appendTo('#Caps');
			$('#Caps').find('#'+this.id).attr({'id':'graphic'+Time.now5()+(Math.random()+'').substr(2)})
				.css({'position':'absolute', 'z-index':Z})
			//L.drawShapeNow='';

			$('#Pointer').click();
			toolTip(gM('copied2CanvasTip'));
		}
		
	}).on('mouseover','.katex, svg[id]',function(e){
		toolTip(gM('copyTip'))
		
	})

	$('#panel').on('click','.mi-span',function(){
		var me=$(this),id=this.id,pa=me.parent(),tog=me.toggleClass('toggle').is('.toggle'),nx=me.next('[for='+id+']');
		
		if(nx.length){
			nx.toggle();
		}else{
			me.removeClass('toggle');
		}

	}).on('click','#aniControl .mi',function(){
		var me=$(this),id=this.id.substr(3), L=localStorage;
		
		if(id=='Play'){
			if(me.text()=='play_arrow'){
				me.text('pause');
				
				
			}else{
				me.text('play_arrow');
				//clearInterval();
				
			}
			
		}

		if(id=='Stop'){
			
			//clearInterval();
			drawobj.clear();
			
		}

		if(id=='Shot'){
			
			//clearInterval();
			drawobj.clear();
			
		}

		if(id=='Input'){
			
			
			
		}

		if(id=='Output'){
			
			
			
		}
	}).on('click','#menu .mi:not(#zMatherOn)',function(){
		var me=$(this),id=this.id,pa=me.parent(),tog=me.toggleClass('toggle').is('.toggle');

		if(id=='zzllrrCanvas'){
			me.css('display','inline-block').nextAll().removeClass('toggle').css('display',tog?'inline-block':'none');

			pa.nextAll().hide();

			me.siblings('.toggle').removeClass('toggle');
		}else if(id=='clear'){
			me.removeClass('toggle');
			drawobj.clear();
			$('.on').prop('checked',false);
			
		}else{
			 if(id=='svgs'){
				$('#zzllrrCanvas').removeClass('toggle').nextAll().hide();
			
				Scroll('scrollB');
			}else{
				
			}
			me.siblings('.toggle:not(#zzllrrCanvas)').removeClass('toggle');
			pa.nextAll('[for='+id+']').toggle(tog);
			pa.nextAll().not('[for='+id+']').hide();
		}

	}).on('click','.Add',function(){
		var me=$(this),p=me.parent().parent();
		p.clone().insertAfter(p);

	}).on('click','.Del',function(){
		var me=$(this),p=me.parent().parent();
		if(p.siblings('.multi').length){
			p.remove();
			drawobj.repaint();
		}else{
			p.parent().prev().find('.on').click();
		}

	}).on('click','.multinput',function(){
		var me=$(this).prop('checked',true), pa=me.parent(),psib=pa.siblings(':has(.multinput)');
		psib.find('.multinput').prop('checked',false);
		psib.find('input').not('.multinput').attr('disabled','disabled');
		pa.find('input').removeAttr('disabled');

	}).on('change keyup mouseup','input,select',function(e){//keyup mouseup
		var me=$(this);
		if(me.parents('#tileTool').length){	//,[for=svgs]
			return
		}
		
		e.stopPropagation();
		if(me.parents('[for=ani]').length){
			return
		}
		
		if(me.is('.color')){
			me.next().val(me.val());
		}
		if(me.is('.colorhex')){
			me.prev().val(me.val());
		}
		if(me.is('.on')){
			var on=me.prop('checked');
			me.parent().next().toggle(on);
		}
		
		drawobj.repaint();
	}).on('click','#aniShot',function(){
		cvs.toDataURL();
	
	});


	
	$(window).resize(function(){
		drawobj.repaint();
	});
	
	var colorTmpl='<div class=stroke>'+
			'<label>'+gM('Stroke')+'<input type=checkbox class=strokeon checked=checked /></label>'+
			'<input type=color value="#000000" class=color />'+
			'<label>'+gM('Gradient')+'<input type=checkbox class=gradon /></label>'+
			gM('Color')+'<input type=text placeholder="0 color,0.5 color,1 color" class=gradcolor />'+
			gM('Linear / Radial')+'<input type=text placeholder="x0 y0 (r0) x1 y1 (r1)" class=grad />'+
		'</div>'+
		'<div class=fill>'+
			'<label>'+gM('Fill')+'<input type=checkbox class=fillon /></label>'+
			'<input type=color value="#000000" class=color />'+
			'<label>'+gM('Gradient')+'<input type=checkbox class=gradon /></label>'+
			gM('Color')+'<input type=text placeholder="0 color,0.5 color,1 color" class=gradcolor />'+
			gM('Linear / Radial')+'<input type=text placeholder="x0 y0 (r0) x1 y1 (r1)" class=grad />'+
		'</div>'+
		'<div class=shadow>'+
			'<label>'+gM('dropShadow')+'<input type=checkbox class=shadowon /></label>'+
			'<input type=color value="#000000" class=color />'+
			gM('Blur')+'<input type=number min=0 class=blur value=0 />'+
			gM('Offset')+'<input type=text placeholder="0 0" class=offset />'+
		'</div>'+
		'<div><i class="mi Add">add</i><i class="mi Del">clear</i></div>';
	$('div[for=text] .multi').append(colorTmpl);
	$('div[for=shape] .multi').append(
		'<div>'+gM('Overlap')+'<select class=comp>'+Options(['source-over','source-atop','source-in','source-out','destination-over','destination-atop','destination-in','destination-out','lighter','copy','xor']).join('')+'</select>'+
			gM('Dash')+'<input type=text class=dash placeholder="2,4,2" /></div>'+colorTmpl

	);
	$('.font').parent().after('<label>'+gM('Horizontal Align')+' <select class=halign>'+Options(ZLR('center end left right start'))+'</select></label>'+
						'<label>'+gM('Vertical Align')+' <select class=valign>'+Options(ZLR('alphabetic top hanging middle ideographic bottom'))+'</select></label>');
	$('.color').after(function(){return '<input type=text value="'+$(this).val()+'" class=colorhex size=4 />'+gM('opa')+'<input type=number value="1" min=0 max=1 step=.1 class=opa />'});


	
	var uo=H_o(sch);//	?tool=&subtool=	

	
	if(!uo.tool){
		uo.tool=L.tool || 'solve'
	}
	
	$('[name=tool][value='+uo.tool+']').click();
	

	/*
		


		href('./','文件列表')+hr+
		href(Hs+'en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics','未解难题（Wikipedia）')
	
	var u='index.html?topic=wiki&s0='+fn0($('#subject2 .seled').val()||$('#subject2 .tool').val()||'数');

	*/
	
});

var toolSwitch=function(x){
	var G='#'+x+'Ground';
	$('.ground:not('+G+')').hide();
	$(G).show();
	$('#subject').toggle(/solve/.test(x) || /explore/.test(x) && /course|drill/.test($('#explores').val()));
	//$('#iContent').toggle(/solve|graphic|show/.test(x));
	if(x=='graphic'){
		$('#display.seled').click();
		$('#svgs').not('.toggle').click();
	}
};

var MfS=function(x,typ){return Mtrx.fromStr(x,typ)},
	PfS=function(x){return Perm.fromStr(x.replace(/&.+/,''))},
	PtS=function(x,typ){return Perm.toStr(x,typ)};
	
function dayOrNight(){
	var isnight=L.night=='true';
	$('#oHTML svg').css({"background-color":(isnight?'gainsboro':'transparent')});	
}

var preDisplay=function(){
	var i=$('#input0Type').val()[0],o=$('#output0Type').val()[0],v=$('#input0').val().trim(),w=$('#input0Preview');

	if(i==o && o!='H'){
		w.add('#latexDisplayTool').hide();
	}else if(i=='L' && o=='P'){
		katex.render(kx(sub2n(v,1)), w[0], {
		    throwOnError: false,
		    displayMode: true
		});
		w.html(XML.wrapE('code',XML.encode(w.find('.katex-mathml').html().replace(/math/,'math xmlns="'+xmml+'"')))).add('#latexDisplayTool').show();
		
	}else if(o=='H'){
		w.add('#latexDisplayTool').show();
		if(i=='H'){
			w.html(v)
		}else if(i=='U'){
			var l=$('summary:contains(显示) ~ .seled').length;
			if(l){
				$('summary:contains(显示) + .task').click();
				$('#go').click();
			}else{
				w.html(asc2unicode(v).split('\n').join(br));
			}
			
		}else if(i=='J'){
			try{
				w.html(eval(v))
			}catch(e){
				w.html(v)
			}
		}else if(i=='L'){//LaTex
			katex.render(kx(sub2n(v,1)), w[0], {
			    throwOnError: false,
			    displayMode: true
			});
		}
	}
},rng2=function(t,neg){
	var A=(t.trim()||'0,0').split(/[^-\d\.]/);
	A[0]=+A[0];
	if(A.length==1){
		return [neg?-A[0]:A[0], A[0]]
	}
	A[1]=+A[1];
	return A

},rng4=function(t){
	var A=(t.trim()||'0;0').split(';');
	if(A.length==1){
		return [rng2(A[0],1),rng2(A[0],1)]
	}
	return [rng2(A[0],1),rng2(A[1],1)]

},color2rgba=function(o,isjQ){
	var me=$(o);
	if(isjQ && me.prev('label').find(':checkbox').not(':checked').length){
		return ''
	}
	if(isjQ && me.nextAll('label').find(':checked').length || !isjQ && o.grad){//渐变
		var grad=isjQ?Arrf(Number,me.nextAll('.grad').val().split(' ')):o.grad,
			color=isjQ?me.nextAll('.gradcolor').val().split(','):o.color;

		//var grd=ctx['create'+(grad.length==6?'Radial':'Linear')+'Gradient'].apply(null,grad);	Illegal invocation
		if(!/^[46]$/.test(grad.length)){//非法渐变
			return '';
		}
		
		var grd=grad.length==6?ctx.createRadialGradient(grad[0],grad[1],grad[2],grad[3],grad[4],grad[5]):ctx.createLinearGradient(grad[0],grad[1],grad[2],grad[3]);
		for(var i=0;i<color.length;i++){
			var c=color[i].split(' ');
		//	console.log(c);
			grd.addColorStop(+c[0],c[1]);
		}
		return grd
	}
	//console.log(me.val(),me.next().next().val(),hex2rgba(me.val(),me.next().next().val()),isjQ);
	return isjQ?hex2rgba(me.val(),me.next().next().val()):(/rgba/i.test(o.color)?o.color:hex2rgba(o.color,o.opa||1))

},shadow=function(obj,t){
	var	color3=color2rgba(obj?t.color3:$(t).find('.shadow .color'),!obj);

	if(color3){
		ctx.shadowBlur=+(obj?t.color3.blur:$(t).find('.shadow .blur').val())||0;
		var os=(obj?t.color3.offset:$(t).find('.shadow .offset').val())||'';
		if(os){
			ctx.shadowOffsetX=+os.split(' ')[0];
			ctx.shadowOffsetY=+os.split(' ')[1];
		}
		ctx.shadowColor=color3;
	}else{
		ctx.shadowBlur=0;
//		ctx.shadowColor=null;
		ctx.shadowOffsetX=0;
		ctx.shadowOffsetY=0;
	}
},atan=function(dy,dx){
	//return (n<0 || n==0 && 1/n < 0)?Math.PI+n:n
	if(dx==0){
		return dy<0?Math.PI*3/2:Math.PI/2
	}
	if(dy==0){
		return dx<0?Math.PI:0
	}
	if(dx>0 && dy>0){return Math.atan(dy/dx)}
	if(dx<0 && dy>0){return Math.atan(dy/dx)+Math.PI}
	if(dx<0 && dy<0){return Math.atan(dy/dx)+Math.PI}
	if(dx>0 && dy<0){return Math.atan(dy/dx)+Math.PI*2}
};

function OverCanvas(t){
	L.drawShapeNow='';
	$('#TextLaTeX').val(t);
	$('#GOlatex').click();
	$('#Pointer').click();
}
function toolTip(t){
	$('#bar').html(SCtv('toolTip',t));
}