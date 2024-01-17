const prompt = require("prompt-sync")();
let a='dog'
let b = a.length
let res=[]
for(let i=0;i<b;i++){
  for(let j=i+1;j<b+1;j++){
    res.push(a.slice(i,j))
}
}
console.log(res)