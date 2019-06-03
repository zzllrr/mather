/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

$(function(){


	$('#go').on('click',function(){
		var tool=$('[name=tool]:checked').val(), sbj0v=+$('#subject0').val(), sbj1v=+$('#subject1').val(), i0=$('#input0'),i1=$('#input1'),i0v=i0.val().trim(),i1v=i1.val().trim();
		
		$('#svgs.toggle').click();
		if(tool=='solve'){
			oH.empty();
			solve[sbj1v||sbj0v]();
			
			setTimeout(function(){
				oH.find('.oLaTeX').eq(0).click();
			},300);
		}
		if(tool=='graphic'){
			oH.empty();
			var dmid='outPlot'+(new Date()).getTime()+(Math.random()+'').substr(2), gs=$('#graphicGround .task.seled');
			if(gs.length<1){
				gs=$('#graphicGround .level.seled').last();
			}
			if(i0v && gs.length){
				
			
			
				gs.each(function(){
					Graphic.drawSVG(furi($(this))[0].join('/'),i0v,'oHTML');
				});

				/*
				do{
					$('#oHTML text').filter(function(){return /\$.+\$/.test($(this).text())}).each(function(){
						var t=$(this).text();
						graphic.drawHTMLinSVG('latex',kx(t.replace(/\$.+\$)\$/g,'$1')),'',this);
					});
				}while($('#oHTML text').filter(function(){return /\$.+\$/.test($(this).text())}).length)
				
				
				
				oH.children().children('svg').each(function(){
					var zi=[],Z,me=$(this);
					$('#Caps').children('svg,textarea,span').each(function(){zi.push(+$(this).css('z-index')||2000)});
					Z=max(zi)+1;
					me.clone().appendTo('#Caps');
					$('#Caps').find('#'+this.id).attr({'id':'graphic'+Time.now5()+(Math.random()+'').substr(2)})
					.css({'position':'absolute', 'z-index':Z,'top':$('#Caps').position().top,'height':me.height()})
					//L.drawShapeNow='';
				});
				
				
				$('#Pointer').click();
				//oH.empty();
				toolTip(gM('copied2CanvasTip'));
				*/
			}
			
		}
		if(tool=='show'){
			var subtool=$('#showGround .ground0 .level_last.seled').attr('data-i');
			if(subtool=='Voice'){
				$('#zRAudioPlay2').click();
				
			}
			if(subtool=='Video'){
				$('#zRMediaPlay2').click();
				
			}
		}

			/*
				import(`./${v}/${mei}.js`)
				  .then(module => {
				    module.go();
				  })
				  */
		setTimeout(function(){
			dayOrNight();
		},200);
		setTimeout(function(){
			Scroll('scrollB');
			$('#zMatherHide').click();
		},400);
	});

});

