/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Concept/Analytic/Trigonometric']='三角函数（图示）'+plot.shape('svg_trig','svg',
[
plot.shape("","circle","","r=80 cx=100 cy=100"),
plot.shape("","arc","","x1=120 y1=90 x2=122 y2=100 rx=10 c=1"),
plot.shape("","text","O","x=90 y=112 rotate=20"),
plot.shape("","text","θ","x=130 y=95 rotate=20"),
plot.shape("","lineHV","","hv=H8V-8","",[100,28]),
plot.shape("","path","","d=M163,66L167,73L174,69 data-cord=100+70,100-37",""),

plot.shape("","text","sin ","x=148 y=86 stroke=blue"),
plot.shape("","text","cos ","x=124 y=110 stroke=blue"),
plot.shape("","rect","","x=100 y=63 width=70 height=37 stroke=blue"),

plot.shape("","lineHV","","hv=V40 stroke=darkred","",[180,57]),
plot.shape("sec","path","","d=M100,100L180,57 stroke=darkred"),
plot.shape("","textPath","sec","href=sec dx=36 dy=-2 stroke=darkred"),
plot.shape("","text","tan ","x=180 y=82 stroke=darkred"),

plot.shape("","lineHV","","hv=H150 stroke=green","",[100,20]),
plot.shape("","lineHV","","hv=H150 stroke-dasharray=3,8 stroke=green","",[100,100]),
plot.shape("cot2","path","","d=M170,63L241,196 stroke=green"),
plot.shape("","text","cot ","x=162 y=18 stroke=green"),
plot.shape("","textPath","cot ","href=cot2 dx=56 dy=-2 stroke=green"),


plot.shape("csc","path","","d=M100,100L250,20 stroke-dasharray=3,8 stroke=green"),
plot.shape("csc2","path","","d=M100,100L241,196 stroke=green"),
plot.shape("","textPath","csc","href=csc dx=86 dy=-2 stroke=green"),
plot.shape("","textPath","csc","href=csc2 dx=84 dy=-2 stroke=green"),


plot.shape("","lineHV","","hv=V43 stroke=gray","",[100,20]),
plot.shape("","lineHV","","hv=H80 stroke=gray","",[100,57]),
plot.shape("","lineHV","","hv=V80 stroke=gray","",[250,20])
].join(''),'','height:250px')+Kx(

detail('三角函数 Trigonometric',Table([ZLR('函数 定义域 值域 周期 奇偶 对称 单调 凹凸')],[
	ZLR('\\sin x____ℝ____[-1,1]____2π____奇____'+piece(['对称轴 x =kπ+'+frac('π',2,''),'对称中心 x = kπ'])+'____'+piece([['↗',
		zp('2kπ-'+frac('π',2,'')+', 2kπ+'+frac('π',2,''),'[]')],['↘',
		zp('2kπ+'+frac('π',2,'')+', 2kπ+'+frac('3π',2,''),'[]')]])+'____','','____'),
	ZLR('\\cos x____ℝ ____[-1,1]____2π____偶____'+piece(['对称轴 x = kπ','对称中心 x =kπ+'+frac('π',2,'')])+'____'+piece([['↗',
		'[2kπ-π,2kπ]'],['↘','[2kπ, 2kπ+π]']])+'____','','____'),
	
	ZLR('\\tan x = '+frac('\\sin x','\\cos x','')+'____ℝ-'+zp('kπ+'+frac('π',2,''),'{}')+'____ℝ____π____奇____中心 x = kπ____↗ '+
		zp('kπ-'+frac('π',2,'')+', kπ+'+frac('π',2,''))+'____','','____'),
	ZLR('\\cot x = '+frac('\\cos x','\\sin x','')+'____ℝ - \\{kπ\\}____ℝ____π____奇____中心 x = kπ____↘ (kπ, kπ+π)____','','____'),
	
	ZLR('\\sec x = '+frac(1,'\\cos x','')+'____ℝ-'+zp('kπ+'+frac('π',2,''),'{}')+'____ℝ-(-1,1)____2π____偶____同\\cos x____'+piece([['↗',
		zp('2kπ, 2kπ+'+frac('π',2,''),'[)')+'∪'+zp('2kπ+'+frac('π',2,'')+', 2kπ+π','(]')],['↘',
		zp('2kπ-π, 2kπ-'+frac('π',2,''),'[)')+'∪'+zp('2kπ-'+frac('π',2,'')+', 2kπ','(]')]])+'____','','____'),
	ZLR('\\csc x = '+frac(1,'\\sin x','')+'____ℝ - \\{kπ\\}____ℝ-(-1,1)____2π____奇____同\\sin x____'+piece([['↗',
		zp('2kπ+'+frac('π',2,'')+', 2kπ+π','[)')+'∪'+zp('2kπ+π, 2kπ+'+frac('3π',2,''),'(]')],['↘',
		zp('2kπ-'+frac('π',2,'')+', 2kπ','[)')+'∪'+zp('2kπ, 2kπ+'+frac('π',2,''),'(]')]])+'____','','____')


],'wiki'))+


detail('反三角函数 Inverse Trigonometric',Table([ZLR('函数 定义域 值域 奇偶 单调 凹凸')],[
	
	ZLR('\\arcsin x____[-1,1]____'+zp('-'+frac('π',2,'')+','+frac('π',2,''),'[]')+'____奇____↗____','','____'),
	ZLR('\\arccos x____[-1,1]____[0,π]____-____↘____','','____'),
	ZLR(khrA(['\\arctan x','\\arctg x'])+'____ℝ____'+zp('-'+frac('π',2,'')+','+frac('π',2,''))+'____奇____↗____','','____'),
	ZLR(khrA([kxf('arccot')+'~x','\\arcctg x'])+'____ℝ____(0,π)____-____↘____','','____'),
	ZLR(kxf('arcsec')+'~ x____ℝ-(-1,1)____'+zp('0,'+frac('π',2,''),'[)')+'∪'+zp(frac('π',2,'')+',π','(]')+'____-____↗∪____','','____'),
	ZLR(kxf('arccsc')+'~x____ℝ-(-1,1)____'+zp('-'+frac('π',2,'')+',0','[)')+'∪'+zp('0,'+frac('π',2,''),'(]')+'____奇____↘∪____','','____')


],'wiki'))+

detail('双曲函数 Hyperbolic',Table([ZLR('函数 定义域 值域 周期 奇偶 对称 单调 凹凸')],[
	[Eq(['\\sh x = \\frac{e^x-e^{-x}}2',
		'-i \\sin ix']), 'ℝ', '', '','奇','','↗',''],

	[Eq(['\\ch x = \\frac{e^x+e^{-x}}2',
		'\\cos ix']), '[1,+∞)', '', '','偶','',piece([['↗','[0,+∞)'],['↘','(-∞,0]']]),''],

	[Eq(['\\th x = {\\sh x}\\/{\\ch x}',
		'\\frac{e^x-e^{-x}}{e^x+e^{-x}}',
		'\\frac{e^{2x}-1}{e^{2x}+1}',
		'-i \\tan ix']), '(-1,1)', '', '','奇','','↗',''],

	[Eq(['\\cth x = 1\\/{\\th x}',
		'{\\ch x}\\/{\\sh x} = \\frac{e^x+e^{-x}}{e^x-e^{-x}} = \\frac{e^{2x}-1}{e^{2x}+1}',
		'i \\cot ix']), 'ℝ-\\{0\\}', '', '','奇','','↘∪',''],
		
	[Eq(['\\sech x = 1\\/{\\ch x}',
		'\\frac2{e^x+e^{-x}}',
		'\\sec ix']), '(0,1]', '', '','偶','',piece([['↗','(-∞,0]'],['↘','[0,+∞)']]),''],
		
	[Eq(['\\csch x = 1\\/{\\sh x}',
		'\\frac2{e^x-e^{-x}}',
		'i\\csc ix']), 'ℝ-\\{0\\}', '', '','奇','','↘∪',''],




],'wiki'))+

detail('反双角函数 Inverse Hyperbolic',Table([ZLR('函数 定义域 值域 周期 奇偶 对称 单调 凹凸')],[

	[Eq(['\\sh^{-1}x',
		'\\ln(x+\\sqrt{x^2+1})'
		]),
		''
		],


	['\\ch^{-1}x=\\ln(x+\\sqrt{x^2-1})',
		''
		],

	['\\th^{-1}x=1\\/2\\ln\\(x+\\frac{1+x}{1-x}\\)',
		''
		],

	['\\cth^{-1}x=1\\/2\\ln\\(x+\\frac{x+1}{x-1}\\)',
		''
		],

	[Eq(['\\sech^{-1}x=\\ln'+zp('1\\/x+\\sqrt{1\\/{x^2}-1}'),
		'\\ln'+zp(kfrac(['1+\\sqrt{1-x^2}','x'])),
		'\\ch^{-1}1\\/x',
		'\\ln (1+'+kroot('1-x^2')+') - \\ln x'
	]),
		''
		],

	[Eq(['\\csch^{-1}x',
		'\\ln'+zp('1\\/x+\\sqrt{1\\/{x^2}+1}'),
		'\\ln'+zp(kfrac(['1+\\sqrt{1+x^2}⋅\\sgn x','x'])),
		'\\sh^{-1}1\\/x',
		'\\ln |1+'+kroot('1+x^2')+'⋅\\sgn x| - \\ln |x|'
	]),
		'',
		],

],'wiki'))+

detail('三角积分函数 Trigonometric Integral',Table([ZLR('函数 定义域 值域 周期 奇偶 对称 单调 凹凸')],[
	[Eq(['正弦积分\\Si x',
		intl('\\sinc t','0','x','t',0,''),
		intl('{\\sin t}\\/t','0','x','t',0,'')
	]), '  '],
	
	[Eq(['\\si x',
		'-'+intl('\\sinc t','x','+','t',0,''),
		'-'+intl('{\\sin t}\\/t','x','+','t',0,''),
		'\\Si x- π\\/2'
	]), '  '],
	
	[Eq(['余弦积分\\Ci x',
		'-'+intl('{\\cos t}\\/t','x','+','t',0,''),
		'γ+\\ln x + '+intl(kfrac(['\\cos t-1','t']),'0','x','t',0,'')
	]), '|\\Arg x|<π'],


	[['指数积分\\text{Ei} ~x',
		'='+intl('\\frac{e^{-xt}}t','1','+','t',0,''),
		Eq(['\\text{Ei} (ix)','i'+zp('\\Si x- π\\/2')+'-\\Ci x','i\\si x - \\ci x ~(x>0)'])
	].join(kbr), '|\\Arg x|<π'],

],'wiki'))+

detail('双曲积分函数 Hyperbolic Integral',Table([ZLR('函数 定义域 值域 周期 奇偶 对称 单调 凹凸')],[
	[Eq(['\\Shi x',
		intl('{\\sh t}\\/t','0','x','t',0,''),
		'-i\\Si ix'
	]), '  '],
	

	[Eq(['\\text{Chi} x',
		'-'+intl('{\\ch t}\\/t','x','+','t',0,''),
		'γ+\\ln x + '+intl(kfrac(['\\ch t-1','t']),'0','x','t',0,'')
	]), '|\\Arg x|<π'],


],'wiki'))


);