const prompt = require("prompt-sync")();
var a = prompt("Enter no of elements");
var arr = [];
for(var i = 0; i < a; i++){
  arr[i]=prompt("Enter array element")}
  var r=prompt("Enter element to rotate");
  function rotateArray(arr, n) {
    n = n % arr.length; 
    return arr.slice(n).concat(arr.slice(0, n));
  }
  const rotatedArray = rotateArray(arr, r);
  console.log(rotatedArray); 
  