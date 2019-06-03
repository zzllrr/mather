/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
navhead['about']=XML.wrapE('h3',gM('Version'))+
	SCtv('','Demo V2019.6.2'+href(Hs+'github.com/zzllrr/Mather','(GitHub)'))+
	XML.wrapE('h3',gM('Summary'))+
	DCtv('',gM('SummaryTip')+
	
	XML.wrapE('h3',gM('About zzllrr'))+
	ul([
		gM('WeChat')+'<div id=weixinZQR>'+dc,
		href(Hs+'www.douban.com/group/mathought/','数学史与数学思想方法')+' (豆瓣小组) 组长',
		href(Hs+'www.douban.com/group/nonlinear/','非线性Nonlinear')+' (豆瓣小组) 组长',
		href(Hs+'www.douban.com/group/excel-vba/','Excel宏VBA')+' (豆瓣小组) 组长',
		href(HOM.ZIG,'小乐图客zzllrr Imager Geek')+'（Google Chrome Extension）作者',
		href(HOM.ZRL,'小乐图客zzllrr RSS Reader')+'（Google Chrome APP）作者',
		href(Hs+'github.com/zzllrr/Mather','小乐数学zzllrr Mather')+'（Open Source Software）开源发起者',
		gM('Contact')+href(GMAIL,'zzllrr@gmail.com'),
	])
	
);
navheadThen['about']=function(){
	if($('#weixinZQR').length){
		var qrcode001 = new QRCode($('#weixinZQR')[0], {
			text:qrs['weixinZQR'],
			width : 150,
			height : 150
		});
	}
};