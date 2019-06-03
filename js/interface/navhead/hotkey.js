/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

navhead['hotkey']='<h3>'+gM('Textarea')+'</h3>'+
Table('',[
	[
	scHotk('Tab'),gM('Increase Indent'),
	scHotk('Shift + Tab'),gM('Decrease Indent'),	

	scHotk('Ctrl/⌘ + A'),gM('Select All'),
	scHotk('Ctrl/⌘ + X'),gM('Cut'),
	
	],
	[
	scHotk('Ctrl/⌘ + C'),gM('Copy'),
	scHotk('Ctrl/⌘ + V'),gM('Paste'),

	scHotk('Ctrl/⌘ + Y'),gM('Redo'),
	scHotk('Ctrl/⌘ + Z'),gM('Undo'),
	
	],
	[
	scHotk('Ctrl + Enter'),'GO',

	scHotk('Shift + Enter'),gM('Display'),

	scHotk('Ctrl + E'),gM('Clear'),
	scHotk('Ctrl/⌘ + S'),gM('Save'),
	],

])+'<h3>MarkDown</h3>'+

Table('',[
	[scHotk('Ctrl + B'),XML.wrapE('b',gM('Bold')),sceg('**ABC**')],
	[scHotk('Ctrl + I'),XML.wrapE('i',gM('Italic')),sceg('*ABC*')],
	[scHotk('Ctrl + U'),SCtv('underline',gM('Underline')),sceg('__ABC__')], 
	[scHotk('Ctrl + K'),SCtv('underline',gM('href')),sceg('['+gM('Title')+'](http://)')],

	[scHotk('Ctrl + Q'),gM('Blockquote'),sceg('> ABC')],
	[scHotk('Ctrl + Shift + Q'),gM('Code Blockquote'),sceg('``` ABC ```')],

])+'<h3>'+gM('SVG Gadget')+'</h3>'+

Table('',[
	[scHotk('Ctrl + C'),gM('Copy'),
	scHotk('P'),gM('Pointer'),
	scHotk('V'),gM('Layer Toggle'),
	scHotk('←'),gM('Move Left'),
	
	],
	
	
	[scHotk('Ctrl + V'),gM('Paste'),
	scHotk('A'),gM('Text'),
	scHotk('C'),gM('Crop'),
	scHotk('→'),gM('Move Right'),
	],
	
	[scHotk('D / Delete'),gM('Delete')+' | '+gM('Eraser'),
	scHotk('L'),gM('Line'),
	scHotk('N'),gM('Note'),
	scHotk('↑'),gM('Move Up'),
	],
	
	
	[scHotk('Shift + D / Delete'),gM('Delete All'),
	scHotk('R'),gM('Round Corner')+gM(' ')+gM('Rectangle'),
	scHotk('Esc'),gM('Toggle Gadget'),
	scHotk('↓'),gM('Move Down')
	],
	



]);
