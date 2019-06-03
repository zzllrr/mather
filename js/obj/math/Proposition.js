/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

var Prop={//命题 本质上是dom（html）
	build:{
		
	},
	wrap:function(op,t){//操作符加壳
		var o,os,opr='∨∧↓↑↔↮→↛',OPR='disj conj ndisj nconj equi nequi impl nimpl',Opr=opr.split(''),oprs=ZLR(OPR);
		if(/[a-z]/.test(op)){
			os=op;
			o=opr[oprs.indexOf(os)]
		}else{
			o=op;
			os=oprs[opr.indexOf(o)]
		}
		return DCtv('opr '+os+'" data-opr="'+o+'" data-oprs="'+os,t)
	},
	fromStr:function(s, typ){//数学表达式（字符串）→html   typ:	set指定集合运算形式的公式
		if(typ=='set' || /[∩∪∅U]/g.test(s)){
			var v=s.replace(/-/g,'∧¬').replace(/[∩∪∅U⊕⊗]/g,function(s){return '∧∨FT↮↔'['∩∪∅U⊕⊗'.indexOf(s)]})
		}else if(typ=='bool' || /[⋅\+01']/g.test(s)){
			var v=s.replace(/[a-z]{2,}/ig,function(t){return t.split('').join('∧')}).replace(/([a-z\)])\(/ig,'$1∧(')
					.replace(/([a-z])\'/ig,'¬$1').replace(/\(([^\(\)]*\([^\(\)]+\)[^\(\)]*)*\)\'/ig,function(t){return '¬'+t.substr(0,t.length-1)})
					.replace(/-/g,'∧¬').replace(/[⋅\+01⊕⊗]/g,function(s){return '∧∨FT↮↔'['⋅+01⊕⊗'.indexOf(s)]})

		}else{
			var	v=s.replace(/​/g,'').replace(/\s/g,'').replace(/〉/g,'>').replace(/〈/g,'<')
				.replace(/‐/g,'-').replace(/(←→)|(<-+>)|⊗/g,'↔').replace(/⊕/g,'↮').replace(/-+>/g,'→')
				.replace(/[┐┒┓-﹁]/g,'¬').replace(/[⋀Λ⋂∩\*\^]/g,'∧').replace(/[⋁⋃∪\+]/g,'∨')
				.replace(/[\[（﹙〔]/g,'(').replace(/[\]）﹚〕]/g,')');
			if(/[a-u]|[w-z]/.test(v) && /V/.test(v)){
				v=v.replace(/V/g,'∨')
			}
		}
//console.log(v);
		var E=('('+v+')').replace(/([A-Z])/ig,DCtv('var','$1')).replace(/0/g,DCtv('false')).replace(/1/g,DCtv('true'));
		while(/¬</.test(E)){
			E=E.replace(/¬(<[^/]+\/div>)/g,DCtv('neg','$1'));
		}
//console.log(E);
		while(/\(/.test(E)){
			E=E.replace(/¬*\([^\(\)]+\)/g, function(t){
				var neg=/^¬/.test(t), s=t.replace(/^¬*\(|\)$/g,''), T, o=$('<div>'+s+dc), chd='';
				o.children().each(function(){
					chd+=this.outerHTML;
				});
				o.children().remove();
				o=o.text();
//console.log(o);
				if(o){
					o=o[0];
//console.log(o);
					T=Prop.wrap(o,chd);
				}else{
					T=s
				}
//console.log(T);
				if(neg){
					for(var i=0;i<t.replace(/[^¬]+.*$/,'').length;i++){
						T=DCtv('neg',T)
					}
				}
//console.log(T);
				return T
			});
		}
//console.log(E);
		return E
	},

	toStr:function(d, typ, direct){//html→数学表达式（字符串）	set指定返回集合运算形式的公式 direct直接字符串替换，无需dom
		var t=(''+Math.random()).substr(-5);//Time.now5()+(''+Math.random()).substr(-5);
		if(!direct){
			$('#dom').append(DCtv('dom" id="d'+t,typeof d == 'string'?d:$(d).html()));
			var D=$('#d'+t), ds=D.children(), end=false, endn=0;
	//console.log('#d'+t,ds.length);
			while(!end && endn<100){
				ds.each(function(){
					var d=$(this);
					if(d.is('.neg')){
						d.replaceWith('¬'+d.html());
					}else if(d.is('.opr')){
						d.children().slice(0,d.children().length-1).after(d.attr('data-opr'));
						d.replaceWith('('+d.html()+')');
					}else if(d.is('.var')){
						d.replaceWith(d.text())
					}else if(d.is('.false,.true')){
						d.replaceWith(d.attr('class').toUpperCase())
					}
				});
				ds=D.children();
				end=!ds.length;
				endn++;
			}
	//console.log($('#d'+t).html(),ds.length);
			var s=D.text().replace(/^\((.+)\)$/,'$1');
			D.remove();
		}else{
			var s=d
		}
//console.log(D.html(),s);

		if(typ=='set'){//命题→集合运算
			s=s.replace(/∧¬/g,'-').replace(/[∧∨FT↮↔]/g,function(s){return '∩∪∅U⊕⊗'['∧∨FT↮↔'.indexOf(s)]})
		}
		if(typ=='bool'){//命题→布尔代数
			s=s.replace(/¬([a-z])/ig,'$1\'').replace(/∧¬/g,'-').replace(/[∧∨FT↮↔]/g,function(s){return '⋅+01⊕⊗'['∧∨FT↮↔'.indexOf(s)]}).replace(/⋅/g,'')
		}

		return s;
	},

	opr1:function(op,d){//一元运算
		var D=$(d),h=D[0].outerHTML;
		if(op=='¬'){//反命题
			if(D.is('.true')){
				h=h.replace(/true/,'false');
			}else if(D.is('.false')){
				h=h.replace(/false/,'true');
			}else if(D.is('.neg')){
				h=D.html();
			}else{
				h=DCtv('neg',h);
			}
		}
		if(op=='偶'){//对偶 
					//合取 Conjunctive 析取 Disjunctive 蕴含 Implication 等价 Equivalence
			var t=Time.now5()+(''+Math.random()).substr(-5);$('#dom').append(DCtv('dom" id="d'+t,typeof d == 'string'?d:$(d)[0].outerHTML));
			var D=$('#d'+t);
	//T ←→ F
			D.find('.true').toggleClass('true false');
	//∨ ←→ ∧
	//↑ ←→ ↓
	//p↔q ⇒ p↮q ⇔ ¬(p→q)
	//p→q ⇒ q↛p ⇔ ¬(q→p)
			var d1,d2,oprs=ZLR('disj conj ndisj nconj equi nequi impl nimpl');
			for(var i=0;i<4;i++){
				var m=oprs[i*2],n=oprs[i*2+1];
				d1=D.find('.'+m);
				d2=D.find('.'+n);
				d1.each(function(){
					var me=$(this),h=me.html();
					if(m=='impl'){
						var chd=me.children();
						h=chd[1].outerHTML+chd[0].outerHTML;
					}
					me.replaceWith(Prop.wrap(n,h))
				});
				d2.each(function(){
					var me=$(this),h=me.html();
					if(n=='impl'){
						var chd=me.children();
						h=chd[1].outerHTML+chd[0].outerHTML;
					}
					me.replaceWith(Prop.wrap(m,h))
				});
			}
			h=D.html();
			D.remove();
		}
		if(op=='简'){//最简范式
			
		}
		if(op=='主'){//主析取、合取范式
			
		}
		if(op=='拷'){

		}

		return h
	},

	opr2:function(op,A,B){//二元运算
		var C=[],m=A.length,n=B.length,Cs=[], ar=arguments, arl=ar.length;C.t='Set';

		if(op=='∧'){//合取
			if(D.is('.true')){
				h=h.replace(/true/,'false');
			}else if(D.is('.false')){
				h=h.replace(/false/,'true');
			}else if(D.is('.neg')){
				h=D.html();
			}else{
				h=DCtv('neg',h);
			}
		}
		if(op=='∨'){//析取
			if(D.is('.true')){
				h=h.replace(/true/,'false');
			}else if(D.is('.false')){
				h=h.replace(/false/,'true');
			}else if(D.is('.neg')){
				h=D.html();
			}else{
				h=DCtv('neg',h);
			}
		}
		return C
	}
};
