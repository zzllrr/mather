/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
var Graphic={
	parse:function(graphType,v,ID,DOM){
		var g=graphType,d;
		if(g=='latex'){
			d=katex.renderToString(v||$(ID?'#'+ID:DOM).html());
			
		}
		

		
		if(g=='echarts'){
			
			
			
		}
		
		
		return d;
	},
	drawSVG:function(graphType,v,ID,DOM){
		var g=graphType,gl=g.replace(/.+[/]/,''),d;
consolelog('g=',g);
		if(g=='latex'){
			//katex.render(v||$(ID?'#'+ID:DOM).html(),DOM||$('#'+ID)[0]);
			

			
		}else if(/echarts/i.test(g)){

			var id=ID||$(DOM).attr('id'),D=$('#'+id),
			//o=isObj(v)?v:jSon(fnv(v[0]=='{'?v:'{'+v+'}'));
			o=isObj(v)?v:eval(fnv(v[0]=='{'?v:'{'+v+'}'));
			if(D.length<1){
				D=$(DOM)
			}
		
			D.append(DCtv('echart0" style="width:'+(D.width()||600)+'px;height:'+(D.height()||600)+'px',''));
consolelog(D.html());
			var myChart = echarts.init(D.children().last()[0]);

	        //使用制定的配置项和数据显示图表
	        myChart.setOption(o);
			
		}else{
			
			var ivs=v.split('\n'), str='';
			for(var i=0;i<ivs.length;i++){
				var ivi=ivs[i].trim();
				if(ivi){
					if(/^draw/.test(ivi)){//canvas
						eval(ivi)
						
						
					}else{//svg
						var x='plot.',gA=g.split('/'),gl=gA.slice(-1)[0], ivil=ivi.split(' ').length;
						if(/^[a-z]+\(/i.test(ivi)){
							x+=ivi
						
						}else{

							if(g.indexOf('/Shape/')>0 || g.indexOf('/Curve/')>0){
								var egs=$('.inputTip[data-uri*="Plane Coordinate System"] .eg');
								
								if(/^(Ellipse|Circle|Polygon|Polyline|Arc)$/.test(gl)){
									gl=gl.toLowerCase()
									
								}else if(gl=='Rectangle'){
									gl='rect'
									
								}else if(gl=='Line Segment'){
									gl='line'
									
								}else if(gl=='Regular Polygon'){
									gl='Polygon'
									
								}else if(gl=='Semi Circle'){
									gl='Arc';
									
									if(g.indexOf('/Shape/')>0){
										egs=$('.inputTip[data-uri*="Plane Coordinate System.Math/Shape"] .eg')
									}
									
								}
								

								x+="shape('','"+gl+"','','";
								if(/path/i.test(gl)){
								
									x+='d="'+ivi+'"'
								}else if(/=/.test(ivi)){
									x+=ivi
								
								}else{
							
									var egi=egs.filter('[data-eg*="\''+gl+'\'"]');

									var eg=split(egi.attr('data-eg')||'',/[a-z\d]+=/g);
							
							consolelog(gl,'eg=',eg,'ivil=',ivil,'ivi=',ivi);
									if(eg[0] && eg[0].length==1 && / /.test(ivi)){
										ivi='"'+ivi+'"';
										x+=eg[0]+ivi;
									}else if(eg[0]){
										x+=snake([eg[0].slice(0,ivil),(' '+ivi).replace(/ /g,'  1').split(' 1')]).join('').trim();
									}
								}
								
								x+="')";
						
						
							}else if(g.indexOf('/nodesXY')>0){
							
								x+="nodesXY('',"+(/^'/.test(ivi)?'':"'',")+ivi+')';
							
							}else if(g.indexOf('/nodesPolar')>0){
							
								x+="nodesPolar('',"+(/^'/.test(ivi)?'':"'',")+ivi+')';
							
							
							}else{

								x+=gl+"('',"+ivi+')';
							}
							
							
							
							
							
						}
consolelog(x);
						str+=eval(x);
					}
				}
			}
			var id='graphic'+(new Date().getTime());
			//plot.plot(id,'<div id='+id+'>'+plot.shape(id+'_svg','svg',str)+dc);
			plot.plot(id,plot.shape(id+'_svg','svg',str));

			
		}
	},
	drawHTML:function(graphType,v,ID,DOM){
		var g=graphType;
		if(g=='latex'){
			katex.render(v||$(ID?'#'+ID:DOM).html(),DOM||$('#'+ID)[0]);
			
		}

		

	},
	drawHTMLinSVG:function(graphType,v,ID,DOM){//用于在SVG绘制之后，再次加工HTML
		var g=graphType,h;
		if(g=='latex'){
			var d=$(ID?'#'+ID:DOM);
			consolelog(v||d.text());
			h=katex.renderToString(v||d.text());
//这里使用原式JS，是因为jQuery对元素的大小写不敏感
			h='<foreignObject x="'+(d.attr('x')||0)+'" y="'+(+(d.attr('y')||0)-10)+'" transform="'+(d.attr('transform')||'')+'" width="'+scrollW()+'" height="'+scrollH()+
				'"><body xmlns="'+xhtml+'">'+h+'</body></foreignObject>';
			$(ID?'#'+ID:DOM)[0].outerHTML=h;

		}


	},

	
	
	
};

