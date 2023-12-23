/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

explore['Topic/Short Notes/Area']=
DCtv('floatl',

	XML.wrapE('MD',`
## <i18>Triangle</i18>

$A=1\\/2ab\\sin θ =1\\/2 \\vec{a}×\\vec{b}$

#### 证法：
1）根据外积
2）作高线，用正弦三角函数，求出高，用底边×高÷2得到
3）利用平行四边形（外接，过C点作c边平行线，c边上任取一个中间点，与C点连接，得边d，在c边两端点作两个d的平行边，得到平行四边形）
此时面积公式变成：三角形底边与底边上的伪高线（底边上任一内点，与底边所对的顶点连线），作外积，然后除以2
4）利用平行四边形（旋转对称拼接，共底边）


## <i18>Quadrilateral</i18>
$A=1\\/2pq\\sin θ=1\\/2 \\vec{p}×\\vec{q}$
其中$\\vec{p},\\vec{q}$是对角线
#### 证法：
1）将四边形置于外接平行四边形（边与两对角线分别平行），即可知道面积是平行四边形一半（平行四边形细分为4个子平行四边形，每个都被对角线平方为两半）。
2）四边形被两对角线分成4个三角形，每个三角形面积（利用中心角的两边外积的一半）相加，即得。
3）向量方法，$A = 1\\/2(\\vec{a}×\\vec{p}+\\vec{p}×\\vec{b}) = 1\\/2\\vec{p}×(\\vec{b}-\\vec{a}) = 1\\/2\\vec{p}×\\vec{q} $

### 四边形性质：
P1：两对角线分割的四块三角形，面积关系（利用等高模型，面积比值等于底边长比值）：上:右=左:下，即上×下=左×右


#### Q1: 已知四边形三边长，依次为$a,b,c$，夹角分别为$θ_1,θ_2$，求其面积及第四边边长？

#### A：
##### 方法一
延长一、三边（延长长度分别为$a_1，c_1$），交于一点，构成一个大三角形（顶角记为θ），利用此面积减去其中小三角形面积，得到余下的四边形面积。
$A=1\\/2(a+a_1)(c+c_1)\\sin θ - 1\\/2a_1c_1\\sin θ =1\\/2 \\sin θ ((a+a_1)c+a(c+c_1)-ac)$

其中，利用正弦定理有$\\frac{a+a_1}{\\sin θ_2} =\\frac{c+c_1}{\\sin θ_1} = \\frac{b}{\\sin θ} $
而 $θ=π-(θ_1+θ_2)$ ，则$\\sin θ = \\sin (θ_1+θ_2)$

从而得出$a_1、c_1$或者$a+a_1、c+c_1$的表达式，代入(1)式，得到

$A=1\\/2 (a b \\sin θ_1   + c b \\sin θ_2 - ac\\sin θ)$

约定$l_i$表示第$i$条边长，$θ_{ij}$或$θ_{i,j}$表示第$i$、$j$条边之间的夹角（注意，当下标大于多边形边数时，做模运算取余数），上式可写成
$A=1\\/2 (l_1 l_2 \\sin θ_{12}   + l_2 l_3 \\sin θ_{23} - l_1 l_3\\sin (θ_{12}+θ_{23}))$

*对上述公式右边，按照边长脚标简写（忽略系数、+号、正弦函数）*
*并且轮换编号，可以写出另3种形式，从而共有4种形式：*

12 23 -13
23 34 -24
34 41 -31
41 12 -42


将上述两个求四边形的面积公式相加（注意到编号是反交换的，即13和31，以及24和42，其编号顺序相反，相差一个正负符号，相加后抵消），有下列公式
 $4×2A=2 `+sum('','i=1','4','l_{i}l_{i+1}\\sin θ_{i,i+1}',0,'')+`$
则
$4A=`+sum('','i=1','4','l_{i}l_{i+1}\\sin θ_{i,i+1}',0,'')+`$

也即$2A=1\\/2`+sum('','i=1','4','l_{i}l_{i+1}\\sin θ_{i,i+1}',0,'')+`$ 这个公式也可以通过下列方法来理解：
两条对角线分别将四边形分割成2块（共4个三角形），将这4个三角形面积相加，则每一块小三角形的面积都被计算了2次，所以上述等式左边是2A
进一步化简，我们有任意四边形的面积公式
$A=1\\/4`+sum('','i=1','4','l_{i}l_{i+1}\\sin θ_{i,i+1}',0,'')+`$




例1：求梯形面积（边长依次为$\\sqrt{2},1+3+\\sqrt{3},2,3$，内角依次为45°,30°,150°,135°）
`+
	

	svgf.id('Trapezoid_diag" width="214" height="127"',
	svgf.path('M1 20 H114.6 L80 1 H20 z','#e36772')+
	svgf.path('M1 20 L80 1 M20 1 L114.6 20','#2f6e16" stroke-opacity="1" fill="none" fill-opacity="1" stroke-dasharray="10,5" stroke-dashoffset="0" stroke-linecap="butt"')
	,'1','','')

+`
使用上述公式，$A=1\\/4(\\sqrt{2}⋅(1+3+\\sqrt{3})⋅\\sin 45° + (1+3+\\sqrt{3})⋅2⋅\\sin (45°+30°) + 2⋅3⋅\\sin (90°+60°) + 3⋅\\sqrt{2}⋅\\sin (90°+45°))$
而使用标准的梯形面积公式，有$A=1\\/2(3+(1+3+\\sqrt{3}))⋅1$
不难通过计算，验证两公式结果相等。



为求出第四边边长d，在小三角形中使用余弦定理，得到$d=\\sqrt{a_1^2+c_1^2-2a_1c_1\\cos θ} =\\sqrt{(a_1+c_1)^2-2a_1c_1(\\cos θ+1)} $
上式进行代入化简后并不简洁。


##### 方法二
在四边形内部，作边b的两条高线，根据三角函数，分别求出其长度分别为$a\\sin θ_1, c\\sin θ_2$
四边形切割为一个直角梯形+两个直角三角形，因此得到总面积

 $A=1\\/2(a\\sin θ_1 + c\\sin θ_2)(b-(a\\cos θ_1 + c\\cos θ_2)) + 1\\/2a \\sin θ_1 a \\cos θ_1 + 1\\/2c \\sin θ_2 c \\cos θ_2 $
化简之后，也能得到(2)式

#### Q2: 已知四边形三边长，依次为a,b,c，求其面积及第四边边长d的最大值？

#### A：
根据(2)式，得知，当$θ_1=θ_2=90°$时，即四边形是直角梯形时，A取得最大值$1\\/2 (a+c)b$
此时，由勾股定理，第四边边长$d=\\sqrt{b^2+(c-a)^2}$


`+
	

	svgf.id('Quadrilateral_diag" width="214" height="127"',
	svgf.path('M32 1 L1 95 142 126 213 14z','#e36772')+
	svgf.path('M 32 1 L 142 126 M 1 95 L 213 14','#e369ff')+
	svgf.path('M1 1 L137 195 173 241','#2f6e16" stroke-opacity="1" fill="none" fill-opacity="1" stroke-dasharray="10,5" stroke-dashoffset="0" stroke-linecap="butt"')
	,'1','','')

+`
## <i18>Pentagon</i18>

将五边形沿任一条对角线分割为一个三角形+四边形，对面积求和
$A=1\\/2 (l_1 l_2 \\sin θ_{12}   + l_2l_3 \\sin θ_{23} - l_1l_3\\sin (θ_{12}+θ_{23})))+1\\/2 l_4l_5\\sin θ_{45}$

*类似地，选择另外的对角线，可以写出另4种形式*
*按照边长脚标简写（可以发现数字规律是轮换对称）*
12 23 -13 +45
23 34 -24 +51
34 45 -35 +12
45 51 -41 +23
51 12 -52 +34

从而有
$5×2A=3`+sum('','i=1','5','l_{i}l_{i+1}\\sin θ_{i,i+1}',0,'')+` - `+sum('','i=1','5','l_{i}l_{i+2}\\sin (θ_{i,i+1}+θ_{i+1,i+2})',0,'')+`  $
则

$A=1\\/{10}\\(3`+sum('','i=1','5','l_{i}l_{i+1}\\sin θ_{i,i+1}',0,'')+` - `+sum('','i=1','5','l_{i}l_{i+2}\\sin (θ_{i,i+1}+θ_{i+1,i+2})',0,'')+`\\)$


#### Q1: 已知五边形四边长，依次为$l_1,l_2,l_3,l_4$，夹角分别为$θ_1,θ_2,θ_3$，求其面积及第五边边长？

#### A：
##### 方法


## <i18>Hexagon</i18>

将六边形沿中间对角线切割为两个四边形，对面积求和

$A=1\\/2 (l_1 l_2 \\sin θ_{12}   + l_2 l_3 \\sin θ_{23}    + l_4 l_5 \\sin θ_{45}    + l_5 l_6 \\sin θ_{56}  - l_1 l_3 \\sin (θ_{12}+θ_{23}) - l_4 l_6 \\sin (θ_{45}+θ_{56}) )$

类似地，选择另外的对角线，可以写出另2种形式，
*按照边长脚标简写（可以发现数字规律是轮换对称）*
12 23 45 56 -13 -46
23 34 56 61 -24 -51
34 45 61 12 -35 -62

从而有
$3×2A=2 `+sum('','i=1','6','l_{i}l_{i+1}\\sin θ_{i,i+1}',0,'')+` - `+sum('','i=1','6','l_{i}l_{i+2}\\sin (θ_{i,i+1}+θ_{i+1,i+2})',0,'')+`  $
则

$A=1\\/{6} \\(2 `+sum('','i=1','6','l_{i}l_{i+1}\\sin θ_{i,i+1}',0,'')+` - `+sum('','i=1','6','l_{i}l_{i+2}\\sin (θ_{i,i+1}+θ_{i+1,i+2})',0,'')+`\\) $


## <i18>Heptagon</i18>





`)

)



;