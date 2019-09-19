/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

 $(function(){

	oHTML(
		[
			href('api.html',spanmi('launch','API'),gM('Launch')+'" class="fixl fixt pd10'),
			(!/https?:/.test(loch)?
				[	href('./js','JavaScript'),
					href('./css',gM('CSS')),
					href('./js/i18n',gM('i18n')),
				].join(' | '):''),

			detail(gM('Native Math Function')+' (JavaScript)',
				API(tooltip['Math Function (Native JavaScript)']),
			),
			API(tooltip['API']),
		
			detail(gM('3rd-party'),
				XML.wrapE('q','Standing on the shoulders of giants!')+
				detail(href('./js/lib','Javascript'),
					ul(Arrf(function(x){return href(Hs+'github.com/search?q='+x,spanmi('launch',x+'.js'))},
						ZLR('base64 jquery katex qrcode qrcode-decoder zlr echarts echarts-gl effects js-yaml terrain webslides aframe aframe-ar zdog d3 function-plot'))),1)+
				detail(href('./css/fonts','Fonts'),
					ul(ZLR(zlr2('KaTeX MaterialIcons-Regular','.woff2'))),1)
			,1), 
		
		].join(br)
	,1);
 });