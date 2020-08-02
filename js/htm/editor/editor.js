/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
    $('#splash').html(DCtv('rem3',gM('Snippet Editor')));


    var o=H_o(),tp=(o['type']||'LaTeX'), t=o['t']?fn1(o['t']):'', s=o['src'], full=o['full'];
    
 
    setTimeout(function () {
      //$('#input0Type').val(tp);
      
      if(t){
        $('#snippetNew').eq(0).click();
        $('#input0').val(t)//.mouseover()//.change();
      }

		  $('#splash').hide().nextAll().fadeIn();

      if(full || !location.search){
        
      }else{
        $('#input0Preview,#iTextMain,#iContent').siblings().hide();
        $('#panel').hide();
        $('#input0Preview').removeAttr('contenteditable');

      }
	  }, 300);
});
