/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
navhead['about']=fieldseth(gM('Version'),
	Table('',[[
		DCtv('alignc pd10',XML.wrapE('h1','zzllrr Mather')+XML.wrapE('h2','V2019.7.15'))+
		ul([
			'Live Demo: '+href(Hs+'zzllrr.github.io/mather'),
			'on GitHub: '+href(Hs+'github.com/zzllrr/mather'),

		]),
		DCtv('pd10 Summarytip',XML.wrapE('h4',gM('Summary'))+
			gM('Summarytip'))
		]
	]))+
	fieldseth(gM('Donate'),
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
		)
	)+

	fieldseth(gM('About zzllrr'),
		Table('',[

			[ul([
					href(Hs+'www.douban.com/group/mathought/','数学史与数学思想方法')+' (豆瓣小组) 组长',
					href(Hs+'www.douban.com/group/nonlinear/','非线性Nonlinear')+' (豆瓣小组) 组长',
					href(Hs+'www.douban.com/group/excel-vba/','Excel宏VBA')+' (豆瓣小组) 组长',
					href(HOM.ZIG,'小乐图客zzllrr Imager Geek')+'（Google Chrome Extension）作者',
					href(HOM.ZRL,'小乐图客zzllrr RSS Reader')+'（Google Chrome APP）作者',
					href(Hs+'github.com/zzllrr/Mather','小乐数学zzllrr Mather')+'（Open Source Software）开源发起者',
					gM('Contact')+href(GMAIL,'zzllrr@gmail.com'),
					
				]),
				DCtv('alignc pd10',gM('WeChat')+'<div id=weixinZQR>'+dc),
			]
		])

	)
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