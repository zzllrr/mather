/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
/*
	draw 使用Canvas
	plot 使用SVG
	Graphic 整合API
*/
var plot={
	fill:'fill fill-opacity',
	stroke:'stroke '+zlr('stroke-','opacity width dasharray dashoffset linecap linejoin'),
	marker:zlr('marker-','start mid end'),
	style0:'position left top width height z-index background color border-color border-width opacity -webkit-filter -webkit-transform cursor',
	styleText:'font-size font-family font-style text-align',
	defs:function(id){
		var str='', d={'E1':'M1 1 L9 5 1 9','S1':'M9 1 L1 5 9 9','E3':'M0 5 L5 1 10 5 5 9','E4':'M2 2 L2 8 8 8 8 2z'};
		d.E2=d.E1+'z';
		d.S2=d.S1+'z';
		
		for(var i=0;i<10;i++){
			for(var j=0;j<2;j++){
				var k=(i>5?i-4:i), pd=i<1?'':(d['ES'[j]+k]||d['E'+k]);
				str+='<marker id="'+id+'Arw'+'ES'[j]+i+'Line" refX="'+'82'[j]+'" viewBox="0 0 10 10" refY="5" markerWidth="4" markerHeight="4" orient="auto">'+
					((i==5||i==9)?'<circle r="4" cx="5" cy="5" stroke="black" fill="'+(i<6?'white':'black')+'"></circle>':
					'<path d="'+pd+'" stroke="black" fill="'+(i<6?'white':'black')+'"></path>')+'</marker>'
			}
		}
		return '<defs>'+str+'</defs>'
	},

	shape:function(id,type,content,attrs,style,translateA){//id,type,content,attrs,style,translateA
consolelog(id,type,content);
consolelog(attrs,style,translateA);
		var typ=type, attr=attr2jSon(attrs||''), arrow='trig diamond square circle', ems=ZLR(' v '+zlr2(arrow,'Hollow')+' '+zlr2(arrow,'Solid')), trA=translateA, tra='', t0='', tP=typ=='textPath';


		if(!trA){
			if(type=='Polygon' && (+attr.cx||+attr.cy)){
				trA=[+attr.cx,+attr.cy]
			}
		}
		if(trA){
			if(type=='Polygon' && translateA){
				trA[0]+=translateA[0];
				trA[1]+=translateA[1];
			}
consolelog(trA);
			tra=' transform=translate('+trA.join()+')';
		}
		if(type=='Square'){
			typ='rect';
			attr.height=attr.width;
		}
		if(type=='Polygon'){
			typ='polygon';
			var n=+attr.n, r=+attr.r, w=+attr.width, a=+attr.a||0,p='';
			if(!r){
				r=w/2/Math.sin(Math.PI/n);
			}
			for(var i=0;i<n;i++){
				p+=plot.polar2XY(r,a+i/n,2).join()+',';
			}
			attr.points=p.replace(/,$/,'');
		}
		if(type=='arc'){
			attr.d='M'+attr.x1+','+attr.y1+'A'+attr.rx+','+(attr.ry||attr.rx)+','+(attr.deg||0)+','+(attr.m||0)+','+(attr.c||0)+','+attr.x2+','+attr.y2+(attr.z?'Z':'');
		}
		if(type=='Arc'){
			var r=Math.round(Math.hypot(+attr.x2-(+attr.x1),+attr.y2-(+attr.y1))/2);
			attr.d='M'+attr.x1+','+attr.y1+'A'+r+','+r+',0,0,'+attr.c+','+attr.x2+','+attr.y2+(attr.z?'Z':'');
		}
		if(type=='lineHV'){
			//V20H15V30 r=4 → M0,0V(20-4)A4,4,0,0,0,4,20H(15-4)A4,4,0,0,1,15,(20+4)V30
			var d=attr.hv, p=d.replace(/([HV])/g,',$1,').split(','), p1=p.slice(0), r=+attr.r||0, s,s0,s1;	//,V,20,H,15,V,30
			if(r){
				for(var i=1;i<p.length-2;i++){
					if(i%2){
						s0=i<5?0:+p[i-3];
						s1=+p[i+1];
						p1[i]+=s1+r*Math.sign(s0-s1);
					}else{
						s0=i<5?0:+p[i-4];
						s1=+p[i];
						var pp=p[i-1],ppH=pp=='H', t0=+p[i-2]||0, t1=+p[i+2];
						p1[i]='A'+r+','+r+',0,0,'+(+(Math.sign((s0-s1)*(t0-t1))==(ppH?1:-1)))+','+(ppH?s1:t0+r*Math.sign(t1-t0))+','+(ppH?t0+r*Math.sign(t1-t0):s1);
					}
				}
				d=p1.join('');
			}
			attr.d='M0,0'+d+(attr.z?'Z':'');
		}
		
		if(/arc|line./i.test(type)){
			typ='path';
		}
//consolelog(attr);
		if(attr.end){
			attr['marker-end']='url(#'+id+'ArwE'+ems.indexOf(attr.end)+'Line)';
		}
		if(attr.mid){
			attr['marker-mid']='url(#'+id+'ArwE'+ems.indexOf(attr.mid)+'Line)';
		}
		if(attr.start){
			attr['marker-end']='url(#'+id+'ArwS'+ems.indexOf(attr.start)+'Line)';
		}
		if(!attr.fill){
			attr.fill='transparent';
		}
		if(!attr.stroke){
			attr.stroke='black';
		}
		if(tP){
			typ='text';
			if(attr.pathid){
				t0=XML.wrapE('defs','<path id='+attr.pathid+' d="'+attr.d+'" />');
			}
		}
		return t0+'<'+typ+' id="'+id+'" '+jSon2attr(attr)+tra+(style?' style="'+style+'"':'')+'>'+(tP?'<'+type+' xlink:href="#'+(attr.href||attr.pathid)+'">':'')+
			(content||'')+(tP?'</'+type+'>':'')+'</'+typ+'>'+(/textarea|svg|^g$/.test(typ)?'':plot.defs(id));
	},
	shapeWHD:function(obj){	//外围宽、高、直径 中心点坐标
		var BCR=$(obj)[0].getBoundingClientRect(),w=BCR.width,h=BCR.height, sw=+($(obj).attr('stroke-width')||1);
		return [w+sw,h+sw,Math.round(Math.hypot(w,h))+sw,Math.round((w+sw)/2),Math.round((h+sw)/2)]
	},

	filter:function(id,a){
	},
	gradient:function(id,a){
		
	},
	animate:function(type,a){
		//<animate xmlns="http://www.w3.org/2000/svg" attributeType="CSS" attributeName="opacity" from="1" to="0" dur="5s" repeatCount="indefinite"/>
		//<animate xmlns="http://www.w3.org/2000/svg" attributeName="x" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="300" to="0"/>
	},

	nodesXY:function(id,types,texts,relations,aligns,translates,nodeMargin,nodeXYs,nodeAttr,nodeStyle,specialNodes){/*节点图
		【节点图】 nodesXY('test','',{n:[[1,2,3],['a','b','c']],r:['关系1','关系2']},[[[1,1],[2,2]],[[1,2],[2,3]]],'  s s','','60 80',[0,0,0,0,0,0,0,0,10,20],'r=2 fill=white')
		【文本】 nodesXY('text','',{n:[1,2,3,4,5],nt:[[1,200,300],[2,220,320],[3,230,350],[4,240,370],[5,250,380]]},'','','','','','r=0')
		【坐标轴1】 nodesXY('axis1','line',{n:[0,1,2,3,4,5]},[[1,6]],'',[0,0,0,10,0,0,0,0,3,305],'60','','x1=0 x2=0 y1=-10 y2=0 fill=white')
		【坐标轴2】	nodesXY('axis2','line',{n:[[5],[4],[3],[2],[1],['']]},[[[1,1],[6,1]]],'  s s',[0,0,5,3,0,0,0,0,0,10],'60','','x1=0 x2=5 y1=0 y2=0 fill=white')
		【坐标轴3】 nodesXY('axis3','  trigSolid',{n:[['y'],['','O','x'],['']]},[[[3,1],[1,1]],[[2,1],[2,3]]],'  s s',[0,0,4,10,0,0,0,0,0,20],'180','','r=0')
		
		【圆角矩形线框图】 nodesXY('test','rect solid trigSolid',[['v₂','v₄','v₅'],['v₁','v₃']],[[[2,1],[1,1]],[[2,1],[1,2]],[[2,1],[1,3]],[[2,2],[1,3]],[[1,1],[1,2]]],'','','180 190','','x=-30 y=-23 width=60 height=46 fill=white rx=20 ry=20')
		【组织架构图】 nodesXY('test','rect solid trigSolid',[['董事长'],['总经理'],['总经办'],['运营中心','用户体验中心'],['项目一部','项目二部','渠道商务部','客服部','财务部','技术开发部','测试部','运维部']],[[[1,1],[2,1]],[[2,1],[3,1],'lineHV','hv=H100V'],[[2,1],[4,1],'lineHV','hv=V60H-125V'],[[2,1],[4,2],'lineHV','hv=V60H125V'],[[2,1],[5,5]],[[2,1],[5,6],'lineHV','hv=V115H50V'],[[4,1],[5,1],'lineHV','hv=V25H-75V'],[[4,1],[5,2],'lineHV','hv=V25H-25V'],[[4,1],[5,3],'lineHV','hv=V25H25V'],[[4,1],[5,4],'lineHV','hv=V25H75V'],[[4,2],[5,7],'lineHV','hv=V25H-25V'],[[4,2],[5,8],'lineHV','hv=V25H25V']],'  a','','',[[[250,50]],[[250,130]],[[350,170]],[[[125,375],220]],[[[50,100,150,200,250,300,350,400],300]]],'x=-30 y=-15 width=60 height=30 fill=white rx=10 ry=10','',[[4,1,'','width=120 x=-60'],[4,2,'','width=100 x=-50'],[5,[1,2,3,4,5,6,7,8],'','width=30 height=80 x=-15 y=-40']])
		【有特殊节点的图】 nodesXY('test','',[['v₂','v₄','v₅'],['v₁','v₃']],[[[2,1],[1,1]],[[2,1],[1,2]],[[2,1],[1,3]],[[2,2],[1,3]],[[1,1],[1,2],'line dotted trigSolid']],'  s s','','60 80','','r=2 fill=white','',[[1,1,'circle','r=2 fill=black']])
		【有向节点图1】 nodesXY('test','  trigSolid',[['v₂','v₄','v₅'],['v₁','v₃']],[[[2,1],[1,1]],[[2,1],[1,2]],[[2,1],[1,3]],[[2,2],[1,3]],[[2,2],[2,2],'circle00b solid trigSolid','rx=20 ry=20'],[[2,2],[1,2],'path solid trigSolid','d=M0,0A60,60,0,0,0,-40,-60']],'  s s','','80 60','','r=2 fill=white')
		【有向节点图2】 nodesXY('test','  trigSolid',[['等价'],['相容','拟序'],['循环','对称','自反','传递','反对称','反自反','完全','非空子集有最小元'],['偏序'],['线序(全序，简单序，链)'],['良序']],[[[1,1],[2,1]],[[1,1],[3,1],'line dotted trigSolid'],[[1,1],[3,3],'line dotted trigSolid'],[[1,1],[3,4]],[[2,2],[3,4]],[[2,2],[3,5]],[[2,2],[3,6]],[[2,1],[3,2]],[[2,1],[3,3]],[[4,1],[3,3]],[[4,1],[3,4]],[[4,1],[3,5]],[[5,1],[4,1]],[[5,1],[3,7]],[[6,1],[5,1]],[[6,1],[3,8]],],'  s s',[0,0,2,0,0,0,0,0,0,20],'60 80','','r=2','',[[1,1,'','cx=-90'],[2,1,'','cx=-90'],[2,2,'','cx=-30']])
		
		【树形图1】 nodesXY('tree','',{n:[[0],[1,2,3],['a','b','c','d','e','f']],r:['关系1','关系2']},[[[1,1],[[2,1],[2,2],[2,3]]],[[2,1],[[3,1],[3,2],[3,3]]],[[2,2],[[3,4],[3,5],[3,6]]]],'a  s s','','60 20,60 80,20 90','','r=2 fill=white')
		【树形图2】 nodesXY('tree','',{n:[[27],[16,11],[7,9,5,6],[3,4],[2,1]]},[[[1,1],[[2,1],[2,2]]],[[2,1],[[3,1],[3,2]]],[[2,2],[[3,3],[3,4]]],[[3,1],[[4,1],[4,2]]],[[4,1],[[5,1],[5,2]]]],'a  s s','','10 20,50 40,30 40,20 40,20 40','','r=2 fill=white')



		types： 'nodeType lineType arrowType'
			形状	nodeType: shapeName :rect (+Square) ellipse circle line polyline polygon (+Polygon正多边形) path
						在relations中，还支持circle|ellipse[01逆顺时针][旋转度数][lrbt相对方向]
			线条	lineType: solid dashed dotted bold
			箭头	arrowType尾,中,首: trigSolid trigHollow
		
		texts: 节点文本、关系文本
			n：[["a b c","a","1"],["a b c","a","1"]] 二维 ["a","b"] 一维
			r: []
			na: 节点文本属性
			ra: 关系文本属性
			nt: 节点文本偏移[行,列,dx,dy]
			rt: 关系文本偏移[行,列,dx,dy]
			
		relations：[[[1,2],[4,5]],[[3,4],[4,5]]]
			关系集[索引1,索引2,types,attr,join,style]
				连线风格join:[hcv][hcv]水平 中心 垂直平移
			
		aligns:'lcra [hcv]+ [psme]+'
			
			lcra节点水平对齐 [hcv]+关系线中点对齐风格 [psmehv]节点文本位置 [psmehva]关系线文本位置：沿路径|从中心开始|中心|到中心结束|横排|竖排|自动决定横竖
			 节点分布：居： 左 中（默认） 右 自动根据相邻节点的相对位置，与父节点坐标分散对齐
			 关系线连接时，选择哪个方向的最近中点对齐：水平 中心 垂直
			 节点文本位置：
			 关系文本位置：
			 
		translates:[] node nodeT line lineT g
			
			
		nodeMargin:'60 140' 节点中心之间的水平、竖直间距（节点中心之间的间距, 多行用,隔开） 如果是数组，则表示每一层的间距



		nodeXYs 节点中心坐标矩阵 （除椭圆、圆、正多边形能直接使用之外，都需要换算）
			节点中心坐标集
			
		nodeAttr（属性中的某些坐标信息将被忽略，坐标通过（aligns 和 nodeMargin） 或者 nodeXYs来计算确定）
		nodeStyle 节点样式
		specialNodes（部分节点特殊处理 [[1,2,type,attr,style,dx偏移,dy偏移],[3,2,type,attr,style,dx偏移,dy偏移]]）

*/

		var typs=types.split(' '),nT=typs[0]||'circle',lT=typs[1]||'solid',aT=typs[2]||'', nodeXY=nodeXYs||[],nodeA=[],lineA=[],lineTA=[],textA=[],nodeM,
			al=(aligns||'c cc m m').split(' '), al0=al[0]||'c', al1=al[1]||'cc', al2=al[2]||'m', al3=al[3]||'m', sN=specialNodes||'', sme={s:'start',m:'middle',e:'end'};
//consolelog(sN);
//var s={ellipse:'rx ry cx cy',circle:'r cx cy',rect:'x y width height rx ry',Square:'x y width rx ry',line:'x1 y1 x2 y2',polyline:'points',polygon:'points',Polygon:'r cx cy width deg',path:'d'};



		var tisA=texts instanceof Array, nodes, relas='', nAtt='', rAtt='', ntr='', rtr='';
		if(tisA){
			nodes=texts;
		}else{
			nodes=texts.n;
			relas=texts.r||[];
			nAtt=texts.na||'';
			rAtt=texts.ra||'';
			ntr=texts.nt||'';
			rtr=texts.rt||'';
		}
		
		var dim2=nodes[0] instanceof Array;//是否为二维坐标

		//特殊节点 将简化坐标转换成完整坐标
		if(sN){
			var SNA=[];
			for(var i=0;i<sN.length;i++){
				var xy=sN[i], XY=Arrf(function(a){var A=xy.slice(2);A.unshift(a[0],a[1]);return A},cartestian([xy[0],xy[1]]));
				SNA=SNA.concat(XY);
			}
			sN=SNA;
		}

		//将简化关系转换成完整关系

		var relaA=[];
		for(var i=0;i<relations.length;i++){
			var ri=relations[i], x=ri[0], y=ri[1], z=ri[2],xisA=x[0] instanceof Array,yisA=y[0] instanceof Array,zisA=z instanceof Array,jA=[],mA=[];
		//	consolelog(x,y,z);
			if(xisA || yisA){
				mA=Arrf(function(a){var A=ri.slice(2);A.unshift(xisA?x[a[0]]:x,yisA?y[a[1]]:y);return A},cartestian([seqA(0,xisA?x.length:1),seqA(0,yisA?y.length:1)]));
				/*
				if(dim2){
					mA=Arrf(function(a){var A=ri.slice(2);A.unshift(xisA?x[a[0]]:x,yisA?y[a[1]]:y);return A},cartestian([seqA(0,xisA?x.length:1),seqA(0,y.length)]));
				}else{
					mA=Arrf(function(a){var A=ri.slice(2);A.unshift(xisA?x[a[0]]:x,yisA?y[a[1]]:y);return A},cartestian([seqA(0,x.length),seqA(0,y.length)]));
				}
				*/
			}else if(zisA){//传递关系
				for(var j=0;j<ri.length-1;j++){
					mA.push([ri[j],ri[j+1]]);
				}
				
			}else{
				mA=[ri];
			}
			//consolelog(mA);
			relaA=relaA.concat(mA);
		}



		if(!dim2){
			nodes=[nodes];
			for(var k=0;k<sN.length;k++){
				var sk=sN[k];
				sk.unshift(1);
			}
			for(var k=0;k<ntr.length;k++){
				var nk=ntr[k];
				nk.unshift(1);
			}
			for(var k=0;k<rtr.length;k++){
				var rk=rtr[k];
				rk.unshift(1);
			}
		}
		var rows=nodes.length;

		nodeM=Arrf(Math.max,Arrf(function(a){return a.length},nodes),'cp2');//有最多节点数所在行的节点数
consolelog(nodeAttr);
		var attrs=attr2jSon(nodeAttr), trsl=translates||[0,0,0,0,0,0,0,0,0,0],tra='transform=translate(';
		if(!attrs['stroke-width']){
			attrs['stroke-width']=2;
		}
		if(!attrs.stroke){
			//attrs.stroke='#8b0000';
			attrs.stroke='black';
		}
		
		var sw=+attrs['stroke-width'],sw2=Math.round(sw/2);
//consolelog(attrs);
		if(/circle/.test(nT)){
			attrs.cx=attrs.cx||0;
			attrs.cy=attrs.cy||0;
		}

		var nodeOffset=function(x,y,node){
			//特殊的中心点偏移
			var att='';//后期需要移除的属性
			if(/circle|ellipse/.test(node[0])){
				var cx=+(node[1].cx||attrs.cx), cy=+(node[1].cy||attrs.cy);
//consolelog(cx,cy);
				x+=cx-attrs.cx;
				y+=cy-attrs.cy;
				att='cx cy';
			}
			return [x,y,att.split(' ')]
		}, nodeWHR=function(node,sw){
			consolelog(node,sw);
			var T=node[0],Att=node[1],w,h,SW=sw||0;
			if(/circle|Polygon/.test(T)){
				w=(+Att.r)*2+SW;
				h=w;
			}else if(/rect|Square/.test(T)){
				w=+Att.width+SW;
				h=w;
				if(/rect/.test(T)){
					h=+Att.height+SW
				}
			}else if(/ellipse/.test(T)){
				w=(+Att.rx)*2+SW;
				h=(+Att.ry)*2+SW;
			}else if(/^line/.test(T)){
				w=Math.abs(+Att.x1-(+Att.x2))+SW;
				h=Math.abs(+Att.y1-(+Att.y2))+SW;
			}
			var rx=Math.round(w/2), ry=Math.round(h/2);
			return [w,h,rx,ry]
		
		}, lineOffset=function(tang,quadrant,node){
			//quadrant: 线段在节点中心坐标轴的象限
			var T=node[0],Att=node[1],x=0,y=0, tan=Math.abs(tang), cos=1/Math.hypot(tan,1), sin=tan*cos, ox=quadrant%4<2?1:-1, oy=quadrant<3?-1:1;
			var tinf=tan===Infinity;
			if(tinf){
				sin=1;
				
			}
//consolelog(T);
			if(/circle/.test(T)){
				//x=(+Att.r+(+Att['stroke-width']||sw)*ox)*cos;
				x=(+Att.r)*cos;
				//y=x*tan;
				y=(+Att.r)*sin;
			}
			if(/ellipse/.test(T)){
				x=1/Math.hypot(1/+Att.rx,tan/+Att.ry);
				//y=x*tan;
				y=tinf?x:x*tan;
			}
			if(/rect|Square/.test(T)){
				var w=+Att.width,h=+Att.height||w, tan0=T=='Square'?1:h/w, r=(tan0<tan?h:w)/2, rx=+Att.rx||0, ry=+Att.ry||0;
				/*
				x=tan0<tan?r/tan:w/2;
				y=tan0<tan?h/2:r*tan;
				*/
				x=tan0<tan?h/2/tan:w/2;
				y=tan0<tan?h/2:tan*w/2;
				
				if(rx+ry){//圆角矩形
					
					
					
				}
				
			}
			if(/line/.test(T)){
				//x=0
				
			}
//consolelog(tan,cos,sin);
			return [Math.round(ox*x),Math.round(oy*y)]
		};

//计算节点宽高半径
consolelog(attrs);
//if(!attrs)
		var nodewhr=nodeWHR([nT,attrs],sw);

		var w=nodewhr[0], h=nodewhr[1], rx=nodewhr[2],ry=nodewhr[3];
consolelog(nodewhr,rx,ry,w,h);

//计算节点中心坐标

		if(!nodeXY.length){
			//nodeLX=(nodeM-1)*stepX+rx;//最多节点行的最后一节点的中心横坐标

			var nM=nodeMargin,stepX,stepY, nMisA=/,/.test(nM);
			if(!nMisA){
				stepX=+nM.split(' ')[0];
				stepY=+nM.split(' ')[+(/ /.test(nM))];
			}else{
				var nMA=nM.split(',');
				for(var i=0;i<nMA.length;i++){
					var ni=nMA[i].split(' ');
					ni[0]=+ni[0];
					ni[1]=+ni[+(/ /.test(nMA[i]))];
					
					var nj=ni[1];
					for(var j=0;j<i;j++){//高度累积
						nj+=nMA[j][1];
					}
					ni[2]=nj;
					nMA[i]=ni;
				}
			}
			
//consolelog(stepX,stepY,nMA,al0);
			for(var i=0;i<rows;i++){
				var sX=nMisA?nMA[i][0]:stepX, sY=nMisA?nMA[i][1]:stepY;


				var nI=nodes[i], nIl=nI.length, nodeXYi=[],
					offsetX=rx,	//al0=='l'
					offsetY=ry+(nMisA?nMA[i][2]:sY*i);//offsetX、Y是该行第1个节点中心坐标
				if(al0=='r'){
					offsetX+=(nodeM-nIl)*sX;
				}else if(al0=='c'){	//m
					offsetX+=Math.round((nodeM-nIl)/2)*sX-Math.round(sX/2)*((nodeM-nIl)%2)
					//offsetX+=(nodeM-nIl-(nodeM-nIl)%2)*sX/2
				}else if(al0=='a'){
					
				}
					
				for(var j=0;j<nIl;j++){
					var x=offsetX+j*sX, y=offsetY;

					if(sN){//有特殊节点
						for(var k=0;k<sN.length;k++){
							var sk=sN[k];

							if(sk[0]==i+1 && sk[1]==j+1){
								var NT=nT;
								if(sk[2]){
									NT=sk[2]
								}
								if(sk[5]){//单独节点偏移，直接修改中心点坐标，而不是使用translate平移
									x+=sk[5];
								}
								if(sk[6]){
									y+=sk[6];
								}
								if(sk[3]){
									var Attrs=attr2jSon(sk[3]), xya=nodeOffset(x,y,[NT,Attrs]);
//consolelog(xya);
									x=xya[0];
									y=xya[1];
									for(var a=0;a<xya[2].length;a++){
										sk[3]=(' '+sk[3]).replace((new RegExp(' '+xya[2][a]+'=\\S+')),'').trim();
									}
									//consolelog(sk[3]);
								}

								
								
								break;
							}
						}
						
					}else if(al0=='a'){//根据父节点坐标、自己在相邻元素中的相对位置
						if(i==0){
							x=sX*(j-(nIl-1)/2);
							
						}else{
							//找出父节点（上一行） 及 坐标 及 父节点的所有子节点（同行）
//consolelog(relaA);
							var rj=relaA.filter(function(a){
								return a[0][0]==i && a[1].join()==(i+1)+','+(j+1)
							})[0], rs=relaA.filter(function(a){

								return a[0].join()==rj[0].join() && a[1][0]==i+1
							}), px=nodeXY[i-1][rj[0][1]-1][0],
							xs=Arrf(function(a){return a[1][1]}, rs).sort(sortBy.num), rsn=rs.length;
//consolelog(rs, px, xs);
							x=sX*(xs.indexOf(j+1)-(rsn-1)/2)+px;
							
						}
					}
//consolelog([x,y]);
//consolelog(x);
					nodeXYi.push([x,y]);
				}
				nodeXY.push(nodeXYi);
			}
			
			if(al0=='a'){
				nodeM=-Arrf(Math.min,Arrf(function(A){return Arrf(Math.min,Arri(A,0),'cp2')},nodeXY),'cp2');
//consolelog(nodeM);
				nodeXY=Arrf(function(A){return Arrf(function(a){return [a[0]+nodeM+rx,a[1]]},A)},nodeXY);
			}
			
		}else if(!dim2){
			nodeXY=[nodeXY];
	
		}
		//将简化坐标转换成完整坐标（纵坐标相等时，有简化）

		for(var i=0;i<rows;i++){
			var XY=nodeXY[i], XYl=XY.length;
//consolelog(XY);
//consolelog(XY[1]);
			var mA=[];
			for(var j=0;j<XYl;j++){
				mA=mA.concat(Arrf(function(a){var A=[a,XY[j][1]];return A},XY[j][0]));

			}
			nodeXY[i]=mA;
		}

		
consolelog(nodeXY, nodeAttr);

//获取每个节点的属性
		var nodeTypesA=[];
		for(var i=0;i<rows;i++){
			var XY=nodeXY[i], XYl=XY.length,nodeTA=[];
			for(var j=0;j<XYl;j++){
				var xy=XY[j], NT=nT, Attr=' '+jSon2attr(attrs).replace(/"/g,''), nStyle=nodeStyle||'';
				var irx=rx, iry=ry;
				
consolelog(xy,irx,iry);
//consolelog(sN);
				if(sN){//有特殊节点
					for(var k=0;k<sN.length;k++){
						var sk=sN[k];

						if(sk[0]==i+1 && sk[1]==j+1){
							if(sk[2]){
								NT=sk[2]
							}
//consolelog(sk[3],Attr);
							if(sk[3]){
								var Attrs=attr2jSon(sk[3]);
								$.each(Attrs, function(ii,nn){

									if(ii=='transform' && /transform/.test(Attr)){
										var nnA=nn.split('),');
										Attr=Attr.replace((new RegExp(' '+ii+'=\\S+')),function(mm){
											var mmA=mm.split('),'), str=mm;
											for(var m=0;m<nnA.length;m++){
												var nni=nnA[i]+(m==nnA.length-1?'':')'), nnit=nni.split('(')[0];
												if(str.indexOf(nnit)>0){
													str=str.replace(new RegExp(nnit+'([^\\)]+\\)'),nni)
												}else{
													str+=','+nni
												}
											}
											return str
										});
									}else{
										Attr=Attr.replace(new RegExp(' '+ii+'=\\S+'),' '+ii+'='+nn);
									}
									if(Attr.indexOf(' '+ii+'=')<0){
										Attr+=' '+ii+'='+nn;
									}
								});
							}
//consolelog(Attr,NT);
							var Attrs=attr2jSon(Attr);

							if(sk[4]){
								nStyle=sk[4]
							}
							var iw=0,ih=0;
							if(/circle|Polygon/.test(NT)){
								iw=(+Attrs.r)*2+sw;
								ih=iw;
							}else if(/rect|Square/.test(NT)){
								iw=+Attrs.width+sw;
								ih=iw;
								if(/rect/.test(NT)){
									ih=+Attrs.height+sw
								}
							}else if(/ellipse/.test(NT)){
								iw=(+Attrs.rx)*2+sw;
								ih=(+Attrs.ry)*2+sw;
							}else if(/^line/.test(nT)){
								iw=Math.abs(+Attrs.x1-(+Attrs.x2))+sw;
								ih=Math.abs(+Aattrs.y1-(+Attrs.y2))+sw;
							}
							
							irx=Math.round(iw/2);
							iry=Math.round(ih/2);
							//consolelog(irx,iry);
							break;
						}
					}
					
				}
//consolelog(attrs, Attr);


				if(/ transform=/.test(Attr)){
			//		consolelog(Attr, xy)
					if(/translate\(/.test(Attr)){
						Attr=Attr.replace(/translate\([^\)]+/,'translate('+xy[0]+','+xy[1]);
					}else{
						Attr=Attr.replace(/ transform=/,'$&translate('+xy[0]+','+xy[1]+'),')
					}
				}else{
//consolelog(tra,xy);
					Attr+=' '+tra+xy[0]+','+xy[1]+')';
				}
//consolelog(xy[0],irx,al2);
				var dx=0,dy=0;
				if(ntr){
					for(var k=0;k<ntr.length;k++){
						var nk=ntr[k];
						if(nk[0]==i+1 && nk[1]==j+1){
							dx+=nk[2];
							dy+=nk[3];
							break;
						}
					}
				}

				var isP=al2=='p', Al2=al2.replace(/[hva]/,'m'), tAtt=isP?'':' '+tra+(xy[0]+irx*'ms'.indexOf(Al2)+dx)+','+(xy[1]+iry*'ms'.indexOf(Al2)+dy)+') text-anchor='+sme[Al2];
				var nid=id+'x'+(i+1)+'y'+(j+1), tSpan='';
//consolelog(al2,iry,irx);
//consolelog(tAtt,xy[0],irx,'ms'.indexOf(Al2),dx);
				if(al2=='v' || al2=='a' && iry > irx){
					var nl=nodes[i][j].length, sz=12, mg=Math.round((iry-nl*sz)/(nl+1));
					if(mg<0){mg=0}
					var y0=Math.round(nl%2?-(nl-1)*(mg+sz)/2+sz/2:-nl*(mg+sz)/2+sz+mg/2);
					for(var k=0;k<nl;k++){
						tSpan+='<tspan '+nAtt+' x=0 y='+(y0+(mg+sz)*k)+'>'+nodes[i][j][k]+'</tspan>';
						
					}
				}else{
					tSpan='<tspan '+nAtt+'>'+nodes[i][j]+'</tspan>';
				}
				
				
				var	tChd=isP?'<textPath xlink:href="#'+nid+'">'+tSpan+'</textPath>':tSpan;
//consolelog(NT,Attr);
				nodeA.push(plot.shape(nid,NT,'',Attr.trim(),nStyle));
				textA.push(plot.shape(nid+'text','text',tChd,tAtt.trim()));

				nodeTA.push([NT,attr2jSon(Attr)]);
			}
			nodeTypesA.push(nodeTA);
		}




//关系



		for(var i=0;i<relaA.length;i++){
			var ri=relaA[i], ri0=ri[0], ri1=ri[1],rit=(ri[2]||['line',lT,aT].join(' ')).split(' '), ria=ri[3]||'', rij=ri[4]||al1, ris=ri[5]||'';
//consolelog(ri0,ri1,dim2);
//consolelog(rit);
			rit[0]=rit[0]||'line';
			rit[1]=rit[1]||lT;
			rit[2]=rit[2]||aT;
//consolelog(rit);
			if(!dim2){
				ri0=[1,ri0];
				ri1=[1,ri1];
			}
//consolelog(ri0[0]-1,ri0[1]-1,ri1[0]-1,ri1[1]-1);
//consolelog(ri0,ri1,rit);
			var xy1=nodeXY[ri0[0]-1][ri0[1]-1],xy2=nodeXY[ri1[0]-1][ri1[1]-1];
//consolelog(dim2,xy1,xy2,nodeXY);
			var x1=xy1[0],y1=xy1[1],x2=xy2[0],y2=xy2[1], attr=attr2jSon(ria);
			var T1=nodeTypesA[ri0[0]-1][ri0[1]-1],T2=nodeTypesA[ri1[0]-1][ri1[1]-1];


			if(!attr['stroke-width'] && rit[1]!='bold'){
				attr['stroke-width']=sw;
			}
			var isw=attr['stroke-width'];
			if(!attr.stroke){
				attr.stroke=attrs.stroke;
			}

			if(!attr['stroke-dasharray']){
				if(/dashed/.test(rit[1])){
					attr['stroke-dasharray']=sw*2+','+sw;
				}
				if(/dotted/.test(rit[1])){
					attr['stroke-dasharray']=sw*2+','+sw2;
				}
			}
			if(/bold/.test(rit[1])){
				attr['stroke-width']=sw+sw2;
			}
//consolelog(rit[2]);
			if(rit[2]){
				var arrow=rit[2].split(',');
				if(!attr['marker-end']){
					if(arrow[0]){
						attr.end=arrow[0];
					}
				}
				if(!attr['marker-mid']){
					if(arrow[1]){
						attr.mid=arrow[1];
					}
				}
				if(!attr['marker-start']){
					if(arrow[2]){
						attr.start=arrow[2];
					}
				}
			}
//consolelog(attr);
//consolelog(x1,x2,y1,y2,rit,rx,ry,w,h);


//nodesXY("test","rect solid trigSolid",[["董事长"],["总经理"],["总经办"],["运营中心","用户体验中心"],["项目一部","项目二部","渠道商务部","客服部","财务部","技术开发部","测试部","运维部"]],[[[1,1],[2,1]],[[2,1],[3,1],"lineHV","hv=H100V","cc"],[[2,1],[4,1],"lineHV","hv=V60H-125V","cc"],[[2,1],[4,2],"lineHV","hv=V60H125V","cc"],[[2,1],[5,5]],[[2,1],[5,6],"lineHV","hv=V115H50V","cc"],[[4,1],[5,1],"lineHV","hv=V25H-75V","cc"],[[4,1],[5,2],"lineHV","hv=V25H-25V","ch"],[[4,1],[5,3],"lineHV","hv=V25H25V","ch"],[[4,1],[5,4],"lineHV","hv=V25H75V","ch"],[[4,2],[5,7],"lineHV","hv=V25H-25V","ch"],[[4,2],[5,8],"lineHV","hv=V25H25V","ch"]],"  a","","",[[[250,50]],[[250,130]],[[350,170]],[[[125,375],220]],[[[50,100,150,200,250,300,350,400],300]]],"x=-30 y=-15 width=60 height=30 fill=white rx=10 ry=10","",[[4,1,"","width=120 x=-60"],[4,2,"","width=100 x=-50"],[5,[1,2,3,4,5,6,7,8],"","width=30 height=80 x=-15 y=-40"]])


			if(rit[0]=='lineHV'){
				var hv=attr.hv,hv0=hv[0],hv1=hv.slice(-1),hva=hv.split(/[A-z]/);


				if(hv0!='M'){
					var whr1=nodeWHR(T1,sw);
					attr.hv='M'+(hv0=='V'?0:whr1[2]*Math.sign(+hva[1]))+','+(hv0=='H'?0:whr1[3]*Math.sign(+hva[1]))+hv;
				}

				if(!/\d/.test(hv1)){
					var whr2=nodeWHR(T2,sw);
					attr.hv+=hv1=='V'?y2-y1-whr2[3]:x2-x1-whr2[2];
				}

			}

			if(rit[0]=='line'){
				if(x1==x2 && y1==y2){//自反
					continue
				}

				var j0=rij[0],j1=rij[1], os1=[0,0],os2=[0,0];//

				if(j0=='h'){
					x1+=rx*Math.sign(x2-x1);
				}
				if(j0=='v'){
					y1+=ry*Math.sign(y2-y1);
				}
				if(j1=='h'){
					x2+=rx*Math.sign(x1-x2);
				}
				if(j1=='v'){
					y2+=ry*Math.sign(y1-y2);
				}
//consolelog(x1,x2,y1,y2,x2-x1);
				var tan=(y2-y1)/(x2-x1);
				var q1=y2>y1?(x2>x1?4:3):(x2>x1?1:2);
				var q2=y2>y1?(x2>x1?2:1):(x2>x1?3:4);
//consolelog(j0,j1);
				if(j0=='c'){
					os1=lineOffset(tan,q1,T1)
				}
				if(j1=='c'){
					os2=lineOffset(tan,q2,T2);
				}
//consolelog(os1,os2);
				x1+=os1[0];
				y1+=os1[1];
				x2+=os2[0];
				y2+=os2[1];

				
				attr.x1=x1;
				attr.y1=y1;
				attr.x2=x2;
				attr.y2=y2;
//consolelog(x1,x2,y1,y2);
			}
			if(/(circle|ellipse).+/.test(rit[0])){
				if(x1==x2 && y1==y2){//单个节点自反关系
					var dire=rit[0].substr(-1);
					if(/\d/.test(rit[0])){//带箭头
						var num=rit[0].substr(0,rit[0].length-1).replace(/^\D+/,''),clock=num[0],dicl=dire+clock;
						var sx=/[lr]/.test(dire)?0:(/t1|b0/.test(dicl)?-1:1)*rx, sy=/[bt]/.test(dire)?0:(/r1|l0/.test(dicl)?-1:1)*ry;
						attr.d='M'+sx+','+sy+'A'+(attr.rx||attr.r)+','+(attr.ry||attr.r)+','+num.substr(1)+',1,'+num[0]+','+(-sx)+','+(-sy);
						rit[0]='path';

						
					}else{//闭合（椭）圆

						var rrx=w*(1+(+/[bt]/.test(dire))), rry=h*(1+(+/[lr]/.test(dire)));
						if(attr.rx){
							rrx=+attr.rx
						}
						if(attr.ry){
							rry=+attr.ry
						}
						attr.rx=rrx;
						attr.ry=rry;
						attr.cx=x1+'br'.indexOf(dire.replace('t','b'))*rrx;
						attr.cy=y1+'rb'.indexOf(dire.replace('l','r'))*rry;

						rit[0]='ellipse';

					}
					
				}else{
					continue //暂不支持
				}
			}
			
			var riisP=/path|arc|line./i.test(rit[0]);
			
			if(riisP){
				if(!attr.transform){
					consolelog('x1,y1=',x1+','+y1);
					attr.transform='translate('+x1+','+y1+')'
				}
			}
//consolelog(rit[0]);
			var dx=0,dy=0;
//consolelog(rtr);
			if(rtr){
				for(var k=0;k<rtr.length;k++){
					var rk=rtr[k];
					if(rk[0]==ri0[0] && rk[1]==ri0[1]){
						dx+=rk[2];
						dy+=rk[3];
						break;
					}
				}
			}
//consolelog(dx,dy);
			var rid=id+'liner'+ri0.join('c')+'r'+ri1.join('c'), isP=al3=='p',Al3=al3.replace(/[hva]/,'m'),
				tSpan='<tspan '+rAtt+'>'+(relas[i]||' ')+'</tspan>',
				xm=Math.round((x1+x2)/2)+(riisP?x1:0)+dx, ym=Math.round((y1+y2)/2)+(riisP?y1:0)+dy,
				tAtt=isP?'':'x='+xm+' y='+ym+' text-anchor='+sme[Al3],
				tChd=isP?'<textPath xlink:href="#'+rid+'">'+tSpan+'</textPath>':tSpan;

			lineA.push(plot.shape(rid,rit[0],'',jSon2attr(attr),ris));
			lineTA.push(plot.shape(rid+'text','text',tChd,tAtt));

		}

//consolelog(lineA);
//consolelog(lineTA);

		//先画线，再画节点，因为SVG不支持z-index，只能通过改变先后顺序，改变层次

		var elemA=[plot.defs(id),
			plot.shape(id+'_line','g',lineA.join(''),tra+trsl[4]+','+trsl[5]+')'),
			plot.shape(id+'_node','g',nodeA.join(''),tra+trsl[0]+','+trsl[1]+')'),
			plot.shape(id+'_nodeT','g',textA.join(''),tra+trsl[2]+','+trsl[3]+')'),
			plot.shape(id+'_lineT','g',lineTA.join(''),tra+trsl[6]+','+trsl[7]+')')];


		var n=plot.shape(id+'_g','g',elemA.join(''),tra+trsl[8]+','+trsl[9]+')');
		return n;
		//return '<div id='+id+' style="z-index:'+($('#oHTML div').length+100)+'">'+n+dc;
	},

	polar2XY:function(r,a,k){/*极坐标（r半径,a整圆的比例）转换成直角坐标系
		
		*/
		var A=[Math.round(r*Math.cos(a*2*Math.PI)), Math.round(-r*Math.sin(a*2*Math.PI))];
		return k?Arrf(digi,A):A
	},
	polar2XYA:function(RA,unfold){/*极坐标数组转换成直角坐标系数组
		unfold 只返回标准极坐标形式
		
		*/
		var A=[];
		for(var i=0;i<RA.length;i++){
			var ri=RA[i];
			if(ri.length<3){
				A.push(unfold?ri:plot.polar2XY(ri[0],ri[1]));
			}else{
				for(var k=0;k<ri[2];k++){
					A.push(unfold?[ri[0],ri[1]+k/ri[2]]:plot.polar2XY(ri[0],ri[1]+k/ri[2]));
				}
			}
		}
		return A
	},
	nodesPolar:function(id,types,texts,relations,aligns,translates,RA,nodeAttr,nodeStyle,specialNodes){/*
		各节点中心极坐标[r,A,s] 半径,初始角,[几等分圆周]
		
		【正方形】 nodesPolar('squareNode','',{n:['','','','',''],r:[3,5,1,6,4,3,1,2]},[[1,2],[2,3],[3,4],[4,1],[4,5],[3,5],[2,5],[1,5]],' s s',[0,0,0,0,0,0,0,0,120,120],[[100,1/8,4],[0,0,1]],'r=2 fill=white')
		【五角形】 nodesPolar('pentagonNode','',{n:[1,2,3,4,5,6,7,8,9,10],nt:[[2,-20,0],[3,-20,5],[8,0,-5],[9,0,-5]]},[[1,2],[2,3],[3,4],[4,5],[5,1],[1,9],[1,8],[2,9],[2,10],[3,10],[3,6],[4,6],[4,7],[5,7],[5,8],[6,7],[7,8],[8,9],[9,10],[10,6]],' s s',[0,0,5,0,0,0,0,0,120,120],[[100,1/4,5],[40,3/4,5]],'r=2 fill=white')
		【韦恩图】 nodesPolar('Venn3','',['A','B','C'],'','',[0,0,0,0,0,0,0,0,180,180],[[70,1/4,3]],'r=100 fill=green fill-opacity=.5 stroke=blue')
		
		
		
		
		极坐标下区别
			nodes节点文本只写成1×n的矩阵。
			aligns:'lcr [hcv]+ [psme] [psme]'无第1项
			节点坐标索引都是1维的。

	RA:极坐标集：半径、角(占整个圆周的比例)[[20,1/8]]
		[r,a1角1],[r,a2角2],[r,a3角3]
		[r,a初始角,steps份数（几等分圆周）]
*/
		var nodeXYs=plot.polar2XYA(RA);
//consolelog(nodeXYs);
		return plot.nodesXY(id,types,texts,relations,' '+aligns,translates,'',nodeXYs,nodeAttr,nodeStyle,specialNodes)
	},
	venn:function(id,texts,relations,rotate,RA,radiusA,translates){/*韦恩图
			椭圆旋转rotate 各椭圆半径radiusA
			
【韦恩图2】 venn('venn_2',{n:['A','B'],r:['A∩B']},[[1,2,,'stroke=none']],[0],[[50,0,2]],[[70]])
【韦恩图3】 venn('venn_3',{n:['A','B','C','A∩B∩C'],r:['A∩B','A∩C','B∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none'],[2,3,,'stroke=none']],[0],[[60,1/4,3],[0,0]],[[70],[70],[70],[0]])
【韦恩图3.1】 venn('venn_3_1',{n:['A','B','C'],r:['A∩B','A∩C']},[[1,2,,'stroke=none'],[1,3,,'stroke=none']],[0,1/8,-1/8],[[70,0,3]],[[100],[60,80],[60,80]])
【韦恩图4】 venn('venn_4',['','','',''],'',[1/8,1/8,-1/8,-1/8],[[30,1/4,3],[30,1/4]],[[68,40]])
【韦恩图4.1】 venn('venn_4_1',{n:['|A|=500','|C|=310','|B|=300','|D|=350'],r:['|A∩C|=15','|A∩D|=220','|B∩C|=200','|B∩D|=50']},[[1,2,,'stroke=none'],[1,4,,'stroke=none'],[2,3,,'stroke=none'],[3,4,,'stroke=none']],[0],[[120,1/8,4]],[[100]])
【韦恩图5】 venn('venn_5',['','','','',''],'',[0,-1/5,-2/5,-3/5,-4/5],[[40,1/5,5]],[[40,110]])
			*/

		var pa=plot.polar2XYA(RA,1), n=pa.length, roA=rotate||[0], rdA=radiusA;

		for(var i=rdA.length-1;i>-1;i--){
			if(rdA[i].length<2){
				rdA[i].push(rdA[i][0]);
			}
		}
		while(roA.length<n){
			roA.unshift(roA[0])
		}
		while(rdA.length<n){
			rdA.unshift(rdA[0])
		}
		var colorA=RandomCombinA(H5Color('white,beige,lavenderblush,ivory,snow,mint,lavender,light,alice,blanchedalmond'),n),
		sN=[],relat=[];

		for(var i=0;i<n;i++){
			//relat.push([i+1,i+1,'circle','r=0']);
			var rx=rdA[i][0],ry=rdA[i][1]||rx, t=[i+1,"",'rx='+rx+' ry='+ry+' fill='+colorA[i]+(roA[i]?' transform=rotate('+360*roA[i]+')':'')];
			sN.push(t);
		}

		var	rM=Arrf(Math.max,Arri(rdA,0).concat(Arri(rdA,1)),'cp2'), 
			RM=Arrf(Math.max,Arri(pa,0),'cp2'), R=(rM+RM)*2;
		var trans=translates||[0,0,0,0,0,0,0,0,R,R];
//consolelog(rM,RM,R);
		var v=plot.nodesPolar(id,'ellipse',texts,relations,'',trans,RA,'fill-opacity=.5','',sN);



		return v
	},

	tree:function(id,types,json,aligns,translates,nodeXYs,nodeAttr,nodeStyle,specialNodes){/* 树形图



*/

//nodesXY(id,types,texts,relations,aligns,translates,nodeMargin,nodeXYs,nodeAttr,nodeStyle,specialNodes){


		return v
	},

	pie:function(id,nA,ratio,RA0,radius,translates){/*饼图
		
	【饼图/环形图】	pie('pie1',['China','US','RU','JP','Other'],[25,20,30,15],[0,0],[110,0,70,100])
		nA 节点文本
		ratio [3.4,4,7,1,9] 省略%
		RA0 第1个pie的圆心极坐标[r,A]
		radius [大圆半径,小圆半径,百分比文本半径,描述文本半径]
*/
		var r=ratio, n=r.length,RA=[];

		if(nA.length>n){
			r.push(digi(100-Arrf(function(a,b){return a+b},r,'cp2')));
			n++;
		}
		var colorA=RandomCombinA(H5Color('white,beige,lavenderblush,ivory,snow,mint'),n), rad=radius, r0=RA0[0], r1=rad[0], r10=rad[1], r2=rad[2]===0?0:(rad[2]||Math.round((r1+r10)/2)), r3=rad[3]===0?0:(rad[3]||r1-20),
		sN=[],A=[RA0[1]],nt=[],pt=[],pA=[],relat=[]; // ,nodeXYs=[];

//consolelog(r);
		for(var i=0;i<n;i++){
			var A0=A.slice(-1)[0], A1=A0+r[i]/100;
			RA.push([r0,A1]);//每个扇形的原点极坐标
			//nodeXYs.push(plot.polar2XY(r0,A1));//转换成直角坐标
			relat.push([i+1,i+1,'circle','r=0']);
			A.push(A1);//终角
			pA.push(r[i]+'%');//百分比文本
//consolelog(A0,A1,plot.polar2XY(r1,A0),plot.polar2XY(r1,A1));

			//var t=[i+1,"",'d=M0,0L'+plot.polar2XY(r1,A0).join()+'A'+r1+','+r1+',0,'+(+(r[i]>50))+',0,'+plot.polar2XY(r1,A1).join()+'Z fill='+colorA[i]+' stroke='+colorA[i]];
			var t=[i+1,"",'d=M'+plot.polar2XY(r10,A0,2).join()+'L'+plot.polar2XY(r1,A0,2).join()+'A'+r1+','+r1+',0,'+(+(r[i]>50))+',0,'+plot.polar2XY(r1,A1,2).join()+
				(r10?'L'+plot.polar2XY(r10,A1,2).join()+'A'+r10+','+r10+',0,'+(+(r[i]>50))+',1,'+plot.polar2XY(r10,A0,2).join():'')+
				'Z fill='+colorA[i]+' stroke=none'];
			sN.push(t);
			if(r3){
				nt.push([i+1].concat(plot.polar2XY(r3,(A0+A1)/2,2)));
			}
			if(r2){
				pt.push([i+1].concat(plot.polar2XY(r2,(A0+A1)/2,2)));
			}
		}
//consolelog(r2,r3,nt,pt);
//consolelog(nodeXYs);
		var trans=translates||[0,0,0,0,0,0,0,0,r0+r1+r2+r3,r0+r1+r2+r3];
/*
	方法1：额外添加文本
		var v=plot.nodesPolar(id,'path',{n:pA,nt:pt,na:(r2?'':'stroke=none')},'','',trans,RA,'fill-opacity=.5','',sN)+
				(r3?plot.nodesXY(id+'Text','',{n:nA,nt:nt},'','',trans,'',nodeXYs,'r=0'):'');
	方法2：使用关系文本 （目前使用的）
	方法3：再使用1个nodesPolar
*/
		var v=plot.nodesPolar(id,'path',{n:pA,nt:pt,na:(r2?'':'stroke=none'),r:nA,rt:nt},relat,'',trans,RA,'fill-opacity=.5','',sN);



		return v
	
	},
	hasse:function(id,nA,rA,translates){
		var v=plot.nodesXY(id,'circle solid',nA,rA,'  s s',translates||[0,0,2,2,0,0,0,0,20,20],'60','','r=2 fill=white');
		//consolelog(v);
		return v
	
	},
	hasseMtrx:function(rA){
		var nA=[],ni=[],B=Mtrx.opr1('拷',rA),n=rA.length; //原关系矩阵 合同变换，化成上三角，更方便
//consolelog(Mtrx.toStr(B));
		var elemProp=function(i,A){//集合中第i个元素 (从0开始计数)
			var isB=1,isT=1,P=[],C=[];
			for(var k=0;k<n;k++){
				if(A[i][k]){
					isT=0
					break;
				}
			}
			for(var k=0;k<n;k++){
				if(A[k][i]){
					isB=0
					break;
				}
			}
			for(var k=0;k<n;k++){
				if(A[i][k]){
					
					P.push(k)
				}
			}
			for(var k=0;k<n;k++){
				if(A[k][i]){
					C.push(k)
				}
			}

	
			return [isB,isT,C,P]	//是极小点、是极大点，子元素集合，父元素集合
			
		},elemProps=[];
		for(var i=0;i<n;i++){
			B[i][i]=0;//对角线清空
		}
		for(var i=0;i<n;i++){//去除传递中介
			for(var j=0;j<n;j++){
				if(B[i][j]){
					for(var k=0;k<n;k++){
						if(B[j][k] && B[i][k]){
							B[i][k]=0
							break;
						}
					}
					for(var k=0;k<n;k++){
						if(B[i][k] && B[k][j]){
							B[i][j]=0
							break;
						}
					}
				}
			}
		}
//consolelog(Mtrx.toStr(B));

/*
	矩阵性质：
	某一列全为0：无下元，即为最小元或极小元
	某一行全为0：无上元，即为最大元或极大元
	某一列有n个1：则有n个下元
	某一行有n个1：则有n个上元
	
*/
		var Arrn=n,lr=0,pns=[],Arr=[];
		
		for(var i=0;i<n;i++){//得到最底层
			elemProps.push(elemProp(i,B));
			var prop=elemProps.slice(-1)[0];
//consolelog(prop);
			if(prop[0]){
				//Arri.push(j);
				Arrn--;
				var pn=prop[3].length;
				if(pns[pn]){
					pns[pn].push(i);
				}else{
					pns[pn]=[i];
				}
			}
		}
//consolelog(pns);
		for(var i=0;i<pns.length;i++){//父元素数目相同时，需要重新排序
			if(!pns[i]){
				pns.splice(i,1);
				i--;
			}else{
				if(pns[i].length>1){//父元素数目相同，共父元素应相邻
					/*暂不实现，算法麻烦
					pns[i].sort(function(a,b){
						
					});
					*/
				}
				Arr=pns[i].concat(Arr);
			}
		}
//consolelog(Arr);


		var normQ=function(A){//正态分布排队
			var lr=0,Arr=[];
			for(var j=0;j<A.length;j++){
				if(lr){
					Arr.push(A[j])
				}else{
					Arr.unshift(A[j])
				}
				lr=1-lr;
			}
			//consolelog(A.join(),Arr.join());
			return Arr;
		};
		ni.push(normQ(Arr));

//consolelog(ni[0]);
		while(Arrn>0){
			var Arri=[];
			for(var i=ni[0].length-1;i>-1;i--){//遍历得到第0行的上一层父元素

				for(var j=0;j<n;j++){
					if(B[ni[0][i]][j] && Arri.indexOf(j)<0){
						
						Arri.push(j);
						Arrn--;
					}
				}
			}
			for(var j=0;j<Arri.length;j++){//剔除上一层中隐藏的上层元素

				for(var k=0;k<Arri.length;k++){
					if(j==Arri.length){break}
					if(j!=k && rA[Arri[j]][Arri[k]]){
						Arri.splice(k,1);
						Arrn++;
						k--;
					}
				}
			}
			
			ni.unshift(Arri);
		}

//consolelog(ni);
		for(var i=ni.length-2;i>-1;i--){//从倒数第2行，排序
			var needNormalQ=false;

			if(ni[i].length<2){continue}
			ni[i].sort(function(a,b){
				var sa=-1,sb=-1,propa=elemProps[a],propb=elemProps[b],ca=propa[2],cb=propb[2],pa=propa[3],pb=propb[3],hasSameC=false;
				for(var k=ni.length-1;k>i;k--){//比较子元素索引，靠前则排在前面
					var nik=ni[k];

					for(var j=0;j<nik.length;j++){
						sa=ca.indexOf(nik[j]);
						sb=cb.indexOf(nik[j]);
						if(sa>-1 || sb>-1){
							if(sa>-1 && sb>-1){
								hasSameC=true;
							}else{
								return (+(hasSameC?sb<sa:sa<sb))*2-1
							}
						}
					}
				}
				needNormalQ=true;

				return ni[i].indexOf(a)-ni[i].indexOf(b)//维持原样

			});
			if(needNormalQ){
				ni[i]=normQ(ni[i])
			}
		}

				
		return [ni,B]
	
	},
	plot:function(id,v){
consolelog(id,v);
		$('#oHTML').append(v); //jQuery不支持大写节点
		//$('#oHTML').children().last()[0].outerHTML=v;
		//consolelog($('#oHTML').children().last()[0].outerHTML);

		setTimeout(function(){
			var dm=$('#oHTML svg').last(),w=0,h=0;
			//consolelog(dm[0].id);
			if(/_svg$/.test(dm.attr('id'))){
				var BCR=dm[0].getBoundingClientRect(),dml=parseInt(BCR.left),dmt=parseInt(BCR.top),dmw=BCR.width,dmh=BCR.height;
				dm.children().not('defs').each(function(){
					var t=this.getBoundingClientRect();
					consolelog(this.id,t.right,t.bottom,t);
				//	w=Math.max(w,parseInt(t.right));
				//	h=Math.max(h,parseInt(t.bottom));
					w=Math.max(w,parseInt(t.width+t.left));
					h=Math.max(h,parseInt(t.height+t.top));
				
					consolelog('w , h',w,h);
				});
				consolelog(w,h);
				dm.attr({width:w,height:h});
			}
		},100);
	},
	plotOpen:function(id,v){//新窗口绘图
		if(graphic){
			//graphic.close();
			graphic='';
		}
		if(!graphic || graphic.closed){
			graphic=window.open('graphic.html',id,'height=1,width=1,screenX=400,toolbar=no,menubar=no,location=no, status=no');
		}

		setTimeout(function(){
			graphic.postMessage({id:id,html:v},'*');
		},300);
	}
	
	
	
};

