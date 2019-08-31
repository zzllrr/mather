/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
    var o=H_o(),tp=(o['type']||'HTML').toUpperCase(), t=L['document'], s=o['src'],
    c=L.documentCSS||'', toc=L.documentTOC=='true', tf=function(x){
        if(toc && !/\[U?TOC\]/.test(x) && /(^|\n)#+ /.test(x)){
            return '[TOC]\n'+x
        }
        return x
    };
    if(/^<MARKDOWN[\s\S]+<\/MARKDOWN>$/i.test(t)){
        t=t.replace(/^<MARKDOWN/i,'<MD>').replace(/^<\/MARKDOWN>$/i,'</MD>')
    }
    if(toc && !s && /^<MD[^>]*>[\s\S]+<\/MD>$/i.test(t)){

        t=t.split('>')[0]+'>'+tf(t.replace(/^<MD[^>]*>|<\/MD>$/ig,''))+'</MD>'

    }
    if(s){
        $.ajax({type:'get',url: s, success:function(d){
            var x=d;
            if(/MD|MARKDOWN/.test(tp) || /\.MD|\.MARKDOWN/i.test(s)){
                x=tf(x);
                oHTML(XML.wrapE('MD',x))
            }else{
                oHTML(x)
            }
        }, error:function(){oHTML(t)}
        })
    }else if(t){
        oHTML(t);

    }

});
