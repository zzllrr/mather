/*
 * zzllrr lib for ZIG
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var H='http://',Hs='https://', w3c='www.w3.org/', xmlns=H+w3c+'2000/svg', xhtml=H+w3c+'1999/xhtml', xmlnsxlink=H+w3c+'1999/xlink',logon=false;
var imgPreReg='((file:[/]|https?:|ftp:)[/]|data:image)[/].+',
	imgPre=new RegExp(imgPreReg,'gi'), imgPreRe=new RegExp('^'+imgPreReg,'gi'),

	hanziCoreRe=/[\u4E00-\u9FA5\uFF00-\uFFFF]/g, hanziRe=/[^\x00-\xff]/g,//含中文标点
	enPunc=/[,\.\?!\/\-_:;'"\(\)\[\]\{\}]/g,hanziPunc=/[，。？！—：；‘’“”（）【】]/g, punc=/[,\.\?!\/\-_:;'"\(\)\[\]\{\}，。？！—：；‘’“”（）【】]/g,
	fontReData=/^data.+font[/].{40,}/i, imgPreReData=/^data.+image\/.{40,}/gi, txtPreReData=/^data.+text\/plain/gi,
fontHan='{"windows":{"宋体":"SimSun","黑体":"SimHei","微软雅黑":"Microsoft Yahei","微软正黑体":"Microsoft JhengHei","楷体":"KaiTi","新宋体":"NSimSun","仿宋":"FangSong"},"OS X":{"苹方":"PingFang SC","$黑体":"STHeiti","$楷体":"STKaiti","$宋体":"STSong","$仿宋":"STFangsong","$中宋":"STZhongsong","$琥珀":"STHupo","$新魏":"STXinwei","$隶书":"STLiti","$行楷":"STXingkai","冬青黑体简":"Hiragino Sans GB","兰亭黑-简":"Lantinghei SC","翩翩体-简":"Hanzipen SC","手札体-简":"Hannotate SC","宋体-简":"Songti SC","娃娃体-简":"Wawati SC","魏碑-简":"Weibei SC","行楷-简":"Xingkai SC","雅痞-简":"Yapi SC","圆体-简":"Yuanti SC"},"office":{"幼圆":"YouYuan","隶书":"LiSu","$细黑":"STXihei","$楷体":"STKaiti","$宋体":"STSong","$仿宋":"STFangsong","$中宋":"STZhongsong","$彩云":"STCaiyun","$琥珀":"STHupo","$新魏":"STXinwei","$隶书":"STLiti","$行楷":"STXingkai","@舒体":"FZShuTi","@姚体":"FZYaoti"},"open":{"思源黑体":"Source Han Sans CN","思源宋体":"Source Han Serif SC","文泉驿微米黑":"WenQuanYi Micro Hei"},"hanyi":{"!旗黑":"HYQihei 40S","!旗黑":"HYQihei 50S","!旗黑":"HYQihei 60S","!大宋简":"HYDaSongJ","!楷体":"HYKaiti","!家书简":"HYJiaShuJ","!PP体简":"HYPPTiJ","!乐喵体简":"HYLeMiaoTi","!小麦体":"HYXiaoMaiTiJ","!程行体":"HYChengXingJ","!黑荔枝":"HYHeiLiZhiTiJ","!雅酷黑W":"HYYaKuHeiW","!大黑简":"HYDaHeiJ","!尚魏手书W":"HYShangWeiShouShuW"},"fangzheng":{"@粗雅宋#":"FZYaSongS-B-GB","@报宋#":"FZBaoSong-Z04S","@粗圆#":"FZCuYuan-M03S","@大标宋#":"FZDaBiaoSong-B06S","@大黑#":"FZDaHei-B02S","@仿宋#":"FZFangSong-Z02S","@黑体#":"FZHei-B01S","@琥珀#":"FZHuPo-M04S","@楷体#":"FZKai-Z03S","@隶变#":"FZLiBian-S02S","@隶书#":"FZLiShu-S01S","@美黑#":"FZMeiHei-M07S","@书宋#":"FZShuSong-Z01S","@舒体#":"FZShuTi-S05S","@水柱#":"FZShuiZhu-M08S","@宋黑#":"FZSongHei-B07S","@宋三#":"FZSong","@魏碑#":"FZWeiBei-S03S","@细等线#":"FZXiDengXian-Z06S","@细黑一#":"FZXiHei I-Z08S","@细圆#":"FZXiYuan-M01S","@小标宋#":"FZXiaoBiaoSong-B05S","@行楷#":"FZXingKai-S04S","@姚体#":"FZYaoTi-M06S","@中等线#":"FZZhongDengXian-Z07S","@准圆#":"FZZhunYuan-M02S","@综艺#":"FZZongYi-M05S","@彩云#":"FZCaiYun-M09S","@隶二#":"FZLiShu II-S06S","@康体#":"FZKangTi-S07S","@超粗黑#":"FZChaoCuHei-M10S","@新报宋#":"FZNew BaoSong-Z12S","@新舒体#":"FZNew ShuTi-S08S","@黄草#":"FZHuangCao-S09S","@少儿#":"FZShaoEr-M11S","@稚艺#":"FZZhiYi-M12S","@细珊瑚#":"FZXiShanHu-M13S","@粗宋#":"FZCuSong-B09S","@平和#":"FZPingHe-S11S","@华隶#":"FZHuaLi-M14S","@瘦金书#":"FZShouJinShu-S10S","@细倩#":"FZXiQian-M15S","@中倩#":"FZZhongQian-M16S","@粗倩#":"FZCuQian-M17S","@胖娃#":"FZPangWa-M18S","@宋一#":"FZSongYi-Z13S","@剪纸#":"FZJianZhi-M23S","@流行体#":"FZLiuXingTi-M26S","@祥隶#":"FZXiangLi-S17S","@粗活意#":"FZCuHuoYi-M25S","@胖头鱼#":"FZPangTouYu-M24S","@卡通#":"FZKaTong-M19S","@艺黑#":"FZYiHei-M20S","@水黑#":"FZShuiHei-M21S","@古隶#":"FZGuLi-S12S","@幼线#":"FZYouXian-Z09S","@启体#":"FZQiTi-S14S","@小篆体":"FZXiaoZhuanTi-S13T","@硬笔楷书#":"FZYingBiKaiShu-S15S","@毡笔黑#":"FZZhanBiHei-M22S","@硬笔行书#":"FZYingBiXingShu-S16S"}}'.replace(/!/g,'汉仪').replace(/@/g,'方正').replace(/#/g,'简体').replace(/\$/g,'华文'),

	cssLinkRe=/\.css($|\?.*)/i, fontRe=/\.(eot|[ot]tf|ttc|font?|woff2?)($|#|\?.*)/i,
	cssImgReg='url\\([\'"]?[^\\\'"\\)\\s]+[\'"]?\\)', cssImgRe=new RegExp(cssImgReg,'gi'), textCssImgRe=new RegExp('([\\s:,]|^)'+cssImgReg,'gi'),

	imgReg='(bmp|gif|ico|jpeg|jpg|apng|png|svg|webp)',
	hrefImgRe=new RegExp('/\\S*\\.'+imgReg+'[\\?\\&]*.*','i'), textImgRe=new RegExp('(file:[/]|https?:|ftp:)[/]{2}[^/][^\'"\\s\\(\\)]*\\.'+imgReg,'gi'),
	digiReg=/^\d+(\.\d)?$/,
	regReg=function(t){return t.replace(/[\^\$\*\.\+\-\?\!\(\)\[\]\{\}]/g,'\\$&')}
;


$.expr[':'].bottom = function(obj){return $(obj).css('position') == 'fixed' && $(obj).css('bottom') == '0px' };
$.expr[':'].top = function(obj){return $(obj).css('position') == 'fixed' && $(obj).css('top') == '0px' };
$.expr[':'].left = function(obj){return $(obj).css('position') == 'fixed' && $(obj).css('left') == '0px' };
$.expr[':'].right = function(obj){return $(obj).css('position') == 'fixed' && $(obj).css('right') == '0px' };

$.expr[':'].fixed = function(obj){return $(obj).css('position') == 'fixed'};
$.expr[':'].abs = function(obj){return $(obj).css('position') == 'absolute'};

$.expr[':'].encoded = function(obj){return /:?encoded/i.test($(obj)[0].localName)};
$.expr[':'].number = function(obj){return $(obj).attr('type') == 'number'};
$.expr[':'].range = function(obj){return $(obj).attr('type') == 'range'};
$.expr[':'].color = function(obj){return $(obj).attr('type') == 'color'};
$.expr[':'].date = function(obj){return $(obj).attr('type') == 'date'};
$.expr[':'].time = function(obj){return $(obj).attr('type') == 'time'};

$.fn.extend({
  twinkle: function() {
    return $(this).fadeTo('slow', 0).fadeTo('slow', 1);
  }
});

function consolelog(){
	if(logon){
		console.log.apply(null,arguments)
	}
}
function gM(msg,str) {return msg}

var H5Colors='aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen';
function H5Color(neg,pos){
	var A=H5Colors.replace(/[^,]*grey[^,]*,/g,'').replace(/,(cyan|magenta),/g,',');
	if(neg){
		var B=neg.split(',');
		for(var i=0;i<B.length;i++){
			A=A.replace(new RegExp('[^,]*'+B[i]+'[^,]*','g'),'');
		}
	}
	A=A.replace(/,{2,}/g,',').replace(/^,|,$/g,',').split(',');
	if(pos){
		var B=pos.split(','),C=[];
		for(var j=0;j<A.length;j++){
			var b=false;
			for(var i=0;i<B.length;i++){
				if(A[j].indexOf(B[i])>-1){
					b=true;
					break
				}
			}
			if(b){
				C.push(A[j])
			}
		}
		A=C.slice();
	}
	return A
}
var ZRL='aphanomkkjgledipighdfjnilhfenpam', ZRC='jobnmmcljcfepgnecadofbjdklkibgei', ZIG='gfjhimhkjmipphnaminnnnjpnlneeplk', ZIL='bedbigoemkinkepgmcmgnapjcahnedmn',ZAin1='alhfmphdglcigimlmnkemofpdhfaloep', webStore=H+'chrome.google.com/webstore/detail/', CN='', isCN=false,isCNzh=false;

if(gM('@@ui_locale').slice(0,2)=='zh'){isCN=true;isCNzh=gM('@@ui_locale')=='zh_CN'; CN='?hl=zh_cn'}
var HOM={
	'ZIG':webStore+ZIG+CN,
	'ZIL':webStore+ZIL+CN,
	'ZRL':webStore+ZRL+CN,
	'ZRC':webStore+ZRC+CN,
	'ZAin1':webStore+ZAin1+CN,
	'Z':webStore.replace('detail','search')+'zzllrr',
	'ZQR':H+'site.douban.com/127068/',
	'ZIGPic':H+'img3.douban.com/view/photo/photo/public/p1376698902.jpg'
};

var strop='</option><option value=', strchkbx0='<input type=checkbox ', strbtn='<input type=button value="', btnGo=strbtn+'GO" class=vipurl />',num=function(x){return '<input type=number value='+x+' min=0 />'},
imgSRC='<img src="img/', prog=imgSRC+'loading.gif" width=16 class=prog />', chked=' checked', seled=' selected',
bgfrom='-webkit-gradient(linear, 0% 0%, 0% 100%, from(', bgto='), to(', grad=function(t){
	//return '-webkit-gradient(radial, 20 20, 0, 20 20, 50, from(white), to(white), color-stop(.9,'+t+'))'
	return '-webkit-linear-gradient(top, white, '+t+' 20%, '+t+' 80%, white)'
},
SC='<span class=', sc='</span>', sC=sc+SC, SCtv=function(t,v){return SC+'"'+t+'">'+(v||'')+sc},itv=function(t,v){return '<i class="mi '+t+'">'+(v||'')+'</i>'},
DC='<div class=', dc='</div>', dC=dc+DC, DCtv=function(t,v){return DC+'"'+t+'">'+(v||'')+dc},br='<br/>',hr='<hr/>',
detail=function(s,v,o){var t=XML.wrapE('details',XML.wrapE('summary',s)+v);return o?t.replace('>',' open>'):t},
mark=function(v,t){return '<mark title='+(t||'API')+'>'+v+'</mark>'},del=function(s){return XML.wrapE('del',s)},
href=function(url,title){return '<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+(title||url)+'</a>'},
ol=function(A,c,start){return '<ol class="alignl '+(c!=null?c:'')+'"'+(start!=null?' start='+start:'')+'>'+Arrf(function(t){return XML.wrapE('li',t)},A).join('')+'</ol>'},
ul=function(A,c){return '<ul class="alignl '+(c!=null?c:'')+'">'+Arrf(function(t){return XML.wrapE('li',t)},A).join('')+'</ul>'},
dl=function(A,B,c){return '<dl class="alignl '+(c!=null?c:'')+'">'+concat(Arrf(function(t){return XML.wrapE('dt',t)},A),Arrf(function(t){return XML.wrapE('dd',t)},B)).join('')+'</dl>'},

sup=function(v){return XML.wrapE('sup',v)}, sub=function(v){return XML.wrapE('sub',v)},
msub=function(m,v,r2l){var s=SCtv('inblk',v!=null?m:m[0]);return SCtv('scbox',(r2l?'':s)+XML.wrapE('sub',v!=null?v:m.substr(1))+(r2l?s:''))},
msup=function(m,v,r2l){var s=SCtv('inblk',v!=null?m:m[0]);return SCtv('scbox',(r2l?'':s)+XML.wrapE('sup',v!=null?v:m.substr(1))+(r2l?s:''))},
msups=function(A){return Arrf(msup,A,'-cp2')},msubs=function(A){return Arrf(msub,A,'-cp2')},
subsup=function(b,t){return SCtv('scbox',SCtv('inblk alignl',sub(t)+br+sup(b)))},
msubsup=function(m,b,t,r2l){var s=SCtv('inblk',b?m:m[0]);return SCtv('scbox',(r2l?'':s)+SCtv('inblk alignl',sub(t)+br+sup(b||m.substr(1)))+(r2l?s:''))},
Msubsup=function(M,b,t){var s=SCtv('inblk large',M);return SCtv('scbox',s+SCtv('inblk alignl',sub(t)+br+sup(b==null?'':b)))},

subReg=function(v,b,u){var t=u?v.replace(u,function(t){return sup(t)}):v; return b?t.replace(b,function(t){return sub(t)}):t},

scRed=function(v){return SCtv('red',v)},scGain=function(v){return SCtv('gainsboro',v)},scHotk=function(v){return SCtv('hotk',v)},
sci=function(){var ar=arguments,s=Array().join.apply(ar); return SCtv('inblk',s)},
scit=function(v){return SCtv('bdt inblk notm',v)},scib=function(v){return SCtv('bdb inblk notm',v)},scil=function(v){return SCtv('bdl inblk notm',v)},scir=function(v){return SCtv('bdr inblk notm',v)},
scbt=function(v,brad){return SCtv('bdb bdt'+(arguments.length>1?' brad':''),v)},sclr=function(v){return SCtv('bdl bdr'+(arguments.length>1?' brad':''),v)},//参数brad 是border radius
scbox=function(v,b){return SCtv('bdl bdr bdb bdt scbox '+(b||''),v)},scblr=function(v,b){return SCtv('bdl bdr bdb scbox inblk'+(b||''),v)},sctlr=function(v,b){return SCtv('bdl bdr bdt scbox inblk'+(b||''),v)},
tmb=function(t,m,b,v){return SCtv('inblk alignc',sub(t)+br+m+br+sup(b))+sci(v)},//tmb=function(t,m,b,v){return SCtv('inblk alignc',SCtv('small',t)+DCtv('large',m)+SCtv('vat small',b))+sci(v)},
lim=function(n,x,v,ud){var x0=(x==null?'':''+x).replace(/[\+-]$/,''),lr=/[\+-]$/.test(x) && !/^[\+-]/.test(x)?x.substr(-1):''; return SCtv('inblk alignc',(ud=='u'?scit('lim'):(ud=='d'?scib('lim'):'lim'))+br+sup(n+'→'+(x0||(/^[\+-]$/.test(x)?x:'')+'∞')+(lr?sup(lr):'')))+(v||'')},
sum=function(i,b,t,v,p){return SCtv('inblk alignc',sub(t=='+'?'∞':t)+br+'∑∪'[p||0]+br+sup(i?i+'='+b:b))+sci(v)},
prod=function(i,b,t,v,p){return SCtv('inblk alignc',sub(t=='+'?'∞':t)+br+'∏∩×∐∧'[p||0]+br+sup(i?i+'='+b:b))+sci(v)},
intl=function(v,b,t,d,p){return Msubsup('∫∬∭∮∯∰∱∲∳'[p||0],b==null?'':b,(/[\+\-]/.test(t)?t+'∞':t)||(b==null?'':'+∞'))+v+'d'+(d||'x')},

madd=function(A){return A.join('+')},mminus=function(A){return A.join('-')},mtimes=function(A){return A.join('⋅')},mtimes2=function(A){return A.join('×')},mdivide=function(A){return A.join('÷')},
mfrac=function(A){return Arrf(frac,A,'-cp2')},mfracs=function(A,b,infMid,infEnd,ops){//连分式 b0+a0/(b1+a1/(b2+a2/...)) ops指定连接符序列：+(默认),-,+-,-+,+--,-++
	var An=A.length,B=[].concat(b),Bn=b.length,t='';//Bn比An大1，否则如相等，则最外层分式之前无内容
	if(Bn==An){
		B=[''].concat(b);
		Bn++;
	}
	if(Bn==2){
		var op=/^..$/.test(ops)?ops[0]:(ops||'+').substr(-1);
		return B[0]+(infMid?op+'⋯':'')+op+frac(A[0],B[1]+(infEnd?op+'⋱':''))
	}else{
		var ops2=ops||'+',op=ops2;
		if(op=='+--' || op=='-++'){
			op=op[0];
			ops=ops[1];
		}else if(op=='+-' || op=='-+'){
			op=op[0];
			ops=ops[1]+op;
		}
		return (B[0]!==''?B[0]+op:'')+frac(A[0],mfracs(A.slice(1),B.slice(1),infMid,infEnd,ops))
	}
},
mroot=function(A){return Arrf(root,A,'-cp2')},mroots=function(A,B,infMid,infEnd,ops,Aisindex){//连根式 b0+a0√(b1+a1√(b2+a2√...)) ops指定连接符序列：+(默认),-,+-,-+,+--,-++	Aisindex指定数组A是根次，而不是倍数
	var An=A.length,Bn=B.length,t='';//Bn比An大1
	if(Bn==2){
		var op=/^..$/.test(ops)?ops[0]:(ops||'+').substr(-1);
		return B[0]+(infMid?op+'⋯':'')+op+(An && !Aisindex?A[0]:'')+root(B[1]+(infEnd?op+'⋯':''),(An && Aisindex?A[0]:''))
	}else{
		var ops2=ops||'+',op=ops2;
		if(op=='+--' || op=='-++'){
			op=op[0];
			ops=ops[1];
		}else if(op=='+-' || op=='-+'){
			op=op[0];
			ops=ops[1]+op;
		}
		return B[0]+op+(An && !Aisindex?A[0]:'')+root(mroots(A.slice(1),B.slice(1),infMid,infEnd,ops,Aisindex),(An && Aisindex?A[0]:''))
	}
},

rel=function(A,rA,style){//通用模板
	var l=A.length, r=style?br:' ',s='';
	Arrf(function(t,i){if(i){s+=r+rA[i-1]+' '+t}else{s=t}},A)
	return s
},
mod=function(a,b,m,neg,pow){return (isArr(a)?a.join('≡'):a)+(neg?'≢':'≡')+b+' ('+(pow?'pow':'mod')+' '+m+')'},
imply=function(A,b,single,neg,inv,style){var isA=isArr(A), s=inv?(single?'←':'⇐'):(single?'→':'⇒'), l=A.length, r=style?br:' ';return (isArr(A)?A.slice(0, l-1).join(r+s+' '):A)+r+(neg?(inv?(single?'↚':'⇍'):(single?'↛':'⇏')):s)+' '+(isA?A[l-1]:b)},
eqv=function(A,b,n,neg,style){/*
	equivalent等价关系
	n是符号编号
	0 =
	1 ↔
	2 ⇔
	3 ≡
	4 ~	[用波浪线~，而不是∼]
	5 ≈
	6 ≋
	7 ≃
	8 ≅
	9 
	10 
	
	参数 style指定换行（否则默认是空格）
*/
	var c=['=↔⇔≡~≈≋≃≅','≠↮⇎≢≁≉ ≄≇'],isA=isArr(A), s=c[0][n||0], l=A.length, r=style?br:' ';
	return (isA?A.slice(0, l-1).join(r+s+' '):A)+r+(neg?c[1][n||0]:s)+' '+(isA?A[l-1]:b)
},
eq0=function(A,n){/*
	等于0
*/
	return eqv(isArr(A)?[].concat(A,0):[A,0],'',n)
},
lt=function(A,b,nm,style){/*
	nm是数组[连续的符号编号, 类别序号]
		符	号	编	号
		0	1	2	3	4	5	6	7	8	9	a	b	c	d	e	f	g	h	i	j
类	0	≤	<	=	≠	≮	≰	≪	⋘	⋖	⋜	≦	≨	≲	≴	⋦	≶	≸	⋚
别	1	≼	≺	=	≠	⊀	⋠	⋞	≾	⋨	⊰
序	2
号	3



*/
	var c=[],isA=isArr(A), r=style?br:' ';
	return isA?rel(A,Arrf(function(t){return c[nm[1]][+t||parseInt(t,36)]},nm[0].split('')),style):A+r+c[nm?nm[1]:0][nm?nm[0]||parseInt(+nm[0],36):0]+' '+b
},
gt=function(A,b,nm,style){/*
	nm是数组[连续的符号编号, 类别序号]
		符	号	编	号
		0	1	2	3	4	5	6	7	8	9	a	b	c	d	e	f	g	h	i	j
类	0	≥	>	=	≠	≯	≱	≫	⋙	⋗	⋝	≧	≩	≳	≵	⋧	≷	≹	⋛
别	1	≽	≻	=	≠	⊁	⋡	⋟	≿	⋩	⊱
序	2
号	3

*/
	var c=[],isA=isArr(A), r=style?br:' ';
	return isA?rel(A,Arrf(function(t){return c[nm[1]][+t||parseInt(t,36)]},nm[0].split('')),style):A+r+c[nm?nm[1]:0][nm?nm[0]||parseInt(+nm[0],36):0]+' '+b

},

eq=function(t,m,b){return SCtv('inblk pd10 alignc',SCtv('small pd10', t||'')+DCtv(m||'eq')+SCtv('small',b||''))},
Eq=function(A,noteA,style,eqClass){
	/*
	A 等值
	noteA 备注
	eqClass 连接符（默认是等号eq）

	style 指定排版风格
		line 排成一行
		br 简单换行（默认）
		table 等号对齐，都在第2列；注释都在第4列
		
		eq 等号上备注

	注意，A比noteA的length大1，存储原式
	*/
	var n=A.length, a=[], sty=style||'br',isline=/line/.test(sty), isbr=/br/.test(sty), istb=/table/.test(sty), eqC=eqClass||'';
	for(var i=0;i<n-1;i++){
		var nAi=noteA?(noteA[i]||''):'',ai='', isA=nAi instanceof Array;
		if(isbr || isline){
			if(i==0){
				ai=A[0]+(isline?' ':'');
			}
			if(eqC && eqC!='eq' || !eqC && nAi){
				ai+=(isA?eq(nAi[0],eqC,nAi[1]||''):eq(nAi,eqC))+A[i+1]
			}else{
				ai+='= '+A[i+1]+' '+nAi
			}
		}
		if(istb){
			if(eqC){
				ai=[i==0?A[0]:'',isA?eq(nAi[0],eqC,nAi[1]||''):eq(nAi,eqC),A[i+1]];
			}else{
				ai=[i==0?A[0]:'','=',A[i+1],nAi];
			}
			
	//console.log(ai);
		}
		a.push(isbr?DCtv('inblk pd10',ai):ai)
	}
	return istb?Table('',a,'alignl'):a.join('')
},
Table=function(thead,t,bd,tbodyClass){	//bd 指定边框风格（或其他class） thead是数组，末项（n>1时）是列标题，前n-1项是行标题
	/*
		bd：表格class（控制表格外边框）
		
			bd0 无边框（默认）
			
			
			
			TBtimes （群、九九）乘法表：首行bdb 首列bdr
			TBr 全部行
			TBc 全部列
			TBrc 所有单元格
			
			TBr2	行平均分两块
			TBc2	列平均分两块
			TBr2c2  十字分隔 【注意r2、c2是或关系】

			
			TBD3_4_2		主对角阵分块（仅方阵）
			TBCD3_4_2		副对角阵分块（仅方阵）

			除法（长除、短除、辗转相除）
		
			TBcalc 竖式计算（+ - × ÷ √）
			
			TBI2J2 第2行或第2列加边框
			TBI2_4J2_3 第2、4行或第2、3列加边框

			TB[i2][j3][lrbt]		部分单元格边框【注意i、j小写是且关系，大写是或】
					[lrbt] 默认全选
				TBi2j3lr 第2行且第3列加左右边框
				TBj3r
				TBi2b
			TBi2j3_TBi4j2 多个单元格，用下划线_隔开

bds 指定线条风格
		
			dashed	虚线
				solid
				dash(ed)
				dot(ted)
				double
				groove
				inset
				outset（默认）
				ridge

		
	*/
	//console.log(t);


		var th='',b='</tbody></table>',colh='',
			bds=/dash|dot|dou|set|ridge|solid/.test(bd)?bd.match(/solid|dash|dot|double|groove|inset|outset|ridge/g).join(' '):'',
			r=[],isA=t instanceof Array,A=isA?t:t.split('\n'),n=A.length,m=(isA?A[0]:A[0].split('\t')).length;
		
		if(thead){
			var thn=thead.length;
			for(var i=0;i<thn;i++){
				if(i && i==thn-1){
					colh=thead[i];
					break;
				}
				var thi='<tr>',hdi=thead[i];
				for(var j=0;j<m;j++){
					thi+='<th class=bds>'+hdi[j]+'</th>';
				}
				thi+='</tr>';
				th+=thi;
			}
			th='<thead'+(tbodyClass?' class=cnt':'')+'>'+th+'</thead>';
		}
		var a='<table class="'+(bd||'bd0')+' collapse">'+th+'<tbody'+(tbodyClass?' class="'+tbodyClass+'"':'')+'>';
		if(bd && /TB[CD]/.test(bd)){
			var isC=/TBC/.test(bd),iA=bd.split(' ')[0].split('D')[1].split('_'),iAn=iA.length,jA=iA.join(',').split(',').reverse();

			for(var i=0;i<iAn;i++){
				if(i==0){
					iA[i]=+iA[i]
				}else{
					iA[i]=+iA[i]+iA[i-1]
				}

				if(isC){
					if(i==0){
						jA[i]=+jA[i]
					}else{
						jA[i]=+jA[i]+jA[i-1]
					}
				}
			}
			
			if(isC){

			}else{
				jA=iA;
			}
			
		}

		for(var i=0;i<n;i++){
			var ri=[],Ai=isA?A[i]:A[i].split('\t');
			for(var j=0;j<m;j++){
				var c='';
				if(bd){
					if(/TBrc/.test(bd)){
						c+='bdl bdr bdb bdt'
					}else if(/TBr?c(?!\d)/.test(bd)){
						c+='bdr '
					}else if(/TBr(?!\d)/.test(bd)){
						c+='bdb '
					}

					if(/TBtimes/.test(bd)){
						if(!i){c+='bdb '}
						if(!j){c+='bdr'}
					}
					
					if(/TB(r\d+)?c\d+/.test(bd) && j==m/+bd.match(/TB(r\d+)?c\d+/)[0].split('c')[1]-1){
						c+='bdr '
					}
					if(/TBr\d+/.test(bd) && i==n/+bd.match(/TBr\d+/)[0].split('r')[1]-1){
						c+='bdb '
					}
					if(/TB(I[\d_]+)?J\d+/.test(bd) && bd.match(/TB(I[\d_]+)?J[\d_]+/)[0].split('J')[1].split('_').indexOf(''+(j+1))>-1){
						c+='bdr '
					}
					if(/TBI[\d_]+/.test(bd) && bd.match(/TBI[\d_]+/)[0].split('I')[1].split('_').indexOf(''+(i+1))>-1){
						c+='bdb '
					}
					if(/TB[CD]/.test(bd)){
						if(iA.indexOf(i+1)>-1 && i<n-1){
							c+='bdb '
						}
						if(jA.indexOf(j+1)>-1 && j<m-1){
							c+='bdr '
						}
					}
					if(/TB[ij]\d+/.test(bd)){
						var ijs=bd.match(/TB([ij]\d+)+[lrbt]?/g);
						for(k=0;k<ijs.length;k++){
							var ijb=ijs[k].substr(2), ij=ijb.replace(/\D+$/,'');
							if(eval(ij.replace(/[ij]/g,'$&==').replace(/\d+/g,'$&-1').replace(/-1j/g,'-1 && j'))){
								c+=(ijb.substr(ij.length)||'lrbt').replace(/./g,'bd$& ')
							}
						}
					}

				}
				//console.log(Ai[j]);
				ri.push('<td class="'+(c?zlr2(c,bds||''):'bd0')+'">'+Ai[j]+'</td>')
			}
			r.push(XML.wrapE('tr',(colh?'<th>'+colh[i]+'</th>':'')+ri.join('')))
		}
		return /scroll/.test(bd)?DCtv('scroll',a+r.join('')+b):a+r.join('')+b
	},
mtrx=function(v,lr,lcr){return SCtv('mtrx'+(lr||'')+' inblk align'+(lcr||lr||'c'), v instanceof Array?Table('',v):v)},
det=function(A){return SCtv('bdl bdr inblk alignc',Table('',A))},
lp=function(l,v){var t=arguments.length==1; return (!t && !l?'':SCtv('inblk xxlarge', t?'{':l))+SCtv('inblk alignl', t?l:v)},
rp=function(v,r){return SCtv('inblk alignr',v)+(r===''?'':SCtv('inblk xxlarge', r||'}'))},
lrp=function(l,v,r){var t=arguments.length==1; return SCtv('inblk xxlarge', t?'(':l)+sci(t?l:v)+SCtv('inblk xxlarge', t?')':r)},
frac=function(t,b){var nob=b==undefined;return SCtv('inblk alignc',SCtv('alignc',nob?t[0]:t)+DCtv('fracline')+SCtv('alignc',nob?t[1]:b))},
root=function(t,n,s){return SCtv('rootleft inblk notm" data-size="'+(s||1),DCtv('rootleftline" data-index="'+
	(n && !/^[234]$/.test(n)?n:''))+
	SCtv('symbol',/^[34]$/.test(n)?'∛∜'[+n-3]:'√'))+sci(DCtv('fracline')+t)},//root=function(t,n,s){return sci(n?sup(n):'')+SCtv('rootleft" data-size="'+(s||1),'√')+SCtv('bdt',sci(t))}
//OH(root(frac(root('3+x',3),3),3))
sceg=function(v){return SCtv('eg',v)},sceg2=function(v){return SCtv('eg eg2',v)};



var FNS={
	'weixin':' weixin.ico',
	'tsina':'sinaweibo Weibo.ico 1133462976',
	'tqq':' tqq.gif 801404261',
	't163':' t163.gif 78JugW1nGMG47X1z',
	'douban':'douban Douban.ico 0dd41f9f32ae2c80297c5edd980a8580',
	'renren':' renren.ico aeaed3d9245b449094eb8d7fe0691713',
	'baidu':'baidu Baidu.ico',
	'fb':'facebook Facebook.png 227606350619834',
	'twitter':'twitter Twitter.gif',
	'googleplus':'google_plusone_share g+.ico',
	'gmail':'gmail Gmail.ico',
	'translate':'googletranslate lang.ico',
	'more':'addthis Share.ico'
},Random=function(n,digits){//从1～n中随机选1个数字		指定digits，则随机给出一个n位10进制数（文本形式）
	if(digits){
		var s=''+Math.round(Math.random()*(10-1)+1);
		for(var i=1;i<n;i++){
			s+=Math.round(Math.random()*(10-1))
		}
		return s
	}
	return Math.round(Math.random()*(n-1)+1)

},jSoff=JSON.stringify;

function zlr(pre,s,sep){var t=(sep===undefined?' ':sep)+pre;return pre+s.split(' ').join(t)}
function zlr2(s,sur,sep){var t=sur+(sep===undefined?' ':sep);return s.split(' ').join(t)+sur}
function zlr3(pre,s,sur,sep){return zlr(pre,zlr2(s,sur),sep)}
function zlrA(pre,A){return Arrf(function(t){return pre+t},A)}
function zlrA2(A,sur){return Arrf(function(t){return t+sur},A)}
function zlrA3(pre,A,sur){return Arrf(function(t){return pre+t+sur},A)}


function ZLR(s0,s1,s){
	var al=arguments.length;
	if(al==1){return s0.split(' ')}
	if(typeof(s1)=='number'){
		
		try{
			return Array(s1+1).join(s0);
		}catch(e){
			console.log(s1,e)
		}
	}else{
		return zlr(s0,s1).split(al<3?' ':s);
	}
}
function copyA(s,n){
	//return ZLR(s+'\n',n).trim().split('\n')
	var a=[];
	for(var i=0;i<n;i++){
		a.push(s);
	}
	return a;
}

function ZLR3(preA,sA,surA,sep){//拼接字符串
	var n=sA.length,s='',PA=preA instanceof Array, SA=surA instanceof Array,sp=sep===undefined?',':sep;

	for(var i=0;i<n;i++){
		s+=(sA[i]==='⋯'?'⋯':(PA?preA[i]:preA)+sA[i]+(SA?surA[i]:surA))+sp;
	}
	return s.substr(0,s.length-sp.length)
}

function imgFav(t){return 'chrome://favicon/size/16@1x/'+(t.indexOf(Hs)==0?Hs:H)+H_W1(t)}

function altTxt(t){return (t||'').replace(/[\s\r?\n]+/g,' ').replace(/\\/g,'').trim()}
function pathTxt(t,single){return (t||'').replace(/\\/g,'/').replace(/(\s*\/+\s*)/g,'/').trim()
	.replace(/^\/+|\/+$/g,'').replace(/["\\:\?\*<>\|]/g,'-').replace(/\//g,single?'_':'/').replace(/~/g,'_')}
function CntN(t,i){
	var arr=(t||'').replace(/[\s\(\)]/g,'').split('-'), tArr=Array(4), t;

	if(arr.length<2){tArr[2]=1; tArr[3]=1}else{
		t=arr[1].split('/');
		tArr[2]=t[0];
		if(t.length<2){tArr[3]=t[0]}
	}
	t=arr[0].split('/');
	tArr[0]=t[0];
	if(t.length<2){tArr[1]=t[0]}

	return Number(tArr[i||0]);
}
function Cnt(n,n2,m,m2){
	var arg=arguments.length, t1=n, t2='';

	if(arg>=2){
		t1=n+(n==n2?'':'/'+n2);
		if(arg>2){
			t2=m+(m==m2?'':'/'+m2);
			t2=t2=='1'?'':'-'+t2;
		}
	}
	return ' ('+t1+t2+')'
}


function spanHotk(t){return SC+'hotk>'+t+sc}

function q_key(s,a,ins,noAppend,hotk){
	var tR=RegExp(a), tr=RegExp(a,'i'), inS=ins?'<ins>$&</ins>':'&$&', t;
	t=tR.test(s)?s.replace(tR,inS):((tr.test(s) || noAppend)?s:s+'('+a+')').replace(tr,inS);
	return hotk?t.replace(/\(.+\)/, spanHotk(a)):t;
}



function scrollH(){return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)}
//document.body.scrollHeight = $('body').height() = document.body.clientHeight > document.documentElement.scrollHeight

function scrollW(){return $('body').width() || document.documentElement.scrollWidth}
//console.log(document.body.scrollWidth , $('body').width() , document.body.clientWidth ,document.documentElement.scrollWidth)


function Scroll(t){
	if(/scroll[TB]$/.test(t)){document.documentElement.scrollTop=(t=='scrollT'?0:scrollH())}
	if(/scroll[LR]$/.test(t)){document.documentElement.scrollLeft=(t=='scrollL'?0:scrollW())}
	
	if(/scroll(Up|Down)/.test(t)){document.documentElement.scrollTop=(document.documentElement.scrollTop+$(window).height()*(t=='scrollDown'?1:-1))}

	//window.innerHeight > document.documentElement.clientHeight = $(window).height()
	if(/scroll(Left|Right)/.test(t)){document.documentElement.scrollLeft=(document.documentElement.scrollLeft+$(window).width()*(t=='scrollRight'?1:-1))}
	//console.log(window.innerWidth ,'>', document.documentElement.clientWidth ,'=',$(window).width())


	if(t=='scrollY'){document.documentElement.scrollTop=window.scrollY}
	if(t=='scrollX'){document.documentElement.scrollLeft=window.scrollX}
}

function titleRe(t){document.title=t}

function Node(node){
	var t=$(node);
	$('iframe').each(function(){
		try{
			//if(this.contentDocument){
				t=t.add($(this.contentDocument.body).find(node));
				//console.log(node, t.length, this.src);
			//}
		}catch(e){
			return t
			console.log('iframe err', e);
		}

	});
	return t;
}
function attr2dataset(t){
	return t.replace(/data-(.+)/,'dataset.$1').replace(/-[^-]+/g,function(a){return a.substr(1,1).toUpperCase()+a.substr(2)})
}
function urlArr(jQExp,attr,attr2){
	var jQ=jQExp||'a[href]:has(img)', t=[], a,s;
	Node(jQ).each(function(){
		if(attr){
			s=eval('this.'+attr2dataset(attr))
		}else{
			s=this.href
		}
		if(attr2){
			a=eval('this.'+attr2dataset(attr2)).trim()+'\t'
		}else{
			a=''
		}
		if(s && s.indexOf('javascript:')< 0 && t.indexOf(a+s)<0){ t.push(a+s)}});
	return t;
}
function tableArr(jQExp,type){//type=str/arr/csv
	var jQ=jQExp||'table', typ=type||'str', isCSV=typ=='CSV',isA=typ=='arr',t=[];

	Node(jQ).children().each(function(){
		$(this).children().each(function(){
			var s=[];
			$(this).children().each(function(){
				var td=$(this).text().trim();
				if(isCSV){
					if(/"/.test(td)){
						td=td.replace(/"/g,"'");
					}
					if(/,/.test(td)){
						td='"'+td+'"';
					}
				}
				s.push(td);
			})
			t.push(isA?s:s.join(isCSV?',':'\t'))
		})
	});	
	if(typ!='arr'){
		t=t.join('\n')
	}
	return t;
}

function isArr(obj,dim) {return obj instanceof Array && (dim?obj[0] instanceof Array:1)} //Object.prototype.toString.call(obj) === '[object Array]'} //x instanceof Array

function fn0(k){return encodeURIComponent(k)}
function fn1(k){return decodeURIComponent(k)}
function fna(k){return k.replace(/ /g,'+')}
function fna0(k){return fn0(k).replace(/%20/g,'+')}
function fnb(k){return k}
function fnc(k){return escape(k)}
function fnd(k){return k.replace(/ /g,'_')}
function fne(k){return escape(k.replace(/ /g,'-'))}
function fnt(k){return escape(H_d(k))}
function fnx(k){return k.replace(/^<!\[CDATA\[|\]{2}>$/g,'') }
function fns(webid, url, title, smry, pic){
	var arr=(FNS[webid]||'').split(' '), p=pic?'&pic='+pic:'', str, k, web=webid, jia=isCN || !arr[0];
	if(webid=='more'){web=''}else{web='&'+(jia?'webid='+web:'s='+arr[0])}

	if(jia){
		if(arr.length>2){k='&appkey='+arr[2]}else{k=''}
		if(webid=='tsina'){k+='&ralateuid=2356984903'}
		str='jiathis.com/send/?uid=1515817'+ k+p +'&summary';
	}else{
		if(webid=='twitter'){web += '&via=zzllrrImager'}
		str='addthis.com/bookmark.php?pubid=ra-4eeb29d528c674a8&description';
	}
	return H+'www.'+ str +'='+ fn0(smry) + web +'&url='+ url +'&title='+ fn0(title);
}
function fnq(k,w,d){
	var t=[
		H+'s.jiathis.com/qrcode.php?url=',
		Hs+'chart.googleapis.com/chart?chs='+(w||150)+'x'+(w||150)+'&cht=qr&chl=',
		Hs+'api.qrserver.com/v1/create-qr-code/?size='+(w||150)+'x'+(w||150)+'&data=',
		H+'www.qrstuff.com/generate.generate?preview=1&type=URL&url=',
		H+'www.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=',
		H+'qrfree.kaywa.com/?l=1&s=8&d='];
	return t[d||0]+fn0(k)
}

function H_u(t){return (t||'').replace(/[\?&]utm_.+=.*&utm_.+=.*&utm_.+=[^#]*/,'')}
function H_w(t){return (t||'').replace(/^https*:[/]{2}/,'')}
function H_w1(t){return (t||'').replace(/^http:[/]{2}/,'')}
function H_W(t){return H_w(t).replace(/[/\?].*$/,'')}
function H_W1(t){return H_W(t).replace(/.+\.(.*\.co.*)/,'$1')}
function H_d(t){return H_W(t).replace(/^www\./,'')}
function H_h(F,H){var f=H_W(F), h=H_w(H); if(h==f || h==f+'/'){h=''} return h}

function H_a(u,base){

	var b=base||'';

	if(b.indexOf('/',8)>0){
		var b0 = b.substr(0,b.indexOf('/',8)) + '/';
		var b1 = b.substr(0,b.lastIndexOf('/')) + '/';
	}else{
		var b0 = b + '/';
		var b1 = b + '/';
	}

	if(/chrome-extension:\/\/[^\/]+\./.test(u||'')){
		return u.replace('chrome-extension','http');
	}
	var t=(u||'').replace(/chrome-extension:\/\/[^\/]+/,'').replace(/\n/g,'').trim();
	if(!t){return ""}
	if(imgPreReData.test(t)||/^(file|chrome):[/]{2}/.test(t)){return t.replace(/\s/g,'')}
	if(/^\?/.test(t)){return b.replace(/\?.+/,t)}

	var src = t.replace(/[/\\]{2,}/g,'//');
	imgPreRe.lastIndex=0;
	if( !src.match(imgPreRe) ){
		if( t.substr(0,2)=='//'){
			src = b.split('//')[0] + t;
		}else if( t.charAt(0)=='/'){
			src = b0 + t.substr(1);
		}else if( t.match(/\.\.[/].+/)){
			var i=t.lastIndexOf('../') + 3;
			var j=t.slice(0,i).split('../').length * (-1);
			if(b1==b0){
				var tmpAry = (b1+'/').split('/');
			}else{
				var tmpAry = b1.split('/');
			}
			src = tmpAry.slice(0,j).join('/') + '/' + t.substr(i);

		}else{
			src = b1 + t.replace('./','');
		}
	}

	return src;
}

function html2txt(h){return $('<b>'+h+'</b>').text().trim()}
function html2html(h){return $('<div>'+h+dc).html().trim()}

function saveText(t,filename){
	var mime='text/plain';
	saveAs('data:'+mime+';charset=utf-8;base64,' + Base64.encode(t), filename)
}
function saveAs(Url,filename){
	var blob=new Blob([''], {type:'application/octet-stream'}),u=URL||webkitURL;
    var url = u.createObjectURL(blob);
    var a = document.createElementNS(xhtml,'a');
    a.href = Url;
    a.download = filename;
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
    u.revokeObjectURL(url);
}
function svgAs(svg,base64){
	var t=$(svg).attr('xmlns',xmlns).attr('xmlns:xlink',xmlnsxlink), xml=(new XMLSerializer).serializeToString(t[0]);
	return (base64?"data:image/svg+xml;base64,"+Base64.encode(xml):xml);
}

var svgf={
		path:function(d){
			return '<path d="'+d+'" stroke="white" fill="none"></path>'
		},text:function(i,t){
			return '<text y="'+(t?t[0]:22)+'" x="'+(t?t[1]:6)+'" font-size="'+(t?t[2]:16)+'" fill="white">'+i+'</text>'
		},rect:function(i,j,k){
			return '<rect x="'+i+'" y="'+j+'" width="'+k+'" height="'+k+'" stroke="white" fill="none"></rect>'
		},circle:function(cx,cy,r){
			return '<circle r="'+r+'" cx="'+cx+'" cy="'+cy+'" stroke="white" fill="none"></circle>'
		},line:function(a,b,c,d){
			return '<line x1="'+a+'" y1="'+b+'" x2="'+c+'" y2="'+d+'" stroke="white" fill="none"></line>'
		}
	}, svgs={imgr:svgf.path('M11 5 H19 V15 H25 L15 25 5 15 H11 V5z')
		,home:svgf.path('M7 25 H23 V13 L15 5 7 13 V25 M12 25 V18 H18 V25z')
		,func:svgf.text('Fn')
		,code:svgf.text('JS',[22,8,16])
		,sech:svgf.circle(10,10,6)+svgf.line(14,14,24,24)
		,weib:svgf.path('M22 18 L23 25 17 20 A10 8 0 1 1 22 18z')
		,wdgt:svgf.path('M5 15 Q10 5 15 15 T 25 15 M5 15 Q10 25 15 15 T 25 15')
		,dona:svgf.path('M15 8 C15 7 14 5 10 5 C4 5 4 10 4 10 C4 16 8 20 15 24 C22 20 26 16 26 12 C26 12 26 5 20 5 C17 5 15 7 15 8z')
		,qrcd:svgf.rect(8,8,5)+svgf.rect(18,8,5)+svgf.rect(8,18,5)
		,memo:svgf.circle(15,16,8)+svgf.path('M10 14 L14 20 20 10 M10 5 A6 6 0 0 0 5 10Z M20 5 A6 6 0 0 1 25 10Z')
		,text:svgf.path('M 7 6 H 23 V 16 A 10 10 0 0 1 13 26 H 7 V7 M10 12 H20 M10 17 H17 M10 22 H14')

	},
Time={
	now: function(TDA){var d=new Date(), t=d.getFullYear() +'-'+ (d.getMonth() + 1) +'-'+ d.getDate()+'_'+d.toTimeString().substr(0,8).replace(/:/g,'.');
		if(/Time|Date/.test(TDA)){t=t.split('_')[TDA=='Time'?1:0]}
		return t;
	},
	now5: function(t){var d=t || new Date(); return (d.getTime()+'').substr(5)},
	YMD: function(t, TDA){
		var d=t || new Date(), t=[d.getFullYear(),(d.getMonth() + 1),d.getDate()].join('-')+'_'+[('0'+d.getHours()).substr(-2),('0'+d.getMinutes()).substr(-2)].join(':');
		if(/Time|Date/.test(TDA)){t=t.split('_')[TDA=='Time'?1:0]}
		return t;
	},
	fromZH: function(t){
		if(/^星期/.test(t)){
			return Date.parse(t.replace(/星期., /,'').replace(/\S+月/,function(s){
				return ZLR('Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec')[ZLR('一 二 三 四 五 六 七 八 九 十 十一 十二').indexOf(s.replace('月',''))]
				}))
		}else{
			return Date.parse(t)
		}
	},
	lastM: function(t){var d=t || new Date(), m=d.getMonth(), jan=m==0; return d.getFullYear()+(jan?-1:0)+'-'+(jan?12:d.getMonth())},
	lastDate: function(fmt,tim,t){
		var tm=(t || new Date()).getTime(), d0=new Date(), d1=new Date(), tO={"y":0,"M":0,"w":0,"d":0,"H":0,"m":0,"s":0,"S":0} ,y=0, m=0, d=0, ys=0;
		if(/\d/.test(tim)){
			//tim = \d+[yMwdHmsS]
			tO[tim.substr(-1)]=Number(tim.replace(/[A-z]/g,''));
			d1.setTime(tm+(tO.w*7*24+tO.d*24+tO.H)*3600*1000+tO.m*60*1000+tO.s*1000+tO.S);
		}

		if(tO.M){
			tO.y += Math.floor((d0.getMonth()+tO.M)/12);
			d1.setMonth((d0.getMonth()+tO.M)%12);
		}

		if(tO.y){d1.setFullYear(d0.getFullYear()+tO.y)}

		if(fmt){
		//format case sensitive! Dd Hh Mm q Ss y

		//yyyy-MM(OOO)-dd HHhh:mm:ss.SSS A/P 上/下午 DDD q

			var MM=d1.getMonth()+1, HH=d1.getHours(), hh=HH==12?12:HH%12, o={
				'M+':MM,
				'd+':d1.getDate(),
				'H+':HH,
				'h+':hh,
				'm+':d1.getMinutes(),
				's+':d1.getSeconds(),
				'S+':d1.getMilliseconds()
			}, week={"0":"日","1":"一","2":"二","3":"三","4":"四","5":"五","6":"六"};


			for(var k in o){
				var r=new RegExp(k, 'g'), ok=o[k];
				if(r.test(fmt)){
					fmt=fmt.replace(r, function(t){return t.length==1?ok:('00'+ok).substr(-1*t.length)})
				}
			}

			fmt=fmt.replace(/y+/g, function(t){return (d1.getFullYear()+'').substr(4-t.length)});

			return fmt.replace(/A[/]P/g, (HH<12?'A':'P')+'M').replace(/上[/]下午/g, (HH<12?'上':'下')+'午')
				.replace(/D{3}/g, (d1+'').split(' ')[0]).replace(/D/g, week[d1.getDay()+''])
				.replace(/q/g, Math.ceil(MM/3)).replace(/O{3}/g, (d1+'').split(' ')[1]);
		}
		return d1
	},
	reg: function(t){
		var o={
			"M":"[个個]?(Month|月)",
			"S":"(milli|ms|毫秒)",
			"s":"[s|秒]",
			"m":"(m|分[钟鐘]?)",
			"H":"[个個]?[h小]",
			"d":"[d天]",
			"w":"[个個]?[w周星禮礼]",
			"y":"[y年]",
			}, n={"〇":0,"零":0,"日":0,"天":0,"元":1,"一":1,"二":2,"两":2,"三":3,"四":4,"五":5,"六":6,"七":7,"八":8,"九":9}, M={
			"Jan":1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sep":9,"Oct":10,"Nov":11,"Dec":12}, D={
			"Sun":0,"Mon":1,"Tue":2,"Wed":3,"Thu":4,"Fri":5,"Sat":6
		};

		var s=t.replace(/公元/g,'').replace(/(周+|期|拜)[天日一二三四五六七八九]/, function(t){return t+' '}).trim()
				.replace(/一十/g,'十').replace(/廿/g,'二十').replace(/卅/g,'三十')
				.replace(/[二三四五]十[一二三四五六七八九]/g, function(t){return ''+n[t.substr(0,1)]+n[t.substr(-1)]})
				.replace(/[二三四五]十/g, function(t){return ''+n[t.substr(0,1)]+0})
				.replace(/十[一二三四五六七八九]/g, function(t){return '1'+n[t.substr(-1)]})
				.replace(/十/g,'10').replace(/[〇零元一二三四五六七八九]/g, function(t){return n[t]})
				.replace(/[13]刻/, function(t){return 15*Number(t.substr(0,1))+'分钟'});

		if(/[点點时時]/.test(s) && !/小/.test(s)){s=s.replace(/[点點时時分]/g,':').replace(/半/g,'30').replace(/整/g,'00')
			.replace(/[13]刻/g, function(t){return 15*n[t.substr(0,1)]}).replace(/毫?秒/g,'');
		}

		s=s.replace(/半/g, 0.5);

		var tim=(s.match(/[01]?\d(:[0-5]?\d)+/) || [''])[0];
		if(!tim & /[01]?\d:/.test(s)){tim=s.match(/[01]?\d:/)[0]+'00'}
		if(tim && /下午|晚|夜|PM/i.test(s)){tim=tim.replace(/^\d+/, function(t){return Number(t)<12?Number(t)+12:t})}

		var yr=(s.match(/\d{4}/)||[''])[0], ys, ms, ds;
		if(yr){s=s.replace(/\d{4}[-年/]?/,'')}
//console.log(yr);
		var Md=(s.match(/[01]?\d[-月/][0-3]?\d/)||s.match(/\d+(\.\d+){2}/)||[''])[0]
				.replace(/\d+\./,'').split(/\D+/),
			MM=Md[0], dd=Md.length>1?Md[1]:0, tdy=/[今本当當这這]1?[天日]|(to|this )day/i.test(s);
//console.log(Md, MM, dd, tdy);
		if(yr && !MM){
			//.replace(/[月\./]/g,'-').split('-')
			if(/\d{8}/.test(t)){
				Md=t.match(/\d{8}/)[0].substr(4);
				MM=Md.substr(0,2); dd=Md.substr(2);
			}else{
				Md=(t.match(/\d{4}[-年/\.][01]?\d[-月/\.][0-3]?\d?/)||[''])[0].replace(/^\d+\D+/,'').split(/\D+/);
				MM=Md[0]; dd=Md.length>1?Md[1]:0;
			}
		}
//console.log(Md, MM, dd);
		if(/[前去明后後]年|(last|next) year|yesteryear/i.test(s)){
			ys=(/大.年/.test(s)?3:(/[前后後]年|year (before|after)/i.test(t)?2:1))*
				(/[前去]年|year before|(last |yester)year/i.test(s)?-1:(/[明后後]年|year after|next year/i.test(s)?1:0));
			if(tdy){
				return Time.lastDate('yyyy-MM-dd ', ys+'y')+tim;
			}
			yr=Time.lastDate('yyyy', ys+'y');
		}
//console.log(ys, yr);
		if(/[上下本当當这這][个個]?月|(last|next|this) month/i.test(s)){
			ms=(/[上下]{2}.?月|month (before|after)/i.test(s)?2:1)*
				(/[上]1?[个個]?月|month before|last month/i.test(s)?-1:(/[本当當这這]1?[个個]?月/.test(s)?0:1));
			if(tdy){
				return Time.lastDate('yyyy-MM-dd ', ms+'M')+tim;
			}
			MM=Time.lastDate('MM', ms+'M');

			dd=(s.match(/[0-3]?\d[日号號]/)||[''])[0];
			if(dd){return (yr||Time.lastDate('yyyy'))+'-'+MM+'-'+dd+' '+tim}
		}

		if(/([上下本这這]1?[个個]?)?(周+|星期|[禮礼]拜)[天日\d]/.test(s)){
			ds=Number(s.split(/周+|星期|[禮礼]拜/)[1].substr(0,1).replace(/天|日/,0))-n[Time.lastDate('D')]+
				7*(/[上下]{2}.?(周+|星期|[禮礼]拜)/.test(s)?2:1)*
				(/上1?[个個]*(周+|星期|[禮礼]拜)/.test(s)?-1:(/下1?[个個]*(周+|星期|[禮礼]拜)/.test(s)?1:0))
			return Time.lastDate('yyyy-MM-dd ', ds+'d')+tim;
		}

		if(/last|next|this/.test(s)){
			for(var k in D){
				var Dk=D[k], r=new RegExp(k, 'i');
				if(r.test(s)){
					ds=Dk-n[Time.lastDate('D')]+
						7*(/last/i.test(s)?-1:(/next/i.test(s)?1:0))
					return Time.lastDate('yyyy-MM-dd ', ds+'d')+tim;
				}
			}

		}

		if(/[前昨明后後]天|yesterday|tomorrow/i.test(s)){
			ds=(/大.天/.test(s)?3:(/[前后後]天|day (before|after)/i.test(t)?2:1))*
				(/[前昨]天|day before|yesterday/i.test(s)?-1:1);
			return (yr||Time.lastDate('yyyy'))+'-'+Time.lastDate('MM-dd ', ds+'d')+tim;
		}
		if(tdy){return (yr||Time.lastDate('yyyy'))+'-'+(MM||Time.lastDate('MM'))+'-'+Time.lastDate('dd')+' '+tim}

		if(!MM){

			for(var k in M){
				var Mk=M[k], r=new RegExp(k, 'i');
				if(r.test(s)){

					MM=Mk;
					var tmp=s.split(r);
					tmp[0]=tmp[0].split(/\D+/);
					if(tmp[0].length>1){tmp[0]=tmp[0][tmp[0].length-2]}else{tmp[0]=tmp[0][0]}
					tmp[1]=tmp[1].split(/\D+/);
					if(tmp[1].length>1){tmp[1]=tmp[1][1]}else{tmp[1]=tmp[1][0]}

					dd=tmp[0]||tmp[1]||0;
					if(dd){return (yr||Time.lastDate('yyyy'))+'-'+MM+'-'+dd+' '+tim}
				}
			}
		}

		if(MM || dd){return (yr||Time.lastDate('yyyy'))+'-'+(MM||Time.lastDate('MM'))+'-'+(dd||'01')+' '+tim}



		for(var k in o){
			var ok=o[k], r=new RegExp('\\d *'+ok, 'i'), nA=s.split(/[^\d\.]+/);

			if(r.test(s)){

				return Time.lastDate('yyyy-MM-dd HH:mm:ss', (/later|后|後/i.test(s)?'':'-')+
					Number(nA[0]||nA[1])+k);

			}
		}

		return (yr||Time.lastDate('yyyy'))+'-'+Time.lastDate('MM-dd ')+tim;
	},
	local: function(d, timOrDat){
		if(d && timOrDat){return timOrDat=='Date'?d.toLocaleDateString():d.toLocaleTimeString()}
		return (d || new Date()).toLocaleString().replace(/:00$/,'').replace(/:00 /,' ');
	},
	lite: function(d){var n=new Date();
		if(d.getFullYear()!=n.getFullYear()){return d.toLocaleDateString()}
		var today=Date.parse((new Date()).toDateString());

		if(d>=today-3600*1000*24 && d<today){return gM('yesterday')}

		if(d>today && d<Date.parse(Time.reg('tomorrow'))){
			return d.toLocaleTimeString().replace(/:\d+$/,'').replace(/:\d+ /,' ');
		}
		return d.toLocaleDateString().replace(/\D*20\d+\D*/,'');

	},
	str2date: function(s, func, timOrDat){
		var tm=new Date();
		tm.setTime(Date.parse(s));
		if(func){
			if(timOrDat){return Time[func](tm, timOrDat)}
			return Time[func](tm);
		}
		return tm;
	}
};


function attr2jSon(s){
	//return JSON.parse(('{'+s+'}').replace(/=/g,':').replace(/ /g,',').replace(/([\w#]+-*\w*)/g,'"$1"'))
	return JSON.parse(('{'+s.trim().replace(/([^" ]+)=([^" ]+)/g,'"$1":"$2"').replace(/([^" ]+)=/g,'"$1":').replace(/=([^" ]+)/g,':"$2"').replace(/ /g,',')+'}'))
}
function jSon(str){
	//return JSON.parse(str);
	//return eval('('+ Str +')');
	//return (new Function("return " + str))();
	var Str=(str||'').trim();
	try{
		return JSON.parse(str);
	}catch(e){
	//	console.log(str);
	//	console.log(e);
		if(/^\{/.test(Str) && /\}$/.test(Str)){
			var str0=Str.replace(/^\{|\}$/g,'').replace(/,([^":]*):/g, ',"$1":').replace(/^([^":]*):/g, '"$1":');

			return JSON.parse('{'+str0+'}');
		}
		return Str;
	}
}

function jSon2str(json){ //json is an array
	var str='[';
	for(var i in json){
		var tmp='{';
		$.each( json[i], function(j, n){
		    tmp += '"' + j + '":"' + n + '",';
		});
		str += tmp.replace(/,$/, '') + '},';
	}
	return str.replace(/,$/, '') + ']';
}
function jSon2attr(json){
	var str='';
	$.each( json, function(j, n){
	    str += j + '="' + n + '" ';
	});
	return str.trim();
}

function urlTran(urls){
	var tArr= urls.match(/\S+/gi);
	if(!tArr){return ''}

	var patt0 = /^.+\[\*[^(\[\*)]+\].*$/;
	var patt1 = /\[\*[^(\[\*)]+\]/;	//[* ]
	var patt2 = /\d+-\d+/;
	//var patt3 = new RegExp(/\D+-\D+/);
	var patt4 = /^0\d+/;
	var patt5 = /[1-9]\d*/;
	var patt6 = /\[>\d*\]/;
	for (var i in tArr){
		var u=tArr[i];
		imgPreRe.lastIndex=0;
		if(!imgPreRe.test(u)){u=H+u; tArr[i]=u}
		if(patt0.test(u)){
			var tmpStr0 = u.match(patt1);	//[* ]
			var tmpAry3 = tmpStr0[0].substr(2,tmpStr0[0].length-3).split(',');	//a-z,2,4,6-9
			for (var k in tmpAry3){
				if(tmpAry3[k].indexOf('-')==-1) {continue}
				var s0 =tmpAry3[k].split('-')[0];
				var s1 =tmpAry3[k].split('-')[1];
				var tmpStr = s0;

				if(patt2.test(tmpAry3[k])) {	//02-45
					if(patt4.test(s0)) {		//00-18
						var t=1;
						if(patt5.test(s0)){t=parseInt(s0.match(patt5)[0])+1}
						for (var l = t; l<=parseInt(s1.match(patt5)[0]); l++) {
							tmpStr += ',' + '00000'.substr(0,s0.length - (''+l).length) + l;  //!no more than 5 '0's
						}
					}else{
						for (var l = parseInt(s0)+1; l<=parseInt(s1); l++) {tmpStr += ',' + l}
					}
				}else{
					for (var l = s0.charCodeAt(0)+1; l<=s1.charCodeAt(0); l++) {tmpStr += ',' + String.fromCharCode(l)}
				}
				tmpAry3[k]=tmpStr;
			}

			var tmpAry = tmpAry3.join(',').split(',');
			tArr[i]='';
			for (var k in tmpAry){
				tArr[i] += u.replace(tmpStr0[0],tmpAry[k]).replace(patt6,tmpAry[k]) + ' ';
			}
		}
	}
	var t=tArr.join(' ').match(/\S+/gi).join('\n');
	if(patt1.test(t)){return urlTran(t)}else{return t}
}

function hex2rgba(h,a,arr){
	var Arr=[parseInt(h.substr(1,2),16),parseInt(h.substr(3,2),16),parseInt(h.substr(5,2),16),Number(a)];
	if(arr){return Arr}
	return 'RGBA('+Arr.join(',')+')';
}
function rgb2hex(r,g,b){//r*256^2 + g*256 + b = r*2^16 + g*2^8+ b
	return '#'+(1<<24|r<<16|g<<8|b).toString(16).substring(1);
}
function bodyFocus(){
	$('body')[0].tabIndex=0;
	$('body').focus();
}
var OffSet=function(obj,r,c,build){//表格单元格偏移，如果找不到，则新建tr、td，扩充为大表
	var p=obj.parent(), pi=p.index(), pp=p.parent(), ppc=pp.children(), ppcl=ppc.length, tr=ppc.eq(pi+r), i=obj.index(),pcl=p.children().length;
	if(build){
		var tds=c>0?Math.max(i+c+1,pcl):pcl-Math.min(i+c,0), tdsAdd=tds-pcl;
		var trsAdd=r>0?Math.max(pi+r+1-ppcl,0):-Math.min(pi+r,0), trs=trsAdd+ppcl;
		var s='<tr>'+ZLR('<td></td>',tds)+'</tr>', sAdd=ZLR('<td></td>',tdsAdd);
		if(trsAdd){
			if(r>0){
				pp.append(ZLR(s,trsAdd));
			}else{
				pp.prepend(ZLR(s,trsAdd));
			}
		}
		if(tdsAdd){
			if(i+c+1>pcl){
				ppc.append(sAdd)
			}else if(i+c+1<0){
				ppc.prepend(sAdd)
			}
		}

		tr=pp.children().eq(trsAdd?(r>0?trs-1:0):pi+r);
	}

	return tr.children().eq(tdsAdd?(c>0?tds-1:0):i+c);
	
}, Admin={
	testAjax:function(t){$.ajax({type:'get', url:t, success:function(d){saveText(d, '123.txt')}})},
	testAjax2:function(t){$.ajax({type:'get', url:'', success:function(d){console.log($(d).find('').text())}})}
}, fCC=function(A){return String.fromCharCode.apply(null,A)
}, seqA=function(start,n,type,step){//序列: 初始值，个数n，类型，步长	参数 n小于0时，逆序
	var isBig=typeof start=='bigint', t=[],y=type||'arith',p=step==undefined?(isBig?1n:1):step, N=Math.abs(n);
	for(var i=(isBig?0n:0);i<N;i++){
		t.push(y=='arith'?start+i*p:(y=='geo'?start*(p**i):''));	//Math.pow(p,i)
	}
	if(n<0){
		t.reverse();
	}

	return t
}, seqsA=function(s){//连续序列：缩写 ,~
	var t=s.replace(/\d+~\d+/g, function(t){var tA=t.split('~');return seqA(+tA[0],+tA[1]-(+tA[0])+1).join()})
		.replace(/[A-z]~[A-z]/g, function(t){var tA=t.split('~'),t0=tA[0].charCodeAt(0),t1=tA[1].charCodeAt(0);return fCC(seqA(t0,t1-t0+1)).split('').join()})
		.split(',')
	return t
}, Arri=function(A,i){//提取矩阵第i列（从0开始编号）	负数表示从最后1列往前
	var t=[];
	for(var j=0;j<A.length;j++){t.push(A[j][i<0?A[j].length+i:i])}
	return t
}, ArrI=function(A,a,start){//提取数组元素，按照索引集和起始偏移
	var t=[];
	for(var j=0;j<a.length;j++){t.push(A[a[j]-(start||0)])}
	return t
}, subMtrx=function(A,i1,i2,j1,j2){//提取矩阵的子矩阵，编号从1开始
	var t=[], J2=j2==undefined?A[0].length:j2;//t.t='Mtrx'
	for(var i=i1-1;i<i2;i++){
		var ti=[];
		for(var j=j1-1;j<J2;j++){ti.push(A[i][j])}
		t.push(ti);
	}
	return t
}, Arrf=function(f,A,rtnTyp){//数组函数，循环次数确定
	if(A.length<1){return []}
	var ty=rtnTyp||'arr',g=function(j,k){
		var t,ar=arguments,an=ar.length;
		if(ty=='-cp2'){
			for(var i=an-1;i>0;i--){
				/*逆向二元迭代(递归)，返回一个数（从数组最后元素往前迭代，上次迭代结果，与数组中上一个元素，二元运算）
					
						连幂式 Arrf(msup,[1,2,3,4],'-cp2')
					*/
					if(i==an-1){t=ar[i]}else{
						t=f(ar[i],t)
					}
				
			}
			return t
		}
		
		
		for(var i=1;i<an;i++){
			if(ty=='arr'){//映射数组
				if(i==1){t=[]}
				//t.push(f(ar[i]))
				if(f.length>1 && !f.name){/*匿名函数第2个参数是索引值i（从1开始计数）
					
					
					
					console.log(f.toString(),f.valueOf());
					用f.length>1
					无法区分是匿名函数，还是有名称的函数。
					用f.name 区分是否匿名
					
					但可以用toString区分 function abc()	/^function \(/.test(f.toString())
					用window[函数名]，区分是否全局函数

					*/

					t.push(f(ar[i],i-1))
				//	t.push(f(ar[i]))
				}else{
					t.push(f(ar[i]))
				}
				
			}else if(ty=='str'){//字符串累加
				if(i==1){t=''}
				t+=f(ar[i])
			}else if(ty=='cp1'){/*一元迭代(递归)，返回数组（每次迭代都有步骤记录，此时数组A是形式需要：只需要满足迭代次数等于A.length）
				典型例子：
					等差数列	Arrf(function(t){return tn+2n},[0].concat(Array(10)),'cp1')
					等比数列 	Arrf(function(t){return tn*2n},[1].concat(Array(10)),'cp1')
					Fibonacci 斐波那契数列 Arri(Arrf(function(t){return !t?[0n,1n]:[t[1],t[0]+t[1]]},Array(10),'cp1'),1)
					阶乘数列	Arri(Arrf(function(t){return !t?[1n,1n]:[t[0]+1n,(t[0]+1n)*t[1]]},Array(10),'cp1'),1)

				*/
				if(i==1){t=[f(ar[i])]}else{
					t.push(f(t[t.length-1]))
				}
			}else if(ty=='cp2'){/*二元迭代(递归)，返回一个数（上次迭代结果，与数组中下一个元素，二元运算）
				
					Fibonacci 斐波那契 Arrf(function(t){return !t?[1n,1n]:[t[1],t[0]+t[1]]},Array(10),'cp2')[1]
					阶乘 Arrf(function(s,t){return s*t},seqA(1,7),'cp2')
					gcd
					lcm
				*/
				if(i==1){t=ar[i];continue}else{
					t=f(t,ar[i])
				}
			}
		}
		return t
	};return g.apply(null,[f].concat(A))

}, Arrfc=function(fA,x,p){//多重函数迭代（从右向左迭代）	p是函数序列，均支持的参数
	var up=p===undefined,xisArr=isArr(x),t=xisArr?[].concat(x):x,fn=fA.length;

	for(var i=0;i<fn;i++){
		if(xisArr){
			t=Arrf(up?fA[fn-1-i]:function(s){return fA[fn-1-i](s,p)},t)
		}else{
			t=up?fA[fn-1-i](t):fA[fn-1-i](t,p)
		}
	}
	return t
}, ArrfcA=function(fA,A,p){//多重函数（数组函数）递归（从左到右） 	初始值A是多层数组，递归后降维
	/*
		[f0,f1,f2] A[[[0],[0]],[[1],[1]]]
		f0()
		
		ArrfcA([ntimes,nadd,ntimes],[[['2','x'],['3','y']],[['4','x'],['5','y']]],1,1)
	*/
	var up=p===undefined,t;
	if(fA.length==1){
		//console.log(A);
		if(A.length==1 || A.length==2 && A[1]==undefined){
			return A[0]
		}
		return fA[0](A,p)//fA[0].apply(null,up?[A]:[A,p])
	}else{
		var a=[];
		for(var i=0;i<A.length;i++){
			a.push(ArrfcA(fA.slice(1),A[i],p))
		}
		//return ArrfcA([fA[0]],a,p)
		return fA[0](a,p)
	}
}, Arr1=function(A){//数组每个元素都加1
	return Arrf(function(t){return t+1},A)
}, Arr_1=function(A){//数组每个元素都减1
	return Arrf(function(t){return t-1},A)
}, max=function(A){
	return Arrf(Math.max,A,'cp2')
}, min=function(A){
	return Arrf(Math.min,A,'cp2')

},cartestian=function(A,typ){//笛卡尔乘积 序列化	typ指定括号类型，用于字符串输出括号风格
	var t=[A.slice(0)],n=A.length, tmp=new Array(n), tp=typ||'()';
	for(var i=0;i<n;i++){//维数
		var Ai=A[i],Ain=Ai.length, AA=[];
		for(var j=0;j<t.length;j++){
			var tj=t[j], arr=Arrf(function(a){var tt=[].concat(tj);tt[i]=a; return tt},Ai);
			//arr.t='Set_Cartesian'; 注意concat会丢失arr.t信息
			AA=AA.concat(arr);
		}
		t=AA;
	}
	for(var i=0;i<AA.length;i++){
		AA[i].t='Set_Cartesian_'+tp;
	}
	return t
},countA=function(A,noParse){/*对数组中元素进行计数		参数noParse 指定不强制转换成同一类型（例如字符串与数字），进行判断相同
	
	返回二维数组：去重数组，相应重数数组。
	
	*/
	var a=[],b=[];
	for(var i=0,l=A.length;i<l;i++){
		var c=noParse?A[i]:''+A[i];//默认强制转换成字符串比较相同
		if(a.indexOf(c)<0){
			a.push(c);
			b.push(1);
		}else{
			//b[b.length-1]++;
			b[a.indexOf(c)]++;
		}
	}
	return [a,b]
},concat=function(){//数组中元素分别字符串拼接，得到新数组
	var ar=arguments, arl=ar.length, n=ar[0].length,t=[];
	for(var j=0;j<n;j++){
		var s='';
		for(var i=0;i<arl;i++){
			
			var ai=ar[i];
			if(ai.length){
				s+=isArr(ai)?ai[j]:ai;
			}
		}
		t.push(s)
	}
	return t
},cartt=function(A){//笛卡尔乘积 序列化后拼接为字符串数组
	return Arrf(function(t){return t.join('')},cartestian(A))
},split=function(t,r){/*字符串t，按(中缀)正则split分成两个数组
	如果不匹配返回字符串本身
	如果首项为空，shift一下
	*/
	var re,si=[0],ops=[],A=[];
	r.lastIndex=0;
	if(r.test(t)){
		if(!r.global){//只匹配1次
			re=t.split(r)[0];
			A.push(re);
			re=t.substr(re.length);
			A.push(re.replace(r,''));
			ops.push(re.substr(0,re.length-A[1].length));
			return [ops,A]
		}

		
		r.lastIndex=0;
		while((re = r.exec(t)) != null){
			ops.push(re[0]);
			si.push(re.index+re[0].length);//存储下一个表达式截取起始位置
//			console.log('si',si.join(' , '));
			A.push(t.substring(si.slice(-2)[0],re.index));
		}
		A.push(t.substr(si.slice(-1)[0]));
		if(A[0]==''){
			A.shift();
			A[0]=ops[0]+A[0];
			ops.shift();
		}
		return [ops,A]
	}
	return t
}, Latin=function(t,caps){
	var f=function(i){var s=html2txt('&'+String.fromCharCode(i)+t+';'); if(/;/.test(s)){s=''} return s};
	return Arrf(f,seqA(65+32*(+!caps),26))
}, Options=function(A,B,selev){//返回数组
	if(B){
		var n=B.length,C=copyA('">',n),s=A.indexOf(selev||'');
		if(selev && s>-1){
			C[s]='"'+seled+'>';
		}
		return concat(copyA('<option value="',n),A,C,B,copyA('</option>',n));
	}
	var f=function(i){return i?'<option value="'+i+'"'+(selev && i==selev?seled:'')+'>'+i+'</option>':''};
	return Arrf(f,A)
}, entity=ZLR('scr fr grave acute circ tilde uml ring opf'), printF={
	'table':function(tbl,separateStyle,blankStyle){
		var t=[];
		$(tbl).children().each(function(){
			$(this).children().each(function(){
				var s='';
				$(this).children().each(function(){
					s+=($(this).text().trim()||blankStyle||'')+(separateStyle==''?'':(separateStyle||'\t'))
				})
				t.push(s)
			})
		});
		return t.join('\n');
	}
},isSupportFontFamily=function(f){
    if(typeof f != 'string'){
        return false;
    }

    var df='Arial';
    if(f.toLowerCase() == df.toLowerCase()){
        return true;
    }

    var defaultLetter = 'a';
    var defaultFontSize = 100;

    // 使用该字体绘制的canvas
    var width = 100, height = 100;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    // 全局一致的绘制设定
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'middle';
    var getFontData = function(f) {
        // 清除
        ctx.clearRect(0, 0, width, height);
        // 设置字体
        ctx.font = defaultFontSize + 'px ' + f + ', ' + df;
        ctx.fillText(defaultLetter, width / 2, height / 2);

        var data = ctx.getImageData(0, 0, width, height).data;

        return [].slice.call(data).filter(function(value) {
            return value != 0;
        });
    };

    return getFontData(df).join('') !== getFontData(f).join('');
};