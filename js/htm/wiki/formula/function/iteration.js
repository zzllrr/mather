/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Formula/Function/Iteration']=Kx(
    detail(gM('Iteration')+ksc('f→f_2→f_n~(f_0=x,~f_1=f, f_2=f(f(x)))'),Table([['f_{1\\/2}','函数f=f_1','迭代2次f_2','迭代3次f_3','n次迭代f_n']],[
        
        [khrA(['?'
            ]), 
            khrA(['x+b']),
            khrA(['x+2b']), 
            khrA(['x+3b']),
            khrA(['x+nb']),
        ],

        [khrA(['?'
            ]), 
            khrA(['ax+b','a≠1']),
            khrA(['a^2x+ab+b']), 
            khrA(['a^3x+a^2b+ab+b']),
            khrA(['a^nx+\\frac{a^n-1}{a-1}b']),
        ],

        [khrA(['?'
            ]), 
            khrA(['ax^b','b≠1']),
            khrA(['a^{b+1}x^{b^2}']), 
            khrA(['a^{b^2+b+1}x^{b^3']),
            khrA(['a^{\\frac {b^n-1}{b-1}} x^{b^n}']),
        ],


        [khrA(['?'
            ]), 
            khrA(['ax^{2}+bx+\\frac {b^{2}-2b}{4a}']),
            khrA(['']), 
            khrA(['']),
            khrA(['\\frac {2α^{2^{n}}-b}{2a}','其中α =\\frac {2ax+b}{2}']),
        ],

        [khrA(['?'
            ]), 
            khrA(['ax^{2}+bx+\\frac {b^{2}-2b-8}{4a}']),
            khrA(['']), 
            khrA(['']),
            khrA(['\\frac {2α^{2^{n}}+2α ^{-2^{n}}-b}{2a}','其中α =\\frac {2ax+b± {\\sqrt {(2ax+b)^{2}-16}}}{4}']),
        ],
        


        [khrA(['?'
            ]), 
            khrA(['\\frac {ax+b}{cx+d}','有理差分方程']),
            khrA(['']), 
            khrA(['']),
            khrA(['\\frac {a}{c}}+{\\frac {bc-ad}{c}}\\[{\\frac {(cx-a+α)α^{n-1}-(cx-a+β)β ^{n-1}}{(cx-a+α )α ^{n}-(cx-a+β)β ^{n}}}\\]','其中α,β =\\frac {a+d±{\\sqrt {(a-d)^{2}+4bc}}}{2}']),
        ],


    ],'wiki TBrc').replace(/\n/g,br))

    


)+refer([
    enwiki('Iterated_function','2020-11-27'),
    enwiki('Periodic_point','2020-11-27'),
    href(Hs+'www.zhihu.com/question/389575957/answer/1170540587','如何求一个函数的n次迭代? 知乎'),
    inhref('explore.html?q=Problem/Problem List'),
    inhref('wiki.html?q=Formula/Sequence/Sum'),
]);