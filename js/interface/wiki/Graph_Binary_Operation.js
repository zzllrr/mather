/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Graph Binary Operation']=Kx(


detail('图（二元运算）',Table([ZLR('名称 记法 定义 性质')],[

	ZLR('并\n____A∪B____结点集求并，边集求并'+
		'','','____'),
	ZLR('交\n____A⋂B____结点集求交，边集求交'+
		'','','____'),
	ZLR('差\n____A-B____结点集求差（但边集差涉及的结点保留着），边集求差'+
		'','','____'),
	ZLR('环和\n____A⊕B____A∪B - A⋂B'+
		'','','____'),
	
	ZLR('删边\n____A-\\{E_i\\}____删去某些边'+
		'','','____'),
	ZLR('删点\n____A-\\{V_i\\}____删去某些点（以及与这些点相关的边）'+
		'','','____'),


],'wiki').replace(/\n/g,br))

);