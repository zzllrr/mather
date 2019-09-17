/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

var showTool = [
    'IL LaTeX MD HTML',
    'D2 D3 Canvas SVG Echarts Zdog',
    'JS I18 YAML'
];
shows = {
    index: ZLR('Document Slide Speech Sound Music Image Video 3D VR AR'),
    tool: {
        'Document': showTool,
        'Slide': ['Slide section'].concat(showTool),
        'Speech': [],
        'Sound': [],
        'Music': [],
        '3D': ['D3 D2 Zdog Canvas SVG Echarts'],
        'Image': [],
        'Video': [],
        'VR': ['VR a-scene'],
        'AR': ['AR a-scene'],

    },
    opt: {
        'Document': [gM('Style') + '<textarea id=documentCSS tip="CSS"></textarea>',
                XML.wrapE('label', gM('Display TOC') + strchkbx0 + 'id=documentTOC' + chked + ' />')
        ],
        'Slide': [gM('Head')+'<textarea id=slidehead tip="'+gM('input')+' HTML"></textarea>',
                XML.wrapE('label',itv('','swap_vertical_circle')+gM('Vertical')+
                    '<input type=checkbox id=slideSwapV />'),
                gM('Foot')+'<textarea id=slidefoot tip="'+gM('input')+' HTML"></textarea>'
        ],
        'Speech': zlrA('<input type=text class=btntxt readonly value="',[
                gM('Engine')+'" /><select id=audioEngine data-d=0>'+Options([0,1,2,3,4],['Baidu','Sogou','QQ','Bing','Youdao']).join('')+'</select>',
                gM('Language')+'" /><select id=audioLanguage data-d=0>'+Options([0,1,2,3,4],['zh-CN','zh-HK','zh-TW','en-US','en-GB']).join('')+'</select>',
                gM('Speed')+'" />'+num('6" id=audioSpeed data-d=6 class="btnnum',0,9),
                gM('Pitch')+'" />'+num('5" id=audioPitch data-d=5 class="btnnum',0,9),
                gM('Person')+'" />'+num('0" id=audioPerson data-d=0 class="btnnum',0,4),
        ]),
        'Sound': [],
        'Music': [],
        '3D': [],
        'Image': [],
        'Video': [],
        'VR': [itv('','library_books')+gM('JS Library')+': '].concat(
            Arrf(function(x){return XML.wrapE('label',strchkbx0+'class=jslib'+((L.vrjslib||'').indexOf(x)>-1?chked:'')+' data-lib="'+x+'" /> '+x)}, VRlib)
        ),
        'AR': [],
    }

};


function showThen(T) {
    var t = T.toLowerCase();

    $('#showGround .ground1').html(
        '<textarea class="editorText show' + T + '" placeholder="' + gM('showEditip') + '" tip="Input Command">'+(L[t]||'')+'</textarea>' +
        sci(itv('navHide', 'keyboard_arrow_up') + itv('launch" tip=Launch hotkey="Ctrl + Shift + Enter', 'launch')
        + br +
        itvc('" hotkey="Ctrl + E') +itv('downTxt" tip="Download TXT File', 'file_download'))+
        DCtv('inblk', Arrf(function (i) { return Arrf(Melef, ZLR(i)).join('') }, shows.tool[T]).join(br)) +

        detail('<input type="file" id=' + T + 
            'File accept=".md, text/*, image/*" multiple="multiple" />' +
            //accept="audio/*" capture="microphone" 
            strbtn + gM('Play') + '" class=play id=' + T + 'Play hidden />' +
            //
            strbtn + gM('QRcode') + ' ↑" class=qrScan tip="Scan QRcode" />' +
            strbtn + gM('QRcode') + ' ↓" class=qrGen tip="Generate Text QRcode" />',

            shows.opt[T].join(br),
            '','class='+T + 'Tool'
        )
    );

    var sT='#showGround .'+T+'Tool';
    $(sT).find('textarea, select, :number').filter('[id]').each(function(){
        $(this).val(L[this.id]||$(this).attr('data-d')||'')
    });
    $(sT+' :checkbox[id]').each(function(){
        $(this).prop(L[this.id]=='true')
    });


    $(sT+' :button[id]').on('click', function () {
        var TXA = $('#showGround .editorText'), s = TXA.val(), st = s.trim(), ish=/^https?.+$/.test(st),
         me = $(this), Id = me.attr('id'), u,o={};
         
    
        if(/.+Play$/.test(Id)){
            Id=Id.replace(/Play$/,'');
            var isImage=Id=='Image';
            if(isImage){
                Id='Slide';
                o.type='image'
            }

            if(ish){
                o.src=st
            }
            
            var id=Id.toLowerCase();
            L[id]=s;

            if(Id=='Slide'){
                var sv=$('#slideSwapV').prop('checked');
                if(sv && ish){
                    o.swap='v';
                }
            }

            u=H_o(id+'.html',o);
 
            $('#go').attr('data-url',u);
            open(u);
    
        }


/*
            if(id=='audioEngine'){
            */
                /*
                if(v=='2' && !L.audioEngine2TK){
                    L.audioEngine2TK='';
                    me.parent().parent().find('summary').html('<p>需要guid值：</p><p><input type=text id=audioEngine2TK></p><p>才可使用腾讯语音</p>'+detail('请打开'+href(fanyi.uA[2],'腾讯翻译君'),'<p>在F12 Console控制台中输入</p><pre>$.cookie("fy_guid")</pre><p>并回车，然后复制结果</p><p>然后返回到此页面粘贴guid值</p>'));
                    $('#audioEngine2TK').on('change keyup',function(){
                        L.audioEngine2TK=$(this).val();
                    });
                }else{
                    me.parent().parent().find('summary').empty();
                }
                */
/*
                if(Math.abs(+Time.now5().substr(0,2)-(+L[id+v]||0))>2){
                    $.ajax({type:'get', url:fanyi.uA[+v], success:function(){ L[id+v] = Time.now5().substr(0,2) }});
                    
                }
            }
            */

    
 
    });
    $(sT+' .btntxt').on('click', function(){
        var me=$(this), nx=me.next(), d=nx.attr('data-d');//data-default
        nx.val(d);
        L[nx.attr('id')]=d;

    });
    $(sT+' :checkbox[id]').on('click', function(){
        var me=$(this), c=me.prop('checked');
        L[this.id]=c;

    });
    $(sT+' .jslib').on('click', function(){
        var j=[];$('.jslib:checked').each(function(){j.push($(this).attr('data-lib'))});
        L[t+'jslib']=j.join(' ');

    });
    $(sT+' :number[id],select[id],textarea[id]').on('change', function () {
        var me=$(this), id=me.attr('id'), v = me.val();
        L[id]=v;


    });
    $(sT+' :file').on('change',function () {
        var v = $(this).val();
        if (v) {
            var files = this.files, fl = files.length;
            for (var i = 0; i < fl; i++) {
                var f = files[i], s = f.size, ext = f.type.replace(/text[/]/, ''), name = f.name;

                //consolelog(f);
                if (/^text[/]/.test(f.type) || !ext) {
                    if (!ext && /\..+/.test(name)) {
                        ext = name.replace(/.+\./, '').toUpperCase()
                    }
                    if (!s) { s = '?KB' } else {
                        // s = sizeKB(s)
                    }

                    var g=function(){

                        var reader = new FileReader();
                        reader.onload = function (e) {
                            //var txt = this.result;
                            var txt = e.target.result;
                            //consolelog('txt', txt);
                            if (/MD|MARKDOWN/.test(ext)) {
                                txt = XML.wrapE('MD', txt)
                            }
                            textareaAdd(txt, '#showGround .ground1 .editorText', 1,-1);
                        };
                        //reader.readAsDataURL(f);
                        reader.readAsText(f);
                    };
                    g();


                }
            }
        }
    });



}
