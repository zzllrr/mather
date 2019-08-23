/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
	var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), t=L['document'], s=o['src'];

    if(s){
        $.ajax({type:'get',url: s, success:function(x){
            if(/MD|MARKDOWN/.test(tp) || /\.MD|\.MARKDOWN/i.test(s)){
                oHTML(XML.wrapE('MD',x))
            }else{
                oHTML(x)
            }
        }, error:function(){oHTML(t)}
        })
    }else{
        oHTML(t);

    }

});
