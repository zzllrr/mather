var HOME=Hs+'sites.google.com/site/zzllrrMather', GMAIL='mailto:zzllrr@gmail.com?subject=zzllrr%20Mather',loch=location.href,losh={},

qrAli=Hs+'qr.alipay.com/', qrqq=Hs+'i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=122618817&ac=ZZLLRR&n=%E5%B0%8F%E4%B9%90%E7%AC%91%E4%BA%86&f=wallet',
qrwx='wxp://',
qrs={
	'V2aliPay':qrAli+'FKX0950616RXMKGXATWY52',
	'V2qqPay':qrqq.replace('ZZLLRR','A5692108EF5009E2392BE97029C628474D54816FED899014CB4EEA2D271CF645'),
	'V2weixinPay':qrwx+'f2f0KhK_RnSDrozki2q4gmcvsFMS0DQJPVas',
	
	'weixinZQR':H+'weixin.qq.com/r/uXUFCg3EKzNUhxxpnyCd'
},
qrJPG=function(t,d,wh,noReplace){
    $(d).empty();
    var w=wh||150;
    var qrcode001 = new QRCode($(d)[0], {
        text:t,
        width : w,
        height : w
    });
    if(!noReplace){
        setTimeout(function(){
            var x=$(d).children('canvas')[0];
            if(x){
                x=x.toDataURL('image/jpeg',1);
                $(d).html('<img width='+w+' src="'+x+'" />');
    
            }
    
        },2000);
    }
    
},
VRlib=ZLR('aframe-','animation-component particle-system-component extras.ocean gradient-sky'),
VRlibjs={
    'aframe-gradient-sky':'gradientsky'
},
ARlib='',
ARlibjs={
},unpkgTmp=Hs+'unpkg.com/@/dist/@.min.js',
gitmd=Hs+'raw.githubusercontent.com/zzllrr/mather/master/',

tooltip={
},
caps,ishome=/index\.html|mather\/$/.test(loch), iscap=/cap\.html/.test(loch), isdoc=/document\.html/.test(loch),
hascap=iscap || ishome || isdoc,

oHTML=function(x,notMD,elem){
    $(elem||'#oHTML').hide().html(notMD?x:replaceNodeInner(x,'MD', md2html));
    $(ZLR(Mele+' '+Meles+' '+Mele2).join(',')).each(function(){
        all2html(this.nodeName,$(this).text(),this);
    });
    setTimeout(function(){
        $('#splash').remove();
        $(elem||'#oHTML').fadeIn();
        $('#panel').fadeIn();
    },600);
},
loadHTML=function (x) {
   var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), s=o['src'], u=o['q'],t='';
   if(u){
       var A=u.split('/'),w=x;
       t=w[A.slice(-1)[0]] || w[A.slice(-2).join(' ')]  || w[A.slice(-2).reverse().join(' ')] || w[A.join(' ')] || w[u];
//console.log(t,w);
        titleRe(gM(A.slice(-1)[0])+' - '+gM('zzllrr Mather'));
   }
   if(s){
       $.ajax({type:'get',url: s, success:function(x){
           oHTML(x,1)
       }, error:function(){oHTML(t,1)}
       })
   }else if(t){
       oHTML(t,1);

   }

};

var oH,navhead={},navheadThen={},


subject0='11 14 17 21 24 27 31 34 37 41 44 47 51 54 57 61 64 67 71 74 77 81 84 87 99',
subjects={
	14:zlrA('14',seqA(10,6,'',10).concat(99)),
	17:zlrA('17',seqA(10,8,'',10).concat(99)),
	21:zlrA('21',seqA(10,15,'',5).concat(99)),
	27:zlrA('27',seqA(10,10,'',5).concat(99)),
	31:zlrA('31',seqA(10,11,'',5).concat(99)),
	34:zlrA('34',seqA(10,3,'',10).concat(99)),
	41:zlrA('41',seqA(10,7,'',10).concat(99)),
	44:zlrA('44',seqA(10,3,'',10).concat(99)),
	47:zlrA('47',seqA(10,4,'',10).concat(99)),
	51:zlrA('51',seqA(10,3,'',10).concat(99)),
	57:zlrA('57',seqA(10,10,'',5).concat(99)),
	61:zlrA('61',seqA(10,8,'',10).concat(99)),
	64:zlrA('64',seqA(10,8,'',10).concat(99)),
	67:zlrA('67',seqA(10,11,'',5).concat(99)),
	71:zlrA('71',seqA(10,4,'',10).concat(99)),
	74:zlrA('74',seqA(10,15,'',5).concat(99))
},

concept0='Number Sequence Polynomial Vector Tensor Matrix Permutation Relation Function Proposition Logic Algebra Set Geometry Graph',
concepts={
	'Number':ZLR('Positive Natural Prime Rational Irrational Radical Transcendental Real Imaginary Complex'),
	'Sequence':ZLR('Arithmetic Geometric Harmonic'),
	'Algebra':ZLR('Group Ring Field Lattice'),
	
	'Relation':['Equivalence','Partial Order','Cover','Chain'],
	
	'Geometry':ZLR('Shape Surface Solid')
},

question0='Equation Inequation Limit',
questions={
	
},


solve={}, graphic={}, show={}, wiki={}
solves={}, graphics={}, shows={}, wikis={}
solveThen={}, graphicThen={}, wikiThen={},


teaching={},academic={}, technology={}, science={}, culture={},
teachings={},academics={}, technologys={}, sciences={}, cultures={},
teachingThen={}, academicThen={}, technologyThen={}, scienceThen={}, cultureThen={}


/*
	


单数名k，存储执行函数( 供Go按钮调用,例如solve ) 或字符串结果(例如navhead)
复数名ks，存储目录结构，默认第一个键值index存储一级目录索引
单数名kThen, 界面工具加载后的执行函数

键有歧义时，用路径URI


tooltip[tool].k，存储提示工具栏	键使用路径URI



 		mooc.js
		 		有数学内容的网络公开课平台Coursera、Udacity、edX、khan academy
		 		
*/




;


function sel(uriA,x,p,pp,ppp){
	var ux=(p?(pp?(ppp?ppp+'/':'')+pp+'/':'')+p+'/':'')+x;
	for(var i=0,l=uriA.length;i<l;i++){
		var u=uriA[i];
		if(ux==u || u.indexOf(ux)>=0){
			return 1
		}
	}
	return 0
}

function questionA(){
	var A=[];
	$('#solveGround .task.seled').each(function(){
		A.push(furi($(this))[0].join('/'))
	});
	return A
}





$.each(lang,function(i,v){//扁平化处理i18n内部引用 @数字 @[a-z] @{键}	  ➡️ 值
	$.each(v,function(ii,vv){
		if(/@/.test(vv)){
			var f=function(I,V){
				var y=I.replace(/@([a-z]|\d+)/ig,function(x){return V[x.substr(1)]})
				.replace(/@\{[^\}]+\}/g,function(x){return V[x.substr(2).split('}')[0]]});
				return /@/.test(y)?f(y,V):y
			};
			v[ii]=f(vv,v);
				consolelog(v[ii]);
		}
	});
});
lang['zh_tw']=JSON.parse(zh2big(JSON.stringify(lang['zh_cn'])));
if(!i18n || H_o().lang !=L.lang){i18n=lang[H_o().lang||'zh_cn']}



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
        var x=sub2n(v,1);
        try{
            x=kx(x)
        }catch(e){

        }
        katex.render(x, w[0], {
            throwOnError: false,
            displayMode: iv!='IL'
        });
    }else if(/ZD/.test(iv)){
  
        try{
            var id='zdog'+Random(12,1)+Time.now5();
            if(!w.is('canvas')){
                w.html('<canvas id='+id+' width='+(w.attr('width')||300)+' height='+(w.attr('height')||300)+'></canvas>');

            }
            //var C=new ctt($('#input0Preview canvas'),300,300), c=C.ctx;
            //var C=new ctt(cvs,300,300), c=C.ctx;
            var C=$('#'+id)[0];// work!
            //var C=w.children()[0];    fail!
            //console.log(v);
            eval(v);
        }catch(e){
            console.log(e);
            w.html(v)
        }
            
    }else if(/^SV/.test(iv)){
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

    }else if(/I18/.test(iv)){
        //w.text(function(i,v){return gM(v)});
        w.text(gM(v));

    }else if(/ECHARTS|EC/.test(iv)){
consolelog(v);
        w.empty();
        Graphic.drawSVG('echarts',v,'',w);
    
    }else if(iv=='CODE'){
        w.html(XML.wrapE('pre',XML.wrapE('code',XML.encode(v))));

    }else if(/HTML|SLIDE/.test(iv)){
        w.html(v);
        w.find(ZLR(Mele+' '+Meles+' '+Mele2).join(',')).each(function(){
            all2html(this.nodeName,$(this).text(),this);
        });
    }else if(/[TC]SV/.test(iv)){
        if(iv=='TSV' || v.indexOf('\t')>-1){
            vA=Arrf(function(x){return x.split('\t')},vA);
        }else{
            vA=Arrf(csv2A,vA);
        }
        //console.log(vA);
        w.html(Table(vA.slice(0,1),vA.slice(1)));


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
    var d=document.title;
    titleRe(gM(d)+' - '+gM('zzllrr Mather'));

    d=d.toLowerCase();
    if(/wiki|teaching|academic|technology|science|culture/.test(d)){
        loadHTML(eval(d));
    }

    $('#panel').hide().prepend('<div id=menu>'+
        DCtv('abscenter" hidden id="QRCODE')+
        '<span id=bar>&nbsp;'+sc+
        (ishome || isdoc?itv('" id=zMatherOn tip="Collapse','keyboard_arrow_up'):'')+
        (ishome?'':itv('" id=home tip="Home"','home'))+
    
        
        (hascap?itv('" id=svgs tip="Graphic" hotkey="Esc','palette'):'')+
        itv('" id=night tip="Night','brightness_3')+
        itv('" id=qrcode tip="Share','share')+
    dc);
    $(':button').not('[value]').val(function(){return gM(this.id)});
    $('.Clear').attr('tip','Clear');
    $('.mi-span,i18').text(function(i,v){return gM(v)});
    
    $('#menu #home').on('click',function(){
        if (self != top) {

            top.location.href=self.location.href.replace(/\/[a-z0-9]+\.html.*/i,'/index.html')

        }else{

            open(loch.replace(/\/[a-z0-9]+\.html.*/i,'/index.html'))
        }
    });
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

	$('#panel').on('click','i:not(#night):not(#zMatherOn)',function(){
		var me=$(this),id=this.id,pa=me.parent(),tog=me.toggleClass('toggle').is('.toggle');

		if(id=='svgs'){

			$('#zzllrrCanvas').removeClass('toggle').nextAll().hide();
			if(tog){
                $('#zMatherOn:contains(up)').click();
                $('#iTextFold').not('.seled').click();
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
			
			
			//$('#oHTML').toggle(!tog);
        }
        if(id=='qrcode'){
            me.removeClass('toggle');
            var m=Math.ceil(Math.min($(window).width(),$(window).height())*0.4), t=H_o('',losh);

            qrJPG(t,'#QRCODE',m);
            
            $('#QRCODE').fadeToggle();
            setTimeout(function(){$('#zMatherOn:contains(down)').click();},500);
            copy2clipboard(t);
        }
		me.siblings('.toggle').removeClass('toggle');
		pa.nextAll('[for='+id+']').toggle(tog);
		pa.nextAll().not('[for='+id+']').hide();
	});


    

	$('#zMatherOn').on('click',function(){
		var me=$(this), isup=/up/.test(me.text());
		$('#nav').toggle();
		me.add('#zMatherHide').text('keyboard_arrow_'+(isup?'down':'up'));

		me.nextAll().toggle(!isup);


    });
    

    $('#QRCODE').on('click',function(){
        //$('#qrcode').click()
        $(this).fadeOut();
    });

    
    if(hascap){
        $(window).resize(function(){
            caps.repaint();
        });
        
        $(document).scroll( function() {
            caps.repaint();
        });
	
    }

    $('body').on('keydown',function(e){
		var k=e.keyCode, shft=e.shiftKey || $('#Shift').is('.seled'), ctrl=e.ctrlKey, alt=e.altKey, act=document.activeElement, 
		node=act.tagName.toLowerCase(), me=$(act),id=me.attr('id')||'';
//console.log(k,node);

		if(node=='input' && k==13){
			/*if(id=='input0'){
				$('#go').click();
			}
			*/
			return

		}
		if(node=='textarea'){
            if(ctrl && k==69){act.value='';return false}
        }
    }).on('dblclick', function(e){
        var eos=e.originalEvent.srcElement, act=eos.tagName;

        if(hascap){
            $('#caps ~ canvas').remove();

        }else if(/canvas/i.test(act)){
            if($(eos).parent('zdog').length){
                //console.log(e,act,act.id);
                $(eos).attr('spinning',function(i,v){return v!='true'});
            }

        }else if(/body/i.test(act)){
            location.href='index.html';
            //history.back()
        }


	}).on('click','#launchCap',function(){

		open('cap.html');

	}).on('click','#launch',function(){
		var x=$('#oHTML iframe').attr('src')||location.href, lv=$('.launch:visible');
		if(lv.length){
			lv.click()
		}else if(x){
			open(x);
		}else{
			$('#go').click()
		}

    }).on('click','#oHTML .katex',function(e){
    
        copy2clipboard($(this).find('annotation').eq(0).text());
        var shft=e.shiftKey||$('#Shift').is('.seled');
        /*
        if(shft){
            OverCanvas($(this).find('annotation').eq(0).text());
            toolTip(gM('copied2Canvastip'));
            Scroll('scrollB');
        }
        */
        
    }).on('click','#oHTML svg[id]',function(e){
        var shft=e.shiftKey || $('#Shift').is('.seled');
        if(shft && $('#Caps').length){
            var zi=[],Z,me=$(this);
            $('#Caps').children('svg,textarea,span').each(function(){zi.push(+$(this).css('z-index')||2000)});
            Z=max(zi)+1;
            me.clone().appendTo('#Caps');
            $('#Caps').find('#'+this.id).attr({'id':'graphic'+Time.now5()+(Math.random()+'').substr(2)})
                .css({'position':'absolute', 'z-index':Z,'top':$('#Caps').position().top,'height':me.height()})
            //L.drawShapeNow='';

            $('#Pointer').click();
            toolTip(gM('copied2Canvastip'));
            //Scroll('scrollB');
        }
        
    }).on('mouseover','#oHTML .katex, #oHTML svg[id]',function(e){
        var me=$(this),pa=me.parents('th');
        if(pa.length<1){

            toolTip(gM('copytip'))

        }

	}).on('mouseover', '#oHTML th:eq(0)',function(e){
		toolTip(gM('thtip'));

    }).on('click','th',function(e){
        
        var me=$(this), i=me.index(),shft=e.shiftKey, ctrl=e.ctrlKey, alt=e.altKey;
        if(alt){
            me.parent().parent().next().toggle();

        }else if(me.is('.Clear')){


        }else if(me.parents('.wiki').length || me.parent().parent().is('.OHLaTeX')){


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



	}).on('click','.subtabhead',function(e){
		var me=$(this).addClass('seled'), pa=me.parent(), i=me.index(),shft=e.shiftKey || $('#Shift').is('.seled');
		me.siblings('.subtabhead').removeClass('seled');
		pa.parent().find('.subtab').hide().eq(i).show();

    }).on('click','.launch',function(){
        var me=$(this);
        me.parent().nextAll('details').find('.play').click();

    }).on('click','.downTxt',function(){
        var me=$(this), t=me.parent().prev().val();
        saveText(t,
			gM('zzllrr Mather')+$('#showGround .level.seled').text()+Time.now()+'.txt'
		)


    }).on('click','.qrGen',function(){
        var t=$(this).parents('.ground1').find('.editorText').val();
        if(t){
            var tl=t.replace(hanziRe,"aa").length, limitL=1273;
            if(tl>=1273){
                saveText(v0,
                    gM('zzllrr Mather')+Time.now()+'.txt'
                )
                return
            }
            var m=Math.ceil(Math.min($(window).width(),$(window).height())*0.6);
            qrJPG(t,'#QRCODE',m);
            
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
        if(me.parent('#iTextOpt').length * $('#iTextFold.seled').length * $('#zMatherHide:contains(down)').length){
            return
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
