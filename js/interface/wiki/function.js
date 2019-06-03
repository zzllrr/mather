/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Function']=Kx(


detail('数学表达式类型 Expression',Table([['分类','算术表达式\nArithmetic','多项式\nPolynomial','代数式\nAlgebraic','封闭式\nClosed-form','解析式\nAnalytic','数学表达式\nMathematical']],[
	['常量\nConstant','√','√','√','√','√','√'],
	['变量\nVariable','√','√','√','√','√','√'],
	['初等算术运算（+-×÷）\nElementary arithmetic operation','√','√','√','√','√','√'],
	['阶乘\nFactorial','√','√','√','√','√','√'],
	['整数幂\nInteger exponent','×','√','√','√','√','√'],
	['$n$次根\n$N$-th kroot','×','×','√','√','√','√'],
	['有理数幂\nRational exponent','×','×','√','√','√','√'],
	['无理数幂\nIrrational exponent','×','×','×','√','√','√'],
	['对数\nLogarithm','×','×','×','√','√','√'],
	['三角函数\nTrigonometric function','×','×','×','√','√','√'],
	['反三角函数\nInverse trigonometric function','×','×','×','√','√','√'],
	['双曲函数\nHyperbolic function','×','×','×','√','√','√'],
	['反双曲函数\nInverse hyperbolic function','×','×','×','√','√','√'],
	['$Γ$函数\nGamma function','×','×','×','×','√','√'],
	['Bessel函数\nBessel function','×','×','×','×','√','√'],
	['特殊函数\nSpecial function','×','×','×','×','√','√'],
	['连分式\nContinued fraction','×','×','×','×','√','√'],
	['无穷级数\nInfinite series','×','×','×','×','√','√'],
	['形式幂级数\nFormal power series','×','×','×','×','×','√'],
	['微分\nDifferential','×','×','×','×','×','√'],
	['极限\nLimit','×','×','×','×','×','√'],
	['积分\nIntegral','×','×','×','×','×','√'],


],'wiki').replace(/\n/g,br))

);