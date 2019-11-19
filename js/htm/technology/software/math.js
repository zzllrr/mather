/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

technology['Software/Math']=detail('Web / APP',Table([i18(ZLR('Tool Type Summary'))],[


	[href(Hs+'geogebra.org','Geogebra(GGB)'),'Web + APP','Geometry + Algebra = Geogebra'+br+
		ul(hrefA('geogebra.org',ZLR('Graphing Calculator CAS Geometry 3D Notes Classic Classic#Probability Classic#Spreadsheet')))+br+
		hrefA('geogebra.org',ZLR('Wiki Dev'),1).join(' ')],

	[href(Hs+'desmos.com','Desmos'),'Web + APP',
		ul(hrefA('desmos.com',ZLR('Calculator Geometry FourFunction Scientific Accessibility Testing')))+br+
		hrefA('desmos.com',ZLR('Learn Teacher'),1).join(' ')+br+
		[href(Hs+'desmos.com/api/v1.3/docs/index.html#document-collected-examples','Examples'),href(Hs+'desmos.com/api/','API')].join(' ')],


	[href(Hs+'mathway.com/graph','MathWay Graph'),gM('Web'),'更加高级的函数支持'],


	[github('mathjax/MathJax-demos-web'),gM('Web'),'MathJaX Demos, TEX + CHTML + SVG + MathML'],


	[href(H+'magma.maths.usyd.edu.au/calc/','Magma'),gM('Web'),gM(['Algebra','Number Theory','Algebraic Geometry','Algebraic Combinatorics'])],

	[href(Hs+'zh.numberempire.com','Number Empire'),gM('Web'),'数字帝国 - 在线计算工具'],
	[href(Hs+'www.wolframalpha.com','Wolfram Alpha'),gM('Web'),''],
	[href(Hs+'www.mathnotepad.com','Math Notepad'),gM(['Web']),'Math Notebook'],

	[href(Hs+'jsxgraph.org','JSXGraph'),gM('Web'),'interactive geometry, function plotting, charting, and data visualization'+href(Hs+('jsxgraph.org/wiki/index.php/Category:Examples'),'Examples')],
	[href(Hs+'start.sketchometry.org','Sketchometry'),gM('Web'),'Sketch Geometry - Sketchometry,convert hand drawings into geometric constructions'],
],'TBrc'))+



detail('JS',Table([i18(ZLR('Tool Type Summary'))],[


	[github('arguiot/Descartes'),'JS + PNG','A small plotting JavaScript library, made for '+github('arguiot/TheoremJS')+' - Math framework'],
	[href(Hs+'kisonecat.com/phase-plot/','Phase Plot'),'JS + GLSL','Plot complex functions'+github('kisonecat/phase-plot')],
	[href(Hs+'mathjs.org/docs/reference/functions.html','math.js'),'',github('josdejong/mathjs')+' 数学JS插件，支持多种运算，有各种扩展增强版本 '+href(Hs+'jsbin.com/devacu/edit?html,output','在线演示')],

	[github('benfred/contour_plot','','Contour Plot'),'D3 Plugin',gM('Contour')+' - draw contour plots of 2D functions'],

	[href(H+'sylvester.jcoglan.com/docs.html','Sylvester'),'','Vector, Matrix, Line, Plane'],

],'TBrc'))+

detail('LaTeX',Table([i18(ZLR('Tool Type Summary'))],[


	[github('arguiot/Descartes'),'JS + PNG','A small plotting JavaScript library, made for '+github('arguiot/TheoremJS')+' - Math framework'],
	[href(Hs+'katex.org','Phase Plot'),'JS','可汗学院出品的数学公式渲染库，也可以在线编辑公式 '+github('KaTeX/KaTeX')],
	[github('pandao','editor.md/examples/katex.html','KaTeX Editor'),gM('Web'),'KaTeX的一个开源实现，支持Markdown'],
	[href(Hs+'mathjax.org','MathJax'),'JS','美国数学会的开源引擎库'],

	[href(H+'www.wiris.com/editor/demo/en/','MathType'),gM('Client'),''],

	[href(H+'asciimath.org','Ascii Math'),gM('Web'),'用ASCII字符表示数学公式'],
	[href(H+'latex.91maths.com','91maths'),gM('Web'),'在线LaTeX公式编辑器（MathJax渲染）'],
	[href(H+'latex.codecogs.com/eqneditor/editor.php','codecogs'),gM('Web'),'在线LaTeX公式编辑器（png、gif图片输出）'],

	[href(Hs+'www.mathcha.io','mathcha'),gM('Web'),'公式文档笔记'],

	[href(Hs+'webdemo.myscript.com/views/math/index.html','myscript'),gM('Web'),'手写识别公式（MathML、LaTeX、可视化输出）'],

	[href(Hs+'www.mathquill.com','mathquill'),gM('Web'),'所见即所得 '+github('mathquill/mathquill')],
],'TBrc'))+

detail(gM('Client'),Table([i18(ZLR('Tool Type Summary'))],[

	[href(Hs+'sagecell.sagemath.org','Sage'),gM(['Web + Client']),github('sagemath/sage')],

	[href(H+'www.open-axiom.org','Open Axiom')+' V2013.4.1',gM(['Client']),github('GabrielDosReis/open-axiom')],
	[href(H+'speqmath.com','SpeQ Mathematics'),gM(['Client']),'SpeQ is a small, extensive mathematics program with a simple, intuitive interface. All calculations are entered in a sheet. In there you can freely add, edit and execute calculations. SpeQ supports all common functions, constants, and units. Furthermore, you can define custom variables and functions, and plot graphs of your functions.'],

	[href(Hs+'www.gnu.org/software/octave/','GNU Octave'),gM('Client'),'featuring a high-level programming language, primarily intended for numerical computations. Octave helps in solving linear and nonlinear problems numerically, and for performing other numerical experiments using a language that is mostly compatible with MATLAB.'],
	
	[href(H+'www.singular.uni-kl.de','Singular'),gM('Client'),gM(['Commutative Algebra','Non-Commutative Algebra','Algebraic Geometry','Singularity Theory'])+' '+github('Singular/Sources')],

	[href(H+'cran.r-project.org/manuals.html','R'),gM(['Client']),gM('Statistical')],

	[href(H+'www.scilab.org','Scilab'),gM(['Client']),''],
	[href(Hs+'julialang.org','Julia'),gM(['Client']),github('JuliaLang/julia')],

	[href(Hs+'software.nasa.gov/software/LAR-16804-GS','Nastran'),gM(['Client']),gM('Finite Element Analysis')+' '+github('nasa/NASTRAN-95')+'NASTRAN is a finite element analysis program that was originally developed for NASA in the late 1960s under U.S. government funding for the aerospace industry. The software suite provides engineers a comprehensive simulation solution for insight into structural behavior. NASTRAN source code is integrated in a number of different software packages, which are distributed by a range of companies.'],
	
	[href(H+'www.mmrc.iss.ac.cn/mmp/index.htm','MMP'),gM('Client'),href(H+'mmrc.iss.ac.cn','中科院-数学机械化重点实验室')+'-数学机械化自动推理平台(MMP) '+
	ul(hrefA('mmrc.iss.ac.cn/mmp/973soft',ZLR('MMP_Geometer.zip MMP_Blending.rar MMP_Robot.zip MMP_Linkage.zip example.txt')))],

	[href(H+'cocoa.dima.unige.it/WhatIsCoCoA/WhatIsCoCoA-Chinese.html','CoCoA'),gM('Client'),gM('Commutative Algebra')],

	[github('Macaulay2/M2'),gM('Client'),gM(['Algebraic Geometry','Commutative Algebra'])+' '+href(H+'macaulay2.com','Macaulay2')],

	[github('gap-system/gap'),gM('Client'),'GAP - Groups, Algorithms, Programming. '+gM('Computational Discrete Algebra')],

],'TBrc'))+



detail(gM('Commercial Software'),Table([i18(ZLR('Tool Type Summary'))],[
	
	[href(Hs+'snip.mathpix.com','Mathpix Snip'),gM(['Web + APP']),'OCR, Image → LaTeX '],

	['Ansys',gM(['Client']),gM('Finite Element Analysis')],

	['Lindo',gM(['Client']),gM('Linear Programming')],
	['Lingo',gM(['Client']),gM('Linear Programming')],
	['SAS',gM(['Client']),gM('Statistical')],
	['SPSS',gM(['Client']),gM('Statistical')],
	['The Geometer\'s Sketchpad',gM(['Client']),gM('Geometry')],
	['超级画板',gM(['Client']),gM('Geometry')],

	[href(Hs+'www.wolfram.com/mathematica/','Mathematica'),gM(['Client']),''],
	[href(Hs+'www.maplesoft.com','Maple'),gM(['Client']),''],
	[href(Hs+'www.mathworks.com/products/matlab.html','MATLAB'),gM(['Client']),href(Hs+'ww2.mathworks.cn/products/matlab.html','Matlab 中文网站')],
	[href(Hs+'www.mathcad.com','MathCAD'),gM(['Client']),''],
	[href(Hs+'www.minitab.com','Minitab'),gM(['Client']),gM('Statistical')],


],'TBrc'))+


detail(gM('Handy Tool'),Table([i18(ZLR('Tool Type Summary'))],[
	[href(Hs+'www.mypiday.com','My PI Day'),'Web','Wolfram Alpha 制作的一个小工具，查找任意一段数字（例如生日号码）在圆周率小数第多少位出现'],
],'TBrc'))+


detail(gM('Software List'),Table([i18(ZLR('Tool Type Summary'))],[



	[href(Hs+'www.openmath.org/software/','Open Math Software List'),gM('List'),''],
	[href(Hs+'www.w3.org/wiki/Math_Tools','W3C Math Tool List'),gM('List'),''],




],'TBrc'))

;

