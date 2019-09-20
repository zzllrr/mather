/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

 $(function(){
	var uo=H_o(sch), gitjs=function(x){return href(Hs+'github.com/search?q='+x,spanmi('launch',x+'.js'))};
	if(uo && uo['sub']=='3rd-party'){
		oHTML(
			br+
			XML.wrapE('q','Standing on the shoulders of giants!')+
			DCtv('fixl fixt pd10',
				href('api.html',spanmi('launch','API'),gM('Launch')))+
			[
			href('./js/lib','Javascript'),
			detail(gM('Encode | Decode'),
				ul(Arrf(gitjs,
					ZLR('base64 jquery qrcode qrcode-decoder zlr js-yaml terrain webslides'))),1),
			detail(gM('Media | Graphic'),
				ul(Arrf(gitjs,
					ZLR('katex echarts echarts-gl effects aframe aframe-ar zdog d3 function-plot'))),1),

			detail(gM('Math'),
				ul(Arrf(gitjs,
					ZLR('math'))),1),

			href('./css/fonts','Fonts'),
			detail('Icon Font',
				ul(ZLR(zlr2('KaTeX MaterialIcons-Regular','.woff2'))),1)

			
			].join(br)
		,1);

	}else{
		oHTML(
			[
				DCtv('fixl fixt pd10',
					href('api.html',spanmi('launch','API'),gM('Launch'))+
					href('api.html?sub=3rd-party',spanmi('launch',gM('3rd-party')),gM('Launch')+'" class="pd10')
				),

				(!/https?:/.test(loch)?
					[	href('./js','JavaScript'),
						href('./css',gM('CSS')),
						href('./js/i18n',gM('i18n')),
					].join(' | '):''),

				detail(gM('Native Math Function')+' (JavaScript)',
					API(tooltip['Math Function (Native JavaScript)']),
				),
				API(tooltip['API']),

			
			].join(br)
		,1);
	}
 });