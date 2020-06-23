/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


explore['Thinking/Methodology/Compound']=


	detail('合',toggler(ZLR('复合 合成 化合 混合 结合 折合 综合 组合 拟合 合同')).join(''), 1)+



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
		'<label>元音开头 '+strchkbx0+' /></label><label>元音结尾 '+strchkbx0+' /></label> 单词数：'+num(5,1,100)+strbtn+'生成'+'" />'+
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
		var A=[], B=[], n=+$('.wordTool :number').val(), vs=$('.wordTool .Vowel .toggle'), qvs=$('.wordTool .Quasi-Vowel .toggle'), cs=$('.wordTool .Consonant .toggle');
		if(vs.length<1){
			vs=$('.wordTool .Vowel .toggler')
		}
		if(cs.length<1){
			cs=$('.wordTool .Consonant .toggler')
		}
		var chk=$('.wordTool :checkbox').eq(0).prop('checked'), chk2=$('.wordTool :checkbox').eq(1).prop('checked');
		(chk?vs:cs).each(function(){	//辅音

			B.push($(this).text())

		});
		var n0=B.length;
		while(A.length+B.length<n+n0){
			var n1=A.length+B.length;
			(chk?cs:vs).each(function(){
				var t=$(this).text();
				for(var i=0;i<B.length;i++){
					var x=B[i].slice(-1)+t[0];
					if(!/[^aoieu][^aoieu]/.test(x) && !/[aoieu][aoieu]/.test(x)){
						if(A.length+B.length>=n+n0){
							return false
						}
						A.push(B[i]+t)	//辅音+元音
					}

				}
			});
			//console.log(A);
			(chk?vs:cs).each(function(){
				var t=$(this).text();
				for(var i=0;i<A.length;i++){

					var x=A[i].slice(-1)+t[0];
					if(!/[^aoieu][^aoieu]/.test(x) && !/[aoieu][aoieu]/.test(x)){
						if(A.length+B.length>=n+n0){
							return false
						}
						B.push(A[i]+t)	//辅音+元音+辅音
					}
				}
			});
			//console.log(B);
			if(A.length+B.length==n1){
				break;
			}
		}

		var C=A.concat(B.slice(n0));	//淘汰不合规单词
		/*
		if(chk2){//辅音结尾
			C=B.slice(n0)
			
		}else{
			C=B.slice(n0)
		}
		*/

		B=[];
		for(var i=0,l=C.length;i<l;i++){
			var w=C[i];
			if(/[^aoieu][ln]$/.test(w)){

			}else{
				B.push(w)
			}
		}


		$('.wordTool .playground').html(toggler(B).join(''));

	})
});

	
