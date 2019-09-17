/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

$(function(){


	$('#go').on('click',function(){
		var tool=$('[name=tool]:checked').val(), o=($('#subject2').val()||'').toLowerCase(), i0=$('#input0'),i1=$('#input1'),i0v=i0.val().trim(),i1v=i1.val().trim();
		
		$('#svgs.toggle').click();
		if(tool=='solve'){
			if(!i0v){
				var v=$('.inputTip .eg').last().attr('data-eg')||'';
				i0.val(v);
				i0v=v;
			}
			OH(KxA(solve[o](i0v,questionA())));
			
			setTimeout(function(){
				$('#oHTML').find('.oLaTeX').eq(0).click();
				Scroll('scrollB');
				$('#zMatherHide:contains(up)').click();
			},300);

		}
		if(tool=='graphic'){
			$('#oHTML').empty();
			var dmid='outPlot'+(new Date()).getTime()+(Math.random()+'').substr(2), gs=$('#graphicGround .task.seled');
			if(gs.length<1){
				gs=$('#graphicGround .level.seled').last();
			}
			if(i0v && gs.length){

				gs.each(function(){
					Graphic.drawSVG(furi($(this))[0].join('/'),i0v,'oHTML');
				});

			}
			
		}
		if(tool=='show'){
			var s=$('#showGround .ground0 .level.seled').attr('data-i'), ss=s.toLowerCase(),o={};
			if(ss=='image'){
				ss='slide';
				o.type='image';
			}
			OH('<iframe src="'+H_o(ss+'.html',o)+'" width="99%" height="400px" class=resize></iframe>');
			
		}

		setTimeout(function(){
			dayOrNight();
		},200);

	});

});

