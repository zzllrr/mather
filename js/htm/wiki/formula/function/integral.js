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

    ],'wiki TBrc').replace(/\n/g,br))





);