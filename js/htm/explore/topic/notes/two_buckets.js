/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

explore['Topic/Short Notes/Two Buckets'] =

detail('两水桶问题f(x,y,z)',
	[	
		'大水桶容积 x='+num(5)+'L，小水桶容积 y='+num(3)+'L，如何得到'+num(1)+'L的水'+btnGo+
		DCtv('ans" data-q="2-buckets')
	].join(br)+


	        
    detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[

		[href(Hs+'math.stackexchange.com/questions/1346899/is-there-a-general-solution-to-the-water-bucket-logic-problem','Is there'),''],
		[href(Hs+'mathoverflow.net/questions/5800/generalization-of-the-two-bucket-puzzle','generalization'),''],



    ],'TBrc'),1)

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
						

						txtArr.push(svgf.text(i, [parseInt(h-i*hn)+Ihn+d*3, wn*i/2+c*wn+d*10, 16]));

						if(i){

							txtArr.push(svgf.text(i, [parseInt(h-i*hn)+Ihn+d*3, wn*i/2-d*10, 16]));
							
						}
					
					}
					txtArr.push(svgf.text(r, [parseInt(h-r*hn)+Ihn+d*3, wn*r/2+c*wn+d*10, 16]));
					txtArr.push(svgf.text(r, [parseInt(h-r*hn)+Ihn+d*3, wn*r/2-d*10, 16]));



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

					ans.html(svgf.id('buckets',svgf.path(tArr.join(' '),RandomColor()+'" stroke-linejoin="round')+
						txtArr.join(''),
					1,'2" width="'+(w+wn+d*3)+'" height="'+parseInt(h+hn*2+d*3)))


				}
					
			}



		}

	});

});