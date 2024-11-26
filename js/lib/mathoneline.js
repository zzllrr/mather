/*

one-line js for Math by zzllrr
@2024

*/


//自然数列
Array.from({length:11}, (_,i) => i)

//正整数
Array.from({length:11}, (_,i) => i+1)
	
//偶数
Array.from({length:11}, (_,i) => i*2)
//奇数
Array.from({length:11}, (_,i) => i*2+1)


//等差数列 
Array.from({length:n}, (_,i) => a1+i*d)
Array.from({length:11}, (_,i) => 0+i*2)



//等比数列 
Array.from({length:n}, (_,i) => a1*Math.pow(q,i))
Array.from({length:11}, (_,i) => 1*Math.pow(2,i))


//做加法 累加
A.reduce((i,j)=>i+j);

//做乘法 累乘
A.reduce((i,j)=>i*j);

//埃氏素数筛
var Prime=n=>{var A=Array.from({length:n}, (_,i) => i).slice(2), P=A.slice(0,1), pA=[], f=()=>{pA=A.map(i=>i*A[0]); A=A.filter(i => !pA.includes(i)).slice(1); A[0] && P.push(A[0])}; while(A.length){f()}; return P}; Prime(1000)

//n以内素数个数占比：π(n)/n 与 1/ln(n) 的差值，以及 1-Σ_{j=1}^π(n) 1/∏_{i=1}^j P_i   以及 1+(-1)^k Σ_{1≤i_1<i_2<...<i_k≤n} 1/∏_{j=1}^k P_{i_j}

var dx=n=>{var A=Prime(n), a=A.length/n, B=A.map((i,ii)=>1/A.slice(0,ii+1).reduce((i,j)=>i*j)), b=1-B.reduce((i,j)=>i+j); return [a, a-1/Math.log(n), b]};

//用上述末式计算素数占比（只支持最多20个质数，否则计算量太大，参数n最多100，即针对100以内的素数集）

var p=n=>{var A=Prime(n), An=A.length; return Array.from({length:1<<An}, (_,ii) =>{var i=ii.toString(2), t='0'.repeat(An-i.length)+i; return (t.split('').filter(i=>i=='1').length%2?-1:1)/t.split('').map((j,jj)=>+j?A[jj]:1).reduce((i,j)=>i*j) }).reduce((i,j)=>i+j)};


//π^4+π^5 ≈ e^6 探索类似的近似巧合式子（唯一解）

var A=[0,1,2,3,4,5,6,7,8,9],e=Math.pow(10,-4);A.map(i=>A.map(j=>A.map(k=>{var v=Math.abs( Math.pow(Math.PI,i)+Math.pow(Math.PI,j) - Math.pow(Math.E,k)); return i<=j && j<=k && v<e?'π^'+i+' + π^'+j+' ≈ e^'+k:''}).join('') ).join('')).filter(i=>i).join(';')

var A=Array.from({length: 1001}, (_,i) => i),e=Math.pow(10,-4);A.map(i=>A.map(j=>A.map(k=>{var v=Math.abs( Math.pow(Math.PI,i)+Math.pow(Math.PI,j) - Math.pow(Math.E,k)); return i<=j && j<=k && v<e?'π^'+i+' + π^'+j+' ≈ e^'+k:''}).join('') ).join('')).filter(i=>i).join(';')

//e^+e^ ≈ π^ 探索类似的近似巧合式子（无解）
var A=Array.from({length: 1001}, (_,i) => i),e=Math.pow(10,-4);A.map(i=>A.map(j=>A.map(k=>{var v=Math.abs( Math.pow(Math.E,i)+Math.pow(Math.E,j) - Math.pow(Math.PI,k)); return i<=j && v<e?'e^'+i+' + e^'+j+' ≈ π^'+k:''}).join('') ).join('')).filter(i=>i).join(';')
