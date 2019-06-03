/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */



showThen['Video']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText placeholder="'+gM('input your Audio/Video URL')+'"></textarea>'+
		detail(SCtv('VideoTool','<input type="file" accept="video/*" capture="camcorder">'+strbtn+'Play" id=zRMediaPlay hidden />'+strbtn+gM('Play')+'" id=zRMediaPlay2 />'+strbtn+gM('Pause')+'" id=zRMediaPause hidden />'),'')
	);
	$('#showGround .ground2').html('<div id=mediaPlay2></div>');
	OH(
		`
		<div hidden id=zRmediaPlay>
			<div id=mediaParaA></div>
		</div>
		`
	);
	

 	$('#mediaParaA').on('click','p', function(e){
		var me=$(this);
		me.addClass('mediaPlay').siblings().removeClass('mediaPlay');
		var t=me.attr('data-src'),tp=me.attr('type');

		if(t){
			var s=t;

			if(L.mediaplaying=='0'){
				var mP=$('#mediaPlay').attr('data-i',me.index());
				if(!mP.is(tp)){
					mP.replaceWith('<'+tp+' controls="controls" id=mediaPlay></'+tp+'>');
				}
				$('#mediaPlay').attr('src',s)[0].play();
			}else{
				var aPi=$('#mediaPlay2').find('audio,video').eq(me.index()).addClass('mediaPlaying').removeAttr('style hidden');
				aPi.show().siblings().removeClass('mediaPlaying').hide().each(function(){
					this.pause();
				});
				if(aPi.attr('src')){
					aPi[0].play();
				}else{
					aPi.attr('src',s)[0].addEventListener('ended', function () {  
						var ap=$('#mediaParaA p'),i=$(this).index(), pi=ap.eq(i), i1=i+1<ap.length?i+1:0;
						pi.siblings().removeClass('mediaPlay');
						setTimeout(function(){
							ap.eq(i1).click();
						},200);
				    }, false);
					aPi[0].play();
				}
			}
			var h=0,margin=(me.outerHeight(true)-me.outerHeight())/2;
			
			me.prevAll().each(function(){
				h+=$(this).outerHeight(true);
			});
			h-=margin*me.prevAll().length;
			$('#mediaParaA').animate({scrollTop: Math.max(h-150,0)+'px'}, 'slow');
		}else{
			me.next().click()
		}
	});

	if($('#mediaPlay').length){
		$('#mediaPlay')[0].addEventListener('ended', function () {  
			var ap=$('#mediaParaA p'),i=+$('#mediaPlay').attr('data-i');
			setTimeout(function(){
				ap.eq((i+1)%ap.length).click();
			},500);
	    }, false);
		
	}


	$('#showGround .VideoTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(),me=$(this),id=me.attr('id');

		if(id=='zRMediaClear'){
			var aP=$('#mediaPlay'), a=aP[0];
			if(a.paused || a.ended){
				
			}else{
				a.pause();
			}
			T.val('');
			$('#mediaParaA,#mediaPlay2').empty();
			$('#zRmediaPlay,#zRMediaPause').hide();

		}

		if(id=='zRMediaPlay2'){

			L.mediaplaying=2;
			if(!s.trim()){
				return
			}
			var aP=$('#mediaPlay'),aP2=$('#mediaPlay2').show(), a=aP[0], sA=s.replace(/\n+\s*\n+/g,'\n').trim().split('\n'),l=sA.length,
			A=Arrf(function(t,j){var x=sA[j],x0=x,u=uriRe.test(x);if(!u){sA[j]=txt2audio(t,L.audioSpeed,L.audioPitch,L.audioPerson,L.audioLanguage,+L.audioEngine);x=sA[j]} 
					return '<p data-src="'+x+'" type='+(/mp4|mpeg|ogm|webm/i.test(x)?'video':'audio')+' title="'+fn1(x)+'">'+(u?XML.encode(fn1(x).replace(/.+\/|\?.+/g,''),1):XML.encode(x0,1))+'</p>'}, sA), A0=[];
			aP2.find('audio,video').each(function(){A0.push($(this).attr('src'))});
			var newP=sA.join('\n')!=A0.join('\n');


			if(!aP2.find('audio,video').length || newP){
				
				Arrf(function(t,j){
					var m=/mp4|mpeg|ogm|webm/i.test(sA[j])?'video':'audio';
					aP2.append('<'+m+' controls="controls" hidden></'+m+'>');
				}, sA);
			}
			aP2.show();
			if(newP){
				$('#mediaParaA').html(A.join(''));

				var t='';
				for(var i=0;i<l;i++){
					t=sA[i].trim();
					if(t){
						$('#mediaParaA p').eq(i).click();
						$('#zRMediaPause').fadeIn();
						$('#zRmediaPlay').show();
						break;
					}
				}
				
			}else{
				var ap=$('#mediaParaA p'), ap0=ap.filter('.mediaPlay').eq(0);
				if(ap0.length){
					a=aP2.find('audio,video').eq(ap0.index()).show();
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
		
		
		if(id=='zRMediaPause'){
			var aP=$('#mediaPlay'), a=aP[0];
			if(L.mediaplaying=='0'){
				if(a.paused){
					a.play();
				}else{
					$('audio[src],video[src]').each(function(){
						this.pause()
					});
					
					
					//a.pause();
				}
			}else if(L.mediaplaying=='2'){
				aP=$('#mediaPlay2 .mediaPlaying');
				if(aP.length){
					a=aP[0];
					if(a.paused){
						a.play();
					}else{
						$('audio[src],video[src]').each(function(){
							this.pause()
						});
						//a.pause();
					}
				}else{
					$('#mediaParaA p').eq(0).click();
				}
			}
		}
		
	});


	
};

