/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
about['version']=href(Hs+'github.com/zzllrr/Mather','Demo V2019.4.11')+
	XML.wrapE('h3',gM('Summary'))+
	DCtv('',gM('SummaryTip')+
	XML.wrapE('h3',gM('WeChat'))+
	'<div id=weixinZQR>'+dc
);
OHthen['version']=function(){
	if($('#weixinZQR').length){
		var qrcode001 = new QRCode($('#weixinZQR')[0], {
			text:qrs['weixinZQR'],
			width : 150,
			height : 150
		});
	}
};