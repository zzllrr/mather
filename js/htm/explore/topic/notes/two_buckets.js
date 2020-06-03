/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

explore['Topic/Short Notes/Two Buckets'] =

detail('两水桶问题f(x,y,z)',
	[	
		'大水桶容积 x='+num(5,1)+' L，小水桶容积 y='+num(3,1)+' L，如何得到'+num(1,1)+' L的水'+btnGo+
		DCtv('ans" data-q="2-buckets')
	].join(br)+


	        
    detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[

		[href(Hs+'math.stackexchange.com/questions/1346899/is-there-a-general-solution-to-the-water-bucket-logic-problem','Is there'),''],
		[href(Hs+'mathoverflow.net/questions/5800/generalization-of-the-two-bucket-puzzle','generalization'),''],



    ],'TBrc'))

);

$(function(){
	$('#oHTML').on('click','.vipurl',function(){
		var me=$(this), ans=me.next(),dq=ans.attr('data-q');
		if(dq=='2-buckets'){
			var Q=me.prev(), L1=Q.prev(), L2=L1.prev(), q=+Q.val(), l1=+L1.val(), l2=+L2.val();
			if(q*l1*l2){
				
				var g=+gcd([l1,l2]);
				if(q % g ){

					ans.html(['两个水桶容积的最大公因数gcd('+[l1,l2]+')='+g, '但因'+g+'不整除'+q, '因此无解'].join(br))


				}else{

					

					var c=l2, r=l1, wn=50, hn=Math.sqrt(3)*wn/2, Ihn=parseInt(hn), d=2, tArr=[], txtArr=[],
					w=d+wn*parseInt(l2+l1/2),
					h=Math.ceil(d+hn*r), h3=parseInt(h/Math.sqrt(3));


					tArr.push('M',d+wn*r/2,d+Ihn,'H',d+wn*r/2+wn*c);
					
					for(var i=0;i<r;i++){
						tArr.push('M',d+wn*i/2, parseInt(h-i*hn)+Ihn ,'H',d+wn*i/2+c*wn);
						

						txtArr.push(svgf.text(i, [parseInt(h-i*hn)+Ihn+d*3, wn*i/2+c*wn+d*10, 16],'green'));

						if(i){

							txtArr.push(svgf.text(i, [parseInt(h-i*hn)+Ihn+d*3, wn*i/2-d*10, 16],'green'));
							
						}
					
					}
					txtArr.push(svgf.text(r, [parseInt(h-r*hn)+Ihn+d*3, wn*r/2+c*wn+d*10, 16],'green'));
					txtArr.push(svgf.text(r, [parseInt(h-r*hn)+Ihn+d*3, wn*r/2-d*10, 16],'green'));



					for(var j=0;j<=c;j++){
						
						tArr.push('M',wn*j+d,h+Ihn ,'L', wn*j+h3+d, d+Ihn);

						if(j){
							

							if(j<r){
								tArr.push('M',wn*j+d,h+Ihn ,'L', wn*j/2+d, d+h-parseInt(hn*j)+Ihn);

								tArr.push('M', parseInt(w+d-wn*j+wn/2),d+Ihn ,'L',w-wn*j/2+wn/2+d, d+parseInt(hn*j)+Ihn);
							}else{

								tArr.push('M',wn*j+d,h+Ihn ,'L', wn*j+d- h3, d+Ihn );
							}
						}
						
						txtArr.push(svgf.text(j, [h+Ihn+d*10, wn*j, 16],"red"));
						txtArr.push(svgf.text(c-j, [Ihn-d*5, parseInt(w+d-wn*j+wn/2), 16], "red"));

					}
					//4条边各一个点，每个点有两个方向，最终到达顶点（左上或右下，即只有一个桶装满水，全空，全满不考虑），若折线数最少，则步骤最少。
					var ansA=[], pA=[];
					if(q==l1 || q==l2){
						ansA.push('只需一步（'+'小大'[+(q==l2)]+'桶装满水），即可')
					}else{
						if(q<l1){
							var A2=[[[q,l1],[q+l1,0]], [[l2,q],[l2+q-l1,l1]]];

						}else{

							var A2=[[[q,l1],[q+l1,0]], [[q,0],[q-l1,l1]]];
						}
						var f=function(A){
							var last=A.slice(-1)[0], lastt=A.slice(-2)[0];
							//console.log(lastt, last);
							if(last[0] == l2 && last[1]==0 || last[0] == 0 && last[1]==l1  ){// 左上或右下，即只有一个桶装满水
								A.push([0,0])
							}else{
								if(lastt[0]+lastt[1]==last[0] + last[1] ){// 交换 （左上，然后水平向右 或左下；右下，然后右上 或水平向左）	//lastt[0]==last[1] && lastt[1]==last[0] 
									if(last[0]< lastt[0]){
										if(lastt[0]<l1){
											A.push([l2 ,last[1]])
										}else{
											A.push([last[0], 0])
										}
										

									}else{
										//if(lastt[0]<l1){
										if(last[1]==0){
											A.push([last[0], l1])
										}else{
											A.push([0, last[1]])
										}
									}

								}else if(lastt[1]==last[1]){// 水平，装满或倾倒大桶（左，然后右下；右，然后左上）
									
									if(last[0]==0){
										A.push([last[1], 0])
									}else{

										A.push([last[0]+last[1]-l1, l1])
									}
								}else{// 装满或倾倒小桶（左下，然后左上；右上，然后右下）

									if(last[1]< lastt[1]){
										if(lastt[0]<l1){
											A.push([0,last[0]])
										}else{
											A.push([last[0]+last[1]-l1,l1])
										}
										
									}else{

										//if(lastt[0]<l1){
										if(lastt[0]+l1<l2){
											A.push([last[0]+last[1],0])

							
										}else{
											A.push([l2,last[0]+last[1]-l2])
										}
									}

								}

								
								f(A);

							}
						};
						Arrf(f,A2);
						var steps=[];
						ansA.push(Arrf(function(x){
							if(steps.length <1 || steps[0][0]> x.length-1){
								steps=[[x.length-1, [].concat(x)]];
							}else if(steps.length && steps[0][0]== x.length-1){
								steps.push([x.length-1, [].concat(x)]);

							}
							x=x.reverse();
							return x.join(' → ') + '（'+(x.length-1)+'步）'},A2).join(br));

						ansA.push('最少步数是'+steps[0][0]);
						var path0=[], pathLen=[],
						
							fxy=function(t){//根据三角形坐标 计算 实际svg坐标
							
							return [d+parseInt(wn*t[1]/2)+wn*t[0], d+h-parseInt(hn*t[1])+Ihn].join(' ')

						}, dxy=function(p0,p1){//计算线段两端点坐标间的距离
							var d=0;
							if(p0[0]==p1[0]){// 垂直距离，一般用不到
								d=Math.abs(p0[1]-p1[1])*Ihn

							}else if(p0[1]==p1[1]){
								d=Math.abs(p0[0]-p1[0])*wn

							}else if(p0[0]+p0[1]==p1[0]+p1[1]){
								d=Math.abs(p0[0]-p1[0])*wn

							}else if(p0[1]!=p1[1]){
								d=Math.abs(p0[1]-p1[1])*wn
							}
							return d
						};
						Arrf(function(x){var y=x[1].reverse();y.shift();
							pathLen.push(plus(Arrf(function(t,i){return dxy(i?x[1][i-1]:[0,0], x[1][i])}, y)));
							path0.push('M'+fxy([0,0])+'L'+Arrf(fxy, y).join(' '))}, steps);

						pA=Arrf(function(t,i){
							var lastP=fxy(steps[i][1].slice(-1)[0]).split(' ');
							return svgf.path(t, RandomColor()+'" id="shortcut'+i+'" stroke-linejoin="round" stroke-width="4" stroke-dasharray="'+pathLen[i]+'" stroke-dashoffset="'+pathLen[i])+
						//svgf.circle(d,d+h+Ihn,d*3,RandomColor(),RandomColor())+
						svgf.circle(+lastP[0], +lastP[1], d*3,RandomColor(),RandomColor())+
						svgf.ani('shortcut'+i)}, path0);
					}

					ans.html(svgf.id('buckets',svgf.path(tArr.join(' '),RandomColor()+'" stroke-linejoin="round')+
						
						txtArr.join('')+
						pA.join(''),
						1,'2" width="'+(w+wn+d*3)+'" height="'+parseInt(h+hn*2+d*3))+br+ansA.join(br))


				}
					
			}



		}

	});

});