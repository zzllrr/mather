/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */


$(function(){

	$('#wikisechGO').on('click',function(){
		var me=$(this),k=$('#wikisech').val().trim();
		
		if(me.is('.main')){
			var u='wiki.html?s0='+fn0($('#subject2 .seled').val()||$('#subject2 .tool').val()||'数');
			if(!k){
				
				
			}else{
				
				
			}
			window.open(u);
		}else{
			window.open('wiki.html');

		}

	});

	$('#logo').on('click', function(){
		window.open('zMather.html?s0='+($('#subject0').val()||21));
	});
	$('#iClear').on('click',function(){
		$('#input0').val('');
	});
	$('#iClear2').on('click',function(){
		$('#input2').val('');
	});
	$('#cClear').on('click',function(){
		$('#input1').val('');
	});
	$('.oClear').on('click',function(){
		$('#oHTML').empty();
		if(graphic){
			graphic.close()
		}
		draw.clear();

	});


	
	$('#topic').html(Options(['课题','sudoku','2d','3d','3n_1','divide','prime','integer','determinant','algebraic','transcendental','recursive','wiki'])).on('change', function(){
		var me=$(this), v=me.val();
		if(v!='课题'){
			window.open(v+'.html')
		}
	});
});


