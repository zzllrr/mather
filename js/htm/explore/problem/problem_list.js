/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

 

explore['Problem/Problem List']=
	Table([i18(ZLR('Name Author Features'))],[
		[href(Hs+'aimath.org/problemlists/','AIM workshop'),'AIM',href(H+'aimpl.org','AimPL - AIM Problem Lists')],
		[enwiki('List_of_unsolved_problems_in_mathematics'),'',Arrf(enwiki,zlrA('List_of_',ZLR('conjectures paradoxes'))).concat(
			Arrf(enwiki,zlrA3('List_of_',ZLR('undecidable NP-complete PSPACE-complete unsolved'),'_problems'))
		).concat(
			Arrf(enwiki,zlrA('List_of_unsolved_problems_in_',
				ZLR('statistics physics computer_science astronomy biology chemistry economics geoscience information_theory linguistics medicine neuroscience philosophy')))
		).join(br)],



	],'TBrc')
;

	
