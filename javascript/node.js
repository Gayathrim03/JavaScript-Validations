const prompt = require("prompt-sync")();
var a = prompt("Enter value 1");
var b = prompt("Enter value 2");
var c = a.split("").sort().join();
var d = b.split("").sort().join();
if(c==d)
console.log("Anagram")
else
console.log("Not an Anagram")