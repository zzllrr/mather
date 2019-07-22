/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

navhead['hotkey']=fieldseth(gM('Textarea'),
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

]),'class=rem13')+fieldseth(gM('Table'),

Table('',[
	[scHotk('Click'),gM('thtip')],
	[scHotk('Alt + Click'),gM('Collapse')],

]),'class=rem13')+fieldseth(gM('Help')+' | '+gM('Example'),

Table('',[
	[scHotk('Click'),gM('copy2input')],
	[scHotk('Shift + Click'),gM('Clear')+' & '+gM('copy2input')],


]),'class=rem13')+fieldseth('Markdown',

Table('',[
	[scHotk('Ctrl + B'),XML.wrapE('b',gM('Bold')),sceg('**ABC**')],
	[scHotk('Ctrl + I'),XML.wrapE('i',gM('Italic')),sceg('*ABC*')],
	[scHotk('Ctrl + U'),SCtv('underline',gM('Underline')),sceg('__ABC__')], 
	[scHotk('Ctrl + K'),SCtv('underline',gM('href')),sceg('['+gM('Title')+'](http://)')],

	[scHotk('Ctrl + Q'),gM('Blockquote'),sceg('> ABC')],
	[scHotk('Ctrl + Shift + Q'),gM('Code Blockquote'),sceg('``` ABC ```')],

]),'class=rem13')+fieldseth(gM('Graphic'),

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
	'','',
	scHotk('↓'),gM('Move Down')
	],
	
	[scHotk('Esc'),gM('Hide')+' | '+gM('Toggle'),
	'',
	'','',
	'',''
	],


]),'class=rem13');
