/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Geometry/Analytic Geometry']=Kx(
    detail(gM('Equation'),Table([gM(ZLR('Name Vector Parameter Determinant Other Application'))],[
        
        [brA(['直线','Straight Line']),hrA([`

            '\\\\b r=\\\\b {r_0}+t(\\\\b {r_1} - \\\\b {r_0})'
        `,`
            '方向向量\\\\b s=\\\\{A,B,C\\\\}'
        `],1),hrA([`
            piece(Arrf(function(x){return ['','=','_1+t(','_2-','_1)'].join(x)},ZLR('x y z')))


        `],1),hrA([`
            '（忽略行列式零行）'
        `,`
            '（两点式）'+kdet(MfS('x y z;x_1 y_1 z_1;x_2 y_2 z_2'))+'=0'
        `,`
            '（二维）'+kdet(MfS('x y 1;x_1 y_1 1;x_2 y_2 1'))+'=0'
        `],1),hrA([`
            '（忽略分母为0）'
        `,`
            '（一般式）'+piece(['A_1x+B_1y+C_1z+D_1=0','A_2x+B_2y+C_2z+D_2=0'])+'（两平面交线）'
        `,`
            '（一般式,二维）Ax+By+C=0'
        `,`
            '（点向式、标准式）{x-x_0}\\\\/A = {y-y_0}\\\\/B = {z-z_0}\\\\/C '

        `,`
            '（斜截式,二维）y=kx+b'
        `,`
            '（截距式,二维）x\\\\/a+y\\\\/b=1'
        `,`
            '（两点式）{x-x_1}\\\\/{x_2-x_1}={y-y_1}\\\\/{y_2-y_1}={z-z_1}\\\\/{z_2-z_1}'
        `,`
            '（两点式,二维,变体）y-y_1=(x-x_1){y_2-y_1}\\\\/{x_2-x_1}'

        `],1),hrA([`
            '（直线与直线夹角θ）\\\\cos θ = |\\\\cos (\\\\b {s},\\\\b {s\\'})| =\\\\frac{|\\\\b {s}⋅\\\\b {s\\'}|}{|\\\\b {s}||\\\\b {s\\'}|}'
        `,`
            '（直线与平面夹角θ）\\\\sin θ =|\\\\cos (\\\\b s,\\\\b n)| = \\\\frac{|\\\\b s⋅\\\\b n|}{|\\\\b s||\\\\b n|}'



        `],1)
        ],
       


        
        [brA(['平面','Plane']),hrA([`
  
            '\\\\b r⋅\\\\b n=0'
        `,`
            '法向量\\\\b n=\\\\{A,B,C\\\\} '
        `],1),hrA([`
            ' '


        `],1),hrA([`
            '（三点式）'+kdet(MfS('x y z 1;x_1 y_1 z_1 1;x_2 y_2 z_2 1;x_3 y_3 z_3 1'))+'=0'

        `],1),hrA([`

            '（一般式）Ax+By+Cz+D=0'

        `,`
            '（斜截式）y=k_1x+k_2z+b'
        `,`
            '（截距式）x\\\\/a+y\\\\/b+z\\\\/c=1'
        `,`
            '（三点式）'

        `],1)
        ],


    ],'wiki TBrc')+
    
    
        
    detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[




    ],'TBrc'),1)
    )



);