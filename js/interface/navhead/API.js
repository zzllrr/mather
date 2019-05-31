/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

tooltip['API']=[


	{'Math obj':[
		{'Entity 实体':[{'数':'Num','整数':'Integer','小数':'Decimal','分数':'Frac','根数':'Root',
			'矩阵':'Mtrx',
		
			'多项式':'Polynomial',
			'命题':'Prop',
			'集合':'Set',
			'置换':'Perm',
			'关系':'Rlt',
			'数学表达式':'Mfn',
			'函数':'Fun',
		}]},
		{'Function.js':[{'实体':'Fun Mfn Polynomial'},
			{'识别':'eType oType'},
			{'运算符变换':'opneg opinv'},
			{'上下文处理':'pptd pppow visiplus visiplusk simFactTimes simTimesOf1 simPowOf1 simFracOf1'},
		
			{'符号计算':'plus minus times divide pow square cubic sqrt cbrt pmtds sums sumx kap fmin fmax'},
			{'方程':'equationsMS equationsMX equationM equationA'},
			
		]},
		
		{'Num.js':[{'实体':'Integer Decimal Frac Root Num'},
				{'识别':'nis nAis nisd nisVd nisVid nisn'},
				{'正则':'nRegofab nReg2dot nReg2digits nReg2A'},
				{'转换':'percnt2n n2percnt n2frac n2ArabBig n2Roman Roman2n'},
				{'精度':'digi Nsqrt'},
		]},
		
		{'Prime.js':[{'实体':''},
			{'素数集合':'PrimeA PrimeAlist PrimeAlistRowland PrimeAlistBC PrimeNumerator'},
			{'识别':'isPrime feet1'},
			{'因子分解':'tMod factor2 factor factorA factorA2n factors cntfactors Rho Factor odd odd_5'},

			{'同余':'Mod modP multiMod factorMod'},
			{'数位性质':'lastDigitsOfPower last0OfFact'},
			{'多元运算':'gcd lcm gcdFrac lcmFrac lcp'},
			{'数论函数':'Primorial'},
			{'数和分解':'SUMs'},
		]},

		{'Statistic.js':[{'实体':''},
			{'概率':''},
			{'统计':'count2pow'},
			{'序关系':'floor ceil subA'},
		]},

		{'Geometry.js':[{'实体':''},
			{'多边形':'gon'},

			
		]},
		
		{'Proposition.js':[{'实体':'Prop'},
			{'功能':''},
		]},
		{'Set.js':[{'实体':'Set'},
			{'功能':''},
		]},
		{'Permutation.js':[{'实体':'Perm'},
			{'IO':'PfS PtS'},
			{'排列组合':'Fact Fact2 Permut Combin FactN PermutN CombinN RandomPermutN RandomCombinN RandomCombinA'},
			{'逆序':'nInvOrder nInvOrder_'},

		]},
		{'Matrix.js':[{'实体':'Mtrx'},

		]},
		{'Relation.js':[{'实体':'Rlt'},
			{'功能':''},
		]},
		
		
	]},

	{'zlr.js':[
		{'URL':[
			{'常量':[
				{'通用':'H Hs w3c xmlns xhtml xmlnsxlink webStore'},
				{'小乐':'ZRL ZRC ZIG ZIL ZIV ZAin1 HOM'},
			]},
			{'正则':'uri uriRe'},
			{'解析':'H_u H_w H_w1 H_W H_W1 H_d H_h H_a H_o urlTran picSrcNameExt'},
			{'封装':'imgFav pathTxt fn0 fn1 fna fna0 fnb fnc fnd fne fnt fnx fnr fns'},
			{'转换':'dataURItoBlob'},
			{'接口':'FNS Admin txt2audio xhrcb'},
		]},
	
	
		{'CSS':[
			{'颜色':'H5Colors H5Color hex2rgba rgb2hex RandomColor'},
			{'碎片':'bgfrom bgto grad'},
			{'字体':'isSupportFontFamily'},
		]},
	
		{'DOM':[
			{'查找':'Node urlArr'},
			{'操作':'Scroll scrollH scrollW titleRe bodyFocus OffSet textareaAdd'},
			{'输出':'saveText saveAs svgAs printF tableArr'},
			{'调试':'consolelog'}
		]},
	
		{'HTML':[
			{'格式化':'html2txt html2html altTxt Engin txt2A blking ubb2html md2html'},
			{'元素':[
				{'过渡':'br hr prog'},
				{'结构':'SCtv DCtv itv detail ol ul dl Options OptGrps subReg tmb Table'},
				{'样式':'scRed scGain sci scit scib scil scir scbt sclr scbox scblr sctlr'},
				{'用途':'imgdatasrc num txa mark del href scHotk q_key sceg sceg2 zMath'},
			]},
			{'碎片':'strop strchkbx0 strbtn btnGo imgSRC SC sC sc DC dC dc'},
			{'属性':'chked seled attr2dataset attr2jSon jSon2attr'},
			{'兼容LaTeX':[
				{'上下标':'sup sub msup msub msups msubs subsup msubsup Msubsup'},
				{'括符':'lp rp lrp'},
				{'大型数学式':'lim sum prod intl mtrx'},
				{'数学运算':'frac mfrac mfracs root mroots mod'},
			]},

			{'数学关系':'re rel imply eqv eq0 lt gt'}
		]},

		{'LaTeX':[
			{'颜色':'fcb '},
			{'字体':'kxf kxc ksz'},
			{'过渡':'kbr kbr2'},
			{'HTML元素':[
				{'过渡':'kbrA khrA'},
				{'结构':'ksc kdc zdetail kdetail fdetail kol kul kdl Kx KxA kxA'},
				{'用途':''},
			]},
			{'规范化':'kx'},
			{'运算符':'kos'},
			{'标记符':'kxo kxu kancel'},
			{'括符':'$A $B boxed kbox hp lrpfrac genfrac zp pp'},
			{'数学运算':'kroot kfrac kfraczp kxAfrac difn Opr'},
			{'数学结构':'ksups ksubs binom zmtrx kmtrx zarray ztable det zdet kdet piece'},
			{'数学关系':'kmod eq eqM Eq EqA'},
			
		]},

		{'SVG':[
			{'常量':'svgs'},
			{'封装':'svgf'}
			
		]},
		
		{'JSON':[
			{'解析':'jSon attr2jSon'},
			{'输出字符串':'jSoff jSon2attr jSon2str'},
		]},

		{'jQuery':[
			{'选择器':zlr("$.expr[':'].",'top bottom left right fixed abs encoded number date time color range search commentRss creator')},
			{'扩展':'$.fn.twinkle'},
		]},
		
		{'正则':[
			{'CSS':'textCssImgRe cssImgRe cssImgReg cssLinkRe'},
			{'图片':'imgReg hrefImgRe textImgRe imgPre imgPreRe imgPreReg'},
			{'数字':'digiReg'},
			{'English':'enPhrase'},
			{'汉字':'hanziRe hanziCoreRe'},
			{'标点':'enPunc hanziPunc punc'},
			{'字体':'fontRe fontHan'},
			{'Data':'imgPreReData fontReData txtPreReData'},
			{'转义':'regReg'},
		]},

		{'数组':[
			{'识别':'isArr'},
			{'生成':'ZLR copyA concat split zstrx'},
			{'序列':'seqA seqsA cartestian cartt carttNext carttPrev'},
			{'增删':'uniPush Uniq'},
			{'提取':'Arri ArrI subMtrx'},
			{'运算':'Arrf Arrfc ArrfcA Arr1 Arr_1 tableT'},
			{'拼接':'zlrA zlrA2 zlrA3 snake'},
			{'输出字符串':'zlr zlr2 zlr3 ZLR3'},
			{'排序':'sortBy sort2'},
		]},

		
		{'字符':[
			{'识别':'isStr isObj isVar hasVar'},
			{'编码':'Base64 UTF8 XML ZML'},
			{'特殊字符':'fCC Latin entity'},
			{'翻译':'gM sbc2dbc dbc2sbc zh2big'},
			{'数字转换':'n2Zh Zh2n nTrim wrapTrim'},
			{'表格':'cell2cols cell2rows'}
		]},

		


		
		{'时间':'Time'},

		{'计算':[
			{'矩阵':'fMatrixPly fMatrix tableT'},
			{'随机':'Random'},
			{'统计':'max min countA CntN Cnt'},
			{'差分':'diff antidiff'},
		]},

	]},

	{'zmather.io.js':[
		{'输入':[
			{'字符集':'SBS SBSi'},
			{'规范化':'n2sub sub2n asc2unicode opreplace opreplace0 opreplace1 opreplace2 opreplace3 opreplace6 opreplace7 opreNumRlt opreplace16 opreSeqsA simOpr'},
			{'编码':'$2v'},
			{'提取':'exp2arr exp2coe'}
		]},
		{'输出':[
			{'DOM':'OH'},
			{'HTML':'zxdetail Mtrx2str'},
			{'KaTeX':'zx zxdet zxmtrx zxul zxsum zxprod zxfrac zxroot zxmod zxEq'},

		]},
		{'API':[
			{'源代码输出':'fun2str API'},

		]},
	]},

	{'interface.js':[{'学科':'subjects'},
		{'解题目录':'solves'},
		{'数学函数':'FUNCSi FUNCS SBSFn SBSFUN'},
	//	{'工具语言':'mathmlAttrs'},
		{'公式结构':'STRUCi STRUC'},

	]},

	{'svg.js':[{'矢量图形':'plot'},
		]},
	
	{'canvas.js':[{'画布':'draw'},
		{'动画':'trace loop Particle'}
		]},
			
	{'graphic.js':[{'画图':'graphic'},
		]},


	{'common.js':[{'函数简写':'MfS PfS PtS'},

		]},


];

tooltip['Math obj (Native JS)']=[
	{'Constant 常数':[
		'E: 2.718281828459045',
		'LN2: 0.6931471805599453',
		'LN10: 2.302585092994046',
		'LOG2E: 1.4426950408889634',
		'LOG10E: 0.4342944819032518',
		'PI: 3.141592653589793',
		'SQRT1_2: 0.7071067811865476',
		'SQRT2: 1.4142135623730951'
	]},
	{'Function 函数':[
		'abs()',
		'acos()',
		'acosh()',
		'asin()',
		'asinh()',
		'atan()',
		'atan2()',
		'atanh()',
		'cbrt()',
		'ceil()',
		'clz32()',
		'cos()',
		'cosh()',
		'exp()',
		'expm1()',
		'floor()',
		'fround()',
		'hypot()',
		'imul()',
		'log()',
		'log1p()',
		'log2()',
		'log10()',
		'max()',
		'min()',
		'pow()',
		'random()',
		'round()',
		'sign()',
		'sin()',
		'sinh()',
		'sqrt()',
		'tan()',
		'tanh()',
		'trunc()'
	]},
		
],
	//jdetail(tooltip['Math obj (Native JS)'])+
navhead['API']=[[href('./js','JS'),
	href('./css',gM('CSS')),
	href('./js/i18n',gM('i18n')),
	].join(' | '),
	API(tooltip['API']), detail(gM('3rd-party'),
	detail(href('./js/lib','Javascript'),
		ul(ZLR(zlr2('Base64 jQuery katex qrcode zlr echarts raphael flowchart effects js-yaml','.js'))),1)+
	detail(href('./css/fonts','Fonts'),
		ul(ZLR(zlr2('KaTeX MaterialIcons-Regular','.woff2'))),1)
,1), 
].join(br);
