/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Differential']=Kx(


detail('微分类型',Table([ZLR('名称 记法 定义 性质')],[

	[]

],'wiki').replace(/\n/g,br))+

detail('导数表',Table([['不定积分（省略常数项）','函数','1阶导数′','2阶导数″','n阶导数^{(n)}']],[
	
	ZLR('a∫f ± b∫g____af ± bg____af′ ± bg′____af″ ± bg″____af^{(n)} ± bg^{(n)}','','____'),
	ZLR('∫f'+kxf('d')+'g+∫g'+kxf('d')+'f____f⋅g____f′g + fg′____f″g + 2f′g′+ fg″____∑C_n^if^{(i)}g^{(n-i)}','','____'),
	ZLR('∫(fg)'+kxf('d')+'h+∫(fh)'+kxf('d')+'g+∫(gh)'+kxf('d')+'f____f⋅g⋅h____f′gh + fg′h + fgh′____(f″gh + fg″h + fgh″)+ 2(f′g′h+f′gh′+fg′h′)____∑C_n^{i,j}f^{(i)}g^{(j)}h^{(n-i-j)}','','____'),


	ZLR('____'+frac('f','g','')+'____'+khrA([frac('f′g - fg′','g^2',''),
		frac('f′','g','')+'-'+frac('fg′','g^2','')])+'____'+khrA([frac('f″g^2 - 2f′g′g + 2fg′^2 - fg″g','g^3',''),
		frac('f″','g','')+'-'+frac('2f′g′','g^2','')+frac('2fg′^2','g^3','')+'-'+frac('fg″','g^2','')])+'____'+kbrA([frac('∑(-1)^{i+j}C_n^if^{(i)}g^{(j)}g^{(n-i-j)}','g^{n+1}',''),'（？猜测待验证）']),'','____'),
		
	ZLR('____'+frac('1','g','')+'____-'+frac('g′','g^2','')+'____'+khrA([frac('2g′^2 - g″g','g^3',''),frac('2g′^2','g^3','')+'-'+frac('g″','g^2','')]),'','____'),
	ZLR('____f^{-1}(y)____'+frac('1','f′(x)','')+'____'+'-'+frac('f′(x)','f′^2(x)',''),'','____'),
	ZLR('____f(g(x))____f′(u)g′(x)____f″(u)g′^2(x) + f′(u)g″(x)','','____'),
	ZLR('____u(x)^{v(x)}____'+Eq(['(e^{\\ln u^v})′','(e^{v\\ln u})′','u^v(v\\ln u)′','u^v'+lrp('','v′\\ln u + '+frac('vu′','u',''),'','')])+'____'+khrA([
		kxA(['u^v'+lrp('','(v\\ln u)′^2 + (v\\ln u)″','',''),
			'=u^v'+lrp('',lrp('','v′\\ln u + '+frac('vu′','u',''),'','')+'^2 + v″\\ln u + '+frac('2v′u′+ vu″','u','')+'-'+frac('vu′^2','u^2',''),'','')]),
		'u^v(t′^2 + t″)'])+'____u^v∑','','____'),
	ZLR('____y____'+frac('y′(t)','x′(t)','')+'____'+khrA([frac('y″x′- y′x″','x′^3',''),
		frac('y″','x′^2','')+'-'+frac('y′x″','x′^3','')]),'','____'),
	ZLR('ax____a____0____0____0','','____'),
	ZLR(kxA([frac('x^{a+1}','a+1',''),'其中a≠-1'])+'____x^a____ax^{a-1}____a(a-1)x^{a-2}____a(a-1)⋯(a-n+1)x^{a-n}','','____'),
	ZLR('-\\cos x____\\sin x____\\cos x____-\\sin x____'+khrA(['\\sin '+lrp('','x + '+frac('nπ',2,''),'',''),
		piece([['\\sin x',kmod('n',0,4)],
			  ['\\cos x',kmod('n',1,4)],
			 ['-\\sin x',kmod('n',2,4)],
			 ['-\\cos x',kmod('n',3,4)]])]),'','____'),
	ZLR('\\sin x____\\cos x____-\\sin x____-\\cos x____'+khrA(['\\cos '+lrp('','x + '+frac('nπ',2,''),'',''),
		piece([['\\cos x',kmod('n',0,4)],
			 ['-\\sin x',kmod('n',0,4)],
			 ['-\\cos x',kmod('n',0,4)],
			 [ '\\sin x',kmod('n',0,4)]])]),'','____'),
	ZLR('-\\ln \\cos x____\\tan x = '+frac('\\sin x','\\cos x','')+'____\\sec^2x ='+frac(1,'\\cos ^2x',''),'','____'),
	ZLR('\\ln \\sin x____\\cot x = '+frac('\\cos x','\\sin x','')+'____-\\csc^2x = -'+frac(1,'\\sin ^2x',''),'','____'),
	ZLR('\\ln (\\sec x+\\tan x)____\\sec x = '+frac(1,'\\cos x','')+'____\\tan x⋅\\sec x = '+frac('\\sin x','\\cos ^2x','')+'____','','____'),
	ZLR('\\ln (\\csc x-\\cot x)____\\csc x = '+frac(1,'\\sin x','')+'____-\\cot x⋅\\csc x = -'+frac('\\cos x','\\sin ^2x','')+'____','','____'),
	ZLR('____\\arcsin x____'+frac(1,kroot('1-x^2'),''),'','____'),
	ZLR('____\\arccos x____-'+frac(1,kroot('1-x^2'),''),'','____'),
	ZLR('____\\arctan x____'+frac(1,'1+x^2',''),'','____'),
	ZLR('____'+kxf('arccot')+'~x____-'+frac(1,'1+x^2',''),'','____'),
	ZLR('____'+kxf('arcsec')+'~x____'+frac(1,'x'+kroot('x^2-1'),''),'','____'),
	ZLR('____'+kxf('arccsc')+'~x____-'+frac(1,'x'+kroot('x^2-1'),''),'','____'),
	ZLR(frac('a^x','\\ln a','')+'____a^x____\\ln a⋅a^x____\\ln ^2a⋅a^x____'+'\\ln ^na⋅a^x','','____'),
	ZLR('e^x____e^x____e^x____e^x____e^x','','____'),
	ZLR(frac('x\\ln x-1','\\ln a','')+'____\\log_ax____'+frac(1,'x\\ln a','')+'____-'+frac(1,'\\ln a⋅x^2','')+'____(-1)^{n-1}(n-1)!'+frac(1,'\\ln a⋅x^n',''),'','____'),
	ZLR('x\\ln x-1____\\ln x____'+frac(1,'x','')+'____-'+frac(1,'x^2','')+'____(-1)^{n-1}(n-1)!'+frac(1,'x^n',''),'','____'),
	ZLR('\\ch x____\\sh x = '+frac('e^x - e^{-x}',2,'')+'____\\ch x____\\sh x____'+piece([['\\sh x',kmod('n',0,2)],['\\ch x',kmod('n',1,2)]]),'','____'),
	ZLR('\\sh x____\\ch x = '+frac('e^x + e^{-x}',2,'')+'____\\sh x____\\ch x____'+piece([['\\ch x',kmod('n',0,2)],['\\sh x',kmod('n',1,2)]]),'','____'),
	ZLR('____\\th x = '+frac('\\sh x','\\ch x','')+'____'+kxf('sech')+'^2x____','','____'),
	ZLR('____\\cth x = '+frac('\\ch x','\\sh x','')+'____-'+kxf('csch')+'^2x____','','____'),
	ZLR('____'+kxf('sech')+'~x = '+frac(1,'\\ch x','')+'____-\\th x⋅'+kxf('sech')+'~ = -'+frac('\\sh x','\\ch^2x',''),'','____'),
	ZLR('____'+kxf('csch')+'~x = '+frac(1,'\\sh x','')+'____-\\cth x⋅'+kxf('csch')+'~x = -'+frac('\\ch x','\\sh^2x',''),'','____'),
	ZLR('____'+khrA(['\\sh^{-1}x','\\ln (x + '+kroot('x^2+1')+')'])+'____'+frac(1,kroot('x^2+1'),'')+'____'+'-x(x^2+1)^{-\\tfrac32}','','____'),
	ZLR('____'+khrA(['\\ch^{-1}x','\\ln (x + '+kroot('x^2-1')+')'])+'____'+frac(1,kroot('x^2-1'),'')+'____'+'-x(x^2-1)^{-\\tfrac32}','','____'),
	ZLR('____'+khrA(['\\th^{-1}x',frac(1,2,'')+'\\ln '+frac('1+x','1-x','')])+'____'+frac(1,'1-x^2',''),'','____'),
	ZLR('____'+khrA(['\\cth^{-1}x',frac(1,2,'')+'\\ln '+frac('1+x','x-1','')])+'____'+frac(1,'1-x^2',''),'','____'),
	ZLR(khrA([kxf('sech')+'^{-1}x','\\ln (1+'+kroot('1-x^2')+') - \\ln x'])+'____-'+frac(1,'x'+kroot('x^2+1'),''),'','____'),
	ZLR(khrA([kxf('csch')+'^{-1}x','\\ln (1+'+kroot('1+x^2')+') - \\ln x'])+'____-'+frac(1,'x'+kroot('1-x^2'),''),'','____')


],'wiki').replace(/\n/g,br))

);