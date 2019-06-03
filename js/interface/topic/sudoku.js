/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

topic['Sudoku']='';

tooltip.topic['Game/Sudoku']=XML.wrapE('style',
		`.sudoku td:not(.red){
			color:white
		}
		.sudoku td:not(.bdr){
			border-right: outset gainsboro 1px;
		}
		.sudoku td:not(.bdl){
			border-left: outset gainsboro 1px;
		}
		.sudoku td:not(.bdt){
			border-top: outset gainsboro 1px;
		}
		.sudoku td:first-child{
			border-left: outset black 1px;
		}
		.sudoku td:not(.bdb){
			border-bottom: outset gainsboro 1px;
		}
		.sudoku .red{
		  text-shadow: gray 1px 1px 2px;
		  -webkit-text-stroke: 1px red;
		}


	  /*
	  text-shadow: black 1px 1px 2px,pink -1px 1px 2px,gray 1px -1px 2px,white -1px -1px 2px;
	   -webkit-text-fill-color: transparent;
	  -webkit-text-stroke: 1px red;
	  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));  
	  
	    background:-webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 40%,#0ff 55%,#00f 70%,#f00);
	  -webkit-background-clip:text;
	  */
		.sudoku td:not(.red){
		    text-shadow: black 1px 1px 2px;
		}


		.sudoku td:before,.sudoku td:after{
		    color: white;
		    text-shadow: black 1px 1px 1px;
		 	position: absolute;
		}
		.sudokuks:before{
		    content: attr(data-ks);
		    font-size: 10px;
		    margin: -4px -12px;
		}
		.sudoku{
			font-size:30px;
			margin:25px;
			border:6px outset;
			border-spacing:0;
			border-collapse: separate;
			text-align:center;
			float:left;
			border: 6px outset;
		  	border-radius: 10px;
		}


		.sudoku td:not([class]){
			opacity:0
		}
		.sudokuAppend{
			opaicty:.7;
			background: rgba(154, 205, 50,.5);
		}

		.sudoku td{
			width: 40px;
			height:40px;
			border-radius: 5px;
		}

		#sudokuTable{
			zoom:.7
		}`
	)+detail('阶数'+zlr3('<label><input type=radio name=sudokuPls ','checked=true@/>9x9 />6x6 />8x6','</label>','').replace(/@/g,' '),DCtv('sudokuForm','<table id=sudokuTable class=sudoku><tbody>'+'xxyxxyxxx'.replace(/x/g,'<tr>001001000</tr>').replace(/y/g,'<tr>223223222</tr>')
			.replace(/\d/g,function(t){return '<td class="red'+['',' bdr',' bdb',' bdb bdr'][+t]+'" contenteditable=true></td>'})+
		'</tbody></table><table id=sudokuValue><tbody><tr><td>'+strbtn+'区域重选" id=sudokuRepick />'+strbtn+'数字重填" id=sudokuNew />'+strbtn+'OK" id=formsOK /></td></tr>'+
		zlr3('<tr><td><label><input@type=radio@name=sudokuType@/>','基本数字CHK0EDs1=\n 不规则宫区域CHE0CKp1=p\n 额外区域CHE1CKa1= 相邻连续CHE1CKs1cont=\n 相邻连续2MCHE1CKs1cont2M= '+
			'单格数比>CHE1CKs1comp> 单格数比=CHE1CKs1comp= 单格数比<CHE1CKs1comp< 数和（杀手）CHE1CKs1sum= 数和数比>CHE1CKs1sumcomp> 数和数比=CHE1CKs1sumcomp= 数和数比<CHE1CKs1sumcomp< 数积CHE1CKs1prod= 额外条件CHE1CKs1.',
		'</td></tr>').replace(/@/g,' ').replace('/>基本数字','checked />基本数字').replace(/CHK(\d)ED/g,'</label></td><td>'+strchkbx0+'class=input$1 checked /></td><td contenteditable=true>').replace(/CHE(\d)CK/g,'</label></td><td>'+strchkbx0+'class=input$1 /></td><td contenteditable=true>')+'</tbody></table>'),1)+
	detail('数独类型',['s已知数(sudoku)，p宫分块号(palace，支持4种字符参数pdfs，分别表示宫型、对角、扁型、高型)'].concat(
		concat(ZLR('标准 拼图（锯齿） 重叠2 重叠3 重叠5 拼图重叠 对角线 额外区域 摩天楼'),Arrf(function(x){return sceg(x,0)},[
			's1=@4_231_76_@___46_3_5@6____91__@34____82_@___8_4___@_81____96@__36_____@1_4_87___@_27_536_4@p1=p',
			's1=@_9__65_8_@78___4_52@_________@_5_____1_@___5398__@_6_____7_@_________@93_2___45@_1_75__2_@@p1=@111222233@111442233@111442233@554444233@555466663@755566688@777566888@777999998@779999888',
			's1=@_3____27_@________9@_6____1__@__7__8_6_@__5_6___1@________2@5__6__3__@____5____@___1____5@p1=p@@s2=@___6____1@_3__7__8_@____5_6__@4________@_15__6__3@______5__@_____1___@__4______@9__38_7__@p2=p',
			's1=@_3_4_8___@_56___2__@__4______@____1____@__3___7__@_7____4_2@________9@___9_4___@_________@p1=p@@s2=@_1_____5_@___7_____@___4_27__@_____9___@9_4___3_7@_________@__12_____@_____1__4@_2_____6_@p2=p@@s3=@__9___6__@___3_7___@_________@2______54@__1__4___@____6____@______3__@__8____62@___8_179_@p3=p',
			's1=@5__7___12@3___8_9__@287____3_@64___1___@___43__2_@9_12____5@_56_2____@_____4___@_________@p1=p@@s2=@___2_6381@__6__54__@__84__7__@___69___7@__7_2__1_@_6___4___@_______9_@____3_1_6@___9____3@p2=p@@s3=@_________@___3_____@___4_____@___2_983_@_________@_827_6___@_____4___@_____1___@_________@p3=p@@s4=@6____4___@7_4_1____@_2_______@___6___9_@_9__7_6__@1___32___@__8__35__@__95__3__@3154_6___@p4=p@@s5=@_________@___1_____@____7_63_@4____23_6@_9__51___@___6___29@_5____764@__6_1___3@9____6__1@p5=p',
			
			's1=@4_5_____1@__8___4_2@28_______@___8_9___@______78_@___6_7___@_1__8____@____7____@35_______@p1=p@111112222@311144222@331444522@333444555@633477555@663777755@688877999@688887999@666688999@s2=@_______51@____3____@____8__7_@___1_3___@_23______@___5_9___@_______94@3_1___9__@8_____3_5@p2=p@111223333@111422223@111442223@554444633@555447663@555777666@885777966@888779996@888899999',
			's1=@_2_____1_@5_6___3_9@_8_5_2_6_@__5_7_1__@___2_8___@__4_1_8__@_5_8_7_3_@7_2___4_5@_4_____7_@p1=pd',
			's1=@_52_1____@______721@_7_2_4___@6_____1_5@___1_9___@2_5_____7@___8_5_7_@764______@____7_31_@p1=p',

			's1=@3_5__8_9_@_____9___@29_1_____@9_______1@_3_95____@________9@1_92_____@____93___@6_3_1_95_@p1=p'
		]))).join(br).replace(/@/g,'\n').replace(/_/g,' '));

tooltip.topic['Game/Sudoku Condition']=['sisj表示交集：重叠处的索引（区域左上角单元格行列号，从1开始计数，注意ij先后表示绘表先后）及偏移量（交叉处的行列数）',
		'重叠2'+sceg('s1s2=31 13,77'),
		'重叠3'+sceg('s1s2=44 11,66@s2s3=44 11,66').replace(/@/g,'\n'),
		'重叠5'+sceg('s1s3=77 11,33@s2s3=71 17,33@s3s4=71 17,33@s3s5=77 11,33'.replace(/@/g,'\n'),10),
		'拼图重叠'+sceg('s1s2=77 11,33'),
		'不连续'+sceg('s1=nonc'),
		'连续(相邻相差1)'+sceg('s1cont=21 31,43~47'),
		'连续(相邻最大相差2)'+sceg('s1cont2M=21 31,43~47'),
		'单格数比>'+sceg('s1comp>21 31,45 46'),
		'单格数比<'+sceg('s1comp<21 31,45 46'),
		'数和（杀手）'+sceg('s1sum=11+12+21+22=10,13+23+24+34=20,14+15+25=18,16~18+28=18,19~39+38+37=26,26+27+36=13,31+32+41+42=28,33+43+44=24,35+45~47=19,48+57+58+67=19,49+59=5,51+52+61=10,53~56=18,62+71+72+81=25,63~93=10,64+65+75+85=23,66+76+77=20,68+69+78+79=18,74+84=11,82+91+92=17,86+94~96=16,87+97=13,88+98=16,89+99=8',10),
		'数和数比>'+sceg('s1sumcomp>11~13 21+22,11~13 14+15'),
		'数和数比='+sceg('s1sumcomp=11~13 21+22,11~13 14+15'),
		'数和数比<'+sceg('s1sumcomp<11~13 21+22,11~13 14+15'),
		'摩天楼（上右下左）'+sceg('m1=335472314 222621433 323322133 522135323',10),
		'额外区域'+sceg('a1=14 23 24 32~34 42 43 52,58 67 68 76~78 86 87 96'),
				'三对角'+sceg('a1=16 25 34 43 52 61,49 58 67 76 85 94,41 52 63 74 85 96,14 25 36 47 58 69',10),
				'主对角线'+sceg('a1=11 22 33 44 55 66 77 88 99'),
				'次对角线'+sceg('a1=19 28 37 46 55 64 73 82 91'),
				'内四宫(窗口)'+sceg('a1=22~44,26~48,62~84,66~88'),
				
		'额外区域（局部不重复）'+sceg('p1=14 23 24 32,58 67 68 76'),
		'额外条件'+sceg('s1.23 32in13579')
		].join(br);

topicThen['Game/Sudoku']=function(){
	$('#display.seled,.iTextLaTeXon .tool.seled').click();
	$('.inputTip[data-uri="Game/Sudoku"]').attr('open','open');
	$('#iTextFold:contains(unfold_more)').click()
};

$(function(){

	$('#input0Tip').on('click','#formsOK',function(){
		var i0=$('#input0'),i1=$('#input1');
		$('.sudokuForm').find('.input0:checked').each(function(){
			var t=$(this).parent().next().text();
			i0.val(function(i,v){return (v=='\n'?'':v+'\n')+t})
		});
		$('.sudokuForm').find('.input1:checked').each(function(){
			var t=$(this).parent().next().text();
			i1.val(function(i,v){return (v=='\n'?'':v+'\n')+t})
		});
	});

	$('#go').on('click',function(){
		//if($('#explore').prop('checked') && $('.ground0 .level.seled[data-i=sudoku]').length){
		if($('#sudokuTable').length){
			
		var i0=$('#input0'),i1=$('#input1'),v=i0.val().trim();
		var dmid='outTbl'+(new Date()).getTime()+(Math.random()+'').substr(2), endn=1, colorA=H5Color('dark,red,black,crimson,maroon,firebrick,deep,midnight,fuchsia'),colori,sdata='';
		var sepf=function(s,noexpandOpr){//连续数字缩写34~54 → 完整形式 34 44,44 54
			var seqS=function(t){
				var A=ZLR(t),B=[];
				for(var i=0;i<A.length-1;i++){
					B.push(A[i]+' '+A[i+1])
				}
				return B.join(',')
			};
			if(/~/.test(s)){
				if(s[0]==s[3] || s[1]==s[4]){
					var r=/\d(\d)~\d\1/.test(s)?zlr2(seqA(+s[0],+s[3]-(+s[0])+1).join(' '),s[1]):zlr(s[0],seqA(+s[1],+s[4]-(+s[1])+1).join(' '));
					return noexpandOpr?r.replace(/ /g,noexpandOpr):seqS(r)
				}else{
					var r=cartestian([seqA(+s[0],+s[3]-(+s[0])+1),seqA(+s[1],+s[4]-(+s[1])+1)]).join(' ').replace(/,/g,'');
					console.log(r);
					return noexpandOpr?r.replace(/ /g,noexpandOpr):r
				}
				
			}else{
				return s
			}
		},sepfCont=function(s){return s.replace(/\d\d~\d\d/g,function(t){return sepf(t)});
		
		},sepfSum=function(s){return s.replace(/\d\d~\d\d/g,function(t){return sepf(t,'+')});
		
		},sepfS=function(s){return s.replace(/\d\d~\d\d/g,function(t){return sepf(t,' ')});
		
		},sepfS=function(s){return s.replace(/\d\d~\d\d/g,function(t){return sepf(t,' ')});
		
		};
		var sA=i0.val().split('='),sn=(sA.length-1)/2;//sn数独数目
		var cA=i1.val().replace(/\n+/g,'\n').trim().split('\n').sort(),cn=cA.length;//条件
		if(!cA[0]){cA=[];cn=0}

		if(sn==0){
			sA=['',sA[0],''];
			colori=RandomCombinA(colorA,1);
		}else{
			colori=RandomCombinA(colorA,9*sn);
		}

		for(var k=0;k<(sn||1);k++){
		//	console.log(sA[k*2+1]);
			var VA0=sA[k*2+1].replace(/^\n/,'').split('\n'), VA1=sA[k*2+2].trim().split('\n'), VA10=VA1[0].trim()||'',isDiag=/d/.test(VA10),
				//typ=sA[k*2+1].replace(/\d+$/,'').substr(-1)
				isAppend=i1.val().indexOf('a'+(k+1)+'=')>-1, isDiagA=isDiag||isAppend, isM=i1.val().indexOf('m'+(k+1)+'=')>-1,
				APP=i1.val().split('a'+(k+1)+'='),MORD=i1.val().split('m'+(k+1)+'='), str='',ij=/6|11/.test(VA0[0].length)?6:9; //6x6则6 11或 9x9则9 17
			if(isAppend){
				//console.log(sepf('32~54'),APP[1]);
				APP=APP[1].replace(/\n.*/,'').replace(/(\d\d~\d\d)/g,function(t){return sepf(t)}).split(',')
			}else{
				APP=''
			}
			var Appn=APP.length+(+isDiag);

//console.log('额外区域 '+isAppend);
			if(isDiagA){
				sdata+=' data-an='+Appn;//用来设置遍历宫数上限
			}
			if(isM){//摩天楼
				MORD=MORD[1].replace(/\n.*/,'').split(' ')
			}
			if(/\D/.test(VA10)){
				VA1.shift();
			}
//console.log(VA10,VA1,VA0);
			for(var i=0;i<ij;i++){//每一行
				var JA=VA0.length<4?'':VA0[i].split(/\t/.test(v)?'\t':''),JB=(sn==0 || VA1.length<4)?'':VA1[i].replace(/\D/g,'');//VA1.length==1
//console.log(JA,JB);

				str+='<tr>';
				for(var j=0;j<ij;j++){//每一列
					var rcb=[i+1,j+1,'n'], bs=[];
					if(!sn||!JB && /p/.test(VA10)){
						if(ij==9){
							rcb[2]=Math.floor(i/3)*3+Math.floor(j/3)+1;
						}else if(/f/.test(VA10)){//每一宫2x3
							rcb[2]=Math.floor(i/2)*2+Math.floor(j/3)+1;
						}else{//每一宫3x2
							rcb[2]=Math.floor(i/3)*2+Math.floor(j/2)+1;
						}
					}else if(JB){
						rcb[2]=+JB[j];
					}

					var numij=JA?JA[j].replace(/[0\D]/g,''):'', isDiagi=isDiag && (i==j || i+j==ij-1),
						isAppendi=isAppend && APP.join().indexOf((i+1)+''+(j+1))>-1,
						isMi=isM && j*i*(j-ij+1)*(i-ij+1)==0;
					if(isDiagi){
						bs.push('b'+(+(i+j==ij-1)+10));//主对角线为宫10，次对角线为宫11
						if(i==j && i+j==ij-1){//对角交叉处，有双重宫值
							bs.push('b'+10);
						}
					}
//console.log(APP.join(), (i+1)+''+(j+1));
					if(isAppendi){//额外区域，从宫号从12开始计数
						for(var l=0;l<Appn;l++){
//console.log(APP[l]);
							if(APP[l].indexOf((i+1)+''+(j+1))>-1){
								bs.push('b'+(12+l));
console.log('b'+(12+l));
								break;
							}
						}
					}

					var iA=['<td class="'+(!numij?'red':'')+(isDiagi||isAppendi?' sudokuAppend':''),'','r'+rcb[0],'c'+rcb[1],'b'+rcb[2]];
					if(isDiagi||isAppendi){
						iA=iA.concat(bs);
					}

					str+=iA.join(' sudoku'+(k+1))+'" data-s='+(k+1)+' data-r='+rcb[0]+' data-c='+rcb[1]+' data-b='+rcb[2]+
						(isMi?(i*(i-ij+1)?'':' data-m'+(i?'b':'t')+'='+MORD[i?2:0][j])+(j*(j-ij+1)?'':' data-m'+(j?'r':'l')+'='+MORD[j?1:3][i]):'')+
						'>'+numij+'</td>';
				}
				str+='</tr>';
			}
			str='<table id='+dmid+(k+1)+' class="sudoku"'+sdata+'><tbody>'+str+'</tbody></table>';
			oH.append(str);
			
			var dm=$('#'+dmid+(k+1));
			if(cn){//有条件
//console.log(cA);
				for(var j=0;j<cn;j++){
//不连续
					if(cA[j].indexOf('s'+(k+1)+'=nonc')>-1){
						dm.find('td').addClass('sudokuNonc');
					}
//连续（相邻相差1）
					if(cA[j].indexOf('s'+(k+1)+'cont=')>-1){
						var VA=sepfCont(cA[j].split('=')[1]).split(',');
						for(var i=0;i<VA.length;i++){

							dm.find(VA[i].replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/ /g,','))
							.attr('data-cont'+(k+1), function(ii,vv){return  ((vv||'')+' '+(i+1)).trim()}).addClass('sudokuCont');
						}
					}
//连续（相邻最大相差2）
					if(cA[j].indexOf('s'+(k+1)+'cont2M=')>-1){
						var VA=sepfCont(cA[j].split('=')[1]).split(',');
						for(var i=0;i<VA.length;i++){

							dm.find(VA[i].replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/ /g,','))
							.attr('data-cont2M'+(k+1), function(ii,vv){return  ((vv||'')+' '+(i+1)).trim()}).addClass('sudokuCont2M');
						}
					}




//单格数比
					if(cA[j].indexOf('s'+(k+1)+'comp')>-1){
						var VA=cA[j].split(/[>=<]/)[1].split(','), comp=cA[j].split('comp')[1][0],Comp='gel'['>=<'.indexOf(comp)];
						/*
						for(var i=0;i<VA.length;i++){
							//console.log(VA[i],VA[i].replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/ /g,','));
							dm.find(VA[i].replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/ /g,','))
							.attr('data-comp'+Comp+(k+1), function(k,v){return (v?v+',':'')+j+'_'+(i+1)+'_'}).addClass('sudokuComp');
						}
						*/
						while(VA.length){
							var i=VA.length;
							dm.find(VA.pop().replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/ /g,','))
							.attr('data-comp'+Comp+(k+1), function(k,v){return (v?v+',':'')+j+'_'+i+'_'}).addClass('sudokuComp');
	
						}
						
					}

//额外区域（局部不重复）
					if(cA[j].indexOf('p'+(k+1)+'=')>-1){
						var VA=cA[j].split('=')[1].split(',');
						for(var i=0;i<VA.length;i++){
							dm.find(sepfS(VA[i]).replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/ /g,','))
							.attr('data-p'+(k+1),i+1).addClass('sudokuPart');
						}
						//sdata+=' data-pn='+VA.length;//用来设置遍历额外区域(局部)数上限
					}
//有数和
					if(cA[j].indexOf('s'+(k+1)+'sum=')>-1){
						var VA=cA[j].split('sum=')[1].split(',');
//console.log(VA);
						for(var i=0;i<VA.length;i++){
							var si=VA[i].split('=');
							dm.find(sepfSum(si[0]).replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/\+/g,','))
							.attr('data-k'+(k+1),i+1).attr('data-ksum'+(k+1),si[1])
							.attr('data-ksums'+(k+1),SUMs(+si[1],si[0].split('+').length,1,ij).join(' ')).addClass('sudokuKill');
						}
						sdata+=' data-kn='+VA.length;//用来设置遍历杀手区域数上限
					}
//有数和数比
					if(cA[j].indexOf('s'+(k+1)+'sumcomp')>-1){
						var VA=cA[j].split('sumcomp')[1].split(','),comp=cA[j].split('comp')[1][0],Comp='gel'['>=<'.indexOf(comp)];
						for(var i=0;i<VA.length;i++){
							var si=VA[i].split(' ');
							dm.find(sepfSum(si[0]).replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/\+/g,','))
								.attr('data-kc'+Comp+(k+1),i+1).attr('data-kc'+Comp+(k+1)+'ab'+(i+1),'a').addClass('sudokuKillC');
							dm.find(sepfSum(si[1]).replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/\+/g,','))
								.attr('data-kc'+Comp+(k+1),i+1).attr('data-kc'+Comp+(k+1)+'ab'+(i+1),'b').addClass('sudokuKillC');
						}
						//sdata+=' data-kcn='+count;//用来设置遍历数上限
						sdata+=' data-kcn='+VA.length;
					}
					
				}
			
			}
			if(k>1){
				$('#'+dmid+1).attr('data-kn',function(i,v){return (v||'')+','+k})//kn
				
			}

		}

//return true;
		var dm=$('#'+dmid+1);
		if(cn){//有条件 cn && cA[0]
			for(var k=0;k<cn;k++){
				if(!/s\d+s\d=/.test(cA[k])){continue}	 //交集 重叠
				var VA=cA[k].split('='),si=VA[0].split('s'), ci=VA[1].split(','),rcA=ci[0].split(' '),rcn=ci[1];
				si.shift();
			//	si.sort(sortBy.num);
				var r0=+rcA[0][0],c0=+rcA[0][1],rs=+rcn[0],cs=+rcn[1];
//console.log(r0,c0,rs,cs,si);
				var td00=dm.find(zlr('.sudoku'+si[0],' r'+r0+' c'+c0,'')),td01=OffSet(td00,0,cs-1),td10=OffSet(td00,rs-1,0),td11=OffSet(td00,rs-1,cs-1);
				if(!td00.length){
					continue
				}
//复制

				for(m=1;m<si.length;m++){

//console.log(rcA[m],m);
					var oh=ij-(+rcA[m][1]+cs-1)||1-+rcA[m][1], oV=ij-(+rcA[m][0]+rs-1)||1-+rcA[m][0];
					var td=OffSet(oh<=0 && oV<=0?td11:(oh<=0 && oV>0?td01:(oh>0 && oV>0?td00:td10)),(2*+(oV>0)-1)*(ij-1),(2*+(oh>0)-1)*(ij-1),true);//最外面的td，新边界
					var tdlt=OffSet(td,oV<=0?0:(1-ij),oh<=0?0:(1-ij));

					for(var i=0;i<ij;i++){
						for(var j=0;j<ij;j++){

							var td0=OffSet(tdlt,i,j), td1=$('#'+dmid+si[m]).find(zlr('.sudoku'+si[m],' r'+(i+1)+' c'+(j+1),'')), e=td0.attr('class'), red=!e && td1.is('.red')?' red':'';
							var td1C=td1.attr('class'), Diags=' '+(td1C.match(/[a-z]+\d+b\d{2,}/g)||[]).join(' '),b1=td1.attr('data-b');
							//console.log(Diags);
							var sa=(e?td0.attr('data-s')+',':'')+si[m],
								ra=(e?td0.attr('data-r')+',':'')+(i+1),
								ca=(e?td0.attr('data-c')+',':'')+(j+1),
								ba=(e?td0.attr('data-b')+',':'')+b1,
								att={'data-s':sa,'data-r':ra,'data-c':ca,'data-b':ba},
								cla=zlr('sudoku'+si[m],['','r'+(i+1),'c'+(j+1),'b'+b1].join(' '))+red+Diags;

							td0.attr(att).addClass(cla).text(td0.text()||td1.text());

						}
					}

					$('#'+dmid+si[m]).remove();
				}

			}
		}
		var dms=$('#oHTML .sudoku');
//着色
//console.log(sn,cn,!/p\d=\n1/.test(i0.val()));RandomCombinA(colorA,1)
		if(sn==0 || cn==0 && !/p\d=.?\n1/.test(i0.val())){
		//if(sn==0 || /p\d=p/.test(i0.val())){
			dms.find('td').not(zlr('.sudoku','Append Part Kill KillC',',')).filter(function(){return /f/.test(VA10) && /[236]/.test($(this).attr('data-b'))  || !/f/.test(VA10) && !(+$(this).attr('data-b')%2) }).css('background-image',grad(colori[0]));	//,[data-k]
			
			//.css('background',colori[0]);
			colori=RandomCombinA(colorA,(sn+1)*ij);
			for(var k=0;k<sn;k++){
				for(var i=0;i<ij;i++){
					dms.find('.sudoku'+(k+1)+'b'+(i+10)+'.sudokuAppend').css('background-image',grad(colori[0]));
					colori.shift();
				}
			}
		}else{
			for(var k=0;k<sn;k++){
				for(var i=1;i<10;i++){
					dms.find('.sudoku'+(k+1)+'b'+i).not('.sudokuAppend').filter(function(){return !$(this).attr('style')}).css('background-image',grad(colori[0]));
					colori.shift();
				}
			}
		}


//块边框
		for(var k=0;k<sn;k++){
			for(var i=1;i<10;i++){
				var bi=dms.find('.sudoku'+(k+1)+'b'+i);
				bi.filter(function(){var me=$(this), s=me.next();return !s.length || !s.is('.sudoku'+(k+1)+'b'+i)}).addClass('bdr');
				bi.filter(function(){var me=$(this), s=me.prev();return !s.length || !s.is('.sudoku'+(k+1)+'b'+i)}).addClass('bdl');
				bi.filter(function(){var me=$(this), p=me.parent();return !p.prev().length || !OffSet(me,-1,0).is('.sudoku'+(k+1)+'b'+i)}).addClass('bdt');
				bi.filter(function(){var me=$(this), p=me.parent();return !p.next().length || !OffSet(me,1,0).is('.sudoku'+(k+1)+'b'+i)}).addClass('bdb');
			}

		}

//额外条件、数和 赋值
		if(cn){
			for(var k=0;k<cn;k++){
				if(/in/.test(cA[k])){	//仅限于某些数字
					var VA=cA[k].substr(1).split('in'),si=VA[0].split('.'), ci=sepfS(si[1]).split(' ');
					for(var i=0;i<ci.length;i++){
						dms.find('.sudoku'+(+si[0])+'r'+ci[i][0]+'.sudoku'+(+si[0])+'c'+ci[i][1]).attr('data-n',VA[1]);
					}
				}
				/*
				if(/sum=/.test(cA[k])){	//数和
					var VA=cA[k].substr(1).split('sum='),s=VA[0].split('s')[1], ci=VA[1].split(',');
						for(var i=0;i<ci.length;i++){
							var si=ci[i].split('=');
							dm.find(si[0].replace(/(\d)(\d)/g,zlr('.sudoku'+(k+1),'r$1 c$2','')).replace(/\+/g,','))
							.attr('data-k'+(k+1),i+1).attr('data-ksum'+(k+1),si[1]).addClass('sudokuKill');
						}
				}
				*/
			}
		}

		//return true;

/*
	var data = "data:image/svg+xml," +
"<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>" +
"<foreignObject width='100%' height='100%'>" +
"<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:16px;font-family:Helvetica'>" +
divContent +
"</div>" +
"</foreignObject>" +
"</svg>";
var img = new Image();
img.src = data;  <!-- NMM -->
document.getElementsByTagName('body')[0].appendChild(img);
*/

		var f=function(dm){
		
			var solveSet=[],solveCnt=0,D1=new Date();


			var deS=function(me,i){
				var err=0, meC=me.attr('class'), isDiagA=/b\d{2,}/.test(meC), pa=me.parent();
				if(i.length==1){
					me.text(i).removeAttr('data-n');
					var catchs=me.is('.sudoku1r3.sudoku1c8');
	if(catchs){
	console.log('catch',i,'解集数',solveSet.length);
	}
					var ds=me.attr('data-s').split(','),sib=[],r=me.attr('data-r').replace(/,/g,''),c=me.attr('data-c').replace(/,/g,''),b=me.attr('data-b').replace(/,/g,'');
					for(var j=0;j<ds.length;j++){
						sib.push(zlr('.sudoku'+ds[j],['r'+r[j],'c'+c[j],'b'+b[j]].join(' '),','));
					}
	//console.log(meC);
					if(isDiagA){//对角线和额外区域
						var Diags='.'+meC.match(/[a-z]+\d+b\d{2,}/g).join(',.');
						sib.push(Diags);
	//console.log(Diags);
					}
	//额外区域（局部不重复）
					if(me.is('.sudokuPart')){
						for(var j=0;j<ds.length;j++){
							var med=me.attr('data-p'+ds[j]);
							if(med){
								if(dm.find('[data-p'+ds[j]+'='+med+']').not(me).filter(function(){return $(this).text()==i}).length){
									err=1;return err;
								}
							}
						}
					}
	//不连续
					//if(me.is('.sudokuNonc') && (me.next().text()==i || me.prev().text()==i || pa.prev().children().eq(me.index()).text()==i || pa.next().children().eq(me.index()).text()==i )){
					if(me.is('.sudokuNonc') && /1/.test([+me.next().text()-(+i),+me.prev().text()-(+i),+pa.prev().children().eq(me.index()).text()-(+i),+pa.next().children().eq(me.index()).text()-(+i)].join()) ){
						err=1;return err;
					}
	//连续（相邻差1）
					if(me.is('.sudokuCont')){
						for(var j=0;j<ds.length;j++){
							var med=me.attr('data-cont'+ds[j]);
							if(med){
								if(dm.find('[data-cont'+ds[j]+']').not(me).not(':empty').filter(function(){return Set.opr2('∩',ZLR(med),ZLR($(this).attr('data-cont'+ds[j]))).length && Math.abs(+$(this).text()-(+i))!=1}).length){
									err=1;return err;
								}
							}
						}
					}
	//连续（相邻最大相差2）
					if(me.is('.sudokuCont2M')){
						for(var j=0;j<ds.length;j++){
							var med=me.attr('data-cont2M'+ds[j]);
							if(med){

								if(dm.find('[data-cont2M'+ds[j]+']').not(me).not(':empty').filter(function(){return Set.opr2('∩',ZLR(med),ZLR($(this).attr('data-cont2M'+ds[j]))).length && Math.abs(+$(this).text()-(+i))>2}).length){

	if(catchs){
	console.log('sudokuCont2M err');
	}
									err=1;return err;
								}
							}
						}
					}



	//单格数比
					if(me.is('.sudokuComp')){//目前仅限同行或同列比较大小
						var iA=me;
						console.log('单 格 数 比 赋 值');
						for(var j=0;j<ds.length;j++){
							
							while(iA.length && !err){
								//console.log(iA.length, err);
								console.log('继续局部刷新 '+iA.length);
								var lvl=$('');
								iA.each(function(){
									var me0=$(this),n0=+me0.text(),i0=me0.index(),ip0=me0.parent().index();
									for(k=0;k<3;k++){
										if(err){return false}
										var Comp='gel'[k], med=me0.attr('data-comp'+Comp+ds[j]);
										if(med){
											var meds=med.split(','),ml=meds.length;
											for(var m=0;m<ml;m++){
												//console.log('[data-comp'+Comp+ds[j]+'*='+meds[m]+']');
												var m2=dm.find('[data-comp'+Comp+ds[j]+'*='+meds[m]+']').not(me0);


												if(m2.not(':empty').filter(function(){
														var me1=$(this),n1=+me1.text(),i1=me1.index(),ip1=me1.parent().index();

														return Comp=='e' && n1!=n0  || Comp!='e' && n1==n0 || Comp=='g' && (ip1-ip0+i1-i0)*(n1-n0)>0 || Comp=='l' && (ip1-ip0+i1-i0)*(n1-n0)<0 
													}).length){
													err=1;return false;
												}
		
												//局部刷新data-n
												/*m2.filter(':empty[data-n]').attr('data-n',function(ii,vv){
													var me1=$(this),n1=+me1.text(),i1=me1.index(),ip1=me1.parent().index(), vii=vv.replace(i,'');
													if(ip1-ip0+i1-i0>0 && Comp=='g' || ip1-ip0+i1-i0<0 && Comp=='l'){
														if(i=='1'){return ''}
														return vii.replace(new RegExp('['+'123456789'.split(i)[1]+']','g'),'')
													}
													if(ip1-ip0+i1-i0>0 && Comp=='l' || ip1-ip0+i1-i0<0 && Comp=='g'){
														if(i=='9'){return ''}
														return vii.replace(new RegExp('['+'123456789'.split(i)[0]+']','g'),'')
													}
													if(Comp=='e'){
														return i
													}
												});
												*/
												m2.filter('[data-n]').each(function(){
													var me1=$(this),n1=+me1.text(),i1=me1.index(),ip1=me1.parent().index(), mn1=me1.attr('data-n'),vii=mn1.replace(i,'');
													if(m2.is(':empty')){
														if(ip1-ip0+i1-i0>0 && Comp=='g' || ip1-ip0+i1-i0<0 && Comp=='l'){
															if(i=='1'){err=1;return false}
															me1.attr('data-n',vii.replace(new RegExp('['+'123456789'.split(i)[1]+']','g'),''));
														}else if(ip1-ip0+i1-i0>0 && Comp=='l' || ip1-ip0+i1-i0<0 && Comp=='g'){
															if(i=='9'){err=1;return false}
															me1.attr('data-n',vii.replace(new RegExp('['+'123456789'.split(i)[0]+']','g'),''));
														}else if(Comp=='e'){
															if(me1.attr('data-n').indexOf(i)<0){err=1;return false}
															me1.attr('data-n', i)
														}
														var mn2=me1.attr('data-n');
														if(mn1!=mn2 && mn2.length==1){
															//console.log(mn1,mn2,'data-n减少');
															me1.text(mn2);
															lvl=lvl.add(me1);
														}
													}
												});
												
												if(err){return false}

											}
										}
									}
								});
								iA=lvl;
							}
							if(err){return err}
						}
					}
	//数和
					if(me.is('.sudokuKill')){
						for(var j=0;j<ds.length;j++){
							var med=me.attr('data-k'+ds[j]);
							if(med){
								var ksib=dm.find('[data-k'+ds[j]+'='+med+']'),ks=+me.attr('data-ksum'+ds[j]),ks1=0,kss=me.attr('data-ksums'+ds[j]),
								ksibe=dm.find('[data-k'+ds[j]+'='+med+']:empty'),ksibt='';
								ksib.not(':empty').each(function(){
									var tn=$(this).text();
									ks1+=+tn;
									ksibt+=tn;
								});
								if(ks1+(+i) > +ks || ks1+(+i)==ks && ksibe.not(me).length){
									err=1;return err;
								}
							//局部刷新data-n
								ksibe.filter('[data-n*='+i+']').attr('data-n',function(ii,vv){
									return vv.replace(i,'')
								});
								ksibe.each(function(){
									var tmp=$(this),tmpn=tmp.attr('data-n')||'';
									if(!tmpn){
										err=1;return false;
									}
									console.log(tmpn);
									for(var ii=0;ii<ksibt.length;ii++){
										tmpn=tmpn.replace(ksibt[ii],'')
									}
									if(!tmpn){
										err=1;return false;
									}
									tmp.attr('data-n',tmpn);
									console.log(tmpn);
								});
								if(err){return err}
							}
						}
					}

	//数和数比
					if(me.is('.sudokuKillC')){
						for(var j=0;j<ds.length;j++){
							for(k=0;k<3;k++){
								var Comp='gel'[k], med=me.attr('data-kc'+Comp+ds[j]);
								if(med){
									var kcsib0=dm.find('[data-comp'+Comp+ds[j]+med+'='+'a]').not(me),kcsib1=dm.find('[data-comp'+Comp+ds[j]+med+'='+'b]').not(me),ks0=0,ks1=0,
									kcsib0e=dm.find('[data-comp'+Comp+ds[j]+med+'='+'a]:empty').not(me),kcsib1e=dm.find('[data-comp'+Comp+ds[j]+med+'='+'b]:empty').not(me);
									kcsib0.not(':empty').each(function(){
										ks0+=+$(this).text()
									});
									kcsib1.not(':empty').each(function(){
										ks1+=+$(this).text()
									});
									if(me.is('[data-comp'+Comp+ds[j]+med+'='+'a]')){
										ks0+=+i
									}
									if(me.is('[data-comp'+Comp+ds[j]+med+'='+'b]')){
										ks1+=+i
									}
									var e0=kcsib0e.length,e1=kcsib1e.length;
									if(e0*e1==0){
										if(Comp=='e' &&  (e1==e0 && ks0!=ks1 || e1!=e0 && ks0==ks1) || Comp=='g' &&  e1>=e0 && ks0==ks1 || Comp=='e' && e1<=e0 && ks0==ks1){
											err=1;return err;
										}
									}
								}
							}
						}
					}



	//console.log(r,c,b,i,sib.join());
	//局部刷新data-n
					dm.find(zlr2(sib.join(' '),':empty',',')).filter('[data-n*='+i+']').attr('data-n',function(ii,vv){
						return vv.replace(i,'')
					});

	if(catchs){
	console.log('catch',err);
	}
					var me=dm.find(zlr2(sib.join(' '),':empty',','));
					if(me.filter('[data-n=""]').length){
						console.log('data-n为空');
						err=1;
					}else if(me.length){
						for(var j=0;j<ds.length;j++){
							if(err){break}

							var Appn=+dm.attr('data-an')||0;
							for(var a=0;a<3+Appn;a++){
								if(a>2 && isDiagA){
									var Diag='.sudoku'+ds[j]+'b1'+(a-3);
									if(Diags.indexOf(Diag)<0){break}
									var tds=dm.find(Diag+':empty'), nn='';
									//console.log(tds.length);
								}else{
									var tds=dm.find(sib[j].split(',')[a]+':empty'), nn='';
								}
								tds.each(function(){
									nn+=$(this).attr('data-n')
								});
	//console.log(nn);
								nn=nn.split('').sort().join('').replace(/(\d)\1+/g,'$1');//去重但保留1个值
								if(nn.length != tds.length){
									console.log('解集不完整');
									err=1;
									break;
								}

							}


							var Pn=+dm.attr('data-pn')||0;
	if(catchs){
	console.log('catch',err);
	}								
						}
					}
					if(err){return err}

	if(catchs){
	console.log('catch',err);
	}
					return err
				}else{
					me.attr('data-n',i);
					console.log(err);
					return err
				}
			}, randSolve=function(dm){

				for(var i=1;i<10;i++){
	//console.log(i);
					var mes=dm.find('td:empty[data-n]').filter(function(){return $(this).attr('data-n').length==i}),wt=[];
					
					mes.each(function(){
						var me=$(this),mei=me.index(),unr=me.siblings(':empty').length,
							unc=me.parent().siblings().filter(function(){return $(this).children().eq(mei).is(':empty')}).length,
							unp=dm.find('[data-b="'+me.attr('data-b')+'"]:empty').not(me).length;
						wt.unshift(unr+unc+unp);
						me.attr('data-wt',wt[0]);
					});
					var wts=min(wt),me=mes.filter(function(){return +$(this).attr('data-wt')==wts}).eq(0);
					if(me.length){

						var dn=me.attr('data-n'),ds=me.attr('data-s').split(','),sib=[],r=me.attr('data-r').replace(/,/g,''),c=me.attr('data-c').replace(/,/g,''),b=me.attr('data-b').replace(/,/g,'');
						for(var k=0;k<ds.length;k++){
							sib.push(zlr('.sudoku'+ds[k],['r'+r[k],'c'+c[k],'b'+b[k]].join(' '),','));
						}
						solveSet.shift();
	//console.log(dn);
						for(var j=0;j<dn.length;j++){
							//me.text(dn[j]).removeAttr('data-n');
							me.attr('data-n',dn[j]);

							solveSet.unshift(dm.html());

						}
						
						break;
					}
				}

			}, basicSolve=function(dm){
				var err=0, Appn=+dm.attr('data-an')||0;
				if(dm.find('td:empty[data-n=""]').length){
					return 1
				}

	//全局刷新data-n	
	//console.log('b');
				dm.find('td:empty[data-s]').each(function(){
					var me=$(this),meC=me.attr('class'),dn=me.attr('data-n')||seqA(1,ij).join(''),ds=me.attr('data-s').split(','),
						sib=[],r=me.attr('data-r').replace(/,/g,''),c=me.attr('data-c').replace(/,/g,''),b=me.attr('data-b').replace(/,/g,'');
					if(!me.is(':empty')){
						console.log('已填数字');
						return true
					}
					for(var k=0;k<ds.length;k++){
						sib.push(zlr('.sudoku'+ds[k],['r'+r[k],'c'+c[k],'b'+b[k]].join(' '),','));
					}

					var isDiagA=/b\d{2,}/.test(meC);
					if(isDiagA){
						var Diags='.'+meC.match(/[a-z]+\d+b\d{2,}/g).join(',.');
						sib.push(Diags);
					}

					dm.find(sib.join()).not(':empty').each(function(){
						dn=dn.replace($(this).text(),'')
					});
	//console.log('可能解',dn);

					if(!dn){
						err=1;
						return false
					}else if(dn.length==1 && !dm.find('td:empty[data-n]').length){
						console.log('只有1种可能数字',dn);
						if(deS(me,dn)){
							err=1;
							return false
						}
						
					}
					me.attr('data-n',dn);
				});
	//console.log('错误');
				if(err){return err}


	//唯一值
				dm.find('td:empty[data-n]').filter(function(){return $(this).attr('data-n').length==1}).each(function(){
					var me=$(this),mn=me.attr('data-n');
					if(!mn || deS(me,mn)){
						err=1;
						return false
					}

				});
				if(err){return err}

				while(dm.find('td:empty[data-n]').length && endn && !err){
					//endn=1;
	//		console.log('循环开始');

					var err=0;
					//整行、整列、分块，某数字，只有1个空格可能是它
					for(var s=0;s<(sn||1);s++){
						if(err){break}
	//console.log(isKiller);
						for(var j=0;j<3;j++){
							if(!dm.find('td:empty[data-n]').length || err){break}
							for(var i=1;i<10+Appn;i++){
								if(err || j<2 && i>ij || j==2 && i==10+Appn){break}
								//.filter(':empty'); //这种写法出现bug，无法找到所有的空单元格
								var tde=dm.find('.sudoku'+(s+1)+'rcb'[j]+i+':empty');
								if(tde.length){
	//console.log('.sudoku'+(s+1)+'rcb'[j]+i);
									var nn='';
									tde.each(function(){
	//	console.log($(this).attr('data-n'));
										nn+=$(this).attr('data-n')
									});
	//console.log('所有可能解（未去重）',nn);
									nn=nn.split('').sort().join('').replace(/(\d)\1+/g,'');//去重（对重复出现的数字，1次也不保留）
	//console.log('所有可能解（只保留未重复的解）',nn);
									if(nn.length){

										for(var a=0;a<nn.length;a++){
											var na=nn[a], me=dm.find('.sudoku'+(s+1)+'rcb'[j]+i+':empty').filter('[data-n*='+na+']'), mn=me.attr('data-n');
											if((new RegExp('['+nn+']{2,}')).test(mn)){
	//	console.log(nn, mn);
	//		console.log('错误解！不可能同时是多个唯一值')
												err=1;
												break;

											}
											if(me.length){
												if(deS(me,na)){
													console.log('错了',me[0].outerHTML);
													err=1;
													break;
												}
											}
										}
										endn=0;
									}

								}
							}
						}
						

					}

					if(dm.find('td:empty[data-n]').length && !err){
						endn=+!endn;
					}else{
						break
					}
				}

				return err
			},doSolve=function(dm){
				//console.log('doSolve');
				if(basicSolve(dm)){
					if(solveSet.length){
	//console.log('解集数',solveSet.length);
						solveSet.shift();

						dm.html(solveSet[0]);
						solveCnt++;
						if(solveCnt<18000){


							//console.log('已尝试 '+solveCnt+'次，继续尝试下一个解');

							if(solveCnt%1000==0){
								console.log('已尝试 '+solveCnt);
							}

							doSolve(dm);
						}else{
							
							console.log(solveCnt+' 超过最大尝试次数了！');
							//$('.sudoku').fadeIn()
						}
					}else{
						
						console.log('题目错误 尝试次数'+solveCnt);
						//$('.sudoku').fadeIn();
					}
				}else if(dm.find('td:empty[data-n]').length){

						//console.log('rand');
						randSolve(dm);
						doSolve(dm);


				}else{

						console.log('耗时'+(new Date()-D1)/1000+'s 尝试次数'+solveCnt);


					
					//杀手着色
					if(dm.is('[data-kn].zzz')){

						var kns=dm.attr('data-kn').split(','), colori=RandomCombinA(colorA,Arrf(function(a,b){return +a+(+b)},kns,'cp2'));;
						//console.log(kn);
						for(j=kns.length-1;j>-1;j--){
							for(var i=+kns[j];i>0;i--){
								//var dk='[data-k='+i+']';
								var dk='.sudoku'+(j+1)+'k'+i; 
								dm.find(dk).html(function(ii,vv){return '<span>'+vv+sc}).css('background-image',grad(colori[i-1]));
								
								var bi=dm.find(dk+' span');
								bi.filter(function(){var me=$(this).parent(), s=me.next();return !s.length || !s.is(dk)}).addClass('bdr1');
								bi.filter(function(){var me=$(this).parent(), s=me.prev();return !s.length || !s.is(dk)}).addClass('bdl1');
								bi.filter(function(){var me=$(this).parent(), p=me.parent();return !p.prev().length || !OffSet(me,-1,0).is(dk)}).addClass('bdt1');
								bi.filter(function(){var me=$(this).parent(), p=me.parent();return !p.next().length || !OffSet(me,1,0).is(dk)}).addClass('bdb1');
								bi.filter('.bdl1.bdt1').eq(0).parent().addClass('sudokuks');
							}
						}

					}
					
					//console.log( '解题成功！');

				}

			};

			doSolve(dm);

		};
		$('#oHTML .sudoku').each(function(){
			f($(this))
		});


		}
	});


	$('body').on('keydown','#sudokuTable td',function(e){
		var k=e.keyCode, shft=e.shiftKey, ctrl=e.ctrlKey, alt=e.altKey, sT=$('#sudokuTable'),
			me=$(this),pa=me.parent(), pc=pa.children(), ppc=pa.parent().children(),i=me.index(), pi=pa.index(), ms=pc.length, ps=ppc.length;
		if(k>36 && k<41){//方向键
			sT.attr('data-keymode',k);
			if(k%2){
				pc.eq((i+k-38) % ms).focus();
			}else{
				ppc.eq((pi+k-39) % ps).children().eq(i).focus();
			}
		}
		if(k>48 && k<58 || k>96 && k<106){//数字键
			if(!getSelection().toString().length && me.text().length){
				var m=+sT.attr('data-keymode')||39;
				if(m%2){
					pc.eq((i+m-38) % ms).focus();
				}else{
					ppc.eq((pi+m-39) % ps).children().eq(i).focus();
				}
			}
		}
	}).on('click','#sudokuTable td',function(e){
		var sT=$('#sudokuTable'),sel=sT.attr('data-sel')||'',me=$(this),pa=me.parent(),sTyp=$('[name=sudokuType]:checked').parent().text(), shft=e.shiftKey, tds=me;
		if(sTyp=='基本数字'){
			var t=me.text(), t0='123456789',ri=pa.index(),ci=me.index(),bi=Math.floor(ri/3)*3+Math.floor(ci/3);
			sT.find('td:not(:empty)').not(me).filter(function(){
				var Me=$(this),Pa=Me.parent(),Ri=Pa.index(),Ci=Me.index(),Bi=Math.floor(Ri/3)*3+Math.floor(Ci/3);
				return ri==Ri || ci==Ci || bi==Bi
			}).each(function(){
				t0=t0.replace($(this).text(),'')
			});
			if(t0){
				if(!t){
					me.text(RandomCombinA(t0,1));
				}else{
					me.text(RandomCombinA(t0.replace(t,''),1));
				}
			}else{
				me.empty()
			}

		}else if(sTyp){
			var ij=[pa.index()+1,me.index()+1];
			if(!shft){
				sT.attr('data-sel',ij.join(''));
			}else{
				if(sel){
					tds=$('#sudokuTable td').filter(function(){
						var Me=$(this),Pa=Me.parent();
						return (ij[0]-Pa.index()-1)*(+sel[0]-Pa.index()-1)<=0 && (ij[1]-Me.index()-1)*(+sel[1]-Me.index()-1)<=0 && sel!=(Pa.index()+1)+''+(Me.index()+1)
					});
					sT.attr('data-sel','');
				}
				
			}
			tds.toggleClass('chosen');
		}
	}).on('click','#sudokuRepick,#sudokuNew',function(){
		var sT=$('#sudokuTable'),id=this.id.substr(6);
		if(id=='New'){
			sT.find('td').empty();
		}else{
			var tds=sT.find('.chosen');
			if(tds.length){
				tds.removeClass('chosen');
			}else{
				var i=+sT.attr('data-sdkp');
				if(i){
					if(i==1){
						sT.removeAttr('data-sdkp style');
					}else{
						sT.attr('data-sdkp',i-1);
					}
					sT.find('[data-sdkp='+i+']').removeAttr('data-sdkp style');
				}
				sT.find('.chosed').removeAttr('style');
			}
		}
	}).on('click','#sudokuNew',function(){
		var sT=$('#sudokuTable');
		sT.find('.chosen').removeClass('chosen');
	}).on('click','#sudokuValue [name=sudokuPls]',function(){
		var sT=$('#sudokuTable'),n=+$(this).parent().text()[0];
		sT.children().html(ZLR('<tr>'+ZLR('<td class=red contenteditable=true></td>',n)+'</tr>',n));

	}).on('click','#sudokuValue [name=sudokuType]',function(e){
		var sT=$('#sudokuTable'),sV=$('#sudokuValue'),n=+sV.find('[name=sudokuPls]:checked').parent().text()[0],pa=$(this).parent(),td=pa.parent(),
			sTc=sT.find('.chosen'),typ=pa.text(),tdc=td.next().children().prop('checked',true),tdt=td.next().next(),t0=tdt.text(),t='';

		if(typ=='基本数字'){
			if(sT.find('td').not(':empty').length){
				sT.find('tr').each(function(){
					var tt='';
					$(this).children().each(function(){
						tt+=($(this).text()||' ')
					});
					t+=tt+'\n'
				});
				tdt.text('s1=\n'+t.replace(/\n$/,''));
			}
		}else if(/不规则宫区域/.test(typ)){
			var ds=+(sT.attr('data-sdkp')||0)+1;
			if(ds<n && !sTc.length){
				return
			}
			sT.attr('data-sdkp',ds);
			sTc.attr('data-sdkp',ds).removeClass('chosen');
			if(ds>n-2){
				var t='';
				sT.find('td').each(function(i){
					var me=$(this);
					t+=(me.attr('data-sdkp')||n)+(i%n==n-1?'\n':'')
				});
				tdt.text(t0+t.trim());
			}

		}else if(/额外|相邻连续|数比|数和/.test(typ)){
			var rel=' ', hd=',',ft='';

			if(/[,<=>\n\.]$/.test(t0)){
				hd=''
			}

			if(/数和/.test(typ)){
				rel='+';
				if(typ=='数和'){
					ft='=';
				}
				if(/数比/.test(typ)){
					if(hd && !/[>=<]\d+(\+\d+)*$/.test(t0) || /\D=\d+(\+\d+)*$/.test(t0)){
						hd='>'
					}
				}
			}

			if(/额外条件/.test(typ)){
				rel=' ';
				ft='in';
			}
			sTc.each(function(){
				var me=$(this),pa=me.parent();
				t+=(pa.index()+1)+''+(me.index()+1)+rel
			});

			t=t.replace(/.$/,'');

			tdt.text(t0+hd+t+ft);
			sTc.removeClass('chosen').addClass('chosed');
		}
		if(typ!='基本数字'){
			sTc.css('background-image',grad(RandomCombinA(H5Color('dark,red,black,crimson,maroon,firebrick,deep,midnight'),1)[0]));
		}
	});
});