/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */



showThen['Document']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText tip="'+gM('input')+' HTML"></textarea>'+
		strbtn+'⌫" hotkey="Ctrl + E" tip="Clear" class=Clear />'+
		DCtv('inblk',[
			Arrf(function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip=Component title="'+t:''),x)},ZLR('LA MD HTML')).join(''),
			Arrf(function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip=Component title="'+t:''),x)},ZLR('CV SV EC')).join(''),
			Arrf(function(x){var t=Meleo[x]||'';return SCtv('Mele'+(t?'" tip=Component title="'+t:''),x)},ZLR('JS I18 YAML')).join(''),
		].join(br))+
		detail(SCtv('DocumentTool','<input type="file" id=DocumentFile accept="text/*" multiple="multiple" />'+
		strbtn+gM('Play')+'" id=DocumentPlay />'),''
		)
	);
	$('#showGround .editorText').val(L.document||'');

	$('#showGround .DocumentTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(),me=$(this),id=me.attr('id');
		if(id=='DocumentPlay'){
			L.document=s;
			open('document.html');
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

