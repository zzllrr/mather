/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['integral']=Kx(


detail('积分类型',Table([ZLR('名称 记法 定义 性质')],[
	[]

],'wiki').replace(/\n/g,br))+
detail('定积分表（详见《微分》）',Table([ZLR('名称 记法 定义 性质')],[
	ZLR(khrA([kxf('csch')+'^{-1}x','\\ln (1+'+kroot('1+x^2')+') - \\ln x'])+'____-'+frac(1,'x'+kroot('1-x^2'),''),'','____')

],'wiki').replace(/\n/g,br))

);