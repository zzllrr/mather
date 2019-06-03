/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

	
var floor=function(A,m,reorder,indx){/*A中不超过m的最大的数
	参数reorder 默认为空或0，表A是升序（顺序，从小到大）数组；-1，表A是降序（逆序，从大到小）数组；1，表A是乱序
	
	参数indx 默认为空或0，表示返回数
			1 返回索引
			2 返回[数，索引]数组
	*/
	var l=A.length,s,j=A.indexOf(m);
	if(j>-1){
		return indx?(indx==2?[m,j]:j):m
	}

	if(reorder==1){
		s=A[0];
		for(var i=0;i<l;i++){
			var Ai=A[i];
			if(Ai<m && Ai>s){
				s=Ai;
				j=i;
			}
		}
		return s>m?null:(indx?(indx==2?[s,j]:j):s)
	}
	if(reorder==-1){
		s=A.slice(-1)[0];
		for(var i=0;i<l;i++){
			var Ai=A[i];
			if(Ai<m){
				return indx?(indx==2?[Ai,i]:i):Ai
			}
		}
		return null
	}
	for(var i=l-1;i>=0;i--){
		var Ai=A[i];
		if(Ai<m){
			return indx?(indx==2?[Ai,i]:i):Ai
		}
	}
	return null

},ceil=function(A,m,reorder,indx){//A中不小于m的最小的数	参数reorder、indx 含义见floor
	var l=A.length,s,j=A.indexOf(m);
	if(j>-1){
		return indx?(indx==2?[m,j]:j):m
	}

	if(reorder==1){
		s=A[0];
		for(var i=0;i<l;i++){
			var Ai=A[i];
			if(Ai>m && Ai<s){
				s=Ai;
				j=i
			}
		}
		return s<m?null:(indx?(indx==2?[s,j]:j):s)
	}
	if(reorder==-1){
		s=A.slice(-1)[0];
		for(var i=l-1;i>=0;i--){
			var Ai=A[i];
			if(Ai>m){
				return indx?(indx==2?[Ai,i]:i):Ai
			}
		}
		return null
	}
	for(var i=0;i<l;i++){
		var Ai=A[i];
		if(Ai>m){
			return indx?(indx==2?[Ai,i]:i):Ai
		}
	}
	return null

},subA=function(A,gt,lt,unsort){//从升序数组，截取大于gt或小于lt的子集		指定unsort，则表示是无序数组
	var B=[],l=A.length;

	for(var i=0;i<l;i++){
		var a=A[i];
		if(gt?a>gt:(lt?a<lt:1)){
			B.push(a);
			
			if(!unsort && !lt){
				return B.concat(A.slice(i+1))
			}
		}else if(!unsort && lt && a<=lt){
			return B
		}
	}
	return B



},count2pow=function(A,style){/*计数，并写成幂乘积形式	A是二维数组[去重数组, 相应重数数组]
		参数 style 连接风格
			默认	空
			1	指定以乘法点号连接‧（纯数字之间乘法）
			2	指定以中文逗号连接，	幂写成大括号{}：（重数）	并以latex显示
		*/
	return concat(A[0],
		Arrf(function(t){return t>1?(style==2?'（'+(t<5?'两三四'[t-2]:t)+'重）':('^{'+t+'}')):''},A[1])).join(style?'‧，'[style-1]:'')

};
