/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Geometry/Analytic Geometry']=Kx(
    detail(gM('Equation'),Table([gM(ZLR('Name Vector Parameter Determinant Other Application'))],[
        
        [brA(['直线','Straight Line']),hrA([`

            ['（向量式参数）\\\\b r=\\\\b {r_0}+t\\\\b {v}',
            '\\\\b r=\\\\b {r_1}+t(\\\\b {r_2}-\\\\b {r_1})'].join(kbr)
        `,`
            ['\\\\b r=\\\\{x,y,z\\\\}',
            '\\\\b {r_i}=\\\\{x_i,y_i,z_i\\\\}', 
            '方向向量\\\\b v=\\\\{X,Y,Z\\\\}',
            '方向数：X，Y，Z',
            '方向角：α，β，γ',
            ['方向余弦：','α，','β，','γ'].join('\\\\cos'),

            ].join(kbr)
        `],1),hrA([`
            '（点位式）'+kbr+piece(Arrf(function(x){return ['','=','_1+t(','_2-','_1)'].join(x)},ZLR('x y z')))


        `],1),hrA([`
            '（忽略行列式零行）'
        `,`
            '（两点式）'+kdet(MfS('x y z;x_1 y_1 z_1;x_2 y_2 z_2'))+'=0'
        `,`
            '（二维）'+kdet(MfS('x y 1;x_1 y_1 1;x_2 y_2 1'))+'=0'
        `],1),hrA([`
            '（忽略分母为0）'
        `,`
            '（一般式，两平面交线）'+kbr+piece(['A_1x+B_1y+C_1z+D_1=0','A_2x+B_2y+C_2z+D_2=0'])
        `,`
            '（一般式，二维）'+kbr+'Ax+By+C=0'

        `,`
            ['（射影式）',
                piece(['x=az+c','y=bz+d']),
                '其中'+piece(['a=X\\\\/Z','b=Y\\\\/Z','c=x_0-az_0','d=y_0-bz_0']),
            ].join(kbr)
        `,`
            '（对称式，点向式，标准式）'+kbr+'{x-x_0}\\\\/X = {y-y_0}\\\\/Y = {z-z_0}\\\\/Z '

        `,`
            '（斜截式，二维）y=kx+b'
        `,`
            '（截距式，二维）x\\\\/a+y\\\\/b=1'
        `,`
            ['（对称式，两点式）',
                [kfrac(['x-x_1','x_2-x_1']), kfrac(['y-y_1','y_2-y_1']), kfrac(['z-z_1','z_2-z_1'])].join('=')
            ].join(kbr)
        `,`
            '（两点式，二维，变体）'+kbr+'y-y_1=(x-x_1){y_2-y_1}\\\\/{x_2-x_1}'

        `],1),hrA([`

            ['点M_0(x_0,y_0,z_0)到直线','{x-x_1}\\\\/X = {y-y_1}\\\\/Y = {z-z_1}\\\\/Z 的距离',
            'd='+kfrac(['|\\\\b v × '+kxo('M_1M_0','→')+'|','|\\\\b v|']),
            '='+kfrac([zp(kdet([zlrA('\\\\b ',ZLR('i j k')),ZLR('x_0-x_1 y_0-y_1 z_0-z_1'),ZLR('X Y Z')]),'‖‖'),kroot('X^2+Y^2+Z^2')])
            ].join(kbr)
        `,`

            ['（直线与直线夹角θ）','\\\\cos θ = |\\\\cos (\\\\b {v_1},\\\\b {v_2})| =\\\\frac{|\\\\b {v_1}⋅\\\\b {v_2}|}{|\\\\b {v_1}||\\\\b {v_2}|}',
            '='+kfrac(['|X_1X_2+Y_1Y_2+Z_1Z_2|',kroot('X_1^2+Y_1^2+Z_1^2')+kroot('X_2^2+Y_2^2+Z_2^2')])
            ].join(kbr)
        `,`
 
            ['（两直线位置关系）', '{x-x_i}\\\\/{X_i} = {y-y_i}\\\\/{Y_i}= {z-z_i}\\\\/{Z_i}',
                'Δ='+kdet([ZLR('x_2-x_1 y_2-y_1 z_2-z_1'),ZLR('X_1 Y_1 Z_1'),ZLR('X_2 Y_2 Z_2')]),
                piece(['异面⇔Δ≠0',
                    '相交⇔Δ=0，X_1:Y_1:Z_1≠X_2:Y_2:Z_2',
                    '平行⇔'+piece(['X_1:Y_1:Z_1=X_2:Y_2:Z_2','≠(x_2-x_1):(y_2-y_1):(z_2-z_1)']),
                    '重合⇔'+piece(['X_1:Y_1:Z_1=X_2:Y_2:Z_2','=(x_2-x_1):(y_2-y_1):(z_2-z_1)']),
                    '垂直⇔X_1X_2+Y_1Y_2+Z_1Z_2=0'
                ])
            ].join(kbr)

        `,`
            ['两平行直线距离',
            'd='+kfrac(['|'+kxo('M_1M_2','→')+'×\\\\b {v}|','|\\\\b {v}|']),
     
            '='+kfrac([zp(kdet([zlrA('\\\\b ',ZLR('i j k')),ZLR('x_2-x_1 y_2-y_1 z_2-z_1'),ZLR('X Y Z')]),'‖‖'),kroot('X^2+Y^2+Z^2')])
            ].join(kbr)

        `,`
            ['两异面直线距离',
            'd='+kfrac(['|('+kxo('M_1M_2','→')+',\\\\b {v_1}, \\\\b {v_2})|','|\\\\b {v_1}×\\\\b {v_2}|']),
            '='+kfrac(['|'+kxo('M_1M_2','→')+'⋅(\\\\b {v_1} × \\\\b {v_2})|','|\\\\b {v_1}×\\\\b {v_2}|']),
            '='+kfrac([zp(kdet([ZLR('x_2-x_1 y_2-y_1 z_2-z_1'),ZLR('X_1 Y_1 Z_1'),ZLR('X_2 Y_2 Z_2')]),'||'), 
                zp(kdet([zlrA('\\\\b ',ZLR('i j k')),ZLR('X_1 Y_1 Z_1'),ZLR('X_2 Y_2 Z_2')]),'‖‖')]),
            '='+kfrac(['|Δ|', zp(kdet([zlrA('\\\\b ',ZLR('i j k')),ZLR('X_1 Y_1 Z_1'),ZLR('X_2 Y_2 Z_2')]),'‖‖')])
            ].join(kbr)

        `],1)
        ],
       


        
        [brA(['平面','Plane']),hrA([`
            ['（向量式参数，点位式）\\\\b r=\\\\b {r_0}+u\\\\b {a} +v \\\\b {b}',
            '（混合积） (\\\\b r-\\\\b {r_0},\\\\b {a},\\\\b {b})=0',
        

            ].join(kbr)
        `,`
            ['（三点式）'+kbr+'\\\\b r=\\\\b {r_1}+u(\\\\b {r_2}-\\\\b {r_1}) +v (\\\\b {r_3}-\\\\b {r_1})',
            '（混合积）'+kbr+'(\\\\b r-\\\\b {r_1},\\\\b {r_2}-\\\\b {r_1},\\\\b {r_3}-\\\\b {r_1})=0',
    
            ].join(kbr)

        `,`

            ['（点法式）\\\\b n⋅(\\\\b r-\\\\b {r_0})=0',
            
            ].join(kbr)

        `,`

            ['（向量式法式）\\\\b {n^0}⋅\\\\b {r}-p=0',
                '原点到平面距离p≥0',
                '离差δ=\\\\b {n^0}⋅\\\\b {r}-p',
                '|δ|=d（点到平面距离）'
            
            ].join(kbr)
            
        `,`
            ['\\\\b r=\\\\{x,y,z\\\\}',
            '\\\\b {r_i}=\\\\{x_i,y_i,z_i\\\\}', 
            '\\\\b {a}=\\\\{X_1,Y_1,Z_1\\\\}', 
            '\\\\b {b}=\\\\{X_2,Y_2,Z_2\\\\}', 
            '法向量\\\\b n=\\\\{A,B,C\\\\}',
            '单位法向量\\\\b {n^0}=\\\\{\\\\cos α,\\\\cos β,\\\\cos γ \\\\}',
            ].join(kbr)
        `],1),hrA([`
            '（点位式）'+kbr+piece(Arrf(function(x){return ['','=','_0'].join(x)+['+u','_1+v','_2'].join(x.toUpperCase())},ZLR('x y z')))
        `,`
            '（三点式）'+kbr+piece(Arrf(function(x){return ['','=','_1+u(','_2-','_1)+v(','_3-','_1)'].join(x)},ZLR('x y z')))
        `],1),hrA([`

            '（点位式）'+kbr+kdet(MfS('x-x_0 y-y_0 z-z_0;X_1 Y_1 Z_1;X_2 Y_2 Z_2'))+'=0'
        `,`
            '（三点式）'+kdet(MfS('x y z 1;x_1 y_1 z_1 1;x_2 y_2 z_2 1;x_3 y_3 z_3 1'))+'=0'+kbr+
            kdet(MfS('x-x_1 y-y_1 z-z_1;x_2-x_1 y_2-y_1 z_2-z_1;x_3-x_1 y_3-y_1 z_3-z_1'))+'=0'

        `],1),hrA([`

            '（一般式）'+kbr+'Ax+By+Cz+D=0'

        `,`

            '（点法式）'+kbr+'A(x-x_0)+B(y-y_0)+C(z-z_0)=0'

        `,`
            ['（坐标式法式）',
                'x\\\\cos α+y\\\\cos β+z\\\\cos γ=p',
                zlrA3('\\\\frac{',ZLR('Ax By Cz D'),'}{\\\\sqrt{A^2+B^2+C^2}}').join('+')+'=0'
            ].join(kbr)


        `,`

            '（斜截式）y=k_1x+k_2z+b'
        `,`
            '（截距式）x\\\\/a+y\\\\/b+z\\\\/c=1'
        `,`
            '（三点式）'

        `],1),hrA([`

            '点M_0(x_0,y_0,z_0)到平面的离差'+kbr+'δ=x_0\\\\cos α+y_0\\\\cos β+z_0\\\\cos γ-p'

        `,`
            ['点M_0(x_0,y_0,z_0)到平面的距离','也即过该点且与平面平行的直线到平面的距离',
            'd='+kfrac(['Ax_0+By_0+Cz_0+D',kroot('A^2+B^2+C^2')])+'=|δ|'
            ].join(kbr)


        `,`        
            ['（直线与平面关系）', piece(['直线：{x-x_0}\\\\/X = {y-y_0}\\\\/Y = {z-z_0}\\\\/Z', 'Ax+By+Cz+D=0']),
                piece(['相交⇔AX+BY+CZ≠0',
                    '平行⇔'+piece(['AX+BY+CZ=0','Ax_0+By_0+Cz_0+D≠0']),
                    '直线在平面上⇔'+piece(['AX+BY+CZ=0','Ax_0+By_0+Cz_0+D=0']),
                    '平行或直线在平面上⇔AX+BY+CZ=0',
                    '垂直⇔A\\\\/X = B\\\\/Y = C\\\\/Z ',
                ])
            ].join(kbr)

        `,`
            ['（直线与平面夹角θ）','\\\\sin θ =|\\\\cos (\\\\b v,\\\\b n)| = \\\\frac{|\\\\b v⋅\\\\b n|}{|\\\\b v||\\\\b n|}',

            '='+kfrac(['|AX+BY+CZ|',kroot('A^2+B^2+C^2')+kroot('X^2+Y^2+Z^2')])
            ].join(kbr)


       
        `,`
            ['（两平面位置关系）', piece([
                '两平面相交⇔A_1:B_1:C_1≠A_2:B_2:C_2',
                '两平面平行⇔'+[kfrac(['A_1','A_2']),kfrac(['B_1','B_2']),kfrac(['C_1','C_2'])].join('=')+'≠'+kfrac(['D_1','D_2']),
                '两平面平行或重合⇔'+[kfrac(['A_1','A_2']),kfrac(['B_1','B_2']),kfrac(['C_1','C_2'])].join('='),
                '两平面垂直⇔A_1A_2+B_1B_2+C_1C_2=0',
            ])
            ].join(kbr)
        `,`
            ['（两平面夹角θ）',
                '\\\\cos θ =|\\\\cos (\\\\b {n_1},\\\\b {n_2})| = \\\\dfrac{|\\\\b {n_1}⋅\\\\b {n_2}|}{|\\\\b {n_1}||\\\\b {n_2}|}',
                '='+kfrac(['A_1A_2+B_1B_2+C_1C_2',kroot('A_1^2+B_1^2+C_1^2')+kroot('A_2^2+B_2^2+C_2^2')])
            ].join(kbr)

        `,`
            '两平行平面的距离'+kbr+'d='+kfrac(['|D_1-D_2|',kroot('A^2+B^2+C^2')])
        `],1)

        

        ],


    ],'wiki TBrc')+
    
    
        
    detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[




    ],'TBrc'),1)
    )



);