/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


showThen['3D']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText tip="'+gM('input')+' HTML"></textarea>'+
		itvc('" hotkey="Ctrl + E')+
        DCtv('inblk',[
            SCtv('Mele" tip=3D. title="3D',ZLR('D3')).join(''),

        ].join(br))+
		detail(SCtv('3DTool','<input type="file" id=3DFile accept="text/*" multiple="multiple" />'+
				strbtn+gM('Play')+'" id=3DPlay />'),
            ''
		)
	);
	$('#showGround .editorText').val(L['3D']||'');

	$('#showGround .3DTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(), st=s.trim(), me=$(this),id=me.attr('id');
		if(id=='3DPlay'){
			var j=[];$('.jslib').each(function(){j.push($(this).attr('data-lib'))});

			L['3D']=s;
			if(/^https?.+$/.test(st)){
				open('3d.html?src='+st);
			}else{
				open('3d.html');
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