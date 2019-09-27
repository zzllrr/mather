/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
    $('#splash').html(DCtv('rem3',gM('Snippet Editor')));


    var o=H_o(),tp=(o['type']||'LaTeX'), t=o['t']?fn1(o['t']):'', s=o['src'];
    
    setTimeout(function () {

      $('#input0Type').val(tp).change();
      if(t){
        $('#snippetNew').eq(0).click();
        $('#input0').val(t).mouseover()//.change();
      }
		  $('#splash').hide().nextAll().fadeIn();

	  }, 300);
});
