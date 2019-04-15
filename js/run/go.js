/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

$(function(){


	$('#go').on('click',function(){
		var tool=$('[name=tool]:checked').val(), sbj0v=+$('#subject0').val(), sbj1v=+$('#subject1').val(), i0=$('#input0'),i1=$('#input1'),i0v=i0.val().trim(),i1v=i1.val().trim();
		$('#oHClear').show();

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
			if(i0v && gs.length){
				gs.each(function(){
					Graphic.drawSVG($(this).attr('data-tool'),i0v,'oHTML');
				});

				/*
				do{
					$('#oHTML text').filter(function(){return /\$.+\$/.test($(this).text())}).each(function(){
						var t=$(this).text();
						graphic.drawHTMLinSVG('latex',kx(t.replace(/\$.+\$)\$/g,'$1')),'',this);
					});
				}while($('#oHTML text').filter(function(){return /\$.+\$/.test($(this).text())}).length)
				
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
		
		
		setTimeout(dayOrNight,200)
	});

});

