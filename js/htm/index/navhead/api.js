/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

 $(function(){
	var uo=H_o(sch), gitjs=function(x){return href(Hs+'github.com/search?q='+x,spanmi('launch',x+'.js'))};
	if(uo && uo['sub']=='3rd-party'){
		oHTML(
			XML.wrapE('q',gM('Standing on the shoulders of giants!'))+
			DCtv('',
				href('api.html',spanmi('launch','API'),gM('Launch'))+
				(!/https?:/.test(loch)?' | '+href('./js/lib','Javascript'):'')
			)+
			[
				detail(gM('Encode | Decode'.split(' ')).join(' '),
					ul(Arrf(gitjs,
						ZLR('base64 jquery qrcode qrcode-decoder zmather_zlr zmather_io js-yaml terrain webslides'))),1),
				detail(gM('Media | Graphic'.split(' ')).join(' '),
					ul(Arrf(gitjs,
						ZLR('katex echarts echarts-gl effects aframe aframe-ar zdog d3 geogebra desmos rough ztext'))),1),

				detail(gM('Math'),
					ul(Arrf(github,
						ZLR('josdejong/mathjs '+zlr3('infusion/','Polynomial Fraction Complex Quaternion','.js')))),1),

				href('./css/fonts','Fonts'),
				detail('Icon Font',
					ul(ZLR(zlr2('KaTeX MaterialIcons-Regular','.woff2'))),1)

			
			].join(br)

		,1);

	}else{
		oHTML(
			[
				DCtv('',
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