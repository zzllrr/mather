/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

solve[34]=function(){
	var i0=$('#input0'),v=i0.val().trim(), oH=$('#oHTML').empty(), t=$('#subject2').val(), subtools=$('.subtool.seled'), stls=[], rS=[],
	str='', VA=v.split('\n'), n=VA.length;
	subtools.each(function(){
		stls.push($(this).text().replace(/title=.*/,''))
	});


;
	if(t=='函数'){
		if(stls.indexOf('定义域')>-1){
			rS=rS.concat(
			Arrf(function(s){

			},VA));
		}

		if(stls.indexOf('值域')>-1){
			rS=rS.concat(
			Arrf(function(s){

			},VA));
		}


		if(stls.indexOf('极限')>-1){
			rS=rS.concat(
			Arrf(function(s){

			},VA));
		}
		if(stls.indexOf('导数')>-1){
			rS=rS.concat(
			Arrf(function(s){
					var V=s.split('&'),ass=(V[1]||'x').split('='),d=exp2dom(V[0]),x=ass[0];
					return dom2htm(d)+'′= '
			},VA));
		}
		
		if(stls.indexOf('偏导数')>-1){
			rS=rS.concat(
			Arrf(function(s){
					var V=s.split('&'),ass=(V[1]||'x').split('='),d=exp2dom(V[0]),x=ass[0];
					return dom2htm(d)+'′= '
			},VA));
		}

		if(stls.indexOf('方向导数')>-1){
			rS=rS.concat(
			Arrf(function(s){
					var V=s.split('&'),ass=(V[1]||'x').split('='),d=exp2dom(V[0]),x=ass[0];
					return dom2htm(d)+'′= '
			},VA));
		}


		if(stls.indexOf('梯度grad')>-1){
			rS=rS.concat(
			Arrf(function(s){
					var V=s.split('&'),ass=(V[1]||'x').split('='),d=exp2dom(V[0]),x=ass[0];
					return dom2htm(d)+'′= '
			},VA));
		}

		if(stls.indexOf('微分')>-1){
			rS=rS.concat(
			Arrf(function(s){

			},VA));
		}
		if(stls.indexOf('偏微分')>-1){
			rS=rS.concat(
			Arrf(function(s){

			},VA));
		}
		if(stls.indexOf('不定积分')>-1){
			rS=rS.concat(
			Arrf(function(s){

			},VA));
		}
		
		if(stls.indexOf('定积分')>-1){
			rS=rS.concat(
			Arrf(function(s){

			},VA));
		}
	}
	OH(KxA(rS));
//	OH(Table([['结果']],[[rS.join(br)]]));
};

