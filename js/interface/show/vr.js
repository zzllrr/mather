/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

showThen['VR']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText tip="'+gM('input')+' HTML"></textarea>'+
		itvc('" hotkey="Ctrl + E')+
        DCtv('inblk',[
            SCtv('Mele" tip=VR. title="VR',ZLR('VR a-scene')).join(''),

        ].join(br))+
		detail(SCtv('VRTool','<input type="file" id=VRFile accept="text/*" multiple="multiple" />'+
		strbtn+gM('Play')+'" id=VRPlay />'),''
		)
	);
	$('#showGround .editorText').val(L.vr||'');

	$('#showGround .VRTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(),me=$(this),id=me.attr('id');
		if(id=='VRPlay'){
			L.vr=s;
			open('vr.html');
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