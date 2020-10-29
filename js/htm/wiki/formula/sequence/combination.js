wiki['Formula/Sequence/Combination']=Kx(


    detail('排列组合公式',Table([ZLR('名称 公式 证明')],[
        ['选排列____choice permutation','A_n^m = n(n-1)⋯(n-m+1) = '+frac('n!','(n-m)!','')+kbr+
            Eq(['x^m='+kbr+'A_x^m+C_m^2A_x^{m-1}+⋯+'+kbr+
            '(4^m-C_4^33^m+C_4^22^m-C_4^1)⋅A_x^4/4!+'+kbr+'(3^m-C_3^22^m+C_3^1)⋅A_x^3/3!+'+kbr+'(2^m-C_2^1)⋅A_x^2/2!+'+kbr+'A_x^1',
            kbr+'m!C_x^m+C_m^2⋅(m-1)!C_x^{m-1}+⋯+'+kbr+
            '(4^m-C_4^33^m+C_4^22^m-C_4^1)⋅C_x^4+'+kbr+'(3^m-C_3^22^m+C_3^1)⋅C_x^3+'+kbr+'(2^m-C_2^1)⋅C_x^2+'+kbr+'C_x^1'
            ]),''],
        ['全排列（置换）____all permutation','A_n^n = n!',''],
        ['组合____Combination____n choose m',kxA([Eq([['C_n^m','C_n^{n-m}'],frac('A_n^m','m!',''),frac('n!','(n-m)!m!',''),
            ['',frac('n(n-1)⋯(n-m+1)','m(m-1)⋯1',''),frac('n(n-1)⋯(m+1)','(n-m)(n-m-1)⋯1','')],
            binom('n',1,'')+binom('n-1',2,'')+'⋯'+binom('n-m+1','m',''),binom('n','m','')+binom('n-1','m-1','')+'⋯'+binom('n-m+1',1,''),
            binom('n',1,'')+binom('n-1',2,'')+'⋯'+binom('m+1','n-m',''),binom('n','n-m','')+binom('n-1','n-m-1','')+'⋯'+binom('m+1',1,''),
            ['C_n^m',frac('n-m+1','m','')+'C_n^{m-1}',frac('n','n-m','')+'C_{n-1}^{m}',frac('n','m','')+'C_{n-1}^{m-1}'],
            ['C_n^m',frac('m+1','n-m','')+'C_n^{m+1}',frac('n-m+1','n','')+'C_{n+1}^{m}',frac('m','n','')+'C_{n+1}^{m+1}'],
            ]),
            piece([
                'C_n^m=C_{n-1}^{m}+C_{n-1}^{m-1}',
                'C_n^{m+1}=C_{n-1}^{m+1}+C_{n-1}^{m}',
                'C_{n+1}^{m}=C_n^m+C_n^{m-1}',
                'C_{n+1}^{m+1}=C_n^{m+1}+C_n^m',
            ]),
            Eq([
                'C_n^mC_m^k=C_n^mC_m^{m-k}=C_n^{n-m}C_m^k=C_n^{n-m}C_m^{m-k}',
                'C_m^kC_n^m=\\frac{n!m!}{m!k!(n-m)!(m-k)!}=\\frac{n!}{k!(n-m)!(m-k)!}',
                '\\frac{n!(n-k)!}{(n-k)!k!(n-m)!(m-k)!}=\\frac{n!(n-m+k)!}{(m-k)!(n-m+k)!k!(n-m)!}',
                'C_n^kC_{n-k}^{n-m}=C_n^kC_{n-k}^{m-k}=C_n^{n-k}C_{n-k}^{n-m}=C_n^{n-k}C_{n-k}^{m-k}',
                
                'C_n^{m-k}C_{n-m+k}^{k}=C_n^{m-k}C_{n-m+k}^{n-m}=C_n^{n-m+k}C_{n-m+k}^{k}=C_n^{n-m+k}C_{n-m+k}^{n-m}'

            ])
            ])],
        
        ['二次组合____bi-Combination____n choose i,j\nby zzllrr',kxA([Eq([['C_n^{i,j}','C_n^iC_{n-i}^j'],frac('A_n^iA_{n-i}^j','i!j!',''),frac('n!','i!j!(n-i-j)!',''),
            ['',frac('n(n-1)⋯(n-m+1)','m(m-1)⋯1',''),frac('n(n-1)⋯(m+1)','(n-m)(n-m-1)⋯1','')],
            binom('n',1,'')+binom('n-1',2,'')+'⋯'+binom('n-m+1','m',''),binom('n','m','')+binom('n-1','m-1','')+'⋯'+binom('n-m+1',1,''),
            binom('n',1,'')+binom('n-1',2,'')+'⋯'+binom('m+1','n-m',''),binom('n','n-m','')+binom('n-1','n-m-1','')+'⋯'+binom('m+1',1,''),
            ['C_n^m',frac('n-m+1','m','')+'C_n^{m-1}',frac('n','n-m','')+'C_{n-1}^{m}',frac('n','m','')+'C_{n-1}^{m-1}'],
            ['C_n^m',frac('m+1','n-m','')+'C_n^{m+1}',frac('n-m+1','n','')+'C_{n+1}^{m}',frac('m','n','')+'C_{n+1}^{m+1}'],
            ]),
            piece([
                'C_n^m=C_{n-1}^{m}+C_{n-1}^{m-1}',
                'C_n^{m+1}=C_{n-1}^{m+1}+C_{n-1}^{m}',
                'C_{n+1}^{m}=C_n^m+C_n^{m-1}',
                'C_{n+1}^{m+1}=C_n^{m+1}+C_n^m'
            ])
            ])],
            
        ['牛顿二项式定理____Newton binomial theorem',
            '(a+b)^n = '+sum('i',0,'n','C_n^ia^{n-i}b^i','',''),''],
        ['','(1+x)^n = '+sum('i',0,'n','C_n^ix^i','',''),'牛二定理，令a=1，b=x'],
        ['','(a^2-1)^2 | a^{2n+2} - (a^2-1)n-a^2','牛二定理，展开'+'(a^2-1 + 1)^{n+1}'],
        ['全组合____all combination',sum('i',0,'n','C_n^i','','')+' = C_n^0+C_n^1+⋯+C_n^n =2^n \\\\ ~ 即n元集合A的全部子集数（幂集的势）','牛二定理，令a=b=1'],
        ['',sum('i',0,'n','(-1)^nC_n^i','','')+' = C_n^0-C_n^1+⋯+(-1)^nC_n^n = 0','牛二定理，令a=1, b=-1'],
    
        ['','C_n^0+C_n^2+⋯ = C_n^1+C_n^3+⋯ =2^{n-1}',
            'Pascal三角形的每一层，____如果项数是偶数，则奇偶项各占1半，____且数列互为逆序，数和显然相等____如果项数是奇数，则'],
        ['',khrA([sum('i',0,'m','C_{n-i}^{m-i}','','')+' = C_n^m+C_{n-1}^{m-1}+⋯+C_{n-m}^0 = C_{n+1}^{m}',
            sum('i',0,'m','C_{n-i}^{n-m}','','')+' = C_n^{n-m}+C_{n-1}^{n-m}+⋯+C_{n-m}^{n-m}=C_{n+1}^{m}',
            sum('i',0,'m','C_{n+i}^{i}','','')+' = C_n^0+C_{n+1}^1+⋯+C_{n+m}^{m}=C_{n+m+1}^{m}=C_{n+m+1}^{n+1}',
            sum('i',0,'m','C_{n+i}^{n}','','')+' = C_n^n+C_{n+1}^{n}+⋯+C_{n+m}^{n}=C_{n+m+1}^{n+1}=C_{n+m+1}^{m}',
            '特别地，'+sum('i',1,'m','C_i^{1}','','')+' = C_1^1+C_2^1+⋯+C_{m}^{1}=C_{m+1}^2',
            '特别地，'+sum('i',2,'m','C_i^{2}','','')+' = C_2^2+⋯+C_{m}^{2}=C_{m+1}^3',
            '特别地，'+sum('i',3,'m','C_i^{3}','','')+' = C_3^3+⋯+C_{m}^{3}=C_{m+1}^4',
            sum('i','n','m','C_i^{n}','','')+' = C_n^n+⋯+C_{m}^{n}=C_{m+1}^{n+1}',
            ]),
            'Pascal三角形，____将左肩上的数迭代分解为上一层左右肩之和，____最后只剩下右肩数沿右斜线向上的所有数和'],
    
        ['',sum('i',0,'n','iC_n^i','','')+' = C_n^1+2C_n^2+⋯+nC_n^n = n2^{n-1}',''],
    
        ['',sum('i',1,'n','i⋅i!','','')+' = 1⋅1!+2⋅2!+3⋅3!+⋯+n⋅n! = (n+1)!-1','利用k⋅k!=(k+1)!-k! \\\\ 即(2!-1!)+(3!-2!)+(4!-3!)+⋯+((n+1)!-n!) '],
    
        ['重复组合____Combination with repetition____n multichoose m',
                Eq(['H_n^m=H_{m+1}^{n-1}',
                'C_{n+m-1}^{m}=C_{n+m-1}^{n-1}',
                frac('(n+m-1)!','m!(n-1)!','')]),'第1个等式，对换丢番图方程“□”,“+”，得到'],
        
    ],'wiki').replace(/____/g,br))
    
    );