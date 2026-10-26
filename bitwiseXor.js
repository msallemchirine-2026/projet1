function bitwiseXor (a,b){
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
 
    let z = "";
    for (let i = 0; i < max; i++) {
        if (x[i] !== y[i]) {
            z += "1"; 
        } else {
            z += "0";
        }
    }
    
    return parseInt(z, 2);
}

let a = 7;
let b = 12;
console.log(bitwiseXor(a, b))