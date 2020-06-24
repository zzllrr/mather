/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


explore['Thinking/Methodology/Compound']=


	detail('合',toggler(ZLR('复合 合成 化合 混合 结合 折合 综合 组合 拟合 合同 协同')).join(''), 1)+



	detail('操作',toggler(ZLR('直和 直积 笛卡尔乘积 迭代 循环 递归 回归 反馈')).join(''),1)+

	detail('合成英文单词',DCtv('Vowel', 'Vowel 元音'+
			DCtv('_a', toggler(ZLR('a ar are aw ay ai')).join(''))+
			DCtv('_e', toggler(ZLR('e ea ear eau ee e er eu ey')).join(''))+
			DCtv('_i', toggler(ZLR('i ia ie igh io ir ie')).join(''))+
			DCtv('_o', toggler(ZLR('o oa oe oi oo or ou ow oy')).join(''))+
			DCtv('_u', toggler(ZLR('u ua ue ui ure uy')).join(''))

		)+DCtv('Quasi-Vowel', '准元音'+
			DCtv('_l', toggler(ZLR('l ll le')).join(''))+
			DCtv('_y', toggler(ZLR('y')).join(''))
		)+

		DCtv('Consonant', 'Consonant 辅音'+
			toggler(ZLR('b bl br c cl cr d dr f fl fr g gh gl gr h j k kn l m n ng p pl pr ph q r s sh sl sn st t th tr tw v ve w wr x y z')).join('')
		)+
		'<label>元音开头 '+strchkbx0+' /></label><label>元音结尾 '+strchkbx0+' /></label> 单词长度介于：'+num(3,1,100)+' ~ '+num(10,1,100)+' 单词数：'+num(5,1,1000)+strbtn+'生成'+'" />'+
		DCtv('playground', ''
		)

	,'','class=wordTool')
/*


	Table([i18(ZLR('Name Author Features'))],[


	],'TBrc')
	*/
;

$(function(){
	$('body').on('click', '.wordTool :button',function(){
		var A=[], B=[], ns=$('.wordTool :number'), l0=+ns.eq(0).val(), l1=+ns.eq(1).val(), n=+ns.eq(2).val();
		var vs=$('.wordTool .Vowel .toggle'), qvs=$('.wordTool .Quasi-Vowel .toggle'), cs=$('.wordTool .Consonant .toggle');
		if(vs.length<1){
			vs=$('.wordTool .Vowel .toggler')
		}
		if(cs.length<1){
			cs=$('.wordTool .Consonant .toggler')
		}
		var chk=$('.wordTool :checkbox').eq(0).prop('checked'), chk2=$('.wordTool :checkbox').eq(1).prop('checked');
		(chk?vs:cs).each(function(){	//元音开头，B放元音	；辅音开头，B放辅音

			B.push($(this).text())

		});
		var n0=B.length, wordValid=function(x){
			return !/[^aoieu][^aoieu]/.test(x) && !/[aoieu][aoieu]/.test(x) && !/(..+).*\1/.test(x)
		};
		while(A.length<n+100 || B.length<n+100+n0){
			var n1=A.length+B.length;
			(chk?cs:vs).each(function(){
				var t=$(this).text();
				for(var i=0;i<B.length;i++){
					var x=B[i].slice(-1)+t[0], y=B[i]+t;
					if(wordValid(x) && wordValid(y) && A.indexOf(y)<0){
						if(A.length>=n+100 && B.length>=n+100+n0){
							return false
						}
						A.push(y)	//元音开头，A放元音+辅音	；辅音开头，A放辅音+元音
					}

				}
			});
			//console.log(A);
			(chk?vs:cs).each(function(){
				var t=$(this).text();
				for(var i=0;i<A.length;i++){

					var x=A[i].slice(-1)+t[0], y=A[i]+t;
					if(wordValid(x) && wordValid(y) && B.indexOf(y)<0){
						if(A.length>=n+100 && B.length>=n+100+n0){
							return false
						}
						B.push(y)	//元音开头，B放元音+辅音+元音	；辅音开头，B放辅音+元音+辅音
					}
				}
			});
			//console.log(B);
			if(A.length+B.length==n1){
				break;
			}
		}

		//var C=A.concat(B.slice(n0));	//淘汰不合规单词
		//console.log(A,B);
		if(chk2){//元音结尾
			var C=[].concat(chk?B.slice(n0):A);
			
		}else{//辅音结尾
			var C=[].concat(chk?A:B.slice(n0));
		}
		

		B=[];
		for(var i=0,l=C.length;i<l;i++){
			var w=C[i], wn=w.length;
			if(/[^aoieu][ln]$/.test(w) || wn<l0 || wn>l1){

			}else{
				B.push(w)
			}
		}


		$('.wordTool .playground').html(toggler(B.slice(0,n)).join(''));

	})
});

	
