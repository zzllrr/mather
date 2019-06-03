/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */


//下列涉及数论计算


var gcd=function(A,p){/*辗转相除法 求最大公约数
	0不参与计算
	无参数p 返回数
	参数p 指定3个数（及以上）最大公约数=1时，求出其中任两个不互素的最大公约数
		
		返回数组 [最大公约数, 其中任两个不互素数的最大公约数]
	*/
	var B=A.filter(function(t){return ''+t!='0'});
	if(p){
		var g=gcd(B), qA=Arrf(function(t){return divide([t,g])}, B),q=qA.filter(function(t){return !/^-?1$/.test(''+t)}),l=q.length;
		if(l){
			q.sort(sortBy.chr);
			for(var i=0;i<l-1;i++){
				for(var j=i+1;j<l;j++){
					var g2=gcd([q[i],q[j]]);
					if(g2!=1){
						return [g,g2]
					}
				}
			}
			return [g,1]
		}else{//商都是1
			return [g,1]
		}
		
	}else{
		if(B.filter(function(t){return /^-?1$/.test(''+t)}).length){
			return 1
		}
		return Arrf(function(m,n){
			/*辗转相除法，JS实现
			var u=+m||1,v=+n||1,t=v;
			while(v!=0){
				t=u%v;
				u=v;
				v=t;
			}
			
			return Math.abs(u)
			*/
			var u=(''+m).replace('-',''),v=(''+n).replace('-','')||'1',t=v;
			while(v!='0'){
				t=Integer.oprs('/',[u,v])[1];
				u=v;
				v=t;
			}
			return u
			
		},B,'cp2')	//	$.makeArray(arguments) Array.prototype.slice.call(arguments)
	}


},lcm=function(A){//最小公倍数
	return Arrf(function(m,n){
		/* JS实现
		var u=+m,v=+n,t=gcd([u,v]);
		if(t==1){return u*v}else{
			return u/t*v
		}
		*/
		var t=gcd([m,n]);
		if(t=='1'){return Integer.oprs('*',[m,n])}else{
			return Integer.oprs('*',[Integer.oprs('/',[m,t])[0],n])
		}

	},A,'cp2')

},gcdFrac=function(A){//分子最小公倍数
	/*
		如果有整数，则直接求gcd
		如果有分数，则提取各数字分子的最大公约数。
		0不参与计算
	*/

	return gcd(Arrf(function(t){
		return (''+t).indexOf('/')>-1?(t+'').replace(/\/.+/,''):t
	},A.filter(function(t){return ''+t!='0'})))

},lcmFrac=function(A){//分母最小公倍数
	/*
		如果有整数，则看做1
		如果有分数，则提取各数字分母的最小公倍数。
		如果有0，则认为是1
	*/
	if(/\//.test(A.join())){
		
		return lcm(Arrf(function(t){
			return (''+t).indexOf('/')>-1?(t+'').replace(/.+\//,''):1
		},A))
	}
	return 1

},lcp=function(A){//一组整数，用筛法去掉倍数，得到互素数组： Least Co-Prime Arr首字母缩写（自拟术语）
	var B=[].concat(A).sort(sortBy.num),n=B.length;
	for(var i=0;i<n;i++){
		var Bi=B[i];
		if(Bi){
			for(var j=i+1;j<n;j++){
				var Bj=B[j];
				if(Bj && !(Bj%Bi)){
					B[j]=0;
				}
			}
		}
	}
	while(B.indexOf(0)>-1){
		B.splice(B.indexOf(0),1)
	}
	return B


},lastDigitsOfPower=function(m,n,k){//幂的末位数： 底数m，幂n，末k位
	var t=1;
    for(var i=0;i<+n;i++){
        t*=+m;
        t%=Math.pow(10,+k+1);
    }
	return (ZLR(0,+k-1)+t).substr(-(+k))

},last0OfFact=function(n){//阶乘末位的零数，实际是n!标准分解式中5的幂
	var t=0,N=+n;
	while(N){
       t+=Math.trunc(N/5);
       N/=5;
       N=Math.trunc(N);
	}
	return t




},tMod=function(n){//个位尾数分解为两个位数乘积
	return [zlrA('0',seqA(0,10)).concat(zlrA2(seqA(2,4,'',2),'5')),['11','37','99'],['12','26','34','48','67','89'],['13','79'],['14','22','27','38','46','69','88'],
			['15','35','55','57','59'],['16','23','28','44','49','66','78'],['17','39'],['18','24','29','36','47','68'],['19','33','77']][+n]


},Mod=function(a,p,fast){//求绝对最小剩余(简化剩余系)，例如3%5=-2	返回BigInt类型
	/*
		参数fast 指定不使用js自带的%取余运算，而是使用modP
			快慢比较，测试下列代码：
			Arrf(modP,PrimeA(1000,0,6))
			var t=Random(100000,1),n=BigInt(t),m=BigInt(t)%29n;'\n mod 29 = \n'+m
	*/
	var isneg=/-/.test(a),A=BigInt(a), P=BigInt(p), b=isneg?-A:A, b2=2n*b;	//Math.abs不支持BigInt 
	if(b2<P){
		return A
	}else if(b2==P){
		return b
	}
	if(b<=P){
		return isneg?A+P:A-P
	}
	
	if(fast){
		
		
		
	}else{
		var t=A%P;
		return Mod(t,P)
	}

},modP=function(p,system){//求十（system默认是10）进制下各位(1) mod p （求绝对最小剩余，且只取1在第2次出现之前的那些值，构成数组），与求1/p的循环节不等价！
//function t(x){var A=Arrf(function(a,i){return Mod(10**i,x)}, seqA(1,x-1)); if(A.indexOf(1,1)>0){return A.slice(0,A.indexOf(1,1))}else{return A}}
	var P=BigInt(p), a=Mod(system||10,P), A=[1,a.toString()];
	
	for(var i=2n;i<P;i++){
	//	var t=Mod(10**i,p);		i>22时，js精度问题，失真！10n**23n%29n 与10**23%29 不相等，因此用另一个方法（a 反复求幂 mod P）求余
		var j=A.slice(-1)[0], t=Mod(BigInt(j)*a,P);
		if(t==1){/* || t==-1	有些是1 .. 1 .. 循环，有些是1 .. -1 .. 1 .. -1 循环节分为前后两部分（前后相应位置的值正好互为相反数）
			
			观察结果：Arrf(modP,PrimeA(1000,0,6))
			
			根据Euler criterion判别准则，Legendre符号(-1/p) = (-1)^m = [1（当p=4k+1时）或-1（当p=4k-1时）] 其中m=(p-1)/2
			则循环节中，如果出现-1，且-1所在位置是10^(2t)，则p一定是4k+1形式
			逆否命题：如果p是4k-1形式，则循环节中，如果出现-1，则-1所在位置只能是10^(2t+1)
			
			循环节中没有-1的例子：p=31 37 41 	53  67 71 
				即10^x = -1 mod p 方程无解
				而根据费马小定理: 10^(p-1) = 1 mod p
			
			循环节长度，p-1（含有 -1 的情况下）
			或 (p-1)/2（不含有 -1 的情况下）
			
			
		*/
			return A
		}else{
			var s=t.toString();
			A.push(s.length<16?+s:s)
		}
	}
	return A


},multiMod=function(A,p){/*对乘积，求mod p
	*/
	var n=A.length;
	
	if(n==1){
		return Mod(A[0],p)
	}
	if(A.indexOf(0)>-1){
		return 0
	}
	var isOdd=n%2,n2=(isOdd?n-1:n)/2;

	/*
方法1：2个一组降规模递归（很快会超过浏览器递归次数上限）
	*/
	var B=[].concat(A),C=[];
	B.sort(sortBy.abs);
	
	for(var i=0;i<n2;i++){
		C.push(Mod(B[i]*B[n-i-1],p));
	}
	if(isOdd){
		C.push(B[n2]);
	}
	return multiMod(C,p)
	

/*
方法2：二分法拆成2组递归
*/
//	return multiMod([multiMod(A.slice(0,n2),p),multiMod(A.slice(n2),p)],p)	//用3次multiMod
//	return Mod(multiMod(A.slice(0,n2),p)*multiMod(A.slice(n2),p),p)	//用2次multiMod
//	return multiMod([multiMod(A.slice(0,n2),p)].concat(A.slice(n2)),p)	//用2次multiMod
	
},factorMod=function(p){/*对大奇数p，求(p-1)! mod p
	p是素数 ⇔ mod('(p-1)!',-1,'p') 	Wilson
p>5时，p是合数 ⇔ p|(p-1)!
此时，对p-1以内的奇数：3，5，7，。。。，p-2 进行组合相乘，测试是否被p整除（先尝试2个奇数相乘）
或找到1个比p小的数q,满足q|p（退化为检验根号p以内的素数q，是否都满足不整除p）

例如：
判断45645789513是否为素数：
需要求出(p-1)! mod p
m=(p-1)/2=22822894756是偶数
即判断是否mod('m!m!',-1,'p') 
则先求m! mod p


由数根启发，寻找一种函数，可以快速降阶

10进制：数的实质（规模：亿） -> 系数排列（规模：8：用1个8位数，表示出10^8级数字）
数根：-> 8个数之和（最大数字9×8=72）（规模：2）-> （规模：1）

乘式数根：反复求数位之积。
	数位中有0 -> 0
	数位中有1 -> 忽略1
	数位中有偶数  -> 结果必为偶数
	数位中只有奇数  -> 结果可能为偶数

幂式数根：反复求数位之幂。
	数位中有0 -> 1
	数位中有1 -> 忽略1及后面的数位


模（取余）：规模依赖于模（1～亿不等）
x=213,243,213,545,438,343 mod 127
1000 = -16 mod 127
x=(-41)*(-16)^5+()*(-16)^4+()*(-16)^3+()*(-16)^2+()*(-16)+（-38）


p=127, m=63，即判断是否mod('m!',±1,'p') ,则先求63! mod 127




	p是奇数时

return multiMod(seqA(2,p-2),p)
	
	
	令m=(p-1)/2 = k-1则	p=2m+1 (注意到m < p/2)
	mod('m!m!',(-1)^(m+1),'p') 
一般地，用首尾相乘，分别求模，然后平方，再求模
mod('[(2m)(3(m-1))(4(m-2))（5(m-3)）（6(m-4)）（7(m-5)）（8(m-6)）（9(m-7)）...]^2',(-1)^(m+1),'p')

mod('[(-1)(m-1-3)(-2-4*2)(m-2-5*3)(-3-6*4)(m-3-7*5)(-4-8*6)(m-4-9*7)...]^2',(-1)^(m+1),'p')

mod('[(-1)(m-4)(-10)(m-17)(-27)(m-38)(-52)(m-67)...]^2',(-1)^(m+1),'p')
即数列1：-1，-10，-27，-52，。。。，-x-2x(x-1)2=-x-4x(x-1)=(3-4x)x=3x-4x^2		抛物线过(0,0),(3/4,0) ,对称轴x=3/8, 极值9/16
数列2：m-4，m-17，m-38，m-67，。。。，m-x-(2x+1)(2x-1)=m-x-(4x^2-1)=m+1-x-4x^2	抛物线过(0,m+1),(1±√1+16(m+1) /2 ,0) ,对称轴x=-1/8, 极值m+1+1/16
其中
x=1,2,...,（m-1）/2 m是奇数
x=1,2,...,（m-2）/2（数列1最后多1项(m+2)/2 = （p+3）/4） m是偶数 
(3x-4x^2)(m+1-x-4x^2) = x(3-4x)(m+1-x-4x^2)  = x(16x^3-8x^2-(4m+7)x+3(m+1)) = 16x^4-8x^3-(4m+7)x^2+3(m+1)x
-x(4x-3)(4x+t)(x-(t-1)/4)
t(t-1)=4(m+1)=2(p+1)


x遍历连乘

得出必要条件：（m-1）/2 ！不等于0 mod p（观察提取的公因子x得知）

数列1分解为：-x(4x-3)
（m-1）/2 ！




或者用m!标准分解式：
m!=2^k2 3^k3 5^k5 ... t^kt 其中t是m以内的最大素数
2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48
2(1 2 3 4 5 6 7 8 9 10 11 ... [m/2])

k2=1+2+1+3+1+2+1+4+1+2+1+3+1+2+1+5+1+2+1+3+1+2+1+4 +1+...+n2
其中1约有m/4个，2有m/8个, 3有m/16个，i有m/2^(i+1)个
=m/4 + 2m/8 + 3m/16 + im/2^(i+1) +...+n2

3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60
3(1 2 3 4 5 6 7 8 9 10 11 ... [m/3])
k3=1+1+2+1+1+2+1+1+3+1+1+2+1+1+2+1+1+2+1+1+... +n3



根据费马小定理，a^(p-1)≡1 (mod p)
m!=2^j2 3^j3 5^j5 ... t^jt
其中j = k (mod p-1)
即判断奇数p是否素数，只需判断p/2以内的素数（如果知道这些素数，直接用试除法，就能判断p了，不必往下做了），及阶乘标准分解式

即设m以内，各素数最大幂，2^n2，3^n3, 5^n5, ..., t^nt
则




--------------------------------------------------
对于同余方程x^2=s mod p(质数)	2|x|<=p

假设存在另一个解x+t（其中2|s|,2|t|<=p）
(x+t)^2=s+t(2x+t)=s mod p
t(2x+t)=0 mod p
2x+t=0 mod p
t=-2x mod p
也即x+t=-x mod p
即有解时，必有互为相反数的一组解 x,-x
特别地，x=1时，有且仅有另一解-1




特别地，s=1时，x^2=1 mod p
x^2-1=(x+1)(x-1) =0 mod p
(x+1)(x-1) =0，解得x=1或-1

特别地，s=-1时，x^2=-1 mod p（奇素数）
根据 数学辞海（第1卷）477/1042
该方程解的个数是1+（-1）^[(p-1)/2] =2或0


显然遍历绝对剩余系中的非负部分，0,1（显然不满足同余方程）,2...,m 
-x^2=1 mod p
p-x^2=1 mod p
--------------------------------------------------





	*/
	
	
	
	
	var m=(p-1)/2,isOdd=m%2,m2=(isOdd?m-1:m-2)/2,A=[];
	for(var i=0;i<m2;i++){
		A.push(Mod((i+2)*(m-i),p));
	}
	if(!isOdd){
		A.push(m2+2);
	}
//	var x=Arrf(function(t){return Mod(t,p)},A,'cp2');	var x=Arrf(function(s,t){return Mod(s*t,p)},A,'cp2');		容易出现错误 Uncaught RangeError: Maximum call stack size exceeded(…)
	var x=multiMod(A,p)
	return Mod(x*x,p)


//下列涉及识别、判断性质

},feet1=function(n,s){//得到4种判别式：割尾法1中，判断一个数是否被某个素数整除
	var a=+(''+n).substr(0,(''+n).length-1),b=+(''+n).substr(-1),sb=s*b,sb1=sb+b,a3=a*3;
	return Arrf(odd_5,[a-sb,a3-sb,a3+sb1,a+sb1])


},isPrime=function(a,fact){/*是否素数
	
	参数 fact指定返回1个非平凡因子（如果是合数时）
	返回 0 或某个非平凡因数（字符串格式或数字格式）(指定fact参数时)	合数时
		1										素数时
	*/
	var n=BigInt(a),s=n.toString(),l=s.length,R=[],s0=s.substr(-1);
	
	//基于末位数特征判断
	if(!a || s=='1'){return 0}
	if(/^[2357]$/.test(s)){return 1}
	
	if(s0=='0'){
		return fact?5:0
	//	return fact?s.replace(/[^0]+/g,'1'):0
	}
	if(s0=='5'){return fact?5:0}
	if(/[2468]$/.test(s0)){return fact?2:0}


	//基于数位特征判断合数
	if(/^([^1])\1+$/.test(s.replace(/0/g,''))){//数位0之外数字都是同一个数字(非1)
		consolelog('数位0之外数字都是',s0);
		return fact?+s0:0
	}else if(/^1+$/.test(s)){//数位全为1
		consolelog('数位全为1',s);
		if([2,19,23,317,1031,49081,86453,109297].indexOf(l)>-1){
			return 1
		}
		
		var fac=isPrime(l,1);//位数的一个因子
		
		consolelog('fac=',fac);
		if(fac==1){
			if(!fact){return 0}
			consolelog('全为1',l);//l<=120之内的合数得到全部分解：
			return [3,41,239,21649,53,2071723,3191,2791,2028119,83,173,35121409,107,2559647034361,733,493121,241573142393627673576957439049,
				12171337159,317,3367147378267,497867,12004721,4531530181816613234555190841,1031,643,1192679,227][
					[3,5,7,11,13,17,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113].indexOf(l)]

		}else{//合数个1，满足周期性（周期大于1）
			return fact?ZLR(1,fac):0
		}

	}else if(/^(.+)\1+$/.test(s)){
		consolelog('周期性数位字符串');
		return fact?s.replace(/^(.+)\1+$/,'$1'):0

	}else if(/^10+1$/.test(s)){
		consolelog('101数');
		if(s=='101'){
			return 1
		}
		if(!fact){return 0}//基于已知资料，猜想都是合数
		//数位0的个数是l-2
		for(var i=1,k=Math.floor(Math.log2(18));i<=k;i++){
			var t=Math.pow(2,i-1);
			if((l-2)%(2*t) == t-1){
				return 1+ZLR(0,t-1)+1	//返回的因子可能就是自身，但理论上是合数
			}
		}
		
	}

consolelog('判断数位和被3整除');
	var t=0;
	for(var i=0;i<l;i++){
		if(/[0369]/.test(s[i])){
			
		}else{
			t=(+s[i]+t)%3
		}
	}
	if(!t){return fact?3:0}


consolelog('奇偶分组相减，判断是否被10...01数整除');

	t=0;
	for(var k=1;k<l-1;k++){//	for(var k=0;k<l-1;k++) 871貌似被识别为能被11整除，因此把k=0，改为k=1
		var z=+(1+ZLR(0,k)+1);
		consolelog(z,'k=',k,'所检验的数是：',a);
		for(var i=0,j=Math.ceil(l/(k+1));i<j;i++){
			if(i%2){
				consolelog('i=',i,'s',s.substr(l-(k+1)*(i+1)-1,k+1),'t=',t,+s.substr(l-(k+1)*(i+1)-1,k+1)+t);
				t=(+s.substr(l-(k+1)*(i+1)-1,k+1)+t)%z;
				
				consolelog(z,t);
			}else{
				consolelog('i=',i,'s',s.substr(l-(k+1)*(i+1)-1,k+1),'t=',t,-(+s.substr(l-(k+1)*(i+1)-1,k+1))+t);
				t=(-(+s.substr(l-(k+1)*(i+1)-1,k+1))+t)%z
					
				consolelog(z,t);
			}
		}
		if(!t){return fact?z:0}
	}
	
consolelog('周期性数位（随机间隔若干个0）字符串');
	for(var k=1;k<l-1;k++){
		//if(/^(.+)0*\10*\10*$/.test(s)){
		if((new RegExp('^(.+)0*'+ZLR('\\1[0]*',k)+'$')).test(s)){
			return fact?s.replace(new RegExp('^(.+)0*'+ZLR('\\1[0]*',k)+'$'),'$1'):0
		}
	}



/*
	//利用质数表
	var t=PrimeA(n).slice(-1)[0];
	if(t==n){//是素数
		return 1
	}
	if(!fact){
		return 0
	}
*/

	var A=PrimeA(5000),Al=A.length;
	if(A.indexOf(+s)>0){//在已知质数表中
		return 1
	}

//下面所有出现的n，都要改用BigInt改写
//	n=BigInt(n);
	for(var i=Al-1;i>0;i--){
		if(n%BigInt(A[i]) == 0){
			return fact?A[i]:0
		}
	}
	
/*	var i=5001, sqrtn=Math.floor(Math.sqrt(n));		注意，JS整数最多15位，超过会有意外 9234567890123451 变成 9234567890123452	451902452332423231 变成 451902452332423230
		并且下方的Math函数、> 需要用Integer改造
		
		由于Math.sqrt不支持BigInt，可以用n的位数一半的数近似估计
	*/
	var i=5001n, sqrtn=BigInt(1+'0'.repeat(Math.ceil(l/2)));
	
	while(i){
		//var t=Math.floor(Math.sqrt(i)), Al=A.length;
		var t=BigInt(1+'0'.repeat(Math.ceil(i.toString().length/2))), Al=A.length;
		for(var j=0;j<Al;j++){
			if(i%BigInt(A[j]) == 0){
				break
			}else if(BigInt(A[j+1])>t){//i疑似素数，且下一个素数除数大于根号i	因此可以break
				A.push(i);
				if(n%i == 0){
					return fact?i.toString():0
				}
				break;
			}
		}
		if(i>=sqrtn){
			return 1
		}
		i+=2n;
	}
	
	
//	consolelog(a);
//	var i=5001, sqrtn=Math.floor(Math.sqrt(n));	
	/*注意，JS整数最多15位，超过会有意外 9234567890123451 变成 9234567890123452	451902452332423231 变成 451902452332423230
		并且下方的Math函数、> 需要用Integer改造
	
	while(i){
		var t=Math.floor(Math.sqrt(i)), Al=A.length;
		for(var j=0;j<Al;j++){
			if(i%A[j] == 0){
				break
			}else if(A[j+1]>t){//i疑似素数，且下一个素数除数大于根号i	因此可以break
				A.push(i);
				if(n%i == 0){
					return fact?i:0
				}
				break;
			}
		}
		if(i>=sqrtn){
			return 1
		}
		i+=2;
	}
	*/


//方法0	!/^.?$|^(..+?)\1+$/.test(t)	用正则表达式判断是否素数，只适用于小整数（效率不高）
/*	var t=+a,n=t;
	if(t<Math.pow(2,32)){
		t=Array(t+1).join(1);
	}else{
		t='';
		for(var i=0;i<n;i++){t+='1'}
	}
	return !/^.?$|^(..+?)\1+$/.test(t)
	
		t=t.replace(/^(..+?)\1+$/,'$1');	
		return t.length+'×'+factor(n/t.length)	得到一个素因子，递归得到所有素因子
	
	*/

	
//方法1 试除法，从2判断到√n
	/*
	var n=+a,sqrtn=Math.floor(Math.sqrt(n));
	for(var i=2;i<=sqrtn;i++){
		if(n%i==0){return false}
	}
	*/

//方法2	试除法，从2判断到√n（仅判断质数）
/*
	var n=+a,sqrtn=Math.floor(Math.sqrt(n)),A=PrimeA(sqrtn);
	for(var i=0;i<A.length;i++){
		if(n%A[i]==0){return false}
	}
*/
//方法3	试除法，从2判断到√n（仅判断质数，且利用上一个质数的求余计算结果，通过缩小被除数，减少运算量）
	


//方法4 基于Wilson测试	p是素数 ⇔ mod('(p-1)!',-1,'p') 	Wilson
	//return factorMod(+a)==(((+a-1)/2)%2?1:-1)

/*
mod('(p-1)!',-1,'p')	Wilson

把阶乘展开一项
mod('(p-2)!',1,'p')
mod('2(p-3)!',-1,'p')
mod('2*3(p-4)!',1,'p')

可得到
mod('0!(p-1)!',-1,'p')
mod('1!(p-2)!',1,'p')
mod('2!(p-3)!',-1,'p')
mod('3!(p-4)!',1,'p')
mod('4!(p-5)!',-1,'p')
...

mod('(k-1)!(p-k)!',(-1)^k,'p') 

p是奇数时
令m=(p-1)/2 = k-1则	p=2m+1

mod('（(p-1)/2）!^2',(-1)^((p+1)/2),'p') 

mod('m!m!',(-1)^(m+1),'p') 

	如果m是奇数，则mod('m!',±1,'p') 

	如果m是偶数，则mod('m!m!',-1,'p') 
此时x^2=-1 mod p（奇素数）
根据 数学辞海（第1卷）477/1042
该方程解的个数是1+（-1）^[(p-1)/2] =1+（-1）^m =2


mod('2!2!',(-1)^(2+1),'5') 
mod('3!3!',(-1)^(3+1),'7') 
mod('5!5!',(-1)^(5+1),'11') 
mod('6!6!',(-1)^(6+1),'13') 
mod('8!8!',(-1)^(8+1),'17') 
mod('9!9!',(-1)^(9+1),'19') 

5!=(5*2)(4*3)=(-1)(1)=-1 mod 11
6!=(6*2)(5*3)*4=(-1)*2*4=5 mod 13
8!=(8*2)(7*3)(6*4)*5=(-1)(4)(7)(5)=-4 mod 17
9!=(9*2)(8*3)(7*4)(6*5)=(-1)(5)(9)(11)=-1 mod 19
一般地，
mod('[(2m)(3(m-1))(4(m-2))...]^2',(-1)^(m+1),'p')



更特殊地，当p=2^q-1是梅森数时，
令m=(p-1)/2 = 2^(q-1)-1（是奇数）则
mod('m!m!',1,p) 

⇔ mod('m!',±1,p) 


p是偶数时（即p=2, 忽略讨论）令m=p/2 = k-1则mod('m!(m-1)!',(-1)^(m+1),'p') 
*/

	
},PrimeA=function(x,nth,gt){/*	小于n的素数表
	参数nth	布尔逻辑值1或0，指定返回第n个素数
		但如果nth是大于1的正整数，则指定返回前n个素数（数组）
		
		gt 指定返回大于gt的素数
	*/
	//var t0=Time.now5();
/*
方法1：利用isPrime	废弃！

	var t=[];
	for(var i=2;i<n+1;i++){
		if(isPrime(i)){
			t.push(i)
		}
	}
	consolelog('方法1：耗时：'+(+Time.now5()-(+t0)));
	return t
	*/
	
//方法2：利用筛法
	var n=+x||1000;
	var p=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,1153,1163,1171,1181,1187,1193,1201,1213,1217,1223,1229,1231,1237,1249,1259,1277,1279,1283,1289,1291,1297,1301,1303,1307,1319,1321,1327,1361,1367,1373,1381,1399,1409,1423,1427,1429,1433,1439,1447,1451,1453,1459,1471,1481,1483,1487,1489,1493,1499,1511,1523,1531,1543,1549,1553,1559,1567,1571,1579,1583,1597,1601,1607,1609,1613,1619,1621,1627,1637,1657,1663,1667,1669,1693,1697,1699,1709,1721,1723,1733,1741,1747,1753,1759,1777,1783,1787,1789,1801,1811,1823,1831,1847,1861,1867,1871,1873,1877,1879,1889,1901,1907,1913,1931,1933,1949,1951,1973,1979,1987,1993,1997,1999,2003,2011,2017,2027,2029,2039,2053,2063,2069,2081,2083,2087,2089,2099,2111,2113,2129,2131,2137,2141,2143,2153,2161,2179,2203,2207,2213,2221,2237,2239,2243,2251,2267,2269,2273,2281,2287,2293,2297,2309,2311,2333,2339,2341,2347,2351,2357,2371,2377,2381,2383,2389,2393,2399,2411,2417,2423,2437,2441,2447,2459,2467,2473,2477,2503,2521,2531,2539,2543,2549,2551,2557,2579,2591,2593,2609,2617,2621,2633,2647,2657,2659,2663,2671,2677,2683,2687,2689,2693,2699,2707,2711,2713,2719,2729,2731,2741,2749,2753,2767,2777,2789,2791,2797,2801,2803,2819,2833,2837,2843,2851,2857,2861,2879,2887,2897,2903,2909,2917,2927,2939,2953,2957,2963,2969,2971,2999,3001,3011,3019,3023,3037,3041,3049,3061,3067,3079,3083,3089,3109,3119,3121,3137,3163,3167,3169,3181,3187,3191,3203,3209,3217,3221,3229,3251,3253,3257,3259,3271,3299,3301,3307,3313,3319,3323,3329,3331,3343,3347,3359,3361,3371,3373,3389,3391,3407,3413,3433,3449,3457,3461,3463,3467,3469,3491,3499,3511,3517,3527,3529,3533,3539,3541,3547,3557,3559,3571,3581,3583,3593,3607,3613,3617,3623,3631,3637,3643,3659,3671,3673,3677,3691,3697,3701,3709,3719,3727,3733,3739,3761,3767,3769,3779,3793,3797,3803,3821,3823,3833,3847,3851,3853,3863,3877,3881,3889,3907,3911,3917,3919,3923,3929,3931,3943,3947,3967,3989,4001,4003,4007,4013,4019,4021,4027,4049,4051,4057,4073,4079,4091,4093,4099,4111,4127,4129,4133,4139,4153,4157,4159,4177,4201,4211,4217,4219,4229,4231,4241,4243,4253,4259,4261,4271,4273,4283,4289,4297,4327,4337,4339,4349,4357,4363,4373,4391,4397,4409,4421,4423,4441,4447,4451,4457,4463,4481,4483,4493,4507,4513,4517,4519,4523,4547,4549,4561,4567,4583,4591,4597,4603,4621,4637,4639,4643,4649,4651,4657,4663,4673,4679,4691,4703,4721,4723,4729,4733,4751,4759,4783,4787,4789,4793,4799,4801,4813,4817,4831,4861,4871,4877,4889,4903,4909,4919,4931,4933,4937,4943,4951,4957,4967,4969,4973,4987,4993,4999];
	if(nth && n<=669){
		return nth==1?p[n-1]:p.slice(0,n)
	}
	if(!nth && n<2){
		return []
	}

	if(n<=5000 && !nth){

		for(var i=0;i<100;i++){
			var j=p.indexOf(n-i);
			if(j>-1){
				return gt?subA(p.slice(0,j+1),gt):p.slice(0,j+1)
			};
		}

		return gt?subA(p,gt):p

	}

	var m=nth?Math.ceil(n*Math.log(n)+1000):n;	//pn ∼ nln(n)
//	for(var i=5001;i<=m;i+=2){
	var i=5001;
	while(i){
		var t=Math.floor(Math.sqrt(i)), pl=p.length;
		for(var j=0;j<pl;j++){//p.length
			if(i%p[j] == 0){
				break
			}else if(p[j+1]>t){
				p.push(i);
				if(nth && pl==n-1){
					return nth==1?i:p
				}
				break;
			}
		}
		if(!nth && i>=n-1){
			return gt?subA(p,gt):p
		}
		i+=2;
	}
	

	return gt?subA(p,gt):p

		
//方法3：Wilson测试
	
	
},PrimeAlist=function(n){//截尾统计n以内素数末位（1379）分布表
	var t=[],A=PrimeA(n),p0=0,ti=[];
	for(var i=4,l=A.length;i<l;i++){
		var pi=A[i]+'',pa=pi.substr(0,pi.length-1),pb=+pi.substr(-1);
		if(p0!=pa){
			if(ti.length){
				var c=ti.slice(1).join('');
				ti.push(c,parseInt(c.replace(/[1-9]/g,'1'),2).toString(16));
				t.push(ti);
				if(+p0!=+pa){
					for(var j=+p0+1;j<+pa;j++){
						t.push([j,0,0,0,0,0,0]);
					}
				}
			}
			ti=[pa,0,0,0,0];
			p0=pa;
		}else{
		}
		ti[+('0102000304'[pb])]=pb;
		if(i==l-1){
			var c=ti.slice(1).join('');
			ti.push(c,parseInt(c.replace(/[1-9]/g,'1'),2).toString(16));
			t.push(ti);
		}
	}
	return t

},PrimeAlistRowland=function(a1,n,f,no1,norep){/*以Rowland递归方法，得到n步结果【表格n a[n] f(n) gcd(a[n],f)】	f是gcd中与an求最大公约数的另一个数
		no1是过滤掉gcd=1的步骤
		norep是对素数去重
		
		a[n] = a[n-1] + GCD[n, a[n-1]] 其中a[1] = 7
		a[n] - a[n-1]是1或素数
		
		相似的：
	Benoit Cloitre, a French mathematician, recently proved that if you set b(1) = 1 and 
	b(n) = b(n-1) + lcm(n, b(n-1)) for n ≥ 2,
	then b(n)/b(n-1)-1 = lcm/b(n-1) is either 1 or prime for all n ≥ 2. 
	
		注意到，gcd*lcm=n*a[n-1]，		a[n] == a[n-1] + n*a[n-1]/lcm  则a[n]/a[n-1] -1= n / lcm
	
	console.table([['n','an','f(n)','gcd(an,f(n))']].concat(PrimeAlistRowland(7,2000,function(t){return t+1},1))) 标准的Rowland递归方法
					cs.uwaterloo.ca/journals/JIS/VOL11/Rowland/rowland21.html	论文
					recursed.blogspot.hk/2008/07/rutgers-graduate-student-finds-new.html	背景介绍
					demonstrations.wolfram.com/PrimeGeneratingRecurrence/
		a1>3时，基本上都能产生素数
		但有反例，如a1=532时，会得到一个合数9；a1=800时，会得到一个合数21
			
		
		a1=4,5; 6,7; 8,9; 10,11 等组合时，得到结果除了开头几个值不同，后面的素数数列一致
		a1是偶数2k与奇数2k+1时，得到素数会相差开头的2
		
		猜想：设计一个初始值a1，使得某素数在数列中尽快出现。
		
		
		
		
	*/
	var t=[],a=[a1],p=[];
	for(var i=1;i<n+1;i++){
		var ti=[i,a[i-1],f(i)],g=gcd([ti[1],ti[2]]);
		ti.push(g);
		a.push(ti[1]+g);


		if(g==1 && (no1||norep) || g!=1 && norep && p.indexOf(g)>-1){
			
		}else{
			if(g!=1 && p.indexOf(g)<0){
				p.push(g)
			}
			t.push(ti);
		}
	}
	return t

},PrimeAlistBC=function(a1,n,f,no1,norep){/*以Benoit Cloitre递归方法，得到n步结果【表格n a[n] f(n) lcm(a[n],f) lcm/a(n)】
		no1是过滤掉gcd=1的步骤
		norep是对素数去重
	
	Benoit Cloitre, a French mathematician, recently proved that if you set b(1) = 1 and 
	b(n) = b(n-1) + lcm(n,b(n-1)) for n ≥ 2,
	then b(n)/b(n-1)-1 is either 1 or prime for all n ≥ 2. 
	
		注意到，gcd*lcm=n*a[n-1]，		a[n] == a[n-1] + n*a[n-1]/lcm  则a[n]/a[n-1] -1= n / lcm
	
	console.table([['n','an','f(n)','lcm(a[n],f)','lcm/a(n)']].concat(PrimeAlistBC(1,2000,function(t){return t+1},1,1))) 标准的Benoit Cloitre递归方法

		
	*/
	var t=[],a=[a1],p=[];
	for(var i=1;i<n+1;i++){
		var ti=[i,a[i-1],f(i)],g=lcm([ti[1],ti[2]]);
		ti.push(g,g/ti[1]);
		a.push(ti[1]+g);


		if(g==ti[1] && (no1||norep) || g!=ti[1] && norep && p.indexOf(ti[4])>-1){
			
		}else{
			if(g!=ti[1] && p.indexOf(ti[4])<0){
				p.push(ti[4])
			}
			t.push(ti);
		}
	}
	return t

},PrimeNumerator=function(A,m){/*利用几个质数倒数代数和的分子，一般还是质数，生成数列
m指定从A中选m个数作为一个组合
2 3 5 → 
1/2+1/3+1/5的分子3*5+2*5+2*3=31
1/2+1/3-1/5的分子3*5+2*5-2*3=19
1/2-1/3+1/5的分子3*5-2*5+2*3=11
1/2-1/3-1/5的分子3*5-2*5-2*3=-1
共2^(3-1)=4种分子

1/2+1/5的分子7

奇质数的个数k，一个组合（如果含有2，则个数不限；不含2，则需满足：k是奇数）


*/
	var n=A.length,p=CombinN(n,m),t=[];
	for(var i=0;i<p.length;i++){
		var pi=p[i],p0=A[pi[0]],ti=[];
		if(p0==2 || p0!=2 && m%2){
			var Ai=Arrf(function(j){return A[j]},pi), T=times(Ai), TA=Arrf(function(j){return T/A[j]},pi);
			for(var j=Math.pow(2,m-1)-1;j>=0;j--){
				var s=(ZLR(0,m)+j.toString(2)).substr(1-m), os=Arrf(function(k){return k.replace('1','+').replace('0','-')},s.split('')), r=Integer.oprs(os,TA);
				if(r<0){r=-r}
				if(r!=1 && A.indexOf(r)<0){
					ti.push(r);
				}
			}
			t.push(Ai+' → '+ti.sort(sortBy.num));
		}
	}
	return t

		
},factor=function(a,fact){/*合数分解因数未合并 返回表达式
		参数fact指定，只需分解为两数（不必是素数）之积
		
		返回 因式分解×	合数时
			本身	质数时
			0		a=1时
	*/
	var n=BigInt(a);
	if(n==1 || !n){return ''+n}
	var t=isPrime(n,1);
	if(t==0){//n是1
		return 0
	}else if(t==1){
		return n.toString()
	}else{
		var s=n/BigInt(t);
		if(fact){
			return t+'×'+s.toString()
		}else{
			t+='×'+factor(s);
			return t.split('×').sort(sortBy.numInt).join('×')
		}
	}

},factorA=function(n){//返回二维数组：全部质因子数组，相应重数（指数）数组
	return countA((''+factor(n)).split('×'))

},factorA2n=function(A){//factorA的逆函数 返回整数
	var B=Arrf(function(x,i){return Integer.oprs('^',[x,A[1][i]])},A[0]);	//console.log('x = ',x,'i = ',i);
	return Integer.oprs('*',B)

},factors=function(n){//得到全部因子数组（去重），先写成标准分解式，其中各指数+1（出现的可能数），累乘，得到总因子数。

	var A=factorA(n),A0=A[0],A1=A[1];
	//return Arrf(function(t){var x=1;for(var i=0;i<t.length;i++){x*=Math.pow(A0[i],t[i])} return x}, cartestian(Arrf(function(t){return seqA(0,t+1)},A1))).sort(sortBy.num);

	//另一种方法：用2～√n，遍历判断是否整除，得到一半的因子
	var s=Math.floor(Math.sqrt(n)),B0=[1],B1=[+n];
	for(var i=2;i<=s;i++){
		if(!(n%i)){
			B0.push(i);
			var m=n/i;
			if(m!=i){
				B1.unshift(m);
			}
		}
	}
	return B0.concat(B1)
},cntfactors=function(n){//得到全部因子数
	var A=factorA(n);
	return times(Arrf(function(t){return t+1},A[1]))


},factor2=function(n){//用凑尾数法分解为两数乘积
	
/*

例如：x=213,243,213,545,438,343
3=1×3，7×9
43=01×43，11×13，21×83，31×53，41×23，51×93，61×63，71×33，81×03，91×73 4185296307
	07×49，17×79，27×09，

最多需遍历 3*10^(l-1) l是数字x（介于10^(l-1)，10^l之间）的长度

x17*y79=1343+(xy)0000+(79x+17y)00 解方程kx+by+c=

x137*y159=137*159 + (159x+137y)000+xy000000
	数据存储
	13 79
	04 11 28 35 42 89 66 73 80 97 -13；	04 17 -79
	
	06 13 47 -04；08 15 -11
 


ia * jb = ab+(ib+aj)*10^m+ij*10^2m

factor2(111321)
["583", "287"]
factor2(111312321)
["001301", "785021"]
factor2(11131232231)
["0019051", "2584181"]
factor2(111312322311)
["2148823", "0747857"]
factor2(1113123223111)
["1348751", "1324361"]
 
 
 为加快效率，还需其他判断合数条件
 
 
 
 
*/	
	
	

	var s=''+n,l=s.length,R=[],s0=s.substr(-1),S=Arrf(function(t){return [t[0],t[1],(+t[0])*(t[1])]},tMod(s0)), comp2=function(x){
	//consolelog(x);
		var a=x[0],b=x[1],m=a.length,ab=''+x[2],abl=ab.length,abm=abl<m+1?0:+ab.substr(-m-1)[0],a1=+a.substr(-1),b1=+b.substr(-1),al=a.replace(/^0+/,'').length,bl=b.replace(/^0+/,'').length,
			SS=[],sm=l<m+1?0:s.substr(-m-1)[0],slm=+s.substr(0,l-m),m10=Math.pow(10,m);
//consolelog(al+bl,l);	//ab=''+(+a)*(+b)
		
		if(al+bl>l+1){
			return []
		}
		for(var i=0;i<10;i++){
			var ia=i+a,ial=ia.replace(/^0+/,'').length;
			for(var j=0;j<10;j++){
				if(R.length){
					return R
				}
				if(a==b && j<i){
					break;
				}
				
				var jb=j+b,jbl=jb.replace(/^0+/,'').length,ij=i*j, ijl=ij?(''+ij).length:0;
				
				//consolelog('ia=',ia,'jb=',jb);
				
				if(ial+jbl>l+1){
					break;
				}

				//consolelog('ia=',ia,'jb=',jb);
				var s2=''+(i*b1+j*a1),s2l=s2.length;

if(ia=='11' && jb=='23'){//
				consolelog('\n\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n\n',ia,jb,n,S);

}
				if((+s2.substr(-1)+abm+'').substr(-1)==sm){
				//	consolelog('前1位符合',ia,jb,n,S,ijm);	ia*jb=ab+(ib+aj)*10^m+ijm*10^m
					var ijm=i*j*m10,	r=+ab.substr(0,abl-m)+(+s2)+ijm;

					if(r==slm){
						//consolelog();
						if(/^0+1$/.test(ia) || /^0+1$/.test(jb)){
							break
						}
						
						
						R=[ia,jb];
						return [ia,jb]
					}else if(r<slm){

							SS.push([ia,jb,x[2]+(i*b+j*a+ijm)*m10]);
							//SS.push([ia,jb,r*m10+(+ab.substr(abl-m))]);
					}
					break;
				}
			}
		}
		return SS
	};
	if(s=='0' || !/^\d+$/.test(s)){
		return ''
	}
	if(s=='1'){
		return 1
	}
	if(/[24680]/.test(s.substr(-1))){//判断末位是偶数
		return 2
	}
	if(s.substr(-1)=='5'){//判断末位是5或0
		return 5
	}
	var t=0;//判断各位数和被3整除
	for(var i=0;i<l;i++){
		if(/[0369]/.test(s[i])){
			
		}else{
			t=(+s[i]+t)%3
		}
	}
	if(!t){return 3}
	
	t=0;//判断偶位数和，奇位数和之差被11整除
	for(var i=0;i<l;i++){
		if(i%2){
			t=(+s[i]+t)%11
		}else{
			t=(-(+s[i])+t)%11
		}
	}
	if(!t){return 11}
	
	t=s;//判断末三位数，与之前的数之差被7、13整除
	while(t.length>3){
		t=(+t.substr(0,t.length-3))-(+t.substr(-3))+'';
		if(t[0]=='-'){
			t=t.substr(1)
		}
	}
	if(!(+t%7)){return 7}
	if(!(+t%13)){return 13}
	
	//基于数位字符串某些特征技巧判断合数
	if(/^1+$/.test(s)){//数位全为1
		if(isPrime(l)){
			
		}else{//合数个1，满足周期性（周期大于1）
			return ZLR(1,factor2(l))
			
		}
	}else if(/^(.)\1+$/.test(s)){//数位全为同1个数字
		return s[0]
	}else if(/^(.+)\1+/.test(s)){//周期性数位字符串
		return s.replace(/^(.+)\1+$/,'$1')
	}
	//451902451

	var pA=PrimeA(1000).slice(6);//判断是否被1000以内素数整除
	for(var i=0,t=pA.length;i<t;i++){
		if(!(+n%pA[i])){
			return pA[i]
		}
	}
	
	
//	consolelog(S);
	while(!R.length){//按广度优先，用凑尾数法分解为两数乘积
	//	consolelog('S[0]',S[0]);
	//	consolelog('S',S.join(' ; '));
		if(S.length){
			var t=comp2(S[0]);
			S.splice(0,1);
			if(t.length){
			//	consolelog('t',t);
				S=S.concat(t);
			}
		}else{
			return [1,n]
		}
	}
	return R


},Rho=function(x,p,k){//ρ（x,p）得到x以内含最小质因子p（至少是k次）的合数（该合数的其它质因子都不小于p）个数		借鉴定义：π(x)是不超过x的素数个数(=PrimeA(x).length)
	var A=PrimeA(x),Al=A.length,B=[],i=k||1, pi=A.indexOf(p);
	while(i){/* 依次统计合数：p^2, pq, pr, ...	二次（指数和）项	映射于	【p,q,r,...,[m/p]】
							 p^3, p^2q, p^2r, ...		pq^2, pqr, pqs, ... pr^2,prs,...   ps^2,pst,...  三次（指数和）项	映射于	【p,q,r,...,[m/p^2]】+【q,r,...,[m/pq]】+【r,s,...,[m/pr]】+ ... 
							 p^4, p^3q, p^3r, ...		p^2q^2, p^2qr, p^2qs, ... , p^2r^2,p^2rs,p^2rt,...   pq^3, pq^2r, pq^2s, ... 	映射于	【p,q,r,...,[m/p^3]】+【q,r,...,[m/p^2q]】+【r,s,...,[m/p^2r]】+ ... +		【q,r,...,[m/pq^2]】+【r,...,[m/pr^2]】+ ... +【r,s,...,[m/pqr]】+【s,...,[m/pqs]】+
							 ...
		
		注意，下列程序，其实，只统计了p^iq类型的合数
		*/
		var p_i=p**i;
		if(p_i>x){
			break;
		}
		if(p_i==x){
			B.push(1);
			break;
		}

		var m=Math.floor(x/p_i);//
		
		if(m==p){
			B.push(1);
			break;
		}else if(m<p){
			break;
		}else{//m>p	
			for(var j=pi+1;j<Al;j++){
				if(A[j]>=m){
					B.push(j-pi-(+(A[j]>m))+1);
					break;
				}
			}
		}

		i++;
	}
	return plus(B)
	

},Factor=function(n,arr){//分解因数合并计数	返回表达式
	var A=factorA(n),a=A[0],b=A[1];

	return count2pow(A,1);


},odd=function(n){//求出n的最大的奇数因子
	var t=+(''+n).replace(/0+$/,'');
	if(t==0){return 1}
	while(/[2468]$/.test(t)){
		t=t/2
	}
	return t

},odd_5=function(n){//求出n的最大的奇数因子（不含5）
	var t=odd(n);
	while(/5$/.test(t)){
		t=t/5
	}
	return t

},Primorial=function(n){//素数阶乘 前n个素数相乘
	return times(PrimeA(n,2))


},SUMs=function(N,M,minv,maxv,dup,pos,neg,pos1,neg1){/*生成数和(正整数n分解为m个正整数之和
			minv 起始最小值
			maxv 终止最大值
			dup 允许数字另外重复次数（即自身不算在内）
条件强		pos 全部满足 表达式组		全满足
				∀x ∀i P(x,i)
条件强		neg 全不满足 表达式组		全不满足
				∀x ∀i ¬ P(x,i)

条件弱		pos1 对表达式组中每个表达式，至少有1个数字满足		包含
				∀i ∃x P(x,i)
条件弱		neg1 对表达式组中每个表达式，至少有1个数字不满足	不全满足
				∀i ∃x ¬ P(x,i)

下列条件，暂不实现：

条件中		pos1All 至少有1个数字满足表达式组中每个表达式，		包含全满足			这种情况下，建议把表达式合并为1个，划归为pos1		
				∃x ∀i P(x,i)
条件中		neg1All 至少有1个数字不满足表达式组中每个表达式，	包含全不满足		这种情况下，建议把表达式合并为1个，划归为neg1
				∃x ∀i  ¬ P(x,i)

		
条件次强	posA1 每个解中的数字都满足表达式组中至少1个表达式		单射
条件次强	negA1 每个解中的数字都不满足表达式组中至少1个表达式		单射
		
		

		条件表达式：常数,2n,2n+1,3n,3n-1,p素数,c合数
			
			
	consolelog('sums',n,m,minv);
	
	*/

	var n=+N,m=+M,minV=+minv,maxV=+maxv,A=[],j=minV||1,k=maxV||n;

	if(j>n || (dup?j*m>n || k*m<n: j+(m-1)>k || (j+(m-1)/2)*m>n || (k-(m-1)/2)*m<n)){
		return []
	}else if(m==1){
		if(j<=n && k>=n && (pos||neg||pos1||neg1?nis(n,pos,neg, pos1,neg1):1)){
			return [n]
		}else{
			return []
		}
	}
	var f=function(ii,AA){
		var aa=[];
		if(dup && dup<m){
			for(var i=0;i<AA.length;i++){
				if(isArr(AA[i])){
					var Aa=AA[i].concat([ii]);
					if(!(new RegExp('(.+)\\1{'+(dup+1)+',}')).test(Aa.sort().join(',')+',')){
						aa.push(AA[i]);
					}
				}else{
					aa.push(AA[i]);
				}
			}
			if(!aa.length){
				return []
			}
		}else{
			aa=AA.concat([]);
		}
		return Arrf(function(t){return [ii].concat(t)},aa)||[]
	};
	for(var i=j; dup?i<=n/m:i<n/m ;i++){
		if(pos && !nis(i,pos) || neg && !nis(i,'',neg)){
			
		}else{
			A=A.concat(f(i,dup?SUMs(n-i,m-1,i,k,dup,pos,neg,pos1,neg1):SUMs(n-i,m-1,i+1,k,0,pos,neg,pos1,neg1)));
		}
	}

	return pos1||neg1 ? A.filter(function(t){return nAis(t,'','',pos1||'',neg1||'')}) : A	// t 满射 posA		Set.is.b2('⊆',posA,t)




};
