/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
$.each({

	'Markdown':[
		detail(gM('Style'),[
			[scHotk('Ctrl + I'),XML.wrapE('i',gM('Italic')),sceg('*ABC*'),sceg('_ABC_')].join(''),
			[scHotk('Ctrl + B'),XML.wrapE('b',gM('Bold')),sceg('**ABC**')].join(''),
			
			[XML.wrapE('b',XML.wrapE('i',gM('Bold Italic'))),sceg('***ABC***')].join(''),
			
			[XML.wrapE('del',gM('Strikeline')),sceg('~~ABC~~')].join(''),
			[XML.wrapE('mark',gM('Highlight')),sceg('==ABC==')].join(''),
			[scHotk('Ctrl + U'),SCtv('underline',gM('Underline')),sceg('__ABC__'),sceg('__$\\phantom{\\quad A \\quad}$__',0),].join(''), 
				
	
			[scHotk('Ctrl + Q'),gM('Blockquote'),Arrf(sceg,['> ABC','\n> A\n> > B\n> > > C'])].join(''),

			[gM('Inline Quote'),sceg('`ABC`')].join(''),
	
		].join(br))+
		
		detail(gM('Image'),[
	
			[gM('Image'),sceg('![Alt '+gM('Text')+'](http:// "'+gM('Title')+'")')].join(''),
			[gM('Image ID'),sceg('![Alt '+gM('Text')+'][id]')].join(''),


		].join(br))+
		

		
		detail(gM('List'),[

			[gM('Unordered List'),Arrf(sceg,['- ','* ','+ ','- 1\n- 2\n- 3'])].join(''),
			[gM('Ordered List'),Arrf(sceg,['1. ','1. \n2. \n3. '])].join(''),
			[gM('Todo List'),Arrf(sceg,['- [ ]','- [x]','- [x]\n- [ ]\n- [ ]'])].join(''),

			[gM('Compound'),sceg(`
1. 1
2. 2
3. 3
 - 3.1
 - 3.2
  + 3.21
  + 3.22
 - 30.3
4. 40

Todo
- [x]1
- [ ]2
- [ ]3
`,10)].join(''),
		].join(br))+
		
		detail(gM('href'),[
	
			[scHotk('Ctrl + K'),SCtv('underline',gM('href')),sceg('['+gM('Text')+'](http:// "'+gM('Title')+'")')].join(''),


			[gM('href Definition'),sceg('[id]:http://www.abc.com "'+gM('Title')+'"')].join(''),	
			[gM('href ID'),sceg('['+gM('Text')+'][id]')].join(''),
			
			[gM('Foot Note'),sceg('[^id]')].join(''),
			[gM('Foot Note')+' '+gM('Definition'),sceg('[^id]: ')].join(''),
				
			[gM('href'),sceg('<http://www.abc.com>'),sceg('<info@abc.com>')].join(''),
			
		].join(br))+


		detail(gM('Table'),[

			[gM('Table'),sceg('A|B|C\n--|--|--\n1|2|3\n',5),
				sceg('|A|B|\n|--|--|\n1|2\n',5)].join(''),
				
			[gM('Double Table Head'),sceg(`
A|B|C|D
E|F|G
|--|--|--|
1|2|3
4|5|6
7|8|9`,0),

sceg(`
A|B|C|D
E|F|G
--|--|--
1|2|3
4|5|6
7|8|9`,0),

sceg(`
A|B|C|D
E|F|G
|--|--|--
1|2|3
4|5|6
7|8|9`,0),

sceg(`
A|B|C|D
E|F|G
--|--|--|
1|2|3
4|5|6
7|8|9`,0),
].join(''),

			[gM('Table Align'),sceg(`
|A111|B222|C333|
|:--|:--:|--:|
|1|2|3|`,0)
	,gM('Center'),sceg(`
|A111|B222|C333|
|:--:|:--:|:--:|
|1|2|3|`,0)
].join(''),
			[gM('Borderless Table'),sceg('$$zarray([[1,2,3],[4,5,6],[7,8,9]])$$',0)
			].join(''),
		].join(br))+


		detail(gM('Structure'),[


			'H1'+Arrf(sceg,['# '+gM('H1')]),
			'H2~H4'+Arrf(sceg,['## ','### ','#### ']),
			'H5~H6 '+Arrf(sceg,['##### ','###### ']),
			[gM('Contents'),Arrf(sceg,['[TOC]','[UTOC]'])].join(''),
	
			[gM('Horizontal Line'),sceg('---\n')].join(''),
		].join(br))+
			
		detail(gM('Math Formula'),[
		

			['LaTeX',sceg('$x^2=4$')].join(''),
			['ID',sceg('$x^2=4$#'+gM('Formula')+'1#')].join(''),
			[gM('Reference'),sceg('$@'+gM('Formula')+'1@$')].join(''),
			[gM('JavaScript'),sceg('$$2+3$$')].join('')
		].join(br))+

		detail(gM('Exam'),[
			[	gM('fill in the blank'),sceg('__$\\phantom{\\qquad}$__',0),
				gM('Answer'),sceg2('Mather','','__$\\color{red}{\\quad \\bm{','}\\quad}$__'),
			].join(''),
			[	gM('Hidden Answer'),sceg2('Mather','','__$\\phantom{\\color{red}{\\quad \\bm{','}\\quad}}$__')
			].join(''),

			[	gM('Choice'),sceg('($\\phantom{\\qquad}$)',0),
				gM('Answer'),Arrf(function(i){return sceg2(i,'','($\\color{red}{\\quad \\bm{','}\\quad}$)')},ZLR('A B C D a b c d'))
			].join(''),
			[	gM('Hidden Answer'),Arrf(function(i){return sceg2(i,'','($\\phantom{\\color{red}{\\quad \\bm{','}\\quad}}$)')},ZLR('A B C D a b c d'))
			].join(''),

			[	gM('Judgement'),sceg('($\\phantom{\\qquad}$)',0),
				gM('Answer'),Arrf(function(i){return sceg2(i,'','($\\color{red}{\\quad \\bm{','}\\quad}$)')},['✔','✖','T','F',gM('True'),gM('False')]),
			].join(''),
			[	gM('Hidden Answer'),Arrf(function(i){return sceg2(i,'','($\\phantom{\\color{red}{\\quad \\bm{','}\\quad}}$)')},['✔','✖','T','F',gM('True'),gM('False')])
			].join(''),

		].join(br))+
		
		detail(gM('Code'),[
		
			[gM('Code Block'),sceg('``` ABC ```')].join(''),

			['JavaScript eval ('+gM('Formula')+')',sceg('$$2+3$$')].join(''),
			['JavaScript eval ('+gM('Instant')+')',sceg('<js>1+2+3</js>'),sceg("<js>svgf.id('',svgf.circle(15,15,10,'red'))</js>",4)].join(''),
			['JavaScript eval ('+gM('Timeout')+')',sceg('<JS>1+2+3</JS>')].join('')
		].join(br))+

		detail(gM('Canvas'),[
	
			['HTML',sceg('<canvas id=c1></canvas>')].join(''),
			['JavaScript ('+gM('Initialize')+')',sceg("<JS>var C=new ctt('#c1',200,100),c=C.ctx;</JS>",4)].join(''),
			['Canvas JS',sceg("<JS>c.strokeRect(10, 20, 50, 50);</JS>",4)].join(''),
		].join(br)),

	].join(br),



	//HTML



	'HTML':[
		href(Hs+'developer.mozilla.org/zh-CN/docs/Web/HTML/Element',gM('Native')+' HTML API'),
		detail(gM('Component'),[

			gM('Math Formulae')+Arrf(scegn,ZLR('LaTeX LA LT LX LTX TEX')).join('|'),
			Arrf(scegn,ZLR('Unicode_Math UM')).join('|'),

			gM('Graphic')+Arrf(scegn,ZLR('SVG SV')).join('|'),
			Arrf(scegn,ZLR('Canvas CVS CV')).join('|'),
			Arrf(scegn,ZLR('Echarts EC')).join('|'),
			
			'HTML'+Arrf(scegn,ZLR('Markdown MD')).join('|'),
			Arrf(scegn,ZLR('i18')).join(''),
			gM('Data')+Arrf(scegn,ZLR('YAML')).join(''),

			gM('Script')+Arrf(scegn,ZLR('JavaScript JS')).join('|'),

		].join(br)),
	


	].join(br),


	// Slide


	

	'Slide':[
		href(Hs+'webslides.tv/demos/','Slide API'),
		detail(gM('Structure'),[

			Arrf(scegn,ZLR('section nav')).join(''),

			sceg('<nav class="navbar"></nav>'),

			gM('Grid')+' .grid'+sceg(DCtv('grid'),0)+' > .column'+sceg(DCtv('column'),0),
			'.(sidebar + main)'+sceg2('grid sm'),
			'.(main + sidebar)'+sceg2('grid ms'),
			'.(sidebar + main + sidebar)'+sceg2('grid sms'),

			'ul.flexblock'+sceg('<ul class="flexblock"></ul>')+' > '+scegn('li'),
			Arrf(sceg2,ZLR('blink border steps gallery metrics')).join(''),
			Arrf(sceg2,ZLR('clients features specs activity plans reasons')).join(''),

			gM('Process')+Arrf(sceg2,ZLR('process')).join(''),
			Arrf(sceg2,ZLR(zlr('step-','2 3 4'))).join(''),

			'ul.work'+sceg('<ul class="work"></ul>')+' > '+scegn('li'),
			Arrf(sceg2,ZLR('work-label')).join(''),

			'ul.description'+sceg('<ul class="description"></ul>'),

			gM('Button')+sceg(DCtv('button'))+Arrf(sceg2,ZLR('radius ghost')).join(''),

			gM('Image')+sceg(XML.wrapE('figure','<img src="" />'+XML.wrapE('figcaption',XML.wrapE('h2',''))),8),

			gM('Video')+' .fullscreen > .embed > video'+
			sceg('<section class="fullscreen">'+DCtv('embed','<video autoplay loop poster="image.jpg"><source src="video.mp4" type="video/mp4"></video>')+'</section>',0),
			gM('Overlay')+': section.fullscreen.'+sceg2('bg-blue')+' > .embed.'+sceg2('dark')+' | '+sceg2('light'),

			gM('Link')+sceg('<a class="badge-ios"></a>'),
			gM('Badge')+Arrf(sceg2,ZLR(zlr('badge-','ios android'))).join(''),

			gM('Comment')+sceg(SCtv('code-comment')),

		].join(br)),
		detail(gM('Style'),[
			sceg2(' class=""'),
			Arrf(sceg2,ZLR('wrap embed img flexblock')).join(''),
			gM('Text')+Arrf(sceg2,ZLR(zlr('text-','data serif separator shadow'))).join(''),
			Arrf(sceg2,ZLR(zlr('text-','landing subtitle intro context'))).join(''),
			Arrf(sceg2,ZLR(zlr('text-pull-','left right'))).join(''),



			gM('BGC')+Arrf(sceg2,ZLR(zlr('bg-','primary secondary dark light apple facebook'))).join(''),
			Arrf(sceg2,ZLR(zlr('bg-','black black-blue white red green blue brown gray purple'))).join(''),
			Arrf(sceg2,ZLR(zlr('bg-trans-','dark light gradient'))).join(''),

			gM('Gradient')+':'+'Horizontal | Radial | Vertical',
			Arrf(sceg2,ZLR(zlr('bg-gradient-','h r v white gray'))).join(''),


			
			gM('bg image')+Arrf(sceg2,ZLR(zlr('background',' -top -bottom'))).join(''),
			Arrf(sceg2,ZLR(zlr('background-left',' -top -bottom'))).join(''),
			Arrf(sceg2,ZLR(zlr('background-center',' -top -bottom'))).join(''),
			Arrf(sceg2,ZLR(zlr('background-right',' -top -bottom'))).join(''),
			Arrf(sceg2,ZLR(zlr('background-','anim video'))).join(''),

			gM('Image'),
			gM('Logo')+Arrf(sceg2,ZLR(zlr2('black gray white','logo'))).join(''),
			gM('Avatar')+Arrf(sceg2,ZLR(zlr('avatar-','80 72 64 56 48 40'))).join(''),
			Arrf(sceg2,ZLR('browser')).join(''),


			gM('Card')+Arrf(sceg2,ZLR(zlr('card-','60 50 40'))).join(''),
			gM('Size')+Arrf(sceg2,ZLR(zlr('size-','50 40 30'))).join(''),

			gM('Align')+Arrf(sceg2,ZLR(zlr('align','left center right'))).join('')+Arrf(sceg2,ZLR('vertical-align')).join(''),
			Arrf(sceg2,ZLR(zlr('slide-','top bottom'))).join(''),
			Arrf(sceg2,ZLR(zlr('content-','left center right'))).join(''),

			Arrf(sceg2,ZLR('overlay fullscreen frame shadow')).join(''),

			gM('Effects')+Arrf(sceg2,ZLR('fadeIn fadeInUp zoomIn slideInLeft slideInRight')).join(''),
			Arrf(sceg2,ZLR('slow')).join(''),

		].join(br)),

	].join(''),



},function(k,v){
	tooltip[k]=v;
});





