var HOME=Hs+'sites.google.com/site/zzllrrMather', GMAIL='mailto:zzllrr@gmail.com?subject=zzllrr%20Mather',loch=location.href,losh={},
Mele='LaTeX Unicode_Math SVG Canvas Echarts Markdown YAML i18 JavaScript 3D 2D',Mele2='LA LT LX LTX TEX IL YM SV CV EC MD JS D3 D2',
Meleo={'LA':'LaTeX','IL':'Inline LaTeX','MD':'Markdown','CV':'Canvas','SV':'SVG','EC':'Echarts','JS':'JavaScript','D2':'2D','D3':'3D'},
Melef=function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip="'+t+'." title="'+t:''),x)},

qrAli=Hs+'qr.alipay.com/', qrqq=Hs+'i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=122618817&ac=ZZLLRR&n=%E5%B0%8F%E4%B9%90%E7%AC%91%E4%BA%86&f=wallet',
qrwx='wxp://',
qrs={
	'V2aliPay':qrAli+'FKX0950616RXMKGXATWY52',
	'V2qqPay':qrqq.replace('ZZLLRR','A5692108EF5009E2392BE97029C628474D54816FED899014CB4EEA2D271CF645'),
	'V2weixinPay':qrwx+'f2f0KhK_RnSDrozki2q4gmcvsFMS0DQJPVas',
	
	'weixinZQR':H+'weixin.qq.com/r/uXUFCg3EKzNUhxxpnyCd'
},
VRlib=ZLR('aframe-','animation-component particle-system-component extras.ocean gradient-sky'),
VRlibjs={
    'aframe-gradient-sky':'gradientsky'
},
ARlib='',
ARlibjs={
},unpkgTmp=Hs+'unpkg.com/@/dist/@.min.js',
gitmd=Hs+'raw.githubusercontent.com/zzllrr/mather/master/',
oHTML=function(x,notMD,elem){
    $(elem||'#oHTML').html(notMD?x:replaceNodeInner(x,'MD', md2html));
    $(ZLR(Mele+' '+Mele2).join(',')).each(function(){
        all2html(this.nodeName,$(this).text(),this);
    });
};

if(H_o().lang !=L.lang){
	i18n=lang[H_o().lang||L.lang||'zh_cn']
}
var MfS=function(x,typ){return Mtrx.fromStr(x,typ)},
	PfS=function(x){return Perm.fromStr(x.replace(/&.+/,''))},
	PtS=function(x,typ){return Perm.toStr(x,typ)};
	
function dayOrNight(){
	var isnight=L.night=='true';
	//$('#oHTML svg').css({"background-color":(isnight?'gainsboro':'transparent')});
	$('#oHTML svg').css({"border":(isnight?'gainsboro solid 1px':'none')});
	if(isnight){
		$('#oHTML svg *[stroke=black]').attr('stroke','gainsboro');
		$('#oHTML svg *[fill=black]').attr('fill','gainsboro');	
	}else{
		$('#oHTML svg *[stroke=gainsboro]').attr('stroke','black');	
		$('#oHTML svg *[fill=gainsboro]').attr('fill','black');	
	}
	
}

function copy2clipboard(t){
    toolTip('<input type=text value="'+t+'" />');
    $('#bar input').select();
    document.execCommand('copy', false, null);
    $('#bar input').remove();
    toolTip(gM('copiedtip'));
}

var rng2=function(t,neg){
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
function all2html(type,V,dom){
    var w=$(dom), v=V||w.html(), vA=v.split('\n'), iv=(type||'').toUpperCase();
    if(/UNICODE_MATH|UM/.test(iv)){
        var Dp=$('.level.seled[data-i=Display]'),l=Dp.length;
        if(l){
        //	Dp.next().find('.task').click();
        //	$('#go').click();
        }else{
            w.html(asc2unicode(v).split('\n').join(br));
        }
        
    }else if(/MARKDOWN|MD/.test(iv)){
        w.html(md2html(v));
        
    }else if(/JAVASCRIPT|JS/.test(iv)){
        try{
            w.html(Arrf(eval,vA).join(br))
        }catch(e){
            w.html(v)
        }
    }else if(/LATEX|LA|LT|LX|TEX|LTX|IL/.test(iv)){
        katex.render(kx(sub2n(v,1)), w[0], {
            throwOnError: false,
            displayMode: iv!='IL'
        });
  
    }else if(/D3|3D/.test(iv)){
        try{
            var cvs=w;
            if(!w.is('canvas')){
                w.html('<canvas width='+(w.attr('width')||300)+' height='+(w.attr('height')||300)+'></canvas>');
                cvs=w.children();
            }
            //var C=new ctt($('#input0Preview canvas'),300,300), c=C.ctx;
            //var C=new ctt(cvs,300,300), c=C.ctx;
            var C=cvs[0];
            eval(v);
        }catch(e){
            console.log(e);
            w.html(v)
        }
            
    }else if(/SV/.test(iv)){
        if(!w.is('svg')){
            w.html('<svg xmlns="'+xmlns+'" xmlns:xlink="'+xmlnsxlink+'" version="1.1">'+v+'</svg>');
        }else{

        }
        
    }else if(/CANVAS|CV/.test(iv)){
        try{
            var cvs=w;
            if(!w.is('canvas')){
                w.html(XML.wrapE('canvas'));
                cvs=w.children();
            }
            //var C=new ctt($('#input0Preview canvas'),300,300), c=C.ctx;
            var C=new ctt(cvs,300,300), c=C.ctx;
            eval(v);
        }catch(e){
            w.html(v)
        }
        
    }else if(iv=='YAML'){
        var x=jsyaml.load(v);
        w.html(XML.wrapE('pre',XML.wrapE('code',jSoff(x))));//txa

    }else if(iv=='I18'){
        w.text(function(i,v){return gM(v)});

    }else if(/ECHARTS|EC/.test(iv)){
consolelog(v);
        w.empty();
        Graphic.drawSVG('echarts',v,'',w);
    
    }else if(iv=='CODE'){
        w.html(XML.wrapE('pre',XML.wrapE('code',XML.encode(v))));

    }else{// if(iv=='HTML')
        w.html(v);
    }
}

function toolTip(s){
	var ts = (L.timeids_tip || '').trim();
	if (ts) {
		Arrfc([clearTimeout, Number], ZLR(ts));
	}
	$('#bar').html(SCtv('toolTip',s));
	L.timeids_tip=setTimeout(function(){
		$('#bar').empty();
    },3000);
}

$(function () {
    titleRe(gM(document.title)+' - '+gM('zzllrr Mather'));

    var ishome=/index.html|\/$/.test(loch);
    $('#panel').prepend('<div id=menu>'+
        DCtv('abscenter" hidden id="QRCODE','<div><textarea id=QRstr readonly></textarea></div><span id=QRimg> '+sc)+
        '<span id=bar>&nbsp;'+sc+
        (ishome?itv('" id=zMatherOn tip="Collapse','keyboard_arrow_up'):'')+
    
        itv('" id=night tip="Night','brightness_3')+
        itv('" id=qrcode tip="QRcode','smartphone')+
        (ishome?itv('" id=svgs tip="Graphic" hotkey="Esc','layers'):'')+
    dc);
    $(':button').not('[value]').val(function(){return gM(this.id)});
    $('.Clear').attr('tip','Clear');
    $('.mi-span,i18').text(function(i,v){return gM(v)});
    
    $('#night').on('click',function(){
        var me=$(this),isnight=me.text()=='brightness_3';
        me.html(isnight?'wb_sunny':'brightness_3');
        $('body').toggleClass('night',isnight).toggleClass('day',!isnight);

        L.night=isnight;

        dayOrNight();
    });

    if(L.night=='true'){
        $('#night').html('brightness_3').click();
    }

	$('#panel').on('click','#night ~ i',function(){
		var me=$(this),id=this.id,pa=me.parent(),tog=me.toggleClass('toggle').is('.toggle');

		if(/^svgs$/.test(id)){

			$('#zzllrrCanvas').removeClass('toggle').nextAll().hide();
			if(tog){
				$('#zMatherOn:contains(up)').click();
				$('#Caps').fadeIn();
			}else{
				if(!$('#tileTool').is(':visible')){
					$('#tileTool').fadeIn();
					me.addClass('toggle');

					tog=true;
				}else{
					$('#zMatherOn:contains(down)').click();
				}
			}
			
			
			$('#oHTML').toggle(!tog);
        }
        if(id=='qrcode'){
            me.removeClass('toggle');
            $('#QRimg').empty();

            
            var qrcode001 = new QRCode($('#QRimg')[0], {
                text:H_o('',losh),
                width : 250,
                height : 250
            });
            
            $('#QRCODE').fadeToggle();
            setTimeout(function(){$('#zMatherOn:contains(down)').click();},500);
        }
		me.siblings('.toggle').removeClass('toggle');
		pa.nextAll('[for='+id+']').toggle(tog);
		pa.nextAll().not('[for='+id+']').hide();
	});


    $('#QRCODE').on('click',function(){
        $('#qrcode').click()
    });

    $('body').on('dblclick', function(e){
        var eos=e.originalEvent.srcElement, act=eos.tagName;
        var ishome=/index.html|\/$/.test(loch);
        if(ishome){
            $('#caps ~ canvas').remove();

        }else if(!/summary/i.test(act)){
            location.href='index.html'
        }
    }).on('click','th',function(e){
        
        var me=$(this), i=me.index(),shft=e.shiftKey, ctrl=e.ctrlKey, alt=e.altKey;
        if(alt){
            me.parent().parent().next().toggle();

        }else if(me.is('.Clear')){

        //}else if(me.parent().parent().is('.OHLaTeX')){
        }else if(me.parents('#oHTML').length){


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
                        var t=td.text();
                        if(td.length){
                            katex.render(kx(t), td[0], {
                                throwOnError: true,
                                displayMode: $(this).is('div'),
                            });
                        }
                        
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
        


    }).on('click','.navHide',function(){
        var me=$(this),isup=me.text().indexOf('up')>0;
        $('#toolnav,#navhead').add(me.parent().parent().prev()).toggle(!isup);
        me.text('keyboard_arrow_'+(isup?'down':'up')).toggleClass('seled',isup);

    }).on('click','.launch',function(){
        var me=$(this);
        me.parent().nextAll('details').find('.play').click();

    }).on('click','.qrGen',function(){
        var t=$(this).parents('.ground1').find('.editorText').val();
        if(t){
            $('#QRstr').val(t);
            $('#QRimg').empty();
            var qrcode001 = new QRCode($('#QRimg')[0], {
                text:t,
                width : 250,
                height : 250
            });
            
            $('#QRCODE').fadeToggle();
        }



    }).on('dblclick','.katexf',function(){
        var me=$(this);
        me.val(me.attr('placeholder'));

    }).on('mouseover', '[tip]:not(#tileTool),[hotkey]',function(e){
		var me=$(this),hk=me.attr('hotkey')||'';
		if($('#navHide').is('.seled') && me.is('#iClear') || isMobile){
			hk='';
		}
        toolTip(gM(me.attr('tip')||this.id||'')+(hk?' | '+gM('Hotkey')+' '+hk:''));
        
    }).on('keydown',function(e){
    
		var k=e.keyCode, shft=e.shiftKey || $('#Shift').is('.seled'), ctrl=e.ctrlKey, alt=e.altKey, act=document.activeElement, 
		node=act.tagName.toLowerCase(), me=$(act),id=me.attr('id')||'';
//console.log(k,node);

		if(ctrl && shft && k==13){
            $('.launch').eq(0).click()
        }

    });
});
