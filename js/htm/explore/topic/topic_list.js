/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

 

explore['Topic/Topic List']=
	Table([i18(ZLR('Name Type Features'))],[
		[inhref('wiki.html?q=Enclyclopedia','Enclyclopedia List'),'List',''],

		[href(H+'oeis.org','OEIS'),'','Online Encyclopedia of Integer Sequences - OEIS'],
		[href(Hs+'www.lmfdb.org','LMFDB - L-functions and Modular Forms Database'),'','modern handbook including tables, formulas, links, and references for L-functions and their underlying objects'],
		[href(H+'www.numbertheory.org','Number Theory Web'),'','数论大全 a collection of links to online information of interest to number theorists '+href('www.numbertheory.org/ntw/additions.html','new listings')],
		
		[href(Hs+'primes.utm.edu','the Prime pages'),'',href(Hs+'primes.utm.edu/glossary/index.php',gM('Glossary'))],
		
		[href(Hs+'www.mersenne.org','Mersenne Prime'),'',''],


		[href(H+'intranet.math.vt.edu/netmaps/','NET(Nearly Euclidean Thurston) Map'),'','contains papers, software and over 50,000 examples'],

		[href(H+'www.gogeometry.com','几何大全'),'',''],
		
		[href(Hs+'dlmf.nist.gov','NIST Digital Library of Mathematical Functions'),'','美国国家标准与技术研究院 National Institute of Standards and Technology - NIST , part of the U.S. Department of Commerce'],
		[href(Hs+'faculty.evansville.edu/ck6/encyclopedia/ETC.html','ETC'),'wiki','Encyclopedia of Triangle Centers by Clark Kimberling'],

		[href(Hs+'chrisvantienhoven.nl/mathematics/encyclopedia-of-poly-geometry','EPG'),'wiki','by Chris van Tienhoven'+ul([
			'EPG - Encyclopedia of Poly Geometry, dedicated to Poly-figures. A Poly-figure is a figure consisting of n points and/or n lines,	where n is a natural number.',
			href(Hs+'chrisvantienhoven.nl/mathematics/encyclopedia','EQF - Encyclopedia of Quadri-Figures')+' A Quadri-figure is a figure consisting of 4 points and/or 4 lines',
			href(Hs+'chrisvantienhoven.nl/mathematics/conic-sections','conic-sections'),
		])],



		[href(Hs+'mathoverflow.net','MO - MathOverflow.net'),gM('Q & A'),'Another platform '+href(Hs+'math.stackexchange.com','MSE - Math.StackExchange.com')],
		[href(Hs+'ncatlab.org','nLab'),gM('Notes'),''],


		[href(Hs+'www.cs.usfca.edu/~galles/visualization/Algorithms.html','Algorithms visualization'),'','数据结构和算法可视化演示'],

		[href(H+'www.mathcurve.com','Math Curve'),gM('Curve'),''],
		[href(H+'www.2dcurves.com','2D Curves'),gM('Curve'),''],

	],'TBrc')
;

	
