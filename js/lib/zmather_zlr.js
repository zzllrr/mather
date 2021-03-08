/*
 * zzllrr lib
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var L=localStorage,sch=location.search, H = 'http://', Hs = 'https://', w3c = 'www.w3.org/', xmlns = H + w3c + '2000/svg', xhtml = H + w3c + '1999/xhtml', xmlnsxlink = H + w3c + '1999/xlink', xmml = H + w3c + '1998/Math/MathML',
	logon = false, isMobile=/Mobile/.test(navigator.userAgent), i18n = typeof lang == 'undefined' ? '' : lang[H_o().lang || L.lang || 'zh_cn'] || '', loch=location.href,losh={}, ishome=/index\.html|mather\/$|^\/$/.test(location.pathname), 
	isdoodle=/doodle\.html/.test(loch), 
	isdoc=/document\.html/.test(loch),
	iswiki=/wiki\.html/.test(loch),
	issolve=/solve\.html/.test(loch),
	isedi=/editor\.html/.test(loch),
	Mele='LaTeX Ascii_Math Unicode_Math Content_MathML Presentation_MathML SVG Canvas Echarts Markdown YAML I18N EN JavaScript 3D 2D Zdog Lego Rough',
	Meles='LA AM UM CM PM SV CV EC MD YM I18 EN JS D3 D2 ZD LG RF',
	Mele2='LT LX LTX TEX IL YML',
	Meleo={'IL':'Inline LaTeX','LX':'LaTeX','TEX':'LaTeX','YML':'YAML'};
	
if (typeof BigInt == 'undefined') {
	var BigInt = function (x) { return +x }
}
var uri = '^(blob|file|ftp|https?):.+', uriRe = new RegExp(uri, 'i'), dataRe = /^data:.+[/].+;.+/,
	imgPreReg = '(blob|data|file|ftp|https?):.+',
	imgPre = new RegExp(imgPreReg, 'gi'), imgPreRe = new RegExp('^' + imgPreReg, 'gi'),

	hanziCoreRe = /[\u4E00-\u9FA5\uFF00-\uFFFF]/g, hanziRe = /[^\x00-\xff]/g,//含中文标点	注意使用test时，正则有全局g时，需重置hanziRe.lastIndex=0
	enPunc = /[,\.\?!\/\-_:;'"\(\)\[\]\{\}]/g, enPhrase = /^[a-z]+ [a-z ]+$/i,
	hanziPunc = /[，。？！—：；‘’“”（）【】]/g,
	punc = /[,\.\?!\/\-_:;'"\(\)\[\]\{\}，。？！—：；‘’“”（）【】]/g,
	fontReData = /^data.+font[/].{40,}/i, imgPreReData = /^data.+image\/.{40,}/gi, txtPreReData = /^data.+text\/plain/gi,
	fontHan = '{"windows":{"宋体":"SimSun","黑体":"SimHei","微软雅黑":"Microsoft Yahei","微软正黑体":"Microsoft JhengHei","楷体":"KaiTi","新宋体":"NSimSun","仿宋":"FangSong"},"OS X":{"苹方":"PingFang SC","$黑体":"STHeiti","$楷体":"STKaiti","$宋体":"STSong","$仿宋":"STFangsong","$中宋":"STZhongsong","$琥珀":"STHupo","$新魏":"STXinwei","$隶书":"STLiti","$行楷":"STXingkai","冬青黑体简":"Hiragino Sans GB","兰亭黑-简":"Lantinghei SC","翩翩体-简":"Hanzipen SC","手札体-简":"Hannotate SC","宋体-简":"Songti SC","娃娃体-简":"Wawati SC","魏碑-简":"Weibei SC","行楷-简":"Xingkai SC","雅痞-简":"Yapi SC","圆体-简":"Yuanti SC"},"office":{"幼圆":"YouYuan","隶书":"LiSu","$细黑":"STXihei","$楷体":"STKaiti","$宋体":"STSong","$仿宋":"STFangsong","$中宋":"STZhongsong","$彩云":"STCaiyun","$琥珀":"STHupo","$新魏":"STXinwei","$隶书":"STLiti","$行楷":"STXingkai","@舒体":"FZShuTi","@姚体":"FZYaoti"},"open":{"思源黑体":"Source Han Sans CN","思源宋体":"Source Han Serif SC","文泉驿微米黑":"WenQuanYi Micro Hei"},"hanyi":{"!旗黑":"HYQihei 40S","!旗黑":"HYQihei 50S","!旗黑":"HYQihei 60S","!大宋简":"HYDaSongJ","!楷体":"HYKaiti","!家书简":"HYJiaShuJ","!PP体简":"HYPPTiJ","!乐喵体简":"HYLeMiaoTi","!小麦体":"HYXiaoMaiTiJ","!程行体":"HYChengXingJ","!黑荔枝":"HYHeiLiZhiTiJ","!雅酷黑W":"HYYaKuHeiW","!大黑简":"HYDaHeiJ","!尚魏手书W":"HYShangWeiShouShuW"},"fangzheng":{"@粗雅宋#":"FZYaSongS-B-GB","@报宋#":"FZBaoSong-Z04S","@粗圆#":"FZCuYuan-M03S","@大标宋#":"FZDaBiaoSong-B06S","@大黑#":"FZDaHei-B02S","@仿宋#":"FZFangSong-Z02S","@黑体#":"FZHei-B01S","@琥珀#":"FZHuPo-M04S","@楷体#":"FZKai-Z03S","@隶变#":"FZLiBian-S02S","@隶书#":"FZLiShu-S01S","@美黑#":"FZMeiHei-M07S","@书宋#":"FZShuSong-Z01S","@舒体#":"FZShuTi-S05S","@水柱#":"FZShuiZhu-M08S","@宋黑#":"FZSongHei-B07S","@宋三#":"FZSong","@魏碑#":"FZWeiBei-S03S","@细等线#":"FZXiDengXian-Z06S","@细黑一#":"FZXiHei I-Z08S","@细圆#":"FZXiYuan-M01S","@小标宋#":"FZXiaoBiaoSong-B05S","@行楷#":"FZXingKai-S04S","@姚体#":"FZYaoTi-M06S","@中等线#":"FZZhongDengXian-Z07S","@准圆#":"FZZhunYuan-M02S","@综艺#":"FZZongYi-M05S","@彩云#":"FZCaiYun-M09S","@隶二#":"FZLiShu II-S06S","@康体#":"FZKangTi-S07S","@超粗黑#":"FZChaoCuHei-M10S","@新报宋#":"FZNew BaoSong-Z12S","@新舒体#":"FZNew ShuTi-S08S","@黄草#":"FZHuangCao-S09S","@少儿#":"FZShaoEr-M11S","@稚艺#":"FZZhiYi-M12S","@细珊瑚#":"FZXiShanHu-M13S","@粗宋#":"FZCuSong-B09S","@平和#":"FZPingHe-S11S","@华隶#":"FZHuaLi-M14S","@瘦金书#":"FZShouJinShu-S10S","@细倩#":"FZXiQian-M15S","@中倩#":"FZZhongQian-M16S","@粗倩#":"FZCuQian-M17S","@胖娃#":"FZPangWa-M18S","@宋一#":"FZSongYi-Z13S","@剪纸#":"FZJianZhi-M23S","@流行体#":"FZLiuXingTi-M26S","@祥隶#":"FZXiangLi-S17S","@粗活意#":"FZCuHuoYi-M25S","@胖头鱼#":"FZPangTouYu-M24S","@卡通#":"FZKaTong-M19S","@艺黑#":"FZYiHei-M20S","@水黑#":"FZShuiHei-M21S","@古隶#":"FZGuLi-S12S","@幼线#":"FZYouXian-Z09S","@启体#":"FZQiTi-S14S","@小篆体":"FZXiaoZhuanTi-S13T","@硬笔楷书#":"FZYingBiKaiShu-S15S","@毡笔黑#":"FZZhanBiHei-M22S","@硬笔行书#":"FZYingBiXingShu-S16S"}}'.replace(/!/g, '汉仪').replace(/@/g, '方正').replace(/#/g, '简体').replace(/\$/g, '华文'),

	cssLinkRe = /\.css($|\?.*)/i, fontRe = /\.(eot|[ot]tf|ttc|font?|woff2?)($|#|\?.*)/i,
	cssImgReg = 'url\\([\'"]?[^\\\'"\\)\\s]+[\'"]?\\)', cssImgRe = new RegExp(cssImgReg, 'gi'), textCssImgRe = new RegExp('([\\s:,]|^)' + cssImgReg, 'gi'),

	imgReg = '(avif|bmp|gif|ico|jpeg|jpg|apng|png|svg|webp)',
	hrefImgRe = new RegExp('\\S*\\.' + imgReg + '[\\?\\&]*.*', 'i'), textImgRe = new RegExp('(file|ftp|https?):[/]+[^\'"\\s\\(\\)]*\\.' + imgReg, 'gi'),
	digiReg = /^\d+(\.\d)?$/,
	regReg = function (t) { return t.replace(/[\^\$\*\.\+\-\?\!\(\)\[\]\{\}]/g, '\\$&') },

	ruby=function(s,top,a1){// a1 a2 a3 a4
		return XML.wrapE('ruby',s+XML.wrapE('rt',top||(a1?a1.replace(/.\d/g,function(x){return ['aāáǎà','oōóǒò','eēéěè','iīíǐì','uūúǔù','üǖǘǚǜ']['aoeiuv'.indexOf(x[0])][+x[1]]}):'')))
	},
	sTo=setTimeout,sTi=setInterval,
	oneDay = 24 * 3600 * 1000,
	Engin = {
		bd: function (html, u) {
			var bd = $(XML.wrapE('div', (html || '')));

			bd.find(zlr2('img :image', '[src]', ',')).each(function () {
				var me = $(this), s0 = me.attr('file') || me.attr('data-original') || me.attr('src'), s = H_a(s0, u);
				if (s != s0) { me.attr('src', s) }
			});

			bd.find('form').attr('method', '');
			bd.find(':button, :submit').attr('disabled', 'disabled');
			var ZBD = '#ZBD' + Time.now5() + ' ';
			bd.attr('id', 'ZBD').find('style').html(function (i, v) {
				return ZBD + v.trim().replace(/[\},(\*\/)][\n\s]+/g, '$&' + ZBD).trim();
			});

			bd.find(zlr3('[on', 'click load', ']', ',')).removeAttr(zlr('on', 'click load'));
			bd.find(zlr3('a[href', '^="javascript:" ="#"', ']', ',')).removeAttr('href');
			bd.find('a[href]').not('[href^="#"]').attr('target', '_blank').not(zlr3('[href^=', 'http "mailto:"', ']', ',')).attr('href', function (i, v) { return H_a(v, u) });

			bd.find('object').has('embed[src]').each(function () {
				var em = $(this).find('embed[src]'), src = em.attr('src'), wd = em.attr('width'), ht = em.attr('height');
				$(this).replaceWith('<iframe src="' + src + '" style="width:' + (wd || 500) + 'px;height:' + (ht || 400) + 'px" >');
			});

			return bd;
		},

		bdLoadHtml: function (html, aB) {
			aB.html(html || '');
			return Engin
		}

	}, git=function(x,githubio){
		return Hs+(githubio!==undefined?x+'.github.io/'+githubio:'github.com/'+x)

	}, delivr=function(x,y,type){
		return Hs+'cdn.jsdelivr.net/npm/'+x+'/dist/'+(y||x+'.min')+'.'+(type||'js')

	}, unpkgTmp=Hs+'unpkg.com/@/dist/@.min.js', unpkg=function(x,y,type){
		return Hs+'unpkg.com/'+x+'/dist/'+(y||x+'.min')+'.'+(type||'js')

	}, referf=function(x,y,type){
		return type=='css'?'<link rel="stylesheet" href="' + x+'"'+(y||'')+'>':(
			type=='js'||!type?'<script src="'+x+'"'+(y||'')+'></script>':''
		)
	}, refer=function(A){
		return detail(gM('Reference'),ol(A))

	}, jslib={
		'katex':referf(delivr('katex')),
		'echarts':referf(delivr('echarts'))+referf(unpkg('echarts-gl')),
		// www.npmjs.com/package/echarts
		'echarts_eval':function(t){return '<div id=echarts0 style="width:90%;height:600px">'+
	t+dc+XML.wrapE('script',
`	var d=document.getElementById('echarts0'),dt=d.innerText,o=eval(dt);
	var myChart = echarts.init(d);
	myChart.setOption(o);
`)},
		'd3':referf(unpkg('d3')),

		'function-plot':referf(unpkg('function-plot','function-plot')),

		'zdog':referf(delivr('zdog','.dist.min')),

		'lego':referf(unpkg('legra')),

		'canvas_eval':function(t){return '<div id=js hidden>'+t+dc+
	'<canvas id=cvs width="300" height="300"></canvas>'+
	XML.wrapE('script',
`
	var C=document.getElementById('cvs'),c=C.getContext('2d'),ct=document.getElementById('js').innerText;
	eval(ct);
`)},
		//'aframe':referf(delivr('aframe','aframe-master')),
		//'aframe':referf(unpkg('aframe')),
		//'aframe':referf(Hs+'aframe.io/releases/0.9.2/aframe.min.js'),
		'aframe':referf(Hs+'unpkg.com/aframe'),
		'aframe-ar':referf(unpkg('aframe-ar')),

		'slide':referf(Hs+'unpkg.com/webslides'),

	}, csslib = {
		'katex': referf(delivr('katex','','css'),'',
			//' integrity="sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j" crossorigin="anonymous"',
			'css'),
		
		'webslides': referf(Hs+'unpkg.com/webslides/static/css/webslides.css','','css')+
			referf(Hs+'unpkg.com/webslides/static/css/svg-icons.css','','css'),

		'markdown': XML.wrapE('style', `
blockquote{
    padding:0 10px;
    border-left: solid 6px #ff5400;
    margin-left: 0px;
    background-color: rgba(242,97,9,.1);
    border-radius: 10px;
}

code, pre{
    background: rgba(0,0,0,0.1);
    border-radius: 5px;
    padding:2px
}


body:not(.night) .bds{
	border: solid black 1px;
}

body:not(.night) .bdr{
	border-right: solid black 1px;
}

body:not(.night) .bdl{
	border-left: solid black 1px;
}

body:not(.night) .bdt{
	border-top: solid black 1px;
}

body:not(.night) .bdb{
	border-bottom: solid black 1px;
}

.night .bds{
	border: solid gainsboro 1px;
}

.night .bdr{
	border-right: solid gainsboro 1px;
}

.night .bdl{
	border-left: solid gainsboro 1px;
}

.night .bdt{
	border-top: solid gainsboro 1px;
}

.night .bdb{
	border-top: solid gainsboro 1px;
}

.collapse{border-collapse: collapse}
.pd10{
	padding:10px
}
.mg10{
	margin:10px
}
.mg20{
	margin:20px
}

.hidden{
	display:none
}
	`),
	};


$.expr[':'].bottom = function (obj) { return $(obj).css('position') == 'fixed' && $(obj).css('bottom') == '0px' };
$.expr[':'].top = function (obj) { return $(obj).css('position') == 'fixed' && $(obj).css('top') == '0px' };
$.expr[':'].left = function (obj) { return $(obj).css('position') == 'fixed' && $(obj).css('left') == '0px' };
$.expr[':'].right = function (obj) { return $(obj).css('position') == 'fixed' && $(obj).css('right') == '0px' };

$.expr[':'].fixed = function (obj) { return $(obj).length ? $(obj).css('position') == 'fixed' : false };
$.expr[':'].abs = function (obj) { return $(obj).css('position') == 'absolute' };

$.expr[':'].encoded = function (obj) { return /:?encoded/i.test($(obj)[0].localName) };
$.expr[':'].number = function (obj) { return $(obj).attr('type') == 'number' };
$.expr[':'].range = function (obj) { return $(obj).attr('type') == 'range' };
$.expr[':'].color = function (obj) { return $(obj).attr('type') == 'color' };
$.expr[':'].date = function (obj) { return $(obj).attr('type') == 'date' };
$.expr[':'].time = function (obj) { return $(obj).attr('type') == 'time' };

$.expr[':'].search = function (obj) { return $(obj).attr('type') == 'search' };
$.expr[':'].commentRss = function (obj) { return /commentRss/i.test($(obj)[0].localName) };
$.expr[':'].creator = function (obj) { return $(obj)[0].localName == 'creator' };

$.fn.extend({
	twinkle: function () {
		return $(this).fadeTo('slow', 0).fadeTo('slow', 1);
	}
});

function consolelog() {
	if (logon) {
		console.log.apply(null, arguments)
	}
}
function GM(txt,fromLang,toLang) {
	var l0=fromLang||H_o().lang || L.lang || 'zh_cn', l1=toLang||'en';
	//分词. 多源词.0 .1 .2 
	if(isArr(txt)){
		return Arrf(function (i) { return GM(i, l0, l1) }, txt) 
	}
	var A=split(txt,/\.\d*/g), f=function(x){
		var t='',xA=x.split('.'), y=x[0],yi=+x[1]||0, xi=-1;
		$.each(lang[l0],function(i,v){
			if(x==v){
				xi++;
				t=i;
				if(xi==yi){
					return false
				}
			}
		});
		//if(l1!='en'){
			return gM(t,'',lang[l1])
		//}
		//return t
	};
	if(isArr(A)){
		if(A[1].length==2 && A[1][1]==''){
			return f(A[1][0])||A[1][0]
		}
		//console.log(concat(A[1],A[0].concat('')));
		//return Arrf(f,concat(A[1],A[0].concat(''))).join(/zh/.test(toLang)?'':' ')
		return Arrf(function(x){return GM(x,l0,l1)},concat(A[1],A[0].concat(''))).join(/zh/.test(toLang)?'':' ')
	}else{
		if(/ /.test(txt)){
			return Arrf(f, txt.split(' ')).join(/zh/.test(toLang)?'':' ')

		}else{
			return f(txt)||txt
		}

	}

}
function gM(mesg, str, o) {
	if (isArr(mesg)) { return Arrf(function (i) { return gM(i, str, o) }, mesg) }
	
	var msg = '' + mesg, m0=msg[0] || '', m1=(msg || '').substr(1),
		M = m0 + m1, M_=m0.toUpperCase()+m1, O = o || i18n, x = O ? O[msg] || O[M] || O[M_] || '' : '';
	try {
		if (!x && chrome && chrome.i18n) {
			x = chrome.i18n.getMessage(msg, str)
		}

	} catch (e) {


	}
	var iscn=O['Anti']=='反', front=msg.replace(/ [^ ]+$/,''), fronted=front+'ed', fronting=front+'ing';
	if(!x && /\.\d+$/.test(msg) && O[msg.replace(/\..+/,'')]){// 多义字
		//console.log(msg);
		return O[msg.replace(/\..+/,'')].split(';')[+msg.replace(/.+\./,'')]
	}
	if( /;/.test(x)){
		return x.split(';')[0]
	}


	if(!x && msg.split(' ').length==3 && (O[front] || O[fronted] || O[fronting])){
		return (O[front] || O[fronted] || O[fronting])+(iscn?'':' ')+gM(msg.replace(/.+ /,''))
	}


	
	if(iscn && !x && / of /.test(msg)){
		return msg.replace(/(.+) of (.+)/, function(t){var A=t.split(' of '); return gM(A[1]) + gM(A[0])})
	}

	if (!x && /[a-z]+2[a-z]/i.test(msg)) {
		x = gM(msg.replace(/2/g, ' to '), str, o)
	}

	if (!x && /[a-z]+[A-Z][a-z]*$/.test(msg)) {
		x = gM(msg.replace(/([a-z])([A-Z])/g, '$1 $2'), str, o)
	}
	if (!x && / & /.test(msg)) {
		x = Arrf(function (t) { return gM(t, str, o) }, msg.split(' & ')).join(' & ');
		hanziRe.lastIndex = 0;
		if (hanziRe.test(x)) {
			x = x.replace(/ & /g, '与')
		}
	}
	if (!x && /[^ ]&[^ ]/.test(msg)) {
		x = Arrf(function (t) { return gM(t, str, o) }, msg.split('&')).join('&');
	}

	if (!x && / /.test(msg)) {
		if (msg == ' ') {
			return ''
		}
		var msg0 = msg.replace(/ .+/, ''), msg1 = msg.replace(/[^ ]+ /, '');
		if (O[msg1]) {
			x = gM(msg0, str, o) + ' ' + gM(msg1, str, o)
		} else {
			x = Arrf(function (t) { return gM(t, str, o) }, msg.split(' ')).join(' ');
		}
		hanziRe.lastIndex = 0;
		if (hanziRe.test(x)) {
			x = x.replace(/. ./g, function (x) { return /[a-z] [a-z]/i.test(x) ? x : x.replace(/ /g, '') })
		}
	}
	if (!x && /[-]/.test(msg)) {
		x = Arrf(function (t) { return gM(t, str, o) }, msg.split(/[-]/)).join('-');
		hanziRe.lastIndex = 0;
		if (hanziRe.test(x)) {
			x = x.replace(/[-](\D)/g, '$1')
		}
	}

	if (!x && /[–]/.test(msg)) {
		x = Arrf(function (t) { return gM(t, str, o) }, msg.split(/[–]/)).join('–');
	}

	if (!x && /\./.test(msg)) {// .无需翻译

		return msg.split('.')[0]
	}


	
	if(!x && iscn){
		//无需翻译的后缀
		if (/[sd]$/.test(msg)) {
			var t=msg.replace(/.$/,''), ot=O[t];

			if(ot){
				return ot
			}
		}

		if (/'s$/.test(msg)) {
			var t=msg.replace(/.{2}$/,'.1'), t2=msg.replace(/.{2}$/,''), ot=O[t] || O[t2];

			if(ot){
				return ot
			}
			return t2
		}
		if (/[sz]'$/.test(msg)) {
			var t=msg.replace(/.$/,'.1'), t2=msg.replace(/.$/,''), ot=O[t] || O[t2];

			if(ot){
				return ot
			}
			return t2
		}


		if (/([e]s|ly|ed)$/.test(msg)) {
			var t=msg.replace(/.{2}$/,''), ot=O[t];

			if(ot){
				return ot
			}
		}
		

		if (/cy$/.test(msg)) {
			var t=msg.replace(/.{2}$/,''), ot=O[t] || O[t+'t'] || O[t+'te'];

			if(ot){
				return ot+'度'
			}
		}

		if (/ic$/.test(msg)) {
			var t=msg.replace(/.{2}$/,''), ot=O[t] || O[t+'e'] || O[t+'y'];

			if(ot){
				return ot
			}
		}

		if (/(ive|ity)$/.test(msg)) {
			var t=msg.replace(/.{3}$/,''), ot=O[t] || O[t+'e'];

			if(ot){
				return ot
			}
		}

		if (/ie[sd]$/.test(msg)) {
			
			var t=msg.replace(/ies$/,'y'), ot=O[t];
			if(ot){
				return ot
			}

		}

		if (/(al)$/.test(msg)) {
			var t=msg.replace(/.{2}$/,''), ot=O[t];

			if(ot){
				return ot
			}

			var t=msg.replace(/ical$/,'y'), ot=O[t];

			if(ot){
				return ot
			}

		}

		if (/ing$/.test(msg)) {
			
			var t=msg.replace(/ing$/,''), ot=O[t];
			if(ot){
				return ot
			}

			t+='e';ot=O[t];
			if(ot){
				return ot
			}

			t=msg.replace(/ying$/,'')+'ie'; ot=O[t];
			if(ot){
				return ot
			}

			t=msg.replace(/(.)\1ing$/,'$1'); ot=O[t];
			if(ot){
				return ot
			}
		}

		if (/ion$/.test(msg)) {
			
			var t=msg.replace(/ion$/,''), ot=O[t];
			if(ot){
				return ot
			}
			t+='e';ot=O[t];
			if(ot){
				return ot
			}

			t=msg.replace(/ption$/,'b'); ot=O[t];
			if(ot){
				return ot
			}
		}


		if (/est$/.test(msg)) {
			var t=msg.replace(/.{3}$/,''), ot=O[t] || O[t+'e'];

			if(ot){
				return '最'+ot
			}
		}

		if (/ness$/.test(msg)) {
			var t=msg.replace(/.{4}$/,''), ot=O[t];

			if(ot){
				return ot+'性'
			}
		}

		if (/(ment|atic)$/.test(msg)) {
			var t=msg.replace(/.{4}$/,''), ot=O[t];

			if(ot){
				return ot
			}
		}

		//可拆开翻译的前缀

		if (/^(Pseudo)/i.test(msg)) {// 6字开头
			var t=msg.substr(6).replace(/./,function(x){return x.toUpperCase()}), ot=O[t];
	
			if(ot){
				return gM(msg.substr(0,6), str, o) + ot
			}
				
		}

		
		if (/^(Quasi|Multi|Hyper|Super|Ultra|Arc)/i.test(msg)) {// 5字开头
			var t=msg.replace(/Arc/i,'$&.1').substr(5).replace(/./,function(x){return x.toUpperCase()}), ot=O[t];
	
			if(ot){
				return gM(msg.replace(/Arc/i,'$&.1').substr(0,5), str, o) + ot
			}
		}


		if (/^([SDH]emi|Poly|Anti|Auto)/i.test(msg)) {// 4字开头
			var t=msg.substr(4).replace(/./,function(x){return x.toUpperCase()}), ot=O[t];

			if(ot){
				return gM(msg.substr(0,4), str, o) + ot
			}
				
		}

		if (/^(Su[bp]|Non|Tri|Uni)/i.test(msg)) {// 3字开头
			var t=msg.substr(3).replace(/./,function(x){return x.toUpperCase()}), ot=O[t];
	
			if(ot){
				return gM(msg.substr(0,3), str, o) + ot
			}
				
		}


		if (/^([UI][mn]|Ab)/i.test(msg)) {// 2字开头
			var t=msg.substr(2).replace(/./,function(x){return x.toUpperCase()}), ot=O[t];
	
			if(ot){
				return '不' + ot
			}
				
		}
		if (/^(Bi)/i.test(msg)) {// 2字开头
			var t=msg.substr(2).replace(/./,function(x){return x.toUpperCase()}), ot=O[t];
	
			if(ot){
				return gM(msg.substr(0,2), str, o) + ot
			}
				
		}






	}




	return x || M
}

function gM2(t,reverse, sep,f){
	var s=gM(t), ft=f?f(t):t;
	return s==t?s:(reverse?s+(sep?sep+t:' ('+t+')'):ft+(sep?sep+s:' ('+s+')'))

}

function cacheUsage(){
	var x=0;
	for(let item in L) {
		if(L.hasOwnProperty(item)) {
		 	x += L.getItem(item).length;
		}
	}
	return [sizeKB(x),x]
}
function fMatrixPly(A, B) {
	var n = A.length, m = 1, C = new Array(n);
	if (B[0] instanceof Array) { m = B[0].length }
	for (var i = 0; i < n; i++) {
		C[i] = new Array(m);
		for (var j = 0; j < m; j++) {
			var s = 0;
			for (var k = 0; k < n; k++) {
				s += A[i][k] * (m < 2 ? B[k] : B[k][j]);
			}
			C[i][j] = s;
		}
	}
	return C;
}
function fMatrix(fltr, a0) {
	var MA = new Array(5), a = a0, CA = [.2126, .7152, .0722];
	for (var i = 0; i < 5; i++) {
		MA[i] = new Array(5);
		for (var j = 0; j < 5; j++) {
			MA[i][j] = j == i ? 1 : 0;
		}
	}

	if (fltr == 'hue') { a = a % 360 }

	if (fltr == 'opa' && a != 1) {
		MA[3][3] = a;
	}
	if (fltr == 'contra' && a != 1) {
		for (var i = 0; i < 3; i++) {
			MA[i][i] = a;
			MA[i][4] = Math.round((1 - a) * 25500 / 2) / 100;
		}
	}
	if (fltr == 'bright' && a != 1) {
		for (var i = 0; i < 3; i++) {
			MA[i][i] = a;
		}
	}
	if (fltr == 'sat' && a != 1) {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				MA[i][j] = Math.round(((j == i ? a : 0) + CA[j] * (1 - a)) * 100) / 100;
			}
		}
	}
	if (fltr == 'gray' && a) {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				MA[i][j] = Math.round(((j == i ? 1 - a : 0) + a / 3) * 100) / 100;
			}
		}
	}
	if (fltr == 'sepia' && a) {
		CA = [[.393, .769, .189], [.349, .686, .168], [.272, .534, .131]];
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				MA[i][j] = Math.round(((j == i ? 1 - a : 0) + CA[i][j] * a) * 100) / 100;
			}
		}
	}
	if (fltr == 'inv' && a) {
		for (var i = 0; i < 3; i++) {
			MA[i][i] = 1 - a * 2;
			MA[i][4] = Math.round(a * 25500) / 100;
		}
	}
	if (fltr == 'hue' && a) {
		var S = Math.sin(Math.PI * a / 180), C = Math.cos(Math.PI * a / 180);
		/*
		A0=[C0*(1-hueS)+(1-C0)*hueC, C1*(1-hueC-hueS), C2*(1-hueC)+(1-C2)*hueS];
		A1=[C0*(1-hueC)+ 0.143*hueS, C1+(1-C1)*hueC+ 0.14*hueS, C2*(1-hueC)- 0.283*hueS];
		A2=[C0*(1-hueC)-(1-C0)*hueS, C1*(1-hueC+hueS), C2*(1+hueS)+(1-C2)*hueC];
CA=[.2126, .7152, .0722]
		// C0=.213, C1=.715, C2=.0722
		A0=[C0*(1-hueC-hueS)+hueC, C1*(1-hueC-hueS), C2*(1-hueC-hueS)+hueS];
		A1=[C0*(1-hueC)+ 0.143*hueS, C1*(1-hueC)+hueC+ 0.14*hueS, C2*(1-hueC)- 0.283*hueS];
		A2=[C0*(1-hueC+hueS)-hueS, C1*(1-hueC+hueS), C2*(1-hueC+hueS)+hueC];

		A0=[C0*(1-C-S)+C, C1*(1-C-S), C2*(1-C-S)+S];
		A1=[C0*(1-C)+ 0.143*S, C1*(1-C)+C+ 0.14*S, C2*(1-C)- 0.283*S];
		A2=[C0*(1-C+S)-S, C1*(1-C+S), C2*(1-C+S)+C];

		A0=[C0*(1-C-S)    +C,       C1*(1-C-S),            C2*(1-C-S)     +S];
		A1=[C0*(1-C)      +0.143*S, C1*(1-C)   +C+ 0.14*S, C2*(1-C)       -0.283*S];
		A2=[C0*(1-C+S)    -S,       C1*(1-C+S),            C2*(1-C+S)     +C];

*/
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				MA[i][j] = Math.round(((j == i ? C : 0) + CA[j] * (1 - C + S * (i - 1)) + S * [.143, .14, -.283, -1, 0, 1][i == 2 ? j : (i * j == 0 && i + j == 2 ? 3 + j : 4)]) * 100) / 100;
			}
		}

	}
	if (fltr == 'blur') {

	}
	return MA;
}

var H5Colors = 'aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen';
function H5Color(neg, pos) {
	var A = H5Colors.replace(/[^,]*grey[^,]*,/g, '').replace(/,(cyan|magenta),/g, ',');
	if (neg) {
		var B = neg.split(',');
		for (var i = 0; i < B.length; i++) {
			A = A.replace(new RegExp('[^,]*' + B[i] + '[^,]*', 'g'), '');
		}
	}
	A = A.replace(/,{2,}/g, ',').replace(/^,|,$/g, ',').split(',');
	if (pos) {
		var B = pos.split(','), C = [];
		for (var j = 0; j < A.length; j++) {
			var b = false;
			for (var i = 0; i < B.length; i++) {
				if (A[j].indexOf(B[i]) > -1) {
					b = true;
					break
				}
			}
			if (b) {
				C.push(A[j])
			}
		}
		A = C.slice();
	}
	return A
}
var ZRL = 'aphanomkkjgledipighdfjnilhfenpam', ZRC = 'jobnmmcljcfepgnecadofbjdklkibgei', ZIG = 'gfjhimhkjmipphnaminnnnjpnlneeplk', ZIL = 'bedbigoemkinkepgmcmgnapjcahnedmn', ZAin1 = 'alhfmphdglcigimlmnkemofpdhfaloep', ZIV = 'minhgcmabmapnkcoddbbeclkmpnandhp', webStore = Hs + 'chrome.google.com/webstore/detail/', CN = '', isCN = false, isCNzh = false;

if (gM('@@ui_locale').slice(0, 2) == 'zh') { isCN = true; isCNzh = gM('@@ui_locale') == 'zh_CN'; CN = '?hl=zh_cn' }
var HOM = {
	'ZIG': webStore + ZIG + CN,
	'ZIL': webStore + ZIL + CN,
	'ZIB': Hs + 'blog.sina.com.cn/zzllrrimager',
	'ZIV': webStore + ZIV + CN,
	'ZRL': webStore + ZRL + CN,
	'ZRC': webStore + ZRC + CN,
	'ZAin1': webStore + ZAin1 + CN,
	'Z': webStore.replace('detail', 'search') + 'zzllrr',
	'ZQR': Hs + 'site.douban.com/127068/',
	'ZIGPic': Hs + 'img3.douban.com/view/photo/photo/public/p1376698902.jpg',
	'ZRPic': Hs + 'img5.douban.com/view/photo/photo/public/p1990186399.jpg',
	'ZMATHER': Hs + 'zzllrr.github.io/mather',
	'ZMATHERcn': H + 'zzllrr.gitee.io/mather/',
	'ZMather': Hs + 'github.com/zzllrr/mather'
};

var strop = '</option><option value=', strradio0 = '<input type=radio ', strchkbx0 = '<input type=checkbox ', strbtn = '<input type=button value="', btnGo = strbtn + 'GO" class=vipurl />',
	num = function (x, min, max) { return '<input type=number value="' + (x||0) + '" min="'+(min||0)+'"' + (max ? ' max="' + max +'"' : '') + ' />' },
	colorbx = function (v) { return '<input type=color value="'+(v||'')+'" />' },
	rng = function (v,min,max) { return '<input type=range value="'+(v||0)+'" min="'+(min||0)+'" max="'+(max||0)+'" />' },
	imgSRC = '<img src="img/', prog = imgSRC + 'loading.gif" width=16 class=prog />', chked = ' checked', seled = ' selected', 
	strtxt='<input type=text ', txtreadonly = function (x,id) { return strtxt+'readonly value="' + fnq(x) + '" id="'+id+'" />' },
	meter = function (i, low, optimum, high) { return '<meter min=0 max=100' + (low || low === 0 ? ' low=' + low : '') + (optimum || optimum === 0 ? ' optimum=' + optimum : '') + (high || high === 0 ? ' high=' + high : '') + ' value=' + i + ' />' },
	bgfrom = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(', bgto = '), to(', grad = function (t) {
		//return '-webkit-gradient(radial, 20 20, 0, 20 20, 50, from(white), to(white), color-stop(.9,'+t+'))'
		return '-webkit-linear-gradient(top, white, ' + t + ' 20%, ' + t + ' 80%, white)'
	},
	fcb = function (c, b, t) { return isArr(t)?Arrf(function(x){return fcb(c,b,x)},t) : '\\fcolorbox{' + c + '}{' + (b || 'transparent') + '}{' + t + '}' },
	txa = function (t, c) { return '<textarea' + (c ? ' class="' + c + '"' : '') + '>' + (t||'') + '</textarea>' },
	SC = '<span class=', sc = '</span>', sC = sc + SC, SCtv = function (t, v) { if(isArr(v)){return Arrf(function(x){return SCtv(t,x)},v)} return SC + '"' + t + '">' + (v || '') + sc },
	itv = function (t, v) { return '<i class="mi' + (t?' '+t:'') + '">' + (v || '') + '</i>' }, itvc=function (c) {return itv('Clear'+(c?' '+c:'')+'" tip="Clear','backspace')},
	spanmi=function(t,v,c){return '<span class="mi-span'+(c?' '+c:'')+'" mi='+t+'>'+v+sc},
	DC = '<div class=', dc = '</div>', dC = dc + DC, DCtv = function (t, v) { if(isArr(v)){return Arrf(function(x){return DCtv(t,x)},v)} return DC + '"' + t + '">' + (v || '') + dc },
	br = '<br/>', hr = '<hr/>', kbr = '\\\\ ', kbr2 = '\\\\ ~ \\\\ ~', brn='\n',
	brA=function(A,js){return (js?$js(A):A).join(br)}, hrA=function(A,js){return (js?$js(A):A).join(hr)},
	kbrA = function (A) { return Arrf(function (x) { return '$' + x + '$' }, A).join(br) },
	khrA = function (A) { return Arrf(function (x) { return '$' + x + '$' }, A).join(hr) },
	i18=function(x){return isArr(x)?Arrf(i18,x):XML.wrapE('i18',x)},	
	I18=function(x,A){return (isArr(x)?x.join('\n'):x)+'\n'+XML.wrapE('i18',isArr(x)?x[0]:x)+(A?'\n'+A.join('\n'):'')},
	fieldset = function (s, v, c) { return '<fieldset' + (c ? ' ' + c : '') + '><legend>' + s + '</legend>' + v + '</fieldset>' },
	fieldseth = function (s, v, c, h) { return '<fieldset class=rem13' + (c ? ' ' + c : '') + '><legend>' + XML.wrapE('h'+(h||3),s) + '</legend>' + v + '</fieldset>' },
	subtabs = function (hA,vA,seli) { if(seli==-1){
		return DCtv('subtabs',DCtv('subtabheads', SCtv('subtabhead',hA).join(''))+DCtv('subtab',vA).join(''))
		}else{var j=seli||0;
		return DCtv('subtabs',DCtv('subtabheads', Arrf(function(x,i){return SCtv('subtabhead'+(i==j?' seled':''),x)},hA).join(''))+Arrf(function(x,i){return DCtv('subtab'+(i==j?'':' hidden'),x)},vA).join(''))
		}
	},
	detail = function (s, v, o, c, cs) { return '<details' + (o ? ' open' : '') + (c ? ' ' + c : '') + '><summary'+(cs?' '+cs:'')+'>' + s + '</summary>' + (v||'') + '</details>' },
	zdetail = function (s, v, notsk, notvk, notEdit, o) {
		return detail(notsk ? s : ksc(s), notvk ? v : kdc(v) + (notEdit ? '' :
			detail(gM('Edit') + strbtn + gM('Default') + '" class="katexv0" />',
				txa(v, 'katexv" data-katex="' + v) + br + strtxt+'class=katexvrule />' + strbtn + gM('Replace') + '" class="katexvreplace" />' + strbtn + 'GO" class="katexvgo" />')), o)
	},
	kdetail = function (s, v, notsk, notvk) { return zdetail(s, v, notsk, notvk, 1) },

	jdetail = function (A, i18nObj, subTool, uri) {
		var f = function (t, subtool) {
			if (isStr(t)) {
				var tool = t.replace(/[…—“][\S\s]+/, ''), ts = t.split('…'),
				title = ts.length > 1 ? ts[1].replace(/[—“].+[\s\S]*/, '') : '',
				tip = (t.split('—')[1] || '').replace(/“.+[\s\S]*/, ''),
				eg = t.split('“')[1] || '';

				var m = /^[-a-z &→]+$/i.test(tool) ? gM(tool) : tool, ft = fnv0(tool);
				return subtool == 'task' ? SCtv('task" data-tool="' + ft
					+ '" title="' + gM(title)
					+ '" data-tip="' + (tip ? gM(tip) : ft)
					+ '" data-uri="'+(uri||'')
					+ '" data-eg="' + eg,
					/^\$.+\$$/.test(m) ? zx(fnv0(m)) : m) : SCtv('level ' + (subtool || '') + '" data-i="' + tool, gM(tool, '', i18nObj))
			}
			if (isArr(t)) {
				return Arrf(function (x) { return f(x, subtool) }, t).join('')
			}
			if (isObj(t)) {
				var y = ''; $.each(t, function (i, v) {
					y += detail(gM(i, '', i18nObj), f(v, subtool), '', 'data-i="' + i + '"')
				}); return y
			}
		}; return Arrf(function (x) { return f(x, subTool) }, A).join('')
	},

	fdetail = function (f, A) {
		return DCtv('fdetail', eval('(function' + f + ')("' + ('' + A[0]).replace(/,/g, '","') + '")') +
			strtxt+'class=katexf data-katexf="' + f + '" placeholder="' + A.join(';') + '" value="' + A[0] + '" />' +
			strbtn + gM('Parameter') + '" class="katexv1" />')
	},
	mark = function (v, t) { return '<mark title="' + (t || 'API') + '">' + v + '</mark>' }, del = function (s) { return XML.wrapE('del', s) },
	href = function (url, text, title) { return '<a href="' + url + '" target="_blank" ' + (title ? 'title="' + title + '" ' : '') + 'rel="noopener noreferrer external">' + (text || url) + '</a>' },
	hrefA= function(u,A,sub){return Arrf(function(X){var x=X.toLowerCase(); return href(Hs+(sub?x+'.'+u:(/@@/.test(u)?u.replace(/@@/g,x):u+'/'+x)),X.replace(/.+#/,''))},A)},
	inhref = function (url, text, title) { return '<a href="' + url + '" ' + (title ? 'title="' + title + '" ' : '') + '>' + (text || url) + '</a>' },
	ol = function (A, c, start) { return '<ol class="alignl ' + (c != null ? c : '') + '"' + (start != null ? ' start=' + start : '') + '>' + Arrf(function (t) { return XML.wrapE('li', t) }, A).join('') + '</ol>' }, kol = function (A, c, start) { return ol(Arrf(function (x) { return x || x === 0 ? '$' + x + '$' : x }, A), c, start) },
	ul = function (A, c) { return '<ul class="alignl ' + (c != null ? c : '') + '">' + Arrf(function (t) { return XML.wrapE('li', t) }, A).join('') + '</ul>' }, kul = function (A, c) { return ul(Arrf(function (x) { return x || x === 0 ? '$' + x + '$' : x }, A), c) },
	dl = function (A, B, c) { return '<dl class="alignl ' + (c != null ? c : '') + '">' + concat(Arrf(function (t) { return XML.wrapE('dt', t) }, A), Arrf(function (t) { return XML.wrapE('dd', t) }, B)).join('') + '</dl>' }, kdl = function (A, B, c) { return dl(Arrf(function (x) { return x || x === 0 ? '$' + x + '$' : x }, A), B, c) },

	$js=function(x,encode){return x instanceof Array ?Arrf(function(t){return $js(t,encode)},x):'$$$'+(encode?x.trim().replace(/\\/g,'\\\\'):x.trim())+'$$$'},
	$A = function (A) { return Arrf(function (x) { return x instanceof Array ? $A(x) : (x || x === 0 ? '$' + x + '$' : '') }, A) },
	tinyA=function(A, size){return A.length==0?[]:Arrf(function(x){return '\\'+ZLR('tiny scriptsize footnotesize small normalsize large Large LARGE huge Huge')[size!==undefined?size:3]+' '+$A(x)},A)},
	encodeLatex = function (t) { return ('' + t).replace(/[\{\}]/g, '\\$&') },
	$B = function (A, esc) { return Arrf(function (x) { return x instanceof Array ? $B(x, esc) : (esc ? encodeLatex(x) : (x || x === 0 ? '{' + x + '}' : '')) }, A) },

	Kx = function (t) { return t.replace(/\${3}[^\$]*\${3}/g, function (x) {var t=x.substr(3, x.length - 6);return t? '㆖'+t+'㆘':''})
		.replace(/\$\$[^\$]+\$\$/g, function (x) { return kdc(x.substr(2, x.length - 4)) })
		.replace(/\$[^\$]+\$/g, function (x) { return ksc(x.substr(1, x.length - 2)) })
		.replace(/㆖[^㆖㆘]+㆘/g, function (x) { return ksc($A(x.substr(1, x.length - 2))) })
	},
	KxA = function (A) { return ksc(A.join(kbr2)) },
	kx = function (t) {
		var s = re(('' + t).replace(/−/g, '-').replace(/​/g, '').replace(/[ ]/g, ' ')
			.replace(/\$[^\x00-\xff][^\$]+\$/g, function (x) {
				var x0=x.replace(/\$/g, ''), x00=x0.split('(')[0], x01=x0.substr(x00.length+1).replace(/\)$ */,''), o0={
					'竖式':'Decimal.oprs',
					'竖式+':'Decimal.oprs',
					'竖式-':'Decimal.oprs',
					'竖式*':'Decimal.oprs',
					'竖式/':'Decimal.oprs',
				},o1={

				};
				if(o0[x00]){
	
					return eval(x0.replace(x00+'(', o0[x00]+"('"+x00+"',"))
				}
				return eval(x0.replace(x00, o1[x00])) 
			})
			.replace(/\$[^\$]+\$/g, function (x) { return eval(x.replace(/\$/g, '')) }))

			//	.replace(/≠/g,'=\\not\\mathrlap{}').replace(/≢/g,'≡\\not\\mathrlap{}')
			// fix latex ≠ bug
			//	.replace(/\\not([^\\ ])/g,function(x){return '$1\\not\\mathrlap{}'})		// fix latex ≠ bug V0.10.0

			.replace(/≢/g, '\\not \\mathrlap{} \\negthickspace \\negthickspace ≡')	// fix latex ≢ bug	V0.10.1				katex bug:	table元素中使用katex，不等号会错位	字体显示≢会丢失 删除线



			//add math function names in katex.js ,"\\arccot","\\arcsec","\\arccsc","\\sech","\\csch","\\sinc","\\si","\\Si","\\ci","\\Ci","\\Shi","\\sgn","\\cis","\\arccis","\\Arg"

			//extension 
			.replace(/\\b (\{[^\{\}]+\})/g,'\\pmb {\\red$1}')	//加粗斜体红色
			.replace(/\\b ([^\{}])/g,'\\pmb {\\red{$1}}')	//加粗斜体红色(单个字)
			.replace(/\\r (\{[^\{\}]+\})/g,'\\textbf \\red $1')	//加粗正体红色
			.replace(/\\r ([^\{}])/g,'\\textbf \\red{$1}')	//加粗正体红色(单个字)
			.replace(/\\d /g,'\\hskip{0.1em}\\text{d}')	//微分d

			.replace(/\\Rt/g,'\\text{Rt△}')	//直角三角形

			.replace(/\\\(/g,'\\left(')
			.replace(/\\\)/g,'\\right)')
			.replace(/\\\[/g,'\\left[')
			.replace(/\\\]/g,'\\right]')


			.replace(/iddots/g,'kern3mu \\raisebox2mu{.}\\kern1mu\\raisebox7mu{.}\\kern1mu\\raisebox13mu{.}\\kern4mu')
		//	.replace(/(inj|proj) ?(lim)/g, 'mathrm{$1~$2}')
			.replace(/FUNC([A-Za-z]+)/g, '\\mathrm{$1}')		//函数字体FUNC* <=> \\mathrm{*}
			.replace(/(\{[^\}]+\}|.) *\\\/ *(\{[^\}]+\}|.)/g, '\\frac{$1}{$2}')				//无嵌套分数形式	a\/b  <=> \frac{a}{b}
			.replace(/(\{[^\}]+\}|.) *\\t\/ *(\{[^\}]+\}|.)/g, '\\tfrac{$1}{$2}')				//无嵌套分数形式	a\t/b  <=> \tfrac{a}{b}
			.replace(/[√∛∜](-?[\d\.]+|\{[^\}]+\})/g, function(x){var i='√∛∜'.indexOf(x[0]);return '\\sqrt'+(i?'['+(i+2)+']':'')+'{'+x.substr(1)+'}'})


		;


		//中文及标点

		if (!/\\text\{.*\}/.test(s)) {
			s = s.replace(/[\u4E00-\u9FA5\uFF00-\uFFFF]+/g, '\\text{$&}')	//[^\x00-\xff]
				.replace(/[，、；。：⋰？！～“”‘’《》【】（）｛｝⓪①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]+/g, '\\text{$&}')
		}
		if (enPhrase.test(s)) {//纯英文字母，且有空格
			return '\\text{' + s + '}'
		}
		/*
		if(!/\\text\{.*\}/.test(s)){
			hanziRe.lastIndex=0;
			if(hanziRe.test(s)){// 汉字
				return s.replace(/[^\x00-\xff]+/g,'\\text{$&}')
				//return '\\text{'+s+'}'
			}
		}
		
		\text{∏} error
		*/
		return s


	},
	kxf = function (t, v) { return '\\text{' + t + '}' + (v ? zp(v) : '') },//不使用mathrm，因为它忽略空格
	kxA = function (A, b) { return b ? '\\begin{array}{}' + Arrf(function (x) { return x instanceof Array ? x.join(' & ') : x }, A).join('\\\\ ') + ' \\end{array}' : A.join('\\\\ ') },
	kxc = function (t, p, pfx) {
		var c = ('' + t).charCodeAt(0), g = 'ΑΒΓΔΕϜΦΗΙ΢ΚΛΜΝΟΡΠΘΣΤΥΞΩΧΨΖ'[c > 90 ? c - 97 : c - 65], a = 'ℵℶℷℸ'[c > 90 ? c - 97 : c - 65];
		return p == 'a' ? a : (p == 'g' ? (c > 90 ? g.toLowerCase() : g) : '\\' + (pfx === undefined ? 'math' + (p || 'bb') : pfx + (pfx === 'text' && p === '' ? '' : p || 'bf')) + '{' + t + '}')
	},/*
		math: bb bf	   cal frak it rm scr sf
		text: '' bf             it rm     sf normal tt
		'' : Bbb bf 	   frak	it rm     sf		tt bm bold boldsymbol
*/
	kos = function (t) {
		return /x/.test(t) ? t : (['xleftarrow', 'xleftrightarrow', 'xrightarrow', 'xLeftarrow', 'xLeftrightarrow', 'xRightarrow', 'xlongequal',
			'xhookleftarrow', 'xhookrightarrow', 'xtwoheadleftarrow', 'xtwoheadrightarrow', 'xleftharpoonup', 'xrightharpoonup', 'xleftharpoondown', 'xrightharpoondown',
			'xleftrightharpoons', 'xrightleftharpoons', 'xtofrom', 'xfromto', 'xmapsfrom', 'xmapsto'
		]['←↔→⇐⇔⇒=↩↪↞↠↼⇀↽⇁⇋⇌⇄⇆↤↦'.indexOf(t || '=')] || t)
	},

	kxo = function (t, p, t2) {
		return '\\' + ['overline', 'overleftarrow', 'overleftrightarrow', 'overrightarrow', 'overlinesegment', 'overleftharpoon', 'overrightharpoon', 'Overleftarrow', 'Overrightarrow',
			'overbrace', 'overgroup', 'widehat', 'widetilde', 'widecheck', 'xlongequal']['-←↔→I↼⇀⇐⇒{(<~>='.indexOf(p || '-')]
			+ (p == '=' ? '[' + t + ']{' + (t2 || '') + '}' : '{' + (t || '') + '}') + (p == '{' && t2 ? '^{\\text{' + t2 + '}}' : '')
	},
	kxu = function (t, p, t2) {
		return '\\' + (['underline', 'underleftarrow', 'underleftrightarrow', 'underrightarrow', 'underlinesegment', 'underleftharpoon', 'underrightharpoon', 'Underleftarrow', 'Underrightarrow',
			'underbrace', 'undergroup', 'uhat', 'utilde', 'ucheck', 'xlongequal']['-←↔→I↼⇀⇐⇒{(<~>='.indexOf((p || '-').replace('_', '-'))])
			+ (p == '=' && t2 ? '[' + t2 + ']' : '{' + (t || '') + '}') + (p == '{' && t2 ? '_{\\text{' + t2 + '}}' : '')
	},
	kancel = function (t, p) { return '\\' + (p == '-' ? 'sout' : (p || '') + 'cancel') + '{' + t + '}' },

	boxed = function (t) { return '\\boxed{' + t + '}' }, hp = function (t) { return '\\hphantom{' + (t || 0) + '}' },
	kbox = function (t, p, pfx) { return boxed(kxc(t, p || 'bf', pfx || 'text')) },

	ksc = function (t) { return isArr(t)?Arrf(ksc,t):SCtv('katex0" data-katex0="'+t.replace(/^\$|\$/g,'').trim(), t) }, 
	kdc = function (t) { return isArr(t)?Arrf(kdc,t):DCtv('katex0" data-katex0="'+t.replace(/^\$|\$/g,'').trim(), t) },
	ksz = function (t, n) { return '\\' + ['tiny', 'scriptsize', 'footnotesize', 'small', 'normalsize', 'large', 'Large', 'LARGE', 'huge', 'Huge'][(n || 0) + 4] + ' ' + t },


	kroot = function (t, n) { return root(t, n || '', '', '') },
	kfrac = function (t, p, tiny) {
		if (t instanceof Array) { return frac(t[0], t[1], tiny || '') }
		if (p) { return ('' + t).replace(/(\d+|[a-zα-ω])\/(\d+|[a-zα-ω])/ig, function (x) { return kfrac(x, '', tiny || '') }) }
		return /\//.test(t) && t.split('/').length==2 ? (t[0] == '-' ? '-' : '') + frac(t.split('/')[0].replace('-', ''), t.split('/')[1], tiny || '') : t
	},
	kfraczp = function (t, tiny, T) { return kfrac(zp(t) + (T ? '^{' + T + '}' : ''), 1, tiny || '') },
	kxAfrac = function (A, p) { return Arrf(function (x) { return kfrac(x, 1) }, A).join(kbr2) },


	sup = function (v, zM) { return arguments.length == 2 ? '^{' + v + '}' : XML.wrapE('sup', v) }, sub = function (v, zM) { return arguments.length == 2 ? '_{' + v + '}' : XML.wrapE('sub', v) },
	msub = function (m, v, r2l, zM) { var s = SCtv('inblk', v != null ? m : m[0]), M = (('' + m).length == 1 ? m : '{' + m + '}'); return arguments.length == 4 ? (r2l ? '' : M) + '_{' + v + '}' + (r2l ? M : '') : SCtv('scbox', (r2l ? '' : s) + XML.wrapE('sub', v != null ? v : m.substr(1)) + (r2l ? s : '')) },
	msup = function (m, v, r2l, zM) { var s = SCtv('inblk', v != null ? m : m[0]), M = (('' + m).length == 1 ? m : '{' + m + '}'); return arguments.length == 4 ? (r2l ? '' : M) + '^{' + v + '}' + (r2l ? M : '') : SCtv('scbox', (r2l ? '' : s) + XML.wrapE('sup', v != null ? v : m.substr(1)) + (r2l ? s : '')) },
	msups = function (A, zM) { return Arrf(arguments.length == 2 ? function (a, b) { return (('' + a).length == 1 ? a : '{' + a + '}') + '^' + (('' + b).length == 1 ? b : '{' + b + '}') } : msup, A, '-cp2') },
	msubs = function (A, zM) { return Arrf(arguments.length == 2 ? function (a, b) { return (('' + a).length == 1 ? a : '{' + a + '}') + '_' + (('' + b).length == 1 ? b : '{' + b + '}') } : msub, A, '-cp2') },
	ksups = function (a, n) { return msups(copyA(a, n), '') }, ksubs = function (a, n) { return msubs(copyA(a, n), '') },
	subsup = function (b, t, zM) { return arguments.length == 3 ? '_' + (('' + b).length == 1 ? b : '{' + b + '}') + '^' + (('' + t).length == 1 ? t : '{' + t + '}') : SCtv('scbox', SCtv('inblk alignl', sub(t) + br + sup(b))) },
	msubsup = function (m, b, t, r2l, zM) { var s = SCtv('inblk', b ? m : m[0]), M = (('' + m).length == 1 ? m : '{' + m + '}'), B = (('' + b).length == 1 ? b : '{' + b + '}'); return arguments.length == 5 ? (r2l ? '' : M) + '_' + B + '^{' + t + '}' + (r2l ? M : '') : SCtv('scbox', (r2l ? '' : s) + SCtv('inblk alignl', sub(t) + br + sup(b || m.substr(1))) + (r2l ? s : '')) },
	Msubsup = function (M, b, t) { var s = SCtv('inblk large', M); return SCtv('scbox', s + SCtv('inblk alignl', sub(t) + br + sup(b == null ? '' : b))) },

	subReg = function (v, b, u) { var t = u ? v.replace(u, function (t) { return sup(t) }) : v; return b ? t.replace(b, function (t) { return sub(t) }) : t },

	scRed = function (v) { return SCtv('red', v) }, scGain = function (v) { return SCtv('gainsboro', v) }, scHotk = function (v) { return SCtv('hotk', v) },
	sci = function () { var ar = arguments, s = Array().join.apply(ar); return SCtv('inblk', s) },
	scit = function (v) { return SCtv('bdt inblk notm', v) }, scib = function (v) { return SCtv('bdb inblk notm', v) }, scil = function (v) { return SCtv('bdl inblk notm', v) }, scir = function (v) { return SCtv('bdr inblk notm', v) },
	scbt = function (v, brad) { return SCtv('bdb bdt' + (arguments.length > 1 ? ' brad' : ''), v) }, sclr = function (v) { return SCtv('bdl bdr' + (arguments.length > 1 ? ' brad' : ''), v) },//参数brad 是border radius
	scbox = function (v, b) { return SCtv('bdl bdr bdb bdt scbox ' + (b || ''), v) }, scblr = function (v, b) { return SCtv('bdl bdr bdb scbox inblk' + (b || ''), v) }, sctlr = function (v, b) { return SCtv('bdl bdr bdt scbox inblk' + (b || ''), v) },
	tmb = function (t, m, b, v) { return SCtv('inblk alignc', sub(t) + br + m + br + sup(b)) + sci(v) },//tmb=function(t,m,b,v){return SCtv('inblk alignc',SCtv('small',t)+DCtv('large',m)+SCtv('vat small',b))+sci(v)},
	lim = function (n, x, v, ud, zM) {
		var x0 = (x == null ? '' : '' + x).replace(/[\+-]$/, ''), lr = /[\+-]$/.test(x) && !/^[\+-]/.test(x) ? x.substr(-1) : '', t5 = arguments.length >= 5,
		ntox0 = '{' + n + ' \\to ' + (x0 || (/^[\+-]$/.test(x) ? x : '') + '∞') + (lr ? '^' + lr : '') + '}'; //ud=u(p) d(own) s(up) i(nf) ''
		return t5 ? (/[ud]/.test(ud) ? '\\underset' + [ntox0 + '{\\', 'line{\\lim}}\\,'].join(ud == 'u' ? 'over' : 'under') : '\\lim' + (/[si]/.test(ud) ? (ud == 's' ? 'sup' : 'inf') : '') +
			'\\limits_' + ntox0) + v : SCtv('inblk alignc', (ud == 'u' ? scit('lim') : (ud == 'd' ? scib('lim') : 'lim')) + br + sup(n + '→' + (x0 || (/^[\+-]$/.test(x) ? x : '') + '∞') + (lr ? sup(lr) : ''))) + (v || '')
	},

	sum = function (i, b, t, v, p, zM) {
		return arguments.length >= 6 ? '\\' + (!zM ? 'display' : 'text') + 'style{\\' + ['sum', 'bigcup', 'mathop{+}', 'bigvee', 'sup', 'max', 'bigoplus'][p || 0] + (!zM ? '\\limits' : '') +
			'_{' + (i ? i + '=' + b : (b instanceof Array ? '\\substack{' + b.join('\\\\ ') + '}' : (b == '-' ? b + '∞' : b))) + '}' + (t ? '^{' + (t == '+' ? '∞' : t) + '}' : '') +
			v + '}' : SCtv('inblk alignc', sub(t == '+' ? '∞' : t) + br + ['∑', '∪', '+', '⋁', 'sup', 'max', '⊕'][p || 0] + br + sup(i ? i + '=' + b : b)) + sci(v)
	},

	prod = function (i, b, t, v, p, zM) {
		return arguments.length >= 6 ? '\\' + (!zM ? 'display' : 'text') + 'style{\\' + ['prod', 'bigcap', 'mathop{×}', 'coprod', 'bigwedge', 'inf', 'min', 'bigodot', 'bigotimes'][p || 0] + (!zM ? '\\limits' : '') +
			'_{' + (i ? i + '=' + b : (b instanceof Array ? '\\substack{' + b.join('\\\\ ') + '}' : (b == '-' ? b + '∞' : b))) + '}' + (t ? '^{' + (t == '+' ? '∞' : t) + '}' : '') +
			v + '}' : SCtv('inblk alignc', sub(t == '+' ? '∞' : t) + br + ['∏', '∩', '×', '∐', '∧', 'inf', 'min', '⊙', '⊗'][p || 0] + br + sup(i ? i + '=' + b : b)) + sci(v)
	},

	intl = function (fA, b, t, d, p, zM) {
		var s=/, /.test(d)?'∧':'';
		if(p==-1){
			return fA+orifun(b, t)
		}
		return arguments.length >= 6 ? '\\' + (!zM||zM==1 ? 'display' : 'text') + 'style{\\' + ['int', 'iint', 'iiint', 'oint', 'oiint', 'oiiint', 'int\\dotsi\\int'][p || 0] + (!zM ? '\\nolimits' : (zM==1?'\\limits':'')) +
			'_{' + (/^[\+\-]$/.test(b) ? b + '∞' : (b instanceof Array ? '\\substack{' + b.join('\\\\ ') + '}':(b||b==0?b:''))) + '}' + 
			(t||t===0 ? '^{' + (/^[\+\-]$/.test(t) ? t + '∞' : t) + '}' : '') + (isArr(fA)?
			snake([zlrA3('\\mathrm{d}{',(d || 'x,y;y,z;z,x').replace(/,/g, s+'\\mathrm{d}').split(';'), '}'),fA]).join('')+'}':fA + 
			(d==' '?'':'\\,'+
			zlrA3('\\mathrm{d}{',(d || 'xyz'.substr(0,p || 2).split('').join()).split(','), '}').join(s)+'}')) : 
				Msubsup('∫∬∭∮∯∰∱∲∳'[p || 0], b == null ? '' : b, (/[\+\-]/.test(t) ? t + '∞' : t) || (b == null ? '' : '+∞')) + v + 'd' + (d || 'x')
	},


	iint = function (fA, b, t, d,p,zM) {
		var s=/, /.test(d)?'∧':'';
		return  '\\' + (!zM||zM==1 ? 'display' : 'text') + 'style{\\' + ['','int','iint', 'iiint'][p || 2] + (!zM ? '\\nolimits' : (zM==1?'\\limits':'')) +
			'_{' + (b instanceof Array ? '\\substack{' + b.join('\\\\ ') + '}':(b||b==0?b:'')) + '}' + (t||t===0  ? '^{' + t + '}' : '') + (isArr(fA)?
			snake([zlrA3('\\mathrm{d}{',(d || 'x,y;y,z;z,x').replace(/,/g, s+'\\mathrm{d}').split(';'), '}'),fA]).join(''):fA + '\\,'+
			(d==' '?'':(!d?('\\mathrm{d}'+'  σV'[p || 2]):
			zlrA3('\\mathrm{d}{',(d || 'xyz'.substr(0,p || 2).split('').join()).split(','), '}').join(s))))+'}' 
	},

	oint = function (fA, b, t, d,p,zM) {
		var s=/, /.test(d)?'∧':'';
		return  '\\' + (!zM||zM==1 ? 'display' : 'text') + 'style{\\' + ['oint','oint','oiint','oiiint'][p || 0] + (!zM ? '\\nolimits' : (zM==1?'\\limits':'')) +
			'_{' + (b instanceof Array ? '\\substack{' + b.join('\\\\ ') + '}':(b||b==0?b:'')) + '}' + (t||t===0  ? '^{' + t + '}' : '') +
			(!/,/.test(d) && !isArr(fA)?fA +(d==' '?'':'\\,\\mathrm{d}'+d):snake([zlrA3('\\mathrm{d}{',(d || 'x,y;y,z;z,x').replace(/,/g, s+'\\mathrm{d}').split(';'), '}'),fA]).join(''))+'}' 
	},





	orifun =function(x0,x1){
		return '\\LARGE|\\normalsize\\substack{'+(x1||'')+'\\\\\\\\ '+x0+'}'
	},
	difn = function (f, x, p, g) { var d = (p ? '∂' : '\\mathrm{d}') + ' ', 
		dx= +g>1?d + (x || 'x'):d,
		dg = +g>1? '^{' + g + '}' : (isArr(x)?'^{' +x.length+'}':''),
		dg_= +g>1 ? '^{' + g + '}' : (isArr(x)?x.join(d):(x || 'x'));
		return ' \\tfrac{' + d + dg + (f || '') + '}{' + dx + dg_ + '}' },

	Opr = function (i, b, t, v, p) { return '\\mathop{' + p + '}\\limits' + '_{' + (i ? i + '=' + b : (b=='-'?'-∞':b)) + '}' + (t ? '^{' + (t == '+' ? '∞' : t) + '}' : '') + (v || '') },
	/* katex 不支持 ⋰ (已使用\iddots 命令修复) ∱∲∳ \idotsint 多重积分 ∫⋅⋅⋅∫ 与MathJax区别
	
	 http://www.cnblogs.com/suerchen/p/4833381.html
	 https://katex.org/docs/supported.html
	 https://www.cnblogs.com/Coolxxx/p/5982439.html
	 */

	mfrac = function (A, zM) { return Arrf(zM ? function (a, b) { return '\\' + (zM || '') + 'frac {\\displaystyle ' + a + '}{\\displaystyle ' + b + '}' } : frac, A, '-cp2') },
	mfracs = function (A, b, infMid, infEnd, ops, zM) {//连分式 b0+a0/(b1+a1/(b2+a2/...)) ops指定连接符序列：+(默认),-,+-,-+,+--,-++
		var An = A.length, B = [].concat(b), Bn = b.length, t = '', a6 = arguments.length >= 6;//Bn比An大1，否则如相等，则最外层分式之前无内容
		if (Bn == An) {
			B = [''].concat(b);
			Bn++;
		}
		if (Bn == 2) {
			var op = /^..$/.test(ops) ? ops[0] : (ops || '+').substr(-1);
			return B[0] + (infMid ? op + '⋯' : '') + op + (a6 ? frac(A[0], B[1] + (infEnd ? op + '⋱' : ''), zM || '') : frac(A[0], B[1] + (infEnd ? op + '⋱' : '')))
		} else {
			var ops2 = ops || '+', op = ops2;
			if (op == '+--' || op == '-++') {
				op = op[0];
				ops = ops[1];
			} else if (op == '+-' || op == '-+') {
				op = op[0];
				ops = ops[1] + op;
			}
			return (B[0] !== '' ? B[0] + op : '') + (a6 ? frac(A[0], mfracs(A.slice(1), B.slice(1), infMid, infEnd, ops, ''), zM || '') : frac(A[0], mfracs(A.slice(1), B.slice(1), infMid, infEnd, ops)))
		}
	},

	mroots = function (A, B, infMid, infEnd, ops, Aisindex, zM) {//连根式 b0+a0√(b1+a1√(b2+a2√...)) ops指定连接符序列：+(默认),-,+-,-+,+--,-++	Aisindex指定数组A是根次，而不是倍数
		var An = A.length, Bn = B.length, t = '', a7 = arguments.length == 7;//Bn比An大1
		if (Bn == 2) {
			var op = /^..$/.test(ops) ? ops[0] : (ops || '+').substr(-1);
			return B[0] + (infMid ? op + '⋯' : '') + op + (An && !Aisindex ? A[0] : '') + (a7 ? kroot : root)(B[1] + (infEnd ? op + '⋯' : ''), (An && Aisindex ? A[0] : ''))
		} else {
			var ops2 = ops || '+', op = ops2;
			if (op == '+--' || op == '-++') {
				op = op[0];
				ops = ops[1];
			} else if (op == '+-' || op == '-+') {
				op = op[0];
				ops = ops[1] + op;
			}
			return (B[0] + op == '+' ? '' : B[0] + op) + (An && !Aisindex ? A[0] : '') + (a7 ? kroot : root)(a7 ? mroots(A.slice(1), B.slice(1), infMid, infEnd, ops, Aisindex, '') : mroots(A.slice(1), B.slice(1), infMid, infEnd, ops, Aisindex), (An && Aisindex ? A[0] : ''))
		}
	},

	re = function (t) {
		return ('' + t).replace(/>=/g, '≥').replace(/<=/g, '≤').replace(/=\//g, '≠').replace(/-=/g, '≡').replace(/≡\//g, '≢')
			.replace(/←→|<->/g, '↔').replace(/->/g, '→').replace(/-</g, '←').replace(/↔\//g, '↮').replace(/→\//g, '↛').replace(/←\//g, '↚')
			.replace(/<=>/g, '⇔').replace(/=>/g, '⇒').replace(/=</g, '⇐').replace(/⇔\//g, '⇎').replace(/⇒\//g, '⇏').replace(/⇐\//g, '⇍')
	},
	rel = function (A, rA, style) {//通用模板
		var l = A.length, r = style ? br : ' ', s = '';
		Arrf(function (t, i) { if (i) { s += r + rA[i - 1] + ' ' + t } else { s = t } }, A)
		return s
	},
	binom = function (n, m, p) { return p == 'C' ? 'C_{' + n + '}^{' + m + '}' : (p == 'c' ? '{' + n + ' \\choose ' + m + '}' : '\\' + (p || '') + 'binom{' + n + '}{' + m + '}') },//p=t d '' c (for choose)
	mod = function (a, b, m, neg, pow, zM) { var a6 = arguments.length == 6, M = ('' + m).length == 1 ? m : '{' + m + '}'; return (isArr(a) ? a.join('≡') : a) + (neg ? (a6 ? kx('≢') : '≢') : '≡') + b + (a6 ? (pow ? ' ~ (\\mathrm{pow} ~ ' + M + ')' : '\\pmod ' + M) : ' (' + (pow ? 'pow' : 'mod') + ' ' + m + ')') },	//'\\not\\equiv '
	kmod = function (a, b, m, neg, pow) { return mod(a, b, m, neg, pow, '') },
	imply = function (A, b, single, neg, inv, style) { var isA = isArr(A), s = inv ? (single ? '←' : '⇐') : (single ? '→' : '⇒'), l = A.length, r = style ? br : ' '; return (isArr(A) ? A.slice(0, l - 1).join(r + s + ' ') : A) + r + (neg ? (inv ? (single ? '↚' : '⇍') : (single ? '↛' : '⇏')) : s) + ' ' + (isA ? A[l - 1] : b) },
	eqv = function (A, b, n, neg, style, m) {/*
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
	
	参数 b 当A非数组时有用，A=b
	参数 style指定换行（否则默认是空格）
	参数 m 指定当n=3时 (mod m)
	
	
*/
		var c = ['=↔⇔≡~≈≋≃≅', '≠↮⇎≢≁≉ ≄≇'], isA = isArr(A), s = c[0][n || 0], l = A.length, r = style ? br : ' ';
		return (isA ? A.slice(0, l - 1).join(r + s + ' ') : A) + r + (neg ? c[1][n || 0] : s) + ' ' + (isA ? A[l - 1] : b) + (n == 3 && m ? ' (mod ' + m + ')' : '')
	},
	eq0 = function (A, n, m) {/*
	等于0
	
	参数n指定等号样式，当n=3时，m是mod m
*/
		return eqv(isArr(A) ? [].concat(A, 0) : [A, 0], '', n) + (n == 3 ? ' \\pmod {' + m + '}' : '')	//' (mod '+m+')'
	},
	lt = function (A, b, nm, style) {/*
	nm是数组[连续的符号编号, 类别序号]
		符	号	编	号
		0	1	2	3	4	5	6	7	8	9	a	b	c	d	e	f	g	h	i	j
类	0	≤	<	=	≠	≮	≰	≪	⋘	⋖	⋜	≦	≨	≲	≴	⋦	≶	≸	⋚
别	1	≼	≺	=	≠	⊀	⋠	⋞	≾	⋨	⊰
序	2
号	3



*/
		var c = [], isA = isArr(A), r = style ? br : ' ';
		return isA ? rel(A, Arrf(function (t) { return c[nm[1]][+t || parseInt(t, 36)] }, nm[0].split('')), style) : A + r + c[nm ? nm[1] : 0][nm ? nm[0] || parseInt(+nm[0], 36) : 0] + ' ' + b
	},
	gt = function (A, b, nm, style) {/*
	nm是数组[连续的符号编号, 类别序号]
		符	号	编	号
		0	1	2	3	4	5	6	7	8	9	a	b	c	d	e	f	g	h	i	j
类	0	≥	>	=	≠	≯	≱	≫	⋙	⋗	⋝	≧	≩	≳	≵	⋧	≷	≹	⋛
别	1	≽	≻	=	≠	⊁	⋡	⋟	≿	⋩	⊱
序	2
号	3

*/
		var c = [], isA = isArr(A), r = style ? br : ' ';
		return isA ? rel(A, Arrf(function (t) { return c[nm[1]][+t || parseInt(t, 36)] }, nm[0].split('')), style) : A + r + c[nm ? nm[1] : 0][nm ? nm[0] || parseInt(+nm[0], 36) : 0] + ' ' + b

	},
	aligned=function(A,leftElement){
		var a=[].concat(A);
		if(leftElement){
			a[1]=a[0]+' & '+a[1];
			a.shift();
		}else{
			a[0]='& '+a[0]
		}
		return ['\\begin{aligned}',
		a.join(kbr+brn+'& '),
		'\\end{aligned}'].join(brn)
	},

	eq = function (t, m, b) { var k = kos(m); return (t || b) ? '\\' + k + (b ? '[' + b + ']' : '') + '{' + (t || '') + '}' : (/x/.test(k) ? '\\' + k : k) },
	eqM = function (A, m) { return A.join(eq('', '', '\\mod ' + m)) },
	Eq = function (A, noteA, style, eqClass) {
		/*
		A 等值	数组元素，如也是数组，则在等号两侧
		noteA 备注
		style 指定排版风格
			line 排成一行；注释都在等号上
	
			br 换行；等号对齐（默认，仅每行第1个=）；注释都在等号上
			table 换行；等号对齐（都在第2列）；注释都在第4列
			
		eqClass 连接符（默认是等号eq）	= ≡ 支持数组(与noteA一一对应),表示依次使用不同连接符号
	
	
		*/



		var n = A.length, a = [], sty = style || 'br', isbr = sty == 'br', isline = sty == 'line', istable = sty == 'table',
			eqC = eqClass || '', iseqCA = eqClass instanceof Array, isA0 = A[0] instanceof Array;
		for (var i = 0; i < n; i++) {
			var Ai = A[i], isA = Ai instanceof Array, nAi = noteA && (i || isA0 || isline) ? (noteA[!isA0 && !isline ? i - 1 : i] || '') : '',
				eqCi = (iseqCA ? eqC[(i || isA0 || isline) && !isA0 && !isline ? i - 1 : i] : (eqC || '=')) || '',
				ai = '', isnA = nAi instanceof Array;
			if (isbr) {
				//	console.log(isnA?nAi.join(';;;;;;'):nAi);
				ai = i || isA0 ? (isA ? Ai : ['', Ai]).join(' & ' + (!(isnA || nAi) ? (eqCi || '=') : eq((isnA ? nAi[0] : nAi), (eqCi), (isnA ? nAi[1] : '') || ''))) : ' & ~ \\quad ' + Ai
			}
			if (istable) {
				ai = i || isA0 ? (isA ? Ai : ['', Ai]).join(' & ' + eqCi) + (nAi ? ' & ' + nAi : '') : ' & ~ \\quad ' + Ai
			}
			if (isline) {
				ai = Ai + (i == n - 1 ? '' : (!(isnA || nAi) ? eqCi : eq((isnA ? nAi[0] : nAi), eqCi, (isnA ? nAi[1] : nAi) || '')))
			}
			a.push(ai)
		}
		return isline ? a.join(' ') : '\\begin{aligned}' + a.join(' \\\\ ') + ' \\end{aligned}'
	},
	EqA = function (A, lr, splitter) {/* 对齐方程组(不等式组)
	A是二维数组(已按对齐要求分割),或者一维数组(方程的数组,需按splitter分割)
	lr 指定大括号0{ 1} 2{} 3''
	splitter是对齐标志(正则表达式) 默认按多元一次线性方程(或不等式)组	split('123x+4y=23',/[a-z≤≥<>=≠≡≢]/g)
		
	*/
		var s0 = '\\left' + ['\\{', '', '\\{', ''][+lr || 0], s1 = '\\right' + ['.', '\\}', '\\}', ''][+lr || 0], sp = splitter || /[a-z≤≥<>=≠≡≢]/g, isDim2 = A[0] instanceof Array, c = 0, B = [].concat(A);
		if (isDim2) {
			c = A[0].length;
		} else {
			var spA = A.join('').replace(/[^a-z]/g, '').split('').sort().join('').replace(/(.)\1+/g, '$1').split('').concat('=');	//Arrf(String.fromCharCode,seqA(97,26))
			c = spA.length;
			Arrf(function (x, i) {

				B[i] = split(kx(x), sp, 1);
				if (B[i][0].length != c) {
					for (var j = 0; j < c - 1; j++) {
						if (B[i][0].indexOf(spA[j]) < 0) {
							if (j) {
								B[i][0].splice(j, 0, '');//插入
								B[i][1].splice(j, 0, '');
							} else {
								B[i][0].unshift('');
								B[i][1].unshift('');
							}
						}
					}
				}
				var C = [];
				for (var j = 0; j < c * 2 + 1; j++) {
					C.push(B[i][1 - j % 2][Math.floor(j / 2)])
				}
				B[i] = C;
			}, B);
			c *= 2;

		}
		return s0 + '\\begin{alignedat}{' + c + '}' + Arrf(function (x) { return x.join(' & ') }, B).join(kbr) + '\\end{alignedat}' + s1
		/*
		   10&x &  +3 &y & =& 0\\
		   3&x & + 12 &  y & =&1 0 \\
		   & &   18&y & =& 40 \\
		
		   10&x &  & & =& 230\\
		*/


	},
	Table = function (thead, t, bd, tbodyClass, theadClass) {	//bd 指定边框风格（或其他class） thead是数组，末项（n>1时）是列标题，前n-1项是行标题
		/*
			bd：表格class（控制表格边框 或 水平对齐）
			
				bd0 无边框（默认）
				
				TBalignl (默认)
				TBalignc_3_5
				TBalignr_2
				
				
				TBtimes （群、九九）乘法表：首行bdb 首列bdr
				TBr 全部行(不含最后一行)
				TBc 全部列(不含最后一列)
				TBrc 所有单元格
				
				TBr2	行平均分两块
				TBc2	列平均分两块
				TBr2c2  十字分隔 
					注意 r2、c2是或关系
	
				
				TBD3_4_2		主对角阵分块（仅方阵）
				TBCD3_4_2		副对角阵分块（仅方阵）
	
				除法（长除、短除、辗转相除）
			
				TBcalc 竖式计算（+ - × ÷ √）
				
				TBI2J2 第2行或第2列加边框
				TBI2_4J2_3 第2、4行或第2、3列加边框
	
				TB[i2][j3][lrbt]		部分单元格边框
					注意i、j小写是且关系，大写是或
						[lrbt] 默认全选
					TBi2j3lr 第2行且第3列加左右边框
					TBj3r
					TBi2b
				TBi2j3_TBi4j2 多个单元格，用下划线_隔开
	

				span[i2j3][i4j6] 合并单元格(第2行第3列，至第4行第6列的单元格区域)

				Span[i2j3][i4j6] 合并单元格(单元格区域内，有连续相同值的子区域时，才按需合并)
				

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


		var th = '', b = '</tbody></table>', colh = '', edi = /edit/.test(bd),
			bds = /dash|dot|dou|set|ridge|solid/.test(bd) ? bd.match(/solid|dash|dot|double|groove|inset|outset|ridge/g).join(' ') : '',
			span=/spani\d+j\d+/.test(bd)?Arrf(function(x){return Arrf(Number,x.split(/\D+/g))}, bd.match(/spani\d+j\d+i\d+j\d+/g)):'',
			Span=/Spani\d+j\d+/.test(bd)?Arrf(function(x){return Arrf(Number,x.split(/\D+/g))}, bd.match(/Spani\d+j\d+i\d+j\d+/g)):'',
			r = [], isA = t instanceof Array, A = isA ? t : t.split('\n'), n = A.length, m = (isA ? (n?A[0]:[]) : A[0].split('\t')).length;

		if (thead) {
			var thn = thead.length;
			for (var i = 0; i < thn; i++) {
				if (i && i == thn - 1) {
					colh = thead[i];
					break;
				}
				var thi = '<tr>', hdi = thead[i];
				for (var j = 0, l = Math.max(m + (thn > 1 ? 1 : 0), isArr(hdi) ? hdi.length : 1); j < l; j++) {
					thi += '<th'+(/bd0/.test(theadClass)?'':' class=bds')+'>' + hdi[j] + '</th>';//thi+='<th'+(j?' class=bdl':'')+'>'+hdi[j]+'</th>'
				}
				thi += '</tr>';
				th += thi;
			}
			th = '<thead' + (theadClass ? ' class="' + theadClass +'"' : '') + '>' + th + '</thead>'; //class=cnt
		}
		var a = '<table class="collapse mg10 ' + (bd || 'bd0') + '">' + th + '<tbody' + (tbodyClass ? ' class="' + tbodyClass + '"' : '') + '>';
		if (bd && /TB[CD]/.test(bd)) {
			var isC = /TBC/.test(bd), iA = bd.split(' ')[0].split('D')[1].split('_'), iAn = iA.length, jA = iA.join(',').split(',').reverse();

			for (var i = 0; i < iAn; i++) {
				if (i == 0) {
					iA[i] = +iA[i]
				} else {
					iA[i] = +iA[i] + iA[i - 1]
				}

				if (isC) {
					if (i == 0) {
						jA[i] = +jA[i]
					} else {
						jA[i] = +jA[i] + jA[i - 1]
					}
				}
			}

			if (isC) {

			} else {
				jA = iA;
			}

		}


		if(Span){
			var SpanA=[], Arr=[];


			for (var i = 0; i < n; i++) {
				var ri = [], Ai = isA ? A[i] : A[i].split('\t');
				Arr.push(Ai)
			}

			for(var k=0;k<Span.length;k++){
				var Sk=Span[k];
				if(Sk[1]==Sk[3]){
					for(j=Sk[2]-1;j<Sk[4]-1;j++){
						if(Arr[Sk[1]-1][j]!=Arr[Sk[1]-1][j+1]){
							Sk[2]=j+1;
						}
					}
					if(Sk[2]!=Sk[4]){
						SpanA.push(Sk)
					}

				}else if(Sk[2]==Sk[4]){
					for(i=Sk[1]-1;i<Sk[3]-1;i++){
						if(Arr[i][Sk[2]-1]!=Arr[i+1][Sk[2]-1]){
							Sk[1]=i+1;
						}
					}
					if(Sk[1]!=Sk[3]){
						SpanA.push(Sk)
					}
				}else if(Arr[Sk[1]-1][Sk[2]-1]!=Arr[Sk[1]][Sk[2]]){
					
					Span.splice(k,0,['',Sk[1], Sk[2], Sk[1], Sk[4]], ['',Sk[1], Sk[2], Sk[3], Sk[2]],  ['',Sk[1]+1, Sk[2]+1, Sk[3], Sk[4]])

				}else if(Arr[Sk[1]-1][Sk[2]-1]!=Arr[Sk[1]-1][Sk[2]]){

					Span.splice(k,0,['',Sk[1], Sk[2]+1, Sk[1], Sk[4]], ['',Sk[1], Sk[2], Sk[3], Sk[2]],  ['',Sk[1]+1, Sk[2]+1, Sk[3], Sk[4]])
					
				}else if(Arr[Sk[1]-1][Sk[2]-1]!=Arr[Sk[1]][Sk[2]-1]){

					Span.splice(k,0,['',Sk[1], Sk[2], Sk[1], Sk[4]], ['',Sk[1]+1, Sk[2], Sk[3], Sk[2]],  ['',Sk[1]+1, Sk[2]+1, Sk[3], Sk[4]])
				}else{
					var bk=0;
					for(j=Sk[2];j<Sk[4]-1;j++){
						
						for(var i=Sk[1]-1;i<Sk[3]-1;i++){
							if(Arr[i][j]!=Arr[Sk[1]-1][Sk[2]-1]){
								Sk[4]=j;
								bk=1;
								break;
							}
						}
						if(bk){
							break
						}
					}



					var bk=0;
					for(i=Sk[1];i<Sk[3]-1;i++){
						
						for(var j=Sk[2]-1;j<Sk[4]-1;j++){
							if(Arr[i][j]!=Arr[Sk[1]-1][Sk[2]-1]){
								Sk[3]=i;
								SpanA.push(Sk);
								bk=1;
								break;
							}
						}
						if(bk){
							break
						}
					}
					if(!bk){
						SpanA.push(Sk);
					}

				}


			}

			if(span){
				span=span.concat(SpanA);
			}else{
				span=SpanA;
			}
		}


		//console.log(span);
		for (var i = 0; i < n; i++) {
			var ri = [], Ai = isA ? A[i] : A[i].split('\t');
			for (var j = 0; j < m; j++) {
				var c = '';
				if (bd) {
					if (/TBrc/.test(bd)) {
						c += 'bdl bdr bdb bdt'
					} else if (/TBc(?!\d)/.test(bd)) {
						c += (j == 0 ? '' : 'bdl ') + (j == m - 1 ? '' : 'bdr ');
					} else if (/TBr(?!\d)/.test(bd)) {
						c += (i == 0 ? '' : 'bdt ') + (i == n - 1 ? '' : 'bdb ');
					}

					if (/TBtimes/.test(bd)) {
						if (!i) { c += 'bdb ' }
						if (!j) { c += 'bdr ' }
					}

					if (/TB(r\d+)?c\d+/.test(bd) && j == m / +bd.match(/TB(r\d+)?c\d+/)[0].split('c')[1] - 1) {
						c += 'bdr '
					}
					if (/TBr\d+/.test(bd) && i == n / +bd.match(/TBr\d+/)[0].split('r')[1] - 1) {
						c += 'bdb '
					}
					if (/TB(I[\d_]+)?J\d+/.test(bd) && bd.match(/TB(I[\d_]+)?J[\d_]+/)[0].split('J')[1].split('_').indexOf('' + (j + 1)) > -1) {
						c += 'bdr '
					}
					if (/TBI[\d_]+/.test(bd) && bd.match(/TBI[\d_]+/)[0].split('I')[1].split('_').indexOf('' + (i + 1)) > -1) {
						c += 'bdb '
					}
					if (/TB[CD]/.test(bd)) {
						if (iA.indexOf(i + 1) > -1 && i < n - 1) {
							c += 'bdb '
						}
						if (jA.indexOf(j + 1) > -1 && j < m - 1) {
							c += 'bdr '
						}
					}
					if (/TB[ij]\d+/.test(bd)) {
						var ijs = bd.match(/TB([ij]\d+)+[lrbt]?/g);
						for (k = 0; k < ijs.length; k++) {
							var ijb = ijs[k].substr(2), ij = ijb.replace(/\D+$/, '');
							if (eval(ij.replace(/[ij]/g, '$&==').replace(/\d+/g, '$&-1').replace(/-1j/g, '-1 && j'))) {
								c += (ijb.substr(ij.length) || 'lrbt').replace(/./g, 'bd$& ')
							}
						}
					}


					if (/TBalign[cr]($| )/.test(bd)) {
						c += ' align' + bd.replace(/ TBalign.\d+(_\d+)*/g, '').split('align')[1]
					} else {
						var cc = bd.match(new RegExp('align.(\\d+_)*' + (j + 1) + '(?!\\d)'));
						if (cc) {

							c += ' ' + cc[0].substr(0, 6)
						}

					}

				}
				//console.log(Ai[j]);
				var s='', same='';
				for(var k=0;k< span.length;k++){
					var si=span[k];
					if(i+1 == si[1] && j+1 == si[2]){

						s=(si[3]>si[1] ?' rowspan='+(si[3]-si[1]+1):'')+(si[4]>si[2] ?' colspan='+(si[4]-si[2]+1):'');
						break;
					}
					if(i+1 >= si[1] && j+1 >= +si[2] && i+1 <= +si[3] && j+1 <= +si[4] ){
						s='inRange';
						break
					}

				}
				if(s!='inRange'){
					ri.push('<td'+s+' class="' + (c ? zlr2(c, bds || '').trim() : 'bd0') + (edi ? '" contenteditable="true' : '') + '">' + (Ai[j] == undefined ? '' : Ai[j]) + '</td>')
				}
				
			}
			r.push(XML.wrapE('tr', (colh ? '<th class="bdr bdt' +
				(/TBr?c/.test(bd) || (new RegExp('I(\\d+_)*' + (i + 1), '')).test(bd) ? ' bdl bdb' : '') +

				'">' + (colh[i] == undefined ? '' : colh[i]) + '</th>' : '') + ri.join('')))
		}
		return /scroll/.test(bd) ? DCtv('scroll', a + r.join('') + b) : a + r.join('') + b
	},
	mtrx = function (v, lr, lcr, spacing, parts) {/* 参数 lr, lcr，
		在latex下 用于设置括号类型：
matrix命令下	p() b[] B{} v|| V‖‖ 
array命令下		()	[]	\{\}	||	\|
		在html下 用于控制左右对齐
		
	parts 参数，控制分块
		参考Table的部分TB命令 + 列虚、实线':|' + 行虚、实线'._'
								无行分块时，列线默认都用虚线
								无列分块时，行线默认都用实线
								行列都有分块，行列线默认都是虚线
		rc 全部行列
		r全部行
		c全部列
		r3c2	均分
		I2_5J3_7	指定行列 (编号从1开始)
		[C]D3_4_2	[副]主对角阵	(仅方阵)
	
	*/
		var al = arguments.length, r = v.length, c = (v[0] instanceof Array ? v[0] : '1').length, I = [], J = [], A;
		if (parts) {

			A = Arrf(function (t) { return t instanceof Array ? t.join(' & ') : t }, v);
			if (/I/.test(parts)) {
				I = Arrf(Number, parts.match(/I\d+(_\d+)*/g)[0].substr(1).split('_'));
			}
			if (/J/.test(parts)) {
				J = Arrf(Number, parts.match(/J\d+(_\d+)*/g)[0].substr(1).split('_'));
			}
			if (/r/.test(parts)) {
				if (/r\d/.test(parts)) {
					var t = +parts.match(/r\d+/g)[0].substr(1);
					I = I.concat(seqA(r / t, t - 1, '', r / t))
				} else {
					I = seqA(1, r)
				}
			}
			if (/c/.test(parts)) {
				if (/c\d/.test(parts)) {
					var t = +parts.match(/c\d+/g)[0].substr(1);
					J = J.concat(seqA(c / t, t, '', c / t))
				} else {
					J = seqA(1, c)
				}
			}
			if (/[CD]/.test(parts)) {// bug 0 1 0 0 0 0 1 0 0 0 0 1 a b c d&CD3_1
				var D = antidiff(Arrf(Number, parts.match(/[CD]+\d+(_\d+)*/g)[0].replace(/[CD]/g, '').split('_'))), D2 = [].concat(D);
				Arrf(function (t) { uniPush(D, t, 1) }, I);
				Arrf(function (t) { uniPush(D2, t, 1) }, J);
				I = D;
				if (/C/.test(parts)) {
					var s = D.slice(-1)[0];
					
					J = Arrf(function (x) { return s - x }, D2).reverse();
					J = J.slice(1).concat(s);
				} else {
					J = D2;
				}
				
			}
			var ls = parts.split(' '), hline = ls[2] || (J.length ? '.' : '_'), vline = ls[1] || (I.length < 1 || I.length * J.length ? ':' : '|');


			if (J.length) {
				//	console.log('J=',J);
				if (J.slice(-1)[0] != c) {
					J.push(c);
				}
				J = Arrf(function (t) { return 'c'.repeat(t) }, diff(J));
				J = concat(J.slice(0, J.length - 1), vline).join('') + J.slice(-1)[0];
			} else {
				J = 'c'.repeat(c);
			}

			if (I.slice(-1)[0] == r) {
				I.pop();
			}


			//	Arrf(function(t){A[t]='\\hline '+A[t]},I);

			Arrf(function (t, i) { A[t] = '\\h' + ((hline[i] || hline[0]) == '.' ? 'dash' : '') + 'line ' + A[t] }, I);
			//	console.log(J);
			return (spacing?'\\def\\arraystretch{'+spacing+'}':'')+'\\left' + (lr || '[') + ' \\begin{array}{' + J + '}' +
				A.join(' \\\\ ') +
				' \\end{array}' + ' \\right' + (lcr || ']')

		}

		return al > 3 ? (spacing?'\\def\\arraystretch{'+spacing+'}':'')+'\\begin{' + (lr == '.' ? '' : (lr || 'b')) + 'matrix}' + Arrf(function (x) { return x instanceof Array ? x.join(' & ') : x }, v).join(' \\\\ ') + ' \\end{' + (lcr == '.' ? '' : (lcr || 'b')) +
			'matrix}' : SCtv('mtrx' + (lr || '') + ' inblk align' + (lcr || lr || 'c'), v instanceof Array ? Table('', v) : v)
	},
	zmtrx = function (A, spacing, parts,lr,lcr) { return mtrx(A, lr||'', lcr||'', spacing, parts) },
	kmtrx = function (A, fracOff, parts,lr,lcr) { var t = mtrx((Mfn ? Arrf(function (a) { return isArr(a) ? Arrf(function (x) { return Mfn.fromStr(x).toStr(1) }, a) : Mfn.fromStr(a).toStr(1) }, A) : A), lr||'', lcr||'', /frac/.test(A) || !fracOff && /\//.test(A) ? 1.5 : '', parts); return fracOff ? t : kfrac(t, 1, 't') },

	zstrx = function (t, p) { return Arrf(function (x) { return ZLR(x, '', p == undefined ? ' ' : '') }, t.split(';')) },
	zarray = function (A, spacing, parts) { return mtrx(A, '.', '.', spacing, parts) },
	tableT = function (A) {/* Transpose	转置 */
		var B = [], m = A.length, n = A[0].length;
		for (var j = 0; j < n; j++) {
			B.push([]);
			for (var i = 0; i < m; i++) {
				B[j].push(A[i][j])
			}
		}
		return B
	},
	tableL = function (A, row, col) {/* 一维数组Line	转成二维表格（指定列数或行数） 分组 */
		var B = [], l = A.length, n = col || Math.ceil(l / row), m = row || Math.ceil(l / col), c = 0;

		for (var i = 0; i < m; i++) {
			if (c == l) { break }
			var a = [];
			for (var j = 0; j < n; j++) {
				if (c == l) { break }
				a.push(A[c]);
				c++;
			}
			B.push(a);
		}
		return B
	},
	ztable = function (A, nobox, spacing) { var t = mtrx(A, '.', '.', spacing || '', 'rc  _'); return nobox ? t : boxed(t) },
	det = function (A, spacing, tiny) { var al = arguments.length; return al >= 2 ? (spacing?'\\def\\arraystretch{'+spacing+'}':'')+'\\begin{vmatrix}' + Arrf(function (x) { return kfrac(x.join(' & '), 1, tiny || '') }, A).join(' \\\\ ')
		.replace(/⋰/g,'\\iddots') + '\\end{vmatrix}' : SCtv('bdl bdr inblk alignc', Table('', A)) },
	zdet = function (A, spacing) { return det(Arrf(ZLR, A), spacing) },
	kdet = function (A, fracOff) { return det(A, /frac/.test(A) || !fracOff && /\//.test(A) ? 1.5 : '', fracOff ? '' : 't') },

	lp = function (l, v, zM) { var t = arguments.length == 1, t3 = arguments.length >= 3; return zM ? '\\left' + (l || '\\{') + v + '\\right.' : (!t && !l ? '' : SCtv('inblk xxlarge', t ? '{' : l)) + SCtv('inblk alignl', t ? l : v) },
	rp = function (v, r, zM) { return arguments.length == 3 ? '\\left.' + v + '\\right' + (r || '\\{') : SCtv('inblk alignr', v) + (r === '' ? '' : SCtv('inblk xxlarge', r || '}')) },
	lrp = function (l, v, r, zM) { var t = arguments.length == 1, t4 = arguments.length >= 4; return t4 ? (l || '\\' + (zM || 'bigg') + 'l(') + v + (r || '\\' + (zM || 'bigg') + 'r)') : SCtv('inblk xxlarge', t ? '(' : l) + sci(t ? l : v) + SCtv('inblk xxlarge', t ? ')' : r) },
	lrpfrac = function (a, b, l, r) { return lrp(l || '', frac(a, b, 'd'), r || '', '') }, genfrac = function (a, b, l, r, size, linethick) { return '\\genfrac' + (l || '(') + (r || ')') + '{' + (linethick === undefined ? '' : linethick + 'pt') + '}{' + (size || 0) + '}{' + a + '}{' + b + '}' },
	zp = function (v, c, l, r) {
		if (v === '') { return '' } var A = ['(', ')', '[', ']', '|', '/', '\\{', '\\}', '\\|', '\\langle', '\\rangle', '\\backslash', '\\lfloor', '\\rfloor', '\\lceil', '\\rceil', '\\uparrow', '\\updownarrow', '\\downarrow', '\\Uparrow', '\\Updownarrow', '\\Downarrow'],
			t = '()[]|/{}‖<>\\⌊⌋⌈⌉↑↕↓⇑⇕⇓';
		return lrp('\\left' + (c ? (A[t.indexOf(c[0])] || c[0]) : (l || '(')) + ' ', v, '\\right' + (c ? (A[t.indexOf(c[1] || c[0])] || c[0]) : (r || ')')) + ' ', '')
	},
	pp = function (v, c, l, r) { if (v === '') { return '' } return (c ? c[0] : (l || '(')) + v + (c ? c[1] : (r || ')')) },
	big = function (size, lr, lmr) {return '\\'+(['big','Big','bigg','Bigg'][size||0]+(lmr||''))+'()[]{}'[lr||0].replace(/[\{\}]/g,'\\$&') },
	frac = function (t, b, zM) { var nob = b == undefined, t3 = arguments.length >= 3; return t3 ? '\\' + (/^[td]$/.test(zM) ? zM : '') + 'frac{' + (zM == 't' ? '' : '\\displaystyle{}') + (zM == 'p' ? '∂' : '') + t + '}{' + (zM == 't' ? '' : '\\displaystyle{}') + (zM == 'p' ? '∂' : '') + b + '}' : SCtv('inblk alignc', SCtv('alignc', nob ? t[0] : t) + DCtv('fracline') + SCtv('alignc', nob ? t[1] : b)) },

	root = function (t, n, s, zM) {
		return arguments.length >= 4 ? '\\sqrt' + (n && +n != 2 ? '[' + n + ']' : '') + '{' + t + '}' : SCtv('rootleft inblk notm" data-size="' + (s || 1), DCtv('rootleftline" data-index="' +
			(n && !/^[234]$/.test(n) ? n : '')) +
			SCtv('symbol', /^[34]$/.test(n) ? '∛∜'[+n - 3] : '√')) + sci(DCtv('fracline') + t)
	},

	piece = function (A, r) { return arguments.length >= 2 ? mtrx(A, ['\\{', '.', '\\{'][+r], (+r ? '\\}' : '.'), '', ' ') : '\\begin{cases} ' + (A[0] instanceof Array ? Arrf(function (a) { return a[0] + (a[1] ? ' & ' + a[1] : '') }, A) : A).join(' \\\\ ') + ' \\end{cases}' },



	sceg = function (s, substr, hiddenpre, hiddensuf) { var v = '' + s; return SCtv('eg" tip=copy2input data-eg="' + (hiddenpre || '') + fnq('' + s)+ (hiddensuf || '') , XML.encode(typeof substr == 'number' ? (substr < 0 ? v.substr(substr) : v.substr(0, substr)) : v)) },
	sceg2 = function (s, substr, hiddenpre, hiddensuf) { var v = '' + s; return SCtv('eg eg2" tip=copy2input data-eg="' + (hiddenpre || '') + fnq('' + s)+ (hiddensuf || ''), XML.encode(typeof substr == 'number' ? (substr < 0 ? v.substr(substr) : v.substr(0, substr)) : v)) },
	scegj = function (s, substr, c) { var v = '' + s; return SCtv('eg js' + (c ? ' ' + c : '') + '" tip=copy2input data-eg="' + fnq('' + s), XML.encode(typeof substr == 'number' ? (substr < 0 ? v.substr(substr) : v.substr(0, substr)) : v)) },
	scegc = function (s, substr, c) { var v = '' + s; return SCtv('eg' + (c ? ' ' + c : '') + '" tip=copy2input data-eg="&lt;' + fnq('' + s) + ' /&gt;&&', XML.encode(typeof substr == 'number' ? (substr < 0 ? v.substr(substr) : v.substr(0, substr)) : v)) },
	scegn = function (s, substr, c) { var v = '' + s; return SCtv('eg node' + (c ? ' ' + c : '') + '" tip=copy2input data-eg="'+s, XML.encode(typeof substr == 'number' ? (substr < 0 ? v.substr(substr) : v.substr(0, substr)) : v)) },
	
	zMath = function (v) { return SCtv('zMath" title="' + v, v) };



var FNS = {
	'share': 'addthis Share.ico'
}, Random = function (n, digits) {//从1～n中随机选1个数字		指定digits，则随机给出一个n位10进制数（文本形式）
	if (digits) {
		var s = '' + Math.round(Math.random() * (10 - 1) + 1);
		for (var i = 1; i < n; i++) {
			s += Math.round(Math.random() * (10 - 1))
		}
		return s
	}
	return Math.round(Math.random() * (n - 1) + 1)
}, RandomColor = function (i) {
	var c = '#' + ('00000' + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).substr(-6);
	if (i > 1) {
		return [c].concat(RandomColor(i - 1))
	} else {
		return c
	}

}, jSoff = JSON.stringify;

function zlr(pre, s, sep) { var t = (sep === undefined ? ' ' : sep) + pre; return pre + s.split(' ').join(t) }
function zlr2(s, suf, sep) { var t = suf + (sep === undefined ? ' ' : sep); return s.split(' ').join(t) + suf }
function zlr3(pre, s, suf, sep) { return zlr(pre, zlr2(s, suf), sep) }
function zlrA(pre, A) { return Arrf(function (t) { return pre + t }, A) }
function zlrA2(A, suf) { return Arrf(function (t) { return t + suf }, A) }
function zlrA3(pre, A, suf) { return Arrf(function (t) { return pre + t + suf }, A) }


function ZLR(s0, s1, s) {
	var al = arguments.length;
	if (al == 1) { return s0.split(' ') }
	if (typeof (s1) == 'number') {

		try {
			return Array(s1 + 1).join(s0);
		} catch (e) {
			console.log(s1, e)
		}
	} else {
		return zlr(s0, s1).split(al < 3 ? ' ' : s);
	}
}
function copyA(s, n) {
	//return ZLR(s+'\n',n).trim().split('\n')
	var a = [];
	for (var i = 0; i < n; i++) {
		a.push(s);
	}
	return a;
}

function ZLR3(preA, sA, sufA, sep) {//拼接字符串 ⋯后面的指数忽略
	var n = sA.length, s = '', PA = preA instanceof Array, SA = sufA instanceof Array, sp = sep === undefined ? ',' : sep;

	for (var i = 0; i < n; i++) {
		s += (sA[i] === '⋯' ? '⋯' : (PA ? preA[i] : preA) + sA[i] + (SA ? sufA[i] : sufA)) + sp;
	}
	return s.substr(0, s.length - sp.length)
}

function imgFav(t) { return 'chrome://favicon/size/16@1x/' + (t.indexOf(Hs) == 0 ? Hs : H) + H_W1(t) }

function altTxt(t) { return (t || '').replace(/[\s\r?\n]+/g, ' ').replace(/\\/g, '').trim() }
function pathTxt(t, single) {
	return (t || '').replace(/\\/g, '/').replace(/(\s*\/+\s*)/g, '/').trim()
		.replace(/^\/+|\/+$/g, '').replace(/["\\:\?\*<>\|]/g, '-').replace(/\//g, single ? '_' : '/').replace(/~/g, '_')
}
function replaceNodeInner(str,node,f,ignoreCase){
	return str.replace(new RegExp('<'+node+'>([\\s\\S](?!<\\/'+node+'>))+[\\s\\S]?<\\/'+node+'>','g'+(ignoreCase?'i':'')),
		function(t){var nl=node.length;return f(t.substr(nl+2,t.length-nl*2-5).trim())}
	);
}

function CntN(t, i) {
	var arr = (t || '').replace(/[\s\(\)]/g, '').split('-'), tArr = Array(4), t;

	if (arr.length < 2) { tArr[2] = 1; tArr[3] = 1 } else {
		t = arr[1].split('/');
		tArr[2] = t[0];
		if (t.length < 2) { tArr[3] = t[0] }
	}
	t = arr[0].split('/');
	tArr[0] = t[0];
	if (t.length < 2) { tArr[1] = t[0] }

	return Number(tArr[i || 0]);
}
function Cnt(n, n2, m, m2) {
	var arg = arguments.length, t1 = n, t2 = '';

	if (arg >= 2) {
		t1 = n + (n == n2 ? '' : '/' + n2);
		if (arg > 2) {
			t2 = m + (m == m2 ? '' : '/' + m2);
			t2 = t2 == '1' ? '' : '-' + t2;
		}
	}
	return ' (' + t1 + t2 + ')'
}


function spanRed(t) { return SC + 'red>' + t + sc }
function spanHotk(t) { return SC + 'hotk>' + t + sc }

function q_key(s, a, ins, noAppend, hotk) {
	var tR = RegExp(a), tr = RegExp(a, 'i'), inS = ins ? '<ins>$&</ins>' : '&$&', t;
	t = tR.test(s) ? s.replace(tR, inS) : ((tr.test(s) || noAppend) ? s : s + '(' + a + ')').replace(tr, inS);
	return hotk ? t.replace(/\(.+\)/, spanHotk(a)) : t;
}



function scrollH() { return Math.max(document.body ? document.body.scrollHeight : 1, document.documentElement.scrollHeight) }
//document.body.scrollHeight = $('body').height() = document.body.clientHeight > document.documentElement.scrollHeight

function scrollW() { return Math.max(document.body ? document.body.scrollWidth : 1, document.documentElement.scrollWidth) }
//return $('body').width() || document.documentElement.scrollWidth
//console.log(document.body.scrollWidth , $('body').width() , document.body.clientWidth ,document.documentElement.scrollWidth)


function Scroll(t) {
	if (/scroll[TB]$/.test(t)) { document.documentElement.scrollTop = (t == 'scrollT' ? 0 : scrollH()) }
	if (/scroll[LR]$/.test(t)) { document.documentElement.scrollLeft = (t == 'scrollL' ? 0 : scrollW()) }

	if (/scroll(Up|Down)/.test(t)) { document.documentElement.scrollTop = (document.documentElement.scrollTop + $(window).height() * (t == 'scrollDown' ? 1 : -1)) }

	//window.innerHeight > document.documentElement.clientHeight = $(window).height()
	if (/scroll(Left|Right)/.test(t)) { document.documentElement.scrollLeft = (document.documentElement.scrollLeft + $(window).width() * (t == 'scrollRight' ? 1 : -1)) }
	//console.log(window.innerWidth ,'>', document.documentElement.clientWidth ,'=',$(window).width())


	if (t == 'scrollY') { document.documentElement.scrollTop = window.scrollY }
	if (t == 'scrollX') { document.documentElement.scrollLeft = window.scrollX }
}

function titleRe(t) { document.title = t }

function Node(node) {
	var t = $(node);
	$('iframe').each(function () {
		try {
			//if(this.contentDocument){
			t = t.add($(this.contentDocument.body).find(node));
			//console.log(node, t.length, this.src);
			//}
		} catch (e) {
			return t
			console.log('iframe err', e);
		}

	});
	return t;
}
function uniPush(A, x, ord) {//ord指定按序插入：0不考虑原数组是否升序降序 1：已知A升序 -1：已知A降序
	if (A.indexOf(x) < 0) {
		if (ord) {
			var j = 0;
			if (ord == 1) {
				for (var i = A.length - 1; i--; i > -1) {
					if (A[i] < x) {
						A.splice(i, 0, x);
						return x
					}
				}
				A.unshift(x)
			} else {
				for (var i = A.length - 1; i--; i > -1) {
					if (A[i] > x) {
						A.splice(i, 0, x);
						return x
					}
				}
				A.unshift(x)
			}

		} else {
			A.push(x)
		}
	}
}
function attr2dataset(t) {
	return t.replace(/data-(.+)/, 'dataset.$1').replace(/-[^-]+/g, function (a) { return a.substr(1, 1).toUpperCase() + a.substr(2) })
}
function urlArr(jQExp, attr, attr2) {
	var jQ = jQExp || 'a[href]:has(img)', t = [], a, s;
	Node(jQ).each(function () {
		if (attr) {
			if (attr == 'style') {
				s = $(this).attr(attr) || '';
			} else {
				s = eval('this.' + attr2dataset(attr)) || ''
			}
		} else {
			s = this.href
		}
		if (attr2) {
			if (attr2 == 'style') {
				a = $(this).attr(attr2) || '';
			} else {
				a = (eval('this.' + attr2dataset(attr2)) || '').trim()
			}
			a += '\t';
		} else {
			a = ''
		}
		if (s && s.indexOf('javascript:') < 0 && t.indexOf(a + s) < 0) { t.push(a + s) }
	});
	return t;
}
function tableArr(jQExp, type) {//type=str/arr/csv
	var jQ = jQExp || 'table', typ = type || 'str', isCSV = typ == 'CSV', isA = typ == 'arr', t = [];

	Node(jQ).children().each(function () {
		$(this).children().each(function () {
			var s = [];
			$(this).children().each(function () {
				var td = $(this).text().trim();
				if (isCSV) {
					if (/"/.test(td)) {
						td = td.replace(/"/g, "'");
					}
					if (/,/.test(td)) {
						td = '"' + td + '"';
					}
				}
				s.push(td);
			})
			t.push(isA ? s : s.join(isCSV ? ',' : '\t'))
		})
	});
	if (typ != 'arr') {
		t = t.join('\n')
	}
	return t;
}

function isArr(obj, dim) { return obj instanceof Array && (dim ? obj[0] instanceof Array : 1) } //Object.prototype.toString.call(obj) === '[object Array]'} //x instanceof Array
function isStr(o) { return typeof o == 'string' }
function isObj(o) { return typeof o == 'object' }
function isVar(o) { return /^[a-zα-ω]$/i.test(o) }

function hasVar(o) {
	if (isArr(o)) {
		for (var i = 0; i < o.length; i++) {
			if (hasVar(o[i])) {
				return true
			}
		}
		return false
	}
	return /[a-zα-ω]/i.test(o)
}


function fn0(k) { return encodeURIComponent(k) }
function fn1(k) { return decodeURIComponent(k) }
function fna(k) { return k.replace(/ /g, '+') }
function fna0(k) { return fn0(k).replace(/%20/g, '+') }
function fnb(k) { return k }
function fnc(k) { return escape(k) }
function fnd(k) { return k.replace(/ /g, '_') }
function fne(k) { return escape(k.replace(/ /g, '-')) }
function fnt(k) { return escape(H_d(k)) }
function fnx(k) { return k.replace(/^<!\[CDATA\[|\]{2}>$/g, '') }
function fnr(k) { return k.replace(/\\/g, '\\\\') }
function fnq(k) { return k.replace(/"/g, '&#34;') }
function fnv0(k) { return k.replace(/^\$|\$$/g, '') }
function fnv(k) { return k.replace(/\$[^\$]+\$/g, function (t) { return eval(fnv0(t)) }) }


function fns(webid, url, title, smry, pic) {
	var arr = (FNS[webid] || '').split(' '), p = pic ? '&pic=' + pic : '', str, k, web = webid;
	if (webid == 'share') { web = '' }
	str = 'addthis.com/bookmark.php?pubid=ra-4eeb29d528c674a8&description';

	return H + 'www.' + str + '=' + fn0(smry) + web + '&url=' + url + '&title=' + fn0(title);
}


function dataURItoBlob(dataURI) {
	var byteStr = atob(dataURI.split(',')[1]);
	var array = [];
	for (var i = 0; i < byteStr.length; i++) {
		array.push(byteStr.charCodeAt(i));
	}
	return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
}

function H_u(t) { return (t || '').replace(/[\?&]utm_.+=.*&utm_.+=.*&utm_.+=[^#]*/, '') }
function H_w(t) { return (t || '').replace(/^https*:[/]{2}/, '') }
function H_w1(t) { return (t || '').replace(/^http:[/]{2}/, '') }
function H_W(t) { return H_w(t).replace(/[/\?].*$/, '') }
function H_W1(t) { return H_W(t).replace(/.+\.(.*\.co.*)/, '$1') }
function H_d(t) { return H_W(t).replace(/^www\./, '') }
function H_h(F, H) { var f = H_W(F), h = H_w(H); if (h == f || h == f + '/') { h = '' } return h }

function H_a(u, base) {

	var b = base || (location.origin+location.pathname);
	if(/\?.+\//.test(b)){
		b=b.replace(/\?.+/,'')
	}

	if (b.indexOf('/', 8) > 0) {
		var b0 = b.substr(0, b.indexOf('/', 8)) + '/';
		var b1 = b.substr(0, b.lastIndexOf('/')) + '/';
	} else {
		var b0 = b + '/';
		var b1 = b + '/';
	}

	if (/chrome-extension:\/\/[^\/]+\./.test(u || '')) {
		return u.replace('chrome-extension', 'http');
	}
	var t = (u || '').replace(/chrome-extension:\/\/[^\/]+/, '').replace(/\n/g, '').trim();
	if (!t) { return "" }

	if (/^file/.test(b) && /^\/[A-Z]:\//i.test(u)) {
		return 'file://' + u
	}

	imgPreReData.lastIndex = 0;
	if (imgPreReData.test(t) || /^(blob|chrome|file):[/]{2}/.test(t)) { return t.replace(/\s/g, '') }
	if (/^\?/.test(t)) { return b.replace(/\?.+/, t) }

	var src = t.replace(/[/\\]{2,}/g, '//');
	imgPreRe.lastIndex = 0;
	if (!src.match(imgPreRe)) {
		if (t.substr(0, 2) == '//') {
			src = b.split('//')[0] + t;
		} else if (t.charAt(0) == '/') {
			src = b0 + t.substr(1);
		} else if (t.match(/\.\.[/].+/)) {
			var i = t.lastIndexOf('../') + 3;
			var j = t.slice(0, i).split('../').length * (-1);
			if (b1 == b0) {
				var tmpAry = (b1 + '/').split('/');
			} else {
				var tmpAry = b1.split('/');
			}
			src = tmpAry.slice(0, j).join('/') + '/' + t.substr(i);

		} else {
			src = b1 + t.replace('./', '');
		}
	}

	return src;
}

function H_o(u,o) {

	var url = u || window.location.href, ha=location.hash;
	var search = url.substring(url.lastIndexOf('?') + 1);
	var obj = {};
	var reg = /([^?&=]+)=([^?&=]*)/g;
	search.replace(reg, function (rs, $1, $2) {
		var name = fn1($1);
		var val = '' + fn1($2);
		obj[name] = val;
		return rs;
	});
	if(o){
		var s='';
		$.each(o,function(k,v){
			obj[k]=v;
		})
		$.each(obj,function(k,v){
			s+='&'+k+'='+v
		})
		return url.replace(/[#\?].+/,'')+s.replace(/^&/,'?')
	}
	return obj;
}

function html2txt(h) { return $('<b>' + h + '</b>').text().trim() }
function html2html(h) { return $('<div>' + h + dc).html().trim() }
function csv2A(t){
	var X=t.replace(/("")+/g,function(x){return 'zZlLrR'.repeat(x.length/2)});
	while(/"/.test(X)){
		if(/^[^"]*,"[^"]*"[^,]/.test(X) || /^"[^"]*"[^,]/.test(X)){
			X=X.replace(/"([^"]*)"/,'$1')
		}else if(/^[^"]*","/.test(X)){
			X=X.replace(/","/,'ZzLlRr')
		}else{
			X.X.replace(/"/,'zZlLrR')
		}
	}
	X=X.replace(/zZlLrR/g,'"');

	return Arrf(function(x){return x.replace(/ZzLlRr/g,',')},X.split(','))
}

function saveText(t, filename) {
	var mime = 'text/plain';
	saveAs('data:' + mime + ';charset=utf-8;base64,' + Base64.encode(t), filename)
}
function saveAs(Url, filename, referer) {
	var blob = new Blob([''], { type: 'application/octet-stream' }), u = URL || webkitURL;
	var url = u.createObjectURL(blob);
	var a = document.createElementNS(xhtml, 'a');
	if (referer) {
		console.log(referer);
		a.Referer = referer
	}
	a.href = Url;
	a.download = filename;
	var e = document.createEvent('MouseEvents');
	e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	a.dispatchEvent(e);
	u.revokeObjectURL(url);
}
function svgAs(svg, base64) {
	var t = $(svg).attr('xmlns', xmlns).attr('xmlns:xlink', xmlnsxlink), xml = (new XMLSerializer).serializeToString(t[0]);
	return (base64 ? "data:image/svg+xml;base64," + Base64.encode(xml) : xml);
}

var svgf = {
	marker:function(id,rx,ry,w,h,vBox,chd){
		return '<marker id='+id+' refX='+(rx||8)+' refY='+(ry||5)+' markerWidth='+(w||4)+' markerHeight='+(h||4)+' viewBox="'+(vBox||'0 0 10 10')+'">'+chd+'</marker>'
	},
	path: function (d, strk,fil) {
		if(isArr(d)){
			return Arrf(function(x){return svgf.path(x, strk, fil)},d)
		}
		return '<path d="' + d + '" stroke="'+(strk||'white')+'" fill="'+(fil||'none')+'"></path>'
	}, 
	polygon: function (d, strk,fil) {
		if(isArr(d)){
			return Arrf(function(x){return svgf.polygon(x, strk, fil)},d)
		}
		return '<polygon points="' + d + '" stroke="'+(strk||'white')+'" fill="'+(fil||'none')+'"></polygon>'
	}, 
	text: function (text, yxSize, strk, fil) {
		if(isArr(text,2)){
			return Arrf(function(x){return svgf.text.apply(null, x)},text)
		}
		return '<text y="' + (yxSize ? yxSize[0] : 22) + '" x="' + (yxSize ? yxSize[1] : 6) + '" font-size="' + (yxSize ? yxSize[2] : 16) + '"'+(strk?' stroke="'+(strk||'white')+'"':'')+' fill="'+(fil||'white')+'">' + text + '</text>'
	}, 
	rect: function (x, y, w, h, strk,fil) {
		if(isArr(x,2)){
			return Arrf(function(i){return svgf.rect.apply(null, i)},x)
		}
		return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (h || w) + '" stroke="'+(strk||'white')+'" fill="'+(fil||'none')+'"></rect>'
	}, 
	circle: function (cx, cy, r, strk,fil) {
		if(isArr(cx,2)){
			return Arrf(function(x){return svgf.circle.apply(null, x)},cx)
		}
		return '<circle r="' + (r||1) + '" cx="' + cx + '" cy="' + cy + '" stroke="'+(strk||'white')+'" fill="'+(fil||'none')+'"></circle>'
	}, 
	line: function (x1, y1, x2, y2, strk, fil) {
		if(isArr(x1,2)){
			return Arrf(function(x){return svgf.line.apply(null, x)},x1)
		}
		return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="'+(strk||'white')+'" fill="'+(fil||'none')+'"></line>'
	}, 
	ellipse: function (cx, cy, rx, ry, strk, fil) {
		if(isArr(cx,2)){
			return Arrf(function(x){return svgf.ellipse.apply(null, x)},cx)
		}
		return '<ellipse rx="' + rx+ '" ry="' + ry + '" cx="' + cx + '" cy="' + cy + '" stroke="'+(strk||'white')+'" fill="'+(fil||'none')+'"></ellipse>'
	}, 
	id: function (id,v,noVieWBox,w, strk, fil) {
		if(isArr(id,2)){
			return Arrf(function(x){return svgf.id.apply(null, x)},id)
		}else if(isArr(id)){
			return Arrf(function(x){return svgf.id(x,v,noVieWBox,w)},id)
		}
		return '<svg id="' + id+ '"' + (noVieWBox?'':' viewBox="0 0 30 30"') + ' stroke="'+(strk||'white')+'" fill="'+(fil||'none')+'" stroke-width="'+(w||2)+'">'+(v||'')+'</svg>'
	},
	ani: function(id, attr,from,to,dur,cnt){
		return '<animate xlink:href="#'+id+'" attributeName="'+(attr||'stroke-dashoffset')
			+'" from="'+(from===undefined?3000:from)+'" to="'+(to===undefined?0:to)
			+'" dur="'+(dur||10)+'s" repeatCount="'+(cnt||'indefinite')+'" />'
	},
	obj2js: function (obj, path, haschd) {
		var o=$(obj), os={
			marker:function(){
				var id=o.attr('id'), rx=o.attr('refX'), ry=o.attr('refY'), w=o.attr('markerWidth'), h=o.attr('markerHeight'), vBox=o.attr('viewBox'),
					chd=haschd?"'"+o.html().replace(/'/g,"\\'")+"'":'markerplaceholder';
				return `svgf.marker('${id}',${rx},${ry},${w},${h},'${vBox}',${chd})`

			},
			path: function () {
				var d=o.attr('d'), strk=o.attr('stroke'),fil=o.attr('fil'), tf=o.attr('transform');
				return `svgf.path('${d}','${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`

			}, 
			polygon: function () {
				var d=o.attr('points'), strk=o.attr('stroke'),fil=o.attr('fil'), tf=o.attr('transform');
				if(path){
					return `svgf.path('${Arrf(function(x,i){i?(i==2?'L'+x:x):'M'+x},d.split(/[ ,]+/)).join(' ')+'z'}','${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`
				}
				return `svgf.polygon('${d}','${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`

			}, 
			text: function () {
				var text=o.text(), yxSize=[o.attr('y'),o.attr('x'),o.attr('font-size')], strk=o.attr('stroke'),fil=o.attr('fil'), tf=o.attr('transform');
				return `svgf.text('${text.replace(/'/g,"\\'")}',[${yxSize}],'${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`

			}, 
			rect: function () {
				var x=+o.attr('x'), y=+o.attr('y'),w=+o.attr('width'),h=+o.attr('height'), strk=o.attr('stroke'),fil=o.attr('fil'), tf=o.attr('transform');
				if(path){
					return `svgf.path('M${x} ${y} H${x+w} V${y+h} H${x} V${y}','${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`
				}
				return `svgf.rect(${x},${y},${w},${h},'${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`

			}, 
			circle: function () {
				var cx=+o.attr('cx'), cy=+o.attr('cy'),r=+o.attr('r'), strk=o.attr('stroke'),fil=o.attr('fil'), tf=o.attr('transform');
				if(path){
					return `svgf.path('M${cx} ${cy-r} A${r} ${r} 0 1 1 ${cx} ${cy+r}  ${r} ${r} 0 1 1 ${cx} ${cy-r}','${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`
				}
				return `svgf.circle(${cx},${cy},${r},'${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`

			}, 
			line: function () {
				var x1=o.attr('x1'), y1=o.attr('y1'),x2=o.attr('x2'),y2=o.attr('y2'), strk=o.attr('stroke'),fil=o.attr('fil'), tf=o.attr('transform');
				if(path){
					return `svgf.path('M${x1} ${y1} L${x2} ${y2}','${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`
				}
				return `svgf.line(${x1},${y1},${x2},${y2},'${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`

			}, 
			ellipse: function () {
				var cx=+o.attr('cx'), cy=+o.attr('cy'),rx=+o.attr('rx'),ry=+o.attr('ry'), strk=o.attr('stroke'),fil=o.attr('fil'), tf=o.attr('transform');
				if(path){
					return `svgf.path('M${cx} ${cy-ry} A${rx} ${ry} 0 1 1 ${cx} ${cy+ry}  ${rx} ${ry} 0 1 1 ${cx} ${cy-ry}','${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`
				}
				return `svgf.ellipse(${cx},${cy},${rx},${ry},'${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`
			}, 
			svg: function () {
				var id=o.attr('id'), wd=o.attr('width')||o.width(), ht=o.attr('height')||o.height(), w=o.attr('stroke-width')||'', vBox=o.attr('viewBox'), 
					v=haschd?"'"+o.html().replace(/'/g,"\\'")+"'":'childplaceholder', strk=o.attr('stroke')||'',fil=o.attr('fil'), tf=o.attr('transform');
				return `svgf.id('${id+(wd||ht?'" width="'+wd+'" height="'+ht+'"':'')}',${v},'${vBox||1}','${w}','${strk+(tf?'" transform="'+tf:'')+(fil?",'"+fil+"'":'')}')`.replace(/,'','',''\)$/,')')

			},
			g: function () {
				/*
				var A=[];o.children().each(function(){A.push(os[this.tagName.toLowerCase()]())});
				return A.join('+')
				*/
				return "'"+o.html()+"'"
			}
		};
		
		//console.log(o[0].tagName.toLowerCase(), os[o[0].tagName.toLowerCase()]);
		return os[o[0].tagName.toLowerCase()]()
	},

}, svgs = {
	imgr: svgf.path('M11 5 H19 V15 H25 L15 25 5 15 H11 V5z')
	, home: svgf.path('M7 25 H23 V13 L15 5 7 13 V25 M12 25 V18 H18 V25z')
	, func: svgf.text('Fn')
	, code: svgf.text('JS', [22, 8, 16])
	, sech: svgf.circle(10, 10, 6) + svgf.line(14, 14, 24, 24)
	, weib: svgf.path('M22 18 L23 25 17 20 A10 8 0 1 1 22 18z')
	, wdgt: svgf.path('M5 15 Q10 5 15 15 T 25 15 M5 15 Q10 25 15 15 T 25 15')
	, dona: svgf.path('M15 8 C15 7 14 5 10 5 C4 5 4 10 4 10 C4 16 8 20 15 24 C22 20 26 16 26 12 C26 12 26 5 20 5 C17 5 15 7 15 8z')
	, qrcd: svgf.rect(8, 8, 5) + svgf.rect(18, 8, 5) + svgf.rect(8, 18, 5)
	, memo: svgf.circle(15, 16, 8) + svgf.path('M10 14 L14 20 20 10 M10 5 A6 6 0 0 0 5 10Z M20 5 A6 6 0 0 1 25 10Z')
	, text: svgf.path('M 7 6 H 23 V 16 A 10 10 0 0 1 13 26 H 7 V7 M10 12 H20 M10 17 H17 M10 22 H14')
	, cap: svgf.rect(5, 8, 20, 14)

},
	Time = {
		now: function (TDA) {
			var d = new Date(), t = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '_' + d.toTimeString().substr(0, 8).replace(/:/g, '.');
			if (/Time|Date/.test(TDA)) { t = t.split('_')[TDA == 'Time' ? 1 : 0] }
			return t;
		},
		now5: function (t) { var d = t || new Date(); return (d.getTime() + '').substr(5) },
		YMD: function (t, TDA) {
			var d = t || new Date(), t = [d.getFullYear(), (d.getMonth() + 1), d.getDate()].join('-') + '_' + [('0' + d.getHours()).substr(-2), ('0' + d.getMinutes()).substr(-2)].join(':');
			if (/Time|Date/.test(TDA)) { t = t.split('_')[TDA == 'Time' ? 1 : 0] }
			return t;
		},
		fromZH: function (t) {
			if (/^星期/.test(t)) {
				return Date.parse(t.replace(/星期., /, '').replace(/\S+月/, function (s) {
					return ZLR('Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec')[ZLR('一 二 三 四 五 六 七 八 九 十 十一 十二').indexOf(s.replace('月', ''))]
				}))
			} else {
				return Date.parse(t)
			}
		},
		lastM: function (t) { var d = t || new Date(), m = d.getMonth(), jan = m == 0; return d.getFullYear() + (jan ? -1 : 0) + '-' + (jan ? 12 : d.getMonth()) },
		lastDate: function (fmt, tim, t) {
			var tm = (t || new Date()).getTime(), d0 = new Date(), d1 = new Date(), tO = { "y": 0, "M": 0, "w": 0, "d": 0, "H": 0, "m": 0, "s": 0, "S": 0 }, y = 0, m = 0, d = 0, ys = 0;
			if (/\d/.test(tim)) {
				//tim = \d+[yMwdHmsS]
				tO[tim.substr(-1)] = Number(tim.replace(/[A-z]/g, ''));
				d1.setTime(tm + (tO.w * 7 * 24 + tO.d * 24 + tO.H) * 3600 * 1000 + tO.m * 60 * 1000 + tO.s * 1000 + tO.S);
			}

			if (tO.M) {
				var dm=(d0.getMonth() + tO.M) % 12;
				tO.y += Math.floor((d0.getMonth() + tO.M) / 12);
				d1.setMonth(dm);
				if((d1.getMonth()-d0.getMonth()) % 12 !=tO.M){//修正误差  例如：2019-12-31 -1M, 是2019-11-30 而不是2019-12-1
					if(tO.M<0){
						d1.setMonth((dm+1)% 12,1);
						//console.log(dm, d1);
						d1.setTime(d1.getTime()-oneDay);
					}else{
						d1.setMonth(dm,1);
					}
				}
			}

			if (tO.y) { d1.setFullYear(d0.getFullYear() + tO.y) }

			if (fmt) {
				//format case sensitive! Dd Hh Mm q Ss y

				//yyyy-MM(OOO)-dd HHhh:mm:ss.SSS A/P 上/下午 DDD q

				var MM = d1.getMonth() + 1, HH = d1.getHours(), hh = HH == 12 ? 12 : HH % 12, o = {
					'M+': MM,
					'd+': d1.getDate(),
					'H+': HH,
					'h+': hh,
					'm+': d1.getMinutes(),
					's+': d1.getSeconds(),
					'S+': d1.getMilliseconds()
				}, week = { "0": "日", "1": "一", "2": "二", "3": "三", "4": "四", "5": "五", "6": "六" };


				for (var k in o) {
					var r = new RegExp(k, 'g'), ok = o[k];
					if (r.test(fmt)) {
						fmt = fmt.replace(r, function (t) { return t.length == 1 ? ok : ('00' + ok).substr(-1 * t.length) })
					}
				}

				fmt = fmt.replace(/y+/g, function (t) { return (d1.getFullYear() + '').substr(4 - t.length) });

				return fmt.replace(/A[/]P/g, (HH < 12 ? 'A' : 'P') + 'M').replace(/上[/]下午/g, (HH < 12 ? '上' : '下') + '午')
					.replace(/D{3}/g, (d1 + '').split(' ')[0]).replace(/D/g, week[d1.getDay() + ''])
					.replace(/q/g, Math.ceil(MM / 3)).replace(/O{3}/g, (d1 + '').split(' ')[1]);
			}
			return d1
		},
		week: function (t, deltaDays) {
			var d = new Date();

			d.setTime(Date.parse(t || d) + (deltaDays || 0) * oneDay);

			var y = d.getFullYear(),
				days = Math.floor((d - Date.parse(y + '-1-1')) / oneDay),
				days2018 = Math.floor((d - Date.parse('2018-1-1')) / oneDay),
				A = [(days2018 % 7) + 1, Math.floor(days / 7), (days % 7) + 1];
			if (A[0] < 0) {
				A[0] += 7
			}
			return A.concat([y, d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()])
		},
		reg: function (t) {
			var o = {
				"M": "[个個]?(Month|月)",
				"S": "(milli|ms|毫秒)",
				"s": "[s|秒]",
				"m": "(m|分[钟鐘]?)",
				"H": "[个個]?[h小]",
				"d": "[d天]",
				"w": "[个個]?[w周星禮礼]",
				"y": "[y年]",
			}, n = { "〇": 0, "零": 0, "日": 0, "天": 0, "元": 1, "一": 1, "二": 2, "两": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9 }, M = {
				"Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6, "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
			}, D = {
				"Sun": 0, "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6
			};

			var s = t.replace(/公元/g, '').replace(/(周+|期|拜)[天日一二三四五六七八九]/, function (t) { return t + ' ' }).trim()
				.replace(/一十/g, '十').replace(/廿/g, '二十').replace(/卅/g, '三十')
				.replace(/[二三四五]十[一二三四五六七八九]/g, function (t) { return '' + n[t.substr(0, 1)] + n[t.substr(-1)] })
				.replace(/[二三四五]十/g, function (t) { return '' + n[t.substr(0, 1)] + 0 })
				.replace(/十[一二三四五六七八九]/g, function (t) { return '1' + n[t.substr(-1)] })
				.replace(/十/g, '10').replace(/[〇零元一二三四五六七八九]/g, function (t) { return n[t] })
				.replace(/[13]刻/, function (t) { return 15 * Number(t.substr(0, 1)) + '分钟' });

			if (/[点點时時]/.test(s) && !/小/.test(s)) {
				s = s.replace(/[点點时時分]/g, ':').replace(/半/g, '30').replace(/整/g, '00')
					.replace(/[13]刻/g, function (t) { return 15 * n[t.substr(0, 1)] }).replace(/毫?秒/g, '');
			}

			s = s.replace(/半/g, 0.5);

			var tim = (s.match(/[01]?\d(:[0-5]?\d)+/) || [''])[0];
			if (!tim & /[01]?\d:/.test(s)) { tim = s.match(/[01]?\d:/)[0] + '00' }
			if (tim && /下午|晚|夜|PM/i.test(s)) { tim = tim.replace(/^\d+/, function (t) { return Number(t) < 12 ? Number(t) + 12 : t }) }

			var yr = (s.match(/\d{4}/) || [''])[0], ys, ms, ds;
			if (yr) { s = s.replace(/\d{4}[-年/]?/, '') }
			//console.log(yr);
			var Md = (s.match(/[01]?\d[-月/][0-3]?\d/) || s.match(/\d+(\.\d+){2}/) || [''])[0]
				.replace(/\d+\./, '').split(/\D+/),
				MM = Md[0], dd = Md.length > 1 ? Md[1] : 0, tdy = /[今本当當这這]1?[天日]|(to|this )day/i.test(s);
			//console.log(Md, MM, dd, tdy);
			if (yr && !MM) {
				//.replace(/[月\./]/g,'-').split('-')
				if (/\d{8}/.test(t)) {
					Md = t.match(/\d{8}/)[0].substr(4);
					MM = Md.substr(0, 2); dd = Md.substr(2);
				} else {
					Md = (t.match(/\d{4}[-年/\.][01]?\d[-月/\.][0-3]?\d?/) || [''])[0].replace(/^\d+\D+/, '').split(/\D+/);
					MM = Md[0]; dd = Md.length > 1 ? Md[1] : 0;
				}
			}
			//console.log(Md, MM, dd);
			if (/[前去明后後]年|(last|next) year|yesteryear/i.test(s)) {
				ys = (/大.年/.test(s) ? 3 : (/[前后後]年|year (before|after)/i.test(t) ? 2 : 1)) *
					(/[前去]年|year before|(last |yester)year/i.test(s) ? -1 : (/[明后後]年|year after|next year/i.test(s) ? 1 : 0));
				if (tdy) {
					return Time.lastDate('yyyy-MM-dd ', ys + 'y') + tim;
				}
				yr = Time.lastDate('yyyy', ys + 'y');
			}
			//console.log(ys, yr);
			if (/[上下本当當这這][个個]?月|(last|next|this) month/i.test(s)) {
				ms = (/[上下]{2}.?月|month (before|after)/i.test(s) ? 2 : 1) *
					(/[上]1?[个個]?月|month before|last month/i.test(s) ? -1 : (/[本当當这這]1?[个個]?月/.test(s) ? 0 : 1));
				if (tdy) {
					return Time.lastDate('yyyy-MM-dd ', ms + 'M') + tim;
				}
				MM = Time.lastDate('MM', ms + 'M');

				dd = (s.match(/[0-3]?\d[日号號]/) || [''])[0];
				if (dd) { return (yr || Time.lastDate('yyyy')) + '-' + MM + '-' + dd + ' ' + tim }
			}

			if (/([上下本这這]1?[个個]?)?(周+|星期|[禮礼]拜)[天日\d]/.test(s)) {
				ds = Number(s.split(/周+|星期|[禮礼]拜/)[1].substr(0, 1).replace(/天|日/, 0)) - n[Time.lastDate('D')] +
					7 * (/[上下]{2}.?(周+|星期|[禮礼]拜)/.test(s) ? 2 : 1) *
					(/上1?[个個]*(周+|星期|[禮礼]拜)/.test(s) ? -1 : (/下1?[个個]*(周+|星期|[禮礼]拜)/.test(s) ? 1 : 0))
				return Time.lastDate('yyyy-MM-dd ', ds + 'd') + tim;
			}

			if (/last|next|this/.test(s)) {
				for (var k in D) {
					var Dk = D[k], r = new RegExp(k, 'i');
					if (r.test(s)) {
						ds = Dk - n[Time.lastDate('D')] +
							7 * (/last/i.test(s) ? -1 : (/next/i.test(s) ? 1 : 0))
						return Time.lastDate('yyyy-MM-dd ', ds + 'd') + tim;
					}
				}

			}

			if (/[前昨明后後]天|yesterday|tomorrow/i.test(s)) {
				ds = (/大.天/.test(s) ? 3 : (/[前后後]天|day (before|after)/i.test(t) ? 2 : 1)) *
					(/[前昨]天|day before|yesterday/i.test(s) ? -1 : 1);
				return (yr || Time.lastDate('yyyy')) + '-' + Time.lastDate('MM-dd ', ds + 'd') + tim;
			}
			if (tdy) { return (yr || Time.lastDate('yyyy')) + '-' + (MM || Time.lastDate('MM')) + '-' + Time.lastDate('dd') + ' ' + tim }

			if (!MM) {

				for (var k in M) {
					var Mk = M[k], r = new RegExp(k, 'i');
					if (r.test(s)) {

						MM = Mk;
						var tmp = s.split(r);
						tmp[0] = tmp[0].split(/\D+/);
						if (tmp[0].length > 1) { tmp[0] = tmp[0][tmp[0].length - 2] } else { tmp[0] = tmp[0][0] }
						tmp[1] = tmp[1].split(/\D+/);
						if (tmp[1].length > 1) { tmp[1] = tmp[1][1] } else { tmp[1] = tmp[1][0] }

						dd = tmp[0] || tmp[1] || 0;
						if (dd) { return (yr || Time.lastDate('yyyy')) + '-' + MM + '-' + dd + ' ' + tim }
					}
				}
			}

			if (MM || dd) { return (yr || Time.lastDate('yyyy')) + '-' + (MM || Time.lastDate('MM')) + '-' + (dd || '01') + ' ' + tim }



			for (var k in o) {
				var ok = o[k], r = new RegExp('\\d *' + ok, 'i'), nA = s.split(/[^\d\.]+/);

				if (r.test(s)) {

					return Time.lastDate('yyyy-MM-dd HH:mm:ss', (/later|后|後/i.test(s) ? '' : '-') +
						Number(nA[0] || nA[1]) + k);

				}
			}

			return (yr || Time.lastDate('yyyy')) + '-' + Time.lastDate('MM-dd ') + tim;
		},
		local: function (d, timOrDat) {
			if (d && timOrDat) { return timOrDat == 'Date' ? d.toLocaleDateString() : d.toLocaleTimeString() }
			return (d || new Date()).toLocaleString().replace(/:00$/, '').replace(/:00 /, ' ');
		},
		lite: function (d) {
			var n = new Date();
			if (d.getFullYear() != n.getFullYear()) { return d.toLocaleDateString() }
			var today = Date.parse((new Date()).toDateString());

			if (d >= today - oneDay && d < today) { return gM('yesterday') }

			if (d > today && d < Date.parse(Time.reg('tomorrow'))) {
				return d.toLocaleTimeString().replace(/:\d+$/, '').replace(/:\d+ /, ' ');
			}
			return d.toLocaleDateString().replace(/\D*20\d+\D*/, '');

		},
		str2date: function (s, func, timOrDat) {
			var tm = new Date();
			tm.setTime(Date.parse(s));
			if (func) {
				if (timOrDat) { return Time[func](tm, timOrDat) }
				return Time[func](tm);
			}
			return tm;
		}
	};


function attr2jSon(s) {
	//return JSON.parse(('{'+s+'}').replace(/=/g,':').replace(/ /g,',').replace(/([\w#]+-*\w*)/g,'"$1"'))
	return JSON.parse(('{' + s.trim().replace(/([^" ]+)=([^" ]+)/g, '"$1":"$2"').replace(/([^" ]+)=/g, '"$1":').replace(/=([^" ]+)/g, ':"$2"').replace(/ /g, ',') + '}'))
}
function jSon(str) {
	//return JSON.parse(str);
	//return eval('('+ Str +')');
	//return (new Function("return " + str))();
	var Str = (str || '').trim();
	try {
		return JSON.parse(str);
	} catch (e) {
		//	console.log(str);
		//	console.log(e);
		if (/^\{/.test(Str) && /\}$/.test(Str)) {
			var str0 = Str.replace(/^\{|\}$/g, '').replace(/,([^":]*):/g, ',"$1":').replace(/^([^":]*):/g, '"$1":');

			return JSON.parse('{' + str0 + '}');
		}
		return Str;
	}
}

function jSon2str(json) { //json is an array
	var str = '[';
	for (var i in json) {
		var tmp = '{';
		$.each(json[i], function (j, n) {
			tmp += '"' + j + '":"' + n + '",';
		});
		str += tmp.replace(/,$/, '') + '},';
	}
	return str.replace(/,$/, '') + ']';
}
function jSon2attr(json) {
	var str = '';
	$.each(json, function (j, n) {
		str += j + '="' + n + '" ';
	});
	return str.trim();
}

function urlTran(urls) {
	var tArr = urls.match(/\S+/gi);
	if (!tArr) { return '' }

	var patt0 = /^.+\[\*[^(\[\*)]+\].*$/;
	var patt1 = /\[\*[^(\[\*)]+\]/;	//[* ]
	var patt2 = /\d+-\d+/;
	//var patt3 = new RegExp(/\D+-\D+/);
	var patt4 = /^0\d+/;
	var patt5 = /[1-9]\d*/;
	var patt6 = /\[>\d*\]/;
	for (var i in tArr) {
		var u = tArr[i];
		imgPreRe.lastIndex = 0;
		if (!imgPreRe.test(u)) { u = H + u; tArr[i] = u }
		if (patt0.test(u)) {
			var tmpStr0 = u.match(patt1);	//[* ]
			var tmpAry3 = tmpStr0[0].substr(2, tmpStr0[0].length - 3).split(',');	//a-z,2,4,6-9
			for (var k in tmpAry3) {
				if (tmpAry3[k].indexOf('-') == -1) { continue }
				var s0 = tmpAry3[k].split('-')[0];
				var s1 = tmpAry3[k].split('-')[1];
				var tmpStr = s0;

				if (patt2.test(tmpAry3[k])) {	//02-45
					if (patt4.test(s0)) {		//00-18
						var t = 1;
						if (patt5.test(s0)) { t = parseInt(s0.match(patt5)[0]) + 1 }
						for (var l = t; l <= parseInt(s1.match(patt5)[0]); l++) {
							tmpStr += ',' + '00000'.substr(0, s0.length - ('' + l).length) + l;  //!no more than 5 '0's
						}
					} else {
						for (var l = parseInt(s0) + 1; l <= parseInt(s1); l++) { tmpStr += ',' + l }
					}
				} else {
					for (var l = s0.charCodeAt(0) + 1; l <= s1.charCodeAt(0); l++) { tmpStr += ',' + String.fromCharCode(l) }
				}
				tmpAry3[k] = tmpStr;
			}

			var tmpAry = tmpAry3.join(',').split(',');
			tArr[i] = '';
			for (var k in tmpAry) {
				tArr[i] += u.replace(tmpStr0[0], tmpAry[k]).replace(patt6, tmpAry[k]) + ' ';
			}
		}
	}
	var t = tArr.join(' ').match(/\S+/gi).join('\n');
	if (patt1.test(t)) { return urlTran(t) } else { return t }
}

function hex2rgba(h, a, arr) {
	var Arr = [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16), isNaN(+a) ? 1 : +a];
	if (arr) { return Arr }
	return 'RGBA(' + Arr.join(',') + ')';
}
function rgb2hex(r, g, b) {//r*256^2 + g*256 + b = r*2^16 + g*2^8+ b
	return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).substring(1);
}

function bigintsim(s, toLaTeX, vars){// + - * /	vars指定字母变量赋值（整数）
	if(toLaTeX){
		return s.replace(/\)\*\(/g,')(').replace(/\*/g,'‧')
			.replace(/\*\*/g,'^').replace(/\d+/g,'{$&}')
			.replace(/>=/g,'≥').replace(/<=/g,'≤')
			.replace(/!=/g,'≠').replace(/==/g,'=')
	}
	var t=s||'';
	if(vars){
		if(vars['n']){
			t=t.replace(new RegExp('n','g'), '('+vars['n']+')')
		}
		$.each(vars,function(i,v){
			if(i!='n'){
				t=t.replace(new RegExp(i,'g'), '('+v+')')
			}
		});
	}

	return eval(t.replace(/[\{\[]/g,'(').replace(/[\}\]]/g,')')
		.replace(/\)(\d)/g,')*$1').replace(/(\d)\(/g,'$1*(')
		.replace(/\)\(/g,')*(').replace(/\d+/g,'($&n)')
		.replace(/\^/g,'**').replace(/‧/g,'*')
		.replace(/≥/g,'>=').replace(/≤/g,'<=')
		.replace(/≠/g,'!=').replace(/([^\!><=])=([^\!><=])/g,'$1==$2')
		)
}

function bodyFocus() {
	$('body')[0].tabIndex = 0;
	$('body').focus();
}
function imgdatasrc(src, u) { return src ? '<img data-src="' + H_a(src, u || '') + '" />' : '' }
var OffSet = function (obj, r, c, build) {//表格单元格偏移，如果找不到，则新建tr、td，扩充为大表
	var p = obj.parent(), pi = p.index(), pp = p.parent(), ppc = pp.children(), ppcl = ppc.length, tr = ppc.eq(pi + r), i = obj.index(), pcl = p.children().length;
	if (build) {
		var tds = c > 0 ? Math.max(i + c + 1, pcl) : pcl - Math.min(i + c, 0), tdsAdd = tds - pcl;
		var trsAdd = r > 0 ? Math.max(pi + r + 1 - ppcl, 0) : -Math.min(pi + r, 0), trs = trsAdd + ppcl;
		var s = '<tr>' + ZLR('<td></td>', tds) + '</tr>', sAdd = ZLR('<td></td>', tdsAdd);
		if (trsAdd) {
			if (r > 0) {
				pp.append(ZLR(s, trsAdd));
			} else {
				pp.prepend(ZLR(s, trsAdd));
			}
		}
		if (tdsAdd) {
			if (i + c + 1 > pcl) {
				ppc.append(sAdd)
			} else if (i + c + 1 < 0) {
				ppc.prepend(sAdd)
			}
		}

		tr = pp.children().eq(trsAdd ? (r > 0 ? trs - 1 : 0) : pi + r);
	}

	return tr.children().eq(tdsAdd ? (c > 0 ? tds - 1 : 0) : i + c);

}, Admin = {
	testAjax: function (t) { $.ajax({ type: 'get', url: t, success: function (d) { saveText(d, '123.txt') } }) },
	testAjax2: function (t,e,f) { $.ajax({ type: 'get', url: t, success: function (d) { var x=$(d).find(e).text();console.log(f?f(x):x) } }) }
}, fCC = function (A) {
	return String.fromCharCode.apply(null, A)
}, sizeKB = function (sz) {
	var s=sz||0;
	s=s/1024;
	if(s>=1024){s=(s/1024).toFixed(1)+'MB'}else{s=s.toFixed(1)+'KB'}
	return s
}, seqA = function (start, n, type, step) {//序列: 初始值，个数n，类型，步长	参数 n小于0时，逆序
	/*
	var isBig=typeof start=='bigint', t=[],y=type||'arith',p=step==undefined?(isBig?1n:1):step, N=n>=0?n:-n;
	for(var i=(isBig?0n:0);i<N;i++){
		
	*/

	var t = [], y = type || 'arith', p = step == undefined ? 1 : step, N = n >= 0 ? n : -n;
	for (var i = 0; i < N; i++) {
		t.push(y == 'arith' ? start + i * p : (y == 'geo' ? start * Math.pow(p, i) : ''));	//Math.pow(p,i)	**
	}
	if (n < 0) {
		t.reverse();
	}

	return t
}, seqsA = function (s) {//连续序列：缩写 ,~
	var t = s.replace(/\d+~\d+/g, function (t) { var tA = t.split('~'); return seqA(+tA[0], +tA[1] - (+tA[0]) + 1).join() })
		.replace(/[A-z]~[A-z]/g, function (t) { var tA = t.split('~'), t0 = tA[0].charCodeAt(0), t1 = tA[1].charCodeAt(0); return fCC(seqA(t0, t1 - t0 + 1)).split('').join() })
		.split(',')
	return t
}, diff = function (a) {
	var A = [].concat(a); Arrf(function (t, i) { if (i) { A[A.length - i] -= A[A.length - i - 1] } }, A); return A //差分运算
}, antidiff = function (a) {
	var A = [].concat(a); Arrf(function (t, i) { if (i) { A[i] = t + A[i - 1] } }, A); return A //		累计求和（逆差分运算）

}, Arri = function (A, i) {//提取矩阵第i列（从0开始编号）	负数表示从最后1列往前
	var t = [];
	for (var j = 0; j < A.length; j++) { t.push(A[j][i < 0 ? A[j].length + i : i]) }
	return t
}, ArrI = function (A, a, start) {//提取数组元素，按照索引集和起始偏移
	var t = [];
	for (var j = 0; j < a.length; j++) { t.push(A[a[j] - (start || 0)]) }
	return t
}, subMtrx = function (A, i1, i2, j1, j2) {//提取矩阵的子矩阵，编号从1开始
	var t = [], J2 = j2 == undefined ? A[0].length : j2;//t.t='Mtrx'
	for (var i = i1 - 1; i < i2; i++) {
		var ti = [];
		for (var j = j1 - 1; j < J2; j++) { ti.push(A[i][j]) }
		t.push(ti);
	}
	return t
}, Arrf = function (f, A, rtnTyp) {//数组函数，循环次数确定
	if (A.length < 1) { return [] }
	var ty = rtnTyp || 'arr', g = function (j, k) {
		var t, ar = arguments, an = ar.length;
		if (ty == '-cp2') {
			for (var i = an - 1; i > 0; i--) {
				/*逆向二元迭代(递归)，返回一个数（从数组最后元素往前迭代，上次迭代结果，与数组中上一个元素，二元运算）
					
						连幂式 Arrf(msup,[1,2,3,4],'-cp2')
					*/
				if (i == an - 1) { t = ar[i] } else {
					t = f(ar[i], t)
				}

			}
			return t
		}


		for (var i = 1; i < an; i++) {
			if (ty == 'arr') {//映射数组
				if (i == 1) { t = [] }
				//t.push(f(ar[i]))
				if (f.length > 1 && !f.name) {/*匿名函数第2个参数是索引值i（此时从1开始计数）
					
					
					
					console.log(f.toString(),f.valueOf());
					用f.length>1
					无法区分是匿名函数，还是有名称的函数。
					用f.name 区分是否匿名
					
					但可以用toString区分 function abc()	/^function \(/.test(f.toString())
					用window[函数名]，区分是否全局函数


var A=[2,3,4,5,7];Arrf(function(t,i){if(i){A[i]=t+A[i-1]}},A);A		累计求和（逆差分运算）
var A=[2,3,4,5,7];Arrf(function(t,i){if(i){A[A.length-i]-=A[A.length-i-1]}},A);A	差分运算

					*/

					t.push(f(ar[i], i - 1))
					//	t.push(f(ar[i]))
				} else {
					t.push(f(ar[i]))
				}

			} else if (ty == 'str') {//字符串累加
				if (i == 1) { t = '' }
				t += f(ar[i])
			} else if (ty == 'cp1') {/*一元迭代(递归)，返回数组（每次迭代都有步骤记录，此时数组A是形式需要：只需要满足迭代次数等于A.length）
				典型例子：
					等差数列（过程）		Arrf(function(t){return tn+2n},[0].concat(Array(10)),'cp1')
					等比数列 （过程）	Arrf(function(t){return tn*2n},[1].concat(Array(10)),'cp1')
					Fibonacci 斐波那契数列（过程） Arri(Arrf(function(t){return !t?[0n,1n]:[t[1],t[0]+t[1]]},Array(10),'cp1'),1)
					阶乘数列	Arri(Arrf(function(t){return !t?[1n,1n]:[t[0]+1n,(t[0]+1n)*t[1]]},Array(10),'cp1'),1)
等差前n项和（过程） Arrf(function(t){return !t?[1]:t.concat(t[t.length-1]+5)},Array(10),'cp1')

高阶差分（过程）		Arrf(diff,[[2,4,5,8,10]].concat(Array(10)),'cp1')
高阶逆差分（过程） Arrf(antidiff,[[2,4,5,8,10]].concat(Array(10)),'cp1')


				*/
				if (i == 1) { t = [f(ar[i])] } else {
					t.push(f(t[t.length - 1]))
				}
			} else if (ty == 'cp2') {/*二元迭代(递归)，返回一个数（上次迭代结果，与数组中下一个元素，二元运算）
				
					Fibonacci 斐波那契 Arrf(function(t){return !t?[1n,1n]:[t[1],t[0]+t[1]]},Array(10),'cp2')[1]
					阶乘 Arrf(function(s,t){return s*t},seqA(1,7),'cp2')
					gcd
					lcm

等差前n项和 Arrf(function(t){return !t?[1]:t.concat(t[t.length-1]+5)},Array(10),'cp2')
高阶逆差分 Arrf(antidiff,[[2,4,5,8,10]].concat(Array(10)),'cp2')
高阶差分 Arrf(diff,[[2,4,5,8,10]].concat(Array(10)),'cp2')
				*/
				if (i == 1) { t = ar[i]; continue } else {
					t = f(t, ar[i])
				}
			}
		}
		return t
	}; return g.apply(null, [f].concat(A))

}, Arrfc = function (fA, x, p) {//多重函数迭代（从右向左迭代）	p是函数序列，均支持的参数
	var up = p === undefined, xisArr = isArr(x), t = xisArr ? [].concat(x) : x, fn = fA.length;

	for (var i = 0; i < fn; i++) {
		if (xisArr) {
			t = Arrf(up ? fA[fn - 1 - i] : function (s) { return fA[fn - 1 - i](s, p) }, t)
		} else {
			t = up ? fA[fn - 1 - i](t) : fA[fn - 1 - i](t, p)
		}
	}
	return t
}, ArrfcA = function (fA, A, p) {//多重函数（数组函数）递归（从左到右） 	初始值A是多层数组，递归后降维
	/*
		[f0,f1,f2] A[[[0],[0]],[[1],[1]]]
		f0()
		
		ArrfcA([ntimes,nadd,ntimes],[[['2','x'],['3','y']],[['4','x'],['5','y']]],1,1)
	*/
	var up = p === undefined, t;
	if (fA.length == 1) {
		//console.log(A);
		if (A.length == 1 || A.length == 2 && A[1] == undefined) {
			return A[0]
		}
		return fA[0](A, p)//fA[0].apply(null,up?[A]:[A,p])
	} else {
		var a = [];
		for (var i = 0; i < A.length; i++) {
			a.push(ArrfcA(fA.slice(1), A[i], p))
		}
		//return ArrfcA([fA[0]],a,p)
		return fA[0](a, p)
	}
}, Arr1 = function (A) {//数组每个元素都加1
	return Arrf(function (t) { return t + 1 }, A)
}, Arr_1 = function (A) {//数组每个元素都减1
	return Arrf(function (t) { return t - 1 }, A)
}, max = function (A) {
	return Arrf(Math.max, Arrf(function (x) { return x || 0 }, A), 'cp2')
}, min = function (A) {
	return Arrf(Math.min, Arrf(function (x) { return x || 0 }, A), 'cp2')

}, cartestian = function (A, typ) {//笛卡尔乘积 序列化	typ指定括号类型，用于字符串输出括号风格
	var t = [A.slice(0)], n = A.length, tmp = new Array(n), tp = typ || '()';
	for (var i = 0; i < n; i++) {//维数
		var Ai = A[i], Ain = Ai.length, AA = [];
		for (var j = 0; j < t.length; j++) {
			var tj = t[j], arr = Arrf(function (a) { var tt = [].concat(tj); tt[i] = a; return tt }, Ai);
			//arr.t='Set_Cartesian'; 注意concat会丢失arr.t信息
			AA = AA.concat(arr);
		}
		t = AA;
	}
	for (var i = 0; i < AA.length; i++) {
		AA[i].t = 'Set_Cartesian_' + tp;
	}
	return t

}, countA = function (A, noParse, index) {/*对数组中元素进行计数		参数noParse 指定不强制转换成同一类型（例如字符串与数字），进行判断相同
		参数index指定，同时返回原索引(第一次出现)
	返回二维数组：去重数组，相应重数数组, 索引数组（如指定index参数）。
	
	*/
	var a = [], b = [], x = [];
	for (var i = 0, l = A.length; i < l; i++) {
		var c = noParse ? A[i] : '' + A[i];//默认强制转换成字符串比较相同
		if (a.indexOf(c) < 0) {
			a.push(c);
			b.push(1);
			if (index) {
				x.push(i);
			}
		} else {
			//b[b.length-1]++;
			b[a.indexOf(c)]++;
		}
	}
	return index ? [a, b, x] : [a, b]

}, concat = function () {//数组中元素分别字符串拼接，得到新数组
	var ar = arguments, arl = ar.length, n = 1, t = [];
	for (var i = 0; i < arl; i++) {
		var ai = ar[i];
		if (isArr(ai)) {
			n = ai.length;
			break;
		}
	}

	for (var j = 0; j < n; j++) {
		var s = '';
		for (var i = 0; i < arl; i++) {

			var ai = ar[i];
			if (ai.length) {
				s += isArr(ai) ? ai[j] : ai;
			}
		}
		t.push(s)
	}
	return t
}, cartt = function (A) {//笛卡尔乘积 序列化后拼接为字符串数组
	return Arrf(function (t) { return t.join('') }, cartestian(A))

}, carttNext = function (A, Al) {/*笛卡尔乘积 求下一个索引数组，并赋值给A		如果成功返回1；如果下一个不存在，则返回0
	参数A是当前索引数组，Al是各分量的索引区间长度，构成的数组
	*/
	var l = A.length;
	for (var i = l - 1; i >= 0; i--) {
		if (A[i] < Al[i] - 1) {
			A[i]++;
			for (var j = i + 1; j < l; j++) {
				A[j] = 0;
			}
			return 1
		}
	}
	return 0
}, carttPrev = function (A, Al) {/*笛卡尔乘积 求上一个索引数组，并赋值给A		如果成功返回1；如果上一个不存在，则返回0
	参数A是当前索引数组，Al是各分量的索引区间长度，构成的数组
	*/
	var l = A.length;
	for (var i = l - 1; i >= 0; i--) {
		if (A[i]) {
			A[i]--;
			for (var j = i + 1; j < l; j++) {
				A[j] = Al[j] - 1;
			}
			return 1
		}
	}
	return 0

}, subwd = function (t, len) {/*字符串t，截取前len个字符，但如果正好在单词内部截取，则再往前截取，使得单词完整
	*/
	return t.length>len?(t[101]==' '?t.substr(0,len):t.substring(0,t.substr(0,len).lastIndexOf(' '))):t
	
}, split = function (t, r, noshift) {/*字符串t，按(中缀)正则split分成两个数组 A[匹配到的分隔符数组A[0], 被分割后得到的数组A[1]]
	如果不匹配返回字符串本身
	如果A[1]首项为空，shift一下（未指定noshift的默认情况下）
	*/
	var re, si = [0], ops = [], A = [];
	r.lastIndex = 0;
	if (r.test(t)) {
		if (!r.global) {//只匹配1次
			re = t.split(r)[0];
			A.push(re);
			re = t.substr(re.length);
			A.push(re.replace(r, ''));
			ops.push(re.substr(0, re.length - A[1].length));
			return [ops, A]
		}


		r.lastIndex = 0;
		while ((re = r.exec(t)) != null) {
			ops.push(re[0]);
			si.push(re.index + re[0].length);//存储下一个表达式截取起始位置
			//console.log('si',si,' ; ','ops',ops,' ; ','A',A.length,A);
			A.push(t.substring(si.slice(-2)[0], re.index));
			//	console.log('A',A.length,A);
		}
		A.push(t.substr(si.slice(-1)[0]));

		//	console.log('A',A.length,A);

		if (!noshift && A[0] == '') {
			A.shift();
			A[0] = ops[0] + A[0];
			ops.shift();
		}
		return [ops, A]
	}
	return t
}, snake = function (AB) {//蛇形拼接两数组，过滤掉空字符串	主要用于处理split后的数组
	var A = [], n = AB[1].length;
	for (var j = 0; j < n; j++) {
		for (var i = 1; i >= 0; i--) {
			if (AB[i][j] || AB[i][j] === 0) {
				A.push(AB[i][j])
			}
		}
	}
	return A



	//下列涉及排序、去重

}, Uniq = function (s,useSet) {//字符或数字（数组，逗号隔开）去重，结果会自动排序	此方法去重不彻底，换成 Array.from(new Set([])).sort().join(',')
	if(useSet){//只返回去重后的排序数组，不join
		return Array.from(new Set(isStr(s)?s.split(','):s)).sort()
	}
	return (','+s.split(',').sort().join(',,') + ',').replace(/(,[^,]+,)\1+/g, '$1').replace(/,{2,}/g, ',').replace(/^,|,$/g, '')

}, sortBy = {
	random: function(a,b){return Random(3)-2},	//随机排序
	numInt: function (a, b) { var r = (BigInt(a) - BigInt(b)).toString(); return /^-/.test(r) ? -1 : (/^0$/.test(r) ? 0 : 1) },	//大整数数字大小排序
	num: function (a, b) { var r = minus ? minus([a, b]) : a - b; return /-/.test(r) ? -1 : (/^0$/.test(r) ? 0 : 1) },	//普通数字大小排序
	abs: function (a, b) { var t = Math.abs(+a) - Math.abs(+b); return t || (+a) - (+b) },	//数字绝对值大小排序
	len: function (x, y) {//按长度排序 长度相同时
		var a = '' + x, b = '' + y;
		return a.length - b.length
	},
	lenchr: function (x, y) {//按长度及字母排序
		var a = '' + x, b = '' + y, l = a.length - b.length;

		if (l) {
			return l
		}
		return a - b
	},
	chr: function (x, y) {//按字母排序	也就是默认的Array.sort()	此处有误，字符相减得到NaN
		var a = '' + x, b = '' + y;
		return a - b
	},
	chrlen: function (x, y) {//按字母及长度排序	
		var a = '' + x, b = '' + y;

		if (a == b) { return 0 }
		var la = a.length, lb = b.length, m = Math.min(la, lb);

		for (var i = 0; i < m; i++) {
			var t = a[i].charCodeAt(0) - b[i].charCodeAt(0);
			if (t) {
				return Math.sign(t)
			}
		}
		return la - lb
	},
	chrlen2: function (x, y) {//按字母及长度排序	大小写不敏感
		var a = '' + x, b = '' + y;

		if (a == b) { return 0 }
		var la = a.length, lb = b.length, m = Math.min(la, lb);

		for (var i = 0; i < m; i++) {
			var t = a[i].toLowerCase().charCodeAt(0) - b[i].toLowerCase().charCodeAt(0);
			if (t) {
				return Math.sign(t)
			}
		}
		return la - lb
	},
	chrnum: function (a, b) { //数字排在字母后，同含字母，按未知数排序；同为数字，比较数字大小
		if (/^\d+$/.test(a)) {
			if (/^\d+$/.test(b)) {
				return sortBy.num(a, b)
			}
			return 1
		}
		return sortBy.kxyz(a, b)

	},
	kxyz: function (a, b) {//按未知数排序
		var A1 = ('' + a).replace(/[^a-zα-ω]/ig, ''), B1 = ('' + b).replace(/[^a-zα-ω]/ig, '');
		return sortBy.chr(A1, B1)
	},
	monomial: function (a, b) {//按单项式幂次降序

		var A1 = Polynomial.opr1('^', a), B1 = Polynomial.opr1('^', b);
		if (A1 == B1) {
			return sortBy.kxyz(a, b)
		} else {
			return A1 - B1
		}
	}

}, sort2 = function (A, sortBys, cols, addNumCol, addValue) {/*二维数组排序（表格排序）
	参数
	sortBys	规则数组 指定各列排序规则
		如果不是数组，则所有参与排序的列cols，都按此规则排序
		如果为空，则
			有理数字按sortBy.num
			其它按sortBy.chr
			
	cols 	指定参与排序的列索引数组（索引从0开始编号）
		不指定，则只按第1列排序
		
	addNumCol	指定添加1列，标出原来的序号（从1开始编号）
	addValue	指定添加1列，标出排序值0,1	相等的为0，严格大小的为1
	*/
	var cA = cols || [0], sA = isArr(sortBys) ? sortBys : copyA(sortBys ? sortBys : (/[^\d\/\.,-]/.test(A.toString()) ? sortBy.chr : sortBy.num), cols ? cols.length : 1);

	//	console.log(arguments);
	//	console.log(sA);
	if (addNumCol) {
		Arrf(function (a, i) { a.push(i + 1) }, A);
	}
	if (addValue) {
		Arrf(function (a) { a.push(1) }, A);
	}
	//	console.log(sA);
	var n = A[0].length;
	A.sort(function (a, b) {
		for (var i in cA) {
			//		console.log(cA[i], sA[cA[i]]);
			//	var j=cA[i],sj=sA[j],aj=a[j],bj=b[j],r=sj(aj,bj);
			var j = cA[i], sj = sA[i], aj = a[j], bj = b[j], r = sj(aj, bj);
			if (r) {
				return r
			}
		}
		if (addValue) {//需要捕捉相等值
			a[n - 1] = 0;
			b[n - 1] = 0;
		}
		return 0
	});


}, compressBy={
	prefix:function(v, decompress){
		var vA=v.split(brn);
		if(decompress){
			for(var i=0;i<vA.length-1;i++){
				var vi=vA[i], vit=vi.trim(),
					vj=vA[i+1], v0=vj.length-vj.replace(/^ +/,'').length;
				if(!/^ /.test(vi) && v0){
					if(vi==vit){

					}else{
						vA.splice(i,1);
						vA[i]=vA[i].replace(/^ +/,vi)
					}
					
					for(var j=i+1;j<vA.length;j++){
						var vj=vA[j], vj0=vj.length-vj.replace(/^ +/,'').length;
						if(vj0==v0){
							vA[j]=vj.replace(/^ +/,vi+(vi==vit?' ':''))
	
						}else if(!vj0){
							break
						}
					}
					if(vi!=vit){
						i--;
					}
				}
			}

			return vA
		}
		for(var i=0;i<vA.length-1;i++){
			var vi=vA[i], viA=vi.trim().split(' '), v0=viA[0], v0indx=vi.indexOf(v0),
				vj=vA[i+1], vjA=vj.trim().split(' ');
			if(/[A-Z]/i.test(v0) && vj.indexOf(v0)==v0indx && vjA.indexOf(v0)==0){
				if(viA.length>1){
					vA.splice(i,0,vi.substr(0,v0indx+v0.length+1))
				}else{
					//vA[i]=vi.substr(0,v0indx+v0.length+1);
				}
				
				for(var j=i+1;j<vA.length;j++){
					var vj=vA[j], vjA=vj.trim().split(' ');
					if(vj.indexOf(v0)==v0indx && vjA.indexOf(v0)==0){
						vA[j]=vj.replace(v0,'')

					}else{
						break
					}
				}
			}
		}
		return vA
	}

}, Latin = function (t, caps) {
	var f = function (i) { var s = html2txt('&' + String.fromCharCode(i) + t + ';'); if (/;/.test(s)) { s = '' } return s };
	return Arrf(f, seqA(65 + 32 * (+!caps), 26))
}, Options = function (A, tB, selev) {//返回数组
	if (tB) {
		var B = tB == 1 ? gM(A) : tB, n = B.length, C = copyA('">', n), s = A.indexOf(selev || '');
		if (selev && s > -1) {
			C[s] = '"' + seled + '>';
		}
		return concat(copyA('<option value="', n), A, C, B, copyA('</option>', n));
	}
	var f = function (i) { return i ? '<option value="' + i + '"' + (selev && i == selev ? seled : '') + '>' + i + '</option>' : '' };
	return Arrf(f, A)

}, optgrp = function (t,v) {//返回字符串
	return '<optgroup label="'+t+'">'+v+'</optgroup>'
}, OptGrps = function (A, getI18) {//返回字符串	A=[{'label1':[{'t':'','v':'','s':1},]},]
	var s = '';
	for (var i = 0, l = A.length; i < l; i++) {
		var a = A[i];
		$.each(a, function (x, v) {
			s += '<optgroup label="' + x + '">' + (isStr(v) ? Arrf(function (k) { return '<option value="' + k + '">' + (getI18 && k!='LaTeX' && k!='JavaScript'?gM(k):k) + '</option>' },
				ZLR(v)) : Arrf(function (j) {
					var tv=j.t || j.v;
					return '<option value="' + (j.v || j.t) + '"' + (j.s ? seled : '') + '>' + (getI18 && tv!='LaTeX' && tv!='JavaScript'?gM(tv):tv) + '</option>'
				}, v)).join('') + '</optgroup>'
		});
	}
	return s

}, entity = ZLR('scr fr opf bar acute caron grave dot uml ring circ tilde breve'), printF = {
	'table': function (tbl, separateStyle, blankStyle) {
		var t = [];
		$(tbl).children().each(function () {
			$(this).children().each(function () {
				var s = '';
				$(this).children().each(function () {
					s += ($(this).text().trim() || blankStyle || '') + (separateStyle == '' ? '' : (separateStyle || '\t'))
				})
				t.push(s)
			})
		});
		return t.join('\n');
	}
}, isSupportFontFamily = function (f) {
	if (typeof f != 'string') {
		return false;
	}

	var df = 'Arial';
	if (f.toLowerCase() == df.toLowerCase()) {
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
	var getFontData = function (f) {
		// 清除
		ctx.clearRect(0, 0, width, height);
		// 设置字体
		ctx.font = defaultFontSize + 'px ' + f + ', ' + df;
		ctx.fillText(defaultLetter, width / 2, height / 2);

		var data = ctx.getImageData(0, 0, width, height).data;

		return [].slice.call(data).filter(function (value) {
			return value != 0;
		});
	};

	return getFontData(df).join('') !== getFontData(f).join('');
};



function cell2rows(t, colA, sepA, blanklines) {//单元格拆为多行	colA：需要拆行的列号数组(列号从0开始)  sepA：相应拆行标识符	blanklines间隔空行数
	var A = Arrf(function (x) { return x.split('\t') }, t.split('\n')), l = blanklines;
	//console.log(colA,sepA);
	for (var i = 0; i < A.length; i++) {
		//console.log('a= '+A[i],A);
		var a = A[i], m = a.length, b = Arrf(function (x, j) { return x.split(sepA[j]) }, ArrI(a, colA)), n = max(Arrf(function (x) { return x.length }, b));
		//console.log('b= '+b,n);
		if (n > 1) {
			Arrf(function (x, j) { a[x] = b[j][0] }, colA);

			for (var ii = 0; ii < n; ii++) {
				var B = copyA('', m);
				Arrf(function (x, j) {
					B[x] = b[j][ii + 1] || '';
				}, colA);
				A.splice(i + ii + 1, 0, B);
			}
			i += n;
		}
		if (l && i && i + 1 < A.length) {//首行（标题）不间隔空行
			for (var ii = 0; ii < l; ii++) {
				A.splice(i + 1, 0, copyA('', m));
			}
			i += l;
		}
	}
	return Arrf(function (s) { return s.join('\t') }, A).join('\n')

}

function cell2cols(t, colA, sepA, fixedA) {//单元格拆为多列	colA：需要拆列的列号数组(列号从0开始)  sepA：相应拆列标识符	fixedA各拆列数目
	var A = Arrf(function (x) { return x.split('\t') }, t.split('\n')), B = fixedA;

	if (!B) {
		B = Arrf(function (x, j) { return max(Arrf(function (y) { return y.split(sepA[j]).length }, Arri(A, x))) }, colA);
	}

	for (var i = 0; i < A.length; i++) {
		for (var ii = 0; ii < colA.length; ii++) {
			var j = colA[ii], a = A[i][j].split(sepA[ii]);
			A[i][j] = a.concat(copyA('', B[ii] - a.length)).join('\t')
		}
	}
	return Arrf(function (s) { return s.join('\t') }, A).join('\n')

}




function n2Zh(m, big, currency) {//数字转中文	[数字, 大小写, 货币单位]
	var AB = ('' + m).split('.'), A = AB[0].replace(/^-/g, ''), B = AB.length == 2 ? AB[1] : '', SN = big ? "零壹贰叁肆伍陆柒捌玖拾佰仟萬亿兆" : "〇一二三四五六七八九十百千万亿兆", K = SN.substr(10, 6), S = '';
	for (var i = 0; i < A.length; i++) {
		var j = Math.floor(i / 4), k = i % 4, n = A[A.length - i - 1], t = n.replace(/\d/, function (s) { return SN[s] });
		S = (n == '0' ? (k > 0 && A[A.length - i] != '0' ? t : '') : (n == '1' && k == 1 && i == A.length - 1 ? '' : t) + (k > 0 ? K[k - 1] : '')) + (j > 0 && k == 0 ? K[j + 2] : '') + S
	}
	if (currency) {
		if (A.length && !/^0+$/.test(A)) {
			S += '元圆'[big ? 1 : 0] + (B && /[1-9]/.test(B) ? '' : '整')
		}
	} else if (B) {
		S += '点'
	}
	K = '角分厘毫丝忽';
	for (var i = 0; i < B.length; i++) {
		var n = B[i], t = n.replace(/\d/, function (s) { return SN[s] });
		if (currency) {
			S += n == '0' ? (B[i + 1] && B[i + 1] != '0' ? t : '') : t + (i < 5 ? K[i] : '')
		} else {
			S += t
		}
	}
	if (/^点/.test(S)) {
		S = '零' + S
	}
	if (/^-/.test(m)) {
		S = '负' + S
	}
	if (currency) {
		S = S.replace(/^〇/, '')
	}
	if (/[%‰‱]$/.test(S)) { S = '百千万'['%‰‱'.indexOf(S.substr(-1))] + '分之' + S.substr(0, S.length - 1) }
	return S

}
function Zh2n(s) {//中文字符转成数字 只做简单替换处理
	return (s + '').replace(/[零壹贰叁肆伍陆柒捌玖]/gi, function (t) { return '零壹贰叁肆伍陆柒捌玖'.indexOf(t) })
		.replace(/[〇一二三四五六七八九]/gi, function (t) { return '〇一二三四五六七八九'.indexOf(t) })
		.replace(/[０１２３４５６７８９]/gi, function (t) { return '０１２３４５６７８９'.indexOf(t) })
		.replace(/[oO点两俩／拾佰仟萬]/g, function (t) { return '00.22/十百千万'['oO点两俩／拾佰仟萬'.indexOf(t)] })
		.replace(/^[百千万]/g, function (t) { return 1 + ZLR(0, '百千万'.indexOf(t) + 2) })
		.replace(/[十百千万]$/g, function (t) { return ZLR(0, '十百千万'.indexOf(t) + 1) }).replace(/亿$/, '00000000').replace(/兆$/, '000000')
		.replace(/[百千万]\D/g, function (t) { return ZLR(0, '百千万'.indexOf(t[0]) + 2) + t.substr(1) })
		.replace(/[百千万](.)/g, '$1')
		.replace(/([1-9])十([1-9])/g, '$1$2')
		.replace(/([1-9])[十]/, '$10')
		.replace(/[十]([1-9])/, '1$1')
		.replace(/[十]/, '10')
		.replace(/(.+)分之(.+)/g, '$2/$1').replace(/／/g, '/')
}

function nTrim(n) {//去除小数点后尾0
	return ('' + n).replace(/(\..*[1-9])0+$/, '$1').replace(/\.0+$/, '')
}
function wrapTrim(n) {//去除首尾括号
	return ('' + n).replace(/^\(|\)$/g, '')
}

function sbc2dbc(str) {
	var result = "";
	var len = str.length;
	for (var i = 0; i < len; i++) {
		var cCode = str.charCodeAt(i);
		//全角与半角相差（除空格外）：65248(十进制)
		cCode = (cCode >= 0x0021 && cCode <= 0x007E) ? (cCode + 65248) : cCode;
		//处理空格
		cCode = (cCode == 0x0020) ? 0x03000 : cCode;
		result += String.fromCharCode(cCode);
	}
	return result;
}

function dbc2sbc(str) {
	var result = "";
	var len = str.length;
	for (var i = 0; i < len; i++) {
		var cCode = str.charCodeAt(i);
		//全角与半角相差（除空格外）：65248（十进制）
		cCode = (cCode >= 0xFF01 && cCode <= 0xFF5E) ? (cCode - 65248) : cCode;
		//处理空格
		cCode = (cCode == 0x03000) ? 0x0020 : cCode;
		result += String.fromCharCode(cCode);
	}
	return result;
}
function zh2big(s, big2zh) {
	var zh_s = '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补布参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉号阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧将浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘浏龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗啰逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹你拟馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试适寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞台抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶一医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮隐樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
	var zh_t = '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補佈參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢號閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗將漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆歷瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉瀏龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅囉邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧妳擬餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽籤謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試適壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻臺擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉壹醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲隱櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
	return s.replace(hanziRe, function (t) { return (big2zh ? zh_s[zh_t.indexOf(t)] : zh_t[zh_s.indexOf(t)]) || t })
}

function txt2audio(t, spd, pit, per, lan, eng) {/*spd=[0~9] pit=[0~9] per=[0~4]

	5 Google https://translate.google.com/translate_tts?ie=UTF-8&q=%E4%B8%BA%E4%BB%80%E4%B9%88&tl=zh-CN&total=1&idx=0&textlen=3&tk=469016.95129&client=t&prev=input
		https://translate.google.com/translate_tts?ie=UTF-8&q=%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E5%9C%A8%E8%BF%99%E9%87%8C&tl=zh-CN&total=1&idx=0&textlen=7&tk=957539.575458&client=t&prev=input
		tk不正确无法使用
		
		需另外使用chrome tts API
		
	*/
	if (!eng) {//0 百度	yuyin.baidu.com/docs/tts/136
		return Hs + 'tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&spd=' + (spd || 6) + '&pit=' + (pit || 5) + '&per=' + (per || 0) + '&tex=' + fn0(t)
	}
	if (eng == 1) {//1 搜狗
		return H + 'fanyi.sogou.com/reventondc/microsoftGetSpeakFile?from=translateweb&spokenDialect=' + ['zh-CHS', 'zh-CHT', 'zh-CHT', 'en', 'en'][+lan] + '&text=' + fn0(t)
	}
	if (eng == 2) {//2 腾讯
		return H + 'audiodetect.browser.qq.com:8080/tts?platform=PC_Website&language=' + (+(+lan > 2)) + '&text=' + fn0(t) + '&guid='//+L.audioEngine2TK;// 从翻译页面获取cookie值 $.cookie("fy_guid")
	}
	if (eng == 3) {//3 Bing
		return Hs + 'www.bing.com/translator/api/language/Speak?locale=' + ['zh-CN', 'zh-HK', 'zh-TW', 'en-US', 'en-GB'][+lan] + '&gender=' + (['male', 'female'][+per] || 'male') + '&media=audio/mp3&text=' + fn0(t)
	}
	if (eng == 4) {//4 有道
		return H + 'tts.youdao.com/fanyivoice?le=eng&word=' + fn0(t)//+'&keyfrom=fanyi%2Eweb%2Eindex	只能读英语
	}
	if (eng == 5) {//5 Google
		return ''
	}
}
function txt2A(t) {
	var splitA = function (A, k) {
		var B = [].concat(A);
		for (var i = 0; i < B.length; i++) {
			var s = B[i].trim(), sA = s.split(k), sAl = sA.length;
			if (sAl > 2 || sAl == 2 && sA[0].trim() != '' && sA[1].trim() != '') {
				for (var j = 0; j < sAl - 1; j++) {
					sA[j] += k
				}
				B = B.slice(0, i).concat(sA, B.slice(i + 1));
			}
		}
		return B
	}, A = t.split(/\n/g), kA = ['。', '. ', '? ', '？', '！', '! ', '；', ';', '，', ', '];
	for (var i = 0; i < kA.length; i++) {
		A = splitA(A, kA[i]);
	}

	return A.filter(function (v, i) { return v.trim() != '' })
}
function ubb2html(t0, webview) {

	var t = t0, a0 = '<a target="_blank" href="', a1 = '</a>', r0 = /^[^\]]+\]|\[[^\[]+\]$/g;
	var tA = ZLR('b bold i italic u h\\w sub sup center cite code dfn em kbd samp strong var big del mark pre strike ul ol p q s wbr list \\* quote');

	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[\\/?' + tA[i] + '\\]', 'gi'), function (w) { return w.replace('[', '<').replace(']', '>').replace(/list|\*/g, 'li').replace('quote', 'q').replace('bold', 'b').replace('italic', 'i') });
	}

	tA = ZLR('red green blue white purple yellow violet brown black pink orange gold #\\w*');
	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[\\/?' + tA[i] + '\\]', 'gi'), function (w) { return w.substr(1, 1) == '/' ? '</font>' : w.replace('[' + tA[i] + ']', '<font color=' + tA[i] + '>') });
	}

	tA = ZLR('img image');
	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[' + tA[i] + '\\].*?\\[\\/' + tA[i] + '\\]', 'gi'), function (w) { return '<img src="' + w.replace(r0, '') + '" />' });
	}

	tA = ZLR('url download ref refer');
	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[' + tA[i] + '\\].*?\\[\\/' + tA[i] + '\\]', 'gi'), function (w) { return a0 + w.replace(r0, '') + '">' + w.replace(r0, '') + a1 });
		t = t.replace(new RegExp('\\[' + tA[i] + '=[^\\]]*?\\].*?\\[\\/' + tA[i] + '\\]', 'gi'), function (w) { return a0 + w.split(']')[0].split('=')[1] + '">' + w.replace(r0, '') + a1 });
	}

	tA = ZLR('fly move');
	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[' + tA[i] + '\\].*?\\[\\/' + tA[i] + '\\]', 'gi'), function (w) { return '<marquee direction=right behavior=scroll scrollamount=10 scrolldelay=200>' + w.replace(r0, '') + '</marquee>' });
	}

	tA = ZLR('left right');
	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[' + tA[i] + '\\].*?\\[\\/' + tA[i] + '\\]', 'gi'), function (w) { return '<p align=' + w.split(']')[0].substr(1) + '>' + w.replace(r0, '') + '</p>' });
	}

	tA = ZLR('color size font');
	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[' + tA[i] + '=[^\\]]*?\\].*?\\[\\/' + tA[i] + '\\]', 'gi'), function (w) { return '<font ' + w.split(']')[0].substr(1).replace(/^font/i, 'face') + '>' + w.replace(r0, '') + '</font>' });
	}

	tA = ZLR('align');
	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[' + tA[i] + '=[^\\]]*?\\].*?\\[\\/' + tA[i] + '\\]', 'gi'), function (w) { return '<p ' + w.split(']')[0].substr(1) + '>' + w.replace(r0, '') + '</p>' });
	}

	tA = ZLR('rm mp dir qt');
	for (var i = tA.length - 1; i > -1; i--) {
		t = t.replace(new RegExp('\\[' + tA[i] + '=[^\\]]*?\\].*?\\[\\/' + tA[i] + '\\]', 'gi'), function (w) { return '<video controls=controls width=' + w.split(']')[0].split('=')[1].replace(',', ' height=') + ' src="' + w.replace(r0, '') + '">' + w.replace(r0, '') + '</video>' });
	}

	t = t.replace(/\[list=[^\]]*?\].*?\[\/list\]/gi, function (w) { return '<ol type=' + w.split(']')[0].split('=')[1] + '>' + w.replace(r0, '') + '</ol>' });
	t = t.replace(/\[w\].*?\[\/w\]/gi, function (w) {
		var w0 = w.substr(3, w.length - 7), wb = webview ? 'webview' : 'iframe';
		return '<' + wb + ' src="' + u + '" style="width:98%;height:500px" />'
	});
	t = t.replace(/\[email\].*?\[\/email\]/gi, function (w) { return a0 + 'mailto:' + w.replace(r0, '') + '">' + w.replace(r0, '') + a1 });
	t = t.replace(/\[email=[^\]]*?\].*?\[\/email\]/gi, function (w) { return a0 + 'mailto:' + w.split(']')[0].split('=')[1] + '">' + w.replace(r0, '') + a1 });
	return t;
}


function fixed4(d) {
	return d.toFixed(4).replace(/(\.[^0]*)0+/, '$1').replace(/\.$/, '')
}

function linear2nest(Arr) {//平面线性二维数组[[相对层级,内容]+] 转成 立体嵌套对象[[索引,子对象数组[[索引,子对象数组[索引,索引]],[索引]]]+]
	var A = Arrf(function (i, ii) { return i.concat(ii) }, Arr);//第三列添加自然索引（以0开始计数）
	var f = function (a) {
		var al = a.length, m = min(Arri(a, 0)), B = [], C = [];
		for (var i = 0; i < al; i++) {
			if (!i || a[i][0] == m) {
				B.push([a[i]])
			} else {
				B[B.length - 1].push(a[i])
			}
		}

		for (var i = 0, l = B.length; i < l; i++) {

			if (B[i].length > 1) {
				C.push([B[i][0][2]].concat(f(B[i].slice(1))));
			} else {
				C.push(B[i][0][2])
			}
		}
		return C
	};
	return f(A)
}

function precode(t){
	return XML.wrapE('pre', XML.wrapE('code',t))
}
function md2html(str, sep) {
	var codeblockA = [], headA = [], listA = [], listOU = {},
		lnk = {}, footlnk = {}, footlnkA = [],
		mlnk = {}, mA = [], mlnkA = [],
		s = '\n' + str + '\n';

	s=replaceNodeInner(s,'js', eval);
	s=replaceNodeInner(s,'en', GM);
	s=replaceNodeInner(s,'i18n', gM);
	s=replaceNodeInner(s,'i18', gM);

	while (/\n\[[^\]]+\]:.+/.test(s)) {
		s = s.replace(/\n\[[^\]]+\]:.+/, function (x) {
			var k = x.split(']:')[0].substr(2), v = x.replace(/\n\[[^\]]+\]:/, '').replace(/ +/g, ' ').trim(), isfoot = /^\^/.test(k);
			if (isfoot) {
				footlnk[k.substr(1)] = v
			} else {
				lnk[k] = v;
			}
			return ''
		});

	}


	while (/```[^`]+```/.test(s)) {
		s = s.replace(/```[^`]+```/, function (t) {
			codeblockA.push(t.replace(/`/g, ''));
			return '<codeblockquote>' + (codeblockA.length - 1) + '</codeblockquote>'
		});
	}

	while (/\$\$[\s\S]+\$\$/.test(s)) {//JS 	$$2+3$$	$$1+2+3$$	$$zx(f)$$
		s = s.replace(/\$\$[^\$]+\$\$/, function (x) {

			var t = x.replace(/^..|..$/g, '');
			/*
			return eval(t)
			*/
			try {

				return '$' + eval(t) + '$'
			} catch (e) {
				return t
			}
		});

	}

	while(/<math .+alttext=".+">[\s\S]+<\/math>/.test(s)){// 替换mathml 为 katex
		var t=s.split('</math>'), t0=t[0].split('<math ');
		console.log(s.substr(t0[0].length,t[0].length-t0[0].length+7), '\n\n',t0[1].replace(/.+alttext="([^"]+)".+/,'$1'));
		s=s.replace(s.substr(t0[0].length,t[0].length-t0[0].length+7), '$'+t0[1].replace(/.+alttext="([^"]+)".+/,'$1')+'$')
	}

	while (/\$[^\$]+\$#.+#/.test(s)) {
		s = s.replace(/\$[^\$]+\$#.+#/, function (x) {
			var k = x.substr(1).split('$')[0], t = x.replace(/\$[^\$]+\$/, '').replace(/^.|.$/g, ''), z = zx(k);
			mlnk[t] = z;
			mlnkA.push(z);
			mA.push(k);
			return 'katex#' + (mlnkA.length - 1) + '#' //z
		});
	}
	while (/\$@[^\$]+@\$/.test(s)) {
		s = s.replace(/\$@[^\$]+@\$/, function (x) {
			var t = x.replace(/^..|..$/g, '');
			return 'katex#' + mlnkA.indexOf(mlnk[t]) + '#' //mlnk[t]
		});
	}
	while (/\$[^\$]+\$/.test(s)) {
		s = s.replace(/\$[^\$]+\$/, function (x) {
			var k = x.replace(/^.|.$/g, ''), z = zx(k), i = mA.indexOf(k);
			if (i < 0) {
				i = mA.length;
				mlnkA.push(z);
				mA.push(k);

			}
			return 'katex#' + i + '#'  //z
		});
	}



	while (/\n> +./.test(s)) {
		s = s.replace(/\n> +.+(\n> +.+)*/, function (x) {
			return XML.wrapE('blockquote', x.replace(/\n> +/g, '\n').replace(/^\n/, ''))
		})
	}


	if (/\n[ \t]*([\-\*\+]|\d+\.) .+/.test(s)) {//ol ul
		var fou = function (str) {

			var listA = [], ouA = [];
			var st = str.replace(/\n[ \t]*([\-\*\+]|\d+\.) .+/g, function (x) {
				var t = x.trim(), n = x.split(/[\-\*\+]|\d+\./)[0].length - 1, ht = t.replace(/([\-\*\+]|\d+\.) */, '');
				listA.push([n, ht]);
				var oui = 'uo'[+/^\d/.test(t[0])] + 'l';
				ouA.push(oui);
				return '\n<' + oui + 'li' + n + '>' + (listA.length - 1)


			});

			while (/\n<[uo]lli\d+>\d+\n(?!<[uo]lli\d+>\d+)/.test(st)) {
				st = st.replace(/\n<[uo]lli\d+>\d+\n.+/, function (x) {
					var xA = x.trim().split('\n');
					if (/<[uo]lli\d+>\d+/.test(xA[1])) {
						return '\n' + xA.join('#\n')
					} else {
						listA[+xA[0].split('>')[1]][1] += '\n' + xA[1]
						return '\n' + xA[0]
					}
				})
			}


			st = st.replace(/(\n<[uo]lli\d+>\d+)#/g, '$1');
			var ne = linear2nest(listA);


			var g = function (x) {
				return x.replace(/^\[ \]/, strchkbx0 + 'disabled />').replace(/^\[x\]/i, strchkbx0 + 'disabled' + chked + ' />')
			}, f = function (x) {
				if (isArr(x)) {

					var s = g(listA[x[0]][1]), x1 = x.slice(1);

					return s + (x.length > 1 ? (ouA[x[0] + 1] == 'ul' ? ul : ol)(Arrf(f, x1)) : '');
				} else {
					return g(listA[x][1])
				}
			};

			return (ouA[0] == 'ul' ? ul : ol)(Arrf(f, ne));

		};
		s = s.replace(/(\n[ \t]*([\-\*\+]|\d+\.) .+)+/g, function (x) {
			return '\n' + fou(x)
		});
	};

	if (/-+ *:?\|:?-+/.test(s)) {
		//Table
		var ftb = function (x) {
			var sep, sepi, A = Arrf(function (t, i) {
				if (!/[^-\|:]/.test(t)) {
					sep = t;
					sepi = i;
				}
				return t.replace(/^\||\|$/g, '').split('|')
			}, x.replace(/^\n|\n$/g, '').split('\n')),
				sepA = sep.replace(/^\||\|$/g, '').split('|'), cols = sepA.length;

			var c = '';
			if (/^\|.+\|$/.test(sep)) {
				c = 'TBrc'
			} else if (/^\|/.test(sep)) {
				c = 'TBc'
			} else if (/\|$/.test(sep)) {

			} else {
				c = 'TBr'
			}

			if (/:/.test(sep)) {

				c += ' ' + Arrf(function (k, j) {
					var a = 'l';
					if (/^:.+:$/.test(k)) {
						a = 'c'
					} else if (/:$/.test(k)) {
						a = 'r'
					}
					return 'TBalign' + a + (j + 1)
				}, sepA).join(' ')

			}


			return Table(A.slice(0, sepi), A.slice(sepi + 1, A.length), c)
		};
		s = s.replace(/\n?(.+\n)*\|?:?-+ *:?(\|:?-+ *:?)+.+(\n.+)*\n/g, ftb);
	}


	s = s.replace(/\n(-{3,}|\*{3,}|_{3,})\n/g, '\n<hr />\n').replace(/\n(-{3,}|\*{3,}|_{3,})$/g, '\n<hr />')

		.replace(/\n#+ .+/g, function (x) {
			var t = x.trim(), n = t.split(' ')[0].length, ht = t.replace(/^#+ | #+$/g, '');
			headA.push([n, ht]);
			var hi = 'TOChi' + (headA.length - 1);
			//return '\n' + inhref('#' + hi + '" class="mkdnhead', '<h' + n + ' id=' + hi + '>' + ht + '</h' + n + '>')
			return '\n' + '<h' + n + ' id=' + hi + '>' + inhref('#' + hi + '" class="mkdnhead', '# ')+
			 ht +  inhref('#TOChi0" class="mkdnhead', ' ↑')+ '</h' + n + '>'
		})

		.replace(/\*{3}[^\*\n].*[^\\\n]\*{3}/g, function (x) {
			return '<b><i>' + x.replace(/^...|...$/g, '').trim() + '</i></b>'
		})

		.replace(/\*{2}[^\*\n].*[^\\\n]\*{2}/g, function (x) {
			return '<b>' + x.replace(/^..|..$/g, '').trim() + '</b>'
		})	//strong

		.replace(/\*[^\\\* \n][^\\\*\n]*\*/g, function (x) {
			return '<i>' + x.replace(/^.|.$/g, '').trim() + '</i>'
		})	//em


		.replace(/__[^ \n_][^_]*[^\\\n_]__/g, function (x) {
			return scib(x.replace(/^..|..$/g, '').trim())
		})	//underline

		.replace(/_[^\\\_\n]+_/g, function (x) {
			return '<i>' + x.replace(/^.|.$/g, '').trim() + '</i>'
		})	//em 2


		.replace(/~~.+[^\\\n]~~/g, function (x) {
			return '<del>' + x.replace(/^..|..$/g, '').trim() + '</del>'
		})

		.replace(/==.+[^\\\n]==/g, function (x) {
			return '<mark>' + x.replace(/^..|..$/g, '').trim() + '</mark>'
		})

		.replace(/`[^`\\\n]+`/g, function (x) {
			return '<q>' + x.replace(/^.|.$/g, '').trim() + '</q>'
		})


		.replace(/\!\[[^\]]*\]\([^\)]+\)/g, function (x) {
			var t = x.replace(/\!\[.+\]/, '').replace(/^.|.$/g, ''), u = t.split(' ')[0];
			return '<img src="' + u + '" alt="' + x.split('(')[0].replace(/^..|.$/g, '') + '"' + (/ /.test(t) ? ' title="' + t.replace(/[^ ]+ /, '').replace(/^"|"$/g, '') + '"' : '') + ' />';
		})

		.replace(/\[<img src=[^\]]+\]\([^\)]+\)/g, function (x) {
			var t = x.replace(/.+\(|\)/g, ''), u = t.split(' ')[0],
				hf = uriRe.test(u) ? href : inhref;
				//console.log(x.split('(')[0].replace(/^.|.$/g, ''));
				//console.log(/ /.test(t) ? t.replace(/[^ ]+ /, '').replace(/^"|"$/g, '') : '');
			return hf(u, x.split('(')[0].replace(/^.|.$/g, ''), / /.test(t) ? t.replace(/[^ ]+ /, '').replace(/^"|"$/g, '') : '')
		})

		.replace(/\[[^\]\^]+\]\([^\)]+\)/g, function (x) {// 暂不支持链接文字中含有()
			var t = x.replace(/\[.+\]/, '').replace(/^.|.$/g, ''), u = t.split(' ')[0], hf = uriRe.test(u) ? href : inhref;
			return hf(u, x.split('(')[0].replace(/^.|.$/g, ''), / /.test(t) ? t.replace(/[^ ]+ /, '').replace(/^"|"$/g, '') : '')
		})


		.replace(/\n+(<h\d+[> ])/g, '$1').replace(/(<\/h\d+>)\n+/g, '$1')
		.replace(/(<\/[ou]l>)\n+/g, '$1')
		.replace(/\n*(<hr \/>)\n*/g, '$1')
		.replace(/\n?(<.?blockquote>)\n?/g, '$1')


		.replace(/<\S+@\S+\.\>/g, function (x) {
			var t = x.replace(/^.|.$/g, '');
			return href('mailto:' + t, t)
		})
		.replace(/<[^>\s]+[:\/\.\?\&][^>\s]+>/g, function (x) {
			var t = x.replace(/^.|.$/g, ''), hf = uriRe.test(t) ? href : inhref;
			return hf(t)
		})
		.replace(/\[[^\]\^]+\] *\[[^\s\]\^]+\]/g, function (x) {
			var t = x.replace(/^.|.$/g, '').split(/\] *\[/), lnkt = lnk[t[1]];

			if (lnkt) {
				var u = lnkt.split(' ')[0], tt = / /.test(lnkt) ? lnkt.replace(/\S+ /, '').replace(/"/g, '') : '', hf = uriRe.test(u) ? href : inhref;
				return hf(u, t[0], tt)

			} else {

				return x.replace(/\] *\[/, ']?[')
			}
		})
		.replace(/\[\^[^\]]+\]/g, function (x) {
			var t = x.replace(/^..|.$/g, ''), lnkt = footlnk[t];


			if (lnkt) {
				var ki = footlnkA.indexOf(t);

				if (ki < 0) {
					ki = footlnkA.length;
					footlnkA.push(t);
				}
				return sup(inhref('#TOFNi' + ki, (ki + 1), lnkt))

			} else {
				return x
			}
		})
		.replace(/\\([^\\])/g, '$1');



	if (/\[U?TOC\]/.test(s) && headA.length) {
		var ne = linear2nest(headA), toc = SCtv('bold',gM('Contents'));

		var f = function (x, u) {
			if (isArr(x)) {
				var s = headA[x[0]][1], x1 = x.slice(1);
				return inhref('#TOChi' + x[0], s) + (x.length > 1 ? (u ? ul : ol)(Arrf(function (y) { return f(y, u) }, x1)) : '');
			} else {
				return inhref('#TOChi' + x, headA[x][1])
			}
		};

		s = s.replace(/\[TOC\]/g, detail(toc,ol(Arrf(f, ne)),1,'id=TOCcontents'));
		s = s.replace(/\[UTOC\]/g, detail(toc,ul(Arrf(function (y) { return f(y, 1) }, ne)),1,'id=TOCcontents'));
	}



	if (codeblockA.length) {
		s = s.replace(/<codeblockquote>\d+<.codeblockquote>/g, function (x) {
			return precode(XML.encode(codeblockA[+x.replace(/\D/g, '')]))
		});
	}

	if (footlnkA.length) {

		s += '\n' + Arrf(function (x, i) { return '[' + (i + 1) + '] ' + footlnk[x] }, footlnkA).join('\n')
	}

	if (mA.length) {
		var kA = [];
		s = s.replace(/\n*katex#\d+#\n*/g, function (x) {
			var i = +x.replace(/\D/g, ''), isblk = /^\n/.test(x) && /\n$/.test(x);
			if (isblk) {
				var k = kA.indexOf(i);
				if (k < 0) {
					kA.push(i);
					k = kA.length;
				} else {
					k++;

				}

				var v = zx(mA[i], { "displayMode": true }); //mlnkA[i];

				return '<table width="100%"><tbody><tr><td width="95%">' + v + '</td><td align=right>(' + k + ')</td></tr></tbody></table>'

			} else {
				return x.replace(/[^\n]+/, mlnkA[i])
			}

		});
	}


	//s=s.replace(/<JS>([\s\S](?!<\/JS>))+.?<\/JS>/g,function(t){setTimeout(function(){eval(t.substr(4,t.length-9).trim())},100);return ''});
	s=replaceNodeInner(s,'JS', function(t){setTimeout(function(){eval(t)},100);return ''});


	return s.replace(/^\n+/, '').replace(/\n+$/, '\n').replace(/\n/g, sep === undefined ? br : sep)

}

function xhrcb(src, cb) {
	//cb(length,type)
	var xhr = new XMLHttpRequest();
	xhr.open('HEAD', src, true);
	xhr.onerror = function () {
		xhr.abort();
	};
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200 || xhr.status == 206) {
				var s = xhr.getResponseHeader('Content-Length') || 0, t = (xhr.getResponseHeader('Content-Type') || '').replace(/image[/]/, '').replace('x-icon', 'ico').replace(/[;\+].*/, '');
				cb(s, t);
				//console.log(xhr.getAllResponseHeaders());

			}
		}
	};
	xhr.send();
}


function picSrcNameExt(tSrc) {
	imgPreReData.lastIndex = 0;
	if (imgPreReData.test(tSrc)) {
		var psrc = unescape(tSrc);
		var pname = psrc.replace(/[;,].*/, '');
		var pext = pname.split('/')[1].toLowerCase().replace('x-icon', 'ico').replace('+xml', '');
		pname = pname.replace(/[:\/]/g, '_');
	} else {
		var psrc = unescape(tSrc).replace(/z@z@l@l@r@r/g, '%');
		var pname = psrc.replace(/[\?#].+$/g, '').replace(/.+[/]/, '');
		try {
			pname = decodeURIComponent(pname);
		} catch (e) {
			console.log(pname);
			console.log(e);
		}
		var pext = pname.replace(/.+\./, '').replace(/\&.+$/, '');
		if (/x-oss-process.+format,/.test(psrc)) {
			pext = psrc.split(/.+format,/)[0].split('/')[0]
		}
	}
	return [psrc, pname, pext]
}
function blking(t, Neg) {
	var s = t, arr;
	//s=s.replace(/<script[^>]*>[\D\d]*<[/]script>/gi,'');
	arr = s.split(/<\/script>/gi);
	for (var i in arr) {
		arr[i] = arr[i].split(/<script/gi)[0];
	}
	s = arr.join('');

	arr = s.split(/<\/style>/gi);
	for (var i in arr) {
		arr[i] = arr[i].split(/<style/gi)[0];
	}
	s = arr.join('');
	return s;
}
function textareaAdd(str, obj, newline, sellen) {
	var O = $(obj), ov = O.val(), sS = O[0].selectionStart, sE = O[0].selectionEnd,
		v = ov.substr(0, sS) + (newline && sS?'\n':'')+(str || '') + (sE == ov.length ? '' : ov.substr(sE)),
		t=v.length;
	O.val(v);
	if(sellen==-1){
		t=Math.max(t-1,0);
	}else if(newline && sellen && !sS){
		t=sS + sellen -1;
	}else{
		t=sS + (sellen||(str || '').length);
	}

	O.focus();
	O[0].selectionStart = t;
	O[0].selectionEnd = t;
}
function detectZoom (){ 
	var ratio = 0,
	  screen = window.screen,
	  ua = navigator.userAgent.toLowerCase();
  
	if (window.devicePixelRatio !== undefined) {
		ratio = window.devicePixelRatio;
	}else if (~ua.indexOf('msie')) {  
	  if (screen.deviceXDPI && screen.logicalXDPI) {
		ratio = screen.deviceXDPI / screen.logicalXDPI;
	  }
	}else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
	  ratio = window.outerWidth / window.innerWidth;
	}
		
	return ratio;
}

function copy2clipboard(t){
    $('body').append('<input id=zzllrrclip hidden type=text value="'+t+'" />');
    $('#zzllrrclip').select();
    document.execCommand('copy', false, null);
    $('#zzllrrclip').remove();
}

var Melef=function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip="'+t+'." title="'+t:''),x)};
	Arrf(function(v,i){Meleo[ZLR(Meles)[i]]=v}, ZLR(Mele));