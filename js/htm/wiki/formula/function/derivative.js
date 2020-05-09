/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Derivative']=Kx(
    detail(gM('Indefinite Integral & Derivative')+ksc('∫f→f→f\''),Table([['∫f（省略常数项）','函数f','1阶导数f\'','2阶导数f″','n阶导数f^{(n)}']],[
        
        ZLR('a∫f ± b∫g____af ± bg____af\' ± bg\'____af″ ± bg″____af^{(n)} ± bg^{(n)}','','____'),
        ZLR('∫f'+kxf('d')+'g+∫g'+kxf('d')+'f____f⋅g____f\'g + fg\'____f″g + 2f\'g\'+ fg″____∑C_n^if^{(i)}g^{(n-i)}','','____'),
        ZLR('∫(fg)'+kxf('d')+'h+∫(fh)'+kxf('d')+'g+∫(gh)'+kxf('d')+'f____f⋅g⋅h____f\'gh + fg\'h + fgh\'____(f″gh + fg″h + fgh″)\\\\+2(f\'g\'h+f\'gh\'+fg\'h\')____∑C_n^{i,j}f^{(i)}g^{(j)}h^{(n-i-j)}','','____'),
    
    
        ZLR('____'+frac('f','g','')+'____'+khrA([frac('f\'g - fg\'','g^2',''),
            frac('f\'','g','')+'-'+frac('fg\'','g^2','')])+'____'+khrA([frac('f″g^2 - 2f\'g\'g + 2fg\'^2 - fg″g','g^3',''),
            frac('f″','g','')+'-'+frac('2f\'g\'','g^2','')+frac('2fg\'^2','g^3','')+'-'+frac('fg″','g^2','')])+'____'+kbrA([frac('∑(-1)^{i+j}C_n^if^{(i)}g^{(j)}g^{(n-i-j)}','g^{n+1}',''),'（？猜测待验证）']),'','____'),
            
        ZLR('____'+frac('1','g','')+'____-'+frac('g\'','g^2','')+'____'+khrA([frac('2g\'^2 - g″g','g^3',''),frac('2g\'^2','g^3','')+'-'+frac('g″','g^2','')]),'','____'),
        ZLR('____f^{-1}(y)____'+frac('1','f\'(x)','')+'____'+'-'+frac('f\'(x)','f\'^2(x)',''),'','____'),
        ZLR('____f(g(x))____f\'(u)g\'(x)____f″(u)g\'^2(x) + f\'(u)g″(x)','','____'),
        ZLR('____u(x)^{v(x)}____'+Eq(['(e^{\\ln u^v})\'','(e^{v\\ln u})\'','u^v(v\\ln u)\'','u^v'+lrp('','v\'\\ln u + '+frac('vu\'','u',''),'','')])+'____'+khrA([
            kxA(['u^v'+lrp('','(v\\ln u)\'^2 + (v\\ln u)″','',''),
                '=u^v'+lrp('',lrp('','v\'\\ln u + '+frac('vu\'','u',''),'','')+'^2 + v″\\ln u + '+frac('2v\'u\'+ vu″','u','')+'-'+frac('vu\'^2','u^2',''),'','')]),
            'u^v(t\'^2 + t″)'])+'____u^v∑','','____'),
        ZLR('____y____'+frac('y\'(t)','x\'(t)','')+'____'+khrA([frac('y″x\'- y\'x″','x\'^3',''),
            frac('y″','x\'^2','')+'-'+frac('y\'x″','x\'^3','')]),'','____'),
        ZLR('ax____a____0____0____0','','____'),
        ZLR(kxA([frac('x^{a+1}','a+1',''),'其中a≠-1'])+'____x^a____ax^{a-1}____a(a-1)x^{a-2}____a(a-1)⋯(a-n+1)x^{a-n}','','____'),
        ZLR('-\\cos x____'+khrA(['\\sin x','注意：\\sin^2 x+\\cos^2 x=1'])+'____\\cos x____-\\sin x____'+khrA(['\\sin '+lrp('','x + '+frac('nπ',2,''),'',''),
            piece([['\\sin x',kmod('n',0,4)],
                  ['\\cos x',kmod('n',1,4)],
                 ['-\\sin x',kmod('n',2,4)],
                 ['-\\cos x',kmod('n',3,4)]])]),'','____'),
        ZLR('\\sin x____\\cos x____-\\sin x____-\\cos x____'+khrA(['\\cos '+lrp('','x + '+frac('nπ',2,''),'',''),
            piece([['\\cos x',kmod('n',0,4)],
                 ['-\\sin x',kmod('n',1,4)],
                 ['-\\cos x',kmod('n',2,4)],
                 [ '\\sin x',kmod('n',3,4)]])]),'','____'),
        ZLR('-\\ln \\cos x____\\tan x = '+frac('\\sin x','\\cos x','')+'____\\sec^2x ='+frac(1,'\\cos ^2x','')+'____2\\tan x⋅\\sec^2x____(三阶)~2\\sec^2x(\\sec^2x+2\\tan^2 x)','','____'),
        ZLR('\\ln \\sin x____\\cot x = '+frac('\\cos x','\\sin x','')+'____-\\csc^2x = -'+frac(1,'\\sin ^2x','')+'____-2\\cot x⋅\\csc^2x____(三阶)2\\csc^2x(\\sec^2x+2\\tan^2 x)','','____'),
        ZLR('\\ln (\\sec x+\\tan x)____'+khrA(['\\sec x = '+frac(1,'\\cos x',''),'注意：\\sec^2 x-\\tan^2 x=1'])+'____\\tan x⋅\\sec x = '+frac('\\sin x','\\cos ^2x','')+'____\\sec x(1+2\\tan^2 x)','','____'),
        ZLR('\\ln (\\csc x-\\cot x)____'+khrA(['\\csc x = '+frac(1,'\\sin x',''),'注意：\\csc^2 x-\\cot^2 x=1'])+'____-\\cot x⋅\\csc x = -'+frac('\\cos x','\\sin ^2x','')+'____\\csc x(1+2\\cot^2 x)','','____'),
        ZLR('x\\arcsin x+\\sqrt{1-x^2}____'+khrA(['\\arcsin x=π\\/2-\\text{sign}~x⋅(π\\/2-\\arcsin \\sqrt{1-x^2})','注意：\\arcsin x+\\arccos x=π\\/2'])+'____'+frac(1,kroot('1-x^2'),'')+'____x(1-x^2)^{-\\tfrac32}','','____'),
        ZLR('x\\arccos x-\\sqrt{1-x^2}____\\arccos x=\\text{sign}~x⋅\\arcsin \\sqrt{1-x^2}____-'+frac(1,kroot('1-x^2'),'')+'____-x(1-x^2)^{-\\tfrac32}','','____'),
        ZLR('x\\arctan x-{\\ln(1+x^2)}\\/2____'+khrA(['\\arctan x=\\arcsin '+frac('x','\\sqrt{1+x^2}',''),'注意：\\arctan x+'+kxf('arccot')+'~x=π\\/2'])+'____'+frac(1,'1+x^2','')+'____-2x(1+x^2)^{-2}','','____'),
        ZLR('x'+kxf('arccot')+'~x+{\\ln(1+x^2)}\\/2____'+kxf('arccot')+'~x=\\arccos '+frac('x','\\sqrt{1+x^2}','')+'____-'+frac(1,'1+x^2','')+'____2x(1+x^2)^{-2}','','____'),
        ZLR('x'+kxf('arcsec')+'~x±\\ch^{-1}x____'+kxf('arcsec')+'~x=\\arccos 1\\/x____'+frac(1,'x'+kroot('x^2-1'),''),'','____'),
        ZLR('x'+kxf('arccsc')+'~x±\\ch^{-1}x____'+kxf('arccsc')+'~x=\\arcsin 1\\/x____-'+frac(1,'x'+kroot('x^2-1'),''),'','____'),
        ZLR(frac('a^x','\\ln a','')+'____a^x____\\ln a⋅a^x____\\ln ^2a⋅a^x____'+'\\ln ^na⋅a^x','','____'),
        ZLR('e^x____e^x____e^x____e^x____e^x','','____'),
        ZLR(frac('x(\\ln x-1)','\\ln a','')+'____\\log_ax____'+frac(1,'x\\ln a','')+'____-'+frac(1,'\\ln a⋅x^2','')+'____(-1)^{n-1}(n-1)!'+frac(1,'\\ln a⋅x^n',''),'','____'),
        ZLR('x(\\ln x-1)____\\ln x____'+frac(1,'x','')+'____-'+frac(1,'x^2','')+'____(-1)^{n-1}(n-1)!'+frac(1,'x^n',''),'','____'),
        ZLR('\\ch x____\\sh x = '+frac('e^x - e^{-x}',2,'')+'____\\ch x____\\sh x____'+piece([['\\sh x',kmod('n',0,2)],['\\ch x',kmod('n',1,2)]]),'','____'),
        ZLR('\\sh x____'+khrA(['\\ch x = '+frac('e^x + e^{-x}',2,''),'注意：\\ch^2 x-\\sh^2 x=1'])+'____\\sh x____\\ch x____'+piece([['\\ch x',kmod('n',0,2)],['\\sh x',kmod('n',1,2)]]),'','____'),
        ZLR('\\ln \\ch x____\\th x = '+frac('\\sh x','\\ch x','')+'____'+kxf('sech')+'^2x____-2\\th x⋅'+kxf('sech')+'^2x____(三阶)-2'+kxf('sech')+'^2x('+kxf('sech')+'^2x-2\\th^2 x)','','____'),
        ZLR('\\ln \\sh x____\\cth x = '+frac('\\ch x','\\sh x','')+'____-'+kxf('csch')+'^2x____2\\cth x⋅'+kxf('csch')+'^2x____(三阶)-2'+kxf('csch')+'^2x('+kxf('csch')+'^2x+2\\cth^2 x)','','____'),
        ZLR('\\arcsin(\\th x)____'+kxf('sech')+'~x = '+frac(1,'\\ch x','')+'____-\\th x⋅'+kxf('sech')+'~x = -'+frac('\\sh x','\\ch^2x','')+'____-'+kxf('sech')+'x(1-2\\th^2 x)','','____'),
        ZLR('\\ln \\th{x}\\/2____'+kxf('csch')+'~x = '+frac(1,'\\sh x','')+'____-\\cth x⋅'+kxf('csch')+'~x = -'+frac('\\ch x','\\sh^2x','')+'____-'+kxf('csch')+'x(1-2\\cth^2 x)','','____'),
        ZLR('x\\sh^{-1}x-\\sqrt{x^2+1}____'+khrA(['\\sh^{-1}x','\\ln (x + '+kroot('x^2+1')+')'])+'____'+frac(1,kroot('x^2+1'),'')+'____'+'-x(x^2+1)^{-\\tfrac32}','','____'),
        ZLR('x\\ch^{-1}x-\\sqrt{x^2-1}____'+khrA(['\\ch^{-1}x','\\ln |x + '+kroot('x^2-1')+'|'])+'____'+frac(1,kroot('x^2-1'),'')+'____'+'-x(x^2-1)^{-\\tfrac32}','','____'),
        ZLR('x\\ch^{-1}x+{\\ln(1-x^2)}\\/2____'+khrA(['\\th^{-1}x',frac(1,2,'')+'\\ln '+frac('1+x','1-x','')])+'____'+frac(1,'1-x^2','')+'____'+frac('2x','(x^2-1)^2',''),'','____'),
        ZLR('x\\cth^{-1}x+{\\ln(x^2-1)}\\/2____'+khrA(['\\cth^{-1}x',frac(1,2,'')+'\\ln '+frac('1+x','x-1','')])+'____'+frac('x','x^2-1','')+'____-'+frac('x^2+1','(x^2-1)^2',''),'','____'),
        ZLR('____'+khrA([kxf('sech')+'^{-1}x','\\ln (1+'+kroot('1-x^2')+') - \\ln x'])+'____-'+frac(1,'x'+kroot('x^2+1'),''),'','____'),
        ZLR('____'+khrA([kxf('csch')+'^{-1}x','\\ln (1+'+kroot('1+x^2')+') - \\ln x'])+'____-'+frac(1,'x'+kroot('1-x^2'),''),'','____'),

        ZLR(khrA(['x\\/2\\sqrt{1-x^2}+'+frac('\\arcsin x','2',''),
            'x\\/2\\sqrt{1-x^2}-'+frac('\\arccos x','2',''),
            'x\\/2\\sqrt{a^2-x^2}+a^2'+frac('\\arcsin x\\/a','2','')+kbr2,
        ])+'____'+khrA(['\\sqrt{1-x^2}','\\sqrt{a^2-x^2}'])+'____'+
            khrA(['-'+frac('x','\\sqrt{1-x^2}',''),'-'+frac('x','\\sqrt{a^2-x^2}','')])+
            '____','','____'),
        ZLR('x\\/2\\sqrt{1+x^2}+'+frac('\\sh^{-1} x','2','')+'____\\sqrt{1+x^2}____'+frac('x','\\sqrt{1+x^2}','')+'____','','____'),
        ZLR('x\\/2\\sqrt{x^2-1}+'+frac('\\ch^{-1} x','2','')+'____\\sqrt{x^2-1}____'+frac('x','\\sqrt{x^2-1}','')+'____','','____'),
    
    ],'wiki TBrc').replace(/\n/g,br))+

    detail(gM('Power Indefinite Integral')+ksc('∫f^n'),Table([['f','f^n','∫f^n\\d x']],[
        
        ['\\cos x','\\cos^nx','n=2k+1，是奇数时'+Eq([intl('\\cos^nx','','','x',0,''),
            intl('\\cos^{n-1}x','','','~\\sin x',0,''),
            intl('(1-\\sin^2x)^k','','','~\\sin x',0,''),
            intl(zp(sum('i',0,'k','C_k^i(-\\sin^2x)^i',0,'')),'','','~\\sin x',0,''),
            intl(zp(sum('i',0,'k','C_k^i(-1)^i\\sin^{2i}x',0,'')),'','','~\\sin x',0,''),
            sum('i',0,'k',kfrac(['C_k^i(-1)^i\\sin^{2i+1}x','2i+1']),0,'')
        ])],
        ['\\sin x','\\sin^nx','n=2k+1，是奇数时'+Eq([intl('\\sin^nx','','','x',0,''),
            '-'+intl('\\cos^{n-1}x','','','~\\cos x',0,''),
            '-'+intl('(1-\\cos^2x)^k','','','~\\cos x',0,''),
            '-'+intl(zp(sum('i',0,'k','C_k^i(-\\cos^2x)^i',0,'')),'','','~\\cos x',0,''),
            '-'+intl(zp(sum('i',0,'k','C_k^i(-1)^i\\cos^{2i}x',0,'')),'','','~\\cos x',0,''),
            '-'+sum('i',0,'k',kfrac(['C_k^i(-1)^i\\cos^{2i+1}x','2i+1']),0,'')
        ])],

    ],'wiki TBrc').replace(/\n/g,br))+

    detail(gM('Implicit Function Derivative')+ksc('F=0'),Table([[gM('Function'),'1阶导数\'','2阶导数″','n阶导数^{(n)}']],[
        
        ['F(x,y)=0',khrA([difn('y','x','')+"=-\\frac{F_x}{F_y}",'\\d F=F_x\\d x+F_y\\d y=0']),difn('y','x','',2)+"=-\\frac{F_{xx}F_y-F_xF_{yx}}{F_y^2}",""],
        ['F(x,y,z)=0',piece([difn('z','x',1)+'=-\\frac{F_x}{F_z} =-'+difn('z','y',1)+difn('y','x',1),'注意，上式末端非链式法则（多了一个负号）',difn('z','y',1)+'=-\\frac{F_y}{F_z}','', difn('y','x',1)+'=-\\frac{F_x}{F_y}'])+kbr,"",""],
    
    ],'wiki TBrc').replace(/\n/g,br))+


    detail(gM('Derivative Application'),ksc([
        ['球体积4\\/3πr^3 ','球表面积4πr^2','球周长（8个卦限的球面三角形中心与三个顶点距离和）8πr'].join(eq('求导','→')),
        ['椭球体积4\\/3πabc','椭球表面积4\\/3π(ab+bc+ac)','椭球周长（8个卦限的球面三角形中心与三个顶点距离和）8\\/3π(a+b+c)'].join(eq('求偏导','→')),


        ['圆面积πr^2','圆周长2πr','圆周角2π'].join(eq('求导','→')),
        ['椭圆面积πab'+eq('求偏导','→','×修正系数（复杂）')+'椭圆周长（积分形式）','圆周角2π'].join(eq('求导','→')),

        ['正方体积a^3'+eq('求导','→','×2')+'正方体表面积6a^2','正方体（周长）总棱长12a'].join(eq('求导','→')),
        ['长方体积abc'+eq('求偏导','→','×2')+'长方体表面积2(ab+bc+ac)','长方体（周长）总棱长4(a+b+c)'].join(eq('求偏导','→')),

        ['棱柱体积S_底h'+eq('求导','→','×2')+'正方体表面积6a^2','正方体（周长）总棱长12a'].join(eq('求导','→')),
        ['棱锥体积1\\/3S_底h'+eq('求偏导','→','×2')+'长方体表面积2(ab+bc+ac)','长方体（周长）总棱长4(a+b+c)'].join(eq('求偏导','→')),
        ['棱台体积abc'+eq('求偏导','→','×2')+'长方体表面积2(ab+bc+ac)','长方体（周长）总棱长4(a+b+c)'].join(eq('求偏导','→')),

        ['圆柱体积πr^2h','圆柱侧面积2πrh，底面积πr^2'].join(eq('求偏导','→')),
        ['圆椎体积1\\/3πr^2h','圆椎侧面积πr\\sqrt{h^2+r^2}'].join(eq('','→')),

        ['圆台体积1\\/3π(R^2+Rr+r^2)h','圆台侧面积π(R+r)\\sqrt{h^2+(R-r)^2}'].join(eq('','→')),
    ]).join(br+br))



);