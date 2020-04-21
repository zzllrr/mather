/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Integral']=Kx(
    detail(gM('Integral Formula'),Table([gM(ZLR('Name Content Condition Application'))],[
        
        ['\\text{Newton-Leibniz}',khrA([
            intl('f\'(x)','a','b','x',0,'')+'=f(b)-f(a)',
            'F(b)-F(a)='+intl('F\'(x)','a','b','x',0,'')
        ]),'',''
        ],
        ['\\text{Green}',khrA([
            iint(zp(difn('F','x',1)+'+'+difn('G','y',1)),'D','','x,y',2,1)+'='+oint(['F','-G'],'L','','y;x',1,1),
            oint(['P','+Q'],'L','','x;y',1,1)+'='+iint(zp(difn('Q','x',1)+'-'+difn('P','y',1)),'D','','x,y',2,1)+
            '='+iint('\\small '+kdet([[difn('','x',1),difn('','y',1)],ZLR('P Q')]),'D','','x,y',2,1),
        ]),'',
        Eq(['求区域面积~ S',
            iint('','D','','x,y',2,1),
            iint('x','∂D','','y',1,1),
            '-'+iint('y','∂D','','x',1,1),
            '1\\/2'+iint(['x','-y'],'∂D','','y;x',1,1)]),
        ],

        ['\\text{Gauss}',khrA([
            iint(zp(difn('P','x',1)+'+'+difn('Q','y',1)+'+'+difn('R','z',1)),'Ω','','x,y,z',3,1)+'='+oint(['P','+Q','+R'],'∂Ω','','y,z;z,x;x,y',2,1),
            oint(['P','+Q','+R'],'∂Ω','','y,z;z,x;x,y',2,1)+'='+iint(zp(difn('P','x',1)+'+'+difn('Q','y',1)+'+'+difn('R','z',1)),'Ω','','x,y,z',3,1),

        ]),'',
        Eq(['求区域体积~ V',
            iint('','Ω','','x,y,z',3,1),
            oint('x','∂Ω','','y,z',2,1),
            oint('y','∂Ω','','z,x',2,1),
            oint('z','∂Ω','','x,y',2,1),
            '1\\/3'+oint(['x','+y','+z'],'∂Ω','','y,z;z,x;x,y',2,1)])
        ],
      
        ['\\text{Stokes}',khrA([
            Eq([oint(['P','+Q','+R'],'∂Σ','','x;y;z',1,1),
                iint(pp(difn('R','y',1)+'-'+difn('Q','z',1)),'Σ','','y,z',2,1)+'+'+iint(pp(difn('P','z',1)+'-'+difn('R','x',1)),'Σ','','z,x',2,1)+'+'+iint(pp(difn('Q','x',1)+'-'+difn('P','y',1)),'Σ','','x,y',2,1),
                iint(zp(pp(difn('R','y',1)+'-'+difn('Q','z',1))+'\\cos α+'+pp(difn('P','z',1)+'-'+difn('R','x',1))+'\\cos β+'+pp(difn('Q','x',1)+'-'+difn('P','y',1))+'\\cos γ','[]'),'Σ','','S',2,1),
                '\\iint\\limits_{Σ}\\small '+kdet([['\\d y\\d z','\\d z\\d x','\\d x\\d y'],[difn('','x',1),difn('','y',1),difn('','z',1)],ZLR('P Q R')])
                +'='+iint('\\small '+kdet([['\\cos α','\\cos β','\\cos γ'],[difn('','x',1),difn('','y',1),difn('','z',1)],ZLR('P Q R')]),'Σ','','S',2,1),
            ]),

            iint('ω','∂M','',' ',1,1)+'='+iint('','M','','ω',1,1)+'(\\text{上述各种公式的统称})'
        ]),'',

        ],

        ['重积分化累次积分\nFubini定理\nCavalieri原理',khrA([
            iint('f(x,y)','[a,~b]×[y_1(x),~y_2(x)]','','x,y',2,1)+'='+
            intl('','a','b','x',0,'')+intl('f(x,y)','y_1(x)','y_2(x)','y',0,''),

            iint('f(x,y)','[x_1(y),~x_2(y)]×[c,~d]','','x,y',2,1)+'='+
            intl('','c','d','y',0,'')+intl('f(x,y)','x_1(y)','x_2(y)','x',0,''),

            iint('f(x)g(y)','[a,~b]×[c,~d]','','x,y',2,1)+
            '='+intl('f(x)','a','b','x',0,'')+'⋅'+intl('g(y)','c','d','y',0,''),

            Eq([iint('f(x,y,z)','Ω=[a,~b]×[y_1(x),~y_2(x)]×[z_1(x,y),~z_2(x,y)]','','x,y,z',3,1),
                iint('','Ω_{xy}','','x,y',2,1)+intl('f(x,y,z)','z_1(x,y)','z_2(x,y)','z',0,''),
                intl('','a','b','x',0,'')+intl('','y_1(x)','y_2(x)','y',0,'')+intl('f(x,y,z)','z_1(x,y)','z_2(x,y)','z',0,'')
            ]),


        ]),'',''
        ],

        
        ['重积分变量代换',khrA([
            iint('f(x,y)','T(D)','','x,y',2,1)+'='+iint('f(x(u,v),~y(u,v))'+zp(difn('(x,y)','(u,v)',1),'|'),'D','','u,v',2,1),
            [
                iint('f(\\red x)','D','', '\\red x',1,1)+'='+iint('f(\\red x(\\red u))|\\det \\red x\'(\\red u)|','D\'','','\\red u',1,1),
                '推广到高维的向量形式，其中雅可比行列式\\det \\red x\'(\\red u)='+difn('(x_1,⋯,x_n)','(u_1,⋯,u_n)',1)
            ].join(kbr),


        ]),'',khrA([
            '极坐标变换'+piece(['x=r\\cosθ','y=r\\sinθ'])+
                kbr+'其中r≥0，θ∈[0,2π]'+
                kbr+difn('(x,y)','(r,θ)',1)+'=r',
            '广义极坐标变换'+piece(['x=ar\\cosθ','y=br\\sinθ'])+
                kbr+'其中r≥0，θ∈[0,2π]'+
                kbr+difn('(x,y)','(r,θ)',1)+'=abr',

            '柱面坐标变换'+piece(['x=r\\cosθ','y=r\\sinθ','z=z'])+
                kbr+'其中r≥0，θ∈[0,2π]'+
                kbr+difn('(x,y,z)','(r,θ,z)',1)+'=r',
            '球面坐标变换'+piece(['x=r\\sinφ\\cosθ','y=r\\sinφ\\sinθ','z=r\\cosφ'])+
                kbr+'其中r≥0，φ∈[0,π]，θ∈[0,2π]'+
                kbr+difn('(x,y,z)','(r,φ,θ)',1)+'=r^2\\sinφ',
            '广义球面坐标变换'+piece(['x=ar\\sinφ\\cosθ','y=br\\sinφ\\sinθ','z=cr\\cosφ'])+
                kbr+'其中r≥0，φ∈[0,π]，θ∈[0,2π]'+
                kbr+difn('(x,y,z)','(r,φ,θ)',1)+'=abcr^2\\sinφ',

            '高维球面坐标变换'+'x_i=r\\cosφ_i'+prod('k',1,'i-1','\\sinφ_k',0,'')+
                kbr+'其中r≥0，'+piece(['φ_n=0','φ_{n-1}∈[0,2π]','φ_1,⋯,φ_{n-2}∈[0,π]'])+
                kbr+difn('(x_1,⋯,x_n)','(φ_1,⋯,φ_n)',1)+'=r^{n-1}'+prod('k',1,'n-2','\\sin^{n-1-k}φ_k',0,''),
        ])
        ],

    
        ['第一类曲线积分',khrA([
            '（线性）'+iint('(af+bg)','L','','s',1,1)+'=a'+iint('f','L','','s',1,1)+'+b'+iint('g','L','','s',1,1),
            '（路径可加性）'+iint('f','L','','s',1,1)+'='+iint('f','L_1','','s',1,1)+'+'+iint('f','L_2','','s',1,1),
            iint('f(x,y,z)','L','','s',1,1)+'='+intl('f(x(t),y(t),z(t))'+kroot('(x\'^2(t)+y\'^2(t)+z\'^2(t)'),'a','b','t',0,''),
            '（平面上）'+iint('f(x,y)',['L：y=y(x)','a≤x≤b'],'','s',1,1)+'='+intl('f(x,y(x))'+kroot('(1+y\'^2(x)'),'a','b','x',0,'')
            ,


        ]),'',khrA([
            ['（曲线弧长）L：x=x(t), y=y(t), z=z(t),','a≤t≤b',
                's='+iint('','L','','s',1,1)+'='+intl(kroot('(x\'^2(t)+y\'^2(t)+z\'^2(t)'),'a','b','t',0,'')
            ].join(kbr)
        ])
        ],

    
        ['第一类曲面积分',khrA([

            [iint('f(x,y,z)','Σ','','S',2,1)+'='+iint('f(x(u,v),y(u,v),z(u,v))'+kroot('EG-F^2'),'D','','u,v',2,1),
                '\\text{其中Gauss系数}，',
                piece(['E=\\b r_u^2=x_u^2+y_u^2+z_u^2',
                'F=\\b r_u⋅\\b r_v=x_ux_v+y_uy_v+z_uz_v',
                'G=\\b r_v^2=x_v^2+y_v^2+z_v^2']),
                '\\b r_u=x_u\\b i+y_u\\b j+z_u\\b k',
                '\\b r_v=x_v\\b i+y_v\\b j+z_v\\b k',
                'EG-F^2='+zp('\\b r_u×\\b r_v','‖‖')+'^2='+zp(difn('(y,z)','(u,v)',1))+'^2+'+zp(difn('(z,x)','(u,v)',1))+'^2+'+zp(difn('(x,y)','(u,v)',1))+'^2'
            ].join(kbr)
            
            ,


        ]),'',khrA([
            ['（曲面面积）Σ',
                'S='+iint('','D','','S',2,1)+'='+iint(kroot('EG-F^2'),'D','','u,v',2,1)
            ].join(kbr),

            ['（曲面面积）Σ：z=f(x,y)',
                'S='+iint(kroot('1+f_x^2(x,y)+f_y^2(x,y)'),'D','','x,y',2,1)
            ].join(kbr),

            ['（曲面面积）Σ：H(x,y,z)=0',
                Eq([['S',
                    iint(kroot('1+f_x^2+f_y^2'),'D','','x,y',2,1)],
                    iint(kroot('1+'+zp('-'+kfrac(['H_x','H_z']))+'^2+'+zp('-'+kfrac(['H_y','H_z']))+'^2'),'D','','x,y',2,1),
                    iint(kfrac([zp('\\text{grad} H','‖‖'),'|H_z|']),'D','','x,y',2,1),
                ])
            ].join(kbr),
        ])
        ],

        ['第二类曲线积分',khrA([
            '（方向性）'+iint('\\b f⋅\\b τ','L','','s',1,1)+'=-'+iint('\\b f⋅\\b τ','-L','','s',1,1),
            '（线性）'+iint('(a\\b f+b\\b g)⋅\\b τ','L','','s',1,1)+'=a'+iint('\\b f⋅\\b τ','L','','s',1,1)+'+b'+iint('\\b g⋅\\b τ','L','','s',1,1),
            '（路径可加性）'+iint('\\b f⋅\\b τ','L','','s',1,1)+'='+iint('\\b f⋅\\b τ','L_1','','s',1,1)+'+'+iint('\\b f⋅\\b τ','L_2','','s',1,1),
            [Eq([[iint('ω','L','',' ',1,1),iint(['P','+Q','+R'],'L','','x;y;z',1,1)],
                iint('(P\\cosα+Q\\cosβ+R\\cosγ)','L','','s',1,1),
                iint('\\b f⋅\\b τ','L','','s',1,1),
                intl('[P(t)x\'(t)+Q(t)y\'(t)+R(t)z\'(t)]','a','b','t',0,'')
            ]),'其中f(x,y,z)=P(x,y,z)\\b i+Q(x,y,z)\\b j+R(x,y,z)\\b k',
            '单位切向量\\b τ=(\\cosα,\\cosβ,\\cosγ)'
            ].join(kbr),

            '（平面上参数t方程）'+Eq([iint(['P','+Q'],'L','','x;y',1,1),
                iint('(P\\cosα+Q\\cosβ)','L','','s',1,1),
                iint('(P\\cosα+Q\\sinα)','L','','s',1,1),
                intl('[P(t)x\'(t)+Q(t)y\'(t)]','a','b','t',0,'')
                ]),
            '（参数x的方程）'+Eq([iint(['P','+Q','+R'],['L：y=y(x)','z=z(x)','a≤x≤b'],'','x;y;z',1,1),
                intl('[P(x,y(x))+Q(x,y(x))y\'(x)+R(x,y(x))z\'(x)]','a','b','x',0,'')
                ]),
            '（平面x-y上）'+Eq([iint(['P','+Q'],['L：y=y(x)','a≤x≤b'],'','x;y',1,1),
                intl('[P(x)+Q(x)y\'(x)]','a','b','x',0,'')
                ])
            ,


        ]),'',khrA([

        ])
        ],

    
        ['第二类曲面积分',khrA([

            [iint('f(x,y,z)','Σ','','S',2,1)+'='+iint('f(x(u,v),y(u,v),z(u,v))'+kroot('EG-F^2'),'D','','u,v',2,1),
                '\\text{其中Gauss系数}，',
                piece(['E=\\b r_u^2=x_u^2+y_u^2+z_u^2',
                'F=\\b r_u⋅\\b r_v=x_ux_v+y_uy_v+z_uz_v',
                'G=\\b r_v^2=x_v^2+y_v^2+z_v^2']),
                '\\b r_u=x_u\\b i+y_u\\b j+z_u\\b k',
                '\\b r_v=x_v\\b i+y_v\\b j+z_v\\b k',
                'EG-F^2='+zp('\\b r_u×\\b r_v','‖‖')+'^2='+zp(difn('(y,z)','(u,v)',1))+'^2+'+zp(difn('(z,x)','(u,v)',1))+'^2+'+zp(difn('(x,y)','(u,v)',1))+'^2'
            ].join(kbr)
            
            ,


        ]),'',khrA([

        ])
        ],

    ],'wiki TBrc').replace(/\n/g,br))





);