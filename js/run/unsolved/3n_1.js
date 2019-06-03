/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */


$(function(){
	
	if(!/topic=3n_1/.test(sch)){return} $('#title').text('3n+1猜想');
	
	/*
	//Arrf(function(n){return seqrA(n,'3n+1',function(s){var x=s; if(x%2){x=x*3+1} while(!(x%2)){x=x/2} return x},function(t){return t==1},[],1000) },seqA(3,10,'',2))
	*/

//	console.log(orbits('3n+1',5));


	var seqrA=function(start,type,fn,fnstop,fnstopA,maxl){//递归序列: 初始值，类型（决定终止条件）,fn是主迭代函数，fnstop是终止条件函数（返回布尔值false或者数字0，或空字符串） 递归（或迭代）次数未知 (maxl限定最多迭代次数，防止死循环)
		var y=type||'3n+1',hasfn=fn!==null,hasfn1=fnstop!==null,l=maxl||1000,t=[];
		if(/^\d+n[\+\-]\d+$/.test(y)){//
			/*
				n+1：奇数->偶数 是收敛的
				
			*/
			var fn=function(x0){
				var x=x0;
				if(fnstop(x)){
					return x
				}else if(x%2){
					//x=x+1; //n+1
					//x=3*x+1;//3n+1 轨道2^n 2^(n-1) ... 2 1→4→1 例如：3，5，1；7，11，17，13，5
					//x=3*x-1;//3n-1 轨道2^n 2^(n-1) ... 2 1→2→1 ，5→7→5，17→25→37→55→41→61→91→17
					//x=5*x+1;//5n+1 轨道1→3→1，13→33→83→13	x=7循环节很长11827 7→9→...→179→7  17→43→27→17 x=21循环节更长21→53→133→...→ seqrA(3551509573856991,0,0,0,40000)长度还未算出来(>8万)
					//x=5*x+3;//5n+3 轨道1→8→1, 3→9→3, 存在更长的循环节例如5～，7～但长度都还未算出来(>8万)
					//x=5*x-1;//5n-1 轨道1→4→1, 3→7→17→21→13→1, 存在更长的循环节例如11～但长度都还未算出来(>1万)
					//x=5*x-3;//5n-3 轨道1→2→1, 3→12→3, 存在更长的循环节例如11～但长度都还未算出来(>1万)
					//console.log(+y.split('n')[0],+y.split('n')[1]);
					x=+y.split('n')[0]*x+(+y.split('n')[1])
				}
				while(!(x%2)){
					x=x/2
				}
				return x
			},fnstop=function(x){//若x已经在A或t中则停止
				
				//	return x<=1 //3n+1	轨道1→4→1
				//	return x==1||x==5||x==17 //3n-1
				
				//return x==1||x==7||x==13||x==17 //5n+1
				//return x==1||x==3||x==5 //5n+3
				//return x==1||x==3 //5n-1
				//return x==1||x==3 //5n-3
				var j=(fnstopA||t).indexOf(x);
				return j>0 && j<(fnstopA||t).length-1
			}
		}
		var m=fn(start);
		//console.log('m='+m);
		t=[fnstop(m),start,m];
		while(!t[0] && t.length<l){
			//console.log(t);
			m=fn(m);
			//console.log('m = '+m);
			if(t.indexOf(m)>0){//已存在
				t.push(m);
				break;
			}
			t.push(m);
			t[0]=fnstop(m);

		}
		return t.slice(1)
			
	}, orbits=function(type){//输出轨道【增加一个参数，chrome for循环会假死（不知原因）】

		var a=[],b=[];
		for(var i=3;i<100;i+=2){//range||1000
			if(a.indexOf(i)<0){
				var s=seqrA(i,type||'3n+1','','',a),str=s.join('→'),bb=1;
				//b.push(str);
				for(var j in b){//去掉小子串
					if(b[j]==str || b[j].indexOf('→'+str)>0){//不添加小子串
						bb=0;
						break;
					}else if(str.indexOf('→'+b[j])>0){//用大子串替换小子串
						b[j]=str;
						bb=0;
						break;
					}
				}
				if(bb){
					b.push(str);
				}

				for(var j in s){//记录新出现的数字
					if(a.indexOf(s[j])<0){
						a.push(s[j]);
					}
				}
			}
		}
		//console.log(b.sort(sortBy.len).join('\n'));
		return b.sort(sortBy.len)
		//return 'ok'
		/*
			观察3n+1轨道尾部，
	5 2^4
	21 2^6
	85 2^8
	341 2^10


	可以猜测

	3不整除2^q-1（q是奇数）
	例如，3不整除 2^5-1=31

		*/

	},tree=function(typkb,kb){//输出分叉（按奇偶二分）
		var a=[],k=kb[0],b=kb[1],tk=typkb[0],tb=typkb[1];
		if(k%2 && b%2){/*
			kx+b = k(2y)+b → 3ky+(3b+1)/2
			kx+b = k(2y+1)+b → ky+(k+b)/2
			
			*/
			a=[[k*tk,(tk*b+tb)/2],[k,(k+b)/2]]
		}
		if(!(k%2) && b%2){/*
			kx+b → (3k/2)x+(3b+1)/2

			*/
			a=[[k*tk/2,(tk*b+tb)/2]]
		}
		if(k%2 && !(b%2)){/*
			kx+b = k(2y)+b → ky+b/2
			kx+b = k(2y+1)+b → 3ky+[3(k+b)+1]/2
			
			*/
			a=[[k,b/2],[k*tk,(tk*(k+b)+tb)/2]]
		}
		if(!(k%2) && !(b%2)){/*
			kx+b → (k/2)y+(b/2)
			
			*/
			a=[[k/2,b/2]]
		}
		
		
		return a
	},trees=function(type,step){//迭代多次后，演化序列
		var n=0,kb=(type||'3n+1').split('n'),a=[+kb[0],+kb[1]],B=[[a[0],(a[0]+a[1])/2]],A=[a.join(),B.join()],steps=step||10;
		//console.log(a,'B='+B,A);
		while(n<steps){
			for(var i=0;i<B.length;i++){
				var c=tree(a,B[i]);
				//console.log(c);
				if(c.length==1){
					if(A.indexOf(c.join())>-1){
						B.splice(i,1);
						i--;
					}else{
						A.push(c.join());
						B.splice(i,1,c[0]);
					}
				}else{
					if(A.indexOf(c[0].join())>-1 && A.indexOf(c[1].join())>-1){
						B.splice(i,1);
						i--;
					}else if(A.indexOf(c[0].join())<0 && A.indexOf(c[1].join())<0){
						A.push(c[0].join(),c[1].join());
						B.splice(i,1,c[0],c[1]);
						i++;
					}else{
						var t=0;
						if(A.indexOf(c[1].join())<0){
							t=1
						}
						A.push(c[t].join());
						B.splice(i,1,c[t]);
					}
					
				}
				
			}
			n++;
			//console.log(n);
		}
		return 'A='+A.join('; ')+'\n\nB='+B.join('; ')
	};




	var s='';
	for(var i=3;i<5;i+=2){//i<8
		for(var j=1;j<i;j+=2){
			s+=detail(i+'n+'+j+'轨道',DCtv('scroll',orbits(i+'n+'+j).join(br)))//+detail(i+'n+'+j+'图','')
				+detail(i+'n-'+j+'轨道',DCtv('scroll',orbits(i+'n-'+j).join(br)))//+detail(i+'n-'+j+'图','');
			
		}
	}
	
	$('#wiki').html(detail('奇数→kn+b 偶数→除以2',s)+
		'<input type=number id=k value=3 min=3 max=1000 />n<label class=numsign>+</label><input type=number id=b value=1 max=1000 min=-1000 /><div id=knb>'+dc);
	
	$('body').on('click change keyup','#k,#b',function(){
		var k=+$('#k').val(),b=+$('#b').val(),knb=k+'n'+(b<0?b:'+'+b);
		$('#b').prev().text(b<0?'':'+');
		$('#knb').html(detail(knb+'轨道',DCtv('scroll',orbits(knb).join(br))));//+detail(knb+'图','')
	});
});
