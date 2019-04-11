/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */



$(function(){

	var es=ZLR('wiki course drill topic pitfall unsolved'), uo=H_o().explore||'wiki';
	$('#explores').html(Options(es,Arrf(gM,es)).join(''), uo).on('change',function(){
		var v=$(this).val();
		$('#exploreGround .ground0').html(
			jdetail(eval(v+'s'))
		).nextAll().empty();
	});

	$('body').on('click','#exploreGround .ground0 .level',function(){


		var v=$('#explores').val(),me=$(this),mei=me.attr('data-i');
		me.parent().nextAll().add('#oHTML').empty();
		
		if(me.is('.seled')){
			me.removeClass('seled');
			
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var A=explores[v][mei],str='';
			console.log(v,mei,A);
			
			for(var i=0,l=A.length;i<l;i++){
				if(isStr(A[i])){
					str+=jdetail(A[i])
				}else{
					$.each(A[i], function(k,v){
						str+=jdetail(k);
					});
				}
			}
			
			$('#exploreGround .ground1').html(str)

		}

	}).on('click','#exploreGround .ground1 .level',function(){


		var v=$('#explores').val(),v0=$('#exploreGround .ground0 .seled').attr('data-i'), me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().add('#oHTML').empty();
		if(me.is('.seled')){
			me.removeClass('seled');
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=explores[v][v0][i],str='';
			if(isStr(o)){
				var ev=eval(v);
				OH(ev[mei] || ev[v0+' '+mei] || ev[mei+' '+v0]);
				
			}else{
				var A;
				$.each(o, function(x,a){
					A=a;
				});

				for(var i=0,l=A.length;i<l;i++){
					if(isStr(A[i])){
						str+=jdetail(A[i])
					}else{
						$.each(A[i], function(k,v){
							str+=jdetail(k);
						});
					}
				}
				$('#exploreGround .ground2').html(str)

			}

		}

	}).on('click','#exploreGround .ground2 .level',function(){


		var v=$('#explores').val(),v0=$('#exploreGround .ground0 .seled').attr('data-i'),g1=$('#exploreGround .ground1 .seled'),v1=g1.index(),v1i=g1.attr('data-i'), me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().add('#oHTML').empty();
		if(me.is('.seled')){
			me.removeClass('seled');
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			consolelog(v,v0,v1,i);
			var o=explores[v][v0][v1],str='';
			$.each(o, function(x,a){
				o=a[i];
			});
			var ev=eval(v);

			if(isStr(o)){
				console.log(v1, mei);
				OH(ev[mei] || ev[v1i+' '+mei] || ev[mei+' '+v1i]);
				
			}else{
				console.log(v,o);
				OH(Arrf(function(x){return ev[x] || ev[mei+' '+x] || ev[x+' '+mei]},o))

			}

		}
		
	});



	var uo=H_o(sch);

	if(uo.tool=='explore' || L.tool=='explore'){
		var ls=(uo.subtool||'0').split('.');

		if(ls[0]=='0'){

			$('#explores').val($('#explores').children().eq(+ls[0]).val()).change();
			
			if(ls[1]){
				var x=$('#exploreGround .ground0').children().eq(+ls[1]).click();
			}
		}
	}else{
		
		$('#explores').val('wiki').change();
	}


});

	
