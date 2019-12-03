/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

teaching['Assignment/Drill']=detail(gM('Random Number'),Table([[strchkbx0+'class=selAll title="'+gM('Select All')+'" />'].concat(gM(ZLR('Type Sign Digits Quantity Tool')))], Arrf(function(x,i){
    return [strchkbx0+'data-type="'+x+'"'+(i?'':chked)+' class=selNumTyp>',gM(x), '<label>+ '+strchkbx0+chked+'> <label>- '+strchkbx0+'>',
        num(1,1,20)+' ~ '+num(2,1,20), num(10,1,1000), '<label>LaTeX'+strchkbx0+' /></label>'+strbtn+gM('Copy JS Code')+'" class=copyJS data-type="'+x+'" />'+' '+strbtn+gM('Copy Result')+'" class=copyResult data-type="'+x+'" />']
},['Integer','Fraction','Fraction Unit',
    'Propper Fraction','Impropper Fraction','Mixed Fraction',
    'Reducible Fraction','Irreducible Fraction',
    'Decimal','Pure Decimal'
])
 
,'TBrc" id="numberType')+gM('Number Operation')+Table([i18(ZLR('Operation Layers Quantity Tool'))], Arrf(function(x){
    return [zlrA3('<label>',['+','-','×','÷'],' '+strchkbx0+chked+'></label>').join(''),
    num(1,1,20)+' ~ '+num(2,1,20),num(10,1,1000), 
    strbtn+gM('Copy JS Code')+'" class=copyJS data-type="'+x+'" />'+' '+
    strbtn+gM('Copy Result')+'" class=copyResult data-type="'+x+'" />']
},['Opr4'])
 
,'TBrc')+gM('Matrix')+Table([i18(ZLR('RowsColumns Quantity Tool'))], Arrf(function(x){
    return [
    num(3,2,2000)+' ~ '+num(3,2,2000),num(10,1,1000), 
    '<label>LaTeX'+strchkbx0+' /></label>'+
    strbtn+gM('Copy JS Code')+'" class=copyJS data-type="'+x+'" />'+' '+
    strbtn+gM('Copy Result')+'" class=copyResult data-type="'+x+'" />']
},['Mtrx'])
 
,'TBrc'))+
detail(gM('Random Character'),Table([[strchkbx0+'class=selAll title="'+gM('Select All')+'" />'].concat(gM(ZLR('Type Sign Letters Quantity Tool')))], Arrf(function(x,i){
    return [strchkbx0+'data-type="'+x+'"'+(i?'':chked)+' class=selNumTyp>',gM(x), '<label>+ '+strchkbx0+chked+'> <label>- '+strchkbx0+'>',
        num(1,1,20)+' ~ '+num(2,1,20), num(10,1,1000), '<label>LaTeX'+strchkbx0+' /></label>'+strbtn+gM('Copy JS Code')+'" class=copyJS data-type="char'+x+'" />'+' '+strbtn+gM('Copy Result')+'" class=copyResult data-type="char'+x+'" />']
},['Integer','Fraction','Fraction Unit'
])
 
,'TBrc" id="characterType')+gM('Number Operation')+Table([i18(ZLR('Operation Layers Quantity Tool'))], Arrf(function(x){
    return [zlrA3('<label>',['+','-','×','÷'],' '+strchkbx0+chked+'></label>').join(''),
    num(1,1,20)+' ~ '+num(2,1,20),num(10,1,1000), 
    strbtn+gM('Copy JS Code')+'" class=copyJS data-type="char'+x+'" />'+' '+
    strbtn+gM('Copy Result')+'" class=copyResult data-type="char'+x+'" />']
},['Opr4'])
 
,'TBrc'))
;

$(function(){
    $('body').on('click','.copyJS, .copyResult',function(){

        var me=$(this), pa=me.parent(), nA=[], digiAA=[], signAA=[], islatex=me.prevAll('label').children().prop('checked'),
            sn=pa.prev().prev().prev().find('input'),sn0=sn.eq(0).prop('checked'),sn1=sn.eq(1).prop('checked'),
            digi=pa.prev().prev().find('input'), d0=digi.eq(0).val(), d1=digi.eq(1).val(),
            quan=+pa.prev().find('input').val()||1, tp=me.attr('data-type'), isJS=me.is('.copyJS'), t, isChar=/^char/.test(tp);
        
        tp=tp.replace(/^char/,'');

        $('#'+(isChar?'character':'number')+'Type tr:gt(0)').each(function(){
            var ip=$(this).find('input'), chk=ip.eq(0);
            if(chk.prop('checked')){
                nA.push(chk.attr('data-type'));
                digiAA.push([ip.filter(':number').eq(0).val(), ip.filter(':number').eq(1).val()]);
                signAA.push([+ip.eq(1).prop('checked'), +ip.eq(2).prop('checked')]);
            }
            
        });

        if(tp=='Mixed Fraction'){
            t=`Arrf(function(){return RandomNumber['${tp}']([${d0}, ${d1}], [${sn0},${sn1}],${islatex})}, seqA(1,${quan}))`;

        }else if(tp=='Opr4'){
            var oprs='';
            sn.each(function(i){
                if($(this).prop('checked')){
                    oprs+='+-×÷'[i]
                }
            });

            t=`Arrf(function(){return Random${isChar?'Character':'Number'}['${tp}'](${jSoff(digiAA)}, ${jSoff(signAA)},${isChar?'null,':''} ${jSoff(nA)},[${d0}, ${d1}], '${oprs}').toStr4(1)}, seqA(1,${quan})).join('='+kbr2)`;

        }else if(tp=='Mtrx'){

            t=`Arrf(function(){return ${islatex?'zmtrx':'jSoff'}(Arrf(function(){return Arrf(function(){return RandomNumber['randN'](${jSoff(digiAA)}, ${jSoff(signAA)}, ${jSoff(nA)},${islatex})}, seqA(1,${d1}))}, seqA(1,${d0})))}, seqA(1,${quan}))`;

        }else{
            t=`Arrf(function(){return Mfn.fromStr(Random${isChar?'Character':'Number'}['${tp}']([${d0}, ${d1}], [${sn0},${sn1}])).toStr(1)}, seqA(1,${quan}))`;

        }

        
        if(!isJS){
            t=eval(t);
        }
        copy2clipboard(t);
    }).on('click','.selAll',function(){
        $(this).parents('table').find('.selNumTyp').prop('checked',$(this).prop('checked'))

    })

});