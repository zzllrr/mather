/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Difference']=Kx(
    detail(gM('Indefinite Difference')+ksc('Δf=f(x+1)-f(x)'),Table([['Δ^{-1}f（省略常数项）','函数f',
            "1阶差分"+kbr+"Δf=f(x+1)-f(x)≝f'-f"+kbr+'易验证'+
                piece(["Δ,'都是线性算子",
                    "Δ(f')=(Δf)'",
                    "Δ(f″)=(Δf)″",
                    "Δ(f^{(n)})=(Δf)^{(n)}",
                    "Δ^n(f')=(Δ^nf)'",
                    "Δ^m(f^{(n)})=(Δ^mf)^{(n)} 算子交换率、结合律",

                ]),
            '2阶差分'+kbr+Eq([['Δ^2f','Δ(Δf(x))'],'Δf(x+1)-Δf(x)',"Δf'-Δf",'f(x+2)-2f(x+1)+f(x)',"f″-2f'+f"])+kbr+"注意：Δ(f″)=f‴-f″≠(Δ^2f)'",
            ['n阶差分','Δ^nf=(f-1)^{(n)}牛二展开','f^{(n)}≝f(x+n)','f\'≝f(x+1)','f″≝f(x+2)'].join(kbr)]],[
        
        ZLR('aΔ^{-1}f ± bΔ^{-1}g____af ± bg____aΔf ± bΔg____aΔ^2f ± bΔ^2g____aΔ^nf ± bΔ^ng','','____'),
        ZLR(khrA([
            "Δ^{-1}fΔ^{-1}g-Δ^{-1}(gΔ^{-1}f+fΔ^{-1}g)",
            "Δ^{-1}fΔ^{-1}g-Δ^{-1}(gΔ^{-1}f)-Δ^{-1}(fΔ^{-1}g)",
            "fΔ^{-1}g-Δ^{-1}((g+Δ^{-1}g)Δf)",
            "fΔ^{-1}g-Δ^{-1}(gΔf)-Δ^{-1}(ΔfΔ^{-1}g)"
        ])+'____f⋅g____'+
            khrA(["f'g'-fg","g'Δf + fΔg=gΔf + f'Δg","ΔfΔg+fΔg+gΔf"])+'____'+
            khrA(["f''g''-2f'g'+fg",["Δ^2fΔ^2g","+2(ΔfΔ^2g+ΔgΔ^2f+ΔfΔg)","+fΔ^2g+gΔ^2f"].join(kbr)])+'____-','','____'),
        ZLR(khrA([])+'____f⋅g⋅h____'+khrA([
                "f'g'h'-fgh",
                    ["ΔfΔgΔh","+hΔfΔg+gΔfΔh+fΔgΔh","+fhΔg+fgΔh+ghΔf"].join(kbr)])+'____'+khrA([
                "f″g″h″-2f'g'h'+fgh",
                    

                ])+'____','','____'),
    
    
        ZLR('____'+kfrac(['f','g'])+'____'+khrA([kfrac(["f'","g'"])+'-'+kfrac(['f','g'])+'='+kfrac(["f'g-fg'","gg'"]),
                kfrac(['gΔf - fΔg',"gg'"])+'='+kfrac(['Δf',"g'"])+'-'+kfrac(['fΔg',"gg'"]),
                kfrac(['gΔf - fΔg',"g(Δg+g)"])
            ])+'____'+khrA([
                kfrac(["f″","g″"])+'-2'+kfrac(["f'","g'"])+'+'+kfrac(['f','g'])
            ])+'____'+kbrA([]),'','____'),
            
        ZLR('____'+kfrac(['1','g'])+'____'+khrA(["1\\/{g'}-1\\/g",
                '-'+kfrac(['Δg',"gg'"])+'=-'+kfrac(['Δg',"g(Δg+g)"]),
                kfrac(['1',"Δg+g"])+'-'+kfrac(['1',"g"]),
            ])+'____'+khrA([
                "1\\/{g″}-2\\/{g'}+1\\/g", 
            ]),'','____'),
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
        ZLR(kxA([frac('x^{a+1}','a+1',''),'其中a≠-1'])+'____x^a____(x+1)^a-x^a____(x+2)^a-2(x+1)^a+x^a____','','____'),
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
        ZLR('x\\arcsin x+\\sqrt{1-x^2}____'+khrA(['\\arcsin x','π\\/2-\\sgn x⋅(π\\/2-\\arcsin \\sqrt{1-x^2})','注意：\\arcsin x+\\arccos x=π\\/2'])+'____'+frac(1,kroot('1-x^2'),'')+'____x(1-x^2)^{-\\tfrac32}','','____'),
        ZLR('x\\arccos x-\\sqrt{1-x^2}____'+khrA(['\\arccos x','\\sgn x⋅\\arcsin \\sqrt{1-x^2}'])+'____-'+frac(1,kroot('1-x^2'),'')+'____-x(1-x^2)^{-\\tfrac32}','','____'),
        ZLR('x\\arctan x-{\\ln(1+x^2)}\\/2____'+khrA(['\\arctan x','\\arcsin '+frac('x','\\sqrt{1+x^2}',''),'注意：\\arctan x+\\arccot ~x=π\\/2'])+'____'+frac(1,'1+x^2','')+'____-2x(1+x^2)^{-2}','','____'),
        ZLR('x\\arccot x+{\\ln(1+x^2)}\\/2____'+khrA(['\\arccot x','\\arccos '+frac('x','\\sqrt{1+x^2}','')])+'____-'+frac(1,'1+x^2','')+'____2x(1+x^2)^{-2}','','____'),
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
            '\\sgn x⋅ch^{-1}'+kroot('x^2+1'),
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
    
    ],'wiki TBrc').replace(/\n/g,br))+


    detail(gM('Difference Application'),ksc([

    ]).join(br+br))



);