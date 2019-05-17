/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
$(function(){
	var sbj0=$('#subject0'),sbj1=$('#subject1'),sbj2=$('#subject2');
	sbj0.on('change', function(){//改变sbj2

		var issolve=$('#solve').is(':checked'), v0=$(this).val(),v1=$('#subject1').val();
		if(issolve){
			if(!solves[v1||v0]){
				
				
				sbj2.empty().hide();
				
				
			}else{
				
				
				var sbj2s=solves[v1||v0].sbj2s,str='';

				sbj2.show().html(Options(sbj2s,Arrf(gM,sbj2s)).join(''));
			}
			
			//L.subtool=[v,$('#subject1').val(),$('#subject2 :selected').index()].join('.');
			if(sbj2.val()){
				sbj2.change();
			}
		}
	});

	sbj1.on('change', function(){
		var issolve=$('#solve').is(':checked'), v=$(this).val();
		if(issolve){
			if(!solves[v]){
				
				
				sbj2.empty().hide();
				//$('#subject .ground1').empty();
				
			}else{
				
				
				var sbj2s=solves[v].sbj2s,str='';
				sbj2.show().html(Options(sbj2s,Arrf(gM,sbj2s)).join(''));
				//$('#subject .ground1').html(jdetail(subjects[v]));
			}
			
			//L.subtool=[v,$('#subject1').val(),$('#subject2 :selected').index()].join('.');
			

			if(sbj2.val()){
				sbj2.change();
			}
		}
	});

	sbj2.on('change', function(){
		var issolve=$('#solve').is(':checked'), v0=$('#subject0').val(),v1=$('#subject1').val(),v=$(this).val();
		if(issolve){
			L.subtool=[$('#subject0').val(),$('#subject1').val(),$('#subject2 :selected').index()].join('.').replace(/,-1.+/,'');
			
			$('#solveGround').children().empty();
			
			var A=solves[v1||v0].sbj2[v], str='';
			if(isStr(A[0])){
				$('#solveGround .tasks').html(jdetail(A,'','task'))
				
			}else{
				for(var i=0,l=A.length;i<l;i++){

					$.each(A[i], function(k,v){
						str+=jdetail(k);
					});

				}
				$('#solveGround .ground0').html(str)
			}
			
			$('#input0Tip,#input1Tip').empty();
			var tip=tooltip[v],tip0=tooltip[v+' Operation'],tip1=tooltip[v+' Condition'];
			if(tip){
				$('#input0Tip').append(detail(gM(v), tip, '', 'class=inputTip data-tool="'+v+'"')+
					(tip0?detail(gM(v+' Operation'), tip0, '', 'class=inputTip data-tool="'+v+'"'):'')
				)
			}
			if(tip1){
				$('#input1Tip').append(detail(gM(v+' Condition'), tip1, '', 'class=inputTip data-tool="'+v+'"'));
			}
		}
	});


	$('body').on('click','#solveGround .task', function(e){
		var me=$(this).toggleClass('seled'),se=me.is('.seled'),eg=me.attr('data-eg'), shft=e.shiftKey;
		if(se && shft){
			$('#input0').val(function(i,v){return (v.trim()?v.trim()+'\n':'')+(eg||$('#input0Tip .eg').attr('data-eg')||'')})
			
			
		}

		L.subtool=[$('#subject0').val(),$('#subject1').val(),$('#subject2 :selected').index(),
			$('#solveGround .ground0 .level.seled').index(),$('#solveGround .ground1 .level.seled').index(),$('#solveGround .ground2 .level.seled').index(),
			$('#solveGround .task.seled').index()].join('.').replace(/,-1.+/,'');
	});
/*
	}).on('click','#solveGround .ground0 .level',function(){


		var v0=$('#subject0').val(),v1=$('#subject1').val(),v2=$('#subject2').val(),me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().empty();
		
		if(me.is('.seled')){
			me.removeClass('seled');
			
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=solves[v1||v0].sbj2[v2][i],str='', str2='';
			consolelog(o);
			$.each(o, function(x,A){
				consolelog(A);
				if(isStr(A[0])){
					$('#solveGround .tasks').html(jdetail(A,'','task'))
					
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
					$('#solveGround .ground1').html(str);
					$('#solveGround .tasks').html(str2);
				}
			});

		}

	}).on('click','#solveGround .ground1 .level',function(){


		var v0=$('#subject0').val(),v1=$('#subject1').val(),v2=$('#subject2').val(),g0i=$('#solveGround .ground0 .seled').index(), me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().empty();
		if(me.is('.seled')){
			me.removeClass('seled');
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=solves[v1||v0].sbj2[v2][g0i],str='',str2='';
			$.each(o, function(x,A){
				o=A[i];
			});
			consolelog(o);
			$.each(o, function(x,A){
				if(isStr(A[0])){
					$('#solveGround .tasks').html(jdetail(A,'','task'))
					
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
					$('#solveGround .ground2').html(str);
					$('#solveGround .tasks').html(str2);
				}
			});

		}

	}).on('click','#solveGround .ground2 .level',function(){


		var v0=$('#subject0').val(),v1=$('#subject1').val(),v2=$('#subject2').val(),g0i=$('#solveGround .ground0 .seled').index(),g1i=$('#solveGround .ground1 .seled').index(), me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().empty();
		if(me.is('.seled')){
			me.removeClass('seled');
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=solves[v1||v0].sbj2[v2][g0i],str='';
			$.each(o, function(x,A){
				o=A[g1i];
			});
			$.each(o, function(x,A){
				o=A[i];
			});
			$.each(o, function(x,A){
				$('#solveGround .tasks').html(jdetail(A,'','task'))
			});

		}
		
	});

*/


	var uo=H_o(sch);
	if(!uo.tool){
		uo.tool=L.tool || 'solve'
	}

	if(uo.tool=='solve'){
		var ls=(uo.subtool||L.subtool||'21.2110.0.0.1.1.0').split('.');

		sbj0.val(ls[0]).change();
		sbj1.not(':empty').val(ls[1]).change();
		sbj2.not(':empty').val(sbj2.children().eq(+ls[2]).val()).change();
		
		if(ls[3]!='-1'){
			var x=$('#solveGround .ground0').children().eq(+ls[3]).click();
		}
		if(ls[4]!='-1'){
			var x=$('#solveGround .ground1').children().eq(+ls[4]).click();
		}
		if(ls[5]!='-1'){
			var x=$('#solveGround .ground2').children().eq(+ls[5]).click();
		}
		if(ls[6]!='-1'){
			var x=$('#solveGround .tasks').children().eq(+ls[6]).click();
		}

		$('#input0').val(L.input0||'1234');
	}

});