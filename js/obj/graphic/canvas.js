/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */


/*
	draw 使用Canvas
	plot 使用SVG
	Graph 整合API
*/

//坐标轴 coordinate axes


var cvs, ctx, ori=[0,0],cw,ch;

$(function(){
	cvs=$('#caps')[0];
	ctx=cvs.getContext('2d');
	cw=$(window).width();//-20;
	ch=$(window).height();//-20;
	
	cvs.width=cw;
	cvs.height=ch;


/*直角坐标系
	//STIXGeneral 'DejaVu Serif' 'DejaVu Sans' Cambria 'Cambria Math' Times 'Lucida Sans Unicode' OpenSymbol 'Standard Symbols L' serif
	



*/
//	ctx.drawImage(img,obj.x,obj.y,obj.w,obj.h,0,0,obj.w,obj.h);
	//ctx.fillStyle="#AF0AB0";
	//ctx.strokeStyle="#0000ff";
	
	//ctx.fillRect(0,0,150,75);
	//ctx.stroke();
	
	/*
	ctx.strokeStyle="red";
	ctx.fillStyle="#AF0AB0";
	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.lineTo(20,100);
	ctx.lineTo(120,100);
	
	*/
	
//ctx.fill();
	//ctx.stroke();
//	ctx.scale(8,8);
//	ctx.rotate(20*Math.PI/180);	
	//	ctx.stroke();
	
});
var draw={//绘制已知图形（静态）
	clear:function(x,y,w,h){/*
		【清除画布】 draw.clear(0,0,1000,800)
		*/
		ctx.clearRect(x||0,y||0,w||cw,h||ch)
	},
	
	
	//坐标轴
	axis:function(oxy,arrow,label,tick,style,type){/*
		【直角坐标轴】 draw.axis({o:[100,500,'red',3],x:[-90,500],y:[50,-400,'red',[4,8,2,6]],color:'black'},{x:[-12,-5,-6,'violet'],y:[-5,12,6,'red']},{o:['O',-12,12],x:['X',-12,18],y:['Y',12,18],color:'salmon'},[{v:{x:[-1,'',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],y:[-1,'',1,2,3,4,5,6,7,8,9,10,11,12,13],xd:[0,12],yd:[-12,0],color:'pink'},k:{s:[18,-18],d:[-18,18],n:[28,20],l:[-5,'5'],color:'green'}}],{color:'gray',label:'italic 12px serif',tick:'12px serif'})
		【极坐标轴】 draw.axis({o:[300,500,'red',3],x:[-90,500],y:[50,-400,'red',[4,8,2,6]],color:'black'},{x:[-12,-5,-6,'violet'],y:[-5,12,6,'red']},{o:['O',-12,12],x:['X',-12,18],y:['Y',12,18],color:'salmon'},[{v:{x:[[0,1,2,3,4],[10,11,12,13,14]],y:[[0,1,2,3],[20,21,22,23]],xd:[[5,0],[0,0]],yd:[[-6,0],[12,0]],color:'pink'}, k:{s:[18,1/20],d:[30,1/36,56,1/12],n:[5,4],l:[3/4,80],color:'red'}}],{color:'gray',label:'italic 12px serif',tick:'12px serif'},'polar')
		【直角坐标网格】 draw.axis({o:[100,500],x:[-90,500],y:[50,-400]},{x:[-12,-5,-6],y:[-5,12,6]},{o:['O',-14,14],x:['X',-22,16],y:['Y',12,18]},[{v:{x:[[-1,'',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],[-1,'',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]],y:[[-1,'',1,2,3,4,5,6,7,8,9,10,11,12,13],[-1,'',1,2,3,4,5,6,7,8,9,10,11,12,13]],xd:[0,12,0,-12],yd:[-12,0,12,0]},k:{s:[18,-18],d:[-18,18],n:[28,20],l:[0,0,0,1]}}],{color:'black',label:'italic 12px serif',tick:'12px serif'})

		全局规范：
			字符串表示相对比例，数字表示绝对坐标
			偏移：负值表示水平向左，竖直向上
		
		直角坐标轴
			
			
			oxy 原点xy轴{o:[dx,dy，color, radius],x:[dx1,dx2，color, dash],y:[dy1,dy2，color, dash]}
		
				o 原点坐标[]：默认是['1/2','1/2']
					（图形原点与左上角偏移）
				x x轴两端点横坐标（相对原点偏移）[dx1,dx2]	
				y y轴两端点纵坐标（相对原点偏移）[dy1,dy2] 

			arrow 箭头{x:[dx,dy,dx1,color],y:[dx,dy,dy1,color]}
				[轴正交方向的正侧翼点与轴末点偏移量dx,dy, 尾点与轴末点偏移量dx1]


			label 坐标轴标签{o:['O',dx,dy],x:['X',dx,dy],y:['Y',dx,dy]}
				o:['',偏移原点坐标dx,dy]
				x:['X',偏移x轴末点坐标dx,dy]
				y:['Y',偏移y轴末点坐标dx,dy]

				
			tick 刻度(网格)[{v:{x:[],y:[],xd:[],yd:[]},k:{s:[],d:[],n:[],l:[],dash:[],color:''}}, {}]
				直角坐标：
				
				v 表示刻度文字
					x:刻度值数组['-3','-2','-1','','1','2']			网格是2维数组
					y:刻度值数组									网格是2维数组
					xd:x方向刻度值偏移刻度线基点[dx1,dy1,dx2,dy2]	网格用到dx2,dy2
					yd:y方向刻度值偏移刻度线基点[dx1,dy1,dx2,dy2]	网格用到dx2,dy2

				k 表示刻度线
					s:刻度线间距（步进，可以为负值）[sx,sy]
					d:第1个刻度线偏移原点[dx,dy]
					n:刻度线数目[nx,ny]
					l：刻度线长度[lx,ly]: 负数表示数轴的反方向，字符串表示交叉（正反方向都有刻度）
					或
					l：网格线始终[lx1,lx2,ly1,ly2]: 画平行线的端点：1表示沿用数轴的端点，0表示沿用正交方向网格的端点

				极坐标：
				
				v 表示刻度文字
					x:刻度值数组['-3','-2','-1','','1','2'] 极径r轴		网格是2维数组
					y:刻度值数组							角度θ轴	网格是2维数组
					xd:x方向刻度值偏移刻度线基点[dx或dr,dy或dθ]					网格是2维数组
					yd:y方向（圆周）刻度值偏移刻度线基点[dr,dθ弧度(2π的倍数)]		网格是2维数组

				k 表示刻度线
					s:刻度线间距（步进，可以为负值）[sx,sθ弧度(2π的倍数)]
					d:第1个刻度线偏移原点[dx（一般是步长sx）,dθ1圆弧偏移x轴弧度(2π的倍数,圆周刻度线)]
					n:刻度线数目[nx圆圈数,ny极轴数]
					l：刻度线长度[lx,ly圆周上刻度线长度]: 
							负数表示数轴的反方向，字符串表示交叉（正反方向都有刻度）
					
					
					或网格线
					
					
					s:刻度线间距（步进，可以为负值）[sx,sθ弧度(2π的倍数)]
					d:第1个刻度线偏移原点[dx（一般是步长sx）,dθ1圆弧偏移x轴弧度(2π的倍数,圆周刻度线)
										  dr（极轴起始半径）,dθ极轴偏移x轴弧度(2π的倍数)]
					n:刻度线数目[nx圆圈数,ny极轴数]
					l：刻度线长度[圆弧弧度dθ(2π的倍数),极轴长度]




			style 样式{}：
				color 整体颜色：html5颜色名称，或#16进制颜色代码
				label:{italic small-caps bold 12px arial}	http://www.w3school.com.cn/tags/canvas_font.asp
				tick:{italic small-caps bold 12px arial}
				close:曲线是否闭合
				dash:虚线（长度，间隙的数值序列）
			type 坐标系类型：rightangle,polar
		*/
//console.log(oxy,arrow,label,tick,style,type);
		ctx.beginPath();
		var typ=type||'rightangle',color=style && style.color?style.color:'',ds=style && style.dash?style.dash:[];

		var ox=oxy.o?oxy.o[0]:'1/2',oy=oxy.o?oxy.o[1]:'1/2';
		if(typeof ox == 'string'){ox=Math.round(eval(ox+'*'+cw))}
		if(typeof oy == 'string'){oy=Math.round(eval(oy+'*'+ch))}
		
		if(oxy.o && oxy.o[3]){
			ctx.arc(ox,oy,oxy.o[3],0,2*Math.PI);
			ctx.fillStyle=color;
			ctx.fill();
		}


		if(oxy.x[3]||ds){
			ctx.setLineDash(oxy.x[3]||ds);
		}
		
		ctx.moveTo(ox+oxy.x[0],oy);
		ctx.lineTo(ox+oxy.x[1],oy);//x轴末点

		ctx.strokeStyle=oxy.x[2]||color;
		ctx.stroke();
		if(arrow && arrow.x){
			ctx.beginPath();
			ctx.setLineDash([]);
			var ax=arrow.x;
			if(ax[2]){
				ctx.moveTo(ox+oxy.x[1],oy);
			}
			ctx.lineTo(ox+oxy.x[1]+ax[0],oy+ax[1]);
			if(ax[2]){
				ctx.lineTo(ox+oxy.x[1]+ax[2],oy);
				ctx.lineTo(ox+oxy.x[1]+ax[0],oy-ax[1]);
				//ctx.closePath();
				ctx.fillStyle=ax[3]||color||'black';
				ctx.fill();

			}else{
				ctx.moveTo(ox+oxy.x[1],oy);
				ctx.lineTo(ox+oxy.x[1]+ax[0],oy-ax[1]);
			}
		}

		ctx.beginPath();

		if(oxy.y[3]||ds){
			ctx.setLineDash(oxy.y[3]||ds);
		}
		ctx.moveTo(ox,oy+oxy.y[0]);
		ctx.lineTo(ox,oy+oxy.y[1]);//y轴末点
		ctx.strokeStyle=oxy.y[2]||color;
		ctx.stroke();
		if(arrow && arrow.y){
			ctx.beginPath();
			ctx.setLineDash([]);
			var ay=arrow.y;
			if(ay[2]){
				ctx.moveTo(ox,oy+oxy.y[1]);
			}
			ctx.lineTo(ox+ay[0],oy+oxy.y[1]+ay[1]);
			if(ay[2]){
				ctx.lineTo(ox,oy+oxy.y[1]+ay[2]);
				ctx.lineTo(ox-ay[0],oy+oxy.y[1]+ay[1]);
				//ctx.closePath();
				ctx.fillStyle=ay[3]||color||'black';
				ctx.fill();

			}else{
				ctx.moveTo(ox,oy+oxy.y[1]);
				ctx.lineTo(ox-ay[0],oy+oxy.y[1]+ay[1]);
			}
		}
		
		if(label){
			var lo=label.o,lx=label.x,ly=label.y;
			ctx.setLineDash([]);
			if(style && style.label){
				ctx.font=style.label||"20px Georgia";
			}
			if(label.color){ctx.strokeStyle=label.color}
			if(lo){
				ctx.strokeText(lo[0],lo[1]+ox,lo[2]+oy);
			}
			if(lx){
				ctx.strokeText(lx[0],lx[1]+ox+oxy.x[1],lx[2]+oy);
			}
			if(ly){
				ctx.strokeText(ly[0],ly[1]+ox,ly[2]+oy+oxy.y[1]);
			}
		}

	
		if(tick){
			ctx.beginPath();
			if(typ=='rightangle'){//直角坐标系
				for(var i=0;i<tick.length;i++){
					var ti=tick[i],tv=ti.v,tk=ti.k,ts=tk.s,td=tk.d,tn=tk.n,tl=tk.l;
					if(tl.length<4){//刻度
						ctx.setLineDash([]);
						for(var j=0;j<tn[0];j++){
							if(typeof tl[0] == 'string'){
								ctx.moveTo(ox+td[0]+ts[0]*j,oy-(+tl[0]));
								ctx.lineTo(ox+td[0]+ts[0]*j,oy+(+tl[0]));
							}else{
								ctx.moveTo(ox+td[0]+ts[0]*j,oy);
								ctx.lineTo(ox+td[0]+ts[0]*j,oy+tl[0]);
							}
							if(tk.color){ctx.strokeStyle=tk.color}
							ctx.stroke();
							
							if(tv && tv.x){
								var tx=tv.x[j],txd=tv.xd;
								if(tx!=null){
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textAlign='center';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(tx,ox+td[0]+ts[0]*j+txd[0],oy+txd[1]);
								}
							}
						}
						
						for(var j=0;j<tn[1];j++){
							if(typeof tl[1] == 'string'){
								ctx.moveTo(ox-(+tl[1]),oy+td[1]+ts[1]*j);
								ctx.lineTo(ox+(+tl[1]),oy+td[1]+ts[1]*j);
							}else{
								ctx.moveTo(ox,oy+td[1]+ts[1]*j);
								ctx.lineTo(ox+tl[1],oy+td[1]+ts[1]*j);
							}
							if(tk.color){ctx.strokeStyle=tk.color}
							ctx.stroke();
							
							if(tv && tv.y){
								var ty=tv.y[j],tyd=tv.yd;
								if(ty!=null){
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textBaseline='middle';
									//ctx.textAlign='center';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(ty,ox+tyd[0],oy+td[1]+ts[1]*j+tyd[1]);
								}
							}
						}
					}else{//网格
						

						//与x轴垂直的网格线
						var y0=oy+(tl[0]?oxy.y[0]:td[1]),y1=oy+(tl[1]?oxy.y[1]:td[1]+ts[1]*(tn[1]-1));

						for(var j=0;j<tn[0];j++){
							
							ctx.moveTo(ox+td[0]+ts[0]*j,y0);
							if(tv && tv.x && tv.x[0]){
								var tx=tv.x[0][j],txd=tv.xd;
								if(tx!=null){
									ctx.setLineDash([]);
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textAlign='center';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(tx,ox+td[0]+ts[0]*j+txd[0],y0+txd[1]);
								}
							}

							if(tk.dash||ds){
								ctx.setLineDash(tk.dash||ds);
							}

							ctx.lineTo(ox+td[0]+ts[0]*j,y1);
							ctx.stroke();
							
							if(tv && tv.x && tv.x[1]){
								var tx=tv.x[1][j],txd=tv.xd;
								if(tx!=null){
									ctx.setLineDash([]);
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textAlign='center';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(tx,ox+td[0]+ts[0]*j+txd[2],y1+txd[3]);
								}
							}

						}
						//与y轴垂直的网格线
						var x0=ox+(tl[2]?oxy.x[0]:td[0]),x1=ox+(tl[3]?oxy.x[1]:td[0]+ts[0]*(tn[0]-1));
						for(var j=0;j<tn[1];j++){
							ctx.moveTo(x0,oy+td[1]+ts[1]*j);
							if(tv && tv.y && tv.y[0]){
								var ty=tv.y[0][j],tyd=tv.yd;
								if(ty!=null){
									ctx.setLineDash([]);
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textBaseline='middle';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(ty,x0+tyd[0],oy+td[1]+ts[1]*j+tyd[1]);
								}
							}

							if(tk.dash||ds){
								ctx.setLineDash(tk.dash||ds);
							}

							ctx.lineTo(x1,oy+td[1]+ts[1]*j);
							ctx.stroke();
							
							if(tv && tv.y && tv.y[0]){
								var ty=tv.y[1][j],tyd=tv.yd;
								if(ty!=null){
									ctx.setLineDash([]);
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textBaseline='middle';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(ty,x1+tyd[2],oy+td[1]+ts[1]*j+tyd[3]);
								}
							}

						}
						
					}
				}
			}else if(typ=='polar'){//极坐标
				for(var i=0;i<tick.length;i++){
					var ti=tick[i],tv=ti.v,tk=ti.k,ts=tk.s,td=tk.d,tn=tk.n,tl=tk.l;
					if(td.length<3){//圆周刻度
						ctx.setLineDash([]);
						for(var j=0;j<tn[0];j++){//x轴刻度
							if(typeof tl[0] == 'string'){
								ctx.moveTo(ox+td[0]+ts[0]*j,oy-(+tl[0]));
								ctx.lineTo(ox+td[0]+ts[0]*j,oy+(+tl[0]));
							}else{
								ctx.moveTo(ox+td[0]+ts[0]*j,oy);
								ctx.lineTo(ox+td[0]+ts[0]*j,oy+tl[0]);
							}
							if(tk.color){ctx.strokeStyle=tk.color}
							ctx.stroke();
							
							if(tv && tv.x){
								var tx=tv.x[j],txd=tv.xd;
								if(tx!=null){
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textAlign='center';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(tx,ox+td[0]+ts[0]*j+txd[0],oy+txd[1]);
								}
							}
						}
						
						var r=td[0]+ts[0]*(tn[0]-1);//圆弧直径
						ctx.arc(ox,oy,r,0,2*Math.PI);
						if(tk.color){ctx.strokeStyle=tk.color}
						ctx.stroke();
						
						for(var j=0;j<tn[1];j++){
							if(typeof tl[1] == 'string'){
								ctx.moveTo(ox+Math.round((r-(+tl[1]))*Math.cos((td[1]+ts[1]*j)*Math.PI*2)),oy-Math.round((r-(+tl[1]))*Math.sin((td[1]+ts[1]*j)*Math.PI*2)));
								ctx.lineTo(ox+Math.round((r+(+tl[1]))*Math.cos((td[1]+ts[1]*j)*Math.PI*2)),oy-Math.round((r+(+tl[1]))*Math.sin((td[1]+ts[1]*j)*Math.PI*2)));
							}else{
								ctx.moveTo(ox+Math.round(r*Math.cos((td[1]+ts[1]*j)*Math.PI*2)),oy-Math.round(r*Math.sin((td[1]+ts[1]*j)*Math.PI*2)));
								ctx.lineTo(ox+Math.round((r+tl[1])*Math.cos((td[1]+ts[1]*j)*Math.PI*2)),oy-Math.round((r+tl[1])*Math.sin((td[1]+ts[1]*j)*Math.PI*2)));
							}
							//console.log(j,tk.color);
							if(tk.color){ctx.strokeStyle=tk.color}
							ctx.stroke();
							
							
							if(tv && tv.y){
								var ty=tv.y[j],tyd=tv.yd;
							//	console.log(j,ty,tv.y);
								if(ty!=null){
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textBaseline='middle';
									//ctx.textAlign='center';
									
								//	console.log(j,tv.color);
									if(tv.color){ctx.strokeStyle=tv.color}
									
									
									ctx.strokeText(ty,ox+Math.round((r+tyd[0])*Math.cos((td[1]+ts[1]*j+tyd[1])*Math.PI*2)),
													  oy-Math.round((r+tyd[0])*Math.sin((td[1]+ts[1]*j+tyd[1])*Math.PI*2)));

								}
							}
						}
					}else{//打靶网格
						

						//圆弧线（同心圆弧）
						var txd=tv && tv.xd?tv.xd:[[0,0],[0,0]];

						for(var j=0;j<tn[0];j++){
							var rj=td[0]+ts[0]*j,
								x0=ox+Math.round(rj*Math.cos(td[1]*Math.PI*2)), y0=oy-Math.round(rj*Math.sin(td[1]*Math.PI*2)),
								x1=ox+Math.round(rj*Math.cos((td[1]+tl[0])*Math.PI*2)), y1=oy-Math.round(rj*Math.sin((td[1]+tl[0])*Math.PI*2));


							if(tv && tv.x){
								if(tv.x[0]){
									var tx=tv.x[0][j];
									if(tx!=null){
										ctx.setLineDash([]);
										ctx.font=style && style.tick?style.tick:"20px Georgia";
										ctx.textAlign='center';
										if(tv.color){ctx.strokeStyle=tv.color}
										ctx.strokeText(tx,ox+Math.round((rj+txd[0][0])*Math.cos((td[1]+txd[0][1])*Math.PI*2)),
											oy-Math.round((rj+txd[0][0])*Math.sin((td[1]+txd[0][1])*Math.PI*2)));
									}
								}
								if(tv.x[1]){
									var tx=tv.x[1][j];
									if(tx!=null){
										ctx.setLineDash([]);
										ctx.font=style && style.tick?style.tick:"20px Georgia";
										ctx.textAlign='center';
										if(tv.color){ctx.strokeStyle=tv.color}
										ctx.strokeText(tx,ox+Math.round((rj+txd[1][0])*Math.cos((td[1]-tl[0]+txd[1][1])*Math.PI*2)),
											oy-Math.round((rj+txd[1][0])*Math.sin((td[1]-tl[0]+txd[1][1])*Math.PI*2)));
									}
								}
							}

							if(tk.dash||ds){
								ctx.setLineDash(tk.dash||ds);
							}
							
							if(tk.color){ctx.strokeStyle=tk.color}
						//	console.log(rj);
						//	ctx.moveTo(x1,y1);
						ctx.moveTo(x0,y0);
							ctx.arc(ox,oy,rj,(-td[1])*2*Math.PI,(-td[1]+tl[0])*2*Math.PI,1);

						//	ctx.moveTo(ox,oy);
							
							//ctx.stroke();
						}
						//过原点射线（等分圆周）

						//beginPath();
						var tyd=tv && tv.yd?tv.yd:[[0,0],[0,0]];
						
						for(var j=0;j<tn[1];j++){
							var x0=ox+Math.round(td[2]*Math.cos((td[3]+ts[1]*j)*Math.PI*2)), y0=oy-Math.round(td[2]*Math.sin((td[3]+ts[1]*j)*Math.PI*2)),
							x1=ox+Math.round((td[2]+tl[1])*Math.cos((td[3]+ts[1]*j)*Math.PI*2)), y1=oy-Math.round((td[2]+tl[1])*Math.sin((td[3]+ts[1]*j)*Math.PI*2));
							ctx.moveTo(x0, y0);
							if(tv && tv.y && tv.y[0]){
								var ty=tv.y[0][j];
								if(ty!=null){
									ctx.setLineDash([]);
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textBaseline='middle';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(ty,ox+Math.round((td[2]+tyd[0][0])*Math.cos((td[3]+ts[1]*j+(td[2]+tyd[0][1]))*Math.PI*2)),
													oy-Math.round((td[2]+tyd[0][0])*Math.sin((td[3]+ts[1]*j+(td[2]+tyd[0][1]))*Math.PI*2)));
								}
							}

							if(tk.dash||ds){
								ctx.setLineDash(tk.dash||ds);
							}

							ctx.lineTo(x1,y1);
							ctx.stroke();

							if(tv && tv.y && tv.y[0]){
								var ty=tv.y[1][j];
								if(ty!=null){
									ctx.setLineDash([]);
									ctx.font=style && style.tick?style.tick:"20px Georgia";
									ctx.textBaseline='middle';
									if(tv.color){ctx.strokeStyle=tv.color}
									ctx.strokeText(ty,ox+Math.round((td[2]+tl[1]+tyd[1][0])*Math.cos((td[3]+ts[1]*j+(td[2]+tyd[1][1]))*Math.PI*2)),
													oy-Math.round((td[2]+tl[1]+tyd[1][0])*Math.sin((td[3]+ts[1]*j+(td[2]+tyd[1][1]))*Math.PI*2)));
								}
							}

						}
						
					}
				}
			}
		}
		
		//ctx.stroke();

	},
	//点
	dot:function(o,points,label,style,type){/*
		【点，圆】 draw.dot([100,500],[[20,20,'red',3.5,'blue'],[320,320,'green',0.1]],{v:['P1','P2'],dx:[0,0],dy:[10,10]},{color:'plum',label:'italic 12px serif'})

			o 坐标原点[ox,oy]
			points 点[[x1,y1,color,radius,fillcolor],[x2,y2,color,radius,fillcolor]]

			label {v:['标记1',],dx:[],dy:[]}
				v:标记数组
				dx:横向偏移基点[dx1,dx2,dx3,dx4,...]
				dy:竖向偏移基点[dy1,dy2,dy3,dy4,...]
			style
				color
				label {italic small-caps bold 12px arial}
				fillcolor
			type 坐标系类型
		*/
		ctx.beginPath();
		var typ=type||'rightangle',color=style && style.color?style.color:'black',fillcolor=style && style.fillcolor?style.fillcolor:'';

		var ox=o[0],oy=o[1],n=points.length;
		if(typeof ox == 'string'){ox=Math.round(eval(ox+'*'+cw))}
		if(typeof oy == 'string'){oy=Math.round(eval(oy+'*'+ch))}
		
		if(typ=='rightangle'){
			for(var i=0;i<n;i++){
				var pi=points[i],vi=label && label.v[i]?label.v[i]:'';
				ctx.beginPath();
				ctx.arc(ox+pi[0],oy-pi[1],pi[3]||1,0,2*Math.PI);
				ctx.strokeStyle=pi[2]||color;
				ctx.stroke();
				if(pi[4]||fillcolor){
					ctx.fillStyle=pi[4]||fillcolor;
					ctx.fill();
				}
				if(vi){
					var dxi=label.dx[i],dyi=label.dy[i];
					ctx.font=style && style.label?style.label:"20px Georgia";
					ctx.textAlign='center';
					//ctx.strokeStyle=pi[2]||color;
					ctx.strokeText(vi,ox+pi[0]+dxi,oy-pi[1]+dyi);
				}
				
			}
		}else if(typ=='polar'){
			
			
			
			
		}
		
		
	},
	//直线
	line:function(oxy,kb,point,style){/*
		
			oxy:{o:[],x:[],y:[]}
				o 原点坐标[]
				x 区间或数值：数学定义域
				y 区间或数值：数学值域
			kb:{k:,b:}
			
			point:{p1:[x1,y1],p2:[x2,y2]}
			
			斜截式y=kx+b
			点斜式y-y1=k(x-x1)
				点斜长式（by zzllrr）把参数b作为长度 ,正数表示向右方向
				k=tan t
				x=b cos t = b /√(1+k^2)
				y=b sin t = b /√(1+1/k^2) = bk/√(1+k^2)
			
			两点式(y-y1)(x2-x1)=(x-x1)(y2-y1)
			
		行列式写法：
			x-x1 x2-x1
			y-y1 y2-y1
			
		1	x		y
			x-x1 	y-y1
			x2-x1	y2-y1
			
		1	x		y
		1	x1 		y1
		1	x2		y2

		*/
		ctx.beginPath();
		var color=style && style.color?style.color:'',ds=style && style.dash?style.dash:[];
//console.log(oxy,kb,point,style);

		if(ds){
			ctx.setLineDash(ds);
		}

		var ox=oxy.o?oxy.o[0]:'1/2',oy=oxy.o?oxy.o[1]:'1/2';
		if(typeof ox == 'string'){ox=Math.round(eval(ox+'*'+cw))}
		if(typeof oy == 'string'){oy=Math.round(eval(oy+'*'+ch))}
//console.log('直线原点：',ox,oy);
		if(oxy.x instanceof Array && oxy.y){
			ctx.moveTo(ox+oxy.x[0],oy);
			ctx.lineTo(ox+oxy.x[1],oy);
		}else if(oxy.y instanceof Array && oxy.x){
			ctx.moveTo(ox+oxy.x,oxy.y[0]);
			ctx.lineTo(ox+oxy.x,oxy.y[1]);

		}else{
			var x1=point?point.p1[0]:'',y1=point?point.p1[1]:'';
			if(kb){
				var k=kb.k,b=kb.b;
				
				if(b==null){//点斜式
					if(oxy.x){
						ctx.moveTo(ox+oxy.x[0],oy-Math.round((oxy.x[0]-x1)*k+y1));
						ctx.lineTo(ox+oxy.x[1],oy-Math.round((oxy.x[1]-x1)*k+y1));
						
					}else{
						ctx.moveTo(ox+Math.round((oxy.y[0]-y1)/k)+x1,oy-oxy.y[0]);
						ctx.lineTo(ox+Math.round((oxy.y[1]-y1)/k)+x1,oy-oxy.y[1]);
						
					}
				}else{//斜截式
					if(oxy.x){
						ctx.moveTo(ox+oxy.x[0],oy-Math.round(oxy.x[0]*k+b));
						ctx.lineTo(ox+oxy.x[1],oy-Math.round(oxy.x[1]*k+b));
						
					}else if(oxy.y){
						ctx.moveTo(ox+Math.round((oxy.y[0]-b)/k),oy-oxy.y[0]);
						ctx.lineTo(ox+Math.round((oxy.y[1]-b)/k),oy-oxy.y[1]);
						
					}else{//点斜长式
						ctx.moveTo(ox+x1,oy-y1);
						ctx.lineTo(ox+x1+Math.round(b/Math.hypot(1,k)),oy-y1-Math.round(b*k/Math.hypot(1,k)));
					}
				}
			}else{//两点式
				var x2=point.p2[0],y2=point.p2[1],k=(y2-y1)/(x2-x1);
				if(oxy.x){
					ctx.moveTo(ox+oxy.x[0],oy-Math.round((oxy.x[0]-x1)*k+y1));
					ctx.lineTo(ox+oxy.x[1],oy-Math.round((oxy.x[1]-x1)*k+y1));
					
				}else if(oxy.y){
					ctx.moveTo(ox+Math.round((oxy.y[0]-y1)/k)+x1,oy-oxy.y[0]);
					ctx.lineTo(ox+Math.round((oxy.y[1]-y1)/k)+x1,oy-oxy.y[1]);
					
				}else{//两端点式
				//	console.log('p1,p2:',x1,y1,x2,y2);
				//	console.log('p1:',ox+x1,oy-y1);
					ctx.moveTo(ox+x1,oy-y1);
					ctx.lineTo(ox+x2,oy-y2);
				//	console.log('p2:',ox+x2,oy-y2);
				}
			}
		}
		if(color){ctx.strokeStyle=color}
		ctx.stroke();

	},

	lines:function(A){/*多折线
	【折线】 draw.lines([[{o:[100,500],x:[-60,40]},{k:-3,b:-85},'',{color:'red'}],[{o:[100,500],x:[-60,40]},{k:3},{p1:[20,100]},{color:'plum'}]])
	
		A数组，参数同单条线line
		
		*/
		var n=A.length;
		for(var i=0;i<n;i++){
			draw.line.apply(null,A[i]);
		}
	},

	polyline:function(o,kbA,style){/*连折线：若干折线首尾相接（支持闭合，填充）
		【连折线】 draw.polyline([100,500],[[-10,-20,1],[10,50,1],[-30,80,1],[40,-50,1]],{color:'red',close:1})


			kbA （终点）顶点信息[[k,b,1],[x,y,c]],
				[斜率k,边长b] 或者坐标[x,y]
				
				起点是原点o
				各顶点共用原点信息o
			style
				close:1 闭合
				color
				fillcolor 填充，此时不支持不同色的边


		方法1：坐标原点不变（坐标系不变），每次改变起点坐标
		var color=style && style.color?style.color:'',A=[],pi=[0,0];
		for(var i=0;i<kbA.length;i++){
			var j=kbA[i],k=j[0],b=j[1],Ai=[{o:o},{k:k,b:b},{p1:[pi[0],pi[1]]}];
			pi=[pi[0]+Math.round(b/Math.hypot(1,k)),pi[1]+Math.round(b*k/Math.hypot(1,k))];

			if(color){Ai.push({color:color})}
			A.push(Ai);
		}
	
		方法2：每次改变坐标原点（坐标系改变），起点相对坐标都是(0,0)
		*/
//console.log('连折线：',kbA.join(' ; '));
		var color=style && style.color?style.color:'',close=style && style.close,fill=style && style.fillcolor,
			ds=style && style.dash?style.dash:[],
		 A=[],oi=[].concat(o),os=[[].concat(o)],n=kbA.length;
		
//console.log('坐标原点',oi+'');
		for(var i=0;i<n;i++){
			var j=kbA[i],k=j[0],b=j[1],co=j[2]==1,c=(fill?'':j[co?3:2])||color,Ai=[{o:oi}];
//console.log('顶点',j+'');
			if(co){//坐标[x,y]
				//Ai.push('',{p1:[0,0],p2:[o[0]+k-oi[0],o[1]-b-oi[1]]});
				Ai.push('',{p1:[0,0],p2:[o[0]+k-oi[0],-(o[1]-b-oi[1])]});
				oi=[o[0]+k,o[1]-b];//得到Canvas中坐标
				
//console.log('k,b = '+k,b,'新原点坐标',oi+'');
//console.log('坐标信息'+Ai[2].p2);
			}else{//[斜率k,边长b]
				Ai.push({k:k,b:b},{p1:[0,0]});
				oi=[oi[0]+Math.round(b/Math.hypot(1,k)),oi[1]-Math.round(b*k/Math.hypot(1,k))];
			}
		//console.log(oi);
			os.push([].concat(oi));
//console.log('新原点坐标：'+oi);
			if(c){Ai.push({color:c})}
			A.push(Ai);
		}
//	console.log(os);
		if(close && !fill){
			var Ai=[{o:oi},'',{p1:[0,0],p2:[o[0]-oi[0],-(o[1]-oi[1])]}];
			if(color){Ai.push({color:color})}
			A.push(Ai);
		}
		if(fill){
			ctx.beginPath();
			if(ds){
				ctx.setLineDash(ds);
			}
			ctx.moveTo(o[0],o[1]);
//console.log(kbA.length,os.length);
			for(var i=1;i<n+1;i++){
//	console.log(i);
				var pi=os[i];
//console.log('fill：'+pi)
				ctx.lineTo(pi[0],pi[1]);
			}
			if(close){
				ctx.closePath();
			}
			if(color){
				ctx.strokeStyle=color;
			}
			ctx.stroke();
			ctx.fillStyle=fill;
			ctx.fill();
		}else{
			draw.lines(A);
		}
	},


	
	ray:function(o,kbA,style){/*放射线：若干折线同一起点
		
	【放射线】 draw.ray([200,400,'cyan'],[[-1,-120,'yellow'],[1,150,'lightblue'],[-1,180,'darkred'],[1,-150,'violet']])
		*/
		var color=style && style.color?style.color:'',ds=style && style.dash?style.dash:[],A=[];
		for(var i=0;i<kbA.length;i++){
			var j=kbA[i],c=j[2]||color,Ai=[{o:o},{k:j[0],b:j[1]},{p1:[0,0]}],si={};
			if(c){si.color=c}
			if(ds){si.dash=ds}
			Ai.push(si);
			A.push(Ai);
		}
		draw.lines(A);

	},
	
	circle:function(o,xy,r,sea,style){/*圆或椭圆 circle/ellipse
		
		【椭圆，圆】 draw.circle([100,500],[50,60],[55,34],'',{color:'green',dash:[]})
		
			o 原点坐标[]
			xy 圆心坐标[]
			r 半径[x轴,y轴,旋转度数°] 有两个不同半径是椭圆
			sea [s,e,a]
				startAngle 开始弧度(2π的倍数)
				endAngle 结束弧度(2π的倍数)
				anticlockwise 是否逆时针
			style
				color
				fillcolor

		*/
		ctx.beginPath();
		var color=style && style.color?style.color:'',fillcolor=style && style.fillcolor?style.fillcolor:'',ds=style && style.dash?style.dash:[];
		ctx.setLineDash(ds);

		var ox=o[0],oy=o[1];
		if(typeof ox == 'string'){ox=Math.round(eval(ox+'*'+cw))}
		if(typeof oy == 'string'){oy=Math.round(eval(oy+'*'+ch))}

		if(r instanceof Array){
			ctx.ellipse(ox+xy[0], oy-xy[0], r[0], r[1], r[2]||0, (sea.length?sea[0]:0)*2*Math.PI, (sea.length?sea[1]:1)*2*Math.PI,sea.length?sea[3]:0);
		}else{
			ctx.arc(ox+xy[0], oy-xy[0], r, (sea.length?sea[0]:0)*2*Math.PI, (sea.length?sea[1]:1)*2*Math.PI,sea.length?sea[3]:0);
		}
		if(color){
			ctx.strokeStyle=color;
		}
		if(style && style.close){
			ctx.closePath();
		}
		if(fillcolor){
			ctx.fillStyle=fillcolor;
			ctx.fill();
		}

		ctx.stroke();
	},
	
	arc:function(o,point,style){/*弧
		
		【圆弧】 draw.arc([100,500],{p1:[20,20],p2:[320,320],cp1:[20,320]},{color:'cyan',fillcolor:'red'})
			o 原点坐标[]
			point:{p1:[x1,y1],p2:[x2,y2],cp1:[cpx1,cpy1]}
				p1 起点
				p2 终点
				cp1 是两条切线p1cp1,p2cp1的交点
					或与p1p2的有向距离L（正数表示切线交点（及弧线），在p1p2右侧或上方）
			style
				color
				fillcolor

		*/
		ctx.beginPath();
		var color=style && style.color?style.color:'',fillcolor=style && style.fillcolor?style.fillcolor:'',ds=style && style.dash?style.dash:[];
		if(ds){
			ctx.setLineDash(ds);
		}

		var ox=o[0],oy=o[1];
		if(typeof ox == 'string'){ox=Math.round(eval(ox+'*'+cw))}
		if(typeof oy == 'string'){oy=Math.round(eval(oy+'*'+ch))}


		var p1=point.p1,p2=point.p2,cp1=point.cp1,L=cp1 instanceof Array?0:cp1,
			horizon=p2[0]==p1[0],t=horizon?0:(p2[1]-p1[1])/(p2[0]-p1[0]),
			p1p2=Math.hypot(p2[0]-p1[0],p2[1]-p1[1]),
			p1cp1=L?Math.hypot(p1p2/2,L):Math.hypot(cp1[0]-p1[0],cp1[1]-p1[1]);
		/*两切线夹角α，内切圆半径r = p1p2/2 /cos α/2  =  p1cp1 * tan α/2【此公式不用，用前一个】
			而
			cosα=内积/模积
			cosα=2(cos α/2)^2-1 = 1-2(sin α/2)^2
				cos α/2 = √[(1+cosα)/2]
				tan α/2 = √[（1-cosα）/（1+cosα）] = √[2/（1+cosα） - 1]
			
			
			已知L（控制点cp1与p1p2的距离）时，控制点坐标：
				x=p1p2中点横坐标 + Lsinβ
				y=p1p2中点纵坐标 + Lcosβ
			
				其中β是p1p2与x轴夹角，tanβ=p1p2纵坐标/横坐标
					sinβ=√[1/(1+1/(tanβ)^2)]
					cosβ=√[1/(1+(tanβ)^2)]
						tanβ>0时，	L>0 cosβ<0		L<0 cosβ>0	
						tanβ<0时，	L>0 cosβ>0		L<0 cosβ<0	
						
				利用r = p1p2/2 /cos α/2 【此公式不用，用后一个】 =  p1cp1 * tan α/2 = p1cp1 * p1p2/2 / L
		*/
		if(L){
			var cp1x=ox+Math.round((p2[0]+p1[0])/2+(horizon?0:L/Math.hypot(1,1/t))),
				cp1y=oy-Math.round((p2[1]+p1[1])/2-L*(t<0?-1:1)/Math.hypot(1,t));
//console.log(t,L,p1p2,p1cp1);
//console.log(cp1x,cp1y);
		}else{
			var cp1x=ox+cp1[0],cp1y=oy-cp1[1];
			var c=((cp1[0]-p1[0])*(cp1[0]-p2[0])+(cp1[1]-p1[1])*(cp1[1]-p2[1]))/(p1cp1*p1cp1),
				c2=Math.sqrt((1+c)/2);
		}
		ctx.moveTo(ox+p1[0],oy-p1[1]);
		ctx.arcTo(cp1x,cp1y,ox+p2[0],oy-p2[1], Math.abs(Math.round(p1p2/2/(L?L/p1cp1:c2))));

		if(color){
			ctx.strokeStyle=color;
		}
		if(style && style.close){
			ctx.closePath();
		}
		if(fillcolor){
			ctx.fillStyle=fillcolor;
			ctx.fill();
		}
		ctx.stroke();
	},

	bezier:function(o,point,style){/*bezier曲线
		
		【Bezier曲线】 draw.bezier([100,500],{p1:[20,20],p2:[300,20],cp1:[160,100]},{color:'cyan',fillcolor:'red',close:1})
			o 原点坐标[]
			point:{p1:[x1,y1],p2:[x2,y2],cp1:[cpx1,cpy1],cp2:[cpx2,cpy2]}
			style
				color
				fillcolor

		*/
		ctx.beginPath();
		var color=style && style.color?style.color:'',fillcolor=style && style.fillcolor?style.fillcolor:'',ds=style && style.dash?style.dash:[];
		if(ds){
			ctx.setLineDash(ds);
		}

		var ox=o[0],oy=o[1];
		if(typeof ox == 'string'){ox=Math.round(eval(ox+'*'+cw))}
		if(typeof oy == 'string'){oy=Math.round(eval(oy+'*'+ch))}


		var p1=point.p1,p2=point.p2,cp1=point.cp1,cp2=point.cp2||'';
		ctx.moveTo(ox+p1[0],oy-p1[1]);

		if(cp2){
			ctx.bezierCurveTo(ox+cp1[0],oy-cp1[1],ox+cp2[0],oy-cp2[1],ox+p2[0],oy-p2[1]);
		}else{
			ctx.quadraticCurveTo(ox+cp1[0],oy-cp1[1],ox+p2[0],oy-p2[1]);
		}
		if(color){
			ctx.strokeStyle=color;
		}
		if(style && style.close){
			ctx.closePath();
		}
		if(fillcolor){
			ctx.fillStyle=fillcolor;
			ctx.fill();
		}
		ctx.stroke();
	},
},trace={//绘制运动轨迹
	
	
	
	
},loop={//展示运动过程
	
	
	
	
},Particle=function(x, y, ex, ey, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.ex = ex;
    this.ey = ey;
    this.vx = vx;
    this.vy = vy;
    this.a = 1500;
    this.color = color;
    this.width = particleSize_x;
    this.height = particleSize_y;

    this.stop = false;this.maxCheckTimes = 10;
    this.checkLength = 5;
    this.checkTimes = 0;
}
;

/*
	线性变换f(x,y) Matrix （x',y',1）^T = M (x,y,1)^T
	M=
	x缩放 x倾斜 x平移
	y倾斜 y缩放 y平移
	0 0 1
	http://www.108js.com/article/article7/70014.html?id=89
	
	非线性变换f(x,y) 例如直角坐标系 -> 极坐标系
	
	（x',y',1） = (√(x^2+y^2),Arg(x,y),1)
	其中幅角Arg(x,y) 表示 arctan(y/x)，y<0时，取负号
	相当于JS中Math.atan2(x,y)
	
	
	
	
	
	单点 
	
*/

var drawobj={//绘制已知图形（静态）
	ini:function(){
		cw=$(window).width();
		ch=$(window).height();
		Ox=+$('#Ox').val();
		Oy=+$('#Oy').val();
		cvs.width=cw;
		cvs.height=ch;
	},
	clear:function(x,y,w,h){/*
		清除画布
		*/
		drawobj.ini();
		ctx.clearRect(x||0,y||0,w||cw,h||ch);
	},
	repaint:function(){/*
		重新绘制
		*/
		drawobj.clear();
		drawobj.bg();
		drawobj.grid();
		drawobj.dot();
		drawobj.circle();
		drawobj.ellipse();
		drawobj.rect();
		drawobj.line();
		drawobj.isogon();
		
		/*
		
	
		drawobj.bezier();
		*/
		drawobj.text();
	},

/*	通用属性
	comp:'',	重叠
	dash:[],	虚线
	color:{		描边
		grad:[x0,y0(,r0),x1,y1(,r1)],				//渐变性（线性或放射性）
		color:['0 color','0.5 color','1 color'],	//渐变色
		或color:'rgba(0,0,0,0)',					//纯色
		opa:0.5										//透明度
	},
		
	color2:{	填充
		
	},
	color3:{	阴影
		color:'rgba(0,0,0,0)',
		opa:0.5,
		blur:20,						//模糊级别 
		offset:'0 0',					//偏移x 偏移y
	}

*/
	bg:function(obj){/*
		画布背景
		obj={
			bggrad:{
					通用属性
				},
			bgimg:[
				{
				src:'',
				poswh0:'0,0,200,300',
				poswh1:'500,500,200,300'
				}
			]

		}
		*/
		scrn('eraser');
		var t='bggrad';
		if(obj?obj.bggrad:$('#'+t+'On').prop('checked')){//背景色
			var color2=color2rgba(obj?this.bggrad:$('[for=bggradOn] .fill .color'),!obj);
			ctx.fillStyle=color2;
			ctx.fillRect(0,0,cw,ch);
		}
		
		var t='bgimg';
		if(obj?obj.bgimg:$('#'+t+'On').prop('checked')){//背景图片
			$(obj?obj[t]:'span[for='+t+'On] .multi').each(function(){
				var poswh0=obj?this.poswh0:$(this).find('.poswh').eq(0).val(),
					poswh1=obj?this.poswh1:$(this).find('.poswh').eq(1).val(),
					src=obj?this.src:$(this).find('.imgurl').val();
				var img=new Image;
			    //img.crossOrigin='Anonymous';
			    img.onload=function(){
			        var sw=img.width,sh=img.height;
			        var t=Arrf(Number,poswh1.split(','));

			        if(poswh0){
			        	var s=Arrf(Number,poswh0.split(','));
				        if(t.length==2){
				        	t.push(s[2],s[3]);
				        }
			        	ctx.drawImage(img,s[0],s[1],s[2],s[3],t[0],t[1],t[2],t[3]);
			        }else{
				        if(t.length==2){
				        	ctx.drawImage(img,t[0],t[1]);
				        }else{
			        		ctx.drawImage(img,t[0],t[1],t[2],t[3]);
			        	}
			        }
			    };
			    img.src=src;
				
			});
		}
	},
	grid:function(obj){/*
		网格线及坐标轴

		
		obj={
			cross:{dash:[] 主, dash2:[] 次, orig:[ox,oy] 原点, range:'' 范围, spacing:'0,0' 主间隔, spacing2:'0,0' 次间隔, color:{} 主颜色, color2:{} 次颜色},
			polar:{dash:[], dash2:[], orig:[ox,oy], range:'', xspacing:0 主间隔, xspacing2:0 次间隔, ynum:0 主圆等分数, ynum2:0 次圆等分数, color:{}, color2:{}},
			axis:{range:'', arrowType:[0,1,2,3], arrowPoints:[dx,dy;d], color:{}},
			tick:{range:'', ticks:[
								{length:'-5,-5', spacing:'0,0', color:{}}
							]
				}
		}
		*/

		var gC='gridCross',g='#'+gC,sf='span[for='+gC+'] ';
		if(obj?obj.cross:$(g+'On').prop('checked')){//直角坐标网格
			//主网格线
			ctx.beginPath();
			ctx.setLineDash(obj?(obj.cross.dash||[]):eval('['+$(sf+'.primary .dash').val().trim()+']'));
			var OrigOn=obj?obj.cross.orig:$(g+'OrigOn').prop('checked'),
				ox=OrigOn?(obj?obj.cross.orig[0]:+$('span[for='+gC+'OrigOn] .Ox').val()):Ox,
				oy=OrigOn?(obj?obj.cross.orig[1]:+$('span[for='+gC+'OrigOn] .Oy').val()):Oy,
				Rng=obj?obj.cross.range:$(g+'Range').val().trim(),
				rng=Rng?rng4(Rng):[[-ox,cw-ox],[oy-ch,oy]],
				b=[[ox+rng[0][0],ox+rng[0][1]],[oy-rng[1][0],oy-rng[1][1]]],
				x,y,X=[],Y=[],
				dxy=(obj?obj.cross.spacing:$(g+'Spacing').val()).split(','), dx=+dxy[0],dy=dxy[1]?+dxy[1]:dx,
				dxy2=(obj?obj.cross.spacing2:$(g+'2Spacing').val()).split(','), dx2=+dxy2[0],dy2=dxy2[1]?+dxy2[1]:dx2,
				color=color2rgba(obj?obj.cross.color:sf+'.primary .color',!obj),
				color2=color2rgba(obj?obj.cross.color2:sf+'.secondary .color',!obj);


			ctx.moveTo(b[0][0],oy);
			ctx.lineTo(b[0][1],oy);
			
			ctx.moveTo(ox,b[1][0]);
			ctx.lineTo(ox,b[1][1]);
			
			if(dx){
				x=ox+dx;
				while(x<=b[0][1]){
					X.push(x);
					ctx.moveTo(x,b[1][0]);
					ctx.lineTo(x,b[1][1]);
					x+=dx;
				}
				x=ox-dx;
				while(x>=b[0][0]){
					X.push(x);
					ctx.moveTo(x,b[1][0]);
					ctx.lineTo(x,b[1][1]);
					x-=dx;
				}
			}
			if(dy){
				y=oy+dy;
				while(y<=b[1][0]){
					Y.push(y);
					ctx.moveTo(b[0][0],y);
					ctx.lineTo(b[0][1],y);
					y+=dy;
				}
				y=oy-dy;
				while(y>=b[1][1]){
					Y.push(y);
					ctx.moveTo(b[0][0],y);
					ctx.lineTo(b[0][1],y);
					y-=dy;
				}
			}
			ctx.strokeStyle=color;
			ctx.stroke();
			
			//次网格线
			if(dx2||dy2){
				ctx.beginPath();
				ctx.setLineDash(obj?(obj.cross.dash2||[]):eval('['+$(sf+'.secondary .dash').val().trim()+']'))
				if(dx2){
					x=ox+dx2;
					while(x<=b[0][1]){
						if(X.indexOf(x)<0){
							ctx.moveTo(x,b[1][0]);
							ctx.lineTo(x,b[1][1]);
						}
						x+=dx2;
					}
					x=ox-dx2;
					while(x>=b[0][0]){
						if(X.indexOf(x)<0){
							ctx.moveTo(x,b[1][0]);
							ctx.lineTo(x,b[1][1]);
						}
						x-=dx2;
					}
				}
				if(dy2){
					y=oy+dy2;
					while(y<=b[1][0]){
						if(Y.indexOf(y)<0){
							ctx.moveTo(b[0][0],y);
							ctx.lineTo(b[0][1],y);
						}
						y+=dy2;
					}
					y=oy-dy2;
					while(y>=b[1][1]){
						if(Y.indexOf(y)<0){
							ctx.moveTo(b[0][0],y);
							ctx.lineTo(b[0][1],y);
						}
						y-=dy2;
					}
				}

				ctx.strokeStyle=color2;
				ctx.stroke();
			}
		}
		
		var gP='gridPolar',g='#'+gP,sf='span[for='+gP+'] ';
		if(obj?obj.polar:$(g+'On').prop('checked')){//极坐标网格
			//主网格线
			var dash=obj?(obj.polar.dash||[]):eval('['+$(sf+'.primary .dash').val().trim()+']');
			ctx.beginPath();
			ctx.setLineDash(dash);
			var OrigOn=obj?obj.polar.orig:$(g+'OrigOn').prop('checked'),
				ox=OrigOn?(obj?obj.polar.orig[0]:+$('span[for='+gP+'OrigOn] .Ox').val()):Ox,
				oy=OrigOn?(obj?obj.polar.orig[1]:+$('span[for='+gP+'OrigOn] .Oy').val()):Oy,
				x,y,X=[],Y=[],
				r=(obj?obj.polar.range:+$(g+'Range').val())||max([ox,cw-ox,oy,ch-oy]),
				dx=obj?obj.polar.xspacing:+$(g+'xSpacing').val(),
				dx2=obj?obj.polar.xspacing2:+$(g+'2xSpacing').val(),
				dy=obj?obj.polar.ynum:+$(g+'yNum').val(),
				dy2=obj?obj.polar.ynum2:+$(g+'2yNum').val(),
				color=color2rgba(obj?obj.polar.color:sf+'.primary .color',!obj),
				color2=color2rgba(obj?obj.polar.color2:sf+'.secondary .color',!obj);

			ctx.moveTo(ox-r,oy);
			ctx.lineTo(ox+r,oy);
			
			ctx.moveTo(ox,oy+r);
			ctx.lineTo(ox,oy-r);
			
			ctx.strokeStyle=color;
			ctx.stroke();
			
			if(dx){
				ctx.beginPath();
				ctx.setLineDash(dash);
				x=dx;
				while(x<=r){
					X.push(x);
					ctx.arc(ox,oy,x,0,2*Math.PI);
					x+=dx;
				}

				ctx.strokeStyle=color;
				ctx.stroke();
			}
			if(dy){
				ctx.beginPath();
				ctx.setLineDash(dash);

				for(var i=1;i<=dy;i++){
					var w=Math.ceil(Math.cos(Math.PI*i/(dy+1)/2)*r),h=Math.ceil(Math.sin(Math.PI*i/(dy+1)/2)*r);
					ctx.moveTo(ox-w,oy+h);
					ctx.lineTo(ox+w,oy-h);
					ctx.moveTo(ox-w,oy-h);
					ctx.lineTo(ox+w,oy+h);
				}

				ctx.strokeStyle=color;
				ctx.stroke();
			}
			
			//次网格线
			dash=obj?(obj.polar.dash2||[]):eval('['+$(sf+'.secondary .dash').val().trim()+']');
			if(dx2){
				ctx.beginPath();
				ctx.setLineDash(dash);

				x=dx2;
				while(x<=r){
					if(X.indexOf(x)<0){
						ctx.arc(ox,oy,x,0,2*Math.PI);
					}
					x+=dx2;
				}

				ctx.strokeStyle=color2;
				ctx.stroke();
			}
			if(dy2){
				ctx.beginPath();
				ctx.setLineDash(dash);
				for(var j=0;j<=dy;j++){
					for(var i=1;i<=dy2;i++){
						var w=Math.ceil(Math.cos(Math.PI*(i+j*(dy2+1))/(dy+1)/(dy2+1)/2)*r),h=Math.ceil(Math.sin(Math.PI*(i+j*(dy2+1))/(dy+1)/(dy2+1)/2)*r);
						ctx.moveTo(ox-w,oy+h);
						ctx.lineTo(ox+w,oy-h);
						ctx.moveTo(ox-w,oy-h);
						ctx.lineTo(ox+w,oy+h);
					}
				}

				ctx.strokeStyle=color2;
				ctx.stroke();
			}
		
		}
		
		var ax='axis',a='#axis',sf='span[for='+ax+'] ';
		if(obj?obj.axis:$(a+'On').prop('checked')){//坐标轴及箭头
			var ox=Ox,oy=Oy,
				Rng=obj?obj.axis.range:$(a+'Range').val().trim(),
				rng=Rng?rng4(Rng):[[-ox,cw-ox],[oy-ch,oy]],
				b=[[ox+rng[0][0],ox+rng[0][1]],[oy-rng[1][0],oy-rng[1][1]]],
				color=color2rgba(obj?obj.axis.color:sf+'.color',!obj),
				ArwType=obj?obj.axis.arrowType:$(a+'ArrowType').val(),
				t0=+ArwType[0],t1=+ArwType[1],t2=+ArwType[2],t3=+ArwType[3],
				ArwPts=obj?obj.axis.arrowPoints:$(a+'ArrowPoints').val().split(';'),
				P0=Arrf(Number,ArwPts[0].split(',')),P1=+ArwPts[1]||0;

			ctx.beginPath();
			ctx.setLineDash([]);
//				console.log(rng.join(';'),t0,t1,t2,t3,P0,P1);
			if(rng[0][0] || rng[0][1]){
				ctx.moveTo(b[0][0]+(t0>1?P0[0]+P1:0),oy);
				ctx.lineTo(b[0][1]-(t1>1?P0[0]+P1:0),oy);
				
			}
			if(rng[1][0] || rng[1][1]){
				ctx.moveTo(ox,b[1][0]-(t2>1?P0[0]+P1:0));
				ctx.lineTo(ox,b[1][1]+(t3>1?P0[0]+P1:0));
			}
			ctx.strokeStyle=color;
			ctx.stroke();
			if(t0){
				ctx.beginPath();
				ctx.moveTo(b[0][0],oy);
				ctx.lineTo(b[0][0]+P0[0],oy+P0[1]);
				if(t0==1){
					ctx.moveTo(b[0][0],oy);
				}else if(P1){
					ctx.lineTo(b[0][0]+P0[0]+P1,oy);
				}
				ctx.lineTo(b[0][0]+P0[0],oy-P0[1]);

				if(t0>1){
					ctx.closePath();
				}
				ctx.stroke();
				
				if(t0==3){
					ctx.fillStyle=color;
					ctx.fill();
				}
			}
			if(t1){
				ctx.beginPath();
				ctx.moveTo(b[0][1],oy);
				ctx.lineTo(b[0][1]-P0[0],oy+P0[1]);
				if(t1==1){
					ctx.moveTo(b[0][1],oy);
				}else if(P1){
					ctx.lineTo(b[0][1]-P0[0]-P1,oy);
				}
				ctx.lineTo(b[0][1]-P0[0],oy-P0[1]);
				
				if(t1>1){
					ctx.closePath();
				}
				ctx.stroke();

				if(t1==3){
					ctx.fillStyle=color;
					ctx.fill();
					//console.log(color);
				}

			}
			if(t2){
				ctx.beginPath();
				ctx.moveTo(ox,b[1][0]);
				ctx.lineTo(ox-P0[1],b[1][0]-P0[0]);
				if(t2==1){
					ctx.moveTo(ox,b[1][0]);
				}else if(P1){
					ctx.lineTo(ox,b[1][0]-P0[0]-P1);
				}
				ctx.lineTo(ox+P0[1],b[1][0]-P0[0]);
				
				
				if(t2>1){
					ctx.closePath();
				}
				ctx.stroke();
				
				if(t2==3){
					ctx.fillStyle=color;
					ctx.fill();
				}
			}
			if(t3){
				ctx.beginPath();
				ctx.moveTo(ox,b[1][1]);
				ctx.lineTo(ox-P0[1],b[1][1]+P0[0]);
				if(t3==1){
					ctx.moveTo(ox,b[1][1]);
				}else if(P1){
					ctx.lineTo(ox,b[1][1]+P0[0]+P1);
				}
				ctx.lineTo(ox+P0[1],b[1][1]+P0[0]);
				
				
				if(t3>1){
					ctx.closePath();
				}
				ctx.stroke();
				
				if(t3==3){
					ctx.fillStyle=color;
					ctx.fill();
				}
			}
		}

		var tk='tick',t='#'+tk;
		if(obj?obj.tick:$(t+'On').prop('checked')){//刻度

			var axisOn=obj?obj.axis:$(a+'On').prop('checked'),
				ox=Ox,oy=Oy,
				Rng=obj?obj.tick.range:$(t+'Range').val().trim(),
				aRng=obj?obj.axis.range:$(a+'Range').val().trim(),
				rng=Rng||axisOn && aRng?rng4(Rng?Rng:aRng):[[-Ox,cw-Ox],[Oy-ch,Oy]],
				b=[[ox+rng[0][0],ox+rng[0][1]],[oy-rng[1][0],oy-rng[1][1]]],
				x,y,X=[],Y=[],noEnd=axisOn && !Rng;

			$(obj?obj.tick.ticks:'span[for='+tk+'On] .multi').each(function(){
				var me=$(this),dxy=(obj?this.spacing:me.find('.'+tk+'Spacing').val()).split(','),
					dx=+dxy[0],dy=dxy[1]?+dxy[1]:dx,
					lxy=(obj?this.length:me.find('.'+tk+'Length').val()).split(','),
					lx=+lxy[0],ly=lxy[1]?+lxy[1]:lx,
					color=color2rgba(obj?this.color:me.find('.color'),!obj);

				ctx.beginPath();
				ctx.setLineDash([]);

				if(dx){
					x=ox+dx;
					while(x<=b[0][1] && !(noEnd && t1 && x==b[0][1])){
						if(lx>0 && X.indexOf(x)<0 || lx<0 && X.indexOf(-x)<0){
							X.push(lx>0?x:-x);
							ctx.moveTo(x,oy);
							ctx.lineTo(x,oy-lx);
						}
						x+=dx;
					}
					x=ox-dx;
					while(x>=b[0][0] && !(noEnd && t0 && x==b[0][0])){
						if(lx>0 && X.indexOf(x)<0 || lx<0 && X.indexOf(-x)<0){
							X.push(lx>0?x:-x);
							ctx.moveTo(x,oy);
							ctx.lineTo(x,oy-lx);
						}
						x-=dx;
					}
				}
				if(dy){
					y=oy+dy;
					while(y<=b[1][0] && !(noEnd && t2 && y==b[1][0])){
						if(ly>0 && Y.indexOf(y)<0 || ly<0 && Y.indexOf(-y)<0){
							Y.push(ly>0?y:-y);
							ctx.moveTo(ox,y);
							ctx.lineTo(ox+ly,y);
						}
						y+=dy;
					}
					y=oy-dy;
					while(y>=b[1][1] && !(noEnd && t3 && y==b[1][1])){
						if(ly>0 && Y.indexOf(y)<0 || ly<0 && Y.indexOf(-y)<0){
							Y.push(ly>0?y:-y);
							ctx.moveTo(ox,y);
							ctx.lineTo(ox+ly,y);
						}
						y-=dy;
					}
				}
				ctx.strokeStyle=color;
				ctx.stroke();
			});

		}
	},
	dot:function(obj){/*点
		obj={
			dot:[
			{
				pos:'',
				color:'',
			}
			]
		}
		*/
		var t='dot';
		if(obj?obj[t]:$('#'+t+'On').prop('checked')){//
			$(obj?obj[t]:'span[for='+t+'On] .multi').each(function(){
				var pos=obj?this.pos:$(this).find('.pos').val(), color=color2rgba(obj?this.color:$(this).find('.color'),!obj);
				var A=pos.split(/[;,]/g);
				for(var i=0;i<A.length;i++){
					var p=A[i].split(' ');
					ctx.beginPath();
					ctx.setLineDash([]);
					ctx.arc(+p[0],+p[1],1,0,2*Math.PI);
					ctx.strokeStyle=color;
					ctx.stroke();
				}
			});
		}
	},
	circle:function(obj){/*圆
		obj={
			circle:[
			{
				pos:'',	//中心坐标
				rad:'',	//半径
				通用属性

			}
			]
		}
		*/
		var t='circle';
		if(obj?obj[t]:$('#'+t+'On').prop('checked')){//
			$(obj?obj[t]:'span[for='+t+'On] .multi').each(function(){
				var pos=obj?this.pos:$(this).find('.pos').val(), rad=obj?this.rad:$(this).find('.rad').val(),
					dash=obj?(this.dash||[]):eval('['+$(this).find('.dash').val()+']'),
					color=color2rgba(obj?this.color:$(this).find('.stroke .color'),!obj),
					color2=color2rgba(obj?this.color2:$(this).find('.fill .color'),!obj);

				var A=pos.split(/[;,]/g), R=rad.split(/[ ;,]/g);
				ctx.setLineDash(dash);
				ctx.globalCompositeOperation=(obj?this.comp:$(this).find('.comp').val())||'source-over';
				shadow(obj,this);

				
				for(var i=0;i<A.length;i++){
					var p=A[i].split(' ');
					for(var j=0;j<R.length;j++){
						ctx.beginPath();
						ctx.arc(+p[0],+p[1],+R[j],0,2*Math.PI);
						if(color){
							ctx.strokeStyle=color;
							ctx.stroke();
						}
						if(color2){
							ctx.fillStyle=color2;
							ctx.fill();
						}
					}
				}
			});
		}
	},
	ellipse:function(obj){/*椭圆
		obj={
			ellipse:[
			{
				pos:'',		//box开头表示外接矩阵的四顶点坐标	四顶点需按相邻次序写
				rad:'',		//ra rb rc 半长轴 半短轴 半焦距
				rot:'',		//旋转度数

			}
			]
		}
		*/
		var t='ellipse';
		if(obj?obj[t]:$('#'+t+'On').prop('checked')){//
			$(obj?obj[t]:'span[for='+t+'On] .multi').each(function(){
				var div=$(this).children(':has(.multinput:checked)'),
					pos=obj?this.pos:div.find('.pos').val(), rad=(obj?this.rad:div.find('.rad').val())||'', rot=(obj?this.rot:div.find('.rot').val())||'',
					dash=obj?(this.dash||[]):eval('['+$(this).find('.dash').val()+']'),
					color=color2rgba(obj?this.color:$(this).find('.stroke .color'),!obj),
					color2=color2rgba(obj?this.color2:$(this).find('.fill .color'),!obj);
				var A=pos.split(/[;]/g), R=rad.split(/[;]/g), T=rot.split(/[ ;,]/g);
				ctx.setLineDash(dash);
				ctx.globalCompositeOperation=(obj?this.comp:$(this).find('.comp').val())||'source-over';
				shadow(obj,this);
				
				for(var i=0;i<A.length;i++){
					var p=A[i];
//console.log('p=',p,rad);
					if(!/\d \d/.test(p) || !obj && !rad){break};
					//console.log('rad='+rad+'?',!rad, 'R=',R);
					if(!rad){//四顶点或外接矩形顶点
						var box=/box/.test(p);
						p=Arrf(function(t){return Arrf(Number,t.split(' '))}, p.replace(/box/,'').split(','));
						var po=[Math.ceil((p[0][0]+p[2][0])/2),Math.ceil((p[0][1]+p[2][1])/2)],
							r=box?[Math.hypot(p[1][0]-p[0][0],p[1][1]-p[0][1])/2,Math.hypot(p[1][0]-p[2][0],p[1][1]-p[2][1])/2]:[Math.hypot(p[2][0]-p[0][0],p[2][1]-p[0][1])/2,Math.hypot(p[3][0]-p[1][0],p[3][1]-p[1][1])/2],
							ra=max(r), rb=min(r),
							T=Math.atan(box?(ra==r[0]?(p[1][1]-p[0][1])/(p[1][0]-p[0][0]):(p[1][1]-p[2][1])/(p[1][0]-p[2][0])):(ra==r[0]?(p[2][1]-p[0][1])/(p[2][0]-p[0][0]):(p[3][1]-p[1][1])/(p[3][0]-p[1][0])))/Math.PI*180;
						ctx.beginPath();
//console.log(po[0],po[1],ra,rb);
						ctx.ellipse(po[0],po[1],ra,rb,0,0,2*Math.PI);
						if(color){
							ctx.strokeStyle=color;
							ctx.stroke();
						}
						if(color2){
							ctx.fillStyle=color2;
							ctx.fill();
						}

					}else if(/ /.test(R[0])){//中心定位
						p=p.split(' ');
						//console.log(R,'p=',p);
						for(var j=0;j<R.length;j++){
							var r=R[j],ra=+(r.split('ra')[1]||r).split(' ')[0],rb=+(r.split('rb')[1]||r).split(' ')[0],rc=+(r.split('rc')[1]||r).split(' ')[0];
							if(!/ra/.test(r)){
								ra=Math.hypot(rb,rc);
							}
							if(!/rb/.test(r)){
								rb=Math.sqrt(ra*ra-rc*rc);
							}
//console.log('T=',T,'r=',r,'ra=',ra,'rb=',rb);
							for(var k=0;k<T.length;k++){
								ctx.beginPath();
					//	console.log(+p[0],+p[1],ra,rb,+T[k]||0);
								ctx.ellipse(+p[0],+p[1],ra,rb,+T[k]||0,0,2*Math.PI);
								if(color){
									ctx.strokeStyle=color;
									ctx.stroke();
								}
								if(color2){
									ctx.fillStyle=color2;
									ctx.fill();
								}
							}
						}
					}else{//两焦点定位
						p=p.split(',');
						var p0=Arrf(Number,p[0].split(' ')), p1=Arrf(Number,p[1].split(' ')),po=[Math.ceil((p0[0]+p1[0])/2),Math.ceil((p0[1]+p1[1])/2)], rc=Math.hypot(p1[0]-p0[0],p1[1]-p0[1])/2;
						for(var j=0;j<R.length;j++){
							var r=R[j],ra=+(r.split('ra')[1]||'').split(' ')[0],rb=+(r.split('rb')[1]||'').split(' ')[0];
						//	console.log(ra,rb,rc,po);
							if(!/ra/.test(r)){
								ra=Math.hypot(rb,rc);
							}
							if(!/rb/.test(r)){
								rb=Math.sqrt(ra*ra-rc*rc);
							}
							
							ctx.beginPath();

							ctx.ellipse(po[0],po[1],ra,rb,0,0,2*Math.PI);
							if(color){
								ctx.strokeStyle=color;
								ctx.stroke();
							}
							if(color2){
								ctx.fillStyle=color2;
								ctx.fill();
							}

						}
					}
				}
			});
		}
	},
	rect:function(obj){/*长方形
		obj={
			rect:[
			{
				pos:'',		//左上角顶点
				rad:'',		//长宽
				通用属性
			}
			]
		}
		*/
		var t='rect';
		if(obj?obj[t]:$('#'+t+'On').prop('checked')){//
			$(obj?obj[t]:'span[for='+t+'On] .multi').each(function(){
				var pos=obj?this.pos:$(this).find('.pos').val(), rad=obj?this.rad:$(this).find('.rad').val(),
					dash=obj?(this.dash||[]):eval('['+$(this).find('.dash').val()+']'),
					color=color2rgba(obj?this.color:$(this).find('.stroke .color'),!obj),
					color2=color2rgba(obj?this.color2:$(this).find('.fill .color'),!obj);
				var A=pos.split(/[;]/g), R=rad.split(/[;]/g);
				ctx.setLineDash(dash);
				ctx.globalCompositeOperation=(obj?this.comp:$(this).find('.comp').val())||'source-over';
				shadow(obj,this);
				
				for(var i=0;i<A.length;i++){
					var p=A[i].split(' ');
					for(var j=0;j<R.length;j++){
						var r=R[j].split(' ');
						ctx.beginPath();
						ctx.rect(+p[0],+p[1],+r[0],+r[1]);
						if(color){
							ctx.strokeStyle=color;
							ctx.stroke();
						}
						if(color2){
							ctx.fillStyle=color2;
							ctx.fill();
						}
					}
				}
			});
		}
	},
	line:function(obj){/*线段、多边形
		obj={
			line:[
			{
				pos:'',						//中心坐标
				rad2:'',					//圆角半径
				close:1,					//闭合

				
				通用属性

			}
			]
		}
		*/
		var t='line';
		if(obj?obj[t]:$('#'+t+'On').prop('checked')){//
			$(obj?obj[t]:'span[for='+t+'On] .multi').each(function(){
				var pos=obj?this.pos:$(this).find('.pos').val(), rad2=(obj?this.rad2:$(this).find('.rad2').val())||'',
					dash=obj?(this.dash||[]):eval('['+$(this).find('.dash').val()+']'),
					color=color2rgba(obj?this.color:$(this).find('.stroke .color'),!obj),
					color2=color2rgba(obj?this.color2:$(this).find('.fill .color'),!obj),

					close=obj?this.close:$(this).find('.close').prop('checked'),
				//	ArwType=obj?this.arrowType:$(this).find('.arrowType').val(),

				//	ArwPts=obj?this.arrowPoints:$(this).find('.arrowPoints').val().split(';'),
				//	P0=Arrf(Number,ArwPts[0].split(',')),P1=+ArwPts[1]||0;

					A=pos.split(/[;,]/g), B=[],//A终点坐标	B线段（以A点为终点）斜度、长度
					R=rad2 && !/[ ;,]/.test(rad2)?copyA(+rad2, A.length):Arrf(Number,rad2.split(/[ ;,]/g));
				//	W=ArwType && /^[0123]$/.test(ArwType)?copyA(+ArwType, A.length):Arrf(Number,ArwType.split(/[ ;,]/.test(ArwType)?/[ ;,]/g:''));
				if(A.length<3 && close){
					close=false;
				}
				for(var i=0;i<A.length;i++){
					var a=A[i],p=a.split(' '),b=A[i-1];
					if(/[dl]/.test(a)){
						var l=+p[1].substr(1),d=Math.PI*(+p[0].substr(1))/180;
						A[i]=[b[0]+Math.round(l*Math.cos(d)), b[1]-Math.round(l*Math.sin(d))];
						B[i]=[d,l];
					}else{
						A[i]=[+p[0],+p[1]];
						if(i){
							var l=Math.hypot(+p[0]-b[0],+p[1]-b[1]),d=atan(-(+p[1]-b[1]),+p[0]-b[0]);
							B[i]=[d,l];
						}
						
					}
				}
				if(close){
					
					var l=Math.hypot(A[0][0]-A[A.length-1][0],A[0][1]-A[A.length-1][1]), d=atan(-(A[0][1]-A[A.length-1][1]),A[0][0]-A[A.length-1][0]);
					A.push(A[0]);
					B[0]=[d,l];
					B.push([d,l],B[1]);
					if(rad2){
						R.push(R[0]);
					}
				}

				ctx.setLineDash(dash);
				ctx.globalCompositeOperation=(obj?this.comp:$(this).find('.comp').val())||'source-over';
				shadow(obj,this);
				
				ctx.beginPath();
				for(var i=0;i<A.length;i++){
				//	console.log('A'+i,'/',A.length,'B'+i,B[i]);
					var p=A[i], a=B[i], b=B[i+1];
					if(i){
						if(rad2 && R[i] && b && Math.abs(a[0]-b[0])>0.01 && Math.abs(Math.abs(a[0]-b[0])-Math.PI)>0.01 ){/*圆角半径
							tan2a=2tana/(1-tana^2)
								tan2a(tana^2 - 1)+2tana=0
								tana=-2+-根号(4+4tan^2(2a)) /2tan2a = -1+-根号(1+tan^2(2a)) /tan2a =(令x=1/tan2a) -x +- 根号(x^2 +1) = -e^(sh^(-1)x) 或 1/e^(sh^(-1)x)=e^(-sh^(-1)x)
							tan(a+b)= (tana+tanb) / (1- tana*tanb)
							tan((a+b)/2)= -e^(sh^(-1)x) 或 1/e^(sh^(-1)x) [其中x=1/tan(a+b) = (1- tana*tanb)/(tana+tanb)]
							
							两线段夹角平分线斜率 = 
							
							设相邻线段夹角为a = 180° - （线段2斜角-线段1斜角）
							偏移长度l：半径*|cot(a/2)| = 半径/|tan(a/2)| = 半径*|tan((线段2斜角-线段1斜角)/2)|
										
							偏移坐标：偏移长度l*cos(线段1斜角), 偏移长度l*sin(线段1斜角)
									偏移长度l*cos(线段2斜角), 偏移长度l*sin(线段2斜角)
									
									也可以用 l/边长 * dx （按介点比例计算坐标）
							*/
						//	console.log(i,b,a,R[i]);
						//	console.log(i,b[0],a[0],R[i]);
							var l=R[i]*Math.abs(Math.tan((b[0]-a[0])/2)),
								dx=[Math.round(l*Math.cos(a[0])), Math.round(l*Math.cos(b[0]))],
								dy=[Math.round(l*Math.sin(a[0])), Math.round(l*Math.sin(b[0]))];
							ctx.lineTo(p[0]-dx[0],p[1]+dy[0]);
							
							//ctx.lineTo(p[0]+dx[1],p[1]-dy[1]);
							ctx.arcTo(p[0],p[1],p[0]+dx[1],p[1]-dy[1],R[i]);
						}else{
							ctx.lineTo(p[0],p[1]);
						}
						//if(close && i==A.length-1){
						
						
						
						//}
						
					}else{
						
						if(close && rad2 && R[0]){
							var l=R[0]*Math.abs(Math.tan((b[0]-a[0])/2)),
								dx=[Math.round(l*Math.cos(a[0])), Math.round(l*Math.cos(b[0]))],
								dy=[Math.round(l*Math.sin(a[0])), Math.round(l*Math.sin(b[0]))];
							ctx.moveTo(p[0]+dx[1],p[1]-dy[1]);
							
						}else{
							ctx.moveTo(p[0],p[1]);
						}
					}

				}
				if(color){
					ctx.strokeStyle=color;
					ctx.stroke();
				}
				if(color2){
					ctx.fillStyle=color2;
					ctx.fill();
				}

			});
		}
	},
	isogon:function(obj){/*正多边形
		obj={
			isogon:[
			{
				center:0或1					//是否中心定位
				pos:'',						//起点（或中心）坐标
				rad:'',						//半径|边长
				rad2:'',					//圆角半径
				rot:'',						//起始边（半径）偏移X轴度数
				dir:0或1					//逆时针1，顺时针0（决定第2条边走向）
				line:''						//边数
				通用属性

			}
			]
		}
		*/
		var t='isogon';
		if(obj?obj[t]:$('#'+t+'On').prop('checked')){//
			$(obj?obj[t]:'span[for='+t+'On] .multi').each(function(){
				var div=$(this).children(':has(.multinput:checked)'), center=obj?this.center:div.index()==0,
					pos=(obj?this.pos:div.find('.pos').val())||'', line=(obj?this.line:$(this).find('.line').val())||'',
					rad=(obj?this.rad:div.find('.rad').val())||'', rad2=(obj?this.rad2:$(this).find('.rad2').val())||'',
					rot=(obj?this.rot:div.find('.rot').val())||'', dir=obj?(this.dir||0):div.find('.dir:checked').length,
					dash=obj?(this.dash||[]):eval('['+$(this).find('.dash').val()+']'),
					color=color2rgba(obj?this.color:$(this).find('.stroke .color'),!obj),
					color2=color2rgba(obj?this.color2:$(this).find('.fill .color'),!obj),


					S=pos.split(/[;,]/g),A=[], B=[],//各边倾斜弧度
					R=rad.split(/[;, ]/g), L=line.split(/[;, ]/g), T=rot.split(/[ ;,]/g);


				if(!pos || !line || !rad){return false}
				for(var i=0;i<S.length;i++){
					var a=S[i],p=Arrf(Number,a.split(' '));
				//	console.log(i,'/',S.length,'a=',a,'p=',p);
					if(center){//中心定位

						for(var r=0;r<R.length;r++){//半径
							var d=+R[r];
							for(var t=0;t<T.length;t++){//起始半径旋转度数
								var o=+T[t];
								for(var j=0;j<L.length;j++){//边数
									var n=+L[j],len=d*Math.sin(Math.PI*4/n)*2, P=[], BI=[];
									for(var k=0;k<n;k++){
										var g=(o+360*k/n)*Math.PI/180;
										P.push([p[0]+Math.round(d*Math.cos(g)), p[1]-Math.round(d*Math.sin(g))]);
									//	console.log(k,'P=',P);
										if(k){
											BI.push([atan(-(P[k][1]-P[k-1][1]),P[k][0]-P[k-1][0]),len]);
										}
									}
									P.push(P[0]);
									
								//	console.log(P);

									BI.unshift([atan(-(P[0][1]-P[n-1][1]),P[0][0]-P[n-1][0]),len]);
									BI.push(BI[0],BI[1]);
									A.push(P);
									B.push(BI);
								}
							}
						}

					}else{//起点定位
						for(var r=0;r<R.length;r++){//边长
							var d=+R[r];
							for(var t=0;t<T.length;t++){//起始边旋转度数
								var o=+T[t];
								for(var j=0;j<L.length;j++){//边数
									var n=+L[j], d0=360/n, P=[], BI=[];//d0外角度数
									P.push(p);
									BI.push([o*Math.PI/180,d]);//第2个点，作为终边，的斜度、长度			2 3 1
									
									for(var k=1;k<n;k++){
										var g=(o+d0*k*(dir?1:-1))*Math.PI/180, Q=P[k-1];
										P.push([Q[0]+Math.round(d*Math.cos(g)), Q[1]-Math.round(d*Math.sin(g))]);
										BI.push([g,d]);

									}
									P.push(P[0]);

									BI.unshift(BI[BI.length-1]);
									console.log(BI);
									A.push(P);
									B.push(BI);
								}
							}
						}
						
					}

				}
//console.log(A,B);

				ctx.setLineDash(dash);
				ctx.globalCompositeOperation=(obj?this.comp:$(this).find('.comp').val())||'source-over';
				shadow(obj,this);
				
				
				
				for(var j=0;j<A.length;j++){
					var J=A[j], K=B[j], R2=rad2 && !/[ ;,]/.test(rad2)?copyA(+rad2, J.length):Arrf(Number,rad2.split(/[ ;,]/g));
					ctx.beginPath();
					
					for(var i=0;i<J.length;i++){

						var p=J[i], a=K[i], b=K[i+1];
						if(i){
							if(rad2 && R2[i] && b){/*圆角半径

								
								设相邻线段夹角为a = 180° - (线段2斜角-线段1斜角)
								偏移长度l：半径*|cot(a/2)| = 半径*|tan((线段2斜角-线段1斜角)/2)|
											
								偏移坐标：偏移长度l*cos(线段1斜角), 偏移长度l*sin(线段1斜角)
										偏移长度l*cos(线段2斜角), 偏移长度l*sin(线段2斜角)
								*/
							//	console.log(i,b,a,R[i]);
							//	console.log(i,b[0],a[0],R[i]);
								var l=R2[i]*Math.abs(Math.tan((b[0]-a[0])/2)),
									dx=[Math.round(l*Math.cos(a[0])), Math.round(l*Math.cos(b[0]))],
									dy=[Math.round(l*Math.sin(a[0])), Math.round(l*Math.sin(b[0]))];
								ctx.lineTo(p[0]-dx[0],p[1]+dy[0]);
								
								//ctx.lineTo(p[0]+dx[1],p[1]-dy[1]);
								ctx.arcTo(p[0],p[1],p[0]+dx[1],p[1]-dy[1],R2[i]);
							}else{
								ctx.lineTo(p[0],p[1]);
							}

							
						}else{
							
							if(rad2 && R2[0]){
								var l=R2[0]*Math.abs(Math.tan((b[0]-a[0])/2)),
									dx=[Math.round(l*Math.cos(a[0])), Math.round(l*Math.cos(b[0]))],
									dy=[Math.round(l*Math.sin(a[0])), Math.round(l*Math.sin(b[0]))];
								ctx.moveTo(p[0]+dx[1],p[1]-dy[1]);
								
							}else{
								ctx.moveTo(p[0],p[1]);
							}
						}

					}
					if(color){
						ctx.strokeStyle=color;
						ctx.stroke();
					}
					if(color2){
						ctx.fillStyle=color2;
						ctx.fill();
					}
				}
			});
		}
	},
	text:function(obj){/*文字
		obj={
			text:[
			{
				pos:'',			//位置
				font:'',		//字体
				value:'',		//内容
				halign:'',		//水平对齐 center|end|left|right|start
				valign:'',		//垂直对齐 alphabetic|top|hanging|middle|ideographic|bottom
				通用属性
			}
			]
		}
		*/
		var t='txt';
		if(obj?obj[t]:$('#'+t+'On').prop('checked')){//
			$(obj?obj[t]:'span[for='+t+'On] .multi').each(function(i){
				var pos=obj?this.pos:$(this).find('.pos').val(),
					font=(obj?this.font:$(this).find('.font').val())||'20px 微软雅黑',
					v=obj?this.value:$(this).find('.value').val(),
					ha=(obj?this.halign:$(this).find('.halign').val())||'center',
					va=(obj?this.valign:$(this).find('.valign').val())||'middle',
					color=color2rgba(obj?this.color:$(this).find('.stroke .color'),!obj),
					color2=color2rgba(obj?this.color2:$(this).find('.fill .color'),!obj);
				var A=pos.split(/[;]/g);

				ctx.globalCompositeOperation=(obj?this.comp:$(this).find('.comp').val())||'source-over';
				shadow(obj,this);
				
				for(var i=0;i<A.length;i++){
					var p=A[i].split(' ');

					ctx.font=font;
					ctx.textAlign=ha;
					ctx.textBaseline=va;
					if(color){
						ctx.strokeStyle=color;
						ctx.strokeText(v,+p[0],+p[1]);
					}
					if(color2){
						ctx.fillStyle=color2;
						ctx.fillText(v,+p[0],+p[1]);
					}

				}
			});
		}
	},
};