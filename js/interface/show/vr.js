/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

var VRcpn={
	/*
	<script src="https://unpkg.com/aframe-animation-component/dist/aframe-animation-component.min.js"></script>
	<script src="https://unpkg.com/aframe-particle-system-component/dist/aframe-particle-system-component.min.js"></script>
	<script src="https://unpkg.com/aframe-extras.ocean/dist/aframe-extras.ocean.min.js"></script>
	<script src="https://unpkg.com/aframe-gradient-sky/dist/gradientsky.min.js"></script>

	animation-component


	 <a-scene>
      <a-entity id="rain" particle-system="preset: rain; color: #24CAFF; particleCount: 5000"></a-entity>

      <a-entity id="sphere" geometry="primitive: sphere"
                material="color: #EFEFEF; shader: flat"
                position="0 0.15 -5"
                light="type: point; intensity: 5"
                animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"></a-entity>

      <a-entity id="ocean" ocean="density: 20; width: 50; depth: 50; speed: 4"
                material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1"
                rotation="-90 0 0"></a-entity>

      <a-entity id="sky" geometry="primitive: sphere; radius: 5000"
                material="shader: gradient; topColor: 235 235 245; bottomColor: 185 185 210"
                scale="-1 1 1"></a-entity>

      <a-entity id="light" light="type: ambient; color: #888"></a-entity>
    </a-scene>

	*/
};
showThen['VR']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText tip="'+gM('input')+' HTML"></textarea>'+
		itvc('" hotkey="Ctrl + E')+
        DCtv('inblk',[
            SCtv('Mele" tip=VR. title="VR',ZLR('VR a-scene')).join(''),

        ].join(br))+
		detail(SCtv('VRTool','<input type="file" id=VRFile accept="text/*" multiple="multiple" />'+
				strbtn+gM('Play')+'" id=VRPlay />'),
			[gM('Script'),

			].join('')
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