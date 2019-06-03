/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

navhead['donate']=DCtv('alignc',XML.wrapE('h3', gM('donaTip0'))+DCtv('donaTip',gM('zzllrr Mather')+' '+gM('donaTip'))+
	`<div id=donaCN>
		<div id=donaQR>
			<div class=via>
				<img src="img/Alipay.png" title="支付宝" class=alipayImg />
				<img src="img/Weixinpay.jpg" title="微信赞赏" />
				<img src="img/QQpay.png" title="QQ钱包" class=qqpayImg />
				</div>
			<span id=donaV2aliPay class=donaV2 title="支付宝赞赏"></span>
			<img src="img/F1weixinPay.webp" title="微信赞赏" />
			<span id=donaV2qqPay class=donaV2 title="QQ钱包"></span>
			
		</div>
	</div>

	<div id=donaAbroad>
		<img src="img/jiaohang.png" id=Jiaohang title="Bank of Communication" class=jiaohang />
		<a href="https://www.paypal.me/zzllrr" target=_blank><img src="img/paypal_dona.gif" id=Paypal title="Paypal" /></a>

		<div class=pay></div>
		</div>

	`);

navheadThen['donate']=function(){
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
