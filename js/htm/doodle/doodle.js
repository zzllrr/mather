/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
var svgid = '#svgShape svg[id', strk, slid, dsh, shps,
	Colors = '000000,F5F5F5,ffffff,FFFAFA;4682B4,87CEFA,87CEFA,FFF5EE;FA8072,F8F8FF,FFB6C1,FFC0CB;ffffff,DCDCDC,000000,696969;8B0000,B22222,CD5C5C,F08080', 
	cap0='<canvas id=caps hidden></canvas><img id=capsimg /><div hidden id=capsdiv>' + dc, reCanvasCode;
	L.canvasCode=L.canvasCode||'';
	L.legoCode=L.legoCode||'';
	L.roughCode=L.roughCode||'';
	L.FGC=/#/.test(L.FGC)?L.FGC:'#000000';
	L.BGC1=/#/.test(L.BGC1)?L.BGC1:'#F5F5F5';
	L.BGC=/#/.test(L.BGC)?L.BGC:'#ffffff';
	L.BGC2=/#/.test(L.BGC2)?L.BGC2:'#FFFAFA';
	L.FGC1=L.BGC1;
	L.FGC2=L.BGC2;
	
$(function () {


	L.drawEnd = '';
	L.drawEnd2 = '';
	L.drawMove = '';
	L.drawShape = 'Pointer';
	L.drawShapeNow = '';
	L.drawCopy = '';

	//var cvs = $('#caps')[0], capctx = cvs.getContext('2d');
	var x='<div id=Caps hidden>'+cap0+dc;//+(L.cap0||'')
	if($('#splash').length){

		$('#splash').after(x)
	}else{
		$('body').prepend(x)
	}

	caps=new ctt('#caps');

	reCanvasCode=function(){

		Arrf(function(x){
			if(L[x+'Code']){
				var c=caps.ctx;
				eval(L[x+'Code']);
			}
		}, ZLR('canvas lego rough'));

	};

	setTimeout(function () {

		//$('#Pointer').click();
		//$('#allEraser').click();
		//$('#LayerToggle').click();

		//$('#color' + (L.night == 'false' ? 0 : 3)).click();

		if ($('#svgs').length < 1) {

			$('#tileTool').show();

		} else {



		}

		reCanvasCode();
		$('#caps').nextAll().hide();
	}, 100)



	//html


	$('#panel').append(DCtv('cap" id=tileTool hidden for="svgs',

		'<div id=tileToolCap>'+
		'<div id=svgShapes>'+
			'<div id=svgShape>'+
				'<div id=svgTool>'+
					svgf.id('Narrow',svgf.path('M10 20 L15 15 10 10 M18 9 V21','none" stroke-linejoin="round'))+//M10 10 L4 15 L10 20

					svgf.id('Pointer" hotkey="P',svgf.path('M8 10 L8 21 13 16 17 25 A2 2 0 0 0 21 21 L17 15 23 15 8 2 z'))+

					svgf.id('ToolOpt" tip="Option',svgf.path('M8 10 H22 M8 15 H22 M8 20 H22'))+


					svgf.id('Undo" tip="Undo / Redo" hotkey="U',svgf.path('M5 20 Q15 5 25 20 M5 13 V20 H12 M25 13 V20 H18'))+
				
					svgf.id('Copy" hotkey="Ctrl+V',svgf.path('M8 20 V5 H20 M13 10 V25 H25 V10 H13'))+

					svgf.id('Eraser" hotkey="Delete(D)',svgf.path('M10 20 L20 10 M10 10 L20 20')+svgf.circle(15,15,10))+


					'<div id=svgToolOpt hidden>'+
					'<div id=scrWH>'+
						gM('W')+num('0" title=px id="scrW',1)+
						gM('H')+num('0" title=px id="scrH',1)+dc+
				



					DCtv('hidden" id="allEraserCanvas',DCtv('pd10" id="canvasMenu',
						itv('" id=bg tip="bg','photo_size_select_actual')+
						itv('" id=grid tip="Grid','grid_on')+
						itv('" id=shape tip="Shape','panorama_fish_eye')+
						itv('" id=text tip="Text','title')+
						itv('" id=clear tip="Clear','backspace')
						//itv('" id=ani tip="Animation','movie')
					)+
					'<div for=bg>'+
						'<div>'+spanmi('gradient',gM('BGC'),'" id="bggrad')+
							'<span for=bggrad><label>'+strchkbx0+'id=bggradOn class=on /></label>'+
								'<span for=bggradOn>'+
									DCtv('fill',
										'<label hidden>'+gM('Fill')+strchkbx0+'class=fillon'+chked+' /></label>'+
										'<input type=color value="#eeeeee" class=color />'+
										'<label>'+gM('Gradient')+strchkbx0+'class=gradon /></label>'+br+
										gM('Gradient Color')+strtxt+'placeholder="0 color,0.5 color,1 color" class=gradcolor />'+br+
										gM('Linear / Radial')+strtxt+'placeholder="x0 y0 (r0) x1 y1 (r1)" class=grad />'
									)+
								sc+
							sc+dc+
						'<div>'+spanmi('landscape',gM('Image'),'" id="bgimg')+
							'<span for=bgimg><label>'+strchkbx0+'id=bgimgOn class=on /></label>'+
								'<span for=bgimgOn>'+
									DCtv('multi',
										'<div>'+gM('Import')+'<input type=file class=imgurlfile placeholder="drop & drag" />'+dc+
										'<div>'+gM('Image URL')+'<input type=url class=imgurl placeholder="image URL/Clipboard" />'+dc+
										'<div>'+gM('Cut Position and Size')+strtxt+'class=poswh placeholder="sx,sy,swidth,sheight" />'+dc+
										'<div>'+gM('Paste Position and Size')+strtxt+'class=poswh placeholder="x,y,width,height" />'+dc+
										'<div>'+itv('Add','add')+itv('Del','clear')+dc
					
									)+
								sc+
							sc+dc+
					dc+
					
					
					
					
					'<div for=grid>'+
						'<div>'+spanmi('filter_tilt_shift',gM('Origin'),'" id="orig')+
							'<span><label>x='+num('600" id="Ox')+'</label>'+
								'<label>y='+num('400" id="Oy')+'</label>'+sc+
						dc+
						'<div>'+spanmi('radio_button_checked',gM('Point'),'" id="dot')+
							'<span for=dot><label>'+strchkbx0+'id=dotOn class=on /></label>'+
					
								'<span for=dotOn>'+
									DCtv('multi',
										'<div><span>'+gM('Coordinate')+strtxt+'class=pos placeholder="20 20,30 30" />'+sc+
											'<span>'+gM('Color')+'<input type=color value="#000000" class=color />'+sc+
											itv('Add','add')+itv('Del','clear')+
										dc
									)+
								sc+
							sc+dc+
					
						'<div>'+spanmi('add_circle_outline',gM('Axis'),'" id="axis')+
							'<span for=axis><label>'+strchkbx0+'id=axisOn class=on /></label>'+
								'<span for=axisOn>'+
									'<span>'+gM('Range')+strtxt+'value="" id=axisRange placeholder="-360,360;-240,240 || 360;240 || 360" />'+sc+
									'<div>'+gM('Arrow')+'分类 (左右下上，各取1个数字【0:无, 1:个字形, 2:空心闭合, 3:实心闭合】) '+strtxt+'value="0101" id=axisArrowType placeholder="0101" />'+dc+
									'<div>'+gM('Arrow')+'参数 (侧翼点长,宽;箭尾点偏移) '+strtxt+'value="8,4" id=axisArrowPoints placeholder="8,4;-2" />'+dc+
									'<span>'+gM('Color')+'<input type=color value="#000000" class=color />'+sc+
								sc+
							sc+dc+
						'<div>'+spanmi('graphic_eq',gM('Tick'),'" id="tick')+
							'<span for=tick><label>'+strchkbx0+'id=tickOn class=on /></label>'+
								'<span for=tickOn>'+
									'<span>'+
										gM('Range')+strtxt+'value="" id=tickRange placeholder="-100,100;-50,50 || 100;50 || 100" />'+
									sc+
									DCtv('multi',
										'<div><span>'+gM('Tick Length')+' (负号表示负轴方向) '+strtxt+'value="-5,-5" class=tickLength placeholder="-5,-5" size=10 />'+sc+
											'<span>'+gM('Spacing')+strtxt+'value=20 class=tickSpacing placeholder="20,20" size=10 />'+sc+
											'<span>'+gM('Color')+'<input type=color value="#000000" class=color />'+sc+
											itv('Add','add')+itv('Del','clear')+
										dc
									)+
					
								sc+
							sc+dc+
						'<div>'+spanmi('border_all',gM('Cartesian Grid'),'" id="gridCross')+
							'<span for=gridCross><label>'+strchkbx0+'id=gridCrossOn class=on /></label>'+
								'<span for=gridCrossOn>'+
									SCtv('orig',
										'<span>'+gM('Range')+strtxt+'value="" id=gridCrossRange placeholder="-700,700;-500,500 || 700;500 || 700" />'+sc+
										'<label>'+gM('Origin')+strchkbx0+'id=gridCrossOrigOn class=on />'+'</label>'+
										'<span for=gridCrossOrigOn>'+
											'<label>x='+num('600" class="Ox')+'</label>'+
											'<label>y='+num('400" class="Oy')+'</label>'+sc
					
									)+
									DCtv('primary',
										'<span>'+gM('Primary Grid Spacing')+strtxt+'value=200 id=gridCrossSpacing placeholder="200,200" size=10 />'+sc+
										'<span>'+gM('Primary Grid Dash')+strtxt+'class=dash placeholder="2,4,2" size=10 />'+sc+
										br+
										'<span>'+gM('Primary Grid Color')+'<input type=color value="#a0a0a0" class=color />'+sc
									)+
									DCtv('secondary',
										'<span>'+gM('Secondary Grid Spacing')+strtxt+'value=40 id=gridCross2Spacing placeholder="40,40" size=10 />'+sc+
										'<span>'+gM('Secondary Grid Dash')+strtxt+'class=dash placeholder="2,4,2" value=5 size=10 />'+sc+
										br+
										'<span>'+gM('Secondary Grid Color')+'<input type=color value="#cecece" class=color />'+sc
									)+
								sc+
							sc+dc+
					
						'<div>'+spanmi('location_searching',gM('Polar Grid'),'" id="gridPolar')+
							'<span for=gridPolar><label>'+strchkbx0+'id=gridPolarOn class=on /></label>'+
								'<span for=gridPolarOn>'+
									SCtv('orig',
										'<span>'+gM('Range Radii')+num('0" id="gridPolarRange')+sc+
										'<label>'+gM('Origin')+strchkbx0+'id=gridPolarOrigOn class=on /></label>'+
										'<span for=gridPolarOrigOn>'+
											'<label>x='+num('600" class="Ox')+'</label>'+
											'<label>y='+num('400" class="Oy')+'</label>'+sc
									)+
									DCtv('primary',
										'<span>'+gM('Primary Grid Spacing')+' r '+num('200" id="gridPolarxSpacing')+sc+
										'<span>'+gM('Primary Grid')+'角等分线数'+num('1" id="gridPolaryNum')+sc+
										'<span>'+gM('Primary Grid Dash')+strtxt+'class=dash placeholder="2,4,2" size=10 />'+sc+
										br+
										'<span>'+gM('Primary Grid Color')+'<input type=color value="#a0a0a0" class=color />'+sc
					
									)+
									DCtv('secondary',
										'<span>'+gM('Secondary Grid Spacing')+' r '+num('0" id="gridPolar2xSpacing')+sc+
										'<span>'+gM('Secondary Grid')+'角等分线数'+num('0" id="gridPolar2yNum')+sc+
										'<span>'+gM('Secondary Grid Dash')+strtxt+'class=dash placeholder="2,4,2" value=5 size=10 />'+sc+
										br+
										'<span>'+gM('Secondary Grid Color')+'<input type=color value="#cecece" class=color />'+sc
									)+
								sc+
							sc+
						dc+
					dc+
					'<div for=shape>'+
					
					
					
						'<div>'+spanmi('radio_button_unchecked',gM('Circle'),'" id="circle')+
							'<span for=circle><label>'+strchkbx0+'id=circleOn class=on /></label>'+
								'<span for=circleOn>'+
									DCtv('multi',
										'<div>'+gM('Centroid Coordinate')+strtxt+'class=pos placeholder="200 200,300 300" />'+dc+
										'<div>'+gM('Radii')+strtxt+'class=rad placeholder="15,10" />'+dc
					
									)+
								sc+
							sc+dc+
					
						'<div>'+spanmi('vignette',gM('Ellipse'),'" id="ellipse')+
							'<span for=ellipse><label>'+strchkbx0+'id=ellipseOn class=on /></label>'+
								'<span for=ellipseOn>'+
									DCtv('multi',
										'<div>'+strchkbx0+'class=multinput'+chked+' />'+
											'<span>'+
												gM('Centroid Coordinate')+strtxt+'class=pos placeholder="200 400;" />'+
											sc+
											'<span>'+
												gM('Radii')+' (半长轴,半短轴,半焦距 3选2) '+strtxt+'class=rad placeholder="ra50 rb30;rc40 ra50;rb30 rc40" />'+
											sc+
											'<span>'+
												gM('Rotate')+'°'+strtxt+'class=rot placeholder="45,-30" />'+
											sc+
										dc+
										'<div>'+strchkbx0+'class=multinput />'+
											'<span>'+
												gM('Foci Coordinate')+strtxt+'class=pos placeholder="300 400,380 400;" />'+
											sc+
											'<span>'+
												gM('Radii')+' (半长轴,半短轴 2选1) '+strtxt+'class=rad placeholder="ra50;rb30" />'+
											sc+
										dc+
										'<div>'+strchkbx0+'class=multinput />'+
											'<span>'+
												gM('Vertex Coordinate')+strtxt+'class=pos placeholder="150 400,400 360,650 400,400 440;" size=50 />'+
											sc+
										dc+
										'<div>'+strchkbx0+'class=multinput />'+
											'<span>'+
												gM('CircumRectangle')+
												gM('Vertex Coordinate')+strtxt+'class=pos placeholder="box150 360,250 360,250 440,150 440;" size=50 />'+
											sc+
										dc
					
									)+
								sc+
							sc+dc+
					
					
						'<div>'+spanmi('crop_landscape',gM('Rectangle'),'" id="rect')+
							'<span for=rect><label>'+strchkbx0+'id=rectOn class=on /></label>'+
								'<span for=rectOn>'+
									DCtv('multi',
										'<div>'+gM('Vertex Coordinate')+' ('+gM('Left Top')+') '+strtxt+'class=pos placeholder="200 400;" size=50 />'+dc+
										'<div>'+gM('Length Width')+strtxt+'class=rad placeholder="300 200;" />'+dc
									)+
								sc+
							sc+dc+
					
						'<div>'+spanmi('power_input',gM('Polyline Polygon'),'" id="line')+
							'<span for=line><label>'+strchkbx0+'id=lineOn class=on /></label>'+
								'<span for=lineOn>'+
									DCtv('multi',
										'<div>'+gM('Vertex Coordinate')+' (或斜°长) '+strtxt+'class=pos placeholder="200 200,300 300,d45 l100;" size=60 />'+dc+
										'<div>'+gM('Round Corner')+ gM('Radii')+strtxt+'class=rad2 placeholder="0,10" />'+dc+
										'<div><label>'+gM('Closed')+' ('+gM('Polygon')+') '+strchkbx0+'class=close /></label>'+dc
									)+
					
								sc+
							sc+dc+
					
					
						'<div>'+spanmi('brightness_low',gM('Regular Polygon'),'" id="isogon')+
							'<span for=isogon><label>'+strchkbx0+'id=isogonOn class=on /></label>'+
								'<span for=isogonOn>'+
									DCtv('multi',
										'<div>'+strchkbx0+'class=multinput'+chked+' />'+
											'<span>'+gM('Centroid Coordinate')+strtxt+'class=pos placeholder="200 400;" />'+sc+
											'<span>'+gM('Radii')+strtxt+'class=rad placeholder="50;" />'+sc+
											'<span>'+gM('Rotate')+'° ('+gM('Start Radius offset x-axis')+') '+strtxt+'class=rot placeholder="45,-30" />'+sc+
										dc+
										'<div>'+strchkbx0+'class=multinput />'+
											'<span>'+gM('Start Point')+' '+gM('Coordinate')+strtxt+'class=pos placeholder="200 400;" />'+sc+
											'<span>'+gM('Side Length')+strtxt+'class=rad placeholder="50;" />'+sc+
											'<span>'+gM('Rotate')+'° ('+gM('Start side offset x-axis')+') '+strtxt+'class=rot placeholder="45,-30" />'+sc+
											'<label>'+gM('Counterclockwise')+' ('+gM('Direction')+') '+strchkbx0+'class=dir'+chked+' />'+'</label>'+
										dc+
					
										'<div>'+gM('Round Corner Radii')+strtxt+'class=rad2 placeholder="0,0,5;10;" />'+dc+
										'<div>'+gM('Sides')+strtxt+'class=line placeholder="3,4,5" value=3 />'+dc
					
									)+
								sc+
							sc+dc+
					
					
						'<div>'+spanmi('all_inclusive',gM('Bezier Curve'),'" id="bezier')+
							'<span for=bezier><label>'+strchkbx0+'id=bezierOn class=on /></label>'+
								'<span for=bezierOn>'+
									DCtv('multi',
										'<div>'+
											gM('Point Coordinate')+' ('+gM('Start Point')+','+gM('Control Point')+'1、2;' +gM('End Point')+ 
											') '+strtxt+'class=pos placeholder="20 20,30 50;80 60" size=50 />'+
										dc+
										'<div><label>'+gM('Closed')+strchkbx0+'class=close /></label>'+dc
					
									)+
					
								sc+
							sc+dc+
						'<div>'+spanmi('gesture',gM('Curve'),'" id="path')+
							'<span for=path><label>'+strchkbx0+'id=pathOn class=on /></label>'+
								'<span for=pathOn>'+
									DCtv('multi',
										'<div>SVG命令 (MLHVAQC) '+strtxt+'class=svg placeholder="M20 20L30 50" size=50 />'+dc+
										'<div><label>'+
												gM('Closed')+strchkbx0+'class=close />'+
											'</label>'+dc
					
									)+
								sc+
							sc+dc+
					dc+
					'<div for=text>'+
					
						'<div>'+spanmi('text_format',gM('Text'),'" id="txt')+
							'<span for=txt><label>'+strchkbx0+'id=txtOn class=on /></label>'+
					
								'<span for=txtOn>'+
									DCtv('multi',
										'<span>'+
											gM('Coordinate')+strtxt+'class=pos placeholder="200 400;" />'+
										sc+
										strtxt+'class=value size=80 />'+
										'<div><label>'+
												gM('Font')+' '+strtxt+'class=font placeholder="normal italic oblique / small-caps / bold bolder lighter | italic small-caps bold 32px 微软雅黑" />'+
											'</label>'+
											'<label>'+gM('Horizontal Align')+' <select class=halign>'+Options(ZLR('center end left right start'),1).join('')+'</select></label>'+
											'<label>'+gM('Vertical Align')+' <select class=valign>'+Options(ZLR('alphabetic top hanging middle ideographic bottom'),1).join('')+'</select></label>'+
										dc
					
									)+
								sc+
							sc+dc+
					
					dc+
					'<div for=ani>'+
						'<div id=aniControl>'+
							itv('" id=aniPlay tip="Play','play_arrow')+
							itv('" id=aniStop tip="Stop','stop')+
							itv('" id=aniShot tip="Shot','camera_alt')+
							itv('" id=aniClear tip="Clear','close')+
							itv('" id=aniInput tip="Import','file_upload')+
							itv('" id=aniOutput tip="Export','file_download')+
					
						dc+
						'<div>'+spanmi('stay_current_landscape',gM('Scene'),'" id="scene')+
							'<span for=scene><label>'+strchkbx0+'id=sceneOn class=on /></label>'+
					
								'<span for=sceneOn>'+
									DCtv('multi',
										'<span>'+gM('Time')+' (ms) '+strtxt+'class=times size=80 placeholder="0 1500" />'+sc+
										'<div>Frame '+txa('','json" placeholder="每一场初始静态化数据')+dc
									)+
								sc+
							sc+dc+
					
						'<div>'+spanmi('directions_run',gM('Action'),'" id="act')+
							'<span for=act><label>'+strchkbx0+'id=actOn class=on /></label>'+
					
								'<span for=actOn>'+
									DCtv('multi',
										'<span>'+gM('Time')+' (ms) '+strtxt+'class=times size=80 placeholder="0 1000" />'+sc+
										'<div>JS '+txa('','js" placeholder="动作指令JS代码')+dc
									)+
								sc+
							sc+dc+
					
					
					dc)+











					'<div id=copyOpt>'+gM('Copy')+' '+gM('Direction')+
						'<p><select id=copyDir multiple=multiple class=hmulti size=1 title=Ctrl>'+Options(seqA(0, 10), '←→↑↓↖↗↙↘↥↧'.split('')).join('')+'</select></p>'+
						'<p>'+SCtv('','×')+num('1" id="copyn',1)+
							'<label id=margin>'+strchkbx0+chked+' />'+gM('Margin')+num('10" id=copyMargin title="px')+'</label>'+
							'<label id=copyTileOn hidden>'+gM('Tile') + ' '+strchkbx0+'id=copyTile /></label></p>'+
				
						'<p><label>'+strchkbx0+'id=Transform />'+gM('Transform')+'</label></p>'+dc+
				
					'<div id=eraserOpt>'+gM('Delete')+' '+gM('Direction')+
						'<p><select id=eraserDir multiple=multiple class=hmulti size=1 title=Ctrl>'+Options(seqA(0, 10), '←→↑↓↖↗↙↘↥↧'.split('')).join('')+'</select></p>'+dc+
				
					'<div id=svgTextDetail>'+txa('','" id="svgTextDetails')+dc+
				
					detail('<input type=button id=clrTextBox value="'+gM('Clear')+'" />'+
						'<select id=TextBoxType>'+Options(ZLR('LaTeX Markdown HTML SVG CSS Canvas Echarts'),'','LaTeX').join('')+'</select>'+strbtn+' OK " id=TextBoxGo />'+strbtn+' + " id=TextBoxGo2 />',
						txa('','" id="TextBox')+
						detail(gM('Editor')+SCtv('ediHot" for="HTML',Arrf(function(x){return strbtn+gM(x)+'" data-v='+x+' />'},ZLR('widget editor document slide index')).join('')),
						
						DCtv('hidden" for="HTML', [].concat(
							'iframe URL: ',strtxt+'class="iframesrc" value="" placeholder="solve.html?" />',
							Arrf(function(x){return XML.wrapE('label',x)}, zlrA3('<input type=',['radio name=name1','checkbox'],' />')).join('')+meter(50),
							rng(5,0,10),
							num(0,0,'9" step="1')+XML.wrapE('select',Options([1,2,3,4]).join(''))+XML.wrapE('select',Options(['A','B','C','D']).join('')),
							mark(gM('Mark'))+colorbx('#112233')+scib('URL')+del(gM('Del')),
							zlrA3('<input type=',['time','button value="'+gM('Button')+'"'],' />').join(''),
							zlrA3('<input type=',['date'],' />'),
							zlrA3('<input type=',['text value="'+gM('Text')+'"'],' />'),
							txtreadonly(gM('Readonly')),
							
							txa(gM('Textarea')),
							Arrfc([scib,gM],ZLR('ol ul')).join('')+
							Arrfc([scib,gM],ZLR('dl Table')).join('')
							+hr
							+detail(gM('Summary'),gM('Details'))
							+refer([1,2])
							+fieldset(gM('Summary'),gM('Details')),
						).join(br)
						
						)+
						
						DCtv('hidden" for="Canvas',tooltip.Canvas),'','id=TextBoxTool hidden'),	1,'id=svgTEXTBox')+
				
					'<div id=svgSel>'+
						detail('<select id=svgText>'+Options(seqA(0,11),ZLR(
								' ❶⓪①⑴‰ ㈠㊀㋋㏫㊣ ⅠⅡⅰⅱΑα ⒜ⒶⓐAa ©®℉￠￥ ！：［｛ ←↕↙↶↺⇐ ∀∋∑∞∭⊆⋰ ■□▲●◐◑◢◣ ☀☑✔✿♞♣♬')
							).join('')+'</select>'+
							'<select id=svgTextN></select>'+
							'<select id=svgTextM>'+Options((L.svgTexts || '✘❌✅✓✔✕✖✗☻☹☺').split('')).join('')+'</select>',
							txa('','" id=svgTexts placeholder="My Clipboard'),
							'','id=svgTEXT')+
						'<select id=strkFill tip=fill>'+optgrp(gM('fill'),Options([0,1,2],ZLR('□ ▣ ■')).join(''))+'</select>'+
						'<select id=svgArwE tip=arrow>'+optgrp(gM('arrow'),Options(seqA(0, 10), ' ∧△◇□○▲◆■●'.split('')).join(''))+'</select>'+
						'<select id=svgArwS tip=arrow>'+optgrp(gM('arrow'),Options(seqA(0, 10), ' ∧△◇□○▲◆■●'.split('')).join(''))+'</select>'+
						'<select id=svgLine tip=dash>'+optgrp(gM('dash'),Options(seqA(0, 3), '￣﹉﹊'.split('')).join(''))+'</select>'+

						'<select id=strkLnJoin>'+Options(ZLR('round miter bevel'),ZLR('﹙ ﹤ ﹝')).join('')+'</select>'+
						'<select id=strkLnCap>'+Options(ZLR('butt round square'),ZLR('[ ( ▌')).join('')+'</select>'+dc+
				
					'<div id=SvgOpt>'+
						detail(gM('FontSize')+num('24" id=fontSize title="px',12)+
							gM('center')+rng('','','2" step=1 tip=center id="tileFontCenter'),
							'<div id=fontCSS>'+SCtv('bold" title="B')+SCtv('italic" title="I')+SCtv('underline')+SCtv('overline')+SCtv('through')+dc+
							'<div>'+gM('fonT')+strtxt+'id=font list=CSS_fontfamily />'+dc,
							'','id=Font hidden')+
							
						'<div id=Dash hidden>'+
							gM('dash')+strtxt+'id=strkDash />'+
							gM('offset')+num('1" id="strkDashOffset')+dc+
				
						detail('<label id=SIDES>'+gM('Sides') + '× '+num('5" id="Sides',3)+'</label>'+
								gM('bW')+num('4" title=px id="strkW')+
								'<span id=bWR>'+gM('Radii')+sc+num('0" hidden title=px id="strkR')+
								'<span id=bWRy>, '+sc+num('10" hidden title=px id="strkRy'),
							DCtv('lightgray" id="OtherOpts',
							
								Arrf(function (y) { return '<div>' + Arrf(function (x) { return '<label>'+strchkbx0+'id=' + x + 'on />' + gM(x == 'Medians' ? 'Median Line' : x.replace(/([^i])s$/, '$1')) + '</label>' }, ZLR(y)).join('') + dc }, [
									'CircumRectangle CircumCircle Incircle',
									'backvisi Diagonal Diameter ' + zlr2('Centroid Orthocenter Incenter Circumcenter Vertex', 'Line'),
									'Medians MidPointLine OppositeMidPointLine',
									'Altitudes PerpendicularFootLine',
									'Axis Tick SymmetryAxis'
								]).join('')+


								'<div>' + gM('Equator') + '<label>'+strchkbx0+'id=Equatorxon />x ' + num(20) + '</label><label>'+strchkbx0+'id=Equatoryon />y ' + num(20) + '</label>' + dc +
								'<div><label>'+strchkbx0+'id=Gridon />' + gM('Grid') + '</label>' + ['x', 'y', 'z', ''].join(' ' + num(2)) + dc +

								detail('<label>'+strchkbx0+'id=Neston />' + gM('Nest') + '</label> × ' + num(2),
									'<label>'+strchkbx0+'id=NestMarginon />' + gM('Margin') + '</label> ' + num(20) + ' , ' + num(20)) +

								'<div><label>'+strchkbx0+'id=MidPointNeston />' + gM('MidPointLine') + ' ' + gM('Nest') + ' × </label>' + num(2) + dc +
								'<div><label>'+strchkbx0+'id=PerpendicularFootNeston />' + gM('PerpendicularFootLine') + ' ' + gM('Nest') + ' × </label>' + num(2) + dc +

								'<div>' + Arrf(function (x) { return '<label>'+strchkbx0+'id=Arc' + x + 'on />∠' + x + '</label>' }, [1, 2, 3]).join('') + ' ' + gM('Arc') + ' ' + gM('Radii') + ' ' + num(15) + dc +

								'<div>' + Arrf(function (x) { return '<span><label>'+strchkbx0+'id=' + x + 'on />' + gM(x) + '</label> ' + gM('bw') + num(15) + sc }, ZLR('Rt')).join('') + dc +

								Arrf(function (y) { return '<div>' + gM(y=='Median'?'Median Line':y) + ' ' + Arrf(function (x) { return '<label>'+strchkbx0+'id=' + y + x + 'on />L' + x + ' </label>' }, [1, 2, 3]).join('') + dc }, ZLR('Median Altitude AngleBisector Midline')).join('')


							
							),'','id=bW')+
				
						DCtv('lightgray" id="gridType',
				

							'<label><input type=radio name=gridType value=Cartesian'+chked+' /></label>'+							
							'<label><input type=radio name=gridType value=Circle /></label>'+
							'<label><input type=radio name=gridType value=Elliptic /></label>'+
							'<label><input type=radio name=gridType value=Affine /></label>'+
							'<label><input type=radio name=gridType value=Triangle /></label>'
	
						)+
						DCtv('lightgray" id="MarginCopyOpt',
				
							'<label hidden><input type=radio name=MarginCopyOpt value=nest />'+
								SCtv('','×')+
								num('2" id="nestNum',1)+'</label>'+
							'<label><input type=radio name=MarginCopyOpt value=w /></label>'+
							'<label><input type=radio name=MarginCopyOpt value=copy'+chked+' /></label>'+
				
							num('10" hidden id="copyNum',1)+
				
							'<div id=gridOpt hidden>'+
								num('3" id="gridR',1)+'<span id=gridN>×'+sc+
								num('3" id="gridC',1)+dc+
				
							'<div id=MarginCopyH hidden>'+gM('Tick Length')+num('10" id="MarginCopyh',1)+dc+
							'<div id=nestOpt hidden>'+dc
						)+
				
						detail(gM('Container')+num(2,'0" tip=W id="ContainerW')+' × '+num(2,'0" tip=H id="ContainerH')+
							'<span id=Angle tip=Angle hidden> ∠ '+num(2,'0" id="angle')+'°'+sc,
							'<label>'+strchkbx0+'id=cssClip />'+gM('Clip')+'</label>'+
				
							'<div id=CssClip hidden><img class=clip>'+gM('clip')+
								SCtv('','↦')+num('0" id="cssClipL')+
								SCtv('','↤')+num('100" id="cssClipR')+br+
								SCtv('','↧')+num('0" id="cssClipT')+
								SCtv('','↥')+num('100" id="cssClipB')+dc
						)+
				
						'<div id=fxTXT hidden>'+txa('','" id=fxTxt placeholder="Condition;Ox,Oy,x0,x1,y0,y1;color;opacity')+
							detail(strbtn+'f(x,y)" id=GOfx /><input type=button class=clrCanvas value="'+gM('Clear')+'" />')+
							'<div>' + Arrf(function (x) { return sceg(x,5) }, [

								'(x**2+y**2)<=2500 && (x**2+y**2)>=1600;400,300,-50,50,-50,50;#a2c347;255',
						
							]).join('') + dc+ dc+

						'<div id=capctxTXT hidden>'+txa('','" id="capctxTxt')+
							detail(strbtn+'JS" id=GOcapctx /><select id=effects>'+Options(ZLR('effects snow Pythagorean_Tree ring')).join('')+'</select><input type=button class=clrCanvas value="'+gM('Clear')+'" />')+
							tooltip.Canvas+dc+
				
				
					dc+



detail('<span tip="Coordinate & Transform">'+
'<span title=px>x '+num('0" id="cssX')+sc+
'<span title=px>y '+num('0" id="cssY')+sc+
'<span title="z-index">z '+num('0" id="cssZ')+sc+
sc,

DCtv('lightgray" id="CssTransform',
	DCtv('lightgray" hidden id="CssTransOpt',
		'<div>'+gM('Perspective')+num('0" title=px id="cssPerspec')+
			gM('Origin')+strtxt+'id=cssPerspecOrig value="50% 50%" placeholder="[xy]=left center right length %" title="x y" />'+
		dc+
		'<div><label>'+gM('Preserve 3D')+strchkbx0+'id=cssTranStyle /></label>'+
			gM('Origin')+strtxt+'id=cssTransOrig value="50% 50% 0" placeholder="[xy]=left center right length %; [z]=length" title="x y z" />'+
		dc+
		'<div><label>'+gM('backvisi')+strchkbx0+'id=cssBackVisi'+chked+ ' /></label>'+
		dc
	
	)+

	'<div><label>'+strchkbx0+'id=cssMatrix />'+gM('matrix')+' (2D/3D)</label>'+
		'<span id=cssTransOpt>'+gM('Opts')+sc+
	dc+

	'<div id=cssMatrix3D hidden>'+strtxt+'id=cssMatrix3d placeholder="n,n...{6|16}" />'+
	dc+

	'<div id=CssScale><img class=scale>'+gM('Scale')+
		'<span>x'+sc+num('1" id=cssScaleX step=".1')+
		'<span>y'+sc+num('1" id=cssScaleY step=".1')+
		'<span>z'+sc+num('1" id=cssScaleZ step=".1')+
	dc+


	'<div id=CssSkew><img class=skew>'+gM('Skew')+
		'<span>x'+sc+num('0" id=cssSkewX title="deg',-360)+
		'<span>y'+sc+num('0" id=cssSkewY title="deg',-360)+
	dc+


	'<div id=CssTranslate><img class=translate>'+gM('translate.Math')+
		'<span>x'+sc+num('0" id=cssTranslateX')+
		'<span>y'+sc+num('0" id=cssTranslateY')+
		'<span>z'+sc+num('0" id=cssTranslateZ')+
	dc+


	'<div id=CssRotate><div id=CssRotate3><label>'+
		'<input type=radio value=cssRotateXYZ checked />'+
		'<img class=rotate1>'+gM('rotate')+
		'<span>x'+sc+num('0" id=cssRotateX step=5 title="deg',-720,720)+
		'<span>y'+sc+num('0" id=cssRotateY step=5 title="deg',-720,720)+
		'<span>z'+sc+num('0" id=cssRotateZ step=5 title="deg',-720,720)+

		'<div id=CssRotate6><img id=flipy /><img id=flipx /><img id=flip0 /><img id=rotate1 /><img id=rotate2><img id=rotate3>'+dc+
		'</label>'+dc+
		
		'<div id=CssRotate3d><label><input type=radio value=cssRotate3d />'+
			'<img class=rotate1>'+gM('Rotate')+' 3D'+strtxt+'id=cssRotate3d placeholder="x,y,z,angle" /></label>'+
		dc+

	dc


	
),
'','id=svgCssTransform')+

detail(
	'<select id=roughStyle>'+Options(['rough','hachure','solid','zigzag','cross-hatch','dots','dashed','zigzag-line'],1).join('')+'</select>'+
	gM('Roughness')+' '+num(1,0,2),
	[
		gM('Bowing')+' '+num(1,0,1)+gM('Curve Fitting')+' '+num(0.95,0,1),
		gM('Simplification')+' '+num(0.5,0,1)+gM('Seed')+' '+num(0),
		gM('Fill Weight')+' '+num(1)+gM('Gap')+' '+num(8),
		gM('Dash Offset')+' '+num()+gM('Hachure Angle')+' '+num(60),
		gM('Curve Step Count')+' '+num(9),
		gM('Fill Line Dash')+strtxt+'value="" placeholder="2,5" />',
		'<label>'+gM('Disable Multi Fill')+strchkbx0+' class=roughMulti /></label><label>'+gM('Disable Multi Stroke')+strchkbx0+' class=roughMulti /></label>'
	].join(br),
	'','id=svgRough'
)+
detail(
	txtreadonly('','color0" title="Snow')+
	txtreadonly('','color1" title="Blue Sky')+
	txtreadonly('','color2" title="Pink Girl')+
	txtreadonly('','color3" title="Black Rhythm')+
	txtreadonly('','color4" title="Red Charm')+
	txtreadonly('?','color5" title="Random Color')+
	txtreadonly('#','RandomColorson" tip="Inner-Random Colors" class="tool seled'),


'<div id=Color>'+Arrf(function (X) {
		var x = X.toLowerCase(), w = $(window).width(), h = $(window).height(), w2 = Math.ceil(w / 2), h2 = Math.ceil(h / 2),
		gc = function (i) {
			var t = '<input type=color id=' + X + 'GC' + i + ' />'+rng('1" step=.1 id="Opa'+X+'GC'+i,0,1);
			return i ? '<div id=' + x + 'gc' + i + ' hidden>'+num((i == 1 ? 0 : 100)+'" readonly class="Gradstop') + '% ' + t + dc : t
		};
		return detail(gM(x.replace('s', 'b') + 'gc') + gc(''),
			'<label>'+strchkbx0+'class=Grad /></label><span hidden>× '+num('2" class="GradStops',2)+
			concat('<label><input type=radio name=' + X + 'GradType value=', ['Linear checked=checked', 'Radial'], ' /></label>').join('') + sc +
			'<div class=Linear hidden>x1 ' + num(0) + ' y1 ' + num(0) + ' x2 ' + num(0) + ' y2 ' + num(X == 'S' ? h : 100) + dc +
			'<div class=Radial hidden>' + concat(['cx', 'cy', X == 'S' ? 'r1' : 'r', br + 'fx', 'fy'].concat(X == 'S' ? 'r2' : []), copyA('<input type=number value=', 5 + (+(X == 'S'))),
				X == 'S' ? [w2, h2, h2, w2, h2, w2] : copyA(50, 5), ' min=0 />').join('') + dc +
			gc(1) + '<div id=' + x + 'gcs hidden>' + dc + gc(2))
	}, 'FBS'.split('')).join('')+dc+

detail(
	'<img class=btn1 />'+gM('opa')+rng('1" id=cssOpa step=".1', 0,1),[
	'<div id=CssContrast><img class=contrast />'+gM('Contrast')+rng('1" id=cssContrast step=".1', 0,2)+dc,
	'<div id=CssBright><img class=bright />'+gM('Bright')+rng('1" id=cssBright step=".1', 0,2)+dc,
	'<div id=CssSaturate><img class=saturate />'+gM('Bright')+rng('1" id=cssSaturate step=".1', 0,20)+dc,
	'<div id=CssGrayscale><img class=grayscale />'+gM('Grayscale')+rng('0" id=cssGrayscale step=".1', 0,1)+dc,
	'<div id=CssSepia><img class=sepia />'+gM('Sepia')+rng('0" id=cssSepia step=".1', 0,1)+dc,
	'<div id=CssInvert><img class=invert />'+gM('Invert')+rng('0" id=cssInvert step=".1', 0,1)+dc,
	'<div id=CssHueRotate><img class=HueRotate />'+gM('HueRotate')+rng('0" id=cssHueRotate title=deg step=".1', 0,360)+dc,
	'<div id=CssBlur><img class=blur />'+gM('Blur')+rng('0" id=cssblur title=px step=".1', 0,100)+dc,

	'<div id=CssDropShadow><img class=dropShadow /><label>'+gM('DropShadow')+strchkbx0+' id=cssDropShadow /></label>'+
		'<div hidden id=CssDropshadow>'+
			'x'+num('2" title=px id="cssDropShadowX')+
			'y'+num('2" title=px id="cssDropShadowY')+

			gM('Blur')+num('2" id=cssDropShadowBlur title="px',0)+
			'<div><input type=color id=cssDropShadowColor value="#000000" />'+rng('0.5" id=cssDropShadowOpac step=".1', 0,1)+dc+

		dc+
	dc

	].join(''),
'','id=CssFilter','id=CssOpa')+

'<label>'+gM('Colorful')+strchkbx0+' id=cssClassHue /></label>'
,


'','id=COLOR')+

dc+



				dc+
			DCtv('svgTool2',
				svgf.id('SVGshift" tip="Shift',svgf.path('M8 17 L15 10 22 17 M8 21 H22'))+

				svgf.id('D2on" tip="2D Flatten',svgf.text('2D',[22,4,16]))+

				svgf.id('Roughon" tip="Rough',svgf.path('M8 22 L22 8 M8 15 L15 8 M15 22 L22 15'))+

				svgf.id('Legoon" tip="Lego',svgf.rect(7,7,16,16)+svgf.circle(15,15,4,'','white'))+

				svgf.id('Zdogon" tip="3D (Zdog)',svgf.text('3D',[22,4,16]))




			)+
				DCtv('pg1',[
					svgf.id('Freelin',svgf.path('M12 24 L13 25 13 24 13 23 13 21 15 18 16 17 18 12 18 10 18 9 18 7 18 5 18 4 18 3 18 2'))+
					svgf.id('Text" hotkey="A',svgf.text('A',[25,5,28]))+
					svgf.id('ArectNote" tip="Note" hotkey="',svgf.path('M8 20 L7 25 13 20 H20 A5 5 0 0 0 25 15 V10 A5 5 0 0 0 20 5 H10 A5 5 0 0 0 5 10 V15 A5 5 0 0 0 8 20z'))+
					svgf.id('LrectNote',svgf.path('M8 20 L7 25 13 20 H25 V5 H5 V20 H8z'))+


					svgf.id('ellipseNote',svgf.path('M8 18 L7 25 13 20 A10 8 0 1 0 8 18z'))+
					svgf.id('Lattice',svgf.path('M4 11 H26 M4 18 H26 M11.5 25 V4 M18.5 25 V4 M4 4 H26 V26 H4 V4 Z')),



					
					svgf.id('LRect',svgf.rect(5,7,20,16))+
					svgf.id('LRectSq',svgf.rect(5,5,20,20))+
					svgf.id('ARect" tip="Round Corner" hotkey="R',svgf.rect(5,6,20,'18" rx=5 ry="5'))+
					svgf.id('ARectSq',svgf.rect(5,5,20,'20" rx=5 ry="5'))+
					svgf.id('Ellipse',svgf.ellipse(15,15,12,10))+
					svgf.id('EllipseSq',svgf.circle(15,15,10)),




					svgf.id('diagon',svgf.polygon('7,15 15,5 23,15 15,25'))+

					svgf.id('diagonSq',svgf.polygon('5,15 15,5 25,15 15,25'))+

					svgf.id('SLNoteRnd',svgf.path('M11 7 L5 13 V23 H25 V7 z'))+
					svgf.id('SANoteRnd',svgf.path('M12 7 A7 7 0 0 0 5 14 V23 H25 V7 z'))+
					svgf.id('DLNoteRnd',svgf.path('M11 7 L5 13 V23 H25 V13 L19 7 z'))+
					svgf.id('DANoteRnd',svgf.path('M12 7 A7 7 0 0 0 5 14 V23 H25 V14 A7 7 0 0 0 18 7 z')),




					svgf.id('TriangonH',svgf.polygon('8,25 12,5 22,25'))+

					svgf.id('Paralgon',svgf.polygon('5,25 18,25 25,5 12,5'))+
					svgf.id('TrapegonIso',svgf.polygon('10,5 20,5 25,25 5,25'))+
					svgf.id('TrapegonRight',svgf.polygon('5,5 5,25 25,25 15,5'))+



					svgf.id('PentagonT',svgf.polygon('15,2 27,12 23,26 7,26 3,12'))+

					svgf.id('LGonRndSq',svgf.path('M3 15 L9 26 H21 L27 15 21 4 H9 z')),




					svgf.id('Quo',svgf.path('M5 12 A2 2 0 0 0 7 15 H13 A2 2 0 0 1 15 18 2 2 0 0 1 17 15 H23 A2 2 0 0 0 25 12'))+
					svgf.id('Polylin',svgf.path('M6 24 L13 9 17 21 24 6'))+
					svgf.id('PolyGon',svgf.path('M5 20 L20 25 25 10 15 5z'))+
					svgf.id('HeartNote',svgf.path('M15 8 C15 7 14 5 10 5 C4 5 4 10 4 10 C4 16 8 20 15 24 C22 20 26 16 26 12 C26 12 26 5 20 5 C17 5 15 7 15 8z'))+
					svgf.id('PentagonX',svgf.polygon('15,3 18,12 27,12 21,18 24,27 15,21 6,27 9,18 3,12 12,12'))+
					svgf.id('Regulargon',svgf.path('M3 15 L9 26 H21 L27 15 21 4 H9 L3 15 H27 M9 26 L21 4 M9 4 L21 26" stroke-linejoin="round'))
					
				]).join('')+

				DCtv('pg1 svgLine',	
					svgf.id('Line" hotkey="L',
					'<defs>'+
						svgf.marker('ArwE0Line',2,5,4,4,'',svgf.path(''))+
						svgf.marker('ArwS0Line',8,5,4,4,'',svgf.path(''))+
						svgf.marker('ArwE1Line',7,5,4,4,'',svgf.path('M1 1 L9 5 1 9'))+
						svgf.marker('ArwS1Line',3,5,4,4,'',svgf.path('M9 1 L1 5 9 9'))+
						svgf.marker('ArwE2Line',7,5,4,4,'',svgf.path('M1 1 L9 5 1 9z'))+
						svgf.marker('ArwS2Line',3,5,4,4,'',svgf.path('M9 1 L1 5 9 9z'))+
						svgf.marker('ArwE3Line',8,5,4,4,'',svgf.path('M1 5 L5 1 9 5 5 9z'))+
						svgf.marker('ArwS3Line',2,5,4,4,'',svgf.path('M1 5 L5 1 9 5 5 9z'))+
						svgf.marker('ArwE4Line',8,5,4,4,'',svgf.path('M2 2 L2 8 8 8 8 2z'))+
						svgf.marker('ArwS4Line',2,5,4,4,'',svgf.path('M2 2 L2 8 8 8 8 2z'))+
						svgf.marker('ArwE5Line',8,5,4,4,'',svgf.circle(5,5,4))+
						svgf.marker('ArwS5Line',2,5,4,4,'',svgf.circle(5,5,4))+
					'</defs>'+
					svgf.line(11,24,19,'6" marker-end="url(#ArwE6Line)')
					)+
				
					svgf.id('LineSq',svgf.line(6,24,24,6))+
				
					svgf.id('line1tick',svgf.path('M4 16 H26 M15 16 V11 M4 16 H26'))+
					svgf.id('line2tick',svgf.path('M9 4 V22 M9 15 H5 M15 21 V25 M9 21 H26'))+
				
					svgf.id('linecurveH',svgf.path('M5 20 Q15 5 25 20'))+
					svgf.id('linecurveV',svgf.path('M20 5 Q5 15 20 25'))
				)+

				

				DCtv('pg2 svgLine',	[
					
						svgf.id('SLlineH',svgf.path('M6 6 V24 H20'))+
						svgf.id('SLlineSqH',svgf.path('M6 6 V24 H24'))+
					
						svgf.id('SAlineH',svgf.path('M6 6 V20 A4 4 0 0 0 10 24 H20'))+
						svgf.id('SAlineSqH',svgf.path('M6 6 V20 A4 4 0 0 0 10 24 H24'))+
					
						svgf.id('linearcH',svgf.path('M6 10 A18 5 0 1 1 6 20'))+
						svgf.id('linearcV',svgf.path('M10 24 A5 18 0 1 1 20 24')),
					

					
						svgf.id('ZLlineV',svgf.path('M6 6 V15 H24 V24'))+
						svgf.id('ZAlineV',svgf.path('M6 6 V11 A4 4 0 0 0 10 15 H20 A4 4 0 0 1 24 19 V24'))+
										
						svgf.id('ZLlineH',svgf.path('M6 6 H15 V24 H24'))+
						svgf.id('ZAlineH',svgf.path('M6 6 H11 A4 4 0 0 1 15 10 V20 A4 4 0 0 0 19 24 H24'))+
										
						svgf.id('linearc',svgf.path('M6 22 A22 12 0 0 1 24 8'))+
					
						svgf.id('linearcSq',svgf.path('M10 5 A10 10 0 0 1 10 25')),



						svgf.id('LineCross',svgf.line([[6,15,24,15],[15,10,15,20]]))+
					
						svgf.id('LineSqCross',svgf.line([[3,15,27,15],[15,3,15,27]]))+
					
						svgf.id('DLlineH',svgf.path('M24 10 H6 V20 H24'))+
						svgf.id('DLlineSqH',svgf.path('M24 6 H6 V24 H24'))+
					
						svgf.id('DAlineH',svgf.path('M24 10 H10 A4 4 0 0 0 6 14 V16 A4 4 0 0 0 10 20 H24'))+
						svgf.id('DAlineSqH',svgf.path('M24 6 H10 A4 4 0 0 0 6 10 V20 A4 4 0 0 0 10 24 H24')),


					

						svgf.id('LineX',svgf.line([[6,20,24,10],[6,10,24,20]]))+
						svgf.id('LineSqX',svgf.line([[5,25,25,5],[5,5,25,25]]))+
					
						svgf.id('DLlineV',svgf.path('M10 24 V6 H20 V24'))+
						svgf.id('DLlineSqV',svgf.path('M6 24 V6 H24 V24'))+
					
						svgf.id('DAlineV',svgf.path('M10 24 V10 A4 4 0 0 1 14 6 H16 A4 4 0 0 1 20 10 V24'))+
						svgf.id('DAlineSqV',svgf.path('M6 24 V10 A4 4 0 0 1 10 6 H20 A4 4 0 0 1 24 10 V24')),
					
					
					
					
					
					
						svgf.id('Line3TH',svgf.line([[5,15,5,8],[5,15,5,22],[5,15,25,15]]))+
						svgf.id('Line3TV',svgf.line([[15,8,3,8],[15,8,27,8],[15,8,15,22]]))+
					
						svgf.id('Line3Y',svgf.line([[15,15,8,2],[15,15,22,2],[15,15,15,25]]))+
						svgf.id('Line3YEqui',svgf.line([[15,15,3.7,21.5],[15,15,26.3,21.5],[15,15,15,2]]))+
					
						svgf.id('Line3YRight',svgf.line([[15,15,28,15],[15,15,15,6],[15,15,6,24]]))+
						svgf.id('Line3YRightSq',svgf.line([[15,15,28,15],[15,15,15,2],[15,15,6,24]])),
					
					
					
					
					
						svgf.id('lineangleH',svgf.path('M28 22 H4 L28 10'))+
						svgf.id('lineangleV',svgf.path('M11 25 V5 L20 25'))+
					
						svgf.id('lineIsoH',svgf.path('M24 6 L6 15 24 24'))+
						svgf.id('lineIsoV',svgf.path('M6 24 L15 6 24 24'))+
					
						svgf.id('Line3EH',svgf.line([[2,15,28,15],[2,15,28,5],[2,15,28,25]]))+
						svgf.id('Line3EV',svgf.line([[15,2,15,28],[15,2,5,28],[15,2,25,28]]))
					
				]).join('')+
					
				DCtv('pg3 svgLine',	[
						svgf.id('lineangle30',svgf.path('M25 24 L7 24 25 14')+svgf.text('30°',[15,2,10]))+
						svgf.id('lineangle45',svgf.path('M25 24 L7 24 25 6')+svgf.text('45°',[15,2,10]))+
						svgf.id('lineangle60',svgf.path('M24 24 L6 24 16 6')+svgf.text('60°',[20,14,10]))+
						svgf.id('lineangle120',svgf.text('120°',[20,2,12]))+
						svgf.id('lineangle135',svgf.text('135°',[20,2,12]))+
						svgf.id('lineangle150',svgf.text('150°',[20,2,12])),
					
					
					
					
					
					
						svgf.id('lineIso30',svgf.path('M25 15 L7 20 25 25')+svgf.text('30°',[15,2,10]))+
						svgf.id('lineIso45',svgf.path('M25 10 L7 17.5 25 25')+svgf.text('45°',[14,2,10]))+
						svgf.id('lineIso60',svgf.path('M22 4.6 L4 15 22 25.4')+svgf.text('60°',[19,14,10]))+
					
						svgf.id('lineIso120',svgf.text('120°',[20,2,12]))+
						svgf.id('lineIso135',svgf.text('135°',[20,2,12]))+
						svgf.id('lineIso150',svgf.text('150°',[20,2,12]))
				]).join('')+
				
				DCtv('pg3',	[
					svgf.id('MoonNote',svgf.path('M5 20 A11 11 0 0 1 25 20 z'))+
					svgf.id('MoonNoteEqui',svgf.path('M5 20 A10 10 0 0 1 25 20 z'))+
					svgf.id('LfanNoteV',svgf.path('M15 20 L25 10 A15 15 0 0 0 5 10 z'))+						
					svgf.id('LfanNoteH',svgf.path('M20 15 L10 25 A15 15 0 0 1 10 5 z'))+
					svgf.id('AfanNoteV',svgf.path('M10 22 A13 13 0 0 1 20 22 L27 12 A15 15 0 0 0 3 12 z'))+
					svgf.id('AfanNoteH',svgf.path('M22 10 A13 13 0 0 0 22 20 L12 27 A15 15 0 0 1 12 3 z')),
				

				
					svgf.id('TriangonIsoV',svgf.polygon('8,25 15,5 22,25'))+
					svgf.id('TriangonIsoH',svgf.polygon('5,22 25,15 5,8'))+

					svgf.id('TriangonIso30',svgf.text('30°',[20,5,12]))+

					svgf.id('TriangonIsoEqui',svgf.polygon('4,25 15,5 26,25'))+

					svgf.id('TriangonIso120',svgf.text('120°',[20,2,12]))+

					svgf.id('TriangonIso150',svgf.text('150°',[20,2,12])),

				


					svgf.id('TriangonRighttH',svgf.polygon('7,5 7,25 23,25'))+
					svgf.id('TriangonRighttV',svgf.polygon('7,5 23,5 23,25'))+

					svgf.id('TriangonRightt15',svgf.text('15°',[20,5,12]))+
					svgf.id('TriangonRightt30',svgf.text('30°',[20,5,12]))+

					svgf.id('TriangonRighttEqui',svgf.polygon('5,5 5,25 25,25'))+

					svgf.id('TriangonH',svgf.polygon('8,25 12,5 22,25')),
				

				


					svgf.id('TriangonRightxH',svgf.polygon('5,20 25,20 20,11'))+
					svgf.id('TriangonRightxV',svgf.polygon('10,5 10,25 19,20'))+

					svgf.id('TriangonRightx15',svgf.text('15°',[20,5,12]))+
					svgf.id('TriangonRightx30',svgf.text('30°',[20,5,12]))+

					svgf.id('TriangonRightxEqui',svgf.polygon('2,21 28,22 15,8'))+

					svgf.id('TriangonV',svgf.polygon('5,22 25,18 5,8'))
				]).join('')+




				DCtv('pg4',	[

					svgf.id('LStarNote',svgf.path('M7 15 A8 10 0 0 1 15 25 8 10 0 0 1 23 15 8 10 0 0 1 15 5 8 10 0 0 1 7 15 z'))+
					svgf.id('LStarNoteSq',svgf.path('M5 15 A10 10 0 0 1 15 25 10 10 0 0 1 25 15 10 10 0 0 1 15 5 10 10 0 0 1 5 15 z'))+
					svgf.id('AStarNote',svgf.path('M8 15 L13 17 15 25 17 17 22 15 17 13 15 5 13 13 z'))+
					svgf.id('AStarNoteSq',svgf.path('M5 15 L13 17 15 25 17 17 25 15 17 13 15 5 13 13 z')),


				
				

					svgf.id('LIGonRndT',svgf.path('M5 18 H12 V23 H18 V18 H25 V12 H18 V7 H12 V12 H5 z'))+
					svgf.id('LIGonRndSqT',svgf.path('M6 18 H12 V24 H18 V18 H24 V12 H18 V6 H12 V12 H6 z'))+


					svgf.id('AIGonRndT',svgf.path('M8 12 A3 3 0 0 0 8 18 H12 V20 A3 3 0 0 0 18 20 V18 H22 A3 3 0 0 0 22 12 H18 V10 A3 3 0 0 0 12 10 V12 z'))+
					svgf.id('AIGonRndSqT',svgf.path('M8 12 A3 3 0 0 0 8 18 H12 V22 A3 3 0 0 0 18 22 V18 H22 A3 3 0 0 0 22 12 H18 V8 A3 3 0 0 0 12 8 V12 z'))+

					svgf.id('LOGonRnd',svgf.path('M5 18 H10 V23 H20 V18 H25 V12 H20 V7 H10 V12 H5 z'))+
					svgf.id('LOGonRndSq',svgf.path('M5 20 H10 V25 H20 V20 H25 V10 H20 V5 H10 V10 H5 z')),
				

				
					svgf.id('LIGonRndX',svgf.path('M5 11 L10 15 5 19 8 23 15 18 22 23 25 19 20 15 25 11 22 7 15 12 8 7 z'))+
					svgf.id('LIGonRndSqX',svgf.path('M5 10 L10 15 5 20 10 25 15 20 20 25 25 20 20 15 25 10 20 5 15 10 10 5 z'))+
					svgf.id('AIGonRndSqX',svgf.path('M5 10 L10 15 5 20 A3.5 3.5 0 0 0 10 25 L 15 20 20 25 A3.5 3.5 0 0 0 25 20 L 20 15 25 10 A3.5 3.5 0 0 0 20 5 L 15 10 10 5 A3.5 3.5 0 0 0 5 10z'))+

					svgf.id('DdartNoteF',svgf.path('M5 10 L10 15 5 20 H25 L20 15 25 10 H5 z'))+

					svgf.id('QIGonRnd',svgf.path('M5 11 Q10 15 5 19 L8 23 Q15 18 22 23 L25 19 Q20 15 25 11 L22 7 Q15 12 8 7z'))+
					svgf.id('QIGonRndSq',svgf.path('M5 10 Q10 15 5 20 L10 25 Q15 20 20 25 L25 20 Q20 15 25 10 L20 5 Q15 10 10 5z')),


		
		


					svgf.id('DdartNoteM',svgf.path('M10 9 L5 15 10 21 H20 L25 15 20 9 z'))+

					svgf.id('LGonRnd',svgf.path('M3 18 L8 23 H22 L27 18 V12 L22 7 H8 L3 12 z'))+
					svgf.id('AGonRnd',svgf.path('M5 18 A5 5 0 0 1 10 23 H20 A5 5 0 0 1 25 18 V12 A5 5 0 0 1 20 7 H10 A5 5 0 0 1 5 12 z'))+
					svgf.id('AGonRndSq',svgf.path('M5 20 A5 5 0 0 1 10 25 H20 A5 5 0 0 1 25 20 V10 A5 5 0 0 1 20 5 H10 A5 5 0 0 1 5 10 z'))+

					svgf.id('AOGonRnd',svgf.path('M5 18 H10 V23 Q15 20 20 23 V18 H25 Q22 15 25 12 H20 V7 Q15 9 10 7 V12 H5 Q7 15 5 18z'))+
					svgf.id('AOGonRndSq',svgf.path('M5 20 H10 V25 Q15 22 20 25 V20 H25 Q22 15 25 10 H20 V5 Q15 7 10 5 V10 H5 Q7 15 5 20 z')),

				


				
					svgf.id('dartNote',svgf.path('M5 7 L13 15 5 23 H17 L25 15 17 7 H5 z'))+
					svgf.id('SdartNoteM',svgf.path('M5 7 V23 H17 L25 15 17 7 H5 z'))+
					svgf.id('SdartNoteF',svgf.path('M5 7 L13 15 5 23 H25 V7 z'))+
					svgf.id('Sarrow',svgf.path('M5 11 V19 H15 V25 L25 15 15 5 V11 H5z'))+
					svgf.id('Darrow',svgf.path('M10 12 V7 L3 15 10 23 V18 H20 V23 L27 15 20 7 V12 H10z'))+
					svgf.id('Xarrow',svgf.path('M5 11 L9 15 5 19 H15 V25 L25 15 15 5 V11 H5z')),


				



				
					svgf.id('CurveDbl',svgf.path('M5 15 Q10 7 15 15 20 7 25 15'))+
					svgf.id('SCurveWav',svgf.path('M5 15 Q10 5 15 15 T 25 15'))+
					svgf.id('DCurveWav',svgf.path('M5 15 Q10 5 15 15 T 25 15 M5 15 Q10 25 15 15 T 25 15'))+

					svgf.id('StriLinWav',svgf.path('M4 21 L10 10 15 20 20 10 26 21'))+
					svgf.id('DtriLinWav',svgf.path('M5 21 L15 9 25 21 M25 9 L15 21 5 9'))+

					svgf.id('rectLinWav',svgf.path('M5 22 V10 H10 V21 H15 V10 H20 V21 H25'))
				]).join('')+

				DCtv('pg5',	[
					svgf.id('SLinWavH',svgf.path('M5 21 L25 9 M15 15 H22 M5 21 H12'))+
					svgf.id('SLinWavV',svgf.path('M5 21 L25 9 M15 15 V20 M25 9 V14'))+
					svgf.id('DLinWavH',svgf.path('M5 21 L25 9 M8 15 H22'))+
					svgf.id('DLinWavV',svgf.path('M5 21 L25 9 M15 10 V20'))+

					svgf.id('ShvLinWav',svgf.path('M7 23 V18 H13 V13 H19 V8 H25'))+

					svgf.id('DhvLinWav',svgf.path('M7 23 V18 H13 V13 H19 V8 H25 V13 H19 V18 H13 V23 H7 Z')),

				

				


					svgf.id('LinWavX',svgf.path('M5 21 L25 9 M5 15 L15 21 M15 9 L25 15'))+

					svgf.id('LinWavT',svgf.path('M4 15 H26 M10 10 V20 M20 10 V20'))+


					svgf.id('LatticeInner',svgf.path('M4 11 H26 M4 18 H26 M11 25 V4 M18 25 V4'))+

					svgf.id('Grid',svgf.rect(5,7,20,16)+svgf.line([[15,7,15,23],[5,15,25,15]])),
				


				

					svgf.id('cuboid',svgf.path('M3 13 V23 H20 V13 H3 M3 13 L10 8 H27 L20 13 M20 23 L27 18 V8" class=dash stroke-linejoin="round')+
						svgf.path('M10 8 V18 H27 M10 18 L3 23" class=dash stroke-dasharray="3,1'))+
					svgf.id('cuboidSq',svgf.path('M4 11 V26 H19 V11 H4 M4 11 L11 5 H26 L19 11 M19 26 L26 20 V5" class=dash stroke-linejoin="round')+
						svgf.path('M11 5 V20 H26 M11 20 L4 26" class=dash stroke-dasharray="3,1'))+


					svgf.id('Ellipsoid',svgf.ellipse(15,15,12,10)+
						svgf.path('M15 5 A2 5 0 0 0 15 25 M3 15 A12 2 0 0 0 27 15')+
						svgf.path('M15 5 A2 5 0 0 1 15 25 M3 15 A12 2 0 0 1 27 15" class=dash stroke-dasharray="3,1'))+
					svgf.id('EllipsoidSq',svgf.circle(15,15,10)+
						svgf.path('M15 5 A1 5 0 0 0 15 25 M5 15 A5 1 0 0 0 25 15')+
						svgf.path('M15 5 A1 5 0 0 1 15 25 M5 15 A5 1 0 0 1 25 15" class=dash stroke-dasharray="3,1')),
				

				


					svgf.id('cylinderoidV',svgf.ellipse(15,6,10,4)+
						svgf.path('M5 6 V22 A5 2 0 0 0 25 22 V6')+
						svgf.path('M5 22 A5 2 0 0 1 25 22" class=dash stroke-dasharray="3,1'))+
					svgf.id('cylinderoidH',svgf.ellipse(24,15,4,10)+
						svgf.path('M23 5 H7 A2 5 0 0 0 7 25 H23')+
						svgf.path('M7 5 A2 5 0 0 1 7 25" class=dash stroke-dasharray="3,1'))+
					svgf.id('conoidOV',svgf.path('M15 2 L5 22 A5 2 0 0 0 25 22 L15 2')+
						svgf.path('M5 22 A5 2 0 0 1 25 22" class=dash stroke-dasharray="3,1'))+
					svgf.id('conoidOH',svgf.path('M2 15 L22 5 A2 5 0 0 1 22 25 L2 15')+
						svgf.path('M22 5 A2 5 0 0 0 22 25" class=dash stroke-dasharray="3,1'))+
					svgf.id('conoidIV',svgf.path(['M15 2 L5 22 A5 2 0 0 1 25 22 L15 2','M5 22 A5 2 0 0 0 25 22']))+
					svgf.id('conoidIH',svgf.path(['M2 15 L22 5 A2 5 0 0 0 22 25 L2 15','M22 5 A2 5 0 0 1 22 25'])),
				

				
					svgf.id('fx',svgf.text('ƒ',[22,9,24]))+
					svgf.id('capctx',svgf.text('JS',[24,4,22]))
				]).join('')+
				
			dc+

			DCtv('svgTool2',

				svgf.id('LayerToggle" tip="Layer Toggle',svgf.path('M5 7 V23 H27','white" stroke-dasharray="3,1')+svgf.rect(9,7,18,12))+


				svgf.id('CanvasToggle" tip="Background Canvas Toggle',svgf.path('M5 28 L25 2')+svgf.rect(5,7,20,16))+


				svgf.id('Crop" hotkey="C',svgf.path('M5 12 V7 H10 M20 7 H25 V12 M25 18 V23 H20 M10 23 H5 V18'))+
				
				svgf.id('allEraser" tip="bg',svgf.rect(5,7,20,16,'','white'))+

				svgf.id('noteEraser" tip="Del Layer" title="Shift+Delete(D)\n'+gM('2D on → Erase All'),svgf.path('M10 20 L20 10 M10 10 L20 20')+svgf.rect(5,7,20,16))
			
			)+
			'<div id=svgTog>'+
				svgf.id('svgPg1',svgf.line(10,15,20,15))+
				svgf.id(zlrA('svgPg',seqA(2,4)),svgf.circle(15,15,5)).join('')+

				
			dc+
dc+

			'<div id=svgCode>'+
				itv('" tip=Hide id="SVGhide','keyboard_arrow_up')+

				itv('" tip=Code id="outputCode','code')+
				itv('" tip=copy2clipboard id="copy2clipboard','library_books')+
				(isdoodle?'':
				itv('" tip=copy2input id="copy2input','library_add')+
				itv('" tip=copyAll2input id="copyAll2input','photo_library'))+

				itv('" tip="Upload HTML File" id="','file_upload')+
				'<input type=file id=SVGUploadFile hidden />'+
				itv('" tip="Download HTML File" id="SVGDownload','file_download')+
				itv('" tip=Launch id="launchCap','launch')+

				'<div id=CodeOut hidden>'+
					SCtv('tool radio seled" name=codeout id="code_API','API')+
					SCtv('tool radio" name=codeout id="code_Native',gM('Native'))+
					SCtv('tool radio" name=codeout id="code_UserInput',gM('User Input'))+
					SCtv('tool radio" name=codeout id="code_Canvas',gM('Canvas'))+

					detail(gM('Option'),[
						'<label>'+strchkbx0+'id=ignoreHiddenElement'+chked+' />'+gM('ignoreHiddenElement')+'</label>',
						'<label>'+strchkbx0+'id=svg2path />'+gM('Transform to Path')+'</label>',
						].join(br)
					)
				+
				txa('','" id="codetext')+
				dc+
				

			dc+

		dc

	)
	//dc+dc+<div for=clear>'+dc+

	);



	//caps=new ctt('#caps');

	$('#svgTog ~ *, .pg1 ~ div, span[for], #Legoon, #Roughon').hide();




	//attr


	$('#svgTog').attr('title', gM('Hide') + ' | ' + gM('hotkey') + ': Shift + Esc');
	$('#Tile :button[title]').attr('title', function (i, v) { return gM('hotkey') + ': ' + v });
	$('#font').attr('placeholder', gM('font'));
	$('#CssRotate6 img').not('[tip]').attr('tip', function () { return $(this).attr('id')});



	$('#CssRotate :radio').attr('name', 'rotate');


	$('#tileToolCap img').attr('src', 'img/ZIL.png');




    // html

	$('.Char').text(gM('Char'));


	$('#fontCSS span').text('A');



	$('span:empty[id]').text(function () { return gM(this.id) });
	


	$('.Grad').after(gM('Gradient'));


	$('[name=FGradType],[name=BGradType],[name=SGradType]').before(function () { var v = this.value; return gM(v) });


	var colorTmpl=DCtv('stroke',
			'<label>'+gM('Stroke')+strchkbx0+'class=strokeon'+chked+' /></label>'+
			'<input type=color value="#000000" class=color />'+
			'<label>'+gM('Gradient')+strchkbx0+'class=gradon /></label>'+br+
			gM('Color')+strtxt+'placeholder="0 color,0.5 color,1 color" class=gradcolor />'+
			gM('Linear / Radial')+strtxt+'placeholder="x0 y0 (r0) x1 y1 (r1)" class=grad />'

		)+DCtv('fill',
			'<label>'+gM('Fill')+strchkbx0+'class=fillon /></label>'+
			'<input type=color value="#000000" class=color />'+
			'<label>'+gM('Gradient')+strchkbx0+'class=gradon /></label>'+br+
			gM('Color')+strtxt+'placeholder="0 color,0.5 color,1 color" class=gradcolor />'+
			gM('Linear / Radial')+strtxt+'placeholder="x0 y0 (r0) x1 y1 (r1)" class=grad />'

		)+DCtv('shadow',
			'<label>'+gM('dropShadow')+strchkbx0+'class=shadowon /></label>'+
			'<input type=color value="#000000" class=color />'+
			gM('Blur')+num('0" class="blur')+
			gM('Offset')+strtxt+'placeholder="0 0" class=offset />'
		)+'<div>'+itv('Add','add')+itv('Del','clear')+dc;

	$('div[for=text] .multi').append(colorTmpl);
	$('div[for=shape] .multi').append(
		'<div>'+gM('Overlap')+'<select class=comp>'+Options(['source-over','source-atop','source-in','source-out','destination-over','destination-atop','destination-in','destination-out','lighter','copy','xor']).join('')+'</select>'+
			gM('Dash')+strtxt+'class=dash placeholder="2,4,2" />'+dc+colorTmpl

	);

	$('.color').after(function(){return strtxt+'value="'+$(this).val()+'" class=colorhex size=4 />'+gM('opa')+num('1" step=.1 class="opa',0,1)});

	//val


	$(':button[value=""], :button:not([value])').val(function () { return gM(this.id) });



	$('#fontSize').val(function () { return L[this.id] || 24 });
	$('#font').val(function () { return L[this.id] || 'Microsoft Yahei' });

	//color

	$('#Color :color').val(function () {
		return L[this.id.replace('G', 'T')] || L[this.id] || L[this.id.replace(/^./, 'B')];
	}).next('input').add('#cssDropShadowOpac').attr('tip', 'opa');

	var C = '#Css';
	$(C + 'Filter img, .scale, .skew, .clip, .translate').attr('tip', 'reset').on('click', function () {
		var me = $(this);

		cng_popout(me.parent().find('input').val(function () { return $(this).attr('value') }).last()[0]);
		me.parent().find('.rngv').text(function () { return $(this).prev().attr('value') });
	});


	$('#CssRotate6 img').on('click', function () {
		$('#rotate ~ input').val(0);
		var id = this.id, cR = '#cssRotate';
		if (/flipx|y/.test(id)) { $(cR + this.id.substr(-1).toUpperCase()).val(180) }
		if (/rotate/.test(id)) { var i = Number(id.substr(-1)); $(cR + 'Z').val(i < 3 ? i * 90 : -90) }
		cng_popout($(cR + 'Z')[0]);

	});



	$('#TextBoxType').on('change',function(){
		var f=$('#TextBoxTool > div[for]').hide().filter('[for="'+this.value+'"]'), ediHot=$('#TextBoxTool summary .ediHot').hide().filter('[for="'+this.value+'"]');
		if(f.length){
			f.show().parent().show()
			ediHot.show();
		}else{
			f.parent().hide();
		}
	})
	;


	$('#effects').on('change', function () {
		var v = $(this).val(); if (v != 'effects') {
			eval(v + '()');
			$(this).val('effects');
			$('#tileTool').hide();
		}
	}).children().eq(0).text(gM('Effects'));





	$('#canvasMenu .mi').on('click', function(){
		var me=$(this),id=this.id,pa=me.parent(),tog=me.toggleClass('toggle').is('.toggle');

		if(id=='clear'){
			me.removeClass('toggle');
			if(L.drawShape=='allEraser'){
				caps.clear();
			}else{
				//$('#'+L.drawShapeNow).find('canvas')
				$('#TextBox').val('');
				$('#TextBoxGo').click();
			}
			$('#TextBoxTool [for=Canvas] .on').prop('checked',false);
			
		}else{
			
			me.siblings().removeClass('toggle');
			pa.nextAll('[for='+id+']').toggle(tog);
			pa.nextAll().not('[for='+id+']').hide();
		}
	});


	$('#TextBoxTool div[for=HTML]').on('click','input, select,textarea,label,meter, table,hr,details,fieldset,span.bdb,mark,del',function(){
		var me=$(this),pa=me.parent(), t=this.outerHTML, shifton=$('#SVGshift path').attr('stroke')=='yellow';
		//console.log(t);
		if(pa.is('label')){
			t=XML.wrapE('label', t.replace(/input /, '$&'+(!me.prop('checked')?'checked ':'')));
		}else if(me.is('label')){
			t=t.replace(/input /, '$&'+(!me.children().prop('checked')?'checked ':''));

		}else if(me.is('mark') & shifton){
			t="mark('"+gM('Mark')+"')";
		}else if(me.is('del') & shifton){
			t="del('"+gM('Del')+"')";

		}else if(me.is('.bdb')){
			var mt=me.text();
			if(mt=='URL'){
				t="href('URL','"+gM('Text')+"')";
			}else if(mt==gM('dl')){
				t="dl([1,2],[1.1,2.1])";
			}else if(mt==gM('ol')){
				t="ol([1,2])";
			}else if(mt==gM('ul')){
				t="ul([1,2])";
			}else if(mt==gM('Table')){
				t="Table('',[[1,2],[3,4]],'TBrc')";
			}

			if(!shifton){
				t=eval(t)
			}

		}else if(me.is(':number') & shifton){
			t="num("+me.val()+",0,100)";

		}else if(me.is(':range') & shifton){
			t="rng("+me.val()+",0,100)";

		}else if(me.is(':color') & shifton){
			t="colorbx('"+me.val()+"')";

		}else if(me.is(':text') & shifton){
			t="txtreadonly('"+me.val()+"')";



		}else if(me.is('input')){
			if(me.is('.iframesrc')){
				t='<iframe src="'+H_a($(this).val(),location.origin+location.pathname)+'" width=300 height=600 style="border:0"></iframe>'


			}else{
				t=/value/.test(t)?t.replace(/value="[^"]*"/, 'value="'+me.val()+'"'):t.replace(/input /, '$&value="'+me.val()+'" ');
			}
			
		}else if(me.is('select')){
			if(shifton){
				t="XML.wrapE('select',Options([1,2],[1,2]).join(''))"
			}else{

				t=t.replace('value="'+me.val()+'"', 'value="'+me.val()+'" selected');
			}

		}else if(me.is('textarea')){
			if(shifton){
				t="txa("+me.val()+")"
			}else{
				t=txa(me.val());

			}

		}else if(me.is('details')){
			if(shifton){
				if(me.children('summary').text()==gM('Reference')){
					t="refer([1,2])"
				}else{
					t="detail("+gM('summary')+","+gM('details')+")"

				}
			}

		}else if(me.is('fieldset')){
			if(shifton){
				t="fieldset("+gM('summary')+","+gM('details')+")"
			}
		}
		
		$('#TextBox').val(t);

	});
	$('#allEraserCanvas').on('click','.mi-span',function(){
		var me=$(this),id=this.id,pa=me.parent(),tog=me.toggleClass('toggle').is('.toggle'),nx=me.next('[for='+id+']');
		
		if(nx.length){
			nx.toggle();
		}else{
			me.removeClass('toggle');
		}
		pa.siblings().children('.toggle').toggleClass('toggle').next().hide()
	}).on('click','#aniControl .mi',function(){
		var me=$(this),id=this.id.substr(3), L=localStorage;
		
		if(id=='Play'){
			if(me.text()=='play_arrow'){
				me.text('pause');
				
				
			}else{
				me.text('play_arrow');
				//clearInterval();
				
			}
			
		}

		if(id=='Stop'){
			
			//clearInterval();
			$('#TextBox').val('');
			$('#TextBoxGo').click();
			
		}

		if(id=='Shot'){
			
			//clearInterval();
			$('#TextBox').val('');
			$('#TextBoxGo').click();
		}

		if(id=='Input'){
			
			
			
		}

		if(id=='Output'){
			
			
			
		}
	
	}).on('click','.Add',function(){
		var me=$(this),p=me.parent().parent();
		p.clone().insertAfter(p);

	}).on('click','.Del',function(){
		var me=$(this),p=me.parent().parent();
		if(p.siblings('.multi').length){
			p.remove();

			$('#TextBox').val('');
			$('#TextBoxGo').click();
		}else{
			p.parent().prev().find('.on').click();
		}

	}).on('click','.multinput',function(){
		var me=$(this).prop('checked',true), pa=me.parent(),psib=pa.siblings(':has(.multinput)');
		psib.find('.multinput').prop('checked',false);
		psib.find('input').not('.multinput').attr('disabled','disabled');
		pa.find('input').removeAttr('disabled');

	}).on('paste','.imgurl',function(e){

		var ts=e.originalEvent.clipboardData.items, me=$(this), id=this.id, p=me.parent(), pp=p.parent(),
	
		cb=function(){
			scrn('eraser');
			loadCaps();
			caps.repaint();
		};
		if(ts.length){
			for(var i=0;i<ts.length;i++){
				if(ts[i].kind == 'file'){
					pp.find(':file').val('');
					
					var blob = ts[i].getAsFile(),reader=new FileReader();
					//console.log(ts[i]);  DataTransferItem {type: "image/png", kind: "file"}
					reader.onload = function(event){
						//console.log(event);
						var src = event.target.result; //webkitURL.createObjectURL(blob);

						
						var sne=picSrcNameExt(src), img=new Image();
						me.val(' ').css('background','url('+src+') bottom right/contain no-repeat')
							.attr({'data-name':'clipboard','data-no':0,'data-size':0,'data-sz':0,'data-ext':'other','data-bg':src,'data-src':src});
						img.onload=function(){
							var w=this.width;
							var h=this.height;
							var s=w+'×'+h;
							$('.imgurl[data-bg="'+this.src+'"]').attr({'data-w':w,'data-h':h,'data-wxh':s});
							$(this).attr({'data-wxh':s, 'data-src':this.src});
							cb();
						};
						img.src=src;
						

					};
					reader.readAsDataURL(blob);
					break;
				}
			}
		}
	}).on('change keyup mouseup','input:not(.imgurl,.imgurlfile),select',function(e){//keyup mouseup
		var me=$(this);

		e.stopPropagation();
		if(me.parents('[for=ani]').length){
			return
		}
		
		if(me.is('.color')){
			me.next().val(me.val());
		}
		if(me.is('.colorhex')){
			me.prev().val(me.val());
		}
		if(me.is('.on')){
			var on=me.prop('checked');
			me.parent().next().toggle(on);

			if(me.is('#bgimgOn')){
				if(on){

					loadCaps()
				}else{
					scrn('eraser');
					caps.repaint();
				}
			}
		}



		$('#TextBox').val('');
		$('#TextBoxGo').click();

	}).on('click','#aniShot',function(){
		open($('#caps')[0].toDataURL());
	
	});


	$('#canvasMenu').nextAll().hide();




	$('.ediHot :button').on('click', function () {
		var me=$(this),tp=me.parent().attr('for'),v=me.attr('data-v'),t='';
		if(tp=='HTML'){
			t='<iframe src="'+H_a(v+'.html',location.origin+location.pathname)+'" width=300 height=600 style="border:0"></iframe>';
			//console.log(t);
			$('#TextBox').val(t);
			$('#TextBoxGo2').click();
			
		}


	});

	$('#OtherOpts :checkbox').on('click', function () {

		var c = $(this).prop('checked'), id = this.id.replace(/on$/, ''), shpNid = L.drawShapeNow || 'unknown', shpN = $('#' + shpNid), otherShps = shpN.children('.' + id);
		if (!otherShps.length) {
			otherShps = shpN.nextAll('[id^=' + shpNid + id + ']');
			if (id == 'VertexLine') {
				otherShps = shpN.children('.main')
			}
		}
		otherShps.toggle(c);
	});


	$('.clrCanvas').on('click', function () {
		var ts = (L.timeids || '').trim();
		if (ts) {
			Arrfc([clearInterval, Number], ZLR(ts));
			L.timeids='';
		}
		$('#Caps > .effects').remove();
		$('#caps ~ canvas').remove();

		scrn('eraser');
		caps.repaint();

	});
	$('#clrTextBox').on('click', function () {
		$('#Caps .cap'+$('#TextBoxType').val()).remove();
		if($('#allEraser rect').attr('stroke')=='yellow'){
			L.canvasCode='';
			L.legoCode='';
			L.roughCode='';
			scrn('eraser');
			caps.repaint(1);
		}
	});




	$('#SVGhide').on('click',function(e){
		var shft=e.shiftKey || $('#SVGshift path').attr('stroke')=='yellow';
		if($('#svgs').is('.toggle')){
			if($('#tileTool').is(':visible')){
				$('#tileTool').fadeOut();
				if(shft){
					//parent.document.getElementById
					//$("iframe[src*=doodle]",parent.document).hide()	CORS blocked
				}
			}else{
				$('#svgs').click();
			}

			
		}else{
			$('#svgs').click();
		}
	});


	$('#copy2clipboard').on('click',function(){

		//$('#outputCode').click();
		tileToolCode($('#'+L.drawShapeNow));
		$('#CodeOut').addClass('opa0').show();

		$('#codetext').select();
		document.execCommand('copy', false, null);
		toolTip(gM('copiedtip'));

		$('#CodeOut').hide().removeClass('opa0');

	})
	$('#copy2input').on('click',function(){
		var iT=$('#input0Type');
		if(!/Markdown|HTML|SVG/.test(iT.val())){
			iT.val('SVG').change()
		}
		$('#input0').val(function(i,v){return v+$('#codetext').val()}).change();

	})
	$('#copyAll2input').on('click',function(){
		var a=[];
		$('#capsimg + div').nextAll().each(function(){
			//a.push($(this).prop('outerHTML'))
			a.push(tileToolCode(this,1))
		});
		if(a.length){
			var iT=$('#input0Type');
			if(!/Markdown|HTML|SVG/.test(iT.val())){
				iT.val('SVG').change()
			}
			$('#input0').val(function(i,v){return v+a.join('\n')}).change();
		}

	})

	$('#outputCode').on('click',function(){
		var me=$(this);
		if($('#CodeOut').is(':visible')){
			$('#CodeOut').fadeOut();
			me.removeClass('seled');
		}else{
			tileToolCode($('#'+L.drawShapeNow));
			$('#CodeOut').fadeIn();
			me.addClass('seled');
		}
	});

	$('.radio[name=codeout], #CodeOut input').on('click',function(){
		var me=$(this);
		if(me.is('.radio')){
			me.addClass('seled').siblings('.radio').removeClass('seled')
		}

		tileToolCode($('#'+L.drawShapeNow));

	});


	$('#SVGUpload').on('click',function(){
		$('#SVGUploadFile').click()
	});
	$('#SVGUploadFile').on('change',function(){
		var v=$(this).val();
		if(v){
			var files=this.files, fl=files.length;
			for(var i=0;i<fl;i++){
				var f=files[i];
				var reader=new FileReader();
				reader.onload = function(e){
					//var txt = this.result;
					var txt=e.target.result;

					L.cap0=getcap0();
					L.cap1=txt;
					$('#capsdiv').nextAll().remove();
					$('#capsdiv').after(txt);
					
				};

				reader.readAsText(f);

			}
		}
	});
	$('#SVGDownload').on('click',function(){
		//saveText(L.cap1,gM('zzllrr Mather')+'-'+gM('Doodle')+'_'+Time.now()+'.html');
		var x=[];
		$('#capsdiv').nextAll().each(function(){
			x.push(this.outerHTML)
		});
		saveText(csslib.markdown+x.join('\n'),gM('zzllrr Mather')+'-'+gM('Doodle')+'_'+Time.now()+'.html');
	});


	$('#copyDir').val(['1']);

	$('[name=gridType]').after(function () {
		var v = this.value;
		return gM(v)
	});
	$('[name=MarginCopyOpt]').after(function () {
		var v = this.value;
		return { w: gM('w') + ' (' + gM('Margin') + ')', copy: gM('Copy') + ' (' + gM('Spacing') + ')' }[v]
	}).on('click', function () {
		if (this.value == 'w') {
			$('#gridR,#gridC').val(30)
		} else {
			$('#gridR,#gridC').val(3)
		}
	});





	var c = $('#tileToolCap svg[id]').not('#Pointer,#allEraser,#Text,[id^=svgPg]').children().not('defs');

	c.not('text').attr({ 'stroke': 'white', 'fill': 'none' });
	c.filter('text').attr({ 'stroke': 'none', 'fill': 'white' });

	$('#svgArwE').val(6);


	$('filter').attr({ x: 0, y: 0, width: '100%', height: '100%' });

	$('#Line marker').attr({ orient: 'auto' }).children().attr({ stroke: 'white', fill: 'none' });

	for (var i = 2; i < 6; i++) {
		$('#ArwE' + i + 'Line').clone().appendTo('#Line defs').attr('id', 'ArwE' + (i + 4) + 'Line').children().attr('fill', 'white');
		$('#ArwS' + i + 'Line').clone().appendTo('#Line defs').attr('id', 'ArwS' + (i + 4) + 'Line').children().attr('fill', 'white');
	}

	$('#Line defs').clone().prependTo('.svgLine svg:not(#Line)').children().attr('id', function (i, v) { return v.replace('Line', '') + $(this).parent().parent().attr('id') });



	$('#COLOR :range').each(function () {
		var me = $(this);
		me.after(SC + 'rngv title="' + (me.attr('title') || me.prev().text()) + '">' + me.attr('value') + sc);
	});



	$('.Grad').on('click', function () {
		var me = $(this), c = me.prop('checked'), mp = me.parent(), mpn = mp.nextAll();
		mpn.toggle(c);
		if (c) {
			var GradType = me.parent().next().find(':radio:checked').val();
			mpn.filter('.Radial').toggle(GradType == 'Radial');
			mpn.filter('.Linear').toggle(GradType != 'Radial');
		}
		mp.prev('summary').toggleClass('seled', c);
		if (mpn.filter('#sgcs').length) {

			scrn('eraser');
			caps.repaint();
			
		} else {
			if (c) {
				refreshFilter()
			} else {
				toggleColorShpN()
			}
		}

	});
	$('#Color').children().eq(2).find('.Grad').click();

	$('#Color :radio').on('click', function () {
		var me = $(this);
		var pp = me.parent().parent(), v = me.val();
		pp.nextAll('.' + v).show();
		pp.nextAll('.' + (v == 'Linear' ? 'Radial' : 'Linear')).hide();

		if (me.is('[name=SGradType]')) {
			scrn('eraser');
			caps.repaint();

		} else {
			refreshFilter();
		}
	});





	$('#RandomColorson').on('click', function () {
		var c = $(this), shp = $('#' + (L.drawShape || 'unknown')), shpN = $('#' + (L.drawShapeNow || 'unknown'));
		if (L.drawShape == 'allEraser') {
			scrn('eraser');
			caps.repaint();
			reCanvasCode();
			
		} else if (!shp.parent().is('#svgTool,.svgTool2') || shp.is('#Pointer')) {
			RndColors(shpN);
		}
	});



	$('#svgShape svg[id], .svgTool2 svg[id]').on('click', function (e) {


		var me=$(this),id = this.id, pa = $(this).parent(), isCopy = /Copy/.test(id), isTxt = /Text/.test(id),
			isNarrow=$('#tileToolCap').is('.Narrow'),
			shifton=$('#SVGshift path').attr('stroke')=='yellow',
			D2on=$('#D2on text').attr('fill')=='yellow',
			Legoon=$('#Legoon rect').attr('stroke')=='yellow',
			D3on=$('#Zdogon text').attr('fill')=='yellow',
			Roughon=$('#Roughon path').attr('stroke')=='yellow';
		Scroll('scrollT');

		if(/SVGshift|D2on|Zdogon|Roughon|LayerToggle|CanvasToggle/.test(id) && isNarrow && !/Pointer|Copy|Eraser/.test(L.drawShape)){
			var pg=($('#'+L.drawShape).parent().attr('class')||'').replace(/\D/g,'');
			$('#svgPg'+pg).siblings().hide();

			$('.pg'+pg).children().not('#'+L.drawShape).hide();

		}
		if(id=='Narrow'){

			var w=$('#tileTool')[0].style.width;
			$('#tileTool')[0].style.width=(w?'':'5rem');
			$(this).children('path').attr('d', w?'M10 20 L15 15 10 10 M18 9 V21':'M20 20 L15 15 20 10 M12 9 V21');
			//console.log(w);
			$('#svgToolOpt,#tileToolCap').toggleClass('Narrow',w=='');
			if(w){
				$('#svgShape svg,#svgTog svg').show()
			}else{
				var pg=($('#svgTog svg').filter(function(){return $(this).children().attr('stroke')=='yellow'}).attr('id')||'').replace(/\D/g,'');

				$('#svgPg'+pg).siblings().hide();
	
				if(!/Pointer|Copy|Eraser/.test(L.drawShape)){
					$('.pg'+pg).children().not($('#'+L.drawShape)).hide();
				}
				
			}
			
			
			return
		}

		if(id=='ToolOpt'){
			$(this).children('path').attr('stroke',$('#svgToolOpt').is(':visible')?'white':'yellow');
			$('#svgToolOpt').toggle();
			return
		}
		if(id=='SVGshift'){
			$(this).children('path').attr('stroke',function(){return $(this).attr('stroke')=='white'?'yellow':'white'});
			
			return
		}
		if(id=='Roughon'){
			$(this).children('path').attr('stroke',function(){var istog=$(this).attr('stroke')=='white';
				if(istog){
					$('#Legoon').children('path').attr('stroke','white');
					$('#Legoon').children('circle').attr('fill','white')
				}
				return istog?'yellow':'white'});
			if(L.drawShapeNow){
				mUp(e,1,L.drawShapeNow.replace(/\d+$/,''))
			}
			return
		}


		if(id=='Zdogon'){
			$(this).children('text').attr('fill',function(){var istog=$(this).attr('fill')=='white';
				$('.zdog').children().attr('spinning',istog);
				return istog?'yellow':'white'
			});
			if(L.drawShapeNow && !/Zdog_/.test(L.drawShapeNow)){
				mUp(e,1,L.drawShapeNow.replace(/\d+$/,''))
			}
			return
		}
		if(id=='D2on'){
			$(this).children('text').attr('fill',function(){var istog=$(this).attr('fill')=='white';
				//$('.zdog').children().attr('spinning',istog);
				$('#Legoon,#Roughon').toggle(istog);
				return istog?'yellow':'white'
			});

			if(L.drawShapeNow){
				mUp(e,1,L.drawShapeNow.replace(/\d+$/,''))
			}
			
			return
		}

		if(id=='Legoon'){
			$(this).children().attr('stroke',function(){var istog=$(this).attr('stroke')=='white';
				if($(this).is('circle')){
					$(this).attr('fill',istog?'yellow':'white')
				}
				if(istog){
					$('#Roughon').children('path').attr('stroke','white')
				}
				return istog?'yellow':'white'
			});

			if(L.drawShapeNow){
				mUp(e,1,L.drawShapeNow.replace(/\d+$/,''))
			}
			
			return
		}


		if(id=='LayerToggle'){
			$('#capsimg ~ *').toggle();
			return
		}

		if(id=='CanvasToggle'){
			var isv=$('#caps').toggle().is(':visible');
			$(this).children('path').attr('stroke',isv?'white':'yellow');
			return
		}

		L.drawShape = id;
		L.drawShapeNow = '';
		toggleSvg();

		drawEnd(e);

		//强制初始值val
		$('#strkW').val(isTxt ? 0 : 2);
		$('#strkR, #strkRy').val(isTxt ? 0 : 20);
		$('#svgLine, #strkDashOffset').val(0);
		$('#strkDash').val('');

		//$('#strkRy').val(20);


		//checkbox
		$('#OtherOpts :checkbox').prop('checked', false);
		$(zlr3('#', 'backvisi Equatorx Equatory', 'on', ',')).prop('checked', true);


		$('[name=MarginCopyOpt][value=copy]').prop('checked', true).parent().toggle(true);

		tileToolCap(id);

	


		$('#caps').css('cursor', 'crosshair')
//		$('#caps').css('cursor', 'default');

		$('#svgSel').toggle(!pa.is('#svgTool,.svgTool2,#svgTog'));

		$('#svgCssTransform,#svgRough').toggle(!pa.is('#svgTool,.svgTool2,#svgTog') || isCopy);
		$('#copyOpt').toggle(isCopy);





		var scr = /scr/.test(id), all = /all/.test(id), Cd = $('#Color details');

		if (/Pointer|Eraser|scr|Copy|Undo|Redo/.test(id)) {

			$('#svgSel > *,#SvgOpt').hide();
			$('#COLOR').toggle(scr || all || isCopy);
			$('#Color,#CssFilter').toggle(!isCopy);

			if (id == 'Pointer') {
				$('#caps').css('cursor', 'grab');
				$('#Caps .zdog').toggleClass('resize');
			}

			if(id=='Undo'){
				var t=getcap0(), nx=$('#capsdiv').nextAll(), nxl=nx.length;
				nx.remove();
				if($(L.cap1).length==nxl){
					$('#capsdiv').after(L.cap0||'');

				}else{
					$('#capsdiv').after(L.cap1||'');
				}
				//L.cap1=getcap0();
				
				

			}
			/*
			if(id=='Redo'){
				L.cap0=getcap0();
				$('#capsdiv').nextAll().remove();
				$('#capsdiv').after(L.cap1||'');
			}
			*/

			if(id=='Eraser' || id=='Copy'){
				$('#svgToolOpt').show()
			}

			if(/Pointer|Eraser|scr|Copy/.test(id)){

				$('#capsimg ~ *').css('cursor', id == 'Pointer' ? 'move' : (id == 'Copy' ? 'copy' : 'no-drop'));
			}

			if(/do/.test(id)){
				$('#Pointer').click()
			}



			if (scr || all) {
				var cvs = $('#caps')[0], hv = /[13]/.test(id);
				if (all) {
					cvs.width = $('body').width() + 20;//-5;
					cvs.height = $(window).height();//-5;
				}
				var w = cvs.width, h = cvs.height;
				$('#scrW').val(hv ? h : w);
				$('#scrH').val(hv ? w : h);

				if (all) {
					/*
					var dtl = Cd.eq(2), isGrad = dtl.find('.Grad').prop('checked');
				//	dtl.show().siblings().hide();
					if (isGrad) {
						dtl.find(':color').not('#SGC').each(function () {
							var c = RandomColor();
							$(this).val(c).attr('title', c + '\n' + hex2rgba(c, $(this).next().val()))
						});
					} else {
						var c = RandomColor();
						$('#SGC').val(c).attr('title', c + '\n' + hex2rgba(c, $('#OpaSGC').val()))
					}
*/
					scrn('eraser');
					caps.repaint();
					
				} else {
					scrn(id.substr(3).toLowerCase());
				}
				if (scr) { $('#Pointer').click() }
			}

			if(id=='noteEraser'){

				if(D2on){
					L.canvasCode='';
					L.legoCode='';
					L.roughCode='';
					caps.repaint(1);
				}

				if(D3on){
					$('#Caps > .zdog').remove()
				}

				if(Roughon){
					$('#Caps > .rough').remove()
				}	

				if(!D2on && !D3on || shifton){
					
					
					if(shifton){
						drawClr();
						$('.clrCanvas').click();
						L.cap0=getcap0();
					}else{
						$('#Caps > div').nextAll().not('.zdog').remove()

					}
				}


			}


		} else {
			var pg=(me.parent().attr('class')||'').replace(/\D/g,'');
			$('#svgPg'+pg).siblings().toggle(!isNarrow);

			if(isNarrow){
				$('.pg'+pg).children().not(me).toggle();


			}else{
				$('.pg'+pg).children().not(me).show();
			}
			

			$('#capsimg ~ *').css('cursor', 'auto');

			if (/Crop/.test(id)) {
				$('#svgSel > *,#SvgOpt,#COLOR').hide();
				$('#strkFill').val(0);
				if ($('#caps').width() + $('#tileTool').width() > $(window).width()) {
					$('#tileTool').fadeOut();
					CapsTip();
				}
				$('#caps').css('cursor', 'crosshair');

			} else {
				/*
				Cd.eq(2).hide();
				Cd.eq(0).show();
				Cd.eq(1).toggle(+$('#strkFill').val() > 0);
				*/
				$('#CssFilter').show();
				$('#Color').show();
			}
		}

		var c = '#css', C = '#Css';

		$(C + 'Filter img').click();
		$(C + 'Filter').removeAttr('open');
		if (!isCopy) {
			$('#flip0, .clip, .scale, .skew, .translate').click();
		}


		$(zlr(c, 'Perspec Rotate3d', ',')).val(0);
		$(zlr(c, 'Rotate3d Matrix3d', ',')).val('');
		$(c + 'PerspecOrig').val('50% 50%');
		$(c + 'TransOrig').val('50% 50% 0');
		$(zlr(c, 'TranStyle Matrix DropShadow Clip', ',')).prop('checked', false);
		$(c + 'BackVisi').prop('checked', true);

		$(zlr(c, 'TransOpt', ',')).removeClass('toggle');
		$(zlr(C, 'TransOpt Dropshadow Clip', ',')).hide();
		$(c + 'Matrix3D').hide().nextAll().show();

		$('#ToolOpt').children('path').attr('stroke',$('#svgToolOpt').is(':visible')?'yellow':'white');

	});

	$('#svgTog svg[id^=svgPg]').on('click', function () {
		var me = $(this), id = me.attr('id'), isNarrow=$('#tileToolCap').is('.Narrow');

		me.html(svgf.line(10,15,20,15,'yellow','yellow'));
		me.siblings().html(svgf.circle(15,15,5));

		var n = +id.replace('svgPg', ''), divSib = $('#svgTool').nextAll(), divs = divSib.not(':has(div)').add(divSib.find('div')), divi = divs.eq(n - 1);
		divi = divs.slice(6 * (n - 1), 6 * n);

		divs.not(divi).hide();
		divi.show();

		me.siblings().show();
		
	});
	$('#svgPg1').eq(0).click();

	toggleSvg();

	//$('[tip]').attr('title',function(){return gM($(this).attr('tip'))});

	$('#svgShape svg[id]').hover(function () {
		var me = $(this), id = this.id, h = gM('hotkey') + ' ', met = me.attr('tip'), meh = me.attr('hotkey'),
			t = met || meh ? gM(met || id) + (meh ? ' | ' + h + meh : '') : '';

		if (t) {
			$('#tileTool').attr('tip', t);
			//toolTip(t);
		}
	}, function () {
		var c = $('#caps'), w = c.width(), h = c.height(), wh = w + 'x' + h;
		$('#tileTool').attr('tip', wh + ' ' + gM('Hide') + ' | ' + gM('Hotkey') + ' Esc');
		$('#scrW').val(w);
		$('#scrH').val(h);
	});


/*

　　(1)touchstart				mousedown
　　(2)mouseover
　　(3)mousemove(一次)			mousemove
　　(4)mousedown
　　(5)mouseup					mouseup
　　(6)click
　　(7)touchend
*/


	$('#Caps').on('mousedown touchstart', 'svg, textarea, span[id]', function (e) {
		//console.log($(this).html());
		var me=$(this),pa=me.parent(), shifton=$('#SVGshift path').attr('stroke')=='yellow';
		mDn(e);

/*
		if(pa.is('#Caps') && shifton){
			e.preventDefault && e.preventDefault();
			e.returnValue=false;
			e.stopPropagation && e.stopPropagation();
			return false;

		}
*/

		
	}).on('mousemove touchmove', 'svg, textarea, span[id]', function (e) {mMv(e);
	/*
		e.preventDefault && e.preventDefault();
		e.returnValue=false;
		e.stopPropagation && e.stopPropagation();
		return false;
		*/
	}).on('mouseup touchend', 'svg, textarea, span[id]', function (e) {mUp(e);	
	/*
		e.preventDefault && e.preventDefault();
		e.returnValue=false;
		e.stopPropagation && e.stopPropagation();
		return false;
		*/
	}).on('dblclick','.capfromTextarea, #caps ~ textarea', function (e) {
		var me=$(this).filter('.capfromTextarea');
		if($('#Text text').attr('fill')=='yellow'){
			$('#Pointer').click();
			me.removeClass('resize');
		}else{
			$('#Text').click();
			me.addClass('resize')
		}

	}).on('mousewheel','#capsdiv~*', function (e) {
		var me=$(this),id=this.id, z=+(this.style.transform||'').replace(/.*rotateZ\(([-\d\.]+)deg\).*/,'$1')||0;
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                  (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox

		if(L.drawShapeNow==id){
			this.style.transform='rotateZ('+parseInt(z+delta)+'deg)';
			e.stopPropagation();
		}
		
	});




// || !(act=='DIV' && eos.id && eos.id=='oHTML')
	$('#caps,#oHTML').on('mousedown touchstart', function (e) {

		mDn(e);
		if(!/Pointer|noteEraser|allEraser/.test(L.drawShape)){

			if (e.cancelable) {
				// 判断默认行为是否已经被禁用
				if (!e.defaultPrevented) {
					e.preventDefault && e.preventDefault();
				}
			}
			
			e.returnValue=false;
			e.stopPropagation && e.stopPropagation();
			return false;


		}
		
	}).on('mousemove touchmove', function (e) {mMv(e);
		if(!/Pointer|noteEraser|allEraser/.test(L.drawShape)){
			e.preventDefault && e.preventDefault();
			e.returnValue=false;
			e.stopPropagation && e.stopPropagation();
			return false;
		}

		
	}).on('mouseup touchend', function (e) {mUp(e);
		if(!/Pointer|noteEraser|allEraser/.test(L.drawShape)){
			e.preventDefault && e.preventDefault();
			e.returnValue=false;
			e.stopPropagation && e.stopPropagation();
			return false;
		}

	});





	var t = zlr('#url', 'Img Cap', ',') + ',#Caps textarea, .imgurl';

	$('body').on('keydown', function (e) {
		var k = e.keyCode, act = document.activeElement, acti = act.tagName.toLowerCase(), 
			shft=e.shiftKey || $('#SVGshift path').attr('stroke')=='yellow', ctrl = e.ctrlKey, alt = e.altKey, isTxt = acti == 'textarea';

		if (ctrl) {

			drawEnd(e);

		}
		if (isTxt && ctrl) {

			if (k == 66) { $('#fontCSS .bold').click() }
			if (k == 73) { $('#fontCSS .italic').click() }

		}
		if (acti == 'input') {
			if (k == 13) {
				if ($(act).is('#tileRenm')) {
					$('#shotSave').click()
				}
			}
		}
		if (acti == 'body') {
			if (ctrl) {
				if (k == 67) { L.drawCopy = L.drawShapeNow }
				if (k == 86) { drawCopy() }
			} else {

				//if(k==72){api('ofhotkey')}
				if (k == 13) { drawEnd(e) }
				if (k == 27) {

					if ($('#svgs').length) {
						$('#SVGhide').click()

					} else {
						$('#tileTool').fadeToggle()
					}
					return false
				}


				if (k == 80) { $('#Pointer').click() }
				if (k == 46 || k == 68) {
					$('#' + (L.drawShapeNow || 'unknown')).remove();
					if (e.shiftKey) { drawClr() }
				}
				if (k == 37 || k == 39) {
					$('#cssX').val(max([+$('#cssX').val() - 38 + k, 0])).change();
				}
				if (k == 38 || k == 40) {
					$('#cssY').val(max([+$('#cssY').val() - 39 + k, 0])).change();
				}
				if (k == 65 || k == 76 || k == 78 || k == 82) {
					if (k == 65) { $('#Text').click() }
					if (k == 76) { $('#Line').click() }
					if (k == 78) { $('#ArectNote').click() }
					if (k == 82) { $('#ARect').click() }

				}
				if (k == 67) {
					$('#Crop').click();
					if ($('#caps').width() + $('#tileTool').width() > $(window).width()) {
						$('#tileTool').fadeOut();
						CapsTip();
					}
				}

				if (k == 85) { $('#Undo').click() }

				if (k == 86) { $('#LayerToggle').click() }
			}
		}
	}).on('dblclick', function (e) { drawEnd(e) }).on('keyup', '.soleTxt', function (e) {
		var me = $(this), v = me.val(), sz = +$('#fontSize').val();
		if (v) {
			if (this.scrollHeight - 4 > me.height()) {

				me.width(function (i, x) { return max([sz * max(Arrf(function (t) { return t.length }, v.split('\n'))), x, this.scrollWidth]) });
				me.height(function (i, x) { return max([sz * v.split('\n').length, x, this.scrollHeight]) });
			}
			if (this.scrollWidth - 4 > me.width()) {

			}
		} else {
			me.width(20).height(20);
		}

	}).on('change', ':range, #Color :color, select, #svgTexts', function () {
		cng_cap(this)

	}).on('change keyup mouseup', ':number:not(#jpgQ), #strkDash, #CssTransform :text, #font', function () {
		cng_cap(this)



	}).on('paste', '.imgurl,#Caps textarea', function (e) {
		//console.log(e);
		var ts = e.originalEvent.clipboardData.items, me = $(this), id = this.id, p = me.parent(), pp = p.parent(),

		cb = function () {
			scrn('eraser');
			loadCaps();
			caps.repaint(1);
		};
		if (ts.length) {
			for (var i = 0; i < ts.length; i++) {
				if (ts[i].kind == 'file') {
					pp.find(':file').val('');

					var blob = ts[i].getAsFile(), reader = new FileReader();
					//console.log(ts[i]);  DataTransferItem {type: "image/png", kind: "file"}
					reader.onload = function (event) {
						//console.log(event);
						var src = event.target.result; //webkitURL.createObjectURL(blob);


						var sne = picSrcNameExt(src), img = new Image();
						me.val(' ').css('background', 'url(' + src + ') bottom right/contain no-repeat')
							.attr({ 'data-name': 'clipboard', 'data-no': 0, 'data-size': 0, 'data-sz': 0, 'data-ext': 'other', 'data-bg': src, 'data-src': src });
						img.onload = function () {
							var w = this.width;
							var h = this.height;
							var s = w + '×' + h;
							$('.imgurl[data-bg="' + this.src + '"]').attr({ 'data-w': w, 'data-h': h, 'data-wxh': s });
							$(this).attr({ 'data-wxh': s, 'data-src': this.src });

						};
						img.src = src;



						cb();
					};
					reader.readAsDataURL(blob);
					break;
				}
			}
		}
	}).on('change keyup mouseup', '.imgurl,#Caps textarea', function (e) {//textbox
		var me = $(this), id = this.id, src = me.val(), src0 = me.attr('data-bg') || '', cnged = src0 != src && src != ' ', p = me.parent(), pp = p.parent(),
		cb = function () {
			scrn('eraser');
			loadCaps();
			caps.repaint(1);
		};

		imgPreRe.lastIndex = 0;
		if (imgPreRe.test(src) || src == '' || src) {
			p.find(':file').add(pp.find(':file')).val('');

			if (cnged) {
				if (src == '') {
					me.val('').css('background', 'none').removeAttr('data-bg data-src');
					//console.log('cap reload');
					cb();
				} else if (src.trim().indexOf('\n') < 0) {
					src = src.trim();

					var sne = picSrcNameExt(src), img = new Image();
					me.css('background', 'url(' + src + ') bottom right/contain no-repeat')
						.attr({ 'data-name': sne[1], 'data-no': 0, 'data-size': 0, 'data-sz': 0, 'data-ext': sne[2], 'data-bg': src, 'data-src': src });
					img.onload = function () {
						var w = this.width;
						var h = this.height;
						var s = w + '×' + h;
						$('.imgurl[data-bg="' + this.src + '"]').attr({ 'data-w': w, 'data-h': h, 'data-wxh': s });
						$(this).attr({ 'data-wxh': s, 'data-src': this.src });

						cb;
					};
					img.onerror = function () {
						me.val(src);
					}
					img.src = src;


					
				}

			}

		}
		
		e.stopPropagation();

	}).on('dragover', t, function (e) {
		e.stopPropagation(); e.preventDefault();
	}).on('dragenter', t, function (e) {
		e.stopPropagation(); e.preventDefault(); $(this).addClass('drop');
	}).on('dragleave', t, function (e) {
		e.stopPropagation(); e.preventDefault(); $(this).removeClass('drop');
	}).on('drop', t, function (e) {
		e.stopPropagation(); e.preventDefault(); $(this).removeClass('drop');
		var me = $(this), id = this.id, pp = me.parent().parent(), src = me.val();;
		//if (/url/.test(id)) { $('#' + id.replace('rl', 'p')).val('') }
		var f = e.originalEvent.dataTransfer.files[0];
		if (!f || f.type.indexOf('image') < 0) { return }
		//console.log(f); File {webkitRelativePath: "", lastModifiedDate: xxx, name: "VIP.png", type: "image/png", size: 10628}

		var reader = new FileReader();
		reader.onload = function (event) {
			var src = this.result;
			//console.log(this);
			me.val(' ').css('background', 'url(' + src + ') bottom right/contain no-repeat').attr({ 'data-bg': src, 'data-src': src });
			loadCaps();
		};
		reader.readAsDataURL(f);

	}).on('change', '#tileTool :color', function () {
		var me = $(this), v = me.val();
		me.attr('title', v + '\n' + hex2rgba(v, +me.next(':range').val()))

	}).on('keydown', function (e) {
		var k = e.keyCode, act = document.activeElement, acti = act.tagName.toLowerCase(), isTxt = acti == 'textarea', isBody = acti == 'body';

		if (e.ctrlKey) {
			if (isTxt) {
				if (k == 83) { $('#' + ($(act).attr('data-saveas') || '')).click(); return false }
				if (k == 69) { act.value = ''; return false }
			}

		}


	}).on('click', '#tileTool .sbsTbl td, #tileTool .sbsTbl .td', function (e) {
		sbsTbltd(this, e, 'TextBox');

	}).on('change', '.imgurlfile', function (e) {//#tileTool :file:not([webkitdirectory])
		var me = $(this), id = this.id || '', v = me.val(), p = me.parent(), uI = p.parent().find('.imgurl'),

		cb = function () {
			scrn('eraser');
			loadCaps();
			caps.repaint(1);
		};
//console.log(v, uI.length);
		if (v) {
			var files = this.files, fl = files.length;
			for (var i = 0; i < fl; i++) {
				var f = files[i], img = new Image(), s = f.size, ext = f.type.replace(/image[/]/, '').replace('x-icon', 'ico').replace('+xml', '');


				if (/^image[/]/.test(f.type)) {
					if (!s) { s = '?KB' } else {
						s = s / 1024;
						if (s >= 1024) { s = (s / 1024).toFixed(1) + 'MB' } else { s = s.toFixed(1) + 'KB' }
					}
					if (/svg/.test(f.type)) {
						var reader = new FileReader();
						reader.onload = function (event) {
							var src = this.result;
							uI.val(' ').css('background', 'url(' + src + ') bottom right/contain no-repeat')
								.attr({ 'data-name': f.name, 'data-no': 0, 'data-size': f.size, 'data-sz': s, 'data-ext': ext, 'data-bg': src, 'data-src': src });
							img.onload = function () {
								var w = this.width;
								var h = this.height;
								var s = w + '×' + h;
								$('.imgurl[data-bg="' + this.src + '"]').attr({ 'data-w': w, 'data-h': h, 'data-wxh': s });
								$(this).attr({ 'data-wxh': s, 'data-src': this.src });
								cb();
							};
							img.src = src;
							
						};
						reader.readAsDataURL(f);
					} else {
						var src = (URL || webkitURL).createObjectURL(f);
						//console.log(src);
						uI.val(' ').css('background', 'url(' + src + ') bottom right/contain no-repeat')
							.attr({ 'data-name': f.name, 'data-no': 0, 'data-size': f.size, 'data-sz': s, 'data-ext': ext, 'data-bg': src, 'data-src': src });
						img.onload = function () {
							var w = this.width;
							var h = this.height;
							var s = w + '×' + h;
							$('.imgurl[data-bg="' + this.src + '"]').attr({ 'data-w': w, 'data-h': h, 'data-wxh': s });
							$(this).attr({ 'data-wxh': s, 'data-src': this.src });
							cb();

						};
						img.src = src;

						
					}
				} else if (cap && $('#inFile').val() == 'capcanvasAPI') {
					//console.log(f);
					scrn('canvasAPI');

				}
			}

		} else {

			uI.val('').css('background', 'none').removeAttr('data-bg data-src');
			cb();
		}

		e.stopPropagation();
	});

	window.addEventListener('orientationchange', function() {  
		//console.log(window.innerWidth); 
		setTimeout(function() {  
			//console.log(window.innerWidth,innerHeight); 
			caps.ini(innerWidth,innerHeight);

			scrn('eraser');
			caps.repaint();


		}, 300);  
	}, false);

	$(document).on('click', 'legend,button,:button,:checkbox' +
		zlr(',#', 'Tiles W H S E cssTransOpt cssClip cssCut') +','+

		zlr3('#', 'fontCSS', 'span').replace(/span/g, ' $&,') +
		'#shape img,#COLOR input:text,#tileTool :radio', function () {
			clk_popout(this)

		});


	//toggleColor();














	if(hasdoodle){
		setTimeout(function(){
			$('#Caps,#caps').show();
		},1000);
		if(isdoodle){
			$('#tileTool').show();
		}
	}

	
});





function cng_cap(obj) {
	var me = $(obj), id = me.attr('id'), v = me.val();
//console.log(id);
	if (/^css/.test(id) || id == 'capType' || id == 'svgTexts' || id == 'svgText') { cng_popout(obj); return }
	if (/scr[WH]$/.test(id)) {
		var cvs = $('#caps')[0], w = +$('#scrW').val(), h = +$('#scrH').val();


		if (/allEraser/.test(L.drawShape)) {
			cvs.width = w;
			cvs.height = h;

			scrn('eraser');
			caps.repaint();
			
			
		}
		if (/Crop/.test(L.drawShape)) {
			scrn('Crop', ltwh([0, 0, w, h]))
		}
	}

	if (id == 'copyDir') {
		$('#copyTileOn').toggle(v.length > 1)
	}

	if( id == 'font' || id =='fontSize'){
		L[this.id] = this.value;
		changeTextCSS();
	}


	var shpN = L.drawShapeNow || 'unknown', isTxt = /Text/.test(shpN), sp = $('#' + shpN);

	if (id == 'svgLine') {
		v = +v;
		$('#strkDash').val(['', '10,5', '15,5,4,5'][v]);
		$('#Dash').toggle(v > 0);

		sp.find('[stroke-dasharray]').attr('stroke-dasharray', $('#strkDash').val());

	}
	if (/svgArw/.test(id)) {
		toggleSvg();
		var mk = /E/.test(id) ? 'end' : 'start';
		$('.svgLine svg' + (shpN ? ', #' + shpN + '[id*=ine]' : '')).children('line, path').attr('marker-' + mk, function () {
			return 'url(#' +
				$(this).prevAll('defs').children('[id^=Arw' + id.substr(-1) + ']').eq(+v).attr('id') + ')'
		});
	}

	if(/ContainerW/.test(id)){
		sp.width(v)
	}
	if(/ContainerH/.test(id)){
		sp.height(v)
	}


	if (/^strk/.test(id)) {
		id = id.substr(4);
		if (id == 'Fill') {
		//	$('#Color details:eq(1)').toggle(v != '0');
		//	$('#Color details:lt(2)').find('.Grad').prop('checked', false).parent().nextAll().hide();
			toggleColorShpN();
		}

		if (id == 'Dash') { sp.find('[stroke-dasharray]').attr('stroke-dasharray', v) }
		if (id == 'DashOffset') { sp.find('[stroke-dashoffset]').attr('stroke-dashoffset', v) }
		if (id == 'W') { sp.find('[stroke-width]').attr('stroke-width', v); if (isTxt) { sp.css('border-width', v + 'px') } }
		if (id == 'R') { sp.find('[rx]').attr({ rx: v }); if (isTxt) { sp.css('border-radius', v + 'px') } }
		if (id == 'Ry') { sp.find('[ry]').attr({ ry: v }); }


		if (id == 'LnJoin') { sp.find('[stroke-linejoin]').attr('stroke-linejoin', v) }
		if (id == 'LnCap') { sp.find('[stroke-linecap]').attr('stroke-linecap', v) }
	}

	if (me.is('#Color :range')) {
		me.next('.rngv').text(v);

	}

	if (/(Opa)?[FBS]GC/.test(id)) {
		if (me.parent().next().find('.Grad').prop('checked')) { return }

		if (/Opa[FB]GC/.test(id)) {

			toggleColorShpN(+(id == 'OpaBGC'), 1);
		} else {
			toggleColor();
		}



		return
	}



	if (me.is('.GradStops')) {
		var fb = me.parent().nextAll().last().attr('id')[0];
		$('#' + fb + 'gcs').toggle(+v > 2);

		var stops = $('#' + fb + 'gcs div'), sl = stops.length;
		if (sl + 2 == +v) {

		} else {
			if (sl + 2 < +v) {
				var ranc = RandomColor(+v - 2 - sl);
				$('#' + fb + 'gcs').append(concat('<div>'+num('20" class="Gradstop',1,99)+'% <input type=color value="' +
					ranc, '" title="', ranc, '\n' + Arrf(hex2rgba, ranc) + '" />'+rng('1 class=Opa step=".1',0,1) +
					SC + 'rngv title="' + gM('opa') + '">' + 1 + sc + dc).join(''));
			} else if (sl + 2 > +v) {
				stops.slice(+v - 2, sl).remove();
			}
			var Gs = $('#' + fb + 'gcs .Gradstop'), Gsl = Gs.length, x = Math.ceil(100 / (Gsl + 2 - 1));
			$('#' + fb + 'gcs .Gradstop').each(function (i) {
				$(this).val(min([100, (i + 1) * x]))
			});

		}

	}


	if (me.parents('#Color').length) {
		toggleColor()
	}

	if (id == 'tileFontCenter') { changeTextCSS() }

	if (id == 'copyNum') {




	}


	if (me.is('select')) {
		$('body')[0].tabIndex = 0;
		$('body').focus();
	}
}



function clk_popout(obj) {
	var me = $(obj), id = me.attr('id') || '', pa = me.parent(), pid = pa.attr('id'), c = me.attr('class') || '';

	var shpN = L.drawShapeNow || 'unknown', isTxt = /Text/.test(shpN);


	//console.log(id, pid);
	//non id
	if (pid == 'fontCSS') {
		var i = me.index(), txta = $('textarea#' + shpN);

		txta.toggleClass(ZLR('bold italic underline overline through')[i]);

		me.toggleClass('toggle');
		return;
	}

	if (me.is('legend')) {
		me.siblings().toggle();
	}


	//id



	if (id == 'color') { me.siblings().toggle() }





	if (/color\d/.test(id)) {
		var colors = $('#FGC1,#FGC,#FGC2,#BGC1,#BGC,#BGC2,#SGC,#SGC1,#SGC2');	//$('#Color input[type=color]')
		if (id == 'color5') {
			$('#Color :color').each(function () { var c = RandomColor(); $(this).val(c).attr('title', c + '\n' + hex2rgba(c, +$(this).next().val())) });

		} else {
			colors.each(function () {
				var i = this.id, c = '#' + Colors.split(';')[+id.replace('color', '')].split(',')[/\d/.test(i) ? (+i.substr(-1)) * 2 - 1 : (/F/.test(i) ? 0 : 2)];
				$(this).val(c).attr('title', c + '\n' + hex2rgba(c, +$(this).next().val()))
			});
		}

		toggleColor();

	}


	if (id == 'svgTextAdd') {
		textareaAdd($('#svgTextN').val(), '#textTXT>.editorText');
	}


	if (/^css/.test(id)) {
		id = id.substr(3);
		var chk = me.prop('checked'), sp = $('#' + shpN), C = '#Css', c = '#css';



		if (id == 'Matrix') {
			$(c + id + '3D').toggle(chk).nextAll().toggle(!chk);
		}

		if (id == 'Clip') {

			$(C + id + ',#WH1').toggle(chk);
			if (chk) {
				cng_popout($(c + id + 'T')[0]);
			} else {
				sp.attr('style', function (i, v) { return v.replace(/clip:[^;]+/, '') });

			}
		}

		if (id == 'Cut') {
			$(C + id).toggle(chk);
		}

		if (id == 'TranStyle') { sp.css('-webkit-transform-style', chk ? 'preserve-3d' : 'flat') }
		if (id == 'BackVisi') { sp.css('-webkit-backface-visibility', chk ? 'visible' : 'hidden') }
		if (id == 'TransOpt') { me.toggleClass('toggle'); $(C + id).toggle() }

		if (id == 'DropShadow') {
			$(C + 'Dropshadow, #WH4').toggle(chk);
			if (chk) {
				cng_popout($(c + id + 'X')[0]);
			} else {
				sp.css('-webkit-filter', function (i, v) {
					return v.replace(/rgba?\([^\)]+\)/i, '').replace(/drop-shadow\([^\)]+\)/, '');
				}).filter('textarea').css('box-shadow', 'none');

			}
		}
	}


	if (id == 'GOfx') {
		var v = $('#fxTxt').val().trim();
		if (v) {
			var vA = v.split('\n'), cvs = $('#caps')[0], ct = cvs.getContext('2d');
			for (var i = 0, n = vA.length; i < n; i++) {
				var vi = vA[i].split(';'), B = vi[0], OXY = vi[1].split(/[, ]/g), C = vi[2] || RandomColor(), Opa = +(vi[3] || 255),
					tlx = +OXY[0] + (+OXY[2]), tly = +OXY[1] + (+OXY[4]), xl = +OXY[3] - (+OXY[2]), yl = +OXY[5] - (+OXY[4]);
				C = /,/.test(C) ? eval('[' + C + ']').concat(Opa) : hex2rgba(C, Opa, 1);
				//console.log(tlx,tly, xl, yl);
				var D = ct.getImageData(tlx, tly, xl, yl), Dd = D.data, Dl = Dd.length;
				for (var j = 0; j < Dl; j += 4) {
					var Dj = j / 4, x = Dj % xl + (+OXY[2]), y = +OXY[5] - Math.floor(Dj / xl);
					//console.log(B,x,y);
					if (eval(B)) {
						//	console.log(B,x,y);
						//	break;
						Dd[j + 0] = C[0];
						Dd[j + 1] = C[1];
						Dd[j + 2] = C[2];
						Dd[j + 3] = C[3];
					}
				}
				ct.putImageData(D, tlx, tly);
				ct.save();
			}
		}
	}
	if (id == 'GOcapctx') {
		var v = $('#capctxTxt').val().trim();
		if (v) {
			var vA = v.split('\n'), cvs = $('#caps')[0], ct = cvs.getContext('2d');
			eval(v);
		}
	}
	if (id == 'TextBoxGo' || id == 'TextBoxGo2') {
		var iT = $('#TextBoxType').val(), it = iT.toLowerCase(),v = $('#TextBox').val().trim(),
			shpNid = L.drawShapeNow || 'unknown', shpN = $('#' + shpNid), frTextarea, 
			//A = [100, 200, 300, 200];
			A = [$('#cssX').val(),$('#cssY').val(),$('#ContainerW').val(),$('#ContainerH').val()],
			shifton=$('#SVGshift path').attr('stroke')=='yellow';

		if(!shpN.length){
			shpNid='unknown';
		}

		if (!v && /Text/.test(shpNid)) {
			v = shpN.val();
			frTextarea = 1;
			A = [shpN.css('left').replace(/\D/g, ''), shpN.css('top').replace(/\D/g, ''), 100, 100];
		}
		if (!v && /unknown/.test(shpNid)) {// allEraser
			
			
		}

		caps.repaint();

		if (v) {
			
			if (L.drawShape == 'Pointer' && /Text/.test(shpNid)) {
				frTextarea = 1;	
			}

			$('#Caps').append(fromTextarea(iT,v,A));
			var $e=$('.cap'+iT).last().attr('data-code',escape(v)), elem = $e[0], eid=elem.id;

			if(iT=='LaTeX'){
				katex.render(kx(sub2n(v, 1)), elem, {
					throwOnError: false,
					displayMode: true
				});
			}
			if(iT=='HTML'){

				$e.html(shifton && v[0]!='<'?eval(v):v)
			}
			if(iT=='Markdown'){
				$e.html(md2html(v))
			}
			if(iT=='SVG'){
				$e.html(/<svg/.test(v)?v:'<svg viewBox="0 0 200 200" width='+A[2]+' height='+A[3]+'>'+v+'</svg>')
			}
			if(iT=='Echarts'){
				Graphic.drawSVG(it,v,eid);
			}
			if(iT=='Canvas'){
				$e.html('<canvas width='+A[2]+' height='+A[3]+'></canvas>');

				var C=new ctt($e.children(),+A[2],+A[3]),c=C.ctx;
				eval(v);

			}

			if (id == 'TextBoxGo' && frTextarea) {
				shpN.remove();
			}

			L.drawShapeNow = eid;

			if (L.drawShape == 'Text'){
				$('#Pointer').click();
			}
		}
	}



}


function flt(o, strokeORfill) { var x = ['stroke', 'fill'][strokeORfill || 0]; return o.filter('[' + x + ']').not('[' + x + '=none],[' + x + '^=url]') }

function toggleColor() {
	var arr = ZLR('FGC FGC1 FGC2 BGC BGC1 BGC2');
	for (var i = arr.length - 1; i > -1; i--) {
		L[arr[i]] = $('#' + arr[i]).val() || L[arr[i]];
	}


	if (L.drawShape == 'allEraser') {

		scrn('eraser');
		caps.repaint();
		reCanvasCode();
		return
	}
	refreshFilter();

}
function hoverIt(t) {
	$(t).css('background-image', bgfrom + L.BGC1 + '),color-stop(.5,' + L.BGC + '), to(' + L.BGC2 + '))');
}
function hoverItOff(t, from, to) {
	$(t).css('background-image', bgfrom + L['BGC' + from] + '), to(' + L['BGC' + to] + '))');
}



function cng_popout(obj) {
	var me = $(obj), id = me.attr('id') || '', v = me.val(), pa = me.parent(), pid = pa.attr('id'), c = me.attr('class') || '';

	if (/^capType(Tile)?$/.test(id)) { me.next().toggle(v == 'jpeg'); L[id] = v }



	if (id == 'tileFontCenter') { changeTextCSS() }



	if (id == 'svgTexts') {
		L[id] = v;
		$('#svgTextM').html(Options(v.split('')).join(''));
	}
	if (id == 'svgTextN') { $('#svgTextAdd').click() }
	if (id == 'svgText') {
		var sn = $('#' + id + 'N'), sd = $('#' + id + 'Details');
		$('#' + id + 'M').toggle(v == '0');
		if (v == '0') { sn.add(sd.parent()).hide() } else {

			sn.html('');

			v = +v;
			var sArr = ['0,0', '10102,30;9451,20;12881,15;12977,15;37,1;8240,2;9450,1;48,10;65296,10;9312,60;8304,1;185,1;178,2;8308,6;8320,10;188,3;8531,13',
				'12832,10;12928,10;12992,12;13280,31;13144,25;12690,14;12842,26;12938,39',
				'8544,16;8560,16;913,25;945,25',
				'9372,78;65,26;97,26;65313,26;65345,26;170,1;8319,1;8336,5',
				'161,30;8448,80;8352,26;9216,37;12880,1;12927,1;13004,4;13169,111;13311,1;65504,15',
				'33,15;58,7;91,6;123,4;10629,2;12289,32;12317,4;65040,10;65072,1;65104,8;65119,2;65128,4;65281,15;65306,7;65339,6;65371,11',
				'8592,112;9166,1;9735,2;10132,43;10226,14;10496,124;11012,10;65513,4',
				'161,30;8531,13;8208,24;8240,26;8273,1;8286,1;8314,6;8330,11;8704,242;8960,123;9150,17;9178,2;10620,388;11381,2',
				'8413,4;9472,150;9632,10;9642,8;9650,10;9660,10;9670,10;9680,10;9690,8;9698,10;9708,4;12272,12',
				'8576,5;9280,11;9728,112;9985,103;21325,1;21328,1;22221,1'
			];
			var s = [], s2 = [], tArr = sArr[v].split(';');
			for (var i = 0; i < tArr.length; i++) {

				var arr = tArr[i].split(','), arr0 = +arr[0], arrN = +arr[1];

				for (k = 0; k < arrN; k++) {
					var t = arr0 + k;
					s.push(t);
					if (v == 1 && (arrN >= 10 && arrN % 10 == 0 && (k + 1) % 10 == 0 || arr0 == 12881 && k == 9 || arr0 == 12977 && (k == 4 || k == 14)) ||
						v > 1 && k == arrN - 1 ||
						v == 3 && (k + 1) % 10 == 0 ||
						v == 4 && (k + 1) % 26 == 0
					) {
						s.push(13);
					}
					s2.push(Options(String.fromCharCode(t)));
				}

			}

			s = fCC(s);
			if (v == 4) {
				var f2 = function (t) {
					var s1 = '', s2 = '';
					for (var j = 0; j < 2; j++) {
						var Ltn = Latin(t, !j).join('');
						s1 += Ltn + '\n';
						s2 += Options(Ltn.split('')).join('');
					}
					return [s1, s2]
				}
				var Ltn = Arrf(f2, entity);
				s += Arri(Ltn, 0).join('');
				s2 = s2.concat(Arri(Ltn, 1));
			}

			sd.val(s);
			sn.html(s2.join(''));
			sn.add(sd.parent()).show();
		}
	}








	if (id == 'inFile') {

		if (v == 'capcanvasAPI') {

		} else {

		}

	}

	if (/^css/.test(id)) {
		id = id.substr(3);
		var C = '#Css', c = '#css', cS = c + 'Scale', cC = c + 'Clip', cK = c + 'Skew', cF = c + 'Fixed';
		var shpN = L.drawShapeNow || 'unknown', isTxt = /Text/.test(shpN), sp = $('#' + shpN);


		var pid = (me.parent().attr('id')||me.parent().parent().attr('id')||'').replace(/Css./,function(x){x.substr(-1).toLowerCase()});



		if (me.parents(C + 'Filter').length) {
			var v0, dsv;
			sp.css('-webkit-filter', function (i, s) {
				var v1 = '';
				pid = pid.replace('bright', 'brightness').replace('opa', 'opacity').replace('R', '-r').replace('S', '-s');
				v0 = s.replace('none', '');
				if (/-s/.test(pid)) {
					var ds = c + 'DropShadow';
					$('#WH4').attr('data-shadow', '0,0,0');
					if ($(ds).prop('checked') && $(C + 'Dropshadow > input').filter(function () { return $(this).val() != '0' }).length) {
						var XYBC = [$(ds + 'X').val(), $(ds + 'Y').val(), $(ds + 'Blur').val(), hex2rgba($(ds + 'Color').val(), $(ds + 'Opac').val())];
						v1 = XYBC.join('px ');
						dsv = v1;
						v0 = v0.replace(/rgba?\([^\)]+\)/i, '');
						$('#WH4').attr('data-shadow', XYBC.slice(0, 3).join(','));
					}
					$(ds + 'Opac').next().text($(ds + 'Opac').val())
				} else {
					if (me.attr('value') != v) {
						v1 = v + (me.attr('title') || '');
					}
					me.next().text(v);
				}
				var reg = new RegExp(pid + '\\([^\\)]+\\)', 'gi');
				if (v1) {
					v1 = pid + '(' + v1 + ')';
					if (v0.indexOf(pid) < 0) {
						return (v0 + ' ' + v1).trim();
					} else {
						return v0.replace(reg, v1);
					}
				} else {
					return v0.replace(reg, '') || 'none'
				}
			}).filter('textarea').css('box-shadow', dsv);

		} else {
			var tf = '-webkit-transform', pp = '-webkit-perspective';

			if (/^[XY]$/.test(id)) { sp.css(id == 'X' ? 'left' : 'top', v + 'px') }
			if (id == 'Z') { sp.css('z-index', v) }

			if (id == 'Perspec') { sp.css(pp, v) }
			if (/Orig/.test(id)) {//sp.css((/P/.test(id)?pp:tf)+'-origin',v)
				sp.css((/P/.test(id) ? pp : tf).replace(/.+-/, '') + '-origin', v)
				/*
					sp.css((/P/.test(id)?pp:tf)+'-origin-x',v.split(' ')[0]);
					sp.css((/P/.test(id)?pp:tf)+'-origin-y',v.split(' ')[1]||'center');
					sp.css((/P/.test(id)?pp:tf)+'-origin-z',v.split(' ')[2]||0);
				*/
			}


			if (me.parent(C + 'Clip').length) {
				var cT = Number($(cC + 'T').val()), cR = Number($(cC + 'R').val()), cB = Number($(cC + 'B').val()), cL = Number($(cC + 'L').val());

				sp.css('clip', 'rect(' + [cT, cR, cB, cL].join('px,') + 'px)');

			} else if (me.parents(C + 'Transform').length) {
				var v1 = '';

				if (id == 'Matrix3d') {
					var mal = v.split(',').length;
					if (mal > 5) { v1 = 'matrix' + (mal < 16 ? '' : '3d') + '(' + v + ')' }
				} else {
					var cR = c + 'Rotate', r = '#rotate', f = '#flip', ro = $('input[name=rotate]:checked'), rov = (ro.val() || '').substr(9), imgs = $('#list img, #origin img');
					$(C + 'Rotate6 img').removeClass('toggle');
					imgs.removeClass('flipx flipy rotate1 rotate2 rotate3');

					if (rov == '3d') {
						v1 = $(cR + rov).val();
						if (v1) { v1 = 'rotate3d(' + v1 + ')' }
					} else {

						var vArr = [], n0 = 0;
						$('#CssRotate3 :number').each(function () {
							var v = $(this).val();
							if (v != '0') { vArr.push('rotate' + this.id.substr(-1) + '(' + v + 'deg)') } else { n0 += 1 }
						});

						v1 = vArr.join(' ');

						if (n0 > 2) {
							$(f + '0').addClass('toggle');

						} else if (n0 > 1) {
							var vX = $(cR + 'X').val(), vY = $(cR + 'Y').val(), vZ = $(cR + 'Z').val(), vv;
							if (vX == '180' || vY == '180') {
								vv = vX == '180' ? 'x' : 'y';
								$(f + vv).addClass('toggle');
								imgs.addClass((f + vv).substr(1));
							}
							vZ = Number(vZ);
							if (vZ % 90 == 0 && vZ != 0) {
								vZ = vZ / 90;
								if (vZ == -1) { vZ = 3 }
								$('#WH3').attr('data-rotate', vZ);
								$(r + vZ).addClass('toggle');
								imgs.addClass((r + vZ).substr(1));
								$('#WH3').attr('title', gM('rotate' + vZ) + '➜ ');
							}
						}
					}

					if ($('#CssTranslate :number').filter(function () { return $(this).val() != '0' }).length) {
						v1 += ' translate3d(' + $(c + 'TranslateX').val() + 'px,' + $(c + 'TranslateY').val() + 'px,' + $(c + 'TranslateZ').val() + 'px)'
					}

					if ($('#CssSkew :number').filter(function () { return $(this).val() != '0' }).length) {
						v1 += ' skew(' + $(cK + 'X').val() + 'deg,' + $(cK + 'Y').val() + 'deg)'
					}

					if (/Fixed|Scale/.test(id)) {
						id = id.substr(5);
						var pr = me.prev();
						var fw = $('#fW').is('.bold'), fh = $('#fH').is('.bold'), fwh = $('#fWH').is('.bold'), cW = $(cF + 'W'), cH = $(cF + 'H'), cWH = $(cF + 'WH'), cX = $(cS + 'X'), cY = $(cS + 'Y'),
							wh = ($('#editImg').attr('data-wxh') || 'x').split('x'), w = +wh[0], h = +wh[1], v = +me.val();
						if (pr.is('.bold') || /[XY]/.test(id)) {
							if (id == 'W') {
								if (fh) {
									cWH.val(fixed4((+cW.val()) / (+cH.val())));
								}
								if (fwh) {
									cH.val(fixed4(v / (+cWH.val())));
									cY.val(fixed4(v / (+cWH.val()) / h));
								}
								cX.val(fixed4(v / w));
							}
							if (id == 'H') {
								if (fw) {
									cWH.val(fixed4((+cW.val()) / (+cH.val())));
								}
								if (fwh) {
									cW.val(fixed4(v * (+cWH.val())));
									cX.val(fixed4(v * (+cWH.val()) / w));
								}
								cY.val(fixed4(v / h));
							}
							if (id == 'WH') {
								if (fw) {
									cH.val(fixed4((+cW.val()) / v));
									cY.val(fixed4((+cW.val()) / v / h));
								} else if (fh) {
									cW.val(fixed4(v * (+cH.val())));
									cX.val(fixed4(v * (+cH.val()) / w));
								} else {
									cY.val(fixed4((+cW.val()) / v / h));
								}
							}
							if (id == 'X') {
								cW.val(fixed4(v * w)).attr('disabled', true).prev().removeClass('bold');
								if (fwh) {
									cH.val(fixed4(v * w / (+cWH.val())));
									cY.val(fixed4(v * w / (+cWH.val()) / h));
								} else {
									cWH.val(fixed4(v * w / (+cH.val())));
								}
							}
							if (id == 'Y') {
								cH.val(fixed4(v * h)).attr('disabled', true).prev().removeClass('bold');
								if (fwh) {
									cW.val(fixed4(v * h * (+cWH.val())));
									cX.val(fixed4(v * h * (+cWH.val()) / w));
								} else {
									cWH.val(fixed4((+cW.val()) / v / h));
								}

							}
							if (/[XY]/.test(id) && +cX.val() == 1 && +cY.val() == 1) {
								cW.val(w);
								cH.val(h);
								cWH.val(fixed4(w / h));
								$(cF + ' .bold').removeClass('bold');
								$(cF + ' input').attr('disabled', true)

							}

						}

					}
					if ($('#CssScale :number').filter(function () { return $(this).val() != '1' }).length) {
						var SX = Number($(cS + 'X').val()), SY = Number($(cS + 'Y').val()), SXY = [SX, SY].join(',');
						v1 += ' scale3d(' + SXY + ',' + $(cS + 'Z').val() + ')';
						$('#WH2').attr('data-scale', SXY);
					}

				}
				sp.css(tf, v1.trim() || 'none');
			}

		}


	}

	if (me.is('select, :range, :checkbox')) {
		bodyFocus()
	}

}


function errPath(t) {
	return (t||'').replace(/NaN/g,0).replace(/^.*M *[LZ].+$/i,'').replace(/.+[ML] *z*$/i,'')
}

function getcap0(){
	var t='';
	$('#capsdiv').nextAll().each(function(){
		var me=$(this);
		if(me.is('textarea')){
			me.text(me.val());
		}
		t+=this.outerHTML;
	});
	return t
}


function loadCaps(){
	if(!$('#bgimgOn').prop('checked')){
		return
	}
$('span[for=bgimgOn] .multi').each(function(){


	var iu=$(this).find('.imgurl'), pwh=$(this).find('.poswh'),pwh0=pwh.eq(0).val().split(','),pwh1=pwh.eq(1).val().split(','),
		bg=iu.attr('data-bg'), infile='capscr', ext,
		cvs=$('#caps')[0], capctx=cvs.getContext('2d'), img, 
		w=+iu.attr('data-w')||0, h=+iu.attr('data-h')||0;
	if(!bg){
		if(/capscr/.test(infile)){scrn('eraser')}
		return;
	}

	if(bg.substr(0,11)=='data:image/'){
		ext=bg.replace(/[;,].*/,'').split('/')[1].toLowerCase().replace('x-icon','ico').replace('+xml','');
		if(ext=='svg'){
			bg=Base64.decode(bg.replace("data:image/svg+xml;base64,",''));
			if(bg.indexOf('desc name="zzllrr Imager Geek"')>0){
				var tArr=bg.split('<foreignObject x='), Scr=/<image x=/.test(tArr[0]), Note=tArr.length==2;
				if(!Note && !Scr){return}
				if(Scr && infile!='capnote'){
					var imgs=tArr[0].split('" xlink:href="'), wh=imgs[0].split('" height="');
					h=+wh[1];
					w=+wh[0].split(' width="')[1];
					img=imgs[1].split('"></image>')[0];
				}
				if(Note && infile!='capscr'){
					tArr[1]=tArr[1].split('</body')[0].split('zig()">')[1];
					var Txt=/<textarea id=/.test(tArr[1]);
					if(Txt){
						var txts=tArr[0].split('".split("Text"),B="');
						var A=txts[0].split('var A="')[1].split('Text'), B=txts[1].split('"')[0].split(',');
					}
					var last=$('#Caps').children().last(), tim=Time.now5();
					last.after(tArr[1]);
					if(Txt){
						for(var i=0;i<A.length;i++){
							last.nextAll('#Text'+A[i]).val(unescape(B[i]));
						}
					}
					last.nextAll().css({'z-index':function(i,v){return +v+$(this).index()*100}}).find('[id]').add(last.nextAll()).attr('id',function(){return this.id+tim});
				}

			}else{
				if(infile=='capscr'){
					img=iu.attr('data-bg');
				}else{
					bg=bg.substr(bg.indexOf('<svg')-4);
					bg=bg.substr(0,bg.lastIndexOf('</svg')+6);
					bg=bg.replace(/<title>.*<[/]title>/g,'').replace(/<desc>.*<[/]desc>/g,'');
					var last=$('#Caps').children().last(), tim=Time.now5();
					last.after('<svg id=SVG'+tim+'>'+bg+'</svg>');
					last.next().css({'z-index':$('#Caps').children('svg, textarea, span').length+2001,position:'absolute',left:0,top:0})
				}
			}
		}else{
			img=bg;
		}
	}else{
		img=bg;
	}
//console.log(img,iu[0].outerHTML);
	if(img){
		var Img=new Image();
		Img.onload=function(){
			if(infile){
				/*
				cvs.width=this.width;
				cvs.height=this.height;
				*/

//console.log(this,pwh0,pwh1,w,h);
				var sx=+pwh0[0]||0, sy=+pwh0[1]||0, sw=+pwh0[2]||w, sh=+pwh0[3]||h, x=+pwh1[0]||0, y=+pwh1[1]||0, w1=+pwh1[2]||sw||w, h1=+pwh1[3]||sh||h;
				capctx.drawImage(this,sx,sy,sw,sh,x,y,w1,h1);

				//capctx.drawImage(this,0,0);
				/*
				$('#svgShape svg[id]').eq(0).mouseout();
				$('#tileTool').show('fast',function(){
					if(this.width+$('#tileTool').width()>$(window).width()){CapsTip()}
				});
				*/
			}
		}
		Img.src=img;
	}
});
}

function randomCanvas(w,h,x,y){
	var c=(new ctt('#caps')).ctx, d=c.createImageData(w,h);
	for(var i=0;i<h;i++){
		for(var j=0;j<w;j++){
			var ij=(i*w+j)*4;
			//console.log(ij);
			d.data[ij+0]=Random(256)-1;
			d.data[ij+1]=Random(256)-1;
			d.data[ij+2]=Random(256)-1;
			d.data[ij+3]=Random(256)-1;
		}
	}
	//console.log(d.data);
	c.putImageData(d,x||0,y||0);
}