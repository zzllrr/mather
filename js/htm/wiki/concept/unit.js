/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Concept/Number/Unit']=//Kx(

	detail('数量级',Table([ZLR('数量级 中文 梵语 英文（美） 英文（英）')],[
		['10^{-24}','[幺]','涅盘寂静','',''],
		['10^{-21}','[仄]','清净','',''],
		['10^{-20}','','虚空','',''],
		['10^{-19}','','六德','',''],
		['10^{-18}','[阿]','刹那','',''],
		['10^{-17}','','弹指','',''],
		['10^{-16}','','瞬息','',''],
		['10^{-15}','[飞]','须臾','',''],
		['10^{-14}','','逡巡','',''],
		['10^{-13}','','模糊','',''],
		['10^{-12}','漠[皮]','','',''],
		['10^{-11}','渺','','',''],
		['10^{-10}','埃','','',''],
		['10^{-9}','尘[纳]','','',''],
		['10^{-8}','沙','','',''],
		['10^{-7}','纤','','',''],
		['10^{-6}','[微]','','',''],
		['10^{-5}','忽','','',''],
		['10^{-4}','丝','','',''],
		['10^{-3}','[毫]','','',''],
		['10^{-2}','[厘]','','',''],
		['10^{-1}','[分]','','',''],

		['10^{0}','个','','one\n','='],
		['10^{1}','十','','ten\n','='],
		['10^{2}','百','','hundred\n','='],
		['10^{3}','千','','thousand\n','='],
		['10^{4}','万','','ten thousand\n','='],
		['10^{5}','十万','','hundred thousand\n','='],
		['10^{6}','百万[兆]','','million\n','='],
		['10^{7}','千万','','ten million\n','='],
		['10^{8}','亿','','hundred million\n','='],
		['10^{9}','十亿[吉]','','billion\n','thousand million\n'],
		['10^{10}','百亿','','ten billion\n','ten thousand million\n'],
		['10^{11}','千亿','','hundred billion\n','hundred thousand million\n'],
		['10^{12}','万亿【兆】[太]','','trillion\n','billion\n'],
		['10^{13}','十兆','','ten trillion\n','ten billion\n'],
		['10^{14}','百兆','','hundred trillion\n','hundred billion\n'],
		['10^{15}','千兆[拍]','','quadrillion\n','thousand billion\n'],
		['10^{16}','【京】','','ten quadrillion\n','ten thousand billion\n'],
		['10^{17}','十京','','hundred quadrillion\n','hundred thousand billion\n'],
		['10^{18}','百京[艾]','','quintillion\n','trillion\n'],
		['10^{19}','千京','','ten quintillion\n','ten trillion\n'],
		['10^{20}','【垓】','','hundred quintillion\n','hundred trillion\n'],
		['10^{21}','十垓[泽]','','sextillion\n','quadrillion\n'],
	//	ZLR('-',10),
		['10^{24}','【秭】[尧]','','septillion\n',''],

		['10^{27}','千秭','','octillion\n',''],
		['10^{28}','【穰】','','',''],


		['10^{30}','百穰','','nonillion\n',''],

		['10^{32}','【沟】','','',''],
		['10^{33}','十沟','','decillion\n',''],

		['10^{36}','【涧】','','undecillion\n',''],

		['10^{39}','千涧','','duodecillion\n',''],
		['10^{40}','【正】','','',''],



		['10^{42}','百正','','tredecillion\n',''],

		['10^{44}','【载】','','',''],
		['10^{45}','十载','','quattuordecillion\n',''],

		['10^{48}','【极】','','quindecillion\n',''],

		['10^{51}','千极','','sexdecillion\n',''],
		['10^{52}','','【恒河沙】','',''],

		['10^{54}','','百恒河沙','septendecillion\n',''],

		['10^{56}','','【阿僧祇qí】\nasamkya\n','',''],
		['10^{57}','','十阿僧祇','octodecillion\n',''],

		['10^{60}','','【那由他】','novemdecillion\n',''],

		['10^{63}','','千那由他','vigintillion\n',''],
		['10^{64}','','【不可思议】','',''],

		['10^{66}','','百不可思议','tredecillion\n',''],

		['10^{68}','','【无量】','',''],
		['10^{69}','','十无量','quattuordecillion\n',''],

		['10^{72}','','【大数】','tredecillion\n',''],

		['10^{75}','','','',''],
		['10^{76}','','【全仕祥】','',''],

		['10^{100}','','','googol\n',''],

		['10^{303}','','','centillion\n',''],
		[msups([10,10,100],''),'','','googolplex\n','']

	],'wiki')).replace(/\n/g,br)+
	
detail('单位换算',[
	
detail('数量级前缀',Table([[''].concat(copyA('×',10))],[
	ZLR('中文 十 百 千 兆 吉 太 拍 艾 泽 尧'),
	Arrf(kxf,ZLR('英文 deca hecto kilo mega giga tera peta exa zetta yotta')),
	Arrf(kxf,ZLR('符号 da h k M G T P E Z Y')),
	ZLR('数量级 10^1 10^2 10^3 10^6 10^9 10^{12} 10^{15} 10^{18} 10^{21} 10^{24}'),
	ZLR('-',11),
	ZLR('中文 分 厘 毫 微 纳 皮 飞 阿 仄 幺'),
	Arrf(kxf,ZLR('英文 deci centi milli micro nano pico femto atto zepto yocto')),
	Arrf(kxf,ZLR('符号 d c m μ n p f a z y')),
	ZLR('数量级 10^{-1} 10^{-2} 10^{-3} 10^{-6} 10^{-9} 10^{-12} 10^{-15} 10^{-18} 10^{-21} 10^{-24}')
],'wiki').replace(/\n/g,br)),
detail('国际单位制SI基本单位',Table([ZLR('物理量 物理量英文 物理量符号 中文 英文 符号 定义')],[
	ZLR('长度____length\n____\\text{L}____米____metre\n____\\text m____1米是光在真空中1/299792458秒的行程','','____'),
	ZLR('质量____mass\n____\\text{m}____千克\n公斤____kilogram\n____\\text{kg}____国际千克原器的质量','','____'),
	ZLR('时间____time\n____\\text{t}____秒____second\n____\\text{s}____1秒是铯-133原子基态两个超精细能级之间跃迁\\\\所对应的辐射的9192631770周期的持续时间','','____'),
	ZLR('电流____electric current\n____\\text{I}____（安）培____ampere\n____\\text{A}____真空中相距1米的两根无限长且圆截面可忽略的\\\\平行直导线内通过一恒定电流，\\\\当两导线每米长度之间产生的力等于2×10^{-7}牛顿时，\\\\则规定导线中通过的电流为1安培','','____'),
	ZLR('温度____thermodynamic temperature\n____T\nΘ____（开）尔文____kelvin\n____\\text{K}____1开是水三相点热力学温度的{1}\\/{273.16}','','____'),
	ZLR('物质的量____amount of substance\n____\\text{n}____（摩）尔____mole\n____\\text{mol}____1摩是一系统物质的量，所包含的基本单位\\\\（含有阿伏伽德罗常量（约6.02×10^{23}）个）\\\\与12克碳-12的原子数目相等','','____'),
	ZLR('光强____luminous intensity\n____I\nJ____（坎）德拉____candela\n____\\text{cd}____1坎为一光源在给定方向的发光强度，\\\\光源发出频率为540×10^{14}赫的单色辐射，\\\\且在此方向上的辐射强度为{1}\\/{683}瓦每球面度','','____')
],'wiki').replace(/\n/g,br)),
detail('SI导出单位（专有名称）',Table([ZLR('物理量 物理量英文 物理量符号 中文 英文 符号 表达式 表达式（用基本单位） 定义')],[
	ZLR('角____angle\n________弧度____radian\n____\\text{rad}________\\text{m}·\\text{m}^{-1}____','','____'),
	ZLR('立体角____solid angle\n________球面度____steradian\n____\\text{sr}________\\text{m}^2·\\text{m}^{-2}____','','____'),
	ZLR('频率____frequency\n________（赫）兹____hertz\n____\\text{Hz}________\\text{s}^{-1}____','','____'),
	ZLR('力\n重力____force\nweight________（牛）顿____newton\n____\\text{N}________\\text{kg}·\\text{m}·\\text{s}^{-2}____','','____'),
	ZLR('压强\n应力____pressure\nstress________（帕）斯卡____pascal\n____\\text{Pa}____\\text{N}/\\text{m}^2____\\text{kg}·\\text{m}^{-1}·\\text{s}^{-2}____','','____'),
	ZLR('能量\n功\n热量____energy\nwork\nheat________（焦）耳____joule\n____\\text{J}____\\text{N}·\\text{m}____\\text{kg}·\\text{m}^2·\\text{s}^{-2}____','','____'),
	ZLR('功率\n辐射通量____power\nradiant flux________（瓦）特____watt\n____\\text{W}____\\text{J}/\\text{s}____\\text{kg}·\\text{m}^2·\\text{s}^{-3}____','','____'),
	ZLR('电量____electric charge\nquantity of electricity________（库）仑____coulomb\n____\\text{C}________\\text{s}·\\text{A}____','','____'),
	ZLR('电压\n电位差\n电势\n电动势____voltage\nelectrical potential difference\nelectromotive force________（伏）特____volt\n____\\text{V}____\\text{W}/\\text{A}____\\text{kg}·\\text{m}^2·\\text{s}^{-3}·\\text{A}^{-1}____','','____'),
	ZLR('电容____electric capacitance\n________（法）拉____farad\n____\\text{F}____\\text{C}/\\text{V}____\\text{kg}^{-1}·\\text{m}^{-2}·\\text{s}^4·\\text{A}^2____','','____'),
	ZLR('电阻\n电抗\n电阻抗____electric resistance\nimpedance\nreactance________（欧）姆____\\text{ohm}____Ω____\\text{V}/\\text{A}____\\text{kg}·\\text{m}^2·\\text{s}^{-3}·\\text{A}^{-2}____','','____'),
	ZLR('电导____electrical conductance\n________（西）门子____siemens\n____\\text{S}____\\text{A}/\\text{V}____\\text{kg}^{-1}·\\text{m}^{-2}·\\text{s}^3·\\text{A}^2____','','____'),
	ZLR('磁通量____magnetic flux\n________（韦）伯____weber\n____\\text{Wb}____\\text{V}·\\text{s}____\\text{kg}·\\text{m}^2·\\text{s}^{-2}·\\text{A}^{-1}____','','____'),
	ZLR('磁感应强度\n磁通量密度____magnetic flux density\n________（特）斯拉____tesla\n____\\text{T}____\\text{Wb}/\\text{m}^2____\\text{kg}·\\text{s}^{-2}·\\text{A}^{-1}____','','____'),
	
	ZLR('电感____inductance\n________（亨）利____henry\n____\\text{H}____\\text{Wb}/\\text{A}____\\text{kg}·\\text{m}^2·\\text{s}^{-2}·\\text{A}^{-2}____','','____'),
	ZLR('温度____temperature\n____\\text{T}____摄氏度____coulomb\n____\\text{°\\text{C}}________\\text{K}____°\\text{C}=°\\text{K}-273.15=(°\\text{F}-32)/1.8','','____'),
	ZLR('________\\text{T}____华氏度____fahrenheit\n____\\text{°\\text{F}}________\\text{K}____°\\text{F}=°\\text{K}·1.8-459.67=°\\text{C}·1.8+32','','____'),
	ZLR('光通量____luminous flux\n________（流）明____lumen\n____\\text{lm}____\\text{cd}·\\text{sr}____\\text{cd}____','','____'),
	ZLR('光照度____illuminance\n________（勒）克斯____lux\n____\\text{lx}____\\text{lm}/\\text{m}^2____\\text{m}^{-2}·cd____','','____'),
	ZLR('放射性活度____radioactivity\ndecays per second________（贝可）勒尔____becquerel\n____\\text{Bq}________'+msup('s-1')+'____每秒发生1次自发核转变或跃迁','','____'),
	ZLR('吸收剂量____absorbed dose\n________（戈）瑞____gray\n____\\text{Gy}____\\text{J}/\\text{kg}____\\text{m}^2·\\text{s}^{-2}____','','____'),
	ZLR('剂量当量____equivalent dose\n________（希）沃特____sievert\n____\\text{Sv}____\\text{J}/\\text{kg}____\\text{m}^2·\\text{s}^{-2}____','','____'),
	ZLR('催化活度____catalytic activity\n________卡塔尔____katal\n____\\text{kat}________\\text{mol}·\\text{s}^{-1}____每秒催化1\\text{mol}底物转化的酶量','','____'),
],'wiki').replace(/\n/g,br)),
detail('角 Angle',Table([ZLR('中文 英文 符号 表达式（用基本单位） 定义')],[

	ZLR('微秒____microarcsecond\n____\\text{μas}____{π}\\/{648 000 000 000}\\text{rad}____','','____'),
	ZLR('毫秒____milliarcsecond\n____\\text{mas}____{π}\\/{648 000 000}\\text{rad}____1\\text{mas} = 1000\\text{μas}','','____'),
	ZLR('秒____second of arc\narcsec\nasec____″____{π}\\/{648 000}\\text{rad}____1″= 1000\\text{mas}','','____'),
	ZLR('分____minute of arc\narcmin\namin\nam____′\\\\\\text{MOA}____{π}\\/{10800}\\text{rad}____1′= 60″','','____'),
	ZLR('角密耳____milliradian\n____\\text{mil}\\\\\\text{MRAD}____{1}\\/{1000}\\text{rad}____','','____'),
	ZLR('梯度（计算器）____gradian\ngrad\ngon____\\text{g}____{π}\\/{200}\\text{rad}____1\\text{g} = 54′','','____'),
	ZLR('度____degree of arc\narc degree\narcdegree\ndeg____\\text{°}____{π}\\/{180}\\text{rad}____1°= 60′','','____'),
	ZLR('直角____right angle\n____∟____{π}\\/{2}\\text{rad}____1∟ = 90°= 100\\text{g}','','____'),
	ZLR('圈____turn\nround angle____\\text{tr}\\\\\\text{pla}____2π\\text{rad}____1\\text{tr} = 4∟ = 360°= 400\\text{g}','','____'),
],'wiki').replace(/\n/g,br)),
detail('长度 Length',Table([ZLR('中文 英文 符号 表达式（用基本单位） 定义')],[

	ZLR('埃____angstrom\nångström____\\text{Å}____10^{-10}\\text{m}____1\\text{Å} = 0.1\\text{nm}','','____'),
	ZLR('密耳____mil\nthou____\\text{mil}\\\\\\text{th}____0.000 0254\\text{m}____','','____'),
	ZLR('【毫】____________{1}\\/{30 000}\\text{m} ≈ 0.000 033\\text{m}____'+
		Table([[''].concat(copyA('×',8))],[ZLR('\\text{SI}单位 千米 米 分米 厘米 毫米 丝米 忽米 微米'),ZLR('工程单位 公里 公尺 公寸 公分 厘 毫 丝 忽'),ZLR('米 10^3 10^0 10^{-1} 10^{-2} 10^{-3} 10^{-4} 10^{-5} 10^{-6} 10^{-7} 10^{-8}')],'TBrc alignc')+
		SCtv('notes','SI单位与工程单位有区别，勿混淆'),'','____'),
	ZLR('【厘】____________{1}\\/{3000}\\text{m} ≈ 0.000 33\\text{m}____1厘 = 10毫','','____'),
	ZLR('点\n磅（音译）____point\n____\\text{pt}____{127}\\/{360 000}\\text{m} ≈ 0.000 35278\\text{m}____'+
		Table('',[ZLR('中文字号 八 七 小六 六 小五 五 小四 四 小三 三 小二 二 小一 一 小初 初'),ZLR('点（磅） 5 5.5 6.5 7.5 9 10.5 12 14 15 16 18 22 24 26 36 42')],'TBrc alignc'),'','____'),
	ZLR('【分】____________{1}\\/{300}\\text{m} ≈ 0.0033\\text{m}____1分 = 10厘 = 100毫','','____'),

	ZLR('派卡____pica\n____\\text{pc}____{127}\\/{30 000}\\text{m} ≈ 0.00423\\text{m} ____1\\text{pc} = 12\\text{pt}','','____'),
	ZLR('英寸____inch\n____″\\\\\\text{in}____0.0254\\text{m}____1″= 6\\text{pc} = 72\\text{pt} = 1000\\text{thou}(\\text{mil})','','____'),
	ZLR('【寸】____________{1}\\/{30}\\text{m} ≈ 0.0333\\text{m}____1寸 = 10分 = 100厘 = 1000毫','','____'),
	ZLR('掌宽____hand\n____\\text{hh}\\\\\\text{h}____0.1016\\text{m}____1\\text{hh} = 4″\\\\掌宽的小数点后表示英寸数','','____'),
	ZLR('令____link\n____\\text{l}.\\\\\\text{li}.\\\\\\text{lnk}.____0.201168\\text{m}____1\\text{lnk} = 7.92″','','____'),
	ZLR('虎口____span\n____span\n____0.2286\\text{m}____1\\text{span} = 9″','','____'),
	ZLR('光纳秒____light nanosecond\n________0.299792458\\text{m}____光在真空中走一纳秒的距离','','____'),
	ZLR('英尺____foot\n____′\\\\\\text{ft}____0.3048\\text{m}____1′= 3\\text{hh} = 12″','','____'),
	ZLR('【尺】____________{1}\\/{3}\\text{m} ≈ 0.3333\\text{m}____1尺 = 10寸 = 100分 = 1000厘 = 10000毫','','____'),
	ZLR('码____yard\n____\\text{yd}____0.9144\\text{m}____1\\text{yd} = 3′= 4\\text{span} = 9\\text{hh} = 36″','','____'),
	ZLR('拓\n英寻\n浔____fathom\n____fm\nftm____1.8288\\text{m}____1\\text{fm} = 2\\text{yd} = 6′= 8\\text{span} = 18\\text{hh} = 72″','','____'),
	ZLR('【丈】____________{10}\\/{3}\\text{m} ≈ 3.3333\\text{m}____1丈 = 10尺 = 100寸 = 1000分 = 10 000厘 = 100 000毫','','____'),
	ZLR('杆____rod\nperch\npole____\\text{rod}\\\\\\text{rd}____5.0292\\text{m}____1\\text{rod} = 2.75\\text{fm} = 5.5\\text{yd} = 16.5′= 25\\text{lnk} = 198″','','____'),
	ZLR('链\n测链____chain\n____\\text{ch}____20.1168\\text{m}____1\\text{ch} = 4\\text{rod} = 100\\text{lnk}\\\\1\\text{ch} = 11\\text{fm} = 22\\text{yd} = 66′= 88\\text{span} = 198\\text{hh} = 792″','','____'),
	ZLR('【引】____________{100}\\/{3}\\text{m} ≈ 33.3333\\text{m}____1引 = 10丈 = 100尺 = 1000寸 = 10 000分 = 100 000厘 = 1000 000毫','','____'),
	ZLR('锚链____cable\n____cable\n____185.2\\text{m}____','','____'),
	ZLR('弗隆\n浪____furlong\n____\\text{fur}____201.168\\text{m}____1\\text{fur} = 10\\text{ch} = 40\\text{rod} = 1000\\text{lnk}\\\\1\\text{fur} = 110\\text{fm} = 220\\text{yd} = 660′= 880\\text{span}  = 1980\\text{hh} = 7920″','','____'),
	
	ZLR('光微秒____light millisecond\n________299.792458\\text{m}____光在真空中走一微秒的距离','','____'),
		
	ZLR('【里】____________500\\text{m}____1里 = 150丈 = 1500尺 = 15000寸 = 150 000分 = 1500 000厘 = 15 000 000毫','','____'),
	ZLR('英里____mile\n____\\text{mi}____1609.344\\text{m}____1\\text{mi} = 8\\text{fur} = 80\\text{ch} = 320\\text{rod} = 8000\\text{lnk}\\\\1\\text{mi} = 880\\text{fm} = 1760\\text{yd} = 5280′ = 15840\\text{hh} = 63360″','','____'),
	ZLR('海里____nautical mile\n____\\text{nmi}\\\\\\text{nm}\\\\\\text{M}\\\\\\text{NM}____1852\\text{m}____1\\text{nmi} = 10\\text{cable}','','____'),

	ZLR('光毫秒____light millisecond\n________299792.458\\text{m}____光在真空中走一毫秒的距离','','____'),

	ZLR('光秒____light second\n________299792458\\text{m}____光在真空中走一秒的距离','','____'),
	ZLR('光分____light minute\n________17987547480\\text{m}____1光分=60光秒','','____'),
	ZLR('天文单位____astronomical units\nparsec____\\text{AU}\\\\\\text{au}\\\\\\text{ua}____149597870700\\text{m}____≈地球与太阳的距离≈500光秒','','____'),
	ZLR('光时____light hour\n________1079252848800\\text{m}____1光时=60光分=3600光秒','','____'),
	ZLR('光天____light day\n________25902068371200\\text{m}____1光天=24光时=1440光分=86400光秒','','____'),
	ZLR('光周____light week\n________181314478598400\\text{m}____1光周=7光天=168光时=10080光分=604800光秒','','____'),
	ZLR('光年____light year\n____\\text{ly}____9460730472580800\\text{m}____光在真空中走一年（儒略年，365.25日）的距离\\\\1光年=365.25光天=8766光时=525960光分=31557600光秒','','____'),
		
		
	ZLR('秒差距____parallax second\nparsec____\\text{pc}____\\text{m}____以地球和太阳距离为底边，视角π = 1″的\\\\恒星与地球的距离r为\\\\206264\\text{AU}（=3.08568×10^16 \\text{m} = 3.2616 光年）','','____'),

],'wiki').replace(/\n/g,br)),
detail('面积 Area',Table([ZLR('中文 英文 符号 表达式（用基本单位） 定义')],[
	ZLR('平方厘米____square centimeter\n____\\text{cm}^2____0.000 1\\text{m}^2____','','____'),
	ZLR('平方英寸____square inch\n____\\text{in}^2____0.000 64516\\text{m}^2____','','____'),

	ZLR('平方英尺____square foot\n____\\text{ft}^2____0.09290304\\text{m}^2____1\\text{ft}^2 = 144\\text{in}^2','','____'),
	ZLR('平方码____square yard\n____\\text{yd}^2____0.83612736\\text{m}^2____1\\text{yd}^2 = 9\\text{ft}^2','','____'),

	ZLR('平方米____centiare\n____\\text{m}^2\\\\\\text{ca}____1\\text{m}^2____1\\text{m}^2 = 10^4\\text{cm}^2','','____'),
		
	ZLR('平方杆____perch\nsquare rod____perch\n____25.29285264\\text{m}^2____1\\text{perch} = 1\\text{rod}×1\\text{rod} = 30.25\\text{yd}^2 = 272.25\\text{ft}^2','','____'),

	ZLR('分________分____{200}\\/{3}\\text{m}^2 ≈ 66.67\\text{m}^2____','','____'),
		
	ZLR('公亩____\\text{are}____\\text{a}\\\\\\text{dam}^2____100\\text{m}^2____1\\text{a} = 1.5分','','____'),
	ZLR('亩________亩____{2000}\\/{3}\\text{m}^2 ≈ 666.67\\text{m}^2____1亩 = 10分','','____'),

	ZLR('十公亩____dectare\n____\\text{daa}____1000\\text{m}^2____1\\text{daa} = 10\\text{a} = 1000\\text{ca}','','____'),

	ZLR('路德____rood\n____rood\n____1011.7141056\\text{m}^2____1\\text{rood} = 1\\text{fur}×1\\text{rod} = 40\\text{perch} = 1210\\text{yd}^2','','____'),
	ZLR('英亩____acre\n____\\text{ac}____4046.8564224\\text{m}^2____1\\text{ac} = 1\\text{fur}×1\\text{ch} = 4\\text{rood} = 160\\text{perch} = 4840\\text{yd}^2','','____'),

	ZLR('公顷____hectare\n____\\text{ha}\\\\\\text{hm}^2____10 000\\text{m}^2____1\\text{ha} = 15亩 = 150分\\\\1\\text{ha} = 10\\text{daa} = 100\\text{a}','','____'),
	ZLR('顷________顷____{200000}\\/{3}\\text{m}^2 ≈ 66667\\text{m}^2____1顷 = 100亩 = 1000分','','____'),
	ZLR('平方公里\n平方千米____square kilometre\n____\\text{km}^2____1000 000\\text{m}^2____1\\text{km}^2 = 100\\text{ha} = 1000\\text{da} = 10000\\text{a}','','____'),

	ZLR('平方英里____square mile\n____\\text{mi}^2____2 589 988.110336\\text{m}^2____1\\text{mi}^2 = 8\\text{fur}×80\\text{ch} = 640\\text{ac}','','____'),
],'wiki').replace(/\n/g,br)),
detail('体积 Volume',Table([ZLR('中文 英文 符号 表达式 表达式（用基本单位） 定义')],[
	ZLR('【撮】________________0.000 001\\text{m}^3____','','____'),
	ZLR('【勺】________________0.000 01\\text{m}^3____1勺 = 10撮','','____'),
	ZLR('立方厘米\n【合】____cubic centimeter\n____\\text{cm}^3________0.000 1\\text{m}^3____','','____'),
	ZLR('立方英寸____cubic inch\n____\\text{in}^3________0.000 64516\\text{m}^3____','','____'),
	
	ZLR('升\n立方分米____litre\ncubic decimetre____\\text{l}\\\\\\text{L}\\\\\\text{ltr}\\\\\\text{dm}^3________0.001\\text{m}^3____','','____'),

	
	ZLR('加仑（英制）____gallon\n____\\text{gal}\\\\\\text{dm}^3________0.00454609\\text{m}^3____1英式加仑被定义为华氏62度下10磅重的水的体积','','____'),
	ZLR('【斗】________________0.01\\text{m}^3____1斗 = 10升 = 100合 = 1000勺 = 10000撮','','____'),
	
	ZLR('立方英尺____cubic foot\n____\\text{ft}^3________0.09290304\\text{m}^3____1\\text{ft}^3 = 144\\text{in}^3','','____'),
	ZLR('【石】________________0.1\\text{m}^3____1石 = 10斗 = 100升 = 1000合 = 10000勺 = 100000撮','','____'),
		
	ZLR('立方码____cubic yard\n____\\text{yd}^3________0.83612736\\text{m}^3____1\\text{yd}^3 = 9\\text{ft}^3','','____'),

	ZLR('立方米____centiare\n____\\text{m}^3\\\\\\text{ca}________1\\text{m}^3____1\\text{m}^3 = 10^4\\text{cm}^3','','____'),
		
	ZLR('立方杆____perch\ncubic rod____\\text{perch}________25.29285264\\text{m}^3____1\\text{perch} = 1\\text{rod}×1\\text{rod} = 30.25\\text{yd}^3 = 272.25\\text{ft}^3','','____'),

	ZLR('分________分________{200}\\/{3}\\text{m}^3 ≈ 66.67\\text{m}^3____','','____'),
		
	ZLR('公亩____\\text{are}____\\text{a}\\\\\\text{ndam}^3________100\\text{m}^3____1\\text{a} = 1.5分','','____'),
	ZLR('亩________亩________{2000}\\/{3}\\text{m}^3 ≈ 666.67\\text{m}^3____1亩 = 10分','','____'),

	ZLR('十公亩____dectare\n____\\text{daa}________1000\\text{m}^3____1\\text{daa} = 10\\text{a} = 1000\\text{ca}','','____'),

	ZLR('路德____rood\n____rood\n________1011.7141056\\text{m}^3____1\\text{rood} = 1\\text{fur}×1\\text{rod} = 40\\text{perch} = 1210\\text{yd}^3','','____'),
	ZLR('英亩____acre\n____\\text{ac}________4046.8564224\\text{m}^3____1\\text{ac} = 1\\text{fur}×1\\text{ch} = 4\\text{rood} = 160\\text{perch} = 4840\\text{yd}^3','','____'),

	ZLR('公顷____hectare\n____\\text{ha}\\\\\\text{hm}^3________10 000\\text{m}^3____1\\text{ha} = 15亩 = 150分\\\\1\\text{ha} = 10\\text{daa} = 100\\text{a}','','____'),
	ZLR('顷________顷________200000^3\\text{m}^3 ≈ 66667\\text{m}^3____1顷 = 100亩 = 1000分','','____'),
	ZLR('立方公里\n立方千米____cubic kilometre\n____\\text{km}^3________1000 000\\text{m}^3____1\\text{km}^3 = 100\\text{ha} = 1000\\text{da} = 10000\\text{a}','','____'),

	ZLR('立方英里____cubic mile\n____\\text{mi}^3________2 589 988.110336\\text{m}^3____1\\text{mi}^3 = 8\\text{fur}×80\\text{ch} = 640\\text{ac}','','____'),

],'wiki').replace(/\n/g,br)),
detail('质量 Mass',Table([ZLR('中文 英文 符号 表达式（用基本单位） 定义')],[
	ZLR('【分】____________0.0005\\text{kg}____1分 = 0.5\\text{g}','','____'),
	ZLR('【钱】____________0.005\\text{kg}____1钱 = 10分 = 5\\text{g}','','____'),
	ZLR('【两】____________0.05\\text{kg}____1两 = 10钱 = 100分 = 50\\text{g}','','____'),
	ZLR('【斤】____________0.5\\text{kg}____1斤 = 0.5公斤 = 500\\text{g}','','____'),
	ZLR('【公斤】____________1\\text{kg}____1公斤 = 2斤 = 1千克','','____'),
	ZLR('【担】____________50\\text{kg}____1担 = 100斤','','____'),
	ZLR('吨____\\text{ton}____\\text{T}____1000\\text{kg}____','','____'),
],'wiki').replace(/\n/g,br)),
detail('时间 Time',Table([ZLR('中文 英文 符号 表达式（用基本单位） 定义')],[

	ZLR('分____minute\n____\\text{min}____60\\text{s}____1分 = 60秒','','____'),
	ZLR('刻____quater\n________900\\text{s}____1刻 = 15分','','____'),
	ZLR('时____hour\n________3600\\text{s}____1时 = 4刻 = 60分','','____'),
	ZLR('天\n日____day\n________86400\\text{s}____1天（日） = 24时 = 86刻 = 1440分','','____'),
	ZLR('周____week\n________604800\\text{s}____1周 = 7天（日） = 168时 = 602刻 = 10080分','','____'),
	ZLR('旬____________864000\\text{s}____1旬 = 10天（日） = 240时 = 860刻 = 14400分','','____'),
	ZLR('月____month\n____________1月 = '+piece([['28天','（平年2月）'],['29天','（闰年2月）'],['30天','（4, 6, 9, 11月）'],['31天','（1, 3, 5, 7, 8, 10, 12月）']]),'','____'),
	ZLR('年____year\n____________1年 = 12月 = '+piece(['365天（平年）','366天（闰年）']),'','____'),
	ZLR('年代____decade\n____________1年代 = 10年','','____'),
	ZLR('世纪____century\n____________1世纪 = 10年代 = 100年','','____'),
],'wiki').replace(/\n/g,br)),
detail('速度 Velocity',Table([ZLR('中文 英文 符号 表达式（用基本单位） 定义')],[

	ZLR('米/秒________\\text{\\text{m}/\\text{s}}________','','____'),
	ZLR('千米/时________\\text{\\text{km}/\\text{h}}____{5}\\/{18}\\text{\\text{m}/\\text{s}}____','','____'),
	ZLR('节________\\text{kn}____{463}\\/{900}\\text{\\text{m}/\\text{s}}____1节 = 1海里/时 = 1852\\text{\\text{m}/\\text{h}}','','____'),
],'wiki').replace(/\n/g,br)),
].join(br))+

detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[

	[enwiki('Physical_constants'),'',''],
	[enwiki('International_System_of_Units'),'',''],

	[href(Hs+'mathjs.org/docs/datatypes/units.html','mathjs units'),'',''],

],'TBrc'),1)
;
//);