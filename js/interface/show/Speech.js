/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */



showThen['Speech']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText placeholder="'+gM('input your words and then click Play button')+'"></textarea>'+
		detail(SCtv('VoiceTool','<input type="file" accept="audio/*" capture="microphone">'+strbtn+gM('Clear')+'" id=zRAudioClear />'+strbtn+'Play" id=zRAudioPlay hidden />'+strbtn+gM('Play')+'" id=zRAudioPlay2 />'+strbtn+gM('Pause')+'" id=zRAudioPause hidden />'),
		`
			<div><input type=text class=btntxt value=Engine readonly data-d=0 /><select id=audioEngine></select></div>
			<div><input type=text class=btntxt value=Language readonly data-d=0 /><select id=audioLanguage></select></div>
			<div><input type=text class=btntxt value=Speed readonly data-d=6 /><input type=number id=audioSpeed min=0 max=9 class=btnnum /></div>
			<div><input type=text class=btntxt value=Pitch readonly data-d=5 /><input type=number id=audioPitch min=0 max=9 class=btnnum /></div>
			<div><input type=text class=btntxt value=Person readonly data-d=0 /><input type=number id=audioPerson min=0 max=4 class=btnnum /></div>
			<audio controls="controls" id=audioPlay hidden></audio>
		`
		)
	);
	$('#showGround .ground2').html('<div id=audioPlay2></div>');
	$('#showGround .tasks').html(
		`
		<div hidden id=zRaudioPlay>
			<div id=audioParaA></div>
		</div>
		`
	);
	L.audioSpeed=L.audioSpeed||6;
	L.audioPitch=L.audioPitch||5;
	L.audioPerson=L.audioPerson||0;
	L.audioLanguage=L.audioLanguage||0;
	L.audioEngine=L.audioEngine||0;
	$('#audioLanguage').html(Options([0,1,2,3,4],['zh-CN','zh-HK','zh-TW','en-US','en-GB']).join(''));
	$('#audioEngine').html(Options([0,1,2,3,4],['Baidu','Sogou','QQ','Bing','Youdao']).join(''));
	$('#showGround .btntxt').val(function(){return gM(this.value)});
	$('#showGround .btnnum,#showGround select').val(function(){return L[this.id]});
	
	
	$('#showGround .ground1 .btntxt').on('click', function(){
		var me=$(this), nx=me.next(), d=me.attr('data-d');//data-default
		nx.val(d);
		L[nx.attr('id')]=d;
		if(L.audioplaying=='0'){
			$('#audioPlay').removeAttr('src');
		}else{
			$('#audioPlay2 audio[src]').removeAttr('src');
		}
	});
	$('#showGround .ground1 .btnnum,#showGround .ground1 select').on('change',function(e){
		//e.stopPropagation();
		var me=$(this), v=me.val(),id=this.id;
		L[id]=v;
		if(L.audioplaying=='0'){
			$('#audioPlay').removeAttr('src');
		}else{
			$('#audioPlay2 audio[src]').removeAttr('src');
		}
		if(id=='audioEngine'){
		/*
			if(v=='2' && !L.audioEngine2TK){
				L.audioEngine2TK='';
				me.parent().parent().find('summary').html('<p>需要guid值：</p><p><input type=text id=audioEngine2TK></p><p>才可使用腾讯语音</p>'+detail('请打开'+href(fanyi.uA[2],'腾讯翻译君'),'<p>在F12 Console控制台中输入</p><pre>$.cookie("fy_guid")</pre><p>并回车，然后复制结果</p><p>然后返回到此页面粘贴guid值</p>'));
				$('#audioEngine2TK').on('change keyup',function(){
					L.audioEngine2TK=$(this).val();
				});
			}else{
				me.parent().parent().find('summary').empty();
			}
			*/
			if(Math.abs(+Time.now5().substr(0,2)-(+L[id+v]||0))>2){
				$.ajax({type:'get', url:fanyi.uA[+v], success:function(){ L[id+v] = Time.now5().substr(0,2) }});
				
			}
		}
	});



 	$('#audioParaA').on('click','p', function(e){
		var me=$(this);
		me.addClass('audioPlay').siblings().removeClass('audioPlay');
		var t=me.attr('data-src')||me.text().trim().replace(/[,，：:;；]$/,'').trim();

		if(t){
			var s=uriRe.test(t)?t:txt2audio(t,L.audioSpeed,L.audioPitch,L.audioPerson,L.audioLanguage,+L.audioEngine);
			if(!s){
				chrome.tts.speak(t);
			}
			if(L.audioplaying=='0'){
				$('#audioPlay').attr('data-i',me.index()).attr('src',s)[0].play();
			}else{
				var aPi=$('#audioPlay2 audio').eq(me.index()).addClass('audioPlaying').removeAttr('style hidden');
				aPi.show().siblings().removeClass('audioPlaying').hide().each(function(){
					this.pause();
				});
				if(aPi.attr('src')){
					aPi[0].play();
				}else{
					aPi.attr('src',s)[0].addEventListener('ended',function(){
						var ap=$('#audioParaA p'),i=$(this).index(), pi=ap.eq(i), pisemi=/[,，] *$/.test(pi.text()), i1=i+1<ap.length?i+1:0;
						pi.siblings().removeClass('audioPlay');
						setTimeout(function(){
							ap.eq(i1).click();
						},pisemi?200:500);
				    }, false);
					aPi[0].play();
				}
			}
			var h=0,margin=(me.outerHeight(true)-me.outerHeight())/2;
			
			me.prevAll().each(function(){
				h+=$(this).outerHeight(true);
			});
			h-=margin*me.prevAll().length;
			$('#audioParaA').animate({scrollTop: Math.max(h-150,0)+'px'}, 'slow');
		}else{
			me.next().click()
		}
	});

	$('#audioPlay')[0].addEventListener('ended', function () {  
		var ap=$('#audioParaA p'),i=+$('#audioPlay').attr('data-i'), pi=ap.eq(i), pisemi=/[,，] *$/.test(pi.text());
		setTimeout(function(){
			ap.eq((i+1)%ap.length).click();
		},pisemi?200:500);
    }, false);



	
	$('#showGround .VoiceTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(),me=$(this),id=me.attr('id');

		if(id=='zRAudioClear'){
			var aP=$('#audioPlay'), a=aP[0];
			if(a.paused || a.ended){
				
			}else{
				a.pause();
			}
			T.val('');
			$('#audioParaA,#audioPlay2').empty();
			$('#zRaudioPlay,#zRAudioPause').hide();

		}

		if(id=='zRAudioPlay2'){

			L.audioplaying=2;
			var aP=$('#audioPlay'),aP2=$('#audioPlay2').show(), a=aP[0], sA=txt2A(s),l=sA.length,
			A=Arrf(function(t){return uriRe.test(t)?'<p data-src="'+t+'" title="'+fn1(t)+'">'+XML.encode(fn1(t).replace(/.+\/|\?.+/g,''),1)+'</p>':XML.wrapE('p',XML.encode(t,1))}, sA), A0=[];
			
			$('#audioParaA p').each(function(){A0.push($(this).attr('data-src')||$(this).text())});
			var newP=sA.join('\n')!=A0.join('\n');

		//	$('#audioPlay').hide();
			if(!aP2.find('audio').length || newP){
				aP2.html(copyA('<audio controls="controls" hidden></audio>',l));
			}
			aP2.show();
			if(newP){
				$('#audioParaA').html(A.join(''));

				var t='';
				for(var i=0;i<l;i++){
					t=sA[i].trim();
					if(t){
						$('#audioParaA p').eq(i).click();
						$('#zRAudioPause').fadeIn();
						$('#zRaudioPlay').show();
						break;
					}
				}
				
			}else{
				var ap=$('#audioParaA p'), ap0=ap.filter('.audioPlay').eq(0);
				if(ap0.length){
					a=aP2.find('audio').eq(ap0.index()).show();
					if(a.attr('src')){
						a=a[0];
						if(a.paused){
							a.play();
						}else if(a.ended){
							ap.eq(i+1<l?i+1:0).click();
						}else{
							a.pause();
						}
					}else{
						ap0.click();
					}
				}else{
					ap.eq(0).click();
				}
			}

		}
		
		
		if(id=='zRAudioPause'){
			var aP=$('#audioPlay'), a=aP[0];
			if(L.audioplaying=='0'){
				if(a.paused){
					a.play();
				}else{
					$('audio[src]').each(function(){
						this.pause()
					});
					
					
					//a.pause();
				}
			}else if(L.audioplaying=='2'){
				aP=$('#audioPlay2 .audioPlaying');
				if(aP.length){
					a=aP[0];
					if(a.paused){
						a.play();
					}else{
						$('audio[src]').each(function(){
							this.pause()
						});
						//a.pause();
					}
				}else{
					$('#audioParaA p').eq(0).click();
				}
			}
		}
		
	});

	
	
};
