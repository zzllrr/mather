/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
if(L.arjslib){
    Arrf(function(x){
        $('head').append(referf(unpkg(x,(ARlibjs[x]||x)+'.min')))
    },ZLR(L.arjslib));
}


$(function () {
    var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), t=L['ar'], s=o['src'];
    if(s){
        $.ajax({type:'get',url: s, success:function(x){
            oHTML(x,1,'body')
            }, error:function(){
                setTimeout(function(){
                    oHTML(t,1,'body');
                },5000)
            }
        })
    }else if(t){
        setTimeout(function(){
            oHTML(t,1,'body');
        },5000)

    }
    

});
