/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
	var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), t=L['slide']||'', sh=L.slidehead, sf=L.slidefoot, s=o['src'];
	if(tp=='IMAGE'){
		var A=Arrf(function(x){return '<section class="bg-black aligncenter"><img src="'+x+'" /></section>'}, (L.image||'').split('\n'));
		$('#webslides').html(A.join('\n'));
		

	}else{
		if(t && !/<section>/.test(t)){
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
consolelog(s);
		if(s){
			$.ajax({type:'get',url: s, success:function(x){
				if(/MD|MARKDOWN/.test(tp) || /\.MD|\.MARKDOWN/i.test(s)){
					oHTML(XML.wrapE('MD',x),'','#webslides')
				}else{
					oHTML(x,1,'#webslides')
				}
			}, error:function(){oHTML(t,1,'#webslides')}
			})
		}else if(t){
		
			oHTML(t,1,'#webslides');

		}

	}

	if(o['swap']=='v' || !o['swap'] && L.slideSwapV=='true'){
		$('#webslides').addClass('vertical')
	}

	window.ws = new WebSlides();

});
