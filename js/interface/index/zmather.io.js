/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 * 
 * 
 * 依赖：
 * 需先加载 KaTeX
*/
var Mele='LaTeX Ascii_Math Unicode_Math Content_MathML Presentation_MathML SVG Canvas Echarts Markdown YAML I18N JavaScript 3D 2D Zdog',
Meles='LA AM UM CM PM SV CV EC MD YM I18 JS D2 D3 ZD',
Mele2='LT LX LTX TEX IL YML',
Meleo={'IL':'Inline LaTeX','LX':'LaTeX','TEX':'LaTeX','YML':'YAML'},
Melef=function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip="'+t+'." title="'+t:''),x)};
Arrf(function(v,i){Meleo[ZLR(Meles)[i]]=v}, ZLR(Mele));

var SBSi=[zlr('Num',' 1 2 3'),
	zlr('ABC',' 1 2 3 4 5'),
	zlr('Operator',' 1 2'),
	zlr('Relation',' 1 2'),
	zlr('Arrow',' 1 2 3 4 5'),
	zlr('Misc',' 1 2 3 4')
].join(' '),
SBS={

	Num:[['⁰¹²³⁴⁵⁶⁷⁸⁹','₀₁₂₃₄₅₆₇₈₉'],
		['⁺⁻⁼⁽⁾%‰‱','₊₋₌₍₎'],
		['①②③④⑤❶❷❸❹❺','⑥⑦⑧⑨⑩❻❼❽❾❿'],
		['➀➁➂➃➄','➅➆➇➈➉'],

	],

	Num1:[
		
		['⒈⒉⒊⒋⒌⒒⒓⒔⒕⒖','⒍⒎⒏⒐⒑⒗⒘⒙⒚⒛'],
		['⑴⑵⑶⑷⑸⑾⑿⒀⒁⒂','⑹⑺⑻⑼⑽⒃⒄⒅⒆⒇'],
		['⓵⓶⓷⓸⓹⑪⑫⑬⑭⑮㉑㉒㉓㉔㉕','⓺⓻⓼⓽⓾⑯⑰⑱⑲⑳'],
		['㉖㉗㉘㉙㉚㊱㊲㊳㊴㊵㊻㊼㊽㊾㊿','㉛㉜㉝㉞㉟㊶㊷㊸㊹㊺'],
		['➊➋➌➍➎⓫⓬⓭⓮⓯','➏➐➑➒➓⓰⓱⓲⓳⓴'],
	],

	Num2:[

		['⅟½⅓⅔ ⅗⅘⅙⅚','¼¾⅕⅖ ⅛⅜⅝⅞'],
		['㋀㋁㋂㋃㋄㋊㋋','㋅㋆㋇㋈㋉'],
		['㏠㏡㏢㏣㏤㏪㏫㏬㏭㏮㏴㏵㏶㏷㏸㏾','㏥㏦㏧㏨㏩㏯㏰㏱㏲㏳㏹㏺㏻㏼㏽'],
		['㍙㍚㍛㍜㍝㍣㍤㍥㍦㍧㍭㍮㍯㍰㍘','㍞㍟㍠㍡㍢㍨㍩㍪㍫㍬'],
	],

	Num3:[
		['一二三四五六七八九十百千万亿兆〇','壹贰叁肆伍陆柒捌玖拾佰仟萬亿兆零'],
		['㊀㊁㊂㊃㊄㈠㈡㈢㈣㈤','㊅㊆㊇㊈㊉㈥㈦㈧㈨㈩'],
		['甲乙丙丁戊子丑寅卯 申酉戌亥','己庚辛壬癸辰巳午未'],
		['㆙㆚㆛㆜ ㆖㆗㆘','㆒㆓㆔㆕ ㆝㆞㆟']
	],


	ABC:[
		['αβγδελμνξουφχψω','ζηθικπρςστ'],
		['ΑΒΓΔΕΛΜΝΞΟΥΦΧΨΩ','ΖΗΘΙΚΠΡ΢ΣΤ'],

	//	Arrf(fCC,[seqA(913,25), seqA(945,25)])
	//	Arrf(fCC,[seqA(65,26),seqA(97,26)]),
	//	Arrf(fCC,[seqA(8560,16),seqA(8544,16)]),

		['ℵℶℷℸ℘','∞∝∅⍉⌀'],
		['ƒℎæœＣ₵açþÞð°℃℉₴','ℲℏÆŒϹ∁āÇÐß'],

	],


	ABC1:[

		['ⅰⅱⅲⅳⅴⅺⅻ','ⅵⅶⅷⅸⅹⅼⅽⅾⅿ'],
		['ⅠⅡⅢⅣⅤⅪⅫ','ⅥⅦⅧⅨⅩⅬⅭⅮⅯ'],
		['ℂℍℙℚ ℭℌℑℜ','ℕℝℤℨ'],
		['ℬℰℱℋ ℯℊℴ','ℐℒℳℛ'],
		['⍶⍺ϐϒϕ⍳⍸⍴ϱ','ϵ⍷ℇϑϴ⍵⍹ϖ'],

	
		//	['+-	=.%|\\$<>,;^_~\'"&*/:?@#!删空',' '],		ℏ
	
			//['aāáǎàċ','äůâãă'],
				
	],



	ABC2:[
		['ａｂｃｄｅｋｌｍｎｏｕｖｗｘｙ','ｆｇｈｉｊｐｑｒｓｔｚ'],
		['ＡＢＣＤＥＫＬＭＮＯＵＶＷＸＹ','ＦＧＨＩＪＰＱＲＳＴＺ'],
		// Arrf(fCC,[seqA(65345,26),seqA(65313,26)]),
		// Arrf(fCC,[seqA(9372,52),seqA(9424,26)]),

		['⒜⒝⒞⒟⒠⒦⒧⒨⒩⒪⒰⒱⒲⒳⒴','⒡⒢⒣⒤⒥⒫⒬⒭⒮⒯⒵'],
		['ⓐⓑⓒⓓⓔⓚⓛⓜⓝⓞⓤⓥⓦⓧⓨ','ⓕⓖⓗⓘⓙⓟⓠⓡⓢⓣⓩ'],
		['ⒶⒷⒸⒹⒺⓀⓁⓂⓃⓄⓊⓋⓌⓍⓎ','ⒻⒼⒽⒾⒿⓅⓆⓇⓈⓉⓏ']
	],

	ABC3:Arrf(function(t,i){return [Latin(t,true).join('').replace('É','$&G'),
		Latin(t).join('').replace('⊙⋅⃛','i')
	]},entity.slice(4,9)),

	ABC4:Arrf(function(t,i){return [Latin(t,true).join(''),
		Latin(t).join('').replace('◯','')
	]},entity.slice(9)).concat([['₠₡₢₣₤₥₦₧₨₩','₪₫€₭₮₯₰₱₲₳']]),

	ABC5:Arrf(function(x,i){return [fCC(seqA(x,10)),fCC(seqA(x+10,(i==4?4:10)).concat(i==4?seqA(13169,6):[]))]},seqA(13184,5,'',20)),

	Operator:[
		['∑∏∐⋀⋂∮∯∰⨁⨂','∫∬∭⋁⋃∱∲∳⨀◯'],//⨌
		['′″‴! ¬∀∃∄ ∟√∛∜','‵‶‷‼ ∠∂∇†'],
		['+×±⊕ ∧∨∩∪','-÷∓⊗'],
		[ ZLR('() [] {} <> 〈〉 ⁽⁾ ┌┐ ⌈⌉ ⎰⎱ ⟦⟧ ║║ ||'),
		ZLR('(,) [,] {,} <,> ⟨⟩ ₍₎ └┘ ⌊⌋ (,] [,)')],//⟮⟯
	],

	Operator1:[
		['+∓⍅⍏⌿⌗†⌶','⊹±⍆⍖⍀⋕#'],
		['‐‑‒−⁃¦∣∤','–—―－'],
		['‾∓∔∸∺∻÷∹⍎','_±‗⍘⍙⍚⍛⍜⍕'],
			
		['×⨉∕╱','╳⋇∖╲'],
			
		['⊕⨁⨂⊖⊗⦿⊙⨀⊚⌾','⊘⌽⊜⊝ ⍟⊛⌻⌼'],//⧀⧁
	],

	Operator2:[
		
		['∧⋀⌃⌅⊼⌆⋋⋏⨇','∨⋁⌄‸⊻⊽⋌⋎⨈'],
		['∩⋂⋓⋔ ⨃⨄⨅⊓','∪⋃⋒ ⊌⊍⊎⨆⊔'],

		['∡∠','∢∟⊾⊿'],//⦛⦣⦤⦥⦟⦞ ⦠⦢⦡⦜⦝
		['⊞⊠⍁⌸⊡⍃⍄⌺⍐⍍⍓⍌⍰','⊟⌹⍂⍯⍠⍇⍈⍞⍗⍔'],
		['≖⋄','']

	],

	Relation:[

		['⋅∙•‧․∘°','⋆∗⁂⁑'],
		[':‥∷  ⋯⋰∵','∶¨⁞  ⋮⋱∴'],
		['＝≡≣≗≘≙≚≛≜≝','≠≢≐≑≓≒≔≕≟≞'],
		['∼≈≋≀⌇≌⋍≃≅≊','≁≉⍭∾∿∽≂≄≇≆'],

	],

	Relation1:[
		['<>≤≥ ⋖⋗≦≧','≮≯≰≱ ⋜⋝≨≩'],

		['⊂⊃⊆⊇ ⊊⊋','⊄⊅⊈⊉ ⋐⋑'],
		['∈∋∊∍⋳⋻⋶⋽⋸∁','∉∌⋲⋺⋴⋼⋷⋾⋹⋵'],

		['≺≻≼≽ ⊰⊱≾≿','⊀⊁⋞⋟ ⋠⋡⋨⋩'],
		
		['≲≳≶≷ ⋚⋛≪≫','≴≵≸≹ ⋦⋧⋘⋙'],

	],

	Relation2:[
		['⊲⊳⊴⊵ ⋉⋊⋈','⋪⋫⋬⋭'],
		['⊏⊐⋤⋥⋿⌌⌍⌜⌝⌐','⊑⊒⋢⋣¬⌎⌏⌞⌟⌙'],
		['‖∥⊩⊫⧻','∦⧺⊮⊯⊪'],
		['⊺⊧⊤  ⊦⊨⍑','⊢⊣⊥  ⊬⊭⍊'],
		['⍤⍥⍡⍢','⍣⍨⍩'],
	],

	Arrow:[
		['←→↖↗ ⟵⟶↑↓','↚↛ ↙↘'],

		['↤↦↥  ⤒⇤⤟⤠','⟻⟼↧  ⤓⇥⤝⤞'],

		['⇷⇸⤉⇞','⇺⇻⤈⇟'],
		['↔⇹↕⤡⟷','↮⇼↨⤢⥈'],

	],
	Arrow1:[
		['↼⇀↿↾ ⥊⥏⥑⥎','↽⇁⇃⇂ ⥋⥌⥍⥐'],
		['⥚⥛⥠⥜ ⥒⥓⥘⥔','⥞⥟⥡⥝ ⥖⥗⥙⥕'],
		['⥢⥤⥣⥮ ⥦⥨⥪⥬','⇋⇌⥥⥯ ⥩⥧⥫⥭'],

		['⇐⇒⇑⇖⇗⇔⟺⟸⟹','⇍⇏⇓⇙⇘⇎⤄⤂⤃'],
		['⇇⇉⇈','⬱⇶⇊'],


	],
	Arrow2:[

		['⇆⇅⥃⥂ ⥶⥸','⇄⇵⥄  ⥹⥻'],
		['⤪⤨⤧  ⤮⤯⤲','⤫⤬⤩  ⤭⤰⤱'],
		['⤆⤇⇚  ⤊⟰','⟽⟾⇛  ⤋⟱'],
		['↞↠↟⥉ ⬴⤀⬻⤖ ⬼⤗⬶⤅','⤛⤜↡  ⬵⤁⬷⤐ ⬽⤘'],
	
		['↩↪⤣⤤ ↜↝↭⬳⟿','↫↬⤦⤥ ⇜⇝⬿⤳'],

	],
	Arrow3:[
		['⤿⤾⤺  ↶⤽⤼','⤷⤶⤻  ↷⤸⤹'],
			
		['⇠⇢⇡⤌⤍','⤎⤏⇣⬸⤑'],
		['⤙⤚⬹⤔','↢↣⬺⤕'],

		['⥳⥴⭋⭌ ⭊⥵⥆⥅','⭉⥲⭁⭇ ⭂⭈⭀⥱'],

		['⬰⇴⬾⥇⥷','⬲⟴⥺⭄⭃'],

	],
	Arrow4:[
		['↰↱⤴↴⇱','↲↳⤵↵⇲'],

		['⇦⇨⇕⇧⇳','⇽⇾⇿⇩'],
		
		['￩￫￪  ➚➶➹','‹›￬  ➘➴➷'],

		['↹⥰','↸☈↯⏎☇'],

	],
	Arrow5:[
		['➾➟➠➢➣➤➨➧➥➩','➙➝➞➡➔➜➲⇰➦➪'],
		['➬➮➱➳➵➺➼','➫➭➯➛➸➻➽'],
		['⇪⇫⇬⇭⇮⇯',''],
		['↻↺⥀','⟲⟳⥁'],
		
	],

	Misc:Arrf(function(x,i){return [fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(9632,4,'',20)),

	Misc1:Arrf(function(x,i){return [fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(9632+20*4,5,'',20)),

	Misc2:Arrf(function(x,i){return [fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(9632+20*9,5,'',20)),

	Misc3:Arrf(function(x,i){return [fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(9632+20*14,5,'',20)),

	Misc4:Arrf(function(x,i){return [fCC(seqA(x,10)),fCC(seqA(x+10,10))]},seqA(8962,3,'',20)).concat(
		[['卍卐⌘','']]
	),

/* 暂不收录的Unicode字符：
	27C0-27EF：杂项数学符号-A (Miscellaneous Mathematical Symbols-A) 
⟐⟑⟒⟓⟔⟕⟖⟗⟘⟙⟚⟛⟜⟝⟞⟟	

*/
	SurPre:[ZLR("' ′ ″ ‴ ‵ ‶ ‷ % ‰ ‱ ‼ ! †"),ZLR('∫ ∬ ∭ ∮ ∯ ∰ ∱ ∲ ∳ ∑ ∏ ∐ ㏒ ㏑ √ ∛ ∜ ¬ ∀ ∃ ∄')],

/*
	entity=
 scr fr opf bar acute caron grave dot uml ring circ tilde breve 
 latex=
 mathcal mathfrak mathbb bar acute check grave dot ddot mathring hat tilde breve
 手写体 花体（哥特体） 空心体 上横线(第1声) 第2声 v形状(第3声) 第4声 点 双点 圆圈 上尖角 波浪线 u形状 
 𝒜𝔄𝔸 Á À ÄÅÃĂÂ
 𝒶𝔞𝕒āáǎàċäåâãă
*/

	Latex:{

'Α':'Alpha',
'Β':'Beta',
'Γ':'Gamma',
'Δ':'Delta',
'Ε':'Epsilon',
'Ζ':'Xeta',
'Η':'Eta',
'Θ':'Theta',
'Ι':'Iota',
'Κ':'Kappa',
'Λ':'Lambda',
'Μ':'Mu',
'Ν':'Nu',
'Ξ':'Xi',
'Ο':'Omikron',
'Π':'Pi',
'Ρ':'Rho',
'΢':'Zelta',//实际无此字母，暂以Zelta命名
'Σ':'Sigma',
'Τ':'Tau',
'Υ':'Upsilon',
'Φ':'Phi',
'Χ':'Chi',
'Ψ':'Psi',
'Ω':'Omega',
'Ϝ':'Digamma',//

'α':'alpha',
'β':'beta',
'γ':'gamma',
'δ':'delta',
'ε':'epsilon',
'ζ':'zeta',
'η':'eta',
'θ':'theta',
'ι':'iota',
'κ':'kappa',
'λ':'lambda',
'μ':'mu',
'ν':'nu',
'ξ':'xi',
'ο':'omikron',
'π':'pi',
'ρ':'rho',
'ς':'zelta',//实际无此字母，暂以Zelta命名
'σ':'sigma',
'τ':'tau',
'υ':'upsilon',
'φ':'phi',
'χ':'chi',
'ψ':'psi',
'ω':'omega',
'ϝ':'digamma',

'ϵ':'varepsilon',


'ϑ':'vartheta',

'ϰ':'varkappa',

'ϖ':'varpi',

'ϱ':'varrho',


'ς':'varsigma',


'ϕ':'varphi',


'ı':'imath',
'ȷ':'jmath',


'ℵ':'aleph',
'ℶ':'beth',
'ℷ':'gimel',
'ℸ':'daleth',

'ð':'eth',




'ℬ':'mathscr{B}',
'ℰ':'mathscr{E}',
'ℱ':'mathscr{F}',
'ℋ':'mathscr{H}',
'ℐ':'mathscr{J}',
'ℒ':'mathscr{L}',
'ℳ':'mathscr{M}',
'ℛ':'mathscr{R}',
'ℯ':'mathscr{e}',
'ℊ':'mathscr{g}',
'ℴ':'mathscr{o}',

'ℭ':'mathfrak{C}',
'ℌ':'mathfrak{H}',
'ℑ':'mathfrak{J}',
'ℜ':'mathfrak{R}',
'ℨ':'mathfrak{Z}',




'ℂ':'mathbb{C}',
'ℍ':'mathbb{H}',
'ℕ':'mathbb{N}',
'ℙ':'mathbb{P}',
'ℚ':'mathbb{Q}',
'ℝ':'mathbb{R}',
'ℤ':'mathbb{Z}',




'ℝ':'mathbb{R}',
'ℎ':'mathit{h}',//mathnormal 
'Ｃ':'mathbf{C}',
'Ϲ':'mathsf{C}',
'∁':'mathtt{C}',
	
'a':'mathrm{a}',
	
	
'ā':'bar{a}',
'á':'acute{a}',
'ǎ':'check{a}',
'à':'grave{a}',
'ċ':'dot{c}',
'ä':'ddot{a}',
'ů':'mathring{u}',
'â':'hat{a}',
'ã':'tilde{a}',
'ă':'breve{a}',



'⅟':kfrac('1/n').substr(1),
'½':kfrac('1/2').substr(1),
'⅓':kfrac('1/3').substr(1),
'⅔':kfrac('2/3').substr(1),
'¼':kfrac('1/4').substr(1),
'¾':kfrac('3/4').substr(1),
'⅕':kfrac('1/5').substr(1),
'⅖':kfrac('2/5').substr(1),
'⅗':kfrac('3/5').substr(1),
'⅘':kfrac('4/5').substr(1),
'⅙':kfrac('1/6').substr(1),
'⅚':kfrac('5/6').substr(1),
'⅛':kfrac('1/8').substr(1),
'⅜':kfrac('3/8').substr(1),
'⅝':kfrac('5/8').substr(1),
'⅞':kfrac('7/8').substr(1),

'㏒':'log',
'㏑':'ln',

'func_tri':[zlr2('sech csch cth th sh ch','⁻¹'),'sech csch cth th sh ch',
		zlr('arc','sin cos tan cot sec csc'),'sin cos tan cot sec csc'
		],
//'func':'# & % exp log ln lg arg gcd lcm mod max min sup inf lim limsup liminf sin cos tan cot sec csc sh ch th cth tg ctg cotg tanh cosec arcsin arccos arctan arccot arctg arcctg det dim deg hom ker Pr',
'func':'# & % exp log ln lg arg gcd max min sup inf lim limsup liminf sin cos tan cot sec csc sh ch th cth tg ctg cotg tanh cosec arcsin arccos arctan arctg arcctg det dim deg hom ker Pr',

'struc':{//结构

	
},
	
//∘°度数

//\,, \:, \;, \quad, \qquad 空格由小到大
// 排版 equation, gather, align split alignat{n} 		gathered,aligned, alignedat intertext
// numberwithin eqref subequations 

		'±':'pm',
		'∓':'mp',
		'×':'times',
		'÷':'div',

		'∣':'mid',
		'∤':'nmid',
		'⋅':'cdot',
		'∘':'circ',
		'∗':'ast',
		'⨀':'bigodot',//⨀
		'⨂':'bigotimes',
		'⨁':'bigoplus',

		'≡':'equiv',
		'≠':'ne',	// \ne \not= \neq

	//	'≠':'=\\not\\mathrlap{}',

/*
		bug	 不等号被Katex显示成 / = 		写成		=\not\mathrlap{}
	
2≠3\\
2\neq3\\
2\ne3\\

*/



		'≐':'doteq', //	'dot=',

		'≪':'ll',
		'≫':'gg',
		'⋘':'lll',
		'⋙':'ggg',

		'≤':'leq',
		'≥':'geq',

		'≦':'leqq',
		'≧':'geqq',
			

		'≈':'approx',
		'≃':'simeq',
		'≅':'cong',
		
		
		'∝':'propto',
		
		'∑':'sum',
		'∏':'prod',
		'∐':'coprod',
		'∐':'amalg',
			
		'√':'sqrt',
		'∛':'sqrt[3]',
		'∜':'sqrt[4]',

		'∅':'varnothing',
		'∅':'empty',
		'∅':'emptyset',
		'∈':'in',
		'∉':'notin',
		'⊂':'subset',
		'⊃':'supset',
		'⊆':'subseteq',
		'⊇':'supseteq',
		'∩':'cap',
		'∪':'cup',
		'⊓':'sqcap',
		'⊔':'sqcup',
		'⊏':'sqsubset',
		'⊐':'sqsupset',
		'⊑':'sqsubseteq',
		'⊒':'sqsupseteq',
		'⋢':'notsqsubseteq',
		'⋣':'notsqsupseteq',
		'⋤':'sqsubsetnoteq',
		'⋥':'sqsupsetnoteq',

		'⋂':'bigcap',
		'⋃':'bigcup',
		'⋁':'bigvee',
		'⋀':'bigwedge',
		'⨄':'biguplus',
		'⨆':'bigsqcup',
		'∋':'ni',
		
		
		'…':'ldots',
		'⋯':'cdots',
		'⋱':'ddots',
		'⋮':'vdots',

		'∵':'because',
		'∴':'therefore',
		'∀':'forall',
		'∃':'exists',

		'≯':'not>',
		'̸⊄':'not\\subset',


		'⊥':'bot',
		'∠':'angle',
		'°':'^\\circ',
		
		'′':'prime',
		'″‴':'\'\'',
		'‴':'\'\'\'',
		'‵':'backprime',
		'∫':'int',
		'∬':'iint',
		'∭':'iiint',
		'∬∬':'iiiint',
		'∮':'oint',
		'∯':'oiint',
		'∰':'oiiint',
		'∞':'infty',
		'∇':'nabla',
		'∂':'partial',

		'Ⅎ':'Finv',
			
		'ℜ':'Re',
		'ℜ':'real',
		'ℑ':'Im',
		'ℑ':'image',

		'ℓ':'ell',
		'ℏ':'hbar',
		'ℏ':'hslash',

		'℘':'wp',
		'℘':'weierp',
		'⅁':'Game',

		'ø':'text{\\o}',
		'Ø':'text{\\O}',

		'ı':'text{\\i}',
		'ȷ':'text{\\j}',


		'å':'text{\\aa}',
		'Å':'text{\\AA}',
		'æ':'text{\\ae}',
		'Æ':'text{\\AE}',
		'œ':'text{\\oe}',
		'Œ':'text{\\OE}',

		'ß':'text{\\ss}',

		

		'↑':'uparrow',
		'↓':'downarrow',
		'⇑':'Uparrow',
		'⇓':'Downarrow',

		'→':'rightarrow',
		'←':'leftarrow',
		'⇒':'Rightarrow',
		'⇐':'Leftarrow',
		'⟶':'longrightarrow',
		'⟵':'longleftarrow',
		'⟹':'Longrightarrow',
		'⟸':'Longleftarrow',
		
		'→':'to',
		'←':'gets',
		
		'↔':'leftrightarrow',
		'↮':'notleftrightarrow',
		
		'￫':'vec{}',
		
		'⎰':'lmoustache',
		'⎱':'rmoustache',
		'⌈':'lceil',
		'⌉':'rceil',
		'⌊':'lfloor',
		'⌋':'rfloor',
		
		
		






'↺':'circlearrowleft',
'↻':'circlearrowright',
'↶':'curvearrowleft',
'↷':'curvearrowright',
'⇓':'Darr',
'⇓':'dArr',
'↓':'darr',
'⇠':'dashleftarrow',
'⇢':'dashrightarrow',
'↓':'downarrow',
'⇓':'Downarrow',
'⇊':'downdownarrows',
'⇃':'downharpoonleft',
'⇂':'downharpoonright',
'←':'gets',
'⇔':'Harr',
'⇔':'hArr',
'↔':'harr',
'↩':'hookleftarrow',
'↪':'hookrightarrow',
'⟺':'iff',
'⟸':'impliedby',
'⟹':'implies',
'⇐':'Larr',
'⇐':'lArr',
'←':'larr',
'⇝':'leadsto',
'←':'leftarrow',
'⇐':'Leftarrow',
'↢':'leftarrowtail',
'↽':'leftharpoondown',
'↼':'leftharpoonup',
'⇇':'leftleftarrows',
'↔':'leftrightarrow',
'⇔':'Leftrightarrow',
'⇆':'leftrightarrows',
'⇋':'leftrightharpoons',
'↭':'leftrightsquigarrow',
'⇚':'Lleftarrow',
'⟵':'longleftarrow',
'⟸':'Longleftarrow',
'⟷':'longleftrightarrow',
'⟺':'Longleftrightarrow',
'⟼':'longmapsto',
'⟶':'longrightarrow',
'⟹':'Longrightarrow',
'↫':'looparrowleft',
'↬':'looparrowright',
'⇔':'Lrarr',
'⇔':'lrArr',
'↔':'lrarr',
'↰':'Lsh',
'↦':'mapsto',
'↗':'nearrow',
'↚':'nleftarrow',
'⇍':'nLeftarrow',
'↮':'nleftrightarrow',
'⇎':'nLeftrightarrow',
'↛':'nrightarrow',
'⇏':'nRightarrow',
'↖':'nwarrow',
'⇒':'Rarr',
'⇒':'rArr',
'→':'rarr',
'↾':'restriction',
'→':'rightarrow',
'⇒':'Rightarrow',
'↣':'rightarrowtail',
'⇁':'rightharpoondown',
'⇀':'rightharpoonup',
'⇄':'rightleftarrows',
'⇌':'rightleftharpoons',
'⇉':'rightrightarrows',
'⇝':'rightsquigarrow',
'⇛':'Rrightarrow',
'↱':'Rsh',
'↘':'searrow',
'↙':'swarrow',
'→':'to',
'↞':'twoheadleftarrow',
'↠':'twoheadrightarrow',
'⇑':'Uarr',
'⇑':'uArr',
'↑':'uarr',
'↑':'uparrow',
'⇑':'Uparrow',
'↕':'updownarrow',
'⇕':'Updownarrow',
'↿':'upharpoonleft',
'↾':'upharpoonright',
'⇈':'upuparrows',

'≈':'approx',
'≊':'approxeq',
'≍':'asymp',
'∍':'backepsilon',
'∽':'backsim',
'⋍':'backsimeq',
'≬':'between',
'⋈':'bowtie',
'≏':'bumpeq',
'≎':'Bumpeq',
'≗':'circeq',
':≈':'colonapprox',
'::≈':'Colonapprox',
':−':'coloneq',
'::−':'Coloneq',
':=':'coloneqq',
'::=':'Coloneqq',
':∼':'colonsim',
'::∼':'Colonsim',
'≅':'cong',
'⋞':'curlyeqprec',
'⋟':'curlyeqsucc',
'⊣':'dashv',
'::':'dblcolon',
'≐':'doteq',
'≑':'Doteq',
'≑':'doteqdot',
'≖':'eqcirc',
'−:':'eqcolon',
'−::':'Eqcolon',
'=:':'eqqcolon',
'=::':'Eqqcolon',
'≂':'eqsim',
'⪖':'eqslantgtr',
'⪕':'eqslantless',
'≡':'equiv',
'≒':'fallingdotseq',
'⌢':'frown',
'≥':'ge',
'≥':'geq',
'≧':'geqq',
'⩾':'geqslant',
'≫':'gg',
'⋙':'ggg',
'⋙':'gggtr',
'>':'gt',
'⪆':'gtrapprox',
'⋛':'gtreqless',
'⪌':'gtreqqless',
'≷':'gtrless',
'≳':'gtrsim',
'∈':'in',
'∈':'isin',
'⋈':'Join',
'≤':'le',
'≤':'leq',
'≦':'leqq',
'⩽':'leqslant',
'⪅':'lessapprox',
'⋚':'lesseqgtr',
'⪋':'lesseqqgtr',
'≶':'lessgtr',
'≲':'lesssim',
'≪':'ll',
'⋘':'lll',
'⋘':'llless',
'<':'lt',
'∣':'mid',
'⊨':'models',
'⊸':'multimap',
'∋':'owns',
'∥':'parallel',
'⊥':'perp',
'⋔':'pitchfork',
'≺':'prec',
'⪷':'precapprox',
'≼':'preccurlyeq',
'⪯':'preceq',
'≾':'precsim',
'∝':'propto',
'≓':'risingdotseq',
'∣':'shortmid',
'∥':'shortparallel',
'∼':'sim',
'≃':'simeq',
'⌢':'smallfrown',
'⌣':'smallsmile',
'⌣':'smile',
'⊏':'sqsubset',
'⊑':'sqsubseteq',
'⊐':'sqsupset',
'⊒':'sqsupseteq',
'⋐':'Subset',
'⊂':'subset',
'⊂':'sub',
'⊆':'subseteq',
'⊆':'sube',
'⫅':'subseteqq',
'≻':'succ',
'⪸':'succapprox',
'≽':'succcurlyeq',
'⪰':'succeq',
'≿':'succsim',
'⋑':'Supset',
'⊃':'supset',
'⊇':'supseteq',
'⊇':'supe',
'⫆':'supseteqq',
'≈':'thickapprox',
'∼':'thicksim',
'⊴':'trianglelefteq',
'≜':'triangleq',
'⊵':'trianglerighteq',
'∝':'varpropto',
'△':'vartriangle',
'⊲':'vartriangleleft',
'⊳':'vartriangleright',
':':'vcentcolon',
'⊢':'vdash',
'⊨':'vDash',
'⊩':'Vdash',
'⊪':'Vvdash',

'⪊':'gnapprox',
'⪈':'gneq',
'≩':'gneqq',
'⋧':'gnsim',
'':'gvertneqq',
'⪉':'lnapprox',
'⪇':'lneq',
'≨':'lneqq',
'⋦':'lnsim',
'':'lvertneqq',
'≆':'ncong',
'̸​=':'ne',
'̸​=':'neq',
'≱':'ngeq',
'':'ngeqq',
'':'ngeqslant',
'≯':'ngtr',
'≰':'nleq',
'':'nleqq',
'':'nleqslant',
'≮':'nless',
'∤':'nmid',
'∈/​':'notin',
'̸​':'notni',
'∦':'nparallel',
'⊀':'nprec',
'⋠':'npreceq',
'':'nshortmid',
'':'nshortparallel',
'≁':'nsim',
'⊈':'nsubseteq',
'':'nsubseteqq',
'⊁':'nsucc',
'⋡':'nsucceq',
'⊉':'nsupseteq',
'':'nsupseteqq',
'⋪':'ntriangleleft',
'⋬':'ntrianglelefteq',
'⋫':'ntriangleright',
'⋭':'ntrianglerighteq',
'⊬':'nvdash',
'⊭':'nvDash',
'⊯':'nVDash',
'⊮':'nVdash',
'⪹':'precnapprox',
'⪵':'precneqq',
'⋨':'precnsim',
'⊊':'subsetneq',
'⫋':'subsetneqq',
'⪺':'succnapprox',
'⪶':'succneqq',
'⋩':'succnsim',
'⊋':'supsetneq',
'⫌':'supsetneqq',
'':'varsubsetneq',
'':'varsubsetneqq',
'':'varsupsetneq',
'':'varsupsetneqq'

	}

}
,FUNCSi=[ZLR('Trigonometric Hyperbolic'),
	ZLR('Arithmetic 17'),

	ZLR('Algebraic Analytical'),
	ZLR('Set Logistical'),
	ZLR('Geometric Topological'),
	ZLR('Probabilistic Statistical'),
]
	
,FUNCS={
	'17':['dr'],
	'Arithmetic':['gcd log Arg mod sign','lcm ln arg exp'],// ㏒ ㏑
	'Algebraic':['r tr det dim','hom ker Pr diag'],
	'Trigonometric':['sin tan sec','cos cot csc',
		zlr('arc','sin tan sec'),zlr('arc','cos cot csc')],
	'Hyperbolic':['sh th sech','ch cth csch',
	zlr2('sh th sech','^{-1}'),zlr2('ch cth csch','^{-1}')],//⁻¹

	'Analytical':['lim sup inf','limsup liminf'],
	'Set':[],
	'Logistical':[],
	'Probabilistic':[],
	'Statistical':['min max'],

	'Topological':[],
	'Geometric':[]
}


,STRUCi=[//

	ZLR('Fraction Note Binom'),
	ZLR('Subsup Root Size'),
	['Parentheses','Big Parentheses','Color'],

	ZLR('Equality Non-equality Relation'),
	ZLR('Sum Integral Limit'),
	ZLR('Matrix Det Summarize'),

	ZLR('Over Latin Linebreak'),
	['Lowercase Greek','Uppercase Greek','Hebrew'],
	['Font','Math Font','Text Font'],

	['Margin','Margin Value','Negative Margin'],

]
	
,STRUC={


	'Fraction':[
		$A(zlrA3("kfrac(",[
			"'1/2'",
			"[3,4]",
			"'1/2+3/4+5/6',1",
			
		],")")),
		['1\\/2'].concat(zlrA3('\\',['','t'],'frac{1}{2}'),
		zlrA3('\\',['','t'],'frac{1}{1+\\frac{1}{2}}')),
		[
		"\\dfrac{1}{2}",
		"\\cfrac{1}{1 + \\cfrac{1}{2}}",
		"$mfracs([1,3,5],[2,4,6],'',1,'+','')$"
		],
		$A(zlrA3("difn('f','x',",[
			"''",
			"1",
			"'',2",
			"1,2"
			],")")
		)
	],


	'Note':[
		zlrA3("$eq(1,'",'→↔←↦'.split(''),"',2)$"),//katex 暂不支持 ⇆ ↤	//←↔→⇐⇔⇒=↩↪↞↠↼⇀↽⇁⇋⇌⇄↦
		['\\stackrel{1}{\\longrightarrow}'].concat(zlrA3("$eq(1,'",'↩↪↞↠'.split(''),"',2)$")),
		['\\stackrel{1}{\\longleftarrow}'].concat(zlrA3("$eq(1,'",'↼⇀↽⇁'.split(''),"',2)$")),
		zlrA3("$eq(1,'",'=⇒⇔⇐'.split(''),"',2)$"),//katex 暂不支持 ⇆ ↤
		zlrA3("$eq(1,'",'⇋⇌⇄'.split(''),"',2)$"),
		
	],


	'Relation':[['↖','↙'],
		zlrA3("$mtrx([",[
		
			"['A\\\\quad~~','\\\\stackrel {1}⟶','\\\\quad B'],['↖\\\\footnotesize{3}','','↙\\\\footnotesize{2}'],['','C','']",
			"['','A',''],['','↙\\\\footnotesize{1}\\\\quad ↖\\\\footnotesize{3}'],['B','\\\\stackrel{2}⟶','C']",
			],"],'.','.','')$"),	

		zlrA3("$mtrx([",[
			"['A~~~','\\\\stackrel {1}⟶','B'],['↑\\\\footnotesize{4}','',' ~~↓\\\\footnotesize2'],['D~~~','\\\\stackrel {3}⟵','C']",
			"['','A',''],['','~~↑\\\\footnotesize{1}',''],['D\\\\stackrel{4}←','O','\\\\stackrel {2}→B'],['','~~↓\\\\footnotesize3',''],['','C','']",
			],"],'.','.','')$")
	],
	


	'Root':[$A(zlrA3("kroot('x'",['',',3',',4'],')').concat(
		zlrA3('mroots(',ZLR("[2,3],['','x','y'],'','','+-',1"),",'')")
	)),
		$A(zlrA3("kfrac([",ZLR("kroot(2),2 kroot(5)+'-1','2' '-b±'+kroot('b^2-4ac'),'2a'"),'])')),

		$A(zlrA3('mroots(',ZLR("[2,3,4,5],['',1,10,100,1000],'',1,'+',1"),",'')"))
	],

	
	'Equality':Arrf($A,[
		zlrA3("Eq([",[
			"'x',''],'','line'",
			"'x','y',2],'','line'",
		],')').concat(
			[
				"eq0(['x','y'])",
			]
		),
		[
			"kmod('a','b',2)",
			"eq0(['x','y'],3,5)",
		],
		
		[
			"eqM([1,-1],2)"
		],
		zlrA3("Eq([",[
			"['x','1'],'2']",
			"'x','1','2']",
			"['x','1'],'2'],'','','≡'",
			"'x','1','2'],'','','≡'",
			],')'),
	]),

	'Non-equality':Arrf($A,[zlrA3("Eq([",[
		"'x',''],'','line',['≤']",
		"'x','y',2],'','line',['=','≤']",
		"'x','y',2],'','line',['=','≠']",

		],')'),
		[
			"kmod('a','b',2,1)"
		]
	]),


	'Summarize':Arrf($A,[
		['piece([1,2])'].concat(
			zlrA3("kx",[
				"o('a+b+c','{'",
				"o('a+b+c','{','note'",
			],')')),
		['piece([1,2],1)'].concat(
			zlrA3("kx",[
			"u('a+b+c','{'",
			"u('a+b+c','{','note'"
			],')')),
		zlrA3('piece([',[
			"[1,2],[3,4]]",
			"[1,2],[3,4]],2",
			],')'),
		[
			"EqA(['1x+2y=3','4x-5y=6'])",
			"EqA(['1x+2y>=3','4x-5y<=6'])",
		]
	]),

	'Parentheses':Arrf($A,[zlrA3("zp('x'",[
		"",
		",'<>'",
		",'[]'",
		",'{}'",
	
		",'/\\\\'",
		
		],')'),
		zlrA3("zp('x'",[
		",'||'",
		",'‖‖'",
		",'⌊⌋'",
		",'⌈⌉'",
	
		],')'),
		zlrA3("zp('x'",[
	
		",'↑↓'",
		",'↕↕'",
		",'⇑⇓'",
		",'⇕⇕'",
		],')'),
		zlrA3("zp('x,y'",[
			",'','(','.'",
			",'','.',')'",
			",'(]'",
			",'[)'",
	
		],')'),
		["pp('x,y')",
		"zp('x,y','','<','>')"],
	]),

	'Big Parentheses':Arrf($A,[
		['big(0)+big(0,1)','big(1)+big(1,1)','big(2)+big(2,1)','big(3)+big(3,1)'],
		['big(0,2)+big(0,3)','big(1,2)+big(1,3)','big(2,2)+big(2,3)','big(3,2)+big(3,3)'],
		['big(0,4)+big(0,5)','big(1,4)+big(1,5)','big(2,4)+big(2,5)','big(3,4)+big(3,5)'],
	
	]),

	'Matrix':Arrf($A,[zlrA3("zmtrx([[1,2],[3,4]]",[
			"",
			",'','.',''",
			",'','p',''",
		],')'),
		
		zlrA3("zmtrx([[1,2",[
			"],[3,4]],'','r2c2'",
			",3,4],[5,6,7,8]],'','c2'"
		],')'),
		zlrA3("mtrx([[1,2],[3,4]],'",[

		"B','B",
		"V','V",

		],"','')"),
		
		zlrA3("Eq([",[
			"zmtrx([[1,2],[3,4]]),zmtrx([[5,6],[7,8]])],[['1','2']],'','→'",	//\\begin{aligned} & ~ \\\\quad x \\\\  & =1 \\\\  & =2 \\end{aligned}
			"zmtrx([[1,2,3,4],[5,6,7,8]],'','c2'),zmtrx([[1,2,3,4],[5,6,7,8]],'','c2')],[['1','2']],'','→'"
		],')')
	]),

	'Det':Arrf($A,[
		["kdet([[1,2],[3,4]])",
		 "zdet(['1 2','3 4'])"],
		zlrA3("Eq([",[
			"kdet([[1,2],[2,4]]),0],[['1st','2nd']]",
			"kdet([[1,2],[3,4]]),kdet([[5,6],[7,8]])],[['1st','2nd']]",
		],')')
		
		
	]),


	'Sum':[['\\sum','\\prod',"$Opr('','-','+','f','*')$"]].concat(
		Arrf($A,[
			zlrA3("sum('i',0,'+','f',",[0,1,3,6],",'')"),
			zlrA3("prod('i',0,'+','f',",[0,1,4,8],",'')"),
			["prod('i',0,'+','f',3,'')"]
				.concat(zlrA3("sum('i',0,'+','f',",[4,5],",'')"))
				.concat("prod('i',0,'+','f',7,'')"),
			["sum('i',0,'+','f',2,'')"
				].concat(zlrA3("prod('i',0,'+','f',",[5,6,2],",'')"))

		])
	),


	'Limit':[['\\lim'].concat(
			zlrA3("$lim('x','",[
				"+','f','",
				"-','f','",
				],"','')$"
			)
		),
		zlrA3("$lim('x','0",[
			"','f','",
			"+','f','",
			"','f','u",
			"','f','d",
			],"','')$"
		),
		
		["e^x=$lim('n','',kfraczp('1+'+kfrac(['x','n']),'','n'),'','')$"]
	],
	

	
	'Integral':[['\\int',"$intl('f','-1','1','x',0,'')$","$intl('f','-','+','x',6,'')$"]]
		.concat(Arrf($A,[

			zlrA3("intl('f','-','+','x",["',0","yz',3"],",'')"),
			zlrA3("intl('f','-','+','xy',",[1,4],",'')"),
			zlrA3("intl('f','-','+','x",["',2","yz',5"],",'')"),
	])),




	'Over':Arrf($A,[zlrA3("kxo('a','",'-→↔←'.split(''),"')"),//katex 暂不支持 ⇐ ⇒
		zlrA3("kxu('a','",'-→↔←'.split(''),"')"),//katex 暂不支持  ↼ ⇀ < > ⇐ ⇒ 
		
		zlrA3("kxo('a','",'↼⇀<>'.split(''),"')"),
		zlrA3("kxo('a','",'I{(~='.split(''),"')"),
		zlrA3("kxu('a','",'I{(~='.split(''),"')")
	]),

	'Subsup':[zlrA('{x}',[
		'_1^2',
		'^2',
		'^3',
		'^{-1}',
		'_1',
		]),
		['{e}^{πi}','{r}e^{iθ}','{e}^{\\frac{iπ}2}','C_{n}^{m}'],
		['\\stackrel{1}{2}','\\overset{1}{2}','\\underset{2}{1}'],
		zlrA3('1 \\',['atop','above{}','above{1pt}','above{2pt}'],2)
	
	],

	
	'Binom':[
		zlrA3("$binom('2n','n'",[",'c'",'',",'t'",",'d'"],')$'),
		zlrA3("$genfrac(1,2",[
			",'','',1",
			",'','',1,0",
			",'','',1,1"
		],')$').concat('1 \\brack 2','1 \\brace 2'),
		$A(zlrA3("genfrac(1,2",[
			",'','','',0",
			'',
			",'','','',1"
		],')').concat("kfraczp('1/2','','3')")),
		

	],




//zlrA3("\\math",ZLR('rm bb it bf sf tt'),"{A}"),
	'Font':Arrf($A,[zlrA3("kxc('",Arrf(function(x){return x+"','"+x},ZLR('Bbb bf frak it rm')),"','')"),
		zlrA3("kxc('",Arrf(function(x){return x+"','"+x},ZLR('sf tt bm bold boldsymbol')),"','')"),
	
	]),
	
	'Math Font':Arrf($A,[zlrA3("kxc('math",Arrf(function(x){return x+"','"+x},ZLR('bb bf cal')),"')"),
		zlrA3("kxc('math",Arrf(function(x){return x+"','"+x},ZLR('frak it rm')),"')"),
		zlrA3("kxc('math",Arrf(function(x){return x+"','"+x},ZLR('scr sf')),"')").concat("kxf('mathrm')")

	]),
	
	'Text Font':Arrf($A,[
		zlrA3("kxc('text",Arrf(function(x){return x+"','"+x},ZLR(' bf it sf')),"','text')"),
		zlrA3("kxc('text",Arrf(function(x){return x+"','"+x},ZLR('rm normal tt')),"','text')"),
	
	]),

	'Hebrew':Arrf($A,[
		zlrA3("kxc('",['A','B','C','D'],"','a')"),	
	]),

	'Lowercase Greek':Arrf($A,[
		zlrA3("kxc('",['a','b','c','d','e'],"','g')"),
		zlrA3("kxc('",['f','g','h','i','k'],"','g')"),
		zlrA3("kxc('",['l','m','n','o','p'],"','g')"),	
		zlrA3("kxc('",['q','r','s','t','u'],"','g')"),
		zlrA3("kxc('",['v','w','x','y','z'],"','g')"),
	]),

	'Uppercase Greek':Arrf($A,[
		zlrA3("kxc('",['A','B','C','D','E'],"','g')"),
		zlrA3("kxc('",['F','G','H','I','K'],"','g')"),
		zlrA3("kxc('",['L','M','N','O','P'],"','g')"),	
		zlrA3("kxc('",['Q','R','S','T','U'],"','g')"),
		zlrA3("kxc('",['V','W','X','Y','Z'],"','g')"),
	]),

	'Margin':[zlrA('\\backslash',[',\\,',':\\:',';\\;']).concat('\\tilde~')
			.concat(Arrf(function(x){return x+'\\'+x},['quad','qquad'])),
		Arrf(function(x){return x+'\\'+x},zlrA2(ZLR('thin med thick en'),'space')),
		Arrf(function(x){return x+'\\'+x},zlrA2(ZLR(' nobreak'),'space')),
	],

	'Margin Value':[zlrA3('\\',ZLR('mkern mskip hspace'),'{5mu}'),
		zlrA3('\\',ZLR('kern hskip hspace*'),'{0.25em}'),

		zlrA3('\\',ZLR('smash[b] raisebox{0.25em}'),'{A}'),

	],

	'Negative Margin':[
		['\\backslash!\\!'].concat(Arrf(function(x){return x+'\\'+x},zlrA2(ZLR('negthick'),'space'))),
		Arrf(function(x){return x+'\\'+x},zlrA3('neg',ZLR('thin med'),'space')),
		zlrA3('\\math',ZLR('l c r'),'lap{A}')
	],
	
	
	'Linebreak':[$A(['kbr','kbr2']),
		ZLR('phantom\\phantom{A} hphantom$hp()$ vphantom\\vphantom{A}'),
	
	],
	
	'Latin':[zlrA3('\\',ZLR('vec bar acute check grave'),'{a}'),
		zlrA3('\\',ZLR('dot ddot mathring hat tilde'),'{a}'),
		['\\breve{a}'].concat($A(["kancel(1)","kancel(1,'-')","kbox(1)","kbox('F','frak','math')"])),
	
	],


	'Size':[zlrA3("$ksz('",[
		"tiny',-4",
		"scriptsize',-3",
		"footnotesize',-2",

		],")$"),
	
		zlrA3("$ksz('",[
		"small',-1",		
		"normalsize'",
		"large',1",
	
		],")$"),
	
	
		zlrA3("$ksz('",[
		"Large',2",
		"LARGE',3",
		],")$"),
		
		zlrA3("$ksz('",[

		"huge',4",
		"Huge',5",

		],")$"),
	],
	
	'Color':[["\\color{red}A",
		"$fcb('red','','A')$",
		"$fcb('red','yellow','A')$",
		"\\colorbox{aqua}{A}"
		]
	]

},SBSFn=[],

//下列涉及LaTeX
zx=function(t,o){return katex.renderToString(kx(isArr(t)?t.join(kbr2):t),o||{}).replace(/\n/g,' ')},
zxdet=function(A,spacing){return zx(zdet(A,spacing))},
zxmtrx=function(A,spacing,parts){return zx(zmtrx(A,spacing,parts))},
zxul=function(A){return zx(piece(Arrf(ZLR,A)))},
zxsum=function(i,b,t,v,p){return zx(lrp('',sum(i,b,t,v,p,''),'',''))},
zxprod=function(i,b,t,v,p){return zx(lrp('',prod(i,b,t,v,p,''),'',''))},
zxfrac=function(t,b,zM){return zx(frac(t,b,zM))},
zxroot=function(t,n){return zx(root(t,n,'',''))},
zxmod=function(a,b,m,neg){return zx(mod(a,b,m,neg,'',''))},
zxEq=function(A,noteA,style,eqClass){return Eq(Arrf(zx,A),noteA,style,eqClass)},
zxdetail=function(s,v,o){return detail(zx(s),zx(v),o)},


//下列涉及DOM
OH=function(txt,cols){var isA=isArr(txt), t=isA && txt.length==1 && txt[0].indexOf(hr+br)>0?txt[0].split(hr+br):txt;
	$('#oHTML').html(isArr(t)?(cols || t.length>1 && t.length<2?Table('',[t],'TBc dash edit','vat pd10'):t.join(hr)):t);
},

//下列涉及输入编码
$2v=function(str,A){/*将含$字符串，替换为变量
	*/
	if(isArr(str)){
		return Arrf(function(s){return $2v(s,A)}, str)
	}else{
		return str.replace(/\$\d+/g,function(t){return isArr(A)?A[+t.substr(1)]:A})
	}



//下列涉及函数编程API
},fun2str=function(name,val,p){//参数p是完整点.路径
	var tp=typeof val;
	if(tp == 'object'){//遍历对象属性
		if(val instanceof RegExp){
			return sceg2(name)+val
		}
		
		var A=[];
		$.each(val,function(i,v){
			A.push(fun2str(i,v,(p?p+'.':'')+name));
		});
		return XML.wrapE('details','<summary class=obj>'+name+'</summary>'+ A.join(br))
	}

	if(tp == 'function'){
		var s=(''+val).replace(/^[^\(]+/,''), s0=s.split('{')[0], s1=s.substr(s0.length), c=s1.substr(1,s1.length-2),eg2='';
		s0=s0.trim();
		if(/【.+】/.test(c)){
			var A=c.match(/【.+】[^\n]+/g);
			consolelog(A);
			eg2=Arrf(function(x){var x0=x.split('】')[0]+'】', x1=x.split('】 ')[1];return x0+sceg2(x1)}, A).join(br);
			c=c.replace(/【.+】[^\n]+/g,'');
		}
		return sceg2(name+'()','', p?p+'.':'')+eg2+
			(s0 && s0!='()'?detail(s0.substr(1,s0.length-2), XML.wrapE('pre',XML.encode(c))):'')
	}else{
		return sceg2(name,'',p?p+'.':'')+XML.encode(val)
	}

},API=function(A){/* A是JSON数组
	A=[{'zlr':[{'颜色':'a b c'},{'组件':'d e f'}]},{'io':[]}]
	
	bug OH(API([{'zlr':[{'颜色':[{'整数':'gcd'},{'数组':'Arrf'}]},{'组件':'lcm'}]},{'io':[]}]))
	*/
	var t='';
	return Arrf(function(x){
		var s='',u=[];
		consolelog('x=',x);
		$.each(x,function(jsname,funcA){
			var tp=typeof funcA;
			if(isArr(funcA)){
				u.push(detail(jsname,API(funcA))) 
			}else if(tp ==  'object'){
				$.each(funcA,function(grp,funcs){
					if(isArr(funcs)){
						consolelog(grp,funcs);
						u.push(detail(grp,API(funcs)))
					}else{
						u.push(detail(grp,Arrf(function(i){return fun2str(i,eval(i))},ZLR(funcs)).join(br)));
					}
				});
			}else if(tp ==  'string'){
				u.push(detail(jsname,Arrf(function(i){return fun2str(i,eval(i))},ZLR(funcA)).join(br)));
			}
		});
		return u.join(br);
	},A).join(br)


	


//下列涉及规范化字符、预处理


},n2sub=function(n,sup){//数字转Unicode上下标
	var S0=SBS.Num[0][0],S1=SBS.Num[0][1],i=S0.indexOf('⁰');
	return (n+'').replace(/./g,function(t){return /\d/.test(t)?(sup?S0:S1)[i+(+t)]:(sup?'⁺⁻⁼⁽⁾':'₊₋₌₍₎')['+-=()'.indexOf(t)]||t})

},sub2n=function(s,latex){//上下标字符转成普通字符 latex指定转换为latex
	var S0=SBS.Num[0][0],S1=SBS.Num[0][1],regS0=new RegExp('['+S0+']+','g'),regS1=new RegExp('['+S1+']+','g');
	if(latex){return s.replace(regS0,function(t){return sup(sub2n(t),'')}).replace(regS1,function(t){return sub(sub2n(t),'')})}
	return s.replace(/./g,function(t){return /[⁺⁻⁼₊₋₌⁽⁾₍₎]/.test(t)?'+-=+-=()()'['⁺⁻⁼₊₋₌⁽⁾₍₎'.indexOf(t)]:(''+Math.max(S0.indexOf(t),S1.indexOf(t))).replace(/-1/,t)})



},asc2unicode=function(s){//将普通字符转成专门字符
	var t=s.replace(/[\.。]{3}/g,'⋯').replace(/beta/g,'β').replace(/zeta/g,'ζ');
		
	$.each(SBS.Latex,function(k,v){
		if(/[a-z]{2,}/i.test(t)){
		//	if(v=='in'){
				
		//	}else{
		//		t=t.replace(new RegExp(v,'g'),k)
			//	}
			t=t.replace(new RegExp(' '+v+' ','g'),' '+k+' ')
		}else{
			return false
		}
	});
	
	return t


},opreplace=function(x){//运算符规范化预处理	算术运算
	return x.replace(/[]/g,'').replace(/​/g,'')	//不可见字符
		.replace(/ |&#8194;/g,' ')	//非标空格
		.replace(/[乘乖✖ⅹ╳‧][以于与]?/ig,'*').replace(/&#10008;/g,'*')
		
		.replace(/&#65409;&#10135;/g,'除').replace(/ﾁ7ￊ9|&#65409;7&#65482;9|&#10135;/g,'除').replace(/[除➗梅／][以于与]?/g,'/')
		.replace(/[减減]去?|－/g,'-').replace(/[＋加]上?/g,'+')//.replace(/\+\-/g,'±').replace(/\-\+/g,'∓')
		.replace(/（/g,'(').replace(/）/g,')').replace(/[·•。]/g,'.').replace(/[和与，、]/g,',').replace(/；/g,';')
		.replace(/[“”‘’]/g,"'").replace(/[？]/g,'?')
		.replace(/\(([\d\.]*)\)/g,'$1').replace(/∣/g,'|')
		.replace(/[三3]次根号下?/g,'∛').replace(/[四4]次根号下?/g,'∜').replace(/根号下?/g,'√')
		.replace(/log/g,'㏒').replace(/ln/g,'㏑').replace(/!{2,}/g,'‼')
		

},opreplace0=function(x,standard){/*运算符规范化预处理	常量（不含变量）运算
	参数standard 指定按*,/ 标准写法
	*/
	if(standard){
		consolelog(x);
		return x.replace(/[xⅹ╳‧×]/ig,'*').replace(/[÷／]/ig,'/')
	}
	return x.replace(/[xⅹ╳‧]/ig,'×')
		.replace(/[\*]/ig,'×')
		.replace(/[\/]/g,'÷')

},opreplace1=function(x){//运算符规范化预处理	数论函数
	return x.replace(/PI|[π]/ig,'Π')//小于n的素数个数函数Π(n)

},opreplace2=function(x){//运算符规范化预处理	矩阵运算
	return x.replace(/\^T|'/g,'†')//转置（共轭转置）
		.replace(/\^?\*/g,'*')	//伴随矩阵
		.replace(/^\(?⁻¹?\)?/g,'⁻')	//逆（广义逆）

},opreplace3=function(x){//运算符规范化预处理	微积分运算
	return x.replace(/[′']{3}/g,'‴').replace(/[′']+/g,'″').replace(/‵{3}/g,'‷').replace(/‵+/g,'″')
		.replace(/∫{3}/g,'∭').replace(/∫+/g,'∬').replace(/∮{3}/g,'∰').replace(/∮+/g,'∯')
		.replace(/d([xyt])/g,'ⅾ$1')//暂用罗马数字ⅾd，表示微分算符
		.replace(/偏/g,'∂')
		.replace(/o+/g,'∞')



},opreplace6=function(x){//运算符规范化预处理	集合运算
	return x.replace(/[补]/g,'-')
		.replace(/[⋂交\*]/g,'∩').replace(/[⋃并\+]/g,'∪')


},opreplace7=function(x){//运算符规范化预处理	逻辑命题运算
	return re(x.replace(/[与非]/g,'↑').replace(/[或非]/g,'↓')
		.replace(/异或/,'⊕')
		.replace(/[┐┒┓非不]/g,'¬')
		
		.replace(/[⋀Λ且与]|合取/g,'∧').replace(/[⋁或]|析取/g,'∨'))

		.replace(/¬永真蕴含于/g,'⇍').replace(/¬永真蕴含/g,'⇏').replace(/¬等价/g,'⇎').replace(/¬等值/g,'↮').replace(/¬蕴含/g,'↛')
		.replace(/永真蕴含于/g,'⇐').replace(/永真蕴含/g,'⇒').replace(/等价/g,'⇔').replace(/等值/g,'↔').replace(/蕴含/g,'→')



},opreNumRlt=function(x){//关系符规范化预处理		数字关系
	return re(x.replace(/不等于/g,'≠')
		.replace(/〉/g,'>').replace(/〈/g,'<'))
		.replace(/大于等于/g,'≥').replace(/小于等于/g,'≤')

},opreplace16=function(x){//关系符规范化预处理		集合关系
	return x.replace(/不真包含于/g,'⊄')
		.replace(/真包含于/g,'⊂').replace(/不包含于/g,'⊈')

},opreSeqsA=function(x){/* 序列间隔符预处理
	*/
	return x.replace(/[ ，]/g,',')
	
},simOpr=function(s){//简化矩阵运算表达式
	return s.replace(/\+\-/g,'-').replace(/([\+\- ^])1([A-Z])/g,'$1$2').replace(/[\+\-]0I/g,'').replace(/\(A\)/g,'A')



//下列涉及信息提取

},exp2arr=function(str){//表达式内部（子元素按逗号,分隔） to 数组 
	var A=str.split(','),i=-1,chkpairs=function(s,p){//i标记数组中第几个元素括号成对出现（合规）chkpairs检查括号是否成对出现
		if(p){
			return s.length-s.replace(new RegExp('\\'+p,'g'),'').length
		}
		var s0=s.replace(/\(/g,'').length,s1=s.replace(/\)/g,'').length;
		if(s0<s1){
			return [')',s1-s0]
		}
		var s0=s.replace(/\[/g,'').length,s1=s.replace(/\]/g,'').length;
		if(s0<s1){
			return [']',s1-s0]
		}
		var s0=s.replace(/\{/g,'').length,s1=s.replace(/\}/g,'').length;
		if(s0<s1){
			return ['}',s1-s0]
		}
		return ['',0]
	};

	while(i+1<A.length){
		var t=A[i+1],c=chkpairs(t);
		if(!c[0]){
			i++;
		}else{
			A[i+1]+=','+A[i+2];
			A.splice(i+2,1);
		}
	}
	return A

},exp2coe=function(exp,regX,otherVars){/*表达式提取未知量前面的系数
	regX：未知量的正则表达式字符串
	otherVars：其它未知量变量字母串
	
	regX是1时，提取常数项（x的多项式降幂排列的常数项， 或齐次方程=左边的常数项， 或非齐次方程=右边的常数项）
	如果表达式e是方程，则regX是=时，提取等式右边的项
	
	*/
	var e=exp.replace(/ /g,''), R=regX||'x\\d*', r=new RegExp(R,'i'), r1=new RegExp('.*'+(/x\d/i.test(regX)?'x\\d+':'['+(otherVars||'a-zα-ω')+']')+'(\\^.)*','ig');
	//   /x1/.test(s)?e.match(/-*[\da-z]*x1/i)[0].replace(/x.+/,'').replace(/^-$/,-1)||1:0
	if(regX=='='){
		return e.split('=')[1]
	}
	if(''+regX=='1'){
		if(/=/.test(e) && !/=\s*0$/.test(e)){
			return e.split('=')[1]
		}
		
		return e.split('=')[0].replace(r1,'').replace(/^\+/,'')||0
	}

	return r.test(e)? e.split(r)[0].replace(r1,'').replace(/^-$/,-1).replace(/^\+/,'')||1 : 0




// 二维数组平面化


},Mtrx2str=function(A,tbClass,bds){//与矩阵字符串化略有区别，多了递归

	var m=A.length,n=A[0].length,B=[];
	for(var i=0;i<m;i++){
		var Bi=[],Ai=A[i];
		for(var j=0;j<n;j++){
			var Aij=Ai[j],s='';
			//consolelog(i,j,Aij);
			Bi.push(Aij.t?eval(Aij.t).toStr(Aij,Aij.typ||''):Aij)
		}
		B.push(Bi);
	}

	return Table('',B,tbClass||'bd0 alignc',bds)

},sbsTbltd=function(T,e,textareaId,ityp){//LaTeX输入面板功能
	var td=$(T),tr=td.parent(),me=td.children('span'),t=me.text(),iTyp=ityp||'LaTeX', istd=me.is('td'),
		mult=tr.is('.Operator9'), fn=td.is('.Fns'), st=td.is('.Sts'), shft=e.shiftKey || $('#Shift').is('.seled');//排版
	

	if(me.is('.symboli')){
		$('.Symboli td.seled').not(td).not(':has(.symboli_)').click();

		td.toggleClass('seled');
		var di=me.attr('data-i');
		if(!me.is('.symboli_') && !me.parent().parent().is('.Symboli_')){
			$('.symboli_').parent('.seled').removeClass('seled');
			$('.Symboli.Symboli_').hide();
		}

		//Scroll('scrollT');
		if(me.is('.symboli_')){

			$('.symboli_').not(me).parent().removeClass('seled');
			$('.Symboli.Symboli_').not(me.parent().parent().nextUntil('.Symboli:not(.Symboli_)')).hide();
			$(zlr3('.Symboli_[data-i='+di,seqA(1,10).join(' '),']',',')).toggle().find('td.seled').removeClass('seled');
			return
		}
		

		if(fn||st){
			$('.'+ZLR('Fns Sts')[[fn,st].indexOf(true)]+'[data-i="'+di+'"]').toggle();
		}else{
			$('.'+di).toggle();
		}

		return
	}

	var t=me.text().replace('空',' '), SL=SBS.Latex,SLF=ZLR(SL.func);
	if(fn){//函数
		if(iTyp=='LaTeX'){

			var c=td.attr('title'),hassbl=/[^a-z].+/i.test(c),c0=c.replace(/[^a-z].+/i,'');

			t=(SLF.indexOf(c0)>-1?'\\'+c0:'\\text{'+c0+'}')+(hassbl?c.replace(/^[a-z]+/i,''):'');

		}else{
			t=td.attr('title')
		}
		if(!shft){
			t+='()';
		}
		
	}else if(st){//结构
		var tl=td.attr('title');
		t=tl;

		if(iTyp=='LaTeX'){

consolelog(t);
			if(t){
				if(t.indexOf('$')>-1){
					t=t.replace(/^[^\$]+/g,'');
					if(!shft){
						t=eval(t.replace(/\$/g,''))
					}
					t=tl.replace(/\$.+/,'')+t;
				}else{
				//	t=(/^[\{\d\\]/.test(tl)?'':'\\')+tl;
					//t=/^[a-z]/i.test(t)?t.replace(/^[a-z]+/ig,''):t;
				}
			}else if(t=='~'){
				
			}else if(/quad/.test(t)){
				t='\\'+t.replace(/\d/g,'')

			}else if(/thin|med|thick|break|en/.test(t)){
				t='\\'+t.replace(/[^a-z]/ig,'')+'space'

			}else if(/kern|skip|space|phantom|raisebox|smash|lap/.test(t)){
				t='\\'+t;
				
			}else if(/^[,:;!]$/.test(t)){
				t='\\'+t;
				
			}else if(/^.$/.test(t)){
				t='\\'+SL[t];
			}else{
				
			}
		}else if(t.indexOf('$')>-1){
			if(iTyp=='Markdown'){
				if(shft){
					//t='\n$$zx('+t.replace(/\$/g,'')+')$$\n';
					t='\n$'+t+'$\n';
				}else{
					t='$'+eval(t.replace(/\$/g,''))+'$'
				}
			}else if(iTyp=='JS'){
				
				t=t.replace(/\$/g,'');
				
			}
			
		}else{
			
			t='$'+t+'$';
		}

		
		
	}else if(iTyp=='LaTeX' && !isArr(t)){//字符	istd
		var tl=SL[t];
		
consolelog(tl,t);
		if(tl && !shft && t=='≠'){
	//		t='=\\not\\mathrlap{}'	//fix bug of katex ≠
		}else{
			t=tl && !shft?(tl[0]=='^'?'':'\\')+tl+' ':t;
		}
consolelog(tl,t);
	}
		

	var i=$('#'+textareaId), iv=i.val(), sS=i[0].selectionStart, sE=i[0].selectionEnd;
	if(shft && sS!=sE){// fix bug of shift on textarea 
		sS=sE
	}
consolelog(iv,sS,sE);



	var v=iv.substr(0,sS+(t=='删'?-1:0))+(t=='删'?'':t)+(sE==iv.length?'':iv.substr(sE));
	i.val(v).change();

consolelog(v,t);

	t=sS+(t=='删'?-1:(t.length%2==0 && mult?t.length/2:(istd && /\{/.test(t) && !/\(/.test(t)?t.indexOf('{')+1:(/,/.test(t)?(/..,/.test(t)?t.indexOf(',')+1:1):t.length-(+(fn && !shft))))));

	i[0].selectionStart=t;
	i[0].selectionEnd=t;
	//i.focus();
},

sbsTbl=function(){

	// LaTeX支持
	//SBS

	var str='<table class=sbsTbl>',str2='<table class="sbsTbl sbsiTbl">',SL=SBS.Latex,SLF=ZLR(SL.func);
	var strK=function(K,A){
	consolelog(A);
		var si=1,s='',n=Math.max(A[0].length,A[1].length), f=function(c){
			if(c==' '){
				return ''
			}
			var tl=SL[c];
			return '<td'+(tl?' title="'+(tl[0]=='^'?tl:'\\'+tl)+'"':'')+'>'+SCtv('symbol'+si,c)+'</td>'
		},f5=function(i,j){
			var isstr=isStr(A[0]), x=isstr?A[j].substr(i*5,5).split(''):A[j].slice(i*5,i*5+5);
			return x.length?'<tr class='+K+'>'+
				Arrf(f,x).join('')+
				'</tr>':''
		};

		for(var i=0,l=Math.ceil(n/5);i<l;i++){
			s+=f5(i,0)+f5(i,1)
		}

		return s
	};
	var S=ZLR(SBSi),ii=0;
	for(var j=0;j<S.length;j++){
		var K=S[j],A=SBS[K], Kisd=/\d/.test(K);
		if(!Kisd){
			ii++;
		}
		str2+='<tr class="Symboli'+(Kisd?' Symboli_" data-i="'+K:((ii>3?' hidden':'')+'" data-ii="'+ii))+'">';

		for(var i=0;i<A.length;i++){
			str+=strK(K+i,A[i]);

			var uc=A[i][0][0];
			str2+='<td>'+SCtv('symboli" data-i="'+K+i,uc)+'</td>'
		}
		if(!Kisd){
			str2+='<td>'+SCtv('symboli symboli_" data-i="'+K,'...')+'</td>'
		}

		str2+='</tr>'
	}


	$('#sbs').append(str+'</table>');
	$('#isbs').append(str2+'</table>');

	//FUNCS
	var str='<div class=sbsTbl>',str2='<table class="sbsTbl sbsiTbl">';
	var strK=function(K,A){

		var s='<div class=Fns data-i="'+K+'">',n=A.length;
		for(var i=0;i<n;i++){
			var c=A[i],hassbl=/[^a-z].+/i.test(c),c0=c.replace(/[^a-z].+/i,'');

			s+='<div class="Fns td" title="'+c+'">'+SCtv('symboln',zx((SLF.indexOf(c0)>-1?'\\'+c0:'\\text{'+c0+'}')+(hassbl?c.replace(/^[a-z]+/i,''):'')))+dc;
		}
		s+=DCtv('clear')+dc;
		return s
	};
	for(var i=0,l=FUNCSi.length;i<l;i++){
		var S=FUNCSi[i];
		str2+='<tr class="Symboli'+(i>2?' hidden':'')+'" data-ii="'+(i+1)+'">';
		for(var j=0;j<S.length;j++){
			var K=S[j],A=FUNCS[K];
			str+=Arrf(function(x){return strK(K,ZLR(x))},A).join('');
			str2+='<td class=Fns>'+SCtv('symboli" data-i="'+K, gM(K))+'</td>'

		}
		str2+='</tr>';
	}

	$('#funcs').append(str+dc);
	$('#ifuncs').append(str2+'</table>');

	//STRUC
	var str='<div class=sbsTbl>',str2='<table class="sbsTbl sbsiTbl">';
	var strK=function(K,A){
	//consolelog(K,A);
		var s='<div class=Sts data-i="'+K+'">',n=A.length;
		for(var i=0;i<n;i++){
			var c=A[i];
			if(K=='Margin Value'){
				c=c.split('{')[0].substr(1)+c
			}

			s+='<div class="Sts td" title="'+c.replace(/.backslash./,'')
				.replace(/^[a-z]{4,}/g,'')
				.replace('\\tilde~','~')
				.replace(/^(\*|\[b\])/,'')
				+'">'+SCtv('symboln',zx(c.replace(/math(.lap)/,'$1').replace(/phantom/,'p')
				))+dc;
		}
		s+=DCtv('clear')+dc;
		return s
	};
	var SA=STRUCi;
	for(var i=0;i<SA.length;i++){
		var S=SA[i];
		str2+='<tr class="Symboli'+(i>=3?' hidden':'')+'" data-ii="'+(i+1)+'">';
		for(var j=0;j<S.length;j++){

			var K=S[j],A=STRUC[K];
			//str+=strK(K,A);
			consolelog(K,A);
			str+=Arrf(function(x){return strK(K,x)},A).join('');
			
			A=A[0];
			
			str2+='<td class=Sts title="'+gM(K)+'">'+SCtv('symboli" data-i="'+K, zx(K=='Margin Value'?A[0].split('{')[0].substr(1)+A[0]:A[0]))+'</td>'//K
		}
		str2+='</tr>'
	}

	$('#struc').append(str+dc);
	$('#istruc').append(str2+'</table>');

	$('.sbsTbl > tbody > tr, .sbsTbl > div').not('.Symboli:not(.Symboli_)').hide();	
};



$.each(FUNCS,function(i,v){SBSFn=SBSFn.concat(Arrf(ZLR,v.join(' ')))});

var SBSFUN=SBS.Latex.func_tri.concat(SBS.Latex.func.replace(/.+% |log ln |sin .+ arcctg /g,'')+
			' Arg ㏒ ㏑').join(' ');
var snippet={
	Ini:function(){
		L.snippets=L.snippets||1;
		L.snippetName1=L.snippetName1 || gM('Snippet');
		L.snippetType1=L.snippetType1 || 'LA';
		L.snippet1=L.snippet1 || '';
	},
	Save:function(){
		var s=$('.snippet.seled'), i=s.index()+1, p=$('#input0Type').val();
		L['snippetName'+i]=s.find('.snippetName').text();
		L['snippetType'+i]=ZLR(Meles)[ZLR(Mele).indexOf(p)]||p;
		L['snippet'+i]=$('#input0').val();
		L['snippets']=$('.snippet').length;
	},
	Str:function(name,type,selected){
		return DCtv('snippet'+(selected?' seled':'')+'" data-type="'+type,
				SCtv('snippetName" contentEditable="true',
				name)+itv('snippetSend" '+($('#send2textBox').is(':visible')?'':' hidden')+'tip="copy2input','arrow_upward')+
			(selected?itv('snippetNew','add'):''))
	},
	load:function(i){
		$('#input0').val(L['snippet'+i]||''), t=L['snippetType'+i];
		$('.snippet').removeClass('seled').find('.snippetNew').remove();

		if($('.snippet').length<i){
			$('#snippets').append(snippet.Str(L['snippetName'+i],t,1));
		}else{
			$('.snippet').eq(i-1).replaceWith(snippet.Str(L['snippetName'+i],t,1));
		}

		$('#input0Type').val(Meleo[t]||t).change();
	},
	Del:function(i){
		var s=$('.snippet.seled'), x=i || s.index()+1, l=$('.snippet').length;
		if(x){
			for(var j=x;j<=l;j++){
				L['snippetName'+j]=L['snippetName'+(j+1)];
				L['snippetType'+j]=L['snippetType'+(j+1)];
				L['snippet'+j]=L['snippet'+(j+1)];
			}
			L['snippets']=l-1;

		}

	}
};
snippet.Ini();

$(function(){
	$('body').on('click', '.sbsTbl td, .sbsTbl .td',function(e){
		var p=$('#input0Type').val();
		if(/Canvas|JavaScript|HTML|3D/.test(p)){
			p='JavaScript';
		}
		sbsTbltd(this,e,'input'+$('#input1.seled').length,p);

	}).on('click', '.snippetName',function(){
		var me=$(this),pa=me.parent(), t=pa.attr('data-type'), i=pa.index()+1;
		if(me.nextAll('.snippetNew').length<1){

			me.next().after(itv('snippetNew','add'));
		}
		pa.addClass('seled').siblings().removeClass('seled').find('.snippetNew').remove();

		$('#input0Type').val(Meleo[t]||t);//.change();
		$('#input0').val(L['snippet'+i]);

	}).on('change keyup mouseup', '.snippetName',function(){
		var me=$(this), t=me.text().trim(), pa=me.parent();
		var i=pa.index()+1;
		L['snippetName'+i]=t;

	}).on('click', '.snippetSend',function(){
		$('#input0').change();
		var v=L['snippet'+($(this).parent().index()+1)],
			ta='#'+L.tool+'Ground .ground1 .editorText';
		if(v.trim()){
			textareaAdd(v,ta);
			$(ta).change();
		}

	}).on('click', '.snippetNew',function(){
		var me=$(this),pa=me.parent();

		pa.removeClass('seled').after(snippet.Str(me.prevAll('.snippetName').text(),
			pa.attr('data-type'),1));
		var i=$('.snippet').length;
		L.snippets=i;

		me.remove();
		snippet.Save();

	}).on('click','#snippetDel',function(){
		if($('.snippet').length>1){
			snippet.Del();
			var i=$('.snippet.seled').index()+1;
			$('.snippet.seled').remove();
			snippet.load(i>$('.snippet').length?1:i);
		}


	}).on('mouseover', '#TextLaTeXBox .sbsTbl td, #TextLaTeXBox .sbsTbl .td',function(e){
		var me=$(this),t=me.attr('title'),iT=$('#input0Type').val();
		if(iT!='LaTeX' || !t && me.parents('#sbs').length || me.is('.Sts.td') && !/^\$.+\$/.test(t)){
		}else{
			toolTip(gM(me.parents('.iTextLaTeX').attr('id').replace(/^i/,'')+'ontip'));
		}

	}).on('click','.eg', function(e){

		var me=$(this),t=me.attr('data-eg'),shft=e.shiftKey || $('#Shift').is('.seled'),
			i1=me.parents('.inputTip').parent().attr('id'),
			isjs=me.is('.js'), isnode=me.is('.node'),
			tbt=me.parents('#TextBoxTool').length, fxTXT=me.parents('#fxTXT').length;
		if(isjs){
			t+=';\n'
		}else if(isnode){
			t=XML.wrapE(t)
		}else{
			t=t.replace(/&&(?! )/g,'\n')
		}
		if(!(i1 || tbt || fxTXT)){
			copy2clipboard(t)
			return
		}

		var is2=me.is('.eg2'),
			i=fxTXT?'fxTxt':(tbt?'TextBox':'input'+i1.replace(/\D/g,''));
		i=$('#'+i);
		var iv=i.val();

		if(is2){
			var td=$('#sbsTbl td').filter(function(){return $(this).text()==t}).eq(0);
			if(td.length){
				i.click();
				td.click();
				return
			}else if(!isjs){
				if(/\.\d/.test(t)){
					t=t.replace(/\.(\d+)/,'[$1]')	//这里要确认.何时需要替换为[]?
				}
				

			}
		}else if(i1 && iv && !shft){
			
		}else{
			i.val(t);
			if(!tbt && $('#preview.seled').length){
				preDisplay()
			}
			return
		
		}
		
		var sS=i[0].selectionStart, sE=i[0].selectionEnd;
		i.val(iv.substr(0,sS)+t+(sE==iv.length?'':iv.substr(sE)));
		var s2=sS+t.length;
		//i.focus();
		i[0].selectionStart=s2;
		i[0].selectionEnd=s2;
		
		if(!tbt && $('#preview.seled').length){
			preDisplay()
		}


	}).on('click','#swap',function(){
		$('.Symboli td:visible:not(:has(.symboli_)).seled').click();
		$('.Symboli td.seled:visible').click();
		var id=($('.iTextLaTeXon .tool.seled').attr('id')||'').replace(/on/,''), i=3;
		if(id){
			var tr=$('#i'+id+' .sbsiTbl tr').not('.Symboli_');
			if(id=='struc'){
				var tn=tr.length;
				i=tr.filter(':visible').eq(0).index();

				tr.slice(i,i+3).hide();
				if(i+3>tn-1){
					i=-3
				}
				tr.slice(i+3,i+6).show();
				
			}else{
				if(tr.eq(0).is(':visible')){
					tr.slice(0,i).hide();
					tr.slice(i).show();
				}else{
					tr.slice(i).hide();
					tr.slice(0,i).show();
				}
			}
		}
		
	});
});