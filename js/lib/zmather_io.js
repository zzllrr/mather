/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 * 
 * 
 * 依赖：
 * 需先加载 KaTeX
*/


var SBSi=[zlr('Num',' 1 2 3'),
	zlr('ABC',' 1 2 3'),
	zlr('DEF',' 1 2 3'),
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

		['ℵℶℷℸ℘°℃℉ð₴','∞∝∅⍉⌀∂∇¬∀∃'],
		['ƒℎæœＣ₵açþÞ','ℲℏÆŒϹ∁āÇÐß'],

	],


	ABC1:[

		['ⅰⅱⅲⅳⅴⅺⅻ','ⅵⅶⅷⅸⅹⅼⅽⅾⅿ'],
		['ⅠⅡⅢⅣⅤⅪⅫ','ⅥⅦⅧⅨⅩⅬⅭⅮⅯ'],
		['ℂℍℙℚ ℭℌℑℜ','ℕℝℤℨ'],
		['ℬℰℱℋ ℯℊℴℓ','ℐℒℳℛ'],
		['⍶⍺ϐϒϕ⍳⍸⍴ϱ','ϵ⍷ℇϑϴ⍵⍹ϖ∂∇'],

	
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
		['ⒶⒷⒸⒹⒺⓀⓁⓂⓃⓄⓊⓋⓌⓍⓎ','ⒻⒼⒽⒾⒿⓅⓆⓇⓈⓉⓏ'],
	],

	ABC3:[
		['ᴬᴮᒼᴰᴱᴷᴸᴹᴺᴼᵁ៴ᵂ  ',' ᴳᴴᴵᴶᴾ ᴿ  ᙆ'],
		['ᵃᵇᶜᵈᵉᵏˡᵐⁿᵒᵘᵛʷˣʸ','ᶠᵍʰⁱʲᵖ ʳˢᵗz'],
		['ₐ ₑₒᵣᵪᵧ','  ᵤᵥₓ'],
		['␆␇␈␘␍␛␗␃␌␜␞␏␎␁␠','␡␐␙␅␄␝␉␊␕␤␂␚␖␟␋'],
	],

	DEF:[
		['āáǎàaēéěèeūúǔùu','ōóǒòoīíǐìiǖǘǚǜü'],


		[['æ','e','ɛ','//','[]', 'ɒ','ɑ','u','ʊ','ʌ',  'ɔː','ɔ','uː','u','ɑː' ],['i','ɪ','ə','ɚ','ɔ',  'iː','i','əː','ɜː','ɝ']],

		[['ei','eɪ','e','ai','aɪ',  'əʊ','oʊ','o','iə','ɪə',  'ʊə','ʊr','ˈ','ˌ','//'],['ɔi','ɔɪ','au','aʊ','əu',  'ɪr','ɛə','eə','ɛr','uə']],

		[['p','t','k','f','s', 'θ','ʃ','tʃ', 'n','m',  'h' ,'j','l','ℓ','r' ],['b','d','ɡ','v','z',  'ð','ʒ','dʒ', 'ŋ' ,'w']],

	],
	DEF1:Arrf(function(t,i){return [Latin(t,true).join('').replace('É','$&G'),
		Latin(t).join('').replace('⊙⋅⃛','i')
	]},entity.slice(4,9)),

	DEF2:Arrf(function(t,i){return [Latin(t,true).join(''),
		Latin(t).join('').replace('◯','')
	]},entity.slice(9)).concat([['₠₡₢₣₤₥₦₧₨₩','₪₫€₭₮₯₰₱₲₳']]),

	DEF3:Arrf(function(x,i){return [fCC(seqA(x,10)),fCC(seqA(x+10,(i==4?4:10)).concat(i==4?seqA(13169,6):[]))]},seqA(13184,5,'',20)),

	Operator:[
		['∑∏∐⋀⋂∮∯∰⨁⨂','∫∬∭⋁⋃∱∲∳⨀⨌'],
		['′″‴!† ¬∀∃∄√∛∜⨳','‵‶‷‼‡∂∇✓※'],
		['+×±⊕ ∧∨∩∪','-÷∓⊗∖'],
		[ ZLR('() [] {} <> 〈〉 ⁽⁾ ┌┐ ⌈⌉ ⎰⎱ ⟦⟧ ║║ ||'),
		ZLR('(,) [,] {,} <,> ⟨⟩ ₍₎ └┘ ⌊⌋ (,] [,)')],//⟮⟯
	],

	Operator1:[
		['+∓⍅⍏⌿⌗†⌶','⊹±⍆⍖⍀⋕#‡'],
		['‐‑‒−⁃¦∣∤','–—―－'],
		['‾∓∔∸∺∻÷∹⍎','_±‗⍘⍙⍚⍛⍜⍕'],
			
		['×⨉∕╱','╳⋇∖╲'],
			
		['⊕⨁⨂⊖⊗⦿⊙⨀⊚⌾','⊘⌽⊜⊝⍟⧀⧁⊛⌻⌼'],
	],

	Operator2:[
		
		['∧⋀⌃⌅⊼⌆⩞⋋⋏⨇','∨⋁⌄‸⊻ ⊽⋌⋎⨈'],
		['∩⋂⋓⋔ ⨃⨄⨅⊓','∪⋃⋒ ⊌⊍⊎⨆⊔'],

		['∡∠⦛⦣⦤⦠⦟⦞','∢⊿⊾⦢⦥⦡∟⦜⦝'],
		['⊞⊠⍁⌸⊡⍃⍄⌺⍐⍍⍓⍌⍰□■','⊟⌹⍂⍯⍠⍇⍈⍞⍗⍔'],
		['≖⋄','◯']

	],

	Relation:[

		['⋅∙•‧․∘°','⋆∗⁂⁑'],
		[':‥∷∟∠⋯⋰∵∦⊥','∶¨⁞⦜△⋮⋱∴▱◇'],
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
//'ς':'zelta',//实际无此字母，暂以Zelta命名
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
'∁':'mathtt{C}',	// complement

'⊺':'intercal',
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


'†':'dag',
'‡':'ddag',

'∡':'measuredangle',
'∢':'sphericalangle',
'⋄':'diamond',
'◊':'Diamond',	//lozenge
'⧫':'blacklozenge',
'♢':'diamonds',	//diamondsuit	

'♣':'clubs',	//clubsuit
'♠':'spades',
'♡':'hearts',
'✠':'maltese',

'♮':'natural',
'♯':'sharp',
'♭':'flat',

'⋆':'star',
'★':'bigstar',

'∙':'bullet',

'℧':'mho',
'╱':'diagup',
'╲':'diagdown',
'∖':'setminus',

'⟨':'langle',
'⟩':'rangle',

'{':'lbrace',
'}':'rbrace',

'[':'lbrack',
']':'rbrack',

'|':'lvert',
'|':'llvert',

'∧':'land',
'∨':'lor',
'¬':'neg',	//lnot

'⊼':'barwedge',
'⩞':'doublebarwedge',

'¥':'yen',
'£':'pounds',

'⊛':'circledast',
'⊚':'circledcirc',
'⊝':'circleddash',
'®':'circledR',
'Ⓢ':'circledS',
'§':'text{\\S}',
'¶':'text{\\P}',

'■':'blacksquare',
'□':'square',	// Box
'⊡':'boxdot',
'⊟':'boxminus',
'⊞':'boxplus',
'⊠':'boxtimes',

'≀':'wr',

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
		//injlim	
'func':'# & % exp log ln lg arg gcd max min sup inf lim limsup liminf sin cos tan cot sec csc sh ch th cth tg ctg cotg tanh cosec arcsin arccos arctan arctg arcctg det dim deg hom ker Pr sinc si Si ci Ci Shi',

/*
'struc':{//结构

	
},
*/
//∘°度数

//\,, \:, \;, \quad, \qquad 空格由小到大
// 排版 equation, gather, align split alignat{n} 		gathered,aligned, alignedat intertext
// numberwithin eqref subequations 

		'±':'pm',
		'∓':'mp',
		'×':'times',
		'÷':'div',

		'⋇':'divideontimes',
		'∣':'mid',
		'∤':'nmid',
		'⋅':'cdot',	//cdotp centerdot




		'∘':'circ',
		'∗':'ast',
		'⨀':'bigodot',
		'⨂':'bigotimes',
		'⨁':'bigoplus',

		'⊕':'oplus',
		'⊖':'ominus',
		'⊗':'otimes',
		'⊘':'oslash',
		'⊙':'odot',

		'≡':'equiv',
		'≠':'ne',	// \ne \not= \neq

	//	'≠':'=\\not\\mathrlap{}',

/*
		bug	 不等号被Katex显示成 / = 		写成		=\not\mathrlap{}
	
2≠3\\
2\neq3\\
2\ne3\\

*/

		'✓':'checkmark',


		'≪':'ll',
		'≫':'gg',
		'⋘':'lll',
		'⋙':'ggg',

		'≤':'leq',
		'≥':'geq',

		'≦':'leqq',
		'≧':'geqq',
			
		'└':'llcorner',
		'┘':'lrcorner',

		'⋉':'ltimes',
		'⋊':'rtimes',

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
		'⋒':'Cap',	// doublecap
		'∩':'cap',
		'⋓':'Cup',	// doublecup
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
		'◯':'bigcirc',

		
		'.':'ldotp',
		
		'…':'ldots',	//dotsc	dotso
		'⋯':'cdots',	//dotsb	dotsm	idotsint
		'⋱':'ddots',
		'⋮':'vdots',
		'⋰':'iddots',

		'∵':'because',
		'∴':'therefore',
		'∀':'forall',
		'∃':'exists',
		'∄':'nexists',

		'≯':'not>',
		'̸⊄':'not\\subset',


		'⊥':'bot',
		'∠':'angle',
		'°':'^\\circ',
		
		'′':'prime',
		'″':"''",
		'‴':"'''",
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

':':'colon',
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
'⋎':'curlyvee',
'⋏':'curlywedge',

'⊣':'dashv',
'::':'dblcolon',
'≐':'doteq',
'≑':'Doteq',
'≑':'doteqdot',

'∔':'dotplus',

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

'⋗':'gtrdot',
'⪆':'gtrapprox',
'⋛':'gtreqless',
'⪌':'gtreqqless',
'≷':'gtrless',
'≳':'gtrsim',
'∈':'in',
'∈':'isin',
'⋈':'Join',

'<':'lt',
'⋖':'lessdot',

'⩽':'leqslant',
'⪅':'lessapprox',
'⋚':'lesseqgtr',
'⪋':'lesseqqgtr',
'≶':'lessgtr',
'≲':'lesssim',
'≪':'ll',
'⋘':'lll',
'⋘':'llless',

'∣':'mid',
'⊨':'models',
'⊸':'multimap',
'∋':'owns',	//ni
'‖':'parallel',
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
'∥':'lVert',	//shortparallel
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
'△':'vartriangle',	//bigtriangleup
'▽':'triangledown',	//bigtriangledown
'◃':'triangleleft',
'▹':'triangleright',

'⊲':'lhd',	//vartriangleleft
'⊳':'rhd',	//vartriangleright

'▲':'blacktriangle',
'▼':'blacktriangledown',
'◀':'blacktriangleleft',
'▶':'blacktriangleright',

'⋋':'leftthreetimes',
'⋌':'rightthreetimes',

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
	['Arithmetic','Number Theory'],

	ZLR('Algebraic Analytical'),
	ZLR('Set Logistical'),
	ZLR('Geometric Topological'),
	ZLR('Probabilistic Statistical'),
]
	
,FUNCS={
	'Number Theory':['dr Re Im rad ind'],
	'Arithmetic':['gcd log exp Arg','lcm ln lg arg','mod sgn'],// ㏒ ㏑
	'Algebraic':['rank diag tr det','adj dim hom ker per','span proj Pr'],
	'Trigonometric':['sin tan sec','cos cot csc',
		zlr('arc','sin tan sec'),zlr('arc','cos cot csc'),
		'Si si sinc cis','Ci ci Cin arccis'
	],
	'Hyperbolic':['sh th sech','ch cth csch',
		zlr2('sh th sech','^{-1}'),zlr2('ch cth csch','^{-1}'),
		'Shi','Chi'

	],//⁻¹

	'Analytical':['lim sup inf grad','limsup liminf curl rot','inj~lim proj~lim div'],
	'Set':[],
	'Logistical':['OR AND XOR','NOR NAND XNOR'],
	'Probabilistic':['Bin Geo'],
	'Statistical':['min max'],

	'Topological':[],
	'Geometric':['deg',],
	'Combination':[],
}


,STRUCi=[//

	ZLR('Fraction Equality Non-equality'),
	ZLR('Subsup Root Differential'),

	ZLR('Sum Limit Integral'),
	

	ZLR('Align Linebreak Define'),
	ZLR('Matrix Det Summarize'),
	['Parentheses','Big Parentheses','Binom'],

	ZLR('Over Latin Color'),
	['Lowercase Greek','Uppercase Greek','Hebrew'],
	['Font','Math Font','Text Font'],

	ZLR('Note Reasoning Relation'),
	['Notes','Margin','Negative Margin'],
	['Margin Space','Margin Value','Size'],

]
	
,STRUC={


	'Fraction':[
		['1\\/2'].concat($A(zlrA3("kfrac(",[
			"[3,4]",
			"'1/2+3/4+5/6',1",
			
		],")"))).concat('{$Random(100)$}\\/{$Random(100)$} $\'+-×÷\'[Random(4)-1]$ {$Random(100)$}\\/{$Random(100)$}'),
		["$kfrac('1/2')$"].concat(zlrA3('\\',['','t'],'frac{1}{2}'),
		zlrA3('\\',['','t'],'frac{1}{1+\\frac{1}{2}}')),

		[],
		
		[
		"\\dfrac{1}{2}",
		"\\cfrac{1}{1 + \\cfrac{1}{2}}",
		"$mfracs([1,3,5],[2,4,6],'',1,'+','')$"
		],
		
	],


	'Note':[
		zlrA3("$eq(1,'",'→↔←↦'.split(''),"',2)$"),//katex 暂不支持 ⇆ ↤	//←↔→⇐⇔⇒=↩↪↞↠↼⇀↽⇁⇋⇌⇄↦
		['\\stackrel{1}{\\longrightarrow}'].concat(zlrA3("$eq(1,'",'↩↪↞↠'.split(''),"',2)$")),
		['\\stackrel{1}{\\longleftarrow}'].concat(zlrA3("$eq(1,'",'↼⇀↽⇁'.split(''),"',2)$")),
	
		
	],


	'Reasoning':[
		zlrA3("$eq(1,'",'=⇒⇔⇐'.split(''),"',2)$"),//katex 暂不支持 ⇆ ↤
		zlrA3("$eq(1,'",'⇋⇌⇄'.split(''),"',2)$"),
	],

	'Define':[
		['\\def\\zzllrr#1#2{{#1}+{#2}}\\zzllrr{\\pi}{4}',
		'\\newcommand\\test[2]{\\color{#1}{\\heartsuit}\\color{#2}{\\heartsuit}} \\test{red}{blue}']
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
	


	'Root':[['√2','∛3','∜4','√{ab}'].concat($A(
		zlrA3('mroots(',ZLR("[2,3],['','x','y'],'','','+-',1"),",'')")
	)),
		$A(zlrA3("kroot('x'",['',',3',',4'],')')
			.concat(zlrA3("kfrac([",ZLR("kroot(2),2 kroot(5)+'-1','2'"),'])'))),
		[],
		$A(zlrA3("kfrac([",ZLR("'-b±'+kroot('b^2-4ac'),'2a'"),'])')),
		$A(zlrA3('mroots(',ZLR("[2,3,4,5],['',1,10,100,1000],'',1,'+',1"),",'')"))
	],

	
	'Equality':[['='].concat($A(
		zlrA3("Eq([",[
			"'x',''],'','line'",
			"'x','y',2],'','line'",
		],')').concat(
			[
				"eq0(['x','y'])",
			]
		))),

		$A(zlrA3("aligned(['x','= 1','= 2']",[
			"",
			",1"
		],")").concat("aligned(['~ \\\\quad x','= 1','= 2'])")).concat(
			$A(zlrA3("Eq([",[
				"['x','1'],'2']",
				"'x','1','2']",
				],')')
			)
		),

		[],
		$A([
			"kmod('a','b',2)",
			"eq0(['x','y'],3,5)",
		]),

		$A(zlrA3("Eq([",[
			"['x','1'],'2'],'','','≡'",
			"'x','1','2'],'','','≡'",
			],')').concat([
				"eqM([1,-1],2)"
			])
		),
		
		[],


	],

	'Non-equality':[['≤'].concat($A(zlrA3("Eq([",[
		"'x',''],'','line',['≤']",
		"'x','y',2],'','line',['=','≤']",

		],')'))),
		['≥'].concat($A([

			"Eq(['x','y',2],'','line',['=','≠'])",
		])),
		['≠'].concat($A([
			"kmod('a','b',2,1)",
		])),

	],


	'Summarize':Arrf(tinyA,[
		
		zlrA3("piece(",[
			"[1,2]",
			"[[1,2],[3,4]]",
		],')').concat("mtrx([[1,2],[3,4]],'B','B','')"),
		zlrA3('piece(',[
			"[1,2],1",
			"[[1,2],[3,4]],2",
			],')'),
		[],
		[
			"EqA(['1x+2y=3','4x-5y=6'])",
			"EqA(['1x+2y>=3','4x-5y<=6'])",
		]
	]),


	'Notes':Arrf($A,[

			zlrA3("kx",[
				"o('a+b','{'",
				"o('a+b','{','note'",
			],')'),
		
			zlrA3("kx",[
			"u('a+b','{'",
			"u('a+b','{','note'"
			],')'),

	]),

	'Parentheses':[zlrA3("$zp('x^2'",[
		"",
		",'<>'",
		",'[]'",
		",'{}'",
	
		",'/\\\\'",
		
		],')$'),
		zlrA3("$zp('x^2'",[
		",'||'",
		",'‖‖'",
		",'⌊⌋'",
		",'⌈⌉'",
	
		],')$'),
		zlrA3("$zp('x^2'",[
	
		",'↑↓'",
		",'↕↕'",
		",'⇑⇓'",
		",'⇕⇕'",
		],')$'),
		zlrA3("$zp('x,y'",[
			",'','(','.'",
			",'','.',')'",
			",'(]'",
			",'[)'",
	
		],')$'),
		["$pp('x,y')$",
		"$zp('x,y','','<','>')$",
		"\\mathopen\\lt a\\mathclose\\gt",
		'\\pod a'],
	],

	'Big Parentheses':Arrf($A,[
		['big(0)+big(0,1)','big(1)+big(1,1)','big(2)+big(2,1)','big(3)+big(3,1)'],
		['big(0,2)+big(0,3)','big(1,2)+big(1,3)','big(2,2)+big(2,3)','big(3,2)+big(3,3)'],
		['big(0,4)+big(0,5)','big(1,4)+big(1,5)','big(2,4)+big(2,5)','big(3,4)+big(3,5)'],
	
	]),

	'Matrix':Arrf(tinyA,[zlrA3("zmtrx([[1,2],[3,4]]",[
			"",
			",'','.',''",
			",'','p',''",
		],')'),
		
		zlrA3("zmtrx([[1,2",[
			"],[3,4]],'','r2c2'",
			",3,4],[5,6,7,8]],'','c2'"
		],')'),
		[],

		zlrA3("Eq([",[
			"zmtrx([[1,2],[3,4]]),zmtrx([[5,6],[7,8]])],[['1','2']],'','→'",	//\\begin{aligned} & ~ \\\\quad x \\\\  & =1 \\\\  & =2 \\end{aligned}
			"zmtrx([[1,2,3,4],[5,6,7,8]],'','c2'),zmtrx([[1,2,3,4],[5,6,7,8]],'','c2')],[['1','2']],'','→'"
		],')'),
		[],[],

		zlrA3("zmtrx(Arrf(ZLR,",[
			"['a_{11} a_{12} a_{13}','a_{21} a_{22} a_{23}','a_{31} a_{32} a_{33}']",
			"['a_{11} a_{12} a_{13} ⋯ a_{1n}','a_{21} a_{22} a_{23} ⋯ a_{2n}','a_{31} a_{32} a_{33} ⋯ a_{3n}','⋮ ⋮ ⋮ ⋱ ⋮','a_{n1} a_{n2} a_{n3} ⋯ a_{nn}']",

		],'))'),
		[],[],

	]),




	'Det':Arrf(tinyA,[

		["kdet([[1,2],[3,4]])",
		 "zdet(['1 2','3 4'])",
		 "mtrx([[1,2],[3,4]],'V','V','')",
		],
		
		zlrA3("Eq([",[
			"kdet([[1,2],[2,4]]),0],[['1st','2nd']]",
			"kdet([[1,2],[3,4]]),kdet([[5,6],[7,8]])],[['1st','2nd']]",
		],')'),
		[],
		
		zlrA3("zdet(",[
			"['a b   ','c a b  ',' ⋱ ⋱ ⋱ ','  c a b','   c a']",
			"['a     b',' ⋱   ⋰ ','  a b  ','  c d  ',' ⋰   ⋱ ','c     d']",

		],')'),[],[],

		zlrA3("zdet(",[
			"['a_{11} a_{12} a_{13} ⋯ a_{1n}','a_{21} a_{22} a_{23} ⋯ a_{2n}','a_{31} a_{32} a_{33} ⋯ a_{3n}','⋮ ⋮ ⋮ ⋱ ⋮','a_{n1} a_{n2} a_{n3} ⋯ a_{nn}']",
			"['1 1 1 ⋯ 1','a_1 a_2 a_3 ⋯ a_n','a_1^2 a_2^2 a_3^2 ⋯ a_n^2','⋮ ⋮ ⋮ ⋱ ⋮','a_1^{n-1} a_2^{n-1} a_3^{n-1} ⋯ a_n^{n-1}'],2",

		],')'),[],[],

		
		
	]),



	'Sum':[['\\Sigma','\\Pi','\\sum','\\prod']
	].concat(
		Arrf($A,[
			zlrA3("sum('i',0,'+','f',",[0,1,3,6],",'')").concat("sum('','i+j=10','','f',0,'')"),

			zlrA3("prod('i',0,'+','f',",[0,1,4,8],",'')").concat("prod('','i|24','','f',0,'')"),

			zlrA3("prod('i',0,'+','f',",[3,7],",'')").concat("sum('',['i+j=10','i<j'],'','f',0,'')"),
			
			zlrA3("sum('i',0,'+','f',",[2,4,5],",'')"),
			zlrA3("prod('i',0,'+','f',",[2,5,6],",'')"),
			
			["Opr('','-','+','f','*')"]
			

		])
	),

	'Limit':[['\\lim'].concat(
			zlrA3("$lim('x','",[
				"+','f','",
				"-','f','",
				],"','')$"
			)
		).concat('\\infty'),
		zlrA3("$lim('x','0",[
			"','f','",
			"+','f','",
			"','f','u",
			"','f','d",
			],"','')$"
		),
		[],
		["e^x=$lim('n','',kfraczp('1+'+kfrac(['x','n']),'','n'),'','')$",
			'\\lim\\limits_{\\substack{x→0\\\\y→0}}f(x,y)'
		]
	],
	

	'Differential':[
		$A(["difn('f')"].concat(zlrA3("difn('f','x',",[
			"''",
			"1",
			],")")
		,"difn()","difn('','',1)")),
		['\\d x','\\mathrm{d}y','∂x','\\d x∧\\d y','\\nabla'],
		[],
		$A(zlrA3("difn('f','x',",[
			"'',2",
			"1,2"
			],")").concat(zlrA3("difn('f',['x','y']",['',',1'],")"))),
		$A(["difn('(x,y)','(u,v)',1)", "zp(difn('(x,y)','(u,v)',1),'|')", "difn('f',['x','y','z'],1)"]),
	],

	'Integral':[['\\int','\\smallint','\\textstyle\\int',"\\int \\limits_{L}",
				"$iint('','L','','s',1,1)$",
				"$intl('F(x)','0','1','',-1)$"
				]
			].concat(Arrf($A,[
			["intl('f','-1','1','x',0,'')", "intl('f','-','+','x',0,'')", "intl('f(t)','0','x','t',0,'')","orifun('0','2π')"],
			[],

			["iint(['P','+Q'],'L','','x;y',1,1)", "iint('ω','∂M','',' ',1,1)+'='+iint('','M','','ω',1,1)",
				"intl('','0','2π','θ',0,'')+intl('f','0','1','ρ',0,'')"],
			["oint(['P','+Q'],'L','','x;y',1,1)+'='+iint(zp(difn('Q','x',1)+'-'+difn('P','y',1)),'D','','x,y',2,1)",
				"intl('','0','1','x',0,'')+intl('f','0','1','y',0,'')"],
			[],


			["iint('f','Σ','','',2,1)", "iint('f','Σ','','x,y',2,1)",  "iint('f','Σ','','φ,θ',2,1)", "iint('f',['x^2+y^2=1','x>=0'],'','x,y',2,1)"], 
			["oint(['P','+Q','+R'],'Σ','','x,y;y,z;z,x',2,1)", "iint('f','Σ','','x, y',2,1)",],
			[],
			["iint('f','Ω','','',3,1)", "iint('f','Ω','','x,y,z',3,1)","intl('f','-','+','x',6,'')"],
			["oint(['P','+Q'],'Ω','','x,y,z;y,z,t',3,1)","intl(intl(intl('f','0','R','r',0,''),'0','π','φ',0,''),'0','2π','θ',0,'')"],
			[],
			["intl('','0','1','x',0,'')+intl('','0','x','y',0,'')+intl('f(x,y,z)','0','z(x,y)','z',0,'')","intl('','0','2π','θ',0,'')+intl('f','0','θ','ρ',0,'')"],
			["intl('','0','2π','θ',0,'')+intl('','0','π','φ',0,'')+intl('f(r,φ,θ)','0','R','r',0,'')","intl('','0','2π','θ',0,'')+intl('f(ρ,θ)','ρ=0','ρ=a','',-1)"],
			[],
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
		[],
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
	'Font':[zlrA3("$kxc('",Arrf(function(x){return x+"','"+x},ZLR('Bbb bf frak it rm')),"','')$"),
		zlrA3("$kxc('",Arrf(function(x){return x+"','"+x},ZLR('sf tt bm bold')),"','')$"),
		zlrA3("$kxc('",Arrf(function(x){return x+"','"+x},ZLR('boldsymbol')),"','')$").concat([
			'a \\pmb b c'
		]),
	
	],
	
	'Math Font':Arrf($A,[zlrA3("kxc('math",Arrf(function(x){return x+"','"+x},ZLR('bb bf cal')),"')"),
		zlrA3("kxc('math",Arrf(function(x){return x+"','"+x},ZLR('frak it rm')),"')"),
		zlrA3("kxc('math",Arrf(function(x){return x+"','"+x},ZLR('scr sf')),"')").concat("kxf('mathrm')")

	]),
	
	'Text Font':Arrf($A,[
		zlrA3("kxc('text",Arrf(function(x){return x+"','"+x},ZLR(' bf it sf')),"','text')"),
		zlrA3("kxc('text",Arrf(function(x){return x+"','"+x},ZLR('rm normal tt')),"','text')"),
	
	]),

	'Hebrew':[
		zlrA3("$kxc('",['A','B','C','D'],"','a')$"),
		zlrA3('\\',ZLR('Ka La '),'TeX'),
		['Q.~E.~D.~','Q.~E.~A.~'],
	],

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

	'Margin':[zlrA('\\backslash',[',\\,',':\\:',';\\;']).concat('\\tilde~'),

		Arrf(function(x){return x+'\\'+x},zlrA2(ZLR(' q'),'quad')),
	],
	'Margin Space':[
		Arrf(function(x){return x+'\\'+x},zlrA2(ZLR('thin med thick'),'space')),
		Arrf(function(x){return x+'\\'+x},zlrA2(ZLR(' en nobreak'),'space')),
		['1\\mathinner{\\text{inner}}2','1\\mathpunct{.}2'],
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


	'Linebreak':[$A(['kbr','kbr2']).concat('\\sum_{\\substack{0<i<m\\\\0<j<n}}'),
		ZLR('phantom\\phantom{A} hphantom$hp()$ vphantom\\vphantom{A}'),
		ZLR('tag{1}{A} tag*{2}{B}'),
	
	],

	'Align':Arrf($A,[

		zlrA3("mtrx([[1,2],[3,4]],",[
			"'small','small'",
			"'.','.'"
		],",'')").concat("zmtrx([['',0,1],[0,0,1],[1,1,0],],'','I1J1','.','.')"),


		zlrA3("zmtrx([[1,2",[
			"],[3,4]],'','r2c2'",
			",3,4],[5,6,7,8]],'','c2'"
		],",'.','.')"),
		[],
		zlrA3("aligned([1,2,3]",[
			"",
			",1"
		],")"),
		
	]),//.concat(["\\def\\arraystretch{1.5}"+mtrx([[1,2],[3,4]],'.','.','')]),


	'Latin':[zlrA3('\\',ZLR('vec dot ddot mathring'),'{a}'),
		zlrA3('\\',ZLR('bar acute check grave'),'{a}'),
		zlrA3('\\',ZLR('hat tilde breve'),'{a}').concat(['\\stackrel{a}{.}']),
	
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
	
		[],
	
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
		],
		zlrA3("$kancel(1",ZLR(" ,'-' ,'b' ,'x'"),')$'),
		['\\not{1}'].concat($A(["kbox(1)","kbox('F','frak','math')"]),'\\fbox{A}'),
		
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
			//consolelog(A);
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
		//consolelog('x=',x);
		$.each(x,function(jsname,funcA){
			var tp=typeof funcA;
			if(isArr(funcA)){
				u.push(detail(jsname,API(funcA))) 
			}else if(tp ==  'object'){
				$.each(funcA,function(grp,funcs){
					if(isArr(funcs)){
						//consolelog(grp,funcs);
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

	
},opfrac=function(x){//分数显式表示
	return x.replace(/(\d+)\/(\d+)/g,'\\frac{\\displaystyle{}$1}{\\displaystyle{}$2}')	// 分数

},optrim=function(x){//省略运算符
	return x.replace(/(\d)[×‧](\D)/g,'$1$2') //省略数与非数之间的乘号

},opreplace=function(x){//运算符规范化预处理	算术运算
	return x.replace(/[]/g,'').replace(/​/g,'')	//不可见字符
		.replace(/ |&#8194;/g,' ')	//非标空格
		.replace(/[乘乖✖ⅹ╳‧][以于与]?/ig,'*').replace(/&#10008;/g,'*')
		.replace(/ʸ/g,'^y')
		.replace(/不等于/g,'≠').replace(/等于|＝/g,'=')

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
		//consolelog(x);
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

},opreplace3=function(x, formathjs){//运算符规范化预处理	微积分运算	参数formathjs指定按mathjs的风格
	var t=opreplace(x).replace(/[′']{3}/g,'‴').replace(/[′']+/g,'″').replace(/‵{3}/g,'‷').replace(/‵+/g,'″')
		.replace(/∫{3}/g,'∭').replace(/∫+/g,'∬').replace(/∮{3}/g,'∰').replace(/∮+/g,'∯')
		//.replace(/d([xyt])/g,'ⅾ$1')//暂用罗马数字ⅾd，表示微分算符
		.replace(/偏/g,'∂')
		.replace(/o{2,}/g,'∞')
		.replace(/㏒_([\da-z]+)\^([\da-z]+)/ig, formathjs?'log ($2,$1)':'㏒($1,$2)');

	return formathjs?t.replace(/[㏒㏑]/g,'log '):t
		


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
		.replace(/等于|＝/g,'=')

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
			////consolelog(i,j,Aij);
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
		
		if(fn){
			$('.Fns[data-i="'+di+'"]').toggle();
		}else if(st){
			var divs=$('div.Sts[data-i="'+di+'"]');
			if(divs.filter(':visible').length){
				divs.add('.sbsTblPg, div.Sts[data-i]').hide()
			}else{
				divs.slice(0,3).show();
				if(divs.length>3){
					$('.sbsTblPg').show()
				}
			}
			
		}else{
			$('.'+di).toggle();
		}

		return
	}

	var t=me.text().replace('空',' '), SL=SBS.Latex,SLF=ZLR(SL.func);
	if(fn){//函数
		if(iTyp=='LaTeX'){

			var c=td.attr('title'),hassbl=/[^a-z].+/i.test(c),c0=c.replace(/[^a-z].+/i,''), word=/^[a-z~]+$/.test(c);

			t=(SLF.indexOf(c0)>-1?'\\'+c0:'\\text{'+(word?c:c0)+'}')+(hassbl && !word?c.replace(/^[a-z]+/i,''):'');

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

//console.log(t);
			if(t){
				if(t.indexOf('$')>-1){
					if(!shft){
						t=t.replace(/\$[^\$]+\$/g,function(x){return eval(x.replace(/\$/g,''))});
					}else{

					}
					/*
					t=t.replace(/^[^\$]+/g,'');
					if(!shft){
						t=eval(t.replace(/\$/g,''))
					}
					t=tl.replace(/\$.+/,'')+t;
					*/
				}else{
					if(/tag/.test(t)){
		
						t='\\'+t;
					}
					
				//	t=(/^[\{\d\\]/.test(tl)?'':'\\')+tl;
					//t=/^[a-z]/i.test(t)?t.replace(/^[a-z]+/ig,''):t;
				}
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
		
////consolelog(tl,t);
		if(tl && !shft && t=='≠'){
	//		t='=\\not\\mathrlap{}'	//fix bug of katex ≠
		}else{
			t=tl && !shft?(tl[0]=='^'?'':'\\')+tl+' ':t;
		}
////consolelog(tl,t);
	}
		

	var i=$('#'+textareaId), iv=i.val(), sS=i[0].selectionStart, sE=i[0].selectionEnd;
	if(shft && sS!=sE){// fix bug of shift on textarea 
		sS=sE
	}
////consolelog(iv,sS,sE);



	var v=iv.substr(0,sS+(t=='删'?-1:0))+(t=='删'?'':t)+(sE==iv.length?'':iv.substr(sE));
	i.val(v).change();

////consolelog(v,t);

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
	////consolelog(A);
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
			var c=A[i],hassbl=/[^a-z].+/i.test(c),c0=c.replace(/[^a-z].+/i,''), word=/^[a-z~]+$/.test(c);

			s+=DCtv('Fns td" title="'+c, SCtv('symboln',zx((SLF.indexOf(c0)>-1?'\\'+c0:'\\text{'+(word?c:c0)+'}')+(hassbl && !word?c.replace(/^[a-z]+/i,''):''))));
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
			str2+='<td class=Fns>'+SCtv('symboli" data-i="'+K, gM(K.replace(/^Set$/,'Set.1')))+'</td>'

		}
		str2+='</tr>';
	}

	$('#funcs').append(str+dc);
	$('#ifuncs').append(str2+'</table>');

	//STRUC
	var strPg=strbtn+'∧" class=sbsTblPg hidden />';
	var str='<div class=sbsTbl>'+strPg,str2='<table class="sbsTbl sbsiTbl">';
	var strK=function(K,A){
	////consolelog(K,A);
		var s='<div class=Sts data-i="'+K+'">',n=A.length;
		for(var i=0;i<n;i++){
			var c=A[i];
			if(K=='Margin Value'){
				c=c.split('{')[0].substr(1)+c
			}
//console.log(K,c);
			s+=DCtv('Sts td" title="'+c.replace(/.backslash./,'')
				.replace(/^[a-z]{4,}/g,'')
				.replace('\\tilde~','~')
				.replace(/^(\*|\[b\])/,''),
				SCtv('symboln',zx(c.replace(/math(.lap)/,'$1').replace(/phantom/,'p')
				)));
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
			//consolelog(K,A);
			str+=Arrf(function(x){return strK(K,x)},A).join('');
			
			A=A[0];
			
			str2+='<td class=Sts title="'+gM(K)+'">'+SCtv('symboli" data-i="'+K, zx(K=='Margin Value'?A[0].split('{')[0].substr(1)+A[0]:A[0]))+'</td>'//K
		}
		str2+='</tr>'
	}

	$('#struc').append(str+strPg.replace('∧','∨')+dc);
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
				SCtv('snippetName" contentEditable="true',name)+
				(itv('snippetSend" tip="copy2input',$('#send2textBox').is(':visible')?'arrow_upward':''))+
			(selected?itv('snippetNew','add'):''))
	},
	load:function(i){
		$('#input0').val(L['snippet'+i]||'');let t=L['snippetType'+i];
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










var OverCanvas=function(t){

	var iT=$('#input0Type').val();
	L.drawShapeNow='';
	$('#TextBoxType').val(iT);
	$('#TextBox').val(t);
	$('#TextBoxGo').click();
	$('#Pointer').click();


}, preDisplay=function(){
	$('.imgHTMLEditor').toggle($('#toggleHTMLEditor').is('.seled'));
	try{
		var iv=$('#input0Type').val(),ov=$('#output0Type').val();
		if(!iv){
			iv='LaTeX';
			$('#input0Type').val(iv);
		}
		var i=iv[0],o=ov[0],v=$('#input0').val().trim(),w=$('#input0Preview');


		if(iv==ov && ov!='HTML'){
			w.add('#previewTool').hide();
			
		}else if(iv=='LaTeX' && o!='H'){
			var x=v, kxx=kx(sub2n(v,1));

			if(o=='P' && v){
				katex.render(kxx, w[0], {
					throwOnError: false,
					displayMode: true,
					trust:true
				});
				x=XML.wrapE('code',XML.encode(w.find('.katex-mathml').html().replace(/math/,'math xmlns="'+xmml+'"')));
				
			}



			w.html(x).add('#previewTool').show();

			if(o=='S' && v && MathJax){
				//console.log(w[0]);
				w.empty();
				var options = MathJax.getMetricsFor(w[0]);
				options.display = $('#displayMode').is('.seled');

				//MathJax.tex2svg 返回node  示例：MathJax.tex2svg('\\frac{1}{x^2-1}', {display: true});
				MathJax.tex2svgPromise(kxx, options).then(function (node) {
				  //
				  //  The promise returns the typeset node, which we add to the output
				  //  Then update the document to include the adjusted CSS for the
				  //    content of the new equation.
				  //
				  //console.log(node);
				  w[0].appendChild(node);
				  /*
				  MathJax.startup.document.clear();
				  MathJax.startup.document.updateDocument();
				  */
				}).catch(function (err) {
				  //
				  //  If there was an error, put the message into the output instead
				  //
				  w[0].appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
				}).then(function () {
				  //
				  //  Error or not
				  //
				  if(!$('#SVGLinkMode').is('.seled')){

					/* https://www.jb51.net/article/166239.htm


标签里的background的url()里，地址不能加引号，单引号双引号都不行，否则会被微信编辑器过滤掉。
标签里不能有id属性
不能有style script a标签

涉及动画，需要给涉及到的元素的 <g> 设置style="outline:none"，包括 <g> 内的所有子 <g> 

					*/
					var MJ=$('#input0Preview .MathJax');
					MJ.find('use').each(function(){
						var id=$(this).attr('xlink:href');
						$(this).replaceWith($(id)[0].outerHTML.replace(/id="[^"]+" /,''))
					});
					MJ.find('defs, style, script, a').remove();
					MJ.find('svg').removeAttr('aria-hidden role focusable');
					MJ.find('g').removeAttr('data-mml-node data-mjx-texclass');
					MJ.find('[stroke="currentColor"]').removeAttr('stroke');
					MJ.find('[fill="currentColor"]').removeAttr('fill');
				  }
				  
				});
				
			}

			
		}else if(o=='H'){
			w.add('#previewTool').show();
			if(v){
				$('#input0Preview').css('min-height',$('#input0').height()-15+'px');
				all2html(iv,v,w);

			}else{
				w.empty()
			}
		}
		$('#input0Preview>.katex-display>.katex').css('text-align','left')

	}catch(e){

	}
};



$(function(){
	$('#zMather').append(DCtv('pd2" id="iContent',

	'<div id=iText>'+
		'<div id=iTextMain>'+
			DCtv('pd10 resize" hidden contentEditable=true id="HTMLEditor')+
			DCtv('pd10 resize" hidden contentEditable=true id="input0Preview')+
			DCtv('resize','<textarea id=input0>'+(L.snippet1||'')+'</textarea>'+
				'<div id=Snippets hidden>'+
					

					(isedi?'':itv('" id=send2textBox tip="copy2input','arrow_upward'))+

					//itv('" id=navHide tip="Collapse','keyboard_arrow_up')+

					'<select id=input0Type>'+optgrp(gM('Snippet Editor')+':',
					OptGrps(jSon('[{"'+
						gM('Math Formula')+
						'":"LaTeX Ascii_Math Unicode_Math Content_MathML Presentation_MathML"},{"'+
						gM('Webpage Editor')+
						'":"Markdown HTML CSS"},{"'+
						gM('Graphics')+
						'":"Canvas SVG Echarts Zdog Lego Rough 2D 3D"},{"'+
						gM('Show')+
						'":"Slide VR AR"},{"'+
				
						gM('Calculator')+' | '+gM('Script')+
						'":"JavaScript"},{"'+

						gM('Translator')+
						'":"I18N EN"},{"'+

						gM('Data')+' | '+gM('Text')+
						'":"TXT TSV CSV XML YAML JSON"}]')
					)
					)+'</select>'+
					itvc('rotate180" id="tClear')+
					//(isedi?'':itv('" id=zMatherHide tip="Collapse','keyboard_arrow_up'))+br+
					br+

					itv('" id=UploadSnippetFile tip="Import File','file_upload')+
					itv('" id=DownloadSnippetFile tip="Download Snippet Text File','file_download')+

					itv('" id=linebreakEqual tip="Linebreak Equality','drag_handle')+
					itv('" id=linebreak tip="Linebreak','subdirectory_arrow_left')+

					itv('" id=input0Size tip="Font Size','format_size')+


					itv('Del" id=snippetDel tip="Delete Snippet','remove_circle')+

					
					
					'<input type="file" id=inputSnippetFile hidden />'+


					DCtv('resize" id="snippets',
						Arrf(function(i){return snippet.Str(L['snippetName'+i]||gM('Snippet'),
							L['snippetType'+i]||'LA',i==1)}, 
						seqA(1,+L.snippets||1)).join('')
					)
				+dc
			)+
			DCtv('opac" hidden id="input0Tool',

				'<div id=inputTools>'+
					itvc('" id=iClear hotkey="Ctrl + E')+

					strbtn+'⋮" id=Condon class=tool hidden />'+
					SCtv('iTextLaTeXon',
						
						strbtn+'T" id=editTexton class=tool tip=EditText />'+
						strbtn+'α" id=sbson tip=UnicodeCharacter class=tool />'+
						strbtn+'ƒ" id=funcson tip=Function class=tool />'+
						strbtn+'∑" id=strucon tip=Structure class=tool />'+
						strbtn+'?" id=randon tip=Random class=tool />'
					)+
					itvc('rotate180" id="tClear2')+
					
				dc+
				DCtv('onbox" hidden id="editText',[
					DCtv('editTextBox',[
						gM('By')+Arrf(function(x){return SCtv('hotk" data-v="'+x, gM({Comma:',',Semicolon:';'}[x]||x)) },
							ZLR('Comma Semicolon Space Tab')).join(' '),
							strtxt+'id=lineByChar />',
						strbtn+gM('Merge Line.1')+'" id=lineMerge tip="Line.1 Merge" />'+
						strbtn+gM('Split Line.1')+'" id=lineSplit tip="Line.1 Split" />'
						]
					).join(''),

					
					DCtv('editTextBox hidden',[
						strbtn+gM('Uniq Line.1')+'" id=lineUnique tip="Line.1 Uniq" />',
						strbtn+gM('Delete Blank Line.1')+'" id=blankLineTrim tip="Blank Line.1 Trim" />',
						gM('Head Foot Trim')+strbtn+'↤↦" id=lineTrim tip="Line.1 Head Foot Trim" />'+
						strbtn+'↤" id=lineTrimHead tip="Line.1 Head Trim" />'+
						strbtn+'↦" id=lineTrimFoot tip="Line.1 Foot Trim" />'
						]
					).join(''),


					DCtv('editTextBox hidden',[
						gM('Sort')+': '+gM('By')+
							XML.wrapE('label', strradio0+'name=txtsortby value=char checked tip=Char />'+gM('Char'))+
							XML.wrapE('label', strradio0+'name=txtsortby value=len tip="Char Length" />'+gM('Length'))+
							XML.wrapE('label', strradio0+'name=txtsortby value=num tip="Number Value" />'+gM('Number Value')),

						strbtn+'↑" id=lineSortUp tip=AscendingSort />'+
						strbtn+'↓" id=lineSortDown tip=DescendingSort />'+
						strbtn+'?" id=lineSortRandom tip=RandomSort />',
						
						gM('Reverse')+
						strbtn+'↕" id=reverseLine tip="Reverse Line.1" />'+
						strbtn+'↔" id=reversePerLine tip="Reverse Per Line.1" />'
						]
					).join(''),



					DCtv('editTextBox hidden',[
					

						gM('With')+Arrf(function(x){return SCtv('hotk" data-v="'+x, gM({Comma:',',Semicolon:';'}[x]||x)) },
							ZLR('Comma Semicolon Space Tab')).join(' ')+br+
							strtxt+'id=replaceWithChar />',

						strbtn+gM('Replace')+'" id=Replace />'+Arrf(function(x){return SCtv('hotk" data-v="'+x, gM({Comma:',',Semicolon:';'}[x]||x)) },
							ZLR('Comma Semicolon Space Tab')).join(' ')+br+
							strtxt+'id=replaceByChar />',

						
						XML.wrapE('label',strchkbx0+'id=replaceCaseSensitive />'+gM('Case Sensitive'))+
						XML.wrapE('label',strchkbx0+'id=replaceRegexp />'+gM('Regexp'))

						]
					).join(''),



					DCtv('editTextBox hidden',[
						gM('Clone')+': ',
						XML.wrapE('label',gM('Line.1')+' / '+gM('Selection')+strchkbx0+'id=RepeatSelection />'),

						Arrf(function(x){return strbtn+'×'+x+'" tip=Repeat id=Repeat'+x+' />'},ZLR('2 3 5 7 11')).join('')
						]
					).join(''),
				].join(''))+


				DCtv('onbox" hidden id="rand',[
					DCtv('randBox',[
						
						gM('Range')+': '+num(1,1)+'~'+num(100)+br+
							strbtn+gM('Random Positive Integer')+'" id=randInt tip="Random Positive Integer" />'+gM('Quantity')+': '+num(10),

						gM('Range')+': '+num()+'~'+num(1)+br+
							strbtn+gM('Random Decimal')+'" id=randDeci tip="Random Decimal" />'+gM('Quantity')+': '+num(10),

						
						gM('Digit')+': '+num(10)+'~'+num(30)+br+
							strbtn+gM('Random Big Integer')+'" id=randBigInt tip="Random Big Integer" />'+gM('Quantity')+': '+num(10),

						]
					).join(''),


					DCtv('randBox hidden',[
						
						gM('From')+num(5)+gM('Choose')+num(2)+br+
						strbtn+gM('Random Combination Index')+'" id=randCombinIndex tip="Random Combination Index" />'+gM('Quantity')+': '+num(5),

						gM('From')+strtxt+'value="a,b,c,d,e" />'+br+
						strbtn+gM('Random Choose')+'" id=randCombin tip="Random Combination" />'+num(2)+' '+gM('Quantity')+': '+num(5),

						strbtn+gM('Random Permutation')+'" id=randPermut tip="Random Permutation" />',
						]
					).join(''),


					DCtv('randBox hidden',[
						XML.wrapE('label',gM('Arithmetic / Geometric')+strchkbx0+'id=randSequenceType />')+
							gM('Step.1')+': '+num(2),

						gM('Start From.1')+num(3),

						strbtn+gM('Sequence')+'" id=randSequence tip="Sequence" />'+gM('Quantity')+': '+num(5),

					
						]
					).join(''),


					DCtv('randBox hidden',[
					
						XML.wrapE('label','HEX / RGBA'+strchkbx0+'id=randColorType />'),
						strbtn+gM('Random Color')+'" id=randColor tip="Random Color" />'+
							gM('Quantity')+': '+num(5),
						]
					).join(''),

				].join(''))+

				DCtv('onbox" id="ITextLaTeXBox',
					DCtv('TextLaTeXBox" id="iTextLaTeXBox',
						DCtv('iTextLaTeX" hidden id="isbs')+
						DCtv('iTextLaTeX" hidden id="ifuncs')+
						DCtv('iTextLaTeX" hidden id="istruc')
					)+

					DCtv('TextLaTeXBox" id="TextLaTeXBox',
						DCtv('TextLaTeX" hidden id="sbs')+
						DCtv('TextLaTeX" hidden id="funcs')+
						DCtv('TextLaTeX" hidden id="struc')
					)+
					DCtv('clear')
				)
			)+

			

			
			'<div id=input0Tip hidden>'+
			'<select id=input0TipType>'+optgrp(gM('API Help')+':',
			OptGrps(jSon('[{"'+
				gM('Math Object')+
				'":"Number Sequence Permutation Matrix Proposition Series Function Set Relation"},{"'+
				

				gM('Data')+' | '+gM('Script')+
				'":"YAML JavaScript"},{"'+
				
				gM('Translator')+
				'":"I18N EN"},{"'+

				gM('Math Formula')+
				'":"LaTeX"},{"'+
				gM('Webpage Editor')+
				'":"Markdown HTML"},{"'+
				gM('Graphics')+
				'":"Canvas SVG Echarts Zdog Lego Rough"},{"'+
				gM('Show')+
				'":"Slide VR AR"}]'
				),1
			)
			)+'</select>'+
			dc+
			DCtv('clear')+

		dc+


		'<div hidden id=Cond>'+
			'<div id=input1Preview>'+dc+
			'<textarea id=input1></textarea>'+
			DCtv('opac" id="input1Tool',
				'<div>'+itvc('hidden" id="cClear')+dc
			)+
			'<div id=input1Tip>'+dc+
			DCtv('clear')+
		dc+

		'<div id=iTextPreview>'+
			'<span id=previewTool hidden class=opac>'+


				/*
				itvc('rotate90" id="previewOff')+
				itv('" id=displayOverCanvas tip="copy2Canvas','exit_to_app')+
*/

				'<select id=output0Type>'+optgrp(gM('Output Format')+':', Options(ZLR('HTML Ascii_Math Unicode_Math Presentation_MathML')))+'</select>'+

				itv('" id=downloadPreview tip="Download HTML File','file_download')+


				itv('" id=alignPreview tip="Center Align','format_align_center')+



				itv('" id=toggleHTMLEditor tip="Toggle HTML Editor','chrome_reader_mode')+
				SCtv('imgHTMLEditor',
					itv('" id=zoomHTMLEditor tip="Zoom Image','loupe')+
					itv('" id=rotateHTMLEditor tip="Rotate Image','rotate_90_degrees_ccw')+
					itv('" id=invertHTMLEditor tip="Invert Image Color','invert_colors')+
					itv('" id=removeHTMLEditor tip="Remove Image','remove_circle_outline')
				)+

				itv('" id=editorLaunch tip="Launch','launch')+
			sc+

		dc+

	dc

)+

(ishome || isedi?DCtv('pd2" id="iTextOpt',

(ishome?itvc('oClear rotate270" id="oHClear'):'')+

itv('tool seled" tip=Preview id="preview','remove_red_eye')+

(ishome?itv('seled" id=iTextFold tip="Snippet Editor','edit'):'')+


itv('tool" tip="More Snippet" id="Snippetson','subject')+
itv('" id=input0Toolon tip="Toggle Editor Tool','functions')+
itv('seled" id=input0Tipon tip="API Help','help_outline')+

itv('tool" tip=Shift id="Shift','keyboard_capslock')+

(ishome?itv('" id=go tip="Run" hotkey="Ctrl + Enter','play_circle_outline')+
	itv('" id=refresh tip="Refresh','refresh')+
	itv('" id=launch tip="Launch','launch')+
	itv('" id=qrcode tip="Share','share')+
	itv('" id=zMatherOn2 tip="Collapse','keyboard_arrow_up'):'')


):''));
	sbsTbl();//
	$('#input0Tool input,#preview').not('.Clear,[tip]').attr('tip',function(){return this.id});


	$('#input0Tip').attr('title',gM('Help')+' | '+gM('Example')).on('click','button',function(){

		var me=$(this), t=me.attr('data-tool'),i0=$('#input0'),pa=me.parents('.inputTip'), tl=pa.attr('data-tool');
		if(tl=='Matrix' && t=='line Merge'){
			i0.val(function(i,x){return '['+Arrf(function(s){
					var isfsi=/=\s*[^0]/.test(s), a=s, b=isfsi?exp2coe(s,'='):'';
					if(/x\d/i.test(s)){
						var deg=+max(s.match(/x\d/ig).join(',').replace(/x/ig,'').split(','));
						a=Arrf(function(x){return exp2coe(s,'x'+deg)}, seqA(1,deg)).join(' ')
					}else if(/.+[xyz].+[xyz]/i.test(s)){
						a=[exp2coe(s,'x','yz'),exp2coe(s,'y','xz'),exp2coe(s,'z','xy')].join(' ')
					}else{
						a=s
					}
					return (a+' '+b).trim()
				
				},x.replace(/\t/g,' ').trim().split(brn)).join(';')+']'});
		}
		
	}).on('click','i',function(){

		var me=$(this), pa=me.parents('.inputTip');
		if(me.is('.remove')){
			pa.remove();
		}

	});

	$('body').on('click', '.sbsTbl td, .sbsTbl .td',function(e){

		var p=$('#input0Type').val();
		if(/Canvas|JavaScript|HTML|3D/.test(p)){
			p='JavaScript';
		}
		sbsTbltd(this,e,'input'+$('#input1.seled').length,p);

	}).on('click', '.sbsTblPg',function(e){
		var me=$(this),pa=me.parent(),pc=pa.children(), i=me.index(),
		x=pc.filter('div:visible'), di=x.attr('data-i'),
		ii=pc.filter('[data-i="'+di+'"]'),
		d0=ii.first().index(), d1=ii.last().index(),
		i0=x.first().index(), i1=x.last().index();
		x.hide();

		if(i){

			if(d1>i1){

				pc.slice(i1+1, Math.min(d1+1,i1+4)).show();
			}else{
				pc.slice(d0, Math.min(d1+1,d0+3)).show();
			}
		}else{

			if(d0<i0){

				pc.slice(Math.max(d0,i0-3), i0).show();
			}else{
				pc.slice(Math.max(d0,d1-2), d1+1).show();
			}

		}
		
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

	}).on('click','#input0Size',function(){
		var me=$(this), a=+me.attr('data-size')||0.6,i=me.attr('data-sizeup')||'true';
		
		if(a>=2){
			i='false'
		}
		if(a<=0.6){
			i='true'
		}
		var b=(a+(i=='false'?-1:1)*0.2).toFixed(2);
		me.attr({'data-sizeup':i, 'data-size':b});
		$('#input0').css('font-size',b+'rem');

	}).on('mouseover', '#TextLaTeXBox .sbsTbl td, #TextLaTeXBox .sbsTbl .td',function(e){

		var me=$(this),t=me.attr('title'),iT=$('#input0Type').val();
		if(iT!='LaTeX' || !t && me.parents('#sbs').length || me.is('.Sts.td') && !/^\$.+\$/.test(t)){

		}else{
			var id=me.parents('.iTextLaTeX').attr('id')||'';
			id && toolTip(gM(id.replace(/^i/,'')+'ontip'));
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
			t=t.replace(/&&(?! )/g,brn)
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
		var id=($('.iTextLaTeXon .tool.seled').attr('id')||'').replace(/on/,''), shifton=$('#Shift').is('.seled');
		if(id=='editText'){
			var tr=$('#editText .editTextBox'),
			i=tr.filter(':visible').index();
		}else if(id=='rand'){
			var tr=$('#rand .randBox'),
			i=tr.filter(':visible').index();
		}else{
			var tr=$('#i'+id+' .sbsiTbl tr').not('.Symboli_'),
			i=tr.filter(':visible').eq(0).prevAll().not('.Symboli_').length;
		}

		var tn=tr.hide().length;
		if(shifton){
			if(i-3<0){
				i=tn-3
			}else if(i-3==0){
				i=0
			}else{
				i-=3;
			}


		}else{
			if(i+3>tn-1){
				i=0
			}else if(i+3==tn-1){
				i=tn-1
			}else{
				i+=3;
			}

		}

		tr.slice(i,i+3).show();
		


		
	}).on('click','#SVGLinkMode,#displayMode',function(e){
		var me=$(this).toggleClass('seled');
		preDisplay();

	}).on('dblclick','#input0Preview',function(e){
		var m=$(this).find('svg'), shft=e.shiftKey||$('#Shift').is('.seled'), ctrl=e.ctrlKey;
		if(m.length){
			copy2clipboard(m[0].outerHTML)
		}


	}).on('click','#toggleHTMLEditor',function(e){
		var me=$(this).toggleClass('seled');
		$('#HTMLEditor,.imgHTMLEditor').toggle(me.is('.seled'))

	}).on('click','#HTMLEditor img',function(e){
		$('#toggleHTMLEditor.seled').click()

	}).on('click','#alignPreview',function(e){
		var me=$(this),a=me.attr('data-align')||'left', A=ZLR('left center right'),
			b=A[(A.indexOf(a)+1)%3];
		me.attr('data-align',b);
		$('#input0Preview>.katex-display>.katex').css('text-align',b)

	}).on('click','#linebreak',function(e){
		var p=$('#input0Type').val(), shifton=$('#Shift').is('.seled'), t=p=='LaTeX'?(shifton?kbr2:kbr):(p=='HTML'?br:'\n');
		$('#input0').val(function(i,v){return Arrf(function(x){return x.lastIndexOf(t)==x.length-t.length?x:x+t},v.split(brn)).join(brn)+brn}).change();

	}).on('click','#linebreakEqual',function(e){
		var p=$('#input0Type').val(), shifton=$('#Shift').is('.seled'), t=p=='LaTeX'?(shifton?kbr2:kbr):(p=='HTML'?br:'\n');
		$('#input0').val(function(i,v){return Arrf(function(x,i){return (i && x[0]!='='?'=':'')+(x.lastIndexOf(t)==x.length-t.length?x:x+t)},v.split(brn)).join(brn)+brn}).change();

	}).on('click','#zoomHTMLEditor',function(e){
		$('#HTMLEditor img').css('zoom',function(i,v){var x=+v||1, me=$(this),z=me.attr('data-zooming')||'out';
			if(x<=0.2 || x==1 && z=='in'){
				z='in';
			}
			if(x>=1.2){
				z='out';
			}
	
			var y=(z=='in'?x+0.2:x-0.2).toFixed(2);
			me.attr({'data-zooming':z,'title':gM('Zooming')+' '+y});
			return y
		})
	}).on('click','#invertHTMLEditor',function(e){
		$('#HTMLEditor img').css('filter',function(i,v){var me=$(this),z=+me.attr('data-invert')||0;

			me.attr({'data-invert':1-z});

			return 'invert('+(1-z)+')'
		})

	}).on('click','#rotateHTMLEditor',function(e){
		$('#HTMLEditor img').css('transform',function(i,v){var me=$(this),z=+me.attr('data-rotating')||0,
			x=(z+1)%6, y=x<4?'rotate('+x*90+'deg)':'rotate'+'XY'[x-5]+'(180deg)';
			me.attr({'data-rotating':x, 'title':y});

			return y
		})

	}).on('click','#removeHTMLEditor',function(e){
		$('#HTMLEditor img').remove()
		

	}).on('click','#downloadPreview',function(e){

		var v1=$('#input0Preview').html(), v=$('#input0').val(),
			p=$('#input0Type').val(),tp=p.toLowerCase(), t,hd='',
			nm=gM('zzllrr Mather')+'_'+p+Time.now(), ext='html';
		if(p=='LaTeX'){
			t=csslib.katex+v1

		}else if(p=='Markdown'){
			t=csslib.katex+csslib.markdown+v1

		}else if(/Echarts/.test(p)){
			t=jslib[tp]+jslib[tp+'_eval'](v)

		}else if(/Zdog|Canvas/.test(p)){
			t=(jslib[tp]||'')+jslib['canvas_eval'](v)

		}else if(/Slide/.test(p)){
			hd=csslib['katex']+csslib['webslides']+jslib[tp];
			t='<main role="main"><article id="webslides"'+
				($('#slideSwapV').prop('checked')?' class="vertical"':'')+'>'+
				v1+'</article></main>';
			var sh=$('#slidehead').val(),sf=$('#slidefoot').val();
			if(sh){
				t='<header role="banner">'+sh+
					'</header>'+t
			}
			if(sf){
				t+='<footer role="contentinfo">'+sf+
				'</footer>'
			}

		}else if(/VR/.test(p)){
			t=jslib['aframe']+v1;
			$('.VRTool .jslib:checked').each(function(){
				var x=$(this).attr('data-lib');
				hd+=referf(unpkg(x,(VRlibjs[x]||x)+'.min'))
			});
			if(hd){
				hd=XML.wrapE('head',hd)
			}

		}else if(/AR/.test(p)){
			t=jslib['aframe']+jslib['aframe-ar']+v1;
			$('.ARTool .jslib:checked').each(function(){
				var x=$(this).attr('data-lib');
				hd+=referf(unpkg(x,(ARlibjs[x]||x)+'.min'))
			});
			if(hd){
				hd=XML.wrapE('head',hd)
			}
		}else if(p=='SVG'){
			//t=v1;
			t=svgAs('#input0Preview svg');
			ext='svg'
			
		}else if(p=='JavaScript'){
			t=v1;

		}else {
			t=v1
		}

		if(ext=='html'){
			t='<html>'+(hd||'')+'<body>'+t+'</body><html>'

		}
		saveText(t,nm+'.'+ext);
		


	}).on('click','.editTextBox .hotk',function(){
		var me=$(this), T=me.nextAll(':text').eq(0);
		if(T.length<1){
			T=me.parent().next().find(':text').eq(0);
		}
		T.val(function(i,v){
			var o={'Comma':',', 'Semicolon':';', 'Space':' ', 'Tab':'\t'};
			return v+o[me.attr('data-v')]
		});

	}).on('click','#lineSplit',function(){

		var t=$('#input0Type').val(), by=$('#lineByChar').val(), isreg=/^\/.+\/[gi]?$/.test(by);
		
		$('#input0').val(function(i,v){return v.replace(new RegExp(isreg?by.substr(1).replace(/\/[gi]?$/,''):regReg(by), isreg?by.replace(/.+\//,''):'g'),brn)});
		/*
		if(t=='LaTeX'){
			$('#input0').val(function(i,v){return v.replace(/(\\\\)*\n/g,'\\\\\n')});
			if($('#preview.seled').length){
				preDisplay()
			}
		}else if(t=='graphic'){
			$('#input0').val(function(i,v){return v.replace(/&&/g,brn)});
		}else{
			
		}
		*/
				
	}).on('click','#lineMerge',function(){

		var t=$('#input0Type').val(), by=$('#lineByChar').val();
		$('#input0').val(function(i,v){return v.replace(/\n+/g,by)});
		/*
		if(t=='LaTeX'){
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'').replace(/\\\\/g,'')});
			if($('#preview.seled').length){
				preDisplay()
			}
		}else if(t=='graphic'){
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'&&')});
		}else{
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'')});
		}
		*/

	}).on('click','#lineUnique',function(){

		var v=$('#input0').val(),vA=v.split(brn),n=vA.length, B=[], C=[], caseOn=$('#Shift').is('.seled');//是否区分大小写
		if(caseOn){
			for(var i=0;i<n;i++){
				var t=vA[i];
				if(B.indexOf(t)<0){
					B.push(t)
				}
			}
		}else{
			var uA=v.toLowerCase().split(brn);
			for(var i=0;i<n;i++){
				var t=uA[i];
				if(C.indexOf(t)<0){
					C.push(t);
					B.push(vA[i]);
				}
			}
		}
		$('#input0').val(B.join(brn));

	}).on('click',zlr('#lineTrim',' Head Foot',',')+',#blankLineTrim',function(){

		var T=$('#input0'),v=T.val(),vA=v.split(brn), id=this.id;

		if(id=='lineTrim'){
			T.val(v.replace(/\s*\n\s*/g,brn).trim())
		}
		if(id=='lineTrimHead'){
			T.val(v.replace(/\n\s*/g,brn).trim())
		}
		if(id=='lineTrimFoot'){
			T.val(v.replace(/\s*\n/g,brn).trim())
		}
		if(id=='blankLineTrim'){
			T.val(v.replace(/\n+/g,brn).replace(/^\n/g,'').replace(/\n$/g,''))
		}

	}).on('click','#Replace',function(){
		var T=$('#input0'),v=T.val(),
		t0=$('#replaceByChar').val(), t1=$('#replaceWithChar').val(),
		isreg=$('#replaceRegexp').prop('checked'),
		iscase=$('#replaceCaseSensitive').prop('checked');
//console.log(isreg?t0:regReg(t0), t1);
		T.val(v.replace(new RegExp(isreg?t0:regReg(t0), 'g'+(iscase?'':'i')), t1))


	}).on('click','#lineSortUp,#lineSortDown,#lineSortRandom',function(){

		var v=$('#input0').val(),vA=v.split(brn), B=[], C=[], tp=this.id.substr(8), by=$('[name=txtsortby]:checked').val();
		if(tp=='Random'){
			vA.sort(sortBy.random)
		}else{
			if(by=='len'){
				vA.sort(sortBy.lenchr)
			}else if(by=='char'){
				vA.sort()
			}else if(by=='num'){
				vA.sort(sortBy.num)
			}

			if(tp=='Down'){
				vA.reverse()
			}
		}

		$('#input0').val(vA.join(brn));


	}).on('click','#reverseLine,#reversePerLine',function(){
		var v=$('#input0').val(),vA=v.split(brn); 
		if(this.id=='reverseLine'){
			vA.reverse()
		}else{
			vA=Arrf(function(x){return x.split('').reverse().join('')}, vA)
		}

		$('#input0').val(vA.join(brn));

	}).on('click',zlr('#Repeat','2 3 5 7 11',','),function(){
		
		var sel=$('#RepeatSelection').prop('checked'), i=$('#input0'), iv=i.val(), caseOn=$('#Shift').is('.seled'), n=+this.id.substr(6)+(+caseOn);//是否新增n次（而不是n-1次）
		if(sel){
			var sS=i[0].selectionStart, sE=i[0].selectionEnd, t=iv.substring(sS, sE);
			i.val(iv.substr(0,sS)+t.repeat(n)+(sE==iv.length?'':iv.substr(sE)));
			var s2=sS+t.length*n;
			//i.focus();
			setTimeout(function(){
				i[0].selectionStart=sS;
				i[0].selectionEnd=s2;
			},200);


		}else{
			i.val(iv.replace(/[^\n]+(\n|$)/g,function(x){return x.repeat(n)}));

		}

	}).on('click','#rand :button',function(e){
		var me=$(this),id=this.id, pa=me.parent(), pap=pa.prev(),
		q=+me.nextAll(':number').eq(0).val()||1,q2=+me.nextAll(':number').eq(1).val()||1,
		prop=me.prevAll(':checkbox').first(),
		num1=me.prevAll(':number').first(),
		txt=me.prevAll(':text').first(),
		i=$('#input0'), iv=i.val(),t='', shifton=$('#Shift').is('.seled');

		if(prop.length<1){
			prop=pap.find(':checkbox').last();
			if(prop.length<1){
				prop=pap.prev().find(':checkbox').last();
				
			}
		}
		if(num1.length<1){
			num1=pap.find(':number').last();
			if(num1.length<1){
				num1=pap.prev().find(':number').last();
				
			}
		}
		var num0=num1.prevAll(':number').first();
		if(num0.length<1){
			num0=num1.parent().prev().find(':number').last();
			
		}

		if(txt.length<1){
			txt=pap.find(':text').last();
			
		}

		txt=txt.val();


		prop=prop.prop('checked');
		num0=+num0.val();
		num1=+num1.val();

		

		if(id=='randInt'){
			t=Arrf(function(){return Random(num1-num0+1)+num0-1},seqA(1,q)).join(',')
		}else if(id=='randDeci'){
			t=Arrf(function(){return Random(num1-num0)+num0-1+Math.random()},seqA(1,q)).join(',')
		}else if(id=='randBigInt'){
			t=Arrf(function(){return Random(9)+Arrf(function(){return Random(10)-1}, 
				seqA(1,Random(num1-num0+1)+num0-1)).join('')},seqA(1,q)).join(',')
		}else if(id=='randCombinIndex'){
			t=Arrf(function(){return jSoff(RandomCombinN(num0,num1))},seqA(1,q)).join(',')
		}else if(id=='randCombin'){
			t=Arrf(function(){return jSoff(RandomCombinA(txt.split(','),q))},seqA(1,q2)).join(',')
		}else if(id=='randPermut'){
			t=Arrf(function(){return jSoff(RandomCombinA(txt.split(','),txt.split(',').length))},seqA(1,num1)).join(',')
		}else if(id=='randSequence'){
			t=jSoff(seqA(num1,q,prop?'geo':'',num0))
		}else if(id=='randColor'){
			if(prop){
				t=Arrf(function(){return RandomColor()},seqA(1,q)).join(',')
			}else{
				t=Arrf(function(){return hex2rgba(RandomColor())},seqA(1,q)).join(',')
			}
		}

		if(shifton){
			i.val('');
			iv='';
		}

		var sS=i[0].selectionStart, sE=i[0].selectionEnd;
		i.val(iv.substr(0,sS)+t+(sE==iv.length?'':iv.substr(sE)));
		var s2=sS+t.length;
		//i.focus();
		i[0].selectionStart=s2;
		i[0].selectionEnd=s2;

	}).on('click','#DownloadSnippetFile',function(e){

		var k=e.keyCode, shft=e.shiftKey||$('#Shift').is('.seled'), ctrl=e.ctrlKey,
			v0=$('#input0').val(),v1=$('#input0Preview').html(),
			tp0=$('#input0Type').val().toLowerCase(),
			tp=$('#output0Type').val().toLowerCase(),
			ismd=/markdown/.test(tp0), isjs=/js/.test(tp0), ishtml=/html/.test(tp0), issvg=/svg/.test(tp0),isxml=/xml/.test(tp0), ismathml=/mathml/.test(tp0);

		if(ishtml){
			v0=csslib.katex+v0;
		}
		if(ismathml){
			//v0='<math xmlns="'+xmlns+'" xmlns:xlink="'+xmlnsxlink'">'+v0+'</math>';
			v0='<math xmlns="'+xmml+'">'+v0+'</math>';
		}
		if(isxml){
			v0=XML.head+v0;
		}

		if(issvg){
			v0=svgAs('#input0Preview svg');
		}
		saveText(v0,
			gM('zzllrr Mather')+Time.now()+'.'+ZLR('md js html svg xml mathml txt')[[ismd,isjs,ishtml,issvg,isxml,ismathml,true].indexOf(true)]
		)

	}).on('click','#input0',function(){//.on('mouseover', function(){this.focus()})

		$('#input1').removeClass('seled');
		$(this).addClass('seled');
	
			
	}).on('change keyup mouseover','#input0',function(){//mouseout 

		var v=$(this).val(),p=$('#input0Type').val(), vt=v.trim();
		var s=$('.snippet.seled'), i=s.index()+1, l0=(L['snippet'+i]||'').trim();
		L['snippet'+i]=v;
		
		if(l0!=vt && $('#preview').is('.seled') && vt){

			preDisplay();
		}

	}).on('drop', '#input0', function (e) {
		e.stopPropagation(); e.preventDefault(); $(this).removeClass('drop');

		var f = e.originalEvent.dataTransfer.files[0];
		if (!f || f.type.indexOf('image') < 0) { return }
		//console.log(f); File {webkitRelativePath: "", lastModifiedDate: xxx, name: "VIP.png", type: "image/png", size: 10628}

		var reader = new FileReader(), shft=e.shiftKey || $('#Shift').is('.seled');
		reader.onload = function (event) {
			var src = this.result;
			//console.log(this);
			var sne = picSrcNameExt(src), img0='<img src="'+src+'" />';
			if(shft){
				$('#HTMLEditor').append(img0);
			}else{
				$('#HTMLEditor').html(img0)
			}
			var qr = new QrcodeDecoder();

			sTo(function(){
				qr.decodeFromImage($('#HTMLEditor img').last()[0]).then((res) => {
					//console.log(res);
					if(res){

						var u=res.data;
						if(/^https?:.+/.test(u)){
							$('#input0').val(function(i,v){return v+brn+u});
	
						}else if(/\.html/.test(u)){
							window.open(u)
		
						}else if(u.length<100){
							$('#input0').val(function(i,v){return v+brn+u});
						}


					}
	
				});
			},500);


			$('#toggleHTMLEditor').not('.seled').click();
			$('#preview').not('.seled').click();
		};
		reader.readAsDataURL(f);

	}).on('paste', '#input0', function (e) {
		//console.log(e);
		var ts = e.originalEvent.clipboardData.items, shft=e.shiftKey || $('#Shift').is('.seled');


		if (ts.length) {
			for (var i = 0; i < ts.length; i++) {
				if (ts[i].kind == 'file') {
	

					var blob = ts[i].getAsFile(), reader = new FileReader();
					//console.log(ts[i]);  DataTransferItem {type: "image/png", kind: "file"}
					reader.onload = function (event) {
						//console.log(event);
						var src = event.target.result; //webkitURL.createObjectURL(blob);


						var sne = picSrcNameExt(src), img0='<img src="'+src+'" />';
						if(shft){
							$('#HTMLEditor').append(img0);
						}else{
							$('#HTMLEditor').html(img0)
						}
						var qr = new QrcodeDecoder();

						sTo(function(){
							qr.decodeFromImage($('#HTMLEditor img').last()[0]).then((res) => {
								//console.log(res);
								if(res){

									var u=res.data;
									if(/^https?:.+/.test(u)){
										$('#input0').val(function(i,v){return v+brn+u});
				
									}else if(/\.html/.test(u)){
										window.open(u)
					
									}else if(u.length<100){
										$('#input0').val(function(i,v){return v+brn+u});
									}


								}
				
							});
						},500);

						$('#toggleHTMLEditor').not('.seled').click();
						$('#preview').not('.seled').click();
						/*
						var img = new Image();
						img.onerror = function(){
							$(this).remove()
						};
						img.onload = function () {
							var w = this.width;
							var h = this.height;
						
		
						};
						img.src = src;
						*/

					};
					reader.readAsDataURL(blob);
					break;
				}
			}
		}




	}).on('click','#input1',function(){

		$('#input0').removeClass('seled');
		$(this).addClass('seled');


	}).on('change','#input0TipType', function(){

		var v=$(this).val()||'JavaScript', it=$('#input0Tip > [data-tool="'+v+'"]'), tv=tooltip[v];
		if(v=='Echarts'){
			tv=tooltip.graphic['Statistics/Echarts']
		}
		if(v=='I18N' || v=='EN'){
			tv=v;
		}
		var opti=$(this).find('option[value='+v+']').parent().index(),
		width=Math.max($('#input0').width(),$('#input0Tool').width())||200,
		height=Math.max($('#input0').height(),$('#input0Tool').height(),400),
		strc='class="inputTip inputTypeTip" style="max-height:'+height+'px" data-tool="';

		if(tv){
			if(!opti){
				tv+=tooltip[v+' Operation']||''
			}
			if(tv=='I18N'){
				tv='';
				$.each(i18n,function(i,j){
					tv+=sceg2(i)+' → '+sceg2(j)+br
				});
			}
			if(tv=='EN'){
				tv='';
				$.each(i18n,function(i,j){
					tv+=sceg2(j)+' → '+sceg2(i)+br
				});
			}

			if(v=='LaTeX'){
				tv+=br;
				$.each(SBS.Latex,function(i,j){
					if(!/func/.test(i)){
						tv+=sceg2(i)+' : '+sceg2('\\'+j+' ')+br
					}
				});
			}



			$('#input0Tip').append(detail((v!='LaTeX'&&v!='JavaScript'?gM(v):v)+itv('remove" tip="Remove','remove_circle'),tv,'',strc+v+'"'));

		}
		

	}).on('change','#input0Type', function(){
	
		var v=$(this).val()||'TXT', it=$('#input0Tip > [data-tool="'+v+'"]'), tv=tooltip[v];
		if(v=='Echarts'){
			tv=tooltip.graphic['Statistics/Echarts']
		}
		if(v=='I18N' || v=='EN'){
			tv=v;
		}

		var ii=ZLR(Mele).indexOf(v),i=$('.snippet.seled').index()+1, p=ii>-1?ZLR(Meles)[ii]:v;
		//console.log(v,p);
		L['snippetType'+i]=p;

		$('.snippet.seled').attr('data-type',p);
		var i=ZLR('LaTeX Ascii_Math Unicode_Math Presentation_MathML Content_MathML').indexOf(v);
		$('#output0Type').html(optgrp(gM('Output Format')+':', Options(set.opr1('取',ZLR('HTML Ascii_Math Unicode_Math LaTeX Presentation_MathML Content_MathML SVG'),
			i<0?[[0]]:[[0,2,4,6],[0,2,3,4,5], [0,1,3,4,5], [0,2,3,5], [0,2,3,4]][i])
		)));
		$('.inputTypeTip').remove();

		var opti=$(this).find('option[value='+v+']').parent().index(),
			width=Math.max($('#input0').width(),$('#input0Tool').width())||200,
			height=Math.max($('#input0').height(),$('#input0Tool').height(),400),
			strc='class="inputTip inputTypeTip" style="max-height:'+height+'px" data-tool="';

		if(tv && it.length<1){

			if(tv=='I18N'){
				tv='';
				$.each(i18n,function(i,j){
					tv+=sceg2(i)+' → '+sceg2(j)+br
				});
			}
			if(tv=='EN'){
				tv='';
				$.each(i18n,function(i,j){
					tv+=sceg2(j)+' → '+sceg2(i)+br
				});
			}

			if(v=='LaTeX'){
				tv+=br;
				$.each(SBS.Latex,function(i,j){
					if(!/func/.test(i)){
						tv+=sceg2(i)+' : '+sceg2('\\'+j+' ')+br
					}
				});
			}



			$('#input0Tip').prepend(detail(v+itv('remove" tip="Remove','remove_circle'),tv,'',strc+v+'"'));


			$('.inputTip.inputTypeTip').last().prevAll().remove();

		}
		
		if($('#preview.seled').length){
			preDisplay()
		}

	}).on('change','#output0Type', function(){
		var me=$(this), v=me.val(), isSVG=v=='SVG';
		if($('#preview.seled').length){
			preDisplay()
		}
		if(isSVG && $('#displayMode').length<1){
			me.after(
				itv('" id=displayMode tip="Display / Inline','wrap_text')+
				itv('seled" id=SVGLinkMode tip="SVG Link','link')
			)
		}
		$('#displayMode,#SVGLinkMode').toggle($(this).val()=='SVG')
	
	}).on('click','#send2textBox',function(){

		var v=$('#input0').val();
		if(v.trim()){
			textareaAdd(v,'#'+L.tool+'Ground .ground1 .editorText')
		}

	}).on('click','.Mele', function(){
		var t=$(this).text(),o=Meleo[t]||t;
		if(!/HTML|Slide/i.test(t)){
			textareaAdd(XML.wrapE(t),'#showGround .editorText',1,t.length+3);
		}
		if($('#input0Type option[value="'+o+'"]').length && $('#input0Type').val()!=o){
			var s=$('.snippet[data-type="'+t+'"]');
			if(s.length){
				s.eq(0).find('.snippetName').click();
			}else if($('#input0').val()==''){
				$('#input0Type').val(o).change();
			}
			

			$('#iTextFold').not('.seled').click();
		}

	}).on('click','#UploadSnippetFile',function(){

		$('#inputSnippetFile').click()

	}).on('change','#inputSnippetFile',function(){
		var v=$(this).val();
		if(v){
			var files=this.files, fl=files.length, l=+L.snippets||1;
			for(var i=0;i<fl;i++){
				var f=files[i], s=f.size, ext=f.type.replace(/(text|application)[/]/,''), m=f.name;

//console.log(f,m,s,ext);
				ext=ext.toUpperCase();
				if(ZLR(Mele+' '+Mele2).indexOf(ext)>-1){
					ext=ZLR(Meles)[ZLR(Mele).indexOf(ZLR(Mele2).indexOf(ext)>-1?Meleo[ext]:ext)]
				}
				if(!ext){
					ext='TXT';
				}
/*
					if(!s){s='?KB'}else{
						s=sizeKB(s)
					}
*/
					var reader=new FileReader();
					reader.onload = function(e){
						//var txt = this.result;
						var txt=e.target.result;

						L['snippet'+(l+1)]=txt;
						
						L['snippetName'+(l+1)]=m;

						L['snippetType'+(l+1)]=ext;
						L.snippets=l+1;
						snippet.load(l+1);
					};
					//reader.readAsDataURL(f);
					reader.readAsText(f);

			}
		}


	}).on('click','#iClear',function(){

		if($('#input0').val()==''){
			$('#preview.seled').click();
		}else{
			$('#input0').val('');
			$('#input0Preview').empty().removeAttr('style');
		}

	}).on('click','#iClear2',function(){

		$('#input2').val('');

	}).on('click','#cClear',function(){

		$('#input1').val('');

	}).on('click','#tClear,#tClear2',function(){

		var t=$('.iTextLaTeXon .seled');
		if(t.length){
			t.click();
		}else if($('#input0Tip > .inputTip').length>1){
			$('#input0Tip > .inputTip').last().prevAll().remove()
		}else{
			$('#input0Tip > .inputTip').remove();
		}

	}).on('click','#iTextFold',function(){
	
		var me=$(this), sel=me.toggleClass('seled').is('.seled');
		$('#preview,#input0Toolon,#Snippetson,#Shift').toggle(sel);
		if(sel){
			$('#iTextMain').show();

			if($('#preview').is('.seled')){
				$('#previewTool').show();
			}

		}else{
			$('#preview.seled').click();
			$('#iTextPreview').prevAll().hide();

		}

	}).on('click','#input0Toolon',function(){
		var me=$(this), sel=me.toggleClass('seled').is('.seled');
		$('#input0Tool').toggle(sel);

	}).on('click','#input0Tipon',function(){
		var me=$(this), sel=me.toggleClass('seled').is('.seled');
		$('#input0Tip').toggle(sel);

		if(sel && $('#input0Tip .inputTip').length<1){
			$('#input0TipType').val($('#input0Type').val()).change();

		}

	}).on('click','#displayOverCanvas',function(){
		
		OverCanvas($('#input0').val());



	}).on('click','.tool', function(e){

		var me=$(this).toggleClass('seled'),id=me.attr('id'),se=me.is('.seled'), nm=me.attr('name');

		if(nm){
			me.siblings('.seled.tool[name='+nm+']').removeClass('seled')
		}
		if(me.is('.radio')){
			se=1;
			me.addClass('seled');
		}

		if(/on/.test(id)){
			var Id=id.replace(/on$/,'');
			$('#i'+Id+',#'+Id).toggle(se);
			

			if(id=='Condon'){
				$('#input1').val('');
				$('#cClear').toggle();

			}else if(/sbs|funcs|struc|editText|rand/.test(id)){

				me.siblings('.seled.tool').removeClass('seled').each(function(){
					var tid=this.id.replace(/on$/,'');
					$('#struc > .sbsTbl').children().hide();
					$('#i'+tid+',#'+tid).hide();

				});
				$('#swap').remove();
				if(se){
					if(!me.next().is('#swap')){
						me.after(itv('" tip=Swap id="swap','swap_vert'));
					}
			
				}
				if(/struc/.test(id)){
					$('#istruc .Sts.seled').click();
					$('#struc .sbsTbl > *').hide();
				}

			}

		}


		if(id=='preview'){
			var v=$('#input0').val().trim();
			if(se){// && v
				preDisplay();
			}else{

				$('#input0Preview, #previewTool').hide();

			}

			$('.inputTip').removeAttr('open');
		}


	}).on('click','#editorLaunch',function(){

		window.open('editor.html'+(ishome?'?type='+$('#input0Type').val()+'&t='+fn0($('#input0').val()):''))

	}).on('click','.oClear',function(){
		
	//	bodyFocus();
		
		if($(this).is('#oHClear')){
			if($('#oHTML').html()==''){
				if($('#capsimg+div').next().length){
					$('#noteEraser').click();
				}else{
					$('#clear').click();
				}
			}else{
				$('#oHTML').empty();
			}
			$('#menu > i.toggle').click();

		}else{
			
			$('#oHTML').empty();
		}

		$('#zMatherOn:contains(down)').click();


	}).on('click','#zMatherOn2',function(){

		$('#zMatherOn:contains(up)').click();
		$('#panel').show()

	}).on('keydown',function(e){

		var k=e.keyCode, shft=e.shiftKey || $('#Shift').is('.seled'), ctrl=e.ctrlKey, alt=e.altKey, act=document.activeElement, 
		node=act.tagName.toLowerCase(), me=$(act),id=me.attr('id')||'';
//console.log(k,node);

		if(node=='textarea'){

			var iv=me.val(), sS=act.selectionStart, sE=act.selectionEnd,
			A=[iv.substr(0,sS),iv.substring(sS,sE),iv.substr(sE)],t=sS, iT=$('#input0Type').val();
			if(k==9 && !alt){
			
				//consolelog(A);
				if(shft){
					A[1]=A[1].replace(/^\t/,'').replace(/\n\t/g,brn);
				}else{
					A[1]='\t'+A[1].replace(/\n/g,'\n\t');
					t++;
				}
				me.val(A.join(''));
				act.selectionStart=t;
				act.selectionEnd=t;
				return false
			}
			
			//consolelog(k);
			if(ctrl && iT=='Markdown' && id=='input0' && [73,66,85,81,75].indexOf(k)>-1){
				//consolelog(sS,iv,sE);
				if(k==73){
					if(sS==sE){
						A[1]='**';
					}else{
						A[1]='*'+A[1]+'*'
					}
					t++
				}
				if(k==66){
					if(sS==sE){
						A[1]='** **'
					}else{
						A[1]='**'+A[1]+'**'
					}
					t+=2
				}
				if(k==85){
					if(sS==sE){
						A[1]='__ __'
					}else{
						A[1]='__'+A[1]+'__'
					}
					t+=2;
					
				}
				if(k==81){
					if(sS==sE){
						A[1]='\n> '
					}else{
						A[1]='\n> '+A[1]
					}
					t+=3
				}
				
				if(k==75){
					if(sS==sE){
						A[1]='[](http:// '+gM('Title')+')';
						t++;
					}else{
						A[1]='['+A[1]+'](http:// '+gM('Title')+')'
						t+=10+A[1].length;
					}
				}
				
				me.val(A.join(''));
				act.selectionStart=t;
				act.selectionEnd=t;
				
				if(k==85){
					return false
				}

			}
			
			
		}

		if(/^(input|textarea)$/.test(node)){
			if(ctrl){
				if(k==13){
					if(/^input[01]/.test(id)){
						$('#go').click();
					}
					if(id=='TextBox'){
						$('#TextBoxGo').click();
					}
				}
				if(k==83){//s

					return false
				}
			}
			if(shft){
				if(k==13){
					//$('#preview').click();
				}	
			}
		}

		if(alt){
			if(k==50 || k==98){
				var t=getSelection().toString();
				if(t){saveText(t, gM('zzllrr Mather')+'_'+Time.now()+'.txt')}
			}
		}

	

	});
	

	$('#input0Type').val(Meleo[L.snippetType1]||L.snippetType1).change();
	sTo(function(){$('#input0Tipon').click()},300);
});