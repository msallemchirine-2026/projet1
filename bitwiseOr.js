function bitwiseOr (a,b){
let x= a.toString(2)
let y= b.toString(2) 
let max=x.length
if (max<y.length){
    max=y.length
}
 if (max==x.length){
    y=y.padStart(max,'0')
 }
 else {
    x=x.padStart(max,'0')
 }
 let w =""
 for (let i= 0;i<max;i++) {
   let z =Number (x[i]) |  Number  (y[i])
   w+=z
    
 }
 return parseInt(w,2)
}
let a=7
let b =12
console.log(bitwiseOr(a,b))