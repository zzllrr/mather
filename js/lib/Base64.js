/*Base64 & UTF8 & XML [en/decode]
  http://about.me/zzllrr
  zzllrr@gmail
*/ 
var Base64 = { 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
	// public method for encoding
	encode : function (input) {
		var output = "",chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0; 
		input = Base64._utf8_encode(input); 
		while (i < input.length) { 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++); 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63; 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			} 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4); 
		} 
		return output;
	}, 
	// public method for decoding
	decode : function (input) {
		var output = "",chr1, chr2, chr3,enc1, enc2, enc3, enc4,i = 0; 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); 
		while (i < input.length) { 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++)); 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4; 
			output = output + String.fromCharCode(chr1); 
			if (enc3 != 64) {output = output + String.fromCharCode(chr2);}
			if (enc4 != 64) {output = output + String.fromCharCode(chr3);} 
		} 
		output = Base64._utf8_decode(output); 
		return output; 
	}, 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = ""; 
		for (var n = 0; n < string.length; n++) { 
			var c = string.charCodeAt(n); 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			} 
		} 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "",i = 0,c = c1 = c2 = 0; 
		while ( i < utftext.length ) { 
			c = utftext.charCodeAt(i); 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			} 
		} 
		return string;
	} 
}, UTF8={
	encode:function(t){
		return (t||'').replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"&#x$2;")});
	},
	decode:function(t){
		return unescape((t||'').replace(/&#x/g,'%u').replace(/\\u/g,'%u').replace(/;/g,''));
	}
}, XML={
	head:'<?xml version="1.0" encoding="UTF-8"?>',
	encode:function(t, no_nbsp){
		var x=(t||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&apos;').replace(/"/g,'&quot;');
		return no_nbsp?x:x.replace(/ /g,'&nbsp;');
	},
	decode:function(t){
		return (t||'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&');
	},
	wrapE:function(e,t){
		return '<'+e+'>'+(t===0?t:t||'')+'</'+e+'>';
	},
	wrap:function(t){
		return /[<&]/.test(t)?'<![CDATA['+t+']]>':t
	},
	unwrap:function(t){
		if(/^<!--\[CDATA\[/.test(t)){
			return t.replace(/^<!--\[CDATA\[|\]{2}&gt;$/g,'').replace('-->','>').replace(/\]{2}>$/,'');
		}else{
			//return (t||'').replace(/^<!\[CDATA\[|\]{2}>$/g,'');
			var u=t||'';
			u=u.replace(/\]{2}>\s*<!\[CDATA\[/,'\n');
			u=u.replace(/<!\[CDATA\[([\s\S]*)\]{2}>/,'$1');
			return u
		}
	}
}, ZML={
	encode:function(xml,noWrap){
		var str='',isStr=typeof(xml)=='string';
		if(isStr){
			var x=(new DOMParser()).parseFromString(XML.wrapE('xml',xml),"text/xml").documentElement.childNodes;
			//var x=$.parseXML(XML.wrapE('xml',xml)).childNodes[0].childNodes;
			for(i=0;i<(isStr?x.length:1);i++){
				var xi=x[i],nT=xi.nodeType;
				if(nT==1){
					str+=ZML._encode0(xi)+'+';
				}
			}
		}else{
			str=ZML._encode0(xml);
		}
		str=str.replace(/\+$/,'');
		if(noWrap){
			return str;
		}else{
			return XML.wrapE('zml',str);
		}
	},
	decode:function(t){
		var str=t.replace(/^<zml>|<\/zml>$/ig,'').replace(/"[^"]*"/g, function(v){return '"'+Base64.encode(v.replace(/"/g,'')).replace(/\+/g,'&plus;')+'"'});
		str=ZML._decode(str);
		return str.replace(/"[^"]*"/g, function(v){return Base64.decode(v.replace(/"/g,'').replace(/&plus;/g,'+'))}).replace(/&quot;/g,'"') //.replace(/<\/?zmltext>/g,'')
	},
	_encode:function(N,V,t){
		var v=V;
		if(/"/.test(v)){v=v.replace(/"/g,'&quot;')}
		if(/[\(\)\[\]\{\}\+]/.test(v)){v='"'+v+'"'}
		return t?'['+N+(v?'='+v:'')+']':N+(v?'{'+v+'}':'');
	},
	_encode0:function(xml){
		var xi=xml, nT=xi.nodeType, t=xi.nodeName, nV=(xi.nodeValue||'').trim(), attrs=xi.attributes, chds=xi.childNodes;
		if(nT==1){
			var n=0, chd='(';
			if(attrs){
				for(var j=0;j<attrs.length;j++){
					var a=attrs[j];
					t+=ZML._encode(a.nodeName,a.value,true);
				}
			}
			if(!nV && chds.length){
				for(j=0;j<chds.length;j++){
					if(chds[j].nodeType==1){
						chd+=ZML._encode0(chds[j],true)+'+';
					}
				}
			}
			if(chd.length>1){
				t+=chd.replace(/\+$/,')');
			}else if(chds.length){
				var c0=chds[0], nT=c0.nodeType, nV=c0.nodeValue;
				t=ZML._encode(t,nT==3?nV:(nT==4?XML.wrap(nV):''));
			}
		}
		return t
	},
	_decode:function(t){
		var str=t, regA=['}',')',']'];
		for(var k=0;k<regA.length;k++){
			try{
				while((new RegExp('\\'+regA[k])).test(str)){
					var strA0=str.split(/\([^\(\)]*\)/), i=(k==0?str.indexOf('{'):(k==2?str.lastIndexOf('['):strA0[0].length)),
						j=str.indexOf(regA[k],i+1),V=str.substr(i+1,j-i-1),str0=str.substr(0,i),strA=[str0,str.substr(j+1)], att=[],nN;
					if(k==2 && /=/.test(V) && !/=&quot;/.test(V)){V=V.replace(/=.+/,function(v){return '=&quot;'+v.substr(1)+'&quot;'})}
					while(/\]$/.test(str0)){
						var m=str0.lastIndexOf('['),n=str0.length,atti=str0.substr(m+1,n-m-2);
						if(/=/.test(atti) && !/=&quot;/.test(atti)){atti=atti.replace(/=.+/,function(v){return '=&quot;'+v.substr(1)+'&quot;'})}
						att.unshift(atti);
						str0=str0.substr(0,m);
					}
					nN=str0.split(/[>\(\+]/).slice(-1)[0];
					strA[0]=str0.substr(0,str0.length-nN.length)

					if(k==2){
						att.push(V);
						V='';
					}
					att.unshift(nN);

					str=strA.join('<'+att.join(' ')+'>'+V+'</'+nN+'>');
				}
			}catch(e){
				console.log('ZML err', e);
				return str.split('+').join('')
			}
		}

		var strA=str.split('+');
		for(var i=0;i<strA.length;i++){
			if(!/^</.test(strA[i])){
				var tA=strA[i].split(/^\w+/);
				strA[i]=XML.wrapE(strA[i].substr(0,strA[i].length-tA[1].length))+tA[1];
			}
			if(!/>$/.test(strA[i])){
				var tA=strA[i].split(/\w+$/);
				strA[i]=tA[0]+XML.wrapE(strA[i].substr(tA[0].length));
			}
		}
		str=strA.join('');
		return str
	}
};