/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
navhead['whitepaper']=
	Arrf(function(x){return XML.wrapE('h2',gM(x))+XML.wrapE('p',gM(x+'Tip'))},
		ZLR('Aims')).join('')+
	
	XML.wrapE('h2',gM('User'))+
	Table([gM(ZLR('Student Teacher Engineer Enthusiast Geek Mathematician Researcher Educator Scholar Philosopher Artist Parent Amateur Public'))],
		['✔'.repeat(14).split('')],'TBrc','alignc')+


	XML.wrapE('h2',gM('Vision'))+XML.wrapE('p',gM('VisionTip'))+
		
	Table([[gM('Program'),gM('Localized Name'),gM('Vision')]],
		[['Mather',gM('Mather'),gM('International Standard Open-Sourced Math Tool Program by Experts')],['.','.','.','.'],
		['zzllrr Mather',gM('zzllrr Mather'),gM('Customized Math Tool Program based on Mather by zzllrr')],['.','.','.','.'],
		['??? Mather','??? '+gM('Mather'),gM('Customized Math Tool Program based on Mather by someone')],['.','.','.','.'],['.','.','.','.'],['.','.','.','.']],'TBrc')+
	XML.wrapE('h2',gM('Mather Protocol'))+
	XML.wrapE('ol',Arrf(function(x){return XML.wrapE('li',gM(x))},[
			'Organism',
			'Offline Computation & Online Connection',
			'Energy Consumption Minimization',
			'Open Access',
			'Consensus & Cooperation'
		]).join(''));
