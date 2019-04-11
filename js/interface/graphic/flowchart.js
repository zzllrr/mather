/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

tooltip['flowchart']=['流程图flowchart',
	sceg(['s=>start: s',
	'e=>end: e',
	'o1=>operation: o1',
	's1=>subroutine: s1',
	'c1=>condition: c1',
	'i1=>inputoutput: i1',
	'p1=>parallel: p1',
	's->o1->c1',
	'c1(yes)->i1->e',
	'c1(no)->p1',
	'p1(path1, bottom)->s1(right)->o1',
	'p1(path2, top)->o1',
	].join('&&'),20)+
	Arrf(sceg,[
	's=>start:>',
	's@>o1({"stroke":"Red"})',
	's@>o1({"stroke":"Red"})@>c1({"stroke":"Blue"})',
	'o1@>c1({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})',
	
	]).join(br)+br+
	'说明：使用&&连接多行命令'+br+
	'常用片段：'+
	Arrf(sceg2,[
	'->',
	'flowchart官网链接:>'+Hs+'flowchart.js.org[blank]',
	'$LaTeX公式用单层美元符号，JS代码用双层$',
	'$$kxo(1,\'-\')$$',

	]).join(br)
].join(br);

