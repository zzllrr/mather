/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Iteration']=Kx(
    detail(gM('Iteration')+ksc('f_{-1}→x→f→f_2→f_n，f_0=x，f_1=f，f_2=f(f(x)))，f_{-n}=(f_{-1})_{n}=(f_n)_{-1}，f_{m+n}=f_m(f_n)=f_n(f_m)，f_{mn}=(f_m)_n=(f_n)_m'),
        Table([[khrA(['反函数','n次迭代']),
            '函数f=f_1',

            'n次迭代f_n',

            khrA(['递推式',
                '不动点f(x)=x']),

            khrA(['桥函数g','桥函数反函数g_{-1}']),

            khrA(['拓扑共轭h','n次迭代h_n']),

            khrA(['共轭反函数h_{-1}','n次迭代h_{-n}'])
        ]],[
        




        [khrA(['f_{-1}=g_{-1}∘h_{-1}∘g',
            'f_{-n}=g_{-1}∘h_{-n}∘g'

            ]), 

            khrA([Eq([['f','g_{-1}(h(g(x)))'],
                'g_{-1}∘h∘g'])

            ]),
            khrA(['f_2=g_{-1}(h_2(g(x)))', 
                'f_3=g_{-1}(h_3(g(x)))',
                'f_n=g_{-1}(h_n(g(x)))',
                'f_n=g_{-1}∘h_n∘g'
            ]),

            khrA(['g∘f_n'+kbr+'=h∘g(f_{n-1})',
                'g_{-1}∘h∘g=x  ⇔ h∘g=g'+kbr+
                'g_{-1}(h的不动点)'
            ]),

            khrA(['f=g_{-1}∘h∘g'+kbr+' ⇔ g∘f=h∘g',
                '\\small 共轭函数，共轭关系，等价关系',
                'f,h拓扑半共轭'+kbr+'（g满连续映射）：'+kbr+'h∘g=g∘f',
                'f,h拓扑共轭（同构）:'+kbr+'拓扑半共轭+g同胚',
                '同胚：双连续'+kbr+'（双射，且f与f_{-1}都连续）',
                '\\small 选择桥函数的方法：'+kbr+
                piece(['观察法：观察f结构',
                    '递推法：根据递推式结构',
                    '不动点法：'+kbr+piece([['取x-α或\\frac{1}{x-α}','唯一不动点α'],['取\\frac{x-α}{x-β}','两个不动点时']])
                ])
            ]),

            khrA(['h=g∘f∘g_{-1}'+kbr+'一般取'+kbr+'ax,ax^2,ax^3,x+a'+kbr+'等易迭代计算的函数',
                'h_n=g∘f_n∘g_{-1}']),

            khrA(['h_{-1}=g∘f_{-1}∘g_{-1}','h_{-n}=g∘f_{-n}∘g_{-1}'])

        ],


        [khrA(['g_{-1}(g(x)-b)','g_{-1}(g(x)-nb)'
            ]), 
            khrA(['g_{-1}(g(x)+b)','一般\\text{Abel}方程',
                
            ]),
            khrA(['f_2=g_{-1}(g(x)+2b)', 
                'f_3=g_{-1}(g(x)+3b)',
                'f_n=g_{-1}(g(x)+nb)']),
            khrA(['g(f)-g=b', '无不动点(b≠0时)']),

            khrA(['g','g_{-1}']),
            khrA(['x+b','x+nb']),
            khrA(['x-b','x-nb']),

        ],

        [khrA(['g_{-1}'+zp('\\frac{g(x)-b}{a}'),
                '\\small '+Eq(['g_{-1}'+zp('\\frac{g(x)}{a^n}+\\frac{b}{1-a}'+zp('1-\\frac{1}{a^n}')),

                    'g_{-1}'+zp('\\frac{g(x)-b\\frac{1-a^n}{1-a}}{a^n}'),

                ])
            ]), 
            khrA(['g_{-1}(ag(x)+b)','a≠1或b=0'
            ]),

            khrA(['f_2=g_{-1}(a^2g(x)+(a+1)b)', 
                'f_3=g_{-1}(a^3g(x)+(a^2+a+1)b)',
                'f_n=g_{-1}'+zp('a^ng(x)+\\frac{a^n-1}{a-1}b'),
            ]),

            khrA(['g(f)-ag=b','g(f_n)-\\frac{b}{1-a}'+kbr+'=a'+zp('g(f_{n-1})-\\frac{b}{1-a}'),
                'g_{-1}'+zp('\\frac{b}{1-a}')
            ]),

            khrA(['g '+kbr+'或 G(x)=g(x)-\\frac{b}{1-a}','g_{-1} '+kbr+'或 G_{-1}(x)=g_{-1}'+zp('x+\\frac{b}{1-a}')]),
            khrA(['ax+b '+kbr+'或 ax','a^nx+\\frac{a^n-1}{a-1}b '+kbr+'或 a^nx']),
            khrA(['\\frac{x-b}{a} '+kbr+'或 \\frac{x}{a}',
                Eq(['\\frac{x}{a^n}-\\frac{1-a^n}{1-a}⋅\\frac{b}{a^n}',
                '\\frac{x}{a^n}+\\frac{b}{1-a}'+zp('1-\\frac{1}{a^n}'),
                '\\frac{x-b\\frac{1-a^n}{1-a}}{a^n}'
                ])+kbr+
                ' 或 \\frac{x}{a^n}'
            ]),
        ],



        [khrA(['x-b',
            'x-nb'
            ]), 
            khrA(['x+b']),

            khrA(['f_2=x+2b','f_3=x+3b','f_n=x+nb',
            ]),
            
            khrA(['f_n-f_{n-1}=b',
                piece([['全是不动点','b=0时'],['无不动点','b≠0时']])]),

            khrA([]),

            khrA([]),

            khrA([]),

        ],


        [khrA(['\\frac{x}{a}',
                '\\frac{x}{a^n}',
            ]), 
            khrA(['ax']),
            khrA(['f_2=a^2x',
                'f_3=a^3x',
                'f_n=a^nx',
            
            ]),

            khrA([
                'f_n= af_{n-1}',
                '0（a=1时有无穷多个不动点）',
            ]),

            khrA([]),

            khrA([]),

            khrA([]),


        ],




        [khrA(['\\frac{x-b}{a}',
                Eq(['\\frac{x}{a^n}-\\frac{1-a^n}{1-a}⋅\\frac{b}{a^n}',
                    '\\frac{x}{a^n}+\\frac{b}{1-a}'+zp('1-\\frac{1}{a^n}'),
                    '\\frac{x-b\\frac{1-a^n}{1-a}}{a^n}'
                ])
            ]), 
            khrA(['ax+b','a≠1']),
            khrA(['f_2=a^2x+ab+b',
                'f_3=a^3x+a^2b+ab+b',
                'f_n=a^nx+\\frac{a^n-1}{a-1}b',
            
            ]),

            khrA([
                'f_n-\\frac{b}{1-a} '+kbr+'= a'+zp('f_{n-1}-\\frac{b}{1-a}'),
                '\\frac{b}{1-a}',
            ]),

            khrA(['g(x)=x-\\frac{b}{1-a}','g_{-1}(x)=x+\\frac{b}{1-a}']),

            khrA(['ax','a^nx']),

            khrA(['x\\/a','x\\/{a^n}']),


        ],

        [khrA([zp('\\frac{x}{a}')+'^{\\frac{1}b}',
                Eq(['x^{\\frac{1}{b^n}}a^{\\frac{1}{b-1}'+zp('\\frac{1}{b^n}-1')+'}',
                    zp('\\frac{x}{a^{\\frac{1-b^n}{1-b}}}')+'^{\\frac{1}{b^n}} '
                ])
            ]), 
            khrA(['ax^b','b≠1']),

            khrA(['f_2=a^{b+1}x^{b^2}', 
                'f_3=a^{b^2+b+1}x^{b^3}',
                'f_n=a^{\\frac {b^n-1}{b-1}} x^{b^n}',
            ]),
            khrA(['f_na^{\\frac{1}{b-1}}'+kbr+'='+zp('f_{n-1}a^{\\frac{1}{b-1}}')+'^b',
            
                '0, a^{-\\frac{1}{b-1}}',
            ]),

            khrA(['g(x)=xa^{\\frac{1}{b-1}}', 'g_{-1}(x)=xa^{-\\frac{1}{b-1}}']),
            khrA(['x^b','x^{b^n}']),
            khrA([kroot('x','b')+'=x^{\\frac{1}{b}}', kroot('x','b^n')+'=x^{\\frac{1}{b^n}}']),
        ],



        [khrA([
                '\\small '+piece([['x',kmod('n','0','2')], ['f=f_{-1}',kmod('n','1','2')]])+kbr+
                '周期2'

            ]), 
            khrA(['-x+b， \\frac{a}x，\\frac{1}x，-\\frac{1}x，\\frac {ax+b}{cx-a}等',
                'x+y=b，xy=a，'+kbr+'x^2+y^2=a^2',
                 'y=f(x)，x=f(y)']),
            khrA(['\\small '+piece([['x',kmod('n','0','2')], ['f_{-1}',kmod('n','1','2')]])+kbr+
                 '周期2'+kbr+'自逆，x,y对称性，函数图像关于y=x对称',
                     
                '=\\frac{(-1)^{n}+1}{2}x+\\frac{1-(-1)^{n}}{2}f_{-1}',

                '=\\frac{x+f_{-1}}{2}+(-1)^{n}\\frac{x-f_{-1}}{2}'
            ]),

            khrA([
                'f(x)=x'
            ]),

            khrA([]),
            khrA([]),
            khrA([]),
        ],



        [khrA(['f_{-1}=\\frac{1}{1-x}',
                '\\small '+piece([['x',kmod('n','0','3')], ['f_{-1}',kmod('n','1','3')], ['f',kmod('n','2','3')]])+kbr+
                '周期3',
            ]), 
            khrA([Eq(['1-\\frac{1}x','\\frac{x-1}x'])]),
            khrA(['f_2=\\frac{1}{1-x}'+kbr+'（恰好是反函数）', 
                'f_3=x',
                '\\small f_n='+piece([['x',kmod('n','0','3')], ['f',kmod('n','1','3')], ['f_2=f_{-1}',kmod('n','2','3')]])+kbr+
                '周期3',
                 'W(ω^n)x + W(ω^{n+2})f + W(ω^{n+1})f_{-1}',
                    
                '=\\frac{(ω^{2n}+ω^n+1)x}{3}'+kbr+'+\\frac{(ω^{2n+4}+ω^{n+2}+1)f}{3}'+kbr+'+\\frac{(ω^{2n+2}+ω^{n+1}+1)f_{-1}}{3}',

                '=\\frac{(ω^{-n}+ω^n+1)x}{3}'+kbr+'+\\frac{(ω^{1-n}+ω^{n-1}+1)f}{3}'+kbr+'+\\frac{(ω^{-n-1}+ω^{n+1}+1)f_{-1}}{3}',

                '=ω^{-n}'+zp('x + ω(1-\\frac{1}x)+ω^2 \\frac{1}{1-x} ')+kbr+
                '+ω^n'+zp('x + ω^2(1-\\frac{1}x)+ω \\frac{1}{1-x}')+kbr+
                '+x + 1-\\frac{1}{x}+\\frac{1}{1-x} ',

                '=ω^{-n}'+zp('x + ω(1-\\frac{1}x)+'+kxo('ω')+' \\frac{1}{1-x} ')+kbr+
                '+ω^n'+zp('x + '+kxo('ω')+'(1-\\frac{1}x)+ω \\frac{1}{1-x}')+kbr+
                '+x + 1-\\frac{1}{x}+\\frac{1}{1-x} ',

                '其中ω是3次单位原根，'+kbr+'ω=e^{\\frac{2πi}{3}}=-1\\/2+i\\frac{\\sqrt{3}}{2}'+kbr+'ω^2='+kxo('ω')+'=-1-ω'+kbr+
                'W(x)=\\frac{x^2+x+1}{3}'
            ]),

            khrA([
                '\\frac{1±\\sqrt{-3}}{2}'+kbr+
                '1+ω,-ω'
            ]),

            khrA([]),
            khrA([]),
            khrA([]),
        ],

        [khrA(['f_{-1}=1-\\frac{1}x',
                '\\small '+piece([['x',kmod('n','0','3')], ['f_{-1}',kmod('n','1','3')], ['f',kmod('n','2','3')]])+kbr+
                '周期3',
            ]), 
            khrA([Eq(['\\frac{1}{1-x}',
                '1+\\frac{x}{1-x}'
            ])]),
            khrA(['f_2=1-\\frac{1}x=\\frac{x-1}x'+kbr+'（恰好是反函数）', 
                'f_3=x',
                '\\small f_n='+piece([['x',kmod('n','0','3')], ['f',kmod('n','1','3')], ['f_{-1}',kmod('n','2','3')]])+kbr+
                '周期3',
            ]),

            khrA([
                '\\frac{1±\\sqrt{-3}}{2}'+kbr+
                '1+ω,-ω'
            ]),


            khrA([]),
            khrA([]),
            khrA([]),
        ],









        [khrA([Eq(['\\frac{x}{-ax+1}',
            '-\\frac{1}{a}-\\frac{1}{a(ax-1)}',
            '\\frac{1}{-a+\\frac{1}{x}}'
            ]),
            '\\frac{x}{-nax+1}'
            ]), 
            khrA([Eq(['\\frac{x}{ax+1}',
                '\\frac{1}{a}-\\frac{1}{a(ax+1)}',
                '\\frac{1}{a+\\frac{1}{x}}'
                ])
            ]),

            khrA(['f_2=\\frac{x}{2ax+1}', 
                'f_3=\\frac{x}{3ax+1}',
                'f_n=\\frac{x}{nax+1}'
            ]),

            khrA([


                '\\frac{1}{f_n}-\\frac{1}{f_{n-1}}=a',
                '0'
            ]),


            khrA([]),
            khrA([]),
            khrA([]),
        ],


        [khrA([Eq(['\\frac{x}{-x+1}',
            '-1-\\frac{1}{x-1}',
            '\\frac{1}{-1+\\frac{1}{x}}'
            ]),
            '\\frac{x}{-nx+1}'
            ]), 
            khrA([Eq(['\\frac{x}{x+1}',
                '1-\\frac{1}{x+1}',
                '\\frac{1}{1+\\frac{1}{x}}'
                ])
            ]),

            khrA(['f_2=\\frac{x}{2x+1}', 
                'f_3=\\frac{x}{3x+1}',
                'f_n=\\frac{x}{nx+1}'
            ]),

            khrA([


                '\\frac{1}{f_n}-\\frac{1}{f_{n-1}}=1',
                '0'
            ]),


            khrA([]),
            khrA([]),
            khrA([]),
        ],












        [khrA(['1-\\sqrt{1-x}',
                '1-'+kroot('1-x','2^n')
            ]), 
            khrA([Eq(['-x^2+2x','x(2-x)','2x-x^2','1-(1-x)^2',
                'P(-1,2)'
                ])]),

            khrA(['f_2=1-(1-x)^4','f_3=1-(1-x)^8','f_n=1-(1-x)^{2^n}']),

            khrA(['1-f_n'+kbr+'=(1-f_{n-1})^2',
                '0,1'
            ]),


            khrA(['g(x)=1-x','g_{-1}(x)=g(x)']),
            khrA(['x^2','x^{2^n}']),
            khrA(['\\sqrt{x}',kroot('x','2^n')]),
        ],



        [khrA(['1-(1-x)^2',
            '1-(1-x)^{2^n}',
            ]), 
            khrA(['1-\\sqrt{1-x}']),
            khrA(['f_2=1-'+kroot('1-x',4), 
                'f_3=1-'+kroot('1-x',8),
                'f_n=1-(1-x)^{\\frac{1}{2^n}}',
            ]),

            khrA(['1-f_n'+kbr+'=\\sqrt{1-f_{n-1}}','0,1']),

            
            khrA(['g(x)=1-x','g_{-1}(x)=g(x)']),
            khrA(['\\sqrt{x}',kroot('x','2^n')]),
            khrA(['x^2','x^{2^n}']),
        ],




        [khrA(['1+\\sqrt{x-1}',
                '1+'+kroot('x-1','2^n')
            ]), 
            khrA([Eq(['x^2-2x+2','(x-1)^2+1'])]),
            khrA(['f_2=(x-1)^4+1', 
                'f_3=(x-1)^8+1',
                'f_n=(x-1)^{2^n}+1',
            ]),

            khrA(['f_n-1'+kbr+'=(f_{n-1}-1)^2','1,2']),

            
            khrA(['g(x)=x-1','g_{-1}(x)=x+1']),
            khrA(['x^2','x^{2^n}']),
            khrA(['\\sqrt{x}',kroot('x','2^n')]),
        ],


        [khrA(['(x-1)^2+1',
                '(x-1)^{2^n}+1'
            ]), 
            khrA(['1+\\sqrt{x-1}']),
            khrA(['f_2=1+'+kroot('x-1',4), 
                'f_3=1+'+kroot('x-1',8),
                'f_n=1+(x-1)^{\\frac{1}{2^n}}',
            ]),
            khrA(['f_n-1'+kbr+'=\\sqrt{f_{n-1}-1}','1,2']),

            
             
            khrA(['g(x)=x-1','g_{-1}(x)=x+1']),
            khrA(['\\sqrt{x}',kroot('x','2^n')]),
            khrA(['x^2','x^{2^n}']),


        ],





        [khrA([Eq(['x+\\sqrt{x^2-1}',
                '\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{\\frac{1}{2}}}',
                'e^{\\ch ^{-1} x}=T(x)'
            ]),
                Eq(['\\frac{1}{1-'+kroot('1-\\frac{1}{x}','2^n')+'}',
                 '\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{\\frac{1}{2^n}}}',
                ])
            ]), 
            khrA([Eq(['\\frac{x^2}{2x-1}',
                '\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{2}}'
                ])
            ]),
            khrA(['f_2=\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^4}',
                'f_3=\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^8}', 
                'f_n=\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{2^n}}',
            ]),

            khrA(['1-\\frac{1}{f_n}'+kbr+'='+zp('1-\\frac{1}{f_{n-1}}')+'^2','0,1'
            ]),

            khrA(['g(x)=1-\\frac{1}{x}','g_{-1}(x)=\\frac{1}{1-x}']),
            khrA(['x^2','x^{2^n}']),
            khrA(['\\sqrt{x}',kroot('x','2^n')]),

        ],

        [khrA([Eq(['\\frac{x^2}{2x-1}',
                    '\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{2}}' 
                ]),
                '\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{2^n}}'
            ]), 
            khrA([Eq(['x+\\sqrt{x^2-1}',
                '\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{\\frac{1}{2}}}',
                'e^{\\ch ^{-1} x}=T(x)'
                ])
            ]),

            khrA(['f_2=\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{\\frac{1}{4}}}',
                'f_3=\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{\\frac{1}{8}}}',
                'f_n=\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{\\frac{1}{2^n}}}',

            ]),

            khrA(['1-\\frac{1}{f_n}'+kbr+'='+zp('1-\\frac{1}{f_{n-1}}')+'^{\\frac{1}{2}}','1'
            ]),

            khrA(['g(x)=1-\\frac{1}{x}','g_{-1}(x)=\\frac{1}{1-x}']),
            khrA(['\\sqrt{x}',kroot('x','2^n')]),
            khrA(['x^2','x^{2^n}']),
        ],






        [khrA([]), 
            khrA([Eq(['x^2+1','(x+1)(x-1)'])]),
            khrA([Eq([['f_2','(x^2-1)^2-1'],'x^4-2x^2','x^2(x^2-2)']), 
                Eq([['f_3','x^4(x^2-2)^2-1'],'x^8-4x^6+4x^4-1','(x^2-1)^2((x^2-1)^2-2)','(x-1)^2(x+1)^2((x^2-1)^2-2)']),
                'f_n=',
            ]),
            khrA(['f_n-1',
                'Φ=\\frac{\\sqrt{5} +1}{2},1-Φ=-Φ^{-1}=\\frac{1-\\sqrt{5}}{2}',
                '其中Φ(Φ-1)=1'+kbr+'Φ^2=1+Φ'
                ]),

             
            khrA(['g(x)=\\frac{x-Φ}{x+Φ-1}'+kbr+'=1+\\frac{1-2Φ}{x+Φ-1}=1-\\frac{\\sqrt{5}}{x+Φ-1}'+kbr+
                '或g(x)=\\frac{x+Φ-1}{x-Φ}'+kbr+'=1+\\frac{2Φ-1}{x-Φ}=1+\\frac{\\sqrt{5}}{x-Φ}',

                'g_{-1}(x)=\\frac{1-2Φ}{x-1}-Φ+1=\\frac{x(1-Φ)-Φ}{x-1}'+kbr+
                '或g_{-1}(x)=\\frac{2Φ-1}{x-1}+Φ=\\frac{Φx+Φ-1}{x-1}',
            ]),
            khrA(['-x\\frac{ x-\\sqrt{5}-1}{ x(\\sqrt{5}-1)+1  }'+kbr+'或'+

                '-\\sqrt{5}x\\frac{x  +\\sqrt{5}-1}{ (Φ+1)x^2 -x(3Φ+2) -2Φ     }'
            ]),
            khrA([

            ]),


        ],
















        [khrA([]), 
            khrA([Eq(['x^2-1','(x+1)(x-1)'])]),
            khrA([Eq([['f_2','(x^2-1)^2-1'],'x^4-2x^2','x^2(x^2-2)']), 
                Eq([['f_3','x^4(x^2-2)^2-1'],'x^8-4x^6+4x^4-1','(x^2-1)^2((x^2-1)^2-2)','(x-1)^2(x+1)^2((x^2-1)^2-2)']),
                'f_n=',
            ]),
            khrA(['f_n-1',
                'Φ=\\frac{\\sqrt{5} +1}{2},1-Φ=-Φ^{-1}=\\frac{1-\\sqrt{5}}{2}',
                '其中Φ(Φ-1)=1'+kbr+'Φ^2=1+Φ'
                ]),

             
            khrA(['g(x)=\\frac{x-Φ}{x+Φ-1}'+kbr+'=1+\\frac{1-2Φ}{x+Φ-1}=1-\\frac{\\sqrt{5}}{x+Φ-1}'+kbr+
                '或g(x)=\\frac{x+Φ-1}{x-Φ}'+kbr+'=1+\\frac{2Φ-1}{x-Φ}=1+\\frac{\\sqrt{5}}{x-Φ}',

                'g_{-1}(x)=\\frac{1-2Φ}{x-1}-Φ+1=\\frac{x(1-Φ)-Φ}{x-1}'+kbr+
                '或g_{-1}(x)=\\frac{2Φ-1}{x-1}+Φ=\\frac{Φx+Φ-1}{x-1}',
            ]),
            khrA(['-x\\frac{ x-\\sqrt{5}-1}{ x(\\sqrt{5}-1)+1  }'+kbr+'或'+

                '-\\sqrt{5}x\\frac{x  +\\sqrt{5}-1}{ (Φ+1)x^2 -x(3Φ+2) -2Φ     }'
            ]),
            khrA([

            ]),


        ],




        [khrA(['\\sqrt{x+2}',
                '见下'
            ]), 
            khrA([

                Eq(['x^2-2',
                    'Q(1,0)',
                    '\\small '+piece([['2\\cos 2θ','|x|≤2'],
                        ['t^2+\\frac{1}{t^2}'+kbr+
                        '=T^2\\(\\frac{x}{2}\\)+T^2\\(-\\frac{x}{2}\\)','|x|>2']
                    ])
                ]),

                '令'+piece([['x=2\\cos θ，'+kbr+'θ=\\arccos \\frac{x}{2}','|x|≤2'],
                    ['x=t+\\frac{1}{t}，'+kbr+'t=T\\(\\frac{x}{2}\\)','|x|>2']
                ]),


                '其中T(x)=x+\\sqrt {x^{2}-1}'+kbr+
                '=e^{\\ch^{-1}(x)}'+kbr+
                't=\\frac {x+ {\\sqrt {x^{2}-4}}}{2}'+kbr+
                '=e^{\\ch^{-1}\\(\\frac{x}{2}\\)}'+kbr+
                '=T\\(\\frac{x}{2}\\)'+kbr+

                '\\frac{1}{t}=\\frac {x-{\\sqrt {x^{2}-4}}}{2}'+kbr+
                '=e^{\\ch^{-1}\\(-\\frac{x}{2}\\)}'+kbr+
                '=-T\\(-\\frac{x}{2}\\)'+kbr+

                
                '其中t +1\\/t=x'+kbr+
                't^2+\\frac{1}{t^2}=x^2-2'+kbr+
                

                piece([
                    '\\frac{1}{T(x)}=x-\\sqrt {x^{2}-1}',
                    'T(-x)=-x+\\sqrt {x^{2}-1}',
                    'T(-x)=-\\frac{1}{T(x)}',
                    'T(x)T(-x)=-1',
    
                    'T(x)+T(-x)=2\\sqrt {x^{2}-1}',
                    'T(x)-T(-x)=2x',
    
    
                    'T(x)+\\frac{1}{T(x)}=2x',
                    'T\\(\\frac{x}{2}\\)-T\\(-\\frac{x}{2}\\)=x',
                    'T\\(\\frac{x}{2}\\)T\\(-\\frac{x}{2}\\)=-1'

                ])

                
   
            ]),
            khrA([Eq([['f_2','(x^2-2)^2-2'],
                    'x^4-4x^2+2',
                    '2\\cos 4θ 当|x|≤2',
                    't^{4}+t^{-4} 当|x|>2',
                ]), 
                Eq([['f_3','((x^2-2)^2-2)^2'],
                    '(x^2-2)^4-4(x^2-2)^2+4','x^8-8x^6+20x^4-16x^2+4',
                    '2\\cos 8θ 当|x|≤2',
                    't^{8}+t^{-8} 当|x|>2',
                ]),


                Eq(['f_n',
                    piece([['2\\cos 2^nθ','|x|≤2'],
                        ['t^{2^{n}}+\\frac{1}{t^{2^{n}}}'+kbr+
                        '=t^{2^{n}}+t ^{-2^{n}}'+kbr+
                        '=T^{2^{n}}\\(\\frac{x}{2}\\)+T^{2^{n}}\\(-\\frac{x}{2}\\)','|x|>2']
                    ])
                    
                ]),
                '其中'+zp('2T'+zp('\\frac{x}{2}')+'-x')+'^2-(T(x)-x)^2=-3'+kbr+
                '='+zp('4T^2'+zp('\\frac{x}{2}')+'-T^2(x)')+'-2x'+zp('2T'+zp('\\frac{x}{2}')+'-T(x)'),
            ]),


            khrA(['f_n'+kbr+'='+zp('f_{n-1}')+'^2-2',
                '2，-1'
            ]),


             
            khrA([]),
            khrA([]),
            khrA([

            ]),


        ],





        [khrA(['\\frac{'+kroot('ax+\\frac {b}{2}')+'}{a}-\\frac {b}{2a}',
            '\\frac{'+kroot('ax+\\frac {b}{2}','2^n')+'}{a}-\\frac {b}{2a}',
            ]), 
            khrA([Eq(['P(a,b)',
                'ax^{2}+bx+\\frac {b^{2}-2b}{4a}',
                'ax^{2}+bx+\\frac {b(b-2)}{4a}',
                'a'+zp('x+\\frac{b}{2a}')+'^2-\\frac {b}{2a}']),
                '直线y=x过y=f(x)顶点'
            ]),


            khrA(['f_2=\\frac{'+zp('ax+\\frac{b}{2}')+'^{4}}{a}-\\frac{b}{2a}',
                'f_3=\\frac{'+zp('ax+\\frac{b}{2}')+'^{8}}{a}-\\frac{b}{2a}',
                'f_n=\\frac {2A^{2^{n}}-b}{2a}=\\frac {A^{2^{n}}-b\\/2}{a}=\\frac{'+zp('ax+\\frac{b}{2}')+'^{2^n}}{a}-\\frac{b}{2a}',
                '其中A =\\frac {2ax+b}{2}=ax+b\\/2'+kbr+
                '=T\\(\\frac{ax}{2}\\)或-T\\(-\\frac{ax}{2}\\)',
            ]),

            khrA(['af_n+\\frac{b}2'+kbr+'='+zp('af_{n-1}+\\frac{b}{2}')+'^{2}',
                '\\frac{-b}{2a}，\\frac{2-b}{2a}'
            ]), 
            
            khrA(['g(x)=\\frac{x-\\frac{2-b}{2a}}{x-'+zp('\\frac{-b}{2a}')+'}=1-\\frac{2}{2ax+b}'+kbr+
                '或g(x)=ax+\\frac{b}{2}',
                'g_{-1}(x)=\\frac{1}{a(1-x)}-\\frac{b}{2a}'+kbr+
                '或g_{-1}(x)=\\frac{x}{a}-\\frac{b}{2a}'
            ]),
            khrA([Eq(['1-(1-x)^2','x(2-x)'])+kbr+'或x^2',
                '1-(1-x)^{2^n}'+kbr+'或x^{2^n}'
            ]), 
            khrA(['1-\\sqrt{1-x}'+kbr+'或\\sqrt{x}',
                '1-'+kroot('1-x','2^n')+kbr+'或'+kroot('x','2^n')
            ]),
        ],





        [khrA(['\\frac{'+kroot('ax+\\frac {b+4}{2}')+'}{a}-\\frac {b}{2a}',
            '见下 '
            ]), 
            khrA([Eq(['Q(a,b)',
                    'P(a,b)-\\frac{2}{a}',
                    'ax^{2}+bx+\\frac {b^{2}-2b-8}{4a}',
                    'ax^{2}+bx+\\frac {(b-4)(b+2)}{4a}',
                    'a'+zp('x+\\frac{b}{2a}')+'^2-\\frac {b+4}{2a}',

                ]),
                '当\\left |ax+\\frac{b}{2}\\right |≤2时'+kbr+
                '=\\small \\frac{1}{2a}'+zp('4a\\cos 2θ - b')+kbr+
                
                '令ax+\\frac{b}{2}=2\\cos θ，'+kbr+
                'ax=2\\cos θ-\\frac{b}{2}'+kbr+
                'x=\\frac{1}{2a}'+zp('4a\\cos θ - b')+kbr+
                'θ=\\arccos \\frac{2ax+b}{4}'+kbr,

                '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+
                '=\\frac{1}{a}'+zp('t^2+\\frac{1}{t^2}-\\frac{b}{2}')+kbr+


                
                '令ax+\\frac{b}{2}=t+\\frac{1}{t}，'+kbr+
                'ax=t+\\frac{1}{t}-\\frac{b}{2}'+kbr+
                'x=\\frac{1}{a}'+zp('t+\\frac{1}{t}-\\frac{b}{2}')+kbr+

                't=T\\(\\frac{2ax+b}{4}\\)'+kbr+
                '\\frac{1}{t}=T\\(-\\frac{2ax+b}{4}\\)'
                    
            ]),

            khrA([ '\\small '+
                    '当\\left | ax+\\frac{b}{2}\\right |≤2时'+kbr+Eq(['f_2',
                        '\\frac{1}{2a}'+zp('4a\\cos 4θ - b'),
                        '\\frac{1}{2a}'+zp('4a\\cos \\(4\\arccos \\frac{2ax+b}{4}\\) - b'),


                    ])+kbr+
                    '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+Eq(['f_2',
                        '\\frac {2t^{4}+2t^{-4}-b}{2a}=\\frac {t^{4}+t^{-4}}{a}-\\frac{b}{2a}',
                        '\\frac{1}{a} '+zp('t^{4}+t^{-4} - \\frac{b}{2}'),
                        '\\frac{1}{a} '+zp('T^{4}\\(\\tfrac{2ax+b}{4}\\) + T^{4}\\(-\\tfrac{2ax+b}{4}\\) -\\frac{b}{2}'),


                    ]),
                '\\small '+
                    '当\\left | ax+\\frac{b}{2}\\right |≤2时'+kbr+Eq(['f_3',
                        '\\frac{1}{2a}'+zp('4a\\cos 8θ - b'),
                        '\\frac{1}{2a}'+zp('4a\\cos \\(8\\arccos \\frac{2ax+b}{4}\\) - b'),


                    ])+kbr+
                    '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+Eq(['f_3',
                        '\\frac {2t^{8}+2t^{-8}-b}{2a}=\\frac {t^{8}+t^{-8}}{a}-\\frac{b}{2a}',
                        '\\frac{1}{a} '+zp('t^{8}+t^{-8} - \\frac{b}{2}'),
                        '\\frac{1}{a} '+zp('T^{8}\\(\\tfrac{2ax+b}{4}\\) + T^{8}\\(-\\tfrac{2ax+b}{4}\\) -\\frac{b}{2}'),


                    ]),

                '\\small '+
                '当\\left | ax+\\frac{b}{2}\\right |≤2时'+kbr+Eq(['f_n',
                    '\\frac{1}{2a}'+zp('4a\\cos 2^nθ - b'),
                    '\\frac{1}{2a}'+zp('4a\\cos \\(2^n\\arccos \\frac{2ax+b}{4}\\) - b'),


                ])+kbr+
                '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+Eq(['f_n',
                    '\\frac {2t^{2^{n}}+2t^{-2^{n}}-b}{2a}=\\frac {t^{2^{n}}+t^{-2^{n}}}{a}-\\frac{b}{2a}',
                    '\\frac{1}{a} '+zp('t^{2^{n}}+t^{-2^{n}} - \\frac{b}{2}'),
                    '\\frac{1}{a} '+zp('T^{2^{n}}\\(\\tfrac{2ax+b}{4}\\) + T^{2^{n}}\\(-\\tfrac{2ax+b}{4}\\) -\\frac{b}{2}'),


                ]),
                
            ]),


            khrA(['af_n+b\\/2'+kbr+'='+zp('af_{n-1}+b\\/2')+'^2-2',
                '\\frac{4-b}{2a}，\\frac{-2-b}{2a}'
            ]),

            khrA(['g(x)=ax+b\\/2','g_{-1}(x)=x\\/a-b\\/{2a}']),
            khrA(['x^2-2','?']),
            khrA(['?','?']),
        ],
        








        [khrA([Eq(['Q(a,b)',
                'P(a,b)-\\frac{2}{a}',
                'ax^{2}+bx+\\frac {b^{2}-2b-8}{4a}',
                'ax^{2}+bx+\\frac {(b-4)(b+2)}{4a}',
                'a'+zp('x+\\frac{b}{2a}')+'^2-\\frac {b+4}{2a}',

            ]),
            '见上',
                    
            ]),
            
            
                        
            
            khrA(['\\frac{'+kroot('ax+\\frac {b+4}{2}')+'}{a}-\\frac {b}{2a}',
            '\\small '+
            '当\\left | ax+\\frac{b}{2}\\right |≤2时'+kbr+Eq(['f_{-n}',
                '\\frac{1}{2a}'+zp('4a\\cos 2^{-n}θ - b'),
                '\\frac{1}{2a}'+zp('4a\\cos \\(2^{-n}\\arccos \\frac{2ax+b}{4}\\) - b'),


            ])+kbr+
            '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+Eq(['f_n',
                '\\frac {2t^{2^{-n}}+2t^{-2^{-n}}-b}{2a}',
                '\\frac {t^{2^{-n}}+t^{-2^{-n}}}{a}-\\frac{b}{2a}',
                '\\frac{1}{a} '+zp('t^{2^{-n}}+t^{-2^{-n}} - \\frac{b}{2}'),
                '\\frac{1}{a} '+zp('T^{2^{-n}}\\(\\tfrac{2ax+b}{4}\\) + T^{2^{-n}}\\(-\\tfrac{2ax+b}{4}\\) -\\frac{b}{2}'),


            ]),
            ]), 
           

            khrA([ '\\small '+



            '当\\left |ax+\\frac{b}{2}\\right |≤2时'+kbr+
            '=\\small \\frac{1}{2a}'+zp('4a\\cos 2θ - b')+kbr+
            
            '令ax+\\frac{b}{2}=2\\cos θ，'+kbr+
            'ax=2\\cos θ-\\frac{b}{2}'+kbr+
            'x=\\frac{1}{2a}'+zp('4a\\cos θ - b')+kbr+
            'θ=\\arccos \\frac{2ax+b}{4}'+kbr,

            '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+
            '=\\frac{1}{a}'+zp('t^2+\\frac{1}{t^2}-\\frac{b}{2}')+kbr+


            
            '令ax+\\frac{b}{2}=t+\\frac{1}{t}，'+kbr+
            'ax=t+\\frac{1}{t}-\\frac{b}{2}'+kbr+
            'x=\\frac{1}{a}'+zp('t+\\frac{1}{t}-\\frac{b}{2}')+kbr+

            't=T\\(\\frac{2ax+b}{4}\\)'+kbr+
            '\\frac{1}{t}=T\\(-\\frac{2ax+b}{4}\\)'+kbr+




            





                    '当\\left | ax+\\frac{b}{2}\\right |≤2时'+kbr+Eq(['f_2',
                        '\\frac{1}{2a}'+zp('4a\\cos 4θ - b'),
                        '\\frac{1}{2a}'+zp('4a\\cos \\(4\\arccos \\frac{2ax+b}{4}\\) - b'),


                    ])+kbr+
                    '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+Eq(['f_2',
                        '\\frac {2t^{4}+2t^{-4}-b}{2a}=\\frac {t^{4}+t^{-4}}{a}-\\frac{b}{2a}',
                        '\\frac{1}{a} '+zp('t^{4}+t^{-4} - \\frac{b}{2}'),
                        '\\frac{1}{a} '+zp('T^{4}\\(\\tfrac{2ax+b}{4}\\) + T^{4}\\(-\\tfrac{2ax+b}{4}\\) -\\frac{b}{2}'),


                    ]),
                '\\small '+
                    '当\\left | ax+\\frac{b}{2}\\right |≤2时'+kbr+Eq(['f_3',
                        '\\frac{1}{2a}'+zp('4a\\cos 8θ - b'),
                        '\\frac{1}{2a}'+zp('4a\\cos \\(8\\arccos \\frac{2ax+b}{4}\\) - b'),


                    ])+kbr+
                    '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+Eq(['f_3',
                        '\\frac {2t^{8}+2t^{-8}-b}{2a}=\\frac {t^{8}+t^{-8}}{a}-\\frac{b}{2a}',
                        '\\frac{1}{a} '+zp('t^{8}+t^{-8} - \\frac{b}{2}'),
                        '\\frac{1}{a} '+zp('T^{8}\\(\\tfrac{2ax+b}{4}\\) + T^{8}\\(-\\tfrac{2ax+b}{4}\\) -\\frac{b}{2}'),


                    ]),

                '\\small '+
                '当\\left | ax+\\frac{b}{2}\\right |≤2时'+kbr+Eq(['f_n',
                    '\\frac{1}{2a}'+zp('4a\\cos 2^nθ - b'),
                    '\\frac{1}{2a}'+zp('4a\\cos \\(2^n\\arccos \\frac{2ax+b}{4}\\) - b'),


                ])+kbr+
                '当\\left | ax+\\frac{b}{2}\\right |>2时'+kbr+Eq(['f_n',
                    '\\frac {2t^{2^{n}}+2t^{-2^{n}}-b}{2a}=\\frac {t^{2^{n}}+t^{-2^{n}}}{a}-\\frac{b}{2a}',
                    '\\frac{1}{a} '+zp('t^{2^{n}}+t^{-2^{n}} - \\frac{b}{2}'),
                    '\\frac{1}{a} '+zp('T^{2^{n}}\\(\\tfrac{2ax+b}{4}\\) + T^{2^{n}}\\(-\\tfrac{2ax+b}{4}\\) -\\frac{b}{2}'),


                ]),
                
            ]),


            khrA(['af_n+b\\/2'+kbr+'='+zp('af_{n-1}+b\\/2')+'^2-2',
                '\\frac{4-b}{2a}，\\frac{-2-b}{2a}'
            ]),

            khrA(['g(x)=ax+b\\/2','g_{-1}(x)=x\\/a-b\\/{2a}']),
            khrA(['x^2-2','?']),
            khrA(['?','?']),
        ],
        











        [khrA([Eq(['\\frac{'+kroot('ax+2')+'}{a}',

      
            ]),
            '见下'
            ]), 
            khrA([Eq(['ax^{2}-\\frac {2}{a}',
                    'Q(a,0)',
                    '\\small '+piece(['\\frac{2}{a}\\cos 2θ，当|ax|≤2',
                        '\\frac{1}{a}'+zp('t^2+\\frac{1}{t^2}')+'，当|ax|>2'+kbr+
                        '=\\frac{1}{a}'+zp('T^2\\(\\frac{ax}{2}\\)+T^2\\(-\\frac{ax}{2}\\)')
                    ])
                ]),

                '令'+piece([['ax=2\\cos θ，'+kbr+'θ=\\arccos \\frac{ax}{2}','|ax|≤2'],
                    ['ax=t+\\frac{1}{t}，'+kbr+'t=T\\(\\frac{ax}{2}\\)','|ax|>2']
                ]),

            ]),

            khrA(['\\small f_2=a^3x^4-4ax^2+\\frac{2}{a}'+kbr+
                    '='+piece([['\\frac{2}{a}\\cos 4θ','|ax|≤2'],
                    ['\\frac{1}{a}'+zp('t^{4}+\\frac{1}{t^{4}}')+kbr+
                    '=\\frac{1}{a}'+zp('T^{4}\\(\\frac{x}{2}\\)+T^{4}\\(-\\frac{x}{2}\\)'),'|ax|>2']
                ]),
                '\\small f_3='+piece([['\\frac{2}{a}\\cos 8θ','|ax|≤2'],
                    ['\\frac{1}{a}'+zp('t^{8}+\\frac{1}{t^{8}}')+kbr+
                    '=\\frac{1}{a}'+zp('T^{8}\\(\\frac{x}{2}\\)+T^{8}\\(-\\frac{x}{2}\\)'),'|ax|>2']
                ]),

                Eq(['f_n',

                    '\\small '+piece([['\\frac{2}{a}\\cos 2^nθ','|ax|≤2'],
                        ['\\frac{1}{a}'+zp('t^{2^n}+\\frac{1}{t^{2^n}}')+kbr+
                        '=\\frac{1}{a}'+zp('T^{2^n}\\(\\frac{x}{2}\\)+T^{2^n}\\(-\\frac{x}{2}\\)'),'|ax|>2']
                    ])

                ]),
            ]),


            khrA(['af_n'+kbr+'='+zp('af_{n-1}')+'^2-2',
                '\\frac{2}{a}，-\\frac{1}{a}'
            ]),

            khrA(['g(x)=ax','g_{-1}(x)=x\\/a']),
            khrA(['x^2-2','?']),
            khrA(['?','?']),
        ],
        


        [khrA(['ax^{2}-\\frac {2}{a}',
        
            '见上',
            ]), 
            khrA([Eq(['\\frac{'+kroot('ax+2')+'}{a}',

                 '\\small '+piece([['\\frac{2}{a}\\cos \\frac{θ}{2}','|ax|≤2'],
                    ['\\frac{1}{a}'+zp('\\sqrt{t}+\\frac{1}{\\sqrt{t}}'),'|ax|>2']
                    ])
                ]),
                '令'+piece([['x=\\frac{2}{a}\\cos θ，'+kbr+'θ=\\arccos \\frac{ax}{2}','|ax|≤2'],
                    ['x=\\frac{1}{a}'+zp('t+\\frac{1}{t}')+'，'+kbr+'t=T\\(\\frac{ax}{2}\\)','|ax|>2']
                ])


            ]),

            khrA(['f_2=\\frac{'+kroot(kroot('ax+2')+'+2')+'}{a}'+kbr+
                '='+piece([['\\frac{2}{a}\\cos \\frac{θ}{4}','|ax|≤2'],
                    ['\\frac{1}{a}'+zp('\\sqrt[4]{t}+\\frac{1}{\\sqrt[4]{t}}'),'|ax|>2']
                ]),
                'f_3='+piece([['\\frac{2}{a}\\cos \\frac{θ}{8}','|ax|≤2'],
                    ['\\frac{1}{a}'+zp('\\sqrt[8]{t}+\\frac{1}{\\sqrt[8]{t}}'),'|ax|>2'],
                ]),



                Eq(['f_n',
                    '\\small '+piece([['\\frac{2}{a}\\cos \\frac{θ}{2^n}'+kbr+
                    ' = \\frac{2}{a}\\cos'+zp('\\frac{1}{2^n} \\arccos \\frac{ax}{2}'),'|ax|≤2'],

                    ['\\frac{1}{a}'+zp('\\sqrt[2^n]{t}+\\frac{1}{\\sqrt[2^n]{t}}')+kbr+
                    ' = \\frac{1}{a}'+zp('T^{\\frac{1}{2^n}}\\(\\frac{ax}{2}\\)+T^{-\\frac{1}{2^n}}\\(\\frac{ax}{2}\\)'),'|ax|>2'],
                ])
                ]),
            ]),


            khrA(['af_n'+kbr+'='+kroot('af_{n-1}+2'),
                '\\frac{2}{a}，-\\frac{1}{a}'
            ]),

            khrA(['g(x)=ax','g_{-1}(x)=\\frac{x}{a}']),
            khrA([kroot('x+2'),'?']),
            khrA(['?','?']),
        ],







        [khrA(['x^{2}-2',
        
            '见上',
            ]), 
            khrA([Eq([kroot('x+2'),

                    piece([['2\\cos \\frac{θ}{2}','|x|≤2'],
                        ['\\sqrt{t}+\\frac{1}{\\sqrt{t}}','|x|>2']
                    ])
                ]),
                '令'+piece([['x=2\\cos θ，'+kbr+'θ=\\arccos \\frac{x}{2}','|x|≤2'],
                    ['x=t+\\frac{1}{t}，'+kbr+'t=T\\(\\frac{x}{2}\\)','|x|>2']
                ])
            ]),

            khrA([Eq(['f_2='+kroot(kroot('x+2')+'+2'),
                    '\\small '+piece([['2\\cos \\frac{θ}{4}'+kbr+'=2\\cos'+zp('\\frac{1}{4} \\arccos \\frac{x}{2}'),'|x|≤2'],
                        ['\\sqrt[2^n]{t}+\\frac{1}{\\sqrt[4]{t}}'+kbr+'= T^{\\frac{1}{4}}\\(\\frac{x}{2}\\)+T^{-\\frac{1}{4}}\\(\\frac{x}{2}\\)','|x|>2'],
                    ]),
                ]),
                Eq(['f_3',
                    '\\small '+piece([['2\\cos \\frac{θ}{8}'+kbr+'=2\\cos'+zp('\\frac{1}{8} \\arccos \\frac{x}{2}'),'|x|≤2'],
                        ['\\sqrt[2^n]{t}+\\frac{1}{\\sqrt[8]{t}}'+kbr+'= T^{\\frac{1}{8}}\\(\\frac{x}{2}\\)+T^{-\\frac{1}{8}}\\(\\frac{x}{2}\\)','|x|>2'],
                    ]),
                ]),


                Eq(['f_n',
                    '\\small '+piece([['2\\cos \\frac{θ}{2^n}'+kbr+'=2\\cos'+zp('\\frac{1}{2^n} \\arccos \\frac{x}{2}'),'|x|≤2'],
                        ['\\sqrt[2^n]{t}+\\frac{1}{\\sqrt[2^n]{t}}'+kbr+'= T^{\\frac{1}{2^n}}\\(\\frac{x}{2}\\)+T^{-\\frac{1}{2^n}}\\(\\frac{x}{2}\\)','|x|>2'],
                    ])
                ]),
                
            ]),


            khrA(['f_n'+kbr+'='+kroot('f_{n-1}+2'),
                '2，-1（舍去）'
            ]),

            khrA([]),
            khrA([]),
            khrA([]),
        ],













        [khrA([Eq(['\\frac{'+kroot('2x+2')+'}{2}',

                kroot('\\frac{x+1}{2}')
            ]),
            '见下'
            ]), 
            khrA([Eq(['2x^{2}-1',
                    'Q(2,0)',
                    '\\small '+piece(['\\cos 2θ，当|x|≤1',
                        '\\frac{1}{2}'+zp('t^2+\\frac{1}{t^2}')+'，当|x|>1'+kbr+
                        '=\\frac{1}{2}'+zp('T^2\\(x\\)+T^2\\(-x\\)')
                    ])
                ]),

                '令'+piece([['x=\\cos θ，'+kbr+'θ=\\arccos x','|x|≤1'],
                    ['2x=t+\\frac{1}{t}，'+kbr+'t=T(x)'+kbr+'-T(-x)=\\frac{1}{t}','|x|>1']
                ]),

            ]),

            khrA([Eq(['f_2=8x^4-8x^2+1',
                    '\\small '+piece([['\\cos 4θ=\\cos (4\\arccos x )','|x|≤1'],
                        ['\\frac{1}{2}'+zp('t^{4}+\\frac{1}{t^{4}}')+kbr+
                        '=\\frac{1}{2}'+zp('t^{4}+t^{-4}')+kbr+
                        '=\\frac{1}{2}'+zp('T^{4}\\(\\frac{x}{2}\\)+T^{4}\\(-\\frac{x}{2}\\)'),'|x|>1']
                    ])

                ]),

                Eq(['f_3',

                    '\\small '+piece([['\\cos 8θ=\\cos ( 8 \\arccos x )','|x|≤1'],
                        ['\\frac{1}{2}'+zp('t^{8}+\\frac{1}{t^{8}}')+kbr+
                        '=\\frac{1}{2}'+zp('t^{8}+t^{-8}')+kbr+
                        '=\\frac{1}{2}'+zp('T^{8}\\(\\frac{x}{2}\\)+T^{8}\\(-\\frac{x}{2}\\)'),'|x|>1']
                    ])

                ]),

                Eq(['f_n',

                    '\\small '+piece([['\\cos 2^nθ=\\cos ( 2^n \\arccos x ) '+kbr+'切比雪夫多项式','|x|≤1'],
                        ['\\frac{1}{2}'+zp('t^{2^n}+\\frac{1}{t^{2^n}}')+kbr+
                        '=\\frac{1}{2}'+zp('t^{2^n}+t^{-2^n}')+kbr+
                        '=\\frac{1}{2}'+zp('T^{2^n}\\(\\frac{x}{2}\\)+T^{2^n}\\(-\\frac{x}{2}\\)'),'|x|>1']
                    ])

                ]),
            ]),


            khrA(['2f_n'+kbr+'='+zp('2f_{n-1}')+'^2-2',
                '1，-\\frac{1}{2}'
            ]),

            khrA(['g(x)=2x','g_{-1}(x)=x\\/2']),
            khrA(['x^2-2','?']),
            khrA(['?','?']),
        ],
        






        [khrA(['2x^{2}-1',
        
            '见上',
            ]), 
            khrA([Eq(['\\frac{'+kroot('2x+2')+'}{2}',
                    kroot('\\frac{x+1}{2}'),
                 '\\small '+piece([['\\cos \\frac{θ}{2}','|x|≤1'],
                    ['\\frac{1}{2}'+zp('\\sqrt{t}+\\frac{1}{\\sqrt{t}}'),'|x|>1']
                    ])
                ]),
                '\\small 令'+piece([['x=\\cos θ，'+kbr+'θ=\\arccos x','|x|≤1'],
                    ['x=\\frac{1}{2}'+zp('t+\\frac{1}{t}')+'，'+kbr+'t=T(x)','|x|>1']
                ])


            ]),

            khrA(['f_2=\\frac{'+kroot(kroot('2x+2')+'+2')+'}{2}'+kbr+
                    '='+piece([['\\cos \\frac{θ}{4}','|x|≤1'],
                    ['\\frac{1}{2}'+zp('\\sqrt[4]{t}+\\frac{1}{\\sqrt[4]{t}}'),'|x|>1']
                ]),
                'f_3='+piece([['\\cos \\frac{θ}{8}','|x|≤1'],
                    ['\\frac{1}{2}'+zp('\\sqrt[8]{t}+\\frac{1}{\\sqrt[8]{t}}'),'|x|>1'],
                ]),



                Eq(['f_n',
                    '\\small '+piece([['\\cos \\frac{θ}{2^n}'+kbr+
                        ' = \\cos'+zp('\\frac{1}{2^n} \\arccos \\frac{x}{2}'),'|x|≤1'],

                        ['\\frac{1}{2}'+zp('\\sqrt[2^n]{t}+\\frac{1}{\\sqrt[2^n]{t}}')+kbr+
                        ' = \\frac{1}{2}'+zp('T^{\\frac{1}{2^n}}\\(\\frac{x}{2}\\)+T^{-\\frac{1}{2^n}}\\(\\frac{x}{2}\\)'),'|x|>1'],
                    ])
                ]),
            ]),


            khrA(['2f_n'+kbr+'='+kroot('2f_{n-1}+2'),
                '1，-\\frac{1}{2}'
            ]),

            khrA(['g(x)=2x','g_{-1}(x)=\\frac{x}{2}']),
            khrA([kroot('x+2'),'?']),
            khrA(['?','?']),
        ],












        [khrA([zp('\\frac{x+b}{a}')+'^{\\frac{1}{m}}-b',
                zp('\\frac{x+b}{a^{\\frac{1-m^n}{1-m}}}')+'^{\\frac{1}{m^n}} -b',
            ]), 
            khrA(['a(x+b)^m-b',
                'm=2时，'+kbr+'直线y=x过y=f(x)顶点'
            ]),


            khrA(['f_2=a^{m+1}(x+b)^{m^2}-b',
                'f_3=a^{m^2+m+1} (x+b)^{m^3}-b',
                'f_n=a^{\\frac {m^n-1}{m-1}} (x+b)^{m^n}-b',

            ]),

            khrA(['f_n+b'+kbr+'=a(f_{n-1}+b)^{m}',
                'm个不动点'
            ]), 
            
            khrA(['g(x)=x+b',
                'g_{-1}(x)=x-b'
            ]),
            khrA(['ax^m',
                'a^{\\frac {m^n-1}{m-1}} x^{m^n}'
            ]), 
            khrA([zp('\\frac{x}{a}')+'^{\\frac{1}m}',
                Eq(['x^{\\frac{1}{m^n}}a^{\\frac{1}{m-1}'+zp('\\frac{1}{m^n}-1')+'}',
                    zp('\\frac{x}{a^{\\frac{1-m^n}{1-m}}}')+'^{\\frac{1}{m^n}} '
                ]),
            ]),
        ],













        [khrA([Eq(['\\frac{\\frac{bc-ad}{x-\\frac{a}{c}}-cd}{c^2}',
                '\\frac{b-dx}{cx-a}',
                '-\\frac{dx-b}{cx-a}',
                '\\frac{-dx+b}{cx-a}',
                '-\\frac{d}{c} ⋅ \\frac{x-\\frac{b}{d}}{x-\\frac{a}{c}}',

                '-\\frac{d}{c}+\\frac{bc-ad}{c^2x-ca}'
                ]),
                
                '与原函数联系：','交换a,d，并取反',
                '对应逆矩阵M^{-1} = \\frac{1}{ad-bc}'+zmtrx(MfS('d -b -c a'))+'= -\\frac{1}{ad-bc}'+zmtrx(MfS('-d b c -a'))+kbr+'忽略矩阵前面系数'
            ]), 
            khrA([Eq(['\\frac {ax+b}{cx+d}',
                    '\\frac{a}{c} ⋅ \\frac{x+\\frac{b}{a}}{x+\\frac{d}{c}}',
                    '\\frac{a}{c}+\\frac{b-\\frac{ad}{c}}{cx+d}',
                    '\\frac{a}{c}+\\frac{bc-ad}{c^2x+cd}',
                    '\\frac{a}{c}+\\frac{\\frac{b}{c}-\\frac{ad}{c^2}}{x+\\frac{d}{c}}',
                ]),
                '有理差分方程','(a-d)^{2}+4bc ≠ 0 (A≠B)',
                '对应矩阵M='+zmtrx(MfS('a b c d')),
                '对应向量形式：M(x,1)^T'+kbr+'=(ax+b,cx+d)^T',

                '\\small 其中A,B =\\frac {a+d±{\\sqrt {(a-d)^{2}+4bc}}}{2}'+kbr+

                '即方程x^2-(a+d)x+ad-bc=0的两根'+kbr+
                'A+B=a+d，AB=ad-bc'+kbr+
                'A-B=\\sqrt {(a-d)^{2}+4bc}'+kbr+
                'A^2+B^2=(A+B)^2-2AB'+kbr+
                '=a^2+d^2+2bc'+kbr+
                'A^2+AB+B^2'+kbr+'=a^2+d^2+ad+bc'

            ]),

            khrA([
                'f_2=\\frac {a}{c}+\\frac {bc-ad}{c} \\[{\\frac { (cx-a)\\frac{1}{A+B}+1 }{ (cx-a)+\\frac{A^2+AB+B^2}{A+B} }}\\]'+kbr+
                '=\\frac {a}{c}+\\frac {bc-ad}{c} \\frac { cx+d }{ cx(a+d)+bc+d^2 }'+kbr+
                '=\\frac { (a^2+bc)x+b(a+d) }{ c(a+d)x+bc+d^2 }'+kbr+
                '对应矩阵M^2='+zmtrx([['a^2+bc','b(a+d)'],['c(a+d)','d^2+bc']]),

                'f_3=\\frac {a}{c}+ \\frac {bc-ad}{c} \\[{\\frac { (cx-a)\\frac{A+B}{A^2+AB+B^2}+1 }{ (cx-a)+\\frac{(A+B)(A^2+B^2)}{A^2+AB+B^2} }}\\]'+kbr+
                '=\\frac {a}{c}+\\frac {bc-ad}{c} \\frac { cx(a+d)+ d^2+bc}{ cx(a^2+d^2+ad+bc)+ abc+2bcd+d^3  }'+kbr+
                '=\\frac { x(a^3+2abc+bcd) +bc(a^2+ad+d^2+bc)    }{ cx(a^2+d^2+ad+bc)+ abc+2bcd+d^3  }'+kbr+
                '\\small 对应矩阵M^3 ='+zmtrx([['a^3+2abc+bcd','b(a^2+d^2+ad+bc)'],['c(a^2+d^2+ad+bc)','abc+2bcd+d^3']]),

                '\\small '+Eq(['f_n',
                    '\\frac {a}{c}+ \\frac {bc-ad}{c} \\[{\\frac {(cx-a+A)A^{n-1}-(cx-a+B)B ^{n-1}}{(cx-a+A )A ^{n}-(cx-a+B)B ^{n}}}\\]',
                    '\\frac {a}{c}+ \\frac {bc-ad}{c} \\[{\\frac { (cx-a)(A ^{n-1}-B ^{n-1})+A^{n}-B^{n} }{ (cx-a)(A ^{n}-B ^{n})+A^{n+1}-B^{n+1} }}\\]',
                    '\\frac {a}{c}+ \\frac {bc-ad}{c} \\[{\\frac { (cx-a)\\frac{A ^{n-1}-B ^{n-1}}{A^{n}-B^{n}}+1 }{ (cx-a)+\\frac{A^{n+1}-B^{n+1}}{A ^{n}-B ^{n}} }}\\]',
                    '\\frac{[(a-B)A^n-(a-A)B^n]x+b(A^n-B^n)}{c(A^n-B^n)x + [(d-B)A^n-(d-A)B^n]}',
                    '\\frac{[(a-B)A^n-(a-A)B^n]x+b(A^n-B^n)}{c(A^n-B^n)x + [(a-B)B^n-(a-A)A^n]}'
                    
                ]),
                'f 对应 矩阵M → f_n对应矩阵M^n'+kbr+
                '\\small ='+zmtrx([['(a-B)A^n-(a-A)B^n','b(A^n-B^n)'],['c(A^n-B^n)','(a-B)B^n-(a-A)A^n']])+kbr+
                '转化为求矩阵幂'+kbr+'（利用特征值，特征向量对角化）',

    
            ]),
        
            khrA(['不动点\\frac{a-d±\\sqrt {(a-d)^{2}+4bc} }{2c}']), 
            khrA([]),
            khrA([]), 
            khrA([]),
        ],


        [khrA([Eq(['\\frac{b-d}{x-1}-d',
                '\\frac{b-dx}{x-1}',
                '-\\frac{dx-b}{x-1}',
                '\\frac{-dx+b}{x-1}',
                '-d \\frac{x-\\frac{b}{d}}{x-1}',
                '-d+\\frac{b-d}{x-1}'
                ]),
                '与原函数联系：','交换1,d，并取反',
                '对应逆矩阵M^{-1} '+kbr+
                '= \\frac{1}{d-b}'+zmtrx(MfS('d -b -1 1'))+kbr+
                '= -\\frac{1}{d-b}'+zmtrx(MfS('-d b 1 -1'))+kbr+
                '忽略矩阵前面系数'
            ]), 
            khrA([Eq(['\\frac {x+b}{x+d}',
                    '1+\\frac{b-d}{x+d}',
                    '\\frac{1}{1+\\frac{d-b}{x+b}}',
                    ]),
                    '令a=c=1',
                    '(1-d)^{2}+4b ≠ 0 (A≠B)',
                    '对应矩阵M='+zmtrx(MfS('1 b 1 d')),
                    '\\small 其中A,B =\\frac {1+d±{\\sqrt {(1-d)^{2}+4b}}}{2}'+kbr+
                    '即方程x^2-(1+d)x+d-b=0的两根'+kbr+
                    'A+B=1+d，'+kbr+'AB=d-b'+kbr+
                    'A-B=\\sqrt {(1-d)^{2}+4b}'+kbr+
                    'A^2+B^2=(A+B)^2-2AB'+kbr+'=1+d^2+2b'+kbr+
                    'A^2+AB+B^2'+kbr+'=1+d^2+d+b'
                ]),

            khrA([
                'f_2=1+(b-d) \\[{\\frac { (x-1)\\frac{1}{A+B}+1 }{ (x-1)+\\frac{A^2+AB+B^2}{A+B} }}\\]'+kbr+
                '=1+(b-d) \\frac { x+d }{ x(1+d)+b+d^2 }'+kbr+
                '=\\frac { x(1+b)+b(1+d) }{ x(1+d)+b+d^2 }'+kbr+
                '对应矩阵M^2='+zmtrx([['1+b','b(1+d)'],['1+d','d^2+b']]),

                'f_3=1+(b-d) \\[{\\frac { (x-1)\\frac{A+B}{A^2+AB+B^2}+1 }{ (x-1)+\\frac{(A+B)(A^2+B^2)}{A^2+AB+B^2} }}\\]'+kbr+
                '=1+(b-d) \\frac { x(1+d)+b+ d^2}{ x(1+d^2+d+b)+ b+2bd+d^3  }'+kbr+
                '=\\frac {x(1+b+b(1+d))+ b(1+d)+b(b+d^2) }{ x(1+b+d(1+d))+ b(1+d)+d(b+d^2)  }'+kbr+
                '=\\frac {x(1+2b+bd)+ b(1+b+d+d^2) }{ x(1+b+d+d^2)+ b+2bd+d^3  }'+kbr+
                '对应矩阵M^3 ='+zmtrx([['1+2b+bd','b(1+d^2+d+b)'],['1+d^2+d+b','b+2bd+d^3']]),


                '\\small '+Eq(['f_n','1+(b-d)\\[{\\frac {(x-1+A)A^{n-1}-(x-1+B)B ^{n-1}}{(x-1+A )A ^{n}-(x-1+B)B ^{n}}}\\]',
                    '1+(b-d)\\[{\\frac { (x-1)(A ^{n-1}-B ^{n-1})+A^{n}-B^{n} }{ (x-1)(A ^{n}-B ^{n})+A^{n+1}-B^{n+1} }}\\]',
                    '1+ (b-d) \\[{\\frac { (x-1)\\frac{A ^{n-1}-B ^{n-1}}{A^{n}-B^{n}}+1 }{ (x-1)+\\frac{A^{n+1}-B^{n+1}}{A ^{n}-B ^{n}} }}\\]',
                    '\\frac{[(1-B)A^n-(1-A)B^n]x+b(A^n-B^n)}{(A^n-B^n)x + [(d-B)A^n-(d-A)B^n]}',
                    '\\frac{[(1-B)A^n-(1-A)B^n]x+b(A^n-B^n)}{(A^n-B^n)x + [(1-B)B^n-(1-A)A^n]}',

                ])+kbr+
                '\\small 对应矩阵M^n ='+zmtrx([['(1-B)A^n-(1-A)B^n','b(A^n-B^n)'],['A^n-B^n','(1-B)B^n-(1-A)A^n']]),

                
            ]),
        
            khrA(['不动点\\frac{1-d±\\sqrt {(d-1)^{2}+4b} }{2}']), 
            khrA([]),
            khrA([]), 
            khrA([]),
        ],







        [khrA([
                '\\frac{ax+b}{cx-a}',
                
                '与原函数联系：相等'
            ]), 
            khrA([Eq(['\\frac {ax+b}{cx-a}',
                    '\\frac{a}{c} ⋅ \\frac{x+\\frac{b}{a}}{x-\\frac{a}{c}}',
                    '\\frac{a}{c}+\\frac{b+\\frac{a^2}{c}}{cx-a}',
                    '\\frac{a}{c}+\\frac{a^2+bc}{c^2x-ca}',
                    '\\frac{a}{c}+\\frac{\\frac{b}{c}+\\frac{a^2}{c^2}}{x-\\frac{a}{c}}',
                    
                ]),
                '令d=-a','a^{2}+bc ≠ 0 (A≠B)',
                '对应矩阵M='+zmtrx(MfS('a b c -a'))
            ]),

            khrA([
                'f_2=x'+kbr+
                '对应矩阵M^2=(a^2+bc)E'+kbr+
                '其中E是单位矩阵',

                'f_3=f ~对应矩阵(a^2+bc)M',

                '\\small f_n='+piece([['f',kmod('n',1,2)],['x',kmod('n',0,2)]]),
                'f 对应 矩阵M → f_n对应矩阵M^n'+kbr+
                '='+piece([['(a^2+bc)^{\\frac{n-1}2}M',kmod('n',1,2)],['(a^2+bc)^{\\frac{n}2}E',kmod('n',0,2)]]),

                '其中A,B =±\\sqrt {a^2+bc}'+kbr+
                '即方程x^2=a^2+bc的两根'+kbr+
                'A+B=0，AB=-(a^2+bc)'+kbr+
                'A-B=2\\sqrt {a^2+bc}'+kbr+
                'A^2+B^2=(A+B)^2-2AB=2(a^2+bc)'+kbr+
                'A^2+AB+B^2=a^2+bc'

            ]),
        
            khrA(['f_n-\\frac{a}{c}=\\frac{\\frac{b}{c}+\\frac{a^2}{c^2}}{f_{n-1}-\\frac{a}{c}}',
                '不动点\\frac{a±\\sqrt {a^2+bc} }{c}'+kbr+
                '=\\frac{a}{c}±\\sqrt{\\frac{a^2}{c^2}+\\frac{b}{c}}'
            ]), 
            khrA([]),
            khrA([]), 
            khrA([]),
        ],







    
        [khrA([Eq(['\\frac{1}{x-1}',
            ])+kbr+
            '与原函数联系：'+kbr+
            '交换1,0，并取反'+kbr+
            '对应矩阵M^{-1}='+zmtrx(MfS('011-1')),

            '\\tiny '+Eq(['(-1)^n\\frac{F_{n-1}x-F_{n}}{-F_{n}x+F_{n+1}}',
                '(-1)^n\\frac{(A^{n-1}-B^{n-1})x-(A^{n}-B^{n})}{-(A^{n}-B^{n})x+(A^{n+1}-B^{n+1})}',
            ])+kbr+
            '对应矩阵M^n=(-1)^n'+zmtrx(MfS('F_{n-1} -F_{n} -F_{n} F_{n+1}')),
        ]), 
        khrA([Eq(['\\frac {x+1}{x}',
                '1+\\frac{1}{x}',
                '\\frac{1}{1-\\frac{1}{x+1}}',

            ]),
            '令a=b=c=1，d=0',
            '对应矩阵M='+zmtrx(MfS('1110')),


            '\\small 其中A,B =\\frac {1±{\\sqrt {5}}}{2}=Φ，1-Φ'+kbr+
            '即方程x^2-x-1=0的两根'+kbr+
            'A+B=1，AB=-1'+kbr+
            'A-B=\\sqrt {5}'+kbr+
            'A^2+B^2=(A+B)^2-2AB=3'+kbr+
            'A^2+AB+B^2=2'+kbr+
            'A^n-B^n=\\sqrt{5}F_n'+kbr+
            'F_{n+1}=F_{n}+F_{n-1}'
        ]),

        khrA([
            'f_2=1+\\frac {x}{x+1 }'+kbr+
            '=\\frac { 2x+1}{ x+1 }'+kbr+
            '对应矩阵M^2='+zmtrx(MfS('2111')),

            'f_3=1+\\[{\\frac { (x-1)\\frac{1}{2}+1 }{ (x-1)+\\frac{3}{2} }}\\]'+kbr+
            '=1+\\frac { x+1}{ 2x+1}'+kbr+
            '=\\frac {3x+2 }{ 2x+1 }'+kbr+
            '对应矩阵M^3='+zmtrx(MfS('3221')),


            '\\small '+Eq([['f_n',
                '1+\\frac {(x-B)A^{n-1}-(x-A)B ^{n-1}}{(x-B )A ^{n}-(x-A)B ^{n}}'],
                '1+\\frac {(x-1+A)A^{n-1}-(x-1+B)B ^{n-1}}{(x-1+A )A ^{n}-(x-1+B)B ^{n}}',
                '1+\\frac { (x-1)(A ^{n-1}-B ^{n-1})+A^{n}-B^{n} }{ (x-1)(A ^{n}-B ^{n})+A^{n+1}-B^{n+1} }',
                '1+ \\frac { (x-1)\\frac{A ^{n-1}-B ^{n-1}}{A^{n}-B^{n}}+1 }{ (x-1)+\\frac{A^{n+1}-B^{n+1}}{A ^{n}-B ^{n}} }',
                '\\frac { (x-1)\\(\\frac{A ^{n-1}-B ^{n-1}}{A^{n}-B^{n}}+1\\)+\\frac{A^{n+1}-B^{n+1}}{A ^{n}-B ^{n}}+1 }{ (x-1)+\\frac{A^{n+1}-B^{n+1}}{A ^{n}-B ^{n}} }',


                '\\frac { x\\frac{A ^{n+1}-B ^{n+1}}{A^{n}-B^{n}}+1 }{ x+\\frac{A^{n-1}-B^{n-1}}{A ^{n}-B ^{n}} }',

                '\\frac {(A ^{n+1}-B ^{n+1})x+(A ^{n}-B ^{n}) }{(A ^{n}-B ^{n})x+ (A ^{n-1}-B ^{n-1})}',
            ])+kbr+
            '对应矩阵M^n='+zmtrx(MfS('F_{n+1} F_{n} F_{n} F_{n-1}')),

            
        ]),

        khrA(['不动点Φ，1-Φ']), 
        khrA([]),
        khrA([]), 
        khrA([]),
    ],





    
    [khrA([Eq(['\\frac {x+1}{x}',
            '1+\\frac{1}{x}',
            '\\frac{1}{1-\\frac{1}{x+1}}',

        ])+kbr+
        '与原函数联系：'+kbr+
        '交换0,-1，并取反'+kbr+
        '对应矩阵M^{-1}='+zmtrx(MfS('1110')),

        '\\small '+Eq([
            '\\frac {(A ^{n+1}-B ^{n+1})x+(A ^{n}-B ^{n}) }{(A ^{n}-B ^{n})x+ (A ^{n-1}-B ^{n-1})}',
        ])+kbr+
        '对应矩阵M^{-n}'+kbr+'='+zmtrx(MfS('F_{n+1} F_{n} F_{n} F_{n-1}')),
        ]), 
        khrA([Eq(['\\frac{1}{x-1}',
            ]),
            '令b=c=1，'+kbr+'d=-1，a=0',
            '对应矩阵M='+zmtrx(MfS('011-1')),

            '\\small 其中A,B =\\frac {1±{\\sqrt {5}}}{2}=Φ，1-Φ'+kbr+
            '即方程x^2-x-1=0的两根'+kbr+
            'A+B=1，AB=-1'+kbr+
            'A-B=\\sqrt {5}'+kbr+
            'A^2+B^2=(A+B)^2-2AB=3'+kbr+
            'A^2+AB+B^2=2'+kbr+
            'A^n-B^n=\\sqrt{5}F_n'+kbr+
            'F_{n+1}=F_{n}+F_{n-1}'
        ]),

        khrA([
            Eq([['f_2','\\frac {x-1}{-x+2 }'],
            '-\\frac {x-1}{ x-2}'])+kbr+
            '对应矩阵M^2='+zmtrx(MfS('1-1-12')),

            Eq([['f_3','\\frac {-x+2  }{2x-3}'],
            '-\\frac {x-2 }{ 2x-3 }'])+kbr+
            '对应矩阵M^3='+zmtrx(MfS('-122-3')),

        '\\small '+Eq([['f_n','(-1)^n\\frac{F_{n-1}x-F_{n}}{-F_{n}x+F_{n+1}}'],
            '(-1)^n\\frac{(A^{n-1}-B^{n-1})x-(A^{n}-B^{n})}{-(A^{n}-B^{n})x+(A^{n+1}-B^{n+1})}',
            ])+kbr+
            '对应矩阵M^n=(-1)^n'+zmtrx(MfS('F_{n-1} -F_{n} -F_{n} F_{n+1}')),
        


        
        ]),

        khrA(['不动点Φ，1-Φ']), 
        khrA([]),
        khrA([]), 
        khrA([]),
    ],


















        [khrA(['\\sqrt{x^2-b}',
                '\\sqrt{x^2-nb}'
            ]), 
            khrA(['\\sqrt{x^2+b}']),

            khrA(['f_2=\\sqrt{x^2+2b}', 
                'f_3=\\sqrt{x^2+3b}',
                'f_n=\\sqrt{x^2+nb}'
            ]),
            khrA(['f_n^2-f_{n-1}^2=b',
                '无不动点(b≠0时)'
            ]),

            khrA([]),
            khrA([]), 
            khrA([]),
        ],



        [khrA([kroot('\\frac{x^2-b}{a}')+'='+kroot('\\frac{x^2}{a}'+'-\\frac{b}{a}'),
                kroot('\\frac{x^2}{a^n}  + \\frac{b}{1-a}'+zp('1-\\frac{1}{a^n}'))
            ]), 
            khrA(['\\sqrt{ax^2+b}','a≠1',
            ]),

            khrA(['f_2=\\sqrt{a^2x^2+(a+1)b}', 
                'f_3=\\sqrt{a^3x^2+(a^2+a+1)b}',
                'f_n=\\sqrt{a^nx^2+\\frac{a^n-1}{a-1}b}'+kbr+
                '=\\sqrt{a^n\\( x^2+\\frac{b}{a-1} \\)  -\\frac{b}{a-1}}'
            ]),
            khrA(['f_n^2-\\frac{b}{1-a}'+kbr+' = a'+zp('f_{n-1}^2-\\frac{b}{1-a}'),
                kroot('\\frac{b}{1-a}')
            ]),

            khrA(['g(x)=x^2-\\frac{b}{1-a}',
                'g_{-1}(x)=\\sqrt{x+\\frac{b}{1-a}}',
            ]),
            khrA(['ax','a^nx']), 
            khrA(['x\\/a','x\\/{a^n}']),
            
        ],


        [khrA(['T_{-m}(x)'+kbr+'=\\cos(m^{-1} \\arccos x)'
            ]), 
            khrA(['T_m(x)=\\cos(m \\arccos x)','整数m的切比雪夫多项式',
                '在[-1,1]有m个不同实根'+kbr+'\\cos \\frac{(2k-1)π}{2m}，k=1,2,⋯,n',
            ]),

            khrA(['T_{2m}(x)=\\cos(2m \\arccos x)', 
                'T_{3m}(x)=\\cos(3m \\arccos x)',
                'T_{nm}(x)=\\cos(nm \\arccos x)'
            ]),
            khrA(['\\arccos f_n'+kbr+'=m \\arccos f_{n-1}','0']),

            khrA(['g(x)=\\arccos x','g_{-1}(x)=\\cos x']),
            khrA(['mx','m^nx']), 
            khrA(['x\\/m','x\\/{m^n}']),
            
        ],



        [khrA([zp(kroot('x','a')+'-1')+'^a',
            zp(kroot('x','a')+'-n')+'^a'
            ]), 
            khrA([zp(kroot('x','a')+'+1')+'^a',
            ]),

            khrA(['f_2='+zp(kroot('x','a')+'+2')+'^a', 
                'f_3='+zp(kroot('x','a')+'+3')+'^a', 
                'f_n='+zp(kroot('x','a')+'+n')+'^a'
                
            ]),
            khrA([kroot('f_n','a')+'-'+kroot('f_{n-1}','a')+'=1',
                '无不动点'
            ]),

            khrA([]),
            khrA([]), 
            khrA([]),
            
        ],




        
        [khrA([Eq(['-\\frac{'+kroot('2-2x')+'}{2}+\\frac {1}{2}',
                '-'+kroot('\\frac{1-x}{2}')+'+\\frac {1}{2}'
                ]),
                '\\small '+
                '当\\left |-2x+1\\right |≤1时'+kbr+Eq(['f_{-n}',
                    '\\frac{1}{2}+2\\cos 2^{-n}θ',
                    '\\frac{1}{2}+2\\cos \\(2^{-n}\\arccos \\frac{2ax+b}{4}\\)',


                ])+kbr+
                '当\\left | -2x+1\\right |>1时'+kbr+Eq(['f_n',
                    '-\\frac {t^{2^{-n}}+t^{-2^{-n}}-2}{4}',
                    '-\\frac {t^{2^{-n}}+t^{-2^{-n}}}{4}+\\frac{1}{2}',
                    '-\\frac{1}{4} '+zp('t^{2^{-n}}+t^{-2^{-n}} - 2'),
                    '-\\frac{1}{4} '+zp('T^{2^{-n}}(-2x+1) + T^{2^{-n}}(2x-1) -2'),


                ])
            ]), 
            khrA([Eq(['-4x^2+4x',
                    '4x-4x^2', 
                    '4x(1-x)',                   
                    '2x(2-2x)',
                    '1-(2x-1)^2',
                    '1-(1-2x)^2',
                    '(2\\sqrt{x}\\sqrt{1-x})^2',
                    'Q(-4,4)'
                ])
            ]),

            khrA(['f_2=', 
                'f_3=',
                'f_n=\\sin ^2'+zp('2^n\\arcsin \\sqrt{x}')
                
            ]),
            khrA(['1-f_n=1-f_{}',
                
                '不动点0,\\frac{3}{4}'
            ]),

            khrA([]),
            khrA([]), 
            khrA([]),
            
        ],



        [khrA(['\\sqrt{x+1}-1',
            kroot('x+1','2^n')+'-1',
            ]), 
            khrA([Eq(['x^2+2x',
                    'x(x+2)',
                    '(x+1)^2-1',
                    'P(1,2)'
                ])
            ]),

            khrA(['f_2=(x+1)^{4}-1', 
                'f_3=(x+1)^{8}-1',
                'f_n=(x+1)^{2^n}-1'
                
            ]),
            khrA(['f_{n}+1=(f_{n-1}+1)^2',
                '不动点'
            ]),

            khrA(['g(x)=x+1','g_{-1}(x)=x-1']),
            khrA(['x^2','x^{2^n}']), 
            khrA(['x^{\\frac{1}{2}}','x^{\\frac{1}{2^n}}']),
            
        ],


        [khrA([''+kbr+'='
            ]), 
            khrA([Eq(['\\frac{x}{\\sqrt{1+x^2}}',
                ])
            ]),

            khrA(['f_2=', 
                'f_3=',
                'f_n=\\frac{x}{\\sqrt{1+nx^2}}'
                
            ]),
            khrA(['f_{n}',
                '不动点'
            ]),

            khrA(['g(x)=','g_{-1}(x)=']),
            khrA([]), 
            khrA([]),
            
        ],

    ],'wiki TBrc').replace(/\n/g,br))

    


)+refer([
    enwiki('Iterated_function','2020-11-27'),
    enwiki('Periodic_point','2020-11-27'),
    href(Hs+'www.zhihu.com/question/389575957/answer/1170540587','如何求一个函数的n次迭代? 知乎'),
    href(H+'academic.hep.com.cn/fcse/CN/chapter/978-7-04-037585-5/titlepage','动力系统引论'),
    href(Hs+'wenku.baidu.com/view/4d5d87c589eb172ded63b77f.html','关于线性分式函数的n次迭代及其应用'),
    href(Hs+'wenku.baidu.com/view/8701ac63a98271fe910ef912.html','函数的n次迭代与多项式递推数列通项问题'),
    inhref('explore.html?q=Problem/Problem List'),
    inhref('wiki.html?q=Formula/Sequence/Sum'),
]);