/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Iteration']=Kx(
    detail(gM('Iteration')+ksc('f→f_2→f_n~(f_0=x,~f_1=f, f_2=f(f(x)))'),Table([['f_{1\\/2}','函数f=f_1','迭代2次f_2','迭代3次f_3','n次迭代f_n']],[
        
        [khrA(['?'
            ]), 
            khrA(['x+b', piece([['全是不动点','b=0时'],['无不动点','b≠0时']])]),
            khrA(['x+2b']), 
            khrA(['x+3b']),
            khrA(['x+nb',
            '递推式f_n-f_{n-1}=b']),
        ],

        [khrA(['?'
            ]), 
            khrA(['ax+b','a≠1','不动点\\frac{b}{1-a}']),
            khrA(['a^2x+ab+b']), 
            khrA(['a^3x+a^2b+ab+b']),
            khrA(['a^nx+\\frac{a^n-1}{a-1}b',
            '递推式f-\\frac{b}{1-a} = a'+zp('x-\\frac{b}{1-a}')]),
        ],

        [khrA(['?'
            ]), 
            khrA(['ax^b','b≠1','不动点0, a^{-\\frac{1}{b-1}}']),
            khrA(['a^{b+1}x^{b^2}']), 
            khrA(['a^{b^2+b+1}x^{b^3}']),
            khrA(['a^{\\frac {b^n-1}{b-1}} x^{b^n}',
            '递推式fa^{\\frac{1}{b-1}}='+zp('xa^{\\frac{1}{b-1}}')+'^b']),
        ],

        [khrA(['?'
            ]), 
            khrA(['1-\\frac{1}x','\\frac{x-1}x','不动点\\frac{1±\\sqrt{-3}}{2}']),
            khrA(['\\frac{1}{1-x}','恰好是反函数']), 
            khrA(['x']),
            khrA([piece([['x',kmod('n','0','3')], ['f',kmod('n','1','3')], ['f_{-1}',kmod('n','2','3')]]),
            '递推式f']),
        ],

        [khrA(['?'
            ]), 
            khrA(['\\frac{1}{1-x}','不动点\\frac{1±\\sqrt{-3}}{2}']),
            khrA(['1-\\frac{1}x','\\frac{x-1}x','恰好是反函数']), 
            khrA(['x']),
            khrA([piece([['x',kmod('n','0','3')], ['f',kmod('n','1','3')], ['f_{-1}',kmod('n','2','3')]]),
            '递推式f']),
        ],




        [khrA(['?'
            ]), 
            khrA(['-x^2+2x=x(2-x)=2x-x^2','1-(1-x)^2','不动点0,1']),
            khrA(['1-(1-x)^4']), 
            khrA(['1-(1-x)^8']),
            khrA(['1-(1-x)^{2^n}',
            '递推式1-f=(1-x)^2']),
        ],


        [khrA(['?'
            ]), 
            khrA(['x^2-2x+2=(x-1)^2+1','不动点1,2']),
            khrA(['(x-1)^4+1']), 
            khrA(['(x-1)^8+1']),
            khrA(['(x-1)^{2^n}+1',
            '递推式f-1=(x-1)^2']),
        ],



        [khrA(['?'
            ]), 
            khrA(['1-\\sqrt{1-x}','不动点0,1']),
            khrA(['1-'+kroot('1-x',4)]), 
            khrA(['1-'+kroot('1-x',8)]),
            khrA(['1-(1-x)^{\\frac{1}{2^n}}',
            '递推式1-f=\\sqrt{1-x}']),
        ],

        [khrA(['?'
            ]), 
            khrA(['1+\\sqrt{x-1}','不动点1,2']),
            khrA(['1+'+kroot('x-1',4)]), 
            khrA(['1+'+kroot('x-1',8)]),
            khrA(['1+(x-1)^{\\frac{1}{2^n}}',
            '递推式f-1=\\sqrt{x-1}']),
        ],





        [khrA(['?'
            ]), 
            khrA(['\\frac{x^2}{2x-1}','不动点0,1']),
            khrA(['\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^4}']), 
            khrA(['\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^8}']), 
            khrA(['\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{2^n}}',
            '递推式1-\\frac{1}{f}='+zp('1-\\frac{1}{x}')+'^2']),
        ],

        [khrA(['?'
            ]), 
            khrA(['不动点']),
            khrA(['\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^4}']), 
            khrA(['\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^8}']), 
            khrA(['\\frac{1}{1-'+zp('1-\\frac{1}{x}')+'^{2^n}}',
            '递推式1-\\frac{1}{f}='+zp('1-\\frac{1}{x}')+'^{\\frac{1}{2}}']),
        ],




        [khrA(['?'
            ]), 
            khrA(['ax^{2}+bx+\\frac {b^{2}-2b}{4a}',[
                '两个不动点\\frac{-b}{2a}，\\frac{2-b}{2a}',
                
                ].join(kbr)
            ]),
            khrA([]), 
            khrA([]),
            khrA(['\\frac {2α^{2^{n}}-b}{2a}=\\frac {α^{2^{n}}-b\\/2}{a}=\\frac{'+zp('ax+\\frac{b}{2}')+'^{2^n}}{a}-\\frac{b}{2a}',
                '其中α =\\frac {2ax+b}{2}=ax+b\\/2',
                '设φ(x)=\\frac{x-\\frac{2-b}{2a}}{x-'+zp('\\frac{-b}{2a}')+'}=1-\\frac{2}{2ax+b}',
                'φ^{-1}(x)=\\frac{1}{a(1-x)}-\\frac{b}{2a}',
                '设g(x)=φ(f(φ^{-1}(x)))=x(2-x)',
                'g_{n}(x)=1-(1-x)^{2^n}',
                'f_n(x)=φ^{-1}(g_n(φ(x))',
                '递推式af+\\frac{b}2='+zp('ax+\\frac{b}{2}')+'^{2}'
            ]),
        ],

        [khrA(['?'
            ]), 
            khrA(['ax^{2}+bx+\\frac {b^{2}-2b-8}{4a}',
                ['两个不动点\\frac{4-b}{2a}，\\frac{-2-b}{2a}',
                
                ].join(kbr)
            ]),
            khrA([]), 
            khrA([]),
            khrA(['\\frac {2α^{2^{n}}+2α ^{-2^{n}}-b}{2a}',
                '其中α =\\frac {2ax+b± {\\sqrt {(2ax+b)^{2}-16}}}{4}',
                't=\\frac {2ax+b}{2}=ax+b\\/2',
                'α +1\\/α=t',
                '递推式af+b\\/2='+zp('ax+b\\/2')+'^2'
            ]),
        ],
        


        [khrA(['?'
            ]), 
            khrA(['\\frac {ax+b}{cx+d}','有理差分方程','不动点']),
            khrA([]), 
            khrA([]),
            khrA(['\\frac {a}{c}+{\\frac {bc-ad}{c}}\\[{\\frac {(cx-a+α)α^{n-1}-(cx-a+β)β ^{n-1}}{(cx-a+α )α ^{n}-(cx-a+β)β ^{n}}}\\]','其中α,β =\\frac {a+d±{\\sqrt {(a-d)^{2}+4bc}}}{2}']),
        ],



        [khrA(['?'
            ]), 
            khrA(['g^{-1}(h(g(x)))','共轭函数，共轭关系，等价关系']),
            khrA(['g^{-1}(h_2(g(x)))']), 
            khrA(['g^{-1}(h_3(g(x)))']),
            khrA(['g^{-1}(h_n(g(x)))','递推关系g(f)=h(g)']),
        ],


        [khrA(['?'
            ]), 
            khrA(['g^{-1}(g(x)+b)','一般Abel方程']),
            khrA(['g^{-1}(g(x)+2b)']), 
            khrA(['g^{-1}(g(x)+3b)']),
            khrA(['g^{-1}(g(x)+nb)','递推关系g(f)-g=b']),
        ],

        [khrA(['?'
            ]), 
            khrA(['g^{-1}(ag(x)+b)','a≠1或b=0']),
            khrA(['g^{-1}(a^2g(x)+(a+1)b)']), 
            khrA(['g^{-1}(a^3g(x)+(a^2+a+1)b)']),
            khrA(['g^{-1}'+zp('a^ng(x)+\\frac{a^n-1}{a-1}b'),'递推关系g(f)-ag=b    g(f)-\\frac{b}{1-a}=a'+zp('g-\\frac{b}{1-a}')]),
        ],



        [khrA(['?'
            ]), 
            khrA(['\\sqrt{x^2+b}','无不动点(b≠0时)']),
            khrA(['\\sqrt{x^2+2b}']), 
            khrA(['\\sqrt{x^2+3b}']),
            khrA(['\\sqrt{x^2+nb}','递推关系f^2-x^2=b']),
        ],



        [khrA(['?'
            ]), 
            khrA(['\\sqrt{ax^2+b}','a≠1','无不动点\\frac{b}{1-a}']),
            khrA(['\\sqrt{a^2x^2+(a+1)b}']), 
            khrA(['\\sqrt{a^3x^2+(a^2+a+1)b}']),
            khrA(['\\sqrt{a^nx^2+\\frac{a^n-1}{a-1}b}','递推关系f^2-x^2=\\frac{b}{1-a}']),
        ],


        [khrA(['?'
            ]), 
            khrA(['T_m(x)=\\cos(m \\arccos x)','整数m的车比雪夫多项式']),
            khrA(['T_{2m}(x)=\\cos(2m \\arccos x)']), 
            khrA(['T_{3m}(x)=\\cos(3m \\arccos x)']),
            khrA(['T_{nm}(x)=\\cos(nm \\arccos x)','递推关系\\arccos f=m \\arccos x']),
        ],


    ],'wiki TBrc').replace(/\n/g,br))

    


)+refer([
    enwiki('Iterated_function','2020-11-27'),
    enwiki('Periodic_point','2020-11-27'),
    href(Hs+'www.zhihu.com/question/389575957/answer/1170540587','如何求一个函数的n次迭代? 知乎'),
    inhref('explore.html?q=Problem/Problem List'),
    inhref('wiki.html?q=Formula/Sequence/Sum'),
]);