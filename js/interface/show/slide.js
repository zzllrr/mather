/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */



showThen['Slide']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText tip="'+gM('input')+' HTML"></textarea>'+
		itvc('" hotkey="Ctrl + E')+
		DCtv('inblk',[
			SCtv('Mele" tip="Slide',ZLR('Slide section')).join(''),
			Arrf(function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip='+t+'. title="'+t:''),x)},ZLR('LA MD HTML')).join(''),
			Arrf(function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip='+t+'. title="'+t:''),x)},ZLR('CV SV EC')).join(''),
			Arrf(function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip='+t+'. title="'+t:''),x)},ZLR('JS I18 YAML')).join(''),
		].join(br))+
		detail(SCtv('SlideTool','<input type="file" id=SlideFile accept="text/*" multiple="multiple" />'+
			strbtn+gM('Play')+'" id=SlidePlay />'),

			[gM('Head')+'<textarea id=slidehead tip="'+gM('input')+' HTML"></textarea>',
			XML.wrapE('p',XML.wrapE('label',itv('','swap_vertical_circle')+gM('Vertical')+'<input type=checkbox id=slideSwapV />')),
			gM('Foot')+'<textarea id=slidefoot tip="'+gM('input')+' HTML"></textarea>'
			].join('')

		)
	);
	$('#showGround .editorText').val(L.slide||'');

	$('#showGround .SlideTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(), st=s.trim(), me=$(this),id=me.attr('id');
		if(id=='SlidePlay'){
			L.slide=s;
			L.slidehead=$('#slidehead').val();
			L.slidefoot=$('#slidefoot').val();

			if(/^https?.+$/.test(st)){
				open('slide.html?src='+st+'&'+($('#slideSwapV').prop('checked')?'swap=v':''));
			}else{
				open('slide.html'+($('#slideSwapV').prop('checked')?'?swap=v':''));
			}
		}
		
	}).on('change',':file',function(){
		var v=$(this).val();
		if(v){
			var files=this.files, fl=files.length;
			for(var i=0;i<fl;i++){
				var f=files[i], s=f.size, ext=f.type.replace(/text[/]/,'');

consolelog(f);
				if(/^text[/]/.test(f.type) || !ext){
					if(!s){s='?KB'}else{
						s=sizeKB(s)
					}

					var reader=new FileReader();
					reader.onload = function(e){
						//var txt = this.result;
						var txt=e.target.result;
						consolelog('txt',txt);
						textareaAdd(txt,'#showGround .ground1 .editorText',1);
					};
					//reader.readAsDataURL(f);
					reader.readAsText(f);
					

				}
			}
		}
	});


	
};

