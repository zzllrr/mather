/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
var o=H_o(),s=o.s||'', t=o.t?fn1(o.t):'';

$(function () {

	$('#oHTML').empty();

	var dmid='outPlot'+(new Date()).getTime()+(Math.random()+'').substr(2);

	if(t){

		gs.each(function(){
			Graphic.drawSVG(s,t,'oHTML');
		});

	}




	setTimeout(function(){
		$('#oHTML').find('.oLaTeX').eq(0).click();

	},300);
      

});
