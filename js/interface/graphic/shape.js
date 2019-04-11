/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

tooltip['shape']=['【基本形状】shape(id,type,content,attrs,style,translateA)',[
	detail('文本text【x y dx dy rotate】 路径文本textPath【d href pathid】',Arrf(sceg,
		["shape('','text','O','x=90 y=112 rotate=20')",
		"shape('','textPath','路径文本','d=\"M0 0 L12 12\" pathid=path1')"
		]).join(br)),

sceg("shape('test','ellipse','','rx=40 ry=30 cx=60 cy=50 fill=red')"),
		'圆circle【r cx cy】 椭圆ellipse【rx ry cx cy】',
		'_有向椭圆circle|ellipse[01逆顺时针][旋转度数][lrbt相对方向] 在关系type中使用',
		'矩形rect【x y width height rx ry [cx] [cy]】 _正方形Square【<del>height</del>】',
		'线段line【x1 y1 x2 y2 end mid start】 折线polyline【points】',
		'_横竖折线lineHV【hv横竖位移序列 r拐角半径】',

sceg("shape('test','lineHV','','hv=V20H15V30 r=4')"),
		'_弧arc【x1 y1 x2 y2 rx ry m[Major1|minor0] c[↻1|↺0] deg z end mid start】',
		'_半圆Arc【x1 y1 x2 y2 c[clockwise:↻1|↺0] z是否闭合 end mid start】',
		'多边形polygon【points】 _正多边形Polygon【r cx cy width a n】',

sceg("shape('test','Polygon','','cx=150 cy=200 width=50 n=9 fill=green')"),
		'路径path【d=M起点 L H V A C S Q T Z闭合】L线段x,y H水平x V垂直y',
		'A弧 rx,ry,deg,[01小大弧],[01逆顺时针],x,y',
		'C三次贝塞尔 x1 y1, x2 y2, x y S特殊三次 x2 y2, x y',
		'Q二次贝塞尔 x1 y1, x y T特殊二次 x y',
		'组合g',
		'【end尾 mid中 start首 ∧△◇□○▲◆■●】 v {trig diamond square circle}×{Hollow Solid}'

].join(br)].join(br);

