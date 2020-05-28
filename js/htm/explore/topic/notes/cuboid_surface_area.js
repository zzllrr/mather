/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

explore['Topic/Short Notes/Cuboid Surface Area']=
DCtv('floatl',
	XML.wrapE('zdog',`
	C.setAttribute('spinning',true);C.width=300;C.height=300;
	let isSpinning = true;
	
	let zo = new Zdog.Illustration({
		element: C,
		zoom: 2,
		dragRotate: true,
	
		onDragStart: function() {
			isSpinning = false;
		},
		onDragMove: function(p,mx,my) {
		},
		onDragEnd: function() {
			isSpinning = true;
		},
	});
	
	let box6 = new Zdog.Box({
		addTo: zo,
		width: 120,
		height: 80,
		depth: 40,
		stroke: false,
		color: '#C25', // default face color
	
		frontFace: 'green',
		rearFace: 'blue',
		leftFace: '#EA0',
		rightFace: '#E62',
		topFace: '#ED0',
		bottomFace: '#636',
	
		rotate: {
			x: Zdog.TAU/5,
			y: Zdog.TAU/5,
			z: Zdog.TAU/5
		},
	});
	
	
	function animate() {
		if ( isSpinning && C.getAttribute('spinning')=='true') {
			zo.rotate.y += 0.01;
		}
		zo.updateRenderGraph();
		requestAnimationFrame( animate );
	}
	animate();
	`)
)+
	//\frac1a+\frac1b+\frac1c=\frac{S}{2V}  $$kfrac('1/a+1/b+1/c',1)+'='+kfrac(['S','2V'])$$

	XML.wrapE('MD',`
## <i18>Cuboid Surface Area</i18>
$$Eq([['S','2(ab+ac+bc)=2(a(b+c)+bc)'],'2abc'+zp(kfrac('1/a+1/b+1/c',1)),'2V'+zp(kfrac('1/a+1/b+1/c',1))])$$
&nbsp;
$\\frac1a+\\frac1b+\\frac1c=\\frac{S}{2V}$
当$b=a-k,~c=a+k $即等差数列时
 $S=2(3a^2-k^2)$
$V=a(a+k)(a-k)=a(a^2-k^2)$
$$kfrac([1,'a-k'])+'+'+kfrac([1,'a'])+'+'+kfrac([1,'a+k'])+'='+kfrac(['S','2V'])+'='+kfrac(['3a^2-k^2','a(a^2-k^2)'])+'='+kfrac(['3a^2-k^2','V'])$$
特别地，当$k=1$时
 $$kfrac([1,'a-1'])+'+'+kfrac([1,'a'])+'+'+kfrac([1,'a+1'])+'='+kfrac(['S','2V'])+'='+kfrac(['3a^2-1','a(a^2-1)'])+'='+kfrac(['3a^2-1','V'])$$

`
)
;