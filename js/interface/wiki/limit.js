/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Limit']=Kx(

detail('极限类型',Table([ZLR('名称 记法 定义 性质')],[

	[]
		
],'wiki').replace(/\n/g,br))+
detail('等价无穷小量',Table([ZLR('名称 性质')],[

	['(1+x)^a≈1+ax'],
	['(1+x)(1+y)≈1+x+y'],
	['e^{-x}≈'+frac(1,'1+x','')+'≈1-x'],
	['e^x≈'+frac(1,'1-x','')+'≈1+x'],
	['\\sin x≈\\tan x≈\\ln(1+x)≈-\\ln(1-x)≈x'],
	


],'wiki').replace(/\n/g,br))

);