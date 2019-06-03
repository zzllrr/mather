/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

function mDn(e){

	var eos=e.originalEvent.srcElement, act=eos.tagName, DEG='';

	if(act!='CANVAS'){e.stopPropagation()}
	var X=document.documentElement.scrollLeft+e.clientX, Y=document.documentElement.scrollTop+e.clientY;
	L.X=X;
	L.Y=Y;


	var shp=L.drawShape, shp2=/Crop/.test(shp), shp3=/Paral|Trape|(lineangle|Triangon)[HV]|Line3YRight|cub/.test(shp);
	if(L.drawEnd=='no'){
		if(/Poly/.test(shp)){
		//	console.log(L.drawEnd, L.drawEnd2);

			$('#Caps svg:last').children('.main').attr('d',function(i,v){
				var vv=v.replace(/(\d+ \d+) \1(z)?/,'$1$2');
				return /Gon/.test(shp)?vv.replace(/\d+ \d+z/,'$& $&').replace('z ',' '):vv.replace(/\d+ \d+$/,'$& $&');
			});
			
			L.X0=X;
			L.Y0=Y;

		}else if(shp3){

			if(L.drawEnd2==''){

			}else{
				L.drawEnd2='';
				L.drawEnd='';
				mUp(e,1);
			}

		}else{
			if(L.drawEnd2==''){
				L.drawEnd2='no';
			}else{
				mUp(e);
			}
		}

	}else{
		var isTxt=/Text/.test(shp);
		//$('#svgTexts').toggle(isTxt);
		if(/Pointer/.test(shp)){
			var id=$(eos).closest('svg,textarea,span').attr('id');
			
			if(!id){
			//if(shpN.length<1){
				
				L.drawMove='yes';
			}
			L.X0=X;
			L.Y0=Y;
			
			
			if(!id){return}

			L.drawShapeNow=id;
			tileToolCap(id, true);
			L.drawMove='yes';
			/*
			L.X0=X;
			L.Y0=Y;
			*/
			return;
		}
		if(/Eraser|Copy/.test(shp) || /textarea|span/.test(act.toLowerCase())){return}

		var tim=Time.now5(), shpN=shp+tim, s_='stroke-', s='#strk', sw=+$(s+'W').val(), d=Math.ceil(sw/2), r=+$(s+'R').val(), ry=+$(s+'Ry').val(), WD=1+sw, HT=1+sw;


		if(isTxt){var fS=max([25,+$('#fontSize').val()+10]);WD=fS;HT=fS}
		var sty=idStyle(shpN,[X,Y,WD,HT]);

		L.X0=X;
		L.Y0=Y;


		var lnJoin=$(s+'LnJoin').val(), nv=+$('#svgText').val(), rndColor=$('#RandomColorson').prop('checked'),
			fg=rndColor?RandomColor():$('#FGC').val(), bg=rndColor?RandomColor():$('#BGC').val(), fgOpa=$('#OpaFGC').val(), bgOpa=$('#OpaBGC').val();

		strk=strks(/Crop/.test(shp)?shp:'',fg,bg);slid=' '+s_+'linejoin='+lnJoin+strk+' />';dsh=strk.replace(/dasharray="[^"]*"/,'dasharray="10,5"')+' />';
		shps=function(elem,clas, pnts){
			var cls=clas||'', dshon=/dash/.test(cls), ele=elem||'path', da={
				'polygon':'points="'+(pnts||'0,0 1,1 1,0')+'"',
				'path':'d="'+(pnts||'M0 0 L1 1')+'"',
				'path-z':'d="'+(pnts||'M0 0 L1 1z')+'"',
				'ellipse':pnts|| 'rx=1 ry=1 cx='+(d+1)+' cy='+(d+1),
				'rect':pnts|| 'x='+d+' y='+d+' width=1 height=1',
				'rect-a':pnts|| 'x='+d+' y='+d+' rx='+r+' ry='+ry+' width=1 height=1',
				'line':pnts|| 'x1='+d+' y1='+d+' x2='+(d+1)+' y2='+(d+1)
				}, t='<'+ele.replace(/-.+/,'')+' class="'+cls+'" '+(da[ele])+(dshon?dsh:slid);
			if(/fillnone/.test(cls)){
				t=t.replace(/fill=\S+/,'fill=none')
			}
			if(/strokenone/.test(cls)){
				t=t.replace(/stroke=\S+/,'stroke=none')
			}
			if(/fillopa/.test(cls)){
				t=t.replace(/fill-opacity=\S+/,'fill-opacity=0.5');
			}
			if(/strokeopa/.test(cls)){
				t=t.replace(/stroke-opacity=\S+/,'stroke-opacity=0.5');
			}
			return t

		};

		if(isTxt){
			$('#Caps').append(textareas('',sty));
			if(nv){$('#svgTextN').val(nv>4?$('#svgTextN').val():$('#svgTextN option:selected').next().val());}
			var T=$('#Caps textarea').last()[0];T.scrollTop=T.scrollHeight;
		}

		if(/LRect/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+shps('rect','main'+oOn('VertexLine',1))+
				Arrf(function(x){return shps('',oOn(x,1))},ZLR('Diagonal Medians MidPointLine OppositeMidPointLine')).join('')+
				shps('',oOn('Incircle',1))+
				'</svg>');
		}else if(/ARect/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+shps('rect-a','main'+oOn('VertexLine',1))+'</svg>');
			
		}else if(/Rect|Crop|Grid/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+shps('rect','main')+'</svg>');
		}

		if(/Ellips/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+shps('ellipse','main')+
				copyA(shps('',(/oid/.test(shp)?'dash':'')+oOn('Diameter',1)),2).join('')+
				(/oid/.test(shp)?shps('','fillopa'+oOn('Equatorx',1))+shps('','dash fillopa'+oOn('Equatorx backvisi',1))+
							     shps('','fillopa'+oOn('Equatory',1))+shps('','dash fillopa'+oOn('Equatory backvisi',1)):'')+
				'</svg>');
		}

		if(/gon|Note|arrow/i.test(shp)){
			var istrigon=/Triangon/.test(shp), ostr=(istrigon?Arrf(function(x){return zlr(x,'1 2 3')},
				ZLR('Arc Median Altitude AngleBisector Midline')).join(' ')+
					(/Right/.test(shp)?' Rt ':' ')+zlr2('Ortho In Circum','centerLine')+' ':'')+
					(/gon/i.test(shp)?'Altitudes Medians '+zlr2('MidPoint OppositeMidPoint PerpendicularFoot Centroid','Line'):'')+
					(/gon/i.test(shp) && !istrigon?' Diagonal OppositeMidPointLine':'');
			$('#Caps').append('<svg'+sty+'">'+shps(/Gon|Note|arrow/.test(shp)?'path':'polygon','main'+(/StarNote/.test(shp)?'':oOn('VertexLine',1)))+(/A/.test(shp)||!ostr?'':
				Arrf(function(x){return shps('',oOn(x,1))},ZLR(ostr)).join(''))+
				'</svg>');
		}
		
		if(/cub/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+copyA(shps('polygon','main'),3).join('')+
				shps('','dash'+oOn('backvisi',1))+
				'</svg>');
		}

		if(/cylinderoid/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+
				shps('ellipse','main strokenone'+oOn('backvisi',1))+			//底面
				shps('','main dash fillnone'+oOn('backvisi',1))+				//底面半虚线 （底面换色必需）
				shps('ellipse','main')+
				shps('','main')+
				
				shps('','dash'+oOn('Altitude1',1))+
				shps('',oOn('Altitude2',1))+
				shps('','dash'+oOn('Diameter',1))+
				'</svg>');
		}

		if(/conoidO/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+
				shps('ellipse','main strokenone'+oOn('backvisi',1))+			//底面
				shps('','main dash fillnone'+oOn('backvisi',1))+				//底面半虚线
				
				shps('','main')+
				shps('','dash'+oOn('Altitude1',1))+
				shps('',oOn('Altitude2',1))+
				shps('','dash'+oOn('Diameter',1))+
				'</svg>');
		}

		if(/conoidI/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+
				shps('ellipse','main')+
				shps('','main')+

				shps('','dash'+oOn('Altitude1',1))+
				shps('',oOn('Altitude2',1))+
				shps('',oOn('Diameter',1))+
				'</svg>');
		}

		if(/line/i.test(shp)){

			$('#Caps').append('<svg'+sty+'">'+copyA(shps(/Line/.test(shp)?'line':'path-z','main'),/X|Cross/.test(shp)?2:(/Line3/.test(shp)?3:1)).join('')+
				(/angle|Iso/.test(shp)?shps('',oOn('Arc1',1)):'')+
				(/SL/.test(shp)?shps('',oOn('Rt',1)):'')+
				'</svg>');

			$('#'+shp+' defs').clone().prependTo('#'+shpN).children()
				.attr('id',function(i,v){return v+tim})
				.find('[stroke=yellow]').attr({'stroke':fg, 'stroke-opacity':fgOpa}).end().find('[fill=yellow]').attr({'fill':fg, 'fill-opacity':fgOpa});

			$('#'+shpN).children('.main').attr({'marker-end':'url(#ArwE'+
				$('#svgArwE').val()+shpN+')','marker-start':'url(#ArwS'+$('#svgArwS').val()+shpN+')'});
		}

		if(/Curve|Wav|Polylin|Free|Quo|Lattice/.test(shp)){
			$('#Caps').append('<svg'+sty+'">'+shps('','main')+'</svg>');
		}

		if(!isTxt){L.drawEnd='no';L.drawEnd2=='';}
		
		
		
		if(/Poly/.test(shp)){drawOn()}


		L.drawShapeNow=shpN;
		var ShpN=$('#'+shpN), zi=[2000];

		$('#Caps').children('svg,textarea,span').each(function(){zi.push(+$(this).css('z-index')||2000)});

		var C='#Css', c='#css', ds=c+'DropShadow', fs=$(C+'Filter').children(), vf='', vt='', Z=max(zi)+1;

		if($(ds).prop('checked') && $(C+'Dropshadow > input').filter(function(){return $(this).val()!='0'}).length){
			vf='drop-shadow('+[$(ds+'X').val(), $(ds+'Y').val(), $(ds+'Blur').val(), hex2rgba($(ds+'Color').val(), $(ds+'Opac').val())].join('px ')+')';
		}
		fs.slice(0,4).filter(function(){return $(this).find('input').val()!='1'}).each(function(){
			vf+=' '+$(this).find('span').attr('id').replace('bright','brightness').replace('opa','opacity')+'('+$(this).find('input').val()+')';
		});
		fs.slice(4,9).filter(function(){return $(this).find('input').val()!='0'}).each(function(){
			vf+=' '+$(this).find('span').attr('id').replace('R','-r')+'('+($(this).find('input').val()+$(this).find('input').attr('title')||'')+')';
		});

		var ma=$(c+'Matrix3d').val();
		if($(c+'Matrix').prop('checked') && ma){
			vt='matrix'+(ma.split(',').length<16?'':'3d')+'('+ma+')';
			$(c+'Matrix3D').show().nextAll().hide();

		}else{
			$(c+'Matrix').prop('checked',false);
			$(c+'Matrix3D').hide().nextAll().show();
			
			if($('#skew ~ input').filter(function(){return $(this).val()!='0'}).length){
				var cS='#cssSkew';
				vt+=' skew('+$(cS+'X').val()+'deg,'+$(cS+'Y').val()+'deg)'
			}
			if($('#translate ~ input').filter(function(){return $(this).val()!='0'}).length){
				var cT='#cssTranslate';
				vt+=' translate3d('+$(cT+'X').val()+'px,'+$(cT+'Y').val()+'px,'+$(cT+'Z').val()+'px)'
			}
			if($('#scale ~ input').filter(function(){return $(this).val()!='1'}).length){
				var cS='#cssScale';
				vt+=' scale3d('+[$(cS+'X').val(),$(cS+'Y').val(),$(cS+'Z').val()].join(',')+')';
			}
			var rt=$('input[name=rotate]:checked').val().substr(9);
			if(rt=='3d'){
				var r3d=$(c+'Rotate3d').val();
				if(r3d){vt+=' rotate3d('+r3d+')'}
			}else{
				$('#rotate ~ input').each(function(){
					var v=$(this).val();
					if(v!='0'){vt+=' rotate'+this.id.substr(-1)+'('+v+'deg)'}
				});
			}
		}

		vf=vf.trim()||'none';

		if(vt){
			if(!$(c+'BackVisi').prop('checked')){ShpN.css('-webkit-backface-visibility','hidden')}
			if($(c+'TranStyle').prop('checked')){ShpN.css('-webkit-transform-style','preserve-3d')}
			
			var ov=$(c+'TransOrig').val().trim();
			if(ov && ov!='50% 50% 0'){
				ShpN.css('transform-origin',ov)
			}
			var ov=$(c+'PerspecOrig').val().trim();
			if(ov && ov!='50% 50%'){
				ShpN.css('perspective-origin',ov)
			}
		}
		vt=vt.trim()||'none';

		ShpN.css({'z-index':Z,'-webkit-filter':vf,'-webkit-transform':vt});

		$(c+'X').val(X);
		$(c+'Y').val(Y);
		$(c+'Z').val(Z);
		$('#WH').text(WD+'×'+HT);
		$('#Angle').text(DEG);
	}
}

function ltwh(t){return {left:t[0],top:t[1],width:t[2],height:t[3]}}

function idStyle(id,A,shp, zi){
	//xmlns="'+xmlns+'" 
	return ' id="'+(id?id:(shp?shp:'Text')+Time.now5()+(Math.random()+'').substr(2))+'" style="position:absolute;left:'+A[0]+'px;top:'+A[1]+'px;width:'+A[2]+'px;height:'+A[3]+'px'+(zi?';z-index:'+zi:'')
}

function textareas(A,sty){
	var sz=+$('#fontSize').val(), tArr=ZLR('bold italic underline overline through');
	var pos=ZLR('left center right')[$('#tileFontCenter').val()], cls=sty?'soleTxt ':'noteTxt ', nv=+$('#svgText').val(), mathFont=+$('#svgText').val()>3;
	var fg=$('#FGC').val(), bg=$('#BGC').val(), fgOpa=$('#OpaFGC').val(), bgOpa=$('#OpaBGC').val(),sw=+$('#strkW').val();
	for(var i=0;i<tArr.length;i++){
		if($('#fontCSS .toggle.'+tArr[i]).length){cls+=tArr[i]+' '}
	}
	return '<textarea'+(sty?sty:idStyle('',A))+';font-size:'+sz+'px;'+
		(mathFont?'':'font-family:'+$('#font').val().replace(/"/g,"'")+';')+'z-index:'+($('#Caps').children('svg, textarea').length+2001)+';'+
		'background:transparent;color:'+hex2rgba(fg,fgOpa)+';border-color:'+hex2rgba(bg,bgOpa)+';border-width:'+
		(sty?sw:0)+'px;opacity:'+(sty?fgOpa:1)+';text-align:'+(sty?pos:'center')+
		'" class="'+cls+(mathFont?' mathFont':'')+'" placeholder="'+gM('urlImg')+'">'+$('#svgText'+(nv?'N':'M')).val()+'</textarea>'
}

function latexes(A,sty){
	var sz=+$('#fontSize').val(), tArr=ZLR('bold italic underline overline through');
	var pos=ZLR('left center right')[$('#tileFontCenter').val()], cls=sty?'soleTxt ':'noteTxt ', nv=+$('#svgText').val();
	var fg=$('#FGC').val(), bg=$('#BGC').val(), fgOpa=$('#OpaFGC').val(), bgOpa=$('#OpaBGC').val(),sw=+$('#strkW').val();
	/*
	for(var i=0;i<tArr.length;i++){
		if($('#fontCSS .toggle.'+tArr[i]).length){cls+=tArr[i]+' '}
	}
	*/
	return SCtv('caplatex"'+(sty?sty:idStyle('',A))+';font-size:'+sz+'px;'+
		'z-index:'+($('#Caps').children('svg, textarea, span').length+2001)+';'+
		'background:transparent;color:'+hex2rgba(fg,fgOpa)+';border-color:'+hex2rgba(bg,bgOpa)+';border-width:'+
		(sty?sw:0)+'px;opacity:'+(sty?fgOpa:1)+';text-align:'+(sty?pos:'center')+
		'" class="'+cls+'" >'+$('#svgText'+(nv?'N':'M')).val(),'')
}


function strks(t,fc,bc){
	var s_='stroke-', s='#strk', sw=+$(s+'W').val();
	var lnJoin=$(s+'LnJoin').val(), lnCap=$(s+'LnCap').val(), lnDash=$(s+'Dash').val(), lnDashOffset=$(s+'DashOffset').val();
	var fg=fc||$('#FGC').val(), bg=bc||$('#BGC').val(), fgOpa=$('#OpaFGC').val(), bgOpa=$('#OpaBGC').val();
	var fil=' fill='+['none',bg,fg][+$(s+'Fill').val()]+' fill-opacity='+bgOpa;
	if(t=='Crop'){
		return ' '+s_+'width=1 stroke=red '+s_+'opacity=1 fill=none stroke-dasharray="15,5,4,5"'
	}
	return ' '+s_+'width='+sw+' stroke='+fg+' '+s_+'opacity='+fgOpa+fil+
		' '+s_+'dasharray="'+lnDash+
		'" '+s_+'dashoffset="'+lnDashOffset+
		'" '+s_+'linecap="'+lnCap+
		'" '+s_+'linejoin="'+lnJoin+'"';

}

function drawClr(){$('#Caps > div').nextAll().remove()}
function drawOn(){$('#tileTool').attr('tip',gM('shotTip')+'/Ctrl')}
function drawEnd(e){
	L.drawEnd='';
	L.drawEnd2='';
	$('#svgShape svg[id]').eq(0).mouseout();
	var shp=L.drawShape, shpNid=L.drawShapeNow||'unknown', shpN=$('#'+shpNid);
	if(/Poly/.test(shp)){
		
		shpN.children('.main').attr('d',function(i,v){
			return v.replace(/(\d+ \d+) \1(z)?/,'$1$2');
		});

	}
	if(/Poly|Paral|Trape|lineangle[HV]|Line3YRight|cub/.test(shp) && L.drawShapeNow){
		mUp(e,1);
	}
}

function oOn(t,hdn){var c=min(Arrf(function(x){return +$('#'+x+'on').prop('checked')}, ZLR(t)));return hdn?' '+t+(c?'':' hidden'):c}

function CapsTip(){$('#tileTool').attr('tip','← '+gM('hotkey')+' Esc →')}


function drawCopy(){
	var c=$('#'+L.drawCopy);

	if(c.length){
		var C=$('#Caps'), co=c[0].outerHTML, a=ZLR('left top width height'),B=[],zi=[],
			copyMargin=$('#copyMargin').prev().prop('checked'), m=+$('#copyMargin').val(), n=+$('#copyn').val(),
			D=$('#copyDir').val(),s='',DT=D.join(''),
			t=c[0].tagName, id=c[0].id.substr(0,24), cnt=0,
			rndColor=$('#RandomColorson').prop('checked'),Tranfm=$('#Transform').prop('checked'),Tf0=c.css('-webkit-transform').replace(/^none/,'')
			cpTile=$('#copyTile').prop('checked') && DT.replace(/[89]/g,'').length>1 && !/^(0[157]|1[46]|2[367]|3[45]|47|56)$/.test(DT.replace(/[89]/g,''));
		for(var i=0;i<4;i++){
			B.push(+c.css(a[i]).replace('px',''))
		}

		/*	C.children('svg,textarea,span').each(function(){zi.push(+$(this).css('z-index')||2000)});
		zi=max(zi)+1;
		←→↑↓↖↗↙↘↥↧
		0 1 2 3 4 5 6 7 8 9


new WebKitCSSMatrix(...)
.multiply()
.inverse()
.translate()
.scale()
.rotate()
.rotateAxisAngle()
.skewX()
.skewY()

.toString()


		*/
		var M=co.split(/ .+height: *\d+px/), fM=function(times){
			var cMc=$('#cssMatrix').prop('checked'), cM3=$('#cssMatrix3d').val(), m1;
			if(cMc && cM3){
				var m1=new WebKitCSSMatrix(Tf0), m0=new WebKitCSSMatrix('matrix'+(cM3.split(',').length>6?'3d':'')+'('+cM3+')');
				for(var i=0;i<times;i++){
					m1=m1.multiply(m0)
				}
				
			}
			if(!cMc){
				var m1=new WebKitCSSMatrix(Tf0), s;
				s=[+$('#cssScaleX').val(),+$('#cssScaleY').val(),+$('#cssScaleZ').val()];
				m1=m1.scale(Math.pow(s[0],times), Math.pow(s[1],times), Math.pow(s[2],times))

				s=[+$('#cssSkewX').val(),+$('#cssSkewY').val()];
				m1=m1.skewX(s[0]*times);
				m1=m1.skewY(s[1]*times);

				s=[+$('#cssTranslateX').val(),+$('#cssTranslateY').val(),+$('#cssTranslateZ').val()];
				m1=m1.translate(s[0]*times, s[1]*times, s[2]*times);
				
				var R3d=$('[name=rotate][value=cssRotate3d]').prop('checked');
				if(R3d){
					s=Arrf(Number,$('#cssRotate3d').val().split(','));
					if(s){
						m1=m1.rotate(s[0],s[1],s[2]);
						m1=m1.rotateAxisAngle(s[3]);
					}
				}else{
					s=[+$('#cssRotateX').val(),+$('#cssRotateY').val(),+$('#cssRotateZ').val()];
					m1=m1.rotate(s[0]*times, s[1]*times, s[2]*times);
				}
				
			}

			return m1?m1.toString():''
		};
		
		
		if(!cpTile){

			for(var j=0;j<D.length;j++){
				var d=D[j],A=[].concat(B);
				for(var i=1;i<=n;i++){
					var M1=Tranfm?co.replace(/transform:[^;]+/,'transform:'+fM(j*n+i)).split(/ .+height: *\d+px/):M;
					if(/[89]/.test(d) || !copyMargin){
						s+=M1.join(idStyle('',A,id)).replace(/z-index: *\d+/,function(t){return t.replace(/\d+/, function(x){return +x+i*(/9/.test(d)?-1:1)})});

					}else{
						if(/[046]/.test(d)){
							A[0]-=A[2]+m
						}
						if(/[157]/.test(d)){
							A[0]+=A[2]+m
						}
						if(/[245]/.test(d)){
							A[1]-=A[3]+m
						}
						if(/[367]/.test(d)){
							A[1]+=A[3]+m
						}
						s+=M1.join(idStyle('',A,id));

					}
					
				}
			}
			cnt=D.length*n;
		}else{

			for(var i=-n;i<=n;i++){//竖直方向
				if(i<0 && !/[245]/.test(DT) || i>0 && !/[367]/.test(DT)){continue}


				for(var j=-n;j<=n;j++){
					if(j<0 && !/[046]/.test(DT) || j>0 && !/[157]/.test(DT) || i==0 && j==0  ){continue}
					if( i<0 && j<0 && !/0.*2/.test(DT) && (-i>-j && !/(2.*4|45)/.test(DT) || -i<-j && !/(0.*4|4.*6)/.test(DT)) ||
						i<0 && j>0 && !/12/.test(DT) && (-i<j && !/(1.*5|5.*7)/.test(DT) || -i>j && !/(2.*5|45)/.test(DT)) ||
						i>0 && j<0 && !/0.*3/.test(DT) && (i<-j && !/(0.*6|4.*6)/.test(DT) || i>-j && !/(3.*6|67)/.test(DT)) ||
						i>0 && j>0 && !/1.*3/.test(DT) && (i<j && !/(1.*7|5.*7)/.test(DT) || i>j && !/(3.*7|67)/.test(DT)) ||
						i<0 && j==0 && !/2|(45)/.test(DT) || i>0 && j==0 && !/3|(67)/.test(DT) ||
						j<0 && i==0 && !/0|(4.*6)/.test(DT) || j>0 && i==0 && !/1|(5.*7)/.test(DT)
					){continue}

					var A=[].concat(B);
					if(copyMargin){
						A[0]+=(A[2]+m)*j;

						A[1]+=(A[3]+m)*i;
					}

					cnt++;
					s+=(Tranfm?co.replace(/transform:[^;]+/,'transform:'+fM(cnt)).split(/ .+height: *\d+px/):M).join(idStyle('',A,id));
				}
			}
		}

		C.append(s);
		
		var cs=C.children().slice(-cnt);
		if(c.is('textarea')){
			cs.val(c.val())
		}


		cs.find('marker').attr('id',function(){
			var me=$(this),s=me.parents('svg'),id1=s.attr('id'),id=id1.replace(/.+\D/,''),id0=me.attr('id').replace(/\d+$/, id);
			me.attr('id',id0);
			s.children('[marker-start][marker-end]').each(function(){
				var m=$(this);
				m.attr({'marker-start':m.attr('marker-start').replace(/\d+\)$/, id+')'), 'marker-end':m.attr('marker-end').replace(/\d+\)$/, id+')')});
			});
			
		});
		
		if(rndColor){RndColors(cs)}
		
	}
}


function RndColors(o){
	var sF=+$('#strkFill').val();
	o.each(function(){
		var me=$(this), mes=flt(me), mef=flt(me,1),
			chds=me.children(), chs=flt(chds), chf=flt(chds,1),
			mrk=me.find('marker').children(), mks=flt(mrk), mkf=flt(mrk,1),
			Cstrk=RandomColor(), Cfill=RandomColor();
		if(me.is('textarea')){
			me.css({color:hex2rgba(Cstrk, /rgba.0\.\d+\)/.test(me.css('color'))?me.css('color').replace(/.+,|\)/g,'').trim():1),
			'border-color':hex2rgba(Cfill, /rgba.0\.\d+\)/.test(me.css('border-color'))?me.css('border-color').replace(/.+,|\)/g,'').trim():1)
			});


		}else if(me.is('svg[id*=oid]')){

			chs.filter('.main').attr('stroke',Cstrk);
			Arrf(function(x){chs.filter('.'+x).attr('stroke',RandomColor())},ZLR('Equatorx Equatory Diameter'));
			chs.not(zlr3('.','main Equatorx Equatory Diameter','',',')).each(function(){
				$(this).attr('stroke',RandomColor());
			});


			Arrf(function(x){chs.filter('.'+x).attr('fill',RandomColor())},ZLR('Equatorx Equatory'));
			chf.not('.dash,.Equatorx,.Equatory').each(function(){
				$(this).attr('fill',RandomColor());
			});
		}else if(me.is('svg')){
		
			chs.filter('.main').attr('stroke',Cstrk);
			chf.filter('.main').attr('fill',sF==2?Cstrk:Cfill);
			mks.attr('stroke',Cstrk);
			mkf.attr('fill',Cstrk);
			
			chs.not('.main').each(function(){
				$(this).attr('stroke',RandomColor());
			});
			chf.not('.main').each(function(){
				$(this).attr('fill',RandomColor());
			});

		}else if(me.is('marker')){
			chs.attr('stroke',Cstrk);
			chf.attr('fill',Cstrk);

		}else{
			mes.attr('stroke',Cstrk);
			mef.attr('fill',Cfill);
		}
		
	});
}


function changeTextCSS(){
	var shpN=L.drawShapeNow;
	if(/Text/.test(shpN)){
		$('#'+shpN).css({'font-family':$('#font').val().replace(/"/g,'\\"'),'font-size':$('#fontSize').val()+
			'px','text-align':ZLR('left center right')[$('#tileFontCenter').val()]});
	}
}


function toggleSvg(){
	$('#svgShape svg[id] [stroke=yellow]').attr('stroke','white');
	$('#svgShape svg[id] [fill=yellow]').attr('fill','white');

	$('#svgTool ~ div svg').css('background-image','-webkit-linear-gradient(white, #ac0 20%, #ac0 80%, white)');
	$('#'+L.drawShape).css('background','none').find('[stroke=white]').attr('stroke','yellow').end().find('[fill=white]').attr('fill','yellow');
}


function scrn(t,o){
	var cvs=$('#caps')[0], ctx=cvs.getContext('2d'),w=cvs.width,h=cvs.height;	//,dat=ctx.getImageData(0,0,w,h);


	if(t=='eraser'){
		var dtl=$('#SGC').parent().parent();
		if(dtl.find('.Grad').prop('checked')){

			var GTp=$('[name=SGradType]:checked').val(),GradV=dtl.find('.'+GTp+' :number'),
				 grd=GTp=='Linear'?ctx.createLinearGradient(+GradV.eq(0).val(),+GradV.eq(1).val(),+GradV.eq(2).val(),+GradV.eq(3).val()):
					ctx.createRadialGradient(+GradV.eq(0).val(),+GradV.eq(1).val(),+GradV.eq(2).val(),+GradV.eq(3).val(),+GradV.eq(4).val(),+GradV.eq(5).val());
			dtl.find('.Gradstop').each(function(i){
				var me=$(this);
				grd.addColorStop(+me.val()/100, hex2rgba(me.next().val(), me.next().next().val()));
			});
			ctx.fillStyle=grd;
		}else{
			ctx.fillStyle=hex2rgba($('#SGC').val(),$('#OpaSGC').val());
		}
		ctx.fillRect(0,0,w,h);

	}else if(/Crop/.test(t)){
		var imgData=ctx.getImageData(o.left,o.top,w,h);
		cvs.width=o.width;
		cvs.height=o.height;
		ctx.putImageData(imgData,0,0);

	}else if(/canvasAPI/.test(t)){
		eval($('#urlCap').val());
		
	}else{
		
	
		var img=new Image();

		img.onload=function(){
			
			if(/flip/.test(t)){
				if(t=='flipy'){
					ctx.translate(w, 0);
					ctx.scale(-1, 1);
					ctx.drawImage(img, 0, 0);
					//ctx.putImageData(dat,0,0);
					ctx.translate(w, 0);
					ctx.scale(-1, 1);
				}else if(t=='flipx'){
					ctx.translate(0, h);
					ctx.scale(1, -1);
					ctx.drawImage(img, 0, 0);

					ctx.translate(0, h);
					ctx.scale(1, -1);
				}
				
			}else if(/rotate/.test(t)){
				if(/[13]/.test(t)){
					cvs.width=h;
					cvs.height=w;
				}
				var deg=+t.substr(-1);
				ctx.rotate(deg*Math.PI/2);
				//ctx.drawImage(img, (deg==1?0:-w), (deg<3?-h:0));
				ctx.drawImage(img, (deg==1?0:-w), (deg<3?-h:0));

				
			}
			ctx.save();
		}
		img.src=cvs.toDataURL('image/png');
	}

	ctx.save();
	$('#svgShape svg[id]').eq(0).mouseout();
}


function refreshFilter(){
	var shpN=L.drawShapeNow||'unknown', isTxt=/Text/.test(shpN), sp=$('#'+shpN), lc=sp.children().last();
	if(!sp.length){return}
	var dtl=[$('#FGC').parent().parent(),$('#BGC').parent().parent()];
	for(var i=0;i<2;i++){
		var a=['stroke','fill'][i], dt=dtl[i];
		if(dt.find('.Grad').prop('checked')){
			var GTp=$('[name='+'FB'[i]+'GradType]:checked').val(), Gtp=GTp.toLowerCase(), GradV=dt.find('.'+GTp+' :number'), Gid=shpN+Gtp+a,
				A=[['x1','y1','x2','y2'],['cx','cy','r','fx','fy']][+(GTp=='Radial')],t='', noGid=$('#'+Gid).length<1;
			dt.find('.Gradstop').each(function(){
				var me=$(this);
				t+='<stop offset="'+me.val()+'%" style="stop-color:'+me.next().val()+';stop-opacity:'+me.next().next().val()+'" />'
			});

			if(noGid){
				sp.prepend(XML.wrapE('defs'));
				var Grd=document.createElementNS(xmlns, Gtp+'Gradient');
				Grd.setAttribute('id',Gid);
			}else{
				var Grd=$('#'+Gid)[0];
			}
			for(var j=0;j<A.length;j++){
				Grd.setAttribute(A[j],GradV.eq(j).val()+'%');
			}
			if(noGid){
				sp.find('defs')[0].appendChild(Grd)
			}
			$('#'+Gid).html(t);
			lc.attr(a,'url(#'+Gid+')');

		}else{
			//if(/url/.test(lc.attr(a))){
				toggleColorShpN(i)
			//}
		}
	}

}

function toggleColorShpN(F0B1, onlyOpa){
	var shpN=L.drawShapeNow||'unknown', isTxt=/Text/.test(shpN), Shp=$('#'+shpN), sF=+$('#strkFill').val(),
		FG=[L.FGC,$('#OpaFGC').val()], BG=[L.BGC,$('#OpaBGC').val()], FB=F0B1==null?10:F0B1;

	if(isTxt){
		if(/0/.test(FB)){
			Shp.css('color',hex2rgba(FG[0],FG[1]));
		}
		if(/1/.test(FB)){
			Shp.css('border-color',hex2rgba(BG[0],BG[1]));
		}

	}else if(onlyOpa){
		if(/0/.test(FB)){
			Shp.find('[stroke][stroke!=none]').not('.strokenone,.strokeopa').attr('stroke-opacity',FG[1]);
			Shp.find('marker path[fill][fill!=none]').not('.fillnone,.fillopa').attr('fill-opacity',FG[1]);
			if(sF==2){
				Shp.children('[fill]').not('.fillnone,.fillopa').attr('fill-opacity',FG[1]);
			}
		}
		
		if(/1/.test(FB) && sF!=2){
			Shp.children('[fill]').not('.fillnone,.fillopa').attr('fill-opacity',BG[1]);
		}

	}else{

		if(/0/.test(FB)){
			Shp.find('[stroke][stroke!=none]').not('.strokenone').attr('stroke',FG[0]).not('.strokeopa').attr('stroke-opacity',FG[1]);
			Shp.find('marker path[fill][fill!=none]').not('.fillnone').attr('fill',FG[0]).not('.fillopa').attr('fill-opacity',FG[1]);

			if(sF==2){
				Shp.children('[fill]').not('.fillnone').attr('fill',FG[0]);
			}

		}
		
		if(/1/.test(FB) && sF!=2){
			Shp.children('[fill]').not('.fillnone').attr('fill',['none',BG[0]][sF]).not('.fillopa').attr('fill-opacity',BG[1]);
		}


	}
}


function tileToolCap(t, val){

	var id=t.replace(/\d+$/g,''), txt=id=='Text', ln=+$('#svgLine').val(), isntP=L.drawShape!='Pointer', tme=$('#'+t), isLatex=txt && tme.is('span.caplatex');
	var C='#Css', c='#css', s='#strk', v=':visible', s_='stroke-', fil=+$('#strkFill').val();
	var polyln=/Polylin/.test(id), isLn=/Line/.test(id), isln=/line/i.test(id), isGONlike=/Rect|gon|Note|arrow/i.test(id) && !/(rect|ellipse)Note/.test(id),
		isGON=isGONlike && !/A|Heart|QIGonRnd|(fan|Moon|Star)Note/.test(id),
		isGON2=isGON || /Ellipse(Sq)?$/.test(id), isGON3=isGON2 || /(fan|Moon|Star)Note/.test(id),
		isgon=isGON && /LRect|gon/i.test(id), istrigon=/Triangon/.test(id),
		iselip=/Ellips|cylinder|con/.test(id),
		iseoid=/(Ellips|cylinder|con)oid/.test(id);

	$('#SIDES').toggle(/Regulargon/.test(id));
	$('#bWR,'+s+'R').toggle((/A|Rnd|arc|oid/.test(id) || txt) && !/LGonRndSq|cub/.test(id));
	$('#bWRy,'+s+'Ry').toggle(/ARect|Ellipsoid|linearc(.+or)*$/.test(id));

	$('#fxTXT').toggle(L.drawShape=='fx');
	$('#capctxTXT').toggle(L.drawShape=='capctx');

	$('#FontSize,#fontSize,#Font').toggle(txt);//#svgTexts,
	$('#svgTEXT').toggle(txt && isntP);
	$('#svgTEXTLaTeX').toggle(!val && txt || isLatex);
	
	$('#svgTextN,#svgTextDetail').toggle(txt && isntP && $('#svgText').val()!='0');

	$('#svgSel, #svgCssTransform').toggle(id && id!='Pointer');
	$('#scrTool').toggle(id=='Pointer');
	$('#svgLine').toggle(!txt);
	$('#Dash').toggle(ln>0);

	$('#svgArwE,#svgArwS').toggle(isln); // ||path,polygon

	$(s+'LnJoin').toggle($('#'+id).children('path,polygon,rect').not('[rx]').length>0);
	$(s+'LnCap').toggle($('#'+id).children('line,path').length>0);

	$(s+'Fill').toggle(!isLn  && !txt && !/LinWav[HXTV]|Lattice|tick/.test(id));



	$('#Color > details:eq(1)').toggle(txt || !isLn && fil>0);


	$('#copyNum').toggle(/Dbl|Wav|Copy|1tick/.test(id));

	$('#gridOpt').toggle(/Grid|Lattice|2tick|[DS]hv/.test(id) && !/Sq/.test(id));


	$('#MarginCopyOpt').toggle(/Dbl|Wav|Copy|tick|Grid|Lattice/.test(id));
	$('#MarginCopyH').toggle(/2tick/.test(id));
	$('[name=MarginCopyOpt][value=copy]').parent().toggle(true);

	


	$('#eraserOpt').toggle(/^Eraser$/.test(id));

	$('#OtherOpts').toggle(!tme.is('.ex'));

	$('#VertexLineon').prop('checked',true);
	
	if(!tme.is('.ex')){

		$(zlr3('#','Nest','on',',')).parent().parent().parent().toggle(isGONlike || /Ellipse(Sq)?$/.test(id));
		
		$(zlr3('#','MidPointNest PerpendicularFootNest','on',',')).parent().parent().toggle(isgon);
		$(zlr3('#','Grid','on',',')).parent().parent().toggle(/Rect|Ellipse|oid/.test(id));
		$(zlr3('#','Equatorx','on',',')).parent().parent().toggle(/Ellipsoid/.test(id));
		$(zlr3('#','Median1 Midline1 AngleBisector1','on',',')).parent().parent().toggle(istrigon);
		
		$(zlr3('#','Altitude1','on',',')).parent().parent().toggle(/Triangon|cylinder|conoid/.test(id));
		
		$('#Arc1on').parent().parent().toggle(/line(Iso|angle)|Triangon/.test(id));

		$('#Rton').parent().parent().toggle(/SLline|(Triangon)Right/.test(id));
		
		$('#backvision').parent().toggle(/oid/.test(id) && !/conoidI/.test(id));


		$(zlr3('#','Medians MidPointLine','on',',')).parent().toggle(isgon);
		$(zlr3('#','Altitudes PerpendicularFootLine CentroidLine','on',',')).parent().toggle(isgon && !/Rect|diagonSq/.test(id));
		
		$(zlr3('#','OppositeMidPointLine','on',',')).parent().toggle(isgon && !istrigon);
		$(zlr3('#','Diagonal','on',',')).parent().toggle(isgon && !istrigon || /StarNote/.test(id));

		$(zlr3('#','Arc2 Arc3 Altitude3 OrthocenterLine IncenterLine CircumcenterLine','on',',')).parent().toggle(istrigon);


		$(zlr3('#','CircumCircle Incircle','on',',')).parent().toggle(/LRect|Ellipse|(Trian|dia|Paral)gon/.test(id) && !/EllipseSq/.test(id));
		
		$(zlr3('#','SymmetryAxis','on',',')).parent().toggle((/fan|Moon|oid|Ellips|Iso/.test(id)) && !/LineSq|PolyGon$/.test(id));

		
		$(zlr3('#','Tick','on',',')).parent().toggle(/EllipseSq/.test(id));

		$(zlr3('#','VertexLine','on',',')).parent().toggle(isGONlike);
		$(zlr3('#','CircumRectangle','on',',')).parent().toggle(isGON3);
		$(zlr3('#','Diameter','on',',')).parent().toggle(iselip);

		$(zlr3('#','Axis','on',',')).parent().toggle(/LRect|Ellipse|Poly.+Sq/.test(id));
		
	}

	





	$('#SvgOpt,#COLOR').show();
	$('#copyOpt').hide();
	$('#scrWH').toggle(/scr|all|Crop/.test(id));
	
	//val

	if(val){
		if(txt){
			$('#fontCSS span').each(function(){
				var me=$(this);
				me.toggleClass('toggle',tme.is('.'+me.attr('class').split(' ')[0]))
			})
			$('#tileFontCenter').val(ZLR('left center right').indexOf(tme.css('text-align')));
			$('#font').val(tme.css('font-family'));
			
			if(isLatex){
				$('#TextLaTeX').val(XML.decode(tme.find('annotation').eq(0).text()));
				
			}
		}
		$(c+'X').val(tme.css('left').replace(/\D/g,''));
		$(c+'Y').val(tme.css('top').replace(/\D/g,''));
		$(c+'Z').val(tme.css('z-index').replace(/\D/g,'')||2000);

		$(s+'W').val((txt?tme.css('border-width').replace(/\D/g,''):tme.find('['+s_+'width]').attr(s_+'width'))||4);

		if(/A|Rnd/.test(id)||txt){
			$(s+'R').val(tme.find('[rx]').attr('rx')||(tme.css('border-radius')||'').replace(/\D/g,'')||0);
			$(s+'Ry').val(tme.find('[ry]').attr('ry')||(tme.css('border-radius')||'').replace(/\D/g,'')||0);
		}
		
		var Dsh=tme.find('['+s_+'dasharray]').attr(s_+'dasharray')||'';
		if(Dsh){
			$(s+'Dash').val(Dsh);
			$('#svgLine').val(Dsh=='10,5'?1:2);
			$(s+'DashOffset').val(tme.find('['+s_+'dashoffset]').attr(s_+'dashoffset')||0);
		}else{
			$('#svgLine').val(0)
		}
		
		$(s+'LnJoin').val(tme.find('['+s_+'linejoin]').attr(s_+'linejoin')||'miter');
		$(s+'LnCap').val(tme.find('['+s_+'linecap]').attr(s_+'linecap')||'butt');

		
		
		if(isln){
			$('#svgArwE').val((tme.find('[marker-end]').attr('marker-end')||'0').replace(/\D/g,'')[0]);
			$('#svgArwS').val((tme.find('[marker-start]').attr('marker-start')||'0').replace(/\D/g,'')[0]);
		}

		$('#OtherOpts :checkbox:visible').each(function(){
			var id=this.id.replace(/on$/,'');
			$(this).prop('checked',tme.children('.'+id).is(':visible') || tme.nextAll('[id^='+t+id+']').is(':visible'))
		});




		var fgA=(txt?tme.css('color').replace(/.+\(|\).*$/g,'').trim().split(','):tme.find('[stroke]').attr('stroke'))||'#000';
		var bgA=(txt?tme.css('border-color').replace(/.+\(|\).*$/g,'').trim().split(','):tme.find('[fill]').attr('fill'))||'#fff';
		var fgOpa=(txt?(fgA[3]||'').trim().substr(0,3):tme.find('[stroke-opacity]').attr('stroke-opacity'))||1;
		var bgOpa=(txt?(bgA[3]||'').trim().substr(0,3):tme.find('[fill-opacity]').attr('fill-opacity'))||1,opa;
		$('#FGC').val(txt?rgb2hex(fgA[0],fgA[1],fgA[2]):fgA);
		$('#BGC').val(txt?rgb2hex(bgA[0],bgA[1],bgA[2]):bgA);
		
		$('#OpaFGC').val(fgOpa).next().text(fgOpa);
		$('#OpaBGC'+v).val(bgOpa).next().text(bgOpa);

//渐变色需实现读取赋值



		var wf='-webkit-filter', tf='-webkit-transform', pp='-webkit-perspective', Wf=tme.css(wf).replace(/^none/,''), Tf=tme.css(tf).replace(/^none/,''), v0;

		var reg0=/.+\(|\)$/g, Ds=C+'DropShadow', ds=c+'DropShadow';

		if(/drop/.test(Wf)){
			var co=Wf.match(/rgba?\([^\)]+\)/i);
			v0=Wf.replace(/ ?rgba?\([^\)]+\) ?/i,'').match(/shadow\([^\)]+\)/)[0], tA=v0.replace(/.+\(|\)$|px/g,'').split(' ');
			if(co){
				co=co[0].replace(/.+\(|\)$|\s/g,'').split(',');
				$(ds+'Color').val(rgb2hex(co[0],co[1],co[2]));
				opa=co[3]||.5;

			}else{
				$(ds+'Color').val(tA[0]);
				opa=1;
			}


			$(ds+'X').val(tA[0]);
			$(ds+'Y').val(tA[1]);
			$(ds+'Blur').val(tA[2]);
			$(C+'Dropshadow').show();
			$(ds).prop('checked', true);
		}else{
			$(C+'Dropshadow').hide();
			$(ds).prop('checked', false);
			$(Ds+' :number').val(0);
			$(ds+'Color').val('#000000');
			opa=.5;
		}
		$(ds+'Opac').val(opa).next().text(opa);

		$(C+'Filter input').not(Ds+' input').each(function(){
			var me=$(this), id=this.id.substr(3), pid=me.prevAll('span[id]').attr('id');
			pid=pid.replace('bright','brightness').replace('opa','opacity').replace('R','-r');

			var reg=new RegExp(pid+'\\([^\\)]+\\)','gi'), rngv;
			if(reg.test(Wf)){
				v0=Wf.match(reg)[0];
				rngv=v0.replace(/[^\d\.]/g,'');
			}else{
				rngv=+(me.parent().index()<4);
			}
			me.val(rngv).next().text(rngv);
		});

		$(c+'TransOrig').val(tme.css(tf.replace(/.+\-/,'')+'-origin')||'50% 50%');
		$(c+'TranStyle').prop('checked',tme.css(tf+'-style')!='flat');

		$(c+'Perspec').val(tme.css(pp).replace(/^none/,'')||0);
		$(c+'PerspecOrig').val(tme.css(pp.replace(/.+\-/,'')+'-origin')||'50% 50% 0');


		$(c+'BackVisi').prop('checked',tme.css('-webkkit-backface-visibility')!='hidden');

		$(C+'TransOpt').hide();

		var ma=/matrix/.test(Tf), ro=/rotate/.test(Tf), sl=/scale/.test(Tf), sk=/skew/.test(Tf), st=/translate/.test(Tf), r3=C+'Rotate3 :number';
		$(c+'Matrix').prop('checked', ma);
		$(c+'Matrix3D').toggle(ma).nextAll().toggle(!ma);
		
		$(c+'Matrix3d').val((Tf.match(/matrix.?.?\([^\)]+\)/)||[''])[0].replace(/.+\(|\)$|\.0{2,}\d+/g,''));
		$(C+'Rotate6 img').removeClass('toggle');
		$('input[name=rotate][value$=XYZ').prop('checked',true);
		$(c+'Rotate3d').val('');
		$(r3).val(0);
		$('#flip0').addClass('toggle');

		if(ro){
			if(/rotate3d/.test(Tf)){
				$('input[name=rotate][value$=3d').prop('checked',true);
				$(c+'Rotate3d').val(Tf.match(/rotate3d\([^\)]+\)/)[0].replace(/.+\(|\)$/g,''));

			}else{
				$(r3).val(function(){
					var me=$(this), id='r'+this.id.substr(4);
					if(/Z/.test(id)){id+='?'}
					var reg=new RegExp(id+'\\([^\\)]+\\)','gi');
					return (Tf.match(reg)||[0])[0].replace(/[^\d-]/g,'')
				});

				var r30=$(r3).filter(function(){return $(this).val()=='0'}), r30n=r30.length, r3z=$(c+'RotateZ').val();

				if(r30n>2){$('#flip0').addClass('toggle')}else if(r30n>1){
					$('#flipx,#flipy').filter(function(){return $(c+'Rotate'+this.id.substr(-1).toUpperCase()).val()=='180'}).addClass('toggle');
					if(r3z=='180')$('#rotate2').addClass('toggle');
					if(r3z=='90')$('#rotate1').addClass('toggle');
					if(r3z=='-90')$('#rotate3').addClass('toggle');
				}

			}
		}

		if(sl){
			v0=Tf.match(/scale3d\([^\)]+\)/)[0].replace(/.+\(|\)$|\s/ig,'');
			var tA=v0.split(','), cS=c+'Scale';
			$(cS+'X').val(tA[0]);
			$(cS+'Y').val(tA[1]);
			$(cS+'Z').val(tA[2]);
		}else{
			$('#scale ~ input').val(1);
		}

		if(st){
			v0=Tf.match(/translate3d\([^\)]+\)/)[0].replace(/.+\(|\)$|\s/ig,'');
			var tA=v0.split(','), cT=c+'Translate';
			$(cT+'X').val(tA[0]);
			$(cT+'Y').val(tA[1]);
			$(cT+'Z').val(tA[2]);
		}else{
			$('#translate ~ input').val(0);
		}

		if(sk){
			v0=Tf.match(/skew\([^\)]+\)/)[0].replace(/.+\(|\)$|\s|deg/ig,'');
			var tA=v0.split(','), cS=c+'Skew';
			$(cS+'X').val(tA[0]);
			$(cS+'Y').val(tA[1]);
		}else{
			$('#skew ~ input').val(0);
		}
	}
}

