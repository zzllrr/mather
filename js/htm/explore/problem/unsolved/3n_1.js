/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */
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


explore['Problem/Unsolved/3n+1']=function(){

	var s='';
	for(var i=3;i<5;i+=2){//i<8
		for(var j=1;j<i;j+=2){
			s+=detail(i+'n+'+j+'轨道',DCtv('scroll',orbits(i+'n+'+j).join(br)))//+detail(i+'n+'+j+'图','')
				+detail(i+'n-'+j+'轨道',DCtv('scroll',orbits(i+'n-'+j).join(br)))//+detail(i+'n-'+j+'图','');
			
		}
	}
	return detail('奇数→kn+b 偶数→除以2',s)+num('3" id="k_kn_b',3,1000)+
		'n<label class=numsign>+</label>'+
		num('1" id="b_kn_b',-1000,1000)+
		'<div id=knb>'+dc+
		detail(gM('Notes'),
	XML.wrapE('LA',`
	\\begin{aligned}
	设\\\\
	& H(x)=$piece([
	'3x+1~当x是奇数时',
	'x\\\\/2~当x是偶数时'
	])$\\\\
	& 集合A=\\{x|x是奇数且符合猜想\\}\\\\
	& 集合B=\\{x|x是偶数且符合猜想\\}\\\\
	& 一次多项式函数P(x)=ax+b\\\\
	& 典型一次多项式函数：\\\\
	& f(x)=3x+1\\\\
	& g(x)=4x+1\\\\
	& h(x)=2x+1\\\\
	& ∀ k∈ Z^+\\\\
	
	& 函数T(x)经过n次迭代后，记为\\\\
	& T^{(n)}(x)=\\underbrace{T(T(⋯ T(x)⋯))}_{n层嵌套}\\\\
	& 特别地，T^{(0)}(x)=x，\\\\
	& T^{(-1)}(x)表示求反函数\\\\~\\\\
	
	
	引理1：& P^{(n)}(x)=a^nx+b(a^{n-1}+a^{n-2}+⋯+1)\\\\
	& 证明：P^{(n)}(x)=a P^{(n-1)}(x)+b\\\\
	& 当a=1时，显然成立。此时P^{(n)}(x)=x+nb\\\\
	& 当a≠1时，\\\\
	
	& P^{(n)}(x)+b\\/{a-1}=a\\left(  P^{(n-1)}(x)+b\\/{a-1}\\right)\\\\
	& =⋯=a^{n-1}\\left(  P(x)+b\\/{a-1}\\right)=a^n\\left(x+b\\/{a-1}\\right)\\\\
	
	& 则P^{(n)}(x) =a^nx+b{a^n-1}\\/{a-1}（显然也可写成引理1中的公式形式）\\\\
	&=a^n\\left( x+b\\/{a-1}\\right)-b\\/{a-1}\\\\
	
	引理2：& \\\\
	&P^{(n)}(x)是$piece([
	'偶数，当a，b都是偶数时',
	'奇数，当a偶b奇时',
	
	'n，x同奇同偶时为偶，否则为奇，当a，b都是奇数时',
	'与x同奇偶，当a奇b偶时'])$ \\\\
	
	&f^{(n)}(x)是$piece([
	'奇数，当n，x一奇一偶时',
	'偶数，当n，x同奇同偶时'])$ \\\\
	&g^{(n)}(x)恒为奇数 \\\\
	
	& \\\\
	
	定理1：& T(x)是奇数且
	f(T(x))∈ B => T(x) ∈A \\\\&（易证，根据集合A、B的定义）\\\\
	定理2：&
	x ∈ A => $piece([
	'g(x)，g^{(n)}(x) ∈ A（见证明(1)、(2)）',
	'f(x)，2^kx，2^kf(x)∈ B（易证）',
	'同时可猜测：B有且只有这三种类型元素，但类型可能有重叠',
	'f(f(x))，f^{(n)}(x)∈ B（不易证，可能不恒成立）'
	])$ \\\\
	
	定理3：&
	x ∈ B => $piece([
	'f^{(-1)}(x)∈ A（奇数时，易证）',
	'f(x)∈ A（未知是否）',
	'g^{(n)}(x) ∈ A（未知是否）',
	'f(x)∉B（易证，是奇数）',
	'2^kx∈ B（易证）',
	'2^kf(x)∈ B（未知是否，因为未知是否奇数f(x)∈ A）',
	])$ \\\\

	定理4：&
	x ∈ A, y ∈ A => $piece([
	'f(x)+f(y)=2f '+zp(kfrac('x+y/2'))+'（恒成立）',

	'当'+kmod('x','y≡1或-1',4)+'，且'+kfrac('x+y/2')+'∈ A时，',
	'f(x)+f(y)，2^k(f(x)+f(y))，x+y，2^k(x+y)∈ B',

	'当'+kmod('x','y',4,1)+'时，此时偶数'+kfrac('x+y/2')+'∉A，',
	'f(x)+f(y)∈ B（未知是否）',
	''])$ \\\\
	
	证明：\\\\
	& (1)~ g(x) ∈ A\\\\
	& f(g(x))=12x+4=4f(x)∈B=> g(x) ∈ A\\\\~\\\\
	& (2)~ g^{(n)}(x) ∈ A\\\\
	& g^{(n)}(x)=4^n \\left(x+1\\/3\\right)-1\\/3\\\\
	& 例如：g^{(2)}(x)=g(g(x))=16x+5\\\\
	& g^{(n)}(x)+1\\/3=4\\left( g^{(n-1)}(x)+1\\/3 \\right)=⋯=4^n \\left(x+1\\/3\\right)\\\\
	&f(g^{(n)}(x))=4^n (3x+1)=4^nf(x)∈B => g^{(n)}(x) ∈A\\\\~\\\\
	& (3)~ P(x)=ax+b∈B ⟺ a=4^k，b={4^k-1}\\/3\\\\
	& 充分性：显然。\\\\
	& 必要性：\\\\
	& f(P^{(n)}(x)) = a^n3x+3b{a^n-1}\\/{a-1}+1=a^nf(x)+(3b-a+1){a^n-1}\\/{a-1}\\\\
	& 令3b-a+1=0，且a=2^m，得\\\\
	& 3b+1=a=2^m=(3-1)^m\\\\
	& 则m是偶数（等式两边同时\\mod 3即可得知）\\\\
	& 即此时 a=4^k，b={4^k-1}\\/3, 且P(x),P^{(n)}(x)∈B\\\\
	
	未知\\\\
	&(是否一定∈B)：\\\\
	& (1)\\\\
	& f(h(x))=6x+4=2f(x)+2\\\\~\\\\
	& (2)\\\\
	& g(f(x))=12x+5\\\\
	& f(g(f(x)))=36x+16=12f(x)+4\\\\~\\\\
	& (3)\\\\
	& f^{(n)}(x)=3^n \\left(x+1\\/2\\right)-1\\/2\\\\
	& f(f^{(n)}(x))=f^{(n+1)}(x)=3^nf(x)+{3^n-1}\\/2\\\\~\\\\
	& (4)\\\\
	& f(x+2k)=3(x+2k)+1=f(x)+6k\\\\
	& f((2k+1)x)=3(2k+1)x+1=(2k+1)f(x)-2k
	\\\\~\\\\
	
	\\end{aligned}\\\\ 
	 
		`))+
	detail(gM('Refer'),enwiki('Collatz_conjecture'));
}();


$(function(){

	
	/*
	//Arrf(function(n){return seqrA(n,'3n+1',function(s){var x=s; if(x%2){x=x*3+1} while(!(x%2)){x=x/2} return x},function(t){return t==1},[],1000) },seqA(3,10,'',2))
	*/

//	console.log(orbits('3n+1',5));


	$('body').on('click change keyup','#k_kn_b,#b_kn_b',function(){
		var k=+$('#k_kn_b').val(),b=+$('#b_kn_b').val(),knb=k+'n'+(b<0?b:'+'+b);
		$('#b_kn_b').prev().text(b<0?'':'+');
		$('#knb').html(detail(knb+'轨道',DCtv('scroll',orbits(knb).join(br))));//+detail(knb+'图','')
	});
});


