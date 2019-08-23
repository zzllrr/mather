/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

if(L.vrjslib){
    Arrf(function(x){
        $('head').append('<script src="'+VRlibjsTmp.replace('@',x).replace('@',VRlibjs[x]||x) +'"></script>')
    },ZLR(L.vrjslib));
}
$(function () {
	var o=H_o(),tp=o['type']||'HTML', t=L['vr'];
    setTimeout(function(){
        $('body').html(replaceNodeInner(t,'MD', md2html));
    },5000)

});
