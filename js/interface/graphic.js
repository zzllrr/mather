/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
 
 
graphics={
	'Geometry':["shape“shape('test','ellipse','','rx=40 ry=30 cx=60 cy=50 fill=red')"],
	'81':["hasse“hasse('hasse1',[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]])"],
	'Statistics':['bar','polyline','pie'],
	'Project':['flowchart'],
},

$(function(){
			
	var str='';
	$.each(graphics, function(k,v){
		str+=jdetail(k);
	});

	$('#graphicGround .ground0').html(str);

	

	
	$('body').on('click','#graphicGround .task', function(e){
		var me=$(this).toggleClass('seled'),se=me.is('.seled'),met=me.attr('data-tool'),eg=me.attr('data-eg'), shft=e.shiftKey, v=$('#graphicGround .level.seled').attr('data-i');
		if(se && shft){
			$('#input0').val(function(i,v){return (v.trim()?v.trim()+'\n':'')+(eg||$('#input0Tip .eg').attr('data-eg')||'')})
			
			
		}


		if(se){
			var tip=tooltip[v],tip0=tooltip[met],tip1=tooltip[met+' Condition'];
			if($('#input0Tip .inputTip[data-tool='+v+']').length<1 && tip){
				$('#input0Tip').append(detail(gM(v), tip, '', 'class=inputTip data-tool="'+v+'"'))

			}
			if($('#input0Tip .inputTip[data-tool='+met+']').length<1 && tip0){
				$('#input0Tip').append(detail(gM(met), tip0, '', 'class=inputTip data-tool="'+met+'"'))
				if(tip1){
					$('#input1Tip').append(detail(gM(met+' Condition'), tip1, '', 'class=inputTip data-tool="'+met+'"'));
				}
			}

		}else{
			$('#input0Tip .inputTip[data-tool='+met+']').remove();
			$('#input1Tip .inputTip[data-tool='+met+']').remove();
		}



		L.subtool=[
			$('#graphicGround .ground0 .level.seled').index(),$('#graphicGround .ground1 .level.seled').index(),$('#graphicGround .ground2 .level.seled').index(),
			$('#graphicGround .task.seled').index()
		].join('.');
		
	}).on('click','#graphicGround .ground0 .level',function(){


		var me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().empty();
		
		if(me.is('.seled')){
			me.removeClass('seled');
			
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=graphics[mei],str='', str2='';

			$.each(o, function(x,A){

				if(isStr(A[0])){
					$('#graphicGround .tasks').html(jdetail(A,'','task'))
					
				}else{
					
					for(var i=0,l=A.length;i<l;i++){
						if(isStr(A[i])){
							str2+=jdetail(A[i],'','task')
							
						}else{
							$.each(A[i], function(k,v){
								str+=jdetail(k);
							});
						}
					}
					$('#graphicGround .ground1').html(str);
					$('#graphicGround .tasks').html(str2);
				}
			});

		}
		$('#input0Tip,#input1Tip').empty();

	}).on('click','#graphicGround .ground1 .level',function(){


		var g0i=$('#graphicGround .ground0 .seled').attr('data-i'), me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().empty();
		if(me.is('.seled')){
			me.removeClass('seled');
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=graphics[g0i][i],str='',str2='';
			$.each(o, function(x,A){
				o=A[i];
			});

			$.each(o, function(x,A){
				if(isStr(A[0])){
					$('#graphicGround .tasks').html(jdetail(A,'','task'))
					
				}else{
					
					for(var i=0,l=A.length;i<l;i++){
						if(isStr(A[i])){
							str2+=jdetail(A[i],'','task')
							
						}else{
							$.each(A[i], function(k,v){
								str+=jdetail(k);
							});
						}

					}
					$('#graphicGround .ground2').html(str);
					$('#graphicGround .tasks').html(str2);
				}
			});

		}
		$('#input0Tip,#input1Tip').empty();

	}).on('click','#graphicGround .ground2 .level',function(){


		var g0i=$('#graphicGround .ground0 .seled').attr('data-i'),g1i=$('#graphicGround .ground1 .seled').index(), me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().empty();
		if(me.is('.seled')){
			me.removeClass('seled');
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=graphics[g0i][g1i],str='';
			$.each(o, function(x,A){
				o=A[i]
			});

			$.each(o, function(x,A){
				$('#graphicGround .tasks').html(jdetail(A,'','task'))
			});

		}
		$('#input0Tip,#input1Tip').empty();
	});


});