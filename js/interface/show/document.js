/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */



showThen['Document']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText tip="'+gM('input')+' HTML"></textarea>'+
		sci(itv('navHide','keyboard_arrow_up')+br+itv('launch" title="Ctrl + Shift + Enter','launch')+br+itvc('" hotkey="Ctrl + E'))+
		DCtv('inblk',[
			Arrf(Melef,ZLR('IL LaTeX MD HTML')).join(''),
			Arrf(Melef,ZLR('Canvas SVG Echarts D2 D3')).join(''),
			Arrf(Melef,ZLR('JS I18 YAML')).join(''),
		].join(br))+
		detail(SCtv('DocumentTool','<input type="file" id=DocumentFile accept=".md, text/*" multiple="multiple" />'+
		strbtn+gM('Play')+'" class=play id=DocumentPlay hidden />'+
				
		//↑
		strbtn+gM('Scan QRcode')+'" class=qrScan tip="Scan QRcode" />'+
		strbtn+gM('QRcode')+' ↓" class=qrGen tip="Generate Text QRcode" />'),
			gM('Style')+'<textarea id=documentCSS tip="CSS"></textarea>'+br+
			XML.wrapE('label',gM('Display TOC')+strchkbx0+'id=documentTOC'+chked+' />')
		)
	);
	$('#showGround .editorText').val(L.document||'');

	$('#showGround .DocumentTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(), st=s.trim(), me=$(this),id=me.attr('id');
		if(id=='DocumentPlay'){
			L.document=s;
			L.documentCSS=$('#documentCSS').val();
			L.documentTOC=$('#documentTOC').prop('checked');
			if(/^https?.+$/.test(st)){
				open('document.html?src='+st);
			}else{
				open('document.html');
			}
		}
		
	}).on('change',':file',function(){
		var v=$(this).val();
		if(v){
			var files=this.files, fl=files.length;
			for(var i=0;i<fl;i++){
				var f=files[i], s=f.size, ext=f.type.replace(/text[/]/,''), name=f.name;

consolelog(f);
				if(/^text[/]/.test(f.type) || !ext){
					if(!ext && /\..+/.test(name)){
						ext=name.replace(/.+\./,'').toUpperCase()
					}
					if(!s){s='?KB'}else{
						s=sizeKB(s)
					}

					var reader=new FileReader();
					reader.onload = function(e){
						//var txt = this.result;
						var txt=e.target.result;
						consolelog('txt',txt);
						if(/MD|MARKDOWN/.test(ext)){
							txt=XML.wrapE('MD',txt)
						}
						textareaAdd(txt,'#showGround .ground1 .editorText',1);
					};
					//reader.readAsDataURL(f);
					reader.readAsText(f);
					

				}
			}
		}
	});


	
};

