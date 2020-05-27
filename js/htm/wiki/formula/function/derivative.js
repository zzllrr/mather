/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Derivative']=Kx(
    detail(gM('Indefinite Integral & Derivative')+ksc('∫f→f→f\''),Table([['∫f（省略常数项）','函数f','1阶导数f\'','2阶导数f″','n阶导数f^{(n)}']],[
        
        ZLR('a∫f ± b∫g____af ± bg____af\' ± bg\'____af″ ± bg″____af^{(n)} ± bg^{(n)}','','____'),
        ZLR(khrA([
            "f∫g-∫(f'∫g) "+kbr+"（分部积分）",

 

        ])+'____f⋅g____f\'g + fg\'____f″g + 2f\'g\'+ fg″____∑C_n^if^{(i)}g^{(n-i)}','','____'),

        ZLR('____f⋅g⋅h____f\'gh + fg\'h + fgh\'____(f″gh + fg″h + fgh″)\\\\+2(f\'g\'h+f\'gh\'+fg\'h\')____∑C_n^{i,j}f^{(i)}g^{(j)}h^{(n-i-j)}','','____'),
    
    
        ZLR('____'+kfrac(['f','g'])+'____'+khrA([kfrac(["f'g - fg'",'g^2']),
            frac('f\'','g','')+'-'+kfrac(['fg\'','g^2'])])+'____'+khrA([frac('f″g^2 - 2f\'g\'g + 2fg\'^2 - fg″g','g^3',''),
            frac('f″','g','')+'-'+kfrac(['2f\'g\'','g^2'])+kfrac(['2fg\'^2','g^3'])+'-'+kfrac(['fg″','g^2'])])+'____'+kbrA([frac('∑(-1)^{i+j}C_n^if^{(i)}g^{(j)}g^{(n-i-j)}','g^{n+1}',''),'（？猜测待验证）']),'','____'),
            
        ZLR('____'+kfrac(['1','g'])+'____-'+kfrac(['g\'','g^2'])+'____'+khrA([frac('2g\'^2 - g″g','g^3',''),frac('2g\'^2','g^3','')+'-'+kfrac(['g″','g^2'])]),'','____'),
        ZLR('____f^{-1}(x)____'+khrA([
            frac('1','f\'(y)','')+'其中y=f^{-1}(x)',
            frac('1','f\'(x)','')+'再将其中x，用f^{-1}(x)代替'])+'____'+'-'+frac('f\'(x)','f\'^2(x)',''),'','____'),
        ZLR('____f(g(x))____f\'(u)g\'(x)____f″(u)g\'^2(x) + f\'(u)g″(x)','','____'),
        ZLR('____u(x)^{v(x)}____'+Eq(['(e^{\\ln u^v})\'','(e^{v\\ln u})\'','u^v(v\\ln u)\'','u^v'+zp('v\'\\ln u + '+kfrac(['vu\'','u']))])+'____'+khrA([
            'u^v'+zp('(v\\ln u)\'^2 + (v\\ln u)″'),
            'u^v'+zp(zp('v\'\\ln u + '+kfrac(['vu\'','u']))+'^2 + v″\\ln u + '+frac('2v\'u\'+ vu″','u','')+'-'+kfrac(['vu\'^2','u^2'])),
            'u^v(t\'^2 + t″)'])+'____u^v∑','','____'),
        ZLR('____y____'+frac('y\'(t)','x\'(t)','')+'____'+khrA([frac('y″x\'- y\'x″','x\'^3',''),
            frac('y″','x\'^2','')+'-'+kfrac(['y\'x″','x\'^3'])]),'','____'),
        ZLR('ax____a____0____0____0','','____'),
        ZLR(kxA([frac('x^{a+1}','a+1',''),'其中a≠-1'])+'____x^a____ax^{a-1}____a(a-1)x^{a-2}____a(a-1)⋯(a-n+1)x^{a-n}','','____'),
        ZLR('-\\cos x____'+khrA(['\\sin x','注意：\\sin^2 x+\\cos^2 x=1'])+'____\\cos x____-\\sin x____'+khrA(['\\sin '+zp('x + '+kfrac(['nπ',2])),
            piece([['\\sin x',kmod('n',0,4)],
                  ['\\cos x',kmod('n',1,4)],
                 ['-\\sin x',kmod('n',2,4)],
                 ['-\\cos x',kmod('n',3,4)]])]),'','____'),
        ZLR('\\sin x____\\cos x____-\\sin x____-\\cos x____'+khrA(['\\cos '+zp('x + '+kfrac(['nπ',2])),
            piece([['\\cos x',kmod('n',0,4)],
                 ['-\\sin x',kmod('n',1,4)],
                 ['-\\cos x',kmod('n',2,4)],
                 [ '\\sin x',kmod('n',3,4)]])]),'','____'),
        ZLR('-\\ln \\cos x____'+khrA(['\\tan x',kfrac(['\\sin x','\\cos x'])])+'____'+khrA(['\\sec^2x',kfrac([1,'\\cos ^2x'])])+'____2\\tan x⋅\\sec^2x____(三阶)~2\\sec^2x(\\sec^2x+2\\tan^2 x)','','____'),
        ZLR('\\ln \\sin x____'+khrA(['\\cot x',kfrac(['\\cos x','\\sin x'])])+'____'+khrA(['-\\csc^2x','-'+kfrac([1,'\\sin ^2x'])])+'____-2\\cot x⋅\\csc^2x____(三阶)2\\csc^2x(\\sec^2x+2\\tan^2 x)','','____'),
        ZLR('\\ln (\\sec x+\\tan x)____'+khrA(['\\sec x',kfrac([1,'\\cos x']),'注意：\\sec^2 x-\\tan^2 x=1'])+'____'+khrA(['\\tan x⋅\\sec x',kfrac(['\\sin x','\\cos ^2x'])])+'____\\sec x(1+2\\tan^2 x)','','____'),
        ZLR('\\ln (\\csc x-\\cot x)____'+khrA(['\\csc x',kfrac([1,'\\sin x']),'注意：\\csc^2 x-\\cot^2 x=1'])+'____'+khrA(['-\\cot x⋅\\csc x','-'+kfrac(['\\cos x','\\sin ^2x'])])+'____\\csc x(1+2\\cot^2 x)','','____'),
        ZLR('x\\arcsin x+\\sqrt{1-x^2}____'+khrA(['\\arcsin x','π\\/2-\\sgn x⋅(π\\/2-\\arcsin \\sqrt{1-x^2})','注意：\\arcsin x+\\arccos x=π\\/2'])+'____'+frac(1,kroot('1-x^2'),'')+'____x(1-x^2)^{-\\tfrac32}____'+'(1-x^2)^{-1\\/2-n}P_{n-1}(x)','','____'),
        ZLR('x\\arccos x-\\sqrt{1-x^2}____'+khrA(['\\arccos x','\\sgn x⋅\\arcsin \\sqrt{1-x^2}'])+'____-'+frac(1,kroot('1-x^2'),'')+'____-x(1-x^2)^{-\\tfrac32}____'+'-(1-x^2)^{-1\\/2-n}P_{n-1}(x)','','____'),
        ZLR('x\\arctan x-{\\ln(1+x^2)}\\/2____'+khrA(['\\arctan x','\\arcsin '+frac('x','\\sqrt{1+x^2}',''),'注意：\\arctan x+\\arccot ~x=π\\/2'])+'____'+frac(1,'1+x^2','')+'____-2x(1+x^2)^{-2}____'+'-(1+x^2)^{-1\\/2-n}P_{n-1}(x)','','____'),
        ZLR('x\\arccot x+{\\ln(1+x^2)}\\/2____'+khrA(['\\arccot x','\\arccos '+frac('x','\\sqrt{1+x^2}','')])+'____-'+frac(1,'1+x^2','')+'____2x(1+x^2)^{-2}____'+'(1+x^2)^{-1\\/2-n}P_{n-1}(x)','','____'),
        ZLR('x\\arcsec x±\\ch^{-1}x____'+khrA(['\\arcsec x','\\arccos 1\\/x'])+'____'+frac(1,'|x|'+kroot('x^2-1'),''),'','____'),
        ZLR('x\\arccsc x±\\ch^{-1}x____'+khrA(['\\arccsc x','\\arcsin 1\\/x'])+'____-'+frac(1,'|x|'+kroot('x^2-1'),''),'','____'),
        ['','\\sinc x',kfrac(['\\cos x- \\sinc x','x']),''],


        ZLR(frac('a^x','\\ln a','')+'____a^x____\\ln a⋅a^x____\\ln ^2a⋅a^x____'+'\\ln ^na⋅a^x','','____'),
        ZLR('e^x____e^x____e^x____e^x____e^x','','____'),
        ZLR(frac('x(\\ln x-1)','\\ln a','')+'____\\log_ax____'+kfrac([1,'x\\ln a'])+'____-'+kfrac([1,'\\ln a⋅x^2'])+'____(-1)^{n-1}(n-1)!'+kfrac([1,'\\ln a⋅x^n']),'','____'),
        ZLR('x(\\ln x-1)____\\ln x____'+kfrac([1,'x'])+'____-'+kfrac([1,'x^2'])+'____(-1)^{n-1}(n-1)!'+kfrac([1,'x^n']),'','____'),
        ZLR('\\ch x____'+khrA(['\\sh x',kfrac(['e^x - e^{-x}',2]),'-i\\sin ix'])+'____\\ch x____\\sh x____'+piece([['\\sh x',kmod('n',0,2)],['\\ch x',kmod('n',1,2)]]),'','____'),
        ZLR('\\sh x____'+khrA(['\\ch x',kfrac(['e^x + e^{-x}',2]),'\\cos ix','注意：\\ch^2 x-\\sh^2 x=1'])+'____\\sh x____\\ch x____'+piece([['\\ch x',kmod('n',0,2)],['\\sh x',kmod('n',1,2)]]),'','____'),
        ZLR('\\ln \\ch x____'+khrA(['\\th x',kfrac(['\\sh x','\\ch x']),'-i\\tan ix'])+'____\\sech ^2x____-2\\th x⋅\\sech ^2x____(三阶)-2\\sech ^2x(\\sech ^2x-2\\th^2 x)','','____'),
        ZLR('\\ln \\sh x____'+khrA(['\\cth x',kfrac(['\\ch x','\\sh x']),'i\\cot ix'])+'____-\\csch ^2x____2\\cth x⋅\\csch ^2x____(三阶)-2\\csch ^2x(\\csch ^2x+2\\cth^2 x)','','____'),
        ZLR(khrA(['\\arcsin(\\th x)',
            '\\arctan(\\sh x)'])+'____'+khrA(['\\sech x',kfrac([1,'\\ch x']),'\\sec ix'])+'____'+khrA(['-\\th x⋅\\sech x','-'+kfrac(['\\sh x','\\ch^2x'])])+'____-\\sech x(1-2\\th^2 x)','','____'),
        ZLR(khrA(['\\ln \\th{x}\\/2',
            '\\ln | \\csch x - \\cth x |',
            ])+'____'+khrA(['\\csch x',kfrac([1,'\\sh x']),'i\\csc ix'])+'____'+khrA(['-\\cth x⋅\\csch x','-'+kfrac(['\\ch x','\\sh^2x'])])+'____-\\csch x(1-2\\cth^2 x)','','____'),
        ZLR('x\\sh^{-1}x-\\sqrt{x^2+1}____'+khrA(['\\sh^{-1}x',
            '\\ln (x + '+kroot('x^2+1')+')',
            '\\csch^{-1} 1\\/x',
            '\\sgn x⋅\\ch^{-1}'+kroot('x^2+1'),
            '\\th^{-1} '+kfrac(['x','\\sqrt{1+x^2}']),
        ])+'____'+frac(1,kroot('x^2+1'),'')+'____'+'-x(x^2+1)^{-\\tfrac32}','','____'),
        ZLR('x\\ch^{-1}x-\\sqrt{x^2-1}____'+khrA(['\\ch^{-1}x',
            '\\ln |x + '+kroot('x^2-1')+'|',
            '\\sech^{-1} 1\\/x',
            '\\sh^{-1} \\sqrt{x^2-1} ~(x≥1)',

        ])+'____'+frac(1,kroot('x^2-1'),'')+'____'+'-x(x^2-1)^{-\\tfrac32}','','____'),
        ZLR('x\\ch^{-1}x+{\\ln(1-x^2)}\\/2____'+khrA(['\\th^{-1}x',
            '1\\/2\\ln '+kfrac(['1+x','1-x']),
            '\\cth^{-1} 1\\/x',

        ])+'____'+kfrac([1,'1-x^2'])+'____'+kfrac(['2x','(x^2-1)^2']),'','____'),
        ZLR('x\\cth^{-1}x+{\\ln(x^2-1)}\\/2____'+khrA(['\\cth^{-1}x',
            '1\\/2\\ln '+kfrac(['x+1','x-1']),
            '\\th^{-1} 1\\/x',

        ])+'____'+kfrac([1,'x^2-1'])+'____-'+kfrac(['2x','(x^2-1)^2']),'','____'),
        ZLR('____'+khrA([kxf('sech')+'^{-1}x', 
                '\\ln'+zp('1\\/x+\\sqrt{1\\/{x^2}-1}'),
                '\\ln'+zp(kfrac(['1+\\sqrt{1-x^2}','x'])),
                '\\ln (1+'+kroot('1-x^2')+') - \\ln x',
                '\\ch^{-1}1\\/x'
            ])+'____-'+frac(1,'x'+kroot('1-x^2'),''),'','____'),
        ZLR('____'+khrA([kxf('csch')+'^{-1}x',
                '\\ln'+zp('1\\/x+\\sqrt{1\\/{x^2}+1}'),
                '\\ln'+zp(kfrac(['1+\\sqrt{1+x^2}⋅\\sgn x','x'])),
                '\\ln |1+'+kroot('1+x^2')+'⋅\\sgn x| - \\ln |x|',
                '\\sh^{-1}1\\/x'
            ])+'____-'+frac(1,'|x|'+kroot('x^2+1'),''),'','____'),

        ZLR(khrA(['x\\/2\\sqrt{1-x^2}+'+kfrac(['\\arcsin x','2']),
            'x\\/2\\sqrt{1-x^2}-'+kfrac(['\\arccos x','2']),
            'x\\/2\\sqrt{a^2-x^2}+a^2'+kfrac(['\\arcsin x\\/a','2'])+kbr2,
        ])+'____'+khrA(['\\sqrt{1-x^2}','\\sqrt{a^2-x^2}'])+'____'+
            khrA(['-'+kfrac(['x','\\sqrt{1-x^2}']),'-'+kfrac(['x','\\sqrt{a^2-x^2}'])])+
            '____','','____'),
        ZLR('x\\/2\\sqrt{1+x^2}+'+kfrac(['\\sh^{-1} x','2'])+'____\\sqrt{1+x^2}____'+kfrac(['x','\\sqrt{1+x^2}'])+'____','','____'),
        ZLR('x\\/2\\sqrt{x^2-1}+'+kfrac(['\\ch^{-1} x','2'])+'____\\sqrt{x^2-1}____'+kfrac(['x','\\sqrt{x^2-1}'])+'____','','____'),


        [khrA([kfrac(['e^{ax}(a\\cos bx + b\\sin bx)','a^2+b^2']), 
                
                 '\\frac{e^{ax}}{\\sqrt{A+B}}\\cos(bx-t)',
                 '\\frac{(a+ib)^{-1}e^{(a+ib)x}+(a-ib)^{-1}e^{(a-ib)x}}2',
                 '其中A=a^2，B=b^2'
            ]), 
            khrA(['e^{ax}\\cos bx', '利用\\cos x = \\frac{e^{ix}+e^{-ix}}2~得到', 'e^{(a+ib)x}-ie^{ax}\\sin bx', '\\frac{e^{(a+ib)x}+e^{(a-ib)x}}2']),
            khrA(['e^{ax}(a\\cos bx -b\\sin bx)','\\sqrt{A+B}e^{ax}\\cos(bx+t)', '\\frac{(a+ib)e^{(a+ib)x}+(a-ib)e^{(a-ib)x}}2']), 
            khrA(['e^{ax}((a^2-b^2)\\cos bx -2ab\\sin bx)', '(A+B)e^{ax}\\cos(bx+2t)','\\frac{(a+ib)^2e^{(a+ib)x}+(a-ib)^2e^{(a-ib)x}}2' ]),
            khrA(['\\frac{e^{ax}}{2}(((a+ib)^n+(a-ib)^n)\\cos bx'+kbr+'+i((a+ib)^n-(a-ib)^n)\\sin bx)', '(A+B)^{n\\/2}e^{ax}\\cos(bx+nt)', '\\frac{(a+ib)^ne^{(a+ib)x}+(a-ib)^ne^{(a-ib)x}}2' ])
        ],
    
        [khrA([kfrac(['e^{ax}(a\\sin bx - b\\cos bx)','a^2+b^2']), 
                
                 '\\frac{e^{ax}}{\\sqrt{A+B}}\\sin(bx-t)',
                 '\\frac{(a+ib)^{-1}e^{(a+ib)x}-(a-ib)^{-1}e^{(a-ib)x}}{2i}',
                 '其中'+
                piece(['\\cos t=\\frac{a}{\\sqrt{a^2+b^2}}=a\\/{\\sqrt{A+B}}','\\sin t =\\frac{b}{\\sqrt{a^2+b^2}}=b\\/{\\sqrt{A+B}}'])
            ]), 
            khrA(['e^{ax}\\sin bx', '利用\\sin x = \\frac{e^{ix}-e^{-ix}}{2i}得到', '-i(e^{(a+ib)x}-e^{ax}\\cos bx)', '\\frac{e^{(a+ib)x}-e^{(a-ib)x}}{2i}']),
            khrA(['e^{ax}(a\\sin bx +b\\cos bx)','\\sqrt{A+B}e^{ax}\\sin(bx+t)', '\\frac{(a+ib)e^{(a+ib)x}-(a-ib)e^{(a-ib)x}}{2i}']), 
            khrA(['e^{ax}(2ab\\cos bx +(a^2-b^2)\\sin bx)', '(A+B)e^{ax}\\sin(bx+2t)','\\frac{(a+ib)^2e^{(a+ib)x}-(a-ib)^2e^{(a-ib)x}}{2i}' ]),
            khrA(['\\frac{e^{ax}}{2i}(((a+ib)^n-(a-ib)^n)\\cos bx'+kbr+'+i((a+ib)^n+(a-ib)^n)\\sin bx)', '(A+B)^{n\\/2}e^{ax}\\sin(bx+nt)', '\\frac{(a+ib)^ne^{(a+ib)x}-(a-ib)^ne^{(a-ib)x}}{2i}' ])
        ],



        [khrA(['?'
            ]), 
            khrA(['e^{ax}\\cos^m bx', '利用\\cos^m x = 得到']),
            khrA(['e^{ax}\\cos^{m-1} bx(a\\cos bx -mb\\sin bx)','\\sqrt{A+mB}e^{ax}\\cos^{m-1} bx\\cos(bx+t)']), 
            khrA(['?' ]),
            khrA(['?' ])
        ],
    
        [khrA(['?'
            ]), 
            khrA(['e^{ax}\\sin^m bx', '利用\\sin^m x = 得到']),
            khrA(['e^{ax}\\sin^{m-1} bx(a\\sin bx +mb\\cos bx)','\\sqrt{A+mB}e^{ax}\\sin^{m-1} bx\\sin(bx+t)']), 
            khrA(['?' ]),
            khrA(['?' ])
        ],




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