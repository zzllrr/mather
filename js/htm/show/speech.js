/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

$(function () {
    var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), t=L['speech'], s=o['src'];

    oHTML('<div id=audioPlay2>'+dc+
		'<div id=zRaudioPlay><div id=audioParaA>'+dc+dc+
		detail(SCtv('VoiceTool',
			strbtn+gM('Clear')+'" id=zRAudioClear />'+
			strbtn+'Play" id=zRAudioPlay class=play hidden />'+
			strbtn+gM('Play')+'" id=zRAudioPlay2 />'+
			strbtn+gM('Pause')+'" id=zRAudioPause hidden />'+
			'<audio controls="controls" id=audioPlay hidden></audio>'),
			
			'<textarea id=speechTxt></textarea>','','class="alignc"')

        
    ,1);

    var RemoveSrc=function(){
        if(L.audioplaying=='0'){
			$('#audioPlay').removeAttr('src');
		}else{
			$('#audioPlay2 audio[src]').removeAttr('src');
		}
    };




    $('#oHTML').on('click','#audioParaA p', function(e){
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
        

	}).on('click',':button',function(){
		var T=$('#speechTxt'),s=T.val(),me=$(this),id=me.attr('id');

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
    

	$('#audioPlay')[0].addEventListener('ended', function () {  
		var ap=$('#audioParaA p'),i=+$('#audioPlay').attr('data-i'), pi=ap.eq(i), pisemi=/[,，] *$/.test(pi.text());
		setTimeout(function(){
			ap.eq((i+1)%ap.length).click();
		},pisemi?200:500);
    }, false);


    
    if(s){
        $.ajax({type:'get',url: s, success:function(x){
                $('#speechTxt').val(x);
                $('#zRAudioPlay2').show().click();

            }, error:function(){
                
				$('#speechTxt').val(t);
				$('#zRAudioPlay2').show().click();
            }
        })
    }else if(t){
		$('#speechTxt').val(t);
		$('#zRAudioPlay2').show().click();
    }
});
