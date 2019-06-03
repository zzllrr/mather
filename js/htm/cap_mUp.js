/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */


function mUp(e,Last){

	var eos=e.originalEvent.srcElement, act=eos.tagName;
	if(act!='CANVAS'){e.stopPropagation()}

	var shp=L.drawShape, shp2=/Crop/.test(shp), shp3=/Paral|Trape|(lineangle|Triangon)[HV]|Line3YRight|cub/.test(shp), shpNid=L.drawShapeNow||'unknown', shpN=$('#'+shpNid),
		isSq=/Sq/.test(shp),hv=/H/.test(shp), isTri=/Tria/.test(shp), isLn=/Line/.test(shp), isln=/line/i.test(shp), isGONlike=/Rect|gon|Note|arrow/i.test(shp) && !/(rect|ellipse)Note/.test(shp),

		isGON=isGONlike && !/A|Heart|QIGonRnd|(fan|Moon|Star)Note/.test(shp),
		isGON2=isGON || /Ellipse(Sq)?$/.test(shp), isGON3=isGON2 || /(fan|Moon|Star)Note/.test(shp),
		isgon=isGON && /LRect|gon/i.test(shp), istrigon=/Triangon/.test(shp),
		
		
		X=document.documentElement.scrollLeft+e.clientX, Y=document.documentElement.scrollTop+e.clientY,
		pos=shpN.position(),lt=pos?pos.left:0,tp=pos?pos.top:0, zi=[2000],Z, chd=shpN.children(), chdm=chd.filter('.main'), chdmp=chdm.attr('points'), chdmd=chdm.attr('d'),
		w0=Math.abs(X-(+L.X0)), h0=Math.abs(Y-(+L.Y0)), sw=+$('#strkW').val(), d=Math.ceil(sw/2),
		WD=shpN.width(),HT=shpN.height(), WgH=WD>HT, WD2=WD/2,HT2=HT/2, WH2=(WD+HT)/2, WH_2=Math.abs((WD-HT)/2);


	var drawLast=function(){
		var shpNid=L.drawShapeNow||'unknown', shpN=$('#'+shpNid);

		
		if(oOn('SymmetryAxis')){
			var m1='M'+sw+' '+sw+'H'+(WD+40), m2='M'+sw+' '+sw+'V'+(HT+40), m3='M'+sw+' '+sw+'L'+(WD+40)+' '+(HT+40)+'M'+sw+' '+(HT+40)+'L'+(WD+40)+' '+sw,
				
			s1='<svg class=ex'+idStyle('',[lt-20,tp+HT2-d*(isln?0:1)+(istrigon?-d:0), WD+40,sw*2],shpNid+'SymmetryAxis',Z)+'">'+shps('','dash',m1)+'</svg>',
			s2='<svg class=ex'+idStyle('',[lt+WD2-d*(isln?0:1)+(istrigon?-d:0),tp-20, sw*2,HT+40],shpNid+'SymmetryAxis',Z+1)+'">'+shps('','dash',m2)+'</svg>',
			s3='<svg class=ex'+idStyle('',[lt-20,tp-20, WD+40,HT+40],shpNid+'SymmetryAxis',Z+2)+'">'+shps('','dash',m3)+'</svg>';
			if(/Ellips|LRect|diagon/.test(shp)){
				shpN.after(s1+s2+(isSq?s3:''));
			}
			if(/((con|cylinder)oid.?|fanNote)[HV]|Iso|MoonNote/.test(shp)){
				var p=(chdmp||chdmd).split(' ');
				if(/TriangonIso/.test(shp)){
					hv=p[0]==p[4];
				}
				if(/TrapegonIso/.test(shp)){
					hv=p[0]==p[2];
				}
				
				if(/MoonNote/.test(shp)){
					hv=p[1]==p[p.length-3];
					
				}
				shpN.after(hv?s1:s2);
			}
			
		}


		if(oOn('CircumRectangle')){
			var m1=['x='+sw,'y='+sw,'width='+(WD),'height='+(HT)].join(' '),
			s1='<svg class=ex'+idStyle('',[lt-sw,tp-sw,WD+sw*2,HT+sw*2],shpNid+'CircumRectangle',Z+6)+'">'+shps('rect','main',m1)+'</svg>';

			if(isGON3){
				shpN.after(s1);
			}

		}

		if(oOn('CircumCircle')){
			var r1=Math.ceil(max([WD,HT])/2), r2=Math.ceil(Math.hypot(WD,HT)/2),
				m1=['rx='+r1,'ry='+r1,'cx='+(r1+d),'cy='+(r1+d)].join(' '), m2=['rx='+r2,'ry='+r2,'cx='+(r2+d),'cy='+(r2+d)].join(' '),
			s1='<svg class=ex'+idStyle('',[lt+WD2-r1-d,tp+HT2-r1-d, r1*2+sw*2,r1*2+sw*2],shpNid+'CircumCircle',Z+10)+'">'+shps('ellipse','main',m1)+'</svg>',
			s2='<svg class=ex'+idStyle('',[lt+WD2-r2-d,tp+HT2-r2-d, r2*2+sw*2,r2*2+sw*2],shpNid+'CircumCircle',Z+11)+'">'+shps('ellipse','main',m2)+'</svg>';

			if(/Ellips|diagon/.test(shp)){
				shpN.after(s1);
			}
			if(/LRect|Paralgon/.test(shp)){
				shpN.after(s2);
			}
			
			if(/TriangonRight/.test(shp)){
				var isx=/tx/.test(shp), g=gon(chdmp,'Right'+(isx?'x':'t')+'VC');
				r1=g[6];
				m1=['rx='+r1,'ry='+r1,'cx='+(r1+d),'cy='+(r1+d)].join(' ');
				s1='<svg class=ex'+idStyle('',[lt+g[4]-r1-d,tp+g[5]-r1-d, r1*2+sw*2,r1*2+sw*2],shpNid+'CircumCircle',Z+10)+'">'+shps('ellipse','main',m1)+'</svg>';
				shpN.after(s1);
			}
			
		}
		
		if(oOn('Incircle')){
			var r1=Math.floor(min([WD,HT])/2)-d, r2=Math.floor(WD*HT/Math.hypot(WD,HT)/2)-d,
				m1=['rx='+r1,'ry='+r1,'cx='+(r1+d),'cy='+(r1+d)].join(' '), m2=['rx='+r2,'ry='+r2,'cx='+(r2+d),'cy='+(r2+d)].join(' '),
			s1='<svg class=ex'+idStyle('',[lt+WD2-r1-d,tp+HT2-r1-d, r1*2+sw*2,r1*2+sw*2],shpNid+'Incircle',Z+15)+'">'+shps('ellipse','main',m1)+'</svg>',
			s2='<svg class=ex'+idStyle('',[lt+WD2-r2-d,tp+HT2-r2-d, r2*2+sw*2,r2*2+sw*2],shpNid+'Incircle',Z+16)+'">'+shps('ellipse','main',m2)+'</svg>';

			if(/Ellips|LRect|Paralgon/.test(shp)){

				shpN.after(s1);
			}
			if(/diagon/.test(shp)){
				shpN.after(s2);
			}
			if(/Triangon/.test(shp)){
				var g=gon(chdmp,'Incircle');
				r1=g[2];
				m1=['rx='+r1,'ry='+r1,'cx='+(r1+d),'cy='+(r1+d)].join(' ');
				s1='<svg class=ex'+idStyle('',[lt+g[0]-r1-d,tp+g[1]-r1-d, r1*2+sw*2,r1*2+sw*2],shpNid+'Incircle',Z+17)+'">'+shps('ellipse','main',m1)+'</svg>';
				shpN.after(s1);
			}
		}
		
		
		if(oOn('Grid')){
			var Gs=$('#Gridon').parent().nextAll('input'),Gx=+Gs.eq(0).val(),Gy=+Gs.eq(1).val(),Gz=+Gs.eq(2).val(),m1='',m2='';
			if(/Ellips/.test(shp)){
				for(var i=0;i<Gx;i++){
					m1+=shps('ellipse','fillnone main','rx='+(WD2-sw)+' ry='+Math.floor((i+1)*(HT2-sw)/(Gx+1))+' cx='+WD2+' cy='+HT2)
				}

				for(var i=0;i<Gy;i++){
					m2+=shps('ellipse','fillnone main','ry='+(HT2-sw)+' rx='+Math.floor((i+1)*(WD2-sw)/(Gy+1))+' cx='+WD2+' cy='+HT2)
				}
				shpN.after('<svg class=ex'+idStyle('',[lt,tp,WD,HT],shpNid+'Grid',Z+20)+'">'+m1+'</svg>'+
						   '<svg class=ex'+idStyle('',[lt,tp,WD,HT],shpNid+'Grid',Z+21)+'">'+m2+'</svg>');
			}
			
			if(/[LA]Rect/.test(shp)){
				var dx=WD/(Gx+1), dy=HT/(Gy+1), A=[];
				for(var i=0;i<Gx;i++){
					A.push('M',parseInt(dx*(i+1)),0,'V',HT)
				}
				for(var i=0;i<Gy;i++){
					A.push('M',0,parseInt(dy*(i+1)),'H',WD)
				}
				shpN.after('<svg class=ex'+idStyle('',[lt,tp,WD,HT],shpNid+'Grid',Z+20)+'">'+shps('','fillnone main',A.join(' '))+'</svg>');
			}
			
		}


		if(oOn('MidPointNest')){
			var Ms=+$('#MidPointNeston').parent().next().val(),m='';
			if(/LRect/.test(shp)){
				var lx=+chdm.attr('x'), ly=+chdm.attr('y'), lw=+chdm.attr('width'), lh=+chdm.attr('height');
				var mA=[lx,ly, lx+lw,ly, lx+lw,ly+lh, lx,ly+lh];
			}else{
				var mA=gon(chdmp||chdmd);
			}
		

			for(var i=0;i<Ms;i++){
				mA=gon(mA,'MidPoint');
				m+=shps('polygon','fillnone main',mA.join(' '))
			}

			shpN.after('<svg class=ex'+idStyle('',[lt,tp,WD,HT],shpNid+'MidPointNest',Z+25)+'">'+m+'</svg>');

		}

		if(oOn('PerpendicularFootNest')){
			var Ms=+$('#PerpendicularFootNeston').parent().next().val(),m='';

			var mA=gon(chdmp||chdmd);

			for(var i=0;i<Ms;i++){
				mA=gon(mA,'PerpendicularFoot');
				m+=shps('polygon','fillnone main',mA.join(' '))
			}

			shpN.after('<svg class=ex'+idStyle('',[lt,tp,WD,HT],shpNid+'PerpendicularFootNest',Z+26)+'">'+m+'</svg>');

		}


		if(oOn('Nest')){

			var str='', nestN=+$('#Neston').parent().next().val(), w=+$('#NestMarginon').parent().next().val(), h=+$('#NestMarginon').parent().next().next().val(),
				isMargin=$('#NestMarginon').prop('checked');

/*
			if(isSq && isMargin){
				w=+$('#copyNum').val();
				h=w;
			}
*/

			if(/Rect|Ellipse/.test(shp)){
				
				if(!isMargin){
					w=parseInt((WD-(nestN+2)*sw)/(nestN+1));
					h=parseInt((HT-(nestN+2)*sw)/(nestN+1));
				}else{
					nestN=min([parseInt(WD/(w+sw)),parseInt(HT/(h+sw))]);
					
				}
				for(var i=1;i<=nestN;i++){
					var wi=WD-(w+sw)*i-sw, hi=HT-(h+sw)*i-sw, wi2=wi/2, hi2=hi/2;
					if(/Rect/.test(shp)){
						var rx=+chdm.attr('rx')||0, ry=+chdm.attr('ry')||0;
						
						str+='<svg class=ex'+idStyle('',[lt+(w+sw)*i/2,tp+(h+sw)*i/2,wi+sw*2,hi+sw*2],shpNid+'Nest',Z+30+i)+'">'+shps('rect','main',
							'x="'+sw+'" y="'+sw+'" '+
							(rx?'rx="'+parseInt(rx*(nestN+1-i)/(nestN+1))+'" ':'')+
							(ry?'ry="'+parseInt(ry*(nestN+1-i)/(nestN+1))+'" ':'')+
							'width="'+(wi-d)+'" height="'+(hi-d)+'"')+'</svg>'
					}
					if(/Ellipse/.test(shp)){
						if(wi2<0 || hi2<0){break}
						str+='<svg class=ex'+idStyle('',[lt+(w+sw)*i/2,tp+(h+sw)*i/2,wi+sw*2,hi+sw*2],shpNid+'Nest',Z+30+i)+'">'+shps('ellipse','main',
							'cx="'+wi2+'" cy="'+hi2+'" '+
							'rx="'+(wi2-d)+'" ry="'+(hi2-d)+'"')+'</svg>'
					}
				}
				
			}
			
			if(/gon|Note|arrow/i.test(shp)){

				str=Arrf(function(x){return '<svg class=ex'+idStyle('',[lt,tp,WD,HT],shpNid+'Nest',Z+30)+'">'+shps(/A|Note|arrow|Gon/.test(shp)?'':'polygon','main',
							x.join(' '))+'</svg>'
					}, gon(chdmp||chdmd,'Nest',isMargin?[w,h]:nestN)).join('')
			}

			shpN.after(str);
			
		}


		var chds=$('#'+(L.drawShapeNow||'unknown')).children().not('defs, .backvisi, .main');
		chds.filter('.dash').attr('fill-opacity',0.8);
		chds.not('.dash').attr('fill-opacity',0.7);
		chds.filter('.Equatorx:not(.dash), .Equatorx:not(.dash)').attr('fill-opacity',0.6);
		
		if(/Crop|Rect|Grid/.test(shp)){
			$('#svgShape svg[id]').eq(0).mouseout()
		}
		

		if(oOn('RandomColors')){
			//RndColors($('#'+(L.drawShapeNow||'unknown')).children());
		//	RndColors($('#'+(L.drawShapeNow||'unknown')));
			RndColors($('#'+(L.drawShapeNow||'unknown')).nextAll('[id^='+(L.drawShapeNow||'unknown')+']'));
		}		
		
		
	};
	
	
	
	
	if(L.drawEnd=='no'){
		if(/Poly/.test(shp)){
			if(w0<3 && h0<3){
				return;
			}

			L.X0=X;
			L.Y0=Y;
			mDn(e);
			return;
			
		}else if(shp3){
			if(L.drawEnd2==''){
				L.drawEnd2='no';

				if(w0<=sw && h0<=sw){

					L.X0=X;
					L.Y0=Y;

					L.drawEnd2='';
					
					mMv(e);
					return;
					
				}

				
				if(isSq){
					var m=max([w0,h0]);
					L.X1=+L.X0+(X>+L.X0?1:-1)*m;
					L.Y1=+L.Y0+(Y>+L.Y0?1:-1)*m;

				}else{
					
					L.X1=X;
					L.Y1=Y;
				}

				
			}else{
				L.drawEnd2='';
				L.drawEnd='';
			}


		}else{
			
			if(shp2){
				L.drawEnd='';
				
				
			}else{
				if(L.drawEnd2==''){
					L.drawEnd2='no';
					
				}else{
					L.drawEnd2='';
					L.drawEnd='';
				}
			}
			$('#Caps').children('svg,textarea,span').each(function(){zi.push(+$(this).css('z-index')||2000)});
			Z=max(zi)+1;

			if(/Crop/.test(shp)){
				
				if(w0<=sw && h0<=sw){

					L.X0=X;
					L.Y0=Y;

					L.drawEnd2='';
					
					mMv(e);
					return;
					
				}
				
				var cvs=$('#caps')[0];
				scrn('Crop',ltwh([lt+1,tp+1,WD-2,HT-2]));

				shpN.add('#caps ~ svg[id^=Crop]').remove();

				if(cvs.width+$('#tileTool').width()>$(window).width()){
					$('#tileTool').fadeOut();
					CapsTip();
				}else{
					$('#tileTool').fadeIn();
				}
			}else if(/Grid|(rect|ellipse)Note/.test(shp)){
				
				
				
				var txta=shpN.attr('data-txta');
				if(!txta){return}
				var tA=txta.split(','), r=+$('#gridR').val(),c=+$('#gridC').val(),sw=+$('#strkW').val();


				if(/Grid/.test(shp)){
					var w=parseInt((+tA[2]-(c+1)*sw)/c),h=parseInt((+tA[3]-(r+1)*sw)/r),m='',str='';
					
					for(var i=0;i<r;i++){
						for(var j=0;j<c;j++){
							var mx=(sw+w)*j,my=(sw+h)*i,ta=[+tA[0]+sw+mx,+tA[1]+sw+my,w-sw/4,h-sw/4];
							if(i==0 && j>0){
								m+='M'+parseInt(mx+sw/2)+' 0 V'+tA[3]+' ';
							}
							if(j==0 && i>0){
								m+='M0 '+parseInt(my+sw/2)+' H'+tA[2]+' ';
							}
							str+=textareas(ta);
						}
					}
					
					str+='<svg'+idStyle('',tA,'svg',Z)+'"><path d="'+m+'"'+strks()+'></path></svg>';
					shpN.after(str);

				}else if(/(rect|ellipse)Note/.test(shp)){
					shpN.after(textareas(tA));
				}
				if(+$('#svgText').val()){$('#svgTextN').val($('#svgTextN option:selected').next().val())}
				

				$('#Pointer').click();



			}
		}

		if(L.drawEnd2=='' && L.drawEnd==''){
			drawLast();
		}
		return
	}else{
		if(shp=='Pointer'){
			L.drawMove='';
			
			
			
			if(shpN.length<1){
				
				var offX=X-(+L.X0), offY=Y-(+L.Y0);

				$('#Ox').val(function(i,v){return v-offX});
				$('#Oy').val(function(i,v){return v-offY})
				if(offX||offY){
					$('#Oy').change();
				}
				
			}
		}
		if(shp=='Eraser'){
			var eD=$('#eraserDir').val(), st='svg,textarea,span.caplatex',me=$(eos).closest(st);
			if(eD && eD.length){
				var eDT=eD.join(''),po=me.position(),pl=po.left,pt=po.top,z=+me.css('z-index');
				if(/[01]/.test(eDT)){
					me.siblings(st).filter(function(){var po1=$(this).position(),pl1=po1.left,pt1=po1.top; return pt1==pt && (/01/.test(eDT) || /0/.test(eDT) && pl1<pl || /1/.test(eDT) && pl1>pl) }).remove();
				}
				if(/[23]/.test(eDT)){
					me.siblings(st).filter(function(){var po1=$(this).position(),pl1=po1.left,pt1=po1.top; return pl1==pl && (/23/.test(eDT) || /2/.test(eDT) && pt1<pt || /3/.test(eDT) && pt1>pt) }).remove();
				}
				if(/[45]/.test(eDT)){
					me.siblings(st).filter(function(){var po1=$(this).position(),pl1=po1.left,pt1=po1.top; return pt1<pt && (/45/.test(eDT) || /4/.test(eDT) && pl1<pl || /5/.test(eDT) && pl1>pl) }).remove();
				}
				if(/[67]/.test(eDT)){
					me.siblings(st).filter(function(){var po1=$(this).position(),pl1=po1.left,pt1=po1.top; return pt1>pt && (/67/.test(eDT) || /6/.test(eDT) && pl1<pl || /7/.test(eDT) && pl1>pl) }).remove();
				}
				if(/[89]/.test(eDT)){
					me.siblings(st).filter(function(){var z1=+$(this).css('z-index'); return z1>z && /8/.test(eDT) || z1<z && /9/.test(eDT) }).remove();
				}
			}else{
				me.remove();
			}
		}
		if(shp=='Copy'){
			L.drawCopy=$(eos).closest('svg,textarea,span.caplatex').attr('id');
			drawCopy();
			$('#Copy').click()
		}
		if(Last){drawLast();}
	}


}