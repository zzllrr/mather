/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
/*
path A(rx ry x-axis-rotation large-arc-flag sweep-flag x y)
rx ry 是椭圆的两个半轴的长度。
x-axis-rotation 是椭圆相对于坐标系的旋转角度，角度数而非弧度数。
large-arc-flag 是标记绘制大弧(1)还是小弧(0)部分。
sweep-flag 是标记向顺时针(1)还是逆时针(0)方向绘制。
x y 是圆弧终点的坐标。
*/
function mMv(e,repaint){

	if(!repaint){
		var eos=e.originalEvent.srcElement, act=eos.tagName;
		if(act!='CANVAS'){e.stopPropagation()}
	}
	
	
	var X=document.documentElement.scrollLeft+e.clientX, Y=document.documentElement.scrollTop+e.clientY, WD, HT, DEG='';
	L.X=X;
	L.Y=Y;

	var shp=L.drawShape, shp0=/Note|Grid/.test(shp), shp1=/Poly/.test(shp),shp2=/Crop/.test(shp), shp3=/Paral|Trape|(lineangle|Triangon)[HV]|Line3YRight|cub/.test(shp), 
		shpN=$('#'+(L.drawShapeNow||'unknown')), chd=shpN.children(),
		x0=+L.X0, y0=+L.Y0, offX=X-x0, offY=Y-y0, rnd=/A|Rnd/.test(shp), lt=offX<0?X:x0, tp=offY<0?Y:y0,
		MCO=$('[name=MarginCopyOpt]:checked').val(),isMargin=MCO=='w',isCpy=MCO=='copy', n=+$('#copyNum').val(),
		l=+$('#Arc3on').parent().next().val(), lR=+$('#Rton').parent().next().val();

	if(L.drawEnd=='no'){

		var sw=+$('#strkW').val(), d=Math.ceil(sw/2), w=Math.abs(offX), h=Math.abs(offY), wh=w>h, hv=/H/.test(shp), io=/I/.test(shp), isSq=/Sq/.test(shp);
		
		if(!(shp1 || shp2 || shp3) && L.drawEnd2=='' && w>sw && h>sw){
			
			mUp(e);
		}

		if(shp0 && w<=sw && h<=sw){
			return
		}


		
		if(/Sq|Penta|Heart|Equi/.test(shp)){
			if(/Sq|Penta|Heart|Right[tx]Equi/.test(shp) && !(shp=='LineSq' || /cub/.test(shp) && L.drawEnd2=='no')){
				w=max([w,h]);h=w;
			}

			if(/Equi/.test(shp)){
				if(/Moon/.test(shp)){
					if(wh){
						w=max([w,h*2]);h=Math.ceil(w/2);
					}else{
						h=max([h,w*2]);w=Math.ceil(h/2);
					}

				}
				
				var t=Math.sqrt(3);
				if(/Iso|Line3Y/.test(shp)){
					if(wh == /Iso/.test(shp)){
						w=max([w,parseInt(h*2/t)]);h=Math.ceil(w*t/2);
					}else{
						h=max([h,parseInt(w*2/t)]);w=Math.ceil(h*t/2);
					}
				}

			}

			offX=offX<0?-w:w;
			offY=offY<0?-h:h;
			X=x0+offX;
			Y=y0+offY;
		}

		var w2=Math.ceil(w/2), h2=Math.ceil(h/2), px=(offX<0?w:0), py=(offY<0?h:0), r=+$('#strkR').val(), rY=+$('#strkRy').val(), tArr=[], pnt, c=+(offX*offY>0);
		lt=offX<0?X:x0;
		tp=offY<0?Y:y0;

		if(/Rect|Crop|Grid/.test(shp)){
			var isCrop=/Crop/.test(shp);

			WD=w+(isCrop?2:sw);
			HT=h+(isCrop?2:sw);
			shpN.css(ltwh([lt+(isCrop?-2:0),tp+(isCrop?-2:0),WD,HT]));
			chd.filter('rect').attr({width:w,height:h});
			

			if(/LRect/.test(shp)){
				
				chd.filter('.Diagonal').attr('d','M'+d+' '+d+'L'+w+' '+h+'M'+d+' '+(h+d)+'L'+(w+d)+' '+d);
				chd.filter('.Medians').attr('d',
					'M'+sw+' '+sw+'L'+w+' '+(h2+d)+'M'+sw+' '+sw+'L'+(w2+d)+' '+(h+d)+
					'M'+sw+' '+(h+d)+'L'+w+' '+(h2+d)+'M'+sw+' '+(h+d)+'L'+(w2+d)+' '+sw+
					'M'+(w+d)+' '+sw+'L'+sw+' '+(h2+d)+'M'+(w+d)+' '+sw+'L'+(w2+d)+' '+(h+d)+
					'M'+(w+d)+' '+(h+d)+'L'+sw+' '+(h2+d)+'M'+(w+d)+' '+(h+d)+'L'+(w2+d)+' '+sw
				);
				chd.filter('.MidPointLine').attr('d','M'+sw+' '+(h2+d)+'L'+(w2+d)+' '+sw+'L'+(w+sw)+' '+(h2+d)+'L'+(w2+d)+' '+(h+sw)+'z');
				chd.filter('.OppositeMidPointLine').attr('d','M'+sw+' '+(h2+d)+'H'+(w+sw)+'M'+(w2+d)+' '+sw+'V'+(h+sw));
			}

			
			if(/Grid/.test(shp)){
				shpN.attr('data-txta',[lt,tp,WD,HT].join(','));
			}

			
			if(isCrop){
				$('#scrW').val(w);
				$('#scrH').val(h)
			}
			var cwh=isCrop?w+'x'+h:WD+'x'+HT;
			$('#tileTool').attr('tip',cwh);
		}

		if(/Ellips/.test(shp)){
			WD=w+sw*2;
			HT=h+sw*2;
			shpN.css(ltwh([lt,tp,WD,HT]));
			chd.filter('ellipse').attr({cx:w2+sw,cy:h2+sw,rx:w2,ry:h2});
			
			chd.filter('.Diameter').eq(0).attr('d','M'+sw+' '+(h2+d)+'H'+(w+sw));
			chd.filter('.Diameter').eq(1).attr('d','M'+(w2+sw)+' '+d+'V'+(h+sw));

			var Ex=+$('#Equatorxon').next().val(),Ey=+$('#Equatoryon').next().val();
			chd.filter('.Equatorx:eq(0)').attr('d',Ex? 'M'+sw+' '+(h2+sw)+'A'+w2+' '+Ex+' 0 0 0 '+(w+sw)+' '+(h2+sw): 'M'+sw+' '+(h2+sw)+'H'+(w+sw));
			chd.filter('.Equatorx:eq(1)').attr('d',Ex? 'M'+sw+' '+(h2+sw)+'A'+w2+' '+Ex+' 0 0 1 '+(w+sw)+' '+(h2+sw): 'M'+sw+' '+(h2+sw)+'H'+(w+sw));
			chd.filter('.Equatory:eq(0)').attr('d',Ex? 'M'+(w2+sw)+' '+sw+'A'+Ey+' '+h2+' 0 0 0 '+(w2+sw)+' '+(h+sw): 'M'+(w2+sw)+' '+sw+'V'+(h+sw));
			chd.filter('.Equatory:eq(1)').attr('d',Ex? 'M'+(w2+sw)+' '+sw+'A'+Ey+' '+h2+' 0 0 1 '+(w2+sw)+' '+(h+sw): 'M'+(w2+sw)+' '+sw+'V'+(h+sw));
		}



		if(/conoid/.test(shp)){
			WD=w+sw*2;
			HT=h+sw*2;
			shpN.css(ltwh([lt,tp,WD,HT]));

			if(io){
				if(hv){

					chd.filter('path').eq(0).attr('d', offX<0? 
						'M'+(w-r)+' '+sw+'A'+r+' '+(h2+sw)+' 0 0 0 '+(w-r)+' '+(h+sw)+'L'+sw    +' '+(h2+sw)+'z':
						'M'+(r+sw*2)  +' '+sw+'A'+r+' '+(h2+sw)+' 0 0 1 '+(r+sw*2)  +' '+(h+sw)+'L'+(w+sw)+' '+(h2+sw)+'z'
					);
					chd.filter('ellipse').attr({cy:(h2+sw), cx:offX<0?(w-r+sw):(r+d), ry:(h2), rx:r-sw});
					chd.filter('.Altitude1,.Altitude2').attr('d', offX<0? 'M'+(w-r+sw)+' '+(h2+sw)+'H'+sw: 'M'+(r+sw)+' '+(h2+sw)+'H'+(w+sw));
					chd.filter('.Diameter').attr('d', 'M'+(offX<0? w-r+sw+d: r+d)+' '+sw+'V'+(h+sw));
					
				}else{
					chd.filter('path').eq(0).attr('d', offY<0? 
						'M'+sw+' '+(h-r+sw)+'A'+(w2+sw)+' '+r+' 0 0 1 '+(w+sw)+' '+(h-r+sw)+'L'+(w2+sw)+' '+sw	  +'z':
						'M'+sw+' '+(r+sw)  +'A'+(w2+sw)+' '+r+' 0 0 0 '+(w+sw)+' '+(r+sw)  +'L'+(w2+sw)+' '+(h+sw)+'z'
					);
					chd.filter('ellipse').attr({cx:(w2+sw), cy:offY<0?(h-r+sw*2):(r-d), rx:(w2), ry:r-sw});
					chd.filter('.Altitude1,.Altitude2').attr('d', offY<0? 'M'+(w2+sw)+' '+(h-r+sw)+'V'+sw: 'M'+(w2+sw)+' '+(r+sw)+'V'+(h+sw));
					chd.filter('.Diameter').attr('d', 'M'+sw+' '+(offY<0? h-r+sw+d: r+d)+'H'+(w+sw));
					
				}
				
			}else{
				if(hv){

					chd.filter('ellipse').attr({cy:(h2+sw), cx:offX<0?(w-r+d):(r+d), ry:max([h2-sw,1]), rx:r-sw-d});
					chd.filter('path.backvisi').attr('d', offX<0?
						'M'+(w-r+sw)+' '+sw+'A'+r+' '+(h2+sw)+' 0 0 0 '+(w-r+sw)+' '+(h+sw):
						'M'+(r+sw)  +' '+sw+'A'+r+' '+(h2+sw)+' 0 0 1 '+(r+sw)	+' '+(h+sw)
					);
					chd.filter('path').eq(1).attr('fill-opacity',0.8).attr('d', offX<0?
						'M'+(w-r+sw)+' '+sw+'A'+r+' '+(h2+sw)+' 0 0 1 '+(w-r+sw)+' '+(h+sw)+'L'+sw    +' '+(h2+sw)+'z':
						'M'+(r+sw)  +' '+sw+'A'+r+' '+(h2+sw)+' 0 0 0 '+(r+sw)  +' '+(h+sw)+'L'+(w+sw)+' '+(h2+sw)+'z'
					);

					chd.filter('.Altitude1,.Altitude2').attr('d', offX<0? 'M'+(w-r+sw)+' '+(h2+sw)+'H'+sw: 'M'+(r+sw)+' '+(h2+sw)+'H'+(w+sw));
					chd.filter('.Diameter').attr('d', 'M'+(offX<0? w-r+sw: r+sw)+' '+sw+'V'+(h+sw));
					

				}else{
					chd.filter('ellipse').attr({cx:(w2+sw), cy:offY<0?(h-r+d):(r+d), rx:max([w2-sw,1]), ry:r-sw-d});
					chd.filter('path.backvisi').attr('d', offY<0?
						'M'+sw+' '+(h-r+sw)+'A'+(w2+sw)+' '+r+' 0 0 1 '+(w+sw)+' '+(h-r+sw):
						'M'+sw+' '+(r+sw)  +'A'+w2     +' '+r+' 0 0 0 '+(w+sw)+' '+(r+sw)
					);
					chd.filter('path').eq(1).attr('fill-opacity',0.8).attr('d', offY<0?
						'M'+sw+' '+(h-r+sw)+'A'+(w2+sw)+' '+r+' 0 0 0 '+(w+sw)+' '+(h-r+sw)+'L'+(w2+sw)+' '+    sw+'z':
						'M'+sw+' '+(r+sw)  +'A'+(w2+sw)+' '+r+' 0 0 1 '+(w+sw)+' '+(r+sw)  +'L'+(w2+sw)+' '+(h+sw)+'z'
					);

					chd.filter('.Altitude1,.Altitude2').attr('d', offY<0? 'M'+(w2+sw)+' '+(h-r+sw)+'V'+sw: 'M'+(w2+sw)+' '+(r+sw)+'V'+(h+sw));
					chd.filter('.Diameter').attr('d', 'M'+sw+' '+(offY<0? h-r+sw: r+sw)+'H'+(w+sw));
				}

				
			}
		}


		if(/cylinderoid/.test(shp)){
			WD=w+sw*2;
			HT=h+sw*2;
			shpN.css(ltwh([lt,tp,WD,HT]));


			if(hv){
				chd.filter('ellipse').eq(+(offX>0)).attr({cy:(h2+sw), cx:w-r+(offX<0?sw:sw*2), ry:(h2), rx:r-sw});
				chd.filter('ellipse').eq(+(offX<0)).attr({cy:(h2+sw), cx:r+(offX<0?0:sw), 	   ry:(h2), rx:r-sw});
				
				chd.filter('path.backvisi').attr('d', offX<0?
					'M'+(w-r+sw)+' '+sw+'A'+r+' '+(h2+sw)+' 0 0 0 '+(w-r+sw)+' '+(h+sw):
					'M'+(r+sw)  +' '+sw+'A'+r+' '+h2	 +' 0 0 1 '+(r+sw)	+' '+(h+sw)
				);
				
				chd.filter('path').eq(1).attr('d', 
					'M'+(w-r+sw)+' '+sw+'A'+(r)+' '+(h2+sw)+' 0 0 '+(+(offX<0))+' '+(w-r+sw)+' '+(h+sw)+
					'H'+(r+sw)		   +'A'+(r)+' '+(h2+sw)+' 0 0 '+(+(offX>0))+' '+(r+sw)	+' '+sw+'z'
				);

				
				chd.filter('.Altitude1,.Altitude2').attr('d', 'M'+(r+sw)+' '+(h2+sw)+'H'+(w-r+sw));
				chd.filter('.Diameter').attr('d', 'M'+(offX<0? w-r+sw+d: r+d)+' '+sw+'V'+(h+sw));
				
			}else{
				chd.filter('ellipse').eq(+(offY>0)).attr({cx:(w2+sw), cy:h-r+(offY<0?sw:sw*2), rx:(w2), ry:r-sw});
				chd.filter('ellipse').eq(+(offY<0)).attr({cx:(w2+sw), cy:r+(offY<0?0:sw), 	   rx:(w2), ry:r-sw});
				
				chd.filter('path.backvisi').attr('d', offY<0?
					'M'+sw+' '+(h-r+sw)+'A'+(w2+sw)+' '+r+' 0 0 1 '+(w+sw)+' '+(h-r+sw):
					'M'+sw+' '+(r+sw)  +'A'+w2     +' '+r+' 0 0 0 '+(w+sw)+' '+(r+sw)
				);
				
				chd.filter('path').eq(1).attr('d', 
					'M'+sw+' '+(h-r+sw)+'A'+(w2+sw)+' '+(r)+' 0 0 '+(+(offY>0))+' '+(w+sw)+' '+(h-r+sw)+
					'V'+(r+sw)		   +'A'+(w2+sw)+' '+(r)+' 0 0 '+(+(offY<0))+' '+sw	 +' '+(r+sw)+'z'
				);

				
				chd.filter('.Altitude1,.Altitude2').attr('d', 'M'+(w2+sw)+' '+(r+sw)+'V'+(h-r+sw));
				chd.filter('.Diameter').attr('d', 'M'+sw+' '+(offY<0? h-r+sw+d: r+d)+'H'+(w+sw));
				
			}

		}



		if(/Line[^3]/.test(shp) || shp=='Line'){
			var Shp=shp;
			if(shp=='LineSq'){
				var t=Math.atan2(h,w)/Math.PI;
				if(t>=0 && t<1/8 ){Shp='LineH'}
				if(t>=1/8 && t<3/8 ){Shp='LineD'}
				if(t>=3/8 && t<1/2 ){Shp='LineV'}
			}
			if(Shp=='LineH'){h=0;Y=y0}
			if(Shp=='LineV'){w=0;X=x0}
			if(Shp=='LineD'){if(w>h){h=w;Y=y0-h}else{w=h;X=x0-w}}

			var x1=(offX<0?w:0), y1=(offY<0?h:0), x2=(offX<0?0:w), y2=(offY<0?0:h);

			var x3=x1, x4=x2, y3=y1, y4=y2;

			if(Shp=='LineH'){y1=0;y2=y1}
			if(Shp=='LineV'){x1=0;x2=x1}

			if(/X/.test(Shp)){if(w>h){y3=y2;y4=y1}else{x3=x2;x4=x1}}
			if(/Cross/.test(Shp)){
				
				y1=h2;y2=y1;x3=w2;x4=x3;
				
			}

			lt=offX<0?X:x0;
			tp=offY<0?Y:y0;

			WD=w+sw*4;
			HT=h+sw*4;


			shpN.css(ltwh([lt,tp,WD,HT]));
			chd.filter('line').attr({x1:x1,y1:y1,x2:x2,y2:y2,transform:'translate('+sw*(wh?1:2)+','+sw*(wh?2:1)+')'});

			if(/X|Cross/.test(Shp)){chd.filter('line:eq(1)').attr({x1:x3,y1:y3,x2:x4,y2:y4})}



		}
		if(/Line3[TE][HV]/.test(shp)){
			var x1=(offX<0?w:0), y1=(offY<0?h:0), x2=(offX<0?0:w), y2=(offY<0?0:h),LA;
			if(hv){
				if(/T/.test(shp)){
					LA=[[[x1,h2],[x2,h2]], [[x1,h2],[x1,y1]], [[x1,h2],[x1,y2]]];
				}else{
					LA=[[[x1,h2],[x2,h2]], [[x1,h2],[x2,y1]], [[x1,h2],[x2,y2]]];
				}
				
			}else{
				if(/T/.test(shp)){
					LA=[[[w2,y1],[w2,y2]], [[w2,y1],[x1,y1]], [[w2,y1],[x2,y1]]];
				}else{
					LA=[[[w2,y1],[w2,y2]], [[w2,y1],[x1,y2]], [[w2,y1],[x2,y2]]];
				}
			}
			
			lt=offX<0?X:x0;
			tp=offY<0?Y:y0;

			WD=w+sw*4;
			HT=h+sw*4;

			shpN.css(ltwh([lt,tp,WD,HT]));
			chd.filter('line').each(function(i){
				var P=LA[i];
				$(this).attr({x1:P[0][0],y1:P[0][1],x2:P[1][0],y2:P[1][1],transform:'translate('+sw*2+','+sw*2+')'});
			});
	

		}
		if(/Line3Y/.test(shp)){
			var x1=(offX<0?w:0), y1=(offY<0?h:0), x2=(offX<0?0:w), y2=(offY<0?0:h),LA;
			
			if(/Right/.test(shp)){
				if(L.drawEnd2==''){

					lt=offX<0?X:x0;
					tp=offY<0?Y:y0;

					WD=w+sw*4;
					HT=h+sw*4;


					shpN.css(ltwh([lt,tp,WD,HT]));
					chd.filter('line').each(function(i){
						$(this).attr({x1:px,y1:py, x2:(i==1?px:w-px),y2:(i==2?py:h-py),transform:'translate('+sw*2+','+sw*2+')'});
					});
				

				}else{

					var x1=+L.X1, offx=x1-x0, offX1=X-x1, w0=Math.abs(offx);
					var y1=+L.Y1, offy=y1-y0, offY1=Y-y1, h0=Math.abs(offy);
					

					lt=min([x0,x1,X]);
					tp=min([y0,y1,Y]);


					WD=(offx*offX>0?max([w0,w]):w+w0);
					HT=(offy*offY>0?max([h0,h]):h+h0);
					
					
					var LN=shpN.css(ltwh([lt,tp,WD+sw*4,HT+sw*4])).children('line');

					x1=offX>0 && offx>0?0:(offX>0 && offx<0 || offX<0 && offx<0 && offX1>=0?w0:(offX<0 && (offx>0 || offx<0 && offX1<0)?w:-1));
					y1=offY>0 && offy>0?0:(offY>0 && offy<0 || offY<0 && offy<0 && offY1>=0?h0:(offY<0 && (offy>0 || offy<0 && offY1<0)?h:-1));
					
					x2=offX>0 && offx>0?w:(offX>0 && offx<0?WD:(offX<0 && (offx>0 || offx<0 && offX1<=0)?0:(offX<0 && offx<0 && offX1>0?offX1:-1)));
					y2=offY>0 && offy>0?h:(offY>0 && offy<0?HT:(offY<0 && (offy>0 || offy<0 && offY1<=0)?0:(offY<0 && offy<0 && offY1>0?offY1:-1)));

					LN.eq(0).attr({x1:x1, y1:y1, x2:x2, y2:y2});
					LN.eq(1).attr({x1:x1, y1:y1, x2:x1, y2:y1+offy});
					LN.eq(2).attr({x1:x1, y1:y1, x2:x1+offx, y2:y1});
//console.log(x1,y1,x2,y2);


					if(!isSq){
						DEG=' ∠'+(Math.atan2(h,w)*180/Math.PI).toFixed(2)+'°'
					}
				}
				
			}else{
				
				if(wh){
					if(/Equi/.test(shp)){
						w2=Math.ceil(w*(offX<0?2:1)/3)
					}
					LA=[[[w2,h2],[x2,h2]], [[w2,h2],[x1,y1]], [[w2,h2],[x1,y2]]];

				}else{
					if(/Equi/.test(shp)){
						h2=Math.ceil(h*(offY<0?2:1)/3)
					}
					LA=[[[w2,h2],[w2,y2]], [[w2,h2],[x1,y1]], [[w2,h2],[x2,y1]]];

				}
				
				lt=offX<0?X:x0;
				tp=offY<0?Y:y0;

				WD=w+sw*4;
				HT=h+sw*4;

				shpN.css(ltwh([lt,tp,WD,HT]));
				chd.filter('line').each(function(i){
					var P=LA[i];
					$(this).attr({x1:P[0][0],y1:P[0][1],x2:P[1][0],y2:P[1][1],transform:'translate('+sw*2+','+sw*2+')'});
				});
		
			}
		}



		if(/cub/.test(shp)){

			px=(offX<0?w-sw:sw); py=(offY<0?h-sw:sw);


			if(L.drawEnd2==''){

				lt=offX<0?X:x0;
				tp=offY<0?Y:y0;

				WD=w+sw;
				HT=h+sw;

				shpN.css(ltwh([lt,tp,WD,HT]));
				chd.filter('polygon.main').each(function(i){
					$(this).attr({points:[px,py, w+sw-px,py, w+sw-px, h+sw-py, px,h+sw-py].join(' ')});
				});

			}else{
				//X0 X1 X
					var x1=+L.X1, offx=x1-x0, offX1=X-x1, w0=Math.abs(offx);//w0=长方形宽
					var y1=+L.Y1, offy=y1-y0, offY1=Y-y1, h0=Math.abs(offy);
					

					lt=min([x0,x1,X]);
					tp=min([y0,y1,Y]);


					var PA=[[[x0, y0], [x1, y0], [x1, y1], [x0, y1] ], [[X-offx, Y-offy], [X, Y-offy], [X, Y], [X-offx, Y] ]]; //x0+offX1=x0+X-x1=X-offx
/*
					WD=(offx*offX>0?w:Math.abs(offX1)+w0);
					HT=(offy*offY>0?h:Math.abs(offY1)+h0);
*/
					WD=(offx*offX>0?w:Math.abs(offX1));
					HT=(offy*offY>0?h:Math.abs(offY1));

					var PG=shpN.css(ltwh([lt,tp,WD+sw*2,HT+sw*2])).children('polygon, path');

					/*
						三实线的共点，与三虚线的共点，互为长方体对角点
						
						点0与点1，构成外面长方形，对角点
						
						三虚线的共点，与点2，构成里面长方形，对角点
						
					offX1 offx且offY1 offy同号，以点1为中心点引三条外实线（及三个共点平行四边形）,其中两个平行四边形共边于点1、2线；三条内虚线，共点于点0的对面对应点
					offX1 offx且offY1 offy异号，以点0为中心点引三条外实线（及三个共点平行四边形）,其中两个平行四边形共边于点0、2线；三条内虚线，共点于点1的对面对应点
					
					offX1 offx异号且offY1 offy同号，以点(0x,1y)为中心点引三条外实线（及三个共点平行四边形）,其中两个平行四边形共边于点(0x,1y)、2线；三条内虚线，共点于点(1x,0y)的对面对应点
					offX1 offx同号且offY1 offy异号，以点(1x,0y)为中心点引三条外实线（及三个共点平行四边形）,其中两个平行四边形共边于点(1x,0y)、2线；三条内虚线，共点于点(0x,1y)的对面对应点
					
						
					*/
				
				
					PG.eq(0).attr({points:[x0-lt, y0-tp, x1-lt, y0-tp, x1-lt, y1-tp, x0-lt, y1-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
					
					if(offX1*offx>0 && offY1*offy>0){
						PG.eq(1).attr({points:[x1-lt,y1-tp, X-lt,Y-tp, X-lt-offx,Y-tp, x0-lt,y1-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
						PG.eq(2).attr({points:[x1-lt,y1-tp, X-lt,Y-tp, X-lt,Y-tp-offy, x1-lt,y0-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
						PG.filter('.backvisi').attr({d:['M', X-lt-offx,Y-tp-offy, 'V', Y-tp,
										  'M', X-lt-offx,Y-tp-offy, 'H', X-lt,
										  'M', X-lt-offx,Y-tp-offy, 'L', x0-lt, y0-tp].join(' ').replace(/ 0/g,' '+sw)});
					}
					if(offX1*offx<0 && offY1*offy<0){
						PG.eq(1).attr({points:[x0-lt,y0-tp, X-lt,Y-tp, X-lt,Y-tp+offy, x0-lt,y1-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
						PG.eq(2).attr({points:[x0-lt,y0-tp, X-lt,Y-tp, X-lt+offx,Y-tp, x1-lt,y0-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
						PG.filter('.backvisi').attr({d:['M', X-lt+offx,Y-tp+offy, 'V', Y-tp,
										  'M', X-lt+offx,Y-tp+offy, 'H', X-lt,
										  'M', X-lt+offx,Y-tp+offy, 'L', x1-lt, y1-tp].join(' ').replace(/ 0/g,' '+sw)});
					}

					if(offX1*offx<0 && offY1*offy>0){
						PG.eq(1).attr({points:[x0-lt,y1-tp, X-lt,Y-tp, X-lt,Y-tp-offy, x0-lt,y0-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
						PG.eq(2).attr({points:[x0-lt,y1-tp, X-lt,Y-tp, X-lt+offx,Y-tp, x1-lt,y1-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
						PG.filter('.backvisi').attr({d:['M', X-lt+offx,Y-tp-offy, 'V', Y-tp,
										  'M', X-lt+offx,Y-tp-offy, 'H', X-lt,
										  'M', X-lt+offx,Y-tp-offy, 'L', x1-lt, y0-tp].join(' ').replace(/ 0/g,' '+sw)});
					}

					if(offX1*offx>0 && offY1*offy<0){
						PG.eq(1).attr({points:[x1-lt,y0-tp, X-lt,Y-tp, X-lt,Y-tp+offy, x1-lt,y1-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
						PG.eq(2).attr({points:[x1-lt,y0-tp, X-lt,Y-tp, X-lt-offx,Y-tp, x0-lt,y0-tp].join(' ').replace(/^0/,sw).replace(/ 0/g,' '+sw)});
						PG.filter('.backvisi').attr({d:['M', X-lt-offx,Y-tp+offy, 'V', Y-tp,
										  'M', X-lt-offx,Y-tp+offy, 'H', X-lt,
										  'M', X-lt-offx,Y-tp+offy, 'L', x0-lt, y1-tp].join(' ').replace(/ 0/g,' '+sw)});
					}
					

			}
			
			
			
		}






		if(/line/.test(shp)){

			
			
			px=(offX<0?w-sw:sw*3); py=(offY<0?h-sw:sw*3);

			var rx=r*(offX<0?-1:1), ry=r*(offY<0?-1:1);
			pnt=['M',px,py];


			
			if(shp=='line1tick'){
				pnt.push(wh?'H':'V',wh?w-px:h-py);
				
				var d0=sw*6;//20

				if(isMargin){
					var wn,hn,w2n,w4n,h2n,h4n;

					if(wh){
						wn=n;
						n=Math.floor((w-d0*2)/n);
						
						hn=parseInt(h/n);

					}else{
						hn=n;
						n=Math.floor((h-d0*2)/n);
						
						wn=parseInt(w/n);
					}

					w2n=parseInt(wn/2);w4n=parseInt(wn/4);
					h2n=parseInt(hn/2);h4n=parseInt(hn/4);
/*
					w=wn*n;
					h=hn*n;
*/
					
					lt=offX<0?x0-w:x0;
					tp=offY<0?y0-h:y0;


				}else{
					var wn=parseInt((w-d0*2)/n), hn=parseInt((h-d0*2)/n), w2n=parseInt((w-d0*2)/2/n), h2n=parseInt((h-d0*2)/2/n), w4n=parseInt((w-d0*2)/4/n), h4n=parseInt((h-d0*2)/4/n);
				}
				
				
				if(wh){
					
			
					for(var i=0;i<n;i++){
						pnt.push('M',d+parseInt(d0+w2n+wn*i),d*(offY<0?1:6),'V',h+d*(offY<0?-1:2));
					}
				}else{
					
					for(var i=0;i<n;i++){
						pnt.push('M',d*(offX<0?1:6),d+parseInt(d0+h2n+hn*i),'H',w+d*(offX<0?-1:2));
					}
				}
				
				
				pnt.push('M',px,py,wh?'H':'V',wh?w-px:h-py);

				lt=(offX<0?X-sw:x0); tp=(offY<0?Y-sw:y0);
			}

			if(shp=='line2tick'){
				var tickH=+$('#MarginCopyh').val(), r=+$('#gridC').val(), c=+$('#gridR').val();
				px=(offX<0?w-sw-tickH:sw*3+tickH); py=(offY<0?h-sw-tickH:sw*3+tickH);
				
				pnt=['M',w-px+tickH,py,'H',px];

				
				var d0=sw*6;//20

				if(isMargin){
					var wn,hn,w2n,w4n,h2n,h4n;

					if(wh){
						wn=c; hn=r;
						c=Math.floor((w-d0*2-tickH*2)/c);
						r=Math.floor((h-d0*2-tickH*2)/r);
					}

				}else{
					var wn=Math.floor((w-d0*2-tickH*2)/c), hn=Math.floor((h-d0*2-tickH*2)/r);
				}
				if(!(c>0 && r>0 && wn>0 && hn>0)){
					return
				}


				for(var i=0;i<c;i++){
					pnt.push('M',offX<0?w-wn*(i+1)-tickH:d+wn*(i+1)+tickH, py, 'V',(offY<0?h-d:d));

				}

				
				for(var i=0;i<r;i++){
					pnt.push('M',px,offY<0?h-hn*(i+1)-tickH:d+hn*(i+1)+tickH,'H',(offX<0?w-d:d));

				}
				pnt.push('M',px,py,'V',h-py+tickH);

				lt=(offX<0?X-sw:x0); tp=(offY<0?Y-sw:y0);
			}



			if(/[LA]/.test(shp)){
				if(hv){
					tArr=[px,w2+sw,'V',h+sw*2-py];
					tArr2=['H',w+sw*2-px];
					tArr3=['L',px,h+sw*2-py];
				}else{
					tArr=[py,h2+sw,'H',w+sw*2-px];
					tArr2=['V',h+sw*2-py];
					tArr3=['L',w+sw*2-px,py];
				}

				if(/D/.test(shp)){
					if(hv){
						pnt[1]=w+sw*2-px;
						pnt.push('H',px+rx,'A',r,r,0,0,1-c,px,py+ry,'V',h+sw*2-py-ry,'A',r,r,0,0,1-c,px+rx,h+sw*2-py);
					}else{
						pnt[2]=h+sw*2-py;
						pnt.push('V',py+ry,'A',r,r,0,0,c,px+rx,py,'H',w+sw*2-px-rx,'A',r,r,0,0,c,w+sw*2-px,py+ry);
					}
					tArr.splice(1,1);

				}
				if(/Z/.test(shp)){
					if(hv){
						pnt.push('H',w2+sw-rx,'A',r,r,0,0,c,w2+sw,py+ry,'V',h+sw*2-py-ry,'A',r,r,0,0,1-c,w2+sw+rx,h+sw*2-py);
					}else{
						pnt.push('V',h2+sw-ry,'A',r,r,0,0,1-c,px+rx,h2+sw,'H',w+sw*2-px-rx,'A',r,r,0,0,c,w+sw*2-px,h2+sw+ry);
					}
					tArr.shift();

				}
				if(/^S/.test(shp)){
					if(hv){
						pnt.push('V',h+sw*2-py-ry,'A',r,r,0,0,1-c,px+rx,h+sw*2-py);
					}else{
						pnt.push('H',w+sw*2-px-rx,'A',r,r,0,0,c,w+sw*2-px,py+ry);
					}
					tArr=tArr.slice(-1);
				}

				if(/L/.test(shp)){
					pnt=pnt.slice(0,4).concat(tArr);
				}
				pnt=pnt.concat(tArr2);
				
				
				if(/SL/.test(shp)){
					var D=gon(pnt,'RighttVC');
					chd.filter('.Rt').attr('d',['M',D[0]+lR*Math.sign(D[2]-D[0]),D[1],'V',D[1]+lR*Math.sign(D[3]-D[1]),'H',D[0]].join(' '));
				}
					
				
				lt=(offX<0?X-sw:x0); tp=(offY<0?Y-sw:y0);
			}


			if(/angle[HV]/.test(shp)){
				if(L.drawEnd2==''){

					if(hv){
						pnt=['M',d+(offX<0?w:0),d+(offY<0?h:0),'H',d+(offX<0?0:w)];
					}else{
						
						pnt=['M',d+(offX<0?w:0),d+(offY<0?h:0),'V',d+(offY<0?0:h)];
					}

				}else{

					var x1=hv?+L.X1:x0, offx=x1-x0, offX1=X-x1, w0=Math.abs(offx), deg;
					var y1=hv?y0:+L.Y1, offy=y1-y0, offY1=Y-y1, h0=Math.abs(offy);

					lt=min([x0,x1,X]);
					tp=min([y0,y1,Y]);

					if(hv){
						py=offY1<0?h:0;
						px=offx*offX1<0?(offx>0?(X<x0?w:0):w0):(offx>0?0:w);

						pnt=['M',d+px,d+py, 'H', d+px+offx, 'L', d+px+offX, d+h-py];
						
						deg=(Math.atan2(h,Math.abs(offX1))*180/Math.PI).toFixed(2);
						if(offx*offX1>0){
							deg=180-deg;
						}

						DEG=' ∠'+deg+'°'

					}else{
						px=offX1<0?w:0;
						py=offy*offY1<0?(offy>0?(Y<y0?h:0):h0):(offy>0?0:h);

						pnt=['M',d+px,d+py, 'V', d+py+offy, 'L', d+w-px, d+py+offY];
						deg=(Math.atan2(w,Math.abs(offY1))*180/Math.PI).toFixed(2);
						if(offy*offY1>0){
							deg=180-deg;
						}

						DEG=' ∠'+deg+'°'
					}

					var k=offY1/offX1,hk=Math.hypot(1,k);	//offX-offx=offX1
					
					if(hv){
						if(offx*offX1<0){
							w=offx*offX<0?w+w0:w0
						}
						
						/*
						offx=x1-x0 offX=X-x0 offX1=X-x1
							offy offY offY1
						- - 0
						- + 1
						
						+ - 1
						+ + 0
						*/
						chd.filter('.Arc1').attr('d',['M',d+px+offx-Math.sign(offx)*l,d+py].concat(offX1==0?
							['V',d+py+Math.sign(offY1)*l,'H',d+px+offx]:
							['A',l,l,0,0,offx*offY1<0?1:0,d+px+offx+Math.sign(offX1)*Math.ceil(l/hk), d+py+Math.sign(offY1)*Math.abs(Math.ceil(l*k/hk))]).join(' '));
					}else{
						if(offy*offY1<0){
							h=offy*offY<0?h+h0:h0
						}

						chd.filter('.Arc1').attr('d',['M',d+px,d+py+offy-Math.sign(offy)*l].concat(offY1*offX1==0?
							['H',d+px+Math.sign(offX1)*l,'V',d+py+offy]:
							['A',l,l,0,0,offy*offX1<0?0:1,d+px+Math.sign(offX1)*Math.ceil(l/hk), d+py+offy+Math.sign(offY1)*Math.abs(Math.ceil(l*k/hk))]).join(' '));
					}
				}

			}
			
			if(/angle\d/.test(shp)){
				var deg=+shp.replace(/.+angle/,''),tan1=Math.abs(Math.tan(deg*Math.PI/180)),tan0=h/w,
				cos=Math.cos(deg*Math.PI/180), sin=Math.sin(deg*Math.PI/180),
				lcos=Math.ceil(l*cos), lsin=Math.ceil(l*sin), clkwse=Math.sign((90-deg)*offX*offY||1);

				hv=(deg<=45 || deg>90) && tan0<=1 || deg==60 && tan0>1;

				if(hv){
					px=offX<0 && deg<90 || offX>0 && deg>90?0:w;
					h=Math.ceil((deg<90?w:w2)*tan1);
					py=offY<0?h:0;
					pnt=['M',d+px,d+py, 'H', d+(deg<90?w-px:w2), 'L', d+(deg<90?px:w-px), d+h-py];
					
					tp=(offY<0?y0-h-sw:y0);

					chd.filter('.Arc1').attr('d',['M',d+(deg<90?w-px:w2)+Math.sign(offX*(90-deg))*l,d+py,'A',l,l,0,0,(1+clkwse)/2,
						d+(deg<90?w-px:w2)+Math.sign(offX*(90-deg))*lcos, d+py+Math.sign(offY)*lsin].join(' '));
				}else{
					py=offY<0 && deg<90 || offY>0 && deg>90?0:h;
					w=Math.ceil((deg<90?h:h2)*tan1);
					px=offX<0?w:0;
					pnt=['M',d+px,d+py, 'V', d+(deg<90?h-py:h2), 'L', d+w-px, d+(deg<90?py:h-py)];
					
					lt=(offX<0?x0-w-sw:x0);

					chd.filter('.Arc1').attr('d',['M',d+px,d+(deg<90?h-py:h2)+Math.sign(offY*(90-deg))*l,'A',l,l,0,0,(1-clkwse)/2,
						d+px+Math.sign(offX)*lsin, d+(deg<90?h-py:h2)+Math.sign(offY*(90-deg))*lcos].join(' '));
				}

			}

			if(/curve/.test(shp)){
				d=sw*2;
				pnt.push('Q');

				if(hv){
					pnt.push(d+w2, (offY<0?d-h:h*2-d),  d+w-px,py);
				}else{
					pnt.push((offX<0?d-w:w*2-d), d+h2,  px,d+h-py);
				}

			}
			
			if(/arc/.test(shp)){

				if(isSq){
					rY=r;
				}
				if(shp=='linearc'){
					d=sw*2;
					//px=(offX<0?w-sw:sw*3); py=(offY<0?h-sw:sw*3);
					var wm=max([w,r,rY])*2, hm=max([h,r,rY])*2;

					if(wh){
						pnt=['M',d+px+(offX<0?wm-w:0),d+py, 'A',r,rY, 0,0,+(offX*offY>0), d+w-px+(offX<0?wm-w:0), d+h-py];

						lt=(offX<0?x0-wm-sw:x0);
						
					}else{
						pnt=['M',d+px,d+py+(offY<0?h:0), 'A',rY,r, 0,0,+(offX*offY<0), d+w-px, d+h-py+(offY<0?h:0)];
						
						tp=(offY<0?y0-hm-sw:y0);

					}

					w=wm;
					h=hm;
					
				}else if(shp=='linearcSq'){
					if(wh){
						pnt=['M',d+px,d+py, 'A',r,rY, 0,0,+(offX*offY>0), d+px, d+h-py];
					}else{
						pnt=['M',d+px,d+py, 'A',rY,r, 0,0,+(offX*offY<0), d+w-px, d+py];
					}
				}else{
//			px=(offX<0?w-sw:sw*3); py=(offY<0?h-sw:sw*3);

					if(hv){
						pnt=['M',d+px,d+py, 'A',w-sw*8,h2-sw*3, 0,1,+(offX*offY>0), d+px, d+h-py];
					}else{
						pnt=['M',d+px,d+py, 'A',w2-sw*3,h-sw*8, 0,1,+(offX*offY<0), d+w-px, d+py];
					}

				}

				
			}


			if(/Iso/.test(shp)){
				var deg=+shp.replace(/.+Iso/,''),tan1=Math.tan(deg*Math.PI/180/2),tan0=h2/w,tan0T=w2/h;
				
				d=sw*2;
				if(deg){

					hv=deg<90 && tan0<1 || deg>90 && tan0>1;

					if(hv){
						if(tan0>=tan1){
							h2=Math.ceil(w*tan1);
							h=h2*2;
							
							tp=(offY<0?y0-h-sw:y0);
						}else{
							w=Math.ceil(h2/tan1);
							
							lt=(offX<0?x0-w-sw:x0);
						}
					
						
					}else{
						if(tan0T>=tan1){
							w2=Math.ceil(h*tan1);
							w=w2*2;
							
							lt=(offX<0?x0-w-sw:x0);
						}else{
							h=Math.ceil(w2/tan1);
							
							tp=(offY<0?y0-h-sw:y0);
						}
						
						
					}
					px=(offX<0?w-sw:sw*3); py=(offY<0?h-sw:sw*3);
				}
				

				if(hv){
					pnt=['M',d+px,d+py,'L',d+w-px, d+h2,  d+px, d+h-py];

					var dx=Math.ceil(l*Math.cos(deg?deg*Math.PI/360:Math.atan(tan0))), dy=Math.ceil(l*Math.sin(deg?deg*Math.PI/360:Math.atan(tan0)));
			
					chd.filter('.Arc1').attr('d',['M',d+w-px-Math.sign(offX)*dx || 0,d+h2+dy || 0,
						'A',l,l,0,0,(offX<0?0:1),d+w-px-Math.sign(offX)*dx || 0,d+h2-dy || 0].join(' '));
					
				}else{
					pnt=['M',d+px,d+py,'L',d+w2, d+h-py,  d+w-px, d+py];
					
					var dx=Math.ceil(l*Math.sin(deg?deg*Math.PI/360:Math.atan(tan0T))), dy=Math.ceil(l*Math.cos(deg?deg*Math.PI/360:Math.atan(tan0T)));
			
					chd.filter('.Arc1').attr('d',['M',d+w2-dx || 0,d+h-py-Math.sign(offY)*dy || 0,
						'A',l,l,0,0,(offY<0?0:1),d+w2+dx || 0,d+h-py-Math.sign(offY)*dy || 0].join(' '));
				}

			}

			WD=w+sw*2;
			HT=h+sw*2;
			shpN.css(ltwh([lt,tp,WD,HT]));
			chd.filter('.main').attr({d:pnt.join(' ')});
		}


		if(/gon/.test(shp)){
			
			var deg=+shp.replace(/\D/g,'');

			if(/TriangonRight.+\D$/.test(shp)){
				if(/tx/.test(shp)){
					var a=Math.atan2(h,w), s=Math.sin(a), c=Math.cos(a);

					if(hv || /Equi/.test(shp) && wh){
						h=Math.ceil(h*c*c);
						py=(offY<0?h:0);
						tp=y0+(offY<0?-Math.ceil(w*c*s):0);
						pnt=[d,d+py,d+w,d+py,d+Math.ceil(w*(offX<0?s*s:c*c)),d+h-py];
					}else{
						w=Math.ceil(w*s*s);
						px=(offX<0?w:0);
						lt=x0+(offX<0?-Math.ceil(h*c*s):0);
						pnt=[d+px,d,d+px,d+h,d+w-px,d+Math.ceil(h*(offY<0?c*c:s*s))];

					}

					DEG=' ∠'+(a*180/Math.PI).toFixed(2)+'°';

				}else{
					if(/V/.test(shp) || /Equi/.test(shp) && wh){
						pnt=[d,d+py,d+w,d+py];

						DEG=' ∠'+(Math.atan2(w,h)*180/Math.PI).toFixed(2)+'°'
					}else{
						pnt=[d+px,d,d+px,d+h];

						DEG=' ∠'+(Math.atan2(h,w)*180/Math.PI).toFixed(2)+'°'
					}
					pnt.push(d+w-px,d+h-py);
				}

			}
			if(/TriangonRight.+\d$/.test(shp)){

				if(/tx/.test(shp)){
					if(wh){
						h=Math.ceil(w*Math.tan(deg*Math.PI/180))
					}else{
						w=Math.ceil(h/Math.tan(deg*Math.PI/180))
					}
					var a=deg*Math.PI/180, s=Math.sin(a), c=Math.cos(a);

					if(wh){
						h=Math.ceil(h*c*c);
						py=(offY<0?h:0);
						tp=y0+(offY<0?-Math.ceil(w*c*s):0);
						pnt=[d,d+py,d+w,d+py,d+Math.ceil(w*(offX<0?s*s:c*c)),d+h-py];
						
					}else{
						w=Math.ceil(w*s*s);
						px=(offX<0?w:0);
						lt=x0+(offX<0?-Math.ceil(h*c*s):0);
						pnt=[d+px,d,d+px,d+h,d+w-px,d+Math.ceil(h*(offY<0?c*c:s*s))];
						
					}

				}else{
					
					if(wh){
						h=Math.ceil(w*Math.tan(deg*Math.PI/180));
						tp=y0+(offY<0?-h:0);
						
					}else{
						w=Math.ceil(h*Math.tan(deg*Math.PI/180));
						lt=x0+(offX<0?-w:0);
						
					}
					
					px=(offX<0?w:0);
					py=(offY<0?h:0);
					
					
					if(wh){
						pnt=[d,d+py, d+w,d+py];

					}else{
						pnt=[d+px,d, d+px,d+h];

					}
					pnt.push(d+w-px,d+h-py);
				}

			}

			if(/TriangonRight/.test(shp)){
				var pntdx=Arrf(Math.abs,[pnt[0]-pnt[2],pnt[0]-pnt[4],pnt[2]-pnt[4]]),
					pntdy=Arrf(Math.abs,[pnt[1]-pnt[3],pnt[1]-pnt[5],pnt[3]-pnt[5]]);
					pntdx.sort(function(a,b){return a-b});pntdy.sort(function(a,b){return a-b});

				if(/Rightt/.test(shp)){
					var D=gon(pnt,'RighttVC');
					chd.filter('.Rt').attr('d',['M',D[0]+lR*Math.sign(D[2]-D[0]),D[1],'V',D[1]+lR*Math.sign(D[3]-D[1]),'H',D[0]].join(' '));


					chd.filter('.Arc3').attr('d',['M',D[0]+lR*Math.sign(D[2]-D[0]),D[1],'A',l,l,0,0,((D[3]-D[1])*(D[2]-D[0])>0?1:0),D[0],D[1]+lR*Math.sign(D[3]-D[1])].join(' '));
					
					if(offX>0){
						chd.filter('.Arc1').attr('d',['M',d,d+h-py+l*Math.sign(offY), 'A',l,l,0,0,((D[3]-D[1])*(D[2]-D[0])>0?1:0),D[0],D[1]+lR*Math.sign(D[3]-D[1])].join(' '));
						chd.filter('.Arc2').attr('d',['M',d+w-px-l*Math.sign(offY),d+py, 'A',l,l,0,0,((D[3]-D[1])*(D[2]-D[0])>0?1:0),D[0],D[1]+lR*Math.sign(D[3]-D[1])].join(' '));
					}else{
						chd.filter('.Arc1').attr('d',['M',d+l,d+py, 'A',l,l,0,0,((D[3]-D[1])*(D[2]-D[0])>0?1:0),D[0],D[1]+lR*Math.sign(D[3]-D[1])].join(' '));
						chd.filter('.Arc2').attr('d',['M',d+px,d+h-py-l*Math.sign(offY), 'A',l,l,0,0,((D[3]-D[1])*(D[2]-D[0])>0?1:0),D[0],D[1]+lR*Math.sign(D[3]-D[1])].join(' '));
					}

				}else{
					/*
						
						直角另一点，与直角点的偏移：l(cos-sin) ，l(cos+sin)
						*/
					var D=gon(pnt,'RightxVC');

					var hv=pntdy[0]==0, cos=1/Math.hypot(1,hv? pntdy[2]/pntdx[0] : pntdy[0]/pntdx[2]), sin=1/Math.hypot(1,hv? pntdx[0]/pntdy[2] : pntdx[2]/pntdy[0]);
					var lcos=Math.abs(lR*cos)||0, lsin=Math.abs(lR*sin)||0;
					var Dx=Math.abs(lR*(cos-sin*(hv?1:-1)))||0, Dy=Math.abs(lR*(cos+sin*(hv?1:-1)))||0, sgnx=Math.sign(D[2]-D[0]), sgny=Math.sign(D[3]-D[1]);

					chd.filter('.Rt').attr('d',['M',D[0]+lsin*sgnx, D[1]+lcos*sgny, 
						'L',D[0]+Dx*sgnx, D[1]+Dy*sgny, 
						'L',D[0]+(hv?-1:1)*lcos*sgnx, D[1]+(hv?1:-1)*lsin*sgny
					].join(' '));
					
					chd.filter('.Arc3').attr('d',['M',D[0]+lsin*sgnx, D[1]+lcos*sgny,
						'A',l,l,0,0,((D[3]-D[1])*(D[2]-D[0])*(hv?1:-1)>0?1:0),D[0]+(hv?-1:1)*lcos*sgnx, D[1]+(hv?1:-1)*lsin*sgny].join(' '));
					
					
				}
			}



			if(/TriangonIso\D/.test(shp)){
				var tan0=h2/w,tan0T=w2/h;
				if(/V/.test(shp) || /Equi/.test(shp) && wh){
					pnt=[d,d+py, d+w2,d+h-py, d+w,d+py];
					if(/V/.test(shp)){
						DEG=' ∠'+(Math.atan2(w2,h)*180*2/Math.PI).toFixed(2)+'°'
					}
				}else{
					pnt=[d+px,d,d+w-px,d+h2,d+px,d+h];
					if(hv){
						DEG=' ∠'+(Math.atan2(h2,w)*180*2/Math.PI).toFixed(2)+'°'
					}
				}
				
				
				

			}

			if(/TriangonIso\d/.test(shp)){

				var tan1=Math.tan(deg*Math.PI/180/2),tan0=h2/w,tan0T=w2/h;

				hv=deg<90 && tan0<1 || deg>90 && tan0>1;

				if(hv){
					if(tan0>=tan1){
						h2=Math.ceil(w*tan1);
						h=h2*2;
						
						tp=(offY<0?y0-h-sw:y0);
					}else{
						w=Math.ceil(h2/tan1);
						
						lt=(offX<0?x0-w-sw:x0);
					}
				
					
				}else{
					if(tan0T>=tan1){
						w2=Math.ceil(h*tan1);
						w=w2*2;
						
						lt=(offX<0?x0-w-sw:x0);
					}else{
						h=Math.ceil(w2/tan1);
						
						tp=(offY<0?y0-h-sw:y0);
					}
					
					
				}
				px=(offX<0?w-sw:sw*3); py=(offY<0?h-sw:sw*3);

				
				if(hv){
					pnt=[d+px,d+py,d+w-px, d+h2, d+px, d+h-py];

					
				}else{
					pnt=[d+px,d+py,d+w2, d+h-py, d+w-px, d+py];

				}



			}

			if(/TriangonIso/.test(shp)){
				var dx, dy, a2=deg?deg*Math.PI/360:Math.atan(hv?tan0:tan0T);
				if(hv){//对称轴为水平线
					dx=Math.ceil(l*Math.cos(a2));
					dy=Math.ceil(l*Math.sin(a2));

					chd.filter('.Arc1').attr('d',['M',d+w-px-Math.sign(offX)*dx || 0,d+h2+dy || 0,
						'A',l,l,0,0,(offX<0?0:1),d+w-px-Math.sign(offX)*dx || 0,d+h2-dy || 0].join(' '));

					chd.filter('.Arc2').attr('d',['M',d+px,d+py+l*Math.sign(offY),
						'A',l,l,0,0,(offX*offY<0?1:0),d+px+dx*Math.sign(offX) || 0,d+py+dy*Math.sign(offY) || 0].join(' '));
					
					chd.filter('.Arc3').attr('d',['M',d+px,d+h-py-l*Math.sign(offY),
						'A',l,l,0,0,(offX*offY<0?0:1),d+px+dx*Math.sign(offX) || 0,d+h-py-dy*Math.sign(offY) || 0].join(' '));

				}else{//对称轴为竖直线
					dx=Math.ceil(l*Math.sin(a2));
					dy=Math.ceil(l*Math.cos(a2));

					chd.filter('.Arc1').attr('d',['M',d+w2-dx || 0,d+h-py-Math.sign(offY)*dy || 0,
						'A',l,l,0,0,(offY<0?0:1),d+w2+dx || 0,d+h-py-Math.sign(offY)*dy || 0].join(' '));

					chd.filter('.Arc2').attr('d',['M',d+px+l*Math.sign(offX),d+py,
						'A',l,l,0,0,(offX*offY<0?0:1),d+px+dx*Math.sign(offX) || 0,d+py+dy*Math.sign(offY) || 0].join(' '));
					
					chd.filter('.Arc3').attr('d',['M',d+w-px-l*Math.sign(offX),d+py,
						'A',l,l,0,0,(offX*offY<0?1:0),d+w-px-dx*Math.sign(offX)|| 0,d+py+dy*Math.sign(offY) || 0].join(' '));



				}
			}




			if(/Triangon[HV]/.test(shp)){
				if(L.drawEnd2==''){

					if(hv){
						pnt=[d+(offX<0?w:0),d+(offY<0?h:0), d+(offX<0?0:w),d+(offY<0?h:0), d+(offX<0?0:w),d+(offY<0?h:0)];
					}else{
						
						pnt=[d+(offX<0?w:0),d+(offY<0?h:0), d+(offX<0?w:0),d+(offY<0?0:h), d+(offX<0?w:0),d+(offY<0?0:h)];
					}

				}else{

					var x1=hv?+L.X1:x0, offx=x1-x0, offX1=X-x1, w0=Math.abs(offx), deg, deg2;
					var y1=hv?y0:+L.Y1, offy=y1-y0, offY1=Y-y1, h0=Math.abs(offy);

					lt=min([x0,x1,X]);
					tp=min([y0,y1,Y]);

					if(hv){
						py=offY1<0?h:0;
						px=offx*offX1<0?(offx>0?(X<x0?w:0):w0):(offx>0?0:w);

						pnt=[d+px,d+py, d+px+offx,d+py, d+px+offX, d+h-py];
						
						deg=(Math.atan2(h,Math.abs(offX1))*180/Math.PI).toFixed(2);
						deg2=(Math.atan2(h,Math.abs(offx))*180/Math.PI).toFixed(2);
						if(offx*offX1>0){
							deg=180-deg;
						}

						DEG=' ∠'+deg+'°'

					}else{
						px=offX1<0?w:0;
						py=offy*offY1<0?(offy>0?(Y<y0?h:0):h0):(offy>0?0:h);

						pnt=[d+px,d+py, d+px,d+py+offy, d+w-px, d+py+offY];
						deg=(Math.atan2(w,Math.abs(offY1))*180/Math.PI).toFixed(2);
						deg2=(Math.atan2(w,Math.abs(offy))*180/Math.PI).toFixed(2);
						if(offy*offY1>0){
							deg=180-deg;
						}

						DEG=' ∠'+deg+'°'
					}

					var k=offY1/offX1,hk=Math.hypot(1,k), k2=offY/offX,hk2=Math.hypot(1,k2);	//offX-offx=offX1
					
					if(hv){//底边是水平线
						if(offx*offX1<0){
							w=offx*offX<0?w+w0:w0
						}
						

						chd.filter('.Arc1').attr('d',['M',d+px+offx-Math.sign(offx)*l,d+py].concat(offX1==0?
							['V',d+py+Math.sign(offY1)*l,'H',d+px+offx]:
							['A',l,l,0,0,offx*offY1<0?1:0,d+px+offx+Math.sign(offX1)*Math.ceil(l/hk), d+py+Math.sign(offY1)*Math.abs(Math.ceil(l*k/hk))]).join(' '));
						

						chd.filter('.Arc2').attr('d',['M',d+px+Math.sign(offx)*l,d+py].concat(offx==0?
							['V',d+py+Math.sign(offY)*l,'H',d+px]:
							['A',l,l,0,0,offx*offY<0?0:1,d+px+Math.sign(offX)*Math.ceil(l/hk2), d+py+Math.sign(offY)*Math.abs(Math.ceil(l*k2/hk2))]).join(' '));
						
					}else{
						if(offy*offY1<0){
							h=offy*offY<0?h+h0:h0
						}

						chd.filter('.Arc1').attr('d',['M',d+px,d+py+offy-Math.sign(offy)*l].concat(offY1*offX1==0?
							['H',d+px+Math.sign(offX1)*l,'V',d+py+offy]:
							['A',l,l,0,0,offy*offX1<0?0:1,d+px+Math.sign(offX1)*Math.ceil(l/hk), d+py+offy+Math.sign(offY1)*Math.abs(Math.ceil(l*k/hk))]).join(' '));
						
						
						chd.filter('.Arc2').attr('d',['M',d+px,d+py+Math.sign(offy)*l].concat(offy==0?
							['H',d+px+Math.sign(offY)*l,'V',d+py]:
							['A',l,l,0,0,offy*offX<0?1:0,d+px+Math.sign(offX)*Math.ceil(l/hk2), d+py+Math.sign(offY)*Math.abs(Math.ceil(l*k2/hk2))]).join(' '));
					}
				}

			}


			if(/dia/.test(shp)){
				pnt=[d,d+h2,d+w2,d+h,d+w,d+h2,d+w2,d];

			}

			if(/Regular/.test(shp)){
				var sides=+$('#Sides').val(), R=Math.hypot(w,h), ang=Math.atan2(offY,offX), C=[0,0], mp=[0,0], Mp=[0,0];
//console.log('ang ',-offY,offX, ang);
				deg=+(Math.atan2(-offY,offX)*180/Math.PI).toFixed(2);
				
				if(deg<0){
				//	deg=(deg+180).toFixed(2);
				}
				

				DEG=' ∠'+deg+'°'
				pnt=[];
				for(var i=0;i<sides;i++){
					var p=[parseInt(R*Math.cos(ang+i*2*Math.PI/sides)), parseInt(R*Math.sin(ang+i*2*Math.PI/sides))];
					C[0]+=p[0];
					C[1]+=p[1];
					mp[0]=min([mp[0], p[0]]);
					mp[1]=min([mp[1], p[1]]);
					Mp[0]=max([Mp[0], p[0]]);
					Mp[1]=max([Mp[1], p[1]]);
					pnt.push(p[0], p[1]);
				}
				/*
console.log('pnt ',pnt);
console.log('Center ',C);
console.log('min ',mp);
console.log('max ',Mp);
*/
				w=Mp[0]-mp[0];
				h=Mp[1]-mp[1];
				/*
console.log('w ',w);
console.log('h ',h);
				*/
				for(var i=0;i<sides;i++){
					pnt[i*2]+=d-mp[0];
					pnt[i*2+1]+=d-mp[1];
				}
				lt=x0+mp[0];
				tp=y0+mp[1];
				/*
console.log('lt ',lt);
console.log('tp ',tp);
*/
			}

			if(/Penta/.test(shp)){
				var s=Math.sin(Math.PI*2/5), c=Math.cos(Math.PI*2/5), s2=Math.sin(Math.PI/5), c2=Math.cos(Math.PI/5);

				pnt=[
					d+parseInt(w2*(1-s)),d+parseInt(w2*(1-c)), d+parseInt(w2*(1-c*s/c2)),d+parseInt(w2*(1+c*c/c2)),
					d+parseInt(w2*(1-s2)),d+parseInt(w2*(1+c2)), d+w2,d+parseInt(w2*(1+c/c2)),
					d+parseInt(w2*(1+s2)),d+parseInt(w2*(1+c2)), d+parseInt(w2*(1+c*s/c2)),d+parseInt(w2*(1+c*c/c2)),
					d+parseInt(w2*(1+s)),d+parseInt(w2*(1-c)), d+parseInt(w2*(1+c*s2/c2)),d+parseInt(w2*(1-c)),
					d+w2,sw, d+parseInt(w2*(1-c*s2/c2)),d+parseInt(w2*(1-c))];

				if(/T/.test(shp)){for(var i=0;i<5;i++){pnt[i*4+2]=''; pnt[i*4+3]=''}
					pnt=Arrf(Number,pnt.join(' ').replace(/ +/g,' ').trim().split(' '));
				}
			}


			if(/Paral|Trape/.test(shp)){
				if(L.drawEnd2==''){
					pnt=[d,d,d,d+h,d+w,d+h,d+w,d];

				}else{
					var x1=+L.X1, offx=x1-x0, offX1=X-x1, w0=Math.abs(offx);
					var y1=+L.Y1, offy=y1-y0, offY1=Y-y1, h0=Math.abs(offy);

					if(w0>h0){
						lt=(offx<0 && offX1>0?x1:(offx<0 && offX1<0?X:x0));
					}else{
						tp=(offy<0 && offY1>0?y1:(offy<0 && offY1<0?Y:y0));
					}

					if(shp=='Paralgon'){
						if(w0>h0){
							if(offx>0 && offX1<0){lt=X-offx}
							py=(offY*offX1<0?h:0);
							px=(offx*offX1<0?w0+Math.abs(offX1):w);

							pnt=[d,d+py, d+w0,d+py, d+px,d+h-py, d+px-w0,d+h-py];//A B C D坐标
							DEG=' ∠'+(Math.atan2(h,px-w0)*180/Math.PI).toFixed(2)+'°'
						}else{
							if(offy>0 && offY1<0){tp=Y-offy}
							px=(offX*offY1<0?w:0);
							py=(offy*offY1<0?h0+Math.abs(offY1):h);

							pnt=[d+px,d,d+px,d+h0,d+w-px,d+py,d+w-px,d+py-h0];
							DEG=' ∠'+(Math.atan2(w,py-h0)*180/Math.PI).toFixed(2)+'°'
						}
						
					}

					if(/Iso|Right/.test(shp)){
						if(w0>h0){
							py=(offY*offX1*offx<0?0:h);
						}else{
							px=(offX*offY1*offy<0?0:w);
						}
					}


					if(/Iso/.test(shp)){
						if(w0>h0){
							if(offx>0 && offX1>0){lt=x0-offX1}
							px=(offx*offX1<0?w0:w+Math.abs(offX1));

							pnt=[d,d+py, d+px,d+py, d+w,d+h-py, d+px-w,d+h-py];
							DEG=' ∠'+(Math.atan2(h,px-w)*180/Math.PI).toFixed(2)+'°'
						}else{
							if(offy>0 && offY1>0){tp=y0-offY1}
							py=(offy*offY1<0?h0:h+Math.abs(offY1));

							pnt=[d+px,d,d+px,d+py,d+w-px,d+h,d+w-px,d+py-h];
							DEG=' ∠'+(Math.atan2(w,py-h)*180/Math.PI).toFixed(2)+'°'
						}
					}

					if(/Right/.test(shp)){
						if(w0>h0){
							px=w0+(offx*offX1<0?0:Math.abs(offX1));

							pnt=[d,d+py, d+px,d+py, d+px+(offx<0?0:-Math.abs(offX1)),d+h-py, d+(offx<0?Math.abs(offX1):0),d+h-py];
							DEG=' ∠'+(Math.atan2(h,Math.abs(offX1))*180/Math.PI).toFixed(2)+'°'
						}else{
							py=h0+(offy*offY1<0?0:Math.abs(offY1));

							pnt=[d+px,d,d+px,d+py,d+w-px,d+py+(offy<0?0:-Math.abs(offY1)),d+w-px,d+(offy<0?Math.abs(offY1):0)];
							DEG=' ∠'+(Math.atan2(w,Math.abs(offY1))*180/Math.PI).toFixed(2)+'°'
						}
					}

					if(w0>h0){w=px}else{h=py}
				}

			}

			




			WD=w+sw;
			HT=h+sw;

			shpN.css(ltwh([lt,tp,WD,HT]));
			chd.filter('polygon.main').attr({points:pnt.join(' ')});
			

				Arrf(function(x){chd.filter('.'+x).attr('d',gon(pnt,x).join(' '))}, ZLR('Diagonal Medians Altitudes '+
					zlr2('MidPoint OppositeMidPoint PerpendicularFoot Centroid '+zlr2('Ortho In Circum','center'),'Line')));
				
				if(/Triangon/.test(shp)){
					var g=gon(pnt,'MidPoint');
					for(var i=0;i<3;i++){
						chd.filter('.Midline'+(i+1)).attr('d',['M',g[i*2],g[i*2+1],'L',g[((i+1)%3)*2],g[((i+1)%3)*2+1]].join(' '))
					}
					
					var jA=ZLR('Median Altitude');
					for(var j=0;j<2;j++){
						var g=gon(pnt,jA[j]+'s');
						for(var i=0;i<3;i++){
							chd.filter('.'+jA[j]+(i+1)).attr('d',g.slice(i*6,(i+1)*6).join(' '))
						}
					}
		
				}


		}



		if(/Curve|Quo|Gon|LinWav|Note|arrow|Poly|Free|Lattice/.test(shp)){

			if(/Quo/.test(shp)){

				var px2=+(offX>=0), py2=+(offY<0);

				if(wh){
					tArr.push('M',d,d+py,'A',h2,h2,0,0,py2,d+h2,d+h2,'H',d+w2-h2,'A',h2,h2,0,0,1-py2,d+w2,h-py,h2,h2,0,0,1-py2,d+w2+h2,d+h2,'H',d+w-h2,'A',h2,h2,0,0,py2,d+w,d+py);
				}else{
					tArr.push('M',d+px,d,'A',w2,w2,0,0,px2,d+w2,d+w2,'V',d+h2-w2,'A',w2,w2,0,0,1-px2,w-px,d+h2,w2,w2,0,0,1-px2,d+w2,d+h2+w2,'V',d+h-w2,'A',w2,w2,0,0,px2,d+px,d+h);
				}

			}

			if(/Curve|Wav/.test(shp)){
				var px2=(offX<0?-w:w*2), py2=(offY<0?-h:h*2), Wav=/Wav/.test(shp), tArr2, ishori=hv || !/V/.test(shp) && wh;

				if(isMargin){

					if(/LinWav./.test(shp)){
						if(ishori){
							wn=n;
							n=Math.floor(w/n);
							
							hn=parseInt(h/n);

						}else{
							hn=n;
							n=Math.floor(h/n);
							
							wn=parseInt(w/n);
						}

						w2n=parseInt(wn/2);w4n=parseInt(wn/4);
						h2n=parseInt(hn/2);h4n=parseInt(hn/4);

						w=wn*n;
						h=hn*n;
						
						
						lt=offX<0?x0-w:x0;
						tp=offY<0?y0-h:y0;
						px=(offX<0?w:0);
						py=(offY<0?h:0);
						
					}else if(/[DS]hv/.test(shp)){
						var wn=+$('#gridR').val(), hn=+$('#gridC').val();
						n=Math.floor(min([w/wn, h/hn]));
						
						w=wn*n;
						h=hn*n;
						lt=offX<0?x0-w:x0;
						tp=offY<0?y0-h:y0;
						px=(offX<0?w:0);
						py=(offY<0?h:0);
						
					}else{
						var wn=n, hn=n, w2n=parseInt(n/2), h2n=parseInt(n/2), w4n=parseInt(n/4), h4n=parseInt(n/4);
						n=Math.floor((ishori?w:h)/n);
						
						if(!/Curve|tri|rect/.test(shp)){
							w=wn*n;
							h=hn*n;
							lt=offX<0?x0-w:x0;
							tp=offY<0?y0-h:y0;
							px=(offX<0?w:0);
							py=(offY<0?h:0);
						}
					}

				}else{
					var wn=parseInt(w/n), hn=parseInt(h/n), w2n=parseInt(w/2/n), h2n=parseInt(h/2/n), w4n=parseInt(w/4/n), h4n=parseInt(h/4/n);

					if(!/Curve/.test(shp)){
						w=wn*n;
						h=hn*n;
						lt=offX<0?x0-w:x0;
						tp=offY<0?y0-h:y0;
						
						px=(offX<0?w:0);
						py=(offY<0?h:0);
					}
				}

				if(/CurveWav/.test(shp)){
					px=w2;
					py=h2;
					px2=(offX<0?-w2:w+w2);
					py2=(offY<0?-h2:h+h2);
				}


				if(!n){return}

				if(/Curve/.test(shp)){

					if(wh){
						tArr=['M',d,d+py,'Q'];
					}else{
						tArr=['M',d+px,d,'Q'];
					}
					tArr2=[].concat(tArr);

					if(Wav){
						if(wh){
							tArr.push( d+w4n,	d+py2,		d+w2n,d+py,'T',d+wn,d+py);
							tArr2.push(d+w4n, d+h-py2,	d+w2n,d+py,'T',d+wn,d+py);
						}else{
							tArr.push(	 d+px2,	d+h4n,d+px,d+h2n,'T',d+px,d+hn);
							tArr2.push(d+w-px2,	d+h4n,d+px,d+h2n,'T',d+px,d+hn);
						}
					}

					for(var i=+(Wav);i<n;i++){
						if(wh){
							if(isMargin){
								tArr.push( d+w2n+wn*i, d+(Wav?py:py2), d+wn*(i+1),d+py);
							    tArr2.push(d+w2n+wn*i, d+py,		   d+wn*(i+1),d+py);
							}else{
								tArr.push( d+parseInt(w*(i+1/2)/n), d+(Wav?py:py2), d+parseInt(w*(i+1)/n),d+py);
								tArr2.push(d+parseInt(w*(i+1/2)/n), d+py,		    d+parseInt(w*(i+1)/n),d+py);
							}
						}else{
							if(isMargin){
								tArr.push(d+(Wav?px:px2),d+h2n+hn*i,d+px,d+hn*(i+1));
								tArr2.push(d+px,		 d+h2n+hn*i,d+px,d+hn*(i+1));
							}else{
								tArr.push( d+(Wav?px:px2), d+parseInt(h*(i+1/2)/n), d+px, d+parseInt(h*(i+1)/n));
								tArr2.push( d+px, 		   d+parseInt(h*(i+1/2)/n), d+px, d+parseInt(h*(i+1)/n));
							}

						}
					}

					if(/DCurveWav/.test(shp)){tArr=tArr.concat(tArr2)}


				}

				if(/LinWav/.test(shp)){

					if(/T/.test(shp)){
						if(wh){
							tArr=['M',d,d+h2,'H',d+w];
						}else{
							tArr=['M',d+w2,d,'V',d+h];
						}
					}else if(/[XHV]/.test(shp)){
						tArr=['M',d,d+h*(1-c),'L',d+w,d+h*c];

					}else if(/[DS]hv/.test(shp)){
						tArr=['M',d+px,d+py];


					}else{
						if(w>h){
							tArr=['M',d,d+py];
						}else{
							tArr=['M',d+px,d];
						}
					}

					

					if(/tri/.test(shp)){
						tArr.push('L');
						if(/S/.test(shp)){
							if(wh){
								for(var i=0;i<n;i++){
									tArr.push(d+w2n+wn*i,d+(h-py),d+wn*(i+1),d+py);
								}
							}else{
								for(var i=0;i<n;i++){
									tArr.push(d+(w-px),d+h2n+hn*i,d+px,d+hn*(i+1));
								}
							}
						}else{
							if(wh){
								var tArr2=['M',d+wn*n,d+(n%2==1?py:h-py)];
								for(var i=0;i<n;i++){
									tArr.push(d+wn*(i+1),d+(i%2==0?h-py:py));
									tArr2.push(d+wn*(n-i-1),d+((n-i)%2==0?py:h-py));
								}
							}else{
								var tArr2=['M',d+(n%2==1?px:w-px),d+hn*n];
								for(var i=0;i<n;i++){
									tArr.push(d+(i%2==0?w-px:px),d+hn*(i+1));
									tArr2.push(d+((n-i)%2==0?px:w-px),d+hn*(n-i-1));
								}
							}
							tArr=tArr.concat(tArr2);
						}
					}

					if(/rect/.test(shp)){
						if(wh){
							for(var i=0;i<n;i++){
								tArr.push('V',d+h-py,'H',d+w2n+wn*i,'V',d+py,'H',d+wn*(i+1));
							}
						}else{
							for(var i=0;i<n;i++){
								tArr.push('H',d+w-px,'V',d+h2n+hn*i,'H',d+px,'V',d+hn*(i+1));
							}
						}
					}


					if(/T/.test(shp)){
						if(wh){
							for(var i=0;i<n;i++){
								tArr.push('M',d+parseInt(w2n+wn*i),d,'V',d+h);
							}
						}else{
							for(var i=0;i<n;i++){
								tArr.push('M',d,d+parseInt(h2n+hn*i),'H',d+w);
							}
						}
					}



					if(/SLinWav/.test(shp)){
						var sx=+(offX<0), sy=+(offY<0);
						if(hv){
							for(var i=sx;i<n+sx;i++){
								tArr.push('M',d+parseInt(wn*i),d+parseInt(c==1?hn*i:h-hn*i),'H',d+parseInt(wn*(i+1-sx*2)));
							}
						}else{
							for(var i=sy;i<n+sy;i++){
								tArr.push('M',d+parseInt(c==1?wn*i:w-wn*i),d+parseInt(hn*i),'V',d+parseInt(hn*(i+1-sy*2)));
							}
						}
					}

					if(/DLinWav/.test(shp)){
						if(hv){
							for(var i=1;i<n;i++){
								tArr.push('M',d+parseInt(wn*i-w2n),d+parseInt(c==1?hn*i:h-hn*i),'H',d+parseInt(wn*i+w2n));
							}
						}else{
							for(var i=1;i<n;i++){
								tArr.push('M',d+parseInt(c==1?wn*i:w-wn*i),d+parseInt(hn*i-h2n),'V',d+parseInt(hn*i+h2n));
							}
						}

					}

					if(/[DS]hvLinWav/.test(shp)){
						if(offY<0){
							for(var i=1;i<=n;i++){
								tArr.push('V',d+parseInt(h-hn*i),'H',d+parseInt(offX>0?wn*i:w-wn*i));
							}
						}else{
							for(var i=1;i<=n;i++){
								tArr.push('H',d+parseInt(offX>0?wn*i:w-wn*i),'V',d+parseInt(hn*i));
							}
						}
						if(/D/.test(shp)){
							tArr.push('M',d+px,d+py);
							if(offY<0){
								for(var i=1;i<=n;i++){
									tArr.push('H',d+parseInt(offX>0?wn*i:w-wn*i),'V',d+parseInt(h-hn*i));
								}
							}else{
								for(var i=1;i<=n;i++){
									tArr.push('V',d+parseInt(hn*i),'H',d+parseInt(offX>0?wn*i:w-wn*i));
								}
							}
						}

					}

					if(/X/.test(shp)){
						for(var i=0;i<n;i++){
							tArr.push('M',d+parseInt(wn*i),d+parseInt(hn*(c==1?i+1:n-i-1)),'L',d+parseInt(wn*(i+1)),d+parseInt(hn*(c==1?i:n-i)));
						}
					}

				}

			}
			if(/Note/.test(shp)){
				var w12=Math.ceil(w/12),h12=Math.ceil(h/12),txta=[];
				var sx=+(offX<0), px0=px,px=(offX<0?w12*2:w12*10), px1=(offX<0?w12:w12*11), px2=(offX<0?w12*5:w12*7), px3=(offX<0?h12*2:w-h12*2);
				var sy=+(offY<0), py0=py,py=(offY<0?h12*2:h12*10), py1=(offY<0?h12:h12*11), py2=(offY<0?h12*5:h12*7), py3=(offY<0?w12*2:h-w12*2);

				if(/rect/.test(shp)){
					var Px0=px0+r*(1-sx*2), Py0=py0+r*(1-sy*2),Px3=px3+r*(sx*2-1),Py3=py3+r*(sy*2-1);

					if(wh){
						tArr=['M',d+px,d+py3,'L',d+px1,d+h-py0,d+px2,d+py3,
							'H',d+Px0,'A',r,r,0,0,c,d+px0,d+Py3,
							'V',d+Py0,'A',r,r,0,0,c,d+Px0,d+py0,
							'H',d+w-Px0,'A',r,r,0,0,c,d+w-px0,d+Py0,
							'V',d+Py3,'A',r,r,0,0,c,d+w-Px0,d+py3];
						if(!rnd){tArr=tArr.slice(0,8).concat(['H',d+px0,'V',d+py0,'H',d+w-px0,'V',d+py3])}
						txta.push(lt+r,tp+r+sy*(d+py3),w-2*r-sw,Math.abs(py0-py3)-2*r);
					}else{
						tArr=['M',d+px3,d+py,'L',d+w-px0,d+py1,d+px3,d+py2,
							'V',d+Py0,'A',r,r,0,0,1-c,d+Px3,d+py0,
							'H',d+Px0,'A',r,r,0,0,1-c,d+px0,d+Py0,
							'V',d+h-Py0,'A',r,r,0,0,1-c,d+Px0,d+h-py0,
							'H',d+Px3,'A',r,r,0,0,1-c,d+px3,d+h-Py0];
						if(!rnd){tArr=tArr.slice(0,8).concat(['V',d+py0,'H',d+px0,'V',d+h-py0,'H',d+px3])}
						txta.push(lt+r+sx*(d+px3),tp+r,Math.abs(px0-px3)-2*r,h-2*r-sw);
					}
				}

				if(/ellipse/.test(shp)){
					var h0=h2-w12-d, w0=w2-h12-d;
					px2=(offX<0?w12*4:w12*8);
					py2=(offY<0?h12*4:h12*8);
					px3=Math.ceil(offX<0?w-w0*(1+Math.sqrt(5)/3):w0*(1+Math.sqrt(5)/3));
					py3=Math.ceil(offY<0?h-h0*(1+Math.sqrt(5)/3):h0*(1+Math.sqrt(5)/3));
					px4=Math.ceil(offX<0?w-w0*(1+Math.SQRT2*2/3):w0*(1+Math.SQRT2*2/3));
					py4=Math.ceil(offY<0?h-h0*(1+Math.SQRT2*2/3):h0*(1+Math.SQRT2*2/3));
					if(w>h){
						tArr=['M',d+px,d+py3,'L',d+px1,d+h-py0,d+px2,d+py4,'A',w2,h0,0,1,c,d+px,d+py3];
						txta.push(lt+r,tp+r+sy*(d+py3),w-2*r-sw,Math.ceil(Math.abs(py0-py3)*3/2)-2*r);
					}else{
						tArr=['M',d+px3,d+py,'L',d+w-px0,d+py1,d+px4,d+py2,'A',w0,h2,0,1,1-c,d+px3,d+py];
						txta.push(lt+r+sx*(d+px3),tp+r,Math.ceil(Math.abs(px0-px3)*2/2)-2*r,h-2*r-sw);
					}
					w+=sw*3;
					h+=sw*3;
				}

				if(/fan/.test(shp)){
					hv=!hv;
					
					if(/A/.test(shp)){
						var r1=Math.ceil(w-Math.SQRT2*h), r2=Math.ceil(w/Math.SQRT2), r3=Math.ceil(h-Math.SQRT2*w), r4=Math.ceil(h/Math.SQRT2);
						px=w2+h-r2;
						py=h2+w-r4;
						var px1=(offY<0?px:h-px), py1=(offX<0?py:w-py);
						if(hv){
							tArr=['M',d+px,d+h-py0,'A',r1,r1,0,0,1-sy,d+w-px,d+h-py0,'L',d+w,d+px1,'A',r2,r2,0,0,sy,d,d+px1];
						}else{
							tArr=['M',d+w-px0,d+py,'A',r3,r3,0,0,sx,d+w-px0,d+h-py,'L',d+py1,d+h,'A',r4,r4,0,0,1-sx,d+py1,d];
						}
					}else{
						if(hv && w>h*2 || !hv && h>w*2){return}
						var ax=parseInt(Math.sqrt(h*h-w*w/4)), ay=parseInt(Math.sqrt(w*w-h*h/4));
						var px1=(offY<0?ax:h-ax), py1=(offX<0?ay:w-ay);
						if(hv){
						//	tArr=['M',d+w2,d+py,'L',d+w,d+px1,'A',h,h,0,0,sy,d,d+px1];
							py1=(offY<0?0:h);
							tArr=['M',d+w2,d+py1,'L',d+w,d+px1,'A',h,h,0,0,sy,d,d+px1];
							DEG=' ∠'+(2*Math.asin(w2/h)*180/Math.PI).toFixed(2)+'°';
						}else{
						//	tArr=['M',d+px,d+h2,'L',d+py1,d+h,'A',w,w,0,0,1-sx,d+py1,d];
							px1=(offX<0?0:w);
							tArr=['M',d+px1,d+h2,'L',d+py1,d+h,'A',w,w,0,0,1-sx,d+py1,d];
							DEG=' ∠'+(2*Math.asin(h2/w)*180/Math.PI).toFixed(2)+'°';
						}
					}
				}

				px=(offX<0?w:0); py=(offY<0?h:0);

				if(/Moon/.test(shp)){
					w=w||1;
					h=h||1;
					var rx=Math.ceil(w2+h*h/8/w), ry=Math.ceil(h2+w*w/8/h);

					if(wh){
						tArr=['M',d,d+py,'A',ry,ry,0,0,sy,d+w,d+py];
					}else{
						tArr=['M',d+px,d,'A',rx,rx,0,0,1-sx,d+px,d+h];
					}
				}

				if(/Star/.test(shp)){
					if(/L/.test(shp)){
						tArr=['M',d,d+h2,'A',w2,h2,0,0,1,d+w2,d+h,'A',w2,h2,0,0,1,d+w,d+h2,'A',w2,h2,0,0,1,d+w2,d,'A',w2,h2,0,0,1,d,d+h2];
					}else{
						tArr=['M',d,d+h2,'L',d+w2-r,d+h2+r,d+w2,d+h,d+w2+r,d+h2+r,d+w,d+h2,d+w2+r,d+h2-r,d+w2,d,d+w2-r,d+h2-r];
					}
					
					
					chd.filter('.Diagonal').attr('d',['M',].join(' '));
					chd.filter('.VertexLine').attr('d',['M',].join(' '));
				}

				if(/Heart/.test(shp)){
					tArr='15 8 15 7 14 5 10 5 4 5 4 10 4 10 4 16 8 20 15 24 22 20 26 16 26 12 26 12 26 5 20 5 17 5 15 7 15 8'.split(' ');
					for(var i=0;i<tArr.length;i++){
						tArr[i]=Math.ceil(+tArr[i]*w/30);
						if(i%6==2){tArr[i]='C'+tArr[i]}
					}
					tArr.unshift('M');
				}

				if(/Rnd$/.test(shp)){
					var px1=(offX<0?r:w-r), py1=(offY<0?r:h-r);
					tArr=['M',d+px,d+py,'H',d+w-px,'V',d+py1,'A',r,r,0,0,c,d+px1,d+h-py,'H',d+w-px1,'A',r,r,0,0,c,d+px,d+py1];

					if(/L/.test(shp)){tArr=tArr.slice(0,7).concat('L',tArr.slice(13,17))}
					if(/SA/.test(shp)){tArr=tArr.slice(0,16).concat(d+px)}
					if(/DL/.test(shp)){tArr.push('L',d+px,d+py1)}
					if(/SL/.test(shp)){tArr[11]=d+px}
				}

				if(/dart/.test(shp)){
					var px1=(offX<0?h2:w-h2), py1=(offY<0?w2:h-w2);
					if(wh){
						tArr=['M',d+px,d+h,'H',d+px1,'L',d+w-px,d+h2,d+px1,d,'H',d+px,'L',d+w-px1,d+h2];
						tArr2=[d+w-px,'V'];
						tArr3=[d+w-px,'L',d+px1,d+h2,d+w-px,d];
						tArr4=['M',d+w-px1,d,'L',d+px,d+h2,d+w-px1,d+h];
					}else{
						tArr=['M',d+w,d+py,'V',d+py1,'L',d+w2,d+h-py,d,d+py1,'V',d+py,'L',d+w2,d+h-py1];
						tArr2=[d+h-py,'H'];
						tArr3=[d+h-py,'L',d+w2,d+py1,d,d+h-py];
						tArr4=['M',d,d+h-py1,'L',d+w2,d+py,d+w,d+h-py1];
					}
					if(/M/.test(shp)){
						if(/D/.test(shp)){
							tArr=tArr4.concat(tArr.slice(3,10));
						}else{
							tArr=tArr.slice(0,12);
						}
					}
					if(/F/.test(shp)){
						if(/D/.test(shp)){
							tArr=tArr.slice(0,4).concat(tArr3,tArr.slice(-5));
						}else{
							tArr=tArr.slice(0,4).concat(tArr2,d,tArr.slice(-5));
						}
					}
				}

			}

			if(/Lattice/.test(shp)){
				var r=+$('#gridR').val(),c=+$('#gridC').val();
				
				if(isMargin){
					var	wn=c,hn=r;
					c=Math.floor(w/c);
					r=Math.floor(h/r);

					w=wn*c;
					h=hn*r;

					lt=offX<0?x0-w:x0;
					tp=offY<0?y0-h:y0;

				}else{
					var wn=parseInt((w-(c+1)*sw)/c),hn=parseInt((h-(r+1)*sw)/r);
					w=d+(sw+wn)*c;
					h=d+(sw+hn)*r;

					lt=offX<0?x0-w:x0;
					tp=offY<0?y0-h:y0;
				}
				for(var i=0;i<r;i++){
					for(var j=0;j<c;j++){
						if(isMargin){
							if(i==0 && j>0){
								tArr.push('M',wn*j+d,d,'V',h);
							}
							if(j==0 && i>0){
								tArr.push('M',d,hn*i+d,'H',w);
							}
						}else{
							var mx=(sw+wn)*j,my=(sw+hn)*i;
							if(i==0 && j>0){
								tArr.push('M'+parseInt(mx+sw/2)+' 0 V'+h);
							}
							if(j==0 && i>0){
								tArr.push('M0 '+parseInt(my+sw/2)+' H'+w);
							}
						}
					}
				}
				
				if(!/Inner/.test(shp)){
					tArr.push('M',d,d,'H',w,'V',h,'H',d,'V',d);
				}
			}


			if(/arrow/.test(shp)){
				var w4=Math.ceil(w/4), h4=Math.ceil(h/4), px1=(offX<0?h2:w-h2), py1=(offY<0?w2:h-w2);
				if(wh){
					tArr=['M',d+w-px,d+h2,'L',d+px1,d,'V',d+h4,'H',d+w-px1,'V',d,'L',d+px,d+h2,d+w-px1,d+h,'V',d+h-h4,'H',d+px1,'V',d+h];
					tArr2=[d+px,'L',d+w-px1,d+h2,d+px,d+h-h4];
				}else{
					tArr=['M',d+w2,d+h-py,'L',d,d+py1,'H',d+w4,'V',d+h-py1,'H',d,'L',d+w2,d+py,d+w,d+h-py1,'H',d+w-w4,'V',d+py1,'H',d+w];
					tArr2=[d+py,'L',d+w2,d+h-py1,d+w-w4,d+py];
				}
				if(/S/.test(shp)){tArr=tArr.slice(0,9).concat(tArr2.slice(0,1),tArr.slice(-6))}
				if(/X/.test(shp)){tArr=tArr.slice(0,9).concat(tArr2.slice(0,1),tArr2.slice(-5),tArr.slice(-4))}
			}


			if(/GonRnd/.test(shp)){

				if(/LO/.test(shp)){
					tArr=['M',d,d+r,'V',d+h-r,'H',d+r,'V',d+h,'H',d+w-r,'V',d+h-r,'H',d+w,'V',d+r,'H',d+w-r,'V',d,'H',d+r,'V',d+r];
				}
				if(/AO/.test(shp)){
					tArr=['M',d,d+r,'Q',d+r,d+h2,d,d+h-r,'H',d+r,'V',d+h,'Q',d+w2,d+h-r,d+w-r,d+h,'V',d+h-r,'H',d+w,
									'Q',d+w-r,d+h2,d+w,d+r,'H',d+w-r,'V',d,'Q',d+w2,d+r,d+r,d,'V',d+r];
				}

				var r2=Math.ceil(r/2);
				if(/LI/.test(shp)){
					if(/T/.test(shp)){
						tArr=['M',d,d+h2-r2,'V',d+h2+r2,'H',d+w2-r2,'V',d+h,'H',d+w2+r2,'V',d+h2+r2,'H',d+w,'V',d+h2-r2,'H',d+w2+r2,'V',d,'H',d+w2-r2,'V',d+h2-r2];
					}else{
						var a=Math.atan2(h,w), s=Math.sin(a), c=Math.cos(a), wi=Math.ceil(r/2/(s||.001)), hi=Math.ceil(r/2/(c||.001)), cr=parseInt(c*r), sr=parseInt(s*r);
						tArr=['M',d,d+cr,'L',d+w2-wi,d+h2,d,d+h-cr,d+sr,d+h,d+w2,d+h2+hi,d+w-sr,d+h,d+w,d+h-cr,d+w2+wi,d+h2,d+w,d+cr,d+w-sr,d,d+w2,d+h2-hi,d+sr,d];
					}


				}
				if(/AI/.test(shp)){
					if(/T/.test(shp)){
						tArr=['M',d+r2,d+h2-r2,'A',r2,r2,0,0,0,d+r2,d+h2+r2,'H',d+w2-r2,'V',d+h-r2,'A',r2,r2,0,0,0,d+w2+r2,d+h-r2,'V',d+h2+r2,'H',d+w-r2,'A',r2,r2,0,0,0,d+w-r2,d+h2-r2,'H',d+w2+r2,'V',d+r2,'A',r2,r2,0,0,0,d+w2-r2,d+r2,'V',d+h2-r2];
					}else{
						var a=Math.atan2(h,w), s=Math.sin(a), c=Math.cos(a), wi=Math.ceil(r/2/(s||.001)), hi=Math.ceil(r/2/(c||.001)), cr=parseInt(c*r), sr=parseInt(s*r);
						tArr=['M',d+r2,d+r2+cr,'L',d+w2-wi,d+h2,d+r2,d-r2+h-cr, 'A',r2,r2,0,0,0, d+r2+sr,d-r2+h,'L',d+w2,d+h2+hi,d-r2+w-sr,d-r2+h, 'A',r2,r2,0,0,0, d-r2+w,d-r2+h-cr,'L',d+w2+wi,d+h2,d-r2+w,d+r2+cr,'A',r2,r2,0,0,0, d-r2+w-sr,d+r2,'L',d+w2,d+h2-hi,d+r2+sr,d+r2,'A',r2,r2,0,0,0,d+r2,d+r2+cr];
					}
				}

				if(/QI/.test(shp)){

					tArr=['M',d,d+r,'Q',d+r,d+h2,d,d+h-r,'L',d+r,d+h,'Q',d+w2,d+h-r,d+w-r,d+h,'L',d+w,d+h-r,
									'Q',d+w-r,d+h2,d+w,d+r,'L',d+w-r,d,'Q',d+w2,d+r,d+r,d];

				}


				if(/LG/.test(shp)){
					if(isSq){
						if(wh){
							var ha=parseInt(w*Math.sqrt(3)/4), wa=parseInt(w/4);
							tArr=['M',d,d+w2,'L',d+wa,d+w2+ha,'H',d+wa*3,'L',d+w,d+w2,d+wa*3,d+w2-ha,'H',d+wa];
						}else{
							var wa=parseInt(h*Math.sqrt(3)/4), ha=parseInt(h/4), ht=parseInt(3*h/4);
							tArr=['M',d+h2-wa,d+ht,'L',d+h2,d+h2*2,d+h2+wa,d+ht,'V',d+ha,'L',d+h2,d,d+h2-wa,ha];
						}
					}else{
						tArr=['M',d,d+r,'V',d+h-r,'L',d+r,d+h,'H',d+w-r,'L',d+w,d+h-r,'V',d+r,'L',d+w-r,d,'H',d+r,'L',d,d+r];
					}
				}
				if(/AG/.test(shp)){
					tArr=['M',d,d+r,'V',d+h-r,'A',r,r,0,0,1,d+r,d+h,'H',d+w-r,'A',r,r,0,0,1,d+w,d+h-r,
									'V',d+r,'A',r,r,0,0,1,d+w-r,d,'H',d+r,'A',r,r,0,0,1,d,d+r];
				}
			}

			if(/Poly|Free/.test(shp)){

				var dd=chd.filter('path.main').attr('d');

				if(!dd){$(svgid+'='+L.drawShape+']').click();return}

				var tArr=dd.replace(/[MLz]/g,'').split(' '),tArr0=[],tArr1=[], Shp;

				if(/Free/.test(shp)){
					tArr.push(+tArr.slice(-2,-1)+offX,+tArr.slice(-1)+offY);
					L.X0=X; L.Y0=Y;
				}



				for(var i=0;i<tArr.length;i++){
					if(i%2==0){
						tArr0.push(+tArr[i]);
					}else{
						tArr1.push(+tArr[i]);
					}
				}
				var n=tArr0.length;
				if(/Poly/.test(shp)){
					tArr0[n-1] =tArr0[n-2]+offX;
					tArr1[n-1] =tArr1[n-2]+offY;
				}




				var minW=min(tArr0), minH=min(tArr1);
				w=max(tArr0)-minW;
				h=max(tArr1)-minH;


				
				for(var i=0;i<n;i++){
					tArr0[i] -= minW-d;
					tArr1[i] -= minH-d;
					tArr[i*2]=tArr0[i];
					tArr[i*2+1]=tArr1[i];
				}

				if(n>2){
					Arrf(function(x){var dA=gon(/Poly/.test(shp)?tArr.slice(0,n*2-2):tArr,x);
						if(dA.length>2){chd.filter('.'+x).attr('d',dA.join(' '))}
					},ZLR('Medians Altitudes Diagonal '+
					zlr2('MidPoint OppositeMidPoint PerpendicularFoot Centroid','Line')));
				}

				tArr[0]='M'+tArr[0];


				tArr[2]='L'+tArr[2];

				if(/Gon/.test(shp)){tArr[2*n-1] += 'z'}

				lt=X-tArr0[n-1]; tp=Y-tArr1[n-1];


				if(/Poly/.test(shp)){drawOn()}

			}

			if(/GonRnd|Note|arrow/.test(shp)){tArr.push('z')}

			WD=w+sw;
			HT=h+sw;

			shpN.css(ltwh([lt,tp,WD,HT]));
			chd.filter('path.main').attr('d',tArr.join(' '));
			
			if(/(rect|ellipse)Note/.test(shp)){
				shpN.attr('data-txta',txta.join(','))
			}

			if(/Gon|Note|arrow/.test(shp) && !/A|Heart|Star/.test(shp) && tArr.length>3){
				Arrf(function(x){var dA=gon(tArr.join(' '),x);
					if(dA.length>2){chd.filter('.'+x).attr('d',dA.join(' '))}
				},ZLR('Diagonal Medians MidPointLine OppositeMidPointLine Altitudes PerpendicularFootLine'));
			}

		}

	}else{
		if(shp=='Pointer'){
			if(L.drawMove=='yes'){
				
				if(shpN.length){
					var lt,tp;
					shpN.css({left:function(i,v){lt=+v.replace('px','')+offX; return lt+'px'},top:function(i,v){tp=+v.replace('px','')+offY; return tp+'px'}});
					L.X0=X;
					L.Y0=Y;
					WD=shpN.css('width').replace('px','');
					HT=shpN.css('height').replace('px','');
				}else{
					
					
					$('#Ox').val(function(i,v){return v-offX});
					$('#Oy').val(function(i,v){return v-offY})
					if(offX||offY){
						$('#Oy').change();
					}
					L.X0=X;
					L.Y0=Y;
				}
			}
		}

	}


	if(shpN.length && (L.drawEnd || L.drawMove || act=='TEXTAREA')){

		var c='#css', Z=shpN.css('z-index').replace(/\D/g,'')||2000;

		if(!(act=='TEXTAREA' && !L.drawMove)){
			$(c+'X').val(lt);
			$(c+'Y').val(tp);
			$(c+'Z').val(Z);
		}
		WD=shpN.css('width').replace('px','');
		HT=shpN.css('height').replace('px','');
		$('#WH').text(WD+'×'+HT);
		$('#Angle').text(DEG);
	}

}

