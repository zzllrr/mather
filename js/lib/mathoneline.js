/*

one-line js for Math by zzllrr
@2024

*/


//自然数列
Array.from({length:11}, (_,i) => i)
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


//做加法
A.reduce((i,j)=>i+j);



//π^4+π^5 ≈ e^6 探索类似的近似巧合式子（唯一解）

var A=[0,1,2,3,4,5,6,7,8,9],e=Math.pow(10,-4);A.map(i=>A.map(j=>A.map(k=>{var v=Math.abs( Math.pow(Math.PI,i)+Math.pow(Math.PI,j) - Math.pow(Math.E,k)); return i<=j && j<=k && v<e?'π^'+i+' + π^'+j+' ≈ e^'+k:''}).join('') ).join('')).filter(i=>i).join(';')

var A=Array.from({length: 1001}, (_,i) => i),e=Math.pow(10,-4);A.map(i=>A.map(j=>A.map(k=>{var v=Math.abs( Math.pow(Math.PI,i)+Math.pow(Math.PI,j) - Math.pow(Math.E,k)); return i<=j && j<=k && v<e?'π^'+i+' + π^'+j+' ≈ e^'+k:''}).join('') ).join('')).filter(i=>i).join(';')

//e^+e^ ≈ π^ 探索类似的近似巧合式子（无解）
var A=Array.from({length: 1001}, (_,i) => i),e=Math.pow(10,-4);A.map(i=>A.map(j=>A.map(k=>{var v=Math.abs( Math.pow(Math.E,i)+Math.pow(Math.E,j) - Math.pow(Math.PI,k)); return i<=j && v<e?'e^'+i+' + e^'+j+' ≈ π^'+k:''}).join('') ).join('')).filter(i=>i).join(';')

