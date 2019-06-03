/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
var svgid='#svgShape svg[id',strk, slid, dsh, shps,
Colors='000000,F5F5F5,ffffff,FFFAFA;4682B4,87CEFA,87CEFA,FFF5EE;FA8072,F8F8FF,FFB6C1,FFC0CB;ffffff,DCDCDC,000000,696969;8B0000,B22222,CD5C5C,F08080';

$(function(){

	L.drawEnd='';
	L.drawEnd2='';
	L.drawMove='';
	L.drawShape='Pointer';
	L.drawShapeNow='';
	L.drawCopy='';
	
	var cvs=$('#caps')[0], capctx = cvs.getContext('2d');

	$('#capsimg').after('<div hidden>'+dc);
	

	setTimeout(function(){
		
			
		$('#allEraser').click();
		$('#color'+(L.night=='false'?0:3)).click();
			
		if($('#svgs').length<1){
		
			$('#tileTool').show();
			
		}else{
		
		
		
		}

		$('#caps').show().nextAll().hide();
	},100)



	//attr
	$('#allEraser ~ div,#svgTog ~ *, #svgLines div:gt(0), #svgLines ~ div').hide();

	$('#Tile :button[title]').attr('title',function(i,v){return gM('hotkey')+': '+v});
	$('#font').attr('placeholder',gM('font'));
	$('#CssRotate6 img').attr('title',function(){return gM(this.id)});

	$('#svgArwE,#svgArwS').attr('title',gM('arrow'));
	$('#tileFontCenter').attr('title',gM('center')).before(gM('center'));
	$('#svgShape svg[id], #svgTog svg').attr('stroke-width',2);

	$('#Angle').attr('title', function(){return gM(this.id)});

	$('#CssRotate :radio').attr('name','rotate');

	//val

	$('#font,#fontSize').on('change keyup mouseup',function(){
		L[this.id]=this.value;
		if(/font/.test(this.id)){changeTextCSS()}
	})
	$('#fontSize').val(function(){return L[this.id]||24});
	$('#font').val(function(){return L[this.id]||'Microsoft Yahei'});

	$('.clrCanvas, #clrLaTeX').val(gM('clear'));


	$(':button[value=""], :button:not([value])').val(function(){return gM(this.id)});

// change
	$('select,:color,:range,:number').not('#editOpt :number').on('change',function(){cng_popout(this)});
	
	
	$('#tileToolCap img').attr('src','img/ZIL.png');

	$('#Color').html(Arrf(function(X){var x=X.toLowerCase(), w=$(window).width(), h=$(window).height(),w2=Math.ceil(w/2),h2=Math.ceil(h/2),
		gc=function(i){var t='<input type=color id='+X+'GC'+i+' /><input type=range id=Opa'+X+'GC'+i+' min=0 max=1 step=".1" value=1 />';
			return i?'<div id='+x+'gc'+i+' hidden><input type=number class=Gradstop readonly value='+(i==1?0:100)+' />% '+t+dc:t};
		return detail(gM(x.replace('s','b')+'gc')+gc(''),
			'<label><input type=checkbox class=Grad /></label><span hidden>× <input type=number class=GradStops min=2 value=2 />'+
			concat('<label><input type=radio name='+X+'GradType value=',['Linear checked=checked','Radial'],' /></label>').join('')+sc+
			'<div class=Linear hidden>x1 '+num(0)+' y1 '+num(0)+' x2 '+num(0)+' y2 '+num(X=='S'?h:100)+dc+
			'<div class=Radial hidden>'+concat(['cx','cy',X=='S'?'r1':'r',br+'fx','fy'].concat(X=='S'?'r2':[]),copyA('<input type=number value=',5+(+(X=='S'))),
				X=='S'?[w2,h2,h2,w2,h2,w2]:copyA(50,5),' min=0 />').join('')+dc+
		gc(1)+'<div id='+x+'gcs hidden>'+dc+gc(2))
	}, 'FBS'.split('')).join(''));

	//color
	$('#COLOR summary input:text').attr('readonly','');
	$('#Color :color').val(function() {
		return L[this.id.replace('G','T')] || L[this.id] || L[this.id.replace(/^./,'B')];
	}).next('input').add('#cssDropShadowOpac').attr('title',gM('opa'));

	var C='#Css';
	$(C+'Filter img, .scale, .skew, .clip, .translate').attr('title', gM('reset')).on('click',function(){
		var me=$(this);
	//	console.log(this.outerHTML);
		cng_popout(me.parent().find('input').val(function(){return $(this).attr('value')}).last()[0]);
		me.parent().find('.rngv').text(function(){return $(this).prev().attr('value')});
	});


	$('#CssRotate6 img').on('click',function(){
		$('#rotate ~ input').val(0);
		var id=this.id, cR='#cssRotate';
		if(/flipx|y/.test(id)){$(cR+this.id.substr(-1).toUpperCase()).val(180)}
		if(/rotate/.test(id)){var i=Number(id.substr(-1)); $(cR+'Z').val(i<3?i*90:-90)}
		cng_popout($(cR+'Z')[0]);

	});



	//html
	$('#translate').text(function(i,v){return gM(this.id+'.Math')});
	$('.Char').text(gM('Char'));
	
	$('#Sides').before(gM('Sides')+'× ');
	$('#bWR').text(gM('Radii'));
	$('#fontCSS span').text('A');
	$('#svgTextM').html(Options((L.svgTexts||'✘❌✅✓✔✕✖✗☻☹☺').split('')).join(''));
	$('#cssTransOpt').text(gM('Opts'));
	$('span:empty[id]').text(function(){return gM(this.id)});
	$('#cssClip').after(gM('Clip'));
	$('.Grad').after(gM('Gradient'));
	$('#Transform').after(function(){return gM(this.id)});
	
	$('[name=FGradType],[name=BGradType],[name=SGradType]').before(function(){var v=this.value;return gM(v)});
	
	$('#copyMargin').before(gM('Margin'));

	$('#effects').html(Options(ZLR('effects snow')).join('')).on('change',function(){var v=$(this).val();if(v!='effects'){eval(v+'()')}});
	$('#GOcapctx').parent().after('<div>'+Arrf(function(x){return '<p class=JS>'+x+';</p>'},[

		'ct.beginPath()',

		'ct.moveTo(0,0)',
		'ct.lineTo(300,150)',
		'ct.arcTo(x1,y1,x2,y2,r)',
		'ct.quadraticCurveTo(cpx,cpy,x,y)',
		'ct.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)',
		
		
		'ct.lineWidth=6',
		'ct.lineCap="butt|round|square',
		'ct.lineJoin="miter|bevel|round"',
		'ct.miterLimit=10',

		'ct.rect(x,y,w,h)',
		'ct.arc(x,y,r,sAngle,eAngle,counterclockwise)',
		
		'ct.closePath()',

		'ct.stroke()',
		'ct.fill()',

		
		'var g=ct.createLinearGradient(x0,y0,x1,y1)',
		'var g=ct.createRadialGradient(x0,y0,r0,x1,y1,r1)',
		'g.addColorStop(0,"black")',
		'g.addColorStop(0.5,"red")',
		'g.addColorStop(1,"white")',
		'g=ct.createPattern(image,"repeat|repeat-x|repeat-y|no-repeat")',
		'ct.fillStyle=g',
		'ct.fillRect(x,y,w,h)',
		'ct.strokeStyle="red"',
		'ct.strokeRect(x,y,w,h)',
		'ct.clearRect(x,y,w,h)',
		'ct.clip()',


		'ct.font="italic 40px Arial"',
		'ct.textAlign="start|center|end|left|right"',
		'ct.textBaseline="alphabetic|top|hanging|middle|ideographic|bottom"',
		'ct.fillText(text,x,y,maxWidth)',
		'ct.strokeText(text,x,y,maxWidth)',
		'if(ct.measureText(text).width==20){ }',
		
		'ct.scale(x,y)',
		'ct.rotate(angle)',
		'ct.translate(x,y)',
		'ct.transform(scaleX,skewX,skewY,scaleY,translateX,translateY)',
		'ct.setTransform(scaleX,skewX,skewY,scaleY,translateX,translateY)',
		
		
		'ct.shadowColor="#000000"',
		'ct.shadowBlur=20',
		'ct.shadowOffsetX=20',
		'ct.shadowOffsetY=20',
		
		'ct.globalAlpha=0.2',
		'ct.globalCompositeOperation="(source|destination)-(over|atop|in|out)|lighter|copy|xor"',
		'var D=ct.createImageData(w,h)',
		'var D=ct.createImageData(D)',
		'var D=ct.getImageData(x,y,w,h)',
		'D.width|height|data.length',
		'ct.putImageData(D,x,y,_x,_y,_W,_H)',
		
		
		
		'if(ct.isPointInPath(x,y)){ }',
		'ct.save()',
		'ct.restore()',
		'ct.createEvent()',
		'ct.getContext()',
		'ct.toDataURL()',
		
		
		
	]).join('')+dc);

	$('#GOfx').parent().after('<div>'+Arrf(function(x){return '<p class=JS>'+x+';</p>'},[

		'(x**2+y**2)<=2500 && (x**2+y**2)>=1600;400,300,-50,50,-50,50;#a2c347;255',
		
	]).join('')+dc);



	$('.JS').on('click',function(){
		var x=$(this).text();
		$(this).parent().parent().prev().val(function(i,v){return (v?v+'\n':'')+x})
	});
//OtherOpts

	$('#OtherOpts').html(Arrf(function(y){return '<div>'+Arrf(function(x){return '<label><input type=checkbox id='+x+'on />'+gM(x=='Medians'?'Median Line':x.replace(/([^i])s$/,'$1'))+'</label>'},ZLR(y)).join('')+dc},[
		'CircumRectangle CircumCircle Incircle',
		'backvisi Diagonal Diameter '+zlr2('Centroid Orthocenter Incenter Circumcenter Vertex','Line'),
		'Medians MidPointLine OppositeMidPointLine',
		'Altitudes PerpendicularFootLine',
		'Axis Tick SymmetryAxis'
	]).join(''));


	$('#OtherOpts').append(

		'<div>'+gM('Equator')+'<label><input type=checkbox id=Equatorxon />x '+num(20)+'</label><label><input type=checkbox id=Equatoryon />y '+num(20)+'</label>'+dc+
		'<div><label><input type=checkbox id=Gridon />'+gM('Grid')+'</label>'+['x','y','z',''].join(' '+num(2))+dc+

		detail('<label><input type=checkbox id=Neston />'+gM('Nest')+'</label> × '+num(2),
		'<label><input type=checkbox id=NestMarginon />'+gM('Margin')+'</label> '+num(20)+' , '+num(20))+

		'<div><label><input type=checkbox id=MidPointNeston />'+gM('MidPointLine')+' '+gM('Nest')+' × </label>'+num(2)+dc+
		'<div><label><input type=checkbox id=PerpendicularFootNeston />'+gM('PerpendicularFootLine')+' '+gM('Nest')+' × </label>'+num(2)+dc+

		'<div>'+Arrf(function(x){return '<label><input type=checkbox id=Arc'+x+'on />∠'+x+'</label>'},[1,2,3]).join('')+' '+gM('Arc')+' '+gM('Radii')+' '+num(15)+dc+
			
		'<div>'+Arrf(function(x){return '<span><label><input type=checkbox id='+x+'on />'+gM(x)+'</label> '+gM('bw')+num(15)+sc},ZLR('Rt')).join('')+dc+
			
		Arrf(function(y){return '<div>'+gM(y)+' '+Arrf(function(x){return '<label><input type=checkbox id='+y+x+'on />L'+x+' </label>'},[1,2,3]).join('')+dc}, ZLR('Median Altitude AngleBisector Midline')).join('')
		
	);




	$('#OtherOpts :checkbox').on('click',function(){

		var c=$(this).prop('checked'), id=this.id.replace(/on$/,''), shpNid=L.drawShapeNow||'unknown', shpN=$('#'+shpNid), otherShps=shpN.children('.'+id);
		if(!otherShps.length){
			otherShps=shpN.nextAll('[id^='+shpNid+id+']');
			if(id=='VertexLine'){
				otherShps=shpN.children('.main')
			}
		}
		otherShps.toggle(c);
	});


	$('.clrCanvas').on('click',function(){
		if(typeof drawobj!='undefined' && typeof drawobj.repaint =='function'){
			drawobj.repaint();
		}else{
			scrn('eraser');
		}
	});
	$('#clrLaTeX').on('click',function(){
		$('#Caps .caplatex').remove();
	});
	

	
	
	$('#copyDir').append(Options(seqA(0,10),'←→↑↓↖↗↙↘↥↧'.split('')).join('')).before(gM('Copy'));
	$('#eraserDir').append(Options(seqA(0,10),'←→↑↓↖↗↙↘↥↧'.split('')).join('')).before(gM('Del'));
	

	$('#copyDir').val(['1']);
	$('#copyTileOn').prepend(gM('Tile')+' ');
	$('[name=MarginCopyOpt]').after(function(){var v=this.value;
		return {w:gM('w')+' ('+gM('Margin')+')', copy:gM('Copy')+' ('+gM('Spacing')+')'}[v]
	});
	$('#MarginCopyh').before(gM('Tick Length'));




	$('#svgArwE,#svgArwS').append(Options(seqA(0,10),' ∧△◇□○▲◆■●'.split('')).join(''));

	$('#svgLine').append(Options(seqA(0,3),'￣﹉﹊'.split('')).join('')); //﹋﹌


	var c=$('#tileToolCap svg[id]').not('#Pointer,#allEraser,#Text,[id^=svgPg]').children().not('defs');

	c.not('text').attr({'stroke':'white','fill':'none'});
	c.filter('text').attr({'stroke':'none','fill':'white'});

	$('#svgArwE').val(6);


	$('filter').attr({x:0,y:0,width:'100%',height:'100%'});

	$('#Line marker').attr({orient:'auto'}).children().attr({stroke:'white',fill:'none'});

	for(var i=2;i<6;i++){
		$('#ArwE'+i+'Line').clone().appendTo('#Line defs').attr('id','ArwE'+(i+4)+'Line').children().attr('fill','white');
		$('#ArwS'+i+'Line').clone().appendTo('#Line defs').attr('id','ArwS'+(i+4)+'Line').children().attr('fill','white');
	}

	$('#Line defs').clone().prependTo('#svgLines svg:not(#Line)').children().attr('id',function(i,v){return v.replace('Line','')+$(this).parent().parent().attr('id')});



	$('#COLOR :range').each(function(){
		var me=$(this);
		me.after(SC+'rngv title="'+(me.attr('title')||me.prev().text())+'">'+me.attr('value')+sc);
	});



	$('.Grad').on('click',function(){
		var me=$(this),c=me.prop('checked'),mp=me.parent(),mpn=mp.nextAll();
		mpn.toggle(c);
		if(c){
			var GradType=me.parent().next().find(':radio:checked').val();
			mpn.filter('.Radial').toggle(GradType=='Radial');
			mpn.filter('.Linear').toggle(GradType!='Radial');
		}
		mp.prev('summary').toggleClass('seled',c);
		if(mpn.filter('#sgcs').length){
			if(typeof drawobj!='undefined' && typeof drawobj.repaint =='function'){
				drawobj.repaint();
			}else{
				scrn('eraser');
			}
		}else{
			if(c){
				refreshFilter()
			}else{
				toggleColorShpN()
			}
		}
		
	});
	$('#Color').children().eq(2).find('.Grad').click();

	$('#Color :radio').on('click',function(){
		var me=$(this);
		var pp=me.parent().parent(), v=me.val();
		pp.nextAll('.'+v).show();
		pp.nextAll('.'+(v=='Linear'?'Radial':'Linear')).hide();
			
		if(me.is('[name=SGradType]')){
			if(typeof drawobj!='undefined' && typeof drawobj.repaint =='function'){
				drawobj.repaint();
			}else{
				scrn('eraser');
			}
		}else{
			refreshFilter();
		}
	});




	
	$('#RandomColorson').on('click',function(){
		var c=$(this).prop('checked'), shp=$('#'+(L.drawShape||'unknown')), shpN=$('#'+(L.drawShapeNow||'unknown'));
		if(L.drawShape=='allEraser'){
			if(typeof drawobj!='undefined' && typeof drawobj.repaint =='function'){
				drawobj.repaint();
			}else{
				scrn('eraser');
			}
		}else if(!shp.parent().is('#svgTool') || shp.is('#Pointer')){
			RndColors(shpN);
		}
	}).before(gM('Random Colors'));


	$('#svgShape svg[id]').on('click',function(e){

		
		var id=this.id,pa=$(this).parent(), isCopy=/Copy/.test(id), isTxt=/Text/.test(id);
		L.drawShape=id;
		L.drawShapeNow='';
		toggleSvg();

		drawEnd(e);

//强制初始值val
		$('#strkW').val(isTxt?0:2);
		$('#strkR, #strkRy').val(isTxt?0:20);
		$('#svgLine, #strkDashOffset').val(0);
		$('#strkDash').val('');
		
		//$('#strkRy').val(20);


//checkbox
		$('#OtherOpts :checkbox').prop('checked',false);
		$(zlr3('#','backvisi Equatorx Equatory','on',',')).prop('checked',true);


		tileToolCap(id);
		
		
		
		$('#caps').css('cursor','default');

		$('#svgSel').toggle(!pa.is('#svgTool,#svgTog'));
		
		$('#svgCssTransform').toggle(!pa.is('#svgTool,#svgTog') || isCopy);
		$('#copyOpt').toggle(isCopy);


		$('[name=MarginCopyOpt][value=copy]').prop('checked',true).parent().toggle(true);

		


		var scr=/scr/.test(id), note=/note/.test(id),all=/all/.test(id), Cd=$('#Color details');
		
		if(/Pointer|Eraser|scr|Copy|LayerToggle/.test(id)){
			
			$('#svgSel > *,#SvgOpt').hide();
			$('#COLOR').toggle(scr||all||isCopy);
			$('#Color,#CssFilter').toggle(!isCopy);

			if(id=='Pointer'){
				$('#caps').css('cursor','grab');
			}
			
			$('#capsimg ~ *').css('cursor',id=='Pointer'?'move':(id=='Copy'?'copy':'no-drop'));
			if(scr || all){
				var cvs=$('#caps')[0],hv=/[13]/.test(id);
				if(all){
					cvs.width=$('body').width()+20;//-5;
					cvs.height=$(window).height();//-5;
				}
				var w=cvs.width,h=cvs.height;
				$('#scrW').val(hv?h:w);
				$('#scrH').val(hv?w:h);
				
				if(all){
					var dtl=Cd.eq(2), isGrad=dtl.find('.Grad').prop('checked');
					dtl.show().siblings().hide();
					if(isGrad){
						dtl.find(':color').not('#SGC').each(function(){
							var c=RandomColor();
							$(this).val(c).attr('title',c+'\n'+hex2rgba(c, $(this).next().val()))
						});
					}else{
						var c=RandomColor();
						$('#SGC').val(c).attr('title',c+'\n'+hex2rgba(c, $('#OpaSGC').val()))
					}
					if(typeof drawobj!='undefined' && typeof drawobj.repaint =='function'){
						drawobj.repaint();
					}else{
						scrn('eraser');
					}
				}else{
					scrn(id.substr(3).toLowerCase());
				}
				if(scr){$('#Pointer').click()}
			}
			if(note){drawClr()}
			
			if(/LayerToggle/.test(id)){
				$('#capsimg ~ *').toggle();
			}
		}else{
			
			$('#capsimg ~ *').css('cursor','auto');

			if(/Crop/.test(id)){
				$('#svgSel > *,#SvgOpt,#COLOR').hide();
				$('#strkFill').val(0);
				if($('#caps').width()+$('#tileTool').width()>$(window).width()){
					$('#tileTool').fadeOut();
					CapsTip();
				}
				$('#caps').css('cursor','crosshair');

			}else{

				Cd.eq(2).hide();
				Cd.eq(0).show();
				Cd.eq(1).toggle(+$('#strkFill').val()>0);
				$('#CssFilter').show();
				$('#Color').show();
			}
		}

		var c='#css', C='#Css';

		$(C+'Filter img').click();
		$(C+'Filter').removeAttr('open');
		if(!isCopy){
			$('#flip0, .clip, .scale, .skew, .translate').click();
		}


		$(zlr(c,'Perspec Rotate3d',',')).val(0);
		$(zlr(c,'Rotate3d Matrix3d',',')).val('');
		$(c+'PerspecOrig').val('50% 50%');
		$(c+'TransOrig').val('50% 50% 0');
		$(zlr(c,'TranStyle Matrix DropShadow Clip',',')).prop('checked',false);
		$(c+'BackVisi').prop('checked',true);

		$(zlr(c,'TransOpt',',')).removeClass('toggle');
		$(zlr(C,'TransOpt Dropshadow Clip',',')).hide();
		$(c+'Matrix3D').hide().nextAll().show();


		
	});

	$('#svgTog svg').on('click',function(){
		var me=$(this), id=me.attr('id');
		me.find('text').attr('fill','yellow').text('○');
		me.siblings().find('text').attr('fill','white').text('-');
		var n=+id.replace('svgPg',''), divSib=$('#svgTool').nextAll(), divs=divSib.not(':has(div)').add(divSib.find('div')), divi=divs.eq(n-1);
		divi=divs.slice(6*(n-1),6*n);

		divs.not(divi).hide();
		divi.show();
	});

	toggleSvg();
	$('#svgShape svg[id]').hover(function(){
		var me=$(this),id=this.id, h=gM('hotkey')+' ', met=me.attr('tip'), meh=me.attr('hotkey'),
			t=met||meh?gM(met||id)+(meh?' | '+h+meh:''):'';
		
		if(t){
			$('#tileTool').attr('tip',t);
			//toolTip(t);
		}
		},function(){
			var c=$('#caps'),w=c.width(),h=c.height(),wh=w+'x'+h;
			$('#tileTool').attr('tip',wh+' '+gM('Hide')+' | '+gM('Hotkey')+' Esc');
			$('#scrW').val(w);
			$('#scrH').val(h);
	});
	$('#Caps').on('mousedown', 'svg, textarea, span[id]',function(e){mDn(e)}).on('mousemove', 'svg, textarea, span[id]', function(e){mMv(e)}).on('mouseup', 'svg, textarea, span[id]', function(e){mUp(e)});
	$('#caps').on('mousedown',function(e){mDn(e)}).on('mousemove',function(e){mMv(e)}).on('mouseup',function(e){mUp(e)});

	var t=zlr('#url','Img Cap',',')+',#Caps textarea, .urlImg';

	$('body').on('keydown',function(e){
		var k=e.keyCode, act=document.activeElement, acti=act.tagName.toLowerCase(),isTxt=acti=='textarea';

		if(e.ctrlKey){

				drawEnd(e);

		}
		if(isTxt && e.ctrlKey){

			if(k==66){$('#fontCSS .bold').click()}
			if(k==73){$('#fontCSS .italic').click()}

		}
		if(acti=='input'){
			if(k==13){
				if($(act).is('#tileRenm')){
					$('#shotSave').click()
				}
			}
		}
		if(acti=='body'){
			if(e.ctrlKey){
				if(k==67){L.drawCopy=L.drawShapeNow}
				if(k==86){drawCopy()}
			}else{

		//if(k==72){api('ofhotkey')}
				if(k==13){drawEnd(e)}
				if(k==27){
					if($('#svgs').length){
						$('#svgs').click()
					}else{
						$('#tileTool').fadeToggle()
					}
				
				
				}


				if(k==80){$('#Pointer').click()}
				if(k==46 || k==68){
					$('#'+(L.drawShapeNow||'unknown')).remove();
					if(e.shiftKey){drawClr()}
				}
				if(k==37 || k==39){
					$('#cssX').val(max([+$('#cssX').val()-38+k,0])).change();
				}
				if(k==38 || k==40){
					$('#cssY').val(max([+$('#cssY').val()-39+k,0])).change();
				}
				if(k==65||k==76||k==78||k==82){
					if(k==65){$('#Text').click()}
					if(k==76){$('#Line').click()}
					if(k==78){$('#ArectNote').click()}
					if(k==82){$('#ARect').click()}
	
				}
				if(k==67){
					$('#Crop').click();
					if($('#caps').width()+$('#tileTool').width()>$(window).width()){
						$('#tileTool').fadeOut();
						CapsTip();
					}
				}
				
				if(k==86){$('#LayerToggle').click()}
			}
		}
	}).on('dblclick',function(e){drawEnd(e)}).on('keyup','.soleTxt',function(e){
		var me=$(this),v=me.val(),sz=+$('#fontSize').val();
		if(v){
			if(this.scrollHeight-4 > me.height()){

				me.width(function(i,x){return max([sz*max(Arrf(function(t){return t.length}, v.split('\n'))),x,this.scrollWidth])});
				me.height(function(i,x){return max([sz*v.split('\n').length,x,this.scrollHeight])});
			}
			if(this.scrollWidth-4 > me.width()){
				
			}
		}else{
			me.width(20).height(20);
		}

	}).on('change','#Color :range, #Color :color, select, #svgTexts',function(){cng_cap(this)
	
	}).on('change keyup mouseup','tileTool :number:not(#jpgQ):not(#fontSize), #strkDash, #CssTransform :text',function(){cng_cap(this)
	
	}).on('paste',t,function(e){
		//console.log(e);
		var ts=e.originalEvent.clipboardData.items, me=$(this), id=this.id, p=me.parent(), pp=p.parent(),sm=pp.prevAll('summary'), c=sm.find(':checked').length,

			cb=function(){
			loadCaps()
		};
		if(ts.length){
			for(var i=0;i<ts.length;i++){
				if(ts[i].kind == 'file'){
					p.find(':file').add(pp.find(':file')).val('');
					
					blob = ts[i].getAsFile(),reader=new FileReader();
					//console.log(ts[i]);  DataTransferItem {type: "image/png", kind: "file"}
					reader.onload = function(event){
						//console.log(event);
						var src = event.target.result; //webkitURL.createObjectURL(blob);

						
						var sne=picSrcNameExt(src), img=new Image();
						me.val(' ').css('background','url('+src+') bottom right/contain no-repeat')
							.attr({'data-name':'clipboard','data-no':0,'data-size':0,'data-sz':0,'data-ext':'other','data-bg':src,'data-src':src});
						img.onload=function(){
							var w=this.width;
							var h=this.height;
							var s=w+'×'+h;
							$('.urlImg[data-bg="'+this.src+'"]').attr({'data-w':w,'data-h':h,'data-wxh':s});
							$(this).attr({'data-wxh':s, 'data-src':this.src});

						};
						img.src=src;
						

						
						loadCaps()
					};
					reader.readAsDataURL(blob);
					break;
				}
			}
		}
	}).on('change keyup mouseup',t,function(e){//textarea
		var me=$(this), id=this.id, src=me.val(),src0=me.attr('data-bg')||'', cnged=src0!=src && src!=' ',p=me.parent(), pp=p.parent(),sm=pp.prevAll('summary'), c=sm.find(':checked').length,

			cb=function(){
				if(til){loadTiles()}
				if(imr){$('#count').click()}
				if(cap){loadCaps()}
		};
		
		imgPreRe.lastIndex=0;
		if(imgPreRe.test(src) || src==''){
			p.find(':file').add(pp.find(':file')).val('');

			if(cnged){
				if(src==''){
					me.val('').css('background','none').removeAttr('data-bg data-src');
					//console.log('cap reload');
					cb();
				}else if(src.trim().indexOf('\n')<0){
					src=src.trim();

					var sne=picSrcNameExt(src), img=new Image();
					me.css('background','url('+src+') bottom right/contain no-repeat')
						.attr({'data-name':sne[1],'data-no':0,'data-size':0,'data-sz':0,'data-ext':sne[2],'data-bg':src,'data-src':src});
					img.onload=function(){
						var w=this.width;
						var h=this.height;
						var s=w+'×'+h;
						$('.urlImg[data-bg="'+this.src+'"]').attr({'data-w':w,'data-h':h,'data-wxh':s});
						$(this).attr({'data-wxh':s, 'data-src':this.src});
						

					};
					img.onerror=function(){
						me.val(src);
					}
					img.src=src;


					loadCaps()
				}

			}

		}else if($('#inFile').val()=='capcanvasAPI'){
			scrn('canvasAPI');

		}
		e.stopPropagation();

	}).on('dragover',t,function(e){e.stopPropagation();e.preventDefault();
	}).on('dragenter',t,function(e){e.stopPropagation();e.preventDefault();$(this).addClass('drop');
	}).on('dragleave',t,function(e){e.stopPropagation();e.preventDefault();$(this).removeClass('drop');
	}).on('drop',t,function(e){e.stopPropagation();e.preventDefault();$(this).removeClass('drop');
		var me=$(this), id=this.id, pp=me.parent().parent(), src=me.val();;
		if(/url/.test(id)){$('#'+id.replace('rl','p')).val('')}
		var f=e.originalEvent.dataTransfer.files[0];
		if(!f || f.type.indexOf('image')<0){return}
		//console.log(f); File {webkitRelativePath: "", lastModifiedDate: xxx, name: "VIP.png", type: "image/png", size: 10628}

		var reader=new FileReader();
		reader.onload = function(event){
			var src = this.result;
			me.val(' ').css('background','url('+src+') bottom right/contain no-repeat').attr({'data-bg':src,'data-src':src});
			loadCaps()
		};
		reader.readAsDataURL(f);

	}).on('change','#tileTool :color',function(){
		var me=$(this),v=me.val();
		me.attr('title',v+'\n'+hex2rgba(v, +me.next(':range').val()))

	}).on('keydown',function(e){
		var k=e.keyCode,act=document.activeElement, acti=act.tagName.toLowerCase(),isTxt=acti=='textarea', isBody=acti=='body';

		if(e.ctrlKey){
			if(isTxt){
				if(k==83){$('#'+($(act).attr('data-saveas')||'')).click();return false}
				if(k==69){act.value=''; return false}
			}

		}


	}).on('click', '#tileTool .sbsTbl td, #tileTool .sbsTbl .td',function(e){
		sbsTbltd(this,e,'TextLaTeX');

	}).on('change','#tileTool :file:not([webkitdirectory])',function(e){
		var me=$(this), id=this.id||'',v=me.val(), p=me.parent(),sm=p.prevAll('summary'),c=sm.find(':checked').length,uI=me.nextAll('.urlImg').add(p.find('.urlImg')),


			cb=function(){
				loadCaps()
		};

		if(v){
			var files=this.files, fl=files.length;
			for(var i=0;i<fl;i++){
				var f=files[i], img=new Image(), s=f.size, ext=f.type.replace(/image[/]/,'').replace('x-icon','ico').replace('+xml','');


				if(/^image[/]/.test(f.type)){
					if(!s || weib){s='?KB'}else{
						s=s/1024;
						if(s>=1024){s=(s/1024).toFixed(1)+'MB'}else{s=s.toFixed(1)+'KB'}
					}
					if(/svg/.test(f.type)){
						var reader=new FileReader();
						reader.onload = function(event){
							var src = this.result;
							uI.val(' ').css('background','url('+src+') bottom right/contain no-repeat')
								.attr({'data-name':f.name,'data-no':0,'data-size':f.size,'data-sz':s,'data-ext':ext,'data-bg':src,'data-src':src});
							img.onload=function(){
								var w=this.width;
								var h=this.height;
								var s=w+'×'+h;
								$('.urlImg[data-bg="'+this.src+'"]').attr({'data-w':w,'data-h':h,'data-wxh':s});
								$(this).attr({'data-wxh':s, 'data-src':this.src});
								

							};
							img.src=src;
							loadCaps()
						};
						reader.readAsDataURL(f);
					}else{
						var src=(URL||webkitURL).createObjectURL(f);
						uI.val(' ').css('background','url('+src+') bottom right/contain no-repeat')
							.attr({'data-name':f.name,'data-no':0,'data-size':f.size,'data-sz':s,'data-ext':ext,'data-bg':src,'data-src':src});
						img.onload=function(){
							var w=this.width;
							var h=this.height;
							var s=w+'×'+h;
							$('.urlImg[data-bg="'+this.src+'"]').attr({'data-w':w,'data-h':h,'data-wxh':s});
							$(this).attr({'data-wxh':s, 'data-src':this.src});
							

						};
						img.src=src;
						
						loadCaps()
					}
				}else if(cap && $('#inFile').val()=='capcanvasAPI'){
					//console.log(f);
					scrn('canvasAPI');

				}
			}

		}else{

			uI.val('').css('background','none').removeAttr('data-bg data-src');
			cb();
		}

		e.stopPropagation();
	});



	$(document).on('click','legend,button,:button,:checkbox'+
		zlr(',#','Tiles W H S E cssTransOpt cssClip cssCut')+

		zlr3('#','fontCSS','span').replace(/span/g,' $&,')+
		'#shape img,#COLOR input:text,#tileTool :radio',function(){clk_popout(this)

	});



	toggleColor();
});





function cng_cap(obj){
	var me=$(obj), id=me.attr('id'), v=me.val();

	if(/^css/.test(id)||id=='capType'||id=='svgTexts'||id=='svgText'){cng_popout(obj); return}
	if(/scr[WH]$/.test(id)){
		var cvs=$('#caps')[0],w=+$('#scrW').val(),h=+$('#scrH').val();

		
		if(/allEraser/.test(L.drawShape)){
			cvs.width=w;
			cvs.height=h;
			
			if(typeof drawobj!='undefined' && typeof drawobj.repaint =='function'){
				drawobj.repaint();
			}else{
				scrn('eraser');
			}
		}
		if(/Crop/.test(L.drawShape)){
			scrn('Crop',ltwh([0,0,w,h]))
		}
	}

	if(id=='copyDir'){
		$('#copyTileOn').toggle(v.length>1)
	}




	var shpN=L.drawShapeNow||'unknown', isTxt=/Text/.test(shpN), sp=$('#'+shpN);

	if(id=='svgLine'){
		v=+v;
		$('#strkDash').val(['','10,5','15,5,4,5'][v]);
		$('#Dash').toggle(v>0);

		sp.find('[stroke-dasharray]').attr('stroke-dasharray',$('#strkDash').val());
		//$('#svgShape svg[id]').not('#svgTool svg').children().not('defs,.dash').attr('stroke-dasharray',['','5,1','3,1,1,1'][v]);
	}
	if(/svgArw/.test(id)){
		toggleSvg();
		var mk=/E/.test(id)?'end':'start';
		$('#svgLines svg'+(shpN?', #'+shpN+'[id*=ine]':'')).children('line, path').attr('marker-'+mk,function(){return 'url(#'+
			$(this).prevAll('defs').children('[id^=Arw'+id.substr(-1)+']').eq(+v).attr('id')+')'});
	}

	if(/^strk/.test(id)){
		id=id.substr(4);
		if(id=='Fill'){
			$('#Color details:eq(1)').toggle(v!='0');
			$('#Color details:lt(2)').find('.Grad').prop('checked',false).parent().nextAll().hide();
			toggleColorShpN();
		}

		if(id=='Dash'){sp.find('[stroke-dasharray]').attr('stroke-dasharray',v)}
		if(id=='DashOffset'){sp.find('[stroke-dashoffset]').attr('stroke-dashoffset',v)}
		if(id=='W'){sp.find('[stroke-width]').attr('stroke-width',v); if(isTxt){sp.css('border-width', v+'px')}}
		if(id=='R'){sp.find('[rx]').attr({rx:v}); if(isTxt){sp.css('border-radius', v+'px')}}
		if(id=='Ry'){sp.find('[ry]').attr({ry:v});}


		if(id=='LnJoin'){sp.find('[stroke-linejoin]').attr('stroke-linejoin',v)}
		if(id=='LnCap'){sp.find('[stroke-linecap]').attr('stroke-linecap',v)}
	}

	if(me.is('#Color :range')){
		me.next('.rngv').text(v);
		
	}
	
	if(/(Opa)?[FBS]GC/.test(id)){
		if(me.parent().next().find('.Grad').prop('checked')){return}
		
		if(/Opa[FB]GC/.test(id)){
			
			toggleColorShpN(+(id=='OpaBGC'),1);
		}else{
			toggleColor();
		}

		
		
		return
	}



	if(me.is('.GradStops')){
		var fb=me.parent().nextAll().last().attr('id')[0];
		$('#'+fb+'gcs').toggle(+v>2);

		 var stops=$('#'+fb+'gcs div'), sl=stops.length;
		 if(sl+2==+v){

		 }else{
			 if(sl+2<+v){
			 	 var ranc=RandomColor(+v-2-sl);
			 	 $('#'+fb+'gcs').append(concat('<div><input type=number class=Gradstop min=1 max=99 value=20 />% <input type=color value="'+
			 	 	 ranc,'" title="',ranc,'\n'+Arrf(hex2rgba, ranc)+'" /><input type=range class=Opa min=0 max=1 step=".1" value=1 />'+
			 	 		SC+'rngv title="'+gM('opa')+'">'+1+sc+dc).join(''));
			 }else if(sl+2>+v){
			 	 stops.slice(+v-2,sl).remove();
			 }
			 var Gs=$('#'+fb+'gcs .Gradstop'),Gsl=Gs.length,x=Math.ceil(100/(Gsl+2-1));
			 $('#'+fb+'gcs .Gradstop').each(function(i){
			 	 $(this).val(min([100,(i+1)*x]))
			 });
			 
		}

	}


	if(me.parents('#Color').length){
		toggleColor()
	}

	if(id=='tileFontCenter'){changeTextCSS()}

	if(id=='copyNum'){
		



	}


	if(me.is('select')){
		$('body')[0].tabIndex=0;
		$('body').focus();
	}
}



function clk_popout(obj){
	var me=$(obj), id=me.attr('id')||'', pa=me.parent(), pid=pa.attr('id'),  c=me.attr('class')||'';

	var shpN=L.drawShapeNow||'unknown', isTxt=/Text/.test(shpN);



//non id
	if(pid=='fontCSS'){
		var i=me.index(), txta=$('textarea#'+shpN);

		txta.toggleClass(ZLR('bold italic underline overline through')[i]);

		me.toggleClass('toggle');
		return;
	}

	if(me.is('legend')){
		me.siblings().toggle();
	}


	//id



	if(id=='color'){me.siblings().toggle()}





	if(/color\d/.test(id)){
		var colors=$('#FGC1,#FGC,#FGC2,#BGC1,#BGC,#BGC2,#SGC,#SGC1,#SGC2');	//$('#Color input[type=color]')
		if(id=='color5'){
			$('#Color :color').each(function(){var c=RandomColor();$(this).val(c).attr('title', c+'\n'+hex2rgba(c, +$(this).next().val()))});
	
		}else{
			colors.each(function(){var i=this.id, c='#'+Colors.split(';')[+id.replace('color','')].split(',')[/\d/.test(i)?(+i.substr(-1))*2-1:(/F/.test(i)?0:2)];
				$(this).val(c).attr('title', c+'\n'+hex2rgba(c, +$(this).next().val()))
			});
		}

		toggleColor();

	}


	if(id=='svgTextAdd'){
		textareaAdd($('#svgTextN').val(),'#textTXT>.editorText');
	}


	if(/^css/.test(id)){
		id=id.substr(3);
		var chk=me.prop('checked'), sp=$('#'+shpN), C='#Css', c='#css';



		if(id=='Matrix'){
			$(c+id+'3D').toggle(chk).nextAll().toggle(!chk);
		}

		if(id=='Clip'){

			$(C+id+',#WH1').toggle(chk);
			if(chk){
				cng_popout($(c+id+'T')[0]);
			}else{
				sp.attr('style', function(i,v){return v.replace(/clip:[^;]+/,'')});

			}
		}

		if(id=='Cut'){
			$(C+id).toggle(chk);
		}

		if(id=='TranStyle'){sp.css('-webkit-transform-style',chk?'preserve-3d':'flat')}
		if(id=='BackVisi'){sp.css('-webkit-backface-visibility',chk?'visible':'hidden')}
		if(id=='TransOpt'){me.toggleClass('toggle');$(C+id).toggle()}

		if(id=='DropShadow'){
			$(C+'Dropshadow, #WH4').toggle(chk);
			if(chk){
				cng_popout($(c+id+'X')[0]);
			}else{
				sp.css('-webkit-filter', function(i,v){
					return v.replace(/rgba?\([^\)]+\)/i,'').replace(/drop-shadow\([^\)]+\)/,'');
				}).filter('textarea').css('box-shadow','none');

			}
		}
	}


	if(id=='GOfx'){
		var v=$('#fxTxt').val().trim();
		if(v){
			var vA=v.split('\n'), cvs=$('#caps')[0], ct=cvs.getContext('2d');
			for(var i=0,n=vA.length;i<n;i++){
				var vi=vA[i].split(';'),B=vi[0],OXY=vi[1].split(/[, ]/g),C=vi[2]||RandomColor(),Opa=+(vi[3]||255),
				tlx=+OXY[0]+(+OXY[2]),tly=+OXY[1]+(+OXY[4]), xl=+OXY[3]-(+OXY[2]), yl=+OXY[5]-(+OXY[4]);
				C=/,/.test(C)?eval('['+C+']').concat(Opa):hex2rgba(C,Opa,1);
				//console.log(tlx,tly, xl, yl);
				var D=ct.getImageData(tlx,tly, xl, yl), Dd=D.data, Dl=Dd.length;
				for(var j=0;j<Dl;j+=4){
					var Dj=j/4, x=Dj%xl+(+OXY[2]), y=+OXY[5]-Math.floor(Dj/xl);
					//console.log(B,x,y);
					if(eval(B)){
					//	console.log(B,x,y);
					//	break;
					  Dd[j+0]=C[0];
					  Dd[j+1]=C[1];
					  Dd[j+2]=C[2];
					  Dd[j+3]=C[3];
					}
				 }
				ct.putImageData(D,tlx,tly);
				ct.save();
			}
		}
	}
	if(id=='GOcapctx'){
		var v=$('#capctxTxt').val().trim();
		if(v){
			var vA=v.split('\n'), cvs=$('#caps')[0], ct=cvs.getContext('2d');
			eval(v);
		}
	}
	if(id=='GOlatex'){
		var v=$('#TextLaTeX').val().trim(), shpNid=L.drawShapeNow||'unknown', shpN=$('#'+shpNid),fromTextarea,A=[100,200,300,200];

		if(!v && /Text/.test(shpNid)){
			v=shpN.val();
			fromTextarea=1;
			A=[shpN.css('left').replace(/\D/g,''),shpN.css('top').replace(/\D/g,''),100,100];
		}
		if(v){
			if(L.drawShape=='Pointer' && /Text/.test(shpNid)){
				
				fromTextarea=1;
				
			}
			
				$('#Caps').append(latexes(A));
				var lastlatex=$('.caplatex').last()[0];
				katex.render(kx(sub2n(v,1)), lastlatex, {
				    throwOnError: false,
				    displayMode: true
				});
				if(fromTextarea){
					shpN.remove();
				}
				L.drawShapeNow=lastlatex.id;
			
		}
	}
	
	
	
}


function flt(o,strokeORfill){var x=['stroke','fill'][strokeORfill||0];return o.filter('['+x+']').not('['+x+'=none],['+x+'^=url]')}

function toggleColor(){
	var arr=ZLR('FGC FGC1 FGC2 BGC BGC1 BGC2');
	for(var i=arr.length-1;i>-1;i--){
		L[arr[i]]=$('#'+arr[i]).val() || L[arr[i]];
	}


	if(L.drawShape=='allEraser'){
		if(typeof drawobj!='undefined' && typeof drawobj.repaint =='function'){
			drawobj.repaint();
		}else{
			scrn('eraser');
		}
		return
	}
	refreshFilter();

}
function hoverIt(t){
	$(t).css('background-image',bgfrom +L.BGC1+ '),color-stop(.5,'+L.BGC+'), to(' +L.BGC2+ '))');
}
function hoverItOff(t,from,to){
	$(t).css('background-image',bgfrom +L['BGC'+from]+ '), to(' +L['BGC'+to]+ '))');
}



function cng_popout(obj){
	var me=$(obj), id=me.attr('id')||'', v=me.val(), pa=me.parent(), pid=pa.attr('id'), c=me.attr('class')||'';
	var isCap=1;

	if(/^capType(Tile)?$/.test(id)){me.next().toggle(v=='jpeg'); L[id]=v}



	if(id=='tileFontCenter'){changeTextCSS()}



	if(id=='svgTexts'){L[id]=v;
		$('#svgTextM').html(Options(v.split('')).join(''));
	}
	if(id=='svgTextN'){$('#svgTextAdd').click()}
	if(id=='svgText'){
		var sn=$('#'+id+'N'), sd=$('#'+id+'Details');
		$('#'+id+'M').toggle(v=='0');
		if(v=='0'){sn.add(sd.parent()).hide()}else{

			sn.html('');

			v=+v;
			var sArr=['0,0','10102,30;9451,20;12881,15;12977,15;37,1;8240,2;9450,1;48,10;65296,10;9312,60;8304,1;185,1;178,2;8308,6;8320,10;188,3;8531,13',
				'12832,10;12928,10;12992,12;13280,31;13144,25;12690,14;12842,26;12938,39',
				'8544,16;8560,16;913,25;945,25',
				'9372,78;65,26;97,26;65313,26;65345,26;170,1;8319,1;8336,5',
				'161,30;8448,80;8352,26;9216,37;12880,1;12927,1;13004,4;13169,111;13311,1;65504,15',
				'33,15;58,7;91,6;123,4;10629,2;12289,32;12317,4;65040,10;65072,1;65104,8;65119,2;65128,4;65281,15;65306,7;65339,6;65371,11',
				'8592,112;9166,1;9735,2;10132,43;10226,14;10496,124;11012,10;65513,4',
				'161,30;8531,13;8208,24;8240,26;8273,1;8286,1;8314,6;8330,11;8704,242;8960,123;9150,17;9178,2;10620,388;11381,2',
				'8413,4;9472,150;9632,10;9642,8;9650,10;9660,10;9670,10;9680,10;9690,8;9698,10;9708,4;12272,12',
				'8576,5;9280,11;9728,112;9985,103;21325,1;21328,1;22221,1'
				];
			var s=[], s2=[], tArr=sArr[v].split(';');
			for(var i=0;i<tArr.length;i++){

				var arr=tArr[i].split(','), arr0=+arr[0], arrN=+arr[1];

				for(k=0;k<arrN;k++){
					var t=arr0+k;
					s.push(t);
					if(v==1 && (arrN>=10 && arrN%10==0 && (k+1)%10==0 || arr0==12881 && k==9 ||arr0==12977 && (k==4 || k==14)) ||
						v>1 && k==arrN-1 ||
						v==3 && (k+1)%10==0 ||
						v==4 && (k+1)%26==0
						){
						s.push(13);
					}
					s2.push(Options(String.fromCharCode(t)));
				}

			}

			s=fCC(s);
			if(v==4){
				var f2=function(t){
					var s1='',s2='';
					for(var j=0;j<2;j++){
						var Ltn=Latin(t,!j).join('');
						s1+=Ltn+'\n';
						s2+=Options(Ltn.split('')).join('');
					}
					return [s1,s2]
				}
				var Ltn=Arrf(f2,entity);
				s+=Arri(Ltn,0).join('');
				s2=s2.concat(Arri(Ltn,1));
			}

			sd.val(s);
			sn.html(s2.join(''));
			sn.add(sd.parent()).show();
		}
	}








	if(id=='inFile'){
		
		if(v=='capcanvasAPI'){
			$('#upCap').removeAttr('accept');
			$('#urlCap').attr('placeholder','canvas API');
		}else{
			$('#upCap').attr('accept','image/*');
			$('#urlCap').attr('placeholder',gM('urlImg'));
		}
		
	}

	if(/^css/.test(id)){
		id=id.substr(3);
		var C='#Css', c='#css', cS=c+'Scale', cC=c+'Clip', cK=c+'Skew',cF=c+'Fixed';
		var shpN=L.drawShapeNow||'unknown', isTxt=/Text/.test(shpN), sp=$('#'+shpN);


		var pid=me.prevAll('span[id]').attr('id');
		if(/DropShadow/.test(id)){pid='dropShadow'}



		if(me.parents(C+'Filter').length){
			var v0, dsv;
			sp.css('-webkit-filter', function(i,s){
				var v1='';
				pid=pid.replace('bright','brightness').replace('opa','opacity').replace('R','-r').replace('S','-s');
				v0=s.replace('none','');
				if(/-s/.test(pid)){
					var ds=c+'DropShadow';
					$('#WH4').attr('data-shadow', '0,0,0');
					if($(ds).prop('checked') && $(C+'Dropshadow > input').filter(function(){return $(this).val()!='0'}).length){
						var XYBC=[$(ds+'X').val(), $(ds+'Y').val(), $(ds+'Blur').val(), hex2rgba($(ds+'Color').val(), $(ds+'Opac').val())];
						v1=XYBC.join('px ');
						dsv=v1;
						v0=v0.replace(/rgba?\([^\)]+\)/i,'');
						$('#WH4').attr('data-shadow', XYBC.slice(0,3).join(','));
					}
					$(ds+'Opac').next().text($(ds+'Opac').val())
				}else{
					if(me.attr('value')!=v){
						v1=v+(me.attr('title')||'');
					}
					me.next().text(v);
				}
				var reg=new RegExp(pid+'\\([^\\)]+\\)','gi');
				if(v1){
					v1=pid+'('+v1+')';
					if(v0.indexOf(pid)<0){
						return (v0+' '+v1).trim();
					}else{
						return v0.replace(reg, v1);
					}
				}else{
					return v0.replace(reg, '')||'none'
				}
			}).filter('textarea').css('box-shadow',dsv);

		}else{
			var tf='-webkit-transform', pp='-webkit-perspective';

			if(/^[XY]$/.test(id)){sp.css(id=='X'?'left':'top', v+'px')}
			if(id=='Z'){sp.css('z-index',v)}

			if(id=='Perspec'){sp.css(pp,v)}
			if(/Orig/.test(id)){//sp.css((/P/.test(id)?pp:tf)+'-origin',v)
				sp.css((/P/.test(id)?pp:tf).replace(/.+-/,'')+'-origin',v)
			/*
				sp.css((/P/.test(id)?pp:tf)+'-origin-x',v.split(' ')[0]);
				sp.css((/P/.test(id)?pp:tf)+'-origin-y',v.split(' ')[1]||'center');
				sp.css((/P/.test(id)?pp:tf)+'-origin-z',v.split(' ')[2]||0);
			*/
			}


			if(me.parent(C+'Clip').length){
				var cT=Number($(cC+'T').val()), cR=Number($(cC+'R').val()), cB=Number($(cC+'B').val()), cL=Number($(cC+'L').val());

				sp.css('clip', 'rect('+[cT,cR,cB,cL].join('px,')+'px)');

			}else if(me.parents(C+'Transform').length){
				var v1='';

				if(id=='Matrix3d'){
					var mal=v.split(',').length;
					if(mal>5){v1='matrix'+(mal<16?'':'3d')+'('+v+')'}
				}else{
					var cR=c+'Rotate', r='#rotate', f='#flip', ro=$('input[name=rotate]:checked'), rov=(ro.val()||'').substr(9), imgs=$('#list img, #origin img');
					$(C+'Rotate6 img').removeClass('toggle');
					imgs.removeClass('flipx flipy rotate1 rotate2 rotate3');

					if(rov=='3d'){
						v1=$(cR+rov).val();
						if(v1){v1='rotate3d('+v1+')'}
					}else{

						var vArr=[], n0=0;
						$(r+' ~ input').each(function(){
							var v=$(this).val();
							if(v!='0'){vArr.push('rotate'+this.id.substr(-1)+'('+v+'deg)')}else{n0+=1}
						});

						v1=vArr.join(' ');

						if(n0>2){
							$(f+'0').addClass('toggle');

						}else if(n0>1){
							var vX=$(cR+'X').val(), vY=$(cR+'Y').val(), vZ=$(cR+'Z').val(), vv;
							if(vX=='180'||vY=='180'){
								vv=vX=='180'?'x':'y';
								$(f+vv).addClass('toggle');
								imgs.addClass((f+vv).substr(1));
							}
							vZ=Number(vZ);
							if(vZ%90==0 && vZ!=0){
								vZ=vZ/90;
								if(vZ==-1){vZ=3}
								$('#WH3').attr('data-rotate',vZ);
								$(r+vZ).addClass('toggle');
								imgs.addClass((r+vZ).substr(1));
								$('#WH3').attr('title', gM('rotate'+vZ)+'➜ ');
							}
						}
					}

					if($('#translate ~ input').filter(function(){return $(this).val()!='0'}).length){
						v1+=' translate3d('+$(c+'TranslateX').val()+'px,'+$(c+'TranslateY').val()+'px,'+$(c+'TranslateZ').val()+'px)'
					}

					if($('#skew ~ input').filter(function(){return $(this).val()!='0'}).length){
						v1+=' skew('+$(cK+'X').val()+'deg,'+$(cK+'Y').val()+'deg)'
					}

					if(/Fixed|Scale/.test(id)){
						id=id.substr(5);
						var pr=me.prev();
						var fw=$('#fW').is('.bold'),fh=$('#fH').is('.bold'),fwh=$('#fWH').is('.bold'),cW=$(cF+'W'),cH=$(cF+'H'),cWH=$(cF+'WH'),cX=$(cS+'X'),cY=$(cS+'Y'),
							wh=($('#editImg').attr('data-wxh')||'x').split('x'),w=+wh[0],h=+wh[1],v=+me.val();
						if(pr.is('.bold') || /[XY]/.test(id)){
							if(id=='W'){
								if(fh){
									cWH.val(fixed4((+cW.val())/(+cH.val())));
								}
								if(fwh){
									cH.val(fixed4(v/(+cWH.val())));
									cY.val(fixed4(v/(+cWH.val())/h));
								}
								cX.val(fixed4(v/w));
							}
							if(id=='H'){
								if(fw){
									cWH.val(fixed4((+cW.val())/(+cH.val())));
								}
								if(fwh){
									cW.val(fixed4(v*(+cWH.val())));
									cX.val(fixed4(v*(+cWH.val())/w));
								}
								cY.val(fixed4(v/h));
							}
							if(id=='WH'){
								if(fw){
									cH.val(fixed4((+cW.val())/v));
									cY.val(fixed4((+cW.val())/v/h));
								}else if(fh){
									cW.val(fixed4(v*(+cH.val())));
									cX.val(fixed4(v*(+cH.val())/w));
								}else{
									cY.val(fixed4((+cW.val())/v/h));
								}
							}
							if(id=='X'){
								cW.val(fixed4(v*w)).attr('disabled',true).prev().removeClass('bold');
								if(fwh){
									cH.val(fixed4(v*w/(+cWH.val())));
									cY.val(fixed4(v*w/(+cWH.val())/h));
								}else{
									cWH.val(fixed4(v*w/(+cH.val())));
								}
							}
							if(id=='Y'){
								cH.val(fixed4(v*h)).attr('disabled',true).prev().removeClass('bold');
								if(fwh){
									cW.val(fixed4(v*h*(+cWH.val())));
									cX.val(fixed4(v*h*(+cWH.val())/w));
								}else{
									cWH.val(fixed4((+cW.val())/v/h));
								}
								
							}
							if(/[XY]/.test(id) && +cX.val()==1 && +cY.val()==1){
								cW.val(w);
								cH.val(h);
								cWH.val(fixed4(w/h));
								$(cF+' .bold').removeClass('bold');
								$(cF+' input').attr('disabled',true)
								
							}
							
						}
						
					}
					if($('#scale ~ input').filter(function(){return $(this).val()!='1'}).length){
						var SX=Number($(cS+'X').val()), SY=Number($(cS+'Y').val()), SXY=[SX,SY].join(',');
						v1+=' scale3d('+SXY+','+$(cS+'Z').val()+')';
						$('#WH2').attr('data-scale',SXY);
					}

				}
				sp.css(tf,v1.trim()||'none');
			}

		}


	}

	if(me.is('select, :range, :checkbox')){
		bodyFocus()
	}

}

function fixed4(d){
	return d.toFixed(4).replace(/(\.[^0]*)0+/,'$1').replace(/\.$/,'')
}