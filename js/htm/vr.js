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
    var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), t=L['vr'], s=o['src'];
    if(s){
        $.ajax({type:'get',url: s, success:function(x){
                oHTML(x,1,'body')
            }, error:function(){
                setTimeout(function(){
                    $('body').html(t);
                },5000)
            }
        })
    }else{
        setTimeout(function(){
            $('body').html(t);
        },5000)
    }


});
