/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var HOME=Hs+'sites.google.com/site/zzllrrMather', GMAIL='mailto:zzllrr@gmail.com?subject=zzllrr%20Mather',

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
},
gitmd=Hs+'raw.githubusercontent.com/zzllrr/mather/master/',
enwiki=function(x,time,txt){return href(Hs+'en.wikipedia.org/wiki/'+x,txt?txt:fn1(x.replace(/_/g,' ')),'wikipedia" class="wikipedia')+(time?', '+time:'')},
enwiki0=function(x,time){return href(Hs+'en.wikipedia.org/wiki/'+fn0(x.replace(/ /g,'_')),x,'wikipedia" class="wikipedia')+(time?', '+time:'')},
github=function(x,githubio,text){return href(git(x,githubio),(text||githubio||x).replace(/(.+\/){2}/,'$1').replace(/-/g,' '),'Github" class="github')},

tooltip={
},
caps,

hasdoodle=isdoodle,// || ishome || isdoc || iswiki || issolve,

oHTML=function(x,notMD,elem,cb){
    var o=$(elem||'#oHTML').hide();

    //o.html(notMD?x:replaceNodeInner(x,'MD', md2html));
    //console.log('oHTML',x);
    if(notMD){
        var t=replaceNodeInner(x,'i18', gM,1);
        t=replaceNodeInner(t,'i18n', gM,1);
        t=replaceNodeInner(t,'en', GM,1);
        o.html(t)
        //o.html(replaceNodeInner(x,'i18', gM,1));

    }else{
        o.html(replaceNodeInner(x,'MD', md2html,1));
    }
    /*
    $(ZLR('i18 i18n en').join(',')).each(function(){
        all2html(this.nodeName,$(this).text(),this);
    });
*/
    $(ZLR(Mele+' '+Meles+' '+Mele2).join(',')).each(function(){
        all2html(this.nodeName,$(this).text(),this);
    });
    setTimeout(function(){
        $('#splash').remove();
        o.find('.wiki th.bds').click();
        o.find('.katex0').each(function(){
            if($(this).parents('.wiki').length<1){
                var t=$(this).text();
                katex.render(kx(t), this, {
                    throwOnError: true,
                    displayMode: $(this).is('div,td'),
                    
					trust:true
                });
            }

        });
        o.fadeIn();
        $('#panel').fadeIn();
        if(cb){
            setTimeout(cb,100)
        }
    },100);

    o.find('math[alttext]').each(function(){// 替换mathml 为 katex
        //$(this).replaceWith()
        //console.log($(this).attr('alttext'));
        katex.render($(this).attr('alttext'), this, {
            throwOnError: false,
            displayMode: false,
            trust:true
        });
    });
},
loadHTML=function (x) {
   var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), s=o['src'], u=o['qa']||o['q'],refreshheads=function(){
    $('.mkdnhead:contains(#)').each(function(i){
        var me=$(this), v='_'+i;
        me.attr('href', me.attr('href')+v);
        me.next().attr('href', function(x,y){return y+v});
        me.parent().attr('id', function(x,y){return y+v});
    });
   },cb=function(){
        refreshheads()
   },t='';
   if(u){
       var A=Arrf(fn1,u.replace(/#.*/,'').split('/')),w=x;
       //console.log(A);

       t=w[A.slice(-1)[0]] || w[A.slice(-2).join('/')]  || w[A.slice(-2).reverse().join('/')] || w[A.join('/')] || w[u];
//console.log(x,t);
        titleRe(gM(A.slice(-1)[0])+' - '+gM('zzllrr Mather'));
        if(/#.+/.test(u)){
            cb=function(){
                refreshheads();
                var hs=$('.mkdnhead[href=#'+u.replace(/.+#/,'')+']');
                hs.parents('details').attr('open','');
                setTimeout(function(){

                    hs.click();
                },2000);
            }
        }
   }
   if(s){
       $.ajax({type:'get',url: s, success:function(x){
           oHTML(x,1,'',cb)
       }, error:function(){oHTML(t,1,'',cb)}
       })
   }else if(t){
       oHTML(t,1,'',cb);

   }else{
       oHTML(DCtv('abscenter hue rem3',imgSRC+'logo.jpg" />'))//gM('zzllrr Mather')
   }


}, fn0URL=function(t){
    return t.replace(/&/g,fn0).replace(/\n/g,fn0).replace(/ /g,fn0).replace(/=/g,fn0)
    
}, OHiframe=function(x,o,fullscr,fullURL){
    var oC=$('#oContent'), zM=$('#zMather'), src=(fullURL||H_o(x+'.html',o)).replace(/ /g,fn0),
        his=ZLR((L.iframeHistory||'').trim()), hisi=his.indexOf(src);
    if(!his[0]){
        his.shift()
    }
    if(hisi){
        if(hisi>0){
            his.splice(hisi,1);
        }
        his.unshift(src);
        his=his.slice(0,30);
        L.iframeHistory=his.join(' ');
        reloadHistory('iframe');
    }
    

    OH('<iframe src="'+src+'" width="'+(x=='solve'?45:98)+'%" height="'+
        Math.max($(window).height()-(oC.length?oC.position().top:0)+   (fullscr && zM.length?zM.height():0)-20,200)+
        'px" class="resize bd0"></iframe>')

}, toggler=function(A){
    return Arrf(function(x){return SCtv('toggler',x)}, A)
    
}, toggler2=function(A){
    return Arrf(function(xy){return '【'+Arrf(function(x){return SCtv('toggler',x)}, 
        /[,，、]/.test(xy)?xy.split(/[,，、]/):[xy.substr(0,xy.length/2), xy.substr(xy.length/2)]).join('')+'】'}, A)
};

L.removeItem('translation');

var oH,navhead={},navheadThen={},


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


solve={}, graphic={}, show={}, wiki={},
solves={}, graphics={}, shows={}, wikis={},
solveThen={}, graphicThen={}, wikiThen={},


teaching={},academic={}, technology={}, science={}, culture={}, explore={},
teachings={},academics={}, technologys={}, sciences={}, cultures={}, explores={},
teachingThen={}, academicThen={}, technologyThen={}, scienceThen={}, cultureThen={}, exploreThen={}


/*
	


单数名k，存储执行函数( 供Go按钮调用,例如solve ) 或字符串结果(例如navhead)
复数名ks，存储目录结构，默认第一个键值index存储一级目录索引
单数名kThen, 界面工具加载后的执行函数

键有歧义时，用路径URI


tooltip[tool].k，存储提示工具栏	键使用路径URI



		 		
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

function questionA(t){
	var A=[];
	$('#'+t+'Ground .task.seled').each(function(){
		A.push(furi($(this))[0].join('/'))
    });
    if(A.length<1){
        $('#'+t+'Ground .level.seled').each(function(){
            A.push(furi($(this))[0].join('/'));
            return false
            
        });
    }
	return Arrf(fn0,A)
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
lang['zh_tw']=jSon(zh2big(jSoff(lang['zh_cn'])));
if(!i18n || H_o().lang !=L.lang){i18n=lang[H_o().lang||L.lang||'zh_cn']}



var MfS=function(x,typ){return Mtrx.fromStr(x,typ)},
	PfS=function(x){return Perm.fromStr(x.replace(/&.+/,''))},
	PtS=function(x,typ){return Perm.toStr(x,typ)};
	
function dayOrNight(){
	var isnight=L.night=='true';
	//$('#oHTML svg').css({"background-color":(isnight?'gainsboro':'transparent')});
    //$('#oHTML svg').css({"border":(isnight?'gainsboro solid 1px':'none')});

	if(isnight){
		$('#oHTML svg *[stroke=black]').attr('stroke','gainsboro');
        $('#oHTML svg *[fill=black]').attr('fill','gainsboro');
        $('#Caps textarea').filter(function(){var c=$(this).css('color');return c=='rgb(0, 0, 0)' || /white/.test(c)}).css('color','gainsboro');
        /*
        L.canvasCode='';
        L.legoCode='';
        */
        //scrn('eraser');
       // console.log($('#caps').length);
        setTimeout(function(){
            //console.log($('#caps').length);
            if(caps){

                caps.repaint(1);
            }
        },1000);

	}else{
		$('#oHTML svg *[stroke=gainsboro]').attr('stroke','black');	
        $('#oHTML svg *[fill=gainsboro]').attr('fill','black');	
        $('#allEraser').click();
        $('#color'+(isnight?3:0)).click();

        $('#Caps textarea').filter(function(){var c=$(this).css('color');return c=='rgb(220, 220, 220)' || /gainsboro/.test(c)}).css('color','black');
        
	}
	
}

function copy2clipboard(t){

    toolTip('<input type=text value="" />');
    
	$('#bar input').eq(0).val(t);
    $('#bar input').select();
    document.execCommand('copy', false, null);
    $('#bar input').remove();
    toolTip(gM('copiedtip'));
}


function mathsimp(x,tostr){
    if(math){
        var o=math.simplify(math.parse(x));
        return tostr?(tostr==1?math2str(o):Mfn.fromStr(o.toString()).toStr()):o
    }
    return x
}

function math2str(x,tex,opt){
    var o=opt||mathjsOutputOpt();
    //console.log(o);
    /*
    if(tex && o.handler===null){
        o.handler=function(i){
            console.log(i); //i是对象，不是字符串
            return i.replace(/\\exp (.+)/g,'e^{$1}')
        };
    }
    */
   if(tex){
       var f=function(t){
           //console.log(t);
            return '\\displaystyle{}'+t.replace(/.cdot/g,'')
                .replace(/\\left\( *([a-z])\\right\)/ig,' $1')
                .replace(/\\left\(([^\)]+)\\right\) *\/ *\\left\(([^\)]+)\\right\) *(\^\{[^\}]+\})?/g,'\\frac{$1}{$2$3}')
               
       };
   }
    return tex?f(x.toTex(o)):pp(x.toString(o))
}
function mathjsOutputOpt(par,imp,f){
    return {
        parenthesis: par||'auto',    // parenthesis option   keep|auto|all
        handler: f||null,   // handler to change the output
        implicit: (imp?'show':'hide')       // how to treat implicit multiplication     hide|show
    }
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
    var w=$(dom), v=V||w.html(), vA=v.split('\n'), iv=(type||'').toUpperCase(),ivl=iv.toUpperCase();
    //console.log(V,type);
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
       // console.log(v);

    }else if(/JAVASCRIPT|JS/.test(iv)){
        try{
            w.html(Arrfc([eval,XML.decode],vA).join(br))
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
            displayMode: iv!='IL',
            trust:true
        });

    }else if(/Lego/i.test(iv)){
  
        try{
            var id=ivl+Random(12,1)+Time.now5();
            if(!w.is('canvas')){
                w.html('<canvas id='+id+' width='+(w.attr('width')||300)+' height='+(w.attr('height')||300)+'></canvas>');

            }
            //var C=new ctt($('#input0Preview canvas'),300,300), c=C.ctx;
            //var C=new ctt(cvs,300,300), c=C.ctx;
            var C=$('#'+id)[0];// work!
            c=C.getContext('2d');
            //var C=w.children()[0];    fail!
           // console.log(XML.decode(v));


         //  console.log(v);

            eval(XML.decode(v));

            w.addClass('lego');
        }catch(e){
            console.log(e);
            w.html(v)
        }

    }else if(/Rough/i.test(iv)){// Rough Canvas
  
        try{
            var id=ivl+Random(12,1)+Time.now5();
            if(!w.is('canvas')){
                w.html('<canvas id='+id+' width='+(w.attr('width')||300)+' height='+(w.attr('height')||300)+'></canvas>');

            }

            var C=$('#'+id)[0];// work!

            c=C.getContext('2d');
            eval(XML.decode(v));

            w.addClass('rough canvas');
        }catch(e){
            console.log(e);
            w.html(v)
        }

    }else if(/RF/i.test(iv)){// Rough SVG
  
        try{
            var id=ivl+Random(12,1)+Time.now5();
            if(!w.is('svg')){
                w.html('<svg id='+id+' xmlns="'+xmlns+'" xmlns:xlink="'+xmlnsxlink+'" version="1.1" width='+(w.attr('width')||300)+' height='+(w.attr('height')||300)+'></svg>');

            }

            var C=$('#'+id)[0], rc=rough.svg(C);

            eval(XML.decode(v));
            /*
            var t=eval(XML.decode(v));
            C.appendChild(t);
            */

/*      貌似draw只支持canvas
            var C=$('#'+id)[0], rs=rough.svg(C), rc=rs.generator;
            var t=eval(XML.decode(v));
            rs.draw(t);
*/
            w.addClass('rough svg');
        }catch(e){
            console.log(e);
            w.html(v)
        }

    }else if(/ZD/.test(iv)){
  
        try{
            var id=ivl+Random(12,1)+Time.now5();
            if(!w.is('canvas')){
                w.html('<canvas id='+id+' width='+(w.attr('width')||300)+' height='+(w.attr('height')||300)+'></canvas>');

            }
            //var C=new ctt($('#input0Preview canvas'),300,300), c=C.ctx;
            //var C=new ctt(cvs,300,300), c=C.ctx;
            var C=$('#'+id)[0];// work!
            //var C=w.children()[0];    fail!
   


         //  console.log(v);
            var xdv=XML.decode(v);
            eval(xdv);

            w.addClass('zdog').attr('data-code',xdv);
        }catch(e){
            console.log(e);
            w.html(v)
        }

/*
    }else if(/D2/.test(iv)){//JXG

        try{
            var id=ivl+Random(12,1)+Time.now5();
            if(!w.is('div')){
                w.html('<div id='+id+' style="width:'+(w.attr('width')||300)+'px;height:'+(w.attr('height')||300)+'px" class="jxgbox resize"></div>');

            }
            var C=$('#'+id)[0];
            eval(v);
        }catch(e){
            console.log(e);
            w.html(v)
        }
*/

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
            eval(XML.decode(v));
        }catch(e){
            w.html(v)
        }
        
    }else if(iv=='YAML'){
        var x=jsyaml.load(v);
        w.html(XML.wrapE('pre',XML.wrapE('code',jSoff(x))));//txa

    }else if(/I18/.test(iv)){

        w.text(gM(v));

    }else if(/EN/i.test(iv)){
        //w.text(function(i,v){return gM(v)});
        w.text(GM(v,'','en'));

    }else if(/ECHARTS|EC/.test(iv)){
//consolelog(v);
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
//console.log(w.html());
    w.find('math[alttext]').each(function(){// 替换mathml 为 katex
        //$(this).replaceWith()
        //console.log($(this).attr('alttext'));
        katex.render($(this).attr('alttext'), this, {
            throwOnError: false,
            displayMode: false,
            trust:true
        });
    });

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


function zdogs(w,h,s0,rotatexyz){
    return `
C.setAttribute('spinning',true);C.width=${w||100};C.height=${h||100};
let isSpinning = true;

let zo = new Zdog.Illustration({
	element: C,
	zoom: 1,
	dragRotate: true,

	onDragStart: function() {
		isSpinning = false;
	},
	onDragMove: function(p,mx,my) {
	},
	onDragEnd: function() {
		isSpinning = true;
	},
});

${s0||`let zz=new Zdog.Box({
    width:40,height:40,depth:40,

    leftFace: '${RandomColor()}',
    rightFace: '${RandomColor()}',
    frontFace: '${RandomColor()}',
    rearFace: '${RandomColor()}',
    topFace: '${RandomColor()}',
    bottomFace: '${RandomColor()}',

    color: '${RandomColor()}',

    addTo: zo,
    stroke: false,
});`}

function animate() {
    ${rotatexyz===0?'':`
	if ( isSpinning && C.getAttribute('spinning')=='true') {
		zo.rotate.${rotatexyz||'y'} = (zo.rotate.${rotatexyz||'y'}+0.03) % (Math.PI*2);

    }
    `}
	zo.updateRenderGraph();
	requestAnimationFrame( animate );
}
animate();
			
`
}

function reloadfavStar(){
    var fav=ZLR((L['favStar']||'').trim());
    if(!fav[0]){
        fav.shift()
    }
    if(fav[0]){

            $('#favStars').html(ol(Arrf(function(x){
                var o=H_o(x),txt=o.t||x;
                if(/\?q=/.test(txt)){
                    txt=gM(Arrf(fn1,txt.replace(/.+\?q=/,'').split('/'))).join('/')
                }
                return itv('favStar','star_border')+href(x,txt ,o.qa||'')+itv('clrfavStar','clear')
            },fav)));

        
    }else{

        $('#favStars').empty();

    }

}

function reloadHistory(t){
    var p=t||'tool',his=ZLR((L[p+'History']||'').trim());
    if(!his[0]){
        his.shift()
    }
    if(his[0]){
        if(p=='tool'){
            $('#toolHistory').html(itv('','history')+Arrf(function(x){
                var A=x.split('/'),x0=A[0], x1=A[1], fx1=fn1(x1), fx1A=fx1.split('/'), y=fx1A[fx1A.length-1];
                return SCtv('toolHistory hotk" title="'+fx1+'" data-path="'+fx1+'" data-by="'+x0,
                hanziCoreRe.test(y)?y:(/^[a-z -]+$/i.test(y) || /[a-z ]{2,}[^a-z ][a-z ]{2,}/i.test(y)?gM(y):zx(y))) 
            },his).join('')+itv('clrHistory','delete_forever'));
        }else{
            $('#iframeHistory').html(ol(Arrf(function(x){
                var o=H_o(x),txt=o.t||x;
                if(/\?q=/.test(txt)){
                    txt=gM(Arrf(fn1,txt.replace(/.+\?q=/,'').split('/'))).join('/')
                }
                return itv('iframeHistory','access_time')+href(x,txt ,o.qa||'')+itv('addfavStar" title="'+gM('Add to Favourite')+'" href="'+x,'star_border')+itv('clriframeHistory','clear')
            },his)));
        }
        
    }else{

        $('#'+p+'History').empty();

    }

}


$(function(){
    var d=document.title;
    titleRe(gM(d)+' - '+gM('zzllrr Mather'));

    d=d.toLowerCase();
    if(/solve|graphic|wiki|teaching|academic|explore|technology|science|culture/.test(d)){
        //console.log(d,eval(d));   //editor doodle about api
        loadHTML(eval(d));
    }

    $('#panel').prepend('<div id=menu>'+
        DCtv('abscenter" hidden id="QRCODE')+
        '<span id=bar>&nbsp;'+sc+
        itv('" id="zMatherOn','keyboard_arrow_up')+
        (ishome?'':itv('" id=home tip="Home','home'))+itv('" id=searchC tip="Search Content','search')+
        
        
        (hasdoodle?itv('" id=svgs tip="Doodle" hotkey="Esc','palette'):'')+

        itv('" tip=Widget id="Widget','widgets')+
        itv('" id=night tip="Night','brightness_3')+

        itv('" id="langu','language')+
        '<select id=lang hidden>'+Options(ZLR('lang en zh_cn zh_tw')).join('')+'</select>'+

        

        (isdoc?itv('" id=padding tip="Padding','compare_arrows')+itv('" id=print tip="Print','print'):'')+

        (ishome?'':itv('" id=qrcode tip="Share','share'))+
        itv('" id=SplitWindow tip="Split Window','burst_mode')+
        
    dc+DCtv('" id=Widgets hidden for="Widget',
        '<span id=Geogebra>'+
        '<svg id=Geogebragraphing tip="GGB Graphing" viewBox="0 0 24 24"><defs><style>.ggb_c1{fill:#99f}.ggb_c2{fill:#333}.ggb_c3{fill:#666}</style></defs><title>Graphing</title><path d="M2.5 21.5C4.13 10.64 7.89.56 12 12s7.76 1.36 9.51-9.5" fill="none" stroke="#666" stroke-miterlimit="10" stroke-width="1.3"></path><circle class="ggb_c1" cx="8.5" cy="6.5" r="2.5"></circle><circle class="ggb_c1" cx="15.5" cy="17.5" r="2.5"></circle><path class="ggb_c2" d="M15.5 15a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5zm0 4.5a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM8.5 4A2.5 2.5 0 1 0 11 6.5 2.5 2.5 0 0 0 8.5 4zm0 4.5a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path></svg>'+
        '<svg id=Geogebrageometry tip="GGB Geometry" viewBox="0 0 24 24"><title>Geometry</title><path class="ggb_c1" d="M14 4.02L20.27 15H7.72L14 4.02z"></path><circle class="ggb_c1" cx="9" cy="15" r="6"></circle><path class="ggb_c3" d="M14 2L6 16h16zm0 2l6.27 11H7.72z"></path><path class="ggb_c3" d="M9 8a7 7 0 1 0 7 7 7 7 0 0 0-7-7zm0 13a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"></path><path d="M15 15H7.72L11 9.33A6 6 0 0 1 15 15z" fill="#6161ff"></path><path d="M11.47 8.46a6.93 6.93 0 0 0-1-.3L6 16h9.92a6.92 6.92 0 0 0-4.46-7.54zM7.72 15L11 9.33A6 6 0 0 1 15 15z" class="ggb_c2"></path></svg>'+
        '<svg id=Geogebracalculator tip="GGB Calculator" viewBox="0 0 512 512"><defs><clipPath id="scientific_svg__clip-path"><rect x="27" y="27" width="458" height="458" rx="44.76" fill="none"></rect></clipPath></defs><title>Scientific Calculator</title><g clip-path="url(#scientific_svg__clip-path)"><path class="ggb_c1" d="M0 331.1h512V475H0z"></path><path class="ggb_c3" d="M0-.77h512v513.54H0zm467 82.89C467 59.41 453.59 46 430.88 46H82.12C59.41 46 46 59.41 46 82.12v348.76C46 453.59 59.41 467 82.12 467h348.76c22.71 0 36.12-13.41 36.12-36.12z"></path><path class="ggb_c3" d="M0 173.67h512v18H0zM0 320.33h512v18H0z"></path></g><path class="ggb_c3" d="M159.5 99.66v-38h19v38h38.25v19.68H178.5v38h-19v-38h-38.25V99.66zM121.2 246.08h95.6v19.67h-95.6z"></path><path d="M216.8 371.88v19.67h-95.6v-19.67zm0 41.4V433h-95.6v-19.72z" class="ggb_c2"></path></svg>'+
        '<svg id=Geogebra3d tip="GGB 3D" viewBox="0 0 24 24"><title>3D</title><path class="ggb_c2" d="M8.47 21L2 17.57 10.83 3 8.47 21z"></path><path class="ggb_c3" d="M22 18.38L8.47 21l2.36-18L22 18.38z"></path><path fill="#6161ff" d="M7.64 19.37l-4.19-2.18 5.67-9.37-1.48 11.55z"></path><path class="ggb_c1" d="M20.18 17.69L9.66 19.73l1.82-14.06 8.7 12.02z"></path></svg>'+
        '<svg id=Geogebranotes tip="GGB Notes" viewBox="0 0 512 512"><title>Notes</title><defs><clipPath id="notes_svg__clip-path"><rect x="27" y="27" width="458" height="458" rx="44.76" fill="none"></rect></clipPath></defs><title>Notes</title><g clip-path="url(#notes_svg__clip-path)"><path class="ggb_c1" d="M0 331.1h512V475H0z"></path><path class="ggb_c3" d="M0-.77h512v513.54H0zm467 82.89C467 59.41 453.59 46 430.88 46H82.12C59.41 46 46 59.41 46 82.12v348.76C46 453.59 59.41 467 82.12 467h348.76c22.71 0 36.12-13.41 36.12-36.12z"></path><path class="ggb_c3" d="M0 320.33h512v18H0z"></path></g></svg>'+
        '<svg id=Geogebraclassic tip="GGB Classic" viewBox="0 0 512 512"><title>GGB Logo</title><g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke="#666" stroke-width="33.34" d="M432.345 250.876c0 87.31-75.98 158.088-169.705 158.088-93.726 0-169.706-70.778-169.706-158.088 0-87.31 75.98-158.09 169.706-158.09 93.725 0 169.705 70.78 169.705 158.09z" transform="matrix(1.0156 .01389 -.20152 .9924 42.924 8.75)"></path><path class="ggb_c1" stroke="#000" stroke-width="15.55" d="M644.286 145.571c0 26.431-20.787 47.858-46.429 47.858-25.642 0-46.428-21.427-46.428-47.858 0-26.43 20.786-47.857 46.428-47.857 25.642 0 46.429 21.427 46.429 47.857z" transform="matrix(.96842 0 0 .91438 -225.59 242.796)"></path><path class="ggb_c1" stroke="#000" stroke-width="15.55" d="M644.286 145.571c0 26.431-20.787 47.858-46.429 47.858-25.642 0-46.428-21.427-46.428-47.858 0-26.43 20.786-47.857 46.428-47.857 25.642 0 46.429 21.427 46.429 47.857z" transform="matrix(.96842 0 0 .91438 -151.12 72.004)"></path><path class="ggb_c1" stroke="#000" stroke-width="15.55" d="M644.286 145.571c0 26.431-20.787 47.858-46.429 47.858-25.642 0-46.428-21.427-46.428-47.858 0-26.43 20.786-47.857 46.428-47.857 25.642 0 46.429 21.427 46.429 47.857z" transform="matrix(.96842 0 0 .91438 -421.29 266.574)"></path><path class="ggb_c1" stroke="#000" stroke-width="15.55" d="M644.286 145.571c0 26.431-20.787 47.858-46.429 47.858-25.642 0-46.428-21.427-46.428-47.858 0-26.43 20.786-47.857 46.428-47.857 25.642 0 46.429 21.427 46.429 47.857z" transform="matrix(.96842 0 0 .91438 -483.632 100.362)"></path><path class="ggb_c1" stroke="#000" stroke-width="15.55" d="M644.286 145.571c0 26.431-20.787 47.858-46.429 47.858-25.642 0-46.428-21.427-46.428-47.858 0-26.43 20.786-47.857 46.428-47.857 25.642 0 46.429 21.427 46.429 47.857z" transform="matrix(.96842 0 0 .91438 -329.052 -23.649)"></path></g></svg>'+
        '<svg id=Geogebracas tip="GGB CAS" viewBox="0 0 512 512"><title>CAS</title><defs><path d="M485 440.24c0 24.72-20.04 44.76-44.76 44.76H71.76C47.04 485 27 464.96 27 440.24V71.76C27 47.04 47.04 27 71.76 27h368.48C464.96 27 485 47.04 485 71.76v368.48z" id="H"/></defs><clipPath id="I"><use height="512" width="512" xlink:href="#H" overflow="visible"/></clipPath><g clip-path="url(#I)"><path class="ggb_c1" d="M0 0h150v512H0z"/><path d="M360.488 347.088h-56.055l-39.307-62.55-36.572 62.55h-52.637l62.55-93.652-56.397-81.348h55.713l34.52 51.61 29.737-51.61h52.295l-55.03 81.348 61.183 93.652zM512 239.947H376.174V219.38H512v20.567zM512 301H376.174v-20.895H512V301z" class="ggb_c3"/></g></svg>'+
        '<svg id=Geogebraprobability tip="GGB Probability" viewBox="0 0 512 512"><title>Probability</title><defs><path d="M485 440.24c0 24.72-20.04 44.76-44.76 44.76H71.76C47.04 485 27 464.96 27 440.24V71.76C27 47.04 47.04 27 71.76 27h368.48C464.96 27 485 47.04 485 71.76v368.48z" id="m"/></defs><clipPath id="n"><use height="512" width="512" xlink:href="#m" overflow="visible"/></clipPath><g clip-path="url(#n)"><path d="M155.564 446.51h200.873V180.524C310.847 108.107 281.302 73.24 256 73.24c-25.302 0-54.847 34.867-100.436 107.283V446.51z" class="ggb_c1"/><path d="M609 422.968s-130.97 21.405-207.06-147.7C325.85 106.16 287.184 65.487 256 65.487c-31.183 0-69.85 40.672-145.94 209.778S-97 422.968-97 422.968" fill="none" stroke="#666" stroke-width="26" stroke-miterlimit="10"/><path fill="none" stroke="#333" stroke-width="26" stroke-miterlimit="10" d="M-97 446.51h706"/></g></svg>'+
        '<svg id=Geogebraspreadsheet tip="GGB Spreadsheet" viewBox="0 0 20 20"><title>Spreadsheet</title><defs><path id="a" d="M485 440.24c0 24.72-20.04 44.76-44.76 44.76H71.76C47.04 485 27 464.96 27 440.24V71.76C27 47.04 47.04 27 71.76 27h368.48C464.96 27 485 47.04 485 71.76v368.48z"/></defs><clipPath id="b"><use width="512" height="512" overflow="visible" xlink:href="#a"/></clipPath><g transform="translate(-.016 .148) scale(.03906)" clip-path="url(#b)" class="ggb_c1"><path d="M26 26h460v130H26z"/><path d="M26 26h130v460H26z"/></g><path transform="translate(-.016 .148) scale(.03906)" clip-path="url(#b)" d="M157.504 19.333h24v186.333h-24z" fill="#fff"/><path transform="translate(-.016 .148) scale(.03906)" clip-path="url(#b)" d="M20 155.504h139.766v24H20zm0 156.328h140.766v24H20zM310.934 21h24v139.765h-24z" fill="#fff"/><path transform="translate(-.016 .148) scale(.03906)" clip-path="url(#b)" d="M156 311.832h330v24H156z" class="ggb_c3"/><path transform="translate(-.016 .148) scale(.03906)" clip-path="url(#b)" d="M310.934 156.252h24V486h-24z" class="ggb_c3"/><path d="M11.292 5.532h-.506l-.372-.92h-1.68l-.376.92h-.493l1.444-3.43h.52zM10.215 4.21L9.56 2.624 8.92 4.21h1.295zM4.13 11.61h-.44V8.746c-.178.124-.426.256-.745.395v-.394c.134-.082.263-.174.384-.275.118-.098.203-.173.252-.224.05-.05.075-.075.075-.072h.474v3.437zm.445 6.062H2.5v-.44c.404-.45.724-.81.96-1.074.238-.265.404-.47.5-.614.094-.144.14-.27.14-.38 0-.207-.04-.36-.12-.457-.08-.1-.216-.148-.405-.148-.167 0-.293.048-.377.144-.083.097-.138.25-.163.46h-.483c.05-.666.39-1 1.023-1 .313 0 .558.096.735.287.177.19.265.407.265.65 0 .073-.006.142-.018.203-.013.063-.033.128-.06.198-.03.07-.067.142-.115.216-.048.075-.108.16-.18.254-.074.095-.917 1.053-1.016 1.164-.1.112 1.543-.05 1.412.098" class="ggb_c2"/></svg>'+
        sc+
        '<span id=Desmos>'+
        '<svg id=DesmosGraphingCalculator tip="Desmos Graphing" viewBox="0 0 24 24"><defs><style>.des_c1{fill:#007090}.des_c2{fill:#333}.des_c3{fill:#666}</style></defs><title>Graphing</title><path d="M2.5 21.5C4.13 10.64 7.89.56 12 12s7.76 1.36 9.51-9.5" fill="none" stroke="#666" stroke-miterlimit="10" stroke-width="1.3"></path><circle class="des_c1" cx="8.5" cy="6.5" r="2.5"></circle><circle class="des_c1" cx="15.5" cy="17.5" r="2.5"></circle><path class="des_c2" d="M15.5 15a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5zm0 4.5a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM8.5 4A2.5 2.5 0 1 0 11 6.5 2.5 2.5 0 0 0 8.5 4zm0 4.5a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path></svg>'+
        '<svg id=DesmosGeometry tip="Desmos Geometry" viewBox="0 0 24 24">title>Geometry</title><path class="des_c1" d="M14 4.02L20.27 15H7.72L14 4.02z"></path><circle class="des_c1" cx="9" cy="15" r="6"></circle><path class="des_c3" d="M14 2L6 16h16zm0 2l6.27 11H7.72z"></path><path class="des_c3" d="M9 8a7 7 0 1 0 7 7 7 7 0 0 0-7-7zm0 13a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"></path><path d="M15 15H7.72L11 9.33A6 6 0 0 1 15 15z" fill="green"></path><path d="M11.47 8.46a6.93 6.93 0 0 0-1-.3L6 16h9.92a6.92 6.92 0 0 0-4.46-7.54zM7.72 15L11 9.33A6 6 0 0 1 15 15z" class="des_c2"></path></svg>'+

        '<svg id=DesmosFourFunctionCalculator tip="Desmos Function Calculator" viewBox="0 0 512 512"><g clip-path="url(#I)"><path class="des_c1" d="M0 0h150v512H0z"/><path d="M360.488 347.088h-56.055l-39.307-62.55-36.572 62.55h-52.637l62.55-93.652-56.397-81.348h55.713l34.52 51.61 29.737-51.61h52.295l-55.03 81.348 61.183 93.652zM512 239.947H376.174V219.38H512v20.567zM512 301H376.174v-20.895H512V301z" class="des_c3"/></g></svg>'+
        '<svg id=DesmosScientificCalculator tip="Desmos Scientific Calculator" viewBox="0 0 512 512"><title>Scientific Calculator</title><g clip-path="url(#scientific_svg__clip-path)"><path class="des_c1" d="M0 331.1h512V475H0z"></path><path class="des_c3" d="M0-.77h512v513.54H0zm467 82.89C467 59.41 453.59 46 430.88 46H82.12C59.41 46 46 59.41 46 82.12v348.76C46 453.59 59.41 467 82.12 467h348.76c22.71 0 36.12-13.41 36.12-36.12z"></path><path class="des_c3" d="M0 173.67h512v18H0zM0 320.33h512v18H0z"></path></g><path class="des_c3" d="M159.5 99.66v-38h19v38h38.25v19.68H178.5v38h-19v-38h-38.25V99.66zM121.2 246.08h95.6v19.67h-95.6z"></path><path d="M216.8 371.88v19.67h-95.6v-19.67zm0 41.4V433h-95.6v-19.72z" class="des_c2"></path></svg>'+
      
      
      
        sc+
        itv('" id=DoodleOpen tip="Doodle','palette')+
        itv('" id=WidgetOpen tip="Launch','launch')+
        itv('" id=WidgetOn tip="Close','close')+


        '<div id=widget>'+dc
    )+DCtv('" id=searchContent hidden for="searchC',
        '<input type=search id=searchCbox placeholder="'+gM('Search Content')+'" title="'+gM('Support Regexp')+'" /><div id=searchCresult>'+dc+
        detail(itv('','folder_special')+gM('Favourite')+itv('addfavStar" title="'+gM('Add to Favourite'),'star_border'), '<div id=favStars>'+dc,'','id=favStar'))
    );
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

    $('#Widgets > span svg').on('click',function(){
        var me=$(this),pa=me.parent(),pid=pa.attr('id'),
            Id=this.id,id=Id.substr(pid.length),tog=me.is('.toggle');
        if(tog){
            me.removeAttr('class');
            $('#widget').fadeOut();
        }else{
            me.attr('class','toggle');
            if(($('#widget').children().attr('id')||'').replace(/\d+$/,'')==Id){
                $('#widget').fadeIn()
            }else{
                var tid=Id+Time.now5()+(Math.random()+'').substr(2);
                $('#widget').show().html('<div id='+tid+'>'+dc);
                $('#widget').children().width($(window).width()).height($(window).height()*0.8);

                if(pid=='Geogebra'){
                    var ggbApp = new GGBApplet({
                        "appName": id,
                        "width": $(window).width(), 
                        "height": $(window).height()*0.8, 
                        "showToolBar": true,
                        "showAlgebraInput": true,
                        "showMenuBar": true 
                    }, true);ggbApp.inject(tid);

                }else if(pid=='Desmos'){
    
                    var calculator = Desmos[id]($('#'+tid)[0]);
                    /*
                    calculator.updateSettings && 
                    calculator.updateSettings({
                        language: (H_o().lang||L.lang||'zh_cn').replace(/_.+/,function(x){
                            return '-'+x.substr(1).toUpperCase()
                        }) 
                    });
                    */

                    //calculator.setExpression({id:'graph1', latex:'y=x^2'});

                }

            }
            
        }
        me.siblings('.toggle').removeAttr('class');
        me.parent().siblings().find('.toggle').removeAttr('class');

    });
  
    $('#WidgetOn').on('click',function(){
        $('#Widgets svg.toggle').click();
        $('#Widgets .toggle').click();
        $('#Widget.toggle').click();
    });


    $('#WidgetOpen').on('click',function(){
        open('widget.html')
    });
    $('#DoodleOpen').on('click',function(){
        open('doodle.html')
    });

    $('#SplitWindow').on('click',function(e){
        var l=location.href, shft=e.shiftKey || $('#Shift').is('.seled'), frm=$('body > .sideframe');
        if(frm.length){
            frm.toggle();
            if(frm.is(':visible')){
                $('#zMatherOn').click()
            }
        }else{

            $('body').append('<iframe src="'+(/doodle/.test(l)?'editor':(/editor/.test(l) && shft?'index':'doodle'))+
                '.html" width="50%" height="99%" class="resize sideframe bds" style="position:absolute;right:3rem;top:0rem"></iframe>');
            $('#zMatherOn').click()
        }
        $('#WidgetOn').click()
    });


    $('#padding').on('click',function(){
        var o=$('#oHTML'),p=o.is('.pd20p'),pl=o.is('.pd20pl'),pr=o.is('.pd20pr'),p20=o.is('.pd20');
        o.removeClass('pd20p pd20pl pd20pr pd20');
        //pd20p → pd20pl → pd20pr → pd20 → pd20p
        if(p){
            o.addClass('pd20pl');
        }else if(pl){
            o.addClass('pd20pr');
        }else if(pr){
            o.addClass('pd20');
        }else if(p20){
            o.addClass('pd20p');
        }
    });
    $('#print').on('click',function(){
        window.print();
    });
    $('#night').on('click',function(){
        var me=$(this),isnight=me.text()=='brightness_3';
        me.html(isnight?'wb_sunny':'brightness_3');
        $('body').toggleClass('night',isnight).toggleClass('day',!isnight);

        //$('html').toggleClass('darkmode', !isnight);

        L.night=isnight;

        dayOrNight();
    });

    if(L.night=='true'){
        $('#night').html('brightness_3').click();
    }


    $('#lang').on('change',function(){
		var v=$(this).val();
		L.lang=v;
		
		location.href=H_o('',{'lang':v})
    });
    

	$('#go').on('click',function(){
        var tool=$('[name=tool]:checked').val(), i0=$('#input0'),i1=$('#input1'),i0v=i0.val().trim(),i1v=i1.val().trim(),o={},
        his=L.toolHistory?ZLR(L.toolHistory):[], hisi;

		
		$('#svgs.toggle').click();
		if(tool=='solve'){
			if(!i0v){
				var v=$('.inputTip .eg').last().attr('data-eg')||'';
				i0.val(v);
				i0v=v;
            }
            o={ s:$('#solveGround .ground0 .seled').attr('data-i').toLowerCase(),
                t:fn0URL(i0v),
                qa:questionA('solve').join(';')
            };
//console.log(fn0URL(i0v), i0v,o);
            OHiframe('solve',o);

		}
		if(tool=='graphic'){

            
            if(!i0v){
				var v=$('.inputTip .eg').last().attr('data-eg')||'';
				i0.val(v);
				i0v=v;
            }


            o={ s:$('#graphicGround .ground0 .seled').attr('data-i').toLowerCase(),
                t:fn0URL(i0v),
                qa:questionA('graphic').join(';')
            };


            OHiframe('graphic',o);

			
		}
		if(tool=='show'){
			var s=$('#showGround .ground0 .level.seled').attr('data-i'), ss=s.toLowerCase();
			if(ss=='image'){
				ss='slide';
				o.type='image';
			}

            OHiframe(ss,o);
		}

        if(/solve|graphic/.test(tool)){
            var hisPath=tool+'/'+questionA(tool);
            hisi=his.indexOf(hisPath);
    
            if(hisi){
                if(hisi>0){
                    his.splice(hisi,1);
                }
                his.unshift(hisPath);
                his=his.slice(0,20);
                L.toolHistory=his.join(' ');
                reloadHistory('tool');
            }
        }

        
    });
    
	$('body').on('click','#menu > svg,#Widget,#svgs,#langu,#qrcode,#searchC',function(){
		var me=$(this),id=this.id,pa=me.parent(),tog=me.toggleClass('toggle').is('.toggle');
        if(me.is('svg')){
            tog=!tog;
            if(tog){
                me.attr('class','toggle');
                $('#zMatherOn:contains(up)').click();
                $('#iTextFold.seled').click();
            }else{
                me.removeAttr('class')
            }
        }
        if(id=='Widget'){
            if(tog){
                
                $('#zMatherOn:contains(up)').click();
                $('#iTextFold.seled').click();
            }
        }
		if(id=='svgs'){

			$('#zzllrrCanvas').removeClass('toggle').nextAll().hide();
			if(tog){
                $('#zMatherOn:contains(up)').click();
                $('#iTextFold.seled').click();
                $('#Caps').fadeIn();
                $('#caps').css('z-index',1);

			}else{
				if(!$('#tileTool').is(':visible')){
					$('#tileTool').fadeIn();
					me.addClass('toggle');

                    tog=true;
                    $('#caps').css('z-index',1);

				}else{
                    $('#zMatherOn:contains(down)').click();
                    
                    $('#caps').css('z-index',-1);
                }
                
			}

        }

        if(id=='langu'){
            $('#lang').toggle(tog)
        }

        if(id=='searchC'){
            $('#searchCbox').change()
        }

        if(id=='qrcode'){
            me.removeClass('toggle');

            var t;

            if($('#show').prop('checked')){
                losh.t=fn0($('#showGround .editorText').val().substr(0,50));
            }else{
                if($('#input0Type').length){
                    losh.type=$('#input0Type').val();
                    losh.t=fn0($('#input0').val());
                }
            }

            if(ishome){
                var x=$('#oHTML iframe').attr('src')||'';//location.href

                if(x){
                    t=x

                }else{

                    var grd=$('#'+$('[name=tool]:checked').attr('id')+'Ground');
                    losh.uri=[
                        grd.find('.ground0 .seled').index(),
                        grd.find('.ground1 .seled').index(),
                        grd.find('.ground2 .seled').index(),
                    ].join('.');
                    grd.find('.tasks .seled').each(function(i){
                        losh.uri+=(i?'+':'.')+i;
                    });
                }
            }
            if(!(ishome && x)){
                t=H_o('',losh)
            }

           // console.log(losh);
            var m=Math.ceil(Math.min($(window).width(),$(window).height())*0.4);
            //console.log(t,t.length);
            qrJPG(t,'#QRCODE',m);
            
            $('#QRCODE').fadeToggle();
            setTimeout(function(){$('#zMatherOn:contains(down)').click();},500);
            copy2clipboard(t);

            if(pa.is('#iTextOpt')){
                return
            }
        }


        me.siblings('.toggle').removeClass('toggle');
        me.siblings('svg').removeAttr('class');
		pa.nextAll('[for='+id+']').toggle(tog);
        pa.nextAll().not('[for='+id+']').hide();
        
	}).on('mousewheel','.zdog canvas',function(e){
        var d=Math.sign(e.originalEvent.wheelDelta), k=e.keyCode, shft=e.shiftKey || $('#Shift').is('.seled'), ctrl=e.ctrlKey, alt=e.altKey, 
            me=$(this), pa=me.parent(), c=pa.attr('data-code')||'';
        if(d){
            var c2=c.replace(/zoom: \d\.?\d*/,function(x){return 'zoom: '+
                +Math.max(0.1,Math.min(2,(+x.split(' ')[1]+(shft?0.01:(ctrl?0.5:(k==91||k==92?1:0.1)))*d))).toFixed(2)});
            pa.attr('data-code',c2).html(c2);
			all2html('zdog','',pa);
            e.stopPropagation()
        }
	}).on('click','.zdog canvas, .lego canvas, .rough canvas',function(e){
        L.drawShapeNow=$(this).parent().attr('id')

	}).on('click','.toggler',function(e){
        $(this).toggleClass('toggle')



    }).on('click','.clrHistory',function(e){

        if($(this).parents('#searchCresult').length){
            L.iframeHistory='';
            reloadHistory('iframe');
        }else{
            L.toolHistory='';
            reloadHistory('tool');
        }
        
    }).on('click','.toolHistory',function(e){
        var me=$(this), tool=me.attr('data-by');
        $('#home').click();
        if($('#toolnav > label:visible').length>1){
            $('#'+tool).click()
        }else if(L.tool!=tool){
            $('#'+L.tool).click();
            $('#'+tool).click()
        }
        $('.task.seled').click();
        loadToolPath(me.attr('data-path'), tool);
        
    }).on('click','.iframeHistory, .favStar',function(e){
        
        OHiframe('','','',$(this).next().attr('href'));
        
    }).on('click','.clriframeHistory',function(e){
        
        var s=$(this).prev().attr('href'), his=ZLR(L.iframeHistory), hisi=his.indexOf(s);
        his.splice(hisi,1);

        L.iframeHistory=his.join(' ');
        $(this).parent().remove()
        
   }).on('click','.addfavStar',function(e){
        var t=$(this).attr('href') || $('#oHTML iframe').attr('src') || location.pathname.replace(/.+\//,'')+location.search;
        var fav=ZLR(L.favStar ||'');
        if(fav.indexOf(t)<0){
            L.favStar=((L.favStar ||'')+' '+t).trim();
            reloadfavStar();
        }
       
        
    }).on('click','.clrfavStar',function(e){
        
        var s=$(this).prev().attr('href'), fav=ZLR(L.favStar), i=fav.indexOf(s);
        fav.splice(i,1);

        L.favStar=fav.join(' ');
        $(this).parent().remove()
        
    });



    $('#searchCbox').on('change',function(){
        var t=$(this).val().trim(), l=loch.split('?')[0].split('.html')[0].replace(/.+\//,'')||'index', A=[], el, Anmax=0, isreg=/^\/.+\//.test(t),b=[];
        $('#searchCresult').html(detail(itv('','access_time')+gM('History')+itv('clrHistory','delete_forever'), '<div id=iframeHistory>'+dc));
        reloadHistory('iframe');

        if(t.length<1){          
            return 0
        }

        if(l=='editor' || l=='index' || l=='doodle'){
            el={STRUC:jSoff(STRUC),SBSFn:jSoff(SBSFn),SBS:jSoff(SBS), FUNCS:jSoff(FUNCS), SBSFUN:SBSFUN, H5Colors:H5Colors, i18n:jSoff(i18n), fontHan:fontHan};


        }else if(l=='graphic'){
            el={Index:jSoff(graphics)};

        }else if(l=='solve'){
            el={Index:jSoff(solves)};
        }else{
            el=eval(l);
        }
        


        //console.log(el);
        $.each(el,function(k,v){
            if(isreg){
                var BA=split(v,eval(t)), a=BA[1];

                if(isStr(BA)){
                    return 1
                }
               // console.log(BA);
                b=BA[0];

            }else{

                var a=v.split(t);
                b=[t];
            }
            
            var n=a.length;

            if(n>1){
                Anmax=Math.max(Anmax,n);
                A.push([n,k,
                    Arrf(function(x){
                        var xl=x.length;
                        return XML.encode(xl>30?x.substr(0,15)+'...'+x.substr(-15):x)},a),
                    (isreg?b:copyA(t,n-1))
                    
                ]);
            }
        });
      //  console.log(A);
        if(A.length<1){
            $('#searchCresult').prepend(mark(gM('Not Found'),'Sorry'));
            return 1;
        }
        sort2(A);
        A.reverse();
        //console.log(b);
        var m=mark(XML.encode(b[0]),gM('Snippet'));
        $('#searchCresult').prepend(ol(Arrf(function(x){var t=l+'.html?q='+x[1];
            return inhref(t,meter(parseInt(x[0]*100/Anmax),'"0" tip="'+gM('Search Score')+'"')+gM(x[1]))+
            itv('addfavStar" title="'+gM('Add to Favourite')+'" href="'+t,'star_border')+
            (x[2].length>2?detail(x[2].slice(0,2).join(m),
                DCtv('searchCresult',Arrf(function(y,i){return (isreg?mark(XML.encode(x[3][i+1]),gM('Snippet')):m)+x[2][i+2]},x[2].slice(2)).join(br))   //x[2][i+1]+
            ):DCtv('searchCresult',x[2].join(m)))},A)));
    });
    $('#searchContent').on('dblclick','.searchCresult',function(){
        var me=$(this), a=me.prev('a').attr('href')||me.parent().prev('a').attr('href');
        //OHiframe(a.split('?')[0].split('.html')[0].replace(/.+\//,''), {q:a.split('.html?q=')[1]}, 1);
        OHiframe('','','',a)
    });


	$('#zMatherHide').on('click',function(){
		$('#zMatherOn').click();
	});
    

	$('#zMatherOn').on('click',function(){
		var me=$(this), isup=/up/.test(me.text());
		$('#nav').toggle();
		me.add('#zMatherHide').text('keyboard_arrow_'+(isup?'down':'up'));

		me.nextAll().not('select').toggle(!isup);

        if(isup){
            me.nextAll('select').hide();
            $('#langu').removeClass('toggle')
        }else{
            $('#search,#toolHistory').hide();
            $('.subhead').show();
        }
        $('#zMatherOn2').toggle(!isup);
        if($('#svgs').is('.toggle')){
            $('#svgs').click()
        }
    });
    
	

    if(!ishome){
        $('#zMatherOn').click()
    }

    if(ishome){
        $('#splash').hide().nextAll().fadeIn();
    }

    $('#QRCODE').on('click',function(){
        //$('#qrcode').click()
        $(this).fadeOut();
    });

    
    if(hasdoodle){
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



        if($(eos).parent('[id^=Zdog_],.zdog').length){
            //console.log(e,act,act.id);
            $(eos).attr('spinning',function(i,v){return v!='true'});
            e.stopPropagation();
        }else{

            if(hasdoodle){
                $('#caps ~ canvas').remove();
            
            }else if(/body/i.test(act)){
                location.href='index.html';
                //history.back()
            }
        }




	}).on('click','#launchCap',function(){

		open('doodle.html');

	}).on('click','#launch',function(){
		var x=$('#oHTML iframe').attr('src')||location.href, lv=$('.launch:visible');
		if(lv.length){
			lv.click()
		}else if(x){
			open(x);
		}else{
			$('#go').click()
		}

	}).on('click','#refresh',function(){
		var x=$('#oHTML iframe').attr('src')||location.href, lv=$('.launch:visible');
		if(x){
			$('#oHTML iframe').attr('src',x);
		}else{
			
		}

    }).on('click','#oHTML .katex',function(e){
        
        var shft=e.shiftKey||$('#Shift').is('.seled'), me=$(this),
            t1=me.find('annotation').eq(0).text(), t0=me.parent('.katex0').attr('data-katex0')||t1;
        copy2clipboard(shft?t1:t0);
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
        
    }).on('mouseover','#oHTML .katex',function(e){//, #oHTML svg[id]
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
                           // console.log($(this).is('div,td'),);
                            katex.render(kx(t), this, {
                                throwOnError: true,
                                displayMode: $(this).is('div,td'),
                                trust:true
                            });
                        });
                    }else if(!c.length){
                        var t=td.text();
                        if(td.length){
                            katex.render(kx(t), td[0], {
                                throwOnError: true,
                                displayMode: $(td).is('div,td'),
                                trust:true
                            });
                        }
                        
                    }
                });
                if(me.children().length){
                    me.find('.katex0').each(function(){
                        var t=$(this).text();
                        katex.render(kx(t), this, {
                            throwOnError: true,
                            displayMode: $(this).is('div,td'),
                            trust:true
                        });
                    });
                }else{
                    var t=me.text()
                    katex.render(kx(t), this, {
                        throwOnError: true,
                        displayMode: true,
                        trust:true
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
                displayMode: true,
                trust:true
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
                trust:true
            });
        });
        
    }).on('click','.katexv0',function(){
        var p=$(this).parent().parent(), v=p.find('.katexv');
        v.val(v.attr('data-katex'));
        


    }).on('click','.navHide',function(){
        var me=$(this),isup=me.text().indexOf('up')>0;
        $('#toolnav,#navhead').add(me.parent().parent().prev()).toggle(!isup);
        me.text('keyboard_arrow_'+(isup?'down':'up'))//.toggleClass('seled',isup);
        $('#panel').toggle(!isup);


	}).on('click','.subtabhead',function(e){
		var me=$(this).addClass('seled'), pa=me.parent(), i=me.index(),shft=e.shiftKey || $('#Shift').is('.seled');
        me.siblings('.subtabhead').removeClass('seled');
        var subtabi=pa.parent().find('.subtab').eq(i);
        subtabi.siblings('.subtab').hide();
        if(subtabi.is(':visible')){
            subtabi.hide();
            me.siblings().show();
        }else{
            subtabi.show();
            me.siblings().hide();
        }


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

    }).on('click','.qrScan',function(){
        var qr = new QrcodeDecoder();

        sTo(function(){
            qr.decodeFromImage($('#video_Camera')[0]).then((res) => {
                //console.log(res);
                if(res){

                    var u=res.data;
                    if(/^https?:.+$/.test(u)){
                        window.open(u)

                    }else{
                        $('.editorText.showSlide').val(function(i,v){return v+brn+u});
    
                    }


                }

            });
        },500);

    }).on('dblclick','.katexf',function(){
        var me=$(this);
        me.val(me.attr('placeholder'));

    }).on('mouseover', '[tip]:not(#tileTool),[hotkey]',function(e){
		var me=$(this),hk=me.attr('hotkey')||'';
		if($('#navHide').is('.seled') && me.is('#iClear') || isMobile){
			hk='';
        }
        if(me.parent('#iTextOpt').length * $('#iTextFold').not('.seled').length * $('#zMatherHide:contains(down)').length){
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

    reloadfavStar();
});
