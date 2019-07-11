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
navhead['whitepaper']=
	fieldseth(gM('Aims'),gM('Aimstip'))+
	
	fieldseth(gM('User')+' '+gM('or')+' '+gM('Participant'),
		Table([gM(ZLR('Student Teacher Engineer Enthusiast Geek Mathematician Researcher Educator Scholar Philosopher Artist Parent Amateur Public'))],
			['✔'.repeat(14).split('')],'TBrc','alignc')
	)+

	fieldseth(gM('Vision'),gM('Visiontip')+
		
		Table([[gM('Program'),gM('Localized Name'),gM('Vision')]],
			[['Mather',gM('Mather'),gM('International Standard Open-Sourced Math Tool Program by Experts')],['.','.','.','.'],
			['zzllrr Mather',gM('zzllrr Mather'),gM('Customized Math Tool Program based on Mather by zzllrr')],['.','.','.','.'],
			['??? Mather','??? '+gM('Mather'),gM('Customized Math Tool Program based on Mather by someone')],['.','.','.','.'],['.','.','.','.'],['.','.','.','.']],'TBrc')
	)+

	fieldseth(gM('Mather Protocol')+' V0.1',

		ol(Arrf(function(i){return gM(i)+SCtv('floatr mgr20',Arrf(function(x){return XML.wrapE('label',strchkbx0+chked+' disabled /> '+gM(x))},protocol_keywords[i]).join(''))},[
			'Organism',
			'Offline Computation & Online Connection',
			'Energy Consumption Minimization',
			'Open Access',
			'Consensus & Cooperation'
		]))
	)+

	fieldseth(gM('Licence'),
	
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
	
	],'TBrc')	
	)

;
