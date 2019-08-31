/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
$.each({
	// VR

	
	'VR':[
		href(Hs+'aframe.io','VR API'),
		sceg(`
<a-scene>
	<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
	<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
	<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
	<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
	<a-sky color="#ECECEC"></a-sky>
</a-scene>`,0),

		sceg(`
<a-scene>
	<a-entity id="rain" particle-system="preset: rain; color: #24CAFF; particleCount: 5000"></a-entity>

	<a-entity id="sphere" geometry="primitive: sphere"
		material="color: #EFEFEF; shader: flat"
		position="0 0.15 -5"
		light="type: point; intensity: 5"
		animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true">
	</a-entity>

	<a-entity id="ocean" ocean="density: 20; width: 50; depth: 50; speed: 4"
		material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1"
		rotation="-90 0 0">
	</a-entity>

	<a-entity id="sky" geometry="primitive: sphere; radius: 5000"
		material="shader: gradient; topColor: 235 235 245; bottomColor: 185 185 210"
		scale="-1 1 1">
	</a-entity>

	<a-entity id="light" light="type: ambient; color: #888"></a-entity>
</a-scene>`,0)

// aframe.io/docs/0.9.0/introduction/entity-component-system.html

		].join(br),
	



	// AR
	
	



	'AR':[
		href(Hs+'github.com/jeromeetienne/ar.js','AR API'),
		sceg(`
<a-scene embedded arjs>
	<a-marker preset="hiro">
		<a-box position='0 0.5 0' material='color: yellow;'></a-box>
	</a-marker>
	<a-entity camera></a-entity>
</a-scene>`,0)
		].join(br),



},function(k,v){
	tooltip[k]=v;
});





