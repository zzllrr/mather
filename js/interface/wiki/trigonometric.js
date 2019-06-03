/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Trigonometric']=Kx(

detail('三角函数 Trigonometric',Table([ZLR('函数 定义域 值域 周期 奇偶 对称 单调 凹凸')],[
	ZLR('\\sin x____ℝ____[-1,1]____2π____奇____'+piece(['对称轴 x =kπ+'+frac('π',2,''),'对称中心 x = kπ'])+'____'+piece([['↗',
		lrp('[','2kπ-'+frac('π',2,'')+', 2kπ+'+frac('π',2,''),']','')],['↘',
		lrp('[','2kπ+'+frac('π',2,'')+', 2kπ+'+frac('3π',2,''),']','')]])+'____','','____'),
	ZLR('\\cos x____ℝ ____[-1,1]____2π____偶____'+piece(['对称轴 x = kπ','对称中心 x =kπ+'+frac('π',2,'')])+'____'+piece([['↗',
		'[2kπ-π,2kπ]'],['↘','[2kπ, 2kπ+π]']])+'____','','____'),
	
	ZLR('\\tan x = '+frac('\\sin x','\\cos x','')+'____ℝ-'+lrp('\\{','kπ+'+frac('π',2,''),'\\}','')+'____ℝ____π____奇____中心 x = kπ____↗ '+
		lrp('','kπ-'+frac('π',2,'')+', kπ+'+frac('π',2,''),'','')+'____','','____'),
	ZLR('\\cot x = '+frac('\\cos x','\\sin x','')+'____ℝ - \\{kπ\\}____ℝ____π____奇____中心 x = kπ____↘ (kπ, kπ+π)____','','____'),
	
	ZLR('\\sec x = '+frac(1,'\\cos x','')+'____ℝ-'+lrp('\\{','kπ+'+frac('π',2,''),'\\}','')+'____ℝ-(-1,1)____2π____偶____同\\cos x____'+piece([['↗',
		lrp('[','2kπ, 2kπ+'+frac('π',2,''),')','')+'∪'+lrp('(','2kπ+'+frac('π',2,'')+', 2kπ+π',']','')],['↘',
		lrp('[','2kπ-π, 2kπ-'+frac('π',2,''),')','')+'∪'+lrp('(','2kπ-'+frac('π',2,'')+', 2kπ',']','')]])+'____','','____'),
	ZLR('\\csc x = '+frac(1,'\\sin x','')+'____ℝ - \\{kπ\\}____ℝ-(-1,1)____2π____奇____同\\sin x____'+piece([['↗',
		lrp('[','2kπ+'+frac('π',2,'')+', 2kπ+π',')','')+'∪'+lrp('(','2kπ+π, 2kπ+'+frac('3π',2,''),']','')],['↘',
		lrp('[','2kπ-'+frac('π',2,'')+', 2kπ',')','')+'∪'+lrp('(','2kπ, 2kπ+'+frac('π',2,''),']','')]])+'____','','____')


],'wiki').replace(/\n/g,br))+

detail('三角函数（图示）',Table([ZLR('名称 记法 定义 性质')],[
//	plot.shape('svg_trig','svg',[
	[
	[
	'shape("","circle","","r=80 cx=100 cy=100")',
	'shape("","arc","","x1=120 y1=90 x2=122 y2=100 rx=10 c=1")',
	'shape("","text","O","x=90 y=112 rotate=20")',
	'shape("","text","θ","x=120 y=95 rotate=20")',
	'shape("","lineHV","","hv=H8V-8","",[100,28])',
	'shape("","path","","d=M163,66L167,73L174,69 data-cord=100+70,100-37","")',

	'shape("","text","\\sin ","x=150 y=86 stroke=blue")',
	'shape("","text","\\cos ","x=124 y=110 stroke=blue")',
	'shape("","rect","","x=100 y=63 width=70 height=37 stroke=blue")',

	'shape("","lineHV","","hv=V40 stroke=darkred","",[180,57])',
	'shape("sec","path","","d=M100,100L180,57 stroke=darkred")',
	'shape("","textPath","sec","href=sec dx=36 dy=-2 stroke=darkred")',
	'shape("","text","\\tan ","x=180 y=82 stroke=darkred")',

	'shape("","lineHV","","hv=H150 stroke=green","",[100,20])',
	'shape("","lineHV","","hv=H150 stroke-dasharray=3,8 stroke=green","",[100,100])',
	'shape("\\cot 2","path","","d=M170,63L241,196 stroke=green")',
	'shape("","text","\\cot ","x=162 y=18 stroke=green")',
	'shape("","textPath","\\cot ","href=\\cot 2 dx=56 dy=-2 stroke=green")',


	'shape("csc","path","","d=M100,100L250,20 stroke-dasharray=3,8 stroke=green")',
	'shape("csc2","path","","d=M100,100L241,196 stroke=green")',
	'shape("","textPath","csc","href=csc dx=86 dy=-2 stroke=green")',
	'shape("","textPath","csc","href=csc2 dx=84 dy=-2 stroke=green")',


	'shape("","lineHV","","hv=V43 stroke=gray","",[100,20])',
	'shape("","lineHV","","hv=H80 stroke=gray","",[100,57])',
	'shape("","lineHV","","hv=V80 stroke=gray","",[250,20])'
	].join(''),'','','']

],'wiki').replace(/\n/g,br))+

detail('反三角函数 Inverse Trigonometric',Table([ZLR('函数 定义域 值域 奇偶 单调 凹凸')],[
	
	ZLR('\\arcsin x____[-1,1]____'+lrp('[','-'+frac('π',2,'')+','+frac('π',2,''),']','')+'____奇____↗____','','____'),
	ZLR('\\arccos x____[-1,1]____[0,π]____-____↘____','','____'),
	ZLR(khrA(['\\arctan x','\\arctg x'])+'____ℝ____'+lrp('','-'+frac('π',2,'')+','+frac('π',2,''),'','')+'____奇____↗____','','____'),
	ZLR(khrA([kxf('arccot')+'~x','\\arcctg x'])+'____ℝ____(0,π)____-____↘____','','____'),
	ZLR(kxf('arcsec')+'~ x____ℝ-(-1,1)____'+lrp('[','0,'+frac('π',2,''),')','')+'∪'+lrp('(',frac('π',2,'')+',π',']','')+'____-____↗∪____','','____'),
	ZLR(kxf('arccsc')+'~x____ℝ-(-1,1)____'+lrp('[','-'+frac('π',2,'')+',0',')','')+'∪'+lrp('(','0,'+frac('π',2,''),']','')+'____奇____↘∪____','','____')


],'wiki').replace(/\n/g,br))

);