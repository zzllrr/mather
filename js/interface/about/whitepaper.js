/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
about['whitepaper']=XML.wrapE('p',
	Arrf(function(x){return XML.wrapE('h2',gM(x))+XML.wrapE('p',gM(x+'Tip'))},
		ZLR('Aims Vision')).join('')+
	Table([[gM('Program'),gM('Localized Name'),gM('Vision')]],
		[['Mather',gM('Mather'),gM('International Standard Open-Sourced Math Tool Program by Experts')],['.','.','.','.'],
		['zzllrr Mather',gM('zzllrr Mather'),gM('Customized Math Tool Program based on Mather by zzllrr')],['.','.','.','.'],
		['??? Mather','??? '+gM('Mather'),gM('Customized Math Tool Program based on Mather by someone')],['.','.','.','.'],['.','.','.','.'],['.','.','.','.']],'TBrc')+
	XML.wrapE('h2',gM('Protocol'))+
	XML.wrapE('ol',Arrf(function(x){return XML.wrapE('li',gM(x))},[
			'Organism',
			'Offline Computation & Online Connection',
			'Energy Consumption Minimization',
			'Open Access',
			'Consensus & Cooperation'
		]).join(''))+
	XML.wrapE('h2',gM('File'))+
	XML.wrapE('p',href(Hs+'github.com/zzllrr/Mather',gM('zzllrr Mather')+' on GitHub'))+
	href(GMAIL,gM('Contact'))
);