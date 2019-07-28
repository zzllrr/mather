/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
	var o=H_o(),tp=o['type'], t=L[tp||'slide']||'';
	if(tp=='image'){
		var s=Arrf(function(x){return '<section class="bg-black aligncenter"><img src="'+x+'" /></section>'},t.split('\n'));

		
		$('#webslides').html(s.join('\n'));
		

	}else{
		if(!/<section>/.test(t)){
			t='<section>'+t+'</section>'
		}

		$('#webslides').html(t);
	}
	$('i18').text(function(i,v){return gM(v)});
	if(o['swap']=='v'){
		$('#webslides').addClass('vertical')
	}
	window.ws = new WebSlides();

});
