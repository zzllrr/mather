/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
var o=H_o(),s=o.s||'', t=o.t?fn1(o.t):'', qa=(o.qa||'').split(';');

$(function () {

	$('#oHTML').empty();

	

	if(t){
//console.log(qa);
		Arrf(function(x){
			//console.log(x,t);
			Graphic.drawSVG(x,t,'oHTML');
		},qa);


	}




	setTimeout(function(){
		$('#oHTML').find('.oLaTeX').eq(0).click();

	},300);
      

});
