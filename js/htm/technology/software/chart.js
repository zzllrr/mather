/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

technology['Software/Charts']=Table([i18(ZLR('Name Type Summary'))],[
	[href(git('benfred/contour_plot'),i18('Contour')+' - Contour Plot'),'D3 Plugin','draw contour plots of 2D functions'],
	[href(Hs+'kisonecat.com/phase-plot/',i18('Phase')+' - Phase Plot'),'JS + GLSL','Plot complex functions '+href(git('kisonecat/phase-plot'),'Github')],
	[href(Hs+'observablehq.com',i18('Visualization Notebook')+' - Observable'),'JS + HTML','magic notebook for visualization '+href(Hs+'explorabl.es','Explorable Explanations')+' '+href(git('d3/d3/wiki/Gallery'),'D3 Gallery')],
	[href(Hs+'sketchfab.com',i18('3D Model')+' - Sketchfab'),'JS + HTML','publish, share and embed interactive 3D files'],
	[href(Hs+'start.sketchometry.org',i18('Sketch Geometry')+' - Sketchometry'),'JS + HTML','convert hand drawings into geometric constructions'],

	[href(Hs+'jsxgraph.org','JSXGraph'),'JS + CSS + HTML','interactive geometry, function plotting, charting, and data visualization '+href(Hs+('jsxgraph.org/wiki/index.php/Category:Examples'),'Examples')],
	[href(Hs+'geogebra.org',i18('Geometry & Algebra')+' - Geogebra(GGB)'),'JS + HTML',
		hrefA('geogebra.org',ZLR('Graphing Calculator CAS Geometry 3D Notes Classic Classic#Probability Classic#Spreadsheet')).concat(
		hrefA('geogebra.org',ZLR('Wiki Dev'),1)).join(' ')],

	[href(Hs+'desmos.com','Desmos'),'JS + HTML',
		hrefA('desmos.com',ZLR('Calculator Geometry FourFunction Scientific Accessibility Testing')).concat(
		hrefA('desmos.com',ZLR('Learn Teacher'),1)).concat(
		href(Hs+'desmos.com/api/v1.3/docs/index.html#document-collected-examples','Examples'),href(Hs+'desmos.com/api/','API')).join(' ')],

	[href(Hs+'draw.io','draw.io'),'JS + SVG','Create flow charts, process diagrams, org charts, UML diagrams, ER models, network diagrams'],

	[href(Hs+'demo.bpmn.io/s/start','bpmn.io'),'JS + SVG',hrefA('demo.bpmn.io/@@/new',ZLR('BPMN CMMN DMN')).join(' ')],

	[href(Hs+'paveldogreat.github.io/WebGL-Fluid-Simulation/','WebGL Fluid Simulation'),'JS + WebGL',href(git('PavelDoGreat/WebGL-Fluid-Simulation'),'Github')],

	[href(Hs+'naotu.baidu.com','Mindmap by baidu'),'JS + SVG',href(git('PavelDoGreat/WebGL-Fluid-Simulation'),'Github')],

],'TBrc');

