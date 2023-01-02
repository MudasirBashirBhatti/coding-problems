function myFunc(){

let x = document.getElementById("base").value;
let base = Number(x)

let y = document.getElementById("power").value;
let power = Number(y);
let powerIs = Math.pow(base,power)
document.getElementById("outPut").innerHTML = powerIs;

}