/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
    $('#splash').html(DCtv('rem3',gM('Snippet Editor')));


    var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), t=L['editor'], s=o['src'];
    
    setTimeout(function () {
		$('#splash').hide().nextAll().fadeIn();

	}, 300);
});
