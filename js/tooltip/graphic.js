/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
$.each({

	'SVG': [
		href(Hs + 'developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial', 'SVG API'),

		detail(gM('Basic'),[
			detail('SVG', [
				sceg2('viewBox="0 0 100 100"', 8),


			].join(br)),


			detail(gM('Shape'), [
				gM('Rectangle') + scegc('rect x=10 y=10 width=30 height=30 stroke=green fill=none', 4),
				gM('Round Corner') + scegc('rect x=50 y=10 rx=10 ry=10 width=30 height=30 fill=green', 4),
				gM('Circle') + scegc('circle cx=60 cy=60 r=50 stroke=green fill=none', 6),
				gM('Ellipse') + scegc('ellipse cx=110 cy=60 rx=100 ry=50 stroke=green fill=none', 7),
				gM('Line.0') + scegc('line x1=0 y1=80 x2=100 y2=20 stroke=red', 4),
				gM('Polyline') + scegc('polyline points="100,100 150,25 150,75 200,0" fill=none stroke=black', 8),
				gM('Polygon') + scegc('polygon points="10 100, 150 25 ,250 100" stroke=red fill=none', 7),

			].join(br)),

			detail(gM('Simple Path'), [
				scegc('path d="M10 20 L20 30" stroke=red fill=none', 4),
				gM('Closed') + ' Z(z)' + sceg2('Z'),
				gM('Move') + ' M x y | m dx dy' + sceg2('M10 20') + sceg2('m10 20'),
				gM('Line.0') + ' L x y | l dx dy' + sceg2('L20 30') + sceg2('l20 30'),
				gM('Horizontal Line') + ' H x | h dx' + sceg2('H30') + sceg2('h30'),
				gM('Vertical Line') + ' V y | v dy' + sceg2('V50') + sceg2('v50'),

				detail(gM('Method'), [
					href(Hs + 'developer.mozilla.org/zh-CN/docs/Web/API/SVGPathElement', 'JavaScript API'),
					'getTotalLength()',
					'getPointAtLength(float)',
				].join(br))
			].join(br)),

			detail(gM('Bezier'), [
				gM('Cubic') + 'C x1 y1, x2 y2, x y | c dx1 dy1, dx2 dy2, dx dy',
				scegc('path d="M10 10 C 20 20, 40 20, 50 10" fill=none stroke=red', 4),

				gM('Symmetric Cubic') + 'S x2 y2, x y | s dx2 dy2, dx dy',
				'其中省略的第1个控制点，是前一个C或S命令中第2个控制点，关于(前)终点的对称点（即终点是两控制点的中点）',
				scegc('path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke=black fill=transparent', 4),

				gM('Quadratic') + 'Q x1 y1, x y | q dx1 dy1, dx dy',
				scegc('path d="M10 80 Q 95 10 180 80" fill=none stroke=red', 4),

				gM('Symmetric Quadratic') + 'T x y | t dx dy',
				'其中省略的第1个控制点，是前一个Q或T命令中的控制点，关于(前)终点的对称点（即终点是两控制点的中点）',
				scegc('path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke=black fill=transparent', 4),


			].join(br)),

			detail(gM('Arc'), [
				'A rx ry x-axis-rotation large-arc-flag[0,1] sweep-flag[↻1|↺0] x y',
				'a rx ry x-axis-rotation large-arc-flag[0,1] sweep-flag[↻1|↺0] dx dy',
				scegc('path d="M80 50A 45 45, 0, 0, 0, 125 95V50 Z" fill=green', 4),
				scegc('path d="M80 50A 45 45, 0, 1, 0, 125 95V50 Z" fill=red', 4),
				scegc('path d="M80 50A 45 45, 0, 0, 1, 125 95V50 Z" fill=purple', 4),
				scegc('path d="M80 50A 45 45, 0, 1, 1, 125 95V50 Z" fill=blue', 4),

			].join(br)),

			detail(gM('Text'), [
				sceg('<text>&&&&</text>', 5), sceg('<text x=10 y=20 font-weight=bold>' + gM('Text') + '</text>', 5),
				Arrf(sceg2, ZLR('x=10 y=20 dx=10 dy=20 rotate=45 textLength=')).join(''),
				[sceg2('text-anchor=start'), sceg2('text-anchor=middle', -6), sceg2('text-anchor=end', -3)].join('|'),
				[sceg2('lengthAdjust=spacing'), sceg2('lengthAdjust=spacingAndGlyphs', -16)].join('|'),
				detail(gM('Text Attribute'), Arrf(sceg2,
					zlrA2(ZLR('font-family font-style font-weight font-variant font-stretch font-size font-size-adjust kerning letter-spacing word-spacing text-decoration'), '=')).join(br)
				),


				detail(gM('Child'), [
					sceg('<tspan font-weight=bold fill=red>Hello World!</tspan>', 6),
					sceg('<textPath xlink:href=#path0>1234</textPath>', 9),
				].join(br)),




			].join(br)),


			detail(gM('Structure'), [
				gM('group') + sceg('<g fill=white stroke=green>&&&&</g>&&', 2),

			].join(br)),


			detail(gM('Style'), [
				detail(gM('Stroke'), [
					sceg2('stroke=red'),
					sceg2('stroke-opacity=0.8'),
					[sceg2('stroke-linecap=butt'), sceg2('stroke-linecap=square', -6), sceg2('stroke-linecap=round', -5)].join('|'),
					[sceg2('stroke-linejoin=miter'), sceg2('stroke-linejoin=bevel', -5), sceg2('stroke-linejoin=round', -5)].join('|'),
					sceg2('stroke-dasharray="5,10,5"') + sceg2('stroke-dashoffset=3'),
					sceg2('stroke-miterlimit='),
				].join(br)),

				detail(gM('Fill'), [
					sceg2('fill=green') + sceg2('fill="url(#Pattern0)"'),
					sceg2('fill-opacity=0.8'),
					sceg2('fill-rule=')
				].join(br)),


				detail(gM('Definition'), sceg('<defs>&&&&</defs>&&', 6)),
				detail('CSS', sceg('<style type="text/css">&&&&</style>&&', 6)),


				detail(gM('Gradient'), [
					scegc('stop offset="50%" stop-color=green stop-opacity=0.5', 4),
					sceg(concat('<stop offset="', [0, 50, 100], '%" stop-color=', ZLR('red yellow blue'), ' stop-opacity=0.5></stop>').join('&&'), 6),
					detail('Linear', [
						sceg('<linearGradient>&&&&</linearGradient>', 16) + ' > stop',
						'x1 x2 y1 y2 ' + sceg('<linearGradient x1=0 x2=0 y1=0 y2=1>&&&&</linearGradient>', 16)

					].join(br)
					),

					detail('Radial', [
						sceg('<radialGradient>&&&&</radialGradient>', 16) + ' > stop',

						'cx cy r ' + sceg('<radialGradient cx=0.5 cy=0.5 r=0.25>&&&&</radialGradient>', 16),
						'cx cy r fx fy ' + sceg('<radialGradient cx=0.5 cy=0.5 r=0.25 fx=0.25 fy=0.25>&&&&</radialGradient>', 16)


					].join(br)
					),



					[sceg2('spreadMethod=pad'), sceg2('spreadMethod=reflect', -7), sceg2('spreadMethod=repeat', -6)].join('|'),

					[sceg2('gradientUnits=objectBoundingBox'), sceg2('gradientUnits=userSpaceOnUse', -14)].join('|'),

					sceg2('gradientTransform='),

				].join(br)),

				detail(gM('Pattern.v'), [
					sceg('<pattern id=Pattern0 width=.25 height=.25>&&&&</pattern>', 8),
					sceg('<pattern id=Pattern1 x=10 y=10 width=50 height=50 patternUnits=userSpaceOnUse>&&&&</pattern>', 8),
					[sceg2('patternUnits=objectBoundingBox'), sceg2('patternUnits=userSpaceOnUse', -14)].join('|'),
					[sceg2('patternContentUnits=objectBoundingBox'), sceg2('patternContentUnits=userSpaceOnUse', -14)].join('|'),

				].join(br)),

			].join(br)),



			detail(gM('Transform'), [
				sceg('transform=') + 'translate|rotate|scale|skew',

				'translate(x, y)',
				sceg2('translate(100,100)'),

				'rotate(deg)',
				sceg2('rotate(45)'),

				'skewX(x) skewY(y)',
				sceg2('skewX(45)') + sceg2('skewY(45)'),

				'scale(x,y)',
				sceg2('scale(1.2,0.5)'),


				detail(gM('Matrix'), [
					'matrix(scaleX, skewX, skewY, scaleY, dx, dy)',
					'setTransform(scaleX, skewX, skewY,scaleY, dx, dy)',
					gM('Transformation Matrix') + zx("$zmtrx([['scaleX','skewY','dx'],['skewX','scaleY','dy',[0,0,1]]])$"),
					sceg2('matrix(1, 0, 0, 1, 0, 0)'),
				].join(br)),
			].join(br)),


			detail(gM('Clip'), [
				sceg('<clipPath id=cp1>&&&&</clipPath>', 9),
				sceg('clip-path="url(#cp1)"'),

			].join(br)),

			detail(gM('Mask'), [
				sceg('<mask id=ms1>&&&&</mask>', 9),
				sceg('mask="url(#ms1)"'),



			].join(br)),

			detail(gM('Filter.v'), [
				sceg('<filter x=0 y=0 width=100 height=100 filterRes=>&&&&</filter>', 7),

				[sceg2('filterUnits=objectBoundingBox'), sceg2('filterUnits=userSpaceOnUse', -14)].join('|'),
				[sceg2('primitiveUnits=objectBoundingBox'), sceg2('primitiveUnits=userSpaceOnUse', -14)].join('|'),

			].join(br)),


			detail(gM('Image'), [
				scegc('image xlink:href="img/ZIL.png" x=0 y=0 height=50px width=50px', 5),


			].join(br)),


			detail('XHTML', [
				sceg('<foreignObject x=20 y=20 width=200 height=200>&&&&</foreignObject>', 14),


			].join(br)),


			detail(gM('Animation'), [
				scegc('animate attributeType=XML attributeName=x from=-100 to=120 dur=10s repeatCount=indefinite', 7),

				scegc('animateTransform attributeName=transform attributeType=XML type=rotate from="0 60 70" to="360 60 70" dur=10s repeatCount=indefinite', 7),

				sceg('<animateMotion dur=6s repeatCount=indefinite rotate=auto keyPoints=0;0.5;1 keyTimes=0;0.15;1 calcMode=linear>&&&&</animateMotion>', 14) + ' > mpath',



				[sceg2('calcMode=linear', -6), sceg2('calcMode=discrete'), sceg2('calcMode=paced', -5), sceg2('calcMode=spline', -6)].join('|'),

				sceg2('path='),

				scegc('mpath xlink:href=#path1', 5),

				scegc('set to=', 3),

				scegc('discard begin=', 7),
			].join(br)),
		].join('')),
		'rough.js '+github('rough-stuff/rough/wiki'),
	].join(''),

	//canvas



	
	'Canvas':[
	
		href(Hs+'developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial',gM('Native')+' Canvas API'),
		
		detail('2D',[
			
			detail(gM('Initialize'),[

				scegj('C.width=300;C.height=300',5)
			].join(br)),
			
			detail(gM('Rectangle'),[
				'***Rect(x,y,width,height)',
				gM('Stroke')+scegj('c.strokeRect(10, 20, 200, 150)',13),
				
				gM('Fill')+scegj('c.fillRect(10, 20, 200, 150)',11),
				
				gM('Clear')+scegj('c.clearRect(10, 20, 200, 150)',12),

			].join(br)),
			

			detail(gM('Style'),[
				'***Style=color|pattern|gradient',
				gM('Stroke')+scegj("c.strokeStyle='rgba(0, 0, 200, 0.5)'",14),
						
				gM('Fill')+scegj("c.fillStyle='rgba(0, 0, 200, 0.5)'",12),

				detail(gM('Line Style'),[
					gM('Width')+scegj('c.lineWidth=4'),
					scegj("c.lineCap='butt'")+'|round|square',
					scegj("c.lineJoin='miter'")+'|round|bevel',
					scegj('c.miterLimit=10.0'),
					
					detail(gM('Dash'),[
						scegj('c.setLineDash([1,2])'),
						scegj('c.lineDashOffset=3'),
						scegj('var dashA=c.getLineDash()'),
						
					].join(br)),
					
				].join(br)),
				
				gM('Opacity')+scegj('c.globalAlpha=0.5'),

				detail(gM('Gradient'),[
					gM('Linear')+'(x1,y1,x2,y2)',scegj('var lg=c.createLinearGradient(0,0,150,150)',30),
					
					gM('Radial')+'(x1,y1,r1,x2,y2,r2)',scegj('var rg=c.createRadialGradient(75,75,0,75,75,100)',30),
					
					detail('addColorStop(0~1,color)',[
						scegj("lg.addColorStop(0,'green')"),
						scegj("lg.addColorStop(0.5,'white')"),
						scegj("lg.addColorStop(1,'red')"),
					].join(br))
					
				].join(br)),
				
				
				detail(gM('Filter.v'),[
					detail(gM('String'),Arrf(sceg2,[
						'url()',
						'blur(5px)',
						'brightness(0.5)',
						'contrast(0.5)',
						'grayscale(0.5)',
						'invert(0.5)',
						'opacity(0.5)',
						'saturate(0.5)',
						'sepia(0.5)',
						'hue-rotate(180)',
					]).concat('drop-shadow(<offset-x>, <offset-y>, <blur-radius>, <spread-radius>, <color>)',
						sceg2('drop-shadow(2px,2px,5,-3,black)')
					).join(br)),
					scegj("c.filter='blur(5px)'"),
				].join(br)),
				
				detail(gM('Pattern.v')+' createPattern(image, repeatType)',[
					'repeatType=repeat|repeat-x|repeat-y|no-repeat',

					scegj(`
	var img=new Image()
	img.src='img/ZIL.png';
	img.onload=function(){
		var ptn =c.createPattern(img,'repeat')
		c.fillStyle=ptn;
		c.fillRect(0,0,150,150)

	}`,5)

				].join(br)),
				
				detail(gM('shadow')+' *Offset[XY], *Blur, *Color',[
	scegj(`			
		c.shadowOffsetX = 2;
		c.shadowOffsetY = 2;
		c.shadowBlur = 2;
		c.shadowColor = 'rgba(0, 0, 0, 0.5)'`,5)				
				].join(br))
			].join(br)),


			detail(gM('Text'),[
				gM('Font')+scegj("c.font='48px serif'"),
				gM('Align')+scegj("c.textAlign='start'")+'end|left|right|center',
				
				gM('Base Line')+scegj("c.textBaseline='alphabetic'")+'top|hanging|middle|ideographic|bottom',
				
				gM('Direction')+scegj("c.direction='ltr'")+'rtl',
				
				
				'fillText(text, x, y [, maxWidth])',
				scegj("c.fillText('Hello Mather', 10, 50)"),
				
				'strokeText(text, x, y [, maxWidth])',
				scegj("c.strokeText('Hello Mather', 10, 50)"),
			
				gM('Measure')+scegj(`
					var t=c.measureText('foo');
					t.width`,5)
			].join(br)),

			detail(gM('Begin Path'),[
				gM('Begin')+scegj('c.beginPath()'),
				
				gM('Move')+' moveTo(x,y)'+scegj('c.moveTo(125,125)',9),

				detail('Path2D()',[
					scegj('var P1=new Path2D()'),
					gM('Clone')+scegj('var P2=new Path2D(P1)'),
					gM('SVG Path')+'d('+gM('String')+')'+
					scegj("var P3=new Path2D('M10 10 h 80 v 80 h -80 Z')",15),
					
					'Path2D.addPath(path [, transform])',
				].join(br))

			].join(br)),
			
			
			detail(gM('Path Shape'),[

				gM('Line.0')+' lineTo(x,y)'+scegj('c.lineTo(155,150)',9),
				
				
				gM('Rectangle')+' rect(x,y,width,height)',
					scegj('c.rect(55,50,100,200)',7),
					
				gM('Ellipse')+' ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)',
					scegj('c.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI)',10),	
				
				gM('arc')+' arc(x,y,radius,startAngle('+gM('rad')+'),endAngle('+gM('rad')+'),anticlockwise)',
				scegj('c.arc(50, 50, 100, 100, 0, Math.PI/180*45,1)',6),
				
				gM('arc')+' arcTo(x1,y1,x2,y2,radius)',
				scegj('c.arcTo(50, 50, 100, 100, 80)',8),
				
				gM('Quadratic Bezier')+' quadraticCurveTo(cp1x, cp1y, x, y)',
				
				scegj('c.quadraticCurveTo(60,120,65,100)',19),
				
				gM('Bezier')+'bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)',
				
				scegj('c.bezierCurveTo(85,25,75,37,75,40)',16),
				
			
			].join(br)),
			
			detail(gM('End Path'),[

				gM('Close')+scegj('c.closePath()'),

				gM('Stroke')+scegj('c.stroke()'),
				gM('Fill')+scegj('c.fill()'),
				detail(gM('Fill Method'),[
					scegj("c.fill('nonzero')"),
					scegj("c.fill('evenodd')"),
				].join(br)),
				
				gM('Clip')+scegj('c.clip()'),


			].join(br)),
			
			detail(gM('Image'),[
				'drawImage(image, x, y)',
				scegj('c.drawImage(img, 0, 0)'),
				
				'drawImage(image, x, y, width, height)',
				scegj('c.drawImage(img, 0, 0, 100, 200)'),
				
				'drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)',
				scegj('c.drawImage(img, 0, 0, 100,100, 20,20, 80, 80)'),
			
			
			].join(br)),
			

			detail(gM('Transform'),[
				'translate(x, y)',
				scegj('c.translate(100,100)'),
				
				'rotate(angle('+gM('rad')+'))',
				scegj('c.rotate(45 * Math.PI / 180)'),
				
				'scale(x,y)',
				scegj('c.scale(1.2,0.5)'),
				
				
				detail(gM('Matrix'),[
					'transform(scaleX, skewX, skewY, scaleY, dx, dy)',
					'setTransform(scaleX, skewX, skewY,scaleY, dx, dy)',
					gM('Transformation Matrix')+zx("$zmtrx([['scaleX','skewY','dx'],['skewX','scaleY','dy'],[0,0,1]])$"),
					scegj('c.setTransform(1, 0, 0, 1, 0, 0)'),
				].join(br)),
			].join(br)),
			

			detail(gM('2D Animation'),[
			

				sceg('requestAnimationFrame(function)'),
				
				
				
			].join(br)),
			


			
			
			detail(gM('Image Data'),[
				gM('Create')+' createImageData(width, height)|(imgData)',
				scegj('var imgD = ctx.createImageData(100, 100)'),
				scegj('var imgD2 = ctx.createImageData(imgD1)'),
				
				gM('Get')+' getImageData(left, top, width, height)',
				scegj('var imgD = ctx.getImageData(100,100, 150,200)'),
				
				gM('Put')+' putImageData(imgData, dx, dy)',
				
				scegj('c.putImageData(imgD, 0, 0)'),
					
					
			].join(br)),
			
			
			detail(gM('Option'),[
				detail(gM('Smooth'),[
					scegj('c.imageSmoothingEnabled=true'),
					scegj("c.imageSmoothingQuality='low'")+'|high',
				].join(br)),
				
				detail(gM('Point'),[
					detail(gM('Path'),[
						'(x, y)',
						'(x, y, fillRule)',
						'(path, x, y)',
						'(path, x, y, fillRule)',
						scegj('var b=c.isPointInPath(10,10)'),
						].join(br)),
					
					detail(gM('Stroke'),[
						'(x, y)',
						'(path, x, y)',
						scegj('var b=c.isPointInStroke(10,10)'),
						].join(br)),
				].join(br)),
				
				
				gM('Region')+scegj(`
	c.beginPath();
	c.arc(70, 80, 10, 0, 2 * Math.PI, false);
	c.fill();
	c.addHitRegion({id: "circle"});

	C.addEventListener("mousemove", function(e){
	if(e.region) {
		console.log("hit region:" + e.region);
	}
	})`,5),
				gM('Focus')+scegj('c.drawFocusIfNeeded(element)')+'|(Path2D, element)',
		
				gM('Attribute')+scegj('c.getContextAttributes()'),
					
			
				detail(gM('Composite'),[
					'globalCompositeOperation=type',
					'[source|destination]-[over|atop|in|out]',
					'[hard|soft]-light',
					'color-[dodge|burn]',
					'lighter copy xor multiply','screen overlay darken lighten',
					'difference exclusion hue','saturation color luminosity',

					scegj("c.globalCompositeOperation='source-over'",5),
				
				].join(br)),
	].join(br)),
			
			detail(gM('Save'),[
				scegj('c.save()'),
				scegj('c.restore()'),
				
				detail('canvas',[
					detail('toDataURL()',[
						scegj("var u=c.canvas.toDataURL('image/png')"),
						scegj("var u=c.canvas.toDataURL('image/jpeg',0.5)"),
					].join(br)),
					detail('toBlob(callback, type, encoderOptions)',[
						scegj("var b=c.canvas.toBlob(callback, type, encoderOptions)",5)
					].join(br)),
					
					detail('OffscreenCanvas(x,y)',[
						scegj(`
	var one=$('#caps')[0].getContext('bitmaprenderer'); 
	var two=$('#ican')[0].getContext('bitmaprenderer'); 
	var os = new OffscreenCanvas(256, 256);
	var gl = os.getContext('webgl');
	var b1 = offscreen.transferToImageBitmap();
	one.transferImageBitmap(b1);
	var b2 = offscreen.transferToImageBitmap();
	two.transferImageBitmap(b2);`,5),
						
					].join(br)),
				].join(br)),
				
				
			
			].join(br)),
		
		].join('')),
		
		detail('3D',[
			detail(gM('3D Animation'),[
			

				detail(gM('Initialize'),[
	
					scegj('C.width=300;C.height=300',5)
				].join(br))
			].join(br)),
		
		
		].join('')),


		'rough.js '+github('rough-stuff/rough/wiki'),

	].join(''),



	//3D zdog


			
	'Zdog':[

		href(Hs+'zzz.dog/api','Zdog API'),
		detail(gM('Initialize'),[
			'Illustration'+
			scegj(`
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
let rect = new Zdog.Rect({
	addTo: zo,
	width: 120,
	height: 80,
	stroke: 2,
	color: '#E62',
});

function animate() {
	if ( isSpinning && C.getAttribute('spinning')=='true') {
		zo.rotate.y += 0.03;
	}
	zo.updateRenderGraph();
	requestAnimationFrame( animate );
}
animate()
`,0)].join(br)),
		detail(gM('Animate'),scegj(`
function animate() {
	if ( isSpinning ) {
		zo.rotate.y += 0.03;
	}
	zo.updateRenderGraph();
	requestAnimationFrame( animate );
}
animate()`,0)),
		detail(gM('Setting'),[
				gM('New')+
				scegj(`
let zo = new Zdog.Illustration({
	element: C,
})`,0),


			gM('Zoom')+sceg2('zoom: 4'),

			gM('Center')+sceg2('centered: false')+'| true',

			gM('Drag Rotate')+sceg2('dragRotate: true'),

			gM('Transform'),
			sceg2('translate:{x:20}'),
			sceg2('rotate:{y: Zdog.TAU/8}'),
			sceg2('scale:{z:2}'),

			gM('Resize'),
			sceg2('resize:false')+"| true | 'fullscreen'",

			gM('Width')+'|'+gM('Height'),
			//scegj('$(C.ctx.canvas).width(300).height(300)',0),
			scegj('C.width=300;C.height=300',0),
			scegj('zo.setSize( width, height )'),
			

		].join(br)),


		detail(gM('Operate'),[

			detail(gM('Copy'),[
				'obj'+scegj('.copy()'),
				'obj'+scegj(".copy({translate: { x: 48 },color: '#C25',})"),

				gM('with descendents'),
				'obj'+scegj('.copyGraph()'),
				'obj'+scegj(".copyGraph({translate: { x: 48 },color: '#C25',})"),
			].join(br)),

			detail(gM('Remove'),[
				'obj'+scegj('.remove()'),

			].join(br)),

			detail(gM('Child'),[
				'obj1'+scegj('.addChild(obj2)'),
				'obj1'+scegj('.removeChild(obj2)'),
			].join(br)),
			

			detail(gM('Update'),[
				scegj('zo.updateRenderGraph()',0),
				'obj'+scegj('.updateGraph()'),

			].join(br)),

			detail(gM('Render'),[
	
				'obj'+scegj('.renderGraphCanvas( ctx )'),
				'obj'+scegj('.renderGraphSvg( svg|g )'),

				scegj('zo.renderGraph()'),
				scegj('zo.renderGraph( item )'),

				scegj('zo.updateRenderGraph()'),
				scegj('zo.updateRenderGraph( item )'),



			].join(br)),

			detail(gM('Size'),[
				scegj('zo.setSize( width, height )'),
			].join(br)),


		].join('')),



		

		detail(gM('Structure'),[
						
			detail(gM('Anchor'),[
				'new Zdog.Anchor()',
				scegj(`
let zAc1 = new Zdog.Anchor({
	addTo: illo,
	scale: 1.5,
	translate: { z: 40 },
	rotate: { z: -Zdog.TAU/8 },
})`)
			].join(br)),

			detail(gM('Group'),[
				'new Zdog.Group()',
				scegj(`
let zAc2 = new Zdog.Group({
	addTo: illo,
	scale: 1.5,
})`)
			].join(br)),	
		].join('')),

		detail('2D '+gM('Shape'),[
						
			detail(gM('Rectangle'),[
				'new Zdog.Rect()',
				scegj(`
let rect = new Zdog.Rect({
	addTo: zo,
	width: 120,
	height: 80,
	stroke: 1,
	color: '#E62',
})`,0),

			].join(br)),

			detail(gM('Rounded Rectangle'),[
				'new Zdog.RoundedRect()',
				scegj(`
var rr = new Zdog.RoundedRect({
	addTo: zo,
	width: 120,
	height: 80,
	cornerRadius: 30,
	stroke: 2,
	color: '#EA0',
})`,0),

			].join(br)),

			detail(gM('Ellipse'),[
				'new Zdog.Ellipse()',
				gM('Circle')+scegj(`
var ccl = new Zdog.Ellipse({
	addTo: zo,
	diameter: 72,
	stroke: 2,
	color: '#E62',
})`,0),
				gM('Semi-circle')+scegj(`
var semic = new Zdog.Ellipse({
addTo: zo,
diameter: 80,
quarters: 2,
stroke: 2,
color: '#C25',
})`,0),
				gM('Ellipse')+scegj(`
var ell = new Zdog.Ellipse({
	addTo: zo,
	width: 172,
	height:40,
	stroke: 2,
	color: '#E62',
})`,0),

			].join(br)),

			detail(gM('Polygon'),[
				'new Zdog.Polygon()',
				gM('Pentagon')+scegj(`
var pg = new Zdog.Polygon({
	addTo: zo,
	radius: 60,
	sides: 5,
	stroke: 2,
	color: '#EA0',
})`,0),

			].join(br)),

			detail(gM('Path'),[
				'new Zdog.Shape({path:})',
				gM('Dot')+scegj(`
let dt = new Zdog.Shape({
	addTo: zo,
	stroke: 1,
	color: '#636',
})`,0),

				gM('Line.0')+scegj(`
let ln = new Zdog.Shape({
	addTo: zo,
	path: [
	{ x: -40 }, // start at 1st point
	{ x:  40 }, // line to 2nd point
	],
	stroke: 2,
	color: '#636',
})`,0),

				'Z-'+gM('Shape')+scegj(`
let lnZ = new Zdog.Shape({
	addTo: zo,
	path: [
		{ x: -32, y: -40 }, // start at top left
		{ x:  32, y: -40 }, // line to top right
		{ x: -32, y:  40 }, // line to bottom left
		{ x:  32, y:  40 }, // line to bottom right
		],
	closed: false,
	stroke: 2,
	color: '#636',
})`,0),

				'3D Z-'+gM('Shape')+scegj(`
let lnZ3D = new Zdog.Shape({
	addTo: zo,
	path: [
		{ x: -32, y: -40, z:  40 },
		{ x:  32, y: -40 },
		{ x:  32, y:  40, z:  40 },
		{ x:  32, y:  40, z: -40 },
	],
	closed: false,
	stroke: 2,
	color: '#636',
})`,0),

				gM('Move')+scegj(`
let lnmv = new Zdog.Shape({
	addTo: zo,
	path: [
		{ x: -40, y: -32 },          // start at top left
		{ x:  40, y: -32 },          // line to top right
		{ move: { x: -40, y: 32 } }, // move to bottom left
		{ x:  40, y:  32 },          // line to bottom right
		],
	closed: false,
	stroke: 2,
	color: '#636',
})`,0),

				gM('Arc')+scegj(`
let arc = new Zdog.Shape({
	addTo: zo,
	path: [
		{ x: -60, y: -60 },   // start
		{ arc: [
			{ x:  20, y: -60 }, // corner
			{ x:  20, y:  20 }, // end point
		]},
		{ arc: [ // start next arc from last end point
			{ x:  20, y:  60 }, // corner
			{ x:  60, y:  60 }, // end point
		]},
		],
	closed: false,
	stroke: 2,
	color: '#636',
})`,0),


				gM('Bezier')+scegj(`
let bz = new Zdog.Shape({
	addTo: zo,
	path: [
		{ x: -60, y: -60 },   // start
		{ bezier: [
			{ x:  20, y: -60 }, // start control point
			{ x:  20, y:  60 }, // end control point
			{ x:  60, y:  60 }, // end point
		]},
		],
	closed: false,
	stroke: 20,
	color: '#636',
})`,0),

				gM('Closed')+'('+gM('default')+')'+scegj(`
let bz = new Zdog.Shape({
	addTo: zo,
	path: [ // triangle
		{ x:   0, y: -40 },
		{ x:  40, y:  40 },
		{ x: -40, y:  40 },
		],
		// closed by default
	stroke: 2,
	color: '#636'
})`,0),


			].join(br)),

		].join('')),

		detail('3D '+gM('Shape'),[

			
			detail(gM('Sphere'),[
				scegj(`
let dome = new Zdog.Shape({
	addTo: zo,
	stroke: 80,
	color: '#C25',

})`,0),

			].join(br)),

			detail(gM('Hemi-sphere'),[
				'new Zdog.Hemisphere()',
				scegj(`
let dome = new Zdog.Hemisphere({
	addTo: zo,
	diameter: 120,
	// fill enabled by default
	// disable stroke for crisp edge
	stroke: false,
	color: '#C25',
	backface: '#EA0',
})`,0),

			].join(br)),

			detail(gM('Cone'),[
				'new Zdog.Cone()',
				scegj(`
let hat = new Zdog.Cone({
	addTo: zo,
	diameter: 70,
	length: 90,
	stroke: false,
	color: '#636',
	backface: '#C25',
})`,0),

			].join(br)),

			detail(gM('Cylinder'),[
				'new Zdog.Cylinder()',
				scegj(`
let cy = new Zdog.Cylinder({
	addTo: zo,
	diameter: 80,
	length: 120,
	stroke: false,
	color: '#C25',
	backface: '#E62',
})`,0),
				gM('Face')+scegj(`
let cyface = new Zdog.Cylinder({
	addTo: zo,
	diameter: 80,
	length: 120,
	stroke: false,
	color: '#C25',
	frontFace: '#EA0',
	backface: '#636',
})`,0),
			].join(br)),


			detail(gM('Box'),[
				'new Zdog.Box()',

				'6-'+gM('Face')+scegj(`
let box6 = new Zdog.Box({
	addTo: zo,
	width: 80,
	height: 80,
	depth: 80,
	stroke: false,
	color: '#C25', // default face color

	frontFace: 'green',
	rearFace: 'blue',
	leftFace: '#EA0',
	rightFace: '#E62',
	topFace: '#ED0',
	bottomFace: '#636',

	rotate: {
		x: Zdog.TAU/60,
		y: Zdog.TAU/60,
		z: Zdog.TAU/60
	},
})`,0),

				'4-'+gM('Face')+scegj(`
let box4 = new Zdog.Box({
	addTo: zo,
	width: 120,
	height: 100,
	depth: 80,
	stroke: false,
	color: '#C25',
	// remove left & right faces
	leftFace: false,
	rightFace: false,
	rearFace: '#EA0',
	topFace: '#ED0',
	bottomFace: '#636',
})`,0),

			].join(br)),


			detail(gM('Path'),[
				'new Zdog.Shape({path:})',

				'3D Z-'+gM('Shape')+scegj(`
let lnZ3D = new Zdog.Shape({
	addTo: zo,
	path: [
		{ x: -32, y: -40, z:  40 },
		{ x:  32, y: -40 },
		{ x:  32, y:  40, z:  40 },
		{ x:  32, y:  40, z: -40 },
	],
	closed: false,
	stroke: 2,
	color: '#636',
})`,0),

		
			].join(br)),




		].join('')),

		detail(gM('Shape Attribute'),[
			gM('Color')+sceg2('color: "#eee"')+'| rgb() | hsla()',
			gM('Stroke')+sceg2('stroke: 2')+'| 0 | false',
			gM('Fill')+sceg2('fill: true')+'| false',
			gM('Closed')+sceg2('closed: false')+'| true',
			gM('Visible')+sceg2('visible: false')+'| true',
			gM('Backface')+sceg2('backface: "#A2C347"')+'| false | true',
			gM('Frontface')+sceg2('front: { z: 1 }'),

		].join(br)),

		detail(gM('Group Attribute'),[

			gM('Update')+sceg2('updateSort: false')+'| true',
			gM('Visible')+sceg2('visible: false')+'| true',


		].join(br)),



		detail(gM('Transform'),[
			gM('Translate.Math')+sceg2('translate: { x: 40 }')+'| y | z ',
			'旋转x,y,z分别是围绕x水平坐标轴，y竖直坐标轴，Z前后坐标轴旋转',
			gM('Rotate Back')+sceg2('rotate: {x: Zdog.TAU/8}'),
			gM('Rotate 45°')+sceg2('rotate: { z: -Zdog.TAU/8 }'),

			scegj('normalizeRotate()'),
		].join(br)),

		detail(gM('Vector'),[
			'new Zdog.Vector()',
			scegj(`
var v=new Zdog.Vector({ x: 1, z: 2, y: Zdog.TAU/4 })`,0),
			sceg2('.set({ y: 2 })'),
			sceg2('.copy()'),

			gM('Math Opertation'),
			sceg2('.add({ y: 2 })'),
			sceg2('.subtract({ y: 2 })'),
			sceg2('.multiply({ y: 2 })'),
			sceg2('.rotate({ z: Zdog.TAU/4 })'),

			gM('Magnitude')+'vector.magnitude()',
			scegj('var v=new Zdog.Vector({ x: 6, y: 8 }), m=v.magnitude()',0),

			gM('Lerp')+'vector.lerp( point, alpha )',
			scegj('var v=new Zdog.Vector({ x: 2, y: 4 }), m=v.lerp( { x: 6, y: 8 }, 0.75 )',0),

		].join(br)),


				
		detail(gM('Event'),[

			gM('Drag'),
			sceg2('startElement: zo.element')+'| .zdog-canvas',
			sceg2('onDragStart: function(pointer){}')+'pointer.pageX, pointer.pageY',
			sceg2('onDragMove: function(pointer, moveX, moveY){}'),
			sceg2('onDragEnd: function(){}'),

			gM('Resize'),
			sceg2('onResize: function( width ){}'),

			gM('Render'),
			sceg2('onPrerender: function( context ){}'),

			

		].join(br)),

		detail('Zdog',[

			sceg2('Zdog.TAU')+'= Math.PI * 2',
			sceg2('Zdog.easeInOut( alpha, power||2 )'),
			sceg2('Zdog.extend( obj1, obj2 )'),
			gM('Lerp')+sceg2('Zdog.lerp( a, b, alpha )'),
			'mod'+sceg2('Zdog.modulo( a, b )'),

			

		].join(br)),

	].join(''),




		
	'Rough':[

		'rough.js '+github('rough-stuff/rough/wiki'),
		detail(gM('Initialize'),[
			'rough.canvas(canvas);',
			'svg.appendChild(rough.svg(svg).method);',
			scegj(`var rc=rough.canvas(C)`,0)+scegj(`var rc=rough.svg(C)`,0)+scegj(`C.appendChild(rc.line)`,0)
		].join(br)),

		detail(gM('Property'),[
			'generator '+scegj(`var rc2=rc.generator; rc2.rectangle(10, 10, 100, 100);`,10),
		].join(br)),

		detail(gM('Option'),[
			sceg2(`,{seed:11}`),
			sceg2(`,{strokeWidth:2}`),
			sceg2(`,{curveStepCount:9}`),


			'[0,1]',
			sceg2(`,{roughness:0}`),
			sceg2(`,{bowing:0}`),
			sceg2(`,{curveFitting:0.95}`),

			detail('SVG (Only)',[
				sceg2(`,{simplification:0.5}`),

			].join(br)),

			gM('Boolean'),
			sceg2(`,{disableMultiStroke:true}`),
			sceg2(`,{disableMultiStrokeFill:true}`),

			gM('Dash Offset'),
			sceg2(`,{strokeLineDash:[1,3]}`),
			sceg2(`,{fillLineDash:[1,3]}`),
			sceg2(`,{strokeLineDashOffset:3}`),
			sceg2(`,{fillLineDashOffset:3}`),


			detail(gM('Fill Style'),[
				sceg2(`,{fillStyle:'hachure',fillWeight:3, hachureAngle:60, hachureGap:3}`),
				sceg2(`,{fillStyle:'solid'}`),
				sceg2(`,{fillStyle:'zigzag'}`),
				sceg2(`,{fillStyle:'cross-hatch'}`),
				sceg2(`,{fillStyle:'dots', fillWeight:3}`),
				sceg2(`,{fillStyle:'dashed', dashOffset:2, dashGap:3}`),
				sceg2(`,{fillStyle:'zigzag-line', zigzagOffset:2}`),
			].join(br),1),



			gM('Color'),
			sceg2(`,{stroke: 'blue', fill: 'red'}`)


		].join(br)),

		gM('Shape'),
		'line (x1, y1, x2, y2 [, options])',
		scegj(`rc.line(60, 60, 190, 60)`),

		'rectangle (x, y, width, height [, options])',
		scegj(`rc.rectangle(10, 10, 100, 100)`),

		'ellipse (x, y, width, height [, options])',
		scegj(`rc.ellipse(30, 50, 150, 80)`),

		'circle (x, y, diameter [, options])',
		scegj(`rc.circle(80, 50, 80)`),

		'linearPath (points [, options])',
		scegj(`rc.linearPath([[60, 10], [70, 20], [75, 30], [69, 50]])`),

		'polygon (vertices [, options])',
		scegj(`rc.polygon([[60, 10], [90, 40], [50, 20], [20, 50]])`),


		'arc (x, y, width, height, start, stop, closed [, options])',
		scegj(`rc.arc(50, 30, 200, 180, Math.PI, Math.PI * 1.6, true)`),

		'curve (points [, options])',
		scegj(`rc.curve([[60, 30], [70, 40], [90, 20]])`),

		'path (d [, options])',
		scegj(`rc.path('M37,17v15H14V17z M50,0H0v50h50z')`),

	].join(br),

	
	'MathBox':[

		'mathbox '+github('unconed/mathbox'),
		detail('Demo',[
			gM('Grid')+scegj(`mathbox = mathBox({
				plugins: ['core', 'controls', 'cursor'],
				controls: {
				  klass: THREE.OrbitControls
				},
			  });
			  three = mathbox.three;
		  
			  three.camera.position.set(2.3, 1, 2);
			  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
		  
			  view = mathbox.cartesian({
				range: [[-2, 2], [-1, 1], [-1, 1]],
				scale: [2, 1, 1],
			  });
			  view.grid({
				divideX: 20,
				width: 5,
				opacity: 0.3,
			  });
			  view.grid({
				axes: "xz",
				divideX: 10,
				divideY: 5,
				width: 5,
				opacity: 0.8,
			  });`,10),


			'xyzw'+scegj(`mathbox = mathBox({
				plugins: ['core', 'controls', 'cursor'],
				controls: {
				  klass: THREE.OrbitControls
				},
			  });
			  three = mathbox.three;
		  
			  three.camera.position.set(2.3, 1, 2);
			  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
		  
			  view = mathbox.cartesian({
				range: [[-6, 6], [-1, 1], [-1, 1]],
				scale: [6, 1, 1],
			  });
		  
			  view.interval({
				width: 128,
				expr: function (emit, x, i, time) {
				  var d = Math.sin((x + time) * 2);
		  
				  emit(x, 0);
				  emit(x, d * .5);
				},
				items: 2,
				channels: 2,
			  });
			  view.line({
				color: 0x3090FF,
				width: 10,
			  });`,10),


			gM('Feedback')+scegj(`mathbox = mathBox({
				plugins: ['core', 'cursor'],
				controls: {
				  klass: THREE.OrbitControls
				},
			  });
			  three = mathbox.three;
		  
			  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
		  
			  view = mathbox
			  .set({
				focus: 3
			  })
			  .rtt({
				type: 'float',
			  })
			  .camera({
				lookAt: [0, 0, 0]
				}, {
				position: function(t){
					return [Math.cos(t)*3, 0, Math.sin(t)*3]
				}
			  })
			  .compose({
				color: '#fcfbfa',
				zWrite: false,
			  })
			  .cartesian({
				range: [[-2, 2], [-1, 1], [-1, 1]],
				scale: [2, 1, 1],
			  }).grid({
				divideX: 2,
				divideY: 2,
				opacity: .25,
			  });
		  
			  mathbox.compose({
				color: '#fff',
			  });`,10),

			gM('Vector')+scegj(`mathbox = mathBox({
				plugins: ['core', 'controls', 'cursor'],
				controls: {
				  klass: THREE.OrbitControls
				},
				camera: {
				  fov: 30,
				},
			  });
			  three = mathbox.three;
		  
			  three.camera.position.set(0, 0, 6);
			  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
		  
			  view = mathbox.set('focus', 6).cartesian({
				range: [[-2, 2], [-1, 1], [-1, 1]],
				scale: [2, 1, 1],
			  });
		  
			  view.interval({
				id: 'sampler',
				width: 64,
				expr: function (emit, x, i, t) {
				  y = Math.sin(x + t) + (i%2)*Math.sin(x * 400000 + t * 5 + x * x * 10000)*.05;
				  emit(x, y);
				  emit(x, -y);
				},
				items: 2,
				channels: 2,
			  });
		  
			  view.vector({
				points: '#sampler',
				color: 0x3090FF,
				width: 4,
				start: true,
			  });`,10),

			gM('Camera')+scegj(`mathbox = mathBox({
				plugins: ['core'],
			  });
			  three = mathbox.three;
		  
			  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
		  
			  view = mathbox.cartesian({
				range: [[-1, 1], [-1, 1], [-1, 1]],
				scale: [1, 1, 1],
			  });
		  
			  var camera = view.camera({
				lookAt: [0, 0, 0],
			  }, {
				position: function (t) { return [-3 * Math.cos(t) + 1, .4 * Math.cos(t * .381) + 1, -3 * Math.sin(t) + 1] },
			  });
		  
			  view
				.transform({
				  position: [0, .5, 0]
				})
				  .grid({
					axes: [1, 3],
					width: 2,
					color: 0xb0b0b0,
					depth: .5
				  })
				.end()
				.transform({
				  position: [0, -.5, 0]
				})
				  .grid({
					axes: [1, 3],
					width: 2,
					color: 0x2fff90,
					depth: .5
				  })
				.end()`,10),


				gM('helix')+scegj(`mathbox = mathBox({
					plugins: ['core', 'controls', 'cursor'],
					controls: {
					  klass: THREE.OrbitControls
					},
				  });
				  three = mathbox.three;
			  
				  three.camera.position.set(2.3, 1, 2);
				  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
			  
				  view = mathbox.cartesian({
					range: [[-6, 6], [-1, 1], [-1, 1]],
					scale: [6, 1, 1],
				  });
			  
				  view.axis({
					width: 5,
					start: true,
					end: true,
				  });
			  
				  view.interval({
					width: 128,
					expr: function (emit, x, i, time) {
					  var theta = x + time;
					  var a = Math.cos(theta);
					  var b = Math.sin(theta);
			  
					  emit(x, a, b);
					  emit(x, -a, -b);
					},
					items: 2,
					channels: 3,
				  });
			  
				  view.line({
					color: 0x3090FF,
					width: 10,
					size: 2.5,
					start: true,
					end: true,
				  });
			  `,10),
			  
			  
			  gM('Spread')+scegj(`
			  mathbox = mathBox({
					plugins: ['core', 'controls', 'cursor'],
					controls: {
					  klass: THREE.OrbitControls
					},
				  });
				  three = mathbox.three;
			  
				  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
			  
				  view = mathbox
				  .camera({
					proxy: true,
					position: [2.3, 1, 2],
				  })
				  .cartesian({
					range: [[-6, 6], [-1, 1], [-1, 1]],
					scale: [6, 1, 1],
				  });
			  
				  view.area({
					width: 16,
					height: 16,
					expr: function (emit, x, y, i, j, t) {
					  var d = Math.sin((x + y + t));
			  
					  emit(0);
					  emit(.5 + d * .5);
					},
					items: 2,
					channels: 1,
				  });
				  view.swizzle({
					order: 'yx',
				  });
				  view.spread({
					unit: 'absolute',
					width:  [.1, 0,  0],
					height: [ 0, 0,.25],
				  });
				  view.vector({
					color: 0x3090FF,
					width: 10,
				  });
			  
			  
			  `,10),
			  
			  

			gM('Shapes')+scegj(`mathbox = mathBox({
				plugins: ['core', 'controls', 'cursor'],
				controls: {
				  klass: THREE.OrbitControls,
				  parameters: {
					noZoom: true
				  },
				},
				camera: {
				  fov: 20,
				},
				loop: {
				  start: window == window.top,
				},
			  });
			  three = mathbox.three;
		  
			  three.camera.position.set(2, 2, 4);
			  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
		  
			  view = mathbox.set({scale: 500, 'focus': 5}).cartesian({
				range: [[-2, 2], [-1, 1], [-1, 1]],
				scale: [3.5, 1, 1],
			  });
		  
			  view.voxel({
				data: [
					   -1, -1, -.5, -.75, -.75, -1.2, -.4, -.6, -1.5, 0, 0, 0, 
					   -1,  1, -.5, -.75,  .75, -1.2, -.4,  .6, -1.5, 0, 0, 0, 
						1,  1, -.5,  .75,  .75, -1.2,  .4,  .6, -1.5, 0, 0, 0, 
						1, -1, -.5,  .75, -.75, -1.2,  .4, -.6, -1.5, 0, 0, 0, 
		  
					   -1, -1,  .5, -.75, -.75,  1.2, -.4, -.6,  1.5, 0, 0, 0, 
					   -1,  1,  .5, -.75,  .75,  1.2, -.4,  .6,  1.5, 0, 0, 0, 
						1,  1,  .5,  .75,  .75,  1.2,  .4,  .6,  1.5, 0, 0, 0, 
						1, -1,  .5,  .75, -.75,  1.2,  .4, -.6,  1.5, 0, 0, 0, 
					  ],
				width: 4,
				height: 2,
				depth: 1,
				items: 4,
				channels: 3,
			  });
		  
			  view
			  .transform({
				pass: 'eye',
				position: [-.8, .4, -4],
				scale: [1/6, 1/6, 1/6],
			  })
				.point({
				  color: 0x3090FF,
				  size: 3,
				})
				.array({
				  data: [0, 0, 0],
				  channels: 3,
				})
				.text({
				  data: ['Point'],
				})
				.label({
				  offset: [0, -140],
				  zIndex: 1,
				  color: 'black',
				});
		  
			  view
			  .transform({
				pass: 'eye',
				position: [0, .4, -4],
				scale: [1/6, 1/6, 1/6],
			  })
				.line({
				  color: 0x3090FF,
				  size: 3,
				})
				.array({
				  data: [0, 0, 0],
				  channels: 3,
				})
				.text({
				  data: ['Line'],
				})
				.label({
				  offset: [0, -140],
				  zIndex: 1,
				  color: 'black',
				});
		  
			  view
			  .transform({
				pass: 'eye',
				position: [.8, .4, -4],
				scale: [1/6, 1/6, 1/6],
			  })
				.surface({
				  color: 0x3090FF,
				  shaded: true,
				  width: 3,
				})
				.surface({
				  color: 0x3090FF,
				  fill: false,
				  lineX: true,
				  lineY: true,
				  width: 3,
				})
				.array({
				  data: [0, 0, 0],
				  channels: 3,
				})
				.text({
				  data: ['Surface'],
				})
				.label({
				  offset: [0, -140],
				  zIndex: 1,
				  color: 'black',
				});
		  
			  view
			  .transform({
				pass: 'eye',
				position: [-.8, -.4, -4],
				scale: [1/6, 1/6, 1/6],
			  })
				.vector({
				  color: 0x3090FF,
				  width: 3,
				  start: true,
				})
				.array({
				  data: [0, 0, 0],
				  channels: 3,
				})
				.text({
				  data: ['Vector'],
				})
				.label({
				  offset: [0, -140],
				  zIndex: 1,
				  color: 'black',
				});
		  
			  view
			  .transform({
				pass: 'eye',
				position: [0, -.4, -4],
				scale: [1/6, 1/6, 1/6],
			  })
				.strip({
				  color: 0x0090FF,
				  width: 3,
				  shaded: true,
				})
				.strip({
				  color: 0x3090FF,
				  width: 3,
				  fill: false,
				  line: true,
				})
				.array({
				  data: [0, 0, 0],
				  channels: 3,
				})
				.text({
				  data: ['Strip'],
				})
				.label({
				  offset: [0, -140],        
				  zIndex: 1,
				  color: 'black',
				});
		  
			  view
			  .transform({
				pass: 'eye',
				position: [.8, -.4, -4],
				scale: [1/6, 1/6, 1/6],
			  })
				.face({
				  color: 0x3090FF,
				  width: 3,
				  line: false,
				  shaded: true,
				})
				.face({
				  color: 0x3090FF,
				  width: 3,
				  fill: false,
				  line: true,
				})
				.array({
				  data: [0, 0, 0],
				  channels: 3,
				})
				.text({
				  data: ['Face'],
				})
				.label({
				  offset: [0, -140],
				  zIndex: 1,
				  color: 'black',
				});
		  `,0),

		  	gM('Cylindrical')+scegj(` var mathbox = mathBox({
				plugins: ['core', 'controls', 'cursor'],
				controls: {
				  klass: THREE.OrbitControls
				},
			  });
			  var three = mathbox.three;
		  
			  three.camera.position.set(5.5, .5, -2.3);
			  three.renderer.setClearColor(new THREE.Color(0x000000), 1.0);
		  
			  var objs = null
			  var time = 0
			  var scrub = 0
			  three.on('update', function () {
				clock = three.Time.frames / 60
				time = clock
		  
				t = Math.max(clock, 0) / 2
				t = t < .5 ? t * t : t - .25
		  
				scrub = t
		  
				f = t / 8;
				c = Math.cos(f);
				s = Math.sin(f);
				view.set('quaternion', [0, -s, 0, c]);
		  
				t = Math.max(clock - 4, 0) / 2
				t = t < .5 ? t * t : t - .25
		  
				f = t / 3.71;
				c = Math.cos(f);
				s = Math.sin(f);
		  
				if (objs)
				  objs.set('quaternion', [-s, 0, 0, c]);
			  });
		  
			  view = mathbox
				.unit({
				  scale: 600,
				})
				.polar({
				  range: [[-π, π], [0, 1], [-1, 1]],
				  scale: [2, 2, 2],
				});
		  
			  view
			  .transform({
				position: [0, .5, 0],
			  })
			  .grid({
				unitX: π / 6,
				baseX: 2,
				zWrite: false,
				detailX: 81,
				divideX: 6,
				divideY: 10,
				axes: 'xz',
				blending: 'add',
				color: 0x00F0B0,
				opacity: .2,
			  })
		  
			  view
			  .transform({
				position: [0, .5, 0],
			  })
			  .grid({
				unitX: π / 3,
				baseX: 2,
				zWrite: false,
				detailX: 81,
				divideX: 3,
				divideY: 3,
				axes: 'xz',
				blending: 'add',
				color: 0x00F0B0,
				opacity: .2,
			  })
		  
			  view
			  .transform({
				position: [0, 1, 0],
			  })
			  .grid({
				unitX: π / 3,
				baseX: 2,
				zWrite: false,
				detailX: 81,
				divideX: 3,
				divideY: 3,
				axes: 'xz',
				blending: 'add',
				color: 0x00F0B0,
				opacity: .36,
			  })
		  
			  view.interval({
				centered: true,
				axis: 'z',
				width: 512,
				history: 64,
				expr: function (emit, x, i) {
				  j = Math.floor(i/2);
				  theta = scrub * (1 + Math.sin(j * j * j + j) * .5) * 4;
				  rad = Math.sin(j * 12 + j * j) * .5 + Math.sin((j * .018 + 1 + Math.sin(j) * .3) * time);
				  emit(theta, rad * .5, x / π);
				},
				channels: 3,
			  });
			  view.split({
				axis: 'width',
				length: 2,
			  });
			  view.spread({
				unit: 'absolute',
				width: [0, 0, .03/π, 0],
				id: 'split',
			  });
			  view.transpose({
				order: "xzyw",
				id: 'strips',
			  });
		  
			  view
			  .transform({
				classes: ['surface'],
				position: [0, .75, 0],
				scale: [1, 1, π],
			  })
			  .surface({
				width: 2,
				zBias: 2,
				color: 0x1550FF,
				fill:  false,
				lineY: true,
			  });
			  view
			  .transform({
				classes: ['surface'],
				position: [0, .75, 0],
				scale: [1, 1, π],
			  })
			  .surface({
				width: 2,
				color: 0x2070FF,
				shaded: true
			  });
		  
			  objs = mathbox.select('transform.surface');
		  `,10),
		  
		 	gM('Cylindrical Stream')+scegj(`var mathbox = mathBox({
				plugins: ['core', 'controls', 'cursor'],
				controls: {
				  klass: THREE.OrbitControls
				},
			  });
			  var three = mathbox.three;
		  
			  three.camera.position.set(5.5, .5, -2.3);
			  three.renderer.setClearColor(new THREE.Color(0x000000), 1.0);
		  
			  var objs = null
			  var time = 0
			  three.on('update', function () {
				clock = three.Time.frames / 60
				time = clock
		  
				t = Math.max(clock, 0) / 2
				t = t < .5 ? t * t : t - .25
			
				f = t / 8;
				c = Math.cos(f);
				s = Math.sin(f);
				view.set('quaternion', [0, -s, 0, c]);
		  
				t = Math.max(clock - 4, 0) / 2
				t = t < .5 ? t * t : t - .25
		  
				f = t / 3.71;
				c = Math.cos(f);
				s = Math.sin(f);
		  
				if (objs)
				  objs.set('quaternion', [-s, 0, 0, c]);
			  });
		  
			  view = mathbox
				.unit({
				  scale: 720,
				  focus: 4,
				})
				.polar({
				  range: [[-π, π], [0, 1], [-1, 1]],
				  scale: [2, 2, 2],
				});
		  
			  view
			  .transform({
				position: [0, .5, 0],
			  })
			  .grid({
				unitX: π / 6,
				baseX: 2,
				zWrite: false,
				detailX: 81,
				divideX: 6,
				divideY: 10,
				axes: 'xz',
				blending: 'add',
				color: 0x00F0B0,
				opacity: .2,
			  })
		  
			  view
			  .transform({
				position: [0, .5, 0],
			  })
			  .grid({
				unitX: π / 3,
				baseX: 2,
				zWrite: false,
				detailX: 81,
				divideX: 3,
				divideY: 3,
				axes: 'xz',
				blending: 'add',
				color: 0x00F0B0,
				opacity: .2,
			  })
		  
			  view
			  .transform({
				position: [0, 1, 0],
			  })
			  .grid({
				unitX: π / 3,
				baseX: 2,
				zWrite: false,
				detailX: 81,
				divideX: 3,
				divideY: 3,
				axes: 'xz',
				blending: 'add',
				color: 0x00F0B0,
				opacity: .36,
			  })
		  
			  view.interval({
				centered: true,
				axis: 'z',
				width: 512,
				history: 64,
				fps: 60,
				expr: function (emit, x, i, t) {
				  j = Math.floor(i/2);
				  theta = t / 2 * (1 + Math.sin(j * j * j + j) * .5) * 4;
				  rad = Math.sin(j * 12 + j * j) * .5 + Math.sin((j * .018 + 1 + Math.sin(j) * .3) * t / 2);
				  emit(theta, rad * .5, x / π);
				},
				channels: 3,
			  });
			  view.split({
				axis: 'width',
				length: 2,
			  });
			  view.spread({
				unit: 'absolute',
				width: [0, 0, .02, 0],
				depth: [0, 0, .01, 0],
				id: 'split',
			  });
			  view.transpose({
				order: "xzyw",
				id: 'strips',
			  });
		  
			  view
			  .transform({
				classes: ['surface'],
				position: [0, .75, 0],
				scale: [1, 1, π],
			  })
				.surface({
				  width: 1.5,
				  zBias: 2,
				  color: 0x3070FF,
				  points: '<',
				  fill:  false,
				  lineY: true,
				});
		  
			  view
			  .transform({
				classes: ['surface'],
				position: [0, .75, 0],
				scale: [1, 1, π],
			  })
				.shader({
				  code: [
					"uniform vec4 dataResolution;",
					"vec4 getPosition(vec4 xyzw);",
					"vec4 getColor(vec4 xyzw) {",
					"  return vec4(mix(vec3(1.0), vec3(1.0, 2.0, 1.5), mod(xyzw.z, 3.0) / 2.0) * (1.0 - vec3(xyzw.y * dataResolution.y)), 1.0);",
					"}",
				  ].join("\n")
				})
				.resample()
				.surface({
				  width: 2,
				  color: 0x3090FF,
				  points: '<<',
				  colors: '<',
				  shaded: true
				});
		  
			  objs = mathbox.select('transform.surface');
		  `,10),

			gM('Scatter')+scegj(`mathbox = mathBox({
				plugins: ['core', 'controls', 'cursor'],
				controls: {
				  klass: THREE.OrbitControls
				},
			  });
			  three = mathbox.three;
		  
			  three.camera.position.set(2.3, 1, 2);
			  three.controls.maxDistance = 5;
			  three.renderer.setClearColor(new THREE.Color(0xFAFAF8), 1.0);
		  
			  view = mathbox
			  .set({
				scale: 360
			  })
			  .cartesian({
				range: [[0, 2], [0, 1], [0, 1]],
				scale: [2, 1, 1],
			  });
		  
			  var colors = {
				x: 0xFF4136,   // red
				y: 0xFFDC00,   // yellow
				z: 0x0074D9,   // blue
				xy: 0xFF851B,  // orange
				xz: 0xB10DC9,  // purple
				yz: 0x2ECC40,  // green
				xyz: 0x654321, // brown
			  }
		  
			  view.scale({
				divide: 5,
				origin: [0,0,1,0],
				axis: "x",
			  }).text({
				live: false,
				data: [0, "½", 1, "1½", 2]
			  }).label({
				color: colors.x,
			  })
		  
			  view.scale({
				divide: 3,
				origin: [0,0,1,0],
				axis: "y",
			  }).text({
				live: false,
				data: [0, "½", 1]
			  }).label({
				color: colors.y,
				offset: [-16, 0]
			  })
		  
			  view.scale({
				divide: 3,
				origin: [2,0,0,0],
				axis: "z",
			  }).text({
				live: false,
				data: [0, "½", 1]
			  }).label({
				color: colors.z,
				offset: [16, 0]
			  })
		  
		  
			  view.grid({
				axes: "xy",
				divideX: 3,
				divideY: 3
			  })
			  .grid({
				axes: "xz",
				divideX: 3,
				divideY: 3,
			  })
			  .grid({
				axes: "yz",
				divideX: 3,
				divideY: 3,
			  })
		  
			  var n = 32; // number of data points
			  view.array({
				id: 'data',
				width: n,
				items: 1,
				channels: 3, // 3 spacial dimensions
				live: false,
				expr: function (emit) {
				  emit(Math.random()*2, Math.random(), Math.random())
				},
			  }).point({
				color: 0x222222,
				size: 12,
			  });
		  
			  view.swizzle({
				source: '#data',
				order: "xyww"
			  }).point({
				color: colors.xy,
				size: 7,
			  });
		  
			  view.swizzle({
				source: '#data',
				order: "xwzw"
			  }).point({
				color: colors.xz,
				size: 7,
			  });
		  
			  view.swizzle({
				source: '#data',
				order: "wyzw"
			  }).point({
				color: colors.yz,
				size: 7,
			  });
		  
			  view.transform({
				position: [0, 1.01, 0],
			  }).swizzle({
				source: '#data',
				order: "xwww"
			  }).point({
				color: colors.x,
				size: 7,
			  });
		  
			  view.transform({
				position: [2.01, 0, 0],
			  }).swizzle({
				source: '#data',
				order: "wyww"
			  }).point({
				color: colors.y,
				size: 7,
			  });
		  
			  view.transform({
				position: [0, 1.01, 0],
			  }).swizzle({
				source: '#data',
				order: "wwzw"
			  }).point({
				color: colors.z,
				size: 7,
			  });
		  `,10),





		
		].join(br)),


	].join(br),


		
	'Lego':[

		href(Hs+'legrajs.com','Legra (Lego brick Graphics)'),
		detail(gM('Initialize'),[
			'new legra(ctx[, size, options])',
			scegj(`C.width=400;C.height=300;
var lg = new legra(c)`,0)
		].join(br)),

		detail(gM('Setting'),[
			scegj(`,{filled:true}`),
			scegj(`,{color:'blue'}`),
			scegj(`,{filled:true, color: 'blue'}`,0)
		].join(br)),

		detail(gM('Line.0'),[
			'line(x1, y1, x2, y2 [, options])',
			scegj(`lg.line(3, 1, 10, 1)`),
			scegj(`lg.line(11, 11, 1, 1, { color: 'red' })`,0)
		].join(br)),

		detail(gM('Rectangle'),[
			'rectangle(x, y, width, height [, options])',
			scegj(`lg.rectangle(12, 2, 8, 8)`,0),
		].join(br)),

		detail(gM('Linear Path'),[
			'linearPath(points [, options])',
			scegj(`
lg.linearPath([
	[1, 1],
	[10, 1],
	[1, 10],
	[10, 10]
])`,0),
		].join(br)),


		detail(gM('Circle'),[
			'circle(xc, yc, radius [, options])',
			scegj(`lg.circle(6, 6, 4)`,0),
		].join(br)),



		detail(gM('Ellipse'),[
			'ellipse(xc, yc, a, b, [, options])',
			scegj(`lg.ellipse(15, 15, 10, 6, { filled: true, color: 'green' })`,0),
		].join(br)),


		detail(gM('Polygon'),[
			'polygon(vertices [, options])',
	scegj(`
lg.polygon([
	[3, 10],
	[22, 18],
	[30, 1],
	[14, 10],
	[8, 2]
], { filled: true, color: 'orange' })`,0),
		].join(br)),




		detail(gM('Arc'),[
			'arc(xc, yc, a, b, start, stop, closed [, options])',
			scegj(`lg.arc(15, 15, 10, 10, Math.PI, Math.PI * 1.5, true)`),
			scegj(`lg.arc(15, 15, 10, 10, 0, Math.PI * .5, true, { 
	filled: true, 
	color: 'orange' 
})`,0),
			scegj(`lg.arc(15, 15, 15, 15, -Math.PI * 0.5, Math.PI * 0.5, false, { 
				color: 'red' 
			})`,0),
		].join(br)),

		detail(gM('Bézier Curve'),[
			'bezierCurve(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2 [, options])',
			scegj(`lg.bezierCurve(3, 3, 8, 30, 18, 1, 22, 14)`)
		].join(br)),


		detail(gM('Quadratic Curve'),[
			'quadraticCurve(x1, y1, cpx, cpy, x2, y2 [, options])',
			scegj(`lg.quadraticCurve(3, 3, 8, 30, 18, 1, 22, 14)`)
		].join(br)),

		detail(gM('Draw Image'),[
			'drawImage(image, dstPoint [, dstSize, srcPoint, srcSize])',
			scegj(`var img=new Image();
img.onload = function () {lg.drawImage(img, [0, 0])};
img.src='img/ZIL.png'`,0),
			scegj(`lg.drawImage(image, [0, 0])`,0)
		].join(br)),




	].join(''),


},function(k,v){
	tooltip[k]=v;
});





