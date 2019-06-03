/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

topic['Lottery']='';

topicThen['Game/Lottery']=function(){
	
	
	OH(XML.wrapE('style',
			`.ltr_txta{min-width:400px;height:300px}`
		)+
		detail('双色球（6红+1蓝）','<div><textarea id=ltr_my_result class=ltr_txta /> <input type=button id=ltr_add2my value="←添加到" /> <textarea id=ltr_result class=ltr_txta />'+dc+
			'<p><label hidden>期号<input type=number id=ltr_vol /></label><label>'+href(H+'www.jslottery.com/Lottery?PlayType=1','开奖号码')+' <input type=text id=ltr_last_result value="9 13 14 19 22 25 2" /><label hidden>联网<input type=checkbox id=ltr_lastOnline checked=checked /></label>'+
				'<input type=button id=ltr_chk value="检查" /></label></p>'+
			'<p><label>胆 <input type=number id=ltr_dan value=5 min=1 max=5 /></label><label>拖 <input type=number id=ltr_tuo value=5 min=2 max=6 /><label>+ <input type=checkbox class=ltr_addBlue checked=checked /> 蓝 <input type=number class=blues value=2 min=1 max=16 /></label><label><input type=button id=ltr_randDT value="随机" /><input type=number class=bets value=5 min=1 max=100 />注</label></p>'+
			'<p>复式 <label>红球 <input type=number id=ltr_FSred value=7 min=7 max=33 /></label><label>+ <input type=checkbox class=ltr_addBlue checked=checked /> 蓝 <input type=number class=blues value=2 min=1 max=16 /></label><label><input type=button id=ltr_randFSred value="随机" /><input type=number class=bets value=5 min=1 max=100 />注</label></p>'+
			'<p>复式 <label>蓝球 <input type=number class=blues value=2 min=1 max=16 /></label><label><input type=button id=ltr_randFSblue value="随机" /><input type=number class=bets value=5 min=1 max=100 />注</label></p>'+
			'<p>单式 <label><input type=button id=ltr_randDS value="随机" /><input type=number class=bets value=5 min=1 max=100 />注</label></p>'
			)
	);
	
	var T=Time.week();
	if(/[024]/.test(T[0]) && (T[6]<21 || T[6]==21 && T[7]<=15)){
		T=Time.week('',-(+(T[0]==0))-2);
	}else if(/![024]/.test(T[0])){
		T=Time.week('',-(+(T[0]==6))-1);
	}
	/*T[0]	T[2]	期数+
		0	1,2,3	0
			4,5		1
			6,7		2
	
		2	1,2		0
			3,4,5	1
			6,7		2
		
		4	1,2		0
			3,4		1
			5,6,7	2
	
	
	*/
	$('#ltr_vol').val(T[3]+('00'+(T[1]*3+(T[2]<3||T[2]==3 && T[0]==0?0:(T[2]>5||T[2]==5 && T[0]==4?2:1 )))).substr(-3));
	
	$('#ltr_my_result').val('3 15 17 24 32 + 4 7 20 30 31 ; 3 12,5 7 12 24 29 + 11 22 23 26 28 ; 9 11,5 15 17 19 30 + 3 4 8 21 23 ; 7 16,5 6 11 13 24 + 3 20 31 32 33 ; 1 14,5 6 19 20 22 + 2 7 10 18 32 ; 8 2,4 13 14 23 33 + 7 10 22 25 29 ; 6 4,3 11 14 27 31 + 4 6 9 20 32 ; 10 13,2 9 18 24 25 + 7 14 17 27 30 ; 5 15,1 2 4 11 22 + 10 14 19 20 29 ; 1 14,8 9 10 21 30 + 2 4 16 28 31 ; 2 9,2 10 16 20 21 + 8 12 22 23 29 ; 4 10,1 2 20 28 29 + 10 13 15 25 32 ; 5 13,4 7 16 24 29 + 6 9 21 30 32 ; 7 15,5 12 13 19 25 + 2 7 15 17 24 ; 11 16,2 11 23 26 27 + 4 15 17 29 32 ; 8 12,17 23 27 30 31 + 11 20 21 25 33 ; 3 6'.replace(/,/g,'\n'));
};

$(function(){


	$('body').on('click','#ltr_randDS',function(){
		var s='';
		for(var i=0,l=+$(this).next().val();i<l;i++){
			s+=RandomCombinA(seqA(1,33),6).join(' ')+' ; '+Random(16)+'\n'
		}
		$('#ltr_result').val(s)

	}).on('click','#ltr_add2my',function(){
		var s='',my=$('#ltr_result').val().trim().split('\n');
		for(var i=0,l=my.length;i<l;i++){
			var A=my[i].split(/ *; */),t;
			if(A[1]){
				A[1]=A[1].split(' ').sort(sortBy.num).join(' ');
			}
			if(/\+/.test(A[0])){
				t=A[0].split(/ *\+ */);
				A[0]=t[0].split(' ').sort(sortBy.num).join(' ')+' + '+t[1].split(' ').sort(sortBy.num).join(' ')
				
			}else if(A[0]){
				A[0]=A[0].split(' ').sort(sortBy.num).join(' ');
				
			}
			$('#ltr_my_result').val(function(i,v){return (v.trim()?v+'\n':'')+A.join(' ; ')})
		}


	}).on('click','#ltr_randDT',function(){
		var d=+$('#ltr_dan').val(), t=+$('#ltr_tuo').val(), s='',pap=$(this).parent().prev();
		for(var i=0,l=+$(this).next().val();i<l;i++){
			var A=RandomCombinA(seqA(1,33),d+t);
			s+=A.slice(0,d).join(' ')+' + '+A.slice(d).join(' ')+(pap.find(':checked').length?' ; '+RandomCombinA(seqA(1,16),+pap.find('.blues').val()).join(' '):'')+'\n';
		}
		$('#ltr_result').val(s)

	}).on('click','#ltr_randFSred',function(){
		var pap=$(this).parent().prev(),s='';
		for(var i=0,l=+$(this).next().val();i<l;i++){
			s+=RandomCombinA(seqA(1,33),+$('#ltr_FSred').val()).join(' ')+(pap.find(':checked').length?' ; '+RandomCombinA(seqA(1,16),+pap.find('.blues').val()).join(' '):'')+'\n'
		}
		$('#ltr_result').val(s)

	}).on('click','#ltr_randFSblue',function(){
		var pap=$(this).parent().prev(),s='';
		for(var i=0,l=+$(this).next().val();i<l;i++){
			s+=RandomCombinA(seqA(1,16),+pap.find('.blues').val()).join(' ')+'\n'
		}
		$('#ltr_result').val(s)
	
	}).on('click','#ltr_chk',function(){
		var p=$(this).parent(), txt=$('#ltr_my_result').val().trim().replace(/^0/,''), isonline=$('#ltr_lastOnline').prop('checked'), chkprize=function(x){
			/*
			胆拖	5+(2, 4+(3, 3+(4, 2+(5, 1+(6,
			复式	0+(7,
			
			x格式：
				红(空格隔开或另使用一个+号表示胆拖);蓝(空格隔开)
				6个号码（非数字隔开）
				
			中奖格式：
			
1、中6红 + 蓝
2、中6红
3、中5红 + 蓝
4、中5红 或
   中4红 + 蓝
5、中4红 或
   中3红 + 蓝
6、中蓝

			*/
			var A=(x||'').trim().split(/\D+/);
			if(A.length<7){
				return x+' 号码有误'
			}
			var rst=$('#ltr_last_result').val().trim().replace(/^0/,'').split(/\D+0?/), red=rst.slice(0,6), blue=rst[6];
			if(rst.length<7){
				return x+' 开奖号码有误'
			}
			red.sort(sortBy.num);
			$('#ltr_last_result').val(red.join(' ')+' '+blue);
			var r=0,b;
			if(A.length==7){//复式
				b=A[6]==blue;
				for(var i=0;i<6;i++){
					if(red.indexOf(A[i])>-1){
						r++
					}
				}
				if(r<3){
					if(b){
						return x+' 中蓝（六等奖，5元）'
					}
					return x+' 未中奖'
				}else{
					var s=x+' 中'+r+'红'+(b?' + 蓝':'');
					if(r==3 || r==4 && !b){
						return s+'（五等奖，10元）'
					}
					if(r==4 && b || r==5 && !b){
						return s+'（四等奖，200元）'
					}
					if(r==5 && b){
						return s+'（三等奖，3000元）'
					}
					if(r==6 && !b){
						return s+'（二等奖，20万+）'
					}
					return s+'（一等奖，500万+）'
				}
			}
			A=x.trim().split(';')
			if(A[0].indexOf('+')<0){
				A[0]='+'+A[0]	//红 复式转化成胆拖 0+(7,
			}

			var AR=A[0].split('+'),R0=AR[0].trim().split(/\D+/),R1=AR[1].trim().split(/\D+/),r1=0;
			if(R0[0]==''){
				R0=[];
			}
			var	B=A[1].trim().split(/\D+/), Bl=B.length, Rl0=R0.length,Rl1=R1.length, B1=B[1];
			b=+(B.indexOf(blue)>-1);
			
		//	console.log(R0,R1,B);
			for(var i=0;i<Rl0;i++){
				if(red.indexOf(R0[i])>-1){
					r++			//胆 命中红球数
				}
			}
			for(var i=0;i<Rl1;i++){
				if(red.indexOf(R1[i])>-1){
					r1++		//拖 命中红球数
				}
			}
			var R=r+Math.min(6-Rl0,r1);
			if(R<3){//只可能中六等奖
				if(b){
					var c=Combin(Rl1,6-Rl0);
					if(c==1){
						return x+' 中蓝（六等奖，5元 + 5元派奖）'
					}
					return x+' 中蓝（六等奖，5元×'+c+'×2='+c*10+'元（含派奖）。有C('+Rl1+',6-'+Rl0+')注'
				}
				return x+' 未中奖'
			}else{
				var P=[], S=[],c,n;
				if(R==6){
					if(b){
						S.push('中6红+蓝：一等奖，500万');
						P.push(5000000);
					}
					c=Bl-b;
					if(c){
						n=20*c;
						S.push('中6红：二等奖，20万×'+c+'='+n+'万。有'+c+'注');
						P.push(n);
					}
				}
				if(R>=5){
					if(b){
						c=Combin(r1,5-r)*Combin(Rl1-r1,1-(Rl0-r));
						if(c){
							n=c*3000
							S.unshift('中5红+蓝：三等奖，3000元×'+c+'注='+n+'元');
							P.push(n);
						}
					}
					c=Combin(r1,5-r)*Combin(Rl1-r1,1-(Rl0-r))*(Bl-b);

					if(c){
						n=c*200;
						S.unshift('中5红：四等奖，200元×'+c+'注='+n+'元');
						P.push(n);
					}

				}
				
				if(R>=4){
					if(b){
						c=Combin(r1,4-r)*Combin(Rl1-r1,2-(Rl0-r));
						if(c){
							n=c*200
							S.unshift('中4红+蓝：四等奖，200元×'+c+'注='+n+'元');
							P.push(n);
						}
					}
			//		console.log(r1,4-r,' * ',Rl1-r1,2-(Rl0-r), "Bl-b=",Bl,'-',b,'=',Bl-b);
					c=Combin(r1,4-r)*Combin(Rl1-r1,2-(Rl0-r))*(Bl-b);
					if(c){
						n=c*10;
						S.unshift('中4红：五等奖，10元×'+c+'注='+n+'元');
						P.push(n);
						
					}

				}
				
				
				if(R>=3){
					if(b){
						c=Combin(r1,3-r)*Combin(Rl1-r1,3-(Rl0-r));
						if(c){
							n=c*10
							S.unshift('中3红+蓝：五等奖，10元×'+c+'注='+n+'元');
							P.push(n);
						}
					}
					if(R==3 && !b){
						return x+' 未中奖'
					}
				}
				if(b){
					c=Combin(r1,2-r)*Combin(Rl1-r1,4-(Rl0-r)) + Combin(r1,1-r)*Combin(Rl1-r1,5-(Rl0-r)) + Combin(r1,-r)*Combin(Rl1-r1,6-(Rl0-r));

					if(c){
						n=c*10;//复式、胆拖派奖，不派奖是 n=c*5
						S.unshift('中蓝：六等奖，5元×'+c+'注×2（含派奖）='+n+'元');
						P.push(n);
					}

				}
			}
			S.unshift(x+' 中'+r+'+'+r1+'='+R+'红'+(b?' + 蓝':'')+' 共计 '+plus(P)+'元')
			return S.join('\n')
		
		};
		if(0 && isonline){
			$.ajax({
				url:H+'jslottery.com/Lottery?PlayType=1',
				success: function(d){
				    var nums=[[]];
				    $(d).find('#lotteryNumberList a:contains('+$('#ltr_vol').val()+')').parent().nextAll().each(function(i){
				    	if(i<6){
				    		nums[0].push($(this).text())
				    	}else{
				    		nums[1]=$(this).text()
				    	}
					});
					nums[0].sort(sortBy.num);
				    $('#ltr_last_result').val(nums[0].join(' ')+' '+nums[1]);
				    
				    $('#ltr_result').val(Arrf(chkprize,txt.split('\n')).join('\n'));
				}
			});
			
		}else{

			$('#ltr_result').val(Arrf(chkprize,txt.split('\n')).join('\n'));
		}
		

	});


});
