/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Trigonometric']=Kx(

    detail(gM('Geometry'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        [['三角形三边a,b,c，相应对角A,B,C',
            '半周长s={a+b+c}\\/2',
            Eq(['面积S = \\sqrt{s(s-a)(s-b)(s-c)}~'+kxf(pp(gM('Heron Formula'))),
                '1\\/4\\sqrt{(a+b+c)(b+c-a)(a+c-b)(a+b-c)}',
                '1\\/4\\sqrt{2(a^2b^2+a^2c^2+b^2c^2)-(a^4+b^4+c^4)}',
                '1\\/4\\sqrt{(a^2+b^2+c^2)^2-2(a^4+b^4+c^4)}',
                '1\\/4\\sqrt{4(a^2b^2+a^2c^2+b^2c^2)-(a^2+b^2+c^2)^2}',
                '1\\/2\\sqrt{a^2c^2-\\(\\frac{a^2+c^2-b^2}{2}\\)^2}~（九章算术）',
                '1\\/4\\sqrt{4a^2b^2-(a^2+b^2-c^2)^2}',
                '1\\/4\\sqrt{(2ab-(a^2+b^2-c^2))(2ab+(a^2+b^2-c^2))}',
                '1\\/4\\sqrt{(c^2-(a-b)^2)((a+b)^2-c^2)}',
                '{abc}\\/{2D}',
                '{abc}\\/{4R}',
                'D^2 \\sqrt{x(x-\\sin A)(x-\\sin B)(x-\\sin C)}（其中x={\\sin A+\\sin B+\\sin C}\\/2）',

                '4\\/3 \\sqrt{y(y-m_a)(y-m_b)(y-m_c)}（其中y={m_a+m_b+m_c}\\/2）各边上的中线长之和的一半',

                kfrac([1,'4 \\sqrt{z(z-h_a^{-1})(z-h_b^{-1})(z-h_c^{-1})}'])+'（其中z={h_a^{-1}+h_b^{-1}+h_c^{-1}}\\/2）各边上的高线长倒数之和的一半',

                ]),
            '外径R：外接圆半径，外接圆直径D=2R',
            'a\\/{\\sin A} = b\\/{\\sin B} = c\\/{\\sin C} '+'（正弦定理）',
            '= 2R = {abc}\\/{2S} = D',
            'c^2=a^2+b^2-2ab\\cos C'+'（余弦定理）',   


        ].join(kbr)],
    
    ],'wiki TBrc').replace(/\n/g,br))+

    detail(gM('Period'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        
    
    ],'wiki TBrc').replace(/\n/g,br))+


    detail(gM('Inverse Function'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        
        ['\\sin(\\arccos x)=\\cos(\\arcsin x)=\\sqrt{1-x^2}', ''],
        ['',''],

        ['\\sin(\\arctan x)='+kfrac(['x','\\sqrt{1+x^2}']), ''],

        ['\\cos(\\arctan x)='+kfrac(['1','\\sqrt{1+x^2}']), ''],

        ['\\tan(\\arccos x)=\\cot(\\arcsin x)='+kfrac(['\\sqrt{1-x^2}','x']), ''],
        
        ['\\tan(\\arcsin x)=\\cot(\\arccos x)='+kfrac(['x','\\sqrt{1-x^2}']), ''],




    ],'wiki TBrc').replace(/\n/g,br))+

    detail(gM('Square.1'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        ['\\sin^2x+\\cos^2x=1','\\ch^2 x-\\sh^2 x=1'],

        ['\\sec^2 x-\\tan^2 x=1','\\sech^2 x+\\th^2 x=1',''],

        ['\\csc^2 x-\\cot^2 x=1','\\cth^2 x-\\csch^2 x=1'],


        ['\\sec^2 x+\\csc^2 x=\\sec^2 x\\csc^2 x','',''],


    ],'wiki TBrc').replace(/\n/g,br))+


    detail('变量和差',Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        ['\\sin(x±y)=\\sin x\\cos y±\\cos x\\sin y', '\\sh(x±y)=\\sh x\\ch y±\\ch x\\sh y'],
        ['\\cos(x±y)=\\cos x\\cos y∓\\sin x\\sin y', '\\ch(x±y)=\\ch x\\ch y±\\sh x\\sh y'],
        ['\\tan(x±y)={\\tan x±\\tan y}\\/{1∓\\tan x\\tan y}', '\\th(x±y)={\\th x±\\th y}\\/{1±\\th x\\th y}'],
        ['',''],
        ['\\cot(x+y)={\\cot x\\cot y-1}\\/{\\cot x+ \\cot y}'],
        ['\\cot(x-y)=-{\\cot x\\cot y+1}\\/{\\cot x- \\cot y}'],
        ['\\sec(x±y)={\\sec x\\sec y}\\/{1∓\\tan x\\tan y}={\\csc x\\csc y}\\/{\\cot x\\cot y∓1}={\\sec x\\sec y\\csc x\\csc y}\\/{\\csc x\\csc y∓\\sec x\\sec y}'],
        ['\\csc(x±y)={\\csc x\\csc y}\\/{ \\cot x±\\cot y}={\\sec x\\sec y}\\/{\\tan x+\\tan y }={\\sec x\\sec y\\csc x\\csc y}\\/{\\sec x\\csc y±\\csc x\\sec y}'],


        [['f(a,x)={x\\cos a-\\sin a}\\/{x\\sin a+\\cos a}',
            'f(a,f(b,x))=f(b,f(a,x))=f(a+b,x)={x\\cos(a+b)-\\sin(a+b)}\\/{x\\sin(a+b)+\\cos(a+b)}'].join(kbr)],
    ],'wiki TBrc').replace(/\n/g,br))+


    detail('和差化积',Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        ['\\sin x± \\sin y=2\\sin {x±y}\\/2\\cos {x∓y}\\/2'],
        ['',''],
        ['\\cos x+ \\cos y=2\\cos {x+y}\\/2\\cos {x-y}\\/2'],
        ['\\cos x- \\cos y=-2\\sin {x+y}\\/2\\sin {x-y}\\/2'],

        ['\\tan x± \\tan y=\\tan (x±y)(1∓\\tan x\\tan y)= {\\sin (x±y)}\\/{\\cos x\\cos y}'],
        ['',''],
        ['\\cot x+ \\cot y={\\cot x\\cot y-1}\\/{\\cot (x+y)}= {\\sin (x+y)}\\/{\\sin x\\sin y}'],
        ['\\cot x- \\cot y=-{\\cot x\\cot y+1}\\/{\\cot (x-y)}= -{\\sin (x-y)}\\/{\\sin x\\sin y}'],

        ['\\tan x+ \\cot y={\\tan x\\cot y-1}\\/{\\tan (x-y)}= {\\cos (x-y)}\\/{\\cos x\\sin y}'],
        ['\\tan x- \\cot y=-{\\tan x\\cot y+1}\\/{\\tan (x+y)}= -{\\cos (x+y)}\\/{\\cos x\\sin y}'],

        ['',''],


        ['\\arcsin x± \\arcsin y=2\\arcsin\\(x\\sqrt{1-y^2} ±y\\sqrt{1-x^2}\\)'],
        ['',''],
        ['\\arccos x± \\arccos y=2\\arccos\\(xy∓\\sqrt{(1-x^2)(1-y^2)}\\)'],
        ['',''],

        ['\\arctan x± \\arctan y=\\arctan \\({x±y}\\/{1∓xy}\\)'],
        ['',''],
        ['\\arccot x+ \\arccot y=\\arccot \\({xy-1}\\/{x+y}\\)'],
        ['\\arccot x- \\arccot y=-\\arccot \\({xy+1}\\/{x-y}\\)'],



    ],'wiki TBrc').replace(/\n/g,br))+

    detail('积化和差',Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[

        ['2\\cos x\\cos y=\\cos(x+y)+\\cos(x-y)', ''],
        ['2\\cos x\\sin y=\\sin(x+y)-\\sin(x-y)', ''],
        ['2\\sin x\\sin y=\\cos(x-y)-\\cos(x+y)', ''],
        ['\\tan x\\tan y=1-{\\tan x+\\tan y}\\/{\\tan(x+y)}={\\tan x-\\tan y}\\/{\\tan(x-y)}-1'+kbr+'='+kfrac(['\\cos(x-y)-\\cos(x+y)', '\\cos(x+y)+\\cos(x-y)']), ''],
        ['',''],

        ['\\arctan 1\\/x = \\arctan 1\\/{x+y} +  \\arctan y\\/{x^2+xy+1}',''],

    ],'wiki TBrc').replace(/\n/g,br))+


    
    detail('倍角半角',Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        ['\\sin2x = 2\\sin x\\cos x = '+kfrac(['2\\tan x','1+\\tan ^2 x']), ''],
        ['\\cos2x = 2\\cos^2 x-1 =1-2\\sin^2 x=\\cos^2 x- \\sin^2 x = '+kfrac(['1-\\tan^2 x','1+\\tan ^2 x']), ''],

        ['\\tan2x = '+kfrac(['2\\tan x','1-\\tan ^2 x']),''],
        ['\\cot2x = '+kfrac(['\\cot ^2 x-1', '2\\cot x']),''],

        ['\\sec2x = '+kfrac(['\\sec^2 x','2-\\sec ^2 x']),''],
        ['\\csc2x = {\\sec x\\csc x}\\/2 ',''],

        [''],


        ['\\sin3x = 3\\sin x-4\\sin^3 x = 4\\sin x \\sin\\(π\\/3+x\\) \\sin\\(π\\/3-x\\)', ''],
        ['\\cos3x = 4\\cos^3 x-3\\cos x = 4\\cos x \\cos\\(π\\/3+x\\) \\cos\\(π\\/3-x\\)', ''],

        ['\\tan3x = {3\\tan x-\\tan^3 x}\\/{1-3\\tan^2 x} = \\tan x \\tan\\(π\\/3+x\\) \\tan\\(π\\/3-x\\)', ''],

        ['\\cot3x = {3\\cot x-\\cot^3 x}\\/{1-3\\cot^2 x} ',''],


        
        ['\\sec3x = {\\sec^3 x}\\/{4-3\\sec^2 x} ',''],

        
        ['\\csc3x = {\\csc^3 x}\\/{3\\csc^2 x-4} ',''],



        ['\\sin nx='+sum('','奇数k','','(-1)^{\\frac{k-1}2}C_n^k\\cos^{n-k}x\\sin^kx',0,''), ''],
        ['\\cos nx='+sum('','偶数k','','(-1)^{\\frac k 2}C_n^k\\cos^{n-k}x\\sin^kx',0,''), ''],
        ['\\tan nx='+kfrac([sum('','奇数k','','(-1)^{\\frac{k-1}2}C_n^k\\tan^kx',0,''),sum('','偶数k','','(-1)^{\\frac k 2}C_n^k\\tan^kx',0,'')]), ''],

        ['\\sin (2^kx) = 2^k \\sin x'+prod('i','0','k-1','\\cos(2^ix)',0,'')],

        [prod('k',1,'n-1','\\sin {kπ}\\/n',0,'')+'=\\frac{n}{2^{n-1}}'],
        [prod('k',1,'n-1','\\cos {kπ}\\/n',0,'')+'=\\frac{\\sin \\frac{πn}2}{2^{n-1}}'],
        [prod('k',1,'n-1','\\tan {kπ}\\/n',0,'')+'=\\frac{n}{\\sin \\frac{πn}2}'],
        [prod('k',1,'m','\\tan {kπ}\\/{2m+1}',0,'')+'=\\sqrt{2m+1}'],
        [prod('k',1,'m','\\sin {(2k-1))π}\\/{4m}',0,'')+'+'+prod('k',1,'m','\\cos {(2k-1))π}\\/{4m}',0,'')+'={√2}\\/{2^n}'],
        [''],

        ['\\sin^2 x\\/2 = {1-\\cos x}\\/2'],

        ['\\cos^2 x\\/2 = {1+\\cos x}\\/2'],

        ['\\tan x\\/2 = \\csc x - \\cot x={\\sin x}\\/{1+\\cos x} = {1-\\cos x}\\/{\\sin x} = {\\tan x}\\/{1+\\sec x} = 1\\/{\\csc x+\\cot x} = {\\sec x-1}\\/{\\tan x}'],

        ['\\cot x\\/2 = \\csc x + \\cot x={\\sin x}\\/{1-\\cos x} = {1+\\cos x}\\/{\\sin x} = {\\tan x}\\/{\\sec x-1} = 1\\/{\\csc x-\\cot x} = {\\sec x+1}\\/{\\tan x}'],

        ['\\tan {x+y}\\/2 = {\\sin x + \\sin y}\\/{\\cos x+\\cos y}'],

        ['\\tan \\(x\\/2±π\\/4\\) = \\sec x ± \\tan x = 1\\/{\\sec x ∓ \\tan x} = {1±\\sin x}\\/{\\cos x} = {\\cos x}\\/{1∓\\sin x} =  {\\csc x±1}\\/{\\cot x} = {\\cot x}\\/{\\csc x∓1}'],


        ['\\sqrt{\\frac{1-\\sin x}{1+\\sin x}} = \\left| '+kfrac(['1-\\tan x\\/2','1+\\tan x\\/2'])+' \\right|', ''],

        ['\\sqrt{\\frac{1-\\cos x}{1+\\cos x}} = \\left| \\tan x\\/2 \\right|', ''],


        ['\\cos x\\/2\\cos x\\/4\\cos x\\/8⋯='+prod('n',1,'+','\\cos x\\/{2^n}',0,'')+'={\\sin x}\\/x=\\sinc x '+kxf(pp('Viète '+gM('Infinite Product')))],

        ['\\cos x+\\cos 2x+\\cos 3x+⋯+\\cos nx='+sum('i',1,'n','\\cos nx',0,'')+'=-1\\/2+{\\sin\\(n+\\frac12\\) x}\\/{2\\sin \\frac x2} '],
        ['\\sin x+\\sin 2x+\\sin 3x+⋯+\\sin nx='+sum('i',1,'n','\\sin nx',0,'')+'=1\\/2\\cot x\\/2-{\\cos\\(n+\\frac12\\) x}\\/{2\\sin \\frac x2} '+kxf(pp(gM('Lagrange Trigonometric identity')))],
        ['1+2\\cos x+2\\cos 2x+2\\cos 3x+⋯+2\\cos nx=1+2'+sum('i',1,'n','\\cos nx',0,'')+'={\\sin\\(n+\\frac12\\) x}\\/{2\\sin \\frac x2} '+kxf(pp(gM('Dirichlet Kernel')))],

        ['\\sin x+\\sin (x+t)+\\sin (x+2t)+⋯+\\sin (x+nt)='+sum('i',0,'n','\\sin (x+nt)',0,'')+'='+kfrac(['\\sin {(n+1)t}\\/2 \\sin \\(x+{nt}\\/2\\)','2\\sin \\frac x2'])],
        ['\\cos x+\\cos (x+t)+\\cos (x+2t)+⋯+\\cos (x+nt)='+sum('i',0,'n','\\cos (x+nt)',0,'')+'='+kfrac(['\\sin {(n+1)t}\\/2 \\cos \\(x+{nt}\\/2\\)','2\\sin \\frac x2'])],



    ],'wiki TBrc').replace(/\n/g,br))+


    detail('万能公式',Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[

        ['\\sin x='+kfrac(['2\\tan x\\/2','1+\\tan^2 x\\/2']), '\\sh x='+kfrac(['2\\th x\\/2','1-\\th^2 x\\/2'])],

        ['\\cos x='+kfrac(['1-\\tan^2 x\\/2','1+\\tan^2 x\\/2']), '\\ch x='+kfrac(['1+\\th^2 x\\/2','1-\\th^2 x\\/2'])],

        ['\\tan x='+kfrac(['2\\tan x\\/2','1-\\tan^2 x\\/2']), '\\th x='+kfrac(['2\\th x\\/2','1+\\th^2 x\\/2'])],

        ['\\cot x='+kfrac(['1-\\tan^2 x\\/2','2\\tan x\\/2']), '\\cth x='+kfrac(['1+\\th^2 x\\/2','2\\th x\\/2'])],

        ['\\sec x='+kfrac(['1+\\tan^2 x\\/2','1-\\tan^2 x\\/2']), '\\sech x='+kfrac(['1-\\th^2 x\\/2','1+\\th^2 x\\/2']),],

        ['\\csc x='+kfrac(['1+\\tan^2 x\\/2','2\\tan x\\/2']), '\\csch x='+kfrac(['1-\\th^2 x\\/2','2\\th x\\/2'])],




        ['\\cis x = e^{ix} = '+kfrac(['1+i\\tan x\\/2','1-i\\tan x\\/2']), 'e^x = '+kfrac(['1+\\th x\\/2','1-\\th x\\/2'])],

        
        ['', '\\th^{-1} x=1\\/2 \\ln'+kfrac(['1+\\th x\\/2','1-\\th x\\/2'])],

        [['x_i=\\tan θ_i', kxf(gM('Elementary Symmetric Polynomial'))+'~e_i='+sum('','\\{s_j\\}：从{1,2,⋯,n}取i个子元素','',prod('j','s_1','s_i','\\tan θ_j',0,''),0,''),
            '\\tan Σθ_i = {e_1-e_3+e_5-⋯}\\/{e_0-e_2+e_4-⋯}',
            '\\cot Σθ_i = {e_0-e_2+e_4-⋯}\\/{e_1-e_3+e_5-⋯}',
            '\\sec Σθ_i = {Π\\sec θ_i}\\/{e_0-e_2+e_4-⋯}',
            '\\csc Σθ_i = {Π\\sec θ_i}\\/{e_1-e_3+e_5-⋯}',

            '\\tan(θ_1+θ_2)={e_1}\\/{e_0-e_2}={x_1+x_2}\\/{1-x_1x_2}={\\tan θ_1+\\tan θ_2}\\/{1-\\tan θ_1\\tan θ_2}',
            '\\tan(θ_1+θ_2+θ_3)={e_1-e_3}\\/{e_0-e_2}={(x_1+x_2+x_3)-x_1x_2x_3}\\/{1-(x_1x_2+x_1x_3+x_1x_3)}',
            '\\tan(θ_1+θ_2+θ_3+θ_4)={e_1-e_3}\\/{e_0-e_2+e_4}',
                '={(x_1+x_2+x_3+x_4)-(x_1x_2x_3+x_1x_2x_4+x_1x_3x_4+x_2x_3x_4)}\\/{1-(x_1x_2+x_1x_3+x_1x_4+x_2x_3+x_2x_4+x_3x_4)+x_1x_2x_3x_4}',


            ].join(kbr)],
    
    ],'wiki TBrc').replace(/\n/g,br))+



    detail(gM('Power'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[

        ['\\sin^2 x = {1-\\cos 2x}\\/2', ''],
        ['\\cos^2 x = {1+\\cos 2x}\\/2', ''],


        ['\\sin^3 x = {3\\sin x-\\sin 3x}\\/4', ''],
        ['\\cos^3 x = {3\\cos x+\\cos 3x}\\/4', ''],


        ['\\sin^4 x = {3-4\\cos 2x+\\cos 4x}\\/8', ''],
        ['\\cos^4 x = {3+4\\cos 2x+\\cos 4x}\\/8', ''],


        ['\\sin^5 x = {10\\sin x-5\\sin 3x +\\sin 5x}\\/{16}', ''],
        ['\\cos^5 x = {10\\cos x+5\\cos 3x +\\cos 5x}\\/{16}', ''],


        ['\\sin ^{2m} x= '+kfrac(['C_{2m}^m','2^{2m}'])+'+'+kfrac([1,'2^{2m}'])+sum('k',0,'m','(-1)^{m-k}C_{2m}^k\\sin (2m-2)x',0,'')],

        ['\\cos ^{2m} x= '+kfrac(['C_{2m}^m','2^{2m}'])+'+'+kfrac([1,'2^{2m-1}'])+sum('k',0,'m-1','C_{2m}^k\\cos (2m-2k)x',0,'')],

        ['\\sin ^{2m+1} x= '+kfrac([1,'2^{2m}'])+sum('k',0,'m','(-1)^{m-k}C_{2m+1}^k\\sin (2m-2k+1)x',0,'')],

        ['\\cos ^{2m+1} x= '+kfrac([1,'2^{2m}'])+sum('k',0,'m','C_{2m+1}^k\\cos (2m-2k+1)x',0,'')],



        [],

        ['\\sin^2x \\cos^2 x = {1-\\cos 4x}\\/8', ''],

        ['\\sin^3x \\cos^3 x = {3\\sin 2x-\\sin 6x}\\/{32}', ''],


        ['\\sin^4x \\cos^4 x = {3-4\\cos 4x+\\cos 8x}\\/{128}', ''],

        ['\\sin^5x \\cos^5 x = {10\\sin 2x-5\\sin 6x+\\sin 10x}\\/{512}', ''],



    ],'wiki TBrc').replace(/\n/g,br))+


    detail(ksc('x+y+z=π'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[

        ['\\tan x + \\tan y + \\tan z = \\tan x \\tan y \\tan z'],
        ['\\cot x\\/2 + \\cot y\\/2 + \\cot z\\/2 = \\cot x\\/2 \\cot y\\/2 \\cot z\\/2'],

        ['\\cot x\\cot y + \\cot y\\cot z + \\cot z\\cot x = 1'],
        ['\\tan x\\/2\\tan y\\/2 + \\tan y\\/2\\tan z\\/2 + \\tan z\\/2\\tan x\\/2 = 1'],


        ['\\sin x + \\sin y + \\sin z = 4\\cos x\\/2 \\cos y\\/2 \\cos z\\/2',''],
        ['\\cos x + \\cos y + \\cos z = 4\\sin x\\/2 \\sin y\\/2 \\sin z\\/2 + 1',''],

        ['-\\sin x + \\sin y + \\sin z = 4\\cos x\\/2 \\sin y\\/2 \\sin z\\/2',''],
        ['-\\cos x + \\cos y + \\cos z = 4\\sin x\\/2 \\cos y\\/2 \\cos z\\/2 - 1',''],


        ['\\sin 2x + \\sin 2y + \\sin 2z = 4\\sin x \\sin y \\sin z',''],
        ['\\cos 2x + \\cos 2y + \\cos 2z =-4\\cos x \\cos y \\cos z - 1',''],

        ['-\\sin 2x + \\sin 2y + \\sin 2z = 4\\sin x \\cos y \\cos z',''],
        ['-\\cos 2x + \\cos 2y + \\cos 2z =-4\\cos x \\sin y \\sin z + 1',''],


        ['\\sin^2x + \\sin^2y + \\sin^2z = 2\\cos x \\cos y \\cos z + 2',''],
        ['\\cos^2x + \\cos^2y + \\cos^2z =-2\\cos x \\cos y \\cos z + 1',''],

        ['-\\sin^2x + \\sin^2y + \\sin^2z = 2\\cos x \\sin y \\sin z',''],
        ['-\\cos^2x + \\cos^2y + \\cos^2z =-2\\cos x \\sin y \\sin z + 1',''],


        ['-\\sin^2x + \\sin^2y + \\sin^2z = -2\\cos 2x \\sin 2y \\sin 2z',''],
        ['-\\cos^2x + \\cos^2y + \\cos^2z = 2\\cos x \\sin y \\sin z + 1',''],


        ['\\sin^2x\\/2 + \\sin^2y\\/2 + \\sin^2z\\/2 + 2\\sin x\\/2 \\sin y\\/2 \\sin z\\/2 = 1',''],



    ],'wiki TBrc').replace(/\n/g,br))+

    detail(gM('Identity'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        ['\\arctan 1\\/2 = \\arctan 1\\/3 +  \\arctan 1\\/7 '],
        ['\\cos 20° \\cos 40° \\cos 80° = \\sin 10° \\sin 50° \\sin 70° = 1\\/8'],
        ['\\sin 20° \\sin 40° \\sin 80° = \\cos 10° \\cos 50° \\cos 70° = {√3}\\/8'],
        ['\\sin 15° \\sin 45° \\sin 75° = \\cos 15° \\cos 45° \\cos 75° = {√2}\\/8'],
        ['\\sin 15° \\sin 75° = \\cos 15° \\cos 75° = 1\\/4'],

        [['\\tan 50° \\tan 60° \\tan 70° = \\tan 80°','=\\cot 10° = \\cot 20° \\cot 30° \\cot 40°'].join(kbr), ''],
        [['\\cot 50° \\cot 60° \\cot 70° = \\cot 80°','=\\tan 10° = \\tan 20° \\tan 30° \\tan 40°'].join(kbr), ''],

        [Eq(['\\cos 24° + \\cos 48° + \\cos 96° + \\cos 168° ',
            '\\cos 24° + \\cos 48° - \\sin 6° - \\cos 12°',
            ' 1\\/2'])],
        ['\\sin^2 18° + \\sin^2 30° = \\sin^2 36°'+kxf(pp(gM('Euclid')))],
        [],

        [Arrf(function(x,i){return '\\cos'+zp(x+'⋅'+kfrac(['2π',21]))+(i==2?kbr:'')},[1,2,4,5,8,10]).join('+')+kbr+'=1\\/2', ''],

        [Eq(['π\\/4 = \\arctan 1\\/2 + \\arctan 1\\/3',
            '2\\arctan 1\\/3 + \\arctan 1\\/7',
            '4\\arctan 1\\/5 - \\arctan 1\\/{239}'+kxf(pp(gM('Machin'))),
            '5\\arctan 1\\/7 + 2\\arctan 3\\/{79}'+kxf(pp(gM('Euler'))),

        ]), ''],

        [Eq(['π\\/2 = \\arctan a\\/b + \\arctan c\\/d + \\arctan {bd-ac}\\/{ad+bc} ~(其中a,b,c,d>0)',
        ]), ''],

        [Eq(['π = \\arctan 1 + \\arctan 2 + \\arctan 3',
            '\\arccos 4\\/5 + \\arccos 5\\/{13} + \\arccos {16}\\/{65} ',
            '\\arcsin 3\\/5 + \\arcsin {12}\\/{13} + \\arcsin {63}\\/{65} ',
        ]), ''],


        ['\\cis x = e^{ix} = \\cos x + i\\sin x'+kxf(pp('Euler Formula'))],
        ['e^{πi}+1=0'+kxf(pp('Euler Identity'))],



        ['\\arcsin x+\\arccos x=π\\/2',''],

        ['\\arctan x+\\arccot x=π\\/2',''],

        ['\\arctan x+\\arctan 1\\/x=π\\/2\\sgn x',''],


    ],'wiki TBrc').replace(/\n/g,br))+

    detail(gM('Infinite Product'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        ['\\sin x=x'+prod('n',1,'+',zp('1-'+kfrac(['x^2','π^2n^2'])),'',''), '\\sh x=x'+prod('n',1,'+',zp('1+'+kfrac(['x^2','π^2n^2'])),'','')],
        ['\\cos x='+prod('n',1,'+',zp('1-'+kfrac(['x^2','π^2\\(n-1\\/2\\)^2'])),'',''), '\\ch x='+prod('n',1,'+',zp('1+'+kfrac(['x^2','π^2\\(n-1\\/2\\)^2'])),'','')],


        ['\\sinc x = {\\sin x}\\/x = '+prod('n',1,'+','\\cos x\\/{2^n}','',''), ''],

        ['\\sinc πx = {\\sin πx}\\/{πx} = '+prod('n',1,'+',zp('1-{x^2}\\/{n^2}'),'','')+ ' = 1\\/{Γ(1+x)Γ(1-x)}', ''],

        ['', ''],
    
    ],'wiki TBrc').replace(/\n/g,br))+



    detail(gM('Series Expansion'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        ['\\sin x = '+sum('n',0,'+',kfrac(['(-1)^nx^{2n+1}','(2n+1)!']),'',''), ''],

        ['\\sin x = '+sum('n',0,'+',kfrac(['(-1)^nx^{2n}','(2n)!']),'',''), ''],


        ['\\sinc x = {\\sin x}\\/x = '+sum('n',0,'+',kfrac(['(-1)^nx^{2n}','(2n+1)!']),'',''), ''],

        ['\\sinc πx = {\\sin πx}\\/{πx} = '+sum('n',0,'+',kfrac(['(-1)^nπ^{2n}x^{2n}','(2n+1)!']),'',''), ''],

        ['', ''],
    
    ],'wiki TBrc').replace(/\n/g,br))+

    detail(gM('Infinite Sum'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[

        [sum('n',1,'+','\\sinc n','','')+'='+sum('n',1,'+','\\sinc^2 n','','')+'={π-1}\\/2'],
        [sum('n',1,'+','(-1)^{n+1}\\sinc n','','')+'='+sum('n',1,'+','(-1)^{n+1}\\sinc^2 n','','')+'='+sum('n',1,'+','(-1)^{n+1}\\sinc^3 n','','')+'=1\\/2'],

        ['\\cos (t\\sin x) = J_0(t) + 2'+sum('n',1,'+','J_{2n}(t)\\cos(2nx)','','')+'（其中J_i是'+kxf('Bessel')+'函数）', ''],
        ['\\sin (t\\sin x) = 2'+sum('n',0,'+','J_{2n+1}(t)\\sin(2n+1)x','',''), ''],

        ['\\cos (t\\cos x) = J_0(t) + 2'+sum('n',1,'+','(-1)^nJ_{2n}(t)\\cos(2nx)','',''), ''],
        ['\\sin (t\\cos x) = 2'+sum('n',0,'+','(-1)^nJ_{2n+1}(t)\\sin(2n+1)x','',''), ''],



    ],'wiki TBrc').replace(/\n/g,br))+

    
    detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[

        [enwiki('Trigonometry'),''],
        [enwiki("Heron's_formula"),''],
        [enwiki("List_of_trigonometric_identities"),''],
        [enwiki("Trigonometric_integral"),''],
        [enwiki("Hyperbolic_functions"),''],


    ],'TBrc'),1)

);