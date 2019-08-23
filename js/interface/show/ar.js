/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

showThen['AR']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText tip="'+gM('input')+' HTML"></textarea>'+
		itvc('" hotkey="Ctrl + E')+
        DCtv('inblk',[
            SCtv('Mele" tip=AR title="AR',ZLR('AR a-scene')).join(''),

        ].join(br))+
		detail(SCtv('ARTool','<input type="file" id=ARFile accept="text/*" multiple="multiple" />'+
		strbtn+gM('Play')+'" id=ARPlay />'),''
		)
	);
	$('#showGround .editorText').val(L.ar||'');

	$('#showGround .ARTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(), st=s.trim(), me=$(this),id=me.attr('id');
		if(id=='ARPlay'){
			L.ar=s;
			if(/^https?.+$/.test(st)){
				open('ar.html?src='+st);
			}else{
				open('ar.html');
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