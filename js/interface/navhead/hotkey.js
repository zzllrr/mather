/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

navhead['hotkey']=XML.wrapE('h1',gM('Hotkey'))+
	fieldseth(gM('Textarea'),

Table('',[
	[
		scHotk('Tab'),gM('Increase Indent'),
	],
	[
		scHotk('Shift + Tab'),gM('Decrease Indent'),
	],

	[
		scHotk('Ctrl/⌘ + A'),gM('Select All'),
	],
	[
		scHotk('Ctrl/⌘ + X'),gM('Cut'),
	],
	[
		scHotk('Ctrl/⌘ + C'),gM('Copy'),
	],
	[
		scHotk('Ctrl/⌘ + V'),gM('Paste'),
	],
	[
		scHotk('Ctrl/⌘ + Y'),gM('Redo'),
	],
	[
		scHotk('Ctrl/⌘ + Z'),gM('Undo'),
	],
	[
		scHotk('Ctrl + Enter'),'GO',
	],
	[
		scHotk('Shift + Enter'),gM('Display'),
	],
	[
		scHotk('Ctrl + E'),gM('Clear'),
	],
	[
		scHotk('Ctrl/⌘ + S'),gM('Save'),
	],

]))+fieldseth(gM('Table'),

Table('',[
	[scHotk('Click'),gM('thtip')],
	[scHotk('Alt + Click'),gM('Collapse')],

]))+fieldseth(gM('Help')+' | '+gM('Example'),

Table('',[
	[scHotk('Click'),gM('copy2input')],
	[scHotk('Shift + Click'),gM('Clear')+' & '+gM('copy2input')],


]))+fieldseth('Markdown',

Table('',[
	[scHotk('Ctrl + B'),XML.wrapE('b',gM('Bold')),sceg('**ABC**')],
	[scHotk('Ctrl + I'),XML.wrapE('i',gM('Italic')),sceg('*ABC*')],
	[scHotk('Ctrl + U'),SCtv('underline',gM('Underline')),sceg('__ABC__')], 
	[scHotk('Ctrl + K'),SCtv('underline',gM('href')),sceg('['+gM('Title')+'](http://)')],

	[scHotk('Ctrl + Q'),gM('Blockquote'),sceg('> ABC')],
	[scHotk('Ctrl + Shift + Q'),gM('Code Blockquote'),sceg('``` ABC ```')],

]))+fieldseth(gM('Graphic'),

Table('',[
	[
		scHotk('←'),gM('Move Left'),
	],
	[
		scHotk('→'),gM('Move Right'),
	],
	[
		scHotk('↑'),gM('Move Up'),
	],
	[
		scHotk('↓'),gM('Move Down'),
	],
	[	
		scHotk('Ctrl + C'),gM('Copy'),
	],
	[
		scHotk('Ctrl + V'),gM('Paste'),
	],
	

	
	[
		scHotk('Esc'),gM('Hide')+' | '+gM('Toggle'),
	],
	[
		scHotk('P'),gM('Pointer'),
	],

	[
		scHotk('A'),gM('Text'),
	],
	[
		scHotk('C'),gM('Crop'),
	],
	[
		scHotk('L'),gM('Line'),
	],
	[
		scHotk('N'),gM('Note'),
	],
	[
		scHotk('R'),gM('Round Corner')+gM(' ')+gM('Rectangle'),
	],
	[
		scHotk('V'),gM('Layer Toggle'),
	],
	[
		scHotk('D / Delete'),gM('Delete')+' | '+gM('Eraser'),
	],
	[
		scHotk('Shift + D / Delete'),gM('Delete All'),
	],
]));
