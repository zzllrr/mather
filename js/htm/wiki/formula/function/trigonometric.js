/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Trigonometric']=Kx(
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

    detail(gM('Constant'),Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[      

        ['\\arcsin x+\\arccos x=π\\/2',''],

        ['\\arctan x+\\arccot x=π\\/2',''],

        ['\\arctan x+\\arctan 1\\/x=π\\/2\\sgn x',''],


    
    ],'wiki TBrc').replace(/\n/g,br))+

    detail('变量和差',Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        ['\\sin(x±y)=\\sin x\\cos y±\\cos x\\sin y', '\\sh(x±y)=\\sh x\\ch y±\\ch x\\sh y'],
        ['\\cos(x±y)=\\cos x\\cos y∓\\sin x\\sin y', '\\ch(x±y)=\\ch x\\ch y±\\sh x\\sh y'],
        ['\\tan(x±y)={\\tan x±\\tan y}\\/{1∓\\tan x\\tan y}', '\\th(x±y)={\\th x±\\th y}\\/{1±\\th x\\th y}'],
        ['',''],
        ['\\cot(x+y)={\\cot x\\cot y-1}\\/{\\cot x+ \\cot y}'],
        ['\\cot(x-y)=-{\\cot x\\cot y+1}\\/{\\cot x- \\cot y}'],
        ['\\sec(x±y)={\\sec x\\sec y}\\/{1∓\\tan x\\tan y}={\\sec x\\sec y\\csc x\\csc y}\\/{\\csc x\\csc y∓\\sec x\\sec y}'],
        ['\\csc(x±y)={\\csc x\\csc y}\\/{\\cot x±\\cot y}={\\sec x\\sec y\\csc x\\csc y}\\/{\\sec x\\csc y±\\csc x\\sec y}'],


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
        ['\\tan x\\tan y=1-{\\tan x+\\tan y}\\/{\\tan(x+y)}={\\tan x-\\tan y}\\/{\\tan(x-y)}-1='+kfrac(['\\cos(x-y)-\\cos(x+y)', '\\cos(x+y)+\\cos(x-y)']), ''],
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


        [''],

        ['\\sin^2 x\\/2 = {1-\\cos x}\\/2'],

        ['\\cos^2 x\\/2 = {1+\\cos x}\\/2'],

        ['\\tan x\\/2 = \\csc x - \\cot x={\\sin x}\\/{1+\\cos x} = {1-\\cos x}\\/{\\sin x} = {\\tan x}\\/{1+\\sec x}'],

        ['\\cot x\\/2 = \\csc x + \\cot x={\\sin x}\\/{1-\\cos x} = {1+\\cos x}\\/{\\sin x} = {1+\\sec x}\\/{\\tan x}'],




    ],'wiki TBrc').replace(/\n/g,br))+


    detail('万能公式',Table([gM(['Trigonometric','Hyperbolic','Integral Trigonometric','Integral Hyperbolic','Ellipse Function','Ellipse Integral'])],[
        
    
    ],'wiki TBrc').replace(/\n/g,br))

);