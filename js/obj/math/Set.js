/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var Set={//集合 本质上是数组
	build:{
		obj:function(arr){//直接构造集合
			var A=[].concat(arr);A.t='Set';A.s='';
			return A
		}
	},
	is:{//布尔逻辑
		b2:{//二元关系
			"∈":function(a,A){
				var s=Set.toStr(a);
				for(var i=0;i<A.length;i++){
					if(s==Set.toStr(A[i])){
						return 1
					}
				}
				return 0
			},
			"∉":function(a,A){return +!Set.is.b2['∉'](a,A)},
			"∋":function(a,A){return +Set.is.b2['∈'](A,a)},
			"∌":function(a,A){return +!Set.is.b2['∈'](A,a)},
			"⊆":function(A,B){
				var m=A.length,n=B.length,t=m<=n;
				if(!t){return 0}
				for(var i=0;i<m;i++){
					if(!Set.is.b2['∈'](A[i],B)){
						return 0
					}
				}
				return 1
			},
			"⊂":function(A,B){return +(A.length<B.length && Set.is.b2['⊆'](A,B))},
			"⊇":function(A,B){return +Set.is.b2['⊆'](B,A)},
			"⊃":function(A,B){return +(A.length>B.length && Set.is.b2['⊆'](B,A))},
			"⊄":function(A,B){return +(!Set.is.b2['⊂'](A,B))},
			"⊅":function(A,B){return +(!Set.is.b2['⊃'](A,B))},
			"⊈":function(A,B){return +(!Set.is.b2['⊆'](A,B))},
			"⊉":function(A,B){return +(!Set.is.b2['⊇'](A,B))},
			"=":function(A,B){return +(Set.is.b2['⊆'](A,B) && Set.is.b2['⊆'](B,A))},
			"≠":function(A,B){return +(!Set.is.b2['='](A,B))}
		}
	},
	fromStr:function(s){//集合 → 数组对象
		var	v=s;
		if(/^P\(/.test(v)){//幂集
			return Set.opr1('幂',Set.fromStr(v.replace(/^P\(|\)$/g,'')))
		}else if(/^A\/R=/.test(v)){//from 商集
			return Set.fromStrQuo(v.substr(4))
		}else if(v==='∅' || !s.length){
			v=[];v.t='Set';
			v.s=''
		}else{
			v=v.replace(/​/g,'').replace(/\s/g,'').replace(/〉/g,'>').replace(/〈/g,'<')
				.replace(/[（﹙〔]/g,'(').replace(/[）﹚〕]/g,')');
			//var vi=v.split(/[\(<\[\{]/)[0];
			var tp=/<.+,.+>/.test(v)?'<>':(/\(.+,.+\)/.test(v)?'()':'');
		//	console.log(tp);
			v=v.replace(/[\(<\[\{]/g,'[').replace(/[\)>\]\}]/g,']').replace(/∅/g,'[]').replace(/(\d*[^\[,\]\d]\d*)/g,'"$1"');
			//console.log(v);
			v=eval(v);
			v.t='Set'+(tp?'_Cartestian_'+tp:'');
			v.s=s;
		}
		return v
	},
	toStr:function(A,html){//html指定字符串需html转义（<>）
		var str='',PA=['{[<(','}]>)'],ts=typeof(A),ht=html||'';
//console.log(A,ht);
		if(ts=='string'){
			return A
		}else if(ts=='number'){
			return ''+A
		}else if(!A.length || A.s===''){
			return '∅'
		}else if(A.s){
			if(ht){return XML.encode(A.s)}//.replace(/</g,'&lt;').replace(/>/g,'&gt;')
			return A.s
		}else if(/Set_Cartesian/.test(A.t)){
			var tp=A.t.substr(-2);
			if(ht && tp=='<>'){
				tp=['&lt;','&gt;'];
			}
		//	console.log(tp);
			for(var k=0;k<A.length;k++){
				str+=Set.toStr(A[k],ht)+',';
			}
		//	console.log(str);
			return tp[0]+str.replace(/,$/,tp[1])
		}else{
			for(var k=0;k<A.length;k++){
				str+=Set.toStr(A[k],ht)+',';
			}
			return '{'+str.replace(/,$/,'}')
		}
	},

	unique:function(A){	//去重
		var B=[],n=A.length,Bs=[];B.t='Set';
		if(n<1){
			return Set.fromStr('')
		}
		for(var k=0;k<n;k++){
			var s=Set.toStr(A[k]);
			if(Bs.indexOf(s)<0){
				Bs.push(s);
			}
		}
		Bs.sort();
		for(var k=0;k<Bs.length;k++){
			B.push(Set.fromStr(Bs[k]))
		}
		B.s='{'+Bs.join(',')+'}';
		return B
	},
	opr1:function(op,A,p){//集合一元运算 p是可选参数
		var B=[],n=A.length,Bs=[];B.t='Set';
		if(op=='势'){
			return n
		}
		if(op=='幂'){/*幂集 测试案例： Set.toStr(Set.opr1('幂',Set.fromStr('{1,{1,2}}')))
			参数p = 
				str 返回字符串
			*/

			var pn=Math.pow(2,n);
			for(var i=0;i<pn;i++){
				var s=i.toString(2),v=[];

				for(j=1;j<n+1;j++){
					if(j>s.length){break}
					if(s.slice(-j)[0]=='1'){
						v.unshift(Set.toStr(A[n-j]))
					}
				}
				if(v.length){
					//console.log(v);
					Bs.unshift('{'+v.join(',')+'}')
				}
			}
			Bs.sort(function(a,b){
				return a.split(',').length-b.split(',').length || +([a,b].sort()[0]!=a)*2-1
			});

			Bs.unshift('∅');
//console.log(Bs.join(','));
			var str='{'+Bs.join(',')+'}';
			if(p=='str'){return str}
			B=Set.fromStr(str);

		}

		if(op=='拷'){/*
			参数p 指定拷贝份数
			*/
			if(A.s===''){
				B.s=''
			}else if(A.s){
				B=Set.fromStr(A.s)
			}else{
				B=Set.fromStr(Set.toStr(A))
			}
			if(p){
				var ars=[];
				for(var i=0;i<p;i++){
					ars.push(Set.opr1('拷',A));
				}
				B=ars;
			}
		}
		if(op=='取'){/*	根据元素位置索引（从0开始编号），返回子集
			参数p 是索引数组
			*/
			if(!p){return Set.opr1('拷',A)}
			for(var i=0,l=p.length;i<l;i++){
				B.push(A[p[i]])
			}
		}
		return B
	},

	opr2:function(op,A,B,p){//集合二元（多元）运算 p是可选参数 
		var C=[],m=A.length,n=B.length,Cs=[], ar=arguments, arl=ar.length,ars=$.makeArray(ar).slice(1);
		C.t='Set';
		if(/[=≠∈∉∋∌⊂⊄⊃⊅⊆⊈⊇⊉]/.test(op)){
			//return rltBool2[op](A,B)
			return Set.is.b2(op,A,B)
		}
		if(op=='搜'){//搜索元素，返回位置索引
			var s=Set.toStr(B);
//console.log(B,s,s[0]);
			for(var k=0;k<m;k++){
//console.log(Set.toStr(A[k]),s,Set.toStr(A[k]).length,s.length);
				if(s==Set.toStr(A[k])){
//console.log(k);
					return k //从0开始计数！
				}
			}
			return -1
		}

		if(op=='并'){//仅限无交集的并
			if(A.s==='' || B.s===''){
				C=Set.opr1('拷',A.s===''?B:A)
			}else{
				C=Set.fromStr(A.s.replace(/\}$/,',') + B.s.replace(/^\{/,''));
			}
		}
		if(op=='∪'){
			if(A.s==='' || B.s===''){
				C=Set.opr1('拷',A.s===''?B:A)
			}else{
				C=Set.unique(Set.fromStr(A.s.replace(/\}$/,',') + B.s.replace(/^\{/,'')));
			}
		}

		if(/[-¬∩]/.test(op)){//差集和交集
			var inters=op=='∩';
			if(A.s==='' || B.s===''){
				if(inters){
					C.s=''
				}else{
					C=Set.opr1('拷',A)
				}
			}else{

				var a=[],b=[],c0,c1;
				for(var k=0;k<m;k++){
					a.push(Set.toStr(A[k]))
				}
				for(var k=0;k<n;k++){
					b.push(Set.toStr(B[k]))
				}

				if(inters && m>n){
					c0=b;
					c1=a;
				}else{
					c0=a;
					c1=b;
				}
				for(var k=0;k<c0.length;k++){
					var s=c0[k],i=c1.indexOf(s);
					if(inters && i>-1 || !inters && i<0){
						C.push(Set.fromStr(s));
						Cs.push(s);
					}
				}

				if(C.length){
					C.s='{'+Cs.join(',')+'}';
				}else{
					C.s=''
				}
			}
		}
		if(op=='⊕'){//环和 (对称差) 最后1个参数（可选），指定求法
			var islastP=arl>3 && typeof ar[arl-1] == 'string', para=!islastP||!ar[arl-1]?'-+-':ar[arl-1];
			if(para=='-+-'){
				//C=Set.opr2('∪',Set.opr2('-',A,B),Set.opr2('-',B,A))
				return Arrf(function(x,y){return Set.opr2('∪',Set.opr2('-',x,y),Set.opr2('-',y,x))},islastP?ars.slice(0,arl-2):ars,'cp2')
			}
			if(para=='+-*'){
				//C=Set.opr2('-',Set.opr2('∪',A,B),Set.opr2('∩',A,B))
				return Arrf(function(x,y){return Set.opr2('-',Set.opr2('∪',x,y),Set.opr2('∩',x,y))},islastP?ars.slice(0,arl-2):ars,'cp2')
			}
		}
		if(op=='⊗'){//环积 （对称补）			
			/*	最后1个参数p（可选）U：全集，
				倒数第2个参数是（必选），即判断p非字符串时，表示缺省。
			*/
			var islastP=arl>4 && typeof ar[arl-1] == 'string', para=!islastP|!ar[arl-1]?'-(+)':ar[arl-1], U=ars.slice(-1)[0];
			if(para=='-(+)'){
				//C=Set.opr2('-',ars.slice(-1)[0],Set.opr2('⊕',A,B))
				return Arrf(function(x,y){return Set.opr2('-',U,Set.opr2('⊕',x,y))},ars.slice(0,arl-(islastP?2:1)),'cp2')
			}
			if(para=='--'){
				//C=Set.opr2('-',ars.slice(-1)[0],Set.opr2('-',A,B),Set.opr2('-',B,A))
				return Arrf(function(x,y){return Set.opr2('-',U,Set.opr2('-',x,y),Set.opr2('-',y,x))},ars.slice(0,arl-(islastP?2:1)),'cp2')
			}
			if(para=='-+'){
				//C=Set.opr2('∪',Set.opr2('-',ars.slice(-1)[0],Set.opr2('∪',A,B)),Set.opr2('∩',A,B))
				return Arrf(function(x,y){return Set.opr2('∪',U,Set.opr2('-',U,Set.opr2('∪',x,y)),Set.opr2('∩',x,y))},ars.slice(0,arl-(islastP?2:1)),'cp2')
			}
			/*
			if(arl>5){
				var U=Set.opr1('拷',ars.slice(-1)[0]);
				return Arrf(function(x,y){return Set.opr2('⊗',x,y,p||'-(+)',U)},ars.slice(4,arl-1),'cp2')
			}
			*/
		}

		if(arl>3 && /[∩∪-]/.test(op)){//3元以上的运算
			return Arrf(function(x,y){return Set.opr2(op,x,y)},ars,'cp2')
		}
		if(op=='×'){//笛卡尔积（直积、外积）
			if(typeof B ==  'number'){ //笛卡尔幂
				ars=Set.opr1('拷',A,B);
			}
			C=cartestian(ars);
		}
		return C
	}
};
Set.fromStrQuo=function(s){//从商集得到集合：商集元素取并集
	var Q=Set.fromStr(s),S=[];
	for(var i=0;i<Q.length;i++){
		S.push(Set.toStr(Q[i]).replace(/^\{|\}$/g,''))
	}
	return Set.fromStr('{'+S.join(',')+'}');
};
