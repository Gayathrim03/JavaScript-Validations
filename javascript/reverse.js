const prompt = require("prompt-sync")();
let n = prompt("Enter a number")
let res=n.toString().split('').reverse().join('')
console.log(Number(res))