/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */



showThen['Slide']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText placeholder="'+gM('input HTML')+'"></textarea>'+
		strbtn+'⌫" hotkey="Ctrl + E" tip="Clear" class=Clear />'+
		detail(SCtv('SlideTool','<input type="file" id=SlideFile accept="text/*" multiple="multiple" />'+
		strbtn+gM('Play')+'" id=SlidePlay />'),
		gM('Vertical')+itv('','swap_vertical_circle')+'<input type=checkbox id=slideSwapV />')
	);
	$('#showGround .editorText').val(L.slide||'');

	$('#showGround .SlideTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(),me=$(this),id=me.attr('id');
		if(id=='SlidePlay'){
			L.slide=s;
			open('slide.html'+($('#slideSwapV').prop('checked')?'?swap=v':''));
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

