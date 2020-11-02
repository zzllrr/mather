/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

$(function(){
	var protocol_keywords={
		'Organism':ZLR('Structural Organized Organic Self-improvement Self-consistent'),
		'Offline Computation & Online Connection':['Mathematical Closure','Interoperability','Synergy','API'],
		'Energy Consumption Minimization':['Compact','High Reusability','Eco-Friendly'],
		'Open Access':['Open','Free','CC'],
		'Consensus & Cooperation':['Kind','Pally','Peace-loving','Non-discriminatory']
	};
	
	oHTML(

		subtabs(gM(['Version','Setting','Hotkey','Whitepaper','Project Progress','Licence','Donate','About zzllrr']),[
			
			//version
			fieldseth('V2020.11.2',
				DCtv('alignc',
					DCtv('floatl','<h1 class=logo data-z data-z-event="pointer">zzllrr Mather</h1>'+
						imgSRC+'logo.jpg" width=150 />'+
						'<span id=ZMatherQR>'+sc+
						DCtv('alignl',
							href(HOM.ZMATHERcn)+br+
							github('zzllrr/mather')+' | '+
							github('zzllrr','mather')
						)
					)+
					DCtv('Summarytip',
						XML.wrapE('h4',
							spanmi('launch',href(location.pathname.replace(/[^\/]+$/,'README.md'),gM('Summary')))+' '+
							spanmi('launch',href(location.pathname.replace(/[^\/]+$/,'RESEARCH.md'),gM('Research Background')))+' '+
							spanmi('launch',href(location.pathname.replace(/[^\/]+$/,'api.html'),'API'))

						)+
						gM('Summarytip')
						
					)
	
				)
			),
	
			//setting

			fieldseth(gM('Browser Cache'),[
				gM('Usage')+itv('" id="CacheUsage','data_usage'),
				gM('Import File')+itv('" id="CacheUpload','file_upload')+
				'<input type=file hidden accept="text/*" id=CacheUploadFile />',
				gM('Export File')+itv('" id="CacheDownload','file_download'),
				gM('Clear Cache')+itv('" id="CacheClear','clear_all')
				].join(br)
	
	
			),
	
	
			//hotkey

			fieldseth(gM('Textarea'),

Table('',[
	[
		scHotk('Tab'),gM('Increase Indent'),
	],
	[
		scHotk('Shift + Tab'),gM('Decrease Indent'),
	],

	[
		scHotk('Ctrl/⌘ + A'),gM('Select All'),
	],
	[
		scHotk('Ctrl/⌘ + X'),gM('Cut'),
	],
	[
		scHotk('Ctrl/⌘ + C'),gM('Copy'),
	],
	[
		scHotk('Ctrl/⌘ + V'),gM('Paste'),
	],
	[
		scHotk('Ctrl/⌘ + Y'),gM('Redo'),
	],
	[
		scHotk('Ctrl/⌘ + Z'),gM('Undo'),
	],
	[
		scHotk('Ctrl + Enter'),'GO',
	],
	[
		scHotk('Shift + Enter'),gM('Display'),
	],
	[
		scHotk('Ctrl + E'),gM('Clear'),
	],
	[
		scHotk('Ctrl/⌘ + S'),gM('Save'),
	],
	[
		scHotk('Ctrl/⌘ + Shift + Enter'),gM('Launch'),
	],
]))+fieldseth(gM('Table'),

Table('',[
	[scHotk('Click'),gM('thtip')],
	[scHotk('Alt + Click'),gM('Collapse')],

]))+fieldseth(gM('Help')+' | '+gM('Example'),

Table('',[
	[scHotk('Click'),gM('copy2input')],
	[scHotk('Shift + Click'),gM('Clear')+' & '+gM('copy2input')],


]))+fieldseth('Markdown',

Table('',[
	[scHotk('Ctrl + B'),XML.wrapE('b',gM('Bold')),sceg('**ABC**')],
	[scHotk('Ctrl + I'),XML.wrapE('i',gM('Italic')),sceg('*ABC*')],
	[scHotk('Ctrl + U'),SCtv('underline',gM('Underline')),sceg('__ABC__')], 
	[scHotk('Ctrl + K'),SCtv('underline',gM('href')),sceg('['+gM('Title')+'](http://)')],

	[scHotk('Ctrl + Q'),gM('Blockquote'),sceg('> ABC')],
	[scHotk('Ctrl + Shift + Q'),gM('Code Blockquote'),sceg('``` ABC ```')],

]))+fieldseth(gM('Doodle'),

Table('',[
	[
		scHotk('←'),gM('Move Left'),
	],
	[
		scHotk('→'),gM('Move Right'),
	],
	[
		scHotk('↑'),gM('Move Up'),
	],
	[
		scHotk('↓'),gM('Move Down'),
	],
	[	
		scHotk('Ctrl + C'),gM('Copy'),
	],
	[
		scHotk('Ctrl + V'),gM('Paste'),
	],
	

	
	[
		scHotk('Esc'),gM('Hide')+' | '+gM('Toggle'),
	],
	[
		scHotk('P'),gM('Pointer'),
	],

	[
		scHotk('A'),gM('Text'),
	],
	[
		scHotk('C'),gM('Crop'),
	],
	[
		scHotk('L'),gM('Line'),
	],
	[
		scHotk('N'),gM('Note'),
	],
	[
		scHotk('R'),gM('Round Corner')+gM(' ')+gM('Rectangle'),
	],
	[
		scHotk('U'),gM('Undo / Redo'),
	],	
	[
		scHotk('V'),gM('Layer Toggle'),
	],
	[
		scHotk('D / Delete'),gM('Delete')+' | '+gM('Eraser'),
	],
	[
		scHotk('Shift + D / Delete'),gM('Delete All'),
	],
])),
			//whitepaper
			fieldseth(gM('Aims'),gM('Aimstip'))+
			
			fieldseth(gM('User')+' '+gM('or')+' '+gM('Participant'),
				Table('',tableT([gM(ZLR('Student Teacher Engineer Enthusiast Geek Mathematician Researcher Educator Scholar Philosopher Artist Parent Amateur Public')),
				'&nbsp;✔&nbsp;,'.repeat(14).split(',')]),'TBrc','alignc')
			)+
	
			fieldseth(gM('Vision'),gM('Visiontip')+
				
				Table([[gM('Program'),gM('Localized Name'),gM('Vision')]],
					[['Mather',gM('Mather'),gM('International Standard Open-Sourced Math Tool Program by Experts')],
					['zzllrr Mather',gM('zzllrr Mather'),gM('Customized Math Tool Program based on Mather by zzllrr')],
					['? Mather','? '+gM('Mather'),gM('Customized Math Tool Program based on Mather by someone')]],'TBrc')
			)+
	
			fieldseth(gM('Mather Protocol'),
	
				ol(Arrf(function(i){return gM(i)+SCtv('mg20',Arrf(function(x){return XML.wrapE('label',strchkbx0+chked+' disabled /> '+gM(x))},protocol_keywords[i]).join(''))},[
					'Organism',
					'Offline Computation & Online Connection',
					'Energy Consumption Minimization',
					'Open Access',
					'Consensus & Cooperation'
				]))
			),
	
			//progress

			[
				Table([gM(['Project','Progress','Goal'])],//'✔▲△'
					[
						[gM('Solve'),meter(30),
							'#'+gM(ZLR('Systematized Detailed Stepwise')).join(', #')],
					
						[gM('Graphic'),meter(70),
							'#'+gM(ZLR('Multipath Convenient Layered')).join(', #')],
							
						[gM('Show'),meter(85),
							'#'+gM(ZLR('Efficient Semantical Automatic')).join(', #')],
							
						[gM('Wiki'),meter(20),
							'#'+gM(ZLR('Compact Structural Semantical')).join(', #')],
					
						[gM('Teaching'),meter(10),
							'#'+gM(ZLR('Reusable Hierarchical Functional')).join(', #')],
					
						[gM('Academic'),meter(8),
							'#'+gM(ZLR('Flexible Intelligent l10n')).join(', #')],
							
						[gM('Technology'),meter(20),
							'#'+gM(ZLR('Extendable Customizable Efficient')).join(', #')],

						[gM('Science'),meter(10),
							'#'+gM(ZLR('Structural Unambiguous Inspiring')).join(', #')],
							
						[gM('Culture'),meter(15),
							'#'+gM(ZLR('Systematized Interpretable Inspiring')).join(', #')],
							

				]),
		
				Table([gM(['Key Technology','Progress','Technology Decomposition'])],
					[
						[gM('Text Editor'),meter(80),
							'#'+ZLR('LaTeX Markdown MathML HTML Unicode/AsciiMath').join(', #')],
						
						[gM('Offline Automatic Translator'),meter(20),
							'#'+gM(ZLR('Glossary Grammar Corpus Context Linguistics l10n i18n')).join(', #')],
							
						[gM('Semantical Information Compression'),meter(30),
							'#'+gM(ZLR('Parameterization Functionalization Programmatic Semantical')).join(', #')],
							
						[gM('Symbolic Calculation'),meter(20),
							'#'+[gM('Computer Algebra System')+'(CAS)'].concat(gM(['Automatic Reasoning','Automatic Proof'])).join(', #')],
							
						[gM('Numerical Calculation'),meter(10),
							'#'+['OpenGL','WebGL','WebAssembly','Service Worker','Web Worker'].join(', #')],
							
						[gM('Audio Synthesis'),meter(5),
							'#'+gM(ZLR('Speech Sound Music')).join(', #')],
							
						[gM('Visualization'),meter(75),
							'#'+gM(ZLR('Animation Video 2D 3D VR AR')).join(', #')],
		
						[gM('Open AI'),meter(0),
							'#'+gM(ZLR('Universal Kind Peace-loving Non-discriminatory Decentralization')).join(', #')],
				]),
		
				Table([gM(['Key Technology','Related Standardization','Degree.','Related Organization'])],
					[
						[gM('Math Graphics Library'),'#'+ZLR('WebGL OpenGL').concat(['OpenGL ES','Vulkan']).join(', #'),
							meter(70),
							'#'+ZLR('Khronos').join(', #')],
						
						['JS '+gM('Math Function Library'),'#'+ZLR('ECMAScript(ES)').join(', #'),
							meter(30),
							'#'+ZLR('ECMA').join(', #')],
						
						[gM('Math Expression'),'#'+ZLR('MathML SVG XML CSS XSL HTML XHTML DOM').join(', #').replace('CSS,','CSS<br>'),
							meter(50),
							'#'+ZLR('W3C WHATWG').join(', #')],
		
						[gM('Semantical Information Compression'),'#'+['ISO/IEC/IEEE 31320'].join(', #'),
							meter(50),
							'#'+['ISO','IEC','IEEE'].join(', #')],
				])
			].join(br),
	
	
			Table([gM(['Type','Licence','Local File'])],[
				[gM('Content'),
	
					href(Hs+'creativecommons.org/licenses/by/4.0/', gM('Creative Commons')+'(CC BY 4.0)'),
					ul([
						href('CODE_OF_CONDUCT.md',gM('Terms'))
					])
					],
				[gM('Source Code'),
					href(Hs+'mit-license.org','MIT '+gM('Licence')),
					ul([
						href('LICENSE','MIT '+gM('Protocol')),
						href('js','JavaScript'),
						href('css','CSS')
					])
				],
			
			],'TBrc'),
			
	
			//donate
			DCtv('alignc pd10',
				DCtv('donatip red',gM('zzllrr Mather')+' '+gM('donatip'))+
	
			
				XML.wrapE('h2', gM('donatip0'))+
				`<div id=donaCN>
					<div class=pd10>
						<img src="img/Weixinpay.jpg" title="微信赞赏" />
	
						<div id=donaWeixin><img src="img/F1weixinPay.jpg" title="微信赞赏" /></div>
					</div>
					<div id=donaQR>
						<div class=via>
	
							<img src="img/Alipay.png" title="支付宝" class=alipayImg />
							<img src="img/QQpay.png" title="QQ钱包" class=qqpayImg />
							</div>
						<span id=donaV2aliPay class=donaV2 title="支付宝赞赏"></span>
						<span id=donaV2qqPay class=donaV2 title="QQ钱包"></span>
						
					</div>
	
				</div>
	
				<div id=donaAbroad>
					<img src="img/jiaohang.png" id=Jiaohang title="Bank of Communication" class=jiaohang />
					<a href="https://www.paypal.me/zzllrr/8" target=_blank><img src="img/paypal_dona.gif" id=Paypal title="Paypal" /></a>
	
					<div class=pay></div>
					</div>
	
				`
			),
	
			//about zzllrr

			ul([
				href(Hs+'www.douban.com/group/mathought/','数学史与数学思想方法')+' (豆瓣小组) 组长',
				href(Hs+'www.douban.com/group/nonlinear/','非线性Nonlinear')+' (豆瓣小组) 组长',
				href(Hs+'www.douban.com/group/excel-vba/','Excel宏VBA')+' (豆瓣小组) 组长',
				href(HOM.ZIG,'小乐图客zzllrr Imager')+'（Google Chrome Extension）作者',
				href(HOM.ZRL,'小乐阅读zzllrr RSS Reader')+'（Google Chrome APP）作者',
				href(HOM.ZMATHER,'小乐数学zzllrr Mather')+'（Open Source Software）作者',
				gM('Contact')+': '+href(GMAIL,'zzllrr@gmail.com'),
				
			])+DCtv('alignc pd10',gM('WeChat')+'<div id=weixinZQR>'+dc),
	
		])
	,1);


	if($('#weixinZQR').length){

		qrJPG(qrs['weixinZQR'],'#weixinZQR');
	}
	if($('#donaV2aliPay').length){

		qrJPG(qrs['V2aliPay'],'#donaV2aliPay');
		qrJPG(qrs['V2qqPay'],'#donaV2qqPay');
	}
	if($('#ZMatherQR').length){
		qrJPG(HOM.ZMather,'#ZMatherQR');
	}

	$('#CacheUsage').on('click', function(){
		var me=$(this), c=cacheUsage(), c1=Math.ceil(100*c[1]/1024/1024/5);
		if(me.next('meter').length<1){
			me.after(meter(c1))
		}else{
			me.next().val(c1)
		}
	});
	$('#CacheClear').on('click', function(){
		if(confirm(gM('resetAlert'))){
			L.clear();
		}
	});
	$('#CacheDownload').on('click', function(){
		saveText(jSoff(L),'zzllrr-Mather-Cache'+Time.now()+'.txt')
	});
	$('#CacheUpload').on('click', function(){
		$('#CacheUploadFile').click()
	});
	$('#CacheUploadFile').on('change',function(){
		var v=$(this).val();
		if(v){
			var files=this.files, fl=files.length;
			for(var i=0;i<fl;i++){
				var f=files[i], s=f.size, ext=f.type.replace(/text[/]/,'');

//consolelog(f);
				if(/^text[/]/.test(f.type) || !ext){
					if(!s){s='?KB'}else{
						s=sizeKB(s)
					}

					var reader=new FileReader();
					reader.onload = function(e){
						//var txt = this.result;
						L.clear();
						var txt=e.target.result;
						try{
							var obj=jSon(txt);
							$.each(obj,function(k,v){
								L[k]=v;
							});
							$('#CacheUsage').click()
						}catch(e){

						}

					};
					//reader.readAsDataURL(f);
					reader.readAsText(f);
					

				}
			}
		}
	});

	$('#CacheUsage').click();


	$('#Jiaohang').on('click',function(){
		var i=3, isJ=1, am='0 ~ +∞',
			strro='<input type=text readonly=true value="',
			s01=gM('Amount')+' CNY(RMB): '+strro+'￥'+am+'" />'+dc+'<div>',
			s1='<p class=red>'+(isJ?'Great Thanks!':'↓↓ '+gM('note')+': '+gM('note0')+' ↓↓')+'</p>';
		$('.pay').html(DCtv('jiaohang',DCtv('red bold','T/T, Money Gram, Western Union, ...')+'<div>'+s01+
			'Country (国家)'+': '+SCtv('underline','P.R.China')+' (中国)'+dc+'<div>'+
			'City (城市)'+': '+SCtv('underline','Nanjing')+' (南京)'+dc+'<div>'+
			'Bank (银行)'+': 交通银行江苏省分行'+dc+DCtv('underline',
			'BANK OF COMMUNICATIONS (JIANGSU PROVINCIAL BRANCH)')+'<div>'+
			gM('accnum')+': '+strro+'622 2600 2100 2478 1620" class=long />'+dc+'<div>'+
			gM('Payee')+': '+strro+'ZHU LE RONG" />'+dc+'<div>'+
			'First Name'+': '+strro+'LERONG" />'+dc+'<div>'+
			'Last Name (Surname)'+': '+strro+'ZHU" />'+dc+'<div>'+
			(i==3?'SWIFT Code/BIC':gM('SWIFT'))+': '+strro+'COMMCNSHNJG" />'+dc+'<div>'+
			(i==3?'CNAPS Code':gM('CNAPS'))+': '+strro+'301301000214" />'+dc)+s1
		);

	})

	var isnight=L.night=='true';
	$('body').toggleClass('night',isnight).toggleClass('day',!isnight);
});