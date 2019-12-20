/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

technology['Software/Charts']=detail(gM('Charts'),Table([i18(ZLR('Tool Type Summary'))],[

	[inhref('technology.html?q=Software/Math','Math Software List'),'Math',''],
	[href(Hs+'observablehq.com',i18('Visualization Notebook')+' - Observable'),'','magic notebook for visualization '+href(Hs+'explorabl.es','Explorable Explanations')+github('d3/d3/wiki/Gallery')],
	[href(H+'www.fooplot.com','Foo Plot'),'Web','在线画函数图像'],

	[href(Hs+'draw.io','draw.io'),'JS + SVG','Create flow charts, process diagrams, org charts, UML diagrams, ER models, network diagrams'],
	[href(Hs+'demo.bpmn.io/s/start','bpmn.io'),'JS + SVG',hrefA('demo.bpmn.io/@@/new',ZLR('BPMN CMMN DMN')).join(' ')],

	[href(Hs+'naotu.baidu.com','百度脑图'),'','Mindmap by baidu'],

	[href(Hs+'witeboard.com','WiteBoard'),'','Whiteboard, the same URL could be shared with synchronization'],

	[github('paveldogreat','WebGL-Fluid-Simulation','WebGL Fluid Simulation'),'JS + WebGL',github('PavelDoGreat/WebGL-Fluid-Simulation')],
	[href(H+'weavesilk.com','WeaveSilk'),'','Interactive Generative Art, doodle with music'],


	[href(Hs+'roughjs.com','Roughjs'),'','Create graphics with a hand-drawn, sketchy, appearance '+github('pshihn/rough')],
	[href(Hs+'graphviz.org','GraphViz'),'','Representing structural information as diagrams of abstract graphs and networks '+href(Hs+'sketchviz.com','SketchViz')+github('pshihn/rough')],
	[github('timqian/chart.xkcd'),'','xkcd styled chart lib'],
	[github('fabricjs/fabric.js'),'','Canvas Library, SVG-to-Canvas (& canvas-to-SVG) Parser '+href(H+'fabricjs.com/demos/','Demos')],
	[href(Hs+'sanddance.js.org/app/','Sand Dance'),'','Visually explore, understand, and present your data '+github('microsoft/SandDance')],

	[href(Hs+'p5js.org','p5'),'','the power of Processing times the reach of JavaScript '+ul([
		github('processing/p5.js'),
		github('processing/p5.js-sound'),
		href(Hs+'editor.p5js.org','Editor'),
		href(Hs+'p5js.org/examples/','Examples'),
		href(Hs+'processing.org/exhibition/','Exhibition'),
		href(Hs+'natureofcode.com/book/','Nature of Code(eBook)'),
		

	])],

	[href(Hs+'dbdiagram.io','dbDiagram'),'','输入并显示一个 ER 图, SQL语句'],

	[href(Hs+'charticulator.com/app/index.html','Charticulator'),'','Create Bespoke Chart Designs without Programming. '+href(Hs+'charticulator.com/gallery/index.html','Example')+github('Microsoft/charticulator')],
	[href(Hs+'infranodus.com/insight/datasciencegoog?stopwords=data+science','infraNodus'),'','Generate Insight using Text Network Analysis. Get a visual summary and discover the structural gaps in your knowledge'+github('noduslabs/infranodus')],
	[href(H+'canvas.apps.chrome','Canvas'),'','Make quick doodles, take notes, and express yourself with Canvas. Built into Chrome, Canvas saves your work automatically to your Google account.'],

	[href(Hs+'www.amcharts.com','amCharts'),'',ul([
		href(Hs+'pixelmap.amcharts.com/demos/','Pixel Map'),
		href(Hs+'live.amcharts.com','Online Chart Editor'),
		github('amcharts'),
	].concat(hrefA(
		Hs+'www.amcharts.com', ZLR('demos/ svg-maps/ visited_countries/ visited_states/ javascript-charts/ javascript-maps/ timeline-chart')
	)))],
],'TBrc'),1)+


detail(gM('Methodology'),Table([i18(ZLR('Name Type Summary'))],[

	[href(Hs+'datastori.es','Data Stories'),'','A podcast on data visualization with Enrico Bertini and Moritz Stefaner'],
	[href(H+'rojects.christianlaesser.com/100-data-stories/','100 Data Stories'),'','A small visual exploration of the episodes and guests of the Data Stories podcast by Christian Laesser.' + href(Hs+'www.christianlaesser.com','Christian Laesser')],

    [href(Hs+'mercator.tass.com','墨卡托投影介绍'),'','In the 16th century, Gerardus Mercator, a Flemish cartographer devised a new way of depicting the world on a flat plane. We set off to explore his map in order to illustrate his biggest blunders, unearth curious facts and explain the advantages that make this representation of the globe still relevant today'],

	[href(Hs+'informationisbeautiful.net','Information is Beautiful'),'',"Distilling the world's data, information & knowledge into beautiful infographics & visualizations"],


	[href(Hs+'public.tableau.com/views/TheTableauChartCatalog/TableauChartExamples','Tableau Chart Examples'),'','developed as a resource for the Tableau (Commercial) community for inspiration'],
],'TBrc'),1)+

detail(gM('Visualization & Author'),Table([i18(ZLR('Name Type Summary'))],[

	[href(H+'feltron.com','Feltron'),'','annual infographic reports, etc'],

	[href(H+'muyueh.com','李慕約'),'','we analyze data and develop efficient representations'],

],'TBrc'),1)+


detail('AR/VR/3D',Table([i18(ZLR('Name Type Summary'))],[

	[href(Hs+'sketchfab.com',i18('3D Model')+' - Sketchfab'),'3D','publish, share and embed interactive 3D files'],
	[href(Hs+'hightopo.com',i18('3D Model')+' - HighTopo图扑'),'工程','create cutting-edge 2D and 3D visualization '+href(H+'hightopo.com/demos/index.html','Examples')],

	[href(Hs+'arvr.google.com/blocks/','Blocks (Google)'),'','Create beautiful 3D models in no time'+ul(hrefA('poly.google.com',
		ZLR('blocks tiltbrush tours')).concat([href(Hs+'arvr.google.com/tourcreator/','Tour Creator')]))],

	[href(Hs+'www.x3dom.org','X3DOM'),'','Integrate 3D content seamlessly into your webpage - the scene is directly written into the HTML markup'+github('x3dom/x3dom')+href(Hs+'www.x3dom.org/examples/','Example')],
	

],'TBrc'),1)+


detail(gM('Geography')+' GIS',Table([i18(ZLR('Name Type Summary'))],[

	[href(Hs+'kepler.gl','kepler'),'','geospatial analysis tool for large-scale data sets '+github('keplergl/kepler.gl')],

	[href(Hs+'apps.mapbox.com/cartogram/','Cartogram'),'',href(Hs+'www.mapbox.com','by MapBox')+' '+href(Hs+'demos.mapbox.com/scrollytelling/','Scrolly Telling')],

	[href(Hs+'developers.arcgis.com/javascript/','ArcGIS'),'','通过交互式地图，将人员、位置和数据连接起来。'],



],'TBrc'),1)+




detail(gM('Reference'),Table([i18(ZLR('Name Type Summary'))],[

	[href(Hs+'bestofjs.org','Best of JS'),'Nav','Best of JavaScript is a project by Michael Rambeau, made in Osaka, Japan'],

],'TBrc'),1);

