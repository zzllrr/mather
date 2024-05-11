/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

tooltip['API']=[


	{'obj / Math':[
		{'Entity 实体':[{'数':'Num','整数':'Integer','小数':'Decimal','分数':'Frac','根数':'Root',
			'矩阵':'Mtrx',
		
			'多项式':'Polynomy',
			'命题':'Prop',
			'集合':'Set',
			'置换':'Perm',
			'关系':'Rlt',
			'数学表达式':'Mfn',
			'函数':'Fun',
		}]},
		{'function.js':[{'实体':'Fun Mfn Polynomy'},
			{'识别':'eType oType'},
			{'运算符变换':'opneg opinv'},
			{'上下文处理':'pptd pppow visiplus visiplusk simFactTimes simTimesOf1 simPowOf1 simFracOf1 simExpression deepClone e2h mathsimp'},
		
			{'符号计算':'plus minus times divide pow square cubic sqrt cbrt pmtds sums sumx sump kap fmin fmax'},
			{'方程':'equationsMS equationsMX equationM equationA'},
			
		]},
		
		{'num.js':[{'实体':'Integer Decimal Frac Root Num'},
				{'识别':'nis nAis nisd nisVd nisVid nisn nisSupSuffix'},
				{'正则':'nRegofab nReg2dot nReg2digits nReg2A'},
				{'转换':'percnt2n n2percnt n2frac n2ArabBig n2Roman Roman2n'},
				{'精度':'digi Nsqrt'},
		]},
		
		{'prime.js':[{'实体':''},
			{'素数集合':'PrimeA PrimeAlist PrimeAlistRowland PrimeAlistBC PrimeNumerator PrimeGen'},
			{'识别':'isPrime feet1'},
			{'因子分解':'tMod factor2 factor factorA factorA2n factors cntfactors Rho Factor odd odd_5'},

			{'同余':'Mod modP multiMod factorMod Ord_1 Ord'},
			{'周期':'period periodOfDigitsOfPower'},
			{'数位性质':'lastDigitsOfPower firstDigitsOfPower last0OfFact'},
			{'多元运算':'gcd lcm gcdFrac lcmFrac lcp'},
			{'数论函数':'Primorial'},
			{'数和分解':'SUMs'},
		]},

		{'statistic.js':[{'实体':''},
			{'概率':''},
			{'统计':'count2pow'},
			{'序关系':'floor ceil subA'},
		]},

		{'geometry.js':[{'实体':''},
			{'多边形':'gon'},

			
		]},
		
		{'proposition.js':[{'实体':'Prop'},
			{'功能':''},
		]},
		{'set.js':[{'实体':'Set'},
			{'功能':''},
		]},
		{'permutation.js':[{'实体':'Perm'},
			{'IO':'PfS PtS'},
			{'排列组合':'Fact Fact2 Permut Combin FactN PermutN CombinN RandomPermutN RandomCombinN RandomCombinA'},
			{'逆序':'nInvOrder nInvOrder_'},

		]},
		{'matrix.js':[{'实体':'Mtrx'},

		]},
		{'relation.js':[{'实体':'Rlt'},
			{'功能':''},
		]},
		
		
	]},

	{'zmather_zlr.js':[
		{'URL':[
			{'常量':[
				{'通用':'H Hs w3c xmlns xhtml xmlnsxlink webStore'},
				{'小乐':'ZRL ZRC ZIG ZIL ZIV ZAin1 HOM ishome isdoodle isdoc iswiki issolve isedi'},
			]},
			{'正则':'uri uriRe'},
			{'解析':'H_u H_w H_w1 H_W H_W1 H_d H_h H_a H_o urlTran picSrcNameExt loch losh'},
			{'封装':'imgFav pathTxt fn0 fn1 fna fna0 fnb fnc fnd fne fnt fnx fnr fns'},
			{'转换':'dataURItoBlob'},
			{'接口':'FNS Admin txt2audio xhrcb csslib git jslib delivr unpkgTmp unpkg referf'},
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
			{'调试':'consolelog cacheUsage'}
		]},
	
		{'HTML':[
			{'格式化':'html2txt html2html altTxt txt2A csv2A blking ubb2html md2html replaceNodeInner'},
			{'Engin':'Engin'},
			{'元素':[
				{'过渡':'br hr brA hrA prog'},
				{'结构':'SCtv DCtv spanmi itv detail ol ul dl Options OptGrps optgrp subReg tmb Table fieldset fieldseth subtabs refer'},
				{'样式':'scRed scGain sci scit scib scil scir scbt sclr scbox scblr sctlr'},
				{'用途':'imgdatasrc num i18 I18 colorbx rng txa txtreadonly precode mark del href hrefA scHotk q_key sceg sceg2 scegc scegj zMath ruby'},
				{'自定义标签':'Mele Meles Mele2 Meleo'},
			]},
			{'碎片':'strtxt strop strradio0 strchkbx0 strbtn btnGo imgSRC SC sC sc DC dC dc'},
			{'属性':'chked seled attr2dataset attr2jSon jSon2attr'},
			{'兼容LaTeX':[
				{'上下标':'sup sub msup msub msups msubs subsup msubsup Msubsup'},
				{'括符':'lp rp lrp'},
				{'大型数学式':'lim sum prod intl iint oint mtrx'},
				{'数学运算':'frac mfrac mfracs root mroots mod'},
			]},

			{'数学关系':'re rel imply eqv eq0 lt gt'}
		]},

		{'LaTeX':[
			{'颜色':'fcb'},
			{'字体':'kxf kxc ksz'},
			{'过渡':'kbr kbr2'},
			{'HTML元素':[
				{'过渡':'kbrA khrA'},
				{'结构':'ksc kdc zdetail kdetail fdetail kol kul kdl Kx KxA kxA'},
				{'用途':''},
			]},
			{'规范化':'kx encodeLatex'},
			{'运算符':'kos'},
			{'标记符':'kxo kxu kancel'},
			{'括符':'$A $B $js tinyA boxed kbox hp lrpfrac genfrac zp pp'},
			{'数学运算':'kroot kfrac kfraczp kxAfrac difn Opr orifun'},
			{'数学结构':'ksups ksubs binom zmtrx kmtrx zarray ztable det zdet kdet piece aligned'},
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
			{'运算':'Arrf Arrfc ArrfcA Arr1 Arr_1 tableT tableL'},
			{'拼接':'zlrA zlrA2 zlrA3 snake'},
			{'输出字符串':'zlr zlr2 zlr3 ZLR3'},
			{'排序':'sortBy sort2'},
		]},

		
		{'字符':[
			{'识别':'isStr isObj isVar hasVar'},
			{'编码':'Base64 UTF8 XML ZML compressBy'},
			{'特殊字符':'fCC Latin entity'},
			{'翻译':'gM GM gM2 sbc2dbc dbc2sbc zh2big'},
			{'数字转换':'n2Zh Zh2n nTrim wrapTrim subwd'},
			{'表格':'cell2cols cell2rows'}
		]},

		


		
		{'时间':'Time sTo sTi oneDay'},

		{'计算':[
			{'矩阵':'fMatrixPly fMatrix tableT'},
			{'随机':'Random'},
			{'统计':'max min countA CntN Cnt sizeKB'},
			{'数值':'fixed4 bigintsim'},
			{'差分':'diff antidiff'},
		]},

	]},

	{'zmather_io.js':[
		{'输入':[
			{'字符集':'SBS SBSi'},
			{'规范化':'n2sub sub2n asc2unicode optrim opfrac opreplace opreplace0 opreplace1 opreplace2 opreplace3 opreplace6 opreplace7 opreNumRlt opreplace16 opreSeqsA simOpr'},
			{'编码':'$2v'},
			{'提取':'exp2arr exp2coe'}
		]},
		{'输出':[
			{'DOM':'OH preDisplay'},
			{'HTML':'zxdetail Mtrx2str'},
			{'KaTeX':'zx zxdet zxmtrx zxul zxsum zxprod zxfrac zxroot zxmod zxEq'},

		]},
		{'API':[
			{'源代码输出':'fun2str API'},

		]},
		{'解题目录':'solves'},
		{'数学函数':'FUNCSi FUNCS SBSFn SBSFUN'},
	//	{'工具语言':'mathmlAttrs'},
		{'公式结构':'STRUCi STRUC'},

	]},


	{'obj / graphic / svg.js':[{'矢量图形':'plot'},
		]},
	
	{'obj / graphic / canvas.js':[{'画布':'draw'},
		{'动画':'trace loop Particle'}
		]},
			
	{'obj / graphic.js':[{'画图':'graphic'},
		]},


	{'htm / common.js':[
		{'URL常量':'HOME GMAIL qrAli qrqq qrwx qrs VRlib VRlibjs ARlib ARlibjs gitmd'},
		{'URL变量':'loch losh ishome isdoodle isdoc isedi hasdoodle'},
		{'URL处理函数':'qrJPG sel questionA enwiki'},
		{'数值处理':'rng2 rng4 color2rgba atan'},
		{'界面交互':'toolTip oHTML OHiframe loadHTML all2html dayOrNight copy2clipboard shadow'},
		{'函数简写':'MfS PfS PtS'},
		{'元素':'Mele Meles Mele2 Meleo Melef'},

		]},


];




tooltip['JavaScript']=[
	detail(gM('Native Math Function')+' (JavaScript)',
		API(tooltip['Math Function (Native JavaScript)']),
	),
	detail(gM('Array Function'), API(tooltip['API'][1]['zmather_zlr.js'][9]['数组'])),
	detail(gM('Calculation'), API(tooltip['API'][1]['zmather_zlr.js'][12]['计算'])),
	detail(gM('All API'),API(tooltip['API'])),
	
].join(br);