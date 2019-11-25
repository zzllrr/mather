/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

teaching['Assignment/Drill']=detail(gM('Random Number'),Table([i18(ZLR('Select Type Sign Digits Quantity Tool'))], Arrf(function(x){
    return [strchkbx0+'>',gM(x), '<label>+ '+strchkbx0+chked+'> <label>- '+strchkbx0+'>',
        num(1,1,20)+' ~ '+num(2,1,20), num(10,1,1000), strbtn+gM('Copy JS Code')+'" class=copyJS data-type="'+x+'" />'+' '+strbtn+gM('Copy Result')+'" class=copyResult data-type="'+x+'" />']
},['Integer','Fraction','Fraction Unit',
    'Propper Fraction','Impropper Fraction','Mixed Fraction',
    'Reducible Fraction','Irreducible Fraction',
    'Decimal','Pure Decimal'
])
 
,'TBrc')+gM('Number Operation')+Table([i18(ZLR('Operation Quantity Tool'))], Arrf(function(x){
    return ['<label>+ '+strchkbx0+chked+'> <label>- '+strchkbx0+'> <label>× '+strchkbx0+'> <label>÷ '+strchkbx0+'> <label>() '+strchkbx0+'>',
        num(10,1,1000), strbtn+gM('Copy JS Code')+'" class=copyJS data-type="'+x+'" />'+' '+strbtn+gM('Copy Result')+'" class=copyResult data-type="'+x+'" />']
},[1])
 
,'TBrc'))
;

$(function(){
    $('body').on('click','.copyJS, .copyResult',function(){

        var me=$(this), pa=me.parent(), 
            sn=pa.prev().prev().prev().find('input'),sn0=sn.eq(0).prop('checked'),sn1=sn.eq(1).prop('checked'),
            digi=pa.prev().prev().find('input'), 
            quan=+pa.prev().find('input').val()||1, tp=me.attr('data-type'), isJS=me.is('.copyJS'), t;

        if(tp=='Integer'){
            //t='{$Random(100)$}\/{$Random(100)$} $'+-×÷'[Random(4)-1]$ {$Random(100)$}\/{$Random(100)$}'

            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''); return s+(Random(10**d1-10**(d0-1))+10**(d0-1)-1)}, seqA(1,${quan}))`;
        }



        if(tp=='Fraction'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''); return s+frac(Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1,'')}, seqA(1,${quan}))`;
        }

        if(tp=='Fraction Unit'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''); return s+frac(1, Random(10**d1-10**(d0-1))+10**(d0-1)-1,'')}, seqA(1,${quan}))`;
        }

        if(tp=='Propper Fraction'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''), X=[Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1];if(X[1]<X[0]){X[1]=X[0]+X[2]} if(X[1]==X[0]){X[1]+=X[2]} return s+frac(X[0],X[1],'')}, seqA(1,${quan}))`;
        }



        if(tp=='Impropper Fraction'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''), X=[Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1];if(X[0]<X[1]){X[0]=X[1]+X[2]} return s+frac(X[0],X[1],'')}, seqA(1,${quan}))`;
        }

        if(tp=='Mixed Fraction'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''), X=[Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1]; return s+X[0]+frac(X[1],X[2],'')}, seqA(1,${quan}))`;
        }

        if(tp=='Reducible Fraction'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''), X=[Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(2)+1]; if(FracReduct(X)==X.slice(0,2).join('/')){X[0]*=X[2]; X[1]*=X[2];} return s+frac(X[0],X[1],'')}, seqA(1,${quan}))`;
        }

        if(tp=='Irreducible Fraction'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''), X=[Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1]; if(X[0]==X[1]){X[1]++} if(FracReduct(X)!=X.join('/')){X[0]++;X[1]++} return s+frac(X[0],X[1],'')}, seqA(1,${quan}))`;
        }


        if(tp=='Decimal'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''), X=[Random(10**d1-10**(d0-1))+10**(d0-1)-1,Random(10**d1-10**(d0-1))+10**(d0-1)-1]; return s+X.join('.')}, seqA(1,${quan}))`;
        }

        if(tp=='Pure Decimal'){
            t=`Arrf(function(){var d0=${digi.eq(0).val()}, d1=${digi.eq(1).val()}, s=${sn0 && sn1}?(Random(2)>1?'-':''):(${sn1}?'-':''); return s+'0.'+(Random(10**d1-10**(d0-1))+10**(d0-1)-1)}, seqA(1,${quan}))`;
        }



        
        if(!isJS){
            t=eval(t);
        }
        copy2clipboard(t);
    });

});