/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

teaching['Assignment/Drill']=detail(gM('Random Number'),Table([[strchkbx0+'title="'+gM('Select All')+'" />'].concat(gM(ZLR('Type Sign Digits Quantity Tool')))], Arrf(function(x,i){
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
    strbtn+gM('Copy JS Code')+'" class=copyJS data-type="'+x+'" />'+' '+
    strbtn+gM('Copy Result')+'" class=copyResult data-type="'+x+'" />']
},['Mtrx'])
 
,'TBrc'))
;

$(function(){
    $('body').on('click','.copyJS, .copyResult',function(){

        var me=$(this), pa=me.parent(), nA=[], digiAA=[], signAA=[],
            sn=pa.prev().prev().prev().find('input'),sn0=sn.eq(0).prop('checked'),sn1=sn.eq(1).prop('checked'),
            digi=pa.prev().prev().find('input'), d0=digi.eq(0).val(), d1=digi.eq(1).val(),
            quan=+pa.prev().find('input').val()||1, tp=me.attr('data-type'), isJS=me.is('.copyJS'), t;

        $('#numberType tr:gt(0)').each(function(){
            var ip=$(this).find('input'), chk=ip.eq(0);
            if(chk.prop('checked')){
                nA.push(chk.attr('data-type'));
                digiAA.push([ip.filter(':number').eq(0).val(), ip.filter(':number').eq(1).val()]);
                signAA.push([+ip.eq(1).prop('checked'), +ip.eq(2).prop('checked')]);
            }
            
        });

        if(tp=='Mixed Fraction'){
            t=`Arrf(function(){return RandomNumber['${tp}']([${d0}, ${d1}], [${sn0},${sn1}])}, seqA(1,${quan}))`;

        }else if(tp=='Opr4'){
            var oprs='';
            sn.each(function(i){
                if($(this).prop('checked')){
                    oprs+='+-×÷'[i]
                }
            });

            t=`Arrf(function(){return RandomNumber['${tp}'](${jSoff(digiAA)}, ${jSoff(signAA)}, ${jSoff(nA)},[${d0}, ${d1}], '${oprs}').toStr4()}, seqA(1,${quan}))`;

        }else if(tp=='Mtrx'){

            t=`Arrf(function(){return jSoff(Arrf(function(){return Arrf(function(){return RandomNumber['randN'](${jSoff(digiAA)}, ${jSoff(signAA)}, ${jSoff(nA)})}, seqA(1,${d1}))}, seqA(1,${d0})))}, seqA(1,${quan}))`;

        }else{
            t=`Arrf(function(){return Mfn.fromStr(RandomNumber['${tp}']([${d0}, ${d1}], [${sn0},${sn1}])).toStr(1)}, seqA(1,${quan}))`;

        }

        
        if(!isJS){
            t=eval(t);
        }
        copy2clipboard(t);
    }).on('click','#numberType :checkbox:eq(0)',function(){
        $('#numberType .selNumTyp').prop('checked',$(this).prop('checked'))
    });

});