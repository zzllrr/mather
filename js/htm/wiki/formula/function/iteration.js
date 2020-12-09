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
                '共轭函数，共轭关系，等价关系',
                'f,h拓扑半共轭（g满连续映射）：'+kbr+'h∘g=g∘f',
                'f,h拓扑共轭（同构）:'+kbr+'拓扑半共轭+g同胚',
                '同胚：双连续'+kbr+'（双射，且f与f_{-1}都连续）',
                '选择桥函数的方法：'+kbr+
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
                Eq(['g_{-1}'+zp('\\frac{g(x)}{a^n}+\\frac{b}{1-a}'+zp('1-\\frac{1}{a^n}')),

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
                piece([['x',kmod('n','0','2')], ['f=f_{-1}',kmod('n','1','2')]])+kbr+
                '周期2'

            ]), 
            khrA(['-x','\\frac{1}x','-\\frac{1}x']),
            khrA([piece([['x',kmod('n','0','2')], ['f_{-1}',kmod('n','1','2')]])+kbr+
                 '周期2（自逆，x,y对称性，函数图像关于y=x对称）',
                     
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
                piece([['x',kmod('n','0','3')], ['f_{-1}',kmod('n','1','3')], ['f',kmod('n','2','3')]])+kbr+
                '周期3',
            ]), 
            khrA([Eq(['1-\\frac{1}x','\\frac{x-1}x'])]),
            khrA(['f_2=\\frac{1}{1-x}'+kbr+'（恰好是反函数）', 
                'f_3=x',
                'f_n='+piece([['x',kmod('n','0','3')], ['f',kmod('n','1','3')], ['f_2=f_{-1}',kmod('n','2','3')]])+kbr+
                '周期3',
                 'W(ω^n)x + W(ω^{n+2})f + W(ω^{n+1})f_{-1}',
                    
                '=\\frac{(ω^{2n}+ω^n+1)x}{3}'+kbr+'+\\frac{(ω^{2n+4}+ω^{n+2}+1)f}{3}'+kbr+'+\\frac{(ω^{2n+2}+ω^{n+1}+1)f_{-1}}{3}',

                '=\\frac{(ω^{-n}+ω^n+1)x}{3}'+kbr+'+\\frac{(ω^{1-n}+ω^{n-1}+1)f}{3}'+kbr+'+\\frac{(ω^{-n-1}+ω^{n+1}+1)f_{-1}}{3}',

                '=ω^{-n}'+zp('x + ω(1-\\frac{1}x)+ω^2 \\frac{1}{1-x} ')+kbr+
                '+ω^n'+zp('x + ω^2(1-\\frac{1}x)+ω \\frac{1}{1-x}')+kbr+
                '+x + 1-\\frac{1}{x}+\\frac{1}{1-x} ',
                '（其中ω是3次单位原根）'+kbr+
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
                piece([['x',kmod('n','0','3')], ['f_{-1}',kmod('n','1','3')], ['f',kmod('n','2','3')]])+kbr+
                '周期3',
            ]), 
            khrA(['\\frac{1}{1-x}']),
            khrA(['f_2=1-\\frac{1}x=\\frac{x-1}x'+kbr+'（恰好是反函数）', 
                'f_3=x',
                'f_n='+piece([['x',kmod('n','0','3')], ['f',kmod('n','1','3')], ['f_{-1}',kmod('n','2','3')]])+kbr+
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




        [khrA(['1-\\sqrt{1-x}',
                '1-'+kroot('1-x','2^n')
            ]), 
            khrA([Eq(['-x^2+2x','x(2-x)','2x-x^2','1-(1-x)^2'])]),

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
                'e^{\\sh ^{-1} x}'
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
                'e^{\\sh ^{-1} x}'
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
            khrA(['x^2-2']),
            khrA(['f_2=(x^2-2)^2-2=x^4-4x^2+2', 
                'f_3=((x^2-2)^2-2)^2=(x^2-2)^4-4(x^2-2)^2+4=x^8-8x^6+20x^4-16x^2+4',
                'f_n=',
            ]),
            khrA(['f_n-1'+kbr+'=\\sqrt{f_{n-1}-1}','-1,2']),

            
             
            khrA(['g(x)=\\frac{x-2}{x+1}=1-\\frac{3}{x+1}','g_{-1}(x)=\\frac{3}{1-x}-1=\\frac{x+2}{1-x}']),
            khrA(['\\sqrt{x}',kroot('x','2^n')]),
            khrA(['x^2','x^{2^n}']),


        ],





        [khrA(['\\frac{'+kroot('ax+\\frac {b}{2}')+'}{a}-\\frac {b}{2a}',
            '\\frac{'+kroot('ax+\\frac {b}{2}','2^n')+'}{a}-\\frac {b}{2a}',
            ]), 
                khrA([Eq(['ax^{2}+bx+\\frac {b^{2}-2b}{4a}',
                'ax^{2}+bx+\\frac {b(b-2)}{4a}',
                'a'+zp('x+\\frac{b}{2a}')+'^2-\\frac {b}{2a}'])
            ]),


            khrA(['f_2=\\frac{'+zp('ax+\\frac{b}{2}')+'^{4}}{a}-\\frac{b}{2a}',
                'f_3=\\frac{'+zp('ax+\\frac{b}{2}')+'^{8}}{a}-\\frac{b}{2a}',
                'f_n=\\frac {2A^{2^{n}}-b}{2a}=\\frac {A^{2^{n}}-b\\/2}{a}=\\frac{'+zp('ax+\\frac{b}{2}')+'^{2^n}}{a}-\\frac{b}{2a}',
                '其中A =\\frac {2ax+b}{2}=ax+b\\/2',
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
                '\\frac{'+kroot('ax+\\frac {b+4}{2}','2^n')+'}{a}-\\frac {b}{2a}',
            ]), 
            khrA([Eq(['ax^{2}+bx+\\frac {b^{2}-2b-8}{4a}',
                    'ax^{2}+bx+\\frac {(b-4)(b+2)}{4a}',
                    'a'+zp('x+\\frac{b}{2a}')+'^2-\\frac {b+4}{2a}'])
            ]),

            khrA(['f_2=\\frac {A^{4}+A ^{-4}}{a}-\\frac{b}{2a}',
                'f_3=\\frac {A^{8}+A ^{-8}}{a}-\\frac{b}{2a}',

                'f_n=\\frac {2A^{2^{n}}+2A ^{-2^{n}}-b}{2a}=\\frac {A^{2^{n}}+A ^{-2^{n}}}{a}-\\frac{b}{2a}',
                '其中A =\\frac {2ax+b± {\\sqrt {(2ax+b)^{2}-16}}}{4}'+kbr+
                '设t=\\frac {2ax+b}{2}=ax+b\\/2'+kbr+
                'A +1\\/A=t，A^2+\\frac{1}{A^2}=t^2-2',
            ]),


            khrA(['af_n+b\\/2'+kbr+'='+zp('af_{n-1}+b\\/2')+'^2-2',
                '\\frac{4-b}{2a}，\\frac{-2-b}{2a}'
            ]),

            khrA(['g(x)=ax+b\\/2','g_{-1}(x)=x\\/a-b\\/{2a}']),
            khrA(['x^2-2','?']),
            khrA(['?','?']),
        ],
        


        [khrA([Eq(['\\frac{\\frac{bc-ad}{x-\\frac{a}{c}}-cd}{c^2}',
                '\\frac{b-dx}{cx-a}',
                '-\\frac{dx-b}{cx-a}',
                '\\frac{-dx+b}{cx-a}',
                '与原函数联系：交换a,d，并取反',
                '-\\frac{d}{c} ⋅ \\frac{x-\\frac{b}{d}}{x-\\frac{a}{c}}',
                ])
            ]), 
            khrA([Eq(['\\frac {ax+b}{cx+d}',
                    '\\frac{a}{c} ⋅ \\frac{x+\\frac{b}{a}}{x+\\frac{d}{c}}',
                    '\\frac{a}{c}+\\frac{b-\\frac{ad}{c}}{cx+d}',
                    '\\frac{a}{c}+\\frac{bc-ad}{c^2x+cd}'
                    ]),'有理差分方程']),

            khrA([
                'f_n=\\frac {a}{c}+{\\frac {bc-ad}{c}}\\[{\\frac {(cx-a+A)A^{n-1}-(cx-a+B)B ^{n-1}}{(cx-a+A )A ^{n}-(cx-a+B)B ^{n}}}\\]',
                '其中A,B =\\frac {a+d±{\\sqrt {(a-d)^{2}+4bc}}}{2}'+kbr+
                'A+B=a+d，AB=ad-bc'+kbr+
                'A-B=\\sqrt {(a-d)^{2}+4bc}'
            ]),
        
            khrA([]), 
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



        [khrA([kroot('\\frac{x^2-b}{a}'),
                kroot('\\frac{x^2}{a^n}  + \\frac{b}{1-a}'+zp('1-\\frac{1}{a^n}'))
            ]), 
            khrA(['\\sqrt{ax^2+b}','a≠1',
            ]),

            khrA(['f_2=\\sqrt{a^2x^2+(a+1)b}', 
                'f_3=\\sqrt{a^3x^2+(a^2+a+1)b}',
                'f_n=\\sqrt{a^nx^2+\\frac{a^n-1}{a-1}b}'
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


    ],'wiki TBrc').replace(/\n/g,br))

    


)+refer([
    enwiki('Iterated_function','2020-11-27'),
    enwiki('Periodic_point','2020-11-27'),
    href(Hs+'www.zhihu.com/question/389575957/answer/1170540587','如何求一个函数的n次迭代? 知乎'),
    href(H+'academic.hep.com.cn/fcse/CN/chapter/978-7-04-037585-5/titlepage','动力系统引论'),
    inhref('explore.html?q=Problem/Problem List'),
    inhref('wiki.html?q=Formula/Sequence/Sum'),
]);