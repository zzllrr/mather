/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
	var o=H_o(),tp=o['type']||'HTML', t=L['vr'];

    $('#oHTML').html(replaceNodeInner(t,'MD', md2html));

});
