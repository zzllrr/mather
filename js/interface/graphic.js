/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
 
 /*
graphics={
	'Geometry':["shape“shape('test','ellipse','','rx=40 ry=30 cx=60 cy=50 fill=red')"],
	'81':["hasse“hasse('hasse1',[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]])"],
	'Statistics':['bar','line','pie'],
	'Project':['flowchart','echarts'],
	'Doodle':[],
},
*/
graphics={

	'Plane Coordinate System':[
		{'nodesXY':[
			{'Point':[
				'Point','Grid Point','Scatter'
			]},'Axis','Grid'
			
			
		]},
		{'nodesPolar':[
			{'Point':[
				'Point','Grid Point','Scatter'
			]},'Axis','Grid'
		]},
		
		{'Curve':[
			{'Algebraic Curve':[
				'Parabola'
			]},
			{'Arc':''},
			{'Straight Line':''},
			{'Line Segment':''},
			{'Polyline':''},
			{'LineHV':''},
			{'Bezier':''},
			{'Vector':''},
			{'Path':''},
		]},
		{'Shape':[
			{'Square':''},
			{'Rectangle':''},
			{'Circle':''},
			{'Ellipse':''},
			{'Semi Circle':''},
			{'Polygon':''},
			{'Regular Polygon':''},
			{'Path':''}
		]},			
	],
	

	
	'Space Coordinate System':[
		{'Cartesian':[
			'Axis','Grid'
		]},
		{'Spherical':[
			'Axis','Grid'
		]},
		{'Cylindrical':[
			'Axis','Grid'
		]}				
	],
	
	'Surface':[
		'Sphere',
		'Quadratic Surface'
	],
	'Solid':[
		'2D','3D'
	],
	'81':[
		{'Relation':[
			//"hasse“[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]]",
			//"venn"
			{'hasse':''},
			{'venn':''},
		]},
	],
	'Statistics':[
		'bar','line','pie'
	],
	'Project':[
		{'echarts':[
		
		]},
		{'flowchart':''},
	],
	'Doodle':[],
};



tooltip.graphic={

	//'Plane Coordinate System/Shape/Curve/Arc':'',
	
	'Plane Coordinate System/Shape':['【基本形状】shape(id,type,content,attrs,style,translateA)',[
	detail('文本text【x y dx dy rotate】 路径文本textPath【d href pathid】',Arrf(sceg,
		["shape('','text','O','x=90 y=112 rotate=20')",
		"shape('','textPath','路径文本','d="+'"M20 20 L120 102"'+" pathid=path1')"
		]).join(br)),

sceg("shape('test','ellipse','','rx=40 ry=30 cx=60 cy=50 fill=red')"),
		'圆circle【r cx cy】 椭圆ellipse【rx ry cx cy】',
		'_有向椭圆circle|ellipse[01逆顺时针][旋转度数][lrbt相对方向] 在关系type中使用',
		'矩形rect【x y width height rx ry [cx] [cy]】 _正方形Square【<del>height</del>】',
		'线段line【x1 y1 x2 y2 end mid start】 折线polyline【points】',
		'_横竖折线lineHV【hv横竖位移序列 r拐角半径】',

sceg("shape('test','lineHV','','hv=V20H15V30 r=4')"),
		'_弧arc【x1 y1 x2 y2 rx ry m[Major1|minor0] c[↻1|↺0] deg z end mid start】',
		'_半圆Arc【x1 y1 x2 y2 c[clockwise:↻1|↺0] z是否闭合 end mid start】',
		'多边形polygon【points】 _正多边形Polygon【r cx cy width a n】',

sceg("shape('test','Polygon','','cx=150 cy=200 width=50 n=9 fill=green')"),
		'路径path【d=M起点 L H V A C S Q T Z闭合】L线段x,y H水平x V垂直y',
		'A弧 rx,ry,deg,[01小大弧],[01逆顺时针],x,y',
		'C三次贝塞尔 x1 y1, x2 y2, x y S特殊三次 x2 y2, x y',
		'Q二次贝塞尔 x1 y1, x y T特殊二次 x y',
		'组合g',
		'【end尾 mid中 start首 ∧△◇□○▲◆■●】 v {trig diamond square circle}×{Hollow Solid}'

].join(br)].join(br),
	
	
	/*[
		{'Cartesian':[
			{'Point':[
				'Point','Grid Point','Scatter'
			]},'Axis','Grid'
			
			
		]},
		{'Polar Coordinate':[
			{'Point':[
				'Point','Grid Point','Scatter'
			]},'Axis','Grid'
		]},
		{
		{'Shape':[
			{'Curve':[
				{'Algebraic Curve':[
					'Parabola'
				]},'Arc','Straight Line','Line Segment','Polyline','LineHV','Bezier','Vector',
			]},
			
			'Square','Rectangle','Circle','Ellipse','Semi Circle','Polygon','Regular Polygon','Path'
		]},			
	],
	
*/
	
	'81/Relation':[
detail('【哈斯图】hasse(id,nA,rA,translates)',[
	sceg("hasse('hasse0',[[24],[8,12],[4,6],[2,3],[1]],[[[1,1],[2,1]],[[1,1],[2,2]],[[2,1],[3,1]],[[2,2],[3,1]],[[2,2],[3,2]],[[3,1],[4,1]],[[3,2],[4,1]],[[3,2],[4,2]],[[4,1],[5,1]],[[4,2],[5,1]]])",20),
	sceg("hasse('hasse1',[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]])")
].join(br)),

detail('【韦恩图，文氏图】venn(id,texts,relations,rotate,RA,radiusA,translates)',[
	'椭圆旋转rotate 各椭圆半径radiusA',
			
	sceg("venn('venn_2',{n:['A','B'],r:['A∩B']},[[1,2,,'stroke=none']],[0],[[50,0,2]],[[70]])"),
	sceg("venn('venn_3',{n:['A','B','C','A∩B∩C'],r:['A∩B','A∩C','B∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none'],[2,3,,'stroke=none']],[0],[[60,1/4,3],[0,0]],[[70],[70],[70],[0]])",20),
	sceg("venn('venn_3_1',{n:['A','B','C'],r:['A∩B','A∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none']],[0,1/8,-1/8],[[70,0,3]],[[100],[60,80],[60,80]])",20),
	sceg("venn('venn_4',['','','',''],'',[1/8,1/8,-1/8,-1/8],[[30,1/4,3],[30,1/4]],[[68,40]])"),
	sceg("venn('venn_4_1',{n:['|A|=500','|C|=310','|B|=300','|D|=350'],r:['|A∩C|=15','|A∩D|=220','|B∩C|=200','|B∩D|=50']},[[1,2,,'stroke=none'],[1,4,,'stroke=none'],[2,3,,'stroke=none'],[3,4,,'stroke=none']],[0],[[120,1/8,4]],[[100]])",20),
	sceg("venn('venn_5',['','','','',''],'',[0,-1/5,-2/5,-3/5,-4/5],[[40,1/5,5]],[[40,110]])"),
].join(br)),	
	
].join(br),

	'81/Relation/hasse':['【哈斯图】'+del('hasse(id,')+scRed('nA,rA')+del(',translates)'),
		sceg("[[24],[8,12],[4,6],[2,3],[1]],[[[1,1],[2,1]],[[1,1],[2,2]],[[2,1],[3,1]],[[2,2],[3,1]],[[2,2],[3,2]],[[3,1],[4,1]],[[3,2],[4,1]],[[3,2],[4,2]],[[4,1],[5,1]],[[4,2],[5,1]]]",20),
		sceg("[[1,2,3],['a','b','c']],[[[1,1],[2,2]],[[1,2],[2,3]]]")
	].join(br),
	
	


/*





	'Statistics':[
		'bar','line','pie'
	],
*/




'Project/flowchart':['流程图 flowchart'+href(Hs+'flowchart.js.org','官网'),
	'支持LaTeX的方法：',
	'LaTeX公式用$美元符号$括起来'+sceg2('$x^2+y^2$'),
	'JS代码再嵌套一层$'+sceg2('$$kxf(\'tr\')+\'(A)\'$$'),
	,
	sceg(['s=>start: $a^2+b^2$kroot(3)$=?$',
	'e=>end: e',
	'o1=>operation: o1',
	's1=>subroutine: s1',
	'c1=>condition: c1',
	'i1=>inputoutput: i1',
	'p1=>parallel: p1',
	's->o1->c1',
	'c1(yes)->i1->e',
	'c1(no)->p1',
	'p1(path1, bottom)->s1(right)->o1',
	'p1(path2, top)->o1',
	].join('&&'),10)+
	Arrf(sceg,[
	's@>o1({"stroke":"Red"})',
	's@>o1({"stroke":"Red"})@>c1({"stroke":"Blue"})',
	'o1@>c1({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})',
	
	]).join(br),

	'常用命令片段：'+
	Arrf(sceg2,[
	'->',
	's=>start:>',
	'链接:>'+Hs+'[blank]',
	]).join(br),

].join(br)

};



function tooltipGraphic(issele,met,muri){

		var v=muri.split('/')[0];
consolelog(met,muri,v);
		if(issele){
			var tip=tooltip[v],tip0=tooltip.graphic[muri],tip1=tooltip.graphic[muri+' Condition'];
			if($('#input0Tip .inputTip[data-tool="'+v+'"]').length<1 && tip){
				$('#input0Tip').append(detail(gM(v), tip, '', 'class=inputTip data-tool="'+v+'"'))

			}
			if($('#input0Tip .inputTip[data-tool="'+muri+'"]').length<1 && tip0){
				$('#input0Tip').append(detail(gM(met), tip0, '', 'class=inputTip data-tool="'+muri+'"'))
				if(tip1){
					$('#input1Tip').append(detail(gM(met+' Condition'), tip1, '', 'class=inputTip data-tool="'+muri+'"'));
				}
			}

		}else{
			$('#input0Tip .inputTip[data-tool="'+muri+'"]').remove();
			$('#input1Tip .inputTip[data-tool="'+muri+'"]').remove();
		}

}







$(function(){
			
	var str='';
	$.each(graphics, function(k,v){
		str+=jdetail(k);
	});

	$('#graphicGround .ground0').html(str);

	

	
	$('body').on('click','#graphicGround .task', function(e){
		var me=$(this).toggleClass('seled'),se=me.is('.seled'),met=me.attr('data-tool'),eg=me.attr('data-eg'), shft=e.shiftKey;


		if(se && shft){
			$('#input0').val(function(i,v){return (v.trim()?v.trim()+'\n':'')+(eg||$('#input0Tip .eg').attr('data-eg')||'')})
			
			
		}


		tooltipGraphic(se,met,furi(me));



		L.subtool=[
			$('#graphicGround .ground0 .level.seled').index(),$('#graphicGround .ground1 .level.seled').index(),$('#graphicGround .ground2 .level.seled').index(),
			$('#graphicGround .task.seled').index()
		].join('.');
		
	}).on('click','#graphicGround .ground0 .level',function(){


		var me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().empty();
		
		if(mei=='Doodle'){
			window.open('cap.html');
			return
		}
		
		
		if(me.is('.seled')){
			me.removeClass('seled');
			
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=graphics[mei],str='', str2='';

			$.each({'i':o}, function(x,A){
consolelog(x,A);
				if(isStr(A[0])){
					$('#graphicGround .tasks').append(jdetail(A,'','task'))
					
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
		//tooltipGraphic(me.is('.seled'),mei,furi(me))

	}).on('click','#graphicGround .ground1 .level',function(){


		var g0i=$('#graphicGround .ground0 .seled').attr('data-i'), me=$(this),mei=me.attr('data-i'),i=me.index();
		me.parent().nextAll().empty();
		if(me.is('.seled')){
			me.removeClass('seled');
		}else{
			me.addClass('seled').siblings().removeClass('seled');
			var o=graphics[g0i][i],str='',str2='';
			/*
			$.each(o, function(x,A){
				o=A[i];
			});
			*/

			$.each(o, function(x,A){
				if(isStr(A[0])){
					$('#graphicGround .tasks').append(jdetail(A,'','task'))
					
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
		//$('#input0Tip,#input1Tip').empty();
		tooltipGraphic(me.is('.seled'),mei,furi(me))

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
				$('#graphicGround .tasks').append(jdetail(A,'','task'))
			});

		}
		//$('#input0Tip,#input1Tip').empty();
		tooltipGraphic(me.is('.seled'),mei,furi(me))		
	});


});