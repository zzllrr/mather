/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

technology['Software/Math']=Table([i18(ZLR('Tool Type Summary'))],[

	[href(Hs+'jsxgraph.org','JSXGraph'),'Web','interactive geometry, function plotting, charting, and data visualization'+href(Hs+('jsxgraph.org/wiki/index.php/Category:Examples'),'Examples')],
	[href(Hs+'start.sketchometry.org',i18('Sketch Geometry')+' - Sketchometry'),'Web','convert hand drawings into geometric constructions'],
	[github('arguiot/Descartes'),'JS + PNG','A small plotting JavaScript library, made for '+github('arguiot/TheoremJS')+' - Math framework'],
	[href(Hs+'kisonecat.com/phase-plot/',i18('Phase')+' - Phase Plot'),'JS + GLSL','Plot complex functions for '+github('kisonecat/phase-plot')],


	[github('benfred/contour_plot','',i18('Contour')+' - Contour Plot'),'D3 Plugin','draw contour plots of 2D functions'],

	[href(Hs+'geogebra.org','Geogebra(GGB)'),'Web + APP','Geometry + Algebra = Geogebra'+br+
		ul(hrefA('geogebra.org',ZLR('Graphing Calculator CAS Geometry 3D Notes Classic Classic#Probability Classic#Spreadsheet')))+br+
		hrefA('geogebra.org',ZLR('Wiki Dev'),1).join(' ')],

	[href(Hs+'desmos.com','Desmos'),'Web + APP',
		ul(hrefA('desmos.com',ZLR('Calculator Geometry FourFunction Scientific Accessibility Testing')))+br+
		hrefA('desmos.com',ZLR('Learn Teacher'),1).join(' ')+br+
		[href(Hs+'desmos.com/api/v1.3/docs/index.html#document-collected-examples','Examples'),href(Hs+'desmos.com/api/','API')].join(' ')],


	[href(Hs+'mathway.com/graph','MathWay Graph'),'Web','like Desmos and Geogebra, but supports display of more complicated formula'],

	[href(Hs+'mathjs.org/docs/reference/functions.html'),'JS',github('josdejong/mathjs')+' 数学JS插件，支持多种运算，有各种扩展增强版本 '+href(Hs+'jsbin.com/devacu/edit?html,output','在线演示')],



	[github('mathjax/MathJax-demos-web'),'Web','MathJaX Demos, TEX + CHTML + SVG + MathML'],

	[href(H+'www.mmrc.iss.ac.cn/mmp/index.htm','数学机械化自动推理平台'),'Client',href(H+'mmrc.iss.ac.cn','中科院-数学机械化重点实验室')+'-数学机械化自动推理平台(MMP) '+
	ul(hrefA('mmrc.iss.ac.cn/mmp/973soft',ZLR('MMP_Geometer.zip MMP_Blending.rar MMP_Robot.zip MMP_Linkage.zip example.txt')))],

	[href(H+'cocoa.dima.unige.it/WhatIsCoCoA/WhatIsCoCoA-Chinese.html','CoCoA'),'Client',gM('Commutative Algebra')],

	[github('Macaulay2/M2'),'Client',gM(['Algebraic Geometry','Commutative Algebra'])+' '+href(H+'macaulay2.com','Macaulay2')],

	[github('gap-system/gap'),'Client','GAP - Groups, Algorithms, Programming '+gM('Computational Discrete Algebra')],
	[href(H+'magma.maths.usyd.edu.au/calc/','Magma'),'Web',gM(['Algebra','Number Theory','Algebraic Geometry','Algebraic Combinatorics'])],

	[href(H+'www.singular.uni-kl.de','Singular'),'',gM(['Commutative Algebra','Non-Commutative Algebra','Algebraic Geometry','Singularity Theory'])+' '+github('Singular/Sources')],

	[href(Hs+'www.wolfram.com/mathematica/','Mathematica'),gM(['Commercial','Client']),''],
	[href(Hs+'www.maplesoft.com','Maple'),gM(['Commercial','Client']),''],
	[href(Hs+'www.mathworks.com/products/matlab.html','MATLAB'),gM(['Commercial','Client']),href(Hs+'ww2.mathworks.cn/products/matlab.html','Matlab 中文网站')],
	[href(Hs+'www.mathcad.com','MathCAD'),gM(['Commercial','Client']),''],

	[href(Hs+'www.minitab.com','Minitab'),gM(['Commercial','Client']),gM('Statiscal')],


	[href(Hs+'zh.numberempire.com','Number Empire'),'Web','数字帝国 - 在线计算工具'],

	['Ansys 有限元','Client',''],
	['Julia','Client','开源软件'],
	['Lindo','Client','线性规划'],
	['Lingo','Client','线性规划'],




],'TBrc')+
detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[



],'TBrc'),1);

