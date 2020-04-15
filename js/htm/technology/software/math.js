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



	[href(Hs+'www.sosmath.com','SOS Math'),gM(['Web']),'free resource for math review material from Algebra to Differential Equations! The perfect study site for high school, college students and adult learners. Get help to do your homework, refresh your memory, '+
		href(Hs+'www.sosmath.com/cyberexam/cyber.html','prepare for a test')+', ....'],


	[href(H+'www.mathcurve.com','Math Curve'),gM('Web'),''],
	[href(H+'www.2dcurves.com','2D Curves'),gM('Web'),''],
	[href(Hs+'jsxgraph.org','JSXGraph'),gM('Web'),'interactive geometry, function plotting, charting, and data visualization'+href(Hs+('jsxgraph.org/wiki/index.php/Category:Examples'),'Examples')],
	[href(Hs+'start.sketchometry.org','Sketchometry'),gM('Web'),'Sketch Geometry - Sketchometry,convert hand drawings into geometric constructions'],


	[href(Hs+'csacademy.com/app/graph_editor/','Graph Editor'),'','CSAcademy is a next generation educational platform. Discover computer science with interactive lessons and a seamless online code editor.'],
],'TBrc'))+



detail('JS',Table([i18(ZLR('Tool Type Summary'))],[


	[github('arguiot/Descartes'),'JS + PNG','A small plotting JavaScript library, made for '+github('arguiot/TheoremJS')+' - Math framework'],
	[href(Hs+'kisonecat.com/phase-plot/','Phase Plot'),'JS + GLSL','Plot complex functions'+github('kisonecat/phase-plot')],
	[github('josdejong/mathjs'),'',' 数学JS插件，支持多种运算，有各种扩展增强版本 '+href(Hs+'jsbin.com/devacu/edit?html,output','在线演示')
		+ul(hrefA('https://mathjs.org/docs',ZLR('expressions/syntax.html reference/functions.html')))],

	[github('benfred/contour_plot','','Contour Plot'),'D3 Plugin',gM('Contour')+' - draw contour plots of 2D functions'],

	[href(H+'sylvester.jcoglan.com/docs.html','Sylvester'),'','Vector, Matrix, Line, Plane '+github('jcoglan/sylvester')],

	[github('Khan/KAS'), '','KAS from khan academy, lightweight CAS for comparing expressions and equations '+github('Khan/kmath')],


	[github('HarryStevens/geometric'),'','Geometric.js - library for doing geometry'],


	[github('lvandeve/jmat'),'','jmat.js - Complex special functions, numerical linear algebra and statistics '+href(Hs+'lodev.org/jmat/jmat_demo.html','Demo')],


	[href(H+'victorjs.org','victor.js'),'','2D vector maths library'],

	
	[href(H+'algebrite.org','Algebrite.js'),'','symbolic computation '+href(H+'algebrite.org/docs/latest-stable/reference.html',gM('Function'))],

	[github('nicolewhite/algebra.js'),'','Build, display, and solve algebraic equations'],

	[github('numbers/numbers.js'),'','Basic calculations, Calculus, Matrix Operations, Prime Numbers, Statistics'],

	[github('silentmatt/expr-eval'),'','Mathematical expression evaluator'],

	[github('infusion/Fraction.js'),'',gM('Fraction')],

	[github('infusion/Polynomial.js'),'',gM('Polynomial')],


	[github('socraticorg/mathsteps'),'','mathsteps from socratic - Step by step math solutions'],

	
	[href(H+'jsdraw2dx.jsfiction.com','jsDraw2DX'),'','SVG Graphics Library'],

	[github('toji/gl-matrix'),'','glMatrix - perform vector and matrix operations stupidly fast! By hand-tuning each function for maximum performance and encouraging efficient usage patterns through API conventions, glMatrix will help you get the most out of your browsers Javascript engine'],
	
],'TBrc'))+

detail('LaTeX',Table([i18(ZLR('Tool Type Summary'))],[


	[github('arguiot/Descartes'),'JS + PNG','A small plotting JavaScript library, made for '+github('arguiot/TheoremJS')+' - Math framework'],
	[href(Hs+'katex.org','KaTeX'),'JS','可汗学院出品的数学公式渲染库，也可以在线编辑公式 '+github('KaTeX/KaTeX')],
	[github('pandao','editor.md/examples/katex.html','KaTeX Editor'),gM('Web'),'KaTeX的一个开源实现，支持Markdown'],
	[href(Hs+'mathjax.org','MathJax'),'JS','美国数学会的开源引擎库'],

	[href(H+'www.wiris.com/editor/demo/en/','MathType'),gM('Client'),''],

	[href(H+'asciimath.org','Ascii Math'),gM('Web'),'用ASCII字符表示数学公式'],
	[href(H+'latex.91maths.com','91maths'),gM('Web'),'在线LaTeX公式编辑器（MathJax渲染）'],
	[href(H+'latex.codecogs.com/eqneditor/editor.php','codecogs'),gM('Web'),'在线LaTeX公式编辑器（png、gif图片输出）'],

	[href(Hs+'www.mathcha.io','mathcha'),gM('Web'),'公式文档笔记'],

	[href(Hs+'webdemo.myscript.com/views/math/index.html','myscript'),gM('Web'),'手写识别公式（MathML、LaTeX、可视化输出）'],

	[href(Hs+'www.mathquill.com','mathquill'),gM('Web'),'所见即所得 '+github('mathquill/mathquill')],

	[github('Khan/math-input'),gM('Web'),'math-input = react + redux + mathquill '],
	[href(Hs+'mathlive.io/examples/','MathLive'),'JS',github('arnog/mathlive')],

	[href(H+'www.jmeditor.com/jme/demo.html','JMEditor'),'JS','在线公式编辑器'],

	[href(Hs+'mathscribe.com/author/jqmath.html','jqMath'),'JS','a JavaScript module that makes it easy to put formatted mathematical expressions in web pages'],

	[href(H+'www.forkosh.com/mathtex.html','mathTeX'),'CGI','a program that displays math on the web'],
	[href(H+'www.ams.org/publications/authors/tex/amslatex','AMS-LaTeX'),'','an extension package for LaTeX'],

	[ul([href(H+'www.unics.uni-hannover.de/nhtcapri/mathematics.html','Formula in HTML4'),
	href(H+'www.unics.uni-hannover.de/nhtcapri/mathematics.html','HTML with CSS'),
	href(Hs+'mathscribe.com/mathscribe/test/tests.html?!perf','MathML Test')]),'HTML4',gM('Deprecated')],
],'TBrc'))+

detail(gM('Client'),Table([i18(ZLR('Tool Type Summary'))],[

	[href(Hs+'sagecell.sagemath.org','Sage'),gM(['Web + Client']),github('sagemath/sage')+' '+github('sagemath/sagecell')+' Sage Math Cell,	easy-to-use web interface to SageMath. It allows embedding Sage computations into any webpage'],

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

	[href(H+'www.mathgrapher.com','mathgrapher'),gM(['Client']),'The mathematical graphing tool for students, scientists and engineers. Draw and analyse Functions and Data in 2D and 3D. Draw surface graphs, contour plots and cross-sections through contour plots. Includes linear and nonlinear curve fitting, integration and analysis of coupled ordinary differential equations, iteration and analysis of multi-dimensional maps, matrix operations, Lindenmayer systems and soms cellalar automata.'],

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

