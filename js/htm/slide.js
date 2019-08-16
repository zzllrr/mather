/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
	var o=H_o(),tp=o['type'], t=L[tp||'slide']||'', sh=L.slidehead, sf=L.slidefoot;
	if(tp=='image'){
		var s=Arrf(function(x){return '<section class="bg-black aligncenter"><img src="'+x+'" /></section>'},t.split('\n'));
		$('#webslides').html(s.join('\n'));
		

	}else{
		if(!/<section>/.test(t)){
			t='<section>'+t+'</section>'
		}
		if(sh){
			$('main').before('<header role="banner">'+sh+
			/*
			<nav role="navigation">
	  
			</nav>
			*/
		  '</header>')
		}
		if(sf){
			$('main').after('<footer role="contentinfo">'+sf+
		  '</footer>')
		}

		$('#webslides').html(replaceNodeInner(t,'MD', md2html));

		$(ZLR(Mele+' '+Mele2).join(',')).each(function(){
			all2html(this.nodeName,$(this).text(),this);
		});

	}

	if(o['swap']=='v'){
		$('#webslides').addClass('vertical')
	}

	window.ws = new WebSlides();

});
