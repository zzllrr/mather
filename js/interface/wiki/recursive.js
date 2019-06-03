/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Recursive']=
	detail('阿克曼函数Ackermann （双归纳，扩展基本算术运算+ * ^ ↑）','A(m,n)='+
		piece([
			['n+1','当m=0时'],
			['A(m-1, 1)','当m>0且n=0时'],
			['A(m-1, A(m, n-1))','当m>0且n>0时']
		])+'《译丛》定义'+
		piece([
			['n+2','当m=1时'],
			['2','当m>1且n=1时'],
			['A(m-1, A(m, n-1))','当m>1且n>1时']
		],'l')+
		ul(['A(0,n)=n+1',
			'A(1,n)=2+(n+3)-3=n+2'+SCtv('prov','A(1,n)=A(0, A(1,n-1))=A(0, A(0, A(1,n-2)))= ⋯ =A(1,0)+n=A(0,1)+n=2+n'),
			'A(2,n)=2(n+3)-3=2n+3'+SCtv('prov','A(2,n)=A(1, A(2,n-1))=2+A(2,n-1)= ⋯ =2n+A(2,0)=2n+3'),
			'A(3,n)=2↑(n+3)-3='+msup(2,'n+3')+'-3'+SCtv('prov','A(3,n)+3=A(2, A(3,n-1))+3=2A(3,n-1)+3+3=2(A(3,n-1)+3)= ⋯ ='+msup(2,'n')+'(A(3,0)+3)='+msup(2,'n+3')),
			'A(4,n)=2↑↑(n+3)-3'+SCtv('prov','A(4,n)+3=A(3, A(4,n-1))+3='+msup(2,'A(4,n-1)+3')+'= ⋯ ='+msups([2,2,'⋰',2,'A(4,0)+3'])+'='+msups([2,2,'⋰',2,2,2,2])+'=2↑↑(n+3)'),
			'A(5,n)=2↑↑↑(n+3)-3',
			'A(6,n)=2↑↑↑↑(n+3)-3',
			'A(m,n)=2'+msup('↑','m-2')+'(n+3)-3',
			
			'A(0,0)=1',
			'A(1,0)=A(0,1)=2',
			'A(2,0)=A(1,1)=A(0, A(1,0))=A(0,2)=3',
			'A(3,0)=A(2,1)=A(1, A(2,0))=A(1,3)=5='+msup(2,3)+'-3=2↑3-3',
			'A(4,0)=A(3,1)=A(2, A(3,0))=A(2,5)=13='+msups([2,2,2])+'-3=2↑↑3-3',
			'A(5,0)=A(4,1)=A(3, A(4,0))=A(3,13)=65533=2↑↑↑3-3',
			'A(m,0)=2'+msup('↑','m-2')+'3-3',
			
			'A(m,1)=2'+msup('↑','m-2')+'4-3',
			'A(m,2)=2'+msup('↑','m-2')+'5-3',
			'A(m,3)=2'+msup('↑','m-2')+'6-3',
			'A(m,4)=2'+msup('↑','m-2')+'7-3',
			'A(m,5)=2'+msup('↑','m-2')+'8-3',
		])+
		'<div id=Ackermann>A('+num(1)+','+num(1)+') = <input type=text />');


		
var tco=function(f){/*尾递归 http://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E9%80%92%E5%BD%92%E4%BC%98%E5%8C%96%E7%9A%84%E5%AE%9E%E7%8E%B0
		
		应用：

	var sum = tco(function(x, y) {
	  if (y > 0) {
	    return sum(x + 1, y - 1)
	  }
	  else {
	    return x
	  }
	});

	sum(1, 100000)
	*/

  var v;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        v = f.apply(this, accumulated.shift());
      }
      active = false;
      return v;
    }
  };
}, Ackermann=function(m,n){//阿克曼函数
	if(m){
		if(n){
			return Ackermann(m-1n, Ackermann(m,n-1n))
		}else{
			return Ackermann(m-1n,1n)
		}
	}else{
		return n+1n
	}
};

$(function(){
		
	$('body').on('change keyup mouseup','#Ackermann input[type="number"]',function(){
		var p=$(this).parent(), nums=p.find('input');
		nums.eq(2).val(Ackermann(BigInt(nums.eq(0).val()), BigInt(nums.eq(1).val())))
	});
});