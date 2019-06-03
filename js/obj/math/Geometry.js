/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var gon=function(Arr,typ,o){//多边形，返回内线path点集		o指明迭代次数或嵌套参数（次数cnt或[marginx,marginy]）
	var S=[],M=[],B=[],A,A0, Cn=[0,0], C;
	if(isArr(Arr) && Arr[0]!='M'){
		A=[].concat(Arr);
		A0=[].concat(Arr);
	}else if(Arr){
		A0=(isArr(Arr)?Arr.join(' '):Arr).replace(/([A-Z])(\d)/ig,'$1 $2').replace(/(\d)([A-Z])/ig,'$1 $2');
		while(/[HV]/.test(A0)){
			A0=A0.replace(/(-?\d\.?\d*) (-?\d\.?\d*) H (-?\d\.?\d*)/g,'$1 $2 L $3 $2');
			A0=A0.replace(/(-?\d\.?\d*) (-?\d\.?\d*) V (-?\d\.?\d*)/g,'$1 $2 L $1 $3')
		}
		//A0=A0.replace(/M (-?\d\.?\d*) (-?\d\.?\d*) (.+) \1 \2 Z/ig,'M $1 $2 $3 Z');
//	console.log(A0);
		A=A0.replace(/A \S+ \S+ ([01] ){3}/ig,' ').replace(/[MLZCQ]/ig,' ').replace(/ +/g,' ').trim();
//		console.log(A);
		A0=A0.split(' ');
		A=Arrf(Number,A.split(' '))
	}else{
		
	}
	if(!typ){
		return A
	}
	
	if(typ=='Orthocenter'){//垂心是高线三角形的内心
		
		return gon(gon(A,'PerpendicularFoot'),'Incenter');
	}
	
	var n=A.length/2, se=0;
	if(A[0]==A[n*2-2] && A[1]==A[n*2-1]){//起讫点重合，闭合曲线
		n--;
		se=1;
	}

	for(var i=0;i<n;i++){
		Cn[0]+=A[i*2];
		Cn[1]+=A[i*2+1]
	}
	if(typ=='CenterN'){//中心点的n倍
		return Cn
	}
	C=[Cn[0]/n, Cn[1]/n];
		
	if(typ=='Center'){//中心（重心） G
		return C
	}


	if(typ=='CentroidLine'){//中心线：顶点与中心连线，n条
		for(var i=0;i<n;i++){
			B.push('M',A[i*2],A[i*2+1], 'L',C[0],C[1])
		}
		return B
	}



	for(var i=0;i<n;i++){
		S.push(Math.hypot(A[i*2+1]-A[((i+1)%n)*2+1], A[i*2]-A[((i+1)%n)*2]))
	}

	if(typ=='SideL'){//边长
		return S
	}
	
	var Cf=Arrf(function(s,t){return s+t},S,'cp2'), Lpd=Arrf(function(s,t){return s*t},S,'cp2');
	if(typ=='Circumference'){//周长
		return Cf
	}
	
	if(typ=='Area'){//面积
		if(n<3){
			return 0
		}else if(n==3){//三角形 使用海伦公式
			
			var p=Cf/2;
			return Math.sqrt(p*(p-S[0])*(p-S[1])*(p-S[2]))
				
		}else{//切割为多个三角形累加
			return gon(A.slice(0,6),typ)+gon(A.slice(0,2).concat(A.slice(4)),typ)
			
		}
		
	}

	if(/Circum(Circle|center)/.test(typ)){/*外接圆	仅讨论三角形或正多边形
		三角形：中垂线交点，外心O	满足：条件较复杂，计算量大，现利用欧拉线上矢量GH = -2GO的关系（定比分点 ，GH线，定比λ=-1/2）来求O坐标
			半径			满足：边长1*边长2*边长3 / (4R)=面积
		
		
		定比分点坐标：
		(y-Y1) / (x-X1)  = (Y2-Y1) / (X2-X1) 
			
			x=X1+λ(X2-X1)	= (1-λ)X1+λX2		=(3X1 - X2)/2
			y=Y1+λ(Y2-Y1)	= (1-λ)Y1+λY2		=(3Y1 - Y2)/2
		*/
		var H=gon(A,'Orthocenter');
		B=[(3*C[0]-H[0])/2, (3*C[1]-H[1])/2]

		if(typ=='Circumcenter'){
			return B
		}
		if(typ=='CircumCircle'){
			return B.concat(Lpd/(4*gon(A,'Area')))
		}
		if(typ=='CircumcenterLine'){
			var D=[];
			for(var i=0;i<n;i++){
				D.push('M',A[i*2],A[i*2+1], 'L',B[0],B[1])
			}
			return D
		}
		
	}

	if(/Nine_point(Circle|center)/.test(typ)){/*九点圆	仅讨论三角形
		利用欧拉线上矢量GN = GH/4的关系（定比分点 ，GH线，定比λ=1/4）来求O坐标
			半径			满足：外径R/2
		
		
		定比分点坐标：
		(y-Y1) / (x-X1)  = (Y2-Y1) / (X2-X1) 
			
			x=X1+λ(X2-X1)	= (1-λ)X1+λX2		=(3X1 + X2)/4
			y=Y1+λ(Y2-Y1)	= (1-λ)Y1+λY2		=(3Y1 + Y2)/4
		*/
		var H=gon(A,'Orthocenter');
		B=[(3*C[0]+H[0])/2, (3*C[1]+H[1])/2];

		if(typ=='Nine_pointcenter'){
			return B
		}
		if(typ=='Nine_pointCircle'){
			return B.concat(Lpd/(8*gon(A,'Area')))
		}
	}

	if(/In(circle|center)/.test(typ)){/*内切圆	仅讨论三角形或正多边形
		三角形：角平分线交点，内心I	满足：（边长1/周长）点1+（边长2/周长）点2+（边长3/周长）点3
			半径			满足：(周长/2)×r=面积
		*/
		var D=[0,0];
		for(var i=0;i<n;i++){
			var k=S[(i+1)%n]/Cf;
			D[0]+=A[i*2]*k;
			D[1]+=A[i*2+1]*k;
		}
		if(typ=='Incenter'){
			return D
		}
		if(typ=='Incircle'){
			return D.concat(gon(A,'Area')*2/Cf)
		}
		if(typ=='IncenterLine'){
			for(var i=0;i<n;i++){
				B.push('M',A[i*2],A[i*2+1], 'L',D[0],D[1])
			}
			return B
		}
	}	

			


	if(typ=='RighttVC'){//（直角边水平或垂直的）直角三角形直角点与中心	外接圆心 外接圆半径R
		//return [A[0]==A[2]||A[0]==A[4]?A[0]:A[2], A[1]==A[3]||A[1]==A[5]?A[1]:A[3], C[0], C[1]]
		B=[A[0]==A[2]||A[0]==A[4]?A[0]:A[2], A[1]==A[3]||A[1]==A[5]?A[1]:A[3], C[0], C[1]];
		if(A[0]==A[2]){
			B.push((A[0]+A[4])/2, (A[1]+A[3])/2, Math.hypot(A[0]-A[4], A[1]-A[3])/2)
		}
		if(A[0]==A[4]){
			B.push((A[0]+A[2])/2, (A[1]+A[5])/2, Math.hypot(A[0]-A[2], A[1]-A[5])/2)
		}
		if(A[2]==A[4]){
			B.push((A[0]+A[2])/2, (A[3]+A[5])/2, Math.hypot(A[0]-A[2], A[3]-A[5])/2)
		}
		
	}
	if(typ=='RightxVC'){//（斜边水平或垂直的）直角三角形直角点与中心	外接圆心 外接圆半径R
		//return ((A[1]==A[3]||A[0]==A[2]) ?[A[4],A[5]] :(A[1]==A[5]||A[0]==A[4] ? [A[2],A[3]]:[A[0],A[1]])).concat(C[0], C[1])
		
		B=((A[1]==A[3]||A[0]==A[2]) ?[A[4],A[5]] :(A[1]==A[5]||A[0]==A[4] ? [A[2],A[3]]:[A[0],A[1]])).concat(C[0], C[1]);
		if(A[0]==A[2]){
			B.push(A[0], (A[1]+A[3])/2, Math.abs(A[1]-A[3])/2)
		}
		if(A[0]==A[4]){
			B.push(A[0], (A[1]+A[5])/2, Math.abs(A[1]-A[5])/2)
		}
		if(A[2]==A[4]){
			B.push(A[2], (A[3]+A[5])/2, Math.abs(A[3]-A[5])/2)
		}


		if(A[1]==A[3]){
			B.push((A[0]+A[2])/2, A[1], Math.abs(A[0]-A[2])/2)
		}
		if(A[1]==A[5]){
			B.push((A[0]+A[4])/2, A[1], Math.abs(A[0]-A[4])/2)
		}
		if(A[3]==A[5]){
			B.push((A[2]+A[4])/2, A[3], Math.abs(A[2]-A[4])/2)
		}
		
		return B
		
	}
	
	for(var i=0;i<n;i++){
		M.push((A[i*2]+A[((i+1)%n)*2])/2, (A[i*2+1]+A[((i+1)%n)*2+1])/2)
	}
	if(typ=='MidPoint'){//n个中点
		if(o){
			return gon(M,typ,o-1)
		}else{
			return M
		}
	}
	if(typ=='Medians'){//中线：顶点与对边中点连线，n*(n-2)条	中点n个
		for(var i=0;i<n;i++){
			for(var j=0;j<n-2;j++){
				B.push('M',A[i*2],A[i*2+1], 'L',M[((i+1+j)%n)*2],M[((i+1+j)%n)*2+1])
			}
		}
		return B
	}



	if(typ=='MidPointLine'){//中点连线（中位线，n=3时 'Midline'），顺次连接，n条(n>2时)
		if(o){
			return gon(M,typ,o-1)
		}else{
			return ['M'].concat(M,'z')	//此时省略L命令，是可以的
		}
	}
	
	if(typ=='OppositeMidPointLine'){//对边中点连线，隔点连接，n*(n-3)/2条
		for(var i=0;i<n;i++){
			for(var j=0;j<n-3 && i+j<n-2;j++){
				B.push('M',M[i*2],M[i*2+1], 'L',M[((i+2+j)%n)*2],M[((i+2+j)%n)*2+1])
			}
		}
		return B

	}
	
	if(typ=='Diagonal'){//对角线，隔顶点连接，n*(n-3)/2条
		for(var i=0;i<n;i++){
			for(var j=0;j<n-3 && i+j<n-2;j++){
				B.push('M',A[i*2],A[i*2+1], 'L',A[((i+2+j)%n)*2],A[((i+2+j)%n)*2+1])
			}
		}
		return B
	}

	if(typ=='Nest'){//嵌套相似多边形（中心点是不变量）

		var NestA=function(D,num,allcnt){
//console.log(A0, D);
			var P=[], k=0;
			for(var i=0;i<A0.length;i++){
				var Ai=A0[i];
				if(k>D.length-1){
					D[k]=D[0];
					D[k+1]=D[1];
				}
				
				if(/[LMZCQ]/i.test(Ai)){
					P[i]=Ai;
				}else if(Ai=='A'){
					P[i]='A';
					P[i+1]=(+A0[i+1]*(1-num/(allcnt+1))).toFixed(2);
					P[i+2]=(+A0[i+2]*(1-num/(allcnt+1))).toFixed(2);
					P[i+3]=+A0[i+3]
					P[i+4]=+A0[i+4];
					P[i+5]=+A0[i+5];

					P[i+6]=D[k];
					P[i+7]=D[k+1];
					k+=2;
					i+=7;
				}else{

					P[i]=D[k];
					k++;
				}
			}
//console.log(P);
			return P

		};
		if(isArr(o)){//[marginx,marginy]
			var stop,j=1;
			while(!stop){
				var D=[];
				for(var i=0;i<n;i++){
					var Dx=C[0]-A[i*2], Dy=C[1]-A[i*2+1], sgnX=Math.sign(Dx), sgnY=Math.sign(Dy);
					if(Math.abs(Dx)<4){
						sgnX=0;
					}
					if(Math.abs(Dy)<4){
						sgnY=0;
					}
					var dx=A[i*2]+o[0]*sgnX*j, dy=A[i*2+1]+o[1]*sgnY*j;
					
					if(dx<=4 || dy<=4 || sgnX*Math.sign(C[0]-dx)<0 || sgnY*Math.sign(C[1]-dy)<0){
						stop=1;
						break;
					}
					D.push(dx, dy)
				}
				if(!stop){

					B.push(D)
				}else{
					break
				}
				j++;
			}
			
		}else{//cnt
			for(var i=1;i<=(o||1);i++){
				var D=[];
				for(var j=0;j<n;j++){
					D.push(parseInt(A[j*2]+(C[0]-A[j*2])*i/(o+1)), parseInt(A[j*2+1]+(C[1]-A[j*2+1])*i/(o+1)))
				}
				B.push(D)
			}
		}

		if(B[0] && B[0].length<A0.length){
			for(var i=0;i<B.length;i++){
				B[i]=NestA(B[i],i+1,B.length)
			}
		}

		return B
		
	}


	if(/Altitudes|PerpendicularFoot|OrthocenterLine/.test(typ)){/*高线：顶点与对边垂足连线，n*(n-2)条		垂足有n*(n-2)个		每条边上有n-2个垂足（需要排序）
	
	
		y=kx+b 
		y=-x/k+c
		
		kx+x/k+b-c=0
			x=(c-b)/(k+1/k) = (c-b)k/(1+k^2)
			y=(ck+b/k) /(k+1/k) = (b+ck^2)/(1+k^2)
		*/
		
		for(var i=0;i<n;i++){

			for(var j=1;j<n-1;j++){
				if(typ=='Altitudes'){
					B.push('M',A[i*2],A[i*2+1],'L')
				}

				if(A[((i+j)%n)*2]==A[((i+j+1)%n)*2]){
					B.push(A[((i+j)%n)*2],A[i*2+1])
				}else if(A[((i+j)%n)*2+1]==A[((i+j+1)%n)*2+1]){
					B.push(A[i*2],A[((i+j)%n)*2+1])
				}else{
					var k=(A[((i+j)%n)*2+1]-A[((i+j+1)%n)*2+1])/(A[((i+j)%n)*2]-A[((i+j+1)%n)*2]),
						k12=1+k*k, 
						b=A[((i+j)%n)*2+1]-k*A[((i+j)%n)*2],
						c=A[i*2+1]+A[i*2]/k ;
					B.push(parseInt((c-b)*k/k12), parseInt((b+c*k*k)/k12));
				}
			}
		}

		if(typ=='PerpendicularFoot'){//垂足有n*(n-2)个
			return B
		}
		if(typ=='PerpendicularFootLine'){//垂足连线，顺次连接（实际上述垂足需要重新排序，暂未实现！）	n*(n-2)条
			if(o){
				return gon(B,typ,o-1)
			}else{
				return ['M'].concat(B,'z')	//此时省略L命令，是可以的
			}
		}
		if(typ=='Altitudes'){
			return B
		}
		
		if(typ=='OrthocenterLine'){//利用垂心是高线三角形的内心
			var D=[],I=gon(B,'Incircle');
			for(var i=0;i<n;i++){
				D.push('M',A[i*2],A[i*2+1], 'L',I[0],I[1])
			}
			return D
		}
		
	}

	return B
		
		
		
};