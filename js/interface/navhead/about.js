/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
var protocol_keywords={
	'Organism':ZLR('Structural Organized Organic Self-improvement Self-consistent'),
	'Offline Computation & Online Connection':['Mathematical Closure','Interoperability','Synergy','API'],
	'Energy Consumption Minimization':['Compact','High Reusability','Eco-Friendly'],
	'Open Access':['Open','Free','CC'],
	'Consensus & Cooperation':['Kind','Pally','Peace-loving','Non-discriminatory']
};

navhead['about']=fieldseth(gM('Version'),
	Table('',[[
		DCtv('alignc pd10','<h1 class=logo>zzllrr Mather</h1>'+'<div id=ZMatherQR>'+dc+XML.wrapE('h2','V2019.7.23')),

		DCtv('pd10 Summarytip',
			ul([
				'Demo: '+href(HOM.ZMather),
				'GitHub: '+href(HOM.ZMATHER),

			])+
			XML.wrapE('h4',gM('Summary'))+
			gM('Summarytip')
			
		)
		]
	]))+

	subtabs(gM(['Whitepaper','Project Progress','Licence','Donate'].concat('About zzllrr')),[
		fieldseth(gM('Aims'),gM('Aimstip'))+
		
		fieldseth(gM('User')+' '+gM('or')+' '+gM('Participant'),
			Table([gM(ZLR('Student Teacher Engineer Enthusiast Geek Mathematician Researcher Educator Scholar Philosopher Artist Parent Amateur Public'))],
				['✔'.repeat(14).split('')],'TBrc','alignc')
		)+

		fieldseth(gM('Vision'),gM('Visiontip')+
			
			Table([[gM('Program'),gM('Localized Name'),gM('Vision')]],
				[['Mather',gM('Mather'),gM('International Standard Open-Sourced Math Tool Program by Experts')],
				['zzllrr Mather',gM('zzllrr Mather'),gM('Customized Math Tool Program based on Mather by zzllrr')],
				['? Mather','? '+gM('Mather'),gM('Customized Math Tool Program based on Mather by someone')]],'TBrc')
		)+

		fieldseth(gM('Mather Protocol')+' V0.1',

			ol(Arrf(function(i){return gM(i)+SCtv('floatr mgr20',Arrf(function(x){return XML.wrapE('label',strchkbx0+chked+' disabled /> '+gM(x))},protocol_keywords[i]).join(''))},[
				'Organism',
				'Offline Computation & Online Connection',
				'Energy Consumption Minimization',
				'Open Access',
				'Consensus & Cooperation'
			]))
		),

		[
			Table([gM(['Subproject','Progress','Goal','Core Participant'])],//'✔▲△'
				[
					[gM('Solve'),meter(30),
						'#'+gM(ZLR('Systematized Detailed Stepwise')).join(', #'),
						'#'+gM(ZLR('Teacher Student Enthusiast Engineer Mathematician')).join(', #')],
				
					[gM('Graphic'),meter(70),
						'#'+gM(ZLR('Multipath Convenient Layered')).join(', #'),
						'#'+gM(ZLR('Teacher Student Engineer Artist Mathematician')).join(', #')],
						
					[gM('Show'),meter(5),
						'#'+gM(ZLR('Efficient Semantical Automatic')).join(', #'),
						'#'+gM(ZLR('Teacher Geek Educator Engineer Mathematician')).join(', #')],
						
					[gM('Wiki'),meter(10),
						'#'+gM(ZLR('Compact Structural Semantical')).join(', #'),
						'#'+gM(ZLR('Researcher Teacher Publisher Scholar Mathematician')).join(', #')],
				
					[gM('Course'),meter(0),
						'#'+gM(ZLR('Reusable Hierarchical Functional')).join(', #'),
						'#'+gM(ZLR('Teacher Student Parent Educator Mathematician')).join(', #')],
				
					[gM('Drill'),meter(0),
						'#'+gM(ZLR('Extendable Customizable Efficient')).join(', #'),
						'#'+gM(ZLR('Teacher Student Parent Publisher Mathematician')).join(', #')],
				
					[gM('Topic'),meter(5),
						'#'+gM(ZLR('Flexible Intelligent i10n')).join(', #'),
						'#'+gM(ZLR('Enthusiast Scholar Public Amateur Mathematician')).join(', #')],
						
					[gM('Pitfall'),meter(1),
						'#'+gM(ZLR('Structural Unambiguous Inspiring')).join(', #'),
						'#'+gM(ZLR('Teacher Student Amateur Philosopher Mathematician')).join(', #')],
						
					[gM('Unsolved'),meter(1),
						'#'+gM(ZLR('Timely Portable Inspiring')).join(', #'),
						'#'+gM(ZLR('Enthusiast Philosopher Geek Researcher Mathematician')).join(', #')],
						
					[gM('Thought'),meter(0),
						'#'+gM(ZLR('Systematized Interpretable Inspiring')).join(', #'),
						'#'+gM(ZLR('Scholar Artist Philosopher Engineer Mathematician')).join(', #')],
						
					[gM('Refer'),meter(0),
						'#'+gM(ZLR('Organized i18n Legal')).join(', #'),
						'#'+gM(ZLR('Educator Publisher Researcher').concat(gM('Legal Worker'),gM('Mathematician'))).join(', #')],
			]),
	
			Table([gM(['Key Technology','Progress','Technology Decomposition'])],
				[
					[gM('Text Editor'),meter(80),
						'#'+ZLR('LaTeX Markdown MathML HTML Unicode/AsciiMath').join(', #')],
					
					[gM('Offline Automatic Translator'),meter(20),
						'#'+gM(ZLR('Glossary Grammar Corpus Context Linguistics i10n i18n')).join(', #')],
						
					[gM('Semantical Information Compression'),meter(30),
						'#'+gM(ZLR('Parameterization Functionalization Programmatic Semantical')).join(', #')],
						
					[gM('Symbolic Calculation'),meter(20),
						'#'+[gM('Computer Algebra System')+'(CAS)'].concat(gM(['Automatic Reasoning','Automatic Proof'])).join(', #')],
						
					[gM('Numerical Calculation'),meter(10),
						'#'+['OpenGL','WebGL','WebAssembly','Service Worker','Web Worker'].join(', #')],
						
					[gM('Audio Synthesis'),meter(5),
						'#'+gM(ZLR('Speech Sound Music')).join(', #')],
						
					[gM('Visualization'),meter(5),
						'#'+gM(ZLR('Animation Video 2D 3D VR AR')).join(', #')],
	
					[gM('Open AI'),meter(0),
						'#'+gM(ZLR('Universal Kind Peace-loving Non-discriminatory Decentralization')).join(', #')],
			]),
	
			Table([gM(['Key Technology','Related Standardization','Need Industry Support','Related Institution & Organization'])],
				[
					[gM('Math Graphics Library'),'#'+ZLR('WebGL OpenGL').concat(['OpenGL ES','Vulkan']).join(', #'),
						meter(70),
						'#'+ZLR('Khronos').join(', #')],
					
					['JavaScript '+gM('Math Function Library'),'#'+ZLR('ECMAScript(ES)').join(', #'),
						meter(30),
						'#'+ZLR('ECMA').join(', #')],
					
					[gM('Math Expression'),'#'+ZLR('MathML SVG XML CSS XSL HTML XHTML DOM').join(', #'),
						meter(50),
						'#'+ZLR('W3C WHATWG').join(', #')],
	
					[gM('Semantical Information Compression'),'#'+['ISO/IEC/IEEE 31320'].join(', #'),
						meter(50),
						'#'+['ISO','IEC','IEEE'].join(', #')],
			])
		].join(br),


		Table([gM(['Type','Note','Default Licence','Local File'])],[
			[gM('Content'),
				gM('Unless Otherwise Stated'),
				href(Hs+'creativecommons.org/licenses/by/4.0/', gM('Creative Commons')+'(CC BY 4.0)'),
				ul([
					href('CODE_OF_CONDUCT.md',gM('Terms'))
				])
				],
			[gM('Source Code'),
				gM('except')+' '+href('./js/lib',gM('third-party library')),
				href(Hs+'mit-license.org','MIT '+gM('Licence')),
				ul([
					href('LICENSE','MIT '+gM('Protocol')),
					href('js','JavaScript'),
					href('css','CSS')
				])
			],
		
		],'TBrc'),
		

		
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
				<a href="https://www.paypal.me/zzllrr" target=_blank><img src="img/paypal_dona.gif" id=Paypal title="Paypal" /></a>

				<div class=pay></div>
				</div>

			`
		),

		
		Table('',[

			[ul([
					href(Hs+'www.douban.com/group/mathought/','数学史与数学思想方法')+' (豆瓣小组) 组长',
					href(Hs+'www.douban.com/group/nonlinear/','非线性Nonlinear')+' (豆瓣小组) 组长',
					href(Hs+'www.douban.com/group/excel-vba/','Excel宏VBA')+' (豆瓣小组) 组长',
					href(HOM.ZIG,'小乐图客zzllrr Imager Geek')+'（Google Chrome Extension）作者',
					href(HOM.ZRL,'小乐图客zzllrr RSS Reader')+'（Google Chrome APP）作者',
					href(HOM.ZMATHER,'小乐数学zzllrr Mather')+'（Open Source Software）开源发起者',
					gM('Contact')+href(GMAIL,'zzllrr@gmail.com'),
					
				]),
				DCtv('alignc pd10',gM('WeChat')+'<div id=weixinZQR>'+dc),
			]
		])

	])
;
navheadThen['about']=function(){
	if($('#weixinZQR').length){
		var qrcode001 = new QRCode($('#weixinZQR')[0], {
			text:qrs['weixinZQR'],
			width : 150,
			height : 150
		});
	}
	if($('#donaV2aliPay').length){
		var qrcode001 = new QRCode($('#donaV2aliPay')[0], {
			text:qrs['V2aliPay'],
			width : 150,
			height : 150
		}),qrcode002 = new QRCode($('#donaV2qqPay')[0], {
			text:qrs['V2qqPay'],
			width : 150,
			height : 150
		});
	}
	if($('#ZMatherQR').length){
		var qrcode001 = new QRCode($('#ZMatherQR')[0], {
			text:HOM.ZMather,
			width : 150,
			height : 150
		});
		$('#ZMatherQR').html('<img width=150 src="'+$('#ZMatherQR canvas')[0].toDataURL('image/jpg')+'" />');
	}
};

$(function(){
	
	$('body').on('click','#Jiaohang',function(){
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
});