let x=[1,2,3,4,5,6]
let y=[4,5,6]
var z=[]

let sum=0
 for(i=0;i<x.length;i++){
     sum=x[i]
  z.push(sum)
 }
 for(i=0;i<y.length;i++){
     sum=y[i]
  z.push(sum)
 }
 
 console.log(z)
for(i=0;i<z.length;i++){
  for(j=0;j<z.length;j++){
    if(z[i]==z[j]&&i!=j){
      z.splice(i,1) 
      z.splice(j-1,1)
      i=0;
    }
  }
    
}

console.log(z)
